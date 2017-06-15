import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'bulma/css/bulma.css'
import '../css/Style.css'

import Header from './Header'
import Main from './Main/Main'
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
                            <Route path="/developer" component={Developer} />
                            <Route render={() => {
                                return <PageNotFound />
                            }} />
                        </Switch>
                    </div>
                </Router>
            </MultiThemeProvider>
        )
    }
}

export default App
