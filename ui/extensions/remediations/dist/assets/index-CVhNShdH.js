var Kp=Object.defineProperty;var qp=(t,e,s)=>e in t?Kp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var nt=(t,e,s)=>qp(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=globalThis,gl=Xo.ShadowRoot&&(Xo.ShadyCSS===void 0||Xo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ml=Symbol(),hc=new WeakMap;let pu=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(gl&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=hc.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&hc.set(s,e))}return e}toString(){return this.cssText}};const Gp=t=>new pu(typeof t=="string"?t:t+"",void 0,ml),rt=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new pu(s,t,ml)},Yp=(t,e)=>{if(gl)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=Xo.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},pc=gl?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Gp(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xp,defineProperty:Jp,getOwnPropertyDescriptor:Qp,getOwnPropertyNames:Zp,getOwnPropertySymbols:tf,getPrototypeOf:ef}=Object,Tn=globalThis,fc=Tn.trustedTypes,sf=fc?fc.emptyScript:"",rf=Tn.reactiveElementPolyfillSupport,Fr=(t,e)=>t,pr={toAttribute(t,e){switch(e){case Boolean:t=t?sf:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},bl=(t,e)=>!Xp(t,e),gc={attribute:!0,type:String,converter:pr,reflect:!1,hasChanged:bl};Symbol.metadata??=Symbol("metadata"),Tn.litPropertyMetadata??=new WeakMap;class ir extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=gc){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Jp(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:o}=Qp(this.prototype,e)??{get(){return this[s]},set(n){this[s]=n}};return{get(){return r?.call(this)},set(n){const a=r?.call(this);o.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??gc}static _$Ei(){if(this.hasOwnProperty(Fr("elementProperties")))return;const e=ef(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fr("properties"))){const s=this.properties,i=[...Zp(s),...tf(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(pc(r))}else e!==void 0&&s.push(pc(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yp(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$EC(e,s){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:pr).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:pr;this._$Em=r,this[r]=n.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(e,s,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??bl)(this[e],s))return;this.P(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,i){this._$AL.has(e)||this._$AL.set(e,s),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(s=>this._$EC(s,this[s])),this._$EU()}updated(e){}firstUpdated(e){}}ir.elementStyles=[],ir.shadowRootOptions={mode:"open"},ir[Fr("elementProperties")]=new Map,ir[Fr("finalized")]=new Map,rf?.({ReactiveElement:ir}),(Tn.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yl=globalThis,rn=yl.trustedTypes,mc=rn?rn.createPolicy("lit-html",{createHTML:t=>t}):void 0,fu="$lit$",pi=`lit$${Math.random().toFixed(9).slice(2)}$`,gu="?"+pi,of=`<${gu}>`,Fi=document,so=()=>Fi.createComment(""),io=t=>t===null||typeof t!="object"&&typeof t!="function",vl=Array.isArray,nf=t=>vl(t)||typeof t?.[Symbol.iterator]=="function",ta=`[ 	
\f\r]`,$r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bc=/-->/g,yc=/>/g,$i=RegExp(`>|${ta}(?:([^\\s"'>=/]+)(${ta}*=${ta}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vc=/'/g,_c=/"/g,mu=/^(?:script|style|textarea|title)$/i,af=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),F=af(1),Ze=Symbol.for("lit-noChange"),jt=Symbol.for("lit-nothing"),wc=new WeakMap,Pi=Fi.createTreeWalker(Fi,129);function bu(t,e){if(!vl(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return mc!==void 0?mc.createHTML(e):e}const lf=(t,e)=>{const s=t.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=$r;for(let a=0;a<s;a++){const l=t[a];let d,h,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===$r?h[1]==="!--"?n=bc:h[1]!==void 0?n=yc:h[2]!==void 0?(mu.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=$i):h[3]!==void 0&&(n=$i):n===$i?h[0]===">"?(n=r??$r,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?$i:h[3]==='"'?_c:vc):n===_c||n===vc?n=$i:n===bc||n===yc?n=$r:(n=$i,r=void 0);const g=n===$i&&t[a+1].startsWith("/>")?" ":"";o+=n===$r?l+of:u>=0?(i.push(d),l.slice(0,u)+fu+l.slice(u)+pi+g):l+pi+(u===-2?a:g)}return[bu(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ro{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[d,h]=lf(e,s);if(this.el=ro.createElement(d,i),Pi.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Pi.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(fu)){const p=h[n++],g=r.getAttribute(u).split(pi),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?df:v[1]==="?"?uf:v[1]==="@"?hf:In}),r.removeAttribute(u)}else u.startsWith(pi)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(mu.test(r.tagName)){const u=r.textContent.split(pi),p=u.length-1;if(p>0){r.textContent=rn?rn.emptyScript:"";for(let g=0;g<p;g++)r.append(u[g],so()),Pi.nextNode(),l.push({type:2,index:++o});r.append(u[p],so())}}}else if(r.nodeType===8)if(r.data===gu)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(pi,u+1))!==-1;)l.push({type:7,index:o}),u+=pi.length-1}o++}}static createElement(e,s){const i=Fi.createElement("template");return i.innerHTML=e,i}}function fr(t,e,s=t,i){if(e===Ze)return e;let r=i!==void 0?s._$Co?.[i]:s._$Cl;const o=io(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=r:s._$Cl=r),r!==void 0&&(e=fr(t,r._$AS(t,e.values),r,i)),e}class cf{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??Fi).importNode(s,!0);Pi.currentNode=r;let o=Pi.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new mo(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new pf(o,this,e)),this._$AV.push(d),l=i[++a]}n!==l?.index&&(o=Pi.nextNode(),n++)}return Pi.currentNode=Fi,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class mo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=jt,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=fr(this,e,s),io(e)?e===jt||e==null||e===""?(this._$AH!==jt&&this._$AR(),this._$AH=jt):e!==this._$AH&&e!==Ze&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):nf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==jt&&io(this._$AH)?this._$AA.nextSibling.data=e:this.T(Fi.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ro.createElement(bu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{const o=new cf(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=wc.get(e.strings);return s===void 0&&wc.set(e.strings,s=new ro(e)),s}k(e){vl(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const o of e)r===s.length?s.push(i=new mo(this.O(so()),this.O(so()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class In{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,o){this.type=1,this._$AH=jt,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=jt}_$AI(e,s=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=fr(this,e,s,0),n=!io(e)||e!==this._$AH&&e!==Ze,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=fr(this,a[i+l],s,l),d===Ze&&(d=this._$AH[l]),n||=!io(d)||d!==this._$AH[l],d===jt?e=jt:e!==jt&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.j(e)}j(e){e===jt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let df=class extends In{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===jt?void 0:e}};class uf extends In{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==jt)}}class hf extends In{constructor(e,s,i,r,o){super(e,s,i,r,o),this.type=5}_$AI(e,s=this){if((e=fr(this,e,s,0)??jt)===Ze)return;const i=this._$AH,r=e===jt&&i!==jt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==jt&&(i===jt||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class pf{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){fr(this,e)}}const ff=yl.litHtmlPolyfillSupport;ff?.(ro,mo),(yl.litHtmlVersions??=[]).push("3.2.1");const gf=(t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const o=s?.renderBefore??null;i._$litPart$=r=new mo(e.insertBefore(so(),o),o,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Br=class extends ir{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gf(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ze}};Br._$litElement$=!0,Br.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Br});const mf=globalThis.litElementPolyfillSupport;mf?.({LitElement:Br});(globalThis.litElementVersions??=[]).push("4.1.1");var bf=rt`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,lt=rt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,yu=Object.defineProperty,yf=Object.defineProperties,vf=Object.getOwnPropertyDescriptor,_f=Object.getOwnPropertyDescriptors,xc=Object.getOwnPropertySymbols,wf=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable,ea=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),_l=t=>{throw TypeError(t)},kc=(t,e,s)=>e in t?yu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,si=(t,e)=>{for(var s in e||(e={}))wf.call(e,s)&&kc(t,s,e[s]);if(xc)for(var s of xc(e))xf.call(e,s)&&kc(t,s,e[s]);return t},bo=(t,e)=>yf(t,_f(e)),c=(t,e,s,i)=>{for(var r=i>1?void 0:i?vf(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(r=(i?n(e,s,r):n(r))||r);return i&&r&&yu(e,s,r),r},vu=(t,e,s)=>e.has(t)||_l("Cannot "+s),kf=(t,e,s)=>(vu(t,e,"read from private field"),e.get(t)),Cf=(t,e,s)=>e.has(t)?_l("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Sf=(t,e,s,i)=>(vu(t,e,"write to private field"),e.set(t,s),s),Ef=function(t,e){this[0]=t,this[1]=e},Af=t=>{var e=t[ea("asyncIterator")],s=!1,i,r={};return e==null?(e=t[ea("iterator")](),i=o=>r[o]=n=>e[o](n)):(e=e.call(t),i=o=>r[o]=n=>{if(s){if(s=!1,o==="throw")throw n;return n}return s=!0,{done:!1,value:new Ef(new Promise(a=>{var l=e[o](n);l instanceof Object||_l("Object expected"),a(l)}),1)}}),r[ea("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=o=>{throw o},"return"in e&&i("return"),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $f={attribute:!0,type:String,converter:pr,reflect:!1,hasChanged:bl},Tf=(t=$f,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),i==="accessor"){const{name:n}=s;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.P(n,void 0,t),a}}}if(i==="setter"){const{name:n}=s;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+i)};function f(t){return(e,s)=>typeof s=="object"?Tf(t,e,s):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yo(t){return(e,s)=>{const i=typeof e=="function"?e:e[s];Object.assign(i,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _u=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(t,e){return(s,i,r)=>{const o=n=>n.renderRoot?.querySelector(t)??null;return _u(s,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function If(t){return(e,s)=>_u(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var Jo,st=class extends Br{constructor(){super(),Cf(this,Jo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,si({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,s)}catch{customElements.define(t,class extends e{},s)}return}let r=" (unknown version)",o=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(o=" v"+i.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${o} has already been registered.`)}attributeChangedCallback(t,e,s){kf(this,Jo)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Sf(this,Jo,!0)),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}};Jo=new WeakMap;st.version="2.20.1";st.dependencies={};c([f()],st.prototype,"dir",2);c([f()],st.prototype,"lang",2);var wl=class extends st{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),i=s.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||s.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=i;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return F`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};wl.styles=[lt,bf];c([Y("slot")],wl.prototype,"defaultSlot",2);wl.define("sl-menu");var Lf=rt`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Of=(t,e)=>t?._$litType$!==void 0,wu=t=>t.strings===void 0,Rf={},Mf=(t,e=Rf)=>t._$AH=e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},vo=t=>(...e)=>({_$litDirective$:t,values:e});let _o=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),Ur(i,e);return!0},on=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},xu=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),zf(e)}};function Pf(t){this._$AN!==void 0?(on(this),this._$AM=t,xu(this)):this._$AM=t}function Df(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)Ur(i[o],!1),on(i[o]);else i!=null&&(Ur(i,!1),on(i));else Ur(this,t)}const zf=t=>{t.type==Ls.CHILD&&(t._$AP??=Df,t._$AQ??=Pf)};class Vf extends _o{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),xu(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Ur(this,e),on(this))}setValue(e){if(wu(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nf=()=>new Ff;let Ff=class{};const sa=new WeakMap,Bf=vo(class extends Vf{render(t){return jt}update(t,[e]){const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),jt}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let s=sa.get(e);s===void 0&&(s=new WeakMap,sa.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?sa.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Uf=class{constructor(t,e){this.popupRef=Nf(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:o,top:n,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var n;const a=(n=e.get(o))!=null?n:new CSSUnitValue(0,"px"),d=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return r-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?F`
      <sl-popup
        ${Bf(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:F` <slot name="submenu" hidden></slot> `}},Hf=rt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const La=new Set,ar=new Map;let Mi,xl="ltr",kl="en";const ku=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ku){const t=new MutationObserver(Su);xl=document.documentElement.dir||"ltr",kl=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Cu(...t){t.map(e=>{const s=e.$code.toLowerCase();ar.has(s)?ar.set(s,Object.assign(Object.assign({},ar.get(s)),e)):ar.set(s,e),Mi||(Mi=e)}),Su()}function Su(){ku&&(xl=document.documentElement.dir||"ltr",kl=document.documentElement.lang||navigator.language),[...La.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let jf=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){La.add(this.host)}hostDisconnected(){La.delete(this.host)}dir(){return`${this.host.dir||xl}`.toLowerCase()}lang(){return`${this.host.lang||kl}`.toLowerCase()}getTranslationData(e){var s,i;const r=new Intl.Locale(e.replace(/_/g,"-")),o=r?.language.toLowerCase(),n=(i=(s=r?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",a=ar.get(`${o}-${n}`),l=ar.get(o);return{locale:r,language:o,region:n,primary:a,secondary:l}}exists(e,s){var i;const{primary:r,secondary:o}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(r&&r[e]||o&&o[e]||s.includeFallback&&Mi&&Mi[e])}term(e,...s){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[e])o=i[e];else if(r&&r[e])o=r[e];else if(Mi&&Mi[e])o=Mi[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...s):o}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,s)}};var Eu={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Cu(Eu);var Wf=Eu,$t=class extends jf{};Cu(Wf);const bi=Math.min,Je=Math.max,nn=Math.round,Ro=Math.floor,Ms=t=>({x:t,y:t}),Kf={left:"right",right:"left",bottom:"top",top:"bottom"},qf={start:"end",end:"start"};function Oa(t,e,s){return Je(t,bi(e,s))}function vr(t,e){return typeof t=="function"?t(e):t}function yi(t){return t.split("-")[0]}function _r(t){return t.split("-")[1]}function Au(t){return t==="x"?"y":"x"}function Cl(t){return t==="y"?"height":"width"}function Bi(t){return["top","bottom"].includes(yi(t))?"y":"x"}function Sl(t){return Au(Bi(t))}function Gf(t,e,s){s===void 0&&(s=!1);const i=_r(t),r=Sl(t),o=Cl(r);let n=r==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(n=an(n)),[n,an(n)]}function Yf(t){const e=an(t);return[Ra(t),e,Ra(e)]}function Ra(t){return t.replace(/start|end/g,e=>qf[e])}function Xf(t,e,s){const i=["left","right"],r=["right","left"],o=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return s?e?r:i:e?i:r;case"left":case"right":return e?o:n;default:return[]}}function Jf(t,e,s,i){const r=_r(t);let o=Xf(yi(t),s==="start",i);return r&&(o=o.map(n=>n+"-"+r),e&&(o=o.concat(o.map(Ra)))),o}function an(t){return t.replace(/left|right|bottom|top/g,e=>Kf[e])}function Qf(t){return{top:0,right:0,bottom:0,left:0,...t}}function $u(t){return typeof t!="number"?Qf(t):{top:t,right:t,bottom:t,left:t}}function ln(t){const{x:e,y:s,width:i,height:r}=t;return{width:i,height:r,top:s,left:e,right:e+i,bottom:s+r,x:e,y:s}}function Cc(t,e,s){let{reference:i,floating:r}=t;const o=Bi(e),n=Sl(e),a=Cl(n),l=yi(e),d=o==="y",h=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,p=i[a]/2-r[a]/2;let g;switch(l){case"top":g={x:h,y:i.y-r.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-r.width,y:u};break;default:g={x:i.x,y:i.y}}switch(_r(e)){case"start":g[n]-=p*(s&&d?-1:1);break;case"end":g[n]+=p*(s&&d?-1:1);break}return g}const Zf=async(t,e,s)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=Cc(d,i,l),p=i,g={},v=0;for(let k=0;k<a.length;k++){const{name:I,fn:_}=a[k],{x:w,y:A,data:m,reset:C}=await _({x:h,y:u,initialPlacement:i,placement:p,strategy:r,middlewareData:g,rects:d,platform:n,elements:{reference:t,floating:e}});h=w??h,u=A??u,g={...g,[I]:{...g[I],...m}},C&&v<=50&&(v++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(d=C.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):C.rects),{x:h,y:u}=Cc(d,p,l)),k=-1)}return{x:h,y:u,placement:p,strategy:r,middlewareData:g}};async function El(t,e){var s;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=vr(e,t),v=$u(g),I=a[p?u==="floating"?"reference":"floating":u],_=ln(await o.getClippingRect({element:(s=await(o.isElement==null?void 0:o.isElement(I)))==null||s?I:I.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),w=u==="floating"?{x:i,y:r,width:n.floating.width,height:n.floating.height}:n.reference,A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),m=await(o.isElement==null?void 0:o.isElement(A))?await(o.getScale==null?void 0:o.getScale(A))||{x:1,y:1}:{x:1,y:1},C=ln(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:A,strategy:l}):w);return{top:(_.top-C.top+v.top)/m.y,bottom:(C.bottom-_.bottom+v.bottom)/m.y,left:(_.left-C.left+v.left)/m.x,right:(C.right-_.right+v.right)/m.x}}const tg=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:r,rects:o,platform:n,elements:a,middlewareData:l}=e,{element:d,padding:h=0}=vr(t,e)||{};if(d==null)return{};const u=$u(h),p={x:s,y:i},g=Sl(r),v=Cl(g),k=await n.getDimensions(d),I=g==="y",_=I?"top":"left",w=I?"bottom":"right",A=I?"clientHeight":"clientWidth",m=o.reference[v]+o.reference[g]-p[g]-o.floating[v],C=p[g]-o.reference[g],R=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let T=R?R[A]:0;(!T||!await(n.isElement==null?void 0:n.isElement(R)))&&(T=a.floating[A]||o.floating[v]);const B=m/2-C/2,D=T/2-k[v]/2-1,V=bi(u[_],D),dt=bi(u[w],D),it=V,ft=T-k[v]-dt,_t=T/2-k[v]/2+B,kt=Oa(it,_t,ft),X=!l.arrow&&_r(r)!=null&&_t!==kt&&o.reference[v]/2-(_t<it?V:dt)-k[v]/2<0,J=X?_t<it?_t-it:_t-ft:0;return{[g]:p[g]+J,data:{[g]:kt,centerOffset:_t-kt-J,...X&&{alignmentOffset:J}},reset:X}}}),eg=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:r,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:d}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:k=!0,...I}=vr(t,e);if((s=o.arrow)!=null&&s.alignmentOffset)return{};const _=yi(r),w=Bi(a),A=yi(a)===a,m=await(l.isRTL==null?void 0:l.isRTL(d.floating)),C=p||(A||!k?[an(a)]:Yf(a)),R=v!=="none";!p&&R&&C.push(...Jf(a,k,v,m));const T=[a,...C],B=await El(e,I),D=[];let V=((i=o.flip)==null?void 0:i.overflows)||[];if(h&&D.push(B[_]),u){const _t=Gf(r,n,m);D.push(B[_t[0]],B[_t[1]])}if(V=[...V,{placement:r,overflows:D}],!D.every(_t=>_t<=0)){var dt,it;const _t=(((dt=o.flip)==null?void 0:dt.index)||0)+1,kt=T[_t];if(kt)return{data:{index:_t,overflows:V},reset:{placement:kt}};let X=(it=V.filter(J=>J.overflows[0]<=0).sort((J,ht)=>J.overflows[1]-ht.overflows[1])[0])==null?void 0:it.placement;if(!X)switch(g){case"bestFit":{var ft;const J=(ft=V.filter(ht=>{if(R){const Z=Bi(ht.placement);return Z===w||Z==="y"}return!0}).map(ht=>[ht.placement,ht.overflows.filter(Z=>Z>0).reduce((Z,Ct)=>Z+Ct,0)]).sort((ht,Z)=>ht[1]-Z[1])[0])==null?void 0:ft[0];J&&(X=J);break}case"initialPlacement":X=a;break}if(r!==X)return{reset:{placement:X}}}return{}}}};async function sg(t,e){const{placement:s,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=yi(s),a=_r(s),l=Bi(s)==="y",d=["left","top"].includes(n)?-1:1,h=o&&l?-1:1,u=vr(e,t);let{mainAxis:p,crossAxis:g,alignmentAxis:v}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*h,y:p*d}:{x:p*d,y:g*h}}const ig=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:r,y:o,placement:n,middlewareData:a}=e,l=await sg(e,t);return n===((s=a.offset)==null?void 0:s.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:n}}}}},rg=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:n=!1,limiter:a={fn:I=>{let{x:_,y:w}=I;return{x:_,y:w}}},...l}=vr(t,e),d={x:s,y:i},h=await El(e,l),u=Bi(yi(r)),p=Au(u);let g=d[p],v=d[u];if(o){const I=p==="y"?"top":"left",_=p==="y"?"bottom":"right",w=g+h[I],A=g-h[_];g=Oa(w,g,A)}if(n){const I=u==="y"?"top":"left",_=u==="y"?"bottom":"right",w=v+h[I],A=v-h[_];v=Oa(w,v,A)}const k=a.fn({...e,[p]:g,[u]:v});return{...k,data:{x:k.x-s,y:k.y-i,enabled:{[p]:o,[u]:n}}}}}},og=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var s,i;const{placement:r,rects:o,platform:n,elements:a}=e,{apply:l=()=>{},...d}=vr(t,e),h=await El(e,d),u=yi(r),p=_r(r),g=Bi(r)==="y",{width:v,height:k}=o.floating;let I,_;u==="top"||u==="bottom"?(I=u,_=p===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(_=u,I=p==="end"?"top":"bottom");const w=k-h.top-h.bottom,A=v-h.left-h.right,m=bi(k-h[I],w),C=bi(v-h[_],A),R=!e.middlewareData.shift;let T=m,B=C;if((s=e.middlewareData.shift)!=null&&s.enabled.x&&(B=A),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(T=w),R&&!p){const V=Je(h.left,0),dt=Je(h.right,0),it=Je(h.top,0),ft=Je(h.bottom,0);g?B=v-2*(V!==0||dt!==0?V+dt:Je(h.left,h.right)):T=k-2*(it!==0||ft!==0?it+ft:Je(h.top,h.bottom))}await l({...e,availableWidth:B,availableHeight:T});const D=await n.getDimensions(a.floating);return v!==D.width||k!==D.height?{reset:{rects:!0}}:{}}}};function Ln(){return typeof window<"u"}function wr(t){return Tu(t)?(t.nodeName||"").toLowerCase():"#document"}function es(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ns(t){var e;return(e=(Tu(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Tu(t){return Ln()?t instanceof Node||t instanceof es(t).Node:!1}function bs(t){return Ln()?t instanceof Element||t instanceof es(t).Element:!1}function zs(t){return Ln()?t instanceof HTMLElement||t instanceof es(t).HTMLElement:!1}function Sc(t){return!Ln()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof es(t).ShadowRoot}function wo(t){const{overflow:e,overflowX:s,overflowY:i,display:r}=ys(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(r)}function ng(t){return["table","td","th"].includes(wr(t))}function On(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Rn(t){const e=Al(),s=bs(t)?ys(t):t;return["transform","translate","scale","rotate","perspective"].some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function ag(t){let e=vi(t);for(;zs(e)&&!gr(e);){if(Rn(e))return e;if(On(e))return null;e=vi(e)}return null}function Al(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function gr(t){return["html","body","#document"].includes(wr(t))}function ys(t){return es(t).getComputedStyle(t)}function Mn(t){return bs(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function vi(t){if(wr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Sc(t)&&t.host||Ns(t);return Sc(e)?e.host:e}function Iu(t){const e=vi(t);return gr(e)?t.ownerDocument?t.ownerDocument.body:t.body:zs(e)&&wo(e)?e:Iu(e)}function oo(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const r=Iu(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),n=es(r);if(o){const a=Ma(n);return e.concat(n,n.visualViewport||[],wo(r)?r:[],a&&s?oo(a):[])}return e.concat(r,oo(r,[],s))}function Ma(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Lu(t){const e=ys(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=zs(t),o=r?t.offsetWidth:s,n=r?t.offsetHeight:i,a=nn(s)!==o||nn(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function $l(t){return bs(t)?t:t.contextElement}function lr(t){const e=$l(t);if(!zs(e))return Ms(1);const s=e.getBoundingClientRect(),{width:i,height:r,$:o}=Lu(e);let n=(o?nn(s.width):s.width)/i,a=(o?nn(s.height):s.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const lg=Ms(0);function Ou(t){const e=es(t);return!Al()||!e.visualViewport?lg:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function cg(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==es(t)?!1:e}function Ui(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const r=t.getBoundingClientRect(),o=$l(t);let n=Ms(1);e&&(i?bs(i)&&(n=lr(i)):n=lr(t));const a=cg(o,s,i)?Ou(o):Ms(0);let l=(r.left+a.x)/n.x,d=(r.top+a.y)/n.y,h=r.width/n.x,u=r.height/n.y;if(o){const p=es(o),g=i&&bs(i)?es(i):i;let v=p,k=Ma(v);for(;k&&i&&g!==v;){const I=lr(k),_=k.getBoundingClientRect(),w=ys(k),A=_.left+(k.clientLeft+parseFloat(w.paddingLeft))*I.x,m=_.top+(k.clientTop+parseFloat(w.paddingTop))*I.y;l*=I.x,d*=I.y,h*=I.x,u*=I.y,l+=A,d+=m,v=es(k),k=Ma(v)}}return ln({width:h,height:u,x:l,y:d})}function Tl(t,e){const s=Mn(t).scrollLeft;return e?e.left+s:Ui(Ns(t)).left+s}function Ru(t,e,s){s===void 0&&(s=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(s?0:Tl(t,i)),o=i.top+e.scrollTop;return{x:r,y:o}}function dg(t){let{elements:e,rect:s,offsetParent:i,strategy:r}=t;const o=r==="fixed",n=Ns(i),a=e?On(e.floating):!1;if(i===n||a&&o)return s;let l={scrollLeft:0,scrollTop:0},d=Ms(1);const h=Ms(0),u=zs(i);if((u||!u&&!o)&&((wr(i)!=="body"||wo(n))&&(l=Mn(i)),zs(i))){const g=Ui(i);d=lr(i),h.x=g.x+i.clientLeft,h.y=g.y+i.clientTop}const p=n&&!u&&!o?Ru(n,l,!0):Ms(0);return{width:s.width*d.x,height:s.height*d.y,x:s.x*d.x-l.scrollLeft*d.x+h.x+p.x,y:s.y*d.y-l.scrollTop*d.y+h.y+p.y}}function ug(t){return Array.from(t.getClientRects())}function hg(t){const e=Ns(t),s=Mn(t),i=t.ownerDocument.body,r=Je(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=Je(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-s.scrollLeft+Tl(t);const a=-s.scrollTop;return ys(i).direction==="rtl"&&(n+=Je(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}function pg(t,e){const s=es(t),i=Ns(t),r=s.visualViewport;let o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;const d=Al();(!d||d&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:n,x:a,y:l}}function fg(t,e){const s=Ui(t,!0,e==="fixed"),i=s.top+t.clientTop,r=s.left+t.clientLeft,o=zs(t)?lr(t):Ms(1),n=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,d=i*o.y;return{width:n,height:a,x:l,y:d}}function Ec(t,e,s){let i;if(e==="viewport")i=pg(t,s);else if(e==="document")i=hg(Ns(t));else if(bs(e))i=fg(e,s);else{const r=Ou(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return ln(i)}function Mu(t,e){const s=vi(t);return s===e||!bs(s)||gr(s)?!1:ys(s).position==="fixed"||Mu(s,e)}function gg(t,e){const s=e.get(t);if(s)return s;let i=oo(t,[],!1).filter(a=>bs(a)&&wr(a)!=="body"),r=null;const o=ys(t).position==="fixed";let n=o?vi(t):t;for(;bs(n)&&!gr(n);){const a=ys(n),l=Rn(n);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||wo(n)&&!l&&Mu(t,n))?i=i.filter(h=>h!==n):r=a,n=vi(n)}return e.set(t,i),i}function mg(t){let{element:e,boundary:s,rootBoundary:i,strategy:r}=t;const n=[...s==="clippingAncestors"?On(e)?[]:gg(e,this._c):[].concat(s),i],a=n[0],l=n.reduce((d,h)=>{const u=Ec(e,h,r);return d.top=Je(u.top,d.top),d.right=bi(u.right,d.right),d.bottom=bi(u.bottom,d.bottom),d.left=Je(u.left,d.left),d},Ec(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function bg(t){const{width:e,height:s}=Lu(t);return{width:e,height:s}}function yg(t,e,s){const i=zs(e),r=Ns(e),o=s==="fixed",n=Ui(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Ms(0);if(i||!i&&!o)if((wr(e)!=="body"||wo(r))&&(a=Mn(e)),i){const p=Ui(e,!0,o,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=Tl(r));const d=r&&!i&&!o?Ru(r,a):Ms(0),h=n.left+a.scrollLeft-l.x-d.x,u=n.top+a.scrollTop-l.y-d.y;return{x:h,y:u,width:n.width,height:n.height}}function ia(t){return ys(t).position==="static"}function Ac(t,e){if(!zs(t)||ys(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return Ns(t)===s&&(s=s.ownerDocument.body),s}function Pu(t,e){const s=es(t);if(On(t))return s;if(!zs(t)){let r=vi(t);for(;r&&!gr(r);){if(bs(r)&&!ia(r))return r;r=vi(r)}return s}let i=Ac(t,e);for(;i&&ng(i)&&ia(i);)i=Ac(i,e);return i&&gr(i)&&ia(i)&&!Rn(i)?s:i||ag(t)||s}const vg=async function(t){const e=this.getOffsetParent||Pu,s=this.getDimensions,i=await s(t.floating);return{reference:yg(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function _g(t){return ys(t).direction==="rtl"}const Qo={convertOffsetParentRelativeRectToViewportRelativeRect:dg,getDocumentElement:Ns,getClippingRect:mg,getOffsetParent:Pu,getElementRects:vg,getClientRects:ug,getDimensions:bg,getScale:lr,isElement:bs,isRTL:_g};function Du(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function wg(t,e){let s=null,i;const r=Ns(t);function o(){var a;clearTimeout(i),(a=s)==null||a.disconnect(),s=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const d=t.getBoundingClientRect(),{left:h,top:u,width:p,height:g}=d;if(a||e(),!p||!g)return;const v=Ro(u),k=Ro(r.clientWidth-(h+p)),I=Ro(r.clientHeight-(u+g)),_=Ro(h),A={rootMargin:-v+"px "+-k+"px "+-I+"px "+-_+"px",threshold:Je(0,bi(1,l))||1};let m=!0;function C(R){const T=R[0].intersectionRatio;if(T!==l){if(!m)return n();T?n(!1,T):i=setTimeout(()=>{n(!1,1e-7)},1e3)}T===1&&!Du(d,t.getBoundingClientRect())&&n(),m=!1}try{s=new IntersectionObserver(C,{...A,root:r.ownerDocument})}catch{s=new IntersectionObserver(C,A)}s.observe(t)}return n(!0),o}function xg(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=$l(t),h=r||o?[...d?oo(d):[],...oo(e)]:[];h.forEach(_=>{r&&_.addEventListener("scroll",s,{passive:!0}),o&&_.addEventListener("resize",s)});const u=d&&a?wg(d,s):null;let p=-1,g=null;n&&(g=new ResizeObserver(_=>{let[w]=_;w&&w.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var A;(A=g)==null||A.observe(e)})),s()}),d&&!l&&g.observe(d),g.observe(e));let v,k=l?Ui(t):null;l&&I();function I(){const _=Ui(t);k&&!Du(k,_)&&s(),k=_,v=requestAnimationFrame(I)}return s(),()=>{var _;h.forEach(w=>{r&&w.removeEventListener("scroll",s),o&&w.removeEventListener("resize",s)}),u?.(),(_=g)==null||_.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const kg=ig,Cg=rg,Sg=eg,$c=og,Eg=tg,Ag=(t,e,s)=>{const i=new Map,r={platform:Qo,...s},o={...r.platform,_c:i};return Zf(t,e,{...r,platform:o})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=vo(class extends _o{constructor(t){if(super(t),t.type!==Ls.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return Ze}});function $g(t){return Tg(t)}function ra(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Tg(t){for(let e=t;e;e=ra(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ra(t);e;e=ra(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||Rn(s)||e.tagName==="BODY"))return e}return null}function Ig(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var Ot=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,o=0,n=0,a=0,l=0,d=0,h=0;s?t.top<e.top?(i=t.left,r=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,d=e.right,h=e.top):(i=e.left,r=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,d=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,d=e.left,h=e.bottom):(i=e.right,r=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,d=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ig(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=xg(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[kg({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push($c({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=r?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Sg({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Cg({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push($c({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Eg({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>Qo.getOffsetParent(s,$g):Qo.getOffsetParent;Ag(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:bo(si({},Qo),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:r,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,d=r.arrow.y;let h="",u="",p="",g="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?v:"",g=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":v,g=n?v:"",p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",h=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:p,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return F`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${at({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${at({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?F`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Ot.styles=[lt,Hf];c([Y(".popup")],Ot.prototype,"popup",2);c([Y(".popup__arrow")],Ot.prototype,"arrowEl",2);c([f()],Ot.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"active",2);c([f({reflect:!0})],Ot.prototype,"placement",2);c([f({reflect:!0})],Ot.prototype,"strategy",2);c([f({type:Number})],Ot.prototype,"distance",2);c([f({type:Number})],Ot.prototype,"skidding",2);c([f({type:Boolean})],Ot.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],Ot.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],Ot.prototype,"arrowPadding",2);c([f({type:Boolean})],Ot.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],Ot.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],Ot.prototype,"flipFallbackStrategy",2);c([f({type:Object})],Ot.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],Ot.prototype,"flipPadding",2);c([f({type:Boolean})],Ot.prototype,"shift",2);c([f({type:Object})],Ot.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],Ot.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],Ot.prototype,"autoSize",2);c([f()],Ot.prototype,"sync",2);c([f({type:Object})],Ot.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],Ot.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],Ot.prototype,"hoverBridge",2);var Lg=rt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,xo=class extends st{constructor(){super(...arguments),this.localize=new $t(this)}render(){return F`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};xo.styles=[lt,Lg];var Be=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Og(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let s="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var Pa="";function Da(t){Pa=t}function Rg(t=""){if(!Pa){const e=[...document.getElementsByTagName("script")],s=e.find(i=>i.hasAttribute("data-shoelace"));if(s)Da(s.getAttribute("data-shoelace"));else{const i=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),Da(r.split("/").slice(0,-1).join("/"))}}return Pa.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Mg={name:"default",resolver:t=>Rg(`assets/icons/${t}.svg`)},Pg=Mg,Tc={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Dg={name:"system",resolver:t=>t in Tc?`data:image/svg+xml,${encodeURIComponent(Tc[t])}`:""},zg=Dg,Vg=[Pg,zg],za=[];function Ng(t){za.push(t)}function Fg(t){za=za.filter(e=>e!==t)}function Ic(t){return Vg.find(e=>e.name===t)}var Bg=rt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function K(t,e){const s=si({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:o}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{const d=l;if(a.has(d)){const h=a.get(d),u=this[d];h!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),o.call(this,a)}}}var Tr=Symbol(),Mo=Symbol(),oa,na=new Map,zt=class extends st{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let i;if(e?.spriteSheet)return this.svg=F`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Tr:Mo}catch{return Mo}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(((s=o?.tagName)==null?void 0:s.toLowerCase())!=="svg")return Tr;oa||(oa=new DOMParser);const a=oa.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Tr}catch{return Tr}}connectedCallback(){super.connectedCallback(),Ng(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Fg(this)}getIconSource(){const t=Ic(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),i=s?Ic(this.library):void 0;if(!e){this.svg=null;return}let r=na.get(e);if(r||(r=this.resolveIcon(e,i),na.set(e,r)),!this.initialRender)return;const o=await r;if(o===Mo&&na.delete(e),e===this.getIconSource().url){if(Of(o)){if(this.svg=o,i){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(o){case Mo:case Tr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};zt.styles=[lt,Bg];c([ot()],zt.prototype,"svg",2);c([f({reflect:!0})],zt.prototype,"name",2);c([f()],zt.prototype,"src",2);c([f()],zt.prototype,"label",2);c([f({reflect:!0})],zt.prototype,"library",2);c([K("label")],zt.prototype,"handleLabelChange",1);c([K(["name","src","library"])],zt.prototype,"setIcon",1);var ss=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Be(this,"submenu"),this.submenuController=new Uf(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Og(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return F`
      <div
        id="anchor"
        part="base"
        class=${at({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?F` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ss.styles=[lt,Lf];ss.dependencies={"sl-icon":zt,"sl-popup":Ot,"sl-spinner":xo};c([Y("slot:not([name])")],ss.prototype,"defaultSlot",2);c([Y(".menu-item")],ss.prototype,"menuItem",2);c([f()],ss.prototype,"type",2);c([f({type:Boolean,reflect:!0})],ss.prototype,"checked",2);c([f()],ss.prototype,"value",2);c([f({type:Boolean,reflect:!0})],ss.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],ss.prototype,"disabled",2);c([K("checked")],ss.prototype,"handleCheckedChange",1);c([K("disabled")],ss.prototype,"handleDisabledChange",1);c([K("type")],ss.prototype,"handleTypeChange",1);ss.define("sl-menu-item");xo.define("sl-spinner");var Ug=rt`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function*Il(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Af(Il(t.shadowRoot.activeElement))))}function zu(){return[...Il()].pop()}var Lc=new WeakMap;function Vu(t){let e=Lc.get(t);return e||(e=window.getComputedStyle(t,null),Lc.set(t,e)),e}function Hg(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Vu(t);return e.visibility!=="hidden"&&e.display!=="none"}function jg(t){const e=Vu(t),{overflowY:s,overflowX:i}=e;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Wg(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const o=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===t:o.querySelector(n)===t}return Hg(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:jg(t):!1}function Kg(t){var e,s;const i=Va(t),r=(e=i[0])!=null?e:null,o=(s=i[i.length-1])!=null?s:null;return{start:r,end:o}}function qg(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function Va(t){const e=new WeakMap,s=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!s.includes(r)&&Wg(r)&&s.push(r),r instanceof HTMLSlotElement&&qg(r,t)&&r.assignedElements({flatten:!0}).forEach(o=>{i(o)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const o of r.children)i(o)}return i(t),s.sort((r,o)=>{const n=Number(r.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var Nu=new Map,Gg=new WeakMap;function Yg(t){return t??{keyframes:[],options:{duration:0}}}function Oc(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Rt(t,e){Nu.set(t,Yg(e))}function Wt(t,e,s){const i=Gg.get(t);if(i?.[e])return Oc(i[e],s.dir);const r=Nu.get(e);return r?Oc(r,s.dir):{keyframes:[],options:{duration:0}}}function Fe(t,e){return new Promise(s=>{function i(r){r.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}function ee(t,e,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,bo(si({},s),{duration:Na()?0:s.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Rc(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Na(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ce(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}function cn(t,e){return t.map(s=>bo(si({},s),{height:s.height==="auto"?`${e}px`:s.height}))}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=t=>t??jt;var Ce=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(i,r)=>{if(!i)return null;const o=i.closest(r);if(o)return o;const n=i.getRootNode();return n instanceof ShadowRoot?s(n.host,r):null};setTimeout(()=>{var i;const r=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?zu():document.activeElement;(!this.containingElement||s(r,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),i=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Kg(i).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fe(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ce(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Wt(this,"dropdown.show",{dir:this.localize.dir()});await ee(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ce(this);const{keyframes:t,options:e}=Wt(this,"dropdown.hide",{dir:this.localize.dir()});await ee(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return F`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${et(this.sync?this.sync:void 0)}
        class=${at({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ce.styles=[lt,Ug];Ce.dependencies={"sl-popup":Ot};c([Y(".dropdown")],Ce.prototype,"popup",2);c([Y(".dropdown__trigger")],Ce.prototype,"trigger",2);c([Y(".dropdown__panel")],Ce.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],Ce.prototype,"open",2);c([f({reflect:!0})],Ce.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ce.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],Ce.prototype,"containingElement",2);c([f({type:Number})],Ce.prototype,"distance",2);c([f({type:Number})],Ce.prototype,"skidding",2);c([f({type:Boolean})],Ce.prototype,"hoist",2);c([f({reflect:!0})],Ce.prototype,"sync",2);c([K("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);Rt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Rt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ce.define("sl-dropdown");var Xg=rt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fu=Symbol.for(""),Jg=t=>{if(t?.r===Fu)return t?._$litStatic$},dn=(t,...e)=>({_$litStatic$:e.reduce((s,i,r)=>s+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:Fu}),Mc=new Map,Qg=t=>(e,...s)=>{const i=s.length;let r,o;const n=[],a=[];let l,d=0,h=!1;for(;d<i;){for(l=e[d];d<i&&(o=s[d],(r=Jg(o))!==void 0);)l+=r+e[++d],h=!0;d!==i&&a.push(o),n.push(l),d++}if(d===i&&n.push(e[i]),h){const u=n.join("$$lit$$");(e=Mc.get(u))===void 0&&(n.raw=n,Mc.set(u,e=n)),s=a}return t(e,...s)},Hr=Qg(F);var he=class extends st{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?dn`a`:dn`button`;return Hr`
      <${e}
        part="base"
        class=${at({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${et(t?void 0:this.disabled)}
        type=${et(t?void 0:"button")}
        href=${et(t?this.href:void 0)}
        target=${et(t?this.target:void 0)}
        download=${et(t?this.download:void 0)}
        rel=${et(t&&this.target?"noreferrer noopener":void 0)}
        role=${et(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${et(this.name)}
          library=${et(this.library)}
          src=${et(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};he.styles=[lt,Xg];he.dependencies={"sl-icon":zt};c([Y(".icon-button")],he.prototype,"button",2);c([ot()],he.prototype,"hasFocus",2);c([f()],he.prototype,"name",2);c([f()],he.prototype,"library",2);c([f()],he.prototype,"src",2);c([f()],he.prototype,"href",2);c([f()],he.prototype,"target",2);c([f()],he.prototype,"download",2);c([f()],he.prototype,"label",2);c([f({type:Boolean,reflect:!0})],he.prototype,"disabled",2);he.define("sl-icon-button");var Zg=rt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Wi=class extends st{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Ir(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),i=Ir(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",s===0),i.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",s===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return F`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Wi.styles=[lt,Zg];c([Y("slot")],Wi.prototype,"defaultSlot",2);c([ot()],Wi.prototype,"disableRole",2);c([f()],Wi.prototype,"label",2);function Ir(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}Wi.define("sl-button-group");var Lr=new WeakMap,Or=new WeakMap,Rr=new WeakMap,aa=new WeakSet,Po=new WeakMap,ii=class{constructor(t,e){this.handleFormData=s=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{s.formData.append(r,a.toString())}):s.formData.append(r,o.toString()))},this.handleFormSubmit=s=>{var i;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Lr.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Po.set(this.host,[])},this.handleInteraction=s=>{const i=Po.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=si({form:s=>{const i=s.form;if(i){const o=s.getRootNode().querySelector(`#${i}`);if(o)return o}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Po.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Po.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Lr.has(this.form)?Lr.get(this.form).add(this.host):Lr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Or.has(this.form)||(Or.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Rr.has(this.form)||(Rr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Lr.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Or.has(this.form)&&(this.form.reportValidity=Or.get(this.form),Or.delete(this.form)),Rr.has(this.form)&&(this.form.checkValidity=Rr.get(this.form),Rr.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?aa.add(t):aa.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&s.setAttribute(i,e.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!aa.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Pn=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),tm=Object.freeze(bo(si({},Pn),{valid:!1,valueMissing:!0})),em=Object.freeze(bo(si({},Pn),{valid:!1,customError:!0})),Bu=rt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Mt=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Be(this,"[default]","prefix","suffix"),this.localize=new $t(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Pn}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?dn`a`:dn`button`;return Hr`
      <${e}
        part="base"
        class=${at({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${et(t?void 0:this.disabled)}
        type=${et(t?void 0:this.type)}
        title=${this.title}
        name=${et(t?void 0:this.name)}
        value=${et(t?void 0:this.value)}
        href=${et(t&&!this.disabled?this.href:void 0)}
        target=${et(t?this.target:void 0)}
        download=${et(t?this.download:void 0)}
        rel=${et(t?this.rel:void 0)}
        role=${et(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Hr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Hr`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Mt.styles=[lt,Bu];Mt.dependencies={"sl-icon":zt,"sl-spinner":xo};c([Y(".button")],Mt.prototype,"button",2);c([ot()],Mt.prototype,"hasFocus",2);c([ot()],Mt.prototype,"invalid",2);c([f()],Mt.prototype,"title",2);c([f({reflect:!0})],Mt.prototype,"variant",2);c([f({reflect:!0})],Mt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Mt.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Mt.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],Mt.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],Mt.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],Mt.prototype,"circle",2);c([f()],Mt.prototype,"type",2);c([f()],Mt.prototype,"name",2);c([f()],Mt.prototype,"value",2);c([f()],Mt.prototype,"href",2);c([f()],Mt.prototype,"target",2);c([f()],Mt.prototype,"rel",2);c([f()],Mt.prototype,"download",2);c([f()],Mt.prototype,"form",2);c([f({attribute:"formaction"})],Mt.prototype,"formAction",2);c([f({attribute:"formenctype"})],Mt.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],Mt.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],Mt.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],Mt.prototype,"formTarget",2);c([K("disabled",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleDisabledChange",1);Mt.define("sl-button");var sm=rt`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,xr=(t="value")=>(e,s)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,n,a){var l;const d=i.getPropertyOptions(t),h=typeof d.attribute=="string"?d.attribute:t;if(o===h){const u=d.converter||pr,g=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:pr.fromAttribute)(a,d.type);this[t]!==g&&(this[s]=g)}r.call(this,o,n,a)}},Ki=rt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=vo(class extends _o{constructor(t){if(super(t),t.type!==Ls.PROPERTY&&t.type!==Ls.ATTRIBUTE&&t.type!==Ls.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!wu(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ze||e===jt)return e;const s=t.element,i=t.name;if(t.type===Ls.PROPERTY){if(e===s[i])return Ze}else if(t.type===Ls.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return Ze}else if(t.type===Ls.ATTRIBUTE&&s.getAttribute(i)===e+"")return Ze;return Mf(t),e}});var Oe=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Be(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return F`
      <div
        class=${at({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${at({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${et(this.value)}
            .checked=${Hi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Oe.styles=[lt,Ki,sm];c([Y('input[type="checkbox"]')],Oe.prototype,"input",2);c([ot()],Oe.prototype,"hasFocus",2);c([f()],Oe.prototype,"title",2);c([f()],Oe.prototype,"name",2);c([f()],Oe.prototype,"value",2);c([f({reflect:!0})],Oe.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Oe.prototype,"checked",2);c([xr("checked")],Oe.prototype,"defaultChecked",2);c([f({reflect:!0})],Oe.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Oe.prototype,"required",2);c([f({attribute:"help-text"})],Oe.prototype,"helpText",2);c([K("checked",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleCheckedChange",1);c([K("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1);Oe.define("sl-switch");var im=rt`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,_s=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ce(this.body);const{keyframes:e,options:s}=Wt(this,"details.show",{dir:this.localize.dir()});await ee(this.body,cn(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ce(this.body);const{keyframes:e,options:s}=Wt(this,"details.hide",{dir:this.localize.dir()});await ee(this.body,cn(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Fe(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Fe(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return F`
      <details
        part="base"
        class=${at({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};_s.styles=[lt,im];_s.dependencies={"sl-icon":zt};c([Y(".details")],_s.prototype,"details",2);c([Y(".details__header")],_s.prototype,"header",2);c([Y(".details__body")],_s.prototype,"body",2);c([Y(".details__expand-icon-slot")],_s.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],_s.prototype,"open",2);c([f()],_s.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],_s.prototype,"disabled",2);c([K("open",{waitUntilFirstUpdate:!0})],_s.prototype,"handleOpenChange",1);Rt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Rt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});_s.define("sl-details");var rm=rt`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,yt=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Be(this,"help-text","label"),this.localize=new $t(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return F`
      <div
        part="form-control"
        class=${at({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${at({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${et(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${et(this.placeholder)}
              minlength=${et(this.minlength)}
              maxlength=${et(this.maxlength)}
              min=${et(this.min)}
              max=${et(this.max)}
              step=${et(this.step)}
              .value=${Hi(this.value)}
              autocapitalize=${et(this.autocapitalize)}
              autocomplete=${et(this.autocomplete)}
              autocorrect=${et(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${et(this.pattern)}
              enterkeyhint=${et(this.enterkeyhint)}
              inputmode=${et(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?F`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?F`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?F`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:F`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};yt.styles=[lt,Ki,rm];yt.dependencies={"sl-icon":zt};c([Y(".input__control")],yt.prototype,"input",2);c([ot()],yt.prototype,"hasFocus",2);c([f()],yt.prototype,"title",2);c([f({reflect:!0})],yt.prototype,"type",2);c([f()],yt.prototype,"name",2);c([f()],yt.prototype,"value",2);c([xr()],yt.prototype,"defaultValue",2);c([f({reflect:!0})],yt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"pill",2);c([f()],yt.prototype,"label",2);c([f({attribute:"help-text"})],yt.prototype,"helpText",2);c([f({type:Boolean})],yt.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);c([f()],yt.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],yt.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],yt.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],yt.prototype,"noSpinButtons",2);c([f({reflect:!0})],yt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"required",2);c([f()],yt.prototype,"pattern",2);c([f({type:Number})],yt.prototype,"minlength",2);c([f({type:Number})],yt.prototype,"maxlength",2);c([f()],yt.prototype,"min",2);c([f()],yt.prototype,"max",2);c([f()],yt.prototype,"step",2);c([f()],yt.prototype,"autocapitalize",2);c([f()],yt.prototype,"autocorrect",2);c([f()],yt.prototype,"autocomplete",2);c([f({type:Boolean})],yt.prototype,"autofocus",2);c([f()],yt.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],yt.prototype,"spellcheck",2);c([f()],yt.prototype,"inputmode",2);c([K("disabled",{waitUntilFirstUpdate:!0})],yt.prototype,"handleDisabledChange",1);c([K("step",{waitUntilFirstUpdate:!0})],yt.prototype,"handleStepChange",1);c([K("value",{waitUntilFirstUpdate:!0})],yt.prototype,"handleValueChange",1);yt.define("sl-input");var om=rt`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Tt=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Be(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return F`
      <div
        part="form-control"
        class=${at({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${at({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${et(this.name)}
              .value=${Hi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${et(this.placeholder)}
              rows=${et(this.rows)}
              minlength=${et(this.minlength)}
              maxlength=${et(this.maxlength)}
              autocapitalize=${et(this.autocapitalize)}
              autocorrect=${et(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${et(this.spellcheck)}
              enterkeyhint=${et(this.enterkeyhint)}
              inputmode=${et(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Tt.styles=[lt,Ki,om];c([Y(".textarea__control")],Tt.prototype,"input",2);c([Y(".textarea__size-adjuster")],Tt.prototype,"sizeAdjuster",2);c([ot()],Tt.prototype,"hasFocus",2);c([f()],Tt.prototype,"title",2);c([f()],Tt.prototype,"name",2);c([f()],Tt.prototype,"value",2);c([f({reflect:!0})],Tt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"filled",2);c([f()],Tt.prototype,"label",2);c([f({attribute:"help-text"})],Tt.prototype,"helpText",2);c([f()],Tt.prototype,"placeholder",2);c([f({type:Number})],Tt.prototype,"rows",2);c([f()],Tt.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"readonly",2);c([f({reflect:!0})],Tt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Tt.prototype,"required",2);c([f({type:Number})],Tt.prototype,"minlength",2);c([f({type:Number})],Tt.prototype,"maxlength",2);c([f()],Tt.prototype,"autocapitalize",2);c([f()],Tt.prototype,"autocorrect",2);c([f()],Tt.prototype,"autocomplete",2);c([f({type:Boolean})],Tt.prototype,"autofocus",2);c([f()],Tt.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],Tt.prototype,"spellcheck",2);c([f()],Tt.prototype,"inputmode",2);c([xr()],Tt.prototype,"defaultValue",2);c([K("disabled",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleDisabledChange",1);c([K("rows",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleRowsChange",1);c([K("value",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleValueChange",1);Tt.define("sl-textarea");var nm=rt`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,xi=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return F`
      <span
        part="base"
        class=${at({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?F`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};xi.styles=[lt,nm];xi.dependencies={"sl-icon-button":he};c([f({reflect:!0})],xi.prototype,"variant",2);c([f({reflect:!0})],xi.prototype,"size",2);c([f({type:Boolean,reflect:!0})],xi.prototype,"pill",2);c([f({type:Boolean})],xi.prototype,"removable",2);var am=rt`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function lm(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Fa=new Set;function cm(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function dm(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function jr(t){if(Fa.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=cm()+dm();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Wr(t){Fa.delete(t),Fa.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Ba(t,e,s="vertical",i="smooth"){const r=lm(t,e),o=r.top+e.scrollTop,n=r.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,h=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(o<d?e.scrollTo({top:o,behavior:i}):o+t.clientHeight>h&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:i}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ua extends _o{constructor(e){if(super(e),this.it=jt,e.type!==Ls.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===jt||e==null)return this._t=void 0,this.it=e;if(e===Ze)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Ua.directiveName="unsafeHTML",Ua.resultType=1;const Zo=vo(Ua);var wt=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Be(this,"help-text","label"),this.localize=new $t(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>F`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,s=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(s||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),o=r.indexOf(this.currentOption);let n=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=o+1,n>r.length-1&&(n=0)):t.key==="ArrowUp"?(n=o-1,n<0&&(n=r.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const o of r)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const s=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const s=t.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(e)?e:[e],i=[];t.forEach(r=>i.push(r.value)),this.setSelectedOptions(t.filter(r=>s.includes(r.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),s=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,s;const i=this.getAllOptions();this.selectedOptions=i.filter(o=>o.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(t=o?.value)!=null?t:"",this.displayLabel=(s=(e=o?.getTextLabel)==null?void 0:e.call(o))!=null?s:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(t,e);return F`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof s=="string"?Zo(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return F`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return F``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ce(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Wt(this,"select.show",{dir:this.localize.dir()});await ee(this.popup.popup,t,e),this.currentOption&&Ba(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ce(this);const{keyframes:t,options:e}=Wt(this,"select.hide",{dir:this.localize.dir()});await ee(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Fe(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Fe(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return F`
      <div
        part="form-control"
        class=${at({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${at({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?F`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?F`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};wt.styles=[lt,Ki,am];wt.dependencies={"sl-icon":zt,"sl-popup":Ot,"sl-tag":xi};c([Y(".select")],wt.prototype,"popup",2);c([Y(".select__combobox")],wt.prototype,"combobox",2);c([Y(".select__display-input")],wt.prototype,"displayInput",2);c([Y(".select__value-input")],wt.prototype,"valueInput",2);c([Y(".select__listbox")],wt.prototype,"listbox",2);c([ot()],wt.prototype,"hasFocus",2);c([ot()],wt.prototype,"displayLabel",2);c([ot()],wt.prototype,"currentOption",2);c([ot()],wt.prototype,"selectedOptions",2);c([ot()],wt.prototype,"valueHasChanged",2);c([f()],wt.prototype,"name",2);c([ot()],wt.prototype,"value",1);c([f({attribute:"value"})],wt.prototype,"defaultValue",2);c([f({reflect:!0})],wt.prototype,"size",2);c([f()],wt.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],wt.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);c([f({type:Boolean})],wt.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"open",2);c([f({type:Boolean})],wt.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"pill",2);c([f()],wt.prototype,"label",2);c([f({reflect:!0})],wt.prototype,"placement",2);c([f({attribute:"help-text"})],wt.prototype,"helpText",2);c([f({reflect:!0})],wt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],wt.prototype,"required",2);c([f()],wt.prototype,"getTag",2);c([K("disabled",{waitUntilFirstUpdate:!0})],wt.prototype,"handleDisabledChange",1);c([K(["defaultValue","value"],{waitUntilFirstUpdate:!0})],wt.prototype,"handleValueChange",1);c([K("open",{waitUntilFirstUpdate:!0})],wt.prototype,"handleOpenChange",1);Rt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Rt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});wt.define("sl-select");var um=rt`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,hs=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return F`
      <div
        part="base"
        class=${at({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};hs.styles=[lt,um];hs.dependencies={"sl-icon":zt};c([Y(".option__label")],hs.prototype,"defaultSlot",2);c([ot()],hs.prototype,"current",2);c([ot()],hs.prototype,"selected",2);c([ot()],hs.prototype,"hasHover",2);c([f({reflect:!0})],hs.prototype,"value",2);c([f({type:Boolean,reflect:!0})],hs.prototype,"disabled",2);c([K("disabled")],hs.prototype,"handleDisabledChange",1);c([K("selected")],hs.prototype,"handleSelectedChange",1);c([K("value")],hs.prototype,"handleValueChange",1);hs.define("sl-option");var Mr=[],Uu=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=zu();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=Va(this.element);let o=r.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=r.length?o=0:o+n<0?o=r.length-1:o+=n,this.previousFocus=this.currentFocus;const a=r[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const l=[...Il()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Mr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Mr=Mr.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Mr[Mr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Va(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],i=this.tabDirection==="forward"?e:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},hm=rt`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Ll=t=>{var e;const{activeElement:s}=document;s&&t.contains(s)&&((e=document.activeElement)==null||e.blur())},Fs=class extends st{constructor(){super(...arguments),this.hasSlotController=new Be(this,"footer"),this.localize=new $t(this),this.modal=new Uu(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),jr(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Wr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Wt(this,"dialog.denyClose",{dir:this.localize.dir()});ee(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),jr(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ce(this.dialog),ce(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Wt(this,"dialog.show",{dir:this.localize.dir()}),s=Wt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ee(this.panel,e.keyframes,e.options),ee(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Ll(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ce(this.dialog),ce(this.overlay)]);const t=Wt(this,"dialog.hide",{dir:this.localize.dir()}),e=Wt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ee(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ee(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Wr(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fe(this,"sl-after-hide")}render(){return F`
      <div
        part="base"
        class=${at({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${et(this.noHeader?this.label:void 0)}
          aria-labelledby=${et(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":F`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Fs.styles=[lt,hm];Fs.dependencies={"sl-icon-button":he};c([Y(".dialog")],Fs.prototype,"dialog",2);c([Y(".dialog__panel")],Fs.prototype,"panel",2);c([Y(".dialog__overlay")],Fs.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],Fs.prototype,"open",2);c([f({reflect:!0})],Fs.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],Fs.prototype,"noHeader",2);c([K("open",{waitUntilFirstUpdate:!0})],Fs.prototype,"handleOpenChange",1);Rt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Rt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Rt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Rt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Rt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Fs.define("sl-dialog");var pm=rt`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,is=class Li extends st{constructor(){super(...arguments),this.hasSlotController=new Be(this,"icon","suffix"),this.localize=new $t(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,s="100%",i="0";this.countdownAnimation=e.animate([{width:s},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ce(this.base),this.base.hidden=!1;const{keyframes:e,options:s}=Wt(this,"alert.show",{dir:this.localize.dir()});await ee(this.base,e,s),this.emit("sl-after-show")}else{Ll(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ce(this.base);const{keyframes:e,options:s}=Wt(this,"alert.hide",{dir:this.localize.dir()});await ee(this.base,e,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fe(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Li.toastStack.parentElement===null&&document.body.append(Li.toastStack),Li.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Li.toastStack.removeChild(this),e(),Li.toastStack.querySelector("sl-alert")===null&&Li.toastStack.remove()},{once:!0})})}render(){return F`
      <div
        part="base"
        class=${at({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?F`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?F`
              <div
                class=${at({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};is.styles=[lt,pm];is.dependencies={"sl-icon-button":he};c([Y('[part~="base"]')],is.prototype,"base",2);c([Y(".alert__countdown-elapsed")],is.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],is.prototype,"open",2);c([f({type:Boolean,reflect:!0})],is.prototype,"closable",2);c([f({reflect:!0})],is.prototype,"variant",2);c([f({type:Number})],is.prototype,"duration",2);c([f({type:String,reflect:!0})],is.prototype,"countdown",2);c([ot()],is.prototype,"remainingTime",2);c([K("open",{waitUntilFirstUpdate:!0})],is.prototype,"handleOpenChange",1);c([K("duration")],is.prototype,"handleDurationChange",1);var fm=is;Rt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Rt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});fm.define("sl-alert");var gm=rt`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,mm=rt`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,pe=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Be(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return F`
      <div
        class=${at({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${at({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${et(this.value)}
            .indeterminate=${Hi(this.indeterminate)}
            .checked=${Hi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?F`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?F`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};pe.styles=[lt,Ki,mm];pe.dependencies={"sl-icon":zt};c([Y('input[type="checkbox"]')],pe.prototype,"input",2);c([ot()],pe.prototype,"hasFocus",2);c([f()],pe.prototype,"title",2);c([f()],pe.prototype,"name",2);c([f()],pe.prototype,"value",2);c([f({reflect:!0})],pe.prototype,"size",2);c([f({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],pe.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],pe.prototype,"indeterminate",2);c([xr("checked")],pe.prototype,"defaultChecked",2);c([f({reflect:!0})],pe.prototype,"form",2);c([f({type:Boolean,reflect:!0})],pe.prototype,"required",2);c([f({attribute:"help-text"})],pe.prototype,"helpText",2);c([K("disabled",{waitUntilFirstUpdate:!0})],pe.prototype,"handleDisabledChange",1);c([K(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],pe.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pc(t,e,s){return t?e(t):s?.(t)}var se=class Ha extends st{constructor(){super(...arguments),this.localize=new $t(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ce(this.childrenContainer);const{keyframes:e,options:s}=Wt(this,"tree-item.collapse",{dir:this.localize.dir()});await ee(this.childrenContainer,cn(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Ha.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ce(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=Wt(this,"tree-item.expand",{dir:this.localize.dir()});await ee(this.childrenContainer,cn(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Ha.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return F`
      <div
        part="base"
        class="${at({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${at({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${Pc(this.loading,()=>F` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Pc(this.selectable,()=>F`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Hi(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};se.styles=[lt,gm];se.dependencies={"sl-checkbox":pe,"sl-icon":zt,"sl-spinner":xo};c([ot()],se.prototype,"indeterminate",2);c([ot()],se.prototype,"isLeaf",2);c([ot()],se.prototype,"loading",2);c([ot()],se.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],se.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],se.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],se.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],se.prototype,"lazy",2);c([Y("slot:not([name])")],se.prototype,"defaultSlot",2);c([Y("slot[name=children]")],se.prototype,"childrenSlot",2);c([Y(".tree-item__item")],se.prototype,"itemElement",2);c([Y(".tree-item__children")],se.prototype,"childrenContainer",2);c([Y(".tree-item__expand-button slot")],se.prototype,"expandButtonSlot",2);c([K("loading",{waitUntilFirstUpdate:!0})],se.prototype,"handleLoadingChange",1);c([K("disabled")],se.prototype,"handleDisabledChange",1);c([K("selected")],se.prototype,"handleSelectedChange",1);c([K("expanded",{waitUntilFirstUpdate:!0})],se.prototype,"handleExpandedChange",1);c([K("expanded",{waitUntilFirstUpdate:!0})],se.prototype,"handleExpandAnimation",1);c([K("lazy",{waitUntilFirstUpdate:!0})],se.prototype,"handleLazyChange",1);var Kr=se;Rt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Rt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Kr.define("sl-tree-item");var bm=rt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,be=class extends st{constructor(){super(),this.localize=new $t(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Rc(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Rc(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ce(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=Wt(this,"tooltip.show",{dir:this.localize.dir()});await ee(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ce(this.body);const{keyframes:s,options:i}=Wt(this,"tooltip.hide",{dir:this.localize.dir()});await ee(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fe(this,"sl-after-hide")}render(){return F`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${at({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};be.styles=[lt,bm];be.dependencies={"sl-popup":Ot};c([Y("slot:not([name])")],be.prototype,"defaultSlot",2);c([Y(".tooltip__body")],be.prototype,"body",2);c([Y("sl-popup")],be.prototype,"popup",2);c([f()],be.prototype,"content",2);c([f()],be.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],be.prototype,"disabled",2);c([f({type:Number})],be.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],be.prototype,"open",2);c([f({type:Number})],be.prototype,"skidding",2);c([f()],be.prototype,"trigger",2);c([f({type:Boolean})],be.prototype,"hoist",2);c([K("open",{waitUntilFirstUpdate:!0})],be.prototype,"handleOpenChange",1);c([K(["content","distance","hoist","placement","skidding"])],be.prototype,"handleOptionsChange",1);c([K("disabled")],be.prototype,"handleDisabledChange",1);Rt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Rt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});be.define("sl-tooltip");var ym=rt`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function ae(t,e,s){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>s?i(s):i(t)}function Dc(t,e=!1){function s(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(d=>d.selected),l=n.every(d=>!d.selected&&!d.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function i(o){const n=o.parentElement;Kr.isTreeItem(n)&&(s(n),i(n))}function r(o){for(const n of o.getChildrenItems())n.selected=e?o.selected||n.selected:!n.disabled&&o.selected,r(n);e&&s(o)}r(t),i(t)}var qi=class extends st{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new $t(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(s===null?t.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(Kr.isTreeItem),i=[...e.removedNodes].filter(Kr.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Kr.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Dc(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(i=>!e.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>{var o;return["input","textarea"].includes((o=r?.tagName)==null?void 0:o.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(l=>l.matches(":focus")),o=e[r],n=l=>{const d=e[ae(l,0,e.length-1)];this.focusItem(d)},a=l=>{o.expanded=l};t.key==="ArrowDown"?n(r+1):t.key==="ArrowUp"?n(r-1):s&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(r+1):a(!0):s&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(r-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),i=t.composedPath().some(r=>{var o;return(o=r?.classList)==null?void 0:o.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Dc(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var i;if(s.disabled)return!1;const r=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(s),!e.has(s)})}render(){return F`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};qi.styles=[lt,ym];c([Y("slot:not([name])")],qi.prototype,"defaultSlot",2);c([Y("slot[name=expand-icon]")],qi.prototype,"expandedIconSlot",2);c([Y("slot[name=collapse-icon]")],qi.prototype,"collapsedIconSlot",2);c([f()],qi.prototype,"selection",2);c([K("selection")],qi.prototype,"handleSelectionChange",1);qi.define("sl-tree");var vm=rt`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Ol=class extends st{render(){return F` <slot></slot> `}};Ol.styles=[lt,vm];Ol.define("sl-visually-hidden");var _m=rt`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,wm=0,ko=class extends st{constructor(){super(...arguments),this.attrId=++wm,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return F`
      <slot
        part="base"
        class=${at({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};ko.styles=[lt,_m];c([f({reflect:!0})],ko.prototype,"name",2);c([f({type:Boolean,reflect:!0})],ko.prototype,"active",2);c([K("active")],ko.prototype,"handleActiveChange",1);ko.define("sl-tab-panel");xi.define("sl-tag");var xm=rt`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,km=0,ws=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.attrId=++km,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,F`
      <div
        part="base"
        class=${at({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?F`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ws.styles=[lt,xm];ws.dependencies={"sl-icon-button":he};c([Y(".tab")],ws.prototype,"tab",2);c([f({reflect:!0})],ws.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],ws.prototype,"active",2);c([f({type:Boolean,reflect:!0})],ws.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],ws.prototype,"disabled",2);c([f({type:Number,reflect:!0})],ws.prototype,"tabIndex",2);c([K("active")],ws.prototype,"handleActiveChange",1);c([K("disabled")],ws.prototype,"handleDisabledChange",1);ws.define("sl-tab");var Cm=rt`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Sm=rt`
  :host {
    display: contents;
  }
`,Co=class extends st{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return F` <slot @slotchange=${this.handleSlotChange}></slot> `}};Co.styles=[lt,Sm];c([f({type:Boolean,reflect:!0})],Co.prototype,"disabled",2);c([K("disabled",{waitUntilFirstUpdate:!0})],Co.prototype,"handleDisabledChange",1);var Se=class extends st{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new $t(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const s=e.filter(({target:i})=>{if(i===this)return!0;if(i.closest("sl-tab-group")!==this)return!1;const r=i.tagName.toLowerCase();return r==="sl-tab"||r==="sl-tab-panel"});if(s.length!==0){if(s.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(i=>i.attributeName==="active")){const r=s.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);r&&this.setActiveTab(r)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,i)=>{var r;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if(r?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&Ba(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=si({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Ba(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(s=this.tabs[r]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;r+=i}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return F`
      <div
        part="base"
        class=${at({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?F`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${at({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?F`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${at({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Se.styles=[lt,Cm];Se.dependencies={"sl-icon-button":he,"sl-resize-observer":Co};c([Y(".tab-group")],Se.prototype,"tabGroup",2);c([Y(".tab-group__body")],Se.prototype,"body",2);c([Y(".tab-group__nav")],Se.prototype,"nav",2);c([Y(".tab-group__indicator")],Se.prototype,"indicator",2);c([ot()],Se.prototype,"hasScrollControls",2);c([ot()],Se.prototype,"shouldHideScrollStartButton",2);c([ot()],Se.prototype,"shouldHideScrollEndButton",2);c([f()],Se.prototype,"placement",2);c([f()],Se.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],Se.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],Se.prototype,"fixedScrollControls",2);c([yo({passive:!0})],Se.prototype,"updateScrollButtons",1);c([K("noScrollControls",{waitUntilFirstUpdate:!0})],Se.prototype,"updateScrollControls",1);c([K("placement",{waitUntilFirstUpdate:!0})],Se.prototype,"syncIndicator",1);Se.define("sl-tab-group");var Em=rt`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Rl=class extends st{constructor(){super(...arguments),this.effect="none"}render(){return F`
      <div
        part="base"
        class=${at({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Rl.styles=[lt,Em];c([f()],Rl.prototype,"effect",2);Rl.define("sl-skeleton");var Am=rt`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function qr(t,e){function s(r){const o=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,d=r.pageX-a,h=r.pageY-l;e?.onMove&&e.onMove(d,h)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&s(e.initialEvent)}var zc=()=>null,rs=class extends st{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new $t(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=zc,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:i,snapThreshold:r,isRtl:o,vertical:n})=>{let a=s,l=Number.POSITIVE_INFINITY;return e.forEach(d=>{let h;if(d.startsWith("repeat(")){const p=t.substring(7,t.length-1),g=p.endsWith("%"),v=Number.parseFloat(p),k=g?i*(v/100):v;h=Math.round((o&&!n?i-s:s)/k)*k}else d.endsWith("%")?h=i*(Number.parseFloat(d)/100):h=Number.parseFloat(d);o&&!n&&(h=i-h);const u=Math.abs(s-h);u<=r&&u<l&&(a=h,l=u)}),a}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=zc}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),qr(this,{onMove:(s,i)=>{var r;let o=this.vertical?i:s;this.primary==="end"&&(o=this.size-o),o=(r=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?r:o,this.position=ae(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=ae(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?s&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${i}`:s&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${r}`,this.style[e]="",F`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${et(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};rs.styles=[lt,Am];c([Y(".divider")],rs.prototype,"divider",2);c([f({type:Number,reflect:!0})],rs.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],rs.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],rs.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],rs.prototype,"disabled",2);c([f()],rs.prototype,"primary",2);c([f({reflect:!0})],rs.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],rs.prototype,"snapThreshold",2);c([K("position")],rs.prototype,"handlePositionChange",1);c([K("positionInPixels")],rs.prototype,"handlePositionInPixelsChange",1);c([K("vertical")],rs.prototype,"handleVerticalChange",1);rs.define("sl-split-panel");Co.define("sl-resize-observer");var $m=rt`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Qt=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this),this.hasSlotController=new Be(this,"help-text","label"),this.localize=new $t(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",o=e*t;if(r){const n=`${e-o}px + ${t} * ${i}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${i} / 2))`}else{const n=`${o}px - ${t} * ${i}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return F`
      <div
        part="form-control"
        class=${at({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${at({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${et(this.name)}
              ?disabled=${this.disabled}
              min=${et(this.min)}
              max=${et(this.max)}
              step=${et(this.step)}
              .value=${Hi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?F`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Qt.styles=[lt,Ki,$m];c([Y(".range__control")],Qt.prototype,"input",2);c([Y(".range__tooltip")],Qt.prototype,"output",2);c([ot()],Qt.prototype,"hasFocus",2);c([ot()],Qt.prototype,"hasTooltip",2);c([f()],Qt.prototype,"title",2);c([f()],Qt.prototype,"name",2);c([f({type:Number})],Qt.prototype,"value",2);c([f()],Qt.prototype,"label",2);c([f({attribute:"help-text"})],Qt.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);c([f({type:Number})],Qt.prototype,"min",2);c([f({type:Number})],Qt.prototype,"max",2);c([f({type:Number})],Qt.prototype,"step",2);c([f()],Qt.prototype,"tooltip",2);c([f({attribute:!1})],Qt.prototype,"tooltipFormatter",2);c([f({reflect:!0})],Qt.prototype,"form",2);c([xr()],Qt.prototype,"defaultValue",2);c([yo({passive:!0})],Qt.prototype,"handleThumbDragStart",1);c([K("value",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleValueChange",1);c([K("disabled",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleDisabledChange",1);c([K("hasTooltip",{waitUntilFirstUpdate:!0})],Qt.prototype,"syncRange",1);Qt.define("sl-range");var Tm=rt`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hu="important",Im=" !"+Hu,He=vo(class extends _o{constructor(t){if(super(t),t.type!==Ls.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const o=typeof r=="string"&&r.endsWith(Im);i.includes("-")||o?s.setProperty(i,o?r.slice(0,-11):r,o?Hu:""):s[i]=r}}return Ze}});var Re=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:i,width:r}=this.rating.getBoundingClientRect(),o=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-s)/r*this.max,this.precision);return ae(o,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,F`
      <div
        part="base"
        class=${at({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(i=>s>i&&s<i+1?F`
                <span
                  class=${at({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${He({clipPath:t?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${Zo(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${He({clipPath:t?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${Zo(this.getSymbol(i+1))}
                  </div>
                </span>
              `:F`
              <span
                class=${at({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
              >
                ${Zo(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Re.styles=[lt,Tm];Re.dependencies={"sl-icon":zt};c([Y(".rating")],Re.prototype,"rating",2);c([ot()],Re.prototype,"hoverValue",2);c([ot()],Re.prototype,"isHovering",2);c([f()],Re.prototype,"label",2);c([f({type:Number})],Re.prototype,"value",2);c([f({type:Number})],Re.prototype,"max",2);c([f({type:Number})],Re.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],Re.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);c([f()],Re.prototype,"getSymbol",2);c([yo({passive:!0})],Re.prototype,"handleTouchMove",1);c([K("hoverValue")],Re.prototype,"handleHoverValueChange",1);c([K("isHovering")],Re.prototype,"handleIsHoveringChange",1);Re.define("sl-rating");var Lm=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Gi=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:i,value:r}=Lm.find(o=>Math.abs(s)<o.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;i==="minute"?o=Do("second"):i==="hour"?o=Do("minute"):i==="day"?o=Do("hour"):o=Do("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return F` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([ot()],Gi.prototype,"isoTime",2);c([ot()],Gi.prototype,"relativeTime",2);c([f()],Gi.prototype,"date",2);c([f()],Gi.prototype,"format",2);c([f()],Gi.prototype,"numeric",2);c([f({type:Boolean})],Gi.prototype,"sync",2);function Do(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}Gi.define("sl-relative-time");var Om=rt`
  ${Bu}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,xs=class extends st{constructor(){super(...arguments),this.hasSlotController=new Be(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Hr`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${at({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${et(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};xs.styles=[lt,Om];c([Y(".button")],xs.prototype,"input",2);c([Y(".hidden-input")],xs.prototype,"hiddenInput",2);c([ot()],xs.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],xs.prototype,"checked",2);c([f()],xs.prototype,"value",2);c([f({type:Boolean,reflect:!0})],xs.prototype,"disabled",2);c([f({reflect:!0})],xs.prototype,"size",2);c([f({type:Boolean,reflect:!0})],xs.prototype,"pill",2);c([K("disabled",{waitUntilFirstUpdate:!0})],xs.prototype,"handleDisabledChange",1);xs.define("sl-radio-button");var Rm=rt`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Ee=class extends st{constructor(){super(...arguments),this.formControlController=new ii(this),this.hasSlotController=new Be(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?em:t?tm:Pn}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,s.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(a=>!a.disabled),i=(e=s.find(a=>a.checked))!=null?e:s[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,o=this.value;let n=s.indexOf(i)+r;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].setAttribute("tabindex","0"),s[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(o=>o.checked),i=e.find(o=>!o.disabled),r=s||i;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=F`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return F`
      <fieldset
        part="form-control"
        class=${at({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?F`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Ee.styles=[lt,Ki,Rm];Ee.dependencies={"sl-button-group":Wi};c([Y("slot:not([name])")],Ee.prototype,"defaultSlot",2);c([Y(".radio-group__validation-input")],Ee.prototype,"validationInput",2);c([ot()],Ee.prototype,"hasButtonGroup",2);c([ot()],Ee.prototype,"errorMessage",2);c([ot()],Ee.prototype,"defaultValue",2);c([f()],Ee.prototype,"label",2);c([f({attribute:"help-text"})],Ee.prototype,"helpText",2);c([f()],Ee.prototype,"name",2);c([f({reflect:!0})],Ee.prototype,"value",2);c([f({reflect:!0})],Ee.prototype,"size",2);c([f({reflect:!0})],Ee.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ee.prototype,"required",2);c([K("size",{waitUntilFirstUpdate:!0})],Ee.prototype,"handleSizeChange",1);c([K("value")],Ee.prototype,"handleValueChange",1);Ee.define("sl-radio-group");var Mm=rt`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,kr=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return F`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};kr.styles=[lt,Mm];c([Y(".progress-ring__indicator")],kr.prototype,"indicator",2);c([ot()],kr.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],kr.prototype,"value",2);c([f()],kr.prototype,"label",2);kr.define("sl-progress-ring");var Pm=rt`
  :host {
    display: inline-block;
  }
`;let ju=null;class Wu{}Wu.render=function(t,e){ju(t,e)};self.QrCreator=Wu;(function(t){function e(a,l,d,h){var u={},p=t(d,l);p.u(a),p.J(),h=h||0;var g=p.h(),v=p.h()+2*h;return u.text=a,u.level=l,u.version=d,u.O=v,u.a=function(k,I){return k-=h,I-=h,0>k||k>=g||0>I||I>=g?!1:p.a(k,I)},u}function s(a,l,d,h,u,p,g,v,k,I){function _(w,A,m,C,R,T,B){w?(a.lineTo(A+T,m+B),a.arcTo(A,m,C,R,p)):a.lineTo(A,m)}g?a.moveTo(l+p,d):a.moveTo(l,d),_(v,h,d,h,u,-p,0),_(k,h,u,l,u,0,-p),_(I,l,u,l,d,p,0),_(g,l,d,h,d,0,p)}function i(a,l,d,h,u,p,g,v,k,I){function _(w,A,m,C){a.moveTo(w+m,A),a.lineTo(w,A),a.lineTo(w,A+C),a.arcTo(w,A,w+m,A,p)}g&&_(l,d,p,p),v&&_(h,d,-p,p),k&&_(h,u,-p,-p),I&&_(l,u,p,-p)}function r(a,l){var d=l.fill;if(typeof d=="string")a.fillStyle=d;else{var h=d.type,u=d.colorStops;if(d=d.position.map(g=>Math.round(g*l.size)),h==="linear-gradient")var p=a.createLinearGradient.apply(a,d);else if(h==="radial-gradient")p=a.createRadialGradient.apply(a,d);else throw Error("Unsupported fill");u.forEach(([g,v])=>{p.addColorStop(g,v)}),a.fillStyle=p}}function o(a,l){t:{var d=l.text,h=l.v,u=l.N,p=l.K,g=l.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var v=e(d,h,u,g);break t}catch{}v=void 0}if(!v)return null;for(d=a.getContext("2d"),l.background&&(d.fillStyle=l.background,d.fillRect(l.left,l.top,l.size,l.size)),h=v.O,p=l.size/h,d.beginPath(),g=0;g<h;g+=1)for(u=0;u<h;u+=1){var k=d,I=l.left+u*p,_=l.top+g*p,w=g,A=u,m=v.a,C=I+p,R=_+p,T=w-1,B=w+1,D=A-1,V=A+1,dt=Math.floor(Math.min(.5,Math.max(0,l.R))*p),it=m(w,A),ft=m(T,D),_t=m(T,A);T=m(T,V);var kt=m(w,V);V=m(B,V),A=m(B,A),B=m(B,D),w=m(w,D),I=Math.round(I),_=Math.round(_),C=Math.round(C),R=Math.round(R),it?s(k,I,_,C,R,dt,!_t&&!w,!_t&&!kt,!A&&!kt,!A&&!w):i(k,I,_,C,R,dt,_t&&w&&ft,_t&&kt&&T,A&&kt&&V,A&&w&&B)}return r(d,l),d.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};ju=function(a,l){var d={};Object.assign(d,n,a),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,l instanceof HTMLCanvasElement?((l.width!==d.size||l.height!==d.size)&&(l.width=d.size,l.height=d.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,d)):(a=document.createElement("canvas"),a.width=d.size,a.height=d.size,d=o(a,d),l.appendChild(d))}})(function(){function t(l){var d=s.s(l);return{S:function(){return 4},b:function(){return d.length},write:function(h){for(var u=0;u<d.length;u+=1)h.put(d[u],8)}}}function e(){var l=[],d=0,h={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var g=0;g<p;g+=1)h.m((u>>>p-g-1&1)==1)},f:function(){return d},m:function(u){var p=Math.floor(d/8);l.length<=p&&l.push(0),u&&(l[p]|=128>>>d%8),d+=1}};return h}function s(l,d){function h(w,A){for(var m=-1;7>=m;m+=1)if(!(-1>=w+m||v<=w+m))for(var C=-1;7>=C;C+=1)-1>=A+C||v<=A+C||(g[w+m][A+C]=0<=m&&6>=m&&(C==0||C==6)||0<=C&&6>=C&&(m==0||m==6)||2<=m&&4>=m&&2<=C&&4>=C)}function u(w,A){for(var m=v=4*l+17,C=Array(m),R=0;R<m;R+=1){C[R]=Array(m);for(var T=0;T<m;T+=1)C[R][T]=null}for(g=C,h(0,0),h(v-7,0),h(0,v-7),m=o.G(l),C=0;C<m.length;C+=1)for(R=0;R<m.length;R+=1){T=m[C];var B=m[R];if(g[T][B]==null)for(var D=-2;2>=D;D+=1)for(var V=-2;2>=V;V+=1)g[T+D][B+V]=D==-2||D==2||V==-2||V==2||D==0&&V==0}for(m=8;m<v-8;m+=1)g[m][6]==null&&(g[m][6]=m%2==0);for(m=8;m<v-8;m+=1)g[6][m]==null&&(g[6][m]=m%2==0);for(m=o.w(p<<3|A),C=0;15>C;C+=1)R=!w&&(m>>C&1)==1,g[6>C?C:8>C?C+1:v-15+C][8]=R,g[8][8>C?v-C-1:9>C?15-C:14-C]=R;if(g[v-8][8]=!w,7<=l){for(m=o.A(l),C=0;18>C;C+=1)R=!w&&(m>>C&1)==1,g[Math.floor(C/3)][C%3+v-8-3]=R;for(C=0;18>C;C+=1)R=!w&&(m>>C&1)==1,g[C%3+v-8-3][Math.floor(C/3)]=R}if(k==null){for(w=a.I(l,p),m=e(),C=0;C<I.length;C+=1)R=I[C],m.put(4,4),m.put(R.b(),o.f(4,l)),R.write(m);for(C=R=0;C<w.length;C+=1)R+=w[C].j;if(m.f()>8*R)throw Error("code length overflow. ("+m.f()+">"+8*R+")");for(m.f()+4<=8*R&&m.put(0,4);m.f()%8!=0;)m.m(!1);for(;!(m.f()>=8*R)&&(m.put(236,8),!(m.f()>=8*R));)m.put(17,8);var dt=0;for(R=C=0,T=Array(w.length),B=Array(w.length),D=0;D<w.length;D+=1){var it=w[D].j,ft=w[D].o-it;for(C=Math.max(C,it),R=Math.max(R,ft),T[D]=Array(it),V=0;V<T[D].length;V+=1)T[D][V]=255&m.B()[V+dt];for(dt+=it,V=o.C(ft),it=i(T[D],V.b()-1).l(V),B[D]=Array(V.b()-1),V=0;V<B[D].length;V+=1)ft=V+it.b()-B[D].length,B[D][V]=0<=ft?it.c(ft):0}for(V=m=0;V<w.length;V+=1)m+=w[V].o;for(m=Array(m),V=dt=0;V<C;V+=1)for(D=0;D<w.length;D+=1)V<T[D].length&&(m[dt]=T[D][V],dt+=1);for(V=0;V<R;V+=1)for(D=0;D<w.length;D+=1)V<B[D].length&&(m[dt]=B[D][V],dt+=1);k=m}for(w=k,m=-1,C=v-1,R=7,T=0,A=o.F(A),B=v-1;0<B;B-=2)for(B==6&&--B;;){for(D=0;2>D;D+=1)g[C][B-D]==null&&(V=!1,T<w.length&&(V=(w[T]>>>R&1)==1),A(C,B-D)&&(V=!V),g[C][B-D]=V,--R,R==-1&&(T+=1,R=7));if(C+=m,0>C||v<=C){C-=m,m=-m;break}}}var p=r[d],g=null,v=0,k=null,I=[],_={u:function(w){w=t(w),I.push(w),k=null},a:function(w,A){if(0>w||v<=w||0>A||v<=A)throw Error(w+","+A);return g[w][A]},h:function(){return v},J:function(){for(var w=0,A=0,m=0;8>m;m+=1){u(!0,m);var C=o.D(_);(m==0||w>C)&&(w=C,A=m)}u(!1,A)}};return _}function i(l,d){if(typeof l.length>"u")throw Error(l.length+"/"+d);var h=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+d),v=0;v<l.length-p;v+=1)g[v]=l[v+p];return g}(),u={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(u.b()+p.b()-1),v=0;v<u.b();v+=1)for(var k=0;k<p.b();k+=1)g[v+k]^=n.i(n.g(u.c(v))+n.g(p.c(k)));return i(g,0)},l:function(p){if(0>u.b()-p.b())return u;for(var g=n.g(u.c(0))-n.g(p.c(0)),v=Array(u.b()),k=0;k<u.b();k+=1)v[k]=u.c(k);for(k=0;k<p.b();k+=1)v[k]^=n.i(n.g(p.c(k))+g);return i(v,0).l(p)}};return u}s.s=function(l){for(var d=[],h=0;h<l.length;h++){var u=l.charCodeAt(h);128>u?d.push(u):2048>u?d.push(192|u>>6,128|u&63):55296>u||57344<=u?d.push(224|u>>12,128|u>>6&63,128|u&63):(h++,u=65536+((u&1023)<<10|l.charCodeAt(h)&1023),d.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return d};var r={L:1,M:0,Q:3,H:2},o=function(){function l(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(u){for(var p=u<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return u<<12|p},G:function(u){return d[u-1]},F:function(u){switch(u){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=i([1],0),g=0;g<u;g+=1)p=p.multiply(i([1,n.i(g)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),g=0,v=0;v<p;v+=1)for(var k=0;k<p;k+=1){for(var I=0,_=u.a(v,k),w=-1;1>=w;w+=1)if(!(0>v+w||p<=v+w))for(var A=-1;1>=A;A+=1)0>k+A||p<=k+A||(w!=0||A!=0)&&_==u.a(v+w,k+A)&&(I+=1);5<I&&(g+=3+I-5)}for(v=0;v<p-1;v+=1)for(k=0;k<p-1;k+=1)I=0,u.a(v,k)&&(I+=1),u.a(v+1,k)&&(I+=1),u.a(v,k+1)&&(I+=1),u.a(v+1,k+1)&&(I+=1),(I==0||I==4)&&(g+=3);for(v=0;v<p;v+=1)for(k=0;k<p-6;k+=1)u.a(v,k)&&!u.a(v,k+1)&&u.a(v,k+2)&&u.a(v,k+3)&&u.a(v,k+4)&&!u.a(v,k+5)&&u.a(v,k+6)&&(g+=40);for(k=0;k<p;k+=1)for(v=0;v<p-6;v+=1)u.a(v,k)&&!u.a(v+1,k)&&u.a(v+2,k)&&u.a(v+3,k)&&u.a(v+4,k)&&!u.a(v+5,k)&&u.a(v+6,k)&&(g+=40);for(k=I=0;k<p;k+=1)for(v=0;v<p;v+=1)u.a(v,k)&&(I+=1);return g+=Math.abs(100*I/p/p-50)/5*10}};return h}(),n=function(){for(var l=Array(256),d=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)d[l[h]]=h;return{g:function(u){if(1>u)throw Error("glog("+u+")");return d[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}}(),a=function(){function l(u,p){switch(p){case r.L:return d[4*(u-1)];case r.M:return d[4*(u-1)+1];case r.Q:return d[4*(u-1)+2];case r.H:return d[4*(u-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(u,p){var g=l(u,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=g.length/3,p=[];for(var v=0;v<u;v+=1)for(var k=g[3*v],I=g[3*v+1],_=g[3*v+2],w=0;w<k;w+=1){var A=_,m={};m.o=I,m.j=A,p.push(m)}return p}};return h}();return s}());const Dm=QrCreator;var ks=class extends st{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Dm.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return F`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${He({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ks.styles=[lt,Pm];c([Y("canvas")],ks.prototype,"canvas",2);c([f()],ks.prototype,"value",2);c([f()],ks.prototype,"label",2);c([f({type:Number})],ks.prototype,"size",2);c([f()],ks.prototype,"fill",2);c([f()],ks.prototype,"background",2);c([f({type:Number})],ks.prototype,"radius",2);c([f({attribute:"error-correction"})],ks.prototype,"errorCorrection",2);c([K(["background","errorCorrection","fill","radius","size","value"])],ks.prototype,"generate",1);ks.define("sl-qr-code");var zm=rt`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Bs=class extends st{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return F`
      <span
        part="base"
        class=${at({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?F` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Bs.styles=[lt,zm];Bs.dependencies={"sl-icon":zt};c([ot()],Bs.prototype,"checked",2);c([ot()],Bs.prototype,"hasFocus",2);c([f()],Bs.prototype,"value",2);c([f({reflect:!0})],Bs.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Bs.prototype,"disabled",2);c([K("checked")],Bs.prototype,"handleCheckedChange",1);c([K("disabled",{waitUntilFirstUpdate:!0})],Bs.prototype,"handleDisabledChange",1);Bs.define("sl-radio");Ot.define("sl-popup");var Vm=rt`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,So=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return F`
      <div
        part="base"
        class=${at({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${et(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${He({width:`${this.value}%`})}>
          ${this.indeterminate?"":F` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};So.styles=[lt,Vm];c([f({type:Number,reflect:!0})],So.prototype,"value",2);c([f({type:Boolean,reflect:!0})],So.prototype,"indeterminate",2);c([f()],So.prototype,"label",2);So.define("sl-progress-bar");var Nm=rt`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ku=class extends st{render(){return F` <slot part="base" class="menu-label"></slot> `}};Ku.styles=[lt,Nm];Ku.define("sl-menu-label");var Fm=rt`
  :host {
    display: contents;
  }
`,Us=class extends st{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return F` <slot></slot> `}};Us.styles=[lt,Fm];c([f({reflect:!0})],Us.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],Us.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],Us.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Us.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],Us.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],Us.prototype,"disabled",2);c([K("disabled")],Us.prototype,"handleDisabledChange",1);c([K("attr",{waitUntilFirstUpdate:!0}),K("attr-old-value",{waitUntilFirstUpdate:!0}),K("char-data",{waitUntilFirstUpdate:!0}),K("char-data-old-value",{waitUntilFirstUpdate:!0}),K("childList",{waitUntilFirstUpdate:!0})],Us.prototype,"handleChange",1);Us.define("sl-mutation-observer");var Bm=rt`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Yi=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.preventDefault(),qr(this.base,{onMove:i=>{this.position=parseFloat(ae(i/e*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=ae(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return F`
      <div
        part="base"
        id="image-comparer"
        class=${at({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${He({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${He({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Yi.styles=[lt,Bm];Yi.scopedElement={"sl-icon":zt};c([Y(".image-comparer")],Yi.prototype,"base",2);c([Y(".image-comparer__handle")],Yi.prototype,"handle",2);c([f({type:Number,reflect:!0})],Yi.prototype,"position",2);c([K("position",{waitUntilFirstUpdate:!0})],Yi.prototype,"handlePositionChange",1);Yi.define("sl-image-comparer");var Um=rt`
  :host {
    display: block;
  }
`,la=new Map;function Hm(t,e="cors"){const s=la.get(t);if(s!==void 0)return Promise.resolve(s);const i=fetch(t,{mode:e}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return la.set(t,o),o});return la.set(t,i),i}var Cr=class extends st{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await Hm(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return F`<slot></slot>`}};Cr.styles=[lt,Um];c([f()],Cr.prototype,"src",2);c([f()],Cr.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],Cr.prototype,"allowScripts",2);c([K("src")],Cr.prototype,"handleSrcChange",1);Cr.define("sl-include");zt.define("sl-icon");var Dn=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),r=s[i]+this.unit,o=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};c([f({type:Number})],Dn.prototype,"value",2);c([f()],Dn.prototype,"unit",2);c([f()],Dn.prototype,"display",2);Dn.define("sl-format-bytes");var os=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return F`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};c([f()],os.prototype,"date",2);c([f()],os.prototype,"weekday",2);c([f()],os.prototype,"era",2);c([f()],os.prototype,"year",2);c([f()],os.prototype,"month",2);c([f()],os.prototype,"day",2);c([f()],os.prototype,"hour",2);c([f()],os.prototype,"minute",2);c([f()],os.prototype,"second",2);c([f({attribute:"time-zone-name"})],os.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],os.prototype,"timeZone",2);c([f({attribute:"hour-format"})],os.prototype,"hourFormat",2);os.define("sl-format-date");var Cs=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],Cs.prototype,"value",2);c([f()],Cs.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],Cs.prototype,"noGrouping",2);c([f()],Cs.prototype,"currency",2);c([f({attribute:"currency-display"})],Cs.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],Cs.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],Cs.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],Cs.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],Cs.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],Cs.prototype,"maximumSignificantDigits",2);Cs.define("sl-format-number");var jm=rt`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,zn=class extends st{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};zn.styles=[lt,jm];c([f({type:Boolean,reflect:!0})],zn.prototype,"vertical",2);c([K("vertical")],zn.prototype,"handleVerticalChange",1);zn.define("sl-divider");var Wm=rt`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Vc(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ns=class extends st{constructor(){super(...arguments),this.hasSlotController=new Be(this,"footer"),this.localize=new $t(this),this.modal=new Uu(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),jr(this)))}disconnectedCallback(){super.disconnectedCallback(),Wr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Wt(this,"drawer.denyClose",{dir:this.localize.dir()});ee(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),jr(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ce(this.drawer),ce(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Wt(this,`drawer.show${Vc(this.placement)}`,{dir:this.localize.dir()}),s=Wt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ee(this.panel,e.keyframes,e.options),ee(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Ll(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Wr(this)),await Promise.all([ce(this.drawer),ce(this.overlay)]);const t=Wt(this,`drawer.hide${Vc(this.placement)}`,{dir:this.localize.dir()}),e=Wt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ee(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ee(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),jr(this)),this.open&&this.contained&&(this.modal.deactivate(),Wr(this))}async show(){if(!this.open)return this.open=!0,Fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fe(this,"sl-after-hide")}render(){return F`
      <div
        part="base"
        class=${at({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${et(this.noHeader?this.label:void 0)}
          aria-labelledby=${et(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":F`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ns.styles=[lt,Wm];ns.dependencies={"sl-icon-button":he};c([Y(".drawer")],ns.prototype,"drawer",2);c([Y(".drawer__panel")],ns.prototype,"panel",2);c([Y(".drawer__overlay")],ns.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],ns.prototype,"open",2);c([f({reflect:!0})],ns.prototype,"label",2);c([f({reflect:!0})],ns.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],ns.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],ns.prototype,"noHeader",2);c([K("open",{waitUntilFirstUpdate:!0})],ns.prototype,"handleOpenChange",1);c([K("contained",{waitUntilFirstUpdate:!0})],ns.prototype,"handleNoModalChange",1);Rt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Rt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Rt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Rt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Rt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ns.define("sl-drawer");var Km=rt`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,ye=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";s?[r,o]=this.from.trim().split("."):i&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(r):null;n?i?t=n.getAttribute(o)||"":s?t=n[o]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),r=t==="success"?this.successIcon:this.errorIcon,o=Wt(this,"copy.in",{dir:"ltr"}),n=Wt(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return F`
      <sl-tooltip
        class=${at({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};ye.styles=[lt,Km];ye.dependencies={"sl-icon":zt,"sl-tooltip":be};c([Y('slot[name="copy-icon"]')],ye.prototype,"copyIcon",2);c([Y('slot[name="success-icon"]')],ye.prototype,"successIcon",2);c([Y('slot[name="error-icon"]')],ye.prototype,"errorIcon",2);c([Y("sl-tooltip")],ye.prototype,"tooltip",2);c([ot()],ye.prototype,"isCopying",2);c([ot()],ye.prototype,"status",2);c([f()],ye.prototype,"value",2);c([f()],ye.prototype,"from",2);c([f({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);c([f({attribute:"copy-label"})],ye.prototype,"copyLabel",2);c([f({attribute:"success-label"})],ye.prototype,"successLabel",2);c([f({attribute:"error-label"})],ye.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],ye.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],ye.prototype,"tooltipPlacement",2);c([f({type:Boolean})],ye.prototype,"hoist",2);Rt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Rt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});ye.define("sl-copy-button");pe.define("sl-checkbox");var qm=rt`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function xe(t,e){Gm(t)&&(t="100%");const s=Ym(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function zo(t){return Math.min(1,Math.max(0,t))}function Gm(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Ym(t){return typeof t=="string"&&t.indexOf("%")!==-1}function qu(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Vo(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Di(t){return t.length===1?"0"+t:String(t)}function Xm(t,e,s){return{r:xe(t,255)*255,g:xe(e,255)*255,b:xe(s,255)*255}}function Nc(t,e,s){t=xe(t,255),e=xe(e,255),s=xe(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0,n=0;const a=(i+r)/2;if(i===r)n=0,o=0;else{const l=i-r;switch(n=a>.5?l/(2-i-r):l/(i+r),i){case t:o=(e-s)/l+(e<s?6:0);break;case e:o=(s-t)/l+2;break;case s:o=(t-e)/l+4;break}o/=6}return{h:o,s:n,l:a}}function ca(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function Jm(t,e,s){let i,r,o;if(t=xe(t,360),e=xe(e,100),s=xe(s,100),e===0)r=s,o=s,i=s;else{const n=s<.5?s*(1+e):s+e-s*e,a=2*s-n;i=ca(a,n,t+1/3),r=ca(a,n,t),o=ca(a,n,t-1/3)}return{r:i*255,g:r*255,b:o*255}}function Fc(t,e,s){t=xe(t,255),e=xe(e,255),s=xe(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0;const n=i,a=i-r,l=i===0?0:a/i;if(i===r)o=0;else{switch(i){case t:o=(e-s)/a+(e<s?6:0);break;case e:o=(s-t)/a+2;break;case s:o=(t-e)/a+4;break}o/=6}return{h:o,s:l,v:n}}function Qm(t,e,s){t=xe(t,360)*6,e=xe(e,100),s=xe(s,100);const i=Math.floor(t),r=t-i,o=s*(1-e),n=s*(1-r*e),a=s*(1-(1-r)*e),l=i%6,d=[s,n,o,o,a,s][l],h=[a,s,s,n,o,o][l],u=[o,o,a,s,s,n][l];return{r:d*255,g:h*255,b:u*255}}function Bc(t,e,s,i){const r=[Di(Math.round(t).toString(16)),Di(Math.round(e).toString(16)),Di(Math.round(s).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Zm(t,e,s,i,r){const o=[Di(Math.round(t).toString(16)),Di(Math.round(e).toString(16)),Di(Math.round(s).toString(16)),Di(eb(i))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function tb(t,e,s,i){const r=t/100,o=e/100,n=s/100,a=i/100,l=255*(1-r)*(1-a),d=255*(1-o)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:d,b:h}}function Uc(t,e,s){let i=1-t/255,r=1-e/255,o=1-s/255,n=Math.min(i,r,o);return n===1?(i=0,r=0,o=0):(i=(i-n)/(1-n)*100,r=(r-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(o),k:Math.round(n)}}function eb(t){return Math.round(parseFloat(t)*255).toString(16)}function Hc(t){return Ye(t)/255}function Ye(t){return parseInt(t,16)}function sb(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const ja={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ib(t){let e={r:0,g:0,b:0},s=1,i=null,r=null,o=null,n=!1,a=!1;return typeof t=="string"&&(t=nb(t)),typeof t=="object"&&(Ge(t.r)&&Ge(t.g)&&Ge(t.b)?(e=Xm(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Ge(t.h)&&Ge(t.s)&&Ge(t.v)?(i=Vo(t.s),r=Vo(t.v),e=Qm(t.h,i,r),n=!0,a="hsv"):Ge(t.h)&&Ge(t.s)&&Ge(t.l)?(i=Vo(t.s),o=Vo(t.l),e=Jm(t.h,i,o),n=!0,a="hsl"):Ge(t.c)&&Ge(t.m)&&Ge(t.y)&&Ge(t.k)&&(e=tb(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=qu(s),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const rb="[-\\+]?\\d+%?",ob="[-\\+]?\\d*\\.\\d+%?",gi="(?:"+ob+")|(?:"+rb+")",da="[\\s|\\(]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")\\s*\\)?",No="[\\s|\\(]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")\\s*\\)?",as={CSS_UNIT:new RegExp(gi),rgb:new RegExp("rgb"+da),rgba:new RegExp("rgba"+No),hsl:new RegExp("hsl"+da),hsla:new RegExp("hsla"+No),hsv:new RegExp("hsv"+da),hsva:new RegExp("hsva"+No),cmyk:new RegExp("cmyk"+No),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function nb(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(ja[t])t=ja[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=as.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=as.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=as.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=as.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=as.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=as.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=as.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=as.hex8.exec(t),s?{r:Ye(s[1]),g:Ye(s[2]),b:Ye(s[3]),a:Hc(s[4]),format:e?"name":"hex8"}:(s=as.hex6.exec(t),s?{r:Ye(s[1]),g:Ye(s[2]),b:Ye(s[3]),format:e?"name":"hex"}:(s=as.hex4.exec(t),s?{r:Ye(s[1]+s[1]),g:Ye(s[2]+s[2]),b:Ye(s[3]+s[3]),a:Hc(s[4]+s[4]),format:e?"name":"hex8"}:(s=as.hex3.exec(t),s?{r:Ye(s[1]+s[1]),g:Ye(s[2]+s[2]),b:Ye(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function Ge(t){return typeof t=="number"?!Number.isNaN(t):as.CSS_UNIT.test(t)}class te{constructor(e="",s={}){if(e instanceof te)return e;typeof e=="number"&&(e=sb(e)),this.originalInput=e;const i=ib(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,i,r;const o=e.r/255,n=e.g/255,a=e.b/255;return o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*s+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=qu(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Fc(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Fc(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${i}%, ${r}%)`:`hsva(${s}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=Nc(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Nc(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${i}%, ${r}%)`:`hsla(${s}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Bc(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Zm(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${i})`:`rgba(${e}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(xe(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(xe(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Uc(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:i,k:r}=Uc(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Bc(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(ja))if(e===i)return s;return!1}toString(e){const s=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!s&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new te(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=zo(s.l),new te(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new te(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=zo(s.l),new te(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=zo(s.s),new te(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=zo(s.s),new te(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),i=(s.h+e)%360;return s.h=i<0?360+i:i,new te(s)}mix(e,s=50){const i=this.toRgb(),r=new te(e).toRgb(),o=s/100,n={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return new te(n)}analogous(e=6,s=30){const i=this.toHsl(),r=360/s,o=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(new te(i));return o}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new te(e)}monochromatic(e=6){const s=this.toHsv(),{h:i}=s,{s:r}=s;let{v:o}=s;const n=[],a=1/e;for(;e--;)n.push(new te({h:i,s:r,v:o})),o=(o+a)%1;return n}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new te({h:(s+72)%360,s:e.s,l:e.l}),new te({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),i=new te(e).toRgb(),r=s.a+i.a*(1-s.a);return new te({r:(s.r*s.a+i.r*i.a*(1-s.a))/r,g:(s.g*s.a+i.g*i.a*(1-s.a))/r,b:(s.b*s.a+i.b*i.a*(1-s.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:i}=s,r=[this],o=360/e;for(let n=1;n<e;n++)r.push(new te({h:(i+n*o)%360,s:s.s,l:s.l}));return r}equals(e){const s=new te(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var jc="EyeDropper"in window,xt=class extends st{constructor(){super(),this.formControlController=new ii(this),this.isSafeValue=!1,this.localize=new $t(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),qr(e,{onMove:n=>{this.alpha=ae(n/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),qr(e,{onMove:n=>{this.hue=ae(n/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let o=this.value,n=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,qr(e,{onMove:(a,l)=>{this.saturation=ae(a/i*100,0,100),this.brightness=ae(100-l/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=ae(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=ae(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=ae(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=ae(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=ae(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=ae(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=ae(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=ae(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new te(t);if(!e.isValid)return null;const s=e.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},r=e.toRgb(),o=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!jc)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,i=100){const r=new te(`hsva(${t}, ${e}%, ${s}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),i=F`
      <div
        part="base"
        class=${at({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?F`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${He({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${at({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${He({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${et(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${He({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${et(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?F`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${He({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${He({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${et(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${He({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":F`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${jc?F`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?F`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(r=>{const o=this.parseColor(r);return o?F`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${et(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${He({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:F`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${at({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${He({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};xt.styles=[lt,qm];xt.dependencies={"sl-button-group":Wi,"sl-button":Mt,"sl-dropdown":Ce,"sl-icon":zt,"sl-input":yt,"sl-visually-hidden":Ol};c([Y('[part~="base"]')],xt.prototype,"base",2);c([Y('[part~="input"]')],xt.prototype,"input",2);c([Y(".color-dropdown")],xt.prototype,"dropdown",2);c([Y('[part~="preview"]')],xt.prototype,"previewButton",2);c([Y('[part~="trigger"]')],xt.prototype,"trigger",2);c([ot()],xt.prototype,"hasFocus",2);c([ot()],xt.prototype,"isDraggingGridHandle",2);c([ot()],xt.prototype,"isEmpty",2);c([ot()],xt.prototype,"inputValue",2);c([ot()],xt.prototype,"hue",2);c([ot()],xt.prototype,"saturation",2);c([ot()],xt.prototype,"brightness",2);c([ot()],xt.prototype,"alpha",2);c([f()],xt.prototype,"value",2);c([xr()],xt.prototype,"defaultValue",2);c([f()],xt.prototype,"label",2);c([f()],xt.prototype,"format",2);c([f({type:Boolean,reflect:!0})],xt.prototype,"inline",2);c([f({reflect:!0})],xt.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],xt.prototype,"noFormatToggle",2);c([f()],xt.prototype,"name",2);c([f({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);c([f({type:Boolean})],xt.prototype,"hoist",2);c([f({type:Boolean})],xt.prototype,"opacity",2);c([f({type:Boolean})],xt.prototype,"uppercase",2);c([f()],xt.prototype,"swatches",2);c([f({reflect:!0})],xt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],xt.prototype,"required",2);c([yo({passive:!1})],xt.prototype,"handleTouchMove",1);c([K("format",{waitUntilFirstUpdate:!0})],xt.prototype,"handleFormatChange",1);c([K("opacity",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpacityChange",1);c([K("value")],xt.prototype,"handleValueChange",1);xt.define("sl-color-picker");var ab=rt`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Gu=class extends st{constructor(){super(...arguments),this.hasSlotController=new Be(this,"footer","header","image")}render(){return F`
      <div
        part="base"
        class=${at({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Gu.styles=[lt,ab];Gu.define("sl-card");var lb=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},cb=rt`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*db(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ub(t,e,s=1){const i=e===void 0?0:t;e??=t;for(let r=i;s>0?r<e:e<r;r+=s)yield r}var ie=class extends st{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new lb(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new $t(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||s!==r)&&(t.scrollTo({left:i,top:r,behavior:Na()?"auto":"smooth"}),await Fe(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:i}=this,r=i?t/s:(t-e)/s+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",o=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),o&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const a of e){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const s=e.find(a=>a.isIntersecting);if(!s)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,o=i.indexOf(s.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const a=Number(s.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),i=t.slice(0,e);s.reverse().forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(t.length-o-1)),this.prepend(n)}),i.forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,i)=>{(i+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:i}=this,r=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!r.length)return;const n=i?(t+r.length)%r.length:ae(t,0,r.length-s);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=ae(t+(i?s:0)+(a?s-1:0),0,o.length-1),d=o[l];this.scrollToSlide(d,Na()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,i=s.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.left-i.left,n=r.top-i.top;o||n?(this.pendingSlideChange=!0,s.scrollTo({left:o+s.scrollLeft,top:n+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return F`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${at({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?F`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${at({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${at({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?F`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${db(ub(s),a=>{const l=a===i;return F`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${at({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      id="tab-${a+1}"
                      aria-controls="slide-${a+1}"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${l?this.localize.term("slideNum",a+1):this.localize.term("goToSlide",a+1,s)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ie.styles=[lt,cb];ie.dependencies={"sl-icon":zt};c([f({type:Boolean,reflect:!0})],ie.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],ie.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],ie.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],ie.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],ie.prototype,"slidesPerMove",2);c([f()],ie.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ie.prototype,"mouseDragging",2);c([Y(".carousel__slides")],ie.prototype,"scrollContainer",2);c([Y(".carousel__pagination")],ie.prototype,"paginationContainer",2);c([ot()],ie.prototype,"activeSlide",2);c([ot()],ie.prototype,"scrolling",2);c([ot()],ie.prototype,"dragging",2);c([yo({passive:!0})],ie.prototype,"handleScroll",1);c([K("loop",{waitUntilFirstUpdate:!0}),K("slidesPerPage",{waitUntilFirstUpdate:!0})],ie.prototype,"initializeSlides",1);c([K("activeSlide")],ie.prototype,"handleSlideChange",1);c([K("slidesPerMove")],ie.prototype,"updateSlidesSnap",1);c([K("autoplay")],ie.prototype,"handleAutoplayChange",1);ie.define("sl-carousel");var hb=(t,e)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...i)},e)}},Wc=(t,e,s)=>{const i=t[e];t[e]=function(...r){i.call(this,...r),s.call(this,i,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,i=o=>{for(const n of o.changedTouches)e.add(n.identifier)},r=o=>{for(const n of o.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Wc(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=hb(()=>{e.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),s.set(this,a)}),Wc(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=s.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();var pb=rt`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Yu=class extends st{connectedCallback(){super.connectedCallback()}render(){return F` <slot></slot> `}};Yu.styles=[lt,pb];Yu.define("sl-carousel-item");var fb=rt`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,ki=class extends st{constructor(){super(...arguments),this.hasSlotController=new Be(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return F`
      <div
        part="base"
        class=${at({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?F`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${et(this.target?this.target:void 0)}"
                rel=${et(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?F`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?F`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};ki.styles=[lt,fb];c([Y("slot:not([name])")],ki.prototype,"defaultSlot",2);c([ot()],ki.prototype,"renderType",2);c([f()],ki.prototype,"href",2);c([f()],ki.prototype,"target",2);c([f()],ki.prototype,"rel",2);c([K("href",{waitUntilFirstUpdate:!0})],ki.prototype,"hrefChanged",1);ki.define("sl-breadcrumb-item");var gb=rt`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Hs=class extends st{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=F`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=F``;return this.initials?e=F`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=F`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,F`
      <div
        part="base"
        class=${at({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Hs.styles=[lt,gb];Hs.dependencies={"sl-icon":zt};c([ot()],Hs.prototype,"hasError",2);c([f()],Hs.prototype,"image",2);c([f()],Hs.prototype,"label",2);c([f()],Hs.prototype,"initials",2);c([f()],Hs.prototype,"loading",2);c([f({reflect:!0})],Hs.prototype,"shape",2);c([K("image")],Hs.prototype,"handleImageChange",1);Hs.define("sl-avatar");var mb=rt`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Sr=class extends st{constructor(){super(...arguments),this.localize=new $t(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,s)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),F`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Sr.styles=[lt,mb];Sr.dependencies={"sl-icon":zt};c([Y("slot")],Sr.prototype,"defaultSlot",2);c([Y('slot[name="separator"]')],Sr.prototype,"separatorSlot",2);c([f()],Sr.prototype,"label",2);Sr.define("sl-breadcrumb");var bb=rt`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Ss=class extends st{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:s}=this.animatedImage;t.width=e,t.height=s,t.getContext("2d").drawImage(this.animatedImage,0,0,e,s),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return F`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?F`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Ss.styles=[lt,bb];Ss.dependencies={"sl-icon":zt};c([Y(".animated-image__animated")],Ss.prototype,"animatedImage",2);c([ot()],Ss.prototype,"frozenFrame",2);c([ot()],Ss.prototype,"isLoaded",2);c([f()],Ss.prototype,"src",2);c([f()],Ss.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],Ss.prototype,"play",2);c([K("play",{waitUntilFirstUpdate:!0})],Ss.prototype,"handlePlayChange",1);c([K("src")],Ss.prototype,"handleSrcChange",1);Ss.define("sl-animated-image");var yb=rt`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Eo=class extends st{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return F`
      <span
        part="base"
        class=${at({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Eo.styles=[lt,yb];c([f({reflect:!0})],Eo.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],Eo.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],Eo.prototype,"pulse",2);Eo.define("sl-badge");const vb=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],_b=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],wb=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],xb=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],kb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Sb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Eb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ab=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$b=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Tb=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Ib=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Lb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ob=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Rb=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Mb=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Pb=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Db=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],zb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Vb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Nb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Fb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bb=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ub=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Hb=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],jb=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Wb=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Kb=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],qb=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Gb=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Yb=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Xb=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Jb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qb=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zb=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],t0=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],e0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],s0=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],i0=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],r0=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],o0=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],n0=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],a0=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],l0=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],c0=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],d0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],u0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],h0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],p0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],f0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],g0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],m0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],b0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],y0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],v0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],_0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],w0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],x0=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],k0=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],C0=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],S0=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],E0=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],A0=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$0=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],T0=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],I0=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],L0=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],O0=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],R0=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],M0=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],P0=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],D0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],z0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],V0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],N0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],F0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],B0=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],U0=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],H0=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],j0=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],W0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],K0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],q0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],G0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Y0=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],X0=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],J0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Q0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Z0=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ty=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ey=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],sy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],iy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ry=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],oy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ny=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ay=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],ly=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},cy=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Ob,backInLeft:Rb,backInRight:Mb,backInUp:Pb,backOutDown:Db,backOutLeft:zb,backOutRight:Vb,backOutUp:Nb,bounce:vb,bounceIn:Fb,bounceInDown:Bb,bounceInLeft:Ub,bounceInRight:Hb,bounceInUp:jb,bounceOut:Wb,bounceOutDown:Kb,bounceOutLeft:qb,bounceOutRight:Gb,bounceOutUp:Yb,easings:Xu,fadeIn:Xb,fadeInBottomLeft:Jb,fadeInBottomRight:Qb,fadeInDown:Zb,fadeInDownBig:t0,fadeInLeft:e0,fadeInLeftBig:s0,fadeInRight:i0,fadeInRightBig:r0,fadeInTopLeft:o0,fadeInTopRight:n0,fadeInUp:a0,fadeInUpBig:l0,fadeOut:c0,fadeOutBottomLeft:d0,fadeOutBottomRight:u0,fadeOutDown:h0,fadeOutDownBig:p0,fadeOutLeft:f0,fadeOutLeftBig:g0,fadeOutRight:m0,fadeOutRightBig:b0,fadeOutTopLeft:y0,fadeOutTopRight:v0,fadeOutUp:_0,fadeOutUpBig:w0,flash:_b,flip:x0,flipInX:k0,flipInY:C0,flipOutX:S0,flipOutY:E0,headShake:wb,heartBeat:xb,hinge:Y0,jackInTheBox:X0,jello:kb,lightSpeedInLeft:A0,lightSpeedInRight:$0,lightSpeedOutLeft:T0,lightSpeedOutRight:I0,pulse:Cb,rollIn:J0,rollOut:Q0,rotateIn:L0,rotateInDownLeft:O0,rotateInDownRight:R0,rotateInUpLeft:M0,rotateInUpRight:P0,rotateOut:D0,rotateOutDownLeft:z0,rotateOutDownRight:V0,rotateOutUpLeft:N0,rotateOutUpRight:F0,rubberBand:Sb,shake:Eb,shakeX:Ab,shakeY:$b,slideInDown:B0,slideInLeft:U0,slideInRight:H0,slideInUp:j0,slideOutDown:W0,slideOutLeft:K0,slideOutRight:q0,slideOutUp:G0,swing:Tb,tada:Ib,wobble:Lb,zoomIn:Z0,zoomInDown:ty,zoomInLeft:ey,zoomInRight:sy,zoomInUp:iy,zoomOut:ry,zoomOutDown:oy,zoomOutLeft:ny,zoomOutRight:ay,zoomOutUp:ly},Symbol.toStringTag,{value:"Module"}));var dy=rt`
  :host {
    display: contents;
  }
`,ve=class extends st{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=Xu[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:cy[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!i?!1:(this.destroyAnimation(),this.animation=o.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return F` <slot @slotchange=${this.handleSlotChange}></slot> `}};ve.styles=[lt,dy];c([If("slot")],ve.prototype,"defaultSlot",2);c([f()],ve.prototype,"name",2);c([f({type:Boolean,reflect:!0})],ve.prototype,"play",2);c([f({type:Number})],ve.prototype,"delay",2);c([f()],ve.prototype,"direction",2);c([f({type:Number})],ve.prototype,"duration",2);c([f()],ve.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],ve.prototype,"endDelay",2);c([f()],ve.prototype,"fill",2);c([f({type:Number})],ve.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],ve.prototype,"iterationStart",2);c([f({attribute:!1})],ve.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],ve.prototype,"playbackRate",2);c([K(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ve.prototype,"handleAnimationChange",1);c([K("play")],ve.prototype,"handlePlayChange",1);c([K("playbackRate")],ve.prototype,"handlePlaybackRateChange",1);ve.define("sl-animation");Da("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/");/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ml(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const Ft={},cr=[],Ps=()=>{},uy=()=>!1,Vn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pl=t=>t.startsWith("onUpdate:"),Le=Object.assign,Dl=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},hy=Object.prototype.hasOwnProperty,Lt=(t,e)=>hy.call(t,e),pt=Array.isArray,dr=t=>Nn(t)==="[object Map]",Ju=t=>Nn(t)==="[object Set]",bt=t=>typeof t=="function",ne=t=>typeof t=="string",ri=t=>typeof t=="symbol",Kt=t=>t!==null&&typeof t=="object",Qu=t=>(Kt(t)||bt(t))&&bt(t.then)&&bt(t.catch),Zu=Object.prototype.toString,Nn=t=>Zu.call(t),py=t=>Nn(t).slice(8,-1),th=t=>Nn(t)==="[object Object]",zl=t=>ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gr=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},fy=/-(\w)/g,_i=Fn(t=>t.replace(fy,(e,s)=>s?s.toUpperCase():"")),gy=/\B([A-Z])/g,Xi=Fn(t=>t.replace(gy,"-$1").toLowerCase()),eh=Fn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ua=Fn(t=>t?`on${eh(t)}`:""),mi=(t,e)=>!Object.is(t,e),ha=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},Wa=(t,e,s,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:s})},my=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kc;const Bn=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Un(t){if(pt(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],r=ne(i)?_y(i):Un(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(ne(t)||Kt(t))return t}const by=/;(?![^(]*\))/g,yy=/:([^]+)/,vy=/\/\*[^]*?\*\//g;function _y(t){const e={};return t.replace(vy,"").split(by).forEach(s=>{if(s){const i=s.split(yy);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mr(t){let e="";if(ne(t))e=t;else if(pt(t))for(let s=0;s<t.length;s++){const i=mr(t[s]);i&&(e+=i+" ")}else if(Kt(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}function wy(t){if(!t)return null;let{class:e,style:s}=t;return e&&!ne(e)&&(t.class=mr(e)),s&&(t.style=Un(s)),t}const xy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ky=Ml(xy);function sh(t){return!!t||t===""}const ih=t=>!!(t&&t.__v_isRef===!0),mt=t=>ne(t)?t:t==null?"":pt(t)||Kt(t)&&(t.toString===Zu||!bt(t.toString))?ih(t)?mt(t.value):JSON.stringify(t,rh,2):String(t),rh=(t,e)=>ih(e)?rh(t,e.value):dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,r],o)=>(s[pa(i,o)+" =>"]=r,s),{})}:Ju(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>pa(s))}:ri(e)?pa(e):Kt(e)&&!pt(e)&&!th(e)?String(e):e,pa=(t,e="")=>{var s;return ri(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class oh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!e&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=$e;try{return $e=this,e()}finally{$e=s}}}on(){++this._on===1&&(this.prevScope=$e,$e=this)}off(){this._on>0&&--this._on===0&&($e=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vl(t){return new oh(t)}function nh(){return $e}function Cy(t,e=!1){$e&&$e.cleanups.push(t)}let Vt;const fa=new WeakSet;class ah{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fa.has(this)&&(fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qc(this),dh(this);const e=Vt,s=ms;Vt=this,ms=!0;try{return this.fn()}finally{uh(this),Vt=e,ms=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,qc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ka(this)&&this.run()}get dirty(){return Ka(this)}}let lh=0,Yr,Xr;function ch(t,e=!1){if(t.flags|=8,e){t.next=Xr,Xr=t;return}t.next=Yr,Yr=t}function Nl(){lh++}function Fl(){if(--lh>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;Yr;){let e=Yr;for(Yr=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=s}}if(t)throw t}function dh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function uh(t){let e,s=t.depsTail,i=s;for(;i;){const r=i.prevDep;i.version===-1?(i===s&&(s=r),Bl(i),Sy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=s}function Ka(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===no)||(t.globalVersion=no,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ka(t))))return;t.flags|=2;const e=t.dep,s=Vt,i=ms;Vt=t,ms=!0;try{dh(t);const r=t.fn(t._value);(e.version===0||mi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Vt=s,ms=i,uh(t),t.flags&=-3}}function Bl(t,e=!1){const{dep:s,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),s.subs===t&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)Bl(o,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function Sy(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let ms=!0;const ph=[];function Zs(){ph.push(ms),ms=!1}function ti(){const t=ph.pop();ms=t===void 0?!0:t}function qc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=Vt;Vt=void 0;try{e()}finally{Vt=s}}}let no=0;class Ey{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Vt||!ms||Vt===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Vt)s=this.activeLink=new Ey(Vt,this),Vt.deps?(s.prevDep=Vt.depsTail,Vt.depsTail.nextDep=s,Vt.depsTail=s):Vt.deps=Vt.depsTail=s,fh(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=Vt.depsTail,s.nextDep=void 0,Vt.depsTail.nextDep=s,Vt.depsTail=s,Vt.deps===s&&(Vt.deps=i)}return s}trigger(e){this.version++,no++,this.notify(e)}notify(e){Nl();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Fl()}}}function fh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fh(i)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const un=new WeakMap,zi=Symbol(""),qa=Symbol(""),ao=Symbol("");function Te(t,e,s){if(ms&&Vt){let i=un.get(t);i||un.set(t,i=new Map);let r=i.get(s);r||(i.set(s,r=new Ul),r.map=i,r.key=s),r.track()}}function Gs(t,e,s,i,r,o){const n=un.get(t);if(!n){no++;return}const a=l=>{l&&l.trigger()};if(Nl(),e==="clear")n.forEach(a);else{const l=pt(t),d=l&&zl(s);if(l&&s==="length"){const h=Number(i);n.forEach((u,p)=>{(p==="length"||p===ao||!ri(p)&&p>=h)&&a(u)})}else switch((s!==void 0||n.has(void 0))&&a(n.get(s)),d&&a(n.get(ao)),e){case"add":l?d&&a(n.get("length")):(a(n.get(zi)),dr(t)&&a(n.get(qa)));break;case"delete":l||(a(n.get(zi)),dr(t)&&a(n.get(qa)));break;case"set":dr(t)&&a(n.get(zi));break}}Fl()}function Ay(t,e){const s=un.get(t);return s&&s.get(e)}function Zi(t){const e=At(t);return e===t?e:(Te(e,"iterate",ao),ds(t)?e:e.map(we))}function Hn(t){return Te(t=At(t),"iterate",ao),t}const $y={__proto__:null,[Symbol.iterator](){return ga(this,Symbol.iterator,we)},concat(...t){return Zi(this).concat(...t.map(e=>pt(e)?Zi(e):e))},entries(){return ga(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return Ws(this,"every",t,e,void 0,arguments)},filter(t,e){return Ws(this,"filter",t,e,s=>s.map(we),arguments)},find(t,e){return Ws(this,"find",t,e,we,arguments)},findIndex(t,e){return Ws(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ws(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return Ws(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ws(this,"forEach",t,e,void 0,arguments)},includes(...t){return ma(this,"includes",t)},indexOf(...t){return ma(this,"indexOf",t)},join(t){return Zi(this).join(t)},lastIndexOf(...t){return ma(this,"lastIndexOf",t)},map(t,e){return Ws(this,"map",t,e,void 0,arguments)},pop(){return Pr(this,"pop")},push(...t){return Pr(this,"push",t)},reduce(t,...e){return Gc(this,"reduce",t,e)},reduceRight(t,...e){return Gc(this,"reduceRight",t,e)},shift(){return Pr(this,"shift")},some(t,e){return Ws(this,"some",t,e,void 0,arguments)},splice(...t){return Pr(this,"splice",t)},toReversed(){return Zi(this).toReversed()},toSorted(t){return Zi(this).toSorted(t)},toSpliced(...t){return Zi(this).toSpliced(...t)},unshift(...t){return Pr(this,"unshift",t)},values(){return ga(this,"values",we)}};function ga(t,e,s){const i=Hn(t),r=i[e]();return i!==t&&!ds(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=s(o.value)),o}),r}const Ty=Array.prototype;function Ws(t,e,s,i,r,o){const n=Hn(t),a=n!==t&&!ds(t),l=n[e];if(l!==Ty[e]){const u=l.apply(t,o);return a?we(u):u}let d=s;n!==t&&(a?d=function(u,p){return s.call(this,we(u),p,t)}:s.length>2&&(d=function(u,p){return s.call(this,u,p,t)}));const h=l.call(n,d,i);return a&&r?r(h):h}function Gc(t,e,s,i){const r=Hn(t);let o=s;return r!==t&&(ds(t)?s.length>3&&(o=function(n,a,l){return s.call(this,n,a,l,t)}):o=function(n,a,l){return s.call(this,n,we(a),l,t)}),r[e](o,...i)}function ma(t,e,s){const i=At(t);Te(i,"iterate",ao);const r=i[e](...s);return(r===-1||r===!1)&&jn(s[0])?(s[0]=At(s[0]),i[e](...s)):r}function Pr(t,e,s=[]){Zs(),Nl();const i=At(t)[e].apply(t,s);return Fl(),ti(),i}const Iy=Ml("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ri));function Ly(t){ri(t)||(t=String(t));const e=At(this);return Te(e,"has",t),e.hasOwnProperty(t)}class mh{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,i){if(s==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return o;if(s==="__v_raw")return i===(r?o?By:_h:o?vh:yh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const n=pt(e);if(!r){let l;if(n&&(l=$y[s]))return l;if(s==="hasOwnProperty")return Ly}const a=Reflect.get(e,s,Jt(e)?e:i);return(ri(s)?gh.has(s):Iy(s))||(r||Te(e,"get",s),o)?a:Jt(a)?n&&zl(s)?a:a.value:Kt(a)?r?wh(a):Ao(a):a}}class bh extends mh{constructor(e=!1){super(!1,e)}set(e,s,i,r){let o=e[s];if(!this._isShallow){const l=wi(o);if(!ds(i)&&!wi(i)&&(o=At(o),i=At(i)),!pt(e)&&Jt(o)&&!Jt(i))return l?!1:(o.value=i,!0)}const n=pt(e)&&zl(s)?Number(s)<e.length:Lt(e,s),a=Reflect.set(e,s,i,Jt(e)?e:r);return e===At(r)&&(n?mi(i,o)&&Gs(e,"set",s,i):Gs(e,"add",s,i)),a}deleteProperty(e,s){const i=Lt(e,s);e[s];const r=Reflect.deleteProperty(e,s);return r&&i&&Gs(e,"delete",s,void 0),r}has(e,s){const i=Reflect.has(e,s);return(!ri(s)||!gh.has(s))&&Te(e,"has",s),i}ownKeys(e){return Te(e,"iterate",pt(e)?"length":zi),Reflect.ownKeys(e)}}class Oy extends mh{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Ry=new bh,My=new Oy,Py=new bh(!0);const Ga=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function Dy(t,e,s){return function(...i){const r=this.__v_raw,o=At(r),n=dr(o),a=t==="entries"||t===Symbol.iterator&&n,l=t==="keys"&&n,d=r[t](...i),h=s?Ga:e?hn:we;return!e&&Te(o,"iterate",l?qa:zi),{next(){const{value:u,done:p}=d.next();return p?{value:u,done:p}:{value:a?[h(u[0]),h(u[1])]:h(u),done:p}},[Symbol.iterator](){return this}}}}function Bo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zy(t,e){const s={get(r){const o=this.__v_raw,n=At(o),a=At(r);t||(mi(r,a)&&Te(n,"get",r),Te(n,"get",a));const{has:l}=Fo(n),d=e?Ga:t?hn:we;if(l.call(n,r))return d(o.get(r));if(l.call(n,a))return d(o.get(a));o!==n&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Te(At(r),"iterate",zi),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,n=At(o),a=At(r);return t||(mi(r,a)&&Te(n,"has",r),Te(n,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const n=this,a=n.__v_raw,l=At(a),d=e?Ga:t?hn:we;return!t&&Te(l,"iterate",zi),a.forEach((h,u)=>r.call(o,d(h),d(u),n))}};return Le(s,t?{add:Bo("add"),set:Bo("set"),delete:Bo("delete"),clear:Bo("clear")}:{add(r){!e&&!ds(r)&&!wi(r)&&(r=At(r));const o=At(this);return Fo(o).has.call(o,r)||(o.add(r),Gs(o,"add",r,r)),this},set(r,o){!e&&!ds(o)&&!wi(o)&&(o=At(o));const n=At(this),{has:a,get:l}=Fo(n);let d=a.call(n,r);d||(r=At(r),d=a.call(n,r));const h=l.call(n,r);return n.set(r,o),d?mi(o,h)&&Gs(n,"set",r,o):Gs(n,"add",r,o),this},delete(r){const o=At(this),{has:n,get:a}=Fo(o);let l=n.call(o,r);l||(r=At(r),l=n.call(o,r)),a&&a.call(o,r);const d=o.delete(r);return l&&Gs(o,"delete",r,void 0),d},clear(){const r=At(this),o=r.size!==0,n=r.clear();return o&&Gs(r,"clear",void 0,void 0),n}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=Dy(r,t,e)}),s}function Hl(t,e){const s=zy(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Lt(s,r)&&r in i?s:i,r,o)}const Vy={get:Hl(!1,!1)},Ny={get:Hl(!1,!0)},Fy={get:Hl(!0,!1)};const yh=new WeakMap,vh=new WeakMap,_h=new WeakMap,By=new WeakMap;function Uy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hy(t){return t.__v_skip||!Object.isExtensible(t)?0:Uy(py(t))}function Ao(t){return wi(t)?t:jl(t,!1,Ry,Vy,yh)}function jy(t){return jl(t,!1,Py,Ny,vh)}function wh(t){return jl(t,!0,My,Fy,_h)}function jl(t,e,s,i,r){if(!Kt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Hy(t);if(o===0)return t;const n=r.get(t);if(n)return n;const a=new Proxy(t,o===2?i:s);return r.set(t,a),a}function Qs(t){return wi(t)?Qs(t.__v_raw):!!(t&&t.__v_isReactive)}function wi(t){return!!(t&&t.__v_isReadonly)}function ds(t){return!!(t&&t.__v_isShallow)}function jn(t){return t?!!t.__v_raw:!1}function At(t){const e=t&&t.__v_raw;return e?At(e):t}function Wl(t){return!Lt(t,"__v_skip")&&Object.isExtensible(t)&&Wa(t,"__v_skip",!0),t}const we=t=>Kt(t)?Ao(t):t,hn=t=>Kt(t)?wh(t):t;function Jt(t){return t?t.__v_isRef===!0:!1}function Ht(t){return xh(t,!1)}function Wy(t){return xh(t,!0)}function xh(t,e){return Jt(t)?t:new Ky(t,e)}class Ky{constructor(e,s){this.dep=new Ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:At(e),this._value=s?e:we(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,i=this.__v_isShallow||ds(e)||wi(e);e=i?e:At(e),mi(e,s)&&(this._rawValue=e,this._value=i?e:we(e),this.dep.trigger())}}function q(t){return Jt(t)?t.value:t}const qy={get:(t,e,s)=>e==="__v_raw"?t:q(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const r=t[e];return Jt(r)&&!Jt(s)?(r.value=s,!0):Reflect.set(t,e,s,i)}};function kh(t){return Qs(t)?t:new Proxy(t,qy)}function Ch(t){const e=pt(t)?new Array(t.length):{};for(const s in t)e[s]=Yy(t,s);return e}class Gy{constructor(e,s,i){this._object=e,this._key=s,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ay(At(this._object),this._key)}}function Yy(t,e,s){const i=t[e];return Jt(i)?i:new Gy(t,e,s)}class Xy{constructor(e,s,i){this.fn=e,this.setter=s,this._value=void 0,this.dep=new Ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=no-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Vt!==this)return ch(this,!0),!0}get value(){const e=this.dep.track();return hh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jy(t,e,s=!1){let i,r;return bt(t)?i=t:(i=t.get,r=t.set),new Xy(i,r,s)}const Uo={},pn=new WeakMap;let Oi;function Qy(t,e=!1,s=Oi){if(s){let i=pn.get(s);i||pn.set(s,i=[]),i.push(t)}}function Zy(t,e,s=Ft){const{immediate:i,deep:r,once:o,scheduler:n,augmentJob:a,call:l}=s,d=m=>r?m:ds(m)||r===!1||r===0?fi(m,1):fi(m);let h,u,p,g,v=!1,k=!1;if(Jt(t)?(u=()=>t.value,v=ds(t)):Qs(t)?(u=()=>d(t),v=!0):pt(t)?(k=!0,v=t.some(m=>Qs(m)||ds(m)),u=()=>t.map(m=>{if(Jt(m))return m.value;if(Qs(m))return d(m);if(bt(m))return l?l(m,2):m()})):bt(t)?e?u=l?()=>l(t,2):t:u=()=>{if(p){Zs();try{p()}finally{ti()}}const m=Oi;Oi=h;try{return l?l(t,3,[g]):t(g)}finally{Oi=m}}:u=Ps,e&&r){const m=u,C=r===!0?1/0:r;u=()=>fi(m(),C)}const I=nh(),_=()=>{h.stop(),I&&I.active&&Dl(I.effects,h)};if(o&&e){const m=e;e=(...C)=>{m(...C),_()}}let w=k?new Array(t.length).fill(Uo):Uo;const A=m=>{if(!(!(h.flags&1)||!h.dirty&&!m))if(e){const C=h.run();if(r||v||(k?C.some((R,T)=>mi(R,w[T])):mi(C,w))){p&&p();const R=Oi;Oi=h;try{const T=[C,w===Uo?void 0:k&&w[0]===Uo?[]:w,g];w=C,l?l(e,3,T):e(...T)}finally{Oi=R}}}else h.run()};return a&&a(A),h=new ah(u),h.scheduler=n?()=>n(A,!1):A,g=m=>Qy(m,!1,h),p=h.onStop=()=>{const m=pn.get(h);if(m){if(l)l(m,4);else for(const C of m)C();pn.delete(h)}},e?i?A(!0):w=h.run():n?n(A.bind(null,!0),!0):h.run(),_.pause=h.pause.bind(h),_.resume=h.resume.bind(h),_.stop=_,_}function fi(t,e=1/0,s){if(e<=0||!Kt(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,Jt(t))fi(t.value,e,s);else if(pt(t))for(let i=0;i<t.length;i++)fi(t[i],e,s);else if(Ju(t)||dr(t))t.forEach(i=>{fi(i,e,s)});else if(th(t)){for(const i in t)fi(t[i],e,s);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&fi(t[i],e,s)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $o(t,e,s,i){try{return i?t(...i):t()}catch(r){Wn(r,e,s)}}function Vs(t,e,s,i){if(bt(t)){const r=$o(t,e,s,i);return r&&Qu(r)&&r.catch(o=>{Wn(o,e,s)}),r}if(pt(t)){const r=[];for(let o=0;o<t.length;o++)r.push(Vs(t[o],e,s,i));return r}}function Wn(t,e,s,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:n}=e&&e.appContext.config||Ft;if(e){let a=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](t,l,d)===!1)return}a=a.parent}if(o){Zs(),$o(o,null,10,[t,l,d]),ti();return}}tv(t,s,r,i,n)}function tv(t,e,s,i=!0,r=!1){if(r)throw t;console.error(t)}const Ve=[];let Is=-1;const ur=[];let ui=null,rr=0;const Sh=Promise.resolve();let fn=null;function Eh(t){const e=fn||Sh;return t?e.then(this?t.bind(this):t):e}function ev(t){let e=Is+1,s=Ve.length;for(;e<s;){const i=e+s>>>1,r=Ve[i],o=lo(r);o<t||o===t&&r.flags&2?e=i+1:s=i}return e}function Kl(t){if(!(t.flags&1)){const e=lo(t),s=Ve[Ve.length-1];!s||!(t.flags&2)&&e>=lo(s)?Ve.push(t):Ve.splice(ev(e),0,t),t.flags|=1,Ah()}}function Ah(){fn||(fn=Sh.then(Th))}function sv(t){pt(t)?ur.push(...t):ui&&t.id===-1?ui.splice(rr+1,0,t):t.flags&1||(ur.push(t),t.flags|=1),Ah()}function Yc(t,e,s=Is+1){for(;s<Ve.length;s++){const i=Ve[s];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ve.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $h(t){if(ur.length){const e=[...new Set(ur)].sort((s,i)=>lo(s)-lo(i));if(ur.length=0,ui){ui.push(...e);return}for(ui=e,rr=0;rr<ui.length;rr++){const s=ui[rr];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ui=null,rr=0}}const lo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Th(t){try{for(Is=0;Is<Ve.length;Is++){const e=Ve[Is];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Is<Ve.length;Is++){const e=Ve[Is];e&&(e.flags&=-2)}Is=-1,Ve.length=0,$h(),fn=null,(Ve.length||ur.length)&&Th()}}let We=null,Ih=null;function gn(t){const e=We;return We=t,Ih=t&&t.type.__scopeId||null,e}function Lh(t,e=We,s){if(!e||t._n)return t;const i=(...r)=>{i._d&&bn(-1);const o=gn(e);let n;try{n=t(...r)}finally{gn(o),i._d&&bn(1)}return n};return i._n=!0,i._c=!0,i._d=!0,i}function Ti(t,e,s,i){const r=t.dirs,o=e&&e.dirs;for(let n=0;n<r.length;n++){const a=r[n];o&&(a.oldValue=o[n].value);let l=a.dir[i];l&&(Zs(),Vs(l,s,8,[t.el,a,t,e]),ti())}}const iv=Symbol("_vte"),rv=t=>t.__isTeleport;function ql(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ql(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ke(t,e){return bt(t)?Le({name:t.name},e,{setup:t}):t}function Oh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Jr(t,e,s,i,r=!1){if(pt(t)){t.forEach((v,k)=>Jr(v,e&&(pt(e)?e[k]:e),s,i,r));return}if(hr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Jr(t,e,s,i.component.subTree);return}const o=i.shapeFlag&4?Zl(i.component):i.el,n=r?null:o,{i:a,r:l}=t,d=e&&e.r,h=a.refs===Ft?a.refs={}:a.refs,u=a.setupState,p=At(u),g=u===Ft?()=>!1:v=>Lt(p,v);if(d!=null&&d!==l&&(ne(d)?(h[d]=null,g(d)&&(u[d]=null)):Jt(d)&&(d.value=null)),bt(l))$o(l,a,12,[n,h]);else{const v=ne(l),k=Jt(l);if(v||k){const I=()=>{if(t.f){const _=v?g(l)?u[l]:h[l]:l.value;r?pt(_)&&Dl(_,o):pt(_)?_.includes(o)||_.push(o):v?(h[l]=[o],g(l)&&(u[l]=h[l])):(l.value=[o],t.k&&(h[t.k]=l.value))}else v?(h[l]=n,g(l)&&(u[l]=n)):k&&(l.value=n,t.k&&(h[t.k]=n))};n?(I.id=-1,Xe(I,s)):I()}}}Bn().requestIdleCallback;Bn().cancelIdleCallback;const hr=t=>!!t.type.__asyncLoader,Rh=t=>t.type.__isKeepAlive;function ov(t,e){Mh(t,"a",e)}function nv(t,e){Mh(t,"da",e)}function Mh(t,e,s=Ne){const i=t.__wdc||(t.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Kn(e,i,s),s){let r=s.parent;for(;r&&r.parent;)Rh(r.parent.vnode)&&av(i,e,s,r),r=r.parent}}function av(t,e,s,i){const r=Kn(e,t,i,!0);Yl(()=>{Dl(i[e],r)},s)}function Kn(t,e,s=Ne,i=!1){if(s){const r=s[t]||(s[t]=[]),o=e.__weh||(e.__weh=(...n)=>{Zs();const a=Lo(s),l=Vs(e,s,t,n);return a(),ti(),l});return i?r.unshift(o):r.push(o),o}}const oi=t=>(e,s=Ne)=>{(!ho||t==="sp")&&Kn(t,(...i)=>e(...i),s)},lv=oi("bm"),Gl=oi("m"),cv=oi("bu"),dv=oi("u"),uv=oi("bum"),Yl=oi("um"),hv=oi("sp"),pv=oi("rtg"),fv=oi("rtc");function gv(t,e=Ne){Kn("ec",t,e)}const mv=Symbol.for("v-ndc");function Ph(t,e,s,i){let r;const o=s,n=pt(t);if(n||ne(t)){const a=n&&Qs(t);let l=!1,d=!1;a&&(l=!ds(t),d=wi(t),t=Hn(t)),r=new Array(t.length);for(let h=0,u=t.length;h<u;h++)r[h]=e(l?d?hn(we(t[h])):we(t[h]):t[h],h,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o)}else if(Kt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const h=a[l];r[l]=e(t[h],h,l,o)}}else r=[];return r}function bv(t,e,s={},i,r){if(We.ce||We.parent&&hr(We.parent)&&We.parent.ce)return gt(),Rs(Ie,null,[Ut("slot",s,i)],64);let o=t[e];o&&o._c&&(o._d=!1),gt();const n=o&&Dh(o(s)),a=s.key||n&&n.key,l=Rs(Ie,{key:(a&&!ri(a)?a:`_${e}`)+(!n&&i?"_fb":"")},n||[],n&&t._===1?64:-2);return o&&o._c&&(o._d=!0),l}function Dh(t){return t.some(e=>uo(e)?!(e.type===ei||e.type===Ie&&!Dh(e.children)):!0)?t:null}const Ya=t=>t?ip(t)?Zl(t):Ya(t.parent):null,Qr=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ya(t.parent),$root:t=>Ya(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>{Kl(t.update)}),$nextTick:t=>t.n||(t.n=Eh.bind(t.proxy)),$watch:t=>Fv.bind(t)}),ba=(t,e)=>t!==Ft&&!t.__isScriptSetup&&Lt(t,e),yv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:i,data:r,props:o,accessCache:n,type:a,appContext:l}=t;let d;if(e[0]!=="$"){const g=n[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return r[e];case 4:return s[e];case 3:return o[e]}else{if(ba(i,e))return n[e]=1,i[e];if(r!==Ft&&Lt(r,e))return n[e]=2,r[e];if((d=t.propsOptions[0])&&Lt(d,e))return n[e]=3,o[e];if(s!==Ft&&Lt(s,e))return n[e]=4,s[e];Xa&&(n[e]=0)}}const h=Qr[e];let u,p;if(h)return e==="$attrs"&&Te(t.attrs,"get",""),h(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(s!==Ft&&Lt(s,e))return n[e]=4,s[e];if(p=l.config.globalProperties,Lt(p,e))return p[e]},set({_:t},e,s){const{data:i,setupState:r,ctx:o}=t;return ba(r,e)?(r[e]=s,!0):i!==Ft&&Lt(i,e)?(i[e]=s,!0):Lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:r,propsOptions:o}},n){let a;return!!s[n]||t!==Ft&&Lt(t,n)||ba(e,n)||(a=o[0])&&Lt(a,n)||Lt(i,n)||Lt(Qr,n)||Lt(r.config.globalProperties,n)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:Lt(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function Xc(t){return pt(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Xa=!0;function vv(t){const e=Vh(t),s=t.proxy,i=t.ctx;Xa=!1,e.beforeCreate&&Jc(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:n,watch:a,provide:l,inject:d,created:h,beforeMount:u,mounted:p,beforeUpdate:g,updated:v,activated:k,deactivated:I,beforeDestroy:_,beforeUnmount:w,destroyed:A,unmounted:m,render:C,renderTracked:R,renderTriggered:T,errorCaptured:B,serverPrefetch:D,expose:V,inheritAttrs:dt,components:it,directives:ft,filters:_t}=e;if(d&&_v(d,i,null),n)for(const J in n){const ht=n[J];bt(ht)&&(i[J]=ht.bind(s))}if(r){const J=r.call(s,s);Kt(J)&&(t.data=Ao(J))}if(Xa=!0,o)for(const J in o){const ht=o[J],Z=bt(ht)?ht.bind(s,s):bt(ht.get)?ht.get.bind(s,s):Ps,Ct=!bt(ht)&&bt(ht.set)?ht.set.bind(s):Ps,Ue=Nt({get:Z,set:Ct});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:re=>Ue.value=re})}if(a)for(const J in a)zh(a[J],i,s,J);if(l){const J=bt(l)?l.call(s):l;Reflect.ownKeys(J).forEach(ht=>{Ev(ht,J[ht])})}h&&Jc(h,t,"c");function X(J,ht){pt(ht)?ht.forEach(Z=>J(Z.bind(s))):ht&&J(ht.bind(s))}if(X(lv,u),X(Gl,p),X(cv,g),X(dv,v),X(ov,k),X(nv,I),X(gv,B),X(fv,R),X(pv,T),X(uv,w),X(Yl,m),X(hv,D),pt(V))if(V.length){const J=t.exposed||(t.exposed={});V.forEach(ht=>{Object.defineProperty(J,ht,{get:()=>s[ht],set:Z=>s[ht]=Z,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===Ps&&(t.render=C),dt!=null&&(t.inheritAttrs=dt),it&&(t.components=it),ft&&(t.directives=ft),D&&Oh(t)}function _v(t,e,s=Ps){pt(t)&&(t=Ja(t));for(const i in t){const r=t[i];let o;Kt(r)?"default"in r?o=ge(r.from||i,r.default,!0):o=ge(r.from||i):o=ge(r),Jt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:n=>o.value=n}):e[i]=o}}function Jc(t,e,s){Vs(pt(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function zh(t,e,s,i){let r=i.includes(".")?Jh(s,i):()=>s[i];if(ne(t)){const o=e[t];bt(o)&&Ni(r,o)}else if(bt(t))Ni(r,t.bind(s));else if(Kt(t))if(pt(t))t.forEach(o=>zh(o,e,s,i));else{const o=bt(t.handler)?t.handler.bind(s):e[t.handler];bt(o)&&Ni(r,o,t)}}function Vh(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:n}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!s&&!i?l=e:(l={},r.length&&r.forEach(d=>mn(l,d,n,!0)),mn(l,e,n)),Kt(e)&&o.set(e,l),l}function mn(t,e,s,i=!1){const{mixins:r,extends:o}=e;o&&mn(t,o,s,!0),r&&r.forEach(n=>mn(t,n,s,!0));for(const n in e)if(!(i&&n==="expose")){const a=wv[n]||s&&s[n];t[n]=a?a(t[n],e[n]):e[n]}return t}const wv={data:Qc,props:Zc,emits:Zc,methods:Nr,computed:Nr,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Nr,directives:Nr,watch:kv,provide:Qc,inject:xv};function Qc(t,e){return e?t?function(){return Le(bt(t)?t.call(this,this):t,bt(e)?e.call(this,this):e)}:e:t}function xv(t,e){return Nr(Ja(t),Ja(e))}function Ja(t){if(pt(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?Le(Object.create(null),t,e):e}function Zc(t,e){return t?pt(t)&&pt(e)?[...new Set([...t,...e])]:Le(Object.create(null),Xc(t),Xc(e??{})):e}function kv(t,e){if(!t)return e;if(!e)return t;const s=Le(Object.create(null),t);for(const i in e)s[i]=De(t[i],e[i]);return s}function Nh(){return{app:null,config:{isNativeTag:uy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Sv(t,e){return function(i,r=null){bt(i)||(i=Le({},i)),r!=null&&!Kt(r)&&(r=null);const o=Nh(),n=new WeakSet,a=[];let l=!1;const d=o.app={_uid:Cv++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:o1,get config(){return o.config},set config(h){},use(h,...u){return n.has(h)||(h&&bt(h.install)?(n.add(h),h.install(d,...u)):bt(h)&&(n.add(h),h(d,...u))),d},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),d},component(h,u){return u?(o.components[h]=u,d):o.components[h]},directive(h,u){return u?(o.directives[h]=u,d):o.directives[h]},mount(h,u,p){if(!l){const g=d._ceVNode||Ut(i,r);return g.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),t(g,h,p),l=!0,d._container=h,h.__vue_app__=d,Zl(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Vs(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(h,u){return o.provides[h]=u,d},runWithContext(h){const u=Vi;Vi=d;try{return h()}finally{Vi=u}}};return d}}let Vi=null;function Ev(t,e){if(Ne){let s=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===s&&(s=Ne.provides=Object.create(i)),s[t]=e}}function ge(t,e,s=!1){const i=Io();if(i||Vi){let r=Vi?Vi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return s&&bt(e)?e.call(i&&i.proxy):e}}function Av(){return!!(Io()||Vi)}const Fh={},Bh=()=>Object.create(Fh),Uh=t=>Object.getPrototypeOf(t)===Fh;function $v(t,e,s,i=!1){const r={},o=Bh();t.propsDefaults=Object.create(null),Hh(t,e,r,o);for(const n in t.propsOptions[0])n in r||(r[n]=void 0);s?t.props=i?r:jy(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Tv(t,e,s,i){const{props:r,attrs:o,vnode:{patchFlag:n}}=t,a=At(r),[l]=t.propsOptions;let d=!1;if((i||n>0)&&!(n&16)){if(n&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let p=h[u];if(qn(t.emitsOptions,p))continue;const g=e[p];if(l)if(Lt(o,p))g!==o[p]&&(o[p]=g,d=!0);else{const v=_i(p);r[v]=Qa(l,a,v,g,t,!1)}else g!==o[p]&&(o[p]=g,d=!0)}}}else{Hh(t,e,r,o)&&(d=!0);let h;for(const u in a)(!e||!Lt(e,u)&&((h=Xi(u))===u||!Lt(e,h)))&&(l?s&&(s[u]!==void 0||s[h]!==void 0)&&(r[u]=Qa(l,a,u,void 0,t,!0)):delete r[u]);if(o!==a)for(const u in o)(!e||!Lt(e,u))&&(delete o[u],d=!0)}d&&Gs(t.attrs,"set","")}function Hh(t,e,s,i){const[r,o]=t.propsOptions;let n=!1,a;if(e)for(let l in e){if(Gr(l))continue;const d=e[l];let h;r&&Lt(r,h=_i(l))?!o||!o.includes(h)?s[h]=d:(a||(a={}))[h]=d:qn(t.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,n=!0)}if(o){const l=At(s),d=a||Ft;for(let h=0;h<o.length;h++){const u=o[h];s[u]=Qa(r,l,u,d[u],t,!Lt(d,u))}}return n}function Qa(t,e,s,i,r,o){const n=t[s];if(n!=null){const a=Lt(n,"default");if(a&&i===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&bt(l)){const{propsDefaults:d}=r;if(s in d)i=d[s];else{const h=Lo(r);i=d[s]=l.call(null,e),h()}}else i=l;r.ce&&r.ce._setProp(s,i)}n[0]&&(o&&!a?i=!1:n[1]&&(i===""||i===Xi(s))&&(i=!0))}return i}const Iv=new WeakMap;function jh(t,e,s=!1){const i=s?Iv:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,n={},a=[];let l=!1;if(!bt(t)){const h=u=>{l=!0;const[p,g]=jh(u,e,!0);Le(n,p),g&&a.push(...g)};!s&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!o&&!l)return Kt(t)&&i.set(t,cr),cr;if(pt(o))for(let h=0;h<o.length;h++){const u=_i(o[h]);td(u)&&(n[u]=Ft)}else if(o)for(const h in o){const u=_i(h);if(td(u)){const p=o[h],g=n[u]=pt(p)||bt(p)?{type:p}:Le({},p),v=g.type;let k=!1,I=!0;if(pt(v))for(let _=0;_<v.length;++_){const w=v[_],A=bt(w)&&w.name;if(A==="Boolean"){k=!0;break}else A==="String"&&(I=!1)}else k=bt(v)&&v.name==="Boolean";g[0]=k,g[1]=I,(k||Lt(g,"default"))&&a.push(u)}}const d=[n,a];return Kt(t)&&i.set(t,d),d}function td(t){return t[0]!=="$"&&!Gr(t)}const Xl=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Jl=t=>pt(t)?t.map(Os):[Os(t)],Lv=(t,e,s)=>{if(e._n)return e;const i=Lh((...r)=>Jl(e(...r)),s);return i._c=!1,i},Wh=(t,e,s)=>{const i=t._ctx;for(const r in t){if(Xl(r))continue;const o=t[r];if(bt(o))e[r]=Lv(r,o,i);else if(o!=null){const n=Jl(o);e[r]=()=>n}}},Kh=(t,e)=>{const s=Jl(e);t.slots.default=()=>s},qh=(t,e,s)=>{for(const i in e)(s||!Xl(i))&&(t[i]=e[i])},Ov=(t,e,s)=>{const i=t.slots=Bh();if(t.vnode.shapeFlag&32){const r=e.__;r&&Wa(i,"__",r,!0);const o=e._;o?(qh(i,e,s),s&&Wa(i,"_",o,!0)):Wh(e,i)}else e&&Kh(t,e)},Rv=(t,e,s)=>{const{vnode:i,slots:r}=t;let o=!0,n=Ft;if(i.shapeFlag&32){const a=e._;a?s&&a===1?o=!1:qh(r,e,s):(o=!e.$stable,Wh(e,r)),n=e}else e&&(Kh(t,e),n={default:1});if(o)for(const a in r)!Xl(a)&&n[a]==null&&delete r[a]},Xe=qv;function Mv(t){return Pv(t)}function Pv(t,e){const s=Bn();s.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:n,createText:a,createComment:l,setText:d,setElementText:h,parentNode:u,nextSibling:p,setScopeId:g=Ps,insertStaticContent:v}=t,k=(x,S,M,H=null,N=null,U=null,b=void 0,y=null,$=!!S.dynamicChildren)=>{if(x===S)return;x&&!Dr(x,S)&&(H=As(x),re(x,N,U,!0),x=null),S.patchFlag===-2&&($=!1,S.dynamicChildren=null);const{type:O,ref:G,shapeFlag:z}=S;switch(O){case To:I(x,S,M,H);break;case ei:_(x,S,M,H);break;case va:x==null&&w(S,M,H,b);break;case Ie:it(x,S,M,H,N,U,b,y,$);break;default:z&1?C(x,S,M,H,N,U,b,y,$):z&6?ft(x,S,M,H,N,U,b,y,$):(z&64||z&128)&&O.process(x,S,M,H,N,U,b,y,$,fs)}G!=null&&N?Jr(G,x&&x.ref,U,S||x,!S):G==null&&x&&x.ref!=null&&Jr(x.ref,null,U,x,!0)},I=(x,S,M,H)=>{if(x==null)i(S.el=a(S.children),M,H);else{const N=S.el=x.el;S.children!==x.children&&d(N,S.children)}},_=(x,S,M,H)=>{x==null?i(S.el=l(S.children||""),M,H):S.el=x.el},w=(x,S,M,H)=>{[x.el,x.anchor]=v(x.children,S,M,H,x.el,x.anchor)},A=({el:x,anchor:S},M,H)=>{let N;for(;x&&x!==S;)N=p(x),i(x,M,H),x=N;i(S,M,H)},m=({el:x,anchor:S})=>{let M;for(;x&&x!==S;)M=p(x),r(x),x=M;r(S)},C=(x,S,M,H,N,U,b,y,$)=>{S.type==="svg"?b="svg":S.type==="math"&&(b="mathml"),x==null?R(S,M,H,N,U,b,y,$):D(x,S,N,U,b,y,$)},R=(x,S,M,H,N,U,b,y)=>{let $,O;const{props:G,shapeFlag:z,transition:E,dirs:P}=x;if($=x.el=n(x.type,U,G&&G.is,G),z&8?h($,x.children):z&16&&B(x.children,$,null,H,N,ya(x,U),b,y),P&&Ti(x,null,H,"created"),T($,x,x.scopeId,b,H),G){for(const ut in G)ut!=="value"&&!Gr(ut)&&o($,ut,null,G[ut],U,H);"value"in G&&o($,"value",null,G.value,U),(O=G.onVnodeBeforeMount)&&$s(O,H,x)}P&&Ti(x,null,H,"beforeMount");const tt=Dv(N,E);tt&&E.beforeEnter($),i($,S,M),((O=G&&G.onVnodeMounted)||tt||P)&&Xe(()=>{O&&$s(O,H,x),tt&&E.enter($),P&&Ti(x,null,H,"mounted")},N)},T=(x,S,M,H,N)=>{if(M&&g(x,M),H)for(let U=0;U<H.length;U++)g(x,H[U]);if(N){let U=N.subTree;if(S===U||Zh(U.type)&&(U.ssContent===S||U.ssFallback===S)){const b=N.vnode;T(x,b,b.scopeId,b.slotScopeIds,N.parent)}}},B=(x,S,M,H,N,U,b,y,$=0)=>{for(let O=$;O<x.length;O++){const G=x[O]=y?hi(x[O]):Os(x[O]);k(null,G,S,M,H,N,U,b,y)}},D=(x,S,M,H,N,U,b)=>{const y=S.el=x.el;let{patchFlag:$,dynamicChildren:O,dirs:G}=S;$|=x.patchFlag&16;const z=x.props||Ft,E=S.props||Ft;let P;if(M&&Ii(M,!1),(P=E.onVnodeBeforeUpdate)&&$s(P,M,S,x),G&&Ti(S,x,M,"beforeUpdate"),M&&Ii(M,!0),(z.innerHTML&&E.innerHTML==null||z.textContent&&E.textContent==null)&&h(y,""),O?V(x.dynamicChildren,O,y,M,H,ya(S,N),U):b||ht(x,S,y,null,M,H,ya(S,N),U,!1),$>0){if($&16)dt(y,z,E,M,N);else if($&2&&z.class!==E.class&&o(y,"class",null,E.class,N),$&4&&o(y,"style",z.style,E.style,N),$&8){const tt=S.dynamicProps;for(let ut=0;ut<tt.length;ut++){const vt=tt[ut],Zt=z[vt],qt=E[vt];(qt!==Zt||vt==="value")&&o(y,vt,Zt,qt,N,M)}}$&1&&x.children!==S.children&&h(y,S.children)}else!b&&O==null&&dt(y,z,E,M,N);((P=E.onVnodeUpdated)||G)&&Xe(()=>{P&&$s(P,M,S,x),G&&Ti(S,x,M,"updated")},H)},V=(x,S,M,H,N,U,b)=>{for(let y=0;y<S.length;y++){const $=x[y],O=S[y],G=$.el&&($.type===Ie||!Dr($,O)||$.shapeFlag&198)?u($.el):M;k($,O,G,null,H,N,U,b,!0)}},dt=(x,S,M,H,N)=>{if(S!==M){if(S!==Ft)for(const U in S)!Gr(U)&&!(U in M)&&o(x,U,S[U],null,N,H);for(const U in M){if(Gr(U))continue;const b=M[U],y=S[U];b!==y&&U!=="value"&&o(x,U,y,b,N,H)}"value"in M&&o(x,"value",S.value,M.value,N)}},it=(x,S,M,H,N,U,b,y,$)=>{const O=S.el=x?x.el:a(""),G=S.anchor=x?x.anchor:a("");let{patchFlag:z,dynamicChildren:E,slotScopeIds:P}=S;P&&(y=y?y.concat(P):P),x==null?(i(O,M,H),i(G,M,H),B(S.children||[],M,G,N,U,b,y,$)):z>0&&z&64&&E&&x.dynamicChildren?(V(x.dynamicChildren,E,M,N,U,b,y),(S.key!=null||N&&S===N.subTree)&&Gh(x,S,!0)):ht(x,S,M,G,N,U,b,y,$)},ft=(x,S,M,H,N,U,b,y,$)=>{S.slotScopeIds=y,x==null?S.shapeFlag&512?N.ctx.activate(S,M,H,b,$):_t(S,M,H,N,U,b,$):kt(x,S,$)},_t=(x,S,M,H,N,U,b)=>{const y=x.component=Zv(x,H,N);if(Rh(x)&&(y.ctx.renderer=fs),t1(y,!1,b),y.asyncDep){if(N&&N.registerDep(y,X,b),!x.el){const $=y.subTree=Ut(ei);_(null,$,S,M),x.placeholder=$.el}}else X(y,x,S,M,N,U,b)},kt=(x,S,M)=>{const H=S.component=x.component;if(Wv(x,S,M))if(H.asyncDep&&!H.asyncResolved){J(H,S,M);return}else H.next=S,H.update();else S.el=x.el,H.vnode=S},X=(x,S,M,H,N,U,b)=>{const y=()=>{if(x.isMounted){let{next:z,bu:E,u:P,parent:tt,vnode:ut}=x;{const qe=Yh(x);if(qe){z&&(z.el=ut.el,J(x,z,b)),qe.asyncDep.then(()=>{x.isUnmounted||y()});return}}let vt=z,Zt;Ii(x,!1),z?(z.el=ut.el,J(x,z,b)):z=ut,E&&ha(E),(Zt=z.props&&z.props.onVnodeBeforeUpdate)&&$s(Zt,tt,z,ut),Ii(x,!0);const qt=sd(x),Me=x.subTree;x.subTree=qt,k(Me,qt,u(Me.el),As(Me),x,N,U),z.el=qt.el,vt===null&&Kv(x,qt.el),P&&Xe(P,N),(Zt=z.props&&z.props.onVnodeUpdated)&&Xe(()=>$s(Zt,tt,z,ut),N)}else{let z;const{el:E,props:P}=S,{bm:tt,m:ut,parent:vt,root:Zt,type:qt}=x,Me=hr(S);Ii(x,!1),tt&&ha(tt),!Me&&(z=P&&P.onVnodeBeforeMount)&&$s(z,vt,S),Ii(x,!0);{Zt.ce&&Zt.ce._def.shadowRoot!==!1&&Zt.ce._injectChildStyle(qt);const qe=x.subTree=sd(x);k(null,qe,M,H,x,N,U),S.el=qe.el}if(ut&&Xe(ut,N),!Me&&(z=P&&P.onVnodeMounted)){const qe=S;Xe(()=>$s(z,vt,qe),N)}(S.shapeFlag&256||vt&&hr(vt.vnode)&&vt.vnode.shapeFlag&256)&&x.a&&Xe(x.a,N),x.isMounted=!0,S=M=H=null}};x.scope.on();const $=x.effect=new ah(y);x.scope.off();const O=x.update=$.run.bind($),G=x.job=$.runIfDirty.bind($);G.i=x,G.id=x.uid,$.scheduler=()=>Kl(G),Ii(x,!0),O()},J=(x,S,M)=>{S.component=x;const H=x.vnode.props;x.vnode=S,x.next=null,Tv(x,S.props,H,M),Rv(x,S.children,M),Zs(),Yc(x),ti()},ht=(x,S,M,H,N,U,b,y,$=!1)=>{const O=x&&x.children,G=x?x.shapeFlag:0,z=S.children,{patchFlag:E,shapeFlag:P}=S;if(E>0){if(E&128){Ct(O,z,M,H,N,U,b,y,$);return}else if(E&256){Z(O,z,M,H,N,U,b,y,$);return}}P&8?(G&16&&ps(O,N,U),z!==O&&h(M,z)):G&16?P&16?Ct(O,z,M,H,N,U,b,y,$):ps(O,N,U,!0):(G&8&&h(M,""),P&16&&B(z,M,H,N,U,b,y,$))},Z=(x,S,M,H,N,U,b,y,$)=>{x=x||cr,S=S||cr;const O=x.length,G=S.length,z=Math.min(O,G);let E;for(E=0;E<z;E++){const P=S[E]=$?hi(S[E]):Os(S[E]);k(x[E],P,M,null,N,U,b,y,$)}O>G?ps(x,N,U,!0,!1,z):B(S,M,H,N,U,b,y,$,z)},Ct=(x,S,M,H,N,U,b,y,$)=>{let O=0;const G=S.length;let z=x.length-1,E=G-1;for(;O<=z&&O<=E;){const P=x[O],tt=S[O]=$?hi(S[O]):Os(S[O]);if(Dr(P,tt))k(P,tt,M,null,N,U,b,y,$);else break;O++}for(;O<=z&&O<=E;){const P=x[z],tt=S[E]=$?hi(S[E]):Os(S[E]);if(Dr(P,tt))k(P,tt,M,null,N,U,b,y,$);else break;z--,E--}if(O>z){if(O<=E){const P=E+1,tt=P<G?S[P].el:H;for(;O<=E;)k(null,S[O]=$?hi(S[O]):Os(S[O]),M,tt,N,U,b,y,$),O++}}else if(O>E)for(;O<=z;)re(x[O],N,U,!0),O++;else{const P=O,tt=O,ut=new Map;for(O=tt;O<=E;O++){const Pe=S[O]=$?hi(S[O]):Os(S[O]);Pe.key!=null&&ut.set(Pe.key,O)}let vt,Zt=0;const qt=E-tt+1;let Me=!1,qe=0;const js=new Array(qt);for(O=0;O<qt;O++)js[O]=0;for(O=P;O<=z;O++){const Pe=x[O];if(Zt>=qt){re(Pe,N,U,!0);continue}let L;if(Pe.key!=null)L=ut.get(Pe.key);else for(vt=tt;vt<=E;vt++)if(js[vt-tt]===0&&Dr(Pe,S[vt])){L=vt;break}L===void 0?re(Pe,N,U,!0):(js[L-tt]=O+1,L>=qe?qe=L:Me=!0,k(Pe,S[L],M,null,N,U,b,y,$),Zt++)}const Oo=Me?zv(js):cr;for(vt=Oo.length-1,O=qt-1;O>=0;O--){const Pe=tt+O,L=S[Pe],j=S[Pe+1],ct=Pe+1<G?j.el||j.placeholder:H;js[O]===0?k(null,L,M,ct,N,U,b,y,$):Me&&(vt<0||O!==Oo[vt]?Ue(L,M,ct,2):vt--)}}},Ue=(x,S,M,H,N=null)=>{const{el:U,type:b,transition:y,children:$,shapeFlag:O}=x;if(O&6){Ue(x.component.subTree,S,M,H);return}if(O&128){x.suspense.move(S,M,H);return}if(O&64){b.move(x,S,M,fs);return}if(b===Ie){i(U,S,M);for(let z=0;z<$.length;z++)Ue($[z],S,M,H);i(x.anchor,S,M);return}if(b===va){A(x,S,M);return}if(H!==2&&O&1&&y)if(H===0)y.beforeEnter(U),i(U,S,M),Xe(()=>y.enter(U),N);else{const{leave:z,delayLeave:E,afterLeave:P}=y,tt=()=>{x.ctx.isUnmounted?r(U):i(U,S,M)},ut=()=>{z(U,()=>{tt(),P&&P()})};E?E(U,tt,ut):ut()}else i(U,S,M)},re=(x,S,M,H=!1,N=!1)=>{const{type:U,props:b,ref:y,children:$,dynamicChildren:O,shapeFlag:G,patchFlag:z,dirs:E,cacheIndex:P}=x;if(z===-2&&(N=!1),y!=null&&(Zs(),Jr(y,null,M,x,!0),ti()),P!=null&&(S.renderCache[P]=void 0),G&256){S.ctx.deactivate(x);return}const tt=G&1&&E,ut=!hr(x);let vt;if(ut&&(vt=b&&b.onVnodeBeforeUnmount)&&$s(vt,S,x),G&6)Ji(x.component,M,H);else{if(G&128){x.suspense.unmount(M,H);return}tt&&Ti(x,null,S,"beforeUnmount"),G&64?x.type.remove(x,S,M,fs,H):O&&!O.hasOnce&&(U!==Ie||z>0&&z&64)?ps(O,S,M,!1,!0):(U===Ie&&z&384||!N&&G&16)&&ps($,S,M),H&&ni(x)}(ut&&(vt=b&&b.onVnodeUnmounted)||tt)&&Xe(()=>{vt&&$s(vt,S,x),tt&&Ti(x,null,S,"unmounted")},M)},ni=x=>{const{type:S,el:M,anchor:H,transition:N}=x;if(S===Ie){Ai(M,H);return}if(S===va){m(x);return}const U=()=>{r(M),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(x.shapeFlag&1&&N&&!N.persisted){const{leave:b,delayLeave:y}=N,$=()=>b(M,U);y?y(x.el,U,$):$()}else U()},Ai=(x,S)=>{let M;for(;x!==S;)M=p(x),r(x),x=M;r(S)},Ji=(x,S,M)=>{const{bum:H,scope:N,job:U,subTree:b,um:y,m:$,a:O,parent:G,slots:{__:z}}=x;ed($),ed(O),H&&ha(H),G&&pt(z)&&z.forEach(E=>{G.renderCache[E]=void 0}),N.stop(),U&&(U.flags|=8,re(b,x,S,M)),y&&Xe(y,S),Xe(()=>{x.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},ps=(x,S,M,H=!1,N=!1,U=0)=>{for(let b=U;b<x.length;b++)re(x[b],S,M,H,N)},As=x=>{if(x.shapeFlag&6)return As(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const S=p(x.anchor||x.el),M=S&&S[iv];return M?p(M):S};let Ae=!1;const ai=(x,S,M)=>{x==null?S._vnode&&re(S._vnode,null,null,!0):k(S._vnode||null,x,S,null,null,null,M),S._vnode=x,Ae||(Ae=!0,Yc(),$h(),Ae=!1)},fs={p:k,um:re,m:Ue,r:ni,mt:_t,mc:B,pc:ht,pbc:V,n:As,o:t};return{render:ai,hydrate:void 0,createApp:Sv(ai)}}function ya({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Ii({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Dv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gh(t,e,s=!1){const i=t.children,r=e.children;if(pt(i)&&pt(r))for(let o=0;o<i.length;o++){const n=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=hi(r[o]),a.el=n.el),!s&&a.patchFlag!==-2&&Gh(n,a)),a.type===To&&(a.el=n.el),a.type===ei&&!a.el&&(a.el=n.el)}}function zv(t){const e=t.slice(),s=[0];let i,r,o,n,a;const l=t.length;for(i=0;i<l;i++){const d=t[i];if(d!==0){if(r=s[s.length-1],t[r]<d){e[i]=r,s.push(i);continue}for(o=0,n=s.length-1;o<n;)a=o+n>>1,t[s[a]]<d?o=a+1:n=a;d<t[s[o]]&&(o>0&&(e[i]=s[o-1]),s[o]=i)}}for(o=s.length,n=s[o-1];o-- >0;)s[o]=n,n=e[n];return s}function Yh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yh(e)}function ed(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vv=Symbol.for("v-scx"),Nv=()=>ge(Vv);function Ni(t,e,s){return Xh(t,e,s)}function Xh(t,e,s=Ft){const{immediate:i,deep:r,flush:o,once:n}=s,a=Le({},s),l=e&&i||!e&&o!=="post";let d;if(ho){if(o==="sync"){const g=Nv();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Ps,g.resume=Ps,g.pause=Ps,g}}const h=Ne;a.call=(g,v,k)=>Vs(g,h,v,k);let u=!1;o==="post"?a.scheduler=g=>{Xe(g,h&&h.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(g,v)=>{v?g():Kl(g)}),a.augmentJob=g=>{e&&(g.flags|=4),u&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=Zy(t,e,a);return ho&&(d?d.push(p):l&&p()),p}function Fv(t,e,s){const i=this.proxy,r=ne(t)?t.includes(".")?Jh(i,t):()=>i[t]:t.bind(i,i);let o;bt(e)?o=e:(o=e.handler,s=e);const n=Lo(this),a=Xh(r,o.bind(i),s);return n(),a}function Jh(t,e){const s=e.split(".");return()=>{let i=t;for(let r=0;r<s.length&&i;r++)i=i[s[r]];return i}}const Bv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_i(e)}Modifiers`]||t[`${Xi(e)}Modifiers`];function Uv(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||Ft;let r=s;const o=e.startsWith("update:"),n=o&&Bv(i,e.slice(7));n&&(n.trim&&(r=s.map(h=>ne(h)?h.trim():h)),n.number&&(r=s.map(my)));let a,l=i[a=ua(e)]||i[a=ua(_i(e))];!l&&o&&(l=i[a=ua(Xi(e))]),l&&Vs(l,t,6,r);const d=i[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vs(d,t,6,r)}}function Qh(t,e,s=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let n={},a=!1;if(!bt(t)){const l=d=>{const h=Qh(d,e,!0);h&&(a=!0,Le(n,h))};!s&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(Kt(t)&&i.set(t,null),null):(pt(o)?o.forEach(l=>n[l]=null):Le(n,o),Kt(t)&&i.set(t,n),n)}function qn(t,e){return!t||!Vn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Lt(t,e[0].toLowerCase()+e.slice(1))||Lt(t,Xi(e))||Lt(t,e))}function sd(t){const{type:e,vnode:s,proxy:i,withProxy:r,propsOptions:[o],slots:n,attrs:a,emit:l,render:d,renderCache:h,props:u,data:p,setupState:g,ctx:v,inheritAttrs:k}=t,I=gn(t);let _,w;try{if(s.shapeFlag&4){const m=r||i,C=m;_=Os(d.call(C,m,h,u,g,p,v)),w=a}else{const m=e;_=Os(m.length>1?m(u,{attrs:a,slots:n,emit:l}):m(u,null)),w=e.props?a:Hv(a)}}catch(m){Zr.length=0,Wn(m,t,1),_=Ut(ei)}let A=_;if(w&&k!==!1){const m=Object.keys(w),{shapeFlag:C}=A;m.length&&C&7&&(o&&m.some(Pl)&&(w=jv(w,o)),A=br(A,w,!1,!0))}return s.dirs&&(A=br(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&ql(A,s.transition),_=A,gn(I),_}const Hv=t=>{let e;for(const s in t)(s==="class"||s==="style"||Vn(s))&&((e||(e={}))[s]=t[s]);return e},jv=(t,e)=>{const s={};for(const i in t)(!Pl(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function Wv(t,e,s){const{props:i,children:r,component:o}=t,{props:n,children:a,patchFlag:l}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?id(i,n,d):!!n;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const p=h[u];if(n[p]!==i[p]&&!qn(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===n?!1:i?n?id(i,n,d):!0:!!n;return!1}function id(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!qn(s,o))return!0}return!1}function Kv({vnode:t,parent:e},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=s,e=e.parent;else break}}const Zh=t=>t.__isSuspense;function qv(t,e){e&&e.pendingBranch?pt(t)?e.effects.push(...t):e.effects.push(t):sv(t)}const Ie=Symbol.for("v-fgt"),To=Symbol.for("v-txt"),ei=Symbol.for("v-cmt"),va=Symbol.for("v-stc"),Zr=[];let ts=null;function gt(t=!1){Zr.push(ts=t?null:[])}function Gv(){Zr.pop(),ts=Zr[Zr.length-1]||null}let co=1;function bn(t,e=!1){co+=t,t<0&&ts&&e&&(ts.hasOnce=!0)}function tp(t){return t.dynamicChildren=co>0?ts||cr:null,Gv(),co>0&&ts&&ts.push(t),t}function St(t,e,s,i,r,o){return tp(W(t,e,s,i,r,o,!0))}function Rs(t,e,s,i,r){return tp(Ut(t,e,s,i,r,!0))}function uo(t){return t?t.__v_isVNode===!0:!1}function Dr(t,e){return t.type===e.type&&t.key===e.key}const ep=({key:t})=>t??null,tn=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?ne(t)||Jt(t)||bt(t)?{i:We,r:t,k:e,f:!!s}:t:null);function W(t,e=null,s=null,i=0,r=null,o=t===Ie?0:1,n=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ep(e),ref:e&&tn(e),scopeId:Ih,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return a?(Ql(l,s),o&128&&t.normalize(l)):s&&(l.shapeFlag|=ne(s)?8:16),co>0&&!n&&ts&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ts.push(l),l}const Ut=Yv;function Yv(t,e=null,s=null,i=0,r=null,o=!1){if((!t||t===mv)&&(t=ei),uo(t)){const a=br(t,e,!0);return s&&Ql(a,s),co>0&&!o&&ts&&(a.shapeFlag&6?ts[ts.indexOf(t)]=a:ts.push(a)),a.patchFlag=-2,a}if(r1(t)&&(t=t.__vccOpts),e){e=sp(e);let{class:a,style:l}=e;a&&!ne(a)&&(e.class=mr(a)),Kt(l)&&(jn(l)&&!pt(l)&&(l=Le({},l)),e.style=Un(l))}const n=ne(t)?1:Zh(t)?128:rv(t)?64:Kt(t)?4:bt(t)?2:0;return W(t,e,s,i,r,n,o,!0)}function sp(t){return t?jn(t)||Uh(t)?Le({},t):t:null}function br(t,e,s=!1,i=!1){const{props:r,ref:o,patchFlag:n,children:a,transition:l}=t,d=e?Xv(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&ep(d),ref:e&&e.ref?s&&o?pt(o)?o.concat(tn(e)):[o,tn(e)]:tn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&br(t.ssContent),ssFallback:t.ssFallback&&br(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ql(h,l.clone(h)),h}function Gn(t=" ",e=0){return Ut(To,null,t,e)}function je(t="",e=!1){return e?(gt(),Rs(ei,null,t)):Ut(ei,null,t)}function Os(t){return t==null||typeof t=="boolean"?Ut(ei):pt(t)?Ut(Ie,null,t.slice()):uo(t)?hi(t):Ut(To,null,String(t))}function hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:br(t)}function Ql(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(pt(e))s=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ql(t,r()),r._c&&(r._d=!0));return}else{s=32;const r=e._;!r&&!Uh(e)?e._ctx=We:r===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else bt(e)?(e={default:e,_ctx:We},s=32):(e=String(e),i&64?(s=16,e=[Gn(e)]):s=8);t.children=e,t.shapeFlag|=s}function Xv(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=mr([e.class,i.class]));else if(r==="style")e.style=Un([e.style,i.style]);else if(Vn(r)){const o=e[r],n=i[r];n&&o!==n&&!(pt(o)&&o.includes(n))&&(e[r]=o?[].concat(o,n):n)}else r!==""&&(e[r]=i[r])}return e}function $s(t,e,s,i=null){Vs(t,e,7,[s,i])}const Jv=Nh();let Qv=0;function Zv(t,e,s){const i=t.type,r=(e?e.appContext:t.appContext)||Jv,o={uid:Qv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jh(i,r),emitsOptions:Qh(i,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Uv.bind(null,o),t.ce&&t.ce(o),o}let Ne=null;const Io=()=>Ne||We;let yn,Za;{const t=Bn(),e=(s,i)=>{let r;return(r=t[s])||(r=t[s]=[]),r.push(i),o=>{r.length>1?r.forEach(n=>n(o)):r[0](o)}};yn=e("__VUE_INSTANCE_SETTERS__",s=>Ne=s),Za=e("__VUE_SSR_SETTERS__",s=>ho=s)}const Lo=t=>{const e=Ne;return yn(t),t.scope.on(),()=>{t.scope.off(),yn(e)}},rd=()=>{Ne&&Ne.scope.off(),yn(null)};function ip(t){return t.vnode.shapeFlag&4}let ho=!1;function t1(t,e=!1,s=!1){e&&Za(e);const{props:i,children:r}=t.vnode,o=ip(t);$v(t,i,o,e),Ov(t,r,s||e);const n=o?e1(t,e):void 0;return e&&Za(!1),n}function e1(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yv);const{setup:i}=s;if(i){Zs();const r=t.setupContext=i.length>1?i1(t):null,o=Lo(t),n=$o(i,t,0,[t.props,r]),a=Qu(n);if(ti(),o(),(a||t.sp)&&!hr(t)&&Oh(t),a){if(n.then(rd,rd),e)return n.then(l=>{od(t,l)}).catch(l=>{Wn(l,t,0)});t.asyncDep=n}else od(t,n)}else rp(t)}function od(t,e,s){bt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Kt(e)&&(t.setupState=kh(e)),rp(t)}function rp(t,e,s){const i=t.type;t.render||(t.render=i.render||Ps);{const r=Lo(t);Zs();try{vv(t)}finally{ti(),r()}}}const s1={get(t,e){return Te(t,"get",""),t[e]}};function i1(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,s1),slots:t.slots,emit:t.emit,expose:e}}function Zl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kh(Wl(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Qr)return Qr[s](t)},has(e,s){return s in e||s in Qr}})):t.proxy}function r1(t){return bt(t)&&"__vccOpts"in t}const Nt=(t,e)=>Jy(t,e,ho);function op(t,e,s){const i=arguments.length;return i===2?Kt(e)&&!pt(e)?uo(e)?Ut(t,null,[e]):Ut(t,e):Ut(t,null,e):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&uo(s)&&(s=[s]),Ut(t,e,s))}const o1="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const nd=typeof window<"u"&&window.trustedTypes;if(nd)try{tl=nd.createPolicy("vue",{createHTML:t=>t})}catch{}const np=tl?t=>tl.createHTML(t):t=>t,n1="http://www.w3.org/2000/svg",a1="http://www.w3.org/1998/Math/MathML",qs=typeof document<"u"?document:null,ad=qs&&qs.createElement("template"),l1={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const r=e==="svg"?qs.createElementNS(n1,t):e==="mathml"?qs.createElementNS(a1,t):s?qs.createElement(t,{is:s}):qs.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>qs.createTextNode(t),createComment:t=>qs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,r,o){const n=s?s.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),s),!(r===o||!(r=r.nextSibling)););else{ad.innerHTML=np(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=ad.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,s)}return[n?n.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},c1=Symbol("_vtc");function d1(t,e,s){const i=t[c1];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const ld=Symbol("_vod"),u1=Symbol("_vsh"),h1=Symbol(""),p1=/(^|;)\s*display\s*:/;function f1(t,e,s){const i=t.style,r=ne(s);let o=!1;if(s&&!r){if(e)if(ne(e))for(const n of e.split(";")){const a=n.slice(0,n.indexOf(":")).trim();s[a]==null&&en(i,a,"")}else for(const n in e)s[n]==null&&en(i,n,"");for(const n in s)n==="display"&&(o=!0),en(i,n,s[n])}else if(r){if(e!==s){const n=i[h1];n&&(s+=";"+n),i.cssText=s,o=p1.test(s)}}else e&&t.removeAttribute("style");ld in t&&(t[ld]=o?i.display:"",t[u1]&&(i.display="none"))}const cd=/\s*!important$/;function en(t,e,s){if(pt(s))s.forEach(i=>en(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const i=g1(t,e);cd.test(s)?t.setProperty(Xi(i),s.replace(cd,""),"important"):t[i]=s}}const dd=["Webkit","Moz","ms"],_a={};function g1(t,e){const s=_a[e];if(s)return s;let i=_i(e);if(i!=="filter"&&i in t)return _a[e]=i;i=eh(i);for(let r=0;r<dd.length;r++){const o=dd[r]+i;if(o in t)return _a[e]=o}return e}const ud="http://www.w3.org/1999/xlink";function hd(t,e,s,i,r,o=ky(e)){i&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(ud,e.slice(6,e.length)):t.setAttributeNS(ud,e,s):s==null||o&&!sh(s)?t.removeAttribute(e):t.setAttribute(e,o?"":ri(s)?String(s):s)}function pd(t,e,s,i,r){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?np(s):s);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=s==null?t.type==="checkbox"?"on":"":String(s);(a!==l||!("_value"in t))&&(t.value=l),s==null&&t.removeAttribute(e),t._value=s;return}let n=!1;if(s===""||s==null){const a=typeof t[e];a==="boolean"?s=sh(s):s==null&&a==="string"?(s="",n=!0):a==="number"&&(s=0,n=!0)}try{t[e]=s}catch{}n&&t.removeAttribute(r||e)}function m1(t,e,s,i){t.addEventListener(e,s,i)}function b1(t,e,s,i){t.removeEventListener(e,s,i)}const fd=Symbol("_vei");function y1(t,e,s,i,r=null){const o=t[fd]||(t[fd]={}),n=o[e];if(i&&n)n.value=i;else{const[a,l]=v1(e);if(i){const d=o[e]=x1(i,r);m1(t,a,d,l)}else n&&(b1(t,a,n,l),o[e]=void 0)}}const gd=/(?:Once|Passive|Capture)$/;function v1(t){let e;if(gd.test(t)){e={};let i;for(;i=t.match(gd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xi(t.slice(2)),e]}let wa=0;const _1=Promise.resolve(),w1=()=>wa||(_1.then(()=>wa=0),wa=Date.now());function x1(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Vs(k1(i,s.value),e,5,[i])};return s.value=t,s.attached=w1(),s}function k1(t,e){if(pt(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const md=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,C1=(t,e,s,i,r,o)=>{const n=r==="svg";e==="class"?d1(t,i,n):e==="style"?f1(t,s,i):Vn(e)?Pl(e)||y1(t,e,s,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):S1(t,e,i,n))?(pd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hd(t,e,i,n,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ne(i))?pd(t,_i(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),hd(t,e,i,n))};function S1(t,e,s,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&md(e)&&bt(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return md(e)&&ne(s)?!1:e in t}const E1=["ctrl","shift","alt","meta"],A1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>E1.some(s=>t[`${s}Key`]&&!e.includes(s))},Qe=(t,e)=>{const s=t._withMods||(t._withMods={}),i=e.join(".");return s[i]||(s[i]=(r,...o)=>{for(let n=0;n<e.length;n++){const a=A1[e[n]];if(a&&a(r,e))return}return t(r,...o)})},$1=Le({patchProp:C1},l1);let bd;function T1(){return bd||(bd=Mv($1))}const ap=(...t)=>{const e=T1().createApp(...t),{mount:s}=e;return e.mount=i=>{const r=L1(i);if(!r)return;const o=e._component;!bt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const n=s(r,!1,I1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},e};function I1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function L1(t){return ne(t)?document.querySelector(t):t}function lp(t){const e=s=>Array.isArray(s)?s.map(i=>e(i)):Jt(s)||Qs(s)||jn(s)?e(At(s)):s&&typeof s=="object"?Object.keys(s).reduce((i,r)=>(i[r]=e(s[r]),i),{}):s;return e(t)}const cp="https://attack.mitre.org",O1=`${cp}/techniques/`,R1=`${cp}/tactics/`,M1="/host-management/hosts";function P1(t){return t.technique_id?t.technique_id.replace(".","/"):""}function D1(t){return t?.technique_id?`${O1}/${P1(t)}`:""}function z1(t){return t?.tactic_id?`${R1}/${t.tactic_id}`:""}function V1(t){return t?.device?`${M1}/${t.device?.device_id}?filter=device_id:%27${t.device?.device_id}%27`:""}const dp="mitreAutoRemediationJira",up="mitreAutoRemediationCreatedIssues";class N1 extends Error{}const F1="ransomwareNotifyIT",B1="ransomwareNotifyIR";let Ho;async function vn(t,e){try{const i=await t.collection({collection:dp}).read(e);if(i&&"errors"in i&&Array.isArray(i.errors)&&i.errors.length>0){const r=new N1(i.errors[0].message);throw i.errors[0].code&&(r.code=Number(i.errors[0].code)),r}else return i&&"account"in i&&"project"in i?i:void 0}catch(s){if(s.message?.includes("object not found")||s.code===404)return;throw s}}async function hp(t){if(Ho!==void 0)return Ho;let e=!0;try{e=typeof(await t.collection({collection:dp}))?.read=="function",e&&(await Promise.all([vn(t,"ransomwareNotifyIT"),vn(t,"ransomwareNotifyIR")]),e=!0)}catch(s){console.error(s),e=!1}finally{Ho=e}return Ho}const U1=async function(t){if(await hp(t))return vn(t,F1)},H1=async function(t){if(await hp(t))return vn(t,B1)},pp=function(t,e){return`${t.data?.detectionId}-${e}`.replace(/[^a-zA-Z\d\-_]/gi,"_")},yd=async function(t,e){const s=pp(t,e);try{const r=await t.collection({collection:up}).read(s);return r?.account&&r?.project&&r?.issueId?r:void 0}catch(i){if(i.message?.includes("object not found"))return;console.error(i)}},j1=async function(t,e,s,i,r){if(i.created){const o={account:s.account??"N/A",priority:s.priority??"N/A",issueType:s.issueType??"N/A",summary:s.summary??"",description:s.description??"",project:s.project??"N/A",labels:s.labels??[],issueId:i.id,issueKey:i.key,issueLink:i.api_link,detectionId:e.id,creationDate:new Date().toISOString(),notificationType:r},n=t.collection({collection:up}),a=pp(t,r),l=await n.write(a,lp(o));return!l||l?.errors?.length?void 0:o}};var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xa,vd;function K1(){if(vd)return xa;vd=1;var t="Expected a function",e="__lodash_hash_undefined__",s="[object Function]",i="[object GeneratorFunction]",r="[object Symbol]",o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/,a=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d=/[\\^$.*+?()[\]{}|]/g,h=/\\(\\)?/g,u=/^\[object .+?Constructor\]$/,p=typeof jo=="object"&&jo&&jo.Object===Object&&jo,g=typeof self=="object"&&self&&self.Object===Object&&self,v=p||g||Function("return this")();function k(L,j){return L?.[j]}function I(L){var j=!1;if(L!=null&&typeof L.toString!="function")try{j=!!(L+"")}catch{}return j}var _=Array.prototype,w=Function.prototype,A=Object.prototype,m=v["__core-js_shared__"],C=function(){var L=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||"");return L?"Symbol(src)_1."+L:""}(),R=w.toString,T=A.hasOwnProperty,B=A.toString,D=RegExp("^"+R.call(T).replace(d,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),V=v.Symbol,dt=_.splice,it=$(v,"Map"),ft=$(Object,"create"),_t=V?V.prototype:void 0,kt=_t?_t.toString:void 0;function X(L){var j=-1,ct=L?L.length:0;for(this.clear();++j<ct;){var Bt=L[j];this.set(Bt[0],Bt[1])}}function J(){this.__data__=ft?ft(null):{}}function ht(L){return this.has(L)&&delete this.__data__[L]}function Z(L){var j=this.__data__;if(ft){var ct=j[L];return ct===e?void 0:ct}return T.call(j,L)?j[L]:void 0}function Ct(L){var j=this.__data__;return ft?j[L]!==void 0:T.call(j,L)}function Ue(L,j){var ct=this.__data__;return ct[L]=ft&&j===void 0?e:j,this}X.prototype.clear=J,X.prototype.delete=ht,X.prototype.get=Z,X.prototype.has=Ct,X.prototype.set=Ue;function re(L){var j=-1,ct=L?L.length:0;for(this.clear();++j<ct;){var Bt=L[j];this.set(Bt[0],Bt[1])}}function ni(){this.__data__=[]}function Ai(L){var j=this.__data__,ct=M(j,L);if(ct<0)return!1;var Bt=j.length-1;return ct==Bt?j.pop():dt.call(j,ct,1),!0}function Ji(L){var j=this.__data__,ct=M(j,L);return ct<0?void 0:j[ct][1]}function ps(L){return M(this.__data__,L)>-1}function As(L,j){var ct=this.__data__,Bt=M(ct,L);return Bt<0?ct.push([L,j]):ct[Bt][1]=j,this}re.prototype.clear=ni,re.prototype.delete=Ai,re.prototype.get=Ji,re.prototype.has=ps,re.prototype.set=As;function Ae(L){var j=-1,ct=L?L.length:0;for(this.clear();++j<ct;){var Bt=L[j];this.set(Bt[0],Bt[1])}}function ai(){this.__data__={hash:new X,map:new(it||re),string:new X}}function fs(L){return y(this,L).delete(L)}function Qi(L){return y(this,L).get(L)}function x(L){return y(this,L).has(L)}function S(L,j){return y(this,L).set(L,j),this}Ae.prototype.clear=ai,Ae.prototype.delete=fs,Ae.prototype.get=Qi,Ae.prototype.has=x,Ae.prototype.set=S;function M(L,j){for(var ct=L.length;ct--;)if(vt(L[ct][0],j))return ct;return-1}function H(L,j){j=O(j,L)?[j]:b(j);for(var ct=0,Bt=j.length;L!=null&&ct<Bt;)L=L[P(j[ct++])];return ct&&ct==Bt?L:void 0}function N(L){if(!Me(L)||z(L))return!1;var j=qt(L)||I(L)?D:u;return j.test(tt(L))}function U(L){if(typeof L=="string")return L;if(js(L))return kt?kt.call(L):"";var j=L+"";return j=="0"&&1/L==-1/0?"-0":j}function b(L){return Zt(L)?L:E(L)}function y(L,j){var ct=L.__data__;return G(j)?ct[typeof j=="string"?"string":"hash"]:ct.map}function $(L,j){var ct=k(L,j);return N(ct)?ct:void 0}function O(L,j){if(Zt(L))return!1;var ct=typeof L;return ct=="number"||ct=="symbol"||ct=="boolean"||L==null||js(L)?!0:n.test(L)||!o.test(L)||j!=null&&L in Object(j)}function G(L){var j=typeof L;return j=="string"||j=="number"||j=="symbol"||j=="boolean"?L!=="__proto__":L===null}function z(L){return!!C&&C in L}var E=ut(function(L){L=Oo(L);var j=[];return a.test(L)&&j.push(""),L.replace(l,function(ct,Bt,Er,Ar){j.push(Er?Ar.replace(h,"$1"):Bt||ct)}),j});function P(L){if(typeof L=="string"||js(L))return L;var j=L+"";return j=="0"&&1/L==-1/0?"-0":j}function tt(L){if(L!=null){try{return R.call(L)}catch{}try{return L+""}catch{}}return""}function ut(L,j){if(typeof L!="function"||j&&typeof j!="function")throw new TypeError(t);var ct=function(){var Bt=arguments,Er=j?j.apply(this,Bt):Bt[0],Ar=ct.cache;if(Ar.has(Er))return Ar.get(Er);var uc=L.apply(this,Bt);return ct.cache=Ar.set(Er,uc),uc};return ct.cache=new(ut.Cache||Ae),ct}ut.Cache=Ae;function vt(L,j){return L===j||L!==L&&j!==j}var Zt=Array.isArray;function qt(L){var j=Me(L)?B.call(L):"";return j==s||j==i}function Me(L){var j=typeof L;return!!L&&(j=="object"||j=="function")}function qe(L){return!!L&&typeof L=="object"}function js(L){return typeof L=="symbol"||qe(L)&&B.call(L)==r}function Oo(L){return L==null?"":U(L)}function Pe(L,j,ct){var Bt=L==null?void 0:H(L,j);return Bt===void 0?ct:Bt}return xa=Pe,xa}var q1=K1();const G1=W1(q1),tc={AgentId:"agent_id",AgentVersion:"device.agent_version",AllegedFiletype:"alleged_filetype",ClientID:"cid",CmdLine:"cmdline",CreatedTimestamp:"created_timestamp:datetime",DetectionId:"id",DeviceID:"device.device_id",ExternalIP:"device.external_ip",FalconHostLink:"falcon_host_link",FileName:"filename",FilePath:"filepath",Hostname:"device.hostname",Name:"name",Objective:"objective",PatternDisposition:"pattern_disposition_description",PatternDispositionID:"pattern_disposition",Platform:"platform",ProcessEndTime:"process_end_time:datetime",ProcessID:"process_id",ProcessStartTime:"process_start_time:datetime",Product:"product",Scenario:"scenario",Severity:"severity:toSeverityValue",Status:"status",Tactic:"tactic",TacticID:"tactic_id",Tags:"tags:join",Technique:"technique",TechniqueID:"technique_id",TimeStamp:"timestamp:datetime",Type:"type",UpdatedTimestamp:"updated_timestamp:datetime",UserID:"user_id",UserName:"user_name"},fp=(t,e,s,i,r="---",o="preview")=>{const n=tc[s]??"";let a="";if(n){const[l,d]=n.split(":");try{if(a=G1(i||{},l),d)switch(d){case"join":{a&&(a=[...a].join(", "));break}case"toSeverityValue":{if(a){const h=Number(a);isNaN(h)?a="Unknown":h<=20?a="Informational":h<=40?a="Low":h<=60?a="Medium":h<=80?a="High":h<=101?a="Critical":a="Unknown"}break}case"datetime":if(a){const h=Number(a),u=new Date(isNaN(h)?String(a):Number(a)*1e3);o==="preview"?a=e.d(u,"fullDateTime",t.data?.locale):a=u.toISOString()}break;default:break}}catch(h){console.error(h),console.log(l,a)}}return String(a)||r},_d=(t,e,s,i)=>(i&&Object.keys(tc).forEach(r=>{const o=["${",r,"}"].join(""),n=fp(t,e,r,i);s=s.replaceAll(o,n)}),s),Y1="Ransomware ${Tactic} via ${Technique} detected on ${Hostname}",wd={default:"bb5c382c865347fd8ce08749cc2f64fc"},gp={},X1=async t=>Object.entries(wd).find(([e,s])=>t.includes(e))?.[1]??wd.default,J1=async function(t,e){const s=await X1(e);return((await t.api.plugins.getEntitiesConfigsV1({appId:s})).resources??[])?.filter(r=>r.config?.permissions.includes("read:jira-work")&&r.config?.permissions.includes("write:jira-work")&&r.config?.id).map(r=>({name:r.config.name,id:r.config.id}))},Q1=async function(t,e){const s=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_projects_deprecated",config_id:e,request:{}}]});return t.api.plugins.postEntitiesExecuteV1,(s.resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,isPrivate:r.isPrivate,href:r.self})))},Z1=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_labels",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.values?.length??0)>0).flatMap(i=>i.response_body.values).map(i=>{const r=i.replace(/ /g,"_");return gp[r]=i,r})},el=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_priorities",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,href:r.self,description:r.description})))},t_=async function(t,e,s){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_issue_types",config_id:e,request:{params:{query:{projectId:s}}}}]})).resources??[])?.filter(r=>r.status_code===200&&(r.response_body?.length??0)>0).flatMap(r=>r.response_body.map(o=>({id:o.id,name:o.name,href:o.self,description:o.description})))},e_=async function(t,e,s,i,r,o){try{const{account:n,project:a,priority:l,labels:d=[],summary:h="",description:u="",issueType:p}=lp(r);if(n&&a&&l&&d?.length&&h&&p){const[g,v,k,I,_]=await Promise.all([J1(t,s),Q1(t,n),el(t,n),t_(t,n,a),Z1(t,n)]),w=g?.find(T=>String(T.id)===String(n)||String(T.name)===String(n)),A=v?.find(T=>String(T.id)===String(a)||String(T.name)===String(a)),m=k?.find(T=>String(T.id)===String(l)||String(T.name)===String(l)),C=I?.find(T=>String(T.id)===String(p)||String(T.name)===String(p)),R=d.map(T=>gp[T]??T.replace(/_/g,"")).filter(T=>_.includes(T));if(w&&A&&m&&C&&R.length){const T=_d(t,e,u,o),B=_d(t,e,h,o),D=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.create_issue",config_id:n,request:{json:{fields:{description:T,issuetype:{name:C.name},labels:R,priority:{id:m.id},project:{id:A.id},summary:B}}}}]});if(D?.resources?.length&&!D?.errors?.length){const V={errors:[],created:!0,id:D?.resources?.[0].response_body?.id,key:D?.resources?.[0].response_body?.key,api_link:D?.resources?.[0].response_body?.self};try{V.logged_data=await j1(t,o,{account:w.name,project:A.name,priority:m.name,issueType:C.name,labels:d??[],description:T??"",summary:B??""},V,i)}catch(dt){console.error(dt)}return V}else return{errors:(D?.errors??[]).map(V=>V.message),created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}catch(n){return console.error(n),{errors:[n.message],created:!1,id:"",key:"",api_link:""}}};async function s_(t,e){return e?(await t.api.alerts.postEntitiesAlertsV1({ids:[e]}))?.resources?.[0]:void 0}const ke={I18N:Symbol("i18n"),ALERTS:Symbol("alerts"),FALCON_API:Symbol("falconApi"),FALCON_API_GET_ORIGINS:Symbol("falconApiGetOrigins"),FALCON_API_GET_APP_ID:Symbol("falconApiGetAppId")};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let mp;const Yn=t=>mp=t,bp=Symbol();function sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var to;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(to||(to={}));function i_(){const t=Vl(!0),e=t.run(()=>Ht({}));let s=[],i=[];const r=Wl({install(o){Yn(r),r._a=o,o.provide(bp,r),o.config.globalProperties.$pinia=r,i.forEach(n=>s.push(n)),i=[]},use(o){return this._a?s.push(o):i.push(o),this},_p:s,_a:null,_e:t,_s:new Map,state:e});return r}const yp=()=>{};function xd(t,e,s,i=yp){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!s&&nh()&&Cy(r),r}function tr(t,...e){t.slice().forEach(s=>{s(...e)})}const r_=t=>t(),kd=Symbol(),ka=Symbol();function il(t,e){t instanceof Map&&e instanceof Map?e.forEach((s,i)=>t.set(i,s)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const s in e){if(!e.hasOwnProperty(s))continue;const i=e[s],r=t[s];sl(r)&&sl(i)&&t.hasOwnProperty(s)&&!Jt(i)&&!Qs(i)?t[s]=il(r,i):t[s]=i}return t}const o_=Symbol();function n_(t){return!sl(t)||!Object.prototype.hasOwnProperty.call(t,o_)}const{assign:di}=Object;function a_(t){return!!(Jt(t)&&t.effect)}function l_(t,e,s,i){const{state:r,actions:o,getters:n}=e,a=s.state.value[t];let l;function d(){a||(s.state.value[t]=r?r():{});const h=Ch(s.state.value[t]);return di(h,o,Object.keys(n||{}).reduce((u,p)=>(u[p]=Wl(Nt(()=>{Yn(s);const g=s._s.get(t);return n[p].call(g,g)})),u),{}))}return l=vp(t,d,e,s,i,!0),l}function vp(t,e,s={},i,r,o){let n;const a=di({actions:{}},s),l={deep:!0};let d,h,u=[],p=[],g;const v=i.state.value[t];!o&&!v&&(i.state.value[t]={}),Ht({});let k;function I(B){let D;d=h=!1,typeof B=="function"?(B(i.state.value[t]),D={type:to.patchFunction,storeId:t,events:g}):(il(i.state.value[t],B),D={type:to.patchObject,payload:B,storeId:t,events:g});const V=k=Symbol();Eh().then(()=>{k===V&&(d=!0)}),h=!0,tr(u,D,i.state.value[t])}const _=o?function(){const{state:D}=s,V=D?D():{};this.$patch(dt=>{di(dt,V)})}:yp;function w(){n.stop(),u=[],p=[],i._s.delete(t)}const A=(B,D="")=>{if(kd in B)return B[ka]=D,B;const V=function(){Yn(i);const dt=Array.from(arguments),it=[],ft=[];function _t(J){it.push(J)}function kt(J){ft.push(J)}tr(p,{args:dt,name:V[ka],store:C,after:_t,onError:kt});let X;try{X=B.apply(this&&this.$id===t?this:C,dt)}catch(J){throw tr(ft,J),J}return X instanceof Promise?X.then(J=>(tr(it,J),J)).catch(J=>(tr(ft,J),Promise.reject(J))):(tr(it,X),X)};return V[kd]=!0,V[ka]=D,V},m={_p:i,$id:t,$onAction:xd.bind(null,p),$patch:I,$reset:_,$subscribe(B,D={}){const V=xd(u,B,D.detached,()=>dt()),dt=n.run(()=>Ni(()=>i.state.value[t],it=>{(D.flush==="sync"?h:d)&&B({storeId:t,type:to.direct,events:g},it)},di({},l,D)));return V},$dispose:w},C=Ao(m);i._s.set(t,C);const T=(i._a&&i._a.runWithContext||r_)(()=>i._e.run(()=>(n=Vl()).run(()=>e({action:A}))));for(const B in T){const D=T[B];if(Jt(D)&&!a_(D)||Qs(D))o||(v&&n_(D)&&(Jt(D)?D.value=v[B]:il(D,v[B])),i.state.value[t][B]=D);else if(typeof D=="function"){const V=A(D,B);T[B]=V,a.actions[B]=D}}return di(C,T),di(At(C),T),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:B=>{I(D=>{di(D,B)})}}),i._p.forEach(B=>{di(C,n.run(()=>B({store:C,app:i._a,pinia:i,options:a})))}),v&&o&&s.hydrate&&s.hydrate(C.$state,v),d=!0,h=!0,C}/*! #__NO_SIDE_EFFECTS__ */function c_(t,e,s){let i;const r=typeof e=="function";i=r?s:e;function o(n,a){const l=Av();return n=n||(l?ge(bp,null):null),n&&Yn(n),n=mp,n._s.has(t)||(r?vp(t,e,i,n):l_(t,i,n)),n._s.get(t)}return o.$id=t,o}const Xn=c_("extension",()=>{const t=Ht(),e=Ht(!1),s=Ht(!1),i=Ht(!1),r=Ht(!1),o=Ht(),n=Ht("RansomwareRemediation:DefaultPanel"),a=Ao({}),l=Ht(),d=Ht(),h=Ht(),u=Ht(),p=Ht([]),g=Ht([]),v=ge(ke.FALCON_API),k=ge(ke.I18N),I=ge(ke.FALCON_API_GET_ORIGINS),_=Ht(String(v.data?.detectionId)),{t:w}=k,A=async()=>{try{s.value=!0,o.value=void 0,_.value&&(o.value=await s_(v,_.value))}catch(Z){t.value=Z,console.error(Z)}finally{s.value=!1}},m=async()=>{try{i.value=!0,l.value=await U1(v),d.value=await H1(v),l.value?.account&&(p.value=await el(v,l.value?.account)),d.value?.account&&(g.value=await el(v,d.value?.account))}catch(Z){t.value=Z,console.error(Z)}finally{i.value=!1}},C=async()=>{try{r.value=!0,_.value&&(h.value=await yd(v,"notifyIT"),u.value=await yd(v,"notifyIR"))}catch(Z){t.value=Z,console.error(Z)}finally{r.value=!1}},R=Nt(()=>!0),T=()=>n.value?ft(n.value):{},B=(Z,Ct)=>{n.value=Z,Ct&&(a[Z]=Ct)},D=(Z,Ct)=>{a[n.value]={...a[n.value],[Z]:Ct}},V=(Z,Ct=void 0)=>ft(n.value)[Z]??Ct,dt=Z=>{a[Z]={}},it=(Z,Ct)=>{a[Z]={...Ct}},ft=Z=>(a[Z]||(a[Z]={}),a[Z]??{}),_t=Nt(()=>i?.value||s?.value||r?.value),kt=async()=>{await Promise.all([A(),m(),C()])},X=Nt(()=>n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR"?V("account","").length>0&&V("priority","").length>0&&V("issueType","").length>0&&V("summary","").length>0&&V("labels",[]).length>0:!0),J=async()=>{try{return e.value=!0,X.value&&(n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR")?await e_(v,k,I(),n.value==="RansomwareRemediation:NotifyIT"?"notifyIT":"notifyIR",ft(n.value),o.value):{errors:[w("errorCreatingJiraIssueDataMissing")],created:!1,id:"",api_link:"",key:""}}finally{e.value=!1}},ht=Nt(()=>{const Z={account:"",project:"",priority:"",labels:"",issueType:"",summary:"",description:""};if(!X.value){const Ct=T();Ct.account?.length||(Z.account=w("selectAccount")),Ct.project?.length||(Z.project=w("selectProject")),Ct.priority?.length||(Z.priority=w("selectPriority")),Ct.labels?.length||(Z.labels=w("enterOneOrMoreLabels")),Ct.issueType?.length||(Z.issueType=w("selectIssueType")),Ct.summary?.length||(Z.summary=w("enterSummary"))}return Z});return v.events.on("data",Z=>{const Ct=String(Z.detectionId);Ct&&_.value!==Ct&&(v.data&&(v.data.detectionId=Ct),_.value=Ct,kt())}),{notifyITConfig:l,notifyIRConfig:d,notifyITPriorities:p,notifyIRPriorities:g,loadData:kt,isLoading:_t,loadingError:t,hasRansomwareRemediation:R,detection:o,setWizardState:B,setWizardStateProperty:D,clearWizardStateStep:dt,setWizardStateStep:it,wizardState:n,wizardStateValues:a,getWizardStateStep:ft,getWizardStateProperty:V,isStepValid:X,createJiraIssueFromCurrentStep:J,isSaving:e,validationMessages:ht,existingTicketIT:h,existingTicketIR:u,loadExistingTickets:C}}),Es=(t,e)=>{const s=t.__vccOpts||t;for(const[i,r]of e)s[i]=r;return s},d_={},u_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function h_(t,e){return gt(),St("svg",u_,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM17.207 15.793L15.793 17.207L12 13.414L8.207 17.207L6.793 15.793L10.586 12L6.793 8.207L8.207 6.793L12 10.586L15.793 6.793L17.207 8.207L13.414 12L17.207 15.793Z"},null,-1)]))}const Cd=Es(d_,[["render",h_]]),p_={},f_={width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"};function g_(t,e){return gt(),St("svg",f_,e[0]||(e[0]=[W("g",null,[W("path",{d:"M7.5 12V8h1v4h-1ZM8 6.049A1.024 1.024 0 1 0 8 4a1.024 1.024 0 0 0 0 2.049Z"}),W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7-5.976a5.976 5.976 0 1 0 0 11.952A5.976 5.976 0 0 0 8 2.024Z"})],-1)]))}const Sd=Es(p_,[["render",g_]]),m_={},b_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function y_(t,e){return gt(),St("svg",b_,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 19H11V10H13V19ZM12 8C11.171 8 10.5 7.328 10.5 6.5C10.5 5.672 11.172 5 12 5C12.828 5 13.5 5.672 13.5 6.5C13.5 7.328 12.828 8 12 8Z"},null,-1)]))}const v_=Es(m_,[["render",y_]]),__={},w_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function x_(t,e){return gt(),St("svg",w_,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM9.242 17.295L5.453 13.506L6.867 12.092L9.242 14.467L16.497 7.212L17.911 8.626L9.242 17.295Z"},null,-1)]))}const k_=Es(__,[["render",x_]]),C_={},S_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function E_(t,e){return gt(),St("svg",S_,e[0]||(e[0]=[W("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM11 5H13V14H11V5ZM12 19C11.171 19 10.5 18.328 10.5 17.5C10.5 16.672 11.172 16 12 16C12.828 16 13.5 16.672 13.5 17.5C13.5 18.328 12.828 19 12 19Z"},null,-1)]))}const A_=Es(C_,[["render",E_]]),$_={},T_={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"};function I_(t,e){return gt(),St("svg",T_,e[0]||(e[0]=[W("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.009 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 11h2V4H9v7Zm1 4.475a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"},null,-1)]))}const L_=Es($_,[["render",I_]]),O_={},R_={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function M_(t,e){return gt(),St("svg",R_,e[0]||(e[0]=[W("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)]))}const P_=Es(O_,[["render",M_]]),D_={},z_={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function V_(t,e){return gt(),St("svg",z_,e[0]||(e[0]=[W("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)]))}const N_=Es(D_,[["render",V_]]),F_={class:"type-sm text-text-and-icons flex items-center gap-1 mb-1"},B_={class:"type-sm text-body-and-labels"},U_=Ke({__name:"ActionsPrivacyPanel",setup(t){const{t:e}=ge(ke.I18N);return(s,i)=>i[0]||(bn(-1,!0),(i[0]=W("div",{class:"bg-surface-2xl shadow-2xl p-4 border-l-2 border-medium mb-3 relative top-0 z-5 mb-6 rounded-sm"},[W("h3",F_,[Ut(q(L_),{class:"text-medium"}),W("span",null,mt(q(e)("warning")),1)]),W("p",B_,mt(q(e)("actionDataPrivacy")),1)])).cacheIndex=0,bn(1),i[0])}}),H_={class:"flex gap-1 items-center mt-2"},j_={key:0,class:"inline-block text-xs text-disabled"},W_={slot:"trigger",class:"inline-block cursor-pointer text-xs underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"},K_=["value"],q_=["content"],G_=["content"],Y_=Ke({__name:"VariablesSelector",props:{exampleDetection:{},disabled:{type:Boolean}},emits:["addVariable"],setup(t,{emit:e}){const s=ge(ke.FALCON_API),i=ge(ke.I18N),{t:r}=i,o=Ht(),n=e,a=Ht(!1),l=t,d=u=>{o?.value.hide(),u.detail.item?.value&&n("addVariable",`\${${u.detail.item?.value}}`)},h=u=>fp(s,i,u,l.exampleDetection,"---");return(u,p)=>(gt(),St("div",H_,[l.disabled?(gt(),St("span",j_,"Insert variable")):(gt(),St("sl-dropdown",{key:1,ref_key:"dropdownEl",ref:o,onSlAfterShow:p[0]||(p[0]=g=>a.value=!0),onSlAfterHide:p[1]||(p[1]=g=>a.value=!1),hoist:""},[W("a",W_,mt(q(r)("insertVariable")),1),W("sl-menu",{onSlSelect:d},[(gt(!0),St(Ie,null,Ph(q(tc),(g,v)=>(gt(),St("sl-menu-item",{key:v,value:v},[Gn(mt(v)+" ",1),l.exampleDetection&&h(v)!=="undefined"?(gt(),St("sl-tooltip",{key:0,slot:"suffix",style:{"--max-width":"90vw"},content:h(v),hoist:""},[Ut(q(Sd))],8,q_)):je("",!0)],8,K_))),128))],32)],544)),W("sl-tooltip",{content:q(r)("insertVariableTooltip")},[Ut(q(Sd))],8,G_)]))}}),Ed=Es(Y_,[["__scopeId","data-v-0be42262"]]),X_=["open"],J_={slot:"expand-icon"},Q_={slot:"collapse-icon"},Z_={class:"flex w-full justify-between gap-3",slot:"summary"},tw={class:"flex"},ew={key:0,class:"self-center pr-3"},sw=Ke({__name:"CollapsiblePanel",props:{label:{},iconComponent:{},iconProps:{},count:{},fontClass:{},open:{type:Boolean}},emits:["hide","show","after-show","after-hide"],setup(t,{emit:e}){const s=e,i=t,r=Nt(()=>i.fontClass??"type-lg-tight-medium"),{open:o=Ht(!1)}=Ch(i),n=()=>{s("show"),o.value=!0},a=()=>{s("hide"),o.value=!1};return(l,d)=>(gt(),St("sl-details",{class:"collapsible-panel",onSlShow:d[0]||(d[0]=Qe(h=>n(),["self"])),onSlHide:d[1]||(d[1]=Qe(h=>a(),["self"])),onSlAfterShow:d[2]||(d[2]=Qe(h=>l.$emit("after-show"),["self"])),onSlAfterHide:d[3]||(d[3]=Qe(h=>l.$emit("after-hide"),["self"])),open:q(o)},[W("div",J_,[Ut(q(P_))]),W("div",Q_,[Ut(q(N_))]),W("div",Z_,[W("div",tw,[i.iconComponent?(gt(),St("div",ew,[Ut(i.iconComponent,wy(sp(i.iconProps)),null,16)])):je("",!0),W("h3",{class:mr(["text-titles-and-attributes",r.value])},mt(i.label),3)]),l.count!==void 0?(gt(),St("div",{key:0,class:mr(["pr-0.5",r.value])},mt(l.count),3)):je("",!0)]),W("div",null,[bv(l.$slots,"default",{},void 0)])],40,X_))}}),iw=Es(sw,[["__scopeId","data-v-ba21779b"]]),rw={class:"p-3"},ow={key:0,class:"flex flex-row items-center justify-items-start gap-3 mb-4"},nw=["disabled"],aw=["disabled"],lw={key:1},cw={class:"text-critical type-md-medium"},dw={class:"type-sm mb-4"},uw={key:2},hw={class:"text-high type-md-medium"},pw={class:"type-sm mb-4"},fw={key:3},gw={class:"text-high type-md-medium"},mw={class:"type-sm mb-4"},bw={key:4,class:"pt-3"},yw={class:"type-md-medium text-titles-and-attributes mb-3"},vw={key:0,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},_w={class:"w-1/4 truncate"},ww={class:"type-xs text-body-and-labels"},xw={class:"type-sm text-titles-and-attributes"},kw={class:"w-1/3 truncate"},Cw={class:"type-xs text-body-and-labels"},Sw={class:"type-sm text-titles-and-attributes"},Ew={class:"truncate"},Aw={class:"type-xs text-body-and-labels"},$w={class:"type-sm text-titles-and-attributes"},Tw={key:1,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},Iw={class:"w-1/4 truncate"},Lw={class:"type-xs text-body-and-labels"},Ow={class:"type-sm text-titles-and-attributes"},Rw={class:"w-1/3 truncate"},Mw={class:"type-xs text-body-and-labels"},Pw={class:"type-sm text-titles-and-attributes"},Dw={class:"truncate"},zw={class:"type-xs text-body-and-labels"},Vw={class:"type-sm text-titles-and-attributes"},Nw=Ke({__name:"DefaultPanel",setup(t){const e=ge(ke.FALCON_API),s=Xn(),{t:i,d:r}=ge(ke.I18N),o=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIR"),s.setWizardState("RansomwareRemediation:NotifyIT")},n=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIT"),s.setWizardState("RansomwareRemediation:NotifyIR")},a=()=>{!s.notifyITConfig&&!s.notifyIRConfig?e.navigation.navigateTo({path:"/wizard",type:"internal",target:"_blank"}):s.notifyITConfig?s.notifyIRConfig||e.navigation.navigateTo({path:"/notify-ir",type:"internal",target:"_blank"}):e.navigation.navigateTo({path:"/notify-it",type:"internal",target:"_blank"})};return(l,d)=>(gt(),St("div",rw,[q(s).notifyITConfig||q(s).notifyIRConfig?(gt(),St("div",ow,[W("sl-button",{disabled:!q(s).notifyITConfig,onClick:d[0]||(d[0]=h=>o()),variant:"neutral",size:"small",slot:"trigger"},mt(q(i)("notifyIT")),9,nw),W("sl-button",{disabled:!q(s).notifyIRConfig,onClick:d[1]||(d[1]=h=>n()),variant:"neutral",size:"small",slot:"trigger"},mt(q(i)("notifyIR")),9,aw)])):je("",!0),!q(s).notifyITConfig&&!q(s).notifyIRConfig?(gt(),St("div",lw,[W("h2",cw,mt(q(i)("actionNotConfigured")),1),W("p",dw,mt(q(i)("configureActionsInAppMessage")),1),W("sl-button",{onClick:d[2]||(d[2]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},mt(q(i)("configureInApp")),1)])):q(s).notifyITConfig?q(s).notifyIRConfig?je("",!0):(gt(),St("div",fw,[W("h2",gw,mt(q(i)("notifyIRNotConfigured")),1),W("p",mw,mt(q(i)("configureNotifyIRInAppMessage")),1),W("sl-button",{onClick:d[4]||(d[4]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},mt(q(i)("configureInApp")),1)])):(gt(),St("div",uw,[W("h2",hw,mt(q(i)("notifyITNotConfigured")),1),W("p",pw,mt(q(i)("configureNotifyITInAppMessage")),1),W("sl-button",{onClick:d[3]||(d[3]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},mt(q(i)("configureInApp")),1)])),q(s).existingTicketIT||q(s).existingTicketIR?(gt(),St("div",bw,[W("h2",yw,mt(q(i)("remediationHistory")),1),q(s).existingTicketIT?(gt(),St("div",vw,[W("div",_w,[W("h3",ww,mt(q(i)("action")),1),W("p",xw,mt(q(i)("notifyIT")),1)]),W("div",kw,[W("h3",Cw,mt(q(i)("jiraTicket")),1),W("p",Sw,mt(q(s).existingTicketIT.issueKey),1)]),W("div",Ew,[W("h3",Aw,mt(q(i)("executionDate")),1),W("p",$w,mt(q(r)(new Date(q(s).existingTicketIT.creationDate),"fullDateTime")),1)])])):je("",!0),q(s).existingTicketIR?(gt(),St("div",Tw,[W("div",Iw,[W("h3",Lw,mt(q(i)("action")),1),W("p",Ow,mt(q(i)("notifyIR")),1)]),W("div",Rw,[W("h3",Mw,mt(q(i)("jiraTicket")),1),W("p",Pw,mt(q(s).existingTicketIR.issueKey),1)]),W("div",Dw,[W("h3",zw,mt(q(i)("executionDate")),1),W("p",Vw,mt(q(r)(new Date(q(s).existingTicketIR.creationDate),"fullDateTime")),1)])])):je("",!0)])):je("",!0)]))}}),Fw={class:"flex flex-col items-start justify-items-center gap-3 p-3 border-t border-lines-light"},Bw={class:"type-md-medium text-text-and-icons mb-3"},Uw={class:"w-full"},Hw=["label","value","disabled"],jw=["value"],Ww={class:"w-full"},Kw=["label","value","disabled"],qw={class:"w-full"},Gw=["label","value","disabled"],Yw={class:"w-full"},Xw={class:"w-full flex flex-row justify-end items-center gap-3"},Jw=["disabled"],Qw=["disabled","variant"],Zw={key:0,class:"mr-1 inline-block"},tx={key:1,name:"x-octagon",class:"mr-1 inline-block"},ex={key:2,name:"check-circle",class:"mr-1 inline-block"},_p=Ke({__name:"ConfigureNotify",props:{step:{}},setup(t){let e,s;const i=ge(ke.ALERTS),r=Ht(),o=Ht(),n=Ht(),a=Ht(),l=X=>{r.value=X,setTimeout(()=>{r.value=void 0},10*1e3)},{t:d}=ge(ke.I18N),h=t,u=Xn(),p=Nt(()=>h.step),g=Nt(()=>u.getWizardStateProperty("priority","")),v=Nt(()=>p.value==="RansomwareRemediation:NotifyIT"?u.notifyITPriorities:p.value==="RansomwareRemediation:NotifyIR"?u.notifyIRPriorities:[]),k=Nt(()=>p.value==="RansomwareRemediation:NotifyIT"?d("notifyIT"):p.value==="RansomwareRemediation:NotifyIR"?d("notifyIR"):""),I=Nt(()=>u.getWizardStateProperty("summary","")),_=Nt(()=>u.getWizardStateProperty("description","")),w=async X=>{const J=X?.target?.value;u.setWizardStateProperty("priority",J),kt()},A=async X=>{const J=X?.target?.value;u.setWizardStateProperty("summary",J.trim()||Y1),kt()},m=async X=>{const J=X?.target?.value;u.setWizardStateProperty("description",J.trim()),kt()},C=Nt(()=>u.isStepValid),R=Nt(()=>u.validationMessages),T=X=>{u.setWizardStateProperty("summary",`${I.value.trim()} ${X}`.trim()),o.value.focus(),kt()},B=X=>{u.setWizardStateProperty("description",`${_.value.trim()} ${X}`.trim()),n.value.focus(),kt()},D=Nt(()=>u.isLoading),V=Nt(()=>u.isSaving),dt=async()=>{u.setWizardState(p.value),p.value==="RansomwareRemediation:NotifyIT"?u.setWizardStateStep(p.value,u.notifyITConfig??{}):p.value==="RansomwareRemediation:NotifyIR"&&u.setWizardStateStep(p.value,u.notifyIRConfig??{}),kt()},it=async()=>{clearTimeout(e),s?.hide(),u.wizardState!=="RansomwareRemediation:DefaultPanel"&&(await u.loadExistingTickets(),u.setWizardState("RansomwareRemediation:DefaultPanel"))},ft=async()=>{if(kt()&&!r.value){const X=await u.createJiraIssueFromCurrentStep();X.created&&X?(l("success"),e=setTimeout(it,1e4),s=i.notify({variant:"success",message:d("jiraIssueCreated",{key:X.key,id:X.id}),backdrop:!0,position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0,it()}},!1)):(l("danger"),s=i.notify({variant:"danger",backdrop:!0,message:X.errors?.[0]??d("errorCreatingJiraIssue"),position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0}},!1))}},_t=()=>{u.setWizardState("RansomwareRemediation:DefaultPanel")},kt=()=>{const{priority:X,summary:J,description:ht}=R.value;return a.value?.setCustomValidity(X),o.value?.setCustomValidity(J),n.value?.setCustomValidity(ht),a.value?.disabled||a.value?.reportValidity(),o.value?.disabled||o.value?.reportValidity(),n?.value?.disabled||n.value?.reportValidity(),C.value};return dt(),(X,J)=>(gt(),St("div",Fw,[W("h1",Bw,mt(k.value),1),W("div",Uw,[W("sl-select",{label:q(d)("priority"),value:g.value,onSlChange:Qe(w,["self"]),placement:"bottom",disabled:D.value,ref_key:"priorityElement",ref:a},[(gt(!0),St(Ie,null,Ph(v.value,ht=>(gt(),St("sl-option",{key:ht.id,value:ht.id},mt(ht.name),9,jw))),128))],40,Hw)]),W("div",Ww,[W("sl-input",{label:q(d)("summary"),value:I.value,ref_key:"summaryElement",ref:o,onSlChange:Qe(A,["self"]),disabled:D.value},null,40,Kw),Ut(q(Ed),{onAddVariable:T,disabled:D.value,"example-detection":q(u).detection},null,8,["disabled","example-detection"])]),W("div",qw,[W("sl-textarea",{label:q(d)("description"),value:_.value,ref_key:"descriptionElement",ref:n,disabled:D.value,onSlChange:Qe(m,["self"])},null,40,Gw),Ut(q(Ed),{onAddVariable:B,disabled:D.value,"example-detection":q(u).detection},null,8,["disabled","example-detection"])]),W("div",Yw,[Ut(q(U_))]),W("div",Xw,[W("sl-button",{onClick:J[0]||(J[0]=ht=>_t()),disabled:V.value||r.value,variant:"neutral",size:"small",slot:"trigger"},mt(q(d)("cancel")),9,Jw),W("sl-button",{onClick:J[1]||(J[1]=ht=>ft()),disabled:V.value||!q(u).isStepValid,variant:r.value?r.value:"primary",size:"small",slot:"trigger"},[V.value?(gt(),St("sl-spinner",Zw)):r.value==="danger"?(gt(),St("sl-icon",tx)):r.value==="success"?(gt(),St("sl-icon",ex)):je("",!0),Gn(" "+mt(q(d)("createTicket")),1)],8,Qw)])]))}}),sx=Ke({__name:"NotifyIR",setup(t){return(e,s)=>(gt(),Rs(_p,{step:"RansomwareRemediation:NotifyIR"}))}}),ix=Ke({__name:"NotifyIT",setup(t){return(e,s)=>(gt(),Rs(_p,{step:"RansomwareRemediation:NotifyIT"}))}}),rx={class:"bg-surface-md h-full w-full overflow-y-auto max-w-full"},ox={class:"p-3"},nx={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},ax={class:"w-2/3 truncate"},lx={class:"type-xs truncate text-body-and-labels",title:"{{ t('tacticAndTechnique') }}"},cx={class:"type-sm min-h-6 text-titles-and-attributes truncate"},dx=["href","title"],ux=["href","title"],hx={class:"w-1/3 truncate"},px={class:"type-xs truncate text-body-and-labels"},fx=["title"],gx=["href"],mx={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},bx={class:"w-full truncate"},yx={class:"type-xs truncate text-body-and-labels"},vx={class:"type-sm min-h-6 text-titles-and-attributes w-full"},_x=Ke({__name:"RansomwareRemediation",setup(t){const{t:e}=ge(ke.I18N),s=Xn(),i=ge(ke.FALCON_API),r=Nt(()=>z1(s.detection)),o=Nt(()=>D1(s.detection)),n=Nt(()=>V1(s.detection)),a=l=>i.navigation.onClick(l,"_blank","falcon");return(l,d)=>(gt(),Rs(q(iw),{label:q(e)("ransomwareRemediation"),"font-class":"type-md-medium",open:!0},{default:Lh(()=>[W("div",rx,[W("div",ox,[W("div",nx,[W("div",ax,[W("dt",lx,mt(q(e)("tacticAndTechnique")),1),W("dd",cx,[W("a",{onClick:Qe(a,["stop","prevent"]),onAuxclick:Qe(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:r.value,target:"_blank",title:q(s).detection?.tactic},mt(q(s).detection?.tactic),41,dx),Gn(" "+mt(q(e)("via"))+" ",1),W("a",{onClick:Qe(a,["stop","prevent"]),onAuxclick:Qe(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:o.value,target:"_blank",title:q(s).detection?.technique},mt(q(s).detection?.technique),41,ux)])]),W("div",hx,[W("dt",px,mt(q(e)("hostname")),1),W("dd",{class:"type-sm min-h-6 text-titles-and-attributes truncate",title:q(s).detection?.device?.hostname},[W("a",{onClick:Qe(a,["stop","prevent"]),onAuxclick:Qe(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:n.value,target:"_blank"},mt(q(s).detection?.device?.hostname),41,gx)],8,fx)])]),W("div",mx,[W("div",bx,[W("dt",yx,mt(q(e)("description")),1),W("dd",vx,mt(q(e)("createAJiraTicket")),1)])])]),q(s).wizardState==="RansomwareRemediation:DefaultPanel"?(gt(),Rs(Nw,{key:0})):je("",!0),q(s).wizardState==="RansomwareRemediation:NotifyIT"?(gt(),Rs(ix,{key:1})):je("",!0),q(s).wizardState==="RansomwareRemediation:NotifyIR"?(gt(),Rs(sx,{key:2})):je("",!0)])]),_:1},8,["label"]))}}),wx=Es(_x,[["__scopeId","data-v-3673d71e"]]),xx={class:"bg-surface-lg flex h-full w-full flex-col"},kx={key:0,class:"h-full w-full flex-grow p-6 text-center"},Cx=Ke({__name:"AvailableRemediations",setup(t){const e=Xn(),s=Nt(()=>e.hasRansomwareRemediation);return Gl(()=>{e.loadData()}),(i,r)=>(gt(),St("div",xx,[q(e).isLoading?(gt(),St("div",kx,r[0]||(r[0]=[W("sl-spinner",{style:{"font-size":"3rem"}},null,-1)]))):je("",!0),s.value&&!q(e).isLoading?(gt(),Rs(wx,{key:1})):je("",!0)]))}}),Sx={class:"main-content w-full"},Ex=Ke({__name:"App",setup(t){return(e,s)=>(gt(),St("div",Sx,[Ut(Cx)]))}}),Ca=t=>t&&typeof t=="object"&&!Array.isArray(t),rl=(t,...e)=>{if(!e.length)return t;const s=e.shift();if(Ca(t)&&Ca(s))for(const i in s)Ca(s[i])?(t[i]||Object.assign(t,{[i]:{}}),rl(t[i],s[i])):Object.assign(t,{[i]:s[i]});return rl(t,...e)},_n=rl({},{en:{account:{t:0,b:{t:2,i:[{t:3}],s:"Account"}},action:{t:0,b:{t:2,i:[{t:3}],s:"Action"}},actionAppDetails:{t:0,b:{t:2,i:[{t:3}],s:"App details"}},actionButtonLabel:{t:0,b:{t:2,i:[{t:3}],s:"Actions"}},actionConfigureJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions"}},actionConfigureRemediationOptions:{t:0,b:{t:2,i:[{t:3}],s:"Configure remediation options"}},actionDataPrivacy:{t:0,b:{t:2,i:[{t:3}],s:"This action sends data out of Falcon to a system or third party that may have different security standards, privacy and data processing practices, or terms and conditions. By configuring this workflow you consent to such data transfer."}},actionNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Actions not configured"}},auditRoute:{t:0,b:{t:2,i:[{t:3}],s:"Audit"}},availableRemediationWorkflows:{t:0,b:{t:2,i:[{t:3}],s:"Available remediation workflows"}},buttonSeeDetections:{t:0,b:{t:2,i:[{t:3}],s:"See detections"}},cancel:{t:0,b:{t:2,i:[{t:3}],s:"Cancel"}},collectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"Collection not found"}},configureActionsInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:"This action does not have a configured workflow or Jira integration. Configure this workflow within the Triage app to use this action."}},configured:{t:0,b:{t:2,i:[{t:3}],s:"Configured"}},configureInApp:{t:0,b:{t:2,i:[{t:3}],s:"Configure in app"}},configureJiraActionsFollowing:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions for the following workflows"}},configureNotifyIRInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IR". Configure this workflow within the Triage app to use this action.'}},configureNotifyITInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IT". Configure this workflow within the Triage app to use this action.'}},configureTheJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure the Jira action for this remediation workflow"}},createAJiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create a Jira ticket to notify IT or IR with specific details of ransomware detections"}},createTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create Jira ticket"}},criticalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Critical"}},customObjectCollectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"collection was not found"}},description:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},detectionForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Enterprise"}},detectionForMobile:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Mobile"}},detectionsTitle:{t:0,b:{t:2,i:[{t:3}],s:"Detections"}},enterOneOrMoreLabels:{t:0,b:{t:2,i:[{t:3}],s:"Enter one or more labels"}},enterSummary:{t:0,b:{t:2,i:[{t:3}],s:"Enter a summary"}},errorConfiguringJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error configuring JIRA issue type"}},errorCreatingJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error creating the Jira issue"}},errorCreatingJiraIssueDataMissing:{t:0,b:{t:2,i:[{t:3}],s:"Jira Issue can't be created. Some information are missing."}},executionDate:{t:0,b:{t:2,i:[{t:3}],s:"Execution date"}},filterLastDay:{t:0,b:{t:2,i:[{t:3}],s:"Last day"}},filterLastHour:{t:0,b:{t:2,i:[{t:3}],s:"Last hour"}},filterLastMonth:{t:0,b:{t:2,i:[{t:3}],s:"Last 30 days"}},filterLastWeek:{t:0,b:{t:2,i:[{t:3}],s:"Last week"}},filterShowSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Show sub-techniques"}},filterShowTrend:{t:0,b:{t:2,i:[{t:3}],s:"Show trends"}},filterSwitchOff:{t:0,b:{t:2,i:[{t:3}],s:"Off"}},filterSwitchOn:{t:0,b:{t:2,i:[{t:3}],s:"On"}},highSeverity:{t:0,b:{t:2,i:[{t:3}],s:"High"}},hostname:{t:0,b:{t:2,i:[{t:3}],s:"Hostname"}},informationalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Informational"}},insertVariable:{t:0,b:{t:2,i:[{t:3}],s:"Insert variable"}},insertVariableTooltip:{t:0,b:{t:2,i:[{t:3}],s:"Insert a variable in the field that will be filled with the corresponding value from the detection"}},issueType:{t:0,b:{t:2,i:[{t:3}],s:"Issue type"}},jiraIssueConfigured:{t:0,b:{t:2,i:[{t:3}],s:"JIRA issue type configured"}},jiraIssueCreated:{t:0,b:{t:2,i:[{t:3,v:"Jira issue "},{t:4,k:"key"},{t:3,v:" has been created."}]}},jiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Jira ticket"}},labels:{t:0,b:{t:2,i:[{t:3}],s:"Labels"}},loading:{t:0,b:{t:2,i:[{t:3}],s:"Loading"}},lowSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Low"}},matrixForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Enterprise"}},matrixForMobile:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Mobile"}},mediumSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Medium"}},mitreAutoRemediationRoute:{t:0,b:{t:2,i:[{t:3}],s:"CrowdStrike Triage for MITRE ATT&CK"}},noJiraAccount:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA integration account was found"}},noJiraIssueType:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA issueType was configured for this project"}},noJiraLabels:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA labels was configured for this project"}},noJiraPriority:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA priority was configured for this project"}},noJiraProject:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA projects was configured in this account"}},noMatchingMitreDetections:{t:0,b:{t:2,i:[{t:3}],s:"No matching MITRE detections"}},notConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Not configured"}},notifyIR:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR"}},notifyIRNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR not configured"}},notifyIT:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT"}},notifyITNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT not configured"}},overviewCreated:{t:0,b:{t:2,i:[{t:3}],s:"Created"}},overviewDescription:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},overviewDetectedSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Detected sub-techniques"}},overviewLastModified:{t:0,b:{t:2,i:[{t:3}],s:"Last modified"}},overviewReadFullDescription:{t:0,b:{t:2,i:[{t:3}],s:"Read full description"}},overviewSubTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique"}},overviewSubTechniqueOf:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique of"}},overviewTitle:{t:0,b:{t:2,i:[{t:3}],s:"Overview"}},priority:{t:0,b:{t:2,i:[{t:3}],s:"Priority"}},projects:{t:0,b:{t:2,i:[{t:3}],s:"Projects"}},ransomwareRemediation:{t:0,b:{t:2,i:[{t:3}],s:"Ransomware remediation"}},remediationHistory:{t:0,b:{t:2,i:[{t:3}],s:"Remediation history"}},requiredValuesMissing:{t:0,b:{t:2,i:[{t:3}],s:"Required values are missing"}},save:{t:0,b:{t:2,i:[{t:3}],s:"Save"}},selectAccount:{t:0,b:{t:2,i:[{t:3}],s:"Select an account"}},selectIssueType:{t:0,b:{t:2,i:[{t:3}],s:"Select an issue type"}},selectPriority:{t:0,b:{t:2,i:[{t:3}],s:"Select a priority"}},selectProject:{t:0,b:{t:2,i:[{t:3}],s:"Select a project"}},subTechniquesTitle:{t:0,b:{t:2,i:[{t:3}],s:"Sub-techniques"}},summary:{t:0,b:{t:2,i:[{t:3}],s:"Summary"}},tacticAndTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Tactic & technique"}},updateYourDetection:{t:0,b:{t:2,i:[{t:3}],s:"Update your detection timeframe or ensure your organization is set up properly for endpoint detections."}},via:{t:0,b:{t:2,i:[{t:3}],s:"via"}},warning:{t:0,b:{t:2,i:[{t:3}],s:"Warning"}},workflowsConfigured:{t:0,b:{t:2,i:[{t:4,k:"configuredActions"},{t:3,v:"/"},{t:4,k:"totalActions"},{t:3,v:" workflows configured"}]}}}});function Ax(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function zr(t,e){const i=ap(Ke({extends:e})),r=document.createElement("span");i.mount(r);const o=r.innerHTML;return i.unmount(),r.remove(),o}class $x{install(e){e.provide(ke.ALERTS,this)}notify(e,s=1e4){const{variant:i,message:r,afterHide:o,backdrop:n,position:a,margin:l="var(--sl-spacing-medium)"}=e;let d="";switch(i){case"success":d=zr("success",k_);break;case"danger":d=zr("danger",Cd);break;case"warning":d=zr("warning",A_);break;case"primary":d=zr("primary",v_);break;default:d=zr("danger",Cd);break}s=s===!1||s<=0?Number.POSITIVE_INFINITY:s;const h=document.createElement("sl-alert"),u=Object.assign(h,{variant:i,closable:!0,duration:s,innerHTML:`<span slot="icon">${d}</span>${Ax(r)}`});let p;return n&&(p=document.createElement("div"),p.classList.add("sl-toast-backdrop"),document.body.append(p)),u.addEventListener("sl-after-hide",()=>{o?.(),p&&p.remove()}),document.body.append(u),u.toast(),a&&(u.classList?.add("static"),setTimeout(()=>{const g=u.base;g.style.width="max-content",g.style.margin="0",g.style.maxWidth=`calc(100% - ${l} * 2)`,g.style.maxHeight=`calc(100% - ${l} * 2)`,a.includes("top")?g.style.top=l:a.includes("middle")?g.style.top="50%":a.includes("bottom")&&(g.style.bottom=l),a.includes("left")?g.style.left=l:a.includes("center")?g.style.left="50%":a.includes("right")&&(g.style.right=l),(a.includes("center")||a.includes("middle"))&&(g.style.transform=`translate(${a.includes("center")?"-50%":"0"}, ${a.includes("middle")?"-50%":"0"})`)},10)),u}}function Tx(){return new $x}var Ix={};const _e=[];for(let t=0;t<256;++t)_e.push((t+256).toString(16).slice(1));function Lx(t,e=0){return(_e[t[e+0]]+_e[t[e+1]]+_e[t[e+2]]+_e[t[e+3]]+"-"+_e[t[e+4]]+_e[t[e+5]]+"-"+_e[t[e+6]]+_e[t[e+7]]+"-"+_e[t[e+8]]+_e[t[e+9]]+"-"+_e[t[e+10]]+_e[t[e+11]]+_e[t[e+12]]+_e[t[e+13]]+_e[t[e+14]]+_e[t[e+15]]).toLowerCase()}let Sa;const Ox=new Uint8Array(16);function Rx(){if(!Sa){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Sa=crypto.getRandomValues.bind(crypto)}return Sa(Ox)}const Mx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Ad={randomUUID:Mx};function $d(t,e,s){if(Ad.randomUUID&&!t)return Ad.randomUUID();t=t||{};const i=t.random??t.rng?.()??Rx();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Lx(i)}const Td="current";function Gt(t){if(!t.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function Px(t){return!!t?.data?.meta?.messageId}const Dx=5e3,zx=3e4,Vx=5e3;function Nx(t){return t.type==="connect"?Dx:t.type==="api"?zx:t.type==="navigateTo"?Vx:null}class Fx{constructor({onDataUpdate:e,onBroadcast:s,onLivereload:i}={}){nt(this,"onDataUpdate");nt(this,"onBroadcast");nt(this,"onLivereload");nt(this,"pendingMessages",new Map);nt(this,"targetOrigin","*");nt(this,"handleMessageWrapper",e=>this.handleMessage(e));nt(this,"handleMessage",e=>{if(!Px(e))return;const{message:s}=e.data;if(s.type==="data"){this.onDataUpdate?.(s);return}if(s.type==="broadcast"){this.onBroadcast?.(s);return}if(s.type==="livereload"){this.onLivereload?.(s);return}const{messageId:i}=e.data.meta,r=this.pendingMessages.get(i);if(!r){this.throwError("Received unexpected message");return}this.pendingMessages.delete(i),r(s.payload)});this.onDataUpdate=e,this.onBroadcast=s,this.onLivereload=i,window.addEventListener("message",this.handleMessageWrapper)}destroy(){window.removeEventListener("message",this.handleMessageWrapper)}setOrigin(e){this.targetOrigin=e}sendUnidirectionalMessage(e){const s=$d(),i={message:e,meta:{messageId:s,version:Td}};window.parent.postMessage(i,this.targetOrigin)}async postMessage(e){return new Promise((s,i)=>{const r=$d();let o;const n=Nx(e);n!==null&&(o=setTimeout(()=>{i(new Error(`Waiting for response from foundry host for "${e.type}" message (ID: ${r}) timed out after ${n}ms`))},n)),this.pendingMessages.set(r,l=>{o&&clearTimeout(o),s(l)});const a={message:e,meta:{messageId:r,version:Td}};window.parent.postMessage(a,this.targetOrigin)})}throwError(e){throw new Error(e)}}function de(t,e,s,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}const li=new WeakMap,Ri=new WeakMap,Ys=new WeakMap,wn=Symbol("anyProducer"),Id=Promise.resolve(),xn=Symbol("listenerAdded"),kn=Symbol("listenerRemoved");let Cn=!1,Ea=!1;const Sn=t=>typeof t=="string"||typeof t=="symbol"||typeof t=="number";function er(t){if(!Sn(t))throw new TypeError("`eventName` must be a string, symbol, or number")}function Wo(t){if(typeof t!="function")throw new TypeError("listener must be a function")}function sr(t,e){const s=Ri.get(t);if(s.has(e))return s.get(e)}function eo(t,e){const s=Sn(e)?e:wn,i=Ys.get(t);if(i.has(s))return i.get(s)}function Bx(t,e,s){const i=Ys.get(t);if(i.has(e))for(const r of i.get(e))r.enqueue(s);if(i.has(wn)){const r=Promise.all([e,s]);for(const o of i.get(wn))o.enqueue(r)}}function Ld(t,e){e=Array.isArray(e)?e:[e];let s=!1,i=()=>{},r=[];const o={enqueue(n){r.push(n),i()},finish(){s=!0,i()}};for(const n of e){let a=eo(t,n);a||(a=new Set,Ys.get(t).set(n,a)),a.add(o)}return{async next(){return r?r.length===0?s?(r=void 0,this.next()):(await new Promise(n=>{i=n}),this.next()):{done:!1,value:await r.shift()}:{done:!0}},async return(n){r=void 0;for(const a of e){const l=eo(t,a);l&&(l.delete(o),l.size===0&&Ys.get(t).delete(a))}return i(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function Od(t){if(t===void 0)return Rd;if(!Array.isArray(t))throw new TypeError("`methodNames` must be an array of strings");for(const e of t)if(!Rd.includes(e))throw typeof e!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${e} is not Emittery method`);return t}const or=t=>t===xn||t===kn;function Ko(t,e,s){if(or(e))try{Cn=!0,t.emit(e,s)}finally{Cn=!1}}class ji{static mixin(e,s){return s=Od(s),i=>{if(typeof i!="function")throw new TypeError("`target` must be function");for(const n of s)if(i.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function r(){return Object.defineProperty(this,e,{enumerable:!1,value:new ji}),this[e]}Object.defineProperty(i.prototype,e,{enumerable:!1,get:r});const o=n=>function(...a){return this[e][n](...a)};for(const n of s)Object.defineProperty(i.prototype,n,{enumerable:!1,value:o(n)});return i}}static get isDebugEnabled(){if(typeof Ix!="object")return Ea;const{env:e}=globalThis.process??{env:{}};return e.DEBUG==="emittery"||e.DEBUG==="*"||Ea}static set isDebugEnabled(e){Ea=e}constructor(e={}){li.set(this,new Set),Ri.set(this,new Map),Ys.set(this,new Map),Ys.get(this).set(wn,new Set),this.debug=e.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(s,i,r,o)=>{try{o=JSON.stringify(o)}catch{o=`Object with the following keys failed to stringify: ${Object.keys(o).join(",")}`}(typeof r=="symbol"||typeof r=="number")&&(r=r.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${s}][${i}] Event Name: ${r}
	data: ${o}`)})}logIfDebugEnabled(e,s,i){(ji.isDebugEnabled||this.debug.enabled)&&this.debug.logger(e,this.debug.name,s,i)}on(e,s,{signal:i}={}){Wo(s),e=Array.isArray(e)?e:[e];for(const o of e){er(o);let n=sr(this,o);n||(n=new Set,Ri.get(this).set(o,n)),n.add(s),this.logIfDebugEnabled("subscribe",o,void 0),or(o)||Ko(this,xn,{eventName:o,listener:s})}const r=()=>{this.off(e,s),i?.removeEventListener("abort",r)};return i?.addEventListener("abort",r,{once:!0}),i?.aborted&&r(),r}off(e,s){Wo(s),e=Array.isArray(e)?e:[e];for(const i of e){er(i);const r=sr(this,i);r&&(r.delete(s),r.size===0&&Ri.get(this).delete(i)),this.logIfDebugEnabled("unsubscribe",i,void 0),or(i)||Ko(this,kn,{eventName:i,listener:s})}}once(e,s){if(s!==void 0&&typeof s!="function")throw new TypeError("predicate must be a function");let i;const r=new Promise(o=>{i=this.on(e,n=>{s&&!s(n)||(i(),o(n))})});return r.off=i,r}events(e){e=Array.isArray(e)?e:[e];for(const s of e)er(s);return Ld(this,e)}async emit(e,s){if(er(e),or(e)&&!Cn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",e,s),Bx(this,e,s);const i=sr(this,e)??new Set,r=li.get(this),o=[...i],n=or(e)?[]:[...r];await Id,await Promise.all([...o.map(async a=>{if(i.has(a))return a(s)}),...n.map(async a=>{if(r.has(a))return a(e,s)})])}async emitSerial(e,s){if(er(e),or(e)&&!Cn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",e,s);const i=sr(this,e)??new Set,r=li.get(this),o=[...i],n=[...r];await Id;for(const a of o)i.has(a)&&await a(s);for(const a of n)r.has(a)&&await a(e,s)}onAny(e,{signal:s}={}){Wo(e),this.logIfDebugEnabled("subscribeAny",void 0,void 0),li.get(this).add(e),Ko(this,xn,{listener:e});const i=()=>{this.offAny(e),s?.removeEventListener("abort",i)};return s?.addEventListener("abort",i,{once:!0}),s?.aborted&&i(),i}anyEvent(){return Ld(this)}offAny(e){Wo(e),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),Ko(this,kn,{listener:e}),li.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];for(const s of e)if(this.logIfDebugEnabled("clear",s,void 0),Sn(s)){const i=sr(this,s);i&&i.clear();const r=eo(this,s);if(r){for(const o of r)o.finish();r.clear()}}else{li.get(this).clear();for(const[i,r]of Ri.get(this).entries())r.clear(),Ri.get(this).delete(i);for(const[i,r]of Ys.get(this).entries()){for(const o of r)o.finish();r.clear(),Ys.get(this).delete(i)}}}listenerCount(e){e=Array.isArray(e)?e:[e];let s=0;for(const i of e){if(Sn(i)){s+=li.get(this).size+(sr(this,i)?.size??0)+(eo(this,i)?.size??0)+(eo(this)?.size??0);continue}i!==void 0&&er(i),s+=li.get(this).size;for(const r of Ri.get(this).values())s+=r.size;for(const r of Ys.get(this).values())s+=r.size}return s}bindMethods(e,s){if(typeof e!="object"||e===null)throw new TypeError("`target` must be an object");s=Od(s);for(const i of s){if(e[i]!==void 0)throw new Error(`The property \`${i}\` already exists on \`target\``);Object.defineProperty(e,i,{enumerable:!1,value:this[i].bind(this)})}}}const Rd=Object.getOwnPropertyNames(ji.prototype).filter(t=>t!=="constructor");Object.defineProperty(ji,"listenerAdded",{value:xn,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(ji,"listenerRemoved",{value:kn,writable:!1,enumerable:!0,configurable:!1});function ue(t){let e,s,i;return e=t,(r,o,n)=>{if(n.value!=null)n.value=Md(n.value,e,s,i);else if(n.get!=null)n.get=Md(n.get,e,s,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Aa=new Map;function Md(t,e,s=0,i){const r=Symbol("__memoized_map__");return function(...o){let n;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[r];if(Array.isArray(i))for(const l of i)Aa.has(l)?Aa.get(l).push(a):Aa.set(l,[a]);if(e||o.length>0||s>0){let l;e===!0?l=o.map(u=>u.toString()).join("!"):e?l=e.apply(this,o):l=o[0];const d=`${l}__timestamp`;let h=!1;if(s>0)if(!a.has(d))h=!0;else{let u=a.get(d);h=Date.now()-u>s}a.has(l)&&!h?n=a.get(l):(n=t.apply(this,o),a.set(l,n),s>0&&a.set(d,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=t.apply(this,o),a.set(l,n))}return n}}class Ux{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV1(e={}){console.warn("This method is deprecated. Use getQueriesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV2(e={}){const s={type:"api",api:"alerts",method:"getQueriesAlertsV2",payload:{params:e}};return this.bridge.postMessage(s)}async patchCombinedAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchCombinedAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchCombinedAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchCombinedAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchEntitiesAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postAggregatesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postAggregatesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postEntitiesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Hx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesResourcesCountByManagedByV1(e={}){const s={type:"api",api:"cloudSecurityAssets",method:"getAggregatesResourcesCountByManagedByV1",payload:{params:e}};return this.bridge.postMessage(s)}}class jx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCloudSecurityRegistrationAwsCombinedAccountsV1(e={}){const s={type:"api",api:"cloudregistration",method:"getCloudSecurityRegistrationAwsCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}}class Wx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesClustersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesClustersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersGroupByManagedV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersGroupByManagedV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersSensorCoverageV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersSensorCoverageV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesImagesCountByStateV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesImagesCountByStateV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesNodesCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesNodesCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesPodsCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesPodsCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesUnidentifiedContainersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesUnidentifiedContainersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getCombinedClustersV1(e={}){const s={type:"api",api:"containerSecurity",method:"getCombinedClustersV1",payload:{params:e}};return this.bridge.postMessage(s)}}class Kx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1(e={}){const s={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1(e={}){const s={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}}class qx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1Collections(e={}){const s={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjects(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:e}};return this.bridge.postMessage(s)}async postV1CollectionsCollectionNameObjects(e,s={}){const i={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putV1CollectionsCollectionNameObjectsObjectKey(e,s={}){const i={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Gx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV1(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDetectsGetV1(e,s={}){const i={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSummariesGetV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Yx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesBucketsV1(e){const s={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesFgaTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesDevicesV1(e){const s={type:"api",api:"devices",method:"getEntitiesDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFgaGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAvailableGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesHiddenV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV1(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFgaGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDevicesTagsV2(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesDevicesV1(e,s){const i={type:"api",api:"devices",method:"patchEntitiesDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDevicesGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesFgaHostsGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedDevicesLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedFgaHostsLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesHiddenActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV1(e,s){const i={type:"api",api:"devices",method:"postEntitiesDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV2(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupActionsV1(e,s){const i={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Xx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionV1(e){const s={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecutionV1(e,s={}){const i={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Jx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesEventsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFirewallFieldsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsDetailsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPlatformsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRulesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesEventsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFirewallFieldsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesNetworkLocationsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPlatformsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPolicyRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesEventsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesPolicyRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRuleGroupsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsMetadataV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsPrecedenceV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesOntologyV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRulesValidateFilepathV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesPoliciesV2(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Qx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(e={}){const s={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesBehaviorsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesIncidentsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postAggregatesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentActionsV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Zx{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesSavedSearchesV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesSavedSearchesExecuteV1(e,s={}){const i={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class t2{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(e={}){const s={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:e}};return this.bridge.postMessage(s)}}class e2{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesConfigsV1(e={}){const s={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesDefinitionsV1(e){const s={type:"api",api:"plugins",method:"getEntitiesDefinitionsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteDraftV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class s2{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesRegistriesCountByStateV1(e={}){const s={type:"api",api:"registryAssessment",method:"getAggregatesRegistriesCountByStateV1",payload:{params:e}};return this.bridge.postMessage(s)}}class i2{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(e){const s={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesAppCommandV1(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPutFilesV2(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPutFilesV1(e={}){const s={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesAppCommandV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAppSessionsV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class r2{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getQueriesUsersV1(e={}){const s={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesUsersGetV1(e,s={}){const i={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class o2{constructor(e){nt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(e){const s={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecutionActionsV1(e,s){const i={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class fe{constructor(e){nt(this,"api");this.api=e}get alerts(){return Gt(this.api),new Ux(this.api.bridge)}get detects(){return Gt(this.api),new Gx(this.api.bridge)}get devices(){return Gt(this.api),new Yx(this.api.bridge)}get fwmgr(){return Gt(this.api),new Jx(this.api.bridge)}get incidents(){return Gt(this.api),new Qx(this.api.bridge)}get mitre(){return Gt(this.api),new t2(this.api.bridge)}get plugins(){return Gt(this.api),new e2(this.api.bridge)}get remoteResponse(){return Gt(this.api),new i2(this.api.bridge)}get userManagement(){return Gt(this.api),new r2(this.api.bridge)}get workflows(){return Gt(this.api),new o2(this.api.bridge)}get cloudSecurityAssets(){return Gt(this.api),new Hx(this.api.bridge)}get cloudregistration(){return Gt(this.api),new jx(this.api.bridge)}get containerSecurity(){return Gt(this.api),new Wx(this.api.bridge)}get cspmRegistration(){return Gt(this.api),new Kx(this.api.bridge)}get customobjects(){return Gt(this.api),new qx(this.api.bridge)}get faasGateway(){return Gt(this.api),new Xx(this.api.bridge)}get loggingapi(){return Gt(this.api),new Zx(this.api.bridge)}get registryAssessment(){return Gt(this.api),new s2(this.api.bridge)}}de([ue()],fe.prototype,"alerts",null);de([ue()],fe.prototype,"detects",null);de([ue()],fe.prototype,"devices",null);de([ue()],fe.prototype,"fwmgr",null);de([ue()],fe.prototype,"incidents",null);de([ue()],fe.prototype,"mitre",null);de([ue()],fe.prototype,"plugins",null);de([ue()],fe.prototype,"remoteResponse",null);de([ue()],fe.prototype,"userManagement",null);de([ue()],fe.prototype,"workflows",null);de([ue()],fe.prototype,"cloudSecurityAssets",null);de([ue()],fe.prototype,"cloudregistration",null);de([ue()],fe.prototype,"containerSecurity",null);de([ue()],fe.prototype,"cspmRegistration",null);de([ue()],fe.prototype,"customobjects",null);de([ue()],fe.prototype,"faasGateway",null);de([ue()],fe.prototype,"loggingapi",null);de([ue()],fe.prototype,"registryAssessment",null);class n2{constructor(e,s){nt(this,"falcon");nt(this,"definition");this.falcon=e,this.definition=s}async execute({request:e}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:e}]})}}const ls=class ls{constructor(e,s){nt(this,"falcon");nt(this,"definition");nt(this,"pollTimeout",500);nt(this,"intervalId");this.falcon=e,this.definition=s}async execute({path:e,method:s,body:i,params:r}){const o="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...o,payload:{path:e,method:s,body:i,params:r}});return new Promise((a,l)=>{const d=n?.resources?.[0];d?.execution_id?this.pollForResult({resolve:a,reject:l,executionId:d?.execution_id}):l(n?.errors)})}async getExecutionResult(e){return(await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:e}))?.resources?.[0]?.payload}pollForResult({resolve:e,reject:s,executionId:i}){let r=2;this.intervalId=window.setInterval(async()=>{try{const o=await this.getExecutionResult(i);o&&(window.clearInterval(this.intervalId),e(o))}catch(o){r<=0&&(window.clearInterval(this.intervalId),s(o)),r--}},this.pollTimeout)}path(e){const s=new URL(e,"http://localhost"),i=s.pathname,r=[...s.searchParams.entries()].reduce((o,[n,a])=>({...o,[n]:[a]}),{});return{path:i,queryParams:r,get:async(o={})=>this.get({path:i,params:{query:o?.query??r??{},header:o?.header??{}}}),post:async(o,n={})=>this.post({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),patch:async(o,n={})=>this.patch({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),put:async(o,n={})=>this.put({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),delete:async(o,n={})=>this.delete({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o})}}async get({path:e,params:s}){return this.execute({path:e,method:ls.GET,params:s})}async post({path:e,params:s,body:i}){return this.execute({path:e,method:ls.POST,body:i,params:s})}async patch({path:e,params:s,body:i}){return this.execute({path:e,method:ls.PATCH,body:i,params:s})}async put({path:e,params:s,body:i}){return this.execute({path:e,method:ls.PUT,body:i,params:s})}async delete({path:e,params:s,body:i}){return this.execute({path:e,method:ls.DELETE,body:i,params:s})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};nt(ls,"GET","GET"),nt(ls,"POST","POST"),nt(ls,"PATCH","PATCH"),nt(ls,"PUT","PUT"),nt(ls,"DELETE","DELETE");let ol=ls;class a2{constructor(e,s){nt(this,"falcon");nt(this,"definition");this.falcon=e,this.definition=s}async write(e,s){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:e,collection:this.definition.collection,data:s}})}async read(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:e,collection:this.definition.collection}})}async delete(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:e,collection:this.definition.collection}})}async search({filter:e,offset:s,sort:i,limit:r}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:e,limit:r,offset:s,sort:i,collection:this.definition.collection}})}async list(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"list",collection:this.definition.collection,start:e?.start,end:e?.end,limit:e?.limit}})}}class l2{constructor(e){nt(this,"falcon");this.falcon=e}async write(e,s){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:e,tag:s?.tag,tagSource:s?.tagSource,testData:s?.testData}})}async query(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:e}})}async savedQuery(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:e}})}}const c2=["_self","_blank"];class d2{constructor(e){nt(this,"falcon");this.falcon=e}async navigateTo({path:e,type:s,target:i,metaKey:r,ctrlKey:o,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:e,type:s??"falcon",target:i??"_self",metaKey:r??!1,ctrlKey:o??!1,shiftKey:n??!1}})}async onClick(e,s="_self",i="falcon"){if(!(e instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in e)||!(e.target instanceof HTMLAnchorElement))return;e.preventDefault();const r=e.target.getAttribute("href");s=e.target.getAttribute("target")??s;const o=e.target.dataset?.type??i;if(s===null||!c2.includes(s))throw new Error("Target should be _self or _blank");const n=s;if(r==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:d}=e;await this.navigateTo({path:r,type:o,target:n,metaKey:a,ctrlKey:l,shiftKey:d})}}class u2{constructor(e){nt(this,"bridge");nt(this,"observer");this.bridge=e,this.observer=new ResizeObserver(s=>this.handleResizeEvent(s)),this.observer.observe(document.body)}handleResizeEvent(e){const{height:s}=e[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:s}})}destroy(){this.observer.disconnect()}}class h2{constructor(e){nt(this,"bridge");this.bridge=e}async openModal(e,s,i={}){const r=await this.bridge.postMessage({type:"openModal",payload:{extension:e,title:s,options:i}});if(r instanceof Error)throw r;return r}closeModal(e){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:e})}async uploadFile(e,s){return this.bridge.postMessage({type:"fileUpload",fileUploadType:e,payload:s})}}class ec{constructor(){nt(this,"isConnected",!1);nt(this,"events",new ji);nt(this,"data");nt(this,"bridge",new Fx({onDataUpdate:e=>this.handleDataUpdate(e),onBroadcast:e=>this.handleBroadcastMessage(e),onLivereload:()=>this.handleLivereloadMessage()}));nt(this,"api",new fe(this));nt(this,"ui",new h2(this.bridge));nt(this,"resizeTracker");nt(this,"cloudFunctions",[]);nt(this,"apiIntegrations",[]);nt(this,"collections",[])}async connect(){const e=await this.bridge.postMessage({type:"connect"});if(e!==void 0){const{data:s,origin:i}=e;this.bridge.setOrigin(i),this.data=s,this.updateTheme(s?.theme),this.isConnected=!0}return this.resizeTracker=new u2(this.bridge),e}get appId(){return this.data?.app.id}sendBroadcast(e){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:e})}handleDataUpdate(e){this.data=e.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(e){this.events.emit("broadcast",e.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(e){if(!e)return;const s=e==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(e),document.documentElement.classList.remove(s)}cloudFunction(e){Gt(this);const s=new ol(this,e);return this.cloudFunctions.push(s),s}apiIntegration({definitionId:e,operationId:s}){if(Gt(this),!this.data)throw Error("Data from console is missing");const i=new n2(this,{operationId:s,definitionId:e});return this.apiIntegrations.push(i),i}collection({collection:e}){Gt(this);const s=new a2(this,{collection:e});return this.collections.push(s),s}get navigation(){return Gt(this),new d2(this)}get logscale(){return Gt(this),new l2(this)}destroy(){this.cloudFunctions.forEach(e=>e.destroy()),this.resizeTracker?.destroy(),this.bridge.destroy()}}de([ue()],ec.prototype,"navigation",null);de([ue()],ec.prototype,"logscale",null);const p2={};class f2{constructor(){this.falcon=void 0}install(e){this.falcon=new ec,e.provide(ke.FALCON_API,this.falcon),e.provide(ke.FALCON_API_GET_ORIGINS,()=>this.getOrigin()),e.provide(ke.FALCON_API_GET_APP_ID,()=>this.getAppId())}async connect(){try{await this.falcon?.connect()}catch(e){console.error(e)}}getOrigin(){const{targetOrigin:e}=this.falcon?.bridge;return e||self.location.origin}getAppId(){return this.falcon?.data?.app?.id??p2.app_id}get data(){return{cid:String(this.falcon?.data?.cid??""),dateFormat:"MMM. D, YYYY",locale:"en-us",theme:"theme-dark",timezone:"UTC",...this.falcon?.data}}}function g2(){return new f2}/*!
  * shared v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function m2(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const En=typeof window<"u",Ci=(t,e=!1)=>e?Symbol.for(t):Symbol(t),b2=(t,e,s)=>y2({l:t,k:e,s}),y2=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),le=t=>typeof t=="number"&&isFinite(t),v2=t=>ic(t)==="[object Date]",An=t=>ic(t)==="[object RegExp]",Jn=t=>Et(t)&&Object.keys(t).length===0,me=Object.assign,_2=Object.create,Dt=(t=null)=>_2(t);let Pd;const sc=()=>Pd||(Pd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Dt());function Dd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function zd(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w2(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,o)=>`${r}="${zd(o)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,o)=>`${r}='${zd(o)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const x2=Object.prototype.hasOwnProperty;function gs(t,e){return x2.call(t,e)}const oe=Array.isArray,Yt=t=>typeof t=="function",Q=t=>typeof t=="string",Xt=t=>typeof t=="boolean",It=t=>t!==null&&typeof t=="object",k2=t=>It(t)&&Yt(t.then)&&Yt(t.catch),wp=Object.prototype.toString,ic=t=>wp.call(t),Et=t=>ic(t)==="[object Object]",C2=t=>t==null?"":oe(t)||Et(t)&&t.toString===wp?JSON.stringify(t,null,2):String(t);function rc(t,e=""){return t.reduce((s,i,r)=>r===0?s+i:s+e+i,"")}const qo=t=>!It(t)||oe(t);function sn(t,e){if(qo(t)||qo(e))throw new Error("Invalid value");const s=[{src:t,des:e}];for(;s.length;){const{src:i,des:r}=s.pop();Object.keys(i).forEach(o=>{o!=="__proto__"&&(It(i[o])&&!It(r[o])&&(r[o]=Array.isArray(i[o])?[]:Dt()),qo(r[o])||qo(i[o])?r[o]=i[o]:s.push({src:i[o],des:r[o]}))})}}/*!
  * message-compiler v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function S2(t,e,s){return{line:t,column:e,offset:s}}function nl(t,e,s){return{start:t,end:e}}const Pt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},E2=17;function Qn(t,e,s={}){const{domain:i,messages:r,args:o}=s,n=t,a=new SyntaxError(String(n));return a.code=t,e&&(a.location=e),a.domain=i,a}function A2(t){throw t}const Ks=" ",$2="\r",ze=`
`,T2="\u2028",I2="\u2029";function L2(t){const e=t;let s=0,i=1,r=1,o=0;const n=T=>e[T]===$2&&e[T+1]===ze,a=T=>e[T]===ze,l=T=>e[T]===I2,d=T=>e[T]===T2,h=T=>n(T)||a(T)||l(T)||d(T),u=()=>s,p=()=>i,g=()=>r,v=()=>o,k=T=>n(T)||l(T)||d(T)?ze:e[T],I=()=>k(s),_=()=>k(s+o);function w(){return o=0,h(s)&&(i++,r=0),n(s)&&s++,s++,r++,e[s]}function A(){return n(s+o)&&o++,o++,e[s+o]}function m(){s=0,i=1,r=1,o=0}function C(T=0){o=T}function R(){const T=s+o;for(;T!==s;)w();o=0}return{index:u,line:p,column:g,peekOffset:v,charAt:k,currentChar:I,currentPeek:_,next:w,peek:A,reset:m,resetPeek:C,skipToPeek:R}}const ci=void 0,O2=".",Vd="'",R2="tokenizer";function M2(t,e={}){const s=e.location!==!1,i=L2(t),r=()=>i.index(),o=()=>S2(i.line(),i.column(),i.index()),n=o(),a=r(),l={currentType:13,offset:a,startLoc:n,endLoc:n,lastType:13,lastOffset:a,lastStartLoc:n,lastEndLoc:n,braceNest:0,inLinked:!1,text:""},d=()=>l,{onError:h}=e;function u(b,y,$,...O){const G=d();if(y.column+=$,y.offset+=$,h){const z=s?nl(G.startLoc,y):null,E=Qn(b,z,{domain:R2,args:O});h(E)}}function p(b,y,$){b.endLoc=o(),b.currentType=y;const O={type:y};return s&&(O.loc=nl(b.startLoc,b.endLoc)),$!=null&&(O.value=$),O}const g=b=>p(b,13);function v(b,y){return b.currentChar()===y?(b.next(),y):(u(Pt.EXPECTED_TOKEN,o(),0,y),"")}function k(b){let y="";for(;b.currentPeek()===Ks||b.currentPeek()===ze;)y+=b.currentPeek(),b.peek();return y}function I(b){const y=k(b);return b.skipToPeek(),y}function _(b){if(b===ci)return!1;const y=b.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function w(b){if(b===ci)return!1;const y=b.charCodeAt(0);return y>=48&&y<=57}function A(b,y){const{currentType:$}=y;if($!==2)return!1;k(b);const O=_(b.currentPeek());return b.resetPeek(),O}function m(b,y){const{currentType:$}=y;if($!==2)return!1;k(b);const O=b.currentPeek()==="-"?b.peek():b.currentPeek(),G=w(O);return b.resetPeek(),G}function C(b,y){const{currentType:$}=y;if($!==2)return!1;k(b);const O=b.currentPeek()===Vd;return b.resetPeek(),O}function R(b,y){const{currentType:$}=y;if($!==7)return!1;k(b);const O=b.currentPeek()===".";return b.resetPeek(),O}function T(b,y){const{currentType:$}=y;if($!==8)return!1;k(b);const O=_(b.currentPeek());return b.resetPeek(),O}function B(b,y){const{currentType:$}=y;if(!($===7||$===11))return!1;k(b);const O=b.currentPeek()===":";return b.resetPeek(),O}function D(b,y){const{currentType:$}=y;if($!==9)return!1;const O=()=>{const z=b.currentPeek();return z==="{"?_(b.peek()):z==="@"||z==="|"||z===":"||z==="."||z===Ks||!z?!1:z===ze?(b.peek(),O()):dt(b,!1)},G=O();return b.resetPeek(),G}function V(b){k(b);const y=b.currentPeek()==="|";return b.resetPeek(),y}function dt(b,y=!0){const $=(G=!1,z="")=>{const E=b.currentPeek();return E==="{"||E==="@"||!E?G:E==="|"?!(z===Ks||z===ze):E===Ks?(b.peek(),$(!0,Ks)):E===ze?(b.peek(),$(!0,ze)):!0},O=$();return y&&b.resetPeek(),O}function it(b,y){const $=b.currentChar();return $===ci?ci:y($)?(b.next(),$):null}function ft(b){const y=b.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function _t(b){return it(b,ft)}function kt(b){const y=b.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function X(b){return it(b,kt)}function J(b){const y=b.charCodeAt(0);return y>=48&&y<=57}function ht(b){return it(b,J)}function Z(b){const y=b.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function Ct(b){return it(b,Z)}function Ue(b){let y="",$="";for(;y=ht(b);)$+=y;return $}function re(b){let y="";for(;;){const $=b.currentChar();if($==="{"||$==="}"||$==="@"||$==="|"||!$)break;if($===Ks||$===ze)if(dt(b))y+=$,b.next();else{if(V(b))break;y+=$,b.next()}else y+=$,b.next()}return y}function ni(b){I(b);let y="",$="";for(;y=X(b);)$+=y;return b.currentChar()===ci&&u(Pt.UNTERMINATED_CLOSING_BRACE,o(),0),$}function Ai(b){I(b);let y="";return b.currentChar()==="-"?(b.next(),y+=`-${Ue(b)}`):y+=Ue(b),b.currentChar()===ci&&u(Pt.UNTERMINATED_CLOSING_BRACE,o(),0),y}function Ji(b){return b!==Vd&&b!==ze}function ps(b){I(b),v(b,"'");let y="",$="";for(;y=it(b,Ji);)y==="\\"?$+=As(b):$+=y;const O=b.currentChar();return O===ze||O===ci?(u(Pt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,o(),0),O===ze&&(b.next(),v(b,"'")),$):(v(b,"'"),$)}function As(b){const y=b.currentChar();switch(y){case"\\":case"'":return b.next(),`\\${y}`;case"u":return Ae(b,y,4);case"U":return Ae(b,y,6);default:return u(Pt.UNKNOWN_ESCAPE_SEQUENCE,o(),0,y),""}}function Ae(b,y,$){v(b,y);let O="";for(let G=0;G<$;G++){const z=Ct(b);if(!z){u(Pt.INVALID_UNICODE_ESCAPE_SEQUENCE,o(),0,`\\${y}${O}${b.currentChar()}`);break}O+=z}return`\\${y}${O}`}function ai(b){return b!=="{"&&b!=="}"&&b!==Ks&&b!==ze}function fs(b){I(b);let y="",$="";for(;y=it(b,ai);)$+=y;return $}function Qi(b){let y="",$="";for(;y=_t(b);)$+=y;return $}function x(b){const y=$=>{const O=b.currentChar();return O==="{"||O==="@"||O==="|"||O==="("||O===")"||!O||O===Ks?$:($+=O,b.next(),y($))};return y("")}function S(b){I(b);const y=v(b,"|");return I(b),y}function M(b,y){let $=null;switch(b.currentChar()){case"{":return y.braceNest>=1&&u(Pt.NOT_ALLOW_NEST_PLACEHOLDER,o(),0),b.next(),$=p(y,2,"{"),I(b),y.braceNest++,$;case"}":return y.braceNest>0&&y.currentType===2&&u(Pt.EMPTY_PLACEHOLDER,o(),0),b.next(),$=p(y,3,"}"),y.braceNest--,y.braceNest>0&&I(b),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),$;case"@":return y.braceNest>0&&u(Pt.UNTERMINATED_CLOSING_BRACE,o(),0),$=H(b,y)||g(y),y.braceNest=0,$;default:{let G=!0,z=!0,E=!0;if(V(b))return y.braceNest>0&&u(Pt.UNTERMINATED_CLOSING_BRACE,o(),0),$=p(y,1,S(b)),y.braceNest=0,y.inLinked=!1,$;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return u(Pt.UNTERMINATED_CLOSING_BRACE,o(),0),y.braceNest=0,N(b,y);if(G=A(b,y))return $=p(y,4,ni(b)),I(b),$;if(z=m(b,y))return $=p(y,5,Ai(b)),I(b),$;if(E=C(b,y))return $=p(y,6,ps(b)),I(b),$;if(!G&&!z&&!E)return $=p(y,12,fs(b)),u(Pt.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,$.value),I(b),$;break}}return $}function H(b,y){const{currentType:$}=y;let O=null;const G=b.currentChar();switch(($===7||$===8||$===11||$===9)&&(G===ze||G===Ks)&&u(Pt.INVALID_LINKED_FORMAT,o(),0),G){case"@":return b.next(),O=p(y,7,"@"),y.inLinked=!0,O;case".":return I(b),b.next(),p(y,8,".");case":":return I(b),b.next(),p(y,9,":");default:return V(b)?(O=p(y,1,S(b)),y.braceNest=0,y.inLinked=!1,O):R(b,y)||B(b,y)?(I(b),H(b,y)):T(b,y)?(I(b),p(y,11,Qi(b))):D(b,y)?(I(b),G==="{"?M(b,y)||O:p(y,10,x(b))):($===7&&u(Pt.INVALID_LINKED_FORMAT,o(),0),y.braceNest=0,y.inLinked=!1,N(b,y))}}function N(b,y){let $={type:13};if(y.braceNest>0)return M(b,y)||g(y);if(y.inLinked)return H(b,y)||g(y);switch(b.currentChar()){case"{":return M(b,y)||g(y);case"}":return u(Pt.UNBALANCED_CLOSING_BRACE,o(),0),b.next(),p(y,3,"}");case"@":return H(b,y)||g(y);default:{if(V(b))return $=p(y,1,S(b)),y.braceNest=0,y.inLinked=!1,$;if(dt(b))return p(y,0,re(b));break}}return $}function U(){const{currentType:b,offset:y,startLoc:$,endLoc:O}=l;return l.lastType=b,l.lastOffset=y,l.lastStartLoc=$,l.lastEndLoc=O,l.offset=r(),l.startLoc=o(),i.currentChar()===ci?p(l,13):N(i,l)}return{nextToken:U,currentOffset:r,currentPosition:o,context:d}}const P2="parser",D2=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function z2(t,e,s){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||s,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function V2(t={}){const e=t.location!==!1,{onError:s}=t;function i(_,w,A,m,...C){const R=_.currentPosition();if(R.offset+=m,R.column+=m,s){const T=e?nl(A,R):null,B=Qn(w,T,{domain:P2,args:C});s(B)}}function r(_,w,A){const m={type:_};return e&&(m.start=w,m.end=w,m.loc={start:A,end:A}),m}function o(_,w,A,m){e&&(_.end=w,_.loc&&(_.loc.end=A))}function n(_,w){const A=_.context(),m=r(3,A.offset,A.startLoc);return m.value=w,o(m,_.currentOffset(),_.currentPosition()),m}function a(_,w){const A=_.context(),{lastOffset:m,lastStartLoc:C}=A,R=r(5,m,C);return R.index=parseInt(w,10),_.nextToken(),o(R,_.currentOffset(),_.currentPosition()),R}function l(_,w){const A=_.context(),{lastOffset:m,lastStartLoc:C}=A,R=r(4,m,C);return R.key=w,_.nextToken(),o(R,_.currentOffset(),_.currentPosition()),R}function d(_,w){const A=_.context(),{lastOffset:m,lastStartLoc:C}=A,R=r(9,m,C);return R.value=w.replace(D2,z2),_.nextToken(),o(R,_.currentOffset(),_.currentPosition()),R}function h(_){const w=_.nextToken(),A=_.context(),{lastOffset:m,lastStartLoc:C}=A,R=r(8,m,C);return w.type!==11?(i(_,Pt.UNEXPECTED_EMPTY_LINKED_MODIFIER,A.lastStartLoc,0),R.value="",o(R,m,C),{nextConsumeToken:w,node:R}):(w.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Ts(w)),R.value=w.value||"",o(R,_.currentOffset(),_.currentPosition()),{node:R})}function u(_,w){const A=_.context(),m=r(7,A.offset,A.startLoc);return m.value=w,o(m,_.currentOffset(),_.currentPosition()),m}function p(_){const w=_.context(),A=r(6,w.offset,w.startLoc);let m=_.nextToken();if(m.type===8){const C=h(_);A.modifier=C.node,m=C.nextConsumeToken||_.nextToken()}switch(m.type!==9&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(m)),m=_.nextToken(),m.type===2&&(m=_.nextToken()),m.type){case 10:m.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(m)),A.key=u(_,m.value||"");break;case 4:m.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(m)),A.key=l(_,m.value||"");break;case 5:m.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(m)),A.key=a(_,m.value||"");break;case 6:m.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(m)),A.key=d(_,m.value||"");break;default:{i(_,Pt.UNEXPECTED_EMPTY_LINKED_KEY,w.lastStartLoc,0);const C=_.context(),R=r(7,C.offset,C.startLoc);return R.value="",o(R,C.offset,C.startLoc),A.key=R,o(A,C.offset,C.startLoc),{nextConsumeToken:m,node:A}}}return o(A,_.currentOffset(),_.currentPosition()),{node:A}}function g(_){const w=_.context(),A=w.currentType===1?_.currentOffset():w.offset,m=w.currentType===1?w.endLoc:w.startLoc,C=r(2,A,m);C.items=[];let R=null;do{const D=R||_.nextToken();switch(R=null,D.type){case 0:D.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(n(_,D.value||""));break;case 5:D.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(a(_,D.value||""));break;case 4:D.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(l(_,D.value||""));break;case 6:D.value==null&&i(_,Pt.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Ts(D)),C.items.push(d(_,D.value||""));break;case 7:{const V=p(_);C.items.push(V.node),R=V.nextConsumeToken||null;break}}}while(w.currentType!==13&&w.currentType!==1);const T=w.currentType===1?w.lastOffset:_.currentOffset(),B=w.currentType===1?w.lastEndLoc:_.currentPosition();return o(C,T,B),C}function v(_,w,A,m){const C=_.context();let R=m.items.length===0;const T=r(1,w,A);T.cases=[],T.cases.push(m);do{const B=g(_);R||(R=B.items.length===0),T.cases.push(B)}while(C.currentType!==13);return R&&i(_,Pt.MUST_HAVE_MESSAGES_IN_PLURAL,A,0),o(T,_.currentOffset(),_.currentPosition()),T}function k(_){const w=_.context(),{offset:A,startLoc:m}=w,C=g(_);return w.currentType===13?C:v(_,A,m,C)}function I(_){const w=M2(_,me({},t)),A=w.context(),m=r(0,A.offset,A.startLoc);return e&&m.loc&&(m.loc.source=_),m.body=k(w),t.onCacheKey&&(m.cacheKey=t.onCacheKey(_)),A.currentType!==13&&i(w,Pt.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,_[A.offset]||""),o(m,w.currentOffset(),w.currentPosition()),m}return{parse:I}}function Ts(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function N2(t,e={}){const s={ast:t,helpers:new Set};return{context:()=>s,helper:o=>(s.helpers.add(o),o)}}function Nd(t,e){for(let s=0;s<t.length;s++)oc(t[s],e)}function oc(t,e){switch(t.type){case 1:Nd(t.cases,e),e.helper("plural");break;case 2:Nd(t.items,e);break;case 6:{oc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function F2(t,e={}){const s=N2(t);s.helper("normalize"),t.body&&oc(t.body,s);const i=s.context();t.helpers=Array.from(i.helpers)}function B2(t){const e=t.body;return e.type===2?Fd(e):e.cases.forEach(s=>Fd(s)),t}function Fd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let s=0;s<t.items.length;s++){const i=t.items[s];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=rc(e);for(let s=0;s<t.items.length;s++){const i=t.items[s];(i.type===3||i.type===9)&&delete i.value}}}}function nr(t){switch(t.t=t.type,t.type){case 0:{const e=t;nr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,s=e.cases;for(let i=0;i<s.length;i++)nr(s[i]);e.c=s,delete e.cases;break}case 2:{const e=t,s=e.items;for(let i=0;i<s.length;i++)nr(s[i]);e.i=s,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;nr(e.key),e.k=e.key,delete e.key,e.modifier&&(nr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function U2(t,e){const{filename:s,breakLineCode:i,needIndent:r}=e,o=e.location!==!1,n={filename:s,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};o&&t.loc&&(n.source=t.loc.source);const a=()=>n;function l(k,I){n.code+=k}function d(k,I=!0){const _=I?i:"";l(r?_+"  ".repeat(k):_)}function h(k=!0){const I=++n.indentLevel;k&&d(I)}function u(k=!0){const I=--n.indentLevel;k&&d(I)}function p(){d(n.indentLevel)}return{context:a,push:l,indent:h,deindent:u,newline:p,helper:k=>`_${k}`,needIndent:()=>n.needIndent}}function H2(t,e){const{helper:s}=t;t.push(`${s("linked")}(`),yr(t,e.key),e.modifier?(t.push(", "),yr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function j2(t,e){const{helper:s,needIndent:i}=t;t.push(`${s("normalize")}([`),t.indent(i());const r=e.items.length;for(let o=0;o<r&&(yr(t,e.items[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}function W2(t,e){const{helper:s,needIndent:i}=t;if(e.cases.length>1){t.push(`${s("plural")}([`),t.indent(i());const r=e.cases.length;for(let o=0;o<r&&(yr(t,e.cases[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}}function K2(t,e){e.body?yr(t,e.body):t.push("null")}function yr(t,e){const{helper:s}=t;switch(e.type){case 0:K2(t,e);break;case 1:W2(t,e);break;case 2:j2(t,e);break;case 6:H2(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${s("interpolate")}(${s("list")}(${e.index}))`,e);break;case 4:t.push(`${s("interpolate")}(${s("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const q2=(t,e={})=>{const s=Q(e.mode)?e.mode:"normal",i=Q(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:s==="arrow"?";":`
`,o=e.needIndent?e.needIndent:s!=="arrow",n=t.helpers||[],a=U2(t,{filename:i,breakLineCode:r,needIndent:o});a.push(s==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(o),n.length>0&&(a.push(`const { ${rc(n.map(h=>`${h}: _${h}`),", ")} } = ctx`),a.newline()),a.push("return "),yr(a,t),a.deindent(o),a.push("}"),delete t.helpers;const{code:l,map:d}=a.context();return{ast:t,code:l,map:d?d.toJSON():void 0}};function G2(t,e={}){const s=me({},e),i=!!s.jit,r=!!s.minify,o=s.optimize==null?!0:s.optimize,a=V2(s).parse(t);return i?(o&&B2(a),r&&nr(a),{ast:a,code:""}):(F2(a,s),q2(a,s))}/*!
  * core-base v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Y2(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(sc().__INTLIFY_PROD_DEVTOOLS__=!1)}function Ds(t){return It(t)&&nc(t)===0&&(gs(t,"b")||gs(t,"body"))}const xp=["b","body"];function X2(t){return Si(t,xp)}const kp=["c","cases"];function J2(t){return Si(t,kp,[])}const Cp=["s","static"];function Q2(t){return Si(t,Cp)}const Sp=["i","items"];function Z2(t){return Si(t,Sp,[])}const Ep=["t","type"];function nc(t){return Si(t,Ep)}const Ap=["v","value"];function Go(t,e){const s=Si(t,Ap);if(s!=null)return s;throw po(e)}const $p=["m","modifier"];function tk(t){return Si(t,$p)}const Tp=["k","key"];function ek(t){const e=Si(t,Tp);if(e)return e;throw po(6)}function Si(t,e,s){for(let i=0;i<e.length;i++){const r=e[i];if(gs(t,r)&&t[r]!=null)return t[r]}return s}const Ip=[...xp,...kp,...Cp,...Sp,...Tp,...$p,...Ap,...Ep];function po(t){return new Error(`unhandled node type: ${t}`)}function $a(t){return s=>sk(s,t)}function sk(t,e){const s=X2(e);if(s==null)throw po(0);if(nc(s)===1){const o=J2(s);return t.plural(o.reduce((n,a)=>[...n,Bd(t,a)],[]))}else return Bd(t,s)}function Bd(t,e){const s=Q2(e);if(s!=null)return t.type==="text"?s:t.normalize([s]);{const i=Z2(e).reduce((r,o)=>[...r,al(t,o)],[]);return t.normalize(i)}}function al(t,e){const s=nc(e);switch(s){case 3:return Go(e,s);case 9:return Go(e,s);case 4:{const i=e;if(gs(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(gs(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw po(s)}case 5:{const i=e;if(gs(i,"i")&&le(i.i))return t.interpolate(t.list(i.i));if(gs(i,"index")&&le(i.index))return t.interpolate(t.list(i.index));throw po(s)}case 6:{const i=e,r=tk(i),o=ek(i);return t.linked(al(t,o),r?al(t,r):void 0,t.type)}case 7:return Go(e,s);case 8:return Go(e,s);default:throw new Error(`unhandled node on format message part: ${s}`)}}const ik=t=>t;let Yo=Dt();function rk(t,e={}){let s=!1;const i=e.onError||A2;return e.onError=r=>{s=!0,i(r)},{...G2(t,e),detectError:s}}function ok(t,e){if(Q(t)){Xt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||ik)(t),r=Yo[i];if(r)return r;const{ast:o,detectError:n}=rk(t,{...e,location:!1,jit:!0}),a=$a(o);return n?a:Yo[i]=a}else{const s=t.cacheKey;if(s){const i=Yo[s];return i||(Yo[s]=$a(t))}else return $a(t)}}let fo=null;function nk(t){fo=t}function ak(t,e,s){fo&&fo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:s})}const lk=ck("function:translate");function ck(t){return e=>fo&&fo.emit(t,e)}const Xs={INVALID_ARGUMENT:E2,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},dk=24;function Js(t){return Qn(t,null,void 0)}function ac(t,e){return e.locale!=null?Ud(e.locale):Ud(t.locale)}let Ta;function Ud(t){if(Q(t))return t;if(Yt(t)){if(t.resolvedOnce&&Ta!=null)return Ta;if(t.constructor.name==="Function"){const e=t();if(k2(e))throw Js(Xs.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ta=e}else throw Js(Xs.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Js(Xs.NOT_SUPPORT_LOCALE_TYPE)}function uk(t,e,s){return[...new Set([s,...oe(e)?e:It(e)?Object.keys(e):Q(e)?[e]:[s]])]}function Lp(t,e,s){const i=Q(s)?s:$n,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let o=r.__localeChainCache.get(i);if(!o){o=[];let n=[s];for(;oe(n);)n=Hd(o,n,e);const a=oe(e)||!Et(e)?e:e.default?e.default:null;n=Q(a)?[a]:a,oe(n)&&Hd(o,n,!1),r.__localeChainCache.set(i,o)}return o}function Hd(t,e,s){let i=!0;for(let r=0;r<e.length&&Xt(i);r++){const o=e[r];Q(o)&&(i=hk(t,e[r],s))}return i}function hk(t,e,s){let i;const r=e.split("-");do{const o=r.join("-");i=pk(t,o,s),r.splice(-1,1)}while(r.length&&i===!0);return i}function pk(t,e,s){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(oe(s)||Et(s))&&s[r]&&(i=s[r])}return i}const Ei=[];Ei[0]={w:[0],i:[3,0],"[":[4],o:[7]};Ei[1]={w:[1],".":[2],"[":[4],o:[7]};Ei[2]={w:[2],i:[3,0],0:[3,0]};Ei[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Ei[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Ei[5]={"'":[4,0],o:8,l:[5,0]};Ei[6]={'"':[4,0],o:8,l:[6,0]};const fk=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function gk(t){return fk.test(t)}function mk(t){const e=t.charCodeAt(0),s=t.charCodeAt(t.length-1);return e===s&&(e===34||e===39)?t.slice(1,-1):t}function bk(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function yk(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:gk(e)?mk(e):"*"+e}function vk(t){const e=[];let s=-1,i=0,r=0,o,n,a,l,d,h,u;const p=[];p[0]=()=>{n===void 0?n=a:n+=a},p[1]=()=>{n!==void 0&&(e.push(n),n=void 0)},p[2]=()=>{p[0](),r++},p[3]=()=>{if(r>0)r--,i=4,p[0]();else{if(r=0,n===void 0||(n=yk(n),n===!1))return!1;p[1]()}};function g(){const v=t[s+1];if(i===5&&v==="'"||i===6&&v==='"')return s++,a="\\"+v,p[0](),!0}for(;i!==null;)if(s++,o=t[s],!(o==="\\"&&g())){if(l=bk(o),u=Ei[i],d=u[l]||u.l||8,d===8||(i=d[0],d[1]!==void 0&&(h=p[d[1]],h&&(a=o,h()===!1))))return;if(i===7)return e}}const jd=new Map;function _k(t,e){return It(t)?t[e]:null}function wk(t,e){if(!It(t))return null;let s=jd.get(e);if(s||(s=vk(e),s&&jd.set(e,s)),!s)return null;const i=s.length;let r=t,o=0;for(;o<i;){const n=s[o];if(Ip.includes(n)&&Ds(r))return null;const a=r[n];if(a===void 0||Yt(r))return null;r=a,o++}return r}const xk="11.1.11",Zn=-1,$n="en-US",Wd="",Kd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function kk(){return{upper:(t,e)=>e==="text"&&Q(t)?t.toUpperCase():e==="vnode"&&It(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Q(t)?t.toLowerCase():e==="vnode"&&It(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Q(t)?Kd(t):e==="vnode"&&It(t)&&"__v_isVNode"in t?Kd(t.children):t}}let Op;function Ck(t){Op=t}let Rp;function Sk(t){Rp=t}let Mp;function Ek(t){Mp=t}let Pp=null;const Ak=t=>{Pp=t},$k=()=>Pp;let Dp=null;const qd=t=>{Dp=t},Tk=()=>Dp;let Gd=0;function Ik(t={}){const e=Yt(t.onWarn)?t.onWarn:m2,s=Q(t.version)?t.version:xk,i=Q(t.locale)||Yt(t.locale)?t.locale:$n,r=Yt(i)?$n:i,o=oe(t.fallbackLocale)||Et(t.fallbackLocale)||Q(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,n=Et(t.messages)?t.messages:Ia(r),a=Et(t.datetimeFormats)?t.datetimeFormats:Ia(r),l=Et(t.numberFormats)?t.numberFormats:Ia(r),d=me(Dt(),t.modifiers,kk()),h=t.pluralRules||Dt(),u=Yt(t.missing)?t.missing:null,p=Xt(t.missingWarn)||An(t.missingWarn)?t.missingWarn:!0,g=Xt(t.fallbackWarn)||An(t.fallbackWarn)?t.fallbackWarn:!0,v=!!t.fallbackFormat,k=!!t.unresolving,I=Yt(t.postTranslation)?t.postTranslation:null,_=Et(t.processor)?t.processor:null,w=Xt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,A=!!t.escapeParameter,m=Yt(t.messageCompiler)?t.messageCompiler:Op,C=Yt(t.messageResolver)?t.messageResolver:Rp||_k,R=Yt(t.localeFallbacker)?t.localeFallbacker:Mp||uk,T=It(t.fallbackContext)?t.fallbackContext:void 0,B=t,D=It(B.__datetimeFormatters)?B.__datetimeFormatters:new Map,V=It(B.__numberFormatters)?B.__numberFormatters:new Map,dt=It(B.__meta)?B.__meta:{};Gd++;const it={version:s,cid:Gd,locale:i,fallbackLocale:o,messages:n,modifiers:d,pluralRules:h,missing:u,missingWarn:p,fallbackWarn:g,fallbackFormat:v,unresolving:k,postTranslation:I,processor:_,warnHtmlMessage:w,escapeParameter:A,messageCompiler:m,messageResolver:C,localeFallbacker:R,fallbackContext:T,onWarn:e,__meta:dt};return it.datetimeFormats=a,it.numberFormats=l,it.__datetimeFormatters=D,it.__numberFormatters=V,__INTLIFY_PROD_DEVTOOLS__&&ak(it,s,dt),it}const Ia=t=>({[t]:Dt()});function lc(t,e,s,i,r){const{missing:o,onWarn:n}=t;if(o!==null){const a=o(t,s,e,r);return Q(a)?a:e}else return e}function Vr(t,e,s){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,s,e)}function Lk(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Ok(t,e){const s=e.indexOf(t);if(s===-1)return!1;for(let i=s+1;i<e.length;i++)if(Lk(t,e[i]))return!0;return!1}function Yd(t,...e){const{datetimeFormats:s,unresolving:i,fallbackLocale:r,onWarn:o,localeFallbacker:n}=t,{__datetimeFormatters:a}=t,[l,d,h,u]=ll(...e),p=Xt(h.missingWarn)?h.missingWarn:t.missingWarn;Xt(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const g=!!h.part,v=ac(t,h),k=n(t,r,v);if(!Q(l)||l==="")return new Intl.DateTimeFormat(v,u).format(d);let I={},_,w=null;const A="datetime format";for(let R=0;R<k.length&&(_=k[R],I=s[_]||{},w=I[l],!Et(w));R++)lc(t,l,_,p,A);if(!Et(w)||!Q(_))return i?Zn:l;let m=`${_}__${l}`;Jn(u)||(m=`${m}__${JSON.stringify(u)}`);let C=a.get(m);return C||(C=new Intl.DateTimeFormat(_,me({},w,u)),a.set(m,C)),g?C.formatToParts(d):C.format(d)}const zp=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ll(...t){const[e,s,i,r]=t,o=Dt();let n=Dt(),a;if(Q(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Js(Xs.INVALID_ISO_DATE_ARGUMENT);const d=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(d);try{a.toISOString()}catch{throw Js(Xs.INVALID_ISO_DATE_ARGUMENT)}}else if(v2(e)){if(isNaN(e.getTime()))throw Js(Xs.INVALID_DATE_ARGUMENT);a=e}else if(le(e))a=e;else throw Js(Xs.INVALID_ARGUMENT);return Q(s)?o.key=s:Et(s)&&Object.keys(s).forEach(l=>{zp.includes(l)?n[l]=s[l]:o[l]=s[l]}),Q(i)?o.locale=i:Et(i)&&(n=i),Et(r)&&(n=r),[o.key||"",a,o,n]}function Xd(t,e,s){const i=t;for(const r in s){const o=`${e}__${r}`;i.__datetimeFormatters.has(o)&&i.__datetimeFormatters.delete(o)}}function Jd(t,...e){const{numberFormats:s,unresolving:i,fallbackLocale:r,onWarn:o,localeFallbacker:n}=t,{__numberFormatters:a}=t,[l,d,h,u]=cl(...e),p=Xt(h.missingWarn)?h.missingWarn:t.missingWarn;Xt(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const g=!!h.part,v=ac(t,h),k=n(t,r,v);if(!Q(l)||l==="")return new Intl.NumberFormat(v,u).format(d);let I={},_,w=null;const A="number format";for(let R=0;R<k.length&&(_=k[R],I=s[_]||{},w=I[l],!Et(w));R++)lc(t,l,_,p,A);if(!Et(w)||!Q(_))return i?Zn:l;let m=`${_}__${l}`;Jn(u)||(m=`${m}__${JSON.stringify(u)}`);let C=a.get(m);return C||(C=new Intl.NumberFormat(_,me({},w,u)),a.set(m,C)),g?C.formatToParts(d):C.format(d)}const Vp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function cl(...t){const[e,s,i,r]=t,o=Dt();let n=Dt();if(!le(e))throw Js(Xs.INVALID_ARGUMENT);const a=e;return Q(s)?o.key=s:Et(s)&&Object.keys(s).forEach(l=>{Vp.includes(l)?n[l]=s[l]:o[l]=s[l]}),Q(i)?o.locale=i:Et(i)&&(n=i),Et(r)&&(n=r),[o.key||"",a,o,n]}function Qd(t,e,s){const i=t;for(const r in s){const o=`${e}__${r}`;i.__numberFormatters.has(o)&&i.__numberFormatters.delete(o)}}const Rk=t=>t,Mk=t=>"",Pk="text",Dk=t=>t.length===0?"":rc(t),zk=C2;function Zd(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Vk(t){const e=le(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(le(t.named.count)||le(t.named.n))?le(t.named.count)?t.named.count:le(t.named.n)?t.named.n:e:e}function Nk(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Fk(t={}){const e=t.locale,s=Vk(t),i=It(t.pluralRules)&&Q(e)&&Yt(t.pluralRules[e])?t.pluralRules[e]:Zd,r=It(t.pluralRules)&&Q(e)&&Yt(t.pluralRules[e])?Zd:void 0,o=_=>_[i(s,_.length,r)],n=t.list||[],a=_=>n[_],l=t.named||Dt();le(t.pluralIndex)&&Nk(s,l);const d=_=>l[_];function h(_,w){const A=Yt(t.messages)?t.messages(_,!!w):It(t.messages)?t.messages[_]:!1;return A||(t.parent?t.parent.message(_):Mk)}const u=_=>t.modifiers?t.modifiers[_]:Rk,p=Et(t.processor)&&Yt(t.processor.normalize)?t.processor.normalize:Dk,g=Et(t.processor)&&Yt(t.processor.interpolate)?t.processor.interpolate:zk,v=Et(t.processor)&&Q(t.processor.type)?t.processor.type:Pk,I={list:a,named:d,plural:o,linked:(_,...w)=>{const[A,m]=w;let C="text",R="";w.length===1?It(A)?(R=A.modifier||R,C=A.type||C):Q(A)&&(R=A||R):w.length===2&&(Q(A)&&(R=A||R),Q(m)&&(C=m||C));const T=h(_,!0)(I),B=C==="vnode"&&oe(T)&&R?T[0]:T;return R?u(R)(B,C):B},message:h,type:v,interpolate:g,normalize:p,values:me(Dt(),n,l)};return I}const tu=()=>"",cs=t=>Yt(t);function eu(t,...e){const{fallbackFormat:s,postTranslation:i,unresolving:r,messageCompiler:o,fallbackLocale:n,messages:a}=t,[l,d]=dl(...e),h=Xt(d.missingWarn)?d.missingWarn:t.missingWarn,u=Xt(d.fallbackWarn)?d.fallbackWarn:t.fallbackWarn,p=Xt(d.escapeParameter)?d.escapeParameter:t.escapeParameter,g=!!d.resolvedMessage,v=Q(d.default)||Xt(d.default)?Xt(d.default)?o?l:()=>l:d.default:s?o?l:()=>l:null,k=s||v!=null&&(Q(v)||Yt(v)),I=ac(t,d);p&&Bk(d);let[_,w,A]=g?[l,I,a[I]||Dt()]:Np(t,l,I,n,u,h),m=_,C=l;if(!g&&!(Q(m)||Ds(m)||cs(m))&&k&&(m=v,C=m),!g&&(!(Q(m)||Ds(m)||cs(m))||!Q(w)))return r?Zn:l;let R=!1;const T=()=>{R=!0},B=cs(m)?m:Fp(t,l,w,m,C,T);if(R)return m;const D=jk(t,w,A,d),V=Fk(D),dt=Uk(t,B,V);let it=i?i(dt,l):dt;if(p&&Q(it)&&(it=w2(it)),__INTLIFY_PROD_DEVTOOLS__){const ft={timestamp:Date.now(),key:Q(l)?l:cs(m)?m.key:"",locale:w||(cs(m)?m.locale:""),format:Q(m)?m:cs(m)?m.source:"",message:it};ft.meta=me({},t.__meta,$k()||{}),lk(ft)}return it}function Bk(t){oe(t.list)?t.list=t.list.map(e=>Q(e)?Dd(e):e):It(t.named)&&Object.keys(t.named).forEach(e=>{Q(t.named[e])&&(t.named[e]=Dd(t.named[e]))})}function Np(t,e,s,i,r,o){const{messages:n,onWarn:a,messageResolver:l,localeFallbacker:d}=t,h=d(t,i,s);let u=Dt(),p,g=null;const v="translate";for(let k=0;k<h.length&&(p=h[k],u=n[p]||Dt(),(g=l(u,e))===null&&(g=u[e]),!(Q(g)||Ds(g)||cs(g)));k++)if(!Ok(p,h)){const I=lc(t,e,p,o,v);I!==e&&(g=I)}return[g,p,u]}function Fp(t,e,s,i,r,o){const{messageCompiler:n,warnHtmlMessage:a}=t;if(cs(i)){const d=i;return d.locale=d.locale||s,d.key=d.key||e,d}if(n==null){const d=()=>i;return d.locale=s,d.key=e,d}const l=n(i,Hk(t,s,r,i,a,o));return l.locale=s,l.key=e,l.source=i,l}function Uk(t,e,s){return e(s)}function dl(...t){const[e,s,i]=t,r=Dt();if(!Q(e)&&!le(e)&&!cs(e)&&!Ds(e))throw Js(Xs.INVALID_ARGUMENT);const o=le(e)?String(e):(cs(e),e);return le(s)?r.plural=s:Q(s)?r.default=s:Et(s)&&!Jn(s)?r.named=s:oe(s)&&(r.list=s),le(i)?r.plural=i:Q(i)?r.default=i:Et(i)&&me(r,i),[o,r]}function Hk(t,e,s,i,r,o){return{locale:e,key:s,warnHtmlMessage:r,onError:n=>{throw o&&o(n),n},onCacheKey:n=>b2(e,s,n)}}function jk(t,e,s,i){const{modifiers:r,pluralRules:o,messageResolver:n,fallbackLocale:a,fallbackWarn:l,missingWarn:d,fallbackContext:h}=t,p={locale:e,modifiers:r,pluralRules:o,messages:(g,v)=>{let k=n(s,g);if(k==null&&(h||v)){const[,,I]=Np(h||t,g,e,a,l,d);k=n(I,g)}if(Q(k)||Ds(k)){let I=!1;const w=Fp(t,g,e,k,g,()=>{I=!0});return I?tu:w}else return cs(k)?k:tu}};return t.processor&&(p.processor=t.processor),i.list&&(p.list=i.list),i.named&&(p.named=i.named),le(i.plural)&&(p.pluralIndex=i.plural),p}Y2();/*!
  * vue-i18n v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Wk="11.1.11";function Kk(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(sc().__INTLIFY_PROD_DEVTOOLS__=!1)}const us={UNEXPECTED_RETURN_TYPE:dk,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function vs(t,...e){return Qn(t,null,void 0)}const ul=Ci("__translateVNode"),hl=Ci("__datetimeParts"),pl=Ci("__numberParts"),qk=Ci("__setPluralRules"),Gk=Ci("__injectWithOption"),fl=Ci("__dispose");function go(t){if(!It(t)||Ds(t))return t;for(const e in t)if(gs(t,e))if(!e.includes("."))It(t[e])&&go(t[e]);else{const s=e.split("."),i=s.length-1;let r=t,o=!1;for(let n=0;n<i;n++){if(s[n]==="__proto__")throw new Error(`unsafe key: ${s[n]}`);if(s[n]in r||(r[s[n]]=Dt()),!It(r[s[n]])){o=!0;break}r=r[s[n]]}if(o||(Ds(r)?Ip.includes(s[i])||delete t[e]:(r[s[i]]=t[e],delete t[e])),!Ds(r)){const n=r[s[i]];It(n)&&go(n)}}return t}function Bp(t,e){const{messages:s,__i18n:i,messageResolver:r,flatJson:o}=e,n=Et(s)?s:oe(i)?Dt():{[t]:Dt()};if(oe(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:d}=a;l?(n[l]=n[l]||Dt(),sn(d,n[l])):sn(d,n)}else Q(a)&&sn(JSON.parse(a),n)}),r==null&&o)for(const a in n)gs(n,a)&&go(n[a]);return n}function Up(t){return t.type}function Yk(t,e,s){let i=It(e.messages)?e.messages:Dt();"__i18nGlobal"in s&&(i=Bp(t.locale.value,{messages:i,__i18n:s.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(o=>{t.mergeLocaleMessage(o,i[o])});{if(It(e.datetimeFormats)){const o=Object.keys(e.datetimeFormats);o.length&&o.forEach(n=>{t.mergeDateTimeFormat(n,e.datetimeFormats[n])})}if(It(e.numberFormats)){const o=Object.keys(e.numberFormats);o.length&&o.forEach(n=>{t.mergeNumberFormat(n,e.numberFormats[n])})}}}function su(t){return Ut(To,null,t,0)}const iu="__INTLIFY_META__",ru=()=>[],Xk=()=>!1;let ou=0;function nu(t){return(e,s,i,r)=>t(s,i,Io()||void 0,r)}const Jk=()=>{const t=Io();let e=null;return t&&(e=Up(t)[iu])?{[iu]:e}:null};function Hp(t={}){const{__root:e,__injectWithOption:s}=t,i=e===void 0,r=t.flatJson,o=En?Ht:Wy;let n=Xt(t.inheritLocale)?t.inheritLocale:!0;const a=o(e&&n?e.locale.value:Q(t.locale)?t.locale:$n),l=o(e&&n?e.fallbackLocale.value:Q(t.fallbackLocale)||oe(t.fallbackLocale)||Et(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),d=o(Bp(a.value,t)),h=o(Et(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),u=o(Et(t.numberFormats)?t.numberFormats:{[a.value]:{}});let p=e?e.missingWarn:Xt(t.missingWarn)||An(t.missingWarn)?t.missingWarn:!0,g=e?e.fallbackWarn:Xt(t.fallbackWarn)||An(t.fallbackWarn)?t.fallbackWarn:!0,v=e?e.fallbackRoot:Xt(t.fallbackRoot)?t.fallbackRoot:!0,k=!!t.fallbackFormat,I=Yt(t.missing)?t.missing:null,_=Yt(t.missing)?nu(t.missing):null,w=Yt(t.postTranslation)?t.postTranslation:null,A=e?e.warnHtmlMessage:Xt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,m=!!t.escapeParameter;const C=e?e.modifiers:Et(t.modifiers)?t.modifiers:{};let R=t.pluralRules||e&&e.pluralRules,T;T=(()=>{i&&qd(null);const E={version:Wk,locale:a.value,fallbackLocale:l.value,messages:d.value,modifiers:C,pluralRules:R,missing:_===null?void 0:_,missingWarn:p,fallbackWarn:g,fallbackFormat:k,unresolving:!0,postTranslation:w===null?void 0:w,warnHtmlMessage:A,escapeParameter:m,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};E.datetimeFormats=h.value,E.numberFormats=u.value,E.__datetimeFormatters=Et(T)?T.__datetimeFormatters:void 0,E.__numberFormatters=Et(T)?T.__numberFormatters:void 0;const P=Ik(E);return i&&qd(P),P})(),Vr(T,a.value,l.value);function D(){return[a.value,l.value,d.value,h.value,u.value]}const V=Nt({get:()=>a.value,set:E=>{T.locale=E,a.value=E}}),dt=Nt({get:()=>l.value,set:E=>{T.fallbackLocale=E,l.value=E,Vr(T,a.value,E)}}),it=Nt(()=>d.value),ft=Nt(()=>h.value),_t=Nt(()=>u.value);function kt(){return Yt(w)?w:null}function X(E){w=E,T.postTranslation=E}function J(){return I}function ht(E){E!==null&&(_=nu(E)),I=E,T.missing=_}const Z=(E,P,tt,ut,vt,Zt)=>{D();let qt;try{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=e?Tk():void 0),qt=E(T)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=void 0)}if(tt!=="translate exists"&&le(qt)&&qt===Zn||tt==="translate exists"&&!qt){const[Me,qe]=P();return e&&v?ut(e):vt(Me)}else{if(Zt(qt))return qt;throw vs(us.UNEXPECTED_RETURN_TYPE)}};function Ct(...E){return Z(P=>Reflect.apply(eu,null,[P,...E]),()=>dl(...E),"translate",P=>Reflect.apply(P.t,P,[...E]),P=>P,P=>Q(P))}function Ue(...E){const[P,tt,ut]=E;if(ut&&!It(ut))throw vs(us.INVALID_ARGUMENT);return Ct(P,tt,me({resolvedMessage:!0},ut||{}))}function re(...E){return Z(P=>Reflect.apply(Yd,null,[P,...E]),()=>ll(...E),"datetime format",P=>Reflect.apply(P.d,P,[...E]),()=>Wd,P=>Q(P)||oe(P))}function ni(...E){return Z(P=>Reflect.apply(Jd,null,[P,...E]),()=>cl(...E),"number format",P=>Reflect.apply(P.n,P,[...E]),()=>Wd,P=>Q(P)||oe(P))}function Ai(E){return E.map(P=>Q(P)||le(P)||Xt(P)?su(String(P)):P)}const ps={normalize:Ai,interpolate:E=>E,type:"vnode"};function As(...E){return Z(P=>{let tt;const ut=P;try{ut.processor=ps,tt=Reflect.apply(eu,null,[ut,...E])}finally{ut.processor=null}return tt},()=>dl(...E),"translate",P=>P[ul](...E),P=>[su(P)],P=>oe(P))}function Ae(...E){return Z(P=>Reflect.apply(Jd,null,[P,...E]),()=>cl(...E),"number format",P=>P[pl](...E),ru,P=>Q(P)||oe(P))}function ai(...E){return Z(P=>Reflect.apply(Yd,null,[P,...E]),()=>ll(...E),"datetime format",P=>P[hl](...E),ru,P=>Q(P)||oe(P))}function fs(E){R=E,T.pluralRules=R}function Qi(E,P){return Z(()=>{if(!E)return!1;const tt=Q(P)?P:a.value,ut=M(tt),vt=T.messageResolver(ut,E);return Ds(vt)||cs(vt)||Q(vt)},()=>[E],"translate exists",tt=>Reflect.apply(tt.te,tt,[E,P]),Xk,tt=>Xt(tt))}function x(E){let P=null;const tt=Lp(T,l.value,a.value);for(let ut=0;ut<tt.length;ut++){const vt=d.value[tt[ut]]||{},Zt=T.messageResolver(vt,E);if(Zt!=null){P=Zt;break}}return P}function S(E){const P=x(E);return P??(e?e.tm(E)||{}:{})}function M(E){return d.value[E]||{}}function H(E,P){if(r){const tt={[E]:P};for(const ut in tt)gs(tt,ut)&&go(tt[ut]);P=tt[E]}d.value[E]=P,T.messages=d.value}function N(E,P){d.value[E]=d.value[E]||{};const tt={[E]:P};if(r)for(const ut in tt)gs(tt,ut)&&go(tt[ut]);P=tt[E],sn(P,d.value[E]),T.messages=d.value}function U(E){return h.value[E]||{}}function b(E,P){h.value[E]=P,T.datetimeFormats=h.value,Xd(T,E,P)}function y(E,P){h.value[E]=me(h.value[E]||{},P),T.datetimeFormats=h.value,Xd(T,E,P)}function $(E){return u.value[E]||{}}function O(E,P){u.value[E]=P,T.numberFormats=u.value,Qd(T,E,P)}function G(E,P){u.value[E]=me(u.value[E]||{},P),T.numberFormats=u.value,Qd(T,E,P)}ou++,e&&En&&(Ni(e.locale,E=>{n&&(a.value=E,T.locale=E,Vr(T,a.value,l.value))}),Ni(e.fallbackLocale,E=>{n&&(l.value=E,T.fallbackLocale=E,Vr(T,a.value,l.value))}));const z={id:ou,locale:V,fallbackLocale:dt,get inheritLocale(){return n},set inheritLocale(E){n=E,E&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Vr(T,a.value,l.value))},get availableLocales(){return Object.keys(d.value).sort()},messages:it,get modifiers(){return C},get pluralRules(){return R||{}},get isGlobal(){return i},get missingWarn(){return p},set missingWarn(E){p=E,T.missingWarn=p},get fallbackWarn(){return g},set fallbackWarn(E){g=E,T.fallbackWarn=g},get fallbackRoot(){return v},set fallbackRoot(E){v=E},get fallbackFormat(){return k},set fallbackFormat(E){k=E,T.fallbackFormat=k},get warnHtmlMessage(){return A},set warnHtmlMessage(E){A=E,T.warnHtmlMessage=E},get escapeParameter(){return m},set escapeParameter(E){m=E,T.escapeParameter=E},t:Ct,getLocaleMessage:M,setLocaleMessage:H,mergeLocaleMessage:N,getPostTranslationHandler:kt,setPostTranslationHandler:X,getMissingHandler:J,setMissingHandler:ht,[qk]:fs};return z.datetimeFormats=ft,z.numberFormats=_t,z.rt=Ue,z.te=Qi,z.tm=S,z.d=re,z.n=ni,z.getDateTimeFormat=U,z.setDateTimeFormat=b,z.mergeDateTimeFormat=y,z.getNumberFormat=$,z.setNumberFormat=O,z.mergeNumberFormat=G,z[Gk]=s,z[ul]=As,z[hl]=ai,z[pl]=Ae,z}const cc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Qk({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Ie?r.children:[r]],[]):e.reduce((s,i)=>{const r=t[i];return r&&(s[i]=r()),s},Dt())}function jp(){return Ie}const Zk=Ke({name:"i18n-t",props:me({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>le(t)||!isNaN(t)}},cc),setup(t,e){const{slots:s,attrs:i}=e,r=t.i18n||dc({useScope:t.scope,__useComponent:!0});return()=>{const o=Object.keys(s).filter(u=>u[0]!=="_"),n=Dt();t.locale&&(n.locale=t.locale),t.plural!==void 0&&(n.plural=Q(t.plural)?+t.plural:t.plural);const a=Qk(e,o),l=r[ul](t.keypath,a,n),d=me(Dt(),i),h=Q(t.tag)||It(t.tag)?t.tag:jp();return op(h,d,l)}}}),au=Zk;function tC(t){return oe(t)&&!Q(t[0])}function Wp(t,e,s,i){const{slots:r,attrs:o}=e;return()=>{const n={part:!0};let a=Dt();t.locale&&(n.locale=t.locale),Q(t.format)?n.key=t.format:It(t.format)&&(Q(t.format.key)&&(n.key=t.format.key),a=Object.keys(t.format).reduce((p,g)=>s.includes(g)?me(Dt(),p,{[g]:t.format[g]}):p,Dt()));const l=i(t.value,n,a);let d=[n.key];oe(l)?d=l.map((p,g)=>{const v=r[p.type],k=v?v({[p.type]:p.value,index:g,parts:l}):[p.value];return tC(k)&&(k[0].key=`${p.type}-${g}`),k}):Q(l)&&(d=[l]);const h=me(Dt(),o),u=Q(t.tag)||It(t.tag)?t.tag:jp();return op(u,h,d)}}const eC=Ke({name:"i18n-n",props:me({value:{type:Number,required:!0},format:{type:[String,Object]}},cc),setup(t,e){const s=t.i18n||dc({useScope:t.scope,__useComponent:!0});return Wp(t,e,Vp,(...i)=>s[pl](...i))}}),lu=eC;function sC(t,e){const s=t;if(t.mode==="composition")return s.__getInstance(e)||t.global;{const i=s.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function iC(t){const e=n=>{const{instance:a,value:l}=n;if(!a||!a.$)throw vs(us.UNEXPECTED_ERROR);const d=sC(t,a.$),h=cu(l);return[Reflect.apply(d.t,d,[...du(h)]),d]};return{created:(n,a)=>{const[l,d]=e(a);En&&t.global===d&&(n.__i18nWatcher=Ni(d.locale,()=>{a.instance&&a.instance.$forceUpdate()})),n.__composer=d,n.textContent=l},unmounted:n=>{En&&n.__i18nWatcher&&(n.__i18nWatcher(),n.__i18nWatcher=void 0,delete n.__i18nWatcher),n.__composer&&(n.__composer=void 0,delete n.__composer)},beforeUpdate:(n,{value:a})=>{if(n.__composer){const l=n.__composer,d=cu(a);n.textContent=Reflect.apply(l.t,l,[...du(d)])}},getSSRProps:n=>{const[a]=e(n);return{textContent:a}}}}function cu(t){if(Q(t))return{path:t};if(Et(t)){if(!("path"in t))throw vs(us.REQUIRED_VALUE,"path");return t}else throw vs(us.INVALID_VALUE)}function du(t){const{path:e,locale:s,args:i,choice:r,plural:o}=t,n={},a=i||{};return Q(s)&&(n.locale=s),le(r)&&(n.plural=r),le(o)&&(n.plural=o),[e,a,n]}function rC(t,e,...s){const i=Et(s[0])?s[0]:{};(Xt(i.globalInstall)?i.globalInstall:!0)&&([au.name,"I18nT"].forEach(o=>t.component(o,au)),[lu.name,"I18nN"].forEach(o=>t.component(o,lu)),[hu.name,"I18nD"].forEach(o=>t.component(o,hu))),t.directive("t",iC(e))}const oC=Ci("global-vue-i18n");function nC(t={}){const e=Xt(t.globalInjection)?t.globalInjection:!0,s=new Map,[i,r]=aC(t),o=Ci("");function n(h){return s.get(h)||null}function a(h,u){s.set(h,u)}function l(h){s.delete(h)}const d={get mode(){return"composition"},async install(h,...u){if(h.__VUE_I18N_SYMBOL__=o,h.provide(h.__VUE_I18N_SYMBOL__,d),Et(u[0])){const v=u[0];d.__composerExtend=v.__composerExtend,d.__vueI18nExtend=v.__vueI18nExtend}let p=null;e&&(p=gC(h,d.global)),rC(h,d,...u);const g=h.unmount;h.unmount=()=>{p&&p(),d.dispose(),g()}},get global(){return r},dispose(){i.stop()},__instances:s,__getInstance:n,__setInstance:a,__deleteInstance:l};return d}function dc(t={}){const e=Io();if(e==null)throw vs(us.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw vs(us.NOT_INSTALLED);const s=lC(e),i=dC(s),r=Up(e),o=cC(t,r);if(o==="global")return Yk(i,t,r),i;if(o==="parent"){let l=uC(s,e,t.__useComponent);return l==null&&(l=i),l}const n=s;let a=n.__getInstance(e);if(a==null){const l=me({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Hp(l),n.__composerExtend&&(a[fl]=n.__composerExtend(a)),pC(n,e,a),n.__setInstance(e,a)}return a}function aC(t,e){const s=Vl(),i=s.run(()=>Hp(t));if(i==null)throw vs(us.UNEXPECTED_ERROR);return[s,i]}function lC(t){const e=ge(t.isCE?oC:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw vs(t.isCE?us.NOT_INSTALLED_WITH_PROVIDE:us.UNEXPECTED_ERROR);return e}function cC(t,e){return Jn(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function dC(t){return t.mode==="composition"?t.global:t.global.__composer}function uC(t,e,s=!1){let i=null;const r=e.root;let o=hC(e,s);for(;o!=null;){const n=t;if(t.mode==="composition"&&(i=n.__getInstance(o)),i!=null||r===o)break;o=o.parent}return i}function hC(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function pC(t,e,s){Gl(()=>{},e),Yl(()=>{const i=s;t.__deleteInstance(e);const r=i[fl];r&&(r(),delete i[fl])},e)}const fC=["locale","fallbackLocale","availableLocales"],uu=["t","rt","d","n","tm","te"];function gC(t,e){const s=Object.create(null);return fC.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o)throw vs(us.UNEXPECTED_ERROR);const n=Jt(o.value)?{get(){return o.value.value},set(a){o.value.value=a}}:{get(){return o.get&&o.get()}};Object.defineProperty(s,r,n)}),t.config.globalProperties.$i18n=s,uu.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o.value)throw vs(us.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,o)}),()=>{delete t.config.globalProperties.$i18n,uu.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const mC=Ke({name:"i18n-d",props:me({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},cc),setup(t,e){const s=t.i18n||dc({useScope:t.scope,__useComponent:!0});return Wp(t,e,zp,(...i)=>s[hl](...i))}}),hu=mC;Kk();Ck(ok);Sk(wk);Ek(Lp);if(__INTLIFY_PROD_DEVTOOLS__){const t=sc();t.__INTLIFY__=!0,nk(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}class bC{constructor(e,s=_n){this.i18nConfig=void 0,this.i18nConfig=nC(this.getConfig(e,s))}getConfig(e,s=_n){const i={trend:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0},detections:{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0},detectionsCompact:{style:"decimal",notation:"compact",minimumFractionDigits:0,maximumFractionDigits:0}},r={secondRange:{hour:"2-digit",minute:"2-digit",second:"2-digit"},hourRange:{hour:"2-digit",minute:"2-digit"},dateRange:{month:"short",day:"numeric"},overviewDate:{month:"short",day:"numeric",year:"numeric"},fullDateTime:{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",year:"2-digit"}},o={locale:e,fallbackLocale:"en-us",messages:s,allowComposition:!0,legacy:!1,numberFormats:{"en-US":i,[e]:i},datetimeFormats:{"en-US":r,[e]:r}};return o.numberFormats[e]=o.numberFormats[e]??o.numberFormats["en-US"],o}install(e){e.provide(ke.I18N,this.i18nConfig?.global)}}function yC(t,e=_n){return new bC(t,e)}(async()=>{const t=ap(Ex);t.config.compilerOptions.isCustomElement=s=>s.startsWith("sl-");const e=g2();t.use(Tx()),t.use(e),t.use(i_()),await e.connect(),t.use(yC(e.data.locale,_n)),t.mount("#app")})();
