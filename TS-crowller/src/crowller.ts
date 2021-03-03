import superagent from "superagent";
import cheerio from "cheerio";

class Crowller {
  private secret = "secretKey";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret${this.secret}`;
  // private rawHtml = "";
  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    courseItems.map((index, element) => {});
    console.log(courseItems.length);
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    // console.log(result.text); //从远程的地址上获取HTML内容
    // this.rawHtml = result.text;
    this.getCourseInfo(result.text);
  }
  constructor() {
    this.getRawHtml();
  }
}
const crowller = new Crowller();
