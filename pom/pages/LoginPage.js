import { Selector } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#user-name')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('#login-button')

    }
}

export default new LoginPage