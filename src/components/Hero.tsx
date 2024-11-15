import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-screen w-full bg-[#043873] bg-[url(/Lines.png)] bg-cover bg-center '>
        <div className='flex w-[95%] md:w-[90%] justify-center md:justify-center'>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-6'>
              <div className='flex md:flex-none flex-col justify-center items-center md:items-start text-center md:text-left'>
                <h1 className='font-bold md:text-[60px] text-[36px]'>Get More Done <br /> with whitepace</h1>
                <p className='my-8 text-[18px] font-normal'>Project management software that enables your teams to <br /> collaborate, plan, analyze and manage everyday tasks</p>
                <button className='flex gap-2 items-center font-medium p-[20px] rounded-lg md:mt-0 mt-10 bg-[#4F9CF9]'>Try Whitepace free <img src="/VectorR.svg " alt="right" /></button>
              </div>
              <div className='md:w-[550px] md:h-[350px] w-[350px] h-[200px] md:ml-2 mt-20 md:mt-0 bg-[#C4DEFD]'></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero