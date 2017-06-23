import React from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
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

const ProfileForm = () => (
    <div style={styles.wrapper}>
        <Paper style={styles.paper} zDepth={2}>
            <form action="/">
                <div>
                    <h2 style={styles.header}>Avatar</h2>
                    <h3>Profile Picture</h3>
                    <input type="file"/>
                    <hr/>
                </div>
                <div style={styles.topicSetting}>
                    <h2 style={styles.header}>Imformation</h2>
                    <div>
                        <h3>Name*</h3>
                        <TextField
                            style={styles.textField}
                            hintText="สมยศ มั่งมี"
                        />
                    </div>
                    <div style={styles.topicSetting}>
                        <h3>Description</h3>
                        <TextField
                            style={styles.textField}
                            hintText="Fulltime Figther, Parttime Daydreamer..."
                            multiLine={true}
                            rowsMax={4}
                        />
                    </div>
                    <div style={styles.topicSetting}>
                        <h3>Email</h3>
                        <TextField
                            style={styles.textField}
                            disabled={true}
                            hintText="Example@example.com"
                        />
                    </div>
                    <div style={styles.topicSetting}>
                        <h3>Sex</h3>
                        <RadioButtonGroup name="shipSpeed">
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
    </div>
)

export default ProfileForm