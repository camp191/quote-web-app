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

const AddQuote = ({quote, clearInput, handleInputChange, handleCheckBoxChange, onSubmit}) => (
    <div style={{textAlign: 'center'}}>
        <Paper style={paper} zDepth={1}>
            <form action="/" onSubmit={onSubmit}>
                <TextField
                    hintText="Add Your Quote..."
                    multiLine={true}
                    fullWidth={true}
                    name="quote"
                    onChange={handleInputChange}
                    value={quote.quote}
                />
                <TextField
                    hintText="By..."
                    fullWidth={true}
                    name="quoteBy"
                    onChange={handleInputChange}
                    value={quote.quoteBy}
                />
                <DropDownMenu
                    value={quote.type}
                    onChange={handleCheckBoxChange}
                    style={Dropdown}
                    autoWidth={false}
                >
                    <MenuItem value="QuoteType" disabled={true} primaryText="Quote Type" />
                    <MenuItem value={1} primaryText="General" />
                    <MenuItem value={2} primaryText="Love" />
                    <MenuItem value={3} primaryText="Work" />
                    <MenuItem value={4} primaryText="Inspiration" />
                    <MenuItem value={5} primaryText="Other" />
                </DropDownMenu>
                <div style={{textAlign: 'center'}}>
                    <RaisedButton
                        type="submit"
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
            </form>
        </Paper>
    </div>
)

AddQuote.propTypes = {
    quote: PropTypes.object.isRequired,
    clearInput: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCheckBoxChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default AddQuote
