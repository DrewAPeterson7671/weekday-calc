// const targetDate = "11-08-2019";
//
// const dayNumbers = ["Monday", "Tuesday"
// "Wednesday", "Thursday", "Friday", "Saturday"
// "Sunday"];

export let leapYear = function(year) {
  if(typeof(year) !== typeof(2019)){
    return false;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0){
    return true;
  } else {
    return false;
  }
}
