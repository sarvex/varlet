import{_ as l,p as n,f as e,h as c,M as a,q as d,S as r,aq as o,P as s}from"./vue-router.esm-bundler-de96f312.js";const h={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"加载条",-1),j=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"页面顶部显示加载进度。")],-1),m={class:"card"},g=a("h3",null,"基本使用",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { LoadingBar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" hasCustomStyle = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"setStyle"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  LoadingBar.mergeConfig({
    `),a("span",{class:"hljs-attr"},"errorColor"),s(": hasCustomStyle.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'#ff8800'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": hasCustomStyle.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'#10afef'"),s(`,
    `),a("span",{class:"hljs-attr"},"height"),s(": hasCustomStyle.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'5px'"),s(`
  })

  hasCustomStyle.value = !hasCustomStyle.value
}

`),a("span",{class:"hljs-comment"},"// 移动端案例设置了偏移"),s(`
`),a("span",{class:"hljs-comment"},"// LoadingBar.mergeConfig({"),s(`
`),a("span",{class:"hljs-comment"},"//   top: '48px'"),s(`
`),a("span",{class:"hljs-comment"},"// })"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.start()"'),s(">")]),s("开始"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.finish()"'),s(">")]),s("结束"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.error()"'),s(">")]),s("错误"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"setStyle"'),s(">")]),s(`
      {{ hasCustomStyle ? '清除样式' : '设置样式' }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v=o('<h2>API</h2><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>LoadingBar.mergeConfig</code></td><td>合并覆盖加载条的默认样式</td><td><em>options: Options</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.start</code></td><td>开始加载</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>结束加载</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>加载失败</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>LoadingBar Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>加载条颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>加载失败时的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>加载条的高度</td><td><em>string|number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>加载条距离页面顶部的距离</td><td><em>string|number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table></div>',4);function y(b,_,f,k,C,B){const t=n("var-site-code-example");return e(),c("div",p,[i,j,a("div",m,[g,d(t,null,{default:r(()=>[u]),_:1})]),v])}const L=l(h,[["render",y]]);export{L as default};
