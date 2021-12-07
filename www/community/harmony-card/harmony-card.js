/*! *****************************************************************************
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
function t(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${o}`);class s{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],s=document.createTreeWalker(e.content,133,null,!1);let c=0,u=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=s.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=p[h],i=d.exec(e)[2],n=i.toLowerCase()+"$lit$",o=t.getAttribute(n);t.removeAttribute(n);const s=o.split(r);this.parts.push({type:"attribute",index:u,name:i,strings:s}),h+=s.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,o=e.split(r),s=o.length-1;for(let e=0;e<s;e++){let i,r=o[e];if(""===r)i=l();else{const t=d.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===o[s]?(n.insertBefore(l(),t),i.push(t)):t.data=o[s],h+=s}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&u!==c||(u++,e.insertBefore(l(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:i},parts:n}=t,o=document.createTreeWalker(i,133,null,!1);let r=p(n),s=n[r],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,r=p(n,r),s=n[r]}l.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(c(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>(...e)=>{const i=t(...e);return m.set(i,!0),i},f=t=>"function"==typeof t&&m.has(t),v={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let r,s=0,a=0,l=o.nextNode();for(;s<n.length;)if(r=n[s],c(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(i.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=i.pop(),l=o.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${n} `;class S{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const a=d.exec(t);e+=null===a?t+(i?b:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),$=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!$(t))return t}let n="";for(let o=0;o<e;o++){n+=t[o];const e=i[o];if(void 0!==e){const t=e.value;if(x(t)||!$(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}const t=this.__pendingValue;t!==v&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):$(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const o of t)i=e[n],void 0===i&&(i=new k(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(o),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=v}}class M extends P{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends C{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class N{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=O(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function V(t){let e=B.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},B.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(n);return i=e.keyString.get(o),void 0===i&&(i=new s(t,t.getTemplateElement()),e.keyString.set(o,i)),e.stringsArray.set(t.strings,i),i}const B=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const o=e[0];if("."===o){return new M(t,e.slice(1),i).parts}if("@"===o)return[new N(t,e.slice(1),n.eventContext)];if("?"===o)return[new E(t,e.slice(1),i)];return new P(t,e,i).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const I=(t,...e)=>new S(t,e,"html",j)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,R=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const U=t=>e=>{const i=R(e.type,t);let o=B.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},B.set(i,o));let r=o.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(n);if(r=o.keyString.get(a),void 0===r){const i=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(i,t),r=new s(e,i),o.keyString.set(a,r)}return o.stringsArray.set(e.strings,r),r},Y=["html","svg"],q=new Set,L=(t,e,i)=>{q.add(t);const n=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const s=document.createElement("style");for(let t=0;t<r;t++){const e=o[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{Y.forEach(e=>{const i=B.get(R(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),u(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:o}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let s=p(o),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===i&&(a=h(e),i.parentNode.insertBefore(e,i));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=p(o,s);return}s=p(o,s)}}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),u(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdateInternal(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=F){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||z,o="function"==typeof n?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||z.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const n=this.constructor,o=n._attributeNameForProperty(t,i);if(void 0!==o){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const o=this.constructor;i=i||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function X(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):K(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new tt(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const it={};class nt extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!G){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==it&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return it}}nt.finalized=!0,nt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,r=D.has(e),s=H&&11===e.nodeType&&!!e.host,a=s&&!q.has(o),c=a?document.createDocumentFragment():e;if(((t,e,n)=>{let o=D.get(e);void 0===o&&(i(e,e.firstChild),D.set(e,o=new k(Object.assign({templateFactory:V},n))),o.appendInto(e)),o.setValue(t),o.commit()})(t,c,Object.assign({templateFactory:U(o)},n)),a){const t=D.get(c);D.delete(c);const n=t.value instanceof y?t.value.template:void 0;L(o,c,n),i(e,e.firstChild),e.appendChild(c),D.set(e,t)}!r&&s&&window.ShadyCSS.styleElement(e.host)};var ot=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,rt="[^\\s]+",st=/\[([^]*?)\]/gm;function at(t,e){for(var i=[],n=0,o=t.length;n<o;n++)i.push(t[n].substr(0,e));return i}var ct=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function lt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,o=e;n<o.length;n++){var r=o[n];for(var s in r)t[s]=r[s]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=at(ut,3),pt={dayNamesShort:at(dt,3),dayNames:dt,monthNamesShort:ht,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=lt({},pt),gt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return gt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return gt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return gt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return gt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return gt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return gt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return gt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return gt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return gt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return gt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return gt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(Math.floor(Math.abs(e)/60),2)+":"+gt(Math.abs(e)%60,2)}},vt=function(t){return+t-1},_t=[null,"[1-9]\\d?"],yt=[null,rt],wt=["isPm",rt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],St=(ct("monthNamesShort"),ct("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xt=function(t,e,i){if(void 0===e&&(e=St.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];e=(e=St[e]||e).replace(st,(function(t,e){return n.push(e),"@@@"}));var o=lt(lt({},mt),i);return(e=e.replace(ot,(function(e){return ft[e](t,o)}))).replace(/@@@/g,(function(){return n.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var $t=["closed","locked","off"],Pt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},Ct=function(t){Pt(window,"haptic",t)},kt=function(t,e,i,n){var o;if("double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Ct("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&Pt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Pt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(r,n,{entity_id:e})})(t,e,$t.includes(t.states[e].state))}(e,i.entity),Ct("success"));break;case"call-service":if(!o.service)return void Ct("failure");var r=o.service.split(".",2);e.callService(r[0],r[1],o.service_data),Ct("success")}};function Et(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Mt=new WeakMap,Tt=g(t=>e=>{if(!(e instanceof C)||e instanceof T||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:n}=i.element;let o=Mt.get(e);void 0===o&&(n.cssText=i.strings.join(" "),Mt.set(e,o=new Set)),o.forEach(e=>{e in t||(o.delete(e),-1===e.indexOf("-")?n[e]=null:n.removeProperty(e))});for(const e in t)o.add(e),-1===e.indexOf("-")?n[e]=t[e]:n.setProperty(e,t[e])});customElements.define("fa-icon",class extends nt{static get properties(){return{color:String,iClass:{attribute:"class"},src:String,style:String,size:String,pathPrefix:{attribute:"path-prefix"}}}static get styles(){return et`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `}getSources(t){const e={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"},i=t=>t.replace("fa-","");let n=(t=>{let n=t.split(" ");return[e[n[0]],i(n[1])]})(t);return`${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${n[0]}.svg#${n[1]}`}constructor(){super(),this.iClass="",this.src="",this.style="",this.size="",this.color="",this.pathPrefix="node_modules"}firstUpdated(){this.src=this.getSources(this.iClass)}_parseStyles(){return`\n      ${this.size?`width: ${this.size};`:""}\n      ${this.size?`height: ${this.size};`:""}\n      ${this.color?`fill: ${this.color};`:""}\n      ${this.style}\n    `}render(){return I`
      <svg 
        .style="${this._parseStyles()}">
        <use 
          href="${this.src}">
        </use>
      </svg>
    `}});const At=et`
  :host {
    overflow: visible !important;
    display: block;
    --mmp-scale: var(--mini-media-player-scale, 1);
    --mmp-unit: calc(var(--mmp-scale) * 40px);
  }

  :host ::slotted(.card-content) {
    padding: 16px;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon {
    width: calc(var(--mmp-unit) * .6);
    height: calc(var(--mmp-unit) * .6);
  }
  ha-icon-button {
    width: var(--mmp-unit);
    height: var(--mmp-unit);
    color: var(--mmp-text-color, var(--primary-text-color));
    transition: color .25s;
  }
  ha-icon-button[color] {
    color: var(--mmp-accent-color, var(--accent-color)) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: .5;
  }
  ha-icon-button[outlined] {
    color: var(--accent-color) !important;
  }

  .play-pause {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .activities {
      display: flex;
      flex-wrap: wrap;
  }
  .activities-icons {
    justify-content: space-evenly;
  }
  .activities>mwc-button:not(:first-child) {
    flex-grow: 1;
  }

  .remote {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto auto;
      align-items: center;
      justify-content: center;
      text-align: center;
  }

  .xbox-buttons {
    display: grid;
    grid-template-columns: auto auto 10px auto auto auto auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .volume-controls {
      display: flex;
      justify-content: center;
  }

  .volume-controls>paper-slider {
    flex: 1;
  }
`,Nt={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Ot=class extends nt{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _volume_entity(){return this._config&&this._config.volume_entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}get _tap_action(){return this._config&&this._config.tap_action||{action:"more-info"}}get _hold_action(){return this._config&&this._config.hold_action||{action:"none"}}get _double_tap_action(){return this._config&&this._config.double_tap_action||{action:"none"}}render(){if(!this.hass)return I``;const t=Object.keys(this.hass.states).filter(t=>"remote"===t.substr(0,t.indexOf("."))),e=Object.keys(this.hass.states).filter(t=>"media_player"===t.substr(0,t.indexOf(".")));return I`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.required.icon}></ha-icon>
            <div class="title">${Nt.required.name}</div>
          </div>
          <div class="secondary">${Nt.required.secondary}</div>
        </div>
        ${Nt.required.show?I`
              <div class="values">
                <paper-dropdown-menu
                  label="Harmony Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>I`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <div class="values">
                <paper-dropdown-menu
                  label="Volume Entity"
                  @value-changed=${this._valueChanged}
                  .configValue=${"volume_entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._volume_entity)}>
                    ${e.map(t=>I`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.actions.icon}></ha-icon>
            <div class="title">${Nt.actions.name}</div>
          </div>
          <div class="secondary">${Nt.actions.secondary}</div>
        </div>
        ${Nt.actions.show?I`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.tap.secondary}</div>
                </div>
                ${Nt.actions.options.tap.show?I`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.hold.secondary}</div>
                </div>
                ${Nt.actions.options.hold.show?I`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.double_tap.secondary}</div>
                </div>
                ${Nt.actions.options.double_tap.show?I`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.appearance.icon}></ha-icon>
            <div class="title">${Nt.appearance.name}</div>
          </div>
          <div class="secondary">${Nt.appearance.secondary}</div>
        </div>
        ${Nt.appearance.show?I`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-switch
                  aria-label=${"Toggle warning "+(this._show_warning?"off":"on")}
                  .checked=${!1!==this._show_warning}
                  .configValue=${"show_warning"}
                  @change=${this._valueChanged}
                  >Show Warning?</ha-switch
                >
                <ha-switch
                  aria-label=${"Toggle error "+(this._show_error?"off":"on")}
                  .checked=${!1!==this._show_error}
                  .configValue=${"show_error"}
                  @change=${this._valueChanged}
                  >Show Error?</ha-switch
                >
              </div>
            `:""}
      </div>
    `}_toggleAction(t){this._toggleThing(t,Nt.actions.options)}_toggleOption(t){this._toggleThing(t,Nt)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Pt(this,"config-changed",{config:this._config}))}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};t([X()],Ot.prototype,"hass",void 0),t([X()],Ot.prototype,"_config",void 0),t([X()],Ot.prototype,"_toggle",void 0),Ot=t([Z("harmony-card-editor")],Ot);const Vt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Bt extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Vt?"100px":"50px",height:Vt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1});const i=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},n=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Pt(t,"action",{action:"hold"}):e.hasDoubleTap?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout(()=>{Pt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),Pt(t,"action",{action:"double_tap"})):Pt(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("keyup",t=>{if(13===t.keyCode)return n(t)});/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n))}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-harmony",Bt);const Dt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-harmony"))return t.querySelector("action-handler-harmony");const e=document.createElement("action-handler-harmony");return t.appendChild(e),e})();i&&i.bind(t,e)},jt=g((t={})=>e=>{Dt(e.committer.element,t)}),It={0:{command:"0",icon:"mdi:numeric-0-circle",hide:!1},1:{command:"1",icon:"mdi:numeric-1-circle",hide:!1},2:{command:"2",icon:"mdi:numeric-2-circle",hide:!1},3:{command:"3",icon:"mdi:numeric-3-circle",hide:!1},4:{command:"4",icon:"mdi:numeric-4-circle",hide:!1},5:{command:"5",icon:"mdi:numeric-5-circle",hide:!1},6:{command:"6",icon:"mdi:numeric-6-circle",hide:!1},7:{command:"7",icon:"mdi:numeric-7-circle",hide:!1},8:{command:"8",icon:"mdi:numeric-8-circle",hide:!1},9:{command:"9",icon:"mdi:numeric-9-circle",hide:!1},volume_down:{command:"VolumeDown",icon:"mdi:volume-medium",hide:!1},volume_up:{command:"VolumeUp",icon:"mdi:volume-high",hide:!1},volume_mute:{command:"Mute",icon:"mdi:volume-off",hide:!1},skip_back:{command:"SkipBack",icon:"mdi:skip-previous",hide:!1},play:{command:"Play",icon:"mdi:play",hide:!1},pause:{command:"Pause",icon:"mdi:pause",hide:!1},skip_forward:{command:"SkipForward",icon:"mdi:skip-next",hide:!1},dpad_up:{command:"DirectionUp",icon:"mdi:chevron-up-circle",hide:!1},dpad_down:{command:"DirectionDown",icon:"mdi:chevron-down-circle",hide:!1},dpad_left:{command:"DirectionLeft",icon:"mdi:chevron-left-circle",hide:!1},dpad_right:{command:"DirectionRight",icon:"mdi:chevron-right-circle",hide:!1},dpad_center:{command:"OK",icon:"mdi:checkbox-blank-circle",hide:!1},xbox:{command:"Xbox",icon:"mdi:microsoft-xbox",hide:!1},back:{command:"Back",icon:"mdi:undo-variant",hide:!1},a:{command:"A",icon:"mdi:alpha-a-circle",hide:!1,color:"#2d9f1c"},b:{command:"B",icon:"mdi:alpha-b-circle",hide:!1,color:"#e43308"},x:{command:"X",icon:"mdi:alpha-x-circle",hide:!1,color:"#003bbd"},y:{command:"Y",icon:"mdi:alpha-y-circle",hide:!1,color:"#f1c70f"}};var Rt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Ht={common:Rt},Ut={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Yt={common:Ut},qt={en:Object.freeze({__proto__:null,common:Rt,default:Ht}),nb:Object.freeze({__proto__:null,common:Ut,default:Yt})};function Lt(t,e="",i=""){const n=t.split(".")[0],o=t.split(".")[1],r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var s;try{s=qt[r][n][o]}catch(t){s=qt.en[n][o]}return void 0===s&&(s=qt.en[n][o]),""!==e&&""!==i&&(s=s.replace(e,i)),s}var zt=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===Ft}(t)}(t)};var Ft="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Wt(t,e){return!1!==e.clone&&e.isMergeableObject(t)?Gt((i=t,Array.isArray(i)?[]:{}),t,e):t;var i}function Jt(t,e,i){return t.concat(e).map((function(t){return Wt(t,i)}))}function Zt(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function Kt(t,e){try{return e in t}catch(t){return!1}}function Xt(t,e,i){var n={};return i.isMergeableObject(t)&&Zt(t).forEach((function(e){n[e]=Wt(t[e],i)})),Zt(e).forEach((function(o){(function(t,e){return Kt(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,o)||(Kt(t,o)&&i.isMergeableObject(e[o])?n[o]=function(t,e){if(!e.customMerge)return Gt;var i=e.customMerge(t);return"function"==typeof i?i:Gt}(o,i)(t[o],e[o],i):n[o]=Wt(e[o],i))})),n}function Gt(t,e,i){(i=i||{}).arrayMerge=i.arrayMerge||Jt,i.isMergeableObject=i.isMergeableObject||zt,i.cloneUnlessOtherwiseSpecified=Wt;var n=Array.isArray(e);return n===Array.isArray(t)?n?i.arrayMerge(t,e,i):Xt(t,e,i):Wt(e,i)}Gt.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,i){return Gt(t,i,e)}),{})};var Qt=Gt;console.info(`%c  HARMONY-CARD \n%c  ${Lt("common.version")} 0.14.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let te=class extends nt{static async getConfigElement(){return document.createElement("harmony-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t||t.show_error)throw new Error(Lt("common.invalid_configuration"));if(!t.entity||"remote"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the remote domain for a harmony hub.");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:""},t)}preventBubbling(t){t.stopPropagation(),t.cancelBubble=!0}deviceCommand(t,e,i){var n,o;this.preventBubbling(t),null!=e&&(null===(n=this.hass)||void 0===n||n.callService("remote","send_command",{entity_id:null===(o=this._config)||void 0===o?void 0:o.entity,command:i,device:e}))}harmonyCommand(t,e){var i,n,o,r;this.preventBubbling(t),null==e||"off"==e||"turn_off"==e?null===(i=this.hass)||void 0===i||i.callService("remote","turn_off",{entity_id:null===(n=this._config)||void 0===n?void 0:n.entity}):null===(o=this.hass)||void 0===o||o.callService("remote","turn_on",{entity_id:null===(r=this._config)||void 0===r?void 0:r.entity,activity:e})}volumeCommand(t,e,i,n){var o;this.preventBubbling(t);var r={entity_id:e};null===(o=this.hass)||void 0===o||o.callService("media_player",i,Object.assign(r,n||{}))}shouldUpdate(t){return!!t.has("config")||this.hasEntityChanged(this,t,"entity")}hasEntityChanged(t,e,i){if(t._config.entity){const n=e.get("hass");return n&&(n.states[t._config[i]],t.hass.states[t._config[i]]),!0}return!1}render(){if(!this._config||!this.hass)return I``;if(this._config.show_warning)return I`
        <ha-card>
          <div class="warning">${Lt("common.show_warning")}</div>
        </ha-card>
      `;var t=this.hass.states[this._config.entity],e=t.state,i=t.attributes.current_activity,n=this._config.activities.find(t=>t.name===i),o=null==n?void 0:n.device,r=this.computeButtonConfig(this._config,n);return I`
      <ha-card
        style=${this.computeStyles()}
        .header=${this._config.name}
        @action=${this._handleAction}
        .actionHandler=${jt({hasHold:Et(this._config.hold_action),hasDoubleClick:Et(this._config.double_tap_action)})}
        tabindex="0"
        aria-label=${"Harmony: "+this._config.entity}
      >
        <div class="card-content">
            ${this.renderActivityButtons(this._config,e,i)}

            ${this.renderVolumeControls(this.hass,this._config,r,n)}

            ${this.renderKeyPad(this._config,r,n,o)}

            <div class="play-pause">
                ${this.renderIconButton(r.skip_back,o)}
                ${this.renderIconButton(r.play,o)}
                ${this.renderIconButton(r.pause,o)}
                ${this.renderIconButton(r.skip_forward,o)}
            </div>

            <div class="remote">
                ${this.renderIconButton(r.dpad_left,o,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_right,o,{"grid-column":"3","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_up,o,{"grid-column":"2","grid-row":"1"})}
                ${this.renderIconButton(r.dpad_down,o,{"grid-column":"2","grid-row":"3"})}
                ${this.renderIconButton(r.dpad_center,o,{"grid-column":"2","grid-row":"2"})}        
            </div>        

            <div class="xbox-buttons">
                ${this.renderIconButton(r.xbox,o,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.back,o,{"grid-column":"2","grid-row":"2"})}
                ${this.renderIconButton(r.a,o,{"grid-column":"4","grid-row":"2"})}
                ${this.renderIconButton(r.b,o,{"grid-column":"5","grid-row":"2"})}
                ${this.renderIconButton(r.x,o,{"grid-column":"6","grid-row":"2"})}        
                ${this.renderIconButton(r.y,o,{"grid-column":"7","grid-row":"2"})}        
            </div>
        </div>
      </ha-card>
    `}renderActivityButtons(t,e,i){if(void 0!==t.hide_activities&&t.hide_activities)return I``;const n=t.show_activities_icons?"activities-icons":"";return I`
        <div class="activities ${n}">
            ${this.renderActivityButton("off"===e,"turn_off","off",t.show_activities_icons,"mdi:power")}
            ${t.activities.map(e=>I`
                ${this.renderActivityButton(i===e.name,e.name,e.name,t.show_activities_icons,e.icon)}
              `)}
        </div>
    `}renderActivityButton(t,e,i,n=!1,o){return I`
           ${n&&o?I`
              <ha-icon-button
                icon="${o}"
                ?outlined="${t}"
                @click="${t=>this.harmonyCommand(t,e)}"
                @touchstart="${t=>this.preventBubbling(t)}"
              ><ha-icon icon="${o}"></ha-icon>
              </ha-icon-button>
            `:I`
              <mwc-button
                ?outlined="${t}"
                label="${i}"
                @click="${t=>this.harmonyCommand(t,e)}"
                @touchstart="${t=>this.preventBubbling(t)}"
              ></mwc-button>        
            `}
        `}renderKeyPad(t,e,i,n){return(void 0===(null==i?void 0:i.hide_keyPad)||(null==i?void 0:i.hide_keyPad))&&(void 0===t.hide_keyPad||t.hide_keyPad)?I``:this.renderKeyPadButton(e,n)}renderKeyPadButton(t,e){return I`
        <div class="remote">
            ${this.renderIconButton(t[1],e,{"grid-column":"1","grid-row":"1"})}
            ${this.renderIconButton(t[2],e,{"grid-column":"2","grid-row":"1"})}
            ${this.renderIconButton(t[3],e,{"grid-column":"3","grid-row":"1"})}
            ${this.renderIconButton(t[4],e,{"grid-column":"1","grid-row":"2"})}
            ${this.renderIconButton(t[5],e,{"grid-column":"2","grid-row":"2"})}    
            ${this.renderIconButton(t[6],e,{"grid-column":"3","grid-row":"2"})}
            ${this.renderIconButton(t[7],e,{"grid-column":"1","grid-row":"3"})}    
            ${this.renderIconButton(t[8],e,{"grid-column":"2","grid-row":"3"})}
            ${this.renderIconButton(t[9],e,{"grid-column":"3","grid-row":"3"})}
            ${this.renderIconButton(t[0],e,{"grid-column":"2","grid-row":"4"})}
        </div> 
        `}renderIconButton(t,e,i){if(!0===t.hide)return I``;var n=Object.assign(i||{},{color:t.color});return I`
            <ha-icon-button 
                icon="${t.icon}" 
                style="${Tt(n)}"
                @click="${i=>this.deviceCommand(i,t.device||e,t.command||"")}" 
                @touchstart="${t=>this.preventBubbling(t)}"
            ><ha-icon icon="${t.icon}"></ha-icon>
            </ha-icon-button>
        `}renderVolumeControls(t,e,i,n){return(null==n?void 0:n.volume_entity)?this.renderMediaPlayerVolumeControls(t,null==n?void 0:n.volume_entity,i):(null==n?void 0:n.volume_device)?this.renderDeviceVolumeControls(null==n?void 0:n.volume_device,i):e.volume_entity?this.renderMediaPlayerVolumeControls(t,e.volume_entity,i):e.volume_device?this.renderDeviceVolumeControls(e.volume_device,i):I``}renderMediaPlayerVolumeControls(t,e,i){var n=t.states[e],o=n.attributes.volume_level,r=n.attributes.is_volume_muted,s=Object.assign({},{color:i.volume_down.color}),a=Object.assign({},{color:i.volume_up.color}),c=Object.assign({},{color:i.volume_mute.color});return I`
            <div class="volume-controls">
                <ha-icon-button style="${Tt(s)}" icon="${i.volume_down.icon}" @click="${t=>this.volumeCommand(t,e,"volume_down")}" @touchstart="${t=>this.preventBubbling(t)}"><ha-icon icon="${i.volume_down.icon}"></ha-icon></ha-icon-button>
                <ha-icon-button style="${Tt(a)}" icon="${i.volume_up.icon}" @click="${t=>this.volumeCommand(t,e,"volume_up")}" @touchstart="${t=>this.preventBubbling(t)}"><ha-icon icon="${i.volume_up.icon}"></ha-icon-button>
                <paper-slider           
                    @change=${t=>this.volumeCommand(t,e,"volume_set",{volume_level:t.target.value/100})}
                    @click=${t=>t.stopPropagation()}
                    @touchstart="${t=>this.preventBubbling(t)}"
                    ?disabled=${r}
                    min=0 max=100
                    value=${100*o}
                    dir=${"ltr"}
                    ignore-bar-touch pin>
                </paper-slider>
                
                <ha-icon-button style="${Tt(c)}" icon="${i.volume_mute.icon}" @click="${t=>this.volumeCommand(t,e,"volume_mute",{is_volume_muted:!0})}" @touchstart="${t=>this.preventBubbling(t)}"><ha-icon icon="${i.volume_mute.icon}"></ha-icon></ha-icon-button>
            </div>`}renderDeviceVolumeControls(t,e){return I`
            <div class="volume-controls">
                ${this.renderIconButton(e.volume_down,t)}
                ${this.renderIconButton(e.volume_up,t)}

                ${this.renderIconButton(e.volume_mute,t)}
            </div>`}_handleAction(t){this.hass&&this._config&&t.detail.action&&kt(this,this.hass,this._config,t.detail.action)}computeStyles(){var t,e=(null===(t=this._config)||void 0===t?void 0:t.scale)||1;return Tt({"--mmp-unit":40*e+"px","--mdc-icon-size":24*e+"px"})}computeButtonConfig(t,e){let i=Qt(It,t.buttons||{});return e&&(i=Qt(i,e.buttons||{})),i}static get styles(){return[et`
            .warning {
                display: block;
                color: black;
                background-color: #fce588;
                padding: 8px;
            }
            
            div {
                font-size:16px;
            }`,At]}};t([X()],te.prototype,"hass",void 0),t([X()],te.prototype,"_config",void 0),te=t([Z("harmony-card")],te);export{te as HarmonyCard};
