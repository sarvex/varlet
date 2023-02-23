import{_ as e,p as c,f as p,h as r,M as a,q as l,S as t,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"悬停指令",-1),o=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"悬停指令")],-1),m={class:"card"},u=a("h3",null,"样式绑定",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1),d={class:"card"},_=a("h3",null,"函数绑定",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"const"),s(" translateY = ref("),a("span",{class:"hljs-string"},"'100%'"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleHover"),s("("),a("span",{class:"hljs-params"},"hovering"),s(") ")]),s(`{
  translateY.value = hovering ? `),a("span",{class:"hljs-string"},"'0'"),s(" : "),a("span",{class:"hljs-built_in"},"Math"),s(".random() > "),a("span",{class:"hljs-number"},"0.5"),s(" ? "),a("span",{class:"hljs-string"},"'100%'"),s(" : "),a("span",{class:"hljs-string"},"'-100%'"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-card"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"本草纲目"'),s(`
    `),a("span",{class:"hljs-attr"},"subtitle"),s("="),a("span",{class:"hljs-string"},'"我表情悠哉 跳个大概"'),s(`
    `),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"'),s(`
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
`)])],-1);function b(f,x,y,k,w,V){const n=c("var-site-code-example");return p(),r("div",j,[i,o,a("div",m,[u,l(n,null,{default:t(()=>[g]),_:1})]),a("div",d,[_,l(n,null,{default:t(()=>[v]),_:1})])])}const H=e(h,[["render",b]]);export{H as default};
