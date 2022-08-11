import React from "react";
import "./button.css";

type  Props = {
  variant: "primary"| "secondary"| "dangerous"| "success"
  children: React.ReactNode;
};

const Button: React.FC<Props> = (props: Props) => {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
