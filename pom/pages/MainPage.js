import { Selector, t } from 'testcafe'

class MainPage{
    constructor(){
        this.title = Selector('.simple_content').withExactText('Today')
        this.addTaskButton = Selector('.plus_add_button')
        this.newTaskInput = Selector('.DraftEditor-editorContainer')
    }

    async clickAddTaskButton() {
        await t.click(this.addTaskButton)
        await t.typeText(this.newTaskInput, 'This is a new task that is due Today')
        await t.wait(80000)
    }
}

export default new MainPage