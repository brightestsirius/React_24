"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// types
var x = 10;
var y = "hello";
var b = true;
var u = undefined;
var n = null;
var arr_1 = [10, 20, 30];
var arr_2 = [10, "20", 30];
var arr_3 = [10, "20", 30];
var arr_4 = [10, "20", 30];
var id = 10;
id = "20";
var color = [255, 230, 120];
// enum
var RESPONSE;
(function (RESPONSE) {
    RESPONSE["SUCCESS"] = "success";
    RESPONSE["ERROR"] = "error";
})(RESPONSE || (RESPONSE = {}));
var response = { status: "success" };
if (response.status === RESPONSE.SUCCESS)
    console.log("Success!");
else if (response.status === RESPONSE.ERROR)
    console.log("Error!");
// interface
var REST_METHODS;
(function (REST_METHODS) {
    REST_METHODS[REST_METHODS["GET"] = 0] = "GET";
    REST_METHODS[REST_METHODS["POST"] = 1] = "POST";
    REST_METHODS[REST_METHODS["PUT"] = 2] = "PUT";
    REST_METHODS[REST_METHODS["DELETE"] = 3] = "DELETE";
})(REST_METHODS || (REST_METHODS = {}));
var user = {
    name: "User name",
    animals: ["cat"],
    methods: [REST_METHODS.GET, REST_METHODS.DELETE],
    access: true
};
// class
var Animal = /** @class */ (function () {
    function Animal(name) {
        if (name === void 0) { name = "default name"; }
        this.name = name;
    }
    return Animal;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lion.prototype.getInfo = function () {
        return "Hello, I'm ".concat(this.name, ".");
    };
    return Lion;
}(Animal));
var Cat = new Animal();
var Dog = new Animal("Patron");
var Simba = new Lion("Simba");
Simba.name = "Mufasa";
console.log(Cat);
console.log(Dog);
// func
var print = function (value) { return console.log(value); };
var sum = function (a, b) {
    if (!b)
        return a;
    else
        return a + b;
};
sum(10, 20);
sum(10);
// generic
var makeState = function (defaultState) {
    var state = defaultState;
    var getState = function () { return state; };
    var setState = function (newState) {
        state = newState;
    };
    return { getState: getState, setState: setState };
};
var myState = makeState("1");
myState.setState("2");
console.log(myState.getState());
var student_1 = {
    id: 1,
    country: "Ukraine"
};
var student_2 = {
    id: 1,
    name: "Student 2"
};
var student_3 = {
    id: 1,
    name: "Student 3"
};
