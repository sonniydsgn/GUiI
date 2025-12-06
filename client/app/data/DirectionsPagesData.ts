export interface IDirectionsPage {
  id: string;
	directionName: string;
  code: string;
  title: string;
  educationForm: string;
  duration: string;
  grade: string;
  price: string;
  availabilityDormitory: boolean;
  availabilityMilitaryDepartment: boolean;
  accentColor: string;
}

export const DirectionsPagesData: IDirectionsPage[] = [
  {
    id: "mtid",
		directionName: "МТИД",
    code: "Прикладная информатика (09.03.03)",
    title: "Мультимедийные технологии и информационный дизайн",
    educationForm: "Очная",
    duration: "4 года",
    grade: "225",
    price: "от 183 000 ₽",
    availabilityDormitory: true,
    availabilityMilitaryDepartment: true,
    accentColor: "#aa0041",
  },
];
