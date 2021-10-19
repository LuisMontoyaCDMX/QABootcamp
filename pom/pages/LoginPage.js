import { Selector } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn')

    }
}

export default new LoginPage