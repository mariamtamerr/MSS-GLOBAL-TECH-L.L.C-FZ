"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const Menu = () => {
  const [foodType, setFoodType] = useState("pizza");

  const handleFoodTypeChange = (type) => {
    setFoodType(type);
  };

  // -- pizza ----

  const pizzaImages = [
    "https://1000logos.net/wp-content/uploads/2016/10/Aqua-themed-apple-logo-500x313.png",
    "https://1000logos.net/wp-content/uploads/2017/06/Samsung-logo-500x281.jpg",
    "https://1000logos.net/wp-content/uploads/2018/10/Oppo-logo-500x240.png",
    "https://1000logos.net/wp-content/uploads/2023/07/Honor-Logo-500x281.png",
    "https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo-500x281.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqQPHifXxtVy0jKiuU3kF9vlvbPjdIAtZtw&s",
    "https://1000logos.net/wp-content/uploads/2017/04/Motorola-logo-500x412.jpg",
    "https://1000logos.net/wp-content/uploads/2022/11/OnePlus-Logo-500x281.png",
    "https://1000logos.net/wp-content/uploads/2021/04/PlayStation-logo-500x281.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Realme_logo.svg/2560px-Realme_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JBL-Logo.svg/2560px-JBL-Logo.svg.png",
    "https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-500x281.jpg",
    "https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo-500x313.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1-500x313.png"





  ];

  const pizzaTitles = [
    "Apple",
    "Samsung",
    "Oppo",
    "Honor",
    "Xiaomi",
    "Infinix",
    "Motorola",
    "OnePlus",
    "Sony - PlayStation",
    "Realme",
    "JBL",


  ];

  const pizzaPrices = ["AED 4,499.00", "AED 4,099.00", "AED 4,499.00", "AED 1,999.00","AED 2,599.00", "AED 2,120.00","AED 2,899.00","AED 64.00","AED 3,299.01"];

  // ----- end pizza -----


  return (
    <div className="mt-16">
      {/* <div className="title  text-center">
        <h3 className="text-[#d3ab4e] text-4xl  font-bold">Our Brands</h3>
        <p className="text-xl text-[#3b4f34] mt-5">Where Quality Matters</p>
      </div> */}

 

      <div className="parentSlider  ">
        {/* ----- piza ----- */}
        {foodType === "pizza" && (
          <div>
            {/* <h3 className="text-[#9b7b32] flex justify-center text-3xl text-center font-bold">
              Pizza
            </h3> */}
            <div className="childSlider grid grid-cols-3 p-10 mx-auto gap-10  sm:gap-5 md:gap-10 lg:max-w-5xl ">
              {pizzaImages.map((image, index) => (
                <div
                  key={index}
                  className="w-fit  bg-white  rounded-3xl mt-8 mx-auto"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    {/* <div className=" w-64 h-48 sm:h-72 rounded-xl"> */}
                    <div className=" max-w-32 rounded-xl">
                      <img
                        className="group-hover:scale-105   self-center items-center transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  {/* <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{pizzaTitles[index]}</h3>
                    <div>
                      
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- pasta ------ */}
        {foodType === "pasta" && (
          <div>
            <h3 className="text-[#9b7b32] text-3xl text-center font-bold">
              Pasta
            </h3>
            <div className="childSlider w-full whitespace-nowrap overflow-x-scroll scrollbar-hide scrollbar-smooth relative flex gap-5">
              {pastaImages.map((image, index) => (
                <div
                  key={index}
                  className="sm:w-[500px] w-[250px] bg-white pb-2 rounded-3xl mt-8"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="w-80 h-48 sm:h-72 rounded-xl relative overflow-hidden">
                      <img
                        className="group-hover:scale-105 h-full w-full transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{pastaTitles[index]}</h3>
                    <div>
                      <p className="mt-2 font-bold text-orange-800 bg-orange-100 px-4 py-2 w-fit rounded-xl text-xs">
                        {pastaPrices[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------ sandwiches */}

        {foodType === "sandwiches" && (
          <div>
            <h3 className="text-[#9b7b32] text-3xl text-center font-bold">
              Sandwiches
            </h3>
            <div className="childSlider w-full whitespace-nowrap overflow-x-scroll scrollbar-hide scrollbar-smooth relative flex gap-5">
              {sandwichImages.map((image, index) => (
                <div
                  key={index}
                  className="sm:w-[500px] w-[250px] bg-white pb-2 rounded-3xl mt-8"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="w-80 h-48 sm:h-72 rounded-xl relative overflow-hidden">
                      <img
                        className="group-hover:scale-105 h-full w-full transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{sandwichTitles[index]}</h3>
                    <div>
                      <p className="mt-2 font-bold text-orange-800 bg-orange-100 px-4 py-2 w-fit rounded-xl text-xs">
                        {sandwichPrices[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------- meals -------- */}

        {foodType === "meals" && (
          <div>
            <h3 className="text-[#9b7b32] text-3xl text-center font-bold">
              Meals
            </h3>
            <div className="childSlider w-full whitespace-nowrap overflow-x-scroll scrollbar-hide scrollbar-smooth relative flex gap-5">
              {mealImages.map((image, index) => (
                <div
                  key={index}
                  className="sm:w-[500px] w-[250px] bg-white pb-2 rounded-3xl mt-8"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="w-80 h-48 sm:h-72 rounded-xl relative overflow-hidden">
                      <img
                        className="group-hover:scale-105 h-full w-full transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{mealTitles[index]}</h3>
                    <div>
                      <p className="mt-2 font-bold text-orange-800 bg-orange-100 px-4 py-2 w-fit rounded-xl text-xs">
                        {mealPrices[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
