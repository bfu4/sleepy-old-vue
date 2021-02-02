import { Component } from "vue";
import App from "@/App.vue";
import Horse from "./components/Horse.vue";
import VueRouter from "vue-router";
import EthDocPage from "./components/EthDocPage.vue";
import Sources from "./components/Sources.vue";

export const routes = [
    { path: "/", component: App },
    { path: "/docs/eth", component: EthDocPage },
    { path: "/docs/eth/sources", component: Sources },
    { path: "/horse", component: Horse }
]

/**
 * Get a component by path
 *
 * @param path path to get component by
 */
export function getComponent(path : string) : Component {
    let component! : Component;
    routes.map(route => {
        if (route.path.localeCompare(path) == 0) {
            component = route.component;
        }
    });
    return component;
}

// create router
const router = new VueRouter({
    routes
});

export default router;
