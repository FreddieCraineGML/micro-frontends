// remote - ./src/components/Button.tsx
import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  options?: Array<"login" | "signup" | "forgotPassword">;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  options = ["login", "forgotPassword"],
}) => {
  return (
    <>
      {options.includes("login") && (
        <button
          onClick={onClick}
          className="px-4 py-2 btn btn-primary text-white rounded hover:cursor-pointer"
        >
          Log In
        </button>
      )}
      {options.includes("signup") && (
        <button
          onClick={onClick}
          className="px-4 py-2 btn btn-secondary text-white rounded hover:cursor-pointer"
        >
          Sign Up
        </button>
      )}
      {options.includes("forgotPassword") && (
        <button
          onClick={onClick}
          className="px-4 py-2 btn btn-secondary text-white rounded hover:cursor-pointer"
        >
          Forgot Password
        </button>
      )}
    </>
  );
};

export default Button;
