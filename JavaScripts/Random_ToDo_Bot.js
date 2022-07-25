var rando = new function() {

    function getRandomInt(x) {
        return Math.floor(Math.random() * x)
    }
    function getRandomItemIndex() {
        max = document.querySelectorAll("ul.todo-list li").length;
        if (max === 0) {
            console.log("no items to choose from");
            return 0;
        }
        x = getRandomInt(max) + 1;
        return x;
    }

    this.selectRandomItem = function() {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("select item " + x);
            autoTodo.selectItemX(x);
        }
    }

    this.toggleAll = function() {
        console.log("toggle all");
        autoTodo.toggleAll();
    }

    this.clearCompleted = function() {
        console.log("Clear completed");
        autoTodo.clearCompleted();
    }

    this.filterCompleted = function() {
        console.log("filter completed");
        autoTodo.filterCompleted();
    }

    this.filterActive = function() {
        console.log("filter Active");
        autoTodo.filterActive();
    }

    this.deleteRandomItme = function() {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("delete item " + x);
            autoTodo.deletItemX(x);
        }
    }
    this.createRandomTodo = function() {
        console.log("create autoTodo");
        autoTodo.createTodo("random todo " + Date.now());
    }

    this.amendRandomTodo = function() {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("amended todo " + x);
            autoTodo.amendTodo(x, "amended random todo " + Date.now());
        }
    }
}
