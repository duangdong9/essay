(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{506:function(t,r,a){"use strict";a.r(r);var e=a(18),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js的6种打断点的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的6种打断点的方式"}},[t._v("#")]),t._v(" JS的6种打断点的方式")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/QpmxaUupr7xMrJnG3FEpZA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/QpmxaUupr7xMrJnG3FEpZA"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Debugger 是前端开发很重要的一个工具，它可以在我们关心的代码处断住，通过单步运行来理清逻辑。而 Debugger 用的好坏与断点打得好坏有直接的关系。")]),t._v(" "),a("p",[t._v("Chrome Devtools 和 VSCode 都提供了 Debugger，它们支持的打断点的方式有 6 种。")]),t._v(" "),a("h2",{attrs:{id:"普通断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通断点"}},[t._v("#")]),t._v(" 普通断点")]),t._v(" "),a("p",[t._v("在想断住的那一行左侧单击一下就可以添加一个断点，运行到该处就会断住。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202112161454332",alt:"图片"}})]),t._v(" "),a("p",[t._v("这是最基础的断点方式，VSCode 和 Chrome Devtools 都支持这种断点。")]),t._v(" "),a("h2",{attrs:{id:"条件断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件断点"}},[t._v("#")]),t._v(" 条件断点")]),t._v(" "),a("p",[t._v("右键单击代码所在的行左侧，会出现一个下拉框，可以添加一个条件断点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202112161454001",alt:"图片"}})]),t._v(" "),a("p",[t._v("输入条件表达式，当运行到这一行代码并且表达式的值为真时就会断住，这比普通断点灵活些。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/YprkEU0TtGiaoJhx0hWa6JkibibbRFltmv0EwEUF5VPmSA8IV4HnKcrD6FYG4uoLsPVQfoDBDggRP8NAqmXmLvHDQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("p",[t._v("这种根据条件来断住的断点 VSCode 和 Chrome Devtools 也都支持。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/YprkEU0TtGiaoJhx0hWa6JkibibbRFltmv0u6msIEKO2ueURZEXpcFbBBuo8GVXHiaiciaxmibViaR9e7EJpyNvsHDtBqA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"dom-断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-断点"}},[t._v("#")]),t._v(" DOM 断点")]),t._v(" "),a("p",[t._v("在 Chrome Devtools 的 Elements 面板的对应元素上右键，选择 break on，可以添加一个 dom 断点，也就是当子树有变动、属性有变动、节点移除这三种情况的时候会断住。可以用来调试导致 dom 变化的代码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/YprkEU0TtGiaoJhx0hWa6JkibibbRFltmv0wniaYpGRlYA9Tia36ZDNA7otef4EwGNCTV19CP5YLia8USIcbVE3xgVpA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/YprkEU0TtGiaoJhx0hWa6JkibibbRFltmv0OibMLQf8sdO0wQhwHfSXKOSRcyoricgMbEKLCRFQ6pWRU0wfL77hNDLA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("p",[t._v("因为是涉及到 DOM 的调试，只有 Chrome Devtools 支持这种断点。")]),t._v(" "),a("h3",{attrs:{id:"url-断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-断点"}},[t._v("#")]),t._v(" URL 断点")]),t._v(" "),a("p",[t._v("在 Chrome Devtools 的 Sources 面板可以添加 XHR 的 url 断点，当 ajax 请求对应 url 时就会断住，可以用来调试请求相关的代码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/YprkEU0TtGiaoJhx0hWa6JkibibbRFltmv07bgm0qNswXGeVycL4CPadtVw9icicJAkHJ49XiaIAoiaxxGsia1sWXiaucicA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("p",[t._v("这个功能只有 Chrome Devtools 有。")]),t._v(" "),a("h2",{attrs:{id:"event-listener-断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-断点"}},[t._v("#")]),t._v(" Event Listener 断点")]),t._v(" "),a("p",[t._v("在 Chrome Devtools 的 Sources 面板还可以添加 Event Listener 的断点，指定当发生什么事件时断住，可以用来调试事件相关代码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/YprkEU0TtGiaoJhx0hWa6JkibibbRFltmv03CmD3knmGLOt4RvticteXytibFrOw1oia7XQjxZ7kaaZKicnCicsoBxiaicvA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("p",[t._v("这个功能也是只有 Chrome Devtools 有。")]),t._v(" "),a("h2",{attrs:{id:"异常断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常断点"}},[t._v("#")]),t._v(" 异常断点")]),t._v(" "),a("p",[t._v("在 VSCode 的 Debugger 面板勾选 Uncaught Exceptions 和 Caught Exceptions 可以添加异常断点，在抛出异常未被捕获或者被捕获时断柱。用来调试一些发生异常的代码时很有用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/YprkEU0TtGiaoJhx0hWa6JkibibbRFltmv0rHz7uL1yol5WZrpqN6m2xH7Vszo0OwbmEHQWnI07sXTudRibv94pw8w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("p",[t._v("这个功能只有 VSCode 有。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("Debugger 打断点的方式除了直接在对应代码行单击的普通断点以外，还有很多根据不同的情况来添加断点的方式。")]),t._v(" "),a("p",[t._v("一共有六种：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("普通断点")]),t._v("：运行到该处就断住")]),t._v(" "),a("li",[a("strong",[t._v("条件断点")]),t._v("：运行到该处且表达式为真就断住，比普通断点更灵活")]),t._v(" "),a("li",[a("strong",[t._v("DOM 断点")]),t._v("：DOM 的子树变动、属性变动、节点删除时断住，可以用来调试引起 DOM 变化的代码")]),t._v(" "),a("li",[a("strong",[t._v("URL 断点")]),t._v("：URL 匹配某个模式的时候断住，可以用来调试请求相关代码")]),t._v(" "),a("li",[a("strong",[t._v("Event Listener 断点")]),t._v("：触发某个事件监听器的时候断住，可以用来调试事件相关代码")]),t._v(" "),a("li",[a("strong",[t._v("异常断点")]),t._v("：抛出异常被捕获或者未被捕获的时候断住，可以用来调试发生异常的代码")])]),t._v(" "),a("p",[t._v("这些打断点方式大部分都是 Chrome Devtools 支持的（普通、条件、DOM、URL、Event Listener），也有的是 VSCode Debugger 支持的（普通、条件、异常）。")]),t._v(" "),a("p",[t._v("不同情况下的代码可以用不同的打断点方式，这样调试代码会高效很多。")])])}),[],!1,null,null,null);r.default=s.exports}}]);