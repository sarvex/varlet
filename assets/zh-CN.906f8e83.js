import{_ as l,p as n,f as e,h as c,M as a,q as d,S as r,aq as o,P as s}from"./vue-router.esm-bundler.efb0b0dc.js";const h={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"\u52A0\u8F7D\u6761",-1),j=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u9875\u9762\u9876\u90E8\u663E\u793A\u52A0\u8F7D\u8FDB\u5EA6\u3002")],-1),g={class:"card"},m=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" ref "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { LoadingBar, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" isClear = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

LoadingBar({
  `),a("span",{class:"hljs-attr"},"top"),s(": "),a("span",{class:"hljs-string"},"'48px'"),s(`
})

`),a("span",{class:"hljs-keyword"},"const"),s(" setStyle = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  LoadingBar({
    `),a("span",{class:"hljs-attr"},"errorColor"),s(": isClear.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'#ff8800'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": isClear.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'#10afef'"),s(`,
    `),a("span",{class:"hljs-attr"},"height"),s(": isClear.value ? "),a("span",{class:"hljs-literal"},"undefined"),s(" : "),a("span",{class:"hljs-string"},"'5px'"),s(`
  })

  isClear.value = !isClear.value

  Snackbar.success(`),a("span",{class:"hljs-string"},"'success'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.start()"'),s(">")]),s("\u5F00\u59CB"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.finish()"'),s(">")]),s("\u7ED3\u675F"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"LoadingBar.error()"'),s(">")]),s("\u9519\u8BEF"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"setStyle"'),s(">")]),s(`
    {{ isClear ? '\u6E05\u9664\u6837\u5F0F' : '\u8BBE\u7F6E\u6837\u5F0F' }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(),a("span",{class:"hljs-attr"},"scoped"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"less"'),s(">")]),a("span",{class:"css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".var-button"),s(` {
    `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"11px"),s(`;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b=o('<h2>API</h2><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>LoadingBar</code></td><td>\u8BBE\u7F6E\u52A0\u8F7D\u6761\u7684\u6837\u5F0F</td><td><em>options: Options</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.start</code></td><td>\u5F00\u59CB\u52A0\u8F7D</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>\u7ED3\u675F\u52A0\u8F7D</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>\u52A0\u8F7D\u5931\u8D25</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>LoadingBar Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>\u52A0\u8F7D\u6761\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>\u52A0\u8F7D\u6761\u7684\u9AD8\u5EA6</td><td><em>string|number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>\u52A0\u8F7D\u8DDD\u79BB\u9875\u9762\u9876\u90E8\u7684\u8DDD\u79BB</td><td><em>string|number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table></div>',4);function v(_,y,f,k,B,C){const t=n("var-site-code-example");return e(),c("div",p,[i,j,a("div",g,[m,d(t,null,{default:r(()=>[u]),_:1})]),b])}const L=l(h,[["render",v]]);export{L as default};
