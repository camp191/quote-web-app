import React, { Component } from 'react'
import LoginForm from './../components/Main/LoginForm'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: {},
            user: {
                email: '',
                password: ''
            }
        }

        this.processForm = this.processForm.bind(this)
        this.setUser = this.setUser.bind(this)
    }

    processForm(e) {
        e.preventDefault()

        console.log('email: ', this.state.user.email)
        console.log('password', this.state.user.password)
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
            />
        )
    }
}

export default LoginPage