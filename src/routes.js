// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import PurgeArchive from "views/PurgeArchive/PurgeArchive.js";
import Auditorias from "views/Auditorias/Auditorias.js";
import Waves from "views/Waves/Waves.js"
import Tabelas from "views/Tabelas/Tabelas.js"
import Processos from "views/Processos/Processos.js"
import Modulos from "views/Modulos/Modulos.js"
import StatusArchive from "views/StatusArchive/StatusArchive.js"
import Schedule from "views/Schedule/Schedule.js"
// core components/views for RTL layout 

const dashboardRoutes = [
  {
    path: "/uploadArchive",
    name: "Status Purge & Archive",
    icon: "content_paste",
    component: PurgeArchive,
    layout: "/admin"
  },    
  {
    path: "/waves",
    name: "Cadastro de Wave",
    icon: "content_paste",
    component: Waves,
    layout: "/admin"
  },
  {
    path: "/modulos",
    name: "Cadastro de Módulo",
    icon: "content_paste",
    component: Modulos,
    layout: "/admin"
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "description",
    component: Schedule,
    layout: "/admin"
  },
  {
    path: "/auditorias",
    name: "Auditorias",
    icon: "vpn_key",
    component: Auditorias,
    layout: "/admin"
  },
];

export default dashboardRoutes;
