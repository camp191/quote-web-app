import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Paper from 'material-ui/Paper';

import Signup from './Signup'
import Login from './Login'

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
                        inkBarStyle={{background: '#004D40'}}
                        tabItemContainerStyle={
                            {
                                backgroundColor: "#4DB6AC",
                                borderTopLeftRadius: 5, 
                                borderTopRightRadius: 5
                            }
                        }
                    >
                        <Tab label="Sign up" value="signup">
                        <div>
                            <Signup />
                        </div>
                        </Tab>
                        <Tab label="Log In" value="login">
                        <div>
                            <Login />
                        </div>
                        </Tab>
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

export default Member