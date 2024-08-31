import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from  "../../assets/women/women5.jpg";
import Img6 from  "../../assets/women/women6.jpg";
import Img7 from  "../../assets/women/women7.jpg";
import Img8 from  "../../assets/women/women8.jpg";
import Img9 from  "../../assets/women/women9.jpg";
import Img10 from  "../../assets/women/women10.jpg";


import { FaStar } from "react-icons/fa6";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Brand New",
    rating: 5.0,
    color: "Different models & colors",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Open Box",
    rating: 4.5,
    color: "Different Models & colors",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "StarLink",
    rating: 4.7,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: " Apple Virtual Reality",
    rating: 4.4,
    color: "Different models & Colors",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Play Station",
    rating: 4.4,
    color: "Different Models",
    aosDelay: "600",
  },
  {
    id: 6,
    img: Img6,
    title: "Apple watch series",
    rating: 4.4,
    color: " Different Models & colors",
    aosDelay: "600",
  },
  {
    id: 7,
    img: Img7,
    title: "JBL Speakers",
    rating: 4.4,
    color: "Different Models & Colors",
    aosDelay: "600",
  },
  {
    id: 8,
      img: Img8,
      title: "Laptops",
      rating: 4.4,
      color: "Different models",
      aosDelay: "600",
    },
    {
      id: 9,
        img: Img9,
        title: "Apple Headset",
        rating: 4.4,
        color: "Different series",
        aosDelay: "600",
      },
      {
        id: 10,
          img: Img10,
          title: "Apple Phone Cases",
          rating: 4.4,
          color: "Different Types",
          aosDelay: "600",
        },
        
       
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore the new world with the stunning display technology of our Products
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <a href="https//wa.ma/+2348064964670">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Order Now
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;