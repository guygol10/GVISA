import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
    return (
        <>
         <HeroSection  {...homeObjOne}/>   
         <HeroSection  {...homeObjTwo}/>   
         <HeroSection  {...homeObjThree}/>   
         <Pricing />
         <HeroSection  {...homeObjFour}/>   
        </>
    )
}

export default Home
