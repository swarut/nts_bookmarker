import express from 'express';
import path from 'path';
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index')
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  // console.log(`server is started at http://localhost:${port}`);
  // let p:Pon = new Pon("yo");
  // console.log("pon name is ", typeof(Pon));
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function(x, y) { return x + y; };
  myGenericNumber.minus = function(x, y) { return x -y };
  console.log("Result === ", myGenericNumber.add(1, 2));
  console.log("Result === ", myGenericNumber.minus(1, 2));

});

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
  minus: (x: T, y: T) => T;
}

interface Pon1 {
  name: string
}
interface Pon2 {
  age: number
}

let pon: Pon1 & Pon2 = {
  name: "pon",
  age: 10
}

interface Pon3 {
  name: string
  age?: number
}
interface Pon4 {
  name: string
  age: number
}

let p3 = {name: "pon3", ages: 12};

let p4 = {name: "pon4", age: 233};

function helloPon3(pon: Pon3): void {
  console.log(`Hello ${pon.name} - ${pon.age}`);
}
function helloPon4(pon: Pon4): void {
  console.log(`Hello ${pon.name} - ${pon.age}`);
}

helloPon3(p3);
helloPon4(p4);




// function helloPon(pon: Pon3):void;
// function helloPon(pon: Pon4):void;
// function helloPon(pon: any) {

// }

// class Control {
//   private state: number;
//   click() {

//   }
// }
// class SuperControl extends Control {
//   click() {
//     console.log(this.state);
//   }
// }

// class Person {
//   protected name: string;
//   protected constructor(theName: string) { this.name = theName; }
// }

// // Employee can extend Person
// class Employee extends Person {
//   public name: string;
// }

class Pon {
  constructor(protected name:string) {
    console.log("Hi my name is ", this.name);
  }
}
