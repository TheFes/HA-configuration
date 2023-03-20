function t(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}var e,i;function n(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var s=["closed","locked","off"],o=function(t,e,i,n){n=n||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s},r=function(t){o(window,"haptic",t)},a=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var s,o=n(e),r="group"===o?"homeassistant":o;switch(o){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return t.callService(r,s,{entity_id:e})}(t,e,s.includes(t.states[e].state))},l=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(r("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&o(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),o(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(a(e,i.entity),r("success"));break;case"call-service":if(!n.service)return void r("failure");var s=n.service.split(".",2);e.callService(s[0],s[1],n.service_data,n.target),r("success");break;case"fire-dom-event":o(t,"ll-custom",n)}};function c(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=window,h=d.ShadowRoot&&(void 0===d.ShadyCSS||d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),p=new WeakMap;let m=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(h&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=p.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&p.set(e,t))}return t}toString(){return this.cssText}};const v=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new m(i,t,u)},g=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new m("string"==typeof t?t:t+"",void 0,u))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var f;const _=window,$=_.trustedTypes,y=$?$.emptyScript:"",b=_.reactiveElementPolyfillSupport,A={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},E=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:E};let C=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||w}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(g(t))}else void 0!==t&&e.push(g(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{h?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=d.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=w){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:A).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:A;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||E)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var S;C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:C}),(null!==(f=_.reactiveElementVersions)&&void 0!==f?f:_.reactiveElementVersions=[]).push("1.4.1");const x=window,k=x.trustedTypes,T=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,H="?"+P,N=`<${H}>`,U=document,M=(t="")=>U.createComment(t),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,R=/>/g,D=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),j=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,G=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Y=new WeakMap,K=U.createTreeWalker(U,129,null,!1),F=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=L;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===L?"!--"===l[1]?r=V:void 0!==l[1]?r=R:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=null!=s?s:L,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?D:'"'===l[3]?z:j):r===z||r===j?r=D:r===V||r===R?r=L:(r=D,s=void 0);const h=r===D&&t[e+1].startsWith("/>")?" ":"";o+=r===L?i+N:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+P+h):i+P+(-2===c?(n.push(void 0),e):h)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==T?T.createHTML(a):a,n]};class J{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=J.createElement(l,i),K.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=K.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(P)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(P),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?et:"?"===e[1]?nt:"@"===e[1]?st:tt})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(B.test(n.tagName)){const t=n.textContent.split(P),e=t.length-1;if(e>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],M()),K.nextNode(),a.push({type:2,index:++s});n.append(t[e],M())}}}else if(8===n.nodeType)if(n.data===H)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(P,t+1));)a.push({type:7,index:s}),t+=P.length-1}s++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,n){var s,o,r,a;if(e===W)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=I(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=X(t,l._$AS(t,e.values),l,n)),e}class Z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(i,!0);K.currentNode=s;let o=K.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new ot(o,this,t)),this.u.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=K.nextNode(),r++)}return s}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{constructor(t,e,i,n){var s;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=J.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new Z(s,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new J(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class tt{constructor(t,e,i,n,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=X(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=X(this,n[i+r],e,r),a===W&&(a=this._$AH[r]),o||(o=!I(a)||a!==this._$AH[r]),a===q?t=q:t!==q&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const it=k?k.emptyScript:"";class nt extends tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,it):this.element.removeAttribute(this.name)}}class st extends tt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=X(this,t,e,0))&&void 0!==i?i:q)===W)return;const n=this._$AH,s=t===q&&n!==q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==q&&(n===q||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const rt=x.litHtmlPolyfillSupport;null==rt||rt(J,Q),(null!==(S=x.litHtmlVersions)&&void 0!==S?S:x.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var at,lt;class ct extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new Q(e.insertBefore(M(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return W}}ct.finalized=!0,ct._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ct});const dt=globalThis.litElementPolyfillSupport;null==dt||dt({LitElement:ct}),(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ut=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function pt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ut(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var mt;null===(mt=window.HTMLSlotElement)||void 0===mt||mt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt=1,gt=t=>(...e)=>({_$litDirective$:t,values:e});class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=gt(class extends ft{constructor(t){var e;if(super(t),t.type!==vt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const s=t.element.classList;this.nt.forEach((t=>{t in e||(s.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(i?(s.add(t),this.nt.add(t)):(s.remove(t),this.nt.delete(t)))}return W}}),$t="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class yt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:$t?"100px":"50px",height:$t?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},n=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?o(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,o(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,o(t,"action",{action:"double_tap"})):o(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n),t.addEventListener("keyup",(t=>{13===t.keyCode&&n(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-boilerplate",yt);const bt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-boilerplate"))return t.querySelector("action-handler-boilerplate");const e=document.createElement("action-handler-boilerplate");return t.appendChild(e),e})();i&&i.bind(t,e)},At=gt(class extends ft{update(t,[e]){return bt(t.element,e),W}render(t){}});var Et,wt,Ct,St;!function(t){var e,i;(e=t.AlignControls||(t.AlignControls={})).LEFT="left",e.CENTER="center",e.RIGHT="right",(i=t.Name||(t.Name={})).HEADER="header",i.INSIDE="inside"}(Et||(Et={})),function(t){t.UP="up",t.DOWN="down"}(wt||(wt={})),function(t){t.AM="AM",t.PM="PM"}(Ct||(Ct={}));let xt=St=class extends ct{get amClass(){return{"time-period":!0,active:this.period===Ct.AM}}get pmClass(){return{"time-period":!0,active:this.period===Ct.PM}}render(){return G`<div class="time-period-selector">
      ${"single"===this.mode?this.renderSingle():this.renderDouble()}
    </div>`}onTimePeriodChange(){const t=new CustomEvent(St.EVENT_TOGGLE);this.dispatchEvent(t)}renderSingle(){return G`<div class="time-period active" @click=${this.onTimePeriodChange}>
      ${this.period}<mwc-ripple></mwc-ripple>
    </div>`}renderDouble(){return G`<div class=${_t(this.amClass)} @click=${this.onTimePeriodChange}>
        AM<mwc-ripple></mwc-ripple>
      </div>
      <div class=${_t(this.pmClass)} @click=${this.onTimePeriodChange}>
        PM<mwc-ripple></mwc-ripple>
      </div>`}static get styles(){return v`
      .time-period-selector {
        padding: 0 8px;
      }

      .time-period {
        width: 30px;
        padding: var(--tpc-control-padding);
        background: var(--tpc-off-color);
        color: var(--tpc-text-color);
        text-align: center;
        font-size: 1em;
        cursor: pointer;
      }

      .time-period.active {
        background: var(--tpc-accent-color);
      }
    `}};var kt;xt.EVENT_TOGGLE="toggle",t([pt()],xt.prototype,"period",void 0),t([pt()],xt.prototype,"mode",void 0),xt=St=t([ht("time-period")],xt);let Tt=kt=class extends ct{render(){return G`
      <div class="time-unit">
        ${this.renderStepChanger(wt.UP)}
        <input
          class="time-input"
          type="number"
          placeholder="MM"
          min=${this.unit.minValue}
          max=${this.unit.maxValue}
          .value="${this.unit.toString()}"
          @change=${this.onInputChange}
        />
        ${this.renderStepChanger(wt.DOWN)}
      </div>
    `}onInputChange({target:{value:t}}){this.unit.setStringValue(t);const e=new CustomEvent(kt.EVENT_UPDATE);this.dispatchEvent(e)}onStepChangerClick(t){const e=new CustomEvent(kt.EVENT_STEP_CHANGE,{detail:{direction:t}});this.dispatchEvent(e)}renderStepChanger(t){return G`
      <div class="time-picker-icon" @click=${()=>this.onStepChangerClick(t)}>
        <ha-icon .icon="hass:chevron-${t}"></ha-icon>
        <mwc-ripple id="ripple"></mwc-ripple>
      </div>
    `}static get styles(){return v`
      .time-unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 8px;
      }

      .time-picker-icon {
        width: 30px;
        padding: var(--tpc-control-padding);
        text-align: center;
        cursor: pointer;
        color: var(--tpc-icon-color);
      }

      .time-input {
        width: 30px;
        padding: var(--tpc-control-padding);
        background: var(--tpc-elements-background-color);
        border: 0;
        border-bottom: 2px solid var(--tpc-elements-background-color);
        color: var(--tpc-text-color, #fff);
        text-align: center;
        font-size: 1em;
        -moz-appearance: textfield;

        transition: border-color 0.2s ease-in-out;
      }

      .time-input:focus {
        outline: none;
      }

      .time-input:invalid {
        box-shadow: none;
        outline: none;
        border: 0;
        border-bottom: 2px solid red;
      }

      .time-input::-webkit-inner-spin-button,
      .time-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}};Tt.EVENT_UPDATE="update",Tt.EVENT_STEP_CHANGE="stepChange",t([pt()],Tt.prototype,"unit",void 0),Tt=kt=t([ht("time-unit")],Tt);const Pt=Et.AlignControls.CENTER,Ht=Et.Name.HEADER;var Nt;const Ut={entity:"input_datetime entity id",name:"Name",hour_step:"Hour step",minute_step:"Minute step",hour_mode:"Hour mode",link_values:"Link values",align_controls:"Align controls",embedded:"Embedded?",thin:"Thin layout?",icon:"Icon",seconds:"Seconds"},Mt=[{name:"entity",selector:{entity:{domain:"input_datetime"}}},{name:"name",selector:{text:{}}},{type:"grid",schema:[{name:"hour_step",type:"integer",required:!0,default:1,valueMin:1,valueMax:24},{name:"minute_step",type:"integer",required:!0,default:5,valueMin:1,valueMax:60},{name:"hour_mode",type:"select",options:[[12,"12"],[24,"24"]]},{name:"link_values",type:"boolean"}]},{type:"expandable",name:"layout",title:"Layout controls",schema:[{name:"hour_mode",type:"select",options:[["single","single"],["double","double"]]},{name:"align_controls",type:"select",options:[["left","left"],["center","center"],["right","right"]]},{name:"name",type:"select",options:[["header","header"],["inside","inside"]]},{name:"embedded",type:"boolean"},{name:"thin",type:"boolean"}]},{type:"expandable",name:"hide",title:"Hide controls",schema:[{type:"grid",name:"",schema:[{name:"name",type:"boolean"},{name:"icon",type:"boolean"},{name:"seconds",type:"boolean"}]}]},{type:"expandable",title:"Actions",schema:[{name:"tap_action",selector:{action:{}}},{name:"double_tap_action",selector:{action:{}}},{name:"hold_action",selector:{action:{}}}]}];let It=Nt=class extends ct{computeLabel({name:t}){return Ut[t]||t}valueChanged(t){const e=Object.assign(Object.assign({},this.config),t.detail.value);this.dispatch(e)}render(){return G`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${Mt}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
    `}setConfig(t){this.config=t}dispatch(t){const e=new CustomEvent(Nt.CONFIG_CHANGED_EVENT,{bubbles:!0,composed:!0,detail:{config:t}});this.dispatchEvent(e)}};It.CONFIG_CHANGED_EVENT="config-changed",t([pt({type:Object})],It.prototype,"hass",void 0),t([pt()],It.prototype,"config",void 0),It=Nt=t([ht("time-picker-card-editor")],It);class Ot{constructor(t,e,i){this._value=t,this._step=e,this._limit=i}get value(){return this._value}setStringValue(t){this.isValidString(t)&&this.setValue(parseInt(t))}stepUpdate(t,e=this._step){t===wt.UP?this.increment(e):this.decrement(e)}toString(){return this.value<10?`0${this.value}`:this.value.toString()}increment(t=this._step){this.setValue(this.value+t)}decrement(t=this._step){this.setValue(this.value-t)}setValue(t){isNaN(t)||((t>=this._limit||t<0)&&(t=(t+this._limit)%this._limit),this._value=t)}isValidString(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<this._limit}}class Lt extends Ot{constructor(t,e=1,i){super(t,e,Lt.VALUE_LIMIT),this.hourMode=i}get minValue(){return 12===this.hourMode?1:0}get maxValue(){return 12===this.hourMode?12:Lt.VALUE_LIMIT-1}togglePeriod(){this.setValue(this.value+12)}toString(){let t;return 12===this.hourMode?(t=(this.value+12)%12,t=0===t?12:t):t=this.value,t<10?`0${t}`:t.toString()}}Lt.VALUE_LIMIT=24;class Vt extends Ot{constructor(t,e=5){super(t,e,Vt.VALUE_LIMIT),this.minValue=0,this.maxValue=Vt.VALUE_LIMIT-1}willOverflow(t){const e=t===wt.UP?this.value+this._step:this.value-this._step;return e>=this._limit||e<0}}Vt.VALUE_LIMIT=60;class Rt extends Ot{constructor(t,e=5){super(t,e,Rt.VALUE_LIMIT),this.minValue=0,this.maxValue=Rt.VALUE_LIMIT-1}willOverflow(t){const e=t===wt.UP?this.value+this._step:this.value-this._step;return e>=this._limit||e<0}}Rt.VALUE_LIMIT=60;class Dt{constructor(t,e,i,n=!1){this.hour=t,this.minute=e,this.second=i,this._linkValues=n}hourStep(t){this.hour.stepUpdate(t)}minuteStep(t){this._linkValues&&this.minute.willOverflow(t)&&this.hour.stepUpdate(t,1),this.minute.stepUpdate(t)}secondStep(t){this._linkValues&&this.second.willOverflow(t)&&this.minute.stepUpdate(t,1),this.second.stepUpdate(t)}get value(){return`${this.hour.value}:${this.minute.value}:${this.second.value}`}}class jt{static error(t,e){const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:e}),G`${i}`}}console.info("%c  TIME-PICKER-CARD  \n%c  Version 1.4.0    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"time-picker-card",name:"Time Picker Card",description:"A Time Picker card for setting the time value of Input Datetime entities."});let zt=class extends ct{get entity(){return this.hass.states[this.config.entity]}get isEmbedded(){var t;return!0===(null===(t=this.config.layout)||void 0===t?void 0:t.embedded)}get hasNameInHeader(){var t,e,i;return Boolean(this.name)&&!1===Boolean(null===(t=this.config.hide)||void 0===t?void 0:t.name)&&(null===(e=this.config.layout)||void 0===e?void 0:e.name)!==Et.Name.INSIDE&&!1===Boolean(null===(i=this.config.layout)||void 0===i?void 0:i.embedded)}get hasNameInside(){var t,e;return Boolean(this.name)&&((null===(t=this.config.layout)||void 0===t?void 0:t.name)===Et.Name.INSIDE||Boolean(null===(e=this.config.layout)||void 0===e?void 0:e.embedded))}get name(){var t;return this.config.name||(null===(t=this.entity)||void 0===t?void 0:t.attributes.friendly_name)}get shouldShowPeriod(){return 12===this.config.hour_mode}get layoutAlign(){var t,e;return null!==(e=null===(t=this.config.layout)||void 0===t?void 0:t.align_controls)&&void 0!==e?e:Pt}get haCardClass(){var t;return{embedded:this.isEmbedded,thin:!0===(null===(t=this.config.layout)||void 0===t?void 0:t.thin)}}get rowClass(){return{"time-picker-row":!0,"with-header-name":this.hasNameInHeader,embedded:this.isEmbedded}}get contentClass(){return{"time-picker-content":!0,[`layout-${this.layoutAlign}`]:!0}}handleAction(t){!function(t,e,i,n){var s;"double_tap"===n&&i.double_tap_action?s=i.double_tap_action:"hold"===n&&i.hold_action?s=i.hold_action:"tap"===n&&i.tap_action&&(s=i.tap_action),l(t,e,i,s)}(this,this.hass,this.config,t.detail.action)}renderHeaderName(t){return G`<div
      class="time-picker-header"
      @action=${this.handleAction}
      .actionHandler="${At({hasHold:c(this.config.hold_action),hasDoubleClick:c(this.config.double_tap_action)})}"
    >
      ${t}
    </div>`}renderNestedName(t,e,i){const n=G`<state-badge
      class="entity-icon"
      .stateObj=${e}
      @action=${this.handleAction}
      .actionHandler="${At({hasHold:c(this.config.hold_action),hasDoubleClick:c(this.config.double_tap_action)})}"
    ></state-badge>`,s=G`<div
      class="entity-name-inside"
      @action=${this.handleAction}
      .actionHandler="${At({hasHold:c(this.config.hold_action),hasDoubleClick:c(this.config.double_tap_action)})}"
    >
      ${t}
    </div>`,o=[{element:n,visible:!(null==i?void 0:i.icon)},{element:s,visible:!(null==i?void 0:i.name)}].filter((({visible:t})=>t)).map((({element:t})=>t));return G`${o}`}render(){var t,e,i;if(!this.entity)return jt.error("Entity not found",this.config);if("input_datetime"!==n(this.entity.entity_id))return jt.error("You must set an input_datetime entity",this.config);if(!this.entity.attributes.has_time)return jt.error("You must set an input_datetime entity that sets has_time: true",this.config);const{hour:s,minute:o,second:r}=this.entity.attributes,a=new Lt(s,this.config.hour_step,this.config.hour_mode),l=new Vt(o,this.config.minute_step),c=new Rt(r,this.config.second_step);return this.time=new Dt(a,l,c,this.config.link_values),this.period=a.value>=12?Ct.PM:Ct.AM,G`
      <ha-card class=${_t(this.haCardClass)}>
        ${this.hasNameInHeader?this.renderHeaderName(this.name):""}
        <div class=${_t(this.rowClass)}>
          ${this.hasNameInside?this.renderNestedName(this.name,this.entity,this.config.hide):""}

          <div class=${_t(this.contentClass)}>
            <time-unit
              .unit=${this.time.hour}
              @stepChange=${this.onHourStepChange}
              @update=${this.debouncedCallHassService}
            ></time-unit>
            <div class="time-separator">:</div>
            <time-unit
              .unit=${this.time.minute}
              @stepChange=${this.onMinuteStepChange}
              @update=${this.debouncedCallHassService}
            ></time-unit>
            ${!1===(null===(t=this.config.hide)||void 0===t?void 0:t.seconds)?G`<div class="time-separator">:</div>
                  <time-unit
                    .unit=${this.time.second}
                    @stepChange=${this.onSecondStepChange}
                    @update=${this.debouncedCallHassService}
                  ></time-unit>`:""}
            ${this.shouldShowPeriod?G`<time-period
                  .period=${this.period}
                  .mode=${null!==(i=null===(e=this.config.layout)||void 0===e?void 0:e.hour_mode)&&void 0!==i?i:"double"}
                  @toggle=${this.onPeriodToggle}
                ></time-period>`:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("You must set an entity");if(t.hour_mode&&12!==t.hour_mode&&24!==t.hour_mode)throw new Error("Invalid hour_mode: select either 12 or 24");this.config=t}getCardSize(){return 3}onPeriodToggle(){this.time.hour.togglePeriod(),this.debouncedCallHassService()}onHourStepChange(t){this.time.hourStep(t.detail.direction),this.debouncedCallHassService()}onMinuteStepChange(t){this.time.minuteStep(t.detail.direction),this.debouncedCallHassService()}onSecondStepChange(t){this.time.secondStep(t.detail.direction),this.debouncedCallHassService()}debouncedCallHassService(){this.config.delay?(clearTimeout(this.bounce),this.bounce=setTimeout((()=>this.callHassService()),this.config.delay,this)):this.callHassService()}callHassService(){if(!this.hass)throw new Error("Unable to update datetime");return this.hass.callService("input_datetime","set_datetime",{entity_id:this.entity.entity_id,time:this.time.value})}static get styles(){return v`
      :host {
        --tpc-elements-background-color: var(
          --time-picker-elements-background-color,
          var(--primary-color)
        );

        --tpc-control-padding: var(--time-picker-control-padding, 8px);

        --tpc-icon-color: var(--time-picker-icon-color, var(--primary-text-color));
        --tpc-text-color: var(--time-picker-text-color, #fff);
        --tpc-accent-color: var(--time-picker-accent-color, var(--primary-color));
        --tpc-off-color: var(--time-picker-off-color, var(--disabled-text-color));

        --tpc-border-radius: var(--time-picker-border-radius, var(--ha-card-border-radius, 4px));
      }

      ha-card {
        overflow: auto;
      }

      ha-card.embedded {
        box-shadow: none;
        border: none;
        background: transparent;
      }

      .time-picker-header {
        padding: 16px;
        color: var(--tpc-text-color);
        background-color: var(--tpc-elements-background-color);
        border-top-left-radius: var(--tpc-border-radius);
        border-top-right-radius: var(--tpc-border-radius);
        font-size: 1em;
        text-align: center;
      }

      .thin > .time-picker-header {
        padding: 4px;
      }

      .time-picker-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
      }

      .thin .time-picker-row {
        padding: 0 !important ;
      }

      .time-picker-row.embedded {
        padding: 0;
      }

      .time-picker-row.with-header-name {
        padding: 8px 16px 16px;
      }

      .time-picker-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1 0 auto;
      }

      .time-picker-content.layout-left {
        justify-content: flex-start;
      }

      .time-picker-content.layout-center {
        justify-content: center;
      }

      .time-picker-content.layout-right {
        justify-content: flex-end;
      }

      .entity-icon {
        cursor: pointer;
      }

      .entity-name-inside {
        margin-left: 16px;
        cursor: pointer;
      }
    `}static getStubConfig(t,e){return{entity:e.find((t=>"input_datetime"===n(t)))||"",hour_mode:24,hour_step:1,minute_step:5,layout:{hour_mode:"double",align_controls:Pt,name:Ht},hide:{seconds:!0}}}static getConfigElement(){return document.createElement("time-picker-card-editor")}};t([pt({type:Object})],zt.prototype,"hass",void 0),t([pt()],zt.prototype,"config",void 0),t([pt()],zt.prototype,"time",void 0),t([pt()],zt.prototype,"period",void 0),zt=t([ht("time-picker-card")],zt);export{zt as TimePickerCard};
