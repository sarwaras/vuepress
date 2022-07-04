export const themeData = JSON.parse("{\"logo\":\"/images/Twitter-logo.svg\",\"darkLogo\":\"/images/logo-dark.svg\",\"backgroundImage\":\"/images/sky.png\",\"darkBackgroundImage\":\"/images/avatar-dark.jpg\",\"postImage\":\"https://v2.vuepress.vuejs.org/images/hero.png\",\"darkPostImage\":\"/images/post-dark.svg\",\"blogger\":\"Angela\",\"slogan\":\"每一个你不满意的现在，都有一个你没有努力的曾经~\",\"avatar\":\"/images/4.png\",\"darkAvatar\":\"/images/4.png\",\"medias\":[{\"link\":\"mailto:1272666299@qq.com\",\"icon\":\"email\"},{\"link\":\"http://wpa.qq.com\",\"icon\":\"QQ\"},{\"link\":\"https://blog.csdn.net/ASIYAas\",\"icon\":\"CSDN\"},{\"link\":\"https://gitee.com/\",\"icon\":\"gitee\"},{\"link\":\"https://github.com/sarwaras/vuepress\",\"icon\":\"github\"}],\"perPage\":10,\"maxCategories\":6,\"maxTags\":10,\"navbar\":[{\"text\":\"前端\",\"link\":\"/MyBlog\"},{\"text\":\"Javascript\",\"link\":\"/MyBlog/JS.md\"},{\"text\":\"CSS\",\"link\":\"/MyBlog/CSS.md\"},{\"text\":\"Vue\",\"link\":\"/MyBlog/Vue.md\"},{\"text\":\"React\",\"link\":\"/MyBlog/React.md\"}],\"beian\":\"鄂AS 20220621号-2\",\"beianUrl\":\"\",\"siteStartDate\":\"2022\",\"comment\":{\"repo\":\"zhb333/vuepress-theme-knzn\",\"repoId\":\"R_kgDOHSwV_A\",\"category\":\"General\",\"categoryId\":\"DIC_kwDOHSwV_M4CPHIA\",\"lang\":\"zh-CN\"},\"dirname\":\"docs\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
