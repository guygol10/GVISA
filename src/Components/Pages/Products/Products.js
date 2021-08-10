import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { productsObjOne } from './Data'

const Products = () => {
    return (
        <>
         <Pricing />
         <HeroSection  {...productsObjOne}/>   
        </>
    )
}

export default Products
