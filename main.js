const URL_API = "https://62b40bbda36f3a973d2ab0ed.mockapi.io/toDoList";
const div = $("#div");

$(document).ready(function () {
  $.ajax({ url: URL_API }).done(function (toDos) {
    $.each(toDos, function (index, Todo) {
       div.append (
        `<div>${Todo.toDo}</div>`
       )  
    });
  });
});
