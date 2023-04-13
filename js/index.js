filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(el, name) {
  var i, arr1, arr2;
  arr1 = el.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      el.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(el, name) {
  var i, arr1, arr2;
  arr1 = el.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  el.className = arr1.join(" ");
}

function searchFilter() {
  var input, filter, allProducts, pr, pd, i, txtValue;
  input = document.getElementsByClassName("input");
  filter = input.value.toUpperCase();
  allProducts = document.getElementsByClassName("products");
  pr = allProducts.getElementsByClassName("product");

  // Loop through all allProducts rows, and hide those who don't match the search query
  for (i = 0; i < pr.length; i++) {
    pd = pr[i].getElementsByTagName("pd")[0];
    if (pd) {
      txtValue = pd.textContent || pd.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        pr[i].style.display = "";
      } else {
        pr[i].style.display = "none";
      }
    }
  }
}

// <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names..">
