import axios from 'axios'
import Auth from '../modules/Auth'

const host = 'http://localhost:3000/'

export default {
    signup: (user) => {
        let encodeURI = window.encodeURI( host + 'user/signup')

        return axios.post(encodeURI, {
            email: user.email,
            password: user.password,
            name: user.name
        })
        .then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    },

    login: (user) => {
        let encodeURI = window.encodeURI( host + 'user/login')

        return axios.post(encodeURI, {
            email: user.email,
            password: user.password
        })
        .then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    },

    logout: () => {
        let encodeURI = window.encodeURI( host + 'user/logout')

        return axios.delete(encodeURI, {
            headers: {
                'x-auth': Auth.getToken()
            }
        }).then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    },

    getUser: () => {
        let encodeURI = window.encodeURI( host + 'user/me')

        return axios.get(encodeURI, {
            headers: {
                'x-auth': Auth.getToken()
            }
        }).then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    },

    updateUser: (user) => {
        console.log(user)
        let encodeURI = window.encodeURI( host + 'user/' + user.id )
        
        return axios.patch(encodeURI, {
            'name': user.name,
            'description': user.description,
            'sex': user.sex
        },{
            headers: {
                'x-auth': Auth.getToken()
            }
        }).then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    },

    addQuote: (quote) => {
        let encodeURI = window.encodeURI( host + 'quotes' )
        return axios.post(encodeURI, {
            'quote': quote.quote,
            'quoteBy': quote.quoteBy,
            'type': quote.type
        },{
            headers: {
                'x-auth': Auth.getToken()
            }
        }).then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    },

    getUserQuote: (quotes) => {
        let encodeURI = window.encodeURI( host + 'quotes' )
        return axios.get(encodeURI, {
            headers: {
                'x-auth': Auth.getToken()
            }
        }).then((response) => {
            return response.data.quote
        }).catch((e) => {
            return e.response
        })
    },

    deleteQuote: (id) => {
        let encodeURI = window.encodeURI( host + 'quotes/' + id )
        return axios.delete(encodeURI, {
            headers: {
                'x-auth': Auth.getToken()
            }
        }).then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    }
}