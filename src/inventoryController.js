const { nanoid } = require("nanoid");
const itemIventory = require("../data/inventory.json");

function create(items, itemName) {
  const item = {
    name: itemName,
    id: nanoid(4),
  };
  items.push(item);
  return items;
}

function index(items) {
  return items.map((animals) => item.id + " " + item.name).join("\n");
}

function show(items, itemId) {
  const foundItem = items.find((item) => item.id === itemId);
  return foundItem.id + " " + foundItem.name;
}
function destroy(items, itemId) {
  const index = items.findIndex((item) => item.id === itemId);

  if (index > -1) {
    items.splice(index, 1);
    console.log("Your item has been deleted");

    returnitems;
  } else {
    console.log("Item with that Id could not be found");
  }
}

function update(items, itemId, updatedItem) {
    const index = items.findIndex((item) => item.id === itemId);
    
    if (index > -1) {

        items[index].id = itemId;

        item[index].name = updatedItem;

        console.log("Your item ha been updated");

        return items
    } else {
        console.log("We could not find an item with that id")
                }
}
 
module.exports = {
    create,
    index,
    show,
    destroy,
    update
}