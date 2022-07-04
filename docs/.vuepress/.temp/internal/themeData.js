export const themeData = JSON.parse("{\"locales\":{\"/\":{\"sidebar\":{\"/MyBlog/\":[{\"text\":\"前端概览\",\"children\":[\"/study\",\"/frontmatter.md\"]}]},\"editLinkText\":\"Edit this page on GitHub\",\"selectLanguageName\":\"English\"},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\"}},\"navbar\":[{\"text\":\"前端\",\"link\":\"/MyBlog\"},{\"text\":\"Javascript\",\"link\":\"/MyBlog/JS.md\"},{\"text\":\"CSS\",\"link\":\"/MyBlog/CSS.md\"},{\"text\":\"Vue\",\"link\":\"/MyBlog/Vue.md\"},{\"text\":\"React\",\"link\":\"/MyBlog/React.md\"}],\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
