import "./EventsFilters.scss";

import { EventsFiltersData } from "~/data/EventsFiltersData";

import Button from "../Button/Button";

import { useState } from "react";

const EventsFilters = () => {
  const [idActiveButton, setIdActiveButton] = useState<number>(1);

	const handleCLick = (id: number) => {
		setIdActiveButton(id)
	}

  return (
    <div className="events-filters">
      {EventsFiltersData.map(({ id, text }) => (
        <Button
          className="events-filters__button"
          variant={id === idActiveButton ? "dark" : "transparent"}
          isSmall
          key={id}
					disableHoverEffect
					onClick={() => handleCLick(id)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default EventsFilters;
