// interface Bird {
//   fly: boolean;
//   sing: () => {};
// }
// interface Dog {
//   fly: boolean;
//   bark: () => {};
// }
// //类型断言的方式 防止报错
// function trainAnimal(animal: Bird | Dog) {
//   if (animal.fly) {
//     (animal as Bird).sing();
//   } else {
//     (animal as Dog).bark();
//   }
// }

//typeof 语法来做类型保护
// function add(first: string | number, second: string | number) {
//   if (typeof first === "string" || typeof second === "string") {
//     return `${first}+${second}`;
//   }
//   return first + second;
// }

//使用instanceof语法来做类型保护,必须使用类来定义 因为只有类才有实例
// class NumberObj {
//   constructor(public count: number) {}
//   // count: number;
// }
// function add(first: object | NumberObj, second: object | NumberObj) {
//   if (first instanceof NumberObj && second instanceof NumberObj) {
//     return first.count + second.count;
//   }
//   return 0;
// }
// // const numberObj = new NumberObj(1);
// console.log(add({ 0: 1 }, { 1: 2 }));
