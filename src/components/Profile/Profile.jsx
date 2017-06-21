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
            addModal: false,
            addLoading: false,
            error: '',
            quote: {
                quote: '',
                quoteBy: '',
                type: 'QuoteType'
            }
        }
    }

    clearInput = () => {
        this.setState({
            addLoading: false,
            error: '',
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

    handleAddModalOpen = () => {
        this.setState({addModal: true})
    }

    handleAddModalClose = () => {
        this.setState({addModal: false})
        this.props.handleMyQuote()
    }

    processForm = (e) => {
        e.preventDefault()

        this.setState({
            error: ''
        })

        let quote = {...this.state.quote}
        api.addQuote(quote)
            .then((response) => {

                this.setState({
                    addLoading: true
                })

                if(response.status === 200) {
                    this.setState({
                        addLoading: false,
                        quote: {
                            quote: '',
                            quoteBy: '',
                            type: 'QuoteType'
                        }
                    })

                    this.handleAddModalOpen()
                    
                } else if (response.status === 400) {
                    this.setState({
                        error: 'Please fill all of inputs',
                        addLoading: false
                    })
                }
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
                            loading={this.state.addLoading}
                            error={this.state.error}
                            quote={this.state.quote}
                            clearInput={this.clearInput}
                            handleInputChange={this.handleInputChange}
                            handleCheckBoxChange={this.handleCheckBoxChange}
                            onSubmit={this.processForm}
                            handleAddModalClose={this.handleAddModalClose}
                            isModalOpen={this.state.addModal}
                        />
                    </div>
                </div>
                <ProfileQuote 
                    myQuotes={this.props.myQuotes}
                />
            </div>
        )
    }
}

export default Profile