import type { Route } from "./+types/about";
import Header from "~/components/Header/Header";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About Page" }];
}

export default function About() {
  return <Header />;
}
