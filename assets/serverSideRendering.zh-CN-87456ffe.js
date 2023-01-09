import{_ as t,p as o,f as c,h as d,M as s,q as n,S as a,aq as r,P as e}from"./vue-router.esm-bundler-aeae2b6c.js";const p={components:{}},i={class:"varlet-site-doc"},u=r('<h1>服务端渲染</h1><div class="card"><h3>介绍</h3><p>这里为您介绍在 <code>Nuxt</code> 中引入 <code>Varlet</code> 的基本方式。您可以引入整个 <code>Varlet</code>，或是根据需要仅引入部分组件。 我们先介绍如何引入完整的 <code>Varlet</code>。</p></div><div class="card"><h3>创建 Nuxt 项目</h3><p><code>Nuxt.js</code> 是一个基于 <code>Vue.js</code> 的服务端渲染应用框架，详细教程请移步 <a href="https://v3.nuxtjs.org/">Nuxt</a>。</p></div>',3),h={class:"card"},_=s("h3",null,"转译组件库",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { defineNuxtConfig } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'nuxt'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` defineNuxtConfig({
  `),s("span",{class:"hljs-attr"},"build"),e(`: {
    `),s("span",{class:"hljs-attr"},"transpile"),e(": ["),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(", "),s("span",{class:"hljs-string"},"'dayjs'"),e(`]
  }
})
`)])],-1),x={class:"card"},f=s("h3",null,"完整引入",-1),m=s("p",null,[s("code",null,"Nuxt"),e(" 会自动读取 "),s("code",null,"plugins"),e(" 目录下的文件并加载它们。 所以您可以在 "),s("code",null,"plugins"),e(" 目录下新建 "),s("code",null,"varlet.ts"),e(" 并写入以下内容：")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { defineNuxtPlugin } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'#app'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" Varlet "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style.js'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(" defineNuxtPlugin("),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},"nuxtApp"),e(") =>")]),e(` {
  nuxtApp.vueApp.use(Varlet)
})
`)])],-1),g=s("p",null,[e("以上代码便完成了 "),s("code",null,"Varlet"),e(" 的引入。需要注意的是，样式文件需要单独引入。")],-1),y={class:"card"},k=s("h3",null,"按需引入",-1),w=s("p",null,[e("按需引入避免了组件的全量导入，可以有效的减少发布包的大小。 每一个组件都是一个 "),s("code",null,"Vue插件"),e("，并由 "),s("code",null,"组件逻辑"),e(" 和 "),s("code",null,"样式文件"),e(" 组成，可按如下方式进行按需引入使用。")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { defineNuxtPlugin } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'#app'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" { Button } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(" defineNuxtPlugin("),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},"nuxtApp"),e(") =>")]),e(` {
  nuxtApp.vueApp.use(Button)
})
`)])],-1),V=s("div",{class:"card"},[s("h3",null,"示例仓库"),s("p",null,[s("a",{href:"https://github.com/varletjs/varlet-nuxt3-example"},"varlet-nuxt3-example")])],-1);function A(B,C,P,$,b,S){const l=o("var-site-code-example");return c(),d("div",i,[u,s("div",h,[_,n(l,null,{default:a(()=>[j]),_:1})]),s("div",x,[f,m,n(l,{"playground-ignore":""},{default:a(()=>[v]),_:1}),g]),s("div",y,[k,w,n(l,{"playground-ignore":""},{default:a(()=>[N]),_:1})]),V])}const z=t(p,[["render",A]]);export{z as default};
