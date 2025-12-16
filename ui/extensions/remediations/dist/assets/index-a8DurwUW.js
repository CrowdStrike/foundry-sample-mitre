var Kp=Object.defineProperty;var qp=(t,e,s)=>e in t?Kp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var rt=(t,e,s)=>qp(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=globalThis,ll=jo.ShadowRoot&&(jo.ShadyCSS===void 0||jo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cl=Symbol(),ac=new WeakMap;let uu=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==cl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(ll&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=ac.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ac.set(s,e))}return e}toString(){return this.cssText}};const Gp=t=>new uu(typeof t=="string"?t:t+"",void 0,cl),st=(t,...e)=>{const s=t.length===1?t[0]:e.reduce(((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new uu(s,t,cl)},Yp=(t,e)=>{if(ll)t.adoptedStyleSheets=e.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet));else for(const s of e){const i=document.createElement("style"),r=jo.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},lc=ll?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Gp(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xp,defineProperty:Jp,getOwnPropertyDescriptor:Qp,getOwnPropertyNames:Zp,getOwnPropertySymbols:tf,getPrototypeOf:ef}=Object,kn=globalThis,cc=kn.trustedTypes,sf=cc?cc.emptyScript:"",rf=kn.reactiveElementPolyfillSupport,Rr=(t,e)=>t,nr={toAttribute(t,e){switch(e){case Boolean:t=t?sf:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},dl=(t,e)=>!Xp(t,e),dc={attribute:!0,type:String,converter:nr,reflect:!1,useDefault:!1,hasChanged:dl};Symbol.metadata??=Symbol("metadata"),kn.litPropertyMetadata??=new WeakMap;let Xi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=dc){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Jp(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:o}=Qp(this.prototype,e)??{get(){return this[s]},set(n){this[s]=n}};return{get:r,set(n){const a=r?.call(this);o?.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??dc}static _$Ei(){if(this.hasOwnProperty(Rr("elementProperties")))return;const e=ef(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Rr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rr("properties"))){const s=this.properties,i=[...Zp(s),...tf(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(lc(r))}else e!==void 0&&s.push(lc(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yp(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:nr).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:nr;this._$Em=r;const a=n.fromAttribute(s,o.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,s,i){if(e!==void 0){const r=this.constructor,o=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??dl)(o,s)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??s??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach((s=>s.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};Xi.elementStyles=[],Xi.shadowRootOptions={mode:"open"},Xi[Rr("elementProperties")]=new Map,Xi[Rr("finalized")]=new Map,rf?.({ReactiveElement:Xi}),(kn.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul=globalThis,Jo=ul.trustedTypes,uc=Jo?Jo.createPolicy("lit-html",{createHTML:t=>t}):void 0,hu="$lit$",li=`lit$${Math.random().toFixed(9).slice(2)}$`,pu="?"+li,of=`<${pu}>`,Ri=document,Xr=()=>Ri.createComment(""),Jr=t=>t===null||typeof t!="object"&&typeof t!="function",hl=Array.isArray,nf=t=>hl(t)||typeof t?.[Symbol.iterator]=="function",Yn=`[ 	
\f\r]`,xr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hc=/-->/g,pc=/>/g,xi=RegExp(`>|${Yn}(?:([^\\s"'>=/]+)(${Yn}*=${Yn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fc=/'/g,gc=/"/g,fu=/^(?:script|style|textarea|title)$/i,af=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),N=af(1),We=Symbol.for("lit-noChange"),Nt=Symbol.for("lit-nothing"),mc=new WeakMap,Ti=Ri.createTreeWalker(Ri,129);function gu(t,e){if(!hl(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return uc!==void 0?uc.createHTML(e):e}const lf=(t,e)=>{const s=t.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=xr;for(let a=0;a<s;a++){const l=t[a];let d,h,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===xr?h[1]==="!--"?n=hc:h[1]!==void 0?n=pc:h[2]!==void 0?(fu.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=xi):h[3]!==void 0&&(n=xi):n===xi?h[0]===">"?(n=r??xr,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?xi:h[3]==='"'?gc:fc):n===gc||n===fc?n=xi:n===hc||n===pc?n=xr:(n=xi,r=void 0);const g=n===xi&&t[a+1].startsWith("/>")?" ":"";o+=n===xr?l+of:u>=0?(i.push(d),l.slice(0,u)+hu+l.slice(u)+li+g):l+li+(u===-2?a:g)}return[gu(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Qr{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[d,h]=lf(e,s);if(this.el=Qr.createElement(d,i),Ti.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Ti.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(hu)){const p=h[n++],g=r.getAttribute(u).split(li),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?df:v[1]==="?"?uf:v[1]==="@"?hf:Cn}),r.removeAttribute(u)}else u.startsWith(li)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(fu.test(r.tagName)){const u=r.textContent.split(li),p=u.length-1;if(p>0){r.textContent=Jo?Jo.emptyScript:"";for(let g=0;g<p;g++)r.append(u[g],Xr()),Ti.nextNode(),l.push({type:2,index:++o});r.append(u[p],Xr())}}}else if(r.nodeType===8)if(r.data===pu)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(li,u+1))!==-1;)l.push({type:7,index:o}),u+=li.length-1}o++}}static createElement(e,s){const i=Ri.createElement("template");return i.innerHTML=e,i}}function ar(t,e,s=t,i){if(e===We)return e;let r=i!==void 0?s._$Co?.[i]:s._$Cl;const o=Jr(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=r:s._$Cl=r),r!==void 0&&(e=ar(t,r._$AS(t,e.values),r,i)),e}class cf{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??Ri).importNode(s,!0);Ti.currentNode=r;let o=Ti.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new co(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new pf(o,this,e)),this._$AV.push(d),l=i[++a]}n!==l?.index&&(o=Ti.nextNode(),n++)}return Ti.currentNode=Ri,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class co{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=Nt,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ar(this,e,s),Jr(e)?e===Nt||e==null||e===""?(this._$AH!==Nt&&this._$AR(),this._$AH=Nt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):nf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Nt&&Jr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ri.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Qr.createElement(gu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{const o=new cf(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=mc.get(e.strings);return s===void 0&&mc.set(e.strings,s=new Qr(e)),s}k(e){hl(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const o of e)r===s.length?s.push(i=new co(this.O(Xr()),this.O(Xr()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Cn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,o){this.type=1,this._$AH=Nt,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Nt}_$AI(e,s=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=ar(this,e,s,0),n=!Jr(e)||e!==this._$AH&&e!==We,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=ar(this,a[i+l],s,l),d===We&&(d=this._$AH[l]),n||=!Jr(d)||d!==this._$AH[l],d===Nt?e=Nt:e!==Nt&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.j(e)}j(e){e===Nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let df=class extends Cn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Nt?void 0:e}};class uf extends Cn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Nt)}}class hf extends Cn{constructor(e,s,i,r,o){super(e,s,i,r,o),this.type=5}_$AI(e,s=this){if((e=ar(this,e,s,0)??Nt)===We)return;const i=this._$AH,r=e===Nt&&i!==Nt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Nt&&(i===Nt||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class pf{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ar(this,e)}}const ff=ul.litHtmlPolyfillSupport;ff?.(Qr,co),(ul.litHtmlVersions??=[]).push("3.3.1");const gf=(t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const o=s?.renderBefore??null;i._$litPart$=r=new co(e.insertBefore(Xr(),o),o,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pl=globalThis;let Pr=class extends Xi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gf(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return We}};Pr._$litElement$=!0,Pr.finalized=!0,pl.litElementHydrateSupport?.({LitElement:Pr});const mf=pl.litElementPolyfillSupport;mf?.({LitElement:Pr});(pl.litElementVersions??=[]).push("4.2.1");var bf=st`
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
`,nt=st`
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
`,mu=Object.defineProperty,yf=Object.defineProperties,vf=Object.getOwnPropertyDescriptor,_f=Object.getOwnPropertyDescriptors,bc=Object.getOwnPropertySymbols,wf=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable,Xn=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),fl=t=>{throw TypeError(t)},yc=(t,e,s)=>e in t?mu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Qs=(t,e)=>{for(var s in e||(e={}))wf.call(e,s)&&yc(t,s,e[s]);if(bc)for(var s of bc(e))xf.call(e,s)&&yc(t,s,e[s]);return t},uo=(t,e)=>yf(t,_f(e)),c=(t,e,s,i)=>{for(var r=i>1?void 0:i?vf(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(r=(i?n(e,s,r):n(r))||r);return i&&r&&mu(e,s,r),r},bu=(t,e,s)=>e.has(t)||fl("Cannot "+s),kf=(t,e,s)=>(bu(t,e,"read from private field"),e.get(t)),Cf=(t,e,s)=>e.has(t)?fl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Sf=(t,e,s,i)=>(bu(t,e,"write to private field"),e.set(t,s),s),Ef=function(t,e){this[0]=t,this[1]=e},Af=t=>{var e=t[Xn("asyncIterator")],s=!1,i,r={};return e==null?(e=t[Xn("iterator")](),i=o=>r[o]=n=>e[o](n)):(e=e.call(t),i=o=>r[o]=n=>{if(s){if(s=!1,o==="throw")throw n;return n}return s=!0,{done:!1,value:new Ef(new Promise(a=>{var l=e[o](n);l instanceof Object||fl("Object expected"),a(l)}),1)}}),r[Xn("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=o=>{throw o},"return"in e&&i("return"),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $f={attribute:!0,type:String,converter:nr,reflect:!1,hasChanged:dl},Tf=(t=$f,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){const{name:n}=s;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.C(n,void 0,t,a),a}}}if(i==="setter"){const{name:n}=s;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+i)};function f(t){return(e,s)=>typeof s=="object"?Tf(t,e,s):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ho(t){return(e,s)=>{const i=typeof e=="function"?e:e[s];Object.assign(i,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yu=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(t,e){return(s,i,r)=>{const o=n=>n.renderRoot?.querySelector(t)??null;return yu(s,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function If(t){return(e,s)=>yu(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var Wo,Z=class extends Pr{constructor(){super(),Cf(this,Wo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,Qs({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,s)}catch{customElements.define(t,class extends e{},s)}return}let r=" (unknown version)",o=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(o=" v"+i.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${o} has already been registered.`)}attributeChangedCallback(t,e,s){kf(this,Wo)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Sf(this,Wo,!0)),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}};Wo=new WeakMap;Z.version="2.20.1";Z.dependencies={};c([f()],Z.prototype,"dir",2);c([f()],Z.prototype,"lang",2);var gl=class extends Z{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),i=s.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||s.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=i;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};gl.styles=[nt,bf];c([K("slot")],gl.prototype,"defaultSlot",2);gl.define("sl-menu");var Lf=st`
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
 */const Of=(t,e)=>t?._$litType$!==void 0,vu=t=>t.strings===void 0,Mf={},Rf=(t,e=Mf)=>t._$AH=e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},po=t=>(...e)=>({_$litDirective$:t,values:e});let fo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),Dr(i,e);return!0},Qo=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},_u=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),zf(e)}};function Pf(t){this._$AN!==void 0?(Qo(this),this._$AM=t,_u(this)):this._$AM=t}function Df(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)Dr(i[o],!1),Qo(i[o]);else i!=null&&(Dr(i,!1),Qo(i));else Dr(this,t)}const zf=t=>{t.type==Es.CHILD&&(t._$AP??=Df,t._$AQ??=Pf)};class Vf extends fo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),_u(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Dr(this,e),Qo(this))}setValue(e){if(vu(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nf=()=>new Ff;let Ff=class{};const Jn=new WeakMap,Bf=po(class extends Vf{render(t){return Nt}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Nt}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Jn.get(e);s===void 0&&(s=new WeakMap,Jn.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Jn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Uf=class{constructor(t,e){this.popupRef=Nf(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:o,top:n,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var n;const a=(n=e.get(o))!=null?n:new CSSUnitValue(0,"px"),d=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return r-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?N`
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
    `:N` <slot name="submenu" hidden></slot> `}},Hf=st`
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
`;const Sa=new Set,tr=new Map;let $i,ml="ltr",bl="en";const wu=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(wu){const t=new MutationObserver(ku);ml=document.documentElement.dir||"ltr",bl=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function xu(...t){t.map(e=>{const s=e.$code.toLowerCase();tr.has(s)?tr.set(s,Object.assign(Object.assign({},tr.get(s)),e)):tr.set(s,e),$i||($i=e)}),ku()}function ku(){wu&&(ml=document.documentElement.dir||"ltr",bl=document.documentElement.lang||navigator.language),[...Sa.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let jf=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Sa.add(this.host)}hostDisconnected(){Sa.delete(this.host)}dir(){return`${this.host.dir||ml}`.toLowerCase()}lang(){return`${this.host.lang||bl}`.toLowerCase()}getTranslationData(e){var s,i;const r=new Intl.Locale(e.replace(/_/g,"-")),o=r?.language.toLowerCase(),n=(i=(s=r?.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",a=tr.get(`${o}-${n}`),l=tr.get(o);return{locale:r,language:o,region:n,primary:a,secondary:l}}exists(e,s){var i;const{primary:r,secondary:o}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(r&&r[e]||o&&o[e]||s.includeFallback&&$i&&$i[e])}term(e,...s){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[e])o=i[e];else if(r&&r[e])o=r[e];else if($i&&$i[e])o=$i[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...s):o}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,s)}};var Cu={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};xu(Cu);var Wf=Cu,St=class extends jf{};xu(Wf);const hi=Math.min,He=Math.max,Zo=Math.round,$o=Math.floor,Ts=t=>({x:t,y:t}),Kf={left:"right",right:"left",bottom:"top",top:"bottom"},qf={start:"end",end:"start"};function Ea(t,e,s){return He(t,hi(e,s))}function pr(t,e){return typeof t=="function"?t(e):t}function pi(t){return t.split("-")[0]}function fr(t){return t.split("-")[1]}function Su(t){return t==="x"?"y":"x"}function yl(t){return t==="y"?"height":"width"}const Gf=new Set(["top","bottom"]);function Ws(t){return Gf.has(pi(t))?"y":"x"}function vl(t){return Su(Ws(t))}function Yf(t,e,s){s===void 0&&(s=!1);const i=fr(t),r=vl(t),o=yl(r);let n=r==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(n=tn(n)),[n,tn(n)]}function Xf(t){const e=tn(t);return[Aa(t),e,Aa(e)]}function Aa(t){return t.replace(/start|end/g,e=>qf[e])}const vc=["left","right"],_c=["right","left"],Jf=["top","bottom"],Qf=["bottom","top"];function Zf(t,e,s){switch(t){case"top":case"bottom":return s?e?_c:vc:e?vc:_c;case"left":case"right":return e?Jf:Qf;default:return[]}}function tg(t,e,s,i){const r=fr(t);let o=Zf(pi(t),s==="start",i);return r&&(o=o.map(n=>n+"-"+r),e&&(o=o.concat(o.map(Aa)))),o}function tn(t){return t.replace(/left|right|bottom|top/g,e=>Kf[e])}function eg(t){return{top:0,right:0,bottom:0,left:0,...t}}function Eu(t){return typeof t!="number"?eg(t):{top:t,right:t,bottom:t,left:t}}function en(t){const{x:e,y:s,width:i,height:r}=t;return{width:i,height:r,top:s,left:e,right:e+i,bottom:s+r,x:e,y:s}}function wc(t,e,s){let{reference:i,floating:r}=t;const o=Ws(e),n=vl(e),a=yl(n),l=pi(e),d=o==="y",h=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,p=i[a]/2-r[a]/2;let g;switch(l){case"top":g={x:h,y:i.y-r.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-r.width,y:u};break;default:g={x:i.x,y:i.y}}switch(fr(e)){case"start":g[n]-=p*(s&&d?-1:1);break;case"end":g[n]+=p*(s&&d?-1:1);break}return g}const sg=async(t,e,s)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=wc(d,i,l),p=i,g={},v=0;for(let k=0;k<a.length;k++){const{name:L,fn:_}=a[k],{x:w,y:A,data:b,reset:C}=await _({x:h,y:u,initialPlacement:i,placement:p,strategy:r,middlewareData:g,rects:d,platform:n,elements:{reference:t,floating:e}});h=w??h,u=A??u,g={...g,[L]:{...g[L],...b}},C&&v<=50&&(v++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(d=C.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):C.rects),{x:h,y:u}=wc(d,p,l)),k=-1)}return{x:h,y:u,placement:p,strategy:r,middlewareData:g}};async function _l(t,e){var s;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=pr(e,t),v=Eu(g),L=a[p?u==="floating"?"reference":"floating":u],_=en(await o.getClippingRect({element:(s=await(o.isElement==null?void 0:o.isElement(L)))==null||s?L:L.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),w=u==="floating"?{x:i,y:r,width:n.floating.width,height:n.floating.height}:n.reference,A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),b=await(o.isElement==null?void 0:o.isElement(A))?await(o.getScale==null?void 0:o.getScale(A))||{x:1,y:1}:{x:1,y:1},C=en(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:A,strategy:l}):w);return{top:(_.top-C.top+v.top)/b.y,bottom:(C.bottom-_.bottom+v.bottom)/b.y,left:(_.left-C.left+v.left)/b.x,right:(C.right-_.right+v.right)/b.x}}const ig=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:r,rects:o,platform:n,elements:a,middlewareData:l}=e,{element:d,padding:h=0}=pr(t,e)||{};if(d==null)return{};const u=Eu(h),p={x:s,y:i},g=vl(r),v=yl(g),k=await n.getDimensions(d),L=g==="y",_=L?"top":"left",w=L?"bottom":"right",A=L?"clientHeight":"clientWidth",b=o.reference[v]+o.reference[g]-p[g]-o.floating[v],C=p[g]-o.reference[g],O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let T=O?O[A]:0;(!T||!await(n.isElement==null?void 0:n.isElement(O)))&&(T=a.floating[A]||o.floating[v]);const B=b/2-C/2,P=T/2-k[v]/2-1,D=hi(u[_],P),lt=hi(u[w],P),et=D,gt=T-k[v]-lt,vt=T/2-k[v]/2+B,kt=Ea(et,vt,gt),tt=!l.arrow&&fr(r)!=null&&vt!==kt&&o.reference[v]/2-(vt<et?D:lt)-k[v]/2<0,G=tt?vt<et?vt-et:vt-gt:0;return{[g]:p[g]+G,data:{[g]:kt,centerOffset:vt-kt-G,...tt&&{alignmentOffset:G}},reset:tt}}}),rg=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:r,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:d}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:k=!0,...L}=pr(t,e);if((s=o.arrow)!=null&&s.alignmentOffset)return{};const _=pi(r),w=Ws(a),A=pi(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(d.floating)),C=p||(A||!k?[tn(a)]:Xf(a)),O=v!=="none";!p&&O&&C.push(...tg(a,k,v,b));const T=[a,...C],B=await _l(e,L),P=[];let D=((i=o.flip)==null?void 0:i.overflows)||[];if(h&&P.push(B[_]),u){const vt=Yf(r,n,b);P.push(B[vt[0]],B[vt[1]])}if(D=[...D,{placement:r,overflows:P}],!P.every(vt=>vt<=0)){var lt,et;const vt=(((lt=o.flip)==null?void 0:lt.index)||0)+1,kt=T[vt];if(kt&&(!(u==="alignment"?w!==Ws(kt):!1)||D.every(at=>Ws(at.placement)===w?at.overflows[0]>0:!0)))return{data:{index:vt,overflows:D},reset:{placement:kt}};let tt=(et=D.filter(G=>G.overflows[0]<=0).sort((G,at)=>G.overflows[1]-at.overflows[1])[0])==null?void 0:et.placement;if(!tt)switch(g){case"bestFit":{var gt;const G=(gt=D.filter(at=>{if(O){const X=Ws(at.placement);return X===w||X==="y"}return!0}).map(at=>[at.placement,at.overflows.filter(X=>X>0).reduce((X,Ct)=>X+Ct,0)]).sort((at,X)=>at[1]-X[1])[0])==null?void 0:gt[0];G&&(tt=G);break}case"initialPlacement":tt=a;break}if(r!==tt)return{reset:{placement:tt}}}return{}}}},og=new Set(["left","top"]);async function ng(t,e){const{placement:s,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=pi(s),a=fr(s),l=Ws(s)==="y",d=og.has(n)?-1:1,h=o&&l?-1:1,u=pr(e,t);let{mainAxis:p,crossAxis:g,alignmentAxis:v}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*h,y:p*d}:{x:p*d,y:g*h}}const ag=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:r,y:o,placement:n,middlewareData:a}=e,l=await ng(e,t);return n===((s=a.offset)==null?void 0:s.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:n}}}}},lg=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:n=!1,limiter:a={fn:L=>{let{x:_,y:w}=L;return{x:_,y:w}}},...l}=pr(t,e),d={x:s,y:i},h=await _l(e,l),u=Ws(pi(r)),p=Su(u);let g=d[p],v=d[u];if(o){const L=p==="y"?"top":"left",_=p==="y"?"bottom":"right",w=g+h[L],A=g-h[_];g=Ea(w,g,A)}if(n){const L=u==="y"?"top":"left",_=u==="y"?"bottom":"right",w=v+h[L],A=v-h[_];v=Ea(w,v,A)}const k=a.fn({...e,[p]:g,[u]:v});return{...k,data:{x:k.x-s,y:k.y-i,enabled:{[p]:o,[u]:n}}}}}},cg=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var s,i;const{placement:r,rects:o,platform:n,elements:a}=e,{apply:l=()=>{},...d}=pr(t,e),h=await _l(e,d),u=pi(r),p=fr(r),g=Ws(r)==="y",{width:v,height:k}=o.floating;let L,_;u==="top"||u==="bottom"?(L=u,_=p===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(_=u,L=p==="end"?"top":"bottom");const w=k-h.top-h.bottom,A=v-h.left-h.right,b=hi(k-h[L],w),C=hi(v-h[_],A),O=!e.middlewareData.shift;let T=b,B=C;if((s=e.middlewareData.shift)!=null&&s.enabled.x&&(B=A),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(T=w),O&&!p){const D=He(h.left,0),lt=He(h.right,0),et=He(h.top,0),gt=He(h.bottom,0);g?B=v-2*(D!==0||lt!==0?D+lt:He(h.left,h.right)):T=k-2*(et!==0||gt!==0?et+gt:He(h.top,h.bottom))}await l({...e,availableWidth:B,availableHeight:T});const P=await n.getDimensions(a.floating);return v!==P.width||k!==P.height?{reset:{rects:!0}}:{}}}};function Sn(){return typeof window<"u"}function gr(t){return Au(t)?(t.nodeName||"").toLowerCase():"#document"}function qe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Rs(t){var e;return(e=(Au(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Au(t){return Sn()?t instanceof Node||t instanceof qe(t).Node:!1}function ds(t){return Sn()?t instanceof Element||t instanceof qe(t).Element:!1}function Os(t){return Sn()?t instanceof HTMLElement||t instanceof qe(t).HTMLElement:!1}function xc(t){return!Sn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof qe(t).ShadowRoot}const dg=new Set(["inline","contents"]);function go(t){const{overflow:e,overflowX:s,overflowY:i,display:r}=us(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!dg.has(r)}const ug=new Set(["table","td","th"]);function hg(t){return ug.has(gr(t))}const pg=[":popover-open",":modal"];function En(t){return pg.some(e=>{try{return t.matches(e)}catch{return!1}})}const fg=["transform","translate","scale","rotate","perspective"],gg=["transform","translate","scale","rotate","perspective","filter"],mg=["paint","layout","strict","content"];function An(t){const e=wl(),s=ds(t)?us(t):t;return fg.some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||gg.some(i=>(s.willChange||"").includes(i))||mg.some(i=>(s.contain||"").includes(i))}function bg(t){let e=fi(t);for(;Os(e)&&!lr(e);){if(An(e))return e;if(En(e))return null;e=fi(e)}return null}function wl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const yg=new Set(["html","body","#document"]);function lr(t){return yg.has(gr(t))}function us(t){return qe(t).getComputedStyle(t)}function $n(t){return ds(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function fi(t){if(gr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||xc(t)&&t.host||Rs(t);return xc(e)?e.host:e}function $u(t){const e=fi(t);return lr(e)?t.ownerDocument?t.ownerDocument.body:t.body:Os(e)&&go(e)?e:$u(e)}function Zr(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const r=$u(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),n=qe(r);if(o){const a=$a(n);return e.concat(n,n.visualViewport||[],go(r)?r:[],a&&s?Zr(a):[])}return e.concat(r,Zr(r,[],s))}function $a(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Tu(t){const e=us(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Os(t),o=r?t.offsetWidth:s,n=r?t.offsetHeight:i,a=Zo(s)!==o||Zo(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function xl(t){return ds(t)?t:t.contextElement}function er(t){const e=xl(t);if(!Os(e))return Ts(1);const s=e.getBoundingClientRect(),{width:i,height:r,$:o}=Tu(e);let n=(o?Zo(s.width):s.width)/i,a=(o?Zo(s.height):s.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const vg=Ts(0);function Iu(t){const e=qe(t);return!wl()||!e.visualViewport?vg:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function _g(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==qe(t)?!1:e}function Pi(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const r=t.getBoundingClientRect(),o=xl(t);let n=Ts(1);e&&(i?ds(i)&&(n=er(i)):n=er(t));const a=_g(o,s,i)?Iu(o):Ts(0);let l=(r.left+a.x)/n.x,d=(r.top+a.y)/n.y,h=r.width/n.x,u=r.height/n.y;if(o){const p=qe(o),g=i&&ds(i)?qe(i):i;let v=p,k=$a(v);for(;k&&i&&g!==v;){const L=er(k),_=k.getBoundingClientRect(),w=us(k),A=_.left+(k.clientLeft+parseFloat(w.paddingLeft))*L.x,b=_.top+(k.clientTop+parseFloat(w.paddingTop))*L.y;l*=L.x,d*=L.y,h*=L.x,u*=L.y,l+=A,d+=b,v=qe(k),k=$a(v)}}return en({width:h,height:u,x:l,y:d})}function Tn(t,e){const s=$n(t).scrollLeft;return e?e.left+s:Pi(Rs(t)).left+s}function Lu(t,e){const s=t.getBoundingClientRect(),i=s.left+e.scrollLeft-Tn(t,s),r=s.top+e.scrollTop;return{x:i,y:r}}function wg(t){let{elements:e,rect:s,offsetParent:i,strategy:r}=t;const o=r==="fixed",n=Rs(i),a=e?En(e.floating):!1;if(i===n||a&&o)return s;let l={scrollLeft:0,scrollTop:0},d=Ts(1);const h=Ts(0),u=Os(i);if((u||!u&&!o)&&((gr(i)!=="body"||go(n))&&(l=$n(i)),Os(i))){const g=Pi(i);d=er(i),h.x=g.x+i.clientLeft,h.y=g.y+i.clientTop}const p=n&&!u&&!o?Lu(n,l):Ts(0);return{width:s.width*d.x,height:s.height*d.y,x:s.x*d.x-l.scrollLeft*d.x+h.x+p.x,y:s.y*d.y-l.scrollTop*d.y+h.y+p.y}}function xg(t){return Array.from(t.getClientRects())}function kg(t){const e=Rs(t),s=$n(t),i=t.ownerDocument.body,r=He(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=He(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-s.scrollLeft+Tn(t);const a=-s.scrollTop;return us(i).direction==="rtl"&&(n+=He(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}const kc=25;function Cg(t,e){const s=qe(t),i=Rs(t),r=s.visualViewport;let o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;const h=wl();(!h||h&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}const d=Tn(i);if(d<=0){const h=i.ownerDocument,u=h.body,p=getComputedStyle(u),g=h.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,v=Math.abs(i.clientWidth-u.clientWidth-g);v<=kc&&(o-=v)}else d<=kc&&(o+=d);return{width:o,height:n,x:a,y:l}}const Sg=new Set(["absolute","fixed"]);function Eg(t,e){const s=Pi(t,!0,e==="fixed"),i=s.top+t.clientTop,r=s.left+t.clientLeft,o=Os(t)?er(t):Ts(1),n=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,d=i*o.y;return{width:n,height:a,x:l,y:d}}function Cc(t,e,s){let i;if(e==="viewport")i=Cg(t,s);else if(e==="document")i=kg(Rs(t));else if(ds(e))i=Eg(e,s);else{const r=Iu(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return en(i)}function Ou(t,e){const s=fi(t);return s===e||!ds(s)||lr(s)?!1:us(s).position==="fixed"||Ou(s,e)}function Ag(t,e){const s=e.get(t);if(s)return s;let i=Zr(t,[],!1).filter(a=>ds(a)&&gr(a)!=="body"),r=null;const o=us(t).position==="fixed";let n=o?fi(t):t;for(;ds(n)&&!lr(n);){const a=us(n),l=An(n);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&Sg.has(r.position)||go(n)&&!l&&Ou(t,n))?i=i.filter(h=>h!==n):r=a,n=fi(n)}return e.set(t,i),i}function $g(t){let{element:e,boundary:s,rootBoundary:i,strategy:r}=t;const n=[...s==="clippingAncestors"?En(e)?[]:Ag(e,this._c):[].concat(s),i],a=n[0],l=n.reduce((d,h)=>{const u=Cc(e,h,r);return d.top=He(u.top,d.top),d.right=hi(u.right,d.right),d.bottom=hi(u.bottom,d.bottom),d.left=He(u.left,d.left),d},Cc(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Tg(t){const{width:e,height:s}=Tu(t);return{width:e,height:s}}function Ig(t,e,s){const i=Os(e),r=Rs(e),o=s==="fixed",n=Pi(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Ts(0);function d(){l.x=Tn(r)}if(i||!i&&!o)if((gr(e)!=="body"||go(r))&&(a=$n(e)),i){const g=Pi(e,!0,o,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else r&&d();o&&!i&&r&&d();const h=r&&!i&&!o?Lu(r,a):Ts(0),u=n.left+a.scrollLeft-l.x-h.x,p=n.top+a.scrollTop-l.y-h.y;return{x:u,y:p,width:n.width,height:n.height}}function Qn(t){return us(t).position==="static"}function Sc(t,e){if(!Os(t)||us(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return Rs(t)===s&&(s=s.ownerDocument.body),s}function Mu(t,e){const s=qe(t);if(En(t))return s;if(!Os(t)){let r=fi(t);for(;r&&!lr(r);){if(ds(r)&&!Qn(r))return r;r=fi(r)}return s}let i=Sc(t,e);for(;i&&hg(i)&&Qn(i);)i=Sc(i,e);return i&&lr(i)&&Qn(i)&&!An(i)?s:i||bg(t)||s}const Lg=async function(t){const e=this.getOffsetParent||Mu,s=this.getDimensions,i=await s(t.floating);return{reference:Ig(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Og(t){return us(t).direction==="rtl"}const Ko={convertOffsetParentRelativeRectToViewportRelativeRect:wg,getDocumentElement:Rs,getClippingRect:$g,getOffsetParent:Mu,getElementRects:Lg,getClientRects:xg,getDimensions:Tg,getScale:er,isElement:ds,isRTL:Og};function Ru(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Mg(t,e){let s=null,i;const r=Rs(t);function o(){var a;clearTimeout(i),(a=s)==null||a.disconnect(),s=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const d=t.getBoundingClientRect(),{left:h,top:u,width:p,height:g}=d;if(a||e(),!p||!g)return;const v=$o(u),k=$o(r.clientWidth-(h+p)),L=$o(r.clientHeight-(u+g)),_=$o(h),A={rootMargin:-v+"px "+-k+"px "+-L+"px "+-_+"px",threshold:He(0,hi(1,l))||1};let b=!0;function C(O){const T=O[0].intersectionRatio;if(T!==l){if(!b)return n();T?n(!1,T):i=setTimeout(()=>{n(!1,1e-7)},1e3)}T===1&&!Ru(d,t.getBoundingClientRect())&&n(),b=!1}try{s=new IntersectionObserver(C,{...A,root:r.ownerDocument})}catch{s=new IntersectionObserver(C,A)}s.observe(t)}return n(!0),o}function Rg(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=xl(t),h=r||o?[...d?Zr(d):[],...Zr(e)]:[];h.forEach(_=>{r&&_.addEventListener("scroll",s,{passive:!0}),o&&_.addEventListener("resize",s)});const u=d&&a?Mg(d,s):null;let p=-1,g=null;n&&(g=new ResizeObserver(_=>{let[w]=_;w&&w.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var A;(A=g)==null||A.observe(e)})),s()}),d&&!l&&g.observe(d),g.observe(e));let v,k=l?Pi(t):null;l&&L();function L(){const _=Pi(t);k&&!Ru(k,_)&&s(),k=_,v=requestAnimationFrame(L)}return s(),()=>{var _;h.forEach(w=>{r&&w.removeEventListener("scroll",s),o&&w.removeEventListener("resize",s)}),u?.(),(_=g)==null||_.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const Pg=ag,Dg=lg,zg=rg,Ec=cg,Vg=ig,Ng=(t,e,s)=>{const i=new Map,r={platform:Ko,...s},o={...r.platform,_c:i};return sg(t,e,{...r,platform:o})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=po(class extends fo{constructor(t){if(super(t),t.type!==Es.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return We}});function Fg(t){return Bg(t)}function Zn(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Bg(t){for(let e=t;e;e=Zn(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Zn(t);e;e=Zn(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||An(s)||e.tagName==="BODY"))return e}return null}function Ug(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var It=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,o=0,n=0,a=0,l=0,d=0,h=0;s?t.top<e.top?(i=t.left,r=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,d=e.right,h=e.top):(i=e.left,r=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,d=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,d=e.left,h=e.bottom):(i=e.right,r=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,d=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ug(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Rg(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Pg({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ec({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=r?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(zg({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Dg({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ec({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Vg({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>Ko.getOffsetParent(s,Fg):Ko.getOffsetParent;Ng(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:uo(Qs({},Ko),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:r,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,d=r.arrow.y;let h="",u="",p="",g="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?v:"",g=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":v,g=n?v:"",p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",h=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:p,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ot({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ot({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};It.styles=[nt,Hf];c([K(".popup")],It.prototype,"popup",2);c([K(".popup__arrow")],It.prototype,"arrowEl",2);c([f()],It.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],It.prototype,"active",2);c([f({reflect:!0})],It.prototype,"placement",2);c([f({reflect:!0})],It.prototype,"strategy",2);c([f({type:Number})],It.prototype,"distance",2);c([f({type:Number})],It.prototype,"skidding",2);c([f({type:Boolean})],It.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],It.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],It.prototype,"arrowPadding",2);c([f({type:Boolean})],It.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],It.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],It.prototype,"flipFallbackStrategy",2);c([f({type:Object})],It.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],It.prototype,"flipPadding",2);c([f({type:Boolean})],It.prototype,"shift",2);c([f({type:Object})],It.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],It.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],It.prototype,"autoSize",2);c([f()],It.prototype,"sync",2);c([f({type:Object})],It.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],It.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],It.prototype,"hoverBridge",2);var Hg=st`
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
`,mo=class extends Z{constructor(){super(...arguments),this.localize=new St(this)}render(){return N`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};mo.styles=[nt,Hg];var Me=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function jg(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let s="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var Ta="";function Ia(t){Ta=t}function Wg(t=""){if(!Ta){const e=[...document.getElementsByTagName("script")],s=e.find(i=>i.hasAttribute("data-shoelace"));if(s)Ia(s.getAttribute("data-shoelace"));else{const i=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),Ia(r.split("/").slice(0,-1).join("/"))}}return Ta.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Kg={name:"default",resolver:t=>Wg(`assets/icons/${t}.svg`)},qg=Kg,Ac={caret:`
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
  `},Gg={name:"system",resolver:t=>t in Ac?`data:image/svg+xml,${encodeURIComponent(Ac[t])}`:""},Yg=Gg,Xg=[qg,Yg],La=[];function Jg(t){La.push(t)}function Qg(t){La=La.filter(e=>e!==t)}function $c(t){return Xg.find(e=>e.name===t)}var Zg=st`
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
`;function j(t,e){const s=Qs({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:o}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{const d=l;if(a.has(d)){const h=a.get(d),u=this[d];h!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),o.call(this,a)}}}var kr=Symbol(),To=Symbol(),ta,ea=new Map,Rt=class extends Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let i;if(e?.spriteSheet)return this.svg=N`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?kr:To}catch{return To}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(((s=o?.tagName)==null?void 0:s.toLowerCase())!=="svg")return kr;ta||(ta=new DOMParser);const a=ta.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):kr}catch{return kr}}connectedCallback(){super.connectedCallback(),Jg(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qg(this)}getIconSource(){const t=$c(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),i=s?$c(this.library):void 0;if(!e){this.svg=null;return}let r=ea.get(e);if(r||(r=this.resolveIcon(e,i),ea.set(e,r)),!this.initialRender)return;const o=await r;if(o===To&&ea.delete(e),e===this.getIconSource().url){if(Of(o)){if(this.svg=o,i){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(o){case To:case kr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Rt.styles=[nt,Zg];c([it()],Rt.prototype,"svg",2);c([f({reflect:!0})],Rt.prototype,"name",2);c([f()],Rt.prototype,"src",2);c([f()],Rt.prototype,"label",2);c([f({reflect:!0})],Rt.prototype,"library",2);c([j("label")],Rt.prototype,"handleLabelChange",1);c([j(["name","src","library"])],Rt.prototype,"setIcon",1);var Ge=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Me(this,"submenu"),this.submenuController=new Uf(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return jg(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return N`
      <div
        id="anchor"
        part="base"
        class=${ot({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Ge.styles=[nt,Lf];Ge.dependencies={"sl-icon":Rt,"sl-popup":It,"sl-spinner":mo};c([K("slot:not([name])")],Ge.prototype,"defaultSlot",2);c([K(".menu-item")],Ge.prototype,"menuItem",2);c([f()],Ge.prototype,"type",2);c([f({type:Boolean,reflect:!0})],Ge.prototype,"checked",2);c([f()],Ge.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Ge.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);c([j("checked")],Ge.prototype,"handleCheckedChange",1);c([j("disabled")],Ge.prototype,"handleDisabledChange",1);c([j("type")],Ge.prototype,"handleTypeChange",1);Ge.define("sl-menu-item");mo.define("sl-spinner");var tm=st`
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
`;function*kl(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Af(kl(t.shadowRoot.activeElement))))}function Pu(){return[...kl()].pop()}var Tc=new WeakMap;function Du(t){let e=Tc.get(t);return e||(e=window.getComputedStyle(t,null),Tc.set(t,e)),e}function em(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Du(t);return e.visibility!=="hidden"&&e.display!=="none"}function sm(t){const e=Du(t),{overflowY:s,overflowX:i}=e;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function im(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const o=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===t:o.querySelector(n)===t}return em(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:sm(t):!1}function rm(t){var e,s;const i=Oa(t),r=(e=i[0])!=null?e:null,o=(s=i[i.length-1])!=null?s:null;return{start:r,end:o}}function om(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function Oa(t){const e=new WeakMap,s=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!s.includes(r)&&im(r)&&s.push(r),r instanceof HTMLSlotElement&&om(r,t)&&r.assignedElements({flatten:!0}).forEach(o=>{i(o)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const o of r.children)i(o)}return i(t),s.sort((r,o)=>{const n=Number(r.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var zu=new Map,nm=new WeakMap;function am(t){return t??{keyframes:[],options:{duration:0}}}function Ic(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Lt(t,e){zu.set(t,am(e))}function Ft(t,e,s){const i=nm.get(t);if(i?.[e])return Ic(i[e],s.dir);const r=zu.get(e);return r?Ic(r,s.dir):{keyframes:[],options:{duration:0}}}function Oe(t,e){return new Promise(s=>{function i(r){r.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}function Gt(t,e,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,uo(Qs({},s),{duration:Ma()?0:s.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Lc(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Ma(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ie(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}function sn(t,e){return t.map(s=>uo(Qs({},s),{height:s.height==="auto"?`${e}px`:s.height}))}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=t=>t??Nt;var ve=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(i,r)=>{if(!i)return null;const o=i.closest(r);if(o)return o;const n=i.getRootNode();return n instanceof ShadowRoot?s(n.host,r):null};setTimeout(()=>{var i;const r=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?Pu():document.activeElement;(!this.containingElement||s(r,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),i=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>rm(i).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Oe(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ie(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Ft(this,"dropdown.show",{dir:this.localize.dir()});await Gt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ie(this);const{keyframes:t,options:e}=Ft(this,"dropdown.hide",{dir:this.localize.dir()});await Gt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return N`
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
        sync=${Q(this.sync?this.sync:void 0)}
        class=${ot({dropdown:!0,"dropdown--open":this.open})}
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
    `}};ve.styles=[nt,tm];ve.dependencies={"sl-popup":It};c([K(".dropdown")],ve.prototype,"popup",2);c([K(".dropdown__trigger")],ve.prototype,"trigger",2);c([K(".dropdown__panel")],ve.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],ve.prototype,"open",2);c([f({reflect:!0})],ve.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ve.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],ve.prototype,"containingElement",2);c([f({type:Number})],ve.prototype,"distance",2);c([f({type:Number})],ve.prototype,"skidding",2);c([f({type:Boolean})],ve.prototype,"hoist",2);c([f({reflect:!0})],ve.prototype,"sync",2);c([j("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);Lt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Lt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ve.define("sl-dropdown");var lm=st`
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
 */const Vu=Symbol.for(""),cm=t=>{if(t?.r===Vu)return t?._$litStatic$},rn=(t,...e)=>({_$litStatic$:e.reduce(((s,i,r)=>s+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:Vu}),Oc=new Map,dm=t=>(e,...s)=>{const i=s.length;let r,o;const n=[],a=[];let l,d=0,h=!1;for(;d<i;){for(l=e[d];d<i&&(o=s[d],(r=cm(o))!==void 0);)l+=r+e[++d],h=!0;d!==i&&a.push(o),n.push(l),d++}if(d===i&&n.push(e[i]),h){const u=n.join("$$lit$$");(e=Oc.get(u))===void 0&&(n.raw=n,Oc.set(u,e=n)),s=a}return t(e,...s)},zr=dm(N);var ae=class extends Z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?rn`a`:rn`button`;return zr`
      <${e}
        part="base"
        class=${ot({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Q(t?void 0:this.disabled)}
        type=${Q(t?void 0:"button")}
        href=${Q(t?this.href:void 0)}
        target=${Q(t?this.target:void 0)}
        download=${Q(t?this.download:void 0)}
        rel=${Q(t&&this.target?"noreferrer noopener":void 0)}
        role=${Q(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Q(this.name)}
          library=${Q(this.library)}
          src=${Q(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};ae.styles=[nt,lm];ae.dependencies={"sl-icon":Rt};c([K(".icon-button")],ae.prototype,"button",2);c([it()],ae.prototype,"hasFocus",2);c([f()],ae.prototype,"name",2);c([f()],ae.prototype,"library",2);c([f()],ae.prototype,"src",2);c([f()],ae.prototype,"href",2);c([f()],ae.prototype,"target",2);c([f()],ae.prototype,"download",2);c([f()],ae.prototype,"label",2);c([f({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);ae.define("sl-icon-button");var um=st`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Vi=class extends Z{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Cr(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Cr(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Cr(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Cr(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),i=Cr(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",s===0),i.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",s===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return N`
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
    `}};Vi.styles=[nt,um];c([K("slot")],Vi.prototype,"defaultSlot",2);c([it()],Vi.prototype,"disableRole",2);c([f()],Vi.prototype,"label",2);function Cr(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}Vi.define("sl-button-group");var Sr=new WeakMap,Er=new WeakMap,Ar=new WeakMap,sa=new WeakSet,Io=new WeakMap,Zs=class{constructor(t,e){this.handleFormData=s=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{s.formData.append(r,a.toString())}):s.formData.append(r,o.toString()))},this.handleFormSubmit=s=>{var i;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Sr.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Io.set(this.host,[])},this.handleInteraction=s=>{const i=Io.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Qs({form:s=>{const i=s.form;if(i){const o=s.getRootNode().querySelector(`#${i}`);if(o)return o}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Io.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Io.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Sr.has(this.form)?Sr.get(this.form).add(this.host):Sr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Er.has(this.form)||(Er.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ar.has(this.form)||(Ar.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Sr.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Er.has(this.form)&&(this.form.reportValidity=Er.get(this.form),Er.delete(this.form)),Ar.has(this.form)&&(this.form.checkValidity=Ar.get(this.form),Ar.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?sa.add(t):sa.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&s.setAttribute(i,e.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!sa.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},In=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),hm=Object.freeze(uo(Qs({},In),{valid:!1,valueMissing:!0})),pm=Object.freeze(uo(Qs({},In),{valid:!1,customError:!0})),Nu=st`
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
`,Ot=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Me(this,"[default]","prefix","suffix"),this.localize=new St(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:In}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?rn`a`:rn`button`;return zr`
      <${e}
        part="base"
        class=${ot({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Q(t?void 0:this.disabled)}
        type=${Q(t?void 0:this.type)}
        title=${this.title}
        name=${Q(t?void 0:this.name)}
        value=${Q(t?void 0:this.value)}
        href=${Q(t&&!this.disabled?this.href:void 0)}
        target=${Q(t?this.target:void 0)}
        download=${Q(t?this.download:void 0)}
        rel=${Q(t?this.rel:void 0)}
        role=${Q(t?void 0:"button")}
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
        ${this.caret?zr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?zr`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ot.styles=[nt,Nu];Ot.dependencies={"sl-icon":Rt,"sl-spinner":mo};c([K(".button")],Ot.prototype,"button",2);c([it()],Ot.prototype,"hasFocus",2);c([it()],Ot.prototype,"invalid",2);c([f()],Ot.prototype,"title",2);c([f({reflect:!0})],Ot.prototype,"variant",2);c([f({reflect:!0})],Ot.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],Ot.prototype,"circle",2);c([f()],Ot.prototype,"type",2);c([f()],Ot.prototype,"name",2);c([f()],Ot.prototype,"value",2);c([f()],Ot.prototype,"href",2);c([f()],Ot.prototype,"target",2);c([f()],Ot.prototype,"rel",2);c([f()],Ot.prototype,"download",2);c([f()],Ot.prototype,"form",2);c([f({attribute:"formaction"})],Ot.prototype,"formAction",2);c([f({attribute:"formenctype"})],Ot.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],Ot.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],Ot.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],Ot.prototype,"formTarget",2);c([j("disabled",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleDisabledChange",1);Ot.define("sl-button");var fm=st`
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
`,mr=(t="value")=>(e,s)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,n,a){var l;const d=i.getPropertyOptions(t),h=typeof d.attribute=="string"?d.attribute:t;if(o===h){const u=d.converter||nr,g=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:nr.fromAttribute)(a,d.type);this[t]!==g&&(this[s]=g)}r.call(this,o,n,a)}},Ni=st`
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
 */const Di=po(class extends fo{constructor(t){if(super(t),t.type!==Es.PROPERTY&&t.type!==Es.ATTRIBUTE&&t.type!==Es.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!vu(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===We||e===Nt)return e;const s=t.element,i=t.name;if(t.type===Es.PROPERTY){if(e===s[i])return We}else if(t.type===Es.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return We}else if(t.type===Es.ATTRIBUTE&&s.getAttribute(i)===e+"")return We;return Rf(t),e}});var Ae=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Me(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return N`
      <div
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${ot({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Q(this.value)}
            .checked=${Di(this.checked)}
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
    `}};Ae.styles=[nt,Ni,fm];c([K('input[type="checkbox"]')],Ae.prototype,"input",2);c([it()],Ae.prototype,"hasFocus",2);c([f()],Ae.prototype,"title",2);c([f()],Ae.prototype,"name",2);c([f()],Ae.prototype,"value",2);c([f({reflect:!0})],Ae.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Ae.prototype,"checked",2);c([mr("checked")],Ae.prototype,"defaultChecked",2);c([f({reflect:!0})],Ae.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ae.prototype,"required",2);c([f({attribute:"help-text"})],Ae.prototype,"helpText",2);c([j("checked",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleCheckedChange",1);c([j("disabled",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleDisabledChange",1);Ae.define("sl-switch");var gm=st`
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
`,ps=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ie(this.body);const{keyframes:e,options:s}=Ft(this,"details.show",{dir:this.localize.dir()});await Gt(this.body,sn(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ie(this.body);const{keyframes:e,options:s}=Ft(this,"details.hide",{dir:this.localize.dir()});await Gt(this.body,sn(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Oe(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Oe(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return N`
      <details
        part="base"
        class=${ot({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};ps.styles=[nt,gm];ps.dependencies={"sl-icon":Rt};c([K(".details")],ps.prototype,"details",2);c([K(".details__header")],ps.prototype,"header",2);c([K(".details__body")],ps.prototype,"body",2);c([K(".details__expand-icon-slot")],ps.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],ps.prototype,"open",2);c([f()],ps.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],ps.prototype,"disabled",2);c([j("open",{waitUntilFirstUpdate:!0})],ps.prototype,"handleOpenChange",1);Lt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Lt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ps.define("sl-details");var mm=st`
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
`,ft=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Me(this,"help-text","label"),this.localize=new St(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return N`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${ot({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${Q(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Q(this.placeholder)}
              minlength=${Q(this.minlength)}
              maxlength=${Q(this.maxlength)}
              min=${Q(this.min)}
              max=${Q(this.max)}
              step=${Q(this.step)}
              .value=${Di(this.value)}
              autocapitalize=${Q(this.autocapitalize)}
              autocomplete=${Q(this.autocomplete)}
              autocorrect=${Q(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Q(this.pattern)}
              enterkeyhint=${Q(this.enterkeyhint)}
              inputmode=${Q(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?N`
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
            ${this.passwordToggle&&!this.disabled?N`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?N`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:N`
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
    `}};ft.styles=[nt,Ni,mm];ft.dependencies={"sl-icon":Rt};c([K(".input__control")],ft.prototype,"input",2);c([it()],ft.prototype,"hasFocus",2);c([f()],ft.prototype,"title",2);c([f({reflect:!0})],ft.prototype,"type",2);c([f()],ft.prototype,"name",2);c([f()],ft.prototype,"value",2);c([mr()],ft.prototype,"defaultValue",2);c([f({reflect:!0})],ft.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ft.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],ft.prototype,"pill",2);c([f()],ft.prototype,"label",2);c([f({attribute:"help-text"})],ft.prototype,"helpText",2);c([f({type:Boolean})],ft.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);c([f()],ft.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],ft.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],ft.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],ft.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],ft.prototype,"noSpinButtons",2);c([f({reflect:!0})],ft.prototype,"form",2);c([f({type:Boolean,reflect:!0})],ft.prototype,"required",2);c([f()],ft.prototype,"pattern",2);c([f({type:Number})],ft.prototype,"minlength",2);c([f({type:Number})],ft.prototype,"maxlength",2);c([f()],ft.prototype,"min",2);c([f()],ft.prototype,"max",2);c([f()],ft.prototype,"step",2);c([f()],ft.prototype,"autocapitalize",2);c([f()],ft.prototype,"autocorrect",2);c([f()],ft.prototype,"autocomplete",2);c([f({type:Boolean})],ft.prototype,"autofocus",2);c([f()],ft.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ft.prototype,"spellcheck",2);c([f()],ft.prototype,"inputmode",2);c([j("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);c([j("step",{waitUntilFirstUpdate:!0})],ft.prototype,"handleStepChange",1);c([j("value",{waitUntilFirstUpdate:!0})],ft.prototype,"handleValueChange",1);ft.define("sl-input");var bm=st`
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
`,Et=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Me(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return N`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${ot({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Q(this.name)}
              .value=${Di(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Q(this.placeholder)}
              rows=${Q(this.rows)}
              minlength=${Q(this.minlength)}
              maxlength=${Q(this.maxlength)}
              autocapitalize=${Q(this.autocapitalize)}
              autocorrect=${Q(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Q(this.spellcheck)}
              enterkeyhint=${Q(this.enterkeyhint)}
              inputmode=${Q(this.inputmode)}
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
    `}};Et.styles=[nt,Ni,bm];c([K(".textarea__control")],Et.prototype,"input",2);c([K(".textarea__size-adjuster")],Et.prototype,"sizeAdjuster",2);c([it()],Et.prototype,"hasFocus",2);c([f()],Et.prototype,"title",2);c([f()],Et.prototype,"name",2);c([f()],Et.prototype,"value",2);c([f({reflect:!0})],Et.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"filled",2);c([f()],Et.prototype,"label",2);c([f({attribute:"help-text"})],Et.prototype,"helpText",2);c([f()],Et.prototype,"placeholder",2);c([f({type:Number})],Et.prototype,"rows",2);c([f()],Et.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"readonly",2);c([f({reflect:!0})],Et.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Et.prototype,"required",2);c([f({type:Number})],Et.prototype,"minlength",2);c([f({type:Number})],Et.prototype,"maxlength",2);c([f()],Et.prototype,"autocapitalize",2);c([f()],Et.prototype,"autocorrect",2);c([f()],Et.prototype,"autocomplete",2);c([f({type:Boolean})],Et.prototype,"autofocus",2);c([f()],Et.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],Et.prototype,"spellcheck",2);c([f()],Et.prototype,"inputmode",2);c([mr()],Et.prototype,"defaultValue",2);c([j("disabled",{waitUntilFirstUpdate:!0})],Et.prototype,"handleDisabledChange",1);c([j("rows",{waitUntilFirstUpdate:!0})],Et.prototype,"handleRowsChange",1);c([j("value",{waitUntilFirstUpdate:!0})],Et.prototype,"handleValueChange",1);Et.define("sl-textarea");var ym=st`
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
`,bi=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return N`
      <span
        part="base"
        class=${ot({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?N`
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
    `}};bi.styles=[nt,ym];bi.dependencies={"sl-icon-button":ae};c([f({reflect:!0})],bi.prototype,"variant",2);c([f({reflect:!0})],bi.prototype,"size",2);c([f({type:Boolean,reflect:!0})],bi.prototype,"pill",2);c([f({type:Boolean})],bi.prototype,"removable",2);var vm=st`
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
`;function _m(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Ra=new Set;function wm(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function xm(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Vr(t){if(Ra.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=wm()+xm();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Nr(t){Ra.delete(t),Ra.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Pa(t,e,s="vertical",i="smooth"){const r=_m(t,e),o=r.top+e.scrollTop,n=r.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,h=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(o<d?e.scrollTo({top:o,behavior:i}):o+t.clientHeight>h&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:i}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Da extends fo{constructor(e){if(super(e),this.it=Nt,e.type!==Es.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Nt||e==null)return this._t=void 0,this.it=e;if(e===We)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Da.directiveName="unsafeHTML",Da.resultType=1;const qo=po(Da);var bt=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Me(this,"help-text","label"),this.localize=new St(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>N`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,s=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(s||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),o=r.indexOf(this.currentOption);let n=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=o+1,n>r.length-1&&(n=0)):t.key==="ArrowUp"?(n=o-1,n<0&&(n=r.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const o of r)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const s=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const s=t.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(e)?e:[e],i=[];t.forEach(r=>i.push(r.value)),this.setSelectedOptions(t.filter(r=>s.includes(r.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),s=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,s;const i=this.getAllOptions();this.selectedOptions=i.filter(o=>o.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(t=o?.value)!=null?t:"",this.displayLabel=(s=(e=o?.getTextLabel)==null?void 0:e.call(o))!=null?s:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(t,e);return N`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof s=="string"?qo(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return N`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return N``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ie(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Ft(this,"select.show",{dir:this.localize.dir()});await Gt(this.popup.popup,t,e),this.currentOption&&Pa(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ie(this);const{keyframes:t,options:e}=Ft(this,"select.hide",{dir:this.localize.dir()});await Gt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Oe(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Oe(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return N`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${ot({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?N`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${r?N`
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
    `}};bt.styles=[nt,Ni,vm];bt.dependencies={"sl-icon":Rt,"sl-popup":It,"sl-tag":bi};c([K(".select")],bt.prototype,"popup",2);c([K(".select__combobox")],bt.prototype,"combobox",2);c([K(".select__display-input")],bt.prototype,"displayInput",2);c([K(".select__value-input")],bt.prototype,"valueInput",2);c([K(".select__listbox")],bt.prototype,"listbox",2);c([it()],bt.prototype,"hasFocus",2);c([it()],bt.prototype,"displayLabel",2);c([it()],bt.prototype,"currentOption",2);c([it()],bt.prototype,"selectedOptions",2);c([it()],bt.prototype,"valueHasChanged",2);c([f()],bt.prototype,"name",2);c([it()],bt.prototype,"value",1);c([f({attribute:"value"})],bt.prototype,"defaultValue",2);c([f({reflect:!0})],bt.prototype,"size",2);c([f()],bt.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],bt.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);c([f({type:Boolean})],bt.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"open",2);c([f({type:Boolean})],bt.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"pill",2);c([f()],bt.prototype,"label",2);c([f({reflect:!0})],bt.prototype,"placement",2);c([f({attribute:"help-text"})],bt.prototype,"helpText",2);c([f({reflect:!0})],bt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],bt.prototype,"required",2);c([f()],bt.prototype,"getTag",2);c([j("disabled",{waitUntilFirstUpdate:!0})],bt.prototype,"handleDisabledChange",1);c([j(["defaultValue","value"],{waitUntilFirstUpdate:!0})],bt.prototype,"handleValueChange",1);c([j("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);Lt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Lt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});bt.define("sl-select");var km=st`
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
`,ns=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return N`
      <div
        part="base"
        class=${ot({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ns.styles=[nt,km];ns.dependencies={"sl-icon":Rt};c([K(".option__label")],ns.prototype,"defaultSlot",2);c([it()],ns.prototype,"current",2);c([it()],ns.prototype,"selected",2);c([it()],ns.prototype,"hasHover",2);c([f({reflect:!0})],ns.prototype,"value",2);c([f({type:Boolean,reflect:!0})],ns.prototype,"disabled",2);c([j("disabled")],ns.prototype,"handleDisabledChange",1);c([j("selected")],ns.prototype,"handleSelectedChange",1);c([j("value")],ns.prototype,"handleValueChange",1);ns.define("sl-option");var $r=[],Fu=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Pu();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=Oa(this.element);let o=r.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=r.length?o=0:o+n<0?o=r.length-1:o+=n,this.previousFocus=this.currentFocus;const a=r[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const l=[...kl()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){$r.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){$r=$r.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return $r[$r.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Oa(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],i=this.tabDirection==="forward"?e:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Cm=st`
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
`,Cl=t=>{var e;const{activeElement:s}=document;s&&t.contains(s)&&((e=document.activeElement)==null||e.blur())},Ps=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Me(this,"footer"),this.localize=new St(this),this.modal=new Fu(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Vr(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Nr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Ft(this,"dialog.denyClose",{dir:this.localize.dir()});Gt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Vr(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ie(this.dialog),ie(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ft(this,"dialog.show",{dir:this.localize.dir()}),s=Ft(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Gt(this.panel,e.keyframes,e.options),Gt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Cl(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ie(this.dialog),ie(this.overlay)]);const t=Ft(this,"dialog.hide",{dir:this.localize.dir()}),e=Ft(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Gt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Gt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Nr(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Oe(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${ot({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Q(this.noHeader?this.label:void 0)}
          aria-labelledby=${Q(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":N`
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
    `}};Ps.styles=[nt,Cm];Ps.dependencies={"sl-icon-button":ae};c([K(".dialog")],Ps.prototype,"dialog",2);c([K(".dialog__panel")],Ps.prototype,"panel",2);c([K(".dialog__overlay")],Ps.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],Ps.prototype,"open",2);c([f({reflect:!0})],Ps.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],Ps.prototype,"noHeader",2);c([j("open",{waitUntilFirstUpdate:!0})],Ps.prototype,"handleOpenChange",1);Lt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Lt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Lt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Lt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Lt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ps.define("sl-dialog");var Sm=st`
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
`,Ye=class Si extends Z{constructor(){super(...arguments),this.hasSlotController=new Me(this,"icon","suffix"),this.localize=new St(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,s="100%",i="0";this.countdownAnimation=e.animate([{width:s},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ie(this.base),this.base.hidden=!1;const{keyframes:e,options:s}=Ft(this,"alert.show",{dir:this.localize.dir()});await Gt(this.base,e,s),this.emit("sl-after-show")}else{Cl(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ie(this.base);const{keyframes:e,options:s}=Ft(this,"alert.hide",{dir:this.localize.dir()});await Gt(this.base,e,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Oe(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Si.toastStack.parentElement===null&&document.body.append(Si.toastStack),Si.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Si.toastStack.removeChild(this),e(),Si.toastStack.querySelector("sl-alert")===null&&Si.toastStack.remove()},{once:!0})})}render(){return N`
      <div
        part="base"
        class=${ot({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?N`
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

        ${this.countdown?N`
              <div
                class=${ot({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Ye.styles=[nt,Sm];Ye.dependencies={"sl-icon-button":ae};c([K('[part~="base"]')],Ye.prototype,"base",2);c([K(".alert__countdown-elapsed")],Ye.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],Ye.prototype,"open",2);c([f({type:Boolean,reflect:!0})],Ye.prototype,"closable",2);c([f({reflect:!0})],Ye.prototype,"variant",2);c([f({type:Number})],Ye.prototype,"duration",2);c([f({type:String,reflect:!0})],Ye.prototype,"countdown",2);c([it()],Ye.prototype,"remainingTime",2);c([j("open",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleOpenChange",1);c([j("duration")],Ye.prototype,"handleDurationChange",1);var Em=Ye;Lt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Lt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Em.define("sl-alert");var Am=st`
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
`,$m=st`
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
`,le=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Me(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return N`
      <div
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${ot({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Q(this.value)}
            .indeterminate=${Di(this.indeterminate)}
            .checked=${Di(this.checked)}
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
            ${this.checked?N`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?N`
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
    `}};le.styles=[nt,Ni,$m];le.dependencies={"sl-icon":Rt};c([K('input[type="checkbox"]')],le.prototype,"input",2);c([it()],le.prototype,"hasFocus",2);c([f()],le.prototype,"title",2);c([f()],le.prototype,"name",2);c([f()],le.prototype,"value",2);c([f({reflect:!0})],le.prototype,"size",2);c([f({type:Boolean,reflect:!0})],le.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],le.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],le.prototype,"indeterminate",2);c([mr("checked")],le.prototype,"defaultChecked",2);c([f({reflect:!0})],le.prototype,"form",2);c([f({type:Boolean,reflect:!0})],le.prototype,"required",2);c([f({attribute:"help-text"})],le.prototype,"helpText",2);c([j("disabled",{waitUntilFirstUpdate:!0})],le.prototype,"handleDisabledChange",1);c([j(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],le.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mc(t,e,s){return t?e(t):s?.(t)}var Xt=class za extends Z{constructor(){super(...arguments),this.localize=new St(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ie(this.childrenContainer);const{keyframes:e,options:s}=Ft(this,"tree-item.collapse",{dir:this.localize.dir()});await Gt(this.childrenContainer,sn(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&za.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ie(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=Ft(this,"tree-item.expand",{dir:this.localize.dir()});await Gt(this.childrenContainer,sn(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>za.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return N`
      <div
        part="base"
        class="${ot({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${ot({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${Mc(this.loading,()=>N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Mc(this.selectable,()=>N`
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
                ?checked="${Di(this.selected)}"
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
    `}};Xt.styles=[nt,Am];Xt.dependencies={"sl-checkbox":le,"sl-icon":Rt,"sl-spinner":mo};c([it()],Xt.prototype,"indeterminate",2);c([it()],Xt.prototype,"isLeaf",2);c([it()],Xt.prototype,"loading",2);c([it()],Xt.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],Xt.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],Xt.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Xt.prototype,"lazy",2);c([K("slot:not([name])")],Xt.prototype,"defaultSlot",2);c([K("slot[name=children]")],Xt.prototype,"childrenSlot",2);c([K(".tree-item__item")],Xt.prototype,"itemElement",2);c([K(".tree-item__children")],Xt.prototype,"childrenContainer",2);c([K(".tree-item__expand-button slot")],Xt.prototype,"expandButtonSlot",2);c([j("loading",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleLoadingChange",1);c([j("disabled")],Xt.prototype,"handleDisabledChange",1);c([j("selected")],Xt.prototype,"handleSelectedChange",1);c([j("expanded",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleExpandedChange",1);c([j("expanded",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleExpandAnimation",1);c([j("lazy",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleLazyChange",1);var Fr=Xt;Lt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Lt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Fr.define("sl-tree-item");var Tm=st`
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
`,he=class extends Z{constructor(){super(),this.localize=new St(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Lc(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Lc(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ie(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=Ft(this,"tooltip.show",{dir:this.localize.dir()});await Gt(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ie(this.body);const{keyframes:s,options:i}=Ft(this,"tooltip.hide",{dir:this.localize.dir()});await Gt(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Oe(this,"sl-after-hide")}render(){return N`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ot({tooltip:!0,"tooltip--open":this.open})}
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
    `}};he.styles=[nt,Tm];he.dependencies={"sl-popup":It};c([K("slot:not([name])")],he.prototype,"defaultSlot",2);c([K(".tooltip__body")],he.prototype,"body",2);c([K("sl-popup")],he.prototype,"popup",2);c([f()],he.prototype,"content",2);c([f()],he.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],he.prototype,"disabled",2);c([f({type:Number})],he.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],he.prototype,"open",2);c([f({type:Number})],he.prototype,"skidding",2);c([f()],he.prototype,"trigger",2);c([f({type:Boolean})],he.prototype,"hoist",2);c([j("open",{waitUntilFirstUpdate:!0})],he.prototype,"handleOpenChange",1);c([j(["content","distance","hoist","placement","skidding"])],he.prototype,"handleOptionsChange",1);c([j("disabled")],he.prototype,"handleDisabledChange",1);Lt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Lt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});he.define("sl-tooltip");var Im=st`
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
`;function ee(t,e,s){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>s?i(s):i(t)}function Rc(t,e=!1){function s(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(d=>d.selected),l=n.every(d=>!d.selected&&!d.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function i(o){const n=o.parentElement;Fr.isTreeItem(n)&&(s(n),i(n))}function r(o){for(const n of o.getChildrenItems())n.selected=e?o.selected||n.selected:!n.disabled&&o.selected,r(n);e&&s(o)}r(t),i(t)}var Fi=class extends Z{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new St(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(s===null?t.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(Fr.isTreeItem),i=[...e.removedNodes].filter(Fr.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Fr.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Rc(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(i=>!e.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>{var o;return["input","textarea"].includes((o=r?.tagName)==null?void 0:o.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(l=>l.matches(":focus")),o=e[r],n=l=>{const d=e[ee(l,0,e.length-1)];this.focusItem(d)},a=l=>{o.expanded=l};t.key==="ArrowDown"?n(r+1):t.key==="ArrowUp"?n(r-1):s&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(r+1):a(!0):s&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(r-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),i=t.composedPath().some(r=>{var o;return(o=r?.classList)==null?void 0:o.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Rc(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var i;if(s.disabled)return!1;const r=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(s),!e.has(s)})}render(){return N`
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
    `}};Fi.styles=[nt,Im];c([K("slot:not([name])")],Fi.prototype,"defaultSlot",2);c([K("slot[name=expand-icon]")],Fi.prototype,"expandedIconSlot",2);c([K("slot[name=collapse-icon]")],Fi.prototype,"collapsedIconSlot",2);c([f()],Fi.prototype,"selection",2);c([j("selection")],Fi.prototype,"handleSelectionChange",1);Fi.define("sl-tree");var Lm=st`
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
`,Sl=class extends Z{render(){return N` <slot></slot> `}};Sl.styles=[nt,Lm];Sl.define("sl-visually-hidden");var Om=st`
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
`,Mm=0,bo=class extends Z{constructor(){super(...arguments),this.attrId=++Mm,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return N`
      <slot
        part="base"
        class=${ot({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};bo.styles=[nt,Om];c([f({reflect:!0})],bo.prototype,"name",2);c([f({type:Boolean,reflect:!0})],bo.prototype,"active",2);c([j("active")],bo.prototype,"handleActiveChange",1);bo.define("sl-tab-panel");bi.define("sl-tag");var Rm=st`
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
`,Pm=0,fs=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.attrId=++Pm,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,N`
      <div
        part="base"
        class=${ot({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?N`
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
    `}};fs.styles=[nt,Rm];fs.dependencies={"sl-icon-button":ae};c([K(".tab")],fs.prototype,"tab",2);c([f({reflect:!0})],fs.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],fs.prototype,"active",2);c([f({type:Boolean,reflect:!0})],fs.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],fs.prototype,"disabled",2);c([f({type:Number,reflect:!0})],fs.prototype,"tabIndex",2);c([j("active")],fs.prototype,"handleActiveChange",1);c([j("disabled")],fs.prototype,"handleDisabledChange",1);fs.define("sl-tab");var Dm=st`
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
`,zm=st`
  :host {
    display: contents;
  }
`,yo=class extends Z{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};yo.styles=[nt,zm];c([f({type:Boolean,reflect:!0})],yo.prototype,"disabled",2);c([j("disabled",{waitUntilFirstUpdate:!0})],yo.prototype,"handleDisabledChange",1);var _e=class extends Z{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new St(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const s=e.filter(({target:i})=>{if(i===this)return!0;if(i.closest("sl-tab-group")!==this)return!1;const r=i.tagName.toLowerCase();return r==="sl-tab"||r==="sl-tab-panel"});if(s.length!==0){if(s.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(i=>i.attributeName==="active")){const r=s.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);r&&this.setActiveTab(r)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,i)=>{var r;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if(r?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&Pa(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Qs({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Pa(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(s=this.tabs[r]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;r+=i}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return N`
      <div
        part="base"
        class=${ot({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ot({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ot({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};_e.styles=[nt,Dm];_e.dependencies={"sl-icon-button":ae,"sl-resize-observer":yo};c([K(".tab-group")],_e.prototype,"tabGroup",2);c([K(".tab-group__body")],_e.prototype,"body",2);c([K(".tab-group__nav")],_e.prototype,"nav",2);c([K(".tab-group__indicator")],_e.prototype,"indicator",2);c([it()],_e.prototype,"hasScrollControls",2);c([it()],_e.prototype,"shouldHideScrollStartButton",2);c([it()],_e.prototype,"shouldHideScrollEndButton",2);c([f()],_e.prototype,"placement",2);c([f()],_e.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],_e.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],_e.prototype,"fixedScrollControls",2);c([ho({passive:!0})],_e.prototype,"updateScrollButtons",1);c([j("noScrollControls",{waitUntilFirstUpdate:!0})],_e.prototype,"updateScrollControls",1);c([j("placement",{waitUntilFirstUpdate:!0})],_e.prototype,"syncIndicator",1);_e.define("sl-tab-group");var Vm=st`
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
`,El=class extends Z{constructor(){super(...arguments),this.effect="none"}render(){return N`
      <div
        part="base"
        class=${ot({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};El.styles=[nt,Vm];c([f()],El.prototype,"effect",2);El.define("sl-skeleton");var Nm=st`
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
`;function Br(t,e){function s(r){const o=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,d=r.pageX-a,h=r.pageY-l;e?.onMove&&e.onMove(d,h)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&s(e.initialEvent)}var Pc=()=>null,Xe=class extends Z{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new St(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Pc,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:i,snapThreshold:r,isRtl:o,vertical:n})=>{let a=s,l=Number.POSITIVE_INFINITY;return e.forEach(d=>{let h;if(d.startsWith("repeat(")){const p=t.substring(7,t.length-1),g=p.endsWith("%"),v=Number.parseFloat(p),k=g?i*(v/100):v;h=Math.round((o&&!n?i-s:s)/k)*k}else d.endsWith("%")?h=i*(Number.parseFloat(d)/100):h=Number.parseFloat(d);o&&!n&&(h=i-h);const u=Math.abs(s-h);u<=r&&u<l&&(a=h,l=u)}),a}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=Pc}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Br(this,{onMove:(s,i)=>{var r;let o=this.vertical?i:s;this.primary==="end"&&(o=this.size-o),o=(r=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?r:o,this.position=ee(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=ee(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?s&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${i}`:s&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${r}`,this.style[e]="",N`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${Q(this.disabled?void 0:"0")}
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
    `}};Xe.styles=[nt,Nm];c([K(".divider")],Xe.prototype,"divider",2);c([f({type:Number,reflect:!0})],Xe.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],Xe.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],Xe.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);c([f()],Xe.prototype,"primary",2);c([f({reflect:!0})],Xe.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],Xe.prototype,"snapThreshold",2);c([j("position")],Xe.prototype,"handlePositionChange",1);c([j("positionInPixels")],Xe.prototype,"handlePositionInPixelsChange",1);c([j("vertical")],Xe.prototype,"handleVerticalChange",1);Xe.define("sl-split-panel");yo.define("sl-resize-observer");var Fm=st`
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
`,Kt=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this),this.hasSlotController=new Me(this,"help-text","label"),this.localize=new St(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",o=e*t;if(r){const n=`${e-o}px + ${t} * ${i}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${i} / 2))`}else{const n=`${o}px - ${t} * ${i}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return N`
      <div
        part="form-control"
        class=${ot({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${ot({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${Q(this.name)}
              ?disabled=${this.disabled}
              min=${Q(this.min)}
              max=${Q(this.max)}
              step=${Q(this.step)}
              .value=${Di(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?N`
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
    `}};Kt.styles=[nt,Ni,Fm];c([K(".range__control")],Kt.prototype,"input",2);c([K(".range__tooltip")],Kt.prototype,"output",2);c([it()],Kt.prototype,"hasFocus",2);c([it()],Kt.prototype,"hasTooltip",2);c([f()],Kt.prototype,"title",2);c([f()],Kt.prototype,"name",2);c([f({type:Number})],Kt.prototype,"value",2);c([f()],Kt.prototype,"label",2);c([f({attribute:"help-text"})],Kt.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);c([f({type:Number})],Kt.prototype,"min",2);c([f({type:Number})],Kt.prototype,"max",2);c([f({type:Number})],Kt.prototype,"step",2);c([f()],Kt.prototype,"tooltip",2);c([f({attribute:!1})],Kt.prototype,"tooltipFormatter",2);c([f({reflect:!0})],Kt.prototype,"form",2);c([mr()],Kt.prototype,"defaultValue",2);c([ho({passive:!0})],Kt.prototype,"handleThumbDragStart",1);c([j("value",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleValueChange",1);c([j("disabled",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleDisabledChange",1);c([j("hasTooltip",{waitUntilFirstUpdate:!0})],Kt.prototype,"syncRange",1);Kt.define("sl-range");var Bm=st`
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
 */const Bu="important",Um=" !"+Bu,Pe=po(class extends fo{constructor(t){if(super(t),t.type!==Es.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const o=typeof r=="string"&&r.endsWith(Um);i.includes("-")||o?s.setProperty(i,o?r.slice(0,-11):r,o?Bu:""):s[i]=r}}return We}});var $e=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:i,width:r}=this.rating.getBoundingClientRect(),o=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-s)/r*this.max,this.precision);return ee(o,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,N`
      <div
        part="base"
        class=${ot({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
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
          ${e.map(i=>s>i&&s<i+1?N`
                <span
                  class=${ot({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${Pe({clipPath:t?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${qo(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Pe({clipPath:t?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${qo(this.getSymbol(i+1))}
                  </div>
                </span>
              `:N`
              <span
                class=${ot({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
              >
                ${qo(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};$e.styles=[nt,Bm];$e.dependencies={"sl-icon":Rt};c([K(".rating")],$e.prototype,"rating",2);c([it()],$e.prototype,"hoverValue",2);c([it()],$e.prototype,"isHovering",2);c([f()],$e.prototype,"label",2);c([f({type:Number})],$e.prototype,"value",2);c([f({type:Number})],$e.prototype,"max",2);c([f({type:Number})],$e.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);c([f()],$e.prototype,"getSymbol",2);c([ho({passive:!0})],$e.prototype,"handleTouchMove",1);c([j("hoverValue")],$e.prototype,"handleHoverValueChange",1);c([j("isHovering")],$e.prototype,"handleIsHoveringChange",1);$e.define("sl-rating");var Hm=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Bi=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:i,value:r}=Hm.find(o=>Math.abs(s)<o.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;i==="minute"?o=Lo("second"):i==="hour"?o=Lo("minute"):i==="day"?o=Lo("hour"):o=Lo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return N` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([it()],Bi.prototype,"isoTime",2);c([it()],Bi.prototype,"relativeTime",2);c([f()],Bi.prototype,"date",2);c([f()],Bi.prototype,"format",2);c([f()],Bi.prototype,"numeric",2);c([f({type:Boolean})],Bi.prototype,"sync",2);function Lo(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}Bi.define("sl-relative-time");var jm=st`
  ${Nu}

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
`,gs=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Me(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return zr`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${ot({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Q(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};gs.styles=[nt,jm];c([K(".button")],gs.prototype,"input",2);c([K(".hidden-input")],gs.prototype,"hiddenInput",2);c([it()],gs.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],gs.prototype,"checked",2);c([f()],gs.prototype,"value",2);c([f({type:Boolean,reflect:!0})],gs.prototype,"disabled",2);c([f({reflect:!0})],gs.prototype,"size",2);c([f({type:Boolean,reflect:!0})],gs.prototype,"pill",2);c([j("disabled",{waitUntilFirstUpdate:!0})],gs.prototype,"handleDisabledChange",1);gs.define("sl-radio-button");var Wm=st`
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
`,we=class extends Z{constructor(){super(...arguments),this.formControlController=new Zs(this),this.hasSlotController=new Me(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?pm:t?hm:In}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,s.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(a=>!a.disabled),i=(e=s.find(a=>a.checked))!=null?e:s[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,o=this.value;let n=s.indexOf(i)+r;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].setAttribute("tabindex","0"),s[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(o=>o.checked),i=e.find(o=>!o.disabled),r=s||i;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=N`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return N`
      <fieldset
        part="form-control"
        class=${ot({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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

          ${this.hasButtonGroup?N`
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
    `}};we.styles=[nt,Ni,Wm];we.dependencies={"sl-button-group":Vi};c([K("slot:not([name])")],we.prototype,"defaultSlot",2);c([K(".radio-group__validation-input")],we.prototype,"validationInput",2);c([it()],we.prototype,"hasButtonGroup",2);c([it()],we.prototype,"errorMessage",2);c([it()],we.prototype,"defaultValue",2);c([f()],we.prototype,"label",2);c([f({attribute:"help-text"})],we.prototype,"helpText",2);c([f()],we.prototype,"name",2);c([f({reflect:!0})],we.prototype,"value",2);c([f({reflect:!0})],we.prototype,"size",2);c([f({reflect:!0})],we.prototype,"form",2);c([f({type:Boolean,reflect:!0})],we.prototype,"required",2);c([j("size",{waitUntilFirstUpdate:!0})],we.prototype,"handleSizeChange",1);c([j("value")],we.prototype,"handleValueChange",1);we.define("sl-radio-group");var Km=st`
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
`,br=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return N`
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
    `}};br.styles=[nt,Km];c([K(".progress-ring__indicator")],br.prototype,"indicator",2);c([it()],br.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],br.prototype,"value",2);c([f()],br.prototype,"label",2);br.define("sl-progress-ring");var qm=st`
  :host {
    display: inline-block;
  }
`;let Uu=null;class Hu{}Hu.render=function(t,e){Uu(t,e)};self.QrCreator=Hu;(function(t){function e(a,l,d,h){var u={},p=t(d,l);p.u(a),p.J(),h=h||0;var g=p.h(),v=p.h()+2*h;return u.text=a,u.level=l,u.version=d,u.O=v,u.a=function(k,L){return k-=h,L-=h,0>k||k>=g||0>L||L>=g?!1:p.a(k,L)},u}function s(a,l,d,h,u,p,g,v,k,L){function _(w,A,b,C,O,T,B){w?(a.lineTo(A+T,b+B),a.arcTo(A,b,C,O,p)):a.lineTo(A,b)}g?a.moveTo(l+p,d):a.moveTo(l,d),_(v,h,d,h,u,-p,0),_(k,h,u,l,u,0,-p),_(L,l,u,l,d,p,0),_(g,l,d,h,d,0,p)}function i(a,l,d,h,u,p,g,v,k,L){function _(w,A,b,C){a.moveTo(w+b,A),a.lineTo(w,A),a.lineTo(w,A+C),a.arcTo(w,A,w+b,A,p)}g&&_(l,d,p,p),v&&_(h,d,-p,p),k&&_(h,u,-p,-p),L&&_(l,u,p,-p)}function r(a,l){var d=l.fill;if(typeof d=="string")a.fillStyle=d;else{var h=d.type,u=d.colorStops;if(d=d.position.map(g=>Math.round(g*l.size)),h==="linear-gradient")var p=a.createLinearGradient.apply(a,d);else if(h==="radial-gradient")p=a.createRadialGradient.apply(a,d);else throw Error("Unsupported fill");u.forEach(([g,v])=>{p.addColorStop(g,v)}),a.fillStyle=p}}function o(a,l){t:{var d=l.text,h=l.v,u=l.N,p=l.K,g=l.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var v=e(d,h,u,g);break t}catch{}v=void 0}if(!v)return null;for(d=a.getContext("2d"),l.background&&(d.fillStyle=l.background,d.fillRect(l.left,l.top,l.size,l.size)),h=v.O,p=l.size/h,d.beginPath(),g=0;g<h;g+=1)for(u=0;u<h;u+=1){var k=d,L=l.left+u*p,_=l.top+g*p,w=g,A=u,b=v.a,C=L+p,O=_+p,T=w-1,B=w+1,P=A-1,D=A+1,lt=Math.floor(Math.min(.5,Math.max(0,l.R))*p),et=b(w,A),gt=b(T,P),vt=b(T,A);T=b(T,D);var kt=b(w,D);D=b(B,D),A=b(B,A),B=b(B,P),w=b(w,P),L=Math.round(L),_=Math.round(_),C=Math.round(C),O=Math.round(O),et?s(k,L,_,C,O,lt,!vt&&!w,!vt&&!kt,!A&&!kt,!A&&!w):i(k,L,_,C,O,lt,vt&&w&&gt,vt&&kt&&T,A&&kt&&D,A&&w&&B)}return r(d,l),d.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Uu=function(a,l){var d={};Object.assign(d,n,a),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,l instanceof HTMLCanvasElement?((l.width!==d.size||l.height!==d.size)&&(l.width=d.size,l.height=d.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,d)):(a=document.createElement("canvas"),a.width=d.size,a.height=d.size,d=o(a,d),l.appendChild(d))}})((function(){function t(l){var d=s.s(l);return{S:function(){return 4},b:function(){return d.length},write:function(h){for(var u=0;u<d.length;u+=1)h.put(d[u],8)}}}function e(){var l=[],d=0,h={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var g=0;g<p;g+=1)h.m((u>>>p-g-1&1)==1)},f:function(){return d},m:function(u){var p=Math.floor(d/8);l.length<=p&&l.push(0),u&&(l[p]|=128>>>d%8),d+=1}};return h}function s(l,d){function h(w,A){for(var b=-1;7>=b;b+=1)if(!(-1>=w+b||v<=w+b))for(var C=-1;7>=C;C+=1)-1>=A+C||v<=A+C||(g[w+b][A+C]=0<=b&&6>=b&&(C==0||C==6)||0<=C&&6>=C&&(b==0||b==6)||2<=b&&4>=b&&2<=C&&4>=C)}function u(w,A){for(var b=v=4*l+17,C=Array(b),O=0;O<b;O+=1){C[O]=Array(b);for(var T=0;T<b;T+=1)C[O][T]=null}for(g=C,h(0,0),h(v-7,0),h(0,v-7),b=o.G(l),C=0;C<b.length;C+=1)for(O=0;O<b.length;O+=1){T=b[C];var B=b[O];if(g[T][B]==null)for(var P=-2;2>=P;P+=1)for(var D=-2;2>=D;D+=1)g[T+P][B+D]=P==-2||P==2||D==-2||D==2||P==0&&D==0}for(b=8;b<v-8;b+=1)g[b][6]==null&&(g[b][6]=b%2==0);for(b=8;b<v-8;b+=1)g[6][b]==null&&(g[6][b]=b%2==0);for(b=o.w(p<<3|A),C=0;15>C;C+=1)O=!w&&(b>>C&1)==1,g[6>C?C:8>C?C+1:v-15+C][8]=O,g[8][8>C?v-C-1:9>C?15-C:14-C]=O;if(g[v-8][8]=!w,7<=l){for(b=o.A(l),C=0;18>C;C+=1)O=!w&&(b>>C&1)==1,g[Math.floor(C/3)][C%3+v-8-3]=O;for(C=0;18>C;C+=1)O=!w&&(b>>C&1)==1,g[C%3+v-8-3][Math.floor(C/3)]=O}if(k==null){for(w=a.I(l,p),b=e(),C=0;C<L.length;C+=1)O=L[C],b.put(4,4),b.put(O.b(),o.f(4,l)),O.write(b);for(C=O=0;C<w.length;C+=1)O+=w[C].j;if(b.f()>8*O)throw Error("code length overflow. ("+b.f()+">"+8*O+")");for(b.f()+4<=8*O&&b.put(0,4);b.f()%8!=0;)b.m(!1);for(;!(b.f()>=8*O)&&(b.put(236,8),!(b.f()>=8*O));)b.put(17,8);var lt=0;for(O=C=0,T=Array(w.length),B=Array(w.length),P=0;P<w.length;P+=1){var et=w[P].j,gt=w[P].o-et;for(C=Math.max(C,et),O=Math.max(O,gt),T[P]=Array(et),D=0;D<T[P].length;D+=1)T[P][D]=255&b.B()[D+lt];for(lt+=et,D=o.C(gt),et=i(T[P],D.b()-1).l(D),B[P]=Array(D.b()-1),D=0;D<B[P].length;D+=1)gt=D+et.b()-B[P].length,B[P][D]=0<=gt?et.c(gt):0}for(D=b=0;D<w.length;D+=1)b+=w[D].o;for(b=Array(b),D=lt=0;D<C;D+=1)for(P=0;P<w.length;P+=1)D<T[P].length&&(b[lt]=T[P][D],lt+=1);for(D=0;D<O;D+=1)for(P=0;P<w.length;P+=1)D<B[P].length&&(b[lt]=B[P][D],lt+=1);k=b}for(w=k,b=-1,C=v-1,O=7,T=0,A=o.F(A),B=v-1;0<B;B-=2)for(B==6&&--B;;){for(P=0;2>P;P+=1)g[C][B-P]==null&&(D=!1,T<w.length&&(D=(w[T]>>>O&1)==1),A(C,B-P)&&(D=!D),g[C][B-P]=D,--O,O==-1&&(T+=1,O=7));if(C+=b,0>C||v<=C){C-=b,b=-b;break}}}var p=r[d],g=null,v=0,k=null,L=[],_={u:function(w){w=t(w),L.push(w),k=null},a:function(w,A){if(0>w||v<=w||0>A||v<=A)throw Error(w+","+A);return g[w][A]},h:function(){return v},J:function(){for(var w=0,A=0,b=0;8>b;b+=1){u(!0,b);var C=o.D(_);(b==0||w>C)&&(w=C,A=b)}u(!1,A)}};return _}function i(l,d){if(typeof l.length>"u")throw Error(l.length+"/"+d);var h=(function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+d),v=0;v<l.length-p;v+=1)g[v]=l[v+p];return g})(),u={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(u.b()+p.b()-1),v=0;v<u.b();v+=1)for(var k=0;k<p.b();k+=1)g[v+k]^=n.i(n.g(u.c(v))+n.g(p.c(k)));return i(g,0)},l:function(p){if(0>u.b()-p.b())return u;for(var g=n.g(u.c(0))-n.g(p.c(0)),v=Array(u.b()),k=0;k<u.b();k+=1)v[k]=u.c(k);for(k=0;k<p.b();k+=1)v[k]^=n.i(n.g(p.c(k))+g);return i(v,0).l(p)}};return u}s.s=function(l){for(var d=[],h=0;h<l.length;h++){var u=l.charCodeAt(h);128>u?d.push(u):2048>u?d.push(192|u>>6,128|u&63):55296>u||57344<=u?d.push(224|u>>12,128|u>>6&63,128|u&63):(h++,u=65536+((u&1023)<<10|l.charCodeAt(h)&1023),d.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return d};var r={L:1,M:0,Q:3,H:2},o=(function(){function l(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(u){for(var p=u<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return u<<12|p},G:function(u){return d[u-1]},F:function(u){switch(u){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=i([1],0),g=0;g<u;g+=1)p=p.multiply(i([1,n.i(g)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),g=0,v=0;v<p;v+=1)for(var k=0;k<p;k+=1){for(var L=0,_=u.a(v,k),w=-1;1>=w;w+=1)if(!(0>v+w||p<=v+w))for(var A=-1;1>=A;A+=1)0>k+A||p<=k+A||(w!=0||A!=0)&&_==u.a(v+w,k+A)&&(L+=1);5<L&&(g+=3+L-5)}for(v=0;v<p-1;v+=1)for(k=0;k<p-1;k+=1)L=0,u.a(v,k)&&(L+=1),u.a(v+1,k)&&(L+=1),u.a(v,k+1)&&(L+=1),u.a(v+1,k+1)&&(L+=1),(L==0||L==4)&&(g+=3);for(v=0;v<p;v+=1)for(k=0;k<p-6;k+=1)u.a(v,k)&&!u.a(v,k+1)&&u.a(v,k+2)&&u.a(v,k+3)&&u.a(v,k+4)&&!u.a(v,k+5)&&u.a(v,k+6)&&(g+=40);for(k=0;k<p;k+=1)for(v=0;v<p-6;v+=1)u.a(v,k)&&!u.a(v+1,k)&&u.a(v+2,k)&&u.a(v+3,k)&&u.a(v+4,k)&&!u.a(v+5,k)&&u.a(v+6,k)&&(g+=40);for(k=L=0;k<p;k+=1)for(v=0;v<p;v+=1)u.a(v,k)&&(L+=1);return g+=Math.abs(100*L/p/p-50)/5*10}};return h})(),n=(function(){for(var l=Array(256),d=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)d[l[h]]=h;return{g:function(u){if(1>u)throw Error("glog("+u+")");return d[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}})(),a=(function(){function l(u,p){switch(p){case r.L:return d[4*(u-1)];case r.M:return d[4*(u-1)+1];case r.Q:return d[4*(u-1)+2];case r.H:return d[4*(u-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(u,p){var g=l(u,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=g.length/3,p=[];for(var v=0;v<u;v+=1)for(var k=g[3*v],L=g[3*v+1],_=g[3*v+2],w=0;w<k;w+=1){var A=_,b={};b.o=L,b.j=A,p.push(b)}return p}};return h})();return s})());const Gm=QrCreator;var ms=class extends Z{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Gm.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return N`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Pe({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ms.styles=[nt,qm];c([K("canvas")],ms.prototype,"canvas",2);c([f()],ms.prototype,"value",2);c([f()],ms.prototype,"label",2);c([f({type:Number})],ms.prototype,"size",2);c([f()],ms.prototype,"fill",2);c([f()],ms.prototype,"background",2);c([f({type:Number})],ms.prototype,"radius",2);c([f({attribute:"error-correction"})],ms.prototype,"errorCorrection",2);c([j(["background","errorCorrection","fill","radius","size","value"])],ms.prototype,"generate",1);ms.define("sl-qr-code");var Ym=st`
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
`,Ds=class extends Z{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return N`
      <span
        part="base"
        class=${ot({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?N` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ds.styles=[nt,Ym];Ds.dependencies={"sl-icon":Rt};c([it()],Ds.prototype,"checked",2);c([it()],Ds.prototype,"hasFocus",2);c([f()],Ds.prototype,"value",2);c([f({reflect:!0})],Ds.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Ds.prototype,"disabled",2);c([j("checked")],Ds.prototype,"handleCheckedChange",1);c([j("disabled",{waitUntilFirstUpdate:!0})],Ds.prototype,"handleDisabledChange",1);Ds.define("sl-radio");It.define("sl-popup");var Xm=st`
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
`,vo=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return N`
      <div
        part="base"
        class=${ot({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${Q(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Pe({width:`${this.value}%`})}>
          ${this.indeterminate?"":N` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};vo.styles=[nt,Xm];c([f({type:Number,reflect:!0})],vo.prototype,"value",2);c([f({type:Boolean,reflect:!0})],vo.prototype,"indeterminate",2);c([f()],vo.prototype,"label",2);vo.define("sl-progress-bar");var Jm=st`
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
`,ju=class extends Z{render(){return N` <slot part="base" class="menu-label"></slot> `}};ju.styles=[nt,Jm];ju.define("sl-menu-label");var Qm=st`
  :host {
    display: contents;
  }
`,zs=class extends Z{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return N` <slot></slot> `}};zs.styles=[nt,Qm];c([f({reflect:!0})],zs.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],zs.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],zs.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],zs.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],zs.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],zs.prototype,"disabled",2);c([j("disabled")],zs.prototype,"handleDisabledChange",1);c([j("attr",{waitUntilFirstUpdate:!0}),j("attr-old-value",{waitUntilFirstUpdate:!0}),j("char-data",{waitUntilFirstUpdate:!0}),j("char-data-old-value",{waitUntilFirstUpdate:!0}),j("childList",{waitUntilFirstUpdate:!0})],zs.prototype,"handleChange",1);zs.define("sl-mutation-observer");var Zm=st`
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
`,Ui=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.preventDefault(),Br(this.base,{onMove:i=>{this.position=parseFloat(ee(i/e*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=ee(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return N`
      <div
        part="base"
        id="image-comparer"
        class=${ot({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Pe({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Pe({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Ui.styles=[nt,Zm];Ui.scopedElement={"sl-icon":Rt};c([K(".image-comparer")],Ui.prototype,"base",2);c([K(".image-comparer__handle")],Ui.prototype,"handle",2);c([f({type:Number,reflect:!0})],Ui.prototype,"position",2);c([j("position",{waitUntilFirstUpdate:!0})],Ui.prototype,"handlePositionChange",1);Ui.define("sl-image-comparer");var tb=st`
  :host {
    display: block;
  }
`,ia=new Map;function eb(t,e="cors"){const s=ia.get(t);if(s!==void 0)return Promise.resolve(s);const i=fetch(t,{mode:e}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return ia.set(t,o),o});return ia.set(t,i),i}var yr=class extends Z{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await eb(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return N`<slot></slot>`}};yr.styles=[nt,tb];c([f()],yr.prototype,"src",2);c([f()],yr.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],yr.prototype,"allowScripts",2);c([j("src")],yr.prototype,"handleSrcChange",1);yr.define("sl-include");Rt.define("sl-icon");var Ln=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),r=s[i]+this.unit,o=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};c([f({type:Number})],Ln.prototype,"value",2);c([f()],Ln.prototype,"unit",2);c([f()],Ln.prototype,"display",2);Ln.define("sl-format-bytes");var Je=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return N`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};c([f()],Je.prototype,"date",2);c([f()],Je.prototype,"weekday",2);c([f()],Je.prototype,"era",2);c([f()],Je.prototype,"year",2);c([f()],Je.prototype,"month",2);c([f()],Je.prototype,"day",2);c([f()],Je.prototype,"hour",2);c([f()],Je.prototype,"minute",2);c([f()],Je.prototype,"second",2);c([f({attribute:"time-zone-name"})],Je.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],Je.prototype,"timeZone",2);c([f({attribute:"hour-format"})],Je.prototype,"hourFormat",2);Je.define("sl-format-date");var bs=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],bs.prototype,"value",2);c([f()],bs.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],bs.prototype,"noGrouping",2);c([f()],bs.prototype,"currency",2);c([f({attribute:"currency-display"})],bs.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],bs.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],bs.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],bs.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],bs.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],bs.prototype,"maximumSignificantDigits",2);bs.define("sl-format-number");var sb=st`
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
`,On=class extends Z{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};On.styles=[nt,sb];c([f({type:Boolean,reflect:!0})],On.prototype,"vertical",2);c([j("vertical")],On.prototype,"handleVerticalChange",1);On.define("sl-divider");var ib=st`
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
`;function Dc(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Qe=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Me(this,"footer"),this.localize=new St(this),this.modal=new Fu(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Vr(this)))}disconnectedCallback(){super.disconnectedCallback(),Nr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Ft(this,"drawer.denyClose",{dir:this.localize.dir()});Gt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Vr(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ie(this.drawer),ie(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ft(this,`drawer.show${Dc(this.placement)}`,{dir:this.localize.dir()}),s=Ft(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Gt(this.panel,e.keyframes,e.options),Gt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Cl(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Nr(this)),await Promise.all([ie(this.drawer),ie(this.overlay)]);const t=Ft(this,`drawer.hide${Dc(this.placement)}`,{dir:this.localize.dir()}),e=Ft(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Gt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Gt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Vr(this)),this.open&&this.contained&&(this.modal.deactivate(),Nr(this))}async show(){if(!this.open)return this.open=!0,Oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Oe(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${ot({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Q(this.noHeader?this.label:void 0)}
          aria-labelledby=${Q(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":N`
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
    `}};Qe.styles=[nt,ib];Qe.dependencies={"sl-icon-button":ae};c([K(".drawer")],Qe.prototype,"drawer",2);c([K(".drawer__panel")],Qe.prototype,"panel",2);c([K(".drawer__overlay")],Qe.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],Qe.prototype,"open",2);c([f({reflect:!0})],Qe.prototype,"label",2);c([f({reflect:!0})],Qe.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],Qe.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],Qe.prototype,"noHeader",2);c([j("open",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleOpenChange",1);c([j("contained",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleNoModalChange",1);Lt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Lt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Lt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Lt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Lt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Lt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Lt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Lt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Lt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Lt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Lt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Qe.define("sl-drawer");var rb=st`
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
`,pe=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";s?[r,o]=this.from.trim().split("."):i&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(r):null;n?i?t=n.getAttribute(o)||"":s?t=n[o]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),r=t==="success"?this.successIcon:this.errorIcon,o=Ft(this,"copy.in",{dir:"ltr"}),n=Ft(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return N`
      <sl-tooltip
        class=${ot({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};pe.styles=[nt,rb];pe.dependencies={"sl-icon":Rt,"sl-tooltip":he};c([K('slot[name="copy-icon"]')],pe.prototype,"copyIcon",2);c([K('slot[name="success-icon"]')],pe.prototype,"successIcon",2);c([K('slot[name="error-icon"]')],pe.prototype,"errorIcon",2);c([K("sl-tooltip")],pe.prototype,"tooltip",2);c([it()],pe.prototype,"isCopying",2);c([it()],pe.prototype,"status",2);c([f()],pe.prototype,"value",2);c([f()],pe.prototype,"from",2);c([f({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);c([f({attribute:"copy-label"})],pe.prototype,"copyLabel",2);c([f({attribute:"success-label"})],pe.prototype,"successLabel",2);c([f({attribute:"error-label"})],pe.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],pe.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],pe.prototype,"tooltipPlacement",2);c([f({type:Boolean})],pe.prototype,"hoist",2);Lt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Lt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});pe.define("sl-copy-button");le.define("sl-checkbox");var ob=st`
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
`;function be(t,e){nb(t)&&(t="100%");const s=ab(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Oo(t){return Math.min(1,Math.max(0,t))}function nb(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function ab(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Wu(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Mo(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ii(t){return t.length===1?"0"+t:String(t)}function lb(t,e,s){return{r:be(t,255)*255,g:be(e,255)*255,b:be(s,255)*255}}function zc(t,e,s){t=be(t,255),e=be(e,255),s=be(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0,n=0;const a=(i+r)/2;if(i===r)n=0,o=0;else{const l=i-r;switch(n=a>.5?l/(2-i-r):l/(i+r),i){case t:o=(e-s)/l+(e<s?6:0);break;case e:o=(s-t)/l+2;break;case s:o=(t-e)/l+4;break}o/=6}return{h:o,s:n,l:a}}function ra(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function cb(t,e,s){let i,r,o;if(t=be(t,360),e=be(e,100),s=be(s,100),e===0)r=s,o=s,i=s;else{const n=s<.5?s*(1+e):s+e-s*e,a=2*s-n;i=ra(a,n,t+1/3),r=ra(a,n,t),o=ra(a,n,t-1/3)}return{r:i*255,g:r*255,b:o*255}}function Vc(t,e,s){t=be(t,255),e=be(e,255),s=be(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0;const n=i,a=i-r,l=i===0?0:a/i;if(i===r)o=0;else{switch(i){case t:o=(e-s)/a+(e<s?6:0);break;case e:o=(s-t)/a+2;break;case s:o=(t-e)/a+4;break}o/=6}return{h:o,s:l,v:n}}function db(t,e,s){t=be(t,360)*6,e=be(e,100),s=be(s,100);const i=Math.floor(t),r=t-i,o=s*(1-e),n=s*(1-r*e),a=s*(1-(1-r)*e),l=i%6,d=[s,n,o,o,a,s][l],h=[a,s,s,n,o,o][l],u=[o,o,a,s,s,n][l];return{r:d*255,g:h*255,b:u*255}}function Nc(t,e,s,i){const r=[Ii(Math.round(t).toString(16)),Ii(Math.round(e).toString(16)),Ii(Math.round(s).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function ub(t,e,s,i,r){const o=[Ii(Math.round(t).toString(16)),Ii(Math.round(e).toString(16)),Ii(Math.round(s).toString(16)),Ii(pb(i))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function hb(t,e,s,i){const r=t/100,o=e/100,n=s/100,a=i/100,l=255*(1-r)*(1-a),d=255*(1-o)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:d,b:h}}function Fc(t,e,s){let i=1-t/255,r=1-e/255,o=1-s/255,n=Math.min(i,r,o);return n===1?(i=0,r=0,o=0):(i=(i-n)/(1-n)*100,r=(r-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(o),k:Math.round(n)}}function pb(t){return Math.round(parseFloat(t)*255).toString(16)}function Bc(t){return Be(t)/255}function Be(t){return parseInt(t,16)}function fb(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Va={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function gb(t){let e={r:0,g:0,b:0},s=1,i=null,r=null,o=null,n=!1,a=!1;return typeof t=="string"&&(t=yb(t)),typeof t=="object"&&(Fe(t.r)&&Fe(t.g)&&Fe(t.b)?(e=lb(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Fe(t.h)&&Fe(t.s)&&Fe(t.v)?(i=Mo(t.s),r=Mo(t.v),e=db(t.h,i,r),n=!0,a="hsv"):Fe(t.h)&&Fe(t.s)&&Fe(t.l)?(i=Mo(t.s),o=Mo(t.l),e=cb(t.h,i,o),n=!0,a="hsl"):Fe(t.c)&&Fe(t.m)&&Fe(t.y)&&Fe(t.k)&&(e=hb(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=Wu(s),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const mb="[-\\+]?\\d+%?",bb="[-\\+]?\\d*\\.\\d+%?",di="(?:"+bb+")|(?:"+mb+")",oa="[\\s|\\(]+("+di+")[,|\\s]+("+di+")[,|\\s]+("+di+")\\s*\\)?",Ro="[\\s|\\(]+("+di+")[,|\\s]+("+di+")[,|\\s]+("+di+")[,|\\s]+("+di+")\\s*\\)?",es={CSS_UNIT:new RegExp(di),rgb:new RegExp("rgb"+oa),rgba:new RegExp("rgba"+Ro),hsl:new RegExp("hsl"+oa),hsla:new RegExp("hsla"+Ro),hsv:new RegExp("hsv"+oa),hsva:new RegExp("hsva"+Ro),cmyk:new RegExp("cmyk"+Ro),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function yb(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Va[t])t=Va[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=es.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=es.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=es.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=es.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=es.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=es.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=es.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=es.hex8.exec(t),s?{r:Be(s[1]),g:Be(s[2]),b:Be(s[3]),a:Bc(s[4]),format:e?"name":"hex8"}:(s=es.hex6.exec(t),s?{r:Be(s[1]),g:Be(s[2]),b:Be(s[3]),format:e?"name":"hex"}:(s=es.hex4.exec(t),s?{r:Be(s[1]+s[1]),g:Be(s[2]+s[2]),b:Be(s[3]+s[3]),a:Bc(s[4]+s[4]),format:e?"name":"hex8"}:(s=es.hex3.exec(t),s?{r:Be(s[1]+s[1]),g:Be(s[2]+s[2]),b:Be(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function Fe(t){return typeof t=="number"?!Number.isNaN(t):es.CSS_UNIT.test(t)}class qt{constructor(e="",s={}){if(e instanceof qt)return e;typeof e=="number"&&(e=fb(e)),this.originalInput=e;const i=gb(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,i,r;const o=e.r/255,n=e.g/255,a=e.b/255;return o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*s+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Wu(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Vc(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Vc(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${i}%, ${r}%)`:`hsva(${s}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=zc(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=zc(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${i}%, ${r}%)`:`hsla(${s}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Nc(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return ub(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${i})`:`rgba(${e}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(be(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(be(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Fc(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:i,k:r}=Fc(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Nc(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(Va))if(e===i)return s;return!1}toString(e){const s=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!s&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new qt(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=Oo(s.l),new qt(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new qt(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=Oo(s.l),new qt(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=Oo(s.s),new qt(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=Oo(s.s),new qt(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),i=(s.h+e)%360;return s.h=i<0?360+i:i,new qt(s)}mix(e,s=50){const i=this.toRgb(),r=new qt(e).toRgb(),o=s/100,n={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return new qt(n)}analogous(e=6,s=30){const i=this.toHsl(),r=360/s,o=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(new qt(i));return o}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new qt(e)}monochromatic(e=6){const s=this.toHsv(),{h:i}=s,{s:r}=s;let{v:o}=s;const n=[],a=1/e;for(;e--;)n.push(new qt({h:i,s:r,v:o})),o=(o+a)%1;return n}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new qt({h:(s+72)%360,s:e.s,l:e.l}),new qt({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),i=new qt(e).toRgb(),r=s.a+i.a*(1-s.a);return new qt({r:(s.r*s.a+i.r*i.a*(1-s.a))/r,g:(s.g*s.a+i.g*i.a*(1-s.a))/r,b:(s.b*s.a+i.b*i.a*(1-s.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:i}=s,r=[this],o=360/e;for(let n=1;n<e;n++)r.push(new qt({h:(i+n*o)%360,s:s.s,l:s.l}));return r}equals(e){const s=new qt(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var Uc="EyeDropper"in window,yt=class extends Z{constructor(){super(),this.formControlController=new Zs(this),this.isSafeValue=!1,this.localize=new St(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),Br(e,{onMove:n=>{this.alpha=ee(n/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),Br(e,{onMove:n=>{this.hue=ee(n/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let o=this.value,n=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Br(e,{onMove:(a,l)=>{this.saturation=ee(a/i*100,0,100),this.brightness=ee(100-l/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=ee(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=ee(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=ee(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=ee(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=ee(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=ee(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=ee(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=ee(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new qt(t);if(!e.isValid)return null;const s=e.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},r=e.toRgb(),o=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Uc)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,i=100){const r=new qt(`hsva(${t}, ${e}%, ${s}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),i=N`
      <div
        part="base"
        class=${ot({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?N`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Pe({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${ot({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Pe({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Q(this.disabled?void 0:"0")}
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
                style=${Pe({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Q(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?N`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Pe({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Pe({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Q(this.disabled?void 0:"0")}
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
            style=${Pe({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":N`
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
            ${Uc?N`
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

        ${s.length>0?N`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(r=>{const o=this.parseColor(r);return o?N`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${Q(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Pe({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:N`
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
          class=${ot({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Pe({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};yt.styles=[nt,ob];yt.dependencies={"sl-button-group":Vi,"sl-button":Ot,"sl-dropdown":ve,"sl-icon":Rt,"sl-input":ft,"sl-visually-hidden":Sl};c([K('[part~="base"]')],yt.prototype,"base",2);c([K('[part~="input"]')],yt.prototype,"input",2);c([K(".color-dropdown")],yt.prototype,"dropdown",2);c([K('[part~="preview"]')],yt.prototype,"previewButton",2);c([K('[part~="trigger"]')],yt.prototype,"trigger",2);c([it()],yt.prototype,"hasFocus",2);c([it()],yt.prototype,"isDraggingGridHandle",2);c([it()],yt.prototype,"isEmpty",2);c([it()],yt.prototype,"inputValue",2);c([it()],yt.prototype,"hue",2);c([it()],yt.prototype,"saturation",2);c([it()],yt.prototype,"brightness",2);c([it()],yt.prototype,"alpha",2);c([f()],yt.prototype,"value",2);c([mr()],yt.prototype,"defaultValue",2);c([f()],yt.prototype,"label",2);c([f()],yt.prototype,"format",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"inline",2);c([f({reflect:!0})],yt.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],yt.prototype,"noFormatToggle",2);c([f()],yt.prototype,"name",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);c([f({type:Boolean})],yt.prototype,"hoist",2);c([f({type:Boolean})],yt.prototype,"opacity",2);c([f({type:Boolean})],yt.prototype,"uppercase",2);c([f()],yt.prototype,"swatches",2);c([f({reflect:!0})],yt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],yt.prototype,"required",2);c([ho({passive:!1})],yt.prototype,"handleTouchMove",1);c([j("format",{waitUntilFirstUpdate:!0})],yt.prototype,"handleFormatChange",1);c([j("opacity",{waitUntilFirstUpdate:!0})],yt.prototype,"handleOpacityChange",1);c([j("value")],yt.prototype,"handleValueChange",1);yt.define("sl-color-picker");var vb=st`
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
`,Ku=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Me(this,"footer","header","image")}render(){return N`
      <div
        part="base"
        class=${ot({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ku.styles=[nt,vb];Ku.define("sl-card");var _b=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},wb=st`
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
 */function*xb(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*kb(t,e,s=1){const i=e===void 0?0:t;e??=t;for(let r=i;s>0?r<e:e<r;r+=s)yield r}var Jt=class extends Z{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new _b(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new St(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||s!==r)&&(t.scrollTo({left:i,top:r,behavior:Ma()?"auto":"smooth"}),await Oe(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:i}=this,r=i?t/s:(t-e)/s+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",o=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),o&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const a of e){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const s=e.find(a=>a.isIntersecting);if(!s)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,o=i.indexOf(s.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const a=Number(s.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),i=t.slice(0,e);s.reverse().forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(t.length-o-1)),this.prepend(n)}),i.forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,i)=>{(i+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:i}=this,r=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!r.length)return;const n=i?(t+r.length)%r.length:ee(t,0,r.length-s);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=ee(t+(i?s:0)+(a?s-1:0),0,o.length-1),d=o[l];this.scrollToSlide(d,Ma()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,i=s.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.left-i.left,n=r.top-i.top;o||n?(this.pendingSlideChange=!0,s.scrollTo({left:o+s.scrollLeft,top:n+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return N`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${ot({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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

        ${this.navigation?N`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${ot({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
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
                  class=${ot({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
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
        ${this.pagination?N`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${xb(kb(s),a=>{const l=a===i;return N`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${ot({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
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
    `}};Jt.styles=[nt,wb];Jt.dependencies={"sl-icon":Rt};c([f({type:Boolean,reflect:!0})],Jt.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],Jt.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],Jt.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],Jt.prototype,"slidesPerMove",2);c([f()],Jt.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Jt.prototype,"mouseDragging",2);c([K(".carousel__slides")],Jt.prototype,"scrollContainer",2);c([K(".carousel__pagination")],Jt.prototype,"paginationContainer",2);c([it()],Jt.prototype,"activeSlide",2);c([it()],Jt.prototype,"scrolling",2);c([it()],Jt.prototype,"dragging",2);c([ho({passive:!0})],Jt.prototype,"handleScroll",1);c([j("loop",{waitUntilFirstUpdate:!0}),j("slidesPerPage",{waitUntilFirstUpdate:!0})],Jt.prototype,"initializeSlides",1);c([j("activeSlide")],Jt.prototype,"handleSlideChange",1);c([j("slidesPerMove")],Jt.prototype,"updateSlidesSnap",1);c([j("autoplay")],Jt.prototype,"handleAutoplayChange",1);Jt.define("sl-carousel");var Cb=(t,e)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...i)},e)}},Hc=(t,e,s)=>{const i=t[e];t[e]=function(...r){i.call(this,...r),s.call(this,i,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,i=o=>{for(const n of o.changedTouches)e.add(n.identifier)},r=o=>{for(const n of o.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Hc(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=Cb(()=>{e.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),s.set(this,a)}),Hc(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=s.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();var Sb=st`
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
`,qu=class extends Z{connectedCallback(){super.connectedCallback()}render(){return N` <slot></slot> `}};qu.styles=[nt,Sb];qu.define("sl-carousel-item");var Eb=st`
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
`,yi=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Me(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return N`
      <div
        part="base"
        class=${ot({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?N`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${Q(this.target?this.target:void 0)}"
                rel=${Q(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?N`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?N`
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
    `}};yi.styles=[nt,Eb];c([K("slot:not([name])")],yi.prototype,"defaultSlot",2);c([it()],yi.prototype,"renderType",2);c([f()],yi.prototype,"href",2);c([f()],yi.prototype,"target",2);c([f()],yi.prototype,"rel",2);c([j("href",{waitUntilFirstUpdate:!0})],yi.prototype,"hrefChanged",1);yi.define("sl-breadcrumb-item");var Ab=st`
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
`,Vs=class extends Z{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=N`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=N``;return this.initials?e=N`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=N`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,N`
      <div
        part="base"
        class=${ot({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Vs.styles=[nt,Ab];Vs.dependencies={"sl-icon":Rt};c([it()],Vs.prototype,"hasError",2);c([f()],Vs.prototype,"image",2);c([f()],Vs.prototype,"label",2);c([f()],Vs.prototype,"initials",2);c([f()],Vs.prototype,"loading",2);c([f({reflect:!0})],Vs.prototype,"shape",2);c([j("image")],Vs.prototype,"handleImageChange",1);Vs.define("sl-avatar");var $b=st`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,vr=class extends Z{constructor(){super(...arguments),this.localize=new St(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,s)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),N`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};vr.styles=[nt,$b];vr.dependencies={"sl-icon":Rt};c([K("slot")],vr.prototype,"defaultSlot",2);c([K('slot[name="separator"]')],vr.prototype,"separatorSlot",2);c([f()],vr.prototype,"label",2);vr.define("sl-breadcrumb");var Tb=st`
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
`,ys=class extends Z{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:s}=this.animatedImage;t.width=e,t.height=s,t.getContext("2d").drawImage(this.animatedImage,0,0,e,s),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return N`
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

        ${this.isLoaded?N`
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
    `}};ys.styles=[nt,Tb];ys.dependencies={"sl-icon":Rt};c([K(".animated-image__animated")],ys.prototype,"animatedImage",2);c([it()],ys.prototype,"frozenFrame",2);c([it()],ys.prototype,"isLoaded",2);c([f()],ys.prototype,"src",2);c([f()],ys.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],ys.prototype,"play",2);c([j("play",{waitUntilFirstUpdate:!0})],ys.prototype,"handlePlayChange",1);c([j("src")],ys.prototype,"handleSrcChange",1);ys.define("sl-animated-image");var Ib=st`
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
`,_o=class extends Z{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return N`
      <span
        part="base"
        class=${ot({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};_o.styles=[nt,Ib];c([f({reflect:!0})],_o.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],_o.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],_o.prototype,"pulse",2);_o.define("sl-badge");const Lb=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ob=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Mb=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Rb=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Pb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Db=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],zb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Vb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Fb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bb=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Ub=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Hb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],jb=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Wb=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Kb=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],qb=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Gb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Yb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Xb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Jb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Qb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Zb=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],t0=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],e0=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],s0=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],i0=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],r0=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],o0=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],n0=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],a0=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],l0=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],c0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],d0=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],u0=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],h0=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],p0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],f0=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],g0=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],m0=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],b0=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],y0=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],v0=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_0=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],w0=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],x0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],k0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],C0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],S0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],E0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],A0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],$0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],T0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],I0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],L0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],O0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],M0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],R0=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],P0=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],D0=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],z0=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],V0=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],N0=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],F0=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],B0=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],U0=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],H0=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],j0=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],W0=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],K0=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],q0=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],G0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Y0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],X0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],J0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Q0=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Z0=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ty=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ey=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sy=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],iy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],ry=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],oy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],ny=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],ay=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ly=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],cy=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dy=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],uy=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],hy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],py=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],my=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],by=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],vy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],_y=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},wy=Object.freeze(Object.defineProperty({__proto__:null,backInDown:jb,backInLeft:Wb,backInRight:Kb,backInUp:qb,backOutDown:Gb,backOutLeft:Yb,backOutRight:Xb,backOutUp:Jb,bounce:Lb,bounceIn:Qb,bounceInDown:Zb,bounceInLeft:t0,bounceInRight:e0,bounceInUp:s0,bounceOut:i0,bounceOutDown:r0,bounceOutLeft:o0,bounceOutRight:n0,bounceOutUp:a0,easings:Gu,fadeIn:l0,fadeInBottomLeft:c0,fadeInBottomRight:d0,fadeInDown:u0,fadeInDownBig:h0,fadeInLeft:p0,fadeInLeftBig:f0,fadeInRight:g0,fadeInRightBig:m0,fadeInTopLeft:b0,fadeInTopRight:y0,fadeInUp:v0,fadeInUpBig:_0,fadeOut:w0,fadeOutBottomLeft:x0,fadeOutBottomRight:k0,fadeOutDown:C0,fadeOutDownBig:S0,fadeOutLeft:E0,fadeOutLeftBig:A0,fadeOutRight:$0,fadeOutRightBig:T0,fadeOutTopLeft:I0,fadeOutTopRight:L0,fadeOutUp:O0,fadeOutUpBig:M0,flash:Ob,flip:R0,flipInX:P0,flipInY:D0,flipOutX:z0,flipOutY:V0,headShake:Mb,heartBeat:Rb,hinge:ay,jackInTheBox:ly,jello:Pb,lightSpeedInLeft:N0,lightSpeedInRight:F0,lightSpeedOutLeft:B0,lightSpeedOutRight:U0,pulse:Db,rollIn:cy,rollOut:dy,rotateIn:H0,rotateInDownLeft:j0,rotateInDownRight:W0,rotateInUpLeft:K0,rotateInUpRight:q0,rotateOut:G0,rotateOutDownLeft:Y0,rotateOutDownRight:X0,rotateOutUpLeft:J0,rotateOutUpRight:Q0,rubberBand:zb,shake:Vb,shakeX:Nb,shakeY:Fb,slideInDown:Z0,slideInLeft:ty,slideInRight:ey,slideInUp:sy,slideOutDown:iy,slideOutLeft:ry,slideOutRight:oy,slideOutUp:ny,swing:Bb,tada:Ub,wobble:Hb,zoomIn:uy,zoomInDown:hy,zoomInLeft:py,zoomInRight:fy,zoomInUp:gy,zoomOut:my,zoomOutDown:by,zoomOutLeft:yy,zoomOutRight:vy,zoomOutUp:_y},Symbol.toStringTag,{value:"Module"}));var xy=st`
  :host {
    display: contents;
  }
`,fe=class extends Z{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=Gu[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:wy[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!i?!1:(this.destroyAnimation(),this.animation=o.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};fe.styles=[nt,xy];c([If("slot")],fe.prototype,"defaultSlot",2);c([f()],fe.prototype,"name",2);c([f({type:Boolean,reflect:!0})],fe.prototype,"play",2);c([f({type:Number})],fe.prototype,"delay",2);c([f()],fe.prototype,"direction",2);c([f({type:Number})],fe.prototype,"duration",2);c([f()],fe.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],fe.prototype,"endDelay",2);c([f()],fe.prototype,"fill",2);c([f({type:Number})],fe.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],fe.prototype,"iterationStart",2);c([f({attribute:!1})],fe.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],fe.prototype,"playbackRate",2);c([j(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],fe.prototype,"handleAnimationChange",1);c([j("play")],fe.prototype,"handlePlayChange",1);c([j("playbackRate")],fe.prototype,"handlePlaybackRateChange",1);fe.define("sl-animation");Ia("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/");/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Al(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const zt={},sr=[],Is=()=>{},Yu=()=>!1,Mn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$l=t=>t.startsWith("onUpdate:"),Ee=Object.assign,Tl=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},ky=Object.prototype.hasOwnProperty,Tt=(t,e)=>ky.call(t,e),dt=Array.isArray,ir=t=>Rn(t)==="[object Map]",Xu=t=>Rn(t)==="[object Set]",pt=t=>typeof t=="function",te=t=>typeof t=="string",ti=t=>typeof t=="symbol",Bt=t=>t!==null&&typeof t=="object",Ju=t=>(Bt(t)||pt(t))&&pt(t.then)&&pt(t.catch),Qu=Object.prototype.toString,Rn=t=>Qu.call(t),Cy=t=>Rn(t).slice(8,-1),Zu=t=>Rn(t)==="[object Object]",Il=t=>te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ur=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pn=t=>{const e=Object.create(null);return(s=>e[s]||(e[s]=t(s)))},Sy=/-\w/g,gi=Pn(t=>t.replace(Sy,e=>e.slice(1).toUpperCase())),Ey=/\B([A-Z])/g,Hi=Pn(t=>t.replace(Ey,"-$1").toLowerCase()),th=Pn(t=>t.charAt(0).toUpperCase()+t.slice(1)),na=Pn(t=>t?`on${th(t)}`:""),ui=(t,e)=>!Object.is(t,e),aa=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},eh=(t,e,s,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:s})},Ay=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jc;const Dn=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zn(t){if(dt(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],r=te(i)?Ly(i):zn(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(te(t)||Bt(t))return t}const $y=/;(?![^(]*\))/g,Ty=/:([^]+)/,Iy=/\/\*[^]*?\*\//g;function Ly(t){const e={};return t.replace(Iy,"").split($y).forEach(s=>{if(s){const i=s.split(Ty);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function cr(t){let e="";if(te(t))e=t;else if(dt(t))for(let s=0;s<t.length;s++){const i=cr(t[s]);i&&(e+=i+" ")}else if(Bt(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}function Oy(t){if(!t)return null;let{class:e,style:s}=t;return e&&!te(e)&&(t.class=cr(e)),s&&(t.style=zn(s)),t}const My="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ry=Al(My);function sh(t){return!!t||t===""}const ih=t=>!!(t&&t.__v_isRef===!0),ht=t=>te(t)?t:t==null?"":dt(t)||Bt(t)&&(t.toString===Qu||!pt(t.toString))?ih(t)?ht(t.value):JSON.stringify(t,rh,2):String(t),rh=(t,e)=>ih(e)?rh(t,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,r],o)=>(s[la(i,o)+" =>"]=r,s),{})}:Xu(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>la(s))}:ti(e)?la(e):Bt(e)&&!dt(e)&&!Zu(e)?String(e):e,la=(t,e="")=>{var s;return ti(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class oh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=ke;try{return ke=this,e()}finally{ke=s}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){this._on>0&&--this._on===0&&(ke=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ll(t){return new oh(t)}function nh(){return ke}function Py(t,e=!1){ke&&ke.cleanups.push(t)}let Pt;const ca=new WeakSet;class ah{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wc(this),dh(this);const e=Pt,s=cs;Pt=this,cs=!0;try{return this.fn()}finally{uh(this),Pt=e,cs=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rl(e);this.deps=this.depsTail=void 0,Wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let lh=0,Hr,jr;function ch(t,e=!1){if(t.flags|=8,e){t.next=jr,jr=t;return}t.next=Hr,Hr=t}function Ol(){lh++}function Ml(){if(--lh>0)return;if(jr){let e=jr;for(jr=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;Hr;){let e=Hr;for(Hr=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=s}}if(t)throw t}function dh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function uh(t){let e,s=t.depsTail,i=s;for(;i;){const r=i.prevDep;i.version===-1?(i===s&&(s=r),Rl(i),Dy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=s}function Na(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===to)||(t.globalVersion=to,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Na(t))))return;t.flags|=2;const e=t.dep,s=Pt,i=cs;Pt=t,cs=!0;try{dh(t);const r=t.fn(t._value);(e.version===0||ui(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Pt=s,cs=i,uh(t),t.flags&=-3}}function Rl(t,e=!1){const{dep:s,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),s.subs===t&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)Rl(o,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function Dy(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let cs=!0;const ph=[];function Ys(){ph.push(cs),cs=!1}function Xs(){const t=ph.pop();cs=t===void 0?!0:t}function Wc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=Pt;Pt=void 0;try{e()}finally{Pt=s}}}let to=0;class zy{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Pt||!cs||Pt===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Pt)s=this.activeLink=new zy(Pt,this),Pt.deps?(s.prevDep=Pt.depsTail,Pt.depsTail.nextDep=s,Pt.depsTail=s):Pt.deps=Pt.depsTail=s,fh(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=Pt.depsTail,s.nextDep=void 0,Pt.depsTail.nextDep=s,Pt.depsTail=s,Pt.deps===s&&(Pt.deps=i)}return s}trigger(e){this.version++,to++,this.notify(e)}notify(e){Ol();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Ml()}}}function fh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fh(i)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const on=new WeakMap,Li=Symbol(""),Fa=Symbol(""),eo=Symbol("");function Ce(t,e,s){if(cs&&Pt){let i=on.get(t);i||on.set(t,i=new Map);let r=i.get(s);r||(i.set(s,r=new Pl),r.map=i,r.key=s),r.track()}}function Hs(t,e,s,i,r,o){const n=on.get(t);if(!n){to++;return}const a=l=>{l&&l.trigger()};if(Ol(),e==="clear")n.forEach(a);else{const l=dt(t),d=l&&Il(s);if(l&&s==="length"){const h=Number(i);n.forEach((u,p)=>{(p==="length"||p===eo||!ti(p)&&p>=h)&&a(u)})}else switch((s!==void 0||n.has(void 0))&&a(n.get(s)),d&&a(n.get(eo)),e){case"add":l?d&&a(n.get("length")):(a(n.get(Li)),ir(t)&&a(n.get(Fa)));break;case"delete":l||(a(n.get(Li)),ir(t)&&a(n.get(Fa)));break;case"set":ir(t)&&a(n.get(Li));break}}Ml()}function Vy(t,e){const s=on.get(t);return s&&s.get(e)}function Ki(t){const e=xt(t);return e===t?e:(Ce(e,"iterate",eo),rs(t)?e:e.map(me))}function Vn(t){return Ce(t=xt(t),"iterate",eo),t}const Ny={__proto__:null,[Symbol.iterator](){return da(this,Symbol.iterator,me)},concat(...t){return Ki(this).concat(...t.map(e=>dt(e)?Ki(e):e))},entries(){return da(this,"entries",t=>(t[1]=me(t[1]),t))},every(t,e){return Fs(this,"every",t,e,void 0,arguments)},filter(t,e){return Fs(this,"filter",t,e,s=>s.map(me),arguments)},find(t,e){return Fs(this,"find",t,e,me,arguments)},findIndex(t,e){return Fs(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fs(this,"findLast",t,e,me,arguments)},findLastIndex(t,e){return Fs(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fs(this,"forEach",t,e,void 0,arguments)},includes(...t){return ua(this,"includes",t)},indexOf(...t){return ua(this,"indexOf",t)},join(t){return Ki(this).join(t)},lastIndexOf(...t){return ua(this,"lastIndexOf",t)},map(t,e){return Fs(this,"map",t,e,void 0,arguments)},pop(){return Tr(this,"pop")},push(...t){return Tr(this,"push",t)},reduce(t,...e){return Kc(this,"reduce",t,e)},reduceRight(t,...e){return Kc(this,"reduceRight",t,e)},shift(){return Tr(this,"shift")},some(t,e){return Fs(this,"some",t,e,void 0,arguments)},splice(...t){return Tr(this,"splice",t)},toReversed(){return Ki(this).toReversed()},toSorted(t){return Ki(this).toSorted(t)},toSpliced(...t){return Ki(this).toSpliced(...t)},unshift(...t){return Tr(this,"unshift",t)},values(){return da(this,"values",me)}};function da(t,e,s){const i=Vn(t),r=i[e]();return i!==t&&!rs(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=s(o.value)),o}),r}const Fy=Array.prototype;function Fs(t,e,s,i,r,o){const n=Vn(t),a=n!==t&&!rs(t),l=n[e];if(l!==Fy[e]){const u=l.apply(t,o);return a?me(u):u}let d=s;n!==t&&(a?d=function(u,p){return s.call(this,me(u),p,t)}:s.length>2&&(d=function(u,p){return s.call(this,u,p,t)}));const h=l.call(n,d,i);return a&&r?r(h):h}function Kc(t,e,s,i){const r=Vn(t);let o=s;return r!==t&&(rs(t)?s.length>3&&(o=function(n,a,l){return s.call(this,n,a,l,t)}):o=function(n,a,l){return s.call(this,n,me(a),l,t)}),r[e](o,...i)}function ua(t,e,s){const i=xt(t);Ce(i,"iterate",eo);const r=i[e](...s);return(r===-1||r===!1)&&Nn(s[0])?(s[0]=xt(s[0]),i[e](...s)):r}function Tr(t,e,s=[]){Ys(),Ol();const i=xt(t)[e].apply(t,s);return Ml(),Xs(),i}const By=Al("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ti));function Uy(t){ti(t)||(t=String(t));const e=xt(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class mh{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,i){if(s==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return o;if(s==="__v_raw")return i===(r?o?Qy:_h:o?vh:yh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const n=dt(e);if(!r){let l;if(n&&(l=Ny[s]))return l;if(s==="hasOwnProperty")return Uy}const a=Reflect.get(e,s,Wt(e)?e:i);return(ti(s)?gh.has(s):By(s))||(r||Ce(e,"get",s),o)?a:Wt(a)?n&&Il(s)?a:a.value:Bt(a)?r?wh(a):wo(a):a}}class bh extends mh{constructor(e=!1){super(!1,e)}set(e,s,i,r){let o=e[s];if(!this._isShallow){const l=mi(o);if(!rs(i)&&!mi(i)&&(o=xt(o),i=xt(i)),!dt(e)&&Wt(o)&&!Wt(i))return l||(o.value=i),!0}const n=dt(e)&&Il(s)?Number(s)<e.length:Tt(e,s),a=Reflect.set(e,s,i,Wt(e)?e:r);return e===xt(r)&&(n?ui(i,o)&&Hs(e,"set",s,i):Hs(e,"add",s,i)),a}deleteProperty(e,s){const i=Tt(e,s);e[s];const r=Reflect.deleteProperty(e,s);return r&&i&&Hs(e,"delete",s,void 0),r}has(e,s){const i=Reflect.has(e,s);return(!ti(s)||!gh.has(s))&&Ce(e,"has",s),i}ownKeys(e){return Ce(e,"iterate",dt(e)?"length":Li),Reflect.ownKeys(e)}}class Hy extends mh{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const jy=new bh,Wy=new Hy,Ky=new bh(!0);const Ba=t=>t,Po=t=>Reflect.getPrototypeOf(t);function qy(t,e,s){return function(...i){const r=this.__v_raw,o=xt(r),n=ir(o),a=t==="entries"||t===Symbol.iterator&&n,l=t==="keys"&&n,d=r[t](...i),h=s?Ba:e?nn:me;return!e&&Ce(o,"iterate",l?Fa:Li),{next(){const{value:u,done:p}=d.next();return p?{value:u,done:p}:{value:a?[h(u[0]),h(u[1])]:h(u),done:p}},[Symbol.iterator](){return this}}}}function Do(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gy(t,e){const s={get(r){const o=this.__v_raw,n=xt(o),a=xt(r);t||(ui(r,a)&&Ce(n,"get",r),Ce(n,"get",a));const{has:l}=Po(n),d=e?Ba:t?nn:me;if(l.call(n,r))return d(o.get(r));if(l.call(n,a))return d(o.get(a));o!==n&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Ce(xt(r),"iterate",Li),r.size},has(r){const o=this.__v_raw,n=xt(o),a=xt(r);return t||(ui(r,a)&&Ce(n,"has",r),Ce(n,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const n=this,a=n.__v_raw,l=xt(a),d=e?Ba:t?nn:me;return!t&&Ce(l,"iterate",Li),a.forEach((h,u)=>r.call(o,d(h),d(u),n))}};return Ee(s,t?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(r){!e&&!rs(r)&&!mi(r)&&(r=xt(r));const o=xt(this);return Po(o).has.call(o,r)||(o.add(r),Hs(o,"add",r,r)),this},set(r,o){!e&&!rs(o)&&!mi(o)&&(o=xt(o));const n=xt(this),{has:a,get:l}=Po(n);let d=a.call(n,r);d||(r=xt(r),d=a.call(n,r));const h=l.call(n,r);return n.set(r,o),d?ui(o,h)&&Hs(n,"set",r,o):Hs(n,"add",r,o),this},delete(r){const o=xt(this),{has:n,get:a}=Po(o);let l=n.call(o,r);l||(r=xt(r),l=n.call(o,r)),a&&a.call(o,r);const d=o.delete(r);return l&&Hs(o,"delete",r,void 0),d},clear(){const r=xt(this),o=r.size!==0,n=r.clear();return o&&Hs(r,"clear",void 0,void 0),n}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=qy(r,t,e)}),s}function Dl(t,e){const s=Gy(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Tt(s,r)&&r in i?s:i,r,o)}const Yy={get:Dl(!1,!1)},Xy={get:Dl(!1,!0)},Jy={get:Dl(!0,!1)};const yh=new WeakMap,vh=new WeakMap,_h=new WeakMap,Qy=new WeakMap;function Zy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tv(t){return t.__v_skip||!Object.isExtensible(t)?0:Zy(Cy(t))}function wo(t){return mi(t)?t:zl(t,!1,jy,Yy,yh)}function ev(t){return zl(t,!1,Ky,Xy,vh)}function wh(t){return zl(t,!0,Wy,Jy,_h)}function zl(t,e,s,i,r){if(!Bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=tv(t);if(o===0)return t;const n=r.get(t);if(n)return n;const a=new Proxy(t,o===2?i:s);return r.set(t,a),a}function Gs(t){return mi(t)?Gs(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function rs(t){return!!(t&&t.__v_isShallow)}function Nn(t){return t?!!t.__v_raw:!1}function xt(t){const e=t&&t.__v_raw;return e?xt(e):t}function Vl(t){return!Tt(t,"__v_skip")&&Object.isExtensible(t)&&eh(t,"__v_skip",!0),t}const me=t=>Bt(t)?wo(t):t,nn=t=>Bt(t)?wh(t):t;function Wt(t){return t?t.__v_isRef===!0:!1}function Vt(t){return xh(t,!1)}function sv(t){return xh(t,!0)}function xh(t,e){return Wt(t)?t:new iv(t,e)}class iv{constructor(e,s){this.dep=new Pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:xt(e),this._value=s?e:me(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,i=this.__v_isShallow||rs(e)||mi(e);e=i?e:xt(e),ui(e,s)&&(this._rawValue=e,this._value=i?e:me(e),this.dep.trigger())}}function W(t){return Wt(t)?t.value:t}const rv={get:(t,e,s)=>e==="__v_raw"?t:W(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const r=t[e];return Wt(r)&&!Wt(s)?(r.value=s,!0):Reflect.set(t,e,s,i)}};function kh(t){return Gs(t)?t:new Proxy(t,rv)}function Ch(t){const e=dt(t)?new Array(t.length):{};for(const s in t)e[s]=nv(t,s);return e}class ov{constructor(e,s,i){this._object=e,this._key=s,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vy(xt(this._object),this._key)}}function nv(t,e,s){const i=t[e];return Wt(i)?i:new ov(t,e,s)}class av{constructor(e,s,i){this.fn=e,this.setter=s,this._value=void 0,this.dep=new Pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Pt!==this)return ch(this,!0),!0}get value(){const e=this.dep.track();return hh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lv(t,e,s=!1){let i,r;return pt(t)?i=t:(i=t.get,r=t.set),new av(i,r,s)}const zo={},an=new WeakMap;let Ei;function cv(t,e=!1,s=Ei){if(s){let i=an.get(s);i||an.set(s,i=[]),i.push(t)}}function dv(t,e,s=zt){const{immediate:i,deep:r,once:o,scheduler:n,augmentJob:a,call:l}=s,d=b=>r?b:rs(b)||r===!1||r===0?ci(b,1):ci(b);let h,u,p,g,v=!1,k=!1;if(Wt(t)?(u=()=>t.value,v=rs(t)):Gs(t)?(u=()=>d(t),v=!0):dt(t)?(k=!0,v=t.some(b=>Gs(b)||rs(b)),u=()=>t.map(b=>{if(Wt(b))return b.value;if(Gs(b))return d(b);if(pt(b))return l?l(b,2):b()})):pt(t)?e?u=l?()=>l(t,2):t:u=()=>{if(p){Ys();try{p()}finally{Xs()}}const b=Ei;Ei=h;try{return l?l(t,3,[g]):t(g)}finally{Ei=b}}:u=Is,e&&r){const b=u,C=r===!0?1/0:r;u=()=>ci(b(),C)}const L=nh(),_=()=>{h.stop(),L&&L.active&&Tl(L.effects,h)};if(o&&e){const b=e;e=(...C)=>{b(...C),_()}}let w=k?new Array(t.length).fill(zo):zo;const A=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(e){const C=h.run();if(r||v||(k?C.some((O,T)=>ui(O,w[T])):ui(C,w))){p&&p();const O=Ei;Ei=h;try{const T=[C,w===zo?void 0:k&&w[0]===zo?[]:w,g];w=C,l?l(e,3,T):e(...T)}finally{Ei=O}}}else h.run()};return a&&a(A),h=new ah(u),h.scheduler=n?()=>n(A,!1):A,g=b=>cv(b,!1,h),p=h.onStop=()=>{const b=an.get(h);if(b){if(l)l(b,4);else for(const C of b)C();an.delete(h)}},e?i?A(!0):w=h.run():n?n(A.bind(null,!0),!0):h.run(),_.pause=h.pause.bind(h),_.resume=h.resume.bind(h),_.stop=_,_}function ci(t,e=1/0,s){if(e<=0||!Bt(t)||t.__v_skip||(s=s||new Map,(s.get(t)||0)>=e))return t;if(s.set(t,e),e--,Wt(t))ci(t.value,e,s);else if(dt(t))for(let i=0;i<t.length;i++)ci(t[i],e,s);else if(Xu(t)||ir(t))t.forEach(i=>{ci(i,e,s)});else if(Zu(t)){for(const i in t)ci(t[i],e,s);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ci(t[i],e,s)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xo(t,e,s,i){try{return i?t(...i):t()}catch(r){Fn(r,e,s)}}function Ms(t,e,s,i){if(pt(t)){const r=xo(t,e,s,i);return r&&Ju(r)&&r.catch(o=>{Fn(o,e,s)}),r}if(dt(t)){const r=[];for(let o=0;o<t.length;o++)r.push(Ms(t[o],e,s,i));return r}}function Fn(t,e,s,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:n}=e&&e.appContext.config||zt;if(e){let a=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](t,l,d)===!1)return}a=a.parent}if(o){Ys(),xo(o,null,10,[t,l,d]),Xs();return}}uv(t,s,r,i,n)}function uv(t,e,s,i=!0,r=!1){if(r)throw t;console.error(t)}const Ie=[];let Ss=-1;const rr=[];let ni=null,Ji=0;const Sh=Promise.resolve();let ln=null;function Eh(t){const e=ln||Sh;return t?e.then(this?t.bind(this):t):e}function hv(t){let e=Ss+1,s=Ie.length;for(;e<s;){const i=e+s>>>1,r=Ie[i],o=so(r);o<t||o===t&&r.flags&2?e=i+1:s=i}return e}function Nl(t){if(!(t.flags&1)){const e=so(t),s=Ie[Ie.length-1];!s||!(t.flags&2)&&e>=so(s)?Ie.push(t):Ie.splice(hv(e),0,t),t.flags|=1,Ah()}}function Ah(){ln||(ln=Sh.then(Th))}function pv(t){dt(t)?rr.push(...t):ni&&t.id===-1?ni.splice(Ji+1,0,t):t.flags&1||(rr.push(t),t.flags|=1),Ah()}function qc(t,e,s=Ss+1){for(;s<Ie.length;s++){const i=Ie[s];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ie.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $h(t){if(rr.length){const e=[...new Set(rr)].sort((s,i)=>so(s)-so(i));if(rr.length=0,ni){ni.push(...e);return}for(ni=e,Ji=0;Ji<ni.length;Ji++){const s=ni[Ji];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ni=null,Ji=0}}const so=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Th(t){try{for(Ss=0;Ss<Ie.length;Ss++){const e=Ie[Ss];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ss<Ie.length;Ss++){const e=Ie[Ss];e&&(e.flags&=-2)}Ss=-1,Ie.length=0,$h(),ln=null,(Ie.length||rr.length)&&Th()}}let ze=null,Ih=null;function cn(t){const e=ze;return ze=t,Ih=t&&t.type.__scopeId||null,e}function Lh(t,e=ze,s){if(!e||t._n)return t;const i=(...r)=>{i._d&&dr(-1);const o=cn(e);let n;try{n=t(...r)}finally{cn(o),i._d&&dr(1)}return n};return i._n=!0,i._c=!0,i._d=!0,i}function ki(t,e,s,i){const r=t.dirs,o=e&&e.dirs;for(let n=0;n<r.length;n++){const a=r[n];o&&(a.oldValue=o[n].value);let l=a.dir[i];l&&(Ys(),Ms(l,s,8,[t.el,a,t,e]),Xs())}}const fv=Symbol("_vte"),gv=t=>t.__isTeleport,mv=Symbol("_leaveCb");function Fl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Fl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ve(t,e){return pt(t)?Ee({name:t.name},e,{setup:t}):t}function Oh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const dn=new WeakMap;function Wr(t,e,s,i,r=!1){if(dt(t)){t.forEach((v,k)=>Wr(v,e&&(dt(e)?e[k]:e),s,i,r));return}if(or(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wr(t,e,s,i.component.subTree);return}const o=i.shapeFlag&4?Kl(i.component):i.el,n=r?null:o,{i:a,r:l}=t,d=e&&e.r,h=a.refs===zt?a.refs={}:a.refs,u=a.setupState,p=xt(u),g=u===zt?Yu:v=>Tt(p,v);if(d!=null&&d!==l){if(Gc(e),te(d))h[d]=null,g(d)&&(u[d]=null);else if(Wt(d)){d.value=null;const v=e;v.k&&(h[v.k]=null)}}if(pt(l))xo(l,a,12,[n,h]);else{const v=te(l),k=Wt(l);if(v||k){const L=()=>{if(t.f){const _=v?g(l)?u[l]:h[l]:l.value;if(r)dt(_)&&Tl(_,o);else if(dt(_))_.includes(o)||_.push(o);else if(v)h[l]=[o],g(l)&&(u[l]=h[l]);else{const w=[o];l.value=w,t.k&&(h[t.k]=w)}}else v?(h[l]=n,g(l)&&(u[l]=n)):k&&(l.value=n,t.k&&(h[t.k]=n))};if(n){const _=()=>{L(),dn.delete(t)};_.id=-1,dn.set(t,_),Ue(_,s)}else Gc(t),L()}}}function Gc(t){const e=dn.get(t);e&&(e.flags|=8,dn.delete(t))}Dn().requestIdleCallback;Dn().cancelIdleCallback;const or=t=>!!t.type.__asyncLoader,Mh=t=>t.type.__isKeepAlive;function bv(t,e){Rh(t,"a",e)}function yv(t,e){Rh(t,"da",e)}function Rh(t,e,s=Le){const i=t.__wdc||(t.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Bn(e,i,s),s){let r=s.parent;for(;r&&r.parent;)Mh(r.parent.vnode)&&vv(i,e,s,r),r=r.parent}}function vv(t,e,s,i){const r=Bn(e,t,i,!0);Ul(()=>{Tl(i[e],r)},s)}function Bn(t,e,s=Le,i=!1){if(s){const r=s[t]||(s[t]=[]),o=e.__weh||(e.__weh=(...n)=>{Ys();const a=So(s),l=Ms(e,s,t,n);return a(),Xs(),l});return i?r.unshift(o):r.push(o),o}}const ei=t=>(e,s=Le)=>{(!oo||t==="sp")&&Bn(t,(...i)=>e(...i),s)},_v=ei("bm"),Bl=ei("m"),wv=ei("bu"),xv=ei("u"),kv=ei("bum"),Ul=ei("um"),Cv=ei("sp"),Sv=ei("rtg"),Ev=ei("rtc");function Av(t,e=Le){Bn("ec",t,e)}const $v=Symbol.for("v-ndc");function Ph(t,e,s,i){let r;const o=s,n=dt(t);if(n||te(t)){const a=n&&Gs(t);let l=!1,d=!1;a&&(l=!rs(t),d=mi(t),t=Vn(t)),r=new Array(t.length);for(let h=0,u=t.length;h<u;h++)r[h]=e(l?d?nn(me(t[h])):me(t[h]):t[h],h,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o)}else if(Bt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const h=a[l];r[l]=e(t[h],h,l,o)}}else r=[];return r}function Tv(t,e,s={},i,r){if(ze.ce||ze.parent&&or(ze.parent)&&ze.parent.ce)return ut(),$s(Se,null,[Yt("slot",s,i)],64);let o=t[e];o&&o._c&&(o._d=!1),ut();const n=o&&Dh(o(s)),a=s.key||n&&n.key,l=$s(Se,{key:(a&&!ti(a)?a:`_${e}`)+(!n&&i?"_fb":"")},n||[],n&&t._===1?64:-2);return o&&o._c&&(o._d=!0),l}function Dh(t){return t.some(e=>ro(e)?!(e.type===Js||e.type===Se&&!Dh(e.children)):!0)?t:null}const Ua=t=>t?ip(t)?Kl(t):Ua(t.parent):null,Kr=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ua(t.parent),$root:t=>Ua(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>{Nl(t.update)}),$nextTick:t=>t.n||(t.n=Eh.bind(t.proxy)),$watch:t=>Qv.bind(t)}),ha=(t,e)=>t!==zt&&!t.__isScriptSetup&&Tt(t,e),Iv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:i,data:r,props:o,accessCache:n,type:a,appContext:l}=t;let d;if(e[0]!=="$"){const g=n[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return r[e];case 4:return s[e];case 3:return o[e]}else{if(ha(i,e))return n[e]=1,i[e];if(r!==zt&&Tt(r,e))return n[e]=2,r[e];if((d=t.propsOptions[0])&&Tt(d,e))return n[e]=3,o[e];if(s!==zt&&Tt(s,e))return n[e]=4,s[e];Ha&&(n[e]=0)}}const h=Kr[e];let u,p;if(h)return e==="$attrs"&&Ce(t.attrs,"get",""),h(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(s!==zt&&Tt(s,e))return n[e]=4,s[e];if(p=l.config.globalProperties,Tt(p,e))return p[e]},set({_:t},e,s){const{data:i,setupState:r,ctx:o}=t;return ha(r,e)?(r[e]=s,!0):i!==zt&&Tt(i,e)?(i[e]=s,!0):Tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:r,propsOptions:o,type:n}},a){let l,d;return!!(s[a]||t!==zt&&a[0]!=="$"&&Tt(t,a)||ha(e,a)||(l=o[0])&&Tt(l,a)||Tt(i,a)||Tt(Kr,a)||Tt(r.config.globalProperties,a)||(d=n.__cssModules)&&d[a])},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:Tt(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function Yc(t){return dt(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Ha=!0;function Lv(t){const e=Vh(t),s=t.proxy,i=t.ctx;Ha=!1,e.beforeCreate&&Xc(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:n,watch:a,provide:l,inject:d,created:h,beforeMount:u,mounted:p,beforeUpdate:g,updated:v,activated:k,deactivated:L,beforeDestroy:_,beforeUnmount:w,destroyed:A,unmounted:b,render:C,renderTracked:O,renderTriggered:T,errorCaptured:B,serverPrefetch:P,expose:D,inheritAttrs:lt,components:et,directives:gt,filters:vt}=e;if(d&&Ov(d,i,null),n)for(const G in n){const at=n[G];pt(at)&&(i[G]=at.bind(s))}if(r){const G=r.call(s,s);Bt(G)&&(t.data=wo(G))}if(Ha=!0,o)for(const G in o){const at=o[G],X=pt(at)?at.bind(s,s):pt(at.get)?at.get.bind(s,s):Is,Ct=!pt(at)&&pt(at.set)?at.set.bind(s):Is,Ze=Dt({get:X,set:Ct});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Re=>Ze.value=Re})}if(a)for(const G in a)zh(a[G],i,s,G);if(l){const G=pt(l)?l.call(s):l;Reflect.ownKeys(G).forEach(at=>{Vv(at,G[at])})}h&&Xc(h,t,"c");function tt(G,at){dt(at)?at.forEach(X=>G(X.bind(s))):at&&G(at.bind(s))}if(tt(_v,u),tt(Bl,p),tt(wv,g),tt(xv,v),tt(bv,k),tt(yv,L),tt(Av,B),tt(Ev,O),tt(Sv,T),tt(kv,w),tt(Ul,b),tt(Cv,P),dt(D))if(D.length){const G=t.exposed||(t.exposed={});D.forEach(at=>{Object.defineProperty(G,at,{get:()=>s[at],set:X=>s[at]=X,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===Is&&(t.render=C),lt!=null&&(t.inheritAttrs=lt),et&&(t.components=et),gt&&(t.directives=gt),P&&Oh(t)}function Ov(t,e,s=Is){dt(t)&&(t=ja(t));for(const i in t){const r=t[i];let o;Bt(r)?"default"in r?o=de(r.from||i,r.default,!0):o=de(r.from||i):o=de(r),Wt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:n=>o.value=n}):e[i]=o}}function Xc(t,e,s){Ms(dt(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function zh(t,e,s,i){let r=i.includes(".")?Jh(s,i):()=>s[i];if(te(t)){const o=e[t];pt(o)&&Mi(r,o)}else if(pt(t))Mi(r,t.bind(s));else if(Bt(t))if(dt(t))t.forEach(o=>zh(o,e,s,i));else{const o=pt(t.handler)?t.handler.bind(s):e[t.handler];pt(o)&&Mi(r,o,t)}}function Vh(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:n}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!s&&!i?l=e:(l={},r.length&&r.forEach(d=>un(l,d,n,!0)),un(l,e,n)),Bt(e)&&o.set(e,l),l}function un(t,e,s,i=!1){const{mixins:r,extends:o}=e;o&&un(t,o,s,!0),r&&r.forEach(n=>un(t,n,s,!0));for(const n in e)if(!(i&&n==="expose")){const a=Mv[n]||s&&s[n];t[n]=a?a(t[n],e[n]):e[n]}return t}const Mv={data:Jc,props:Qc,emits:Qc,methods:Mr,computed:Mr,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Mr,directives:Mr,watch:Pv,provide:Jc,inject:Rv};function Jc(t,e){return e?t?function(){return Ee(pt(t)?t.call(this,this):t,pt(e)?e.call(this,this):e)}:e:t}function Rv(t,e){return Mr(ja(t),ja(e))}function ja(t){if(dt(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Mr(t,e){return t?Ee(Object.create(null),t,e):e}function Qc(t,e){return t?dt(t)&&dt(e)?[...new Set([...t,...e])]:Ee(Object.create(null),Yc(t),Yc(e??{})):e}function Pv(t,e){if(!t)return e;if(!e)return t;const s=Ee(Object.create(null),t);for(const i in e)s[i]=Te(t[i],e[i]);return s}function Nh(){return{app:null,config:{isNativeTag:Yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function zv(t,e){return function(i,r=null){pt(i)||(i=Ee({},i)),r!=null&&!Bt(r)&&(r=null);const o=Nh(),n=new WeakSet,a=[];let l=!1;const d=o.app={_uid:Dv++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:y1,get config(){return o.config},set config(h){},use(h,...u){return n.has(h)||(h&&pt(h.install)?(n.add(h),h.install(d,...u)):pt(h)&&(n.add(h),h(d,...u))),d},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),d},component(h,u){return u?(o.components[h]=u,d):o.components[h]},directive(h,u){return u?(o.directives[h]=u,d):o.directives[h]},mount(h,u,p){if(!l){const g=d._ceVNode||Yt(i,r);return g.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),t(g,h,p),l=!0,d._container=h,h.__vue_app__=d,Kl(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Ms(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(h,u){return o.provides[h]=u,d},runWithContext(h){const u=Oi;Oi=d;try{return h()}finally{Oi=u}}};return d}}let Oi=null;function Vv(t,e){if(Le){let s=Le.provides;const i=Le.parent&&Le.parent.provides;i===s&&(s=Le.provides=Object.create(i)),s[t]=e}}function de(t,e,s=!1){const i=Co();if(i||Oi){let r=Oi?Oi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return s&&pt(e)?e.call(i&&i.proxy):e}}function Nv(){return!!(Co()||Oi)}const Fh={},Bh=()=>Object.create(Fh),Uh=t=>Object.getPrototypeOf(t)===Fh;function Fv(t,e,s,i=!1){const r={},o=Bh();t.propsDefaults=Object.create(null),Hh(t,e,r,o);for(const n in t.propsOptions[0])n in r||(r[n]=void 0);s?t.props=i?r:ev(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Bv(t,e,s,i){const{props:r,attrs:o,vnode:{patchFlag:n}}=t,a=xt(r),[l]=t.propsOptions;let d=!1;if((i||n>0)&&!(n&16)){if(n&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let p=h[u];if(Un(t.emitsOptions,p))continue;const g=e[p];if(l)if(Tt(o,p))g!==o[p]&&(o[p]=g,d=!0);else{const v=gi(p);r[v]=Wa(l,a,v,g,t,!1)}else g!==o[p]&&(o[p]=g,d=!0)}}}else{Hh(t,e,r,o)&&(d=!0);let h;for(const u in a)(!e||!Tt(e,u)&&((h=Hi(u))===u||!Tt(e,h)))&&(l?s&&(s[u]!==void 0||s[h]!==void 0)&&(r[u]=Wa(l,a,u,void 0,t,!0)):delete r[u]);if(o!==a)for(const u in o)(!e||!Tt(e,u))&&(delete o[u],d=!0)}d&&Hs(t.attrs,"set","")}function Hh(t,e,s,i){const[r,o]=t.propsOptions;let n=!1,a;if(e)for(let l in e){if(Ur(l))continue;const d=e[l];let h;r&&Tt(r,h=gi(l))?!o||!o.includes(h)?s[h]=d:(a||(a={}))[h]=d:Un(t.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,n=!0)}if(o){const l=xt(s),d=a||zt;for(let h=0;h<o.length;h++){const u=o[h];s[u]=Wa(r,l,u,d[u],t,!Tt(d,u))}}return n}function Wa(t,e,s,i,r,o){const n=t[s];if(n!=null){const a=Tt(n,"default");if(a&&i===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&pt(l)){const{propsDefaults:d}=r;if(s in d)i=d[s];else{const h=So(r);i=d[s]=l.call(null,e),h()}}else i=l;r.ce&&r.ce._setProp(s,i)}n[0]&&(o&&!a?i=!1:n[1]&&(i===""||i===Hi(s))&&(i=!0))}return i}const Uv=new WeakMap;function jh(t,e,s=!1){const i=s?Uv:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,n={},a=[];let l=!1;if(!pt(t)){const h=u=>{l=!0;const[p,g]=jh(u,e,!0);Ee(n,p),g&&a.push(...g)};!s&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!o&&!l)return Bt(t)&&i.set(t,sr),sr;if(dt(o))for(let h=0;h<o.length;h++){const u=gi(o[h]);Zc(u)&&(n[u]=zt)}else if(o)for(const h in o){const u=gi(h);if(Zc(u)){const p=o[h],g=n[u]=dt(p)||pt(p)?{type:p}:Ee({},p),v=g.type;let k=!1,L=!0;if(dt(v))for(let _=0;_<v.length;++_){const w=v[_],A=pt(w)&&w.name;if(A==="Boolean"){k=!0;break}else A==="String"&&(L=!1)}else k=pt(v)&&v.name==="Boolean";g[0]=k,g[1]=L,(k||Tt(g,"default"))&&a.push(u)}}const d=[n,a];return Bt(t)&&i.set(t,d),d}function Zc(t){return t[0]!=="$"&&!Ur(t)}const Hl=t=>t==="_"||t==="_ctx"||t==="$stable",jl=t=>dt(t)?t.map(As):[As(t)],Hv=(t,e,s)=>{if(e._n)return e;const i=Lh((...r)=>jl(e(...r)),s);return i._c=!1,i},Wh=(t,e,s)=>{const i=t._ctx;for(const r in t){if(Hl(r))continue;const o=t[r];if(pt(o))e[r]=Hv(r,o,i);else if(o!=null){const n=jl(o);e[r]=()=>n}}},Kh=(t,e)=>{const s=jl(e);t.slots.default=()=>s},qh=(t,e,s)=>{for(const i in e)(s||!Hl(i))&&(t[i]=e[i])},jv=(t,e,s)=>{const i=t.slots=Bh();if(t.vnode.shapeFlag&32){const r=e._;r?(qh(i,e,s),s&&eh(i,"_",r,!0)):Wh(e,i)}else e&&Kh(t,e)},Wv=(t,e,s)=>{const{vnode:i,slots:r}=t;let o=!0,n=zt;if(i.shapeFlag&32){const a=e._;a?s&&a===1?o=!1:qh(r,e,s):(o=!e.$stable,Wh(e,r)),n=e}else e&&(Kh(t,e),n={default:1});if(o)for(const a in r)!Hl(a)&&n[a]==null&&delete r[a]},Ue=n1;function Kv(t){return qv(t)}function qv(t,e){const s=Dn();s.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:n,createText:a,createComment:l,setText:d,setElementText:h,parentNode:u,nextSibling:p,setScopeId:g=Is,insertStaticContent:v}=t,k=(x,S,R,U=null,V=null,F=null,m=void 0,y=null,E=!!S.dynamicChildren)=>{if(x===S)return;x&&!Ir(x,S)&&(U=si(x),Re(x,V,F,!0),x=null),S.patchFlag===-2&&(E=!1,S.dynamicChildren=null);const{type:I,ref:q,shapeFlag:z}=S;switch(I){case ko:L(x,S,R,U);break;case Js:_(x,S,R,U);break;case fa:x==null&&w(S,R,U,m);break;case Se:et(x,S,R,U,V,F,m,y,E);break;default:z&1?C(x,S,R,U,V,F,m,y,E):z&6?gt(x,S,R,U,V,F,m,y,E):(z&64||z&128)&&I.process(x,S,R,U,V,F,m,y,E,_s)}q!=null&&V?Wr(q,x&&x.ref,F,S||x,!S):q==null&&x&&x.ref!=null&&Wr(x.ref,null,F,x,!0)},L=(x,S,R,U)=>{if(x==null)i(S.el=a(S.children),R,U);else{const V=S.el=x.el;S.children!==x.children&&d(V,S.children)}},_=(x,S,R,U)=>{x==null?i(S.el=l(S.children||""),R,U):S.el=x.el},w=(x,S,R,U)=>{[x.el,x.anchor]=v(x.children,S,R,U,x.el,x.anchor)},A=({el:x,anchor:S},R,U)=>{let V;for(;x&&x!==S;)V=p(x),i(x,R,U),x=V;i(S,R,U)},b=({el:x,anchor:S})=>{let R;for(;x&&x!==S;)R=p(x),r(x),x=R;r(S)},C=(x,S,R,U,V,F,m,y,E)=>{S.type==="svg"?m="svg":S.type==="math"&&(m="mathml"),x==null?O(S,R,U,V,F,m,y,E):P(x,S,V,F,m,y,E)},O=(x,S,R,U,V,F,m,y)=>{let E,I;const{props:q,shapeFlag:z,transition:$,dirs:M}=x;if(E=x.el=n(x.type,F,q&&q.is,q),z&8?h(E,x.children):z&16&&B(x.children,E,null,U,V,pa(x,F),m,y),M&&ki(x,null,U,"created"),T(E,x,x.scopeId,m,U),q){for(const ct in q)ct!=="value"&&!Ur(ct)&&o(E,ct,null,q[ct],F,U);"value"in q&&o(E,"value",null,q.value,F),(I=q.onVnodeBeforeMount)&&xs(I,U,x)}M&&ki(x,null,U,"beforeMount");const J=Gv(V,$);J&&$.beforeEnter(E),i(E,S,R),((I=q&&q.onVnodeMounted)||J||M)&&Ue(()=>{I&&xs(I,U,x),J&&$.enter(E),M&&ki(x,null,U,"mounted")},V)},T=(x,S,R,U,V)=>{if(R&&g(x,R),U)for(let F=0;F<U.length;F++)g(x,U[F]);if(V){let F=V.subTree;if(S===F||Zh(F.type)&&(F.ssContent===S||F.ssFallback===S)){const m=V.vnode;T(x,m,m.scopeId,m.slotScopeIds,V.parent)}}},B=(x,S,R,U,V,F,m,y,E=0)=>{for(let I=E;I<x.length;I++){const q=x[I]=y?ai(x[I]):As(x[I]);k(null,q,S,R,U,V,F,m,y)}},P=(x,S,R,U,V,F,m)=>{const y=S.el=x.el;let{patchFlag:E,dynamicChildren:I,dirs:q}=S;E|=x.patchFlag&16;const z=x.props||zt,$=S.props||zt;let M;if(R&&Ci(R,!1),(M=$.onVnodeBeforeUpdate)&&xs(M,R,S,x),q&&ki(S,x,R,"beforeUpdate"),R&&Ci(R,!0),(z.innerHTML&&$.innerHTML==null||z.textContent&&$.textContent==null)&&h(y,""),I?D(x.dynamicChildren,I,y,R,U,pa(S,V),F):m||at(x,S,y,null,R,U,pa(S,V),F,!1),E>0){if(E&16)lt(y,z,$,R,V);else if(E&2&&z.class!==$.class&&o(y,"class",null,$.class,V),E&4&&o(y,"style",z.style,$.style,V),E&8){const J=S.dynamicProps;for(let ct=0;ct<J.length;ct++){const mt=J[ct],ne=z[mt],Qt=$[mt];(Qt!==ne||mt==="value")&&o(y,mt,ne,Qt,V,R)}}E&1&&x.children!==S.children&&h(y,S.children)}else!m&&I==null&&lt(y,z,$,R,V);((M=$.onVnodeUpdated)||q)&&Ue(()=>{M&&xs(M,R,S,x),q&&ki(S,x,R,"updated")},U)},D=(x,S,R,U,V,F,m)=>{for(let y=0;y<S.length;y++){const E=x[y],I=S[y],q=E.el&&(E.type===Se||!Ir(E,I)||E.shapeFlag&198)?u(E.el):R;k(E,I,q,null,U,V,F,m,!0)}},lt=(x,S,R,U,V)=>{if(S!==R){if(S!==zt)for(const F in S)!Ur(F)&&!(F in R)&&o(x,F,S[F],null,V,U);for(const F in R){if(Ur(F))continue;const m=R[F],y=S[F];m!==y&&F!=="value"&&o(x,F,y,m,V,U)}"value"in R&&o(x,"value",S.value,R.value,V)}},et=(x,S,R,U,V,F,m,y,E)=>{const I=S.el=x?x.el:a(""),q=S.anchor=x?x.anchor:a("");let{patchFlag:z,dynamicChildren:$,slotScopeIds:M}=S;M&&(y=y?y.concat(M):M),x==null?(i(I,R,U),i(q,R,U),B(S.children||[],R,q,V,F,m,y,E)):z>0&&z&64&&$&&x.dynamicChildren?(D(x.dynamicChildren,$,R,V,F,m,y),(S.key!=null||V&&S===V.subTree)&&Gh(x,S,!0)):at(x,S,R,q,V,F,m,y,E)},gt=(x,S,R,U,V,F,m,y,E)=>{S.slotScopeIds=y,x==null?S.shapeFlag&512?V.ctx.activate(S,R,U,m,E):vt(S,R,U,V,F,m,E):kt(x,S,E)},vt=(x,S,R,U,V,F,m)=>{const y=x.component=h1(x,U,V);if(Mh(x)&&(y.ctx.renderer=_s),p1(y,!1,m),y.asyncDep){if(V&&V.registerDep(y,tt,m),!x.el){const E=y.subTree=Yt(Js);_(null,E,S,R),x.placeholder=E.el}}else tt(y,x,S,R,V,F,m)},kt=(x,S,R)=>{const U=S.component=x.component;if(r1(x,S,R))if(U.asyncDep&&!U.asyncResolved){G(U,S,R);return}else U.next=S,U.update();else S.el=x.el,U.vnode=S},tt=(x,S,R,U,V,F,m)=>{const y=()=>{if(x.isMounted){let{next:z,bu:$,u:M,parent:J,vnode:ct}=x;{const as=Yh(x);if(as){z&&(z.el=ct.el,G(x,z,m)),as.asyncDep.then(()=>{x.isUnmounted||y()});return}}let mt=z,ne;Ci(x,!1),z?(z.el=ct.el,G(x,z,m)):z=ct,$&&aa($),(ne=z.props&&z.props.onVnodeBeforeUpdate)&&xs(ne,J,z,ct),Ci(x,!0);const Qt=ed(x),ts=x.subTree;x.subTree=Qt,k(ts,Qt,u(ts.el),si(ts),x,V,F),z.el=Qt.el,mt===null&&o1(x,Qt.el),M&&Ue(M,V),(ne=z.props&&z.props.onVnodeUpdated)&&Ue(()=>xs(ne,J,z,ct),V)}else{let z;const{el:$,props:M}=S,{bm:J,m:ct,parent:mt,root:ne,type:Qt}=x,ts=or(S);Ci(x,!1),J&&aa(J),!ts&&(z=M&&M.onVnodeBeforeMount)&&xs(z,mt,S),Ci(x,!0);{ne.ce&&ne.ce._def.shadowRoot!==!1&&ne.ce._injectChildStyle(Qt);const as=x.subTree=ed(x);k(null,as,R,U,x,V,F),S.el=as.el}if(ct&&Ue(ct,V),!ts&&(z=M&&M.onVnodeMounted)){const as=S;Ue(()=>xs(z,mt,as),V)}(S.shapeFlag&256||mt&&or(mt.vnode)&&mt.vnode.shapeFlag&256)&&x.a&&Ue(x.a,V),x.isMounted=!0,S=R=U=null}};x.scope.on();const E=x.effect=new ah(y);x.scope.off();const I=x.update=E.run.bind(E),q=x.job=E.runIfDirty.bind(E);q.i=x,q.id=x.uid,E.scheduler=()=>Nl(q),Ci(x,!0),I()},G=(x,S,R)=>{S.component=x;const U=x.vnode.props;x.vnode=S,x.next=null,Bv(x,S.props,U,R),Wv(x,S.children,R),Ys(),qc(x),Xs()},at=(x,S,R,U,V,F,m,y,E=!1)=>{const I=x&&x.children,q=x?x.shapeFlag:0,z=S.children,{patchFlag:$,shapeFlag:M}=S;if($>0){if($&128){Ct(I,z,R,U,V,F,m,y,E);return}else if($&256){X(I,z,R,U,V,F,m,y,E);return}}M&8?(q&16&&Ns(I,V,F),z!==I&&h(R,z)):q&16?M&16?Ct(I,z,R,U,V,F,m,y,E):Ns(I,V,F,!0):(q&8&&h(R,""),M&16&&B(z,R,U,V,F,m,y,E))},X=(x,S,R,U,V,F,m,y,E)=>{x=x||sr,S=S||sr;const I=x.length,q=S.length,z=Math.min(I,q);let $;for($=0;$<z;$++){const M=S[$]=E?ai(S[$]):As(S[$]);k(x[$],M,R,null,V,F,m,y,E)}I>q?Ns(x,V,F,!0,!1,z):B(S,R,U,V,F,m,y,E,z)},Ct=(x,S,R,U,V,F,m,y,E)=>{let I=0;const q=S.length;let z=x.length-1,$=q-1;for(;I<=z&&I<=$;){const M=x[I],J=S[I]=E?ai(S[I]):As(S[I]);if(Ir(M,J))k(M,J,R,null,V,F,m,y,E);else break;I++}for(;I<=z&&I<=$;){const M=x[z],J=S[$]=E?ai(S[$]):As(S[$]);if(Ir(M,J))k(M,J,R,null,V,F,m,y,E);else break;z--,$--}if(I>z){if(I<=$){const M=$+1,J=M<q?S[M].el:U;for(;I<=$;)k(null,S[I]=E?ai(S[I]):As(S[I]),R,J,V,F,m,y,E),I++}}else if(I>$)for(;I<=z;)Re(x[I],V,F,!0),I++;else{const M=I,J=I,ct=new Map;for(I=J;I<=$;I++){const Ne=S[I]=E?ai(S[I]):As(S[I]);Ne.key!=null&&ct.set(Ne.key,I)}let mt,ne=0;const Qt=$-J+1;let ts=!1,as=0;const wr=new Array(Qt);for(I=0;I<Qt;I++)wr[I]=0;for(I=M;I<=z;I++){const Ne=x[I];if(ne>=Qt){Re(Ne,V,F,!0);continue}let ws;if(Ne.key!=null)ws=ct.get(Ne.key);else for(mt=J;mt<=$;mt++)if(wr[mt-J]===0&&Ir(Ne,S[mt])){ws=mt;break}ws===void 0?Re(Ne,V,F,!0):(wr[ws-J]=I+1,ws>=as?as=ws:ts=!0,k(Ne,S[ws],R,null,V,F,m,y,E),ne++)}const rc=ts?Yv(wr):sr;for(mt=rc.length-1,I=Qt-1;I>=0;I--){const Ne=J+I,ws=S[Ne],oc=S[Ne+1],nc=Ne+1<q?oc.el||oc.placeholder:U;wr[I]===0?k(null,ws,R,nc,V,F,m,y,E):ts&&(mt<0||I!==rc[mt]?Ze(ws,R,nc,2):mt--)}}},Ze=(x,S,R,U,V=null)=>{const{el:F,type:m,transition:y,children:E,shapeFlag:I}=x;if(I&6){Ze(x.component.subTree,S,R,U);return}if(I&128){x.suspense.move(S,R,U);return}if(I&64){m.move(x,S,R,_s);return}if(m===Se){i(F,S,R);for(let z=0;z<E.length;z++)Ze(E[z],S,R,U);i(x.anchor,S,R);return}if(m===fa){A(x,S,R);return}if(U!==2&&I&1&&y)if(U===0)y.beforeEnter(F),i(F,S,R),Ue(()=>y.enter(F),V);else{const{leave:z,delayLeave:$,afterLeave:M}=y,J=()=>{x.ctx.isUnmounted?r(F):i(F,S,R)},ct=()=>{F._isLeaving&&F[mv](!0),z(F,()=>{J(),M&&M()})};$?$(F,J,ct):ct()}else i(F,S,R)},Re=(x,S,R,U=!1,V=!1)=>{const{type:F,props:m,ref:y,children:E,dynamicChildren:I,shapeFlag:q,patchFlag:z,dirs:$,cacheIndex:M}=x;if(z===-2&&(V=!1),y!=null&&(Ys(),Wr(y,null,R,x,!0),Xs()),M!=null&&(S.renderCache[M]=void 0),q&256){S.ctx.deactivate(x);return}const J=q&1&&$,ct=!or(x);let mt;if(ct&&(mt=m&&m.onVnodeBeforeUnmount)&&xs(mt,S,x),q&6)Eo(x.component,R,U);else{if(q&128){x.suspense.unmount(R,U);return}J&&ki(x,null,S,"beforeUnmount"),q&64?x.type.remove(x,S,R,_s,U):I&&!I.hasOnce&&(F!==Se||z>0&&z&64)?Ns(I,S,R,!1,!0):(F===Se&&z&384||!V&&q&16)&&Ns(E,S,R),U&&ji(x)}(ct&&(mt=m&&m.onVnodeUnmounted)||J)&&Ue(()=>{mt&&xs(mt,S,x),J&&ki(x,null,S,"unmounted")},R)},ji=x=>{const{type:S,el:R,anchor:U,transition:V}=x;if(S===Se){_r(R,U);return}if(S===fa){b(x);return}const F=()=>{r(R),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(x.shapeFlag&1&&V&&!V.persisted){const{leave:m,delayLeave:y}=V,E=()=>m(R,F);y?y(x.el,F,E):E()}else F()},_r=(x,S)=>{let R;for(;x!==S;)R=p(x),r(x),x=R;r(S)},Eo=(x,S,R)=>{const{bum:U,scope:V,job:F,subTree:m,um:y,m:E,a:I}=x;td(E),td(I),U&&aa(U),V.stop(),F&&(F.flags|=8,Re(m,x,S,R)),y&&Ue(y,S),Ue(()=>{x.isUnmounted=!0},S)},Ns=(x,S,R,U=!1,V=!1,F=0)=>{for(let m=F;m<x.length;m++)Re(x[m],S,R,U,V)},si=x=>{if(x.shapeFlag&6)return si(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const S=p(x.anchor||x.el),R=S&&S[fv];return R?p(R):S};let ii=!1;const Wi=(x,S,R)=>{x==null?S._vnode&&Re(S._vnode,null,null,!0):k(S._vnode||null,x,S,null,null,null,R),S._vnode=x,ii||(ii=!0,qc(),$h(),ii=!1)},_s={p:k,um:Re,m:Ze,r:ji,mt:vt,mc:B,pc:at,pbc:D,n:si,o:t};return{render:Wi,hydrate:void 0,createApp:zv(Wi)}}function pa({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Ci({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gh(t,e,s=!1){const i=t.children,r=e.children;if(dt(i)&&dt(r))for(let o=0;o<i.length;o++){const n=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=ai(r[o]),a.el=n.el),!s&&a.patchFlag!==-2&&Gh(n,a)),a.type===ko&&a.patchFlag!==-1&&(a.el=n.el),a.type===Js&&!a.el&&(a.el=n.el)}}function Yv(t){const e=t.slice(),s=[0];let i,r,o,n,a;const l=t.length;for(i=0;i<l;i++){const d=t[i];if(d!==0){if(r=s[s.length-1],t[r]<d){e[i]=r,s.push(i);continue}for(o=0,n=s.length-1;o<n;)a=o+n>>1,t[s[a]]<d?o=a+1:n=a;d<t[s[o]]&&(o>0&&(e[i]=s[o-1]),s[o]=i)}}for(o=s.length,n=s[o-1];o-- >0;)s[o]=n,n=e[n];return s}function Yh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yh(e)}function td(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xv=Symbol.for("v-scx"),Jv=()=>de(Xv);function Mi(t,e,s){return Xh(t,e,s)}function Xh(t,e,s=zt){const{immediate:i,deep:r,flush:o,once:n}=s,a=Ee({},s),l=e&&i||!e&&o!=="post";let d;if(oo){if(o==="sync"){const g=Jv();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Is,g.resume=Is,g.pause=Is,g}}const h=Le;a.call=(g,v,k)=>Ms(g,h,v,k);let u=!1;o==="post"?a.scheduler=g=>{Ue(g,h&&h.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(g,v)=>{v?g():Nl(g)}),a.augmentJob=g=>{e&&(g.flags|=4),u&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=dv(t,e,a);return oo&&(d?d.push(p):l&&p()),p}function Qv(t,e,s){const i=this.proxy,r=te(t)?t.includes(".")?Jh(i,t):()=>i[t]:t.bind(i,i);let o;pt(e)?o=e:(o=e.handler,s=e);const n=So(this),a=Xh(r,o.bind(i),s);return n(),a}function Jh(t,e){const s=e.split(".");return()=>{let i=t;for(let r=0;r<s.length&&i;r++)i=i[s[r]];return i}}const Zv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gi(e)}Modifiers`]||t[`${Hi(e)}Modifiers`];function t1(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||zt;let r=s;const o=e.startsWith("update:"),n=o&&Zv(i,e.slice(7));n&&(n.trim&&(r=s.map(h=>te(h)?h.trim():h)),n.number&&(r=s.map(Ay)));let a,l=i[a=na(e)]||i[a=na(gi(e))];!l&&o&&(l=i[a=na(Hi(e))]),l&&Ms(l,t,6,r);const d=i[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ms(d,t,6,r)}}const e1=new WeakMap;function Qh(t,e,s=!1){const i=s?e1:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let n={},a=!1;if(!pt(t)){const l=d=>{const h=Qh(d,e,!0);h&&(a=!0,Ee(n,h))};!s&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(Bt(t)&&i.set(t,null),null):(dt(o)?o.forEach(l=>n[l]=null):Ee(n,o),Bt(t)&&i.set(t,n),n)}function Un(t,e){return!t||!Mn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Tt(t,e[0].toLowerCase()+e.slice(1))||Tt(t,Hi(e))||Tt(t,e))}function ed(t){const{type:e,vnode:s,proxy:i,withProxy:r,propsOptions:[o],slots:n,attrs:a,emit:l,render:d,renderCache:h,props:u,data:p,setupState:g,ctx:v,inheritAttrs:k}=t,L=cn(t);let _,w;try{if(s.shapeFlag&4){const b=r||i,C=b;_=As(d.call(C,b,h,u,g,p,v)),w=a}else{const b=e;_=As(b.length>1?b(u,{attrs:a,slots:n,emit:l}):b(u,null)),w=e.props?a:s1(a)}}catch(b){qr.length=0,Fn(b,t,1),_=Yt(Js)}let A=_;if(w&&k!==!1){const b=Object.keys(w),{shapeFlag:C}=A;b.length&&C&7&&(o&&b.some($l)&&(w=i1(w,o)),A=ur(A,w,!1,!0))}return s.dirs&&(A=ur(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&Fl(A,s.transition),_=A,cn(L),_}const s1=t=>{let e;for(const s in t)(s==="class"||s==="style"||Mn(s))&&((e||(e={}))[s]=t[s]);return e},i1=(t,e)=>{const s={};for(const i in t)(!$l(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function r1(t,e,s){const{props:i,children:r,component:o}=t,{props:n,children:a,patchFlag:l}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?sd(i,n,d):!!n;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const p=h[u];if(n[p]!==i[p]&&!Un(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===n?!1:i?n?sd(i,n,d):!0:!!n;return!1}function sd(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!Un(s,o))return!0}return!1}function o1({vnode:t,parent:e},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=s,e=e.parent;else break}}const Zh=t=>t.__isSuspense;function n1(t,e){e&&e.pendingBranch?dt(t)?e.effects.push(...t):e.effects.push(t):pv(t)}const Se=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),Js=Symbol.for("v-cmt"),fa=Symbol.for("v-stc"),qr=[];let Ke=null;function ut(t=!1){qr.push(Ke=t?null:[])}function a1(){qr.pop(),Ke=qr[qr.length-1]||null}let io=1;function dr(t,e=!1){io+=t,t<0&&Ke&&e&&(Ke.hasOnce=!0)}function tp(t){return t.dynamicChildren=io>0?Ke||sr:null,a1(),io>0&&Ke&&Ke.push(t),t}function _t(t,e,s,i,r,o){return tp(H(t,e,s,i,r,o,!0))}function $s(t,e,s,i,r){return tp(Yt(t,e,s,i,r,!0))}function ro(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const ep=({key:t})=>t??null,Go=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?te(t)||Wt(t)||pt(t)?{i:ze,r:t,k:e,f:!!s}:t:null);function H(t,e=null,s=null,i=0,r=null,o=t===Se?0:1,n=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ep(e),ref:e&&Go(e),scopeId:Ih,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return a?(Wl(l,s),o&128&&t.normalize(l)):s&&(l.shapeFlag|=te(s)?8:16),io>0&&!n&&Ke&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ke.push(l),l}const Yt=l1;function l1(t,e=null,s=null,i=0,r=null,o=!1){if((!t||t===$v)&&(t=Js),ro(t)){const a=ur(t,e,!0);return s&&Wl(a,s),io>0&&!o&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(t)]=a:Ke.push(a)),a.patchFlag=-2,a}if(b1(t)&&(t=t.__vccOpts),e){e=sp(e);let{class:a,style:l}=e;a&&!te(a)&&(e.class=cr(a)),Bt(l)&&(Nn(l)&&!dt(l)&&(l=Ee({},l)),e.style=zn(l))}const n=te(t)?1:Zh(t)?128:gv(t)?64:Bt(t)?4:pt(t)?2:0;return H(t,e,s,i,r,n,o,!0)}function sp(t){return t?Nn(t)||Uh(t)?Ee({},t):t:null}function ur(t,e,s=!1,i=!1){const{props:r,ref:o,patchFlag:n,children:a,transition:l}=t,d=e?c1(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&ep(d),ref:e&&e.ref?s&&o?dt(o)?o.concat(Go(e)):[o,Go(e)]:Go(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Fl(h,l.clone(h)),h}function Hn(t=" ",e=0){return Yt(ko,null,t,e)}function De(t="",e=!1){return e?(ut(),$s(Js,null,t)):Yt(Js,null,t)}function As(t){return t==null||typeof t=="boolean"?Yt(Js):dt(t)?Yt(Se,null,t.slice()):ro(t)?ai(t):Yt(ko,null,String(t))}function ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ur(t)}function Wl(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(dt(e))s=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wl(t,r()),r._c&&(r._d=!0));return}else{s=32;const r=e._;!r&&!Uh(e)?e._ctx=ze:r===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pt(e)?(e={default:e,_ctx:ze},s=32):(e=String(e),i&64?(s=16,e=[Hn(e)]):s=8);t.children=e,t.shapeFlag|=s}function c1(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=cr([e.class,i.class]));else if(r==="style")e.style=zn([e.style,i.style]);else if(Mn(r)){const o=e[r],n=i[r];n&&o!==n&&!(dt(o)&&o.includes(n))&&(e[r]=o?[].concat(o,n):n)}else r!==""&&(e[r]=i[r])}return e}function xs(t,e,s,i=null){Ms(t,e,7,[s,i])}const d1=Nh();let u1=0;function h1(t,e,s){const i=t.type,r=(e?e.appContext:t.appContext)||d1,o={uid:u1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jh(i,r),emitsOptions:Qh(i,r),emit:null,emitted:null,propsDefaults:zt,inheritAttrs:i.inheritAttrs,ctx:zt,data:zt,props:zt,attrs:zt,slots:zt,refs:zt,setupState:zt,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=t1.bind(null,o),t.ce&&t.ce(o),o}let Le=null;const Co=()=>Le||ze;let hn,Ka;{const t=Dn(),e=(s,i)=>{let r;return(r=t[s])||(r=t[s]=[]),r.push(i),o=>{r.length>1?r.forEach(n=>n(o)):r[0](o)}};hn=e("__VUE_INSTANCE_SETTERS__",s=>Le=s),Ka=e("__VUE_SSR_SETTERS__",s=>oo=s)}const So=t=>{const e=Le;return hn(t),t.scope.on(),()=>{t.scope.off(),hn(e)}},id=()=>{Le&&Le.scope.off(),hn(null)};function ip(t){return t.vnode.shapeFlag&4}let oo=!1;function p1(t,e=!1,s=!1){e&&Ka(e);const{props:i,children:r}=t.vnode,o=ip(t);Fv(t,i,o,e),jv(t,r,s||e);const n=o?f1(t,e):void 0;return e&&Ka(!1),n}function f1(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Iv);const{setup:i}=s;if(i){Ys();const r=t.setupContext=i.length>1?m1(t):null,o=So(t),n=xo(i,t,0,[t.props,r]),a=Ju(n);if(Xs(),o(),(a||t.sp)&&!or(t)&&Oh(t),a){if(n.then(id,id),e)return n.then(l=>{rd(t,l)}).catch(l=>{Fn(l,t,0)});t.asyncDep=n}else rd(t,n)}else rp(t)}function rd(t,e,s){pt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Bt(e)&&(t.setupState=kh(e)),rp(t)}function rp(t,e,s){const i=t.type;t.render||(t.render=i.render||Is);{const r=So(t);Ys();try{Lv(t)}finally{Xs(),r()}}}const g1={get(t,e){return Ce(t,"get",""),t[e]}};function m1(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,g1),slots:t.slots,emit:t.emit,expose:e}}function Kl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kh(Vl(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Kr)return Kr[s](t)},has(e,s){return s in e||s in Kr}})):t.proxy}function b1(t){return pt(t)&&"__vccOpts"in t}const Dt=(t,e)=>lv(t,e,oo);function op(t,e,s){const i=(o,n,a)=>{dr(-1);try{return Yt(o,n,a)}finally{dr(1)}},r=arguments.length;return r===2?Bt(e)&&!dt(e)?ro(e)?i(t,null,[e]):i(t,e):i(t,null,e):(r>3?s=Array.prototype.slice.call(arguments,2):r===3&&ro(s)&&(s=[s]),i(t,e,s))}const y1="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qa;const od=typeof window<"u"&&window.trustedTypes;if(od)try{qa=od.createPolicy("vue",{createHTML:t=>t})}catch{}const np=qa?t=>qa.createHTML(t):t=>t,v1="http://www.w3.org/2000/svg",_1="http://www.w3.org/1998/Math/MathML",Us=typeof document<"u"?document:null,nd=Us&&Us.createElement("template"),w1={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const r=e==="svg"?Us.createElementNS(v1,t):e==="mathml"?Us.createElementNS(_1,t):s?Us.createElement(t,{is:s}):Us.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Us.createTextNode(t),createComment:t=>Us.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Us.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,r,o){const n=s?s.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),s),!(r===o||!(r=r.nextSibling)););else{nd.innerHTML=np(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=nd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,s)}return[n?n.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},x1=Symbol("_vtc");function k1(t,e,s){const i=t[x1];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const ad=Symbol("_vod"),C1=Symbol("_vsh"),S1=Symbol(""),E1=/(?:^|;)\s*display\s*:/;function A1(t,e,s){const i=t.style,r=te(s);let o=!1;if(s&&!r){if(e)if(te(e))for(const n of e.split(";")){const a=n.slice(0,n.indexOf(":")).trim();s[a]==null&&Yo(i,a,"")}else for(const n in e)s[n]==null&&Yo(i,n,"");for(const n in s)n==="display"&&(o=!0),Yo(i,n,s[n])}else if(r){if(e!==s){const n=i[S1];n&&(s+=";"+n),i.cssText=s,o=E1.test(s)}}else e&&t.removeAttribute("style");ad in t&&(t[ad]=o?i.display:"",t[C1]&&(i.display="none"))}const ld=/\s*!important$/;function Yo(t,e,s){if(dt(s))s.forEach(i=>Yo(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const i=$1(t,e);ld.test(s)?t.setProperty(Hi(i),s.replace(ld,""),"important"):t[i]=s}}const cd=["Webkit","Moz","ms"],ga={};function $1(t,e){const s=ga[e];if(s)return s;let i=gi(e);if(i!=="filter"&&i in t)return ga[e]=i;i=th(i);for(let r=0;r<cd.length;r++){const o=cd[r]+i;if(o in t)return ga[e]=o}return e}const dd="http://www.w3.org/1999/xlink";function ud(t,e,s,i,r,o=Ry(e)){i&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,s):s==null||o&&!sh(s)?t.removeAttribute(e):t.setAttribute(e,o?"":ti(s)?String(s):s)}function hd(t,e,s,i,r){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?np(s):s);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=s==null?t.type==="checkbox"?"on":"":String(s);(a!==l||!("_value"in t))&&(t.value=l),s==null&&t.removeAttribute(e),t._value=s;return}let n=!1;if(s===""||s==null){const a=typeof t[e];a==="boolean"?s=sh(s):s==null&&a==="string"?(s="",n=!0):a==="number"&&(s=0,n=!0)}try{t[e]=s}catch{}n&&t.removeAttribute(r||e)}function T1(t,e,s,i){t.addEventListener(e,s,i)}function I1(t,e,s,i){t.removeEventListener(e,s,i)}const pd=Symbol("_vei");function L1(t,e,s,i,r=null){const o=t[pd]||(t[pd]={}),n=o[e];if(i&&n)n.value=i;else{const[a,l]=O1(e);if(i){const d=o[e]=P1(i,r);T1(t,a,d,l)}else n&&(I1(t,a,n,l),o[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function O1(t){let e;if(fd.test(t)){e={};let i;for(;i=t.match(fd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hi(t.slice(2)),e]}let ma=0;const M1=Promise.resolve(),R1=()=>ma||(M1.then(()=>ma=0),ma=Date.now());function P1(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Ms(D1(i,s.value),e,5,[i])};return s.value=t,s.attached=R1(),s}function D1(t,e){if(dt(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const gd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,z1=(t,e,s,i,r,o)=>{const n=r==="svg";e==="class"?k1(t,i,n):e==="style"?A1(t,s,i):Mn(e)?$l(e)||L1(t,e,s,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V1(t,e,i,n))?(hd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ud(t,e,i,n,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!te(i))?hd(t,gi(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ud(t,e,i,n))};function V1(t,e,s,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&gd(e)&&pt(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gd(e)&&te(s)?!1:e in t}const N1=["ctrl","shift","alt","meta"],F1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>N1.some(s=>t[`${s}Key`]&&!e.includes(s))},je=(t,e)=>{const s=t._withMods||(t._withMods={}),i=e.join(".");return s[i]||(s[i]=((r,...o)=>{for(let n=0;n<e.length;n++){const a=F1[e[n]];if(a&&a(r,e))return}return t(r,...o)}))},B1=Ee({patchProp:z1},w1);let md;function U1(){return md||(md=Kv(B1))}const ap=((...t)=>{const e=U1().createApp(...t),{mount:s}=e;return e.mount=i=>{const r=j1(i);if(!r)return;const o=e._component;!pt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const n=s(r,!1,H1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},e});function H1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function j1(t){return te(t)?document.querySelector(t):t}function lp(t){const e=s=>Array.isArray(s)?s.map(i=>e(i)):Wt(s)||Gs(s)||Nn(s)?e(xt(s)):s&&typeof s=="object"?Object.keys(s).reduce((i,r)=>(i[r]=e(s[r]),i),{}):s;return e(t)}const cp="https://attack.mitre.org",W1=`${cp}/techniques/`,K1=`${cp}/tactics/`,q1="/host-management/hosts";function G1(t){return t.technique_id?t.technique_id.replace(".","/"):""}function Y1(t){return t?.technique_id?`${W1}/${G1(t)}`:""}function X1(t){return t?.tactic_id?`${K1}/${t.tactic_id}`:""}function J1(t){return t?.device?`${q1}/${t.device?.device_id}?filter=device_id:%27${t.device?.device_id}%27`:""}const dp="mitreAutoRemediationJira",up="mitreAutoRemediationCreatedIssues";class Q1 extends Error{}const Z1="ransomwareNotifyIT",t_="ransomwareNotifyIR";let Vo;async function pn(t,e){try{const i=await t.collection({collection:dp}).read(e);if(i&&"errors"in i&&Array.isArray(i.errors)&&i.errors.length>0){const r=new Q1(i.errors[0].message);throw i.errors[0].code&&(r.code=Number(i.errors[0].code)),r}else return i&&"account"in i&&"project"in i?i:void 0}catch(s){if(s.message?.includes("object not found")||s.code===404)return;throw s}}async function hp(t){if(Vo!==void 0)return Vo;let e=!0;try{e=typeof(await t.collection({collection:dp}))?.read=="function",e&&(await Promise.all([pn(t,"ransomwareNotifyIT"),pn(t,"ransomwareNotifyIR")]),e=!0)}catch(s){console.error(s),e=!1}finally{Vo=e}return Vo}const e_=async function(t){if(await hp(t))return pn(t,Z1)},s_=async function(t){if(await hp(t))return pn(t,t_)},pp=function(t,e){return`${t.data?.detectionId}-${e}`.replace(/[^a-zA-Z\d\-_]/gi,"_")},bd=async function(t,e){const s=pp(t,e);try{const r=await t.collection({collection:up}).read(s);return r?.account&&r?.project&&r?.issueId?r:void 0}catch(i){if(i.message?.includes("object not found"))return;console.error(i)}},i_=async function(t,e,s,i,r){if(i.created){const o={account:s.account??"N/A",priority:s.priority??"N/A",issueType:s.issueType??"N/A",summary:s.summary??"",description:s.description??"",project:s.project??"N/A",labels:s.labels??[],issueId:i.id,issueKey:i.key,issueLink:i.api_link,detectionId:e.id,creationDate:new Date().toISOString(),notificationType:r},n=t.collection({collection:up}),a=pp(t,r),l=await n.write(a,lp(o));return!l||l?.errors?.length?void 0:o}},r_=(t,e)=>e.split(".").reduce((s,i)=>s?.[i],t),ql={AgentId:"agent_id",AgentVersion:"device.agent_version",AllegedFiletype:"alleged_filetype",ClientID:"cid",CmdLine:"cmdline",CreatedTimestamp:"created_timestamp:datetime",DetectionId:"id",DeviceID:"device.device_id",ExternalIP:"device.external_ip",FalconHostLink:"falcon_host_link",FileName:"filename",FilePath:"filepath",Hostname:"device.hostname",Name:"name",Objective:"objective",PatternDisposition:"pattern_disposition_description",PatternDispositionID:"pattern_disposition",Platform:"platform",ProcessEndTime:"process_end_time:datetime",ProcessID:"process_id",ProcessStartTime:"process_start_time:datetime",Product:"product",Scenario:"scenario",Severity:"severity:toSeverityValue",Status:"status",Tactic:"tactic",TacticID:"tactic_id",Tags:"tags:join",Technique:"technique",TechniqueID:"technique_id",TimeStamp:"timestamp:datetime",Type:"type",UpdatedTimestamp:"updated_timestamp:datetime",UserID:"user_id",UserName:"user_name"},fp=(t,e,s,i,r="---",o="preview")=>{const n=ql[s]??"";let a="";if(n){const[l,d]=n.split(":");try{if(a=l?r_(i||{},l):"",d)switch(d){case"join":{a&&(a=[...a].join(", "));break}case"toSeverityValue":{if(a){const h=Number(a);isNaN(h)?a="Unknown":h<=20?a="Informational":h<=40?a="Low":h<=60?a="Medium":h<=80?a="High":h<=101?a="Critical":a="Unknown"}break}case"datetime":if(a){const h=Number(a),u=new Date(isNaN(h)?String(a):Number(a)*1e3);o==="preview"?a=e.d(u,"fullDateTime",t.data?.locale):a=u.toISOString()}break;default:break}}catch(h){console.error(h),console.log(l,a)}}return String(a)||r},yd=(t,e,s,i)=>(i&&Object.keys(ql).forEach(r=>{const o=["${",r,"}"].join(""),n=fp(t,e,r,i);s=s.replaceAll(o,n)}),s),o_="Ransomware ${Tactic} via ${Technique} detected on ${Hostname}",vd={default:"bb5c382c865347fd8ce08749cc2f64fc"},gp={},n_=async t=>Object.entries(vd).find(([e,s])=>t.includes(e))?.[1]??vd.default,a_=async function(t,e){const s=await n_(e);return((await t.api.plugins.getEntitiesConfigsV1({appId:s})).resources??[])?.filter(r=>r.config?.permissions.includes("read:jira-work")&&r.config?.permissions.includes("write:jira-work")&&r.config?.id).map(r=>({name:r.config.name,id:r.config.id}))},l_=async function(t,e){const s=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_projects_deprecated",config_id:e,request:{}}]});return t.api.plugins.postEntitiesExecuteV1,(s.resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,isPrivate:r.isPrivate,href:r.self})))},c_=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_labels",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.values?.length??0)>0).flatMap(i=>i.response_body.values).map(i=>{const r=i.replace(/ /g,"_");return gp[r]=i,r})},Ga=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_priorities",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,href:r.self,description:r.description})))},d_=async function(t,e,s){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_issue_types",config_id:e,request:{params:{query:{projectId:s}}}}]})).resources??[])?.filter(r=>r.status_code===200&&(r.response_body?.length??0)>0).flatMap(r=>r.response_body.map(o=>({id:o.id,name:o.name,href:o.self,description:o.description})))},u_=async function(t,e,s,i,r,o){try{const{account:n,project:a,priority:l,labels:d=[],summary:h="",description:u="",issueType:p}=lp(r);if(n&&a&&l&&d?.length&&h&&p){const[g,v,k,L,_]=await Promise.all([a_(t,s),l_(t,n),Ga(t,n),d_(t,n,a),c_(t,n)]),w=g?.find(T=>String(T.id)===String(n)||String(T.name)===String(n)),A=v?.find(T=>String(T.id)===String(a)||String(T.name)===String(a)),b=k?.find(T=>String(T.id)===String(l)||String(T.name)===String(l)),C=L?.find(T=>String(T.id)===String(p)||String(T.name)===String(p)),O=d.map(T=>gp[T]??T.replace(/_/g,"")).filter(T=>_.includes(T));if(w&&A&&b&&C&&O.length){const T=yd(t,e,u,o),B=yd(t,e,h,o),P=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.create_issue",config_id:n,request:{json:{fields:{description:T,issuetype:{name:C.name},labels:O,priority:{id:b.id},project:{id:A.id},summary:B}}}}]});if(P?.resources?.length&&!P?.errors?.length){const D={errors:[],created:!0,id:P?.resources?.[0]?.response_body?.id||"",key:P?.resources?.[0]?.response_body?.key||"",api_link:P?.resources?.[0]?.response_body?.self||""};try{D.logged_data=await i_(t,o,{account:w.name,project:A.name,priority:b.name,issueType:C.name,labels:d??[],description:T??"",summary:B??""},D,i)}catch(lt){console.error(lt)}return D}else return{errors:(P?.errors??[]).map(D=>D.message),created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}catch(n){return console.error(n),{errors:[n.message],created:!1,id:"",key:"",api_link:""}}};async function h_(t,e){return e?(await t.api.alerts.postEntitiesAlertsV1({ids:[e]}))?.resources?.[0]:void 0}const ye={I18N:Symbol("i18n"),ALERTS:Symbol("alerts"),FALCON_API:Symbol("falconApi"),FALCON_API_GET_ORIGINS:Symbol("falconApiGetOrigins"),FALCON_API_GET_APP_ID:Symbol("falconApiGetAppId")};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let mp;const jn=t=>mp=t,bp=Symbol();function Ya(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Gr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gr||(Gr={}));function p_(){const t=Ll(!0),e=t.run(()=>Vt({}));let s=[],i=[];const r=Vl({install(o){jn(r),r._a=o,o.provide(bp,r),o.config.globalProperties.$pinia=r,i.forEach(n=>s.push(n)),i=[]},use(o){return this._a?s.push(o):i.push(o),this},_p:s,_a:null,_e:t,_s:new Map,state:e});return r}const yp=()=>{};function _d(t,e,s,i=yp){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!s&&nh()&&Py(r),r}function qi(t,...e){t.slice().forEach(s=>{s(...e)})}const f_=t=>t(),wd=Symbol(),ba=Symbol();function Xa(t,e){t instanceof Map&&e instanceof Map?e.forEach((s,i)=>t.set(i,s)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const s in e){if(!e.hasOwnProperty(s))continue;const i=e[s],r=t[s];Ya(r)&&Ya(i)&&t.hasOwnProperty(s)&&!Wt(i)&&!Gs(i)?t[s]=Xa(r,i):t[s]=i}return t}const g_=Symbol();function m_(t){return!Ya(t)||!Object.prototype.hasOwnProperty.call(t,g_)}const{assign:oi}=Object;function b_(t){return!!(Wt(t)&&t.effect)}function y_(t,e,s,i){const{state:r,actions:o,getters:n}=e,a=s.state.value[t];let l;function d(){a||(s.state.value[t]=r?r():{});const h=Ch(s.state.value[t]);return oi(h,o,Object.keys(n||{}).reduce((u,p)=>(u[p]=Vl(Dt(()=>{jn(s);const g=s._s.get(t);return n[p].call(g,g)})),u),{}))}return l=vp(t,d,e,s,i,!0),l}function vp(t,e,s={},i,r,o){let n;const a=oi({actions:{}},s),l={deep:!0};let d,h,u=[],p=[],g;const v=i.state.value[t];!o&&!v&&(i.state.value[t]={}),Vt({});let k;function L(B){let P;d=h=!1,typeof B=="function"?(B(i.state.value[t]),P={type:Gr.patchFunction,storeId:t,events:g}):(Xa(i.state.value[t],B),P={type:Gr.patchObject,payload:B,storeId:t,events:g});const D=k=Symbol();Eh().then(()=>{k===D&&(d=!0)}),h=!0,qi(u,P,i.state.value[t])}const _=o?function(){const{state:P}=s,D=P?P():{};this.$patch(lt=>{oi(lt,D)})}:yp;function w(){n.stop(),u=[],p=[],i._s.delete(t)}const A=(B,P="")=>{if(wd in B)return B[ba]=P,B;const D=function(){jn(i);const lt=Array.from(arguments),et=[],gt=[];function vt(G){et.push(G)}function kt(G){gt.push(G)}qi(p,{args:lt,name:D[ba],store:C,after:vt,onError:kt});let tt;try{tt=B.apply(this&&this.$id===t?this:C,lt)}catch(G){throw qi(gt,G),G}return tt instanceof Promise?tt.then(G=>(qi(et,G),G)).catch(G=>(qi(gt,G),Promise.reject(G))):(qi(et,tt),tt)};return D[wd]=!0,D[ba]=P,D},b={_p:i,$id:t,$onAction:_d.bind(null,p),$patch:L,$reset:_,$subscribe(B,P={}){const D=_d(u,B,P.detached,()=>lt()),lt=n.run(()=>Mi(()=>i.state.value[t],et=>{(P.flush==="sync"?h:d)&&B({storeId:t,type:Gr.direct,events:g},et)},oi({},l,P)));return D},$dispose:w},C=wo(b);i._s.set(t,C);const T=(i._a&&i._a.runWithContext||f_)(()=>i._e.run(()=>(n=Ll()).run(()=>e({action:A}))));for(const B in T){const P=T[B];if(Wt(P)&&!b_(P)||Gs(P))o||(v&&m_(P)&&(Wt(P)?P.value=v[B]:Xa(P,v[B])),i.state.value[t][B]=P);else if(typeof P=="function"){const D=A(P,B);T[B]=D,a.actions[B]=P}}return oi(C,T),oi(xt(C),T),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:B=>{L(P=>{oi(P,B)})}}),i._p.forEach(B=>{oi(C,n.run(()=>B({store:C,app:i._a,pinia:i,options:a})))}),v&&o&&s.hydrate&&s.hydrate(C.$state,v),d=!0,h=!0,C}/*! #__NO_SIDE_EFFECTS__ */function v_(t,e,s){let i;const r=typeof e=="function";i=r?s:e;function o(n,a){const l=Nv();return n=n||(l?de(bp,null):null),n&&jn(n),n=mp,n._s.has(t)||(r?vp(t,e,i,n):y_(t,i,n)),n._s.get(t)}return o.$id=t,o}const Wn=v_("extension",()=>{const t=Vt(),e=Vt(!1),s=Vt(!1),i=Vt(!1),r=Vt(!1),o=Vt(),n=Vt("RansomwareRemediation:DefaultPanel"),a=wo({}),l=Vt(),d=Vt(),h=Vt(),u=Vt(),p=Vt([]),g=Vt([]),v=de(ye.FALCON_API),k=de(ye.I18N),L=de(ye.FALCON_API_GET_ORIGINS),_=Vt(String(v.data?.detectionId)),{t:w}=k,A=async()=>{try{s.value=!0,o.value=void 0,_.value&&(o.value=await h_(v,_.value))}catch(X){t.value=X,console.error(X)}finally{s.value=!1}},b=async()=>{try{i.value=!0,l.value=await e_(v),d.value=await s_(v),l.value?.account&&(p.value=await Ga(v,l.value?.account)),d.value?.account&&(g.value=await Ga(v,d.value?.account))}catch(X){t.value=X,console.error(X)}finally{i.value=!1}},C=async()=>{try{r.value=!0,_.value&&(h.value=await bd(v,"notifyIT"),u.value=await bd(v,"notifyIR"))}catch(X){t.value=X,console.error(X)}finally{r.value=!1}},O=Dt(()=>!0),T=()=>n.value?gt(n.value):{},B=(X,Ct)=>{n.value=X,Ct&&(a[X]=Ct)},P=(X,Ct)=>{a[n.value]={...a[n.value],[X]:Ct}},D=(X,Ct=void 0)=>gt(n.value)[X]??Ct,lt=X=>{a[X]={}},et=(X,Ct)=>{a[X]={...Ct}},gt=X=>(a[X]||(a[X]={}),a[X]??{}),vt=Dt(()=>i?.value||s?.value||r?.value),kt=async()=>{await Promise.all([A(),b(),C()])},tt=Dt(()=>n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR"?D("account","").length>0&&D("priority","").length>0&&D("issueType","").length>0&&D("summary","").length>0&&D("labels",[]).length>0:!0),G=async()=>{try{return e.value=!0,tt.value&&(n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR")?await u_(v,k,L(),n.value==="RansomwareRemediation:NotifyIT"?"notifyIT":"notifyIR",gt(n.value),o.value):{errors:[w("errorCreatingJiraIssueDataMissing")],created:!1,id:"",api_link:"",key:""}}finally{e.value=!1}},at=Dt(()=>{const X={account:"",project:"",priority:"",labels:"",issueType:"",summary:"",description:""};if(!tt.value){const Ct=T();Ct.account?.length||(X.account=w("selectAccount")),Ct.project?.length||(X.project=w("selectProject")),Ct.priority?.length||(X.priority=w("selectPriority")),Ct.labels?.length||(X.labels=w("enterOneOrMoreLabels")),Ct.issueType?.length||(X.issueType=w("selectIssueType")),Ct.summary?.length||(X.summary=w("enterSummary"))}return X});return v.events.on("data",X=>{const Ct=String(X.detectionId);Ct&&_.value!==Ct&&(v.data&&(v.data.detectionId=Ct),_.value=Ct,kt())}),{notifyITConfig:l,notifyIRConfig:d,notifyITPriorities:p,notifyIRPriorities:g,loadData:kt,isLoading:vt,loadingError:t,hasRansomwareRemediation:O,detection:o,setWizardState:B,setWizardStateProperty:P,clearWizardStateStep:lt,setWizardStateStep:et,wizardState:n,wizardStateValues:a,getWizardStateStep:gt,getWizardStateProperty:D,isStepValid:tt,createJiraIssueFromCurrentStep:G,isSaving:e,validationMessages:at,existingTicketIT:h,existingTicketIR:u,loadExistingTickets:C}}),vs=(t,e)=>{const s=t.__vccOpts||t;for(const[i,r]of e)s[i]=r;return s},__={},w_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function x_(t,e){return ut(),_t("svg",w_,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM17.207 15.793L15.793 17.207L12 13.414L8.207 17.207L6.793 15.793L10.586 12L6.793 8.207L8.207 6.793L12 10.586L15.793 6.793L17.207 8.207L13.414 12L17.207 15.793Z"},null,-1)])])}const xd=vs(__,[["render",x_]]),k_={},C_={width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"};function S_(t,e){return ut(),_t("svg",C_,[...e[0]||(e[0]=[H("g",null,[H("path",{d:"M7.5 12V8h1v4h-1ZM8 6.049A1.024 1.024 0 1 0 8 4a1.024 1.024 0 0 0 0 2.049Z"}),H("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7-5.976a5.976 5.976 0 1 0 0 11.952A5.976 5.976 0 0 0 8 2.024Z"})],-1)])])}const kd=vs(k_,[["render",S_]]),E_={},A_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function $_(t,e){return ut(),_t("svg",A_,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 19H11V10H13V19ZM12 8C11.171 8 10.5 7.328 10.5 6.5C10.5 5.672 11.172 5 12 5C12.828 5 13.5 5.672 13.5 6.5C13.5 7.328 12.828 8 12 8Z"},null,-1)])])}const T_=vs(E_,[["render",$_]]),I_={},L_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function O_(t,e){return ut(),_t("svg",L_,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM9.242 17.295L5.453 13.506L6.867 12.092L9.242 14.467L16.497 7.212L17.911 8.626L9.242 17.295Z"},null,-1)])])}const M_=vs(I_,[["render",O_]]),R_={},P_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function D_(t,e){return ut(),_t("svg",P_,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM11 5H13V14H11V5ZM12 19C11.171 19 10.5 18.328 10.5 17.5C10.5 16.672 11.172 16 12 16C12.828 16 13.5 16.672 13.5 17.5C13.5 18.328 12.828 19 12 19Z"},null,-1)])])}const z_=vs(R_,[["render",D_]]),V_={},N_={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"};function F_(t,e){return ut(),_t("svg",N_,[...e[0]||(e[0]=[H("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.009 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 11h2V4H9v7Zm1 4.475a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"},null,-1)])])}const B_=vs(V_,[["render",F_]]),U_={},H_={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function j_(t,e){return ut(),_t("svg",H_,[...e[0]||(e[0]=[H("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)])])}const W_=vs(U_,[["render",j_]]),K_={},q_={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function G_(t,e){return ut(),_t("svg",q_,[...e[0]||(e[0]=[H("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)])])}const Y_=vs(K_,[["render",G_]]),X_={class:"type-sm text-text-and-icons flex items-center gap-1 mb-1"},J_={class:"type-sm text-body-and-labels"},Q_=Ve({__name:"ActionsPrivacyPanel",setup(t){const{t:e}=de(ye.I18N);return(s,i)=>i[0]||(dr(-1,!0),(i[0]=H("div",{class:"bg-surface-2xl shadow-2xl p-4 border-l-2 border-medium mb-3 relative top-0 z-5 mb-6 rounded-sm"},[H("h3",X_,[Yt(W(B_),{class:"text-medium"}),H("span",null,ht(W(e)("warning")),1)]),H("p",J_,ht(W(e)("actionDataPrivacy")),1)])).cacheIndex=0,dr(1),i[0])}}),Z_={class:"flex gap-1 items-center mt-2"},tw={key:0,class:"inline-block text-xs text-disabled"},ew={slot:"trigger",class:"inline-block cursor-pointer text-xs underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"},sw=["value"],iw=["content"],rw=["content"],ow=Ve({__name:"VariablesSelector",props:{exampleDetection:{},disabled:{type:Boolean}},emits:["addVariable"],setup(t,{emit:e}){const s=de(ye.FALCON_API),i=de(ye.I18N),{t:r}=i,o=Vt(),n=e,a=Vt(!1),l=t,d=u=>{o?.value.hide(),u.detail.item?.value&&n("addVariable",`\${${u.detail.item?.value}}`)},h=u=>fp(s,i,u,l.exampleDetection,"---");return(u,p)=>(ut(),_t("div",Z_,[l.disabled?(ut(),_t("span",tw,"Insert variable")):(ut(),_t("sl-dropdown",{key:1,ref_key:"dropdownEl",ref:o,onSlAfterShow:p[0]||(p[0]=g=>a.value=!0),onSlAfterHide:p[1]||(p[1]=g=>a.value=!1),hoist:""},[H("a",ew,ht(W(r)("insertVariable")),1),H("sl-menu",{onSlSelect:d},[(ut(!0),_t(Se,null,Ph(W(ql),(g,v)=>(ut(),_t("sl-menu-item",{key:v,value:v},[Hn(ht(v)+" ",1),l.exampleDetection&&h(v)!=="undefined"?(ut(),_t("sl-tooltip",{key:0,slot:"suffix",style:{"--max-width":"90vw"},content:h(v),hoist:""},[Yt(W(kd))],8,iw)):De("",!0)],8,sw))),128))],32)],544)),H("sl-tooltip",{content:W(r)("insertVariableTooltip")},[Yt(W(kd))],8,rw)]))}}),Cd=vs(ow,[["__scopeId","data-v-0be42262"]]),nw=["open"],aw={slot:"expand-icon"},lw={slot:"collapse-icon"},cw={class:"flex w-full justify-between gap-3",slot:"summary"},dw={class:"flex"},uw={key:0,class:"self-center pr-3"},hw=Ve({__name:"CollapsiblePanel",props:{label:{},iconComponent:{},iconProps:{},count:{},fontClass:{},open:{type:Boolean}},emits:["hide","show","after-show","after-hide"],setup(t,{emit:e}){const s=e,i=t,r=Dt(()=>i.fontClass??"type-lg-tight-medium"),{open:o=Vt(!1)}=Ch(i),n=()=>{s("show"),o.value=!0},a=()=>{s("hide"),o.value=!1};return(l,d)=>(ut(),_t("sl-details",{class:"collapsible-panel",onSlShow:d[0]||(d[0]=je(h=>n(),["self"])),onSlHide:d[1]||(d[1]=je(h=>a(),["self"])),onSlAfterShow:d[2]||(d[2]=je(h=>l.$emit("after-show"),["self"])),onSlAfterHide:d[3]||(d[3]=je(h=>l.$emit("after-hide"),["self"])),open:W(o)},[H("div",aw,[Yt(W(W_))]),H("div",lw,[Yt(W(Y_))]),H("div",cw,[H("div",dw,[i.iconComponent?(ut(),_t("div",uw,[Yt(i.iconComponent,Oy(sp(i.iconProps)),null,16)])):De("",!0),H("h3",{class:cr(["text-titles-and-attributes",r.value])},ht(i.label),3)]),l.count!==void 0?(ut(),_t("div",{key:0,class:cr(["pr-0.5",r.value])},ht(l.count),3)):De("",!0)]),H("div",null,[Tv(l.$slots,"default",{},void 0)])],40,nw))}}),pw=vs(hw,[["__scopeId","data-v-ba21779b"]]),fw={class:"p-3"},gw={key:0,class:"flex flex-row items-center justify-items-start gap-3 mb-4"},mw=["disabled"],bw=["disabled"],yw={key:1},vw={class:"text-critical type-md-medium"},_w={class:"type-sm mb-4"},ww={key:2},xw={class:"text-high type-md-medium"},kw={class:"type-sm mb-4"},Cw={key:3},Sw={class:"text-high type-md-medium"},Ew={class:"type-sm mb-4"},Aw={key:4,class:"pt-3"},$w={class:"type-md-medium text-titles-and-attributes mb-3"},Tw={key:0,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},Iw={class:"w-1/4 truncate"},Lw={class:"type-xs text-body-and-labels"},Ow={class:"type-sm text-titles-and-attributes"},Mw={class:"w-1/3 truncate"},Rw={class:"type-xs text-body-and-labels"},Pw={class:"type-sm text-titles-and-attributes"},Dw={class:"truncate"},zw={class:"type-xs text-body-and-labels"},Vw={class:"type-sm text-titles-and-attributes"},Nw={key:1,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},Fw={class:"w-1/4 truncate"},Bw={class:"type-xs text-body-and-labels"},Uw={class:"type-sm text-titles-and-attributes"},Hw={class:"w-1/3 truncate"},jw={class:"type-xs text-body-and-labels"},Ww={class:"type-sm text-titles-and-attributes"},Kw={class:"truncate"},qw={class:"type-xs text-body-and-labels"},Gw={class:"type-sm text-titles-and-attributes"},Yw=Ve({__name:"DefaultPanel",setup(t){const e=de(ye.FALCON_API),s=Wn(),{t:i,d:r}=de(ye.I18N),o=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIR"),s.setWizardState("RansomwareRemediation:NotifyIT")},n=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIT"),s.setWizardState("RansomwareRemediation:NotifyIR")},a=()=>{!s.notifyITConfig&&!s.notifyIRConfig?e.navigation.navigateTo({path:"/wizard",type:"internal",target:"_blank"}):s.notifyITConfig?s.notifyIRConfig||e.navigation.navigateTo({path:"/notify-ir",type:"internal",target:"_blank"}):e.navigation.navigateTo({path:"/notify-it",type:"internal",target:"_blank"})};return(l,d)=>(ut(),_t("div",fw,[W(s).notifyITConfig||W(s).notifyIRConfig?(ut(),_t("div",gw,[H("sl-button",{disabled:!W(s).notifyITConfig,onClick:d[0]||(d[0]=h=>o()),variant:"neutral",size:"small",slot:"trigger"},ht(W(i)("notifyIT")),9,mw),H("sl-button",{disabled:!W(s).notifyIRConfig,onClick:d[1]||(d[1]=h=>n()),variant:"neutral",size:"small",slot:"trigger"},ht(W(i)("notifyIR")),9,bw)])):De("",!0),!W(s).notifyITConfig&&!W(s).notifyIRConfig?(ut(),_t("div",yw,[H("h2",vw,ht(W(i)("actionNotConfigured")),1),H("p",_w,ht(W(i)("configureActionsInAppMessage")),1),H("sl-button",{onClick:d[2]||(d[2]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},ht(W(i)("configureInApp")),1)])):W(s).notifyITConfig?W(s).notifyIRConfig?De("",!0):(ut(),_t("div",Cw,[H("h2",Sw,ht(W(i)("notifyIRNotConfigured")),1),H("p",Ew,ht(W(i)("configureNotifyIRInAppMessage")),1),H("sl-button",{onClick:d[4]||(d[4]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},ht(W(i)("configureInApp")),1)])):(ut(),_t("div",ww,[H("h2",xw,ht(W(i)("notifyITNotConfigured")),1),H("p",kw,ht(W(i)("configureNotifyITInAppMessage")),1),H("sl-button",{onClick:d[3]||(d[3]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},ht(W(i)("configureInApp")),1)])),W(s).existingTicketIT||W(s).existingTicketIR?(ut(),_t("div",Aw,[H("h2",$w,ht(W(i)("remediationHistory")),1),W(s).existingTicketIT?(ut(),_t("div",Tw,[H("div",Iw,[H("h3",Lw,ht(W(i)("action")),1),H("p",Ow,ht(W(i)("notifyIT")),1)]),H("div",Mw,[H("h3",Rw,ht(W(i)("jiraTicket")),1),H("p",Pw,ht(W(s).existingTicketIT.issueKey),1)]),H("div",Dw,[H("h3",zw,ht(W(i)("executionDate")),1),H("p",Vw,ht(W(r)(new Date(W(s).existingTicketIT.creationDate),"fullDateTime")),1)])])):De("",!0),W(s).existingTicketIR?(ut(),_t("div",Nw,[H("div",Fw,[H("h3",Bw,ht(W(i)("action")),1),H("p",Uw,ht(W(i)("notifyIR")),1)]),H("div",Hw,[H("h3",jw,ht(W(i)("jiraTicket")),1),H("p",Ww,ht(W(s).existingTicketIR.issueKey),1)]),H("div",Kw,[H("h3",qw,ht(W(i)("executionDate")),1),H("p",Gw,ht(W(r)(new Date(W(s).existingTicketIR.creationDate),"fullDateTime")),1)])])):De("",!0)])):De("",!0)]))}}),Xw={class:"flex flex-col items-start justify-items-center gap-3 p-3 border-t border-lines-light"},Jw={class:"type-md-medium text-text-and-icons mb-3"},Qw={class:"w-full"},Zw=["label","value","disabled"],tx=["value"],ex={class:"w-full"},sx=["label","value","disabled"],ix={class:"w-full"},rx=["label","value","disabled"],ox={class:"w-full"},nx={class:"w-full flex flex-row justify-end items-center gap-3"},ax=["disabled"],lx=["disabled","variant"],cx={key:0,class:"mr-1 inline-block"},dx={key:1,name:"x-octagon",class:"mr-1 inline-block"},ux={key:2,name:"check-circle",class:"mr-1 inline-block"},_p=Ve({__name:"ConfigureNotify",props:{step:{}},setup(t){let e,s;const i=de(ye.ALERTS),r=Vt(),o=Vt(),n=Vt(),a=Vt(),l=tt=>{r.value=tt,setTimeout(()=>{r.value=void 0},10*1e3)},{t:d}=de(ye.I18N),h=t,u=Wn(),p=Dt(()=>h.step),g=Dt(()=>u.getWizardStateProperty("priority","")),v=Dt(()=>p.value==="RansomwareRemediation:NotifyIT"?u.notifyITPriorities:p.value==="RansomwareRemediation:NotifyIR"?u.notifyIRPriorities:[]),k=Dt(()=>p.value==="RansomwareRemediation:NotifyIT"?d("notifyIT"):p.value==="RansomwareRemediation:NotifyIR"?d("notifyIR"):""),L=Dt(()=>u.getWizardStateProperty("summary","")),_=Dt(()=>u.getWizardStateProperty("description","")),w=async tt=>{const G=tt?.target?.value;u.setWizardStateProperty("priority",G),kt()},A=async tt=>{const G=tt?.target?.value;u.setWizardStateProperty("summary",G.trim()||o_),kt()},b=async tt=>{const G=tt?.target?.value;u.setWizardStateProperty("description",G.trim()),kt()},C=Dt(()=>u.isStepValid),O=Dt(()=>u.validationMessages),T=tt=>{u.setWizardStateProperty("summary",`${L.value.trim()} ${tt}`.trim()),o.value.focus(),kt()},B=tt=>{u.setWizardStateProperty("description",`${_.value.trim()} ${tt}`.trim()),n.value.focus(),kt()},P=Dt(()=>u.isLoading),D=Dt(()=>u.isSaving),lt=async()=>{u.setWizardState(p.value),p.value==="RansomwareRemediation:NotifyIT"?u.setWizardStateStep(p.value,u.notifyITConfig??{}):p.value==="RansomwareRemediation:NotifyIR"&&u.setWizardStateStep(p.value,u.notifyIRConfig??{}),kt()},et=async()=>{clearTimeout(e),s?.hide(),u.wizardState!=="RansomwareRemediation:DefaultPanel"&&(await u.loadExistingTickets(),u.setWizardState("RansomwareRemediation:DefaultPanel"))},gt=async()=>{if(kt()&&!r.value){const tt=await u.createJiraIssueFromCurrentStep();tt.created&&tt?(l("success"),e=setTimeout(et,1e4),s=i.notify({variant:"success",message:d("jiraIssueCreated",{key:tt.key,id:tt.id}),backdrop:!0,position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0,et()}},!1)):(l("danger"),s=i.notify({variant:"danger",backdrop:!0,message:tt.errors?.[0]??d("errorCreatingJiraIssue"),position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0}},!1))}},vt=()=>{u.setWizardState("RansomwareRemediation:DefaultPanel")},kt=()=>{const{priority:tt,summary:G,description:at}=O.value;return a.value?.setCustomValidity(tt),o.value?.setCustomValidity(G),n.value?.setCustomValidity(at),a.value?.disabled||a.value?.reportValidity(),o.value?.disabled||o.value?.reportValidity(),n?.value?.disabled||n.value?.reportValidity(),C.value};return lt(),(tt,G)=>(ut(),_t("div",Xw,[H("h1",Jw,ht(k.value),1),H("div",Qw,[H("sl-select",{label:W(d)("priority"),value:g.value,onSlChange:je(w,["self"]),placement:"bottom",disabled:P.value,ref_key:"priorityElement",ref:a},[(ut(!0),_t(Se,null,Ph(v.value,at=>(ut(),_t("sl-option",{key:at.id,value:at.id},ht(at.name),9,tx))),128))],40,Zw)]),H("div",ex,[H("sl-input",{label:W(d)("summary"),value:L.value,ref_key:"summaryElement",ref:o,onSlChange:je(A,["self"]),disabled:P.value},null,40,sx),Yt(W(Cd),{onAddVariable:T,disabled:P.value,"example-detection":W(u).detection},null,8,["disabled","example-detection"])]),H("div",ix,[H("sl-textarea",{label:W(d)("description"),value:_.value,ref_key:"descriptionElement",ref:n,disabled:P.value,onSlChange:je(b,["self"])},null,40,rx),Yt(W(Cd),{onAddVariable:B,disabled:P.value,"example-detection":W(u).detection},null,8,["disabled","example-detection"])]),H("div",ox,[Yt(W(Q_))]),H("div",nx,[H("sl-button",{onClick:G[0]||(G[0]=at=>vt()),disabled:D.value||r.value,variant:"neutral",size:"small",slot:"trigger"},ht(W(d)("cancel")),9,ax),H("sl-button",{onClick:G[1]||(G[1]=at=>gt()),disabled:D.value||!W(u).isStepValid,variant:r.value?r.value:"primary",size:"small",slot:"trigger"},[D.value?(ut(),_t("sl-spinner",cx)):r.value==="danger"?(ut(),_t("sl-icon",dx)):r.value==="success"?(ut(),_t("sl-icon",ux)):De("",!0),Hn(" "+ht(W(d)("createTicket")),1)],8,lx)])]))}}),hx=Ve({__name:"NotifyIR",setup(t){return(e,s)=>(ut(),$s(_p,{step:"RansomwareRemediation:NotifyIR"}))}}),px=Ve({__name:"NotifyIT",setup(t){return(e,s)=>(ut(),$s(_p,{step:"RansomwareRemediation:NotifyIT"}))}}),fx={class:"bg-surface-md h-full w-full overflow-y-auto max-w-full"},gx={class:"p-3"},mx={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},bx={class:"w-2/3 truncate"},yx={class:"type-xs truncate text-body-and-labels",title:"{{ t('tacticAndTechnique') }}"},vx={class:"type-sm min-h-6 text-titles-and-attributes truncate"},_x=["href","title"],wx=["href","title"],xx={class:"w-1/3 truncate"},kx={class:"type-xs truncate text-body-and-labels"},Cx=["title"],Sx=["href"],Ex={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},Ax={class:"w-full truncate"},$x={class:"type-xs truncate text-body-and-labels"},Tx={class:"type-sm min-h-6 text-titles-and-attributes w-full"},Ix=Ve({__name:"RansomwareRemediation",setup(t){const{t:e}=de(ye.I18N),s=Wn(),i=de(ye.FALCON_API),r=Dt(()=>X1(s.detection)),o=Dt(()=>Y1(s.detection)),n=Dt(()=>J1(s.detection)),a=l=>i.navigation.onClick(l,"_blank","falcon");return(l,d)=>(ut(),$s(W(pw),{label:W(e)("ransomwareRemediation"),"font-class":"type-md-medium",open:!0},{default:Lh(()=>[H("div",fx,[H("div",gx,[H("div",mx,[H("div",bx,[H("dt",yx,ht(W(e)("tacticAndTechnique")),1),H("dd",vx,[H("a",{onClick:je(a,["stop","prevent"]),onAuxclick:je(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:r.value,target:"_blank",title:W(s).detection?.tactic},ht(W(s).detection?.tactic),41,_x),Hn(" "+ht(W(e)("via"))+" ",1),H("a",{onClick:je(a,["stop","prevent"]),onAuxclick:je(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:o.value,target:"_blank",title:W(s).detection?.technique},ht(W(s).detection?.technique),41,wx)])]),H("div",xx,[H("dt",kx,ht(W(e)("hostname")),1),H("dd",{class:"type-sm min-h-6 text-titles-and-attributes truncate",title:W(s).detection?.device?.hostname},[H("a",{onClick:je(a,["stop","prevent"]),onAuxclick:je(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:n.value,target:"_blank"},ht(W(s).detection?.device?.hostname),41,Sx)],8,Cx)])]),H("div",Ex,[H("div",Ax,[H("dt",$x,ht(W(e)("description")),1),H("dd",Tx,ht(W(e)("createAJiraTicket")),1)])])]),W(s).wizardState==="RansomwareRemediation:DefaultPanel"?(ut(),$s(Yw,{key:0})):De("",!0),W(s).wizardState==="RansomwareRemediation:NotifyIT"?(ut(),$s(px,{key:1})):De("",!0),W(s).wizardState==="RansomwareRemediation:NotifyIR"?(ut(),$s(hx,{key:2})):De("",!0)])]),_:1},8,["label"]))}}),Lx=vs(Ix,[["__scopeId","data-v-3673d71e"]]),Ox={class:"bg-surface-lg flex h-full w-full flex-col"},Mx={key:0,class:"h-full w-full flex-grow p-6 text-center"},Rx=Ve({__name:"AvailableRemediations",setup(t){const e=Wn(),s=Dt(()=>e.hasRansomwareRemediation);return Bl(()=>{e.loadData()}),(i,r)=>(ut(),_t("div",Ox,[W(e).isLoading?(ut(),_t("div",Mx,[...r[0]||(r[0]=[H("sl-spinner",{style:{"font-size":"3rem"}},null,-1)])])):De("",!0),s.value&&!W(e).isLoading?(ut(),$s(Lx,{key:1})):De("",!0)]))}}),Px={class:"main-content w-full"},Dx=Ve({__name:"App",setup(t){return(e,s)=>(ut(),_t("div",Px,[Yt(Rx)]))}}),ya=t=>t&&typeof t=="object"&&!Array.isArray(t),Ja=(t,...e)=>{if(!e.length)return t;const s=e.shift();if(ya(t)&&ya(s))for(const i in s)ya(s[i])?(t[i]||Object.assign(t,{[i]:{}}),Ja(t[i],s[i])):Object.assign(t,{[i]:s[i]});return Ja(t,...e)},fn=Ja({},{en:{account:{t:0,b:{t:2,i:[{t:3}],s:"Account"}},action:{t:0,b:{t:2,i:[{t:3}],s:"Action"}},actionAppDetails:{t:0,b:{t:2,i:[{t:3}],s:"App details"}},actionButtonLabel:{t:0,b:{t:2,i:[{t:3}],s:"Actions"}},actionConfigureJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions"}},actionConfigureRemediationOptions:{t:0,b:{t:2,i:[{t:3}],s:"Configure remediation options"}},actionDataPrivacy:{t:0,b:{t:2,i:[{t:3}],s:"This action sends data out of Falcon to a system or third party that may have different security standards, privacy and data processing practices, or terms and conditions. By configuring this workflow you consent to such data transfer."}},actionNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Actions not configured"}},auditRoute:{t:0,b:{t:2,i:[{t:3}],s:"Audit"}},availableRemediationWorkflows:{t:0,b:{t:2,i:[{t:3}],s:"Available remediation workflows"}},buttonSeeDetections:{t:0,b:{t:2,i:[{t:3}],s:"See detections"}},cancel:{t:0,b:{t:2,i:[{t:3}],s:"Cancel"}},collectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"Collection not found"}},configureActionsInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:"This action does not have a configured workflow or Jira integration. Configure this workflow within the Triage app to use this action."}},configured:{t:0,b:{t:2,i:[{t:3}],s:"Configured"}},configureInApp:{t:0,b:{t:2,i:[{t:3}],s:"Configure in app"}},configureJiraActionsFollowing:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions for the following workflows"}},configureNotifyIRInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IR". Configure this workflow within the Triage app to use this action.'}},configureNotifyITInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IT". Configure this workflow within the Triage app to use this action.'}},configureTheJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure the Jira action for this remediation workflow"}},createAJiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create a Jira ticket to notify IT or IR with specific details of ransomware detections"}},createTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create Jira ticket"}},criticalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Critical"}},customObjectCollectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"collection was not found"}},description:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},detectionForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Enterprise"}},detectionForMobile:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Mobile"}},detectionsTitle:{t:0,b:{t:2,i:[{t:3}],s:"Detections"}},enterOneOrMoreLabels:{t:0,b:{t:2,i:[{t:3}],s:"Enter one or more labels"}},enterSummary:{t:0,b:{t:2,i:[{t:3}],s:"Enter a summary"}},errorConfiguringJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error configuring JIRA issue type"}},errorCreatingJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error creating the Jira issue"}},errorCreatingJiraIssueDataMissing:{t:0,b:{t:2,i:[{t:3}],s:"Jira Issue can't be created. Some information are missing."}},executionDate:{t:0,b:{t:2,i:[{t:3}],s:"Execution date"}},filterLastDay:{t:0,b:{t:2,i:[{t:3}],s:"Last day"}},filterLastHour:{t:0,b:{t:2,i:[{t:3}],s:"Last hour"}},filterLastMonth:{t:0,b:{t:2,i:[{t:3}],s:"Last 30 days"}},filterLastWeek:{t:0,b:{t:2,i:[{t:3}],s:"Last week"}},filterShowSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Show sub-techniques"}},filterShowTrend:{t:0,b:{t:2,i:[{t:3}],s:"Show trends"}},filterSwitchOff:{t:0,b:{t:2,i:[{t:3}],s:"Off"}},filterSwitchOn:{t:0,b:{t:2,i:[{t:3}],s:"On"}},highSeverity:{t:0,b:{t:2,i:[{t:3}],s:"High"}},hostname:{t:0,b:{t:2,i:[{t:3}],s:"Hostname"}},informationalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Informational"}},insertVariable:{t:0,b:{t:2,i:[{t:3}],s:"Insert variable"}},insertVariableTooltip:{t:0,b:{t:2,i:[{t:3}],s:"Insert a variable in the field that will be filled with the corresponding value from the detection"}},issueType:{t:0,b:{t:2,i:[{t:3}],s:"Issue type"}},jiraIssueConfigured:{t:0,b:{t:2,i:[{t:3}],s:"JIRA issue type configured"}},jiraIssueCreated:{t:0,b:{t:2,i:[{t:3,v:"Jira issue "},{t:4,k:"key"},{t:3,v:" has been created."}]}},jiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Jira ticket"}},labels:{t:0,b:{t:2,i:[{t:3}],s:"Labels"}},loading:{t:0,b:{t:2,i:[{t:3}],s:"Loading"}},lowSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Low"}},matrixForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Enterprise"}},matrixForMobile:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Mobile"}},mediumSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Medium"}},mitreAutoRemediationRoute:{t:0,b:{t:2,i:[{t:3}],s:"CrowdStrike Triage for MITRE ATT&CK"}},noJiraAccount:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA integration account was found"}},noJiraIssueType:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA issueType was configured for this project"}},noJiraLabels:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA labels was configured for this project"}},noJiraPriority:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA priority was configured for this project"}},noJiraProject:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA projects was configured in this account"}},noMatchingMitreDetections:{t:0,b:{t:2,i:[{t:3}],s:"No matching MITRE detections"}},notConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Not configured"}},notifyIR:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR"}},notifyIRNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR not configured"}},notifyIT:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT"}},notifyITNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT not configured"}},overviewCreated:{t:0,b:{t:2,i:[{t:3}],s:"Created"}},overviewDescription:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},overviewDetectedSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Detected sub-techniques"}},overviewLastModified:{t:0,b:{t:2,i:[{t:3}],s:"Last modified"}},overviewReadFullDescription:{t:0,b:{t:2,i:[{t:3}],s:"Read full description"}},overviewSubTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique"}},overviewSubTechniqueOf:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique of"}},overviewTitle:{t:0,b:{t:2,i:[{t:3}],s:"Overview"}},priority:{t:0,b:{t:2,i:[{t:3}],s:"Priority"}},projects:{t:0,b:{t:2,i:[{t:3}],s:"Projects"}},ransomwareRemediation:{t:0,b:{t:2,i:[{t:3}],s:"Ransomware remediation"}},remediationHistory:{t:0,b:{t:2,i:[{t:3}],s:"Remediation history"}},requiredValuesMissing:{t:0,b:{t:2,i:[{t:3}],s:"Required values are missing"}},save:{t:0,b:{t:2,i:[{t:3}],s:"Save"}},selectAccount:{t:0,b:{t:2,i:[{t:3}],s:"Select an account"}},selectIssueType:{t:0,b:{t:2,i:[{t:3}],s:"Select an issue type"}},selectPriority:{t:0,b:{t:2,i:[{t:3}],s:"Select a priority"}},selectProject:{t:0,b:{t:2,i:[{t:3}],s:"Select a project"}},subTechniquesTitle:{t:0,b:{t:2,i:[{t:3}],s:"Sub-techniques"}},summary:{t:0,b:{t:2,i:[{t:3}],s:"Summary"}},tacticAndTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Tactic & technique"}},updateYourDetection:{t:0,b:{t:2,i:[{t:3}],s:"Update your detection timeframe or ensure your organization is set up properly for endpoint detections."}},via:{t:0,b:{t:2,i:[{t:3}],s:"via"}},warning:{t:0,b:{t:2,i:[{t:3}],s:"Warning"}},workflowsConfigured:{t:0,b:{t:2,i:[{t:4,k:"configuredActions"},{t:3,v:"/"},{t:4,k:"totalActions"},{t:3,v:" workflows configured"}]}}}});function zx(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function Lr(t,e){const i=ap(Ve({extends:e})),r=document.createElement("span");i.mount(r);const o=r.innerHTML;return i.unmount(),r.remove(),o}class Vx{install(e){e.provide(ye.ALERTS,this)}notify(e,s=1e4){const{variant:i,message:r,afterHide:o,backdrop:n,position:a,margin:l="var(--sl-spacing-medium)"}=e;let d="";switch(i){case"success":d=Lr("success",M_);break;case"danger":d=Lr("danger",xd);break;case"warning":d=Lr("warning",z_);break;case"primary":d=Lr("primary",T_);break;default:d=Lr("danger",xd);break}s=s===!1||s<=0?Number.POSITIVE_INFINITY:s;const h=document.createElement("sl-alert"),u=Object.assign(h,{variant:i,closable:!0,duration:s,innerHTML:`<span slot="icon">${d}</span>${zx(r)}`});let p;return n&&(p=document.createElement("div"),p.classList.add("sl-toast-backdrop"),document.body.append(p)),u.addEventListener("sl-after-hide",()=>{o?.(),p&&p.remove()}),document.body.append(u),u.toast(),a&&(u.classList?.add("static"),setTimeout(()=>{const g=u.base;g.style.width="max-content",g.style.margin="0",g.style.maxWidth=`calc(100% - ${l} * 2)`,g.style.maxHeight=`calc(100% - ${l} * 2)`,a.includes("top")?g.style.top=l:a.includes("middle")?g.style.top="50%":a.includes("bottom")&&(g.style.bottom=l),a.includes("left")?g.style.left=l:a.includes("center")?g.style.left="50%":a.includes("right")&&(g.style.right=l),(a.includes("center")||a.includes("middle"))&&(g.style.transform=`translate(${a.includes("center")?"-50%":"0"}, ${a.includes("middle")?"-50%":"0"})`)},10)),u}}function Nx(){return new Vx}var Fx={};const ge=[];for(let t=0;t<256;++t)ge.push((t+256).toString(16).slice(1));function Bx(t,e=0){return(ge[t[e+0]]+ge[t[e+1]]+ge[t[e+2]]+ge[t[e+3]]+"-"+ge[t[e+4]]+ge[t[e+5]]+"-"+ge[t[e+6]]+ge[t[e+7]]+"-"+ge[t[e+8]]+ge[t[e+9]]+"-"+ge[t[e+10]]+ge[t[e+11]]+ge[t[e+12]]+ge[t[e+13]]+ge[t[e+14]]+ge[t[e+15]]).toLowerCase()}let va;const Ux=new Uint8Array(16);function Hx(){if(!va){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");va=crypto.getRandomValues.bind(crypto)}return va(Ux)}const jx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Sd={randomUUID:jx};function Ed(t,e,s){if(Sd.randomUUID&&!t)return Sd.randomUUID();t=t||{};const i=t.random??t.rng?.()??Hx();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Bx(i)}const Ad="current";function Ut(t){if(!t.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function Wx(t){return!!t?.data?.meta?.messageId}const Kx=5e3,qx=3e4,Gx=5e3;function Yx(t){return t.type==="connect"?Kx:t.type==="api"?qx:t.type==="navigateTo"?Gx:null}class Xx{constructor({onDataUpdate:e,onBroadcast:s,onLivereload:i}={}){rt(this,"onDataUpdate");rt(this,"onBroadcast");rt(this,"onLivereload");rt(this,"pendingMessages",new Map);rt(this,"targetOrigin","*");rt(this,"handleMessageWrapper",e=>this.handleMessage(e));rt(this,"handleMessage",e=>{if(!Wx(e))return;const{message:s}=e.data;if(s.type==="data"){this.onDataUpdate?.(s);return}if(s.type==="broadcast"){this.onBroadcast?.(s);return}if(s.type==="livereload"){this.onLivereload?.(s);return}const{messageId:i}=e.data.meta,r=this.pendingMessages.get(i);if(!r){this.throwError("Received unexpected message");return}this.pendingMessages.delete(i),r(s.payload)});this.onDataUpdate=e,this.onBroadcast=s,this.onLivereload=i,window.addEventListener("message",this.handleMessageWrapper)}destroy(){window.removeEventListener("message",this.handleMessageWrapper)}setOrigin(e){this.targetOrigin=e}sendUnidirectionalMessage(e){const s=Ed(),i={message:e,meta:{messageId:s,version:Ad}};window.parent.postMessage(i,this.targetOrigin)}async postMessage(e){return new Promise((s,i)=>{const r=Ed();let o;const n=Yx(e);n!==null&&(o=setTimeout(()=>{i(new Error(`Waiting for response from foundry host for "${e.type}" message (ID: ${r}) timed out after ${n}ms`))},n)),this.pendingMessages.set(r,l=>{o&&clearTimeout(o),s(l)});const a={message:e,meta:{messageId:r,version:Ad}};window.parent.postMessage(a,this.targetOrigin)})}throwError(e){throw new Error(e)}}function re(t,e,s,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}const ri=new WeakMap,Ai=new WeakMap,js=new WeakMap,gn=Symbol("anyProducer"),$d=Promise.resolve(),mn=Symbol("listenerAdded"),bn=Symbol("listenerRemoved");let yn=!1,_a=!1;const vn=t=>typeof t=="string"||typeof t=="symbol"||typeof t=="number";function Gi(t){if(!vn(t))throw new TypeError("`eventName` must be a string, symbol, or number")}function No(t){if(typeof t!="function")throw new TypeError("listener must be a function")}function Yi(t,e){const s=Ai.get(t);if(s.has(e))return s.get(e)}function Yr(t,e){const s=vn(e)?e:gn,i=js.get(t);if(i.has(s))return i.get(s)}function Jx(t,e,s){const i=js.get(t);if(i.has(e))for(const r of i.get(e))r.enqueue(s);if(i.has(gn)){const r=Promise.all([e,s]);for(const o of i.get(gn))o.enqueue(r)}}function Td(t,e){e=Array.isArray(e)?e:[e];let s=!1,i=()=>{},r=[];const o={enqueue(n){r.push(n),i()},finish(){s=!0,i()}};for(const n of e){let a=Yr(t,n);a||(a=new Set,js.get(t).set(n,a)),a.add(o)}return{async next(){return r?r.length===0?s?(r=void 0,this.next()):(await new Promise(n=>{i=n}),this.next()):{done:!1,value:await r.shift()}:{done:!0}},async return(n){r=void 0;for(const a of e){const l=Yr(t,a);l&&(l.delete(o),l.size===0&&js.get(t).delete(a))}return i(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function Id(t){if(t===void 0)return Ld;if(!Array.isArray(t))throw new TypeError("`methodNames` must be an array of strings");for(const e of t)if(!Ld.includes(e))throw typeof e!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${e} is not Emittery method`);return t}const Qi=t=>t===mn||t===bn;function Fo(t,e,s){if(Qi(e))try{yn=!0,t.emit(e,s)}finally{yn=!1}}class zi{static mixin(e,s){return s=Id(s),i=>{if(typeof i!="function")throw new TypeError("`target` must be function");for(const n of s)if(i.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function r(){return Object.defineProperty(this,e,{enumerable:!1,value:new zi}),this[e]}Object.defineProperty(i.prototype,e,{enumerable:!1,get:r});const o=n=>function(...a){return this[e][n](...a)};for(const n of s)Object.defineProperty(i.prototype,n,{enumerable:!1,value:o(n)});return i}}static get isDebugEnabled(){if(typeof Fx!="object")return _a;const{env:e}=globalThis.process??{env:{}};return e.DEBUG==="emittery"||e.DEBUG==="*"||_a}static set isDebugEnabled(e){_a=e}constructor(e={}){ri.set(this,new Set),Ai.set(this,new Map),js.set(this,new Map),js.get(this).set(gn,new Set),this.debug=e.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(s,i,r,o)=>{try{o=JSON.stringify(o)}catch{o=`Object with the following keys failed to stringify: ${Object.keys(o).join(",")}`}(typeof r=="symbol"||typeof r=="number")&&(r=r.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${s}][${i}] Event Name: ${r}
	data: ${o}`)})}logIfDebugEnabled(e,s,i){(zi.isDebugEnabled||this.debug.enabled)&&this.debug.logger(e,this.debug.name,s,i)}on(e,s,{signal:i}={}){No(s),e=Array.isArray(e)?e:[e];for(const o of e){Gi(o);let n=Yi(this,o);n||(n=new Set,Ai.get(this).set(o,n)),n.add(s),this.logIfDebugEnabled("subscribe",o,void 0),Qi(o)||Fo(this,mn,{eventName:o,listener:s})}const r=()=>{this.off(e,s),i?.removeEventListener("abort",r)};return i?.addEventListener("abort",r,{once:!0}),i?.aborted&&r(),r}off(e,s){No(s),e=Array.isArray(e)?e:[e];for(const i of e){Gi(i);const r=Yi(this,i);r&&(r.delete(s),r.size===0&&Ai.get(this).delete(i)),this.logIfDebugEnabled("unsubscribe",i,void 0),Qi(i)||Fo(this,bn,{eventName:i,listener:s})}}once(e,s){if(s!==void 0&&typeof s!="function")throw new TypeError("predicate must be a function");let i;const r=new Promise(o=>{i=this.on(e,n=>{s&&!s(n)||(i(),o(n))})});return r.off=i,r}events(e){e=Array.isArray(e)?e:[e];for(const s of e)Gi(s);return Td(this,e)}async emit(e,s){if(Gi(e),Qi(e)&&!yn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",e,s),Jx(this,e,s);const i=Yi(this,e)??new Set,r=ri.get(this),o=[...i],n=Qi(e)?[]:[...r];await $d,await Promise.all([...o.map(async a=>{if(i.has(a))return a(s)}),...n.map(async a=>{if(r.has(a))return a(e,s)})])}async emitSerial(e,s){if(Gi(e),Qi(e)&&!yn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",e,s);const i=Yi(this,e)??new Set,r=ri.get(this),o=[...i],n=[...r];await $d;for(const a of o)i.has(a)&&await a(s);for(const a of n)r.has(a)&&await a(e,s)}onAny(e,{signal:s}={}){No(e),this.logIfDebugEnabled("subscribeAny",void 0,void 0),ri.get(this).add(e),Fo(this,mn,{listener:e});const i=()=>{this.offAny(e),s?.removeEventListener("abort",i)};return s?.addEventListener("abort",i,{once:!0}),s?.aborted&&i(),i}anyEvent(){return Td(this)}offAny(e){No(e),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),Fo(this,bn,{listener:e}),ri.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];for(const s of e)if(this.logIfDebugEnabled("clear",s,void 0),vn(s)){const i=Yi(this,s);i&&i.clear();const r=Yr(this,s);if(r){for(const o of r)o.finish();r.clear()}}else{ri.get(this).clear();for(const[i,r]of Ai.get(this).entries())r.clear(),Ai.get(this).delete(i);for(const[i,r]of js.get(this).entries()){for(const o of r)o.finish();r.clear(),js.get(this).delete(i)}}}listenerCount(e){e=Array.isArray(e)?e:[e];let s=0;for(const i of e){if(vn(i)){s+=ri.get(this).size+(Yi(this,i)?.size??0)+(Yr(this,i)?.size??0)+(Yr(this)?.size??0);continue}i!==void 0&&Gi(i),s+=ri.get(this).size;for(const r of Ai.get(this).values())s+=r.size;for(const r of js.get(this).values())s+=r.size}return s}bindMethods(e,s){if(typeof e!="object"||e===null)throw new TypeError("`target` must be an object");s=Id(s);for(const i of s){if(e[i]!==void 0)throw new Error(`The property \`${i}\` already exists on \`target\``);Object.defineProperty(e,i,{enumerable:!1,value:this[i].bind(this)})}}}const Ld=Object.getOwnPropertyNames(zi.prototype).filter(t=>t!=="constructor");Object.defineProperty(zi,"listenerAdded",{value:mn,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(zi,"listenerRemoved",{value:bn,writable:!1,enumerable:!0,configurable:!1});function oe(t){let e,s,i;return e=t,(r,o,n)=>{if(n.value!=null)n.value=Od(n.value,e,s,i);else if(n.get!=null)n.get=Od(n.get,e,s,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const wa=new Map;function Od(t,e,s=0,i){const r=Symbol("__memoized_map__");return function(...o){let n;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[r];if(Array.isArray(i))for(const l of i)wa.has(l)?wa.get(l).push(a):wa.set(l,[a]);if(e||o.length>0||s>0){let l;e===!0?l=o.map(u=>u.toString()).join("!"):e?l=e.apply(this,o):l=o[0];const d=`${l}__timestamp`;let h=!1;if(s>0)if(!a.has(d))h=!0;else{let u=a.get(d);h=Date.now()-u>s}a.has(l)&&!h?n=a.get(l):(n=t.apply(this,o),a.set(l,n),s>0&&a.set(d,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=t.apply(this,o),a.set(l,n))}return n}}class Qx{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV1(e={}){console.warn("This method is deprecated. Use getQueriesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV2(e={}){const s={type:"api",api:"alerts",method:"getQueriesAlertsV2",payload:{params:e}};return this.bridge.postMessage(s)}async patchCombinedAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchCombinedAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchCombinedAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchCombinedAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchEntitiesAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postAggregatesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postAggregatesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postEntitiesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class Zx{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesResourcesCountByManagedByV1(e={}){const s={type:"api",api:"cloudSecurityAssets",method:"getAggregatesResourcesCountByManagedByV1",payload:{params:e}};return this.bridge.postMessage(s)}}class t2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCloudSecurityRegistrationAwsCombinedAccountsV1(e={}){const s={type:"api",api:"cloudregistration",method:"getCloudSecurityRegistrationAwsCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}}class e2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesClustersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesClustersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersGroupByManagedV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersGroupByManagedV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersSensorCoverageV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersSensorCoverageV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesImagesCountByStateV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesImagesCountByStateV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesNodesCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesNodesCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesPodsCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesPodsCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesUnidentifiedContainersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesUnidentifiedContainersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getCombinedClustersV1(e={}){const s={type:"api",api:"containerSecurity",method:"getCombinedClustersV1",payload:{params:e}};return this.bridge.postMessage(s)}}class s2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1(e={}){const s={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1(e={}){const s={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}}class i2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1Collections(e={}){const s={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjects(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:e}};return this.bridge.postMessage(s)}async postV1CollectionsCollectionNameObjects(e,s={}){const i={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putV1CollectionsCollectionNameObjectsObjectKey(e,s={}){const i={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class r2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV1(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDetectsGetV1(e,s={}){const i={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSummariesGetV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class o2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesBucketsV1(e){const s={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesFgaTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesDevicesV1(e){const s={type:"api",api:"devices",method:"getEntitiesDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFgaGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAvailableGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesHiddenV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV1(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFgaGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDevicesTagsV2(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesDevicesV1(e,s){const i={type:"api",api:"devices",method:"patchEntitiesDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDevicesGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesFgaHostsGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedDevicesLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedFgaHostsLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesHiddenActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV1(e,s){const i={type:"api",api:"devices",method:"postEntitiesDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV2(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupActionsV1(e,s){const i={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class n2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionV1(e){const s={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecutionV1(e,s={}){const i={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class a2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesEventsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFirewallFieldsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsDetailsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPlatformsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRulesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesEventsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFirewallFieldsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesNetworkLocationsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPlatformsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPolicyRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesEventsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesPolicyRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRuleGroupsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsMetadataV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsPrecedenceV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesOntologyV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRulesValidateFilepathV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesPoliciesV2(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class l2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(e={}){const s={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesBehaviorsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesIncidentsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postAggregatesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentActionsV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class c2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesSavedSearchesV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesSavedSearchesExecuteV1(e,s={}){const i={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class d2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(e={}){const s={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:e}};return this.bridge.postMessage(s)}}class u2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesConfigsV1(e={}){const s={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesDefinitionsV1(e){const s={type:"api",api:"plugins",method:"getEntitiesDefinitionsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteDraftV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class h2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesRegistriesCountByStateV1(e={}){const s={type:"api",api:"registryAssessment",method:"getAggregatesRegistriesCountByStateV1",payload:{params:e}};return this.bridge.postMessage(s)}}class p2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(e){const s={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesAppCommandV1(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPutFilesV2(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPutFilesV1(e={}){const s={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesAppCommandV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAppSessionsV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class f2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getQueriesUsersV1(e={}){const s={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesUsersGetV1(e,s={}){const i={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class g2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(e){const s={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecutionActionsV1(e,s){const i={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class ce{constructor(e){rt(this,"api");this.api=e}get alerts(){return Ut(this.api),new Qx(this.api.bridge)}get detects(){return Ut(this.api),new r2(this.api.bridge)}get devices(){return Ut(this.api),new o2(this.api.bridge)}get fwmgr(){return Ut(this.api),new a2(this.api.bridge)}get incidents(){return Ut(this.api),new l2(this.api.bridge)}get mitre(){return Ut(this.api),new d2(this.api.bridge)}get plugins(){return Ut(this.api),new u2(this.api.bridge)}get remoteResponse(){return Ut(this.api),new p2(this.api.bridge)}get userManagement(){return Ut(this.api),new f2(this.api.bridge)}get workflows(){return Ut(this.api),new g2(this.api.bridge)}get cloudSecurityAssets(){return Ut(this.api),new Zx(this.api.bridge)}get cloudregistration(){return Ut(this.api),new t2(this.api.bridge)}get containerSecurity(){return Ut(this.api),new e2(this.api.bridge)}get cspmRegistration(){return Ut(this.api),new s2(this.api.bridge)}get customobjects(){return Ut(this.api),new i2(this.api.bridge)}get faasGateway(){return Ut(this.api),new n2(this.api.bridge)}get loggingapi(){return Ut(this.api),new c2(this.api.bridge)}get registryAssessment(){return Ut(this.api),new h2(this.api.bridge)}}re([oe()],ce.prototype,"alerts",null);re([oe()],ce.prototype,"detects",null);re([oe()],ce.prototype,"devices",null);re([oe()],ce.prototype,"fwmgr",null);re([oe()],ce.prototype,"incidents",null);re([oe()],ce.prototype,"mitre",null);re([oe()],ce.prototype,"plugins",null);re([oe()],ce.prototype,"remoteResponse",null);re([oe()],ce.prototype,"userManagement",null);re([oe()],ce.prototype,"workflows",null);re([oe()],ce.prototype,"cloudSecurityAssets",null);re([oe()],ce.prototype,"cloudregistration",null);re([oe()],ce.prototype,"containerSecurity",null);re([oe()],ce.prototype,"cspmRegistration",null);re([oe()],ce.prototype,"customobjects",null);re([oe()],ce.prototype,"faasGateway",null);re([oe()],ce.prototype,"loggingapi",null);re([oe()],ce.prototype,"registryAssessment",null);class m2{constructor(e,s){rt(this,"falcon");rt(this,"definition");this.falcon=e,this.definition=s}async execute({request:e}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:e}]})}}const ss=class ss{constructor(e,s){rt(this,"falcon");rt(this,"definition");rt(this,"pollTimeout",500);rt(this,"intervalId");this.falcon=e,this.definition=s}async execute({path:e,method:s,body:i,params:r}){const o="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...o,payload:{path:e,method:s,body:i,params:r}});return new Promise((a,l)=>{const d=n?.resources?.[0];d?.execution_id?this.pollForResult({resolve:a,reject:l,executionId:d?.execution_id}):l(n?.errors)})}async getExecutionResult(e){return(await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:e}))?.resources?.[0]?.payload}pollForResult({resolve:e,reject:s,executionId:i}){let r=2;this.intervalId=window.setInterval(async()=>{try{const o=await this.getExecutionResult(i);o&&(window.clearInterval(this.intervalId),e(o))}catch(o){r<=0&&(window.clearInterval(this.intervalId),s(o)),r--}},this.pollTimeout)}path(e){const s=new URL(e,"http://localhost"),i=s.pathname,r=[...s.searchParams.entries()].reduce((o,[n,a])=>({...o,[n]:[a]}),{});return{path:i,queryParams:r,get:async(o={})=>this.get({path:i,params:{query:o?.query??r??{},header:o?.header??{}}}),post:async(o,n={})=>this.post({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),patch:async(o,n={})=>this.patch({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),put:async(o,n={})=>this.put({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),delete:async(o,n={})=>this.delete({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o})}}async get({path:e,params:s}){return this.execute({path:e,method:ss.GET,params:s})}async post({path:e,params:s,body:i}){return this.execute({path:e,method:ss.POST,body:i,params:s})}async patch({path:e,params:s,body:i}){return this.execute({path:e,method:ss.PATCH,body:i,params:s})}async put({path:e,params:s,body:i}){return this.execute({path:e,method:ss.PUT,body:i,params:s})}async delete({path:e,params:s,body:i}){return this.execute({path:e,method:ss.DELETE,body:i,params:s})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};rt(ss,"GET","GET"),rt(ss,"POST","POST"),rt(ss,"PATCH","PATCH"),rt(ss,"PUT","PUT"),rt(ss,"DELETE","DELETE");let Qa=ss;class b2{constructor(e,s){rt(this,"falcon");rt(this,"definition");this.falcon=e,this.definition=s}async write(e,s){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:e,collection:this.definition.collection,data:s}})}async read(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:e,collection:this.definition.collection}})}async delete(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:e,collection:this.definition.collection}})}async search({filter:e,offset:s,sort:i,limit:r}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:e,limit:r,offset:s,sort:i,collection:this.definition.collection}})}async list(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"list",collection:this.definition.collection,start:e?.start,end:e?.end,limit:e?.limit}})}}class y2{constructor(e){rt(this,"falcon");this.falcon=e}async write(e,s){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:e,tag:s?.tag,tagSource:s?.tagSource,testData:s?.testData}})}async query(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:e}})}async savedQuery(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:e}})}}const v2=["_self","_blank"];class _2{constructor(e){rt(this,"falcon");this.falcon=e}async navigateTo({path:e,type:s,target:i,metaKey:r,ctrlKey:o,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:e,type:s??"falcon",target:i??"_self",metaKey:r??!1,ctrlKey:o??!1,shiftKey:n??!1}})}async onClick(e,s="_self",i="falcon"){if(!(e instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in e)||!(e.target instanceof HTMLAnchorElement))return;e.preventDefault();const r=e.target.getAttribute("href");s=e.target.getAttribute("target")??s;const o=e.target.dataset?.type??i;if(s===null||!v2.includes(s))throw new Error("Target should be _self or _blank");const n=s;if(r==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:d}=e;await this.navigateTo({path:r,type:o,target:n,metaKey:a,ctrlKey:l,shiftKey:d})}}class w2{constructor(e){rt(this,"bridge");rt(this,"observer");this.bridge=e,this.observer=new ResizeObserver(s=>this.handleResizeEvent(s)),this.observer.observe(document.body)}handleResizeEvent(e){const{height:s}=e[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:s}})}destroy(){this.observer.disconnect()}}class x2{constructor(e){rt(this,"bridge");this.bridge=e}async openModal(e,s,i={}){const r=await this.bridge.postMessage({type:"openModal",payload:{extension:e,title:s,options:i}});if(r instanceof Error)throw r;return r}closeModal(e){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:e})}async uploadFile(e,s){return this.bridge.postMessage({type:"fileUpload",fileUploadType:e,payload:s})}}class Gl{constructor(){rt(this,"isConnected",!1);rt(this,"events",new zi);rt(this,"data");rt(this,"bridge",new Xx({onDataUpdate:e=>this.handleDataUpdate(e),onBroadcast:e=>this.handleBroadcastMessage(e),onLivereload:()=>this.handleLivereloadMessage()}));rt(this,"api",new ce(this));rt(this,"ui",new x2(this.bridge));rt(this,"resizeTracker");rt(this,"cloudFunctions",[]);rt(this,"apiIntegrations",[]);rt(this,"collections",[])}async connect(){const e=await this.bridge.postMessage({type:"connect"});if(e!==void 0){const{data:s,origin:i}=e;this.bridge.setOrigin(i),this.data=s,this.updateTheme(s?.theme),this.isConnected=!0}return this.resizeTracker=new w2(this.bridge),e}get appId(){return this.data?.app.id}sendBroadcast(e){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:e})}handleDataUpdate(e){this.data=e.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(e){this.events.emit("broadcast",e.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(e){if(!e)return;const s=e==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(e),document.documentElement.classList.remove(s)}cloudFunction(e){Ut(this);const s=new Qa(this,e);return this.cloudFunctions.push(s),s}apiIntegration({definitionId:e,operationId:s}){if(Ut(this),!this.data)throw Error("Data from console is missing");const i=new m2(this,{operationId:s,definitionId:e});return this.apiIntegrations.push(i),i}collection({collection:e}){Ut(this);const s=new b2(this,{collection:e});return this.collections.push(s),s}get navigation(){return Ut(this),new _2(this)}get logscale(){return Ut(this),new y2(this)}destroy(){this.cloudFunctions.forEach(e=>e.destroy()),this.resizeTracker?.destroy(),this.bridge.destroy()}}re([oe()],Gl.prototype,"navigation",null);re([oe()],Gl.prototype,"logscale",null);const k2={};class C2{constructor(){this.falcon=void 0}install(e){this.falcon=new Gl,e.provide(ye.FALCON_API,this.falcon),e.provide(ye.FALCON_API_GET_ORIGINS,()=>this.getOrigin()),e.provide(ye.FALCON_API_GET_APP_ID,()=>this.getAppId())}async connect(){try{await this.falcon?.connect()}catch(e){console.error(e)}}getOrigin(){const{targetOrigin:e}=this.falcon?.bridge;return e||self.location.origin}getAppId(){return this.falcon?.data?.app?.id??k2.app_id}get data(){return{cid:String(this.falcon?.data?.cid??""),dateFormat:"MMM. D, YYYY",locale:"en-us",theme:"theme-dark",timezone:"UTC",...this.falcon?.data}}}function S2(){return new C2}/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function E2(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const _n=typeof window<"u",vi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),A2=(t,e,s)=>$2({l:t,k:e,s}),$2=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),se=t=>typeof t=="number"&&isFinite(t),T2=t=>Xl(t)==="[object Date]",wn=t=>Xl(t)==="[object RegExp]",Kn=t=>wt(t)&&Object.keys(t).length===0,ue=Object.assign,I2=Object.create,Mt=(t=null)=>I2(t);let Md;const Yl=()=>Md||(Md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Mt());function Rd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Pd(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function L2(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,o)=>`${r}="${Pd(o)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,o)=>`${r}='${Pd(o)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const O2=Object.prototype.hasOwnProperty;function ls(t,e){return O2.call(t,e)}const Zt=Array.isArray,Ht=t=>typeof t=="function",Y=t=>typeof t=="string",jt=t=>typeof t=="boolean",At=t=>t!==null&&typeof t=="object",M2=t=>At(t)&&Ht(t.then)&&Ht(t.catch),wp=Object.prototype.toString,Xl=t=>wp.call(t),wt=t=>Xl(t)==="[object Object]",R2=t=>t==null?"":Zt(t)||wt(t)&&t.toString===wp?JSON.stringify(t,null,2):String(t);function Jl(t,e=""){return t.reduce((s,i,r)=>r===0?s+i:s+e+i,"")}const Bo=t=>!At(t)||Zt(t);function Xo(t,e){if(Bo(t)||Bo(e))throw new Error("Invalid value");const s=[{src:t,des:e}];for(;s.length;){const{src:i,des:r}=s.pop();Object.keys(i).forEach(o=>{o!=="__proto__"&&(At(i[o])&&!At(r[o])&&(r[o]=Array.isArray(i[o])?[]:Mt()),Bo(r[o])||Bo(i[o])?r[o]=i[o]:s.push({src:i[o],des:r[o]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function P2(t,e,s){return{line:t,column:e,offset:s}}function Za(t,e,s){return{start:t,end:e}}const $t={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},D2=17;function qn(t,e,s={}){const{domain:i,messages:r,args:o}=s,n=t,a=new SyntaxError(String(n));return a.code=t,e&&(a.location=e),a.domain=i,a}function z2(t){throw t}const ks=" ",V2="\r",xe=`
`,N2="\u2028",F2="\u2029";function B2(t){const e=t;let s=0,i=1,r=1,o=0;const n=T=>e[T]===V2&&e[T+1]===xe,a=T=>e[T]===xe,l=T=>e[T]===F2,d=T=>e[T]===N2,h=T=>n(T)||a(T)||l(T)||d(T),u=()=>s,p=()=>i,g=()=>r,v=()=>o,k=T=>n(T)||l(T)||d(T)?xe:e[T],L=()=>k(s),_=()=>k(s+o);function w(){return o=0,h(s)&&(i++,r=0),n(s)&&s++,s++,r++,e[s]}function A(){return n(s+o)&&o++,o++,e[s+o]}function b(){s=0,i=1,r=1,o=0}function C(T=0){o=T}function O(){const T=s+o;for(;T!==s;)w();o=0}return{index:u,line:p,column:g,peekOffset:v,charAt:k,currentChar:L,currentPeek:_,next:w,peek:A,reset:b,resetPeek:C,skipToPeek:O}}const Bs=void 0,U2=".",Dd="'",H2="tokenizer";function j2(t,e={}){const s=e.location!==!1,i=B2(t),r=()=>i.index(),o=()=>P2(i.line(),i.column(),i.index()),n=o(),a=r(),l={currentType:13,offset:a,startLoc:n,endLoc:n,lastType:13,lastOffset:a,lastStartLoc:n,lastEndLoc:n,braceNest:0,inLinked:!1,text:""},d=()=>l,{onError:h}=e;function u(m,y,E,...I){const q=d();if(y.column+=E,y.offset+=E,h){const z=s?Za(q.startLoc,y):null,$=qn(m,z,{domain:H2,args:I});h($)}}function p(m,y,E){m.endLoc=o(),m.currentType=y;const I={type:y};return s&&(I.loc=Za(m.startLoc,m.endLoc)),E!=null&&(I.value=E),I}const g=m=>p(m,13);function v(m,y){return m.currentChar()===y?(m.next(),y):(u($t.EXPECTED_TOKEN,o(),0,y),"")}function k(m){let y="";for(;m.currentPeek()===ks||m.currentPeek()===xe;)y+=m.currentPeek(),m.peek();return y}function L(m){const y=k(m);return m.skipToPeek(),y}function _(m){if(m===Bs)return!1;const y=m.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function w(m){if(m===Bs)return!1;const y=m.charCodeAt(0);return y>=48&&y<=57}function A(m,y){const{currentType:E}=y;if(E!==2)return!1;k(m);const I=_(m.currentPeek());return m.resetPeek(),I}function b(m,y){const{currentType:E}=y;if(E!==2)return!1;k(m);const I=m.currentPeek()==="-"?m.peek():m.currentPeek(),q=w(I);return m.resetPeek(),q}function C(m,y){const{currentType:E}=y;if(E!==2)return!1;k(m);const I=m.currentPeek()===Dd;return m.resetPeek(),I}function O(m,y){const{currentType:E}=y;if(E!==7)return!1;k(m);const I=m.currentPeek()===".";return m.resetPeek(),I}function T(m,y){const{currentType:E}=y;if(E!==8)return!1;k(m);const I=_(m.currentPeek());return m.resetPeek(),I}function B(m,y){const{currentType:E}=y;if(!(E===7||E===11))return!1;k(m);const I=m.currentPeek()===":";return m.resetPeek(),I}function P(m,y){const{currentType:E}=y;if(E!==9)return!1;const I=()=>{const z=m.currentPeek();return z==="{"?_(m.peek()):z==="@"||z==="|"||z===":"||z==="."||z===ks||!z?!1:z===xe?(m.peek(),I()):lt(m,!1)},q=I();return m.resetPeek(),q}function D(m){k(m);const y=m.currentPeek()==="|";return m.resetPeek(),y}function lt(m,y=!0){const E=(q=!1,z="")=>{const $=m.currentPeek();return $==="{"||$==="@"||!$?q:$==="|"?!(z===ks||z===xe):$===ks?(m.peek(),E(!0,ks)):$===xe?(m.peek(),E(!0,xe)):!0},I=E();return y&&m.resetPeek(),I}function et(m,y){const E=m.currentChar();return E===Bs?Bs:y(E)?(m.next(),E):null}function gt(m){const y=m.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function vt(m){return et(m,gt)}function kt(m){const y=m.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function tt(m){return et(m,kt)}function G(m){const y=m.charCodeAt(0);return y>=48&&y<=57}function at(m){return et(m,G)}function X(m){const y=m.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function Ct(m){return et(m,X)}function Ze(m){let y="",E="";for(;y=at(m);)E+=y;return E}function Re(m){let y="";for(;;){const E=m.currentChar();if(E==="{"||E==="}"||E==="@"||E==="|"||!E)break;if(E===ks||E===xe)if(lt(m))y+=E,m.next();else{if(D(m))break;y+=E,m.next()}else y+=E,m.next()}return y}function ji(m){L(m);let y="",E="";for(;y=tt(m);)E+=y;const I=m.currentChar();if(I&&I!=="}"&&I!==Bs&&I!==ks&&I!==xe&&I!=="　"){const q=_s(m);return u($t.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,E+q),E+q}return m.currentChar()===Bs&&u($t.UNTERMINATED_CLOSING_BRACE,o(),0),E}function _r(m){L(m);let y="";return m.currentChar()==="-"?(m.next(),y+=`-${Ze(m)}`):y+=Ze(m),m.currentChar()===Bs&&u($t.UNTERMINATED_CLOSING_BRACE,o(),0),y}function Eo(m){return m!==Dd&&m!==xe}function Ns(m){L(m),v(m,"'");let y="",E="";for(;y=et(m,Eo);)y==="\\"?E+=si(m):E+=y;const I=m.currentChar();return I===xe||I===Bs?(u($t.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,o(),0),I===xe&&(m.next(),v(m,"'")),E):(v(m,"'"),E)}function si(m){const y=m.currentChar();switch(y){case"\\":case"'":return m.next(),`\\${y}`;case"u":return ii(m,y,4);case"U":return ii(m,y,6);default:return u($t.UNKNOWN_ESCAPE_SEQUENCE,o(),0,y),""}}function ii(m,y,E){v(m,y);let I="";for(let q=0;q<E;q++){const z=Ct(m);if(!z){u($t.INVALID_UNICODE_ESCAPE_SEQUENCE,o(),0,`\\${y}${I}${m.currentChar()}`);break}I+=z}return`\\${y}${I}`}function Wi(m){return m!=="{"&&m!=="}"&&m!==ks&&m!==xe}function _s(m){L(m);let y="",E="";for(;y=et(m,Wi);)E+=y;return E}function Ao(m){let y="",E="";for(;y=vt(m);)E+=y;return E}function x(m){const y=E=>{const I=m.currentChar();return I==="{"||I==="@"||I==="|"||I==="("||I===")"||!I||I===ks?E:(E+=I,m.next(),y(E))};return y("")}function S(m){L(m);const y=v(m,"|");return L(m),y}function R(m,y){let E=null;switch(m.currentChar()){case"{":return y.braceNest>=1&&u($t.NOT_ALLOW_NEST_PLACEHOLDER,o(),0),m.next(),E=p(y,2,"{"),L(m),y.braceNest++,E;case"}":return y.braceNest>0&&y.currentType===2&&u($t.EMPTY_PLACEHOLDER,o(),0),m.next(),E=p(y,3,"}"),y.braceNest--,y.braceNest>0&&L(m),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),E;case"@":return y.braceNest>0&&u($t.UNTERMINATED_CLOSING_BRACE,o(),0),E=U(m,y)||g(y),y.braceNest=0,E;default:{let q=!0,z=!0,$=!0;if(D(m))return y.braceNest>0&&u($t.UNTERMINATED_CLOSING_BRACE,o(),0),E=p(y,1,S(m)),y.braceNest=0,y.inLinked=!1,E;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return u($t.UNTERMINATED_CLOSING_BRACE,o(),0),y.braceNest=0,V(m,y);if(q=A(m,y))return E=p(y,4,ji(m)),L(m),E;if(z=b(m,y))return E=p(y,5,_r(m)),L(m),E;if($=C(m,y))return E=p(y,6,Ns(m)),L(m),E;if(!q&&!z&&!$)return E=p(y,12,_s(m)),u($t.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,E.value),L(m),E;break}}return E}function U(m,y){const{currentType:E}=y;let I=null;const q=m.currentChar();switch((E===7||E===8||E===11||E===9)&&(q===xe||q===ks)&&u($t.INVALID_LINKED_FORMAT,o(),0),q){case"@":return m.next(),I=p(y,7,"@"),y.inLinked=!0,I;case".":return L(m),m.next(),p(y,8,".");case":":return L(m),m.next(),p(y,9,":");default:return D(m)?(I=p(y,1,S(m)),y.braceNest=0,y.inLinked=!1,I):O(m,y)||B(m,y)?(L(m),U(m,y)):T(m,y)?(L(m),p(y,11,Ao(m))):P(m,y)?(L(m),q==="{"?R(m,y)||I:p(y,10,x(m))):(E===7&&u($t.INVALID_LINKED_FORMAT,o(),0),y.braceNest=0,y.inLinked=!1,V(m,y))}}function V(m,y){let E={type:13};if(y.braceNest>0)return R(m,y)||g(y);if(y.inLinked)return U(m,y)||g(y);switch(m.currentChar()){case"{":return R(m,y)||g(y);case"}":return u($t.UNBALANCED_CLOSING_BRACE,o(),0),m.next(),p(y,3,"}");case"@":return U(m,y)||g(y);default:{if(D(m))return E=p(y,1,S(m)),y.braceNest=0,y.inLinked=!1,E;if(lt(m))return p(y,0,Re(m));break}}return E}function F(){const{currentType:m,offset:y,startLoc:E,endLoc:I}=l;return l.lastType=m,l.lastOffset=y,l.lastStartLoc=E,l.lastEndLoc=I,l.offset=r(),l.startLoc=o(),i.currentChar()===Bs?p(l,13):V(i,l)}return{nextToken:F,currentOffset:r,currentPosition:o,context:d}}const W2="parser",K2=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function q2(t,e,s){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||s,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function G2(t={}){const e=t.location!==!1,{onError:s}=t;function i(_,w,A,b,...C){const O=_.currentPosition();if(O.offset+=b,O.column+=b,s){const T=e?Za(A,O):null,B=qn(w,T,{domain:W2,args:C});s(B)}}function r(_,w,A){const b={type:_};return e&&(b.start=w,b.end=w,b.loc={start:A,end:A}),b}function o(_,w,A,b){e&&(_.end=w,_.loc&&(_.loc.end=A))}function n(_,w){const A=_.context(),b=r(3,A.offset,A.startLoc);return b.value=w,o(b,_.currentOffset(),_.currentPosition()),b}function a(_,w){const A=_.context(),{lastOffset:b,lastStartLoc:C}=A,O=r(5,b,C);return O.index=parseInt(w,10),_.nextToken(),o(O,_.currentOffset(),_.currentPosition()),O}function l(_,w){const A=_.context(),{lastOffset:b,lastStartLoc:C}=A,O=r(4,b,C);return O.key=w,_.nextToken(),o(O,_.currentOffset(),_.currentPosition()),O}function d(_,w){const A=_.context(),{lastOffset:b,lastStartLoc:C}=A,O=r(9,b,C);return O.value=w.replace(K2,q2),_.nextToken(),o(O,_.currentOffset(),_.currentPosition()),O}function h(_){const w=_.nextToken(),A=_.context(),{lastOffset:b,lastStartLoc:C}=A,O=r(8,b,C);return w.type!==11?(i(_,$t.UNEXPECTED_EMPTY_LINKED_MODIFIER,A.lastStartLoc,0),O.value="",o(O,b,C),{nextConsumeToken:w,node:O}):(w.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Cs(w)),O.value=w.value||"",o(O,_.currentOffset(),_.currentPosition()),{node:O})}function u(_,w){const A=_.context(),b=r(7,A.offset,A.startLoc);return b.value=w,o(b,_.currentOffset(),_.currentPosition()),b}function p(_){const w=_.context(),A=r(6,w.offset,w.startLoc);let b=_.nextToken();if(b.type===8){const C=h(_);A.modifier=C.node,b=C.nextConsumeToken||_.nextToken()}switch(b.type!==9&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(b)),b=_.nextToken(),b.type===2&&(b=_.nextToken()),b.type){case 10:b.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(b)),A.key=u(_,b.value||"");break;case 4:b.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(b)),A.key=l(_,b.value||"");break;case 5:b.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(b)),A.key=a(_,b.value||"");break;case 6:b.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(b)),A.key=d(_,b.value||"");break;default:{i(_,$t.UNEXPECTED_EMPTY_LINKED_KEY,w.lastStartLoc,0);const C=_.context(),O=r(7,C.offset,C.startLoc);return O.value="",o(O,C.offset,C.startLoc),A.key=O,o(A,C.offset,C.startLoc),{nextConsumeToken:b,node:A}}}return o(A,_.currentOffset(),_.currentPosition()),{node:A}}function g(_){const w=_.context(),A=w.currentType===1?_.currentOffset():w.offset,b=w.currentType===1?w.endLoc:w.startLoc,C=r(2,A,b);C.items=[];let O=null;do{const P=O||_.nextToken();switch(O=null,P.type){case 0:P.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(P)),C.items.push(n(_,P.value||""));break;case 5:P.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(P)),C.items.push(a(_,P.value||""));break;case 4:P.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(P)),C.items.push(l(_,P.value||""));break;case 6:P.value==null&&i(_,$t.UNEXPECTED_LEXICAL_ANALYSIS,w.lastStartLoc,0,Cs(P)),C.items.push(d(_,P.value||""));break;case 7:{const D=p(_);C.items.push(D.node),O=D.nextConsumeToken||null;break}}}while(w.currentType!==13&&w.currentType!==1);const T=w.currentType===1?w.lastOffset:_.currentOffset(),B=w.currentType===1?w.lastEndLoc:_.currentPosition();return o(C,T,B),C}function v(_,w,A,b){const C=_.context();let O=b.items.length===0;const T=r(1,w,A);T.cases=[],T.cases.push(b);do{const B=g(_);O||(O=B.items.length===0),T.cases.push(B)}while(C.currentType!==13);return O&&i(_,$t.MUST_HAVE_MESSAGES_IN_PLURAL,A,0),o(T,_.currentOffset(),_.currentPosition()),T}function k(_){const w=_.context(),{offset:A,startLoc:b}=w,C=g(_);return w.currentType===13?C:v(_,A,b,C)}function L(_){const w=j2(_,ue({},t)),A=w.context(),b=r(0,A.offset,A.startLoc);return e&&b.loc&&(b.loc.source=_),b.body=k(w),t.onCacheKey&&(b.cacheKey=t.onCacheKey(_)),A.currentType!==13&&i(w,$t.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,_[A.offset]||""),o(b,w.currentOffset(),w.currentPosition()),b}return{parse:L}}function Cs(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Y2(t,e={}){const s={ast:t,helpers:new Set};return{context:()=>s,helper:o=>(s.helpers.add(o),o)}}function zd(t,e){for(let s=0;s<t.length;s++)Ql(t[s],e)}function Ql(t,e){switch(t.type){case 1:zd(t.cases,e),e.helper("plural");break;case 2:zd(t.items,e);break;case 6:{Ql(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function X2(t,e={}){const s=Y2(t);s.helper("normalize"),t.body&&Ql(t.body,s);const i=s.context();t.helpers=Array.from(i.helpers)}function J2(t){const e=t.body;return e.type===2?Vd(e):e.cases.forEach(s=>Vd(s)),t}function Vd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let s=0;s<t.items.length;s++){const i=t.items[s];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Jl(e);for(let s=0;s<t.items.length;s++){const i=t.items[s];(i.type===3||i.type===9)&&delete i.value}}}}function Zi(t){switch(t.t=t.type,t.type){case 0:{const e=t;Zi(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,s=e.cases;for(let i=0;i<s.length;i++)Zi(s[i]);e.c=s,delete e.cases;break}case 2:{const e=t,s=e.items;for(let i=0;i<s.length;i++)Zi(s[i]);e.i=s,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Zi(e.key),e.k=e.key,delete e.key,e.modifier&&(Zi(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Q2(t,e){const{filename:s,breakLineCode:i,needIndent:r}=e,o=e.location!==!1,n={filename:s,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};o&&t.loc&&(n.source=t.loc.source);const a=()=>n;function l(k,L){n.code+=k}function d(k,L=!0){const _=L?i:"";l(r?_+"  ".repeat(k):_)}function h(k=!0){const L=++n.indentLevel;k&&d(L)}function u(k=!0){const L=--n.indentLevel;k&&d(L)}function p(){d(n.indentLevel)}return{context:a,push:l,indent:h,deindent:u,newline:p,helper:k=>`_${k}`,needIndent:()=>n.needIndent}}function Z2(t,e){const{helper:s}=t;t.push(`${s("linked")}(`),hr(t,e.key),e.modifier?(t.push(", "),hr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function tk(t,e){const{helper:s,needIndent:i}=t;t.push(`${s("normalize")}([`),t.indent(i());const r=e.items.length;for(let o=0;o<r&&(hr(t,e.items[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}function ek(t,e){const{helper:s,needIndent:i}=t;if(e.cases.length>1){t.push(`${s("plural")}([`),t.indent(i());const r=e.cases.length;for(let o=0;o<r&&(hr(t,e.cases[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}}function sk(t,e){e.body?hr(t,e.body):t.push("null")}function hr(t,e){const{helper:s}=t;switch(e.type){case 0:sk(t,e);break;case 1:ek(t,e);break;case 2:tk(t,e);break;case 6:Z2(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${s("interpolate")}(${s("list")}(${e.index}))`,e);break;case 4:t.push(`${s("interpolate")}(${s("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const ik=(t,e={})=>{const s=Y(e.mode)?e.mode:"normal",i=Y(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:s==="arrow"?";":`
`,o=e.needIndent?e.needIndent:s!=="arrow",n=t.helpers||[],a=Q2(t,{filename:i,breakLineCode:r,needIndent:o});a.push(s==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(o),n.length>0&&(a.push(`const { ${Jl(n.map(h=>`${h}: _${h}`),", ")} } = ctx`),a.newline()),a.push("return "),hr(a,t),a.deindent(o),a.push("}"),delete t.helpers;const{code:l,map:d}=a.context();return{ast:t,code:l,map:d?d.toJSON():void 0}};function rk(t,e={}){const s=ue({},e),i=!!s.jit,r=!!s.minify,o=s.optimize==null?!0:s.optimize,a=G2(s).parse(t);return i?(o&&J2(a),r&&Zi(a),{ast:a,code:""}):(X2(a,s),ik(a,s))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function ok(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Yl().__INTLIFY_PROD_DEVTOOLS__=!1)}function Ls(t){return At(t)&&Zl(t)===0&&(ls(t,"b")||ls(t,"body"))}const xp=["b","body"];function nk(t){return _i(t,xp)}const kp=["c","cases"];function ak(t){return _i(t,kp,[])}const Cp=["s","static"];function lk(t){return _i(t,Cp)}const Sp=["i","items"];function ck(t){return _i(t,Sp,[])}const Ep=["t","type"];function Zl(t){return _i(t,Ep)}const Ap=["v","value"];function Uo(t,e){const s=_i(t,Ap);if(s!=null)return s;throw no(e)}const $p=["m","modifier"];function dk(t){return _i(t,$p)}const Tp=["k","key"];function uk(t){const e=_i(t,Tp);if(e)return e;throw no(6)}function _i(t,e,s){for(let i=0;i<e.length;i++){const r=e[i];if(ls(t,r)&&t[r]!=null)return t[r]}return s}const Ip=[...xp,...kp,...Cp,...Sp,...Tp,...$p,...Ap,...Ep];function no(t){return new Error(`unhandled node type: ${t}`)}function xa(t){return s=>hk(s,t)}function hk(t,e){const s=nk(e);if(s==null)throw no(0);if(Zl(s)===1){const o=ak(s);return t.plural(o.reduce((n,a)=>[...n,Nd(t,a)],[]))}else return Nd(t,s)}function Nd(t,e){const s=lk(e);if(s!=null)return t.type==="text"?s:t.normalize([s]);{const i=ck(e).reduce((r,o)=>[...r,tl(t,o)],[]);return t.normalize(i)}}function tl(t,e){const s=Zl(e);switch(s){case 3:return Uo(e,s);case 9:return Uo(e,s);case 4:{const i=e;if(ls(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(ls(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw no(s)}case 5:{const i=e;if(ls(i,"i")&&se(i.i))return t.interpolate(t.list(i.i));if(ls(i,"index")&&se(i.index))return t.interpolate(t.list(i.index));throw no(s)}case 6:{const i=e,r=dk(i),o=uk(i);return t.linked(tl(t,o),r?tl(t,r):void 0,t.type)}case 7:return Uo(e,s);case 8:return Uo(e,s);default:throw new Error(`unhandled node on format message part: ${s}`)}}const pk=t=>t;let Ho=Mt();function fk(t,e={}){let s=!1;const i=e.onError||z2;return e.onError=r=>{s=!0,i(r)},{...rk(t,e),detectError:s}}function gk(t,e){if(Y(t)){jt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||pk)(t),r=Ho[i];if(r)return r;const{ast:o,detectError:n}=fk(t,{...e,location:!1,jit:!0}),a=xa(o);return n?a:Ho[i]=a}else{const s=t.cacheKey;if(s){const i=Ho[s];return i||(Ho[s]=xa(t))}else return xa(t)}}let ao=null;function mk(t){ao=t}function bk(t,e,s){ao&&ao.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:s})}const yk=vk("function:translate");function vk(t){return e=>ao&&ao.emit(t,e)}const Ks={INVALID_ARGUMENT:D2,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},_k=24;function qs(t){return qn(t,null,void 0)}function tc(t,e){return e.locale!=null?Fd(e.locale):Fd(t.locale)}let ka;function Fd(t){if(Y(t))return t;if(Ht(t)){if(t.resolvedOnce&&ka!=null)return ka;if(t.constructor.name==="Function"){const e=t();if(M2(e))throw qs(Ks.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ka=e}else throw qs(Ks.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw qs(Ks.NOT_SUPPORT_LOCALE_TYPE)}function wk(t,e,s){return[...new Set([s,...Zt(e)?e:At(e)?Object.keys(e):Y(e)?[e]:[s]])]}function Lp(t,e,s){const i=Y(s)?s:xn,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let o=r.__localeChainCache.get(i);if(!o){o=[];let n=[s];for(;Zt(n);)n=Bd(o,n,e);const a=Zt(e)||!wt(e)?e:e.default?e.default:null;n=Y(a)?[a]:a,Zt(n)&&Bd(o,n,!1),r.__localeChainCache.set(i,o)}return o}function Bd(t,e,s){let i=!0;for(let r=0;r<e.length&&jt(i);r++){const o=e[r];Y(o)&&(i=xk(t,e[r],s))}return i}function xk(t,e,s){let i;const r=e.split("-");do{const o=r.join("-");i=kk(t,o,s),r.splice(-1,1)}while(r.length&&i===!0);return i}function kk(t,e,s){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Zt(s)||wt(s))&&s[r]&&(i=s[r])}return i}const wi=[];wi[0]={w:[0],i:[3,0],"[":[4],o:[7]};wi[1]={w:[1],".":[2],"[":[4],o:[7]};wi[2]={w:[2],i:[3,0],0:[3,0]};wi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};wi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};wi[5]={"'":[4,0],o:8,l:[5,0]};wi[6]={'"':[4,0],o:8,l:[6,0]};const Ck=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Sk(t){return Ck.test(t)}function Ek(t){const e=t.charCodeAt(0),s=t.charCodeAt(t.length-1);return e===s&&(e===34||e===39)?t.slice(1,-1):t}function Ak(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function $k(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Sk(e)?Ek(e):"*"+e}function Tk(t){const e=[];let s=-1,i=0,r=0,o,n,a,l,d,h,u;const p=[];p[0]=()=>{n===void 0?n=a:n+=a},p[1]=()=>{n!==void 0&&(e.push(n),n=void 0)},p[2]=()=>{p[0](),r++},p[3]=()=>{if(r>0)r--,i=4,p[0]();else{if(r=0,n===void 0||(n=$k(n),n===!1))return!1;p[1]()}};function g(){const v=t[s+1];if(i===5&&v==="'"||i===6&&v==='"')return s++,a="\\"+v,p[0](),!0}for(;i!==null;)if(s++,o=t[s],!(o==="\\"&&g())){if(l=Ak(o),u=wi[i],d=u[l]||u.l||8,d===8||(i=d[0],d[1]!==void 0&&(h=p[d[1]],h&&(a=o,h()===!1))))return;if(i===7)return e}}const Ud=new Map;function Ik(t,e){return At(t)?t[e]:null}function Lk(t,e){if(!At(t))return null;let s=Ud.get(e);if(s||(s=Tk(e),s&&Ud.set(e,s)),!s)return null;const i=s.length;let r=t,o=0;for(;o<i;){const n=s[o];if(Ip.includes(n)&&Ls(r))return null;const a=r[n];if(a===void 0||Ht(r))return null;r=a,o++}return r}const Ok="11.1.12",Gn=-1,xn="en-US",Hd="",jd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Mk(){return{upper:(t,e)=>e==="text"&&Y(t)?t.toUpperCase():e==="vnode"&&At(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Y(t)?t.toLowerCase():e==="vnode"&&At(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Y(t)?jd(t):e==="vnode"&&At(t)&&"__v_isVNode"in t?jd(t.children):t}}let Op;function Rk(t){Op=t}let Mp;function Pk(t){Mp=t}let Rp;function Dk(t){Rp=t}let Pp=null;const zk=t=>{Pp=t},Vk=()=>Pp;let Dp=null;const Wd=t=>{Dp=t},Nk=()=>Dp;let Kd=0;function Fk(t={}){const e=Ht(t.onWarn)?t.onWarn:E2,s=Y(t.version)?t.version:Ok,i=Y(t.locale)||Ht(t.locale)?t.locale:xn,r=Ht(i)?xn:i,o=Zt(t.fallbackLocale)||wt(t.fallbackLocale)||Y(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,n=wt(t.messages)?t.messages:Ca(r),a=wt(t.datetimeFormats)?t.datetimeFormats:Ca(r),l=wt(t.numberFormats)?t.numberFormats:Ca(r),d=ue(Mt(),t.modifiers,Mk()),h=t.pluralRules||Mt(),u=Ht(t.missing)?t.missing:null,p=jt(t.missingWarn)||wn(t.missingWarn)?t.missingWarn:!0,g=jt(t.fallbackWarn)||wn(t.fallbackWarn)?t.fallbackWarn:!0,v=!!t.fallbackFormat,k=!!t.unresolving,L=Ht(t.postTranslation)?t.postTranslation:null,_=wt(t.processor)?t.processor:null,w=jt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,A=!!t.escapeParameter,b=Ht(t.messageCompiler)?t.messageCompiler:Op,C=Ht(t.messageResolver)?t.messageResolver:Mp||Ik,O=Ht(t.localeFallbacker)?t.localeFallbacker:Rp||wk,T=At(t.fallbackContext)?t.fallbackContext:void 0,B=t,P=At(B.__datetimeFormatters)?B.__datetimeFormatters:new Map,D=At(B.__numberFormatters)?B.__numberFormatters:new Map,lt=At(B.__meta)?B.__meta:{};Kd++;const et={version:s,cid:Kd,locale:i,fallbackLocale:o,messages:n,modifiers:d,pluralRules:h,missing:u,missingWarn:p,fallbackWarn:g,fallbackFormat:v,unresolving:k,postTranslation:L,processor:_,warnHtmlMessage:w,escapeParameter:A,messageCompiler:b,messageResolver:C,localeFallbacker:O,fallbackContext:T,onWarn:e,__meta:lt};return et.datetimeFormats=a,et.numberFormats=l,et.__datetimeFormatters=P,et.__numberFormatters=D,__INTLIFY_PROD_DEVTOOLS__&&bk(et,s,lt),et}const Ca=t=>({[t]:Mt()});function ec(t,e,s,i,r){const{missing:o,onWarn:n}=t;if(o!==null){const a=o(t,s,e,r);return Y(a)?a:e}else return e}function Or(t,e,s){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,s,e)}function Bk(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Uk(t,e){const s=e.indexOf(t);if(s===-1)return!1;for(let i=s+1;i<e.length;i++)if(Bk(t,e[i]))return!0;return!1}function qd(t,...e){const{datetimeFormats:s,unresolving:i,fallbackLocale:r,onWarn:o,localeFallbacker:n}=t,{__datetimeFormatters:a}=t,[l,d,h,u]=el(...e),p=jt(h.missingWarn)?h.missingWarn:t.missingWarn;jt(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const g=!!h.part,v=tc(t,h),k=n(t,r,v);if(!Y(l)||l==="")return new Intl.DateTimeFormat(v,u).format(d);let L={},_,w=null;const A="datetime format";for(let O=0;O<k.length&&(_=k[O],L=s[_]||{},w=L[l],!wt(w));O++)ec(t,l,_,p,A);if(!wt(w)||!Y(_))return i?Gn:l;let b=`${_}__${l}`;Kn(u)||(b=`${b}__${JSON.stringify(u)}`);let C=a.get(b);return C||(C=new Intl.DateTimeFormat(_,ue({},w,u)),a.set(b,C)),g?C.formatToParts(d):C.format(d)}const zp=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function el(...t){const[e,s,i,r]=t,o=Mt();let n=Mt(),a;if(Y(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw qs(Ks.INVALID_ISO_DATE_ARGUMENT);const d=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(d);try{a.toISOString()}catch{throw qs(Ks.INVALID_ISO_DATE_ARGUMENT)}}else if(T2(e)){if(isNaN(e.getTime()))throw qs(Ks.INVALID_DATE_ARGUMENT);a=e}else if(se(e))a=e;else throw qs(Ks.INVALID_ARGUMENT);return Y(s)?o.key=s:wt(s)&&Object.keys(s).forEach(l=>{zp.includes(l)?n[l]=s[l]:o[l]=s[l]}),Y(i)?o.locale=i:wt(i)&&(n=i),wt(r)&&(n=r),[o.key||"",a,o,n]}function Gd(t,e,s){const i=t;for(const r in s){const o=`${e}__${r}`;i.__datetimeFormatters.has(o)&&i.__datetimeFormatters.delete(o)}}function Yd(t,...e){const{numberFormats:s,unresolving:i,fallbackLocale:r,onWarn:o,localeFallbacker:n}=t,{__numberFormatters:a}=t,[l,d,h,u]=sl(...e),p=jt(h.missingWarn)?h.missingWarn:t.missingWarn;jt(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const g=!!h.part,v=tc(t,h),k=n(t,r,v);if(!Y(l)||l==="")return new Intl.NumberFormat(v,u).format(d);let L={},_,w=null;const A="number format";for(let O=0;O<k.length&&(_=k[O],L=s[_]||{},w=L[l],!wt(w));O++)ec(t,l,_,p,A);if(!wt(w)||!Y(_))return i?Gn:l;let b=`${_}__${l}`;Kn(u)||(b=`${b}__${JSON.stringify(u)}`);let C=a.get(b);return C||(C=new Intl.NumberFormat(_,ue({},w,u)),a.set(b,C)),g?C.formatToParts(d):C.format(d)}const Vp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function sl(...t){const[e,s,i,r]=t,o=Mt();let n=Mt();if(!se(e))throw qs(Ks.INVALID_ARGUMENT);const a=e;return Y(s)?o.key=s:wt(s)&&Object.keys(s).forEach(l=>{Vp.includes(l)?n[l]=s[l]:o[l]=s[l]}),Y(i)?o.locale=i:wt(i)&&(n=i),wt(r)&&(n=r),[o.key||"",a,o,n]}function Xd(t,e,s){const i=t;for(const r in s){const o=`${e}__${r}`;i.__numberFormatters.has(o)&&i.__numberFormatters.delete(o)}}const Hk=t=>t,jk=t=>"",Wk="text",Kk=t=>t.length===0?"":Jl(t),qk=R2;function Jd(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Gk(t){const e=se(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(se(t.named.count)||se(t.named.n))?se(t.named.count)?t.named.count:se(t.named.n)?t.named.n:e:e}function Yk(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Xk(t={}){const e=t.locale,s=Gk(t),i=At(t.pluralRules)&&Y(e)&&Ht(t.pluralRules[e])?t.pluralRules[e]:Jd,r=At(t.pluralRules)&&Y(e)&&Ht(t.pluralRules[e])?Jd:void 0,o=_=>_[i(s,_.length,r)],n=t.list||[],a=_=>n[_],l=t.named||Mt();se(t.pluralIndex)&&Yk(s,l);const d=_=>l[_];function h(_,w){const A=Ht(t.messages)?t.messages(_,!!w):At(t.messages)?t.messages[_]:!1;return A||(t.parent?t.parent.message(_):jk)}const u=_=>t.modifiers?t.modifiers[_]:Hk,p=wt(t.processor)&&Ht(t.processor.normalize)?t.processor.normalize:Kk,g=wt(t.processor)&&Ht(t.processor.interpolate)?t.processor.interpolate:qk,v=wt(t.processor)&&Y(t.processor.type)?t.processor.type:Wk,L={list:a,named:d,plural:o,linked:(_,...w)=>{const[A,b]=w;let C="text",O="";w.length===1?At(A)?(O=A.modifier||O,C=A.type||C):Y(A)&&(O=A||O):w.length===2&&(Y(A)&&(O=A||O),Y(b)&&(C=b||C));const T=h(_,!0)(L),B=C==="vnode"&&Zt(T)&&O?T[0]:T;return O?u(O)(B,C):B},message:h,type:v,interpolate:g,normalize:p,values:ue(Mt(),n,l)};return L}const Qd=()=>"",is=t=>Ht(t);function Zd(t,...e){const{fallbackFormat:s,postTranslation:i,unresolving:r,messageCompiler:o,fallbackLocale:n,messages:a}=t,[l,d]=il(...e),h=jt(d.missingWarn)?d.missingWarn:t.missingWarn,u=jt(d.fallbackWarn)?d.fallbackWarn:t.fallbackWarn,p=jt(d.escapeParameter)?d.escapeParameter:t.escapeParameter,g=!!d.resolvedMessage,v=Y(d.default)||jt(d.default)?jt(d.default)?o?l:()=>l:d.default:s?o?l:()=>l:null,k=s||v!=null&&(Y(v)||Ht(v)),L=tc(t,d);p&&Jk(d);let[_,w,A]=g?[l,L,a[L]||Mt()]:Np(t,l,L,n,u,h),b=_,C=l;if(!g&&!(Y(b)||Ls(b)||is(b))&&k&&(b=v,C=b),!g&&(!(Y(b)||Ls(b)||is(b))||!Y(w)))return r?Gn:l;let O=!1;const T=()=>{O=!0},B=is(b)?b:Fp(t,l,w,b,C,T);if(O)return b;const P=tC(t,w,A,d),D=Xk(P),lt=Qk(t,B,D);let et=i?i(lt,l):lt;if(p&&Y(et)&&(et=L2(et)),__INTLIFY_PROD_DEVTOOLS__){const gt={timestamp:Date.now(),key:Y(l)?l:is(b)?b.key:"",locale:w||(is(b)?b.locale:""),format:Y(b)?b:is(b)?b.source:"",message:et};gt.meta=ue({},t.__meta,Vk()||{}),yk(gt)}return et}function Jk(t){Zt(t.list)?t.list=t.list.map(e=>Y(e)?Rd(e):e):At(t.named)&&Object.keys(t.named).forEach(e=>{Y(t.named[e])&&(t.named[e]=Rd(t.named[e]))})}function Np(t,e,s,i,r,o){const{messages:n,onWarn:a,messageResolver:l,localeFallbacker:d}=t,h=d(t,i,s);let u=Mt(),p,g=null;const v="translate";for(let k=0;k<h.length&&(p=h[k],u=n[p]||Mt(),(g=l(u,e))===null&&(g=u[e]),!(Y(g)||Ls(g)||is(g)));k++)if(!Uk(p,h)){const L=ec(t,e,p,o,v);L!==e&&(g=L)}return[g,p,u]}function Fp(t,e,s,i,r,o){const{messageCompiler:n,warnHtmlMessage:a}=t;if(is(i)){const d=i;return d.locale=d.locale||s,d.key=d.key||e,d}if(n==null){const d=(()=>i);return d.locale=s,d.key=e,d}const l=n(i,Zk(t,s,r,i,a,o));return l.locale=s,l.key=e,l.source=i,l}function Qk(t,e,s){return e(s)}function il(...t){const[e,s,i]=t,r=Mt();if(!Y(e)&&!se(e)&&!is(e)&&!Ls(e))throw qs(Ks.INVALID_ARGUMENT);const o=se(e)?String(e):(is(e),e);return se(s)?r.plural=s:Y(s)?r.default=s:wt(s)&&!Kn(s)?r.named=s:Zt(s)&&(r.list=s),se(i)?r.plural=i:Y(i)?r.default=i:wt(i)&&ue(r,i),[o,r]}function Zk(t,e,s,i,r,o){return{locale:e,key:s,warnHtmlMessage:r,onError:n=>{throw o&&o(n),n},onCacheKey:n=>A2(e,s,n)}}function tC(t,e,s,i){const{modifiers:r,pluralRules:o,messageResolver:n,fallbackLocale:a,fallbackWarn:l,missingWarn:d,fallbackContext:h}=t,p={locale:e,modifiers:r,pluralRules:o,messages:(g,v)=>{let k=n(s,g);if(k==null&&(h||v)){const[,,L]=Np(h||t,g,e,a,l,d);k=n(L,g)}if(Y(k)||Ls(k)){let L=!1;const w=Fp(t,g,e,k,g,()=>{L=!0});return L?Qd:w}else return is(k)?k:Qd}};return t.processor&&(p.processor=t.processor),i.list&&(p.list=i.list),i.named&&(p.named=i.named),se(i.plural)&&(p.pluralIndex=i.plural),p}ok();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const eC="11.1.12";function sC(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Yl().__INTLIFY_PROD_DEVTOOLS__=!1)}const os={UNEXPECTED_RETURN_TYPE:_k,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function hs(t,...e){return qn(t,null,void 0)}const rl=vi("__translateVNode"),ol=vi("__datetimeParts"),nl=vi("__numberParts"),iC=vi("__setPluralRules"),rC=vi("__injectWithOption"),al=vi("__dispose");function lo(t){if(!At(t)||Ls(t))return t;for(const e in t)if(ls(t,e))if(!e.includes("."))At(t[e])&&lo(t[e]);else{const s=e.split("."),i=s.length-1;let r=t,o=!1;for(let n=0;n<i;n++){if(s[n]==="__proto__")throw new Error(`unsafe key: ${s[n]}`);if(s[n]in r||(r[s[n]]=Mt()),!At(r[s[n]])){o=!0;break}r=r[s[n]]}if(o||(Ls(r)?Ip.includes(s[i])||delete t[e]:(r[s[i]]=t[e],delete t[e])),!Ls(r)){const n=r[s[i]];At(n)&&lo(n)}}return t}function Bp(t,e){const{messages:s,__i18n:i,messageResolver:r,flatJson:o}=e,n=wt(s)?s:Zt(i)?Mt():{[t]:Mt()};if(Zt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:d}=a;l?(n[l]=n[l]||Mt(),Xo(d,n[l])):Xo(d,n)}else Y(a)&&Xo(JSON.parse(a),n)}),r==null&&o)for(const a in n)ls(n,a)&&lo(n[a]);return n}function Up(t){return t.type}function oC(t,e,s){let i=At(e.messages)?e.messages:Mt();"__i18nGlobal"in s&&(i=Bp(t.locale.value,{messages:i,__i18n:s.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(o=>{t.mergeLocaleMessage(o,i[o])});{if(At(e.datetimeFormats)){const o=Object.keys(e.datetimeFormats);o.length&&o.forEach(n=>{t.mergeDateTimeFormat(n,e.datetimeFormats[n])})}if(At(e.numberFormats)){const o=Object.keys(e.numberFormats);o.length&&o.forEach(n=>{t.mergeNumberFormat(n,e.numberFormats[n])})}}}function tu(t){return Yt(ko,null,t,0)}const eu="__INTLIFY_META__",su=()=>[],nC=()=>!1;let iu=0;function ru(t){return((e,s,i,r)=>t(s,i,Co()||void 0,r))}const aC=()=>{const t=Co();let e=null;return t&&(e=Up(t)[eu])?{[eu]:e}:null};function Hp(t={}){const{__root:e,__injectWithOption:s}=t,i=e===void 0,r=t.flatJson,o=_n?Vt:sv;let n=jt(t.inheritLocale)?t.inheritLocale:!0;const a=o(e&&n?e.locale.value:Y(t.locale)?t.locale:xn),l=o(e&&n?e.fallbackLocale.value:Y(t.fallbackLocale)||Zt(t.fallbackLocale)||wt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),d=o(Bp(a.value,t)),h=o(wt(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),u=o(wt(t.numberFormats)?t.numberFormats:{[a.value]:{}});let p=e?e.missingWarn:jt(t.missingWarn)||wn(t.missingWarn)?t.missingWarn:!0,g=e?e.fallbackWarn:jt(t.fallbackWarn)||wn(t.fallbackWarn)?t.fallbackWarn:!0,v=e?e.fallbackRoot:jt(t.fallbackRoot)?t.fallbackRoot:!0,k=!!t.fallbackFormat,L=Ht(t.missing)?t.missing:null,_=Ht(t.missing)?ru(t.missing):null,w=Ht(t.postTranslation)?t.postTranslation:null,A=e?e.warnHtmlMessage:jt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,b=!!t.escapeParameter;const C=e?e.modifiers:wt(t.modifiers)?t.modifiers:{};let O=t.pluralRules||e&&e.pluralRules,T;T=(()=>{i&&Wd(null);const $={version:eC,locale:a.value,fallbackLocale:l.value,messages:d.value,modifiers:C,pluralRules:O,missing:_===null?void 0:_,missingWarn:p,fallbackWarn:g,fallbackFormat:k,unresolving:!0,postTranslation:w===null?void 0:w,warnHtmlMessage:A,escapeParameter:b,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};$.datetimeFormats=h.value,$.numberFormats=u.value,$.__datetimeFormatters=wt(T)?T.__datetimeFormatters:void 0,$.__numberFormatters=wt(T)?T.__numberFormatters:void 0;const M=Fk($);return i&&Wd(M),M})(),Or(T,a.value,l.value);function P(){return[a.value,l.value,d.value,h.value,u.value]}const D=Dt({get:()=>a.value,set:$=>{T.locale=$,a.value=$}}),lt=Dt({get:()=>l.value,set:$=>{T.fallbackLocale=$,l.value=$,Or(T,a.value,$)}}),et=Dt(()=>d.value),gt=Dt(()=>h.value),vt=Dt(()=>u.value);function kt(){return Ht(w)?w:null}function tt($){w=$,T.postTranslation=$}function G(){return L}function at($){$!==null&&(_=ru($)),L=$,T.missing=_}const X=($,M,J,ct,mt,ne)=>{P();let Qt;try{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=e?Nk():void 0),Qt=$(T)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=void 0)}if(J!=="translate exists"&&se(Qt)&&Qt===Gn||J==="translate exists"&&!Qt){const[ts,as]=M();return e&&v?ct(e):mt(ts)}else{if(ne(Qt))return Qt;throw hs(os.UNEXPECTED_RETURN_TYPE)}};function Ct(...$){return X(M=>Reflect.apply(Zd,null,[M,...$]),()=>il(...$),"translate",M=>Reflect.apply(M.t,M,[...$]),M=>M,M=>Y(M))}function Ze(...$){const[M,J,ct]=$;if(ct&&!At(ct))throw hs(os.INVALID_ARGUMENT);return Ct(M,J,ue({resolvedMessage:!0},ct||{}))}function Re(...$){return X(M=>Reflect.apply(qd,null,[M,...$]),()=>el(...$),"datetime format",M=>Reflect.apply(M.d,M,[...$]),()=>Hd,M=>Y(M)||Zt(M))}function ji(...$){return X(M=>Reflect.apply(Yd,null,[M,...$]),()=>sl(...$),"number format",M=>Reflect.apply(M.n,M,[...$]),()=>Hd,M=>Y(M)||Zt(M))}function _r($){return $.map(M=>Y(M)||se(M)||jt(M)?tu(String(M)):M)}const Ns={normalize:_r,interpolate:$=>$,type:"vnode"};function si(...$){return X(M=>{let J;const ct=M;try{ct.processor=Ns,J=Reflect.apply(Zd,null,[ct,...$])}finally{ct.processor=null}return J},()=>il(...$),"translate",M=>M[rl](...$),M=>[tu(M)],M=>Zt(M))}function ii(...$){return X(M=>Reflect.apply(Yd,null,[M,...$]),()=>sl(...$),"number format",M=>M[nl](...$),su,M=>Y(M)||Zt(M))}function Wi(...$){return X(M=>Reflect.apply(qd,null,[M,...$]),()=>el(...$),"datetime format",M=>M[ol](...$),su,M=>Y(M)||Zt(M))}function _s($){O=$,T.pluralRules=O}function Ao($,M){return X(()=>{if(!$)return!1;const J=Y(M)?M:a.value,ct=R(J),mt=T.messageResolver(ct,$);return Ls(mt)||is(mt)||Y(mt)},()=>[$],"translate exists",J=>Reflect.apply(J.te,J,[$,M]),nC,J=>jt(J))}function x($){let M=null;const J=Lp(T,l.value,a.value);for(let ct=0;ct<J.length;ct++){const mt=d.value[J[ct]]||{},ne=T.messageResolver(mt,$);if(ne!=null){M=ne;break}}return M}function S($){const M=x($);return M??(e?e.tm($)||{}:{})}function R($){return d.value[$]||{}}function U($,M){if(r){const J={[$]:M};for(const ct in J)ls(J,ct)&&lo(J[ct]);M=J[$]}d.value[$]=M,T.messages=d.value}function V($,M){d.value[$]=d.value[$]||{};const J={[$]:M};if(r)for(const ct in J)ls(J,ct)&&lo(J[ct]);M=J[$],Xo(M,d.value[$]),T.messages=d.value}function F($){return h.value[$]||{}}function m($,M){h.value[$]=M,T.datetimeFormats=h.value,Gd(T,$,M)}function y($,M){h.value[$]=ue(h.value[$]||{},M),T.datetimeFormats=h.value,Gd(T,$,M)}function E($){return u.value[$]||{}}function I($,M){u.value[$]=M,T.numberFormats=u.value,Xd(T,$,M)}function q($,M){u.value[$]=ue(u.value[$]||{},M),T.numberFormats=u.value,Xd(T,$,M)}iu++,e&&_n&&(Mi(e.locale,$=>{n&&(a.value=$,T.locale=$,Or(T,a.value,l.value))}),Mi(e.fallbackLocale,$=>{n&&(l.value=$,T.fallbackLocale=$,Or(T,a.value,l.value))}));const z={id:iu,locale:D,fallbackLocale:lt,get inheritLocale(){return n},set inheritLocale($){n=$,$&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Or(T,a.value,l.value))},get availableLocales(){return Object.keys(d.value).sort()},messages:et,get modifiers(){return C},get pluralRules(){return O||{}},get isGlobal(){return i},get missingWarn(){return p},set missingWarn($){p=$,T.missingWarn=p},get fallbackWarn(){return g},set fallbackWarn($){g=$,T.fallbackWarn=g},get fallbackRoot(){return v},set fallbackRoot($){v=$},get fallbackFormat(){return k},set fallbackFormat($){k=$,T.fallbackFormat=k},get warnHtmlMessage(){return A},set warnHtmlMessage($){A=$,T.warnHtmlMessage=$},get escapeParameter(){return b},set escapeParameter($){b=$,T.escapeParameter=$},t:Ct,getLocaleMessage:R,setLocaleMessage:U,mergeLocaleMessage:V,getPostTranslationHandler:kt,setPostTranslationHandler:tt,getMissingHandler:G,setMissingHandler:at,[iC]:_s};return z.datetimeFormats=gt,z.numberFormats=vt,z.rt=Ze,z.te=Ao,z.tm=S,z.d=Re,z.n=ji,z.getDateTimeFormat=F,z.setDateTimeFormat=m,z.mergeDateTimeFormat=y,z.getNumberFormat=E,z.setNumberFormat=I,z.mergeNumberFormat=q,z[rC]=s,z[rl]=si,z[ol]=Wi,z[nl]=ii,z}const sc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function lC({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Se?r.children:[r]],[]):e.reduce((s,i)=>{const r=t[i];return r&&(s[i]=r()),s},Mt())}function jp(){return Se}const cC=Ve({name:"i18n-t",props:ue({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>se(t)||!isNaN(t)}},sc),setup(t,e){const{slots:s,attrs:i}=e,r=t.i18n||ic({useScope:t.scope,__useComponent:!0});return()=>{const o=Object.keys(s).filter(u=>u[0]!=="_"),n=Mt();t.locale&&(n.locale=t.locale),t.plural!==void 0&&(n.plural=Y(t.plural)?+t.plural:t.plural);const a=lC(e,o),l=r[rl](t.keypath,a,n),d=ue(Mt(),i),h=Y(t.tag)||At(t.tag)?t.tag:jp();return op(h,d,l)}}}),ou=cC;function dC(t){return Zt(t)&&!Y(t[0])}function Wp(t,e,s,i){const{slots:r,attrs:o}=e;return()=>{const n={part:!0};let a=Mt();t.locale&&(n.locale=t.locale),Y(t.format)?n.key=t.format:At(t.format)&&(Y(t.format.key)&&(n.key=t.format.key),a=Object.keys(t.format).reduce((p,g)=>s.includes(g)?ue(Mt(),p,{[g]:t.format[g]}):p,Mt()));const l=i(t.value,n,a);let d=[n.key];Zt(l)?d=l.map((p,g)=>{const v=r[p.type],k=v?v({[p.type]:p.value,index:g,parts:l}):[p.value];return dC(k)&&(k[0].key=`${p.type}-${g}`),k}):Y(l)&&(d=[l]);const h=ue(Mt(),o),u=Y(t.tag)||At(t.tag)?t.tag:jp();return op(u,h,d)}}const uC=Ve({name:"i18n-n",props:ue({value:{type:Number,required:!0},format:{type:[String,Object]}},sc),setup(t,e){const s=t.i18n||ic({useScope:t.scope,__useComponent:!0});return Wp(t,e,Vp,(...i)=>s[nl](...i))}}),nu=uC;function hC(t,e){const s=t;if(t.mode==="composition")return s.__getInstance(e)||t.global;{const i=s.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function pC(t){const e=n=>{const{instance:a,value:l}=n;if(!a||!a.$)throw hs(os.UNEXPECTED_ERROR);const d=hC(t,a.$),h=au(l);return[Reflect.apply(d.t,d,[...lu(h)]),d]};return{created:(n,a)=>{const[l,d]=e(a);_n&&t.global===d&&(n.__i18nWatcher=Mi(d.locale,()=>{a.instance&&a.instance.$forceUpdate()})),n.__composer=d,n.textContent=l},unmounted:n=>{_n&&n.__i18nWatcher&&(n.__i18nWatcher(),n.__i18nWatcher=void 0,delete n.__i18nWatcher),n.__composer&&(n.__composer=void 0,delete n.__composer)},beforeUpdate:(n,{value:a})=>{if(n.__composer){const l=n.__composer,d=au(a);n.textContent=Reflect.apply(l.t,l,[...lu(d)])}},getSSRProps:n=>{const[a]=e(n);return{textContent:a}}}}function au(t){if(Y(t))return{path:t};if(wt(t)){if(!("path"in t))throw hs(os.REQUIRED_VALUE,"path");return t}else throw hs(os.INVALID_VALUE)}function lu(t){const{path:e,locale:s,args:i,choice:r,plural:o}=t,n={},a=i||{};return Y(s)&&(n.locale=s),se(r)&&(n.plural=r),se(o)&&(n.plural=o),[e,a,n]}function fC(t,e,...s){const i=wt(s[0])?s[0]:{};(jt(i.globalInstall)?i.globalInstall:!0)&&([ou.name,"I18nT"].forEach(o=>t.component(o,ou)),[nu.name,"I18nN"].forEach(o=>t.component(o,nu)),[du.name,"I18nD"].forEach(o=>t.component(o,du))),t.directive("t",pC(e))}const gC=vi("global-vue-i18n");function mC(t={}){const e=jt(t.globalInjection)?t.globalInjection:!0,s=new Map,[i,r]=bC(t),o=vi("");function n(h){return s.get(h)||null}function a(h,u){s.set(h,u)}function l(h){s.delete(h)}const d={get mode(){return"composition"},async install(h,...u){if(h.__VUE_I18N_SYMBOL__=o,h.provide(h.__VUE_I18N_SYMBOL__,d),wt(u[0])){const v=u[0];d.__composerExtend=v.__composerExtend,d.__vueI18nExtend=v.__vueI18nExtend}let p=null;e&&(p=SC(h,d.global)),fC(h,d,...u);const g=h.unmount;h.unmount=()=>{p&&p(),d.dispose(),g()}},get global(){return r},dispose(){i.stop()},__instances:s,__getInstance:n,__setInstance:a,__deleteInstance:l};return d}function ic(t={}){const e=Co();if(e==null)throw hs(os.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw hs(os.NOT_INSTALLED);const s=yC(e),i=_C(s),r=Up(e),o=vC(t,r);if(o==="global")return oC(i,t,r),i;if(o==="parent"){let l=wC(s,e,t.__useComponent);return l==null&&(l=i),l}const n=s;let a=n.__getInstance(e);if(a==null){const l=ue({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Hp(l),n.__composerExtend&&(a[al]=n.__composerExtend(a)),kC(n,e,a),n.__setInstance(e,a)}return a}function bC(t,e){const s=Ll(),i=s.run(()=>Hp(t));if(i==null)throw hs(os.UNEXPECTED_ERROR);return[s,i]}function yC(t){const e=de(t.isCE?gC:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw hs(t.isCE?os.NOT_INSTALLED_WITH_PROVIDE:os.UNEXPECTED_ERROR);return e}function vC(t,e){return Kn(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function _C(t){return t.mode==="composition"?t.global:t.global.__composer}function wC(t,e,s=!1){let i=null;const r=e.root;let o=xC(e,s);for(;o!=null;){const n=t;if(t.mode==="composition"&&(i=n.__getInstance(o)),i!=null||r===o)break;o=o.parent}return i}function xC(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function kC(t,e,s){Bl(()=>{},e),Ul(()=>{const i=s;t.__deleteInstance(e);const r=i[al];r&&(r(),delete i[al])},e)}const CC=["locale","fallbackLocale","availableLocales"],cu=["t","rt","d","n","tm","te"];function SC(t,e){const s=Object.create(null);return CC.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o)throw hs(os.UNEXPECTED_ERROR);const n=Wt(o.value)?{get(){return o.value.value},set(a){o.value.value=a}}:{get(){return o.get&&o.get()}};Object.defineProperty(s,r,n)}),t.config.globalProperties.$i18n=s,cu.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o.value)throw hs(os.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,o)}),()=>{delete t.config.globalProperties.$i18n,cu.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const EC=Ve({name:"i18n-d",props:ue({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},sc),setup(t,e){const s=t.i18n||ic({useScope:t.scope,__useComponent:!0});return Wp(t,e,zp,(...i)=>s[ol](...i))}}),du=EC;sC();Rk(gk);Pk(Lk);Dk(Lp);if(__INTLIFY_PROD_DEVTOOLS__){const t=Yl();t.__INTLIFY__=!0,mk(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}class AC{constructor(e,s=fn){this.i18nConfig=void 0,this.i18nConfig=mC(this.getConfig(e,s))}getConfig(e,s=fn){const i={trend:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0},detections:{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0},detectionsCompact:{style:"decimal",notation:"compact",minimumFractionDigits:0,maximumFractionDigits:0}},r={secondRange:{hour:"2-digit",minute:"2-digit",second:"2-digit"},hourRange:{hour:"2-digit",minute:"2-digit"},dateRange:{month:"short",day:"numeric"},overviewDate:{month:"short",day:"numeric",year:"numeric"},fullDateTime:{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",year:"2-digit"}},o={locale:e,fallbackLocale:"en-us",messages:s,allowComposition:!0,legacy:!1,numberFormats:{"en-US":i,[e]:i},datetimeFormats:{"en-US":r,[e]:r}};return o.numberFormats[e]=o.numberFormats[e]??o.numberFormats["en-US"],o}install(e){e.provide(ye.I18N,this.i18nConfig?.global)}}function $C(t,e=fn){return new AC(t,e)}(async()=>{const t=ap(Dx);t.config.compilerOptions.isCustomElement=s=>s.startsWith("sl-");const e=S2();t.use(Nx()),t.use(e),t.use(p_()),await e.connect(),t.use($C(e.data.locale,fn)),t.mount("#app")})();
