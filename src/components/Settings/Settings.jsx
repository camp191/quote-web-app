import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress'

import SettingsForm from './SettingsForm'

import Auth from '../../modules/Auth'
import api from '../../utils/api'

class Settings extends Component {
    constructor(props) {
        super(props)

        if(this.props.profile !== null) {
            this.state = {
                profileModal: false,
                error: '',
                profileEdit: {
                    name: this.props.profile.name,
                    sex: this.props.profile.sex,
                    description: this.props.profile.description,
                    id: this.props.profile._id
                }
            }
        }
    }

    handleProfileInput = (e) => {
        e.preventDefault()

        const value = e.target.value
        const field = e.target.name
        const profile = this.state.profileEdit
        profile[field] = value
        
        if(field === 'name' && profile[field].length > 5) {
            this.setState({
                error: ''
            })
        }

        this.setState({
            profileEdit: profile
        })
    }

    handleProfileOpen = () => {
        this.setState({profileModal: true})
    }

    handleProfileClose = () => {
        this.setState({profileModal: false})
        window.location.reload()
    }

    processForm = (e) => {
        e.preventDefault()

        if(this.state.profileEdit.name.length <= 5) {
            this.setState({
                error: 'Name must be than 5 characters'
            })
        } else {
            api.updateUser(this.state.profileEdit).then((response) => {
                this.handleProfileOpen()
            })
        }
    }

    render() {
        if(!Auth.isAuthenticate()) {
            return (
                <div>
                    <Redirect to="/" />
                </div>
            )
        }

        return (
            <div className="container container-margin">
                <h1 style={{
                    fontSize:"30px",
                    fontWeight:"300",
                    textAlign:"center"
                }}>Settings</h1>
                <hr/>
                <div style={{textAlign: 'center'}}>
                    {this.props.profile ? 
                        <SettingsForm
                            profile={this.props.profile}
                            handleProfileInput={this.handleProfileInput}
                            onSubmit={this.processForm}
                            profileEdit={this.state.profileEdit}
                            error={this.state.error}
                            profileModal={this.state.profileModal}
                            handleProfileClose={this.handleProfileClose}
                        /> :
                        <div style={{textAlign:'center', marginTop:'30px'}}>
                            <CircularProgress 
                                size={80} 
                                thickness={5}       
                            />
                        </div>
                    }
                </div>
            </div> 
        )
    }
}

export default Settings