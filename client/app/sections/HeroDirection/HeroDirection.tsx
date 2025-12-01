import "./HeroDirection.scss";

import type { IDirectionsPage } from "~/data/DirectionsPagesData";

import HeroDirectionList from "~/components/HeroDirectionList/HeroDirectionList";

interface HeroDirectionsProps {
  data: IDirectionsPage;
}

interface HeroDirectionInfo {
  id: number;
  characteristic: string;
  value: string;
}

const HeroDirection = ({ data }: HeroDirectionsProps) => {
  const {
    code,
    title,
    educationForm,
    duration,
    grade,
    price,
    availabilityDormitory,
    availabilityMilitaryDepartment,
    accentColor,
  } = data;

  const HeroDirectionInfoListData: HeroDirectionInfo[] = [
    {
      id: 1,
      characteristic: "Форма обучения",
      value: educationForm,
    },
    {
      id: 2,
      characteristic: "Длительность",
      value: duration,
    },
    {
      id: 3,
      characteristic: "Проходной балл",
      value: grade,
    },
    {
      id: 4,
      characteristic: "Стоимость",
      value: price,
    },
    {
      id: 5,
      characteristic: "Общежитие",
      value: availabilityDormitory ? "есть" : "отсутствует",
    },
    {
      id: 6,
      characteristic: "Военная кафедра",
      value: availabilityMilitaryDepartment ? "есть" : "отсутствует",
    },
  ];

  return (
    <section
      className="hero-direction"
      style={{ "--color-accent": accentColor } as React.CSSProperties}
    >
      <div className="hero-direction__inner container">
        <div className="hero-direction__info">
          <p className="hero-direction__code">{code}</p>
          <h1 className="hero-direction__title">{title}</h1>
        </div>

        <HeroDirectionList data={HeroDirectionInfoListData} />
      </div>
    </section>
  );
};

export default HeroDirection;
