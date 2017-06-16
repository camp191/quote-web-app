import React, { Component } from 'react'
import SignupForm from './../components/Main/SignupForm'
import validator from 'validator'
import api from './../utils/api.js'

class SignupPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: ''
            },
            open: false,
            loading: false
        }

        this.processForm = this.processForm.bind(this)
        this.setUser = this.setUser.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.loadingProcess = this.loadingProcess.bind(this)
    }

    setUser(e) {
        const field = e.target.name
        const user = this.state.user

        user[field] = e.target.value
        this.setState({
            user
        })
    }

    handleClose() {
        this.setState({
            user: {
                email: '',
                name: '',
                password: ''
            },
            open: false
        })
    }

    loadingProcess() {
        if(this.state.errors !== {}) {
            this.setState({
                loading: false
            })
        } else if (this.state.errors === {}) {
            this.setState({
                loading: true
            })
        }
    }

    processForm(e) {
        e.preventDefault()

        api.signup(this.state.user)
            .then((res) => {
                if(res.status === 200) {
                    console.log('Form is valid')

                    this.setState({
                        errors: {},
                        loading: false
                    })

                    this.setState({open: true})

                } else {
                    const namelength = this.state.user.name.length
                    const passwordlength = this.state.user.password.length
                    const emailCheck = validator.isEmail(this.state.user.email)

                    var nameResult = true
                    var passwordResult = true

                    this.setState({
                        errors: {}
                    })

                    if(namelength < 5) {
                        nameResult = false
                        this.setState({
                            errors: {
                                ...this.state.errors,
                                name: 'Name must be than 5 characters'
                            }
                        })
                    }

                    if(passwordlength < 6 || passwordlength > 12) {
                        passwordResult = false
                        this.setState({
                            errors: {
                                ...this.state.errors,
                                password: 'Password must be between 6-12 characters'
                            }
                        })
                    }

                    if(!emailCheck){
                        this.setState({
                            errors: {
                                ...this.state.errors,
                                email: 'Please provide your right email'
                            }
                        })
                    } else if(nameResult && passwordResult && emailCheck) {
                        this.setState({
                            errors: {
                                ...this.state.errors,
                                email: 'Your Email was using'
                            }
                        })
                    }
                }
            }).catch((e) => {
                console.log(e)
            })
    }

    render() {
        return (
            <SignupForm 
                user={this.state.user}
                errors={this.state.errors}
                isOpen={this.state.open}
                loading={this.state.loading}
                onSubmit={this.processForm}
                onChange={this.setUser}
                handleClose={this.handleClose}
                loadingProcess={this.loadingProcess}
            />
        )
    }
}

export default SignupPage