import React from 'react'

let FooterStyle = {
    backgroundColor: "#212121",
    height: "115px",
    marginTop: "30px"
}

let logoStyle = {
    color: 'white',
    fontFamily: 'Permanent Marker',
    fontSize: '24px',
    textAlign: 'center',
    paddingTop: '20px'
}

let copyrightStyle = {
    color: "white",
    textAlign: "center",
    marginTop: "5px"
}

const Footer = () => (
    <div style={FooterStyle}>
        <h1 style={logoStyle}>
            Quote />
        </h1>
        <h2 style={copyrightStyle}>
            &copy; 2017 Copyright, Quote
        </h2>
    </div>
)

export default Footer