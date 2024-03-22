
document.addEventListener("DOMContentLoaded", function() {
  var products = document.querySelectorAll(".famous-product");

  products.forEach(function(product) {
    var image = product.querySelector("img");

    image.addEventListener("mouseover", function() {
      product.classList.add("hovered");
    });

    image.addEventListener("mouseout", function() {
      product.classList.remove("hovered");
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".price .fa-plus");
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function() {
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".price .fa-plus");
    var cartCount = document.getElementById("cart-count");
    var itemCount = 0;
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        itemCount++;
        cartCount.textContent = itemCount;
      });
    });
  });
  
    