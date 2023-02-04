import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DeleteItemInCart } from '../config/config'
import actions from '../redux/actions/products'

function AddToCart(props) {
    const navigate = useNavigate()
    useEffect(() => {
        props.GetAllCart()
    }, [])

    const handleDelete = async (e, id) => {
        e.preventDefault()
        await DeleteItemInCart(id).then((res) => {
            if (res.status === 200) {
                props.GetAllCart()
            }
        })
    }


    let priceo = 0;
    return (
        <Grid container>
            {props.loading ? <h4 style={{ textAlign: 'center' }}>Data is Loading ....</h4> : <>
                <Grid item xs={12}></Grid>
                {props.products.length > 0 ?
                    props.products?.map((zone) => {
                        priceo += zone?.product_price
                        return (
                            <>
                                <Grid item xs={12} md={4}></Grid>
                                <Grid item xs={12} md={4}>
                                    <Card sx={{ width: '100%', marginTop: '1%' }}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    {zone?.product_name}
                                                </Grid>
                                                <Grid item xs={12}><img width={100} src={zone?.product_image} /></Grid>
                                                <Grid item xs={12} md={2}>Size: {zone?.product_size}</Grid>
                                                <Grid item xs={12} md={4}>Color: {zone?.product_color}</Grid>
                                                <Grid item xs={12} md={3}>Price: ${zone?.product_price}</Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Button color='error' onClick={(e) => handleDelete(e, zone?.product_id)}>Delete</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4}></Grid>
                            </>
                        )
                    })
                    : 'No Data Available'}
                {props.products.length > 0 &&
                    <>
                        <Grid item xs={5}></Grid>
                        <Grid sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} item xs={2}>
                            <Typography sx={{ textAlign: 'center' }} variant='h6'>Total Price: ${priceo}</Typography>
                            <Button sx={{ textDecoration: 'none', border: '1px solid black', color: 'black', textAlign: 'center' }}>Proceed To Checkout</Button>
                        </Grid>
                        <Grid item xs={5}></Grid>
                    </>
                }
            </>}
        </Grid>
    )
}

const mapStateToProps = state => ({
    products: state.ProductsReducer.products,
    loading: state.ProductsReducer.loading
})

const mapDispatchToProps = (dispatch) => ({
    GetAllCart: () => dispatch(actions.GetAllCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
