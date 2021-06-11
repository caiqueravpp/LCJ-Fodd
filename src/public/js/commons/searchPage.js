window.addEventListener("load", function () {
  async function searchProducts(searchString) {
    const response = await fetch(
      searchString ? `/products?search=${searchString}` : "/products"
    );
    return await response.json();
  }
  function formatSearchString() {
    if (window.location.href.includes("?search=")) {
      return window.location.href.split("=")[1];
    }
    return null;
  }

  function renderProduct(product) {
    const container = document.getElementById("products-container");
    const productContainer = document.createElement("div");
    productContainer.classList.add("col-xs-6");
    productContainer.classList.add("col-md-4");
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image_search");
    const image = document.createElement("img");
    const priceTitle = document.createElement("h3");
    priceTitle.classList.add("tituloproduto");
    const priceFor = document.createElement("p");
    const price = document.createElement("span");
    price.classList.add("spansubtitulo");
    const breakLine = document.createElement("BR");
    const priceButton = document.createElement("a");
    priceButton.classList.add("btn");
    priceButton.classList.add("btn_carousel");

    productContainer.appendChild(imageContainer);
    productContainer.appendChild(priceTitle);
    productContainer.appendChild(priceFor);
    productContainer.appendChild(price);
    productContainer.appendChild(breakLine);
    productContainer.appendChild(priceButton);

    image.src = product.url_image;
    imageContainer.appendChild(image);

    priceFor.innerText = "Apartir de:";

    priceTitle.innerText = product.nome;
    priceButton.innerText = "Ir agora";
    prices = changeCommaToDot([product.preco1, product.preco2, product.preco3]);
    minValue = getMinValue(prices);
    price.innerText = `R$ ${minValue}`;
    container.appendChild(productContainer);

    priceButton.href = `produtos.html?id=${product.id}`;
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

  searchProducts(formatSearchString()).then(function (res) {
    res.forEach(function (item) {
      renderProduct(item);
    });
  });
});
