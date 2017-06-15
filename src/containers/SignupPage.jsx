import React, { Component } from 'react'
import SignupForm from './../components/Main/SignupForm'

class SignupPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: '',
                repassword: ''
            }
        }

        this.processForm = this.processForm.bind(this)
        this.setUser = this.setUser.bind(this)
    }

    setUser(e) {
        const field = e.target.name
        const user = this.state.user

        user[field] = e.target.value
        this.setState({
            user
        })
    }

    processForm(e) {
        e.preventDefault()

        console.log('email: ', this.state.user.email)
        console.log('name: ', this.state.user.name)
        console.log('password: ', this.state.user.password)
    }

    render() {
        return (
            <SignupForm 
                onSubmit={this.processForm}
                onChange={this.setUser}
            />
        )
    }
}

export default SignupPage