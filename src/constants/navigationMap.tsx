import { ColaboratosPage } from "@/pages/adminPages/ColaboratorsPage/ColaboratosPage";

export const navigationTabs = [
  { label: "Dashboard", route: "/", module: <div>Dashboard</div> },
  {
    label: "Colaboradores",
    route: "/colaboradores",
    module: <ColaboratosPage />,
  },
  { label: "Servicios", route: "/servicios", module: <div>Servicios</div> },
  { label: "Clientes", route: "/clientes", module: <div>Clientes</div> },
  { label: "Ajustes", route: "/ajustes", module: <div>Ajustes</div> },
];
