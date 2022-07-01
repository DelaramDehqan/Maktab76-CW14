const URL_API = "https://62b40bbda36f3a973d2ab0ed.mockapi.io/toDoList";
const div = $("#div");

$(document).ready(function () {
  $.ajax({ url: URL_API }).done(function (toDos) {
    $.each(toDos, function (index, Todo) {
       div.append (
        `<div data-index=${index}>${Todo.toDo}</div>`
       )  
    });
  });
});

$("#button-addon2").click(function(){

let obj = { toDo: `${$(".inp").val()}` }
 addToDo(obj)});

function addToDo(obj) {
  $.ajax({
    url: URL_API,
    type: 'POST',
    data: JSON.stringify(obj),
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      div.append (
        `<div>${data.toDo}</div>`
       )
    },
  });
}
;

