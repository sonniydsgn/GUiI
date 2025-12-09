import "./EventsFilters.scss";

import { EventsFiltersData } from "~/data/EventsFiltersData";

import Button from "../Button/Button";

import type { IEventsCard } from "~/data/EventsCardsData";

interface EventFiltersProps {
  onClick: (category: string) => void;
  activeCategory: string;
  eventsCards: IEventsCard[];
}

const EventsFilters = ({
  onClick,
  activeCategory,
  eventsCards,
}: EventFiltersProps) => {
  return (
    <div className="events-filters">
      {EventsFiltersData.map(
        ({ id, text, category }) =>
          eventsCards.filter((card) => card.category === category).length !== 0 && (
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
          )
      )}
    </div>
  );
};

export default EventsFilters;
