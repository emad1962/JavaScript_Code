var botTodoCount = 1;
var creatorBot = setInterval(function () {
		document.querySelector("body > section > header > input").value = "todo "+ botTodoCount;
		document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{'bubbles':true}));
		botTodoCount++;
		if (botTodoCount > 100) {clearInterval(creatorBot);
		 }
	},500)
