import "./EventsFilters.scss";

import { EventsFiltersData } from "~/data/EventsFiltersData";

import Button from "../Button/Button";

import { useState } from "react";

const EventsFilters = () => {
  const [activeCategory, setActiveCategory] = useState<string>("teams");

	const handleClick = (category: string) => {
		setActiveCategory(category)
	}

  return (
    <div className="events-filters">
      {EventsFiltersData.map(({ id, text, category }) => (
        <Button
          className="events-filters__button"
          variant={category === activeCategory ? "dark" : "transparent"}
          isSmall
          key={id}
					disableHoverEffect
					onClick={() => handleClick(category)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default EventsFilters;
