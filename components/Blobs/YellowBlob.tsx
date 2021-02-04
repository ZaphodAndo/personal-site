import React from "react";
import { motion } from "framer-motion";

function YellowBlob({ className }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="375"
      height="299"
      fill="none"
      className={className}
      variants={{
        hidden: {
          scale: 0
        },
        shown: {
          scale: 1
        }
      }}
      initial="hidden"
      animate="shown"
      transition={{
        type: "spring",
        damping: 5,
        mass: 0.2,
        delay: 0
      }}
    >
      <path
        fill="#F2C94C"
        fillRule="evenodd"
        d="M197.894 3.872c38.21-8.355 80.787-3.323 113.583 16.4 33.487 20.14 60.939 53.56 63.418 90.051 2.342 34.468-35.222 58.339-51.21 89.65-13.232 25.914-8.453 61.303-34.203 77.626-25.698 16.29-60.434-.691-91.588 2.113-36.429 3.278-71.991 28.55-105.748 15.645-35.175-13.447-52.334-49.371-66.7-81.57C10.12 179.44-11.96 138.844 7.866 106.466c20.019-32.694 74.823-24.811 110.17-43.895 30.162-16.284 45.767-51.244 79.858-58.699z"
        clipRule="evenodd"
      ></path>
    </motion.svg>
  );
}

export default YellowBlob;
