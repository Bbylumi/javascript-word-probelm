
function myfunction(number1, number2) {
    return number1 + number2;
}

console.log(myfunction(3, 2));
console.log(myfunction(-3, -9));
console.log(myfunction(7, 3));


function convert(minutes) {
    return minutes * 60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


function areaoftri(base, height) {
    return (base * height) / 2;
}

console.log(areaoftri(3, 2));
console.log(areaoftri(7, 4));
console.log(areaoftri(10, 10));


function calcAge(ageinyears) {
    return ageinyears * 365;
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

function getFirstVaule(array){
    return array(0);
}

console.log(getFirstVaule([1, 2, 3]));
console.log(getFirstVaule([80, 5, 10]));
console.log(getFirstVaule([-500, 0, 50]));



function addition(num){
    return num + 1
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3)); 