//P1
//function scope in js
// var fab = "beat";

// function beat() {
//   var fab = "breath";

//   function breath(fab) {
//       fab = "bread";
//       bread = "yum";
//       console.log("bread");
//   }
//   breath();
// }

// beat();
// fab; // beat
// bread; //
// breath(); //error out of scope function
// console.log("Hi");
//P2
// var fab = function beat() {
//   var fab = "breathe";

//   function breathe(fab){
//     fab = beat;
//     fab; //function
//   }
//   breathe();
// };

// fab();
// beat(); //error becz of function scope
//P3
// var fab;

// try {
//   fab.length;
// }
// catch(err) {
//   console.log(err); //type error
// }

// console.log(err); //reference error becz of try-catch block scope

//P4
//lexical scope n dynamic scope
// function fab(){
//   var beat = "beat";

//   function breathe(){
//       console.log(beat);//lexical scope as I didn't pass anything

//   }
//   breathe();
// }
// fab();

//P5
var bread = "bread";

function fab(str){
  eval(str);
  console.log(bread);
}

fab("var bread = 42;"); //call by value

//P1
var feb = "feb";
(function(){
  var feb = "feb2";
  console.log(feb); //feb 2
})();
console.log(feb); //feb

//P2
var feb = "feb";
(function(bread){
  var feb = bread;
  console.log(feb); //feb
})(feb);
console.log(feb); //feb

//P3
function feb(){
  var bread = "bread";
  for (let i=0; i<bread.length; i++){
    console.log(bread.charAt(i));
  }
console.log(i); //reference error Block scope of i
}
feb();

//P4
let(feb){
  feb = "feb";
  console.log(feb);// feb
}
feb; //reference error

//P5
try{throw void 0}
catch(feb){
  feb = "feb";
  console.log(feb);
}
feb; //reference error ! block scope

//P1 Dynamic Scope
function feb(){
  console.log(bread); //Reference Error !
}
function breed(){
  var bread = "bread";
  feb();
}
breed();

// ImQ Undefined var is not assigned any value and Undeclared var is not declared before use so gives runtime error 
//P2 Hoisting
a;
b;
var a = b;
var b = 2;
b;
a; // blank output

//P3 Hoisting
var a = b();
var c = d(); //TypeError d is not a function
a;
c;

function b(){
    return c;
}

var d = function(){
    return b();
}
//P4 
function b(){
    return c;
}
var a;
var b;
var c;
a = b();
c = d();
a;
c;
d = function(){ //not declared so Reference error ! d is not defined
    return b();
}

//P5
feb(); // ImQ butter becz Hoisting Functions First
var feb = 6;

function feb(){
    console.log("bread");
}
function feb(){
    console.log("butter");
}

//P1
var b = a(0);
console.log(b); // 31 Hoisting Recursion

function a(feb){
    if(feb>20) return feb;
    return b(feb + 2);
}
function b(feb){
    return c(feb) + 1;
}
function c(feb){
    return a(feb*2);
}
file:///D:/BroadMainCourseTech/HtmlCssJavaScript%20Notes/advanced-javascript/advjs-slides.pdf
https://www.programiz.com/javascript/online-compiler/



// const enroll = document.getElementById('enrollClick');
// const clear = document.getElementById('clearClick');

// class clsperson {
//   constructor(nameInput, emailInput, websiteInput, imageLinkInput, skills, gender) {
//     this.nameInput = nameInput;
//     this.emailInput = emailInput;
//     this.websiteInput = websiteInput;
//     this.imageLinkInput = imageLinkInput;
//     this.skills = skills;
//     this.gender = gender;
//   }
// }
// var persons = [];
// enroll.addEventListener('click', function () {
//   var name = document.getElementById("nameInput").value;
//   if (name == "") {
//     alert("Name must be filled out");
//     return false;
//   }
//   var email = document.getElementById("emailInput").value;
//   if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
//     alert("You have entered an invalid email address!")
//     return (false);
//   }

//   var website = document.getElementById("websiteInput").value;

//   var pattern = new RegExp('^(https?:\\/\\/)?' +
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
//     '((\\d{1,3}\\.){3}\\d{1,3}))' +
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
//     '(\\?[;&amp;a-z\\d%_.~+=-]*)?' +
//     '(\\#[-a-z\\d_]*)?$', 'i');

