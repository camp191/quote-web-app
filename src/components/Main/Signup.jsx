import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Signup extends Component {
    render() {
        return (
            <div style={{margin: "0 40px"}}>
                <p className="member-header">Be one of the member of Quote...</p>
                <TextField
                    hintText="Andy Dee"
                    floatingLabelText="Name"
                    fullWidth={true}
                />
                <TextField
                    hintText="example@example.com"
                    floatingLabelText="Email"
                    fullWidth={true}
                />
                <TextField
                    floatingLabelText="Password"
                    fullWidth={true}
                />
                <TextField
                    floatingLabelText="Re-Password"
                    fullWidth={true}
                />
                <RaisedButton
                    style={{marginTop: "24px", height: '45px'}}
                    label="Sign Up"
                    labelColor="white"
                    labelStyle={{lineHeight: '45px'}}
                    fullWidth={true}
                    backgroundColor="#4DB6AC"
                />
            </div>
        )
    }
}

export default Signup