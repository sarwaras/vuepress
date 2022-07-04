<template><div><h1>CSS 模块</h1>
<h2>CSS 基础篇</h2>
<h3>CSS 简介</h3>
<p>前段时间没怎么用CSS样式，感觉忘了一些了。所以花了点时间整理了一下CSS模块~
这整理的本人简单还可以，也很方便，就像词典一样。以后不用担心记不住样式的名字了，忘了就拿出这个小词典翻翻就好了！
好的东西跟大家一起分享吖！   喜欢的盆友们可以点个红心鼓励一下哦！  有鼓励才会有更大的动力！   我就别废话了 赶紧说正事儿把</p>
<p><a href="https://www.runoob.com/css/css-tutorial.html" target="_blank" rel="noopener noreferrer">参考文档<ExternalLinkIcon/></a>：https://www.runoob.com/css/css-tutorial.html</p>
<h3>1、backgroun</h3>
<table>
<thead>
<tr>
<th><em><a href="https://www.runoob.com/cssref/pr-background-color.html" target="_blank" rel="noopener noreferrer">background-color<ExternalLinkIcon/></a></em></th>
<th>指定要使用的背景颜色</th>
<th>1</th>
</tr>
</thead>
<tbody>
<tr>
<td><em><a href="https://www.runoob.com/cssref/pr-background-position.html" target="_blank" rel="noopener noreferrer">background-position<ExternalLinkIcon/></a></em></td>
<td>指定背景图像的位置</td>
<td>1</td>
</tr>
<tr>
<td><em><a href="https://www.runoob.com/cssref/css3-pr-background-size.html" target="_blank" rel="noopener noreferrer">background-size<ExternalLinkIcon/></a></em></td>
<td>指定背景图片的大小</td>
<td>3</td>
</tr>
<tr>
<td><em><a href="https://www.runoob.com/cssref/pr-background-repeat.html" target="_blank" rel="noopener noreferrer">background-repeat<ExternalLinkIcon/></a></em></td>
<td>指定如何重复背景图像</td>
<td>1</td>
</tr>
<tr>
<td><em><a href="https://www.runoob.com/cssref/css3-pr-background-origin.html" target="_blank" rel="noopener noreferrer">background-origin<ExternalLinkIcon/></a></em></td>
<td>指定背景图像的定位区域</td>
<td>3</td>
</tr>
<tr>
<td><em><a href="https://www.runoob.com/cssref/css3-pr-background-clip.html" target="_blank" rel="noopener noreferrer">background-clip<ExternalLinkIcon/></a></em></td>
<td>指定背景图像的绘画区域</td>
<td>3</td>
</tr>
<tr>
<td><em><a href="https://www.runoob.com/cssref/pr-background-attachment.html" target="_blank" rel="noopener noreferrer">background-attachment<ExternalLinkIcon/></a></em></td>
<td>设置背景图像是否固定或者随着页面的其余部分滚动。</td>
<td>1</td>
</tr>
<tr>
<td><em><a href="https://www.runoob.com/cssref/pr-background-image.html" target="_blank" rel="noopener noreferrer">background-image<ExternalLinkIcon/></a></em></td>
<td>指定要使用的一个或多个背景图像</td>
<td></td>
</tr>
</tbody>
</table>
<h4>background-color:</h4>
<p>background-color 属性设置一个元素的背景颜色。</p>
<p>元素的背景颜色是元素的总大小，包括填充和边界（但不包括边距）。</p>
<p>（可以使用 background-color 属性为元素设置背景色。这个属性接受任何合法的颜色值。）</p>
<table>
<thead>
<tr>
<th><em>color</em></th>
<th>指定背景颜色。在<a href="https://www.runoob.com/css/css-colors-legal.html" target="_blank" rel="noopener noreferrer">CSS颜色值<ExternalLinkIcon/></a>近可能的寻找一个颜色值的完整列表。</th>
</tr>
</thead>
<tbody>
<tr>
<td>transparent</td>
<td>指定背景颜色应该是透明的。这是默认</td>
</tr>
<tr>
<td>inherit</td>
<td>指定背景颜色，应该从父元素继承</td>
</tr>
</tbody>
</table>
<h4>background-position</h4>
<p><strong>属性值</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">left top left center left bottom right top right center right bottom center top center center center bottom</td>
<td style="text-align:left">如果仅指定一个关键字，其他值将会是&quot;center&quot;</td>
</tr>
<tr>
<td style="text-align:left"><em>x% y%</em></td>
<td style="text-align:left">第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％</td>
</tr>
<tr>
<td style="text-align:left"><em>xpos ypos</em></td>
<td style="text-align:left">第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 <a href="https://www.runoob.com/try/css-units.html" target="_blank" rel="noopener noreferrer">CSS单位<ExternalLinkIcon/></a>。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">指定background-position属性设置应该从父元素继承</td>
</tr>
</tbody>
</table>
<p>[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-0pJJGmE3-1646098238176)(C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220218112446709.png)]</p>
<h4>background-size</h4>
<p>指定背景图像的大小：</p>
<div class="language-CSS ext-CSS line-numbers-mode"><pre v-pre class="language-CSS"><code>div {    
background:url(img_flwr.gif);  
background-size:80px 60px;  
background-repeat:no-repeat; 

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>语法：</strong></p>
<p>background-size: <em>length</em>|<em>percentage</em>|cover|contain;</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">length</td>
<td style="text-align:left">设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 <strong>auto</strong>(自动)</td>
</tr>
<tr>
<td style="text-align:left">percentage</td>
<td style="text-align:left">将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为&quot;auto(自动)&quot;</td>
</tr>
<tr>
<td style="text-align:left">cover</td>
<td style="text-align:left">此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。</td>
</tr>
<tr>
<td style="text-align:left">contain</td>
<td style="text-align:left">此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。</td>
</tr>
</tbody>
</table>
<h4>background-repeat</h4>
<p>设置如何平铺对象的 background-image 属性。</p>
<p>默认情况下，重复background-image的垂直和水平方向。</p>
<p><strong>属性值：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">repeat</td>
<td style="text-align:left">背景图像将向垂直和水平方向重复。这是默认</td>
</tr>
<tr>
<td style="text-align:left">repeat-x</td>
<td style="text-align:left">只有水平位置会重复背景图像</td>
</tr>
<tr>
<td style="text-align:left">repeat-y</td>
<td style="text-align:left">只有垂直位置会重复背景图像</td>
</tr>
<tr>
<td style="text-align:left">no-repeat</td>
<td style="text-align:left">background-image 不会重复</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">指定 background-repeat 属性设置应该从父元素继承</td>
</tr>
</tbody>
</table>
<h4>background-clip</h4>
<p>background-clip属性指定背景绘制区域。</p>
<p><strong>语法</strong></p>
<p>background-clip: border-box|padding-box|content-box;</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">border-box</td>
<td style="text-align:left">默认值。背景绘制在边框方框内（剪切成边框方框）。</td>
</tr>
<tr>
<td style="text-align:left">padding-box</td>
<td style="text-align:left">背景绘制在衬距方框内（剪切成衬距方框）。</td>
</tr>
<tr>
<td style="text-align:left">content-box</td>
<td style="text-align:left">背景绘制在内容方框内（剪切成内容方框）。</td>
</tr>
</tbody>
</table>
<h4>background-attachment</h4>
<p>background-attachment设置背景图像是否固定或者随着页面的其余部分滚动。</p>
<p><strong>属性值</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">scroll</td>
<td style="text-align:left">背景图片随着页面的滚动而滚动，这是默认的。</td>
</tr>
<tr>
<td style="text-align:left">fixed</td>
<td style="text-align:left">背景图片不会随着页面的滚动而滚动。</td>
</tr>
<tr>
<td style="text-align:left">local</td>
<td style="text-align:left">背景图片会随着元素内容的滚动而滚动。</td>
</tr>
<tr>
<td style="text-align:left">initial</td>
<td style="text-align:left">设置该属性的默认值。 <a href="https://www.runoob.com/cssref/css-initial.html" target="_blank" rel="noopener noreferrer">阅读关于 <em>initial</em> 内容<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">指定 background-attachment 的设置应该从父元素继承。 <a href="https://www.runoob.com/cssref/css-inherit.html" target="_blank" rel="noopener noreferrer">阅读关于 <em>inherit</em> 内容<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h4>background-image</h4>
<p>background-image 属性设置一个元素的背景图像。</p>
<p>元素的背景是元素的总大小，包括填充和边界（但不包括边距）。</p>
<p>默认情况下，background-image放置在元素的左上角，并重复垂直和水平方向。</p>
<p>提示：请设置一种可用的背景颜色，这样的话，假如背景图像不可用，可以使用背景色带代替。</p>
<p><strong>属性值</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url(<em>'URL'</em>)</td>
<td style="text-align:left">图像的URL</td>
</tr>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">无图像背景会显示。这是默认</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/func-linear-gradient.html" target="_blank" rel="noopener noreferrer">linear-gradient()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建一个线性渐变的 &quot;图像&quot;(从上到下)</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/func-radial-gradient.html" target="_blank" rel="noopener noreferrer">radial-gradient()<ExternalLinkIcon/></a></td>
<td style="text-align:left">用径向渐变创建 &quot;图像&quot;。 (center to edges)</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/func-repeating-linear-gradient.html" target="_blank" rel="noopener noreferrer">repeating-linear-gradient()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建重复的线性渐变 &quot;图像&quot;。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/func-repeating-radial-gradient.html" target="_blank" rel="noopener noreferrer">repeating-radial-gradient()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建重复的径向渐变 &quot;图像&quot;</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">指定背景图像应该从父元素继承</td>
</tr>
</tbody>
</table>
<h3>2、color</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">color-profile</td>
<td style="text-align:left">允许使用源的颜色配置文件的默认以外的规范</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-opacity.html" target="_blank" rel="noopener noreferrer">opacity<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置一个元素的透明度级别</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">rendering-intent</td>
<td style="text-align:left">允许超过默认颜色配置文件渲染意向的其他规范</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p>color：#ff0000         (文字的颜色)</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>color：red <span class="token punctuation">,</span>green <span class="token punctuation">,</span>blue <span class="token punctuation">,</span>pink      //  第一种写法  <span class="token punctuation">(</span>预定义的颜色值<span class="token punctuation">)</span>
<span class="token property">color</span><span class="token punctuation">:</span>#ff0000         // 第二种写法   （十六进制表示）
<span class="token property">color</span><span class="token punctuation">:</span><span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span>     //  第三种写法  （RGB 代码）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>background： #fffffff      (背景)</p>
<p>background-color: #F5F5F5     （背景的颜色）</p>
<h3>3、font  字体属性</h3>
<p><strong>font 特性：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><em>font-style</em></td>
<td style="text-align:left">规定字体样式。参阅：<a href="https://www.runoob.com/cssref/pr-font-font-style.html" target="_blank" rel="noopener noreferrer">font-style<ExternalLinkIcon/></a> 中可能的值。</td>
</tr>
<tr>
<td style="text-align:left"><em>font-variant</em></td>
<td style="text-align:left">规定字体异体。参阅：<a href="https://www.runoob.com/cssref/pr-font-font-variant.html" target="_blank" rel="noopener noreferrer">font-variant<ExternalLinkIcon/></a> 中可能的值。</td>
</tr>
<tr>
<td style="text-align:left"><em>font-weight</em></td>
<td style="text-align:left">规定字体粗细。参阅：<a href="https://www.runoob.com/cssref/pr-font-weight.html" target="_blank" rel="noopener noreferrer">font-weight<ExternalLinkIcon/></a> 中可能的值。</td>
</tr>
<tr>
<td style="text-align:left"><em>font-size/line-height</em></td>
<td style="text-align:left">规定字体尺寸和行高。参阅：<a href="https://www.runoob.com/cssref/pr-font-font-size.html" target="_blank" rel="noopener noreferrer">font-size<ExternalLinkIcon/></a> 和 <a href="https://www.runoob.com/cssref/pr-dim-line-height.html" target="_blank" rel="noopener noreferrer">line-height<ExternalLinkIcon/></a> 中可能的值。</td>
</tr>
<tr>
<td style="text-align:left"><em>font-family</em></td>
<td style="text-align:left">规定字体系列。参阅：<a href="https://www.runoob.com/cssref/pr-font-font-family.html" target="_blank" rel="noopener noreferrer">font-family<ExternalLinkIcon/></a> 中可能的值。</td>
</tr>
<tr>
<td style="text-align:left">caption</td>
<td style="text-align:left">定义被标题控件（比如按钮、下拉列表等）使用的字体。</td>
</tr>
<tr>
<td style="text-align:left">icon</td>
<td style="text-align:left">定义被图标标记使用的字体。</td>
</tr>
<tr>
<td style="text-align:left">menu</td>
<td style="text-align:left">定义被下拉列表使用的字体。</td>
</tr>
<tr>
<td style="text-align:left">message-box</td>
<td style="text-align:left">定义被对话框使用的字体。</td>
</tr>
<tr>
<td style="text-align:left">small-caption</td>
<td style="text-align:left">caption 字体的小型版本。</td>
</tr>
<tr>
<td style="text-align:left">status-bar</td>
<td style="text-align:left">定义被窗口状态栏使用的字体。</td>
</tr>
</tbody>
</table>
<p><strong>属性定义及使用说明：</strong></p>
<p>font 简写属性在一个声明中设置所有字体属性。</p>
<p>可设置的属性是（按顺序）： &quot;font-style font-variant font-weight font-size/line-height font-family&quot;</p>
<p>font-size和font-family的值是必需的。如果缺少了其他值，默认值将被插入，如果有默认值的话。</p>
<p><strong>注意：</strong> line - height属性设置行与行之间的空间。</p>
<p>font-style: italic    (斜体)     / normal 就是不倾斜的</p>
<p>font-weight:  400     (粗体)     //   400 一般表示normal 或者不加粗，一般浏览器默认的字体；  700 表示粗体，相当于 font-weight:bold</p>
<p>font-size：15px  （字体大小）</p>
<p>font-family:  'Microsoft yahei' ;    (字体类型)</p>
<p>line-height: 28px    (行高)    //常用的单位是px   ，但在小程序或者uni-app 中通常用rpx;   1px==2rpx;</p>
<h5>字体复合属性</h5>
<p>复合树形相当于 简写的方式：</p>
<p>比如：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
<span class="token property">font</span><span class="token punctuation">:</span> font-style  font-weight  font-size/line-height  font-family
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>注意： 不能随意改变它们的顺序，并且各个属性之间用空格隔开；</li>
<li>不需要设置的树形可以省略，但必须保留<strong>font-size</strong>  和  <strong>font-family</strong> 属性，否则font属性不起作用！</li>
</ul>
<p>在写样式的时候如下写就可以了：</p>
<h4>font-style</h4>
<p>font-style属性指定文本的字体样式。</p>
<p><strong>属性值：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">normal</td>
<td style="text-align:left">默认值。浏览器显示一个标准的字体样式。</td>
</tr>
<tr>
<td style="text-align:left">italic</td>
<td style="text-align:left">浏览器会显示一个斜体的字体样式。</td>
</tr>
<tr>
<td style="text-align:left">oblique</td>
<td style="text-align:left">浏览器会显示一个倾斜的字体样式。</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">规定应该从父元素继承字体样式。</td>
</tr>
</tbody>
</table>
<h4>font-variant （小型大写字母的字体显示文本）</h4>
<p>font-variant 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小</p>
<p>font-variant 属性主要用于定义小型大写字母文本</p>
<p><strong>属性值：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">normal</td>
<td style="text-align:left">默认值。浏览器会显示一个标准的字体。</td>
</tr>
<tr>
<td style="text-align:left">small-caps</td>
<td style="text-align:left">浏览器会显示小型大写字母的字体。</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">规定应该从父元素继承 font-variant 属性的值。</td>
</tr>
</tbody>
</table>
<h4>font-weight  (字体粗细)</h4>
<p>font-weight 属性设置文本的粗细</p>
<p><strong>属性值：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">normal</td>
<td style="text-align:left">默认值。定义标准的字符。</td>
</tr>
<tr>
<td style="text-align:left">bold</td>
<td style="text-align:left">定义粗体字符。</td>
</tr>
<tr>
<td style="text-align:left">bolder</td>
<td style="text-align:left">定义更粗的字符。</td>
</tr>
<tr>
<td style="text-align:left">lighter</td>
<td style="text-align:left">定义更细的字符。</td>
</tr>
<tr>
<td style="text-align:left">100200300400500600700800900</td>
<td style="text-align:left">定义由细到粗的字符。400 等同于 normal，而 700 等同于 bold。</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">规定应该从父元素继承字体的粗细。</td>
</tr>
</tbody>
</table>
<h4>font-size  (字体大小)</h4>
<p>font-size 属性用于设置字体大小。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* &lt;absolute-size>，绝对大小值 */</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> xx-small<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> x-small<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> small<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> medium<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> large<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> x-large<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> xx-large<span class="token punctuation">;</span>
 
<span class="token comment">/* &lt;relative-size>，相对大小值 */</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> larger<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> smaller<span class="token punctuation">;</span>
 
<span class="token comment">/* &lt;length>，长度值 */</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
 
<span class="token comment">/* &lt;percentage>，百分比值 */</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
 
<span class="token property">font-size</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>属性值：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">xx-smallx-smallsmallmediumlargex-largexx-large</td>
<td style="text-align:left">把字体的尺寸设置为不同的尺寸，从 xx-small 到 xx-large。默认值：medium。</td>
</tr>
<tr>
<td style="text-align:left">smaller</td>
<td style="text-align:left">把 font-size 设置为比父元素更小的尺寸。</td>
</tr>
<tr>
<td style="text-align:left">larger</td>
<td style="text-align:left">把 font-size 设置为比父元素更大的尺寸。</td>
</tr>
<tr>
<td style="text-align:left"><em>length</em></td>
<td style="text-align:left">把 font-size 设置为一个固定的值。</td>
</tr>
<tr>
<td style="text-align:left"><em>%</em></td>
<td style="text-align:left">把 font-size 设置为基于父元素的一个百分比值。</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">规定应该从父元素继承字体尺寸。</td>
</tr>
</tbody>
</table>
<h4>line-height （行间距）</h4>
<p>设置以百分比计的行高：.</p>
<p><strong>注意：</strong> 负值是不允许的</p>
<p><strong>属性值：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">normal</td>
<td style="text-align:left">默认。设置合理的行间距。</td>
</tr>
<tr>
<td style="text-align:left"><em>number</em></td>
<td style="text-align:left">设置数字，此数字会与当前的字体尺寸相乘来设置行间距。</td>
</tr>
<tr>
<td style="text-align:left"><em>length</em></td>
<td style="text-align:left">设置固定的行间距。</td>
</tr>
<tr>
<td style="text-align:left"><em>%</em></td>
<td style="text-align:left">基于当前字体尺寸的百分比行间距。</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">规定应该从父元素继承 line-height 属性的值。</td>
</tr>
</tbody>
</table>
<h4>font-family   （段落的字体）</h4>
<p>font - family属性指定一个元素的字体。</p>
<p>font-family 可以把多个字体名称作为一个&quot;回退&quot;系统来保存。如果浏览器不支持第一个字体，则会尝试下一个。</p>
<p>有两种类型的字体系列名称：</p>
<ul>
<li><strong>family-name</strong> - 指定的系列名称：具体字体的名称，比如：&quot;times&quot;、&quot;courier&quot;、&quot;arial&quot;。</li>
<li><strong>generic-family</strong> - 通常字体系列名称：比如：&quot;serif&quot;、&quot;sans-serif&quot;、&quot;cursive&quot;、&quot;fantasy&quot;、&quot;monospace。</li>
</ul>
<p>使用某种特定的字体系列（Geneva）完全取决于用户机器上该字体系列是否可用；这个属性没有指示任何字体下载。因此，强烈推荐使用一个通用字体系列名作为后路。</p>
<p><strong>注意：</strong> 每个值用逗号分开。</p>
<p><strong>注意:</strong> 如果字体名称包含空格，它必须加上引号。在HTML中使用&quot;style&quot;属性时，必须使用单引号。</p>
<p><strong>属性值：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><em>family-name**generic-family</em></td>
<td style="text-align:left">用于某个元素的字体族名称或/及类族名称的一个优先表。默认值：取决于浏览器。</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">规定应该从父元素继承字体系列。</td>
</tr>
</tbody>
</table>
<h4>其他font属性</h4>
<p>[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-jRIWzEeC-1646098238178)(C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220218135259444.png)]</p>
<h3>4、text (文本属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-color.html" target="_blank" rel="noopener noreferrer">color<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置文本的颜色</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-direction.html" target="_blank" rel="noopener noreferrer">direction<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定文本的方向 / 书写方向</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-letter-spacing.html" target="_blank" rel="noopener noreferrer">letter-spacing<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置字符间距</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-dim-line-height.html" target="_blank" rel="noopener noreferrer">line-height<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置行高</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-text-align.html" target="_blank" rel="noopener noreferrer">text-align<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定文本的水平对齐方式</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-text-decoration.html" target="_blank" rel="noopener noreferrer">text-decoration<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定添加到文本的装饰效果</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-text-indent.html" target="_blank" rel="noopener noreferrer">text-indent<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定文本块首行的缩进</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-text-transform.html" target="_blank" rel="noopener noreferrer">text-transform<ExternalLinkIcon/></a></td>
<td style="text-align:left">控制文本的大小写</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">unicode-bidi</td>
<td style="text-align:left"></td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-pos-vertical-align.html" target="_blank" rel="noopener noreferrer">vertical-align<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的垂直对齐方式</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-white-space.html" target="_blank" rel="noopener noreferrer">white-space<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置怎样给一元素控件留白</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-text-word-spacing.html" target="_blank" rel="noopener noreferrer">word-spacing<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置单词间距</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-text-emphasis.html" target="_blank" rel="noopener noreferrer">text-emphasis<ExternalLinkIcon/></a></td>
<td style="text-align:left">向元素的文本应用重点标记以及重点标记的前景色。</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-hanging-punctuation.html" target="_blank" rel="noopener noreferrer">hanging-punctuation<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定一个标点符号是否可能超出行框</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-punctuation-trim.html" target="_blank" rel="noopener noreferrer">punctuation-trim<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定一个标点符号是否要去掉</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-text-align-last.html" target="_blank" rel="noopener noreferrer">text-align-last<ExternalLinkIcon/></a></td>
<td style="text-align:left">当 text-align 设置为 justify 时，最后一行的对齐方式。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-text-justify.html" target="_blank" rel="noopener noreferrer">text-justify<ExternalLinkIcon/></a></td>
<td style="text-align:left">当 text-align 设置为 justify 时指定分散对齐的方式。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-text-outline.html" target="_blank" rel="noopener noreferrer">text-outline<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置文字的轮廓。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-text-overflow.html" target="_blank" rel="noopener noreferrer">text-overflow<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定当文本溢出包含的元素，应该发生什么</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-text-shadow.html" target="_blank" rel="noopener noreferrer">text-shadow<ExternalLinkIcon/></a></td>
<td style="text-align:left">为文本添加阴影</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-text-wrap.html" target="_blank" rel="noopener noreferrer">text-wrap<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定文本换行规则</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-word-break.html" target="_blank" rel="noopener noreferrer">word-break<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定非CJK文字的断行规则</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-word-wrap.html" target="_blank" rel="noopener noreferrer">word-wrap<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置浏览器是否对过长的单词进行换行。</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>5、Marquee (字幕属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">marquee-direction</td>
<td style="text-align:left">设置内容移动的方向</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">marquee-play-count</td>
<td style="text-align:left">设置内容移动多少次</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">marquee-speed</td>
<td style="text-align:left">设置内容滚动的速度有多快</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">marquee-style</td>
<td style="text-align:left">设置内容移动的样式</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>6、border and Outline  (边框和轮廓属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border.html" target="_blank" rel="noopener noreferrer">border<ExternalLinkIcon/></a></td>
<td style="text-align:left">复合属性。设置对象边框的特性。</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border-bottom.html" target="_blank" rel="noopener noreferrer">border-bottom<ExternalLinkIcon/></a></td>
<td style="text-align:left">复合属性。设置对象底部边框的特性。</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border-bottom-color.html" target="_blank" rel="noopener noreferrer">border-bottom-color<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或检索对象的底部边框颜色。</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border-bottom-style.html" target="_blank" rel="noopener noreferrer">border-bottom-style<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或检索对象的底部边框样式。</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border-bottom-width.html" target="_blank" rel="noopener noreferrer">border-bottom-width<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或检索对象的底部边框宽度。</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border-color.html" target="_blank" rel="noopener noreferrer">border-color<ExternalLinkIcon/></a></td>
<td style="text-align:left">置或检索对象的边框颜色。</td>
<td style="text-align:left">1</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-left.html" target="_blank" rel="noopener noreferrer">border-left<ExternalLinkIcon/></a></td>
<td>复合属性。设置对象左边边框的特性。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-left-color.html" target="_blank" rel="noopener noreferrer">border-left-color<ExternalLinkIcon/></a></td>
<td>设置或检索对象的左边边框颜色。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-left-style.html" target="_blank" rel="noopener noreferrer">border-left-style<ExternalLinkIcon/></a></td>
<td>设置或检索对象的左边边框样式。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-left-width.html" target="_blank" rel="noopener noreferrer">border-left-width<ExternalLinkIcon/></a></td>
<td>设置或检索对象的左边边框宽度。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-right.html" target="_blank" rel="noopener noreferrer">border-right<ExternalLinkIcon/></a></td>
<td>复合属性。设置对象右边边框的特性。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-right-color.html" target="_blank" rel="noopener noreferrer">border-right-color<ExternalLinkIcon/></a></td>
<td>设置或检索对象的右边边框颜色。</td>
<td></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://www.runoob.com/cssref/pr-border-right-style.html" target="_blank" rel="noopener noreferrer">border-right-style<ExternalLinkIcon/></a></th>
<th>设置或检索对象的右边边框样式。</th>
<th>1</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-right-width.html" target="_blank" rel="noopener noreferrer">border-right-width<ExternalLinkIcon/></a></td>
<td>设置或检索对象的右边边框宽度。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-style.html" target="_blank" rel="noopener noreferrer">border-style<ExternalLinkIcon/></a></td>
<td>设置或检索对象的边框样式。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-top.html" target="_blank" rel="noopener noreferrer">border-top<ExternalLinkIcon/></a></td>
<td>复合属性。设置对象顶部边框的特性。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-top-color.html" target="_blank" rel="noopener noreferrer">border-top-color<ExternalLinkIcon/></a></td>
<td>设置或检索对象的顶部边框颜色</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-top-style.html" target="_blank" rel="noopener noreferrer">border-top-style<ExternalLinkIcon/></a></td>
<td>设置或检索对象的顶部边框样式。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-top-width.html" target="_blank" rel="noopener noreferrer">border-top-width<ExternalLinkIcon/></a></td>
<td>设置或检索对象的顶部边框宽度。</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-border-width.html" target="_blank" rel="noopener noreferrer">border-width<ExternalLinkIcon/></a></td>
<td>设置或检索对象的边框宽度。</td>
<td>1</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://www.runoob.com/cssref/pr-outline.html" target="_blank" rel="noopener noreferrer">outline<ExternalLinkIcon/></a></th>
<th>复合属性。设置或检索对象外的线条轮廓。</th>
<th>2</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-outline-color.html" target="_blank" rel="noopener noreferrer">outline-color<ExternalLinkIcon/></a></td>
<td>设置或检索对象外的线条轮廓的颜色。</td>
<td>2</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-outline-style.html" target="_blank" rel="noopener noreferrer">outline-style<ExternalLinkIcon/></a></td>
<td>设置或检索对象外的线条轮廓的样式。</td>
<td>2</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/pr-outline-width.html" target="_blank" rel="noopener noreferrer">outline-width<ExternalLinkIcon/></a></td>
<td>设置或检索对象外的线条轮廓的宽度。</td>
<td>2</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-bottom-left-radius.html" target="_blank" rel="noopener noreferrer">border-bottom-left-radius<ExternalLinkIcon/></a></td>
<td>设置或检索对象的左下角圆角边框。提供2个参数，2个参数以空格分隔，每个参数允许设置1个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-bottom-right-radius.html" target="_blank" rel="noopener noreferrer">border-bottom-right-radius<ExternalLinkIcon/></a></td>
<td>设置或检索对象的右下角圆角边框。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-image.html" target="_blank" rel="noopener noreferrer">border-image<ExternalLinkIcon/></a></td>
<td>设置或检索对象的边框样式使用图像来填充。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-image-outset.html" target="_blank" rel="noopener noreferrer">border-image-outset<ExternalLinkIcon/></a></td>
<td>规定边框图像超过边框的量。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-image-repeat.html" target="_blank" rel="noopener noreferrer">border-image-repeat<ExternalLinkIcon/></a></td>
<td>规定图像边框是否应该被重复（repeated）、拉伸（stretched）或铺满（rounded）。</td>
<td>3</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://www.runoob.com/cssref/css3-pr-border-image-slice.html" target="_blank" rel="noopener noreferrer">border-image-slice<ExternalLinkIcon/></a></th>
<th>规定图像边框的向内偏移。</th>
<th style="text-align:left">3</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-image-source.html" target="_blank" rel="noopener noreferrer">border-image-source<ExternalLinkIcon/></a></td>
<td>规定要使用的图像，代替 border-style 属性中设置的边框样式。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-image-width.html" target="_blank" rel="noopener noreferrer">border-image-width<ExternalLinkIcon/></a></td>
<td>规定图像边框的宽度。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-radius.html" target="_blank" rel="noopener noreferrer">border-radius<ExternalLinkIcon/></a></td>
<td>设置或检索对象使用圆角边框。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-top-left-radius.html" target="_blank" rel="noopener noreferrer">border-top-left-radius<ExternalLinkIcon/></a></td>
<td>定义左上角边框的形状。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-border-top-right-radius.html" target="_blank" rel="noopener noreferrer">border-top-right-radius<ExternalLinkIcon/></a></td>
<td>定义右上角边框的形状。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td>box-decoration-break</td>
<td>规定行内元素被折行</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-box-shadow.html" target="_blank" rel="noopener noreferrer">box-shadow<ExternalLinkIcon/></a></td>
<td>向方框添加一个或多个阴影。</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>7、Box (盒子属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-overflow-x.html" target="_blank" rel="noopener noreferrer">overflow-x<ExternalLinkIcon/></a></td>
<td style="text-align:left">如果内容溢出了元素内容区域，是否对内容的左/右边缘进行裁剪。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-overflow-y.html" target="_blank" rel="noopener noreferrer">overflow-y<ExternalLinkIcon/></a></td>
<td style="text-align:left">如果内容溢出了元素内容区域，是否对内容的上/下边缘进行裁剪。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-overflow-style.html" target="_blank" rel="noopener noreferrer">overflow-style<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定溢出元素的首选滚动方法。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-rotation.html" target="_blank" rel="noopener noreferrer">rotation<ExternalLinkIcon/></a></td>
<td style="text-align:left">围绕由 rotation-point 属性定义的点对元素进行旋转。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-rotation-point.html" target="_blank" rel="noopener noreferrer">rotation-point<ExternalLinkIcon/></a></td>
<td style="text-align:left">定义距离上左边框边缘的偏移点。</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>8、Flexble Box  (弹性盒子模型)  旧</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-align.html" target="_blank" rel="noopener noreferrer">box-align<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定如何对齐一个框的子元素</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-direction.html" target="_blank" rel="noopener noreferrer">box-direction<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定在哪个方向，显示一个框的子元素</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-flex.html" target="_blank" rel="noopener noreferrer">box-flex<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定一个框的子元素是否是灵活的或固定的大小</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-flex-group.html" target="_blank" rel="noopener noreferrer">box-flex-group<ExternalLinkIcon/></a></td>
<td style="text-align:left">指派灵活的元素到Flex组</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-lines.html" target="_blank" rel="noopener noreferrer">box-lines<ExternalLinkIcon/></a></td>
<td style="text-align:left">每当它在父框的空间运行时，是否指定将再上一个新的行列</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-ordinal-group.html" target="_blank" rel="noopener noreferrer">box-ordinal-group<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定一个框的子元素的显示顺序</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-orient.html" target="_blank" rel="noopener noreferrer">box-orient<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定一个框的子元素是否在水平或垂直方向应铺设</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-box-pack.html" target="_blank" rel="noopener noreferrer">box-pack<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定横向盒在垂直框的水平位置和垂直位置</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>9、Flexble Box (弹性盒子模型属性)  新</h3>
<table>
<thead>
<tr>
<th><a href="https://www.runoob.com/cssref/css3-pr-flex.html" target="_blank" rel="noopener noreferrer">flex<ExternalLinkIcon/></a></th>
<th>复合属性。设置或检索弹性盒模型对象的子元素如何分配空间。</th>
<th>3</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-flex-grow.html" target="_blank" rel="noopener noreferrer">flex-grow<ExternalLinkIcon/></a></td>
<td>设置或检索弹性盒的扩展比率。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-flex-shrink.html" target="_blank" rel="noopener noreferrer">flex-shrink<ExternalLinkIcon/></a></td>
<td>设置或检索弹性盒的收缩比率。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-flex-basis.html" target="_blank" rel="noopener noreferrer">flex-basis<ExternalLinkIcon/></a></td>
<td>设置或检索弹性盒伸缩基准值。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-flex-flow.html" target="_blank" rel="noopener noreferrer">flex-flow<ExternalLinkIcon/></a></td>
<td>复合属性。设置或检索弹性盒模型对象的子元素排列方式。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-flex-direction.html" target="_blank" rel="noopener noreferrer">flex-direction<ExternalLinkIcon/></a></td>
<td>该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-flex-wrap.html" target="_blank" rel="noopener noreferrer">flex-wrap<ExternalLinkIcon/></a></td>
<td>该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-align-content.html" target="_blank" rel="noopener noreferrer">align-content<ExternalLinkIcon/></a></td>
<td>在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-align-items.html" target="_blank" rel="noopener noreferrer">align-items<ExternalLinkIcon/></a></td>
<td>定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-align-self.html" target="_blank" rel="noopener noreferrer">align-self<ExternalLinkIcon/></a></td>
<td>定义flex子项单独在侧轴（纵轴）方向上的对齐方式。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-justify-content.html" target="_blank" rel="noopener noreferrer">justify-content<ExternalLinkIcon/></a></td>
<td>设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。</td>
<td>3</td>
</tr>
<tr>
<td><a href="https://www.runoob.com/cssref/css3-pr-order.html" target="_blank" rel="noopener noreferrer">order<ExternalLinkIcon/></a></td>
<td>设置或检索弹性盒模型对象的子元素出现的順序。</td>
<td>3</td>
</tr>
</tbody>
</table>
<h3>10、LineBox (线框属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">alignment-adjust</td>
<td style="text-align:left">允许更精确的元素的对齐方式</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">alignment-baseline</td>
<td style="text-align:left">其父级指定的内联级别的元素如何对齐</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">baseline-shift</td>
<td style="text-align:left">允许重新定位相对于dominant-baseline的dominant-baseline</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">dominant-baseline</td>
<td style="text-align:left">指定scaled-baseline-table</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">drop-initial-after-adjust</td>
<td style="text-align:left">设置下拉的主要连接点的初始对齐点</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">drop-initial-after-align</td>
<td style="text-align:left">校准行内的初始行的设置就是具有首字母的框使用初级连接点</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">drop-initial-before-adjust</td>
<td style="text-align:left">设置下拉的辅助连接点的初始对齐点</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">drop-initial-before-align</td>
<td style="text-align:left">校准行内的初始行的设置就是具有首字母的框使用辅助连接点</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">drop-initial-size</td>
<td style="text-align:left">控制局部的首字母下沉</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">drop-initial-value</td>
<td style="text-align:left">激活一个下拉式的初步效果</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">inline-box-align</td>
<td style="text-align:left">设置一个多行的内联块内的行具有前一个和后一个内联元素的对齐</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">line-stacking</td>
<td style="text-align:left">一个速记属性设置line-stacking-strategy, line-stacking-ruby,和line-stacking-shift属性</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">line-stacking-ruby</td>
<td style="text-align:left">设置包含Ruby注释元素的行对于块元素的堆叠方法</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">line-stacking-shift</td>
<td style="text-align:left">设置base-shift行中块元素包含元素的堆叠方法</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">line-stacking-strategy</td>
<td style="text-align:left">设置内部包含块元素的堆叠线框的堆叠方法</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">text-height</td>
<td style="text-align:left">行内框的文本内容区域设置block-progression维数</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>11、Padding (内边框属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-padding.html" target="_blank" rel="noopener noreferrer">padding<ExternalLinkIcon/></a></td>
<td style="text-align:left">在一个声明中设置所有填充属性</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-padding-bottom.html" target="_blank" rel="noopener noreferrer">padding-bottom<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的底填充</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-padding-left.html" target="_blank" rel="noopener noreferrer">padding-left<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的左填充</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-padding-right.html" target="_blank" rel="noopener noreferrer">padding-right<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的右填充</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-padding-top.html" target="_blank" rel="noopener noreferrer">padding-top<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的顶部填充</td>
<td style="text-align:left">1</td>
</tr>
</tbody>
</table>
<h3>12、margin （外边距属性 ）</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-margin.html" target="_blank" rel="noopener noreferrer">margin<ExternalLinkIcon/></a></td>
<td style="text-align:left">在一个声明中设置所有外边距属性</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-margin-bottom.html" target="_blank" rel="noopener noreferrer">margin-bottom<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的下外边距</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-margin-left.html" target="_blank" rel="noopener noreferrer">margin-left<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的左外边距</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-margin-right.html" target="_blank" rel="noopener noreferrer">margin-right<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的右外边距</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-margin-top.html" target="_blank" rel="noopener noreferrer">margin-top<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的上外边距</td>
<td style="text-align:left">1</td>
</tr>
</tbody>
</table>
<h3>13、Positioning (定位属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-pos-bottom.html" target="_blank" rel="noopener noreferrer">bottom<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置定位元素下外边距边界与其包含块下边界之间的偏移</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-class-clear.html" target="_blank" rel="noopener noreferrer">clear<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定元素的哪一侧不允许其他浮动元素</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-pos-clip.html" target="_blank" rel="noopener noreferrer">clip<ExternalLinkIcon/></a></td>
<td style="text-align:left">剪裁绝对定位元素</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-class-cursor.html" target="_blank" rel="noopener noreferrer">cursor<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定要显示的光标的类型（形状）</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-class-display.html" target="_blank" rel="noopener noreferrer">display<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定元素应该生成的框的类型</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-class-float.html" target="_blank" rel="noopener noreferrer">float<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定框是否应该浮动</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-pos-left.html" target="_blank" rel="noopener noreferrer">left<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置定位元素左外边距边界与其包含块左边界之间的偏移</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-pos-overflow.html" target="_blank" rel="noopener noreferrer">overflow<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定当内容溢出元素框时发生的事情</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-class-position.html" target="_blank" rel="noopener noreferrer">position<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定元素的定位类型</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-pos-right.html" target="_blank" rel="noopener noreferrer">right<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置定位元素右外边距边界与其包含块右边界之间的偏移</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-pos-top.html" target="_blank" rel="noopener noreferrer">top<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置定位元素的上外边距边界与其包含块上边界之间的偏移</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-class-visibility.html" target="_blank" rel="noopener noreferrer">visibility<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定元素是否可见</td>
<td style="text-align:left">2</td>
</tr>
</tbody>
</table>
<h3>14、Dimension (尺寸属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-dim-height.html" target="_blank" rel="noopener noreferrer">height<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的高度</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-dim-max-height.html" target="_blank" rel="noopener noreferrer">max-height<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的最大高度</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-dim-max-width.html" target="_blank" rel="noopener noreferrer">max-width<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的最大宽度</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-dim-min-height.html" target="_blank" rel="noopener noreferrer">min-height<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的最小高度</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-dim-min-width.html" target="_blank" rel="noopener noreferrer">min-width<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的最小宽度</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-dim-width.html" target="_blank" rel="noopener noreferrer">width<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素的宽度</td>
<td style="text-align:left">1</td>
</tr>
</tbody>
</table>
<h3>15、List (列表属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-list-style.html" target="_blank" rel="noopener noreferrer">list-style<ExternalLinkIcon/></a></td>
<td style="text-align:left">在一个声明中设置所有的列表属性</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-list-style-image.html" target="_blank" rel="noopener noreferrer">list-style-image<ExternalLinkIcon/></a></td>
<td style="text-align:left">将图象设置为列表项标记</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-list-style-position.html" target="_blank" rel="noopener noreferrer">list-style-position<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置列表项标记的放置位置</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-list-style-type.html" target="_blank" rel="noopener noreferrer">list-style-type<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置列表项标记的类型</td>
<td style="text-align:left">1</td>
</tr>
</tbody>
</table>
<h3>16、Table (表格属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border-collapse.html" target="_blank" rel="noopener noreferrer">border-collapse<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定是否合并表格边框</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-border-spacing.html" target="_blank" rel="noopener noreferrer">border-spacing<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定相邻单元格边框之间的距离</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-tab-caption-side.html" target="_blank" rel="noopener noreferrer">caption-side<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定表格标题的位置</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-tab-empty-cells.html" target="_blank" rel="noopener noreferrer">empty-cells<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定是否显示表格中的空单元格上的边框和背景</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-tab-table-layout.html" target="_blank" rel="noopener noreferrer">table-layout<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置用于表格的布局算法</td>
<td style="text-align:left">2</td>
</tr>
</tbody>
</table>
<h3>17、bookmark （媒体页面内容属性）</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">bookmark-label</td>
<td style="text-align:left">指定书签的标签</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">bookmark-level</td>
<td style="text-align:left">指定了书签级别</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">bookmark-target</td>
<td style="text-align:left">指定了书签链接的目标</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">float-offset</td>
<td style="text-align:left">在相反的方向推动浮动元素，他们一直具有浮动</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">hyphenate-after</td>
<td style="text-align:left">指定一个断字的单词断字字符后的最少字符数</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">hyphenate-before</td>
<td style="text-align:left">指定一个断字的单词断字字符前的最少字符数</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">hyphenate-character</td>
<td style="text-align:left">指定了当一个断字发生时，要显示的字符串</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">hyphenate-lines</td>
<td style="text-align:left">表示连续断字的行在元素的最大数目</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">hyphenate-resource</td>
<td style="text-align:left">外部资源指定一个逗号分隔的列表，可以帮助确定浏览器的断字点</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">hyphens</td>
<td style="text-align:left">设置如何分割单词以改善该段的布局</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">image-resolution</td>
<td style="text-align:left">指定了正确的图像分辨率</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">marks</td>
<td style="text-align:left">将crop and/or cross标志添加到文档</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">string-set</td>
<td style="text-align:left"></td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>18、Hyperlink (超链接属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-target.html" target="_blank" rel="noopener noreferrer">target<ExternalLinkIcon/></a></td>
<td style="text-align:left">简写属性设置target-name, target-new,和target-position属性</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-target-name.html" target="_blank" rel="noopener noreferrer">target-name<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定在何处打开链接（目标位置）</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-target-new.html" target="_blank" rel="noopener noreferrer">target-new<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定是否有新的目标链接打开一个新窗口或在现有窗口打开新标签</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-target-position.html" target="_blank" rel="noopener noreferrer">target-position<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定应该放置新的目标链接的位置</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>19、 Grid (网络属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-grid-columns.html" target="_blank" rel="noopener noreferrer">grid-columns<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定在网格中每列的宽度</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-grid-rows.html" target="_blank" rel="noopener noreferrer">grid-rows<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定在网格中每列的高度</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>20、Multi-column (多列属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-count.html" target="_blank" rel="noopener noreferrer">column-count<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定元素应该分为的列数</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-fill.html" target="_blank" rel="noopener noreferrer">column-fill<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定如何填充列</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-gap.html" target="_blank" rel="noopener noreferrer">column-gap<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定列之间的差距</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-rule.html" target="_blank" rel="noopener noreferrer">column-rule<ExternalLinkIcon/></a></td>
<td style="text-align:left">对于设置所有column-rule-*属性的简写属性</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-rule-color.html" target="_blank" rel="noopener noreferrer">column-rule-color<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定列之间的颜色规则</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-rule-style.html" target="_blank" rel="noopener noreferrer">column-rule-style<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定列之间的样式规则</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-rule-width.html" target="_blank" rel="noopener noreferrer">column-rule-width<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定列之间的宽度规则</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-span.html" target="_blank" rel="noopener noreferrer">column-span<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定元素应该跨越多少列</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-column-width.html" target="_blank" rel="noopener noreferrer">column-width<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定列的宽度</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-columns.html" target="_blank" rel="noopener noreferrer">columns<ExternalLinkIcon/></a></td>
<td style="text-align:left">缩写属性设置列宽和列数</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>21、Print (分页属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">orphans</td>
<td style="text-align:left">设置当元素内部发生分页时必须在页面底部保留的最少行数</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-print-pageba.html" target="_blank" rel="noopener noreferrer">page-break-after<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素后的分页行为</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-print-pagebb.html" target="_blank" rel="noopener noreferrer">page-break-before<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素前的分页行为</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-print-pagebi.html" target="_blank" rel="noopener noreferrer">page-break-inside<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置元素内部的分页行为</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left">widows</td>
<td style="text-align:left">设置当元素内部发生分页时必须在页面顶部保留的最少行数</td>
<td style="text-align:left">2</td>
</tr>
</tbody>
</table>
<h3>22、动画属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-keyframes.html" target="_blank" rel="noopener noreferrer">@keyframes<ExternalLinkIcon/></a></td>
<td style="text-align:left">定义一个动画,@keyframes定义的动画名称用来被animation-name所使用。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation.html" target="_blank" rel="noopener noreferrer">animation<ExternalLinkIcon/></a></td>
<td style="text-align:left">复合属性。检索或设置对象所应用的动画特效。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-name.html" target="_blank" rel="noopener noreferrer">animation-name<ExternalLinkIcon/></a></td>
<td style="text-align:left">检索或设置对象所应用的动画名称 ,必须与规则@keyframes配合使用，因为动画名称由@keyframes定义</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-duration.html" target="_blank" rel="noopener noreferrer">animation-duration<ExternalLinkIcon/></a></td>
<td style="text-align:left">检索或设置对象动画的持续时间</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-timing-function.html" target="_blank" rel="noopener noreferrer">animation-timing-function<ExternalLinkIcon/></a></td>
<td style="text-align:left">检索或设置对象动画的过渡类型</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-delay.html" target="_blank" rel="noopener noreferrer">animation-delay<ExternalLinkIcon/></a></td>
<td style="text-align:left">检索或设置对象动画的延迟时间</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html" target="_blank" rel="noopener noreferrer">animation-iteration-count<ExternalLinkIcon/></a></td>
<td style="text-align:left">检索或设置对象动画的循环次数</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-direction.html" target="_blank" rel="noopener noreferrer">animation-direction<ExternalLinkIcon/></a></td>
<td style="text-align:left">检索或设置对象动画在循环中是否反向运动</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-animation-play-state.html" target="_blank" rel="noopener noreferrer">animation-play-state<ExternalLinkIcon/></a></td>
<td style="text-align:left">检索或设置对象动画的状态</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>23、Speech (语音属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">mark</td>
<td style="text-align:left">缩写属性设置mark-before和mark-after属性</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">mark-after</td>
<td style="text-align:left">允许命名的标记连接到音频流</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">mark-before</td>
<td style="text-align:left">允许命名的标记连接到音频流</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">phonemes</td>
<td style="text-align:left">指定包含文本的相应元素中的一个音标发音</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">rest</td>
<td style="text-align:left">一个缩写属性设置rest-before和rest-after属性</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">rest-after</td>
<td style="text-align:left">一个元素的内容讲完之后，指定要休息一下或遵守韵律边界</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">rest-before</td>
<td style="text-align:left">一个元素的内容讲完之前，指定要休息一下或遵守韵律边界</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">voice-balance</td>
<td style="text-align:left">指定了左，右声道之间的平衡</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">voice-duration</td>
<td style="text-align:left">指定应采取呈现所选元素的内容的长度</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">voice-pitch</td>
<td style="text-align:left">指定平均说话的声音的音调（频率）</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">voice-pitch-range</td>
<td style="text-align:left">指定平均间距的变化</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">voice-rate</td>
<td style="text-align:left">控制语速</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">voice-stress</td>
<td style="text-align:left">指示着重力度</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">voice-volume</td>
<td style="text-align:left">语音合成是指波形输出幅度</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>24、Transition (过渡属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transition.html" target="_blank" rel="noopener noreferrer">transition<ExternalLinkIcon/></a></td>
<td style="text-align:left">此属性是 transition-property、transition-duration、transition-timing-function、transition-delay 的简写形式。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transition-property.html" target="_blank" rel="noopener noreferrer">transition-property<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置用来进行过渡的 CSS 属性。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transition-duration.html" target="_blank" rel="noopener noreferrer">transition-duration<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置过渡进行的时间长度。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transition-timing-function.html" target="_blank" rel="noopener noreferrer">transition-timing-function<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置过渡进行的时序函数。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transition-delay.html" target="_blank" rel="noopener noreferrer">transition-delay<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定过渡开始的时间。</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>25、2D/3D 转换属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transform.html" target="_blank" rel="noopener noreferrer">transform<ExternalLinkIcon/></a></td>
<td style="text-align:left">适用于2D或3D转换的元素</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transform-origin.html" target="_blank" rel="noopener noreferrer">transform-origin<ExternalLinkIcon/></a></td>
<td style="text-align:left">允许您更改转化元素位置</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-transform-style.html" target="_blank" rel="noopener noreferrer">transform-style<ExternalLinkIcon/></a></td>
<td style="text-align:left">3D空间中的指定如何嵌套元素</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-perspective.html" target="_blank" rel="noopener noreferrer">perspective<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定3D元素是如何查看透视图</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-perspective-origin.html" target="_blank" rel="noopener noreferrer">perspective-origin<ExternalLinkIcon/></a></td>
<td style="text-align:left">指定3D元素底部位置</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/css3-pr-backface-visibility.html" target="_blank" rel="noopener noreferrer">backface-visibility<ExternalLinkIcon/></a></td>
<td style="text-align:left">定义一个元素是否应该是可见的，不对着屏幕时</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>26、 Generated Content Properties (内容生成属性)</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-gen-content.html" target="_blank" rel="noopener noreferrer">content<ExternalLinkIcon/></a></td>
<td style="text-align:left">与 :before 以及 :after 伪元素配合使用，来插入生成内容</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-gen-counter-increment.html" target="_blank" rel="noopener noreferrer">counter-increment<ExternalLinkIcon/></a></td>
<td style="text-align:left">递增或递减一个或多个计数器</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-gen-counter-reset.html" target="_blank" rel="noopener noreferrer">counter-reset<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建或重置一个或多个计数器</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/cssref/pr-gen-quotes.html" target="_blank" rel="noopener noreferrer">quotes<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置嵌套引用的引号类型</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left">crop</td>
<td style="text-align:left">允许replaced元素只是作为一个对象代替整个对象的矩形区域</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">move-to</td>
<td style="text-align:left">从流中删除元素，然后在文档中后面的点上重新插入。</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">page-policy</td>
<td style="text-align:left">判定基于页面的给定元素的适用于计数器的字符串值</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<h3>27、 Ruby 属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ruby-align</td>
<td style="text-align:left">控制Ruby文本和Ruby基础内容相对彼此的文本对齐方式</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">ruby-overhang</td>
<td style="text-align:left">当Ruby文本超过Ruby的基础宽，确定ruby文本是否允许局部悬置任意相邻的文本，除了自己的基础</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">ruby-position</td>
<td style="text-align:left">它的base控制Ruby文本的位置</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left">ruby-span</td>
<td style="text-align:left">控制annotation 元素的跨越行为</td>
<td style="text-align:left">3</td>
</tr>
</tbody>
</table>
<p>纵有疾风起，人生不言弃。
选择了努力，就要持续坚持。</p>
<h2>在这介绍各种样式的实现</h2>
</div></template>
