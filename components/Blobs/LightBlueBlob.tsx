import React from "react";
import { motion } from "framer-motion";

function LightBlueBlob({ className }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="206"
      height="197"
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
        fill="#56CCF2"
        fillRule="evenodd"
        d="M100.883 1.847c17.3 3.462 27.351 19.857 42.948 27.897 19.605 10.105 49.856 5.67 59.652 24.987 9.568 18.868-10.79 39.137-16.906 59.308-6.367 20.999-3.644 45.701-19.622 61.166-16.874 16.332-42.23 22.181-66.072 21.775-23.574-.401-48.563-7.071-64.408-23.996-14.836-15.847-8.81-40.381-15.074-60.902C15.39 92.389-3.597 75.592.6 55.461 4.895 34.864 23.802 19.676 42.784 9.528 60.328.148 81.26-2.078 100.883 1.848z"
        clipRule="evenodd"
      ></path>
    </motion.svg>
  );
}

export default LightBlueBlob;
