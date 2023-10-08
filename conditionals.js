var age = 10;
if(age >= 65) {
    console.log("You get your income from your pension")
} else if(age >= 18 && age < 65) {
    console.log("Each month you get a salary")
} else if(age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}

var day = "Sunday";
switch (day) {
  case 'Monday':
    console.log('go to work')
    break;
  case 'Tuesday':
    console.log('go to gym')
    break;
  case 'Wednesday':
    console.log('go to pool')
    break;
  case 'Thursday':
    console.log('go to bar')
    break;
  case 'Friday':
    console.log('go to club')
    break;
  case 'Saturday':
    console.log('go to park')
    break;
  case 'Sunday':
    console.log('go to church')
    break;
  default:
    console.log('There is no such day')
}
