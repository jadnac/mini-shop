import { useEffect } from 'react';
import { connect } from 'react-redux';
import Cards from '../components/cards';
import actions from '../redux/actions/products';

function Catalogue (props){

    useEffect(() => {
        props.fetchProducts()
    }, [])

    return (
        <div>
            {props.info?.map((zone) => {
                return (
                    <div>
                        <h1 style={{textAlign: 'center'}}>{zone?.category_name}</h1>
                        <Cards info={zone?.Products}/>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    info: state.ProductsReducer.info,
    loading: state.ProductsReducer.loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(actions.fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)

