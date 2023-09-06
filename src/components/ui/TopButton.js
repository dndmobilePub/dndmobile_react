import { useState, useEffect } from "react";

export const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const showButtonClick = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", showButtonClick);
    return () => {
      window.removeEventListener("scroll", showButtonClick);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={() => scrollToTop()}
          id="topBtn"
          className="btn-top"
          style={{ display: showButton ? "block" : "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g filter="url(#filter0_b_1275_33233)">
              <path
                d="M13.4961 33.002H22.4961C29.9961 33.002 32.9961 30.002 32.9961 22.502V13.502C32.9961 6.00195 29.9961 3.00195 22.4961 3.00195H13.4961C5.99609 3.00195 2.99609 6.00195 2.99609 13.502V22.502C2.99609 30.002 5.99609 33.002 13.4961 33.002Z"
                fill="black"
              />
              <path
                d="M12.6992 20.1882L17.9942 14.9082L23.2892 20.1882"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_1275_33233"
                x="-7.00391"
                y="-6.99805"
                width="50"
                height="50"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1275_33233"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1275_33233"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      )}
    </>
  );
};
