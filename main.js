const URL_API = "https://62b40bbda36f3a973d2ab0ed.mockapi.io/toDoList";
const content = $("#content");
function todoDom(Todo){
  content.append(
    `<div class ="content" data-id=${Todo.id}>
    <div style = ${Todo.status} ? "display:block;" : "display:none;">
    <i class="bi bi-check"></i></div>
    <div >${Todo.toDo}</div>
    <div><i class="bi bi-x"></i></div></div>
    `
  );
}
$(document).ready(function () {
  $.ajax({ url: URL_API }).done(function (toDos) {
    $.each(toDos, function (_, Todo) {
      todoDom(Todo)
    });
  });
});

$("#button-addon2").click(function () {
  let obj = { toDo: `${$(".inp").val()}` };
  addToDo(obj);
});

function addToDo(obj) {
  $.ajax({
    url: URL_API,
    type: "POST",
    data: JSON.stringify(obj),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      todoDom(data)
    },
  });
}
