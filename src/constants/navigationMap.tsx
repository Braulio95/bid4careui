import { ClientsPage } from "@/pages/adminPages/ClientsPage/ClientsPage";
import { ColaboratosPage } from "@/pages/adminPages/ColaboratorsPage/ColaboratosPage";
import { ServicePage } from "@/pages/adminPages/ServicesPage/ServicePage";

export const navigationTabs = [
  { label: "Dashboard", route: "/", module: <div>Dashboard</div> },
  {
    label: "Colaboradores",
    route: "/colaboradores",
    module: <ColaboratosPage />,
  },
  { label: "Servicios", route: "/servicios", module: <ServicePage /> },
  { label: "Clientes", route: "/clientes", module: <ClientsPage /> },
  { label: "Ajustes", route: "/ajustes", module: <div>Ajustes</div> },
];
