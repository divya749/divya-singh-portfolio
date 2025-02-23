// Alternative Logo component with SVG
const Logo = () => {
    return (
      <div className="w-24 h-24 md:w-32 md:h-32 bg-stone-800 rounded-lg p-4">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#FAF9F6"
            strokeWidth="2"
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FAF9F6"
            fontSize="40"
            fontWeight="300"
            fontFamily="system-ui"
          >
            DS
          </text>
        </svg>
      </div>
    );
  };
  
  export default Logo;