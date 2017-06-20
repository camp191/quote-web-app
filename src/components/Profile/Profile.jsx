import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress';

import ProfileUser from './ProfileUser'
import ProfileQuote from './ProfileQuote'
import AddQuote from './AddQuote'

import Auth from '../../modules/Auth'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quoteType: 1,
            quote: {
                quoteName: '',
                quoteBy: '',
            }
        }
    }

    clearInput = () => {
        this.setState({
            quoteType: 1,
            quote: {
                quoteName: '',
                quoteBy: '',
            }
        })
    }

    handleCheckBoxChange = (event, index, value) => this.setState({quoteType: value});

    handleInputChange = (e) => {
        e.preventDefault()

        let value = e.target.value
        let field = e.target.name
        let quote = this.state.quote
        quote[field] = value

        this.setState({
            quote
        })
    }

    render() {
        if(!Auth.isAuthenticate()) {
            return (
                <div>
                    <Redirect to="/" />
                </div>
            )
        }

        return (
            <div className="container container-margin">
                <div className="columns">
                    <div className="column is-4">
                        {this.props.profile === null ?
                            <CircularProgress /> :
                            <ProfileUser 
                                profile={this.props.profile}
                            />
                        }
                    </div>
                    <div className="column is-8">
                        <AddQuote 
                            quote={this.state.quote}
                            quoteType={this.state.quoteType}
                            clearInput={this.clearInput}
                            handleInputChange={this.handleInputChange}
                            handleCheckBoxChange={this.handleCheckBoxChange}
                        />
                    </div>
                </div>
                <ProfileQuote />
            </div>
        )
    }
}

export default Profile