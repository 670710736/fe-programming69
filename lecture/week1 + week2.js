// กำหนดฟังก์ชันชื่อ greet
function greet(name) {
  console.log("Hello, " + name + "!");
  console.log("Welcome to JavaScript programming.");
}

// เรียกใช้ฟังก์ชันพร้อมส่งค่าพารามิเตอร์
greet("Alice");
  

// System.out.println("Hello World!") ; 
// console.log("Hello World!") ; 

const fruits = ["Apple" , "Banana" , "Cherry"] ;

const [a,b,c] = fruits ;
// console.log(a)
// console.log(b)
// console.log(c)
const [x, ,z] = fruits ;
// console.log(z)

//object
const person  = {
  firstname : "John" ,
  lastname : "Doe" ,
  age : 38 ,
  city : "Bangkok" 
}

const{firstname , age} = person ;
// console.log(firstname)
// console.log(age)
const {city : hometown} = person ;
// console.log(hometown) ; 



const student = {
  name : "Mali" ,
  scores : { math : 80 ,
             english : 92}
} ;

const {scores : { math } } = student ; // score mat ของ student 
// console.log(math) ;
function showStudent({name , scores}){
    console.log(`${name} ได้คณิต ${scores.math} คะแนน`) ;
}
showStudent(student) ; 


const arr1 = [1,2,3] ;
const arr2 = [4,5,6] ;

const combined = [...arr1 , ...arr2] ;
console.log(combined)

const copy = [...arr1] ; 
copy.push(99) ;
console.log(arr1) ;
console.log(copy) ;


const person_1 = {name : "John" , age : 30} ;
const updated = {...person_1 , age : 31} ;
console.log(updated) ; 

const [first,...others] = [10,20,30,40] ;
console.log(first) ;
console.log(others) ;

function sum(...numbers){ // ... = รับกี่ตัวก็ได้
  let total = 0 ; 
  for (let n of numbers) {
     total += n ;
  }
  return total ;
}
console.log(sum(1,2)) ;
console.log(sum(1,2,3,4)) ;


const products = [
  { name : "เมาส์" , price : 350 , inStock : true },
  { name : "คีย์บอร์ด" , price : 1200 , inStock : true },
  { name : "จอมอนิเตอร์" , price : 4500 , inStock : false },
  { name : "หูฟัง" , price : 890  , inStock : true }
] ; 

// forEach : วนแสดงทีละตัว
products.forEach(p => console.log(p.name)) ;

// map : เอาเฉพาะชื่อสินค้าทุกตัว
const names = products.map(p => p.name) ;
console.log(names) ;

// filter : เอาเฉพาะสินค้าที่มีของ
const avaliable = products.filter(p => p.inStock) ;
console.log(avaliable.length) ; 

// find : หาสินค้าชิ้นแรกที่ราคาเกิน 1000
const expensive = products.find(p => p.price > 1000) ;
console.log(expensive)


class Person{
    constructor(name,age){
      this.name = name ;
      this.age = age ; 
    }
    greet(){
      console.log(`สวัสดี เราชื่อ ${this.name} อายุ ${this.age} ปี`) ;
    }
}

const p1 = new Person("วัศพล",21) ;
p1.greet();

// mathUtils.js
export const PI = 3.14159 ;

export function add(a,b){
  return a + b ;
}

export function multiply(a,b){
  return a * b ;
}

// main.js
import { add, PI } from './mathUtils.js';

// console.log(add(2,3)) ; 
// console.log(PI) ;
