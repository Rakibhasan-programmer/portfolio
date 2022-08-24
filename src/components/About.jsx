import React from 'react'

const About = () => {
  return (
    <div  name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div data-aos="zoom-out-down" data-aos-easing="ease-in-out" data-aos-duration="1500" className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>My name is Rakibul Hasan. I am from Naogaon. Currently I am an undergraduate at Southeast University. I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role. Beside this I love problem solving. I participate in different problem solving contests.</p>
            <br />
            <p className="text-xl">
                Currently I am exploring the web with the help of technologies like JavaScript, React, Tailwind css, Next js. I want to explore more on this field as I am getting more interest day by day. I love to face Challenges.
            </p>
        </div>
    </div>
  )
}

export default About