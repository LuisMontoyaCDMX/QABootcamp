import dotenv from 'dotenv'
dotenv.config({path: 'pom/.env'})

export const URLS = {
    LOGIN_URL:'https://todoist.com/users/showlogin'
}

export const CREDENTIALS = {
    STANDARD_USER: {
         USERNAME: process.env.STANDARD_USER_USERNAME,
         PASSWORD: process.env.STANDARD_USER_PASSWORD     
    },

    INCORRECT_USER: {
        INCORRECT_USERNAME: process.env.USER_INCORRECT_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    },

    INCORRECT_PASSWORD: {
        USERNAME: process.env.STANDARD_USER_USERNAME,
        INCORRECT_PASSWORD: process.env.USER_INCORRECT_PASSWORD
    }
}

export const TASKS = {
    TASKS_INFO: {
        NAME_OF_TASK: process.env.TASK_NAME,
        NUMBER_OF_TASKS: process.env.TASKS_NUMBER,
        TOMORROW_TASK: process.env.TASK_NAME_TOMORROW
    }
}

export const PROJECTS = {
    PROJECTS_INFO: {
        PROJECT_NAME: process.env.NAME_OF_THE_PROJECT,
        COLOR: process.env.COLOR_OF_THE_PROJECT
    }
}

