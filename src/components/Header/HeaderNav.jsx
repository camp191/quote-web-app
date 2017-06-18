import React from 'react'
import PropTypes from 'prop-types'
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

import ProfileNav from './ProfileNav'

import Auth from './../../modules/Auth'


const HeaderNav = ({profile, open, handleToggle, handleClose, logoutUser}) => (
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
            onLeftIconButtonTouchTap={handleToggle}
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
            open={open}
            onRequestChange={handleClose}
        >
            {
                !profile 
                ? <div style={{textAlign: 'center', marginTop: '40px'}}>
                    <CircularProgress />
                </div>
                : <ProfileNav 
                    profile={profile}
                />
            }
            <List>
                <Subheader>Menu</Subheader>
                <ListItem
                    primaryText="Home"
                    onTouchTap={handleClose}
                    leftIcon={<Home />}
                />
                <ListItem 
                    primaryText="Profile"
                    onTouchTap={handleClose}
                    leftIcon={<AccountCircle />}
                />
                <ListItem
                    primaryText="Settings"
                    onTouchTap={handleClose}
                    leftIcon={<Settings />}
                />
                <ListItem
                    primaryText="Log Out"
                    onTouchTap={logoutUser}
                    containerElement={ <NavLink exact to="/" /> }
                    leftIcon={<Exit />}
                />
            </List>
        </Drawer>
    </div>
)

HeaderNav.propTypes = {
    profile: PropTypes.object,
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired
}

export default HeaderNav