import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn')

    }

    async submitLoginForm(username, password){
        await t
        .typeText(this.usernameInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginButton)
    }
}

export default new LoginPage