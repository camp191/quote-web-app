import React, {Component} from 'react'
import ProfileQuoteList from './ProfileQuoteList'

class ProfileQuote extends Component {
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
                    {this.props.myQuotes.map((quote) => {
                        return <ProfileQuoteList 
                                    key={quote._id}
                                    quote={quote.quote}
                                    quoteBy={quote.quoteBy}
                                    type={quote.type}
                                    postAt={quote.postAt}
                                />
                    })}
                    
                </div>
            </div>
        )
    }
}

export default ProfileQuote