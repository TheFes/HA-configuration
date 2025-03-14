/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$4=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$4 = class o{constructor(t,e,n){if(this._$cssResult$=true,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new o$4("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$4(n,t,s$3)},S$2=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$2=e$3.trustedTypes,h$1=r$2?r$2.emptyScript:"",o$3=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$2=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:true,type:String,converter:n$4,reflect:false,hasChanged:a$2},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=false,this.hasUpdated=false,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=false),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$1))return  false;this[d$1]=true;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),true}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return  false===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(true),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&true===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=true;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),true===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=false),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=true;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=false;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=false,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return  true}update(t){ void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=true,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$3,h=`<${l$2}>`,r$1=document,u=()=>r$1.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$1.createTreeWalker(r$1,129,null,false);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V$1=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$2+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V$1(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H$1:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function S$1(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,false),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$1(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$1).importNode(s,true);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$1,o}v(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$1(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=false;if(void 0===o)t=S$1(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$1(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}let H$1 = class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}};const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$1(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$1(this,t);}}const B$1=i$1.litHtmlPolyfillSupport;null==B$1||B$1(N,R),(null!==(t$2=i$1.litHtmlVersions)&&void 0!==t$2?t$2:i$1.litHtmlVersions=[]).push("2.8.0");const D$1=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$1;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(true);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(false);}render(){return T}}s.finalized=true,s._$litElement$=true,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return n$1({...t,state:true})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=l=>null!=l?l:A;

var t,r,a=function(e,t){return o(t).format(e)},o=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r||(r={}));var b=function(e){if(e.time_format===r.language||e.time_format===r.system){var t=e.time_format===r.language?e.language:void 0,n=(new Date).toLocaleString(t);return n.includes("AM")||n.includes("PM")}return e.time_format===r.am_pm},D=function(e,t){return S(t).format(e)},S=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:b(e)})};function O(){return (O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}var U=function(e){switch(e.number_format){case t.comma_decimal:return ["en-US","en"];case t.decimal_comma:return ["de","es","it"];case t.space_comma:return ["fr","sv","cs"];case t.system:return;default:return e.language}},B=function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},H=function(e,r,n){var i=r?U(r):void 0;if(Number.isNaN=Number.isNaN||function e(t){return "number"==typeof t&&e(t)},(null==r?void 0:r.number_format)!==t.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,V(e,n)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,V(e,n)).format(Number(e))}return "string"==typeof e?e:B(e,void 0).toString()+("")},V=function(e,t){var r=O({maximumFractionDigits:2},t);if("string"!=typeof e)return r;{var n=e.indexOf(".")>-1?e.split(".")[1].length:0;r.minimumFractionDigits=n,r.maximumFractionDigits=n;}return r},ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i};function _e(e,t,r){if(t.has("config")||r)return  true;if(e.config.entity){var n=t.get("hass");return !n||n.states[e.config.entity]!==e.hass.states[e.config.entity]}return  false}

var common$f = {
	version: "Verze",
	name: "Karta Bodymiscale",
	description: "Karta bodymiscale ukazuje údaje ohledně váhy a tělesných proporcí",
	not_available: "Bodymiscale není dostupná",
	toggle_power: "Více podrobností jako například BMI kCal zobrazit / skrýt"
};
var states$g = {
	ok: "MĚŘENÍ: OK",
	unknown: "STAV: neznámý",
	problem: "Problém",
	none: "Žádný",
	weight_unavailable: "Váha není dostupná",
	impedance_unavailable: "Impedance není dostupná",
	weight_unavailable_and_impedance_unavailable: "Váha a impedance není dostupná",
	weight_low: "nízká váha",
	impedance_low: "nízká impedance",
	weight_low_and_impedance_low: "nízká Váha a impedance",
	impedance_low_and_weight_low: "nízká Impedance a váha",
	weight_high: "vysoká váha",
	impedance_high: "vysoká impedance",
	weight_high_and_impedance_high: "vysoká Váha a impedance",
	weight_high_and_impedance_low: "vysoká váha, nízká impedance",
	weight_low_and_impedance_high: "nízká váha, vysoká impedance"
};
var attributes$f = {
	"weight: ": "Váha: ",
	"impedance: ": "Impedance: ",
	"height: ": "Výška: ",
	"age: ": "Věk: ",
	"gender: ": "Pohlaví: "
};
var attributes_value$f = {
	male: "muž",
	female: "žena",
	unavailable: "nedostupná"
};
var body$f = {
	bmi: "BMI",
	bmi_label: "BMI popis",
	visceral_fat: "Viscerální tuk",
	body_fat: "Tělesný tuk",
	protein: "Protein",
	water: "Voda",
	muscle_mass: "Svalová hmota",
	bone_mass: "Kostní hmota",
	weight: "Váha",
	ideal: "Ideální",
	basal_metabolism: "Základní metabolismus",
	body_type: "Tělesný typ",
	metabolic_age: "Metabolický věk"
};
var body_value$f = {
	skinny: "štíhlý",
	balanced_skinny: "štíhlý-vyvážený",
	skinny_muscular: "štíhlý-svalnatý",
	balanced: "vyvážený",
	balanced_muscular: "vyvážený-svalnatý",
	lack_exercise: "nedostatek cvičení",
	thick_set: "pevné",
	obese: "obézní",
	overweight: "nadváha",
	underweight: "podváha",
	normal_or_healthy_weight: "normální či zdravá váha",
	slight_overweight: "lehká nadváha",
	moderate_obesity: "menší obezita",
	severe_obesity: "vážná obezita",
	massive_obesity: "velká obezita",
	unavailable: "nedostupná"
};
var unit$f = {
	" years": " let"
};
var error$f = {
	missing_entity: "Prosím definujte entitu.",
	missing_entity_bodymiscale: "Prosím definujte entitu bodymiscale."
};
var editor$g = {
	entity: "Prosím definujte účet váhy (povinné) !",
	image: "Obrázek pozadí (volitelné)",
	model: "Máte senzor impedance?",
	model1: "Aktivujte tuto funkci pro přesné měření složení těla.",
	model_aria_label_on: "Aktivovat impedanci",
	model_aria_label_off: "Deaktivovat impedanci",
	unit: "Převést kilogramy na libry",
	unit_aria_label_on: "Zapnout konverzi",
	unit_aria_label_off: "Vypnout konverzi",
	show_name: "Zobrazovat jméno účtu jako titulek ?",
	show_name_aria_label_on: "Zapnout zobrazování jména",
	show_name_aria_label_off: "Vypnout zobrazování jména",
	show_states: "Zobrazit stav ?",
	show_states_aria_label_on: "Zapnout zobrazování stavu",
	show_states_aria_label_off: "Vypnout zobrazování stavu",
	show_attributes: "Show hlavní osobní data (vpravo nahoře) ?",
	show_attributes_aria_label_on: "Zapnout zobrazování atributů",
	show_attributes_aria_label_off: "Vypnout zobrazování atributů",
	show_always_details: "Vždy zobrazovat detaily",
	show_always_details_aria_label_on: "Zapnout výchozí zobrazení podrobností",
	show_always_details_aria_label_off: "Vypnout výchozí zobrazení podrobností",
	show_toolbar: "Zobrazit pokročilá nastavení ?",
	show_toolbar_aria_label_on: "Zapnout zobrazení pokročilých nastavení",
	show_toolbar_aria_label_off: "Vypnout zobrazení pokročilých nastavení",
	show_body: "Nabízet další detaily měření",
	show_body1: "(spodní polovina - zobrazí se po klepnutí na ikonu šipky dolů) ?",
	show_body_aria_label_on: "Zapnout zobrazování tělesného skóre",
	show_body_aria_label_off: "Vypnout zobrazování tělesného skóre",
	show_buttons: "Povolit změnu účtu ?",
	show_buttons_aria_label_on: "Zapnout zobrazování tlačítek",
	show_buttons_aria_label_off: "Vypnout zobrazování tlačítek",
	header_options: "1. Možnosti záhlaví karty",
	body_options: "2. Více možností karty",
	code_only_note: "POZOR: Další možnosti jsou dostupné pouze v editor kódu."
};
var cs = {
	common: common$f,
	states: states$g,
	attributes: attributes$f,
	attributes_value: attributes_value$f,
	body: body$f,
	body_value: body_value$f,
	unit: unit$f,
	error: error$f,
	editor: editor$g
};

var cs$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$f,
    attributes_value: attributes_value$f,
    body: body$f,
    body_value: body_value$f,
    common: common$f,
    default: cs,
    editor: editor$g,
    error: error$f,
    states: states$g,
    unit: unit$f
});

var common$e = {
	version: "Version",
	name: "Bodymiscale Karte",
	description: "Die bodymiscale Karte zeigt Ihren gewichtsmäßigen Körperstatus an.",
	not_available: "Bodymiscale ist momenatan nicht verfügbar",
	toggle_power: "Weitere Details wie BMI kCal anzeigen / ausblenden"
};
var states$f = {
	ok: "MESSUNG: OK",
	unknown: "STATUS: unbekannt",
	problem: "Problem",
	none: "keine",
	weight_unavailable: "Gewichtsmessung nicht verfügbar",
	impedance_unavailable: "Bioelektrische Impedanzmessung (Körperzusammensetzung) nicht verfügbar",
	weight_unavailable_and_impedance_unavailable: "Gewichts- und bioelektrische Impedanzmessung (Körperzusammensetzung) nicht verfügbar."
};
var attributes$e = {
	"weight: ": "Gewicht: ",
	"impedance: ": "Zusammensetzung: ",
	"height: ": "Körpergröße: ",
	"age: ": "Alter: ",
	"gender: ": "Geschlecht: "
};
var attributes_value$e = {
	male: "männl.",
	female: "weibl.",
	unavailable: "Nicht verfügbar"
};
var body$e = {
	bmi: "BMI",
	bmi_label: "BMI Klassifikation",
	visceral_fat: "Bauchfett",
	body_fat: "Körperfett",
	protein: "Protein",
	water: "Wasser",
	muscle_mass: "Muskelmasse",
	bone_mass: "Knochenmasse",
	weight: "Gewicht",
	ideal: "Idealgewicht",
	basal_metabolism: "Grundumsatz",
	body_type: "Körperbau",
	metabolic_age: "stoffwechselbedingtes Körperalter"
};
var body_value$e = {
	skinny: "schlank",
	balanced_skinny: "ausgeglichen schlank",
	skinny_muscular: "muskulös schlank",
	balanced: "ausgewogen",
	balanced_muscular: "ausgewogen muskulös",
	lack_exercise: "Bewegungsmangel",
	thick_set: "stämmig",
	obese: "fettleibig",
	overweight: "Übergewicht",
	underweight: "Untergewicht",
	normal_or_healthy_weight: "Normal - gesundes Gewicht",
	slight_overweight: "leichtes Übergewicht",
	moderate_obesity: "moderate Fettleibigkeit",
	severe_obesity: "schwere Fettleibigkeit",
	massive_obesity: "massive Fettleibigkeit",
	unavailable: "Nicht verfügbar"
};
var unit$e = {
	" years": " Jahre"
};
var error$e = {
	missing_entity: "Bitte definieren Sie eine Entität in der Konfiguration.",
	missing_entity_bodymiscale: "Bitte definieren Sie \"bodymiscale\" als Entität in der Konfiguration."
};
var editor$f = {
	entity: "Bitte ein Konto auf der Waage wählen (erforderlich)!",
	image: "Hintergrundbild (optional)",
	model: "Haben Sie einen Impedanzsensor?",
	model1: "Aktivieren Sie diese Funktion für genaue Körperzusammensetzungsmessungen.",
	model_aria_label_on: "Impedanz aktivieren",
	model_aria_label_off: "Impedanz deaktivieren",
	unit: "kg in lbs umrechnen",
	unit_aria_label_on: "Konvertierung einschalten",
	unit_aria_label_off: "Umwandlung deaktivieren",
	show_name: "Namen des Konto als Titel anzeigen?",
	show_name_aria_label_on: "Namensanzeige einschalten",
	show_name_aria_label_off: "Namesanzeige ausschalten",
	show_states: "Status anzeigen (Symbole links oben)?",
	show_states_aria_label_on: "Statusanzeige einschalten",
	show_states_aria_label_off: "Statusanzeige ausschalten",
	show_attributes: "Persönliche Stammdaten anzeigen (rechts oben)?",
	show_attributes_aria_label_on: "Basis Daten einblenden (rechts oben) einschalten",
	show_attributes_aria_label_off: "Basis Daten einblenden (rechts oben) ausschalten",
	show_always_details: "Details immer anzeigen",
	show_always_details_aria_label_on: "Schalten Sie die standardmäßige Detailansicht ein",
	show_always_details_aria_label_off: "Schaltet die standardmäßige Detailansicht aus",
	show_toolbar: "Fortgeschrittene Optionen anzeigen ?",
	show_toolbar_aria_label_on: "Symbolleiste anzeigen einschalten",
	show_toolbar_aria_label_off: "Symbolleiste anzeigen ausschalten",
	show_body: "Weitere Messergebnisse anbieten",
	show_body1: "(untere Hälfte - per Chevron-Symbol einblenden)?",
	show_body_aria_label_on: "Körperwertanzeige einschalten",
	show_body_aria_label_off: "Körperwertanzeige ausschalten",
	show_buttons: "Kontowechsel erlauben?",
	show_buttons_aria_label_on: "Schaltfläche anzeigen einschalten",
	show_buttons_aria_label_off: "Schaltfläche anzeigen ausschalten",
	header_options: "1. Kartenkopf Optionen",
	body_options: "2. mehr Kartenoptionen",
	code_only_note: "ACHTUNG: Weitere Optionen sind nur im Code Editor verfügbar."
};
var de = {
	common: common$e,
	states: states$f,
	attributes: attributes$e,
	attributes_value: attributes_value$e,
	body: body$e,
	body_value: body_value$e,
	unit: unit$e,
	error: error$e,
	editor: editor$f
};

var de$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$e,
    attributes_value: attributes_value$e,
    body: body$e,
    body_value: body_value$e,
    common: common$e,
    default: de,
    editor: editor$f,
    error: error$e,
    states: states$f,
    unit: unit$e
});

var common$d = {
	version: "Version",
	name: "Bodymiscale Card",
	description: "The bodymiscale card shows you your weight wise / related body status.",
	not_available: "Bodymiscale is not available",
	toggle_power: "More details like BMI kCal show / hide"
};
var states$e = {
	ok: "MEASUREMENT: OK",
	unknown: "STATE: unknown",
	problem: "Problem",
	none: "None",
	weight_unavailable: "Weight unavailable",
	impedance_unavailable: "Impedance unavailable",
	weight_unavailable_and_impedance_unavailable: "Weight and impedance unavailable",
	weight_low: "Weight low",
	impedance_low: "Impedance low",
	weight_low_and_impedance_low: "Weight and impedance low",
	impedance_low_and_weight_low: "Impedance and weight low",
	weight_high: "Weight high",
	impedance_high: "Impedance high",
	weight_high_and_impedance_high: "Weight and impedance high",
	weight_high_and_impedance_low: "Weight high, impedance low",
	weight_low_and_impedance_high: "Weight low, impedance high"
};
var attributes$d = {
	"weight: ": "Weight: ",
	"impedance: ": "Impedance: ",
	"height: ": "Height: ",
	"age: ": "Age: ",
	"gender: ": "Gender: "
};
var attributes_value$d = {
	male: "male",
	female: "female",
	unavailable: "unavailable"
};
var body$d = {
	bmi: "BMI",
	bmi_label: "BMI label",
	visceral_fat: "Visceral fat",
	body_fat: "Body fat",
	protein: "Protein",
	water: "Water",
	muscle_mass: "Muscle mass",
	bone_mass: "Bone mass",
	weight: "Weight",
	ideal: "Ideal",
	basal_metabolism: "Basal metabolism",
	body_type: "Body type",
	metabolic_age: "Metabolic age"
};
var body_value$d = {
	skinny: "Skinny",
	balanced_skinny: "Balanced-skinny",
	skinny_muscular: "Skinny-muscular",
	balanced: "Balanced",
	balanced_muscular: "Balanced-muscular",
	lack_exercise: "Lack-exercise",
	thick_set: "Thick-set",
	obese: "Obese",
	overweight: "Overweight",
	underweight: "Underweight",
	normal_or_healthy_weight: "Normal or Healthy Weight",
	slight_overweight: "Slight overweight",
	moderate_obesity: "Moderate obesity",
	severe_obesity: "Severe obesity",
	massive_obesity: "Massive obesity",
	unavailable: "unavailable"
};
var unit$d = {
	" years": " years"
};
var error$d = {
	invalid_config: "Invalid configuration",
	missing_entity: "Please define an entity.",
	missing_entity_bodymiscale: "Please define a bodymiscale entity."
};
var editor$e = {
	entity: "Please select an account on the scale (required)!",
	image: "Background image (optional)",
	model: "Do you have an impedance sensor?",
	model1: "Enable this feature for accurate body composition measurements.",
	model_aria_label_on: "Enable impedance",
	model_aria_label_off: "Disable impedance",
	unit: "Convert kg to lbs",
	unit_aria_label_on: "Toggle the conversion on",
	unit_aria_label_off: "Toggle the conversion off",
	theme: "Configure the theme you use.",
	theme_aria_label_on: "Toggle theme light on",
	theme_aria_label_off: "Toggle theme dark off",
	show_name: "Show the name of the account as title?",
	show_name_aria_label_on: "Toggle display name on",
	show_name_aria_label_off: "Toggle display name off",
	show_states: "Show State?",
	show_states_aria_label_on: "Toggle display state on",
	show_states_aria_label_off: "Toggle display state off",
	show_attributes: "Show personal master data (top right)?",
	show_attributes_aria_label_on: "Toggle display attributes on",
	show_attributes_aria_label_off: "Toggle display attributes off",
	show_always_details: "Always show details",
	show_always_details_aria_label_on: "Toggle default detail view on",
	show_always_details_aria_label_off: "Toggle default detail view off",
	show_toolbar: "Show advanced options?",
	show_toolbar_aria_label_on: "Toggle display advanced options on",
	show_toolbar_aria_label_off: "Toggle display advanced options off",
	show_body: "Offer further measurement details",
	show_body1: "(lower half - icon chevron down will show those)?",
	show_body_aria_label_on: "Toggle display body score on",
	show_body_aria_label_off: "Toggle display body score off",
	show_buttons: "Allow account switch?",
	show_buttons_aria_label_on: "Toggle display buttons on",
	show_buttons_aria_label_off: "Toggle display buttons off",
	header_options: "1. Card header options",
	body_options: "2. More card options",
	code_only_note: "ATTENTION: Additional options are only available in the code editor."
};
var en = {
	common: common$d,
	states: states$e,
	attributes: attributes$d,
	attributes_value: attributes_value$d,
	body: body$d,
	body_value: body_value$d,
	unit: unit$d,
	error: error$d,
	editor: editor$e
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$d,
    attributes_value: attributes_value$d,
    body: body$d,
    body_value: body_value$d,
    common: common$d,
    default: en,
    editor: editor$e,
    error: error$d,
    states: states$e,
    unit: unit$d
});

