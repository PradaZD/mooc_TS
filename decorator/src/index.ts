// function nameDecorator(target: any, key: any): any {
//   //在装饰器中创建的新的descriptor可以替换掉属性中旧的descriptor
//   const descriptor: PropertyDescriptor = {
//     writable: false,
//   };
//   return descriptor;
// }
// function nameDecorator(target: any, key: any) {
//   target[key] = "zeng";
// }
// class Test {
//   @nameDecorator
//   name = "dell";
// }
// const test = new Test();
// // test.name = "manoj";
// console.log(test.name);

//参数装饰器
//参数：类的原型，参数所处的方法名称，参数所在的位置
// function paramDecorator(target: any, key: string, paramIndex: number) {
//   console.log(target, key, paramIndex);
// }
// class Test {
//   getInfo(name: string, @paramDecorator age: number) {
//     console.log(name, age);
//   }
// }
// const test = new Test();
// test.getInfo("zeng", 18);

//demo 工厂函数使得装饰器在修饰的时候可以传递不同的参数
function catchError(message: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    // console.log(descriptor);
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log(message);
      }
    };
  };
}

const userInfo: any = undefined;
class Test {
  @catchError("userInfo.name 不存在")
  getName() {
    return userInfo.name;
  }
  @catchError("userInfo.age 不存在")
  getAge() {
    return userInfo.age;
  }
  @catchError("userInfo.gender 不存在")
  getGender() {
    return userInfo.gender;
  }
}
const test = new Test();
test.getName();
test.getAge();
test.getGender();
