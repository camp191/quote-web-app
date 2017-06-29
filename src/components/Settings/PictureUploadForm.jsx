import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

import request from 'superagent'
import Dropzone from 'react-dropzone'

import api from './../../utils/api'
import config from './../../config'

class PictureUploadForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedFile: [],
            uploadedFileCloudinaryUrl: '',
            userID: this.props.profile._id,
            open: false,
            loading: false
        }
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files
        })
    }

    handleImageUpload(file) {

        this.setState({
            loading: true
        })

        let upload = request.post(config.CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', config.CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file)

        upload.end((err, response) => {
        if (err) {
            console.error(err)
        }

        if (response.body.secure_url !== '') {
            this.setState({
                uploadedFileCloudinaryUrl: response.body.secure_url
            })

            api.updateImage(this.state.userID, this.state.uploadedFileCloudinaryUrl)
                .then((response) => {
                    this.setState({
                        loading: false
                    })

                    this.handleOpen()
                })
        }
        })
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
        window.location.reload()
    }

    render() {
        const styles = {
            box: {
                margin: '20px 40px'
            },
            dropzone: {
                width : '100%', 
                minHeight: '100px', 
                border : '3px dashed #CCCCCC', 
                textAlign: 'center', 
                cursor: 'pointer',
                padding: '10px'
            }
        }

        return (
            <div>
                <div style={styles.box}>
                    <Dropzone
                        style={styles.dropzone}
                        multiple={false}
                        accept="image/*"
                        maxSize={100000}
                        onDrop={this.onImageDrop.bind(this)}>
                        <div>
                            {this.state.uploadedFile.length === 0 
                                ? <div>Drop or Click to Upload image. Max Size 100kb</div> 
                                :
                                <div>
                                    {this.state.uploadedFile.map((file) => 
                                        <img alt="Profile" key={file.name} src={file.preview} /> 
                                    )}
                                </div>
                            }
                        </div>
                    </Dropzone>
                </div>
                <RaisedButton
                    onTouchTap={this.handleImageUpload.bind(this, this.state.uploadedFile[0])}
                    label={this.state.loading ? 
                        <CircularProgress 
                            size={30} 
                            style={{marginTop: '2px'}} 
                            color='white' 
                        /> :
                        "Upload"
                    }
                    fullWidth={true}
                    primary={true}
                    style={{height: '36px'}}
                    labelStyle={{lineHeight: '36px', color: 'white'}}
                />
                <div>
                <Dialog
                    actions={[<FlatButton
                                label="Discard"
                                primary={true}
                                onTouchTap={this.handleClose}
                            />]}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Successfully to save your Picture
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default PictureUploadForm