import {t} from 'testcafe'
import mainPage from '../pages/MainPage'
import { STANDARD_USER } from '../data/Roles'
import { TASKS, URLS } from '../data/Constants'

fixture('Tasks tests')
.page(URLS.LOGIN_URL)
.beforeEach( async t => {
    await t.useRole(STANDARD_USER)
})

test('As a user, I should be able to add a new Task with Today as the due date', async t => {
    await mainPage.addMultipleTasks(TASKS.TASKS_INFO.NAME_OF_TASK, 1)
 })


 test.meta('type','smoke')('As a user, I should be able to add a new Task with Tomorrow as the due date', async t => {
    await mainPage.addTaskDueTomorrow()
 })

 test('As a user, I should be able to add multiple Tasks with Today as the due date', async t => {
    await mainPage.addMultipleTasks(TASKS.TASKS_INFO.NAME_OF_TASK, TASKS.TASKS_INFO.NUMBER_OF_TASKS)
 })

 test.meta('type','smoke')('As a user, I should be able to add a new Project', async t => {
    await mainPage.createNewProject()
 })

 test.meta('type','smoke')('As a user, I should be able to delete all of the tasks', async t => {
    await mainPage.deleteTasks()
 })

 