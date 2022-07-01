const table = $("table tbody");

function getUsers(page) {
  return $.ajax({
    type: "get",
    url: `https://reqres.in/api/users?page=${page}`,
  });
}

$("documnet").ready(async function runToPage() {
  let user1 = await getUsers(1);
  let user2 = await getUsers(2);
  let users = [...user1.data, ...user2.data];

  users.map((user) => {
    $("#cards").append(`<div class="flex justify-center items-center border-solid border-2 border-amber-300 m-7 w-96 py-5 hover:bg-amber-100">
    <div><img src="${user.avatar}" class="w-18 h-18 rounded-md"></div>
    <div class="pl-6"><h2 class="text-blue-800">${user.first_name}</h2><p>${user.last_name}</p><p class="text-gray-400">${user.email}</p></div>
    </div>`);
  });
});
