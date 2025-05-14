
import React from "react";

export const CakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
      <path d="M4 21h16"></path>
      <path d="M7.5 11v-1a7.5 7.5 0 0 1 2.5-5.6"></path>
      <path d="M9 9h6"></path>
      <path d="M16.5 11v-1a7.5 7.5 0 0 0-2.5-5.6"></path>
      <path d="M12 4c0-1.1.9-2 2-2H8a4 4 0 0 0-4 4v3"></path>
      <path d="M18 12v9"></path>
      <path d="M12 12v9"></path>
      <path d="M6 12v9"></path>
    </svg>
  );
};
