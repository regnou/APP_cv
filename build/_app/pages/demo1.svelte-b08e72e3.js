import{S as M,i as P,s as V,w as v,k as A,e as E,x as k,m as I,c as B,a as b,d as c,b as d,y,g as p,q as w,o as Y,B as C,V as j,W as z,E as q,t as _,h as $,X as L,I as D,j as g}from"../chunks/index-81160aa3.js";import{B as N,I as W,L as X}from"../chunks/Button-e113bafc.js";import{i as F}from"../chunks/index-8e2c4dec.js";import{m as G}from"../chunks/mdi-659c8cf5.js";function H(f){let e;return{c(){e=j("path"),this.h()},l(s){e=z(s,"path",{fill:!0,d:!0}),b(e).forEach(c),this.h()},h(){d(e,"fill","currentColor"),d(e,"d",G)},m(s,t){p(s,e,t)},p:q,d(s){s&&c(e)}}}function J(f){let e;return{c(){e=_("Click Me")},l(s){e=$(s,"Click Me")},m(s,t){p(s,e,t)},d(s){s&&c(e)}}}function K(f){let e,s,t,i;return e=new W({props:{component:F,viewBox:"0 0 24 24",$$slots:{default:[H]},$$scope:{ctx:f}}}),t=new X({props:{$$slots:{default:[J]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment),s=A(),v(t.$$.fragment)},l(l){k(e.$$.fragment,l),s=I(l),k(t.$$.fragment,l)},m(l,r){y(e,l,r),p(l,s,r),y(t,l,r),i=!0},p(l,r){const a={};r&8&&(a.$$scope={dirty:r,ctx:l}),e.$set(a);const n={};r&8&&(n.$$scope={dirty:r,ctx:l}),t.$set(n)},i(l){i||(w(e.$$.fragment,l),w(t.$$.fragment,l),i=!0)},o(l){Y(e.$$.fragment,l),Y(t.$$.fragment,l),i=!1},d(l){C(e,l),l&&c(s),C(t,l)}}}function O(f){let e,s;return{c(){e=E("span"),s=_("You haven't clicked the button."),this.h()},l(t){e=B(t,"SPAN",{class:!0});var i=b(e);s=$(i,"You haven't clicked the button."),i.forEach(c),this.h()},h(){d(e,"class","grayed svelte-i9z0md")},m(t,i){p(t,e,i),L(e,s)},p:q,d(t){t&&c(e)}}}function Q(f){let e,s,t,i=f[0]===1?"":"s",l,r,a,n,u,h,S;return{c(){e=_("You've clicked the button "),s=_(f[0]),t=_(" time"),l=_(i),r=_(`. You can
		`),a=E("a"),n=_("reset it"),u=_("."),this.h()},l(o){e=$(o,"You've clicked the button "),s=$(o,f[0]),t=$(o," time"),l=$(o,i),r=$(o,`. You can
		`),a=B(o,"A",{href:!0});var m=b(a);n=$(m,"reset it"),m.forEach(c),u=$(o,"."),this.h()},h(){d(a,"href","/")},m(o,m){p(o,e,m),p(o,s,m),p(o,t,m),p(o,l,m),p(o,r,m),p(o,a,m),L(a,n),p(o,u,m),h||(S=D(a,"click",f[2]),h=!0)},p(o,m){m&1&&g(s,o[0]),m&1&&i!==(i=o[0]===1?"":"s")&&g(l,i)},d(o){o&&c(e),o&&c(s),o&&c(t),o&&c(l),o&&c(r),o&&c(a),o&&c(u),h=!1,S()}}}function R(f){let e,s,t,i;e=new N({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),e.$on("mousedown",f[1]);function l(n,u){return n[0]?Q:O}let r=l(f),a=r(f);return{c(){v(e.$$.fragment),s=A(),t=E("p"),a.c(),this.h()},l(n){k(e.$$.fragment,n),s=I(n),t=B(n,"P",{class:!0});var u=b(t);a.l(u),u.forEach(c),this.h()},h(){d(t,"class","mdc-typography--body1")},m(n,u){y(e,n,u),p(n,s,u),p(n,t,u),a.m(t,null),i=!0},p(n,[u]){const h={};u&8&&(h.$$scope={dirty:u,ctx:n}),e.$set(h),r===(r=l(n))&&a?a.p(n,u):(a.d(1),a=r(n),a&&(a.c(),a.m(t,null)))},i(n){i||(w(e.$$.fragment,n),i=!0)},o(n){Y(e.$$.fragment,n),i=!1},d(n){C(e,n),n&&c(s),n&&c(t),a.d()}}}function T(f,e,s){let t=0;function i(r){r.button===0&&s(0,t++,t)}function l(){s(0,t=0)}return[t,i,l]}class te extends M{constructor(e){super();P(this,e,T,R,V,{})}}export{te as default};
