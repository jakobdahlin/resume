import React, { useEffect, useRef } from "react";

const Logotypes: React.FC = () => {
  const items = [
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302076/Nexel_oojnd2.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1746545034/VRG2c_yfxfrd.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302071/Flareon_jjzfo7.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302073/JAKOBD_W_mlibeo.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1746545286/SWEETZ_favicon_cj4wa1.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302070/Codera_x62wps.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302079/Pixl_obeirb.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739302079/Orion_nhytlx.png",
    "https://res.cloudinary.com/dj10sb6gx/image/upload/v1749601407/ORBIT_fgmrtx.jpg",
  ];

  const scrollingItems = [...items, ...items];
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.5;

  const customHeights: { [key: string]: string } = {
    Pixl: "60px",
    Orion: "65px",
  };

  useEffect(() => {
    const container = containerRef.current;
    let position = 0;
    let animationFrameId: number;

    const scroll = () => {
      if (container) {
        position -= scrollSpeed;
        container.style.transform = `translateX(${position}px)`;

        const itemWidth = container.scrollWidth / 2;
        if (Math.abs(position) >= itemWidth) {
          position = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative mx-auto overflow-hidden transform translate-z-0">
          <div
        ref={containerRef}
        className="flex items-center h-[50px] w-full"
        style={{ width: "max-content" }}
      >
        {scrollingItems.map((url, index) => {
          const imageName = url.split("/").pop()?.split(".")[0] || "";
          const imageHeight = customHeights[imageName] || "50px";

          return (
            
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center px-[30px]"
              style={{ minWidth: "150px" }}
            >
              <img
                src={url}
                alt={`Logo ${index + 1}`}
                style={{
                  height: imageHeight,
                  width: "auto",
                }}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logotypes;
