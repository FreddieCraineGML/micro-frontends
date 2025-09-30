// remote - ./src/components/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary hover:cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
