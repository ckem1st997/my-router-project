import { createWebHistory, createRouter } from "vue-router";
const Index = () => import("./view/Index")
const ProductsDetails = () => import("./view/ProductsDetails")
const ListProducts = () => import("./view/ListProducts")
const Category = () => import("./view/Category")
const Blog = () => import("./view/Blog")
const ListCart = () => import("./view/ListCart")
const Login = () => import("./view/Login")
const Regitster = () => import("./view/Regitster")
const Info = () => import("./view/Info")
const Introduce = () => import("./view/Introduce")
const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductsDetails,
    props: true,
  },
  {
    path: "/introduce",
    name: "Introduce",
    component: Introduce,
  },
  {
    path: "/listproduct/:id",
    name: "ListProducts",
    component: ListProducts,
    props: true,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    // props: true,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/cart",
    name: "ListCart",
    component: ListCart,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: "/regitster",
    name: "Regitster",
    component: Regitster,
    meta: { requiresGuest: true }
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  const checkau = localStorage.getItem("access_token")
  const checkuser = localStorage.getItem("id_user")
  if (to.meta.requiresAuth && !checkuser && !checkau) {
    return { name: 'Login', query: { redirectTo: to.path } }
  }
  if (to.meta.requiresGuest && checkuser && checkau) {
    return { name: 'Home' }
  }
})
export default router;