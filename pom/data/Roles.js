import { Role } from 'testcafe'
import { CREDENTIALS, URLS } from './Constants'
import loginPage from '../pages/LoginPage'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, {preserveUrl:true})

export const INCORRECT_USER = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INCORRECT_USER.INCORRECT_USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, {preserveUrl:true})

export const INCORRECT_PASSWORD = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.INCORRECT_PASSWORD.INCORRECT_PASSWORD)
}, {preserveUrl:true})

export const EMPTY_ENTRY = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm("","")
}, {preserveUrl:true})
