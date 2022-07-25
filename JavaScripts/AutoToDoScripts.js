var autoTodo = new function () {
   this.clickItem = function (item) {
    item.click();
   }  

   this.toggleAll = function () {
    document.querySelector("#toggle-all").click();
    }

 this.selectItemX =function (x) {
	  document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
   }

 this.deleteItemX =function (x) {
	 document.querySelector("ul.todo-list > li:nth-child(" + x +") button.destroy").click();
 }
 
 this.clearCompleted =function () {
	 document.querySelector("button.clear-completed").click();
 }
 
   this.filterCompleted =function () {
	 location.hash = "/completed";
 }
 this.filterActive = function () {
 location.hash = "/active";
 }
this.createTodo =function (name) {
	document.querySelector("body > section > header > input").value = name;
	document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{'bubbles':true}));
 }
this.amendTodo =function (x, amendedValue){
	   document.querySelector("ul.todo-list > li:nth-child("+ x + ") > div > label").dispatchEvent(new Event ("dblclick",{"bubbles":true}));
	   document.querySelector("ul.todo-list > li:nth-child("+ x + ") .edit").value =amendedValue;
	   document.querySelector("ul.todo-list > li:nth-child("+ x + ") .edit").dispatchEvent(new Event('blur'));
    }
}

//for(x=1; x<=100; x++) 
//{setTimeout(autoTodo.createTodo,x*100 ,("ToDo "+x)) }

for(x=1; x<=100; x++) {
	setTimeout(function (name) {
		document.querySelector("body > section > header > input").value = name;
		document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{'bubbles':true}));
	 },x*100 ,("ToDo "+x))
}