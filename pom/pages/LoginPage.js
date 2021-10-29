import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn')

    }


    async submitLoginForm(username, password){
            if (username || ""){ 
                await t.typeText(this.usernameInput, username)
            }
            if (password || ""){
                await t.typeText(this.passwordInput, password)
            }
            await t.click(this.loginButton)
        }
}

export default new LoginPage