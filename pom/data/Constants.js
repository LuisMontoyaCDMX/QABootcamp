import dotenv from 'dotenv'
dotenv.config({path: 'pom/.env'})

export const URLS = {
    LOGIN_URL: 'https://todoist.com/users/showlogin'
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