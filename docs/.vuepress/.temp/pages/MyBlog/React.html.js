export const data = JSON.parse("{\"key\":\"v-20bade22\",\"path\":\"/MyBlog/React.html\",\"title\":\"React 模块\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"react 基础篇\",\"slug\":\"react-基础篇\",\"children\":[]},{\"level\":3,\"title\":\"Hooks\",\"slug\":\"hooks\",\"children\":[]},{\"level\":3,\"title\":\"react 高级核心篇\",\"slug\":\"react-高级核心篇\",\"children\":[]}],\"git\":{\"updatedTime\":1655970225000,\"contributors\":[{\"name\":\"asiyeaili\",\"email\":\"88175568+sarwaras@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"MyBlog/React.md\"}")

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
