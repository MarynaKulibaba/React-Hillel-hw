import routeNames from "./routeNames";
import Home from "../pages/Home";
import CreateTodoItem from "../pages/CreateTodoItem";

const pagesRoutesConfig = [
  {
    path: routeNames.homePage,
    component: Home,
    id: 1,
  },
  {
    path: routeNames.createTodoItem,
    component: CreateTodoItem,
    id: 2,
  },
];

export default pagesRoutesConfig;
