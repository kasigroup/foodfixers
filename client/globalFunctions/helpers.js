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
const baseUrl = "https://api.foodfixers.se"
const api = baseUrl + "/"


// Stripe key
const stripeKey = "pk_live_8S0wdc4BNw1WDJnE2Xwo1mpp"

export { AnimateButton, api, stripeKey, baseUrl };
