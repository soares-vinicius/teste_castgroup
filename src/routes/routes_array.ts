import ListProducts from "../pages/home";

const ConstantRoutes = [
  {
    path: "/",
    component: ListProducts,
    exact: true,
  },
  {
    path: "/novidades",
    component: ListProducts,
    exact: true,
  },
  {
    path: "/samsung",
    component: ListProducts,
    exact: true,
  },
  {
    path: "/motorola",
    component: ListProducts,
    exact: true,
  },
  {
    path: "/lenovo",
    component: ListProducts,
    exact: true,
  },
  {
    path: "/lg",
    component: ListProducts,
    exact: true,
  },
];

export default ConstantRoutes;
