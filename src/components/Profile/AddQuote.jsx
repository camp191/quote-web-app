import React from 'react'
import PropTypes from 'prop-types'

import FontAwesome from 'react-fontawesome'

import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

const paper = {
    minHeight: 220,
    width: 600,
    margin: 20,
    textAlign: 'left',
    display: 'inline-block',
    padding: '10px 50px'
}

const Dropdown = {
    width: 500
}

const errorText = {
    color: '#F44336',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px 0'
}

const iconWarning = {
    marginRight: '10px',
    marginTop: '3px'
}

const loadingCircle = {
    textAlign: 'center',
    marginTop: '60px'
}

const AddQuote = ({
                loading, 
                error, 
                quote, 
                clearInput, 
                handleInputChange, 
                handleCheckBoxChange, 
                onSubmit,
                handleAddModalClose,
                isModalOpen
            }) => (
    <div style={{textAlign: 'center'}}>
        <Paper style={paper} zDepth={1}>
            {loading 
                ? <div style={loadingCircle}>
                    <CircularProgress 
                        size={60} 
                        thickness={5}
                    />
                </div>
                : <div>
                    { error === '' ? '' :
                        <h1 style={errorText}>
                            <FontAwesome
                                className='fa-warning'
                                name='fa-warning'
                                style={iconWarning}
                            />
                            {error}
                        </h1> 
                    }
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
                    <Dialog
                        actions={[      
                            <FlatButton
                                label="OK"
                                primary={true}
                                onTouchTap={handleAddModalClose}
                            />
                        ]}
                        open={isModalOpen}
                        onRequestClose={handleAddModalClose}
                    >
                        Add your Quote done.
                    </Dialog>
                </div>
            }
        </Paper>
    </div>
)

AddQuote.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    quote: PropTypes.object.isRequired,
    clearInput: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCheckBoxChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleAddModalClose: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
}

export default AddQuote
