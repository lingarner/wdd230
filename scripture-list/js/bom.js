// const scripture = document.querySelector("input");
// const button = document.querySelector("#addButton");
// const list = document.querySelector(".list");

// function addToList() {
//   if (input == "") {
//     return null;
//   } else {
//     const list = document.createElement("li");
//     const newScript = scripture.value;
//     newScript.innerHTML = input;
//     //
//     const remove = document.createElement("button");
//     remove.textContent = "❌";
//     remove.addEventListener("click", () => {
//       scripture.remove();
//     });
//   }
// }

// button.addEventListener("click", addToList(newScript));
// button.addEventListener("click", console.log(newScript));

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
