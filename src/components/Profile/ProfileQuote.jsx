import React, {Component} from 'react'
import ProfileQuoteList from './ProfileQuoteList'

import api from './../../utils/api'

class ProfileQuote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quotes: []
        }
    }

    componentDidMount() {
        api.getUserQuote().then((response) => {
            let reRes = response.reverse()
            this.setState({
                quotes: reRes
            })
        })
    }

    componentDidUpdate() {
        api.getUserQuote().then((response) => {
            let reRes = response.reverse()

            this.setState({
                quotes: reRes
            })
        })
    }

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
                    {this.state.quotes.map((quote) => {
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