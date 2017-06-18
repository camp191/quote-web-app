class Auth {
    static authenticateUser(token) {
        localStorage.setItem('token', token)
    }

    static isAuthenticate() {
        return localStorage.getItem('token') !== null
    }

    static deAuthenticateUser() {
        localStorage.removeItem('token')
    }

    static getToken() {
        return localStorage.getItem('token')
    }
}

export default Auth