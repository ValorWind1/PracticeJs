const person = {
    name: {
        firstName : "Bob",
        lastName : "Smith"
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      console.log(this.name.firstName + ' ' + this.name.lastName + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      console.log('Hi! I\'m ' + this.name.firstName + '.');
    }
  };


console.log(person.bio())
console.log(person.greeting())
console.log(person.name.firstName)
// you can set up new object props
console.log(person.interests[1] = "Snowboard")
console.log(person)

// ************************************************************

const Band = {
    name:"Nivana",
    nationality : "US",
    genre : "Punk-grunge",
    members : 4,
    formed : 1990,
    split:1994,
    albumns :[
        {
            name :"alysumn",
            release : 1992
        },
        {
            name: "hearth shaped box",
            release: 1997
        }
    ]

}


Band['BandInfo'] = "formed during the 90, became a hit sesation etc etc etc"

console.log(Band)
// ************************************************************

class Person{
    constructor(first,last,age,gender, interest){
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }
         bio() {
            console.log("HEY THERE: ",this.name.first+", "+this.name.last+", "+this.age+", "+this.gender+", "+this.interest)
        }  
}   


let person1 = new Person("nancy","pelocy",2,"female",["soccer","baseball"]);
let person2 = new Person("dan","ley",345,"male",["tennis","Video Games"]);

console.log("PERSONNSSSSSS")
console.log(person2.valueOf())
console.log(person1)
console.log(person1.bio())
console.log(person2.bio())
//******************************************************* */
class Teacher extends Person {
    constructor(first,last,age,gender, interest,subject){
        super(first,last,age,gender, interest);
        this._subject = subject;

    }
    get subject(){
        return this._subject
    }
    set subject(newSubject){
        this._subject = newSubject;
    }
}

let Snape = new Teacher("dan", "lol" , 4 , "male", ["magic"],"history" )
console.log(Snape.bio())

console.log(Snape.subject)
Snape.subject = "art"

console.log(Snape.subject)

// ************************************************************
let cars = new Object();
cars.model = 'toyota';
cars.color = 'black';
cars.year = 2020;
cars.model = ['le']


console.log(cars)

// *************************

class Shape{
   constructor (name,sides,sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
        
   }       
        calcPerimeter(){
            let total = 0
            if(this.name === "triangle"){
                for (let i = 0 ; i < this.sides.length ; i++){
                    console.log(total += this.sides[i])     
                }          
            }else{
                console.log(total = this.sideLength * 4)
                }
            }
}

class circle extends Shape{
    constructor(radius,name,sides,sideLength){
        super(name,sides,sideLength);
        this.radius = radius;
    }

    
    
}
    
  
let triangle1 = new Shape("triangle",[2,3,4],0)
let square1 = new Shape("square",[2,2,2],2)

console.log(triangle1.calcPerimeter())
console.log(square1.calcPerimeter())
// console.log(triangle1)
// console.log(square1)


//**********************************************************

//JSON 

// 