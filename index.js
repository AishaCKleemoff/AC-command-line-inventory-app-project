const { readJSONFile, writeJSONFile } = require("./src/helpers");
const {
    create,
    index,
    show,
    destroy,
    update,
    inventory
} = require("./src/inventoryController")


const run = () => {

    const action = process.argv[2];

    const item = process.argv[3];
    
    let items = readJSONFile("./data", "inventory.json")

    let writeToFile = false;
    let updatedItems = [];

    switch (action) {
        case "index":
            const allItems = index(items)
            console.log(allItems);
            break;
        case "create":
            console.log("New Item Created")
            updatedItems = create(items, item)
            writeToFile = true;
            break;
        case "show":
            const foundItem = show(items, item)
            console.log(foundItem)
            break;
        case "update":
            console.log(item)
            updatedItems = update(items, item, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedItems = destroy(items, item);
            writeToFile = true;
            break;
    }
}