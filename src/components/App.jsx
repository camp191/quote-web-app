import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'bulma/css/bulma.css'

import Header from './Header'
import Home from './Home'
import Developer from './Delveloper'

class App extends Component {
    render() {
        return (
            <MultiThemeProvider>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/developer" component={Developer} />
                            <Route render={() => {
                                return <h1>Page not Found</h1>
                            }} />
                        </Switch>
                    </div>
                </Router>
            </MultiThemeProvider>
        )
    }
}

export default App
