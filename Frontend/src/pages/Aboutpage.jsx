// AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About The Nook Cafe</h1>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
          Welcome to The Nook Cafe, a cozy corner where flavors meet community. Here, we believe in serving great food with a warm smile, creating a space for you to unwind, connect, and savor the moment.
        </p>

        <div className="w-full h-[300px] max-w-4xl flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="The Nook Cafe interior"
            className="rounded-lg shadow-lg  mb-8 h-full"
          />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is simple: to bring people together over a cup of exceptional coffee and a menu crafted with passion. We believe that good food and good company make life richer.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you’re here to work, relax, or catch up with friends, The Nook Cafe is your place to feel at home. With locally sourced ingredients and a focus on sustainability, we’re dedicated to supporting our community and the environment.
          </p>
        </div>

        <div className="bg-[var(--primary-color)] text-white rounded-lg shadow-lg p-6 w-full max-w-4xl mt-10">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/20768096/pexels-photo-20768096/free-photo-of-espresso.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Quality Coffee"
                className="w-20 h-20 rounded-full mb-2"
              />
              <h4 className="font-bold">Exceptional Quality</h4>
              <p className="text-center text-sm mt-2">Our coffee beans are carefully selected to deliver the best flavor in every cup.</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/15965023/pexels-photo-15965023/free-photo-of-young-women-in-a-cafe-drinking-coffee-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Community Vibes"
                className="w-20 h-20 rounded-full mb-2"
              />
              <h4 className="font-bold">Community Vibes</h4>
              <p className="text-center text-sm mt-2">A welcoming space for you to connect, relax, or work.</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/9324359/pexels-photo-9324359.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sustainable Practices"
                className="w-20 h-20 rounded-full mb-2"
              />
              <h4 className="font-bold">Sustainable Practices</h4>
              <p className="text-center text-sm mt-2">We’re committed to eco-friendly practices and supporting local farmers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
