import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './../containers/Main'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import Developer from './Delveloper'
import PageNotFound from './PageNotFound'

const RouteContent = ({ loadProfile, profile }) => (
    <Switch>
        <Route 
            exact 
            path="/" 
            component={(props) => 
                <Main 
                    {...props} 
                    loadProfile={loadProfile} 
                />
            } 
        />

        <Route 
            path="/developer" 
            component={(props) => 
                <Developer 
                    {...props} 
                    Hello="Hello" 
                />
            } 
        />

        <Route 
            path="/home" 
            component={(props) => 
                <Home 
                    {...props}
                    profile={profile}
                />
            }
        />

        <Route 
            path="/profile" 
            component={(props) =>
                <Profile 
                    {...props}
                    profile={profile}
                />
            } 
        />

        <Route render={() => {
            return <PageNotFound />
        }} />

    </Switch>
)

export default RouteContent