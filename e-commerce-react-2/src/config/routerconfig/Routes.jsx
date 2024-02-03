import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Contact from '../../screens/contact/Contact'
import Product from '../../screens/product/Product'
import Singleproduct from '../../screens/singleproduct/Singleproduct'
import Navbar from '../../components/Navbar/Navbar'

const Routers = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
<Route path='home' element={<Home />} />
<Route path='about' element={<About />} />
<Route path='contact' element={<Contact />} />
<Route path='/' element={<Product />} />
<Route path='singleproduct/:id' element={<Singleproduct />} />

    </Routes>

    </BrowserRouter>
  )
}

export default Routers