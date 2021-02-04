import React from "react";
import { motion } from "framer-motion";

type BlueBlobProps = {
  className?: string;
};

function BlueBlob({ className }: BlueBlobProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="252"
      height="259"
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
        fill="#2563EB"
        fillRule="evenodd"
        d="M120.498.864c31.681-4.44 64.151 8.808 88.727 26.695 23.588 17.168 39.61 42.294 42.571 68.866 2.667 23.931-21.57 42.714-27.519 66.196-7.013 27.68 12.947 62.405-10.145 82.469-22.696 19.72-62.537 14.735-93.634 7.704-26.791-6.057-43.476-26.999-63.795-43.299-17.473-14.017-37.131-26.057-46.373-45.075-9.817-20.202-13.923-42.921-6.584-63.899 7.421-21.212 28.46-35.154 46.68-50.707C72.337 31.11 90.14 5.118 120.499.864z"
        clipRule="evenodd"
      ></path>
    </motion.svg>
  );
}

export default BlueBlob;
