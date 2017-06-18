import React, { Component } from 'react'
import HeaderNav from './../components/Header/HeaderNav'
import api from './../utils/api'
import Auth from './../modules/Auth'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            profile: null
        }
    }

    componentDidMount() {
        api.getUser().then((response) => {
            this.setState({
                profile: response.data
            })
        })
    }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    logoutUser = () => {
        this.handleClose()
        api.logout()
        Auth.deAuthenticateUser()
    }

    render() {
        return (
            <HeaderNav 
                profile={this.state.profile}
                open={this.state.open}
                handleToggle={this.handleToggle}
                handleClose={this.handleClose}
                logoutUser={this.logoutUser}
            />
        )
    }
}

export default Header