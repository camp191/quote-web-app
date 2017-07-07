import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../../utils/api'

import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

import Avatar from './../../images/Avatar.png'

function timeConverter(timeStamp){
    var time = new Date(timeStamp)
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    var year = time.getFullYear()
    var month = months[time.getMonth()]
    var date = time.getDate()
    var hour = time.getHours()
    var min = time.getMinutes()

    min < 10 && (min = "0" + time.getMinutes())
    hour < 10 && (hour = "0" + time.getHours())

    return `${date} ${month} ${year} ${hour}:${min}`
}

function quoteType(quote) {
    switch (quote) {
        case 1:
            return 'General'
        case 2:
            return 'Love'
        case 3:
            return 'Work'
        case 4:
            return 'Inspiration'
        default:
            return 'Other'
    }
}

class ProfileQuoteList extends Component {
    state = {
        deleteModal: false,
    }

    handleDeleteModalOpen = () => {
        this.setState({deleteModal: true})
    }

    handleDeleteModalClose = () => {
        this.setState({deleteModal: false})
    }

    handleDeleteQuote = (id) => {
        api.deleteQuote(id)
        this.setState({deleteModal: false})
        this.props.handleMyQuote()
    }

    render() {
        const { 
            quote,
            profile
        } = this.props

        return (
            <div>
                <Card style={{marginBottom: '30px'}}>
                    <CardHeader
                        title={profile.name}
                        subtitle={timeConverter(quote.postAt)}
                        avatar={profile.image ? profile.image : Avatar}
                        showExpandableButton={true}
                    />
                    <CardText
                        style={{fontSize:'20px'}}
                    >
                        {quote.quote}
                    </CardText>
                    <CardText style={{fontSize:'16px', fontStyle:'italic', fontWeight:'100'}}>
                        -- {quote.quoteBy} -- <span style={{marginLeft: '10px'}}>Type: {quoteType(quote.type)}</span>
                    </CardText>
                    <CardActions expandable={true} style={{textAlign: 'center'}}>
                        <FlatButton label="Delete" secondary={true} onTouchTap={this.handleDeleteModalOpen}/>
                    </CardActions>
                </Card>
                <Dialog
                    title={"Delete Your Quote"}
                    actions={[
                        <FlatButton
                            label="Cancel"
                            primary={true}
                            onTouchTap={this.handleDeleteModalClose}
                        />,
                        <FlatButton
                            label="Submit"
                            primary={true}
                            keyboardFocused={true}
                            onTouchTap={this.handleDeleteQuote.bind(null, quote._id)}
                        />,
                    ]}
                    modal={false}
                    open={this.state.deleteModal}
                    onRequestClose={this.handleDeleteModalClose}
                >
                    Do you want to DELETE "{quote.quote}" ?
                </Dialog>
            </div>
        )
    }
}

ProfileQuoteList.propTypes = {
    quote: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    handleMyQuote: PropTypes.func.isRequired
}

export default ProfileQuoteList