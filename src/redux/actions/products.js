import { GetProducts, GetProductByID, BuyProductt, getAllAddToCart } from "../../config/config";

export const PRODUCTS_FETCH_STARTED = "PRODUCTS_FETCH_STARTED";
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";
export const PRODUCTS_FETCH_ERROR = "PRODUCTS_FETCH_ERROR";

export const PRODUCTBYID_FETCH_STARTED = "PRODUCTBYID_FETCH_STARTED"
export const PRODUCTBYID_FETCH_SUCCESS = "PRODUCTBYID_FETCH_SUCCESS"
export const PRODUCTBYID_FETCH_ERROR = "PRODUCTBYID_FETCH_ERROR"

export const BUYPRODUCT_STARTED = "BUYPRODUCT_STARTED"
export const BUYPRODUCT_SUCCESS = "BUYPRODUCT_SUCCESS"
export const BUYPRODUCT_ERROR = "BUYPRODUCT_ERROR"

export const ADDTOCART_STARTED = "ADDTOCART_STARTED"
export const ADDTOCART_SUCCESS = "ADDTOCART_SUCCESS"
export const ADDTOCART_ERROR = "ADDTOCART_ERROR"

const actions = {
    fetchProducts: () => async (dispatch) => {
        try{
            dispatch({
                type: PRODUCTS_FETCH_STARTED
            })
            await GetProducts().then(response => {
                if(response?.status === 200){
                    dispatch({
                        type: PRODUCTS_FETCH_SUCCESS,
                        payload: {
                            info: response?.data?.data
                        }
                    })
                }else{
                    dispatch({
                        type: PRODUCTS_FETCH_ERROR
                    })
                }
            })
        }catch(error){
            dispatch({
                type: PRODUCTS_FETCH_ERROR
            })
        }
    },

    fetchProductById: (id) => async (dispatch) => {
        try{
            dispatch({
                type: PRODUCTBYID_FETCH_STARTED
            })
            await GetProductByID(id).then(response => {
                if(response?.status === 200){
                    dispatch({
                        type: PRODUCTBYID_FETCH_SUCCESS,
                        payload: {
                            info: response?.data?.data[0]
                        }
                    })
                }else{
                    dispatch({
                        type: PRODUCTBYID_FETCH_ERROR
                    })
                }
            })
        }catch(error){
            dispatch({
                type: PRODUCTBYID_FETCH_ERROR
            })
        }
    },

    BuyProduct:(product, data) => async (dispatch) => {
        try{
            dispatch({
                type: BUYPRODUCT_STARTED
            })
            await BuyProductt(product, data).then(response => {
                if(response?.status === 200){
                    dispatch({
                        type: BUYPRODUCT_SUCCESS,
                        payload: {
                            message: response?.data?.message
                        }
                    })
                }else{
                    dispatch({
                        type: BUYPRODUCT_ERROR
                    })
                }
            })
        }catch(error){
            dispatch({
                type: BUYPRODUCT_ERROR
            })
        }
    },

    GetAllCart:() => async (dispatch) => {
        try{
            dispatch({
                type: ADDTOCART_STARTED
            })
            await getAllAddToCart().then(response => {
                if(response?.status === 200){
                    dispatch({
                        type: ADDTOCART_SUCCESS,
                        payload: {
                            message: response?.data?.message,
                            products: response?.data?.data
                        }
                    })
                }else{
                    dispatch({
                        type: ADDTOCART_ERROR
                    })
                }
            })
        }catch(error){
            dispatch({
                type: ADDTOCART_ERROR
            })
        }
    },
}


export default actions