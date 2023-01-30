function addItem() {
    let text = document.getElementById("newItemText").value;
    let list = document.getElementById("items");
    let item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  }