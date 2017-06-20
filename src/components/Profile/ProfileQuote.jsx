import React, {Component} from 'react'
import ProfileQuoteList from './ProfileQuoteList'

class ProfileQuote extends Component {
    state = {  }


    render() {
        const topic = {
            fontSize: '30px',
            textAlign: 'center', 
            margin: '20px 0px'
        }

        return (
            <div>
                <h1 style={topic}>My Quotes</h1>
                <div style={{width: '60%', margin: '10px auto'}}>
                    <ProfileQuoteList />
                </div>
            </div>
        )
    }
}

export default ProfileQuote