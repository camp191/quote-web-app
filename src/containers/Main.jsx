import React, {Component} from 'react'
import { Redirect } from 'react-router-dom' 
import ExampleSlider from './../components/Main/ExampleSlider'
import Member from './../components/Main/Member'

import Auth from './../modules/Auth'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state={
            redirect: false,
            tabs: 'signup'
        }

        this.loginRedirect = this.loginRedirect.bind(this)
        this.tabChange = this.tabChange.bind(this)
    }

    loginRedirect() {
        this.setState({
            redirect: true
        })
    }

    tabChange(value) {
        this.setState({
            tabs: value,
        });
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
                            loadProfile={this.props.loadProfile}
                            loginRedirect={this.loginRedirect}
                            tabs={this.state.tabs}
                            tabChange={this.tabChange}
                            handleMyQuote={this.props.handleMyQuote}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main