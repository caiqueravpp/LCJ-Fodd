window.addEventListener("load", function () {
  let image = document.getElementById("image-product");
  let productName = document.getElementById("title-product");
  let smallPrice = document.getElementById("small-price");
  let price1 = document.getElementById("price-1");
  let price2 = document.getElementById("price-2");
  let price3 = document.getElementById("price-3");

  async function getProductByID() {
    const ID = window.location.href.split("=")[1];
    const response = await fetch(`/products/${ID}`);
    return await response.json();
  }

  function renderProduct(product) {
    image.src = product.url_image;
    productName.innerText = product.nome;
    prices = changeCommaToDot([product.preco1, product.preco2, product.preco3]);
    minValue = getMinValue(prices);
    smallPrice.innerText = `R$ ${minValue}`;
    price1.innerText = `R$ ${prices[0]}`;
    price2.innerText = `R$ ${prices[1]}`;
    price3.innerText = `R$ ${prices[2]}`;
  }

  function changeCommaToDot(prices) {
    for (let i = 0; i < prices.length; i++) {
      price = prices[i].replace(/[,]/g, ".");
      prices[i] = parseFloat(price).toFixed(2);
    }
    return prices;
  }

  function getMinValue(prices) {
    return Math.min(...prices).toFixed(2);
  }

  getProductByID().then(renderProduct);
});
