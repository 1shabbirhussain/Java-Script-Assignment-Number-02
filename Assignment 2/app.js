// Question 1------------------------------------

// let num1 = +prompt("write any number")
// function closureAdd(){
//     return function (num2){
//       console.log(num1+num2);
//     }
// }
// let innerFunc = closureAdd();
// innerFunc(+prompt('Write inner func number'));




// Question 2-------------------------------


// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let length= array1.length ;
// let a=0
// let findd = +prompt("what number do u want to find? "); 
// function search(a,length,b ){
//     if (a > length)
//     return false
//     if(array1[a] == b ){
//     return true;}
//     return search(a+1, length,b)
    
// }

// let finalRes= console.log(search(a, length, findd));
// finalRes== true ? console.log ('We have find your search '):console.log("your serach is not present in array") 





// question 3-----------------------------------------------

// newPara=(paraText) =>{
//   let createPara = document.createElement('p');
//   createPara.innerText = paraText;
//   document.body.appendChild(createPara);
// }

// newPara("mera hun new para 'p'")






// question 4-----------------------------------------------


// addList = (listContent) =>{
//   let li = document.createElement('li');
//   li.innerText= listContent;
//   document.querySelector('ul').appendChild(li)
// }

// addList(prompt('Enter new list content to enter'));





// question 5-----------------------------------------------

// changeColor=(element, color)=>{
//   element.style.backgroundColor = color
// }
// let element = document.querySelector(prompt('write query selector of element you want to change bg color'))
// changeColor(element, '#FFFF00');






// question 6-----------------------------------------------

// function saveInLocalStorage(key, object){
//     stringify=JSON.stringify(object);
//     localStorage.setItem(key,stringify);
// }

// let myObject = {
//     namee:prompt("Enetr Name: "),
//     rollNum:+prompt("Enter Roll Number: "),
//     teacher:prompt("Enter Teacher's Name: "),
//     className:prompt("Enter Class Name: ")
// }
// saveInLocalStorage('studentsData',myObject);






// question 7-----------------------------------------------

// retrieveObject = (key) =>{
// console.log(JSON.parse(localStorage.getItem(key)));
// }

// retrieveObject(prompt("enter key to retrive from lcoal storage: "));







// question 8-----------------------------------------------


// let myObject = {
//   namee:prompt("Enetr Name: "),
//   rollNum:+prompt("Enter Roll Number: "),
//   teacher:prompt("Enter Teacher's Name: "),
//   className:prompt("Enter Class Name: ")
// }

// toLocalStorage =(myObject)=>{
//   //saving to local storage
//   for(let key in myObject){
//     let value = JSON.stringify(myObject[key]);
//     console.log(value);
//     localStorage.setItem(key,value);
//   }
  
  
// // here retriving from storage

//   let emptyObject={};
//   for (let i = 0 ; i<length.myObject ; i++ ){
//     let key = localStorage.key(i);
//     let value = JSON.parse(localStorage.getItem(key));
//     emptyObject[key] = value

//   }
//   return console.log(emptyObject)
// }

// toLocalStorage(myObject);

