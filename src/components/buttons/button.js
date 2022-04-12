import React from "react";

const sizeClassnames = {
  big: "py-3 px-8 text-sm",
  small: "px-2 py-1 text-sm",
  tiny: "px-1 text-sm",
};

const colorClassnames = {
  primary:
    "text-button bg-primary-900 transition duration-200 ease-in-out hover:bg-dark disabled:text-accent-disabled disabled:bg-accent-hover",
  danger:
    "text-button bg-red transition duration-200 ease-in-out hover:bg-red disabled:text-accent-disabled disabled:bg-accent-hover",
  secondary:
    "text-button bg-secondary-900 hover:bg-secondary-900  disabled:text-primary-300",
  "secondary-800":
    "text-button bg-primary-800 hover:bg-primary-600 disabled:text-primary-300",
  "primary-300":
    "text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-300",
  transparent: "text-button bg-transparent",
  "accent-secondary":
    "text-button bg-secondary hover:bg-secondary-washed-out disabled:text-secondary-washed-out",
  dark: "text-button md:bg-dark bg-secondary-800 hover:bg-secondary-800",
};

function Button({
  children,
  size = "big",
  color = "primary",
  disabled,
  loading,
  icon,
  className = "",
  transition,
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`rounded-5 ${
        disabled || loading ? "opacity-40" : ""
      } shadow-xl flex outline-none w-full ${sizeClassnames[size]} ${
        transition ? `transition duration-200 ease-in-out` : ``
      } ${
        colorClassnames[color]
      } font-bold flex items-center justify-center ${className}`}
      data-testid="button"
      {...props}
    >
      <span className={`flex items-center`}>{children}</span>
    </button>
  );
}

export default Button;