var common$c = {
	version: "Versión",
	name: "Tarjeta Bodymiscale",
	description: "La tarjeta bodymiscale muestra el estado de tu cuerpo en relación a tu peso.",
	not_available: "Bodymiscale no está disponible",
	toggle_power: "Mostrar / ocultar más detalles como IMC,kCal"
};
var states$d = {
	ok: "MEDICIÓN: OK",
	unknown: "ESTADO: desconocido",
	problem: "Problema",
	none: "Ninguno",
	weight_unavailable: "Peso no disponible",
	impedance_unavailable: "Impedancia no disponible",
	weight_unavailable_and_impedance_unavailable: "Peso e impedancia no disponibles",
	weight_low: "Peso bajo",
	impedance_low: "Impedancia baja",
	weight_low_and_impedance_low: "Peso e impedancia bajos",
	impedance_low_and_weight_low: "Impedancia y peso bajos",
	weight_high: "Peso alto",
	impedance_high: "Impedancia alta",
	weight_high_and_impedance_high: "Peso e impedancia altos",
	weight_high_and_impedance_low: "Peso alto, impedancia baja",
	weight_low_and_impedance_high: "Peso bajo, impedancia alta"
};
var attributes$c = {
	"weight: ": "Peso: ",
	"impedance: ": "Impedancia: ",
	"height: ": "Altura: ",
	"age: ": "Edad: ",
	"gender: ": "Sexo: "
};
var attributes_value$c = {
	male: "masculino",
	female: "femenino",
	unavailable: "no disponible"
};
var body$c = {
	bmi: "IMC",
	bmi_label: "Etiqueta IMC",
	visceral_fat: "Grasa visceral",
	body_fat: "Grasa corporal",
	protein: "Proteína",
	water: "Agua",
	muscle_mass: "Masa muscular",
	bone_mass: "Masa ósea",
	weight: "Peso",
	ideal: "Ideal",
	basal_metabolism: "Metabolismo basal",
	body_type: "Tipo de cuerpo",
	metabolic_age: "Edad metabólica"
};
var body_value$c = {
	skinny: "Flaco",
	balanced_skinny: "Flaco equilibrado",
	skinny_muscular: "Flaco musculoso",
	balanced: "Equilibrado",
	balanced_muscular: "Musculuso equilibrado",
	lack_exercise: "Falto de ejercicio",
	thick_set: "Rechoncho",
	obese: "Obeso",
	overweight: "Sobrepeso",
	underweight: "Por debajo del peso normal",
	normal_or_healthy_weight: "Normal",
	slight_overweight: "Ligero sobrepeso",
	moderate_obesity: "Obesidad moderada",
	severe_obesity: "Obesidad severa",
	massive_obesity: "Obesidad masiva",
	unavailable: "no disponible"
};
var unit$c = {
	" years": " años"
};
var error$c = {
	missing_entity: "Por favor, defina una entidad.",
	missing_entity_bodymiscale: "Por favor, defina una entidad bodymiscale."
};
var editor$d = {
	entity: "Por favor, escoja una cuenta de la bácula (necesario)!",
	image: "Imagen de fondo (opcional)",
	model: "¿Tiene un sensor de impedancia?",
	model1: "Active esta función para mediciones precisas de la composición corporal.",
	model_aria_label_on: "Activar impedancia",
	model_aria_label_off: "Desactivar impedancia",
	unit: "Convertir kg a lbs",
	unit_aria_label_on: "Activar conversión",
	unit_aria_label_off: "Desactivar conversión",
	show_name: "¿Mostrar el nombre de la cuenta como título?",
	show_name_aria_label_on: "Mostrar nombre como título",
	show_name_aria_label_off: "Ocultar nombre como título",
	show_states: "¿Mostrar estado de la báscula?",
	show_states_aria_label_on: "Mostrar estado de la báscula",
	show_states_aria_label_off: "Ocultar estado de la báscula",
	show_attributes: "¿Mostrar datos de perfil personal (esquina superior derecha)?",
	show_attributes_aria_label_on: "Mostrar atributos",
	show_attributes_aria_label_off: "Ocultar atributos",
	show_always_details: "Mostrar siempre los detalles",
	show_always_details_aria_label_on: "Mostrar la vista de detalles predeterminada",
	show_always_details_aria_label_off: "Ocultar la vista de detalles predeterminada",
	show_toolbar: "¿Mostrar opciones avanzadas?",
	show_toolbar_aria_label_on: "Mostrar opciones avanzadas",
	show_toolbar_aria_label_off: "Ocultar opciones avanzadas",
	show_body: "Mostrar más detalles de la medición",
	show_body1: "¿(parte inferior - pulsar en la fecha para mostrar)?",
	show_body_aria_label_on: "Mostrar puntuación corporal",
	show_body_aria_label_off: "Ocultar puntuación corporal",
	show_buttons: "¿Permitir cambio de cuenta?",
	show_buttons_aria_label_on: "Mostrar botones de cuenta",
	show_buttons_aria_label_off: "Ocultar botones de cuenta",
	header_options: "1. Opciones de cabecera de tarjeta",
	body_options: "2. Más opciones de tarjeta",
	code_only_note: "ATENCIÓN: Opciones adicionales sólo están disponibles en el editor de código."
};
var es = {
	common: common$c,
	states: states$d,
	attributes: attributes$c,
	attributes_value: attributes_value$c,
	body: body$c,
	body_value: body_value$c,
	unit: unit$c,
	error: error$c,
	editor: editor$d
};

var es$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$c,
    attributes_value: attributes_value$c,
    body: body$c,
    body_value: body_value$c,
    common: common$c,
    default: es,
    editor: editor$d,
    error: error$c,
    states: states$d,
    unit: unit$c
});

var common$b = {
	version: "Version",
	name: "Carte Bodymiscale",
	description: "La carte bodymiscale corporelle vous indique votre poids et votre état corporel.",
	not_available: "Bodymiscale n'est pas disponible",
	toggle_power: "Plus de détails comme IMC kCal afficher / cacher"
};
var states$c = {
	ok: "MESURE : OK",
	unknown: "ÉTAT : inconnu",
	problem: "Problème",
	none: "Aucun",
	weight_unavailable: "Poids indisponible",
	impedance_unavailable: "Impédance indisponible",
	weight_unavailable_and_impedance_unavailable: "Poids et impédance indisponibles",
	weight_low: "Poids faible",
	impedance_low: "Impédance faible",
	weight_low_and_impedance_low: "Poids et impédance faibles",
	impedance_low_and_weight_low: "Impédance et poids faibles",
	weight_high: "Poids élevé",
	impedance_high: "Impédance élevée",
	weight_high_and_impedance_high: "Poids et impédance élevés",
	weight_high_and_impedance_low: "Poids élevé, impédance faible",
	weight_low_and_impedance_high: "Poids faible, impédance élevée"
};
var attributes$b = {
	"weight: ": "Poids: ",
	"impedance: ": "Impédance: ",
	"height: ": "Taille: ",
	"age: ": "Age: ",
	"gender: ": "Genre: "
};
var attributes_value$b = {
	male: "homme",
	female: "femme",
	unavailable: "indisponible"
};
var body$b = {
	bmi: "IMC",
	bmi_label: "Étiquette IMC",
	visceral_fat: "Graisse viscérale",
	body_fat: "Graisse corporelle",
	protein: "Protéine",
	water: "Eau",
	muscle_mass: "Masse musculaire",
	bone_mass: "Masse osseuse",
	weight: "Poids",
	ideal: "Poids idéal",
	basal_metabolism: "Métabolisme de base",
	body_type: "Corpulence",
	metabolic_age: "Age corporel"
};
var body_value$b = {
	skinny: "Maigre",
	balanced_skinny: "Équilibré maigre",
	skinny_muscular: "Maigre musclé",
	balanced: "Équilibré",
	balanced_muscular: "Musclé équilibré",
	lack_exercise: "Manque d'exercice",
	thick_set: "Trapu",
	obese: "Obèse",
	overweight: "Surpoids",
	underweight: "Insuffisance pondérale",
	normal_or_healthy_weight: "Normal - poids de santé",
	slight_overweight: "Léger surpoids",
	moderate_obesity: "Obésité modérée",
	severe_obesity: "Obésité sévère",
	massive_obesity: "Obésité massive",
	unavailable: "indisponible"
};
var unit$b = {
	" years": " ans"
};
var error$b = {
	missing_entity: "Veuillez définir une entité.",
	missing_entity_bodymiscale: "Veuillez définir une entité Bodymiscale."
};
var editor$c = {
	entity: "Veuillez choisir un compte de la balance (obligatoire) !",
	image: "Image de fond (facultatif)",
	model: "Vous avez un capteur d'impédance ?",
	model1: "Activez cette fonctionnalité pour des mesures corporelle précises.",
	model_aria_label_on: "Activez l'impédance",
	model_aria_label_off: "Désactiver l'impédance",
	unit: "Convertir les kg en lbs",
	unit_aria_label_on: "Activer la conversion",
	unit_aria_label_off: "Désactiver la conversion",
	theme: "Configurer le thème que vous utilisez.",
	theme_aria_label_on: "Activer thème clair",
	theme_aria_label_off: "Désactiver thème sombre",
	show_name: "Afficher le nom du compte comme titre ?",
	show_name_aria_label_on: "Activer affichage du nom",
	show_name_aria_label_off: "Désactiver affichage du nom",
	show_states: "Afficher l'état ?",
	show_states_aria_label_on: "Activer l'affichage de l'état",
	show_states_aria_label_off: "Désactiver l'affichage de l'état",
	show_attributes: "Afficher les données personnelles de base (en haut à droite) ?",
	show_attributes_aria_label_on: "Activer l'affichage des données personnelles de base",
	show_attributes_aria_label_off: "Désactiver l'affichage des données personnelles de base",
	show_always_details: "Toujours afficher les détails",
	show_always_details_aria_label_on: "Activer l'affichage des détails par défaut",
	show_always_details_aria_label_off: "Désactiver l'affichage des détails par défaut",
	show_toolbar: "Afficher les options avancées ?",
	show_toolbar_aria_label_on: "Activer l'affichage des options avancées",
	show_toolbar_aria_label_off: "Désactiver l'affichage des options avancées",
	show_body: "Offrir d'autres détails de mesure",
	show_body1: "(partie inférieure - affichage via l'icone chevron bas) ?",
	show_body_aria_label_on: "Activer l'affichage des autres détails de mesure",
	show_body_aria_label_off: "Désactiver l'affichage des autres détails de mesure",
	show_buttons: "Autoriser le changement de compte ?",
	show_buttons_aria_label_on: "Activer le changement de compte",
	show_buttons_aria_label_off: "Désactiver le changement de compte",
	header_options: "1. Options d'en-tête de la carte",
	body_options: "2. Plus d'options de la cartes",
	code_only_note: "ATTENTION: Les options supplémentaires ne sont disponibles que dans l'éditeur de code."
};
var fr = {
	common: common$b,
	states: states$c,
	attributes: attributes$b,
	attributes_value: attributes_value$b,
	body: body$b,
	body_value: body_value$b,
	unit: unit$b,
	error: error$b,
	editor: editor$c
};

var fr$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$b,
    attributes_value: attributes_value$b,
    body: body$b,
    body_value: body_value$b,
    common: common$b,
    default: fr,
    editor: editor$c,
    error: error$b,
    states: states$c,
    unit: unit$b
});

var common$a = {
	version: "Verzió",
	name: "Bodymiscale Kártya",
	description: "A BodyMiScale kártya megmutatja az ön súlyhoz viszonyított testi állapotát.",
	not_available: "A Bodymiscale nem elérhető",
	toggle_power: "További részletek, például a BMI, kCal megjelenítése / elrejtése"
};
var states$b = {
	ok: "MÉRÉS: RENDBEN",
	unknown: "ÁLLAPOT: ismeretlen",
	problem: "Probléma",
	none: "Nincs",
	weight_unavailable: "Súly nem elérhető",
	impedance_unavailable: "Impedancia nem elérhető",
	weight_unavailable_and_impedance_unavailable: "Súly és impedancia nem elérhető",
	weight_low: "Alacsony súly",
	impedance_low: "Alacsony impedancia",
	weight_low_and_impedance_low: "Alacsony súly és impedancia",
	impedance_low_and_weight_low: "Alacsony impedancia és súly",
	weight_high: "Magas súly",
	impedance_high: "Magas impedancia",
	weight_high_and_impedance_high: "Magas súly és impedancia",
	weight_high_and_impedance_low: "Magas súly, alacsony impedancia",
	weight_low_and_impedance_high: "Alacsony súly, magas impedancia"
};
var attributes$a = {
	"weight: ": "Súly: ",
	"impedance: ": "Impedancia: ",
	"height: ": "Magasság: ",
	"age: ": "Kor: ",
	"gender: ": "Nem: "
};
var attributes_value$a = {
	male: "férfi",
	female: "nő",
	unavailable: "nem elérhető"
};
var body$a = {
	bmi: "BMI",
	bmi_label: "BMI címke",
	visceral_fat: "Zsigeri zsír",
	body_fat: "Testzsír",
	protein: "Fehérje",
	water: "Víz",
	muscle_mass: "Izomtömeg",
	bone_mass: "Csonttömeg",
	weight: "Súly",
	ideal: "Ideális",
	basal_metabolism: "Alapanyagcsere",
	body_type: "Testtípus",
	metabolic_age: "Anyagcsere kor"
};
var body_value$a = {
	skinny: "Sovány",
	balanced_skinny: "Kiegyensúlyozott-sovány",
	skinny_muscular: "Sovány-izmos",
	balanced: "Kiegyensúlyozott",
	balanced_muscular: "Kiegyensúlyozott-izmos",
	lack_exercise: "Mozgáshiányos",
	thick_set: "Közepesen molett",
	obese: "Kórosan elhízott",
	overweight: "Túlsúlyos",
	underweight: "Súlyhiányos",
	normal_or_healthy_weight: "Normál vagy egészséges testsúly",
	slight_overweight: "Enyhe túlsúly",
	moderate_obesity: "Közepes elhízottság",
	severe_obesity: "Súlyos elhízottság",
	massive_obesity: "Masszív elhízottság",
	unavailable: "nem elérhető"
};
var unit$a = {
	" years": " év"
};
var error$a = {
	missing_entity: "Kérjük, definiáljon egy entitást.",
	missing_entity_bodymiscale: "Kérjük, definiáljon egy BodyMiScale entitást."
};
var editor$b = {
	entity: "Kérjük, válasszon egy fiókot a mérlegen (kötelező)!",
	image: "Háttérkép (opcionális)",
	model: "Rendelkezik impedancia érzékelővel?",
	model1: "A pontos testösszetétel mérésekhez aktiválja ezt a funkciót.",
	model_aria_label_on: "Impedancia engedélyezése",
	model_aria_label_off: "Impedancia letiltása",
	unit: "Kg átszámítása fonttá",
	unit_aria_label_on: "Átszámítás bekapcsolása",
	unit_aria_label_off: "Átszámítás kikapcsolása",
	theme: "Állítsa be a használt témát.",
	theme_aria_label_on: "Világos téma bekapcsolása",
	theme_aria_label_off: "Sötét téma kikapcsolása",
	show_name: "Mutassa a fiók nevét címként?",
	show_name_aria_label_on: "Név megjelenítésének bekapcsolása",
	show_name_aria_label_off: "Név megjelenítésének kikapcsolása",
	show_states: "Állapot mutatása?",
	show_states_aria_label_on: "Állapot megjelenítésének bekapcsolása",
	show_states_aria_label_off: "Állapot megjelenítésének kikapcsolása",
	show_attributes: "Személyes adatok mutatása (jobb felső sarokban)?",
	show_attributes_aria_label_on: "Személyes adatok megjelenítésének bekapcsolása",
	show_attributes_aria_label_off: "Személyes adatok megjelenítésének kikapcsolása",
	show_always_details: "Mindig mutassa a részleteket",
	show_always_details_aria_label_on: "Alapértelmezett részletes nézet bekapcsolása",
	show_always_details_aria_label_off: "Alapértelmezett részletes nézet kikapcsolása",
	show_toolbar: "Mutassa a haladó beállításokat?",
	show_toolbar_aria_label_on: "Haladó beállítások megjelenítésének bekapcsolása",
	show_toolbar_aria_label_off: "Haladó beállítások megjelenítésének kikapcsolása",
	show_body: "Kínáljon további mérési részleteket",
	show_body1: "(alsó rész - a lefelé mutató nyíl ikonra kattintva megjeleníthető)?",
	show_body_aria_label_on: "Test pontszám megjelenítésének bekapcsolása",
	show_body_aria_label_off: "Test pontszám megjelenítésének kikapcsolása",
	show_buttons: "Fiókváltás engedélyezése?",
	show_buttons_aria_label_on: "Gombok megjelenítésének bekapcsolása",
	show_buttons_aria_label_off: "Gombok megjelenítésének kikapcsolása",
	header_options: "1. Kártya fejléc beállítások",
	body_options: "2. További kártya beállítások",
	code_only_note: "FIGYELEM: További beállítások csak a kód szerkesztőben érhetők el."
};
var hu = {
	common: common$a,
	states: states$b,
	attributes: attributes$a,
	attributes_value: attributes_value$a,
	body: body$a,
	body_value: body_value$a,
	unit: unit$a,
	error: error$a,
	editor: editor$b
};

var hu$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$a,
    attributes_value: attributes_value$a,
    body: body$a,
    body_value: body_value$a,
    common: common$a,
    default: hu,
    editor: editor$b,
    error: error$a,
    states: states$b,
    unit: unit$a
});

