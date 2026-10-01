

// 1.Create a function named hello that prints "Hello Everyone".
function hello(){
    console.log("Hello Everyone");
    
}
hello()

// 2.Create a function named welcome that prints "Welcome to JavaScript" and call it.
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome()

// 3.Create a function named navi that prints your name.
function navi(){
console.log("shivani");
}
navi()
// 4. Create a function named message that prints three different messages.
function message(para){
    console.log(para);
}
message("hi everyone");
message("how are you");
message("bye...!");

// 5.Create a function named numbers that prints numbers from 1 to 5 using a for loop.
function numbers(){
    for(let i=1;i<=5;i++)
        console.log(i);
}
numbers()
// 6.Create a function named check that contains an if condition and prints a message when the condition is true.
  function check(){
    if( true){
        console.log("condition is true")
    }
  }
  check()
// 7.Create a function named details that prints your name, qualification, and role.
function details(){
 console.log("shivani")
 console.log("btech")
 console.log("frontend")
}
details()
// 8.Create a function named company that prints your company name.
function company(){
console.log("stackly");
}
company()
// 9.Create a function named welcomeUser and call it three times.
function welcomeUser(parameter){
    console.log(parameter)
}
welcomeUser("welcome");
welcomeUser("welcome");
welcomeUser("welcome");
// 10.Create two different functions and call both functions.
function myDetails(){
    console.log("my name is shivani")
}
function addData(){
    console.log("im from hyd");
    
}
myDetails()
addData()


console.clear();


// Parameters & Arguments
// 11.Create a function with one parameter and print the parameter value.
function num(n){
    console.log(n);
}
num(4)
// 12.Create a function with two parameters and print both values.
function nums(a,b){
    console.log(a,b)
}
nums(2,7)
// 13.Create a function add(a,b) that prints the addition of two numbers.
function add(a,b){
    console.log(a+b);
}
add(4,7)
// 14.Create a function sub(a,b) that prints the subtraction of two numbers.
function sub(a,b){
    console.log(a-b);
}
sub(26,9)
// 15.Create a function multiply(a,b) that prints the multiplication of two numbers.
function mul(a,b){
    console.log(a*b);
}
mul(2,7)
// 16.Create a function divide(a,b) that prints the division of two numbers.
function div(a,b){
    console.log(a/b);
}
div(20,5)
// 17.Create a function student(name, age) and print the student's details.
function student(name,age){
    console.log("my name is "+name,",my age is "+age)
}
student("shivani",22)
// 18.Create a function employee(name, role, salary) and print all three values.
function employee(name,role,salary){
  console.log("my name is "+name,",my role is "+ role+",my sal is "+salary)
}
employee("shivani","frontend",10000)
// 19.Create a function with four parameters and pass four arguments while calling it.
function numbers(a,b,c,d){
    console.log(a,b,c,d);
}
numbers(1,2,3,4)
// 20.Create a function with six parameters and pass six different values.
function numbs(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}
numbs(1,2,3,4,6,23)

console.clear();
// Default Parameters
// 21.Create a function student(name, department, cgpa) with a default value for department.
function student(name,cgpa, department="CSE"){
console.log(name);
console.log(department);
console.log(cgpa);
}
student("shivani","ece",82)
student("shivani",82)
// 22.Create a function user(name, age = 18) and call it without passing the age.
function user1(name, age = 18){
    console.log(name,age)
}
user1("shivani");
// 23.Create a function employee(name, role = "Developer") and call it with only the name.
function employee(name, role = "Developer"){
    console.log(name,role)
}
employee("shivani")
// 24.Create a function form(name, department, cgpa, disability = "no") similar to the function in your notes. Call it twice with different arguments.
function form(name, department, cgpa, disability = "no"){
console.log(name, department, cgpa, disability);
}
form("shivani","cse",5)
form("sravani","ece",8,"yes")
//25.Create a function with two normal parameters and one default parameter.
function myfun(val1,val2,val3=6){
 console.log(val1,val2,val3)
}
myfun(2,7)
myfun(2,9,6)
console.clear();

// Return
// 26.Create a function that accepts two numbers and returns their addition.
function add(a,b){
    return a+b;
}
let addition=add(3,5)
console.log(addition);

// 27.Create a function that accepts two numbers and returns their subtraction.
function sub(a,b){
    return a-b;
}
let subtraction=sub(33,5)
console.log(subtraction);

// 28.Create a function that accepts two numbers and returns their multiplication.
function mul(a,b){
    return a*b;
}
let multiplication=mul(3,4)
console.log(multiplication);

