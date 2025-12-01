import { EventsCardsData } from "~/data/EventsCardsData";

import EventsCard from "../EventsCard/EventsCard";

interface EventsListProps {
  activeCategory: string;
}

const EventsList = ({ activeCategory }: EventsListProps) => {
  const filteredEventsCards = EventsCardsData.filter(
    (eventCard) => eventCard.category === activeCategory
  );

  return (
    <ul className="events__list">
      {filteredEventsCards.map(({ id, imageSrc, title, author, location, category }) => (
        <li className="events__item" key={id}>
          <EventsCard
            imageSrc={imageSrc}
            title={title}
            author={author}
            location={location}
            category={category}
          />
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
