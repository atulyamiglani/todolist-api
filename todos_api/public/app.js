

$(document).ready(() => {
    $.getJSON("api/todos")
    .then(addTodos) 


    $('#todoInput').keypress((event) => {
        if (event.which == 13) {
            createTodo();
        }
    }); 

    $('.list').on('click', 'li', function() {
        
        updateTodo($(this)); 

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
        newTodo.data('completed', todo.completed);
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

function updateTodo(todo) {
    var clickedId = todo.data('id'); 
    var isDone = todo.data('completed'); 
    var updateData = {completed: !isDone};
    console.log(updateData); 
        
    $.ajax({
        method: 'PUT', 
        url : '/api/todos/' + clickedId, 
        data: updateData
        
    })
    .then(function(updatedTodo) {
        todo.toggleClass("done");
        todo.data('completed', !isDone);

    })


}