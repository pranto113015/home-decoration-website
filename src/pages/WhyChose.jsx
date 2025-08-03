import React from "react";
import Button from "../components/Button";

const WhyChose = () => {
  return (
    <section className="section-container">
      <div className="my-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:grid-12 text-left">
          <div className="mb-12">
            <h2 className="text-4xl font-bold">
              Why
              <br />
              Choosing Us
            </h2>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
            <p className="text-base mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              fuga?
            </p>
            <Button text="Learn More" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Affordable Price</h3>
            <p className="text-base mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              fuga?
            </p>
            <Button text="Learn More" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Many Choices</h3>
            <p className="text-base mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              fuga?
            </p>
            <Button text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChose;
