import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'material-ui/Tabs'
import Paper from 'material-ui/Paper';

import SignupPage from '../../containers/SignupPage'
import LoginPage from '../../containers/LoginPage'

const style = {
  height: 475,
  width: 420,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: 5
};

const Member = ({loginRedirect, tabs, tabChange, loadProfile, handleMyQuote}) => (
    <div>
        <Paper style={style} zDepth={2} >
            <Tabs
                value={tabs}
                onChange={tabChange}
                inkBarStyle={{background: '#212121'}}
                tabItemContainerStyle={
                    {
                        backgroundColor: "#757575",
                        borderTopLeftRadius: 5, 
                        borderTopRightRadius: 5
                    }
                }
            >
                <Tab label="Sign up" value="signup">
                <div>
                    <SignupPage />
                </div>
                </Tab>
                <Tab label="Log In" value="login">
                <div>
                    <LoginPage
                        loadProfile={loadProfile} 
                        loginRedirect={loginRedirect}
                        handleMyQuote={handleMyQuote}
                    />
                </div>
                </Tab>
            </Tabs>
        </Paper>
    </div>
)

Member.propTypes = {
    tabs: PropTypes.string.isRequired,
    loginRedirect: PropTypes.func.isRequired,
    tabChange: PropTypes.func.isRequired
}

export default Member