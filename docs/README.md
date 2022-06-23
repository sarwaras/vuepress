# Hi~

![](./study/images/2.jpg)
## hello vuepress

### 创建表格

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

- note :
您可以在标头行中横线的左侧、右侧或两侧加入冒号 :，靠左、靠右或居中对齐列中的文本。

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

### 字体
**这是粗体**

*这是斜体*

~~这是错误文本~~

***所有这些文本都很重要***

<sub>这是下标文本</sub>

<sup>这是上标文本</sup>

**此文本 _非常_ 重要**

### 链接
<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 

### 表情
VuePress 2 已经发布 :tada: ！

祝一切顺利！ :tada: ！:tada: ！:tada: ！ :grinning:

# 一级标题
## 二级标题
### 三级标题

#### 四级标题
### 目录

[[toc]]

### 代码块
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
* note:  行数范围标记的例子：

- 行数范围： {5-8}
- 多个单行： {4,7,9}
- 组合： {4,7-13,16,23-27,40}

#### 行号

##### 输入：
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'

-  no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

##### 输出： 
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

#### 添加 v-pre

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

### 导入代码块
<!-- 最简单的语法 -->
@[code](./MyBlog/test.md)

<!-- 仅导入第 1 行至第 5 行 -->
@[code{1-5}](./MyBlog/index.ts)

@[code{1-10} ts{1,3,5}](@vuepress/my-config.ts)

### 模板语法

##### 输入：
``` vue
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span> 

```
##### 输出：
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span> 

###  默认主题参考
#### 自定义容器

这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

####  内置组件，  Badge

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

#### codeGroupItem

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>


### 引入图片

![](./MyBlog/sky.png)

###  静态资源部分 --  base Helper


<!-- ![VuePress Logo](/docs/MyBlog/images/4.png)
<img :src="$withBase('/docs/MyBlog/images/4.png')" alt="VuePress Logo"></img> -->


### 图形-- 扇形图 

::: echarts 一个基础南丁格尔玫瑰图案例

```json
{
  "legend": {
    "top": "bottom"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "Nightingale Chart",
      "type": "pie",
      "radius": [20, 100],
      "center": ["50%", "50%"],
      "roseType": "area",
      "itemStyle": {
        "borderRadius": 8
      },
      "data": [
        {
          "value": 40,
          "name": "rose 1"
        },
        {
          "value": 38,
          "name": "rose 2"
        },
        {
          "value": 32,
          "name": "rose 3"
        },
        {
          "value": 30,
          "name": "rose 4"
        },
        {
          "value": 28,
          "name": "rose 5"
        },
        {
          "value": 26,
          "name": "rose 6"
        },
        {
          "value": 22,
          "name": "rose 7"
        },
        {
          "value": 18,
          "name": "rose 8"
        }
      ]
    }
  ]
}
```

:::

### 选项卡

::: tabs

@tab 标题 1

<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

<!-- tab 1 内容 -->

@tab 标题 2#值 2

<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

<!-- tab 2 内容 -->

:::

#### 创建流程图
Here is a simple flow chart:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


### 使用 geoJSON 创建图标

```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 1,
      "properties": {
        "ID": 0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
              [-90,35],
              [-90,30],
              [-85,30],
              [-85,35],
              [-90,35]
          ]
        ]
      }
    }
  ]
}
```

一个配件炫酷的 [particlesOptions](https://particles.js.org/) 配置

```ts
export const particlesOptions = {
  fpsLimit: 120,
  particles: {
    move: {
      enable: true,
      random: false,
      speed: 2,
      straight: false,
    },
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'] },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#fff' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
}
```


### 注意

- 请留意目录名的大写。

docs/.vuepress: 用于存放全局的配置、组件、静态资源等。

docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。

docs/.vuepress/theme: 用于存放本地主题。

docs/.vuepress/styles: 用于存放样式相关的文件。

docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。

docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。

docs/.vuepress/public: 静态资源目录。

docs/.vuepress/templates: 存储 HTML 模板文件。

docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。

docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。

docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。

docs/.vuepress/enhanceApp.js: 客户端应用的增强。