import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ContactUsMessage } from '../config/config';

function ContactUs  () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [open, setOpen] = useState(false)

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await ContactUsMessage(formData).then(response => {
      if(response?.status === 200){
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setOpen(true)
      }
    })
  };
  return (
    <div  style={{textAlign: 'center'}}>
      <Typography sx={{fontSize: '4rem'}}>Contact Us</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
        sx={{width: '800px'}}
          // fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
        sx={{width: '800px'}}
          // fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          // fullWidth
          sx={{width: '800px'}}
          label="Phone"
          name="phone"
          type="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          // fullWidth
          sx={{width: '800px'}}
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" onClick={(e) => handleSubmit(e)} variant="contained" sx={{backgroundColor: 'black'}} >
          Submit
        </Button>
      </Grid>
    </Grid>
    {open &&
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Your Message Has Been Sent Successfully!!!
      </Typography>
    </Box>
  </Modal>
    }
  </div>
  )
}

export default ContactUs