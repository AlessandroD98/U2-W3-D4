const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", addtext);

function addtext() {
  const bar = document.querySelector("input").value;
  const firstsPofS = bar.charAt(0);
  const secondPofS = bar.slice(1);
  const fulls = firstsPofS.toUpperCase() + secondPofS.toLocaleLowerCase();
  const todolist = document.getElementById("todo");
  const fisrtli = document.createElement("p");
  fisrtli.innerText = "-  " + fulls;
  todolist.appendChild(fisrtli);
  const donebutton = document.createElement("button");
  donebutton.innerText = "Done";
  donebutton.classList.add("done");

  fisrtli.appendChild(donebutton);
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "Delete";
  deletebutton.classList.add("delete");
  fisrtli.appendChild(deletebutton);

  deletebutton.addEventListener("click", deletetext);
  function deletetext() {
    const pdeleted = document.querySelector("p");
    pdeleted.remove();
  }
  donebutton.addEventListener("click", complete);
  function complete() {
    const pcompleted = document.querySelector("p");
    pcompleted.classList.add("barrato");
  }
}
