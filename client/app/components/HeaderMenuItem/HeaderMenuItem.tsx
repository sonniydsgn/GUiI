import clsx from "clsx";

import type { HeaderMenuItemAPI } from "../Header/Header";

import ArrowRightIcon from "~/assets/icons/arrow-right.svg?react";

interface HeaderMenuItemProps {
  item: HeaderMenuItemAPI;
  activeId: number | null;
  onMouseEnter: (id: number) => void;
  onClick: (id: number | null) => void;
  href?: string;
}

const HeaderMenuItem = ({
  activeId,
  item,
  onMouseEnter,
	onClick,
  href,
}: HeaderMenuItemProps) => {
  if (href) {
    return (
      <a href={href} className="header__menu-link body-s-medium" onMouseEnter={() => onMouseEnter(null)}>
        {item.content}
      </a>
    );
  }

  return (
    <button
      className={clsx("header__menu-button body-s-medium", {
        "active": activeId === item.id,
      })}
      onMouseEnter={() => onMouseEnter(item.id)}
      onClick={() => onClick(item.id)}
    >
      {item.content}

      <ArrowRightIcon />
    </button>
  );
};

export default HeaderMenuItem;
