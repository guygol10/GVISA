import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { signUpObjOne } from './Data'

const SignUp = () => {
    return (
        <>
         <Pricing />
         <HeroSection  {...signUpObjOne}/>   
        </>
    )
}

export default SignUp
