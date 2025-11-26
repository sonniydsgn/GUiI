import MtidIcon from "~/assets/icons/PenNib.svg?react";
import GmuIcon from "~/assets/icons/Books.svg?react";
import GuopIcon from "~/assets/icons/Scales.svg?react";

interface IDirectionsCardData {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  tags: string[];
}

export const DirectionsCardData: IDirectionsCardData[] = [
  {
    Icon: MtidIcon,
    title: "МТИД",
    description: "Мультимедийные технологии и информационный дизайн",
    tags: ["Бакалавриат"],
  },
  {
    Icon: GmuIcon,
    title: "ГМУ",
    description: "Государственное и муниципальное управление",
    tags: ["Бакалавриат", "Магистратура", "Аспирантура"],
  },
  {
    Icon: GuopIcon,
    title: "ГУОП",
    description: "Государственное управление и отраслевые политики",
    tags: ["Аспирантура"],
  },
];
