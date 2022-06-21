import { defineUserConfig } from "vuepress"
import { path } from "@vuepress/utils"

export default defineUserConfig({
  lang: "zh-CN",
  title: "Hello, VuePress !",
  description: "this is my first VuePress state",
  // pagePatterns: ["**/*.md ", "!.vuepress", "!node_module", "!MyBlog/*.md"],
  // public: path.resolve(__dirname, "./static"),
  //  MyBlog 里的图片 配置
  // alias: {
  //   "@images": path.resolve(__dirname, "../images"), // 在配置文件中设置的路径别名也同样支持：
  // },

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },

  base: "/bar/",
  markdown: {
    anchor: false, //  标题描点， true： 显示，  false： 不显示
    // links: false,
    emoji: false, //  显不显示表情的配置
    code: {
      // lineNumbers: false,    //  行号的配置
      // highlightLines: false,    //  行内高亮的配置
    },
    importCode: {
      handleImportPath: str => str.replace(/^@vuepress/, path.resolve(__dirname, "./")),
    },
  },

  //  hope theme
  // theme: hopeTheme({
  //   plugins: {
  //     mdEnhance: {
  //       echarts: true,
  //     },
  //   },
  // }),
})
