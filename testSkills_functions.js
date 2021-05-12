function random(number) {
    return Math.floor(Math.random()*number);
  }
  console.log(random(3))
  console.log(random(9))
  console.log(random(1000000))


  let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']


function randomElementfromArray (array) {
    
     let RnD = Math.floor(Math.random() * array.length);

     return array[RnD]

}

console.log(randomElementfromArray(names))
