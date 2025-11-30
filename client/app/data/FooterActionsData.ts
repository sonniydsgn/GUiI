export interface ILinkItem {
  id?: number;
  text: string;
  src: string;
}

export interface IFooterAction {
  id?: string;
  title: string;
  links: ILinkItem[];
}

export const FooterActionsData: IFooterAction[] = [
  {
    id: "directions",
    title: "Направления",
    links: [
      { id: 1, text: "МТИД", src: "/mtid" },
      { id: 2, text: "ГМУ", src: "/gmu" },
      { id: 3, text: "ГУОП", src: "/guop" },
    ],
  },
  {
    id: "about-department",
    title: "О кафедре",
    links: [
      { id: 1, text: "Миссия и история", src: "/about" },
      { id: 2, text: "Преподаватели", src: "/teachers" },
      { id: 3, text: "Контакты", src: "/contacts" },
      { id: 4, text: "Новости", src: "/news" },
    ],
  },
  {
    id: "about-polytech",
    title: "О Политехе",
    links: [
      { id: 1, text: "Сайт ПНИПУ", src: "https://pstu.edu" },
      {
        id: 2,
        text: "Сведения об образовательной организации",
        src: "/organization",
      },
      { id: 3, text: "Оплата образовательных услуг", src: "/payment" },
      { id: 4, text: "Реквизиты ПНИПУ", src: "/requisites" },
    ],
  },
  {
    id: "media-requests",
    title: "По запросам от СМИ",
    links: [
      {
        id: 1,
        text: "+7 (342) 2-198-119",
        src: "tel:+73422198119",
      },
      {
        id: 2,
        text: "kolesnik@pstu.ru",
        src: "mailto:kolesnik@pstu.ru",
      },
    ],
  },
  {
    id: "general-questions",
    title: "По любым вопросам",
    links: [
      {
        id: 1,
        text: "+7 (342) 2-198-520",
        src: "tel:+73422198520",
      },
      { id: 2, text: "kanc@pstu.ru", src: "mailto:kanc@pstu.ru" },
    ],
  },
  {
    id: "admission-questions",
    title: "По вопросам поступления",
    links: [
      {
        id: 1,
        text: "+7 (342) 2-198-065",
        src: "tel:+73422198065",
      },
      {
        id: 2,
        text: "enter@pstu.ru",
        src: "mailto:enter@pstu.ru",
      },
    ],
  },
];
