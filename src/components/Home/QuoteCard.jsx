import React, {Component} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import Avatar from '../../images/Avatar.png'
import api from './../../utils/api'

class QuoteCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    }
    

    componentDidMount() {
        api.getAllUsers(this.props.quote._creator)
        .then((response) => {
            this.setState({
                user: response.data.user
            })
        })
    }

    render() {
        const { quote, postAt } = this.props.quote

        function timeConverter(timeStamp){
            var time = new Date(timeStamp)
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

            var year = time.getFullYear()
            var month = months[time.getMonth()]
            var date = time.getDate()
            var hour = time.getHours()
            var min = time.getMinutes()

            min < 10 && (min = "0" + time.getMinutes())
            hour < 10 && (hour = "0" + time.getHours())

            return `${date} ${month} ${year} ${hour}:${min}`
        }

        return (
            <div>
                <Card>
                    <CardText style={{fontSize:'20px'}}>
                        {quote}
                    </CardText>
                    <CardHeader
                        title={
                            (this.state.user === null ? 'Loading...' : this.state.user.name)
                            + ' ' + (this.state.user === null ? '' : 
                            (this.state.user.description === null ? '' :
                            '(' + this.state.user.description + ')'
                            ))
                        }
                        subtitle={timeConverter(postAt)}
                        avatar={
                            this.state.user === null ? 
                            Avatar : 
                            (this.state.user.image === null ? Avatar : this.state.user.image)
                        }
                    >
                    </CardHeader>
                </Card>
            </div>
        )
    }
}

export default QuoteCard