import { useState } from "react";

import type { LoaderData } from "../Header/Header";

import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import HeaderModal from "../HeaderModal/HeaderModal";


interface HeaderMenuProps {
  data: LoaderData;
}

const HeaderMenu = ({ data }: HeaderMenuProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const openModal = (id: number | null) => {
    setActiveId(id);
  };

  const closeModal = () => {
    setActiveId(null);
  };

  const toggleModal = (id: number | null) => {
    setActiveId(activeId !== id ? id : null);
  };

  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {data.HeaderMenuItemData.data.map((item) => (
          <li key={item.id} className="header__menu-item">
            <HeaderMenuItem
              activeId={activeId}
              item={item}
              onMouseEnter={openModal}
              onClick={toggleModal}
              href={item.href}
            />
            <HeaderModal
              isActive={activeId === item.id}
              onMouseLeave={closeModal}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
