import React from 'react'
import ExampleSlider from './ExampleSlider'
import Member from './Member'

const Main = () => (
    <div className="container container-margin">
        <div className="columns">
            <div className="column is-7">
                <h1 style={{
                    fontSize: "30px",
                    textAlign: "center",
                    margin: "15px 0px",
                    fontWeight: "bold"
                }}>
                    Words | Phases | Sentences</h1>
                <h1 style={{
                    fontSize: "25px",
                    textAlign: "center",
                    fontWeight: "300"
                }}>
                    There is no better way to encourage your life than <i>"Quote"</i>.
                </h1>
                <ExampleSlider />
            </div>
            <div className="column">
                <Member />
            </div>
        </div>
    </div>
)

export default Main