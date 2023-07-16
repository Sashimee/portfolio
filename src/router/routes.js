const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/projects", component: () => import("pages/Projects.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },
      { path: "/blog", component: () => import("pages/Blog.vue") },
      {
        path: "/projects/:shortcode",
        component: () => import("pages/projects/Show.vue")
      },
      {
        path: "/*",
        component: () => import("pages/Error404.vue")
      }
    ]
  }
];

export default routes;
