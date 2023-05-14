import React from 'react'
import { Navbar } from "../../Components/Navbar"
import { Cards } from './Components/Cards'
import Hero from './Components/Hero'
import Footer from '../../Components/Footer'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Home Page</title>
    </Helmet>
    <Navbar/>
    <Hero/>
    <Cards/>
    <Footer/>
    
    </>
  )
}

export default Home