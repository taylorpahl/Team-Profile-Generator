
class Intern {
    getSchool() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school are you currently attending?'
                }
            ])
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;