import { cn } from "@/lib/utils";
import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center space-x-2 min-h-[70vh]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("animate-spin")}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      <span>Loading ...</span>
    </div>
  );
}
