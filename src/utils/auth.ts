const Token = 'token'
const UserInfo = 'userInfo'


export const setToken = (token: string) => {
    return sessionStorage.setItem(Token, token)
}

export const getToken = () => {
    return sessionStorage.getItem(Token)
}

export const removeToken = () => {
    return sessionStorage.removeItem(Token)
}

export const setUserInfo = (userInfo: string) => {
    return sessionStorage.setItem(UserInfo, JSON.stringify(userInfo))
}

export const getUserInfo = () => {
    return JSON.parse(sessionStorage.getItem(UserInfo) || '{}')
}

export const removeUserInfo = () => {
    return sessionStorage.removeItem(UserInfo)
}