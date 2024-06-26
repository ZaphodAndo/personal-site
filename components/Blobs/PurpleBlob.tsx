import { motion } from "framer-motion";

function PurpleBlob({ className }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="302"
      height="273"
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
      <motion.path
        fill="#9B51E0"
        fillRule="evenodd"
        d="M156.581 2.303c26.42-3.209 55.293-5.145 77.392 8.865 22.38 14.188 28.177 41.407 38.767 64.774 11.826 26.093 37.758 52.885 26.483 79.193-11.362 26.509-54.899 21.647-77.762 40.452-26.835 22.071-29.773 71.154-64.88 76.87-33.852 5.511-56.895-32.265-83.52-52.711-24.833-19.07-55.529-33.996-66.366-62.394-10.98-28.772-8.676-63.2 8.55-89.113 15.967-24.017 50.24-27.306 77.202-39.884 21.386-9.977 40.464-23.178 64.134-26.052z"
        clipRule="evenodd"
      ></motion.path>
    </motion.svg>
  );
}

export default PurpleBlob;
