import React from 'react'
import {Card, CardHeader, CardTitle} from 'material-ui/Card'

const SliderList = ({name, description, avatar, title, who}) => (
    <Card containerStyle={{margin: "10px"}}>
        <CardHeader
            title={name}
            subtitle={description}
            avatar={avatar}
        />
        <CardTitle 
            title={title}
            subtitle={who}
        />
    </Card>
)

export default SliderList