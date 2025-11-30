export interface IStatsCard {
	id?: number
  count: string;
  characteristic: string;
}

export const StatsCardsData: IStatsCard[] = [
  {
		id: 1,
    count: "33",
    characteristic: "работника",
  },
  {
		id: 2,
    count: "300+",
    characteristic: "студентов",
  },
  {
		id: 3,
    count: "13",
    characteristic: "партнеров-работодателей",
  },
];
