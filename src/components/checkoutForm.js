import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import actions from "../redux/actions/products";
import CardSection from "./CardSection";

const CheckoutForm = (props) => {
  const stripe = useStripe()
  const elements = useElements()
  const handleSubmit = async (event) => {
    event.preventDefault();
  
  if(!stripe || !elements) {
    return;
  }

  const card =  elements.getElement(CardElement);
  await stripe.createToken(card).then(async result => {
    if(result.error){
      alert(result.error.message)
    }else{
      props.BuyProduct(props.product, result.token)
    }
    console.log(props?.message)
    props?.message && alert(props.message)
  
  })
};
  


    return (
      <div>
        <div className="product-info">
          <h3 className="product-title">{props?.product?.product_description}</h3>
          <h4 className="product-price">{props?.product?.product_prize}$</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <CardSection />
          <button className="btn-pay">Buy Now</button>
        </form>
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    message: state.ProductsReducer.message,
    loading: state.ProductsReducer.loading
  })
  
  const mapDispatchToProps = (dispatch) => ({
    BuyProduct: (product, data) => dispatch(actions.BuyProduct(product, data))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)
