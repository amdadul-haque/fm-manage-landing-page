import React from 'react'
import { buttonStyle, headingStyle } from './styleVariables'

import fb from '../assets/images/icon-facebook.svg';
import yt from '../assets/images/icon-youtube.svg';
import tw from '../assets/images/icon-twitter.svg';
import pt from '../assets/images/icon-pinterest.svg';
import ig from '../assets/images/icon-instagram.svg';
import logo from '../assets/images/logo.svg';



const Footer = () => {
  return (
    <>
      <div className="bg-brightRed py-[50px]">
        <div className={`max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-[50px]`}>
          <div className='w-[50%] md:w-[30%]'>
            <h1 className={`${headingStyle} leading-[40px] font-[700] text-white text-center md:text-left`}>Simply how your team works today.</h1>
          </div>
          <div>
            <button className={`${buttonStyle} font-[700] text-brightRed bg-veryLightGray hover:bg-offtRed`}>Get Started</button>
          </div>
        </div>
      </div>

      <footer className='bg-veryDarkBlue px-[10px] pt-[50px]'>
        <div className='sm:hidden'>
          <NewsLetter />
          <div className='pt-[30px] flex justify-around'>
            <HomeLinks />
            <CompanyLinks />
          </div>
          <SocialLinks />
          <Logo />
          <CopyRight />
        </div>
        <div className='hidden sm:block pt-[50px] pb-[80px]'>
          <div className='max-w-[1240px] mx-auto flex justify-between'>
            <div>
              <Logo />
              <SocialLinks />
            </div>
            <HomeLinks />
            <CompanyLinks />
            <div>
              <NewsLetter />
              <CopyRight />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

const NewsLetter = () => {
  return (
    <div className='flex justify-between px-[10px]'>
      <input type="text" className='w-full rounded-full px-5' placeholder='Updates in your inbox...' />
      <button className={`${buttonStyle} ml-4 font-[700] bg-brightRed text-veryLightGray hover:bg-offtRed`}>Go</button>
    </div>
  )
}

const HomeLinks = () => {
  return (
    <ul className='flex flex-col gap-3 text-veryLightGray'>
      <li><a href="">Home</a></li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Products</a></li>
      <li><a href="">About Us</a></li>
    </ul>
  )
}

const CompanyLinks = () => {
  return (
    <ul className='flex flex-col gap-3 text-veryLightGray'>
      <li><a href="">Careers</a></li>
      <li><a href="">Community</a></li>
      <li><a href="">Privacy Policy</a></li>
    </ul>
  )
}



const SocialLinks = () => {
  return (
    <div className='flex justify-between mx-auto py-[30px] w-[55%] md:w-full scale-150 md:scale-100'>
      <a href=""><img src={fb} alt="facebook" /></a>
      <a href=""><img src={yt} alt="youtube" /></a>
      <a href=""><img src={tw} alt="twitter" /></a>
      <a href=""><img src={pt} alt="pinterest" /></a>
      <a href=""><img src={ig} alt="instagram" /></a>
    </div>
  )
}

const Logo = () => {
  return (
    <div className='flex justify-center py-5'>
      <a href=""><img src={logo} alt="instagram" /></a>
    </div>
  )
}

const CopyRight = () => {
  return (
    <div className='py-5'>
      <p className='text-center text-gray-300'>© 2023 All rights reserved.</p>
    </div>
  )
}