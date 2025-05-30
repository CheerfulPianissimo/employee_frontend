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
    if (icon) return <img className="button-icon-img" src={icon} onClick={onClick}/>;
  };
  return (
    <>
      <span className={"button-span ".concat(icon?"button-span-icon":"")}>
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
