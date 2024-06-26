import { motion } from "framer-motion";

function GreenBlob({ className }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="227"
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
        fill="#27AE60"
        fillRule="evenodd"
        d="M113.437.416c23.845-2.383 50.481 5.524 65.78 22.41 14.556 16.068 1.381 40.89 9.295 60.457 8.502 21.021 44.113 34.157 37.726 55.795-6.282 21.28-41.828 18.542-62.855 29.334-17.553 9.009-29.829 27.849-49.946 28.561-20.302.719-37.219-13.047-52.838-24.922-14.678-11.16-24.487-25.47-33.605-40.801-11.34-19.066-32.32-38.137-25.745-58.99 6.56-20.807 36.688-24.827 56.092-37.252C76.278 22.88 90.45 2.713 113.437.416z"
        clipRule="evenodd"
      ></path>
    </motion.svg>
  );
}

export default GreenBlob;
