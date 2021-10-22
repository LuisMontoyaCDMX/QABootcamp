import { Selector } from 'testcafe'

class MainPage{
    constructor(){
        this.title = Selector('.simple_content').withExactText('Today')
    }
}

export default new MainPage