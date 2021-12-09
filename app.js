/*Chapter:1

alert ("Welcome");


alert("Error! Please enter a valid password")


var text ="Welcome to JS Land...\n Happy Coding!";
alert(text)


alert("Welcome to Js Land...")
alert("Happy Coding!")


var a="Hello...I can run JS through my web browser's console"
console.log(a) 

Chapter:2

var username=""

var myname="Muhammad Sufyan"

var message="Hello World"
alert(message);

var studentname="Jhone Doe"
var studentage="15 years old"
var studentability="Certified Mobile Application Developer"
alert(studentname);
alert(studentage);
alert(studentability);

var PIZZA="PIZZA \n PIZZ \n PIZ \n PI \n P"
alert(PIZZA);

var email="sufyanirfan0321@gmail.com"
email="My email address is " + "sufyanirfan0321@gmail.com" 
alert(email);

var book = "A smarter way to learn JavaScript"
book = "I am trying to leaarn JS from the book " +  "A smarter way to learn JavaScript"
alert(book);

document.write("Yah! I can write HTML content through JavaScript");

var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design); 

chapter:3

var age = 15
age = "I am "+ 15  + " years old."
alert (age) 

var visit = 14
visit = "You have visited this site" + 14 + " times. "
alert(visit);

var birthyear = 2005
birthyear = "My birth year is " + 2005
document.write(birthyear)

var visitorname ="John Doe"
var producttitle ="T-shirt"
var quantity = 5
var shop = "www.xyzClothing.com"
document.write( visitorname + " ordered " +  quantity  +  producttitle  + " on " +  shop) 

Chapter:4

var a = 5
var b = 10
var c = 15
console.log(a + b + c)

ILLEGAL VARIABLES
var my name = sufyan
var 123 = number
var * = star
var @ = at the rate
var & = and

LEGAL VARIABLES
var number = 123
var name = "sufyan"
var $ = "dollar"
var _ = "underscore"
var sufyan123 = ""

var*/ 





//chapter:5

/*var a = 15
var b = 10
var add = a + b
var subtract = a - b
var multiply = a * b
var divide = a / b

document.write ("Sum of " , a , "and" , b , "is" , add) 
document.write (a , "-" , b , "=" , subtract) 
document.write (a , "*" , b , "=" , multiply) 
document.write (a , "/" , b , "=" ,  divide) 

var a = "Value after variable declaration is: ?? ."
document.write(a)
a = 5
a = ++5
document.write (" Value after increment is: " , a)
a = a + 7
document.write("Value after addition is:" , a)
a = --a
document.write("Value after decrement is: " , a)
a = a / 3
document.write ("The remainder is : 0")

var a = 600
a = 600 * 5
document.write("Total cost to buy 5 tickets to a movie is " , a)

var tempetureinC = 25
tempeture = (25*9/5)+32
document.write("25oC is " , tempetureinC , "oF")

var tempetureinF = 70
tempetureinF = (70 - 32) * 5/9
document.write("70oF is " , tempetureinF , "oC")


var price1 = 650
document.write("Price of item 1 is " , price1)
var item1 = price1 * 3
document.write(" Ordered quantity of item 1 is 3")
var price2 = 100
document.write("Price of item 2 is" , price2)
var item2 = price2 * 7
document.write(" Ordered Quantity of item 2 is 7")
var charges = 100
document.write(" Shipping charges is" , charges)
var total = price1 + item1 + price2 + item2 + charges
document.write ("total cost of your order is " , total)

var  totalmarks= 980
document.write("Total marks :" , totalmarks ) 
var marksobtained = 804
document.write("Marks obtained :" , 804)
document.write("percentage = " , marksobtained / totalmarks * 100)

var dollar = 10
var rial = 25
document.write ("Total Currency in PKR :" , dollar * 104.80 + rial * 28)

var a = 2468
a = 2468 + 5 * 10 / 2
console.log(a)

var currentyear = 2016
document.write("Current Year :" , currentyear)
var birthyear = 1992
document.write("Birth Year" ,  birthyear)
var yourage = currentyear - birthyear
document.write ("Your Age is :" , yourage)

var radius = 20
document.write("Radius of a circle :" , radius)
var circumference = 2 * 3.142 * radius
document.write("The circumference is :" , circumference)
var area = 3.142 * radius * 2
document.write("The ares is :" , area)

var snack = "chocolate chip"
var currentage = 15
var maxage = 65
var amount = 3
var snacksperday = maxage - currentage


CHAPTER 6-9
var a = 10
document.write("The value of a is :" , a)
a = ++a
document.write("The value of ++a is :" , a)
a = a++
document.write("The value of a++ is :" , a)
a = --a
document.write("The value of --a is :" , a)
a = a--
document.write("The value of a-- is :" , a)

var a = 2
var b = 1
var result = --a - --b + ++b + b--
document.write(--a)
document.write(--a - --b)
document.write(--a - --b + ++b)
document.write(--a - --b + ++b + b--)
document.write(result)

var a = prompt("Enter your name")
alert("HEllO")

var a = +prompt("Enter any number")
var b = a * a
alert(b)

var english = prompt("Enter Subject 1")
var maths = prompt("Enter Subject 2")
var science = prompt("Enter Subject 3")
var totalmarks = 300
var engmarks = +prompt("Enter English Marks")
var mathsmarks = +prompt("Enter Maths Marks")
var scimarks = +prompt("Enter Science Marks")
var total = engmarks + mathsmarks + scimarks
document.write(total)
document.write(total / totalmarks * 100)

CHAPTER 9- 11

var cityname = prompt("Enter City Name")
if (cityname = "Karachi") {
    alert("Welcome to city of Lights");
}

var gender = prompt("Write Your GEnder")
if (gender == "male") {
    alert("Good Morning Sir")
} else 
    if (gender == "female") {
        alert("Good Morning Ma'am")
    }


var signalcolor = prompt("Enter signal color" )

if (signalcolor == "red") {
    alert("Must Stop")
    
    } else
    if (signalcolor == "Yellow") {
    alert("Ready to move")
}

var a = prompt("Tell remaining fuel in your")
 if (a <= "0.25 litres"){
     alert(" Please refill the fuel in your car")
 }

  var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

 if("car" < "cat"){
alert("car is smaller than cat");
}
*/






