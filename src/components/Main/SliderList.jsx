import React from 'react'
import {Card, CardHeader, CardTitle} from 'material-ui/Card'
import PropTypes from 'prop-types'

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

SliderList.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    who: PropTypes.string.isRequired
}

export default SliderList