export default function Logo({ className }) {
  return (
    <svg
      width="92"
      height="115"
      viewBox="0 0 92 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : null}
    >
      <g clipPath="url(#clip0_474_78)">
        <path d="M54.16 32.68H37.84V49.02H54.16V32.68Z" fill="white" />
        <path
          d="M54.16 114.38V98.04H75.68V16.34H54.16V0H92V114.38H54.16Z"
          fill="white"
        />
        <path
          d="M0 114.38V0H37.84V16.34H16.32V98.04H37.84V114.38H0Z"
          fill="white"
        />
        <path d="M54.16 65.36H37.84V81.7H54.16V65.36Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_474_78">
          <rect width="92" height="114.38" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
