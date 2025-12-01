import "./Events.scss";

import Section from "~/layouts/Section/Section";

import EventsFilters from "~/components/EventsFilters/EventsFilters";
import EventsList from "~/components/EventsList/EventsList";
import Button from "~/components/Button/Button";

import { useState } from "react";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<string>("teams");

  const handleClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Section
      sectionName="events"
      title="Студенческая жизнь"
      description="В Пермском Политехе студенты занимаются спортом, творческими направлениями и социальными проектами, открывая возможности для саморазвития и ярких впечатлений"
      sectionVariant="gray"
    >
      <div className="events__inner container">
        <EventsFilters onClick={handleClick} activeCategory={activeCategory} />
        <EventsList activeCategory={activeCategory} />
        <Button className="events__button" variant="dark">
          Показать еще
        </Button>
      </div>
    </Section>
  );
};

export default Events;
