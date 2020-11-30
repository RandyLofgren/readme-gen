const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information for your project.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contribution guidelines for your project.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the test instructions for your project.',
    },
    
    {
      type: 'list',
      message: 'What license would you like added to the ReadMe?',
      name: 'license',
      choices: ['MIT License', 'Not MIT', 'Not Not MIT'],
    },
  ])
  .then((data) => {




    const readMe =
    `# ${data.title}
    


  ![License](https://img.shields.io/badge/license-${data.license.split(' ').join('')}-blue)

    
    
    
    
    
    
    `;
    const fileName = `${data.title.toUpperCase().split(" ").join("")}.md`
    fs.writeFile(fileName, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
