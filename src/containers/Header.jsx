import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'

import Auth from './../modules/Auth'
import api from './../utils/api'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    logoutUser = () => {
        this.handleClose()
        
        api.logout().then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log(e)
        })

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
                    <MenuItem onTouchTap={this.handleClose}>Profile</MenuItem>
                    <MenuItem 
                        onTouchTap={this.logoutUser}
                        containerElement={ <NavLink exact to="/" /> } 
                    >
                        Log Out
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default Header