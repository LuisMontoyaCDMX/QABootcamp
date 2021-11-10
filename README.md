# QABootcamp
------------------
Last update: Nov 5, 2021

1. PROJECT NAME
---------------
Automation Bootcamp Front End Testing with Testcafe

2.GENERAL INFO
--------------
This reposotory contains a series of automated tests using Testcafe.  These are aimed to test the Front End of the 'Todoist' site.

3.STRUCTURE
-----------
The structure of the repository is as follows:

QABootcamp
   ├ .gitignore
   ├ package-lock.json
   ├ package.json
   ├ README.md
   ├ report-generator.js
   ├ testcafe-reporter-cucumber-json.json
   ├ .vscode
   |      └ launch.json
   |
   ├ pom -┬-data  ┬ Constants.js
   |      |       └ Roles.js
   |      |
   |      ├ pages ┬ LoginPage.js
   |      |       └ MainPage.js
   |      |
   |      ├Reports┬ cucumberReport ┬ assets
   |      |       |                ├ features
   |      |       |                └ index.html
   |      |       └ jsonResults
   |      |
   |      ├ tests ┬ Login.test.js
   |      |       └ Task.test.js
   |      ├ .env
   |      └ .testcaferc.json
   |
   └ node_modules
   
   4. USAGE
   --------
   The project has a series of tests located in the json files inside the tests folder and a series of scripts to invoke those tests.
   
   4.1 Description of tests
   ------------------------
   
   4.1.1 Login.test.js: The file contains the following tests:
   
   a. test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    
        The test uses the 'useRole(user) method wich receives only one paramter, the 'STANDARD_USER', from the Roles.js file, this object contains a valid User and Password to log in the application.  The test also validates that the log in is succesfull.

    b.test('As a user, I am NOT be able to log in with and invalid username', async t => {
    
        This is a negative test case.
        The test uses the 'useRole(user) method wich receives only one paramter, the 'INCORRECT_USER', from the Roles.js file, this object contains an invalid User and a valid Password to log in the application.  The test also validates that the user is not able to log with that data.
        
    c. test('As a user, I am NOT able to log in with an invalid password', async t => {

        This is a negative test case.
        The test uses the 'useRole(user) method wich receives only one paramter, the 'INCORRECT_PASSWORD', from the Roles.js file, this object contains a valid User and an invalid Password to log in the application.  The test also validates that the user is not able to log with that data.
        
    
    d. test('As a user, I am NOT able to log in without entering an username or password', async t => {
  
        This is a negative test case.
        The test uses the 'useRole(user) method wich receives only one paramter, the 'EMPTY_ENTRY', from the Roles.js file, this object contains an empty string for User and Password to log in the application.  The test also validates that the user is not able to log with that data.
        
        

   4.1.2 Task.test.js: The file contains the following tests
   
    a. test('As a user, I should be able to add a new Task with Today as the due date', async t => {
        
        This test adds a new Task to the Todoist workspace with the due date of today, it uses the addMultipleTasks(taskName,numberOfTasks) method wich receives the TASKS.TASKS_INFO.NAME_OF_TASK from the Constants.js file as the name of the task and the integer 1 as the numberOfTasks. This method also validates that the task was added correctly by calling the 'validateLastAddedTask(taskName) method which receives the 'taskName' as its only parameter.
        
    b. test.meta('type','smoke')('As a user, I should be able to add a new Task with Tomorrow as the due date', async t => {
  
        This test adds a new Task to the Todoist workspace with the due date of tomorrow, it takes no parameters, but it extracts the name of the task from the Constants.js file. This method also validates that the task was added correctly by calling the 'validateLastAddedTask(taskName) method which receives the 'taskName' as its only parameter.
        
            * This is also part of the Smoke test set
            
    c. test('As a user, I should be able to add multiple Tasks with Today as the due date', async t => {
   
        This test adds a number of Tasks to the Todoist workspace with the due date of today, it uses the addMultipleTasks(taskName,numberOfTasks) method wich receives the TASKS.TASKS_INFO.NAME_OF_TASK from the Constants.js file as the name of the task and the TASKS.TASKS_INFO.NUMBER_OF_TASKS as the numberOfTasks also from the Constants.js file. This method also validates that the task was added correctly by calling the 'validateLastAddedTask(taskName) method which receives the 'taskName' as its only parameter, for each of the tasks added.
        
    d. test.meta('type','smoke')('As a user, I should be able to add a new Project', async t => {
    
            This test adds a new Project, picks a color and adds it to favorites.  It uses the createNewProject() method, which extracts the name of the project and color from the .env file through the Constants.js file.
            
            * This is also part of the Smoke test set
            
    e. test.meta('type','smoke')('As a user, I should be able to delete all of the tasks', async t => {
    
            This test deletes all of the existing tasks in the Todoist.com site.  It uses the deleteTasks() method.
            
            * This is also part of the Smoke test set
        
        
    4.2 Scripts
    ------------------------    
    
    The package.json file contains the following scripts:
    
    4.2.1  "test-login": "testcafe chrome ./pom/tests/Login.test.js"
    
        This script runs the following tests:
        
        a.test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
        b.test('As a user, I am NOT be able to log in with and invalid username', async t => {
        c. test('As a user, I am NOT able to log in with an invalid password', async t => {
        d. test('As a user, I am NOT able to log in without entering an username or password', async t => {
    
        It is invoked by using the following comand in the Terminal inside the directory:  npm run test-login
    
    4.2.2  "test-tasks": "testcafe chrome ./pom/tests/Task.test.js"
    
        This script runs the followint tests:
        
        a. test('As a user, I should be able to add a new Task with Today as the due date', async t => {
        b. test.meta('type','smoke')('As a user, I should be able to add a new Task with Tomorrow as the due date', async t => {
        c. test('As a user, I should be able to add multiple Tasks with Today as the due date', async t => {
        d. test.meta('type','smoke')('As a user, I should be able to add a new Project', async t => {
        e. test.meta('type','smoke')('As a user, I should be able to delete all of the tasks', async t => {
        
        It is invoked by using the following comand in the Terminal inside the directory: npm run test-tasks
    
    4.2.3  "test-login-dual-browser": "testcafe chrome:headless,safari:headless ./pom/tests/Login.test.js --skip-js-errors"
    
        This scripts runs the following test:
        
        test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
        
        in two browsers simultaneously: Chrome and Safari.   It also runs in headless mode (No actual browsers are opened) for Chrome.  Safari does not support headless mode.
        
        It is invoked by using the following comand in the Terminal inside the directory: npm run test-login-dual-browser
    
    5. METADATA/SMOKE TEST
    ----------------------
    
    There is one script that invokes specific scripts as part of a smoke test.  The script is:
    
    5.1 "smoke-test": "testcafe chrome ./pom/tests --test-meta type=smoke"
    
        This script runs all of the tests with the Meta Data : .meta('type','smoke')
        
        The scripts with this tag are:
        a. test.meta('type','smoke')('As a user, I should be able to add a new Task with Tomorrow as the due date', async t => {
        b. test.meta('type','smoke')('As a user, I should be able to add a new Project', async t => {
        c. test.meta('type','smoke')('As a user, I should be able to delete all of the tasks', async t => {
        
        It is invoked by using the following comand in the Terminal inside the directory: npm run smoke-test
        
        
    6. REPORTS
    ----------
    
    An execution report with detailed info of passed and failed test with graphics and charts can be issued by using the following two scripts:
    
    
    6.1  "test-report": "testcafe chrome ./pom/tests --skip-js-errors --reporter cucumber-json --reporter-json-folder=./pom/Reports/jsonResults"
    
    6.2 "generate-report": "node report-generator.js"
    
    They are invoked by running the following two commands:
    npm run test-report
    npm run generate-report
    
    The reports are placed in the following path: /pom/Reports/cucumberReport/index.html
        
     7. CREDITS
     ----------
 
     Developed and maintained by:
     Luis Cuauhtemoc Montoya (Wizeline) luis.cuauhtemoc@wizeline.com


      

