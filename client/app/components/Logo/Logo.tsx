import "./Logo.scss";

import clsx from "clsx";

import LogoImageSrc from "~/assets/img/logo.svg";

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <a href="/" className={clsx(className, "logo")}>
      <img
        src={LogoImageSrc}
        alt="Наш логотип"
        width={293}
        height={32}
        loading="lazy"
        className="logo__image"
      />
    </a>
  );
};

export default Logo;
