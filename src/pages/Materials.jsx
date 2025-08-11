import React from 'react'
import Button from "../components/Button";
import materialImg1 from "../assets/material1.png"
import materialImg2 from "../assets/material2.png"
import materialImg3 from "../assets/material3.png"

const Materials = () => {
  return (
    <div>
       <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20">
     
      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-primary mb-4">
          materials
        </h3>
        <h2 className="capitalize text-2xl font-bold">
          Very Serious Materials For Making Furniture
        </h2>
        <p className="text-secondary dark:text-white mb-5 lg:2/3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet dicta ratione autem ipsa nostrum deleniti sint blanditiis explicabo aliquam!</p>

        <Button text="Learn Info" />
      </div>


     <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
       <div>
          <img src={materialImg1} alt="material-image-1" />
          <img src={materialImg2} alt="material-image-2" />

       </div>
          
       <div className='md:col-span-2 col-span-1'>
           <img src={materialImg3} alt="material-image-3" className='md:h-[541px]
           '/>
       </div>
      </div>


    </section>
    </div>
  )
}

export default Materials
