import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  children: string;
  className: string;
  variant: "light" | "gray" | "dark" | "transparent";
  isSmall?: boolean;
  disableHoverEffect?: boolean;
	onClick?: () => void;
}

const Button = ({
  children,
  className,
  isSmall,
  variant,
  disableHoverEffect = false,
	onClick
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx("button", className, `button__${variant}`, {
        "button--small": isSmall,
        "button--disable-hover": disableHoverEffect,
      })}
			onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
