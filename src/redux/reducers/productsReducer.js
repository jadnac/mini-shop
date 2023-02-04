import {
    PRODUCTS_FETCH_STARTED,
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_FETCH_ERROR,
    PRODUCTBYID_FETCH_STARTED,
    PRODUCTBYID_FETCH_SUCCESS,
    PRODUCTBYID_FETCH_ERROR,
    BUYPRODUCT_STARTED,
    BUYPRODUCT_SUCCESS,
    BUYPRODUCT_ERROR,
    ADDTOCART_STARTED,
    ADDTOCART_SUCCESS,
    ADDTOCART_ERROR
} from "../actions/products"

const defaultState = {
    info: [],
    product: {},
    loading: false,
    message: "",
    products: []
}

function ProductsReducer(state = defaultState, action){
    switch(action.type){
        case PRODUCTS_FETCH_STARTED:
            return Object.assign({}, state, {
                ...state,
                loading: true
            });
        case PRODUCTS_FETCH_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                loading: false,
                info: action?.payload?.info
            });
        case PRODUCTS_FETCH_ERROR:
            return Object.assign({}, state, {
                ...state,
                loading: false,
            });
            case PRODUCTBYID_FETCH_STARTED:
                return Object.assign({}, state, {
                    ...state,
                    loading: true
                });
            case PRODUCTBYID_FETCH_SUCCESS:
                return Object.assign({}, state, {
                    ...state,
                    loading: false,
                    product: action?.payload?.info
                });
            case PRODUCTBYID_FETCH_ERROR:
                return Object.assign({}, state, {
                    ...state,
                    loading: false,
                });
                case BUYPRODUCT_STARTED:
                    return Object.assign({}, state, {
                        ...state,
                        loading: true
                    });
                case BUYPRODUCT_SUCCESS:
                    return Object.assign({}, state, {
                        ...state,
                        loading: false,
                        message: action?.payload?.message
                    });
                case BUYPRODUCT_ERROR:
                    return Object.assign({}, state, {
                        ...state,
                        loading: false,
                    });  
                case ADDTOCART_STARTED:
                    return Object.assign({}, state, {
                        ...state,
                        loading: true
                    });
                case ADDTOCART_SUCCESS:
                    return Object.assign({}, state, {
                        ...state,
                        loading: false,
                        message: action?.payload?.message,
                        products: action?.payload?.products
                    });
                case ADDTOCART_ERROR:
                    return Object.assign({}, state, {
                        ...state,
                        loading: false,
                    }); 
        default:
            return state;
    }
}

export default ProductsReducer