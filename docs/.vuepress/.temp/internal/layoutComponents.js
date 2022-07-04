import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/404.vue")),
  "CategoriesLayout": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/CategoriesLayout.vue")),
  "HomeLayout": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/HomeLayout.vue")),
  "Layout": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/Layout.vue")),
  "PostLayout": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/PostLayout.vue")),
  "PostsLayout": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/PostsLayout.vue")),
  "SearchLayout": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/SearchLayout.vue")),
  "TagsLayout": defineAsyncComponent(() => import("E:/study/VuePress/vuepressGithub/node_modules/vuepress-theme-knzn/lib/client/layouts/TagsLayout.vue")),
}
