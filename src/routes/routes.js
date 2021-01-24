import HomePage from "../pages/Home/Home";
import Search from "../pages/Search/index";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/search",
    component: Search,
    exact: true
  }
];

export default routes;