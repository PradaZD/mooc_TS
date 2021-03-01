//静态类型
// let b: number = 123;
// b = 456;

// interface Point {
//   x: number;
//   y: number;
// }
// function tsDemo(data: Point) {
//   console.log("manoj");
//   return Math.sqrt(data.x ** 2 + data.y ** 2);
// }
// tsDemo({ x: 1, y: 3 });

//自定义类型
// interface Point {
//   x: number;
//   y: number;
// }
// const point: Point = {
//   x: 3,
//   y: 4,
// };

// let count: number;

// count = 123;

// const teacher: {
//   name: string;
//   age: number;
// } = {
//   name: "manoj",
//   age: 18,
// };

// const numbers: number[] = [1, 2, 4];

// class Person {}
// const dell: Person = new Person();

// const getTotal: () => number = () => {
//   return 123;
// };

// const firstName = 1;
// const secondName = 2;
// const total = firstName + secondName;

// function getTotal(firstName: number, secondName: number) {
//   return firstName + secondName;
// }
// const total = getTotal(1, 2);

// const obj = {
//   name: "dell",
//   age: 19,
// };

// function hello() {}
// const hello1 = function () {};
// const hello2 = () => {};
// function add(first: number, second: number): number {
//   return first + second;
// }
// //void 函数没有返回值
// function sayHello(): void {
//   console.log("hello");
// }

// //never 这个函数永远也没有办法完全执行完
// function errorEmitter(): never {
//   throw new Error();
//   console.log(123);
// }

//函数的参数解构,只要是解构 都需要放到另一个花括号中
// function add({ first, second }: { first: number; second: number }): Number {
//   return first + second;
// }
// const total = add({ first: 1, second: 3 });

// const func: (str: string) => number = (str) => {
//   return parseInt(str, 10);
// };
// const func1 = (str: string): number => {
//   return parseInt(str, 10);
// };

//数组 类型别名
// type user = {
//   name: string;
//   age: number;
// };
// class Teacher {
//   name: string;
//   age: number;
// }
// const objectArr: user[] = [
//   {
//     name: "manoj",
//     age: 18,
//   },
// ];

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;
//   say(): string;
// }
// function getPersonName(person: Person): void {
//   console.log(person.name);
// }
// const person = {
//   name: "manoj",
//   age: 18,
//   sex: "male",
//   say() {
//     return "say hello";
//   },
// };
// getPersonName(person); //不会报错
//会报错，强校验
// getPersonName({
//   name: "manoj",
//   age: 18,
//   sex: "male",
//   say() {
//     return "say hello";
//   },
// });

//类
// class Person {
//   name = "dell";
//   getName() {
//     return this.name;
//   }
// }
// class Teacher extends Person {
//   getTeacherName() {
//     return "dell";
//   }
//   getName() {
//     //super就可以直接理解成父类Person
//     return super.getName() + "lee";
//     // return "lee";
//   }
// }
// // const person = new Person();
// const teacher = new Teacher();
// console.log(teacher.getName());
// console.log(teacher.getTeacherName());

// class Person {
//   // private name: string;
//   // public name: string;
//   protected name: string = "zeng";
//   sayHi() {
//     console.log(this.name);
//   }
// }
// class Teacher extends Person {
//   public sayBye() {
//     // this.name = "dell";
//     console.log(this.name);
//   }
// }
// const person = new Person();
// const teacher = new Teacher();
// // person.name = "dell";
// person.sayHi();
// teacher.sayBye();
// // console.log(person.name);

//初始化值
// class Person {
//   // public name: string;
//   //在new实例化的时候，constructor会被自动执行
//   constructor(public name: string) {
//     // this.name = name;
//   }
// }
// const person = new Person("manoj");
// console.log(person.name);

// class Person {
//   constructor(public name: string) {}
// }
// class Teacher extends Person {
//   constructor(public age: number) {
//     //super.指的是父类身上的属性和方法，super()指的是在调用父类的构造函数
//     //在子类中调用父类的构造函数，需要按照父类构造函数要求传递参数
//     //即使父类没有构造器，子类也需要调用一个空的super()
//     super("dell");
//   }
// }
// const teacher = new Teacher(28);
// console.log(teacher.age);
// console.log(teacher.name);

// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + " lee";
//   }
//   set name(name: string) {
//     const realName = name.split(" ")[0];
//     this._name = realName;
//   }
// }
// const person = new Person("dell");
// person.name;
// console.log(person.name);
// person.name = "manoj";
// console.log(person.name);

//单例模式
// class Demo {
//   //instance用来存储一个实例
//   private static instance: Demo;
//   private constructor(public name: string) {}
//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Demo("zengdan");
//     }
//     return this.instance;
//   }
// }
// const demo = Demo.getInstance();
// console.log(demo.name);

// class Person {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
// }
// const person = new Person("zengdan");
// console.log(person.name);

//抽象类只能被继承，不能被实例化
// abstract class Geom {
//   width: number;
//   getType() {
//     return "Geom";
//   }
//   //抽象的方法，也不知道具体怎么实现的，只能去定义这个方法;
//   abstract getArea(): number;
// }
// //继承于抽象类，就必需将其中的抽象方法具体实现一下
// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }
// class Square {}
// class Triangle {}

interface Person {
  name: string;
}
interface Teacher extends Person {
  teacherAge: number;
}
interface Student extends Person {
  age: number;
}
const teacher = {
  name: "dell",
};
const student = {
  name: "zeng",
};
const getUserInfo = (user: Person) => {
  console.log(user.name);
};
getUserInfo(teacher);
getUserInfo(student);
