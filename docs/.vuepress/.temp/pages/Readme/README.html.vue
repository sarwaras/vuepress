<template><div><h1>Hi~</h1>
<p><img src="@source/Readme/study/images/2.jpg" alt=""></p>
<h2>hello vuepress</h2>
<h3>创建表格</h3>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<ul>
<li>note :
您可以在标头行中横线的左侧、右侧或两侧加入冒号 :，靠左、靠右或居中对齐列中的文本。</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">Left-aligned</th>
<th style="text-align:center">Center-aligned</th>
<th style="text-align:right">Right-aligned</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">git status</td>
<td style="text-align:center">git status</td>
<td style="text-align:right">git status</td>
</tr>
<tr>
<td style="text-align:left">git diff</td>
<td style="text-align:center">git diff</td>
<td style="text-align:right">git diff</td>
</tr>
</tbody>
</table>
<h3>字体</h3>
<p><strong>这是粗体</strong></p>
<p><em>这是斜体</em></p>
<p><s>这是错误文本</s></p>
<p><em><strong>所有这些文本都很重要</strong></em></p>
<p><sub>这是下标文本</sub></p>
<p><sup>这是上标文本</sup></p>
<p><strong>此文本 <em>非常</em> 重要</strong></p>
<h3>链接</h3>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/Readme/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<h3>表情</h3>
<p>VuePress 2 已经发布 :tada: ！</p>
<p>祝一切顺利！ :grinning:</p>
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h3>目录</h3>
<nav class="table-of-contents"><ul><li><RouterLink to="#hello-vuepress">hello vuepress</RouterLink><ul><li><RouterLink to="#创建表格">创建表格</RouterLink></li><li><RouterLink to="#字体">字体</RouterLink></li><li><RouterLink to="#链接">链接</RouterLink></li><li><RouterLink to="#表情">表情</RouterLink></li></ul></li><li><RouterLink to="#二级标题">二级标题</RouterLink><ul><li><RouterLink to="#三级标题">三级标题</RouterLink></li><li><RouterLink to="#目录">目录</RouterLink></li><li><RouterLink to="#代码块">代码块</RouterLink></li><li><RouterLink to="#导入代码块">导入代码块</RouterLink></li><li><RouterLink to="#模板语法">模板语法</RouterLink></li><li><RouterLink to="#默认主题参考">默认主题参考</RouterLink></li><li><RouterLink to="#引入图片">引入图片</RouterLink></li><li><RouterLink to="#静态资源部分-base-helper">静态资源部分 --  base Helper</RouterLink></li><li><RouterLink to="#图形-扇形图">图形-- 扇形图</RouterLink></li><li><RouterLink to="#选项卡">选项卡</RouterLink></li><li><RouterLink to="#使用-geojson-创建图标">使用 geoJSON 创建图标</RouterLink></li><li><RouterLink to="#注意">注意</RouterLink></li></ul></li></ul></nav>
<h3>代码块</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>note:  行数范围标记的例子：</li>
</ul>
<ul>
<li>行数范围： {5-8}</li>
<li>多个单行： {4,7,9}</li>
<li>组合： {4,7-13,16,23-27,40}</li>
</ul>
<h4>行号</h4>
<h5>输入：</h5>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>

