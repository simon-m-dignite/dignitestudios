import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "../../context/GlobalContext";
import TestimonialCard from "./TestimonialCard";
import { reviews } from "../../constants/reviews";

const Testimonials = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className={`w-full  py-5 ${styles.paddingHorizontal}`}>
      <div className={``}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          Testimonials
        </p>

        <h1
          className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-6xl`}
        >
          our clients
        </h1>
      </div>
      <div
        className="w-full h-[2px] my-4 rounded-full "
        style={{
          background: `${palette?.light_contrast_background}`,
        }}
      />
      <div
        className={`w-full slide-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 lg:pt-6 gap-10`}
      >
        {reviews.map((review, index) => {
          return <TestimonialCard review={review} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
