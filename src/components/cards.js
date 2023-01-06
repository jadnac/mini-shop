import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cards(products) {
  return (
    <Box sx={{
      textDecoration: 'none',
      justifyContent: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 270,
        height: 300,
      }
    }}>
      {products?.info?.map((zone) => {
        return (
          <Card  raised component={Paper} sx={{ textAlign: 'center' }}>
            <Link to={`/product/${zone?._id}`} >
              <CardMedia
                component="img"
                alt={zone?.product_name}
                height="140"
                image={zone?.product_images[0]}
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {zone?.product_description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {zone?.product_prize}$
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center'}}>
              <Link style={{ textDecoration: 'none', color: 'black', border: '1px solid black', padding: 7, borderRadius: 5 }} to={`/product/${zone?._id}`} size="small">Learn More</Link>
            </CardActions>
          </Card>
        )
      })}
    </Box>
  )
}