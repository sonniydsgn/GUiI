import NewsIcon from "~/assets/icons/newspaper.svg?react";
import ContactsIcon from "~/assets/icons/address-book.svg?react";
import StudentLifeIcon from "~/assets/icons/calendar.svg?react";
import CoursesIcon from "~/assets/icons/student.svg?react";

export interface IHeaderModalLink {
  id: number;
  content: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export const HeaderModalLinksData: IHeaderModalLink[] = [
  {
    id: 1,
    content: "Новости",
    Icon: NewsIcon,
    href: "/",
  },
  {
    id: 2,
    content: "Контакты",
    Icon: ContactsIcon,
    href: "/",
  },
  {
    id: 3,
    content: "Студенческая жизнь",
    Icon: StudentLifeIcon,
    href: "/",
  },
  {
    id: 4,
    content: "Подготовительные курсы",
    Icon: CoursesIcon,
    href: "/",
  },
];
