import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from './../../utils/api.js'
import LoginForm from './LoginForm'
import Auth from './../../modules/Auth.js'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: {},
            user: {
                email: '',
                password: ''
            },
            loading: false
        }

        this.processForm = this.processForm.bind(this)
        this.setUser = this.setUser.bind(this)
    }

    processForm(e) {
        e.preventDefault()

        this.setState({
            loading: true
        })

        api.login(this.state.user)
            .then((res) => {
                if(res.status === 200) {
                    this.setState({error: {}})

                    Auth.authenticateUser(res.headers["x-auth"])
                    
                    api.getUser().then((response) => {
                        return this.props.loadProfile(response.data)
                    })

                    this.props.handleMyQuote()

                    this.props.loginRedirect()
                } else {
                    this.setState({
                        loading: false,
                        error: {
                            message: "Wrong Email or Password"
                        }
                    })
                }
            }).catch((e) => {
                console.log(e)
            })
    }

    setUser(e) {
        const field = e.target.name
        const user = this.state.user

        user[field] = e.target.value

        this.setState({
            user
        })
    }

    render() {
        return (
            <LoginForm 
                onSubmit={this.processForm}
                onChange={this.setUser}
                user={this.state.user}
                error={this.state.error}
                isLoading={this.state.loading}
            />
        )
    }
}

LoginPage.propTypes = {
    loadProfile: PropTypes.func.isRequired
}

export default LoginPage