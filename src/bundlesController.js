const { nanoid } = require("nanoid");

const inform = console.log;

function create(
  bundles,
  bundleName,
  bundlePrice,
  bundleAvailability,
  bundleColor
) {
  const bundle = {
    name: bundleName,
    id: nanoid(4),
    priceInCents: Number(bundlePrice),
    inStock: JSON.parse(bundleAvailability),
    color: bundleColor,
  };
  bundles.push(bundle);
  return bundles;
}

function index(bundles) {
  return bundles.map((bundle) => `${bundle.id} ${bundle.name}`).join("\n");
}

function show(bundles, bundleId) {
  const foundBundle = bundles.find((bundle) => bundle.id === bundleId);

  return ` Bundle ID: ${foundBundle.id}  Bundle Name: ${
    foundBundle.name
  } Bundle Price: $${(foundBundle.priceInCents / 100).toFixed(
    2
  )} Bundle In Stock: ${foundBundle.inStock} Bundle Color: ${
    foundBundle.color
  }`;
}
function destroy(bundles, bundleId) {
  const index = bundles.findIndex((bundle) => bundle.id === bundleId);

  if (index > -1) {
    bundles.splice(index, 1);
    console.log("Your bundle has been deleted");
    return bundles;
  } else {
    console.log("Bundle with that Id could not be found");
    return bundles;
  }
}

function edit(bundles, bundleId, updatedBundle) {
  const index = bundles.findIndex((bundle) => bundle.id === bundleId);

  if (index > -1) {
    bundles[index].id = bundleId;
    bundles[index].name = updatedBundle;
    console.log("Your bundle ha been updated");
    return bundles;
  } else {
    console.log("We could not find a bundle with that id");
    return bundles;
  }
}

module.exports = {
  create,
  index,
  show,
  destroy,
  edit,
};
