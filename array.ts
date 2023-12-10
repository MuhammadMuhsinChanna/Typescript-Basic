// array means multipal data store in one variable
        //        0          1        2           3
let fruit = ["Apple", "Banana", "Grapes", "Pine Apple"]
console.log(fruit);
console.log(fruit[1]);
console.log(fruit[3]);

//          0     1    2    3    4
let Num = ["12","13","22","33","44"]
console.log(Num)
console.log(Num[1]);
console.log(Num[4]);

array pop & Push Usage
               0          1        2           3
let fruits = ["Apple", "Banana", "Grapes", "Pine Apple"];
fruits.pop()// decrease
fruits.push("Kiwi") // increase
console.log(fruits);

        //        0          1        2           3
        let fruits = ["Apple", "Banana", "Grapes", "Pine Apple"];
        let myfirst = fruits.pop()
        console.log(myfirst);
        
//        0          1        2           3
let Fruits = ["Apple", "Banana", "Grapes", "Pine Apple"];
let mylast = Fruits.push("Kiwi", "strewaberry")
console.log(mylast);

let Fruits = ["Apple", "Banana", "Grapes", "Pine Apple"];
console.log(Fruits.length)

 let menu = ["kofta", "kheer", "Biryani", "Gajar Ka Halwa"];

let shiftedelement = menu.shift();
menu.unshift("Chiken Tikka");
console.log(menu[2])

let menu = ["kofta", "kheer", "Biryani", "Gajar Ka Halwa"];
let citrus = menu.slice(1);
console.log(citrus)

let menu = ["kofta", "kheer", "Biryani", "Gajar Ka Halwa"];
menu.splice(2, 1, "Lemon", "kiwi");
console.log(menu)



let menu = ["kofta", "Kheer", "biryani", "Gajar Ka Halwa"];
menu.push("Kharai", "Haleem")
menu.pop()
console.log(menu);


let menu = ["kofta", "Kheer", "Biryani", "Gajar Ka Halwa"]
let myfirstpopped = menu.pop()
console.log(myfirstpopped)

let menu = ["kofta", "Kheer", "Biryani", "Gajar Ka Halwa"]
let shiftedelement = menu.shift()
menu.unshift("Chicken Tikka")
console.log(menu[2])


// array 