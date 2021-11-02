import { t } from 'testcafe'
import mainPage from '../pages/MainPage'
import { URLS } from '../data/Constants'
import { STANDARD_USER, INCORRECT_USER, INCORRECT_PASSWORD, EMPTY_ENTRY } from '../data/Roles'

fixture('Login feature test')
   .page(URLS.LOGIN_URL)


test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(mainPage.title.exists).ok()
})

test('As a user, I am NOT be able to log in with and invalid username', async t => {
   await t.useRole(INCORRECT_USER)
   await t.expect(mainPage.title.exists).notOk()
})


test('As a user, I am NOT able to log in with an invalid password', async t => {
    await t.useRole(INCORRECT_PASSWORD)
    await t.expect(mainPage.title.exists).notOk()
 })

test('As a user, I am NOT able to log in without entering an username or password', async t => {
    await t.useRole(EMPTY_ENTRY)
    await t.expect(mainPage.title.exists).notOk()
 })

 