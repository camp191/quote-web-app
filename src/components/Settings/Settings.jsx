import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

import Auth from '../../modules/Auth'

class Settings extends Component {
    state = {  }
    render() {
        if(!Auth.isAuthenticate()) {
            return (
                <div>
                    <Redirect to="/" />
                </div>
            )
        }

        const styles = {
        block: {
            maxWidth: 250,
        },
        radioButton: {
            marginBottom: 16,
        },
        }

        return (
            <div className="container container-margin">
                <h1 style={{
                    fontSize:"30px",
                    fontWeight:"500",
                    textAlign:"center"
                }}>Settings</h1>
                <hr/>
                <h2>Avatar</h2>
                <div>
                    <h3>Profile Picture</h3>
                    <input type="file"/>
                    <hr/>
                </div>
                <div>
                    <h3>Imformation</h3>
                    <h4>Name*</h4>
                    <TextField
                        hintText="Hint Text"
                    /><br />
                    <h4>Description</h4>
                    <TextField
                        hintText="Description"
                        multiLine={true}
                        rowsMax={4}
                    /><br />
                    <h4>Email</h4>
                    <TextField
                        disabled={true}
                        hintText="Hint Text"
                    /><br />
                    <h4>Sex</h4>
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
                    <RaisedButton label="Primary" primary={true} />
                </div>
            </div> 
        )
    }
}

export default Settings