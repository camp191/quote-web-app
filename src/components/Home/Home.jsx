import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Auth from '../../modules/Auth'

class Home extends Component {

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
                <h1>Hello World</h1>
            </div> 
        )
    }
}

export default Home