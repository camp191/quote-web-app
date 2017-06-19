import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'bulma/css/bulma.css'
import '../css/Style.css'
import 'font-awesome/css/font-awesome.css'

import Header from './../containers/Header'
import Footer from './Footer'
import Route from './RouteContent'

import Auth from '../modules/Auth'
import api from '../utils/api'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: null
        }

        this.loadProfile = this.loadProfile.bind(this)
    }

    componentDidMount() {
        if(Auth.isAuthenticate()) {
            api.getUser().then((response) => {
                this.setState(() => {
                    return {
                        profile: response.data
                    }
                })
            })
        }
    }

    loadProfile(profile) {
        this.setState({
            profile
        })
    }

    render() {
        return (
            <MultiThemeProvider>
                <Router>
                    <div>
                        <Header profile={this.state.profile} />
                        <Route 
                            loadProfile={this.loadProfile}
                            profile={this.state.profile}
                        />
                        <Footer />
                    </div>
                </Router>
            </MultiThemeProvider>
        )
    }
}

export default App
