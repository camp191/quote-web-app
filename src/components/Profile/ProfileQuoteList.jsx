import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Avatar from './../../images/Avatar.png'

const ProfileQuoteList = () => (
    <Card>
        <CardHeader
            title="Thanapat"
            subtitle="Quote Type: Love"
            avatar={Avatar}
            showExpandableButton={true}
        />
        <CardText
            style={{fontSize:'20px'}}
        >
            เมื่อฉันได้พบคุณ ฉันตกอยู่ในห้วงแห่งความรัก และที่คุณยิ้ม นั่นเป็นเพราะว่าคุณรู้
        </CardText>
        <CardText style={{fontSize:'16px', fontStyle:'italic', fontWeight:'100'}}>
            -- อาร์ริโก โบอิโต ( Arrigo Boito ) กวีชาวอิตาลี
        </CardText>
    </Card>
)

export default ProfileQuoteList