// 29.Create a function that accepts two numbers and returns their division.
function div(a,b){
    return a/b;
}
let division=div(30,5)
console.log(division);

// 30.Create a function salary() that returns 40000. Store the returned value in a variable and print it.
function salary(){
 return 40000;
}
let amount=salary()
console.log(amount);
// 31.Create a function that accepts an employee's salary and returns the salary.
function empsalary(sal){
 return sal
}
let amt=empsalary(60000)
console.log(amt);
// 32.Create a function that returns a person's name. Store the returned value in a variable and print it.
function myname(){
    return "shivani";
}
let name1=myname();
console.log(name1);

// 33.Create a function that returns "Pass" if marks are 35 or above and "Fail" otherwise.
function marks(num){
    if (num>=35){
       return "pass";
    }
    else{
        return "fail";
    }
}
console.log(marks(35));


// 34.Create a function that accepts price and discount and returns the discount value.
function afterdiscount(price,discount){
    return (price*discount/100);
}
console.log(afterdiscount(300,10));

// 35. Create a function that returns the result of an arithmetic operation and use that returned value in another function.
function operation(a,b){
     return a+b;
}
function display(result){
    return result;
}
let val=operation(4,5)
let final=display(val)
console.log(final)

console.clear();

// Outer Scope
// 36.Create a variable outside a function and access it inside the function.
var num=10;
function outerAccess(){
 console.log(num);
}
outerAccess()
// 37.Create an object outside a function containing name and designation. Create a function that prints those values.
let my={
    name:"shivani",
    designation:"btech"
}
function mydata(val){
 
    console.log(val.name,val.designation);
}
mydata(my)
// 38.Create a variable salary outside a function. Create a function that adds a bonus to that salary and prints the result.
let sal=10000;
function bonus(bons){
   return (sal+bons)
}
let final1=bonus(5000);
console.log(final1);


// 39.Create an object containing employee details outside a function. Access its properties inside a function.
var empdata={
    ename:"shiavni",
    esal:123,
    eloc:"hyd"
}
function empdetails(){
     for(let data of Object.values(empdata)){
         console.log(data);
     }
}
empdetails()
// 40. Create two functions that access the same variable created outside both functions.
var name="shivani"
function outside(){
console.log(name);
}
function inside(){
    console.log(name)
}
inside()
outside()


console.clear();


// Named, Anonymous & Arrow Functions
// 41.Create a named function that accepts a parameter and prints it.
function myPersonal(name){
 console.log(name);
 
}
myPersonal("shivani")

// 42. Create an anonymous function stored inside a variable and call it.
let anonymous=function (){
console.log("hello");
}
anonymous()
// 43.Create an arrow function that accepts one parameter and prints it.
let arrow=a=>{
  console.log(a);
  
}
arrow(10)


// 44. Create an arrow function with two parameters that adds two numbers.
let add1=(a,b)=>{
 return a+b;
    
}
let res=add1(2,3)
console.log(res);

// 45.Create a named function, anonymous function, and arrow function that all perform the same addition operation.
function add2(a,b){
    console.log(a+b);
}
let add3=function(a,b){
    console.log(a+b);
    
}
let add4 = (a,b)=>{
    console.log(a+b);
}
add2(3,6);
add3(6,9);
add4(33,8);

// IIFE
// 46.Create an IIFE that immediately prints "Hello JavaScript" when the program runs.
(
    function(){
        console.log("hello JavaScript");
        
    }
)();
// 47.Create an IIFE that accepts a name parameter and prints "Hello" followed by the name.
(
    function(name){
        console.log("hello "+name);
        
    }
)("shivani");
// 48.Create an IIFE that accepts product and discount parameters and displays a special-offer message, similar to the example in your notes.
(
    function(product,discount){
             
             alert("special-offer on "+product+"-"+discount+"% discount")
    }
)("saree",60);
// Callback & Higher-Order Functions
// 49.Create an add function that accepts a callback and two numbers. Add the numbers and then call the callback function with two numbers.
function addition1(callback,a,b){
       let res=a+b;
       console.log(res);
       
       callback(a,b);
}
function sub(a,b){
    console.log(a-b);
    
}
addition1(sub,7,3);


// 50.Create a sub function and pass it as a callback to the add function. The add function should first print the addition result and then execute the subtraction callback, following the structure from your notes.
function sub10(a,b){
    console.log(a-b);
    
}
function add20(a,b,callback){
    console.log(a+b);
    callback(a,b);
}
add20(12,3,sub10)
