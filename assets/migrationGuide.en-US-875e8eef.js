import{_ as l,p as d,f as c,h as i,M as e,q as s,S as n,aq as a,P as o}from"./vue-router.esm-bundler-2d182057.js";const r={components:{}},p={class:"varlet-site-doc"},h=a('<h1>Migration Guide</h1><div class="card"><h3>Introduce</h3><p>This section mainly introduces the main changes of the <code>2.x</code> version compared to the <code>1.x</code> version and the considerations for migration.</p></div><h2>Components Library(@varlet/ui)</h2><div class="card"><h3>Component refactoring</h3><ul><li>The Menu component has been reworked, the api has been optimized to make it easier to use, and it has better boundary detection capabilities and performance on the desktop side. For specific usage, please refer to <a href="./zh-CN/menu">Menu documentation</a>,</li><li>The drop-down menu of the Select component is replaced by the new Menu component</li><li>The drop-down menu of the Pagination component is replaced by the new Menu component</li><li>Default color of Loading component changed from <code>currentColor</code> to <code>var(--color-primary)</code></li><li>The Loading component exposes <code>var(--loading-color)</code></li><li>Added <code>loadingColor</code> property to Button component</li><li>Added <code>loadingColor</code> property to Snackbar component</li><li>Added <code>labelClass</code> property to Progress component</li><li>Added <code>tag</code> property to StyleProvider component to allow custom container tags</li><li>Cell component renamed part of api <code>desc</code> -&gt; <code>description</code>, <code>descClass</code> -&gt; <code>descriptionClass</code></li><li>DatePicker component renamed part of api <code>shadow</code> -&gt; <code>elevation</code></li><li>TimePicker component renamed part of api <code>shadow</code> -&gt; <code>elevation</code></li><li>Card component renamed parts of api <code>height</code> -&gt; <code>image-height</code>, <code>content</code> -&gt; <code>floating-content</code></li><li>Added <code>direction</code> property to Col component</li><li>Added <code>width</code> property to Dialog component</li><li>Added <code>useForm</code> and <code>useValidation</code> static methods to the Form component to provide the ability to customize form components</li></ul></div><div class="card"><h3>Component style variable changes</h3><ul><li>Menu component variable added <code>--menu-background-color</code></li><li>Select component variable added <code>--select-select-min-height</code>, <code>--select-menu-margin-top</code></li><li>Pagination component variable added <code>--pagination-simple-padding</code></li><li>Loading component variable added <code>--loading-color</code></li><li>Rate component variable added <code>--rate-color</code></li><li>Counter component variable added <code>--counter-disabled-opacity</code></li><li>Slider component variable added <code>--slider-disabled-opacity</code></li><li>Switch component variable added <code>--switch-disabled-opacity</code></li><li>Cell component variable renamed <code>--cell-desc-font-size</code> -&gt; <code>--cell-description-font-size</code>, <code>--cell-desc-color</code> -&gt; <code>--cell-description-color</code></li><li>Form component variable renamed <code>--form-details-error-color</code> -&gt; <code>--form-details-error-message-color</code>， <code>--form-details-length-color</code> -&gt; <code>--form-details-extra-message-color</code></li></ul></div>',5),m={class:"card"},u=e("h3",null,"UMD module exports Chinese and English language packages",-1),g=e("p",null,[o("In the "),e("code",null,"1.x"),o(" version, the UMD module did not export the Chinese and English language packs. In the "),e("code",null,"2.x"),o(" version, we exported the Chinese and English language packs by default. Non-UMD modules now have two ways to use language packs.")],-1),v=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),o(" { Locale } "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/ui'"),o(`
`),e("span",{class:"hljs-keyword"},"import"),o(" enUS "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/ui/es/locale/en-US'"),o(`

Locale.add(`),e("span",{class:"hljs-string"},"'en-US'"),o(`, enUS)
`)])],-1),f=e("p",null,"OR",-1),y=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),o(" { Locale } "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/ui'"),o(`

Locale.add(`),e("span",{class:"hljs-string"},"'en-US'"),o(`, Locale.enUS)
`)])],-1),_={class:"card"},w=e("h3",null,"UMD module export dark mode theme",-1),k=e("p",null,[o("In "),e("code",null,"1.x"),o(" version, UMD module is not exported for dark mode theme package, in "),e("code",null,"2.x"),o(" version, we export dark mode theme package, Non-UMD modules now have two ways to use the dark mode theme")],-1),j=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),o(" { StyleProvider } "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/ui'"),o(`
`),e("span",{class:"hljs-keyword"},"import"),o(" dark "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/ui/es/themes/dark'"),o(`

StyleProvider(dark)
`)])],-1),b=e("p",null,"OR",-1),x=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),o(" { StyleProvider, Themes } "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/ui'"),o(`

StyleProvider(Themes.dark)
`)])],-1),S=a('<div class="card"><h3>Remove less theme variable support</h3><p>Now that the <code>css variable</code> solution is very mature, the <code>less</code> theme variable is no longer supported in the <code>2.x</code> version, which is conducive to reducing the release size of the package. If you use a scheme that replaces the <code>less</code> theme variable at build time, you need to replace it with the <code>css variable</code> scheme.</p></div>',1),C={class:"card"},T=e("h3",null,"Typescript type optimization",-1),M=e("p",null,[o("We refactored the internal types of components, abstracting more types and exposing them. The type specification of components is in the form of "),e("code",null,"component name"),o(" + "),e("code",null,"type name"),o(". Use as follows:")],-1),U=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),o(),e("span",{class:"hljs-keyword"},"type"),o(" { ButtonProps, ButtonType, ButtonSize } "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/ui'"),o(`
`)])],-1),D=a('<div class="card"><h3>Supports automatic introduction of function components</h3><p>In 1.x, the component library only supports declarative components that are automatically imported into templates, and functional components <code>(eg: Snackbar)</code> still need to manually import style files. In 2.x, the automatic import of function components is supported through the <a href="https://github.com/antfu/unplugin-auto-import">unplugin-auto-import</a> plugin. For details, see <a href="#/en-US/importOnDemand">Import On Demand</a>.</p></div><h2>Components Library Tools(@varlet/cli)</h2><div class="card"><h3>Command refactoring</h3><ul><li>Refactored <code>gen</code> and <code>create</code> commands, added <code>sfc</code> and <code>tsx</code> template options, added internationalization options, and optimized the command line interactive experience</li><li>Refactored <code>compile</code> command, compiled package no longer supports <code>less</code> variable</li><li>Added <code>vite:dev</code> and <code>vite:build</code> commands to basically encapsulate <code>vite</code></li></ul></div><div class="card"><h3>Documentation related</h3><ul><li>New documentation home page</li><li>Optimized document visual</li><li>Some renaming of document style variables</li></ul></div>',4),L={class:"card"},P=e("h3",null,"Other changes",-1),z=e("ul",null,[e("li",null,[o("Node.js "),e("code",null,"^14.18.0 || >=16.0.0"),o(" is now required.")]),e("li",null,[o("Site config file "),e("code",null,"varlet.config.js"),o(" -> "),e("code",null,"varlet.config.mjs")]),e("li",null,"Built-in method import method changed")],-1),A=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-comment"},"// 1.x"),o(`
`),e("span",{class:"hljs-keyword"},"import"),o(" AppType "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/cli/site/mobile/components/AppType'"),o(`
`),e("span",{class:"hljs-keyword"},"import"),o(" { watchLang, watchDarkMode } "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/cli/site/utils'"),o(`
`)])],-1),N=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-comment"},"// 2.x"),o(`
`),e("span",{class:"hljs-keyword"},"import"),o(" { AppType, watchLang, watchDarkMode } "),e("span",{class:"hljs-keyword"},"from"),o(),e("span",{class:"hljs-string"},"'@varlet/cli/client'"),o(`
`)])],-1);function B(I,O,R,F,V,E){const t=d("var-site-code-example");return c(),i("div",p,[h,e("div",m,[u,g,s(t,{"playground-ignore":""},{default:n(()=>[v]),_:1}),f,s(t,{"playground-ignore":""},{default:n(()=>[y]),_:1})]),e("div",_,[w,k,s(t,{"playground-ignore":""},{default:n(()=>[j]),_:1}),b,s(t,{"playground-ignore":""},{default:n(()=>[x]),_:1})]),S,e("div",C,[T,M,s(t,{"playground-ignore":""},{default:n(()=>[U]),_:1})]),D,e("div",L,[P,z,s(t,null,{default:n(()=>[A]),_:1}),s(t,null,{default:n(()=>[N]),_:1})])])}const q=l(r,[["render",B]]);export{q as default};