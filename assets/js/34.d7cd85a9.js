(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{241:function(t,i,a){"use strict";a.r(i);var e=a(2),o=Object(e.a)({},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位","aria-hidden":"true"}},[t._v("#")]),t._v(" 定位")]),t._v(" "),a("ul",[a("li",[t._v("position")]),t._v(" "),a("li",[t._v("float")]),t._v(" "),a("li",[t._v("z-index")]),t._v(" "),a("li",[t._v("top / right / bottom /left")])]),t._v(" "),a("h2",{attrs:{id:"position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position","aria-hidden":"true"}},[t._v("#")]),t._v(" position")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("absolute")]),t._v(" "),a("td",[t._v("生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位，如果父级不是，会一直往上到 body，脱离文档流")])]),t._v(" "),a("tr",[a("td",[t._v("fixed")]),t._v(" "),a("td",[t._v("生成固定定位的元素，相对于浏览器窗口进行定位，脱离文档流。（老 IE 不支持）")])]),t._v(" "),a("tr",[a("td",[t._v("relative")]),t._v(" "),a("td",[t._v("生成相对定位的元素，相对于其正常位置进行定位，不脱离文档流。")])]),t._v(" "),a("tr",[a("td",[t._v("static")]),t._v(" "),a("td",[t._v("默认值。没有定位，元素出现在正常的文档流中（忽略 top, bottom, left, right 或者 z-index 声明）。")])]),t._v(" "),a("tr",[a("td",[t._v("inherit")]),t._v(" "),a("td",[t._v("规定应该从父元素继承 position 属性的值。")])]),t._v(" "),a("tr",[a("td",[t._v("sticky")]),t._v(" "),a("td",[t._v("粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。主要用于 scroll 事件的监听上。"),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fposition",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[a("strong",[t._v("absolute 的 containing block(容器块)计算方式跟正常流有什么不同？")])]),t._v(" "),a("p",[t._v("无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：")]),t._v(" "),a("ol",[a("li",[t._v("若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；")]),t._v(" "),a("li",[t._v("否则,则由这个祖先元素的 padding box 构成。")])]),t._v(" "),a("p",[t._v("如果都找不到，则为 initial containing block。")]),t._v(" "),a("p",[t._v("补充：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("static(默认的)/relative：简单说就是它的父元素的内容框（即去掉 padding 的部分）")])]),t._v(" "),a("li",[a("p",[t._v("absolute: 向上找最近的定位为 absolute/relative 的元素")])]),t._v(" "),a("li",[a("p",[t._v("fixed: 它的 containing block 一律为根元素(html/body)，根元素也是 initial containing block")])])]),t._v(" "),a("h2",{attrs:{id:"float"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float","aria-hidden":"true"}},[t._v("#")]),t._v(" float")]),t._v(" "),a("h2",{attrs:{id:"z-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-index","aria-hidden":"true"}},[t._v("#")]),t._v(" z-index")])])},[],!1,null,null,null);i.default=o.exports}}]);