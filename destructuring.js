/*
*
* Homework Assignment #10: Destructuring
*
*/

// 1.  What is the differences between destructuring an object and destructuring an array?
/*
 First of all in array when packing information in array, all information stored inside
 in orderly manner. Where as in object every kind of information packed not in order but
 in pair with unique key (property and value pairs).
 while Destructuring meaning a special syntax for allow us "unpack or roll out" data or
 information kept inside, assigned in to many variables in bunch for our use and ease to
 deal further.
 */
//destructuring data from arrays is simple and made it more easy in ES6
//SEE HERE IS BASIC EXAMPLE below for Array
var introduction = ["My", "Name" , "is ", "Patel"];
var [greeting, pronoun,...rest] = introduction;

console.log(greeting);//My
console.log(pronoun);//Name
console.log(rest);//[ 'is ', 'Patel' ]

//further you can nesting variables inside
var [greeting1, pronoun1,...[xx,yy]] = introduction;
console.log(xx);
console.log(yy);
//Skipping items in array
var [aa,,bb,cc,] = introduction;
console.log(aa);//My
console.log(bb);//is
console.log(cc);//Patel
//nested array destructuring example
myColorsCombination = ["blue","#bfbf22",["ffffff","black"],"yellow"];
const [c1,c2,[c31,c32],c4] = myColorsCombination;
function showColor([x1,x2,[x31,x32],x4]) {
    console.log(x1, x2, x31, x32, x4); //blue #bfbf22 ffffff black yellow
}
showColor(myColorsCombination);
//Simple Example of Object destructuring
const myLibrary = {
            tittle : "God Dillusion",
            author : "Richard Dawkins",
            language : "English"
};
// Object Destructuring assigning variable
const { tittle, author, language } = myLibrary;
console.log(tittle);//God Dillusion
console.log(author);//Richard Dawkins
console.log(language);//English
//nested object destructuring
let findLocation = {
            name:"Robert",
            address: "129 Julia Ave, Wentworth Ville",
            city : "Sydney",
            contact : {
                email:"xyz.gmail.com",
                mobile: "042 1234567"
            }
};
// i also assigned default value in case not found in object created/supplied
const { name,address,city ,contact: {email="not given", mobile = null} } = findLocation;

function getLocation({ name,address,city ,contact: {email, mobile = 50} }) {
    console.log(`His name is ${name} and address ${address}.`);
    console.log(`The city name is ${city} where he lives having mobile no ${mobile} and email : ${email}`);

}
getLocation(findLocation);



