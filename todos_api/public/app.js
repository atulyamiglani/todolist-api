
$(document).ready(() => {
    $.getJSON("api/todos")
    .then(addTodos) 


    $('#todoInput').keypress((event) => {
        if (event.which == 13) {
            createTodo();
        }
    }); 
    $('.list').on('click', 'span',  function() {
        var completedTask = $(this).parent();  
        var clickedId = ($(this).parent().data('id')); 
        
        $.ajax({
            method: 'DELETE', 
            url : '/api/todos/' + clickedId
            
        })
        .then(function(data) {
            console.log(data); 
            completedTask.remove();
        })
    })

}); 

function addTodos(todos) {
    todos.forEach(todo => {
        var newTodo = $('<li class ="task">' + todo.name + '<span>X</span></li>'); 
        newTodo.data('id', todo._id); 
        if (todo.completed) {
            newTodo.addClass("done"); 
        }
        $('.list').append(newTodo); 
    });
}

function createTodo() {
    var usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput})
    .then((todo) => {

        var newTodo = $('<li class ="task">' + todo.name + '<span>X </span></li>'); 
        if (todo.completed) {
            newTodo.addClass("done"); 
        }
        $('.list').append(newTodo); 
    })
    .catch((err) => {
        console.log("err" + err); 
    }); 


} 