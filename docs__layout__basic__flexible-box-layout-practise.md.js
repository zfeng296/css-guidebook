(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[101,40,41],{"0Owb":function(e,n,t){"use strict";function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,"a",(function(){return a}))},"10Rq":function(e,n,t){"use strict";t.r(n);t("SkDD");var a=t("eZ87"),l=t("tJVT"),i=t("q1tI"),r=t.n(i),s=t("rZqG"),c=(t("YA/e"),e=>{var n=e.text;return r.a.createElement("div",{style:{marginBottom:8}},n)}),d=()=>{var e=Object(s["a"])({width:300}),n=Object(l["a"])(e,2),t=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{text:"\u7236\u5bb9\u5668\u5bbd\u5ea6"}),r.a.createElement(a["a"],{value:t.width,min:50,max:800,step:50,style:{width:300,margin:16},onChange:e=>i({width:e})}),r.a.createElement("br",null),r.a.createElement("div",{className:"flexible-responsive-layout"},r.a.createElement("div",{className:"parent",style:t},r.a.createElement("div",{className:"child"},"1"),r.a.createElement("div",{className:"child"},"2"),r.a.createElement("div",{className:"child"},"3"))))};n["default"]=()=>r.a.createElement(d,null)},EhLr:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),i=(t("b10d"),()=>l.a.createElement("div",{className:"flexible-auto-fill"},l.a.createElement("div",{className:"header"},"header"),l.a.createElement("div",{className:"main"},"main"),l.a.createElement("div",{className:"footer"},"footer")));n["default"]=()=>l.a.createElement(i,null)},JvQf:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),l=t("q1tI"),i=t.n(l),r=(t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd")),s=t.n(r),c=i.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("EhLr")),l=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(l)})),d=i.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("10Rq")),l=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(l)}));n["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"\u5f39\u6027\u5e03\u5c40\u5e94\u7528"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u5f39\u6027\u5e03\u5c40\u5e94\u7528"},i.a.createElement("span",{className:"icon icon-link"})),"\u5f39\u6027\u5e03\u5c40\u5e94\u7528"),i.a.createElement("h2",{id:"\u81ea\u52a8\u586b\u5145\u5269\u4f59\u7a7a\u95f4"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u81ea\u52a8\u586b\u5145\u5269\u4f59\u7a7a\u95f4"},i.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u52a8\u586b\u5145\u5269\u4f59\u7a7a\u95f4"),i.a.createElement("p",null,"\u5e38\u89c1\u5e03\u5c40\uff1a\u5f53\u5185\u5bb9\u533a\u57df\u9ad8\u5ea6\u4e0d\u591f\u7684\u65f6\u5019\uff0c",i.a.createElement("code",null,"footer")," \u4ecd\u7136\u9700\u8981\u56fa\u5b9a\u5728\u5e95\u90e8\u3002\u8fd9\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u7ed9 ",i.a.createElement("code",null,"content")," \u4f7f\u7528 ",i.a.createElement("code",null,"flex-grow: 1"),"\uff0c\u4f7f\u4ed6\u81ea\u52a8\u586b\u6ee1\u5269\u4f59\u7a7a\u95f4\u3002")),i.a.createElement(s.a,Object(a["a"])({source:{tsx:'import React from \'react\';\nimport \'./index.less\';\n\nconst App = () => (\n  // HTML \u7ed3\u6784\u5b9e\u73b0\n  <div className="flexible-auto-fill">\n    <div className="header">header</div>\n    <div className="main">main</div>\n    <div className="footer">footer</div>\n  </div>\n);\n\nexport default () => <App />;\n',jsx:'import React from \'react\';\nimport \'./index.less\';\n\nconst App = () => (\n  // HTML \u7ed3\u6784\u5b9e\u73b0\n  <div className="flexible-auto-fill">\n    <div className="header">header</div>\n    <div className="main">main</div>\n    <div className="footer">footer</div>\n  </div>\n);\n\nexport default () => <App />;\n'}},{path:"/_demos/index-9",title:"\u81ea\u52a8\u586b\u5145\u5269\u4f59\u7a7a\u95f4",desc:'<div class="markdown"><p>header \u548c footer \u56fa\u5b9a\u9ad8\u5ea6\uff0c\u5185\u5bb9\u533a\u81ea\u52a8\u586b\u5145\u5269\u4f59\u7a7a\u95f4</p></div>',dependencies:{},files:{"index.less":{path:"./index.less",content:"@import '../../../common.less';\n\n.flexible-auto-fill {\n  .flex-container;\n\n  display: flex;\n  flex-direction: column;\n  /* \u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u5c55\u793a\u8bbe\u7f6e\u4e86\u56fa\u5b9a\u9ad8\u5ea6\uff0c\u5982\u679c\u662f\u79fb\u52a8\u7aef\u53ef\u4ee5\u8bbe\u7f6e\u4e3a 100% \u6216 auto */\n  width: 120px;\n  height: 200px;\n\n  .header,\n  .main,\n  .footer {\n    .flex-item;\n    .centered;\n  }\n\n  .header,\n  .footer {\n    height: 30px;\n  }\n\n  .main {\n    flex-grow: 1;\n  }\n}\n"}}}),i.a.createElement(c,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"\u81ea\u9002\u5e94\u5e03\u5c40"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u81ea\u9002\u5e94\u5e03\u5c40"},i.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u9002\u5e94\u5e03\u5c40")),i.a.createElement(s.a,Object(a["a"])({source:{tsx:'import React from \'react\';\nimport { Slider, Radio } from \'antd\';\nimport { useSetState } from \'ahooks\';\nimport \'./index.less\';\n\nconst Label = ({ text }) => <div style={{ marginBottom: 8 }}>{text}</div>;\n\nconst App = () => {\n  const [style, setStyle] = useSetState({ width: 300 });\n  return (\n    <>\n      <Label text="\u7236\u5bb9\u5668\u5bbd\u5ea6" />\n      <Slider\n        value={style.width}\n        min={50}\n        max={800}\n        step={50}\n        style={{ width: 300, margin: 16 }}\n        onChange={val => setStyle({ width: val })}\n      />\n      <br />\n      <div className="flexible-responsive-layout">\n        {/* HTML \u7ed3\u6784\u5b9e\u73b0 */}\n        <div className="parent" style={style}>\n          <div className="child">1</div>\n          <div className="child">2</div>\n          <div className="child">3</div>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default () => <App />;\n',jsx:'import React from \'react\';\nimport { Slider } from \'antd\';\nimport { useSetState } from \'ahooks\';\nimport \'./index.less\';\n\nconst Label = ({ text }) => (\n  <div\n    style={{\n      marginBottom: 8,\n    }}\n  >\n    {text}\n  </div>\n);\n\nconst App = () => {\n  const [style, setStyle] = useSetState({\n    width: 300,\n  });\n  return (\n    <>\n      <Label text="\u7236\u5bb9\u5668\u5bbd\u5ea6" />\n      <Slider\n        value={style.width}\n        min={50}\n        max={800}\n        step={50}\n        style={{\n          width: 300,\n          margin: 16,\n        }}\n        onChange={(val) =>\n          setStyle({\n            width: val,\n          })\n        }\n      />\n      <br />\n      <div className="flexible-responsive-layout">\n        {/* HTML \u7ed3\u6784\u5b9e\u73b0 */}\n        <div className="parent" style={style}>\n          <div className="child">1</div>\n          <div className="child">2</div>\n          <div className="child">3</div>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default () => <App />;\n'}},{path:"/_demos/index-10",title:"\u81ea\u9002\u5e94\u5e03\u5c40",desc:"",CSSInDependencies:["antd/dist/antd.css"],dependencies:{antd:"4.6.4",ahooks:"2.6.1"},files:{"index.less":{path:"./index.less",content:"@import '../../../common.less';\n\n.flexible-responsive-layout {\n  .parent {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 300px;\n    height: 200px;\n    background-color: @bg-blue;\n  }\n\n  .child {\n    flex: 1 1 150px; /*  flex-grow: 1 \uff0c\u8868\u793a\u81ea\u52a8\u5ef6\u5c55\u5230\u6700\u5927\u5bbd\u5ea6 */\n    flex: 0 1 150px; /*  No stretching: */\n    margin: 5px;\n    background-color: @bg-yellow;\n\n    .centered;\n  }\n}\n"}}}),i.a.createElement(d,null)))}},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},"YA/e":function(e,n,t){},b10d:function(e,n,t){}}]);