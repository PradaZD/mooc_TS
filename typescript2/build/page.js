"use strict";
var Component;
(function (Component) {
    var SubComponent;
    (function (SubComponent) {
        var test = /** @class */ (function () {
            function test() {
            }
            return test;
        }());
        SubComponent.test = test;
    })(SubComponent = Component.SubComponent || (Component.SubComponent = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "this is header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Component.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "this is  content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Component.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "this is footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Component.Footer = Footer;
})(Component || (Component = {}));
///<reference path='./component.ts'/>
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.status = { count: "dell" };
            new Component.Header();
            new Component.Content();
            new Component.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
