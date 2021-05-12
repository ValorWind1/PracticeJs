const items =[

{ name : "Clock" , price:20},
{ name : "Car" , price:1000},
{ name : "Ball" , price:5},
{ name : "Pen" , price:2},
{ name : "PC" , price:200},
{ name : "XBOX" , price:400},
{ name : "Monitor" , price:300},

]

// FILTER
// FILTER CREATES NEW ARRAYS WITH THE PASSED CONDITION
const filtering = items.filter(items => items.price <= 5 )
console.log(filtering)

//MAP 
// MAP ITERATES OVER ARRAY IT ALSO CREATES NEW ARRAY
const iterating = items.map(i => i)
console.log(iterating)
// getting only the name 
const iteringnames = items.map(i => i.name)
console.log(iteringnames)

//FIND
// find a specific element in the array 
const find = items.find( i => i.price === 200)
console.log(find)

//FOR EACH
items.forEach((i) => {
    console.log(i.name)
});


// SOME
//TEST IF THERES A(ONE) ELEMENT AND RETURNS TRUE OR FALSE
const some = items.some(i => i.price === 100000)
console.log(some)


//EVERY
//TEST IF THERES ALL ELEMENTS MEETS CONDITION AND RETURN TRUE OR FALSE
//VERY SIMILAR TO SOME
const every = items.some(i => i.price >= 1)
console.log(every)


//REDUCE
// EXECUTES YOUR FUNCTION ON EACH ELEMENT OF THE ARRAY RESULTING IN ONE VALUE
const reduce = items.reduce((total, i) => {
    return i.price + total
},0) // THIS 0 IS YOUR STARTING POINT 
console.log(reduce)



//INCLUDES
// TAKE ONE SINGLE ARGUMENT, TRUE OR FALSE IF ITEM IS IN THE ARRAY
const stuff = [1,2,3,4,5]
const include1 = stuff.includes(2)
console.log(include1)

const array1 = items.map(i => i.name)
const includes = array1.includes("XBOX")
console.log(includes)




const array11 = [1,3,5,7,9,13,15,17,18,24,26,28,31,32,37,39,80]

const red = array11.reduce((total , i) => {
            return i + total
        },0)

console.log(red)


const arrayPokemon = [{name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"},
{name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"},
{name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"},
{name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"},
{name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/"},
{name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/"},
{name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/"}]


var lookup = {};
for (let i = 0; i < arrayPokemon.length; i++) {
    lookup[arrayPokemon[i].name] = arrayPokemon[i];
}

console.log("POKE Look", lookup.squirtle)



const numArray1 = ["sem","dan","lor","arie","lok","ban","opw","sdads","sdad"]

const filtering_1 = numArray1.filter(i => i.toLowerCase().startsWith("s"))

console.log(filtering_1)

// SEARCH  
const indexForSearch = 0 ; 
for (let i = 0 ; i < numArray1.length ; i ++) {
    if (numArray1[i] === "dan"){
        console.log("SAME",numArray1[i])
    }
}
