import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import owners from "../images/owners.png";
import dish1src from "../images/dish1.png";
import dish2src from "../images/dish2.png";
import dish3src from "../images/dish3.png";
import dish4src from "../images/dish4.png";
import dish5src from "../images/dish5.png";
import dish6src from "../images/dish6.png";
import dish7src from "../images/dish7.png";
import dish8src from "../images/dish8.png";
import dish9src from "../images/dish9.png";
import dish10src from "../images/dish10.png";


class ExampleDishesContainer extends Component {
  constructor(props) {
    super(props)
  }

   render() {

     const dish1 = {
           backgroundImage: `url('${dish1src}')`
     }
     const dish2 = {
           backgroundImage: `url('${dish2src}')`
     }
     const dish3 = {
           backgroundImage: `url('${dish3src}')`
     }
     const dish4 = {
           backgroundImage: `url('${dish4src}')`
     }
     const dish5 = {
           backgroundImage: `url('${dish5src}')`
     }
     const dish6 = {
           backgroundImage: `url('${dish6src}')`
     }
     const dish7 = {
           backgroundImage: `url('${dish7src}')`
     }
     const dish8 = {
           backgroundImage: `url('${dish8src}')`
     }
     const dish9 = {
           backgroundImage: `url('${dish9src}')`
     }
     const dish10 = {
           backgroundImage: `url('${dish10src}')`
     }



     return (
       <div>
         <div>
           <h3 className="title">Ett urval ur vår meny</h3>
           <h5>För att hitta hela vårt utbud, skapa ett konto och logga in!</h5>
           <h5>Eller kontakt oss på:</h5>
           <div className="contact">
             Email: <a href="mailto:foodfixersexpress@gmail.com" target="_blank">foodfixersexpress@gmail.com</a><br></br>
             Tel: <a href="tel:+46103302077">010-330 20 77</a>
           </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish1}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Swedish Delight Mix</span>
                 <div> En blandning av insideout, maki, avokado nigiri och lax nigiri
Serveras med soja, wasabi och ingefära. Går att välja mellan 8, 10 eller 12 bitar</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish2}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Li’l Picky’s Mix</span>
                 <div>En blandning av insideout, maki, avokado nigiri, räk nigiri och lax nigiri
Serveras med soja, wasabi och ingefära. Går att välja mellan 8, 10 eller 12 bitar</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish3}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Happy Go Lucky Mix</span>
                 <div>En blandning av insideout, maki, tofu, tonfisk nigiri, räk nigiri och lax nigiri
Serveras med soja, wasabi och ingefära. Går att välja mellan 8, 10 eller 12 bitar</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish4}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Safe’n’Sound Mix</span>
                 <div>En blandning av insideout, maki, tofu, räk nigiri och avokado nigiri
Serveras med soja, wasabi och ingefära. Går att välja mellan 8, 10 eller 12 bitar</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish5}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Nothing Fishy Goin’ on Mix</span>
                 <div>Ett veganskt alternativ som består av en blandning av insideout, maki, tofu, shiitake och rättika
Serveras med soja, wasabi och ingefära. Går att välja mellan 8, 10 eller 12 bitar</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish6}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Cali Delish</span>
                 <div>Insideout bitar fyllda med gurka, lax och avokado, rullad i rostade sesamfrön
                   Serveras med soja, wasabi och ingefära.
                   Glutenfri, Mjölkfri, Skaldjursfri</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish7}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Oh My Mango!</span>
                 <div>Insideout bitar fyllda med gurka, lax och mango, rullad i rostade sesamfrön
                   Serveras med soja, wasabi och ingefära.
                   Glutenfri, Mjölkfri, Skaldjursfri</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish8}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">California Luvin</span>
                 <div>Norimaki bitar fyllda med gurka, lax och avokado
                   Serveras med soja, wasabi och ingefära.
                   Glutenfri, Mjölkfri, Skaldjursfri</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish9}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Creamcheese Cravings</span>
                 <div>Norimaki bitar fyllda med gurka, crabfish och philadelphia cream cheese
                   Serveras med soja, wasabi och ingefära.
                   Glutenfri, Mjölkfri, Skaldjursfri</div>
               </div>
             </div>
         </div>

         <div className="productItem">
             <div className="product-image" style={dish10}>

             </div>
             <div>
               <div className="product-text">
                 <span className="product-title">Totally Tuna</span>
                 <div>Norimaki bitar med ena halvan fylld med gurka, tonfisk och avokado, andra halvan med gurka, tonfisk och mango
                   Serveras med soja, wasabi och ingefära.
                   Glutenfri, Mjölkfri, Skaldjursfri</div>
               </div>
             </div>
         </div>

       </div>
     )
   }
}

export default ExampleDishesContainer
