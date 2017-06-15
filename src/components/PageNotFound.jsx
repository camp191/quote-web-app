import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { NavLink } from 'react-router-dom'

import NotFound from './../images/NotFound.jpg'

const PageNotFound = () => (
    <div className="container container-margin container-page-not-found">
        <h1 style={{fontSize: "30px"}}>
            ERROR: Page Not Found
        </h1>
        <div>
            <RaisedButton
                label="Go to Main page..." 
                secondary={true}
                style={{marginTop: "16px"}}
                containerElement={ <NavLink to="/" />}
            />
        </div>
        <img 
            src={NotFound} 
            alt="page not found"
            width="400"
        />
        <div>
            <a href='http://www.freepik.com/free-vector/businessman-with-magnifying-glass_1091811.htm'>Designed by Freepik</a>
        </div>

    </div>
)

export default PageNotFound