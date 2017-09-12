// page set up (one time)

function init () {
    var add_button = document.getElementById('add').addEventListener('click',add);
}

init();

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}

    // retrieves item 
function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    
    
    //ends action
    return false;
}

//shows function

function show () {
    var todos = get_todos();
    
    var html = '<ul>';
    for (var ii=0; ii<todos.length; ii++) {
        html += '<li>' + todos [ii] + '<button class="remove" id=" ' + ii + '"> x </button> </li> ; 
        
    } ;
    
    html += '</ul>';
    
    document.getElementById('todos').innerHTML = html;
    
    var buttons = document.getElementsByClassName('remove');
    for (var ii=0; ii <buttons.length; ii++) {
        buttons[ii].addEventListener ('click', remove);
    };
    
    // removes element and stores the new list in the database
    
    function remove () {
        var id= this.getAttribute('id');
        var todos = get_todos();
        todos.splice(id, 1);
        localStorage.setItem('todo', JSON.stringify(todos));
        
        show();
        
        return false;
    }
}