// Animate button
function AnimateButton() {

  function myEndFunction() {
   this.classList.remove("cart-link-animation");
  }

   const item = document.getElementById('cart-link')
   item.classList.add("cart-link-animation");
   item.addEventListener("animationend", myEndFunction);

}

// Addres for the api
const api = "https://foodfixers-api.iskall.io/"

// Stripe key
const stripeKey = "dwawudihwaih123123"

export { AnimateButton, api, stripeKey };
