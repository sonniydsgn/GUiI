export interface IEventsCardData {
  id: number;
  imageSrc: string;
  title: string;
  author: string;
  location: string;
}

export const EventsCardsData: IEventsCardData[] = [
  {
    id: 1,
    imageSrc: "/app/assets/img/events/1.jpg",
    title: "Авторский студенческий театр «17-ая скрипка»",
    author: "Артемьева Юлия Александровна",
    location: "Комсомольский проспект, 29, ауд. 22, 24 (ЦРМП)",
  },
  {
    id: 2,
    imageSrc: "/app/assets/img/events/2.jpg",
    title: "Музыкальная студия «ПРОПЕТЬ»",
    author: "Мамыкина Юлия Николаевна",
    location: "Комсомольский проспект, 29, ауд. 22, 24 (ЦРМП)",
  },
  {
    id: 3,
    imageSrc: "/app/assets/img/events/3.jpg",
    title: "Хореографическая студия “Postscriptum”",
    author: "Абдурахманова Александра Андреевна",
    location: "Комсомольский проспект, 29, ауд. 14 (Клуб студентов)",
  },
];
