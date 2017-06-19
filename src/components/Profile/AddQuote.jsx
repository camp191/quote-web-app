import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1}
    }

    handleChange = (event, index, value) => this.setState({value})

    render() {
        const paper = {
            minHeight: 120,
            width: 600,
            margin: 20,
            textAlign: 'left',
            display: 'inline-block',
            padding: '10px 50px'
        }

        const Dropdown = {
            width: 500
        }

        return (
            <div style={{textAlign: 'center'}}>
                <Paper style={paper} zDepth={1}>
                    <TextField
                        hintText="Add Your Quote..."
                        multiLine={true}
                        fullWidth={true}
                    />
                    <TextField
                        hintText="By..."
                        fullWidth={true}
                    />
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={Dropdown}
                        autoWidth={false}
                    >
                        <MenuItem value={1} disabled={true} primaryText="Quote Type" />
                        <MenuItem value={2} primaryText="General" />
                        <MenuItem value={3} primaryText="Love" />
                        <MenuItem value={4} primaryText="Work" />
                        <MenuItem value={5} primaryText="Inspiration" />
                        <MenuItem value={6} primaryText="Other" />
                    </DropDownMenu>
                    <div style={{textAlign: 'center'}}>
                        <RaisedButton 
                            label="Post" 
                            primary={true}
                            style={{marginRight: 20}}
                        />
                        <RaisedButton 
                            label="Clear" 
                            secondary={true}
                        />
                    </div>

                </Paper>
            </div>
        )
    }
}

export default AddQuote
