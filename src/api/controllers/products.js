const repository = require("../repository/products");

function formatSearchString(search) {
  const formatedString = search.replace(/[+]/g, " ");
  return `%${formatedString}%`;
}

async function getProducts(req, res) {
  const searchQuery = req.query.search;

  try {
    let results;
    if (searchQuery) {
      const search = formatSearchString(searchQuery);
      results = await repository.searchProducts(search);
    } else {
      results = await repository.getAllProducts();
    }
    console.log(results);
    res.status(200).json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function getProduct(req, res) {
  const id = req.params.id;
  console.log(id);
  try {
    const results = await repository.getProductById(id);
    res.status(200).json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

module.exports = { getProducts, getProduct };