<span class="token operator">-</span>  no<span class="token operator">-</span>line<span class="token operator">-</span>numbers
<span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>输出：</h5>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre></div><h4>添加 v-pre</h4>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3>导入代码块</h3>
<!-- 最简单的语法 -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><!-- 仅导入第 1 行至第 5 行 -->
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>File not found</code></pre><div class="highlight-lines"></div><div class="line-numbers" aria-hidden="true"></div></div><h3>模板语法</h3>
<h5>输入：</h5>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>一加一等于： {{ 1 + 1 }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> span: {{ i }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>输出：</h5>
<p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<h3>默认主题参考</h3>
<h4>自定义容器</h4>
<p>这是一个提示
:::</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<h4>内置组件，  Badge</h4>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<h4>codeGroupItem</h4>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<h3>引入图片</h3>
<p><img src="@source/Readme/MyBlog/sky.png" alt=""></p>
<h3>静态资源部分 --  base Helper</h3>
<!-- ![VuePress Logo](/docs/MyBlog/images/4.png)
<img :src="$withBase('/docs/MyBlog/images/4.png')" alt="VuePress Logo"></img> -->
<h3>图形-- 扇形图</h3>
<p>::: echarts 一个基础南丁格尔玫瑰图案例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"legend"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"top"</span><span class="token operator">:</span> <span class="token string">"bottom"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"toolbox"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"show"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"feature"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"mark"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"show"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"dataView"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"show"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"readOnly"</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"restore"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"show"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"saveAsImage"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"show"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"series"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Nightingale Chart"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"pie"</span><span class="token punctuation">,</span>
      <span class="token property">"radius"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"center"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"50%"</span><span class="token punctuation">,</span> <span class="token string">"50%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"roseType"</span><span class="token operator">:</span> <span class="token string">"area"</span><span class="token punctuation">,</span>
      <span class="token property">"itemStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"borderRadius"</span><span class="token operator">:</span> <span class="token number">8</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 1"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 2"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 3"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 4"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 5"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 6"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 7"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"rose 8"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3>选项卡</h3>
<p>::: tabs</p>
<p>@tab 标题 1</p>
<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->
<!-- tab 1 内容 -->
<p>@tab 标题 2#值 2</p>
<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->
<!-- tab 2 内容 -->
<p>:::</p>
<h4>创建流程图</h4>
<p>Here is a simple flow chart:</p>
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">graph</span> TD<span class="token punctuation">;</span>
    A<span class="token arrow operator">--></span>B<span class="token punctuation">;</span>
    A<span class="token arrow operator">--></span>C<span class="token punctuation">;</span>
    B<span class="token arrow operator">--></span>D<span class="token punctuation">;</span>
    C<span class="token arrow operator">--></span>D<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3>使用 geoJSON 创建图标</h3>
<div class="language-geojson ext-geojson line-numbers-mode"><pre v-pre class="language-geojson"><code>{
  &quot;type&quot;: &quot;FeatureCollection&quot;,
  &quot;features&quot;: [
    {
      &quot;type&quot;: &quot;Feature&quot;,
      &quot;id&quot;: 1,
      &quot;properties&quot;: {
        &quot;ID&quot;: 0
      },
      &quot;geometry&quot;: {
        &quot;type&quot;: &quot;Polygon&quot;,
        &quot;coordinates&quot;: [
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个配件炫酷的 <a href="https://particles.js.org/" target="_blank" rel="noopener noreferrer">particlesOptions<ExternalLinkIcon/></a> 配置</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> particlesOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  fpsLimit<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  particles<span class="token operator">:</span> <span class="token punctuation">{</span>
    move<span class="token operator">:</span> <span class="token punctuation">{</span>
      enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      random<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      speed<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      straight<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token builtin">number</span><span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> density<span class="token operator">:</span> <span class="token punctuation">{</span> enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> value_area<span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#aa73ff'</span><span class="token punctuation">,</span> <span class="token string">'#f8c210'</span><span class="token punctuation">,</span> <span class="token string">'#83d238'</span><span class="token punctuation">,</span> <span class="token string">'#33b1f8'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    shape<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span>
      stroke<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">'#fff'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      polygon<span class="token operator">:</span> <span class="token punctuation">{</span> nb_sides<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      image<span class="token operator">:</span> <span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token string">'img/github.svg'</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    opacity<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
      random<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      anim<span class="token operator">:</span> <span class="token punctuation">{</span> enable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> speed<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> opacity_min<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> sync<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      random<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      anim<span class="token operator">:</span> <span class="token punctuation">{</span> enable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> speed<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> size_min<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> sync<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    line_linked<span class="token operator">:</span> <span class="token punctuation">{</span>
      enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      distance<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
      opacity<span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>
      width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  interactivity<span class="token operator">:</span> <span class="token punctuation">{</span>
    events<span class="token operator">:</span> <span class="token punctuation">{</span>
      onhover<span class="token operator">:</span> <span class="token punctuation">{</span> enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> mode<span class="token operator">:</span> <span class="token string">'grab'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      onclick<span class="token operator">:</span> <span class="token punctuation">{</span> enable<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      resize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    modes<span class="token operator">:</span> <span class="token punctuation">{</span>
      grab<span class="token operator">:</span> <span class="token punctuation">{</span> distance<span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span> line_linked<span class="token operator">:</span> <span class="token punctuation">{</span> opacity<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      bubble<span class="token operator">:</span> <span class="token punctuation">{</span> distance<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> opacity<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      repulse<span class="token operator">:</span> <span class="token punctuation">{</span> distance<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      push<span class="token operator">:</span> <span class="token punctuation">{</span> particles_nb<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      remove<span class="token operator">:</span> <span class="token punctuation">{</span> particles_nb<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3>注意</h3>
<ul>
<li>请留意目录名的大写。</li>
</ul>
<p>docs/.vuepress: 用于存放全局的配置、组件、静态资源等。</p>
<p>docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。</p>
<p>docs/.vuepress/theme: 用于存放本地主题。</p>
<p>docs/.vuepress/styles: 用于存放样式相关的文件。</p>
<p>docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。</p>
<p>docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。</p>
<p>docs/.vuepress/public: 静态资源目录。</p>
<p>docs/.vuepress/templates: 存储 HTML 模板文件。</p>
<p>docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。</p>
<p>docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。</p>
<p>docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。</p>
<p>docs/.vuepress/enhanceApp.js: 客户端应用的增强。</p>
</div></template>
