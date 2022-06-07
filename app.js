const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// fs.writeFile("index.html", pageHTML, (err) => {
//   if (err) throw new Error(err);
//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

inquirer
  .prompt([
    {
      type: "input",
      name: "input",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));

//arrow function with only one paramter doesn't need ()
// for each array method example:
// const printProfileData = (profileDataArr) => {
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };
// printProfileData(profileDataArgs);
