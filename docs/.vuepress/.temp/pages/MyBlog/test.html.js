export const data = JSON.parse("{\"key\":\"v-28c0fb3f\",\"path\":\"/MyBlog/test.html\",\"title\":\"HTML 基础\",\"lang\":\"en-US\",\"frontmatter\":{\"permalinkPattern\":\"/MyBlog/:slug.html\"},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"一、HTML 概述\",\"slug\":\"一、html-概述\",\"children\":[]},{\"level\":3,\"title\":\"二、HTML5简介\",\"slug\":\"二、html5简介\",\"children\":[]},{\"level\":3,\"title\":\"三、\",\"slug\":\"三、\",\"children\":[]}],\"git\":{\"updatedTime\":1655970225000,\"contributors\":[{\"name\":\"asiyeaili\",\"email\":\"88175568+sarwaras@users.noreply.github.com\",\"commits\":3}]},\"filePathRelative\":\"MyBlog/test.md\"}")

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
