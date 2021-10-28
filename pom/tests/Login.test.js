import {Selector, t} from 'testcafe'
import loginPage from '../pages/LoginPage'
import mainPage from '../pages/MainPage'
import { CREDENTIALS, URLS } from '../data/Constants'
import { STANDARD_USER, INCORRECT_USER, INCORRECT_PASSWORD, EMPTY_ENTRY } from '../data/Roles'

fixture('Login feature test')
.page `https://todoist.com/users/showlogin`


test.only('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(mainPage.title.exists).ok()
})

test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
   await t.useRole(INCORRECT_USER)
   await t.expect(mainPage.title.exists).notOk()
})


test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(INCORRECT_PASSWORD)
    await t.expect(mainPage.title.exists).notOk()
 })

 test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(EMPTY_ENTRY)
    await t.expect(mainPage.title.exists).notOk()
 })