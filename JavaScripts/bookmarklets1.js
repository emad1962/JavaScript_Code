javascript: (function() {
    max = prompt("how Many?");
    if (max) {
        for (x = 1; x <= max; x++) {
            setTimeout(function(name) {
                document.querySelector("body > section > header > input").value = name;
                document.querySelector("body > section > header > input").dispatchEvent(new Event('change',{
                    'bubbles': true
                }));
            }, x * 100, ("ToDo " + x))
        }
    }
}
)()
