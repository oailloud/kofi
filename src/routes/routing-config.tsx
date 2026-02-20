import { createRoute, createRouter } from "@tanstack/react-router"
import { ROOT_ROUTE, ROUTES as ROUTES_CONFIG } from "./routes"

const routes = ROUTES_CONFIG.map(routeConfig => createRoute(routeConfig))
const routeTree = ROOT_ROUTE.addChildren(routes)

export const router = createRouter({ routeTree })