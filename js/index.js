filterSelection("all");
function filterSelection(P) {
  var x, i;
  x = document.getElementsByClassName("product");
  if (P == "all") P = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(P) > -1) addClass(x[i], "show");
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

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("logos");
var btns = btnContainer.getElementsByClassName("logoBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
