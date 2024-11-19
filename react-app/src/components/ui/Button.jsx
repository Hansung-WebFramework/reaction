import React from "react";

export function Button({ children, size, variant, ...props }) {
  const baseClass = "p-2 rounded transition";
  const sizeClass = size === "sm" ? "text-sm px-3" : "text-base px-4";
  const variantClass = variant === "secondary" ? "bg-gray-300 hover:bg-gray-400" : "bg-blue-500 text-white";

  return (
    <button className={`${baseClass} ${sizeClass} ${variantClass}`} {...props}>
      {children}
    </button>
  );
}
