import type { ReactNode } from "react";
import "./Button.css";

export const Button = ({
  text,
  onClick,
  type = "submit",
  variant = "primary",
  disabled = false,
  icon,
}: {
  text: string;
  onClick?: () => void;
  type?: any;
  variant?: string;
  disabled?: boolean;
  icon?: string;
}) => {
  const Iconimg = () => {
    if (icon) return <img className="button-icon-img" src={icon} />;
  };
  return (
    <>
      <span className="button-span">
        <Iconimg />
        <button
          disabled={disabled}
          type={type}
          className={icon ? `button button--icon` : `button button--${variant}`}
          onClick={onClick}
        >
          {text}
        </button>
      </span>
    </>
  );
};