var common$9 = {
	version: "Versione",
	name: "Bodymiscale Card",
	description: "La card bodymiscale ti mostra il tuo peso/stato corporeo relativo.",
	not_available: "Bodymiscale non è disponibile",
	toggle_power: "Più dettagli come BMI kCal mostra / nascondi"
};
var states$a = {
	ok: "MISURAZIONE: OK",
	unknown: "STATO: sconosciuto",
	problem: "Problema",
	none: "Nessuno",
	weight_unavailable: "Peso non disponibile",
	impedance_unavailable: "Impedenza non disponibile",
	weight_unavailable_and_impedance_unavailable: "Peso e impedenza non disponibili",
	weight_low: "Peso basso",
	impedance_low: "Impedenza bassa",
	weight_low_and_impedance_low: "Peso e impedenza bassi",
	impedance_low_and_weight_low: "Impedenza e peso bassi",
	weight_high: "Peso alto",
	impedance_high: "Impedenza alta",
	weight_high_and_impedance_high: "Peso e impedenza alti",
	weight_high_and_impedance_low: "Peso alto, impedenza bassa",
	weight_low_and_impedance_high: "Peso basso, impedenza alta"
};
var attributes$9 = {
	"weight: ": "Peso: ",
	"impedance: ": "Impedenza: ",
	"height: ": "Altezza: ",
	"age: ": "Età: ",
	"gender: ": "Sesso: "
};
var attributes_value$9 = {
	male: "uomo",
	female: "donna",
	unavailable: "non disponibile"
};
var body$9 = {
	bmi: "BMI",
	bmi_label: "BMI Categoria",
	visceral_fat: "Grasso viscerale",
	body_fat: "Grasso corporeo",
	protein: "Proteine",
	water: "Acqua",
	muscle_mass: "Massa muscolare",
	bone_mass: "Massa ossea",
	weight: "Peso",
	ideal: "Ideale",
	basal_metabolism: "Metabolismo base",
	body_type: "Tipo di corpo",
	metabolic_age: "Età metabolica"
};
var body_value$9 = {
	skinny: "Magro",
	balanced_skinny: "Bilanciato-magro",
	skinny_muscular: "Magro-muscoloso",
	balanced: "Bilanciato",
	balanced_muscular: "Bilanciato-muscoloso",
	lack_exercise: "Manca-esercizio",
	thick_set: "Spesso-impostato",
	obese: "Obeso",
	overweight: "Sovrappeso",
	underweight: "Sottopeso",
	normal_or_healthy_weight: "Normale o Peso Sano",
	slight_overweight: "Leggermente in sovrappeso",
	moderate_obesity: "Obesità Moderata",
	severe_obesity: "Obesità Grave",
	massive_obesity: "Obesità Massiccia",
	unavailable: "non disponibile"
};
var unit$9 = {
	" years": " anni"
};
var error$9 = {
	missing_entity: "Perfavore definisci un'entità.",
	missing_entity_bodymiscale: "Perfavore definisci un'entità di tipo bodymiscale."
};
var editor$a = {
	entity: "Perfavore seleziona un account sulla bilancia (richiesto) !",
	image: "Immagine di sfondo (opzionale)",
	model: "Hai un sensore di impedenza?",
	model1: "Attiva questa funzione per misurazioni accurate della composizione corporea.",
	model_aria_label_on: "Abilita impedenza",
	model_aria_label_off: "Disabilita impedenza",
	unit: "Converti da kg a lbs",
	unit_aria_label_on: "Attiva la conversione",
	unit_aria_label_off: "Disattiva la conversione",
	show_name: "Mostrare il nome dell'account come titolo  ?",
	show_name_aria_label_on: "Attiva la visione del nome",
	show_name_aria_label_off: "Disattiva la visione del nome",
	show_states: "Mostrare lo Stato ?",
	show_states_aria_label_on: "Attiva la visione dello stato",
	show_states_aria_label_off: "Disattiva la visione dello stato",
	show_attributes: "Mostrare i dati anagrafici personali (in alto a destra) ?",
	show_attributes_aria_label_on: "Attiva la visione degli attributi",
	show_attributes_aria_label_off: "Disattiva la visione degli attributi",
	show_always_details: "Mostra sempre i dettagli",
	show_always_details_aria_label_on: "Attiva la visualizzazione dettagliata predefinita",
	show_always_details_aria_label_off: "Disattiva la visualizzazione dettagliata predefinita",
	show_toolbar: "Mostrare opzioni avanzate ?",
	show_toolbar_aria_label_on: "Attiva opzioni avanzate",
	show_toolbar_aria_label_off: "Disattiva opzioni avanzate",
	show_body: "Offrire ulteriori dettagli di misurazione",
	show_body1: "(metà inferiore - l'icona con la spunta ve li mostrerà) ?",
	show_body_aria_label_on: "Attiva la visione del punteggio del corpo",
	show_body_aria_label_off: "Disattiva la visione del punteggio del corpo",
	show_buttons: "Consenti il cambio di account ?",
	show_buttons_aria_label_on: "Attiva la visione dei pulsanti",
	show_buttons_aria_label_off: "Disattiva la visione dei pulsanti",
	header_options: "1. Opzioni di intestazione della card",
	body_options: "2. Ulteriori opzioni della card",
	code_only_note: "ATTENZIONE: Le opzioni aggiuntive sono disponibili solo nella modalità editor di codice."
};
var it = {
	common: common$9,
	states: states$a,
	attributes: attributes$9,
	attributes_value: attributes_value$9,
	body: body$9,
	body_value: body_value$9,
	unit: unit$9,
	error: error$9,
	editor: editor$a
};

var it$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$9,
    attributes_value: attributes_value$9,
    body: body$9,
    body_value: body_value$9,
    common: common$9,
    default: it,
    editor: editor$a,
    error: error$9,
    states: states$a,
    unit: unit$9
});

var common$8 = {
	version: "Versie",
	name: "Bodymiscale Card",
	description: "De bodymiscale kaart toont u uw gewicht / gerelateerde lichaamsstatus.",
	not_available: "Bodymiscale is niet beschikbaar",
	toggle_power: "Meer details zoals BMI kCal tonen / verbergen"
};
var states$9 = {
	ok: "METING: OK",
	unknown: "STATUS: onbekend",
	problem: "Probleem",
	none: "Geen",
	weight_unavailable: "Gewicht niet beschikbar",
	impedance_unavailable: "Impedantie niet beschikbaar",
	weight_unavailable_and_impedance_unavailable: "Gewicht en impedantie niet beschikbaar",
	weight_low: "Gewicht laag",
	impedance_low: "Impedantie laag",
	weight_low_and_impedance_low: "Laag gewicht en impedantie",
	impedance_low_and_weight_low: "Lage impedantie en gewicht",
	weight_high: "Gewicht hoog",
	impedance_high: "Impedantie hoog",
	weight_high_and_impedance_high: "Hoog gewicht en impedantie",
	weight_high_and_impedance_low: "Gewicht hoog, impedantie laag",
	weight_low_and_impedance_high: "Gewicht laag, impedantie hoog"
};
var attributes$8 = {
	"weight: ": "Gewicht: ",
	"impedance: ": "Impedantie: ",
	"height: ": "Lengte: ",
	"age: ": "Leeftijd: ",
	"gender: ": "Geslacht: "
};
var attributes_value$8 = {
	male: "man",
	female: "vrouw",
	unavailable: "niet beschikbaar"
};
var body$8 = {
	bmi: "BMI",
	bmi_label: "BMI label",
	visceral_fat: "Visceraal vet",
	body_fat: "Lichaamsvet",
	protein: "Proteine",
	water: "Water",
	muscle_mass: "Spiermassa",
	bone_mass: "Botgewicht",
	weight: "Gewicht",
	ideal: "Ideaal",
	basal_metabolism: "Basaal metabolisme",
	body_type: "Lichaamstype",
	metabolic_age: "Metabolistische leeftijd"
};
var body_value$8 = {
	skinny: "Mager",
	balanced_skinny: "Gebalanceerd-mager",
	skinny_muscular: "Mager-gespierd",
	balanced: "Gebalanceerd",
	balanced_muscular: "Gebalanceerd-gespierd",
	lack_exercise: "Weinig-beweging",
	thick_set: "Dik",
	obese: "Obesitas",
	overweight: "Overgewicht",
	underweight: "Ondergewicht",
	normal_or_healthy_weight: "Normaal of gezond gewicht",
	slight_overweight: "Licht overgewicht",
	moderate_obesity: "Gemiddeld overgewicht",
	severe_obesity: "Ruim overgewicht",
	massive_obesity: "Enorm overgewicht",
	unavailable: "niet beschikbaar"
};
var unit$8 = {
	" years": " jaren"
};
var error$8 = {
	missing_entity: "Geef een entiteit in.",
	missing_entity_bodymiscale: "Geef een bodymiscale entiteit in."
};
var editor$9 = {
	entity: "Kies een account op de schaal (verplicht) !",
	image: "Achtergrondafbeelding (facultatief)",
	model: "Heeft u een impedantie sensor?",
	model1: "Activeer deze functie voor nauwkeurige metingen van de lichaamssamenstelling.",
	model_aria_label_on: "Impedantie inschakelen",
	model_aria_label_off: "Impedantie uitschakelen",
	unit: "Converteer kg naar lbs",
	unit_aria_label_on: "Activeer conversie",
	unit_aria_label_off: "Conversie deactiveren",
	show_name: "Toon de naam van de rekening als titel ?",
	show_name_aria_label_on: "Zet naam aan",
	show_name_aria_label_off: "Zet naam uit",
	show_states: "Geef status weer ?",
	show_states_aria_label_on: "Zet status aan",
	show_states_aria_label_off: "Zet status uit",
	show_attributes: "Persoonlijke stamgegevens weergeven (rechtsboven) ?",
	show_attributes_aria_label_on: "Zet attributen aan",
	show_attributes_aria_label_off: "Zet attributen uit",
	show_always_details: "Toon altijd details",
	show_always_details_aria_label_on: "Zet standaard detailweergave aan",
	show_always_details_aria_label_off: "Zet standaard detailweergave uit",
	show_toolbar: "Toon geavanceerde opties ?",
	show_toolbar_aria_label_on: "Zet knoppenbalk aan",
	show_toolbar_aria_label_off: "Zet knoppenbalk uit",
	show_body: "Bieden verdere meting details",
	show_body1: "(onderste helft - pictogram chevron naar beneden zal tonen die) ?",
	show_body_aria_label_on: "Zet lichaamsscore aan",
	show_body_aria_label_off: "Zet lichaamsscore uit",
	show_buttons: "Accountwissel toestaan ?",
	show_buttons_aria_label_on: "Zet knoppen aan",
	show_buttons_aria_label_off: "Zet knoppen uit",
	header_options: "1. Kaart koptekst opties",
	body_options: "2. Meer boordopties",
	code_only_note: "LET OP: Extra opties zijn alleen beschikbaar in de code editor."
};
var nl = {
	common: common$8,
	states: states$9,
	attributes: attributes$8,
	attributes_value: attributes_value$8,
	body: body$8,
	body_value: body_value$8,
	unit: unit$8,
	error: error$8,
	editor: editor$9
};

var nl$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$8,
    attributes_value: attributes_value$8,
    body: body$8,
    body_value: body_value$8,
    common: common$8,
    default: nl,
    editor: editor$9,
    error: error$8,
    states: states$9,
    unit: unit$8
});

var common$7 = {
	version: "Wersja",
	name: "Karta Bodymiscale",
	description: "Karta BodyMiScale pokazuje Twoją wagę oraz parametry ciała.",
	not_available: "Bodymiscale jest niedostępna",
	toggle_power: "Więcej szczegółów jak BMI kCal - pokaż / ukryj"
};
var states$8 = {
	ok: "POMIAR: OK",
	unknown: "STATUS: nieznany",
	problem: "Problem",
	none: "Brak",
	weight_unavailable: "Waga niedostępna",
	impedance_unavailable: "Impedancja niedostępna",
	weight_unavailable_and_impedance_unavailable: "Waga i impedancja niedostępne",
	weight_low: "Niska waga",
	impedance_low: "Niska impedancja",
	weight_low_and_impedance_low: "Niska waga i impedancja",
	impedance_low_and_weight_low: "Niska impedancja i waga",
	weight_high: "Waga wysoka",
	impedance_high: "Impedancja wysoka",
	weight_high_and_impedance_high: "Wysoka waga i impedancja",
	weight_high_and_impedance_low: "Waga wysoka a impedancja niska",
	weight_low_and_impedance_high: "Waga nizska a impedancja wysoka"
};
var attributes$7 = {
	"weight: ": "Waga: ",
	"impedance: ": "Impedancja: ",
	"height: ": "Wzrost: ",
	"age: ": "Wiek: ",
	"gender: ": "Płeć: "
};
var attributes_value$7 = {
	male: "męska",
	female: "żeńska",
	unavailable: "niedstępna"
};
var body$7 = {
	bmi: "BMI",
	bmi_label: "BMI label",
	visceral_fat: "Tłuszcz brzuszny",
	body_fat: "Tłuszcz Ciała",
	protein: "Białko",
	water: "Woda",
	muscle_mass: "Masa mięśniowa",
	bone_mass: "Masa kostna",
	weight: "Waga",
	ideal: "Idealna",
	basal_metabolism: "Metabolizm podstawowy",
	body_type: "Typ sylwetki",
	metabolic_age: "Wiek metaboliczny"
};
var body_value$7 = {
	skinny: "Chudy",
	balanced_skinny: "Umiarkowanie chudy",
	skinny_muscular: "Chudy muskularny",
	balanced: "Zrównoważony",
	balanced_muscular: "Zrównoważony muskularny",
	lack_exercise: "Mało aktywny",
	thick_set: "Gruby",
	obese: "Otyły",
	overweight: "Nadwaga",
	underweight: "Niedowaga",
	normal_or_healthy_weight: "Normalna lub zdrowa waga",
	slight_overweight: "Lekka nadwaga",
	moderate_obesity: "Lekka otyłość",
	severe_obesity: "Średnia otyłość",
	massive_obesity: "Poważna otyłość",
	unavailable: "niedostępny"
};
var unit$7 = {
	" years": " lat"
};
var error$7 = {
	missing_entity: "Proszę zdefiniuj encje.",
	missing_entity_bodymiscale: "Proszę zdefiniuj encję bodymiscale."
};
var editor$8 = {
	entity: "Proszę wybierz konto na wadze (wymagane)!",
	image: "Obraz tła (opcjonalne)",
	model: "Czy masz czujnik impedancji?",
	model1: "Włącz tę funkcję, aby uzyskać dokładne pomiary składu ciała.",
	model_aria_label_on: "Włącz impedancję",
	model_aria_label_off: "Wyłącz impedancję",
	unit: "Zamień kg na lbs",
	unit_aria_label_on: "Włącz opcję konwersji",
	unit_aria_label_off: "Włącz opcję konwersji",
	theme: "Wybierz rodza motywu.",
	theme_aria_label_on: "Włącz jasny motyw",
	theme_aria_label_off: "Włącz ciemny motyw",
	show_name: "Użyć imienia jako tytułu karty?",
	show_name_aria_label_on: "Włącz opcję imienia jako tytułu",
	show_name_aria_label_off: "Wyłącz opcję imienia jako tytułu",
	show_states: "Wyświetlić stan?",
	show_states_aria_label_on: "Włącz wyświetlanie stanu",
	show_states_aria_label_off: "Wyłącz wyświetlanie stanu",
	show_attributes: "Show personal master data (gora po prawej)?",
	show_attributes_aria_label_on: "Toggle display attributes on",
	show_attributes_aria_label_off: "Toggle display attributes off",
	show_always_details: "Zawsze pokazuj szczegóły",
	show_always_details_aria_label_on: "Włącz domyślny widok szczegółów",
	show_always_details_aria_label_off: "Wyłącz domyślny widok szczegółów",
	show_toolbar: "Pokazać zaawansowane opcje?",
	show_toolbar_aria_label_on: "Włącz zaawansowane opcje",
	show_toolbar_aria_label_off: "Wyłącz zaawansowane opcje",
	show_body: "Offer further measurement details",
	show_body1: "(lower half - icon chevron down will show those)?",
	show_body_aria_label_on: "Toggle display body score on",
	show_body_aria_label_off: "Toggle display body score off",
	show_buttons: "Allow account switch?",
	show_buttons_aria_label_on: "Toggle display buttons on",
	show_buttons_aria_label_off: "Toggle display buttons off",
	header_options: "1. Opcje nagłówka",
	body_options: "2. Więcej opcji karty",
	code_only_note: "UWAGA: Dodatkowe opcje dostępne są tylko poprzez edycje kodu."
};
var pl = {
	common: common$7,
	states: states$8,
	attributes: attributes$7,
	attributes_value: attributes_value$7,
	body: body$7,
	body_value: body_value$7,
	unit: unit$7,
	error: error$7,
	editor: editor$8
};

var pl$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$7,
    attributes_value: attributes_value$7,
    body: body$7,
    body_value: body_value$7,
    common: common$7,
    default: pl,
    editor: editor$8,
    error: error$7,
    states: states$8,
    unit: unit$7
});

