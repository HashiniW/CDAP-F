import Pricing from "views/Pricing.jsx";
import UserProfile from "views/UserProfile.jsx";
import Demanding from "views/Demanding.jsx";
import SupplierSelect from "views/SupplierSelect.jsx";
import Tracing from "views/Tracing.jsx";
import Notifications from "views/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/pricing",
    name: "Pricing",
    icon: "pe-7s-cash",
    component: Pricing,
    layout: "/admin"
  },
  {
    path: "/demanding",
    name: "Demanding",
    icon: "pe-7s-graph1",
    component: Demanding,
    layout: "/admin"
  },
  {
    path: "/supplierSelect",
    name: "Supplier Select",
    icon: "pe-7s-box1",
    component: SupplierSelect,
    layout: "/admin"
  },
  {
    path: "/Tracing",
    name: "Tracing",
    icon: "pe-7s-note2",
    component: Tracing,
    layout: "/admin"
  },
  {
    path: "/userProfile",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
