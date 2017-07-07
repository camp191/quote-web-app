import React from 'react'
import ProfileQuoteList from './ProfileQuoteList'

const ProfileQuote = ({ myQuotes, 
                        profile,
                        handleMyQuote 
                    }) => (
    <div>
        <div style={{width: '60%', margin: '10px auto'}}>
            {myQuotes.length === 0 ?
                <h1
                    style={{
                        textAlign: 'center',
                        fontSize: '24px',
                        margin: '80px 0',
                        fontWeight: '300'
                    }}
                >
                    You havn't Post any Quote yet.
                </h1>
                :myQuotes.map((quote) => {
                    return <ProfileQuoteList
                                profile={profile}
                                key={quote._id}
                                quote={quote}
                                handleMyQuote={handleMyQuote}
                            />
                })
            }
            
        </div>
    </div>
)

export default ProfileQuote