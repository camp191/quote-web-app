import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const LoginForm = ({ onChange, onSubmit, user }) => (
    <div style={{margin: "0 40px"}}>
        <p className="member-header">Log in to your Quote account</p>
        <form action="/" onSubmit={onSubmit}>
            <div className="field-height">
                <TextField
                    hintText="example@example.com"
                    floatingLabelText="Email"
                    name="email"
                    onChange={onChange}
                    fullWidth={true}
                    value={user.email}
                />
            </div>
            <div className="field-height">
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    fullWidth={true}
                    value={user.password}
                />
            </div>
            <RaisedButton
                type="submit"
                style={{marginTop: "30px", height: "45px"}}
                label="Log In"
                labelStyle={{lineHeight: '45px', color: 'white'}}
                fullWidth={true}
                backgroundColor="#FFAB00"
            />
        </form>
        <h1 className="member-footer">Don't have an Account ?, Sign up <u>Here</u></h1>
    </div>
)

LoginForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

export default LoginForm