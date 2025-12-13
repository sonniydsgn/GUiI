import "./LinkWithArrow.scss";

import clsx from "clsx";

import ArrowRightIcon from "~/assets/icons/arrow-right.svg?react";

interface LinkWithArrowProps {
  href: string;
  children: string;
  className: string;
}

const LinkWithArrow = ({ href, children, className }: LinkWithArrowProps) => {
  return (
    <a href={href} className={clsx("link-with-arrow", className)} target="_blank">
      <span className="link-with-arrow__inner">
        {children}

        <ArrowRightIcon />
      </span>
    </a>
  );
};

export default LinkWithArrow;
