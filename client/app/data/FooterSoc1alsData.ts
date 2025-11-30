import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";
import RutubeIcon from "~/assets/icons/rutube.svg?react";
import MaxIcon from "~/assets/icons/max.svg?react";

export interface IFooterSoc1alsItem {
  id: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

export const FooterSoc1alsData: IFooterSoc1alsItem[] = [
  {
    id: 1,
    Icon: VkIcon,
    href: "https://vk.com/yourpage",
    label: "Мы ВКонтакте",
  },
  {
    id: 2,
    Icon: TelegramIcon,
    href: "https://t.me/yourchannel",
    label: "Наш Telegram",
  },
  {
    id: 3,
    Icon: MaxIcon,
    href: "https://t.me/yourchannel",
    label: "Наш Max",
  },

	{
    id: 4,
    Icon: RutubeIcon,
    href: "https://t.me/yourchannel",
    label: "Мы на Rutube",
  },
];
