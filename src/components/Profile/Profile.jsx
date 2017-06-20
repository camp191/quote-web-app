import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress';

import ProfileUser from './ProfileUser'
import ProfileQuote from './ProfileQuote'
import AddQuote from './AddQuote'

import Auth from '../../modules/Auth'
import api from '../../utils/api'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quote: {
                quote: '',
                quoteBy: '',
                type: 'QuoteType'
            }
        }
    }

    clearInput = () => {
        this.setState({
            quote: {
                quote: '',
                quoteBy: '',
                type: 'QuoteType'
            }
        })
    }

    handleCheckBoxChange = (e, value) => {
        e.preventDefault()

        this.setState({
            quote: {
                ...this.state.quote,
                type: value
            }
        })
    }

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

    processForm = (e) => {
        e.preventDefault()
        let quote = {...this.state.quote}

        api.addQuote(quote)
            .then((response) => {
                console.log(response)
            }).catch(e => {
                console.log(e)
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
                            clearInput={this.clearInput}
                            handleInputChange={this.handleInputChange}
                            handleCheckBoxChange={this.handleCheckBoxChange}
                            onSubmit={this.processForm}
                        />
                    </div>
                </div>
                <ProfileQuote />
            </div>
        )
    }
}

export default Profile