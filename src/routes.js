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
    name: "Purge & Archive",
    icon: "content_paste",
    component: PurgeArchive,
    layout: "/admin"
  },    
  {
    path: "/waves",
    name: "Waves",
    icon: "content_paste",
    component: Waves,
    layout: "/admin"
  },
  {
    path: "/tabelas",
    name: "Tabelas",
    icon: "content_paste",
    component: Tabelas,
    layout: "/admin"
  },
  {
    path: "/modulos",
    name: "Modulos",
    icon: "content_paste",
    component: Modulos,
    layout: "/admin"
  },
  {
    path: "/processos",
    name: "Processos",
    icon: "content_paste",
    component: Processos,
    layout: "/admin"
  },
  {
    path: "/status",
    name: "Status Archive",
    icon: "description",
    component: StatusArchive,
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

  /*
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;
