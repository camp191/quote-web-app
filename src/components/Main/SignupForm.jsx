import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

const SignupForm = ({ onChange, onSubmit, user, errors, isOpen, handleClose, loading, loadingProcess }) => (
    <div style={{margin: "0 40px"}}>
        <p className="member-header">Be one of Quote member...</p>
        <form action="/" onSubmit={onSubmit}>
            <div className="field-height">
                <TextField
                    hintText="Andy Dee"
                    floatingLabelText="Name"
                    name="name"
                    onChange={onChange}
                    errorText={errors.name}
                    fullWidth={true}
                    value={user.name}
                />
            </div>
            <div className="field-height">
                <TextField
                    hintText="example@example.com"
                    floatingLabelText="Email"
                    name="email"
                    onChange={onChange}
                    errorText={errors.email}
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
                    errorText={errors.password}
                    fullWidth={true}
                    value={user.password}
                />
            </div>
            <RaisedButton
                type="submit"
                style={{marginTop: "40px", height: '45px'}}
                label={loading ?
                    <CircularProgress 
                        size={30} 
                        color="white"
                        style={{marginTop: '8px'}}
                    />
                    : "Sign up"
                }
                labelStyle={{lineHeight: '45px', color: 'white'}}
                fullWidth={true}
                backgroundColor="#FFAB00"
                onTouchTap={loadingProcess}
            />
        </form>
        <Dialog
          title="Sign up Done"
          actions={[
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={handleClose}
            />
        ]}
          modal={false}
          open={isOpen}
          onRequestClose={handleClose}
        >
          Thank you {user.name} for Sign up. Let's Log in and go to Quote world
        </Dialog>
    </div>
)

SignupForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default SignupForm