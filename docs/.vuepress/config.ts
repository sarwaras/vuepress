import { defineUserConfig } from "vuepress"
import { path } from "@vuepress/utils"
import { defaultTheme } from "@vuepress/theme-default"
// import knznTheme from "vuepress-theme-knzn"
// import {mdEnhance , hopetheme} from "vuepress-theme-hope"
const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics")

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
  base: "/vuepressGithub/",
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

  //  配置默认主题
  theme: defaultTheme({
    locales: {
      "/": {
        // sidebar
        sidebar: {
          "/MyBlog/": [
            {
              text: "前端概览",
              children: ["/study", "/frontmatter.md"],
            },
          ],
        },
        // page meta
        editLinkText: "Edit this page on GitHub",
      },
      // "/": {
      //   selectLanguageName: "English",
      //   selectLanguageText: "选择语言",
      // },
      "/zh/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
      },
    },
    navbar: [
      {
        text: "前端",
        link: "/MyBlog",
      },
      {
        text: "Javascript",
        link: "/MyBlog/JS.md",
      },
      {
        text: "CSS",
        link: "/MyBlog/CSS.md",
      },
      {
        text: "Vue",
        link: "/MyBlog/Vue.md",
      },
      {
        text: "React",
        link: "/MyBlog/React.md",
      },
    ],
  }),

  //  博主 配置的主题
  // theme: knznTheme({
  //   // plugins: {
  //   //   mdEnhance: {
  //   //     // 添加选项卡支持
  //   //     tabs: true,
  //   //   },
  //   // },

  //   // logo
  //   logo: "/images/Twitter-logo.svg",
  //   darkLogo: "/images/logo-dark.svg",
  //   // 背景图片
  //   backgroundImage: "/images/sky.png",
  //   darkBackgroundImage: "/images/avatar-dark.jpg",
  //   // 文章简介图片
  //   postImage: "https://v2.vuepress.vuejs.org/images/hero.png",
  //   darkPostImage: "/images/post-dark.svg",
  //   // 背景canvas 动画配置
  //   // particlesOptions,

  //   /**
  //    * 博主信息相关
  //    */
  //   // 博主名称
  //   blogger: "Angela",
  //   // 铭言
  //   slogan: "每一个你不满意的现在，都有一个你没有努力的曾经~",
  //   // 头像
  //   avatar: "/images/4.png",
  //   darkAvatar: "/images/4.png",
  //   // 其它媒体
  //   medias: [
  //     { link: "mailto:1272666299@qq.com", icon: "email" },
  //     {
  //       link: "http://wpa.qq.com",
  //       icon: "QQ",
  //     },
  //     { link: "https://blog.csdn.net/ASIYAas", icon: "CSDN" },
  //     { link: "https://gitee.com/", icon: "gitee" },
  //     // { link: "https://gitee.com", icon: "gitee" },
  //     { link: "https://github.com/sarwaras/vuepress", icon: "github" },
  //   ],

  //   /**
  //    * 数据显示相关
  //    */
  //   // 列表页显示的文章个数
  //   perPage: 10,
  //   // 主页显示分类的个数
  //   maxCategories: 6,
  //   // 主页显示的标签个数
  //   maxTags: 10,

  //   // 导航
  //   // navbar: [],

  //   /**
  //    *  页脚相关配置
  //    */
  //   // 备案号
  //   beian: "鄂AS 20220621号-2",
  //   // 备案查询地址
  //   beianUrl: "",
  //   // 网址起始时间
  //   siteStartDate: "2022",
  //   comment: {
  //     repo: "zhb333/vuepress-theme-knzn",
  //     repoId: "R_kgDOHSwV_A",
  //     category: "General",
  //     categoryId: "DIC_kwDOHSwV_M4CPHIA",
  //   },
  // }),

  //  插件的使用  (在这使用的是 谷歌的插件，  其他插件的使用原理也是一样的)
  plugins: [
    googleAnalyticsPlugin({
      id: "G-XXXXXXXXXX",
    }),
  ],
})
