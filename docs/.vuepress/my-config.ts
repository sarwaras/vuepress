import { defineUserConfig } from "vuepress"
import { path } from "@vuepress/utils"

export default defineUserConfig({
  lang: "zh-CN",
  title: "Hello, VuePress !",
  description: "this is my first VuePress state",
  // pagePatterns: ["**/*.md ", "!.vuepress", "!node_module", "!MyBlog/*.md"],

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
})
