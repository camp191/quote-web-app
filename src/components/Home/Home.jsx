import React, { Component } from 'react'
import Auth from '../../modules/Auth'
import { Redirect } from 'react-router-dom'

class Home extends Component {
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
           <div>Home Page</div> 
        )
    }
}

export default Home