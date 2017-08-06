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
const baseUrl = "https://foodfixers-api.iskall.io"
const api = baseUrl + "/"


// Stripe key
const stripeKey = "pk_test_tuiIc9CcK7Rf8qBOJ3cFeYjT"

export { AnimateButton, api, stripeKey, baseUrl };
