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
    $("#content").append(`
      <div>
        <div>${user.first_name}</div>
        <div>${user.last_name}</div>
        <img src=${user.avatar}></img>
        <div>${user.email}</div>
      </div>`);
  });
});
