// Animate button
function AnimateButton() {

  function myEndFunction() {
   this.classList.remove("cart-link-animation");
  }

   const item = document.getElementById('cart-link')
   item.classList.add("cart-link-animation");
   item.addEventListener("animationend", myEndFunction);

}

export { AnimateButton };
