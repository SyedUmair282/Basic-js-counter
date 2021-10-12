// var a = 10;
// var b = 10;
// var c = a + b;
// alert("Addition is: " + c);
// console.log("Addition is: " + c);
// var full_name = prompt('Enter your Name', 'Your name');
// var standard = prompt('Enter your Class', 'Your class');
// var age = prompt('Enter your Age', 'Your age');
// var math = +prompt('Enter your maths marks', 'Your marks');
// var english = +prompt('Enter your english marks', 'Your marks');
// var compter = +prompt('Enter your computer marks', 'Your marks');
// var urdu = +prompt('Enter your urdu marks', 'Your marks');
// var islamiat = +prompt('Enter your islamiat marks', 'Your marks');
// var total_marks = math + english + compter + urdu + islamiat;
// var percentage = (total_marks * 100) / 500;
// document.write("**********************MARKSHEET**********************<br>");
// document.write("<br>Your name is: " + full_name);
// document.write("<br>Your class is: " + standard);
// document.write("<br>Your age is: " + age);
// document.write("<br>Your maths marks is: " + math);
// document.write("<br>Your english marks is: " + english);
// document.write("<br>Your computer marks is: " + compter);
// document.write("<br>Your urdu is: " + urdu);
// document.write("<br>Your islamiat is: " + islamiat);
// document.write("<br>Your total marks is: " + total_marks);
// document.write("<br>Your percentage is: " + percentage);
// if (percentage >= 80 && percentage <= 100) {
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// } else if (percentage >= 70) {
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Very Good");
// } else if (percentage >= 60) {
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: Good");
// } else if (percentage >= 50) {
//     document.write("<br>Grade: C");
//     document.write("<br>Remarks: Fair");
// } else if (percentage >= 45) {
//     document.write("<br>Grade: D");
//     document.write("<br>Remarks: Poor");
// } else if (percentage < 45) {
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Must come with parents");
// }

//TOSS GAME

// var head = prompt("Enter your name for head");
// var tail = prompt("Enter your name for tail");
// var toss = Math.random();
// var round = Math.round(toss);
// alert(round);
// if (round == 1) {
//     document.write("Head person win the toss");
// } else {
//     document.write("tail person win the toss");
// }

//fabioncci series

// var num = prompt("Enter the number for fab");
// for (var i = num - 1; i <= num; --i) {
//     num = parseInt(num) + parseInt(i);
//     if (i === 1) {
//         break;
//     }
// }
// document.write("Fabioncci result is: " + num);

//factorial

// var num = prompt("Enter the number for fac");
// for (var i = num - 1; i <= num; i--) {
//     num = num * i;
//     if (i === 1) {
//         break;
//     }
// }
// document.write("Factorial result is: " + num);

//left-triangle

// var a = prompt("Enter a number for triangle");
// for (var i = 1; i <= a; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");

// }

//right-triangle

// var a = prompt("Enter a number for triangle");
// for (var i = 1; i <= a; i++) {
//     for (var j = 1; j < a; j++) {
//         document.write(" ");
//     }
//     for (var k = 1; k <= i; k++) {
//         document.write("*");
//     }
//     document.write("<br>");

// }
function clear1() {
    var input1 = document.getElementById("clear");
    input1.value = "0";
}

function add() {
    var add1 = document.getElementById("clear");
    add1.value = parseInt(add1.value) + 1;
}

function sub() {
    var sub1 = document.getElementById("clear");
    sub1.value = parseInt(sub1.value) - 1;
    if (sub1.value <= 0) {
        sub1.value = 0;
    }
}