var common$6 = {
	version: "Versão",
	name: "Bodymiscale Card",
	description: "O cartão bodymiscale mostra-lhe o estado do seu corpo em relação ao peso.",
	not_available: "Bodymiscale não está disponível",
	toggle_power: "Mostrando/escondendo mais detalhes tal como o kCal,IMC"
};
var states$7 = {
	ok: "MEDIÇÃO: OK",
	unknown: "ESTATUTO: desconhecido",
	problem: "Problema",
	none: "Nenhum",
	weight_unavailable: "Peso indisponível",
	impedance_unavailable: "Impedância indisponível",
	weight_unavailable_and_impedance_unavailable: "Peso e impedância indisponíveis",
	weight_low: "Peso baixo",
	impedance_low: "Impedância baixa",
	weight_low_and_impedance_low: "Peso e impedância baixos",
	impedance_low_and_weight_low: "Impedância e peso baixos",
	weight_high: "Peso alto",
	impedance_high: "Impedância alta",
	weight_high_and_impedance_high: "Peso e impedância altos",
	weight_high_and_impedance_low: "Peso alto, impedância baixa",
	weight_low_and_impedance_high: "Peso baixo, impedância alta"
};
var attributes$6 = {
	"weight: ": "Peso: ",
	"impedance: ": "Impedância: ",
	"height: ": "Altura: ",
	"age: ": "Idade: ",
	"gender: ": "Gênero: "
};
var attributes_value$6 = {
	male: "masculino",
	female: "femenino",
	unavailable: "indisponível"
};
var body$6 = {
	bmi: "IMC",
	bmi_label: "Etiqueta IMC",
	visceral_fat: "Gordura visceral",
	body_fat: "Gordura corporal",
	protein: "Proteína",
	water: "Água",
	muscle_mass: "Massa muscular",
	bone_mass: "Massa óssea",
	weight: "Peso",
	ideal: "Ideal",
	basal_metabolism: "Metabolismo basal",
	body_type: "Tipo de corpo",
	metabolic_age: "Idade metabólica"
};
var body_value$6 = {
	skinny: "Magro",
	balanced_skinny: "Magro equilibrado",
	skinny_muscular: "Magro musculoso",
	balanced: "Equilibrado",
	balanced_muscular: "Musculoso equilibrado",
	lack_exercise: "Falta de exercício",
	thick_set: "Estatura sólida",
	obese: "Obeso",
	overweight: "Acima do peso normal",
	underweight: "Abaixo do peso normal",
	normal_or_healthy_weight: "Normal",
	slight_overweight: "Ligeiramente acima do peso",
	moderate_obesity: "Obesidade moderada",
	severe_obesity: "Obesidade severa",
	massive_obesity: "Obesidade maciça",
	unavailable: "indisponível"
};
var unit$6 = {
	" years": " Anos"
};
var error$6 = {
	missing_entity: "Por favor, defina uma entidade.",
	missing_entity_bodymiscale: "Por favor, defina uma entidade bodymiscale."
};
var editor$7 = {
	entity: "Por favor, escolha a entidade da balança com o nome da pessoa (obrigatório) !",
	image: "Imagem de fundo (opcional)",
	model: "Tem um sensor de impedância?",
	model1: "Ative esta função para medições precisas da composição corporal.",
	model_aria_label_on: "Ativar impedância",
	model_aria_label_off: "Desativar impedância",
	unit: "Converter kg em libras",
	unit_aria_label_on: "Ativar a conversão kg para lbs",
	unit_aria_label_off: "Desativar a conversão kg para lbs",
	show_name: "Mostrar o nome da conta como título ?",
	show_name_aria_label_on: "Mostrar o nome como título",
	show_name_aria_label_off: "Esconder o nome como título",
	show_states: "Mostrar Estado da balança ?",
	show_states_aria_label_on: "Mostrar o estado da balança",
	show_states_aria_label_off: "Esconder o estado da balança",
	show_attributes: "Mostrar os dados do perfil pessoal (canto superior direito) ?",
	show_attributes_aria_label_on: "Mostrar atributos",
	show_attributes_aria_label_off: "Esconder atributos",
	show_always_details: "Mostrar sempre detalhes",
	show_always_details_aria_label_on: "Alternar a vista de detalhe por defeito em",
	show_always_details_aria_label_off: "Alternar a vista de detalhe por defeito",
	show_toolbar: "Mostrar opções avançadas ?",
	show_toolbar_aria_label_on: "Mostrar a barra de ferramentas",
	show_toolbar_aria_label_off: "Esconder a barra de ferramentas",
	show_body: "Mostrar mais detalhes da medição",
	show_body1: "(parte inferior - clicar na seta para mostrar) ?",
	show_body_aria_label_on: "Mostrar mais detalhes no corpo",
	show_body_aria_label_off: "Esconder mais detalhes no corpo",
	show_buttons: "Permitir a troca de conta ?",
	show_buttons_aria_label_on: "Mostrar botões das contas",
	show_buttons_aria_label_off: "Esconder botões das contas",
	header_options: "1. Opções do cabeçalho do cartão",
	body_options: "2. Mais opções do corpo do cartão",
	code_only_note: "CUIDADO: Opções adicionais estão disponíveis apenas no editor de código."
};
var pt = {
	common: common$6,
	states: states$7,
	attributes: attributes$6,
	attributes_value: attributes_value$6,
	body: body$6,
	body_value: body_value$6,
	unit: unit$6,
	error: error$6,
	editor: editor$7
};

var pt$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$6,
    attributes_value: attributes_value$6,
    body: body$6,
    body_value: body_value$6,
    common: common$6,
    default: pt,
    editor: editor$7,
    error: error$6,
    states: states$7,
    unit: unit$6
});

var common$5 = {
	version: "Versão",
	name: "Bodymiscale Card",
	description: "O cartão bodymiscale mostra-lhe o estado do seu corpo em relação ao peso.",
	not_available: "Bodymiscale não é avaialável",
	toggle_power: "Mais detalhes como o kCal show / hide da BMI"
};
var states$6 = {
	ok: "MEDIÇÃO: OK",
	unknown: "ESTATUTO: desconhecido",
	problem: "Problema",
	none: "Nenhum",
	weight_unavailable: "Peso indisponível",
	impedance_unavailable: "Impedance indisponível",
	weight_unavailable_and_impedance_unavailable: "Peso e impedância indisponíveis",
	weight_low: "Peso baixo",
	impedance_low: "Impedância baixa",
	weight_low_and_impedance_low: "Peso e impedância baixos",
	impedance_low_and_weight_low: "Impedância e peso baixos",
	weight_high: "Peso alto",
	impedance_high: "Impedância alta",
	weight_high_and_impedance_high: "Peso e impedância altos",
	weight_high_and_impedance_low: "Peso alto, impedância baixa",
	weight_low_and_impedance_high: "Peso baixo, impedância alta"
};
var attributes$5 = {
	"weight: ": "Peso: ",
	"impedance: ": "Impedance: ",
	"height: ": "Cintura: ",
	"age: ": "Idade: ",
	"gender: ": "Gênero: "
};
var attributes_value$5 = {
	male: "macho",
	female: "fêmea",
	unavailable: "indisponível"
};
var body$5 = {
	bmi: "IMC",
	bmi_label: "Etiqueta IMC",
	visceral_fat: "Gordura visceral",
	body_fat: "Gordura corporal",
	protein: "Proteína",
	water: "Água",
	muscle_mass: "Massa muscular",
	bone_mass: "Massa óssea",
	weight: "Peso",
	ideal: "Ideal",
	basal_metabolism: "Metabolismo basal",
	body_type: "Tipo de corpo",
	metabolic_age: "Idade metabólica"
};
var body_value$5 = {
	skinny: "Magro",
	balanced_skinny: "Magro equilibrado",
	skinny_muscular: "Magro musculoso",
	balanced: "Equilibrado",
	balanced_muscular: "Musculoso equilibrado",
	lack_exercise: "Falta de exercício",
	thick_set: "Grosso-conjunto",
	obese: "Obeso",
	overweight: "Sobrepeso",
	underweight: "Underweight",
	normal_or_healthy_weight: "Normal",
	slight_overweight: "Ligeiro acima do peso",
	moderate_obesity: "Obesidade moderada",
	severe_obesity: "Obesidade severa",
	massive_obesity: "Obesidade maciça",
	unavailable: "indisponível"
};
var unit$5 = {
	" years": " Anos"
};
var error$5 = {
	missing_entity: "Por favor, defina uma entidade.",
	missing_entity_bodymiscale: "Por favor, defina uma entidade bodymiscale."
};
var editor$6 = {
	entity: "Por favor, escolha uma conta na escala (obrigatório) !",
	image: "Imagem de fundo (opcional)",
	model: "Você tem um sensor de impedância?",
	model1: "Ative esta função para medições precisas da composição corporal.",
	model_aria_label_on: "Ativar impedância",
	model_aria_label_off: "Desativar impedância",
	unit: "Converter kg em libras",
	unit_aria_label_on: "Ativar a conversão",
	unit_aria_label_off: "Desativar a conversão",
	show_name: "Mostrar o nome da conta como título ?",
	show_name_aria_label_on: "Alternar o nome da exibição",
	show_name_aria_label_off: "Alternar o nome da exibição",
	show_states: "Mostrar Estado ?",
	show_states_aria_label_on: "Alternar estado de exibição ligado",
	show_states_aria_label_off: "Alternar estado de exibição fora",
	show_attributes: "Mostrar dados mestres pessoais (canto superior direito) ?",
	show_attributes_aria_label_on: "Alternar atributos de exibição em",
	show_attributes_aria_label_off: "Alternar atributos de exibição fora",
	show_always_details: "Mostrar sempre detalhes",
	show_always_details_aria_label_on: "Alternar a visualização de detalhes padrão em",
	show_always_details_aria_label_off: "Alternar a visualização de detalhes padrão fora",
	show_toolbar: "Mostrar opções avançadas ?",
	show_toolbar_aria_label_on: "Alternar a barra de ferramentas do display em",
	show_toolbar_aria_label_off: "Alternar barra de ferramentas de exibição fora",
	show_body: "Oferecer mais detalhes de medição",
	show_body1: "(parte inferior - ícone chevron down mostrará aqueles) ?",
	show_body_aria_label_on: "Alternar a pontuação do corpo do display em",
	show_body_aria_label_off: "Alternar a pontuação do corpo do display fora",
	show_buttons: "Permitir a troca de conta ?",
	show_buttons_aria_label_on: "Alternar botões de exibição",
	show_buttons_aria_label_off: "Alternar botões de exibição desligados",
	header_options: "1. Opções do cabeçalho do cartão",
	body_options: "2. Mais opções de placas",
	code_only_note: "CUIDADO: Opções adicionais estão disponíveis apenas no editor de código."
};
var ptBR = {
	common: common$5,
	states: states$6,
	attributes: attributes$5,
	attributes_value: attributes_value$5,
	body: body$5,
	body_value: body_value$5,
	unit: unit$5,
	error: error$5,
	editor: editor$6
};

var pt_BR = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$5,
    attributes_value: attributes_value$5,
    body: body$5,
    body_value: body_value$5,
    common: common$5,
    default: ptBR,
    editor: editor$6,
    error: error$5,
    states: states$6,
    unit: unit$5
});

var common$4 = {
	version: "Versiune",
	name: "Bodymiscale Card",
	description: "Cardul bodymiscale îți arată starea ta în funcție de greutate/corespunzătoare corpului.",
	not_available: "Bodymiscale nu este disponibil",
	toggle_power: "Mai multe detalii precum BMI kCal arată/ascunde"
};
var states$5 = {
	ok: "MĂSURARE: OK",
	unknown: "Stare: unknown",
	problem: "Problemă",
	none: "Nimic",
	weight_unavailable: "Greutate indisponibilă",
	impedance_unavailable: "Impedanță indisponibilă",
	weight_unavailable_and_impedance_unavailable: "Greutate și impedanță indisponibile",
	weight_low: "Greutate redusă",
	impedance_low: "Impedanță scăzută",
	weight_low_and_impedance_low: "Greutate și impedanță scăzute",
	impedance_low_and_weight_low: "Impedanță și greutate scăzute",
	weight_high: "Greutate mare",
	impedance_high: "Impedanță mare",
	weight_high_and_impedance_high: "Greutate și impedanță ridicate",
	weight_high_and_impedance_low: "Greutate mare, impedanță scăzută",
	weight_low_and_impedance_high: "Greutate redusă, impedanță ridicată"
};
var attributes$4 = {
	"weight: ": "Greutate: ",
	"impedance: ": "Impedanță: ",
	"height: ": "Înălţime: ",
	"age: ": "Vârstă: ",
	"gender: ": "Gen: "
};
var attributes_value$4 = {
	male: "masculin",
	female: "feminin",
	unavailable: "indisponibil"
};
var body$4 = {
	bmi: "IMC",
	bmi_label: "Eticheta IMC",
	visceral_fat: "Grasime viscerala",
	body_fat: "Grăsime corporală",
	protein: "Proteină",
	water: "Apă",
	muscle_mass: "Masă musculară",
	bone_mass: "Masă osoasă",
	weight: "Greutate",
	ideal: "Ideal",
	basal_metabolism: "Metabolismul bazal",
	body_type: "Tipul corpului",
	metabolic_age: "Vârsta metabolică"
};
var body_value$4 = {
	skinny: "Slab",
	balanced_skinny: "Slab-echilibrat",
	skinny_muscular: "Slab-muscular",
	balanced: "Echilibrat",
	balanced_muscular: "Balanced-muscular",
	lack_exercise: "Lipsa-exercițiu",
	thick_set: "Îndesat",
	obese: "Obez",
	overweight: "Supraponderal",
	underweight: "Subponderal",
	normal_or_healthy_weight: "Greutate normală sau sănătoasă",
	slight_overweight: "Ușor supraponderal",
	moderate_obesity: "Obezitate moderată",
	severe_obesity: "Obezitate severă",
	massive_obesity: "Obezitate masivă",
	unavailable: "indisponibil"
};
var unit$4 = {
	" years": " ani"
};
var error$4 = {
	missing_entity: "Vă rugăm să definiți o entitate.",
	missing_entity_bodymiscale: "Definiți o entitate bodymiscale."
};
var editor$5 = {
	entity: "Vă rugăm să selectați un cont de cântar (obligatoriu)!",
	image: "Imagine de fundal (opțional)",
	model: "Aveți un senzor de impedanță?",
	model1: "Activați această funcție pentru măsurători precise ale compoziției corporale.",
	model_aria_label_on: "Activare impedanță",
	model_aria_label_off: "Dezactivare impedanță",
	unit: "Convertiți kg în lbs",
	unit_aria_label_on: "Activați conversia",
	unit_aria_label_off: "Dezactivați conversia",
	theme: "Configurați tema pe care o utilizați.",
	theme_aria_label_on: "Activează lumina temei",
	theme_aria_label_off: "Dezactivați tema întunecată",
	show_name: "Afișați numele contului ca titlu?",
	show_name_aria_label_on: "Activează numele afișat",
	show_name_aria_label_off: "Dezactivați numele afișat",
	show_states: "Arată starea?",
	show_states_aria_label_on: "Comutați starea afișajului",
	show_states_aria_label_off: "Dezactivați starea afișajului",
	show_attributes: "Afișați datele de bază personale (dreapta sus)?",
	show_attributes_aria_label_on: "Activați/dezactivați atributele de afișare",
	show_attributes_aria_label_off: "Dezactivați atributele de afișare",
	show_always_details: "Afișați întotdeauna detalii",
	show_always_details_aria_label_on: "Activați vizualizarea implicită a detaliilor",
	show_always_details_aria_label_off: "Dezactivați vizualizarea implicită a detaliilor",
	show_toolbar: "Arată opțiuni avansate?",
	show_toolbar_aria_label_on: "Comutați afișarea opțiunilor avansate",
	show_toolbar_aria_label_off: "Dezactivați afișarea opțiunilor avansate",
	show_body: "Oferiți detalii suplimentare de măsurare",
	show_body1: "(Jumătatea inferioară - pictograma chevron în jos le va arăta)?",
	show_body_aria_label_on: "Comutați afișarea scorului corporal",
	show_body_aria_label_off: "Dezactivați scorul pentru corpul afișat",
	show_buttons: "Permiteți schimbarea contului?",
	show_buttons_aria_label_on: "Activați butoanele afișajului",
	show_buttons_aria_label_off: "Dezactivați butoanele de afișare",
	header_options: "1. Opțiuni pentru antetul cardului",
	body_options: "2. Mai multe opțiuni de card",
	code_only_note: "ATENŢIE: Opțiuni suplimentare sunt disponibile numai în editorul de cod."
};
var ro = {
	common: common$4,
	states: states$5,
	attributes: attributes$4,
	attributes_value: attributes_value$4,
	body: body$4,
	body_value: body_value$4,
	unit: unit$4,
	error: error$4,
	editor: editor$5
};

var ro$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$4,
    attributes_value: attributes_value$4,
    body: body$4,
    body_value: body_value$4,
    common: common$4,
    default: ro,
    editor: editor$5,
    error: error$4,
    states: states$5,
    unit: unit$4
});

