import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './../containers/Main'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import Settings from './Settings/Settings'
import Developer from './Delveloper'
import PageNotFound from './PageNotFound'

const RouteContent = ({ loadProfile, profile, myQuotes, allQuotes, handleMyQuote, reloadProfile }) => (
    <Switch>
        <Route 
            exact 
            path="/" 
            component={(props) => 
                <Main 
                    {...props} 
                    loadProfile={loadProfile}
                    handleMyQuote={handleMyQuote}
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
                    allQuotes={allQuotes}
                />
            }
        />

        <Route 
            path="/profile" 
            component={(props) =>
                <Profile 
                    {...props}
                    profile={profile}
                    myQuotes={myQuotes}
                    handleMyQuote={handleMyQuote}
                />
            } 
        />

        <Route 
            path="/settings"
            component={(props) => 
                <Settings 
                    {...props}
                    profile={profile}
                    reloadProfile={reloadProfile}
                />
        }
        />

        <Route render={() => {
            return <PageNotFound />
        }} />

    </Switch>
)

export default RouteContent