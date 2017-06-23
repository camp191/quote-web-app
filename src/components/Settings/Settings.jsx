import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import ProfileForm from './ProfileForm'

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

        return (
            <div className="container container-margin">
                <h1 style={{
                    fontSize:"30px",
                    fontWeight:"300",
                    textAlign:"center"
                }}>Settings</h1>
                <hr/>
                <div style={{textAlign: 'center'}}>
                    <ProfileForm />
                </div>
            </div> 
        )
    }
}

export default Settings