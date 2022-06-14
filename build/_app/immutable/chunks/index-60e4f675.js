var ve=Object.defineProperty;var ae=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var ie=(s,e,t)=>e in s?ve(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,U=(s,e)=>{for(var t in e||(e={}))ze.call(e,t)&&ie(s,t,e[t]);if(ae)for(var t of ae(e))je.call(e,t)&&ie(s,t,e[t]);return s};import{S as Y,i as G,s as q,F as W,C as A,e as ge,c as _e,a as Se,d as R,G as w,g as Z,I as X,H as k,J,K,L as Q,z as x,M as be,q as M,o as H,N as Ae,O as I,P as $,v as Fe,R as ee,X as Ne,T as te,r as le,w as ce,l as ue,x as we,y as pe,A as ke,n as Ve,B as fe,p as Ue,a2 as Xe,E as Ye}from"./index-c54a56f5.js";import{r as Ge}from"./index-4308a4a9.js";import{_ as V,a as de,c as D,u as Te,f as se,D as qe,S as We,M as Ze}from"./index-653d140b.js";import{d as Je}from"./Button-69c9d8f3.js";import{c as Ce}from"./classAdderBuilder-29de59bb.js";/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ke=function(){function s(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(s,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(s,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(s,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(s,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),s.prototype.init=function(){},s.prototype.destroy=function(){},s}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},N={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Qe={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ne=function(s){V(e,s);function e(t){return s.call(this,de(de({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Qe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(Ke);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F=0,ye=function(s){V(e,s);function e(t){var n=s.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=F,n.resizeDebounceId=F,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return e.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),n=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=F,t.throttledResizeHandler()},N.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=F},N.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,a=this.currentAppBarOffsetTop>t,u=n&&a;if(u)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==a)return this.isDockedShowing=a,!0}else return this.wasDocked=!0,!0;return u},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-N.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(ne);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xe=function(s){V(e,s);function e(){var t=s!==null&&s.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(ye);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $e=function(s){V(e,s);function e(t){var n=s.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(E.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(E.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(E.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(E.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(ne);const{window:he}=Ne;function et(s){let e,t,n,a,u,_,i;const l=s[22].default,p=W(l,s,s[21],null);let g=[{class:t=D(U({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7]},s[11]))},{style:n=Object.entries(s[12]).map(me).concat([s[3]]).join(" ")},s[15]],c={};for(let o=0;o<g.length;o+=1)c=A(c,g[o]);return{c(){e=ge("header"),p&&p.c(),this.h()},l(o){e=_e(o,"HEADER",{class:!0,style:!0});var f=Se(e);p&&p.l(f),f.forEach(R),this.h()},h(){w(e,c)},m(o,f){Z(o,e,f),p&&p.m(e,null),s[25](e),u=!0,_||(i=[X(he,"resize",s[23]),X(he,"scroll",s[24]),k(a=Te.call(null,e,s[1])),k(s[13].call(null,e)),X(e,"SMUITopAppBarIconButton:nav",s[26])],_=!0)},p(o,f){p&&p.p&&(!u||f[0]&2097152)&&J(p,l,o,o[21],u?Q(l,o[21],f,null):K(o[21]),null),w(e,c=x(g,[(!u||f[0]&2293&&t!==(t=D(U({[o[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":o[4]==="short","mdc-top-app-bar--short-collapsed":o[0],"mdc-top-app-bar--fixed":o[4]==="fixed","smui-top-app-bar--static":o[4]==="static","smui-top-app-bar--color-secondary":o[5]==="secondary","mdc-top-app-bar--prominent":o[6],"mdc-top-app-bar--dense":o[7]},o[11]))))&&{class:t},(!u||f[0]&4104&&n!==(n=Object.entries(o[12]).map(me).concat([o[3]]).join(" ")))&&{style:n},f[0]&32768&&o[15]])),a&&be(a.update)&&f[0]&2&&a.update.call(null,o[1])},i(o){u||(M(p,o),u=!0)},o(o){H(p,o),u=!1},d(o){o&&R(e),p&&p.d(o),s[25](null),_=!1,Ae(i)}}}const me=([s,e])=>`${s}: ${e};`;function tt(s,e,t){const n=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let a=I(e,n),{$$slots:u={},$$scope:_}=e;const i=se($());let l=()=>{};function p(r){return r===l}let{use:g=[]}=e,{class:c=""}=e,{style:o=""}=e,{variant:f="standard"}=e,{color:T="primary"}=e,{collapsed:d=l}=e;const B=!p(d)&&!!d;p(d)&&(d=!1);let{prominent:C=!1}=e,{dense:O=!1}=e,{scrollTarget:S=void 0}=e,h,m,b={},y={},P,Ee=Ge({variant:f,prominent:C,dense:O},r=>{t(18,P=r)}),L,v=f;Fe(()=>(t(9,m=oe()),m.init(),()=>{m.destroy()}));function oe(){const r={static:ne,short:$e,fixed:xe}[f]||ye;return new r({hasClass:Be,addClass:Oe,removeClass:Ie,setStyle:De,getTopAppBarHeight:()=>h.clientHeight,notifyNavigationIconClicked:()=>Je(h,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>h.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Be(r){return r in b?b[r]:re().classList.contains(r)}function Oe(r){b[r]||t(11,b[r]=!0,b)}function Ie(r){(!(r in b)||b[r])&&t(11,b[r]=!1,b)}function De(r,j){y[r]!=j&&(j===""||j==null?(delete y[r],t(12,y),t(20,v),t(4,f),t(9,m)):t(12,y[r]=j,y))}function z(){m&&(m.handleTargetScroll(),f==="short"&&t(0,d="isCollapsed"in m&&m.isCollapsed))}function Le(){return Ee}function re(){return h}const Re=()=>f!=="short"&&f!=="fixed"&&m&&m.handleWindowResize(),Me=()=>S==null&&z();function He(r){te[r?"unshift":"push"](()=>{h=r,t(10,h)})}const Pe=()=>m&&m.handleNavigationClick();return s.$$set=r=>{e=A(A({},e),ee(r)),t(15,a=I(e,n)),"use"in r&&t(1,g=r.use),"class"in r&&t(2,c=r.class),"style"in r&&t(3,o=r.style),"variant"in r&&t(4,f=r.variant),"color"in r&&t(5,T=r.color),"collapsed"in r&&t(0,d=r.collapsed),"prominent"in r&&t(6,C=r.prominent),"dense"in r&&t(7,O=r.dense),"scrollTarget"in r&&t(8,S=r.scrollTarget),"$$scope"in r&&t(21,_=r.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&P&&P({variant:f,prominent:C,dense:O}),s.$$.dirty[0]&1049104&&v!==f&&m&&(t(20,v=f),m.destroy(),t(11,b={}),t(12,y={}),t(9,m=oe()),m.init()),s.$$.dirty[0]&528&&m&&f==="short"&&"setAlwaysCollapsed"in m&&m.setAlwaysCollapsed(B),s.$$.dirty[0]&524544&&L!==S&&(L&&L.removeEventListener("scroll",z),S&&S.addEventListener("scroll",z),t(19,L=S))},[d,g,c,o,f,T,C,O,S,m,h,b,y,i,z,a,Le,re,P,L,v,_,u,Re,Me,He,Pe]}class mt extends Y{constructor(e){super(),G(this,e,tt,et,q,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var gt=Ce({class:"mdc-top-app-bar__row",component:qe});function st(s){let e,t,n,a,u,_;const i=s[9].default,l=W(i,s,s[8],null);let p=[{class:t=D({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],g={};for(let c=0;c<p.length;c+=1)g=A(g,p[c]);return{c(){e=ge("section"),l&&l.c(),this.h()},l(c){e=_e(c,"SECTION",{class:!0});var o=Se(e);l&&l.l(o),o.forEach(R),this.h()},h(){w(e,g)},m(c,o){Z(c,e,o),l&&l.m(e,null),s[10](e),a=!0,u||(_=[k(n=Te.call(null,e,s[0])),k(s[5].call(null,e))],u=!0)},p(c,[o]){l&&l.p&&(!a||o&256)&&J(l,i,c,c[8],a?Q(i,c[8],o,null):K(c[8]),null),w(e,g=x(p,[(!a||o&6&&t!==(t=D({[c[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":c[2]==="start","mdc-top-app-bar__section--align-end":c[2]==="end"})))&&{class:t},o&8&&(c[3]?{role:"toolbar"}:{}),o&64&&c[6]])),n&&be(n.update)&&o&1&&n.update.call(null,c[0])},i(c){a||(M(l,c),a=!0)},o(c){H(l,c),a=!1},d(c){c&&R(e),l&&l.d(c),s[10](null),u=!1,Ae(_)}}}function nt(s,e,t){const n=["use","class","align","toolbar","getElement"];let a=I(e,n),{$$slots:u={},$$scope:_}=e;const i=se($());let{use:l=[]}=e,{class:p=""}=e,{align:g="start"}=e,{toolbar:c=!1}=e,o;le("SMUI:icon-button:context",c?"top-app-bar:action":"top-app-bar:navigation"),le("SMUI:button:context",c?"top-app-bar:action":"top-app-bar:navigation");function f(){return o}function T(d){te[d?"unshift":"push"](()=>{o=d,t(4,o)})}return s.$$set=d=>{e=A(A({},e),ee(d)),t(6,a=I(e,n)),"use"in d&&t(0,l=d.use),"class"in d&&t(1,p=d.class),"align"in d&&t(2,g=d.align),"toolbar"in d&&t(3,c=d.toolbar),"$$scope"in d&&t(8,_=d.$$scope)},[l,p,g,c,o,i,a,f,_,u,T]}class ot extends Y{constructor(e){super(),G(this,e,nt,st,q,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var _t=Ce({class:"mdc-top-app-bar__title",component:We});function rt(s){let e;const t=s[11].default,n=W(t,s,s[13],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,u){n&&n.m(a,u),e=!0},p(a,u){n&&n.p&&(!e||u&8192)&&J(n,t,a,a[13],e?Q(t,a[13],u,null):K(a[13]),null)},i(a){e||(M(n,a),e=!0)},o(a){H(n,a),e=!1},d(a){n&&n.d(a)}}}function at(s){let e,t,n;const a=[{use:[s[6],...s[0]]},{class:D({[s[1]]:!0,[s[5]]:!0})},s[7]];var u=s[2];function _(i){let l={$$slots:{default:[rt]},$$scope:{ctx:i}};for(let p=0;p<a.length;p+=1)l=A(l,a[p]);return{props:l}}return u&&(e=new u(_(s)),s[12](e)),{c(){e&&ce(e.$$.fragment),t=ue()},l(i){e&&we(e.$$.fragment,i),t=ue()},m(i,l){e&&pe(e,i,l),Z(i,t,l),n=!0},p(i,[l]){const p=l&227?x(a,[l&65&&{use:[i[6],...i[0]]},l&34&&{class:D({[i[1]]:!0,[i[5]]:!0})},l&128&&ke(i[7])]):{};if(l&8192&&(p.$$scope={dirty:l,ctx:i}),u!==(u=i[2])){if(e){Ve();const g=e;H(g.$$.fragment,1,0,()=>{fe(g,1)}),Ue()}u?(e=new u(_(i)),i[12](e),ce(e.$$.fragment),M(e.$$.fragment,1),pe(e,t.parentNode,t)):e=null}else u&&e.$set(p)},i(i){n||(e&&M(e.$$.fragment,i),n=!0)},o(i){e&&H(e.$$.fragment,i),n=!1},d(i){s[12](null),i&&R(t),e&&fe(e,i)}}}function it(s,e,t){let n,a;const u=["use","class","topAppBar","component","getElement"];let _=I(e,u),i,l=Ye,p=()=>(l(),l=Xe(n,h=>t(10,i=h)),n);s.$$.on_destroy.push(()=>l());let{$$slots:g={},$$scope:c}=e;const o=se($());let{use:f=[]}=e,{class:T=""}=e,{topAppBar:d}=e,B,{component:C=Ze}=e;function O(){return B.getElement()}function S(h){te[h?"unshift":"push"](()=>{B=h,t(4,B)})}return s.$$set=h=>{e=A(A({},e),ee(h)),t(7,_=I(e,u)),"use"in h&&t(0,f=h.use),"class"in h&&t(1,T=h.class),"topAppBar"in h&&t(8,d=h.topAppBar),"component"in h&&t(2,C=h.component),"$$scope"in h&&t(13,c=h.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&p(t(3,n=d&&d.getPropStore())),s.$$.dirty&1032&&t(5,a=(()=>!n||i.variant==="static"?"":i.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":i.prominent&&i.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":i.prominent?"mdc-top-app-bar--prominent-fixed-adjust":i.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")())},[f,T,C,n,B,a,o,_,d,O,i,g,S,c]}class lt extends Y{constructor(e){super(),G(this,e,it,at,q,{use:0,class:1,topAppBar:8,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const St=ot,bt=lt;export{bt as A,gt as R,St as S,mt as T,_t as a};
