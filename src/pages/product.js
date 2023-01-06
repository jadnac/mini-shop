import { Box, Button, CardMedia, Divider, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../redux/actions/products'
import Lightbox from 'react-image-lightbox'
import PropTypes from 'prop-types';
import "react-image-lightbox/style.css";


function TabPanel(props) {
    const { children, imageNum, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={imageNum !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {imageNum === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Product = (props) => {
    const params = useParams()
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState(props.info?.product_color ? props.info?.product_color[0] : 'black')
    const [size, setSize] = useState(props.info?.product_size ? props.info?.product_size[0] : 40)
    const [image, setImage] = useState(props.info?.product_images ? props.info?.product_images[0] : "Loading...")
    const [imageNum, setImageNum] = useState(0)


    useEffect(() => {
        props.fetchProductById(params?.pid)
    }, [])

    const handleColor = (event, newValue) => {
        setColor(newValue)
    }

    const handleSize = (event, newValue) => {
        setSize(newValue)
    }

    const handleImage = (event, newValue) => {
        setImageNum(newValue)
    }

    return (
        <>
            {props.info ?
                <Grid sx={{ justfiyContent: 'center', marginTop: 20 }} container>
                    <Grid item md={1}></Grid>
                    <Grid item xs={12} md={6} sx={{ marginRight: 3, justfiyContent: 'center' }}>
                        <Box
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
                        >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={imageNum}
                                onChange={handleImage}
                                aria-label="vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                {props.info?.product_images?.map((zone, i) => {
                                    return (
                                        <Tab label={
                                            <CardMedia
                                                onClickCapture={() => setImage(zone)}
                                                sx={{ width: '30%' }}
                                                alt="Click on An Image"
                                                component="img"
                                                image={zone}>
                                            </CardMedia>
                                        } {...a11yProps(i)} />
                                    )
                                })}
                            </Tabs>
                            <CardMedia
                                sx={{ width: '70%' }}
                                component="img"
                                onClick={() => setOpen(true)}
                                image={image}>
                            </CardMedia>
                            {open && (
                                <Lightbox
                                    mainSrc={image}
                                    onCloseRequest={() => setOpen(false)}
                                />

                            )}
                        </Box>
                    </Grid>
                    <Grid sx={{ overflowWrap: 'break-word' }} item xs={12} md={4}>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'sans-serif' }} variant='h4'>
                            {props.info?.product_description}
                        </Typography>
                        <Typography sx={{ marginTop: 5 }}>
                           Price: ${props.info?.product_prize}
                        </Typography>
                        <Typography sx={{ fontSize: 10 }}>
                            Tax included. Shipping calculated at checkout.
                        </Typography>
                        <Divider />
                        <Typography sx={{ marginTop: 2 }}>
                            COLOR
                        </Typography>
                        <Tabs sx={{ marginTop: 1 }} onChange={handleColor} value={color}>
                            {props.info?.product_color?.map(zone => {
                                return (
                                    <Tab label={zone} value={zone} key={zone} />
                                )
                            })}
                        </Tabs>
                        <Typography sx={{ marginTop: 2 }}>
                            Size
                        </Typography>
                        <Tabs onChange={handleSize} value={size}>
                            {props.info?.product_size?.map(zone => {
                                return (
                                    <Tab selected label={zone} value={zone} key={zone} />
                                )
                            })}
                        </Tabs>
                        <Button fullWidth variant='outlined' sx={{ height: 45, marginTop: 3, color: 'black', borderBlockColor: 'black', fontWeight: 'bold' }}>ADD TO CART</Button>
                        <Button fullWidth sx={{ marginTop: 3, height: 45, fontWeight: 'bold', backgroundColor: 'black' }} href={`/product/checkout/${params?.pid}`} variant="contained">Buy It Now</Button>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                : 'loading'}
        </>
    )
}

const mapStateToProps = (state) => ({
    info: state.ProductsReducer.product,
    loading: state.ProductsReducer.loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchProductById: (id) => dispatch(actions.fetchProductById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product)