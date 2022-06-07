const fs = require("fs");
const generatePage = require("./src/page-template.js");
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);
  console.log("Portfolio complete! Check out index.html to see the output!");
});

//arrow function with only one paramter doesn't need ()
// for each array method example:
// const printProfileData = (profileDataArr) => {
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };
// printProfileData(profileDataArgs);
