document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  }

  if (event.target.dataset.type === "edit") {
    const noteEdited = prompt("Введите новое название").trim();
    const id = event.target.dataset.id;
    edit(id, noteEdited).then(() => {
      event.target.closest("li").querySelector("span").textContent = noteEdited;
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}
async function edit(id, data) {
  await fetch(`/${id}/${data}`, {
    method: "PUT",
    //body: data,
  });
}
