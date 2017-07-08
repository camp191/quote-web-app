import React from 'react'
import Paper from 'material-ui/Paper'
import FontAwesome from 'react-fontawesome'

import Avatar from './../images/CamPus.jpg'

const style = {
    wrapper: {
        textAlign: 'center'
    },
    paper:  {
        minHeight: 300,
        width: 600,
        margin: 20,
        display: 'inline-block',
        padding: '30px 50px'
    },
    header: {
        fontSize: '30px',
        textAlign: 'center', 
        margin: '20px 0px',
        fontWeight: '300',
        textDecoration: 'underline'
    },
    avatar: {
        width: 150,
        borderRadius: '14px'
    },
    quoteWrapper: {
        margin: '20px 0'
    },
    content: {
        fontSize: '20px',
        fontWeight: '200',
        margin: '7px 0'
    },
    contentQuote: {
        fontSize: '18px',
        fontWeight: '200',
        margin: '7px 0',
        fontStyle: 'italic'
    },
    iconSocial: {
        textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        fontSize: '20px',
        padding: '0 5px'
    },
    iconWrapper: {
        margin: '8px 0'
    },
    linkSocial: {
        color: '#1E1E1E'
    }
}

const Developer = () => (
    <div className="container container-margin">
        <h1 style={style.header}>
            Developers
        </h1>
        <div style={style.wrapper}>
            <Paper style={style.paper} zDepth={1}>
                <img 
                    src={Avatar} 
                    alt="Avatar" 
                    style={style.avatar}
                />
                <h1 style={style.content}>Thanapat Sorralump</h1>
                <h2 style={style.content}>Developer</h2>
                <div style={style.iconWrapper}>
                    <a 
                        href="https://www.facebook.com/campus.pccpl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={style.linkSocial}
                    >
                        <FontAwesome
                            className='fa-facebook-square'
                            name='fa-facebook-square'
                            style={style.iconSocial}
                        />
                    </a>
                    <a 
                        href="https://github.com/camp191" 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={style.linkSocial}
                    >
                        <FontAwesome
                            className='fa-github'
                            name='fa-github'
                            style={style.iconSocial}
                        />
                    </a>
                    <a 
                        href="https://medium.com/@camp191" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={style.linkSocial}
                    >
                        <FontAwesome
                            className='fa-medium'
                            name='fa-medium'
                            style={style.iconSocial}
                        />
                    </a>
                </div>
                <div style={style.quoteWrapper}>
                    <p style={style.contentQuote}>"Be what you are becoming without clinging to what you might have been, what you might yet be."</p>
                    <p style={style.contentQuote}>- Luca Irigaray</p>
                </div>
            </Paper>
        </div>
    </div>
)

export default Developer