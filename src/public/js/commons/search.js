let searchField = document.getElementById("search-field");
let buttonSearch = document.getElementById("search-button");
let linkSearch = document.getElementById("search-link");

function triggerSearch() {
  if (!searchField.value) {
    return;
  }
  let searchString = formatSearchString(searchField.value);
  linkSearch.href = `search.html?search=${searchString}`;
}

function formatSearchString(searchString) {
  let search = searchString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const formatedString = search.replace(/[ ]/g, "+");
  return formatedString;
}

buttonSearch.addEventListener("click", function (e) {
  triggerSearch();
});

searchField.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});
