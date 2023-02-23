import{_ as e,p as c,f as r,h,M as a,q as l,S as t,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Hover",-1),o=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Hover")],-1),u={class:"card"},m=a("h3",null,"Style Binding",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-paper"),s(`
    `),a("span",{class:"hljs-attr"},":elevation"),s("="),a("span",{class:"hljs-string"},'"2"'),s(`
    `),a("span",{class:"hljs-attr"},":width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-hover-example-paper"'),s(`
    `),a("span",{class:"hljs-attr"},"v-hover"),s("="),a("span",{class:"hljs-string"},`"{ color: '#fff', background: ' var(--color-primary)' }"`),s(`
  >`)]),s(`
    HOVER
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-hover-example-paper"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;

  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),d={class:"card"},v=a("h3",null,"Function Binding",-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"const"),s(" translateY = ref("),a("span",{class:"hljs-string"},"'100%'"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleHover"),s("("),a("span",{class:"hljs-params"},"hovering"),s(") ")]),s(`{
  translateY.value = hovering ? `),a("span",{class:"hljs-string"},"'0'"),s(" : "),a("span",{class:"hljs-built_in"},"Math"),s(".random() > "),a("span",{class:"hljs-number"},"0.5"),s(" ? "),a("span",{class:"hljs-string"},"'100%'"),s(" : "),a("span",{class:"hljs-string"},"'-100%'"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-card"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Dangerous"'),s(`
    `),a("span",{class:"hljs-attr"},"subtitle"),s("="),a("span",{class:"hljs-string"},'"The girl was dangerous"'),s(`
    `),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."'),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-hover-example-card"'),s(`
    `),a("span",{class:"hljs-attr"},"v-hover"),s("="),a("span",{class:"hljs-string"},'"handleHover"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"image"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-hover-example-card__image"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/tree.jpeg"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
          `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"var-hover-example-card__image__mask"'),s(`
          `),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},'"{\n            transform: `translateY(${translateY})`,\n          }"'),s(`
        >`)]),s(`
          HOVER
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-card"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".var-hover-example-card"),s(` {
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;

  &__image {
    `),a("span",{class:"hljs-attribute"},"position"),s(`: relative;

    `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;

    `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;

    `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
    `),a("span",{class:"hljs-attribute"},"line-height"),s(": "),a("span",{class:"hljs-number"},"1"),s(`;

    `),a("span",{class:"hljs-selector-tag"},"img"),s(` {
      `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
    }

    &__mask {
      `),a("span",{class:"hljs-attribute"},"position"),s(`: absolute;
      `),a("span",{class:"hljs-attribute"},"top"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
      `),a("span",{class:"hljs-attribute"},"left"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;

      `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
      `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
      `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;

      `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
      `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;

      `),a("span",{class:"hljs-attribute"},"transition"),s(": all "),a("span",{class:"hljs-number"},"0.3s"),s(`;

      `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
      `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-primary);

      `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
    }
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1);function b(f,y,w,x,k,T){const n=c("var-site-code-example");return r(),h("div",i,[j,o,a("div",u,[m,l(n,null,{default:t(()=>[g]),_:1})]),a("div",d,[v,l(n,null,{default:t(()=>[_]),_:1})])])}const B=e(p,[["render",b]]);export{B as default};
