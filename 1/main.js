const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Ошибка статус-кода");
    }

    const data = await response.json();
    displayUsers(data);
  } catch (error) {
    console.error(error);
  }
};
const displayUsers = (users) => {
  const userList = document.createElement("ul");
  let userItems = "";
  users.forEach((user) => {
    userItems += `<li>${user.name} - ${user.email}</li>`;
  });
  userList.innerHTML = userItems;
  document.body.append(userList);
};
fetchUsers();
