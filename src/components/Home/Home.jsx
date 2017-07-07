import React, { Component } from 'react'
import StackGrid from 'react-stack-grid'
import { Redirect } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress'

import QuoteCard from './QuoteCard'
import Auth from '../../modules/Auth'

class Home extends Component {

    render() {
        if(!Auth.isAuthenticate()) {
            return (
                <div>
                    <Redirect to="/" />
                </div>
            )
        }

        return (
            <div className="container container-margin">
                <h1 style={{
                    fontSize: '30px',
                    textAlign: 'center', 
                    margin: '20px 0px',
                    fontWeight: '300'
                }}>
                    All Quotes
                </h1>
                <hr/>
                {this.props.allQuotes.length === 0 ?
                    <div style={{textAlign:'center', marginTop:'30px'}}>
                        <CircularProgress 
                            size={80} 
                            thickness={5}       
                        />
                    </div> :
                    <StackGrid 
                        columnWidth={300} 
                        gutterWidth={20} 
                        gutterHeight={20}
                    >
                        {this.props.allQuotes.map((quote) => {
                            return (
                                <div key={quote._id}>
                                    <QuoteCard       
                                        quote={quote}
                                    />
                                </div>
                            )
                        })}
                    </StackGrid>
                }
            </div> 
        )
    }
}

export default Home