import {
  // createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Author from "./components/Author";
import Comment from "./components/Comment";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/main",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
  },
  {
    path: "/:anything(.*)*",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
