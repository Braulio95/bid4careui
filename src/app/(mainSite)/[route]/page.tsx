import { navigationTabs } from "@/constants/navigationMap";
import { notFound } from "next/navigation";
import { Fragment } from "react";

interface Params {
  params: {
    route: string;
  };
}

//Definiendo funcion para validar si la ruta existe en la navegacion o no
const isRouteNotFound = (route: string) => {
  return !navigationTabs.some((tab) => tab.route === route);
};

function section({ params: { route } }: Params) {
  const activeTab = navigationTabs.find((tab) => tab.route === `/${route}`);
  if (isRouteNotFound(`/${route}`) || !activeTab) {
    notFound();
  }

  return <Fragment>{activeTab.module}</Fragment>;
}

export default section;
