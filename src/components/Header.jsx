import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { NavLink } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

class Header extends Component {
    render() {
        return (
            <AppBar 
                title={
                    <NavLink 
                        to='/' 
                        style={{color: 'white'}}>
                        Quote />
                    </NavLink>
                }
                zDepth={1}
                showMenuIconButton={false}
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
        )
    }
}

export default Header