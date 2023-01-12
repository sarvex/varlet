import{_ as n,p as c,f as a,h as r,M as e,q as l,S as o,aq as s,P as t}from"./vue-router.esm-bundler-596ad174.js";const i={components:{}},h={class:"varlet-site-doc"},u=s('<h1>组件库快速成型工具(@varlet/cli)</h1><div class="card"><h3>介绍</h3><p>开箱即用的 <code>Vue3组件库</code> 快速成型工具，提供了一系列命令和工具去解决组件库开发上的问题。</p></div><div class="card"><h3>特性</h3><ul><li>📦  开箱即用的组件库开发环境</li><li>📦  开箱即用的组件库编译工具，支持导出 <code>esm</code>, <code>cjs</code>, <code>umd</code> 三种模块代码</li><li>🛠️  基于配置文件的组件库文档站点，支持百度统计和主题定制</li><li>🛠️  支持 <code>sfc</code> 和 <code>tsx</code> 两种风格的组件库编写风格</li><li>📦  开箱即用的代码检查工具</li><li>📦  开箱即用的单元测试工具</li><li>📦  开箱即用的代码发布工具,同时发布到 <code>npm</code> 和 <code>github</code>, 并自动生成更新日志</li><li>💪  支持 <code>Typescript</code></li><li>💪  支持 <code>暗黑模式</code></li><li>🌍  支持 <code>国际化</code></li><li>🚀  基于 <code>pnpm</code></li></ul></div>',3),_={class:"card"},p=e("h3",null,"快速开始",-1),g=e("p",null,[e("code",null,"@varlet/cli"),t(" 内置了 "),e("code",null,"sfc"),t(" 和 "),e("code",null,"tsx"),t(" 两种风格的组件库项目模板，可以通过 "),e("code",null,"gen"),t(" 命令直接生成。 方便您直接进入组件库开发。")],-1),m=e("pre",{class:"hljs"},[e("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),v=s('<h2>高级定制</h2><div class="card"><h3>配置文件</h3><p>项目根目录下的 <code>varlet.config.mjs</code> 用来管理整个组件库项目的具体细节。 默认配置可查阅 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>。 也可以参考 <code>@varlet/ui</code> 的 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>组件库全名，会作为包名</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>组件库命名空间, 会作为组件前缀</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>开发服务器主机</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>开发服务器端口</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>文档中组件库的标题</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>文档中组件库的logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>文档默认语言</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>是否显示右侧手机预览</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>亮色模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>暗黑模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>文档代码片段样式相关</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>文档统计相关</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc 端文档结构配置</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile 端文档结构配置</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>moduleCompatible</code></td><td>模块兼容配置</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr></tbody></table></div>',2),f={class:"card"},j=e("h3",null,"自定义页面",-1),y=e("p",null,[t("如果想在组件库中插入其他页面，可以在项目根目录下的创建 "),e("code",null,"pages"),t(" 文件夹编写 vue 组件， 用来生成其他的页面。 目录结构如下：")],-1),b=e("pre",{class:"hljs"},[e("code",null,`|-- varlet-ui
  |-- src
  |-- docs
  |-- pages
    |-- sponsor
      |-- index.vue
    |-- contributor
      |-- locale
        |-- en-US.ts
      |-- index.vue
    |-- changelog
      |-- locale
        |-- zh-CN.ts
        |-- en-US.ts
      |-- index.vue
`)],-1),x=e("p",null,"生成的路由如下：",-1),k=e("pre",{class:"hljs"},[e("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),w={class:"card"},C=e("h3",null,"命令相关",-1),N=e("h4",null,"启动开发服务器",-1),V=e("pre",{class:"hljs"},[e("code",null,`varlet-cli dev
`)],-1),R=e("h4",null,"构建文档站点",-1),S=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build
`)],-1),z=e("h4",null,"预览文档站点",-1),T=e("pre",{class:"hljs"},[e("code",null,`varlet-cli preview
`)],-1),U=e("h4",null,"构建组件库",-1),$=e("pre",{class:"hljs"},[e("code",null,`varlet-cli compile
`)],-1),B=e("h4",null,"执行所有的单元测试",-1),q=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test
`)],-1),E=e("h4",null,"以 watch 模式执行单元测试",-1),L=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),M=e("h4",null,"检查代码",-1),O=e("pre",{class:"hljs"},[e("code",null,`varlet-cli lint
`)],-1),A=e("h4",null,"校验提交信息",-1),P=e("pre",{class:"hljs"},[e("code",null,`varlet-cli commit-lint
`)],-1),D=e("h4",null,"生成更新日志",-1),F=e("pre",{class:"hljs"},[e("code",null,`varlet-cli changelog
`)],-1),G=e("h4",null,"发布组件库",-1),H=e("pre",{class:"hljs"},[e("code",null,`varlet-cli release
`)],-1),I=e("h4",null,"生成一个项目模板",-1),J=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli gen
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
-n
--name
  项目名
-s
--sfc
  生成 sfc 风格的项目模板
-t
--tsx
  生成 tsx 格式项目
-l
--locale
  需要支持国际化
`)])],-1),K=e("h4",null,"创建组件模板文件",-1),Q=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli create
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
-n
--name
  组件名
