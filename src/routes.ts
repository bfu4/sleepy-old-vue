import Vue, { Component } from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";

export const routes = [
    { path: "/", component: App },
]

/**
 * Get a component by path
 *
 * @param path path to get component by
 */
export function getComponent(path : string) : Component {
    let component : Component = new Vue();
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