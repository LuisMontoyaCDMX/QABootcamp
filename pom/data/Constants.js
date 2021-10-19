import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    STANDARD_USER: {
         USERNAME: process.env.STANDARD_USER_USERNAME,
         PASSWORD: process.env.STANDARD_USER_PASSWORD

         //USERNAME: 'standard_user',
         //PASSWORD: 'secret_sauce'
    }
}