// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0 ){
        console.log(numbers[i]);
    }
    if (numbers[i] === 23){
        break
    }
}



// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];
let firstname,surname,circle1=0,circle2=0;

for (let value of people){
    circle1 === 0 ? console.log("<ul>") : console.log('\t');
    for(let key in value){
        
        if(circle2 === 0){
            firstname=value[key] 
            circle2=1
             }
        else {
            surname=value[key]
            circle2=0
             }
}
    console.log(`<li><h1>Hello ${firstname} ${surname}</h1></li>`);
    if(circle1 === people.length-1) {console.log("</ul>")} 
    circle1++
}



// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное
const start=1,end=10;
function checkNumbers(start, end){
    for(let i = start; i <= end; i++){
        i % 2 ===0
                ?console.log(`${i} EVEN`)
                :console.log(`${i} NOT EVEN`);
        }
    }

checkNumbers(start, end);                       



// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

const num1=500,num2=403,num3=670;
function biggerNumber(num1,num2,num3){
    let bigger=0;
    const numbers = [num1, num2, num3];
    for(let i = 0; i < 3; i++){
        if(bigger<numbers[i]){
            bigger = numbers[i];
        }
    }
    console.log(bigger);
}

biggerNumber(num1,num2,num3);



// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка

for(let i=1; i<=100;i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(`${i} FIZZ BUZZ`);
    }else if(i%3 === 0){
        console.log(`${i} FIZZ`);
    }else if(i%5 === 0){
        console.log(`${i} BUZZ`);
    }
}

 