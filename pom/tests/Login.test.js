import {Selector, t} from 'testcafe'
import loginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature test')
.page `https://todoist.com/users/showlogin`

test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t
        .typeText(loginPage.usernameInput, CREDENTIALS.STANDARD_USER.USERNAME)
        .typeText(loginPage.passwordInput, CREDENTIALS.STANDARD_USER.PASSWORD)
        .click(loginPage.loginButton)
        .expect(Selector('.view_header__content').innerText).contains('Today')

})