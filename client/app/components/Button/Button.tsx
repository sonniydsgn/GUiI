import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  children: string;
  className: string;
  isSmall?: boolean;
  variant: "light" | "gray" | "dark";
}

const Button = ({ children, className, isSmall, variant }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "button",
        className,
        { "button--small": isSmall },
        `button__${variant}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
