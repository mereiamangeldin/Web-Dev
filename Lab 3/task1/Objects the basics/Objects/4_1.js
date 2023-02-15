/*Sum object properties*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for (let key in salaries){
    sum += salaries[key]
}
alert(sum)

/*Multiply numeric property values by 2*/

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof key == "number"){
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};