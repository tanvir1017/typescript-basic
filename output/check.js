const check = "checking...";
console.log(check);
// todo : ☑️Inference checking, that means you can't redeclare variable type string into number. Inference error occurred when you declare variable and define it at the same time
// ! define and declare variable at the same time
let userName = "@Tanvir1017";
console.log(userName);
// ! declare variable ❌ not define at the same time
let player;
player = 34;
player = "Mashrafi";
console.log(player);
// todo : There is two type system Implicit & Explicit
// @ Implicit type system are when we don't set any type for variable or data, it will automatically assume that the type is ✅any✅
// ! Explicit type system are when we set the type of variable
// todo : Implicit type in array
let fruits = ["Banana", "Apple", "Mango"]; //! automatically assume the array type string
// fruits.push(45); // ⚠️ Argument of type 'number' is not assignable to parameter of type 'string'
console.log(fruits);
// todo : Implicit type in object. it will automatically assume that the object has name, age & study properties not extra properties not allowed. Type script will give you the intelligence for object properties, type & other stuff
let person = {
    name: "Tanvir Hossain",
    age: 20,
    study: "CST",
};
// person["name"] = 35; // ⚠️ warn that you can't assign number type in string
person.name = "Jabed";
console.log(person);
//?---------------------------------------------------------------
// todo : Explicit & union type
//?--------------------------------------------------------------
// ! So when we set the value or variable data type it's called Explicit type & When we set a variable type or array or object twice type like, an array can be number or string. it's called Union. let's see an example
//todo : Explicit array
let exArray = [];
// exArray.push("Tanvir", "hossain", "jabed", 20); // ⚠️ see it's give me a warn called can't assign number type value into string array
console.log(exArray);
//todo : Explicit && Union in ARRAY
let unArray = [];
unArray.push("Fahmid", "Farabi", "Shawon", 30); // ✅ So when our array or object values or properties will be string or number or mixed data types. We can set a union type those stuff
console.log(unArray);
//todo : Explicit && Union types in OBJECT
let c; // ☑️ Object is a data type in typescript, now we can give anything in object schema
c = {
    first_name: "Jubayer",
    age: 20,
    isAdult: false,
}; // ✅ it will applicable
console.log(c);
// ! But we can explicitly set the object properties type for better type-safety. let say we have ;
let studentInfo;
studentInfo = {
    name: "Tanvir Hossain",
    age: 20,
    courses: ["MERN Stack course", "Think in redux course"],
    profile: {
        profile_url: "https://github.com/tanvir1017.png",
        user_name: "tanvir1017",
        isAdult: true || "He is a adult boy",
    },
};
console.log(studentInfo);
// ----------------------------------------------------------------------------------
// ? 🚀 Dynamic or any type
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
//  ? 🚀 Function type
// ----------------------------------------------------------------------------------
// todo : function type declaration should be start with Uppercase word like
// ! const myFunc:Function = () => {}
// todo : let's see an example with function in typescript
let func;
// func = "not applicable as string it must be a function"; // ❌ Wrong
func = () => {
    console.log("just simple as function");
}; // ✅🚀 Right way to do that with function in ➡️TS
func();
// todo : see example with function parameters & arguments
const exFunction = (a, b, c, d = true) => {
    console.log(`hello ${a} & ${b} are you did that guys? ${d}. Hey man ${c}`);
};
exFunction("Tanvir", "Fahim", "Fahmid", false);
// function return by ➡️ void
const voidFunctionExample = (a, b, c, d) => {
    console.log(`hello ${a} & ${b}`);
    return c * 5;
};
console.log(voidFunctionExample("Tanvir", "Tawhid", 2023, false));
// ----------------------------------------------------------------------------------
//  ? 🚀 Type alias
// ----------------------------------------------------------------------------------
// todo : type alias is like a nick name for a man. In javascript we can define a set of type by ➡️ type aliases and use it as an variable or type nick name(for better understand). Type alias start with type word. seen an example:
// ! let see: type stringOrNumber = string | num
// ! type userDetailsWithType = {name: string; age: number; profile:{}, courses:string[], country:string}
// ☹️ without type aliases
const exploreUserInfo = (id, user) => {
    console.log(`${user.name} is ${user.age} years old with this id ${id} `);
};
const exploreUserInfo1 = (id, user) => {
    console.log(`${user.name} is ${user.age} years old with this id ${id} `);
};
exploreUserInfo("33kjk23", {
    name: "Tanvir",
    age: 20,
});
// ----------------------------------------------------------------------------------
//  ? 🚀 Function signature
// ----------------------------------------------------------------------------------
// ! function signature is kind of to tell the function by declaring that it will return something(string | number | boolean | any | void) & you can set the parameters type by the signature. Let me give an example to show what exactly function signature is?
let myFuncSignature;
// !in this example off function signature which is define before the line. you can't give him extra parameter as an arguments. If you want you have to set it in signature.
myFuncSignature = (a, b) => {
    // ! in this func, you can't avoid return type or some thing else which isn't set the function return type.❌⚠️ In the return bellow you can't return a string or boolean or void
    return a + b;
};
console.log(myFuncSignature(5, 8));
// ! |🚀| let see another example with function signature
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 10, "add"));
// ----------------------------------------------------------------------------------
//  info🚀 Class in typescript
// ----------------------------------------------------------------------------------
//  ! class is blue print of an object. we can create many object by define a class constructor. let's see an example with class constructor & typescript
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is play for ${this.country}`);
    }
}
const Mash = new Player("Mashrafi", 40, "Bangladesh");
const Shaki = new Player("Shakib", 38, "Bangladesh");
const Miraj = new Player("Mehdi Miraj", 26, "Bangladesh");
Mash.age = 55;
let players = [];
players.push(Mash, Shaki, Miraj);
console.log(players);
Mash.play();
// ----------------------------------------------------------------------------------
//  ? 🚀 Access modifier in class
// ----------------------------------------------------------------------------------
// ! access modifier in class means you can explicitly set the classes insider property access type. In javaScript the give 3 types of access modifier in class they are        1️⃣ private 2️⃣ public(by default every properties are in Public state)3️⃣ readonly
// todo : when we set a the access modifier you can't reassign any properties by the access modifier type. For an example if you set any properties access as a private you can't access the class properties out side of the class, you have to use it within class, Also you have got some benefit's like you will not have to do the things like re-set the properties in the constructor by "this" method. You can directly set the properties access by constructor parameters
// ! an example with typescript class access modifier.
import { Employee, Students } from "./modules/classess.js";
const Mariyan = new Students(66101, "Mariyan Akter Suchi", "mariyan@gmail.com", "CST", 21, +8801748457841, {
    fatherName: "Jana nai",
    motherName: "Tao jana nai",
    parentsPhone: "tao jana nai",
});
const Aysha = new Students(66102, "Aysha akter(cr)", "ayshaakter@gmail.com", "CST", 21, +8801748457841, {
    fatherName: "Jana nai",
    motherName: "Tao jana nai",
    parentsPhone: "tao jana nai",
});
// ! we can do access read only type but not reassign that, in private mode we can't access that either.
let studentsArray = [];
studentsArray.push(Mariyan, Aysha);
console.log(studentsArray);
function drawRectangle(options) {
    const width = options.width;
    const height = options.height;
    return width * height;
}
const reactAngleOptionsVar = {
    width: 30,
    height: 40,
    length: 50,
};
// ! passed by reference
// ! when we passed an object as argument directly typescript will not accept extraValue that given directly. If you passed the object as a reference value, then typescript will just check that the structured value is available or not. If structure value is available then you will give anything as extra value, typescript don't care. But if structure value isn't available then typescript will give warning,
console.log(drawRectangle(reactAngleOptionsVar));
//todo : let's talk about  module type interface in classes.
// ? So what interface is actually? Interface is nothing but a structure of a class or object. We can create an interface and implements it in classes as class structure. ⚠️ One more thing is interface is not allow any private value from class.
let Tanvir1017 = new Employee(+8801784070569, "Tanvir Hossain", {
    age: 20,
    employId: "tanvir101723",
    joiningDate: "01 may 2023",
    photo: "https://github.com/tanvir1017",
}, "Software Engineer", "Web application developer");
let siffahim = new Employee(+880150000000, "Safiul islam fahim", {
    age: 21,
    employId: "siffahim2523",
    joiningDate: "01 may 2023",
    photo: "https://github.com/siffahim",
}, "Software Engineer", "Web application developer");
let employees = [];
employees.push(Object.assign({}, Tanvir1017));
employees.push(Object.assign({}, siffahim));
console.log(employees);
// TODO : GENERICS. Generics is used to reuse code type in typescript
function addUserId(user) {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, user), { id });
}
let user = addUserId({
    name: "Tanvir Hossain",
    age: 20,
});
console.log(user.id);
const apiRes = {
    status: 200,
    response: "success",
    data: [
        {
            name: "Tanvir Hossain",
            age: 20,
            department: "CST",
            isMuslims: true,
        },
        {
            name: "Safiul Islam",
            age: 21,
            department: "CST",
            isMuslims: true,
        },
    ],
};
function reverseArrayItems(items) {
    const resultOfReverse = [];
    for (let i = items.length - 1; i >= 0; i--) {
        resultOfReverse.push(items[i]);
    }
    return resultOfReverse;
}
console.log(reverseArrayItems(apiRes.data));
// ENUM
var responseType;
(function (responseType) {
    responseType[responseType["SUCCESS"] = 0] = "SUCCESS";
    responseType[responseType["FORBIDDEN"] = 1] = "FORBIDDEN";
    responseType[responseType["FAILURE"] = 2] = "FAILURE";
    responseType[responseType["UNAUTHORIZED"] = 3] = "UNAUTHORIZED";
})(responseType || (responseType = {}));
const apiResp = {
    status: 200,
    res: responseType.UNAUTHORIZED,
};
console.log(apiResp);
// TODO : TUPLE
// !tuple is nothing but a array elements signature or you can say fixed the array elements with their type. In a simple word
let a = [
    "Hello world",
    404,
    { name: "typescript", isProgrammingLanguage: true },
    true,
    "Called: Js superset",
];
console.log(a);
