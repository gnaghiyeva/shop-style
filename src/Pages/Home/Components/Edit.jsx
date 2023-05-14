import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProduct, getProductById } from '../../../api/httpsrequests';
import { Helmet } from 'react-helmet';


const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [prod,setProd]=useState([])

    useEffect(()=>{
        getProductById(id)
        .then(res=>{
            console.log(res)
            setProd(res)
        })
    },[id])

    function handleSubmit(){
        editProduct(id,prod)
        navigate('/')
    }

    function handleChange(e){
        setProd({...prod,[e.target.name]:e.target.value})
    }
  return (
    <>
    <Helmet>
        <title>Edit Product Page</title>
    </Helmet>
    <h1>Edit product</h1>
   <form onSubmit={(e)=>handleSubmit(e)}>
    <TextField name='name' onChange={(e)=>handleChange(e)} value={prod.name ||''} id="standard-basic"  placeholder='name' variant="standard" type='text'/>
    <TextField name='price' onChange={(e)=>handleChange(e)} value={prod.price ||''} id="standard-basic"  placeholder='price' variant="standard" type='number' />
    <br/>
    <button variant="contained" color="success">EDIT</button>
   </form>
    </>
  )
}

export default Edit