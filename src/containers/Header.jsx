import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Subheader from 'material-ui/Subheader'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

import Home from 'material-ui/svg-icons/action/home'
import Exit from 'material-ui/svg-icons/action/exit-to-app'
import Settings from 'material-ui/svg-icons/action/settings'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'

import ProfileNav from '../components/Header/ProfileNav'

import Auth from './../modules/Auth'
import api from './../utils/api'

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
            <div>
                <AppBar 
                    title={
                        <NavLink 
                            to='/' 
                            style={{color: 'white'}}>
                            Quote />
                        </NavLink>
                    }
                    zDepth={1}
                    showMenuIconButton={Auth.isAuthenticate() ? true : false}
                    onLeftIconButtonTouchTap={this.handleToggle}
                    style={{backgroundColor: '#FFB300'}}
                    titleStyle={{fontFamily: 'Permanent Marker'}}
                    iconElementRight={
                        <RaisedButton 
                            style={{marginTop: '5px'}} 
                            label="Developer"
                            containerElement={ <NavLink to="/developer" /> }
                        />
                    }
                />
                <Drawer
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    {
                        !this.state.profile ?
                        <div style={{textAlign: 'center', marginTop: '40px'}}>
                            <CircularProgress />
                        </div>
                         :
                        <ProfileNav 
                            profile={this.state.profile}
                        />
                    }
                    <List>
                        <Subheader>Menu</Subheader>
                        <ListItem
                            primaryText="Home"
                            onTouchTap={this.handleClose}
                            leftIcon={<Home />}
                        />
                        <ListItem 
                            primaryText="Profile"
                            onTouchTap={this.handleClose}
                            leftIcon={<AccountCircle />}
                        />
                        <ListItem
                            primaryText="Settings"
                            onTouchTap={this.handleClose}
                            leftIcon={<Settings />}
                        />
                        <ListItem
                            primaryText="Log Out"
                            onTouchTap={this.logoutUser}
                            containerElement={ <NavLink exact to="/" /> }
                            leftIcon={<Exit />}
                        />
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default Header