import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../images/Avatar.png'

const imageStyle = {
    padding: '20px 45px'
}

const nameStyle = {
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: '20px',
    margin: '0 15px'
}

const descriptionStyle = {
    textAlign: 'center', 
    fontWeight: '100', 
    fontStyle: 'italic',
    fontSize: '16px', 
    margin: '5px 15px'
}

const ProfileNav = ({profile}) => (
    <div style={{marginBottom: '15px'}}>
        {!profile.image 
            ? 
                <img 
                    src={Avatar} 
                    alt="avatar"
                    style={imageStyle}
                />
            : 'Hello' }
        <h1 style={nameStyle}>
            {profile.name}
        </h1>
        <h2 style={descriptionStyle}>
            {profile.description ? profile.description : ' " No Description... "'}
        </h2>
    </div>
)

ProfileNav.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileNav