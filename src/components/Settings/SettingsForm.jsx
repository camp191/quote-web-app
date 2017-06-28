import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
        display: 'inline-block', 
        width: '150px'
    },
    paper: {
        width: '50%',
        margin: 20,
        padding: 40,
        display: 'inline-block',
        textAlign: 'left'
    },
    wrapper: {
        textAlign: 'center'
    },
    header: {
        fontSize: '24px',
        fontWeight: '300',
        marginBottom: 20
    },
    textField: {
        width: '100%'
    },
    topicSetting: {
        margin: '20px 0'
    }
}

const SettingsForm = ({
            profile, 
            profileEdit, 
            error, 
            handleProfileInput, 
            onSubmit,
            profileModal,
            handleProfileClose
        }) => (
    <div style={styles.wrapper}>
        <Paper style={styles.paper} zDepth={2}>
            <form>
                <div>
                    <h2 style={styles.header}>Avatar</h2>
                    <h3>Profile Picture</h3>
                    <input 
                        name="image"
                        type="file" 
                    />
                    <RaisedButton
                        type="submit"
                        style={styles.submitBtn}
                        label="Submit" 
                        fullWidth={true}
                        primary={true} />
                    <hr/>
                </div>
            </form>
            <form action="/" onSubmit={onSubmit}>
                <div style={styles.topicSetting}>
                    <h2 style={styles.header}>Imformation</h2>
                    <div>
                        <h3>Name*</h3>
                        <TextField
                            name="name"
                            onChange={handleProfileInput}
                            style={styles.textField}
                            errorText={error}
                            hintText="Adam Goodman"
                            value={profileEdit.name ? profileEdit.name : undefined}
                        />
                    </div>
                    <div style={styles.topicSetting}>
                        <h3>Description</h3>
                        <TextField
                            name="description"
                            onChange={handleProfileInput}
                            style={styles.textField}
                            hintText="Fulltime Figther, Parttime Daydreamer..."
                            multiLine={true}
                            rowsMax={4}
                            value={profileEdit.description ? profileEdit.description : undefined}
                        />
                    </div>
                    <div style={styles.topicSetting}>
                        <h3>Email</h3>
                        <TextField
                            style={styles.textField}
                            disabled={true}
                            hintText="Example@example.com"
                            value={profile.email}
                        />
                    </div>
                    <div style={styles.topicSetting}>
                        <h3>Sex</h3>
                        <RadioButtonGroup 
                            name="sex" 
                            defaultSelected={profile.sex ? profile.sex : null}
                            onChange={handleProfileInput}
                        >
                            <RadioButton
                                value="male"
                                label="Male"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value="female"
                                label="Female"
                                style={styles.radioButton}
                            />
                        </RadioButtonGroup>
                    </div>
                    <RaisedButton
                        type="submit"
                        style={styles.submitBtn}
                        label="Submit" 
                        fullWidth={true}
                        primary={true} />
                </div>
            </form>
        </Paper>
        <div>
            <Dialog
            actions={[<FlatButton
                        label="Discard"
                        primary={true}
                        onTouchTap={handleProfileClose}
                    />]}
            modal={false}
            open={profileModal}
            onRequestClose={handleProfileClose}
            >
                Successfully to save your profile
            </Dialog>
        </div>
    </div>
)

SettingsForm.propTypes = {
    profile: PropTypes.object.isRequired,
    profileEdit: PropTypes.object.isRequired,
    handleProfileInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    profileModal: PropTypes.bool.isRequired,
    handleProfileClose: PropTypes.func.isRequired
}

export default SettingsForm