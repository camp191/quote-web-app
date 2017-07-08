import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'bulma/css/bulma.css'
import '../css/Style.css'
import 'font-awesome/css/font-awesome.css'

import Header from './Header/Header'
import Footer from './Footer'
import Route from './RouteContent'

import Auth from '../modules/Auth'
import api from '../utils/api'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            myQuotes: [],
            allQuotes: []
        }

        this.loadProfile = this.loadProfile.bind(this)
        this.updateMyQuotes = this.updateMyQuotes.bind(this)
    }

    componentDidMount() {
        if(Auth.isAuthenticate()) {
            this.reloadProfile()

            api.getUserQuote().then((response) => {
                let reverseResponse = response.reverse()
                this.setState(() => {
                    return {
                        myQuotes: reverseResponse
                    }
                })
            })

            api.getAllQuotes().then((response) => {
                let reverseResponse = response.reverse()
                this.setState(() => {
                    return {
                        allQuotes: reverseResponse
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

    reloadProfile() {
        api.getUser().then((response) => {
            this.setState({
                profile: response.data
            })
        })
    }

    updateMyQuotes() {
        this.setState({myQuotes: []})
        api.getUserQuote().then((response) => {
            let reverseResponse = response.reverse()
            this.setState({myQuotes: reverseResponse})
        })

        api.getAllQuotes().then((response) => {
            let reverseResponse = response.reverse()
            this.setState({allQuotes: reverseResponse})
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
                            allQuotes={this.state.allQuotes}
                            handleMyQuote={this.updateMyQuotes}
                            reloadProfile={this.reloadProfile}
                        />
                        <Footer />
                    </div>
                </Router>
            </MultiThemeProvider>
        )
    }
}

export default App
