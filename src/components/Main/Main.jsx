import React, {Component} from 'react'
import { Redirect } from 'react-router-dom' 
import ExampleSlider from './ExampleSlider'
import Member from './Member'

import Auth from './../../modules/Auth'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state={
            redirect: false
        }

        this.loginRedirect = this.loginRedirect.bind(this)
    }

    loginRedirect() {
        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to="/home" />)
        }

        if(Auth.isAuthenticate()) {
            return (<Redirect to="/home" />)
        }

        return (
            <div className="container container-margin">
                <div className="columns">
                    <div className="column is-7">
                        <h1 style={{
                            fontSize: "30px",
                            textAlign: "center",
                            margin: "15px 0px",
                            fontWeight: "bold"
                        }}>
                            Words | Phases | Sentences</h1>
                        <h1 style={{
                            fontSize: "25px",
                            textAlign: "center",
                            fontWeight: "300"
                        }}>
                            There is no better way to encourage your life than <i>"Quote"</i>.
                        </h1>
                        <ExampleSlider />
                    </div>
                    <div className="column">
                        <Member 
                            loginRedirect={this.loginRedirect}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main