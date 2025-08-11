import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { reviews } from "../utils/reviewa";
import Rating from './../components/Rating';

const Testimonials = () => {
  return (
    <div>
      <section className="section-container px-8">
        <div className="text-center mb-12">
          <h3 className="uppercase text-lg font-semibold text-primary mb-4">
            testimonials
          </h3>
          <h2 className="capitalize text-4xl font-bold mb-4">
            Ours client reviews
          </h2>
        </div>

        {/* review cards */}
        <Swiper
 
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true} 
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundImage: `url(${review.coverImg})` }}
            >
              <div className="md:h-[547px] flex justify-center items-center mb-10">
                <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative">
                 
                 <img src={review.image} alt="reviewimage" className="size-20 absolute -top-10 left-1/2 -translate-x-1/2 ring-2 ring-primary object-cover rounded-full" />

                  <div className="mt-16 text-center ">
                    <h3 className="text-lg font-semibold dark:text-black">{review.name}</h3>
                    <p className="mb-3 dark:text-black">Verified Customer</p>
                    <p className=" text-gray-500 mb-4 dark:text-black">{review.review}</p>

                    <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                        <Rating rating={review.rating} />
                    </div>

                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
