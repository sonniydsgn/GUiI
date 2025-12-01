import "./EventsFilters.scss";

import { EventsFiltersData } from "~/data/EventsFiltersData";

import Button from "../Button/Button";

interface EventFiltersProps {
  onClick: (category: string) => void;
  activeCategory: string;
}

const EventsFilters = ({ onClick, activeCategory }: EventFiltersProps) => {
  return (
    <div className="events-filters">
      {EventsFiltersData.map(({ id, text, category }) => (
        <Button
          className="events-filters__button"
          variant={category === activeCategory ? "dark" : "transparent"}
          isSmall
          key={id}
          disableHoverEffect
          onClick={() => onClick(category)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default EventsFilters;
