/* BRONZE

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 
*/


/* SILVER

Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

*/

let readMe = {
    string: "Sean",
    Number: 9,
    boolean: false,
    object: {
        random: "car"
    }
}

console.log(typeof readMe.string)

if (typeof readMe.string =="string") {
    console.log("this is a string");
} else if (typeof readMe.object == "object") {
    console.log("this is an obkect");
} else if (typeof readMe.number == "number") {
    console.log("this is a number");
} else if (typeof readMe.boolean == "boolenan") {
    console.log("this is a boolean");
} else {
    console.log("what are you?");
}