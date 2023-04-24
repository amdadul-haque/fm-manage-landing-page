import React from 'react'
import illustrationIntro from '../assets/images/illustration-intro.svg'
import { buttonStyle, headingStyle, textStyle } from './styleVariables'

// const textStyle = 'text-darkGrayishBlue text-[17px] md:text-[18px]';
// const headingStyle = 'text-darkBlue font-[700] text-[30px] leading-[50px]'

const Hero = () => {
  return (
    <>
      <div className="min-h-screen hero grid md:grid-cols-2 justify-between items-center">
        <div className='w-full flex flex-col gap-[30px] order-2 md:order-1'>
          <h1 className={`md:w-[70%] w-full text-center md:text-left ${headingStyle}`}>Bring everyone together to build better products.</h1>
          <p className={`md:w-[50%] w-full text-center ${textStyle}`}>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <div className='w-full flex justify-center md:block'>
            {/* <button className='text-[18px] bg-brightRed rounded-full text-veryLightGray py-4 px-[40px] hover:bg-offtRed'>Get Started</button> */}
            <button className={`${buttonStyle} bg-brightRed text-veryLightGray hover:bg-offtRed`}>Get Started</button>
          </div>
        </div>
        <div className='w-full h-full flex justify-center items-center order-1 md:order-2'>
          <img src={illustrationIntro} alt="not found" />
        </div>
      </div>
    </>
  )
}

export default Hero

export { textStyle, headingStyle };