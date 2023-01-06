import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CheckoutForm from "../components/checkoutForm";
import actions from "../redux/actions/products";

import './styles.css'

const stripePromise = loadStripe(`pk_test_51MNFmbI8iUU5STikZpWSzuxczXppUU9oPP3kXrzMucVSPb6MqrxrhcRVjIbOxpU0FTd9mealS04lfSgW7OEgBrIw007GtgyC3C`)

 const Checkout = (props) => {
  const params = useParams()

  useEffect(() => {
    props.fetchProductById(params?.pid)
}, [])

  return (
    <div className="Checkout">
        {props.loading === false ?
      <div className="product">
        <img
          src={props.info?.product_images ? props.info?.product_images[0]: ""}
          alt={props.info?.product_name}
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm product={props.info}/>
          </Elements>
        </div>
       
      </div>
       : "Loading....."
      }
    </div>
  )

  
}
const mapStateToProps = (state) => ({
  info: state.ProductsReducer.product,
  loading: state.ProductsReducer.loading
})

const mapDispatchToProps = (dispatch) => ({
  fetchProductById: (id) => dispatch(actions.fetchProductById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)