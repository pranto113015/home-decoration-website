import React from "react";
import experienceImage from "../assets/expricences.png";
import Button from "../components/Button";

const Experiences = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20">
      <div className="md:w-1/2 md:h-[541px]">
        <img
          src={experienceImage}
          alt="experience-image"
          className="h-full w-full"
        />
      </div>

      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-primary mb-4">
          experiences
        </h3>
        <h2 className="capitalize text-2xl font-bold">
          We provide you the best experiences
        </h2>
        <p className="text-secondary dark:text-white mb-5 lg:2/3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet dicta ratione autem ipsa nostrum deleniti sint blanditiis explicabo aliquam!</p>

        <Button text="Learn Info" />
      </div>
    </section>
  );
};

export default Experiences;
