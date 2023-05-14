import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { FormValidation } from '../validation';
import "./form.css"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const SignIn = () => {
    const handleSubmit=(values,actions)=>{
        console.log('values',values)
        console.log('actions', actions)
    }
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit: handleSubmit,
        validationSchema: FormValidation
    })
  return (
    <>
    <Helmet>
    <title>Sign In Page</title>
    </Helmet>
    <form onSubmit={formik.handleSubmit}>
       <TextField className={(formik.errors.username && formik.touched.username) ? "input-error":""} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name='username' type='text' id="outlined-basic"  variant="outlined" placeholder='username' />
       {(formik.errors.username && formik.touched.username) && <p style={{ color: 'red' }}>{formik.errors.username}</p>}
       <TextField className={(formik.errors.password && formik.touched.password)?"input-error":""} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password' id="outlined-basic"  variant="outlined" placeholder='password' />
       {(formik.errors.password && formik.touched.password) && <p style={{ color: 'red' }}>{formik.errors.password}</p>}
       <br/>
       <Button type='submit' variant='contained' disabled={formik.isSubmitting || Object.keys(formik.errors).length>0}><Link style={{textDecoration:'none', color:'white'}} to='/welcome'>SIGN IN</Link></Button>
    </form>
    </>
  )
}

export default SignIn