var Ie=Object.defineProperty;var he=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var ve=(n,e,t)=>e in n?Ie(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,se=(n,e)=>{for(var t in e||(e={}))Ge.call(e,t)&&ve(n,t,e[t]);if(he)for(var t of he(e))Oe.call(e,t)&&ve(n,t,e[t]);return n};import{S as K,i as Q,s as N,F as T,C as _,e as le,c as ue,a as ce,d as A,G as be,g as w,H as ge,J as Y,K as x,L as $,z as ee,M as ze,q as S,o as C,N as je,O as F,P as te,R as E,T as ne,U as q,w as B,l as H,x as de,y as k,A as R,n as fe,B as I,p as me,r as _e,b as Fe,k as Pe,m as Ee}from"./index-81160aa3.js";import{u as qe,f as ae,c as G,e as Xe,g as ye,B as We,A as Ve}from"./index-8e2c4dec.js";var oe=function(n,e){return oe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},oe(n,e)};function Ze(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");oe(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var P=function(){return P=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},P.apply(this,arguments)};function W(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
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
 */var Je=function(){function n(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
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
 */function Ke(n,e){if(n.closest)return n.closest(e);for(var t=n;t;){if(He(t,e))return t;t=t.parentElement}return null}function He(n,e){var t=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return t.call(n,e)}function Qe(n){var e=n;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var i=t.scrollWidth;return document.documentElement.removeChild(t),i}var Ne=Object.freeze(Object.defineProperty({__proto__:null,closest:Ke,matches:He,estimateScrollWidth:Qe},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google Inc.
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
 */function Te(n){return n===void 0&&(n=window),Ye(n)?{passive:!0}:!1}function Ye(n){n===void 0&&(n=window);var e=!1;try{var t={get passive(){return e=!0,!1}},i=function(){};n.document.addEventListener("test",i,t),n.document.removeEventListener("test",i,t)}catch{e=!1}return e}var xe=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Te},Symbol.toStringTag,{value:"Module"}));function $e(n,e,t,i={bubbles:!0},r=!1){if(typeof Event!="undefined"&&n){const s=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:t}));if(n==null||n.dispatchEvent(s),r&&e.startsWith("SMUI")){const l=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:t}));n==null||n.dispatchEvent(l),l.defaultPrevented&&s.preventDefault()}return s}}function et(n){let e,t,i,r,s;const l=n[6].default,a=T(l,n,n[5],null);let o=[n[3]],u={};for(let c=0;c<o.length;c+=1)u=_(u,o[c]);return{c(){e=le("i"),a&&a.c(),this.h()},l(c){e=ue(c,"I",{});var f=ce(e);a&&a.l(f),f.forEach(A),this.h()},h(){be(e,u)},m(c,f){w(c,e,f),a&&a.m(e,null),n[7](e),i=!0,r||(s=[ge(t=qe.call(null,e,n[0])),ge(n[2].call(null,e))],r=!0)},p(c,[f]){a&&a.p&&(!i||f&32)&&Y(a,l,c,c[5],i?$(l,c[5],f,null):x(c[5]),null),be(e,u=ee(o,[f&8&&c[3]])),t&&ze(t.update)&&f&1&&t.update.call(null,c[0])},i(c){i||(S(a,c),i=!0)},o(c){C(a,c),i=!1},d(c){c&&A(e),a&&a.d(c),n[7](null),r=!1,je(s)}}}function tt(n,e,t){const i=["use","getElement"];let r=F(e,i),{$$slots:s={},$$scope:l}=e,{use:a=[]}=e;const o=ae(te());let u;function c(){return u}function f(h){ne[h?"unshift":"push"](()=>{u=h,t(1,u)})}return n.$$set=h=>{e=_(_({},e),E(h)),t(3,r=F(e,i)),"use"in h&&t(0,a=h.use),"$$scope"in h&&t(5,l=h.$$scope)},[a,u,o,r,c,l,s,f]}class nt extends K{constructor(e){super();Q(this,e,tt,et,N,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}/**
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
 */var at={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},it={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Ae={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},V;function rt(n,e){e===void 0&&(e=!1);var t=n.CSS,i=V;if(typeof V=="boolean"&&!e)return V;var r=t&&typeof t.supports=="function";if(!r)return!1;var s=t.supports("--css-vars","yes"),l=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return i=s||l,e||(V=i),i}function st(n,e,t){if(!n)return{x:0,y:0};var i=e.x,r=e.y,s=i+t.left,l=r+t.top,a,o;if(n.type==="touchstart"){var u=n;a=u.changedTouches[0].pageX-s,o=u.changedTouches[0].pageY-l}else{var c=n;a=c.pageX-s,o=c.pageY-l}return{x:a,y:o}}/**
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
 */var Se=["touchstart","pointerdown","mousedown","keydown"],Ce=["touchend","pointerup","mouseup","contextmenu"],Z=[],ot=function(n){Ze(e,n);function e(t){var i=n.call(this,P(P({},e.defaultAdapter),t))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(r){i.activateImpl(r)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,s=r.ROOT,l=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(s),t.adapter.isUnbounded()&&(t.adapter.addClass(l),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(s),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var i,r;if(t){try{for(var s=W(Se),l=s.next();!l.done;l=s.next()){var a=l.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(o){i={error:o}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var i,r;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=W(Ce),l=s.next();!l.done;l=s.next()){var a=l.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(o){i={error:o}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var t,i;try{for(var r=W(Se),s=r.next();!s.done;s=r.next()){var l=s.value;this.adapter.deregisterInteractionHandler(l,this.activateHandler)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=W(Ce),s=r.next();!s.done;s=r.next()){var l=s.value;this.adapter.deregisterDocumentInteractionHandler(l,this.deactivateHandler)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings,r=Object.keys(i);r.forEach(function(s){s.indexOf("VAR_")===0&&t.adapter.updateCssVariable(i[s],null)})},e.prototype.activateImpl=function(t){var i=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var s=this.previousActivationEvent,l=s&&t!==void 0&&s.type!==t.type;if(!l){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var a=t!==void 0&&Z.length>0&&Z.some(function(o){return i.adapter.containsEventTarget(o)});if(a){this.resetActivationState();return}t!==void 0&&(Z.push(t.target),this.registerDeactivationHandlers(t)),r.wasElementMadeActive=this.checkElementMadeActive(t),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Z=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=i.checkElementMadeActive(t),r.wasElementMadeActive&&i.animateActivation()),r.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,s=i.VAR_FG_TRANSLATE_END,l=e.cssClasses,a=l.FG_DEACTIVATION,o=l.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",f="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),g=h.startPoint,m=h.endPoint;c=g.x+"px, "+g.y+"px",f=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(r,c),this.adapter.updateCssVariable(s,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(o),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,i=t.activationEvent,r=t.wasActivatedByPointer,s;r?s=st(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var l={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:l}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,s=r.hasDeactivationUXRun,l=r.isActivated,a=s||!l;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(i)},Ae.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,i=this.activationState;if(!!i.isActivated){var r=P({},i);i.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var i=t.wasActivatedByPointer,r=t.wasElementMadeActive;(i||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),r=function(){var l=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return l+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:r();var s=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!==0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,s=t.VAR_TOP,l=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(l,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Je);const{applyPassive:J}=xe,{matches:lt}=Ne;function De(n,{ripple:e=!0,surface:t=!1,unbounded:i=!1,disabled:r=!1,color:s,active:l,rippleElement:a,eventTarget:o,activeTarget:u,addClass:c=m=>n.classList.add(m),removeClass:f=m=>n.classList.remove(m),addStyle:h=(m,y)=>n.style.setProperty(m,y),initPromise:g=Promise.resolve()}={}){let m,y=q("SMUI:addLayoutListener"),p,O=l,U=o,M=u;function L(){t?(c("mdc-ripple-surface"),s==="primary"?(c("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):s==="secondary"?(f("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),m&&O!==l&&(O=l,l?m.activate():l===!1&&m.deactivate()),e&&!m?(m=new ot({addClass:c,browserSupportsCssVars:()=>rt(window),computeBoundingRect:()=>(a||n).getBoundingClientRect(),containsEventTarget:b=>n.contains(b),deregisterDocumentInteractionHandler:(b,v)=>document.documentElement.removeEventListener(b,v,J()),deregisterInteractionHandler:(b,v)=>(o||n).removeEventListener(b,v,J()),deregisterResizeHandler:b=>window.removeEventListener("resize",b),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>l==null?lt(u||n,":active"):l,isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(b,v)=>document.documentElement.addEventListener(b,v,J()),registerInteractionHandler:(b,v)=>(o||n).addEventListener(b,v,J()),registerResizeHandler:b=>window.addEventListener("resize",b),removeClass:f,updateCssVariable:h}),g.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&g.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(U!==o||M!==u)&&(U=o,M=u,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&c("mdc-ripple-upgraded--unbounded")}L(),y&&(p=y(z));function z(){m&&m.layout()}return{update(b){({ripple:e,surface:t,unbounded:i,disabled:r,color:s,active:l,rippleElement:a,eventTarget:o,activeTarget:u,addClass:c,removeClass:f,addStyle:h,initPromise:g}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:v=>n.classList.add(v),removeClass:v=>n.classList.remove(v),addStyle:(v,D)=>n.style.setProperty(v,D),initPromise:Promise.resolve()},b)),L()},destroy(){m&&(m.destroy(),m=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),p&&p()}}}function ut(n){let e;const t=n[9].default,i=T(t,n,n[11],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2048)&&Y(i,t,r,r[11],e?$(t,r[11],s,null):x(r[11]),null)},i(r){e||(S(i,r),e=!0)},o(r){C(i,r),e=!1},d(r){i&&i.d(r)}}}function ct(n){let e,t,i;const r=[{use:[n[4],...n[0]]},{class:G({[n[1]]:!0,"mdc-button__label":n[5]==="button","mdc-fab__label":n[5]==="fab","mdc-tab__text-label":n[5]==="tab","mdc-image-list__label":n[5]==="image-list","mdc-snackbar__label":n[5]==="snackbar","mdc-banner__text":n[5]==="banner","mdc-segmented-button__label":n[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":n[5]==="data-table:pagination","mdc-data-table__header-cell-label":n[5]==="data-table:sortable-header-cell"})},n[5]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:n[6]},n[7]];var s=n[2];function l(a){let o={$$slots:{default:[ut]},$$scope:{ctx:a}};for(let u=0;u<r.length;u+=1)o=_(o,r[u]);return{props:o}}return s&&(e=new s(l(n)),n[10](e)),{c(){e&&B(e.$$.fragment),t=H()},l(a){e&&de(e.$$.fragment,a),t=H()},m(a,o){e&&k(e,a,o),w(a,t,o),i=!0},p(a,[o]){const u=o&243?ee(r,[o&17&&{use:[a[4],...a[0]]},o&34&&{class:G({[a[1]]:!0,"mdc-button__label":a[5]==="button","mdc-fab__label":a[5]==="fab","mdc-tab__text-label":a[5]==="tab","mdc-image-list__label":a[5]==="image-list","mdc-snackbar__label":a[5]==="snackbar","mdc-banner__text":a[5]==="banner","mdc-segmented-button__label":a[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":a[5]==="data-table:pagination","mdc-data-table__header-cell-label":a[5]==="data-table:sortable-header-cell"})},o&32&&R(a[5]==="snackbar"?{"aria-atomic":"false"}:{}),o&64&&{tabindex:a[6]},o&128&&R(a[7])]):{};if(o&2048&&(u.$$scope={dirty:o,ctx:a}),s!==(s=a[2])){if(e){fe();const c=e;C(c.$$.fragment,1,0,()=>{I(c,1)}),me()}s?(e=new s(l(a)),a[10](e),B(e.$$.fragment),S(e.$$.fragment,1),k(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(a){i||(e&&S(e.$$.fragment,a),i=!0)},o(a){e&&C(e.$$.fragment,a),i=!1},d(a){n[10](null),a&&A(t),e&&I(e,a)}}}function dt(n,e,t){const i=["use","class","component","getElement"];let r=F(e,i),{$$slots:s={},$$scope:l}=e;const a=ae(te());let{use:o=[]}=e,{class:u=""}=e,c,{component:f=Xe}=e;const h=q("SMUI:label:context"),g=q("SMUI:label:tabindex");function m(){return c.getElement()}function y(p){ne[p?"unshift":"push"](()=>{c=p,t(3,c)})}return n.$$set=p=>{e=_(_({},e),E(p)),t(7,r=F(e,i)),"use"in p&&t(0,o=p.use),"class"in p&&t(1,u=p.class),"component"in p&&t(2,f=p.component),"$$scope"in p&&t(11,l=p.$$scope)},[o,u,f,c,a,h,g,r,m,s,y,l]}class ft extends K{constructor(e){super();Q(this,e,dt,ct,N,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}function mt(n){let e;const t=n[9].default,i=T(t,n,n[11],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2048)&&Y(i,t,r,r[11],e?$(t,r[11],s,null):x(r[11]),null)},i(r){e||(S(i,r),e=!0)},o(r){C(i,r),e=!1},d(r){i&&i.d(r)}}}function pt(n){let e,t,i;const r=[{use:[n[5],...n[0]]},{class:G({[n[1]]:!0,"mdc-button__icon":n[6]==="button","mdc-fab__icon":n[6]==="fab","mdc-icon-button__icon":n[6]==="icon-button","mdc-icon-button__icon--on":n[6]==="icon-button"&&n[2],"mdc-tab__icon":n[6]==="tab","mdc-banner__icon":n[6]==="banner","mdc-segmented-button__icon":n[6]==="segmented-button"})},{"aria-hidden":"true"},n[3]===ye?{focusable:"false",tabindex:"-1"}:{},n[7]];var s=n[3];function l(a){let o={$$slots:{default:[mt]},$$scope:{ctx:a}};for(let u=0;u<r.length;u+=1)o=_(o,r[u]);return{props:o}}return s&&(e=new s(l(n)),n[10](e)),{c(){e&&B(e.$$.fragment),t=H()},l(a){e&&de(e.$$.fragment,a),t=H()},m(a,o){e&&k(e,a,o),w(a,t,o),i=!0},p(a,[o]){const u=o&239?ee(r,[o&33&&{use:[a[5],...a[0]]},o&70&&{class:G({[a[1]]:!0,"mdc-button__icon":a[6]==="button","mdc-fab__icon":a[6]==="fab","mdc-icon-button__icon":a[6]==="icon-button","mdc-icon-button__icon--on":a[6]==="icon-button"&&a[2],"mdc-tab__icon":a[6]==="tab","mdc-banner__icon":a[6]==="banner","mdc-segmented-button__icon":a[6]==="segmented-button"})},r[2],o&8&&R(a[3]===ye?{focusable:"false",tabindex:"-1"}:{}),o&128&&R(a[7])]):{};if(o&2048&&(u.$$scope={dirty:o,ctx:a}),s!==(s=a[3])){if(e){fe();const c=e;C(c.$$.fragment,1,0,()=>{I(c,1)}),me()}s?(e=new s(l(a)),a[10](e),B(e.$$.fragment),S(e.$$.fragment,1),k(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(a){i||(e&&S(e.$$.fragment,a),i=!0)},o(a){e&&C(e.$$.fragment,a),i=!1},d(a){n[10](null),a&&A(t),e&&I(e,a)}}}function ht(n,e,t){const i=["use","class","on","component","getElement"];let r=F(e,i),{$$slots:s={},$$scope:l}=e;const a=ae(te());let{use:o=[]}=e,{class:u=""}=e,{on:c=!1}=e,f,{component:h=nt}=e;const g=q("SMUI:icon:context");function m(){return f.getElement()}function y(p){ne[p?"unshift":"push"](()=>{f=p,t(4,f)})}return n.$$set=p=>{e=_(_({},e),E(p)),t(7,r=F(e,i)),"use"in p&&t(0,o=p.use),"class"in p&&t(1,u=p.class),"on"in p&&t(2,c=p.on),"component"in p&&t(3,h=p.component),"$$scope"in p&&t(11,l=p.$$scope)},[o,u,c,h,f,a,g,r,m,s,y,l]}class vt extends K{constructor(e){super();Q(this,e,ht,pt,N,{use:0,class:1,on:2,component:3,getElement:8})}get getElement(){return this.$$.ctx[8]}}const Ct=ft,Dt=vt;function Re(n){let e;return{c(){e=le("div"),this.h()},l(t){e=ue(t,"DIV",{class:!0}),ce(e).forEach(A),this.h()},h(){Fe(e,"class","mdc-button__touch")},m(t,i){w(t,e,i)},d(t){t&&A(e)}}}function bt(n){let e,t,i,r;const s=n[27].default,l=T(s,n,n[29],null);let a=n[6]&&Re();return{c(){e=le("div"),t=Pe(),l&&l.c(),a&&a.c(),i=H(),this.h()},l(o){e=ue(o,"DIV",{class:!0}),ce(e).forEach(A),t=Ee(o),l&&l.l(o),a&&a.l(o),i=H(),this.h()},h(){Fe(e,"class","mdc-button__ripple")},m(o,u){w(o,e,u),w(o,t,u),l&&l.m(o,u),a&&a.m(o,u),w(o,i,u),r=!0},p(o,u){l&&l.p&&(!r||u&536870912)&&Y(l,s,o,o[29],r?$(s,o[29],u,null):x(o[29]),null),o[6]?a||(a=Re(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(o){r||(S(l,o),r=!0)},o(o){C(l,o),r=!1},d(o){o&&A(e),o&&A(t),l&&l.d(o),a&&a.d(o),o&&A(i)}}}function gt(n){let e,t,i;const r=[{use:[[De,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16],...n[0]]},{class:G(se({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[17]==="card:action","mdc-card__action--button":n[17]==="card:action","mdc-dialog__button":n[17]==="dialog:action","mdc-top-app-bar__navigation-icon":n[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[17]==="top-app-bar:action","mdc-snackbar__action":n[17]==="snackbar:actions","mdc-banner__secondary-action":n[17]==="banner"&&n[8],"mdc-banner__primary-action":n[17]==="banner"&&!n[8],"mdc-tooltip__action":n[17]==="tooltip:rich-actions"},n[11]))},{style:Object.entries(n[12]).map(we).concat([n[2]]).join(" ")},n[15],n[14],n[13],{href:n[7]},n[22]];var s=n[9];function l(a){let o={$$slots:{default:[bt]},$$scope:{ctx:a}};for(let u=0;u<r.length;u+=1)o=_(o,r[u]);return{props:o}}return s&&(e=new s(l(n)),n[28](e),e.$on("click",n[21])),{c(){e&&B(e.$$.fragment),t=H()},l(a){e&&de(e.$$.fragment,a),t=H()},m(a,o){e&&k(e,a,o),w(a,t,o),i=!0},p(a,[o]){const u=o&6289919?ee(r,[o&6094873&&{use:[[De,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},o&133490&&{class:G(se({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},o&4100&&{style:Object.entries(a[12]).map(we).concat([a[2]]).join(" ")},o&32768&&R(a[15]),o&16384&&R(a[14]),o&8192&&R(a[13]),o&128&&{href:a[7]},o&4194304&&R(a[22])]):{};if(o&536870976&&(u.$$scope={dirty:o,ctx:a}),s!==(s=a[9])){if(e){fe();const c=e;C(c.$$.fragment,1,0,()=>{I(c,1)}),me()}s?(e=new s(l(a)),a[28](e),e.$on("click",a[21]),B(e.$$.fragment),S(e.$$.fragment,1),k(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(a){i||(e&&S(e.$$.fragment,a),i=!0)},o(a){e&&C(e.$$.fragment,a),i=!1},d(a){n[28](null),a&&A(t),e&&I(e,a)}}}const we=([n,e])=>`${n}: ${e};`;function _t(n,e,t){let i,r,s;const l=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=F(e,l),{$$slots:o={},$$scope:u}=e;const c=ae(te());let{use:f=[]}=e,{class:h=""}=e,{style:g=""}=e,{ripple:m=!0}=e,{color:y="primary"}=e,{variant:p="text"}=e,{touch:O=!1}=e,{href:U=void 0}=e,{action:M="close"}=e,{defaultAction:L=!1}=e,{secondary:z=!1}=e,b,v={},D={},j=q("SMUI:button:context"),{component:pe=U==null?We:Ve}=e,ie=a.disabled;_e("SMUI:label:context","button"),_e("SMUI:icon:context","button");function Me(d){v[d]||t(11,v[d]=!0,v)}function Ue(d){(!(d in v)||v[d])&&t(11,v[d]=!1,v)}function Le(d,X){D[d]!=X&&(X===""||X==null?(delete D[d],t(12,D)):t(12,D[d]=X,D))}function Be(){j==="banner"&&$e(re(),z?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function re(){return b.getElement()}function ke(d){ne[d?"unshift":"push"](()=>{b=d,t(10,b)})}return n.$$set=d=>{t(30,e=_(_({},e),E(d))),t(22,a=F(e,l)),"use"in d&&t(0,f=d.use),"class"in d&&t(1,h=d.class),"style"in d&&t(2,g=d.style),"ripple"in d&&t(3,m=d.ripple),"color"in d&&t(4,y=d.color),"variant"in d&&t(5,p=d.variant),"touch"in d&&t(6,O=d.touch),"href"in d&&t(7,U=d.href),"action"in d&&t(23,M=d.action),"defaultAction"in d&&t(24,L=d.defaultAction),"secondary"in d&&t(8,z=d.secondary),"component"in d&&t(9,pe=d.component),"$$scope"in d&&t(29,u=d.$$scope)},n.$$.update=()=>{t(15,i=j==="dialog:action"&&M!=null?{"data-mdc-dialog-action":M}:{action:e.action}),t(14,r=j==="dialog:action"&&L?{"data-mdc-dialog-button-default":""}:{default:e.default}),t(13,s=j==="banner"?{}:{secondary:e.secondary}),ie!==a.disabled&&(re().blur(),t(26,ie=a.disabled))},e=E(e),[f,h,g,m,y,p,O,U,z,pe,b,v,D,s,r,i,c,j,Me,Ue,Le,Be,a,M,L,re,ie,o,ke,u]}class Rt extends K{constructor(e){super();Q(this,e,_t,gt,N,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}export{Rt as B,Dt as I,Ct as L,Je as M,De as R,Ze as _,P as a,$e as d,Ne as p};
