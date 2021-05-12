let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

let myArray = myData.split(',');
console.log(myData);


let product = ['Underpants:6.99',
'Socks:5.99',
'T-shirt:14.99',
'Trousers:31.99',
'Shoes:23.99'];
let total = 0;
for (i = 0 ; i < product.length; i ++){
    
    let indexSemicolong = product[i].split(':')
    let name = indexSemicolong[0];
    let number = indexSemicolong[1];
    let conversionNumber = Number(number);
    
    total += conversionNumber;

    let itemText = name +" "+ conversionNumber

    console.log(product[i])
    console.log("SPLIT",indexSemicolong)
    console.log("NAME",name)
    console.log("NUMBER",number)
    console.log("NUMBER CONVERSION",conversionNumber)
    console.log("TOTAL",total)
    console.log("NEW ITEM LIST",itemText)
    
}

let myArray11 = ["Ryu","Ken","Chun-Li","Cammy","Guile","Sakura","Sagat","Juri"];

let arrayLength = myArray11.length

let lastItem = myArray11[arrayLength - 1]
let kastItemPop  = myArray11.pop();
let add2items = myArray11.push("manzana","pera");

let index = 0 ;
for(let i = 0 ; i < myArray11.length; i++){
    let overArray = myArray11[i] 
    index ++;
    
    console.log(overArray+ " index : "+ index)
}

let myString = myArray11.join(("-"))

console.log(kastItemPop)
console.log(lastItem)
console.log(myArray11)
console.log(myString)

let text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

if (text.includes("Duis")) {
    console.log("yes")
    let arrayyy = text.split(',')
    for( let i = 0 ; i < arrayyy.length ; i++){
        console.log(arrayyy[i])
    }
    
}else {
    console.log("no")
}

let totalSemana = 0;
// const semana = [10,19.80,10,86.25,10,10.64,25,15,15,86.97,52.41,25,27.47,20.18,12.26]
// const semana = [10,19.80,10,86.25,10,10.64,25,15,15,86.97,52.41,25,27.47,20.18,12.26]
// const semana = [10,10,10,73.04,15,37.22,15,16.77,32.70,99.58]
// const semana = [25.01,10.0,7.75,12.99,10,10,84.16,24.02,15,10,75,8.42,20.01]
const semana = [21.05,68.70,25,86.44,15.88,23.66,15,24.37,10,64.16,92.12,10,24.17,9.30]

for (let i = 0 ; i < semana.length ; i++){
    console.log(totalSemana += semana[i])
}


  