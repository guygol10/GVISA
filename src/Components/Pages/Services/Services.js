import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { servicesObjOne } from './Data'

const Services = () => {
    return (
        <>
         <Pricing />
         <HeroSection  {...servicesObjOne}/>   
        </>
    )
}

export default Services
