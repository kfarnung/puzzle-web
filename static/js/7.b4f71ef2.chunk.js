(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[7],{176:function(e,a,t){"use strict";var n=t(1),r=t(2),s=t(3),o=t.n(s),c=t(0),l=t.n(c),i=t(4),d=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.striped,d=e.bordered,u=e.borderless,f=e.hover,m=e.size,b=e.variant,h=e.responsive,p=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(i.a)(t,"table"),y=o()(s,v,b&&v+"-"+b,m&&v+"-"+m,c&&v+"-striped",d&&v+"-bordered",u&&v+"-borderless",f&&v+"-hover"),E=l.a.createElement("table",Object(n.a)({},p,{className:y,ref:a}));if(h){var C=v+"-responsive";return"string"===typeof h&&(C=C+"-"+h),l.a.createElement("div",{className:C},E)}return E}));a.a=d},180:function(e,a,t){"use strict";var n,r=t(1),s=t(2),o=t(3),c=t.n(o),l=t(72),i=t(0),d=t.n(i),u=t(32),f=t(73),m=((n={})[u.b]="show",n[u.a]="show",n),b=d.a.forwardRef((function(e,a){var t=e.className,n=e.children,o=Object(s.a)(e,["className","children"]),b=Object(i.useCallback)((function(e){Object(f.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return d.a.createElement(u.e,Object(r.a)({ref:a,addEndListener:l.a},o,{onEnter:b}),(function(e,a){return d.a.cloneElement(n,Object(r.a)({},a,{className:c()("fade",t,n.props.className,m[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",a.a=b},183:function(e,a,t){"use strict";var n=t(1),r=t(2),s=t(3),o=t.n(s),c=t(0),l=t.n(c),i=t(4),d=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.fluid,c=e.as,d=void 0===c?"div":c,u=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),m=Object(i.a)(t,"container"),b="string"===typeof s?"-"+s:"-fluid";return l.a.createElement(d,Object(n.a)({ref:a},f,{className:o()(u,s?""+m+b:m)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},184:function(e,a,t){"use strict";var n=t(1),r=t(2),s=t(3),o=t.n(s),c=t(0),l=t.n(c),i=t(4),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.noGutters,u=e.as,f=void 0===u?"div":u,m=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(i.a)(t,"row"),h=b+"-cols",p=[];return d.forEach((function(e){var a,t=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+h+n+"-"+a)})),l.a.createElement(f,Object(n.a)({ref:a},m,{className:o.a.apply(void 0,[s,b,c&&"no-gutters"].concat(p))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},185:function(e,a,t){"use strict";var n=t(1),r=t(2),s=t(3),o=t.n(s),c=t(0),l=t.n(c),i=t(4),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.as,u=void 0===c?"div":c,f=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(i.a)(t,"col"),b=[],h=[];return d.forEach((function(e){var a,t,n,r=f[e];if(delete f[e],null!=r&&"object"===typeof r){var s=r.span;a=void 0===s||s,t=r.offset,n=r.order}else a=r;var o="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+m+o:""+m+o+"-"+a),null!=n&&h.push("order"+o+"-"+n),null!=t&&h.push("offset"+o+"-"+t)})),b.length||b.push(m),l.a.createElement(u,Object(n.a)({},f,{ref:a,className:o.a.apply(void 0,[s].concat(b,h))}))}));u.displayName="Col",a.a=u},186:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function r(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}t.d(a,"a",(function(){return r}))},187:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(186);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw s}}}}},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},225:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(1),o=t(2),c=t(3),l=t.n(c),i=t(18),d=t(11),u=t(12),f=t(66),m=t(4),b=t(180),h=t(15),p=t.n(h),v={label:p.a.string.isRequired,onClick:p.a.func},y=r.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,c=e.className,i=Object(o.a)(e,["label","onClick","className"]);return r.a.createElement("button",Object(s.a)({ref:a,type:"button",className:l()("close",c),onClick:n},i),r.a.createElement("span",{"aria-hidden":"true"},"\xd7"),r.a.createElement("span",{className:"sr-only"},t))}));y.displayName="CloseButton",y.propTypes=v,y.defaultProps={label:"Close"};var E=y,C=t(34),O={show:!0,transition:b.a,closeLabel:"Close alert"},g={show:"onClose"},j=r.a.forwardRef((function(e,a){var t=Object(i.a)(e,g),n=t.bsPrefix,c=t.show,u=t.closeLabel,f=t.className,b=t.children,h=t.variant,p=t.onClose,v=t.dismissible,y=t.transition,C=Object(o.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),O=Object(m.a)(n,"alert"),j=Object(d.a)((function(e){p(!1,e)})),N=r.a.createElement("div",Object(s.a)({role:"alert"},y?C:void 0,{ref:a,className:l()(f,O,h&&O+"-"+h,v&&O+"-dismissible")}),v&&r.a.createElement(E,{onClick:j,label:u}),b);return y?r.a.createElement(y,Object(s.a)({unmountOnExit:!0},C,{in:c}),N):c?N:null})),N=Object(f.a)("h4");N.displayName="DivStyledAsH4",j.displayName="Alert",j.defaultProps=O,j.Link=Object(u.a)("alert-link",{Component:C.a}),j.Heading=Object(u.a)("alert-heading",{Component:N});var x=j,w=t(27),k=t(185),S=t(183),P=(t(78),t(88)),W=t(77),I=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,d=e.className,u=e.isValid,f=e.isInvalid,b=e.isStatic,h=e.as,p=void 0===h?"input":h,v=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),y=Object(n.useContext)(W.a),E=y.controlId,C=y.custom?[i,"custom-control-input"]:[c,"form-check-input"],O=C[0],g=C[1];return c=Object(m.a)(O,g),r.a.createElement(p,Object(s.a)({},v,{ref:a,id:t||E,className:l()(d,c,u&&"is-valid",f&&"is-invalid",b&&"position-static")}))}));I.displayName="FormCheckInput",I.defaultProps={type:"checkbox"};var D=I,L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,i=e.className,d=e.htmlFor,u=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(n.useContext)(W.a),b=f.controlId,h=f.custom?[c,"custom-control-label"]:[t,"form-check-label"],p=h[0],v=h[1];return t=Object(m.a)(p,v),r.a.createElement("label",Object(s.a)({},u,{ref:a,htmlFor:d||b,className:l()(i,t)}))}));L.displayName="FormCheckLabel";var B=L,T=r.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,d=e.inline,u=e.disabled,f=e.isValid,b=e.isInvalid,h=e.feedback,p=e.className,v=e.style,y=e.title,E=e.type,C=e.label,O=e.children,g=e.custom,j=e.as,N=void 0===j?"input":j,x=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),w="switch"===E||g,k=w?[i,"custom-control"]:[c,"form-check"],S=k[0],I=k[1];c=Object(m.a)(S,I);var L=Object(n.useContext)(W.a).controlId,T=Object(n.useMemo)((function(){return{controlId:t||L,custom:w}}),[L,w,t]),R=null!=C&&!1!==C&&!O,G=r.a.createElement(D,Object(s.a)({},x,{type:"switch"===E?"checkbox":E,ref:a,isValid:f,isInvalid:b,isStatic:!R,disabled:u,as:N}));return r.a.createElement(W.a.Provider,{value:T},r.a.createElement("div",{style:v,className:l()(p,c,w&&"custom-"+E,d&&c+"-inline")},O||r.a.createElement(r.a.Fragment,null,G,R&&r.a.createElement(B,{title:y},C),(f||b)&&r.a.createElement(P.a,{type:f?"valid":"invalid"},h))))}));T.displayName="FormCheck",T.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},T.Input=D,T.Label=B;var R=T,G=t(58),A=t(184),F=t(70),U=t(76),z=t(187),V=t(176),H=t(44);t(188);function J(e){return e.split(/\r?\n/)}function M(e,a,t,n){const r=new H.WordSearchSolver;return r.setDirections(t),r.setCanBend(n),r.setGrid(e),r.setWords(a),function(e,a){const t=[];var n,r=Object(z.a)(e);try{for(r.s();!(n=r.n()).done;){const e=n.value,a=Array.from({length:e.length},()=>!1);t.push(a)}}catch(i){r.e(i)}finally{r.f()}var s,o=Object(z.a)(a);try{for(o.s();!(s=o.n()).done;){const e=s.value;var c,l=Object(z.a)(e.points);try{for(l.s();!(c=l.n()).done;){const e=c.value;t[e.y][e.x]=!0}}catch(i){l.e(i)}finally{l.f()}}}catch(i){o.e(i)}finally{o.f()}return t}(e,r.findWords())}function q(e){return e?"WordSearchOutput-highlightChar":""}var $=function(e){const a=e.gridInputText.trim();if(!a)return null;const t=J(a),n=[];var s,o=Object(z.a)(t);try{for(o.s();!(s=o.n()).done;){const e=s.value;n.push(e.split(""))}}catch(u){o.e(u)}finally{o.f()}const c=(l=e.useCardinals,i=e.useDiagonals,l&&i?H.WordSearchDirection.CardinalAndDiagonal:l?H.WordSearchDirection.Cardinal:i?H.WordSearchDirection.Diagonal:H.WordSearchDirection.None);var l,i;const d=M(n,J(e.wordListInputText).filter(e=>e.length>0),c,e.canBend);return r.a.createElement(V.a,{className:"WordSearchOutput",borderless:!0},r.a.createElement("tbody",null,n.map((e,a)=>r.a.createElement("tr",{key:a},e.map((e,t)=>r.a.createElement("td",{className:q(d[a][t]),key:"".concat(a,",").concat(t)},e))))))},K=t(112);t(189);const Q={setCanBend:K.b,setGrid:K.c,setUseCardinals:K.d,setUseDiagonals:K.e,setWordList:K.f};var X=Object(F.b)(e=>({canBend:e.wordSearch.canBend,grid:e.wordSearch.grid,useCardinals:e.wordSearch.useCardinals,useDiagonals:e.wordSearch.useDiagonals,wordList:e.wordSearch.wordList}),Q)((function(e){const a=Object(U.a)();return r.a.createElement("div",{className:"WordSearchComponent"},r.a.createElement(S.a,{fluid:!0},r.a.createElement(A.a,{noGutters:!0},r.a.createElement(k.a,{md:4},r.a.createElement(w.a,{className:"WordSearchComponent-ListInput"},r.a.createElement(w.a.Header,null,"Enter the list of words to find, one word per line"),r.a.createElement(w.a.Body,null,r.a.createElement(G.a,{as:"textarea",onChange:function(a){e.setWordList(a.currentTarget.value)},placeholder:"Word List To Find",value:e.wordList}),function(){if(!e.useCardinals&&!e.useDiagonals)return r.a.createElement(x,{variant:"warning"},"No directions are selected. No results will be shown.")}(),r.a.createElement(R,{checked:e.useDiagonals,id:"WordSearchComponent-checkbox-diagonal",label:"Use diagonal directions",onChange:function(a){e.setUseDiagonals(a.currentTarget.checked)},type:"checkbox"}),r.a.createElement(R,{checked:e.useCardinals,id:"WordSearchComponent-checkbox-cardinal",label:"Use cardinal directions",onChange:function(a){e.setUseCardinals(a.currentTarget.checked)},type:"checkbox"}),r.a.createElement(R,{checked:e.canBend,id:"WordSearchComponent-checkbox-bend",label:"Words can bend (may not be straight lines)",onChange:function(a){e.setCanBend(a.currentTarget.checked)},type:"checkbox"})))),r.a.createElement(k.a,{md:8},r.a.createElement(w.a,{className:"WordSearchComponent-GridInput"},r.a.createElement(w.a.Header,null,"Enter the word search grid, one row of letters per line"),r.a.createElement(w.a.Body,null,r.a.createElement(G.a,{as:"textarea",onChange:function(a){e.setGrid(a.currentTarget.value)},placeholder:"Grid Text",ref:a,spellCheck:!1,value:e.grid}))))),r.a.createElement(A.a,{noGutters:!0},r.a.createElement(k.a,{md:12},r.a.createElement(w.a,{className:"WordSearchComponent-GridOutput"},r.a.createElement(w.a.Header,null,"Output"),r.a.createElement(w.a.Body,null,r.a.createElement($,{gridInputText:e.grid,useCardinals:e.useCardinals,useDiagonals:e.useDiagonals,canBend:e.canBend,wordListInputText:e.wordList})))))))}));t(190);a.default=function(){return r.a.createElement("div",{className:"WordSearch"},r.a.createElement("h2",null,"Word Search"),r.a.createElement(X,null))}}}]);
//# sourceMappingURL=7.b4f71ef2.chunk.js.map