function clickItem(item) {
    item.click();
}
function toggleAll() {
    document.querySelector("#toggle-all").click();
}

 function selectItemX(x) {
	  document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
 }

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
function createTodo(name) {
	document.querySelector("body > section > header > input").value = name;
	document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{'bubbles':true}));
 }
function amendTodo(x, amendedValue){
	document.querySelector("ul.todo-list > li:nth-child("+ x + ") > div > label").dispatchEvent(new Event ("dblclick",{"bubbles":true}));
	document.querySelector("ul.todo-list > li:nth-child("+ x + ") .edit").value =amendedValue;
	document.querySelector("ul.todo-list > li:nth-child("+ x + ") .edit").dispatchEvent(new Event('blur'));
 }