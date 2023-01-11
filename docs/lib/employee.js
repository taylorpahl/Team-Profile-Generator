const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Employee {
    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                }
            ])
    }
    getId() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'ID',
                    message: 'What is your epmloyee ID?'
                }
            ])
    }
    getEmail() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email address?'
                }
            ])
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;