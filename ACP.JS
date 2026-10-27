var choice= prompt("Welcome to Perimeter Calculator Using Java Script! \n1.Area of a Rectangle.\n2 Area of a Triangle.\n3 Area of a Circle.\n4 Area of a Parellelogram");


if (choice == 1) {
var a= prompt('Enter Length')
var b= prompt('Enter Breadth')
var result= Number(a)*2 + Number(b)*2
alert( 'The Perimeter is' + result)}


if (choice == 2){
var d= prompt('Enter Amount of Side 1 ')
var e=prompt('Enter Amount of Side 2')
var f=prompt('Enter Amount of Side 3')
var result= Number(d)+Number(e)+Number(f)
alert ('The Perimeter is'+ result)}

if (choice==3){
var c= prompt('Enter Radius')
var result= 3.14 + Number(c)*Number(c)
alert('The Perimeter is'+ result)}

 if (choice=='4'){
 var h= prompt('Enter the Height')
 var cb= prompt('Enter the Corresponding Base')
 var result= Number(h)* Number(cb) + Number(h)* Number(cb)
 alert('The Perimeter is ' + result)}


