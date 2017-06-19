import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'bulma/css/bulma.css'
import '../css/Style.css'

import Header from './../containers/Header'
import Footer from './Footer'
import Main from './../containers/Main'
import Home from './Home/Home'
import Developer from './Delveloper'
import PageNotFound from './PageNotFound'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: null
        }

        this.loadProfile = this.loadProfile.bind(this)
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
                        <Header 
                            profile={this.state.profile}
                        />
                        <Switch>
                            <Route 
                                exact 
                                path="/" 
                                component={(props) => 
                                    <Main 
                                        {...props} 
                                        loadProfile={this.loadProfile} 
                                    />
                                } 
                            />
                            <Route path="/developer" component={(props) => <Developer {...props} Hello="Hello" />} />
                            <Route path="/home" component={Home} />
                            <Route render={() => {
                                return <PageNotFound />
                            }} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </MultiThemeProvider>
        )
    }
}

export default App
