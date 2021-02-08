type RightArrowIconProps = {
  className?: string;
};

function RightArrowIcon({ className }: RightArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14m-7-7l7 7-7 7"></path>
    </svg>
  );
}

export default RightArrowIcon;
