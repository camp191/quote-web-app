import React, {Component} from 'react'

class ProfileQuote extends Component {
    state = {  }


    render() {
        const topic = {
            fontSize: '30px'
        }

        return (
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <h1 style={topic}>All Quotes</h1>
            </div>
        )
    }
}

export default ProfileQuote