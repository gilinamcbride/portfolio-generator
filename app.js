const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//arrow function with only one paramter doesn't need ()
const printProfileData = (profileDataArr) => {
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};
printProfileData(profileDataArgs);
