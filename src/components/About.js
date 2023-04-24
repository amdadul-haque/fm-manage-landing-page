import React from 'react'
import { headingStyle, textStyle } from './Hero'

const About = () => {
  const detailsData = [
    { sl: '1', title: 'Track company-wide progress', details: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.' },
    { sl: '2', title: 'Advanced built-in reports', details: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.' },
    { sl: '3', title: 'Everything you need in one place', details: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.' }
  ]

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center'>
        <div className='h-full'>
          <h1 className={`${headingStyle} text-center md:text-left w-[80%] m-auto md:m-0 mb-[20px]`}>What's different about Manage?</h1>
          <p className={`text-center md:text-left w-[90%] m-auto md:m-0 md:w-[50%]  ${textStyle}`}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>
        <div className='grid grid-cols-1 h-full'>
          {
            detailsData.map((item, index) => {
              return (
                <AboutDetails sl={item.sl} title={item.title} details={item.details} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default About

const AboutDetails = ({ sl, title, details }) => {

  const slStyle = 'text-[20px] bg-brightRed rounded-full text-veryLightGray md:leading-[45px] py-1 px-[25px] md:px-[40px] hover:bg-offtRed';
  const titleStyle = ' py-1 text-darkBlue font-[700] text-[18px] md:text-[30px] md:leading-[45px]';
  return (
    <>
      <div className='flex flex-col md:flex-row md:gap-x-[30px]'>
        <div className='flex md:block gap-1 bg-red-100 md:bg-transparent rounded-s-full rounded-e-md'>
          <h1 className={slStyle}>{sl}</h1>
          <h1 className={`md:hidden ${titleStyle}`}>{title}</h1>
        </div>
        <div className='flex flex-col flex-1'>
          <h1 className={`hidden md:block ${titleStyle}`}>{title}</h1>
          <p className={`${textStyle}`}>{details}</p>
        </div>
      </div >
    </>
  )
}