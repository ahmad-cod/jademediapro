import React from 'react'

const ScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button
        onClick={scrollToTop}
        title="Back to Top"
        className="fixed duration-300 hover:[box-shadow:0_0_0_8px_#262626] hover:scale-110 
          text-[#f6f6f6] bottom-6 right-5 z-20 translate-y-[-50%] rounded-[50%] h-[80px] 
            max-[1024px]:h-[50px] aspect-square flex items-center justify-center bg-[#46BFB2]"
      >
        <svg
          className="max-[1024px]:scale-50"
          width="36"
          height="41"
          viewBox="0 0 36 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6084 37.6343V7.92039L31.5273 17.0186C32.5892 17.9052 34.1694 17.7599 35.0534 16.6981C35.94 15.6337 35.7947 14.056 34.7329 13.1695L19.7068 0.647791C19.5891 0.55012 19.4514 0.502539 19.3212 0.429915C19.216 0.369811 19.1258 0.297183 19.0106 0.252104C18.7226 0.13941 18.4196 0.071795 18.1141 0.071795C18.1116 0.071795 18.1066 0.0692887 18.1041 0.0692887C18.1016 0.0692887 18.0966 0.071795 18.0941 0.071795C17.7885 0.071795 17.4855 0.13941 17.1975 0.252104C17.0823 0.297183 16.9921 0.369811 16.887 0.429915C16.7567 0.502539 16.619 0.55012 16.5013 0.647791L1.47528 13.1695C0.881752 13.6678 0.573719 14.3791 0.573719 15.0953C0.573719 15.6613 0.764049 16.2298 1.15473 16.6981C2.03876 17.7599 3.61899 17.9052 4.68083 17.0186L15.5997 7.92039V37.6343C15.5997 39.0167 16.7217 40.1387 18.1041 40.1387C19.4865 40.1387 20.6084 39.0167 20.6084 37.6343Z"
            fill="#F6F6F6"
          />
        </svg>
      </button>
    )
}

export default ScrollButton