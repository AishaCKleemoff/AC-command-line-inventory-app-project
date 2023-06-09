const { nanoid } = require("nanoid");
const itemIventory = require("../data/inventory.json")

function create(items, itemName) {
    const item = {
        name: itemName,
        id: nanoid(4),
    }
}