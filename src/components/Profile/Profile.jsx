import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress';

import ProfileUser from './ProfileUser'
import ProfileQuote from './ProfileQuote'
import AddQuote from './AddQuote'

import Auth from '../../modules/Auth'

class Profile extends Component {

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
                <div className="columns">
                    <div className="column is-4">
                        {this.props.profile === null ?
                            <CircularProgress /> :
                            <ProfileUser 
                                profile={this.props.profile}
                            />
                        }
                    </div>
                    <div className="column is-8">
                        <AddQuote />
                    </div>
                </div>
                <ProfileQuote />
            </div>
        )
    }
}

export default Profile