import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const SignupForm = ({ onChange, onSubmit }) => (
    <div style={{margin: "0 40px"}}>
        <p className="member-header">Be one of Quote member...</p>
        <form action="/" onSubmit={onSubmit}>
            <TextField
                hintText="Andy Dee"
                floatingLabelText="Name"
                name="name"
                onChange={onChange}
                fullWidth={true}
            />
            <TextField
                hintText="example@example.com"
                floatingLabelText="Email"
                name="email"
                onChange={onChange}
                fullWidth={true}
            />
            <TextField
                floatingLabelText="Password"
                type="password"
                name="password"
                onChange={onChange}
                fullWidth={true}
            />
            <TextField
                floatingLabelText="Re-Password"
                type="password"
                name="repassword"
                onChange={onChange}
                fullWidth={true}
            />
            <RaisedButton
                type="submit"
                style={{marginTop: "24px", height: '45px'}}
                label="Sign Up"
                labelStyle={{lineHeight: '45px', color: 'white'}}
                fullWidth={true}
                backgroundColor="#4DB6AC"
            />
        </form>
    </div>
)

export default SignupForm