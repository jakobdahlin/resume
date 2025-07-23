const SVGFilters = () => (
  <svg className="hidden">
    <filter id="glass-distortion" x="-50%" y="-50%" width="200%" height="200%">
      {/* Generate turbulence */}
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="2"
        seed="5"
        result="turbulence"
      />
      {/* Distort the source graphic */}
      <feDisplacementMap
        in="SourceGraphic"
        in2="turbulence"
        scale="80"
        xChannelSelector="R"
        yChannelSelector="G"
        result="distorted"
      />
      {/* Blend distorted and original together */}
      <feBlend
        in="SourceGraphic"      // original background
        in2="distorted"         // distorted version
        mode="normal"
        result="blended"
        opacity="0.4"           // <- reduce distortion intensity here
      />
    </filter>
  </svg>
);


export default SVGFilters;