var common$3 = {
	version: "Версия",
	name: "Карточка Bodymiscale",
	description: "Карточка BodyMiScale отображает показатели тела, рассчитанные на основе результатов измерения веса и биоимпеданса.",
	not_available: "Компонент Bodymiscale не доступен",
	toggle_power: "Показать/скрыть дополнительные сведения о BMI"
};
var states$4 = {
	ok: "Измерение: OK",
	unknown: "Состояние: неизвестно",
	problem: "Проблема",
	none: "Нет",
	weight_unavailable: "Вес недоступен",
	impedance_unavailable: "Биоимпеданс недоступен",
	weight_unavailable_and_impedance_unavailable: "Вес и импеданс недоступны",
	weight_low: "Низкий вес",
	impedance_low: "Низкий биоимпеданс",
	weight_low_and_impedance_low: "Низкий вес и импеданс",
	impedance_low_and_weight_low: "Низкий импеданс и вес",
	weight_high: "Высокий вес",
	impedance_high: "Высокий биоимпеданс",
	weight_high_and_impedance_high: "Высокий вес и импеданс",
	weight_high_and_impedance_low: "Высокий вес, низкий биоимпеданс",
	weight_low_and_impedance_high: "Низкий вес, высокий биоимпеданс"
};
var attributes$3 = {
	"weight: ": "Вес: ",
	"impedance: ": "Импеданс: ",
	"height: ": "Рост: ",
	"age: ": "Возраст: ",
	"gender: ": "Пол: "
};
var attributes_value$3 = {
	male: "мужской",
	female: "женский",
	unavailable: "недоступен"
};
var body$3 = {
	bmi: "Индекс BMI",
	bmi_label: "Интерпретация BMI",
	visceral_fat: "Висцеральный жир",
	body_fat: "Жировая ткань",
	protein: "Белки",
	water: "Вода",
	muscle_mass: "Мышечная масса",
	bone_mass: "Костная масса",
	weight: "Вес",
	ideal: "Идеальный вес",
	basal_metabolism: "Базальный метаболизм",
	body_type: "Тип тела",
	metabolic_age: "Метаболический возраст"
};
var body_value$3 = {
	skinny: "Тощий",
	balanced_skinny: "Худощавый",
	skinny_muscular: "Подтянуто-мускулистый",
	balanced: "Оптимальный",
	balanced_muscular: "Мускулистый",
	lack_exercise: "Недостаток упражнений",
	thick_set: "Коренастый",
	obese: "Ожирение",
	overweight: "Лишний вес",
	underweight: "Недостаточный вес",
	normal_or_healthy_weight: "Нормальный вес",
	slight_overweight: "Избыточный вес",
	moderate_obesity: "Ожирение 1й степени",
	severe_obesity: "Ожирение 2й степени",
	massive_obesity: "Ожирение 3й степени",
	unavailable: "недоступен"
};
var unit$3 = {
	" years": " года(лет)"
};
var error$3 = {
	missing_entity: "Определите сущность.",
	missing_entity_bodymiscale: "Определите сущность BodyMiScale."
};
var editor$4 = {
	entity: "Сущность BodyMiScale (обязательно)",
	image: "Фоновое изображение (опционально)",
	model: "У вас есть датчик импеданса?",
	model1: "Включите эту функцию для точных измерений состава тела.",
	model_aria_label_on: "Включить импеданс",
	model_aria_label_off: "Выключить импеданс",
	unit: "Преобразование кг в фунты",
	unit_aria_label_on: "Преобразовать кг в фунты",
	unit_aria_label_off: "Не преобразовывать кг в фунты",
	show_name: "Отображение имени пользователя",
	show_name_aria_label_on: "Отображать имя пользователя",
	show_name_aria_label_off: "Не отображать имя пользователя",
	show_states: "Отображение состояния",
	show_states_aria_label_on: "Отображать состояние",
	show_states_aria_label_off: "Не отображать состояние",
	show_attributes: "Отображение персональных данных",
	show_attributes_aria_label_on: "Отображать персональные данные",
	show_attributes_aria_label_off: "Не отображать персональные данные",
	show_always_details: "Всегда показывать детали",
	show_always_details_aria_label_on: "Постоянное отображение деталей",
	show_always_details_aria_label_off: "Не отображайте данные на постоянной основе",
	show_toolbar: "Отображение панели дополнительных параметров",
	show_toolbar_aria_label_on: "Отображать панель дополнительных параметров",
	show_toolbar_aria_label_off: "Не отображать панель дополнительных параметров",
	show_body: "Отображение дополнительных параметров",
	show_body1: "(по нажатию кнопки со стрелкой вниз)",
	show_body_aria_label_on: "Отображать дополнительные параметры",
	show_body_aria_label_off: "Не отображать дополнительные параметры",
	show_buttons: "Переключение аккаунтов",
	show_buttons_aria_label_on: "Отображать кнопки",
	show_buttons_aria_label_off: "Не отображать кнопки",
	header_options: "1. Настройки заголовка карточки",
	body_options: "2. Дополнительные настройки карточки",
	code_only_note: "ВНИМАНИЕ: Дополнительные настройки отображаются только в редакторе кода."
};
var ru = {
	common: common$3,
	states: states$4,
	attributes: attributes$3,
	attributes_value: attributes_value$3,
	body: body$3,
	body_value: body_value$3,
	unit: unit$3,
	error: error$3,
	editor: editor$4
};

var ru$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$3,
    attributes_value: attributes_value$3,
    body: body$3,
    body_value: body_value$3,
    common: common$3,
    default: ru,
    editor: editor$4,
    error: error$3,
    states: states$4,
    unit: unit$3
});

var common$2 = {
	version: "Version",
	name: "Bodymiscale Card",
	description: "The bodymiscale card shows you your weight wise / related body status.",
	not_available: "Bodymiscale is not available",
	toggle_power: "More details like BMI kCal show / hide"
};
var states$3 = {
	ok: "MEASUREMENT: OK",
	unknown: "STATE: unknown",
	problem: "Problem",
	none: "None",
	weight_unavailable: "Weight unavailable",
	impedance_unavailable: "Impedance unavailable",
	weight_unavailable_and_impedance_unavailable: "Weight and impedance unavailable",
	weight_low: "Weight low",
	impedance_low: "Impedance low",
	weight_low_and_impedance_low: "Weight and impedance low",
	impedance_low_and_weight_low: "Impedance and weight low",
	weight_high: "Weight high",
	impedance_high: "Impedance high",
	weight_high_and_impedance_high: "Weight and impedance high",
	weight_high_and_impedance_low: "Weight high, impedance low",
	weight_low_and_impedance_high: "Weight low, impedance high"
};
var attributes$2 = {
	"weight: ": "Weight: ",
	"impedance: ": "Impedance: ",
	"height: ": "Height: ",
	"age: ": "Age: ",
	"gender: ": "Gender: "
};
var attributes_value$2 = {
	male: "male",
	female: "female",
	unavailable: "unavailable"
};
var body$2 = {
	bmi: "BMI",
	bmi_label: "BMI label",
	visceral_fat: "Mỡ nội tạng",
	body_fat: "Mỡ cơ thể",
	protein: "Chất đạm",
	water: "Nước",
	muscle_mass: "Khối lượng cơ",
	bone_mass: "Khối lượng xương",
	weight: "Cân nặng",
	ideal: "Lý tưởng",
	basal_metabolism: "Trao đổi chất cơ bản",
	body_type: "Kiểu cơ thể",
	metabolic_age: "Tuổi chuyển hóa"
};
var body_value$2 = {
	skinny: "Gầy",
	balanced_skinny: "Cân đối - gầy",
	skinny_muscular: "Gầy - cơ bắp",
	balanced: "Cân bằng",
	balanced_muscular: "Cơ bắp cân bằng",
	lack_exercise: "Thiếu tập thể dục",
	thick_set: "Thick-set",
	obese: "Béo phì",
	overweight: "Thừa cân",
	underweight: "Thiếu cân",
	normal_or_healthy_weight: "Cân nặng bình thường hoặc khỏe mạnh",
	slight_overweight: "Hơi thừa cân",
	moderate_obesity: "Béo phì vừa phải",
	severe_obesity: "Béo phì nghiêm trọng",
	massive_obesity: "Massive obesity",
	unavailable: "Không có sẵn"
};
var unit$2 = {
	" years": " years"
};
var error$2 = {
	missing_entity: "Please define an entity.",
	missing_entity_bodymiscale: "Please define a bodymiscale entity."
};
var editor$3 = {
	entity: "Please select an account on the scale (required)!",
	image: "Background image (optional)",
	model: "Do you have an impedance sensor?",
	model1: "Enable this feature for accurate body composition measurements.",
	model_aria_label_on: "Enable impedance",
	model_aria_label_off: "Disable impedance",
	unit: "Convert kg to lbs",
	unit_aria_label_on: "Toggle the conversion on",
	unit_aria_label_off: "Toggle the conversion off",
	theme: "Configure the theme you use.",
	theme_aria_label_on: "Toggle theme light on",
	theme_aria_label_off: "Toggle theme dark off",
	show_name: "Show the name of the account as title?",
	show_name_aria_label_on: "Toggle display name on",
	show_name_aria_label_off: "Toggle display name off",
	show_states: "Show State?",
	show_states_aria_label_on: "Toggle display state on",
	show_states_aria_label_off: "Toggle display state off",
	show_attributes: "Show personal master data (top right)?",
	show_attributes_aria_label_on: "Toggle display attributes on",
	show_attributes_aria_label_off: "Toggle display attributes off",
	show_always_details: "Always show details",
	show_always_details_aria_label_on: "Toggle default detail view on",
	show_always_details_aria_label_off: "Toggle default detail view off",
	show_toolbar: "Show advanced options?",
	show_toolbar_aria_label_on: "Toggle display advanced options on",
	show_toolbar_aria_label_off: "Toggle display advanced options off",
	show_body: "Offer further measurement details",
	show_body1: "(lower half - icon chevron down will show those)?",
	show_body_aria_label_on: "Toggle display body score on",
	show_body_aria_label_off: "Toggle display body score off",
	show_buttons: "Allow account switch?",
	show_buttons_aria_label_on: "Toggle display buttons on",
	show_buttons_aria_label_off: "Toggle display buttons off",
	header_options: "1. Card header options",
	body_options: "2. More card options",
	code_only_note: "ATTENTION: Additional options are only available in the code editor."
};
var vi = {
	common: common$2,
	states: states$3,
	attributes: attributes$2,
	attributes_value: attributes_value$2,
	body: body$2,
	body_value: body_value$2,
	unit: unit$2,
	error: error$2,
	editor: editor$3
};

var vi$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$2,
    attributes_value: attributes_value$2,
    body: body$2,
    body_value: body_value$2,
    common: common$2,
    default: vi,
    editor: editor$3,
    error: error$2,
    states: states$3,
    unit: unit$2
});

var common$1 = {
	version: "版本",
	name: "米家体脂称卡片",
	description: "米家体脂称卡片会显示你的体重以及相关身体状态",
	not_available: "Bodymiscale 不可用",
	toggle_power: "显示/隐藏更多详情,例如: BMI, kCal"
};
var states$2 = {
	ok: "测量: OK",
	unknown: "状态: 未知",
	problem: "故障",
	none: "无",
	weight_unavailable: "体重不可用",
	impedance_unavailable: "阻抗不可用",
	weight_unavailable_and_impedance_unavailable: "体重和阻抗均不可用",
	weight_low: "体重过轻",
	impedance_low: "阻抗低",
	weight_low_and_impedance_low: "体重和阻抗均偏低",
	impedance_low_and_weight_low: "阻抗和体重均偏低",
	weight_high: "体重过重",
	impedance_high: "阻抗高",
	weight_high_and_impedance_high: "体重和阻抗均偏高",
	weight_high_and_impedance_low: "体重过重, 阻抗低",
	weight_low_and_impedance_high: "体重过轻, 阻抗高"
};
var attributes$1 = {
	"weight: ": "重量: ",
	"impedance: ": "阻抗: ",
	"height: ": "身高: ",
	"age: ": "年龄: ",
	"gender: ": "性别: "
};
var attributes_value$1 = {
	male: "男",
	female: "女",
	unavailable: "不可用"
};
var body$1 = {
	bmi: "BMI",
	bmi_label: "BMI 标签",
	visceral_fat: "内脏脂肪",
	body_fat: "体脂",
	protein: "蛋白质",
	water: "水分",
	muscle_mass: "肌肉量",
	bone_mass: "骨量",
	weight: "体重",
	ideal: "理想体重",
	basal_metabolism: "基本代谢",
	body_type: "身体类型",
	metabolic_age: "代谢年龄"
};
var body_value$1 = {
	skinny: "偏瘦",
	balanced_skinny: "健美型",
	skinny_muscular: "偏瘦肌肉",
	balanced: "标准型",
	balanced_muscular: "标准肌肉",
	lack_exercise: "缺乏运动",
	thick_set: "结实型偏胖",
	obese: "偏胖型",
	overweight: "肥胖型",
	underweight: "过轻",
	normal_or_healthy_weight: "正常或健康",
	slight_overweight: "轻微超重",
	moderate_obesity: "中度肥胖",
	severe_obesity: "过度肥胖",
	massive_obesity: "严重肥胖",
	unavailable: "不可用"
};
var unit$1 = {
	" years": " 岁"
};
var error$1 = {
	missing_entity: "Please define an entity.",
	missing_entity_bodymiscale: "Please define a bodymiscale entity."
};
var editor$2 = {
	entity: "Please select an account on the scale (required) !",
	image: "Background image (optional)",
	model: "Do you have an impedance sensor?",
	model1: "Enable this feature for accurate body composition measurements.",
	model_aria_label_on: "Enable impedance",
	model_aria_label_off: "Disable impedance",
	unit: "Convert kg to lbs",
	unit_aria_label_on: "Toggle the conversion on",
	unit_aria_label_off: "Toggle the conversion off",
	show_name: "Show the name of the account as title ?",
	show_name_aria_label_on: "Toggle display name on",
	show_name_aria_label_off: "Toggle display name off",
	show_states: "Show State ?",
	show_states_aria_label_on: "Toggle display state on",
	show_states_aria_label_off: "Toggle display state off",
	show_attributes: "Show personal master data (top right) ?",
	show_attributes_aria_label_on: "Toggle display attributes on",
	show_attributes_aria_label_off: "Toggle display attributes off",
	show_always_details: "Always show details",
	show_always_details_aria_label_on: "Toggle default detail view on",
	show_always_details_aria_label_off: "Toggle default detail view off",
	show_toolbar: "Show advanced options ?",
	show_toolbar_aria_label_on: "Toggle display advanced options on",
	show_toolbar_aria_label_off: "Toggle display advanced options off",
	show_body: "Offer further measurement details",
	show_body1: "(lower half - icon chevron down will show those) ?",
	show_body_aria_label_on: "Toggle display body score on",
	show_body_aria_label_off: "Toggle display body score off",
	show_buttons: "Allow account switch ?",
	show_buttons_aria_label_on: "Toggle display buttons on",
	show_buttons_aria_label_off: "Toggle display buttons off",
	header_options: "1. Card header options",
	body_options: "2. More card options",
	code_only_note: "ATTENTION: Additional options are only available in the code editor."
};
var zhHans = {
	common: common$1,
	states: states$2,
	attributes: attributes$1,
	attributes_value: attributes_value$1,
	body: body$1,
	body_value: body_value$1,
	unit: unit$1,
	error: error$1,
	editor: editor$2
};

var zh_Hans = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes$1,
    attributes_value: attributes_value$1,
    body: body$1,
    body_value: body_value$1,
    common: common$1,
    default: zhHans,
    editor: editor$2,
    error: error$1,
    states: states$2,
    unit: unit$1
});

var common = {
	version: "版本",
	name: "米家體脂計卡片",
	description: "米家體脂計卡片會顯示你的體重以及相關身體狀態",
	not_available: "Bodymiscale 不可用",
	toggle_power: "顯示/隱藏更多詳情,例如: BMI, kCal"
};
var states$1 = {
	ok: "測量: OK",
	unknown: "狀態: 未知",
	problem: "故障",
	none: "無",
	weight_unavailable: "體重不可用",
	impedance_unavailable: "阻抗不可用",
	weight_unavailable_and_impedance_unavailable: "體重和阻抗均不可用",
	weight_low: "體重過輕",
	impedance_low: "阻抗低",
	weight_low_and_impedance_low: "體重和阻抗均偏低",
	impedance_low_and_weight_low: "阻抗和體重均偏低",
	weight_high: "體重過重",
	impedance_high: "阻抗高",
	weight_high_and_impedance_high: "體重和阻抗均偏高",
	weight_high_and_impedance_low: "體重過重, 阻抗低",
	weight_low_and_impedance_high: "體重過輕, 阻抗高"
};
var attributes = {
	"weight: ": "重量: ",
	"impedance: ": "阻抗: ",
	"height: ": "身高: ",
	"age: ": "年齡: ",
	"gender: ": "性別: "
};
var attributes_value = {
	male: "男",
	female: "女",
	unavailable: "不可用"
};
var body = {
	bmi: "BMI",
	bmi_label: "BMI 標籤",
	visceral_fat: "內臟脂肪",
	body_fat: "體脂",
	protein: "蛋白質",
	water: "水分",
	muscle_mass: "肌肉量",
	bone_mass: "骨量",
	weight: "體重",
	ideal: "理想體重",
	basal_metabolism: "基本代謝",
	body_type: "身體類型",
	metabolic_age: "代謝年齡"
};
var body_value = {
	skinny: "偏瘦",
	balanced_skinny: "健美型",
	skinny_muscular: "偏瘦肌肉",
	balanced: "標準型",
	balanced_muscular: "標準肌肉",
	lack_exercise: "缺乏運動",
	thick_set: "結實型偏胖",
	obese: "偏胖型",
	overweight: "肥胖型",
	underweight: "過輕",
	normal_or_healthy_weight: "正常或健康",
	slight_overweight: "輕微超重",
	moderate_obesity: "中度肥胖",
	severe_obesity: "過度肥胖",
	massive_obesity: "嚴重肥胖",
	unavailable: "不可用"
};
var unit = {
	" years": " 歲"
};
var error = {
	missing_entity: "Please define an entity.",
	missing_entity_bodymiscale: "Please define a bodymiscale entity."
};
var editor$1 = {
	entity: "Please select an account on the scale (required) !",
	image: "Background image (optional)",
	model: "Do you have an impedance sensor?",
	model1: "Enable this feature for accurate body composition measurements.",
	model_aria_label_on: "Enable impedance",
	model_aria_label_off: "Disable impedance",
	unit: "Convert kg to lbs",
	unit_aria_label_on: "Toggle the conversion on",
	unit_aria_label_off: "Toggle the conversion off",
	show_name: "Show the name of the account as title ?",
	show_name_aria_label_on: "Toggle display name on",
	show_name_aria_label_off: "Toggle display name off",
	show_states: "Show State ?",
	show_states_aria_label_on: "Toggle display state on",
	show_states_aria_label_off: "Toggle display state off",
	show_attributes: "Show personal master data (top right) ?",
	show_attributes_aria_label_on: "Toggle display attributes on",
	show_attributes_aria_label_off: "Toggle display attributes off",
	show_always_details: "Always show details",
	show_always_details_aria_label_on: "Toggle default detail view on",
	show_always_details_aria_label_off: "Toggle default detail view off",
	show_toolbar: "Show advanced options ?",
	show_toolbar_aria_label_on: "Toggle display advanced options on",
	show_toolbar_aria_label_off: "Toggle display advanced options off",
	show_body: "Offer further measurement details",
	show_body1: "(lower half - icon chevron down will show those) ?",
	show_body_aria_label_on: "Toggle display body score on",
	show_body_aria_label_off: "Toggle display body score off",
	show_buttons: "Allow account switch ?",
	show_buttons_aria_label_on: "Toggle display buttons on",
	show_buttons_aria_label_off: "Toggle display buttons off",
	header_options: "1. Card header options",
	body_options: "2. More card options",
	code_only_note: "ATTENTION: Additional options are only available in the code editor."
};
var zhHant = {
	common: common,
	states: states$1,
	attributes: attributes,
	attributes_value: attributes_value,
	body: body,
	body_value: body_value,
	unit: unit,
	error: error,
	editor: editor$1
};

var zh_Hant = /*#__PURE__*/Object.freeze({
    __proto__: null,
    attributes: attributes,
    attributes_value: attributes_value,
    body: body,
    body_value: body_value,
    common: common,
    default: zhHant,
    editor: editor$1,
    error: error,
    states: states$1,
    unit: unit
});

