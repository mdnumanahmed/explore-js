const loadUsers = async () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => displayUsers(data));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  displayUsers(data);
};

const displayUsers = (users) => {
  const userContainer = document.getElementById("users-container");
  for (const user of users) {
    const { name, username, company, email, address, phone } = user;
    const div = document.createElement("div");
    div.classList.add(
      "bg-blue-200",
      "rounded-lg",
      "shadow-lg",
      "p-6",
      "max-w-96"
    );
    div.innerHTML = `
    <h3 class="text-lg font-semibold">User : ${username}</h3>
    <h4 class="text-lg font-semibold">User Name: ${name}</h4>
    <p class="text-lg font-semibold">Company: ${company.name}</p>
    <p class="text-lg font-semibold">Address: ${
      (address.street, address.city)
    }</p>
    <p class="text-lg font-semibold">Email: ${email}</p>
    <p class="text-lg font-semibold">Phone: ${phone}</p>
`;
    userContainer.appendChild(div);
  }
};

loadUsers();
