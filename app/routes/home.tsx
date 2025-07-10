import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Bienvenida - Lastrainer" },
    { name: "description", content: "Bienvenida en Lastrainer" },
  ];
}

export default function Home() {
  return <Welcome />;
}