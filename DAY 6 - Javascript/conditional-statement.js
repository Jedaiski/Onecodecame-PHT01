//Control Flow Structure
//Conditional statement

let age = 18;

//if statement
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//if-else else-if statement
let temperature = 27;
if (temperature < 0) {
    console.log("It is freezing!");
}else if (temperature >= 0 && temperature < 20) {
    console.log("It is cool outside.")
}else if (temperature >=20 && temperature < 26) {
    console.log("It's warm outside")
}else {
    console.log("It's hot!");
}


//switch statement
let day = 'Monday'
switch (day) {
    case 'Monday':
        console.log("Is the start of the week");
        break;
    case 'Friday':
        console.log("Is the end of the week");
        break;
    default:
        console.log("It is just a regular day");
        break;
}