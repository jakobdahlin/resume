"use client";

import React, { ReactNode } from 'react';

interface CardProps {
    className?: string;
    children?: ReactNode;
  }

  const ButtonDesign: React.FC<CardProps> = ({ className, children }) => {
    return (

<div className="flex justify-center">
    <div className="flex flex-wrap justify-center p-4 relative z-10">

      {/* ------------------------------------------------------------------------ Button 1 */}   
      <button className="relative cursor-pointer px-10 mb-6 mx-6 font-bold 
      py-3 bg-neutral-800 hover:text-neutral-300 active:text-white
      overflow-hidden group transition-transform 
      duration-100 transform hover:scale-95 
      shadow-[0px_10px_15px_rgba(0,0,0,0.3)]
      hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)]
      active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]">

        <div
          style={{
            background: `
              border-box linear-gradient(145deg,
                rgba(100, 100, 100, 1), 
                rgba(50, 50, 50, 1),
                rgba(38, 38, 38, 1),
                rgba(38, 38, 38, 1)
              )
            `,
          }}
          className="
          absolute inset-0  transition-all duration-100
          bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] 
          group-hover:bg-[linear-gradient(145deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]
          "
        />

        <div className="absolute inset-[1px] bg-neutral-800  pointer-events-none 
            transition-shadow duration-100 z-10
      " />

        <span className="relative z-10">Button</span>
      </button>


{/* ------------------------------------------------------------------------ Button 2 */}   
      <button className="relative cursor-pointer rounded-xl px-10 mb-6 mx-6 font-bold 
      py-3 bg-neutral-800 hover:text-neutral-300 active:text-white
      overflow-hidden group transition-transform 
      duration-100 transform hover:scale-95 
      shadow-[0px_10px_15px_rgba(0,0,0,0.3)]
      hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)]
      active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]">

        <div
          style={{
            background: `
              border-box linear-gradient(145deg,
                rgba(100, 100, 100, 1), 
                rgba(50, 50, 50, 1),
                rgba(38, 38, 38, 1),
                rgba(38, 38, 38, 1)
              )
            `,
          }}
          className="
          absolute inset-0 rounded-xl transition-all duration-100
          bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] 
          group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]
          "
        />
        <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none 
            transition-shadow duration-100 z-10
      " />
        <span className="relative z-10">Button</span>
      </button>

{/* ------------------------------------------------------------------------ Button 3 */}              
<button className="relative cursor-pointer rounded-full px-10 mb-6 mx-6 font-bold 
      py-3 bg-neutral-800 hover:text-neutral-300 active:text-white
      overflow-hidden group transition-transform 
      duration-100 transform hover:scale-95 
      shadow-[0px_10px_15px_rgba(0,0,0,0.3)]
      hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)]
      active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]">

        <div
          style={{
            background: `
              border-box linear-gradient(145deg,
                rgba(100, 100, 100, 1), 
                rgba(50, 50, 50, 1),
                rgba(38, 38, 38, 1),
                rgba(38, 38, 38, 1)
              )
            `,
          }}
          className="
          absolute inset-0 rounded-full transition-all duration-100
          bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] 
          group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]
          "
        />
        <div className="absolute inset-[1px] bg-neutral-800 rounded-full pointer-events-none 
            transition-shadow duration-100 z-10
      " />
        <span className="relative z-10">Button</span>
      </button>

    </div>
</div>
)
}

export default ButtonDesign; 