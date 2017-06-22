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
            profile: null,
            myQuotes: []
        }

        this.loadProfile = this.loadProfile.bind(this)
        this.updateMyQuotes = this.updateMyQuotes.bind(this)
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

            api.getUserQuote().then((response) => {
                let reverseResponse = response.reverse()
                this.setState(() => {
                    return {
                        myQuotes: reverseResponse
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

    updateMyQuotes() {
        this.setState({myQuotes: []})
        api.getUserQuote().then((response) => {
            let reverseResponse = response.reverse()
            this.setState({myQuotes: reverseResponse})
        })
    }

    render() {
        return (
            <MultiThemeProvider>
                <Router>
                    <div>
                        <Header 
                            profile={this.state.profile}
                            updateMyQuotes={this.updateMyQuotes}
                        />
                        <Route 
                            loadProfile={this.loadProfile}
                            profile={this.state.profile}
                            myQuotes={this.state.myQuotes}
                            handleMyQuote={this.updateMyQuotes}
                        />
                        <Footer />
                    </div>
                </Router>
            </MultiThemeProvider>
        )
    }
}

export default App
