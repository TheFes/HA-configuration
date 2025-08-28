function e(e,a,o,i){var t,l=arguments.length,n=l<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,a,o,i);else for(var r=e.length-1;r>=0;r--)(t=e[r])&&(n=(l<3?t(n):l>3?t(a,o,n):t(a,o))||n);return l>3&&n&&Object.defineProperty(a,o,n),n}"function"==typeof SuppressedError&&SuppressedError;const a=globalThis,o=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),t=new WeakMap;let l=class{constructor(e,a,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(o&&void 0===e){const o=void 0!==a&&1===a.length;o&&(e=t.get(a)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&t.set(a,e))}return e}toString(){return this.cssText}};const n=(e,...a)=>{const o=1===e.length?e[0]:a.reduce((a,o,i)=>a+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new l(o,e,i)},r=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let a="";for(const o of e.cssRules)a+=o.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,i))(a)})(e):e,{is:s,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:_,getOwnPropertySymbols:b,getPrototypeOf:h}=Object,m=globalThis,u=m.trustedTypes,g=u?u.emptyScript:"",p=m.reactiveElementPolyfillSupport,w=(e,a)=>e,y={toAttribute(e,a){switch(a){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,a){let o=e;switch(a){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},f=(e,a)=>!s(e,a),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=v){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,a);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,a,o){const{get:i,set:t}=c(this.prototype,e)??{get(){return this[a]},set(e){this[a]=e}};return{get:i,set(a){const l=i?.call(this);t?.call(this,a),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??v}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,a=[..._(e),...b(e)];for(const o of a)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const a=litPropertyMetadata.get(e);if(void 0!==a)for(const[e,o]of a)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,a]of this.elementProperties){const o=this._$Eu(e,a);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)a.unshift(r(e))}else void 0!==e&&a.push(r(e));return a}static _$Eu(e,a){const o=a.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const o of a.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),t=a.litNonce;void 0!==t&&i.setAttribute("nonce",t),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,a,o){this._$AK(e,o)}_$ET(e,a){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const t=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(a,o.type);this._$Em=e,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._$Em=null}}_$AK(e,a){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),t="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i;const l=t.fromAttribute(a,e.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,a,o){if(void 0!==e){const i=this.constructor,t=this[e];if(o??=i.getPropertyOptions(e),!((o.hasChanged??f)(t,a)||o.useDefault&&o.reflect&&t===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,a,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,a,{useDefault:o,reflect:i,wrapped:t},l){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,l??a??this[e]),!0!==t||void 0!==l)||(this._$AL.has(e)||(this.hasUpdated||o||(a=void 0),this._$AL.set(e,a)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,a]of this._$Ep)this[e]=a;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[a,o]of e){const{wrapped:e}=o,i=this[a];!0!==e||this._$AL.has(a)||void 0===i||this.C(a,void 0,o,i)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(a)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[w("elementProperties")]=new Map,k[w("finalized")]=new Map,p?.({ReactiveElement:k}),(m.reactiveElementVersions??=[]).push("2.1.1");const z=globalThis,$=z.trustedTypes,x=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+M,j=`<${P}>`,C=document,S=()=>C.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,T="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,N=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,q=/"/g,L=/^(?:script|style|textarea|title)$/i,G=(e=>(a,...o)=>({_$litType$:e,strings:a,values:o}))(1),U=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),W=new WeakMap,K=C.createTreeWalker(C,129);function H(e,a){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(a):a}const Z=(e,a)=>{const o=e.length-1,i=[];let t,l=2===a?"<svg>":3===a?"<math>":"",n=B;for(let a=0;a<o;a++){const o=e[a];let r,s,d=-1,c=0;for(;c<o.length&&(n.lastIndex=c,s=n.exec(o),null!==s);)c=n.lastIndex,n===B?"!--"===s[1]?n=E:void 0!==s[1]?n=N:void 0!==s[2]?(L.test(s[2])&&(t=RegExp("</"+s[2],"g")),n=D):void 0!==s[3]&&(n=D):n===D?">"===s[0]?(n=t??B,d=-1):void 0===s[1]?d=-2:(d=n.lastIndex-s[2].length,r=s[1],n=void 0===s[3]?D:'"'===s[3]?q:V):n===q||n===V?n=D:n===E||n===N?n=B:(n=D,t=void 0);const _=n===D&&e[a+1].startsWith("/>")?" ":"";l+=n===B?o+j:d>=0?(i.push(r),o.slice(0,d)+A+o.slice(d)+M+_):o+M+(-2===d?a:_)}return[H(e,l+(e[o]||"<?>")+(2===a?"</svg>":3===a?"</math>":"")),i]};class F{constructor({strings:e,_$litType$:a},o){let i;this.parts=[];let t=0,l=0;const n=e.length-1,r=this.parts,[s,d]=Z(e,a);if(this.el=F.createElement(s,o),K.currentNode=this.el.content,2===a||3===a){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const a=d[l++],o=i.getAttribute(e).split(M),n=/([.?@])?(.*)/.exec(a);r.push({type:1,index:t,name:n[2],strings:o,ctor:"."===n[1]?ee:"?"===n[1]?ae:"@"===n[1]?oe:Q}),i.removeAttribute(e)}else e.startsWith(M)&&(r.push({type:6,index:t}),i.removeAttribute(e));if(L.test(i.tagName)){const e=i.textContent.split(M),a=e.length-1;if(a>0){i.textContent=$?$.emptyScript:"";for(let o=0;o<a;o++)i.append(e[o],S()),K.nextNode(),r.push({type:2,index:++t});i.append(e[a],S())}}}else if(8===i.nodeType)if(i.data===P)r.push({type:2,index:t});else{let e=-1;for(;-1!==(e=i.data.indexOf(M,e+1));)r.push({type:7,index:t}),e+=M.length-1}t++}}static createElement(e,a){const o=C.createElement("template");return o.innerHTML=e,o}}function X(e,a,o=e,i){if(a===U)return a;let t=void 0!==i?o._$Co?.[i]:o._$Cl;const l=I(a)?void 0:a._$litDirective$;return t?.constructor!==l&&(t?._$AO?.(!1),void 0===l?t=void 0:(t=new l(e),t._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=t:o._$Cl=t),void 0!==t&&(a=X(e,t._$AS(e,a.values),t,i)),a}class J{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:o}=this._$AD,i=(e?.creationScope??C).importNode(a,!0);K.currentNode=i;let t=K.nextNode(),l=0,n=0,r=o[0];for(;void 0!==r;){if(l===r.index){let a;2===r.type?a=new Y(t,t.nextSibling,this,e):1===r.type?a=new r.ctor(t,r.name,r.strings,this,e):6===r.type&&(a=new ie(t,this,e)),this._$AV.push(a),r=o[++n]}l!==r?.index&&(t=K.nextNode(),l++)}return K.currentNode=C,i}p(e){let a=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,a),a+=o.strings.length-2):o._$AI(e[a])),a++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,o,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return void 0!==a&&11===e?.nodeType&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=X(this,e,a),I(e)?e===R||null==e||""===e?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=F.createElement(H(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(a);else{const e=new J(i,this),o=e.u(this.options);e.p(a),this.T(o),this._$AH=e}}_$AC(e){let a=W.get(e.strings);return void 0===a&&W.set(e.strings,a=new F(e)),a}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let o,i=0;for(const t of e)i===a.length?a.push(o=new Y(this.O(S()),this.O(S()),this,this.options)):o=a[i],o._$AI(t),i++;i<a.length&&(this._$AR(o&&o._$AB.nextSibling,i),a.length=i)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,o,i,t){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=a,this._$AM=i,this.options=t,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=R}_$AI(e,a=this,o,i){const t=this.strings;let l=!1;if(void 0===t)e=X(this,e,a,0),l=!I(e)||e!==this._$AH&&e!==U,l&&(this._$AH=e);else{const i=e;let n,r;for(e=t[0],n=0;n<t.length-1;n++)r=X(this,i[o+n],a,n),r===U&&(r=this._$AH[n]),l||=!I(r)||r!==this._$AH[n],r===R?e=R:e!==R&&(e+=(r??"")+t[n+1]),this._$AH[n]=r}l&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let ee=class extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}};class ae extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class oe extends Q{constructor(e,a,o,i,t){super(e,a,o,i,t),this.type=5}_$AI(e,a=this){if((e=X(this,e,a,0)??R)===U)return;const o=this._$AH,i=e===R&&o!==R||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,t=e!==R&&(o===R||i);i&&this.element.removeEventListener(this.name,this,o),t&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,a,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const te=z.litHtmlPolyfillSupport;te?.(F,Y),(z.litHtmlVersions??=[]).push("3.3.1");const le=globalThis;let ne=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,a,o)=>{const i=o?.renderBefore??a;let t=i._$litPart$;if(void 0===t){const e=o?.renderBefore??null;i._$litPart$=t=new Y(a.insertBefore(S(),e),e,void 0,o??{})}return t._$AI(e),t})(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}};ne._$litElement$=!0,ne.finalized=!0,le.litElementHydrateSupport?.({LitElement:ne});const re=le.litElementPolyfillSupport;re?.({LitElement:ne}),(le.litElementVersions??=[]).push("4.2.1");const se=e=>(a,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,a)}):customElements.define(e,a)},de={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:f},ce=(e=de,a,o)=>{const{kind:i,metadata:t}=o;let l=globalThis.litPropertyMetadata.get(t);if(void 0===l&&globalThis.litPropertyMetadata.set(t,l=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),l.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const t=a.get.call(this);a.set.call(this,o),this.requestUpdate(i,t,e)},init(a){return void 0!==a&&this.C(i,void 0,e,a),a}}}if("setter"===i){const{name:i}=o;return function(o){const t=this[i];a.call(this,o),this.requestUpdate(i,t,e)}}throw Error("Unsupported decorator location: "+i)};function _e(e){return(a,o)=>"object"==typeof o?ce(e,a,o):((e,a,o)=>{const i=a.hasOwnProperty(o);return a.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(a,o):void 0})(e,a,o)}function be(e){return _e({...e,state:!0,attribute:!1})}const he=e=>e??R;var me,ue,ge=function(e,a){return pe(a).format(e)},pe=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(me||(me={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ue||(ue={}));var we=function(e){if(e.time_format===ue.language||e.time_format===ue.system){var a=e.time_format===ue.language?e.language:void 0,o=(new Date).toLocaleString(a);return o.includes("AM")||o.includes("PM")}return e.time_format===ue.am_pm},ye=function(e,a){return fe(a).format(e)},fe=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:we(e)})};function ve(){return(ve=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}var ke=function(e,a,o){var i=a?function(e){switch(e.number_format){case me.comma_decimal:return["en-US","en"];case me.decimal_comma:return["de","es","it"];case me.space_comma:return["fr","sv","cs"];case me.system:return;default:return e.language}}(a):void 0;if(Number.isNaN=Number.isNaN||function e(a){return"number"==typeof a&&e(a)},(null==a?void 0:a.number_format)!==me.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,ze(e,o)).format(Number(e))}catch(a){return console.error(a),new Intl.NumberFormat(void 0,ze(e,o)).format(Number(e))}return"string"==typeof e?e:function(e,a){return void 0===a&&(a=2),Math.round(e*Math.pow(10,a))/Math.pow(10,a)}(e,void 0).toString()+""},ze=function(e,a){var o=ve({maximumFractionDigits:2},a);if("string"!=typeof e)return o;var i=e.indexOf(".")>-1?e.split(".")[1].length:0;return o.minimumFractionDigits=i,o.maximumFractionDigits=i,o},$e=function(e,a,o,i){i=i||{},o=null==o?{}:o;var t=new Event(a,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return t.detail=o,e.dispatchEvent(t),t};function xe(...e){const a=["severity"],o=e=>e&&"object"==typeof e,i={};return e.filter(e=>o(e)).forEach(e=>{Object.keys(e).forEach(t=>{const l=i[t],n=e[t];Array.isArray(l)&&Array.isArray(n)&&a.includes(t)?i[t]=[...n]:Array.isArray(l)&&Array.isArray(n)&&!a.includes(t)?i[t]=l.concat(n):o(l)&&o(n)?i[t]=xe(Object.assign({},l),n):i[t]=n})}),i}function Ae(e,a){return Object.values(e).filter(e=>a||!e.impedance_required)}var Me={version:"Verze",name:"Karta Bodymiscale",description:"Karta bodymiscale ukazuje údaje ohledně váhy a tělesných proporcí",not_available:"Bodymiscale není dostupná",toggle_power:"Více podrobností jako například BMI kCal zobrazit / skrýt"},Pe={ok:"MĚŘENÍ: OK",unknown:"STAV: neznámý",problem:"Problém",none:"Žádný",weight_unavailable:"Váha není dostupná",impedance_unavailable:"Impedance není dostupná",weight_unavailable_and_impedance_unavailable:"Váha a impedance není dostupná",weight_low:"nízká váha",impedance_low:"nízká impedance",weight_low_and_impedance_low:"nízká Váha a impedance",impedance_low_and_weight_low:"nízká Impedance a váha",weight_high:"vysoká váha",impedance_high:"vysoká impedance",weight_high_and_impedance_high:"vysoká Váha a impedance",weight_high_and_impedance_low:"vysoká váha, nízká impedance",weight_low_and_impedance_high:"nízká váha, vysoká impedance"},je={"weight: ":"Váha: ","impedance: ":"Impedance: ","height: ":"Výška: ","age: ":"Věk: ","gender: ":"Pohlaví: "},Ce={male:"muž",female:"žena",unavailable:"nedostupná"},Se={bmi:"BMI",bmi_label:"BMI popis",visceral_fat:"Viscerální tuk",body_fat:"Tělesný tuk",protein:"Protein",water:"Voda",muscle_mass:"Svalová hmota",bone_mass:"Kostní hmota",weight:"Váha",ideal:"Ideální",basal_metabolism:"Základní metabolismus",body_type:"Tělesný typ",metabolic_age:"Metabolický věk"},Ie={skinny:"štíhlý",balanced_skinny:"štíhlý-vyvážený",skinny_muscular:"štíhlý-svalnatý",balanced:"vyvážený",balanced_muscular:"vyvážený-svalnatý",lack_exercise:"nedostatek cvičení",thick_set:"pevné",obese:"obézní",overweight:"nadváha",underweight:"podváha",normal_or_healthy_weight:"normální či zdravá váha",slight_overweight:"lehká nadváha",moderate_obesity:"menší obezita",severe_obesity:"vážná obezita",massive_obesity:"velká obezita",unavailable:"nedostupná"},Oe={" years":" let"},Te={missing_entity:"Prosím definujte entitu.",missing_entity_bodymiscale:"Prosím definujte entitu bodymiscale."},Be={entity:"Prosím definujte účet váhy (povinné) !",image:"Obrázek pozadí (volitelné)",icons_body:"Cesta k ikonám (např. /local/images/bodyscoreIcon)",model:"Máte senzor impedance?",model1:"Aktivujte tuto funkci pro přesné měření složení těla.",model_aria_label_on:"Aktivovat impedanci",model_aria_label_off:"Deaktivovat impedanci",unit:"Převést kilogramy na libry",unit_aria_label_on:"Zapnout konverzi",unit_aria_label_off:"Vypnout konverzi",show_name:"Zobrazovat jméno účtu jako titulek ?",show_name_aria_label_on:"Zapnout zobrazování jména",show_name_aria_label_off:"Vypnout zobrazování jména",show_states:"Zobrazit stav ?",show_states_aria_label_on:"Zapnout zobrazování stavu",show_states_aria_label_off:"Vypnout zobrazování stavu",show_attributes:"Show hlavní osobní data (vpravo nahoře) ?",show_attributes_aria_label_on:"Zapnout zobrazování atributů",show_attributes_aria_label_off:"Vypnout zobrazování atributů",show_always_details:"Vždy zobrazovat detaily",show_always_details_aria_label_on:"Zapnout výchozí zobrazení podrobností",show_always_details_aria_label_off:"Vypnout výchozí zobrazení podrobností",show_toolbar:"Zobrazit pokročilá nastavení ?",show_toolbar_aria_label_on:"Zapnout zobrazení pokročilých nastavení",show_toolbar_aria_label_off:"Vypnout zobrazení pokročilých nastavení",show_body:"Nabízet další detaily měření",show_body1:"(spodní polovina - zobrazí se po klepnutí na ikonu šipky dolů) ?",show_body_aria_label_on:"Zapnout zobrazování tělesného skóre",show_body_aria_label_off:"Vypnout zobrazování tělesného skóre",show_buttons:"Povolit změnu účtu ?",show_buttons_aria_label_on:"Zapnout zobrazování tlačítek",show_buttons_aria_label_off:"Vypnout zobrazování tlačítek",header_options:"1. Možnosti záhlaví karty",body_options:"2. Více možností karty",code_only_note:"POZOR: Další možnosti jsou dostupné pouze v editor kódu."},Ee={from:"Od",icon_position:"Pozice ikony",label_below:"Štítek dole",left:"Vlevo",minmax_position:"Pozice Min/Max",name_position:"Pozice názvu",off:"Vypnuto",on:"Zapnuto",right:"Vpravo",severity_generator_help:"Odkaz na nápovědu k závažnosti",showabovelabels:"Zobrazit štítky nahoře",showbelowlabels:"Zobrazit štítky dole",to:"Do",value_position:"Pozice hodnoty"},Ne={color:"Barva",disabled:"Zakázáno",red:"Červená",pink:"Růžová",purple:"Fialová","deep-purple":"Tmavě fialová",indigo:"Indigo",blue:"Modrá","light-blue":"Světle modrá",cyan:"Azurová",teal:"Tyrkysová",green:"Zelená","light-green":"Světle zelená",lime:"Limetková",yellow:"Žlutá",amber:"Jantarová",orange:"Oranžová",orangered:"Červenooranžová","deep-orange":"Tmavě oranžová",brown:"Hnědá","light-grey":"Světle šedá",grey:"Šedá","dark-grey":"Tmavě šedá","blue-grey":"Modrošedá",darkgreen:"Tmavě zelená",royalblue:"Královská modrá",black:"Černá",white:"Bílá"},De={balanced:"vyvážený",good:"Dobrý",increased:"Zvýšený",insufficient:"Nedostatečný",high:"Vysoký",low:"Nízký",normal:"Normální",obese:"obézní",objective_achieved:"Cíl dosažen",objective_not_achieved:"Cíl nedosažen",overweight:"nadváha",underweight:"podváha",very_high:"Velmi vysoký",very_low:"Velmi nízký"},Ve={common:Me,states:Pe,attributes:je,attributes_value:Ce,body:Se,body_value:Ie,unit:Oe,error:Te,editor:Be,editor_body:Ee,color_select:Ne,label_below:De},qe=Object.freeze({__proto__:null,attributes:je,attributes_value:Ce,body:Se,body_value:Ie,color_select:Ne,common:Me,default:Ve,editor:Be,editor_body:Ee,error:Te,label_below:De,states:Pe,unit:Oe}),Le={version:"Version",name:"Bodymiscale Karte",description:"Die bodymiscale Karte zeigt Ihren gewichtsmäßigen Körperstatus an.",not_available:"Bodymiscale ist momenatan nicht verfügbar",toggle_power:"Weitere Details wie BMI kCal anzeigen / ausblenden"},Ge={ok:"MESSUNG: OK",unknown:"STATUS: unbekannt",problem:"Problem",none:"keine",weight_unavailable:"Gewichtsmessung nicht verfügbar",impedance_unavailable:"Bioelektrische Impedanzmessung (Körperzusammensetzung) nicht verfügbar",weight_unavailable_and_impedance_unavailable:"Gewichts- und bioelektrische Impedanzmessung (Körperzusammensetzung) nicht verfügbar."},Ue={"weight: ":"Gewicht: ","impedance: ":"Zusammensetzung: ","height: ":"Körpergröße: ","age: ":"Alter: ","gender: ":"Geschlecht: "},Re={male:"männl.",female:"weibl.",unavailable:"Nicht verfügbar"},We={bmi:"BMI",bmi_label:"BMI Klassifikation",visceral_fat:"Bauchfett",body_fat:"Körperfett",protein:"Protein",water:"Wasser",muscle_mass:"Muskelmasse",bone_mass:"Knochenmasse",weight:"Gewicht",ideal:"Idealgewicht",basal_metabolism:"Grundumsatz",body_type:"Körperbau",metabolic_age:"stoffwechselbedingtes Körperalter"},Ke={skinny:"schlank",balanced_skinny:"ausgeglichen schlank",skinny_muscular:"muskulös schlank",balanced:"ausgewogen",balanced_muscular:"ausgewogen muskulös",lack_exercise:"Bewegungsmangel",thick_set:"stämmig",obese:"fettleibig",overweight:"Übergewicht",underweight:"Untergewicht",normal_or_healthy_weight:"Normal - gesundes Gewicht",slight_overweight:"leichtes Übergewicht",moderate_obesity:"moderate Fettleibigkeit",severe_obesity:"schwere Fettleibigkeit",massive_obesity:"massive Fettleibigkeit",unavailable:"Nicht verfügbar"},He={" years":" Jahre"},Ze={missing_entity:"Bitte definieren Sie eine Entität in der Konfiguration.",missing_entity_bodymiscale:'Bitte definieren Sie "bodymiscale" als Entität in der Konfiguration.'},Fe={entity:"Bitte ein Konto auf der Waage wählen (erforderlich)!",image:"Hintergrundbild (optional)",icons_body:"Pfad zu den Icons (z.B. /local/images/bodyscoreIcon)",model:"Haben Sie einen Impedanzsensor?",model1:"Aktivieren Sie diese Funktion für genaue Körperzusammensetzungsmessungen.",model_aria_label_on:"Impedanz aktivieren",model_aria_label_off:"Impedanz deaktivieren",unit:"kg in lbs umrechnen",unit_aria_label_on:"Konvertierung einschalten",unit_aria_label_off:"Umwandlung deaktivieren",show_name:"Namen des Konto als Titel anzeigen?",show_name_aria_label_on:"Namensanzeige einschalten",show_name_aria_label_off:"Namesanzeige ausschalten",show_states:"Status anzeigen (Symbole links oben)?",show_states_aria_label_on:"Statusanzeige einschalten",show_states_aria_label_off:"Statusanzeige ausschalten",show_attributes:"Persönliche Stammdaten anzeigen (rechts oben)?",show_attributes_aria_label_on:"Basis Daten einblenden (rechts oben) einschalten",show_attributes_aria_label_off:"Basis Daten einblenden (rechts oben) ausschalten",show_always_details:"Details immer anzeigen",show_always_details_aria_label_on:"Schalten Sie die standardmäßige Detailansicht ein",show_always_details_aria_label_off:"Schaltet die standardmäßige Detailansicht aus",show_toolbar:"Fortgeschrittene Optionen anzeigen ?",show_toolbar_aria_label_on:"Symbolleiste anzeigen einschalten",show_toolbar_aria_label_off:"Symbolleiste anzeigen ausschalten",show_body:"Weitere Messergebnisse anbieten",show_body1:"(untere Hälfte - per Chevron-Symbol einblenden)?",show_body_aria_label_on:"Körperwertanzeige einschalten",show_body_aria_label_off:"Körperwertanzeige ausschalten",show_buttons:"Kontowechsel erlauben?",show_buttons_aria_label_on:"Schaltfläche anzeigen einschalten",show_buttons_aria_label_off:"Schaltfläche anzeigen ausschalten",header_options:"1. Kartenkopf Optionen",body_options:"2. mehr Kartenoptionen",code_only_note:"ACHTUNG: Weitere Optionen sind nur im Code Editor verfügbar."},Xe={from:"Von",icon_position:"Symbolposition",label_below:"Beschriftung darunter",left:"Links",minmax_position:"Min/Max Position",name_position:"Name Position",off:"Aus",on:"Ein",right:"Rechts",severity_generator_help:"Link zur Schweregrad-Hilfe",showabovelabels:"Labels oben anzeigen",showbelowlabels:"Labels unten anzeigen",target:"Ziel",to:"Zu",value_position:"Wert Position"},Je={color:"Farbe",disabled:"Deaktiviert",red:"Rot",pink:"Rosa",purple:"Lila","deep-purple":"Dunkellila",indigo:"Indigo",blue:"Blau","light-blue":"Hellblau",cyan:"Cyan",teal:"Türkis",green:"Grün","light-green":"Hellgrün",lime:"Limette",yellow:"Gelb",amber:"Bernstein",orange:"Orange",orangered:"Rotorange","deep-orange":"Dunkelorange",brown:"Braun","light-grey":"Hellgrau",grey:"Grau","dark-grey":"Dunkelgrau","blue-grey":"Blaugrau",darkgreen:"Dunkelgrün",royalblue:"Königsblau",black:"Schwarz",white:"Weiß"},Ye={balanced:"ausgewogen",good:"Gut",increased:"Erhöht",insufficient:"Unzureichend",high:"Hoch",low:"Niedrig",normal:"Normal",obese:"fettleibig",objective_achieved:"Ziel erreicht",objective_not_achieved:"Ziel nicht erreicht",overweight:"Übergewicht",underweight:"Untergewicht",very_high:"Sehr hoch",very_low:"Sehr niedrig"},Qe={common:Le,states:Ge,attributes:Ue,attributes_value:Re,body:We,body_value:Ke,unit:He,error:Ze,editor:Fe,editor_body:Xe,color_select:Je,label_below:Ye},ea=Object.freeze({__proto__:null,attributes:Ue,attributes_value:Re,body:We,body_value:Ke,color_select:Je,common:Le,default:Qe,editor:Fe,editor_body:Xe,error:Ze,label_below:Ye,states:Ge,unit:He}),aa={version:"Version",name:"Bodymiscale Card",description:"The bodymiscale card shows you your weight wise / related body status.",not_available:"Bodymiscale is not available",toggle_power:"More details like BMI kCal show / hide"},oa={ok:"MEASUREMENT: OK",unknown:"STATE: unknown",problem:"Problem",none:"None",weight_unavailable:"Weight unavailable",impedance_unavailable:"Impedance unavailable",weight_unavailable_and_impedance_unavailable:"Weight and impedance unavailable",weight_low:"Weight low",impedance_low:"Impedance low",weight_low_and_impedance_low:"Weight and impedance low",impedance_low_and_weight_low:"Impedance and weight low",weight_high:"Weight high",impedance_high:"Impedance high",weight_high_and_impedance_high:"Weight and impedance high",weight_high_and_impedance_low:"Weight high, impedance low",weight_low_and_impedance_high:"Weight low, impedance high"},ia={"weight: ":"Weight: ","impedance: ":"Impedance: ","height: ":"Height: ","age: ":"Age: ","gender: ":"Gender: "},ta={male:"male",female:"female",unavailable:"unavailable"},la={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Visceral fat",body_fat:"Body fat",protein:"Protein",water:"Water",muscle_mass:"Muscle mass",bone_mass:"Bone mass",weight:"Weight",ideal:"Ideal",basal_metabolism:"Basal metabolism",body_type:"Body type",metabolic_age:"Metabolic age"},na={skinny:"Skinny",balanced_skinny:"Balanced-skinny",skinny_muscular:"Skinny-muscular",balanced:"Balanced",balanced_muscular:"Balanced-muscular",lack_exercise:"Lack-exercise",thick_set:"Thick-set",obese:"Obese",overweight:"Overweight",underweight:"Underweight",normal_or_healthy_weight:"Normal or Healthy Weight",slight_overweight:"Slight overweight",moderate_obesity:"Moderate obesity",severe_obesity:"Severe obesity",massive_obesity:"Massive obesity",unavailable:"unavailable"},ra={" years":" years"},sa={invalid_config:"Invalid configuration",missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},da={configuration:"Configuration",customization:"Customization",entity:"Please select an account on the scale (required)!",image:"Background image (optional)",icons_body:"Icons path (e.g., /local/images/bodyscoreIcon)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",theme:"Configure the theme you use.",theme_aria_label_on:"Toggle theme light on",theme_aria_label_off:"Toggle theme dark off",show_name:"Show the name of the account as title?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right)?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those)?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},ca={from:"From",icon_position:"Icon Position",label_below:"Label below",left:"Left",minmax_position:"Min/Max Position",name_position:"Name Position",off:"Off",on:"On",right:"Right",severity_generator_help:"Link to Severity Help",showabovelabels:"Show labels above",showbelowlabels:"Show labels below",to:"To",value_position:"Value Position"},_a={color:"Color",disabled:"Disabled",red:"Red",pink:"Pink",purple:"Purple","deep-purple":"Deep purple",indigo:"Indigo",blue:"Blue","light-blue":"Light blue",cyan:"Cyan",teal:"Teal",green:"Green","light-green":"Light green",lime:"Lime",yellow:"Yellow",amber:"Amber",orange:"Orange",orangered:"Red orange","deep-orange":"Deep orange",brown:"Brown","light-grey":"Light grey",grey:"Grey","dark-grey":"Dark grey","blue-grey":"Blue grey",darkgreen:"Dark green",royalblue:"Royal blue",black:"Black",white:"White"},ba={balanced:"Balanced",good:"Good",increased:"Increased",insufficient:"Insufficient",high:"High",low:"Low",normal:"Normal",obese:"Obese",objective_achieved:"Objective achieved",objective_not_achieved:"Objective not achieved",overweight:"Overweight",underweight:"Underweight",very_high:"Very high",very_low:"Very low"},ha={common:aa,states:oa,attributes:ia,attributes_value:ta,body:la,body_value:na,unit:ra,error:sa,editor:da,editor_body:ca,color_select:_a,label_below:ba},ma=Object.freeze({__proto__:null,attributes:ia,attributes_value:ta,body:la,body_value:na,color_select:_a,common:aa,default:ha,editor:da,editor_body:ca,error:sa,label_below:ba,states:oa,unit:ra}),ua={version:"Versión",name:"Tarjeta Bodymiscale",description:"La tarjeta bodymiscale muestra el estado de tu cuerpo en relación a tu peso.",not_available:"Bodymiscale no está disponible",toggle_power:"Mostrar / ocultar más detalles como IMC,kCal"},ga={ok:"MEDICIÓN: OK",unknown:"ESTADO: desconocido",problem:"Problema",none:"Ninguno",weight_unavailable:"Peso no disponible",impedance_unavailable:"Impedancia no disponible",weight_unavailable_and_impedance_unavailable:"Peso e impedancia no disponibles",weight_low:"Peso bajo",impedance_low:"Impedancia baja",weight_low_and_impedance_low:"Peso e impedancia bajos",impedance_low_and_weight_low:"Impedancia y peso bajos",weight_high:"Peso alto",impedance_high:"Impedancia alta",weight_high_and_impedance_high:"Peso e impedancia altos",weight_high_and_impedance_low:"Peso alto, impedancia baja",weight_low_and_impedance_high:"Peso bajo, impedancia alta"},pa={"weight: ":"Peso: ","impedance: ":"Impedancia: ","height: ":"Altura: ","age: ":"Edad: ","gender: ":"Sexo: "},wa={male:"masculino",female:"femenino",unavailable:"no disponible"},ya={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Grasa visceral",body_fat:"Grasa corporal",protein:"Proteína",water:"Agua",muscle_mass:"Masa muscular",bone_mass:"Masa ósea",weight:"Peso",ideal:"Ideal",basal_metabolism:"Metabolismo basal",body_type:"Tipo de cuerpo",metabolic_age:"Edad metabólica"},fa={skinny:"Flaco",balanced_skinny:"Flaco equilibrado",skinny_muscular:"Flaco musculoso",balanced:"Equilibrado",balanced_muscular:"Musculuso equilibrado",lack_exercise:"Falto de ejercicio",thick_set:"Rechoncho",obese:"Obeso",overweight:"Sobrepeso",underweight:"Por debajo del peso normal",normal_or_healthy_weight:"Normal",slight_overweight:"Ligero sobrepeso",moderate_obesity:"Obesidad moderada",severe_obesity:"Obesidad severa",massive_obesity:"Obesidad masiva",unavailable:"no disponible"},va={" years":" años"},ka={missing_entity:"Por favor, defina una entidad.",missing_entity_bodymiscale:"Por favor, defina una entidad bodymiscale."},za={entity:"Por favor, escoja una cuenta de la bácula (necesario)!",image:"Imagen de fondo (opcional)",icons_body:"Ruta de los iconos (ej: /local/images/bodyscoreIcon)",model:"¿Tiene un sensor de impedancia?",model1:"Active esta función para mediciones precisas de la composición corporal.",model_aria_label_on:"Activar impedancia",model_aria_label_off:"Desactivar impedancia",unit:"Convertir kg a lbs",unit_aria_label_on:"Activar conversión",unit_aria_label_off:"Desactivar conversión",show_name:"¿Mostrar el nombre de la cuenta como título?",show_name_aria_label_on:"Mostrar nombre como título",show_name_aria_label_off:"Ocultar nombre como título",show_states:"¿Mostrar estado de la báscula?",show_states_aria_label_on:"Mostrar estado de la báscula",show_states_aria_label_off:"Ocultar estado de la báscula",show_attributes:"¿Mostrar datos de perfil personal (esquina superior derecha)?",show_attributes_aria_label_on:"Mostrar atributos",show_attributes_aria_label_off:"Ocultar atributos",show_always_details:"Mostrar siempre los detalles",show_always_details_aria_label_on:"Mostrar la vista de detalles predeterminada",show_always_details_aria_label_off:"Ocultar la vista de detalles predeterminada",show_toolbar:"¿Mostrar opciones avanzadas?",show_toolbar_aria_label_on:"Mostrar opciones avanzadas",show_toolbar_aria_label_off:"Ocultar opciones avanzadas",show_body:"Mostrar más detalles de la medición",show_body1:"¿(parte inferior - pulsar en la fecha para mostrar)?",show_body_aria_label_on:"Mostrar puntuación corporal",show_body_aria_label_off:"Ocultar puntuación corporal",show_buttons:"¿Permitir cambio de cuenta?",show_buttons_aria_label_on:"Mostrar botones de cuenta",show_buttons_aria_label_off:"Ocultar botones de cuenta",header_options:"1. Opciones de cabecera de tarjeta",body_options:"2. Más opciones de tarjeta",code_only_note:"ATENCIÓN: Opciones adicionales sólo están disponibles en el editor de código."},$a={from:"De",icon_position:"Posición del ícono",label_below:"Etiqueta debajo",left:"A la izquierda",minmax_position:"Posición Mín/Máx",name_position:"Posición del nombre",off:"Apagar",on:"Encendido",right:"A la derecha",severity_generator_help:"Enlace a la ayuda de severidad",showabovelabels:"Mostrar etiquetas arriba",showbelowlabels:"Mostrar etiquetas abajo",target:"Objetivo",to:"A",value_position:"Posición del valor"},xa={color:"Color",disabled:"Deshabilitado",red:"Rojo",pink:"Rosa",purple:"Púrpura","deep-purple":"Púrpura oscuro",indigo:"Índigo",blue:"Azul","light-blue":"Azul claro",cyan:"Cian",teal:"Azul verdoso",green:"Verde","light-green":"Verde claro",lime:"Limón",yellow:"Amarillo",amber:"Ámbar",orange:"Naranja",orangered:"Naranja rojizo","deep-orange":"Naranja oscuro",brown:"Marrón","light-grey":"Gris claro",grey:"Gris","dark-grey":"Gris oscuro","blue-grey":"Gris azulado",darkgreen:"Verde oscuro",royalblue:"Azul real",black:"Negro",white:"Blanco"},Aa={balanced:"Equilibrado",good:"Bueno",increased:"Aumentado",insufficient:"Insuficiente",high:"Alto",low:"Bajo",normal:"Normal",obese:"Obeso",objective_achieved:"Objetivo alcanzado",objective_not_achieved:"Objetivo no alcanzado",overweight:"Sobrepeso",underweight:"Por debajo del peso normal",very_high:"Muy alto",very_low:"Muy bajo"},Ma={common:ua,states:ga,attributes:pa,attributes_value:wa,body:ya,body_value:fa,unit:va,error:ka,editor:za,editor_body:$a,color_select:xa,label_below:Aa},Pa=Object.freeze({__proto__:null,attributes:pa,attributes_value:wa,body:ya,body_value:fa,color_select:xa,common:ua,default:Ma,editor:za,editor_body:$a,error:ka,label_below:Aa,states:ga,unit:va}),ja={version:"Versió",name:"Targeta Bodymiscale",description:"La targeta Bodymiscale mostra l'estat del teu cos en relació amb el teu pes.",not_available:"Bodymiscale no està disponible",toggle_power:"Mostra / amaga més detalls com IMC, kCal"},Ca={ok:"MESURA: OK",unknown:"ESTAT: desconegut",problem:"Problema",none:"Cap",weight_unavailable:"Pes no disponible",impedance_unavailable:"Impedància no disponible",weight_unavailable_and_impedance_unavailable:"Pes i impedància no disponibles",weight_low:"Pes baix",impedance_low:"Impedància baixa",weight_low_and_impedance_low:"Pes i impedància baixos",impedance_low_and_weight_low:"Impedància i pes baixos",weight_high:"Pes alt",impedance_high:"Impedància alta",weight_high_and_impedance_high:"Pes i impedància alts",weight_high_and_impedance_low:"Pes alt, impedància baixa",weight_low_and_impedance_high:"Pes baix, impedància alta"},Sa={"weight: ":"Pes: ","impedance: ":"Impedància: ","height: ":"Alçada: ","age: ":"Edat: ","gender: ":"Sexe: "},Ia={male:"masculí",female:"femení",unavailable:"no disponible"},Oa={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Greix visceral",body_fat:"Greix corporal",protein:"Proteïna",water:"Aigua",muscle_mass:"Massa muscular",bone_mass:"Massa òssia",weight:"Pes",ideal:"Ideal",basal_metabolism:"Metabolisme basal",body_type:"Tipus de cos",metabolic_age:"Edat metabòlica"},Ta={skinny:"Prim",balanced_skinny:"Prim equilibrat",skinny_muscular:"Prim musculós",balanced:"Equilibrat",balanced_muscular:"Musculós equilibrat",lack_exercise:"Manca d'exercici",thick_set:"Corpulent",obese:"Obès",overweight:"Sobrepès",underweight:"Per sota del pes normal",normal_or_healthy_weight:"Normal",slight_overweight:"Lleuger sobrepès",moderate_obesity:"Obesitat moderada",severe_obesity:"Obesitat severa",massive_obesity:"Obesitat massiva",unavailable:"no disponible"},Ba={" years":" anys"},Ea={invalid_config:"Configuració no vàlida",missing_entity:"Si us plau, definiu una entitat.",missing_entity_bodymiscale:"Si us plau, definiu una entitat Bodymiscale."},Na={configuration:"Configuració",customization:"Personalització",entity:"Si us plau, trieu un compte de la bàscula (necessari)!",image:"Imatge de fons (opcional)",icons_body:"Camí de les icones (ex: /local/images/bodyscoreIcon)",model:"Teniu un sensor d'impedància?",model1:"Activeu aquesta funció per a mesures precises de la composició corporal.",model_aria_label_on:"Activar impedància",model_aria_label_off:"Desactivar impedància",unit:"Converteix kg a lbs",unit_aria_label_on:"Activar conversió",unit_aria_label_off:"Desactivar conversió",theme:"Configureu el tema que utilitzeu.",theme_aria_label_on:"Activa el tema clar",theme_aria_label_off:"Desactiva el tema fosc",show_name:"Mostrar el nom del compte com a títol?",show_name_aria_label_on:"Mostrar nom com a títol",show_name_aria_label_off:"Amagar nom com a títol",show_states:"Mostrar l'estat de la bàscula?",show_states_aria_label_on:"Mostrar estat de la bàscula",show_states_aria_label_off:"Amagar estat de la bàscula",show_attributes:"Mostrar dades de perfil personal (cantonada superior dreta)?",show_attributes_aria_label_on:"Mostrar atributs",show_attributes_aria_label_off:"Amagar atributs",show_always_details:"Mostrar sempre els detalls",show_always_details_aria_label_on:"Mostrar la vista de detalls predeterminada",show_always_details_aria_label_off:"Amagar la vista de detalls predeterminada",show_toolbar:"Mostrar opcions avançades?",show_toolbar_aria_label_on:"Mostrar opcions avançades",show_toolbar_aria_label_off:"Amagar opcions avançades",show_body:"Mostrar més detalls de la mesura",show_body1:"(part inferior - prémer la data per mostrar)?",show_body_aria_label_on:"Mostrar puntuació corporal",show_body_aria_label_off:"Amagar puntuació corporal",show_buttons:"Permetre canvi de compte?",show_buttons_aria_label_on:"Mostrar botons de compte",show_buttons_aria_label_off:"Amagar botons de compte",header_options:"1. Opcions de capçalera de targeta",body_options:"2. Més opcions de targeta",code_only_note:"ATENCIÓ: Opcions addicionals només estan disponibles a l'editor de codi."},Da={from:"De",icon_position:"Posició de la icona",label_below:"Etiqueta a sota",left:"A l'esquerra",minmax_position:"Posició Mín/Màx",name_position:"Posició del nom",off:"Apagar",on:"Activat",right:"A la dreta",severity_generator_help:"Enllaç a l'ajuda de severitat",showabovelabels:"Mostrar etiquetes a sobre",showbelowlabels:"Mostrar etiquetes a sota",to:"A",value_position:"Posició del valor"},Va={color:"Color",disabled:"Deshabilitat",red:"Vermell",pink:"Rosa",purple:"Porpra","deep-purple":"Porpra fosc",indigo:"Índigo",blue:"Blau","light-blue":"Blau clar",cyan:"Cian",teal:"Blau verdós",green:"Verd","light-green":"Verd clar",lime:"Llimona",yellow:"Groc",amber:"Ambre",orange:"Taronja",orangered:"Taronja vermellós","deep-orange":"Taronja fosc",brown:"Marró","light-grey":"Gris clar",grey:"Gris","dark-grey":"Gris fosc","blue-grey":"Gris blavós",darkgreen:"Verd fosc",royalblue:"Blau reial",black:"Negre",white:"Blanc"},qa={balanced:"Equilibrat",good:"Bo",increased:"Augmentat",insufficient:"Insuficient",high:"Alt",low:"Baix",normal:"Normal",obese:"Obès",objective_achieved:"Objectiu assolit",objective_not_achieved:"Objectiu no assolit",overweight:"Sobrepès",underweight:"Per sota del pes normal",very_high:"Molt alt",very_low:"Molt baix"},La={common:ja,states:Ca,attributes:Sa,attributes_value:Ia,body:Oa,body_value:Ta,unit:Ba,error:Ea,editor:Na,editor_body:Da,color_select:Va,label_below:qa},Ga={version:"Version",name:"Carte Bodymiscale",description:"La carte bodymiscale corporelle vous indique votre poids et votre état corporel.",not_available:"Bodymiscale n'est pas disponible",toggle_power:"Plus de détails comme IMC kCal afficher / cacher"},Ua={ok:"MESURE : OK",unknown:"ÉTAT : inconnu",problem:"Problème",none:"Aucun",weight_unavailable:"Poids indisponible",impedance_unavailable:"Impédance indisponible",weight_unavailable_and_impedance_unavailable:"Poids et impédance indisponibles",weight_low:"Poids faible",impedance_low:"Impédance faible",weight_low_and_impedance_low:"Poids et impédance faibles",impedance_low_and_weight_low:"Impédance et poids faibles",weight_high:"Poids élevé",impedance_high:"Impédance élevée",weight_high_and_impedance_high:"Poids et impédance élevés",weight_high_and_impedance_low:"Poids élevé, impédance faible",weight_low_and_impedance_high:"Poids faible, impédance élevée"},Ra={"weight: ":"Poids: ","impedance: ":"Impédance: ","height: ":"Taille: ","age: ":"Age: ","gender: ":"Genre: "},Wa={male:"homme",female:"femme",unavailable:"indisponible"},Ka={bmi:"IMC",bmi_label:"Étiquette IMC",visceral_fat:"Graisse viscérale",body_fat:"Graisse corporelle",protein:"Protéine",water:"Eau",muscle_mass:"Masse musculaire",bone_mass:"Masse osseuse",weight:"Poids",ideal:"Poids idéal",basal_metabolism:"Métabolisme de base",body_type:"Corpulence",metabolic_age:"Age corporel"},Ha={skinny:"Maigre",balanced_skinny:"Équilibré maigre",skinny_muscular:"Maigre musclé",balanced:"Équilibré",balanced_muscular:"Musclé équilibré",lack_exercise:"Manque d'exercice",thick_set:"Trapu",obese:"Obèse",overweight:"Surpoids",underweight:"Insuffisance pondérale",normal_or_healthy_weight:"Normal - poids de santé",slight_overweight:"Léger surpoids",moderate_obesity:"Obésité modérée",severe_obesity:"Obésité sévère",massive_obesity:"Obésité massive",unavailable:"indisponible"},Za={" years":" ans"},Fa={invalid_config:"Configuration invalide",missing_entity:"Veuillez définir une entité.",missing_entity_bodymiscale:"Veuillez définir une entité Bodymiscale."},Xa={configuration:"Configuration",customization:"Personnalisation",entity:"Veuillez choisir un compte de la balance (obligatoire) !",image:"Image de fond (facultatif)",icons_body:"Chemin des icônes (ex: /local/images/bodyscoreIcon)",model:"Vous avez un capteur d'impédance ?",model1:"Activez cette fonctionnalité pour des mesures corporelle précises.",model_aria_label_on:"Activez l'impédance",model_aria_label_off:"Désactiver l'impédance",unit:"Convertir les kg en lbs",unit_aria_label_on:"Activer la conversion",unit_aria_label_off:"Désactiver la conversion",theme:"Configurer le thème que vous utilisez.",theme_aria_label_on:"Activer thème clair",theme_aria_label_off:"Désactiver thème sombre",show_name:"Afficher le nom du compte comme titre ?",show_name_aria_label_on:"Activer affichage du nom",show_name_aria_label_off:"Désactiver affichage du nom",show_states:"Afficher l'état ?",show_states_aria_label_on:"Activer l'affichage de l'état",show_states_aria_label_off:"Désactiver l'affichage de l'état",show_attributes:"Afficher les données personnelles de base (en haut à droite) ?",show_attributes_aria_label_on:"Activer l'affichage des données personnelles de base",show_attributes_aria_label_off:"Désactiver l'affichage des données personnelles de base",show_always_details:"Toujours afficher les détails",show_always_details_aria_label_on:"Activer l'affichage des détails par défaut",show_always_details_aria_label_off:"Désactiver l'affichage des détails par défaut",show_toolbar:"Afficher les options avancées ?",show_toolbar_aria_label_on:"Activer l'affichage des options avancées",show_toolbar_aria_label_off:"Désactiver l'affichage des options avancées",show_body:"Offrir d'autres détails de mesure",show_body1:"(partie inférieure - affichage via l'icone chevron bas) ?",show_body_aria_label_on:"Activer l'affichage des autres détails de mesure",show_body_aria_label_off:"Désactiver l'affichage des autres détails de mesure",show_buttons:"Autoriser le changement de compte ?",show_buttons_aria_label_on:"Activer le changement de compte",show_buttons_aria_label_off:"Désactiver le changement de compte",header_options:"1. Options d'en-tête de la carte",body_options:"2. Plus d'options de la cartes",code_only_note:"ATTENTION: Les options supplémentaires ne sont disponibles que dans l'éditeur de code."},Ja={from:"De",icon_position:"Position de l'icône",label_below:"Label en dessous",left:"À gauche",minmax_position:"Position Min/Max",name_position:"Position du nom",off:"Désactivé",on:"Activé",right:"À droite",severity_generator_help:"Lien vers l'aide Sévérité",showabovelabels:"Afficher les labels au-dessus",showbelowlabels:"Afficher les labels en dessous",to:"À",value_position:"Position de la valeur"},Ya={color:"Couleur",disabled:"Désactivé",red:"Rouge",pink:"Rose",purple:"Violet","deep-purple":"Violet foncé",indigo:"Indigo",blue:"Bleu","light-blue":"Bleu clair",cyan:"Cyan",teal:"Turquoise",green:"Vert","light-green":"Vert clair",lime:"Vert citron",yellow:"Jaune",amber:"Ambre",orange:"Orange",orangered:"Rouge orange","deep-orange":"Orange foncé",brown:"Marron","light-grey":"Gris clair",grey:"Gris","dark-grey":"Gris foncé","blue-grey":"Bleu gris",darkgreen:"Vert foncé",royalblue:"Blue roi",black:"Noir",white:"Blanc"},Qa={balanced:"Équilibré",good:"Bien",increased:"Augmenté",insufficient:"Insuffisant",high:"Élevé",low:"Faible",normal:"Normal",obese:"Obèse",objective_achieved:"Objectif atteint",objective_not_achieved:"Objectif non atteint",overweight:"Surpoids",underweight:"Insuffisance pondérale",very_high:"Très élevé",very_low:"Très faible"},eo={common:Ga,states:Ua,attributes:Ra,attributes_value:Wa,body:Ka,body_value:Ha,unit:Za,error:Fa,editor:Xa,editor_body:Ja,color_select:Ya,label_below:Qa},ao={version:"Verzió",name:"Bodymiscale Kártya",description:"A BodyMiScale kártya megmutatja az ön súlyhoz viszonyított testi állapotát.",not_available:"A Bodymiscale nem elérhető",toggle_power:"További részletek, például a BMI, kCal megjelenítése / elrejtése"},oo={ok:"MÉRÉS: RENDBEN",unknown:"ÁLLAPOT: ismeretlen",problem:"Probléma",none:"Nincs",weight_unavailable:"Súly nem elérhető",impedance_unavailable:"Impedancia nem elérhető",weight_unavailable_and_impedance_unavailable:"Súly és impedancia nem elérhető",weight_low:"Alacsony súly",impedance_low:"Alacsony impedancia",weight_low_and_impedance_low:"Alacsony súly és impedancia",impedance_low_and_weight_low:"Alacsony impedancia és súly",weight_high:"Magas súly",impedance_high:"Magas impedancia",weight_high_and_impedance_high:"Magas súly és impedancia",weight_high_and_impedance_low:"Magas súly, alacsony impedancia",weight_low_and_impedance_high:"Alacsony súly, magas impedancia"},io={"weight: ":"Súly: ","impedance: ":"Impedancia: ","height: ":"Magasság: ","age: ":"Kor: ","gender: ":"Nem: "},to={male:"férfi",female:"nő",unavailable:"nem elérhető"},lo={bmi:"BMI",bmi_label:"BMI címke",visceral_fat:"Zsigeri zsír",body_fat:"Testzsír",protein:"Fehérje",water:"Víz",muscle_mass:"Izomtömeg",bone_mass:"Csonttömeg",weight:"Súly",ideal:"Ideális",basal_metabolism:"Alapanyagcsere",body_type:"Testtípus",metabolic_age:"Anyagcsere kor"},no={skinny:"Sovány",balanced_skinny:"Kiegyensúlyozott-sovány",skinny_muscular:"Sovány-izmos",balanced:"Kiegyensúlyozott",balanced_muscular:"Kiegyensúlyozott-izmos",lack_exercise:"Mozgáshiányos",thick_set:"Közepesen molett",obese:"Kórosan elhízott",overweight:"Túlsúlyos",underweight:"Súlyhiányos",normal_or_healthy_weight:"Normál vagy egészséges testsúly",slight_overweight:"Enyhe túlsúly",moderate_obesity:"Közepes elhízottság",severe_obesity:"Súlyos elhízottság",massive_obesity:"Masszív elhízottság",unavailable:"nem elérhető"},ro={" years":" év"},so={missing_entity:"Kérjük, definiáljon egy entitást.",missing_entity_bodymiscale:"Kérjük, definiáljon egy BodyMiScale entitást."},co={entity:"Kérjük, válasszon egy fiókot a mérlegen (kötelező)!",image:"Háttérkép (opcionális)",icons_body:"Ikonok útvonala (pl.: /local/images/bodyscoreIcon)",model:"Rendelkezik impedancia érzékelővel?",model1:"A pontos testösszetétel mérésekhez aktiválja ezt a funkciót.",model_aria_label_on:"Impedancia engedélyezése",model_aria_label_off:"Impedancia letiltása",unit:"Kg átszámítása fonttá",unit_aria_label_on:"Átszámítás bekapcsolása",unit_aria_label_off:"Átszámítás kikapcsolása",theme:"Állítsa be a használt témát.",theme_aria_label_on:"Világos téma bekapcsolása",theme_aria_label_off:"Sötét téma kikapcsolása",show_name:"Mutassa a fiók nevét címként?",show_name_aria_label_on:"Név megjelenítésének bekapcsolása",show_name_aria_label_off:"Név megjelenítésének kikapcsolása",show_states:"Állapot mutatása?",show_states_aria_label_on:"Állapot megjelenítésének bekapcsolása",show_states_aria_label_off:"Állapot megjelenítésének kikapcsolása",show_attributes:"Személyes adatok mutatása (jobb felső sarokban)?",show_attributes_aria_label_on:"Személyes adatok megjelenítésének bekapcsolása",show_attributes_aria_label_off:"Személyes adatok megjelenítésének kikapcsolása",show_always_details:"Mindig mutassa a részleteket",show_always_details_aria_label_on:"Alapértelmezett részletes nézet bekapcsolása",show_always_details_aria_label_off:"Alapértelmezett részletes nézet kikapcsolása",show_toolbar:"Mutassa a haladó beállításokat?",show_toolbar_aria_label_on:"Haladó beállítások megjelenítésének bekapcsolása",show_toolbar_aria_label_off:"Haladó beállítások megjelenítésének kikapcsolása",show_body:"Kínáljon további mérési részleteket",show_body1:"(alsó rész - a lefelé mutató nyíl ikonra kattintva megjeleníthető)?",show_body_aria_label_on:"Test pontszám megjelenítésének bekapcsolása",show_body_aria_label_off:"Test pontszám megjelenítésének kikapcsolása",show_buttons:"Fiókváltás engedélyezése?",show_buttons_aria_label_on:"Gombok megjelenítésének bekapcsolása",show_buttons_aria_label_off:"Gombok megjelenítésének kikapcsolása",header_options:"1. Kártya fejléc beállítások",body_options:"2. További kártya beállítások",code_only_note:"FIGYELEM: További beállítások csak a kód szerkesztőben érhetők el."},_o={from:"Tól",icon_position:"Ikon pozíció",label_below:"Címke alul",left:"Bal oldalon",minmax_position:"Min/Max pozíció",name_position:"Név pozíció",off:"Kikapcsolva",on:"Be",right:"Jobb oldalon",severity_generator_help:"Link a súlyossági súgóhoz",showabovelabels:"Címkék megjelenítése felül",showbelowlabels:"Címkék megjelenítése alul",target:"Cél",to:"Tovább",value_position:"Érték pozíció"},bo={color:"Szín",disabled:"Letiltva",red:"Piros",pink:"Rózsaszín",purple:"Lila","deep-purple":"Sötét lila",indigo:"Indigó",blue:"Kék","light-blue":"Világoskék",cyan:"Cián",teal:"Türkiz",green:"Zöld","light-green":"Világoszöld",lime:"Lime",yellow:"Sárga",amber:"Borostyán",orange:"Narancs",orangered:"Narancsvörös","deep-orange":"Sötét narancs",brown:"Barna","light-grey":"Világosszürke",grey:"Szürke","dark-grey":"Sötétszürke","blue-grey":"Kékszürke",darkgreen:"Sötétzöld",royalblue:"Királykék",black:"Fekete",white:"Fehér"},ho={balanced:"Kiegyensúlyozott",good:"Jó",increased:"Növekedett",insufficient:"Elégtelen",high:"Magas",low:"Alacsony",normal:"Normális",obese:"Kórosan elhízott",objective_achieved:"Cél elérve",objective_not_achieved:"Cél nem elérve",overweight:"Túlsúlyos",underweight:"Súlyhiányos",very_high:"Nagyon magas",very_low:"Nagyon alacsony"},mo={common:ao,states:oo,attributes:io,attributes_value:to,body:lo,body_value:no,unit:ro,error:so,editor:co,editor_body:_o,color_select:bo,label_below:ho},uo={version:"Versione",name:"Bodymiscale Card",description:"La card bodymiscale ti mostra il tuo peso/stato corporeo relativo.",not_available:"Bodymiscale non è disponibile",toggle_power:"Più dettagli come BMI kCal mostra / nascondi"},go={ok:"MISURAZIONE: OK",unknown:"STATO: sconosciuto",problem:"Problema",none:"Nessuno",weight_unavailable:"Peso non disponibile",impedance_unavailable:"Impedenza non disponibile",weight_unavailable_and_impedance_unavailable:"Peso e impedenza non disponibili",weight_low:"Peso basso",impedance_low:"Impedenza bassa",weight_low_and_impedance_low:"Peso e impedenza bassi",impedance_low_and_weight_low:"Impedenza e peso bassi",weight_high:"Peso alto",impedance_high:"Impedenza alta",weight_high_and_impedance_high:"Peso e impedenza alti",weight_high_and_impedance_low:"Peso alto, impedenza bassa",weight_low_and_impedance_high:"Peso basso, impedenza alta"},po={"weight: ":"Peso: ","impedance: ":"Impedenza: ","height: ":"Altezza: ","age: ":"Età: ","gender: ":"Sesso: "},wo={male:"uomo",female:"donna",unavailable:"non disponibile"},yo={bmi:"BMI",bmi_label:"BMI Categoria",visceral_fat:"Grasso viscerale",body_fat:"Grasso corporeo",protein:"Proteine",water:"Acqua",muscle_mass:"Massa muscolare",bone_mass:"Massa ossea",weight:"Peso",ideal:"Ideale",basal_metabolism:"Metabolismo base",body_type:"Tipo di corpo",metabolic_age:"Età metabolica"},fo={skinny:"Magro",balanced_skinny:"Bilanciato-magro",skinny_muscular:"Magro-muscoloso",balanced:"Bilanciato",balanced_muscular:"Bilanciato-muscoloso",lack_exercise:"Manca-esercizio",thick_set:"Spesso-impostato",obese:"Obeso",overweight:"Sovrappeso",underweight:"Sottopeso",normal_or_healthy_weight:"Normale o Peso Sano",slight_overweight:"Leggermente in sovrappeso",moderate_obesity:"Obesità Moderata",severe_obesity:"Obesità Grave",massive_obesity:"Obesità Massiccia",unavailable:"non disponibile"},vo={" years":" anni"},ko={missing_entity:"Perfavore definisci un'entità.",missing_entity_bodymiscale:"Perfavore definisci un'entità di tipo bodymiscale."},zo={entity:"Perfavore seleziona un account sulla bilancia (richiesto) !",image:"Immagine di sfondo (opzionale)",icons_body:"Percorso delle icone (es: /local/images/bodyscoreIcon)",model:"Hai un sensore di impedenza?",model1:"Attiva questa funzione per misurazioni accurate della composizione corporea.",model_aria_label_on:"Abilita impedenza",model_aria_label_off:"Disabilita impedenza",unit:"Converti da kg a lbs",unit_aria_label_on:"Attiva la conversione",unit_aria_label_off:"Disattiva la conversione",show_name:"Mostrare il nome dell'account come titolo  ?",show_name_aria_label_on:"Attiva la visione del nome",show_name_aria_label_off:"Disattiva la visione del nome",show_states:"Mostrare lo Stato ?",show_states_aria_label_on:"Attiva la visione dello stato",show_states_aria_label_off:"Disattiva la visione dello stato",show_attributes:"Mostrare i dati anagrafici personali (in alto a destra) ?",show_attributes_aria_label_on:"Attiva la visione degli attributi",show_attributes_aria_label_off:"Disattiva la visione degli attributi",show_always_details:"Mostra sempre i dettagli",show_always_details_aria_label_on:"Attiva la visualizzazione dettagliata predefinita",show_always_details_aria_label_off:"Disattiva la visualizzazione dettagliata predefinita",show_toolbar:"Mostrare opzioni avanzate ?",show_toolbar_aria_label_on:"Attiva opzioni avanzate",show_toolbar_aria_label_off:"Disattiva opzioni avanzate",show_body:"Offrire ulteriori dettagli di misurazione",show_body1:"(metà inferiore - l'icona con la spunta ve li mostrerà) ?",show_body_aria_label_on:"Attiva la visione del punteggio del corpo",show_body_aria_label_off:"Disattiva la visione del punteggio del corpo",show_buttons:"Consenti il cambio di account ?",show_buttons_aria_label_on:"Attiva la visione dei pulsanti",show_buttons_aria_label_off:"Disattiva la visione dei pulsanti",header_options:"1. Opzioni di intestazione della card",body_options:"2. Ulteriori opzioni della card",code_only_note:"ATTENZIONE: Le opzioni aggiuntive sono disponibili solo nella modalità editor di codice."},$o={from:"Da",icon_position:"Posizione icona",label_below:"Etichetta sotto",left:"A sinistra",minmax_position:"Posizione Min/Max",name_position:"Posizione nome",off:"Spento",on:"Attivo",right:"A destra",severity_generator_help:"Link alla guida sulla gravità",showabovelabels:"Mostra etichette sopra",showbelowlabels:"Mostra etichette sotto",target:"Destinazione",to:"A",value_position:"Posizione valore"},xo={color:"Colore",disabled:"Disabilitato",red:"Rosso",pink:"Rosa",purple:"Viola","deep-purple":"Viola scuro",indigo:"Indaco",blue:"Blu","light-blue":"Azzurro",cyan:"Ciano",teal:"Verde acqua",green:"Verde","light-green":"Verde chiaro",lime:"Lime",yellow:"Giallo",amber:"Ambra",orange:"Arancione",orangered:"Arancione rosso","deep-orange":"Arancione scuro",brown:"Marrone","light-grey":"Grigio chiaro",grey:"Grigio","dark-grey":"Grigio scuro","blue-grey":"Blu grigio",darkgreen:"Verde scuro",royalblue:"Blu reale",black:"Nero",white:"Bianco"},Ao={balanced:"Bilanciato",good:"Buono",increased:"Aumentato",insufficient:"Insufficiente",high:"Alto",low:"Basso",normal:"Normale",obese:"Obeso",objective_achieved:"Obiettivo raggiunto",objective_not_achieved:"Obiettivo non raggiunto",overweight:"Sovrappeso",underweight:"Sottopeso",very_high:"Molto alto",very_low:"Molto basso"},Mo={common:uo,states:go,attributes:po,attributes_value:wo,body:yo,body_value:fo,unit:vo,error:ko,editor:zo,editor_body:$o,color_select:xo,label_below:Ao},Po={version:"Version",name:"Bodymiscale Card",description:"ボディミスケール カードは、体重や関連する身体の状態を表示します。",not_available:"Bodymiscale は利用できません",toggle_power:"BMI kCal などの詳細を表示/非表示"},jo={ok:"測定: OK",unknown:"状態: 不明",problem:"問題",none:"なし",weight_unavailable:"体重が利用できません",impedance_unavailable:"インピーダンスが利用できません",weight_unavailable_and_impedance_unavailable:"体重とインピーダンスが利用できません",weight_low:"体重が低い",impedance_low:"インピーダンスが低い",weight_low_and_impedance_low:"体重とインピーダンスが低い",impedance_low_and_weight_low:"インピーダンスと体重が低い",weight_high:"体重が高い",impedance_high:"インピーダンス高",weight_high_and_impedance_high:"体重とインピーダンスが高い",weight_high_and_impedance_low:"体重は高いが、インピーダンスは低い",weight_low_and_impedance_high:"体重は低く、インピーダンスは高い"},Co={"weight: ":"体重: ","impedance: ":"インピーダンス: ","height: ":"高さ: ","age: ":"年齢: ","gender: ":"性別: "},So={male:"男性",female:"女性",unavailable:"利用不可"},Io={bmi:"BMI",bmi_label:"BMI ラベル",visceral_fat:"内臓脂肪",body_fat:"体脂肪",protein:"タンパク質",water:"水分",muscle_mass:"筋肉量",bone_mass:"骨量",weight:"体重",ideal:"理想",basal_metabolism:"基礎代謝",body_type:"体型",metabolic_age:"代謝年齢"},Oo={skinny:"痩せすぎ",balanced_skinny:"バランスの取れた瘦せ型",skinny_muscular:"細身筋肉質",balanced:"バランスの取れた",balanced_muscular:"バランスの取れた筋肉質",lack_exercise:"運動不足",thick_set:"がっしり体型",obese:"肥満",overweight:"太りすぎ",underweight:"低体重",normal_or_healthy_weight:"正常または健康的な体重",slight_overweight:"少し太りすぎ",moderate_obesity:"中程度の肥満",severe_obesity:"重度の肥満",massive_obesity:"極度の肥満",unavailable:"利用不可"},To={" years":" 年齢"},Bo={invalid_config:"無効な設定です",missing_entity:"エンティティを設定して下さい。",missing_entity_bodymiscale:"bodymiscale エンティティを定義してください。"},Eo={entity:"スケール上のアカウントを選択してください (必須)!",image:"背景画像（オプション）",icons_body:"アイコンのパス (例: /local/images/bodyscoreIcon)",model:"インピーダンスセンサーはありますか?",model1:"正確な体組成測定のためにこの機能を有効にしてください。",model_aria_label_on:"インピーダンスを有効にする",model_aria_label_off:"インピーダンスを無効にする",unit:"kg を lbs に変換する",unit_aria_label_on:"変換をオンに切り替えます",unit_aria_label_off:"変換をオフに切り替えます",theme:"使用するテーマを設定します。",theme_aria_label_on:"テーマライトをオンに切り替えます",theme_aria_label_off:"テーマダークをオフに切り替えます",show_name:"アカウント名をタイトルとして表示しますか?",show_name_aria_label_on:"表示名をオンに切り替えます",show_name_aria_label_off:"表示名をオフに切り替えます",show_states:"状態を表示しますか?",show_states_aria_label_on:"表示状態をオンに切り替えます",show_states_aria_label_off:"表示状態をオフに切り替えます",show_attributes:"個人マスターデータを表示しますか (右上)?",show_attributes_aria_label_on:"表示属性をオンに切り替えます",show_attributes_aria_label_off:"表示属性をオフに切り替えます",show_always_details:"常に詳細を表示する",show_always_details_aria_label_on:"デフォルトの詳細ビューをオンに切り替えます",show_always_details_aria_label_off:"デフォルトの詳細ビューをオフに切り替えます",show_toolbar:"詳細オプションを表示しますか?",show_toolbar_aria_label_on:"詳細オプションの表示をオンに切り替えます",show_toolbar_aria_label_off:"詳細オプションの表示をオフに切り替えます",show_body:"測定の詳細をさらに表示する",show_body1:"(下半分 - 下向きの矢印アイコンが表示されます)?",show_body_aria_label_on:"ボディスコアの表示をオンに切り替えます",show_body_aria_label_off:"ボディスコアの表示をオフに切り替えます",show_buttons:"アカウントの切り替えを許可しますか?",show_buttons_aria_label_on:"表示ボタンをオンに切り替えます",show_buttons_aria_label_off:"表示ボタンをオフに切り替えます",header_options:"1. カード ヘッダー オプション",body_options:"2. その他のカードオプション",code_only_note:"注意: 追加オプションはコード エディターでのみ使用できます。"},No={from:"から",icon_position:"アイコンの位置",label_below:"下のラベル",left:"左",minmax_position:"最小/最大の位置",name_position:"名前の位置",off:"オフ",on:"オン",right:"右",severity_generator_help:"重症度ヘルプへのリンク",showabovelabels:"ラベルを上に表示",showbelowlabels:"ラベルを下に表示",target:"ターゲット",to:"へ",value_position:"値の位置"},Do={color:"色",disabled:"無効",red:"赤",pink:"ピンク",purple:"紫","deep-purple":"濃い紫",indigo:"インディゴ",blue:"青","light-blue":"水色",cyan:"シアン",teal:"ティール",green:"緑","light-green":"薄緑",lime:"ライム",yellow:"黄色",amber:"アンバー",orange:"オレンジ",orangered:"赤橙色","deep-orange":"濃いオレンジ",brown:"茶色","light-grey":"ライトグレー",grey:"グレー","dark-grey":"ダークグレー","blue-grey":"青灰色",darkgreen:"ダークグリーン",royalblue:"ロイヤルブルー",black:"黒",white:"白"},Vo={balanced:"バランスの取れた",good:"良い",increased:"増加",insufficient:"不十分",high:"高い",low:"低い",normal:"正常",obese:"肥満",objective_achieved:"目標達成",objective_not_achieved:"目標未達成",overweight:"太りすぎ",underweight:"低体重",very_high:"非常に高い",very_low:"非常に低い"},qo={common:Po,states:jo,attributes:Co,attributes_value:So,body:Io,body_value:Oo,unit:To,error:Bo,editor:Eo,editor_body:No,color_select:Do,label_below:Vo},Lo={version:"Versie",name:"Bodymiscale Card",description:"De bodymiscale kaart toont u uw gewicht / gerelateerde lichaamsstatus.",not_available:"Bodymiscale is niet beschikbaar",toggle_power:"Meer details zoals BMI kCal tonen / verbergen"},Go={ok:"METING: OK",unknown:"STATUS: onbekend",problem:"Probleem",none:"Geen",weight_unavailable:"Gewicht niet beschikbar",impedance_unavailable:"Impedantie niet beschikbaar",weight_unavailable_and_impedance_unavailable:"Gewicht en impedantie niet beschikbaar",weight_low:"Gewicht laag",impedance_low:"Impedantie laag",weight_low_and_impedance_low:"Laag gewicht en impedantie",impedance_low_and_weight_low:"Lage impedantie en gewicht",weight_high:"Gewicht hoog",impedance_high:"Impedantie hoog",weight_high_and_impedance_high:"Hoog gewicht en impedantie",weight_high_and_impedance_low:"Gewicht hoog, impedantie laag",weight_low_and_impedance_high:"Gewicht laag, impedantie hoog"},Uo={"weight: ":"Gewicht: ","impedance: ":"Impedantie: ","height: ":"Lengte: ","age: ":"Leeftijd: ","gender: ":"Geslacht: "},Ro={male:"man",female:"vrouw",unavailable:"niet beschikbaar"},Wo={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Visceraal vet",body_fat:"Lichaamsvet",protein:"Proteine",water:"Water",muscle_mass:"Spiermassa",bone_mass:"Botgewicht",weight:"Gewicht",ideal:"Ideaal",basal_metabolism:"Basaal metabolisme",body_type:"Lichaamstype",metabolic_age:"Metabolistische leeftijd"},Ko={skinny:"Mager",balanced_skinny:"Gebalanceerd-mager",skinny_muscular:"Mager-gespierd",balanced:"Gebalanceerd",balanced_muscular:"Gebalanceerd-gespierd",lack_exercise:"Weinig-beweging",thick_set:"Dik",obese:"Obesitas",overweight:"Overgewicht",underweight:"Ondergewicht",normal_or_healthy_weight:"Normaal of gezond gewicht",slight_overweight:"Licht overgewicht",moderate_obesity:"Gemiddeld overgewicht",severe_obesity:"Ruim overgewicht",massive_obesity:"Enorm overgewicht",unavailable:"niet beschikbaar"},Ho={" years":" jaren"},Zo={missing_entity:"Geef een entiteit in.",missing_entity_bodymiscale:"Geef een bodymiscale entiteit in."},Fo={entity:"Kies een account op de schaal (verplicht) !",image:"Achtergrondafbeelding (facultatief)",icons_body:"Icoonpad (bijv. /local/images/bodyscoreIcon)",model:"Heeft u een impedantie sensor?",model1:"Activeer deze functie voor nauwkeurige metingen van de lichaamssamenstelling.",model_aria_label_on:"Impedantie inschakelen",model_aria_label_off:"Impedantie uitschakelen",unit:"Converteer kg naar lbs",unit_aria_label_on:"Activeer conversie",unit_aria_label_off:"Conversie deactiveren",show_name:"Toon de naam van de rekening als titel ?",show_name_aria_label_on:"Zet naam aan",show_name_aria_label_off:"Zet naam uit",show_states:"Geef status weer ?",show_states_aria_label_on:"Zet status aan",show_states_aria_label_off:"Zet status uit",show_attributes:"Persoonlijke stamgegevens weergeven (rechtsboven) ?",show_attributes_aria_label_on:"Zet attributen aan",show_attributes_aria_label_off:"Zet attributen uit",show_always_details:"Toon altijd details",show_always_details_aria_label_on:"Zet standaard detailweergave aan",show_always_details_aria_label_off:"Zet standaard detailweergave uit",show_toolbar:"Toon geavanceerde opties ?",show_toolbar_aria_label_on:"Zet knoppenbalk aan",show_toolbar_aria_label_off:"Zet knoppenbalk uit",show_body:"Bieden verdere meting details",show_body1:"(onderste helft - pictogram chevron naar beneden zal tonen die) ?",show_body_aria_label_on:"Zet lichaamsscore aan",show_body_aria_label_off:"Zet lichaamsscore uit",show_buttons:"Accountwissel toestaan ?",show_buttons_aria_label_on:"Zet knoppen aan",show_buttons_aria_label_off:"Zet knoppen uit",header_options:"1. Kaart koptekst opties",body_options:"2. Meer boordopties",code_only_note:"LET OP: Extra opties zijn alleen beschikbaar in de code editor."},Xo={from:"Van",icon_position:"Pictogrampositie",label_below:"Label eronder",left:"Links",minmax_position:"Min/Max Positie",name_position:"Naam Positie",off:"Uit",on:"Aan",right:"Rechts",severity_generator_help:"Link naar de help voor ernst",showabovelabels:"Labels boven weergeven",showbelowlabels:"Labels onder weergeven",target:"Doel",to:"Naar",value_position:"Waarde Positie"},Jo={color:"Kleur",disabled:"Uitgeschakeld",red:"Rood",pink:"Roze",purple:"Paars","deep-purple":"Dieppaars",indigo:"Indigo",blue:"Blauw","light-blue":"Lichtblauw",cyan:"Cyaan",teal:"Blauwgroen",green:"Groen","light-green":"Lichtgroen",lime:"Limoen",yellow:"Geel",amber:"Amber",orange:"Oranje",orangered:"Rood-oranje","deep-orange":"Dieporanje",brown:"Bruin","light-grey":"Lichtgrijs",grey:"Grijs","dark-grey":"Donkergrijs","blue-grey":"Blauwgrijs",darkgreen:"Donkergroen",royalblue:"Koningsblauw",black:"Zwart",white:"Wit"},Yo={balanced:"Gebalanceerd",good:"Goed",increased:"Verhoogd",insufficient:"Onvoldoende",high:"Hoog",low:"Laag",normal:"Normaal",obese:"Obesitas",objective_achieved:"Doel bereikt",objective_not_achieved:"Doel niet bereikt",overweight:"Overgewicht",underweight:"Ondergewicht",very_high:"Zeer hoog",very_low:"Zeer laag"},Qo={common:Lo,states:Go,attributes:Uo,attributes_value:Ro,body:Wo,body_value:Ko,unit:Ho,error:Zo,editor:Fo,editor_body:Xo,color_select:Jo,label_below:Yo},ei={version:"Wersja",name:"Karta Bodymiscale",description:"Karta BodyMiScale pokazuje Twoją wagę oraz parametry ciała.",not_available:"Bodymiscale jest niedostępna",toggle_power:"Więcej szczegółów jak BMI kCal - pokaż / ukryj"},ai={ok:"POMIAR: OK",unknown:"STATUS: nieznany",problem:"Problem",none:"Brak",weight_unavailable:"Waga niedostępna",impedance_unavailable:"Impedancja niedostępna",weight_unavailable_and_impedance_unavailable:"Waga i impedancja niedostępne",weight_low:"Niska waga",impedance_low:"Niska impedancja",weight_low_and_impedance_low:"Niska waga i impedancja",impedance_low_and_weight_low:"Niska impedancja i waga",weight_high:"Waga wysoka",impedance_high:"Impedancja wysoka",weight_high_and_impedance_high:"Wysoka waga i impedancja",weight_high_and_impedance_low:"Waga wysoka a impedancja niska",weight_low_and_impedance_high:"Waga nizska a impedancja wysoka"},oi={"weight: ":"Waga: ","impedance: ":"Impedancja: ","height: ":"Wzrost: ","age: ":"Wiek: ","gender: ":"Płeć: "},ii={male:"męska",female:"żeńska",unavailable:"niedstępna"},ti={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Tłuszcz brzuszny",body_fat:"Tłuszcz Ciała",protein:"Białko",water:"Woda",muscle_mass:"Masa mięśniowa",bone_mass:"Masa kostna",weight:"Waga",ideal:"Idealna",basal_metabolism:"Metabolizm podstawowy",body_type:"Typ sylwetki",metabolic_age:"Wiek metaboliczny"},li={skinny:"Chudy",balanced_skinny:"Umiarkowanie chudy",skinny_muscular:"Chudy muskularny",balanced:"Zrównoważony",balanced_muscular:"Zrównoważony muskularny",lack_exercise:"Mało aktywny",thick_set:"Gruby",obese:"Otyły",overweight:"Nadwaga",underweight:"Niedowaga",normal_or_healthy_weight:"Normalna lub zdrowa waga",slight_overweight:"Lekka nadwaga",moderate_obesity:"Lekka otyłość",severe_obesity:"Średnia otyłość",massive_obesity:"Poważna otyłość",unavailable:"niedostępny"},ni={" years":" lat"},ri={missing_entity:"Proszę zdefiniuj encje.",missing_entity_bodymiscale:"Proszę zdefiniuj encję bodymiscale."},si={entity:"Proszę wybierz konto na wadze (wymagane)!",image:"Obraz tła (opcjonalne)",icons_body:"Ścieżka ikon (np. /local/images/bodyscoreIcon)",model:"Czy masz czujnik impedancji?",model1:"Włącz tę funkcję, aby uzyskać dokładne pomiary składu ciała.",model_aria_label_on:"Włącz impedancję",model_aria_label_off:"Wyłącz impedancję",unit:"Zamień kg na lbs",unit_aria_label_on:"Włącz opcję konwersji",unit_aria_label_off:"Włącz opcję konwersji",theme:"Wybierz rodza motywu.",theme_aria_label_on:"Włącz jasny motyw",theme_aria_label_off:"Włącz ciemny motyw",show_name:"Użyć imienia jako tytułu karty?",show_name_aria_label_on:"Włącz opcję imienia jako tytułu",show_name_aria_label_off:"Wyłącz opcję imienia jako tytułu",show_states:"Wyświetlić stan?",show_states_aria_label_on:"Włącz wyświetlanie stanu",show_states_aria_label_off:"Wyłącz wyświetlanie stanu",show_attributes:"Show personal master data (gora po prawej)?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Zawsze pokazuj szczegóły",show_always_details_aria_label_on:"Włącz domyślny widok szczegółów",show_always_details_aria_label_off:"Wyłącz domyślny widok szczegółów",show_toolbar:"Pokazać zaawansowane opcje?",show_toolbar_aria_label_on:"Włącz zaawansowane opcje",show_toolbar_aria_label_off:"Wyłącz zaawansowane opcje",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those)?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Opcje nagłówka",body_options:"2. Więcej opcji karty",code_only_note:"UWAGA: Dodatkowe opcje dostępne są tylko poprzez edycje kodu."},di={from:"Od",icon_position:"Pozycja ikony",label_below:"Etykieta poniżej",left:"Po lewej",minmax_position:"Pozycja Min/Max",name_position:"Pozycja nazwy",off:"Wyłącz",on:"Włączone",right:"Po prawej",severity_generator_help:"Link do pomocy dotyczącej ważności",showabovelabels:"Pokaż etykiety powyżej",showbelowlabels:"Pokaż etykiety poniżej",target:"Cel",to:"Do",value_position:"Pozycja wartości"},ci={color:"Kolor",disabled:"Wyłączone",red:"Czerwony",pink:"Różowy",purple:"Fioletowy","deep-purple":"Ciemnofioletowy",indigo:"Indygo",blue:"Niebieski","light-blue":"Jasnoniebieski",cyan:"Błękitny",teal:"Nadmorskizielony",green:"Zielony","light-green":"Jasnozielony",lime:"Limonkowy",yellow:"Żółty",amber:"Bursztynowy",orange:"Pomarańczowy",orangered:"Czerwono-pomarańczowy","deep-orange":"Ciemnopomarańczowy",brown:"Brązowy","light-grey":"Jasnoszary",grey:"Szary","dark-grey":"Ciemnoszary","blue-grey":"Niebieskoszary",darkgreen:"Ciemnozielony",royalblue:"Królestwo Niebieskie",black:"Czarny",white:"Biały"},_i={balanced:"Zrównoważony",good:"Dobry",increased:"Zwiększony",insufficient:"Niewystarczający",high:"Wysoki",low:"Niski",normal:"Normalny",obese:"Otyły",objective_achieved:"Cel osiągnięty",objective_not_achieved:"Cel nieosiągnięty",overweight:"Nadwaga",underweight:"Niedowaga",very_high:"Bardzo wysoki",very_low:"Bardzo niski"},bi={common:ei,states:ai,attributes:oi,attributes_value:ii,body:ti,body_value:li,unit:ni,error:ri,editor:si,editor_body:di,color_select:ci,label_below:_i},hi={version:"Versão",name:"Bodymiscale Card",description:"O cartão bodymiscale mostra-lhe o estado do seu corpo em relação ao peso.",not_available:"Bodymiscale não está disponível",toggle_power:"Mostrando/escondendo mais detalhes tal como o kCal,IMC"},mi={ok:"MEDIÇÃO: OK",unknown:"ESTATUTO: desconhecido",problem:"Problema",none:"Nenhum",weight_unavailable:"Peso indisponível",impedance_unavailable:"Impedância indisponível",weight_unavailable_and_impedance_unavailable:"Peso e impedância indisponíveis",weight_low:"Peso baixo",impedance_low:"Impedância baixa",weight_low_and_impedance_low:"Peso e impedância baixos",impedance_low_and_weight_low:"Impedância e peso baixos",weight_high:"Peso alto",impedance_high:"Impedância alta",weight_high_and_impedance_high:"Peso e impedância altos",weight_high_and_impedance_low:"Peso alto, impedância baixa",weight_low_and_impedance_high:"Peso baixo, impedância alta"},ui={"weight: ":"Peso: ","impedance: ":"Impedância: ","height: ":"Altura: ","age: ":"Idade: ","gender: ":"Gênero: "},gi={male:"masculino",female:"femenino",unavailable:"indisponível"},pi={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Gordura visceral",body_fat:"Gordura corporal",protein:"Proteína",water:"Água",muscle_mass:"Massa muscular",bone_mass:"Massa óssea",weight:"Peso",ideal:"Ideal",basal_metabolism:"Metabolismo basal",body_type:"Tipo de corpo",metabolic_age:"Idade metabólica"},wi={skinny:"Magro",balanced_skinny:"Magro equilibrado",skinny_muscular:"Magro musculoso",balanced:"Equilibrado",balanced_muscular:"Musculoso equilibrado",lack_exercise:"Falta de exercício",thick_set:"Estatura sólida",obese:"Obeso",overweight:"Acima do peso normal",underweight:"Abaixo do peso normal",normal_or_healthy_weight:"Normal",slight_overweight:"Ligeiramente acima do peso",moderate_obesity:"Obesidade moderada",severe_obesity:"Obesidade severa",massive_obesity:"Obesidade maciça",unavailable:"indisponível"},yi={" years":" Anos"},fi={missing_entity:"Por favor, defina uma entidade.",missing_entity_bodymiscale:"Por favor, defina uma entidade bodymiscale."},vi={entity:"Por favor, escolha a entidade da balança com o nome da pessoa (obrigatório) !",image:"Imagem de fundo (opcional)",icons_body:"Caminho dos ícones (ex: /local/images/bodyscoreIcon)",model:"Tem um sensor de impedância?",model1:"Ative esta função para medições precisas da composição corporal.",model_aria_label_on:"Ativar impedância",model_aria_label_off:"Desativar impedância",unit:"Converter kg em libras",unit_aria_label_on:"Ativar a conversão kg para lbs",unit_aria_label_off:"Desativar a conversão kg para lbs",show_name:"Mostrar o nome da conta como título ?",show_name_aria_label_on:"Mostrar o nome como título",show_name_aria_label_off:"Esconder o nome como título",show_states:"Mostrar Estado da balança ?",show_states_aria_label_on:"Mostrar o estado da balança",show_states_aria_label_off:"Esconder o estado da balança",show_attributes:"Mostrar os dados do perfil pessoal (canto superior direito) ?",show_attributes_aria_label_on:"Mostrar atributos",show_attributes_aria_label_off:"Esconder atributos",show_always_details:"Mostrar sempre detalhes",show_always_details_aria_label_on:"Alternar a vista de detalhe por defeito em",show_always_details_aria_label_off:"Alternar a vista de detalhe por defeito",show_toolbar:"Mostrar opções avançadas ?",show_toolbar_aria_label_on:"Mostrar a barra de ferramentas",show_toolbar_aria_label_off:"Esconder a barra de ferramentas",show_body:"Mostrar mais detalhes da medição",show_body1:"(parte inferior - clicar na seta para mostrar) ?",show_body_aria_label_on:"Mostrar mais detalhes no corpo",show_body_aria_label_off:"Esconder mais detalhes no corpo",show_buttons:"Permitir a troca de conta ?",show_buttons_aria_label_on:"Mostrar botões das contas",show_buttons_aria_label_off:"Esconder botões das contas",header_options:"1. Opções do cabeçalho do cartão",body_options:"2. Mais opções do corpo do cartão",code_only_note:"CUIDADO: Opções adicionais estão disponíveis apenas no editor de código."},ki={from:"De",icon_position:"Posição do ícone",label_below:"Etiqueta abaixo",left:"À esquerda",minmax_position:"Posição Min/Max",name_position:"Posição do nome",off:"Desligado",on:"Ligado",right:"À direita",severity_generator_help:"Link para a ajuda de severidade",showabovelabels:"Mostrar etiquetas acima",showbelowlabels:"Mostrar etiquetas abaixo",target:"Alvo",to:"Para",value_position:"Posição do valor"},zi={color:"Cor",disabled:"Desativado",red:"Vermelho",pink:"Rosa",purple:"Roxo","deep-purple":"Roxo escuro",indigo:"Índigo",blue:"Azul","light-blue":"Azul claro",cyan:"Ciano",teal:"Azul esverdeado",green:"Verde","light-green":"Verde claro",lime:"Lima",yellow:"Amarelo",amber:"Âmbar",orange:"Laranja",orangered:"Laranja avermelhado","deep-orange":"Laranja escuro",brown:"Marrom","light-grey":"Cinza claro",grey:"Cinza","dark-grey":"Cinza escuro","blue-grey":"Cinza azulado",darkgreen:"Verde escuro",royalblue:"Azul real",black:"Preto",white:"Branco"},$i={balanced:"Equilibrado",good:"Bom",increased:"Aumentado",insufficient:"Insuficiente",high:"Alto",low:"Baixo",normal:"Normal",obese:"Obeso",objective_achieved:"Objetivo alcançado",objective_not_achieved:"Objetivo não alcançado",overweight:"Sobrepeso",underweight:"Underweight",very_high:"Muito alto",very_low:"Muito baixo"},xi={common:hi,states:mi,attributes:ui,attributes_value:gi,body:pi,body_value:wi,unit:yi,error:fi,editor:vi,editor_body:ki,color_select:zi,label_below:$i},Ai={version:"Versão",name:"Bodymiscale Card",description:"O cartão bodymiscale mostra-lhe o estado do seu corpo em relação ao peso.",not_available:"Bodymiscale não é avaialável",toggle_power:"Mais detalhes como o kCal show / hide da BMI"},Mi={ok:"MEDIÇÃO: OK",unknown:"ESTATUTO: desconhecido",problem:"Problema",none:"Nenhum",weight_unavailable:"Peso indisponível",impedance_unavailable:"Impedance indisponível",weight_unavailable_and_impedance_unavailable:"Peso e impedância indisponíveis",weight_low:"Peso baixo",impedance_low:"Impedância baixa",weight_low_and_impedance_low:"Peso e impedância baixos",impedance_low_and_weight_low:"Impedância e peso baixos",weight_high:"Peso alto",impedance_high:"Impedância alta",weight_high_and_impedance_high:"Peso e impedância altos",weight_high_and_impedance_low:"Peso alto, impedância baixa",weight_low_and_impedance_high:"Peso baixo, impedância alta"},Pi={"weight: ":"Peso: ","impedance: ":"Impedance: ","height: ":"Cintura: ","age: ":"Idade: ","gender: ":"Gênero: "},ji={male:"macho",female:"fêmea",unavailable:"indisponível"},Ci={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Gordura visceral",body_fat:"Gordura corporal",protein:"Proteína",water:"Água",muscle_mass:"Massa muscular",bone_mass:"Massa óssea",weight:"Peso",ideal:"Ideal",basal_metabolism:"Metabolismo basal",body_type:"Tipo de corpo",metabolic_age:"Idade metabólica"},Si={skinny:"Magro",balanced_skinny:"Magro equilibrado",skinny_muscular:"Magro musculoso",balanced:"Equilibrado",balanced_muscular:"Musculoso equilibrado",lack_exercise:"Falta de exercício",thick_set:"Grosso-conjunto",obese:"Obeso",overweight:"Sobrepeso",underweight:"Underweight",normal_or_healthy_weight:"Normal",slight_overweight:"Ligeiro acima do peso",moderate_obesity:"Obesidade moderada",severe_obesity:"Obesidade severa",massive_obesity:"Obesidade maciça",unavailable:"indisponível"},Ii={" years":" Anos"},Oi={missing_entity:"Por favor, defina uma entidade.",missing_entity_bodymiscale:"Por favor, defina uma entidade bodymiscale."},Ti={entity:"Por favor, escolha uma conta na escala (obrigatório) !",image:"Imagem de fundo (opcional)",icons_body:"Caminho dos ícones (ex: /local/images/bodyscoreIcon)",model:"Você tem um sensor de impedância?",model1:"Ative esta função para medições precisas da composição corporal.",model_aria_label_on:"Ativar impedância",model_aria_label_off:"Desativar impedância",unit:"Converter kg em libras",unit_aria_label_on:"Ativar a conversão",unit_aria_label_off:"Desativar a conversão",show_name:"Mostrar o nome da conta como título ?",show_name_aria_label_on:"Alternar o nome da exibição",show_name_aria_label_off:"Alternar o nome da exibição",show_states:"Mostrar Estado ?",show_states_aria_label_on:"Alternar estado de exibição ligado",show_states_aria_label_off:"Alternar estado de exibição fora",show_attributes:"Mostrar dados mestres pessoais (canto superior direito) ?",show_attributes_aria_label_on:"Alternar atributos de exibição em",show_attributes_aria_label_off:"Alternar atributos de exibição fora",show_always_details:"Mostrar sempre detalhes",show_always_details_aria_label_on:"Alternar a visualização de detalhes padrão em",show_always_details_aria_label_off:"Alternar a visualização de detalhes padrão fora",show_toolbar:"Mostrar opções avançadas ?",show_toolbar_aria_label_on:"Alternar a barra de ferramentas do display em",show_toolbar_aria_label_off:"Alternar barra de ferramentas de exibição fora",show_body:"Oferecer mais detalhes de medição",show_body1:"(parte inferior - ícone chevron down mostrará aqueles) ?",show_body_aria_label_on:"Alternar a pontuação do corpo do display em",show_body_aria_label_off:"Alternar a pontuação do corpo do display fora",show_buttons:"Permitir a troca de conta ?",show_buttons_aria_label_on:"Alternar botões de exibição",show_buttons_aria_label_off:"Alternar botões de exibição desligados",header_options:"1. Opções do cabeçalho do cartão",body_options:"2. Mais opções de placas",code_only_note:"CUIDADO: Opções adicionais estão disponíveis apenas no editor de código."},Bi={from:"De",icon_position:"Posição do ícone",label_below:"Etiqueta abaixo",left:"À esquerda",minmax_position:"Posição Min/Max",name_position:"Posição do nome",off:"Desligado",on:"Ligado",right:"À direita",severity_generator_help:"Link para a ajuda de severidade",showabovelabels:"Mostrar etiquetas acima",showbelowlabels:"Mostrar etiquetas abaixo",target:"Alvo",to:"Para",value_position:"Posição do valor"},Ei={color:"Cor",disabled:"Desativado",red:"Vermelho",pink:"Rosa",purple:"Roxo","deep-purple":"Roxo escuro",indigo:"Índigo",blue:"Azul","light-blue":"Azul claro",cyan:"Ciano",teal:"Azul esverdeado",green:"Verde","light-green":"Verde claro",lime:"Lima",yellow:"Amarelo",amber:"Âmbar",orange:"Laranja",orangered:"Laranja avermelhado","deep-orange":"Laranja escuro",brown:"Marrom","light-grey":"Cinza claro",grey:"Cinza","dark-grey":"Cinza escuro","blue-grey":"Cinza azulado",darkgreen:"Verde escuro",royalblue:"Azul real",black:"Preto",white:"Branco"},Ni={balanced:"Equilibrado",good:"Bom",increased:"Aumentado",insufficient:"Insuficiente",high:"Alto",low:"Baixo",normal:"Normal",obese:"Obeso",objective_achieved:"Objetivo alcançado",objective_not_achieved:"Objetivo não alcançado",overweight:"Acima do peso normal",underweight:"Abaixo do peso normal",very_high:"Muito alto",very_low:"Muito baixo"},Di={common:Ai,states:Mi,attributes:Pi,attributes_value:ji,body:Ci,body_value:Si,unit:Ii,error:Oi,editor:Ti,editor_body:Bi,color_select:Ei,label_below:Ni},Vi={version:"Versiune",name:"Bodymiscale Card",description:"Cardul bodymiscale îți arată starea ta în funcție de greutate/corespunzătoare corpului.",not_available:"Bodymiscale nu este disponibil",toggle_power:"Mai multe detalii precum BMI kCal arată/ascunde"},qi={ok:"MĂSURARE: OK",unknown:"Stare: unknown",problem:"Problemă",none:"Nimic",weight_unavailable:"Greutate indisponibilă",impedance_unavailable:"Impedanță indisponibilă",weight_unavailable_and_impedance_unavailable:"Greutate și impedanță indisponibile",weight_low:"Greutate redusă",impedance_low:"Impedanță scăzută",weight_low_and_impedance_low:"Greutate și impedanță scăzute",impedance_low_and_weight_low:"Impedanță și greutate scăzute",weight_high:"Greutate mare",impedance_high:"Impedanță mare",weight_high_and_impedance_high:"Greutate și impedanță ridicate",weight_high_and_impedance_low:"Greutate mare, impedanță scăzută",weight_low_and_impedance_high:"Greutate redusă, impedanță ridicată"},Li={"weight: ":"Greutate: ","impedance: ":"Impedanță: ","height: ":"Înălţime: ","age: ":"Vârstă: ","gender: ":"Gen: "},Gi={male:"masculin",female:"feminin",unavailable:"indisponibil"},Ui={bmi:"IMC",bmi_label:"Eticheta IMC",visceral_fat:"Grasime viscerala",body_fat:"Grăsime corporală",protein:"Proteină",water:"Apă",muscle_mass:"Masă musculară",bone_mass:"Masă osoasă",weight:"Greutate",ideal:"Ideal",basal_metabolism:"Metabolismul bazal",body_type:"Tipul corpului",metabolic_age:"Vârsta metabolică"},Ri={skinny:"Slab",balanced_skinny:"Slab-echilibrat",skinny_muscular:"Slab-muscular",balanced:"Echilibrat",balanced_muscular:"Balanced-muscular",lack_exercise:"Lipsa-exercițiu",thick_set:"Îndesat",obese:"Obez",overweight:"Supraponderal",underweight:"Subponderal",normal_or_healthy_weight:"Greutate normală sau sănătoasă",slight_overweight:"Ușor supraponderal",moderate_obesity:"Obezitate moderată",severe_obesity:"Obezitate severă",massive_obesity:"Obezitate masivă",unavailable:"indisponibil"},Wi={" years":" ani"},Ki={missing_entity:"Vă rugăm să definiți o entitate.",missing_entity_bodymiscale:"Definiți o entitate bodymiscale."},Hi={entity:"Vă rugăm să selectați un cont de cântar (obligatoriu)!",image:"Imagine de fundal (opțional)",icons_body:"Calea pictogramelor (ex: /local/images/bodyscoreIcon)",model:"Aveți un senzor de impedanță?",model1:"Activați această funcție pentru măsurători precise ale compoziției corporale.",model_aria_label_on:"Activare impedanță",model_aria_label_off:"Dezactivare impedanță",unit:"Convertiți kg în lbs",unit_aria_label_on:"Activați conversia",unit_aria_label_off:"Dezactivați conversia",theme:"Configurați tema pe care o utilizați.",theme_aria_label_on:"Activează lumina temei",theme_aria_label_off:"Dezactivați tema întunecată",show_name:"Afișați numele contului ca titlu?",show_name_aria_label_on:"Activează numele afișat",show_name_aria_label_off:"Dezactivați numele afișat",show_states:"Arată starea?",show_states_aria_label_on:"Comutați starea afișajului",show_states_aria_label_off:"Dezactivați starea afișajului",show_attributes:"Afișați datele de bază personale (dreapta sus)?",show_attributes_aria_label_on:"Activați/dezactivați atributele de afișare",show_attributes_aria_label_off:"Dezactivați atributele de afișare",show_always_details:"Afișați întotdeauna detalii",show_always_details_aria_label_on:"Activați vizualizarea implicită a detaliilor",show_always_details_aria_label_off:"Dezactivați vizualizarea implicită a detaliilor",show_toolbar:"Arată opțiuni avansate?",show_toolbar_aria_label_on:"Comutați afișarea opțiunilor avansate",show_toolbar_aria_label_off:"Dezactivați afișarea opțiunilor avansate",show_body:"Oferiți detalii suplimentare de măsurare",show_body1:"(Jumătatea inferioară - pictograma chevron în jos le va arăta)?",show_body_aria_label_on:"Comutați afișarea scorului corporal",show_body_aria_label_off:"Dezactivați scorul pentru corpul afișat",show_buttons:"Permiteți schimbarea contului?",show_buttons_aria_label_on:"Activați butoanele afișajului",show_buttons_aria_label_off:"Dezactivați butoanele de afișare",header_options:"1. Opțiuni pentru antetul cardului",body_options:"2. Mai multe opțiuni de card",code_only_note:"ATENŢIE: Opțiuni suplimentare sunt disponibile numai în editorul de cod."},Zi={from:"De la",icon_position:"Poziția pictogramei",label_below:"Etichetă dedesubt",left:"La stânga",minmax_position:"Poziția Min/Max",name_position:"Poziția numelui",off:"Oprit",on:"Pornit",right:"La dreapta",severity_generator_help:"Link către ajutorul pentru severitate",showabovelabels:"Afișează etichetele deasupra",showbelowlabels:"Afișează etichetele dedesubt",target:"Țintă",to:"La",value_position:"Poziția valorii"},Fi={color:"Culoare",disabled:"Dezactivat",red:"Roșu",pink:"Roz",purple:"Violet","deep-purple":"Violet închis",indigo:"Indigo",blue:"Albastru","light-blue":"Albastru deschis",cyan:"Cian",teal:"Albastru-verde",green:"Verde","light-green":"Verde deschis",lime:"Lămâie",yellow:"Galben",amber:"Chihlimbar",orange:"Portocaliu",orangered:"Portocaliu-roșu","deep-orange":"Portocaliu închis",brown:"Maro","light-grey":"Gri deschis",grey:"Gri","dark-grey":"Gri închis","blue-grey":"Gri-albastru",darkgreen:"Verde închis",royalblue:"Albastru regal",black:"Negru",white:"Alb"},Xi={balanced:"Echilibrat",good:"Bun",increased:"Crescut",insufficient:"Insuficient",high:"Înalt",low:"Scăzut",normal:"Normal",obese:"Obez",objective_achieved:"Obiectiv atins",objective_not_achieved:"Obiectiv neatins",overweight:"Supraponderal",underweight:"Subponderal",very_high:"Foarte înalt",very_low:"Foarte scăzut"},Ji={common:Vi,states:qi,attributes:Li,attributes_value:Gi,body:Ui,body_value:Ri,unit:Wi,error:Ki,editor:Hi,editor_body:Zi,color_select:Fi,label_below:Xi},Yi={version:"Версия",name:"Карточка Bodymiscale",description:"Карточка BodyMiScale отображает показатели тела, рассчитанные на основе результатов измерения веса и биоимпеданса.",not_available:"Компонент Bodymiscale не доступен",toggle_power:"Показать/скрыть дополнительные сведения о BMI"},Qi={ok:"Измерение: OK",unknown:"Состояние: неизвестно",problem:"Проблема",none:"Нет",weight_unavailable:"Вес недоступен",impedance_unavailable:"Биоимпеданс недоступен",weight_unavailable_and_impedance_unavailable:"Вес и импеданс недоступны",weight_low:"Низкий вес",impedance_low:"Низкий биоимпеданс",weight_low_and_impedance_low:"Низкий вес и импеданс",impedance_low_and_weight_low:"Низкий импеданс и вес",weight_high:"Высокий вес",impedance_high:"Высокий биоимпеданс",weight_high_and_impedance_high:"Высокий вес и импеданс",weight_high_and_impedance_low:"Высокий вес, низкий биоимпеданс",weight_low_and_impedance_high:"Низкий вес, высокий биоимпеданс"},et={"weight: ":"Вес: ","impedance: ":"Импеданс: ","height: ":"Рост: ","age: ":"Возраст: ","gender: ":"Пол: "},at={male:"мужской",female:"женский",unavailable:"недоступен"},ot={bmi:"Индекс BMI",bmi_label:"Интерпретация BMI",visceral_fat:"Висцеральный жир",body_fat:"Жировая ткань",protein:"Белки",water:"Вода",muscle_mass:"Мышечная масса",bone_mass:"Костная масса",weight:"Вес",ideal:"Идеальный вес",basal_metabolism:"Базальный метаболизм",body_type:"Тип тела",metabolic_age:"Метаболический возраст"},it={skinny:"Тощий",balanced_skinny:"Худощавый",skinny_muscular:"Подтянуто-мускулистый",balanced:"Оптимальный",balanced_muscular:"Мускулистый",lack_exercise:"Недостаток упражнений",thick_set:"Коренастый",obese:"Ожирение",overweight:"Лишний вес",underweight:"Недостаточный вес",normal_or_healthy_weight:"Нормальный вес",slight_overweight:"Избыточный вес",moderate_obesity:"Ожирение 1й степени",severe_obesity:"Ожирение 2й степени",massive_obesity:"Ожирение 3й степени",unavailable:"недоступен"},tt={" years":" года(лет)"},lt={missing_entity:"Определите сущность.",missing_entity_bodymiscale:"Определите сущность BodyMiScale."},nt={entity:"Сущность BodyMiScale (обязательно)",image:"Фоновое изображение (опционально)",icons_body:"Путь к иконкам (например: /local/images/bodyscoreIcon)",model:"У вас есть датчик импеданса?",model1:"Включите эту функцию для точных измерений состава тела.",model_aria_label_on:"Включить импеданс",model_aria_label_off:"Выключить импеданс",unit:"Преобразование кг в фунты",unit_aria_label_on:"Преобразовать кг в фунты",unit_aria_label_off:"Не преобразовывать кг в фунты",show_name:"Отображение имени пользователя",show_name_aria_label_on:"Отображать имя пользователя",show_name_aria_label_off:"Не отображать имя пользователя",show_states:"Отображение состояния",show_states_aria_label_on:"Отображать состояние",show_states_aria_label_off:"Не отображать состояние",show_attributes:"Отображение персональных данных",show_attributes_aria_label_on:"Отображать персональные данные",show_attributes_aria_label_off:"Не отображать персональные данные",show_always_details:"Всегда показывать детали",show_always_details_aria_label_on:"Постоянное отображение деталей",show_always_details_aria_label_off:"Не отображайте данные на постоянной основе",show_toolbar:"Отображение панели дополнительных параметров",show_toolbar_aria_label_on:"Отображать панель дополнительных параметров",show_toolbar_aria_label_off:"Не отображать панель дополнительных параметров",show_body:"Отображение дополнительных параметров",show_body1:"(по нажатию кнопки со стрелкой вниз)",show_body_aria_label_on:"Отображать дополнительные параметры",show_body_aria_label_off:"Не отображать дополнительные параметры",show_buttons:"Переключение аккаунтов",show_buttons_aria_label_on:"Отображать кнопки",show_buttons_aria_label_off:"Не отображать кнопки",header_options:"1. Настройки заголовка карточки",body_options:"2. Дополнительные настройки карточки",code_only_note:"ВНИМАНИЕ: Дополнительные настройки отображаются только в редакторе кода."},rt={from:"От",icon_position:"Позиция иконки",label_below:"Метка снизу",left:"Слева",minmax_position:"Позиция Min/Max",name_position:"Позиция имени",off:"Выключено",on:"Вкл.",right:"Справа",severity_generator_help:"Ссылка на справку по серьезности",showabovelabels:"Показать метки сверху",showbelowlabels:"Показать метки снизу",target:"Цель",to:"К",value_position:"Позиция значения"},st={color:"Цвет",disabled:"Отключено",red:"Красный",pink:"Розовый",purple:"Фиолетовый","deep-purple":"Темно-фиолетовый",indigo:"Индиго",blue:"Синий","light-blue":"Голубой",cyan:"Циан",teal:"Бирюзовый",green:"Зеленый","light-green":"Светло-зеленый",lime:"Лайм",yellow:"Желтый",amber:"Янтарный",orange:"Оранжевый",orangered:"Красно-оранжевый","deep-orange":"Темно-оранжевый",brown:"Коричневый","light-grey":"Светло-серый",grey:"Серый","dark-grey":"Темно-серый","blue-grey":"Серый синий",darkgreen:"Темно-зеленый",royalblue:"Королевский синий",black:"Черный",white:"Белый"},dt={balanced:"Оптимальный",good:"Хорошо",increased:"Повышенный",insufficient:"Недостаточно",high:"Высокий",low:"Низкий",normal:"Нормальный",obese:"Ожирение",objective_achieved:"Цель достигнута",objective_not_achieved:"Цель не достигнута",overweight:"Лишний вес",underweight:"Недостаточный вес",very_high:"Очень высокий",very_low:"Очень низкий"},ct={common:Yi,states:Qi,attributes:et,attributes_value:at,body:ot,body_value:it,unit:tt,error:lt,editor:nt,editor_body:rt,color_select:st,label_below:dt},_t={version:"Версія",name:"Картка Bodymiscale",description:"Картка Bodymiscale показує ваш вагу та пов'язані з нею показники тіла.",not_available:"Bodymiscale недоступний",toggle_power:"Більше деталей, таких як ІМТ, кКал, показати/приховати"},bt={ok:"ВИМІРЮВАННЯ: ОК",unknown:"СТАН: невідомо",problem:"Проблема",none:"Немає",weight_unavailable:"Вага недоступна",impedance_unavailable:"Імпеданс недоступний",weight_unavailable_and_impedance_unavailable:"Вага та імпеданс недоступні",weight_low:"Низька вага",impedance_low:"Низький імпеданс",weight_low_and_impedance_low:"Низька вага та імпеданс",impedance_low_and_weight_low:"Низький імпеданс та вага",weight_high:"Висока вага",impedance_high:"Високий імпеданс",weight_high_and_impedance_high:"Висока вага та імпеданс",weight_high_and_impedance_low:"Висока вага, низький імпеданс",weight_low_and_impedance_high:"Низька вага, високий імпеданс"},ht={"weight: ":"Вага: ","impedance: ":"Імпеданс: ","height: ":"Зріст: ","age: ":"Вік: ","gender: ":"Стать: "},mt={male:"чоловік",female:"жінка",unavailable:"недоступно"},ut={bmi:"ІМТ",bmi_label:"Мітка ІМТ",visceral_fat:"Вісцеральний жир",body_fat:"Жир тіла",protein:"Білок",water:"Вода",muscle_mass:"М'язова маса",bone_mass:"Кісткова маса",weight:"Вага",ideal:"Ідеал",basal_metabolism:"Базальний метаболізм",body_type:"Тип тіла",metabolic_age:"Метаболічний вік"},gt={skinny:"Худий",balanced_skinny:"Збалансований худий",skinny_muscular:"Худий м'язистий",balanced:"Збалансований",balanced_muscular:"Збалансований м'язистий",lack_exercise:"Недостатня активність",thick_set:"Кремезний",obese:"Ожиріння",overweight:"Надмірна вага",underweight:"Недостатня вага",normal_or_healthy_weight:"Нормальна або здорова вага",slight_overweight:"Легка надмірна вага",moderate_obesity:"Помірне ожиріння",severe_obesity:"Серйозне ожиріння",massive_obesity:"Критичне ожиріння",unavailable:"недоступно"},pt={" years":" років"},wt={invalid_config:"Недійсна конфігурація",missing_entity:"Будь ласка, визначте сутність.",missing_entity_bodymiscale:"Будь ласка, визначте сутність bodymiscale."},yt={configuration:"Конфігурація",customization:"Налаштування",entity:"Будь ласка, виберіть обліковий запис на вазі (обов'язково)!",image:"Фонове зображення (необов'язково)",icons_body:"Шлях до іконок (наприклад, /local/images/bodyscoreIcon)",model:"У вас є сенсор імпедансу?",model1:"Увімкніть цю функцію для точних вимірювань складу тіла.",model_aria_label_on:"Увімкнути імпеданс",model_aria_label_off:"Вимкнути імпеданс",unit:"Конвертувати кг у фунти",unit_aria_label_on:"Увімкнути конвертацію",unit_aria_label_off:"Вимкнути конвертацію",theme:"Налаштуйте тему, яку ви використовуєте.",theme_aria_label_on:"Увімкнути світлу тему",theme_aria_label_off:"Вимкнути темну тему",show_name:"Показувати ім'я облікового запису як заголовок?",show_name_aria_label_on:"Увімкнути відображення імені",show_name_aria_label_off:"Вимкнути відображення імені",show_states:"Показувати стан?",show_states_aria_label_on:"Увімкнути відображення стану",show_states_aria_label_off:"Вимкнути відображення стану",show_attributes:"Показувати особисті основні дані (вгорі праворуч)?",show_attributes_aria_label_on:"Увімкнути відображення атрибутів",show_attributes_aria_label_off:"Вимкнути відображення атрибутів",show_always_details:"Завжди показувати деталі",show_always_details_aria_label_on:"Увімкнути детальний перегляд за замовчуванням",show_always_details_aria_label_off:"Вимкнути детальний перегляд за замовчуванням",show_toolbar:"Показувати додаткові опції?",show_toolbar_aria_label_on:"Увімкнути відображення додаткових опцій",show_toolbar_aria_label_off:"Вимкнути відображення додаткових опцій",show_body:"Пропонувати додаткові вимірювання",show_body1:"(нижня частина - іконка стрілки вниз покаже їх)?",show_body_aria_label_on:"Увімкнути відображення показників тіла",show_body_aria_label_off:"Вимкнути відображення показників тіла",show_buttons:"Дозволити перемикання облікових записів?",show_buttons_aria_label_on:"Увімкнути відображення кнопок",show_buttons_aria_label_off:"Вимкнути відображення кнопок",header_options:"1. Опції заголовка картки",body_options:"2. Додаткові опції картки",code_only_note:"УВАГА: Додаткові опції доступні лише в редакторі коду."},ft={from:"Від",icon_position:"Позиція іконки",label_below:"Мітка знизу",left:"Ліворуч",minmax_position:"Позиція мін/макс",name_position:"Позиція імені",off:"Вимк.",on:"Увімк.",right:"Праворуч",severity_generator_help:"Посилання на довідку з налаштування серйозності",showabovelabels:"Показувати мітки зверху",showbelowlabels:"Показувати мітки знизу",to:"До",value_position:"Позиція значення"},vt={color:"Колір",disabled:"Вимкнено",red:"Червоний",pink:"Рожевий",purple:"Фіолетовий","deep-purple":"Темно-фіолетовий",indigo:"Індиго",blue:"Синій","light-blue":"Світло-синій",cyan:"Блакитний",teal:"Синьо-зелений",green:"Зелений","light-green":"Світло-зелений",lime:"Лайм",yellow:"Жовтий",amber:"Бурштиновий",orange:"Помаранчевий",orangered:"Червонувато-помаранчевий","deep-orange":"Темно-помаранчевий",brown:"Коричневий","light-grey":"Світло-сірий",grey:"Сірий","dark-grey":"Темно-сірий","blue-grey":"Сіро-блакитний",darkgreen:"Темно-зелений",royalblue:"Королівський синій",black:"Чорний",white:"Білий"},kt={common:_t,states:bt,attributes:ht,attributes_value:mt,body:ut,body_value:gt,unit:pt,error:wt,editor:yt,editor_body:ft,color_select:vt},zt={version:"Version",name:"Bodymiscale Card",description:"The bodymiscale card shows you your weight wise / related body status.",not_available:"Bodymiscale is not available",toggle_power:"More details like BMI kCal show / hide"},$t={ok:"MEASUREMENT: OK",unknown:"STATE: unknown",problem:"Problem",none:"None",weight_unavailable:"Weight unavailable",impedance_unavailable:"Impedance unavailable",weight_unavailable_and_impedance_unavailable:"Weight and impedance unavailable",weight_low:"Weight low",impedance_low:"Impedance low",weight_low_and_impedance_low:"Weight and impedance low",impedance_low_and_weight_low:"Impedance and weight low",weight_high:"Weight high",impedance_high:"Impedance high",weight_high_and_impedance_high:"Weight and impedance high",weight_high_and_impedance_low:"Weight high, impedance low",weight_low_and_impedance_high:"Weight low, impedance high"},xt={"weight: ":"Weight: ","impedance: ":"Impedance: ","height: ":"Height: ","age: ":"Age: ","gender: ":"Gender: "},At={male:"male",female:"female",unavailable:"unavailable"},Mt={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Mỡ nội tạng",body_fat:"Mỡ cơ thể",protein:"Chất đạm",water:"Nước",muscle_mass:"Khối lượng cơ",bone_mass:"Khối lượng xương",weight:"Cân nặng",ideal:"Lý tưởng",basal_metabolism:"Trao đổi chất cơ bản",body_type:"Kiểu cơ thể",metabolic_age:"Tuổi chuyển hóa"},Pt={skinny:"Gầy",balanced_skinny:"Cân đối - gầy",skinny_muscular:"Gầy - cơ bắp",balanced:"Cân bằng",balanced_muscular:"Cơ bắp cân bằng",lack_exercise:"Thiếu tập thể dục",thick_set:"Thick-set",obese:"Béo phì",overweight:"Thừa cân",underweight:"Thiếu cân",normal_or_healthy_weight:"Cân nặng bình thường hoặc khỏe mạnh",slight_overweight:"Hơi thừa cân",moderate_obesity:"Béo phì vừa phải",severe_obesity:"Béo phì nghiêm trọng",massive_obesity:"Massive obesity",unavailable:"Không có sẵn"},jt={" years":" years"},Ct={missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},St={entity:"Please select an account on the scale (required)!",image:"Background image (optional)",icons_body:"Đường dẫn biểu tượng (ví dụ: /local/images/bodyscoreIcon)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",theme:"Configure the theme you use.",theme_aria_label_on:"Toggle theme light on",theme_aria_label_off:"Toggle theme dark off",show_name:"Show the name of the account as title?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right)?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those)?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},It={from:"Từ",icon_position:"Vị trí biểu tượng",label_below:"Nhãn bên dưới",left:"Bên trái",minmax_position:"Vị trí Min/Max",name_position:"Vị trí tên",off:"Tắt",on:"Bật",right:"Bên phải",severity_generator_help:"Liên kết đến Trợ giúp về Mức độ nghiêm trọng",showabovelabels:"Hiển thị nhãn phía trên",showbelowlabels:"Hiển thị nhãn phía dưới",target:"Mục tiêu",to:"Đến",value_position:"Vị trí giá trị"},Ot={color:"Màu sắc",disabled:"Tắt",red:"Đỏ",pink:"Hồng",purple:"Tím","deep-purple":"Tím đậm",indigo:"Chàm",blue:"Xanh dương","light-blue":"Xanh nhạt",cyan:"Cyan",teal:"Lục lam",green:"Xanh lá","light-green":"Xanh lá nhạt",lime:"Chanh",yellow:"Vàng",amber:"Hổ phách",orange:"Cam",orangered:"Cam đỏ","deep-orange":"Cam đậm",brown:"Nâu","light-grey":"Xám nhạt",grey:"Xám","dark-grey":"Xám đậm","blue-grey":"Xám xanh dương",darkgreen:"Xanh lá đậm",royalblue:"Xanh dương hoàng gia",black:"Đen",white:"Trắng"},Tt={balanced:"Cân bằng",good:"Tốt",increased:"Tăng",insufficient:"Không đủ",high:"Cao",low:"Thấp",normal:"Bình thường",obese:"Béo phì",objective_achieved:"Mục tiêu đạt được",objective_not_achieved:"Mục tiêu chưa đạt",overweight:"Thừa cân",underweight:"Thiếu cân",very_high:"Rất cao",very_low:"Rất thấp"},Bt={common:zt,states:$t,attributes:xt,attributes_value:At,body:Mt,body_value:Pt,unit:jt,error:Ct,editor:St,editor_body:It,color_select:Ot,label_below:Tt},Et={version:"版本",name:"米家体脂称卡片",description:"米家体脂称卡片会显示你的体重以及相关身体状态",not_available:"Bodymiscale 不可用",toggle_power:"显示/隐藏更多详情,例如: BMI, kCal"},Nt={ok:"测量: OK",unknown:"状态: 未知",problem:"故障",none:"无",weight_unavailable:"体重不可用",impedance_unavailable:"阻抗不可用",weight_unavailable_and_impedance_unavailable:"体重和阻抗均不可用",weight_low:"体重过轻",impedance_low:"阻抗低",weight_low_and_impedance_low:"体重和阻抗均偏低",impedance_low_and_weight_low:"阻抗和体重均偏低",weight_high:"体重过重",impedance_high:"阻抗高",weight_high_and_impedance_high:"体重和阻抗均偏高",weight_high_and_impedance_low:"体重过重, 阻抗低",weight_low_and_impedance_high:"体重过轻, 阻抗高"},Dt={"weight: ":"重量: ","impedance: ":"阻抗: ","height: ":"身高: ","age: ":"年龄: ","gender: ":"性别: "},Vt={male:"男",female:"女",unavailable:"不可用"},qt={bmi:"BMI",bmi_label:"BMI 标签",visceral_fat:"内脏脂肪",body_fat:"体脂",protein:"蛋白质",water:"水分",muscle_mass:"肌肉量",bone_mass:"骨量",weight:"体重",ideal:"理想体重",basal_metabolism:"基本代谢",body_type:"身体类型",metabolic_age:"代谢年龄"},Lt={skinny:"偏瘦",balanced_skinny:"健美型",skinny_muscular:"偏瘦肌肉",balanced:"标准型",balanced_muscular:"标准肌肉",lack_exercise:"缺乏运动",thick_set:"结实型偏胖",obese:"偏胖型",overweight:"肥胖型",underweight:"过轻",normal_or_healthy_weight:"正常或健康",slight_overweight:"轻微超重",moderate_obesity:"中度肥胖",severe_obesity:"过度肥胖",massive_obesity:"严重肥胖",unavailable:"不可用"},Gt={" years":" 岁"},Ut={missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},Rt={entity:"Please select an account on the scale (required) !",image:"Background image (optional)",icons_body:"图标路径 (例如：/local/images/bodyscoreIcon)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",show_name:"Show the name of the account as title ?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State ?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right) ?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options ?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those) ?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch ?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},Wt={from:"从",icon_position:"图标位置",label_below:"下方标签",left:"左侧",minmax_position:"最小/最大位置",name_position:"名称位置",off:"关闭",on:"开启",right:"右侧",severity_generator_help:"链接到严重程度帮助",showabovelabels:"显示上方标签",showbelowlabels:"显示下方标签",target:"目标",to:"到",value_position:"值的位置"},Kt={color:"颜色",disabled:"禁用",red:"红色",pink:"粉色",purple:"紫色","deep-purple":"深紫色",indigo:"靛蓝",blue:"蓝色","light-blue":"浅蓝色",cyan:"青色",teal:"蓝绿色",green:"绿色","light-green":"浅绿色",lime:"石灰色",yellow:"黄色",amber:"琥珀色",orange:"橙色",orangered:"红橙色","deep-orange":"深橙色",brown:"棕色","light-grey":"浅灰色",grey:"灰色","dark-grey":"深灰色","blue-grey":"蓝灰色",darkgreen:"深绿色",royalblue:"皇家蓝",black:"黑色",white:"白色"},Ht={balanced:"标准型",good:"好",increased:"增加",insufficient:"不足",high:"高",low:"低",normal:"正常",obese:"偏胖型",objective_achieved:"目标达成",objective_not_achieved:"目标未达成",overweight:"肥胖型",underweight:"过轻",very_high:"非常高",very_low:"非常低"},Zt={common:Et,states:Nt,attributes:Dt,attributes_value:Vt,body:qt,body_value:Lt,unit:Gt,error:Ut,editor:Rt,editor_body:Wt,color_select:Kt,label_below:Ht},Ft={version:"版本",name:"米家體脂計卡片",description:"米家體脂計卡片會顯示你的體重以及相關身體狀態",not_available:"Bodymiscale 不可用",toggle_power:"顯示/隱藏更多詳情,例如: BMI, kCal"},Xt={ok:"測量: OK",unknown:"狀態: 未知",problem:"故障",none:"無",weight_unavailable:"體重不可用",impedance_unavailable:"阻抗不可用",weight_unavailable_and_impedance_unavailable:"體重和阻抗均不可用",weight_low:"體重過輕",impedance_low:"阻抗低",weight_low_and_impedance_low:"體重和阻抗均偏低",impedance_low_and_weight_low:"阻抗和體重均偏低",weight_high:"體重過重",impedance_high:"阻抗高",weight_high_and_impedance_high:"體重和阻抗均偏高",weight_high_and_impedance_low:"體重過重, 阻抗低",weight_low_and_impedance_high:"體重過輕, 阻抗高"},Jt={"weight: ":"重量: ","impedance: ":"阻抗: ","height: ":"身高: ","age: ":"年齡: ","gender: ":"性別: "},Yt={male:"男",female:"女",unavailable:"不可用"},Qt={bmi:"BMI",bmi_label:"BMI 標籤",visceral_fat:"內臟脂肪",body_fat:"體脂",protein:"蛋白質",water:"水分",muscle_mass:"肌肉量",bone_mass:"骨量",weight:"體重",ideal:"理想體重",basal_metabolism:"基本代謝",body_type:"身體類型",metabolic_age:"代謝年齡"},el={skinny:"偏瘦",balanced_skinny:"健美型",skinny_muscular:"偏瘦肌肉",balanced:"標準型",balanced_muscular:"標準肌肉",lack_exercise:"缺乏運動",thick_set:"結實型偏胖",obese:"偏胖型",overweight:"肥胖型",underweight:"過輕",normal_or_healthy_weight:"正常或健康",slight_overweight:"輕微超重",moderate_obesity:"中度肥胖",severe_obesity:"過度肥胖",massive_obesity:"嚴重肥胖",unavailable:"不可用"},al={" years":" 歲"},ol={missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},il={entity:"Please select an account on the scale (required) !",image:"Background image (optional)",icons_body:"圖示路徑 (例如：/local/images/bodyscoreIcon)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",show_name:"Show the name of the account as title ?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State ?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right) ?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options ?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those) ?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch ?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},tl={from:"從",icon_position:"圖示位置",label_below:"下方標籤",left:"左側",minmax_position:"最小/最大位置",name_position:"名稱位置",off:"關閉",on:"開啟",right:"右側",severity_generator_help:"連結至嚴重程度說明",showabovelabels:"顯示上方標籤",showbelowlabels:"顯示下方標籤",target:"目標",to:"到",value_position:"數值位置"},ll={color:"顏色",disabled:"禁用",red:"紅色",pink:"粉色",purple:"紫色","deep-purple":"深紫色",indigo:"靛藍",blue:"藍色","light-blue":"淺藍色",cyan:"青色",teal:"藍綠色",green:"綠色","light-green":"淺綠色",lime:"酸橙色",yellow:"黃色",amber:"琥珀色",orange:"橙色",orangered:"紅橙色","deep-orange":"深橙色",brown:"棕色","light-grey":"淺灰色",grey:"灰色","dark-grey":"深灰色","blue-grey":"藍灰色",darkgreen:"深綠色",royalblue:"皇家藍",black:"黑色",white:"白色"},nl={balanced:"標準型",good:"好",increased:"增加",insufficient:"不足",high:"高",low:"低",normal:"正常",obese:"偏胖型",objective_achieved:"目標達成",objective_not_achieved:"目標未達成",overweight:"肥胖型",underweight:"過輕",very_high:"非常高",very_low:"非常低"},rl={common:Ft,states:Xt,attributes:Jt,attributes_value:Yt,body:Qt,body_value:el,unit:al,error:ol,editor:il,editor_body:tl,color_select:ll,label_below:nl};const sl={cs:qe,de:ea,en:ma,es:Pa,ca:Object.freeze({__proto__:null,attributes:Sa,attributes_value:Ia,body:Oa,body_value:Ta,color_select:Va,common:ja,default:La,editor:Na,editor_body:Da,error:Ea,label_below:qa,states:Ca,unit:Ba}),fr:Object.freeze({__proto__:null,attributes:Ra,attributes_value:Wa,body:Ka,body_value:Ha,color_select:Ya,common:Ga,default:eo,editor:Xa,editor_body:Ja,error:Fa,label_below:Qa,states:Ua,unit:Za}),hu:Object.freeze({__proto__:null,attributes:io,attributes_value:to,body:lo,body_value:no,color_select:bo,common:ao,default:mo,editor:co,editor_body:_o,error:so,label_below:ho,states:oo,unit:ro}),it:Object.freeze({__proto__:null,attributes:po,attributes_value:wo,body:yo,body_value:fo,color_select:xo,common:uo,default:Mo,editor:zo,editor_body:$o,error:ko,label_below:Ao,states:go,unit:vo}),ja:Object.freeze({__proto__:null,attributes:Co,attributes_value:So,body:Io,body_value:Oo,color_select:Do,common:Po,default:qo,editor:Eo,editor_body:No,error:Bo,label_below:Vo,states:jo,unit:To}),nl:Object.freeze({__proto__:null,attributes:Uo,attributes_value:Ro,body:Wo,body_value:Ko,color_select:Jo,common:Lo,default:Qo,editor:Fo,editor_body:Xo,error:Zo,label_below:Yo,states:Go,unit:Ho}),pl:Object.freeze({__proto__:null,attributes:oi,attributes_value:ii,body:ti,body_value:li,color_select:ci,common:ei,default:bi,editor:si,editor_body:di,error:ri,label_below:_i,states:ai,unit:ni}),pt:Object.freeze({__proto__:null,attributes:ui,attributes_value:gi,body:pi,body_value:wi,color_select:zi,common:hi,default:xi,editor:vi,editor_body:ki,error:fi,label_below:$i,states:mi,unit:yi}),pt_BR:Object.freeze({__proto__:null,attributes:Pi,attributes_value:ji,body:Ci,body_value:Si,color_select:Ei,common:Ai,default:Di,editor:Ti,editor_body:Bi,error:Oi,label_below:Ni,states:Mi,unit:Ii}),ro:Object.freeze({__proto__:null,attributes:Li,attributes_value:Gi,body:Ui,body_value:Ri,color_select:Fi,common:Vi,default:Ji,editor:Hi,editor_body:Zi,error:Ki,label_below:Xi,states:qi,unit:Wi}),ru:Object.freeze({__proto__:null,attributes:et,attributes_value:at,body:ot,body_value:it,color_select:st,common:Yi,default:ct,editor:nt,editor_body:rt,error:lt,label_below:dt,states:Qi,unit:tt}),uk:Object.freeze({__proto__:null,attributes:ht,attributes_value:mt,body:ut,body_value:gt,color_select:vt,common:_t,default:kt,editor:yt,editor_body:ft,error:wt,states:bt,unit:pt}),vi:Object.freeze({__proto__:null,attributes:xt,attributes_value:At,body:Mt,body_value:Pt,color_select:Ot,common:zt,default:Bt,editor:St,editor_body:It,error:Ct,label_below:Tt,states:$t,unit:jt}),zh_Hans:Object.freeze({__proto__:null,attributes:Dt,attributes_value:Vt,body:qt,body_value:Lt,color_select:Kt,common:Et,default:Zt,editor:Rt,editor_body:Wt,error:Ut,label_below:Ht,states:Nt,unit:Gt}),zh_Hant:Object.freeze({__proto__:null,attributes:Jt,attributes_value:Yt,body:Qt,body_value:el,color_select:ll,common:Ft,default:rl,editor:il,editor_body:tl,error:ol,label_below:nl,states:Xt,unit:al})},dl="en";function cl(e,a,o){var i;const[t,l]=e.toLowerCase().split(".");let n=null;try{n=JSON.parse(null!==(i=localStorage.getItem("selectedLanguage"))&&void 0!==i?i:"")}catch(e){console.warn(e),n=localStorage.getItem("selectedLanguage")}const r=(n||navigator.language.split("-")[0]||dl).replace(/['"]+/g,"").replace("-","_");let s;try{s=sl[r][t][l]}catch(e){console.warn(e),s=sl[dl][t][l]}if(void 0===s&&(s=sl[dl][t][l]),void 0!==s)return s}function _l(e,a){void 0===a&&(a={});var o=a.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===o&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var bl=n`:host {
  --bc-background: var(
    --ha-card-background,
    var(--card-background-color, white)
  );
  --bc-primary-text-color: var(--primary-text-color, #000);
  --bc-secondary-text-color: var(--secondary-text-color, #555);
  --bc-icon-color: var(--secondary-text-color);
  --bc-toolbar-background: var(--bc-background);
  --bc-toolbar-text-color: var(--bc-secondary-text-color);
  --bc-toolbar-icon-color: var(--bc-secondary-text-color);
  --bc-divider-color: var(--entities-divider-color, var(--divider-color, #ccc));
  --bc-spacing: 5px;
  --ha-card-border-radius: 12px;
  --ha-icon-size: 24px;

  /* Couleurs spécifiques pour les éléments */
  --bc-bar-height: 24px;
  --bc-bar-background: #e0e0e0;
  --bc-bar-current: #007bff; /* Couleur de la barre */
  --bc-bar-target: rgba(255, 255, 255, 0.4); /* Couleur pour la cible */
  --bc-bar-remaining: rgb(
    25.5,
    140.7,
    25.5
  ); /* Couleur pour la partie restante */
  --bc-bar-marker: red;
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
  background: var(--bc-background);
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
  margin: var(--bc-spacing) auto;
}

.bodymiscale-name {
  font-size: 20px;
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
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  max-height: 0;
}

#items[open] {
  transform: scaleY(1);
  opacity: 1;
  max-height: 500px;
}

.toolbar {
  background: var(--bc-toolbar-background);
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

.toolbar ha-icon-button {
  align-items: center;
  justify-content: center;
}

.fill-gap {
  flex-grow: 1;
  gap: 0px;
}

.toolbar ha-icon {
  width: var(--ha-icon-size);
  height: var(--ha-icon-size);
  fill: currentColor;
  margin: 0;
  font-size: 0px; /* Override font-size inheritance to fix icon alignment */
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
  margin-top: 0px;
  margin-bottom: 0px;
}

#score > :first-child {
  margin-top: 0px;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.value-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}

.name {
  text-align: left;
}

.minmax {
  font-size: 10px;
  color: var(--secondary-text-color);
}
.minmax .min, .minmax .max {
  color: var(--primary-text-color);
}

.bar-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.bar-inner {
  display: flex;
  height: 8px;
  width: 100%;
  background: lightgray;
  position: relative;
  border-radius: 8px;
  overflow: visible;
}

.bar-marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  background: var(--card-background-color, white);
  border: 3px solid var(--primary-color);
}

.bar-marker-wrapper {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.bar-marker-tooltip {
  position: absolute;
  top: 20px; /* en dessous du cercle */
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  background-color: var(--card-background-color, #fff);
  color: #000;
  color: var(--primary-text-color, #000);
  padding: 2px 6px;
  font-size: 10px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.bar-marker-wrapper:hover .bar-marker-tooltip,
.bar-marker-wrapper:focus-within .bar-marker-tooltip,
.bar-marker-wrapper:active .bar-marker-tooltip {
  opacity: 1;
}

.colorbar-segment {
  height: 100%;
  position: relative;
}

.segment-label-above {
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  top: -24px;
  left: 100%;
  transform: translateX(-50%);
}

.segment-label-below {
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-wrapper {
  max-height: 40vh; ; /* Par défaut pour les petits écrans */
  overflow-y: auto;
  padding-right: 0.5rem; /* espace pour la scrollbar */
  scroll-behavior: smooth;
}

/* Scrollbar style */
.scroll-wrapper::-webkit-scrollbar {
  width: 6px;
}
.scroll-wrapper::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 4px;
}

/* Pour Firefox */
.scroll-wrapper {
  scrollbar-width: thin;
  scrollbar-color: rgba(100, 100, 100, 0.3) transparent;
}

/* Styles pour les écrans jusqu'à 600px (téléphones) */
@media (max-width: 600px) {
  .scroll-wrapper {
    max-height: 50vh;
  }
}

@media (min-height: 600px) { /* Pour les écrans plus hauts que 600px */
  .scroll-wrapper {
    max-height: 300px; /* Utiliser une hauteur fixe sur les écrans plus grands */
  }
}

/* Dark mode support complémentaire */
@media (prefers-color-scheme: dark) {
  :host {
    --bc-bar-background: #444;
    --bc-divider-color: #555;
  }
}

/* Mobile optimisation */
@media (max-width: 400px) {
  .bodymiscale-name {
    font-size: 16px;
  }

  .segment-label {
    font-size: 8px;
  }
}`;_l(bl);const hl={disabled:"null",red:"#f44336",pink:"#e91e63",purple:"#926bc7","deep-purple":"#6e41ab",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caF50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800",orangered:"#ff4500","deep-orange":"#ff6f22",brown:"#795548","light-grey":"#bdbdbd",grey:"#9e9e9e","dark-grey":"#606060","blue-grey":"#607d8b",darkgreen:"#006400",royalblue:"#4169e1",black:"#000000",white:"#FFFFFF"};function ml(e){return hl[e]?hl[e]:hl.disabled}new Set(Object.keys(hl));let ul={convertkgtolb:e=>Math.round(2.20462*Number(e)*10)/10};const gl={status:{key:"state",icon:"mdi:scale-bathroom"},problem:{key:"problem",icon:"mdi:alert"},last_measurement_time:{key:"last_measurement_time",icon:"mdi:calendar-clock"}},pl={weight:{key:"weight",label:cl("attributes.weight: "),unit:" kg"},impedance:{key:"impedance",label:cl("attributes.impedance: "),unit:" ohm",impedance_required:!0},height:{key:"height",label:cl("attributes.height: "),unit:" cm"},age:{key:"age",label:cl("attributes.age: "),unit:cl("unit. years")},gender:{key:"gender",label:cl("attributes.gender: ")}},wl={weight:{key:"weight",label:cl("attributes.weight: "),unit:" lbs",compute:ul.convertkgtolb},impedance:{key:"impedance",label:cl("attributes.impedance: "),unit:" ohm",impedance_required:!0},height:{key:"height",label:cl("attributes.height: "),unit:" cm"},age:{key:"age",label:cl("attributes.age: "),unit:cl("unit. years")},gender:{key:"gender",label:cl("attributes.gender: ")}},yl={basal_metabolism:{key:"basal_metabolism",label:cl("body.basal_metabolism"),icon:"basal_metabolism.png",unit:" kcal",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:0,to:1549,color:"red",label:"objective_not_achieved"},{from:1549,to:3e3,color:"green",label:"objective_achieved"}],impedance_required:!1},bmi:{key:"bmi",label:cl("body.bmi"),icon:"bmi.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:12,to:18.5,color:"blue",label:"low"},{from:18.5,to:25,color:"green",label:"normal"},{from:25,to:30,color:"orange",label:"high"},{from:30,to:36.5,color:"red",label:"very_high"}],impedance_required:!1},bmi_label:{key:"bmi_label",label:cl("body.bmi_label"),icon:"body_type.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:null,showbelowlabels:null,severity:null,impedance_required:!1},body_fat:{key:"body_fat",label:cl("body.body_fat"),icon:"body_fat.png",unit:" %",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:5,to:12,color:"royalblue",label:"very_low"},{from:12,to:18,color:"blue",label:"low"},{from:18,to:23,color:"green",label:"normal"},{from:23,to:28,color:"orange",label:"increased"},{from:28,to:35,color:"red",label:"high"}],impedance_required:!0},body_type:{key:"body_type",label:cl("body.body_type"),icon:"body_type.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:null,showbelowlabels:null,severity:null,impedance_required:!0},bone_mass:{key:"bone_mass",label:cl("body.bone_mass"),icon:"bone_mass.png",unit:" kg",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:0,to:2,color:"red",label:"insufficient"},{from:2,to:4.2,color:"green",label:"normal"},{from:4.2,to:6.4,color:"blue",label:"good"}],impedance_required:!0},ideal:{key:"ideal",label:cl("body.ideal"),icon:"ideal.png",unit:" kg",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:39.3,to:57.3,color:"blue",label:"underweight"},{from:57.3,to:75.3,color:"green",label:"balanced"},{from:75.3,to:93.3,color:"orange",label:"overweight"},{from:93.3,to:111.3,color:"red",label:"obese"}],impedance_required:!1},metabolic_age:{key:"metabolic_age",label:cl("body.metabolic_age"),icon:"metabolic_age.png",unit:cl("unit. years"),color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:null,showbelowlabels:null,severity:null,impedance_required:!0},muscle_mass:{key:"muscle_mass",label:cl("body.muscle_mass"),icon:"muscle_mass.png",unit:" kg",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:39.3,to:49.4,color:"red",label:"insufficient"},{from:49.4,to:59.5,color:"green",label:"normal"},{from:59.5,to:69.6,color:"blue",label:"good"}],impedance_required:!0},protein:{key:"protein",label:cl("body.protein"),icon:"protein.png",unit:" %",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:11,to:16,color:"red",label:"insufficient"},{from:16,to:20,color:"green",label:"normal"},{from:20,to:24,color:"blue",label:"good"}],impedance_required:!0},visceral_fat:{key:"visceral_fat",label:cl("body.visceral_fat"),icon:"visceral_fat.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:5,to:10,color:"green",label:"normal"},{from:10,to:15,color:"orange",label:"high"},{from:15,to:20,color:"red",label:"very_high"}],impedance_required:!1},water:{key:"water",label:cl("body.water"),icon:"water.png",unit:" %",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:45,to:55,color:"red",label:"insufficient"},{from:55,to:65.1,color:"green",label:"normal"},{from:65.1,to:75,color:"blue",label:"good"}],impedance_required:!0},weight:{key:"weight",label:cl("body.weight"),icon:"ideal.png",unit:" kg",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:39.3,to:57.3,color:"blue",label:"underweight"},{from:57.3,to:75.3,color:"green",label:"balanced"},{from:75.3,to:93.3,color:"orange",label:"overweight"},{from:93.3,to:111.3,color:"red",label:"obese"}],impedance_required:!1}},fl={basal_metabolism:{key:"basal_metabolism",label:cl("body.basal_metabolism"),icon:"basal_metabolism.png",unit:" kcal",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:0,to:1549,color:"red",label:"objective_not_achieved"},{from:1549,to:3e3,color:"green",label:"objective_achieved"}],impedance_required:!1},bmi:{key:"bmi",label:cl("body.bmi"),icon:"bmi.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:12,to:18.5,color:"blue",label:"low"},{from:18.5,to:25,color:"green",label:"normal"},{from:25,to:30,color:"orange",label:"high"},{from:30,to:36.5,color:"red",label:"very_high"}],impedance_required:!1},bmi_label:{key:"bmi_label",label:cl("body.bmi_label"),icon:"body_type.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:null,showbelowlabels:null,severity:null,impedance_required:!1},body_fat:{key:"body_fat",label:cl("body.body_fat"),icon:"body_fat.png",unit:" %",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:5,to:12,color:"royalblue",label:"very_low"},{from:12,to:18,color:"blue",label:"low"},{from:18,to:23,color:"green",label:"normal"},{from:23,to:28,color:"orange",label:"increased"},{from:28,to:35,color:"red",label:"high"}],impedance_required:!0},body_type:{key:"body_type",label:cl("body.body_type"),icon:"body_type.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:null,showbelowlabels:null,severity:null,impedance_required:!0},bone_mass:{key:"bone_mass",label:cl("body.bone_mass"),icon:"bone_mass.png",unit:" lbs",compute:ul.convertkgtolb,color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:0,to:4.41,color:"red",label:"insufficient"},{from:4.41,to:9.26,color:"green",label:"normal"},{from:9.26,to:14.11,color:"blue",label:"good"}],impedance_required:!0},ideal:{key:"ideal",label:cl("body.ideal"),icon:"ideal.png",unit:" lbs",compute:ul.convertkgtolb,color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:86.64,to:126.34,color:"blue",label:"underweight"},{from:126.34,to:166.04,color:"green",label:"balanced"},{from:166.04,to:205.75,color:"orange",label:"overweight"},{from:205.75,to:245.45,color:"red",label:"obese"}],impedance_required:!1},metabolic_age:{key:"metabolic_age",label:cl("body.metabolic_age"),icon:"metabolic_age.png",unit:cl("unit. years"),color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:null,showbelowlabels:null,severity:null,impedance_required:!0},muscle_mass:{key:"muscle_mass",label:cl("body.muscle_mass"),icon:"muscle_mass.png",unit:" lbs",compute:ul.convertkgtolb,color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:86.64,to:108.97,color:"red",label:"insufficient"},{from:108.97,to:131.17,color:"green",label:"normal"},{from:131.17,to:153.38,color:"blue",label:"good"}],impedance_required:!0},protein:{key:"protein",label:cl("body.protein"),icon:"protein.png",unit:" %",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:11,to:16,color:"red",label:"insufficient"},{from:16,to:20,color:"green",label:"normal"},{from:20,to:24,color:"blue",label:"good"}],impedance_required:!0},visceral_fat:{key:"visceral_fat",label:cl("body.visceral_fat"),icon:"visceral_fat.png",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:5,to:10,color:"green",label:"normal"},{from:10,to:15,color:"orange",label:"high"},{from:15,to:20,color:"red",label:"very_high"}],impedance_required:!1},water:{key:"water",label:cl("body.water"),icon:"water.png",unit:" %",color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:45,to:55,color:"red",label:"insufficient"},{from:55,to:65.1,color:"green",label:"normal"},{from:65.1,to:75,color:"blue",label:"good"}],impedance_required:!0},weight:{key:"weight",label:cl("body.weight"),icon:"ideal.png",unit:" lbs",compute:ul.convertkgtolb,color:"var(--score-card-color, var(--ha-card-background))",positions:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:"true",showbelowlabels:"true",severity:[{from:86.64,to:126.34,color:"blue",label:"underweight"},{from:126.34,to:166.04,color:"green",label:"balanced"},{from:166.04,to:205.75,color:"orange",label:"overweight"},{from:205.75,to:245.45,color:"red",label:"obese"}],impedance_required:!1}},vl={user1:{show:!1,label:"User1",icon:"mdi:alpha-u-circle",entity:""},user2:{show:!1,label:"User2",icon:"mdi:alpha-u-circle",entity:""},user3:{show:!1,label:"User3",icon:"mdi:alpha-u-circle",entity:""},user4:{show:!1,label:"User4",icon:"mdi:alpha-u-circle",entity:""},user5:{show:!1,label:"User5",icon:"mdi:alpha-u-circle",entity:""}},kl={model:!1,unit:!1,theme:!0,show_name:!0,show_states:!0,show_attributes:!0,show_always_details:!1,show_toolbar:!0,show_body:!0,show_buttons:!1,attributes:{impedance:{key:"impedance",impedance_required:!0}},body:{basal_metabolism:{key:"basal_metabolism",severity:[{from:0,to:1549,color:"red",label:"objective_not_achieved"},{from:1549,to:3e3,color:"green",label:"objective_achieved"}],impedance_required:!1},bmi:{key:"bmi",severity:[{from:12,to:18.5,color:"blue",label:"low"},{from:18.5,to:25,color:"green",label:"normal"},{from:25,to:30,color:"orange",label:"high"},{from:30,to:36.5,color:"red",label:"very_high"}],impedance_required:!1},bmi_label:{key:"bmi_label",impedance_required:!1},body_fat:{key:"body_fat",severity:[{from:5,to:12,color:"royalblue",label:"very_low"},{from:12,to:18,color:"blue",label:"low"},{from:18,to:23,color:"green",label:"normal"},{from:23,to:28,color:"orange",label:"increased"},{from:28,to:35,color:"red",label:"high"}],impedance_required:!0},body_type:{key:"body_type",impedance_required:!0},bone_mass:{key:"bone_mass",severity:[{from:0,to:2,color:"red",label:"insufficient"},{from:2,to:4.2,color:"green",label:"normal"},{from:4.2,to:6.4,color:"blue",label:"good"}],impedance_required:!0},ideal:{key:"ideal",severity:[{from:39.3,to:57.3,color:"blue",label:"underweight"},{from:57.3,to:75.3,color:"green",label:"balanced"},{from:75.3,to:93.3,color:"orange",label:"overweight"},{from:93.3,to:111.3,color:"red",label:"obese"}],impedance_required:!1},metabolic_age:{key:"metabolic_age",impedance_required:!0},muscle_mass:{key:"muscle_mass",severity:[{from:39.3,to:49.4,color:"red",label:"insufficient"},{from:49.4,to:59.5,color:"green",label:"normal"},{from:59.5,to:69.6,color:"blue",label:"good"}],impedance_required:!0},protein:{key:"protein",severity:[{from:11,to:16,color:"red",label:"insufficient"},{from:16,to:20,color:"green",label:"normal"},{from:20,to:24,color:"blue",label:"good"}],impedance_required:!0},visceral_fat:{key:"visceral_fat",severity:[{from:5,to:10,color:"green",label:"normal"},{from:10,to:15,color:"orange",label:"high"},{from:15,to:20,color:"red",label:"very_high"}],impedance_required:!1},water:{key:"water",severity:[{from:45,to:55,color:"red",label:"insufficient"},{from:55,to:65.1,color:"green",label:"normal"},{from:65.1,to:75,color:"blue",label:"good"}],impedance_required:!0},weight:{key:"weight",severity:[{from:39.3,to:57.3,color:"blue",label:"underweight"},{from:57.3,to:75.3,color:"green",label:"balanced"},{from:75.3,to:93.3,color:"orange",label:"overweight"},{from:93.3,to:111.3,color:"red",label:"obese"}],impedance_required:!1}}};function zl(e){const{image:a,theme:o,show_toolbar:i,show_body:t}=e;return{background:a?`\n          background-image: url('${a}');\n          color: white;\n          text-shadow: 0 0 10px black;\n          min-height: 220px;\n          ${i||t?"border-radius: 0;":"border-radius: var(--ha-card-border-radius, 12px);"}\n          overflow: hidden;\n        `:"",icon:`color: ${a?"white":"var(--state-icon-color)"};`,iconbody:`background-color: ${!1!==o?"var(--state-icon-color)":"white"};`}}console.info(`%c Body-miscale-card \n%c  ${cl("common.version")} 2025.8.0 `,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;");let $l=class extends ne{constructor(){super(...arguments),this.open=!1}static get styles(){return bl}static async getConfigElement(){return Promise.resolve().then(function(){return Ol}),document.createElement("body-miscale-card-editor")}static getStubConfig(e,a){const[o]=a.filter(e=>e.startsWith("bodymiscale"));return Object.assign(Object.assign({},kl),{entity:null!=o?o:""})}get entity(){return this.hass.states[this.config.entity]}setConfig(e){this.config=function(e){var a,o,i,t,l,n,r,s,d,c,_,b,h,m,u,g,p,w,y,f,v;if(!e)throw new Error(cl("error.invalid_config"));if(!e.entity)throw new Error(cl("error.missing_entity"));if("bodymiscale"!==e.entity.split(".")[0])throw new Error(cl("error.missing_entity_bodymiscale"));return{entity:null!==(a=e.entity)&&void 0!==a?a:"",image:null!==(o=e.image)&&void 0!==o?o:"",icons_body:null!==(i=e.icons_body)&&void 0!==i?i:"",model:null!==(t=e.model)&&void 0!==t&&t,impedance_required:null!==(l=e.impedance_required)&&void 0!==l&&l,unit:null!==(n=e.unit)&&void 0!==n&&n,theme:null===(r=e.theme)||void 0===r||r,show_name:null===(s=e.show_name)||void 0===s||s,show_states:null===(d=e.show_states)||void 0===d||d,show_attributes:null===(c=e.show_attributes)||void 0===c||c,show_always_details:null!==(_=e.show_always_details)&&void 0!==_&&_,show_toolbar:null===(b=e.show_toolbar)||void 0===b||b,show_body:null===(h=e.show_body)||void 0===h||h,show_buttons:null!==(m=e.show_buttons)&&void 0!==m&&m,states:xe(gl,e.states),attributes:e.unit?xe(wl,e.attributes):xe(pl,e.attributes),body:e.unit?xe(fl,e.body):xe(yl,e.body),buttons:!0===e.buttons?{}:xe(vl,e.buttons),styles:zl(e),open:null!==(u=e.open)&&void 0!==u&&u,stats:null!==(g=e.stats)&&void 0!==g?g:{},color:null!==(p=e.color)&&void 0!==p?p:void 0,positions:null!==(w=e.positions)&&void 0!==w?w:{icon:"left",name:"left",minmax:"off",value:"right"},showabovelabels:null!==(y=e.showabovelabels)&&void 0!==y?y:void 0,showbelowlabels:null!==(f=e.showbelowlabels)&&void 0!==f?f:void 0,severity:null!==(v=e.severity)&&void 0!==v?v:null}}(e)}getCardSize(){return this.config.show_name&&this.config.show_buttons?4:this.config.show_name||this.config.show_buttons?3:2}shouldShowBackground(){return!(""===this.config.image&&!1===this.config.show_states&&!1===this.config.show_attributes&&!0===this.config.show_always_details&&!0===this.config.show_body)}shouldUpdate(e){return function(e,a,o){if(a.has("config")||o)return!0;if(e.config.entity){var i=a.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}toggle(e){null==e||e.stopPropagation(),this.open=!this.open}customEvent(e){var a;(null===(a=e.detail)||void 0===a?void 0:a.fold_row)&&this.toggle(e)}toggleMenu(e){var a;const o=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector(`#bmc-menu-${e}`);o&&"open"in o&&(o.open=!o.open)}handleChange(e){this.hass&&(this.config=Object.assign(Object.assign({},this.config),{entity:e}),$e(this,"config-changed",{config:this.config}))}moreInfo(){var e;(null===(e=this.config)||void 0===e?void 0:e.entity)?$e(this,"hass-more-info",{entityId:this.config.entity}):console.warn("No entity defined in the config.")}renderName(e){return this.config.show_name?G`
      <div class="bodymiscale-name">${e.attributes.friendly_name}</div>
    `:R}renderState(e){var a,o,i,t,l;if(!this.config.show_states)return R;if(!this.hass||!(null===(a=this.config)||void 0===a?void 0:a.entity))return G`<div>${cl("state.default.unavailable")}</div>`;const n=null===(o=this.hass.states)||void 0===o?void 0:o[this.config.entity];if(!n)return G`<div>
        ${this.hass.localize("state.default.unavailable")}
      </div>`;const r=(null==e?void 0:e.key)&&n,s=r&&void 0!==(null===(i=n.attributes)||void 0===i?void 0:i[e.key]),d=r&&void 0!==n[e.key];let c=s?n.attributes[e.key]:d?n[e.key]:this.hass.localize("state.default.unavailable");if("last_measurement_time"===e.key&&"string"==typeof c)try{const e=new Date(c.replace(" ","T")),a=ge(e,this.hass.locale);c=`${a} ${ye(e,this.hass.locale)}`}catch(e){}const _="number"==typeof c?ke(c,this.hass.locale):c,b=cl(`states.${c}`)||_,h="ok"===n.state&&"mdi:alert"===e.icon?R:G` <div class="state-div">
            <div>${e.icon&&this.renderIcon(e,"default")}</div>
            <div class="state-label">
              ${null!==(t=e.label)&&void 0!==t?t:""}${b}${null!==(l=e.unit)&&void 0!==l?l:""}
            </div>
          </div>`;return`${e.key}_list`in n.attributes&&(s||d)?this.renderDropdown(h,e.key):h}renderAttribute(e){var a,o,i,t,l;if(!this.config.show_attributes)return R;if(!this.hass||!(null===(a=this.config)||void 0===a?void 0:a.entity))return G`<div>${cl("state.default.unavailable")}</div>`;const n=null===(o=this.hass.states)||void 0===o?void 0:o[this.config.entity];if(!n)return G`<div>
        ${this.hass.localize("state.default.unavailable")}
      </div>`;const r="function"==typeof e.compute?e.compute:e=>e,s=(null==e?void 0:e.key)&&n,d=s&&void 0!==(null===(i=n.attributes)||void 0===i?void 0:i[e.key]),c=s&&void 0!==n[e.key];let _=d?r(n.attributes[e.key]):c?r(n[e.key]):this.hass.localize("state.default.unavailable");if("last_measurement_time"===e.key&&"string"==typeof _)try{const e=new Date(_.replace(" ","T")),a=ge(e,this.hass.locale);_=`${a} ${ye(e,this.hass.locale)}`}catch(e){}const b="number"==typeof _?ke(_,this.hass.locale):_,h=cl(`attributes_value.${_}`)||b,m=G`<div>
      ${e.icon&&this.renderIcon(e,"default")}
      ${null!==(t=e.label)&&void 0!==t?t:""}${h}${null!==(l=e.unit)&&void 0!==l?l:""}
    </div>`;return`${e.key}_list`in n.attributes&&(d||c)?this.renderDropdown(m,e.key):m}renderBody(e){var a,o,i,t;if(!this.hass||!(null===(a=this.config)||void 0===a?void 0:a.entity))return R;const l=null===(o=this.hass.states)||void 0===o?void 0:o[this.config.entity];if(!l)return G`<div>${this.hass.localize("state.default.unavailable")}</div>`;const n=(null==e?void 0:e.key)&&l,r=n&&void 0!==(null===(i=l.attributes)||void 0===i?void 0:i[e.key]),s=n&&void 0!==l[e.key],d="function"==typeof e.compute?e.compute:e=>e,c=r?d(l.attributes[e.key]):s?d(l[e.key]):this.hass.localize("state.default.unavailable"),_="number"==typeof c?ke(c,this.hass.locale):c,b=this.getIconUrl(e.icon),h=e.icon?G`
          <ha-icon
            class="image"
            style="
              -webkit-mask-image: url('${b}');
              mask-image: url('${b}');
              -webkit-mask-size: 24px;
              mask-size: 24px;
              background-color: currentColor;
              ${(null===(t=this.config.styles)||void 0===t?void 0:t.iconbody)||""}
            "
          ></ha-icon>
        `:R,m=e.label?G`<div class="name">${e.label}</div>`:R,u="number"==typeof c?this.renderColorBarSegments(e,c,!1):R,g=u!==R,p=g?"bar-container":"bar-container compact",w=e.positions.icon,y=e.positions.name,f=e.positions.minmax,v=e.positions.value,k="off"!==w?h:R,z="off"!==y?m:R;let $=R,x=0,A=100;if("off"!==f&&e.severity){const a=this.getMinMaxFromSeverity(e.severity);x=a.min,A=a.max,$=G`
        <div class="minmax">
          ${cl("editor_body.minmax_label")}
          <span class="min">${x}</span>/<span class="max">${A}</span>
        </div>`}const M="off"!==v?G`<div class="value">${cl(`body_value.${c}`)||_}${e.unit||""}</div>`:R,P=["right"===w?k:R,"right"===y?z:R,"right"===f?$:R,"right"===v?M:R];return G`
    <div style="display: flex; flex-direction: column; padding: 0.4rem 0 0.4rem; ${g?"":"justify-content: center; align-items: center;"}">
      <div class="flex-container" style="${g?"justify-content: space-between; width: 100%;":"width: 100%;"}">
        <div style="display: flex; align-items: center; gap: 1rem;">
          ${["left"===w?k:R,"left"===y?z:R,"left"===f?$:R,"left"===v?M:R].filter(e=>e!==R)}
        </div>
        <div style="display: flex; align-items: center; gap: 1rem; ${g?"":"margin-left: auto;"}">
          ${P.filter(e=>e!==R)}
        </div>
      </div>
  
      ${g?G`
        <div class="${p}" style="margin-top: 1.5rem; min-height: 2rem;">
          ${u}
        </div>
      `:R}
    </div>
  `}getMinMaxFromSeverity(e){let a=1/0,o=-1/0;return e&&Array.isArray(e)&&e.forEach(e=>{const i=e.from,t=e.to;let l,n;if("number"==typeof i)l=i;else if("string"==typeof i&&"min"!==i){const e=parseFloat(i);isNaN(e)?"min"===i&&(l=-1/0):l=e}else"min"===i&&(l=-1/0);if("number"==typeof t)n=t;else if("string"==typeof t&&"max"!==t){const e=parseFloat(t);isNaN(e)?"max"===t&&(n=1/0):n=e}else"max"===t&&(n=1/0);void 0===l||isNaN(l)||(a=Math.min(a,l)),void 0===n||isNaN(n)||(o=Math.max(o,n))}),{min:a===1/0?0:a,max:o===-1/0?100:o}}_computePercent(e,a){if(!e||"number"!=typeof a)return 0;const o=e.max-e.min;return o<=0?0:(a-e.min)/o*100}renderColorBarSegments(e,a,o=!0){const{min:i,max:t}=this.getMinMaxFromSeverity(e.severity||[]),l=t-i;if(!e.severity||!Array.isArray(e.severity)||l<=0)return R;const n=e.severity.filter(e=>"disabled"!==e.color&&null!==e.from&&null!==e.to&&void 0!==e.color);if(0===n.length)return R;const r=n.map((a,o)=>{const r=parseFloat(a.from)||i,s=parseFloat(a.to)||t,d=(s-r)/l*100,c=ml(a.color)||"gray",_="false"!==e.showabovelabels,b="false"!==e.showbelowlabels,h=_&&o!==n.length-1?G`<div class="segment-label-above" style="color: ${c};">${ke(s,this.hass.locale)}${e.unit||""}</div>`:R,m=b&&a.label?G`<div class="segment-label-below" style="color: ${c};">${cl(`label_below.${a.label}`)||a.label||""}</div>`:R;return G`
        <div class="colorbar-segment" style="width: ${d}%; background-color: ${c}; border-radius: ${0===o?"4px 0 0 4px":o===n.length-1?"0 4px 4px 0":"0"};">
          ${h}
          ${m}
        </div>
      `}),s=this._computePercent({min:i,max:t},a),d=n.find(e=>a>=(parseFloat(e.from)||i)&&a<=(parseFloat(e.to)||t)),c=ml(null==d?void 0:d.color)||"var(--primary-color)",_=G`
      <div class="bar-inner">
        ${r}
        <div class="bar-marker-wrapper" style="left: ${s}%;">
          <div class="bar-marker" style="border-color: ${c};"></div>
          <div class="bar-marker-tooltip">${ke(a,this.hass.locale)}${e.unit||""}</div>
        </div>
      </div>
    `;return o?G`<div class="bar-container">${_}</div>`:_}getIconUrl(e){var a,o;return`${null!==(o=null===(a=this.config)||void 0===a?void 0:a.icons_body)&&void 0!==o?o:"/local/images/bodyscoreIcon"}/${e}`}renderIcon(e,a="default"){var o,i,t;if(!this.hass||!(null===(o=this.config)||void 0===o?void 0:o.entity))return R;const l=this.hass.states[this.config.entity];if(!l)return R;const n="water"===e.key.toLowerCase()&&"water_icon"in l.attributes?l.attributes.water_icon:e.icon;if(!n)return R;const r=this.getIconUrl(e.icon);if("body"===a&&r)return G`
        <ha-icon
          class="image"
          style="
              -webkit-mask-image: url('${r}');
              mask-image: url('${r}');
              -webkit-mask-size: 24px;
              mask-size: 24px;
              ${(null===(i=this.config.styles)||void 0===i?void 0:i.iconbody)||""}"
        ></ha-icon>
      `;const s="none"!==l.attributes.problem&&"mdi:alert"===n;return G`
      <ha-icon
        class="${s?"problem":""}"
        icon="${n}"
        style="margin-right: 10px; ${(null===(t=this.config.styles)||void 0===t?void 0:t.icon)||""} ${s?"color: var(--error-color) !important;":""}"
      ></ha-icon>
    `}renderButton(e){return this.config.show_buttons&&e.show?G`
      <ha-button
        @click=${()=>this.handleChange(e.entity)}
        title=${he(e.label)}
      >
        ${e.icon?G`<ha-icon icon="${e.icon}"></ha-icon>`:e.label}
      </ha-button>
    `:R}renderToolbar(){var e;return this.config.show_toolbar?G`
      <div class="toolbar" @ll-custom=${this.customEvent} ?open=${this.open}>
        <ha-icon-button
          @click=${this.toggle}
          title=${he(cl("common.toggle_power")||void 0)}
          style="color: var(--primary-color);"
        >
          <ha-icon
            icon=${this.config.show_always_details?"":this.open?"mdi:chevron-up":"mdi:chevron-down"}
          ></ha-icon>
        </ha-icon-button>
        <div class="fill-gap"></div>
        ${Object.values(null!==(e=this.config.buttons)&&void 0!==e?e:{}).filter(e=>e.show).map(e=>this.renderButton(e))}
      </div>
    `:R}renderDropdown(e,a){var o,i;if(!this.hass||!(null===(o=this.config)||void 0===o?void 0:o.entity))return R;const t=this.hass.states[this.config.entity];if(!(null==t?void 0:t.attributes))return R;const l=null!==(i=t.attributes[`${a}_list`])&&void 0!==i?i:[];return Array.isArray(l)&&0!==l.length?G` <div
      style="position: relative"
      @click=${e=>e.stopPropagation()}
    >
      <ha-button @click=${()=>this.toggleMenu(a)}> ${e} </ha-button>
      <mwc-menu
        @selected=${e=>this.handleChange(l[e.detail.index])}
        id=${he(`bmc-menu-${a}`)}
        activatable
        corner="BOTTOM_START"
      >
        ${l.map(e=>G`
            <mwc-list-item value=${e}>${e}</mwc-list-item>
          `)}
      </mwc-menu>
    </div>`:R}render(){var e,a,o,i;if(!this.hass||!(null===(e=this.config)||void 0===e?void 0:e.entity))return R;const t=this.hass.states[this.config.entity];if(!t)return G`
        <ha-card>
          <div class="preview not-available">
            <div class="metadata">
              <div class="not-available">
                ${cl("common.not_available")}
              </div>
            </div>
          </div>
        </ha-card>
      `;const l=Ae(null!==(a=this.config.body)&&void 0!==a?a:{},this.config.model),n=Ae(null!==(o=this.config.attributes)&&void 0!==o?o:{},this.config.model);return G`
      <ha-card>
        ${this.shouldShowBackground()?G`
              <div
                class="background"
                style="${(null===(i=this.config.styles)||void 0===i?void 0:i.background)||""};"
              >
                ${this.config.show_name?G`<div class="title" style="padding: 12px 16px 8px">
                      ${this.renderName(t)}
                    </div>`:""}
                <div
                  class="grid"
                  style="padding: 12px 16px 8px"
                  @click="${this.moreInfo}"
                  tabindex="0"
                >
                  <div class="grid-left">
                    ${(this.config.states?Object.values(this.config.states):[]).filter(e=>e).map(this.renderState.bind(this))}
                  </div>
                  <div class="grid-right">
                    ${n.filter(Boolean).map(this.renderAttribute.bind(this))}
                  </div>
                </div>
              </div>
            `:this.config.show_name?G`<div class="title">${this.renderName(t)}</div>`:""}
        ${this.renderToolbar()}

        <div id="items" ?open=${this.open||this.config.show_always_details}>
          <div id="score" class="card-content">
            <div class="scroll-wrapper">
              ${l.filter(Boolean).map(this.renderBody.bind(this))}
            </div>
          </div>
        </div>
      </ha-card>
    `}};e([_e({attribute:!1})],$l.prototype,"hass",void 0),e([be()],$l.prototype,"config",void 0),e([be()],$l.prototype,"open",void 0),$l=e([se("body-miscale-card")],$l),window.customCards=window.customCards||[],window.customCards.push({preview:!0,type:"body-miscale-card",name:cl("common.name"),description:cl("common.description")});const xl=1;let Al=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,o){this._$Ct=e,this._$AM=a,this._$Ci=o}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}};const Ml="important",Pl=" !"+Ml,jl=(e=>(...a)=>({_$litDirective$:e,values:a}))(class extends Al{constructor(e){if(super(e),e.type!==xl||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((a,o)=>{const i=e[o];return null==i?a:a+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[a]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(a)),this.render(a);for(const e of this.ft)null==a[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in a){const i=a[e];if(null!=i){this.ft.add(e);const a="string"==typeof i&&i.endsWith(Pl);e.includes("-")||a?o.setProperty(e,a?i.slice(0,-11):i,a?Ml:""):o[e]=i}}return U}});let Cl=class extends ne{constructor(){super(...arguments),this.configValue=""}_selectChanged(e){const a=e.target.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:a||void 0}}))}render(){return G`
      <ha-select
        .icon=${Boolean(this.value)}
        .label=${cl("color_select.color")}
        .configValue=${this.configValue}
        @selected=${this._selectChanged}
        @closed=${e=>e.stopPropagation()}
        .value=${this.value}
        fixedMenuPosition
        naturalMenuWidth
      >
        <span slot="icon">
          ${this._renderColorCircle(this.value||"grey")}
        </span>

        ${Object.keys(hl).map(e=>G`
            <ha-list-item .value=${e} graphic="icon">
              ${cl(`color_select.${e}`)||e}
              <span slot="graphic">${this._renderColorCircle(e)}</span>
            </ha-list-item>
          `)}
      </ha-select>
    `}_renderColorCircle(e){return G`
      <span
        class="circle-color"
        style=${jl({"--circle-color":ml(e)})}
      ></span>
    `}static get styles(){return n`
      .circle-color {
        display: block;
        background-color: var(--circle-color, var(--divider-color));
        border: 1px solid var(--outline-color);
        border-radius: 10px;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
      }
      ha-select {
        width: 100%;
      }
    `}};e([_e()],Cl.prototype,"label",void 0),e([_e()],Cl.prototype,"value",void 0),e([_e()],Cl.prototype,"configValue",void 0),Cl=e([se("color-select")],Cl);var Sl=n`.card-config {
  display: block;
}

.option {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.option ha-switch {
  --mdc-theme-secondary: var(--switch-checked-color);
}

.option ha-select,
.option ha-textfield {
  width: 100%;
}

.option ha-select.small,
.option ha-textfield.small {
  width: 120px;
}

.option ha-textfield.full,
.option ha-select.full {
  flex-grow: 1;
  width: auto;
}

.option ha-formfield {
  padding-bottom: 0.5rem;
}

.flex-space-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-title {
  font-size: large;
  line-height: 200%;
}

.navigation {
  display: flex;
  justify-content: center;
}

ha-icon-button {
  color: var(--primary-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

ha-icon {
  display: inline-flex;
}

ha-form-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  );
  grid-template-columns: repeat(
    var(--form-grid-column-count, auto-fit),
    minmax(var(--form-grid-min-width, 200px), 1fr)
  );
  grid-gap: 0.5rem;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.severity-row {
  margin-bottom: 0.5rem; /* Ajoute une marge en dessous de chaque bloc .severity-row */
}

.severity-row ha-textfield {
  margin-right: 0.5rem;
}

.severity-row .input-line {
  display: flex;
  margin-bottom: 0.5rem; /* Ajustez l'espacement sous la ligne */
}

.severity-row .input-line ha-textfield {
  flex: 1; /* Permet aux champs de prendre l'espace disponible de manière égale */
}

.severity-row .below-line {
  display: flex;
  align-items: center; /* Aligne verticalement le label et les icônes */
  gap: 1rem; /* Ajustez l'espacement entre le label et les icônes */
  margin-top: 0.5rem; /* Ajoutez un peu d'espace au-dessus de cette ligne */
}

.severity-row .below-line .label-input {
  flex: 1; /* Permet au label de prendre l'espace disponible, poussant les icônes à droite */
  width: auto; /* Réinitialise la largeur à auto pour qu'il ne prenne pas toute la largeur initialement */
}

.severity-icons {
  display: flex;
  align-items: center;
  gap: 4px;
}

.severity-icons .compact-icon {
  --mdc-icon-button-size: 32px;
  --mdc-icon-size: 20px;
  padding: 0 !important;
  margin: 0 !important;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.severity-icons .compact-icon ha-icon {
  width: 20px;
  height: 20px;
}
`;_l(Sl);let Il=class extends ne{constructor(){super(...arguments),this.page=1,this.selectedColor="white",this.config={},this.isInitialized=!1}setConfig(e){this.config=Object.assign({},e)}async connectedCallback(){super.connectedCallback(),await this.loadCardHelpers()}shouldUpdate(){return this.isInitialized||this.initialize(),!0}render(){if(!this.hass||!this.helpers)return R;const e=Object.assign(Object.assign({},kl),this.config);return G`
      <div class="card-config">
        ${1===this.page?this.renderPage1(e):this.renderPage2(e)}
      </div>
    `}_handleConfigClick(){this.page=1}_handleCustomClick(){this.page=2}renderPage1(e){const a=Object.keys(this.hass.states).filter(e=>e.startsWith("bodymiscale."));return G`
      <div class="flex-space-between">
        <h2 class="page-title">${cl("editor.configuration")}</h2>
        <div class="navigation">
          <ha-icon-button
            @click=${this._handleConfigClick}
            .disabled=${1===this.page}
            .label="${cl("editor.configuration")}"
          >
            <ha-icon icon="mdi:tune"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            @click=${this._handleCustomClick}
            .disabled=${2===this.page}
            .label="${cl("editor.customization")}"
          >
            <ha-icon icon="mdi:palette"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
      <div class="option">
        <ha-select
          .label=${cl("editor.entity")}
          @selected=${this.valueChanged}
          .configValue=${"entity"}
          .value=${e.entity}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
          required
          .validationMessage=${cl("error.missing_entity")}
        >
          ${a.map(e=>G`<mwc-list-item .value=${e}>${e}</mwc-list-item>`)}
        </ha-select>
      </div>

      <div class="option">
        <ha-textfield
          .label=${cl("editor.image")}
          .value=${e.image||""}
          .configValue=${"image"}
          @input=${this.valueChanged}
        ></ha-textfield>
      </div>

      <div class="option">
        <ha-textfield
          .label=${cl("editor.icons_body")}
          .value=${e.icons_body||""}
          .configValue=${"icons_body"}
          @input=${this.valueChanged}
        ></ha-textfield>
      </div>

      ${this.renderSwitch("model",e)} ${this.renderSwitch("unit",e)}
      ${this.renderSwitch("theme",e)}

      <p class="page-title">
        <u>${cl("editor.header_options")}</u>
      </p>

      ${this.renderSwitch("show_name",e)}
      ${this.renderSwitch("show_states",e)}
      ${this.renderSwitch("show_attributes",e)}

      <p class="page-title">
        <u>${cl("editor.body_options")}</u>
      </p>

      ${this.renderSwitch("show_always_details",e)}
      ${this.renderSwitch("show_toolbar",e)}
      ${this.renderSwitch("show_body",e,!0)}
      ${this.renderSwitch("show_buttons",e,!0)}

      <strong>${cl("editor.code_only_note")}</strong>
    `}renderPage2(e){return G`
      <div class="flex-space-between">
        <h2 class="page-title">${cl("editor.customization")}</h2>
        <div class="navigation">
          <ha-icon-button
            @click=${this._handleConfigClick}
            .disabled=${1===this.page}
            .label="${cl("editor.configuration")}"
          >
            <ha-icon icon="mdi:tune"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            @click=${this._handleCustomClick}
            .disabled=${2===this.page}
            .label="${cl("editor.customization")}"
          >
            <ha-icon icon="mdi:palette"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
      ${this.renderBodyOptions(e)}
    `}renderSwitch(e,a,o=!1){return G`
      <div style="padding: ${o?"0 0 0 45px":"0"}">
        ${cl(`editor.${e}`)}
        <div class="option">
          <ha-formfield
            .label=${cl(a[e]?`editor.${e}_aria_label_off`:`editor.${e}_aria_label_on`)}
          >
            <ha-switch
              .checked=${Boolean(a[e])}
              .configValue=${e}
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}renderBodyOptions(e){var a;const o=!1===e.unit?yl:fl,i=null!==(a=e.body)&&void 0!==a?a:{};return Object.keys(o).filter(a=>{const i=o[a];return!1!==e.model||!i.impedance_required}).map(e=>{var a,t,l,n,r,s;const d=o[e],c=(null===(a=i[e])||void 0===a?void 0:a.positions)||d.positions||{},_=void 0!==(null===(t=i[e])||void 0===t?void 0:t.showabovelabels)&&null!==(null===(l=i[e])||void 0===l?void 0:l.showabovelabels)?i[e].showabovelabels:d.showabovelabels,b=void 0!==(null===(n=i[e])||void 0===n?void 0:n.showbelowlabels)&&null!==(null===(r=i[e])||void 0===r?void 0:r.showbelowlabels)?i[e].showbelowlabels:d.showbelowlabels,h=(null===(s=i[e])||void 0===s?void 0:s.severity)||d.severity,m=cl(`body.${e}`);return G`
        <div>
          <h3>${m}</h3>
          <ha-form-grid>
            ${["icon","name","minmax","value"].map(a=>this.renderPositionSelect(a,c[a],e))}
          </ha-form-grid>
          <ha-form-grid>
            ${this.renderBooleanSelector("showabovelabels",_,`body.${e}.showabovelabels`)}
            ${this.renderBooleanSelector("showbelowlabels",b,`body.${e}.showbelowlabels`)}
          </ha-form-grid>
          <ha-form-grid>
            ${this.renderSeverityInputs(h,e)}
          </ha-form-grid>
        </div>
      `})}renderPositionSelect(e,a,o){const i=null!=a?a:"";return G`
      <div class="option">
        <ha-select
          .label=${cl(`editor_body.${e}_position`)}
          .configValue=${`body.${o}.positions.${e}`}
          @selected=${this.valueChanged}
          .value=${i}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
          class="full"
        >
          ${void 0===a?G`<mwc-list-item value="" selected disabled></mwc-list-item>`:R}
          <mwc-list-item value="left"
            >${cl("editor_body.left")}</mwc-list-item
          >
          <mwc-list-item value="right"
            >${cl("editor_body.right")}</mwc-list-item
          >
          <mwc-list-item value="off"
            >${cl("editor_body.off")}</mwc-list-item
          >
        </ha-select>
      </div>
    `}renderBooleanSelector(e,a,o){if(null==a)return R;const i=String(a);return G`
      <div class="option">
        <ha-select
          .label=${cl(`editor_body.${e}`)}
          .configValue=${o}
          .value=${i}
          @selected=${this.valueChanged}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
          class="full"
        >
          <mwc-list-item value="true">${cl("editor_body.on")}</mwc-list-item>
          <mwc-list-item value="false">${cl("editor_body.off")}</mwc-list-item>
        </ha-select>
      </div>
    `}renderSeverityInputs(e,a){if(null==e)return R;const o=Array.isArray(e)?e:[],i=o.length>0?o:[{from:"",to:"",color:"",label:""}];return G`
      <div>
        ${i.map((e,o)=>{var i,t,l,n;return G`
              <div class="severity-row">
                <div class="input-line">
                  <ha-textfield
                    .label=${cl("editor_body.from")}
                    .value=${String(null!==(i=e.from)&&void 0!==i?i:"")}
                    @input=${e=>this.updateNumericSeverity(a,o,"from",e.target.value)}
                    type="number"
                    class="from-input"
                  ></ha-textfield>
                  <ha-textfield
                    .label=${cl("editor_body.to")}
                    .value=${String(null!==(t=e.to)&&void 0!==t?t:"")}
                    @input=${e=>this.updateNumericSeverity(a,o,"to",e.target.value)}
                    type="number"
                    class="to-input"
                  ></ha-textfield>
                  <div class="color-picker-container">
                    <color-select
                      .value=${null!==(l=e.color)&&void 0!==l?l:""}
                      @value-changed=${e=>this.updateNumericSeverity(a,o,"color",e.detail.value)}
                    ></color-select>
                  </div>
                </div>
                <div class="below-line">
                  <ha-textfield
                    .label=${cl("editor_body.label_below")}
                    .value=${null!==(n=e.label)&&void 0!==n?n:""}
                    @input=${e=>this.updateNumericSeverity(a,o,"label",e.target.value)}
                    class="label-input"
                  ></ha-textfield>
                  <div class="severity-icons">
                    <ha-icon-button
                      class="compact-icon"
                      @click=${()=>this.removeNumericSeverity(a,o)}
                    >
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </ha-icon-button>
                    <ha-icon-button
                      class="compact-icon"
                      @click=${()=>this.addNumericSeverity(a)}
                    >
                      <ha-icon icon="mdi:plus"></ha-icon>
                    </ha-icon-button>
                    <ha-icon-button
                      class="compact-icon"
                      @click=${()=>window.open("https://dckiller51.github.io/lovelace-body-miscale-card/","_blank")}
                      .label="${cl("editor_body.severity_generator_help")}"
                    >
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                    </ha-icon-button>
                  </div>
                </div>
              </div>
            `})}
      </div>
    `}updateNumericSeverity(e,a,o,i){var t;if(this.config&&this.config.body){Array.isArray(null===(t=this.config.body[e])||void 0===t?void 0:t.severity)||(this.config.body[e].severity=[]);const l=[...this.config.body[e].severity];l[a]&&(l[a]=Object.assign(Object.assign({},l[a]),{[o]:i}),this.updateConfig(e,l))}}addNumericSeverity(e){var a,o;if(this.config&&this.config.body){Array.isArray(null===(a=this.config.body[e])||void 0===a?void 0:a.severity)||(this.config.body[e].severity=[]);const i=[...(null===(o=this.config.body[e])||void 0===o?void 0:o.severity)||[]];i.push({from:0,to:0,color:"",label:""}),this.updateConfig(e,i)}}removeNumericSeverity(e,a){var o,i,t;const l=[...(null===(t=null===(i=null===(o=this.config)||void 0===o?void 0:o.body)||void 0===i?void 0:i[e])||void 0===t?void 0:t.severity)||[]].filter((e,o)=>o!==a);0===l.length&&l.push({from:0,to:0,color:"",label:""}),this.updateConfig(e,l)}updateConfig(e,a){this.config&&this.config.body&&(this.config.body[e].severity=a,this.valueChanged())}valueChanged(e=null){if(this.config&&this.hass)if(e&&e.target){const a=e.target;if(a.configValue&&"string"==typeof a.configValue){const e=void 0!==a.checked?a.checked:a.value||void 0,o=a.configValue.split(".");let i=Object.assign({},this.config),t=i;for(let e=0;e<o.length-1;e++){const a=o[e];void 0===t[a]&&(t[a]={}),t=t[a]}t[o[o.length-1]]=e,this.config=i,$e(this,"config-changed",{config:this.config})}}else $e(this,"config-changed",{config:this.config})}initialize(){this.hass&&this.config&&this.helpers&&(this.isInitialized=!0)}async loadCardHelpers(){this.helpers=await window.loadCardHelpers()}static get styles(){return Sl}};e([_e({attribute:!1})],Il.prototype,"hass",void 0),e([_e({type:Number})],Il.prototype,"page",void 0),e([_e()],Il.prototype,"selectedColor",void 0),e([be()],Il.prototype,"config",void 0),e([be()],Il.prototype,"helpers",void 0),Il=e([se("body-miscale-card-editor")],Il);var Ol=Object.freeze({__proto__:null,get BodymiscaleCardEditor(){return Il}});export{$l as BodymiscaleCard};
