import{_ as c,p as s,f as a,h as r,M as e,q as o,S as n,aq as l,P as d}from"./vue-router.esm-bundler-de96f312.js";const i={components:{}},h={class:"varlet-site-doc"},u=l('<h1>Components Library Tools(@varlet/cli)</h1><div class="card"><h3>Intro</h3><p>The out-of-the-box <code>Vue3 component library</code> rapid prototyping tool provides a series of commands and tools to solve the problem of component library development.</p></div><div class="card"><h3>Features</h3><ul><li>📦  Out-of-the-box component library development environment</li><li>📦  An out-of-the-box component library compilation tool that supports exporting <code>esm</code>, <code>cjs</code>, <code>umd</code> module codes</li><li>🛠️  Configuration file-based component library documentation site, support Baidu statistics and theme customization</li><li>🛠️  Supports both <code>sfc</code> and <code>tsx</code> styles for writing component libraries</li><li>📦  Out-of-the-box code inspection tool</li><li>📦  Out-of-the-box unit testing tools</li><li>📦  Out-of-the-box code publishing tool, publishes to both <code>npm</code> and <code>github</code>, and automatically generates changelogs</li><li>💪  Support for <code>Typescript</code></li><li>💪  Support <code>Dark Mode</code></li><li>🌍  Support <code>Internationalization</code></li><li>🚀  Based on <code>pnpm</code></li></ul></div>',3),p={class:"card"},m=e("h3",null,"Quickstart",-1),_=e("p",null,[e("code",null,"@varlet/cli"),d(" has built-in "),e("code",null,"sfc"),d(" and "),e("code",null,"tsx"),d(" style component library project templates, which can be generated directly by the "),e("code",null,"gen"),d(" command. It is convenient for you to directly enter the component library development.")],-1),g=e("pre",{class:"hljs"},[e("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),f=l('<h2>Advanced customization</h2><div class="card"><h3>Configuration file</h3><p>The <code>varlet.config.mjs</code> in the project root directory is used to manage the specific details of the entire component library project. The default configuration can be viewed <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>. Also refer to <code>@varlet/ui</code> <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>The full name of the component library, which will be used as the package name</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, which will be used as a component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the documentation</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the documentation</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Documentation default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to show the preview of the right mobile phone</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>Light Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>Dark Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Documentation snippet style related</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC-side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div>',2),v={class:"card"},b=e("h3",null,"Custom pages",-1),y=e("p",null,[d("If you want to insert other pages into the component library, you can create a "),e("code",null,"pages"),d(" folder in the project root directory to write a vue component to generate other pages. The directory structure is as follows:")],-1),j=e("pre",{class:"hljs"},[e("code",null,`|-- varlet-ui
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
      
`)],-1),x=e("p",null,"The resulting route is as follows:",-1),w=e("pre",{class:"hljs"},[e("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),T={class:"card"},C=e("h3",null,"Command related",-1),S=e("h4",null,"Start the development server",-1),D=e("pre",{class:"hljs"},[e("code",null,`varlet-cli dev
`)],-1),N=e("h4",null,"Build a documentation site",-1),k=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build
`)],-1),z=e("h4",null,"Preview documentation site",-1),V=e("pre",{class:"hljs"},[e("code",null,`varlet-cli preview
`)],-1),B=e("h4",null,"Compile component library",-1),G=e("pre",{class:"hljs"},[e("code",null,`varlet-cli compile
`)],-1),L=e("h4",null,"Execute all unit tests",-1),M=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test
`)],-1),O=e("h4",null,"Execute unit tests in watch mode",-1),R=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),E=e("h4",null,"Lint the code",-1),U=e("pre",{class:"hljs"},[e("code",null,`varlet-cli lint
`)],-1),A=e("h4",null,"Lint git commit message",-1),I=e("pre",{class:"hljs"},[e("code",null,`varlet-cli commit-lint
`)],-1),P=e("h4",null,"Generate changelog",-1),$=e("pre",{class:"hljs"},[e("code",null,`varlet-cli changelog
`)],-1),q=e("h4",null,"Release component library",-1),F=e("pre",{class:"hljs"},[e("code",null,`varlet-cli release
`)],-1),Q=e("h4",null,"Generate a project template",-1),W=e("pre",{class:"hljs"},[e("code",null,[d(`varlet-cli gen
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),d(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style project templates
-t
--tsx
  Generate tsx-style project templates
-l
--locale
  Need to support internationalization
`)])],-1),H=e("h4",null,"Create a component template file",-1),J=e("pre",{class:"hljs"},[e("code",null,[d(`varlet-cli create
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),d(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style component
-t
--tsx
  Generate tsx-style component
-l
--locale
  Need to support internationalization
`)])],-1),K=e("div",{class:"card"},[e("h3",null,"Note before publish"),e("ul",null,[e("li",null,[d("1."),e("code",null,"npm"),d(" repository registry must set to "),e("code",null,"npm"),d(" official mirror")]),e("li",null,[d("2.Execute "),e("code",null,"npm login"),d(" to log in")])])],-1);function X(Y,Z,ee,te,oe,ne){const t=s("var-site-code-example");return a(),r("div",h,[u,e("div",p,[m,_,o(t,{"playground-ignore":""},{default:n(()=>[g]),_:1})]),f,e("div",v,[b,y,o(t,{"playground-ignore":""},{default:n(()=>[j]),_:1}),x,o(t,{"playground-ignore":""},{default:n(()=>[w]),_:1})]),e("div",T,[C,S,o(t,{"playground-ignore":""},{default:n(()=>[D]),_:1}),N,o(t,{"playground-ignore":""},{default:n(()=>[k]),_:1}),z,o(t,{"playground-ignore":""},{default:n(()=>[V]),_:1}),B,o(t,{"playground-ignore":""},{default:n(()=>[G]),_:1}),L,o(t,{"playground-ignore":""},{default:n(()=>[M]),_:1}),O,o(t,{"playground-ignore":""},{default:n(()=>[R]),_:1}),E,o(t,{"playground-ignore":""},{default:n(()=>[U]),_:1}),A,o(t,{"playground-ignore":""},{default:n(()=>[I]),_:1}),P,o(t,{"playground-ignore":""},{default:n(()=>[$]),_:1}),q,o(t,{"playground-ignore":""},{default:n(()=>[F]),_:1}),Q,o(t,{"playground-ignore":""},{default:n(()=>[W]),_:1}),H,o(t,{"playground-ignore":""},{default:n(()=>[J]),_:1})]),K])}const le=c(i,[["render",X]]);export{le as default};
