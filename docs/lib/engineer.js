
class Engineer {
    getGithub() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your Github username?'
                }
            ])
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;