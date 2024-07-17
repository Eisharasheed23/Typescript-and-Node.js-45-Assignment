// 45 question answers :
// Q1:I have Installed Node.js, Typescript ans VS Code on my laptop.
// Q2:  Personal Message: Store a person’s name in a variable and print 
// a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
// Q2 */

// ANS2:
let personName:string= "eisha";
console.log(`Hello ${personName} would you like to learn some TypeScript today? `);

// Q3:  Name Cases: Store a person’s name in a variable, and then print that 
//  person’s name in lowercase, uppercase, and titlecase.
//  Q3: */

// ANS3:
let person:string= "eisha";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.charAt(0).toUpperCase() + person.slice(1).toLowerCase());

// Q4:  Famous Quote: Find a quote from a famous person you admire. 
//   * Print the quote and the name of its author. Your output should look something like the following, 
// * including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
// Q4: */

// ANS4:
let authorName= "Albert Einstein";
console.log(`${ authorName} once said, “A person who never made a mistake never tried anything new.”"`);

// Q5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name 
//  in a variable called famous_person. Then compose your message and store it in a new variable 
//  called message. Print your message.
//  Q5: */  

// ANS5:
let famousPerson = "QUAID-e-AZAM";
let message =  "said there are two powers in the world; one is the sword and the other is the pen"
console.log(`${famousPerson} ${message}`);

// Q6:   Stripping Names: Store a person’s name, and include some whitespace characters 
// at the beginning and end of the name.make sure you use each character combination,"\t" (tab) and "\n" (new line) at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name
//  after stripping the white spaces.
//  Q6: */

// ANS6 :
let strippingName= "\n\t eisha rasheed \t\n" ;
console.log(strippingName);
console.log(strippingName.trim());

// Q7:   Number Eight: Write addition, subtraction, multiplication, and division 
// operations that each result in the number 
// 8, Be sure to enclose your operations in print statements to see the results.  

// ANS7 :
let addition: number= 4+4;
let subtraction: number = 10-2;
let multiplication: number = 2*4;
let devision: number = 16/2 ;
console.log(addition,subtraction, multiplication,devision);

// Q8:   Q8:
// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.
// */

// ANS8: 
console.log( 5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);

// Q9 :  Favorite Number: Store your favorite number in a variable.
//  Then, using that variable, create a message that reveals your favorite number.
//  Print that message.*/

// ANS9: 
let favoriteNumber: number= 2;
console.log(`my favourite number amoung all numbers is ${favoriteNumber}`);

// Q10:  Adding Comments:
//    Choose two of the programs you’ve written,and add at least one comment to each. 
//    If you don’t have anything specific to write because your programs are too simple
//     at this point, just add your name and the current date at the top of each program file. 
//     Then write one sentence describing what the program does.*/

                                    // ANSWER
// Comments in Typescript are annotations within the code used for documentation or
// to temporarily disable parts of it , and they are ignored by the compiler during code execution

        
// ANS10 :  i have took question no 8 , in iths program we have 4 operations, each should result in no 8.
console.log( 5+3);    // its an addition opperation.
console.log(10-2);    //its an subtraction operation.
console.log(2*4);     //its an multiplication operation.
console.log(16/2);    //its an devision operation.
//all the above mentioned operations results in no 8.

//I have took question no 9, in this program we have to store our favourite number in a variable ,
  
let favoriteNumberis: number= 2;   //my favourite number,
console.log(`my favourite number amoung all numbers is ${favoriteNumber}`);  // than i have create a message that reveals my favorite number.
// and than i have print my  message.

// Q11:     Names: Store the names of a few of your friends in a array called names.
//   Print each person’s name by accessing each element in the list, one at a time.*/
 
// ANS11:
let names = ["Eisha","Hafsa","Hamza","Minahil"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Q12:   Greetings: Start with the array you used in Exercise 11,
//  but instead of just printing each person’s name, print a message to them. 
//  The text of each message should be the same, but each message should be personalized with 
//  the person’s name.*/

// ANS12:
let friendsName= ["Eisha","Hafsa","Hamza","Minahil"]
    console.log(`Hello ${friendsName[0]}, how are you? hope you are doing good... `);
    console.log(`Hi, ${friendsName[1]} you are looking pretty today... `);
   console.log(`Hello ${friendsName[2]}, how are you? hope you are doing good... `);
   console.log(`Hello ${friendsName[3]}, how are you? hope you are doing good... `);

//    Q13:  Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.” 
    
// ANS13:
let favoriteModeOfTransportation=["SUV","land Cruiser parado", "lamborgeni"];
favoriteModeOfTransportation.forEach((favoriteModeOfTransportation) =>
console.log(`I would like to own a  ${favoriteModeOfTransportation} .`))
console.log(` But my dream car is ${favoriteModeOfTransportation[1]}` );

// Q14 :  Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.

//ANS14:   
let invites = ["Nawal" , "Sawera", "Kinza"];
invites.forEach((invitation) =>
console.log( ` Hi ${invitation}, I would like to invite you for a dinner today, at my house ..As new dinner table won’t arrive in time for the dinner,  its a sunday today so lets catch up today at dinner on 8:00 PM and captured a beautiful moments.... `));
  
    // Q15:  Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


// ANS15 :
let guestinvites = ["Nawal" , "Sawera", "Kinza"];
console.log(`${guestinvites[2]} is not joining us for dinner.`)
guestinvites.splice(2,2,"Sadia")

guestinvites.forEach((invitation) =>
console.log( ` Hi ${invitation}, I would like to invite you for a dinner today, at my house ..
    As its a sunday today so lets catch up today at dinner on 8:00 PM and captured a beautiful moments.... `));

// Q16:  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// ANS16 :
let newguestinvites = ["Nawal" , "Sawera", "Kinza"];
console.log(`${newguestinvites[2]} is not joining us for dinner.`)
newguestinvites.splice(2,2,"Sadia"),
console.log(`I found out a bigger dinner table today!!!so lets add new members to the dinner table....`);
newguestinvites.unshift("Maria")
newguestinvites.push("Tehmina")
let middleGuest: number=Math.floor(newguestinvites.length/2);
newguestinvites.splice(middleGuest,0,"Mariam");
newguestinvites.forEach((invitation) =>
console.log( ` Hi ${invitation}, I would like to invite you for a dinner today, at my house ..
    As its a sunday today so lets catch up today at dinner on 8:00 PM and captured a beautiful moments.... `));
 // Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// ANS17:
let shrinkGuestList = ["Nawal" , "Sawera", "Kinza"];
console.log(`${shrinkGuestList [2]} is not joining us for dinner.`)
shrinkGuestList .splice(2,2,"Sadia"),
console.log(`I found out a bigger dinner table today!!!so lets add new members to the dinner table....`);
shrinkGuestList .unshift("Maria")
shrinkGuestList .push("Tehmina")
let middGuest: number=Math.floor(shrinkGuestList .length/2);
shrinkGuestList .splice(middleGuest,0,"Mariam");
shrinkGuestList .forEach((invitation) =>

    console.log( ` Hi ${invitation}, I would like to invite you for a dinner today, at my house ..
    As its a sunday today so lets catch up today at dinner on 8:00 PM and captured a beautiful moments.... `));
    
    console.log("Unfortunately!! New dinner table won’t arrive in time for the dinner, and i have space for only two guests");
    while(shrinkGuestList.length > 2){
        let removeGuest=shrinkGuestList.pop();
        console.log(`Sorry, ${removeGuest} I cant invite you to dinner`)
      }
console.log("invitation to the last 2 guests");
shrinkGuestList.forEach(guestinvitation => console.log(`Hey ${guestinvitation} you are still invited for dinner`))
      
     shrinkGuestList.pop();
      shrinkGuestList.pop();
      
      
      
      console.log(shrinkGuestList,"Empty List"); 

    //   Q18:
//     Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// ANS18:
let favouritePlaces= ["Makkah Madina" ,"Swizerland","Phuket","Bali","Japan"];
console.log("Original Order",favouritePlaces);
console.log("Alphabetical Order", [... favouritePlaces].sort());
console.log("still Original Order", favouritePlaces);
console.log("Reverse The Order",  [...favouritePlaces].reverse());
console.log("Still in its Original Order",favouritePlaces);
console.log("Reverse To Change The Order ",favouritePlaces.reverse());
console.log("Back To Original Order",favouritePlaces.reverse());
console.log("Sort In An Alphabatical Order",favouritePlaces.sort());
console.log("Reverse Alphabatical Order",favouritePlaces.reverse());

// Q19:    Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

// Ans19:
let GuestList = ["Nawal","Sawera","Kinza"];
let lengthofguest = GuestList.length
console.log(`I am  inviting ${lengthofguest} guests to a dinner`)

// Q20:     
// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

// ANS20:
let naturalResuorces = ["Mountains","Rivers","Trees","Hills"]
console.log(naturalResuorces);
naturalResuorces.forEach(rivers => console.log(rivers));

// Q21:  They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// ANS21:
type Person = {
    name : String ,
    age :   Number ,
    gender : String 
}

let Person = {
    name : "Eisha",
    age :  20 ,
    gender : "Female"
}

console.log(Person);

// Q22:  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.

// ANS22:
let fruitNames = ["Apple","Strawberry","Mango","Kiwi"];
// Array index error :
console.log(fruitNames[4]);
 
// error removed:
console.log(fruitNames[3]);

//Q23:  Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// ANS23:
// TEST NO 1 :
//True Statement :
let car = "SUV";
console.log(`Is car == "SUV' ? I predict "true ".`);
console.log(car == 'SUV');
 //False Statment :
 console.log(`Is car = Mercedes ? I predict "false".`);
 console.log(car == `Mercedes`);
 //TEST NO 2 :
 //True statement:
console.log(`Is car !== "Honda" ? I predict "true".`);
console.log(car !== `Honda`);
//False Statement:
console.log(`Is car == "Honda" ? I predict "false".`);
console.log(car ==`Honda`);
//Test NO 3 :
//True Statement:
console.log(`Is car !== "Toyota" ? I predict "true".`);
console.log(car !== `Toyota`);
//False Statement :
console.log(`Is car == "Toyota" ? I predict "false".`);
console.log(car == `Toyota`);
//TestNo4:
//True Statement:
console.log(`Is car !== "BMD" ? I predict "true".`);
console.log(car !==`BMD`);
//False Statement:
console.log(`Is car == "BMD" ? I predict "true".`);
console.log(car== `BMD`)
//Test No 5:
//True Statement:
console.log(`Is car !== "Audi" ? I predict "true".`);
console.log(car !==`Audi`);
//False Statement:
console.log(`Is car !== "Audi" ? I predict "true".`);
console.log(car==`Audi`);

//Q24 :  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

//ANS24:
//• Tests for equality and inequality with strings :
let pen = "dollar";
console.log(pen == "dollar");   //true
console.log(pen !== "dollar");  //false

//• Tests using the lower case function :
console.log(pen.toLowerCase()=="dollar" ); //true
console.log(pen.toLowerCase()== "Dollar"); //false

//• Numerical tests involving equality and inequality: 
let num1 = 7
let num2 = 4
console.log( num1 != num2)  // true
console.log( num1 == num2)  //  false

//greater than and less than :
console.log(num1 > num2) //true
console.log(num1 < num2) //false

//greater than or equal to and less than or equal to :
console.log(num1 >= num2)   //true 
console.log(num1 <= num2)   //false

//• Tests using "and" and "or" operators :
console.log(num1 != num2 && num1 > num2)  //true
console.log(num1 < num2 || num1 == num2)  //false

//• Test whether an item is in a array:
let vegetables = ["Carrot", "Chilli", "Capsicum", "Cucumber"]
console.log('Is "Cucumber" in vegetables?')

console.log(vegetables.includes("Cucumber"))

// Test whether an item is not in a array:
console.log('Is "Cucumber" not in vegetables?')

console.log(!vegetables.includes("Cucumber"))


// Q25: Alien Colors #1: Imagine an alien was just shot down in a game.
//  Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, 
// print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails.
//  (The version that fails will have no output.)

// ANS25:
let alienColor = "green";
if (alienColor === "green"){
    console.log("Congratulations you earned 5 Points");
}

if(alienColor === "red"){
    console.log("you are fail");
}

//Q26 : Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
 //and write an if-else chain.
//• If the alien’s color is green, print a statement that 
//the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.
//  ANS26:
let alien = "green";
if(alien=== "green"){
    console.log("Congratulations!, You just earned 5 points from if statement");

}
else{
    console.log("Congratulations!, You just earned 10 point");
}

if(alien=== "red"){
    console.log("Congratulations!, You just earned 5 points from if statement");

}

else{
    console.log("Congratulations!, You just earned 10 point from else statement");
}

// Q27: 
//  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

// ANS27:
// VERSION 1 :
let aliencolor= "green"
if(aliencolor=== "green"){
    console.log("alien is green, the player earned 5 points.")

}

else if(aliencolor==="red"){
    console.log(" alien is red, that the player earned 15 points")
}
else{console.log(" alien is yellow,  the player earned 10 points")
};
// version2:
let alien_color="red"
if(alien_color=== "green"){
    console.log("alien is green, the player earned 5 points.")

}

else if(alien_color==="red"){
    console.log(" alien is red, that the player earned 15 points")
}
else{console.log(" alien is yellow,  the player earned 10 points")
};
// version:3 
let Alien = "yellow"
if(Alien=== "green"){
    console.log("alien is green, the player earned 5 points.")

}

else if(Alien==="red"){
    console.log(" alien is red, that the player earned 15 points")
}
else{console.log(" alien is yellow,  the player earned 10 points")
};

// Q28: Stages of Life: Write an if-else chain that determines a person’s stage of life.
//  Set a value for the variable age, and then:
//  • If the person is less than 2 years old, print a message that the person is a baby.
 
//  • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
 
//  • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
 
//  • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
 
//  • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
 
//  • If the person is age 65 or older, print a message that the person is an elder.
 
// ANS28:

let age = 20
if(age<2){;
    console.log("The person is a baby.")
}
else if(age >= 2 && age  <4){
  (console.log("The person is a toddler."))
}
else if(age >= 4 && age < 13){
    console.log("The person is a kid.")
}
else if (age >= 13 && age < 20){
    console.log("The person is a teenager.")
}
else if (age >= 20 && age < 65){
    console.log(" The person is an adult.")
}
else{
    console.log(" The person is an elder.")
};


// Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
// that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// ANS29:
let favourite_fruits= ["Strawberry","Mango","Apple"]

if(favourite_fruits.includes("Strawberry")){
    console.log("I really like strawberry.")
}
if(favourite_fruits.includes("kiwi")){
    console.log("I dont like kiwi alot")
}
if(favourite_fruits.includes("Mango")){
    console.log("I really like mango.")
}
if(favourite_fruits.includes("Pineapple")){
    console.log("I dont like pineapple alot.")
}
if(favourite_fruits.includes("Apple")){
  console.log("I really like apple .")
};

// Q 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
//  Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// ANS30:
let userNames = ["Admin","Sania","Eisha","Amnaa","Mariam"]
userNames.forEach(login =>{
   if(login==="Admin") {console.log(`Hello ${login} , would you like to see a status report?`)}

   else{
    console.log(`Hello ${login},  thank you for logging in again.`)  }
}
)

// Q 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// ANS31:

let usernames= ["Admin","Sania","Eisha","Amna","Mariam"]
usernames = []
if(usernames.length===0){
    console.log("We need to find some users!")
}
else{
usernames.forEach(login =>{
   if(login==="Admin") {console.log(`Hello ${login} , would you like to see a status report?`)}

   else{
    console.log(`hello ${login},  thank you for logging in again.`)  }
}
)}

// Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has,
//  print a message that the person will need to enter a new username.
//   If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// ANS32:

let current_users =  ["Admin","Sania","Eisha","Amna","Mariam"]
let new_users = ["Aliyana","Eisha","Horrain","Hafsa","Sania"]
new_users.forEach(user => {
    let condition1 = current_users.some(current_user1=> current_user1.toLowerCase()===user.toLowerCase())
    if(condition1){
  console.log(`Sorry ${user} username is not available`)
    }
    else{
      console.log(`This username ${user} is available`)
    }
  })
  
//   Q33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th,
//   except 1, 2, and 3.
 
//   • Store the numbers 1 through 9 in a array.
 
//  • Loop through the array.
 
//  • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//   Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// ANS33 :

let ordinalNumbers = [ 1, 2 ,3 ,4 ,5 ,6,7,8,9]
ordinalNumbers.forEach(numbers => {
    if(numbers===1){
        console.log(`${numbers}st`)
    }
    else if(numbers===2){
        console.log(`${numbers}nd`)
    }
    else if(numbers===3){
        console.log(`${numbers}rd`)
    }
    else{
        console.log(`${numbers}th`)
    }
});


// Q34 : // Pizzas: Think of at least three kinds of your favorite pizza. 
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and 
// then an additional sentence, such as I really love pizza!


// ANS34:

let favvouritePizza = ["Chicken Tikka  Pizza", "BBQ Pizza", "Doubble Cheesy layers Pizza"]

for(let i=0; i< favvouritePizza.length; i++){
    console.log(favvouritePizza[i])
}

for(let i=0; i < favvouritePizza.length; i++ ){

    console.log(`I like ${favvouritePizza[i]}`)
}
console.log("Chicken Tikka is my go-to choice. ")
console.log("BBQ Chicken has sensatinal flavors in every bite.")
console.log("Double Cheesy layers is classic and is too cheesy.")
console.log("I really like pizza!!")

// Q35: Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have in common.
//   You could print a sentence such as Any of these animals would make a great pet!

// ANS35:
let animals = ["Lion","Tiger","Wolf"]

for(let i=0; i< animals.length; i++){
        console.log(`A ${animals[i]} is a powerful predator.`)}

console.log("These animals are apex predators in their respective habitats.");

// Q36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a 
// message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. 
//  Call the function.

// ANS36:
function make_shirt(size: string, printMessage : string){
    console.log(`You selected ${size} size shirt with ${printMessage} prints on it`)}
    
    make_shirt("Medium","Stay COOL")


//    Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.

// ANS37:
function make_Shirt(size: string="large", printmassage: string="I love TypeScript"){
    console.log(`Creating a  ${size} shirt with ${printmassage} prints on it`)}

    make_Shirt();
    make_Shirt("medium");
    make_Shirt("small","I am a Programmer");


    // Q38:// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
    // The function should print a simple sentence, such as Karachi is in Pakistan.
    //  Give the parameter for the country a default value. Call your function for three different cities, 
    //  at least one of which is not in the default country.

    // ANS38:
    function describe_city(cityName: string, countryName: string = "Pakistan"){
        console.log(`${cityName} is in ${countryName}.`)
    }
describe_city("karachi"),
describe_city("Islamabad"),
describe_city("Naran,Kagan");
describe_city("Tokyo","Japan");

// Q39:City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


// ANS37:
function city_country(city : string, country: string)
{
    console.log(`${city},${country}.`)
}
city_country("Karachi","Pakistan")
city_country("Doha","Qatar")
city_country("tokyo","Japan")

// Q 40: Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title,
//  and it should return a Object containing these
//  two pieces of information. Use the function to make three dictionaries representing different albums.
//   Print each return value to show that Objects are storing the album information correctly. 
//   Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//   If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.

// ANS40:
function make_album (artist_name: string, album_title: string, tracks?: number){
    let album : { artist : string,title : string, tracks? : number} ={
               artist: artist_name,
               title: album_title,
    }
       if (tracks !== undefined){
        album.tracks = tracks;
       }
    
       return album;
     }
    
    let album1= make_album("Sania", "Album 1");
    let album2 = make_album("Eisha", "Album 2");
    let album3 = make_album("Amna","Album 3", 7);
    
     console.log(album1)
     console.log(album2)
     console.log(album3)
    
    //  Q 41: Magicians: Make a array of magician’s names. 
    //  Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// ANS41:

let magiciansName = ["Ammar Baig", "Ahmed Ali", "Ali Mossa", "Zaheer Malik"]
function show_magicians( magiciansName:string[]){
    magiciansName.forEach(magicians => {
        console.log(magicians)
    });
}

show_magicians(magiciansName)

// Q 42: Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// ANS42:

let magiciansName1= ["Ammar Baig", "Ahmed Ali", "Ali Mossa", "Zaheer Malik"]
function show_magicians1( magiciansName:string[]){
    magiciansName.forEach(magicians => {
        console.log(magicians)
    });
}

show_magicians(magiciansName1)

function make_great (Magicians_Name1 : string[]){
    return Magicians_Name1.map(Magicians => `The Great ${Magicians}`)
    }

let great_magicians= make_great(magiciansName1)
show_magicians1(great_magicians)


// Q43:
// Q 43: Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names.
//   Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with
//  the Great added to each magician’s name.

// ANS43:
let Magicians_Name2 = ["Ammar Baig", "Ahmed Ali", "Ali Mossa", "Zaheer Malik"]

function show_magicians2 (Magicians_Name2: string[]){
Magicians_Name2.forEach(Magicians => {
        console.log(Magicians)
    });
}
function make_great1 (Magicians_Name2 : string[]){
    return Magicians_Name2.map(Magicians => `The Great ${Magicians}`)
    }

    let copy_magiciansName = Magicians_Name2.slice()

    let copy_greatMagicians = make_great1(  copy_magiciansName)

    console.log("\nOriginal array\n")
show_magicians2( Magicians_Name2)

console.log("\nCopy array\n")
show_magicians2(copy_greatMagicians);

// Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

// ANS44:
function Sandwitch (...SandwitchItems: string[]){

    console.log("\n Making sandwitch with following items🥪 \n")

    SandwitchItems.forEach(items => console.log("*" + items))

        console.log("\nEnjoy your Sandwitch 😋\n")
    
 }
 Sandwitch("vegetable","coleslaw","Mayo","corn","ketchup")

 Sandwitch("chicken","coleslaw","cheese")

 Sandwitch("egg","coleslaw")

//  Q 45: Cars: Write a function that stores information about a car in a Object. 
    // The function should always receive a manufacturer and a model name.
    //  It should then accept an arbitrary number of keyword arguments. 
    //  Call the function with the required information and two other name-value pairs, 
    //  such as a color or an optional feature.
    //  Print the Object that’s returned to make sure all the information was stored correctly.

// ANS45:
console.log("\n\t\"CARS\"")

function caarr(description:string[]){
    description.forEach( element => console.log("-" + element));
}
console.log("CAR DESCRIPTION:")
caarr(["munufacturer:\"FERRARI\""])
caarr(["modelName:\"DAYTONA SP3\""])
caarr(["color:\"BLACK\""])
caarr(["features:\"POWER STEERING,DRIVER AND PASSENGER AIRBAG\""])







 
























