//Task 1
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
    facName : 'Volkswagen Wolfsburg Plant',
    calculateWorkload : function (){
        return this.employeeWeeklyWorkload.map(Element => Element.workload);
    },
    formatArray : function (name) {
        return {name, timeLeft: 5-this.employees.filter(Element => Element.name === name)[0].timeSpent}

    }
    
}

let factoryEmployees = {
    employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
}

let workloadData = {
    employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", workload : 25 },{name : "Maria", workload : 28 },{name : "Dan", workload : 30 },{name : "Lorelai", workload : 31 }]
}

const workLoadCalculator = factory.calculateWorkload.bind(workloadData);
const employeeLeftContractYears = factory.formatArray.bind(factoryEmployees);
console.log(workLoadCalculator());
console.log(employeeLeftContractYears("Sam"));


//Task 2

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 


*/
let ourArray = [1, -4, 0, 9, 5];
function sumOfNumbers(...args){
    let sum = 0;
    for (let i = 0; i < args.length; i += 1) {
      sum += args[i];
    }
    return sum;
  }
  let resultOfSum = sumOfNumbers.apply(null, ourArray);
  console.log(resultOfSum);




// -----
let arrayForSum = [1, 4, 0, 9, 5, 1, 2];
function sumOfNumbers2(array) {
    let sum = 0; 
    for (const item of array) {
      sum += item;
    }
    return sum;
  }
  
  console.log(sumOfNumbers2(arrayForSum));

//-----
let sumOfNumbers3 = (a, b) => a+b;
let resultOfSum3 = sumOfNumbers3.apply(null, [3, 4]);

console.log(resultOfSum3);

//Task 3
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/
function oddOrEven(num){
    if(num % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(oddOrEven(-10));

//-----

function checkIfEven(n){
  if (n < 0) 
  {
    n = Math.abs(n);
  }
  if (n===0) 
  {
    return 'its even';
  }
  if (n===1) 
  {
    return 'its odd';
  }
  else 
  {
    n = n - 2;
    return checkIfEven(n);
  }
}
console.log(checkIfEven(-2))
console.log(checkIfEven(0))
console.log(checkIfEven(3))

//Task 4 
//გვაქვს ორი მასივი
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
//დაწერეთ ფუნქცია რომელიც გადაცემული მასივის ელემენტების მიხედვით დააბრუნებს შემდეგ ტექსტს : 
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// უნდა გამოვიყენოთ რიგითი რიცხვები წინადადების შესადგენად 1 - first - 1st , 2 - second - 2nd ...

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];
function ordinalFunction (arr) {
    let newArr = arr.map((el, i) => {
        if(i === 0) return `${i+1}${o[1]} choice is ${el}`;
        else if(i === 1) return `${i+1}${o[2]} choice is ${el}`;
        else if(i === 2) return `${i+1}${o[3]} choice is ${el}`;
        else return `${i+1}${o[0]} choice is ${el}`;
        
    });
    let result = '';
    for(let el of newArr){
        result += `${el}\n`;
    }
    return result;
}
console.log(ordinalFunction(color));


//Task 5
/**
 * დაწერეთ ფუნქცია რომელიც მასივიდან წაშლის falsy values მქონდე ელემენტებს 'null', '0', '""', 'false', 'undefined' and 'NaN' .
 * arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
 * ფუნქციამ უნდა დააბრუნოს [15,-22,57]
 */


let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let result = arr.filter(Boolean); 
console.log(result);

//Task 6 
/**
 * დაწერეთ ფუნქცია რომელიც ორ მასივს აერთიანებს და დუბლირებულ მნიშვნელობებს შლის 
 * function mergeArr(arr1,arr2) 
 * arr1 = [1,2,3]
 * arr2 = [2,1,30]
 * დაბრუნებული მნიშვენლობა უნდა იყოს [1,2,3,30]
 */
var array1 = [1,2,3];
var array2 = [2,1,30];
function mergeArr(arr1,arr2){

    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
mergeArr(array1, array2);

//------


var arr1 = [1,2,3];
var arr2 = [2,1,30];
var arr3 = [...new Set([...arr1 ,...arr2])];
console.log(arr3);
//Task 7
/**
 * გვავქს ორი ინდივიდუალური ელემენტების/სიგრძის მასივი , დაწერეთ ფუნქცია რომელიც დააბრუნებს ახალ მასივის
 * რომლის თითოეული ელემენტი იქნება შესაბამის ინდექსებზე მდგომი ელემენტების ჯამი
 * მაგ : 
 * [1,10,12,13] [4,5] -> [5,15,12,13]
 *                       [1+4,10+5,12,13]
 * 
 */

    let array1 = [1,10,12,13];
    let array2 = [4,5];
    function ArraySum(array1, array2){
      var result = [];
      var x = 0;
      var y=0;
    
     while (x < array1.length && x < array2.length){
        result.push(array1[x] + array2[x]);
        x++;
        }
        if (x === array1.length){
        for (y = x; x < array2.length; y++){
          result.push(array2[y]);
        }
        }else{
            for (y = x; y < array1.length; y++){
                result.push(array1[y]);
                }
      }
      return result;
}
    console.log(ArraySum(array1, array2));




    // const arr5 = [2,2,2];
    // function myMap(value){
    //     return value*2
    // }
    // let newArr5 = arr5.map(myMap);
    // console.log(newArr5);

    // let newArr5 = arr5.map(value => value*2);
    // console.log(newArr5);