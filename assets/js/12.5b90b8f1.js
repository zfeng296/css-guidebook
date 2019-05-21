(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{228:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),s("p",[t._v("块级格式化上下文（Block Fromatting Context，BFC），指一个隔离的独立的块级渲染区域，是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。")]),t._v(" "),s("blockquote",[s("p",[t._v("相关：IFC 为内联元素格式化上下文")])]),t._v(" "),s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("内部的元素会在垂直方向一个接一个地排列，可以理解为是 BFC 中的一个常规流。")]),t._v(" "),s("p",[t._v("每个元素的左外边距与包含块的左边界相接触（从左往右，否则相反），即使存在浮动也是如此，这说明 BFC 的子元素不会超出它的包含块")]),t._v(" "),s("ol",[s("li",[t._v("在 BFC 的垂直方向上，边距会发生重叠")]),t._v(" "),s("li",[t._v("BFC 区域不会与浮动区域重叠")]),t._v(" "),s("li",[t._v("BFC 在页面上是一个隔离的独立容器，与容器外的其他元素互不影响")]),t._v(" "),s("li",[t._v("计算 BFC 高度时，浮动子元素也会参与计算")])]),t._v(" "),s("h2",{attrs:{id:"实现方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现方法")]),t._v(" "),s("ol",[s("li",[t._v("根元素默认创建 BFC")]),t._v(" "),s("li",[t._v("浮动元素（元素 "),s("code",[t._v("float")]),t._v(" 不为 "),s("code",[t._v("none")]),t._v("）")]),t._v(" "),s("li",[t._v("绝对定位元素（元素 "),s("code",[t._v("position")]),t._v(" 为 "),s("code",[t._v("absolute")]),t._v(" 或 "),s("code",[t._v("fixed")]),t._v("）")]),t._v(" "),s("li",[t._v("行内块元素（元素 "),s("code",[t._v("display")]),t._v(" 为 "),s("code",[t._v("inline-block")]),t._v("）")]),t._v(" "),s("li",[t._v("表格单元格（元素 "),s("code",[t._v("display")]),t._v(" 为 "),s("code",[t._v("table-cell")]),t._v("，HTML 表格单元格默认为该值）")]),t._v(" "),s("li",[t._v("表格标题（元素 "),s("code",[t._v("display")]),t._v(" 为 "),s("code",[t._v("table-caption")]),t._v("，HTML 表格标题默认该值）")]),t._v(" "),s("li",[t._v("匿名表格单元格元素（"),s("code",[t._v("display")]),t._v(" 值是 "),s("code",[t._v("table")]),t._v("、"),s("code",[t._v("table-row")]),t._v("、"),s("code",[t._v("table-row-group")]),t._v("、"),s("code",[t._v("table-header-group")]),t._v("、"),s("code",[t._v("table-footer-group")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("overflow")]),t._v(" 值不为 "),s("code",[t._v("visible")])]),t._v(" "),s("li",[t._v("弹性元素（"),s("code",[t._v("display")]),t._v(" 为 "),s("code",[t._v("flex")]),t._v(" 或 "),s("code",[t._v("inline-flex")]),t._v(" 元素的直接子元素）")]),t._v(" "),s("li",[t._v("网格元素（"),s("code",[t._v("display")]),t._v(" 为 "),s("code",[t._v("grid")]),t._v(" 或 "),s("code",[t._v("inline-grid")]),t._v(" 元素的直接子元素）")])]),t._v(" "),s("h2",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),s("h3",{attrs:{id:"解决边距重叠问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决边距重叠问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决边距重叠问题")]),t._v(" "),s("p",[t._v("当相邻元素都设置了 "),s("code",[t._v("margin")]),t._v(" 边距时，重叠边缘的 "),s("code",[t._v("margin")]),t._v(" 会塌陷到其中的最大值，这种情况称作外边距折叠（Collapsing Margins）。")]),t._v(" "),s("p",[s("strong",[t._v("折叠结果的规则计算：")])]),t._v(" "),s("ul",[s("li",[t._v("两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。")]),t._v(" "),s("li",[t._v("两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。")]),t._v(" "),s("li",[t._v("两个外边距一正一负时，折叠结果是两者的相加的和。")])]),t._v(" "),s("p",[t._v("这种情况产生的根本原理就是两个相邻的元素均处于同一个 BFC，符合属于同一个 BFC 的两个相邻元素的 "),s("code",[t._v("margin")]),t._v(" 会发生重叠的规则。")]),t._v(" "),s("p",[t._v("为了不让边距重叠，可以给子元素加一个父元素，并设置该父元素为 BFC。")]),t._v(" "),s("h3",{attrs:{id:"清除浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动","aria-hidden":"true"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),s("p",[t._v("浮动元素是会脱离文档流的（绝对定位元素会脱离文档流）。如果一个没有高度或者 "),s("code",[t._v("height")]),t._v(" 是 "),s("code",[t._v("auto")]),t._v(" 的容器的子元素是浮动元素，则该容器的高度是不会被撑开的。我们通常会利用伪元素（"),s("code",[t._v(":after")]),t._v(" 或者 "),s("code",[t._v(":before")]),t._v("）来解决这个问题。BFC 能包含浮动，也能解决容器高度不会被撑开的问题。")]),t._v(" "),s("p",[t._v("通过给浮动元素的父元素设置 "),s("code",[t._v("overflow: hidden")]),t._v(" 可以清除子元素的浮动。")]),t._v(" "),s("p",[t._v("当在父元素中设置 "),s("code",[t._v("overflow: hidden")]),t._v(" 就会触发 BFC，所以其他内部的元素就不会影响外面的布局，BFC 就把浮动的子元素高度当做了自身内部的高度去处理溢出。")]),t._v(" "),s("h3",{attrs:{id:"侵占浮动元素的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#侵占浮动元素的位置","aria-hidden":"true"}},[t._v("#")]),t._v(" 侵占浮动元素的位置")]),t._v(" "),s("p",[t._v("设置元素为浮动元素后，浮动元素会脱离文档流，然后浮盖在文档流元素上。")]),t._v(" "),s("p",[t._v("为非浮动元素设置 BFC 环境，根据 BFC 的不与浮动元素重叠的规则，解决了侵占元素问题。")]),t._v(" "),s("p",[t._v("在两栏布局中，对比我们常规为非浮动元素或非定位元素设置 "),s("code",[t._v("margin")]),t._v(" 挤开的方法，其优点在于不需要去知道浮动或定位元素的宽度。")]),t._v(" "),s("h3",{attrs:{id:"避免文字环绕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免文字环绕","aria-hidden":"true"}},[t._v("#")]),t._v(" 避免文字环绕")]),t._v(" "),s("p",[s("code",[t._v("p")]),t._v(" 元素没有移位但它叠在了浮动元素之下，而 "),s("code",[t._v("p")]),t._v(" 元素的文本（行盒子）却移位了，行盒子水平变窄来给浮动元素腾出了空间。随着文本的增加，最后文本将环绕在浮动元素之下，因为那时候行盒子不再需要移位。")]),t._v(" "),s("p",[t._v("为 "),s("code",[t._v("p")]),t._v(" 元素创建一个新的 BFC 那它就不会再紧贴包含块的左侧了。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("floated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Floated div\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Quae hic ut ab perferendis sit quod architecto,\n        dolor debitis quam rem provident aspernatur tempora\n        expedita.\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"多列布局设定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多列布局设定","aria-hidden":"true"}},[t._v("#")]),t._v(" 多列布局设定")]),t._v(" "),s("p",[t._v("如果我们创建一个占满整个容器宽度的多列布局，在某些浏览器中最后一列有时候会掉到下一行。这可能是因为浏览器四舍五入了列宽从而所有列的总宽度会超出容器。但如果我们在多列布局中的最后一列里创建一个新的 BFC，它将总是占据其他列先占位完毕后剩下的空间。")]),t._v(" "),s("p",[s("strong",[t._v("示例")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Column 1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Column 2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Column 3"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".column")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 31.33%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 1%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  Establishing a new block formatting\n    context in the last column */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".column:last-child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("p",[s("strong",[t._v("参考资料：")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/libin-1/p/7098468.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 什么是 BFC"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);