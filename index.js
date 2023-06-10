const { readJSONFile, writeJSONFile } = require("./src/helpers");
const {
    create,
    // index,
    // show,
    // destroy,
    // update
} = require("./src/bundlesController")

const inform = console.log;

function run() {

    const action = process.argv[2];

    const bundle = process.argv[3];
    
    let bundles = readJSONFile("data", "bundles.json");

    let writeToFile = false;
    let updatedBundles = [];

    switch (action) {
        // case "index":
        //     const allBundles = index(bundles)
        //     inform(allBundles);
        //     break;
        case "create":
            inform("New Bundle Created")
            updatedBundles = create(bundles, bundle)
            writeToFile = true;
            break;
        // case "show":
        //     const foundBundle = show(bundles, bundle)
        //     inform(foundBundle)
        //     break;
        // case "update":
        //     inform(bundle)
        //     updatedBundles = update(bundles, bundle, process.argv[4]);
        //     writeToFile = true;
        //     break;
        // case "destroy":
        //     updatedBundles = destroy(bundles, bundle);
        //     writeToFile = true;
        //     break;
        default: 
            inform("There was an error");
    }

    if (writeToFile) {
        inform("New Bundle detected - bundle is updating");
        writeJSONFile ("./data", "bundles.json", updatedBundles);
    }
}

run();