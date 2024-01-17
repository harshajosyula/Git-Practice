//converting the todays date to format "YYYY-MM-DD"

const today = new Date();
console.log(today)


const year = today.getFullYear();

const month = (today.getMonth() + 1).toString().padStart(2 //lenght
,0);  // padstart adds given the string to another string untill the given lenght is acheived 

const day = today.getDate().toString().padStart(2,0);

console.log("today date is ")

console.log(year+"-"+month+"-"+day)