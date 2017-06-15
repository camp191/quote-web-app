import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import 'bulma/css/bulma.css'

class App extends Component {
    render() {
        return (
            <MultiThemeProvider>
                <Router>
                    <div>
                        Hello
                    </div>
                </Router>
            </MultiThemeProvider>
        )
    }
}

export default App
