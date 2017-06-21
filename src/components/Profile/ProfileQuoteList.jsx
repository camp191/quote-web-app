import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Avatar from './../../images/Avatar.png'

const ProfileQuoteList = ({quote, quoteBy, type, postAt}) => (
    <Card style={{marginBottom: '30px'}}>
        <CardHeader
            title="Thanapat"
            subtitle={postAt}
            avatar={Avatar}
            showExpandableButton={true}
        />
        <CardText
            style={{fontSize:'20px'}}
        >
            {quote}
        </CardText>
        <CardText style={{fontSize:'16px', fontStyle:'italic', fontWeight:'100'}}>
            -- {quoteBy}
        </CardText>
    </Card>
)

export default ProfileQuoteList