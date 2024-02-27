import { useState } from "react";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function MainHero() {
  return (
    <div className='min-h-screen bg-newHero bg-no-repeat bg-cover bg-left md:bg-top'>
      <Navigation />

      <main className='container'>
        <h1 className='mt-32 md:mt-48 font-bubble text-4xl lg:text-7xl w-[15ch] leading-relaxed'>
          <span className='border-2 border-black rounded-full p-3 inline-block'>
            Your Style
          </span>
          Your Story
          <span className='bg-orange-500 text-white font-semibold px-2 mx-3 rounded-3xl '>
            &rarr;
          </span>
          Wear it Proudly
        </h1>
        <div className='flex mt-12'>
          <div className='w-8 h-8 rounded-full bg-green-400'></div>
          <div className='w-8 h-8 rounded-full bg-orange-400 -ml-2'></div>
          <div className='w-8 h-8 rounded-full bg-purple-400 -ml-2'></div>
        </div>
        <p className='md:text-2xl mt-4 w-[35ch] lg:w-auto'>
          Fashion is a form of self-expression and autonomy
        </p>
        <div className='mt-6 flex gap-3'>
          <button className='text-white font-semibold bg-orange-400 px-4 py-2 text-xl'>
            Shop now
          </button>
          <button className='border-2 border-black px-3 py-1 text-xl font-black'>
            Learn more
          </button>
        </div>
      </main>
    </div>
  );
}

export default MainHero;
