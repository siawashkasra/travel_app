import React from "react";
type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant?: "green" | "blue" | "gray";
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  title,
  icon,
  variant = "blue",
  fullWidth = false,
}) => {
  const baseClasses = `${
    fullWidth ? "flex" : "inline-flex"
  } items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    fullWidth ? "w-full justify-center" : ""
  }`;
  const variantClasses = {
    green: "text-white bg-green-600 hover:bg-green-700 focus:ring-green-500",
    blue: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    gray: "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500",
  };

  return (
    <button type={type} className={`${baseClasses} ${variantClasses[variant]}`}>
      {icon && <img src={icon} alt="" className="w-4 h-4 mr-2 inline-block" />}
      {title}
    </button>
  );
};

export default Button;
