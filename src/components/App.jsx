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
import Main from './Main/Main'
import Home from './Home/Home'
import Developer from './Delveloper'
import PageNotFound from './PageNotFound'

class App extends Component {
    render() {
        return (
            <MultiThemeProvider>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Main} />
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
