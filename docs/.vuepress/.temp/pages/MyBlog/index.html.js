export const data = JSON.parse("{\"key\":\"v-1c0162e2\",\"path\":\"/MyBlog/index.html\",\"title\":\"前端\",\"lang\":\"en-US\",\"frontmatter\":{\"permalinkPattern\":\"/MyBlog/:slug.html\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"前端概述\",\"slug\":\"前端概述\",\"children\":[]}],\"git\":{\"updatedTime\":1655797854000,\"contributors\":[{\"name\":\"asiyeaili\",\"email\":\"88175568+sarwaras@users.noreply.github.com\",\"commits\":4}]},\"filePathRelative\":\"MyBlog/index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
