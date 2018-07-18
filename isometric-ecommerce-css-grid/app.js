var productCount = 100;
var productsShown = 100;
var maxProdsPerRow = 10;

function addSpacers() {
  for (var i = 1; i <= productCount; i++) {
    var node = document.createElement("b");
    node.style.gridRow = i;
    document.getElementById("productGrid").appendChild(node);
  }
  resizeGrid();
}

function resizeGrid() {
  var w = window.innerWidth;
  var nPerRow = 0;
  if (w < 600) {
    nPerRow = 1;
  } else if (w < 900) {
    nPerRow = 2;
  } else if (w < 1200) {
    nPerRow = 3;
  } else if (w < 1500) {
    nPerRow = 4;
  } else if (w < 1800) {
    nPerRow = 5;
  } else if (w < 2100) {
    nPerRow = 6;
  } else {
    nPerRow = 7;
  }
  var nRows = Math.floor(productCount / nPerRow);
  productsShown = nRows * nPerRow;
  var spacers = document
    .getElementById("productGrid")
    .getElementsByTagName("b");
  var products = document
    .getElementById("productGrid")
    .getElementsByTagName("li");
  var bottoms = document
    .getElementById("productGrid")
    .getElementsByTagName("span");
  for (var i = 0; i < productCount; i++) {
    if (i < nRows) {
      spacers[i].style.display = "block";
    } else {
      spacers[i].style.display = "none";
    }
    if (i < productsShown) {
      products[i].style.display = "grid";
    } else {
      products[i].style.display = "none";
    }
  }
}

window.onresize = function() {
  resizeGrid();
};

window.onload = addSpacers();
