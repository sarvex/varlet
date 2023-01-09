import{_ as c,p as e,f as r,h,M as a,q as t,S as n,P as s,aq as d}from"./vue-router.esm-bundler-aeae2b6c.js";const p={components:{}},o={class:"varlet-site-doc"},j=a("h1",null,"面包屑",-1),m=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"用于分级展示信息。")],-1),b={class:"card"},u=a("h3",null,"基本用法",-1),i=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("首页"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("一级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("二级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},v=a("h3",null,"分隔符",-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(),a("span",{class:"hljs-attr"},"separator"),s("="),a("span",{class:"hljs-string"},'"\\"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("首页"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("二级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("三级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},f=a("h3",null,"子级分隔符",-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("首页"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(),a("span",{class:"hljs-attr"},"separator"),s("="),a("span",{class:"hljs-string"},'"~"'),s(">")]),s("一级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("二级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},B=a("h3",null,"分隔符插槽",-1),S=a("p",null,"通过设置插槽可以使用自定义内容作为分隔符。",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
      首页
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"separator"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu-right"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 1px 4px 0"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
      一级
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"separator"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu-right"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 1px 4px 0"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("二级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},V=a("h3",null,"注册事件",-1),C=a("p",null,[s("通过 "),a("code",null,"@click"),s(" 注册面包屑的点击事件，最后一个面包屑不会触发点击事件。")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('首页')"`),s(">")]),s("首页"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('一级')"`),s(">")]),s("一级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('二级')"`),s(">")]),s("二级"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=d('<h2>API</h2><div class="card"><h3>属性</h3><h4>Breadcrumbs Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>separator</code></td><td>分隔符</td><td><em>string</em></td><td><code>/</code></td></tr></tbody></table><h4>Breadcrumb Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>separator</code></td><td>分隔符</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><h4>Breadcrumb Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击面包屑时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><h4>Breadcrumbs Slots</h4><table><thead><tr><th>参数</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义默认内容</td><td><code>-</code></td></tr></tbody></table><h4>Breadcrumb Slots</h4><table><thead><tr><th>参数</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义默认内容</td><td><code>-</code></td></tr><tr><td><code>separator</code></td><td>自定义分隔符内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>Breadcrumb Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--breadcrumb-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--breadcrumb-inactive-color</code></td><td><code>#888</code></td></tr><tr><td><code>--breadcrumb-separator-margin</code></td><td><code>0 10px</code></td></tr><tr><td><code>--breadcrumb-separator-font-size</code></td><td><code>14px</code></td></tr></tbody></table></div>',5);function z(E,q,A,I,M,T){const l=e("var-site-code-example");return r(),h("div",o,[j,m,a("div",b,[u,t(l,null,{default:n(()=>[i]),_:1})]),a("div",g,[v,t(l,null,{default:n(()=>[_]),_:1})]),a("div",y,[f,t(l,null,{default:n(()=>[k]),_:1})]),a("div",x,[B,S,t(l,null,{default:n(()=>[N]),_:1})]),a("div",P,[V,C,t(l,null,{default:n(()=>[$]),_:1})]),w])}const F=c(p,[["render",z]]);export{F as default};
