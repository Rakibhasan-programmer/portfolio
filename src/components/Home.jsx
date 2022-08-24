import React from 'react'
import image from '../assets/heroImage.webp'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='pt-10 max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
            <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1500" className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-5 max-w-md'>
                    Hi there, I am Rakibul Hasan. A junior web developer and Programmer. I love to explore new things. I am willing to accept challenges to improve myself more and more. Currently I love to work on web applications using technologies like React, Tailwind css etc.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span> 
                    </Link>
                </div>
            </div>
            <div data-aos = "fade-left" data-aos-easing="ease-in-out" data-aos-duration="1500">
                <img src={image} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full'  />
            </div>
        </div>
    </div>
  )
}

export default Home