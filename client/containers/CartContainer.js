import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkout } from '../actions/cartActions'
import { getTotal, getTotalSide , getCartProducts, getOrder, getCartSideDishes } from '../reducers'
import Cart from '../components/Cart'
import { addNotification } from '../actions/notificationActions'
import LocationContainer from './LocationContainer'
import CheckoutContainer from './CheckoutContainer'
import { removeFromCart } from '../actions/productActions'
import { loadDishes } from '../actions/productActions'
import { loadDeliveries } from '../actions/deliveriesActions'
import { loadLocation, loadAreas } from '../actions/locationActions'
import ReactModal from 'react-modal';

class CartContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      confirmCheck: false,
      showModal: false
    };

    this.removingFromCart = this.removingFromCart.bind(this);
    this.acceptCheckout = this.acceptCheckout.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  componentDidMount() {
    const { loadDishes,loadLocation,loadAreas,loadDeliveries, products, order } = this.props
    // Dispatch the requests
    loadDishes()
    loadDeliveries()
    loadAreas()
  }

  removingFromCart(id, name){
    const { removeFromCart, addNotification } = this.props
    removeFromCart(id)
    addNotification(`Tog bort "${name}" från kundvagnen`, "success")
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  acceptCheckout(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (value) {
      this.setState({
        confirmCheck: true
      });
    }else {
      this.setState({
        confirmCheck: false
      });
    }

  }

  render() {
    const { products, total, checkout, location, areas, orderFormatted } = this.props
    return (
      <div>
        <LocationContainer />
        <Cart
          products={products}
          total={total}
          removingFromCart={this.removingFromCart}
        >
        </Cart>
        <label>
          Jag godkänner <a href="#" className="avtal-button" onClick={this.handleOpenModal} >avtalet</a>:
          <input
            className="confirm-check"
            name="confirmCheck"
            checked={this.state.confirmCheck}
            type="checkbox"
            onChange={this.acceptCheckout} />
        </label>
        <CheckoutContainer products={products} orderFormatted={orderFormatted} confirmCheck={this.state.confirmCheck} location={location} total={total} />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          className="Modal"
          overlayClassName="ModalOverlay"
        >
          <span className="modal-close-icon float-right" onClick={this.handleCloseModal}><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
          <p>Anv&auml;ndarvillkor</p>
          <p>Vi &auml;r p&aring; inget s&auml;tt regelryttare, men vi har &auml;nd&aring; en del information som vi vill att du ska ta del av innan du handlar av oss. Vi har gjort den s&aring; kort som m&ouml;jligt f&ouml;r att du faktiskt ska kunna l&auml;sa igenom allt!</p>
          <p>Best&auml;llning</p>
          <p>F&ouml;r att f&aring; handla av oss m&aring;ste du ha fyllt 18 &aring;r. (Det g&aring;r bra att be en vuxen k&ouml;pa ut, dock!)</p>
          <p>Vi beh&ouml;ver ha din best&auml;llning senast klockan 20:00 dagen innan vi ska leverera. (Appen kommer s&auml;ga ifr&aring;n om detta, vi vill bara p&aring;peka att det hj&auml;lper inte att f&ouml;rs&ouml;ka hacka den!)</p>
          <p>Allergier</p>
          <p>Om du har n&aring;gon livsmedelsallergi m&aring;ste du l&auml;sa igenom det h&auml;r stycket:</p>
          <p>Det &auml;r jobbigt med allergier! Vissa &auml;r k&auml;nsligare &auml;n andra och bara du vet hur k&auml;nslig du &auml;r. Det finns m&ouml;jlighet att klicka i dom vanligaste &ouml;verk&auml;nsligheterna och g&ouml;r du det s&aring; g&ouml;r vi allt f&ouml;r att din allergen inte kommer med i din mat. Vi har bra rutiner f&ouml;r detta och anv&auml;nder separata redskap och ytor, MEN som alltid i ett k&ouml;k s&aring; finns det en liten risk f&ouml;r att sp&aring;r av det ena ska hamna i det andra och &auml;r du allvarligt allergisk mot n&aring;got s&aring; v&aring;gar vi helt enkelt inte garantera att din mat &auml;r 100% fri fr&aring;n din allergen. D&aring; &auml;r det s&auml;krast att bara &auml;ta hemmalagat.</p>
          <p>Om du har n&aring;gra andra livsmedelsallergier vill vi alltid att du klickar i &rdquo;andra allergier&rdquo; och specifierar vilka. Det har h&auml;nt f&ouml;rut att vi varit lite wild and crazy en midsommar och n&auml;stan haft ihj&auml;l n&aring;gon med en jordgubbe&hellip;</p>
          <p>Till dig som &auml;r glutenintolerant:</p>
          <p>Vi gillar inte heller gluten och anv&auml;nder bara glutenfria produkter i v&aring;rt k&ouml;k.</p>
          <p>Vi anv&auml;nder bara Yamasa soja fr&aring;n Japan. Den j&auml;ser ihop med rostat vete men inneh&aring;ller inget gluten efter fermenteringen. Livsmedelsverket har analyserat den och kunde inte p&aring;visa gluten. L&auml;s g&auml;rna mer <a href="https://www.livsmedelsverket.se/matvanor-halsa--miljo/sjukdomar-allergier-och-halsa/allergi-och-overkanslighet/gluten">h&auml;r</a>.</p>
          <p>Vi anv&auml;nder bara Suehiro vin&auml;ger fr&aring;n japanska Mizkan till v&aring;rt sushiris. &Auml;ven denna tillverkas ihop med vete men processas f&ouml;r att bli glutenfri. </p>
          <p>L&auml;s g&auml;rna mer <a href="http://mizkan.com/JapaneseProducts/Restaurants/Vinegars/Suehiro-Grain-Flavored-Distilled-Vinegar.aspx">h&auml;r</a>.</p>
          <p><br /><br /><br /></p>
          <p>Leverans</p>
          <p>Vi g&ouml;r allt f&ouml;r att vara p&aring; r&auml;tt plats p&aring; r&auml;tt tid. J&ouml;nk&ouml;pingstrafiken och dess m&aring;nga v&auml;garbeten r&aring;r vi dessv&auml;rre inte alltid p&aring;, s&aring; vi kan bli sena. Om vi blir runt 10 minuter sena eller mer kommer vi att meddela dig via mejl eller sms. Om n&aring;got of&ouml;rutsett h&auml;nder s&aring; att vi inte kan leverera alls meddelar vi detta och ger dig en full &aring;terbetalning.</p>
          <p>Du som kund m&aring;ste vara p&aring; plats f&ouml;r att h&auml;mta din best&auml;llning p&aring; angiven tid. Missar du kan du alltid kontakta oss p&aring; 0707000000 s&aring; ska vi s&aring;klart f&ouml;rs&ouml;ka l&ouml;sa s&aring; att du f&aring;r din matb &auml;nd&aring;. Vi vill dock inte att &ouml;vriga kunder ska drabbas av f&ouml;rseningar s&aring; det kan inneb&auml;ra att du m&aring;ste h&auml;mta din best&auml;llning p&aring; ett annat av v&aring;ra stopp. I v&auml;rsta fall f&aring;r din best&auml;llning &aring;ka med oss tillbaka till v&aring;rt k&ouml;k i Hedenstorp och v&auml;nta p&aring; att du h&auml;mtar det i kylen d&auml;r. </p>
          <p>Har du inte h&ouml;rt av dig under hela dagen m&aring;ste vi sl&auml;nga din mat dagen efter. Om du inte har h&auml;mtat din mat ger vi ingen &aring;terbetalning.</p>
          <p>&Aring;ngerr&auml;tt</p>
          <p>Om du vill avbest&auml;lla meddelar du oss f&ouml;re klockan 10:00 samma dag s&aring; f&aring;r du en tillgodokod som du kan handla f&ouml;r vid annat tillf&auml;lle. Om du inte meddelar oss innan 10:00 samma dag ger vi ingen &aring;terbetalning. Du kan alltid be n&aring;gon annan h&auml;mta din best&auml;llning om du sj&auml;lv inte har m&ouml;jlighet.</p>
          <p>F&ouml;rs&auml;ljningen genom v&aring;r app omfattas inte av &aring;ngerr&auml;tt enligt distansavtalslagen (lag (2005:59) om distansavtal och avtal utanf&ouml;r aff&auml;rslokaler). Du kan l&auml;sa mer om &aring;ngerr&auml;tt och vilka varor och tj&auml;nster som &auml;r undantagna fr&aring;n &aring;ngerr&auml;tt <a href="http://www.hallakonsument.se/klaga-angra-eller-anmala/vad-lagen-sager/lagen-om-distansavtal-och-avtal-utanfor-affarslokaler/">h&auml;r</a>.</p>
          <p>Nya Villkor</p>
          <p>Om vi kommer p&aring; att vi m&aring;ste &auml;ndra i villkoren meddelar vi dig en vecka i f&ouml;rv&auml;g, men vi kommer inte att be dig om ett nytt godk&auml;nnande. Om du forts&auml;tter att best&auml;lla av oss antar vi att du inte har n&aring;gra inv&auml;ndningar.</p>
          <p><br /><br /></p>
          <p>Kontakta oss</p>
          <p>Vi fokuserar p&aring; att fixa din mat och d&aring; &auml;r det s&aring;klart enklast om alla best&auml;llningar och annat g&ouml;rs i appen. Men du kan alltid kontakta oss p&aring; telefon 070000000 eller via mejl <a href="mailto:hello@foodfixers.se">hello@foodfixers.se</a> om du undrar &ouml;ver n&aring;got eller vill meddela oss n&aring;got. Vi &aring;terkommer alltid s&aring; fort vi kan. Men ibland kan vi inte s&aring; fort&hellip;</p>
          <p>Vill du bara kolla vad vi h&aring;ller p&aring; med eller tj&ouml;ta lite kan du kolla in p&aring; Facebook @FoodFixersExpress eller Instagram @foodfixersexpress.</p>
          <button className="btn main-btn btn-45" onClick={this.handleCloseModal}>Stäng</button>
        </ReactModal>
      </div>
    )
  }

}


CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  orderFormatted: getOrder(state),
  location: state.cart.choosenLocation,
  total: getTotal(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkout, loadDishes, loadLocation, loadAreas, loadDeliveries, removeFromCart, addNotification }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
