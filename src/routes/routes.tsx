import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Catalog } from "../catalog/Catalog";

type RouteConfig = Parameters<typeof createRoute>[0]
type RoutesConfig = RouteConfig[]

export const ROOT_ROUTE = createRootRoute()
const getRoot: RouteConfig["getParentRoute"] = () => ROOT_ROUTE;

export const ROUTES: RoutesConfig = [
    {
        getParentRoute: getRoot,
        path: '/',
        component: () => <div>home</div>,
    },
    {
        getParentRoute: getRoot,
        path: "/catalog",
        component: Catalog,
    }
]