import{_ as c,p as e,f as o,h as d,M as a,q as l,S as n,P as s,aq as p}from"./vue-router.esm-bundler.34317ebb.js";const r={components:{}},h={class:"varlet-site-doc"},j=a("h1",null,"\u63D0\u793A",-1),i=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u5F53\u5143\u7D20\u70B9\u51FB\u6216\u60AC\u505C\u65F6\u663E\u793A\u4E00\u4E2A\u63D0\u793A\uFF0C\u901A\u8FC7\u63A7\u5236\u5F39\u51FA\u4F4D\u7F6E\u548C\u504F\u79FB\u91CF\u6539\u53D8\u63D0\u793A\u7684\u663E\u793A\u4F4D\u7F6E\u3002")],-1),g={class:"card"},m=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u57FA\u672C\u4F7F\u7528"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},_=a("h3",null,"\u5185\u5BB9\u63D2\u69FD",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u5185\u5BB9\u63D2\u69FD"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},f=a("h3",null,"\u5F39\u51FA\u4F4D\u7F6E",-1),T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" placement = ref("),a("span",{class:"hljs-string"},"'top'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` placementOptions = [
  `),a("span",{class:"hljs-string"},"'top'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'right'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'left'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-end'"),s(`,
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},":hint"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(` 
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in placementOptions"'),s(` 
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(`
      `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"item"'),s(` 
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"placement-container"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(),a("span",{class:"hljs-attr"},":placement"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".placement-container"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"250px"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),k={class:"card"},x=a("h3",null,"\u4E3B\u9898\u8272",-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[54, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"default"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"default"'),s(">")]),s("\u9ED8\u8BA4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u4E3B\u8981"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s("\u4FE1\u606F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s("\u6210\u529F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s("\u8B66\u544A"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(">")]),s("\u5371\u9669"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},N=a("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#d81b60"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u81EA\u5B9A\u4E49\u989C\u8272"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},C=a("h3",null,"\u504F\u79FB\u91CF",-1),V=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"offset-x"),s(" \u548C "),a("code",null,"offset-y"),s(" \u8BBE\u7F6E "),a("code",null,"Tooltip"),s(" \u5F39\u51FA\u7684\u504F\u79FB\u91CF")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(),a("span",{class:"hljs-attr"},":offset-x"),s("="),a("span",{class:"hljs-string"},'"64"'),s(),a("span",{class:"hljs-attr"},":offset-y"),s("="),a("span",{class:"hljs-string"},'"-10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u504F\u79FB\u91CF"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},q=a("h3",null,"\u89E6\u53D1\u65B9\u5F0F",-1),O=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"trigger"),s(" \u6539\u53D8 "),a("code",null,"Tooltip"),s(" \u663E\u793A\u7684\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A "),a("code",null,"click"),s(" \u548C "),a("code",null,"hover")],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"hover"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u89E6\u53D1\u65B9\u5F0F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},I=a("h3",null,"\u6CE8\u518C\u4E8B\u4EF6",-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" open = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),a("span",{class:"hljs-string"},"'open'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" opened = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),a("span",{class:"hljs-string"},"'opened'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" close = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.warning("),a("span",{class:"hljs-string"},"'close'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" closed = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),a("span",{class:"hljs-string"},"'closed'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(`
    `),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(`
    @`),a("span",{class:"hljs-attr"},"open"),s("="),a("span",{class:"hljs-string"},'"open"'),s(`
    @`),a("span",{class:"hljs-attr"},"opened"),s("="),a("span",{class:"hljs-string"},'"opened"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"close"'),s(`
    @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},'"closed"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("\u6CE8\u518C\u4E8B\u4EF6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},F=a("h3",null,"\u7981\u7528",-1),G=a("p",null,[s("\u5728 "),a("code",null,"disabled"),s(" \u72B6\u6001\u4E0B\uFF0C"),a("code",null,"Tooltip"),s(" \u5C06\u4E0D\u518D\u88AB\u6253\u5F00\u3002")],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tooltip"),s(),a("span",{class:"hljs-attr"},"content"),s("="),a("span",{class:"hljs-string"},'"Tooltip"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("\u7981\u7528"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J=p('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A</td><td><em>string</em></td><td><code>false</code></td></tr><tr><td><code>content</code></td><td>\u663E\u793A\u7684\u5185\u5BB9</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>placement</code></td><td>\u5F39\u51FA\u4F4D\u7F6E</td><td><em>Placement</em></td><td><code>top</code></td></tr><tr><td><code>offset-x</code></td><td>x \u8F74\u504F\u79FB\u91CF\uFF0C \u76F8\u5BF9\u4E8E <code>Tooltip</code> \u5BF9\u9F50\u540E\u7684\u4F4D\u7F6E</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y \u8F74\u504F\u79FB\u91CF\uFF0C \u76F8\u5BF9\u4E8E <code>Tooltip</code> \u5BF9\u9F50\u540E\u7684\u4F4D\u7F6E</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528 Tooltip</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>click</code> <code>hover</code>, <code>click</code> \u4E3A\u70B9\u51FB\u65F6\u89E6\u53D1, <code>hover</code> \u4E3A\u60AC\u505C\u65F6\u89E6\u53D1</td><td><em>string</em></td><td><code>hover</code></td></tr></tbody></table></div><div class="card"><h3>Placement</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>top</code></td><td>\u9876\u90E8\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>top-start</code></td><td>\u9876\u90E8\u5DE6\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>top-end</code></td><td>\u9876\u90E8\u53F3\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>bottom</code></td><td>\u5E95\u90E8\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>bottom-start</code></td><td>\u5E95\u90E8\u5DE6\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>bottom-end</code></td><td>\u5E95\u90E8\u53F3\u4FA7\u4F4D\u7F6E</td></tr><tr><td><code>right</code></td><td>\u53F3\u4FA7\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>right-start</code></td><td>\u53F3\u4FA7\u4E0A\u65B9\u4F4D\u7F6E</td></tr><tr><td><code>right-end</code></td><td>\u53F3\u4FA7\u4E0B\u65B9\u4F4D\u7F6E</td></tr><tr><td><code>left</code></td><td>\u5DE6\u4FA7\u4E2D\u5FC3\u4F4D\u7F6E</td></tr><tr><td><code>left-start</code></td><td>\u5DE6\u4FA7\u4E0A\u65B9\u4F4D\u7F6E</td></tr><tr><td><code>left-end</code></td><td>\u5DE6\u4FA7\u4E0B\u65B9\u4F4D\u7F6E</td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00 <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td><code>Tooltip</code> \u9ED8\u8BA4\u63D2\u69FD\u5143\u7D20\u4EA7\u751F\u4F4D\u7F6E\u5927\u5C0F\u53D8\u5316\u65F6\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u8FDB\u884C\u91CD\u7ED8</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00 <code>Tooltip</code> \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00 <code>Tooltip</code> \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED <code>Tooltip</code> \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED <code>Tooltip</code> \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Tooltip</code> \u5173\u8054\u7684\u89E6\u53D1\u5143\u7D20</td><td><code>-</code></td></tr><tr><td><code>content</code></td><td><code>Tooltip</code> \u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--tooltip-opacity</code></td><td><code>0.9</code></td></tr><tr><td><code>--tooltip-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--tooltip-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--tooltip-padding</code></td><td><code>8px 16px</code></td></tr><tr><td><code>--tooltip-default-color</code></td><td><code>#616161</code></td></tr><tr><td><code>--tooltip-offset</code></td><td><code>10px</code></td></tr><tr><td><code>--tooltip-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tooltip-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--tooltip-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--tooltip-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--tooltip-danger-color</code></td><td><code>var(--color-danger)</code></td></tr></tbody></table></div>',7);function K(L,Q,R,U,W,X){const t=e("var-site-code-example");return o(),d("div",h,[j,i,a("div",g,[m,l(t,null,{default:n(()=>[u]),_:1})]),a("div",v,[_,l(t,null,{default:n(()=>[b]),_:1})]),a("div",y,[f,l(t,null,{default:n(()=>[T]),_:1})]),a("div",k,[x,l(t,null,{default:n(()=>[w]),_:1})]),a("div",S,[N,l(t,null,{default:n(()=>[P]),_:1})]),a("div",z,[C,V,l(t,null,{default:n(()=>[$]),_:1})]),a("div",B,[q,O,l(t,null,{default:n(()=>[A]),_:1})]),a("div",E,[I,l(t,null,{default:n(()=>[M]),_:1})]),a("div",D,[F,G,l(t,null,{default:n(()=>[H]),_:1})]),J])}const Z=c(r,[["render",K]]);export{Z as default};