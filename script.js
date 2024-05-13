// Задание 1
function sum(a, b)
{
    if(a < b)
    {
        return -1;
    } else if(a > b){
        return 1
    }else{
        return 0;
    }
}
var a1 = 23;
var b1 = 33;
console.log(sum(a1, b1));
// Задание 2
function fact(a)
{
    var sum = 1;
    for (let i = 1; i <= a; i++){
        sum *= i;
    }
    return sum;
}
console.log(fact(5));
// Задание 3
function transform(a, b, c){
    return a * 100 +  b * 10 + c
}
console.log(transform(1, 2, 3));
 
// Задание 4
function calculateArea(length, width) {
    if (width === undefined) {
        return length * length;
    } else {
        return length * width;
    }
}
console.log(calculateArea(3,4));
console.log(calculateArea(3));
// Задание 5
function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));

// Задание 6
function perfectNumbersInRange(min, max) {
    let perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}
console.log(perfectNumbersInRange(1, 100)); // Выведет все совершенные числа в диапазоне от 1 до 100
// Задание 7
function formatTime(hours, minutes = 0, seconds = 0) {
    let newHours = hours < 10 ? '0' + hours : hours;
    let newMinutes = minutes < 10 ? '0' + minutes : minutes;
    let newSeconds = seconds < 10 ? '0' + seconds : seconds;
    return `${newHours}:${newMinutes}:${newSeconds}`;
}
console.log(formatTime(11, 30, 30));
console.log(formatTime(11, 30));
console.log(formatTime(11));

// Задание 8
function formatSeconds(hours, minutes, seconds)
{
    return hours * 3600 + minutes * 60 + seconds;
}
formatSeconds(1, 0, 60);
// Задание 9
function secondsToTime(seconds) {

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let newHours = hours < 10 ? '0' + hours : hours;
    let newMinutes = minutes < 10 ? '0' + minutes : minutes;
    let newSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return `${newHours}:${newMinutes}:${newSeconds}`;
}
console.log(secondsToTime(3660)); 
// Задание 10
function Dates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    let totalSeconds1 = formatTime(`${hours1}:${minutes1}:${seconds1}`);
    let totalSeconds2 = formatTime(`${hours2}:${minutes2}:${seconds2}`);
    let difference = totalSeconds1 - totalSeconds2;
    return secondsToTime(difference);
}
console.log(Dates(12, 30, 15, 11, 29, 14));


