// Variables & Data Types
// 1.Create a variable using let and store your name. Print its data type using typeof.
 let name="shivani";
 console.log(typeof(name));
 

//2. Create a variable containing your age. Print its value and data type.
let age=24;
console.log("my age is",age,"typeof ", typeof(age));

// 3.Create a variable containing true. Print its value and data type.
var bool=true;
console.log(bool,typeof(bool))

// 4.Declare a variable without assigning any value. Print its value and data type.
var data;
console.log(data,typeof(data));
// 5.Create a variable containing null. Print its value and data type.
var data1=null;
console.log(data1,typeof(data1))
// 6.Create five variables containing a string, number, boolean, undefined, and null. Print all five.
var myname="shivani";
var myage=24;
var working=true;
var married;
var statues=null;
console.log(myname,myage,working,married,statues);

// 7.Create a variable containing your qualification and print its data type.
var qualif="btech";
console.log(typeof(qualif));

// 8.Create a variable containing your salary and check whether its data type is number.
var sal=8000;
console.log(typeof(sal));

// 9.Create a variable containing "100" and another containing 100. Print the data type of both.
var num1="100";
var num2=100;
console.log(typeof(num1),typeof(num2));

// 10. Create variables for your name, age, qualification, and working status. Print all their values and data types.
 var myname="shivani";
 var myage=24;
 var myqualif="btech";
 var working=true;
 console.log(myname,myage,myqualif,working)
 console.log(typeof(myname),typeof(myage),typeof(myqualif),typeof(working));

// Arrays
// 11.Create an array containing five fruit names. Print the complete array.
var fruits=["mango","apple","banana","kiwi","pineapple"]
console.log(fruits);
// 12.Create an array containing five numbers. Print the first element.
var nums=[22,86,37,67,53];
console.log(nums[0]);

// 13.Create an array containing six colors. Print the third element.
var colors=["red","pink","yellow","orange","purple","white"];
console.log(colors[2]);

// 14. Create an array containing five mobile brands. Print the last element using length.
var mobiles=["vivo","oppo","mi","redmi","iphone"]
console.log(mobiles[mobiles.length-1]);

// 15.Create an array containing seven numbers. Print the second-last element using length.
var num7=[2,3,1,5,8,12,86];
console.log(num7[num7.length-2]);

// 16.Create an array containing your favorite foods. Print the first, third, and last elements.
var foods=["rice","dal","samber","idly","dosa","pasta"];
console.log(foods[0],foods[2],foods[foods.length-1]);

// 17.Create an array containing five cricketer names. Print the fourth cricketer.
var cricketers=["dhoni","rohit","virat","sachin","singh"]
console.log(cricketers[3]);

// 18.Create an array containing different toys. Print the last toy dynamically using length - 1.
var toys=["teddy","barbie","panda","rc car"]
console.log(toys[toys.length-1]);

// 19.Create an array containing 10 values. Print the first, last, and second-last values.
var num=[9,8,7,6,5,43,2,34,78,60];
console.log(num[0],num[num.length-1],num[num.length-2]);

// 20.Create an array containing fruits, toys, and a cricketer's name. Print the complete array and any three individual values.
var allthings=["sachin","dhoni","barbie","panda","banana","apple"]
console.log(allthings)
console.log(allthings[1],allthings[2],allthings[allthings.length-1])

// Objects
// 21.Create an object containing name, age, and city. Print the complete object.
var obj1={
    name:"shivani",
    age:24,
    city:"hyd"
}
console.log(obj1);

// 22.Create an object containing your name, qualification, and company. Print the company.
var details={
    name:"shivani",
    qualification:"btech",
    company:"stackly"
}
console.log(details.company);

// 23.Create an object containing a fruits array. Print the second fruit.
var fruits={
    fruit:["mango","banana","orange","apple"] 
}
console.log(fruits.fruit[1]);

// 24.Create an object containing a toys array. Print the last toy dynamically.
var toys={
    toy:["Teddy Bear", "Toy Car", "Doll", "Lego", "Rubik's Cube", "Yo-Yo", "Toy Train"]
}
console.log(toys.toy[toys.toy.length-1])
// 25.Create an object containing cricketer and team. Print the cricketer's name.
var teams={
    cricketers:["virat","rohit","joe","bumrah"],
    team:["india","india","england","india"]
}
console.log(teams.cricketers[3]);