-s
--sfc
  生成 sfc 风格的组件
-t
--tsx
  生成 tsx 风格的文件
-l
--locale
  需要支持国际化
`)])],-1),W=e("div",{class:"card"},[e("h3",null,"发布前注意"),e("ul",null,[e("li",null,[t("1."),e("code",null,"npm"),t(" 的仓库源必须指向 "),e("code",null,"npm"),t(" 官方镜像")]),e("li",null,[t("2.执行 "),e("code",null,"npm login"),t(" 进行登录")])])],-1),X={class:"card"},Y=e("h3",null,"模块适配对象",-1),Z=e("p",null,[t("一些外部依赖可能需要进行模块语法的适配，以达到可以正确编译到 "),e("code",null,"commonjs"),t(" 和 "),e("code",null,"esmodule"),t(" 的目的，例如 "),e("code",null,"dayjs"),t(" 的 "),e("code",null,"esmodule"),t(" 写法是:")],-1),ee=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" dayjs "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'dayjs/esm'"),t(`
`)])],-1),te=e("p",null,[t("而为了构建 "),e("code",null,"commonjs"),t(" 时的写法是:")],-1),de=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" * "),e("span",{class:"hljs-keyword"},"as"),t(" dayjs "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'dayjs'"),t(`
`)])],-1),le=e("p",null,[t("在项目中我们拥抱 "),e("code",null,"esmodule"),t(" 模块使用第一种写法，并做如下配置进行适配:")],-1),oe=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-comment"},"// varlet.config.mjs"),t(`
`),e("span",{class:"hljs-keyword"},"import"),t(" { defineConfig } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'@varlet/cli'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` defineConfig({
  `),e("span",{class:"hljs-attr"},"moduleCompatible"),t(`: {
    `),e("span",{class:"hljs-string"},`"import dayjs from 'dayjs/esm'\\n"`),t(": "),e("span",{class:"hljs-string"},`"import * as dayjs from 'dayjs'\\n"`),t(`
  }
})
`)])],-1);function se(ne,ce,ae,re,ie,he){const d=c("var-site-code-example");return a(),r("div",h,[u,e("div",_,[p,g,l(d,{"playground-ignore":""},{default:o(()=>[m]),_:1})]),v,e("div",f,[j,y,l(d,{"playground-ignore":""},{default:o(()=>[b]),_:1}),x,l(d,{"playground-ignore":""},{default:o(()=>[k]),_:1})]),e("div",w,[C,N,l(d,{"playground-ignore":""},{default:o(()=>[V]),_:1}),R,l(d,{"playground-ignore":""},{default:o(()=>[S]),_:1}),z,l(d,{"playground-ignore":""},{default:o(()=>[T]),_:1}),U,l(d,{"playground-ignore":""},{default:o(()=>[$]),_:1}),B,l(d,{"playground-ignore":""},{default:o(()=>[q]),_:1}),E,l(d,{"playground-ignore":""},{default:o(()=>[L]),_:1}),M,l(d,{"playground-ignore":""},{default:o(()=>[O]),_:1}),A,l(d,{"playground-ignore":""},{default:o(()=>[P]),_:1}),D,l(d,{"playground-ignore":""},{default:o(()=>[F]),_:1}),G,l(d,{"playground-ignore":""},{default:o(()=>[H]),_:1}),I,l(d,{"playground-ignore":""},{default:o(()=>[J]),_:1}),K,l(d,{"playground-ignore":""},{default:o(()=>[Q]),_:1})]),W,e("div",X,[Y,Z,l(d,{"playground-ignore":""},{default:o(()=>[ee]),_:1}),te,l(d,{"playground-ignore":""},{default:o(()=>[de]),_:1}),le,l(d,{"playground-ignore":""},{default:o(()=>[oe]),_:1})])])}const _e=n(i,[["render",se]]);export{_e as default};
