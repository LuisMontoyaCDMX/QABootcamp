import { Selector, t } from 'testcafe'
import { TASKS, PROJECTS } from '../data/Constants'

class MainPage{
    constructor(){
        this.title = Selector('.simple_content').withExactText('Today')
        this.addTaskButton = Selector('.plus_add_button')
        this.newTaskInput = Selector('.public-DraftStyleDefault-block')
        this.dateButton = Selector('.date')
        this.tomorrowButton = Selector('.scheduler-suggestions-item-icon--tomorrow')
        this.confirmAddTaskButton = Selector ('.reactist_button')
        this.tasksList = Selector('.task_list_item__body')
        this.taskContent = Selector('.task_content')
        this.moreActionsButton = Selector('.more_actions_button')
        this.deleteButton = Selector('.danger_menu')
        this.confirmDeleteButton = Selector('.ist_button_red')
        this.inboxButton = Selector('#filter_inbox')
        this.projectsLabel = Selector('.expansion_panel__toggle').withExactText('Projects')
        this.addProjectButton = Selector('.adder_icon')
        this.projectNameInput = Selector('#edit_project_modal_field_name')
        this.projectColorButton = Selector('.color_dropdown_toggle')
        this.Color = Selector('.color_dropdown_select__name').withExactText(PROJECTS.PROJECTS_INFO.COLOR)
        this.confirmAddProjectButton = Selector('.ist_button_red')
        this.addToFavoritesSwitch = Selector('.reactist_switch')
    }

    async addMultipleTasks(taskName, numberOfTasks){
        await t.click(this.addTaskButton)
        for(let i = 0; i < numberOfTasks; i++){
            await t.typeText(this.newTaskInput, taskName + " " + (i+1) , {paste: true})
            await t.click(this.confirmAddTaskButton)
            await t.wait(500)
            await t.expect(await this.validateLastAddedTask(taskName + " " + (i+1))).ok()
        }
        await t.click(this.inboxButton)
        await t.wait(500)
    }

    async addTaskDueTomorrow() {
        await t.click(this.addTaskButton)
        await t.typeText(this.newTaskInput, TASKS.TASKS_INFO.TOMORROW_TASK, {paste: true})
        let dateButton = await this.dateButton.innerText
        console.log(dateButton)
        if (dateButton != 'Tomorrow'){
            await t.click(this.dateButton)
            await t.click(this.tomorrowButton)
        }
        await t.click(this.confirmAddTaskButton)
        await t.wait(500)
        await t.click(this.inboxButton)
        await t.wait(500)
        await t.expect(await this.validateLastAddedTask(TASKS.TASKS_INFO.TOMORROW_TASK)).ok()
    }

    async validateLastAddedTask(taskName){
        let taskNumber = await this.tasksList.count
        let taskText = await this.taskContent.nth(taskNumber-1).innerText
        if(taskText.includes(taskName) == true){
            console.log(taskText + " is equal to " + taskName)
            return true
        }console.log(taskText + " is NOT equal to " + taskName)
        return false
    }

    async deleteTasks(){
        await t.click(this.inboxButton)
        let taskNumber = await this.tasksList.count
        console.log("Number of tasks to delete: " + taskNumber)
        if (taskNumber > 0){
            for(let i = taskNumber; i > 0; i --){
                await t.hover(this.taskContent.nth(i-1))
                await t.wait(500)
                await t.click(this.moreActionsButton)
                await t.click(this.deleteButton)
                await t.click(this.confirmDeleteButton)
                await t.wait(500)
            }
        }
        await t.click(this.inboxButton)
        await t.wait(500)
    }

    async createNewProject(){
        await t.hover(this.projectsLabel)
        await t.wait(500)
        await t.click(this.addProjectButton)
        await t.wait(500)
        await t.typeText(this.projectNameInput, PROJECTS.PROJECTS_INFO.PROJECT_NAME, {paste: true})
        await t.click(this.projectColorButton)
        await t.click(this.Color)
        await t.click(this.addToFavoritesSwitch)
        await t.click(this.confirmAddProjectButton)
        await t.wait(2000)
    }
    
}

export default new MainPage