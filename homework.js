// Ниже приведён объект 'bobsCar'
// Напишите конструкцию if таким образом
// Если свойство 'mileage' ровно нулю то выводится строка 'Bob owns Subaru Impreza and it is brand new!'
// Если свойство 'mileage' меньше тысячи то выводится строка 'Bob owns Subaru Impreza and it is almost new!'
// В остальных случаях выводится строка 'Bob owns Subaru Impreza and it is old!'

const bobsCar = {
    make: 'Subaru',
    model: 'Impreza',
    info: {
        color: 'blue',
        mileage: 0
    }
}



if(bobsCar.info.mileage===0){
    console.log('Bob owns Subaru Impreza and it is brand new!');
}else if(bobsCar.info.mileage<1000){
    console.log('Bob owns Subaru Impreza and it is almost new!');
}else{
    console.log('Bob owns Subaru Impreza and it is old!');
}





// Напишите код, который проверит возраст Боба
// Если Боб младше 12лет выведет строку 'This is Bob Smith and he is a child!'
// Если Боб младше 18лет выведет строку 'This is Bob Smith and he is a teenager!'
// Если Бобу 18лет или больше выведет строку 'This is Bob Smith and he is a adult!'

const bob = {
    name: 'Bob',
    surname: 'Smith',
    age: 18
}


if(bob.age <12){
    console.log('This is Bob Smith and he is a child!');
}else if(bob.age<18){
    console.log('This is Bob Smith and he is a teenager!');
}else{
    console.log('This is Bob Smith and he is a adult!');
}



// Ниже приведены две переменные 'x, y'
// Напишите код, который проверит каждую из переменных
// Если какая-то из них отрицательная, сделает из неё положительную и сложит их
// x = -2 y = -3 результат 5
// попробуйте изменить значения 'x, y'
let x = 5;
let y = 10;

if(x<0&&y<0){
    x*=-1;
    y*=-1;
    
}else if(y<0){
 y*=-1;
}else if(x<0){
    x*=-1;
}

console.log(x+y);




// Ниже приведён объект 'registry' - запись о владении недвижимостью
// скопируйте объект и измените данные владельца
// данные нового владельца приведены в объекте 'newOwner'
const registry = {
    owner: {
        name: 'Mary Gold',
        age: 45
    },
    property: {
        type: 'House',
        bedrooms: 4,
        address: {
            country: 'England',
            city: 'London',
            street: 'Fulton rd.',
            houseNumber: 30

        }
    }
}

const newOwner = {
    name: 'Jack Smith',
    age: 50
}

const registry2 = JSON.parse(JSON.stringify(registry));

registry2.owner.age = 50;
registry2.owner.name = 'Jack Smith';

console.log(registry);
console.log(registry2);




