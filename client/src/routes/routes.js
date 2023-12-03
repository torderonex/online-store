import { CATEGORY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOT_FOUND, PRODUCT_ROUTE, SIGNUP_ROUTE } from "../utils/consts";
import Main from "../pages/main/MainPage";
import Category from "../pages/category/CategoryPage";
import NotFound from "../pages/not-found/NotFound";
import Signup from "../pages/auth/SignupPage";
import ProductPage from "../pages/Product/Product";
import LoginPage from "../pages/auth/LoginPage";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component : Main
    },
    {
        path: CATEGORY_ROUTE,
        Component : Category
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: SIGNUP_ROUTE,
        Component : Signup
    },
    {
        path : NOT_FOUND,
        Component: NotFound
    },
    {
        path: PRODUCT_ROUTE + ":id",
        Component : ProductPage
    }

]

export const authRoutes = [
    {
       
    }
]