import{_ as e,p,f as o,h as c,M as s,q as l,S as t,P as n}from"./vue-router.esm-bundler-aeae2b6c.js";const r={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"按需引入",-1),u=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"按需引入避免了组件的全量导入，可以有效的减少发布包的大小。")],-1),j={class:"card"},d=s("h3",null,"手动引入",-1),m=s("p",null,[n("每一个组件都是一个 "),s("code",null,"Vue插件"),n("，并由 "),s("code",null,"组件逻辑"),n(" 和 "),s("code",null,"样式文件"),n(" 组成，手动引入的使用方式如下。")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`

createApp().use(Button)
`)])],-1),_=s("p",null,"或",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),y={class:"card"},k=s("h3",null,"自动引入",-1),f=s("p",null,[n("通过插件 "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" 和 "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" 实现组件自动按需导入。")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 安装插件"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add unplugin-vue-components unplugin-auto-import -D
`)])],-1),b=s("h4",null,"Vue CLI",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vue.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(" Components = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" AutoImport = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-auto-import/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" { VarletUIResolver } = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`)

`),s("span",{class:"hljs-built_in"},"module"),n(`.exports = {
  `),s("span",{class:"hljs-attr"},"configureWebpack"),n(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      Components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      }),
      AutoImport({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
      })
    ]
  }
}
`)])],-1),V=s("h4",null,"Vite",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" vue "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" autoImport "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vite'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
    vue(),
    components({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
    }),
    autoImport({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
    })
  ]
})
`)])],-1),C=s("h4",null,"Typescript 配置注意",-1),B=s("p",null,[n("为了得到良好的 IDE 语法高亮，请确保上述两个插件生成的类型声明文件被 "),s("code",null,"typescript"),n(" 识别，可在 "),s("code",null,"tsconfig.json"),n(" 中进行如下配置:")],-1),R=s("pre",{class:"hljs"},[s("code",null,[n(`{
  `),s("span",{class:"hljs-attr"},'"include"'),n(": ["),s("span",{class:"hljs-string"},'"auto-imports.d.ts"'),n(", "),s("span",{class:"hljs-string"},'"components.d.ts"'),n(`]
}
`)])],-1),U={class:"card"},D=s("h3",null,"手动引入和自动引入对比",-1),q=s("p",null,"手动引入。",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton, Snackbar } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/snackbar/style/index.js'"),n(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'你好!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),N=s("p",null,"自动引入。",-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'你好!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1);function $(E,T,z,L,M,O){const a=p("var-site-code-example");return o(),c("div",h,[i,u,s("div",j,[d,m,l(a,{"playground-ignore":""},{default:t(()=>[g]),_:1}),_,l(a,{"playground-ignore":""},{default:t(()=>[v]),_:1})]),s("div",y,[k,f,l(a,{"playground-ignore":""},{default:t(()=>[w]),_:1}),b,l(a,{"playground-ignore":""},{default:t(()=>[I]),_:1}),V,l(a,{"playground-ignore":""},{default:t(()=>[x]),_:1}),C,B,l(a,{"playground-ignore":""},{default:t(()=>[R]),_:1})]),s("div",U,[D,q,l(a,{"playground-ignore":""},{default:t(()=>[A]),_:1}),N,l(a,{"playground-ignore":""},{default:t(()=>[S]),_:1})])])}const W=e(r,[["render",$]]);export{W as default};