// 26.Create an object containing fruitName, toyName, and cricketer. Print all three properties.
var all={
    fruits:["mango","apple","banana","orange"],
    toys:["Teddy Bear", "Toy Car", "Doll", "Lego"],
    cricketers: ["virat", "rohit", "joe", "bumrah"]
}
console.log(all.fruits);
console.log(all.toys);
console.log(all.cricketers);

// 27.Create an object with two arrays: students and courses. Print the first student and second course.
var stud={
    names:["shivani","bhavani","sravani"],
    course:["cse","ece","cse"]
}
console.log(stud.names[0],stud.course[1])
// 28.Create an object containing a mobile array and print the third mobile.
var mobiles={
    mobile:["vivo","oppo","redme","mi","iphone"]

}
console.log(mobiles.mobile[2])
// 29.Create an object containing employeeName, skills, and experience. Print the second skill.
var empDetails={
    empname:"shivani",
    skill:["html","css","javascript"],
    experience:0
}
console.log(empDetails.skill[1])

// 30.Create an object containing your personal information and print any three individual properties.
var personalData={
    name:"shivani",
    age:24,
    working:"job",
    add:"xyz",
    mobile:9876543211
}
console.log(personalData.name,personalData.working,personalData.mobile)

// Arithmetic Operators
// 31.Create two numbers and perform addition, subtraction, multiplication, and division.
var oper1=10;
var oper2=3;
console.log(oper1+oper2);
console.log(oper1-oper2);
console.log(oper1*oper2);
console.log(oper1/oper2);

// 32.Create two numbers and find their remainder using %.
var num1=10;
var num2=4;
console.log(num1%num2)

// 33.Find the result of 2 ** 5.
console.log(2**5);
// 34.Create two variables and perform all six arithmetic operations: +, -, *, /, %, **.
var n1=20;
var n2=5;
console.log(n1+n2, n1-n2, n1*n2, n1/n2, n1%n2, n1**n2);


// 35.Create a variable containing 10. Increase its value by 5 using +.
var num=10;
 num+=5
console.log(num)

// Increment & Decrement
// 36.Create a variable with value 10 and use pre-increment. Print the result.
var a=10;
var b=++a;
console.log(a);

// 37. Create a variable with value 10 and use post-increment. Print the result.
var a=10;
var b=a++;
console.log(a)
console.log(b);

// 38.Create a variable with value 20 and use pre-decrement. Print the result.
var d=20;
var c=--d;
console.log(d);
console.log(c);

// 39.Create a variable with value 20 and use post-decrement. Print the result.
var a=20;
var b=a--;
console.log(a);
console.log(b);

// 40.Create two variables and demonstrate the difference between pre-increment and post-increment.
var x=10;
var y=20;
 var a=++x;
 var b=y--;
console.log(x);
console.log(y);
console.log(a);
console.log(b);


// Assignment Operators
// 41.Create a = 20 and b = 10. Use += and print the result.
var a=20;
var b=10
console.log(a+=b)
// 42.Create a = 50 and b = 20. Use -= and print the result.
var a=50;
var b=20;
console.log(a-=b)

// 43.Create a = 10 and b = 5. Use *= and print the result.
var a=10;
var b=5;
console.log(a*=b)

// 44. Create a = 100 and b = 10. Use /= and print the result.
var a=100;
var b=10;
console.log(a/=b)

// 45.Create a = 25 and b = 4. Use %= and print the result.
var a=25;
var b=4;
console.log(a%=b)

// Comparison, Logical & Ternary
// 46.Compare two numbers using <, >, <=, and >=. Print all results.
var num1=20;
var num2=10;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1>=num2);
// 47.Compare a number and a string using both == and ===. Observe the difference.

var z=30;
var y="30";
console.log(z==y);
console.log(z===y);
// 48.Create two conditions using numbers and combine them using &&, ||, and !.
var num1=40;
var num2=60;
console.log(num1 > 5 && num2 < 1);
console.log(num1 > 5 || num2 < 1);
console.log(!(num1 > 5));

// 49.Create a variable called age. Using a ternary operator, print "Eligible" if the age is 18 or above; otherwise print "Not Eligible".
var myage =15
console.log(myage>=18?"Eligible":"Not Eligible")
// 50. Create marks variable and use a ternary operator:
// If marks are 35 or above → print "Pass"
// Otherwise → print "Fail"
var marks=35;
console.log(marks>=35?"PASS":"FAIL")
