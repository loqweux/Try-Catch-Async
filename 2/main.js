const userInfoDiv = document.getElementById("user-info");
const usernameInput = document.getElementById("username");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const userName = usernameInput.value;
  fetchUserInfo(userName);
});

const fetchUserInfo = async (userName) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      throw new Error("Пользователь не найден");
    }
    const user = await response.json();
    displayUserInfo(user);
  } catch (error) {
    userInfoDiv.innerHTML = `<p style="color: red;">${error}</p>`;
  }
};

const displayUserInfo = (user) => {
  userInfoDiv.innerHTML = `
        <h2>${user.login}</h2>
        <img src="${user.avatar_url}" alt="Аватар">
        <p><strong>Ссылка на профиль:</strong> <a href="${
          user.html_url
        }" target="_blank">${user.html_url}</a></p>
        <p><strong>Дата регистрации:</strong> ${new Date(
          user.created_at
        ).toLocaleDateString()}</p>
        <p><strong>Количество репозиториев:</strong> ${user.public_repos}</p>
    `;
};