const languages = {
    cs: cs$1,
    de: de$1,
    en: en$1,
    es: es$1,
    fr: fr$1,
    hu: hu$1,
    it: it$1,
    nl: nl$1,
    pl: pl$1,
    pt: pt$1,
    pt_BR: pt_BR,
    ro: ro$1,
    ru: ru$1,
    vi: vi$1,
    zh_Hans: zh_Hans,
    zh_Hant: zh_Hant,
};
const DEFAULT_LANG = 'en';
function localize(str, search, replace) {
    var _a;
    const [section, key] = str.toLowerCase().split('.');
    let langStored = null;
    try {
        langStored = JSON.parse((_a = localStorage.getItem('selectedLanguage')) !== null && _a !== void 0 ? _a : '');
    }
    catch (e) {
        console.warn(e);
        langStored = localStorage.getItem('selectedLanguage');
    }
    const lang = (langStored || navigator.language.split('-')[0] || DEFAULT_LANG)
        .replace(/['"]+/g, '')
        .replace('-', '_');
    let translated;
    try {
        translated = languages[lang][section][key];
    }
    catch (e) {
        console.warn(e);
        translated = languages[DEFAULT_LANG][section][key];
    }
    if (translated === undefined) {
        translated = languages[DEFAULT_LANG][section][key];
    }
    if (translated === undefined) {
        return;
    }
    return translated;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = i$2`:host {
  --vc-background: var(--ha-card-background, var(--card-background-color, white));
  --vc-primary-text-color: var(--primary-text-color, #000);
  --vc-secondary-text-color: var(--secondary-text-color, #555);
  --vc-icon-color: var(--secondary-text-color);
  --vc-toolbar-background: var(--vc-background);
  --vc-toolbar-text-color: var(--vc-secondary-text-color);
  --vc-toolbar-icon-color: var(--vc-secondary-text-color);
  --vc-divider-color: var(--entities-divider-color, var(--divider-color, #ccc));
  --vc-spacing: 10px;
  --ha-card-border-radius: 12px;
  --ha-icon-size: 24px;
  
  display: flex;
  flex-direction: column;
  flex: 1;
}

ha-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--ha-card-border-radius);
  overflow: hidden;
}

.background {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: auto;
  border-radius: var(--ha-card-border-radius);
  overflow: hidden;
}

.pointer {
  cursor: pointer;
}

.preview {
  background-color: #008CBA;
  background-color: var(--primary-color, #008CBA);
  cursor: pointer;
  position: relative;
}

.preview.not-available {
  filter: grayscale(1);
}

.not-available {
  text-align: center;
  color: #333;
  color: var(--text-primary-color, #333);
  font-size: 16px;
}

.metadata {
  margin: var(--vc-spacing) auto;
}

.title {
  font-size: 20px;
  padding: 5px 16px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;
}

.grid-left,
.grid-right {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.grid-left {
  text-align: left;
  padding-left: 10px;
  border-left: 2px solid var(--primary-color);
}

.grid-right {
  text-align: right;
  padding-right: 10px;
  border-right: 2px solid var(--primary-color);
}

#items {
  padding: 0;
  margin: 0;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
}

#items[open] {
  overflow: hidden;
  max-height: 500px;
}

.toolbar {
  min-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.toolbar ha-icon-button:first-child {
  margin-left: var(--vc-spacing);
}

.toolbar ha-icon-button:last-child {
  margin-right: var(--vc-spacing);
}

.toolbar ha-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toolbar ha-icon {
  width: var(--ha-icon-size);
  height: var(--ha-icon-size);
  fill: currentColor;
  margin: 0;
}

.image {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  vertical-align: middle;
  fill: currentColor;
  width: var(--ha-icon-size);
  height: var(--ha-icon-size);
}

.problem {
  color: #f44336;
  color: var(--error-color, #f44336);
  animation: blinker 2s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
}

@keyframes blinker {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.state-div {
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: start;
}

.state-label {
  padding: 3px 0 0 10px;
}

#score {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 8px;
}

#score > * {
  margin-bottom: 8px;
}

#score > :last-child {
  margin-top: 0;
  margin-bottom: 0;
}

#score > :first-child {
  margin-top: 0;
}

score-card-row {
  display: flex;
  flex-grow: 1;
}

score-card-row > div {
  flex-basis: 100%;
}

score-card-row:empty {
  display: none;
}

score-card-card {
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  margin-right: 8px;
}

score-card-card:last-child {
  margin-right: 0;
}

score-card-background {
  cursor: pointer;
  flex-grow: 1;
  position: relative;
}

score-card-iconbar {
  color: var(--icon-color, var(--paper-item-icon-color));
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
}

score-card-currentbar,
score-card-backgroundbar,
score-card-contentbar,
score-card-targetbar {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: var(--score-card-border-radius, var(--ha-card-border-radius));
}

score-card-contentbar {
  align-items: center;
  color: var(--primary-text-color);
  display: flex;
  justify-content: flex-start;
}

.contentbar-direction-right {
  flex-direction: row;
}

.contentbar-direction-up {
  flex-direction: column;
}

score-card-backgroundbar {
  background: var(--bar-color);
  filter: brightness(0.5);
  opacity: 0.25;
}

score-card-currentbar {
  background: linear-gradient(
    to var(--bar-direction),
    var(--bar-color) var(--bar-percent),
    transparent var(--bar-percent),
    transparent var(--bar-percent)
  );
}

score-card-targetbar {
  background: linear-gradient(
    to var(--bar-direction),
    transparent var(--bar-percent),
    var(--bar-color) var(--bar-percent),
    var(--bar-color) var(--bar-target-percent),
    transparent var(--bar-target-percent)
  );
  display: var(--target-display);
  filter: brightness(0.66);
  opacity: 0.33;
}

score-card-markerbar {
  background: var(--bar-color);
  filter: brightness(0.75);
  opacity: 0.5;
  position: absolute;
}

score-card-name {
  align-items: center;
  justify-content: center;
  margin: 4px;
  overflow: hidden;
  position: relative;
  text-align: left;
  text-overflow: ellipsis;
}

.name-outside {
  margin-left: 16px;
}

score-card-value,
score-card-min,
score-card-max,
score-card-divider {
  align-self: center;
  position: relative;
}

score-card-min,
score-card-max,
score-card-divider {
  font-size: 10px;
  margin: 2px;
  opacity: 0.5;
}

.min-direction-up {
  margin-top: auto;
}

.min-direction-right {
  margin-left: auto;
}

score-card-divider {
  margin-left: 0;
  margin-right: 0;
}

score-card-value {
  white-space: nowrap;
  margin: 4px;
}

.value-direction-right {
  margin-left: auto;
}

.value-direction-up {
  margin-top: auto;
}
`;
styleInject(css_248z$1);

const states = {
    status: {
        key: 'status',
        icon: 'mdi:scale-bathroom',
    },
    problem: {
        key: 'problem',
        icon: 'mdi:alert',
    },
    last_measurement_time: {
        key: 'last_measurement_time',
        icon: 'mdi:calendar-clock'
    },
};
const attributes_kg = {
    weight: {
        key: 'weight',
        label: localize(`attributes.${'weight: '}`),
        unit: ' kg',
    },
    impedance: {
        key: 'impedance',
        label: localize(`attributes.${'impedance: '}`),
        unit: ' ohm',
    },
    height: {
        key: 'height',
        label: localize(`attributes.${'height: '}`),
        unit: ' cm',
    },
    age: {
        key: 'age',
        label: localize(`attributes.${'age: '}`),
        unit: localize(`unit.${' years'}`),
    },
    gender: {
        key: 'gender',
        label: localize(`attributes.${'gender: '}`),
    },
};
const attributes_lb = {
    weight: {
        key: 'weight',
        label: localize(`attributes.${'weight: '}`),
        unit: ' lbs',
    },
    impedance: {
        key: 'impedance',
        label: localize(`attributes.${'impedance: '}`),
        unit: ' ohm',
    },
    height: {
        key: 'height',
        label: localize(`attributes.${'height: '}`),
        unit: ' cm',
    },
    age: {
        key: 'age',
        label: localize(`attributes.${'age: '}`),
        unit: localize(`unit.${' years'}`),
    },
    gender: {
        key: 'gender',
        label: localize(`attributes.${'gender: '}`),
    },
};
const body_kg = {
    bmi: {
        key: 'bmi',
        label: localize(`body.${'bmi'}`),
        icon: '/local/images/bodyscoreIcon/bmi.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 40,
        min: 0,
        severity: [
            { from: 0, to: 18.5, color: 'blue' },
            { from: 18.51, to: 25, color: 'green' },
            { from: 25.01, to: 28, color: 'orange' },
            { from: 28.01, to: 32, color: 'orangered' },
            { from: 32.01, to: Infinity, color: 'red' },
        ],
        target: 21.75,
    },
    bmi_label: {
        key: 'bmi_label',
        label: localize(`body.${'bmi_label'}`),
        icon: '/local/images/bodyscoreIcon/body_type.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
    },
    visceral_fat: {
        key: 'visceral_fat',
        label: localize(`body.${'visceral_fat'}`),
        icon: '/local/images/bodyscoreIcon/visceral_fat.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 20,
        min: 0,
        severity: [
            { from: 0, to: 10, color: 'green' },
            { from: 10.01, to: 15, color: 'orange' },
            { from: 15.01, to: Infinity, color: 'orangered' },
        ],
        target: 12.5,
    },
    body_fat: {
        key: 'body_fat',
        label: localize(`body.${'body_fat'}`),
        icon: '/local/images/bodyscoreIcon/body_fat.png',
        unit: ' %',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 40,
        min: 0,
        severity: [
            { from: 0, to: 12, color: 'blue' },
            { from: 12.01, to: 18, color: 'royalblue' },
            { from: 18.01, to: 23, color: 'green' },
            { from: 23.01, to: 28, color: 'orange' },
            { from: 28.01, to: Infinity, color: 'orangered' },
        ],
        target: 20.5,
    },
    protein: {
        key: 'protein',
        label: localize(`body.${'protein'}`),
        icon: '/local/images/bodyscoreIcon/protein.png',
        unit: ' %',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 32,
        min: 0,
        severity: [
            { from: 0, to: 16, color: 'orangered' },
            { from: 16.01, to: 20, color: 'green' },
            { from: 20.01, to: Infinity, color: 'darkgreen' },
        ],
        target: 18,
    },
    water: {
        key: 'water',
        label: localize(`body.${'water'}`),
        icon: '/local/images/bodyscoreIcon/water.png',
        unit: ' %',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 80,
        min: 0,
        severity: [
            { from: 0, to: 55, color: 'orangered' },
            { from: 55.01, to: 65.1, color: 'green' },
            { from: 65.11, to: Infinity, color: 'darkgreen' },
        ],
        target: 60,
    },
    muscle_mass: {
        key: 'muscle_mass',
        label: localize(`body.${'muscle_mass'}`),
        icon: '/local/images/bodyscoreIcon/muscle_mass.png',
        unit: ' kg',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 100,
        min: 0,
        severity: [
            { from: 0, to: 49.4, color: 'orangered' },
            { from: 49.41, to: 59.5, color: 'green' },
            { from: 59.51, to: Infinity, color: 'darkgreen' },
        ],
        target: 54.45,
    },
    bone_mass: {
        key: 'bone_mass',
        label: localize(`body.${'bone_mass'}`),
        icon: '/local/images/bodyscoreIcon/bone_mass.png',
        unit: ' kg',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 8,
        min: 0,
        severity: [
            { from: 0, to: 2, color: 'orangered' },
            { from: 2.01, to: 4.2, color: 'green' },
            { from: 4.21, to: Infinity, color: 'darkgreen' },
        ],
        target: 3.1,
    },
    weight: {
        key: 'weight',
        label: localize(`body.${'weight'}`),
        icon: '/local/images/bodyscoreIcon/ideal.png',
        unit: ' kg',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 130,
        min: 0,
        severity: [
            { from: 0, to: 57.3, color: 'blue' },
            { from: 57.31, to: 77.4, color: 'green' },
            { from: 77.41, to: 86.7, color: 'orange' },
            { from: 86.71, to: 99.1, color: 'orangered' },
            { from: 99.11, to: Infinity, color: 'red' },
        ],
        target: 67.35,
    },
    ideal: {
        key: 'ideal',
        label: localize(`body.${'ideal'}`),
        icon: '/local/images/bodyscoreIcon/ideal.png',
        unit: ' kg',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 130,
        min: 0,
        severity: [
            { from: 0, to: 57.3, color: 'blue' },
            { from: 57.31, to: 77.4, color: 'green' },
            { from: 77.41, to: 86.7, color: 'orange' },
            { from: 86.71, to: 99.1, color: 'orangered' },
            { from: 99.11, to: Infinity, color: 'red' },
        ],
        target: 67.35,
    },
    basal_metabolism: {
        key: 'basal_metabolism',
        label: localize(`body.${'basal_metabolism'}`),
        icon: '/local/images/bodyscoreIcon/basal_metabolism.png',
        unit: ' kcal',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 3000,
        min: 0,
        severity: [
            { from: 0, to: 1530, color: 'orangered' },
            { from: 1530.01, to: Infinity, color: 'green' },
        ],
        target: 1530,
    },
    body_type: {
        key: 'body_type',
        label: localize(`body.${'body_type'}`),
        icon: '/local/images/bodyscoreIcon/body_type.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
    },
    metabolic_age: {
        key: 'metabolic_age',
        label: localize(`body.${'metabolic_age'}`),
        icon: '/local/images/bodyscoreIcon/metabolic_age.png',
        unit: localize(`unit.${' years'}`),
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: null,
        min: null,
        severity: null,
        target: null,
    },
};
const body_lb = {
    bmi: {
        key: 'bmi',
        label: localize(`body.${'bmi'}`),
        icon: '/local/images/bodyscoreIcon/bmi.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 40,
        min: 0,
        severity: [
            { from: 0, to: 18.5, color: 'blue' },
            { from: 18.51, to: 25, color: 'green' },
            { from: 25.01, to: 28, color: 'orange' },
            { from: 28.01, to: 32, color: 'orangered' },
            { from: 32.01, to: Infinity, color: 'red' },
        ],
        target: 21.75,
    },
    bmi_label: {
        key: 'bmi_label',
        label: localize(`body.${'bmi_label'}`),
        icon: '/local/images/bodyscoreIcon/body_type.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
    },
    visceral_fat: {
        key: 'visceral_fat',
        label: localize(`body.${'visceral_fat'}`),
        icon: '/local/images/bodyscoreIcon/visceral_fat.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 20,
        min: 0,
        severity: [
            { from: 0, to: 10, color: 'green' },
            { from: 10.01, to: 15, color: 'orange' },
            { from: 15.01, to: Infinity, color: 'orangered' },
        ],
        target: 12.5,
    },
    body_fat: {
        key: 'body_fat',
        label: localize(`body.${'body_fat'}`),
        icon: '/local/images/bodyscoreIcon/body_fat.png',
        unit: ' %',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 40,
        min: 0,
        severity: [
            { from: 0, to: 12, color: 'blue' },
            { from: 12.01, to: 18, color: 'royalblue' },
            { from: 18.01, to: 23, color: 'green' },
            { from: 23.01, to: 28, color: 'orange' },
            { from: 28.01, to: Infinity, color: 'orangered' },
        ],
        target: 20.5,
    },
    protein: {
        key: 'protein',
        label: localize(`body.${'protein'}`),
        icon: '/local/images/bodyscoreIcon/protein.png',
        unit: ' %',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 32,
        min: 0,
        severity: [
            { from: 0, to: 16, color: 'orangered' },
            { from: 16.01, to: 20, color: 'green' },
            { from: 20.01, to: Infinity, color: 'darkgreen' },
        ],
        target: 18,
    },
    water: {
        key: 'water',
        label: localize(`body.${'water'}`),
        icon: '/local/images/bodyscoreIcon/water.png',
        unit: ' %',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 80,
        min: 0,
        severity: [
            { from: 0, to: 55, color: 'orangered' },
            { from: 55.01, to: 65.1, color: 'green' },
            { from: 65.11, to: Infinity, color: 'darkgreen' },
        ],
        target: 60,
    },
    muscle_mass: {
        key: 'muscle_mass',
        label: localize(`body.${'muscle_mass'}`),
        icon: '/local/images/bodyscoreIcon/muscle_mass.png',
        unit: ' lbs',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 220.5,
        min: 0,
        severity: [
            { from: 0, to: 108.9, color: 'orangered' },
            { from: 109, to: 131.2, color: 'green' },
            { from: 131.3, to: Infinity, color: 'darkgreen' },
        ],
        target: 120.1,
    },
    bone_mass: {
        key: 'bone_mass',
        label: localize(`body.${'bone_mass'}`),
        icon: '/local/images/bodyscoreIcon/bone_mass.png',
        unit: ' lbs',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 17.6,
        min: 0,
        severity: [
            { from: 0, to: 4.4, color: 'orangered' },
            { from: 4.5, to: 9.3, color: 'green' },
            { from: 9.4, to: Infinity, color: 'darkgreen' },
        ],
        target: 6.9,
    },
    weight: {
        key: 'weight',
        label: localize(`body.${'weight'}`),
        icon: '/local/images/bodyscoreIcon/ideal.png',
        unit: ' lbs',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 286.6,
        min: 0,
        severity: [
            { from: 0, to: 126.3, color: 'blue' },
            { from: 126.4, to: 170.6, color: 'green' },
            { from: 170.7, to: 191.1, color: 'orange' },
            { from: 191.2, to: 218.5, color: 'orangered' },
            { from: 218.6, to: Infinity, color: 'red' },
        ],
        target: 148.5,
    },
    ideal: {
        key: 'ideal',
        label: localize(`body.${'ideal'}`),
        icon: '/local/images/bodyscoreIcon/ideal.png',
        unit: ' lbs',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 286.6,
        min: 0,
        severity: [
            { from: 0, to: 126.3, color: 'blue' },
            { from: 126.4, to: 170.6, color: 'green' },
            { from: 170.7, to: 191.1, color: 'orange' },
            { from: 191.2, to: 218.5, color: 'orangered' },
            { from: 218.6, to: Infinity, color: 'red' },
        ],
        target: 148.5,
    },
    basal_metabolism: {
        key: 'basal_metabolism',
        label: localize(`body.${'basal_metabolism'}`),
        icon: '/local/images/bodyscoreIcon/basal_metabolism.png',
        unit: ' kcal',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            indicator: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: 3000,
        min: 0,
        severity: [
            { from: 0, to: 1530, color: 'orangered' },
            { from: 1530.01, to: Infinity, color: 'green' },
        ],
        target: 1530,
    },
    body_type: {
        key: 'body_type',
        label: localize(`body.${'body_type'}`),
        icon: '/local/images/bodyscoreIcon/body_type.png',
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
    },
    metabolic_age: {
        key: 'metabolic_age',
        label: localize(`body.${'metabolic_age'}`),
        icon: '/local/images/bodyscoreIcon/metabolic_age.png',
        unit: localize(`unit.${' years'}`),
        direction: 'right',
        height: '30px',
        width: '100%',
        positions: {
            icon: 'outside',
            name: 'inside',
            minmax: 'off',
            value: 'inside',
        },
        color: 'var(--score-card-color, var(--ha-card-background))',
        max: null,
        min: null,
        severity: null,
        target: null,
    },
};
const buttons = {
    user1: {
        show: false,
        label: 'User1',
        icon: 'mdi:alpha-u-circle',
    },
    user2: {
        show: false,
        label: 'User2',
        icon: 'mdi:alpha-u-circle',
    },
    user3: {
        show: false,
        label: 'User3',
        icon: 'mdi:alpha-u-circle',
    },
    user4: {
        show: false,
        label: 'User4',
        icon: 'mdi:alpha-u-circle',
    },
    user5: {
        show: false,
        label: 'User5',
        icon: 'mdi:alpha-u-circle',
    },
};
const compute = {
    convertkgtolb: (v) => Math.round((Number(v) * 2.20462) * 10) / 10,
};
const models = {
    no_impedance: {
        states: {
            status: {
                key: 'state',
            },
        },
        attributes_kg: {
            weight: { key: 'weight' },
            impedance: false,
            height: { key: 'height' },
            age: { key: 'age' },
            gender: { key: 'gender' },
        },
        attributes_lb: {
            weight: {
                key: 'weight',
                compute: compute.convertkgtolb,
            },
            impedance: false,
            height: { key: 'height' },
            age: { key: 'age' },
            gender: { key: 'gender' },
        },
        body_kg: {
            bmi: { key: 'bmi' },
            bmi_label: { key: 'bmi_label' },
            visceral_fat: { key: 'visceral_fat' },
            body_fat: false,
            protein: false,
            water: false,
            muscle_mass: false,
            bone_mass: false,
            weight: { key: 'weight' },
            ideal: { key: 'ideal' },
            basal_metabolism: { key: 'basal_metabolism' },
            body_type: false,
            metabolic_age: false,
        },
        body_lb: {
            bmi: { key: 'bmi' },
            bmi_label: { key: 'bmi_label' },
            visceral_fat: { key: 'visceral_fat' },
            body_fat: false,
            protein: false,
            water: false,
            muscle_mass: false,
            bone_mass: false,
            weight: {
                key: 'weight',
                compute: compute.convertkgtolb,
            },
            ideal: {
                key: 'ideal',
                compute: compute.convertkgtolb,
            },
            basal_metabolism: { key: 'basal_metabolism' },
            body_type: false,
            metabolic_age: false,
        },
        buttons: {},
    },
    with_impedance: {
        states: {
            status: {
                key: 'state',
            },
        },
        attributes_kg: {
            weight: { key: 'weight' },
            impedance: { key: 'impedance' },
            height: { key: 'height' },
            age: { key: 'age' },
            gender: { key: 'gender' },
        },
        attributes_lb: {
            weight: {
                key: 'weight',
                compute: compute.convertkgtolb,
            },
            impedance: { key: 'impedance' },
            height: { key: 'height' },
            age: { key: 'age' },
            gender: { key: 'gender' },
        },
        body_kg: {
            bmi: { key: 'bmi' },
            bmi_label: { key: 'bmi_label' },
            visceral_fat: { key: 'visceral_fat' },
            body_fat: { key: 'body_fat' },
            protein: { key: 'protein' },
            water: { key: 'water' },
            muscle_mass: { key: 'muscle_mass' },
            bone_mass: { key: 'bone_mass' },
            weight: { key: 'weight' },
            ideal: { key: 'ideal' },
            basal_metabolism: { key: 'basal_metabolism' },
            body_type: { key: 'body_type' },
            metabolic_age: { key: 'metabolic_age' },
        },
        body_lb: {
            bmi: { key: 'bmi' },
            bmi_label: { key: 'bmi_label' },
            visceral_fat: { key: 'visceral_fat' },
            body_fat: { key: 'body_fat' },
            protein: { key: 'protein' },
            water: { key: 'water' },
            muscle_mass: {
                key: 'muscle_mass',
                compute: compute.convertkgtolb,
            },
            bone_mass: {
                key: 'bone_mass',
                compute: compute.convertkgtolb,
            },
            weight: {
                key: 'weight',
                compute: compute.convertkgtolb,
            },
            ideal: {
                key: 'ideal',
                compute: compute.convertkgtolb,
            },
            basal_metabolism: { key: 'basal_metabolism' },
            body_type: { key: 'body_type' },
            metabolic_age: { key: 'metabolic_age' },
        },
        buttons: {},
    },
};
const defaultCardConfig = {
    entity: '',
    image: '',
    model: false,
    unit: false,
    theme: true,
    show_name: true,
    show_states: true,
    show_attributes: true,
    show_always_details: false,
    show_toolbar: true,
    show_body: true,
    show_buttons: false,
};

function deepMerge(...sources) {
    const isObject = (obj) => obj && typeof obj === 'object';
    const target = {};
    sources.filter((source) => isObject(source)).forEach((source) => {
        Object.keys(source).forEach((key) => {
            const targetValue = target[key];
            const sourceValue = source[key];
            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                target[key] = targetValue.concat(sourceValue);
            }
            else if (isObject(targetValue) && isObject(sourceValue)) {
                target[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
            }
            else {
                target[key] = sourceValue;
            }
        });
    });
    return target;
}

function buildStyles(config) {
    const { image, theme, show_toolbar, name, buttons } = config;
    return {
        background: image
            ? `
          background-image: url('${image}');
          color: white;
          text-shadow: 0 0 10px black;
          min-height: 220px;
          border-radius: var(--ha-card-border-radius, 12px);
          ${show_toolbar === false ? 'border-radius: var(--ha-card-border-radius, 12px);' : 'border-radius: 0;'}
          overflow: hidden;
        `
            : '',
        icon: `color: ${image ? 'white' : 'var(--paper-item-icon-color)'};`,
        iconbody: `background-color: ${theme !== false ? 'var(--paper-item-icon-color)' : 'white'};`,
        content: `padding: ${name !== false ? '8px' : '16px'} ${buttons !== false ? '8px' : '16px'};`,
    };
}
function buildConfig(config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if (!config) {
        throw new Error(localize('error.invalid_config'));
    }
    if (!config.entity) {
        throw new Error(localize('error.missing_entity'));
    }
    if (config.entity.split('.')[0] !== 'bodymiscale') {
        throw new Error(localize('error.missing_entity_bodymiscale'));
    }
    const model = config.model ? models.with_impedance : models.no_impedance;
    // Fusionner les données et préparer les valeurs par défaut
    return {
        name: (_a = config.name) !== null && _a !== void 0 ? _a : '',
        entity: (_b = config.entity) !== null && _b !== void 0 ? _b : '',
        image: (_c = config.image) !== null && _c !== void 0 ? _c : undefined,
        model: (_d = config.model) !== null && _d !== void 0 ? _d : undefined,
        unit: (_e = config.unit) !== null && _e !== void 0 ? _e : undefined,
        theme: (_f = config.theme) !== null && _f !== void 0 ? _f : undefined,
        show_name: (_g = config.show_name) !== null && _g !== void 0 ? _g : undefined,
        show_states: (_h = config.show_states) !== null && _h !== void 0 ? _h : undefined,
        show_attributes: (_j = config.show_attributes) !== null && _j !== void 0 ? _j : undefined,
        show_always_details: (_k = config.show_always_details) !== null && _k !== void 0 ? _k : undefined,
        show_toolbar: (_l = config.show_toolbar) !== null && _l !== void 0 ? _l : undefined,
        show_body: (_m = config.show_body) !== null && _m !== void 0 ? _m : undefined,
        show_buttons: (_o = config.show_buttons) !== null && _o !== void 0 ? _o : undefined,
        states: deepMerge(states, model.states, config.states),
        attributes: config.unit
            ? deepMerge(attributes_lb, model.attributes_lb, config.attributes)
            : deepMerge(attributes_kg, model.attributes_kg, config.attributes),
        body: config.unit
            ? deepMerge(body_lb, model.body_lb, config.body)
            : deepMerge(body_kg, model.body_kg, config.body),
        buttons: config.buttons === true ? {} : deepMerge(buttons, model.buttons, config.buttons),
        direction: 'right',
        styles: buildStyles(config),
        open: (_p = config.open) !== null && _p !== void 0 ? _p : false,
        height: (_q = config.height) !== null && _q !== void 0 ? _q : 'auto',
        width: (_r = config.width) !== null && _r !== void 0 ? _r : '100%',
        stats: (_s = config.stats) !== null && _s !== void 0 ? _s : {},
        type: (_t = config.type) !== null && _t !== void 0 ? _t : 'custom:body-miscale-card',
        min: (_u = config.min) !== null && _u !== void 0 ? _u : 0,
        max: (_v = config.max) !== null && _v !== void 0 ? _v : 100,
        color: (_w = config.color) !== null && _w !== void 0 ? _w : 'var(--primary-color)',
        columns: (_x = config.columns) !== null && _x !== void 0 ? _x : '1',
    };
}

// String in the right side will be replaced by Rollup
const PKG_VERSION = 'DEVELOPMENT';
console.info(`%c Body-miscale-card \n%c  ${localize('common.version')} ${PKG_VERSION} `, 'color: cyan; background: black; font-weight: bold;', 'color: darkblue; background: white; font-weight: bold;');
let BodymiscaleCard = class BodymiscaleCard extends s {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    static get styles() {
        return css_248z$1;
    }
    static async getConfigElement() {
        Promise.resolve().then(function () { return editor; });
        return document.createElement('body-miscale-card-editor');
    }
    static getStubConfig(_, entities) {
        const [bodymiscaleEntity] = entities.filter((eid) => eid.startsWith('bodymiscale'));
        return Object.assign(Object.assign({}, defaultCardConfig), { entity: bodymiscaleEntity !== null && bodymiscaleEntity !== void 0 ? bodymiscaleEntity : '' });
    }
    get entity() {
        return this.hass.states[this.config.entity];
    }
    setConfig(config) {
        this.config = buildConfig(config);
    }
    getCardSize() {
        return this.config.show_name && this.config.show_buttons ? 4
            : this.config.show_name || this.config.show_buttons ? 3
                : 2;
    }
    shouldShowBackground() {
        return !(this.config.image === "" &&
            this.config.show_states === false &&
            this.config.show_attributes === false &&
            this.config.show_always_details === true &&
            this.config.show_body === true);
    }
    shouldUpdate(changedProps) {
        return _e(this, changedProps, false);
    }
    toggle(event) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.open = !this.open;
    }
    customEvent(event) {
        var _a;
        if ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.fold_row) {
            this.toggle(event);
        }
    }
    toggleMenu(key) {
        var _a;
        const menu = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`#bmc-menu-${key}`);
        if (menu && 'open' in menu) {
            menu.open = !menu.open;
        }
    }
    handleChange(mode, key, service) {
        var _a;
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity))
            return;
        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj)
            return;
        this.callService(service !== null && service !== void 0 ? service : `bodymiscale.set_${key}`, {
            entity_id: stateObj.entity_id,
            [key]: mode,
        });
    }
    callService(service, data) {
        var _a;
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity))
            return;
        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj) {
            console.error("Entity not found:", this.config.entity);
            return;
        }
        const [domain, name] = service.split(".");
        const serviceData = Object.assign({ entity_id: stateObj.entity_id }, data);
        this.hass.callService(domain, name, serviceData);
    }
    moreInfo() {
        var _a;
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            console.warn("No entity defined in the config.");
            return;
        }
        ne(this, 'hass-more-info', {
            entityId: this.config.entity,
        });
    }
    renderName(stateObj) {
        if (!this.config.show_name) {
            return A;
        }
        return x ` <div class="title">${this.config.name || stateObj.attributes.friendly_name}</div> `;
    }
    renderState(data) {
        var _a, _b, _c, _d, _e;
        if (!this.config.show_states) {
            return A;
        }
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            return x `<div>${localize('state.default.unavailable')}</div>`;
        }
        const stateObj = (_b = this.hass.states) === null || _b === void 0 ? void 0 : _b[this.config.entity];
        if (!stateObj) {
            return x `<div>${this.hass.localize('state.default.unavailable')}</div>`;
        }
        const keyExists = (data === null || data === void 0 ? void 0 : data.key) && stateObj;
        const isValidAttribute = keyExists && ((_c = stateObj.attributes) === null || _c === void 0 ? void 0 : _c[data.key]) !== undefined;
        const isValidEntityData = keyExists && stateObj[data.key] !== undefined;
        let value = isValidAttribute
            ? stateObj.attributes[data.key]
            : isValidEntityData
                ? stateObj[data.key]
                : this.hass.localize('state.default.unavailable');
        if (data.key === "last_measurement_time" && typeof value === "string") {
            try {
                const parsedDate = new Date(value.replace(" ", "T"));
                const formattedDate = a(parsedDate, this.hass.locale);
                const formattedTime = D(parsedDate, this.hass.locale);
                value = `${formattedDate} ${formattedTime}`;
            }
            catch ( /* empty */_f) { /* empty */ }
        }
        const formatValue = typeof value === 'number' ? H(value, this.hass.locale) : value;
        const localizedValue = localize(`states.${value}`) || formatValue;
        const attribute = stateObj.state === 'ok' && data.icon === 'mdi:alert'
            ? A
            : x ` <div class="state-div">
                  <div>${data.icon && this.renderIcon(data)}</div>
                  <div class="state-label">
                    ${(_d = data.label) !== null && _d !== void 0 ? _d : ''}${localizedValue}${(_e = data.unit) !== null && _e !== void 0 ? _e : ''}</div>
                </div>`;
        const hasDropdown = `${data.key}_list` in stateObj.attributes;
        return hasDropdown && (isValidAttribute || isValidEntityData) && data.service
            ? this.renderDropdown(attribute, data.key, data.service)
            : attribute;
    }
    renderAttribute(data) {
        var _a, _b, _c, _d, _e;
        if (!this.config.show_attributes) {
            return A;
        }
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            return x `<div>${localize('state.default.unavailable')}</div>`;
        }
        const stateObj = (_b = this.hass.states) === null || _b === void 0 ? void 0 : _b[this.config.entity];
        if (!stateObj) {
            return x `<div>${this.hass.localize('state.default.unavailable')}</div>`;
        }
        const computeFunc = typeof data.compute === 'function' ? data.compute : (v) => v;
        const keyExists = (data === null || data === void 0 ? void 0 : data.key) && stateObj;
        const isValidAttribute = keyExists && ((_c = stateObj.attributes) === null || _c === void 0 ? void 0 : _c[data.key]) !== undefined;
        const isValidEntityData = keyExists && stateObj[data.key] !== undefined;
        let value = isValidAttribute
            ? computeFunc(stateObj.attributes[data.key])
            : isValidEntityData
                ? computeFunc(stateObj[data.key])
                : this.hass.localize('state.default.unavailable');
        if (data.key === "last_measurement_time" && typeof value === "string") {
            try {
                const parsedDate = new Date(value.replace(" ", "T"));
                const formattedDate = a(parsedDate, this.hass.locale);
                const formattedTime = D(parsedDate, this.hass.locale);
                value = `${formattedDate} ${formattedTime}`;
            }
            catch ( /* empty */_f) { /* empty */ }
        }
        const formatValue = typeof value === 'number' ? H(value, this.hass.locale) : value;
        const localizedValue = localize(`attributes_value.${value}`) || formatValue;
        const attribute = x `<div>
      ${data.icon && this.renderIcon(data)}
      ${(_d = data.label) !== null && _d !== void 0 ? _d : ''}${localizedValue}${(_e = data.unit) !== null && _e !== void 0 ? _e : ''}
    </div>`;
        const hasDropdown = `${data.key}_list` in stateObj.attributes;
        return hasDropdown && (isValidAttribute || isValidEntityData) && data.service
            ? this.renderDropdown(attribute, data.key, data.service)
            : attribute;
    }
    renderBody(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (!this.config.show_body) {
            return A;
        }
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            return x `<div>${localize('state.default.unavailable')}</div>`;
        }
        const stateObj = (_b = this.hass.states) === null || _b === void 0 ? void 0 : _b[this.config.entity];
        if (!stateObj) {
            return x `<div>${this.hass.localize('state.default.unavailable')}</div>`;
        }
        const computeFunc = typeof data.compute === 'function' ? data.compute : (v) => v;
        const keyExists = (data === null || data === void 0 ? void 0 : data.key) && stateObj;
        const isValidAttribute = keyExists && ((_c = stateObj.attributes) === null || _c === void 0 ? void 0 : _c[data.key]) !== undefined;
        const isValidEntityData = keyExists && stateObj[data.key] !== undefined;
        let value = isValidAttribute
            ? computeFunc(stateObj.attributes[data.key])
            : isValidEntityData
                ? computeFunc(stateObj[data.key])
                : this.hass.localize('state.default.unavailable');
        if (data.key === "last_measurement_time" && typeof value === "string") {
            try {
                const parsedDate = new Date(value.replace(" ", "T"));
                const formattedDate = a(parsedDate, this.hass.locale);
                const formattedTime = D(parsedDate, this.hass.locale);
                value = `${formattedDate} ${formattedTime}`;
            }
            catch ( /* empty */_p) { /* empty */ }
        }
        const formatValue = typeof value === 'number' ? H(value, this.hass.locale) : value;
        // Defined height and check for configured height.
        let barHeight = 30;
        if (typeof data.height === 'number' || typeof data.height === 'string') {
            barHeight = data.height;
        }
        // Set style variables based on direction.
        let alignItems = 'stretch';
        let backgroundMargin = '0px 0px 0px 13px';
        let barDirection = 'right';
        let flexDirection = 'row';
        let markerDirection = 'left';
        let markerStyle = 'height: 100%; width: 2px;';
        switch (data.direction) {
            case 'right':
                barDirection = 'right';
                markerDirection = 'left';
                break;
            case 'up':
                backgroundMargin = '0px';
                barDirection = 'top';
                flexDirection = 'column-reverse';
                markerDirection = 'bottom';
                markerStyle = 'height: 2px; width: 100%;';
                break;
        }
        // Set icon position html.
        let iconOutside;
        let iconInside;
        const positions = data.positions || {};
        switch (positions.icon) {
            case 'outside':
                iconOutside = x ` <score-card-iconbar> ${data.icon && this.renderIconbody(data)} </score-card-iconbar> `;
                break;
            case 'inside':
                iconInside = x ` <score-card-iconbar> ${data.icon && this.renderIconbody(data)} </score-card-iconbar> `;
                backgroundMargin = '0px';
                break;
            case 'off':
                backgroundMargin = '0px';
                break;
        }
        // Set name html based on position.
        let nameOutside;
        let nameInside;
        switch (data.positions.name) {
            case 'outside':
                nameOutside = x `
          <score-card-name
            style="${data.direction == 'up'
                    ? ''
                    : data.width
                        ? `width: calc(100% - ${data.width});`
                        : ''}"
            >${(_d = data.label) !== null && _d !== void 0 ? _d : ''}</score-card-name
          >
        `;
                backgroundMargin = '0px';
                break;
            case 'inside':
                nameInside = x ` <score-card-name>${(_e = data.label) !== null && _e !== void 0 ? _e : ''}</score-card-name> `;
                break;
        }
        // Set min and max html based on position.
        let minMaxOutside;
        let minMaxInside;
        const min = (_f = data.min) !== null && _f !== void 0 ? _f : 0;
        const max = (_g = data.max) !== null && _g !== void 0 ? _g : 100;
        switch (data.positions.minmax) {
            case 'outside':
                minMaxOutside = x `
          <score-card-min>${min + ((_h = data.unit) !== null && _h !== void 0 ? _h : '')}</score-card-min>
          <score-card-divider>/</score-card-divider>
          <score-card-max>${max + ((_j = data.unit) !== null && _j !== void 0 ? _j : '')}</score-card-max>
        `;
                break;
            case 'inside':
                minMaxInside = x `
          <score-card-min class="${data.direction == 'up' ? 'min-direction-up' : 'min-direction-right'}"
            >${min + ((_k = data.unit) !== null && _k !== void 0 ? _k : '')}</score-card-min
          >
          <score-card-divider>/</score-card-divider>
          <score-card-max> ${max + ((_l = data.unit) !== null && _l !== void 0 ? _l : '')}</score-card-max>
        `;
                break;
        }
        // Set value html based on position.
        let valueOutside;
        let valueInside;
        switch (data.positions.value) {
            case 'outside':
                valueOutside = x `
          <score-card-value class="${data.direction == 'up' ? 'value-direction-up' : 'value-direction-right'}"
            >${(localize(`body_value.${value}`) || formatValue)}
             ${((_m = data.unit) !== null && _m !== void 0 ? _m : '')}</score-card-value
          >
        `;
                break;
            case 'inside':
                valueInside = x `
          <score-card-value
            class="${data.positions.minmax == 'inside'
                    ? ''
                    : data.direction == 'up'
                        ? 'value-direction-up'
                        : 'value-direction-right'}"
            >${(localize(`body_value.${value}`) || formatValue)}
             ${((_o = data.unit) !== null && _o !== void 0 ? _o : '')}</score-card-value
          >
        `;
                break;
            case 'off':
                backgroundMargin = '0px';
                break;
        }
        // Set bar color.
        const barColor = this.computeBarColor(data, Number(value));
        // Set bar percent and marker percent based on value difference.
        const barPercent = this.computePercent(data, Number(value));
        const targetMarkerPercent = this.computePercent(data, data.target);
        let targetStartPercent = barPercent;
        let targetEndPercent = this.computePercent(data, data.target);
        if (targetEndPercent < targetStartPercent) {
            targetStartPercent = targetEndPercent;
            targetEndPercent = barPercent;
        }
        // Set bar width if configured.
        let barWidth = '';
        if (data.width) {
            alignItems = 'center';
            barWidth = `width: ${data.width}`;
        }
        // Create array containing all rows.
        let rowFlexDirection = 'column';
        if (this.config.columns)
            rowFlexDirection = 'row';
        const attribute = x ` <score-card-row style="flex-direction: ${rowFlexDirection};">
      <score-card-card style="flex-direction: ${flexDirection}; align-items: ${alignItems};">
        ${iconOutside} ${nameOutside}
        <score-card-background
          style="margin: ${backgroundMargin}; height: ${barHeight}${typeof barHeight == 'number'
            ? 'px'
            : ''}; ${barWidth}"
        >
          <score-card-backgroundbar style="--bar-color: ${barColor};"></score-card-backgroundbar>
          <score-card-currentbar
            style="--bar-color: ${barColor}; --bar-percent: ${barPercent}%; --bar-direction: ${barDirection}"
          ></score-card-currentbar>
          ${data.target
            ? x `
                <score-card-targetbar
                  style="--bar-color: ${barColor}; --bar-percent: ${targetStartPercent}%; --bar-target-percent: ${targetEndPercent}%; --bar-direction: ${barDirection};"
                ></score-card-targetbar>
                <score-card-markerbar
                  style="--bar-color: ${barColor}; --bar-target-percent: ${targetMarkerPercent}%; ${markerDirection}: calc(${targetMarkerPercent}% - 1px); ${markerStyle}"
                ></score-card-markerbar>
              `
            : ''}
          <score-card-contentbar
            class="${data.direction == 'up' ? 'contentbar-direction-up' : 'contentbar-direction-right'}"
          >
            ${iconInside} ${nameInside} ${minMaxInside} ${valueInside}
          </score-card-contentbar>
        </score-card-background>
        ${minMaxOutside} ${valueOutside}
      </score-card-card>
    </score-card-row>`;
        const hasDropdown = `${data.key}_list` in stateObj.attributes;
        return hasDropdown && (isValidAttribute || isValidEntityData)
            ? this.renderDropdown(attribute, data.key, data.service)
            : attribute;
    }
    renderIcon(data) {
        var _a, _b;
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            return A;
        }
        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj) {
            return A;
        }
        const icon = data.key === 'water' && 'water_icon' in stateObj.attributes
            ? stateObj.attributes.water_icon
            : data.icon;
        if (!icon) {
            return A; // Évite un <ha-icon> inutile
        }
        const isProblem = stateObj.attributes.problem !== 'none' && icon === 'mdi:alert';
        const iconClass = isProblem ? 'problem' : '';
        return x `
      <ha-icon
        class="${iconClass}"
        icon="${icon}"
        style="margin-right: 10px; ${((_b = this.config.styles) === null || _b === void 0 ? void 0 : _b.icon) || ''} ${isProblem ? 'color: var(--error-color) !important;' : ''}"
      ></ha-icon>
    `;
    }
    renderIconbody(data) {
        var _a, _b;
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            return A;
        }
        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj) {
            return A;
        }
        const icon = data.key === 'Water' && 'water_icon' in stateObj.attributes
            ? stateObj.attributes.water_icon
            : data.icon;
        if (!icon) {
            return A; // Évite un ha-icon inutile
        }
        return x `
      <ha-icon
        class="image"
        style="-webkit-mask-image: url('${icon}'); -webkit-mask-size: 24px; 
          ${((_b = this.config.styles) === null || _b === void 0 ? void 0 : _b.iconbody) || ''}"
      ></ha-icon>
    `;
    }
    renderButton(data) {
        var _a;
        if (!this.config.show_buttons || !(data === null || data === void 0 ? void 0 : data.icon) || data.show === false) {
            return A;
        }
        return x `
      <ha-icon-button
        @click=${() => this.callService(data.service, data.service_data)}
        title=${l(data.label)}
        style=${((_a = this.config.styles) === null || _a === void 0 ? void 0 : _a.icon) || ''}>
        <ha-icon icon="${data.icon}"></ha-icon>
      </ha-icon-button>
    `;
    }
    renderToolbar() {
        var _a;
        if (!this.config.show_toolbar) {
            return A;
        }
        return x `
      <div class="toolbar" @ll-custom=${this.customEvent} ?open=${this.open}>
        <ha-icon-button
          @click=${this.toggle}
          title=${l(localize('common.toggle_power') || undefined)}
          style="color: var(--primary-color);">
            <ha-icon icon=${this.config.show_always_details ? '' : this.open ? 'mdi:chevron-up' : 'mdi:chevron-down'}></ha-icon>
        </ha-icon-button>
        <div class="fill-gap"></div>
        ${Object.values((_a = this.config.buttons) !== null && _a !== void 0 ? _a : {})
            .filter(Boolean)
            .map(this.renderButton.bind(this))}
      </div>
    `;
    }
    renderDropdown(attribute, key, service) {
        var _a, _b;
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            return A;
        }
        const stateObj = this.hass.states[this.config.entity];
        if (!(stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes)) {
            return A;
        }
        const list = (_b = stateObj.attributes[`${key}_list`]) !== null && _b !== void 0 ? _b : [];
        if (!Array.isArray(list) || list.length === 0) {
            return A;
        }
        return x `
    <div style="position: relative" @click=${(e) => e.stopPropagation()}>
      <ha-button @click=${() => this.toggleMenu(key)}>
        ${attribute}
      </ha-button>
        <mwc-menu
          @selected=${(e) => this.handleChange(list[e.detail.index], key, service)}
          id=${l(`bmc-menu-${key}`)}
          activatable
          corner="BOTTOM_START">
          ${list.map((item) => x `<mwc-list-item value=${item}>${item}</mwc-list-item>`)}
        </mwc-menu>
    </div>`;
    }
    computeBarColor(data, numberValue) {
        var _a, _b;
        if (data.severity) {
            return this.computeSeverityColor(data, numberValue);
        }
        if (data == 'unavailable') {
            return `var(--score-card-disabled-color, ${(_a = data.color) !== null && _a !== void 0 ? _a : 'gray'})`;
        }
        return (_b = data.color) !== null && _b !== void 0 ? _b : 'gray';
    }
    computeSeverityColor(data, numberValue) {
        var _a;
        const sections = data.severity;
        let color;
        if (isNaN(numberValue)) {
            sections.forEach((section) => {
                if (data == section.text) {
                    color = section.color;
                }
            });
        }
        else {
            sections.forEach((section) => {
                if (numberValue >= section.from && numberValue <= section.to) {
                    color = section.color;
                }
            });
        }
        return (_a = color !== null && color !== void 0 ? color : data.color) !== null && _a !== void 0 ? _a : 'gray'; // Défaut à 'gray' si aucune couleur trouvée
    }
    computePercent(data, numberValue) {
        if (data === 'unavailable')
            return 0;
        if (isNaN(numberValue))
            return 100;
        // Vérifier que min et max existent et sont bien des nombres
        const min = typeof data.min === 'number' ? data.min : 0;
        const max = typeof data.max === 'number' ? data.max : 100;
        if (min >= max)
            return 0; // Évite une division par zéro ou un pourcentage incorrect
        const percent = (100 * (numberValue - min)) / (max - min);
        switch (data.direction) {
            case 'right-reverse':
            case 'left-reverse':
            case 'up-reverse':
            case 'down-reverse':
                return 100 - percent;
            default:
                return percent;
        }
    }
    render() {
        var _a, _b, _c;
        if (!this.hass || !((_a = this.config) === null || _a === void 0 ? void 0 : _a.entity)) {
            return A;
        }
        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj) {
            return x `
        <ha-card>
          <div class="preview not-available">
            <div class="metadata">
              <div class="not-available">
                ${localize('common.not_available')}
              </div>
            </div>
          </div>
        </ha-card>
      `;
        }
        return x `
      <ha-card>
        ${this.shouldShowBackground()
            ? x `
              <div class="background" 
                style="
                  ${((_b = this.config.styles) === null || _b === void 0 ? void 0 : _b.background) || ''};
              ">
                ${this.config.show_name ? x `<div class="title">${this.renderName(stateObj)}</div>` : ""}
                <div class="grid" 
                  style="${((_c = this.config.styles) === null || _c === void 0 ? void 0 : _c.content) || ''}" 
                  @click="${this.moreInfo}" 
                  tabindex="0">
                  <div class="grid-left">
                    ${(this.config.states ? Object.values(this.config.states) : [])
                .filter((v) => v)
                .map(this.renderState.bind(this))}
                  </div>
                  <div class="grid-right">
                    ${(this.config.attributes ? Object.values(this.config.attributes) : [])
                .filter((v) => v)
                .map(this.renderAttribute.bind(this))}
                  </div>
                </div>
              </div>
            `
            : this.config.show_name
                ? x `<div class="title">${this.renderName(stateObj)}</div>`
                : ""}
        
        ${this.renderToolbar()}
        <div id="items" ?open=${this.open || this.config.show_always_details}>
          <div id="score" class="card-content" style=${this.config.direction === 'up' ? '' : 'flex-grow: 0;'}>
            ${(this.config.body ? Object.values(this.config.body) : [])
            .filter(Boolean)
            .map(this.renderBody.bind(this))}
          </div>
        </div>
      </ha-card>
    `;
    }
};
__decorate([
    n$1({ attribute: false })
], BodymiscaleCard.prototype, "hass", void 0);
__decorate([
    t$1()
], BodymiscaleCard.prototype, "config", void 0);
__decorate([
    t$1()
], BodymiscaleCard.prototype, "open", void 0);
BodymiscaleCard = __decorate([
    e$1('body-miscale-card')
], BodymiscaleCard);
window.customCards = window.customCards || [];
window.customCards.push({
    preview: true,
    type: 'body-miscale-card',
    name: localize('common.name'),
    description: localize('common.description'),
});

