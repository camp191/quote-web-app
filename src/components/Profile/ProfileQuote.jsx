import React from 'react'
import PropTypes from 'prop-types'

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

const ProfileQuoteList = ({
                        quote, 
                        profile, 
                        handleDeleteModalOpen, 
                        handleDeleteModalClose, 
                        isDeleteModalOpen,
                        handleDeleteQuote
                    }) => (
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
                -- {quote.quoteBy}
            </CardText>
            <CardActions expandable={true} style={{textAlign: 'center'}}>
                <FlatButton label="Edit" />
                <FlatButton label="Delete" secondary={true} onTouchTap={handleDeleteModalOpen}/>
            </CardActions>
        </Card>
        <Dialog
            title="Delete Your Quote"
            actions={[
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={handleDeleteModalClose}
                />,
                <FlatButton
                    label="Submit"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={handleDeleteQuote.bind(null, quote._id)}
                />,
            ]}
            modal={false}
            open={isDeleteModalOpen}
            onRequestClose={handleDeleteModalClose}
        >
            Do you want to DELETE "{quote.quote}" ?
        </Dialog>
    </div>
)

ProfileQuoteList.propTypes = {
    quote: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    isDeleteModalOpen: PropTypes.bool.isRequired,
    handleDeleteModalOpen: PropTypes.func.isRequired, 
    handleDeleteModalClose: PropTypes.func.isRequired, 
    handleDeleteQuote: PropTypes.func.isRequired
}

const ProfileQuote = ({ myQuotes, 
                        profile, 
                        handleDeleteModalOpen, 
                        handleDeleteModalClose,
                        handleDeleteQuote,
                        isDeleteModalOpen
                    }) => (
    <div>
        <div style={{width: '60%', margin: '10px auto'}}>
            {myQuotes.length === 0 ?
                <h1
                    style={{
                        textAlign: 'center',
                        fontSize: '24px',
                        margin: '80px 0',
                        fontWeight: '300'
                    }}
                >
                    You havn't Post any Quote yet.
                </h1>
                :myQuotes.map((quote) => {
                    return <ProfileQuoteList
                                profile={profile}
                                key={quote._id}
                                quote={quote}
                                handleDeleteModalOpen={handleDeleteModalOpen}
                                handleDeleteModalClose={handleDeleteModalClose}
                                handleDeleteQuote={handleDeleteQuote}
                                isDeleteModalOpen={isDeleteModalOpen}
                            />
                })
            }
            
        </div>
    </div>
)

export default ProfileQuote