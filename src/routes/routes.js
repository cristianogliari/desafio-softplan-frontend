import HomePage from "../pages/Home/Home";
import Search from "../pages/Search/Search";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/results",
    component: Search,
    exact: true
  }
];

export default routes;