
//for(x=1; x<=100; x++) { autoTodo.createTodo("todo "+x)}

for(x=1; x<=100; x++) 
{setTimeout(autoTodo.createTodo,x*100 ,("ToDo "+x)) }


for(x=1; x<=100; x++) {
	setTimeout(function (name) {
		document.querySelector("body > section > header > input").value = name;
		document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{'bubbles':true}));
	 },x*100 ,("ToDo "+x))
}


