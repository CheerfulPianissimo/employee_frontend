import "./Button.css";

export const Button = ({
  text,
  onClick,
  type="submit",
  variant = "primary",
  disabled=false
}: {
  text: string;
  onClick?: () => void;
  type?:any;
  variant?: string;
  disabled?:boolean
}) => {
  return (
    <button disabled={disabled} type={type} className={`button button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};
