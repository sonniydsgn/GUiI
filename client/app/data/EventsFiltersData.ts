interface IEventsFilter {
  id?: number;
  text: string;
  category: string;
}

export const EventsFiltersData: IEventsFilter[] = [
  {
    id: 1,
    text: "Творческие коллективы",
    category: "teams",
  },
  {
    id: 2,
    text: "Спорт",
    category: "sport",
  },
  {
    id: 3,
    text: "Студенческие отряды",
    category: "groups",
  },
  {
    id: 4,
    text: "Студенческое самоуправление",
    category: "government",
  },
  {
    id: 5,
    text: "Наука",
		category: "science"
  },
];
