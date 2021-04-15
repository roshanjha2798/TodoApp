let list = document.querySelector(".list");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");


let createLi = (value) => {
  let item = document.createElement("li");
  item.innerText = value;

  let button = document.createElement("span");
  button.innerHTML = '<i class="fas fa-trash"></i>';
  button.className = "button";
  let editButton = document.createElement("span");
  editButton.innerText = 'Edit';
  editButton.className = "edit";
  item.appendChild(editButton);
  item.appendChild(button);
  item.classList.add('stylelist');
  return item;
};
btn.addEventListener("click", () => {
  let value = input.value;
  let item = createLi(value);
  list.append(item);
  input.value = "";
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    let target = e.target;
    let li = target.closest("li"); // get reference by using closest
    let nodes = Array.from(li.closest("ul").children); // get array
    let index = nodes.indexOf(li);
    if (target.innerText === "Edit") {
      const value = prompt("Update Task");
      console.log(value);
      let item = list.childNodes[index];
      let text = item.childNodes[0];
      console.log({ item, text });
      text.nodeValue = value;
    } else {
      list.removeChild(list.childNodes[index]);
    }
    // console.log(index);
  });
});