const inquirer = require('inquirer');  // We call on the NPM application inquirer here
const fs = require('fs');

inquirer  //Below are all the prompts listed
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
      choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclpise Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },

    {
      type: 'input',
      name: 'user',
      message: 'What is your GitHub User Name?',
    },
  ])
  .then((data) => {




    const readMe =  //The template literal is engaged here to create the look we want while calling on the data obtained to fill in the responses
      `# ${data.title}
    


  ![License](https://img.shields.io/badge/license-${data.license.split(' ').join('')}-blue)

   * [Description](#Description) 

   * [Installation](#Installation)

   * [Usage](#Usage)

   * [Contributing](#Contributing)

   * [Tests](#Tests)

   * [License](#License)

   * [Questions](#Questions)



   ## Description
    ${data.description}




   ## Installation
    ${data.installation}




   ## Usage 
   ${data.usage}




   ##  Contributing
    ${data.contributing}




   ## Tests
    ${data.tests}




   ## License
    ${data.license}



   ## Questions

    Please reach out to me at ${data.email} if you have any questions.

    My GitHub Profile is located at the link below.
    
  <a href='https://github.com/${data.user}' target='_blank'>${data.user}</a>

   

   
    
    
    
    
    
    `;
    const fileName = `${data.title.toUpperCase().split(" ").join("")}.md`
    fs.writeFile(fileName, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
