import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import SettingsForm from './SettingsForm'

import Auth from '../../modules/Auth'
import api from '../../utils/api'

class Settings extends Component {
    constructor(props) {
        super(props)

        if(this.props.profile !== null) {
            this.state = {
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

        this.setState({
            profileEdit: profile
        })
    }

    processForm = (e) => {
        e.preventDefault()

        if(this.state.profileEdit.name === '') {
            console.log("Error Please name your name")
        } else {
            api.updateUser(this.state.profileEdit).then((response) => {
                window.location.reload()
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
                        /> :
                        "Hello"
                    }
                </div>
            </div> 
        )
    }
}

export default Settings