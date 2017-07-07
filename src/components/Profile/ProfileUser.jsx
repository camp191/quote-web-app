import React from 'react'

import Avatar from '../../images/Avatar.png'
import FontAwesome from 'react-fontawesome'

const imageProfile = {
    width: '140px',
    borderRadius: '14px'
}

const name = {
    marginTop: '16px',
    fontSize: '24px',
}

const description = {
    fontStyle: 'italic',
    fontWeight: '100'
}

const profileBox = {
    textAlign: 'center',
    paddingTop: '25px'
}

const icon = {
    fontSize: '22px',
    margin: '10px 5px'
}

const ProfileUser = ({profile}) => (
    <div style={profileBox}>
        <img 
            src={
                profile.image 
                ? profile.image 
                : Avatar
            }
            alt="profileImg"
            style={imageProfile}
        />
        <h1 style={name}>
            {profile.name} 
            {profile.sex === 'male' ? 
                <FontAwesome
                        className='fa-mars'
                        name='fa-mars'
                        style={icon}
                /> :
                <FontAwesome
                    className='fa-venus'
                    name='fa-venus'
                    style={icon}
                />
            }
        </h1>
        <h2 style={description}>
            {profile.description ? profile.description : ' " No Description... "'}
        </h2>
    </div>
)

export default ProfileUser