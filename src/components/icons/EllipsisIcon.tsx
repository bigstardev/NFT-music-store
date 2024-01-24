const EllipsisIcon = ({ bgColor }: { bgColor?: string }) => (
  <svg
    width="4"
    height="24"
    viewBox="0 0 4 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M2 20C2.55228 20 3 19.5523 3 19C3 18.4477 2.55228 18 2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20Z"
        stroke={bgColor || "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13C2.55228 13 3 12.5523 3 12C3 11.4477 2.55228 11 2 11C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13Z"
        stroke={bgColor || "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z"
        stroke={bgColor || "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default EllipsisIcon;
