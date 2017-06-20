import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'

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

const AddQuote = ({quote, quoteType, clearInput, handleInputChange, handleCheckBoxChange}) => (
    <div style={{textAlign: 'center'}}>
        <Paper style={paper} zDepth={1}>
            <TextField
                hintText="Add Your Quote..."
                multiLine={true}
                fullWidth={true}
                name="quoteName"
                onChange={handleInputChange}
                value={quote.quoteName}
            />
            <TextField
                hintText="By..."
                fullWidth={true}
                name="quoteBy"
                onChange={handleInputChange}
                value={quote.quoteBy}
            />
            <DropDownMenu
                value={quoteType}
                onChange={handleCheckBoxChange}
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
                    onTouchTap={clearInput}
                />
            </div>
        </Paper>
    </div>
)

AddQuote.propTypes = {
    quote: PropTypes.object.isRequired,
    quoteType: PropTypes.number.isRequired,
    clearInput: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCheckBoxChange: PropTypes.func.isRequired
}

export default AddQuote
