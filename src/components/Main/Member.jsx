import React, { Component } from 'react'
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


class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'signup',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <div>
                <Paper style={style} zDepth={2} >
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
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
                                loginRedirect={this.props.loginRedirect}
                            />
                        </div>
                        </Tab>
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

export default Member