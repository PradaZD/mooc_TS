import superagent from "superagent";

class Crowller {
  private secret = "secretKey";
  private url = `
  http://www.dell-lee.com/typescript/demo.html?secret${this.secret}
  `;
  private rawHtml = "";
  async getRawHtml() {
    const result = superagent.get(this.url);
  }
  constructor() {
    this.getRawHtml();
  }
}
const crowller = new Crowller();
