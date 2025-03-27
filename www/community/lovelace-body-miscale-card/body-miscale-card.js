function e(e,a,o,i){var t,n=arguments.length,r=n<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,o,i);else for(var s=e.length-1;s>=0;s--)(t=e[s])&&(r=(n<3?t(r):n>3?t(a,o,r):t(a,o))||r);return n>3&&r&&Object.defineProperty(a,o,r),r}"function"==typeof SuppressedError&&SuppressedError;const a=globalThis,o=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),t=new WeakMap;let n=class{constructor(e,a,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(o&&void 0===e){const o=void 0!==a&&1===a.length;o&&(e=t.get(a)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&t.set(a,e))}return e}toString(){return this.cssText}};const r=(e,...a)=>{const o=1===e.length?e[0]:a.reduce(((a,o,i)=>a+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(o,e,i)},s=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let a="";for(const o of e.cssRules)a+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(a)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:_,getOwnPropertySymbols:h,getPrototypeOf:m}=Object,u=globalThis,b=u.trustedTypes,g=b?b.emptyScript:"",p=u.reactiveElementPolyfillSupport,y=(e,a)=>e,f={toAttribute(e,a){switch(a){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,a){let o=e;switch(a){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},v=(e,a)=>!l(e,a),w={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=w){if(a.state&&(a.attribute=!1),this._$Ei(),this.elementProperties.set(e,a),!a.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,a);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,a,o){const{get:i,set:t}=c(this.prototype,e)??{get(){return this[a]},set(e){this[a]=e}};return{get(){return i?.call(this)},set(a){const n=i?.call(this);t.call(this,a),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,a=[..._(e),...h(e)];for(const o of a)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const a=litPropertyMetadata.get(e);if(void 0!==a)for(const[e,o]of a)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,a]of this.elementProperties){const o=this._$Eu(e,a);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)a.unshift(s(e))}else void 0!==e&&a.push(s(e));return a}static _$Eu(e,a){const o=a.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const o of a.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of i){const i=document.createElement("style"),t=a.litNonce;void 0!==t&&i.setAttribute("nonce",t),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,o){this._$AK(e,o)}_$EC(e,a){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const t=(void 0!==o.converter?.toAttribute?o.converter:f).toAttribute(a,o.type);this._$Em=e,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._$Em=null}}_$AK(e,a){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),t="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=i,this[i]=t.fromAttribute(a,e.type),this._$Em=null}}requestUpdate(e,a,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??v)(this[e],a))return;this.P(e,a,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,a,o){this._$AL.has(e)||this._$AL.set(e,a),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,a]of this._$Ep)this[e]=a;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[a,o]of e)!0!==o.wrapped||this._$AL.has(a)||void 0===this[a]||this.P(a,this[a],o)}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(a)):this._$EU()}catch(a){throw e=!1,this._$EU(),a}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[y("elementProperties")]=new Map,k[y("finalized")]=new Map,p?.({ReactiveElement:k}),(u.reactiveElementVersions??=[]).push("2.0.4");const z=globalThis,x=z.trustedTypes,$=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+M,C=`<${P}>`,S=document,I=()=>S.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,O="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,N=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,G=/"/g,q=/^(?:script|style|textarea|title)$/i,U=(e=>(a,...o)=>({_$litType$:e,strings:a,values:o}))(1),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),L=new WeakMap,R=S.createTreeWalker(S,129);function H(e,a){if(!j(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(a):a}const Z=(e,a)=>{const o=e.length-1,i=[];let t,n=2===a?"<svg>":3===a?"<math>":"",r=B;for(let a=0;a<o;a++){const o=e[a];let s,l,d=-1,c=0;for(;c<o.length&&(r.lastIndex=c,l=r.exec(o),null!==l);)c=r.lastIndex,r===B?"!--"===l[1]?r=E:void 0!==l[1]?r=N:void 0!==l[2]?(q.test(l[2])&&(t=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=t??B,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?D:'"'===l[3]?G:V):r===G||r===V?r=D:r===E||r===N?r=B:(r=D,t=void 0);const _=r===D&&e[a+1].startsWith("/>")?" ":"";n+=r===B?o+C:d>=0?(i.push(s),o.slice(0,d)+A+o.slice(d)+M+_):o+M+(-2===d?a:_)}return[H(e,n+(e[o]||"<?>")+(2===a?"</svg>":3===a?"</math>":"")),i]};class F{constructor({strings:e,_$litType$:a},o){let i;this.parts=[];let t=0,n=0;const r=e.length-1,s=this.parts,[l,d]=Z(e,a);if(this.el=F.createElement(l,o),R.currentNode=this.el.content,2===a||3===a){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=R.nextNode())&&s.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const a=d[n++],o=i.getAttribute(e).split(M),r=/([.?@])?(.*)/.exec(a);s.push({type:1,index:t,name:r[2],strings:o,ctor:"."===r[1]?ee:"?"===r[1]?ae:"@"===r[1]?oe:Q}),i.removeAttribute(e)}else e.startsWith(M)&&(s.push({type:6,index:t}),i.removeAttribute(e));if(q.test(i.tagName)){const e=i.textContent.split(M),a=e.length-1;if(a>0){i.textContent=x?x.emptyScript:"";for(let o=0;o<a;o++)i.append(e[o],I()),R.nextNode(),s.push({type:2,index:++t});i.append(e[a],I())}}}else if(8===i.nodeType)if(i.data===P)s.push({type:2,index:t});else{let e=-1;for(;-1!==(e=i.data.indexOf(M,e+1));)s.push({type:7,index:t}),e+=M.length-1}t++}}static createElement(e,a){const o=S.createElement("template");return o.innerHTML=e,o}}function J(e,a,o=e,i){if(a===W)return a;let t=void 0!==i?o._$Co?.[i]:o._$Cl;const n=T(a)?void 0:a._$litDirective$;return t?.constructor!==n&&(t?._$AO?.(!1),void 0===n?t=void 0:(t=new n(e),t._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=t:o._$Cl=t),void 0!==t&&(a=J(e,t._$AS(e,a.values),t,i)),a}class X{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:o}=this._$AD,i=(e?.creationScope??S).importNode(a,!0);R.currentNode=i;let t=R.nextNode(),n=0,r=0,s=o[0];for(;void 0!==s;){if(n===s.index){let a;2===s.type?a=new Y(t,t.nextSibling,this,e):1===s.type?a=new s.ctor(t,s.name,s.strings,this,e):6===s.type&&(a=new ie(t,this,e)),this._$AV.push(a),s=o[++r]}n!==s?.index&&(t=R.nextNode(),n++)}return R.currentNode=S,i}p(e){let a=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,a),a+=o.strings.length-2):o._$AI(e[a])),a++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,o,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return void 0!==a&&11===e?.nodeType&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=J(this,e,a),T(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>j(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=F.createElement(H(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(a);else{const e=new X(i,this),o=e.u(this.options);e.p(a),this.T(o),this._$AH=e}}_$AC(e){let a=L.get(e.strings);return void 0===a&&L.set(e.strings,a=new F(e)),a}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let o,i=0;for(const t of e)i===a.length?a.push(o=new Y(this.O(I()),this.O(I()),this,this.options)):o=a[i],o._$AI(t),i++;i<a.length&&(this._$AR(o&&o._$AB.nextSibling,i),a.length=i)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e&&e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,o,i,t){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=a,this._$AM=i,this.options=t,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,a=this,o,i){const t=this.strings;let n=!1;if(void 0===t)e=J(this,e,a,0),n=!T(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{const i=e;let r,s;for(e=t[0],r=0;r<t.length-1;r++)s=J(this,i[o+r],a,r),s===W&&(s=this._$AH[r]),n||=!T(s)||s!==this._$AH[r],s===K?e=K:e!==K&&(e+=(s??"")+t[r+1]),this._$AH[r]=s}n&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let ee=class extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}};class ae extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class oe extends Q{constructor(e,a,o,i,t){super(e,a,o,i,t),this.type=5}_$AI(e,a=this){if((e=J(this,e,a,0)??K)===W)return;const o=this._$AH,i=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,t=e!==K&&(o===K||i);i&&this.element.removeEventListener(this.name,this,o),t&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,a,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const te=z.litHtmlPolyfillSupport;te?.(F,Y),(z.litHtmlVersions??=[]).push("3.2.1");let ne=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,a,o)=>{const i=o?.renderBefore??a;let t=i._$litPart$;if(void 0===t){const e=o?.renderBefore??null;i._$litPart$=t=new Y(a.insertBefore(I(),e),e,void 0,o??{})}return t._$AI(e),t})(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ne._$litElement$=!0,ne.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ne});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:ne}),(globalThis.litElementVersions??=[]).push("4.1.1");const se=e=>(a,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,a)})):customElements.define(e,a)},le={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v},de=(e=le,a,o)=>{const{kind:i,metadata:t}=o;let n=globalThis.litPropertyMetadata.get(t);if(void 0===n&&globalThis.litPropertyMetadata.set(t,n=new Map),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const t=a.get.call(this);a.set.call(this,o),this.requestUpdate(i,t,e)},init(a){return void 0!==a&&this.P(i,void 0,e),a}}}if("setter"===i){const{name:i}=o;return function(o){const t=this[i];a.call(this,o),this.requestUpdate(i,t,e)}}throw Error("Unsupported decorator location: "+i)};function ce(e){return(a,o)=>"object"==typeof o?de(e,a,o):((e,a,o)=>{const i=a.hasOwnProperty(o);return a.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(a,o):void 0})(e,a,o)}function _e(e){return ce({...e,state:!0,attribute:!1})}const he=e=>e??K;var me,ue,be=function(e,a){return ge(a).format(e)},ge=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(me||(me={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ue||(ue={}));var pe=function(e){if(e.time_format===ue.language||e.time_format===ue.system){var a=e.time_format===ue.language?e.language:void 0,o=(new Date).toLocaleString(a);return o.includes("AM")||o.includes("PM")}return e.time_format===ue.am_pm},ye=function(e,a){return fe(a).format(e)},fe=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:pe(e)})};function ve(){return(ve=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}var we=function(e,a,o){var i=a?function(e){switch(e.number_format){case me.comma_decimal:return["en-US","en"];case me.decimal_comma:return["de","es","it"];case me.space_comma:return["fr","sv","cs"];case me.system:return;default:return e.language}}(a):void 0;if(Number.isNaN=Number.isNaN||function e(a){return"number"==typeof a&&e(a)},(null==a?void 0:a.number_format)!==me.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,ke(e,o)).format(Number(e))}catch(a){return console.error(a),new Intl.NumberFormat(void 0,ke(e,o)).format(Number(e))}return"string"==typeof e?e:function(e,a){return void 0===a&&(a=2),Math.round(e*Math.pow(10,a))/Math.pow(10,a)}(e,void 0).toString()+""},ke=function(e,a){var o=ve({maximumFractionDigits:2},a);if("string"!=typeof e)return o;var i=e.indexOf(".")>-1?e.split(".")[1].length:0;return o.minimumFractionDigits=i,o.maximumFractionDigits=i,o},ze=function(e,a,o,i){i=i||{},o=null==o?{}:o;var t=new Event(a,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return t.detail=o,e.dispatchEvent(t),t};function xe(...e){const a=e=>e&&"object"==typeof e,o={};return e.filter((e=>a(e))).forEach((e=>{Object.keys(e).forEach((i=>{const t=o[i],n=e[i];Array.isArray(t)&&Array.isArray(n)?o[i]=t.concat(n):a(t)&&a(n)?o[i]=xe(Object.assign({},t),n):o[i]=n}))})),o}function $e(e,a){return Object.values(e).filter((e=>a||!e.impedance_required))}var Ae={version:"Verze",name:"Karta Bodymiscale",description:"Karta bodymiscale ukazuje údaje ohledně váhy a tělesných proporcí",not_available:"Bodymiscale není dostupná",toggle_power:"Více podrobností jako například BMI kCal zobrazit / skrýt"},Me={ok:"MĚŘENÍ: OK",unknown:"STAV: neznámý",problem:"Problém",none:"Žádný",weight_unavailable:"Váha není dostupná",impedance_unavailable:"Impedance není dostupná",weight_unavailable_and_impedance_unavailable:"Váha a impedance není dostupná",weight_low:"nízká váha",impedance_low:"nízká impedance",weight_low_and_impedance_low:"nízká Váha a impedance",impedance_low_and_weight_low:"nízká Impedance a váha",weight_high:"vysoká váha",impedance_high:"vysoká impedance",weight_high_and_impedance_high:"vysoká Váha a impedance",weight_high_and_impedance_low:"vysoká váha, nízká impedance",weight_low_and_impedance_high:"nízká váha, vysoká impedance"},Pe={"weight: ":"Váha: ","impedance: ":"Impedance: ","height: ":"Výška: ","age: ":"Věk: ","gender: ":"Pohlaví: "},Ce={male:"muž",female:"žena",unavailable:"nedostupná"},Se={bmi:"BMI",bmi_label:"BMI popis",visceral_fat:"Viscerální tuk",body_fat:"Tělesný tuk",protein:"Protein",water:"Voda",muscle_mass:"Svalová hmota",bone_mass:"Kostní hmota",weight:"Váha",ideal:"Ideální",basal_metabolism:"Základní metabolismus",body_type:"Tělesný typ",metabolic_age:"Metabolický věk"},Ie={skinny:"štíhlý",balanced_skinny:"štíhlý-vyvážený",skinny_muscular:"štíhlý-svalnatý",balanced:"vyvážený",balanced_muscular:"vyvážený-svalnatý",lack_exercise:"nedostatek cvičení",thick_set:"pevné",obese:"obézní",overweight:"nadváha",underweight:"podváha",normal_or_healthy_weight:"normální či zdravá váha",slight_overweight:"lehká nadváha",moderate_obesity:"menší obezita",severe_obesity:"vážná obezita",massive_obesity:"velká obezita",unavailable:"nedostupná"},Te={" years":" let"},je={missing_entity:"Prosím definujte entitu.",missing_entity_bodymiscale:"Prosím definujte entitu bodymiscale."},Oe={entity:"Prosím definujte účet váhy (povinné) !",image:"Obrázek pozadí (volitelné)",model:"Máte senzor impedance?",model1:"Aktivujte tuto funkci pro přesné měření složení těla.",model_aria_label_on:"Aktivovat impedanci",model_aria_label_off:"Deaktivovat impedanci",unit:"Převést kilogramy na libry",unit_aria_label_on:"Zapnout konverzi",unit_aria_label_off:"Vypnout konverzi",show_name:"Zobrazovat jméno účtu jako titulek ?",show_name_aria_label_on:"Zapnout zobrazování jména",show_name_aria_label_off:"Vypnout zobrazování jména",show_states:"Zobrazit stav ?",show_states_aria_label_on:"Zapnout zobrazování stavu",show_states_aria_label_off:"Vypnout zobrazování stavu",show_attributes:"Show hlavní osobní data (vpravo nahoře) ?",show_attributes_aria_label_on:"Zapnout zobrazování atributů",show_attributes_aria_label_off:"Vypnout zobrazování atributů",show_always_details:"Vždy zobrazovat detaily",show_always_details_aria_label_on:"Zapnout výchozí zobrazení podrobností",show_always_details_aria_label_off:"Vypnout výchozí zobrazení podrobností",show_toolbar:"Zobrazit pokročilá nastavení ?",show_toolbar_aria_label_on:"Zapnout zobrazení pokročilých nastavení",show_toolbar_aria_label_off:"Vypnout zobrazení pokročilých nastavení",show_body:"Nabízet další detaily měření",show_body1:"(spodní polovina - zobrazí se po klepnutí na ikonu šipky dolů) ?",show_body_aria_label_on:"Zapnout zobrazování tělesného skóre",show_body_aria_label_off:"Vypnout zobrazování tělesného skóre",show_buttons:"Povolit změnu účtu ?",show_buttons_aria_label_on:"Zapnout zobrazování tlačítek",show_buttons_aria_label_off:"Vypnout zobrazování tlačítek",header_options:"1. Možnosti záhlaví karty",body_options:"2. Více možností karty",code_only_note:"POZOR: Další možnosti jsou dostupné pouze v editor kódu."},Be={from:"Od",height:"Výška lišty",icon_position:"Pozice ikony",inside:"Uvnitř",max:"Max",min:"Min",minmax_position:"Pozice Min/Max",name_position:"Pozice názvu",off:"Vypnuto",outside:"Vně",target:"Cíl",to:"Do",value_position:"Pozice hodnoty"},Ee={color:"Barva",disabled:"Zakázáno",red:"Červená",pink:"Růžová",purple:"Fialová","deep-purple":"Tmavě fialová",indigo:"Indigo",blue:"Modrá","light-blue":"Světle modrá",cyan:"Azurová",teal:"Tyrkysová",green:"Zelená","light-green":"Světle zelená",lime:"Limetková",yellow:"Žlutá",amber:"Jantarová",orange:"Oranžová",orangered:"Červenooranžová","deep-orange":"Tmavě oranžová",brown:"Hnědá","light-grey":"Světle šedá",grey:"Šedá","dark-grey":"Tmavě šedá","blue-grey":"Modrošedá",darkgreen:"Tmavě zelená",royalblue:"Královská modrá",black:"Černá",white:"Bílá"},Ne={common:Ae,states:Me,attributes:Pe,attributes_value:Ce,body:Se,body_value:Ie,unit:Te,error:je,editor:Oe,editor_body:Be,color_select:Ee},De=Object.freeze({__proto__:null,attributes:Pe,attributes_value:Ce,body:Se,body_value:Ie,color_select:Ee,common:Ae,default:Ne,editor:Oe,editor_body:Be,error:je,states:Me,unit:Te}),Ve={version:"Version",name:"Bodymiscale Karte",description:"Die bodymiscale Karte zeigt Ihren gewichtsmäßigen Körperstatus an.",not_available:"Bodymiscale ist momenatan nicht verfügbar",toggle_power:"Weitere Details wie BMI kCal anzeigen / ausblenden"},Ge={ok:"MESSUNG: OK",unknown:"STATUS: unbekannt",problem:"Problem",none:"keine",weight_unavailable:"Gewichtsmessung nicht verfügbar",impedance_unavailable:"Bioelektrische Impedanzmessung (Körperzusammensetzung) nicht verfügbar",weight_unavailable_and_impedance_unavailable:"Gewichts- und bioelektrische Impedanzmessung (Körperzusammensetzung) nicht verfügbar."},qe={"weight: ":"Gewicht: ","impedance: ":"Zusammensetzung: ","height: ":"Körpergröße: ","age: ":"Alter: ","gender: ":"Geschlecht: "},Ue={male:"männl.",female:"weibl.",unavailable:"Nicht verfügbar"},We={bmi:"BMI",bmi_label:"BMI Klassifikation",visceral_fat:"Bauchfett",body_fat:"Körperfett",protein:"Protein",water:"Wasser",muscle_mass:"Muskelmasse",bone_mass:"Knochenmasse",weight:"Gewicht",ideal:"Idealgewicht",basal_metabolism:"Grundumsatz",body_type:"Körperbau",metabolic_age:"stoffwechselbedingtes Körperalter"},Ke={skinny:"schlank",balanced_skinny:"ausgeglichen schlank",skinny_muscular:"muskulös schlank",balanced:"ausgewogen",balanced_muscular:"ausgewogen muskulös",lack_exercise:"Bewegungsmangel",thick_set:"stämmig",obese:"fettleibig",overweight:"Übergewicht",underweight:"Untergewicht",normal_or_healthy_weight:"Normal - gesundes Gewicht",slight_overweight:"leichtes Übergewicht",moderate_obesity:"moderate Fettleibigkeit",severe_obesity:"schwere Fettleibigkeit",massive_obesity:"massive Fettleibigkeit",unavailable:"Nicht verfügbar"},Le={" years":" Jahre"},Re={missing_entity:"Bitte definieren Sie eine Entität in der Konfiguration.",missing_entity_bodymiscale:'Bitte definieren Sie "bodymiscale" als Entität in der Konfiguration.'},He={entity:"Bitte ein Konto auf der Waage wählen (erforderlich)!",image:"Hintergrundbild (optional)",model:"Haben Sie einen Impedanzsensor?",model1:"Aktivieren Sie diese Funktion für genaue Körperzusammensetzungsmessungen.",model_aria_label_on:"Impedanz aktivieren",model_aria_label_off:"Impedanz deaktivieren",unit:"kg in lbs umrechnen",unit_aria_label_on:"Konvertierung einschalten",unit_aria_label_off:"Umwandlung deaktivieren",show_name:"Namen des Konto als Titel anzeigen?",show_name_aria_label_on:"Namensanzeige einschalten",show_name_aria_label_off:"Namesanzeige ausschalten",show_states:"Status anzeigen (Symbole links oben)?",show_states_aria_label_on:"Statusanzeige einschalten",show_states_aria_label_off:"Statusanzeige ausschalten",show_attributes:"Persönliche Stammdaten anzeigen (rechts oben)?",show_attributes_aria_label_on:"Basis Daten einblenden (rechts oben) einschalten",show_attributes_aria_label_off:"Basis Daten einblenden (rechts oben) ausschalten",show_always_details:"Details immer anzeigen",show_always_details_aria_label_on:"Schalten Sie die standardmäßige Detailansicht ein",show_always_details_aria_label_off:"Schaltet die standardmäßige Detailansicht aus",show_toolbar:"Fortgeschrittene Optionen anzeigen ?",show_toolbar_aria_label_on:"Symbolleiste anzeigen einschalten",show_toolbar_aria_label_off:"Symbolleiste anzeigen ausschalten",show_body:"Weitere Messergebnisse anbieten",show_body1:"(untere Hälfte - per Chevron-Symbol einblenden)?",show_body_aria_label_on:"Körperwertanzeige einschalten",show_body_aria_label_off:"Körperwertanzeige ausschalten",show_buttons:"Kontowechsel erlauben?",show_buttons_aria_label_on:"Schaltfläche anzeigen einschalten",show_buttons_aria_label_off:"Schaltfläche anzeigen ausschalten",header_options:"1. Kartenkopf Optionen",body_options:"2. mehr Kartenoptionen",code_only_note:"ACHTUNG: Weitere Optionen sind nur im Code Editor verfügbar."},Ze={from:"Von",height:"Leistenhöhe",icon_position:"Symbolposition",inside:"Innen",max:"Max",min:"Min",minmax_position:"Min/Max Position",name_position:"Name Position",off:"Aus",outside:"Außen",target:"Ziel",to:"Zu",value_position:"Wert Position"},Fe={color:"Farbe",disabled:"Deaktiviert",red:"Rot",pink:"Rosa",purple:"Lila","deep-purple":"Dunkellila",indigo:"Indigo",blue:"Blau","light-blue":"Hellblau",cyan:"Cyan",teal:"Türkis",green:"Grün","light-green":"Hellgrün",lime:"Limette",yellow:"Gelb",amber:"Bernstein",orange:"Orange",orangered:"Rotorange","deep-orange":"Dunkelorange",brown:"Braun","light-grey":"Hellgrau",grey:"Grau","dark-grey":"Dunkelgrau","blue-grey":"Blaugrau",darkgreen:"Dunkelgrün",royalblue:"Königsblau",black:"Schwarz",white:"Weiß"},Je={common:Ve,states:Ge,attributes:qe,attributes_value:Ue,body:We,body_value:Ke,unit:Le,error:Re,editor:He,editor_body:Ze,color_select:Fe},Xe={version:"Version",name:"Bodymiscale Card",description:"The bodymiscale card shows you your weight wise / related body status.",not_available:"Bodymiscale is not available",toggle_power:"More details like BMI kCal show / hide"},Ye={ok:"MEASUREMENT: OK",unknown:"STATE: unknown",problem:"Problem",none:"None",weight_unavailable:"Weight unavailable",impedance_unavailable:"Impedance unavailable",weight_unavailable_and_impedance_unavailable:"Weight and impedance unavailable",weight_low:"Weight low",impedance_low:"Impedance low",weight_low_and_impedance_low:"Weight and impedance low",impedance_low_and_weight_low:"Impedance and weight low",weight_high:"Weight high",impedance_high:"Impedance high",weight_high_and_impedance_high:"Weight and impedance high",weight_high_and_impedance_low:"Weight high, impedance low",weight_low_and_impedance_high:"Weight low, impedance high"},Qe={"weight: ":"Weight: ","impedance: ":"Impedance: ","height: ":"Height: ","age: ":"Age: ","gender: ":"Gender: "},ea={male:"male",female:"female",unavailable:"unavailable"},aa={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Visceral fat",body_fat:"Body fat",protein:"Protein",water:"Water",muscle_mass:"Muscle mass",bone_mass:"Bone mass",weight:"Weight",ideal:"Ideal",basal_metabolism:"Basal metabolism",body_type:"Body type",metabolic_age:"Metabolic age"},oa={skinny:"Skinny",balanced_skinny:"Balanced-skinny",skinny_muscular:"Skinny-muscular",balanced:"Balanced",balanced_muscular:"Balanced-muscular",lack_exercise:"Lack-exercise",thick_set:"Thick-set",obese:"Obese",overweight:"Overweight",underweight:"Underweight",normal_or_healthy_weight:"Normal or Healthy Weight",slight_overweight:"Slight overweight",moderate_obesity:"Moderate obesity",severe_obesity:"Severe obesity",massive_obesity:"Massive obesity",unavailable:"unavailable"},ia={" years":" years"},ta={invalid_config:"Invalid configuration",missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},na={configuration:"Configuration",customization:"Customization",entity:"Please select an account on the scale (required)!",image:"Background image (optional)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",theme:"Configure the theme you use.",theme_aria_label_on:"Toggle theme light on",theme_aria_label_off:"Toggle theme dark off",show_name:"Show the name of the account as title?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right)?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those)?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},ra={from:"From",height:"Bar height",icon_position:"Icon Position",inside:"Inside",max:"Max",min:"Min",minmax_position:"Min/Max Position",name_position:"Name Position",off:"Off",outside:"Outside",target:"Target",to:"To",value_position:"Value Position"},sa={color:"Color",disabled:"Disabled",red:"Red",pink:"Pink",purple:"Purple","deep-purple":"Deep purple",indigo:"Indigo",blue:"Blue","light-blue":"Light blue",cyan:"Cyan",teal:"Teal",green:"Green","light-green":"Light green",lime:"Lime",yellow:"Yellow",amber:"Amber",orange:"Orange",orangered:"Red orange","deep-orange":"Deep orange",brown:"Brown","light-grey":"Light grey",grey:"Grey","dark-grey":"Dark grey","blue-grey":"Blue grey",darkgreen:"Dark green",royalblue:"Royal blue",black:"Black",white:"White"},la={common:Xe,states:Ye,attributes:Qe,attributes_value:ea,body:aa,body_value:oa,unit:ia,error:ta,editor:na,editor_body:ra,color_select:sa},da={version:"Versión",name:"Tarjeta Bodymiscale",description:"La tarjeta bodymiscale muestra el estado de tu cuerpo en relación a tu peso.",not_available:"Bodymiscale no está disponible",toggle_power:"Mostrar / ocultar más detalles como IMC,kCal"},ca={ok:"MEDICIÓN: OK",unknown:"ESTADO: desconocido",problem:"Problema",none:"Ninguno",weight_unavailable:"Peso no disponible",impedance_unavailable:"Impedancia no disponible",weight_unavailable_and_impedance_unavailable:"Peso e impedancia no disponibles",weight_low:"Peso bajo",impedance_low:"Impedancia baja",weight_low_and_impedance_low:"Peso e impedancia bajos",impedance_low_and_weight_low:"Impedancia y peso bajos",weight_high:"Peso alto",impedance_high:"Impedancia alta",weight_high_and_impedance_high:"Peso e impedancia altos",weight_high_and_impedance_low:"Peso alto, impedancia baja",weight_low_and_impedance_high:"Peso bajo, impedancia alta"},_a={"weight: ":"Peso: ","impedance: ":"Impedancia: ","height: ":"Altura: ","age: ":"Edad: ","gender: ":"Sexo: "},ha={male:"masculino",female:"femenino",unavailable:"no disponible"},ma={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Grasa visceral",body_fat:"Grasa corporal",protein:"Proteína",water:"Agua",muscle_mass:"Masa muscular",bone_mass:"Masa ósea",weight:"Peso",ideal:"Ideal",basal_metabolism:"Metabolismo basal",body_type:"Tipo de cuerpo",metabolic_age:"Edad metabólica"},ua={skinny:"Flaco",balanced_skinny:"Flaco equilibrado",skinny_muscular:"Flaco musculoso",balanced:"Equilibrado",balanced_muscular:"Musculuso equilibrado",lack_exercise:"Falto de ejercicio",thick_set:"Rechoncho",obese:"Obeso",overweight:"Sobrepeso",underweight:"Por debajo del peso normal",normal_or_healthy_weight:"Normal",slight_overweight:"Ligero sobrepeso",moderate_obesity:"Obesidad moderada",severe_obesity:"Obesidad severa",massive_obesity:"Obesidad masiva",unavailable:"no disponible"},ba={" years":" años"},ga={missing_entity:"Por favor, defina una entidad.",missing_entity_bodymiscale:"Por favor, defina una entidad bodymiscale."},pa={entity:"Por favor, escoja una cuenta de la bácula (necesario)!",image:"Imagen de fondo (opcional)",model:"¿Tiene un sensor de impedancia?",model1:"Active esta función para mediciones precisas de la composición corporal.",model_aria_label_on:"Activar impedancia",model_aria_label_off:"Desactivar impedancia",unit:"Convertir kg a lbs",unit_aria_label_on:"Activar conversión",unit_aria_label_off:"Desactivar conversión",show_name:"¿Mostrar el nombre de la cuenta como título?",show_name_aria_label_on:"Mostrar nombre como título",show_name_aria_label_off:"Ocultar nombre como título",show_states:"¿Mostrar estado de la báscula?",show_states_aria_label_on:"Mostrar estado de la báscula",show_states_aria_label_off:"Ocultar estado de la báscula",show_attributes:"¿Mostrar datos de perfil personal (esquina superior derecha)?",show_attributes_aria_label_on:"Mostrar atributos",show_attributes_aria_label_off:"Ocultar atributos",show_always_details:"Mostrar siempre los detalles",show_always_details_aria_label_on:"Mostrar la vista de detalles predeterminada",show_always_details_aria_label_off:"Ocultar la vista de detalles predeterminada",show_toolbar:"¿Mostrar opciones avanzadas?",show_toolbar_aria_label_on:"Mostrar opciones avanzadas",show_toolbar_aria_label_off:"Ocultar opciones avanzadas",show_body:"Mostrar más detalles de la medición",show_body1:"¿(parte inferior - pulsar en la fecha para mostrar)?",show_body_aria_label_on:"Mostrar puntuación corporal",show_body_aria_label_off:"Ocultar puntuación corporal",show_buttons:"¿Permitir cambio de cuenta?",show_buttons_aria_label_on:"Mostrar botones de cuenta",show_buttons_aria_label_off:"Ocultar botones de cuenta",header_options:"1. Opciones de cabecera de tarjeta",body_options:"2. Más opciones de tarjeta",code_only_note:"ATENCIÓN: Opciones adicionales sólo están disponibles en el editor de código."},ya={from:"De",height:"Altura de la barra",icon_position:"Posición del ícono",inside:"Dentro",max:"Máx",min:"Mín",minmax_position:"Posición Mín/Máx",name_position:"Posición del nombre",off:"Apagar",outside:"Fuera",target:"Objetivo",to:"A",value_position:"Posición del valor"},fa={color:"Color",disabled:"Deshabilitado",red:"Rojo",pink:"Rosa",purple:"Púrpura","deep-purple":"Púrpura oscuro",indigo:"Índigo",blue:"Azul","light-blue":"Azul claro",cyan:"Cian",teal:"Azul verdoso",green:"Verde","light-green":"Verde claro",lime:"Limón",yellow:"Amarillo",amber:"Ámbar",orange:"Naranja",orangered:"Naranja rojizo","deep-orange":"Naranja oscuro",brown:"Marrón","light-grey":"Gris claro",grey:"Gris","dark-grey":"Gris oscuro","blue-grey":"Gris azulado",darkgreen:"Verde oscuro",royalblue:"Azul real",black:"Negro",white:"Blanco"},va={common:da,states:ca,attributes:_a,attributes_value:ha,body:ma,body_value:ua,unit:ba,error:ga,editor:pa,editor_body:ya,color_select:fa},wa={version:"Version",name:"Carte Bodymiscale",description:"La carte bodymiscale corporelle vous indique votre poids et votre état corporel.",not_available:"Bodymiscale n'est pas disponible",toggle_power:"Plus de détails comme IMC kCal afficher / cacher"},ka={ok:"MESURE : OK",unknown:"ÉTAT : inconnu",problem:"Problème",none:"Aucun",weight_unavailable:"Poids indisponible",impedance_unavailable:"Impédance indisponible",weight_unavailable_and_impedance_unavailable:"Poids et impédance indisponibles",weight_low:"Poids faible",impedance_low:"Impédance faible",weight_low_and_impedance_low:"Poids et impédance faibles",impedance_low_and_weight_low:"Impédance et poids faibles",weight_high:"Poids élevé",impedance_high:"Impédance élevée",weight_high_and_impedance_high:"Poids et impédance élevés",weight_high_and_impedance_low:"Poids élevé, impédance faible",weight_low_and_impedance_high:"Poids faible, impédance élevée"},za={"weight: ":"Poids: ","impedance: ":"Impédance: ","height: ":"Taille: ","age: ":"Age: ","gender: ":"Genre: "},xa={male:"homme",female:"femme",unavailable:"indisponible"},$a={bmi:"IMC",bmi_label:"Étiquette IMC",visceral_fat:"Graisse viscérale",body_fat:"Graisse corporelle",protein:"Protéine",water:"Eau",muscle_mass:"Masse musculaire",bone_mass:"Masse osseuse",weight:"Poids",ideal:"Poids idéal",basal_metabolism:"Métabolisme de base",body_type:"Corpulence",metabolic_age:"Age corporel"},Aa={skinny:"Maigre",balanced_skinny:"Équilibré maigre",skinny_muscular:"Maigre musclé",balanced:"Équilibré",balanced_muscular:"Musclé équilibré",lack_exercise:"Manque d'exercice",thick_set:"Trapu",obese:"Obèse",overweight:"Surpoids",underweight:"Insuffisance pondérale",normal_or_healthy_weight:"Normal - poids de santé",slight_overweight:"Léger surpoids",moderate_obesity:"Obésité modérée",severe_obesity:"Obésité sévère",massive_obesity:"Obésité massive",unavailable:"indisponible"},Ma={" years":" ans"},Pa={invalid_config:"Configuration invalide",missing_entity:"Veuillez définir une entité.",missing_entity_bodymiscale:"Veuillez définir une entité Bodymiscale."},Ca={configuration:"Configuration",customization:"Personnalisation",entity:"Veuillez choisir un compte de la balance (obligatoire) !",image:"Image de fond (facultatif)",model:"Vous avez un capteur d'impédance ?",model1:"Activez cette fonctionnalité pour des mesures corporelle précises.",model_aria_label_on:"Activez l'impédance",model_aria_label_off:"Désactiver l'impédance",unit:"Convertir les kg en lbs",unit_aria_label_on:"Activer la conversion",unit_aria_label_off:"Désactiver la conversion",theme:"Configurer le thème que vous utilisez.",theme_aria_label_on:"Activer thème clair",theme_aria_label_off:"Désactiver thème sombre",show_name:"Afficher le nom du compte comme titre ?",show_name_aria_label_on:"Activer affichage du nom",show_name_aria_label_off:"Désactiver affichage du nom",show_states:"Afficher l'état ?",show_states_aria_label_on:"Activer l'affichage de l'état",show_states_aria_label_off:"Désactiver l'affichage de l'état",show_attributes:"Afficher les données personnelles de base (en haut à droite) ?",show_attributes_aria_label_on:"Activer l'affichage des données personnelles de base",show_attributes_aria_label_off:"Désactiver l'affichage des données personnelles de base",show_always_details:"Toujours afficher les détails",show_always_details_aria_label_on:"Activer l'affichage des détails par défaut",show_always_details_aria_label_off:"Désactiver l'affichage des détails par défaut",show_toolbar:"Afficher les options avancées ?",show_toolbar_aria_label_on:"Activer l'affichage des options avancées",show_toolbar_aria_label_off:"Désactiver l'affichage des options avancées",show_body:"Offrir d'autres détails de mesure",show_body1:"(partie inférieure - affichage via l'icone chevron bas) ?",show_body_aria_label_on:"Activer l'affichage des autres détails de mesure",show_body_aria_label_off:"Désactiver l'affichage des autres détails de mesure",show_buttons:"Autoriser le changement de compte ?",show_buttons_aria_label_on:"Activer le changement de compte",show_buttons_aria_label_off:"Désactiver le changement de compte",header_options:"1. Options d'en-tête de la carte",body_options:"2. Plus d'options de la cartes",code_only_note:"ATTENTION: Les options supplémentaires ne sont disponibles que dans l'éditeur de code."},Sa={from:"De",height:"Hauteur de la barre",icon_position:"Position de l'icône",inside:"À l'intérieur",max:"Max",min:"Min",minmax_position:"Position Min/Max",name_position:"Position du nom",off:"Désactivé",outside:"À l'extérieur",target:"Cible",to:"À",value_position:"Position de la valeur"},Ia={color:"Couleur",disabled:"Désactivé",red:"Rouge",pink:"Rose",purple:"Violet","deep-purple":"Violet foncé",indigo:"Indigo",blue:"Bleu","light-blue":"Bleu clair",cyan:"Cyan",teal:"Turquoise",green:"Vert","light-green":"Vert clair",lime:"Vert citron",yellow:"Jaune",amber:"Ambre",orange:"Orange",orangered:"Rouge orange","deep-orange":"Orange foncé",brown:"Marron","light-grey":"Gris clair",grey:"Gris","dark-grey":"Gris foncé","blue-grey":"Bleu gris",darkgreen:"Vert foncé",royalblue:"Blue roi",black:"Noir",white:"Blanc"},Ta={common:wa,states:ka,attributes:za,attributes_value:xa,body:$a,body_value:Aa,unit:Ma,error:Pa,editor:Ca,editor_body:Sa,color_select:Ia},ja={version:"Verzió",name:"Bodymiscale Kártya",description:"A BodyMiScale kártya megmutatja az ön súlyhoz viszonyított testi állapotát.",not_available:"A Bodymiscale nem elérhető",toggle_power:"További részletek, például a BMI, kCal megjelenítése / elrejtése"},Oa={ok:"MÉRÉS: RENDBEN",unknown:"ÁLLAPOT: ismeretlen",problem:"Probléma",none:"Nincs",weight_unavailable:"Súly nem elérhető",impedance_unavailable:"Impedancia nem elérhető",weight_unavailable_and_impedance_unavailable:"Súly és impedancia nem elérhető",weight_low:"Alacsony súly",impedance_low:"Alacsony impedancia",weight_low_and_impedance_low:"Alacsony súly és impedancia",impedance_low_and_weight_low:"Alacsony impedancia és súly",weight_high:"Magas súly",impedance_high:"Magas impedancia",weight_high_and_impedance_high:"Magas súly és impedancia",weight_high_and_impedance_low:"Magas súly, alacsony impedancia",weight_low_and_impedance_high:"Alacsony súly, magas impedancia"},Ba={"weight: ":"Súly: ","impedance: ":"Impedancia: ","height: ":"Magasság: ","age: ":"Kor: ","gender: ":"Nem: "},Ea={male:"férfi",female:"nő",unavailable:"nem elérhető"},Na={bmi:"BMI",bmi_label:"BMI címke",visceral_fat:"Zsigeri zsír",body_fat:"Testzsír",protein:"Fehérje",water:"Víz",muscle_mass:"Izomtömeg",bone_mass:"Csonttömeg",weight:"Súly",ideal:"Ideális",basal_metabolism:"Alapanyagcsere",body_type:"Testtípus",metabolic_age:"Anyagcsere kor"},Da={skinny:"Sovány",balanced_skinny:"Kiegyensúlyozott-sovány",skinny_muscular:"Sovány-izmos",balanced:"Kiegyensúlyozott",balanced_muscular:"Kiegyensúlyozott-izmos",lack_exercise:"Mozgáshiányos",thick_set:"Közepesen molett",obese:"Kórosan elhízott",overweight:"Túlsúlyos",underweight:"Súlyhiányos",normal_or_healthy_weight:"Normál vagy egészséges testsúly",slight_overweight:"Enyhe túlsúly",moderate_obesity:"Közepes elhízottság",severe_obesity:"Súlyos elhízottság",massive_obesity:"Masszív elhízottság",unavailable:"nem elérhető"},Va={" years":" év"},Ga={missing_entity:"Kérjük, definiáljon egy entitást.",missing_entity_bodymiscale:"Kérjük, definiáljon egy BodyMiScale entitást."},qa={entity:"Kérjük, válasszon egy fiókot a mérlegen (kötelező)!",image:"Háttérkép (opcionális)",model:"Rendelkezik impedancia érzékelővel?",model1:"A pontos testösszetétel mérésekhez aktiválja ezt a funkciót.",model_aria_label_on:"Impedancia engedélyezése",model_aria_label_off:"Impedancia letiltása",unit:"Kg átszámítása fonttá",unit_aria_label_on:"Átszámítás bekapcsolása",unit_aria_label_off:"Átszámítás kikapcsolása",theme:"Állítsa be a használt témát.",theme_aria_label_on:"Világos téma bekapcsolása",theme_aria_label_off:"Sötét téma kikapcsolása",show_name:"Mutassa a fiók nevét címként?",show_name_aria_label_on:"Név megjelenítésének bekapcsolása",show_name_aria_label_off:"Név megjelenítésének kikapcsolása",show_states:"Állapot mutatása?",show_states_aria_label_on:"Állapot megjelenítésének bekapcsolása",show_states_aria_label_off:"Állapot megjelenítésének kikapcsolása",show_attributes:"Személyes adatok mutatása (jobb felső sarokban)?",show_attributes_aria_label_on:"Személyes adatok megjelenítésének bekapcsolása",show_attributes_aria_label_off:"Személyes adatok megjelenítésének kikapcsolása",show_always_details:"Mindig mutassa a részleteket",show_always_details_aria_label_on:"Alapértelmezett részletes nézet bekapcsolása",show_always_details_aria_label_off:"Alapértelmezett részletes nézet kikapcsolása",show_toolbar:"Mutassa a haladó beállításokat?",show_toolbar_aria_label_on:"Haladó beállítások megjelenítésének bekapcsolása",show_toolbar_aria_label_off:"Haladó beállítások megjelenítésének kikapcsolása",show_body:"Kínáljon további mérési részleteket",show_body1:"(alsó rész - a lefelé mutató nyíl ikonra kattintva megjeleníthető)?",show_body_aria_label_on:"Test pontszám megjelenítésének bekapcsolása",show_body_aria_label_off:"Test pontszám megjelenítésének kikapcsolása",show_buttons:"Fiókváltás engedélyezése?",show_buttons_aria_label_on:"Gombok megjelenítésének bekapcsolása",show_buttons_aria_label_off:"Gombok megjelenítésének kikapcsolása",header_options:"1. Kártya fejléc beállítások",body_options:"2. További kártya beállítások",code_only_note:"FIGYELEM: További beállítások csak a kód szerkesztőben érhetők el."},Ua={from:"Tól",height:"Sáv magassága",icon_position:"Ikon pozíció",inside:"Belső",max:"Max",min:"Min",minmax_position:"Min/Max pozíció",name_position:"Név pozíció",off:"Kikapcsolva",outside:"Külső",target:"Cél",to:"Tovább",value_position:"Érték pozíció"},Wa={color:"Szín",disabled:"Letiltva",red:"Piros",pink:"Rózsaszín",purple:"Lila","deep-purple":"Sötét lila",indigo:"Indigó",blue:"Kék","light-blue":"Világoskék",cyan:"Cián",teal:"Türkiz",green:"Zöld","light-green":"Világoszöld",lime:"Lime",yellow:"Sárga",amber:"Borostyán",orange:"Narancs",orangered:"Narancsvörös","deep-orange":"Sötét narancs",brown:"Barna","light-grey":"Világosszürke",grey:"Szürke","dark-grey":"Sötétszürke","blue-grey":"Kékszürke",darkgreen:"Sötétzöld",royalblue:"Királykék",black:"Fekete",white:"Fehér"},Ka={common:ja,states:Oa,attributes:Ba,attributes_value:Ea,body:Na,body_value:Da,unit:Va,error:Ga,editor:qa,editor_body:Ua,color_select:Wa},La={version:"Versione",name:"Bodymiscale Card",description:"La card bodymiscale ti mostra il tuo peso/stato corporeo relativo.",not_available:"Bodymiscale non è disponibile",toggle_power:"Più dettagli come BMI kCal mostra / nascondi"},Ra={ok:"MISURAZIONE: OK",unknown:"STATO: sconosciuto",problem:"Problema",none:"Nessuno",weight_unavailable:"Peso non disponibile",impedance_unavailable:"Impedenza non disponibile",weight_unavailable_and_impedance_unavailable:"Peso e impedenza non disponibili",weight_low:"Peso basso",impedance_low:"Impedenza bassa",weight_low_and_impedance_low:"Peso e impedenza bassi",impedance_low_and_weight_low:"Impedenza e peso bassi",weight_high:"Peso alto",impedance_high:"Impedenza alta",weight_high_and_impedance_high:"Peso e impedenza alti",weight_high_and_impedance_low:"Peso alto, impedenza bassa",weight_low_and_impedance_high:"Peso basso, impedenza alta"},Ha={"weight: ":"Peso: ","impedance: ":"Impedenza: ","height: ":"Altezza: ","age: ":"Età: ","gender: ":"Sesso: "},Za={male:"uomo",female:"donna",unavailable:"non disponibile"},Fa={bmi:"BMI",bmi_label:"BMI Categoria",visceral_fat:"Grasso viscerale",body_fat:"Grasso corporeo",protein:"Proteine",water:"Acqua",muscle_mass:"Massa muscolare",bone_mass:"Massa ossea",weight:"Peso",ideal:"Ideale",basal_metabolism:"Metabolismo base",body_type:"Tipo di corpo",metabolic_age:"Età metabolica"},Ja={skinny:"Magro",balanced_skinny:"Bilanciato-magro",skinny_muscular:"Magro-muscoloso",balanced:"Bilanciato",balanced_muscular:"Bilanciato-muscoloso",lack_exercise:"Manca-esercizio",thick_set:"Spesso-impostato",obese:"Obeso",overweight:"Sovrappeso",underweight:"Sottopeso",normal_or_healthy_weight:"Normale o Peso Sano",slight_overweight:"Leggermente in sovrappeso",moderate_obesity:"Obesità Moderata",severe_obesity:"Obesità Grave",massive_obesity:"Obesità Massiccia",unavailable:"non disponibile"},Xa={" years":" anni"},Ya={missing_entity:"Perfavore definisci un'entità.",missing_entity_bodymiscale:"Perfavore definisci un'entità di tipo bodymiscale."},Qa={entity:"Perfavore seleziona un account sulla bilancia (richiesto) !",image:"Immagine di sfondo (opzionale)",model:"Hai un sensore di impedenza?",model1:"Attiva questa funzione per misurazioni accurate della composizione corporea.",model_aria_label_on:"Abilita impedenza",model_aria_label_off:"Disabilita impedenza",unit:"Converti da kg a lbs",unit_aria_label_on:"Attiva la conversione",unit_aria_label_off:"Disattiva la conversione",show_name:"Mostrare il nome dell'account come titolo  ?",show_name_aria_label_on:"Attiva la visione del nome",show_name_aria_label_off:"Disattiva la visione del nome",show_states:"Mostrare lo Stato ?",show_states_aria_label_on:"Attiva la visione dello stato",show_states_aria_label_off:"Disattiva la visione dello stato",show_attributes:"Mostrare i dati anagrafici personali (in alto a destra) ?",show_attributes_aria_label_on:"Attiva la visione degli attributi",show_attributes_aria_label_off:"Disattiva la visione degli attributi",show_always_details:"Mostra sempre i dettagli",show_always_details_aria_label_on:"Attiva la visualizzazione dettagliata predefinita",show_always_details_aria_label_off:"Disattiva la visualizzazione dettagliata predefinita",show_toolbar:"Mostrare opzioni avanzate ?",show_toolbar_aria_label_on:"Attiva opzioni avanzate",show_toolbar_aria_label_off:"Disattiva opzioni avanzate",show_body:"Offrire ulteriori dettagli di misurazione",show_body1:"(metà inferiore - l'icona con la spunta ve li mostrerà) ?",show_body_aria_label_on:"Attiva la visione del punteggio del corpo",show_body_aria_label_off:"Disattiva la visione del punteggio del corpo",show_buttons:"Consenti il cambio di account ?",show_buttons_aria_label_on:"Attiva la visione dei pulsanti",show_buttons_aria_label_off:"Disattiva la visione dei pulsanti",header_options:"1. Opzioni di intestazione della card",body_options:"2. Ulteriori opzioni della card",code_only_note:"ATTENZIONE: Le opzioni aggiuntive sono disponibili solo nella modalità editor di codice."},eo={from:"Da",height:"Altezza barra",icon_position:"Posizione icona",inside:"Dentro",max:"Max",min:"Min",minmax_position:"Posizione Min/Max",name_position:"Posizione nome",off:"Spento",outside:"Fuori",target:"Destinazione",to:"A",value_position:"Posizione valore"},ao={color:"Colore",disabled:"Disabilitato",red:"Rosso",pink:"Rosa",purple:"Viola","deep-purple":"Viola scuro",indigo:"Indaco",blue:"Blu","light-blue":"Azzurro",cyan:"Ciano",teal:"Verde acqua",green:"Verde","light-green":"Verde chiaro",lime:"Lime",yellow:"Giallo",amber:"Ambra",orange:"Arancione",orangered:"Arancione rosso","deep-orange":"Arancione scuro",brown:"Marrone","light-grey":"Grigio chiaro",grey:"Grigio","dark-grey":"Grigio scuro","blue-grey":"Blu grigio",darkgreen:"Verde scuro",royalblue:"Blu reale",black:"Nero",white:"Bianco"},oo={common:La,states:Ra,attributes:Ha,attributes_value:Za,body:Fa,body_value:Ja,unit:Xa,error:Ya,editor:Qa,editor_body:eo,color_select:ao},io={version:"Version",name:"Bodymiscale Card",description:"ボディミスケール カードは、体重や関連する身体の状態を表示します。",not_available:"Bodymiscale は利用できません",toggle_power:"BMI kCal などの詳細を表示/非表示"},to={ok:"測定: OK",unknown:"状態: 不明",problem:"問題",none:"なし",weight_unavailable:"体重が利用できません",impedance_unavailable:"インピーダンスが利用できません",weight_unavailable_and_impedance_unavailable:"体重とインピーダンスが利用できません",weight_low:"体重が低い",impedance_low:"インピーダンスが低い",weight_low_and_impedance_low:"体重とインピーダンスが低い",impedance_low_and_weight_low:"インピーダンスと体重が低い",weight_high:"体重が高い",impedance_high:"インピーダンス高",weight_high_and_impedance_high:"体重とインピーダンスが高い",weight_high_and_impedance_low:"体重は高いが、インピーダンスは低い",weight_low_and_impedance_high:"体重は低く、インピーダンスは高い"},no={"weight: ":"体重: ","impedance: ":"インピーダンス: ","height: ":"高さ: ","age: ":"年齢: ","gender: ":"性別: "},ro={male:"男性",female:"女性",unavailable:"利用不可"},so={bmi:"BMI",bmi_label:"BMI ラベル",visceral_fat:"内臓脂肪",body_fat:"体脂肪",protein:"タンパク質",water:"水分",muscle_mass:"筋肉量",bone_mass:"骨量",weight:"体重",ideal:"理想",basal_metabolism:"基礎代謝",body_type:"体型",metabolic_age:"代謝年齢"},lo={skinny:"痩せすぎ",balanced_skinny:"バランスの取れた瘦せ型",skinny_muscular:"細身筋肉質",balanced:"バランスの取れた",balanced_muscular:"バランスの取れた筋肉質",lack_exercise:"運動不足",thick_set:"がっしり体型",obese:"肥満",overweight:"太りすぎ",underweight:"低体重",normal_or_healthy_weight:"正常または健康的な体重",slight_overweight:"少し太りすぎ",moderate_obesity:"中程度の肥満",severe_obesity:"重度の肥満",massive_obesity:"極度の肥満",unavailable:"利用不可"},co={" years":" 年齢"},_o={invalid_config:"無効な設定です",missing_entity:"エンティティを設定して下さい。",missing_entity_bodymiscale:"bodymiscale エンティティを定義してください。"},ho={entity:"スケール上のアカウントを選択してください (必須)!",image:"背景画像（オプション）",model:"インピーダンスセンサーはありますか?",model1:"正確な体組成測定のためにこの機能を有効にしてください。",model_aria_label_on:"インピーダンスを有効にする",model_aria_label_off:"インピーダンスを無効にする",unit:"kg を lbs に変換する",unit_aria_label_on:"変換をオンに切り替えます",unit_aria_label_off:"変換をオフに切り替えます",theme:"使用するテーマを設定します。",theme_aria_label_on:"テーマライトをオンに切り替えます",theme_aria_label_off:"テーマダークをオフに切り替えます",show_name:"アカウント名をタイトルとして表示しますか?",show_name_aria_label_on:"表示名をオンに切り替えます",show_name_aria_label_off:"表示名をオフに切り替えます",show_states:"状態を表示しますか?",show_states_aria_label_on:"表示状態をオンに切り替えます",show_states_aria_label_off:"表示状態をオフに切り替えます",show_attributes:"個人マスターデータを表示しますか (右上)?",show_attributes_aria_label_on:"表示属性をオンに切り替えます",show_attributes_aria_label_off:"表示属性をオフに切り替えます",show_always_details:"常に詳細を表示する",show_always_details_aria_label_on:"デフォルトの詳細ビューをオンに切り替えます",show_always_details_aria_label_off:"デフォルトの詳細ビューをオフに切り替えます",show_toolbar:"詳細オプションを表示しますか?",show_toolbar_aria_label_on:"詳細オプションの表示をオンに切り替えます",show_toolbar_aria_label_off:"詳細オプションの表示をオフに切り替えます",show_body:"測定の詳細をさらに表示する",show_body1:"(下半分 - 下向きの矢印アイコンが表示されます)?",show_body_aria_label_on:"ボディスコアの表示をオンに切り替えます",show_body_aria_label_off:"ボディスコアの表示をオフに切り替えます",show_buttons:"アカウントの切り替えを許可しますか?",show_buttons_aria_label_on:"表示ボタンをオンに切り替えます",show_buttons_aria_label_off:"表示ボタンをオフに切り替えます",header_options:"1. カード ヘッダー オプション",body_options:"2. その他のカードオプション",code_only_note:"注意: 追加オプションはコード エディターでのみ使用できます。"},mo={from:"から",height:"バーの高さ",icon_position:"アイコンの位置",inside:"内側",max:"最大",min:"最小",minmax_position:"最小/最大の位置",name_position:"名前の位置",off:"オフ",outside:"外側",target:"ターゲット",to:"へ",value_position:"値の位置"},uo={color:"色",disabled:"無効",red:"赤",pink:"ピンク",purple:"紫","deep-purple":"濃い紫",indigo:"インディゴ",blue:"青","light-blue":"水色",cyan:"シアン",teal:"ティール",green:"緑","light-green":"薄緑",lime:"ライム",yellow:"黄色",amber:"アンバー",orange:"オレンジ",orangered:"赤橙色","deep-orange":"濃いオレンジ",brown:"茶色","light-grey":"ライトグレー",grey:"グレー","dark-grey":"ダークグレー","blue-grey":"青灰色",darkgreen:"ダークグリーン",royalblue:"ロイヤルブルー",black:"黒",white:"白"},bo={common:io,states:to,attributes:no,attributes_value:ro,body:so,body_value:lo,unit:co,error:_o,editor:ho,editor_body:mo,color_select:uo},go={version:"Versie",name:"Bodymiscale Card",description:"De bodymiscale kaart toont u uw gewicht / gerelateerde lichaamsstatus.",not_available:"Bodymiscale is niet beschikbaar",toggle_power:"Meer details zoals BMI kCal tonen / verbergen"},po={ok:"METING: OK",unknown:"STATUS: onbekend",problem:"Probleem",none:"Geen",weight_unavailable:"Gewicht niet beschikbar",impedance_unavailable:"Impedantie niet beschikbaar",weight_unavailable_and_impedance_unavailable:"Gewicht en impedantie niet beschikbaar",weight_low:"Gewicht laag",impedance_low:"Impedantie laag",weight_low_and_impedance_low:"Laag gewicht en impedantie",impedance_low_and_weight_low:"Lage impedantie en gewicht",weight_high:"Gewicht hoog",impedance_high:"Impedantie hoog",weight_high_and_impedance_high:"Hoog gewicht en impedantie",weight_high_and_impedance_low:"Gewicht hoog, impedantie laag",weight_low_and_impedance_high:"Gewicht laag, impedantie hoog"},yo={"weight: ":"Gewicht: ","impedance: ":"Impedantie: ","height: ":"Lengte: ","age: ":"Leeftijd: ","gender: ":"Geslacht: "},fo={male:"man",female:"vrouw",unavailable:"niet beschikbaar"},vo={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Visceraal vet",body_fat:"Lichaamsvet",protein:"Proteine",water:"Water",muscle_mass:"Spiermassa",bone_mass:"Botgewicht",weight:"Gewicht",ideal:"Ideaal",basal_metabolism:"Basaal metabolisme",body_type:"Lichaamstype",metabolic_age:"Metabolistische leeftijd"},wo={skinny:"Mager",balanced_skinny:"Gebalanceerd-mager",skinny_muscular:"Mager-gespierd",balanced:"Gebalanceerd",balanced_muscular:"Gebalanceerd-gespierd",lack_exercise:"Weinig-beweging",thick_set:"Dik",obese:"Obesitas",overweight:"Overgewicht",underweight:"Ondergewicht",normal_or_healthy_weight:"Normaal of gezond gewicht",slight_overweight:"Licht overgewicht",moderate_obesity:"Gemiddeld overgewicht",severe_obesity:"Ruim overgewicht",massive_obesity:"Enorm overgewicht",unavailable:"niet beschikbaar"},ko={" years":" jaren"},zo={missing_entity:"Geef een entiteit in.",missing_entity_bodymiscale:"Geef een bodymiscale entiteit in."},xo={entity:"Kies een account op de schaal (verplicht) !",image:"Achtergrondafbeelding (facultatief)",model:"Heeft u een impedantie sensor?",model1:"Activeer deze functie voor nauwkeurige metingen van de lichaamssamenstelling.",model_aria_label_on:"Impedantie inschakelen",model_aria_label_off:"Impedantie uitschakelen",unit:"Converteer kg naar lbs",unit_aria_label_on:"Activeer conversie",unit_aria_label_off:"Conversie deactiveren",show_name:"Toon de naam van de rekening als titel ?",show_name_aria_label_on:"Zet naam aan",show_name_aria_label_off:"Zet naam uit",show_states:"Geef status weer ?",show_states_aria_label_on:"Zet status aan",show_states_aria_label_off:"Zet status uit",show_attributes:"Persoonlijke stamgegevens weergeven (rechtsboven) ?",show_attributes_aria_label_on:"Zet attributen aan",show_attributes_aria_label_off:"Zet attributen uit",show_always_details:"Toon altijd details",show_always_details_aria_label_on:"Zet standaard detailweergave aan",show_always_details_aria_label_off:"Zet standaard detailweergave uit",show_toolbar:"Toon geavanceerde opties ?",show_toolbar_aria_label_on:"Zet knoppenbalk aan",show_toolbar_aria_label_off:"Zet knoppenbalk uit",show_body:"Bieden verdere meting details",show_body1:"(onderste helft - pictogram chevron naar beneden zal tonen die) ?",show_body_aria_label_on:"Zet lichaamsscore aan",show_body_aria_label_off:"Zet lichaamsscore uit",show_buttons:"Accountwissel toestaan ?",show_buttons_aria_label_on:"Zet knoppen aan",show_buttons_aria_label_off:"Zet knoppen uit",header_options:"1. Kaart koptekst opties",body_options:"2. Meer boordopties",code_only_note:"LET OP: Extra opties zijn alleen beschikbaar in de code editor."},$o={from:"Van",height:"Balkhoogte",icon_position:"Pictogrampositie",inside:"Binnen",max:"Max",min:"Min",minmax_position:"Min/Max Positie",name_position:"Naam Positie",off:"Uit",outside:"Buiten",target:"Doel",to:"Naar",value_position:"Waarde Positie"},Ao={color:"Kleur",disabled:"Uitgeschakeld",red:"Rood",pink:"Roze",purple:"Paars","deep-purple":"Dieppaars",indigo:"Indigo",blue:"Blauw","light-blue":"Lichtblauw",cyan:"Cyaan",teal:"Blauwgroen",green:"Groen","light-green":"Lichtgroen",lime:"Limoen",yellow:"Geel",amber:"Amber",orange:"Oranje",orangered:"Rood-oranje","deep-orange":"Dieporanje",brown:"Bruin","light-grey":"Lichtgrijs",grey:"Grijs","dark-grey":"Donkergrijs","blue-grey":"Blauwgrijs",darkgreen:"Donkergroen",royalblue:"Koningsblauw",black:"Zwart",white:"Wit"},Mo={common:go,states:po,attributes:yo,attributes_value:fo,body:vo,body_value:wo,unit:ko,error:zo,editor:xo,editor_body:$o,color_select:Ao},Po={version:"Wersja",name:"Karta Bodymiscale",description:"Karta BodyMiScale pokazuje Twoją wagę oraz parametry ciała.",not_available:"Bodymiscale jest niedostępna",toggle_power:"Więcej szczegółów jak BMI kCal - pokaż / ukryj"},Co={ok:"POMIAR: OK",unknown:"STATUS: nieznany",problem:"Problem",none:"Brak",weight_unavailable:"Waga niedostępna",impedance_unavailable:"Impedancja niedostępna",weight_unavailable_and_impedance_unavailable:"Waga i impedancja niedostępne",weight_low:"Niska waga",impedance_low:"Niska impedancja",weight_low_and_impedance_low:"Niska waga i impedancja",impedance_low_and_weight_low:"Niska impedancja i waga",weight_high:"Waga wysoka",impedance_high:"Impedancja wysoka",weight_high_and_impedance_high:"Wysoka waga i impedancja",weight_high_and_impedance_low:"Waga wysoka a impedancja niska",weight_low_and_impedance_high:"Waga nizska a impedancja wysoka"},So={"weight: ":"Waga: ","impedance: ":"Impedancja: ","height: ":"Wzrost: ","age: ":"Wiek: ","gender: ":"Płeć: "},Io={male:"męska",female:"żeńska",unavailable:"niedstępna"},To={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Tłuszcz brzuszny",body_fat:"Tłuszcz Ciała",protein:"Białko",water:"Woda",muscle_mass:"Masa mięśniowa",bone_mass:"Masa kostna",weight:"Waga",ideal:"Idealna",basal_metabolism:"Metabolizm podstawowy",body_type:"Typ sylwetki",metabolic_age:"Wiek metaboliczny"},jo={skinny:"Chudy",balanced_skinny:"Umiarkowanie chudy",skinny_muscular:"Chudy muskularny",balanced:"Zrównoważony",balanced_muscular:"Zrównoważony muskularny",lack_exercise:"Mało aktywny",thick_set:"Gruby",obese:"Otyły",overweight:"Nadwaga",underweight:"Niedowaga",normal_or_healthy_weight:"Normalna lub zdrowa waga",slight_overweight:"Lekka nadwaga",moderate_obesity:"Lekka otyłość",severe_obesity:"Średnia otyłość",massive_obesity:"Poważna otyłość",unavailable:"niedostępny"},Oo={" years":" lat"},Bo={missing_entity:"Proszę zdefiniuj encje.",missing_entity_bodymiscale:"Proszę zdefiniuj encję bodymiscale."},Eo={entity:"Proszę wybierz konto na wadze (wymagane)!",image:"Obraz tła (opcjonalne)",model:"Czy masz czujnik impedancji?",model1:"Włącz tę funkcję, aby uzyskać dokładne pomiary składu ciała.",model_aria_label_on:"Włącz impedancję",model_aria_label_off:"Wyłącz impedancję",unit:"Zamień kg na lbs",unit_aria_label_on:"Włącz opcję konwersji",unit_aria_label_off:"Włącz opcję konwersji",theme:"Wybierz rodza motywu.",theme_aria_label_on:"Włącz jasny motyw",theme_aria_label_off:"Włącz ciemny motyw",show_name:"Użyć imienia jako tytułu karty?",show_name_aria_label_on:"Włącz opcję imienia jako tytułu",show_name_aria_label_off:"Wyłącz opcję imienia jako tytułu",show_states:"Wyświetlić stan?",show_states_aria_label_on:"Włącz wyświetlanie stanu",show_states_aria_label_off:"Wyłącz wyświetlanie stanu",show_attributes:"Show personal master data (gora po prawej)?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Zawsze pokazuj szczegóły",show_always_details_aria_label_on:"Włącz domyślny widok szczegółów",show_always_details_aria_label_off:"Wyłącz domyślny widok szczegółów",show_toolbar:"Pokazać zaawansowane opcje?",show_toolbar_aria_label_on:"Włącz zaawansowane opcje",show_toolbar_aria_label_off:"Wyłącz zaawansowane opcje",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those)?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Opcje nagłówka",body_options:"2. Więcej opcji karty",code_only_note:"UWAGA: Dodatkowe opcje dostępne są tylko poprzez edycje kodu."},No={from:"Od",height:"Wysokość paska",icon_position:"Pozycja ikony",inside:"Wewnątrz",max:"Max",min:"Min",minmax_position:"Pozycja Min/Max",name_position:"Pozycja nazwy",off:"Wyłącz",outside:"Na zewnątrz",target:"Cel",to:"Do",value_position:"Pozycja wartości"},Do={color:"Kolor",disabled:"Wyłączone",red:"Czerwony",pink:"Różowy",purple:"Fioletowy","deep-purple":"Ciemnofioletowy",indigo:"Indygo",blue:"Niebieski","light-blue":"Jasnoniebieski",cyan:"Błękitny",teal:"Nadmorskizielony",green:"Zielony","light-green":"Jasnozielony",lime:"Limonkowy",yellow:"Żółty",amber:"Bursztynowy",orange:"Pomarańczowy",orangered:"Czerwono-pomarańczowy","deep-orange":"Ciemnopomarańczowy",brown:"Brązowy","light-grey":"Jasnoszary",grey:"Szary","dark-grey":"Ciemnoszary","blue-grey":"Niebieskoszary",darkgreen:"Ciemnozielony",royalblue:"Królestwo Niebieskie",black:"Czarny",white:"Biały"},Vo={common:Po,states:Co,attributes:So,attributes_value:Io,body:To,body_value:jo,unit:Oo,error:Bo,editor:Eo,editor_body:No,color_select:Do},Go={version:"Versão",name:"Bodymiscale Card",description:"O cartão bodymiscale mostra-lhe o estado do seu corpo em relação ao peso.",not_available:"Bodymiscale não está disponível",toggle_power:"Mostrando/escondendo mais detalhes tal como o kCal,IMC"},qo={ok:"MEDIÇÃO: OK",unknown:"ESTATUTO: desconhecido",problem:"Problema",none:"Nenhum",weight_unavailable:"Peso indisponível",impedance_unavailable:"Impedância indisponível",weight_unavailable_and_impedance_unavailable:"Peso e impedância indisponíveis",weight_low:"Peso baixo",impedance_low:"Impedância baixa",weight_low_and_impedance_low:"Peso e impedância baixos",impedance_low_and_weight_low:"Impedância e peso baixos",weight_high:"Peso alto",impedance_high:"Impedância alta",weight_high_and_impedance_high:"Peso e impedância altos",weight_high_and_impedance_low:"Peso alto, impedância baixa",weight_low_and_impedance_high:"Peso baixo, impedância alta"},Uo={"weight: ":"Peso: ","impedance: ":"Impedância: ","height: ":"Altura: ","age: ":"Idade: ","gender: ":"Gênero: "},Wo={male:"masculino",female:"femenino",unavailable:"indisponível"},Ko={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Gordura visceral",body_fat:"Gordura corporal",protein:"Proteína",water:"Água",muscle_mass:"Massa muscular",bone_mass:"Massa óssea",weight:"Peso",ideal:"Ideal",basal_metabolism:"Metabolismo basal",body_type:"Tipo de corpo",metabolic_age:"Idade metabólica"},Lo={skinny:"Magro",balanced_skinny:"Magro equilibrado",skinny_muscular:"Magro musculoso",balanced:"Equilibrado",balanced_muscular:"Musculoso equilibrado",lack_exercise:"Falta de exercício",thick_set:"Estatura sólida",obese:"Obeso",overweight:"Acima do peso normal",underweight:"Abaixo do peso normal",normal_or_healthy_weight:"Normal",slight_overweight:"Ligeiramente acima do peso",moderate_obesity:"Obesidade moderada",severe_obesity:"Obesidade severa",massive_obesity:"Obesidade maciça",unavailable:"indisponível"},Ro={" years":" Anos"},Ho={missing_entity:"Por favor, defina uma entidade.",missing_entity_bodymiscale:"Por favor, defina uma entidade bodymiscale."},Zo={entity:"Por favor, escolha a entidade da balança com o nome da pessoa (obrigatório) !",image:"Imagem de fundo (opcional)",model:"Tem um sensor de impedância?",model1:"Ative esta função para medições precisas da composição corporal.",model_aria_label_on:"Ativar impedância",model_aria_label_off:"Desativar impedância",unit:"Converter kg em libras",unit_aria_label_on:"Ativar a conversão kg para lbs",unit_aria_label_off:"Desativar a conversão kg para lbs",show_name:"Mostrar o nome da conta como título ?",show_name_aria_label_on:"Mostrar o nome como título",show_name_aria_label_off:"Esconder o nome como título",show_states:"Mostrar Estado da balança ?",show_states_aria_label_on:"Mostrar o estado da balança",show_states_aria_label_off:"Esconder o estado da balança",show_attributes:"Mostrar os dados do perfil pessoal (canto superior direito) ?",show_attributes_aria_label_on:"Mostrar atributos",show_attributes_aria_label_off:"Esconder atributos",show_always_details:"Mostrar sempre detalhes",show_always_details_aria_label_on:"Alternar a vista de detalhe por defeito em",show_always_details_aria_label_off:"Alternar a vista de detalhe por defeito",show_toolbar:"Mostrar opções avançadas ?",show_toolbar_aria_label_on:"Mostrar a barra de ferramentas",show_toolbar_aria_label_off:"Esconder a barra de ferramentas",show_body:"Mostrar mais detalhes da medição",show_body1:"(parte inferior - clicar na seta para mostrar) ?",show_body_aria_label_on:"Mostrar mais detalhes no corpo",show_body_aria_label_off:"Esconder mais detalhes no corpo",show_buttons:"Permitir a troca de conta ?",show_buttons_aria_label_on:"Mostrar botões das contas",show_buttons_aria_label_off:"Esconder botões das contas",header_options:"1. Opções do cabeçalho do cartão",body_options:"2. Mais opções do corpo do cartão",code_only_note:"CUIDADO: Opções adicionais estão disponíveis apenas no editor de código."},Fo={from:"De",height:"Altura da barra",icon_position:"Posição do ícone",inside:"Dentro",max:"Máximo",min:"Mínimo",minmax_position:"Posição Min/Max",name_position:"Posição do nome",off:"Desligado",outside:"Fora",target:"Alvo",to:"Para",value_position:"Posição do valor"},Jo={color:"Cor",disabled:"Desativado",red:"Vermelho",pink:"Rosa",purple:"Roxo","deep-purple":"Roxo escuro",indigo:"Índigo",blue:"Azul","light-blue":"Azul claro",cyan:"Ciano",teal:"Azul esverdeado",green:"Verde","light-green":"Verde claro",lime:"Lima",yellow:"Amarelo",amber:"Âmbar",orange:"Laranja",orangered:"Laranja avermelhado","deep-orange":"Laranja escuro",brown:"Marrom","light-grey":"Cinza claro",grey:"Cinza","dark-grey":"Cinza escuro","blue-grey":"Cinza azulado",darkgreen:"Verde escuro",royalblue:"Azul real",black:"Preto",white:"Branco"},Xo={common:Go,states:qo,attributes:Uo,attributes_value:Wo,body:Ko,body_value:Lo,unit:Ro,error:Ho,editor:Zo,editor_body:Fo,color_select:Jo},Yo={version:"Versão",name:"Bodymiscale Card",description:"O cartão bodymiscale mostra-lhe o estado do seu corpo em relação ao peso.",not_available:"Bodymiscale não é avaialável",toggle_power:"Mais detalhes como o kCal show / hide da BMI"},Qo={ok:"MEDIÇÃO: OK",unknown:"ESTATUTO: desconhecido",problem:"Problema",none:"Nenhum",weight_unavailable:"Peso indisponível",impedance_unavailable:"Impedance indisponível",weight_unavailable_and_impedance_unavailable:"Peso e impedância indisponíveis",weight_low:"Peso baixo",impedance_low:"Impedância baixa",weight_low_and_impedance_low:"Peso e impedância baixos",impedance_low_and_weight_low:"Impedância e peso baixos",weight_high:"Peso alto",impedance_high:"Impedância alta",weight_high_and_impedance_high:"Peso e impedância altos",weight_high_and_impedance_low:"Peso alto, impedância baixa",weight_low_and_impedance_high:"Peso baixo, impedância alta"},ei={"weight: ":"Peso: ","impedance: ":"Impedance: ","height: ":"Cintura: ","age: ":"Idade: ","gender: ":"Gênero: "},ai={male:"macho",female:"fêmea",unavailable:"indisponível"},oi={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Gordura visceral",body_fat:"Gordura corporal",protein:"Proteína",water:"Água",muscle_mass:"Massa muscular",bone_mass:"Massa óssea",weight:"Peso",ideal:"Ideal",basal_metabolism:"Metabolismo basal",body_type:"Tipo de corpo",metabolic_age:"Idade metabólica"},ii={skinny:"Magro",balanced_skinny:"Magro equilibrado",skinny_muscular:"Magro musculoso",balanced:"Equilibrado",balanced_muscular:"Musculoso equilibrado",lack_exercise:"Falta de exercício",thick_set:"Grosso-conjunto",obese:"Obeso",overweight:"Sobrepeso",underweight:"Underweight",normal_or_healthy_weight:"Normal",slight_overweight:"Ligeiro acima do peso",moderate_obesity:"Obesidade moderada",severe_obesity:"Obesidade severa",massive_obesity:"Obesidade maciça",unavailable:"indisponível"},ti={" years":" Anos"},ni={missing_entity:"Por favor, defina uma entidade.",missing_entity_bodymiscale:"Por favor, defina uma entidade bodymiscale."},ri={entity:"Por favor, escolha uma conta na escala (obrigatório) !",image:"Imagem de fundo (opcional)",model:"Você tem um sensor de impedância?",model1:"Ative esta função para medições precisas da composição corporal.",model_aria_label_on:"Ativar impedância",model_aria_label_off:"Desativar impedância",unit:"Converter kg em libras",unit_aria_label_on:"Ativar a conversão",unit_aria_label_off:"Desativar a conversão",show_name:"Mostrar o nome da conta como título ?",show_name_aria_label_on:"Alternar o nome da exibição",show_name_aria_label_off:"Alternar o nome da exibição",show_states:"Mostrar Estado ?",show_states_aria_label_on:"Alternar estado de exibição ligado",show_states_aria_label_off:"Alternar estado de exibição fora",show_attributes:"Mostrar dados mestres pessoais (canto superior direito) ?",show_attributes_aria_label_on:"Alternar atributos de exibição em",show_attributes_aria_label_off:"Alternar atributos de exibição fora",show_always_details:"Mostrar sempre detalhes",show_always_details_aria_label_on:"Alternar a visualização de detalhes padrão em",show_always_details_aria_label_off:"Alternar a visualização de detalhes padrão fora",show_toolbar:"Mostrar opções avançadas ?",show_toolbar_aria_label_on:"Alternar a barra de ferramentas do display em",show_toolbar_aria_label_off:"Alternar barra de ferramentas de exibição fora",show_body:"Oferecer mais detalhes de medição",show_body1:"(parte inferior - ícone chevron down mostrará aqueles) ?",show_body_aria_label_on:"Alternar a pontuação do corpo do display em",show_body_aria_label_off:"Alternar a pontuação do corpo do display fora",show_buttons:"Permitir a troca de conta ?",show_buttons_aria_label_on:"Alternar botões de exibição",show_buttons_aria_label_off:"Alternar botões de exibição desligados",header_options:"1. Opções do cabeçalho do cartão",body_options:"2. Mais opções de placas",code_only_note:"CUIDADO: Opções adicionais estão disponíveis apenas no editor de código."},si={from:"De",height:"Altura da barra",icon_position:"Posição do ícone",inside:"Dentro",max:"Máximo",min:"Mínimo",minmax_position:"Posição Min/Max",name_position:"Posição do nome",off:"Desligado",outside:"Fora",target:"Alvo",to:"Para",value_position:"Posição do valor"},li={color:"Cor",disabled:"Desativado",red:"Vermelho",pink:"Rosa",purple:"Roxo","deep-purple":"Roxo escuro",indigo:"Índigo",blue:"Azul","light-blue":"Azul claro",cyan:"Ciano",teal:"Azul esverdeado",green:"Verde","light-green":"Verde claro",lime:"Lima",yellow:"Amarelo",amber:"Âmbar",orange:"Laranja",orangered:"Laranja avermelhado","deep-orange":"Laranja escuro",brown:"Marrom","light-grey":"Cinza claro",grey:"Cinza","dark-grey":"Cinza escuro","blue-grey":"Cinza azulado",darkgreen:"Verde escuro",royalblue:"Azul real",black:"Preto",white:"Branco"},di={common:Yo,states:Qo,attributes:ei,attributes_value:ai,body:oi,body_value:ii,unit:ti,error:ni,editor:ri,editor_body:si,color_select:li},ci={version:"Versiune",name:"Bodymiscale Card",description:"Cardul bodymiscale îți arată starea ta în funcție de greutate/corespunzătoare corpului.",not_available:"Bodymiscale nu este disponibil",toggle_power:"Mai multe detalii precum BMI kCal arată/ascunde"},_i={ok:"MĂSURARE: OK",unknown:"Stare: unknown",problem:"Problemă",none:"Nimic",weight_unavailable:"Greutate indisponibilă",impedance_unavailable:"Impedanță indisponibilă",weight_unavailable_and_impedance_unavailable:"Greutate și impedanță indisponibile",weight_low:"Greutate redusă",impedance_low:"Impedanță scăzută",weight_low_and_impedance_low:"Greutate și impedanță scăzute",impedance_low_and_weight_low:"Impedanță și greutate scăzute",weight_high:"Greutate mare",impedance_high:"Impedanță mare",weight_high_and_impedance_high:"Greutate și impedanță ridicate",weight_high_and_impedance_low:"Greutate mare, impedanță scăzută",weight_low_and_impedance_high:"Greutate redusă, impedanță ridicată"},hi={"weight: ":"Greutate: ","impedance: ":"Impedanță: ","height: ":"Înălţime: ","age: ":"Vârstă: ","gender: ":"Gen: "},mi={male:"masculin",female:"feminin",unavailable:"indisponibil"},ui={bmi:"IMC",bmi_label:"Eticheta IMC",visceral_fat:"Grasime viscerala",body_fat:"Grăsime corporală",protein:"Proteină",water:"Apă",muscle_mass:"Masă musculară",bone_mass:"Masă osoasă",weight:"Greutate",ideal:"Ideal",basal_metabolism:"Metabolismul bazal",body_type:"Tipul corpului",metabolic_age:"Vârsta metabolică"},bi={skinny:"Slab",balanced_skinny:"Slab-echilibrat",skinny_muscular:"Slab-muscular",balanced:"Echilibrat",balanced_muscular:"Balanced-muscular",lack_exercise:"Lipsa-exercițiu",thick_set:"Îndesat",obese:"Obez",overweight:"Supraponderal",underweight:"Subponderal",normal_or_healthy_weight:"Greutate normală sau sănătoasă",slight_overweight:"Ușor supraponderal",moderate_obesity:"Obezitate moderată",severe_obesity:"Obezitate severă",massive_obesity:"Obezitate masivă",unavailable:"indisponibil"},gi={" years":" ani"},pi={missing_entity:"Vă rugăm să definiți o entitate.",missing_entity_bodymiscale:"Definiți o entitate bodymiscale."},yi={entity:"Vă rugăm să selectați un cont de cântar (obligatoriu)!",image:"Imagine de fundal (opțional)",model:"Aveți un senzor de impedanță?",model1:"Activați această funcție pentru măsurători precise ale compoziției corporale.",model_aria_label_on:"Activare impedanță",model_aria_label_off:"Dezactivare impedanță",unit:"Convertiți kg în lbs",unit_aria_label_on:"Activați conversia",unit_aria_label_off:"Dezactivați conversia",theme:"Configurați tema pe care o utilizați.",theme_aria_label_on:"Activează lumina temei",theme_aria_label_off:"Dezactivați tema întunecată",show_name:"Afișați numele contului ca titlu?",show_name_aria_label_on:"Activează numele afișat",show_name_aria_label_off:"Dezactivați numele afișat",show_states:"Arată starea?",show_states_aria_label_on:"Comutați starea afișajului",show_states_aria_label_off:"Dezactivați starea afișajului",show_attributes:"Afișați datele de bază personale (dreapta sus)?",show_attributes_aria_label_on:"Activați/dezactivați atributele de afișare",show_attributes_aria_label_off:"Dezactivați atributele de afișare",show_always_details:"Afișați întotdeauna detalii",show_always_details_aria_label_on:"Activați vizualizarea implicită a detaliilor",show_always_details_aria_label_off:"Dezactivați vizualizarea implicită a detaliilor",show_toolbar:"Arată opțiuni avansate?",show_toolbar_aria_label_on:"Comutați afișarea opțiunilor avansate",show_toolbar_aria_label_off:"Dezactivați afișarea opțiunilor avansate",show_body:"Oferiți detalii suplimentare de măsurare",show_body1:"(Jumătatea inferioară - pictograma chevron în jos le va arăta)?",show_body_aria_label_on:"Comutați afișarea scorului corporal",show_body_aria_label_off:"Dezactivați scorul pentru corpul afișat",show_buttons:"Permiteți schimbarea contului?",show_buttons_aria_label_on:"Activați butoanele afișajului",show_buttons_aria_label_off:"Dezactivați butoanele de afișare",header_options:"1. Opțiuni pentru antetul cardului",body_options:"2. Mai multe opțiuni de card",code_only_note:"ATENŢIE: Opțiuni suplimentare sunt disponibile numai în editorul de cod."},fi={from:"De la",height:"Înălțimea barei",icon_position:"Poziția pictogramei",inside:"Interior",max:"Maxim",min:"Minim",minmax_position:"Poziția Min/Max",name_position:"Poziția numelui",off:"Oprit",outside:"Exterior",target:"Țintă",to:"La",value_position:"Poziția valorii"},vi={color:"Culoare",disabled:"Dezactivat",red:"Roșu",pink:"Roz",purple:"Violet","deep-purple":"Violet închis",indigo:"Indigo",blue:"Albastru","light-blue":"Albastru deschis",cyan:"Cian",teal:"Albastru-verde",green:"Verde","light-green":"Verde deschis",lime:"Lămâie",yellow:"Galben",amber:"Chihlimbar",orange:"Portocaliu",orangered:"Portocaliu-roșu","deep-orange":"Portocaliu închis",brown:"Maro","light-grey":"Gri deschis",grey:"Gri","dark-grey":"Gri închis","blue-grey":"Gri-albastru",darkgreen:"Verde închis",royalblue:"Albastru regal",black:"Negru",white:"Alb"},wi={common:ci,states:_i,attributes:hi,attributes_value:mi,body:ui,body_value:bi,unit:gi,error:pi,editor:yi,editor_body:fi,color_select:vi},ki={version:"Версия",name:"Карточка Bodymiscale",description:"Карточка BodyMiScale отображает показатели тела, рассчитанные на основе результатов измерения веса и биоимпеданса.",not_available:"Компонент Bodymiscale не доступен",toggle_power:"Показать/скрыть дополнительные сведения о BMI"},zi={ok:"Измерение: OK",unknown:"Состояние: неизвестно",problem:"Проблема",none:"Нет",weight_unavailable:"Вес недоступен",impedance_unavailable:"Биоимпеданс недоступен",weight_unavailable_and_impedance_unavailable:"Вес и импеданс недоступны",weight_low:"Низкий вес",impedance_low:"Низкий биоимпеданс",weight_low_and_impedance_low:"Низкий вес и импеданс",impedance_low_and_weight_low:"Низкий импеданс и вес",weight_high:"Высокий вес",impedance_high:"Высокий биоимпеданс",weight_high_and_impedance_high:"Высокий вес и импеданс",weight_high_and_impedance_low:"Высокий вес, низкий биоимпеданс",weight_low_and_impedance_high:"Низкий вес, высокий биоимпеданс"},xi={"weight: ":"Вес: ","impedance: ":"Импеданс: ","height: ":"Рост: ","age: ":"Возраст: ","gender: ":"Пол: "},$i={male:"мужской",female:"женский",unavailable:"недоступен"},Ai={bmi:"Индекс BMI",bmi_label:"Интерпретация BMI",visceral_fat:"Висцеральный жир",body_fat:"Жировая ткань",protein:"Белки",water:"Вода",muscle_mass:"Мышечная масса",bone_mass:"Костная масса",weight:"Вес",ideal:"Идеальный вес",basal_metabolism:"Базальный метаболизм",body_type:"Тип тела",metabolic_age:"Метаболический возраст"},Mi={skinny:"Тощий",balanced_skinny:"Худощавый",skinny_muscular:"Подтянуто-мускулистый",balanced:"Оптимальный",balanced_muscular:"Мускулистый",lack_exercise:"Недостаток упражнений",thick_set:"Коренастый",obese:"Ожирение",overweight:"Лишний вес",underweight:"Недостаточный вес",normal_or_healthy_weight:"Нормальный вес",slight_overweight:"Избыточный вес",moderate_obesity:"Ожирение 1й степени",severe_obesity:"Ожирение 2й степени",massive_obesity:"Ожирение 3й степени",unavailable:"недоступен"},Pi={" years":" года(лет)"},Ci={missing_entity:"Определите сущность.",missing_entity_bodymiscale:"Определите сущность BodyMiScale."},Si={entity:"Сущность BodyMiScale (обязательно)",image:"Фоновое изображение (опционально)",model:"У вас есть датчик импеданса?",model1:"Включите эту функцию для точных измерений состава тела.",model_aria_label_on:"Включить импеданс",model_aria_label_off:"Выключить импеданс",unit:"Преобразование кг в фунты",unit_aria_label_on:"Преобразовать кг в фунты",unit_aria_label_off:"Не преобразовывать кг в фунты",show_name:"Отображение имени пользователя",show_name_aria_label_on:"Отображать имя пользователя",show_name_aria_label_off:"Не отображать имя пользователя",show_states:"Отображение состояния",show_states_aria_label_on:"Отображать состояние",show_states_aria_label_off:"Не отображать состояние",show_attributes:"Отображение персональных данных",show_attributes_aria_label_on:"Отображать персональные данные",show_attributes_aria_label_off:"Не отображать персональные данные",show_always_details:"Всегда показывать детали",show_always_details_aria_label_on:"Постоянное отображение деталей",show_always_details_aria_label_off:"Не отображайте данные на постоянной основе",show_toolbar:"Отображение панели дополнительных параметров",show_toolbar_aria_label_on:"Отображать панель дополнительных параметров",show_toolbar_aria_label_off:"Не отображать панель дополнительных параметров",show_body:"Отображение дополнительных параметров",show_body1:"(по нажатию кнопки со стрелкой вниз)",show_body_aria_label_on:"Отображать дополнительные параметры",show_body_aria_label_off:"Не отображать дополнительные параметры",show_buttons:"Переключение аккаунтов",show_buttons_aria_label_on:"Отображать кнопки",show_buttons_aria_label_off:"Не отображать кнопки",header_options:"1. Настройки заголовка карточки",body_options:"2. Дополнительные настройки карточки",code_only_note:"ВНИМАНИЕ: Дополнительные настройки отображаются только в редакторе кода."},Ii={from:"От",height:"Высота панели",icon_position:"Позиция иконки",inside:"Внутри",max:"Макс",min:"Мин",minmax_position:"Позиция Min/Max",name_position:"Позиция имени",off:"Выключено",outside:"Снаружи",target:"Цель",to:"К",value_position:"Позиция значения"},Ti={color:"Цвет",disabled:"Отключено",red:"Красный",pink:"Розовый",purple:"Фиолетовый","deep-purple":"Темно-фиолетовый",indigo:"Индиго",blue:"Синий","light-blue":"Голубой",cyan:"Циан",teal:"Бирюзовый",green:"Зеленый","light-green":"Светло-зеленый",lime:"Лайм",yellow:"Желтый",amber:"Янтарный",orange:"Оранжевый",orangered:"Красно-оранжевый","deep-orange":"Темно-оранжевый",brown:"Коричневый","light-grey":"Светло-серый",grey:"Серый","dark-grey":"Темно-серый","blue-grey":"Серый синий",darkgreen:"Темно-зеленый",royalblue:"Королевский синий",black:"Черный",white:"Белый"},ji={common:ki,states:zi,attributes:xi,attributes_value:$i,body:Ai,body_value:Mi,unit:Pi,error:Ci,editor:Si,editor_body:Ii,color_select:Ti},Oi={version:"Version",name:"Bodymiscale Card",description:"The bodymiscale card shows you your weight wise / related body status.",not_available:"Bodymiscale is not available",toggle_power:"More details like BMI kCal show / hide"},Bi={ok:"MEASUREMENT: OK",unknown:"STATE: unknown",problem:"Problem",none:"None",weight_unavailable:"Weight unavailable",impedance_unavailable:"Impedance unavailable",weight_unavailable_and_impedance_unavailable:"Weight and impedance unavailable",weight_low:"Weight low",impedance_low:"Impedance low",weight_low_and_impedance_low:"Weight and impedance low",impedance_low_and_weight_low:"Impedance and weight low",weight_high:"Weight high",impedance_high:"Impedance high",weight_high_and_impedance_high:"Weight and impedance high",weight_high_and_impedance_low:"Weight high, impedance low",weight_low_and_impedance_high:"Weight low, impedance high"},Ei={"weight: ":"Weight: ","impedance: ":"Impedance: ","height: ":"Height: ","age: ":"Age: ","gender: ":"Gender: "},Ni={male:"male",female:"female",unavailable:"unavailable"},Di={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Mỡ nội tạng",body_fat:"Mỡ cơ thể",protein:"Chất đạm",water:"Nước",muscle_mass:"Khối lượng cơ",bone_mass:"Khối lượng xương",weight:"Cân nặng",ideal:"Lý tưởng",basal_metabolism:"Trao đổi chất cơ bản",body_type:"Kiểu cơ thể",metabolic_age:"Tuổi chuyển hóa"},Vi={skinny:"Gầy",balanced_skinny:"Cân đối - gầy",skinny_muscular:"Gầy - cơ bắp",balanced:"Cân bằng",balanced_muscular:"Cơ bắp cân bằng",lack_exercise:"Thiếu tập thể dục",thick_set:"Thick-set",obese:"Béo phì",overweight:"Thừa cân",underweight:"Thiếu cân",normal_or_healthy_weight:"Cân nặng bình thường hoặc khỏe mạnh",slight_overweight:"Hơi thừa cân",moderate_obesity:"Béo phì vừa phải",severe_obesity:"Béo phì nghiêm trọng",massive_obesity:"Massive obesity",unavailable:"Không có sẵn"},Gi={" years":" years"},qi={missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},Ui={entity:"Please select an account on the scale (required)!",image:"Background image (optional)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",theme:"Configure the theme you use.",theme_aria_label_on:"Toggle theme light on",theme_aria_label_off:"Toggle theme dark off",show_name:"Show the name of the account as title?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right)?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those)?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},Wi={from:"Từ",height:"Chiều cao thanh",icon_position:"Vị trí biểu tượng",inside:"Bên trong",max:"Tối đa",min:"Tối thiểu",minmax_position:"Vị trí Min/Max",name_position:"Vị trí tên",off:"Tắt",outside:"Bên ngoài",target:"Mục tiêu",to:"Đến",value_position:"Vị trí giá trị"},Ki={color:"Màu sắc",disabled:"Tắt",red:"Đỏ",pink:"Hồng",purple:"Tím","deep-purple":"Tím đậm",indigo:"Chàm",blue:"Xanh dương","light-blue":"Xanh nhạt",cyan:"Cyan",teal:"Lục lam",green:"Xanh lá","light-green":"Xanh lá nhạt",lime:"Chanh",yellow:"Vàng",amber:"Hổ phách",orange:"Cam",orangered:"Cam đỏ","deep-orange":"Cam đậm",brown:"Nâu","light-grey":"Xám nhạt",grey:"Xám","dark-grey":"Xám đậm","blue-grey":"Xám xanh dương",darkgreen:"Xanh lá đậm",royalblue:"Xanh dương hoàng gia",black:"Đen",white:"Trắng"},Li={common:Oi,states:Bi,attributes:Ei,attributes_value:Ni,body:Di,body_value:Vi,unit:Gi,error:qi,editor:Ui,editor_body:Wi,color_select:Ki},Ri={version:"版本",name:"米家体脂称卡片",description:"米家体脂称卡片会显示你的体重以及相关身体状态",not_available:"Bodymiscale 不可用",toggle_power:"显示/隐藏更多详情,例如: BMI, kCal"},Hi={ok:"测量: OK",unknown:"状态: 未知",problem:"故障",none:"无",weight_unavailable:"体重不可用",impedance_unavailable:"阻抗不可用",weight_unavailable_and_impedance_unavailable:"体重和阻抗均不可用",weight_low:"体重过轻",impedance_low:"阻抗低",weight_low_and_impedance_low:"体重和阻抗均偏低",impedance_low_and_weight_low:"阻抗和体重均偏低",weight_high:"体重过重",impedance_high:"阻抗高",weight_high_and_impedance_high:"体重和阻抗均偏高",weight_high_and_impedance_low:"体重过重, 阻抗低",weight_low_and_impedance_high:"体重过轻, 阻抗高"},Zi={"weight: ":"重量: ","impedance: ":"阻抗: ","height: ":"身高: ","age: ":"年龄: ","gender: ":"性别: "},Fi={male:"男",female:"女",unavailable:"不可用"},Ji={bmi:"BMI",bmi_label:"BMI 标签",visceral_fat:"内脏脂肪",body_fat:"体脂",protein:"蛋白质",water:"水分",muscle_mass:"肌肉量",bone_mass:"骨量",weight:"体重",ideal:"理想体重",basal_metabolism:"基本代谢",body_type:"身体类型",metabolic_age:"代谢年龄"},Xi={skinny:"偏瘦",balanced_skinny:"健美型",skinny_muscular:"偏瘦肌肉",balanced:"标准型",balanced_muscular:"标准肌肉",lack_exercise:"缺乏运动",thick_set:"结实型偏胖",obese:"偏胖型",overweight:"肥胖型",underweight:"过轻",normal_or_healthy_weight:"正常或健康",slight_overweight:"轻微超重",moderate_obesity:"中度肥胖",severe_obesity:"过度肥胖",massive_obesity:"严重肥胖",unavailable:"不可用"},Yi={" years":" 岁"},Qi={missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},et={entity:"Please select an account on the scale (required) !",image:"Background image (optional)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",show_name:"Show the name of the account as title ?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State ?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right) ?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options ?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those) ?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch ?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},at={from:"从",height:"条形高度",icon_position:"图标位置",inside:"内部",max:"最大",min:"最小",minmax_position:"最小/最大位置",name_position:"名称位置",off:"关闭",outside:"外部",target:"目标",to:"到",value_position:"值的位置"},ot={color:"颜色",disabled:"禁用",red:"红色",pink:"粉色",purple:"紫色","deep-purple":"深紫色",indigo:"靛蓝",blue:"蓝色","light-blue":"浅蓝色",cyan:"青色",teal:"蓝绿色",green:"绿色","light-green":"浅绿色",lime:"石灰色",yellow:"黄色",amber:"琥珀色",orange:"橙色",orangered:"红橙色","deep-orange":"深橙色",brown:"棕色","light-grey":"浅灰色",grey:"灰色","dark-grey":"深灰色","blue-grey":"蓝灰色",darkgreen:"深绿色",royalblue:"皇家蓝",black:"黑色",white:"白色"},it={common:Ri,states:Hi,attributes:Zi,attributes_value:Fi,body:Ji,body_value:Xi,unit:Yi,error:Qi,editor:et,editor_body:at,color_select:ot},tt={version:"版本",name:"米家體脂計卡片",description:"米家體脂計卡片會顯示你的體重以及相關身體狀態",not_available:"Bodymiscale 不可用",toggle_power:"顯示/隱藏更多詳情,例如: BMI, kCal"},nt={ok:"測量: OK",unknown:"狀態: 未知",problem:"故障",none:"無",weight_unavailable:"體重不可用",impedance_unavailable:"阻抗不可用",weight_unavailable_and_impedance_unavailable:"體重和阻抗均不可用",weight_low:"體重過輕",impedance_low:"阻抗低",weight_low_and_impedance_low:"體重和阻抗均偏低",impedance_low_and_weight_low:"阻抗和體重均偏低",weight_high:"體重過重",impedance_high:"阻抗高",weight_high_and_impedance_high:"體重和阻抗均偏高",weight_high_and_impedance_low:"體重過重, 阻抗低",weight_low_and_impedance_high:"體重過輕, 阻抗高"},rt={"weight: ":"重量: ","impedance: ":"阻抗: ","height: ":"身高: ","age: ":"年齡: ","gender: ":"性別: "},st={male:"男",female:"女",unavailable:"不可用"},lt={bmi:"BMI",bmi_label:"BMI 標籤",visceral_fat:"內臟脂肪",body_fat:"體脂",protein:"蛋白質",water:"水分",muscle_mass:"肌肉量",bone_mass:"骨量",weight:"體重",ideal:"理想體重",basal_metabolism:"基本代謝",body_type:"身體類型",metabolic_age:"代謝年齡"},dt={skinny:"偏瘦",balanced_skinny:"健美型",skinny_muscular:"偏瘦肌肉",balanced:"標準型",balanced_muscular:"標準肌肉",lack_exercise:"缺乏運動",thick_set:"結實型偏胖",obese:"偏胖型",overweight:"肥胖型",underweight:"過輕",normal_or_healthy_weight:"正常或健康",slight_overweight:"輕微超重",moderate_obesity:"中度肥胖",severe_obesity:"過度肥胖",massive_obesity:"嚴重肥胖",unavailable:"不可用"},ct={" years":" 歲"},_t={missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},ht={entity:"Please select an account on the scale (required) !",image:"Background image (optional)",model:"Do you have an impedance sensor?",model1:"Enable this feature for accurate body composition measurements.",model_aria_label_on:"Enable impedance",model_aria_label_off:"Disable impedance",unit:"Convert kg to lbs",unit_aria_label_on:"Toggle the conversion on",unit_aria_label_off:"Toggle the conversion off",show_name:"Show the name of the account as title ?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State ?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right) ?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_always_details:"Always show details",show_always_details_aria_label_on:"Toggle default detail view on",show_always_details_aria_label_off:"Toggle default detail view off",show_toolbar:"Show advanced options ?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those) ?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch ?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",header_options:"1. Card header options",body_options:"2. More card options",code_only_note:"ATTENTION: Additional options are only available in the code editor."},mt={from:"從",height:"條形高度",icon_position:"圖示位置",inside:"內部",max:"最大",min:"最小",minmax_position:"最小/最大位置",name_position:"名稱位置",off:"關閉",outside:"外部",target:"目標",to:"到",value_position:"數值位置"},ut={color:"顏色",disabled:"禁用",red:"紅色",pink:"粉色",purple:"紫色","deep-purple":"深紫色",indigo:"靛藍",blue:"藍色","light-blue":"淺藍色",cyan:"青色",teal:"藍綠色",green:"綠色","light-green":"淺綠色",lime:"酸橙色",yellow:"黃色",amber:"琥珀色",orange:"橙色",orangered:"紅橙色","deep-orange":"深橙色",brown:"棕色","light-grey":"淺灰色",grey:"灰色","dark-grey":"深灰色","blue-grey":"藍灰色",darkgreen:"深綠色",royalblue:"皇家藍",black:"黑色",white:"白色"},bt={common:tt,states:nt,attributes:rt,attributes_value:st,body:lt,body_value:dt,unit:ct,error:_t,editor:ht,editor_body:mt,color_select:ut};const gt={cs:De,de:Object.freeze({__proto__:null,attributes:qe,attributes_value:Ue,body:We,body_value:Ke,color_select:Fe,common:Ve,default:Je,editor:He,editor_body:Ze,error:Re,states:Ge,unit:Le}),en:Object.freeze({__proto__:null,attributes:Qe,attributes_value:ea,body:aa,body_value:oa,color_select:sa,common:Xe,default:la,editor:na,editor_body:ra,error:ta,states:Ye,unit:ia}),es:Object.freeze({__proto__:null,attributes:_a,attributes_value:ha,body:ma,body_value:ua,color_select:fa,common:da,default:va,editor:pa,editor_body:ya,error:ga,states:ca,unit:ba}),fr:Object.freeze({__proto__:null,attributes:za,attributes_value:xa,body:$a,body_value:Aa,color_select:Ia,common:wa,default:Ta,editor:Ca,editor_body:Sa,error:Pa,states:ka,unit:Ma}),hu:Object.freeze({__proto__:null,attributes:Ba,attributes_value:Ea,body:Na,body_value:Da,color_select:Wa,common:ja,default:Ka,editor:qa,editor_body:Ua,error:Ga,states:Oa,unit:Va}),it:Object.freeze({__proto__:null,attributes:Ha,attributes_value:Za,body:Fa,body_value:Ja,color_select:ao,common:La,default:oo,editor:Qa,editor_body:eo,error:Ya,states:Ra,unit:Xa}),ja:Object.freeze({__proto__:null,attributes:no,attributes_value:ro,body:so,body_value:lo,color_select:uo,common:io,default:bo,editor:ho,editor_body:mo,error:_o,states:to,unit:co}),nl:Object.freeze({__proto__:null,attributes:yo,attributes_value:fo,body:vo,body_value:wo,color_select:Ao,common:go,default:Mo,editor:xo,editor_body:$o,error:zo,states:po,unit:ko}),pl:Object.freeze({__proto__:null,attributes:So,attributes_value:Io,body:To,body_value:jo,color_select:Do,common:Po,default:Vo,editor:Eo,editor_body:No,error:Bo,states:Co,unit:Oo}),pt:Object.freeze({__proto__:null,attributes:Uo,attributes_value:Wo,body:Ko,body_value:Lo,color_select:Jo,common:Go,default:Xo,editor:Zo,editor_body:Fo,error:Ho,states:qo,unit:Ro}),pt_BR:Object.freeze({__proto__:null,attributes:ei,attributes_value:ai,body:oi,body_value:ii,color_select:li,common:Yo,default:di,editor:ri,editor_body:si,error:ni,states:Qo,unit:ti}),ro:Object.freeze({__proto__:null,attributes:hi,attributes_value:mi,body:ui,body_value:bi,color_select:vi,common:ci,default:wi,editor:yi,editor_body:fi,error:pi,states:_i,unit:gi}),ru:Object.freeze({__proto__:null,attributes:xi,attributes_value:$i,body:Ai,body_value:Mi,color_select:Ti,common:ki,default:ji,editor:Si,editor_body:Ii,error:Ci,states:zi,unit:Pi}),vi:Object.freeze({__proto__:null,attributes:Ei,attributes_value:Ni,body:Di,body_value:Vi,color_select:Ki,common:Oi,default:Li,editor:Ui,editor_body:Wi,error:qi,states:Bi,unit:Gi}),zh_Hans:Object.freeze({__proto__:null,attributes:Zi,attributes_value:Fi,body:Ji,body_value:Xi,color_select:ot,common:Ri,default:it,editor:et,editor_body:at,error:Qi,states:Hi,unit:Yi}),zh_Hant:Object.freeze({__proto__:null,attributes:rt,attributes_value:st,body:lt,body_value:dt,color_select:ut,common:tt,default:bt,editor:ht,editor_body:mt,error:_t,states:nt,unit:ct})},pt="en";function yt(e,a,o){var i;const[t,n]=e.toLowerCase().split(".");let r=null;try{r=JSON.parse(null!==(i=localStorage.getItem("selectedLanguage"))&&void 0!==i?i:"")}catch(e){console.warn(e),r=localStorage.getItem("selectedLanguage")}const s=(r||navigator.language.split("-")[0]||pt).replace(/['"]+/g,"").replace("-","_");let l;try{l=gt[s][t][n]}catch(e){console.warn(e),l=gt[pt][t][n]}if(void 0===l&&(l=gt[pt][t][n]),void 0!==l)return a&&o&&(l=null==l?void 0:l.replace(a,o)),l}function ft(e,a){void 0===a&&(a={});var o=a.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===o&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var vt=r`:host {
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
  background: var(--bc-toolbar-background);
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
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
  margin-right: 0px;
}

score-card-background {
  cursor: pointer;
  flex-grow: 1;
  position: relative;
}

score-card-iconbar {
  color: var(--icon-color, var(--paper-item-icon-color));
  align-items: center;
  align-self: center;
  display: flex;
  height: 30px;
  justify-content: center;
  position: relative;
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

score-card-backgroundbar {
  background: var(--bar-color);
  filter: brightness(0.5);
  opacity: 0.25;
}

score-card-currentbar {
  background: linear-gradient(
    to var(--bar-direction),
    var(--bar-color) var(--bar-percent),
    rgba(0,0,0,0) var(--bar-percent),
    rgba(0,0,0,0) var(--bar-percent)
  );
}

score-card-targetbar {
  background: linear-gradient(
    to var(--bar-direction),
    rgba(0,0,0,0) var(--bar-percent),
    var(--bar-color) var(--bar-percent),
    var(--bar-color) var(--bar-target-percent),
    rgba(0,0,0,0) var(--bar-target-percent)
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
  align-self: center;
  justify-content: center;
  margin: 4px;
  overflow: hidden;
  position: relative;
  text-align: left;
  text-overflow: ellipsis;
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

.min-direction-right {
  margin-left: auto;
}

score-card-divider {
  margin-left: 0px;
  margin-right: 0px;
}

score-card-value {
  white-space: nowrap;
  margin: 4px;
}

.value-direction-right {
  margin-left: auto;
}
`;ft(vt);const wt={disabled:"null",red:"#f44336",pink:"#e91e63",purple:"#926bc7","deep-purple":"#6e41ab",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caF50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800",orangered:"#ff4500","deep-orange":"#ff6f22",brown:"#795548","light-grey":"#bdbdbd",grey:"#9e9e9e","dark-grey":"#606060","blue-grey":"#607d8b",darkgreen:"#006400",royalblue:"#4169e1",black:"#000000",white:"#FFFFFF"};function kt(e){return wt[e]?wt[e]:wt.disabled}new Set(Object.keys(wt));let zt={convertkgtolb:e=>Math.round(2.20462*Number(e)*10)/10};const xt={status:{key:"state",icon:"mdi:scale-bathroom"},problem:{key:"problem",icon:"mdi:alert"},last_measurement_time:{key:"last_measurement_time",icon:"mdi:calendar-clock"}},$t={weight:{key:"weight",label:yt("attributes.weight: "),unit:" kg"},impedance:{key:"impedance",label:yt("attributes.impedance: "),unit:" ohm",impedance_required:!0},height:{key:"height",label:yt("attributes.height: "),unit:" cm"},age:{key:"age",label:yt("attributes.age: "),unit:yt("unit. years")},gender:{key:"gender",label:yt("attributes.gender: ")}},At={weight:{key:"weight",label:yt("attributes.weight: "),unit:" lbs",compute:zt.convertkgtolb},impedance:{key:"impedance",label:yt("attributes.impedance: "),unit:" ohm",impedance_required:!0},height:{key:"height",label:yt("attributes.height: "),unit:" cm"},age:{key:"age",label:yt("attributes.age: "),unit:yt("unit. years")},gender:{key:"gender",label:yt("attributes.gender: ")}},Mt={basal_metabolism:{key:"basal_metabolism",label:yt("body.basal_metabolism"),icon:"/local/images/bodyscoreIcon/basal_metabolism.png",unit:" kcal",min:0,max:3e3,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:1530,color:"orangered"},{from:1530.01,to:3e3,color:"green"}],target:1530,width:"100%",impedance_required:!1},bmi:{key:"bmi",label:yt("body.bmi"),icon:"/local/images/bodyscoreIcon/bmi.png",min:0,max:40,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:18.5,color:"blue"},{from:18.51,to:25,color:"green"},{from:25.01,to:28,color:"orange"},{from:28.01,to:32,color:"orangered"},{from:32.01,to:40,color:"red"}],target:21.75,width:"100%",impedance_required:!1},bmi_label:{key:"bmi_label",label:yt("body.bmi_label"),icon:"/local/images/bodyscoreIcon/body_type.png",min:null,max:null,color:"var(--score-card-color, var(--ha-card-background))",height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!1},body_fat:{key:"body_fat",label:yt("body.body_fat"),icon:"/local/images/bodyscoreIcon/body_fat.png",unit:" %",min:0,max:40,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:12,color:"blue"},{from:12.01,to:18,color:"royalblue"},{from:18.01,to:23,color:"green"},{from:23.01,to:28,color:"orange"},{from:28.01,to:40,color:"orangered"}],target:20.5,width:"100%",impedance_required:!0},body_type:{key:"body_type",label:yt("body.body_type"),icon:"/local/images/bodyscoreIcon/body_type.png",color:"var(--score-card-color, var(--ha-card-background))",min:null,max:null,height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!0},bone_mass:{key:"bone_mass",label:yt("body.bone_mass"),icon:"/local/images/bodyscoreIcon/bone_mass.png",unit:" kg",min:0,max:8,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:2,color:"orangered"},{from:2.01,to:4.2,color:"green"},{from:4.21,to:8,color:"darkgreen"}],target:3.1,width:"100%",impedance_required:!0},ideal:{key:"ideal",label:yt("body.ideal"),icon:"/local/images/bodyscoreIcon/ideal.png",unit:" kg",min:0,max:130,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:57.3,color:"blue"},{from:57.31,to:77.4,color:"green"},{from:77.41,to:86.7,color:"orange"},{from:86.71,to:99,color:"orangered"},{from:99.1,to:130,color:"red"}],target:67.35,width:"100%",impedance_required:!1},metabolic_age:{key:"metabolic_age",label:yt("body.metabolic_age"),icon:"/local/images/bodyscoreIcon/metabolic_age.png",unit:yt("unit. years"),min:null,max:null,color:"var(--score-card-color, var(--ha-card-background))",height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!0},muscle_mass:{key:"muscle_mass",label:yt("body.muscle_mass"),icon:"/local/images/bodyscoreIcon/muscle_mass.png",unit:" kg",min:0,max:100,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:49.4,color:"orangered"},{from:49.41,to:59.5,color:"green"},{from:59.51,to:100,color:"darkgreen"}],target:54.45,width:"100%",impedance_required:!0},protein:{key:"protein",label:yt("body.protein"),icon:"/local/images/bodyscoreIcon/protein.png",unit:" %",min:0,max:32,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:16,color:"orangered"},{from:16.01,to:20,color:"green"},{from:20.01,to:32,color:"darkgreen"}],target:18,width:"100%",impedance_required:!0},visceral_fat:{key:"visceral_fat",label:yt("body.visceral_fat"),icon:"/local/images/bodyscoreIcon/visceral_fat.png",min:0,max:20,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:10,color:"green"},{from:10.01,to:15,color:"orange"},{from:15.01,to:20,color:"orangered"}],target:12.5,width:"100%",impedance_required:!1},water:{key:"water",label:yt("body.water"),icon:"/local/images/bodyscoreIcon/water.png",unit:" %",min:0,max:80,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:55,color:"orangered"},{from:55.01,to:65.1,color:"green"},{from:65.11,to:80,color:"darkgreen"}],target:60,width:"100%",impedance_required:!0},weight:{key:"weight",label:yt("body.weight"),icon:"/local/images/bodyscoreIcon/ideal.png",unit:" kg",min:0,max:130,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:57.3,color:"blue"},{from:57.31,to:77.4,color:"green"},{from:77.41,to:86.7,color:"orange"},{from:86.71,to:99,color:"orangered"},{from:99.1,to:130,color:"red"}],target:67.35,width:"100%",impedance_required:!1}},Pt={basal_metabolism:{key:"basal_metabolism",label:yt("body.basal_metabolism"),icon:"/local/images/bodyscoreIcon/basal_metabolism.png",unit:" kcal",min:0,max:3e3,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:1530,color:"orangered"},{from:1530.01,to:3e3,color:"green"}],target:1530,width:"100%",impedance_required:!1},bmi:{key:"bmi",label:yt("body.bmi"),icon:"/local/images/bodyscoreIcon/bmi.png",min:0,max:40,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:18.5,color:"blue"},{from:18.51,to:25,color:"green"},{from:25.01,to:28,color:"orange"},{from:28.01,to:32,color:"orangered"},{from:32.01,to:40,color:"red"}],target:21.75,width:"100%",impedance_required:!1},bmi_label:{key:"bmi_label",label:yt("body.bmi_label"),icon:"/local/images/bodyscoreIcon/body_type.png",min:null,max:null,color:"var(--score-card-color, var(--ha-card-background))",height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!1},body_fat:{key:"body_fat",label:yt("body.body_fat"),icon:"/local/images/bodyscoreIcon/body_fat.png",unit:" %",min:0,max:40,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:12,color:"blue"},{from:12.01,to:18,color:"royalblue"},{from:18.01,to:23,color:"green"},{from:23.01,to:28,color:"orange"},{from:28.01,to:40,color:"orangered"}],target:20.5,width:"100%",impedance_required:!0},body_type:{key:"body_type",label:yt("body.body_type"),icon:"/local/images/bodyscoreIcon/body_type.png",color:"var(--score-card-color, var(--ha-card-background))",min:null,max:null,height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!0},bone_mass:{key:"bone_mass",label:yt("body.bone_mass"),icon:"/local/images/bodyscoreIcon/bone_mass.png",unit:" lbs",compute:zt.convertkgtolb,min:0,max:17.6,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:4.4,color:"orangered"},{from:4.5,to:9.3,color:"green"},{from:9.4,to:17.6,color:"darkgreen"}],target:6.9,width:"100%",impedance_required:!0},ideal:{key:"ideal",label:yt("body.ideal"),icon:"/local/images/bodyscoreIcon/ideal.png",unit:" lbs",compute:zt.convertkgtolb,min:0,max:286.6,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:126.3,color:"blue"},{from:126.4,to:170.6,color:"green"},{from:170.7,to:191.1,color:"orange"},{from:191.2,to:218.5,color:"orangered"},{from:218.6,to:286.6,color:"red"}],target:148.5,width:"100%",impedance_required:!1},metabolic_age:{key:"metabolic_age",label:yt("body.metabolic_age"),icon:"/local/images/bodyscoreIcon/metabolic_age.png",unit:yt("unit. years"),min:null,max:null,color:"var(--score-card-color, var(--ha-card-background))",height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!0},muscle_mass:{key:"muscle_mass",label:yt("body.muscle_mass"),icon:"/local/images/bodyscoreIcon/muscle_mass.png",unit:" lbs",compute:zt.convertkgtolb,min:0,max:220.5,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:108.9,color:"orangered"},{from:109,to:131.2,color:"green"},{from:131.3,to:220.5,color:"darkgreen"}],target:120.1,width:"100%",impedance_required:!0},protein:{key:"protein",label:yt("body.protein"),icon:"/local/images/bodyscoreIcon/protein.png",unit:" %",min:0,max:32,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:16,color:"orangered"},{from:16.01,to:20,color:"green"},{from:20.01,to:32,color:"darkgreen"}],target:18,width:"100%",impedance_required:!0},visceral_fat:{key:"visceral_fat",label:yt("body.visceral_fat"),icon:"/local/images/bodyscoreIcon/visceral_fat.png",min:0,max:20,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:10,color:"green"},{from:10.01,to:15,color:"orange"},{from:15.01,to:20,color:"orangered"}],target:12.5,width:"100%",impedance_required:!1},water:{key:"water",label:yt("body.water"),icon:"/local/images/bodyscoreIcon/water.png",unit:" %",min:0,max:80,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:55,color:"orangered"},{from:55.01,to:65.1,color:"green"},{from:65.11,to:80,color:"darkgreen"}],target:60,width:"100%",impedance_required:!0},weight:{key:"weight",label:yt("body.weight"),icon:"/local/images/bodyscoreIcon/ideal.png",unit:" lbs",compute:zt.convertkgtolb,min:0,max:286.6,color:"var(--score-card-color, var(--ha-card-background))",height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:126.3,color:"blue"},{from:126.4,to:170.6,color:"green"},{from:170.7,to:191.1,color:"orange"},{from:191.2,to:218.5,color:"orangered"},{from:218.6,to:286.6,color:"red"}],target:148.5,width:"100%",impedance_required:!1}},Ct={user1:{show:!1,label:"User1",icon:"mdi:alpha-u-circle",entity:""},user2:{show:!1,label:"User2",icon:"mdi:alpha-u-circle",entity:""},user3:{show:!1,label:"User3",icon:"mdi:alpha-u-circle",entity:""},user4:{show:!1,label:"User4",icon:"mdi:alpha-u-circle",entity:""},user5:{show:!1,label:"User5",icon:"mdi:alpha-u-circle",entity:""}},St={model:!1,unit:!1,theme:!0,show_name:!0,show_states:!0,show_attributes:!0,show_always_details:!1,show_toolbar:!0,show_body:!0,show_buttons:!1,attributes:{impedance:{key:"impedance",impedance_required:!0}},body:{basal_metabolism:{key:"basal_metabolism",min:0,max:3e3,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:1530,color:"orangered"},{from:1530.01,to:3e3,color:"green"}],target:1530,width:"100%",impedance_required:!1},bmi:{key:"bmi",min:0,max:40,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:18.5,color:"blue"},{from:18.51,to:25,color:"green"},{from:25.01,to:28,color:"orange"},{from:28.01,to:32,color:"orangered"},{from:32.01,to:40,color:"red"}],target:21.75,width:"100%",impedance_required:!1},bmi_label:{key:"bmi_label",min:null,max:null,height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!1},body_fat:{key:"body_fat",min:0,max:40,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:12,color:"blue"},{from:12.01,to:18,color:"royalblue"},{from:18.01,to:23,color:"green"},{from:23.01,to:28,color:"orange"},{from:28.01,to:40,color:"orangered"}],target:20.5,width:"100%",impedance_required:!0},body_type:{key:"body_type",min:null,max:null,height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!0},bone_mass:{key:"bone_mass",min:0,max:8,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:2,color:"orangered"},{from:2.01,to:4.2,color:"green"},{from:4.21,to:8,color:"darkgreen"}],target:3.1,width:"100%",impedance_required:!0},ideal:{key:"ideal",min:0,max:130,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:57.3,color:"blue"},{from:57.31,to:77.4,color:"green"},{from:77.41,to:86.7,color:"orange"},{from:86.71,to:99,color:"orangered"},{from:99.1,to:130,color:"red"}],target:67.35,width:"100%",impedance_required:!1},metabolic_age:{key:"metabolic_age",min:null,max:null,height:null,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null,target:null,width:"100%",impedance_required:!0},muscle_mass:{key:"muscle_mass",min:0,max:100,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:49.4,color:"orangered"},{from:49.41,to:59.5,color:"green"},{from:59.51,to:100,color:"darkgreen"}],target:54.45,width:"100%",impedance_required:!0},protein:{key:"protein",min:0,max:32,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:16,color:"orangered"},{from:16.01,to:20,color:"green"},{from:20.01,to:32,color:"darkgreen"}],target:18,width:"100%",impedance_required:!0},visceral_fat:{key:"visceral_fat",min:0,max:20,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:10,color:"green"},{from:10.01,to:15,color:"orange"},{from:15.01,to:20,color:"orangered"}],target:12.5,width:"100%",impedance_required:!1},water:{key:"water",min:0,max:80,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:55,color:"orangered"},{from:55.01,to:65.1,color:"green"},{from:65.11,to:80,color:"darkgreen"}],target:60,width:"100%",impedance_required:!0},weight:{key:"weight",min:0,max:130,height:30,positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:[{from:0,to:57.3,color:"blue"},{from:57.31,to:77.4,color:"green"},{from:77.41,to:86.7,color:"orange"},{from:86.71,to:99,color:"orangered"},{from:99.1,to:130,color:"red"}],target:67.35,width:"100%",impedance_required:!1}}};function It(e){const{image:a,theme:o,show_toolbar:i,show_body:t}=e;return{background:a?`\n          background-image: url('${a}');\n          color: white;\n          text-shadow: 0 0 10px black;\n          min-height: 220px;\n          ${i||t?"border-radius: 0;":"border-radius: var(--ha-card-border-radius, 12px);"}\n          overflow: hidden;\n        `:"",icon:`color: ${a?"white":"var(--paper-item-icon-color)"};`,iconbody:`background-color: ${!1!==o?"var(--paper-item-icon-color)":"white"};`}}console.info(`%c Body-miscale-card \n%c  ${yt("common.version")} 2025.3.1 `,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;");let Tt=class extends ne{constructor(){super(...arguments),this.open=!1}static get styles(){return vt}static async getConfigElement(){return Promise.resolve().then((function(){return qt})),document.createElement("body-miscale-card-editor")}static getStubConfig(e,a){const[o]=a.filter((e=>e.startsWith("bodymiscale")));return Object.assign(Object.assign({},St),{entity:null!=o?o:""})}get entity(){return this.hass.states[this.config.entity]}setConfig(e){this.config=function(e){var a,o,i,t,n,r,s,l,d,c,_,h,m,u,b,g,p,y,f,v,w,k,z;if(!e)throw new Error(yt("error.invalid_config"));if(!e.entity)throw new Error(yt("error.missing_entity"));if("bodymiscale"!==e.entity.split(".")[0])throw new Error(yt("error.missing_entity_bodymiscale"));return{entity:null!==(a=e.entity)&&void 0!==a?a:"",image:null!==(o=e.image)&&void 0!==o?o:"",model:null!==(i=e.model)&&void 0!==i&&i,impedance_required:null!==(t=e.impedance_required)&&void 0!==t&&t,unit:null!==(n=e.unit)&&void 0!==n&&n,theme:null===(r=e.theme)||void 0===r||r,show_name:null===(s=e.show_name)||void 0===s||s,show_states:null===(l=e.show_states)||void 0===l||l,show_attributes:null===(d=e.show_attributes)||void 0===d||d,show_always_details:null!==(c=e.show_always_details)&&void 0!==c&&c,show_toolbar:null===(_=e.show_toolbar)||void 0===_||_,show_body:null===(h=e.show_body)||void 0===h||h,show_buttons:null!==(m=e.show_buttons)&&void 0!==m&&m,states:xe(xt,e.states),attributes:e.unit?xe(At,e.attributes):xe($t,e.attributes),body:e.unit?xe(Pt,e.body):xe(Mt,e.body),buttons:!0===e.buttons?{}:xe(Ct,e.buttons),styles:It(e),open:null!==(u=e.open)&&void 0!==u&&u,height:null!==(b=e.height)&&void 0!==b?b:void 0,width:null!==(g=e.width)&&void 0!==g?g:void 0,stats:null!==(p=e.stats)&&void 0!==p?p:{},min:null!==(y=e.min)&&void 0!==y?y:void 0,max:null!==(f=e.max)&&void 0!==f?f:void 0,color:null!==(v=e.color)&&void 0!==v?v:void 0,positions:null!==(w=e.positions)&&void 0!==w?w:{icon:"outside",name:"inside",minmax:"off",value:"inside"},severity:null!==(k=e.severity)&&void 0!==k?k:void 0,target:null!==(z=e.target)&&void 0!==z?z:void 0}}(e)}getCardSize(){return this.config.show_name&&this.config.show_buttons?4:this.config.show_name||this.config.show_buttons?3:2}shouldShowBackground(){return!(""===this.config.image&&!1===this.config.show_states&&!1===this.config.show_attributes&&!0===this.config.show_always_details&&!0===this.config.show_body)}shouldUpdate(e){return function(e,a,o){if(a.has("config")||o)return!0;if(e.config.entity){var i=a.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}toggle(e){null==e||e.stopPropagation(),this.open=!this.open}customEvent(e){var a;(null===(a=e.detail)||void 0===a?void 0:a.fold_row)&&this.toggle(e)}toggleMenu(e){var a;const o=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector(`#bmc-menu-${e}`);o&&"open"in o&&(o.open=!o.open)}handleChange(e){this.hass&&(this.config=Object.assign(Object.assign({},this.config),{entity:e}),ze(this,"config-changed",{config:this.config}))}moreInfo(){var e;(null===(e=this.config)||void 0===e?void 0:e.entity)?ze(this,"hass-more-info",{entityId:this.config.entity}):console.warn("No entity defined in the config.")}renderName(e){return this.config.show_name?U`
      <div class="bodymiscale-name">${e.attributes.friendly_name}</div>
    `:K}renderState(e){var a,o,i,t,n;if(!this.config.show_states)return K;if(!this.hass||!(null===(a=this.config)||void 0===a?void 0:a.entity))return U`<div>${yt("state.default.unavailable")}</div>`;const r=null===(o=this.hass.states)||void 0===o?void 0:o[this.config.entity];if(!r)return U`<div>
        ${this.hass.localize("state.default.unavailable")}
      </div>`;const s=(null==e?void 0:e.key)&&r,l=s&&void 0!==(null===(i=r.attributes)||void 0===i?void 0:i[e.key]),d=s&&void 0!==r[e.key];let c=l?r.attributes[e.key]:d?r[e.key]:this.hass.localize("state.default.unavailable");if("last_measurement_time"===e.key&&"string"==typeof c)try{const e=new Date(c.replace(" ","T")),a=be(e,this.hass.locale);c=`${a} ${ye(e,this.hass.locale)}`}catch(e){}const _="number"==typeof c?we(c,this.hass.locale):c,h=yt(`states.${c}`)||_,m="ok"===r.state&&"mdi:alert"===e.icon?K:U` <div class="state-div">
            <div>${e.icon&&this.renderIcon(e,"default")}</div>
            <div class="state-label">
              ${null!==(t=e.label)&&void 0!==t?t:""}${h}${null!==(n=e.unit)&&void 0!==n?n:""}
            </div>
          </div>`;return`${e.key}_list`in r.attributes&&(l||d)?this.renderDropdown(m,e.key):m}renderAttribute(e){var a,o,i,t,n;if(!this.config.show_attributes)return K;if(!this.hass||!(null===(a=this.config)||void 0===a?void 0:a.entity))return U`<div>${yt("state.default.unavailable")}</div>`;const r=null===(o=this.hass.states)||void 0===o?void 0:o[this.config.entity];if(!r)return U`<div>
        ${this.hass.localize("state.default.unavailable")}
      </div>`;const s="function"==typeof e.compute?e.compute:e=>e,l=(null==e?void 0:e.key)&&r,d=l&&void 0!==(null===(i=r.attributes)||void 0===i?void 0:i[e.key]),c=l&&void 0!==r[e.key];let _=d?s(r.attributes[e.key]):c?s(r[e.key]):this.hass.localize("state.default.unavailable");if("last_measurement_time"===e.key&&"string"==typeof _)try{const e=new Date(_.replace(" ","T")),a=be(e,this.hass.locale);_=`${a} ${ye(e,this.hass.locale)}`}catch(e){}const h="number"==typeof _?we(_,this.hass.locale):_,m=yt(`attributes_value.${_}`)||h,u=U`<div>
      ${e.icon&&this.renderIcon(e,"default")}
      ${null!==(t=e.label)&&void 0!==t?t:""}${m}${null!==(n=e.unit)&&void 0!==n?n:""}
    </div>`;return`${e.key}_list`in r.attributes&&(d||c)?this.renderDropdown(u,e.key):u}renderBody(e){var a,o,i;if(!this.config.show_body)return K;if(!this.hass||!(null===(a=this.config)||void 0===a?void 0:a.entity))return U`<div>${yt("state.default.unavailable")}</div>`;const t=null===(o=this.hass.states)||void 0===o?void 0:o[this.config.entity];if(!t)return U`<div>
        ${this.hass.localize("state.default.unavailable")}
      </div>`;const n="function"==typeof e.compute?e.compute:e=>e,r=(null==e?void 0:e.key)&&t,s=r&&void 0!==(null===(i=t.attributes)||void 0===i?void 0:i[e.key]),l=r&&void 0!==t[e.key];let d=s?n(t.attributes[e.key]):l?n(t[e.key]):this.hass.localize("state.default.unavailable");if("last_measurement_time"===e.key&&"string"==typeof d)try{const e=new Date(d.replace(" ","T")),a=be(e,this.hass.locale);d=`${a} ${ye(e,this.hass.locale)}`}catch(e){}const c="number"==typeof d?we(d,this.hass.locale):d;let _="0px 0px 0px 13px",h=30;e.height&&(h=e.height);const m="number"==typeof h?`${h}px`:h.toString().includes("px")?h:`${parseInt(h,10)||0}px`;let u="stretch",b="right";const{outside:g,inside:p,backgroundMargin:y}=this.renderBarIcon(e),{outside:f,inside:v,backgroundMargin:w}=this.renderBarName(e),{outside:k,inside:z}=this.renderBarMinMax(e),{outside:x,inside:$,backgroundMargin:A}=this.renderBarValue(e,d,c,yt);_=y||w||A||_;const M=Number(d),P=this._computeBarColor(e,M),C=this._computePercent(e,Number(d)),S=this._computePercent(e,e.target);let I=C,T=this._computePercent(e,e.target);T<I&&(I=T,T=C);let j="";e.width&&(u="center",j=`width: ${e.width}`);const O=U`
      <score-card-row style="flex-direction: ${"row"};">
        <score-card-card
          style="flex-direction: ${"row"}; align-items: ${u};"
        >
          ${g} ${f}
          <score-card-background
            style="margin: ${_}; height: ${m}; ${j}"
          >
            <score-card-backgroundbar
              style="--bar-color: ${P};"
            ></score-card-backgroundbar>
            <score-card-currentbar
              style="--bar-color: ${P}; --bar-percent: ${C}%; --bar-direction: ${b}"
            ></score-card-currentbar>
            ${e.target?U`
                  <score-card-targetbar
                    style="--bar-color: ${P}; --bar-percent: ${I}%; --bar-target-percent: ${T}%; --bar-direction: ${b};"
                  ></score-card-targetbar>
                  <score-card-markerbar
                    style="--bar-color: ${P}; --bar-target-percent: ${S}%; ${"left"}: calc(${S}% - 1px); ${"height: 100%; width: 2px;"}"
                  ></score-card-markerbar>
                `:""}
            <score-card-contentbar class="contentbar-direction-right">
              ${p} ${v} ${z} ${$}
            </score-card-contentbar>
          </score-card-background>
          ${k} ${x}
        </score-card-card>
      </score-card-row>
    `;return`${e.key}_list`in t.attributes&&(s||l)?this.renderDropdown(O,e.key):O}renderBarIcon(e){let a=K,o=K,i="0px";switch(e.positions.icon){case"outside":a=U`
          <score-card-iconbar
            >${e.icon&&this.renderIcon(e,"body")}</score-card-iconbar
          >
        `,i="0px 0px 0px 13px";break;case"inside":o=U`
          <score-card-iconbar
            >${e.icon&&this.renderIcon(e,"body")}</score-card-iconbar
          >
        `,i="0px";break;case"off":i="0px"}return{outside:a,inside:o,backgroundMargin:i}}renderBarName(e){let a=K,o=K,i="0px";if(void 0!==e.label)switch(e.positions.name){case"outside":a=U`
            <score-card-name
              style="${e.width?`width: calc(100% - ${e.width});`:""}"
              >${e.label||""}</score-card-name
            >
          `,i="0px";break;case"inside":o=U`<score-card-name
            >${e.label||""}</score-card-name
          >`}return{outside:a,inside:o,backgroundMargin:i}}renderBarMinMax(e){let a=K,o=K;if(void 0!==e.min&&void 0!==e.max)switch(e.positions.minmax){case"outside":a=U`
            <score-card-min>${e.min}</score-card-min>
            <score-card-divider>/</score-card-divider>
            <score-card-max>${e.max}</score-card-max>
          `;break;case"inside":o=U`
            <score-card-min class="min-direction-right">
              ${e.min}
            </score-card-min>
            <score-card-divider>/</score-card-divider>
            <score-card-max>${e.max}</score-card-max>
          `}return{outside:a,inside:o}}renderBarValue(e,a,o,i){let t=K,n=K;switch(e.positions.value){case"outside":t=U`
          <score-card-value class="value-direction-right">
            ${(i(`body_value.${a}`)||o)+(e.unit||"")}
          </score-card-value>
        `;break;case"inside":n=U`
          <score-card-value
            class="${"inside"==e.positions.minmax?"":"value-direction-right"}"
          >
            ${(i(`body_value.${a}`)||o)+(e.unit||"")}
          </score-card-value>
        `}return{outside:t,inside:n,backgroundMargin:"0px"}}_computeSeverityColor(e,a){var o;const i=e.severity;let t;return isNaN(a)?i.forEach((a=>{e==a.text&&a.color&&(t=kt(a.color)||"disabled")})):i.forEach((e=>{a>=(e.from||0)&&a<=(e.to||1/0)&&e.color&&(t=kt(e.color)||"disabled")})),null!==(o=null!=t?t:kt(e.color))&&void 0!==o?o:"disabled"}_computeBarColor(e,a){let o;return o=e.severity?this._computeSeverityColor(e,a)||kt(e.color)||"disabled":kt(e.color)||"disabled",o}_computePercent(e,a){return"unavailable"==e?0:isNaN(a)?100:100*(a-e.min)/(e.max-e.min)}renderIcon(e,a="default"){var o,i,t;if(!this.hass||!(null===(o=this.config)||void 0===o?void 0:o.entity))return K;const n=this.hass.states[this.config.entity];if(!n)return K;const r="water"===e.key.toLowerCase()&&"water_icon"in n.attributes?n.attributes.water_icon:e.icon;if(!r)return K;if("body"===a)return U`
        <ha-icon
          class="image"
          style="
              -webkit-mask-image: url('${r}'); 
              -webkit-mask-size: 24px;
              ${(null===(i=this.config.styles)||void 0===i?void 0:i.iconbody)||""}"
        ></ha-icon>
      `;const s="none"!==n.attributes.problem&&"mdi:alert"===r;return U`
      <ha-icon
        class="${s?"problem":""}"
        icon="${r}"
        style="margin-right: 10px; ${(null===(t=this.config.styles)||void 0===t?void 0:t.icon)||""} ${s?"color: var(--error-color) !important;":""}"
      ></ha-icon>
    `}renderButton(e){return this.config.show_buttons&&e.show?U`
      <ha-button
        @click=${()=>this.handleChange(e.entity)}
        title=${he(e.label)}
      >
        ${e.icon?U`<ha-icon icon="${e.icon}"></ha-icon>`:e.label}
      </ha-button>
    `:K}renderToolbar(){var e;return this.config.show_toolbar?U`
      <div class="toolbar" @ll-custom=${this.customEvent} ?open=${this.open}>
        <ha-icon-button
          @click=${this.toggle}
          title=${he(yt("common.toggle_power")||void 0)}
          style="color: var(--primary-color);"
        >
          <ha-icon
            icon=${this.config.show_always_details?"":this.open?"mdi:chevron-up":"mdi:chevron-down"}
          ></ha-icon>
        </ha-icon-button>
        <div class="fill-gap"></div>
        ${Object.values(null!==(e=this.config.buttons)&&void 0!==e?e:{}).filter((e=>e.show)).map((e=>this.renderButton(e)))}
      </div>
    `:K}renderDropdown(e,a){var o,i;if(!this.hass||!(null===(o=this.config)||void 0===o?void 0:o.entity))return K;const t=this.hass.states[this.config.entity];if(!(null==t?void 0:t.attributes))return K;const n=null!==(i=t.attributes[`${a}_list`])&&void 0!==i?i:[];return Array.isArray(n)&&0!==n.length?U` <div
      style="position: relative"
      @click=${e=>e.stopPropagation()}
    >
      <ha-button @click=${()=>this.toggleMenu(a)}> ${e} </ha-button>
      <mwc-menu
        @selected=${e=>this.handleChange(n[e.detail.index])}
        id=${he(`bmc-menu-${a}`)}
        activatable
        corner="BOTTOM_START"
      >
        ${n.map((e=>U`
            <mwc-list-item value=${e}>${e}</mwc-list-item>
          `))}
      </mwc-menu>
    </div>`:K}render(){var e,a,o,i;if(!this.hass||!(null===(e=this.config)||void 0===e?void 0:e.entity))return K;const t=this.hass.states[this.config.entity];if(!t)return U`
        <ha-card>
          <div class="preview not-available">
            <div class="metadata">
              <div class="not-available">
                ${yt("common.not_available")}
              </div>
            </div>
          </div>
        </ha-card>
      `;const n=$e(null!==(a=this.config.body)&&void 0!==a?a:{},this.config.model),r=$e(null!==(o=this.config.attributes)&&void 0!==o?o:{},this.config.model);return U`
      <ha-card>
        ${this.shouldShowBackground()?U`
              <div
                class="background"
                style="${(null===(i=this.config.styles)||void 0===i?void 0:i.background)||""};"
              >
                ${this.config.show_name?U`<div class="title" style="padding: 12px 16px 8px">
                      ${this.renderName(t)}
                    </div>`:""}
                <div
                  class="grid"
                  style="padding: 12px 16px 8px"
                  @click="${this.moreInfo}"
                  tabindex="0"
                >
                  <div class="grid-left">
                    ${(this.config.states?Object.values(this.config.states):[]).filter((e=>e)).map(this.renderState.bind(this))}
                  </div>
                  <div class="grid-right">
                    ${r.filter(Boolean).map(this.renderAttribute.bind(this))}
                  </div>
                </div>
              </div>
            `:this.config.show_name?U`<div class="title">${this.renderName(t)}</div>`:""}
        ${this.renderToolbar()}

        <div id="items" ?open=${this.open||this.config.show_always_details}>
          <div id="score" class="card-content">
            ${n.filter(Boolean).map(this.renderBody.bind(this))}
          </div>
        </div>
      </ha-card>
    `}};e([ce({attribute:!1})],Tt.prototype,"hass",void 0),e([_e()],Tt.prototype,"config",void 0),e([_e()],Tt.prototype,"open",void 0),Tt=e([se("body-miscale-card")],Tt),window.customCards=window.customCards||[],window.customCards.push({preview:!0,type:"body-miscale-card",name:yt("common.name"),description:yt("common.description")});const jt=1;let Ot=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,a,o){this._$Ct=e,this._$AM=a,this._$Ci=o}_$AS(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}};const Bt="important",Et=" !"+Bt,Nt=(e=>(...a)=>({_$litDirective$:e,values:a}))(class extends Ot{constructor(e){if(super(e),e.type!==jt||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((a,o)=>{const i=e[o];return null==i?a:a+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[a]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(a)),this.render(a);for(const e of this.ft)null==a[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in a){const i=a[e];if(null!=i){this.ft.add(e);const a="string"==typeof i&&i.endsWith(Et);e.includes("-")||a?o.setProperty(e,a?i.slice(0,-11):i,a?Bt:""):o[e]=i}}return W}});let Dt=class extends ne{constructor(){super(...arguments),this.configValue=""}_selectChanged(e){const a=e.target.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:a||void 0}}))}render(){return U`
      <ha-select
        .icon=${Boolean(this.value)}
        .label=${yt("color_select.color")}
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

        ${Object.keys(wt).map((e=>U`
            <ha-list-item .value=${e} graphic="icon">
              ${yt(`color_select.${e}`)||e}
              <span slot="graphic">${this._renderColorCircle(e)}</span>
            </ha-list-item>
          `))}
      </ha-select>
    `}_renderColorCircle(e){return U`
      <span
        class="circle-color"
        style=${Nt({"--circle-color":kt(e)})}
      ></span>
    `}static get styles(){return r`
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
    `}};e([ce()],Dt.prototype,"label",void 0),e([ce()],Dt.prototype,"value",void 0),e([ce()],Dt.prototype,"configValue",void 0),Dt=e([se("color-select")],Dt);var Vt=r`.card-config {
  display: block;
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
  padding-bottom: 8px;
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
  padding: 8px;
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
  grid-gap: 8px;
  gap: 8px;
  margin-top: 8px;
}

.severity-row {
  display: flex;
  align-items: center;
}

.severity-row ha-textfield {
  margin-right: 8px;
}
`;ft(Vt);let Gt=class extends ne{constructor(){super(...arguments),this.page=1,this.selectedColor="white",this.config={},this.isInitialized=!1}setConfig(e){this.config=Object.assign({},e)}async connectedCallback(){super.connectedCallback(),await this.loadCardHelpers()}shouldUpdate(){return this.isInitialized||this.initialize(),!0}render(){if(!this.hass||!this.helpers)return K;const e=Object.assign(Object.assign({},St),this.config);return U`
      <div class="card-config">
        ${1===this.page?this.renderPage1(e):this.renderPage2(e)}
      </div>
    `}_handleConfigClick(){this.page=1}_handleCustomClick(){this.page=2}renderPage1(e){const a=Object.keys(this.hass.states).filter((e=>e.startsWith("bodymiscale.")));return U`
      <div class="flex-space-between">
        <h2 class="page-title">${yt("editor.Configuration")}</h2>
        <div class="navigation">
          <ha-icon-button
            @click=${this._handleConfigClick}
            .disabled=${1===this.page}
          >
            <ha-icon icon="mdi:tune"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            @click=${this._handleCustomClick}
            .disabled=${2===this.page}
          >
            <ha-icon icon="mdi:palette"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
      <div class="option">
        <ha-select
          .label=${yt("editor.entity")}
          @selected=${this.valueChanged}
          .configValue=${"entity"}
          .value=${e.entity}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
          required
          .validationMessage=${yt("error.missing_entity")}
        >
          ${a.map((e=>U`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
        </ha-select>
      </div>

      <div class="option">
        <ha-textfield
          .label=${yt("editor.image")}
          .value=${e.image||""}
          .configValue=${"image"}
          @input=${this.valueChanged}
        ></ha-textfield>
      </div>

      ${this.renderSwitch("model",e)} ${this.renderSwitch("unit",e)}
      ${this.renderSwitch("theme",e)}

      <p class="page-title">
        <u>${yt("editor.header_options")}</u>
      </p>

      ${this.renderSwitch("show_name",e)}
      ${this.renderSwitch("show_states",e)}
      ${this.renderSwitch("show_attributes",e)}

      <p class="page-title">
        <u>${yt("editor.body_options")}</u>
      </p>

      ${this.renderSwitch("show_always_details",e)}
      ${this.renderSwitch("show_toolbar",e)}
      ${this.renderSwitch("show_body",e,!0)}
      ${this.renderSwitch("show_buttons",e,!0)}

      <strong>${yt("editor.code_only_note")}</strong>
    `}renderPage2(e){return U`
      <div class="flex-space-between">
        <h2 class="page-title">${yt("editor.Customization")}</h2>
        <div class="navigation">
          <ha-icon-button
            @click=${this._handleConfigClick}
            .disabled=${1===this.page}
          >
            <ha-icon icon="mdi:tune"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            @click=${this._handleCustomClick}
            .disabled=${2===this.page}
          >
            <ha-icon icon="mdi:palette"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
      ${this.renderBodyOptions(e)}
    `}renderSwitch(e,a,o=!1){return U`
      <div style="padding: ${o?"0 0 0 45px":"0"}">
        ${yt(`editor.${e}`)}
        <div class="option">
          <ha-formfield
            .label=${yt(a[e]?`editor.${e}_aria_label_off`:`editor.${e}_aria_label_on`)}
          >
            <ha-switch
              .checked=${Boolean(a[e])}
              .configValue=${e}
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}renderBodyOptions(e){var a;const o=!1===e.unit?Mt:Pt,i=null!==(a=e.body)&&void 0!==a?a:{};return Object.keys(o).filter((a=>{const i=o[a];return!1!==e.model||!i.impedance_required})).map((e=>{var a,t,n,r,s,l,d,c,_,h;const m=o[e],u=(null===(a=i[e])||void 0===a?void 0:a.positions)||m.positions||{},b=void 0!==(null===(t=i[e])||void 0===t?void 0:t.min)?null===(n=i[e])||void 0===n?void 0:n.min:m.min,g=void 0!==(null===(r=i[e])||void 0===r?void 0:r.max)?null===(s=i[e])||void 0===s?void 0:s.max:m.max,p=void 0!==(null===(l=i[e])||void 0===l?void 0:l.target)?null===(d=i[e])||void 0===d?void 0:d.target:m.target,y=void 0!==(null===(c=i[e])||void 0===c?void 0:c.height)?null===(_=i[e])||void 0===_?void 0:_.height:m.height,f=(null===(h=i[e])||void 0===h?void 0:h.severity)||m.severity,v=yt(`body.${e}`);return U`
        <div>
          <h3>${v}</h3>
          <ha-form-grid>
            ${["icon","name","minmax","value"].map((a=>this.renderPositionSelect(a,u[a],e)))}
          </ha-form-grid>
          <ha-form-grid>
            ${this.renderMinMaxInputs(b,g,e)}
            ${this.renderTargetInputs(p,e)}
            ${this.renderHeightInputs(y,e)}
          </ha-form-grid>
          <ha-form-grid>
            ${this.renderSeverityInputs(f,e)}
          </ha-form-grid>
        </div>
      `}))}renderPositionSelect(e,a,o){const i=null!=a?a:"";return U`
      <div class="option">
        <ha-select
          .label=${yt(`editor_body.${e}_position`)}
          .configValue=${`body.${o}.positions.${e}`}
          @selected=${this.valueChanged}
          .value=${i}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
          class="full"
        >
          ${void 0===a?U`<mwc-list-item value="" selected disabled></mwc-list-item>`:K}
          <mwc-list-item value="inside"
            >${yt("editor_body.inside")}</mwc-list-item
          >
          <mwc-list-item value="outside"
            >${yt("editor_body.outside")}</mwc-list-item
          >
          <mwc-list-item value="off"
            >${yt("editor_body.off")}</mwc-list-item
          >
        </ha-select>
      </div>
    `}renderMinMaxInputs(e,a,o){return null==e||null==a?K:U`
      <div class="option">
        <ha-textfield
          .label=${yt("editor_body.min")}
          .configValue=${`body.${o}.min`}
          @input=${this.valueChanged}
          .value=${String(e)}
          class="full"
          type="number"
        ></ha-textfield>
      </div>
      <div class="option">
        <ha-textfield
          .label=${yt("editor_body.max")}
          .configValue=${`body.${o}.max`}
          @input=${this.valueChanged}
          .value=${String(a)}
          class="full"
          type="number"
        ></ha-textfield>
      </div>
    `}renderTargetInputs(e,a){return null==e?K:U`
      <div class="option">
        <ha-textfield
          .label=${yt("editor_body.target")}
          .configValue=${`body.${a}.target`}
          @input=${this.valueChanged}
          .value=${String(e)}
          class="full"
          type="number"
        ></ha-textfield>
      </div>
    `}renderHeightInputs(e,a){return null==e?K:U`
      <div class="option">
        <ha-textfield
          .label=${yt("editor_body.height")}
          .configValue=${`body.${a}.height`}
          @input=${this.valueChanged}
          .value=${String(e)}
          class="full"
          type="number"
        ></ha-textfield>
      </div>
    `}renderSeverityInputs(e,a){if(null==e)return K;const o=Array.isArray(e)?e:[],i=o.length>0?o:[{from:"",to:"",color:""}];return U`
      <div>
        ${i.map(((e,o)=>{var i,t,n;return U`
              <div class="severity-row">
                <ha-textfield
                  .label=${yt("editor_body.from")}
                  .value=${String(null!==(i=e.from)&&void 0!==i?i:"")}
                  @input=${e=>this.updateNumericSeverity(a,o,"from",e.target.value)}
                  type="number"
                  class="full"
                ></ha-textfield>
                <ha-textfield
                  .label=${yt("editor_body.to")}
                  .value=${String(null!==(t=e.to)&&void 0!==t?t:"")}
                  @input=${e=>this.updateNumericSeverity(a,o,"to",e.target.value)}
                  type="number"
                  class="full"
                ></ha-textfield>
                <div>
                  <color-select
                    .value=${null!==(n=e.color)&&void 0!==n?n:""}
                    @value-changed=${e=>this.updateNumericSeverity(a,o,"color",e.detail.value)}
                  ></color-select>
                </div>
                <div style="display: flex; align-items: center; margin: 0px">
                  <ha-icon-button
                    @click=${()=>this.removeNumericSeverity(a,o)}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </ha-icon-button>
                  <ha-icon-button
                    @click=${()=>this.addNumericSeverity(a)}
                  >
                    <ha-icon icon="mdi:plus"></ha-icon>
                  </ha-icon-button>
                </div>
              </div>
            `}))}
      </div>
    `}updateNumericSeverity(e,a,o,i){var t;if(this.config&&this.config.body){Array.isArray(null===(t=this.config.body[e])||void 0===t?void 0:t.severity)||(this.config.body[e].severity=[]);const n=[...this.config.body[e].severity];n[a]&&(n[a]=Object.assign(Object.assign({},n[a]),{[o]:i}),this.updateConfig(e,n))}}addNumericSeverity(e){var a,o;if(this.config&&this.config.body){Array.isArray(null===(a=this.config.body[e])||void 0===a?void 0:a.severity)||(this.config.body[e].severity=[]);const i=[...(null===(o=this.config.body[e])||void 0===o?void 0:o.severity)||[]];i.push({from:0,to:0,color:""}),this.updateConfig(e,i)}}removeNumericSeverity(e,a){var o,i,t;const n=[...(null===(t=null===(i=null===(o=this.config)||void 0===o?void 0:o.body)||void 0===i?void 0:i[e])||void 0===t?void 0:t.severity)||[]].filter(((e,o)=>o!==a));0===n.length&&n.push({from:0,to:0,color:""}),this.updateConfig(e,n)}updateConfig(e,a){this.config&&this.config.body&&(this.config.body[e].severity=a,this.valueChanged())}valueChanged(e=null){if(this.config&&this.hass)if(e&&e.target){const a=e.target;if(a.configValue&&"string"==typeof a.configValue){const e=void 0!==a.checked?a.checked:a.value||void 0,o=a.configValue.split(".");let i=Object.assign({},this.config),t=i;for(let e=0;e<o.length-1;e++){const a=o[e];void 0===t[a]&&(t[a]={}),t=t[a]}t[o[o.length-1]]=e,this.config=i,ze(this,"config-changed",{config:this.config})}}else ze(this,"config-changed",{config:this.config})}initialize(){this.hass&&this.config&&this.helpers&&(this.isInitialized=!0)}async loadCardHelpers(){this.helpers=await window.loadCardHelpers()}static get styles(){return Vt}};e([ce({attribute:!1})],Gt.prototype,"hass",void 0),e([ce({type:Number})],Gt.prototype,"page",void 0),e([ce()],Gt.prototype,"selectedColor",void 0),e([_e()],Gt.prototype,"config",void 0),e([_e()],Gt.prototype,"helpers",void 0),Gt=e([se("body-miscale-card-editor")],Gt);var qt=Object.freeze({__proto__:null,get BodymiscaleCardEditor(){return Gt}});export{Tt as BodymiscaleCard};
