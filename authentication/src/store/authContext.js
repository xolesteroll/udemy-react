import React, {useState, useEffect, useCallback} from 'react'

let logoutTimer

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {
    },
    logout: () => {
    },
})

const calculateRemainingTime = (expTime) => {
    const currentTime = new Date().getTime()
    const adjExpTime = new Date(expTime).getTime()

    const remainingTime = adjExpTime - currentTime

    return remainingTime
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpirationDate = localStorage.getItem('expirationTime')

    const remainingTime = calculateRemainingTime(storedExpirationDate)

    if (remainingTime <= 0) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken()
    let initialToken
    if (tokenData) {
        initialToken = tokenData.token
    } else {

    }
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')

        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }, [])

    const loginHandler = (token, expTime) => {
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expTime)

        const remainingTime = calculateRemainingTime(expTime)

        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }

    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
            console.log(tokenData.duration)
        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext
