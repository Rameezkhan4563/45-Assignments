//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName1 = "My name is Rameez ahmed khan";
//LOWER CASE
console.log(personName1.toLowerCase());
//UPPER CASE
console.log(personName1.toUpperCase());
//TITLE CASE
//step 1:
var words = personName1.split(" ");
//step 2:
var titleCaseName = "";
//step 3:
for (var i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCaseName);
