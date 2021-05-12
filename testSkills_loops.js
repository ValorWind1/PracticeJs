const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
let user = "Biggles";

for (let i = 0; i < cats.length; i++) {

    if (i === cats.length - 1) {
        console.log(info += 'and ' + cats[i] + '.')
      } else {
        console.log(info += cats[i] + ', ')
      }
    }

    console.log("***********************************")

for (let i = 0 ; i < cats.length ; i ++) {
    
    if( cats[i] === user){  
       console.log(user)
       break;
    }else{
        console.log(cats[i])
    }
}


console.log("***********************************")

const array1 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const contains1 = array1.filter( i => i === 1 || i > 10 && i < 20  )
console.log(contains1)

for (let i = 0 ; i < array1.length ; i ++) {
  
  if (contains1[i]){
    console.log(contains1[i])
    
    
  }
}

console.log("***********************************")

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let peopleCounter = 0 ; 
const accepted = []
const denied = []
while(peopleCounter < people.length){

  if(people[peopleCounter] === "Anne" || people[peopleCounter] === "Bruce"){
   accepted.push(people[peopleCounter])
  }else{
    denied.push(people[peopleCounter])
  }
  console.log(people[peopleCounter])
  peopleCounter ++;
}

console.log("ACCEPTED: ",accepted)
console.log("DENIED: ",denied)