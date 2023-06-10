const  { nanoid }  = require("nanoid");


function create(bundles, bundleName) {
  const bundle = {
    name: bundleName,
    id: nanoid(4),
  };
  bundles.push(bundle);
  return bundles;
}

/*function index(bundles) {
  return bundles.map((animals) => bundle.id + " " + bundle.name).join("\n");
}

function show(bundles, bundleId) {
  const foundBundle = bundles.find((bundle) => bundle.id === bundleId);
  return foundBundle.id + " " + foundBundle.name;
}
function destroy(bundles, bundleId) {
  const index = bundles.findIndex((bundle) => bundle.id === bundleId);

  if (index > -1) {
    bundles.splice(index, 1);
    console.log("Your bundle has been deleted");

    returnbundles;
  } else {
    console.log("Bundle with that Id could not be found");
  }
}

function update(bundles, bundleId, updatedBundle) {
    const index = bundles.findIndex((bundle) => bundle.id === bundleId);
    
    if (index > -1) {

        bundles.index.id = bundleId;

        bundle.index.name = updatedBundle;

        console.log("Your bundle ha been updated");

        return bundles
    } else {
        console.log("We could not find an bundle with that id")
                }
}*/
 
module.exports = {
    create,
    // index,
    // show,
    // destroy,
    // update
}