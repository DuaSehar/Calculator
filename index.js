//import inquirer from 'inquirer';
import inquirer from 'inquirer';
import chalk from 'chalk';
async function userinput() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the Second number',
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Enter the operator',
            choices: ['add', 'subtract', 'multiply', 'division']
        }
    ]);
    let result;
    switch (answers.operator) {
        case 'add':
            let result = answers.num1 + answers.num2;
            console.log(chalk.red(`The answer of addition is ${result}`));
            break;
        case 'subtract':
            let result2 = answers.num1 - answers.num2;
            console.log(chalk.green(`The answer of subtraction is ${result2}`));
            break;
        case 'multiply':
            let result3 = answers.num1 * answers.num2;
            console.log(chalk.blue(`The answer of multiplication is ${result3}`));
            break;
        case 'division':
            let result4 = answers.num1 / answers.num2;
            console.log(chalk.yellow(`The answer of division is ${result4}`));
            break;
    }
}
userinput();
