import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderNav from './HeaderNav'
import api from './../../utils/api.js'
import Auth from './../../modules/Auth.js'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => {
        this.setState({open: false})

        this.props.updateMyQuotes()
    }

    logoutUser = () => {
        this.handleClose()
        api.logout()
        Auth.deAuthenticateUser()
    }

    render() {
        return (
            <HeaderNav 
                profile={this.props.profile}
                open={this.state.open}
                handleToggle={this.handleToggle}
                handleClose={this.handleClose}
                logoutUser={this.logoutUser}
            />
        )
    }
}

Header.propTypes = {
    updateMyQuotes: PropTypes.func.isRequired
}

export default Header