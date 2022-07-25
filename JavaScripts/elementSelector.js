https://todomvc.com/examples/vanillajs/#/

//Ch 3.2
//ul.cotodo-list > li:nth-child(1)
// console java

document.querySelector("body > section > section > ul > li:nth-child(2)")
document.querySelector(" ul > li:nth-child(2)")
document.querySelectorAll(" ul > li")
document.querySelectorAll(" ul.todo-list > li")
document.getElementById("toggle-all")
document.getElementsByClassName("toggle-all")
document.getElementsByClassName("toggle")
document.getElementsByTagName("ul")
document.getElementsByTagName("li")

// ch 3.3
//element by id
#toggle-all
.toggle-all    // class selection
input.toggle-all // input under class toggle-all

ul.todo-list li  // all li list itmes under ul with class todo-list
/html/body/section/section/ul/li[1]   // xpath equivelant

ul.todo-list button.destroy // all button under ul with class destroy
ul.todo-list li:nth-child(1) // child 1 undet li under ul with class todo-list
// id -- '#'  class '.'   tag 'li'   path > immediate child
// path ' ' somewhere below
// ':nth-child(1) 


ch 4.1

document.querySelector("#toggle-all")
document.querySelector("#toggle-all").click()  // click button

document.getElementById("toggle-all").click()

document.querySelector("body > section > section > ul > li:nth-child(1) > div > input")
document.querySelector("ul.todo-list > li:nth-child(1) > div > input")
document.querySelector("ul.todo-list > li:nth-child(1) input.toggle")

document.querySelector("ul.todo-list > li:nth-child(1) input.toggle").click()

//delete todo
document.querySelector("ul.todo-list > li:nth-child(1) button.destroy")
document.querySelector("ul.todo-list > li:nth-child(1) button.destroy").click()

document.querySelector("body > section > footer > button")
document.querySelector("button.clear-completed")
document.querySelector("button.clear-completed").click()


document.querySelector("body > section > footer > ul > li:nth-child(1) > a")
document.querySelector(" ul.filters > li:nth-child(1) > a")

document.querySelector(" ul.filters > li:nth-child(1) > a").click()
document.querySelector(" ul.filters > li:nth-child(2) > a").click()

location.hash 
location.hash = "/completed"
location.hash = "/active"

//ch 4.2
//add todo
document.querySelector("body > section > header > input")
document.querySelector("body > section > header > input").value ="hello"
document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{'bubbles':true}))

// amending an item

document.querySelector("ul.todo-list > li:nth-child(1) > div > label").dispatchEvent(new Event({"bubbles":true}))
document.querySelector("ul.todo-list > li:nth-child(1) .edit").value ="amended"
document.querySelector("ul.todo-list > li:nth-child(1) .edit").dispatchEvent(new Event('blur'))



document.querySelector("input.new-todo").value ="hello There"

// ch 5

for (var counter=1; counter<=20; counter++) {
    console.log("hellow " + counter);
}

document.querySelectorAll('ul.todo-list input.toggle')
document.querySelectorAll('input.toggle')
document.querySelectorAll('.toggle')

var toggles = document.querySelectorAll('.toggle');
for(togglepos = 0; togglepos < toggles.length; togglepos++) {
  toggles[togglepos].click();
 }
 
 //--------------------------------------
//  ch 6

var toggles = document.querySelectorAll('.toggle');
for(togglepos = 0; togglepos < toggles.length; togglepos++) {
	if(togglepos%2==1) {
		toggles[togglepos].click();
	}	
 }

var toggles = document.querySelectorAll('.toggle');
for(togglepos = 0; togglepos < toggles.length; togglepos+=2) {
			toggles[togglepos].click();
 }
 
 var toggles = document.querySelectorAll('.toggle');
 var toggleit = false;
 for(togglepos = 0; togglepos < toggles.length; togglepos++) {

	if(toggleit) {
		toggles[togglepos].click();
	}	
	toggleit=!toggleit;
 }
 
 if(true){
	 console.log("true it is ");
 }else {
	 console.log("false indeed");
 }
 
 //Ch 08.1
 
 function clickItem(item) {
    item.click();
}
//call function/
clickItem(document.getElementById("toggle-all"))
//------------------
function toggleAll() {
    document.querySelector("#toggle-all").click();
}
}//call function

toggleAll()
//-----------------

var toggles = document.querySelectorAll('.toggle');
for(togglepos = 0; togglepos < toggles.length; togglepos+=2) {
			toggles[togglepos].click();
 }
 // same as the for loop using clickItem function
 toggles.forEach(clickItem)
 document.querySelectorAll('.toggle').forEach(clickItem)
 
 function selectItemX(x) {
	  document.querySelector("ul.todo-list > li:nth-child(" + x + "1) input.toggle").click()
 }

selectItemX (1)
 
 //delete item
 
 function deleteItemX(x) {
	 document.querySelector("ul.todo-list > li:nth-child(" + x +") button.destroy").click();
 }
 
 function clearCompleted() {
	 document.querySelector("button.clear-completed").click();
 }
 function filterCompleted() {
	 location.hash = "/completed";
 }
 function filterActive() {
 location.hash = "/active";
 }
 
 function filterAll() {
 location.hash = "/";
 }
 
 function createTodo(name) {
	document.querySelector("body > section > header > input").value = name;
	document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{'bubbles':true}));
 }
 
 function amendTodo(x, amendedValue){
	document.querySelector("ul.todo-list > li:nth-child("+ x + ") > div > label").dispatchEvent(new Event ("dblclick",{"bubbles":true}));
	document.querySelector("ul.todo-list > li:nth-child("+ x + ") .edit").value =amendedValue;
	document.querySelector("ul.todo-list > li:nth-child("+ x + ") .edit").dispatchEvent(new Event('blur'));
 }
 
 
 //ch08.2
 
var autoTodo = new function () {
   this.clickItem = function (item) {
    item.click();
   }  
}
 
 autoTodo.clickItem(document.querySelector('.toggle'))