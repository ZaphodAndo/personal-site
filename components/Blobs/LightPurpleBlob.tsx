import { motion } from "framer-motion";

function LightPurpleBlob({ className }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="397"
      height="387"
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
        fill="#BB6BD9"
        fillRule="evenodd"
        d="M146.524 55.313c28.751-16.584 64.956-9.942 96.979-1.903 32.594 8.183 66.793 20.228 85.481 47.709 18.2 26.763 11.018 61.679 10.942 94.08-.073 31.055 5.974 64.205-11.375 90.318-17.424 26.226-49.746 37.184-79.867 47.019-29.051 9.486-59.91 16.919-88.963 8.106-28.622-8.683-47.163-33.373-66.988-55.414-21.219-23.59-53.606-45.116-51.945-76.813 1.662-31.737 41.543-46.156 59.769-72.548 18.037-26.115 18.323-64.607 45.967-80.554z"
        clipRule="evenodd"
      ></path>
    </motion.svg>
  );
}

export default LightPurpleBlob;
