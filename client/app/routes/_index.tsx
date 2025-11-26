import Page from "~/layouts/Page/Page";
import Hero from "~/sections/Hero/Hero";
import News from "~/sections/News/News";
import Directions from "~/sections/Directions/Directions";

export function meta() {
  return [
    { title: "Кафедра ГУиИ" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  return (
    <Page>
      <Hero />
      <News />
      <Directions />
    </Page>
  );
}
