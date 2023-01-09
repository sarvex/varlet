import{_ as e,p as d,f as l,h as n,M as t,q as c,S as o,P as s,aq as r}from"./vue-router.esm-bundler-aeae2b6c.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"索引栏",-1),m=t("div",{class:"card"},[t("h3",null,"介绍"),t("p",null,"用于跳转到页面指定位置。")],-1),j={class:"card"},b=t("h3",null,"基本使用",-1),u=t("p",null,[s("点击索引栏时，会自动跳转到对应的 "),t("code",null,"IndexAnchor"),s(" 锚点位置。")],-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),t("span",{class:"hljs-keyword"},"const"),s(" change = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"value"),s(") =>")]),s(` {
  `),t("span",{class:"hljs-built_in"},"console"),s(`.log(value)
}

onMounted(`),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-keyword"},"for"),s(" ("),t("span",{class:"hljs-keyword"},"let"),s(" i = "),t("span",{class:"hljs-number"},"0"),s("; i < "),t("span",{class:"hljs-number"},"26"),s(`; i++) {
    list.value.push(`),t("span",{class:"hljs-built_in"},"String"),s(".fromCharCode("),t("span",{class:"hljs-number"},"65"),s(` + i))
  }
})
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-index-bar"),s(),t("span",{class:"hljs-attr"},"duration"),s("="),t("span",{class:"hljs-string"},'"300"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"item in list"'),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-index-anchor"),s(),t("span",{class:"hljs-attr"},":index"),s("="),t("span",{class:"hljs-string"},'"item"'),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"var-index-anchor__example"'),s(">")]),s(`
        标题 {{ item }}
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-index-anchor"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} 文本"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} 文本"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} 文本"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-index-bar"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".var-index-anchor__example"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"42px"),s(`;
  `),t("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),t("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),t("span",{class:"hljs-attribute"},"padding"),s(": "),t("span",{class:"hljs-number"},"0"),s(),t("span",{class:"hljs-number"},"12px"),s(`;
  `),t("span",{class:"hljs-attribute"},"transition"),s(": all "),t("span",{class:"hljs-number"},"0.25s"),s(`;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#e7edf7"),s(`;
  `),t("span",{class:"hljs-attribute"},"color"),s(": "),t("span",{class:"hljs-number"},"#2e67ba"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v=r('<h2>API</h2><div class="card"><h3>属性</h3><h4>IndexBar Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>是否开启锚点吸顶</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>锚点吸顶时与顶部的距离</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>是否隐藏锚点列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>css-mode</code></td><td>开启原生 <code>css sticky</code> 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index 层级</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>索引字符高亮颜色</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>动画持续时间</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>IndexAnchor Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>index</code></td><td>索引字符</td><td><em>number | string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><h4>IndexBar Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击索引栏的字符时触发</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>当前高亮的索引字符变化时触发</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><h4>IndexBar Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>索引栏内容</td><td><code>-</code></td></tr></tbody></table><h4>IndexAnchor Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义索引字符</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><p>通过 ref 可以获取到 IndexBar 实例并调用实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>滚动到指定锚点</td><td><code>index: number | string</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>',6);function x(_,y,f,k,I,w){const a=d("var-site-code-example");return l(),n("div",i,[p,m,t("div",j,[b,u,c(a,null,{default:o(()=>[g]),_:1})]),v])}const z=e(h,[["render",x]]);export{z as default};
