import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {
    render() {
        return (
            <div style={{margin: "0 40px"}}>
                <p className="member-header">Log in to your Quote account</p>
                <TextField
                    hintText="example@example.com"
                    floatingLabelText="Email"
                    fullWidth={true}
                />
                <TextField
                    floatingLabelText="Password"
                    fullWidth={true}
                />
                <RaisedButton
                    style={{marginTop: "30px", height: "45px"}}
                    label="Log In"
                    labelColor="white"
                    labelStyle={{lineHeight: '45px'}}
                    fullWidth={true}
                    backgroundColor="#4DB6AC"
                />
                <h1 className="member-footer">Don't have Account, Sign up <u>Here</u></h1>
            </div>
        )
    }
}

export default Login