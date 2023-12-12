var rp=Object.defineProperty;var np=(e,t,s)=>t in e?rp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var ie=(e,t,s)=>(np(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $r=window,Va=$r.ShadowRoot&&($r.ShadyCSS===void 0||$r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fa=Symbol(),Vl=new WeakMap;let Pd=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==Fa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Va&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=Vl.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vl.set(s,t))}return t}toString(){return this.cssText}};const ap=e=>new Pd(typeof e=="string"?e:e+"",void 0,Fa),J=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new Pd(s,e,Fa)},lp=(e,t)=>{Va?e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):t.forEach(s=>{const i=document.createElement("style"),o=$r.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,e.appendChild(i)})},Fl=Va?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return ap(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var An;const Or=window,Nl=Or.trustedTypes,cp=Nl?Nl.emptyScript:"",Ul=Or.reactiveElementPolyfillSupport,Io={toAttribute(e,t){switch(t){case Boolean:e=e?cp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Vd=(e,t)=>t!==e&&(t==t||e==e),Tn={attribute:!0,type:String,converter:Io,reflect:!1,hasChanged:Vd},ta="finalized";let zi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var s;this.finalize(),((s=this.h)!==null&&s!==void 0?s:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((s,i)=>{const o=this._$Ep(i,s);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,s=Tn){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,s);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(o){const r=this[t];this[s]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Tn}static finalize(){if(this.hasOwnProperty(ta))return!1;this[ta]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const s=this.properties,i=[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)];for(const o of i)this.createProperty(o,s[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)s.unshift(Fl(o))}else t!==void 0&&s.push(Fl(t));return s}static _$Ep(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(s=>s(this))}addController(t){var s,i;((s=this._$ES)!==null&&s!==void 0?s:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var s;(s=this._$ES)===null||s===void 0||s.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,s)=>{this.hasOwnProperty(s)&&(this._$Ei.set(s,this[s]),delete this[s])})}createRenderRoot(){var t;const s=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return lp(s,this.constructor.elementStyles),s}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostConnected)===null||i===void 0?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostDisconnected)===null||i===void 0?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EO(t,s,i=Tn){var o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Io).toAttribute(s,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,s){var i;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=o.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Io;this._$El=r,this[r]=a.fromAttribute(s,n.type),this._$El=null}}requestUpdate(t,s,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Vd)(this[t],s)?(this._$AL.has(t)||this._$AL.set(t,s),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let s=!1;const i=this._$AL;try{s=this.shouldUpdate(i),s?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw s=!1,this._$Ek(),o}s&&this._$AE(i)}willUpdate(t){}_$AE(t){var s;(s=this._$ES)===null||s===void 0||s.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((s,i)=>this._$EO(i,this[i],s)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};zi[ta]=!0,zi.elementProperties=new Map,zi.elementStyles=[],zi.shadowRootOptions={mode:"open"},Ul?.({ReactiveElement:zi}),((An=Or.reactiveElementVersions)!==null&&An!==void 0?An:Or.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var In;const Lr=window,Ni=Lr.trustedTypes,Bl=Ni?Ni.createPolicy("lit-html",{createHTML:e=>e}):void 0,sa="$lit$",Us=`lit$${(Math.random()+"").slice(9)}$`,Fd="?"+Us,dp=`<${Fd}>`,mi=document,zo=()=>mi.createComment(""),Oo=e=>e===null||typeof e!="object"&&typeof e!="function",Nd=Array.isArray,up=e=>Nd(e)||typeof e?.[Symbol.iterator]=="function",zn=`[ 	
\f\r]`,no=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hl=/-->/g,jl=/>/g,si=RegExp(`>|${zn}(?:([^\\s"'>=/]+)(${zn}*=${zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wl=/'/g,Kl=/"/g,Ud=/^(?:script|style|textarea|title)$/i,hp=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),O=hp(1),Vt=Symbol.for("lit-noChange"),Fe=Symbol.for("lit-nothing"),ql=new WeakMap,ci=mi.createTreeWalker(mi,129,null,!1);function Bd(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bl!==void 0?Bl.createHTML(t):t}const pp=(e,t)=>{const s=e.length-1,i=[];let o,r=t===2?"<svg>":"",n=no;for(let a=0;a<s;a++){const l=e[a];let d,p,u=-1,f=0;for(;f<l.length&&(n.lastIndex=f,p=n.exec(l),p!==null);)f=n.lastIndex,n===no?p[1]==="!--"?n=Hl:p[1]!==void 0?n=jl:p[2]!==void 0?(Ud.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=si):p[3]!==void 0&&(n=si):n===si?p[0]===">"?(n=o??no,u=-1):p[1]===void 0?u=-2:(u=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?si:p[3]==='"'?Kl:Wl):n===Kl||n===Wl?n=si:n===Hl||n===jl?n=no:(n=si,o=void 0);const m=n===si&&e[a+1].startsWith("/>")?" ":"";r+=n===no?l+dp:u>=0?(i.push(d),l.slice(0,u)+sa+l.slice(u)+Us+m):l+Us+(u===-2?(i.push(void 0),a):m)}return[Bd(e,r+(e[s]||"<?>")+(t===2?"</svg>":"")),i]};class Lo{constructor({strings:t,_$litType$:s},i){let o;this.parts=[];let r=0,n=0;const a=t.length-1,l=this.parts,[d,p]=pp(t,s);if(this.el=Lo.createElement(d,i),ci.currentNode=this.el.content,s===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(o=ci.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const f of o.getAttributeNames())if(f.endsWith(sa)||f.startsWith(Us)){const m=p[n++];if(u.push(f),m!==void 0){const g=o.getAttribute(m.toLowerCase()+sa).split(Us),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?mp:v[1]==="?"?bp:v[1]==="@"?yp:tn})}else l.push({type:6,index:r})}for(const f of u)o.removeAttribute(f)}if(Ud.test(o.tagName)){const u=o.textContent.split(Us),f=u.length-1;if(f>0){o.textContent=Ni?Ni.emptyScript:"";for(let m=0;m<f;m++)o.append(u[m],zo()),ci.nextNode(),l.push({type:2,index:++r});o.append(u[f],zo())}}}else if(o.nodeType===8)if(o.data===Fd)l.push({type:2,index:r});else{let u=-1;for(;(u=o.data.indexOf(Us,u+1))!==-1;)l.push({type:7,index:r}),u+=Us.length-1}r++}}static createElement(t,s){const i=mi.createElement("template");return i.innerHTML=t,i}}function Ui(e,t,s=e,i){var o,r,n,a;if(t===Vt)return t;let l=i!==void 0?(o=s._$Co)===null||o===void 0?void 0:o[i]:s._$Cl;const d=Oo(t)?void 0:t._$litDirective$;return l?.constructor!==d&&((r=l?._$AO)===null||r===void 0||r.call(l,!1),d===void 0?l=void 0:(l=new d(e),l._$AT(e,s,i)),i!==void 0?((n=(a=s)._$Co)!==null&&n!==void 0?n:a._$Co=[])[i]=l:s._$Cl=l),l!==void 0&&(t=Ui(e,l._$AS(e,t.values),l,i)),t}class fp{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var s;const{el:{content:i},parts:o}=this._$AD,r=((s=t?.creationScope)!==null&&s!==void 0?s:mi).importNode(i,!0);ci.currentNode=r;let n=ci.nextNode(),a=0,l=0,d=o[0];for(;d!==void 0;){if(a===d.index){let p;d.type===2?p=new Ko(n,n.nextSibling,this,t):d.type===1?p=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(p=new vp(n,this,t)),this._$AV.push(p),d=o[++l]}a!==d?.index&&(n=ci.nextNode(),a++)}return ci.currentNode=mi,r}v(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class Ko{constructor(t,s,i,o){var r;this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=o,this._$Cp=(r=o?.isConnected)===null||r===void 0||r}get _$AU(){var t,s;return(s=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&s!==void 0?s:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Ui(this,t,s),Oo(t)?t===Fe||t==null||t===""?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):t!==this._$AH&&t!==Vt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):up(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Fe&&Oo(this._$AH)?this._$AA.nextSibling.data=t:this.$(mi.createTextNode(t)),this._$AH=t}g(t){var s;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Lo.createElement(Bd(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)===null||s===void 0?void 0:s._$AD)===r)this._$AH.v(i);else{const n=new fp(r,this),a=n.u(this.options);n.v(i),this.$(a),this._$AH=n}}_$AC(t){let s=ql.get(t.strings);return s===void 0&&ql.set(t.strings,s=new Lo(t)),s}T(t){Nd(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const r of t)o===s.length?s.push(i=new Ko(this.k(zo()),this.k(zo()),this,this.options)):i=s[o],i._$AI(r),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,s);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var s;this._$AM===void 0&&(this._$Cp=t,(s=this._$AP)===null||s===void 0||s.call(this,t))}}class tn{constructor(t,s,i,o,r){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Fe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,s=this,i,o){const r=this.strings;let n=!1;if(r===void 0)t=Ui(this,t,s,0),n=!Oo(t)||t!==this._$AH&&t!==Vt,n&&(this._$AH=t);else{const a=t;let l,d;for(t=r[0],l=0;l<r.length-1;l++)d=Ui(this,a[i+l],s,l),d===Vt&&(d=this._$AH[l]),n||(n=!Oo(d)||d!==this._$AH[l]),d===Fe?t=Fe:t!==Fe&&(t+=(d??"")+r[l+1]),this._$AH[l]=d}n&&!o&&this.j(t)}j(t){t===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let mp=class extends tn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Fe?void 0:t}};const gp=Ni?Ni.emptyScript:"";class bp extends tn{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Fe?this.element.setAttribute(this.name,gp):this.element.removeAttribute(this.name)}}class yp extends tn{constructor(t,s,i,o,r){super(t,s,i,o,r),this.type=5}_$AI(t,s=this){var i;if((t=(i=Ui(this,t,s,0))!==null&&i!==void 0?i:Fe)===Vt)return;const o=this._$AH,r=t===Fe&&o!==Fe||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==Fe&&(o===Fe||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,i;typeof this._$AH=="function"?this._$AH.call((i=(s=this.options)===null||s===void 0?void 0:s.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class vp{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ui(this,t)}}const Gl=Lr.litHtmlPolyfillSupport;Gl?.(Lo,Ko),((In=Lr.litHtmlVersions)!==null&&In!==void 0?In:Lr.litHtmlVersions=[]).push("2.8.0");const _p=(e,t,s)=>{var i,o;const r=(i=s?.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const a=(o=s?.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new Ko(t.insertBefore(zo(),a),a,void 0,s??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var On,Ln;let yo=class extends zi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const i=super.createRenderRoot();return(t=(s=this.renderOptions).renderBefore)!==null&&t!==void 0||(s.renderBefore=i.firstChild),i}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_p(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Vt}};yo.finalized=!0,yo._$litElement$=!0,(On=globalThis.litElementHydrateSupport)===null||On===void 0||On.call(globalThis,{LitElement:yo});const Yl=globalThis.litElementPolyfillSupport;Yl?.({LitElement:yo});((Ln=globalThis.litElementVersions)!==null&&Ln!==void 0?Ln:globalThis.litElementVersions=[]).push("3.3.3");var Z=J`
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
`,wp=J`
  ${Z}

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
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xp=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Hd=e=>e.strings===void 0,kp={},Cp=(e,t=kp)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qo=e=>(...t)=>({_$litDirective$:e,values:t});let Go=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=(e,t)=>{var s,i;const o=e._$AN;if(o===void 0)return!1;for(const r of o)(i=(s=r)._$AO)===null||i===void 0||i.call(s,t,!1),vo(r,t);return!0},Mr=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},jd=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Sp(t)}};function Ep(e){this._$AN!==void 0?(Mr(this),this._$AM=e,jd(this)):this._$AM=e}function $p(e,t=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)vo(i[r],!1),Mr(i[r]);else i!=null&&(vo(i,!1),Mr(i));else vo(this,e)}const Sp=e=>{var t,s,i,o;e.type==ps.CHILD&&((t=(i=e)._$AP)!==null&&t!==void 0||(i._$AP=$p),(s=(o=e)._$AQ)!==null&&s!==void 0||(o._$AQ=Ep))};class Ap extends Go{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),jd(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),s&&(vo(this,t),Mr(this))}setValue(t){if(Hd(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tp=()=>new Ip;let Ip=class{};const Mn=new WeakMap,zp=qo(class extends Ap{render(e){return Fe}update(e,[t]){var s;const i=t!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),Fe}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let i=Mn.get(s);i===void 0&&(i=new WeakMap,Mn.set(s,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=Mn.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Op=class{constructor(e,t,s){this.popupRef=Tp(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},(this.host=e).addController(this),this.hasSlotController=t,this.localize=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of t.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var n;const a=(n=t.get(r))!=null?n:new CSSUnitValue(0,"px"),d=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?O`
      <sl-popup
        ${zp(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:O` <slot name="submenu" hidden></slot> `}},Lp=J`
  ${Z}

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
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
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
`,Mp=J`
  ${Z}

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
`,Wd=Object.defineProperty,Rp=Object.defineProperties,Dp=Object.getOwnPropertyDescriptor,Pp=Object.getOwnPropertyDescriptors,Xl=Object.getOwnPropertySymbols,Vp=Object.prototype.hasOwnProperty,Fp=Object.prototype.propertyIsEnumerable,Jl=(e,t,s)=>t in e?Wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,zs=(e,t)=>{for(var s in t||(t={}))Vp.call(t,s)&&Jl(e,s,t[s]);if(Xl)for(var s of Xl(t))Fp.call(t,s)&&Jl(e,s,t[s]);return e},Yo=(e,t)=>Rp(e,Pp(t)),c=(e,t,s,i)=>{for(var o=i>1?void 0:i?Dp(t,s):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&Wd(t,s,o),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Np=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}},Up=(e,t,s)=>{t.constructor.createProperty(s,e)};function h(e){return(t,s)=>s!==void 0?Up(e,t,s):Np(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(e){return h({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Na=({finisher:e,descriptor:t})=>(s,i)=>{var o;if(i===void 0){const r=(o=s.originalKey)!==null&&o!==void 0?o:s.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(s.key)}:{...s,key:r};return e!=null&&(n.finisher=function(a){e(a,r)}),n}{const r=s.constructor;t!==void 0&&Object.defineProperty(s,i,t(i)),e?.(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kd(e){return Na({finisher:(t,s)=>{Object.assign(t.prototype[s],e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e,t){return Na({descriptor:s=>{const i={get(){var o,r;return(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const o=typeof s=="symbol"?Symbol():"__"+s;i.get=function(){var r,n;return this[o]===void 0&&(this[o]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&n!==void 0?n:null),this[o]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bp(e){return Na({descriptor:t=>({async get(){var s;return await this.updateComplete,(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rn;((Rn=window.HTMLSlotElement)===null||Rn===void 0?void 0:Rn.prototype.assignedElements)!=null;var G=class extends yo{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,zs({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},s);return}let o=" (unknown version)",r=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${r} has already been registered.`)}};G.version="2.9.0";G.dependencies={};c([h()],G.prototype,"dir",2);c([h()],G.prototype,"lang",2);const Ws=Math.min,Dt=Math.max,Rr=Math.round,ar=Math.floor,Ks=e=>({x:e,y:e}),Hp={left:"right",right:"left",bottom:"top",top:"bottom"},jp={start:"end",end:"start"};function ia(e,t,s){return Dt(e,Ws(t,s))}function Gi(e,t){return typeof e=="function"?e(t):e}function qs(e){return e.split("-")[0]}function Yi(e){return e.split("-")[1]}function qd(e){return e==="x"?"y":"x"}function Ua(e){return e==="y"?"height":"width"}function Xo(e){return["top","bottom"].includes(qs(e))?"y":"x"}function Ba(e){return qd(Xo(e))}function Wp(e,t,s){s===void 0&&(s=!1);const i=Yi(e),o=Ba(e),r=Ua(o);let n=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(n=Dr(n)),[n,Dr(n)]}function Kp(e){const t=Dr(e);return[oa(e),t,oa(t)]}function oa(e){return e.replace(/start|end/g,t=>jp[t])}function qp(e,t,s){const i=["left","right"],o=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return s?t?o:i:t?i:o;case"left":case"right":return t?r:n;default:return[]}}function Gp(e,t,s,i){const o=Yi(e);let r=qp(qs(e),s==="start",i);return o&&(r=r.map(n=>n+"-"+o),t&&(r=r.concat(r.map(oa)))),r}function Dr(e){return e.replace(/left|right|bottom|top/g,t=>Hp[t])}function Yp(e){return{top:0,right:0,bottom:0,left:0,...e}}function Gd(e){return typeof e!="number"?Yp(e):{top:e,right:e,bottom:e,left:e}}function Pr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ql(e,t,s){let{reference:i,floating:o}=e;const r=Xo(t),n=Ba(t),a=Ua(n),l=qs(t),d=r==="y",p=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,f=i[a]/2-o[a]/2;let m;switch(l){case"top":m={x:p,y:i.y-o.height};break;case"bottom":m={x:p,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:u};break;case"left":m={x:i.x-o.width,y:u};break;default:m={x:i.x,y:i.y}}switch(Yi(t)){case"start":m[n]-=f*(s&&d?-1:1);break;case"end":m[n]+=f*(s&&d?-1:1);break}return m}const Xp=async(e,t,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:n}=s,a=r.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let d=await n.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:u}=Ql(d,i,l),f=i,m={},g=0;for(let v=0;v<a.length;v++){const{name:A,fn:$}=a[v],{x:k,y:T,data:y,reset:x}=await $({x:p,y:u,initialPlacement:i,placement:f,strategy:o,middlewareData:m,rects:d,platform:n,elements:{reference:e,floating:t}});if(p=k??p,u=T??u,m={...m,[A]:{...m[A],...y}},x&&g<=50){g++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(d=x.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:p,y:u}=Ql(d,f,l)),v=-1;continue}}return{x:p,y:u,placement:f,strategy:o,middlewareData:m}};async function Ha(e,t){var s;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:n,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:m=0}=Gi(t,e),g=Gd(m),A=a[f?u==="floating"?"reference":"floating":u],$=Pr(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(A)))==null||s?A:A.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:d,rootBoundary:p,strategy:l})),k=u==="floating"?{...n.floating,x:i,y:o}:n.reference,T=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),y=await(r.isElement==null?void 0:r.isElement(T))?await(r.getScale==null?void 0:r.getScale(T))||{x:1,y:1}:{x:1,y:1},x=Pr(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:k,offsetParent:T,strategy:l}):k);return{top:($.top-x.top+g.top)/y.y,bottom:(x.bottom-$.bottom+g.bottom)/y.y,left:($.left-x.left+g.left)/y.x,right:(x.right-$.right+g.right)/y.x}}const Jp=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:i,placement:o,rects:r,platform:n,elements:a,middlewareData:l}=t,{element:d,padding:p=0}=Gi(e,t)||{};if(d==null)return{};const u=Gd(p),f={x:s,y:i},m=Ba(o),g=Ua(m),v=await n.getDimensions(d),A=m==="y",$=A?"top":"left",k=A?"bottom":"right",T=A?"clientHeight":"clientWidth",y=r.reference[g]+r.reference[m]-f[m]-r.floating[g],x=f[m]-r.reference[m],C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let F=C?C[T]:0;(!F||!await(n.isElement==null?void 0:n.isElement(C)))&&(F=a.floating[T]||r.floating[g]);const D=y/2-x/2,L=F/2-v[g]/2-1,R=Ws(u[$],L),ce=Ws(u[k],L),te=R,xe=F-v[g]-ce,Ee=F/2-v[g]/2+D,fe=ia(te,Ee,xe),q=!l.arrow&&Yi(o)!=null&&Ee!=fe&&r.reference[g]/2-(Ee<te?R:ce)-v[g]/2<0,se=q?Ee<te?Ee-te:Ee-xe:0;return{[m]:f[m]+se,data:{[m]:fe,centerOffset:Ee-fe-se,...q&&{alignmentOffset:se}},reset:q}}}),Qp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:o,middlewareData:r,rects:n,initialPlacement:a,platform:l,elements:d}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...A}=Gi(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const $=qs(o),k=qs(a)===a,T=await(l.isRTL==null?void 0:l.isRTL(d.floating)),y=f||(k||!v?[Dr(a)]:Kp(a));!f&&g!=="none"&&y.push(...Gp(a,v,g,T));const x=[a,...y],C=await Ha(t,A),F=[];let D=((i=r.flip)==null?void 0:i.overflows)||[];if(p&&F.push(C[$]),u){const te=Wp(o,n,T);F.push(C[te[0]],C[te[1]])}if(D=[...D,{placement:o,overflows:F}],!F.every(te=>te<=0)){var L,R;const te=(((L=r.flip)==null?void 0:L.index)||0)+1,xe=x[te];if(xe)return{data:{index:te,overflows:D},reset:{placement:xe}};let Ee=(R=D.filter(fe=>fe.overflows[0]<=0).sort((fe,q)=>fe.overflows[1]-q.overflows[1])[0])==null?void 0:R.placement;if(!Ee)switch(m){case"bestFit":{var ce;const fe=(ce=D.map(q=>[q.placement,q.overflows.filter(se=>se>0).reduce((se,le)=>se+le,0)]).sort((q,se)=>q[1]-se[1])[0])==null?void 0:ce[0];fe&&(Ee=fe);break}case"initialPlacement":Ee=a;break}if(o!==Ee)return{reset:{placement:Ee}}}return{}}}};async function Zp(e,t){const{placement:s,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),n=qs(s),a=Yi(s),l=Xo(s)==="y",d=["left","top"].includes(n)?-1:1,p=r&&l?-1:1,u=Gi(t,e);let{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*p,y:f*d}:{x:f*d,y:m*p}}const ef=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:s,y:i}=t,o=await Zp(t,e);return{x:s+o.x,y:i+o.y,data:o}}}},tf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:o}=t,{mainAxis:r=!0,crossAxis:n=!1,limiter:a={fn:A=>{let{x:$,y:k}=A;return{x:$,y:k}}},...l}=Gi(e,t),d={x:s,y:i},p=await Ha(t,l),u=Xo(qs(o)),f=qd(u);let m=d[f],g=d[u];if(r){const A=f==="y"?"top":"left",$=f==="y"?"bottom":"right",k=m+p[A],T=m-p[$];m=ia(k,m,T)}if(n){const A=u==="y"?"top":"left",$=u==="y"?"bottom":"right",k=g+p[A],T=g-p[$];g=ia(k,g,T)}const v=a.fn({...t,[f]:m,[u]:g});return{...v,data:{x:v.x-s,y:v.y-i}}}}},Zl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:s,rects:i,platform:o,elements:r}=t,{apply:n=()=>{},...a}=Gi(e,t),l=await Ha(t,a),d=qs(s),p=Yi(s),u=Xo(s)==="y",{width:f,height:m}=i.floating;let g,v;d==="top"||d==="bottom"?(g=d,v=p===(await(o.isRTL==null?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(v=d,g=p==="end"?"top":"bottom");const A=m-l[g],$=f-l[v],k=!t.middlewareData.shift;let T=A,y=$;if(u){const C=f-l.left-l.right;y=p||k?Ws($,C):C}else{const C=m-l.top-l.bottom;T=p||k?Ws(A,C):C}if(k&&!p){const C=Dt(l.left,0),F=Dt(l.right,0),D=Dt(l.top,0),L=Dt(l.bottom,0);u?y=f-2*(C!==0||F!==0?C+F:Dt(l.left,l.right)):T=m-2*(D!==0||L!==0?D+L:Dt(l.top,l.bottom))}await n({...t,availableWidth:y,availableHeight:T});const x=await o.getDimensions(r.floating);return f!==x.width||m!==x.height?{reset:{rects:!0}}:{}}}};function Gs(e){return Yd(e)?(e.nodeName||"").toLowerCase():"#document"}function Ft(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Os(e){var t;return(t=(Yd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Yd(e){return e instanceof Node||e instanceof Ft(e).Node}function Ts(e){return e instanceof Element||e instanceof Ft(e).Element}function gs(e){return e instanceof HTMLElement||e instanceof Ft(e).HTMLElement}function ec(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ft(e).ShadowRoot}function Jo(e){const{overflow:t,overflowX:s,overflowY:i,display:o}=Yt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(o)}function sf(e){return["table","td","th"].includes(Gs(e))}function ja(e){const t=Wa(),s=Yt(e);return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function of(e){let t=Bi(e);for(;gs(t)&&!sn(t);){if(ja(t))return t;t=Bi(t)}return null}function Wa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function sn(e){return["html","body","#document"].includes(Gs(e))}function Yt(e){return Ft(e).getComputedStyle(e)}function on(e){return Ts(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Bi(e){if(Gs(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ec(e)&&e.host||Os(e);return ec(t)?t.host:t}function Xd(e){const t=Bi(e);return sn(t)?e.ownerDocument?e.ownerDocument.body:e.body:gs(t)&&Jo(t)?t:Xd(t)}function Mo(e,t,s){var i;t===void 0&&(t=[]),s===void 0&&(s=!0);const o=Xd(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),n=Ft(o);return r?t.concat(n,n.visualViewport||[],Jo(o)?o:[],n.frameElement&&s?Mo(n.frameElement):[]):t.concat(o,Mo(o,[],s))}function Jd(e){const t=Yt(e);let s=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=gs(e),r=o?e.offsetWidth:s,n=o?e.offsetHeight:i,a=Rr(s)!==r||Rr(i)!==n;return a&&(s=r,i=n),{width:s,height:i,$:a}}function Ka(e){return Ts(e)?e:e.contextElement}function Di(e){const t=Ka(e);if(!gs(t))return Ks(1);const s=t.getBoundingClientRect(),{width:i,height:o,$:r}=Jd(t);let n=(r?Rr(s.width):s.width)/i,a=(r?Rr(s.height):s.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const rf=Ks(0);function Qd(e){const t=Ft(e);return!Wa()||!t.visualViewport?rf:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nf(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Ft(e)?!1:t}function gi(e,t,s,i){t===void 0&&(t=!1),s===void 0&&(s=!1);const o=e.getBoundingClientRect(),r=Ka(e);let n=Ks(1);t&&(i?Ts(i)&&(n=Di(i)):n=Di(e));const a=nf(r,s,i)?Qd(r):Ks(0);let l=(o.left+a.x)/n.x,d=(o.top+a.y)/n.y,p=o.width/n.x,u=o.height/n.y;if(r){const f=Ft(r),m=i&&Ts(i)?Ft(i):i;let g=f.frameElement;for(;g&&i&&m!==f;){const v=Di(g),A=g.getBoundingClientRect(),$=Yt(g),k=A.left+(g.clientLeft+parseFloat($.paddingLeft))*v.x,T=A.top+(g.clientTop+parseFloat($.paddingTop))*v.y;l*=v.x,d*=v.y,p*=v.x,u*=v.y,l+=k,d+=T,g=Ft(g).frameElement}}return Pr({width:p,height:u,x:l,y:d})}function af(e){let{rect:t,offsetParent:s,strategy:i}=e;const o=gs(s),r=Os(s);if(s===r)return t;let n={scrollLeft:0,scrollTop:0},a=Ks(1);const l=Ks(0);if((o||!o&&i!=="fixed")&&((Gs(s)!=="body"||Jo(r))&&(n=on(s)),gs(s))){const d=gi(s);a=Di(s),l.x=d.x+s.clientLeft,l.y=d.y+s.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-n.scrollLeft*a.x+l.x,y:t.y*a.y-n.scrollTop*a.y+l.y}}function lf(e){return Array.from(e.getClientRects())}function Zd(e){return gi(Os(e)).left+on(e).scrollLeft}function cf(e){const t=Os(e),s=on(e),i=e.ownerDocument.body,o=Dt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=Dt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let n=-s.scrollLeft+Zd(e);const a=-s.scrollTop;return Yt(i).direction==="rtl"&&(n+=Dt(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:n,y:a}}function df(e,t){const s=Ft(e),i=Os(e),o=s.visualViewport;let r=i.clientWidth,n=i.clientHeight,a=0,l=0;if(o){r=o.width,n=o.height;const d=Wa();(!d||d&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:r,height:n,x:a,y:l}}function uf(e,t){const s=gi(e,!0,t==="fixed"),i=s.top+e.clientTop,o=s.left+e.clientLeft,r=gs(e)?Di(e):Ks(1),n=e.clientWidth*r.x,a=e.clientHeight*r.y,l=o*r.x,d=i*r.y;return{width:n,height:a,x:l,y:d}}function tc(e,t,s){let i;if(t==="viewport")i=df(e,s);else if(t==="document")i=cf(Os(e));else if(Ts(t))i=uf(t,s);else{const o=Qd(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Pr(i)}function eu(e,t){const s=Bi(e);return s===t||!Ts(s)||sn(s)?!1:Yt(s).position==="fixed"||eu(s,t)}function hf(e,t){const s=t.get(e);if(s)return s;let i=Mo(e,[],!1).filter(a=>Ts(a)&&Gs(a)!=="body"),o=null;const r=Yt(e).position==="fixed";let n=r?Bi(e):e;for(;Ts(n)&&!sn(n);){const a=Yt(n),l=ja(n);!l&&a.position==="fixed"&&(o=null),(r?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Jo(n)&&!l&&eu(e,n))?i=i.filter(p=>p!==n):o=a,n=Bi(n)}return t.set(e,i),i}function pf(e){let{element:t,boundary:s,rootBoundary:i,strategy:o}=e;const n=[...s==="clippingAncestors"?hf(t,this._c):[].concat(s),i],a=n[0],l=n.reduce((d,p)=>{const u=tc(t,p,o);return d.top=Dt(u.top,d.top),d.right=Ws(u.right,d.right),d.bottom=Ws(u.bottom,d.bottom),d.left=Dt(u.left,d.left),d},tc(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ff(e){return Jd(e)}function mf(e,t,s){const i=gs(t),o=Os(t),r=s==="fixed",n=gi(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=Ks(0);if(i||!i&&!r)if((Gs(t)!=="body"||Jo(o))&&(a=on(t)),i){const d=gi(t,!0,r,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else o&&(l.x=Zd(o));return{x:n.left+a.scrollLeft-l.x,y:n.top+a.scrollTop-l.y,width:n.width,height:n.height}}function sc(e,t){return!gs(e)||Yt(e).position==="fixed"?null:t?t(e):e.offsetParent}function tu(e,t){const s=Ft(e);if(!gs(e))return s;let i=sc(e,t);for(;i&&sf(i)&&Yt(i).position==="static";)i=sc(i,t);return i&&(Gs(i)==="html"||Gs(i)==="body"&&Yt(i).position==="static"&&!ja(i))?s:i||of(e)||s}const gf=async function(e){let{reference:t,floating:s,strategy:i}=e;const o=this.getOffsetParent||tu,r=this.getDimensions;return{reference:mf(t,await o(s),i),floating:{x:0,y:0,...await r(s)}}};function bf(e){return Yt(e).direction==="rtl"}const Sr={convertOffsetParentRelativeRectToViewportRelativeRect:af,getDocumentElement:Os,getClippingRect:pf,getOffsetParent:tu,getElementRects:gf,getClientRects:lf,getDimensions:ff,getScale:Di,isElement:Ts,isRTL:bf};function yf(e,t){let s=null,i;const o=Os(e);function r(){clearTimeout(i),s&&s.disconnect(),s=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const{left:d,top:p,width:u,height:f}=e.getBoundingClientRect();if(a||t(),!u||!f)return;const m=ar(p),g=ar(o.clientWidth-(d+u)),v=ar(o.clientHeight-(p+f)),A=ar(d),k={rootMargin:-m+"px "+-g+"px "+-v+"px "+-A+"px",threshold:Dt(0,Ws(1,l))||1};let T=!0;function y(x){const C=x[0].intersectionRatio;if(C!==l){if(!T)return n();C?n(!1,C):i=setTimeout(()=>{n(!1,1e-7)},100)}T=!1}try{s=new IntersectionObserver(y,{...k,root:o.ownerDocument})}catch{s=new IntersectionObserver(y,k)}s.observe(e)}return n(!0),r}function vf(e,t,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=Ka(e),p=o||r?[...d?Mo(d):[],...Mo(t)]:[];p.forEach($=>{o&&$.addEventListener("scroll",s,{passive:!0}),r&&$.addEventListener("resize",s)});const u=d&&a?yf(d,s):null;let f=-1,m=null;n&&(m=new ResizeObserver($=>{let[k]=$;k&&k.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{m&&m.observe(t)})),s()}),d&&!l&&m.observe(d),m.observe(t));let g,v=l?gi(e):null;l&&A();function A(){const $=gi(e);v&&($.x!==v.x||$.y!==v.y||$.width!==v.width||$.height!==v.height)&&s(),v=$,g=requestAnimationFrame(A)}return s(),()=>{p.forEach($=>{o&&$.removeEventListener("scroll",s),r&&$.removeEventListener("resize",s)}),u&&u(),m&&m.disconnect(),m=null,l&&cancelAnimationFrame(g)}}const _f=(e,t,s)=>{const i=new Map,o={platform:Sr,...s},r={...o.platform,_c:i};return Xp(e,t,{...o,platform:r})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=qo(class extends Go{constructor(e){var t;if(super(e),e.type!==ps.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,i;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((s=this.nt)===null||s===void 0)&&s.has(r))&&this.it.add(r);return this.render(t)}const o=e.element.classList;this.it.forEach(r=>{r in t||(o.remove(r),this.it.delete(r))});for(const r in t){const n=!!t[r];n===this.it.has(r)||!((i=this.nt)===null||i===void 0)&&i.has(r)||(n?(o.add(r),this.it.add(r)):(o.remove(r),this.it.delete(r)))}return Vt}});function su(e){return wf(e)}function Dn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function wf(e){for(let t=e;t;t=Dn(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Dn(e);t;t=Dn(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||s.filter!=="none"||t.tagName==="BODY"))return t}return null}function xf(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var Ie=class extends G{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||xf(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=vf(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ef({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Zl({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Qp({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(tf({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Zl({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Jp({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>Sr.getOffsetParent(s,su):Sr.getOffsetParent;_f(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Yo(zs({},Sr),{getOffsetParent:t})}).then(({x:s,y:i,middlewareData:o,placement:r})=>{const n=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const l=o.arrow.x,d=o.arrow.y;let p="",u="",f="",m="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?g:"",m=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":g,m=n?g:"",f=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",p=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:p,right:u,bottom:f,left:m,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${oe({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?O`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Ie.styles=Mp;c([j(".popup")],Ie.prototype,"popup",2);c([j(".popup__arrow")],Ie.prototype,"arrowEl",2);c([h()],Ie.prototype,"anchor",2);c([h({type:Boolean,reflect:!0})],Ie.prototype,"active",2);c([h({reflect:!0})],Ie.prototype,"placement",2);c([h({reflect:!0})],Ie.prototype,"strategy",2);c([h({type:Number})],Ie.prototype,"distance",2);c([h({type:Number})],Ie.prototype,"skidding",2);c([h({type:Boolean})],Ie.prototype,"arrow",2);c([h({attribute:"arrow-placement"})],Ie.prototype,"arrowPlacement",2);c([h({attribute:"arrow-padding",type:Number})],Ie.prototype,"arrowPadding",2);c([h({type:Boolean})],Ie.prototype,"flip",2);c([h({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],Ie.prototype,"flipFallbackPlacements",2);c([h({attribute:"flip-fallback-strategy"})],Ie.prototype,"flipFallbackStrategy",2);c([h({type:Object})],Ie.prototype,"flipBoundary",2);c([h({attribute:"flip-padding",type:Number})],Ie.prototype,"flipPadding",2);c([h({type:Boolean})],Ie.prototype,"shift",2);c([h({type:Object})],Ie.prototype,"shiftBoundary",2);c([h({attribute:"shift-padding",type:Number})],Ie.prototype,"shiftPadding",2);c([h({attribute:"auto-size"})],Ie.prototype,"autoSize",2);c([h()],Ie.prototype,"sync",2);c([h({type:Object})],Ie.prototype,"autoSizeBoundary",2);c([h({attribute:"auto-size-padding",type:Number})],Ie.prototype,"autoSizePadding",2);const ra=new Set,kf=new MutationObserver(ru),Li=new Map;let iu=document.documentElement.dir||"ltr",ou=document.documentElement.lang||navigator.language,ni;kf.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Cf(...e){e.map(t=>{const s=t.$code.toLowerCase();Li.has(s)?Li.set(s,Object.assign(Object.assign({},Li.get(s)),t)):Li.set(s,t),ni||(ni=t)}),ru()}function ru(){iu=document.documentElement.dir||"ltr",ou=document.documentElement.lang||navigator.language,[...ra.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ef=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ra.add(this.host)}hostDisconnected(){ra.delete(this.host)}dir(){return`${this.host.dir||iu}`.toLowerCase()}lang(){return`${this.host.lang||ou}`.toLowerCase()}getTranslationData(t){var s,i;const o=new Intl.Locale(t.replace(/_/g,"-")),r=o?.language.toLowerCase(),n=(i=(s=o?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",a=Li.get(`${r}-${n}`),l=Li.get(r);return{locale:o,language:r,region:n,primary:a,secondary:l}}exists(t,s){var i;const{primary:o,secondary:r}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(o&&o[t]||r&&r[t]||s.includeFallback&&ni&&ni[t])}term(t,...s){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(o&&o[t])r=o[t];else if(ni&&ni[t])r=ni[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...s):r}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,s)}};var ke=class extends Ef{},Ut=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function $f(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var na="";function aa(e){na=e}function Sf(e=""){if(!na){const t=[...document.getElementsByTagName("script")],s=t.find(i=>i.hasAttribute("data-shoelace"));if(s)aa(s.getAttribute("data-shoelace"));else{const i=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),aa(o.split("/").slice(0,-1).join("/"))}}return na.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Af={name:"default",resolver:e=>Sf(`assets/icons/${e}.svg`)},Tf=Af,ic={caret:`
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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
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
  `},If={name:"system",resolver:e=>e in ic?`data:image/svg+xml,${encodeURIComponent(ic[e])}`:""},zf=If,Of=[Tf,zf],la=[];function Lf(e){la.push(e)}function Mf(e){la=la.filter(t=>t!==e)}function oc(e){return Of.find(t=>t.name===e)}var Rf=J`
  ${Z}

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
`;function U(e,t){const s=zs({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:r}=i,n=Array.isArray(e)?e:[e];i.update=function(a){n.forEach(l=>{const d=l;if(a.has(d)){const p=a.get(d),u=this[d];p!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[o](p,u)}}),r.call(this,a)}}}var ao=Symbol(),lr=Symbol(),Pn,Vn=new Map,Le=class extends G{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let i;if(t?.spriteSheet)return O`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?ao:lr}catch{return lr}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(((s=r?.tagName)==null?void 0:s.toLowerCase())!=="svg")return ao;Pn||(Pn=new DOMParser);const a=Pn.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ao}catch{return ao}}connectedCallback(){super.connectedCallback(),Lf(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Mf(this)}getIconSource(){const e=oc(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),i=s?oc(this.library):void 0;if(!t){this.svg=null;return}let o=Vn.get(t);if(o||(o=this.resolveIcon(t,i),Vn.set(t,o)),!this.initialRender)return;const r=await o;if(r===lr&&Vn.delete(t),t===this.getIconSource().url){if(xp(r)){this.svg=r;return}switch(r){case lr:case ao:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=i?.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Le.styles=Rf;c([re()],Le.prototype,"svg",2);c([h({reflect:!0})],Le.prototype,"name",2);c([h()],Le.prototype,"src",2);c([h()],Le.prototype,"label",2);c([h({reflect:!0})],Le.prototype,"library",2);c([U("label")],Le.prototype,"handleLabelChange",1);c([U(["name","src","library"])],Le.prototype,"setIcon",1);var Bt=class extends G{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new ke(this),this.hasSlotController=new Ut(this,"submenu"),this.submenuController=new Op(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return $f(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return O`
      <div
        id="anchor"
        part="base"
        class=${oe({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};Bt.styles=Lp;Bt.dependencies={"sl-icon":Le,"sl-popup":Ie};c([j("slot:not([name])")],Bt.prototype,"defaultSlot",2);c([j(".menu-item")],Bt.prototype,"menuItem",2);c([h()],Bt.prototype,"type",2);c([h({type:Boolean,reflect:!0})],Bt.prototype,"checked",2);c([h()],Bt.prototype,"value",2);c([h({type:Boolean,reflect:!0})],Bt.prototype,"disabled",2);c([U("checked")],Bt.prototype,"handleCheckedChange",1);c([U("disabled")],Bt.prototype,"handleDisabledChange",1);c([U("type")],Bt.prototype,"handleTypeChange",1);var qa=class extends G{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){if(!(e.target instanceof Bt))return;const t=e.target;t.type==="checkbox"&&(t.checked=!t.checked),this.emit("sl-select",{detail:{item:t}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let i=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return O`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};qa.styles=wp;c([j("slot")],qa.prototype,"defaultSlot",2);qa.define("sl-menu");var Df={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Cf(Df);Bt.define("sl-menu-item");var Pf=J`
  ${Z}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
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
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,rn=class extends G{constructor(){super(...arguments),this.localize=new ke(this)}render(){return O`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};rn.styles=Pf;rn.define("sl-spinner");var Vf=J`
  ${Z}

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
`;function Ff(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null&&su(e)===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Nf(e){var t,s;const i=Ar(e),o=(t=i[0])!=null?t:null,r=(s=i[i.length-1])!=null?s:null;return{start:o,end:r}}function Ar(e){const t=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&Ff(i)&&t.push(i);const o=r=>{var n;return((n=r.getRootNode({composed:!0}))==null?void 0:n.host)!==e};i instanceof HTMLSlotElement&&o(i)&&i.assignedElements({flatten:!0}).forEach(r=>{s(r)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}[...i.children].forEach(o=>s(o))}return s(e),t}var nu=new Map,Uf=new WeakMap;function Bf(e){return e??{keyframes:[],options:{duration:0}}}function rc(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Se(e,t){nu.set(e,Bf(t))}function Ne(e,t,s){const i=Uf.get(e);if(i?.[t])return rc(i[t],s.dir);const o=nu.get(t);return o?rc(o,s.dir):{keyframes:[],options:{duration:0}}}function wt(e,t){return new Promise(s=>{function i(o){o.target===e&&(e.removeEventListener(t,i),s())}e.addEventListener(t,i)})}function We(e,t,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Yo(zs({},s),{duration:Ga()?0:s.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function nc(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Ga(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ge(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{const i=requestAnimationFrame(s);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function Vr(e,t){return e.map(s=>Yo(zs({},s),{height:s.height==="auto"?`${t}px`:s.height}))}var bt=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,o;const r=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||r?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),i=s[0],o=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Nf(i).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,wt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ge(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ne(this,"dropdown.show",{dir:this.localize.dir()});await We(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ge(this);const{keyframes:e,options:t}=Ne(this,"dropdown.hide",{dir:this.localize.dir()});await We(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return O`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${oe({dropdown:!0,"dropdown--open":this.open})}
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
    `}};bt.styles=Vf;bt.dependencies={"sl-popup":Ie};c([j(".dropdown")],bt.prototype,"popup",2);c([j(".dropdown__trigger")],bt.prototype,"trigger",2);c([j(".dropdown__panel")],bt.prototype,"panel",2);c([h({type:Boolean,reflect:!0})],bt.prototype,"open",2);c([h({reflect:!0})],bt.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);c([h({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],bt.prototype,"stayOpenOnSelect",2);c([h({attribute:!1})],bt.prototype,"containingElement",2);c([h({type:Number})],bt.prototype,"distance",2);c([h({type:Number})],bt.prototype,"skidding",2);c([h({type:Boolean})],bt.prototype,"hoist",2);c([U("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);Se("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Se("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});bt.define("sl-dropdown");var Hf=J`
  ${Z}

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
 */const au=Symbol.for(""),jf=e=>{if(e?.r===au)return e?._$litStatic$},Fr=(e,...t)=>({_$litStatic$:t.reduce((s,i,o)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:au}),ac=new Map,Wf=e=>(t,...s)=>{const i=s.length;let o,r;const n=[],a=[];let l,d=0,p=!1;for(;d<i;){for(l=t[d];d<i&&(r=s[d],(o=jf(r))!==void 0);)l+=o+t[++d],p=!0;d!==i&&a.push(r),n.push(l),d++}if(d===i&&n.push(t[i]),p){const u=n.join("$$lit$$");(t=ac.get(u))===void 0&&(n.raw=n,ac.set(u,t=n)),s=a}return e(t,...s)},_o=Wf(O);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=e=>e??Fe;var Qe=class extends G{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Fr`a`:Fr`button`;return _o`
      <${t}
        part="base"
        class=${oe({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Y(e?void 0:this.disabled)}
        type=${Y(e?void 0:"button")}
        href=${Y(e?this.href:void 0)}
        target=${Y(e?this.target:void 0)}
        download=${Y(e?this.download:void 0)}
        rel=${Y(e&&this.target?"noreferrer noopener":void 0)}
        role=${Y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Y(this.name)}
          library=${Y(this.library)}
          src=${Y(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Qe.styles=Hf;Qe.dependencies={"sl-icon":Le};c([j(".icon-button")],Qe.prototype,"button",2);c([re()],Qe.prototype,"hasFocus",2);c([h()],Qe.prototype,"name",2);c([h()],Qe.prototype,"library",2);c([h()],Qe.prototype,"src",2);c([h()],Qe.prototype,"href",2);c([h()],Qe.prototype,"target",2);c([h()],Qe.prototype,"download",2);c([h()],Qe.prototype,"label",2);c([h({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);Qe.define("sl-icon-button");var Kf=J`
  ${Z}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,_i=class extends G{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=lo(e.target);t?.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=lo(e.target);t?.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=lo(e.target);t?.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=lo(e.target);t?.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const s=e.indexOf(t),i=lo(t);i&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",s===0),i.classList.toggle("sl-button-group__button--inner",s>0&&s<e.length-1),i.classList.toggle("sl-button-group__button--last",s===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return O`
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
    `}};_i.styles=Kf;c([j("slot")],_i.prototype,"defaultSlot",2);c([re()],_i.prototype,"disableRole",2);c([h()],_i.prototype,"label",2);function lo(e){var t;const s="sl-button, sl-radio-button";return(t=e.closest(s))!=null?t:e.querySelector(s)}_i.define("sl-button-group");var co=new WeakMap,uo=new WeakMap,Fn=new WeakSet,cr=new WeakMap,Ls=class{constructor(e,t){this.handleFormData=s=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!i&&!n&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(a=>{s.formData.append(o,a.toString())}):s.formData.append(o,r.toString()))},this.handleFormSubmit=s=>{var i;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=co.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),cr.set(this.host,[])},this.handleInteraction=s=>{const i=cr.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=zs({form:s=>{if(s.hasAttribute("form")&&s.getAttribute("form")!==""){const i=s.getRootNode(),o=s.getAttribute("form");if(o)return i.getElementById(o)}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),cr.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),cr.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,co.has(this.form)?co.get(this.form).add(this.host):co.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),uo.has(this.form)||(uo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=co.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),uo.has(this.form)&&(this.form.reportValidity=uo.get(this.form),uo.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Fn.add(e):Fn.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&s.setAttribute(i,t.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=!!Fn.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},nn=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),qf=Object.freeze(Yo(zs({},nn),{valid:!1,valueMissing:!0})),Gf=Object.freeze(Yo(zs({},nn),{valid:!1,customError:!0})),lu=J`
  ${Z}

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
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
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
    border-color: var(--sl-color-neutral-300);
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
    border-color: var(--sl-color-neutral-300);
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

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
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
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ae=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),s=e.getAttribute("form");return t.getElementById(s)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Ut(this,"[default]","prefix","suffix"),this.localize=new ke(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:nn}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Fr`a`:Fr`button`;return _o`
      <${t}
        part="base"
        class=${oe({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Y(e?void 0:this.disabled)}
        type=${Y(e?void 0:this.type)}
        title=${this.title}
        name=${Y(e?void 0:this.name)}
        value=${Y(e?void 0:this.value)}
        href=${Y(e?this.href:void 0)}
        target=${Y(e?this.target:void 0)}
        download=${Y(e?this.download:void 0)}
        rel=${Y(e?this.rel:void 0)}
        role=${Y(e?void 0:"button")}
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
        ${this.caret?_o` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?_o`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};Ae.styles=lu;Ae.dependencies={"sl-icon":Le,"sl-spinner":rn};c([j(".button")],Ae.prototype,"button",2);c([re()],Ae.prototype,"hasFocus",2);c([re()],Ae.prototype,"invalid",2);c([h()],Ae.prototype,"title",2);c([h({reflect:!0})],Ae.prototype,"variant",2);c([h({reflect:!0})],Ae.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Ae.prototype,"caret",2);c([h({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Ae.prototype,"loading",2);c([h({type:Boolean,reflect:!0})],Ae.prototype,"outline",2);c([h({type:Boolean,reflect:!0})],Ae.prototype,"pill",2);c([h({type:Boolean,reflect:!0})],Ae.prototype,"circle",2);c([h()],Ae.prototype,"type",2);c([h()],Ae.prototype,"name",2);c([h()],Ae.prototype,"value",2);c([h()],Ae.prototype,"href",2);c([h()],Ae.prototype,"target",2);c([h()],Ae.prototype,"rel",2);c([h()],Ae.prototype,"download",2);c([h()],Ae.prototype,"form",2);c([h({attribute:"formaction"})],Ae.prototype,"formAction",2);c([h({attribute:"formenctype"})],Ae.prototype,"formEnctype",2);c([h({attribute:"formmethod"})],Ae.prototype,"formMethod",2);c([h({attribute:"formnovalidate",type:Boolean})],Ae.prototype,"formNoValidate",2);c([h({attribute:"formtarget"})],Ae.prototype,"formTarget",2);c([U("disabled",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleDisabledChange",1);Ae.define("sl-button");var Yf=J`
  ${Z}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
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
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,wi=(e="value")=>(t,s)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,n,a){var l;const d=i.getPropertyOptions(e),p=typeof d.attribute=="string"?d.attribute:e;if(r===p){const u=d.converter||Io,m=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:Io.fromAttribute)(a,d.type);this[e]!==m&&(this[s]=m)}o.call(this,r,n,a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=qo(class extends Go{constructor(e){if(super(e),e.type!==ps.PROPERTY&&e.type!==ps.ATTRIBUTE&&e.type!==ps.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hd(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Vt||t===Fe)return t;const s=e.element,i=e.name;if(e.type===ps.PROPERTY){if(t===s[i])return Vt}else if(e.type===ps.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(i))return Vt}else if(e.type===ps.ATTRIBUTE&&s.getAttribute(i)===t+"")return Vt;return Cp(e),t}});var xt=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return O`
      <label
        part="base"
        class=${oe({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${Y(this.value)}
          .checked=${bi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
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
    `}};xt.styles=Yf;c([j('input[type="checkbox"]')],xt.prototype,"input",2);c([re()],xt.prototype,"hasFocus",2);c([h()],xt.prototype,"title",2);c([h()],xt.prototype,"name",2);c([h()],xt.prototype,"value",2);c([h({reflect:!0})],xt.prototype,"size",2);c([h({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],xt.prototype,"checked",2);c([wi("checked")],xt.prototype,"defaultChecked",2);c([h({reflect:!0})],xt.prototype,"form",2);c([h({type:Boolean,reflect:!0})],xt.prototype,"required",2);c([U("checked",{waitUntilFirstUpdate:!0})],xt.prototype,"handleCheckedChange",1);c([U("disabled",{waitUntilFirstUpdate:!0})],xt.prototype,"handleDisabledChange",1);xt.define("sl-switch");var Xf=J`
  ${Z}

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
`,rs=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ge(this.body);const{keyframes:t,options:s}=Ne(this,"details.show",{dir:this.localize.dir()});await We(this.body,Vr(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ge(this.body);const{keyframes:t,options:s}=Ne(this,"details.hide",{dir:this.localize.dir()});await We(this.body,Vr(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,wt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,wt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return O`
      <details
        part="base"
        class=${oe({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};rs.styles=Xf;rs.dependencies={"sl-icon":Le};c([j(".details")],rs.prototype,"details",2);c([j(".details__header")],rs.prototype,"header",2);c([j(".details__body")],rs.prototype,"body",2);c([j(".details__expand-icon-slot")],rs.prototype,"expandIconSlot",2);c([h({type:Boolean,reflect:!0})],rs.prototype,"open",2);c([h()],rs.prototype,"summary",2);c([h({type:Boolean,reflect:!0})],rs.prototype,"disabled",2);c([U("open",{waitUntilFirstUpdate:!0})],rs.prototype,"handleOpenChange",1);Se("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Se("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});rs.define("sl-details");var Qo=J`
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
`,Jf=J`
  ${Z}
  ${Qo}

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
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
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

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

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

  .input--empty .input__clear {
    visibility: hidden;
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
`,he=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ut(this,"help-text","label"),this.localize=new ke(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,i){this.input.setRangeText(e,t,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,r=o&&(typeof this.value=="number"||this.value.length>0);return O`
      <div
        part="form-control"
        class=${oe({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${oe({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${Y(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Y(this.placeholder)}
              minlength=${Y(this.minlength)}
              maxlength=${Y(this.maxlength)}
              min=${Y(this.min)}
              max=${Y(this.max)}
              step=${Y(this.step)}
              .value=${bi(this.value)}
              autocapitalize=${Y(this.autocapitalize)}
              autocomplete=${Y(this.autocomplete)}
              autocorrect=${Y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Y(this.pattern)}
              enterkeyhint=${Y(this.enterkeyhint)}
              inputmode=${Y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?O`
                  <button
                    part="clear-button"
                    class=${oe({input__clear:!0,"input__clear--visible":r})}
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
            ${this.passwordToggle&&!this.disabled?O`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?O`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:O`
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
    `}};he.styles=Jf;he.dependencies={"sl-icon":Le};c([j(".input__control")],he.prototype,"input",2);c([re()],he.prototype,"hasFocus",2);c([h()],he.prototype,"title",2);c([h({reflect:!0})],he.prototype,"type",2);c([h()],he.prototype,"name",2);c([h()],he.prototype,"value",2);c([wi()],he.prototype,"defaultValue",2);c([h({reflect:!0})],he.prototype,"size",2);c([h({type:Boolean,reflect:!0})],he.prototype,"filled",2);c([h({type:Boolean,reflect:!0})],he.prototype,"pill",2);c([h()],he.prototype,"label",2);c([h({attribute:"help-text"})],he.prototype,"helpText",2);c([h({type:Boolean})],he.prototype,"clearable",2);c([h({type:Boolean,reflect:!0})],he.prototype,"disabled",2);c([h()],he.prototype,"placeholder",2);c([h({type:Boolean,reflect:!0})],he.prototype,"readonly",2);c([h({attribute:"password-toggle",type:Boolean})],he.prototype,"passwordToggle",2);c([h({attribute:"password-visible",type:Boolean})],he.prototype,"passwordVisible",2);c([h({attribute:"no-spin-buttons",type:Boolean})],he.prototype,"noSpinButtons",2);c([h({reflect:!0})],he.prototype,"form",2);c([h({type:Boolean,reflect:!0})],he.prototype,"required",2);c([h()],he.prototype,"pattern",2);c([h({type:Number})],he.prototype,"minlength",2);c([h({type:Number})],he.prototype,"maxlength",2);c([h()],he.prototype,"min",2);c([h()],he.prototype,"max",2);c([h()],he.prototype,"step",2);c([h()],he.prototype,"autocapitalize",2);c([h()],he.prototype,"autocorrect",2);c([h()],he.prototype,"autocomplete",2);c([h({type:Boolean})],he.prototype,"autofocus",2);c([h()],he.prototype,"enterkeyhint",2);c([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],he.prototype,"spellcheck",2);c([h()],he.prototype,"inputmode",2);c([U("disabled",{waitUntilFirstUpdate:!0})],he.prototype,"handleDisabledChange",1);c([U("step",{waitUntilFirstUpdate:!0})],he.prototype,"handleStepChange",1);c([U("value",{waitUntilFirstUpdate:!0})],he.prototype,"handleValueChange",1);he.define("sl-input");var Qf=J`
  ${Z}
  ${Qo}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
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
    flex: 1 1 auto;
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
`,Ce=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ut(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,i){this.input.setRangeText(e,t,s,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t;return O`
      <div
        part="form-control"
        class=${oe({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${oe({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Y(this.name)}
              .value=${bi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Y(this.placeholder)}
              rows=${Y(this.rows)}
              minlength=${Y(this.minlength)}
              maxlength=${Y(this.maxlength)}
              autocapitalize=${Y(this.autocapitalize)}
              autocorrect=${Y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Y(this.spellcheck)}
              enterkeyhint=${Y(this.enterkeyhint)}
              inputmode=${Y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
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
    `}};Ce.styles=Qf;c([j(".textarea__control")],Ce.prototype,"input",2);c([re()],Ce.prototype,"hasFocus",2);c([h()],Ce.prototype,"title",2);c([h()],Ce.prototype,"name",2);c([h()],Ce.prototype,"value",2);c([h({reflect:!0})],Ce.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Ce.prototype,"filled",2);c([h()],Ce.prototype,"label",2);c([h({attribute:"help-text"})],Ce.prototype,"helpText",2);c([h()],Ce.prototype,"placeholder",2);c([h({type:Number})],Ce.prototype,"rows",2);c([h()],Ce.prototype,"resize",2);c([h({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],Ce.prototype,"readonly",2);c([h({reflect:!0})],Ce.prototype,"form",2);c([h({type:Boolean,reflect:!0})],Ce.prototype,"required",2);c([h({type:Number})],Ce.prototype,"minlength",2);c([h({type:Number})],Ce.prototype,"maxlength",2);c([h()],Ce.prototype,"autocapitalize",2);c([h()],Ce.prototype,"autocorrect",2);c([h()],Ce.prototype,"autocomplete",2);c([h({type:Boolean})],Ce.prototype,"autofocus",2);c([h()],Ce.prototype,"enterkeyhint",2);c([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Ce.prototype,"spellcheck",2);c([h()],Ce.prototype,"inputmode",2);c([wi()],Ce.prototype,"defaultValue",2);c([U("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);c([U("rows",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleRowsChange",1);c([U("value",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);Ce.define("sl-textarea");var Zf=J`
  ${Z}

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
`,Js=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return O`
      <span
        part="base"
        class=${oe({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?O`
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
    `}};Js.styles=Zf;Js.dependencies={"sl-icon-button":Qe};c([h({reflect:!0})],Js.prototype,"variant",2);c([h({reflect:!0})],Js.prototype,"size",2);c([h({type:Boolean,reflect:!0})],Js.prototype,"pill",2);c([h({type:Boolean})],Js.prototype,"removable",2);var em=J`
  ${Z}
  ${Qo}

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
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
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

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
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
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function tm(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var ca=new Set;function sm(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function wo(e){if(ca.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=sm();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function xo(e){ca.delete(e),ca.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function da(e,t,s="vertical",i="smooth"){const o=tm(e,t),r=o.top+t.scrollTop,n=o.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,d=t.scrollTop,p=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(n<a?t.scrollTo({left:n,behavior:i}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(r<d?t.scrollTo({top:r,behavior:i}):r+e.clientHeight>p&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:i}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ua extends Go{constructor(t){if(super(t),this.et=Fe,t.type!==ps.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Fe||t==null)return this.ft=void 0,this.et=t;if(t===Vt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}ua.directiveName="unsafeHTML",ua.resultType=1;const Tr=qo(ua);var ye=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ut(this,"help-text","label"),this.localize=new ke(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>O`
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
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(s||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),r=o.indexOf(this.currentOption);let n=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=r+1,n>o.length-1&&(n=0)):e.key==="ArrowUp"?(n=r-1,n<0&&(n=o.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const r of o)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],s=[];customElements.get("sl-option")?(e.forEach(i=>s.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s,i;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(s=this.selectedOptions[0])==null?void 0:s.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return O`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof s=="string"?Tr(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return O`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return O``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ge(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=Ne(this,"select.show",{dir:this.localize.dir()});await We(this.popup.popup,e,t),this.currentOption&&da(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ge(this);const{keyframes:e,options:t}=Ne(this,"select.hide",{dir:this.localize.dir()});await We(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,wt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,wt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return O`
      <div
        part="form-control"
        class=${oe({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${oe({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?O`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?O`
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
    `}};ye.styles=em;ye.dependencies={"sl-icon":Le,"sl-popup":Ie,"sl-tag":Js};c([j(".select")],ye.prototype,"popup",2);c([j(".select__combobox")],ye.prototype,"combobox",2);c([j(".select__display-input")],ye.prototype,"displayInput",2);c([j(".select__value-input")],ye.prototype,"valueInput",2);c([j(".select__listbox")],ye.prototype,"listbox",2);c([re()],ye.prototype,"hasFocus",2);c([re()],ye.prototype,"displayLabel",2);c([re()],ye.prototype,"currentOption",2);c([re()],ye.prototype,"selectedOptions",2);c([h()],ye.prototype,"name",2);c([h({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],ye.prototype,"value",2);c([wi()],ye.prototype,"defaultValue",2);c([h({reflect:!0})],ye.prototype,"size",2);c([h()],ye.prototype,"placeholder",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"multiple",2);c([h({attribute:"max-options-visible",type:Number})],ye.prototype,"maxOptionsVisible",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);c([h({type:Boolean})],ye.prototype,"clearable",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"open",2);c([h({type:Boolean})],ye.prototype,"hoist",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"filled",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"pill",2);c([h()],ye.prototype,"label",2);c([h({reflect:!0})],ye.prototype,"placement",2);c([h({attribute:"help-text"})],ye.prototype,"helpText",2);c([h({reflect:!0})],ye.prototype,"form",2);c([h({type:Boolean,reflect:!0})],ye.prototype,"required",2);c([h()],ye.prototype,"getTag",2);c([U("disabled",{waitUntilFirstUpdate:!0})],ye.prototype,"handleDisabledChange",1);c([U("value",{waitUntilFirstUpdate:!0})],ye.prototype,"handleValueChange",1);c([U("open",{waitUntilFirstUpdate:!0})],ye.prototype,"handleOpenChange",1);Se("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Se("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ye.define("sl-select");var im=J`
  ${Z}

  :host {
    display: block;
    user-select: none;
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
`,Jt=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return O`
      <div
        part="base"
        class=${oe({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Jt.styles=im;Jt.dependencies={"sl-icon":Le};c([j(".option__label")],Jt.prototype,"defaultSlot",2);c([re()],Jt.prototype,"current",2);c([re()],Jt.prototype,"selected",2);c([re()],Jt.prototype,"hasHover",2);c([h({reflect:!0})],Jt.prototype,"value",2);c([h({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);c([U("disabled")],Jt.prototype,"handleDisabledChange",1);c([U("selected")],Jt.prototype,"handleSelectedChange",1);c([U("value")],Jt.prototype,"handleValueChange",1);Jt.define("sl-option");function*cu(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*cu(e.shadowRoot.activeElement)))}var ho=[],du=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=t=>{var s;if(t.key!=="Tab"||this.isExternalActivated)return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const i=Ar(this.element),o=i[0];let r=this.startElementAlreadyFocused(o)?0:this.currentFocusIndex;if(r===-1){this.currentFocus=o,this.currentFocus.focus({preventScroll:!0});return}const n=this.tabDirection==="forward"?1:-1;r+n>=i.length?r=0:this.currentFocusIndex+n<0?r=i.length-1:r+=n,this.currentFocus=i[r],(s=this.currentFocus)==null||s.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){ho.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ho=ho.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ho[ho.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Ar(this.element);if(!this.element.matches(":focus-within")){const t=e[0],s=e[e.length-1],i=this.tabDirection==="forward"?t:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}get currentFocusIndex(){return Ar(this.element).findIndex(e=>e===this.currentFocus)}startElementAlreadyFocused(e){for(const t of cu())if(e===t)return!0;return!1}},om=J`
  ${Z}

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
`,bs=class extends G{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"footer"),this.localize=new ke(this),this.modal=new du(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),wo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),xo(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=Ne(this,"dialog.denyClose",{dir:this.localize.dir()});We(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),wo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ge(this.dialog),Ge(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ne(this,"dialog.show",{dir:this.localize.dir()}),s=Ne(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([We(this.panel,t.keyframes,t.options),We(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ge(this.dialog),Ge(this.overlay)]);const e=Ne(this,"dialog.hide",{dir:this.localize.dir()}),t=Ne(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([We(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),We(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,xo(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,wt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"sl-after-hide")}render(){return O`
      <div
        part="base"
        class=${oe({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Y(this.noHeader?this.label:void 0)}
          aria-labelledby=${Y(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":O`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
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
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};bs.styles=om;bs.dependencies={"sl-icon-button":Qe};c([j(".dialog")],bs.prototype,"dialog",2);c([j(".dialog__panel")],bs.prototype,"panel",2);c([j(".dialog__overlay")],bs.prototype,"overlay",2);c([h({type:Boolean,reflect:!0})],bs.prototype,"open",2);c([h({reflect:!0})],bs.prototype,"label",2);c([h({attribute:"no-header",type:Boolean,reflect:!0})],bs.prototype,"noHeader",2);c([U("open",{waitUntilFirstUpdate:!0})],bs.prototype,"handleOpenChange",1);Se("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Se("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Se("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Se("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Se("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});bs.define("sl-dialog");var rm=J`
  ${Z}

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
    padding-inline-end: var(--sl-spacing-medium);
  }
`,$i=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ys=class extends G{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"icon","suffix"),this.localize=new ke(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ge(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Ne(this,"alert.show",{dir:this.localize.dir()});await We(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Ge(this.base);const{keyframes:e,options:t}=Ne(this,"alert.hide",{dir:this.localize.dir()});await We(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,wt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"sl-after-hide")}async toast(){return new Promise(e=>{$i.parentElement===null&&document.body.append($i),$i.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{$i.removeChild(this),e(),$i.querySelector("sl-alert")===null&&$i.remove()},{once:!0})})}render(){return O`
      <div
        part="base"
        class=${oe({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?O`
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
      </div>
    `}};ys.styles=rm;ys.dependencies={"sl-icon-button":Qe};c([j('[part~="base"]')],ys.prototype,"base",2);c([h({type:Boolean,reflect:!0})],ys.prototype,"open",2);c([h({type:Boolean,reflect:!0})],ys.prototype,"closable",2);c([h({reflect:!0})],ys.prototype,"variant",2);c([h({type:Number})],ys.prototype,"duration",2);c([U("open",{waitUntilFirstUpdate:!0})],ys.prototype,"handleOpenChange",1);c([U("duration")],ys.prototype,"handleDurationChange",1);Se("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Se("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ys.define("sl-alert");var nm=J`
  ${Z}

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
`,am=J`
  ${Z}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
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
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,rt=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return O`
      <label
        part="base"
        class=${oe({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${Y(this.value)}
          .indeterminate=${bi(this.indeterminate)}
          .checked=${bi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
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
          ${this.checked?O`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?O`
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
    `}};rt.styles=am;rt.dependencies={"sl-icon":Le};c([j('input[type="checkbox"]')],rt.prototype,"input",2);c([re()],rt.prototype,"hasFocus",2);c([h()],rt.prototype,"title",2);c([h()],rt.prototype,"name",2);c([h()],rt.prototype,"value",2);c([h({reflect:!0})],rt.prototype,"size",2);c([h({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],rt.prototype,"checked",2);c([h({type:Boolean,reflect:!0})],rt.prototype,"indeterminate",2);c([wi("checked")],rt.prototype,"defaultChecked",2);c([h({reflect:!0})],rt.prototype,"form",2);c([h({type:Boolean,reflect:!0})],rt.prototype,"required",2);c([U("disabled",{waitUntilFirstUpdate:!0})],rt.prototype,"handleDisabledChange",1);c([U(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],rt.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lc(e,t,s){return e?t():s?.()}var ha=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ge(this.childrenContainer);const{keyframes:e,options:t}=Ne(this,"tree-item.collapse",{dir:this.localize.dir()});await We(this.childrenContainer,Vr(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&ha.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ge(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:t}=Ne(this,"tree-item.expand",{dir:this.localize.dir()});await We(this.childrenContainer,Vr(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>ha.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return O`
      <div
        part="base"
        class="${oe({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${oe({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${lc(this.loading,()=>O` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${lc(this.selectable,()=>O`
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
                  ?checked="${bi(this.selected)}"
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
    `}},De=ha;De.styles=nm;De.dependencies={"sl-checkbox":rt,"sl-icon":Le,"sl-spinner":rn};c([re()],De.prototype,"indeterminate",2);c([re()],De.prototype,"isLeaf",2);c([re()],De.prototype,"loading",2);c([re()],De.prototype,"selectable",2);c([h({type:Boolean,reflect:!0})],De.prototype,"expanded",2);c([h({type:Boolean,reflect:!0})],De.prototype,"selected",2);c([h({type:Boolean,reflect:!0})],De.prototype,"disabled",2);c([h({type:Boolean,reflect:!0})],De.prototype,"lazy",2);c([j("slot:not([name])")],De.prototype,"defaultSlot",2);c([j("slot[name=children]")],De.prototype,"childrenSlot",2);c([j(".tree-item__item")],De.prototype,"itemElement",2);c([j(".tree-item__children")],De.prototype,"childrenContainer",2);c([j(".tree-item__expand-button slot")],De.prototype,"expandButtonSlot",2);c([U("loading",{waitUntilFirstUpdate:!0})],De.prototype,"handleLoadingChange",1);c([U("disabled")],De.prototype,"handleDisabledChange",1);c([U("selected")],De.prototype,"handleSelectedChange",1);c([U("expanded",{waitUntilFirstUpdate:!0})],De.prototype,"handleExpandedChange",1);c([U("expanded",{waitUntilFirstUpdate:!0})],De.prototype,"handleExpandAnimation",1);c([U("lazy",{waitUntilFirstUpdate:!0})],De.prototype,"handleLazyChange",1);Se("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Se("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});De.define("sl-tree-item");var lm=J`
  ${Z}

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
`,Ya=class extends G{render(){return O` <slot></slot> `}};Ya.styles=lm;Ya.define("sl-visually-hidden");var cm=J`
  ${Z}

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
    pointer-events: none;
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
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
  }
`,nt=class extends G{constructor(){super(),this.localize=new ke(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=nc(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=nc(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Ge(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ne(this,"tooltip.show",{dir:this.localize.dir()});await We(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Ge(this.body);const{keyframes:e,options:t}=Ne(this,"tooltip.hide",{dir:this.localize.dir()});await We(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,wt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"sl-after-hide")}render(){return O`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oe({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};nt.styles=cm;nt.dependencies={"sl-popup":Ie};c([j("slot:not([name])")],nt.prototype,"defaultSlot",2);c([j(".tooltip__body")],nt.prototype,"body",2);c([j("sl-popup")],nt.prototype,"popup",2);c([h()],nt.prototype,"content",2);c([h()],nt.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);c([h({type:Number})],nt.prototype,"distance",2);c([h({type:Boolean,reflect:!0})],nt.prototype,"open",2);c([h({type:Number})],nt.prototype,"skidding",2);c([h()],nt.prototype,"trigger",2);c([h({type:Boolean})],nt.prototype,"hoist",2);c([U("open",{waitUntilFirstUpdate:!0})],nt.prototype,"handleOpenChange",1);c([U(["content","distance","hoist","placement","skidding"])],nt.prototype,"handleOptionsChange",1);c([U("disabled")],nt.prototype,"handleDisabledChange",1);Se("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Se("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});nt.define("sl-tooltip");var dm=J`
  ${Z}

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
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Xe(e,t,s){const i=o=>Object.is(o,-0)?0:o;return e<t?i(t):e>s?i(s):i(e)}function cc(e,t=!1){function s(r){const n=r.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(d=>d.selected),l=n.every(d=>!d.selected&&!d.indeterminate);r.selected=a,r.indeterminate=!a&&!l}}function i(r){const n=r.parentElement;De.isTreeItem(n)&&(s(n),i(n))}function o(r){for(const n of r.getChildrenItems())n.selected=t?r.selected||n.selected:!n.disabled&&r.selected,o(n);t&&s(r)}o(e),i(e)}var xi=class extends G{constructor(){super(),this.selection="single",this.localize=new ke(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const s=e.querySelector(`[slot="${t}-icon"]`);s===null?e.append(this.getExpandButtonIcon(t)):s.hasAttribute("data-default")&&s.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const s=[...t.addedNodes].filter(De.isTreeItem),i=[...t.removedNodes].filter(De.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),De.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const s=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),cc(e);else if(this.selection==="single"||e.isLeaf){const i=this.getAllTreeItems();for(const o of i)o.selected=o===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const s=this.selectedItems;(t.length!==s.length||s.some(i=>!t.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(o=>{var r;return["input","textarea"].includes((r=o?.tagName)==null?void 0:r.toLowerCase())}))return;const t=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(l=>l.matches(":focus")),r=t[o],n=l=>{const d=t[Xe(l,0,t.length-1)];this.focusItem(d)},a=l=>{r.expanded=l};e.key==="ArrowDown"?n(o+1):e.key==="ArrowUp"?n(o-1):s&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?n(o+1):a(!0):s&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?n(o-1):a(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(e){const t=e.target,s=t.closest("sl-tree-item"),i=e.composedPath().some(o=>{var r;return(r=o?.classList)==null?void 0:r.contains("tree-item__expand-button")});!s||s.disabled||t!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const s of t)s.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>cc(s,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=s=>s.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(s=>{var i;if(s.disabled)return!1;const o=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(s),!t.has(s)})}render(){return O`
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
    `}};xi.styles=dm;c([j("slot:not([name])")],xi.prototype,"defaultSlot",2);c([j("slot[name=expand-icon]")],xi.prototype,"expandedIconSlot",2);c([j("slot[name=collapse-icon]")],xi.prototype,"collapsedIconSlot",2);c([h()],xi.prototype,"selection",2);c([U("selection")],xi.prototype,"handleSelectionChange",1);xi.define("sl-tree");var um=J`
  ${Z}

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
`,hm=0,Zo=class extends G{constructor(){super(...arguments),this.attrId=++hm,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return O`
      <slot
        part="base"
        class=${oe({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Zo.styles=um;c([h({reflect:!0})],Zo.prototype,"name",2);c([h({type:Boolean,reflect:!0})],Zo.prototype,"active",2);c([U("active")],Zo.prototype,"handleActiveChange",1);Zo.define("sl-tab-panel");Js.define("sl-tag");var pm=J`
  ${Z}

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
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
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
`,fm=0,vs=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.attrId=++fm,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,O`
      <div
        part="base"
        class=${oe({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?O`
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
    `}};vs.styles=pm;vs.dependencies={"sl-icon-button":Qe};c([j(".tab")],vs.prototype,"tab",2);c([h({reflect:!0})],vs.prototype,"panel",2);c([h({type:Boolean,reflect:!0})],vs.prototype,"active",2);c([h({type:Boolean})],vs.prototype,"closable",2);c([h({type:Boolean,reflect:!0})],vs.prototype,"disabled",2);c([U("active")],vs.prototype,"handleActiveChange",1);c([U("disabled")],vs.prototype,"handleDisabledChange",1);vs.define("sl-tab");var mm=J`
  ${Z}

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
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
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
`,Ht=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(s=>s.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((s,i)=>{var o;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(s=>e.includeDisabled?s.tagName.toLowerCase()==="sl-tab":s.tagName.toLowerCase()==="sl-tab"&&!s.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const s=e.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(e){const s=e.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(n=>n.matches(":focus")),r=this.localize.dir()==="rtl";if(o?.tagName.toLowerCase()==="sl-tab"){let n=this.tabs.indexOf(o);e.key==="Home"?n=0:e.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&da(this.tabs[n],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=zs({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&da(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(s=>s.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,s=e.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(s=>s.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return O`
      <div
        part="base"
        class=${oe({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?O`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?O`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Ht.styles=mm;Ht.dependencies={"sl-icon-button":Qe};c([j(".tab-group")],Ht.prototype,"tabGroup",2);c([j(".tab-group__body")],Ht.prototype,"body",2);c([j(".tab-group__nav")],Ht.prototype,"nav",2);c([j(".tab-group__indicator")],Ht.prototype,"indicator",2);c([re()],Ht.prototype,"hasScrollControls",2);c([h()],Ht.prototype,"placement",2);c([h()],Ht.prototype,"activation",2);c([h({attribute:"no-scroll-controls",type:Boolean})],Ht.prototype,"noScrollControls",2);c([U("noScrollControls",{waitUntilFirstUpdate:!0})],Ht.prototype,"updateScrollControls",1);c([U("placement",{waitUntilFirstUpdate:!0})],Ht.prototype,"syncIndicator",1);Ht.define("sl-tab-group");var gm=J`
  ${Z}

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
`;function ko(e,t){function s(o){const r=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=r.left+n.pageXOffset,l=r.top+n.pageYOffset,d=o.pageX-a,p=o.pageY-l;t?.onMove&&t.onMove(d,p)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),t?.onStop&&t.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),t?.initialEvent instanceof PointerEvent&&s(t.initialEvent)}var jt=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),ko(this,{onMove:(s,i)=>{let o=this.vertical?i:s;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let a;n.endsWith("%")?a=this.size*(parseFloat(n)/100):a=parseFloat(n),t&&!this.vertical&&(a=this.size-a),o>=a-this.snapThreshold&&o<=a+this.snapThreshold&&(o=a)}),this.position=Xe(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=s),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Xe(t,0,100)}}handleResize(e){const{width:t,height:s}=e[0].contentRect;this.size=this.vertical?s:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${i}`:s&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${o}`,this.style[t]="",O`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${Y(this.disabled?void 0:"0")}
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
    `}};jt.styles=gm;c([j(".divider")],jt.prototype,"divider",2);c([h({type:Number,reflect:!0})],jt.prototype,"position",2);c([h({attribute:"position-in-pixels",type:Number})],jt.prototype,"positionInPixels",2);c([h({type:Boolean,reflect:!0})],jt.prototype,"vertical",2);c([h({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);c([h()],jt.prototype,"primary",2);c([h()],jt.prototype,"snap",2);c([h({type:Number,attribute:"snap-threshold"})],jt.prototype,"snapThreshold",2);c([U("position")],jt.prototype,"handlePositionChange",1);c([U("positionInPixels")],jt.prototype,"handlePositionInPixelsChange",1);c([U("vertical")],jt.prototype,"handleVerticalChange",1);jt.define("sl-split-panel");var bm=J`
  ${Z}

  :host {
    display: contents;
  }
`,an=class extends G{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],t.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return O` <slot @slotchange=${this.handleSlotChange}></slot> `}};an.styles=bm;c([h({type:Boolean,reflect:!0})],an.prototype,"disabled",2);c([U("disabled",{waitUntilFirstUpdate:!0})],an.prototype,"handleDisabledChange",1);an.define("sl-resize-observer");var ym=J`
  ${Z}

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
`,Xa=class extends G{constructor(){super(...arguments),this.effect="none"}render(){return O`
      <div
        part="base"
        class=${oe({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Xa.styles=ym;c([h()],Xa.prototype,"effect",2);Xa.define("sl-skeleton");var vm=J`
  ${Z}
  ${Qo}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
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
`,He=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this),this.hasSlotController=new Ut(this,"help-text","label"),this.localize=new ke(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",r=t*e;if(o){const n=`${t-r}px + ${e} * ${i}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${i} / 2))`}else{const n=`${r}px - ${e} * ${i}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t;return O`
      <div
        part="form-control"
        class=${oe({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${oe({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${Y(this.name)}
              ?disabled=${this.disabled}
              min=${Y(this.min)}
              max=${Y(this.max)}
              step=${Y(this.step)}
              .value=${bi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?O`
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
    `}};He.styles=vm;c([j(".range__control")],He.prototype,"input",2);c([j(".range__tooltip")],He.prototype,"output",2);c([re()],He.prototype,"hasFocus",2);c([re()],He.prototype,"hasTooltip",2);c([h()],He.prototype,"title",2);c([h()],He.prototype,"name",2);c([h({type:Number})],He.prototype,"value",2);c([h()],He.prototype,"label",2);c([h({attribute:"help-text"})],He.prototype,"helpText",2);c([h({type:Boolean,reflect:!0})],He.prototype,"disabled",2);c([h({type:Number})],He.prototype,"min",2);c([h({type:Number})],He.prototype,"max",2);c([h({type:Number})],He.prototype,"step",2);c([h()],He.prototype,"tooltip",2);c([h({attribute:!1})],He.prototype,"tooltipFormatter",2);c([h({reflect:!0})],He.prototype,"form",2);c([wi()],He.prototype,"defaultValue",2);c([Kd({passive:!0})],He.prototype,"handleThumbDragStart",1);c([U("value",{waitUntilFirstUpdate:!0})],He.prototype,"handleValueChange",1);c([U("disabled",{waitUntilFirstUpdate:!0})],He.prototype,"handleDisabledChange",1);c([U("hasTooltip",{waitUntilFirstUpdate:!0})],He.prototype,"syncRange",1);He.define("sl-range");var _m=J`
  ${Z}

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
 */const uu="important",wm=" !"+uu,St=qo(class extends Go{constructor(e){var t;if(super(e),e.type!==ps.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const i=e[s];return i==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ht===void 0){this.ht=new Set;for(const i in t)this.ht.add(i);return this.render(t)}this.ht.forEach(i=>{t[i]==null&&(this.ht.delete(i),i.includes("-")?s.removeProperty(i):s[i]="")});for(const i in t){const o=t[i];if(o!=null){this.ht.add(i);const r=typeof o=="string"&&o.endsWith(wm);i.includes("-")||r?s.setProperty(i,r?o.slice(0,-11):o,r?uu:""):s[i]=o}}return Vt}});var yt=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:s,right:i,width:o}=this.rating.getBoundingClientRect(),r=t?this.roundToPrecision((i-e)/o*this.max,this.precision):this.roundToPrecision((e-s)/o*this.max,this.precision);return Xe(r,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const s=1/t;return Math.ceil(e*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,O`
      <div
        part="base"
        class=${oe({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
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
          ${t.map(i=>s>i&&s<i+1?O`
                <span
                  class=${oe({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${St({clipPath:e?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${Tr(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${St({clipPath:e?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${Tr(this.getSymbol(i+1))}
                  </div>
                </span>
              `:O`
              <span
                class=${oe({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Tr(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};yt.styles=_m;yt.dependencies={"sl-icon":Le};c([j(".rating")],yt.prototype,"rating",2);c([re()],yt.prototype,"hoverValue",2);c([re()],yt.prototype,"isHovering",2);c([h()],yt.prototype,"label",2);c([h({type:Number})],yt.prototype,"value",2);c([h({type:Number})],yt.prototype,"max",2);c([h({type:Number})],yt.prototype,"precision",2);c([h({type:Boolean,reflect:!0})],yt.prototype,"readonly",2);c([h({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);c([h()],yt.prototype,"getSymbol",2);c([Kd({passive:!0})],yt.prototype,"handleTouchMove",1);c([U("hoverValue")],yt.prototype,"handleHoverValueChange",1);c([U("isHovering")],yt.prototype,"handleIsHoveringChange",1);yt.define("sl-rating");var xm=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Qs=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=t.getTime()-e.getTime(),{unit:i,value:o}=xm.find(r=>Math.abs(s)<r.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(s/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let r;i==="minute"?r=dr("second"):i==="hour"?r=dr("minute"):i==="day"?r=dr("hour"):r=dr("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),r)}return O` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};c([re()],Qs.prototype,"isoTime",2);c([re()],Qs.prototype,"relativeTime",2);c([re()],Qs.prototype,"titleTime",2);c([h()],Qs.prototype,"date",2);c([h()],Qs.prototype,"format",2);c([h()],Qs.prototype,"numeric",2);c([h({type:Boolean})],Qs.prototype,"sync",2);function dr(e){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return s-Date.now()%s}Qs.define("sl-relative-time");var km=J`
  ${Z}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
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
  }
`,_s=class extends G{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return O`
      <span
        part="base"
        class=${oe({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?O` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};_s.styles=km;_s.dependencies={"sl-icon":Le};c([re()],_s.prototype,"checked",2);c([re()],_s.prototype,"hasFocus",2);c([h()],_s.prototype,"value",2);c([h({reflect:!0})],_s.prototype,"size",2);c([h({type:Boolean,reflect:!0})],_s.prototype,"disabled",2);c([U("checked")],_s.prototype,"handleCheckedChange",1);c([U("disabled",{waitUntilFirstUpdate:!0})],_s.prototype,"handleDisabledChange",1);_s.define("sl-radio");var Cm=J`
  ${lu}

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
`,ns=class extends G{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return _o`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${oe({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Y(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ns.styles=Cm;c([j(".button")],ns.prototype,"input",2);c([j(".hidden-input")],ns.prototype,"hiddenInput",2);c([re()],ns.prototype,"hasFocus",2);c([h({type:Boolean,reflect:!0})],ns.prototype,"checked",2);c([h()],ns.prototype,"value",2);c([h({type:Boolean,reflect:!0})],ns.prototype,"disabled",2);c([h({reflect:!0})],ns.prototype,"size",2);c([h({type:Boolean,reflect:!0})],ns.prototype,"pill",2);c([U("disabled",{waitUntilFirstUpdate:!0})],ns.prototype,"handleDisabledChange",1);ns.define("sl-radio-button");var Em=J`
  ${Z}
  ${Qo}

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
`,pt=class extends G{constructor(){super(...arguments),this.formControlController=new Ls(this),this.hasSlotController=new Ut(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Gf:e?qf:nn}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,s.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const s=this.getAllRadios().filter(a=>!a.disabled),i=(t=s.find(a=>a.checked))!=null?t:s[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,r=this.value;let n=s.indexOf(i)+o;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||(a.tabIndex=-1)}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].tabIndex=0,s[n].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),s=e.find(i=>i.checked)||e[0];s&&s.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=s[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else s[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=O`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return O`
      <fieldset
        part="form-control"
        class=${oe({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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

          ${this.hasButtonGroup?O`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
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
    `}};pt.styles=Em;pt.dependencies={"sl-button-group":_i};c([j("slot:not([name])")],pt.prototype,"defaultSlot",2);c([j(".radio-group__validation-input")],pt.prototype,"validationInput",2);c([re()],pt.prototype,"hasButtonGroup",2);c([re()],pt.prototype,"errorMessage",2);c([re()],pt.prototype,"defaultValue",2);c([h()],pt.prototype,"label",2);c([h({attribute:"help-text"})],pt.prototype,"helpText",2);c([h()],pt.prototype,"name",2);c([h({reflect:!0})],pt.prototype,"value",2);c([h({reflect:!0})],pt.prototype,"size",2);c([h({reflect:!0})],pt.prototype,"form",2);c([h({type:Boolean,reflect:!0})],pt.prototype,"required",2);c([U("size",{waitUntilFirstUpdate:!0})],pt.prototype,"handleSizeChange",1);c([U("value")],pt.prototype,"handleValueChange",1);pt.define("sl-radio-group");var $m=J`
  ${Z}

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
  }
`,Xi=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*t,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return O`
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
    `}};Xi.styles=$m;c([j(".progress-ring__indicator")],Xi.prototype,"indicator",2);c([re()],Xi.prototype,"indicatorOffset",2);c([h({type:Number,reflect:!0})],Xi.prototype,"value",2);c([h()],Xi.prototype,"label",2);Xi.define("sl-progress-ring");var Sm=J`
  ${Z}

  :host {
    display: inline-block;
  }
`;let hu=null;class pu{}pu.render=function(e,t){hu(e,t)};self.QrCreator=pu;(function(e){function t(a,l,d,p){var u={},f=e(d,l);f.u(a),f.J(),p=p||0;var m=f.h(),g=f.h()+2*p;return u.text=a,u.level=l,u.version=d,u.O=g,u.a=function(v,A){return v-=p,A-=p,0>v||v>=m||0>A||A>=m?!1:f.a(v,A)},u}function s(a,l,d,p,u,f,m,g,v,A){function $(k,T,y,x,C,F,D){k?(a.lineTo(T+F,y+D),a.arcTo(T,y,x,C,f)):a.lineTo(T,y)}m?a.moveTo(l+f,d):a.moveTo(l,d),$(g,p,d,p,u,-f,0),$(v,p,u,l,u,0,-f),$(A,l,u,l,d,f,0),$(m,l,d,p,d,0,f)}function i(a,l,d,p,u,f,m,g,v,A){function $(k,T,y,x){a.moveTo(k+y,T),a.lineTo(k,T),a.lineTo(k,T+x),a.arcTo(k,T,k+y,T,f)}m&&$(l,d,f,f),g&&$(p,d,-f,f),v&&$(p,u,-f,-f),A&&$(l,u,f,-f)}function o(a,l){var d=l.fill;if(typeof d=="string")a.fillStyle=d;else{var p=d.type,u=d.colorStops;if(d=d.position.map(m=>Math.round(m*l.size)),p==="linear-gradient")var f=a.createLinearGradient.apply(a,d);else if(p==="radial-gradient")f=a.createRadialGradient.apply(a,d);else throw Error("Unsupported fill");u.forEach(([m,g])=>{f.addColorStop(m,g)}),a.fillStyle=f}}function r(a,l){e:{var d=l.text,p=l.v,u=l.N,f=l.K,m=l.P;for(u=Math.max(1,u||1),f=Math.min(40,f||40);u<=f;u+=1)try{var g=t(d,p,u,m);break e}catch{}g=void 0}if(!g)return null;for(d=a.getContext("2d"),l.background&&(d.fillStyle=l.background,d.fillRect(l.left,l.top,l.size,l.size)),p=g.O,f=l.size/p,d.beginPath(),m=0;m<p;m+=1)for(u=0;u<p;u+=1){var v=d,A=l.left+u*f,$=l.top+m*f,k=m,T=u,y=g.a,x=A+f,C=$+f,F=k-1,D=k+1,L=T-1,R=T+1,ce=Math.floor(Math.min(.5,Math.max(0,l.R))*f),te=y(k,T),xe=y(F,L),Ee=y(F,T);F=y(F,R);var fe=y(k,R);R=y(D,R),T=y(D,T),D=y(D,L),k=y(k,L),A=Math.round(A),$=Math.round($),x=Math.round(x),C=Math.round(C),te?s(v,A,$,x,C,ce,!Ee&&!k,!Ee&&!fe,!T&&!fe,!T&&!k):i(v,A,$,x,C,ce,Ee&&k&&xe,Ee&&fe&&F,T&&fe&&R,T&&k&&D)}return o(d,l),d.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};hu=function(a,l){var d={};Object.assign(d,n,a),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,l instanceof HTMLCanvasElement?((l.width!==d.size||l.height!==d.size)&&(l.width=d.size,l.height=d.size),l.getContext("2d").clearRect(0,0,l.width,l.height),r(l,d)):(a=document.createElement("canvas"),a.width=d.size,a.height=d.size,d=r(a,d),l.appendChild(d))}})(function(){function e(l){var d=s.s(l);return{S:function(){return 4},b:function(){return d.length},write:function(p){for(var u=0;u<d.length;u+=1)p.put(d[u],8)}}}function t(){var l=[],d=0,p={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,f){for(var m=0;m<f;m+=1)p.m((u>>>f-m-1&1)==1)},f:function(){return d},m:function(u){var f=Math.floor(d/8);l.length<=f&&l.push(0),u&&(l[f]|=128>>>d%8),d+=1}};return p}function s(l,d){function p(k,T){for(var y=-1;7>=y;y+=1)if(!(-1>=k+y||g<=k+y))for(var x=-1;7>=x;x+=1)-1>=T+x||g<=T+x||(m[k+y][T+x]=0<=y&&6>=y&&(x==0||x==6)||0<=x&&6>=x&&(y==0||y==6)||2<=y&&4>=y&&2<=x&&4>=x)}function u(k,T){for(var y=g=4*l+17,x=Array(y),C=0;C<y;C+=1){x[C]=Array(y);for(var F=0;F<y;F+=1)x[C][F]=null}for(m=x,p(0,0),p(g-7,0),p(0,g-7),y=r.G(l),x=0;x<y.length;x+=1)for(C=0;C<y.length;C+=1){F=y[x];var D=y[C];if(m[F][D]==null)for(var L=-2;2>=L;L+=1)for(var R=-2;2>=R;R+=1)m[F+L][D+R]=L==-2||L==2||R==-2||R==2||L==0&&R==0}for(y=8;y<g-8;y+=1)m[y][6]==null&&(m[y][6]=y%2==0);for(y=8;y<g-8;y+=1)m[6][y]==null&&(m[6][y]=y%2==0);for(y=r.w(f<<3|T),x=0;15>x;x+=1)C=!k&&(y>>x&1)==1,m[6>x?x:8>x?x+1:g-15+x][8]=C,m[8][8>x?g-x-1:9>x?15-x:14-x]=C;if(m[g-8][8]=!k,7<=l){for(y=r.A(l),x=0;18>x;x+=1)C=!k&&(y>>x&1)==1,m[Math.floor(x/3)][x%3+g-8-3]=C;for(x=0;18>x;x+=1)C=!k&&(y>>x&1)==1,m[x%3+g-8-3][Math.floor(x/3)]=C}if(v==null){for(k=a.I(l,f),y=t(),x=0;x<A.length;x+=1)C=A[x],y.put(4,4),y.put(C.b(),r.f(4,l)),C.write(y);for(x=C=0;x<k.length;x+=1)C+=k[x].j;if(y.f()>8*C)throw Error("code length overflow. ("+y.f()+">"+8*C+")");for(y.f()+4<=8*C&&y.put(0,4);y.f()%8!=0;)y.m(!1);for(;!(y.f()>=8*C)&&(y.put(236,8),!(y.f()>=8*C));)y.put(17,8);var ce=0;for(C=x=0,F=Array(k.length),D=Array(k.length),L=0;L<k.length;L+=1){var te=k[L].j,xe=k[L].o-te;for(x=Math.max(x,te),C=Math.max(C,xe),F[L]=Array(te),R=0;R<F[L].length;R+=1)F[L][R]=255&y.B()[R+ce];for(ce+=te,R=r.C(xe),te=i(F[L],R.b()-1).l(R),D[L]=Array(R.b()-1),R=0;R<D[L].length;R+=1)xe=R+te.b()-D[L].length,D[L][R]=0<=xe?te.c(xe):0}for(R=y=0;R<k.length;R+=1)y+=k[R].o;for(y=Array(y),R=ce=0;R<x;R+=1)for(L=0;L<k.length;L+=1)R<F[L].length&&(y[ce]=F[L][R],ce+=1);for(R=0;R<C;R+=1)for(L=0;L<k.length;L+=1)R<D[L].length&&(y[ce]=D[L][R],ce+=1);v=y}for(k=v,y=-1,x=g-1,C=7,F=0,T=r.F(T),D=g-1;0<D;D-=2)for(D==6&&--D;;){for(L=0;2>L;L+=1)m[x][D-L]==null&&(R=!1,F<k.length&&(R=(k[F]>>>C&1)==1),T(x,D-L)&&(R=!R),m[x][D-L]=R,--C,C==-1&&(F+=1,C=7));if(x+=y,0>x||g<=x){x-=y,y=-y;break}}}var f=o[d],m=null,g=0,v=null,A=[],$={u:function(k){k=e(k),A.push(k),v=null},a:function(k,T){if(0>k||g<=k||0>T||g<=T)throw Error(k+","+T);return m[k][T]},h:function(){return g},J:function(){for(var k=0,T=0,y=0;8>y;y+=1){u(!0,y);var x=r.D($);(y==0||k>x)&&(k=x,T=y)}u(!1,T)}};return $}function i(l,d){if(typeof l.length>"u")throw Error(l.length+"/"+d);var p=function(){for(var f=0;f<l.length&&l[f]==0;)f+=1;for(var m=Array(l.length-f+d),g=0;g<l.length-f;g+=1)m[g]=l[g+f];return m}(),u={c:function(f){return p[f]},b:function(){return p.length},multiply:function(f){for(var m=Array(u.b()+f.b()-1),g=0;g<u.b();g+=1)for(var v=0;v<f.b();v+=1)m[g+v]^=n.i(n.g(u.c(g))+n.g(f.c(v)));return i(m,0)},l:function(f){if(0>u.b()-f.b())return u;for(var m=n.g(u.c(0))-n.g(f.c(0)),g=Array(u.b()),v=0;v<u.b();v+=1)g[v]=u.c(v);for(v=0;v<f.b();v+=1)g[v]^=n.i(n.g(f.c(v))+m);return i(g,0).l(f)}};return u}s.s=function(l){for(var d=[],p=0;p<l.length;p++){var u=l.charCodeAt(p);128>u?d.push(u):2048>u?d.push(192|u>>6,128|u&63):55296>u||57344<=u?d.push(224|u>>12,128|u>>6&63,128|u&63):(p++,u=65536+((u&1023)<<10|l.charCodeAt(p)&1023),d.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return d};var o={L:1,M:0,Q:3,H:2},r=function(){function l(u){for(var f=0;u!=0;)f+=1,u>>>=1;return f}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(u){for(var f=u<<10;0<=l(f)-l(1335);)f^=1335<<l(f)-l(1335);return(u<<10|f)^21522},A:function(u){for(var f=u<<12;0<=l(f)-l(7973);)f^=7973<<l(f)-l(7973);return u<<12|f},G:function(u){return d[u-1]},F:function(u){switch(u){case 0:return function(f,m){return(f+m)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,m){return m%3==0};case 3:return function(f,m){return(f+m)%3==0};case 4:return function(f,m){return(Math.floor(f/2)+Math.floor(m/3))%2==0};case 5:return function(f,m){return f*m%2+f*m%3==0};case 6:return function(f,m){return(f*m%2+f*m%3)%2==0};case 7:return function(f,m){return(f*m%3+(f+m)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var f=i([1],0),m=0;m<u;m+=1)f=f.multiply(i([1,n.i(m)],0));return f},f:function(u,f){if(u!=4||1>f||40<f)throw Error("mode: "+u+"; type: "+f);return 10>f?8:16},D:function(u){for(var f=u.h(),m=0,g=0;g<f;g+=1)for(var v=0;v<f;v+=1){for(var A=0,$=u.a(g,v),k=-1;1>=k;k+=1)if(!(0>g+k||f<=g+k))for(var T=-1;1>=T;T+=1)0>v+T||f<=v+T||(k!=0||T!=0)&&$==u.a(g+k,v+T)&&(A+=1);5<A&&(m+=3+A-5)}for(g=0;g<f-1;g+=1)for(v=0;v<f-1;v+=1)A=0,u.a(g,v)&&(A+=1),u.a(g+1,v)&&(A+=1),u.a(g,v+1)&&(A+=1),u.a(g+1,v+1)&&(A+=1),(A==0||A==4)&&(m+=3);for(g=0;g<f;g+=1)for(v=0;v<f-6;v+=1)u.a(g,v)&&!u.a(g,v+1)&&u.a(g,v+2)&&u.a(g,v+3)&&u.a(g,v+4)&&!u.a(g,v+5)&&u.a(g,v+6)&&(m+=40);for(v=0;v<f;v+=1)for(g=0;g<f-6;g+=1)u.a(g,v)&&!u.a(g+1,v)&&u.a(g+2,v)&&u.a(g+3,v)&&u.a(g+4,v)&&!u.a(g+5,v)&&u.a(g+6,v)&&(m+=40);for(v=A=0;v<f;v+=1)for(g=0;g<f;g+=1)u.a(g,v)&&(A+=1);return m+=Math.abs(100*A/f/f-50)/5*10}};return p}(),n=function(){for(var l=Array(256),d=Array(256),p=0;8>p;p+=1)l[p]=1<<p;for(p=8;256>p;p+=1)l[p]=l[p-4]^l[p-5]^l[p-6]^l[p-8];for(p=0;255>p;p+=1)d[l[p]]=p;return{g:function(u){if(1>u)throw Error("glog("+u+")");return d[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}}(),a=function(){function l(u,f){switch(f){case o.L:return d[4*(u-1)];case o.M:return d[4*(u-1)+1];case o.Q:return d[4*(u-1)+2];case o.H:return d[4*(u-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(u,f){var m=l(u,f);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+f);u=m.length/3,f=[];for(var g=0;g<u;g+=1)for(var v=m[3*g],A=m[3*g+1],$=m[3*g+2],k=0;k<v;k+=1){var T=$,y={};y.o=A,y.j=T,f.push(y)}return f}};return p}();return s}());const Am=QrCreator;var as=class extends G{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Am.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return O`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${St({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};as.styles=Sm;c([j("canvas")],as.prototype,"canvas",2);c([h()],as.prototype,"value",2);c([h()],as.prototype,"label",2);c([h({type:Number})],as.prototype,"size",2);c([h()],as.prototype,"fill",2);c([h()],as.prototype,"background",2);c([h({type:Number})],as.prototype,"radius",2);c([h({attribute:"error-correction"})],as.prototype,"errorCorrection",2);c([U(["background","errorCorrection","fill","radius","size","value"])],as.prototype,"generate",1);as.define("sl-qr-code");Ie.define("sl-popup");var Tm=J`
  ${Z}

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
    transition: 400ms width, 400ms background-color;
    user-select: none;
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
`,er=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return O`
      <div
        part="base"
        class=${oe({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${Y(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${St({width:`${this.value}%`})}>
          ${this.indeterminate?"":O` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};er.styles=Tm;c([h({type:Number,reflect:!0})],er.prototype,"value",2);c([h({type:Boolean,reflect:!0})],er.prototype,"indeterminate",2);c([h()],er.prototype,"label",2);er.define("sl-progress-bar");var Im=J`
  ${Z}

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
  }
`,fu=class extends G{render(){return O` <slot part="base" class="menu-label"></slot> `}};fu.styles=Im;fu.define("sl-menu-label");var zm=J`
  ${Z}

  :host {
    display: contents;
  }
`,ws=class extends G{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return O` <slot></slot> `}};ws.styles=zm;c([h({reflect:!0})],ws.prototype,"attr",2);c([h({attribute:"attr-old-value",type:Boolean,reflect:!0})],ws.prototype,"attrOldValue",2);c([h({attribute:"char-data",type:Boolean,reflect:!0})],ws.prototype,"charData",2);c([h({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ws.prototype,"charDataOldValue",2);c([h({attribute:"child-list",type:Boolean,reflect:!0})],ws.prototype,"childList",2);c([h({type:Boolean,reflect:!0})],ws.prototype,"disabled",2);c([U("disabled")],ws.prototype,"handleDisabledChange",1);c([U("attr",{waitUntilFirstUpdate:!0}),U("attr-old-value",{waitUntilFirstUpdate:!0}),U("char-data",{waitUntilFirstUpdate:!0}),U("char-data-old-value",{waitUntilFirstUpdate:!0}),U("childList",{waitUntilFirstUpdate:!0})],ws.prototype,"handleChange",1);ws.define("sl-mutation-observer");var Om=J`
  ${Z}

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
`,ki=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";e.preventDefault(),ko(this.base,{onMove:i=>{this.position=parseFloat(Xe(i/t*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight")&&(o-=i),(t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft")&&(o+=i),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=Xe(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return O`
      <div
        part="base"
        id="image-comparer"
        class=${oe({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${St({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${St({left:e?`${100-this.position}%`:`${this.position}%`})}
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
    `}};ki.styles=Om;ki.scopedElement={"sl-icon":Le};c([j(".image-comparer")],ki.prototype,"base",2);c([j(".image-comparer__handle")],ki.prototype,"handle",2);c([h({type:Number,reflect:!0})],ki.prototype,"position",2);c([U("position",{waitUntilFirstUpdate:!0})],ki.prototype,"handlePositionChange",1);ki.define("sl-image-comparer");var Lm=J`
  ${Z}

  :host {
    display: block;
  }
`,Nn=new Map;function Mm(e,t="cors"){const s=Nn.get(e);if(s!==void 0)return Promise.resolve(s);const i=fetch(e,{mode:t}).then(async o=>{const r={ok:o.ok,status:o.status,html:await o.text()};return Nn.set(e,r),r});return Nn.set(e,i),i}var Ji=class extends G{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(s=>t.setAttribute(s.name,s.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Mm(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return O`<slot></slot>`}};Ji.styles=Lm;c([h()],Ji.prototype,"src",2);c([h()],Ji.prototype,"mode",2);c([h({attribute:"allow-scripts",type:Boolean})],Ji.prototype,"allowScripts",2);c([U("src")],Ji.prototype,"handleSrcChange",1);Ji.define("sl-include");var ls=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([h({type:Number})],ls.prototype,"value",2);c([h()],ls.prototype,"type",2);c([h({attribute:"no-grouping",type:Boolean})],ls.prototype,"noGrouping",2);c([h()],ls.prototype,"currency",2);c([h({attribute:"currency-display"})],ls.prototype,"currencyDisplay",2);c([h({attribute:"minimum-integer-digits",type:Number})],ls.prototype,"minimumIntegerDigits",2);c([h({attribute:"minimum-fraction-digits",type:Number})],ls.prototype,"minimumFractionDigits",2);c([h({attribute:"maximum-fraction-digits",type:Number})],ls.prototype,"maximumFractionDigits",2);c([h({attribute:"minimum-significant-digits",type:Number})],ls.prototype,"minimumSignificantDigits",2);c([h({attribute:"maximum-significant-digits",type:Number})],ls.prototype,"maximumSignificantDigits",2);ls.define("sl-format-number");var ln=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),o=s[i]+this.unit,r=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:o,unitDisplay:this.display})}};c([h({type:Number})],ln.prototype,"value",2);c([h()],ln.prototype,"unit",2);c([h()],ln.prototype,"display",2);ln.define("sl-format-bytes");var Wt=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return O`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};c([h()],Wt.prototype,"date",2);c([h()],Wt.prototype,"weekday",2);c([h()],Wt.prototype,"era",2);c([h()],Wt.prototype,"year",2);c([h()],Wt.prototype,"month",2);c([h()],Wt.prototype,"day",2);c([h()],Wt.prototype,"hour",2);c([h()],Wt.prototype,"minute",2);c([h()],Wt.prototype,"second",2);c([h({attribute:"time-zone-name"})],Wt.prototype,"timeZoneName",2);c([h({attribute:"time-zone"})],Wt.prototype,"timeZone",2);c([h({attribute:"hour-format"})],Wt.prototype,"hourFormat",2);Wt.define("sl-format-date");Le.define("sl-icon");var Rm=J`
  ${Z}

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
`,cn=class extends G{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};cn.styles=Rm;c([h({type:Boolean,reflect:!0})],cn.prototype,"vertical",2);c([U("vertical")],cn.prototype,"handleVerticalChange",1);cn.define("sl-divider");var Dm=J`
  ${Z}

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
`;function dc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Kt=class extends G{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"footer"),this.localize=new ke(this),this.modal=new du(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),wo(this)))}disconnectedCallback(){super.disconnectedCallback(),xo(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=Ne(this,"drawer.denyClose",{dir:this.localize.dir()});We(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),wo(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ge(this.drawer),Ge(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ne(this,`drawer.show${dc(this.placement)}`,{dir:this.localize.dir()}),s=Ne(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([We(this.panel,t.keyframes,t.options),We(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),xo(this)),await Promise.all([Ge(this.drawer),Ge(this.overlay)]);const e=Ne(this,`drawer.hide${dc(this.placement)}`,{dir:this.localize.dir()}),t=Ne(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([We(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),We(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),wo(this)),this.open&&this.contained&&(this.modal.deactivate(),xo(this))}async show(){if(!this.open)return this.open=!0,wt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wt(this,"sl-after-hide")}render(){return O`
      <div
        part="base"
        class=${oe({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Y(this.noHeader?this.label:void 0)}
          aria-labelledby=${Y(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":O`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
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
    `}};Kt.styles=Dm;Kt.dependencies={"sl-icon-button":Qe};c([j(".drawer")],Kt.prototype,"drawer",2);c([j(".drawer__panel")],Kt.prototype,"panel",2);c([j(".drawer__overlay")],Kt.prototype,"overlay",2);c([h({type:Boolean,reflect:!0})],Kt.prototype,"open",2);c([h({reflect:!0})],Kt.prototype,"label",2);c([h({reflect:!0})],Kt.prototype,"placement",2);c([h({type:Boolean,reflect:!0})],Kt.prototype,"contained",2);c([h({attribute:"no-header",type:Boolean,reflect:!0})],Kt.prototype,"noHeader",2);c([U("open",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleOpenChange",1);c([U("contained",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleNoModalChange",1);Se("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Se("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Se("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Se("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Se("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Se("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Se("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Se("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Se("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Se("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Se("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Kt.define("sl-drawer");var Pm=J`
  ${Z}

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
`,at=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";s?[o,r]=this.from.trim().split("."):i&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(o):null;n?i?e=n.getAttribute(r)||"":s?e=n[r]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=e==="success"?this.successIcon:this.errorIcon,r=Ne(this,"copy.in",{dir:"ltr"}),n=Ne(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?s:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return O`
      <sl-tooltip
        class=${oe({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base
          base__popup:tooltip__base__popup
          base__arrow:tooltip__base__arrow
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
    `}};at.styles=Pm;at.dependencies={"sl-icon":Le,"sl-tooltip":nt};c([j('slot[name="copy-icon"]')],at.prototype,"copyIcon",2);c([j('slot[name="success-icon"]')],at.prototype,"successIcon",2);c([j('slot[name="error-icon"]')],at.prototype,"errorIcon",2);c([j("sl-tooltip")],at.prototype,"tooltip",2);c([re()],at.prototype,"isCopying",2);c([re()],at.prototype,"status",2);c([h()],at.prototype,"value",2);c([h()],at.prototype,"from",2);c([h({type:Boolean,reflect:!0})],at.prototype,"disabled",2);c([h({attribute:"copy-label"})],at.prototype,"copyLabel",2);c([h({attribute:"success-label"})],at.prototype,"successLabel",2);c([h({attribute:"error-label"})],at.prototype,"errorLabel",2);c([h({attribute:"feedback-duration",type:Number})],at.prototype,"feedbackDuration",2);c([h({attribute:"tooltip-placement"})],at.prototype,"tooltipPlacement",2);c([h({type:Boolean})],at.prototype,"hoist",2);Se("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Se("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});at.define("sl-copy-button");var Vm=J`
  ${Z}

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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ja=class extends G{static isCarouselItem(e){return e instanceof Element&&e.getAttribute("aria-roledescription")==="slide"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return O` <slot></slot> `}};Ja.styles=Vm;Ja.define("sl-carousel-item");rt.define("sl-checkbox");var Fm=J`
  ${Z}

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
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
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
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
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
`;function ut(e,t){Nm(e)&&(e="100%");const s=Um(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),s&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function ur(e){return Math.min(1,Math.max(0,e))}function Nm(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Um(e){return typeof e=="string"&&e.indexOf("%")!==-1}function mu(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function hr(e){return Number(e)<=1?`${Number(e)*100}%`:e}function di(e){return e.length===1?"0"+e:String(e)}function Bm(e,t,s){return{r:ut(e,255)*255,g:ut(t,255)*255,b:ut(s,255)*255}}function uc(e,t,s){e=ut(e,255),t=ut(t,255),s=ut(s,255);const i=Math.max(e,t,s),o=Math.min(e,t,s);let r=0,n=0;const a=(i+o)/2;if(i===o)n=0,r=0;else{const l=i-o;switch(n=a>.5?l/(2-i-o):l/(i+o),i){case e:r=(t-s)/l+(t<s?6:0);break;case t:r=(s-e)/l+2;break;case s:r=(e-t)/l+4;break}r/=6}return{h:r,s:n,l:a}}function Un(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*(6*s):s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function Hm(e,t,s){let i,o,r;if(e=ut(e,360),t=ut(t,100),s=ut(s,100),t===0)o=s,r=s,i=s;else{const n=s<.5?s*(1+t):s+t-s*t,a=2*s-n;i=Un(a,n,e+1/3),o=Un(a,n,e),r=Un(a,n,e-1/3)}return{r:i*255,g:o*255,b:r*255}}function hc(e,t,s){e=ut(e,255),t=ut(t,255),s=ut(s,255);const i=Math.max(e,t,s),o=Math.min(e,t,s);let r=0;const n=i,a=i-o,l=i===0?0:a/i;if(i===o)r=0;else{switch(i){case e:r=(t-s)/a+(t<s?6:0);break;case t:r=(s-e)/a+2;break;case s:r=(e-t)/a+4;break}r/=6}return{h:r,s:l,v:n}}function jm(e,t,s){e=ut(e,360)*6,t=ut(t,100),s=ut(s,100);const i=Math.floor(e),o=e-i,r=s*(1-t),n=s*(1-o*t),a=s*(1-(1-o)*t),l=i%6,d=[s,n,r,r,a,s][l],p=[a,s,s,n,r,r][l],u=[r,r,a,s,s,n][l];return{r:d*255,g:p*255,b:u*255}}function pc(e,t,s,i){const o=[di(Math.round(e).toString(16)),di(Math.round(t).toString(16)),di(Math.round(s).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Wm(e,t,s,i,o){const r=[di(Math.round(e).toString(16)),di(Math.round(t).toString(16)),di(Math.round(s).toString(16)),di(Km(i))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function Km(e){return Math.round(parseFloat(e)*255).toString(16)}function fc(e){return Mt(e)/255}function Mt(e){return parseInt(e,16)}function qm(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const pa={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Gm(e){let t={r:0,g:0,b:0},s=1,i=null,o=null,r=null,n=!1,a=!1;return typeof e=="string"&&(e=Jm(e)),typeof e=="object"&&(Cs(e.r)&&Cs(e.g)&&Cs(e.b)?(t=Bm(e.r,e.g,e.b),n=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Cs(e.h)&&Cs(e.s)&&Cs(e.v)?(i=hr(e.s),o=hr(e.v),t=jm(e.h,i,o),n=!0,a="hsv"):Cs(e.h)&&Cs(e.s)&&Cs(e.l)&&(i=hr(e.s),r=hr(e.l),t=Hm(e.h,i,r),n=!0,a="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(s=e.a)),s=mu(s),{ok:n,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:s}}const Ym="[-\\+]?\\d+%?",Xm="[-\\+]?\\d*\\.\\d+%?",Bs=`(?:${Xm})|(?:${Ym})`,Bn=`[\\s|\\(]+(${Bs})[,|\\s]+(${Bs})[,|\\s]+(${Bs})\\s*\\)?`,Hn=`[\\s|\\(]+(${Bs})[,|\\s]+(${Bs})[,|\\s]+(${Bs})[,|\\s]+(${Bs})\\s*\\)?`,Zt={CSS_UNIT:new RegExp(Bs),rgb:new RegExp("rgb"+Bn),rgba:new RegExp("rgba"+Hn),hsl:new RegExp("hsl"+Bn),hsla:new RegExp("hsla"+Hn),hsv:new RegExp("hsv"+Bn),hsva:new RegExp("hsva"+Hn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Jm(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(pa[e])e=pa[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=Zt.rgb.exec(e);return s?{r:s[1],g:s[2],b:s[3]}:(s=Zt.rgba.exec(e),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=Zt.hsl.exec(e),s?{h:s[1],s:s[2],l:s[3]}:(s=Zt.hsla.exec(e),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=Zt.hsv.exec(e),s?{h:s[1],s:s[2],v:s[3]}:(s=Zt.hsva.exec(e),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=Zt.hex8.exec(e),s?{r:Mt(s[1]),g:Mt(s[2]),b:Mt(s[3]),a:fc(s[4]),format:t?"name":"hex8"}:(s=Zt.hex6.exec(e),s?{r:Mt(s[1]),g:Mt(s[2]),b:Mt(s[3]),format:t?"name":"hex"}:(s=Zt.hex4.exec(e),s?{r:Mt(s[1]+s[1]),g:Mt(s[2]+s[2]),b:Mt(s[3]+s[3]),a:fc(s[4]+s[4]),format:t?"name":"hex8"}:(s=Zt.hex3.exec(e),s?{r:Mt(s[1]+s[1]),g:Mt(s[2]+s[2]),b:Mt(s[3]+s[3]),format:t?"name":"hex"}:!1)))))))))}function Cs(e){return!!Zt.CSS_UNIT.exec(String(e))}class je{constructor(t="",s={}){if(t instanceof je)return t;typeof t=="number"&&(t=qm(t)),this.originalInput=t;const i=Gm(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let s,i,o;const r=t.r/255,n=t.g/255,a=t.b/255;return r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*s+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=mu(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=hc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=hc(this.r,this.g,this.b),s=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${s}, ${i}%, ${o}%)`:`hsva(${s}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const t=uc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=uc(this.r,this.g,this.b),s=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${s}, ${i}%, ${o}%)`:`hsla(${s}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return pc(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Wm(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${t}, ${s}, ${i})`:`rgba(${t}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=s=>`${Math.round(ut(s,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=s=>Math.round(ut(s,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+pc(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(pa))if(t===i)return s;return!1}toString(t){const s=!!t;t=t??this.format;let i=!1;const o=this.a<1&&this.a>=0;return!s&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new je(this.toString())}lighten(t=10){const s=this.toHsl();return s.l+=t/100,s.l=ur(s.l),new je(s)}brighten(t=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(t/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(t/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(t/100)))),new je(s)}darken(t=10){const s=this.toHsl();return s.l-=t/100,s.l=ur(s.l),new je(s)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const s=this.toHsl();return s.s-=t/100,s.s=ur(s.s),new je(s)}saturate(t=10){const s=this.toHsl();return s.s+=t/100,s.s=ur(s.s),new je(s)}greyscale(){return this.desaturate(100)}spin(t){const s=this.toHsl(),i=(s.h+t)%360;return s.h=i<0?360+i:i,new je(s)}mix(t,s=50){const i=this.toRgb(),o=new je(t).toRgb(),r=s/100,n={r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a};return new je(n)}analogous(t=6,s=30){const i=this.toHsl(),o=360/s,r=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,r.push(new je(i));return r}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new je(t)}monochromatic(t=6){const s=this.toHsv(),{h:i}=s,{s:o}=s;let{v:r}=s;const n=[],a=1/t;for(;t--;)n.push(new je({h:i,s:o,v:r})),r=(r+a)%1;return n}splitcomplement(){const t=this.toHsl(),{h:s}=t;return[this,new je({h:(s+72)%360,s:t.s,l:t.l}),new je({h:(s+216)%360,s:t.s,l:t.l})]}onBackground(t){const s=this.toRgb(),i=new je(t).toRgb(),o=s.a+i.a*(1-s.a);return new je({r:(s.r*s.a+i.r*i.a*(1-s.a))/o,g:(s.g*s.a+i.g*i.a*(1-s.a))/o,b:(s.b*s.a+i.b*i.a*(1-s.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const s=this.toHsl(),{h:i}=s,o=[this],r=360/t;for(let n=1;n<t;n++)o.push(new je({h:(i+n*r)%360,s:s.s,l:s.l}));return o}equals(t){return this.toRgbString()===new je(t).toRgbString()}}var mc="EyeDropper"in window,ve=class extends G{constructor(){super(),this.formControlController=new Ls(this),this.isSafeValue=!1,this.localize=new ke(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value;s.focus(),e.preventDefault(),ko(t,{onMove:r=>{this.alpha=Xe(r/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value;s.focus(),e.preventDefault(),ko(t,{onMove:r=>{this.hue=Xe(r/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),s=t.querySelector(".color-picker__grid-handle"),{width:i,height:o}=t.getBoundingClientRect();let r=this.value;s.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,ko(t,{onMove:(n,a)=>{this.saturation=Xe(n/i*100,0,100),this.brightness=Xe(100-a/o*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Xe(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Xe(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Xe(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Xe(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Xe(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Xe(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Xe(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Xe(this.brightness-t,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,s=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new je(e);if(!t.isValid)return null;const s=t.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},o=t.toRgb(),r=t.toHexString(),n=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!mc)return;new EyeDropper().open().then(t=>{const s=this.value;this.setColor(t.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,s,i=100){const o=new je(`hsva(${e}, ${t}, ${s}, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(t);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=O`
      <div
        part="base"
        class=${oe({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?O`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${St({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${oe({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${St({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Y(this.disabled?void 0:"0")}
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
                style=${St({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Y(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?O`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${St({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${St({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Y(this.disabled?void 0:"0")}
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
            style=${St({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":O`
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
            ${mc?O`
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

        ${s.length>0?O`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(o=>{const r=this.parseColor(o);return r?O`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${Y(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${St({backgroundColor:r.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:O`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${oe({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${St({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};ve.styles=Fm;ve.dependencies={"sl-button-group":_i,"sl-button":Ae,"sl-dropdown":bt,"sl-icon":Le,"sl-input":he,"sl-visually-hidden":Ya};c([j('[part~="base"]')],ve.prototype,"base",2);c([j('[part~="input"]')],ve.prototype,"input",2);c([j(".color-dropdown")],ve.prototype,"dropdown",2);c([j('[part~="preview"]')],ve.prototype,"previewButton",2);c([j('[part~="trigger"]')],ve.prototype,"trigger",2);c([re()],ve.prototype,"hasFocus",2);c([re()],ve.prototype,"isDraggingGridHandle",2);c([re()],ve.prototype,"isEmpty",2);c([re()],ve.prototype,"inputValue",2);c([re()],ve.prototype,"hue",2);c([re()],ve.prototype,"saturation",2);c([re()],ve.prototype,"brightness",2);c([re()],ve.prototype,"alpha",2);c([h()],ve.prototype,"value",2);c([wi()],ve.prototype,"defaultValue",2);c([h()],ve.prototype,"label",2);c([h()],ve.prototype,"format",2);c([h({type:Boolean,reflect:!0})],ve.prototype,"inline",2);c([h({reflect:!0})],ve.prototype,"size",2);c([h({attribute:"no-format-toggle",type:Boolean})],ve.prototype,"noFormatToggle",2);c([h()],ve.prototype,"name",2);c([h({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);c([h({type:Boolean})],ve.prototype,"hoist",2);c([h({type:Boolean})],ve.prototype,"opacity",2);c([h({type:Boolean})],ve.prototype,"uppercase",2);c([h()],ve.prototype,"swatches",2);c([h({reflect:!0})],ve.prototype,"form",2);c([h({type:Boolean,reflect:!0})],ve.prototype,"required",2);c([U("format",{waitUntilFirstUpdate:!0})],ve.prototype,"handleFormatChange",1);c([U("opacity",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpacityChange",1);c([U("value")],ve.prototype,"handleValueChange",1);ve.define("sl-color-picker");var Qm=J`
  ${Z}

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
`,gu=class extends G{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"footer","header","image")}render(){return O`
      <div
        part="base"
        class=${oe({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};gu.styles=Qm;gu.define("sl-card");var Zm=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},eg=J`
  ${Z}

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

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
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
`,gc=Symbol(),tg=e=>(t,s,i)=>{const o=i.value;i.value=function(...r){clearTimeout(this[gc]),this[gc]=window.setTimeout(()=>{o.apply(this,r)},e)}},bu=class{constructor(e){this.pointers=new Set,this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate()),this.handleScrollEnd()},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.pointers.add(t.pointerId),this.mouseDragging&&!this.dragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const s=this.host.scrollContainer,i=!!t.movementX||!!t.movementY;!this.dragging&&i?(s.setPointerCapture(t.pointerId),this.handleDragStart()):s.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.pointers.delete(t.pointerId),this.host.scrollContainer.releasePointerCapture(t.pointerId),this.pointers.size===0&&this.handleDragEnd()},this.handleTouchEnd=t=>{for(const s of t.changedTouches)this.pointers.delete(s.identifier)},this.handleTouchStart=t=>{for(const s of t.touches)this.pointers.add(s.identifier)},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp),t.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),t.addEventListener("touchend",this.handleTouchEnd)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp),t.removeEventListener("touchstart",this.handleTouchStart),t.removeEventListener("touchend",this.handleTouchEnd)}handleScrollEnd(){this.pointers.size?this.handleScrollEnd():(this.scrolling=!1,this.host.scrollContainer.dispatchEvent(new CustomEvent("scrollend",{bubbles:!1,cancelable:!1})),this.host.requestUpdate())}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}async handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove),this.dragging=!1;const s=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,r=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:s,top:i,behavior:"auto"}),t.scrollTo({left:o,top:r,behavior:Ga()?"auto":"smooth"}),this.scrolling&&await wt(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),e.requestUpdate()}};c([tg(100)],bu.prototype,"handleScrollEnd",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sg(e,t){if(e!==void 0){let s=0;for(const i of e)yield t(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ig(e,t,s=1){const i=t===void 0?0:e;t!=null||(t=e);for(let o=i;s>0?o<t:t<o;o+=s)yield o}var qe=class extends G{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Zm(this,()=>this.next()),this.scrollController=new bu(this),this.slides=this.getElementsByTagName("sl-carousel-item"),this.intersectionObserverEntries=new Map,this.localize=new ke(this),this.handleSlotChange=e=>{e.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>Ja.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(s=>{this.intersectionObserverEntries.set(s.target,s);const i=s.target;i.toggleAttribute("inert",!s.isIntersecting),i.classList.toggle("--in-view",s.isIntersecting),i.setAttribute("aria-hidden",s.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!1})}getPageCount(){return Math.ceil(this.getSlides().length/this.slidesPerPage)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerPage)}getSlides({excludeClones:e=!0}={}){return[...this.slides].filter(t=>!e||!t.hasAttribute("data-clone"))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,s=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!s&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft",r=e.key==="ArrowUp"||!s&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight";e.preventDefault(),r&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleScrollEnd(){const e=this.getSlides(),s=[...this.intersectionObserverEntries.values()].find(i=>i.isIntersecting);if(this.loop&&s?.target.hasAttribute("data-clone")){const i=Number(s.target.getAttribute("data-clone"));this.goToSlide(i,"auto");return}s&&(this.activeSlide=e.indexOf(s.target))}initializeSlides(){const e=this.getSlides(),t=this.intersectionObserver;if(this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((s,i)=>{t.unobserve(s),s.classList.remove("--in-view"),s.classList.remove("--is-active"),s.setAttribute("aria-label",this.localize.term("slideNum",i+1)),s.hasAttribute("data-clone")&&s.remove()}),this.loop){const s=this.slidesPerPage,i=e.slice(-s),o=e.slice(0,s);i.reverse().forEach((r,n)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(e.length-n-1)),this.prepend(a)}),o.forEach((r,n)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(n)),this.append(a)})}this.getSlides({excludeClones:!1}).forEach(s=>{t.observe(s)}),this.goToSlide(this.activeSlide,"auto")}handelSlideChange(){const e=this.getSlides();e.forEach((t,s)=>{t.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}handleSlidesPerMoveChange(){const e=this.getSlides({excludeClones:!1}),t=this.slidesPerMove;e.forEach((s,i)=>{Math.abs(i-t)%t===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){let t=this.activeSlide||this.activeSlide-this.slidesPerMove,s=!1;for(;!s&&t>0;)t-=1,s=Math.abs(t-this.slidesPerMove)%this.slidesPerMove===0;this.goToSlide(t,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:s,loop:i,scrollContainer:o}=this,r=this.getSlides(),n=this.getSlides({excludeClones:!1}),a=(e+r.length)%r.length;this.activeSlide=a;const l=Xe(e+(i?s:0),0,n.length-1),d=n[l],p=o.getBoundingClientRect(),u=d.getBoundingClientRect();o.scrollTo({left:u.left-p.left+o.scrollLeft,top:u.top-p.top+o.scrollTop,behavior:Ga()?"auto":t})}render(){const{scrollController:e,slidesPerPage:t}=this,s=this.getPageCount(),i=this.getCurrentPage(),o=this.loop||i>0,r=this.loop||i<s-1,n=this.localize.dir()==="ltr";return O`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${oe({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?O`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${oe({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${oe({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?O`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${sg(ig(s),a=>{const l=a===i;return O`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${oe({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,s)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};qe.styles=eg;qe.dependencies={"sl-icon":Le};c([h({type:Boolean,reflect:!0})],qe.prototype,"loop",2);c([h({type:Boolean,reflect:!0})],qe.prototype,"navigation",2);c([h({type:Boolean,reflect:!0})],qe.prototype,"pagination",2);c([h({type:Boolean,reflect:!0})],qe.prototype,"autoplay",2);c([h({type:Number,attribute:"autoplay-interval"})],qe.prototype,"autoplayInterval",2);c([h({type:Number,attribute:"slides-per-page"})],qe.prototype,"slidesPerPage",2);c([h({type:Number,attribute:"slides-per-move"})],qe.prototype,"slidesPerMove",2);c([h()],qe.prototype,"orientation",2);c([h({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],qe.prototype,"mouseDragging",2);c([j("slot:not([name])")],qe.prototype,"defaultSlot",2);c([j(".carousel__slides")],qe.prototype,"scrollContainer",2);c([j(".carousel__pagination")],qe.prototype,"paginationContainer",2);c([re()],qe.prototype,"activeSlide",2);c([U("loop",{waitUntilFirstUpdate:!0}),U("slidesPerPage",{waitUntilFirstUpdate:!0})],qe.prototype,"initializeSlides",1);c([U("activeSlide")],qe.prototype,"handelSlideChange",1);c([U("slidesPerMove")],qe.prototype,"handleSlidesPerMoveChange",1);c([U("autoplay")],qe.prototype,"handleAutoplayChange",1);c([U("mouseDragging")],qe.prototype,"handleMouseDraggingChange",1);qe.define("sl-carousel");var og=J`
  ${Z}

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
`,xs=class extends G{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=O`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=O``;return this.initials?t=O`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=O`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,O`
      <div
        part="base"
        class=${oe({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};xs.styles=og;xs.dependencies={"sl-icon":Le};c([re()],xs.prototype,"hasError",2);c([h()],xs.prototype,"image",2);c([h()],xs.prototype,"label",2);c([h()],xs.prototype,"initials",2);c([h()],xs.prototype,"loading",2);c([h({reflect:!0})],xs.prototype,"shape",2);c([U("image")],xs.prototype,"handleImageChange",1);xs.define("sl-avatar");var rg=J`
  ${Z}

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
  }
`,tr=class extends G{constructor(){super(...arguments),this.hasSlotController=new Ut(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return O`
      <div
        part="base"
        class=${oe({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?O`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${Y(this.target?this.target:void 0)}"
                rel=${Y(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:O`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};tr.styles=rg;c([h()],tr.prototype,"href",2);c([h()],tr.prototype,"target",2);c([h()],tr.prototype,"rel",2);tr.define("sl-breadcrumb-item");var ng=J`
  ${Z}

  :host {
    display: contents;
  }
`;const ag=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],lg=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],cg=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],dg=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],ug=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],hg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],pg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],fg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],mg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],bg=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],yg=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],vg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_g=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],wg=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],xg=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],kg=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Cg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Eg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],$g=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Sg=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ag=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Tg=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ig=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],zg=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Og=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Lg=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Mg=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Rg=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Dg=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Pg=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Vg=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Fg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ng=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ug=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bg=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jg=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wg=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kg=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qg=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gg=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yg=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xg=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jg=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Qg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Zg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],eb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],tb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],sb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],ib=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],ob=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],rb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],nb=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],ab=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],lb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],cb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],db=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],ub=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],hb=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],pb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],fb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],mb=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gb=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],bb=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],yb=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],vb=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],_b=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],wb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],xb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],kb=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Cb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Eb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],$b=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Sb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ab=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Tb=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ib=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],zb=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ob=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Mb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Rb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Db=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Pb=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Vb=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Fb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Nb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Ub=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Bb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Hb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],jb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Wb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Kb=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],qb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Yb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Xb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Jb=Object.freeze(Object.defineProperty({__proto__:null,backInDown:_g,backInLeft:wg,backInRight:xg,backInUp:kg,backOutDown:Cg,backOutLeft:Eg,backOutRight:$g,backOutUp:Sg,bounce:ag,bounceIn:Ag,bounceInDown:Tg,bounceInLeft:Ig,bounceInRight:zg,bounceInUp:Og,bounceOut:Lg,bounceOutDown:Mg,bounceOutLeft:Rg,bounceOutRight:Dg,bounceOutUp:Pg,easings:yu,fadeIn:Vg,fadeInBottomLeft:Fg,fadeInBottomRight:Ng,fadeInDown:Ug,fadeInDownBig:Bg,fadeInLeft:Hg,fadeInLeftBig:jg,fadeInRight:Wg,fadeInRightBig:Kg,fadeInTopLeft:qg,fadeInTopRight:Gg,fadeInUp:Yg,fadeInUpBig:Xg,fadeOut:Jg,fadeOutBottomLeft:Qg,fadeOutBottomRight:Zg,fadeOutDown:eb,fadeOutDownBig:tb,fadeOutLeft:sb,fadeOutLeftBig:ib,fadeOutRight:ob,fadeOutRightBig:rb,fadeOutTopLeft:nb,fadeOutTopRight:ab,fadeOutUp:lb,fadeOutUpBig:cb,flash:lg,flip:db,flipInX:ub,flipInY:hb,flipOutX:pb,flipOutY:fb,headShake:cg,heartBeat:dg,hinge:Pb,jackInTheBox:Vb,jello:ug,lightSpeedInLeft:mb,lightSpeedInRight:gb,lightSpeedOutLeft:bb,lightSpeedOutRight:yb,pulse:hg,rollIn:Fb,rollOut:Nb,rotateIn:vb,rotateInDownLeft:_b,rotateInDownRight:wb,rotateInUpLeft:xb,rotateInUpRight:kb,rotateOut:Cb,rotateOutDownLeft:Eb,rotateOutDownRight:$b,rotateOutUpLeft:Sb,rotateOutUpRight:Ab,rubberBand:pg,shake:fg,shakeX:mg,shakeY:gg,slideInDown:Tb,slideInLeft:Ib,slideInRight:zb,slideInUp:Ob,slideOutDown:Lb,slideOutLeft:Mb,slideOutRight:Rb,slideOutUp:Db,swing:bg,tada:yg,wobble:vg,zoomIn:Ub,zoomInDown:Bb,zoomInLeft:Hb,zoomInRight:jb,zoomInUp:Wb,zoomOut:Kb,zoomOutDown:qb,zoomOutLeft:Gb,zoomOutRight:Yb,zoomOutUp:Xb},Symbol.toStringTag,{value:"Module"}));var lt=class extends G{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const s=(e=yu[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:Jb[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!i?!1:(this.destroyAnimation(),this.animation=r.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return O` <slot @slotchange=${this.handleSlotChange}></slot> `}};lt.styles=ng;c([Bp("slot")],lt.prototype,"defaultSlot",2);c([h()],lt.prototype,"name",2);c([h({type:Boolean,reflect:!0})],lt.prototype,"play",2);c([h({type:Number})],lt.prototype,"delay",2);c([h()],lt.prototype,"direction",2);c([h({type:Number})],lt.prototype,"duration",2);c([h()],lt.prototype,"easing",2);c([h({attribute:"end-delay",type:Number})],lt.prototype,"endDelay",2);c([h()],lt.prototype,"fill",2);c([h({type:Number})],lt.prototype,"iterations",2);c([h({attribute:"iteration-start",type:Number})],lt.prototype,"iterationStart",2);c([h({attribute:!1})],lt.prototype,"keyframes",2);c([h({attribute:"playback-rate",type:Number})],lt.prototype,"playbackRate",2);c([U(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],lt.prototype,"handleAnimationChange",1);c([U("play")],lt.prototype,"handlePlayChange",1);c([U("playbackRate")],lt.prototype,"handlePlaybackRateChange",1);lt.define("sl-animation");var Qb=J`
  ${Z}

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
`,sr=class extends G{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return O`
      <span
        part="base"
        class=${oe({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};sr.styles=Qb;c([h({reflect:!0})],sr.prototype,"variant",2);c([h({type:Boolean,reflect:!0})],sr.prototype,"pill",2);c([h({type:Boolean,reflect:!0})],sr.prototype,"pulse",2);sr.define("sl-badge");var Zb=J`
  ${Z}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Qi=class extends G{constructor(){super(...arguments),this.localize=new ke(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,s)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),O`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Qi.styles=Zb;Qi.dependencies={"sl-icon":Le};c([j("slot")],Qi.prototype,"defaultSlot",2);c([j('slot[name="separator"]')],Qi.prototype,"separatorSlot",2);c([h()],Qi.prototype,"label",2);Qi.define("sl-breadcrumb");var e0=J`
  ${Z}

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
`,cs=class extends G{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:s}=this.animatedImage;e.width=t,e.height=s,e.getContext("2d").drawImage(this.animatedImage,0,0,t,s),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return O`
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

        ${this.isLoaded?O`
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
    `}};cs.styles=e0;cs.dependencies={"sl-icon":Le};c([j(".animated-image__animated")],cs.prototype,"animatedImage",2);c([re()],cs.prototype,"frozenFrame",2);c([re()],cs.prototype,"isLoaded",2);c([h()],cs.prototype,"src",2);c([h()],cs.prototype,"alt",2);c([h({type:Boolean,reflect:!0})],cs.prototype,"play",2);c([U("play",{waitUntilFirstUpdate:!0})],cs.prototype,"handlePlayChange",1);c([U("src")],cs.prototype,"handleSrcChange",1);cs.define("sl-animated-image");aa("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/");function Qa(e,t){const s=Object.create(null),i=e.split(",");for(let o=0;o<i.length;o++)s[i[o]]=!0;return t?o=>!!s[o.toLowerCase()]:o=>!!s[o]}const Ve={},Pi=[],is=()=>{},t0=()=>!1,s0=/^on[^a-z]/,dn=e=>s0.test(e),Za=e=>e.startsWith("onUpdate:"),ot=Object.assign,el=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},i0=Object.prototype.hasOwnProperty,we=(e,t)=>i0.call(e,t),ae=Array.isArray,Vi=e=>un(e)==="[object Map]",vu=e=>un(e)==="[object Set]",pe=e=>typeof e=="function",Ye=e=>typeof e=="string",tl=e=>typeof e=="symbol",Ue=e=>e!==null&&typeof e=="object",_u=e=>Ue(e)&&pe(e.then)&&pe(e.catch),wu=Object.prototype.toString,un=e=>wu.call(e),o0=e=>un(e).slice(8,-1),xu=e=>un(e)==="[object Object]",sl=e=>Ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ir=Qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hn=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},r0=/-(\w)/g,Hi=hn(e=>e.replace(r0,(t,s)=>s?s.toUpperCase():"")),n0=/\B([A-Z])/g,Zi=hn(e=>e.replace(n0,"-$1").toLowerCase()),ku=hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=hn(e=>e?`on${ku(e)}`:""),Ro=(e,t)=>!Object.is(e,t),Wn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Nr=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},a0=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bc;const fa=()=>bc||(bc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pn(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],o=Ye(i)?u0(i):pn(i);if(o)for(const r in o)t[r]=o[r]}return t}else{if(Ye(e))return e;if(Ue(e))return e}}const l0=/;(?![^(]*\))/g,c0=/:([^]+)/,d0=/\/\*[^]*?\*\//g;function u0(e){const t={};return e.replace(d0,"").split(l0).forEach(s=>{if(s){const i=s.split(c0);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ji(e){let t="";if(Ye(e))t=e;else if(ae(e))for(let s=0;s<e.length;s++){const i=ji(e[s]);i&&(t+=i+" ")}else if(Ue(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function h0(e){if(!e)return null;let{class:t,style:s}=e;return t&&!Ye(t)&&(e.class=ji(t)),s&&(e.style=pn(s)),e}const p0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f0=Qa(p0);function Cu(e){return!!e||e===""}const ue=e=>Ye(e)?e:e==null?"":ae(e)||Ue(e)&&(e.toString===wu||!pe(e.toString))?JSON.stringify(e,Eu,2):String(e),Eu=(e,t)=>t&&t.__v_isRef?Eu(e,t.value):Vi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,o])=>(s[`${i} =>`]=o,s),{})}:vu(t)?{[`Set(${t.size})`]:[...t.values()]}:Ue(t)&&!ae(t)&&!xu(t)?String(t):t;let Rt;class $u{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!t&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=Rt;try{return Rt=this,t()}finally{Rt=s}}}on(){Rt=this}off(){Rt=this.parent}stop(t){if(this._active){let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.scopes)for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function il(e){return new $u(e)}function m0(e,t=Rt){t&&t.active&&t.effects.push(e)}function Su(){return Rt}function g0(e){Rt&&Rt.cleanups.push(e)}const ol=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Au=e=>(e.w&Ys)>0,Tu=e=>(e.n&Ys)>0,b0=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ys},y0=e=>{const{deps:t}=e;if(t.length){let s=0;for(let i=0;i<t.length;i++){const o=t[i];Au(o)&&!Tu(o)?o.delete(e):t[s++]=o,o.w&=~Ys,o.n&=~Ys}t.length=s}},Ur=new WeakMap;let go=0,Ys=1;const ma=30;let ts;const hi=Symbol(""),ga=Symbol("");class rl{constructor(t,s=null,i){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,m0(this,i)}run(){if(!this.active)return this.fn();let t=ts,s=Hs;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ts,ts=this,Hs=!0,Ys=1<<++go,go<=ma?b0(this):yc(this),this.fn()}finally{go<=ma&&y0(this),Ys=1<<--go,ts=this.parent,Hs=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ts===this?this.deferStop=!0:this.active&&(yc(this),this.onStop&&this.onStop(),this.active=!1)}}function yc(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let Hs=!0;const Iu=[];function eo(){Iu.push(Hs),Hs=!1}function to(){const e=Iu.pop();Hs=e===void 0?!0:e}function Tt(e,t,s){if(Hs&&ts){let i=Ur.get(e);i||Ur.set(e,i=new Map);let o=i.get(s);o||i.set(s,o=ol()),zu(o)}}function zu(e,t){let s=!1;go<=ma?Tu(e)||(e.n|=Ys,s=!Au(e)):s=!e.has(ts),s&&(e.add(ts),ts.deps.push(e))}function Is(e,t,s,i,o,r){const n=Ur.get(e);if(!n)return;let a=[];if(t==="clear")a=[...n.values()];else if(s==="length"&&ae(e)){const l=Number(i);n.forEach((d,p)=>{(p==="length"||p>=l)&&a.push(d)})}else switch(s!==void 0&&a.push(n.get(s)),t){case"add":ae(e)?sl(s)&&a.push(n.get("length")):(a.push(n.get(hi)),Vi(e)&&a.push(n.get(ga)));break;case"delete":ae(e)||(a.push(n.get(hi)),Vi(e)&&a.push(n.get(ga)));break;case"set":Vi(e)&&a.push(n.get(hi));break}if(a.length===1)a[0]&&ba(a[0]);else{const l=[];for(const d of a)d&&l.push(...d);ba(ol(l))}}function ba(e,t){const s=ae(e)?e:[...e];for(const i of s)i.computed&&vc(i);for(const i of s)i.computed||vc(i)}function vc(e,t){(e!==ts||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function v0(e,t){var s;return(s=Ur.get(e))==null?void 0:s.get(t)}const _0=Qa("__proto__,__v_isRef,__isVue"),Ou=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tl)),w0=nl(),x0=nl(!1,!0),k0=nl(!0),_c=C0();function C0(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const i=be(this);for(let r=0,n=this.length;r<n;r++)Tt(i,"get",r+"");const o=i[t](...s);return o===-1||o===!1?i[t](...s.map(be)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){eo();const i=be(this)[t].apply(this,s);return to(),i}}),e}function E0(e){const t=be(this);return Tt(t,"has",e),t.hasOwnProperty(e)}function nl(e=!1,t=!1){return function(i,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?U0:Pu:t?Du:Ru).get(i))return i;const n=ae(i);if(!e){if(n&&we(_c,o))return Reflect.get(_c,o,r);if(o==="hasOwnProperty")return E0}const a=Reflect.get(i,o,r);return(tl(o)?Ou.has(o):_0(o))||(e||Tt(i,"get",o),t)?a:Be(a)?n&&sl(o)?a:a.value:Ue(a)?e?Vu(a):ir(a):a}}const $0=Lu(),S0=Lu(!0);function Lu(e=!1){return function(s,i,o,r){let n=s[i];if(Wi(n)&&Be(n)&&!Be(o))return!1;if(!e&&(!Br(o)&&!Wi(o)&&(n=be(n),o=be(o)),!ae(s)&&Be(n)&&!Be(o)))return n.value=o,!0;const a=ae(s)&&sl(i)?Number(i)<s.length:we(s,i),l=Reflect.set(s,i,o,r);return s===be(r)&&(a?Ro(o,n)&&Is(s,"set",i,o):Is(s,"add",i,o)),l}}function A0(e,t){const s=we(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Is(e,"delete",t,void 0),i}function T0(e,t){const s=Reflect.has(e,t);return(!tl(t)||!Ou.has(t))&&Tt(e,"has",t),s}function I0(e){return Tt(e,"iterate",ae(e)?"length":hi),Reflect.ownKeys(e)}const Mu={get:w0,set:$0,deleteProperty:A0,has:T0,ownKeys:I0},z0={get:k0,set(e,t){return!0},deleteProperty(e,t){return!0}},O0=ot({},Mu,{get:x0,set:S0}),al=e=>e,fn=e=>Reflect.getPrototypeOf(e);function pr(e,t,s=!1,i=!1){e=e.__v_raw;const o=be(e),r=be(t);s||(t!==r&&Tt(o,"get",t),Tt(o,"get",r));const{has:n}=fn(o),a=i?al:s?ul:Do;if(n.call(o,t))return a(e.get(t));if(n.call(o,r))return a(e.get(r));e!==o&&e.get(t)}function fr(e,t=!1){const s=this.__v_raw,i=be(s),o=be(e);return t||(e!==o&&Tt(i,"has",e),Tt(i,"has",o)),e===o?s.has(e):s.has(e)||s.has(o)}function mr(e,t=!1){return e=e.__v_raw,!t&&Tt(be(e),"iterate",hi),Reflect.get(e,"size",e)}function wc(e){e=be(e);const t=be(this);return fn(t).has.call(t,e)||(t.add(e),Is(t,"add",e,e)),this}function xc(e,t){t=be(t);const s=be(this),{has:i,get:o}=fn(s);let r=i.call(s,e);r||(e=be(e),r=i.call(s,e));const n=o.call(s,e);return s.set(e,t),r?Ro(t,n)&&Is(s,"set",e,t):Is(s,"add",e,t),this}function kc(e){const t=be(this),{has:s,get:i}=fn(t);let o=s.call(t,e);o||(e=be(e),o=s.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return o&&Is(t,"delete",e,void 0),r}function Cc(){const e=be(this),t=e.size!==0,s=e.clear();return t&&Is(e,"clear",void 0,void 0),s}function gr(e,t){return function(i,o){const r=this,n=r.__v_raw,a=be(n),l=t?al:e?ul:Do;return!e&&Tt(a,"iterate",hi),n.forEach((d,p)=>i.call(o,l(d),l(p),r))}}function br(e,t,s){return function(...i){const o=this.__v_raw,r=be(o),n=Vi(r),a=e==="entries"||e===Symbol.iterator&&n,l=e==="keys"&&n,d=o[e](...i),p=s?al:t?ul:Do;return!t&&Tt(r,"iterate",l?ga:hi),{next(){const{value:u,done:f}=d.next();return f?{value:u,done:f}:{value:a?[p(u[0]),p(u[1])]:p(u),done:f}},[Symbol.iterator](){return this}}}}function Ds(e){return function(...t){return e==="delete"?!1:this}}function L0(){const e={get(r){return pr(this,r)},get size(){return mr(this)},has:fr,add:wc,set:xc,delete:kc,clear:Cc,forEach:gr(!1,!1)},t={get(r){return pr(this,r,!1,!0)},get size(){return mr(this)},has:fr,add:wc,set:xc,delete:kc,clear:Cc,forEach:gr(!1,!0)},s={get(r){return pr(this,r,!0)},get size(){return mr(this,!0)},has(r){return fr.call(this,r,!0)},add:Ds("add"),set:Ds("set"),delete:Ds("delete"),clear:Ds("clear"),forEach:gr(!0,!1)},i={get(r){return pr(this,r,!0,!0)},get size(){return mr(this,!0)},has(r){return fr.call(this,r,!0)},add:Ds("add"),set:Ds("set"),delete:Ds("delete"),clear:Ds("clear"),forEach:gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=br(r,!1,!1),s[r]=br(r,!0,!1),t[r]=br(r,!1,!0),i[r]=br(r,!0,!0)}),[e,s,t,i]}const[M0,R0,D0,P0]=L0();function ll(e,t){const s=t?e?P0:D0:e?R0:M0;return(i,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(we(s,o)&&o in i?s:i,o,r)}const V0={get:ll(!1,!1)},F0={get:ll(!1,!0)},N0={get:ll(!0,!1)},Ru=new WeakMap,Du=new WeakMap,Pu=new WeakMap,U0=new WeakMap;function B0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H0(e){return e.__v_skip||!Object.isExtensible(e)?0:B0(o0(e))}function ir(e){return Wi(e)?e:cl(e,!1,Mu,V0,Ru)}function j0(e){return cl(e,!1,O0,F0,Du)}function Vu(e){return cl(e,!0,z0,N0,Pu)}function cl(e,t,s,i,o){if(!Ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const n=H0(e);if(n===0)return e;const a=new Proxy(e,n===2?i:s);return o.set(e,a),a}function As(e){return Wi(e)?As(e.__v_raw):!!(e&&e.__v_isReactive)}function Wi(e){return!!(e&&e.__v_isReadonly)}function Br(e){return!!(e&&e.__v_isShallow)}function dl(e){return As(e)||Wi(e)}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function mn(e){return Nr(e,"__v_skip",!0),e}const Do=e=>Ue(e)?ir(e):e,ul=e=>Ue(e)?Vu(e):e;function Fu(e){Hs&&ts&&(e=be(e),zu(e.dep||(e.dep=ol())))}function Nu(e,t){e=be(e);const s=e.dep;s&&ba(s)}function Be(e){return!!(e&&e.__v_isRef===!0)}function ze(e){return W0(e,!1)}function W0(e,t){return Be(e)?e:new K0(e,t)}class K0{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:be(t),this._value=s?t:Do(t)}get value(){return Fu(this),this._value}set value(t){const s=this.__v_isShallow||Br(t)||Wi(t);t=s?t:be(t),Ro(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Do(t),Nu(this))}}function H(e){return Be(e)?e.value:e}const q0={get:(e,t,s)=>H(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const o=e[t];return Be(o)&&!Be(s)?(o.value=s,!0):Reflect.set(e,t,s,i)}};function Uu(e){return As(e)?e:new Proxy(e,q0)}function Bu(e){const t=ae(e)?new Array(e.length):{};for(const s in e)t[s]=Y0(e,s);return t}class G0{constructor(t,s,i){this._object=t,this._key=s,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return v0(be(this._object),this._key)}}function Y0(e,t,s){const i=e[t];return Be(i)?i:new G0(e,t,s)}class X0{constructor(t,s,i,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new rl(t,()=>{this._dirty||(this._dirty=!0,Nu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=i}get value(){const t=be(this);return Fu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function J0(e,t,s=!1){let i,o;const r=pe(e);return r?(i=e,o=is):(i=e.get,o=e.set),new X0(i,o,r||!o,s)}function js(e,t,s,i){let o;try{o=i?e(...i):e()}catch(r){gn(r,t,s)}return o}function os(e,t,s,i){if(pe(e)){const r=js(e,t,s,i);return r&&_u(r)&&r.catch(n=>{gn(n,t,s)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(os(e[r],t,s,i));return o}function gn(e,t,s,i=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const n=t.proxy,a=s;for(;r;){const d=r.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,n,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){js(l,null,10,[e,n,a]);return}}Q0(e,s,o,i)}function Q0(e,t,s,i=!0){console.error(e)}let Po=!1,ya=!1;const ft=[];let ms=0;const Fi=[];let Es=null,ai=0;const Hu=Promise.resolve();let hl=null;function ju(e){const t=hl||Hu;return e?t.then(this?e.bind(this):e):t}function Z0(e){let t=ms+1,s=ft.length;for(;t<s;){const i=t+s>>>1;Vo(ft[i])<e?t=i+1:s=i}return t}function pl(e){(!ft.length||!ft.includes(e,Po&&e.allowRecurse?ms+1:ms))&&(e.id==null?ft.push(e):ft.splice(Z0(e.id),0,e),Wu())}function Wu(){!Po&&!ya&&(ya=!0,hl=Hu.then(qu))}function ey(e){const t=ft.indexOf(e);t>ms&&ft.splice(t,1)}function ty(e){ae(e)?Fi.push(...e):(!Es||!Es.includes(e,e.allowRecurse?ai+1:ai))&&Fi.push(e),Wu()}function Ec(e,t=Po?ms+1:0){for(;t<ft.length;t++){const s=ft[t];s&&s.pre&&(ft.splice(t,1),t--,s())}}function Ku(e){if(Fi.length){const t=[...new Set(Fi)];if(Fi.length=0,Es){Es.push(...t);return}for(Es=t,Es.sort((s,i)=>Vo(s)-Vo(i)),ai=0;ai<Es.length;ai++)Es[ai]();Es=null,ai=0}}const Vo=e=>e.id==null?1/0:e.id,sy=(e,t)=>{const s=Vo(e)-Vo(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function qu(e){ya=!1,Po=!0,ft.sort(sy);const t=is;try{for(ms=0;ms<ft.length;ms++){const s=ft[ms];s&&s.active!==!1&&js(s,null,14)}}finally{ms=0,ft.length=0,Ku(),Po=!1,hl=null,(ft.length||Fi.length)&&qu()}}function iy(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||Ve;let o=s;const r=t.startsWith("update:"),n=r&&t.slice(7);if(n&&n in i){const p=`${n==="modelValue"?"model":n}Modifiers`,{number:u,trim:f}=i[p]||Ve;f&&(o=s.map(m=>Ye(m)?m.trim():m)),u&&(o=s.map(a0))}let a,l=i[a=jn(t)]||i[a=jn(Hi(t))];!l&&r&&(l=i[a=jn(Zi(t))]),l&&os(l,e,6,o);const d=i[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,os(d,e,6,o)}}function Gu(e,t,s=!1){const i=t.emitsCache,o=i.get(e);if(o!==void 0)return o;const r=e.emits;let n={},a=!1;if(!pe(e)){const l=d=>{const p=Gu(d,t,!0);p&&(a=!0,ot(n,p))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(Ue(e)&&i.set(e,null),null):(ae(r)?r.forEach(l=>n[l]=null):ot(n,r),Ue(e)&&i.set(e,n),n)}function bn(e,t){return!e||!dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(e,t[0].toLowerCase()+t.slice(1))||we(e,Zi(t))||we(e,t))}let mt=null,Yu=null;function Hr(e){const t=mt;return mt=e,Yu=e&&e.type.__scopeId||null,t}function Xu(e,t=mt,s){if(!t||e._n)return e;const i=(...o)=>{i._d&&Wr(-1);const r=Hr(t);let n;try{n=e(...o)}finally{Hr(r),i._d&&Wr(1)}return n};return i._n=!0,i._c=!0,i._d=!0,i}function Kn(e){const{type:t,vnode:s,proxy:i,withProxy:o,props:r,propsOptions:[n],slots:a,attrs:l,emit:d,render:p,renderCache:u,data:f,setupState:m,ctx:g,inheritAttrs:v}=e;let A,$;const k=Hr(e);try{if(s.shapeFlag&4){const y=o||i;A=fs(p.call(y,y,u,r,m,f,g)),$=l}else{const y=t;A=fs(y.length>1?y(r,{attrs:l,slots:a,emit:d}):y(r,null)),$=t.props?l:oy(l)}}catch(y){$o.length=0,gn(y,e,1),A=Pe(Xs)}let T=A;if($&&v!==!1){const y=Object.keys($),{shapeFlag:x}=T;y.length&&x&7&&(n&&y.some(Za)&&($=ry($,n)),T=Ki(T,$))}return s.dirs&&(T=Ki(T),T.dirs=T.dirs?T.dirs.concat(s.dirs):s.dirs),s.transition&&(T.transition=s.transition),A=T,Hr(k),A}const oy=e=>{let t;for(const s in e)(s==="class"||s==="style"||dn(s))&&((t||(t={}))[s]=e[s]);return t},ry=(e,t)=>{const s={};for(const i in e)(!Za(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s};function ny(e,t,s){const{props:i,children:o,component:r}=e,{props:n,children:a,patchFlag:l}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?$c(i,n,d):!!n;if(l&8){const p=t.dynamicProps;for(let u=0;u<p.length;u++){const f=p[u];if(n[f]!==i[f]&&!bn(d,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:i===n?!1:i?n?$c(i,n,d):!0:!!n;return!1}function $c(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const r=i[o];if(t[r]!==e[r]&&!bn(s,r))return!0}return!1}function ay({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const ly=e=>e.__isSuspense;function cy(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):ty(e)}const yr={};function pi(e,t,s){return Ju(e,t,s)}function Ju(e,t,{immediate:s,deep:i,flush:o,onTrack:r,onTrigger:n}=Ve){var a;const l=Su()===((a=tt)==null?void 0:a.scope)?tt:null;let d,p=!1,u=!1;if(Be(e)?(d=()=>e.value,p=Br(e)):As(e)?(d=()=>e,i=!0):ae(e)?(u=!0,p=e.some(y=>As(y)||Br(y)),d=()=>e.map(y=>{if(Be(y))return y.value;if(As(y))return Mi(y);if(pe(y))return js(y,l,2)})):pe(e)?t?d=()=>js(e,l,2):d=()=>{if(!(l&&l.isUnmounted))return f&&f(),os(e,l,3,[m])}:d=is,t&&i){const y=d;d=()=>Mi(y())}let f,m=y=>{f=k.onStop=()=>{js(y,l,4)}},g;if(Uo)if(m=is,t?s&&os(t,l,3,[d(),u?[]:void 0,m]):d(),o==="sync"){const y=tv();g=y.__watcherHandles||(y.__watcherHandles=[])}else return is;let v=u?new Array(e.length).fill(yr):yr;const A=()=>{if(k.active)if(t){const y=k.run();(i||p||(u?y.some((x,C)=>Ro(x,v[C])):Ro(y,v)))&&(f&&f(),os(t,l,3,[y,v===yr?void 0:u&&v[0]===yr?[]:v,m]),v=y)}else k.run()};A.allowRecurse=!!t;let $;o==="sync"?$=A:o==="post"?$=()=>$t(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),$=()=>pl(A));const k=new rl(d,$);t?s?A():v=k.run():o==="post"?$t(k.run.bind(k),l&&l.suspense):k.run();const T=()=>{k.stop(),l&&l.scope&&el(l.scope.effects,k)};return g&&g.push(T),T}function dy(e,t,s){const i=this.proxy,o=Ye(e)?e.includes(".")?Qu(i,e):()=>i[e]:e.bind(i,i);let r;pe(t)?r=t:(r=t.handler,s=t);const n=tt;qi(this);const a=Ju(o,r.bind(i),s);return n?qi(n):fi(),a}function Qu(e,t){const s=t.split(".");return()=>{let i=e;for(let o=0;o<s.length&&i;o++)i=i[s[o]];return i}}function Mi(e,t){if(!Ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Be(e))Mi(e.value,t);else if(ae(e))for(let s=0;s<e.length;s++)Mi(e[s],t);else if(vu(e)||Vi(e))e.forEach(s=>{Mi(s,t)});else if(xu(e))for(const s in e)Mi(e[s],t);return e}function ii(e,t,s,i){const o=e.dirs,r=t&&t.dirs;for(let n=0;n<o.length;n++){const a=o[n];r&&(a.oldValue=r[n].value);let l=a.dir[i];l&&(eo(),os(l,s,8,[e.el,a,e,t]),to())}}function It(e,t){return pe(e)?(()=>ot({name:e.name},t,{setup:e}))():e}const Co=e=>!!e.type.__asyncLoader,Zu=e=>e.type.__isKeepAlive;function uy(e,t){eh(e,"a",t)}function hy(e,t){eh(e,"da",t)}function eh(e,t,s=tt){const i=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(yn(t,i,s),s){let o=s.parent;for(;o&&o.parent;)Zu(o.parent.vnode)&&py(i,t,s,o),o=o.parent}}function py(e,t,s,i){const o=yn(t,e,i,!0);ml(()=>{el(i[t],o)},s)}function yn(e,t,s=tt,i=!1){if(s){const o=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...n)=>{if(s.isUnmounted)return;eo(),qi(s);const a=os(t,s,e,n);return fi(),to(),a});return i?o.unshift(r):o.push(r),r}}const Ms=e=>(t,s=tt)=>(!Uo||e==="sp")&&yn(e,(...i)=>t(...i),s),fy=Ms("bm"),fl=Ms("m"),my=Ms("bu"),gy=Ms("u"),by=Ms("bum"),ml=Ms("um"),yy=Ms("sp"),vy=Ms("rtg"),_y=Ms("rtc");function wy(e,t=tt){yn("ec",e,t)}const xy=Symbol.for("v-ndc");function th(e,t,s,i){let o;const r=s&&s[i];if(ae(e)||Ye(e)){o=new Array(e.length);for(let n=0,a=e.length;n<a;n++)o[n]=t(e[n],n,void 0,r&&r[n])}else if(typeof e=="number"){o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,r&&r[n])}else if(Ue(e))if(e[Symbol.iterator])o=Array.from(e,(n,a)=>t(n,a,void 0,r&&r[a]));else{const n=Object.keys(e);o=new Array(n.length);for(let a=0,l=n.length;a<l;a++){const d=n[a];o[a]=t(e[d],d,a,r&&r[a])}}else o=[];return s&&(s[i]=o),o}function ky(e,t,s={},i,o){if(mt.isCE||mt.parent&&Co(mt.parent)&&mt.parent.isCE)return t!=="default"&&(s.name=t),Pe("slot",s,i&&i());let r=e[t];r&&r._c&&(r._d=!1),de();const n=r&&sh(r(s)),a=Ss(_t,{key:s.key||n&&n.key||`_${t}`},n||(i?i():[]),n&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function sh(e){return e.some(t=>Kr(t)?!(t.type===Xs||t.type===_t&&!sh(t.children)):!0)?e:null}const va=e=>e?fh(e)?wl(e)||e.proxy:va(e.parent):null,Eo=ot(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>va(e.parent),$root:e=>va(e.root),$emit:e=>e.emit,$options:e=>gl(e),$forceUpdate:e=>e.f||(e.f=()=>pl(e.update)),$nextTick:e=>e.n||(e.n=ju.bind(e.proxy)),$watch:e=>dy.bind(e)}),qn=(e,t)=>e!==Ve&&!e.__isScriptSetup&&we(e,t),Cy={get({_:e},t){const{ctx:s,setupState:i,data:o,props:r,accessCache:n,type:a,appContext:l}=e;let d;if(t[0]!=="$"){const m=n[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return o[t];case 4:return s[t];case 3:return r[t]}else{if(qn(i,t))return n[t]=1,i[t];if(o!==Ve&&we(o,t))return n[t]=2,o[t];if((d=e.propsOptions[0])&&we(d,t))return n[t]=3,r[t];if(s!==Ve&&we(s,t))return n[t]=4,s[t];_a&&(n[t]=0)}}const p=Eo[t];let u,f;if(p)return t==="$attrs"&&Tt(e,"get",t),p(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(s!==Ve&&we(s,t))return n[t]=4,s[t];if(f=l.config.globalProperties,we(f,t))return f[t]},set({_:e},t,s){const{data:i,setupState:o,ctx:r}=e;return qn(o,t)?(o[t]=s,!0):i!==Ve&&we(i,t)?(i[t]=s,!0):we(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:o,propsOptions:r}},n){let a;return!!s[n]||e!==Ve&&we(e,n)||qn(t,n)||(a=r[0])&&we(a,n)||we(i,n)||we(Eo,n)||we(o.config.globalProperties,n)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:we(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Sc(e){return ae(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let _a=!0;function Ey(e){const t=gl(e),s=e.proxy,i=e.ctx;_a=!1,t.beforeCreate&&Ac(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:n,watch:a,provide:l,inject:d,created:p,beforeMount:u,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:A,beforeDestroy:$,beforeUnmount:k,destroyed:T,unmounted:y,render:x,renderTracked:C,renderTriggered:F,errorCaptured:D,serverPrefetch:L,expose:R,inheritAttrs:ce,components:te,directives:xe,filters:Ee}=t;if(d&&$y(d,i,null),n)for(const se in n){const le=n[se];pe(le)&&(i[se]=le.bind(s))}if(o){const se=o.call(s,s);Ue(se)&&(e.data=ir(se))}if(_a=!0,r)for(const se in r){const le=r[se],ne=pe(le)?le.bind(s,s):pe(le.get)?le.get.bind(s,s):is,Oe=!pe(le)&&pe(le.set)?le.set.bind(s):is,ks=Re({get:ne,set:Oe});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>ks.value,set:qt=>ks.value=qt})}if(a)for(const se in a)ih(a[se],i,s,se);if(l){const se=pe(l)?l.call(s):l;Reflect.ownKeys(se).forEach(le=>{Oy(le,se[le])})}p&&Ac(p,e,"c");function q(se,le){ae(le)?le.forEach(ne=>se(ne.bind(s))):le&&se(le.bind(s))}if(q(fy,u),q(fl,f),q(my,m),q(gy,g),q(uy,v),q(hy,A),q(wy,D),q(_y,C),q(vy,F),q(by,k),q(ml,y),q(yy,L),ae(R))if(R.length){const se=e.exposed||(e.exposed={});R.forEach(le=>{Object.defineProperty(se,le,{get:()=>s[le],set:ne=>s[le]=ne})})}else e.exposed||(e.exposed={});x&&e.render===is&&(e.render=x),ce!=null&&(e.inheritAttrs=ce),te&&(e.components=te),xe&&(e.directives=xe)}function $y(e,t,s=is){ae(e)&&(e=wa(e));for(const i in e){const o=e[i];let r;Ue(o)?"default"in o?r=it(o.from||i,o.default,!0):r=it(o.from||i):r=it(o),Be(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:n=>r.value=n}):t[i]=r}}function Ac(e,t,s){os(ae(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function ih(e,t,s,i){const o=i.includes(".")?Qu(s,i):()=>s[i];if(Ye(e)){const r=t[e];pe(r)&&pi(o,r)}else if(pe(e))pi(o,e.bind(s));else if(Ue(e))if(ae(e))e.forEach(r=>ih(r,t,s,i));else{const r=pe(e.handler)?e.handler.bind(s):t[e.handler];pe(r)&&pi(o,r,e)}}function gl(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:n}}=e.appContext,a=r.get(t);let l;return a?l=a:!o.length&&!s&&!i?l=t:(l={},o.length&&o.forEach(d=>jr(l,d,n,!0)),jr(l,t,n)),Ue(t)&&r.set(t,l),l}function jr(e,t,s,i=!1){const{mixins:o,extends:r}=t;r&&jr(e,r,s,!0),o&&o.forEach(n=>jr(e,n,s,!0));for(const n in t)if(!(i&&n==="expose")){const a=Sy[n]||s&&s[n];e[n]=a?a(e[n],t[n]):t[n]}return e}const Sy={data:Tc,props:Ic,emits:Ic,methods:bo,computed:bo,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:bo,directives:bo,watch:Ty,provide:Tc,inject:Ay};function Tc(e,t){return t?e?function(){return ot(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function Ay(e,t){return bo(wa(e),wa(t))}function wa(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function vt(e,t){return e?[...new Set([].concat(e,t))]:t}function bo(e,t){return e?ot(Object.create(null),e,t):t}function Ic(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:ot(Object.create(null),Sc(e),Sc(t??{})):t}function Ty(e,t){if(!e)return t;if(!t)return e;const s=ot(Object.create(null),e);for(const i in t)s[i]=vt(e[i],t[i]);return s}function oh(){return{app:null,config:{isNativeTag:t0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iy=0;function zy(e,t){return function(i,o=null){pe(i)||(i=ot({},i)),o!=null&&!Ue(o)&&(o=null);const r=oh(),n=new Set;let a=!1;const l=r.app={_uid:Iy++,_component:i,_props:o,_container:null,_context:r,_instance:null,version:sv,get config(){return r.config},set config(d){},use(d,...p){return n.has(d)||(d&&pe(d.install)?(n.add(d),d.install(l,...p)):pe(d)&&(n.add(d),d(l,...p))),l},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),l},component(d,p){return p?(r.components[d]=p,l):r.components[d]},directive(d,p){return p?(r.directives[d]=p,l):r.directives[d]},mount(d,p,u){if(!a){const f=Pe(i,o);return f.appContext=r,p&&t?t(f,d):e(f,d,u),a=!0,l._container=d,d.__vue_app__=l,wl(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(d,p){return r.provides[d]=p,l},runWithContext(d){Fo=l;try{return d()}finally{Fo=null}}};return l}}let Fo=null;function Oy(e,t){if(tt){let s=tt.provides;const i=tt.parent&&tt.parent.provides;i===s&&(s=tt.provides=Object.create(i)),s[e]=t}}function it(e,t,s=!1){const i=tt||mt;if(i||Fo){const o=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Fo._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return s&&pe(t)?t.call(i&&i.proxy):t}}function Ly(){return!!(tt||mt||Fo)}function My(e,t,s,i=!1){const o={},r={};Nr(r,vn,1),e.propsDefaults=Object.create(null),rh(e,t,o,r);for(const n in e.propsOptions[0])n in o||(o[n]=void 0);s?e.props=i?o:j0(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Ry(e,t,s,i){const{props:o,attrs:r,vnode:{patchFlag:n}}=e,a=be(o),[l]=e.propsOptions;let d=!1;if((i||n>0)&&!(n&16)){if(n&8){const p=e.vnode.dynamicProps;for(let u=0;u<p.length;u++){let f=p[u];if(bn(e.emitsOptions,f))continue;const m=t[f];if(l)if(we(r,f))m!==r[f]&&(r[f]=m,d=!0);else{const g=Hi(f);o[g]=xa(l,a,g,m,e,!1)}else m!==r[f]&&(r[f]=m,d=!0)}}}else{rh(e,t,o,r)&&(d=!0);let p;for(const u in a)(!t||!we(t,u)&&((p=Zi(u))===u||!we(t,p)))&&(l?s&&(s[u]!==void 0||s[p]!==void 0)&&(o[u]=xa(l,a,u,void 0,e,!0)):delete o[u]);if(r!==a)for(const u in r)(!t||!we(t,u))&&(delete r[u],d=!0)}d&&Is(e,"set","$attrs")}function rh(e,t,s,i){const[o,r]=e.propsOptions;let n=!1,a;if(t)for(let l in t){if(Ir(l))continue;const d=t[l];let p;o&&we(o,p=Hi(l))?!r||!r.includes(p)?s[p]=d:(a||(a={}))[p]=d:bn(e.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,n=!0)}if(r){const l=be(s),d=a||Ve;for(let p=0;p<r.length;p++){const u=r[p];s[u]=xa(o,l,u,d[u],e,!we(d,u))}}return n}function xa(e,t,s,i,o,r){const n=e[s];if(n!=null){const a=we(n,"default");if(a&&i===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&pe(l)){const{propsDefaults:d}=o;s in d?i=d[s]:(qi(o),i=d[s]=l.call(null,t),fi())}else i=l}n[0]&&(r&&!a?i=!1:n[1]&&(i===""||i===Zi(s))&&(i=!0))}return i}function nh(e,t,s=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const r=e.props,n={},a=[];let l=!1;if(!pe(e)){const p=u=>{l=!0;const[f,m]=nh(u,t,!0);ot(n,f),m&&a.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!r&&!l)return Ue(e)&&i.set(e,Pi),Pi;if(ae(r))for(let p=0;p<r.length;p++){const u=Hi(r[p]);zc(u)&&(n[u]=Ve)}else if(r)for(const p in r){const u=Hi(p);if(zc(u)){const f=r[p],m=n[u]=ae(f)||pe(f)?{type:f}:ot({},f);if(m){const g=Mc(Boolean,m.type),v=Mc(String,m.type);m[0]=g>-1,m[1]=v<0||g<v,(g>-1||we(m,"default"))&&a.push(u)}}}const d=[n,a];return Ue(e)&&i.set(e,d),d}function zc(e){return e[0]!=="$"}function Oc(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Lc(e,t){return Oc(e)===Oc(t)}function Mc(e,t){return ae(t)?t.findIndex(s=>Lc(s,e)):pe(t)&&Lc(t,e)?0:-1}const ah=e=>e[0]==="_"||e==="$stable",bl=e=>ae(e)?e.map(fs):[fs(e)],Dy=(e,t,s)=>{if(t._n)return t;const i=Xu((...o)=>bl(t(...o)),s);return i._c=!1,i},lh=(e,t,s)=>{const i=e._ctx;for(const o in e){if(ah(o))continue;const r=e[o];if(pe(r))t[o]=Dy(o,r,i);else if(r!=null){const n=bl(r);t[o]=()=>n}}},ch=(e,t)=>{const s=bl(t);e.slots.default=()=>s},Py=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=be(t),Nr(t,"_",s)):lh(t,e.slots={})}else e.slots={},t&&ch(e,t);Nr(e.slots,vn,1)},Vy=(e,t,s)=>{const{vnode:i,slots:o}=e;let r=!0,n=Ve;if(i.shapeFlag&32){const a=t._;a?s&&a===1?r=!1:(ot(o,t),!s&&a===1&&delete o._):(r=!t.$stable,lh(t,o)),n=t}else t&&(ch(e,t),n={default:1});if(r)for(const a in o)!ah(a)&&!(a in n)&&delete o[a]};function ka(e,t,s,i,o=!1){if(ae(e)){e.forEach((f,m)=>ka(f,t&&(ae(t)?t[m]:t),s,i,o));return}if(Co(i)&&!o)return;const r=i.shapeFlag&4?wl(i.component)||i.component.proxy:i.el,n=o?null:r,{i:a,r:l}=e,d=t&&t.r,p=a.refs===Ve?a.refs={}:a.refs,u=a.setupState;if(d!=null&&d!==l&&(Ye(d)?(p[d]=null,we(u,d)&&(u[d]=null)):Be(d)&&(d.value=null)),pe(l))js(l,a,12,[n,p]);else{const f=Ye(l),m=Be(l);if(f||m){const g=()=>{if(e.f){const v=f?we(u,l)?u[l]:p[l]:l.value;o?ae(v)&&el(v,r):ae(v)?v.includes(r)||v.push(r):f?(p[l]=[r],we(u,l)&&(u[l]=p[l])):(l.value=[r],e.k&&(p[e.k]=l.value))}else f?(p[l]=n,we(u,l)&&(u[l]=n)):m&&(l.value=n,e.k&&(p[e.k]=n))};n?(g.id=-1,$t(g,s)):g()}}}const $t=cy;function Fy(e){return Ny(e)}function Ny(e,t){const s=fa();s.__VUE__=!0;const{insert:i,remove:o,patchProp:r,createElement:n,createText:a,createComment:l,setText:d,setElementText:p,parentNode:u,nextSibling:f,setScopeId:m=is,insertStaticContent:g}=e,v=(b,_,S,z=null,I=null,V=null,W=!1,P=null,B=!!_.dynamicChildren)=>{if(b===_)return;b&&!po(b,_)&&(z=Ei(b),qt(b,I,V,!0),b=null),_.patchFlag===-2&&(B=!1,_.dynamicChildren=null);const{type:M,ref:K,shapeFlag:w}=_;switch(M){case or:A(b,_,S,z);break;case Xs:$(b,_,S,z);break;case Gn:b==null&&k(_,S,z,W);break;case _t:te(b,_,S,z,I,V,W,P,B);break;default:w&1?x(b,_,S,z,I,V,W,P,B):w&6?xe(b,_,S,z,I,V,W,P,B):(w&64||w&128)&&M.process(b,_,S,z,I,V,W,P,B,Rs)}K!=null&&I&&ka(K,b&&b.ref,V,_||b,!_)},A=(b,_,S,z)=>{if(b==null)i(_.el=a(_.children),S,z);else{const I=_.el=b.el;_.children!==b.children&&d(I,_.children)}},$=(b,_,S,z)=>{b==null?i(_.el=l(_.children||""),S,z):_.el=b.el},k=(b,_,S,z)=>{[b.el,b.anchor]=g(b.children,_,S,z,b.el,b.anchor)},T=({el:b,anchor:_},S,z)=>{let I;for(;b&&b!==_;)I=f(b),i(b,S,z),b=I;i(_,S,z)},y=({el:b,anchor:_})=>{let S;for(;b&&b!==_;)S=f(b),o(b),b=S;o(_)},x=(b,_,S,z,I,V,W,P,B)=>{W=W||_.type==="svg",b==null?C(_,S,z,I,V,W,P,B):L(b,_,I,V,W,P,B)},C=(b,_,S,z,I,V,W,P)=>{let B,M;const{type:K,props:w,shapeFlag:E,transition:Q,dirs:ee}=b;if(B=b.el=n(b.type,V,w&&w.is,w),E&8?p(B,b.children):E&16&&D(b.children,B,null,z,I,V&&K!=="foreignObject",W,P),ee&&ii(b,null,z,"created"),F(B,b,b.scopeId,W,z),w){for(const _e in w)_e!=="value"&&!Ir(_e)&&r(B,_e,null,w[_e],V,b.children,z,I,Qt);"value"in w&&r(B,"value",null,w.value),(M=w.onVnodeBeforeMount)&&hs(M,z,b)}ee&&ii(b,null,z,"beforeMount");const $e=(!I||I&&!I.pendingBranch)&&Q&&!Q.persisted;$e&&Q.beforeEnter(B),i(B,_,S),((M=w&&w.onVnodeMounted)||$e||ee)&&$t(()=>{M&&hs(M,z,b),$e&&Q.enter(B),ee&&ii(b,null,z,"mounted")},I)},F=(b,_,S,z,I)=>{if(S&&m(b,S),z)for(let V=0;V<z.length;V++)m(b,z[V]);if(I){let V=I.subTree;if(_===V){const W=I.vnode;F(b,W,W.scopeId,W.slotScopeIds,I.parent)}}},D=(b,_,S,z,I,V,W,P,B=0)=>{for(let M=B;M<b.length;M++){const K=b[M]=P?Ns(b[M]):fs(b[M]);v(null,K,_,S,z,I,V,W,P)}},L=(b,_,S,z,I,V,W)=>{const P=_.el=b.el;let{patchFlag:B,dynamicChildren:M,dirs:K}=_;B|=b.patchFlag&16;const w=b.props||Ve,E=_.props||Ve;let Q;S&&oi(S,!1),(Q=E.onVnodeBeforeUpdate)&&hs(Q,S,_,b),K&&ii(_,b,S,"beforeUpdate"),S&&oi(S,!0);const ee=I&&_.type!=="foreignObject";if(M?R(b.dynamicChildren,M,P,S,z,ee,V):W||le(b,_,P,null,S,z,ee,V,!1),B>0){if(B&16)ce(P,_,w,E,S,z,I);else if(B&2&&w.class!==E.class&&r(P,"class",null,E.class,I),B&4&&r(P,"style",w.style,E.style,I),B&8){const $e=_.dynamicProps;for(let _e=0;_e<$e.length;_e++){const Me=$e[_e],Ot=w[Me],ti=E[Me];(ti!==Ot||Me==="value")&&r(P,Me,Ot,ti,I,b.children,S,z,Qt)}}B&1&&b.children!==_.children&&p(P,_.children)}else!W&&M==null&&ce(P,_,w,E,S,z,I);((Q=E.onVnodeUpdated)||K)&&$t(()=>{Q&&hs(Q,S,_,b),K&&ii(_,b,S,"updated")},z)},R=(b,_,S,z,I,V,W)=>{for(let P=0;P<_.length;P++){const B=b[P],M=_[P],K=B.el&&(B.type===_t||!po(B,M)||B.shapeFlag&70)?u(B.el):S;v(B,M,K,null,z,I,V,W,!0)}},ce=(b,_,S,z,I,V,W)=>{if(S!==z){if(S!==Ve)for(const P in S)!Ir(P)&&!(P in z)&&r(b,P,S[P],null,W,_.children,I,V,Qt);for(const P in z){if(Ir(P))continue;const B=z[P],M=S[P];B!==M&&P!=="value"&&r(b,P,M,B,W,_.children,I,V,Qt)}"value"in z&&r(b,"value",S.value,z.value)}},te=(b,_,S,z,I,V,W,P,B)=>{const M=_.el=b?b.el:a(""),K=_.anchor=b?b.anchor:a("");let{patchFlag:w,dynamicChildren:E,slotScopeIds:Q}=_;Q&&(P=P?P.concat(Q):Q),b==null?(i(M,S,z),i(K,S,z),D(_.children,S,K,I,V,W,P,B)):w>0&&w&64&&E&&b.dynamicChildren?(R(b.dynamicChildren,E,S,I,V,W,P),(_.key!=null||I&&_===I.subTree)&&dh(b,_,!0)):le(b,_,S,K,I,V,W,P,B)},xe=(b,_,S,z,I,V,W,P,B)=>{_.slotScopeIds=P,b==null?_.shapeFlag&512?I.ctx.activate(_,S,z,W,B):Ee(_,S,z,I,V,W,B):fe(b,_,B)},Ee=(b,_,S,z,I,V,W)=>{const P=b.component=Gy(b,z,I);if(Zu(b)&&(P.ctx.renderer=Rs),Yy(P),P.asyncDep){if(I&&I.registerDep(P,q),!b.el){const B=P.subTree=Pe(Xs);$(null,B,_,S)}return}q(P,b,_,S,I,V,W)},fe=(b,_,S)=>{const z=_.component=b.component;if(ny(b,_,S))if(z.asyncDep&&!z.asyncResolved){se(z,_,S);return}else z.next=_,ey(z.update),z.update();else _.el=b.el,z.vnode=_},q=(b,_,S,z,I,V,W)=>{const P=()=>{if(b.isMounted){let{next:K,bu:w,u:E,parent:Q,vnode:ee}=b,$e=K,_e;oi(b,!1),K?(K.el=ee.el,se(b,K,W)):K=ee,w&&Wn(w),(_e=K.props&&K.props.onVnodeBeforeUpdate)&&hs(_e,Q,K,ee),oi(b,!0);const Me=Kn(b),Ot=b.subTree;b.subTree=Me,v(Ot,Me,u(Ot.el),Ei(Ot),b,I,V),K.el=Me.el,$e===null&&ay(b,Me.el),E&&$t(E,I),(_e=K.props&&K.props.onVnodeUpdated)&&$t(()=>hs(_e,Q,K,ee),I)}else{let K;const{el:w,props:E}=_,{bm:Q,m:ee,parent:$e}=b,_e=Co(_);if(oi(b,!1),Q&&Wn(Q),!_e&&(K=E&&E.onVnodeBeforeMount)&&hs(K,$e,_),oi(b,!0),w&&oo){const Me=()=>{b.subTree=Kn(b),oo(w,b.subTree,b,I,null)};_e?_.type.__asyncLoader().then(()=>!b.isUnmounted&&Me()):Me()}else{const Me=b.subTree=Kn(b);v(null,Me,S,z,b,I,V),_.el=Me.el}if(ee&&$t(ee,I),!_e&&(K=E&&E.onVnodeMounted)){const Me=_;$t(()=>hs(K,$e,Me),I)}(_.shapeFlag&256||$e&&Co($e.vnode)&&$e.vnode.shapeFlag&256)&&b.a&&$t(b.a,I),b.isMounted=!0,_=S=z=null}},B=b.effect=new rl(P,()=>pl(M),b.scope),M=b.update=()=>B.run();M.id=b.uid,oi(b,!0),M()},se=(b,_,S)=>{_.component=b;const z=b.vnode.props;b.vnode=_,b.next=null,Ry(b,_.props,z,S),Vy(b,_.children,S),eo(),Ec(),to()},le=(b,_,S,z,I,V,W,P,B=!1)=>{const M=b&&b.children,K=b?b.shapeFlag:0,w=_.children,{patchFlag:E,shapeFlag:Q}=_;if(E>0){if(E&128){Oe(M,w,S,z,I,V,W,P,B);return}else if(E&256){ne(M,w,S,z,I,V,W,P,B);return}}Q&8?(K&16&&Qt(M,I,V),w!==M&&p(S,w)):K&16?Q&16?Oe(M,w,S,z,I,V,W,P,B):Qt(M,I,V,!0):(K&8&&p(S,""),Q&16&&D(w,S,z,I,V,W,P,B))},ne=(b,_,S,z,I,V,W,P,B)=>{b=b||Pi,_=_||Pi;const M=b.length,K=_.length,w=Math.min(M,K);let E;for(E=0;E<w;E++){const Q=_[E]=B?Ns(_[E]):fs(_[E]);v(b[E],Q,S,null,I,V,W,P,B)}M>K?Qt(b,I,V,!0,!1,w):D(_,S,z,I,V,W,P,B,w)},Oe=(b,_,S,z,I,V,W,P,B)=>{let M=0;const K=_.length;let w=b.length-1,E=K-1;for(;M<=w&&M<=E;){const Q=b[M],ee=_[M]=B?Ns(_[M]):fs(_[M]);if(po(Q,ee))v(Q,ee,S,null,I,V,W,P,B);else break;M++}for(;M<=w&&M<=E;){const Q=b[w],ee=_[E]=B?Ns(_[E]):fs(_[E]);if(po(Q,ee))v(Q,ee,S,null,I,V,W,P,B);else break;w--,E--}if(M>w){if(M<=E){const Q=E+1,ee=Q<K?_[Q].el:z;for(;M<=E;)v(null,_[M]=B?Ns(_[M]):fs(_[M]),S,ee,I,V,W,P,B),M++}}else if(M>E)for(;M<=w;)qt(b[M],I,V,!0),M++;else{const Q=M,ee=M,$e=new Map;for(M=ee;M<=E;M++){const Lt=_[M]=B?Ns(_[M]):fs(_[M]);Lt.key!=null&&$e.set(Lt.key,M)}let _e,Me=0;const Ot=E-ee+1;let ti=!1,Rl=0;const ro=new Array(Ot);for(M=0;M<Ot;M++)ro[M]=0;for(M=Q;M<=w;M++){const Lt=b[M];if(Me>=Ot){qt(Lt,I,V,!0);continue}let us;if(Lt.key!=null)us=$e.get(Lt.key);else for(_e=ee;_e<=E;_e++)if(ro[_e-ee]===0&&po(Lt,_[_e])){us=_e;break}us===void 0?qt(Lt,I,V,!0):(ro[us-ee]=M+1,us>=Rl?Rl=us:ti=!0,v(Lt,_[us],S,null,I,V,W,P,B),Me++)}const Dl=ti?Uy(ro):Pi;for(_e=Dl.length-1,M=Ot-1;M>=0;M--){const Lt=ee+M,us=_[Lt],Pl=Lt+1<K?_[Lt+1].el:z;ro[M]===0?v(null,us,S,Pl,I,V,W,P,B):ti&&(_e<0||M!==Dl[_e]?ks(us,S,Pl,2):_e--)}}},ks=(b,_,S,z,I=null)=>{const{el:V,type:W,transition:P,children:B,shapeFlag:M}=b;if(M&6){ks(b.component.subTree,_,S,z);return}if(M&128){b.suspense.move(_,S,z);return}if(M&64){W.move(b,_,S,Rs);return}if(W===_t){i(V,_,S);for(let w=0;w<B.length;w++)ks(B[w],_,S,z);i(b.anchor,_,S);return}if(W===Gn){T(b,_,S);return}if(z!==2&&M&1&&P)if(z===0)P.beforeEnter(V),i(V,_,S),$t(()=>P.enter(V),I);else{const{leave:w,delayLeave:E,afterLeave:Q}=P,ee=()=>i(V,_,S),$e=()=>{w(V,()=>{ee(),Q&&Q()})};E?E(V,ee,$e):$e()}else i(V,_,S)},qt=(b,_,S,z=!1,I=!1)=>{const{type:V,props:W,ref:P,children:B,dynamicChildren:M,shapeFlag:K,patchFlag:w,dirs:E}=b;if(P!=null&&ka(P,null,S,b,!0),K&256){_.ctx.deactivate(b);return}const Q=K&1&&E,ee=!Co(b);let $e;if(ee&&($e=W&&W.onVnodeBeforeUnmount)&&hs($e,_,b),K&6)Sn(b.component,S,z);else{if(K&128){b.suspense.unmount(S,z);return}Q&&ii(b,null,_,"beforeUnmount"),K&64?b.type.remove(b,_,S,I,Rs,z):M&&(V!==_t||w>0&&w&64)?Qt(M,_,S,!1,!0):(V===_t&&w&384||!I&&K&16)&&Qt(B,_,S),z&&rr(b)}(ee&&($e=W&&W.onVnodeUnmounted)||Q)&&$t(()=>{$e&&hs($e,_,b),Q&&ii(b,null,_,"unmounted")},S)},rr=b=>{const{type:_,el:S,anchor:z,transition:I}=b;if(_===_t){Ml(S,z);return}if(_===Gn){y(b);return}const V=()=>{o(S),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(b.shapeFlag&1&&I&&!I.persisted){const{leave:W,delayLeave:P}=I,B=()=>W(S,V);P?P(b.el,V,B):B()}else V()},Ml=(b,_)=>{let S;for(;b!==_;)S=f(b),o(b),b=S;o(_)},Sn=(b,_,S)=>{const{bum:z,scope:I,update:V,subTree:W,um:P}=b;z&&Wn(z),I.stop(),V&&(V.active=!1,qt(W,b,_,S)),P&&$t(P,_),$t(()=>{b.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Qt=(b,_,S,z=!1,I=!1,V=0)=>{for(let W=V;W<b.length;W++)qt(b[W],_,S,z,I)},Ei=b=>b.shapeFlag&6?Ei(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),nr=(b,_,S)=>{b==null?_._vnode&&qt(_._vnode,null,null,!0):v(_._vnode||null,b,_,null,null,null,S),Ec(),Ku(),_._vnode=b},Rs={p:v,um:qt,m:ks,r:rr,mt:Ee,mc:D,pc:le,pbc:R,n:Ei,o:e};let io,oo;return t&&([io,oo]=t(Rs)),{render:nr,hydrate:io,createApp:zy(nr,io)}}function oi({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function dh(e,t,s=!1){const i=e.children,o=t.children;if(ae(i)&&ae(o))for(let r=0;r<i.length;r++){const n=i[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Ns(o[r]),a.el=n.el),s||dh(n,a)),a.type===or&&(a.el=n.el)}}function Uy(e){const t=e.slice(),s=[0];let i,o,r,n,a;const l=e.length;for(i=0;i<l;i++){const d=e[i];if(d!==0){if(o=s[s.length-1],e[o]<d){t[i]=o,s.push(i);continue}for(r=0,n=s.length-1;r<n;)a=r+n>>1,e[s[a]]<d?r=a+1:n=a;d<e[s[r]]&&(r>0&&(t[i]=s[r-1]),s[r]=i)}}for(r=s.length,n=s[r-1];r-- >0;)s[r]=n,n=t[n];return s}const By=e=>e.__isTeleport,_t=Symbol.for("v-fgt"),or=Symbol.for("v-txt"),Xs=Symbol.for("v-cmt"),Gn=Symbol.for("v-stc"),$o=[];let ss=null;function de(e=!1){$o.push(ss=e?null:[])}function Hy(){$o.pop(),ss=$o[$o.length-1]||null}let No=1;function Wr(e){No+=e}function uh(e){return e.dynamicChildren=No>0?ss||Pi:null,Hy(),No>0&&ss&&ss.push(e),e}function me(e,t,s,i,o,r){return uh(N(e,t,s,i,o,r,!0))}function Ss(e,t,s,i,o){return uh(Pe(e,t,s,i,o,!0))}function Kr(e){return e?e.__v_isVNode===!0:!1}function po(e,t){return e.type===t.type&&e.key===t.key}const vn="__vInternal",hh=({key:e})=>e??null,zr=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Ye(e)||Be(e)||pe(e)?{i:mt,r:e,k:t,f:!!s}:e:null);function N(e,t=null,s=null,i=0,o=null,r=e===_t?0:1,n=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hh(t),ref:t&&zr(t),scopeId:Yu,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:mt};return a?(yl(l,s),r&128&&e.normalize(l)):s&&(l.shapeFlag|=Ye(s)?8:16),No>0&&!n&&ss&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ss.push(l),l}const Pe=jy;function jy(e,t=null,s=null,i=0,o=null,r=!1){if((!e||e===xy)&&(e=Xs),Kr(e)){const a=Ki(e,t,!0);return s&&yl(a,s),No>0&&!r&&ss&&(a.shapeFlag&6?ss[ss.indexOf(e)]=a:ss.push(a)),a.patchFlag|=-2,a}if(Zy(e)&&(e=e.__vccOpts),t){t=ph(t);let{class:a,style:l}=t;a&&!Ye(a)&&(t.class=ji(a)),Ue(l)&&(dl(l)&&!ae(l)&&(l=ot({},l)),t.style=pn(l))}const n=Ye(e)?1:ly(e)?128:By(e)?64:Ue(e)?4:pe(e)?2:0;return N(e,t,s,i,o,n,r,!0)}function ph(e){return e?dl(e)||vn in e?ot({},e):e:null}function Ki(e,t,s=!1){const{props:i,ref:o,patchFlag:r,children:n}=e,a=t?Wy(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&hh(a),ref:t&&t.ref?s&&o?ae(o)?o.concat(zr(t)):[o,zr(t)]:zr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_t?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ki(e.ssContent),ssFallback:e.ssFallback&&Ki(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function _n(e=" ",t=0){return Pe(or,null,e,t)}function At(e="",t=!1){return t?(de(),Ss(Xs,null,e)):Pe(Xs,null,e)}function fs(e){return e==null||typeof e=="boolean"?Pe(Xs):ae(e)?Pe(_t,null,e.slice()):typeof e=="object"?Ns(e):Pe(or,null,String(e))}function Ns(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ki(e)}function yl(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(ae(t))s=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),yl(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=t._;!o&&!(vn in t)?t._ctx=mt:o===3&&mt&&(mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:mt},s=32):(t=String(t),i&64?(s=16,t=[_n(t)]):s=8);e.children=t,e.shapeFlag|=s}function Wy(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=ji([t.class,i.class]));else if(o==="style")t.style=pn([t.style,i.style]);else if(dn(o)){const r=t[o],n=i[o];n&&r!==n&&!(ae(r)&&r.includes(n))&&(t[o]=r?[].concat(r,n):n)}else o!==""&&(t[o]=i[o])}return t}function hs(e,t,s,i=null){os(e,t,7,[s,i])}const Ky=oh();let qy=0;function Gy(e,t,s){const i=e.type,o=(t?t.appContext:e.appContext)||Ky,r={uid:qy++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new $u(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nh(i,o),emitsOptions:Gu(i,o),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:i.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=iy.bind(null,r),e.ce&&e.ce(r),r}let tt=null;const vl=()=>tt||mt;let _l,Si,Rc="__VUE_INSTANCE_SETTERS__";(Si=fa()[Rc])||(Si=fa()[Rc]=[]),Si.push(e=>tt=e),_l=e=>{Si.length>1?Si.forEach(t=>t(e)):Si[0](e)};const qi=e=>{_l(e),e.scope.on()},fi=()=>{tt&&tt.scope.off(),_l(null)};function fh(e){return e.vnode.shapeFlag&4}let Uo=!1;function Yy(e,t=!1){Uo=t;const{props:s,children:i}=e.vnode,o=fh(e);My(e,s,o,t),Py(e,i);const r=o?Xy(e,t):void 0;return Uo=!1,r}function Xy(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=mn(new Proxy(e.ctx,Cy));const{setup:i}=s;if(i){const o=e.setupContext=i.length>1?Qy(e):null;qi(e),eo();const r=js(i,e,0,[e.props,o]);if(to(),fi(),_u(r)){if(r.then(fi,fi),t)return r.then(n=>{Dc(e,n,t)}).catch(n=>{gn(n,e,0)});e.asyncDep=r}else Dc(e,r,t)}else mh(e,t)}function Dc(e,t,s){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ue(t)&&(e.setupState=Uu(t)),mh(e,s)}let Pc;function mh(e,t,s){const i=e.type;if(!e.render){if(!t&&Pc&&!i.render){const o=i.template||gl(e).template;if(o){const{isCustomElement:r,compilerOptions:n}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,d=ot(ot({isCustomElement:r,delimiters:a},n),l);i.render=Pc(o,d)}}e.render=i.render||is}qi(e),eo(),Ey(e),to(),fi()}function Jy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,s){return Tt(e,"get","$attrs"),t[s]}}))}function Qy(e){const t=s=>{e.exposed=s||{}};return{get attrs(){return Jy(e)},slots:e.slots,emit:e.emit,expose:t}}function wl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Uu(mn(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Eo)return Eo[s](e)},has(t,s){return s in t||s in Eo}}))}function Zy(e){return pe(e)&&"__vccOpts"in e}const Re=(e,t)=>J0(e,t,Uo);function gh(e,t,s){const i=arguments.length;return i===2?Ue(t)&&!ae(t)?Kr(t)?Pe(e,null,[t]):Pe(e,t):Pe(e,null,t):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&Kr(s)&&(s=[s]),Pe(e,t,s))}const ev=Symbol.for("v-scx"),tv=()=>it(ev),sv="3.3.4",iv="http://www.w3.org/2000/svg",li=typeof document<"u"?document:null,Vc=li&&li.createElement("template"),ov={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const o=t?li.createElementNS(iv,e):li.createElement(e,s?{is:s}:void 0);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>li.createTextNode(e),createComment:e=>li.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>li.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,i,o,r){const n=s?s.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),s),!(o===r||!(o=o.nextSibling)););else{Vc.innerHTML=i?`<svg>${e}</svg>`:e;const a=Vc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,s)}return[n?n.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function rv(e,t,s){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function nv(e,t,s){const i=e.style,o=Ye(s);if(s&&!o){if(t&&!Ye(t))for(const r in t)s[r]==null&&Ca(i,r,"");for(const r in s)Ca(i,r,s[r])}else{const r=i.display;o?t!==s&&(i.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Fc=/\s*!important$/;function Ca(e,t,s){if(ae(s))s.forEach(i=>Ca(e,t,i));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const i=av(e,t);Fc.test(s)?e.setProperty(Zi(i),s.replace(Fc,""),"important"):e[i]=s}}const Nc=["Webkit","Moz","ms"],Yn={};function av(e,t){const s=Yn[t];if(s)return s;let i=Hi(t);if(i!=="filter"&&i in e)return Yn[t]=i;i=ku(i);for(let o=0;o<Nc.length;o++){const r=Nc[o]+i;if(r in e)return Yn[t]=r}return t}const Uc="http://www.w3.org/1999/xlink";function lv(e,t,s,i,o){if(i&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Uc,t.slice(6,t.length)):e.setAttributeNS(Uc,t,s);else{const r=f0(t);s==null||r&&!Cu(s)?e.removeAttribute(t):e.setAttribute(t,r?"":s)}}function cv(e,t,s,i,o,r,n){if(t==="innerHTML"||t==="textContent"){i&&n(i,o,r),e[t]=s??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=s;const d=a==="OPTION"?e.getAttribute("value"):e.value,p=s??"";d!==p&&(e.value=p),s==null&&e.removeAttribute(t);return}let l=!1;if(s===""||s==null){const d=typeof e[t];d==="boolean"?s=Cu(s):s==null&&d==="string"?(s="",l=!0):d==="number"&&(s=0,l=!0)}try{e[t]=s}catch{}l&&e.removeAttribute(t)}function dv(e,t,s,i){e.addEventListener(t,s,i)}function uv(e,t,s,i){e.removeEventListener(t,s,i)}function hv(e,t,s,i,o=null){const r=e._vei||(e._vei={}),n=r[t];if(i&&n)n.value=i;else{const[a,l]=pv(t);if(i){const d=r[t]=gv(i,o);dv(e,a,d,l)}else n&&(uv(e,a,n,l),r[t]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function pv(e){let t;if(Bc.test(e)){t={};let i;for(;i=e.match(Bc);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zi(e.slice(2)),t]}let Xn=0;const fv=Promise.resolve(),mv=()=>Xn||(fv.then(()=>Xn=0),Xn=Date.now());function gv(e,t){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;os(bv(i,s.value),t,5,[i])};return s.value=e,s.attached=mv(),s}function bv(e,t){if(ae(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(i=>o=>!o._stopped&&i&&i(o))}else return t}const Hc=/^on[a-z]/,yv=(e,t,s,i,o=!1,r,n,a,l)=>{t==="class"?rv(e,i,o):t==="style"?nv(e,s,i):dn(t)?Za(t)||hv(e,t,s,i,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vv(e,t,i,o))?cv(e,t,i,r,n,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),lv(e,t,i,o))};function vv(e,t,s,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Hc.test(t)&&pe(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Hc.test(t)&&Ye(s)?!1:t in e}const _v=["ctrl","shift","alt","meta"],wv={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>_v.some(s=>e[`${s}Key`]&&!t.includes(s))},Pt=(e,t)=>(s,...i)=>{for(let o=0;o<t.length;o++){const r=wv[t[o]];if(r&&r(s,t))return}return e(s,...i)},xv=ot({patchProp:yv},ov);let jc;function kv(){return jc||(jc=Fy(xv))}const bh=(...e)=>{const t=kv().createApp(...e),{mount:s}=t;return t.mount=i=>{const o=Cv(i);if(!o)return;const r=t._component;!pe(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const n=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),n},t};function Cv(e){return Ye(e)?document.querySelector(e):e}function yh(e){const t=s=>Array.isArray(s)?s.map(i=>t(i)):Be(s)||As(s)||dl(s)?t(be(s)):s&&typeof s=="object"?Object.keys(s).reduce((i,o)=>(i[o]=t(s[o]),i),{}):s;return t(e)}const vh="https://attack.mitre.org",Ev=`${vh}/techniques/`,$v=`${vh}/tactics/`,Sv="/host-management/hosts";function Av(e){return e.technique_id?e.technique_id.replace(".","/"):""}function Tv(e){return e?.technique_id?`${Ev}/${Av(e)}`:""}function Iv(e){return e?.tactic_id?`${$v}/${e.tactic_id}`:""}function zv(e){return e?.device?`${Sv}/${e.device?.device_id}?filter=device_id:%27${e.device?.device_id}%27`:""}const _h="mitreAutoRemediationJira",wh="mitreAutoRemediationCreatedIssues";class Ov extends Error{}const Lv="ransomwareNotifyIT",Mv="ransomwareNotifyIR";let vr;async function qr(e,t){try{const i=await e.collection({collection:_h}).read(t);if(i&&"errors"in i&&Array.isArray(i.errors)&&i.errors.length>0){const o=new Ov(i.errors[0].message);throw i.errors[0].code&&(o.code=Number(i.errors[0].code)),o}else return i&&"account"in i&&"project"in i?i:void 0}catch(s){if(s.message?.includes("object not found")||s.code===404)return;throw s}}async function xh(e){if(vr!==void 0)return vr;let t=!0;try{t=typeof(await e.collection({collection:_h}))?.read=="function",t&&(await Promise.all([qr(e,"ransomwareNotifyIT"),qr(e,"ransomwareNotifyIR")]),t=!0)}catch(s){console.error(s),t=!1}finally{vr=t}return vr}const Rv=async function(e){if(await xh(e))return qr(e,Lv)},Dv=async function(e){if(await xh(e))return qr(e,Mv)},kh=function(e,t){return`${e.data?.detectionId}-${t}`.replace(/[^a-zA-Z\d\-_]/gi,"_")},Wc=async function(e,t){const s=kh(e,t);try{const o=await e.collection({collection:wh}).read(s);return o?.account&&o?.project&&o?.issueId?o:void 0}catch(i){if(i.message?.includes("object not found"))return;console.error(i)}},Pv=async function(e,t,s,i,o){if(i.created){const r={account:s.account??"N/A",priority:s.priority??"N/A",issueType:s.issueType??"N/A",summary:s.summary??"",description:s.description??"",project:s.project??"N/A",labels:s.labels??[],issueId:i.id,issueKey:i.key,issueLink:i.api_link,detectionId:t.id,creationDate:new Date().toISOString(),notificationType:o},n=e.collection({collection:wh}),a=kh(e,o);return(await n.write(a,yh(r))).errors?.length?void 0:r}};var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fv="Expected a function",Ch="__lodash_hash_undefined__",Eh=1/0,Nv="[object Function]",Uv="[object GeneratorFunction]",Bv="[object Symbol]",Hv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jv=/^\w*$/,Wv=/^\./,Kv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qv=/[\\^$.*+?()[\]{}|]/g,Gv=/\\(\\)?/g,Yv=/^\[object .+?Constructor\]$/,Xv=typeof _r=="object"&&_r&&_r.Object===Object&&_r,Jv=typeof self=="object"&&self&&self.Object===Object&&self,xl=Xv||Jv||Function("return this")();function Qv(e,t){return e?.[t]}function Zv(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var e_=Array.prototype,t_=Function.prototype,$h=Object.prototype,Jn=xl["__core-js_shared__"],Kc=function(){var e=/[^.]+$/.exec(Jn&&Jn.keys&&Jn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Sh=t_.toString,kl=$h.hasOwnProperty,Ah=$h.toString,s_=RegExp("^"+Sh.call(kl).replace(qv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qc=xl.Symbol,i_=e_.splice,o_=Th(xl,"Map"),Bo=Th(Object,"create"),Gc=qc?qc.prototype:void 0,Yc=Gc?Gc.toString:void 0;function yi(e){var t=-1,s=e?e.length:0;for(this.clear();++t<s;){var i=e[t];this.set(i[0],i[1])}}function r_(){this.__data__=Bo?Bo(null):{}}function n_(e){return this.has(e)&&delete this.__data__[e]}function a_(e){var t=this.__data__;if(Bo){var s=t[e];return s===Ch?void 0:s}return kl.call(t,e)?t[e]:void 0}function l_(e){var t=this.__data__;return Bo?t[e]!==void 0:kl.call(t,e)}function c_(e,t){var s=this.__data__;return s[e]=Bo&&t===void 0?Ch:t,this}yi.prototype.clear=r_;yi.prototype.delete=n_;yi.prototype.get=a_;yi.prototype.has=l_;yi.prototype.set=c_;function so(e){var t=-1,s=e?e.length:0;for(this.clear();++t<s;){var i=e[t];this.set(i[0],i[1])}}function d_(){this.__data__=[]}function u_(e){var t=this.__data__,s=wn(t,e);if(s<0)return!1;var i=t.length-1;return s==i?t.pop():i_.call(t,s,1),!0}function h_(e){var t=this.__data__,s=wn(t,e);return s<0?void 0:t[s][1]}function p_(e){return wn(this.__data__,e)>-1}function f_(e,t){var s=this.__data__,i=wn(s,e);return i<0?s.push([e,t]):s[i][1]=t,this}so.prototype.clear=d_;so.prototype.delete=u_;so.prototype.get=h_;so.prototype.has=p_;so.prototype.set=f_;function Ci(e){var t=-1,s=e?e.length:0;for(this.clear();++t<s;){var i=e[t];this.set(i[0],i[1])}}function m_(){this.__data__={hash:new yi,map:new(o_||so),string:new yi}}function g_(e){return xn(this,e).delete(e)}function b_(e){return xn(this,e).get(e)}function y_(e){return xn(this,e).has(e)}function v_(e,t){return xn(this,e).set(e,t),this}Ci.prototype.clear=m_;Ci.prototype.delete=g_;Ci.prototype.get=b_;Ci.prototype.has=y_;Ci.prototype.set=v_;function wn(e,t){for(var s=e.length;s--;)if(I_(e[s][0],t))return s;return-1}function __(e,t){t=C_(t,e)?[t]:k_(t);for(var s=0,i=t.length;e!=null&&s<i;)e=e[A_(t[s++])];return s&&s==i?e:void 0}function w_(e){if(!zh(e)||$_(e))return!1;var t=z_(e)||Zv(e)?s_:Yv;return t.test(T_(e))}function x_(e){if(typeof e=="string")return e;if(El(e))return Yc?Yc.call(e):"";var t=e+"";return t=="0"&&1/e==-Eh?"-0":t}function k_(e){return Ih(e)?e:S_(e)}function xn(e,t){var s=e.__data__;return E_(t)?s[typeof t=="string"?"string":"hash"]:s.map}function Th(e,t){var s=Qv(e,t);return w_(s)?s:void 0}function C_(e,t){if(Ih(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||El(e)?!0:jv.test(e)||!Hv.test(e)||t!=null&&e in Object(t)}function E_(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function $_(e){return!!Kc&&Kc in e}var S_=Cl(function(e){e=L_(e);var t=[];return Wv.test(e)&&t.push(""),e.replace(Kv,function(s,i,o,r){t.push(o?r.replace(Gv,"$1"):i||s)}),t});function A_(e){if(typeof e=="string"||El(e))return e;var t=e+"";return t=="0"&&1/e==-Eh?"-0":t}function T_(e){if(e!=null){try{return Sh.call(e)}catch{}try{return e+""}catch{}}return""}function Cl(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(Fv);var s=function(){var i=arguments,o=t?t.apply(this,i):i[0],r=s.cache;if(r.has(o))return r.get(o);var n=e.apply(this,i);return s.cache=r.set(o,n),n};return s.cache=new(Cl.Cache||Ci),s}Cl.Cache=Ci;function I_(e,t){return e===t||e!==e&&t!==t}var Ih=Array.isArray;function z_(e){var t=zh(e)?Ah.call(e):"";return t==Nv||t==Uv}function zh(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function O_(e){return!!e&&typeof e=="object"}function El(e){return typeof e=="symbol"||O_(e)&&Ah.call(e)==Bv}function L_(e){return e==null?"":x_(e)}function M_(e,t,s){var i=e==null?void 0:__(e,t);return i===void 0?s:i}var R_=M_;const D_=Vv(R_),$l={AgentId:"agent_id",AgentVersion:"device.agent_version",AllegedFiletype:"alleged_filetype",ClientID:"cid",CmdLine:"cmdline",CreatedTimestamp:"created_timestamp:datetime",DetectionId:"id",DeviceID:"device.device_id",ExternalIP:"device.external_ip",FalconHostLink:"falcon_host_link",FileName:"filename",FilePath:"filepath",Hostname:"device.hostname",Name:"name",Objective:"objective",PatternDisposition:"pattern_disposition_description",PatternDispositionID:"pattern_disposition",Platform:"platform",ProcessEndTime:"process_end_time:datetime",ProcessID:"process_id",ProcessStartTime:"process_start_time:datetime",Product:"product",Scenario:"scenario",Severity:"severity:toSeverityValue",Status:"status",Tactic:"tactic",TacticID:"tactic_id",Tags:"tags:join",Technique:"technique",TechniqueID:"technique_id",TimeStamp:"timestamp:datetime",Type:"type",UpdatedTimestamp:"updated_timestamp:datetime",UserID:"user_id",UserName:"user_name"},Oh=(e,t,s,i,o="---",r="preview")=>{const n=$l[s]??"";let a="";if(n){const[l,d]=n.split(":");try{if(a=D_(i||{},l),d)switch(d){case"join":{a&&(a=[...a].join(", "));break}case"toSeverityValue":{if(a){const p=Number(a);isNaN(p)?a="Unknown":p<=20?a="Informational":p<=40?a="Low":p<=60?a="Medium":p<=80?a="High":p<=101?a="Critical":a="Unknown"}break}case"datetime":if(a){const p=Number(a),u=new Date(isNaN(p)?String(a):Number(a)*1e3);r==="preview"?a=t.d(u,"fullDateTime",e.data?.locale):a=u.toISOString()}break;default:break}}catch(p){console.error(p),console.log(l,a)}}return String(a)||o},Xc=(e,t,s,i)=>(i&&Object.keys($l).forEach(o=>{const r=["${",o,"}"].join(""),n=Oh(e,t,o,i);s=s.replaceAll(r,n)}),s),P_="Ransomware ${Tactic} via ${Technique} detected on ${Hostname}",Jc={default:"bb5c382c865347fd8ce08749cc2f64fc"},Lh={},V_=async e=>Object.entries(Jc).find(([t,s])=>e.includes(t))?.[1]??Jc.default,F_=async function(e,t){const s=await V_(t);return((await e.api.plugins.getEntitiesConfigsV1({appId:s})).resources??[])?.filter(o=>o.config?.permissions.includes("read:jira-work")&&o.config?.permissions.includes("write:jira-work")&&o.config?.id).map(o=>({name:o.config.name,id:o.config.id}))},N_=async function(e,t){const s=await e.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_projects_deprecated",config_id:t,request:{}}]});return e.api.plugins.postEntitiesExecuteV1,(s.resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(o=>({id:o.id,name:o.name,isPrivate:o.isPrivate,href:o.self})))},U_=async function(e,t){return((await e.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_labels",config_id:t,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.values?.length??0)>0).flatMap(i=>i.response_body.values).map(i=>{const o=i.replace(/ /g,"_");return Lh[o]=i,o})},Ea=async function(e,t){return((await e.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_priorities",config_id:t,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(o=>({id:o.id,name:o.name,href:o.self,description:o.description})))},B_=async function(e,t,s){return((await e.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_issue_types",config_id:t,request:{params:{query:{projectId:s}}}}]})).resources??[])?.filter(o=>o.status_code===200&&(o.response_body?.length??0)>0).flatMap(o=>o.response_body.map(r=>({id:r.id,name:r.name,href:r.self,description:r.description})))},H_=async function(e,t,s,i,o,r){try{const{account:n,project:a,priority:l,labels:d=[],summary:p="",description:u="",issueType:f}=yh(o);if(n&&a&&l&&d?.length&&p&&f){const[m,g,v,A,$]=await Promise.all([F_(e,s),N_(e,n),Ea(e,n),B_(e,n,a),U_(e,n)]),k=m?.find(F=>String(F.id)===String(n)||String(F.name)===String(n)),T=g?.find(F=>String(F.id)===String(a)||String(F.name)===String(a)),y=v?.find(F=>String(F.id)===String(l)||String(F.name)===String(l)),x=A?.find(F=>String(F.id)===String(f)||String(F.name)===String(f)),C=d.map(F=>Lh[F]??F.replace(/_/g,"")).filter(F=>$.includes(F));if(k&&T&&y&&x&&C.length){const F=Xc(e,t,u,r),D=Xc(e,t,p,r),L=await e.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.create_issue",config_id:n,request:{json:{fields:{description:F,issuetype:{name:x.name},labels:C,priority:{id:y.id},project:{id:T.id},summary:D}}}}]});if(L?.resources?.length&&!L?.errors?.length){const R={errors:[],created:!0,id:L?.resources?.[0].response_body?.id,key:L?.resources?.[0].response_body?.key,api_link:L?.resources?.[0].response_body?.self};try{R.logged_data=await Pv(e,r,{account:k.name,project:T.name,priority:y.name,issueType:x.name,labels:d??[],description:F??"",summary:D??""},R,i)}catch(ce){console.error(ce)}return R}else return{errors:(L?.errors??[]).map(R=>R.message),created:!1,id:"",key:"",api_link:""}}else return{errors:[t.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}else return{errors:[t.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}catch(n){return console.error(n),{errors:[n.message],created:!1,id:"",key:"",api_link:""}}};async function j_(e,t){return t?(await e.api.alerts.postEntitiesAlertsV1({ids:[t]}))?.resources?.[0]:void 0}const ht={I18N:Symbol("i18n"),ALERTS:Symbol("alerts"),FALCON_API:Symbol("falconApi"),FALCON_API_GET_ORIGINS:Symbol("falconApiGetOrigins"),FALCON_API_GET_APP_ID:Symbol("falconApiGetAppId"),URL_STATE:Symbol("urlState")};var W_=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Mh;const kn=e=>Mh=e,Rh=Symbol();function $a(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var So;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(So||(So={}));function K_(){const e=il(!0),t=e.run(()=>ze({}));let s=[],i=[];const o=mn({install(r){kn(o),o._a=r,r.provide(Rh,o),r.config.globalProperties.$pinia=o,i.forEach(n=>s.push(n)),i=[]},use(r){return!this._a&&!W_?i.push(r):s.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return o}const Dh=()=>{};function Qc(e,t,s,i=Dh){e.push(t);const o=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),i())};return!s&&Su()&&g0(o),o}function Ai(e,...t){e.slice().forEach(s=>{s(...t)})}const q_=e=>e();function Sa(e,t){e instanceof Map&&t instanceof Map&&t.forEach((s,i)=>e.set(i,s)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const i=t[s],o=e[s];$a(o)&&$a(i)&&e.hasOwnProperty(s)&&!Be(i)&&!As(i)?e[s]=Sa(o,i):e[s]=i}return e}const G_=Symbol();function Y_(e){return!$a(e)||!e.hasOwnProperty(G_)}const{assign:Fs}=Object;function X_(e){return!!(Be(e)&&e.effect)}function J_(e,t,s,i){const{state:o,actions:r,getters:n}=t,a=s.state.value[e];let l;function d(){a||(s.state.value[e]=o?o():{});const p=Bu(s.state.value[e]);return Fs(p,r,Object.keys(n||{}).reduce((u,f)=>(u[f]=mn(Re(()=>{kn(s);const m=s._s.get(e);return n[f].call(m,m)})),u),{}))}return l=Ph(e,d,t,s,i,!0),l}function Ph(e,t,s={},i,o,r){let n;const a=Fs({actions:{}},s),l={deep:!0};let d,p,u=[],f=[],m;const g=i.state.value[e];!r&&!g&&(i.state.value[e]={}),ze({});let v;function A(D){let L;d=p=!1,typeof D=="function"?(D(i.state.value[e]),L={type:So.patchFunction,storeId:e,events:m}):(Sa(i.state.value[e],D),L={type:So.patchObject,payload:D,storeId:e,events:m});const R=v=Symbol();ju().then(()=>{v===R&&(d=!0)}),p=!0,Ai(u,L,i.state.value[e])}const $=r?function(){const{state:L}=s,R=L?L():{};this.$patch(ce=>{Fs(ce,R)})}:Dh;function k(){n.stop(),u=[],f=[],i._s.delete(e)}function T(D,L){return function(){kn(i);const R=Array.from(arguments),ce=[],te=[];function xe(q){ce.push(q)}function Ee(q){te.push(q)}Ai(f,{args:R,name:D,store:x,after:xe,onError:Ee});let fe;try{fe=L.apply(this&&this.$id===e?this:x,R)}catch(q){throw Ai(te,q),q}return fe instanceof Promise?fe.then(q=>(Ai(ce,q),q)).catch(q=>(Ai(te,q),Promise.reject(q))):(Ai(ce,fe),fe)}}const y={_p:i,$id:e,$onAction:Qc.bind(null,f),$patch:A,$reset:$,$subscribe(D,L={}){const R=Qc(u,D,L.detached,()=>ce()),ce=n.run(()=>pi(()=>i.state.value[e],te=>{(L.flush==="sync"?p:d)&&D({storeId:e,type:So.direct,events:m},te)},Fs({},l,L)));return R},$dispose:k},x=ir(y);i._s.set(e,x);const C=i._a&&i._a.runWithContext||q_,F=i._e.run(()=>(n=il(),C(()=>n.run(t))));for(const D in F){const L=F[D];if(Be(L)&&!X_(L)||As(L))r||(g&&Y_(L)&&(Be(L)?L.value=g[D]:Sa(L,g[D])),i.state.value[e][D]=L);else if(typeof L=="function"){const R=T(D,L);F[D]=R,a.actions[D]=L}}return Fs(x,F),Fs(be(x),F),Object.defineProperty(x,"$state",{get:()=>i.state.value[e],set:D=>{A(L=>{Fs(L,D)})}}),i._p.forEach(D=>{Fs(x,n.run(()=>D({store:x,app:i._a,pinia:i,options:a})))}),g&&r&&s.hydrate&&s.hydrate(x.$state,g),d=!0,p=!0,x}function Q_(e,t,s){let i,o;const r=typeof t=="function";typeof e=="string"?(i=e,o=r?s:t):(o=e,i=e.id);function n(a,l){const d=Ly();return a=a||(d?it(Rh,null):null),a&&kn(a),a=Mh,a._s.has(i)||(r?Ph(i,t,o,a):J_(i,o,a)),a._s.get(i)}return n.$id=i,n}const Cn=Q_("extension",()=>{const e=ze(),t=ze(!1),s=ze(!1),i=ze(!1),o=ze(!1),r=ze(),n=ze("RansomwareRemediation:DefaultPanel"),a=ir({}),l=ze(),d=ze(),p=ze(),u=ze(),f=ze([]),m=ze([]),g=it(ht.FALCON_API),v=it(ht.I18N),A=it(ht.FALCON_API_GET_ORIGINS),$=ze(String(g.data?.detectionId)),{t:k}=v,T=async()=>{try{s.value=!0,r.value=void 0,$.value&&(r.value=await j_(g,$.value))}catch(ne){e.value=ne,console.error(ne)}finally{s.value=!1}},y=async()=>{try{i.value=!0,l.value=await Rv(g),d.value=await Dv(g),l.value?.account&&(f.value=await Ea(g,l.value?.account)),d.value?.account&&(m.value=await Ea(g,d.value?.account))}catch(ne){e.value=ne,console.error(ne)}finally{i.value=!1}},x=async()=>{try{o.value=!0,$.value&&(p.value=await Wc(g,"notifyIT"),u.value=await Wc(g,"notifyIR"))}catch(ne){e.value=ne,console.error(ne)}finally{o.value=!1}},C=Re(()=>!0),F=()=>n.value?xe(n.value):{},D=(ne,Oe)=>{n.value=ne,Oe&&(a[ne]=Oe)},L=(ne,Oe)=>{a[n.value]={...a[n.value],[ne]:Oe}},R=(ne,Oe=void 0)=>xe(n.value)[ne]??Oe,ce=ne=>{a[ne]={}},te=(ne,Oe)=>{a[ne]={...Oe}},xe=ne=>(a[ne]||(a[ne]={}),a[ne]??{}),Ee=Re(()=>i?.value||s?.value||o?.value),fe=async()=>{await Promise.all([T(),y(),x()])},q=Re(()=>n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR"?R("account","").length>0&&R("priority","").length>0&&R("issueType","").length>0&&R("summary","").length>0&&R("labels",[]).length>0:!0),se=async()=>{try{return t.value=!0,q.value&&(n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR")?await H_(g,v,A(),n.value==="RansomwareRemediation:NotifyIT"?"notifyIT":"notifyIR",xe(n.value),r.value):{errors:[k("errorCreatingJiraIssueDataMissing")],created:!1,id:"",api_link:"",key:""}}finally{t.value=!1}},le=Re(()=>{const ne={account:"",project:"",priority:"",labels:"",issueType:"",summary:"",description:""};if(!q.value){const Oe=F();Oe.account?.length||(ne.account=k("selectAccount")),Oe.project?.length||(ne.project=k("selectProject")),Oe.priority?.length||(ne.priority=k("selectPriority")),Oe.labels?.length||(ne.labels=k("enterOneOrMoreLabels")),Oe.issueType?.length||(ne.issueType=k("selectIssueType")),Oe.summary?.length||(ne.summary=k("enterSummary"))}return ne});return g.events.on("data",ne=>{const Oe=String(ne.detectionId);Oe&&$.value!==Oe&&(g.data&&(g.data.detectionId=Oe),$.value=Oe,fe())}),{notifyITConfig:l,notifyIRConfig:d,notifyITPriorities:f,notifyIRPriorities:m,loadData:fe,isLoading:Ee,loadingError:e,hasRansomwareRemediation:C,detection:r,setWizardState:D,setWizardStateProperty:L,clearWizardStateStep:ce,setWizardStateStep:te,wizardState:n,wizardStateValues:a,getWizardStateStep:xe,getWizardStateProperty:R,isStepValid:q,createJiraIssueFromCurrentStep:se,isSaving:t,validationMessages:le,existingTicketIT:p,existingTicketIR:u,loadExistingTickets:x}}),ds=(e,t)=>{const s=e.__vccOpts||e;for(const[i,o]of t)s[i]=o;return s},Z_={},e1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},t1=N("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM17.207 15.793L15.793 17.207L12 13.414L8.207 17.207L6.793 15.793L10.586 12L6.793 8.207L8.207 6.793L12 10.586L15.793 6.793L17.207 8.207L13.414 12L17.207 15.793Z"},null,-1),s1=[t1];function i1(e,t){return de(),me("svg",e1,s1)}const Zc=ds(Z_,[["render",i1]]),o1={},r1={width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},n1=N("g",null,[N("path",{d:"M7.5 12V8h1v4h-1ZM8 6.049A1.024 1.024 0 1 0 8 4a1.024 1.024 0 0 0 0 2.049Z"}),N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7-5.976a5.976 5.976 0 1 0 0 11.952A5.976 5.976 0 0 0 8 2.024Z"})],-1),a1=[n1];function l1(e,t){return de(),me("svg",r1,a1)}const ed=ds(o1,[["render",l1]]),c1={},d1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},u1=N("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 19H11V10H13V19ZM12 8C11.171 8 10.5 7.328 10.5 6.5C10.5 5.672 11.172 5 12 5C12.828 5 13.5 5.672 13.5 6.5C13.5 7.328 12.828 8 12 8Z"},null,-1),h1=[u1];function p1(e,t){return de(),me("svg",d1,h1)}const f1=ds(c1,[["render",p1]]),m1={},g1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},b1=N("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM9.242 17.295L5.453 13.506L6.867 12.092L9.242 14.467L16.497 7.212L17.911 8.626L9.242 17.295Z"},null,-1),y1=[b1];function v1(e,t){return de(),me("svg",g1,y1)}const _1=ds(m1,[["render",v1]]),w1={},x1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},k1=N("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM11 5H13V14H11V5ZM12 19C11.171 19 10.5 18.328 10.5 17.5C10.5 16.672 11.172 16 12 16C12.828 16 13.5 16.672 13.5 17.5C13.5 18.328 12.828 19 12 19Z"},null,-1),C1=[k1];function E1(e,t){return de(),me("svg",x1,C1)}const $1=ds(w1,[["render",E1]]),S1={},A1={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},T1=N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.009 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 11h2V4H9v7Zm1 4.475a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"},null,-1),I1=[T1];function z1(e,t){return de(),me("svg",A1,I1)}const O1=ds(S1,[["render",z1]]),L1={},M1={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},R1=N("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1),D1=[R1];function P1(e,t){return de(),me("svg",M1,D1)}const V1=ds(L1,[["render",P1]]),F1={},N1={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},U1=N("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1),B1=[U1];function H1(e,t){return de(),me("svg",N1,B1)}const j1=ds(F1,[["render",H1]]),W1={class:"type-sm text-text-and-icons flex items-center gap-1 mb-1"},K1={class:"type-sm text-body-and-labels"},q1=It({__name:"ActionsPrivacyPanel",setup(e){const{t}=it(ht.I18N);return(s,i)=>i[0]||(Wr(-1),i[0]=N("div",{class:"bg-surface-2xl shadow-2xl p-4 border-l-2 border-medium mb-3 relative top-0 z-5 mb-6 rounded-sm"},[N("h3",W1,[Pe(H(O1),{class:"text-medium"}),N("span",null,ue(H(t)("warning")),1)]),N("p",K1,ue(H(t)("actionDataPrivacy")),1)]),Wr(1),i[0])}}),G1={class:"flex gap-1 items-center mt-2"},Y1={key:0,class:"inline-block text-xs text-disabled"},X1={slot:"trigger",class:"inline-block cursor-pointer text-xs underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"},J1=["value"],Q1=["content"],Z1=["content"],ew=It({__name:"VariablesSelector",props:{exampleDetection:{},disabled:{type:Boolean}},emits:["addVariable"],setup(e,{emit:t}){const s=e,i=it(ht.FALCON_API),o=it(ht.I18N),{t:r}=o,n=ze(),a=ze(!1),l=p=>{n?.value.hide(),p.detail.item?.value&&t("addVariable",`\${${p.detail.item?.value}}`)},d=p=>Oh(i,o,p,s.exampleDetection,"---");return(p,u)=>(de(),me("div",G1,[s.disabled?(de(),me("span",Y1,"Insert variable")):(de(),me("sl-dropdown",{key:1,ref_key:"dropdownEl",ref:n,onSlAfterShow:u[0]||(u[0]=f=>a.value=!0),onSlAfterHide:u[1]||(u[1]=f=>a.value=!1),hoist:""},[N("a",X1,ue(H(r)("insertVariable")),1),N("sl-menu",{onSlSelect:l},[(de(!0),me(_t,null,th(H($l),(f,m)=>(de(),me("sl-menu-item",{key:m,value:m},[_n(ue(m)+" ",1),s.exampleDetection&&d(m)!=="undefined"?(de(),me("sl-tooltip",{key:0,slot:"suffix",style:{"--max-width":"90vw"},content:d(m),hoist:""},[Pe(H(ed))],8,Q1)):At("",!0)],8,J1))),128))],32)],544)),N("sl-tooltip",{content:H(r)("insertVariableTooltip")},[Pe(H(ed))],8,Z1)]))}});const td=ds(ew,[["__scopeId","data-v-0be42262"]]),tw=["open"],sw={slot:"expand-icon"},iw={slot:"collapse-icon"},ow={class:"flex w-full justify-between gap-3",slot:"summary"},rw={class:"flex"},nw={key:0,class:"self-center pr-3"},aw=It({__name:"CollapsiblePanel",props:{label:{},iconComponent:{type:[Object,Function]},iconProps:{},count:{},fontClass:{},open:{type:Boolean}},emits:["hide","show","after-show","after-hide"],setup(e,{emit:t}){const s=e,i=Re(()=>s.fontClass??"type-lg-tight-medium"),{open:o=ze(!1)}=Bu(s),r=()=>{t("show"),o.value=!0},n=()=>{t("hide"),o.value=!1};return(a,l)=>(de(),me("sl-details",{class:"collapsible-panel",onSlShow:l[0]||(l[0]=Pt(d=>r(),["self"])),onSlHide:l[1]||(l[1]=Pt(d=>n(),["self"])),onSlAfterShow:l[2]||(l[2]=Pt(d=>a.$emit("after-show"),["self"])),onSlAfterHide:l[3]||(l[3]=Pt(d=>a.$emit("after-hide"),["self"])),open:H(o)},[N("div",sw,[Pe(H(V1))]),N("div",iw,[Pe(H(j1))]),N("div",ow,[N("div",rw,[s.iconComponent?(de(),me("div",nw,[Pe(s.iconComponent,h0(ph(s.iconProps)),null,16)])):At("",!0),N("h3",{class:ji(["text-titles-and-attributes",i.value])},ue(s.label),3)]),a.count!==void 0?(de(),me("div",{key:0,class:ji(["pr-0.5",i.value])},ue(a.count),3)):At("",!0)]),N("div",null,[ky(a.$slots,"default",{},void 0,!0)])],40,tw))}});const lw=ds(aw,[["__scopeId","data-v-ba21779b"]]),cw={class:"p-3"},dw={key:0,class:"flex flex-row items-center justify-items-start gap-3 mb-4"},uw=["disabled"],hw=["disabled"],pw={key:1},fw={class:"text-critical type-md-medium"},mw={class:"type-sm mb-4"},gw={key:2},bw={class:"text-high type-md-medium"},yw={class:"type-sm mb-4"},vw={key:3},_w={class:"text-high type-md-medium"},ww={class:"type-sm mb-4"},xw={key:4,class:"pt-3"},kw={class:"type-md-medium text-titles-and-attributes mb-3"},Cw={key:0,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},Ew={class:"w-1/4 truncate"},$w={class:"type-xs text-body-and-labels"},Sw={class:"type-sm text-titles-and-attributes"},Aw={class:"w-1/3 truncate"},Tw={class:"type-xs text-body-and-labels"},Iw={class:"type-sm text-titles-and-attributes"},zw={class:"truncate"},Ow={class:"type-xs text-body-and-labels"},Lw={class:"type-sm text-titles-and-attributes"},Mw={key:1,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},Rw={class:"w-1/4 truncate"},Dw={class:"type-xs text-body-and-labels"},Pw={class:"type-sm text-titles-and-attributes"},Vw={class:"w-1/3 truncate"},Fw={class:"type-xs text-body-and-labels"},Nw={class:"type-sm text-titles-and-attributes"},Uw={class:"truncate"},Bw={class:"type-xs text-body-and-labels"},Hw={class:"type-sm text-titles-and-attributes"},jw=It({__name:"DefaultPanel",setup(e){const t=it(ht.FALCON_API),s=Cn(),{t:i,d:o}=it(ht.I18N),r=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIR"),s.setWizardState("RansomwareRemediation:NotifyIT")},n=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIT"),s.setWizardState("RansomwareRemediation:NotifyIR")},a=()=>{!s.notifyITConfig&&!s.notifyIRConfig?t.navigation.navigateTo({path:"/wizard",type:"internal",target:"_blank"}):s.notifyITConfig?s.notifyIRConfig||t.navigation.navigateTo({path:"/notify-ir",type:"internal",target:"_blank"}):t.navigation.navigateTo({path:"/notify-it",type:"internal",target:"_blank"})};return(l,d)=>(de(),me("div",cw,[H(s).notifyITConfig||H(s).notifyIRConfig?(de(),me("div",dw,[N("sl-button",{disabled:!H(s).notifyITConfig,onClick:d[0]||(d[0]=p=>r()),variant:"neutral",size:"small",slot:"trigger"},ue(H(i)("notifyIT")),9,uw),N("sl-button",{disabled:!H(s).notifyIRConfig,onClick:d[1]||(d[1]=p=>n()),variant:"neutral",size:"small",slot:"trigger"},ue(H(i)("notifyIR")),9,hw)])):At("",!0),!H(s).notifyITConfig&&!H(s).notifyIRConfig?(de(),me("div",pw,[N("h2",fw,ue(H(i)("actionNotConfigured")),1),N("p",mw,ue(H(i)("configureActionsInAppMessage")),1),N("sl-button",{onClick:d[2]||(d[2]=p=>a()),variant:"neutral",size:"small",slot:"trigger"},ue(H(i)("configureInApp")),1)])):H(s).notifyITConfig?H(s).notifyIRConfig?At("",!0):(de(),me("div",vw,[N("h2",_w,ue(H(i)("notifyIRNotConfigured")),1),N("p",ww,ue(H(i)("configureNotifyIRInAppMessage")),1),N("sl-button",{onClick:d[4]||(d[4]=p=>a()),variant:"neutral",size:"small",slot:"trigger"},ue(H(i)("configureInApp")),1)])):(de(),me("div",gw,[N("h2",bw,ue(H(i)("notifyITNotConfigured")),1),N("p",yw,ue(H(i)("configureNotifyITInAppMessage")),1),N("sl-button",{onClick:d[3]||(d[3]=p=>a()),variant:"neutral",size:"small",slot:"trigger"},ue(H(i)("configureInApp")),1)])),H(s).existingTicketIT||H(s).existingTicketIR?(de(),me("div",xw,[N("h2",kw,ue(H(i)("remediationHistory")),1),H(s).existingTicketIT?(de(),me("div",Cw,[N("div",Ew,[N("h3",$w,ue(H(i)("action")),1),N("p",Sw,ue(H(i)("notifyIT")),1)]),N("div",Aw,[N("h3",Tw,ue(H(i)("jiraTicket")),1),N("p",Iw,ue(H(s).existingTicketIT.issueKey),1)]),N("div",zw,[N("h3",Ow,ue(H(i)("executionDate")),1),N("p",Lw,ue(H(o)(new Date(H(s).existingTicketIT.creationDate),"fullDateTime")),1)])])):At("",!0),H(s).existingTicketIR?(de(),me("div",Mw,[N("div",Rw,[N("h3",Dw,ue(H(i)("action")),1),N("p",Pw,ue(H(i)("notifyIR")),1)]),N("div",Vw,[N("h3",Fw,ue(H(i)("jiraTicket")),1),N("p",Nw,ue(H(s).existingTicketIR.issueKey),1)]),N("div",Uw,[N("h3",Bw,ue(H(i)("executionDate")),1),N("p",Hw,ue(H(o)(new Date(H(s).existingTicketIR.creationDate),"fullDateTime")),1)])])):At("",!0)])):At("",!0)]))}}),Ww={class:"flex flex-col items-start justify-items-center gap-3 p-3 border-t border-lines-light"},Kw={class:"type-md-medium text-text-and-icons mb-3"},qw={class:"w-full"},Gw=["label","value","onSlChange","disabled"],Yw=["value"],Xw={class:"w-full"},Jw=["label","value","onSlChange","disabled"],Qw={class:"w-full"},Zw=["label","value","disabled","onSlChange"],ex={class:"w-full"},tx={class:"w-full flex flex-row justify-end items-center gap-3"},sx=["disabled"],ix=["disabled","variant"],ox={key:0,class:"mr-1 inline-block"},rx={key:1,name:"x-octagon",class:"mr-1 inline-block"},nx={key:2,name:"check-circle",class:"mr-1 inline-block"},Vh=It({__name:"ConfigureNotify",props:{step:{}},setup(e){const t=e;let s,i;const o=it(ht.ALERTS),r=ze(),n=ze(),a=ze(),l=ze(),d=q=>{r.value=q,setTimeout(()=>{r.value=void 0},10*1e3)},{t:p}=it(ht.I18N),u=Cn(),f=Re(()=>t.step),m=Re(()=>u.getWizardStateProperty("priority","")),g=Re(()=>f.value==="RansomwareRemediation:NotifyIT"?u.notifyITPriorities:f.value==="RansomwareRemediation:NotifyIR"?u.notifyIRPriorities:[]),v=Re(()=>f.value==="RansomwareRemediation:NotifyIT"?p("notifyIT"):f.value==="RansomwareRemediation:NotifyIR"?p("notifyIR"):""),A=Re(()=>u.getWizardStateProperty("summary","")),$=Re(()=>u.getWizardStateProperty("description","")),k=async q=>{const se=q?.target?.value;u.setWizardStateProperty("priority",se),fe()},T=async q=>{const se=q?.target?.value;u.setWizardStateProperty("summary",se.trim()||P_),fe()},y=async q=>{const se=q?.target?.value;u.setWizardStateProperty("description",se.trim()),fe()},x=Re(()=>u.isStepValid),C=Re(()=>u.validationMessages),F=q=>{u.setWizardStateProperty("summary",`${A.value.trim()} ${q}`.trim()),n.value.focus(),fe()},D=q=>{u.setWizardStateProperty("description",`${$.value.trim()} ${q}`.trim()),a.value.focus(),fe()},L=Re(()=>u.isLoading),R=Re(()=>u.isSaving),ce=async()=>{u.setWizardState(f.value),f.value==="RansomwareRemediation:NotifyIT"?u.setWizardStateStep(f.value,u.notifyITConfig??{}):f.value==="RansomwareRemediation:NotifyIR"&&u.setWizardStateStep(f.value,u.notifyIRConfig??{}),fe()},te=async()=>{clearTimeout(s),i?.hide(),u.wizardState!=="RansomwareRemediation:DefaultPanel"&&(await u.loadExistingTickets(),u.setWizardState("RansomwareRemediation:DefaultPanel"))},xe=async()=>{if(fe()&&!r.value){const q=await u.createJiraIssueFromCurrentStep();q.created&&q?(d("success"),s=setTimeout(te,1e4),i=o.notify({variant:"success",message:p("jiraIssueCreated",{key:q.key,id:q.id}),backdrop:!0,position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0,te()}},!1)):(d("danger"),i=o.notify({variant:"danger",backdrop:!0,message:q.errors?.[0]??p("errorCreatingJiraIssue"),position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0}},!1))}},Ee=()=>{u.setWizardState("RansomwareRemediation:DefaultPanel")},fe=()=>{const{priority:q,summary:se,description:le}=C.value;return l.value?.setCustomValidity(q),n.value?.setCustomValidity(se),a.value?.setCustomValidity(le),l.value?.disabled||l.value?.reportValidity(),n.value?.disabled||n.value?.reportValidity(),a?.value?.disabled||a.value?.reportValidity(),x.value};return ce(),(q,se)=>(de(),me("div",Ww,[N("h1",Kw,ue(v.value),1),N("div",qw,[N("sl-select",{label:H(p)("priority"),value:m.value,onSlChange:Pt(k,["self"]),placement:"bottom",disabled:L.value,ref_key:"priorityElement",ref:l},[(de(!0),me(_t,null,th(g.value,le=>(de(),me("sl-option",{key:le.id,value:le.id},ue(le.name),9,Yw))),128))],40,Gw)]),N("div",Xw,[N("sl-input",{label:H(p)("summary"),value:A.value,ref_key:"summaryElement",ref:n,onSlChange:Pt(T,["self"]),disabled:L.value},null,40,Jw),Pe(H(td),{onAddVariable:F,disabled:L.value,"example-detection":H(u).detection},null,8,["disabled","example-detection"])]),N("div",Qw,[N("sl-textarea",{label:H(p)("description"),value:$.value,ref_key:"descriptionElement",ref:a,disabled:L.value,onSlChange:Pt(y,["self"])},null,40,Zw),Pe(H(td),{onAddVariable:D,disabled:L.value,"example-detection":H(u).detection},null,8,["disabled","example-detection"])]),N("div",ex,[Pe(H(q1))]),N("div",tx,[N("sl-button",{onClick:se[0]||(se[0]=le=>Ee()),disabled:R.value||r.value,variant:"neutral",size:"small",slot:"trigger"},ue(H(p)("cancel")),9,sx),N("sl-button",{onClick:se[1]||(se[1]=le=>xe()),disabled:R.value||!H(u).isStepValid,variant:r.value?r.value:"primary",size:"small",slot:"trigger"},[R.value?(de(),me("sl-spinner",ox)):r.value==="danger"?(de(),me("sl-icon",rx)):r.value==="success"?(de(),me("sl-icon",nx)):At("",!0),_n(" "+ue(H(p)("createTicket")),1)],8,ix)])]))}}),ax=It({__name:"NotifyIR",setup(e){return(t,s)=>(de(),Ss(Vh,{step:"RansomwareRemediation:NotifyIR"}))}}),lx=It({__name:"NotifyIT",setup(e){return(t,s)=>(de(),Ss(Vh,{step:"RansomwareRemediation:NotifyIT"}))}}),cx={class:"bg-surface-md h-full w-full overflow-y-auto max-w-full"},dx={class:"p-3"},ux={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},hx={class:"w-2/3 truncate"},px={class:"type-xs truncate text-body-and-labels",title:"{{ t('tacticAndTechnique') }}"},fx={class:"type-sm min-h-6 text-titles-and-attributes truncate"},mx=["onClick","onAuxclick","href","title"],gx=["onClick","onAuxclick","href","title"],bx={class:"w-1/3 truncate"},yx={class:"type-xs truncate text-body-and-labels"},vx=["title"],_x=["onClick","onAuxclick","href"],wx={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},xx={class:"w-full truncate"},kx={class:"type-xs truncate text-body-and-labels"},Cx={class:"type-sm min-h-6 text-titles-and-attributes w-full"},Ex=It({__name:"RansomwareRemediation",setup(e){const{t}=it(ht.I18N),s=Cn(),i=it(ht.FALCON_API),o=Re(()=>Iv(s.detection)),r=Re(()=>Tv(s.detection)),n=Re(()=>zv(s.detection)),a=l=>i.navigation.onClick(l,"_blank","falcon");return(l,d)=>(de(),Ss(H(lw),{label:H(t)("ransomwareRemediation"),"font-class":"type-md-medium",open:!0},{default:Xu(()=>[N("div",cx,[N("div",dx,[N("div",ux,[N("div",hx,[N("dt",px,ue(H(t)("tacticAndTechnique")),1),N("dd",fx,[N("a",{onClick:Pt(a,["stop","prevent"]),onAuxclick:Pt(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:o.value,target:"_blank",title:H(s).detection?.tactic},ue(H(s).detection?.tactic),41,mx),_n(" "+ue(H(t)("via"))+" ",1),N("a",{onClick:Pt(a,["stop","prevent"]),onAuxclick:Pt(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:r.value,target:"_blank",title:H(s).detection?.technique},ue(H(s).detection?.technique),41,gx)])]),N("div",bx,[N("dt",yx,ue(H(t)("hostname")),1),N("dd",{class:"type-sm min-h-6 text-titles-and-attributes truncate",title:H(s).detection?.device?.hostname},[N("a",{onClick:Pt(a,["stop","prevent"]),onAuxclick:Pt(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:n.value,target:"_blank"},ue(H(s).detection?.device?.hostname),41,_x)],8,vx)])]),N("div",wx,[N("div",xx,[N("dt",kx,ue(H(t)("description")),1),N("dd",Cx,ue(H(t)("createAJiraTicket")),1)])])]),H(s).wizardState==="RansomwareRemediation:DefaultPanel"?(de(),Ss(jw,{key:0})):At("",!0),H(s).wizardState==="RansomwareRemediation:NotifyIT"?(de(),Ss(lx,{key:1})):At("",!0),H(s).wizardState==="RansomwareRemediation:NotifyIR"?(de(),Ss(ax,{key:2})):At("",!0)])]),_:1},8,["label"]))}});const $x=ds(Ex,[["__scopeId","data-v-3673d71e"]]),Sx={class:"bg-surface-lg flex h-full w-full flex-col"},Ax={key:0,class:"h-full w-full flex-grow p-6 text-center"},Tx=N("sl-spinner",{style:{"font-size":"3rem"}},null,-1),Ix=[Tx],zx=It({__name:"AvailableRemediations",setup(e){const t=Cn(),s=Re(()=>t.hasRansomwareRemediation);return fl(()=>{t.loadData()}),(i,o)=>(de(),me("div",Sx,[H(t).isLoading?(de(),me("div",Ax,Ix)):At("",!0),s.value&&!H(t).isLoading?(de(),Ss($x,{key:1})):At("",!0)]))}}),Ox={class:"main-content w-full"},Lx=It({__name:"App",setup(e){return(t,s)=>(de(),me("div",Ox,[Pe(zx)]))}}),Gr={en:{account:e=>{const{normalize:t}=e;return t(["Account"])},action:e=>{const{normalize:t}=e;return t(["Action"])},actionAppDetails:e=>{const{normalize:t}=e;return t(["App details"])},actionButtonLabel:e=>{const{normalize:t}=e;return t(["Actions"])},actionConfigureJiraAction:e=>{const{normalize:t}=e;return t(["Configure Jira actions"])},actionConfigureRemediationOptions:e=>{const{normalize:t}=e;return t(["Configure remediation options"])},actionDataPrivacy:e=>{const{normalize:t}=e;return t(["This action sends data out of Falcon to a system or third party that may have different security standards, privacy and data processing practices, or terms and conditions. By configuring this workflow you consent to such data transfer."])},actionNotConfigured:e=>{const{normalize:t}=e;return t(["Actions not configured"])},auditRoute:e=>{const{normalize:t}=e;return t(["Audit"])},availableRemediationWorkflows:e=>{const{normalize:t}=e;return t(["Available remediation workflows"])},buttonSeeDetections:e=>{const{normalize:t}=e;return t(["See detections"])},cancel:e=>{const{normalize:t}=e;return t(["Cancel"])},collectionNotFound:e=>{const{normalize:t}=e;return t(["Collection not found"])},configureActionsInAppMessage:e=>{const{normalize:t}=e;return t(["This action does not have a configured workflow or Jira integration. Configure this workflow within the Triage app to use this action."])},configured:e=>{const{normalize:t}=e;return t(["Configured"])},configureInApp:e=>{const{normalize:t}=e;return t(["Configure in app"])},configureJiraActionsFollowing:e=>{const{normalize:t}=e;return t(["Configure Jira actions for the following workflows"])},configureNotifyIRInAppMessage:e=>{const{normalize:t}=e;return t(['This action does not have a configured workflow or Jira integration for "Notify IR". Configure this workflow within the Triage app to use this action.'])},configureNotifyITInAppMessage:e=>{const{normalize:t}=e;return t(['This action does not have a configured workflow or Jira integration for "Notify IT". Configure this workflow within the Triage app to use this action.'])},configureTheJiraAction:e=>{const{normalize:t}=e;return t(["Configure the Jira action for this remediation workflow"])},createAJiraTicket:e=>{const{normalize:t}=e;return t(["Create a Jira ticket to notify IT or IR with specific details of ransomware detections"])},createTicket:e=>{const{normalize:t}=e;return t(["Create Jira ticket"])},criticalSeverity:e=>{const{normalize:t}=e;return t(["Critical"])},customObjectCollectionNotFound:e=>{const{normalize:t}=e;return t(["collection was not found"])},description:e=>{const{normalize:t}=e;return t(["Description"])},detectionForEnterprise:e=>{const{normalize:t}=e;return t(["Falcon Detection Methods for Enterprise"])},detectionForMobile:e=>{const{normalize:t}=e;return t(["Falcon Detection Methods for Mobile"])},detectionsTitle:e=>{const{normalize:t}=e;return t(["Detections"])},enterOneOrMoreLabels:e=>{const{normalize:t}=e;return t(["Enter one or more labels"])},enterSummary:e=>{const{normalize:t}=e;return t(["Enter a summary"])},errorConfiguringJiraIssue:e=>{const{normalize:t}=e;return t(["Error configuring JIRA issue type"])},errorCreatingJiraIssue:e=>{const{normalize:t}=e;return t(["Error creating the Jira issue"])},errorCreatingJiraIssueDataMissing:e=>{const{normalize:t}=e;return t(["Jira Issue can't be created. Some information are missing."])},executionDate:e=>{const{normalize:t}=e;return t(["Execution date"])},filterLastDay:e=>{const{normalize:t}=e;return t(["Last day"])},filterLastHour:e=>{const{normalize:t}=e;return t(["Last hour"])},filterLastMonth:e=>{const{normalize:t}=e;return t(["Last 30 days"])},filterLastWeek:e=>{const{normalize:t}=e;return t(["Last week"])},filterShowSubTechniques:e=>{const{normalize:t}=e;return t(["Show sub-techniques"])},filterShowTrend:e=>{const{normalize:t}=e;return t(["Show trends"])},filterSwitchOff:e=>{const{normalize:t}=e;return t(["Off"])},filterSwitchOn:e=>{const{normalize:t}=e;return t(["On"])},highSeverity:e=>{const{normalize:t}=e;return t(["High"])},hostname:e=>{const{normalize:t}=e;return t(["Hostname"])},informationalSeverity:e=>{const{normalize:t}=e;return t(["Informational"])},insertVariable:e=>{const{normalize:t}=e;return t(["Insert variable"])},insertVariableTooltip:e=>{const{normalize:t}=e;return t(["Insert a variable in the field that will be filled with the corresponding value from the detection"])},issueType:e=>{const{normalize:t}=e;return t(["Issue type"])},jiraIssueConfigured:e=>{const{normalize:t}=e;return t(["JIRA issue type configured"])},jiraIssueCreated:e=>{const{normalize:t,interpolate:s,named:i}=e;return t(["Jira issue ",s(i("key"))," has been created."])},jiraTicket:e=>{const{normalize:t}=e;return t(["Jira ticket"])},labels:e=>{const{normalize:t}=e;return t(["Labels"])},loading:e=>{const{normalize:t}=e;return t(["Loading"])},lowSeverity:e=>{const{normalize:t}=e;return t(["Low"])},matrixForEnterprise:e=>{const{normalize:t}=e;return t(["MITRE ATT&CK Matrix for Enterprise"])},matrixForMobile:e=>{const{normalize:t}=e;return t(["MITRE ATT&CK Matrix for Mobile"])},mediumSeverity:e=>{const{normalize:t}=e;return t(["Medium"])},mitreAutoRemediationRoute:e=>{const{normalize:t}=e;return t(["CrowdStrike Triage for MITRE ATT&CK"])},noJiraAccount:e=>{const{normalize:t}=e;return t(["No JIRA integration account was found"])},noJiraIssueType:e=>{const{normalize:t}=e;return t(["No JIRA issueType was configured for this project"])},noJiraLabels:e=>{const{normalize:t}=e;return t(["No JIRA labels was configured for this project"])},noJiraPriority:e=>{const{normalize:t}=e;return t(["No JIRA priority was configured for this project"])},noJiraProject:e=>{const{normalize:t}=e;return t(["No JIRA projects was configured in this account"])},noMatchingMitreDetections:e=>{const{normalize:t}=e;return t(["No matching MITRE detections"])},notConfigured:e=>{const{normalize:t}=e;return t(["Not configured"])},notifyIR:e=>{const{normalize:t}=e;return t(["Notify IR"])},notifyIRNotConfigured:e=>{const{normalize:t}=e;return t(["Notify IR not configured"])},notifyIT:e=>{const{normalize:t}=e;return t(["Notify IT"])},notifyITNotConfigured:e=>{const{normalize:t}=e;return t(["Notify IT not configured"])},overviewCreated:e=>{const{normalize:t}=e;return t(["Created"])},overviewDescription:e=>{const{normalize:t}=e;return t(["Description"])},overviewDetectedSubTechniques:e=>{const{normalize:t}=e;return t(["Detected sub-techniques"])},overviewLastModified:e=>{const{normalize:t}=e;return t(["Last modified"])},overviewReadFullDescription:e=>{const{normalize:t}=e;return t(["Read full description"])},overviewSubTechnique:e=>{const{normalize:t}=e;return t(["Sub-technique"])},overviewSubTechniqueOf:e=>{const{normalize:t}=e;return t(["Sub-technique of"])},overviewTitle:e=>{const{normalize:t}=e;return t(["Overview"])},priority:e=>{const{normalize:t}=e;return t(["Priority"])},projects:e=>{const{normalize:t}=e;return t(["Projects"])},ransomwareRemediation:e=>{const{normalize:t}=e;return t(["Ransomware remediation"])},remediationHistory:e=>{const{normalize:t}=e;return t(["Remediation history"])},requiredValuesMissing:e=>{const{normalize:t}=e;return t(["Required values are missing"])},save:e=>{const{normalize:t}=e;return t(["Save"])},selectAccount:e=>{const{normalize:t}=e;return t(["Select an account"])},selectIssueType:e=>{const{normalize:t}=e;return t(["Select an issue type"])},selectPriority:e=>{const{normalize:t}=e;return t(["Select a priority"])},selectProject:e=>{const{normalize:t}=e;return t(["Select a project"])},subTechniquesTitle:e=>{const{normalize:t}=e;return t(["Sub-techniques"])},summary:e=>{const{normalize:t}=e;return t(["Summary"])},tacticAndTechnique:e=>{const{normalize:t}=e;return t(["Tactic & technique"])},updateYourDetection:e=>{const{normalize:t}=e;return t(["Update your detection timeframe or ensure your organization is set up properly for endpoint detections."])},via:e=>{const{normalize:t}=e;return t(["via"])},warning:e=>{const{normalize:t}=e;return t(["Warning"])},workflowsConfigured:e=>{const{normalize:t,interpolate:s,named:i}=e;return t([s(i("configuredActions")),"/",s(i("totalActions"))," workflows configured"])}}};function Mx(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function fo(e,t){const s=It({extends:t}),i=bh(s),o=document.createElement("span");i.mount(o);const r=o.innerHTML;return i.unmount(),o.remove(),r}class Rx{install(t){t.provide(ht.ALERTS,this)}notify(t,s=1e4){const{variant:i,message:o,afterHide:r,backdrop:n,position:a,margin:l="var(--sl-spacing-medium)"}=t;let d="";switch(i){case"success":d=fo("success",_1);break;case"danger":d=fo("danger",Zc);break;case"warning":d=fo("warning",$1);break;case"primary":d=fo("primary",f1);break;default:d=fo("danger",Zc);break}s=s===!1||s<=0?Number.POSITIVE_INFINITY:s;const p=document.createElement("sl-alert"),u=Object.assign(p,{variant:i,closable:!0,duration:s,innerHTML:`<span slot="icon">${d}</span>${Mx(o)}`});let f;return n&&(f=document.createElement("div"),f.classList.add("sl-toast-backdrop"),document.body.append(f)),u.addEventListener("sl-after-hide",()=>{r?.(),f&&f.remove()}),document.body.append(u),u.toast(),a&&(u.classList?.add("static"),setTimeout(()=>{const m=u.base;m.style.width="max-content",m.style.margin="0",m.style.maxWidth=`calc(100% - ${l} * 2)`,m.style.maxHeight=`calc(100% - ${l} * 2)`,a.includes("top")?m.style.top=l:a.includes("middle")?m.style.top="50%":a.includes("bottom")&&(m.style.bottom=l),a.includes("left")?m.style.left=l:a.includes("center")?m.style.left="50%":a.includes("right")&&(m.style.right=l),(a.includes("center")||a.includes("middle"))&&(m.style.transform=`translate(${a.includes("center")?"-50%":"0"}, ${a.includes("middle")?"-50%":"0"})`)},10)),u}}function Dx(){return new Rx}let wr;const Px=new Uint8Array(16);function Vx(){if(!wr&&(wr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!wr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return wr(Px)}const ct=[];for(let e=0;e<256;++e)ct.push((e+256).toString(16).slice(1));function Fx(e,t=0){return(ct[e[t+0]]+ct[e[t+1]]+ct[e[t+2]]+ct[e[t+3]]+"-"+ct[e[t+4]]+ct[e[t+5]]+"-"+ct[e[t+6]]+ct[e[t+7]]+"-"+ct[e[t+8]]+ct[e[t+9]]+"-"+ct[e[t+10]]+ct[e[t+11]]+ct[e[t+12]]+ct[e[t+13]]+ct[e[t+14]]+ct[e[t+15]]).toLowerCase()}const Nx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var sd={randomUUID:Nx};function id(e,t,s){if(sd.randomUUID&&!t&&!e)return sd.randomUUID();e=e||{};const i=e.random||(e.rng||Vx)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){s=s||0;for(let o=0;o<16;++o)t[s+o]=i[o];return t}return Fx(i)}const od="current";function Ze(e){if(!e.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function Ux(e){return!!e?.data?.meta?.messageId}const Bx=5e3,Hx=3e4,jx=5e3;function Wx(e){const t=e.type==="connect"?Bx:e.type==="api"?Hx:e.type==="navigateTo"?jx:null;return t}class Kx{constructor({onDataUpdate:t,onBroadcast:s,onLivereload:i}={}){ie(this,"onDataUpdate");ie(this,"onBroadcast");ie(this,"onLivereload");ie(this,"pendingMessages",new Map);ie(this,"targetOrigin","*");ie(this,"handleMessage",t=>{if(!Ux(t))return;const{message:s}=t.data;if(s.type==="data"){this.onDataUpdate?.(s);return}if(s.type==="broadcast"){this.onBroadcast?.(s);return}if(s.type==="livereload"){this.onLivereload?.(s);return}const{messageId:i}=t.data.meta,o=this.pendingMessages.get(i);if(!o)throw new Error("Received unexpected message");this.pendingMessages.delete(i),o(s.payload)});this.onDataUpdate=t,this.onBroadcast=s,this.onLivereload=i,window.addEventListener("message",this.handleMessage)}destroy(){window.removeEventListener("message",this.handleMessage)}setOrigin(t){this.targetOrigin=t}sendUnidirectionalMessage(t){const s=id(),i={message:t,meta:{messageId:s,version:od}};window.parent.postMessage(i,this.targetOrigin)}async postMessage(t){return new Promise((s,i)=>{const o=id();let r;const n=Wx(t);n!==null&&(r=setTimeout(()=>{i(new Error(`Waiting for response from foundry host for "${t.type}" message (ID: ${o}) timed out after ${n}ms`))},n)),this.pendingMessages.set(o,l=>{r&&clearTimeout(r),s(l)});const a={message:t,meta:{messageId:o,version:od}};window.parent.postMessage(a,this.targetOrigin)})}}function kt(e,t,s,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,s,r):n(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r}const Ps=new WeakMap,ri=new WeakMap,$s=new WeakMap,Yr=Symbol("anyProducer"),rd=Promise.resolve(),Xr=Symbol("listenerAdded"),Jr=Symbol("listenerRemoved");let Qr=!1,Qn=!1;function Ti(e){if(typeof e!="string"&&typeof e!="symbol"&&typeof e!="number")throw new TypeError("`eventName` must be a string, symbol, or number")}function xr(e){if(typeof e!="function")throw new TypeError("listener must be a function")}function Ii(e,t){const s=ri.get(e);if(s.has(t))return s.get(t)}function Ao(e,t){const s=typeof t=="string"||typeof t=="symbol"||typeof t=="number"?t:Yr,i=$s.get(e);if(i.has(s))return i.get(s)}function qx(e,t,s){const i=$s.get(e);if(i.has(t))for(const o of i.get(t))o.enqueue(s);if(i.has(Yr)){const o=Promise.all([t,s]);for(const r of i.get(Yr))r.enqueue(o)}}function nd(e,t){t=Array.isArray(t)?t:[t];let s=!1,i=()=>{},o=[];const r={enqueue(n){o.push(n),i()},finish(){s=!0,i()}};for(const n of t){let a=Ao(e,n);a||(a=new Set,$s.get(e).set(n,a)),a.add(r)}return{async next(){return o?o.length===0?s?(o=void 0,this.next()):(await new Promise(n=>{i=n}),this.next()):{done:!1,value:await o.shift()}:{done:!0}},async return(n){o=void 0;for(const a of t){const l=Ao(e,a);l&&(l.delete(r),l.size===0&&$s.get(e).delete(a))}return i(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function ad(e){if(e===void 0)return ld;if(!Array.isArray(e))throw new TypeError("`methodNames` must be an array of strings");for(const t of e)if(!ld.includes(t))throw typeof t!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${t} is not Emittery method`);return e}const Oi=e=>e===Xr||e===Jr;function kr(e,t,s){if(Oi(t))try{Qr=!0,e.emit(t,s)}finally{Qr=!1}}class vi{static mixin(t,s){return s=ad(s),i=>{if(typeof i!="function")throw new TypeError("`target` must be function");for(const n of s)if(i.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function o(){return Object.defineProperty(this,t,{enumerable:!1,value:new vi}),this[t]}Object.defineProperty(i.prototype,t,{enumerable:!1,get:o});const r=n=>function(...a){return this[t][n](...a)};for(const n of s)Object.defineProperty(i.prototype,n,{enumerable:!1,value:r(n)});return i}}static get isDebugEnabled(){if(typeof globalThis.process?.env!="object")return Qn;const{env:t}=globalThis.process??{env:{}};return t.DEBUG==="emittery"||t.DEBUG==="*"||Qn}static set isDebugEnabled(t){Qn=t}constructor(t={}){Ps.set(this,new Set),ri.set(this,new Map),$s.set(this,new Map),$s.get(this).set(Yr,new Set),this.debug=t.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(s,i,o,r)=>{try{r=JSON.stringify(r)}catch{r=`Object with the following keys failed to stringify: ${Object.keys(r).join(",")}`}(typeof o=="symbol"||typeof o=="number")&&(o=o.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${s}][${i}] Event Name: ${o}
	data: ${r}`)})}logIfDebugEnabled(t,s,i){(vi.isDebugEnabled||this.debug.enabled)&&this.debug.logger(t,this.debug.name,s,i)}on(t,s){xr(s),t=Array.isArray(t)?t:[t];for(const i of t){Ti(i);let o=Ii(this,i);o||(o=new Set,ri.get(this).set(i,o)),o.add(s),this.logIfDebugEnabled("subscribe",i,void 0),Oi(i)||kr(this,Xr,{eventName:i,listener:s})}return this.off.bind(this,t,s)}off(t,s){xr(s),t=Array.isArray(t)?t:[t];for(const i of t){Ti(i);const o=Ii(this,i);o&&(o.delete(s),o.size===0&&ri.get(this).delete(i)),this.logIfDebugEnabled("unsubscribe",i,void 0),Oi(i)||kr(this,Jr,{eventName:i,listener:s})}}once(t){let s;const i=new Promise(o=>{s=this.on(t,r=>{s(),o(r)})});return i.off=s,i}events(t){t=Array.isArray(t)?t:[t];for(const s of t)Ti(s);return nd(this,t)}async emit(t,s){if(Ti(t),Oi(t)&&!Qr)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",t,s),qx(this,t,s);const i=Ii(this,t)??new Set,o=Ps.get(this),r=[...i],n=Oi(t)?[]:[...o];await rd,await Promise.all([...r.map(async a=>{if(i.has(a))return a(s)}),...n.map(async a=>{if(o.has(a))return a(t,s)})])}async emitSerial(t,s){if(Ti(t),Oi(t)&&!Qr)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",t,s);const i=Ii(this,t)??new Set,o=Ps.get(this),r=[...i],n=[...o];await rd;for(const a of r)i.has(a)&&await a(s);for(const a of n)o.has(a)&&await a(t,s)}onAny(t){return xr(t),this.logIfDebugEnabled("subscribeAny",void 0,void 0),Ps.get(this).add(t),kr(this,Xr,{listener:t}),this.offAny.bind(this,t)}anyEvent(){return nd(this)}offAny(t){xr(t),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),kr(this,Jr,{listener:t}),Ps.get(this).delete(t)}clearListeners(t){t=Array.isArray(t)?t:[t];for(const s of t)if(this.logIfDebugEnabled("clear",s,void 0),typeof s=="string"||typeof s=="symbol"||typeof s=="number"){const i=Ii(this,s);i&&i.clear();const o=Ao(this,s);if(o){for(const r of o)r.finish();o.clear()}}else{Ps.get(this).clear();for(const[i,o]of ri.get(this).entries())o.clear(),ri.get(this).delete(i);for(const[i,o]of $s.get(this).entries()){for(const r of o)r.finish();o.clear(),$s.get(this).delete(i)}}}listenerCount(t){t=Array.isArray(t)?t:[t];let s=0;for(const i of t){if(typeof i=="string"){s+=Ps.get(this).size+(Ii(this,i)?.size??0)+(Ao(this,i)?.size??0)+(Ao(this)?.size??0);continue}typeof i<"u"&&Ti(i),s+=Ps.get(this).size;for(const o of ri.get(this).values())s+=o.size;for(const o of $s.get(this).values())s+=o.size}return s}bindMethods(t,s){if(typeof t!="object"||t===null)throw new TypeError("`target` must be an object");s=ad(s);for(const i of s){if(t[i]!==void 0)throw new Error(`The property \`${i}\` already exists on \`target\``);Object.defineProperty(t,i,{enumerable:!1,value:this[i].bind(this)})}}}const ld=Object.getOwnPropertyNames(vi.prototype).filter(e=>e!=="constructor");Object.defineProperty(vi,"listenerAdded",{value:Xr,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(vi,"listenerRemoved",{value:Jr,writable:!1,enumerable:!0,configurable:!1});function Ct(e){let t,s,i;return typeof e=="object"?(t=e.hashFunction,s=e.expiring,i=e.tags):t=e,(o,r,n)=>{if(n.value!=null)n.value=cd(n.value,t,s,i);else if(n.get!=null)n.get=cd(n.get,t,s,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Zn=new Map;function cd(e,t,s=0,i){const o=Symbol("__memoized_map__");return function(...r){let n;this.hasOwnProperty(o)||Object.defineProperty(this,o,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[o];if(Array.isArray(i))for(const l of i)Zn.has(l)?Zn.get(l).push(a):Zn.set(l,[a]);if(t||r.length>0||s>0){let l;t===!0?l=r.map(u=>u.toString()).join("!"):t?l=t.apply(this,r):l=r[0];const d=`${l}__timestamp`;let p=!1;if(s>0)if(!a.has(d))p=!0;else{let u=a.get(d);p=Date.now()-u>s}a.has(l)&&!p?n=a.get(l):(n=e.apply(this,r),a.set(l,n),s>0&&a.set(d,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=e.apply(this,r),a.set(l,n))}return n}}class Gx{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(t={}){const s={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesAlertsV1(t={}){const s={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:t}};return this.bridge.postMessage(s)}async patchCombinedAlertsV2(t,s={}){const i={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV2(t,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async patchEntitiesSuppressedDevicesV1(t,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV1(t,s={}){const i={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV1(t,s={}){const i={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(t,s={}){const i={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class Yx{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(t={}){const s={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(s)}async getV1Collections(t={}){const s={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:t}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjects(t={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:t}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKey(t={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:t}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(t={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:t}};return this.bridge.postMessage(s)}async postV1CollectionsCollectionNameObjects(t,s={}){const i={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async putV1CollectionsCollectionNameObjectsObjectKey(t,s={}){const i={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class Xx{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(t={}){const s={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:t}};return this.bridge.postMessage(s)}async patchEntitiesDetectsV2(t,s={}){const i={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV1(t,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV2(t,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesDetectsGetV1(t,s={}){const i={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesSummariesGetV1(t,s={}){const i={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(t,s={}){const i={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class Jx{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(t){const s={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getAggregatesBucketsV1(t){const s={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getAggregatesFgaTagPrefixCountsV1(t){const s={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getAggregatesTagPrefixCountsV1(t){const s={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesFgaGroupsV1(t){const s={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesGroupsV1(t){const s={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesAvailableGroupsV1(t={}){const s={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesDevicesHiddenV2(t={}){const s={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesDevicesV1(t={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesDevicesV2(t={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesFgaGroupsV1(t={}){const s={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesGroupsV1(t={}){const s={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async patchEntitiesDevicesTagsV2(t,s={}){const i={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async patchEntitiesGroupsV1(t,s={}){const i={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesDevicesGetV1(t,s={}){const i={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesFgaHostsGetV1(t,s={}){const i={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postCombinedDevicesLoginHistoryV1(t,s={}){const i={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postCombinedFgaHostsLoginHistoryV1(t,s={}){const i={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesActionsV4(t,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesHiddenActionsV4(t,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesReportsV1(t,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV2(t,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsReportsV1(t,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsV1(t,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupActionsV1(t,s){const i={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupsV1(t,s={}){const i={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class Qx{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionV1(t){const s={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:t}};return this.bridge.postMessage(s)}async postEntitiesExecutionV1(t,s={}){const i={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class Zx{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(t){const s={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(s)}async deleteEntitiesPoliciesV1(t){const s={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(s)}async deleteEntitiesRuleGroupsV1(t){const s={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesEventsV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesFirewallFieldsV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsDetailsV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesPlatformsV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesPoliciesV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesRuleGroupsV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesRulesV1(t){const s={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:t}};return this.bridge.postMessage(s)}async getLibraryEntitiesRuleGroupsV1(t){const s={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getLibraryQueriesRuleGroupsV1(t={}){const s={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesEventsV1(t={}){const s={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesFirewallFieldsV1(t={}){const s={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesNetworkLocationsV1(t={}){const s={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesPlatformsV1(t={}){const s={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesPolicyRulesV1(t={}){const s={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesRuleGroupsV1(t={}){const s={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesRulesV1(t={}){const s={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:t}};return this.bridge.postMessage(s)}async patchEntitiesNetworkLocationsV1(t,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async patchEntitiesRuleGroupsV1(t,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesEventsGetV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesPolicyRulesGetV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesRuleGroupsGetV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesRulesGetV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsMetadataV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsPrecedenceV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesOntologyV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesRuleGroupsV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesRulesValidateFilepathV1(t,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async putEntitiesNetworkLocationsV1(t,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async putEntitiesPoliciesV2(t,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class e2{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(t={}){const s={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesBehaviorsV1(t={}){const s={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesIncidentsV1(t={}){const s={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:t}};return this.bridge.postMessage(s)}async postAggregatesBehaviorsGetV1(t,s={}){const i={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postAggregatesIncidentsGetV1(t,s={}){const i={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesBehaviorsGetV1(t,s={}){const i={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentActionsV1(t,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentsGetV1(t,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class t2{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(t){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:t}};return this.bridge.postMessage(s)}async postEntitiesSavedSearchesExecuteV1(t,s={}){const i={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class s2{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(t={}){const s={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:t}};return this.bridge.postMessage(s)}}class i2{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesConfigsV1(t={}){const s={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:t}};return this.bridge.postMessage(s)}async postEntitiesExecuteDraftV1(t,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecuteV1(t,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class o2{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(t){const s={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesAppCommandV1(t){const s={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:t}};return this.bridge.postMessage(s)}async getEntitiesPutFilesV2(t){const s={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:t}};return this.bridge.postMessage(s)}async getQueriesPutFilesV1(t={}){const s={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:t}};return this.bridge.postMessage(s)}async postEntitiesAppCommandV1(t,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesAppSessionsV1(t,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class r2{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getQueriesUsersV1(t={}){const s={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:t}};return this.bridge.postMessage(s)}async postEntitiesUsersGetV1(t,s={}){const i={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class n2{constructor(t){ie(this,"bridge");this.bridge=t}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(t){const s={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:t}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(t,s={}){const i={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecutionActionsV1(t,s){const i={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:t,params:s}};return this.bridge.postMessage(i)}}class zt{constructor(t){ie(this,"api");this.api=t}get alerts(){return Ze(this.api),new Gx(this.api.bridge)}get detects(){return Ze(this.api),new Xx(this.api.bridge)}get devices(){return Ze(this.api),new Jx(this.api.bridge)}get fwmgr(){return Ze(this.api),new Zx(this.api.bridge)}get incidents(){return Ze(this.api),new e2(this.api.bridge)}get mitre(){return Ze(this.api),new s2(this.api.bridge)}get plugins(){return Ze(this.api),new i2(this.api.bridge)}get remoteResponse(){return Ze(this.api),new o2(this.api.bridge)}get userManagement(){return Ze(this.api),new r2(this.api.bridge)}get workflows(){return Ze(this.api),new n2(this.api.bridge)}get customobjects(){return Ze(this.api),new Yx(this.api.bridge)}get faasGateway(){return Ze(this.api),new Qx(this.api.bridge)}get loggingapi(){return Ze(this.api),new t2(this.api.bridge)}}kt([Ct()],zt.prototype,"alerts",null);kt([Ct()],zt.prototype,"detects",null);kt([Ct()],zt.prototype,"devices",null);kt([Ct()],zt.prototype,"fwmgr",null);kt([Ct()],zt.prototype,"incidents",null);kt([Ct()],zt.prototype,"mitre",null);kt([Ct()],zt.prototype,"plugins",null);kt([Ct()],zt.prototype,"remoteResponse",null);kt([Ct()],zt.prototype,"userManagement",null);kt([Ct()],zt.prototype,"workflows",null);kt([Ct()],zt.prototype,"customobjects",null);kt([Ct()],zt.prototype,"faasGateway",null);kt([Ct()],zt.prototype,"loggingapi",null);class a2{constructor(t,s){ie(this,"falcon");ie(this,"definition");this.falcon=t,this.definition=s}async execute({request:t}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:t}]})}}const Gt=class Gt{constructor(t,s){ie(this,"falcon");ie(this,"definition");ie(this,"pollTimeout",500);ie(this,"intervalId");this.falcon=t,this.definition=s}async execute({path:t,method:s,body:i,params:o}){const r="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...r,payload:{path:t,method:s,body:i,params:o}});return new Promise((a,l)=>{const d=n?.resources?.[0];d?.execution_id?this.pollForResult({resolve:a,reject:l,executionId:d?.execution_id}):l(n?.errors)})}async getExecutionResult(t){return(await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:t}))?.resources?.[0]?.payload}pollForResult({resolve:t,reject:s,executionId:i}){let o=2;this.intervalId=window.setInterval(async()=>{try{const r=await this.getExecutionResult(i);r&&(window.clearInterval(this.intervalId),t(r))}catch(r){o<=0&&(window.clearInterval(this.intervalId),s(r)),o--}},this.pollTimeout)}path(t){const s=new URL(t,"http://localhost"),i=s.pathname,o=[...s.searchParams.entries()].reduce((r,[n,a])=>({...r,[n]:[a]}),{});return{path:i,queryParams:o,get:async(r={})=>this.get({path:i,params:{query:r?.query??o??{},header:r?.header??{}}}),post:async(r,n={})=>this.post({path:i,params:{query:n?.query??o??{},header:n?.header??{}},body:r}),patch:async(r,n={})=>this.patch({path:i,params:{query:n?.query??o??{},header:n?.header??{}},body:r}),put:async(r,n={})=>this.put({path:i,params:{query:n?.query??o??{},header:n?.header??{}},body:r}),delete:async(r,n={})=>this.delete({path:i,params:{query:n?.query??o??{},header:n?.header??{}},body:r})}}async get({path:t,params:s}){return this.execute({path:t,method:Gt.GET,params:s})}async post({path:t,params:s,body:i}){return this.execute({path:t,method:Gt.POST,body:i,params:s})}async patch({path:t,params:s,body:i}){return this.execute({path:t,method:Gt.PATCH,body:i,params:s})}async put({path:t,params:s,body:i}){return this.execute({path:t,method:Gt.PUT,body:i,params:s})}async delete({path:t,params:s,body:i}){return this.execute({path:t,method:Gt.DELETE,body:i,params:s})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};ie(Gt,"GET","GET"),ie(Gt,"POST","POST"),ie(Gt,"PATCH","PATCH"),ie(Gt,"PUT","PUT"),ie(Gt,"DELETE","DELETE");let Aa=Gt;class l2{constructor(t,s){ie(this,"falcon");ie(this,"definition");this.falcon=t,this.definition=s}async write(t,s){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:t,collection:this.definition.collection,data:s}})}async read(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:t,collection:this.definition.collection}})}async delete(t){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:t,collection:this.definition.collection}})}async search({filter:t,offset:s,sort:i,limit:o}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:t,limit:o,offset:s,sort:i,collection:this.definition.collection}})}}class c2{constructor(t){ie(this,"falcon");this.falcon=t}async write(t,s){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:t,tag:s?.tag,tagSource:s?.tagSource,testData:s?.testData}})}async query(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:t}})}async savedQuery(t){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:t}})}}const d2=["_self","_blank"];class u2{constructor(t){ie(this,"falcon");this.falcon=t}async navigateTo({path:t,type:s,target:i,metaKey:o,ctrlKey:r,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:t,type:s??"falcon",target:i??"_self",metaKey:o??!1,ctrlKey:r??!1,shiftKey:n??!1}})}async onClick(t,s="_self",i="falcon"){if(!(t instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in t))return;if(t.preventDefault(),!(t.target instanceof HTMLAnchorElement))throw Error(`event target is not an anchor element, ${t.target}`);const o=t.target.getAttribute("href");s=t.target.getAttribute("target")??s;const r=t.target.dataset?.type??i;if(s===null||!d2.includes(s))throw new Error("Target should be _self or _blank");const n=s;if(o==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:d}=t;await this.navigateTo({path:o,type:r,target:n,metaKey:a,ctrlKey:l,shiftKey:d})}}class h2{constructor(t){ie(this,"bridge");ie(this,"observer");this.bridge=t,this.observer=new ResizeObserver(s=>this.handleResizeEvent(s)),this.observer.observe(document.body)}handleResizeEvent(t){const{height:s}=t[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:s}})}destroy(){this.observer.disconnect()}}class p2{constructor(t){ie(this,"bridge");this.bridge=t}async openModal(t,s,i={}){const o=await this.bridge.postMessage({type:"openModal",payload:{extension:t,title:s,options:i}});if(o instanceof Error)throw o;return o}closeModal(t){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:t})}async uploadFile(t,s){return this.bridge.postMessage({type:"fileUpload",fileUploadType:t,payload:s})}}class Sl{constructor(){ie(this,"isConnected",!1);ie(this,"events",new vi);ie(this,"data");ie(this,"bridge",new Kx({onDataUpdate:t=>this.handleDataUpdate(t),onBroadcast:t=>this.handleBroadcastMessage(t),onLivereload:()=>this.handleLivereloadMessage()}));ie(this,"api",new zt(this));ie(this,"ui",new p2(this.bridge));ie(this,"resizeTracker");ie(this,"cloudFunctions",[]);ie(this,"apiIntegrations",[]);ie(this,"collections",[])}async connect(){const{origin:t,data:s}=await this.bridge.postMessage({type:"connect"});this.bridge.setOrigin(t),this.data=s,this.updateTheme(s?.theme),this.resizeTracker=new h2(this.bridge),this.isConnected=!0}get appId(){return this.data?.app.id}sendBroadcast(t){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:t})}handleDataUpdate(t){this.data=t.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(t){this.events.emit("broadcast",t.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(t){if(!t)return;const s=t==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(t),document.documentElement.classList.remove(s)}cloudFunction(t){Ze(this);const s=new Aa(this,t);return this.cloudFunctions.push(s),s}apiIntegration({definitionId:t,operationId:s}){if(Ze(this),!this.data)throw Error("Data from console is missing");const i=new a2(this,{operationId:s,definitionId:t??this.data?.app.id});return this.apiIntegrations.push(i),i}collection({collection:t}){Ze(this);const s=new l2(this,{collection:t});return this.collections.push(s),s}get navigation(){return Ze(this),new u2(this)}get logscale(){return Ze(this),new c2(this)}destroy(){this.cloudFunctions.forEach(t=>t.destroy()),this.resizeTracker?.destroy(),this.bridge.destroy()}}kt([Ct()],Sl.prototype,"navigation",null);kt([Ct()],Sl.prototype,"logscale",null);const f2={name:"Triage with MITRE ATTACK",description:"A sample app to demonstrate Mitre Triage and auto remediation features made in Vue.",logo:"",manifest_version:"2023-05-09",ignored:["CITATION.cff","CODE_OF_CONDUCT.md","LICENSE","SECURITY.md","SUPPORT.md","docs","shared","node_modules","yarn.lock","package.json","ui/node_modules","ui/shared/node_modules","ui/(extensions|pages)/[^\\/]*?/public","ui/(extensions|pages)/[^\\/]*?/index.html","ui/(extensions|pages)/[^\\/]*?/favicon.ico","ui/(extensions|pages)/.*?/node_modules","ui/(extensions|pages)/.*?/config","ui/(extensions|pages)/.*?/src","ui/(extensions|pages)/.*?/\\.gitignore","ui/(extensions|pages)/.*?/package\\.json","ui/(extensions|pages)/.*?/tsconfig\\.json","ui/(extensions|pages)/.*?/tsconfig\\..*\\.json","ui/(extensions|pages)/.*?/.*?\\.(md|log|lock|cjs)","ui/(extensions|pages)/.*?/*\\.ts","ui/(extensions|pages)/*\\.gz"],ui:{homepage:"pages.mitre-vue",extensions:[{name:"Triage App",description:"MITRE Auto Remediation",path:"ui/extensions/remediations/dist",entrypoint:"ui/extensions/remediations/dist/index.html",sockets:["activity.detections.details","crowdscore.incidents.details"],content_security_policy:{"connect-src":["self","data:","https://cdn.jsdelivr.net"],"style-src":["https://cdn.jsdelivr.net"],"style-src-elem":[],"script-src":["https://cdn.jsdelivr.net"],"form-action":[],"img-src":["https://cdn.jsdelivr.net","self","data:"],"media-src":[],"object-src":[]},permissions:[]}],pages:{"mitre-vue":{name:"mitre-vue",description:"MITRE App",path:"ui/pages/chart-vue/dist",entrypoint:"ui/pages/chart-vue/dist/index.html",content_security_policy:{"connect-src":["self","data:","https://cdn.jsdelivr.net"],"style-src":["https://cdn.jsdelivr.net"],"style-src-elem":[],"script-src":["https://cdn.jsdelivr.net"],"form-action":[],"img-src":["https://cdn.jsdelivr.net","self","data:"],"media-src":[],"object-src":[]},permissions:[]}},dashboards:{},navigation:{links:[{path:"/",name:"Mitre Chart",permissions:[],ref:"pages.mitre-vue"},{path:"/wizard",name:"Mitre - Configure Actions Wizard",permissions:[],ref:"pages.mitre-vue"},{path:"/notify-it",name:"Mitre - Configure Notify IT Action",permissions:[],ref:"pages.mitre-vue"},{path:"/notify-ir",name:"Mitre - Configure Notify IR Action",permissions:[],ref:"pages.mitre-vue"}]}},api_integrations:[],rtr_scripts:[],collections:[{name:"mitreAutoRemediationJira",description:"Auto remediation Jira Config Collection.",schema:"collections/mitre-auto-remediation-jira-schema.json",permissions:[],workflow_integration:null},{name:"mitreAutoRemediationCreatedIssues",description:"Auto remediation Created Issues history Collection.",schema:"collections/mitre-auto-remediation-created-schema.json",permissions:[],workflow_integration:null}],auth:{scopes:["alerts:read","detects:read","custom-storage:write","custom-storage:read","api-integrations:read","api-integrations:write"],permissions:{},roles:[]},functions:[],workflows:[],logscale:{saved_searches:[]}};class m2{constructor(){this.falcon=void 0}install(t){this.falcon=new Sl,t.provide(ht.FALCON_API,this.falcon),t.provide(ht.FALCON_API_GET_ORIGINS,()=>this.getOrigin()),t.provide(ht.FALCON_API_GET_APP_ID,()=>this.getAppId())}async connect(){try{await this.falcon?.connect()}catch(t){console.error(t)}}getOrigin(){const{targetOrigin:t}=this.falcon?.bridge;return t||self.location.origin}getAppId(){return this.falcon?.data?.app?.id??f2.app_id}get data(){return{cid:String(this.falcon?.data?.cid??""),dateFormat:"MMM. D, YYYY",locale:"en-us",theme:"theme-dark",timezone:"UTC",...this.falcon?.data}}}function g2(){return new m2}/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const Ta=typeof window<"u",Zs=(e,t=!1)=>t?Symbol.for(e):Symbol(e),b2=(e,t,s)=>y2({l:e,k:t,s}),y2=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),st=e=>typeof e=="number"&&isFinite(e),v2=e=>Nh(e)==="[object Date]",Zr=e=>Nh(e)==="[object RegExp]",En=e=>ge(e)&&Object.keys(e).length===0,gt=Object.assign;let dd;const Ho=()=>dd||(dd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ud(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const _2=Object.prototype.hasOwnProperty;function Al(e,t){return _2.call(e,t)}const Je=Array.isArray,et=e=>typeof e=="function",X=e=>typeof e=="string",Ke=e=>typeof e=="boolean",Te=e=>e!==null&&typeof e=="object",Fh=Object.prototype.toString,Nh=e=>Fh.call(e),ge=e=>{if(!Te(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},w2=e=>e==null?"":Je(e)||ge(e)&&e.toString===Fh?JSON.stringify(e,null,2):String(e);function x2(e,t=""){return e.reduce((s,i,o)=>o===0?s+i:s+t+i,"")}function Tl(e){let t=e;return()=>++t}function k2(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const C2=/\{([0-9a-zA-Z]+)\}/g;function E2(e,...t){return t.length===1&&$2(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(C2,(s,i)=>t.hasOwnProperty(i)?t[i]:"")}const $2=e=>e!==null&&typeof e=="object",dt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},S2={[dt.EXPECTED_TOKEN]:"Expected token: '{0}'",[dt.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[dt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[dt.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[dt.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[dt.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[dt.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[dt.EMPTY_PLACEHOLDER]:"Empty placeholder",[dt.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[dt.INVALID_LINKED_FORMAT]:"Invalid linked format",[dt.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[dt.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[dt.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[dt.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[dt.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[dt.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Uh(e,t,s={}){const{domain:i,messages:o,args:r}=s,n=E2((o||S2)[e]||"",...r||[]),a=new SyntaxError(String(n));return a.code=e,t&&(a.location=t),a.domain=i,a}/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function A2(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ho().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ho().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const ei=[];ei[0]={w:[0],i:[3,0],"[":[4],o:[7]};ei[1]={w:[1],".":[2],"[":[4],o:[7]};ei[2]={w:[2],i:[3,0],0:[3,0]};ei[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ei[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ei[5]={"'":[4,0],o:8,l:[5,0]};ei[6]={'"':[4,0],o:8,l:[6,0]};const T2=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function I2(e){return T2.test(e)}function z2(e){const t=e.charCodeAt(0),s=e.charCodeAt(e.length-1);return t===s&&(t===34||t===39)?e.slice(1,-1):e}function O2(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function L2(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:I2(t)?z2(t):"*"+t}function M2(e){const t=[];let s=-1,i=0,o=0,r,n,a,l,d,p,u;const f=[];f[0]=()=>{n===void 0?n=a:n+=a},f[1]=()=>{n!==void 0&&(t.push(n),n=void 0)},f[2]=()=>{f[0](),o++},f[3]=()=>{if(o>0)o--,i=4,f[0]();else{if(o=0,n===void 0||(n=L2(n),n===!1))return!1;f[1]()}};function m(){const g=e[s+1];if(i===5&&g==="'"||i===6&&g==='"')return s++,a="\\"+g,f[0](),!0}for(;i!==null;)if(s++,r=e[s],!(r==="\\"&&m())){if(l=O2(r),u=ei[i],d=u[l]||u.l||8,d===8||(i=d[0],d[1]!==void 0&&(p=f[d[1]],p&&(a=r,p()===!1))))return;if(i===7)return t}}const hd=new Map;function R2(e,t){return Te(e)?e[t]:null}function D2(e,t){if(!Te(e))return null;let s=hd.get(t);if(s||(s=M2(t),s&&hd.set(t,s)),!s)return null;const i=s.length;let o=e,r=0;for(;r<i;){const n=o[s[r]];if(n===void 0)return null;o=n,r++}return o}const P2=e=>e,V2=e=>"",F2="text",N2=e=>e.length===0?"":x2(e),U2=w2;function pd(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function B2(e){const t=st(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(st(e.named.count)||st(e.named.n))?st(e.named.count)?e.named.count:st(e.named.n)?e.named.n:t:t}function H2(e,t){t.count||(t.count=e),t.n||(t.n=e)}function j2(e={}){const t=e.locale,s=B2(e),i=Te(e.pluralRules)&&X(t)&&et(e.pluralRules[t])?e.pluralRules[t]:pd,o=Te(e.pluralRules)&&X(t)&&et(e.pluralRules[t])?pd:void 0,r=$=>$[i(s,$.length,o)],n=e.list||[],a=$=>n[$],l=e.named||{};st(e.pluralIndex)&&H2(s,l);const d=$=>l[$];function p($){const k=et(e.messages)?e.messages($):Te(e.messages)?e.messages[$]:!1;return k||(e.parent?e.parent.message($):V2)}const u=$=>e.modifiers?e.modifiers[$]:P2,f=ge(e.processor)&&et(e.processor.normalize)?e.processor.normalize:N2,m=ge(e.processor)&&et(e.processor.interpolate)?e.processor.interpolate:U2,g=ge(e.processor)&&X(e.processor.type)?e.processor.type:F2,A={list:a,named:d,plural:r,linked:($,...k)=>{const[T,y]=k;let x="text",C="";k.length===1?Te(T)?(C=T.modifier||C,x=T.type||x):X(T)&&(C=T||C):k.length===2&&(X(T)&&(C=T||C),X(y)&&(x=y||x));const F=p($)(A),D=x==="vnode"&&Je(F)&&C?F[0]:F;return C?u(C)(D,x):D},message:p,type:g,interpolate:m,normalize:f,values:gt({},n,l)};return A}let jo=null;function W2(e){jo=e}function K2(e,t,s){jo&&jo.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:s})}const q2=G2("function:translate");function G2(e){return t=>jo&&jo.emit(e,t)}const Y2={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function Il(e,t){return t.locale!=null?fd(t.locale):fd(e.locale)}let ea;function fd(e){return X(e)?e:ea!=null&&e.resolvedOnce?ea:ea=e()}function X2(e,t,s){return[...new Set([s,...Je(t)?t:Te(t)?Object.keys(t):X(t)?[t]:[s]])]}function Bh(e,t,s){const i=X(s)?s:en,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let r=o.__localeChainCache.get(i);if(!r){r=[];let n=[s];for(;Je(n);)n=md(r,n,t);const a=Je(t)||!ge(t)?t:t.default?t.default:null;n=X(a)?[a]:a,Je(n)&&md(r,n,!1),o.__localeChainCache.set(i,r)}return r}function md(e,t,s){let i=!0;for(let o=0;o<t.length&&Ke(i);o++){const r=t[o];X(r)&&(i=J2(e,t[o],s))}return i}function J2(e,t,s){let i;const o=t.split("-");do{const r=o.join("-");i=Q2(e,r,s),o.splice(-1,1)}while(o.length&&i===!0);return i}function Q2(e,t,s){let i=!1;if(!e.includes(t)&&(i=!0,t)){i=t[t.length-1]!=="!";const o=t.replace(/!/g,"");e.push(o),(Je(s)||ge(s))&&s[o]&&(i=s[o])}return i}const Z2="9.5.0",$n=-1,en="en-US",gd="",bd=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function ek(){return{upper:(e,t)=>t==="text"&&X(e)?e.toUpperCase():t==="vnode"&&Te(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&X(e)?e.toLowerCase():t==="vnode"&&Te(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&X(e)?bd(e):t==="vnode"&&Te(e)&&"__v_isVNode"in e?bd(e.children):e}}let tk,Hh;function sk(e){Hh=e}let jh;function ik(e){jh=e}let Wh=null;const yd=e=>{Wh=e},ok=()=>Wh;let Kh=null;const vd=e=>{Kh=e},rk=()=>Kh;let _d=0;function nk(e={}){const t=et(e.onWarn)?e.onWarn:k2,s=X(e.version)?e.version:Z2,i=X(e.locale)||et(e.locale)?e.locale:en,o=et(i)?en:i,r=Je(e.fallbackLocale)||ge(e.fallbackLocale)||X(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:o,n=ge(e.messages)?e.messages:{[o]:{}},a=ge(e.datetimeFormats)?e.datetimeFormats:{[o]:{}},l=ge(e.numberFormats)?e.numberFormats:{[o]:{}},d=gt({},e.modifiers||{},ek()),p=e.pluralRules||{},u=et(e.missing)?e.missing:null,f=Ke(e.missingWarn)||Zr(e.missingWarn)?e.missingWarn:!0,m=Ke(e.fallbackWarn)||Zr(e.fallbackWarn)?e.fallbackWarn:!0,g=!!e.fallbackFormat,v=!!e.unresolving,A=et(e.postTranslation)?e.postTranslation:null,$=ge(e.processor)?e.processor:null,k=Ke(e.warnHtmlMessage)?e.warnHtmlMessage:!0,T=!!e.escapeParameter,y=et(e.messageCompiler)?e.messageCompiler:tk,x=et(e.messageResolver)?e.messageResolver:Hh||R2,C=et(e.localeFallbacker)?e.localeFallbacker:jh||X2,F=Te(e.fallbackContext)?e.fallbackContext:void 0,D=e,L=Te(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,R=Te(D.__numberFormatters)?D.__numberFormatters:new Map,ce=Te(D.__meta)?D.__meta:{};_d++;const te={version:s,cid:_d,locale:i,fallbackLocale:r,messages:n,modifiers:d,pluralRules:p,missing:u,missingWarn:f,fallbackWarn:m,fallbackFormat:g,unresolving:v,postTranslation:A,processor:$,warnHtmlMessage:k,escapeParameter:T,messageCompiler:y,messageResolver:x,localeFallbacker:C,fallbackContext:F,onWarn:t,__meta:ce};return te.datetimeFormats=a,te.numberFormats=l,te.__datetimeFormatters=L,te.__numberFormatters=R,__INTLIFY_PROD_DEVTOOLS__&&K2(te,s,ce),te}function zl(e,t,s,i,o){const{missing:r,onWarn:n}=e;if(r!==null){const a=r(e,s,t,o);return X(a)?a:t}else return t}function mo(e,t,s){const i=e;i.__localeChainCache=new Map,e.localeFallbacker(e,s,t)}const qh=dt.__EXTEND_POINT__,Cr=Tl(qh),ui={INVALID_ARGUMENT:qh,INVALID_DATE_ARGUMENT:Cr(),INVALID_ISO_DATE_ARGUMENT:Cr(),NOT_SUPPORT_NON_STRING_MESSAGE:Cr(),__EXTEND_POINT__:Cr()};function Ri(e){return Uh(e,null,void 0)}const Wo=e=>Te(e)&&(e.t===0||e.type===0)&&("b"in e||"body"in e),wd=()=>"",es=e=>et(e);function xd(e,...t){const{fallbackFormat:s,postTranslation:i,unresolving:o,messageCompiler:r,fallbackLocale:n,messages:a}=e,[l,d]=Ia(...t),p=Ke(d.missingWarn)?d.missingWarn:e.missingWarn,u=Ke(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,f=Ke(d.escapeParameter)?d.escapeParameter:e.escapeParameter,m=!!d.resolvedMessage,g=X(d.default)||Ke(d.default)?Ke(d.default)?r?l:()=>l:d.default:s?r?l:()=>l:"",v=s||g!=="",A=Il(e,d);f&&ak(d);let[$,k,T]=m?[l,A,a[A]||{}]:Gh(e,l,A,n,u,p),y=$,x=l;if(!m&&!(X(y)||Wo(y)||es(y))&&v&&(y=g,x=y),!m&&(!(X(y)||Wo(y)||es(y))||!X(k)))return o?$n:l;let C=!1;const F=()=>{C=!0},D=es(y)?y:Yh(e,l,k,y,x,F);if(C)return y;const L=dk(e,k,T,d),R=j2(L),ce=lk(e,D,R),te=i?i(ce,l):ce;if(__INTLIFY_PROD_DEVTOOLS__){const xe={timestamp:Date.now(),key:X(l)?l:es(y)?y.key:"",locale:k||(es(y)?y.locale:""),format:X(y)?y:es(y)?y.source:"",message:te};xe.meta=gt({},e.__meta,ok()||{}),q2(xe)}return te}function ak(e){Je(e.list)?e.list=e.list.map(t=>X(t)?ud(t):t):Te(e.named)&&Object.keys(e.named).forEach(t=>{X(e.named[t])&&(e.named[t]=ud(e.named[t]))})}function Gh(e,t,s,i,o,r){const{messages:n,onWarn:a,messageResolver:l,localeFallbacker:d}=e,p=d(e,i,s);let u={},f,m=null;const g="translate";for(let v=0;v<p.length&&(f=p[v],u=n[f]||{},(m=l(u,t))===null&&(m=u[t]),!(X(m)||Wo(m)||es(m)));v++){const A=zl(e,t,f,r,g);A!==t&&(m=A)}return[m,f,u]}function Yh(e,t,s,i,o,r){const{messageCompiler:n,warnHtmlMessage:a}=e;if(es(i)){const d=i;return d.locale=d.locale||s,d.key=d.key||t,d}if(n==null){const d=()=>i;return d.locale=s,d.key=t,d}const l=n(i,ck(e,s,o,i,a,r));return l.locale=s,l.key=t,l.source=i,l}function lk(e,t,s){return t(s)}function Ia(...e){const[t,s,i]=e,o={};if(!X(t)&&!st(t)&&!es(t)&&!Wo(t))throw Ri(ui.INVALID_ARGUMENT);const r=st(t)?String(t):(es(t),t);return st(s)?o.plural=s:X(s)?o.default=s:ge(s)&&!En(s)?o.named=s:Je(s)&&(o.list=s),st(i)?o.plural=i:X(i)?o.default=i:ge(i)&&gt(o,i),[r,o]}function ck(e,t,s,i,o,r){return{locale:t,key:s,warnHtmlMessage:o,onError:n=>{throw r&&r(n),n},onCacheKey:n=>b2(t,s,n)}}function dk(e,t,s,i){const{modifiers:o,pluralRules:r,messageResolver:n,fallbackLocale:a,fallbackWarn:l,missingWarn:d,fallbackContext:p}=e,f={locale:t,modifiers:o,pluralRules:r,messages:m=>{let g=n(s,m);if(g==null&&p){const[,,v]=Gh(p,m,t,a,l,d);g=n(v,m)}if(X(g)||Wo(g)){let v=!1;const $=Yh(e,m,t,g,m,()=>{v=!0});return v?wd:$}else return es(g)?g:wd}};return e.processor&&(f.processor=e.processor),i.list&&(f.list=i.list),i.named&&(f.named=i.named),st(i.plural)&&(f.pluralIndex=i.plural),f}function kd(e,...t){const{datetimeFormats:s,unresolving:i,fallbackLocale:o,onWarn:r,localeFallbacker:n}=e,{__datetimeFormatters:a}=e,[l,d,p,u]=za(...t),f=Ke(p.missingWarn)?p.missingWarn:e.missingWarn;Ke(p.fallbackWarn)?p.fallbackWarn:e.fallbackWarn;const m=!!p.part,g=Il(e,p),v=n(e,o,g);if(!X(l)||l==="")return new Intl.DateTimeFormat(g,u).format(d);let A={},$,k=null;const T="datetime format";for(let C=0;C<v.length&&($=v[C],A=s[$]||{},k=A[l],!ge(k));C++)zl(e,l,$,f,T);if(!ge(k)||!X($))return i?$n:l;let y=`${$}__${l}`;En(u)||(y=`${y}__${JSON.stringify(u)}`);let x=a.get(y);return x||(x=new Intl.DateTimeFormat($,gt({},k,u)),a.set(y,x)),m?x.formatToParts(d):x.format(d)}const Xh=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function za(...e){const[t,s,i,o]=e,r={};let n={},a;if(X(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Ri(ui.INVALID_ISO_DATE_ARGUMENT);const d=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(d);try{a.toISOString()}catch{throw Ri(ui.INVALID_ISO_DATE_ARGUMENT)}}else if(v2(t)){if(isNaN(t.getTime()))throw Ri(ui.INVALID_DATE_ARGUMENT);a=t}else if(st(t))a=t;else throw Ri(ui.INVALID_ARGUMENT);return X(s)?r.key=s:ge(s)&&Object.keys(s).forEach(l=>{Xh.includes(l)?n[l]=s[l]:r[l]=s[l]}),X(i)?r.locale=i:ge(i)&&(n=i),ge(o)&&(n=o),[r.key||"",a,r,n]}function Cd(e,t,s){const i=e;for(const o in s){const r=`${t}__${o}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Ed(e,...t){const{numberFormats:s,unresolving:i,fallbackLocale:o,onWarn:r,localeFallbacker:n}=e,{__numberFormatters:a}=e,[l,d,p,u]=Oa(...t),f=Ke(p.missingWarn)?p.missingWarn:e.missingWarn;Ke(p.fallbackWarn)?p.fallbackWarn:e.fallbackWarn;const m=!!p.part,g=Il(e,p),v=n(e,o,g);if(!X(l)||l==="")return new Intl.NumberFormat(g,u).format(d);let A={},$,k=null;const T="number format";for(let C=0;C<v.length&&($=v[C],A=s[$]||{},k=A[l],!ge(k));C++)zl(e,l,$,f,T);if(!ge(k)||!X($))return i?$n:l;let y=`${$}__${l}`;En(u)||(y=`${y}__${JSON.stringify(u)}`);let x=a.get(y);return x||(x=new Intl.NumberFormat($,gt({},k,u)),a.set(y,x)),m?x.formatToParts(d):x.format(d)}const Jh=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Oa(...e){const[t,s,i,o]=e,r={};let n={};if(!st(t))throw Ri(ui.INVALID_ARGUMENT);const a=t;return X(s)?r.key=s:ge(s)&&Object.keys(s).forEach(l=>{Jh.includes(l)?n[l]=s[l]:r[l]=s[l]}),X(i)?r.locale=i:ge(i)&&(n=i),ge(o)&&(n=o),[r.key||"",a,r,n]}function $d(e,t,s){const i=e;for(const o in s){const r=`${t}__${o}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}A2();/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const uk="9.5.0";function hk(){typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ho().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ho().__INTLIFY_PROD_DEVTOOLS__=!1)}const Qh=Y2.__EXTEND_POINT__,Vs=Tl(Qh);Vs(),Vs(),Vs(),Vs(),Vs(),Vs(),Vs(),Vs();const Zh=ui.__EXTEND_POINT__,Et=Tl(Zh),Nt={UNEXPECTED_RETURN_TYPE:Zh,INVALID_ARGUMENT:Et(),MUST_BE_CALL_SETUP_TOP:Et(),NOT_INSTALLED:Et(),NOT_AVAILABLE_IN_LEGACY_MODE:Et(),REQUIRED_VALUE:Et(),INVALID_VALUE:Et(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Et(),NOT_INSTALLED_WITH_PROVIDE:Et(),UNEXPECTED_ERROR:Et(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Et(),BRIDGE_SUPPORT_VUE_2_ONLY:Et(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Et(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Et(),__EXTEND_POINT__:Et()};function Xt(e,...t){return Uh(e,null,void 0)}const La=Zs("__translateVNode"),Ma=Zs("__datetimeParts"),Ra=Zs("__numberParts"),pk=Zs("__setPluralRules"),fk=Zs("__injectWithOption"),Da=Zs("__dispose");function Pa(e){if(!Te(e))return e;for(const t in e)if(Al(e,t))if(!t.includes("."))Te(e[t])&&Pa(e[t]);else{const s=t.split("."),i=s.length-1;let o=e,r=!1;for(let n=0;n<i;n++){if(s[n]in o||(o[s[n]]={}),!Te(o[s[n]])){r=!0;break}o=o[s[n]]}r||(o[s[i]]=e[t],delete e[t]),Te(o[s[i]])&&Pa(o[s[i]])}return e}function ep(e,t){const{messages:s,__i18n:i,messageResolver:o,flatJson:r}=t,n=ge(s)?s:Je(i)?{}:{[e]:{}};if(Je(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:d}=a;l?(n[l]=n[l]||{},To(d,n[l])):To(d,n)}else X(a)&&To(JSON.parse(a),n)}),o==null&&r)for(const a in n)Al(n,a)&&Pa(n[a]);return n}const Er=e=>!Te(e)||Je(e);function To(e,t){if(Er(e)||Er(t))throw Xt(Nt.INVALID_VALUE);for(const s in e)Al(e,s)&&(Er(e[s])||Er(t[s])?t[s]=e[s]:To(e[s],t[s]))}function tp(e){return e.type}function mk(e,t,s){let i=Te(t.messages)?t.messages:{};"__i18nGlobal"in s&&(i=ep(e.locale.value,{messages:i,__i18n:s.__i18nGlobal}));const o=Object.keys(i);o.length&&o.forEach(r=>{e.mergeLocaleMessage(r,i[r])});{if(Te(t.datetimeFormats)){const r=Object.keys(t.datetimeFormats);r.length&&r.forEach(n=>{e.mergeDateTimeFormat(n,t.datetimeFormats[n])})}if(Te(t.numberFormats)){const r=Object.keys(t.numberFormats);r.length&&r.forEach(n=>{e.mergeNumberFormat(n,t.numberFormats[n])})}}}function Sd(e){return Pe(or,null,e,0)}const Ad="__INTLIFY_META__";let Td=0;function Id(e){return(t,s,i,o)=>e(s,i,vl()||void 0,o)}const gk=()=>{const e=vl();let t=null;return e&&(t=tp(e)[Ad])?{[Ad]:t}:null};function sp(e={},t){const{__root:s,__injectWithOption:i}=e,o=s===void 0;let r=Ke(e.inheritLocale)?e.inheritLocale:!0;const n=ze(s&&r?s.locale.value:X(e.locale)?e.locale:en),a=ze(s&&r?s.fallbackLocale.value:X(e.fallbackLocale)||Je(e.fallbackLocale)||ge(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n.value),l=ze(ep(n.value,e)),d=ze(ge(e.datetimeFormats)?e.datetimeFormats:{[n.value]:{}}),p=ze(ge(e.numberFormats)?e.numberFormats:{[n.value]:{}});let u=s?s.missingWarn:Ke(e.missingWarn)||Zr(e.missingWarn)?e.missingWarn:!0,f=s?s.fallbackWarn:Ke(e.fallbackWarn)||Zr(e.fallbackWarn)?e.fallbackWarn:!0,m=s?s.fallbackRoot:Ke(e.fallbackRoot)?e.fallbackRoot:!0,g=!!e.fallbackFormat,v=et(e.missing)?e.missing:null,A=et(e.missing)?Id(e.missing):null,$=et(e.postTranslation)?e.postTranslation:null,k=s?s.warnHtmlMessage:Ke(e.warnHtmlMessage)?e.warnHtmlMessage:!0,T=!!e.escapeParameter;const y=s?s.modifiers:ge(e.modifiers)?e.modifiers:{};let x=e.pluralRules||s&&s.pluralRules,C;C=(()=>{o&&vd(null);const w={version:uk,locale:n.value,fallbackLocale:a.value,messages:l.value,modifiers:y,pluralRules:x,missing:A===null?void 0:A,missingWarn:u,fallbackWarn:f,fallbackFormat:g,unresolving:!0,postTranslation:$===null?void 0:$,warnHtmlMessage:k,escapeParameter:T,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};w.datetimeFormats=d.value,w.numberFormats=p.value,w.__datetimeFormatters=ge(C)?C.__datetimeFormatters:void 0,w.__numberFormatters=ge(C)?C.__numberFormatters:void 0;const E=nk(w);return o&&vd(E),E})(),mo(C,n.value,a.value);function D(){return[n.value,a.value,l.value,d.value,p.value]}const L=Re({get:()=>n.value,set:w=>{n.value=w,C.locale=n.value}}),R=Re({get:()=>a.value,set:w=>{a.value=w,C.fallbackLocale=a.value,mo(C,n.value,w)}}),ce=Re(()=>l.value),te=Re(()=>d.value),xe=Re(()=>p.value);function Ee(){return et($)?$:null}function fe(w){$=w,C.postTranslation=w}function q(){return v}function se(w){w!==null&&(A=Id(w)),v=w,C.missing=A}const le=(w,E,Q,ee,$e,_e)=>{D();let Me;try{__INTLIFY_PROD_DEVTOOLS__&&yd(gk()),o||(C.fallbackContext=s?rk():void 0),Me=w(C)}finally{__INTLIFY_PROD_DEVTOOLS__&&yd(null),o||(C.fallbackContext=void 0)}if(st(Me)&&Me===$n){const[Ot,ti]=E();return s&&m?ee(s):$e(Ot)}else{if(_e(Me))return Me;throw Xt(Nt.UNEXPECTED_RETURN_TYPE)}};function ne(...w){return le(E=>Reflect.apply(xd,null,[E,...w]),()=>Ia(...w),"translate",E=>Reflect.apply(E.t,E,[...w]),E=>E,E=>X(E))}function Oe(...w){const[E,Q,ee]=w;if(ee&&!Te(ee))throw Xt(Nt.INVALID_ARGUMENT);return ne(E,Q,gt({resolvedMessage:!0},ee||{}))}function ks(...w){return le(E=>Reflect.apply(kd,null,[E,...w]),()=>za(...w),"datetime format",E=>Reflect.apply(E.d,E,[...w]),()=>gd,E=>X(E))}function qt(...w){return le(E=>Reflect.apply(Ed,null,[E,...w]),()=>Oa(...w),"number format",E=>Reflect.apply(E.n,E,[...w]),()=>gd,E=>X(E))}function rr(w){return w.map(E=>X(E)||st(E)||Ke(E)?Sd(String(E)):E)}const Sn={normalize:rr,interpolate:w=>w,type:"vnode"};function Qt(...w){return le(E=>{let Q;const ee=E;try{ee.processor=Sn,Q=Reflect.apply(xd,null,[ee,...w])}finally{ee.processor=null}return Q},()=>Ia(...w),"translate",E=>E[La](...w),E=>[Sd(E)],E=>Je(E))}function Ei(...w){return le(E=>Reflect.apply(Ed,null,[E,...w]),()=>Oa(...w),"number format",E=>E[Ra](...w),()=>[],E=>X(E)||Je(E))}function nr(...w){return le(E=>Reflect.apply(kd,null,[E,...w]),()=>za(...w),"datetime format",E=>E[Ma](...w),()=>[],E=>X(E)||Je(E))}function Rs(w){x=w,C.pluralRules=x}function io(w,E){if(!w)return!1;const Q=X(E)?E:n.value,ee=_(Q);return C.messageResolver(ee,w)!==null}function oo(w){let E=null;const Q=Bh(C,a.value,n.value);for(let ee=0;ee<Q.length;ee++){const $e=l.value[Q[ee]]||{},_e=C.messageResolver($e,w);if(_e!=null){E=_e;break}}return E}function b(w){const E=oo(w);return E??(s?s.tm(w)||{}:{})}function _(w){return l.value[w]||{}}function S(w,E){l.value[w]=E,C.messages=l.value}function z(w,E){l.value[w]=l.value[w]||{},To(E,l.value[w]),C.messages=l.value}function I(w){return d.value[w]||{}}function V(w,E){d.value[w]=E,C.datetimeFormats=d.value,Cd(C,w,E)}function W(w,E){d.value[w]=gt(d.value[w]||{},E),C.datetimeFormats=d.value,Cd(C,w,E)}function P(w){return p.value[w]||{}}function B(w,E){p.value[w]=E,C.numberFormats=p.value,$d(C,w,E)}function M(w,E){p.value[w]=gt(p.value[w]||{},E),C.numberFormats=p.value,$d(C,w,E)}Td++,s&&Ta&&(pi(s.locale,w=>{r&&(n.value=w,C.locale=w,mo(C,n.value,a.value))}),pi(s.fallbackLocale,w=>{r&&(a.value=w,C.fallbackLocale=w,mo(C,n.value,a.value))}));const K={id:Td,locale:L,fallbackLocale:R,get inheritLocale(){return r},set inheritLocale(w){r=w,w&&s&&(n.value=s.locale.value,a.value=s.fallbackLocale.value,mo(C,n.value,a.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:ce,get modifiers(){return y},get pluralRules(){return x||{}},get isGlobal(){return o},get missingWarn(){return u},set missingWarn(w){u=w,C.missingWarn=u},get fallbackWarn(){return f},set fallbackWarn(w){f=w,C.fallbackWarn=f},get fallbackRoot(){return m},set fallbackRoot(w){m=w},get fallbackFormat(){return g},set fallbackFormat(w){g=w,C.fallbackFormat=g},get warnHtmlMessage(){return k},set warnHtmlMessage(w){k=w,C.warnHtmlMessage=w},get escapeParameter(){return T},set escapeParameter(w){T=w,C.escapeParameter=w},t:ne,getLocaleMessage:_,setLocaleMessage:S,mergeLocaleMessage:z,getPostTranslationHandler:Ee,setPostTranslationHandler:fe,getMissingHandler:q,setMissingHandler:se,[pk]:Rs};return K.datetimeFormats=te,K.numberFormats=xe,K.rt=Oe,K.te=io,K.tm=b,K.d=ks,K.n=qt,K.getDateTimeFormat=I,K.setDateTimeFormat=V,K.mergeDateTimeFormat=W,K.getNumberFormat=P,K.setNumberFormat=B,K.mergeNumberFormat=M,K[fk]=i,K[La]=Qt,K[Ma]=nr,K[Ra]=Ei,K}const Ol={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function bk({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((i,o)=>[...i,...o.type===_t?o.children:[o]],[]):t.reduce((s,i)=>{const o=e[i];return o&&(s[i]=o()),s},{})}function ip(e){return _t}const yk=It({name:"i18n-t",props:gt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>st(e)||!isNaN(e)}},Ol),setup(e,t){const{slots:s,attrs:i}=t,o=e.i18n||Ll({useScope:e.scope,__useComponent:!0});return()=>{const r=Object.keys(s).filter(u=>u!=="_"),n={};e.locale&&(n.locale=e.locale),e.plural!==void 0&&(n.plural=X(e.plural)?+e.plural:e.plural);const a=bk(t,r),l=o[La](e.keypath,a,n),d=gt({},i),p=X(e.tag)||Te(e.tag)?e.tag:ip();return gh(p,d,l)}}}),zd=yk;function vk(e){return Je(e)&&!X(e[0])}function op(e,t,s,i){const{slots:o,attrs:r}=t;return()=>{const n={part:!0};let a={};e.locale&&(n.locale=e.locale),X(e.format)?n.key=e.format:Te(e.format)&&(X(e.format.key)&&(n.key=e.format.key),a=Object.keys(e.format).reduce((f,m)=>s.includes(m)?gt({},f,{[m]:e.format[m]}):f,{}));const l=i(e.value,n,a);let d=[n.key];Je(l)?d=l.map((f,m)=>{const g=o[f.type],v=g?g({[f.type]:f.value,index:m,parts:l}):[f.value];return vk(v)&&(v[0].key=`${f.type}-${m}`),v}):X(l)&&(d=[l]);const p=gt({},r),u=X(e.tag)||Te(e.tag)?e.tag:ip();return gh(u,p,d)}}const _k=It({name:"i18n-n",props:gt({value:{type:Number,required:!0},format:{type:[String,Object]}},Ol),setup(e,t){const s=e.i18n||Ll({useScope:"parent",__useComponent:!0});return op(e,t,Jh,(...i)=>s[Ra](...i))}}),Od=_k,wk=It({name:"i18n-d",props:gt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ol),setup(e,t){const s=e.i18n||Ll({useScope:"parent",__useComponent:!0});return op(e,t,Xh,(...i)=>s[Ma](...i))}}),Ld=wk;function xk(e,t){const s=e;if(e.mode==="composition")return s.__getInstance(t)||e.global;{const i=s.__getInstance(t);return i!=null?i.__composer:e.global.__composer}}function kk(e){const t=n=>{const{instance:a,modifiers:l,value:d}=n;if(!a||!a.$)throw Xt(Nt.UNEXPECTED_ERROR);const p=xk(e,a.$),u=Md(d);return[Reflect.apply(p.t,p,[...Rd(u)]),p]};return{created:(n,a)=>{const[l,d]=t(a);Ta&&e.global===d&&(n.__i18nWatcher=pi(d.locale,()=>{a.instance&&a.instance.$forceUpdate()})),n.__composer=d,n.textContent=l},unmounted:n=>{Ta&&n.__i18nWatcher&&(n.__i18nWatcher(),n.__i18nWatcher=void 0,delete n.__i18nWatcher),n.__composer&&(n.__composer=void 0,delete n.__composer)},beforeUpdate:(n,{value:a})=>{if(n.__composer){const l=n.__composer,d=Md(a);n.textContent=Reflect.apply(l.t,l,[...Rd(d)])}},getSSRProps:n=>{const[a]=t(n);return{textContent:a}}}}function Md(e){if(X(e))return{path:e};if(ge(e)){if(!("path"in e))throw Xt(Nt.REQUIRED_VALUE,"path");return e}else throw Xt(Nt.INVALID_VALUE)}function Rd(e){const{path:t,locale:s,args:i,choice:o,plural:r}=e,n={},a=i||{};return X(s)&&(n.locale=s),st(o)&&(n.plural=o),st(r)&&(n.plural=r),[t,a,n]}function Ck(e,t,...s){const i=ge(s[0])?s[0]:{},o=!!i.useI18nComponentName;(Ke(i.globalInstall)?i.globalInstall:!0)&&([o?"i18n":zd.name,"I18nT"].forEach(n=>e.component(n,zd)),[Od.name,"I18nN"].forEach(n=>e.component(n,Od)),[Ld.name,"I18nD"].forEach(n=>e.component(n,Ld))),e.directive("t",kk(t))}const Ek=Zs("global-vue-i18n");function $k(e={},t){const s=Ke(e.globalInjection)?e.globalInjection:!0,i=!0,o=new Map,[r,n]=Sk(e),a=Zs("");function l(u){return o.get(u)||null}function d(u,f){o.set(u,f)}function p(u){o.delete(u)}{const u={get mode(){return"composition"},get allowComposition(){return i},async install(f,...m){if(f.__VUE_I18N_SYMBOL__=a,f.provide(f.__VUE_I18N_SYMBOL__,u),ge(m[0])){const A=m[0];u.__composerExtend=A.__composerExtend,u.__vueI18nExtend=A.__vueI18nExtend}let g=null;s&&(g=Rk(f,u.global)),Ck(f,u,...m);const v=f.unmount;f.unmount=()=>{g&&g(),u.dispose(),v()}},get global(){return n},dispose(){r.stop()},__instances:o,__getInstance:l,__setInstance:d,__deleteInstance:p};return u}}function Ll(e={}){const t=vl();if(t==null)throw Xt(Nt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw Xt(Nt.NOT_INSTALLED);const s=Ak(t),i=Ik(s),o=tp(t),r=Tk(e,o);if(r==="global")return mk(i,e,o),i;if(r==="parent"){let l=zk(s,t,e.__useComponent);return l==null&&(l=i),l}const n=s;let a=n.__getInstance(t);if(a==null){const l=gt({},e);"__i18n"in o&&(l.__i18n=o.__i18n),i&&(l.__root=i),a=sp(l),n.__composerExtend&&(a[Da]=n.__composerExtend(a)),Lk(n,t,a),n.__setInstance(t,a)}return a}function Sk(e,t,s){const i=il();{const o=i.run(()=>sp(e));if(o==null)throw Xt(Nt.UNEXPECTED_ERROR);return[i,o]}}function Ak(e){{const t=it(e.isCE?Ek:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw Xt(e.isCE?Nt.NOT_INSTALLED_WITH_PROVIDE:Nt.UNEXPECTED_ERROR);return t}}function Tk(e,t){return En(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function Ik(e){return e.mode==="composition"?e.global:e.global.__composer}function zk(e,t,s=!1){let i=null;const o=t.root;let r=Ok(t,s);for(;r!=null;){const n=e;if(e.mode==="composition"&&(i=n.__getInstance(r)),i!=null||o===r)break;r=r.parent}return i}function Ok(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function Lk(e,t,s){fl(()=>{},t),ml(()=>{const i=s;e.__deleteInstance(t);const o=i[Da];o&&(o(),delete i[Da])},t)}const Mk=["locale","fallbackLocale","availableLocales"],Dd=["t","rt","d","n","tm","te"];function Rk(e,t){const s=Object.create(null);return Mk.forEach(o=>{const r=Object.getOwnPropertyDescriptor(t,o);if(!r)throw Xt(Nt.UNEXPECTED_ERROR);const n=Be(r.value)?{get(){return r.value.value},set(a){r.value.value=a}}:{get(){return r.get&&r.get()}};Object.defineProperty(s,o,n)}),e.config.globalProperties.$i18n=s,Dd.forEach(o=>{const r=Object.getOwnPropertyDescriptor(t,o);if(!r||!r.value)throw Xt(Nt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,r)}),()=>{delete e.config.globalProperties.$i18n,Dd.forEach(o=>{delete e.config.globalProperties[`$${o}`]})}}hk();sk(D2);ik(Bh);if(__INTLIFY_PROD_DEVTOOLS__){const e=Ho();e.__INTLIFY__=!0,W2(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}class Dk{constructor(t,s=Gr){this.i18nConfig=void 0,this.i18nConfig=$k(this.getConfig(t,s))}getConfig(t,s=Gr){const i={trend:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0},detections:{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0},detectionsCompact:{style:"decimal",notation:"compact",minimumFractionDigits:0,maximumFractionDigits:0}},o={secondRange:{hour:"2-digit",minute:"2-digit",second:"2-digit"},hourRange:{hour:"2-digit",minute:"2-digit"},dateRange:{month:"short",day:"numeric"},overviewDate:{month:"short",day:"numeric",year:"numeric"},fullDateTime:{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",year:"2-digit"}},r={locale:t,fallbackLocale:"en-us",messages:s,allowComposition:!0,legacy:!1,numberFormats:{"en-US":i,[t]:i},datetimeFormats:{"en-US":o,[t]:o}};return r.numberFormats[t]=r.numberFormats[t]??r.numberFormats["en-US"],r}install(t){t.provide(ht.I18N,this.i18nConfig?.global)}}function Pk(e,t=Gr){return new Dk(e,t)}(async()=>{const e=bh(Lx);e.config.compilerOptions.isCustomElement=s=>s.startsWith("sl-");const t=g2();e.use(Dx()),e.use(t),e.use(K_()),await t.connect(),e.use(Pk(t.data.locale,Gr)),e.mount("#app")})();
