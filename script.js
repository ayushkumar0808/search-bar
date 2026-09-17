const userData = [
  {
    profileUrl: "assets/ayush_img.png",
    name: "Ayush Kumar",
    email: "ayush@example.com",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=3",
    name: "Rahul Sharma",
    email: "rahul@example.com",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=2",
    name: "Priya Singh",
    email: "priya@example.com",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=4",
    name: "Arjun Verma",
    email: "arjun@example.com",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=5",
    name: "Neha Gupta",
    email: "neha@example.com",
  },
  //   {
  //     profileUrl: "https://i.pravatar.cc/150?img=6",
  //     name: "Rohan Mehta",
  //     email: "rohan@example.com",
  //   },
  //   {
  //     profileUrl: "https://i.pravatar.cc/150?img=10",
  //     name: "Sneha Patel",
  //     email: "sneha@example.com",
  //   },
  //   {
  //     profileUrl: "https://i.pravatar.cc/150?img=11",
  //     name: "Vikash Yadav",
  //     email: "vikash@example.com",
  //   },
  //   {
  //     profileUrl: "https://i.pravatar.cc/150?img=9",
  //     name: "Ananya Rao",
  //     email: "ananya@example.com",
  //   },
  //   {
  //     profileUrl: "https://i.pravatar.cc/150?img=7",
  //     name: "Karan Malhotra",
  //     email: "karan@example.com",
  /// },
];

let userContainer = document.querySelector(".userContainer");
let userInput = document.querySelector("#userInput");

function renderUser(arr) {
  userContainer.innerHTML = " ";
  arr.map((obj) => {
    let div = document.createElement("div");
    div.className = "userItem";

    let { profileUrl, email, name } = obj;

    div.innerHTML = `
      <img src="${profileUrl}" alt="" />
      <div class="userDetails">
        <h3>${name}</h3>
        <p>${email}</p>
      </div>

  `;
    userContainer.append(div);
  });
  if (userContainer.innerHTML === " ") {
    userContainer.innerHTML = `<div style=" text-align: center;"><p stlye=" font-size: 22px;
  color: #222; " >No user found </p></div>`;
  }
}
renderUser(userData);

const handleSearch = (e) => {
  const resultArr = userData.filter((obj) => {
    let { email, name } = obj;
    return (
      name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      email.toLowerCase().includes(e.target.value.toLowerCase())
    );
  });
  renderUser(resultArr);
};
userInput.addEventListener("input", handleSearch);