var css_248z = i$2`.card-config {
    flex-direction: column;
    display: flex;
  }
  
  .option {
    display: flex;
    align-items: center;
  }
  
  .option ha-switch {
    --mdc-theme-secondary: var(--switch-checked-color);
  }
  
  .option ha-select,
  .option ha-textfield {
    width: 100%;
  }

  .option ha-formfield {
    padding-bottom: 8px;
  }`;
styleInject(css_248z);

let BodymiscaleCardEditor = class BodymiscaleCardEditor extends s {
    constructor() {
        super(...arguments);
        this.config = {};
        this.isInitialized = false;
    }
    setConfig(config) {
        this.config = Object.assign({}, config);
    }
    async connectedCallback() {
        super.connectedCallback();
        await this.loadCardHelpers();
    }
    shouldUpdate() {
        if (!this.isInitialized) {
            this.initialize();
        }
        return true;
    }
    render() {
        if (!this.hass || !this.helpers) {
            return A;
        }
        const config = Object.assign(Object.assign({}, defaultCardConfig), this.config);
        const entities = Object.keys(this.hass.states).filter((entity) => entity.startsWith("bodymiscale."));
        return x `
      <div class="card-config">
        <div class="option">
          <ha-select
            .label=${localize('editor.entity')}
            @selected=${this.valueChanged}
            .configValue=${'entity'}
            .value=${config.entity}
            @closed=${(e) => e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
            required
            .validationMessage=${localize('error.missing_entity')}
          >
            ${entities.map((entity) => x `<mwc-list-item .value=${entity}>${entity}</mwc-list-item>`)}
          </ha-select>
        </div>

        <div class="option">
          <ha-textfield
            .label=${localize('editor.image')}
            .value=${config.image || ''}
            .configValue=${'image'}
            @input=${this.valueChanged}
          ></ha-textfield>
        </div>

        ${this.renderSwitch('model', config)}
        ${this.renderSwitch('unit', config)}
        ${this.renderSwitch('theme', config)}

        <p style="font-size: large; line-height: 200%;">
          <u>${localize('editor.header_options')}</u>
        </p>

        ${this.renderSwitch('show_name', config)}
        ${this.renderSwitch('show_states', config)}
        ${this.renderSwitch('show_attributes', config)}

        <p style="font-size: large; line-height: 200%;">
          <u>${localize('editor.body_options')}</u>
        </p>

        ${this.renderSwitch('show_always_details', config)}
        ${this.renderSwitch('show_toolbar', config)}
        ${this.renderSwitch('show_body', config, true)}
        ${this.renderSwitch('show_buttons', config, true)}

        <strong>${localize('editor.code_only_note')}</strong>
      </div>
    `;
    }
    renderSwitch(option, config, padded = false) {
        return x `
      <div style="padding: ${padded ? '0 0 0 45px' : '0'}">
        ${localize(`editor.${option}`)}
        <div class="option">
          <ha-formfield
            .label=${localize(config[option]
            ? `editor.${option}_aria_label_off`
            : `editor.${option}_aria_label_on`)}
          >
            <ha-switch
              .checked=${Boolean(config[option])}
              .configValue=${option}
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
    }
    valueChanged(event) {
        if (!this.config || !this.hass || !event.target) {
            return;
        }
        const target = event.target;
        if (target.configValue) {
            const newValue = target.checked !== undefined ? target.checked : target.value || undefined;
            this.config = Object.assign(Object.assign({}, this.config), { [target.configValue]: newValue });
            ne(this, 'config-changed', { config: this.config });
        }
    }
    initialize() {
        if (this.hass && this.config && this.helpers) {
            this.isInitialized = true;
        }
    }
    async loadCardHelpers() {
        this.helpers = await window.loadCardHelpers();
    }
    static get styles() {
        return css_248z;
    }
};
__decorate([
    n$1({ attribute: false })
], BodymiscaleCardEditor.prototype, "hass", void 0);
__decorate([
    t$1()
], BodymiscaleCardEditor.prototype, "config", void 0);
__decorate([
    t$1()
], BodymiscaleCardEditor.prototype, "helpers", void 0);
BodymiscaleCardEditor = __decorate([
    e$1('body-miscale-card-editor')
], BodymiscaleCardEditor);

var editor = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get BodymiscaleCardEditor () { return BodymiscaleCardEditor; }
});

export { BodymiscaleCard };
