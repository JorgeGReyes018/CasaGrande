//Filter products by logo button
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

//Add class to element
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

//Remove class from element
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//Filter products by search input
function searchProducts() {
  var input, filter, container, products, productName, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  container = document.getElementsByClassName("container")[0];
  products = container.getElementsByClassName("product");
  for (i = 0; i < products.length; i++) {
    productName = products[i].getElementsByClassName("productName")[0];
    if (productName.innerHTML.toUpperCase().indexOf(filter) > -1) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
}

// Clear search input and its actions
function clearSearch() {
  var input = document.getElementById("searchInput");
  input.value = "";
  searchProducts();
  filterSelection("all"); // add this line to make all products live or displayed
}

//Show all products on page load
filterSelection("all");

//Add event listener to logo buttons
var logoBtns = document.getElementsByClassName("logoBtn");
for (var i = 0; i < logoBtns.length; i++) {
  logoBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("live");
    current[0].className = current[0].className.replace(" live", "");
    this.className += " live";
  });
}

//Add event listener to search input
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", searchProducts);

//Add event listener to clear button
var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearSearch);

// filterSelection("all");

// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("product");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//   }
// }

// function addClass(el, name) {
//   var i, arr1, arr2;
//   arr1 = el.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       el.className += " " + arr2[i];
//     }
//   }
// }

// function removeClass(el, name) {
//   var i, arr1, arr2;
//   arr1 = el.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   el.className = arr1.join(" ");
// }

// let searchInput = document.getElementById("searchInput");
// searchInput.addEventListener("input", () => {
//   let query = searchInput.value.toLowerCase();
//   let products = document.querySelectorAll(".product");
//   products.forEach((product) => {
//     let productName = product.querySelector(".productName");
//     let productNameText = productName.textContent.toLowerCase();
//     if (productNameText.includes(query)) {
//       product.style.display = "block";
//     } else {
//       product.style.display = "none";
//     }
//   });
// });
