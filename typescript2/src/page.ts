///<reference path='./component.ts'/>

namespace Home {
  export class Page {
    status: Component.Status = { count: "dell" };
    constructor() {
      new Component.Header();
      new Component.Content();
      new Component.Footer();
    }
  }
}
