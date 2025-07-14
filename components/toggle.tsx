import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);

  const handleToggle1 = () => {
    setIsOn1(!isOn1);
  };

  const handleToggle2 = () => {
    setIsOn2(!isOn2);
  };

  const handleToggle3 = () => {
    setIsOn3(!isOn3);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      setIsOn1((prev) => !prev);
    }, 3500); // ⬅️ Made this slightly longer to fit animations

    const interval2 = setInterval(() => {
      setIsOn2((prev) => !prev);
    }, 4000);

    const interval3 = setInterval(() => {
      setIsOn3((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="h-full w-24 flex flex-col justify-center">
      {/* Toggle 1 - with overlay text */}
      <div
  onClick={handleToggle1}
  className={`max-w-40 h-12 relative flex items-center rounded-full p-1 my-2 cursor-pointer transition-colors duration-500 ${
    isOn1
      ? "bg-gradient-to-b from-neutral-100 to-neutral-400 border border-black"
      : "bg-gradient-to-br from-green-400 to-green-600/50 border border-black"
  }`}
>
  {/* Active sliding circle */}
  <div
    className={`h-9 w-9 flex items-center rounded-full shadow-md bg-gradient-to-b from-white to-neutral-300 shadow-black/40
      transform transition-transform duration-300 ${
        isOn1 ? "translate-x-0" : "translate-x-12"
      }`}
  ></div>

  {/* Text labels */}
  <div className="absolute w-full flex justify-between text-md pr-2 pl-4 right-1 mx-auto z-10">
    <span
      className={`transition-colors duration-400 ${
        !isOn1 ? "text-black/20 font-bold text-md" : "text-neutral-400/0 font-bold text-md"
      }`}
    >
      ON
    </span>
    <span
      className={`transition-colors duration-400 ${
        isOn1 ? "text-black/20 font-bold text-md" : "text-neutral-400/0 font-bold text-md"
      }`}
    >
      OFF
    </span>
  </div>
</div>



      {/* Toggle 2 */}
      <div
        onClick={handleToggle2}
        className={`w-16 h-8 flex items-center rounded-full p-1 my-2 cursor-pointer transition-colors duration-300 ${
          isOn2
            ? "bg-green-500/50 border border-teal-400/80 shadow-md shadow-green-400/50"
            : "bg-red-500/20 border border-red-500/50"
        }`}
      >
        <div
          className={`w-8 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn2 ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>

      {/* Toggle 3 */}
      <div
        onClick={handleToggle3}
        className={`w-12 h-6 flex items-center rounded-full p-1 my-2 cursor-pointer transition-colors duration-300 ${
          isOn3
            ? "bg-gradient-to-r from-red-800/50 to-orange-300/50 border border-red-400/80"
            : "bg-gradient-to-r from-sky-400/50 to-blue-800/50 border border-blue-400/80"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn3 ? "translate-x-6 bg-orange-300/50 border shadow-xl shadow-white/50" : "translate-x-0 bg-sky-400/50 border shadow-lg shadow-white/50"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
