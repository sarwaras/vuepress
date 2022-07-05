# CSS 模块
 ##  CSS 基础篇

 ### CSS 简介
前段时间没怎么用CSS样式，感觉忘了一些了。所以花了点时间整理了一下CSS模块~
这整理的本人简单还可以，也很方便，就像词典一样。以后不用担心记不住样式的名字了，忘了就拿出这个小词典翻翻就好了！
好的东西跟大家一起分享吖！   喜欢的盆友们可以点个红心鼓励一下哦！  有鼓励才会有更大的动力！   我就别废话了 赶紧说正事儿把


[参考文档](https://www.runoob.com/css/css-tutorial.html)：https://www.runoob.com/css/css-tutorial.html
### 1、backgroun

| *[background-color](https://www.runoob.com/cssref/pr-background-color.html)* | 指定要使用的背景颜色                             | 1    |
| ------------------------------------------------------------ | ------------------------------------------------ | ---- |
| *[background-position](https://www.runoob.com/cssref/pr-background-position.html)* | 指定背景图像的位置                               | 1    |
| *[background-size](https://www.runoob.com/cssref/css3-pr-background-size.html)* | 指定背景图片的大小                               | 3    |
| *[background-repeat](https://www.runoob.com/cssref/pr-background-repeat.html)* | 指定如何重复背景图像                             | 1    |
| *[background-origin](https://www.runoob.com/cssref/css3-pr-background-origin.html)* | 指定背景图像的定位区域                           | 3    |
| *[background-clip](https://www.runoob.com/cssref/css3-pr-background-clip.html)* | 指定背景图像的绘画区域                           | 3    |
| *[background-attachment](https://www.runoob.com/cssref/pr-background-attachment.html)* | 设置背景图像是否固定或者随着页面的其余部分滚动。 | 1    |
| *[background-image](https://www.runoob.com/cssref/pr-background-image.html)* | 指定要使用的一个或多个背景图像                   |      |

####  background-color:

background-color 属性设置一个元素的背景颜色。

元素的背景颜色是元素的总大小，包括填充和边界（但不包括边距）。

（可以使用 background-color 属性为元素设置背景色。这个属性接受任何合法的颜色值。）

| *color*     | 指定背景颜色。在[CSS颜色值](https://www.runoob.com/css/css-colors-legal.html)近可能的寻找一个颜色值的完整列表。 |
| ----------- | ------------------------------------------------------------ |
| transparent | 指定背景颜色应该是透明的。这是默认                           |
| inherit     | 指定背景颜色，应该从父元素继承                               |

#### background-position

**属性值**

| 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| left top left center left bottom right top right center right bottom center top center center center bottom | 如果仅指定一个关键字，其他值将会是"center"                   |
| *x% y%*                                                      | 第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％ |
| *xpos ypos*                                                  | 第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 [CSS单位](https://www.runoob.com/try/css-units.html)。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions |
| inherit                                                      | 指定background-position属性设置应该从父元素继承              |

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-0pJJGmE3-1646098238176)(C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220218112446709.png)]

#### background-size

指定背景图像的大小：

```CSS
div {    
background:url(img_flwr.gif);  
background-size:80px 60px;  
background-repeat:no-repeat; 

}
```

**语法：**

background-size: *length*|*percentage*|cover|contain;

| 值         | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| length     | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 **auto**(自动) |
| percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)" |
| cover      | 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 |
| contain    | 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。 |

#### background-repeat

设置如何平铺对象的 background-image 属性。

默认情况下，重复background-image的垂直和水平方向。

**属性值：**

| 值        | 说明                                            |
| :-------- | :---------------------------------------------- |
| repeat    | 背景图像将向垂直和水平方向重复。这是默认        |
| repeat-x  | 只有水平位置会重复背景图像                      |
| repeat-y  | 只有垂直位置会重复背景图像                      |
| no-repeat | background-image 不会重复                       |
| inherit   | 指定 background-repeat 属性设置应该从父元素继承 |

#### background-clip

background-clip属性指定背景绘制区域。

**语法**

background-clip: border-box|padding-box|content-box;

| 值          | 说明                                             |
| :---------- | :----------------------------------------------- |
| border-box  | 默认值。背景绘制在边框方框内（剪切成边框方框）。 |
| padding-box | 背景绘制在衬距方框内（剪切成衬距方框）。         |
| content-box | 背景绘制在内容方框内（剪切成内容方框）。         |

#### background-attachment

background-attachment设置背景图像是否固定或者随着页面的其余部分滚动。

**属性值**

| 值      | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| scroll  | 背景图片随着页面的滚动而滚动，这是默认的。                   |
| fixed   | 背景图片不会随着页面的滚动而滚动。                           |
| local   | 背景图片会随着元素内容的滚动而滚动。                         |
| initial | 设置该属性的默认值。 [阅读关于 *initial* 内容](https://www.runoob.com/cssref/css-initial.html) |
| inherit | 指定 background-attachment 的设置应该从父元素继承。 [阅读关于 *inherit* 内容](https://www.runoob.com/cssref/css-inherit.html) |

#### background-image 

background-image 属性设置一个元素的背景图像。

元素的背景是元素的总大小，包括填充和边界（但不包括边距）。

默认情况下，background-image放置在元素的左上角，并重复垂直和水平方向。

提示：请设置一种可用的背景颜色，这样的话，假如背景图像不可用，可以使用背景色带代替。

**属性值**

| 值                                                           | 说明                                      |
| :----------------------------------------------------------- | :---------------------------------------- |
| url(*'URL'*)                                                 | 图像的URL                                 |
| none                                                         | 无图像背景会显示。这是默认                |
| [linear-gradient()](https://www.runoob.com/cssref/func-linear-gradient.html) | 创建一个线性渐变的 "图像"(从上到下)       |
| [radial-gradient()](https://www.runoob.com/cssref/func-radial-gradient.html) | 用径向渐变创建 "图像"。 (center to edges) |
| [repeating-linear-gradient()](https://www.runoob.com/cssref/func-repeating-linear-gradient.html) | 创建重复的线性渐变 "图像"。               |
| [repeating-radial-gradient()](https://www.runoob.com/cssref/func-repeating-radial-gradient.html) | 创建重复的径向渐变 "图像"                 |
| inherit                                                      | 指定背景图像应该从父元素继承              |

### 2、color

| 属性                                                         | 描述                                       | CSS  |
| :----------------------------------------------------------- | :----------------------------------------- | :--- |
| color-profile                                                | 允许使用源的颜色配置文件的默认以外的规范   | 3    |
| [opacity](https://www.runoob.com/cssref/css3-pr-opacity.html) | 设置一个元素的透明度级别                   | 3    |
| rendering-intent                                             | 允许超过默认颜色配置文件渲染意向的其他规范 |      |

color：#ff0000         (文字的颜色)

```css
color：red ,green ,blue ,pink      //  第一种写法  (预定义的颜色值)
color:#ff0000         // 第二种写法   （十六进制表示）
color:rgb(255,0,0)     //  第三种写法  （RGB 代码）
```

background： #fffffff      (背景)

background-color: #F5F5F5     （背景的颜色）

### 3、font  字体属性

**font 特性：**

| 值                      | 描述                                                         |
| :---------------------- | :----------------------------------------------------------- |
| *font-style*            | 规定字体样式。参阅：[font-style](https://www.runoob.com/cssref/pr-font-font-style.html) 中可能的值。 |
| *font-variant*          | 规定字体异体。参阅：[font-variant](https://www.runoob.com/cssref/pr-font-font-variant.html) 中可能的值。 |
| *font-weight*           | 规定字体粗细。参阅：[font-weight](https://www.runoob.com/cssref/pr-font-weight.html) 中可能的值。 |
| *font-size/line-height* | 规定字体尺寸和行高。参阅：[font-size](https://www.runoob.com/cssref/pr-font-font-size.html) 和 [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) 中可能的值。 |
| *font-family*           | 规定字体系列。参阅：[font-family](https://www.runoob.com/cssref/pr-font-font-family.html) 中可能的值。 |
| caption                 | 定义被标题控件（比如按钮、下拉列表等）使用的字体。           |
| icon                    | 定义被图标标记使用的字体。                                   |
| menu                    | 定义被下拉列表使用的字体。                                   |
| message-box             | 定义被对话框使用的字体。                                     |
| small-caption           | caption 字体的小型版本。                                     |
| status-bar              | 定义被窗口状态栏使用的字体。                                 |

**属性定义及使用说明：**

font 简写属性在一个声明中设置所有字体属性。

可设置的属性是（按顺序）： "font-style font-variant font-weight font-size/line-height font-family"

font-size和font-family的值是必需的。如果缺少了其他值，默认值将被插入，如果有默认值的话。

**注意：** line - height属性设置行与行之间的空间。

font-style: italic    (斜体)     / normal 就是不倾斜的 

font-weight:  400     (粗体)     //   400 一般表示normal 或者不加粗，一般浏览器默认的字体；  700 表示粗体，相当于 font-weight:bold

font-size：15px  （字体大小）

font-family:  'Microsoft yahei' ;    (字体类型)

line-height: 28px    (行高)    //常用的单位是px   ，但在小程序或者uni-app 中通常用rpx;   1px==2rpx;

##### 字体复合属性

复合树形相当于 简写的方式：

比如：

```css
body {
font: font-style  font-weight  font-size/line-height  font-family
}
```

* 注意： 不能随意改变它们的顺序，并且各个属性之间用空格隔开；
* 不需要设置的树形可以省略，但必须保留**font-size**  和  **font-family** 属性，否则font属性不起作用！

在写样式的时候如下写就可以了：



 #### font-style

font-style属性指定文本的字体样式。

**属性值：**

| 值      | 描述                                   |
| :------ | :------------------------------------- |
| normal  | 默认值。浏览器显示一个标准的字体样式。 |
| italic  | 浏览器会显示一个斜体的字体样式。       |
| oblique | 浏览器会显示一个倾斜的字体样式。       |
| inherit | 规定应该从父元素继承字体样式。         |

#### font-variant （小型大写字母的字体显示文本）

font-variant 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小

font-variant 属性主要用于定义小型大写字母文本

**属性值：**

| 值         | 描述                                         |
| :--------- | :------------------------------------------- |
| normal     | 默认值。浏览器会显示一个标准的字体。         |
| small-caps | 浏览器会显示小型大写字母的字体。             |
| inherit    | 规定应该从父元素继承 font-variant 属性的值。 |

#### font-weight  (字体粗细)

font-weight 属性设置文本的粗细

**属性值：**

| 值                          | 描述                                                        |
| :-------------------------- | :---------------------------------------------------------- |
| normal                      | 默认值。定义标准的字符。                                    |
| bold                        | 定义粗体字符。                                              |
| bolder                      | 定义更粗的字符。                                            |
| lighter                     | 定义更细的字符。                                            |
| 100200300400500600700800900 | 定义由细到粗的字符。400 等同于 normal，而 700 等同于 bold。 |
| inherit                     | 规定应该从父元素继承字体的粗细。                            |

#### font-size  (字体大小)

font-size 属性用于设置字体大小。

```css
/* <absolute-size>，绝对大小值 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
 
/* <relative-size>，相对大小值 */
font-size: larger;
font-size: smaller;
 
/* <length>，长度值 */
font-size: 12px;
font-size: 0.8em;
 
/* <percentage>，百分比值 */
font-size: 80%;
 
font-size: inherit;
```

**属性值：**

| 值                                             | 描述                                                         |
| :--------------------------------------------- | :----------------------------------------------------------- |
| xx-smallx-smallsmallmediumlargex-largexx-large | 把字体的尺寸设置为不同的尺寸，从 xx-small 到 xx-large。默认值：medium。 |
| smaller                                        | 把 font-size 设置为比父元素更小的尺寸。                      |
| larger                                         | 把 font-size 设置为比父元素更大的尺寸。                      |
| *length*                                       | 把 font-size 设置为一个固定的值。                            |
| *%*                                            | 把 font-size 设置为基于父元素的一个百分比值。                |
| inherit                                        | 规定应该从父元素继承字体尺寸。                               |

#### line-height （行间距）

设置以百分比计的行高：.

**注意：** 负值是不允许的

**属性值：**

| 值       | 描述                                                 |
| :------- | :--------------------------------------------------- |
| normal   | 默认。设置合理的行间距。                             |
| *number* | 设置数字，此数字会与当前的字体尺寸相乘来设置行间距。 |
| *length* | 设置固定的行间距。                                   |
| *%*      | 基于当前字体尺寸的百分比行间距。                     |
| inherit  | 规定应该从父元素继承 line-height 属性的值。          |

#### font-family   （段落的字体）

font - family属性指定一个元素的字体。

font-family 可以把多个字体名称作为一个"回退"系统来保存。如果浏览器不支持第一个字体，则会尝试下一个。

有两种类型的字体系列名称：

- **family-name** - 指定的系列名称：具体字体的名称，比如："times"、"courier"、"arial"。
- **generic-family** - 通常字体系列名称：比如："serif"、"sans-serif"、"cursive"、"fantasy"、"monospace。

使用某种特定的字体系列（Geneva）完全取决于用户机器上该字体系列是否可用；这个属性没有指示任何字体下载。因此，强烈推荐使用一个通用字体系列名作为后路。

**注意：** 每个值用逗号分开。

**注意:** 如果字体名称包含空格，它必须加上引号。在HTML中使用"style"属性时，必须使用单引号。

**属性值：**

| 值                            | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| *family-name**generic-family* | 用于某个元素的字体族名称或/及类族名称的一个优先表。默认值：取决于浏览器。 |
| inherit                       | 规定应该从父元素继承字体系列。                               |

#### 其他font属性

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-jRIWzEeC-1646098238178)(C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220218135259444.png)]

### 4、text (文本属性)

| 属性                                                         | 说明                                                  | CSS  |
| :----------------------------------------------------------- | :---------------------------------------------------- | :--- |
| [color](https://www.runoob.com/cssref/pr-text-color.html)    | 设置文本的颜色                                        | 1    |
| [direction](https://www.runoob.com/cssref/pr-text-direction.html) | 规定文本的方向 / 书写方向                             | 2    |
| [letter-spacing](https://www.runoob.com/cssref/pr-text-letter-spacing.html) | 设置字符间距                                          | 1    |
| [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 设置行高                                              | 1    |
| [text-align](https://www.runoob.com/cssref/pr-text-text-align.html) | 规定文本的水平对齐方式                                | 1    |
| [text-decoration](https://www.runoob.com/cssref/pr-text-text-decoration.html) | 规定添加到文本的装饰效果                              | 1    |
| [text-indent](https://www.runoob.com/cssref/pr-text-text-indent.html) | 规定文本块首行的缩进                                  | 1    |
| [text-transform](https://www.runoob.com/cssref/pr-text-text-transform.html) | 控制文本的大小写                                      | 1    |
| unicode-bidi                                                 |                                                       | 2    |
| [vertical-align](https://www.runoob.com/cssref/pr-pos-vertical-align.html) | 设置元素的垂直对齐方式                                | 1    |
| [white-space](https://www.runoob.com/cssref/pr-text-white-space.html) | 设置怎样给一元素控件留白                              | 1    |
| [word-spacing](https://www.runoob.com/cssref/pr-text-word-spacing.html) | 设置单词间距                                          | 1    |
| [text-emphasis](https://www.runoob.com/cssref/css3-pr-text-emphasis.html) | 向元素的文本应用重点标记以及重点标记的前景色。        | 1    |
| [hanging-punctuation](https://www.runoob.com/cssref/css3-pr-hanging-punctuation.html) | 指定一个标点符号是否可能超出行框                      | 3    |
| [punctuation-trim](https://www.runoob.com/cssref/css3-pr-punctuation-trim.html) | 指定一个标点符号是否要去掉                            | 3    |
| [text-align-last](https://www.runoob.com/cssref/css3-pr-text-align-last.html) | 当 text-align 设置为 justify 时，最后一行的对齐方式。 | 3    |
| [text-justify](https://www.runoob.com/cssref/css3-pr-text-justify.html) | 当 text-align 设置为 justify 时指定分散对齐的方式。   | 3    |
| [text-outline](https://www.runoob.com/cssref/css3-pr-text-outline.html) | 设置文字的轮廓。                                      | 3    |
| [text-overflow](https://www.runoob.com/cssref/css3-pr-text-overflow.html) | 指定当文本溢出包含的元素，应该发生什么                | 3    |
| [text-shadow](https://www.runoob.com/cssref/css3-pr-text-shadow.html) | 为文本添加阴影                                        | 3    |
| [text-wrap](https://www.runoob.com/cssref/css3-pr-text-wrap.html) | 指定文本换行规则                                      | 3    |
| [word-break](https://www.runoob.com/cssref/css3-pr-word-break.html) | 指定非CJK文字的断行规则                               | 3    |
| [word-wrap](https://www.runoob.com/cssref/css3-pr-word-wrap.html) | 设置浏览器是否对过长的单词进行换行。                  | 3    |

### 5、Marquee (字幕属性)

| 属性               | 说明                     | CSS  |
| :----------------- | :----------------------- | :--- |
| marquee-direction  | 设置内容移动的方向       | 3    |
| marquee-play-count | 设置内容移动多少次       | 3    |
| marquee-speed      | 设置内容滚动的速度有多快 | 3    |
| marquee-style      | 设置内容移动的样式       | 3    |

### 6、border and Outline  (边框和轮廓属性)

| 属性                                                         | 描述                               | CSS  |
| :----------------------------------------------------------- | :--------------------------------- | :--- |
| [border](https://www.runoob.com/cssref/pr-border.html)       | 复合属性。设置对象边框的特性。     | 1    |
| [border-bottom](https://www.runoob.com/cssref/pr-border-bottom.html) | 复合属性。设置对象底部边框的特性。 | 1    |
| [border-bottom-color](https://www.runoob.com/cssref/pr-border-bottom-color.html) | 设置或检索对象的底部边框颜色。     | 1    |
| [border-bottom-style](https://www.runoob.com/cssref/pr-border-bottom-style.html) | 设置或检索对象的底部边框样式。     | 1    |
| [border-bottom-width](https://www.runoob.com/cssref/pr-border-bottom-width.html) | 设置或检索对象的底部边框宽度。     | 1    |
| [border-color](https://www.runoob.com/cssref/pr-border-color.html) | 置或检索对象的边框颜色。           | 1    |

|                                                              |                                    |      |
| ------------------------------------------------------------ | ---------------------------------- | ---- |
| [border-left](https://www.runoob.com/cssref/pr-border-left.html) | 复合属性。设置对象左边边框的特性。 | 1    |
| [border-left-color](https://www.runoob.com/cssref/pr-border-left-color.html) | 设置或检索对象的左边边框颜色。     | 1    |
| [border-left-style](https://www.runoob.com/cssref/pr-border-left-style.html) | 设置或检索对象的左边边框样式。     | 1    |
| [border-left-width](https://www.runoob.com/cssref/pr-border-left-width.html) | 设置或检索对象的左边边框宽度。     | 1    |
| [border-right](https://www.runoob.com/cssref/pr-border-right.html) | 复合属性。设置对象右边边框的特性。 | 1    |
| [border-right-color](https://www.runoob.com/cssref/pr-border-right-color.html) | 设置或检索对象的右边边框颜色。     |      |

| [border-right-style](https://www.runoob.com/cssref/pr-border-right-style.html) | 设置或检索对象的右边边框样式。     | 1    |
| ------------------------------------------------------------ | ---------------------------------- | ---- |
| [border-right-width](https://www.runoob.com/cssref/pr-border-right-width.html) | 设置或检索对象的右边边框宽度。     | 1    |
| [border-style](https://www.runoob.com/cssref/pr-border-style.html) | 设置或检索对象的边框样式。         | 1    |
| [border-top](https://www.runoob.com/cssref/pr-border-top.html) | 复合属性。设置对象顶部边框的特性。 | 1    |
| [border-top-color](https://www.runoob.com/cssref/pr-border-top-color.html) | 设置或检索对象的顶部边框颜色       | 1    |
| [border-top-style](https://www.runoob.com/cssref/pr-border-top-style.html) | 设置或检索对象的顶部边框样式。     | 1    |
| [border-top-width](https://www.runoob.com/cssref/pr-border-top-width.html) | 设置或检索对象的顶部边框宽度。     | 1    |
| [border-width](https://www.runoob.com/cssref/pr-border-width.html) | 设置或检索对象的边框宽度。         | 1    |

| [outline](https://www.runoob.com/cssref/pr-outline.html)     | 复合属性。设置或检索对象外的线条轮廓。                       | 2    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [outline-color](https://www.runoob.com/cssref/pr-outline-color.html) | 设置或检索对象外的线条轮廓的颜色。                           | 2    |
| [outline-style](https://www.runoob.com/cssref/pr-outline-style.html) | 设置或检索对象外的线条轮廓的样式。                           | 2    |
| [outline-width](https://www.runoob.com/cssref/pr-outline-width.html) | 设置或检索对象外的线条轮廓的宽度。                           | 2    |
| [border-bottom-left-radius](https://www.runoob.com/cssref/css3-pr-border-bottom-left-radius.html) | 设置或检索对象的左下角圆角边框。提供2个参数，2个参数以空格分隔，每个参数允许设置1个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数 | 3    |
| [border-bottom-right-radius](https://www.runoob.com/cssref/css3-pr-border-bottom-right-radius.html) | 设置或检索对象的右下角圆角边框。                             | 3    |
| [border-image](https://www.runoob.com/cssref/css3-pr-border-image.html) | 设置或检索对象的边框样式使用图像来填充。                     | 3    |
| [border-image-outset](https://www.runoob.com/cssref/css3-pr-border-image-outset.html) | 规定边框图像超过边框的量。                                   | 3    |
| [border-image-repeat](https://www.runoob.com/cssref/css3-pr-border-image-repeat.html) | 规定图像边框是否应该被重复（repeated）、拉伸（stretched）或铺满（rounded）。 | 3    |

| [border-image-slice](https://www.runoob.com/cssref/css3-pr-border-image-slice.html) | 规定图像边框的向内偏移。                                   | 3    |
| ------------------------------------------------------------ | ---------------------------------------------------------- | :--- |
| [border-image-source](https://www.runoob.com/cssref/css3-pr-border-image-source.html) | 规定要使用的图像，代替 border-style 属性中设置的边框样式。 | 3    |
| [border-image-width](https://www.runoob.com/cssref/css3-pr-border-image-width.html) | 规定图像边框的宽度。                                       | 3    |
| [border-radius](https://www.runoob.com/cssref/css3-pr-border-radius.html) | 设置或检索对象使用圆角边框。                               | 3    |
| [border-top-left-radius](https://www.runoob.com/cssref/css3-pr-border-top-left-radius.html) | 定义左上角边框的形状。                                     | 3    |
| [border-top-right-radius](https://www.runoob.com/cssref/css3-pr-border-top-right-radius.html) | 定义右上角边框的形状。                                     | 3    |
| box-decoration-break                                         | 规定行内元素被折行                                         | 3    |
| [box-shadow](https://www.runoob.com/cssref/css3-pr-box-shadow.html) | 向方框添加一个或多个阴影。                                 | 3    |

### 7、Box (盒子属性)

| 属性                                                         | 描述                                                        | CSS  |
| :----------------------------------------------------------- | :---------------------------------------------------------- | :--- |
| [overflow-x](https://www.runoob.com/cssref/css3-pr-overflow-x.html) | 如果内容溢出了元素内容区域，是否对内容的左/右边缘进行裁剪。 | 3    |
| [overflow-y](https://www.runoob.com/cssref/css3-pr-overflow-y.html) | 如果内容溢出了元素内容区域，是否对内容的上/下边缘进行裁剪。 | 3    |
| [overflow-style](https://www.runoob.com/cssref/css3-pr-overflow-style.html) | 规定溢出元素的首选滚动方法。                                | 3    |
| [rotation](https://www.runoob.com/cssref/css3-pr-rotation.html) | 围绕由 rotation-point 属性定义的点对元素进行旋转。          | 3    |
| [rotation-point](https://www.runoob.com/cssref/css3-pr-rotation-point.html) | 定义距离上左边框边缘的偏移点。                              | 3    |

### 8、Flexble Box  (弹性盒子模型)  旧

| 属性                                                         | 说明                                                 | CSS  |
| :----------------------------------------------------------- | :--------------------------------------------------- | :--- |
| [box-align](https://www.runoob.com/cssref/css3-pr-box-align.html) | 指定如何对齐一个框的子元素                           | 3    |
| [box-direction](https://www.runoob.com/cssref/css3-pr-box-direction.html) | 指定在哪个方向，显示一个框的子元素                   | 3    |
| [box-flex](https://www.runoob.com/cssref/css3-pr-box-flex.html) | 指定一个框的子元素是否是灵活的或固定的大小           | 3    |
| [box-flex-group](https://www.runoob.com/cssref/css3-pr-box-flex-group.html) | 指派灵活的元素到Flex组                               | 3    |
| [box-lines](https://www.runoob.com/cssref/css3-pr-box-lines.html) | 每当它在父框的空间运行时，是否指定将再上一个新的行列 | 3    |
| [box-ordinal-group](https://www.runoob.com/cssref/css3-pr-box-ordinal-group.html) | 指定一个框的子元素的显示顺序                         | 3    |
| [box-orient](https://www.runoob.com/cssref/css3-pr-box-orient.html) | 指定一个框的子元素是否在水平或垂直方向应铺设         | 3    |
| [box-pack](https://www.runoob.com/cssref/css3-pr-box-pack.html) | 指定横向盒在垂直框的水平位置和垂直位置               | 3    |

### 9、Flexble Box (弹性盒子模型属性)  新

| [flex](https://www.runoob.com/cssref/css3-pr-flex.html)      | 复合属性。设置或检索弹性盒模型对象的子元素如何分配空间。     | 3    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [flex-grow](https://www.runoob.com/cssref/css3-pr-flex-grow.html) | 设置或检索弹性盒的扩展比率。                                 | 3    |
| [flex-shrink](https://www.runoob.com/cssref/css3-pr-flex-shrink.html) | 设置或检索弹性盒的收缩比率。                                 | 3    |
| [flex-basis](https://www.runoob.com/cssref/css3-pr-flex-basis.html) | 设置或检索弹性盒伸缩基准值。                                 | 3    |
| [flex-flow](https://www.runoob.com/cssref/css3-pr-flex-flow.html) | 复合属性。设置或检索弹性盒模型对象的子元素排列方式。         | 3    |
| [flex-direction](https://www.runoob.com/cssref/css3-pr-flex-direction.html) | 该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。 | 3    |
| [flex-wrap](https://www.runoob.com/cssref/css3-pr-flex-wrap.html) | 该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。 | 3    |
| [align-content](https://www.runoob.com/cssref/css3-pr-align-content.html) | 在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。 | 3    |
| [align-items](https://www.runoob.com/cssref/css3-pr-align-items.html) | 定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。 | 3    |
| [align-self](https://www.runoob.com/cssref/css3-pr-align-self.html) | 定义flex子项单独在侧轴（纵轴）方向上的对齐方式。             | 3    |
| [justify-content](https://www.runoob.com/cssref/css3-pr-justify-content.html) | 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。       | 3    |
| [order](https://www.runoob.com/cssref/css3-pr-order.html)    | 设置或检索弹性盒模型对象的子元素出现的順序。                 | 3    |

### 10、LineBox (线框属性)

| 属性                       | 说明                                                         | CSS  |
| :------------------------- | :----------------------------------------------------------- | :--- |
| alignment-adjust           | 允许更精确的元素的对齐方式                                   | 3    |
| alignment-baseline         | 其父级指定的内联级别的元素如何对齐                           | 3    |
| baseline-shift             | 允许重新定位相对于dominant-baseline的dominant-baseline       | 3    |
| dominant-baseline          | 指定scaled-baseline-table                                    | 3    |
| drop-initial-after-adjust  | 设置下拉的主要连接点的初始对齐点                             | 3    |
| drop-initial-after-align   | 校准行内的初始行的设置就是具有首字母的框使用初级连接点       | 3    |
| drop-initial-before-adjust | 设置下拉的辅助连接点的初始对齐点                             | 3    |
| drop-initial-before-align  | 校准行内的初始行的设置就是具有首字母的框使用辅助连接点       | 3    |
| drop-initial-size          | 控制局部的首字母下沉                                         | 3    |
| drop-initial-value         | 激活一个下拉式的初步效果                                     | 3    |
| inline-box-align           | 设置一个多行的内联块内的行具有前一个和后一个内联元素的对齐   | 3    |
| line-stacking              | 一个速记属性设置line-stacking-strategy, line-stacking-ruby,和line-stacking-shift属性 | 3    |
| line-stacking-ruby         | 设置包含Ruby注释元素的行对于块元素的堆叠方法                 | 3    |
| line-stacking-shift        | 设置base-shift行中块元素包含元素的堆叠方法                   | 3    |
| line-stacking-strategy     | 设置内部包含块元素的堆叠线框的堆叠方法                       | 3    |
| text-height                | 行内框的文本内容区域设置block-progression维数                | 3    |

### 11、Padding (内边框属性)

| 属性                                                         | 说明                         | CSS  |
| :----------------------------------------------------------- | :--------------------------- | :--- |
| [padding](https://www.runoob.com/cssref/pr-padding.html)     | 在一个声明中设置所有填充属性 | 1    |
| [padding-bottom](https://www.runoob.com/cssref/pr-padding-bottom.html) | 设置元素的底填充             | 1    |
| [padding-left](https://www.runoob.com/cssref/pr-padding-left.html) | 设置元素的左填充             | 1    |
| [padding-right](https://www.runoob.com/cssref/pr-padding-right.html) | 设置元素的右填充             | 1    |
| [padding-top](https://www.runoob.com/cssref/pr-padding-top.html) | 设置元素的顶部填充           | 1    |

### 12、margin （外边距属性 ）

| 属性                                                         | 说明                           | CSS  |
| :----------------------------------------------------------- | :----------------------------- | :--- |
| [margin](https://www.runoob.com/cssref/pr-margin.html)       | 在一个声明中设置所有外边距属性 | 1    |
| [margin-bottom](https://www.runoob.com/cssref/pr-margin-bottom.html) | 设置元素的下外边距             | 1    |
| [margin-left](https://www.runoob.com/cssref/pr-margin-left.html) | 设置元素的左外边距             | 1    |
| [margin-right](https://www.runoob.com/cssref/pr-margin-right.html) | 设置元素的右外边距             | 1    |
| [margin-top](https://www.runoob.com/cssref/pr-margin-top.html) | 设置元素的上外边距             | 1    |

### 13、Positioning (定位属性)

| 属性                                                         | 说明                                                 | CSS  |
| :----------------------------------------------------------- | :--------------------------------------------------- | :--- |
| [bottom](https://www.runoob.com/cssref/pr-pos-bottom.html)   | 设置定位元素下外边距边界与其包含块下边界之间的偏移   | 2    |
| [clear](https://www.runoob.com/cssref/pr-class-clear.html)   | 规定元素的哪一侧不允许其他浮动元素                   | 1    |
| [clip](https://www.runoob.com/cssref/pr-pos-clip.html)       | 剪裁绝对定位元素                                     | 2    |
| [cursor](https://www.runoob.com/cssref/pr-class-cursor.html) | 规定要显示的光标的类型（形状）                       | 2    |
| [display](https://www.runoob.com/cssref/pr-class-display.html) | 规定元素应该生成的框的类型                           | 1    |
| [float](https://www.runoob.com/cssref/pr-class-float.html)   | 规定框是否应该浮动                                   | 1    |
| [left](https://www.runoob.com/cssref/pr-pos-left.html)       | 设置定位元素左外边距边界与其包含块左边界之间的偏移   | 2    |
| [overflow](https://www.runoob.com/cssref/pr-pos-overflow.html) | 规定当内容溢出元素框时发生的事情                     | 2    |
| [position](https://www.runoob.com/cssref/pr-class-position.html) | 规定元素的定位类型                                   | 2    |
| [right](https://www.runoob.com/cssref/pr-pos-right.html)     | 设置定位元素右外边距边界与其包含块右边界之间的偏移   | 2    |
| [top](https://www.runoob.com/cssref/pr-pos-top.html)         | 设置定位元素的上外边距边界与其包含块上边界之间的偏移 | 2    |
| [visibility](https://www.runoob.com/cssref/pr-class-visibility.html) | 规定元素是否可见                                     | 2    |

### 14、Dimension (尺寸属性)

| 属性                                                         | 描述               | CSS  |
| :----------------------------------------------------------- | :----------------- | :--- |
| [height](https://www.runoob.com/cssref/pr-dim-height.html)   | 设置元素的高度     | 1    |
| [max-height](https://www.runoob.com/cssref/pr-dim-max-height.html) | 设置元素的最大高度 | 2    |
| [max-width](https://www.runoob.com/cssref/pr-dim-max-width.html) | 设置元素的最大宽度 | 2    |
| [min-height](https://www.runoob.com/cssref/pr-dim-min-height.html) | 设置元素的最小高度 | 2    |
| [min-width](https://www.runoob.com/cssref/pr-dim-min-width.html) | 设置元素的最小宽度 | 2    |
| [width](https://www.runoob.com/cssref/pr-dim-width.html)     | 设置元素的宽度     | 1    |

### 15、List (列表属性)

| 属性                                                         | 说明                           | CSS  |
| :----------------------------------------------------------- | :----------------------------- | :--- |
| [list-style](https://www.runoob.com/cssref/pr-list-style.html) | 在一个声明中设置所有的列表属性 | 1    |
| [list-style-image](https://www.runoob.com/cssref/pr-list-style-image.html) | 将图象设置为列表项标记         | 1    |
| [list-style-position](https://www.runoob.com/cssref/pr-list-style-position.html) | 设置列表项标记的放置位置       | 1    |
| [list-style-type](https://www.runoob.com/cssref/pr-list-style-type.html) | 设置列表项标记的类型           | 1    |

### 16、Table (表格属性)

| 属性                                                         | 说明                                       | CSS  |
| :----------------------------------------------------------- | :----------------------------------------- | :--- |
| [border-collapse](https://www.runoob.com/cssref/pr-border-collapse.html) | 规定是否合并表格边框                       | 2    |
| [border-spacing](https://www.runoob.com/cssref/pr-border-spacing.html) | 规定相邻单元格边框之间的距离               | 2    |
| [caption-side](https://www.runoob.com/cssref/pr-tab-caption-side.html) | 规定表格标题的位置                         | 2    |
| [empty-cells](https://www.runoob.com/cssref/pr-tab-empty-cells.html) | 规定是否显示表格中的空单元格上的边框和背景 | 2    |
| [table-layout](https://www.runoob.com/cssref/pr-tab-table-layout.html) | 设置用于表格的布局算法                     | 2    |

### 17、bookmark （媒体页面内容属性）

| 属性                | 说明                                                       | CSS  |
| :------------------ | :--------------------------------------------------------- | :--- |
| bookmark-label      | 指定书签的标签                                             | 3    |
| bookmark-level      | 指定了书签级别                                             | 3    |
| bookmark-target     | 指定了书签链接的目标                                       | 3    |
| float-offset        | 在相反的方向推动浮动元素，他们一直具有浮动                 | 3    |
| hyphenate-after     | 指定一个断字的单词断字字符后的最少字符数                   | 3    |
| hyphenate-before    | 指定一个断字的单词断字字符前的最少字符数                   | 3    |
| hyphenate-character | 指定了当一个断字发生时，要显示的字符串                     | 3    |
| hyphenate-lines     | 表示连续断字的行在元素的最大数目                           | 3    |
| hyphenate-resource  | 外部资源指定一个逗号分隔的列表，可以帮助确定浏览器的断字点 | 3    |
| hyphens             | 设置如何分割单词以改善该段的布局                           | 3    |
| image-resolution    | 指定了正确的图像分辨率                                     | 3    |
| marks               | 将crop and/or cross标志添加到文档                          | 3    |
| string-set          |                                                            | 3    |

### 18、Hyperlink (超链接属性)

| 属性                                                         | 说明                                                       | CSS  |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :--- |
| [target](https://www.runoob.com/cssref/css3-pr-target.html)  | 简写属性设置target-name, target-new,和target-position属性  | 3    |
| [target-name](https://www.runoob.com/cssref/css3-pr-target-name.html) | 指定在何处打开链接（目标位置）                             | 3    |
| [target-new](https://www.runoob.com/cssref/css3-pr-target-new.html) | 指定是否有新的目标链接打开一个新窗口或在现有窗口打开新标签 | 3    |
| [target-position](https://www.runoob.com/cssref/css3-pr-target-position.html) | 指定应该放置新的目标链接的位置                             | 3    |

### 19、 Grid (网络属性)

| 属性                                                         | 说明                   | CSS  |
| :----------------------------------------------------------- | :--------------------- | :--- |
| [grid-columns](https://www.runoob.com/cssref/css3-pr-grid-columns.html) | 指定在网格中每列的宽度 | 3    |
| [grid-rows](https://www.runoob.com/cssref/css3-pr-grid-rows.html) | 指定在网格中每列的高度 | 3    |

### 20、Multi-column (多列属性)

| 属性                                                         | 说明                                    | CSS  |
| :----------------------------------------------------------- | :-------------------------------------- | :--- |
| [column-count](https://www.runoob.com/cssref/css3-pr-column-count.html) | 指定元素应该分为的列数                  | 3    |
| [column-fill](https://www.runoob.com/cssref/css3-pr-column-fill.html) | 指定如何填充列                          | 3    |
| [column-gap](https://www.runoob.com/cssref/css3-pr-column-gap.html) | 指定列之间的差距                        | 3    |
| [column-rule](https://www.runoob.com/cssref/css3-pr-column-rule.html) | 对于设置所有column-rule-*属性的简写属性 | 3    |
| [column-rule-color](https://www.runoob.com/cssref/css3-pr-column-rule-color.html) | 指定列之间的颜色规则                    | 3    |
| [column-rule-style](https://www.runoob.com/cssref/css3-pr-column-rule-style.html) | 指定列之间的样式规则                    | 3    |
| [column-rule-width](https://www.runoob.com/cssref/css3-pr-column-rule-width.html) | 指定列之间的宽度规则                    | 3    |
| [column-span](https://www.runoob.com/cssref/css3-pr-column-span.html) | 指定元素应该跨越多少列                  | 3    |
| [column-width](https://www.runoob.com/cssref/css3-pr-column-width.html) | 指定列的宽度                            | 3    |
| [columns](https://www.runoob.com/cssref/css3-pr-columns.html) | 缩写属性设置列宽和列数                  | 3    |

### 21、Print (分页属性)

| 属性                                                         | 说明                                                 | CSS  |
| :----------------------------------------------------------- | :--------------------------------------------------- | :--- |
| orphans                                                      | 设置当元素内部发生分页时必须在页面底部保留的最少行数 | 2    |
| [page-break-after](https://www.runoob.com/cssref/pr-print-pageba.html) | 设置元素后的分页行为                                 | 2    |
| [page-break-before](https://www.runoob.com/cssref/pr-print-pagebb.html) | 设置元素前的分页行为                                 | 2    |
| [page-break-inside](https://www.runoob.com/cssref/pr-print-pagebi.html) | 设置元素内部的分页行为                               | 2    |
| widows                                                       | 设置当元素内部发生分页时必须在页面顶部保留的最少行数 | 2    |

### 22、动画属性

| 属性                                                         | 描述                                                         | CSS  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--- |
| [@keyframes](https://www.runoob.com/cssref/css3-pr-animation-keyframes.html) | 定义一个动画,@keyframes定义的动画名称用来被animation-name所使用。 | 3    |
| [animation](https://www.runoob.com/cssref/css3-pr-animation.html) | 复合属性。检索或设置对象所应用的动画特效。                   | 3    |
| [animation-name](https://www.runoob.com/cssref/css3-pr-animation-name.html) | 检索或设置对象所应用的动画名称 ,必须与规则@keyframes配合使用，因为动画名称由@keyframes定义 | 3    |
| [animation-duration](https://www.runoob.com/cssref/css3-pr-animation-duration.html) | 检索或设置对象动画的持续时间                                 | 3    |
| [animation-timing-function](https://www.runoob.com/cssref/css3-pr-animation-timing-function.html) | 检索或设置对象动画的过渡类型                                 | 3    |
| [animation-delay](https://www.runoob.com/cssref/css3-pr-animation-delay.html) | 检索或设置对象动画的延迟时间                                 | 3    |
| [animation-iteration-count](https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html) | 检索或设置对象动画的循环次数                                 | 3    |
| [animation-direction](https://www.runoob.com/cssref/css3-pr-animation-direction.html) | 检索或设置对象动画在循环中是否反向运动                       | 3    |
| [animation-play-state](https://www.runoob.com/cssref/css3-pr-animation-play-state.html) | 检索或设置对象动画的状态                                     | 3    |

### 23、Speech (语音属性)

| 属性              | 说明                                                 | CSS  |
| :---------------- | :--------------------------------------------------- | :--- |
| mark              | 缩写属性设置mark-before和mark-after属性              | 3    |
| mark-after        | 允许命名的标记连接到音频流                           | 3    |
| mark-before       | 允许命名的标记连接到音频流                           | 3    |
| phonemes          | 指定包含文本的相应元素中的一个音标发音               | 3    |
| rest              | 一个缩写属性设置rest-before和rest-after属性          | 3    |
| rest-after        | 一个元素的内容讲完之后，指定要休息一下或遵守韵律边界 | 3    |
| rest-before       | 一个元素的内容讲完之前，指定要休息一下或遵守韵律边界 | 3    |
| voice-balance     | 指定了左，右声道之间的平衡                           | 3    |
| voice-duration    | 指定应采取呈现所选元素的内容的长度                   | 3    |
| voice-pitch       | 指定平均说话的声音的音调（频率）                     | 3    |
| voice-pitch-range | 指定平均间距的变化                                   | 3    |
| voice-rate        | 控制语速                                             | 3    |
| voice-stress      | 指示着重力度                                         | 3    |
| voice-volume      | 语音合成是指波形输出幅度                             | 3    |

### 24、Transition (过渡属性)

| 属性                                                         | 说明                                                         | CSS  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--- |
| [transition](https://www.runoob.com/cssref/css3-pr-transition.html) | 此属性是 transition-property、transition-duration、transition-timing-function、transition-delay 的简写形式。 | 3    |
| [transition-property](https://www.runoob.com/cssref/css3-pr-transition-property.html) | 设置用来进行过渡的 CSS 属性。                                | 3    |
| [transition-duration](https://www.runoob.com/cssref/css3-pr-transition-duration.html) | 设置过渡进行的时间长度。                                     | 3    |
| [transition-timing-function](https://www.runoob.com/cssref/css3-pr-transition-timing-function.html) | 设置过渡进行的时序函数。                                     | 3    |
| [transition-delay](https://www.runoob.com/cssref/css3-pr-transition-delay.html) | 指定过渡开始的时间。                                         | 3    |

### 25、2D/3D 转换属性

| 属性                                                         | 说明                                       | CSS  |
| :----------------------------------------------------------- | :----------------------------------------- | :--- |
| [transform](https://www.runoob.com/cssref/css3-pr-transform.html) | 适用于2D或3D转换的元素                     | 3    |
| [transform-origin](https://www.runoob.com/cssref/css3-pr-transform-origin.html) | 允许您更改转化元素位置                     | 3    |
| [transform-style](https://www.runoob.com/cssref/css3-pr-transform-style.html) | 3D空间中的指定如何嵌套元素                 | 3    |
| [perspective](https://www.runoob.com/cssref/css3-pr-perspective.html) | 指定3D元素是如何查看透视图                 | 3    |
| [perspective-origin](https://www.runoob.com/cssref/css3-pr-perspective-origin.html) | 指定3D元素底部位置                         | 3    |
| [backface-visibility](https://www.runoob.com/cssref/css3-pr-backface-visibility.html) | 定义一个元素是否应该是可见的，不对着屏幕时 | 3    |

### 26、 Generated Content Properties (内容生成属性)

| 属性                                                         | 说明                                                   | CSS  |
| :----------------------------------------------------------- | :----------------------------------------------------- | :--- |
| [content](https://www.runoob.com/cssref/pr-gen-content.html) | 与 :before 以及 :after 伪元素配合使用，来插入生成内容  | 2    |
| [counter-increment](https://www.runoob.com/cssref/pr-gen-counter-increment.html) | 递增或递减一个或多个计数器                             | 2    |
| [counter-reset](https://www.runoob.com/cssref/pr-gen-counter-reset.html) | 创建或重置一个或多个计数器                             | 2    |
| [quotes](https://www.runoob.com/cssref/pr-gen-quotes.html)   | 设置嵌套引用的引号类型                                 | 2    |
| crop                                                         | 允许replaced元素只是作为一个对象代替整个对象的矩形区域 | 3    |
| move-to                                                      | 从流中删除元素，然后在文档中后面的点上重新插入。       | 3    |
| page-policy                                                  | 判定基于页面的给定元素的适用于计数器的字符串值         | 3    |

### 27、 Ruby 属性

| 属性          | 说明                                                         | CSS  |
| :------------ | :----------------------------------------------------------- | :--- |
| ruby-align    | 控制Ruby文本和Ruby基础内容相对彼此的文本对齐方式             | 3    |
| ruby-overhang | 当Ruby文本超过Ruby的基础宽，确定ruby文本是否允许局部悬置任意相邻的文本，除了自己的基础 | 3    |
| ruby-position | 它的base控制Ruby文本的位置                                   | 3    |
| ruby-span     | 控制annotation 元素的跨越行为                                | 3    |


:danger: 
纵有疾风起，人生不言弃。
选择了努力，就要持续坚持。

 ## 在这介绍各种样式的实现

 #  高级
 