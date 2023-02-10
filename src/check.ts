const check: string = "checking...";
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
fruits.push(45); // ⚠️ Argument of type 'number' is not assignable to parameter of type 'string'

console.log(fruits);

// todo : Implicit type in object. it will automatically assume that the object has name, age & study properties not extra properties not allowed. Type script will give you the intelligence for object properties, type & other stuff
let person = {
  name: "Tanvir Hossain",
  age: 20,
  study: "CST",
};

person["name"] = 35; // ⚠️ warn that you can't assign number type in string
person.name = "Jabed";
console.log(person);

//info---------------------------------------------------------------
// todo : Explicit & union type
//info--------------------------------------------------------------

// ! So when we set the value or variable data type it's called Explicit type & When we set a variable type or array or object twice type like, an array can be number or string. it's called Union. let's see an example

//todo : Explicit array
let exArray: string[] = [];
exArray.push("Tanvir", "hossain", "jabed", 20); // ⚠️ see it's give me a warn called can't assign number type value into string array
console.log(exArray);

//todo : Explicit && Union in ARRAY
let unArray: (number | string | boolean)[] = [];
unArray.push("Fahmid", "Farabi", "Shawon", 30); // ✅ So when our array or object values or properties will be string or number or mixed data types. We can set a union type those stuff
console.log(unArray);

//todo : Explicit && Union types in OBJECT
let c: Object; // ☑️ Object is a data type in typescript, now we can give anything in object schema

c = {
  first_name: "Jubayer",
  age: 20,
  isAdult: false,
}; // ✅ it will applicable
console.log(c);

// ! But we can explicitly set the object properties type for better type-safety. let say we have ;

let studentInfo: {
  name: String;
  age: number;
  courses: string[];
  profile: {
    profile_url: string;
    user_name: string;
    isAdult: boolean | string; //🚀 Union type are applied here, cz isAdult can be string & boolean
  };
};

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
// info 🚀 Dynamic or any type
// ----------------------------------------------------------------------------------