//   if (website == "") {
//     alert("Website url must be filled out");
//     return false;
//   }
//   else if (!(pattern.test(website))) {
//     alert("You have entered an invalid Website url !");
//     return false;
//   }

//   var imageLink = document.getElementById("imageLinkInput").value;
//   if (imageLink == "") {
//     alert("Image url must be filled out");
//     return false;
//   }

//   var skill = [];
//   $.each($("input[name='skill']:checked").prop("checked", true), function () {
//     skill.push($(this).val());

//   });

//   var genders = [];
//   $.each($("input[name='gender']:checked").prop("checked", true), function () {
//     genders.push($(this).val());
//   });
//   var skills = skill.join(", ");
//   var gender = genders;
//   var Person = new clsperson(document.getElementById("nameInput").value,
//     document.getElementById("emailInput").value, document.getElementById("websiteInput").value,
//     document.getElementById("imageLinkInput").value, skills, gender);




//   persons.push(Person);
//   document.getElementById("nameInput").value = "";
//   document.getElementById("emailInput").value = "";
//   document.getElementById("websiteInput").value = "";
//   document.getElementById("imageLinkInput").value = "";


//   tblClient = document.getElementById("tableData");
//   for (var i = persons.length - 1; i < persons.length; i++) {
//     mycurrent_row = document.createElement("tr");
//     mycurrent_cell = document.createElement("td");

//     mycurrent_cell.appendChild(document.createTextNode(persons[i].nameInput));
//     mycurrent_cell.appendChild(document.createElement("br"));
//     mycurrent_cell.appendChild(document.createTextNode(persons[i].gender));
//     mycurrent_cell.appendChild(document.createElement("br"));
//     mycurrent_cell.appendChild(document.createTextNode(persons[i].emailInput));
//     mycurrent_cell.appendChild(document.createElement("br"));

//     var link = document.createElement("a");
//     link.href = String(persons[i].websiteInput);
//     link.target = "_blank";
//     link.innerText = String(persons[i].websiteInput);

//     mycurrent_cell.appendChild(link);

//     mycurrent_cell.appendChild(document.createElement("br"));
//     mycurrent_cell.appendChild(document.createTextNode(persons[i].skills));
//     mycurrent_row.appendChild(mycurrent_cell)
//     mycurrent_cell.setAttribute("class", "col-sm-10");
//     mycurrent_cell.setAttribute("font-size", "1rem");

//     mynewcurrent_cell = document.createElement("td");
//     mynewcurrent_cell.setAttribute("class", "col-sm-2");

//     var img = document.createElement('img');
//     img.setAttribute("src", String(persons[i].imageLinkInput));
//     img.setAttribute("width", "90");
//     img.setAttribute("height", "90");
//     img.setAttribute("class", "rounded mx-2 my-2 ");
//     img.setAttribute("alt", "Student Image");

//     mynewcurrent_cell.appendChild(img);
//     mycurrent_row.appendChild(mynewcurrent_cell);
//     mycurrent_row.setAttribute("border", "border-primary");
//     mycurrent_row.setAttribute("class", "fade-in");

//     if (i % 2 != 0) {

//       mycurrent_cell.style.background = "rgb(205, 248, 120)";
//       mynewcurrent_cell.style.background = "rgb(205, 248, 120)";
//     } else {

//       mycurrent_cell.style.background = "white";
//       mynewcurrent_cell.style.background = "white";
//     }
//     tblClient.appendChild(mycurrent_row);

//   }
// });


// clear.addEventListener('click', function () {
//   var table = document.getElementById("tableData");
//   var rowCount = table.rows.length;
//   if (rowCount - 1 > 0)
//     table.deleteRow(rowCount - 1);
//   else
//     alert("Student record is already empty");

// });

// (function() {
  
//   window.addEventListener('load', function() {
//     // Get the forms to add validation styles to
//     var forms = document.getElementsByClassName("needs-validation");
//     var enroll = document.getElementById("enrollClick");
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       enroll.addEventListener('click', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add("was-validated");
//       }, false);
//     });
//   }, false);
// })();






