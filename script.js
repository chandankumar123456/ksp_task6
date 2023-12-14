let num1 = 10;
let num2 = 20;
console.log("OR Operator (||): ")
console.log(num1 == 10 || num2 == 20);
console.log("AND Operator (&&): ")
console.log(num1 == 10 && num2 == 20);
console.log("NOT Operator (!): ")
console.log(!(num1 == 10 && num2 == 20));


function myFunction(){
    alert("This is called using a function ");
}
myFunction();
function additon(num1,num2){
    return num1+num2;
}
console.log(additon(10,20));
function subtraction(num1,num2){
    return num1-num2;
}
console.log(subtraction(10,20));

let time = 0;
time  = 6;
if(time>=6 && time<12){
    console.log("Good Morning");
}
else if(time>=12 && time<18){
    console.log("Good Afternoon");
}
else if(time>=18 && time<22){
    console.log("Good Evening");
}

let i;
for(i=0;i<10;i++){
    console.log(i);
}
i = 0;
while(i < 10){
    console.log("Chandan Kumar");
    i++;
}