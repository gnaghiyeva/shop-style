import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postProduct } from '../../../api/httpsrequests';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Add = () => {
    const [newProd, setNewProd] = useState({});
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        newProd.id=uuidv4();
        postProduct(newProd)
        console.log(newProd)
        navigate('/')
    }

    function handleChange(e){
        setNewProd({...newProd,[e.target.name]:e.target.value})
    }
  return (
    <>
    <Helmet>
    <title>Add Product Page</title>
    </Helmet>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <TextField name='name' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='name' type='text' />
        <TextField name='price' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='price' type='number'/>
        <TextField name='image' onChange={(e)=>handleChange(e)} id="standard-basic"  variant="standard" placeholder='image' type='text'/>
        
        <Button type='submit' variant='contained' color='success'>Add</Button>
    </form>
    </>
  )
}

export default Add