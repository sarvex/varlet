import{_ as o,p as i,f as c,h as d,M as e,q as a,S as l,aq as r,P as t}from"./vue-router.esm-bundler-596ad174.js";const n={components:{}},p={class:"varlet-site-doc"},h=r('<h1>开发工具支持</h1><div class="card"><h3>介绍</h3><p>组件库提供了针对 <code>webstorm</code> 和 <code>vscode</code> 的组件高亮能力，通过插件和设置可以获得 <code>语法高亮</code>，<code>代码补全</code>，<code>文档说明</code>。 组件库为 <code>vscode</code> 单独提供了一个辅助插件，可以在插件市场下载。</p></div><div class="card"><h3>Webstorm</h3><p>通过设置 <code>Editor -&gt; General -&gt; Code Completion -&gt; Show the documentation popup in ___ ms</code> 开启组件库文档说明。</p><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_wb_setting.png" alt="webstorm setting"><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_wb.jpg" alt="webstorm highlight"></div>',3),_={class:"card"},g=e("h3",null,"VSCode",-1),v=e("p",null,[t("安装 "),e("code",null,"Volar"),t(" 插件, 并按照下面的方式配置 "),e("code",null,"tsconfig.json"),t("，可以在模板中得到类型提示。")],-1),u=e("pre",{class:"hljs"},[e("code",null,[t(`{
  `),e("span",{class:"hljs-attr"},'"compilerOptions"'),t(`: {
    `),e("span",{class:"hljs-attr"},'"types"'),t(": ["),e("span",{class:"hljs-string"},'"@varlet/ui/types"'),t(`]
  }
}
`)])],-1),m=e("img",{style:{width:"100%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/hl_vsc_setting.png",alt:"vscode setting"},null,-1),x=e("img",{style:{width:"100%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/hl_vsc.png",alt:"vscode highlight"},null,-1),w=e("div",{class:"card"},[e("h3",null,"VSCode 辅助插件"),e("p",null,[t("在 "),e("code",null,"vscode"),t(" 插件市场搜索 "),e("code",null,"varlet-vscode-extension"),t(" 安装即可, 在鼠标悬停在组件名上时, 可以通过链接直接前往该组件的文档地址。")]),e("img",{style:{width:"50%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/ext_vsc.png",alt:"vscode ext"}),e("img",{style:{width:"78%","margin-top":"10px","border-radius":"5px"},src:"https://varlet.gitee.io/varlet-ui/ext_vsc_link.png",alt:"vscode ext link"})],-1);function b(f,y,C,V,j,N){const s=i("var-site-code-example");return c(),d("div",p,[h,e("div",_,[g,v,a(s,{"playground-ignore":""},{default:l(()=>[u]),_:1}),m,x]),w])}const k=o(n,[["render",b]]);export{k as default};