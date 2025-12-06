import type { Route } from "./+types/mtid";
import qs from "qs";
import Page from "~/layouts/Page/Page";

import { DirectionsPagesData } from "~/data/DirectionsPagesData";

import HeroDirection from "~/sections/HeroDirection/HeroDirection";
import Professions from "~/sections/Professions/Professions";

interface DirectionBlock {
  id: number;
  __component: string;
  fullName: string;
  shortName: string;
}

interface DirectionData {
  id: number;
  title: string;
  blocks: DirectionBlock[];
}

interface DirectionResponse {
  data: DirectionData[];
}

interface LoaderData {
  directionsData: DirectionResponse;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Кафедра ГУиИ | МТИД" },
    { name: "description", content: "MTID Page" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
  const path = "/api/directions";
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    populate: '*',
  });

  const response = await fetch(url.href);
  const data = await response.json();
  return { directionsData: data };
}

export default function MtidRoute({ loaderData }: { loaderData: LoaderData }) {
  const filteredData = DirectionsPagesData.find(
    (direction) => direction.id === "mtid"
  );

  // Вывод только fullName и shortName
  if (loaderData?.directionsData?.data?.[0]?.blocks) {
    const blocks = loaderData.directionsData.data[0].blocks;
    
    // Находим hero блок
    const heroBlock = blocks.find(
      (block) => block.__component === "direction.hero"
    );
    
    if (heroBlock) {
      console.log("Full Name:", heroBlock.fullName);
      console.log("Short Name:", heroBlock.shortName);
    }
  }

  if (!filteredData) {
    return (
      <Page>
        <p>Ой... Где-то косяк, такое направление не найдено.</p>
      </Page>
    );
  }

  return (
    <Page>
      <HeroDirection data={filteredData} />
      <Professions />
    </Page>
  );
}