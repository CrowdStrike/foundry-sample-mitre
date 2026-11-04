var _f=Object.defineProperty;var wf=(t,e,s)=>e in t?_f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var rt=(t,e,s)=>wf(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const tn=globalThis,El=tn.ShadowRoot&&(tn.ShadyCSS===void 0||tn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Al=Symbol(),Sc=new WeakMap;let Ru=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==Al)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(El&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=Sc.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Sc.set(s,e))}return e}toString(){return this.cssText}};const xf=t=>new Ru(typeof t=="string"?t:t+"",void 0,Al),st=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new Ru(s,t,Al)},kf=(t,e)=>{if(El)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=tn.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},Ec=El?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return xf(s)})(t):t;const{is:Cf,defineProperty:Sf,getOwnPropertyDescriptor:Ef,getOwnPropertyNames:Af,getOwnPropertySymbols:$f,getPrototypeOf:Tf}=Object,Dn=globalThis,Ac=Dn.trustedTypes,If=Ac?Ac.emptyScript:"",Lf=Dn.reactiveElementPolyfillSupport,Ur=(t,e)=>t,fr={toAttribute(t,e){switch(e){case Boolean:t=t?If:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},$l=(t,e)=>!Cf(t,e),$c={attribute:!0,type:String,converter:fr,reflect:!1,useDefault:!1,hasChanged:$l};Symbol.metadata??=Symbol("metadata"),Dn.litPropertyMetadata??=new WeakMap;let or=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=$c){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Sf(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:o}=Ef(this.prototype,e)??{get(){return this[s]},set(n){this[s]=n}};return{get:r,set(n){const a=r?.call(this);o?.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$c}static _$Ei(){if(this.hasOwnProperty(Ur("elementProperties")))return;const e=Tf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ur("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ur("properties"))){const s=this.properties,i=[...Af(s),...$f(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(Ec(r))}else e!==void 0&&s.push(Ec(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kf(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:fr).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:fr;this._$Em=r;const a=n.fromAttribute(s,o.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,s,i,r=!1,o){if(e!==void 0){const n=this.constructor;if(r===!1&&(o=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??$l)(o,s)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??s??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};or.elementStyles=[],or.shadowRootOptions={mode:"open"},or[Ur("elementProperties")]=new Map,or[Ur("finalized")]=new Map,Lf?.({ReactiveElement:or}),(Dn.reactiveElementVersions??=[]).push("2.1.2");const Tl=globalThis,Tc=t=>t,an=Tl.trustedTypes,Ic=an?an.createPolicy("lit-html",{createHTML:t=>t}):void 0,Mu="$lit$",pi=`lit$${Math.random().toFixed(9).slice(2)}$`,Pu="?"+pi,Of=`<${Pu}>`,Ui=document,io=()=>Ui.createComment(""),ro=t=>t===null||typeof t!="object"&&typeof t!="function",Il=Array.isArray,Rf=t=>Il(t)||typeof t?.[Symbol.iterator]=="function",da=`[ 	
\f\r]`,Ir=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lc=/-->/g,Oc=/>/g,$i=RegExp(`>|${da}(?:([^\\s"'>=/]+)(${da}*=${da}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rc=/'/g,Mc=/"/g,Du=/^(?:script|style|textarea|title)$/i,Mf=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),N=Mf(1),qe=Symbol.for("lit-noChange"),Bt=Symbol.for("lit-nothing"),Pc=new WeakMap,zi=Ui.createTreeWalker(Ui,129);function zu(t,e){if(!Il(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ic!==void 0?Ic.createHTML(e):e}const Pf=(t,e)=>{const s=t.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=Ir;for(let a=0;a<s;a++){const l=t[a];let d,h,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===Ir?h[1]==="!--"?n=Lc:h[1]!==void 0?n=Oc:h[2]!==void 0?(Du.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=$i):h[3]!==void 0&&(n=$i):n===$i?h[0]===">"?(n=r??Ir,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?$i:h[3]==='"'?Mc:Rc):n===Mc||n===Rc?n=$i:n===Lc||n===Oc?n=Ir:(n=$i,r=void 0);const g=n===$i&&t[a+1].startsWith("/>")?" ":"";o+=n===Ir?l+Of:u>=0?(i.push(d),l.slice(0,u)+Mu+l.slice(u)+pi+g):l+pi+(u===-2?a:g)}return[zu(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class oo{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[d,h]=Pf(e,s);if(this.el=oo.createElement(d,i),zi.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=zi.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Mu)){const p=h[n++],g=r.getAttribute(u).split(pi),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?zf:v[1]==="?"?Vf:v[1]==="@"?Nf:zn}),r.removeAttribute(u)}else u.startsWith(pi)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(Du.test(r.tagName)){const u=r.textContent.split(pi),p=u.length-1;if(p>0){r.textContent=an?an.emptyScript:"";for(let g=0;g<p;g++)r.append(u[g],io()),zi.nextNode(),l.push({type:2,index:++o});r.append(u[p],io())}}}else if(r.nodeType===8)if(r.data===Pu)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(pi,u+1))!==-1;)l.push({type:7,index:o}),u+=pi.length-1}o++}}static createElement(e,s){const i=Ui.createElement("template");return i.innerHTML=e,i}}function gr(t,e,s=t,i){if(e===qe)return e;let r=i!==void 0?s._$Co?.[i]:s._$Cl;const o=ro(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=r:s._$Cl=r),r!==void 0&&(e=gr(t,r._$AS(t,e.values),r,i)),e}class Df{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??Ui).importNode(s,!0);zi.currentNode=r;let o=zi.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new yo(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new Ff(o,this,e)),this._$AV.push(d),l=i[++a]}n!==l?.index&&(o=zi.nextNode(),n++)}return zi.currentNode=Ui,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class yo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=Bt,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=gr(this,e,s),ro(e)?e===Bt||e==null||e===""?(this._$AH!==Bt&&this._$AR(),this._$AH=Bt):e!==this._$AH&&e!==qe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Rf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Bt&&ro(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ui.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oo.createElement(zu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{const o=new Df(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=Pc.get(e.strings);return s===void 0&&Pc.set(e.strings,s=new oo(e)),s}k(e){Il(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const o of e)r===s.length?s.push(i=new yo(this.O(io()),this.O(io()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){const i=Tc(e).nextSibling;Tc(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}let zn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,o){this.type=1,this._$AH=Bt,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Bt}_$AI(e,s=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=gr(this,e,s,0),n=!ro(e)||e!==this._$AH&&e!==qe,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=gr(this,a[i+l],s,l),d===qe&&(d=this._$AH[l]),n||=!ro(d)||d!==this._$AH[l],d===Bt?e=Bt:e!==Bt&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.j(e)}j(e){e===Bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class zf extends zn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Bt?void 0:e}}class Vf extends zn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Bt)}}class Nf extends zn{constructor(e,s,i,r,o){super(e,s,i,r,o),this.type=5}_$AI(e,s=this){if((e=gr(this,e,s,0)??Bt)===qe)return;const i=this._$AH,r=e===Bt&&i!==Bt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Bt&&(i===Bt||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ff{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){gr(this,e)}}const Bf=Tl.litHtmlPolyfillSupport;Bf?.(oo,yo),(Tl.litHtmlVersions??=[]).push("3.3.3");const Uf=(t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const o=s?.renderBefore??null;i._$litPart$=r=new yo(e.insertBefore(io(),o),o,void 0,s??{})}return r._$AI(t),r};const Ll=globalThis;let Hr=class extends or{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Uf(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qe}};Hr._$litElement$=!0,Hr.finalized=!0,Ll.litElementHydrateSupport?.({LitElement:Hr});const Hf=Ll.litElementPolyfillSupport;Hf?.({LitElement:Hr});(Ll.litElementVersions??=[]).push("4.2.2");var jf=st`
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
`,at=st`
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
`,Vu=Object.defineProperty,Wf=Object.defineProperties,Kf=Object.getOwnPropertyDescriptor,qf=Object.getOwnPropertyDescriptors,Dc=Object.getOwnPropertySymbols,Gf=Object.prototype.hasOwnProperty,Yf=Object.prototype.propertyIsEnumerable,ua=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ol=t=>{throw TypeError(t)},zc=(t,e,s)=>e in t?Vu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,oi=(t,e)=>{for(var s in e||(e={}))Gf.call(e,s)&&zc(t,s,e[s]);if(Dc)for(var s of Dc(e))Yf.call(e,s)&&zc(t,s,e[s]);return t},vo=(t,e)=>Wf(t,qf(e)),c=(t,e,s,i)=>{for(var r=i>1?void 0:i?Kf(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(r=(i?n(e,s,r):n(r))||r);return i&&r&&Vu(e,s,r),r},Nu=(t,e,s)=>e.has(t)||Ol("Cannot "+s),Xf=(t,e,s)=>(Nu(t,e,"read from private field"),e.get(t)),Jf=(t,e,s)=>e.has(t)?Ol("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Qf=(t,e,s,i)=>(Nu(t,e,"write to private field"),e.set(t,s),s),Zf=function(t,e){this[0]=t,this[1]=e},tg=t=>{var e=t[ua("asyncIterator")],s=!1,i,r={};return e==null?(e=t[ua("iterator")](),i=o=>r[o]=n=>e[o](n)):(e=e.call(t),i=o=>r[o]=n=>{if(s){if(s=!1,o==="throw")throw n;return n}return s=!0,{done:!1,value:new Zf(new Promise(a=>{var l=e[o](n);l instanceof Object||Ol("Object expected"),a(l)}),1)}}),r[ua("iterator")]=()=>r,i("next"),"throw"in e?i("throw"):r.throw=o=>{throw o},"return"in e&&i("return"),r};const eg={attribute:!0,type:String,converter:fr,reflect:!1,hasChanged:$l},sg=(t=eg,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){const{name:n}=s;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,t,a),a}}}if(i==="setter"){const{name:n}=s;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,t,!0,a)}}throw Error("Unsupported decorator location: "+i)};function f(t){return(e,s)=>typeof s=="object"?sg(t,e,s):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}function it(t){return f({...t,state:!0,attribute:!1})}function _o(t){return(e,s)=>{const i=typeof e=="function"?e:e[s];Object.assign(i,t)}}const Fu=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);function K(t,e){return(s,i,r)=>{const o=n=>n.renderRoot?.querySelector(t)??null;return Fu(s,i,{get(){return o(this)}})}}function ig(t){return(e,s)=>Fu(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var en,Q=class extends Hr{constructor(){super(),Jf(this,en,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const s=new CustomEvent(t,oi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}static define(t,e=this,s={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,s)}catch{customElements.define(t,class extends e{},s)}return}let r=" (unknown version)",o=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(o=" v"+i.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${o} has already been registered.`)}attributeChangedCallback(t,e,s){Xf(this,en)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Qf(this,en,!0)),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}};en=new WeakMap;Q.version="2.20.1";Q.dependencies={};c([f()],Q.prototype,"dir",2);c([f()],Q.prototype,"lang",2);var Rl=class extends Q{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),i=s.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||s.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=i;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Rl.styles=[at,jf];c([K("slot")],Rl.prototype,"defaultSlot",2);Rl.define("sl-menu");var rg=st`
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
`;const og=(t,e)=>t?._$litType$!==void 0,Bu=t=>t.strings===void 0,ng={},ag=(t,e=ng)=>t._$AH=e;const Ls={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},wo=t=>(...e)=>({_$litDirective$:t,values:e});let xo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};const jr=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),jr(i,e);return!0},ln=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},Uu=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),dg(e)}};function lg(t){this._$AN!==void 0?(ln(this),this._$AM=t,Uu(this)):this._$AM=t}function cg(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)jr(i[o],!1),ln(i[o]);else i!=null&&(jr(i,!1),ln(i));else jr(this,t)}const dg=t=>{t.type==Ls.CHILD&&(t._$AP??=cg,t._$AQ??=lg)};class ug extends xo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Uu(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(jr(this,e),ln(this))}setValue(e){if(Bu(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const hg=()=>new pg;let pg=class{};const ha=new WeakMap,fg=wo(class extends ug{render(t){return Bt}update(t,[e]){const s=e!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Bt}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=ha.get(e);s===void 0&&(s=new WeakMap,ha.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?ha.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var gg=class{constructor(t,e){this.popupRef=hg(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s?.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:o,top:n,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var n;const a=(n=e.get(o))!=null?n:new CSSUnitValue(0,"px"),d=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return r-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?N`
      <sl-popup
        ${fg(this.popupRef)}
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
    `:N` <slot name="submenu" hidden></slot> `}},mg=st`
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
`;const Ha=new Set,cr=new Map;let Di,Ml="ltr",Pl="en";const Hu=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Hu){const t=new MutationObserver(Wu);Ml=document.documentElement.dir||"ltr",Pl=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ju(...t){t.map(e=>{const s=e.$code.toLowerCase();cr.has(s)?cr.set(s,Object.assign(Object.assign({},cr.get(s)),e)):cr.set(s,e),Di||(Di=e)}),Wu()}function Wu(){Hu&&(Ml=document.documentElement.dir||"ltr",Pl=document.documentElement.lang||navigator.language),[...Ha.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let bg=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ha.add(this.host)}hostDisconnected(){Ha.delete(this.host)}dir(){return`${this.host.dir||Ml}`.toLowerCase()}lang(){return`${this.host.lang||Pl}`.toLowerCase()}getTranslationData(e){var s,i;let r;try{r=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const o=r.language.toLowerCase(),n=(i=(s=r.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",a=cr.get(`${o}-${n}`),l=cr.get(o);return{locale:r,language:o,region:n,primary:a,secondary:l}}exists(e,s){var i;const{primary:r,secondary:o}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(r&&r[e]||o&&o[e]||s.includeFallback&&Di&&Di[e])}term(e,...s){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[e])o=i[e];else if(r&&r[e])o=r[e];else if(Di&&Di[e])o=Di[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...s):o}date(e,s){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),s).format(e)}number(e,s){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),s).format(e)}relativeTime(e,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,s)}};var Ku={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ju(Ku);var yg=Ku,Et=class extends bg{};ju(yg);const yi=Math.min,We=Math.max,cn=Math.round,zo=Math.floor,Ds=t=>({x:t,y:t}),vg={left:"right",right:"left",bottom:"top",top:"bottom"};function ja(t,e,s){return We(t,yi(e,s))}function wr(t,e){return typeof t=="function"?t(e):t}function vi(t){return t.split("-")[0]}function xr(t){return t.split("-")[1]}function qu(t){return t==="x"?"y":"x"}function Dl(t){return t==="y"?"height":"width"}function Qs(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function zl(t){return qu(Qs(t))}function _g(t,e,s){s===void 0&&(s=!1);const i=xr(t),r=zl(t),o=Dl(r);let n=r==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(n=dn(n)),[n,dn(n)]}function wg(t){const e=dn(t);return[Wa(t),e,Wa(e)]}function Wa(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}const Vc=["left","right"],Nc=["right","left"],xg=["top","bottom"],kg=["bottom","top"];function Cg(t,e,s){switch(t){case"top":case"bottom":return s?e?Nc:Vc:e?Vc:Nc;case"left":case"right":return e?xg:kg;default:return[]}}function Sg(t,e,s,i){const r=xr(t);let o=Cg(vi(t),s==="start",i);return r&&(o=o.map(n=>n+"-"+r),e&&(o=o.concat(o.map(Wa)))),o}function dn(t){const e=vi(t);return vg[e]+t.slice(e.length)}function Eg(t){return{top:0,right:0,bottom:0,left:0,...t}}function Gu(t){return typeof t!="number"?Eg(t):{top:t,right:t,bottom:t,left:t}}function un(t){const{x:e,y:s,width:i,height:r}=t;return{width:i,height:r,top:s,left:e,right:e+i,bottom:s+r,x:e,y:s}}function Fc(t,e,s){let{reference:i,floating:r}=t;const o=Qs(e),n=zl(e),a=Dl(n),l=vi(e),d=o==="y",h=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,p=i[a]/2-r[a]/2;let g;switch(l){case"top":g={x:h,y:i.y-r.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-r.width,y:u};break;default:g={x:i.x,y:i.y}}switch(xr(e)){case"start":g[n]-=p*(s&&d?-1:1);break;case"end":g[n]+=p*(s&&d?-1:1);break}return g}async function Ag(t,e){var s;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:n,elements:a,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=wr(e,t),v=Gu(g),I=a[p?u==="floating"?"reference":"floating":u],k=un(await o.getClippingRect({element:(s=await(o.isElement==null?void 0:o.isElement(I)))==null||s?I:I.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),_=u==="floating"?{x:i,y:r,width:n.floating.width,height:n.floating.height}:n.reference,A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),b=await(o.isElement==null?void 0:o.isElement(A))?await(o.getScale==null?void 0:o.getScale(A))||{x:1,y:1}:{x:1,y:1},E=un(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:A,strategy:l}):_);return{top:(k.top-E.top+v.top)/b.y,bottom:(E.bottom-k.bottom+v.bottom)/b.y,left:(k.left-E.left+v.left)/b.x,right:(E.right-k.right+v.right)/b.x}}const $g=50,Tg=async(t,e,s)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:n}=s,a=n.detectOverflow?n:{...n,detectOverflow:Ag},l=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=Fc(d,i,l),p=i,g=0;const v={};for(let x=0;x<o.length;x++){const I=o[x];if(!I)continue;const{name:k,fn:_}=I,{x:A,y:b,data:E,reset:O}=await _({x:h,y:u,initialPlacement:i,placement:p,strategy:r,middlewareData:v,rects:d,platform:a,elements:{reference:t,floating:e}});h=A??h,u=b??u,v[k]={...v[k],...E},O&&g<$g&&(g++,typeof O=="object"&&(O.placement&&(p=O.placement),O.rects&&(d=O.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):O.rects),{x:h,y:u}=Fc(d,p,l)),x=-1)}return{x:h,y:u,placement:p,strategy:r,middlewareData:v}},Ig=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:r,rects:o,platform:n,elements:a,middlewareData:l}=e,{element:d,padding:h=0}=wr(t,e)||{};if(d==null)return{};const u=Gu(h),p={x:s,y:i},g=zl(r),v=Dl(g),x=await n.getDimensions(d),I=g==="y",k=I?"top":"left",_=I?"bottom":"right",A=I?"clientHeight":"clientWidth",b=o.reference[v]+o.reference[g]-p[g]-o.floating[v],E=p[g]-o.reference[g],O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let T=O?O[A]:0;(!T||!await(n.isElement==null?void 0:n.isElement(O)))&&(T=a.floating[A]||o.floating[v]);const B=b/2-E/2,M=T/2-x[v]/2-1,D=yi(u[k],M),ot=yi(u[_],M),tt=D,bt=T-x[v]-ot,wt=T/2-x[v]/2+B,St=ja(tt,wt,bt),Z=!l.arrow&&xr(r)!=null&&wt!==St&&o.reference[v]/2-(wt<tt?D:ot)-x[v]/2<0,G=Z?wt<tt?wt-tt:wt-bt:0;return{[g]:p[g]+G,data:{[g]:St,centerOffset:wt-St-G,...Z&&{alignmentOffset:G}},reset:Z}}}),Lg=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:r,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:d}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...I}=wr(t,e);if((s=o.arrow)!=null&&s.alignmentOffset)return{};const k=vi(r),_=Qs(a),A=vi(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(d.floating)),E=p||(A||!x?[dn(a)]:wg(a)),O=v!=="none";!p&&O&&E.push(...Sg(a,x,v,b));const T=[a,...E],B=await l.detectOverflow(e,I),M=[];let D=((i=o.flip)==null?void 0:i.overflows)||[];if(h&&M.push(B[k]),u){const wt=_g(r,n,b);M.push(B[wt[0]],B[wt[1]])}if(D=[...D,{placement:r,overflows:M}],!M.every(wt=>wt<=0)){var ot,tt;const wt=(((ot=o.flip)==null?void 0:ot.index)||0)+1,St=T[wt];if(St&&(!(u==="alignment"?_!==Qs(St):!1)||D.every(lt=>Qs(lt.placement)===_?lt.overflows[0]>0:!0)))return{data:{index:wt,overflows:D},reset:{placement:St}};let Z=(tt=D.filter(G=>G.overflows[0]<=0).sort((G,lt)=>G.overflows[1]-lt.overflows[1])[0])==null?void 0:tt.placement;if(!Z)switch(g){case"bestFit":{var bt;const G=(bt=D.filter(lt=>{if(O){const et=Qs(lt.placement);return et===_||et==="y"}return!0}).map(lt=>[lt.placement,lt.overflows.filter(et=>et>0).reduce((et,$t)=>et+$t,0)]).sort((lt,et)=>lt[1]-et[1])[0])==null?void 0:bt[0];G&&(Z=G);break}case"initialPlacement":Z=a;break}if(r!==Z)return{reset:{placement:Z}}}return{}}}},Og=new Set(["left","top"]);async function Rg(t,e){const{placement:s,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=vi(s),a=xr(s),l=Qs(s)==="y",d=Og.has(n)?-1:1,h=o&&l?-1:1,u=wr(e,t);let{mainAxis:p,crossAxis:g,alignmentAxis:v}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof v=="number"&&(g=a==="end"?v*-1:v),l?{x:g*h,y:p*d}:{x:p*d,y:g*h}}const Mg=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:r,y:o,placement:n,middlewareData:a}=e,l=await Rg(e,t);return n===((s=a.offset)==null?void 0:s.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:n}}}}},Pg=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:r,platform:o}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:k=>{let{x:_,y:A}=k;return{x:_,y:A}}},...d}=wr(t,e),h={x:s,y:i},u=await o.detectOverflow(e,d),p=Qs(vi(r)),g=qu(p);let v=h[g],x=h[p];if(n){const k=g==="y"?"top":"left",_=g==="y"?"bottom":"right",A=v+u[k],b=v-u[_];v=ja(A,v,b)}if(a){const k=p==="y"?"top":"left",_=p==="y"?"bottom":"right",A=x+u[k],b=x-u[_];x=ja(A,x,b)}const I=l.fn({...e,[g]:v,[p]:x});return{...I,data:{x:I.x-s,y:I.y-i,enabled:{[g]:n,[p]:a}}}}}},Dg=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var s,i;const{placement:r,rects:o,platform:n,elements:a}=e,{apply:l=()=>{},...d}=wr(t,e),h=await n.detectOverflow(e,d),u=vi(r),p=xr(r),g=Qs(r)==="y",{width:v,height:x}=o.floating;let I,k;u==="top"||u==="bottom"?(I=u,k=p===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(k=u,I=p==="end"?"top":"bottom");const _=x-h.top-h.bottom,A=v-h.left-h.right,b=yi(x-h[I],_),E=yi(v-h[k],A),O=!e.middlewareData.shift;let T=b,B=E;if((s=e.middlewareData.shift)!=null&&s.enabled.x&&(B=A),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(T=_),O&&!p){const D=We(h.left,0),ot=We(h.right,0),tt=We(h.top,0),bt=We(h.bottom,0);g?B=v-2*(D!==0||ot!==0?D+ot:We(h.left,h.right)):T=x-2*(tt!==0||bt!==0?tt+bt:We(h.top,h.bottom))}await l({...e,availableWidth:B,availableHeight:T});const M=await n.getDimensions(a.floating);return v!==M.width||x!==M.height?{reset:{rects:!0}}:{}}}};function Vn(){return typeof window<"u"}function kr(t){return Yu(t)?(t.nodeName||"").toLowerCase():"#document"}function Ye(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Fs(t){var e;return(e=(Yu(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Yu(t){return Vn()?t instanceof Node||t instanceof Ye(t).Node:!1}function gs(t){return Vn()?t instanceof Element||t instanceof Ye(t).Element:!1}function ni(t){return Vn()?t instanceof HTMLElement||t instanceof Ye(t).HTMLElement:!1}function Bc(t){return!Vn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ye(t).ShadowRoot}function ko(t){const{overflow:e,overflowX:s,overflowY:i,display:r}=ms(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&r!=="inline"&&r!=="contents"}function zg(t){return/^(table|td|th)$/.test(kr(t))}function Nn(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const Vg=/transform|translate|scale|rotate|perspective|filter/,Ng=/paint|layout|strict|content/,Ti=t=>!!t&&t!=="none";let pa;function Fn(t){const e=gs(t)?ms(t):t;return Ti(e.transform)||Ti(e.translate)||Ti(e.scale)||Ti(e.rotate)||Ti(e.perspective)||!Vl()&&(Ti(e.backdropFilter)||Ti(e.filter))||Vg.test(e.willChange||"")||Ng.test(e.contain||"")}function Fg(t){let e=_i(t);for(;ni(e)&&!mr(e);){if(Fn(e))return e;if(Nn(e))return null;e=_i(e)}return null}function Vl(){return pa==null&&(pa=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),pa}function mr(t){return/^(html|body|#document)$/.test(kr(t))}function ms(t){return Ye(t).getComputedStyle(t)}function Bn(t){return gs(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function _i(t){if(kr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Bc(t)&&t.host||Fs(t);return Bc(e)?e.host:e}function Xu(t){const e=_i(t);return mr(e)?t.ownerDocument?t.ownerDocument.body:t.body:ni(e)&&ko(e)?e:Xu(e)}function no(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const r=Xu(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),n=Ye(r);if(o){const a=Ka(n);return e.concat(n,n.visualViewport||[],ko(r)?r:[],a&&s?no(a):[])}else return e.concat(r,no(r,[],s))}function Ka(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ju(t){const e=ms(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=ni(t),o=r?t.offsetWidth:s,n=r?t.offsetHeight:i,a=cn(s)!==o||cn(i)!==n;return a&&(s=o,i=n),{width:s,height:i,$:a}}function Nl(t){return gs(t)?t:t.contextElement}function ur(t){const e=Nl(t);if(!ni(e))return Ds(1);const s=e.getBoundingClientRect(),{width:i,height:r,$:o}=Ju(e);let n=(o?cn(s.width):s.width)/i,a=(o?cn(s.height):s.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Bg=Ds(0);function Qu(t){const e=Ye(t);return!Vl()||!e.visualViewport?Bg:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ug(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==Ye(t)?!1:e}function Hi(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const r=t.getBoundingClientRect(),o=Nl(t);let n=Ds(1);e&&(i?gs(i)&&(n=ur(i)):n=ur(t));const a=Ug(o,s,i)?Qu(o):Ds(0);let l=(r.left+a.x)/n.x,d=(r.top+a.y)/n.y,h=r.width/n.x,u=r.height/n.y;if(o){const p=Ye(o),g=i&&gs(i)?Ye(i):i;let v=p,x=Ka(v);for(;x&&i&&g!==v;){const I=ur(x),k=x.getBoundingClientRect(),_=ms(x),A=k.left+(x.clientLeft+parseFloat(_.paddingLeft))*I.x,b=k.top+(x.clientTop+parseFloat(_.paddingTop))*I.y;l*=I.x,d*=I.y,h*=I.x,u*=I.y,l+=A,d+=b,v=Ye(x),x=Ka(v)}}return un({width:h,height:u,x:l,y:d})}function Un(t,e){const s=Bn(t).scrollLeft;return e?e.left+s:Hi(Fs(t)).left+s}function Zu(t,e){const s=t.getBoundingClientRect(),i=s.left+e.scrollLeft-Un(t,s),r=s.top+e.scrollTop;return{x:i,y:r}}function Hg(t){let{elements:e,rect:s,offsetParent:i,strategy:r}=t;const o=r==="fixed",n=Fs(i),a=e?Nn(e.floating):!1;if(i===n||a&&o)return s;let l={scrollLeft:0,scrollTop:0},d=Ds(1);const h=Ds(0),u=ni(i);if((u||!u&&!o)&&((kr(i)!=="body"||ko(n))&&(l=Bn(i)),u)){const g=Hi(i);d=ur(i),h.x=g.x+i.clientLeft,h.y=g.y+i.clientTop}const p=n&&!u&&!o?Zu(n,l):Ds(0);return{width:s.width*d.x,height:s.height*d.y,x:s.x*d.x-l.scrollLeft*d.x+h.x+p.x,y:s.y*d.y-l.scrollTop*d.y+h.y+p.y}}function jg(t){return Array.from(t.getClientRects())}function Wg(t){const e=Fs(t),s=Bn(t),i=t.ownerDocument.body,r=We(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=We(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-s.scrollLeft+Un(t);const a=-s.scrollTop;return ms(i).direction==="rtl"&&(n+=We(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:n,y:a}}const Uc=25;function Kg(t,e){const s=Ye(t),i=Fs(t),r=s.visualViewport;let o=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){o=r.width,n=r.height;const h=Vl();(!h||h&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}const d=Un(i);if(d<=0){const h=i.ownerDocument,u=h.body,p=getComputedStyle(u),g=h.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,v=Math.abs(i.clientWidth-u.clientWidth-g);v<=Uc&&(o-=v)}else d<=Uc&&(o+=d);return{width:o,height:n,x:a,y:l}}function qg(t,e){const s=Hi(t,!0,e==="fixed"),i=s.top+t.clientTop,r=s.left+t.clientLeft,o=ni(t)?ur(t):Ds(1),n=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,d=i*o.y;return{width:n,height:a,x:l,y:d}}function Hc(t,e,s){let i;if(e==="viewport")i=Kg(t,s);else if(e==="document")i=Wg(Fs(t));else if(gs(e))i=qg(e,s);else{const r=Qu(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return un(i)}function th(t,e){const s=_i(t);return s===e||!gs(s)||mr(s)?!1:ms(s).position==="fixed"||th(s,e)}function Gg(t,e){const s=e.get(t);if(s)return s;let i=no(t,[],!1).filter(a=>gs(a)&&kr(a)!=="body"),r=null;const o=ms(t).position==="fixed";let n=o?_i(t):t;for(;gs(n)&&!mr(n);){const a=ms(n),l=Fn(n);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&(r.position==="absolute"||r.position==="fixed")||ko(n)&&!l&&th(t,n))?i=i.filter(h=>h!==n):r=a,n=_i(n)}return e.set(t,i),i}function Yg(t){let{element:e,boundary:s,rootBoundary:i,strategy:r}=t;const n=[...s==="clippingAncestors"?Nn(e)?[]:Gg(e,this._c):[].concat(s),i],a=Hc(e,n[0],r);let l=a.top,d=a.right,h=a.bottom,u=a.left;for(let p=1;p<n.length;p++){const g=Hc(e,n[p],r);l=We(g.top,l),d=yi(g.right,d),h=yi(g.bottom,h),u=We(g.left,u)}return{width:d-u,height:h-l,x:u,y:l}}function Xg(t){const{width:e,height:s}=Ju(t);return{width:e,height:s}}function Jg(t,e,s){const i=ni(e),r=Fs(e),o=s==="fixed",n=Hi(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Ds(0);function d(){l.x=Un(r)}if(i||!i&&!o)if((kr(e)!=="body"||ko(r))&&(a=Bn(e)),i){const g=Hi(e,!0,o,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else r&&d();o&&!i&&r&&d();const h=r&&!i&&!o?Zu(r,a):Ds(0),u=n.left+a.scrollLeft-l.x-h.x,p=n.top+a.scrollTop-l.y-h.y;return{x:u,y:p,width:n.width,height:n.height}}function fa(t){return ms(t).position==="static"}function jc(t,e){if(!ni(t)||ms(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return Fs(t)===s&&(s=s.ownerDocument.body),s}function eh(t,e){const s=Ye(t);if(Nn(t))return s;if(!ni(t)){let r=_i(t);for(;r&&!mr(r);){if(gs(r)&&!fa(r))return r;r=_i(r)}return s}let i=jc(t,e);for(;i&&zg(i)&&fa(i);)i=jc(i,e);return i&&mr(i)&&fa(i)&&!Fn(i)?s:i||Fg(t)||s}const Qg=async function(t){const e=this.getOffsetParent||eh,s=this.getDimensions,i=await s(t.floating);return{reference:Jg(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Zg(t){return ms(t).direction==="rtl"}const sn={convertOffsetParentRelativeRectToViewportRelativeRect:Hg,getDocumentElement:Fs,getClippingRect:Yg,getOffsetParent:eh,getElementRects:Qg,getClientRects:jg,getDimensions:Xg,getScale:ur,isElement:gs,isRTL:Zg};function sh(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function tm(t,e){let s=null,i;const r=Fs(t);function o(){var a;clearTimeout(i),(a=s)==null||a.disconnect(),s=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const d=t.getBoundingClientRect(),{left:h,top:u,width:p,height:g}=d;if(a||e(),!p||!g)return;const v=zo(u),x=zo(r.clientWidth-(h+p)),I=zo(r.clientHeight-(u+g)),k=zo(h),A={rootMargin:-v+"px "+-x+"px "+-I+"px "+-k+"px",threshold:We(0,yi(1,l))||1};let b=!0;function E(O){const T=O[0].intersectionRatio;if(T!==l){if(!b)return n();T?n(!1,T):i=setTimeout(()=>{n(!1,1e-7)},1e3)}T===1&&!sh(d,t.getBoundingClientRect())&&n(),b=!1}try{s=new IntersectionObserver(E,{...A,root:r.ownerDocument})}catch{s=new IntersectionObserver(E,A)}s.observe(t)}return n(!0),o}function em(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=Nl(t),h=r||o?[...d?no(d):[],...e?no(e):[]]:[];h.forEach(k=>{r&&k.addEventListener("scroll",s,{passive:!0}),o&&k.addEventListener("resize",s)});const u=d&&a?tm(d,s):null;let p=-1,g=null;n&&(g=new ResizeObserver(k=>{let[_]=k;_&&_.target===d&&g&&e&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var A;(A=g)==null||A.observe(e)})),s()}),d&&!l&&g.observe(d),e&&g.observe(e));let v,x=l?Hi(t):null;l&&I();function I(){const k=Hi(t);x&&!sh(x,k)&&s(),x=k,v=requestAnimationFrame(I)}return s(),()=>{var k;h.forEach(_=>{r&&_.removeEventListener("scroll",s),o&&_.removeEventListener("resize",s)}),u?.(),(k=g)==null||k.disconnect(),g=null,l&&cancelAnimationFrame(v)}}const sm=Mg,im=Pg,rm=Lg,Wc=Dg,om=Ig,nm=(t,e,s)=>{const i=new Map,r={platform:sn,...s},o={...r.platform,_c:i};return Tg(t,e,{...r,platform:o})};const nt=wo(class extends xo{constructor(t){if(super(t),t.type!==Ls.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return qe}});function am(t){return lm(t)}function ga(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function lm(t){for(let e=t;e;e=ga(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ga(t);e;e=ga(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||Fn(s)||e.tagName==="BODY"))return e}return null}function cm(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var Lt=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,o=0,n=0,a=0,l=0,d=0,h=0;s?t.top<e.top?(i=t.left,r=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,d=e.right,h=e.top):(i=e.left,r=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,d=t.right,h=t.top):t.left<e.left?(i=t.right,r=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,d=e.left,h=e.bottom):(i=e.right,r=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,d=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||cm(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=em(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[sm({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Wc({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=r?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(rm({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(im({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Wc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(om({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>sn.getOffsetParent(s,am):sn.getOffsetParent;nm(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:vo(oi({},sn),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:r,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,d=r.arrow.y;let h="",u="",p="",g="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?v:"",g=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":v,g=n?v:"",p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",h=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:p,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${nt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${nt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Lt.styles=[at,mg];c([K(".popup")],Lt.prototype,"popup",2);c([K(".popup__arrow")],Lt.prototype,"arrowEl",2);c([f()],Lt.prototype,"anchor",2);c([f({type:Boolean,reflect:!0})],Lt.prototype,"active",2);c([f({reflect:!0})],Lt.prototype,"placement",2);c([f({reflect:!0})],Lt.prototype,"strategy",2);c([f({type:Number})],Lt.prototype,"distance",2);c([f({type:Number})],Lt.prototype,"skidding",2);c([f({type:Boolean})],Lt.prototype,"arrow",2);c([f({attribute:"arrow-placement"})],Lt.prototype,"arrowPlacement",2);c([f({attribute:"arrow-padding",type:Number})],Lt.prototype,"arrowPadding",2);c([f({type:Boolean})],Lt.prototype,"flip",2);c([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],Lt.prototype,"flipFallbackPlacements",2);c([f({attribute:"flip-fallback-strategy"})],Lt.prototype,"flipFallbackStrategy",2);c([f({type:Object})],Lt.prototype,"flipBoundary",2);c([f({attribute:"flip-padding",type:Number})],Lt.prototype,"flipPadding",2);c([f({type:Boolean})],Lt.prototype,"shift",2);c([f({type:Object})],Lt.prototype,"shiftBoundary",2);c([f({attribute:"shift-padding",type:Number})],Lt.prototype,"shiftPadding",2);c([f({attribute:"auto-size"})],Lt.prototype,"autoSize",2);c([f()],Lt.prototype,"sync",2);c([f({type:Object})],Lt.prototype,"autoSizeBoundary",2);c([f({attribute:"auto-size-padding",type:Number})],Lt.prototype,"autoSizePadding",2);c([f({attribute:"hover-bridge",type:Boolean})],Lt.prototype,"hoverBridge",2);var dm=st`
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
`,Co=class extends Q{constructor(){super(...arguments),this.localize=new Et(this)}render(){return N`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Co.styles=[at,dm];var De=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function um(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let s="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var qa="";function Ga(t){qa=t}function hm(t=""){if(!qa){const e=[...document.getElementsByTagName("script")],s=e.find(i=>i.hasAttribute("data-shoelace"));if(s)Ga(s.getAttribute("data-shoelace"));else{const i=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),Ga(r.split("/").slice(0,-1).join("/"))}}return qa.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var pm={name:"default",resolver:t=>hm(`assets/icons/${t}.svg`)},fm=pm,Kc={caret:`
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
  `},gm={name:"system",resolver:t=>t in Kc?`data:image/svg+xml,${encodeURIComponent(Kc[t])}`:""},mm=gm,bm=[fm,mm],Ya=[];function ym(t){Ya.push(t)}function vm(t){Ya=Ya.filter(e=>e!==t)}function qc(t){return bm.find(e=>e.name===t)}var _m=st`
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
`;function j(t,e){const s=oi({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:o}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{const d=l;if(a.has(d)){const h=a.get(d),u=this[d];h!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),o.call(this,a)}}}var Lr=Symbol(),Vo=Symbol(),ma,ba=new Map,Dt=class extends Q{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var s;let i;if(e?.spriteSheet)return this.svg=N`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Lr:Vo}catch{return Vo}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(((s=o?.tagName)==null?void 0:s.toLowerCase())!=="svg")return Lr;ma||(ma=new DOMParser);const a=ma.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Lr}catch{return Lr}}connectedCallback(){super.connectedCallback(),ym(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),vm(this)}getIconSource(){const t=qc(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:s}=this.getIconSource(),i=s?qc(this.library):void 0;if(!e){this.svg=null;return}let r=ba.get(e);if(r||(r=this.resolveIcon(e,i),ba.set(e,r)),!this.initialRender)return;const o=await r;if(o===Vo&&ba.delete(e),e===this.getIconSource().url){if(og(o)){if(this.svg=o,i){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&n&&i.mutator(n)}return}switch(o){case Vo:case Lr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Dt.styles=[at,_m];c([it()],Dt.prototype,"svg",2);c([f({reflect:!0})],Dt.prototype,"name",2);c([f()],Dt.prototype,"src",2);c([f()],Dt.prototype,"label",2);c([f({reflect:!0})],Dt.prototype,"library",2);c([j("label")],Dt.prototype,"handleLabelChange",1);c([j(["name","src","library"])],Dt.prototype,"setIcon",1);var Ze=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new De(this,"submenu"),this.submenuController=new gg(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return um(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return N`
      <div
        id="anchor"
        part="base"
        class=${nt({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
    `}};Ze.styles=[at,rg];Ze.dependencies={"sl-icon":Dt,"sl-popup":Lt,"sl-spinner":Co};c([K("slot:not([name])")],Ze.prototype,"defaultSlot",2);c([K(".menu-item")],Ze.prototype,"menuItem",2);c([f()],Ze.prototype,"type",2);c([f({type:Boolean,reflect:!0})],Ze.prototype,"checked",2);c([f()],Ze.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Ze.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);c([j("checked")],Ze.prototype,"handleCheckedChange",1);c([j("disabled")],Ze.prototype,"handleDisabledChange",1);c([j("type")],Ze.prototype,"handleTypeChange",1);Ze.define("sl-menu-item");Co.define("sl-spinner");var wm=st`
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
`;function*Fl(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*tg(Fl(t.shadowRoot.activeElement))))}function ih(){return[...Fl()].pop()}var Gc=new WeakMap;function rh(t){let e=Gc.get(t);return e||(e=window.getComputedStyle(t,null),Gc.set(t,e)),e}function xm(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=rh(t);return e.visibility!=="hidden"&&e.display!=="none"}function km(t){const e=rh(t),{overflowY:s,overflowX:i}=e;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&s==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Cm(t){const e=t.tagName.toLowerCase(),s=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const o=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===t:o.querySelector(n)===t}return xm(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:km(t):!1}function Sm(t){var e,s;const i=Xa(t),r=(e=i[0])!=null?e:null,o=(s=i[i.length-1])!=null?s:null;return{start:r,end:o}}function Em(t,e){var s;return((s=t.getRootNode({composed:!0}))==null?void 0:s.host)!==e}function Xa(t){const e=new WeakMap,s=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!s.includes(r)&&Cm(r)&&s.push(r),r instanceof HTMLSlotElement&&Em(r,t)&&r.assignedElements({flatten:!0}).forEach(o=>{i(o)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const o of r.children)i(o)}return i(t),s.sort((r,o)=>{const n=Number(r.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var oh=new Map,Am=new WeakMap;function $m(t){return t??{keyframes:[],options:{duration:0}}}function Yc(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ot(t,e){oh.set(t,$m(e))}function Ht(t,e,s){const i=Am.get(t);if(i?.[e])return Yc(i[e],s.dir);const r=oh.get(e);return r?Yc(r,s.dir):{keyframes:[],options:{duration:0}}}function Pe(t,e){return new Promise(s=>{function i(r){r.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}function Zt(t,e,s){return new Promise(i=>{if(s?.duration===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,vo(oi({},s),{duration:Ja()?0:s.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Xc(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Ja(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ie(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{e.cancel(),requestAnimationFrame(s)})))}function hn(t,e){return t.map(s=>vo(oi({},s),{height:s.height==="auto"?`${e}px`:s.height}))}const X=t=>t??Bt;var ke=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(i,r)=>{if(!i)return null;const o=i.closest(r);if(o)return o;const n=i.getRootNode();return n instanceof ShadowRoot?s(n.host,r):null};setTimeout(()=>{var i;const r=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?ih():document.activeElement;(!this.containingElement||s(r,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),i=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Sm(i).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pe(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ie(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Ht(this,"dropdown.show",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ie(this);const{keyframes:t,options:e}=Ht(this,"dropdown.hide",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return N`
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
        sync=${X(this.sync?this.sync:void 0)}
        class=${nt({dropdown:!0,"dropdown--open":this.open})}
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
    `}};ke.styles=[at,wm];ke.dependencies={"sl-popup":Lt};c([K(".dropdown")],ke.prototype,"popup",2);c([K(".dropdown__trigger")],ke.prototype,"trigger",2);c([K(".dropdown__panel")],ke.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],ke.prototype,"open",2);c([f({reflect:!0})],ke.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);c([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ke.prototype,"stayOpenOnSelect",2);c([f({attribute:!1})],ke.prototype,"containingElement",2);c([f({type:Number})],ke.prototype,"distance",2);c([f({type:Number})],ke.prototype,"skidding",2);c([f({type:Boolean})],ke.prototype,"hoist",2);c([f({reflect:!0})],ke.prototype,"sync",2);c([j("open",{waitUntilFirstUpdate:!0})],ke.prototype,"handleOpenChange",1);Ot("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ot("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ke.define("sl-dropdown");var Tm=st`
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
`;const nh=Symbol.for(""),Im=t=>{if(t?.r===nh)return t?._$litStatic$},pn=(t,...e)=>({_$litStatic$:e.reduce((s,i,r)=>s+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:nh}),Jc=new Map,Lm=t=>(e,...s)=>{const i=s.length;let r,o;const n=[],a=[];let l,d=0,h=!1;for(;d<i;){for(l=e[d];d<i&&(o=s[d],(r=Im(o))!==void 0);)l+=r+e[++d],h=!0;d!==i&&a.push(o),n.push(l),d++}if(d===i&&n.push(e[i]),h){const u=n.join("$$lit$$");(e=Jc.get(u))===void 0&&(n.raw=n,Jc.set(u,e=n)),s=a}return t(e,...s)},Wr=Lm(N);var de=class extends Q{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?pn`a`:pn`button`;return Wr`
      <${e}
        part="base"
        class=${nt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${X(t?void 0:this.disabled)}
        type=${X(t?void 0:"button")}
        href=${X(t?this.href:void 0)}
        target=${X(t?this.target:void 0)}
        download=${X(t?this.download:void 0)}
        rel=${X(t&&this.target?"noreferrer noopener":void 0)}
        role=${X(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${X(this.name)}
          library=${X(this.library)}
          src=${X(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};de.styles=[at,Tm];de.dependencies={"sl-icon":Dt};c([K(".icon-button")],de.prototype,"button",2);c([it()],de.prototype,"hasFocus",2);c([f()],de.prototype,"name",2);c([f()],de.prototype,"library",2);c([f()],de.prototype,"src",2);c([f()],de.prototype,"href",2);c([f()],de.prototype,"target",2);c([f()],de.prototype,"download",2);c([f()],de.prototype,"label",2);c([f({type:Boolean,reflect:!0})],de.prototype,"disabled",2);de.define("sl-icon-button");var Om=st`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,qi=class extends Q{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Or(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Or(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Or(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Or(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),i=Or(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",s===0),i.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",s===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return N`
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
    `}};qi.styles=[at,Om];c([K("slot")],qi.prototype,"defaultSlot",2);c([it()],qi.prototype,"disableRole",2);c([f()],qi.prototype,"label",2);function Or(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}qi.define("sl-button-group");var Rr=new WeakMap,Mr=new WeakMap,Pr=new WeakMap,ya=new WeakSet,No=new WeakMap,ai=class{constructor(t,e){this.handleFormData=s=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{s.formData.append(r,a.toString())}):s.formData.append(r,o.toString()))},this.handleFormSubmit=s=>{var i;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Rr.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),No.set(this.host,[])},this.handleInteraction=s=>{const i=No.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=oi({form:s=>{const i=s.form;if(i){const o=s.getRootNode().querySelector(`#${i}`);if(o)return o}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),No.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),No.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Rr.has(this.form)?Rr.get(this.form).add(this.host):Rr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Mr.has(this.form)||(Mr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Pr.has(this.form)||(Pr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Rr.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Mr.has(this.form)&&(this.form.reportValidity=Mr.get(this.form),Mr.delete(this.form)),Pr.has(this.form)&&(this.form.checkValidity=Pr.get(this.form),Pr.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?ya.add(t):ya.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&s.setAttribute(i,e.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!ya.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Hn=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Rm=Object.freeze(vo(oi({},Hn),{valid:!1,valueMissing:!0})),Mm=Object.freeze(vo(oi({},Hn),{valid:!1,customError:!0})),ah=st`
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
`,Rt=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new De(this,"[default]","prefix","suffix"),this.localize=new Et(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Hn}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?pn`a`:pn`button`;return Wr`
      <${e}
        part="base"
        class=${nt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${X(t?void 0:this.disabled)}
        type=${X(t?void 0:this.type)}
        title=${this.title}
        name=${X(t?void 0:this.name)}
        value=${X(t?void 0:this.value)}
        href=${X(t&&!this.disabled?this.href:void 0)}
        target=${X(t?this.target:void 0)}
        download=${X(t?this.download:void 0)}
        rel=${X(t?this.rel:void 0)}
        role=${X(t?void 0:"button")}
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
        ${this.caret?Wr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Wr`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Rt.styles=[at,ah];Rt.dependencies={"sl-icon":Dt,"sl-spinner":Co};c([K(".button")],Rt.prototype,"button",2);c([it()],Rt.prototype,"hasFocus",2);c([it()],Rt.prototype,"invalid",2);c([f()],Rt.prototype,"title",2);c([f({reflect:!0})],Rt.prototype,"variant",2);c([f({reflect:!0})],Rt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Rt.prototype,"caret",2);c([f({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Rt.prototype,"loading",2);c([f({type:Boolean,reflect:!0})],Rt.prototype,"outline",2);c([f({type:Boolean,reflect:!0})],Rt.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],Rt.prototype,"circle",2);c([f()],Rt.prototype,"type",2);c([f()],Rt.prototype,"name",2);c([f()],Rt.prototype,"value",2);c([f()],Rt.prototype,"href",2);c([f()],Rt.prototype,"target",2);c([f()],Rt.prototype,"rel",2);c([f()],Rt.prototype,"download",2);c([f()],Rt.prototype,"form",2);c([f({attribute:"formaction"})],Rt.prototype,"formAction",2);c([f({attribute:"formenctype"})],Rt.prototype,"formEnctype",2);c([f({attribute:"formmethod"})],Rt.prototype,"formMethod",2);c([f({attribute:"formnovalidate",type:Boolean})],Rt.prototype,"formNoValidate",2);c([f({attribute:"formtarget"})],Rt.prototype,"formTarget",2);c([j("disabled",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleDisabledChange",1);Rt.define("sl-button");var Pm=st`
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
`,Cr=(t="value")=>(e,s)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,n,a){var l;const d=i.getPropertyOptions(t),h=typeof d.attribute=="string"?d.attribute:t;if(o===h){const u=d.converter||fr,g=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:fr.fromAttribute)(a,d.type);this[t]!==g&&(this[s]=g)}r.call(this,o,n,a)}},Gi=st`
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
`;const ji=wo(class extends xo{constructor(t){if(super(t),t.type!==Ls.PROPERTY&&t.type!==Ls.ATTRIBUTE&&t.type!==Ls.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Bu(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===qe||e===Bt)return e;const s=t.element,i=t.name;if(t.type===Ls.PROPERTY){if(e===s[i])return qe}else if(t.type===Ls.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return qe}else if(t.type===Ls.ATTRIBUTE&&s.getAttribute(i)===e+"")return qe;return ag(t),e}});var Ie=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new De(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return N`
      <div
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${nt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${X(this.value)}
            .checked=${ji(this.checked)}
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
    `}};Ie.styles=[at,Gi,Pm];c([K('input[type="checkbox"]')],Ie.prototype,"input",2);c([it()],Ie.prototype,"hasFocus",2);c([f()],Ie.prototype,"title",2);c([f()],Ie.prototype,"name",2);c([f()],Ie.prototype,"value",2);c([f({reflect:!0})],Ie.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],Ie.prototype,"checked",2);c([Cr("checked")],Ie.prototype,"defaultChecked",2);c([f({reflect:!0})],Ie.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Ie.prototype,"required",2);c([f({attribute:"help-text"})],Ie.prototype,"helpText",2);c([j("checked",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleCheckedChange",1);c([j("disabled",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleDisabledChange",1);Ie.define("sl-switch");var Dm=st`
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
`,ys=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ie(this.body);const{keyframes:e,options:s}=Ht(this,"details.show",{dir:this.localize.dir()});await Zt(this.body,hn(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ie(this.body);const{keyframes:e,options:s}=Ht(this,"details.hide",{dir:this.localize.dir()});await Zt(this.body,hn(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Pe(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Pe(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return N`
      <details
        part="base"
        class=${nt({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
    `}};ys.styles=[at,Dm];ys.dependencies={"sl-icon":Dt};c([K(".details")],ys.prototype,"details",2);c([K(".details__header")],ys.prototype,"header",2);c([K(".details__body")],ys.prototype,"body",2);c([K(".details__expand-icon-slot")],ys.prototype,"expandIconSlot",2);c([f({type:Boolean,reflect:!0})],ys.prototype,"open",2);c([f()],ys.prototype,"summary",2);c([f({type:Boolean,reflect:!0})],ys.prototype,"disabled",2);c([j("open",{waitUntilFirstUpdate:!0})],ys.prototype,"handleOpenChange",1);Ot("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Ot("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ys.define("sl-details");var zm=st`
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
`,mt=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new De(this,"help-text","label"),this.localize=new Et(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return N`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${nt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${X(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${X(this.placeholder)}
              minlength=${X(this.minlength)}
              maxlength=${X(this.maxlength)}
              min=${X(this.min)}
              max=${X(this.max)}
              step=${X(this.step)}
              .value=${ji(this.value)}
              autocapitalize=${X(this.autocapitalize)}
              autocomplete=${X(this.autocomplete)}
              autocorrect=${X(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${X(this.pattern)}
              enterkeyhint=${X(this.enterkeyhint)}
              inputmode=${X(this.inputmode)}
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
    `}};mt.styles=[at,Gi,zm];mt.dependencies={"sl-icon":Dt};c([K(".input__control")],mt.prototype,"input",2);c([it()],mt.prototype,"hasFocus",2);c([f()],mt.prototype,"title",2);c([f({reflect:!0})],mt.prototype,"type",2);c([f()],mt.prototype,"name",2);c([f()],mt.prototype,"value",2);c([Cr()],mt.prototype,"defaultValue",2);c([f({reflect:!0})],mt.prototype,"size",2);c([f({type:Boolean,reflect:!0})],mt.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],mt.prototype,"pill",2);c([f()],mt.prototype,"label",2);c([f({attribute:"help-text"})],mt.prototype,"helpText",2);c([f({type:Boolean})],mt.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);c([f()],mt.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],mt.prototype,"readonly",2);c([f({attribute:"password-toggle",type:Boolean})],mt.prototype,"passwordToggle",2);c([f({attribute:"password-visible",type:Boolean})],mt.prototype,"passwordVisible",2);c([f({attribute:"no-spin-buttons",type:Boolean})],mt.prototype,"noSpinButtons",2);c([f({reflect:!0})],mt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],mt.prototype,"required",2);c([f()],mt.prototype,"pattern",2);c([f({type:Number})],mt.prototype,"minlength",2);c([f({type:Number})],mt.prototype,"maxlength",2);c([f()],mt.prototype,"min",2);c([f()],mt.prototype,"max",2);c([f()],mt.prototype,"step",2);c([f()],mt.prototype,"autocapitalize",2);c([f()],mt.prototype,"autocorrect",2);c([f()],mt.prototype,"autocomplete",2);c([f({type:Boolean})],mt.prototype,"autofocus",2);c([f()],mt.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],mt.prototype,"spellcheck",2);c([f()],mt.prototype,"inputmode",2);c([j("disabled",{waitUntilFirstUpdate:!0})],mt.prototype,"handleDisabledChange",1);c([j("step",{waitUntilFirstUpdate:!0})],mt.prototype,"handleStepChange",1);c([j("value",{waitUntilFirstUpdate:!0})],mt.prototype,"handleValueChange",1);mt.define("sl-input");var Vm=st`
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
`,At=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new De(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i="preserve"){const r=e??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(t,r,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return N`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${nt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${X(this.name)}
              .value=${ji(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${X(this.placeholder)}
              rows=${X(this.rows)}
              minlength=${X(this.minlength)}
              maxlength=${X(this.maxlength)}
              autocapitalize=${X(this.autocapitalize)}
              autocorrect=${X(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${X(this.spellcheck)}
              enterkeyhint=${X(this.enterkeyhint)}
              inputmode=${X(this.inputmode)}
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
    `}};At.styles=[at,Gi,Vm];c([K(".textarea__control")],At.prototype,"input",2);c([K(".textarea__size-adjuster")],At.prototype,"sizeAdjuster",2);c([it()],At.prototype,"hasFocus",2);c([f()],At.prototype,"title",2);c([f()],At.prototype,"name",2);c([f()],At.prototype,"value",2);c([f({reflect:!0})],At.prototype,"size",2);c([f({type:Boolean,reflect:!0})],At.prototype,"filled",2);c([f()],At.prototype,"label",2);c([f({attribute:"help-text"})],At.prototype,"helpText",2);c([f()],At.prototype,"placeholder",2);c([f({type:Number})],At.prototype,"rows",2);c([f()],At.prototype,"resize",2);c([f({type:Boolean,reflect:!0})],At.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],At.prototype,"readonly",2);c([f({reflect:!0})],At.prototype,"form",2);c([f({type:Boolean,reflect:!0})],At.prototype,"required",2);c([f({type:Number})],At.prototype,"minlength",2);c([f({type:Number})],At.prototype,"maxlength",2);c([f()],At.prototype,"autocapitalize",2);c([f()],At.prototype,"autocorrect",2);c([f()],At.prototype,"autocomplete",2);c([f({type:Boolean})],At.prototype,"autofocus",2);c([f()],At.prototype,"enterkeyhint",2);c([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],At.prototype,"spellcheck",2);c([f()],At.prototype,"inputmode",2);c([Cr()],At.prototype,"defaultValue",2);c([j("disabled",{waitUntilFirstUpdate:!0})],At.prototype,"handleDisabledChange",1);c([j("rows",{waitUntilFirstUpdate:!0})],At.prototype,"handleRowsChange",1);c([j("value",{waitUntilFirstUpdate:!0})],At.prototype,"handleValueChange",1);At.define("sl-textarea");var Nm=st`
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
`,xi=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return N`
      <span
        part="base"
        class=${nt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};xi.styles=[at,Nm];xi.dependencies={"sl-icon-button":de};c([f({reflect:!0})],xi.prototype,"variant",2);c([f({reflect:!0})],xi.prototype,"size",2);c([f({type:Boolean,reflect:!0})],xi.prototype,"pill",2);c([f({type:Boolean})],xi.prototype,"removable",2);var Fm=st`
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
`;function Bm(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Qa=new Set;function Um(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Hm(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Kr(t){if(Qa.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Um()+Hm();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),e<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function qr(t){Qa.delete(t),Qa.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Za(t,e,s="vertical",i="smooth"){const r=Bm(t,e),o=r.top+e.scrollTop,n=r.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,h=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(o<d?e.scrollTo({top:o,behavior:i}):o+t.clientHeight>h&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:i}))}class tl extends xo{constructor(e){if(super(e),this.it=Bt,e.type!==Ls.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Bt||e==null)return this._t=void 0,this.it=e;if(e===qe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}tl.directiveName="unsafeHTML",tl.resultType=1;const rn=wo(tl);var vt=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new De(this,"help-text","label"),this.localize=new Et(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>N`
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
          ${typeof s=="string"?rn(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return N`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return N``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ie(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Ht(this,"select.show",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.currentOption&&Za(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ie(this);const{keyframes:t,options:e}=Ht(this,"select.hide",{dir:this.localize.dir()});await Zt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Pe(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Pe(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return N`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${nt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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
    `}};vt.styles=[at,Gi,Fm];vt.dependencies={"sl-icon":Dt,"sl-popup":Lt,"sl-tag":xi};c([K(".select")],vt.prototype,"popup",2);c([K(".select__combobox")],vt.prototype,"combobox",2);c([K(".select__display-input")],vt.prototype,"displayInput",2);c([K(".select__value-input")],vt.prototype,"valueInput",2);c([K(".select__listbox")],vt.prototype,"listbox",2);c([it()],vt.prototype,"hasFocus",2);c([it()],vt.prototype,"displayLabel",2);c([it()],vt.prototype,"currentOption",2);c([it()],vt.prototype,"selectedOptions",2);c([it()],vt.prototype,"valueHasChanged",2);c([f()],vt.prototype,"name",2);c([it()],vt.prototype,"value",1);c([f({attribute:"value"})],vt.prototype,"defaultValue",2);c([f({reflect:!0})],vt.prototype,"size",2);c([f()],vt.prototype,"placeholder",2);c([f({type:Boolean,reflect:!0})],vt.prototype,"multiple",2);c([f({attribute:"max-options-visible",type:Number})],vt.prototype,"maxOptionsVisible",2);c([f({type:Boolean,reflect:!0})],vt.prototype,"disabled",2);c([f({type:Boolean})],vt.prototype,"clearable",2);c([f({type:Boolean,reflect:!0})],vt.prototype,"open",2);c([f({type:Boolean})],vt.prototype,"hoist",2);c([f({type:Boolean,reflect:!0})],vt.prototype,"filled",2);c([f({type:Boolean,reflect:!0})],vt.prototype,"pill",2);c([f()],vt.prototype,"label",2);c([f({reflect:!0})],vt.prototype,"placement",2);c([f({attribute:"help-text"})],vt.prototype,"helpText",2);c([f({reflect:!0})],vt.prototype,"form",2);c([f({type:Boolean,reflect:!0})],vt.prototype,"required",2);c([f()],vt.prototype,"getTag",2);c([j("disabled",{waitUntilFirstUpdate:!0})],vt.prototype,"handleDisabledChange",1);c([j(["defaultValue","value"],{waitUntilFirstUpdate:!0})],vt.prototype,"handleValueChange",1);c([j("open",{waitUntilFirstUpdate:!0})],vt.prototype,"handleOpenChange",1);Ot("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ot("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});vt.define("sl-select");var jm=st`
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
`,us=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return N`
      <div
        part="base"
        class=${nt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};us.styles=[at,jm];us.dependencies={"sl-icon":Dt};c([K(".option__label")],us.prototype,"defaultSlot",2);c([it()],us.prototype,"current",2);c([it()],us.prototype,"selected",2);c([it()],us.prototype,"hasHover",2);c([f({reflect:!0})],us.prototype,"value",2);c([f({type:Boolean,reflect:!0})],us.prototype,"disabled",2);c([j("disabled")],us.prototype,"handleDisabledChange",1);c([j("selected")],us.prototype,"handleSelectedChange",1);c([j("value")],us.prototype,"handleValueChange",1);us.define("sl-option");var Dr=[],lh=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=ih();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=Xa(this.element);let o=r.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=r.length?o=0:o+n<0?o=r.length-1:o+=n,this.previousFocus=this.currentFocus;const a=r[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const l=[...Fl()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Dr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Dr=Dr.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Dr[Dr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Xa(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],i=this.tabDirection==="forward"?e:s;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Wm=st`
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
`,Bl=t=>{var e;const{activeElement:s}=document;s&&t.contains(s)&&((e=document.activeElement)==null||e.blur())},Bs=class extends Q{constructor(){super(...arguments),this.hasSlotController=new De(this,"footer"),this.localize=new Et(this),this.modal=new lh(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Kr(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),qr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Ht(this,"dialog.denyClose",{dir:this.localize.dir()});Zt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Kr(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ie(this.dialog),ie(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ht(this,"dialog.show",{dir:this.localize.dir()}),s=Ht(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Zt(this.panel,e.keyframes,e.options),Zt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Bl(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ie(this.dialog),ie(this.overlay)]);const t=Ht(this,"dialog.hide",{dir:this.localize.dir()}),e=Ht(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Zt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Zt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,qr(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pe(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${nt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${X(this.noHeader?this.label:void 0)}
          aria-labelledby=${X(this.noHeader?void 0:"title")}
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
    `}};Bs.styles=[at,Wm];Bs.dependencies={"sl-icon-button":de};c([K(".dialog")],Bs.prototype,"dialog",2);c([K(".dialog__panel")],Bs.prototype,"panel",2);c([K(".dialog__overlay")],Bs.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],Bs.prototype,"open",2);c([f({reflect:!0})],Bs.prototype,"label",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],Bs.prototype,"noHeader",2);c([j("open",{waitUntilFirstUpdate:!0})],Bs.prototype,"handleOpenChange",1);Ot("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ot("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ot("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Ot("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ot("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Bs.define("sl-dialog");var Km=st`
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
`,ts=class Oi extends Q{constructor(){super(...arguments),this.hasSlotController=new De(this,"icon","suffix"),this.localize=new Et(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,s="100%",i="0";this.countdownAnimation=e.animate([{width:s},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ie(this.base),this.base.hidden=!1;const{keyframes:e,options:s}=Ht(this,"alert.show",{dir:this.localize.dir()});await Zt(this.base,e,s),this.emit("sl-after-show")}else{Bl(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ie(this.base);const{keyframes:e,options:s}=Ht(this,"alert.hide",{dir:this.localize.dir()});await Zt(this.base,e,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pe(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Oi.toastStack.parentElement===null&&document.body.append(Oi.toastStack),Oi.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Oi.toastStack.removeChild(this),e(),Oi.toastStack.querySelector("sl-alert")===null&&Oi.toastStack.remove()},{once:!0})})}render(){return N`
      <div
        part="base"
        class=${nt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
                class=${nt({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};ts.styles=[at,Km];ts.dependencies={"sl-icon-button":de};c([K('[part~="base"]')],ts.prototype,"base",2);c([K(".alert__countdown-elapsed")],ts.prototype,"countdownElement",2);c([f({type:Boolean,reflect:!0})],ts.prototype,"open",2);c([f({type:Boolean,reflect:!0})],ts.prototype,"closable",2);c([f({reflect:!0})],ts.prototype,"variant",2);c([f({type:Number})],ts.prototype,"duration",2);c([f({type:String,reflect:!0})],ts.prototype,"countdown",2);c([it()],ts.prototype,"remainingTime",2);c([j("open",{waitUntilFirstUpdate:!0})],ts.prototype,"handleOpenChange",1);c([j("duration")],ts.prototype,"handleDurationChange",1);var qm=ts;Ot("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ot("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});qm.define("sl-alert");var Gm=st`
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
`,Ym=st`
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
`,ue=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new De(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return N`
      <div
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${nt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${X(this.value)}
            .indeterminate=${ji(this.indeterminate)}
            .checked=${ji(this.checked)}
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
    `}};ue.styles=[at,Gi,Ym];ue.dependencies={"sl-icon":Dt};c([K('input[type="checkbox"]')],ue.prototype,"input",2);c([it()],ue.prototype,"hasFocus",2);c([f()],ue.prototype,"title",2);c([f()],ue.prototype,"name",2);c([f()],ue.prototype,"value",2);c([f({reflect:!0})],ue.prototype,"size",2);c([f({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],ue.prototype,"checked",2);c([f({type:Boolean,reflect:!0})],ue.prototype,"indeterminate",2);c([Cr("checked")],ue.prototype,"defaultChecked",2);c([f({reflect:!0})],ue.prototype,"form",2);c([f({type:Boolean,reflect:!0})],ue.prototype,"required",2);c([f({attribute:"help-text"})],ue.prototype,"helpText",2);c([j("disabled",{waitUntilFirstUpdate:!0})],ue.prototype,"handleDisabledChange",1);c([j(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ue.prototype,"handleStateChange",1);function Qc(t,e,s){return t?e(t):s?.(t)}var te=class el extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ie(this.childrenContainer);const{keyframes:e,options:s}=Ht(this,"tree-item.collapse",{dir:this.localize.dir()});await Zt(this.childrenContainer,hn(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&el.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ie(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=Ht(this,"tree-item.expand",{dir:this.localize.dir()});await Zt(this.childrenContainer,hn(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>el.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return N`
      <div
        part="base"
        class="${nt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${nt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${Qc(this.loading,()=>N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Qc(this.selectable,()=>N`
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
                ?checked="${ji(this.selected)}"
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
    `}};te.styles=[at,Gm];te.dependencies={"sl-checkbox":ue,"sl-icon":Dt,"sl-spinner":Co};c([it()],te.prototype,"indeterminate",2);c([it()],te.prototype,"isLeaf",2);c([it()],te.prototype,"loading",2);c([it()],te.prototype,"selectable",2);c([f({type:Boolean,reflect:!0})],te.prototype,"expanded",2);c([f({type:Boolean,reflect:!0})],te.prototype,"selected",2);c([f({type:Boolean,reflect:!0})],te.prototype,"disabled",2);c([f({type:Boolean,reflect:!0})],te.prototype,"lazy",2);c([K("slot:not([name])")],te.prototype,"defaultSlot",2);c([K("slot[name=children]")],te.prototype,"childrenSlot",2);c([K(".tree-item__item")],te.prototype,"itemElement",2);c([K(".tree-item__children")],te.prototype,"childrenContainer",2);c([K(".tree-item__expand-button slot")],te.prototype,"expandButtonSlot",2);c([j("loading",{waitUntilFirstUpdate:!0})],te.prototype,"handleLoadingChange",1);c([j("disabled")],te.prototype,"handleDisabledChange",1);c([j("selected")],te.prototype,"handleSelectedChange",1);c([j("expanded",{waitUntilFirstUpdate:!0})],te.prototype,"handleExpandedChange",1);c([j("expanded",{waitUntilFirstUpdate:!0})],te.prototype,"handleExpandAnimation",1);c([j("lazy",{waitUntilFirstUpdate:!0})],te.prototype,"handleLazyChange",1);var Gr=te;Ot("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Ot("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Gr.define("sl-tree-item");var Xm=st`
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
`,ge=class extends Q{constructor(){super(),this.localize=new Et(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Xc(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Xc(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ie(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:i}=Ht(this,"tooltip.show",{dir:this.localize.dir()});await Zt(this.popup.popup,s,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ie(this.body);const{keyframes:s,options:i}=Ht(this,"tooltip.hide",{dir:this.localize.dir()});await Zt(this.popup.popup,s,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pe(this,"sl-after-hide")}render(){return N`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${nt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};ge.styles=[at,Xm];ge.dependencies={"sl-popup":Lt};c([K("slot:not([name])")],ge.prototype,"defaultSlot",2);c([K(".tooltip__body")],ge.prototype,"body",2);c([K("sl-popup")],ge.prototype,"popup",2);c([f()],ge.prototype,"content",2);c([f()],ge.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);c([f({type:Number})],ge.prototype,"distance",2);c([f({type:Boolean,reflect:!0})],ge.prototype,"open",2);c([f({type:Number})],ge.prototype,"skidding",2);c([f()],ge.prototype,"trigger",2);c([f({type:Boolean})],ge.prototype,"hoist",2);c([j("open",{waitUntilFirstUpdate:!0})],ge.prototype,"handleOpenChange",1);c([j(["content","distance","hoist","placement","skidding"])],ge.prototype,"handleOptionsChange",1);c([j("disabled")],ge.prototype,"handleDisabledChange",1);Ot("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ot("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});ge.define("sl-tooltip");var Jm=st`
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
`;function se(t,e,s){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>s?i(s):i(t)}function Zc(t,e=!1){function s(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(d=>d.selected),l=n.every(d=>!d.selected&&!d.indeterminate);o.selected=a,o.indeterminate=!a&&!l}}function i(o){const n=o.parentElement;Gr.isTreeItem(n)&&(s(n),i(n))}function r(o){for(const n of o.getChildrenItems())n.selected=e?o.selected||n.selected:!n.disabled&&o.selected,r(n);e&&s(o)}r(t),i(t)}var Yi=class extends Q{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Et(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(s===null?t.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(Gr.isTreeItem),i=[...e.removedNodes].filter(Gr.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Gr.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Zc(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(i=>!e.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>{var o;return["input","textarea"].includes((o=r?.tagName)==null?void 0:o.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(l=>l.matches(":focus")),o=e[r],n=l=>{const d=e[se(l,0,e.length-1)];this.focusItem(d)},a=l=>{o.expanded=l};t.key==="ArrowDown"?n(r+1):t.key==="ArrowUp"?n(r-1):s&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(r+1):a(!0):s&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(r-1):a(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),i=t.composedPath().some(r=>{var o;return(o=r?.classList)==null?void 0:o.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Zc(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var i;if(s.disabled)return!1;const r=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(s),!e.has(s)})}render(){return N`
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
    `}};Yi.styles=[at,Jm];c([K("slot:not([name])")],Yi.prototype,"defaultSlot",2);c([K("slot[name=expand-icon]")],Yi.prototype,"expandedIconSlot",2);c([K("slot[name=collapse-icon]")],Yi.prototype,"collapsedIconSlot",2);c([f()],Yi.prototype,"selection",2);c([j("selection")],Yi.prototype,"handleSelectionChange",1);Yi.define("sl-tree");var Qm=st`
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
`,Ul=class extends Q{render(){return N` <slot></slot> `}};Ul.styles=[at,Qm];Ul.define("sl-visually-hidden");var Zm=st`
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
`,tb=0,So=class extends Q{constructor(){super(...arguments),this.attrId=++tb,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return N`
      <slot
        part="base"
        class=${nt({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};So.styles=[at,Zm];c([f({reflect:!0})],So.prototype,"name",2);c([f({type:Boolean,reflect:!0})],So.prototype,"active",2);c([j("active")],So.prototype,"handleActiveChange",1);So.define("sl-tab-panel");xi.define("sl-tag");var eb=st`
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
`,sb=0,vs=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.attrId=++sb,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,N`
      <div
        part="base"
        class=${nt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}};vs.styles=[at,eb];vs.dependencies={"sl-icon-button":de};c([K(".tab")],vs.prototype,"tab",2);c([f({reflect:!0})],vs.prototype,"panel",2);c([f({type:Boolean,reflect:!0})],vs.prototype,"active",2);c([f({type:Boolean,reflect:!0})],vs.prototype,"closable",2);c([f({type:Boolean,reflect:!0})],vs.prototype,"disabled",2);c([f({type:Number,reflect:!0})],vs.prototype,"tabIndex",2);c([j("active")],vs.prototype,"handleActiveChange",1);c([j("disabled")],vs.prototype,"handleDisabledChange",1);vs.define("sl-tab");var ib=st`
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
`,rb=st`
  :host {
    display: contents;
  }
`,Eo=class extends Q{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};Eo.styles=[at,rb];c([f({type:Boolean,reflect:!0})],Eo.prototype,"disabled",2);c([j("disabled",{waitUntilFirstUpdate:!0})],Eo.prototype,"handleDisabledChange",1);var Ce=class extends Q{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Et(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const s=e.filter(({target:i})=>{if(i===this)return!0;if(i.closest("sl-tab-group")!==this)return!1;const r=i.tagName.toLowerCase();return r==="sl-tab"||r==="sl-tab-panel"});if(s.length!==0){if(s.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(i=>i.attributeName==="active")){const r=s.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);r&&this.setActiveTab(r)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,i)=>{var r;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if(r?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===r);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&Za(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=oi({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Za(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(t)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(s=this.tabs[r]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;r+=i}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return N`
      <div
        part="base"
        class=${nt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${nt({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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
                  class=${nt({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Ce.styles=[at,ib];Ce.dependencies={"sl-icon-button":de,"sl-resize-observer":Eo};c([K(".tab-group")],Ce.prototype,"tabGroup",2);c([K(".tab-group__body")],Ce.prototype,"body",2);c([K(".tab-group__nav")],Ce.prototype,"nav",2);c([K(".tab-group__indicator")],Ce.prototype,"indicator",2);c([it()],Ce.prototype,"hasScrollControls",2);c([it()],Ce.prototype,"shouldHideScrollStartButton",2);c([it()],Ce.prototype,"shouldHideScrollEndButton",2);c([f()],Ce.prototype,"placement",2);c([f()],Ce.prototype,"activation",2);c([f({attribute:"no-scroll-controls",type:Boolean})],Ce.prototype,"noScrollControls",2);c([f({attribute:"fixed-scroll-controls",type:Boolean})],Ce.prototype,"fixedScrollControls",2);c([_o({passive:!0})],Ce.prototype,"updateScrollButtons",1);c([j("noScrollControls",{waitUntilFirstUpdate:!0})],Ce.prototype,"updateScrollControls",1);c([j("placement",{waitUntilFirstUpdate:!0})],Ce.prototype,"syncIndicator",1);Ce.define("sl-tab-group");var ob=st`
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
`,Hl=class extends Q{constructor(){super(...arguments),this.effect="none"}render(){return N`
      <div
        part="base"
        class=${nt({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Hl.styles=[at,ob];c([f()],Hl.prototype,"effect",2);Hl.define("sl-skeleton");var nb=st`
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
`;function Yr(t,e){function s(r){const o=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,d=r.pageX-a,h=r.pageY-l;e?.onMove&&e.onMove(d,h)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&s(e.initialEvent)}var td=()=>null,es=class extends Q{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Et(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=td,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:i,snapThreshold:r,isRtl:o,vertical:n})=>{let a=s,l=Number.POSITIVE_INFINITY;return e.forEach(d=>{let h;if(d.startsWith("repeat(")){const p=t.substring(7,t.length-1),g=p.endsWith("%"),v=Number.parseFloat(p),x=g?i*(v/100):v;h=Math.round((o&&!n?i-s:s)/x)*x}else d.endsWith("%")?h=i*(Number.parseFloat(d)/100):h=Number.parseFloat(d);o&&!n&&(h=i-h);const u=Math.abs(s-h);u<=r&&u<l&&(a=h,l=u)}),a}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=td}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Yr(this,{onMove:(s,i)=>{var r;let o=this.vertical?i:s;this.primary==="end"&&(o=this.size-o),o=(r=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?r:o,this.position=se(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=se(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
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
        tabindex=${X(this.disabled?void 0:"0")}
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
    `}};es.styles=[at,nb];c([K(".divider")],es.prototype,"divider",2);c([f({type:Number,reflect:!0})],es.prototype,"position",2);c([f({attribute:"position-in-pixels",type:Number})],es.prototype,"positionInPixels",2);c([f({type:Boolean,reflect:!0})],es.prototype,"vertical",2);c([f({type:Boolean,reflect:!0})],es.prototype,"disabled",2);c([f()],es.prototype,"primary",2);c([f({reflect:!0})],es.prototype,"snap",1);c([f({type:Number,attribute:"snap-threshold"})],es.prototype,"snapThreshold",2);c([j("position")],es.prototype,"handlePositionChange",1);c([j("positionInPixels")],es.prototype,"handlePositionInPixelsChange",1);c([j("vertical")],es.prototype,"handleVerticalChange",1);es.define("sl-split-panel");Eo.define("sl-resize-observer");var ab=st`
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
`,Jt=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this),this.hasSlotController=new De(this,"help-text","label"),this.localize=new Et(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",o=e*t;if(r){const n=`${e-o}px + ${t} * ${i}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${i} / 2))`}else{const n=`${o}px - ${t} * ${i}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e;return N`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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
            class=${nt({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${X(this.name)}
              ?disabled=${this.disabled}
              min=${X(this.min)}
              max=${X(this.max)}
              step=${X(this.step)}
              .value=${ji(this.value.toString())}
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
    `}};Jt.styles=[at,Gi,ab];c([K(".range__control")],Jt.prototype,"input",2);c([K(".range__tooltip")],Jt.prototype,"output",2);c([it()],Jt.prototype,"hasFocus",2);c([it()],Jt.prototype,"hasTooltip",2);c([f()],Jt.prototype,"title",2);c([f()],Jt.prototype,"name",2);c([f({type:Number})],Jt.prototype,"value",2);c([f()],Jt.prototype,"label",2);c([f({attribute:"help-text"})],Jt.prototype,"helpText",2);c([f({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);c([f({type:Number})],Jt.prototype,"min",2);c([f({type:Number})],Jt.prototype,"max",2);c([f({type:Number})],Jt.prototype,"step",2);c([f()],Jt.prototype,"tooltip",2);c([f({attribute:!1})],Jt.prototype,"tooltipFormatter",2);c([f({reflect:!0})],Jt.prototype,"form",2);c([Cr()],Jt.prototype,"defaultValue",2);c([_o({passive:!0})],Jt.prototype,"handleThumbDragStart",1);c([j("value",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleValueChange",1);c([j("disabled",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleDisabledChange",1);c([j("hasTooltip",{waitUntilFirstUpdate:!0})],Jt.prototype,"syncRange",1);Jt.define("sl-range");var lb=st`
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
`;const ch="important",cb=" !"+ch,Ne=wo(class extends xo{constructor(t){if(super(t),t.type!==Ls.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const o=typeof r=="string"&&r.endsWith(cb);i.includes("-")||o?s.setProperty(i,o?r.slice(0,-11):r,o?ch:""):s[i]=r}}return qe}});var Le=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:i,width:r}=this.rating.getBoundingClientRect(),o=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-s)/r*this.max,this.precision);return se(o,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,N`
      <div
        part="base"
        class=${nt({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
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
                  class=${nt({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${Ne({clipPath:t?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${rn(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Ne({clipPath:t?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${rn(this.getSymbol(i+1))}
                  </div>
                </span>
              `:N`
              <span
                class=${nt({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
              >
                ${rn(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Le.styles=[at,lb];Le.dependencies={"sl-icon":Dt};c([K(".rating")],Le.prototype,"rating",2);c([it()],Le.prototype,"hoverValue",2);c([it()],Le.prototype,"isHovering",2);c([f()],Le.prototype,"label",2);c([f({type:Number})],Le.prototype,"value",2);c([f({type:Number})],Le.prototype,"max",2);c([f({type:Number})],Le.prototype,"precision",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"readonly",2);c([f({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);c([f()],Le.prototype,"getSymbol",2);c([_o({passive:!0})],Le.prototype,"handleTouchMove",1);c([j("hoverValue")],Le.prototype,"handleHoverValueChange",1);c([j("isHovering")],Le.prototype,"handleIsHoveringChange",1);Le.define("sl-rating");var db=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Xi=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:i,value:r}=db.find(o=>Math.abs(s)<o.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;i==="minute"?o=Fo("second"):i==="hour"?o=Fo("minute"):i==="day"?o=Fo("hour"):o=Fo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return N` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};c([it()],Xi.prototype,"isoTime",2);c([it()],Xi.prototype,"relativeTime",2);c([f()],Xi.prototype,"date",2);c([f()],Xi.prototype,"format",2);c([f()],Xi.prototype,"numeric",2);c([f({type:Boolean})],Xi.prototype,"sync",2);function Fo(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}Xi.define("sl-relative-time");var ub=st`
  ${ah}

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
`,_s=class extends Q{constructor(){super(...arguments),this.hasSlotController=new De(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Wr`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${nt({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${X(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};_s.styles=[at,ub];c([K(".button")],_s.prototype,"input",2);c([K(".hidden-input")],_s.prototype,"hiddenInput",2);c([it()],_s.prototype,"hasFocus",2);c([f({type:Boolean,reflect:!0})],_s.prototype,"checked",2);c([f()],_s.prototype,"value",2);c([f({type:Boolean,reflect:!0})],_s.prototype,"disabled",2);c([f({reflect:!0})],_s.prototype,"size",2);c([f({type:Boolean,reflect:!0})],_s.prototype,"pill",2);c([j("disabled",{waitUntilFirstUpdate:!0})],_s.prototype,"handleDisabledChange",1);_s.define("sl-radio-button");var hb=st`
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
`,Se=class extends Q{constructor(){super(...arguments),this.formControlController=new ai(this),this.hasSlotController=new De(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Mm:t?Rm:Hn}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,s.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(a=>!a.disabled),i=(e=s.find(a=>a.checked))!=null?e:s[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,o=this.value;let n=s.indexOf(i)+r;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].setAttribute("tabindex","0"),s[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");i&&i.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(o=>o.checked),i=e.find(o=>!o.disabled),r=s||i;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,r=N`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return N`
      <fieldset
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
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
    `}};Se.styles=[at,Gi,hb];Se.dependencies={"sl-button-group":qi};c([K("slot:not([name])")],Se.prototype,"defaultSlot",2);c([K(".radio-group__validation-input")],Se.prototype,"validationInput",2);c([it()],Se.prototype,"hasButtonGroup",2);c([it()],Se.prototype,"errorMessage",2);c([it()],Se.prototype,"defaultValue",2);c([f()],Se.prototype,"label",2);c([f({attribute:"help-text"})],Se.prototype,"helpText",2);c([f()],Se.prototype,"name",2);c([f({reflect:!0})],Se.prototype,"value",2);c([f({reflect:!0})],Se.prototype,"size",2);c([f({reflect:!0})],Se.prototype,"form",2);c([f({type:Boolean,reflect:!0})],Se.prototype,"required",2);c([j("size",{waitUntilFirstUpdate:!0})],Se.prototype,"handleSizeChange",1);c([j("value")],Se.prototype,"handleValueChange",1);Se.define("sl-radio-group");var pb=st`
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
`,Sr=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return N`
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
    `}};Sr.styles=[at,pb];c([K(".progress-ring__indicator")],Sr.prototype,"indicator",2);c([it()],Sr.prototype,"indicatorOffset",2);c([f({type:Number,reflect:!0})],Sr.prototype,"value",2);c([f()],Sr.prototype,"label",2);Sr.define("sl-progress-ring");var fb=st`
  :host {
    display: inline-block;
  }
`;let dh=null;class uh{}uh.render=function(t,e){dh(t,e)};self.QrCreator=uh;(function(t){function e(a,l,d,h){var u={},p=t(d,l);p.u(a),p.J(),h=h||0;var g=p.h(),v=p.h()+2*h;return u.text=a,u.level=l,u.version=d,u.O=v,u.a=function(x,I){return x-=h,I-=h,0>x||x>=g||0>I||I>=g?!1:p.a(x,I)},u}function s(a,l,d,h,u,p,g,v,x,I){function k(_,A,b,E,O,T,B){_?(a.lineTo(A+T,b+B),a.arcTo(A,b,E,O,p)):a.lineTo(A,b)}g?a.moveTo(l+p,d):a.moveTo(l,d),k(v,h,d,h,u,-p,0),k(x,h,u,l,u,0,-p),k(I,l,u,l,d,p,0),k(g,l,d,h,d,0,p)}function i(a,l,d,h,u,p,g,v,x,I){function k(_,A,b,E){a.moveTo(_+b,A),a.lineTo(_,A),a.lineTo(_,A+E),a.arcTo(_,A,_+b,A,p)}g&&k(l,d,p,p),v&&k(h,d,-p,p),x&&k(h,u,-p,-p),I&&k(l,u,p,-p)}function r(a,l){var d=l.fill;if(typeof d=="string")a.fillStyle=d;else{var h=d.type,u=d.colorStops;if(d=d.position.map(g=>Math.round(g*l.size)),h==="linear-gradient")var p=a.createLinearGradient.apply(a,d);else if(h==="radial-gradient")p=a.createRadialGradient.apply(a,d);else throw Error("Unsupported fill");u.forEach(([g,v])=>{p.addColorStop(g,v)}),a.fillStyle=p}}function o(a,l){t:{var d=l.text,h=l.v,u=l.N,p=l.K,g=l.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var v=e(d,h,u,g);break t}catch{}v=void 0}if(!v)return null;for(d=a.getContext("2d"),l.background&&(d.fillStyle=l.background,d.fillRect(l.left,l.top,l.size,l.size)),h=v.O,p=l.size/h,d.beginPath(),g=0;g<h;g+=1)for(u=0;u<h;u+=1){var x=d,I=l.left+u*p,k=l.top+g*p,_=g,A=u,b=v.a,E=I+p,O=k+p,T=_-1,B=_+1,M=A-1,D=A+1,ot=Math.floor(Math.min(.5,Math.max(0,l.R))*p),tt=b(_,A),bt=b(T,M),wt=b(T,A);T=b(T,D);var St=b(_,D);D=b(B,D),A=b(B,A),B=b(B,M),_=b(_,M),I=Math.round(I),k=Math.round(k),E=Math.round(E),O=Math.round(O),tt?s(x,I,k,E,O,ot,!wt&&!_,!wt&&!St,!A&&!St,!A&&!_):i(x,I,k,E,O,ot,wt&&_&&bt,wt&&St&&T,A&&St&&D,A&&_&&B)}return r(d,l),d.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};dh=function(a,l){var d={};Object.assign(d,n,a),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,l instanceof HTMLCanvasElement?((l.width!==d.size||l.height!==d.size)&&(l.width=d.size,l.height=d.size),l.getContext("2d").clearRect(0,0,l.width,l.height),o(l,d)):(a=document.createElement("canvas"),a.width=d.size,a.height=d.size,d=o(a,d),l.appendChild(d))}})((function(){function t(l){var d=s.s(l);return{S:function(){return 4},b:function(){return d.length},write:function(h){for(var u=0;u<d.length;u+=1)h.put(d[u],8)}}}function e(){var l=[],d=0,h={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var g=0;g<p;g+=1)h.m((u>>>p-g-1&1)==1)},f:function(){return d},m:function(u){var p=Math.floor(d/8);l.length<=p&&l.push(0),u&&(l[p]|=128>>>d%8),d+=1}};return h}function s(l,d){function h(_,A){for(var b=-1;7>=b;b+=1)if(!(-1>=_+b||v<=_+b))for(var E=-1;7>=E;E+=1)-1>=A+E||v<=A+E||(g[_+b][A+E]=0<=b&&6>=b&&(E==0||E==6)||0<=E&&6>=E&&(b==0||b==6)||2<=b&&4>=b&&2<=E&&4>=E)}function u(_,A){for(var b=v=4*l+17,E=Array(b),O=0;O<b;O+=1){E[O]=Array(b);for(var T=0;T<b;T+=1)E[O][T]=null}for(g=E,h(0,0),h(v-7,0),h(0,v-7),b=o.G(l),E=0;E<b.length;E+=1)for(O=0;O<b.length;O+=1){T=b[E];var B=b[O];if(g[T][B]==null)for(var M=-2;2>=M;M+=1)for(var D=-2;2>=D;D+=1)g[T+M][B+D]=M==-2||M==2||D==-2||D==2||M==0&&D==0}for(b=8;b<v-8;b+=1)g[b][6]==null&&(g[b][6]=b%2==0);for(b=8;b<v-8;b+=1)g[6][b]==null&&(g[6][b]=b%2==0);for(b=o.w(p<<3|A),E=0;15>E;E+=1)O=!_&&(b>>E&1)==1,g[6>E?E:8>E?E+1:v-15+E][8]=O,g[8][8>E?v-E-1:9>E?15-E:14-E]=O;if(g[v-8][8]=!_,7<=l){for(b=o.A(l),E=0;18>E;E+=1)O=!_&&(b>>E&1)==1,g[Math.floor(E/3)][E%3+v-8-3]=O;for(E=0;18>E;E+=1)O=!_&&(b>>E&1)==1,g[E%3+v-8-3][Math.floor(E/3)]=O}if(x==null){for(_=a.I(l,p),b=e(),E=0;E<I.length;E+=1)O=I[E],b.put(4,4),b.put(O.b(),o.f(4,l)),O.write(b);for(E=O=0;E<_.length;E+=1)O+=_[E].j;if(b.f()>8*O)throw Error("code length overflow. ("+b.f()+">"+8*O+")");for(b.f()+4<=8*O&&b.put(0,4);b.f()%8!=0;)b.m(!1);for(;!(b.f()>=8*O)&&(b.put(236,8),!(b.f()>=8*O));)b.put(17,8);var ot=0;for(O=E=0,T=Array(_.length),B=Array(_.length),M=0;M<_.length;M+=1){var tt=_[M].j,bt=_[M].o-tt;for(E=Math.max(E,tt),O=Math.max(O,bt),T[M]=Array(tt),D=0;D<T[M].length;D+=1)T[M][D]=255&b.B()[D+ot];for(ot+=tt,D=o.C(bt),tt=i(T[M],D.b()-1).l(D),B[M]=Array(D.b()-1),D=0;D<B[M].length;D+=1)bt=D+tt.b()-B[M].length,B[M][D]=0<=bt?tt.c(bt):0}for(D=b=0;D<_.length;D+=1)b+=_[D].o;for(b=Array(b),D=ot=0;D<E;D+=1)for(M=0;M<_.length;M+=1)D<T[M].length&&(b[ot]=T[M][D],ot+=1);for(D=0;D<O;D+=1)for(M=0;M<_.length;M+=1)D<B[M].length&&(b[ot]=B[M][D],ot+=1);x=b}for(_=x,b=-1,E=v-1,O=7,T=0,A=o.F(A),B=v-1;0<B;B-=2)for(B==6&&--B;;){for(M=0;2>M;M+=1)g[E][B-M]==null&&(D=!1,T<_.length&&(D=(_[T]>>>O&1)==1),A(E,B-M)&&(D=!D),g[E][B-M]=D,--O,O==-1&&(T+=1,O=7));if(E+=b,0>E||v<=E){E-=b,b=-b;break}}}var p=r[d],g=null,v=0,x=null,I=[],k={u:function(_){_=t(_),I.push(_),x=null},a:function(_,A){if(0>_||v<=_||0>A||v<=A)throw Error(_+","+A);return g[_][A]},h:function(){return v},J:function(){for(var _=0,A=0,b=0;8>b;b+=1){u(!0,b);var E=o.D(k);(b==0||_>E)&&(_=E,A=b)}u(!1,A)}};return k}function i(l,d){if(typeof l.length>"u")throw Error(l.length+"/"+d);var h=(function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+d),v=0;v<l.length-p;v+=1)g[v]=l[v+p];return g})(),u={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(u.b()+p.b()-1),v=0;v<u.b();v+=1)for(var x=0;x<p.b();x+=1)g[v+x]^=n.i(n.g(u.c(v))+n.g(p.c(x)));return i(g,0)},l:function(p){if(0>u.b()-p.b())return u;for(var g=n.g(u.c(0))-n.g(p.c(0)),v=Array(u.b()),x=0;x<u.b();x+=1)v[x]=u.c(x);for(x=0;x<p.b();x+=1)v[x]^=n.i(n.g(p.c(x))+g);return i(v,0).l(p)}};return u}s.s=function(l){for(var d=[],h=0;h<l.length;h++){var u=l.charCodeAt(h);128>u?d.push(u):2048>u?d.push(192|u>>6,128|u&63):55296>u||57344<=u?d.push(224|u>>12,128|u>>6&63,128|u&63):(h++,u=65536+((u&1023)<<10|l.charCodeAt(h)&1023),d.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return d};var r={L:1,M:0,Q:3,H:2},o=(function(){function l(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(u){for(var p=u<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return u<<12|p},G:function(u){return d[u-1]},F:function(u){switch(u){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=i([1],0),g=0;g<u;g+=1)p=p.multiply(i([1,n.i(g)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),g=0,v=0;v<p;v+=1)for(var x=0;x<p;x+=1){for(var I=0,k=u.a(v,x),_=-1;1>=_;_+=1)if(!(0>v+_||p<=v+_))for(var A=-1;1>=A;A+=1)0>x+A||p<=x+A||(_!=0||A!=0)&&k==u.a(v+_,x+A)&&(I+=1);5<I&&(g+=3+I-5)}for(v=0;v<p-1;v+=1)for(x=0;x<p-1;x+=1)I=0,u.a(v,x)&&(I+=1),u.a(v+1,x)&&(I+=1),u.a(v,x+1)&&(I+=1),u.a(v+1,x+1)&&(I+=1),(I==0||I==4)&&(g+=3);for(v=0;v<p;v+=1)for(x=0;x<p-6;x+=1)u.a(v,x)&&!u.a(v,x+1)&&u.a(v,x+2)&&u.a(v,x+3)&&u.a(v,x+4)&&!u.a(v,x+5)&&u.a(v,x+6)&&(g+=40);for(x=0;x<p;x+=1)for(v=0;v<p-6;v+=1)u.a(v,x)&&!u.a(v+1,x)&&u.a(v+2,x)&&u.a(v+3,x)&&u.a(v+4,x)&&!u.a(v+5,x)&&u.a(v+6,x)&&(g+=40);for(x=I=0;x<p;x+=1)for(v=0;v<p;v+=1)u.a(v,x)&&(I+=1);return g+=Math.abs(100*I/p/p-50)/5*10}};return h})(),n=(function(){for(var l=Array(256),d=Array(256),h=0;8>h;h+=1)l[h]=1<<h;for(h=8;256>h;h+=1)l[h]=l[h-4]^l[h-5]^l[h-6]^l[h-8];for(h=0;255>h;h+=1)d[l[h]]=h;return{g:function(u){if(1>u)throw Error("glog("+u+")");return d[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}})(),a=(function(){function l(u,p){switch(p){case r.L:return d[4*(u-1)];case r.M:return d[4*(u-1)+1];case r.Q:return d[4*(u-1)+2];case r.H:return d[4*(u-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(u,p){var g=l(u,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=g.length/3,p=[];for(var v=0;v<u;v+=1)for(var x=g[3*v],I=g[3*v+1],k=g[3*v+2],_=0;_<x;_+=1){var A=k,b={};b.o=I,b.j=A,p.push(b)}return p}};return h})();return s})());const gb=QrCreator;var ws=class extends Q{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&gb.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return N`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Ne({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ws.styles=[at,fb];c([K("canvas")],ws.prototype,"canvas",2);c([f()],ws.prototype,"value",2);c([f()],ws.prototype,"label",2);c([f({type:Number})],ws.prototype,"size",2);c([f()],ws.prototype,"fill",2);c([f()],ws.prototype,"background",2);c([f({type:Number})],ws.prototype,"radius",2);c([f({attribute:"error-correction"})],ws.prototype,"errorCorrection",2);c([j(["background","errorCorrection","fill","radius","size","value"])],ws.prototype,"generate",1);ws.define("sl-qr-code");var mb=st`
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
`,Us=class extends Q{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return N`
      <span
        part="base"
        class=${nt({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?N` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Us.styles=[at,mb];Us.dependencies={"sl-icon":Dt};c([it()],Us.prototype,"checked",2);c([it()],Us.prototype,"hasFocus",2);c([f()],Us.prototype,"value",2);c([f({reflect:!0})],Us.prototype,"size",2);c([f({type:Boolean,reflect:!0})],Us.prototype,"disabled",2);c([j("checked")],Us.prototype,"handleCheckedChange",1);c([j("disabled",{waitUntilFirstUpdate:!0})],Us.prototype,"handleDisabledChange",1);Us.define("sl-radio");Lt.define("sl-popup");var bb=st`
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
`,Ao=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return N`
      <div
        part="base"
        class=${nt({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${X(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ne({width:`${this.value}%`})}>
          ${this.indeterminate?"":N` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ao.styles=[at,bb];c([f({type:Number,reflect:!0})],Ao.prototype,"value",2);c([f({type:Boolean,reflect:!0})],Ao.prototype,"indeterminate",2);c([f()],Ao.prototype,"label",2);Ao.define("sl-progress-bar");var yb=st`
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
`,hh=class extends Q{render(){return N` <slot part="base" class="menu-label"></slot> `}};hh.styles=[at,yb];hh.define("sl-menu-label");var vb=st`
  :host {
    display: contents;
  }
`,Hs=class extends Q{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return N` <slot></slot> `}};Hs.styles=[at,vb];c([f({reflect:!0})],Hs.prototype,"attr",2);c([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],Hs.prototype,"attrOldValue",2);c([f({attribute:"char-data",type:Boolean,reflect:!0})],Hs.prototype,"charData",2);c([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Hs.prototype,"charDataOldValue",2);c([f({attribute:"child-list",type:Boolean,reflect:!0})],Hs.prototype,"childList",2);c([f({type:Boolean,reflect:!0})],Hs.prototype,"disabled",2);c([j("disabled")],Hs.prototype,"handleDisabledChange",1);c([j("attr",{waitUntilFirstUpdate:!0}),j("attr-old-value",{waitUntilFirstUpdate:!0}),j("char-data",{waitUntilFirstUpdate:!0}),j("char-data-old-value",{waitUntilFirstUpdate:!0}),j("childList",{waitUntilFirstUpdate:!0})],Hs.prototype,"handleChange",1);Hs.define("sl-mutation-observer");var _b=st`
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
`,Ji=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.preventDefault(),Yr(this.base,{onMove:i=>{this.position=parseFloat(se(i/e*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=se(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return N`
      <div
        part="base"
        id="image-comparer"
        class=${nt({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Ne({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Ne({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Ji.styles=[at,_b];Ji.scopedElement={"sl-icon":Dt};c([K(".image-comparer")],Ji.prototype,"base",2);c([K(".image-comparer__handle")],Ji.prototype,"handle",2);c([f({type:Number,reflect:!0})],Ji.prototype,"position",2);c([j("position",{waitUntilFirstUpdate:!0})],Ji.prototype,"handlePositionChange",1);Ji.define("sl-image-comparer");var wb=st`
  :host {
    display: block;
  }
`,va=new Map;function xb(t,e="cors"){const s=va.get(t);if(s!==void 0)return Promise.resolve(s);const i=fetch(t,{mode:e}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return va.set(t,o),o});return va.set(t,i),i}var Er=class extends Q{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await xb(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return N`<slot></slot>`}};Er.styles=[at,wb];c([f()],Er.prototype,"src",2);c([f()],Er.prototype,"mode",2);c([f({attribute:"allow-scripts",type:Boolean})],Er.prototype,"allowScripts",2);c([j("src")],Er.prototype,"handleSrcChange",1);Er.define("sl-include");Dt.define("sl-icon");var jn=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),r=s[i]+this.unit,o=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};c([f({type:Number})],jn.prototype,"value",2);c([f()],jn.prototype,"unit",2);c([f()],jn.prototype,"display",2);jn.define("sl-format-bytes");var ss=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return N`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};c([f()],ss.prototype,"date",2);c([f()],ss.prototype,"weekday",2);c([f()],ss.prototype,"era",2);c([f()],ss.prototype,"year",2);c([f()],ss.prototype,"month",2);c([f()],ss.prototype,"day",2);c([f()],ss.prototype,"hour",2);c([f()],ss.prototype,"minute",2);c([f()],ss.prototype,"second",2);c([f({attribute:"time-zone-name"})],ss.prototype,"timeZoneName",2);c([f({attribute:"time-zone"})],ss.prototype,"timeZone",2);c([f({attribute:"hour-format"})],ss.prototype,"hourFormat",2);ss.define("sl-format-date");var xs=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};c([f({type:Number})],xs.prototype,"value",2);c([f()],xs.prototype,"type",2);c([f({attribute:"no-grouping",type:Boolean})],xs.prototype,"noGrouping",2);c([f()],xs.prototype,"currency",2);c([f({attribute:"currency-display"})],xs.prototype,"currencyDisplay",2);c([f({attribute:"minimum-integer-digits",type:Number})],xs.prototype,"minimumIntegerDigits",2);c([f({attribute:"minimum-fraction-digits",type:Number})],xs.prototype,"minimumFractionDigits",2);c([f({attribute:"maximum-fraction-digits",type:Number})],xs.prototype,"maximumFractionDigits",2);c([f({attribute:"minimum-significant-digits",type:Number})],xs.prototype,"minimumSignificantDigits",2);c([f({attribute:"maximum-significant-digits",type:Number})],xs.prototype,"maximumSignificantDigits",2);xs.define("sl-format-number");var kb=st`
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
`,Wn=class extends Q{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Wn.styles=[at,kb];c([f({type:Boolean,reflect:!0})],Wn.prototype,"vertical",2);c([j("vertical")],Wn.prototype,"handleVerticalChange",1);Wn.define("sl-divider");var Cb=st`
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
`;function ed(t){return t.charAt(0).toUpperCase()+t.slice(1)}var is=class extends Q{constructor(){super(...arguments),this.hasSlotController=new De(this,"footer"),this.localize=new Et(this),this.modal=new lh(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Kr(this)))}disconnectedCallback(){super.disconnectedCallback(),qr(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=Ht(this,"drawer.denyClose",{dir:this.localize.dir()});Zt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Kr(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ie(this.drawer),ie(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Ht(this,`drawer.show${ed(this.placement)}`,{dir:this.localize.dir()}),s=Ht(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Zt(this.panel,e.keyframes,e.options),Zt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Bl(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),qr(this)),await Promise.all([ie(this.drawer),ie(this.overlay)]);const t=Ht(this,`drawer.hide${ed(this.placement)}`,{dir:this.localize.dir()}),e=Ht(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Zt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Zt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Kr(this)),this.open&&this.contained&&(this.modal.deactivate(),qr(this))}async show(){if(!this.open)return this.open=!0,Pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Pe(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${nt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${X(this.noHeader?this.label:void 0)}
          aria-labelledby=${X(this.noHeader?void 0:"title")}
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
    `}};is.styles=[at,Cb];is.dependencies={"sl-icon-button":de};c([K(".drawer")],is.prototype,"drawer",2);c([K(".drawer__panel")],is.prototype,"panel",2);c([K(".drawer__overlay")],is.prototype,"overlay",2);c([f({type:Boolean,reflect:!0})],is.prototype,"open",2);c([f({reflect:!0})],is.prototype,"label",2);c([f({reflect:!0})],is.prototype,"placement",2);c([f({type:Boolean,reflect:!0})],is.prototype,"contained",2);c([f({attribute:"no-header",type:Boolean,reflect:!0})],is.prototype,"noHeader",2);c([j("open",{waitUntilFirstUpdate:!0})],is.prototype,"handleOpenChange",1);c([j("contained",{waitUntilFirstUpdate:!0})],is.prototype,"handleNoModalChange",1);Ot("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ot("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Ot("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Ot("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ot("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});is.define("sl-drawer");var Sb=st`
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
`,me=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";s?[r,o]=this.from.trim().split("."):i&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(r):null;n?i?t=n.getAttribute(o)||"":s?t=n[o]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),r=t==="success"?this.successIcon:this.errorIcon,o=Ht(this,"copy.in",{dir:"ltr"}),n=Ht(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return N`
      <sl-tooltip
        class=${nt({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
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
    `}};me.styles=[at,Sb];me.dependencies={"sl-icon":Dt,"sl-tooltip":ge};c([K('slot[name="copy-icon"]')],me.prototype,"copyIcon",2);c([K('slot[name="success-icon"]')],me.prototype,"successIcon",2);c([K('slot[name="error-icon"]')],me.prototype,"errorIcon",2);c([K("sl-tooltip")],me.prototype,"tooltip",2);c([it()],me.prototype,"isCopying",2);c([it()],me.prototype,"status",2);c([f()],me.prototype,"value",2);c([f()],me.prototype,"from",2);c([f({type:Boolean,reflect:!0})],me.prototype,"disabled",2);c([f({attribute:"copy-label"})],me.prototype,"copyLabel",2);c([f({attribute:"success-label"})],me.prototype,"successLabel",2);c([f({attribute:"error-label"})],me.prototype,"errorLabel",2);c([f({attribute:"feedback-duration",type:Number})],me.prototype,"feedbackDuration",2);c([f({attribute:"tooltip-placement"})],me.prototype,"tooltipPlacement",2);c([f({type:Boolean})],me.prototype,"hoist",2);Ot("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Ot("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});me.define("sl-copy-button");ue.define("sl-checkbox");var Eb=st`
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
`;function _e(t,e){Ab(t)&&(t="100%");const s=$b(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Bo(t){return Math.min(1,Math.max(0,t))}function Ab(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function $b(t){return typeof t=="string"&&t.indexOf("%")!==-1}function ph(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Uo(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Vi(t){return t.length===1?"0"+t:String(t)}function Tb(t,e,s){return{r:_e(t,255)*255,g:_e(e,255)*255,b:_e(s,255)*255}}function sd(t,e,s){t=_e(t,255),e=_e(e,255),s=_e(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0,n=0;const a=(i+r)/2;if(i===r)n=0,o=0;else{const l=i-r;switch(n=a>.5?l/(2-i-r):l/(i+r),i){case t:o=(e-s)/l+(e<s?6:0);break;case e:o=(s-t)/l+2;break;case s:o=(t-e)/l+4;break}o/=6}return{h:o,s:n,l:a}}function _a(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function Ib(t,e,s){let i,r,o;if(t=_e(t,360),e=_e(e,100),s=_e(s,100),e===0)r=s,o=s,i=s;else{const n=s<.5?s*(1+e):s+e-s*e,a=2*s-n;i=_a(a,n,t+1/3),r=_a(a,n,t),o=_a(a,n,t-1/3)}return{r:i*255,g:r*255,b:o*255}}function id(t,e,s){t=_e(t,255),e=_e(e,255),s=_e(s,255);const i=Math.max(t,e,s),r=Math.min(t,e,s);let o=0;const n=i,a=i-r,l=i===0?0:a/i;if(i===r)o=0;else{switch(i){case t:o=(e-s)/a+(e<s?6:0);break;case e:o=(s-t)/a+2;break;case s:o=(t-e)/a+4;break}o/=6}return{h:o,s:l,v:n}}function Lb(t,e,s){t=_e(t,360)*6,e=_e(e,100),s=_e(s,100);const i=Math.floor(t),r=t-i,o=s*(1-e),n=s*(1-r*e),a=s*(1-(1-r)*e),l=i%6,d=[s,n,o,o,a,s][l],h=[a,s,s,n,o,o][l],u=[o,o,a,s,s,n][l];return{r:d*255,g:h*255,b:u*255}}function rd(t,e,s,i){const r=[Vi(Math.round(t).toString(16)),Vi(Math.round(e).toString(16)),Vi(Math.round(s).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Ob(t,e,s,i,r){const o=[Vi(Math.round(t).toString(16)),Vi(Math.round(e).toString(16)),Vi(Math.round(s).toString(16)),Vi(Mb(i))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Rb(t,e,s,i){const r=t/100,o=e/100,n=s/100,a=i/100,l=255*(1-r)*(1-a),d=255*(1-o)*(1-a),h=255*(1-n)*(1-a);return{r:l,g:d,b:h}}function od(t,e,s){let i=1-t/255,r=1-e/255,o=1-s/255,n=Math.min(i,r,o);return n===1?(i=0,r=0,o=0):(i=(i-n)/(1-n)*100,r=(r-n)/(1-n)*100,o=(o-n)/(1-n)*100),n*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(o),k:Math.round(n)}}function Mb(t){return Math.round(parseFloat(t)*255).toString(16)}function nd(t){return je(t)/255}function je(t){return parseInt(t,16)}function Pb(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const sl={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Db(t){let e={r:0,g:0,b:0},s=1,i=null,r=null,o=null,n=!1,a=!1;return typeof t=="string"&&(t=Nb(t)),typeof t=="object"&&(He(t.r)&&He(t.g)&&He(t.b)?(e=Tb(t.r,t.g,t.b),n=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):He(t.h)&&He(t.s)&&He(t.v)?(i=Uo(t.s),r=Uo(t.v),e=Lb(t.h,i,r),n=!0,a="hsv"):He(t.h)&&He(t.s)&&He(t.l)?(i=Uo(t.s),o=Uo(t.l),e=Ib(t.h,i,o),n=!0,a="hsl"):He(t.c)&&He(t.m)&&He(t.y)&&He(t.k)&&(e=Rb(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=ph(s),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const zb="[-\\+]?\\d+%?",Vb="[-\\+]?\\d*\\.\\d+%?",gi="(?:"+Vb+")|(?:"+zb+")",wa="[\\s|\\(]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")\\s*\\)?",Ho="[\\s|\\(]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")\\s*\\)?",ns={CSS_UNIT:new RegExp(gi),rgb:new RegExp("rgb"+wa),rgba:new RegExp("rgba"+Ho),hsl:new RegExp("hsl"+wa),hsla:new RegExp("hsla"+Ho),hsv:new RegExp("hsv"+wa),hsva:new RegExp("hsva"+Ho),cmyk:new RegExp("cmyk"+Ho),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Nb(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(sl[t])t=sl[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=ns.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=ns.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=ns.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=ns.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=ns.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=ns.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=ns.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=ns.hex8.exec(t),s?{r:je(s[1]),g:je(s[2]),b:je(s[3]),a:nd(s[4]),format:e?"name":"hex8"}:(s=ns.hex6.exec(t),s?{r:je(s[1]),g:je(s[2]),b:je(s[3]),format:e?"name":"hex"}:(s=ns.hex4.exec(t),s?{r:je(s[1]+s[1]),g:je(s[2]+s[2]),b:je(s[3]+s[3]),a:nd(s[4]+s[4]),format:e?"name":"hex8"}:(s=ns.hex3.exec(t),s?{r:je(s[1]+s[1]),g:je(s[2]+s[2]),b:je(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function He(t){return typeof t=="number"?!Number.isNaN(t):ns.CSS_UNIT.test(t)}class Qt{constructor(e="",s={}){if(e instanceof Qt)return e;typeof e=="number"&&(e=Pb(e)),this.originalInput=e;const i=Db(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,i,r;const o=e.r/255,n=e.g/255,a=e.b/255;return o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*s+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=ph(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=id(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=id(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${i}%, ${r}%)`:`hsva(${s}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=sd(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=sd(this.r,this.g,this.b),s=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${i}%, ${r}%)`:`hsla(${s}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return rd(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Ob(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${i})`:`rgba(${e}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(_e(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(_e(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...od(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:i,k:r}=od(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+rd(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(sl))if(e===i)return s;return!1}toString(e){const s=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!s&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Qt(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=Bo(s.l),new Qt(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new Qt(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=Bo(s.l),new Qt(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=Bo(s.s),new Qt(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=Bo(s.s),new Qt(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),i=(s.h+e)%360;return s.h=i<0?360+i:i,new Qt(s)}mix(e,s=50){const i=this.toRgb(),r=new Qt(e).toRgb(),o=s/100,n={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return new Qt(n)}analogous(e=6,s=30){const i=this.toHsl(),r=360/s,o=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(new Qt(i));return o}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new Qt(e)}monochromatic(e=6){const s=this.toHsv(),{h:i}=s,{s:r}=s;let{v:o}=s;const n=[],a=1/e;for(;e--;)n.push(new Qt({h:i,s:r,v:o})),o=(o+a)%1;return n}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new Qt({h:(s+72)%360,s:e.s,l:e.l}),new Qt({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),i=new Qt(e).toRgb(),r=s.a+i.a*(1-s.a);return new Qt({r:(s.r*s.a+i.r*i.a*(1-s.a))/r,g:(s.g*s.a+i.g*i.a*(1-s.a))/r,b:(s.b*s.a+i.b*i.a*(1-s.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:i}=s,r=[this],o=360/e;for(let n=1;n<e;n++)r.push(new Qt({h:(i+n*o)%360,s:s.s,l:s.l}));return r}equals(e){const s=new Qt(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var ad="EyeDropper"in window,_t=class extends Q{constructor(){super(),this.formControlController=new ai(this),this.isSafeValue=!1,this.localize=new Et(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),Yr(e,{onMove:n=>{this.alpha=se(n/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,o=this.value;s.focus(),t.preventDefault(),Yr(e,{onMove:n=>{this.hue=se(n/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let o=this.value,n=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Yr(e,{onMove:(a,l)=>{this.saturation=se(a/i*100,0,100),this.brightness=se(100-l/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=se(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=se(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=se(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=se(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=se(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=se(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=se(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=se(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new Qt(t);if(!e.isValid)return null;const s=e.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},r=e.toRgb(),o=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!ad)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,i=100){const r=new Qt(`hsva(${t}, ${e}%, ${s}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),i=N`
      <div
        part="base"
        class=${nt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
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
          style=${Ne({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${nt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ne({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${X(this.disabled?void 0:"0")}
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
                style=${Ne({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${X(this.disabled?void 0:"0")}
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
                      style=${Ne({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ne({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${X(this.disabled?void 0:"0")}
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
            style=${Ne({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${ad?N`
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
                      tabindex=${X(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ne({backgroundColor:o.hexa})}
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
          class=${nt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Ne({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};_t.styles=[at,Eb];_t.dependencies={"sl-button-group":qi,"sl-button":Rt,"sl-dropdown":ke,"sl-icon":Dt,"sl-input":mt,"sl-visually-hidden":Ul};c([K('[part~="base"]')],_t.prototype,"base",2);c([K('[part~="input"]')],_t.prototype,"input",2);c([K(".color-dropdown")],_t.prototype,"dropdown",2);c([K('[part~="preview"]')],_t.prototype,"previewButton",2);c([K('[part~="trigger"]')],_t.prototype,"trigger",2);c([it()],_t.prototype,"hasFocus",2);c([it()],_t.prototype,"isDraggingGridHandle",2);c([it()],_t.prototype,"isEmpty",2);c([it()],_t.prototype,"inputValue",2);c([it()],_t.prototype,"hue",2);c([it()],_t.prototype,"saturation",2);c([it()],_t.prototype,"brightness",2);c([it()],_t.prototype,"alpha",2);c([f()],_t.prototype,"value",2);c([Cr()],_t.prototype,"defaultValue",2);c([f()],_t.prototype,"label",2);c([f()],_t.prototype,"format",2);c([f({type:Boolean,reflect:!0})],_t.prototype,"inline",2);c([f({reflect:!0})],_t.prototype,"size",2);c([f({attribute:"no-format-toggle",type:Boolean})],_t.prototype,"noFormatToggle",2);c([f()],_t.prototype,"name",2);c([f({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);c([f({type:Boolean})],_t.prototype,"hoist",2);c([f({type:Boolean})],_t.prototype,"opacity",2);c([f({type:Boolean})],_t.prototype,"uppercase",2);c([f()],_t.prototype,"swatches",2);c([f({reflect:!0})],_t.prototype,"form",2);c([f({type:Boolean,reflect:!0})],_t.prototype,"required",2);c([_o({passive:!1})],_t.prototype,"handleTouchMove",1);c([j("format",{waitUntilFirstUpdate:!0})],_t.prototype,"handleFormatChange",1);c([j("opacity",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpacityChange",1);c([j("value")],_t.prototype,"handleValueChange",1);_t.define("sl-color-picker");var Fb=st`
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
`,fh=class extends Q{constructor(){super(...arguments),this.hasSlotController=new De(this,"footer","header","image")}render(){return N`
      <div
        part="base"
        class=${nt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};fh.styles=[at,Fb];fh.define("sl-card");var Bb=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Ub=st`
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
`;function*Hb(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}function*jb(t,e,s=1){const i=e===void 0?0:t;e??=t;for(let r=i;s>0?r<e:e<r;r+=s)yield r}var ee=class extends Q{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Bb(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Et(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||s!==r)&&(t.scrollTo({left:i,top:r,behavior:Ja()?"auto":"smooth"}),await Pe(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:i}=this,r=i?t/s:(t-e)/s+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",o=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),o&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const a of e){const l=a.target;l.toggleAttribute("inert",!a.isIntersecting),l.classList.toggle("--in-view",a.isIntersecting),l.setAttribute("aria-hidden",a.isIntersecting?"false":"true")}const s=e.find(a=>a.isIntersecting);if(!s)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,o=i.indexOf(s.target),n=this.loop?o-this.slidesPerPage:o;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const a=Number(s.target.getAttribute("data-clone"));this.goToSlide(a,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),i=t.slice(0,e);s.reverse().forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(t.length-o-1)),this.prepend(n)}),i.forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,i)=>{(i+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:i}=this,r=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!r.length)return;const n=i?(t+r.length)%r.length:se(t,0,r.length-s);this.activeSlide=n;const a=this.localize.dir()==="rtl",l=se(t+(i?s:0)+(a?s-1:0),0,o.length-1),d=o[l];this.scrollToSlide(d,Ja()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,i=s.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.left-i.left,n=r.top-i.top;o||n?(this.pendingSlideChange=!0,s.scrollTo({left:o+s.scrollLeft,top:n+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return N`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${nt({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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
                  class="${nt({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
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
                  class=${nt({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
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
                ${Hb(jb(s),a=>{const l=a===i;return N`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${nt({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
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
    `}};ee.styles=[at,Ub];ee.dependencies={"sl-icon":Dt};c([f({type:Boolean,reflect:!0})],ee.prototype,"loop",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"navigation",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"pagination",2);c([f({type:Boolean,reflect:!0})],ee.prototype,"autoplay",2);c([f({type:Number,attribute:"autoplay-interval"})],ee.prototype,"autoplayInterval",2);c([f({type:Number,attribute:"slides-per-page"})],ee.prototype,"slidesPerPage",2);c([f({type:Number,attribute:"slides-per-move"})],ee.prototype,"slidesPerMove",2);c([f()],ee.prototype,"orientation",2);c([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ee.prototype,"mouseDragging",2);c([K(".carousel__slides")],ee.prototype,"scrollContainer",2);c([K(".carousel__pagination")],ee.prototype,"paginationContainer",2);c([it()],ee.prototype,"activeSlide",2);c([it()],ee.prototype,"scrolling",2);c([it()],ee.prototype,"dragging",2);c([_o({passive:!0})],ee.prototype,"handleScroll",1);c([j("loop",{waitUntilFirstUpdate:!0}),j("slidesPerPage",{waitUntilFirstUpdate:!0})],ee.prototype,"initializeSlides",1);c([j("activeSlide")],ee.prototype,"handleSlideChange",1);c([j("slidesPerMove")],ee.prototype,"updateSlidesSnap",1);c([j("autoplay")],ee.prototype,"handleAutoplayChange",1);ee.define("sl-carousel");var Wb=(t,e)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...i)},e)}},ld=(t,e,s)=>{const i=t[e];t[e]=function(...r){i.call(this,...r),s.call(this,i,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,i=o=>{for(const n of o.changedTouches)e.add(n.identifier)},r=o=>{for(const n of o.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),ld(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=Wb(()=>{e.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),s.set(this,a)}),ld(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=s.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();var Kb=st`
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
`,gh=class extends Q{connectedCallback(){super.connectedCallback()}render(){return N` <slot></slot> `}};gh.styles=[at,Kb];gh.define("sl-carousel-item");var qb=st`
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
`,ki=class extends Q{constructor(){super(...arguments),this.hasSlotController=new De(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return N`
      <div
        part="base"
        class=${nt({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?N`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${X(this.target?this.target:void 0)}"
                rel=${X(this.target?this.rel:void 0)}
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
    `}};ki.styles=[at,qb];c([K("slot:not([name])")],ki.prototype,"defaultSlot",2);c([it()],ki.prototype,"renderType",2);c([f()],ki.prototype,"href",2);c([f()],ki.prototype,"target",2);c([f()],ki.prototype,"rel",2);c([j("href",{waitUntilFirstUpdate:!0})],ki.prototype,"hrefChanged",1);ki.define("sl-breadcrumb-item");var Gb=st`
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
`,js=class extends Q{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=N`
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
        class=${nt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};js.styles=[at,Gb];js.dependencies={"sl-icon":Dt};c([it()],js.prototype,"hasError",2);c([f()],js.prototype,"image",2);c([f()],js.prototype,"label",2);c([f()],js.prototype,"initials",2);c([f()],js.prototype,"loading",2);c([f({reflect:!0})],js.prototype,"shape",2);c([j("image")],js.prototype,"handleImageChange",1);js.define("sl-avatar");var Yb=st`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ar=class extends Q{constructor(){super(...arguments),this.localize=new Et(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,s)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),N`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ar.styles=[at,Yb];Ar.dependencies={"sl-icon":Dt};c([K("slot")],Ar.prototype,"defaultSlot",2);c([K('slot[name="separator"]')],Ar.prototype,"separatorSlot",2);c([f()],Ar.prototype,"label",2);Ar.define("sl-breadcrumb");var Xb=st`
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
`,ks=class extends Q{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:s}=this.animatedImage;t.width=e,t.height=s,t.getContext("2d").drawImage(this.animatedImage,0,0,e,s),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return N`
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
    `}};ks.styles=[at,Xb];ks.dependencies={"sl-icon":Dt};c([K(".animated-image__animated")],ks.prototype,"animatedImage",2);c([it()],ks.prototype,"frozenFrame",2);c([it()],ks.prototype,"isLoaded",2);c([f()],ks.prototype,"src",2);c([f()],ks.prototype,"alt",2);c([f({type:Boolean,reflect:!0})],ks.prototype,"play",2);c([j("play",{waitUntilFirstUpdate:!0})],ks.prototype,"handlePlayChange",1);c([j("src")],ks.prototype,"handleSrcChange",1);ks.define("sl-animated-image");var Jb=st`
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
`,$o=class extends Q{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return N`
      <span
        part="base"
        class=${nt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};$o.styles=[at,Jb];c([f({reflect:!0})],$o.prototype,"variant",2);c([f({type:Boolean,reflect:!0})],$o.prototype,"pill",2);c([f({type:Boolean,reflect:!0})],$o.prototype,"pulse",2);$o.define("sl-badge");const Qb=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Zb=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],t0=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],e0=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],s0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],i0=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],r0=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],o0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],n0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],a0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],l0=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],c0=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],d0=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],u0=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],h0=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],p0=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],f0=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],g0=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],m0=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],b0=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],y0=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],v0=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],_0=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],w0=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],x0=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],k0=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],C0=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],S0=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],E0=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],A0=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],$0=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],T0=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],I0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],L0=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],O0=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],R0=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],M0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],P0=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],D0=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],z0=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],V0=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],N0=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],F0=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],B0=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],U0=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],H0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],j0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],W0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],K0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],q0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],G0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Y0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],X0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],J0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Q0=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Z0=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],ty=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],ey=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],sy=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],iy=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ry=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],oy=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],ny=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ay=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ly=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],cy=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],dy=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],uy=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],hy=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],py=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],fy=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],gy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],my=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],by=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],yy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],vy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],_y=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],wy=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],xy=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ky=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Sy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Ey=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Ay=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],$y=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Ty=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Iy=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ly=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Oy=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Ry=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],My=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Py=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Dy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zy=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Vy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ny=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Fy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],By=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],mh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Uy=Object.freeze(Object.defineProperty({__proto__:null,backInDown:u0,backInLeft:h0,backInRight:p0,backInUp:f0,backOutDown:g0,backOutLeft:m0,backOutRight:b0,backOutUp:y0,bounce:Qb,bounceIn:v0,bounceInDown:_0,bounceInLeft:w0,bounceInRight:x0,bounceInUp:k0,bounceOut:C0,bounceOutDown:S0,bounceOutLeft:E0,bounceOutRight:A0,bounceOutUp:$0,easings:mh,fadeIn:T0,fadeInBottomLeft:I0,fadeInBottomRight:L0,fadeInDown:O0,fadeInDownBig:R0,fadeInLeft:M0,fadeInLeftBig:P0,fadeInRight:D0,fadeInRightBig:z0,fadeInTopLeft:V0,fadeInTopRight:N0,fadeInUp:F0,fadeInUpBig:B0,fadeOut:U0,fadeOutBottomLeft:H0,fadeOutBottomRight:j0,fadeOutDown:W0,fadeOutDownBig:K0,fadeOutLeft:q0,fadeOutLeftBig:G0,fadeOutRight:Y0,fadeOutRightBig:X0,fadeOutTopLeft:J0,fadeOutTopRight:Q0,fadeOutUp:Z0,fadeOutUpBig:ty,flash:Zb,flip:ey,flipInX:sy,flipInY:iy,flipOutX:ry,flipOutY:oy,headShake:t0,heartBeat:e0,hinge:$y,jackInTheBox:Ty,jello:s0,lightSpeedInLeft:ny,lightSpeedInRight:ay,lightSpeedOutLeft:ly,lightSpeedOutRight:cy,pulse:i0,rollIn:Iy,rollOut:Ly,rotateIn:dy,rotateInDownLeft:uy,rotateInDownRight:hy,rotateInUpLeft:py,rotateInUpRight:fy,rotateOut:gy,rotateOutDownLeft:my,rotateOutDownRight:by,rotateOutUpLeft:yy,rotateOutUpRight:vy,rubberBand:r0,shake:o0,shakeX:n0,shakeY:a0,slideInDown:_y,slideInLeft:wy,slideInRight:xy,slideInUp:ky,slideOutDown:Cy,slideOutLeft:Sy,slideOutRight:Ey,slideOutUp:Ay,swing:l0,tada:c0,wobble:d0,zoomIn:Oy,zoomInDown:Ry,zoomInLeft:My,zoomInRight:Py,zoomInUp:Dy,zoomOut:zy,zoomOutDown:Vy,zoomOutLeft:Ny,zoomOutRight:Fy,zoomOutUp:By},Symbol.toStringTag,{value:"Module"}));var Hy=st`
  :host {
    display: contents;
  }
`,be=class extends Q{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=mh[this.easing])!=null?t:this.easing,i=(e=this.keyframes)!=null?e:Uy[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!i?!1:(this.destroyAnimation(),this.animation=o.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};be.styles=[at,Hy];c([ig("slot")],be.prototype,"defaultSlot",2);c([f()],be.prototype,"name",2);c([f({type:Boolean,reflect:!0})],be.prototype,"play",2);c([f({type:Number})],be.prototype,"delay",2);c([f()],be.prototype,"direction",2);c([f({type:Number})],be.prototype,"duration",2);c([f()],be.prototype,"easing",2);c([f({attribute:"end-delay",type:Number})],be.prototype,"endDelay",2);c([f()],be.prototype,"fill",2);c([f({type:Number})],be.prototype,"iterations",2);c([f({attribute:"iteration-start",type:Number})],be.prototype,"iterationStart",2);c([f({attribute:!1})],be.prototype,"keyframes",2);c([f({attribute:"playback-rate",type:Number})],be.prototype,"playbackRate",2);c([j(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],be.prototype,"handleAnimationChange",1);c([j("play")],be.prototype,"handlePlayChange",1);c([j("playbackRate")],be.prototype,"handlePlaybackRateChange",1);be.define("sl-animation");Ga("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/");function jl(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const Nt={},Ni=[],zs=()=>{},bh=()=>!1,Kn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qn=t=>t.startsWith("onUpdate:"),xe=Object.assign,Wl=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},jy=Object.prototype.hasOwnProperty,It=(t,e)=>jy.call(t,e),ut=Array.isArray,mi=t=>To(t)==="[object Map]",fn=t=>To(t)==="[object Set]",cd=t=>To(t)==="[object Date]",gt=t=>typeof t=="function",Xt=t=>typeof t=="string",Qe=t=>typeof t=="symbol",Pt=t=>t!==null&&typeof t=="object",yh=t=>(Pt(t)||gt(t))&&gt(t.then)&&gt(t.catch),vh=Object.prototype.toString,To=t=>vh.call(t),Wy=t=>To(t).slice(8,-1),_h=t=>To(t)==="[object Object]",Gn=t=>Xt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xr=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=t=>{const e=Object.create(null);return(s=>e[s]||(e[s]=t(s)))},Ky=/-\w/g,hs=Yn(t=>t.replace(Ky,e=>e.slice(1).toUpperCase())),qy=/\B([A-Z])/g,Qi=Yn(t=>t.replace(qy,"-$1").toLowerCase()),wh=Yn(t=>t.charAt(0).toUpperCase()+t.slice(1)),xa=Yn(t=>t?`on${wh(t)}`:""),Ms=(t,e)=>!Object.is(t,e),ka=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},xh=(t,e,s,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:s})},Gy=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dd;const Xn=()=>dd||(dd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jn(t){if(ut(t)){const e={};for(let s=0;s<t.length;s++){const i=t[s],r=Xt(i)?Qy(i):Jn(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Xt(t)||Pt(t))return t}const Yy=/;(?![^(]*\))/g,Xy=/:([^]+)/,Jy=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Qy(t){const e={};return t.replace(Jy,s=>s.startsWith("/*")?"":s).split(Yy).forEach(s=>{if(s){const i=s.split(Xy);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function br(t){let e="";if(Xt(t))e=t;else if(ut(t))for(let s=0;s<t.length;s++){const i=br(t[s]);i&&(e+=i+" ")}else if(Pt(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}function Zy(t){if(!t)return null;let{class:e,style:s}=t;return e&&!Xt(e)&&(t.class=br(e)),s&&(t.style=Jn(s)),t}const tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ev=jl(tv);function kh(t){return!!t||t===""}function sv(t,e,s){if(t.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<t.length;r++)i=Qn(t[r],e[r],s);return i}function ud(t,e,s){if(t.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const o of t){let n=-1;for(let a=0;a<i.length;a++)if(!r[a]&&Qn(o,i[a],s)){n=a;break}if(n<0)return!1;r[n]=1}return!0}function iv(t,e,s){let i=mi(t),r=mi(e);if(i||r||(i=fn(t),r=fn(e),i||r))return i&&r?ud(t,e,s):!1;const o=Object.keys(t).length,n=Object.keys(e).length;if(o!==n)return!1;for(const a in t){const l=t.hasOwnProperty(a),d=e.hasOwnProperty(a);if(l&&!d||!l&&d||!Qn(t[a],e[a],s))return!1}return String(t)===String(e)}function hd(t,e,s,i){s||(s=[new Map,new Map]);const[r,o]=s;if(r.has(t)||o.has(e))return r.get(t)===e&&o.get(e)===t;r.set(t,e),o.set(e,t);const n=i(t,e,s);return r.delete(t),o.delete(e),n}function Qn(t,e,s){if(t===e)return!0;let i=cd(t),r=cd(e);return i||r?i&&r?t.getTime()===e.getTime():!1:(i=Qe(t),r=Qe(e),i||r?t===e:(i=ut(t),r=ut(e),i||r?i&&r?hd(t,e,s,sv):!1:(i=Pt(t),r=Pt(e),i||r?!i||!r?!1:hd(t,e,s,iv):String(t)===String(e))))}const Ch=t=>!!(t&&t.__v_isRef===!0),pt=t=>Xt(t)?t:t==null?"":ut(t)||Pt(t)&&(t.toString===vh||!gt(t.toString))?Ch(t)?pt(t.value):JSON.stringify(t,Sh,2):String(t),Sh=(t,e)=>Ch(e)?Sh(t,e.value):mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[i,r],o)=>(s[Ca(i,o)+" =>"]=r,s),{})}:fn(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>Ca(s))}:Qe(e)?Ca(e):Pt(e)&&!ut(e)&&!_h(e)?String(e):e,Ca=(t,e="")=>{var s;return Qe(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};let le;class Eh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&le&&(le.active?(this.parent=le,this.index=(le.scopes||(le.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes){const i=this.scopes.slice();for(e=0,s=i.length;e<s;e++)i[e].pause()}for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes){const r=this.scopes.slice();for(e=0,s=r.length;e<s;e++)r[e].resume()}const i=this.effects.slice();for(e=0,s=i.length;e<s;e++)i[e].resume()}}run(e){if(this._active){const s=le;try{return le=this,e()}finally{le=s}}}on(){++this._on===1&&(this.prevScope=le,le=this)}off(){if(this._on>0&&--this._on===0){if(le===this)le=this.prevScope;else{let e=le;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(s=0,i=r.length;s<i;s++)r[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Kl(t){return new Eh(t)}function ql(){return le}function Ah(t,e=!1){le&&le.cleanups.push(t)}let zt;const Sa=new WeakSet;class $h{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,le&&(le.active?le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sa.has(this)&&(Sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ih(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pd(this),Lh(this);const e=zt,s=ps;zt=this,ps=!0;try{return this.fn()}finally{Oh(this),zt=e,ps=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xl(e);this.deps=this.depsTail=void 0,pd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){il(this)&&this.run()}get dirty(){return il(this)}}let Th=0,Jr,Qr;function Ih(t,e=!1){if(t.flags|=8,e){t.next=Qr,Qr=t;return}t.next=Jr,Jr=t}function Gl(){Th++}function Yl(){if(--Th>0)return;if(Qr){let e=Qr;for(Qr=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=s}}if(t)throw t}function Lh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Oh(t){let e,s=t.depsTail,i=s;for(;i;){const r=i.prevDep;i.version===-1?(i===s&&(s=r),Xl(i),rv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=s}function il(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Rh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ao)||(t.globalVersion=ao,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!il(t))))return;t.flags|=2;const e=t.dep,s=zt,i=ps;zt=t,ps=!0;try{Lh(t);const r=t.fn(t._value);(e.version===0||Ms(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{zt=s,ps=i,Oh(t),t.flags&=-3}}function Xl(t,e=!1){const{dep:s,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),s.subs===t&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)Xl(o,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function rv(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let ps=!0;const Mh=[];function ii(){Mh.push(ps),ps=!1}function ri(){const t=Mh.pop();ps=t===void 0?!0:t}function pd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=zt;zt=void 0;try{e()}finally{zt=s}}}let ao=0;class ov{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!zt||!ps||zt===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==zt)s=this.activeLink=new ov(zt,this),zt.deps?(s.prevDep=zt.depsTail,zt.depsTail.nextDep=s,zt.depsTail=s):zt.deps=zt.depsTail=s,Ph(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=zt.depsTail,s.nextDep=void 0,zt.depsTail.nextDep=s,zt.depsTail=s,zt.deps===s&&(zt.deps=i)}return s}trigger(e){this.version++,ao++,this.notify(e)}notify(e){Gl();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Yl()}}}function Ph(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ph(i)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const gn=new WeakMap,Fi=Symbol(""),rl=Symbol(""),lo=Symbol("");function $e(t,e,s){if(ps&&zt){let i=gn.get(t);i||gn.set(t,i=new Map);let r=i.get(s);r||(i.set(s,r=new Jl),r.map=i,r.key=s),r.track()}}function Xs(t,e,s,i,r,o){const n=gn.get(t);if(!n){ao++;return}const a=l=>{l&&l.trigger()};if(Gl(),e==="clear")n.forEach(a);else{const l=ut(t),d=l&&Gn(s);if(l&&s==="length"){const h=Number(i);n.forEach((u,p)=>{(p==="length"||p===lo||!Qe(p)&&p>=h)&&a(u)})}else switch((s!==void 0||n.has(void 0))&&a(n.get(s)),d&&a(n.get(lo)),e){case"add":l?d&&a(n.get("length")):(a(n.get(Fi)),mi(t)&&a(n.get(rl)));break;case"delete":l||(a(n.get(Fi)),mi(t)&&a(n.get(rl)));break;case"set":mi(t)&&a(n.get(Fi));break}}Yl()}function nv(t,e){const s=gn.get(t);return s&&s.get(e)}function er(t){const e=Ct(t);return e===t||($e(e,"iterate",lo),Xe(t))?e:Vs(t)?fs(t)?e.map(s=>wi(ds(s))):e.map(wi):e.map(ds)}function Zn(t){return $e(t=Ct(t),"iterate",lo),t}function Os(t,e){return Vs(t)?wi(fs(t)?ds(e):e):ds(e)}const av={__proto__:null,[Symbol.iterator](){return Ea(this,Symbol.iterator,t=>Os(this,t))},concat(...t){return er(this).concat(...t.map(e=>ut(e)?er(e):e))},entries(){return Ea(this,"entries",t=>(t[1]=Os(this,t[1]),t))},every(t,e){return Ks(this,"every",t,e,void 0,arguments)},filter(t,e){return Ks(this,"filter",t,e,s=>s.map(i=>Os(this,i)),arguments)},find(t,e){return Ks(this,"find",t,e,s=>Os(this,s),arguments)},findIndex(t,e){return Ks(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ks(this,"findLast",t,e,s=>Os(this,s),arguments)},findLastIndex(t,e){return Ks(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ks(this,"forEach",t,e,void 0,arguments)},includes(...t){return Aa(this,"includes",t)},indexOf(...t){return Aa(this,"indexOf",t)},join(t){return er(this).join(t)},lastIndexOf(...t){return Aa(this,"lastIndexOf",t)},map(t,e){return Ks(this,"map",t,e,void 0,arguments)},pop(){return zr(this,"pop")},push(...t){return zr(this,"push",t)},reduce(t,...e){return fd(this,"reduce",t,e)},reduceRight(t,...e){return fd(this,"reduceRight",t,e)},shift(){return zr(this,"shift")},some(t,e){return Ks(this,"some",t,e,void 0,arguments)},splice(...t){return zr(this,"splice",t)},toReversed(){return er(this).toReversed()},toSorted(t){return er(this).toSorted(t)},toSpliced(...t){return er(this).toSpliced(...t)},unshift(...t){return zr(this,"unshift",t)},values(){return Ea(this,"values",t=>Os(this,t))}};function Ea(t,e,s){const i=Zn(t),r=i[e]();return i!==t&&!Xe(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=s(o.value)),o}),r}const lv=Array.prototype;function Ks(t,e,s,i,r,o){const n=Zn(t),a=n!==t&&!Xe(t),l=n[e];if(l!==lv[e]){const u=l.apply(t,o);return a?ds(u):u}let d=s;n!==t&&(a?d=function(u,p){return s.call(this,Os(t,u),p,t)}:s.length>2&&(d=function(u,p){return s.call(this,u,p,t)}));const h=l.call(n,d,i);return a&&r?r(h):h}function fd(t,e,s,i){const r=Zn(t),o=r!==t&&!Xe(t);let n=s,a=!1;r!==t&&(o?(a=i.length===0,n=function(d,h,u){return a&&(a=!1,d=Os(t,d)),s.call(this,d,Os(t,h),u,t)}):s.length>3&&(n=function(d,h,u){return s.call(this,d,h,u,t)}));const l=r[e](n,...i);return a?Os(t,l):l}function Aa(t,e,s){const i=Ct(t);$e(i,"iterate",lo);const r=i[e](...s);return(r===-1||r===!1)&&Lo(s[0])?(s[0]=Ct(s[0]),i[e](...s)):r}function zr(t,e,s=[]){ii(),Gl();const i=Ct(t)[e].apply(t,s);return Yl(),ri(),i}const cv=jl("__proto__,__v_isRef,__isVue"),Dh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qe));function dv(t){Qe(t)||(t=String(t));const e=Ct(this);return $e(e,"has",t),e.hasOwnProperty(t)}class zh{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,i){if(s==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return o;if(s==="__v_raw")return i===(r?o?_v:Bh:o?Fh:Nh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const n=ut(e);if(!r){let l;if(n&&(l=av[s]))return l;if(s==="hasOwnProperty")return dv}const a=Reflect.get(e,s,Wt(e)?e:i);if((Qe(s)?Dh.has(s):cv(s))||(r||$e(e,"get",s),o))return a;if(Wt(a)){const l=n&&Gn(s)?a:a.value;return r&&Pt(l)?nl(l):l}return Pt(a)?r?nl(a):Io(a):a}}class Vh extends zh{constructor(e=!1){super(!1,e)}set(e,s,i,r){let o=e[s];const n=ut(e)&&Gn(s);if(!this._isShallow){const d=Vs(o);if(!Xe(i)&&!Vs(i)&&(o=Ct(o),i=Ct(i)),!n&&Wt(o)&&!Wt(i))return d||(o.value=i),!0}const a=n?Number(s)<e.length:It(e,s),l=Reflect.set(e,s,i,Wt(e)?e:r);return e===Ct(r)&&l&&(a?Ms(i,o)&&Xs(e,"set",s,i):Xs(e,"add",s,i)),l}deleteProperty(e,s){const i=It(e,s);e[s];const r=Reflect.deleteProperty(e,s);return r&&i&&Xs(e,"delete",s,void 0),r}has(e,s){const i=Reflect.has(e,s);return(!Qe(s)||!Dh.has(s))&&$e(e,"has",s),i}ownKeys(e){return $e(e,"iterate",ut(e)?"length":Fi),Reflect.ownKeys(e)}}class uv extends zh{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const hv=new Vh,pv=new uv,fv=new Vh(!0);const ol=t=>t,jo=t=>Reflect.getPrototypeOf(t);function gv(t,e,s){return function(...i){const r=this.__v_raw,o=Ct(r),n=mi(o),a=t==="entries"||t===Symbol.iterator&&n,l=t==="keys"&&n,d=r[t](...i),h=s?ol:e?wi:ds;return!e&&$e(o,"iterate",l?rl:Fi),xe(Object.create(d),{next(){const{value:u,done:p}=d.next();return p?{value:u,done:p}:{value:a?[h(u[0]),h(u[1])]:h(u),done:p}}})}}function Wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function mv(t,e){const s={get(r){const o=this.__v_raw,n=Ct(o),a=Ct(r);t||(Ms(r,a)&&$e(n,"get",r),$e(n,"get",a));const{has:l}=jo(n),d=e?ol:t?wi:ds;if(l.call(n,r))return d(o.get(r));if(l.call(n,a))return d(o.get(a));o!==n&&o.get(r)},get size(){const r=this.__v_raw;return!t&&$e(Ct(r),"iterate",Fi),r.size},has(r){const o=this.__v_raw,n=Ct(o),a=Ct(r);return t||(Ms(r,a)&&$e(n,"has",r),$e(n,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const n=this,a=n.__v_raw,l=Ct(a),d=e?ol:t?wi:ds;return!t&&$e(l,"iterate",Fi),a.forEach((h,u)=>r.call(o,d(h),d(u),n))}};return xe(s,t?{add:Wo("add"),set:Wo("set"),delete:Wo("delete"),clear:Wo("clear")}:{add(r){const o=Ct(this),n=jo(o),a=Ct(r),l=!e&&!Xe(r)&&!Vs(r)?a:r;return n.has.call(o,l)||Ms(r,l)&&n.has.call(o,r)||Ms(a,l)&&n.has.call(o,a)||(o.add(l),Xs(o,"add",l,l)),this},set(r,o){!e&&!Xe(o)&&!Vs(o)&&(o=Ct(o));const n=Ct(this),{has:a,get:l}=jo(n);let d=a.call(n,r);d||(r=Ct(r),d=a.call(n,r));const h=l.call(n,r);return n.set(r,o),d?Ms(o,h)&&Xs(n,"set",r,o):Xs(n,"add",r,o),this},delete(r){const o=Ct(this),{has:n,get:a}=jo(o);let l=n.call(o,r);l||(r=Ct(r),l=n.call(o,r)),a&&a.call(o,r);const d=o.delete(r);return l&&Xs(o,"delete",r,void 0),d},clear(){const r=Ct(this),o=r.size!==0,n=r.clear();return o&&Xs(r,"clear",void 0,void 0),n}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=gv(r,t,e)}),s}function Ql(t,e){const s=mv(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(It(s,r)&&r in i?s:i,r,o)}const bv={get:Ql(!1,!1)},yv={get:Ql(!1,!0)},vv={get:Ql(!0,!1)};const Nh=new WeakMap,Fh=new WeakMap,Bh=new WeakMap,_v=new WeakMap;function wv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Io(t){return Vs(t)?t:Zl(t,!1,hv,bv,Nh)}function xv(t){return Zl(t,!1,fv,yv,Fh)}function nl(t){return Zl(t,!0,pv,vv,Bh)}function Zl(t,e,s,i,r){if(!Pt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const o=r.get(t);if(o)return o;const n=wv(Wy(t));if(n===0)return t;const a=new Proxy(t,n===2?i:s);return r.set(t,a),a}function fs(t){return Vs(t)?fs(t.__v_raw):!!(t&&t.__v_isReactive)}function Vs(t){return!!(t&&t.__v_isReadonly)}function Xe(t){return!!(t&&t.__v_isShallow)}function Lo(t){return t?!!t.__v_raw:!1}function Ct(t){const e=t&&t.__v_raw;return e?Ct(e):t}function tc(t){return!It(t,"__v_skip")&&Object.isExtensible(t)&&xh(t,"__v_skip",!0),t}const ds=t=>Pt(t)?Io(t):t,wi=t=>Pt(t)?nl(t):t;function Wt(t){return t?t.__v_isRef===!0:!1}function qt(t){return Uh(t,!1)}function kv(t){return Uh(t,!0)}function Uh(t,e){return Wt(t)?t:new Cv(t,e)}class Cv{constructor(e,s){this.dep=new Jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:Ct(e),this._value=s?e:ds(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,i=this.__v_isShallow||Xe(e)||Vs(e);e=i?e:Ct(e),Ms(e,s)&&(this._rawValue=e,this._value=i?e:ds(e),this.dep.trigger())}}function W(t){return Wt(t)?t.value:t}const Sv={get:(t,e,s)=>e==="__v_raw"?t:W(Reflect.get(t,e,s)),set:(t,e,s,i)=>{const r=t[e];return Wt(r)&&!Wt(s)?(r.value=s,!0):Reflect.set(t,e,s,i)}};function Hh(t){return fs(t)?t:new Proxy(t,Sv)}function jh(t){const e=ut(t)?new Array(t.length):{};for(const s in t)e[s]=Av(t,s);return e}class Ev{constructor(e,s,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Qe(s)?s:String(s),this._raw=Ct(e);let r=!0,o=e;if(!ut(e)||Qe(this._key)||!Gn(this._key))do r=!Lo(o)||Xe(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=W(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Wt(this._raw[this._key])){const s=this._object[this._key];if(Wt(s)){s.value=e;return}}this._object[this._key]=e}get dep(){return nv(this._raw,this._key)}}function Av(t,e,s){return new Ev(t,e,s)}class $v{constructor(e,s,i){this.fn=e,this.setter=s,this._value=void 0,this.dep=new Jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&zt!==this)return Ih(this,!0),!0}get value(){const e=this.dep.track();return Rh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tv(t,e,s=!1){let i,r;return gt(t)?i=t:(i=t.get,r=t.set),new $v(i,r,s)}const Ko={},mn=new WeakMap;let Ri;function Iv(t,e=!1,s=Ri){if(s){let i=mn.get(s);i||mn.set(s,i=[]),i.push(t)}}function Lv(t,e,s=Nt){const{immediate:i,deep:r,once:o,scheduler:n,augmentJob:a,call:l}=s,d=b=>r?b:Xe(b)||r===!1||r===0?fi(b,1):fi(b);let h,u,p,g,v=!1,x=!1;if(Wt(t)?(u=()=>t.value,v=Xe(t)):fs(t)?(u=()=>d(t),v=!0):ut(t)?(x=!0,v=t.some(b=>fs(b)||Xe(b)),u=()=>t.map(b=>{if(Wt(b))return b.value;if(fs(b))return d(b);if(gt(b))return l?l(b,2):b()})):gt(t)?e?u=l?()=>l(t,2):t:u=()=>{if(p){ii();try{p()}finally{ri()}}const b=Ri;Ri=h;try{return l?l(t,3,[g]):t(g)}finally{Ri=b}}:u=zs,e&&r){const b=u,E=r===!0?1/0:r;u=()=>fi(b(),E)}const I=ql(),k=()=>{h.stop(),I&&I.active&&Wl(I.effects,h)};if(o&&e){const b=e;e=(...E)=>{const O=b(...E);return k(),O}}let _=x?new Array(t.length).fill(Ko):Ko;const A=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(e){const E=h.run();if(b||r||v||(x?E.some((O,T)=>Ms(O,_[T])):Ms(E,_))){p&&p();const O=Ri;Ri=h;try{const T=[E,_===Ko?void 0:x&&_[0]===Ko?[]:_,g];_=E,l?l(e,3,T):e(...T)}finally{Ri=O}}}else h.run()};return a&&a(A),h=new $h(u),h.scheduler=n?()=>n(A,!1):A,g=b=>Iv(b,!1,h),p=h.onStop=()=>{const b=mn.get(h);if(b){if(l)l(b,4);else for(const E of b)E();mn.delete(h)}},e?i?A(!0):_=h.run():n?n(A.bind(null,!0),!0):h.run(),k.pause=h.pause.bind(h),k.resume=h.resume.bind(h),k.stop=k,k}function fi(t,e=1/0,s){if(e<=0||!Pt(t)||t.__v_skip||(s=s||new Map,(s.get(t)||0)>=e))return t;if(s.set(t,e),e--,Wt(t))fi(t.value,e,s);else if(ut(t))for(let i=0;i<t.length;i++)fi(t[i],e,s);else if(fn(t)||mi(t))t.forEach(i=>{fi(i,e,s)});else if(_h(t)){for(const i in t)fi(t[i],e,s);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&fi(t[i],e,s)}return t}function Oo(t,e,s,i){try{return i?t(...i):t()}catch(r){ta(r,e,s)}}function bs(t,e,s,i){if(gt(t)){const r=Oo(t,e,s,i);return r&&yh(r)&&r.catch(o=>{ta(o,e,s)}),r}if(ut(t)){const r=[];for(let o=0;o<t.length;o++)r.push(bs(t[o],e,s,i));return r}}function ta(t,e,s,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:n}=e&&e.appContext.config||Nt;if(e){let a=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](t,l,d)===!1)return}a=a.parent}if(o){ii(),Oo(o,null,10,[t,l,d]),ri();return}}Ov(t,s,r,i,n)}function Ov(t,e,s,i=!0,r=!1){if(r)throw t;console.error(t)}const Re=[];let Is=-1;const hr=[];let hi=null,nr=0;const Wh=Promise.resolve();let bn=null;function Kh(t){const e=bn||Wh;return t?e.then(this?t.bind(this):t):e}function Rv(t){let e=Is+1,s=Re.length;for(;e<s;){const i=e+s>>>1,r=Re[i],o=co(r);o<t||o===t&&r.flags&2?e=i+1:s=i}return e}function ec(t){if(!(t.flags&1)){const e=co(t),s=Re[Re.length-1];!s||!(t.flags&2)&&e>=co(s)?Re.push(t):Re.splice(Rv(e),0,t),t.flags|=1,qh()}}function qh(){bn||(bn=Wh.then(Yh))}function Mv(t){if(!ut(t))hi&&t.id===-1?hi.splice(nr+1,0,t):t.flags&1||(hr.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)hr.push(t[e]);qh()}function gd(t,e,s=Is+1){for(;s<Re.length;s++){const i=Re[s];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Re.splice(s,1),s--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gh(t){if(hr.length){const e=[...new Set(hr)].sort((s,i)=>co(s)-co(i));if(hr.length=0,hi){for(let s=0;s<e.length;s++)hi.push(e[s]);return}for(hi=e,nr=0;nr<hi.length;nr++){const s=hi[nr];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}hi=null,nr=0}}const co=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Yh(t){try{for(Is=0;Is<Re.length;Is++){const e=Re[Is];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Is<Re.length;Is++){const e=Re[Is];e&&(e.flags&=-2)}Is=-1,Re.length=0,Gh(),bn=null,(Re.length||hr.length)&&Yh()}}let Be=null,Xh=null;function yn(t){const e=Be;return Be=t,Xh=t&&t.type.__scopeId||null,e}function Jh(t,e=Be,s){if(!e||t._n)return t;const i=(...r)=>{i._d&&yr(-1);const o=yn(e),n=si.length;let a;try{a=t(...r)}finally{for(let l=si.length;l>n;l--)lc();yn(o),i._d&&yr(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ii(t,e,s,i){const r=t.dirs,o=e&&e.dirs;for(let n=0;n<r.length;n++){const a=r[n];o&&(a.oldValue=o[n].value);let l=a.dir[i];l&&(ii(),bs(l,s,8,[t.el,a,t,e]),ri())}}function Pv(t,e){if(Me){let s=Me.provides;const i=Me.parent&&Me.parent.provides;i===s&&(s=Me.provides=Object.create(i)),s[t]=e}}function fe(t,e,s=!1){const i=cc();if(i||Bi){let r=Bi?Bi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return s&&gt(e)?e.call(i&&i.proxy):e}}function Dv(){return!!(cc()||Bi)}const zv=Symbol.for("v-scx"),Vv=()=>fe(zv);function bi(t,e,s){return Qh(t,e,s)}function Qh(t,e,s=Nt){const{immediate:i,deep:r,flush:o,once:n}=s,a=xe({},s),l=e&&i||!e&&o!=="post";let d;if(fo){if(o==="sync"){const g=Vv();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=zs,g.resume=zs,g.pause=zs,g}}const h=Me;a.call=(g,v,x)=>bs(g,h,v,x);let u=!1;o==="post"?a.scheduler=g=>{Ve(g,h&&h.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(g,v)=>{v?g():ec(g)}),a.augmentJob=g=>{e&&(g.flags|=4),u&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=Lv(t,e,a);return fo&&(d?d.push(p):l&&p()),p}function Nv(t,e,s){const i=this.proxy,r=Xt(t)?t.includes(".")?Zh(i,t):()=>i[t]:t.bind(i,i);let o;gt(e)?o=e:(o=e.handler,s=e);const n=Mo(this),a=Qh(r,o.bind(i),s);return n(),a}function Zh(t,e){const s=e.split(".");return()=>{let i=t;for(let r=0;r<s.length&&i;r++)i=i[s[r]];return i}}const Fv=Symbol("_vte"),ea=t=>t.__isTeleport,$a=Symbol("_leaveCb");function Bv(t){let e=t[0];if(t.length>1){for(const s of t)if(s.type!==Ns){e=s;break}}return e}function tp(t){if(!ic(t))return ea(t.type)&&t.children?Bv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:s}=t;if(s){if(e&16)return s[0];if(e&32&&gt(s.default))return s.default()}}function sc(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const s=t.component.subTree;sc(ea(s.type)&&tp(s)||s,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ue(t,e){return gt(t)?xe({name:t.name},e,{setup:t}):t}function ep(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function md(t,e){let s;return!!((s=Object.getOwnPropertyDescriptor(t,e))&&!s.configurable)}const vn=new WeakMap;function Zr(t,e,s,i,r=!1){if(ut(t)){t.forEach((x,I)=>Zr(x,e&&(ut(e)?e[I]:e),s,i,r));return}if(pr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zr(t,e,s,i.component.subTree);return}const o=i.shapeFlag&4?dc(i.component):i.el,n=r?null:o,{i:a,r:l}=t,d=e&&e.r,h=a.refs===Nt?a.refs={}:a.refs,u=a.setupState,p=Ct(u),g=u===Nt?bh:x=>md(h,x)?!1:It(p,x),v=(x,I)=>!(I&&md(h,I));if(d!=null&&d!==l){if(bd(e),Xt(d))h[d]=null,g(d)&&(u[d]=null);else if(Wt(d)){const x=e;v(d,x.k)&&(d.value=null),x.k&&(h[x.k]=null)}}if(gt(l))Oo(l,a,12,[n,h]);else{const x=Xt(l),I=Wt(l);if(x||I){const k=()=>{if(t.f){const _=x?g(l)?u[l]:h[l]:v()||!t.k?l.value:h[t.k];if(r)ut(_)&&Wl(_,o);else if(ut(_))_.includes(o)||_.push(o);else if(x)h[l]=[o],g(l)&&(u[l]=h[l]);else{const A=[o];v(l,t.k)&&(l.value=A),t.k&&(h[t.k]=A)}}else x?(h[l]=n,g(l)&&(u[l]=n)):I&&(v(l,t.k)&&(l.value=n),t.k&&(h[t.k]=n))};if(n){const _=()=>{k(),vn.delete(t)};_.id=-1,vn.set(t,_),Ve(_,s)}else bd(t),k()}}}function bd(t){const e=vn.get(t);e&&(e.flags|=8,vn.delete(t))}Xn().requestIdleCallback;Xn().cancelIdleCallback;const pr=t=>!!t.type.__asyncLoader,ic=t=>t.type.__isKeepAlive;function Uv(t,e){sp(t,"a",e)}function Hv(t,e){sp(t,"da",e)}function sp(t,e,s=Me){const i=t.__wdc||(t.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(sa(e,i,s),s){let r=s.parent;for(;r&&r.parent;)ic(r.parent.vnode)&&jv(i,e,s,r),r=r.parent}}function jv(t,e,s,i){const r=sa(e,t,i,!0);oc(()=>{Wl(i[e],r)},s)}function sa(t,e,s=Me,i=!1){if(s){const r=s[t]||(s[t]=[]),o=e.__weh||(e.__weh=(...n)=>{ii();const a=Mo(s),l=bs(e,s,t,n);return a(),ri(),l});return i?r.unshift(o):r.push(o),o}}const li=t=>(e,s=Me)=>{(!fo||t==="sp")&&sa(t,(...i)=>e(...i),s)},Wv=li("bm"),rc=li("m"),Kv=li("bu"),qv=li("u"),Gv=li("bum"),oc=li("um"),Yv=li("sp"),Xv=li("rtg"),Jv=li("rtc");function Qv(t,e=Me){sa("ec",t,e)}const Zv=Symbol.for("v-ndc");function ip(t,e,s,i){let r;const o=s,n=ut(t);if(n||Xt(t)){const a=n&&fs(t);let l=!1,d=!1;a&&(l=!Xe(t),d=Vs(t),t=Zn(t)),r=new Array(t.length);for(let h=0,u=t.length;h<u;h++)r[h]=e(l?d?wi(ds(t[h])):ds(t[h]):t[h],h,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o)}else if(Pt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const h=a[l];r[l]=e(t[h],h,l,o)}}else r=[];return r}function t1(t,e,s,i,r,o){if(s==null&&(s={}),Be.ce||Be.parent&&pr(Be.parent)&&Be.parent.ce){const d=s,h=Object.keys(d).length>0;return ht(),Ps(Te,null,[Ft("slot",d,i)],h?-2:64)}let n=t[e];n&&n._c&&(n._d=!1);const a=si.length;ht();let l;try{const d=n&&rp(n(s)),h=s.key||o||d&&d.key;l=Ps(Te,{key:(h&&!Qe(h)?h:`_${e}`)+(!d&&i?"_fb":"")},d||(i?i():[]),d&&t._===1?64:-2)}catch(d){for(let h=si.length;h>a;h--)lc();throw d}finally{n&&n._c&&(n._d=!0)}return l}function rp(t){return t.some(e=>ho(e)?!(e.type===Ns||e.type===Te&&!rp(e.children)):!0)?t:null}const al=t=>t?Sp(t)?dc(t):al(t.parent):null,to=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>np(t),$forceUpdate:t=>t.f||(t.f=()=>{ec(t.update)}),$nextTick:t=>t.n||(t.n=Kh.bind(t.proxy)),$watch:t=>Nv.bind(t)}),Ta=(t,e)=>t!==Nt&&!t.__isScriptSetup&&It(t,e),e1={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:i,data:r,props:o,accessCache:n,type:a,appContext:l}=t;if(e[0]!=="$"){const p=n[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return s[e];case 3:return o[e]}else{if(Ta(i,e))return n[e]=1,i[e];if(r!==Nt&&It(r,e))return n[e]=2,r[e];if(It(o,e))return n[e]=3,o[e];if(s!==Nt&&It(s,e))return n[e]=4,s[e];ll&&(n[e]=0)}}const d=to[e];let h,u;if(d)return e==="$attrs"&&$e(t.attrs,"get",""),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(s!==Nt&&It(s,e))return n[e]=4,s[e];if(u=l.config.globalProperties,It(u,e))return u[e]},set({_:t},e,s){const{data:i,setupState:r,ctx:o}=t;return Ta(r,e)?(r[e]=s,!0):i!==Nt&&It(i,e)?(i[e]=s,!0):It(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:i,appContext:r,props:o,type:n}},a){let l;return!!(s[a]||t!==Nt&&a[0]!=="$"&&It(t,a)||Ta(e,a)||It(o,a)||It(i,a)||It(to,a)||It(r.config.globalProperties,a)||(l=n.__cssModules)&&l[a])},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:It(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function yd(t){return ut(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let ll=!0;function s1(t){const e=np(t),s=t.proxy,i=t.ctx;ll=!1,e.beforeCreate&&vd(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:n,watch:a,provide:l,inject:d,created:h,beforeMount:u,mounted:p,beforeUpdate:g,updated:v,activated:x,deactivated:I,beforeDestroy:k,beforeUnmount:_,destroyed:A,unmounted:b,render:E,renderTracked:O,renderTriggered:T,errorCaptured:B,serverPrefetch:M,expose:D,inheritAttrs:ot,components:tt,directives:bt,filters:wt}=e;if(d&&i1(d,i,null),n)for(const G in n){const lt=n[G];gt(lt)&&(i[G]=lt.bind(s))}if(r){const G=r.call(s,s);Pt(G)&&(t.data=Io(G))}if(ll=!0,o)for(const G in o){const lt=o[G],et=gt(lt)?lt.bind(s,s):gt(lt.get)?lt.get.bind(s,s):zs,$t=!gt(lt)&&gt(lt.set)?lt.set.bind(s):zs,pe=Vt({get:et,set:$t});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Ee=>pe.value=Ee})}if(a)for(const G in a)op(a[G],i,s,G);if(l){const G=gt(l)?l.call(s):l;Reflect.ownKeys(G).forEach(lt=>{Pv(lt,G[lt])})}h&&vd(h,t,"c");function Z(G,lt){ut(lt)?lt.forEach(et=>G(et.bind(s))):lt&&G(lt.bind(s))}if(Z(Wv,u),Z(rc,p),Z(Kv,g),Z(qv,v),Z(Uv,x),Z(Hv,I),Z(Qv,B),Z(Jv,O),Z(Xv,T),Z(Gv,_),Z(oc,b),Z(Yv,M),ut(D))if(D.length){const G=t.exposed||(t.exposed={});D.forEach(lt=>{Object.defineProperty(G,lt,{get:()=>s[lt],set:et=>s[lt]=et,enumerable:!0})})}else t.exposed||(t.exposed={});E&&t.render===zs&&(t.render=E),ot!=null&&(t.inheritAttrs=ot),tt&&(t.components=tt),bt&&(t.directives=bt),M&&ep(t)}function i1(t,e,s=zs){ut(t)&&(t=cl(t));for(const i in t){const r=t[i];let o;Pt(r)?"default"in r?o=fe(r.from||i,r.default,!0):o=fe(r.from||i):o=fe(r),Wt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:n=>o.value=n}):e[i]=o}}function vd(t,e,s){bs(ut(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,s)}function op(t,e,s,i){let r=i.includes(".")?Zh(s,i):()=>s[i];if(Xt(t)){const o=e[t];gt(o)&&bi(r,o)}else if(gt(t))bi(r,t.bind(s));else if(Pt(t))if(ut(t))t.forEach(o=>op(o,e,s,i));else{const o=gt(t.handler)?t.handler.bind(s):e[t.handler];gt(o)&&bi(r,o,t)}}function np(t){const e=t.type,{mixins:s,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:n}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!s&&!i?l=e:(l={},r.length&&r.forEach(d=>_n(l,d,n,!0)),_n(l,e,n)),Pt(e)&&o.set(e,l),l}function _n(t,e,s,i=!1){const{mixins:r,extends:o}=e;o&&_n(t,o,s,!0),r&&r.forEach(n=>_n(t,n,s,!0));for(const n in e)if(!(i&&n==="expose")){const a=r1[n]||s&&s[n];t[n]=a?a(t[n],e[n]):e[n]}return t}const r1={data:_d,props:wd,emits:wd,methods:Fr,computed:Fr,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Fr,directives:Fr,watch:n1,provide:_d,inject:o1};function _d(t,e){return e?t?function(){return xe(gt(t)?t.call(this,this):t,gt(e)?e.call(this,this):e)}:e:t}function o1(t,e){return Fr(cl(t),cl(e))}function cl(t){if(ut(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Fr(t,e){return t?xe(Object.create(null),t,e):e}function wd(t,e){return t?ut(t)&&ut(e)?[...new Set([...t,...e])]:xe(Object.create(null),yd(t),yd(e??{})):e}function n1(t,e){if(!t)return e;if(!e)return t;const s=xe(Object.create(null),t);for(const i in e)s[i]=Oe(t[i],e[i]);return s}function ap(){return{app:null,config:{isNativeTag:bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let a1=0;function l1(t,e){return function(i,r=null){gt(i)||(i=xe({},i)),r!=null&&!Pt(r)&&(r=null);const o=ap(),n=new WeakSet,a=[];let l=!1;const d=o.app={_uid:a1++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:z1,get config(){return o.config},set config(h){},use(h,...u){return n.has(h)||(h&&gt(h.install)?(n.add(h),h.install(d,...u)):gt(h)&&(n.add(h),h(d,...u))),d},mixin(h){return o.mixins.includes(h)||o.mixins.push(h),d},component(h,u){return u?(o.components[h]=u,d):o.components[h]},directive(h,u){return u?(o.directives[h]=u,d):o.directives[h]},mount(h,u,p){if(!l){const g=d._ceVNode||Ft(i,r);return g.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),t(g,h,p),l=!0,d._container=h,h.__vue_app__=d,dc(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(bs(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(h,u){return o.provides[h]=u,d},runWithContext(h){const u=Bi;Bi=d;try{return h()}finally{Bi=u}}};return d}}let Bi=null;const c1=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hs(e)}Modifiers`]||t[`${Qi(e)}Modifiers`];function d1(t,e,...s){if(t.isUnmounted)return;const i=t.vnode.props||Nt;let r=s;const o=e.startsWith("update:"),n=o&&c1(i,e.slice(7));n&&(n.trim&&(r=s.map(h=>Xt(h)?h.trim():h)),n.number&&(r=r.map(Gy)));let a,l=i[a=xa(e)]||i[a=xa(hs(e))];!l&&o&&(l=i[a=xa(Qi(e))]),l&&bs(l,t,6,r);const d=i[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bs(d,t,6,r)}}const u1=new WeakMap;function lp(t,e,s=!1){const i=s?u1:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let n={},a=!1;if(!gt(t)){const l=d=>{const h=lp(d,e,!0);h&&(a=!0,xe(n,h))};!s&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(Pt(t)&&i.set(t,null),null):(ut(o)?o.forEach(l=>n[l]=null):xe(n,o),Pt(t)&&i.set(t,n),n)}function ia(t,e){return!t||!Kn(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),It(t,e[0].toLowerCase()+e.slice(1))||It(t,Qi(e))||It(t,e))}function xd(t){const{type:e,vnode:s,proxy:i,withProxy:r,propsOptions:[o],slots:n,attrs:a,emit:l,render:d,renderCache:h,props:u,data:p,setupState:g,ctx:v,inheritAttrs:x}=t,I=yn(t);let k,_;try{if(s.shapeFlag&4){const b=r||i,E=b;k=Rs(d.call(E,b,h,u,g,p,v)),_=a}else{const b=e;k=Rs(b.length>1?b(u,{attrs:a,slots:n,emit:l}):b(u,null)),_=e.props?a:h1(a)}}catch(b){si.length=0,ta(b,t,1),k=Ft(Ns)}let A=k;if(_&&x!==!1){const b=Object.keys(_),{shapeFlag:E}=A;b.length&&E&7&&(o&&b.some(qn)&&(_=p1(_,o)),A=vr(A,_,!1,!0))}if(s.dirs&&(A=vr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition){const b=ea(A.type)&&tp(A)||A;sc(b,s.transition)}return k=A,yn(I),k}const h1=t=>{let e;for(const s in t)(s==="class"||s==="style"||Kn(s))&&((e||(e={}))[s]=t[s]);return e},p1=(t,e)=>{const s={};for(const i in t)(!qn(i)||!(i.slice(9)in e))&&(s[i]=t[i]);return s};function f1(t,e,s){const{props:i,children:r,component:o}=t,{props:n,children:a,patchFlag:l}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return i?kd(i,n,d):!!n;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const p=h[u];if(cp(n,i,p)&&!ia(d,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===n?!1:i?n?kd(i,n,d):!0:!!n;return!1}function kd(t,e,s){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(cp(e,t,o)&&!ia(s,o))return!0}return!1}function cp(t,e,s){const i=t[s],r=e[s];return s==="style"&&Pt(i)&&Pt(r)?!Qn(i,r):i!==r}function g1({vnode:t,parent:e,suspense:s},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}s&&s.activeBranch===t&&(s.vnode.el=i)}const dp={},up=()=>Object.create(dp),hp=t=>Object.getPrototypeOf(t)===dp;function m1(t,e,s,i=!1){const r={},o=up();t.propsDefaults=Object.create(null),pp(t,e,r,o);for(const n in t.propsOptions[0])n in r||(r[n]=void 0);s?t.props=i?r:xv(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function b1(t,e,s,i){const{props:r,attrs:o,vnode:{patchFlag:n}}=t,a=Ct(r),[l]=t.propsOptions;let d=!1;if((i||n>0)&&!(n&16)){if(n&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let p=h[u];if(ia(t.emitsOptions,p))continue;const g=e[p];if(l)if(It(o,p))g!==o[p]&&(o[p]=g,d=!0);else{const v=hs(p);r[v]=dl(l,a,v,g,t,!1)}else g!==o[p]&&(o[p]=g,d=!0)}}}else{pp(t,e,r,o)&&(d=!0);let h;for(const u in a)(!e||!It(e,u)&&((h=Qi(u))===u||!It(e,h)))&&(l?s&&(s[u]!==void 0||s[h]!==void 0)&&(r[u]=dl(l,a,u,void 0,t,!0)):delete r[u]);if(o!==a)for(const u in o)(!e||!It(e,u))&&(delete o[u],d=!0)}d&&Xs(t.attrs,"set","")}function pp(t,e,s,i){const[r,o]=t.propsOptions;let n=!1,a;if(e)for(let l in e){if(Xr(l))continue;const d=e[l];let h;r&&It(r,h=hs(l))?!o||!o.includes(h)?s[h]=d:(a||(a={}))[h]=d:ia(t.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,n=!0)}if(o){const l=Ct(s),d=a||Nt;for(let h=0;h<o.length;h++){const u=o[h];s[u]=dl(r,l,u,d[u],t,!It(d,u))}}return n}function dl(t,e,s,i,r,o){const n=t[s];if(n!=null){const a=It(n,"default");if(a&&i===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&gt(l)){const{propsDefaults:d}=r;if(s in d)i=d[s];else{const h=Mo(r);i=d[s]=l.call(null,e),h()}}else i=l;r.ce&&r.ce._setProp(s,i)}n[0]&&(o&&!a?i=!1:n[1]&&(i===""||i===Qi(s))&&(i=!0))}return i}const y1=new WeakMap;function fp(t,e,s=!1){const i=s?y1:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,n={},a=[];let l=!1;if(!gt(t)){const h=u=>{l=!0;const[p,g]=fp(u,e,!0);xe(n,p),g&&a.push(...g)};!s&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!o&&!l)return Pt(t)&&i.set(t,Ni),Ni;if(ut(o))for(let h=0;h<o.length;h++){const u=hs(o[h]);Cd(u)&&(n[u]=Nt)}else if(o)for(const h in o){const u=hs(h);if(Cd(u)){const p=o[h],g=n[u]=ut(p)||gt(p)?{type:p}:xe({},p),v=g.type;let x=!1,I=!0;if(ut(v))for(let k=0;k<v.length;++k){const _=v[k],A=gt(_)&&_.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(I=!1)}else x=gt(v)&&v.name==="Boolean";g[0]=x,g[1]=I,(x||It(g,"default"))&&a.push(u)}}const d=[n,a];return Pt(t)&&i.set(t,d),d}function Cd(t){return t[0]!=="$"&&!Xr(t)}const nc=t=>t==="_"||t==="_ctx"||t==="$stable",ac=t=>ut(t)?t.map(Rs):[Rs(t)],v1=(t,e,s)=>{if(e._n)return e;const i=Jh((...r)=>ac(e(...r)),s);return i._c=!1,i},gp=(t,e,s)=>{const i=t._ctx;for(const r in t){if(nc(r))continue;const o=t[r];if(gt(o))e[r]=v1(r,o,i);else if(o!=null){const n=ac(o);e[r]=()=>n}}},mp=(t,e)=>{const s=ac(e);t.slots.default=()=>s},bp=(t,e,s)=>{for(const i in e)(s||!nc(i))&&(t[i]=e[i])},_1=(t,e,s)=>{const i=t.slots=up();if(t.vnode.shapeFlag&32){const r=e._;r?(bp(i,e,s),s&&xh(i,"_",r,!0)):gp(e,i)}else e&&mp(t,e)},w1=(t,e,s)=>{const{vnode:i,slots:r}=t;let o=!0,n=Nt;if(i.shapeFlag&32){const a=e._;a?s&&a===1?o=!1:bp(r,e,s):(o=!e.$stable,gp(e,r)),n=e}else e&&(mp(t,e),n={default:1});if(o)for(const a in r)!nc(a)&&n[a]==null&&delete r[a]},Ve=E1;function x1(t){return k1(t)}function k1(t,e){const s=Xn();s.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:n,createText:a,createComment:l,setText:d,setElementText:h,parentNode:u,nextSibling:p,setScopeId:g=zs,insertStaticContent:v}=t,x=(w,C,R,F=null,z=null,V=null,m=void 0,y=null,S=!!C.dynamicChildren)=>{if(w===C)return;w&&!Vr(w,C)&&(F=Ai(w),Ee(w,z,V,!0),w=null),C.patchFlag===-2&&(S=!1,C.dynamicChildren=null),C.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(C.dynamicChildren===Ni&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:$,ref:q,shapeFlag:U}=C;switch($){case Ro:I(w,C,R,F);break;case Ns:k(w,C,R,F);break;case La:w==null&&_(C,R,F,m);break;case Te:tt(w,C,R,F,z,V,m,y,S);break;default:U&1?E(w,C,R,F,z,V,m,y,S):U&6?bt(w,C,R,F,z,V,m,y,S):(U&64||U&128)&&$.process(w,C,R,F,z,V,m,y,S,Ss)}q!=null&&z?Zr(q,w&&w.ref,V,C||w,!C):q==null&&w&&w.ref!=null&&Zr(w.ref,null,V,w,!0)},I=(w,C,R,F)=>{if(w==null)i(C.el=a(C.children),R,F);else{const z=C.el=w.el;C.children!==w.children&&d(z,C.children)}},k=(w,C,R,F)=>{w==null?i(C.el=l(C.children||""),R,F):C.el=w.el},_=(w,C,R,F)=>{[w.el,w.anchor]=v(w.children,C,R,F,w.el,w.anchor)},A=({el:w,anchor:C},R,F)=>{let z;for(;w&&w!==C;)z=p(w),i(w,R,F),w=z;i(C,R,F)},b=({el:w,anchor:C})=>{let R;for(;w&&w!==C;)R=p(w),r(w),w=R;r(C)},E=(w,C,R,F,z,V,m,y,S)=>{if(C.type==="svg"?m="svg":C.type==="math"&&(m="mathml"),w==null)O(C,R,F,z,V,m,y,S);else{const $=w.el&&w.el._isVueCE?w.el:null;try{$&&$._beginPatch(),M(w,C,z,V,m,y,S)}finally{$&&$._endPatch()}}},O=(w,C,R,F,z,V,m,y)=>{let S,$;const{props:q,shapeFlag:U,transition:Y,dirs:dt}=w;if(S=w.el=n(w.type,V,q&&q.is,q),U&8?h(S,w.children):U&16&&B(w.children,S,null,F,z,Ia(w,V),m,y),dt&&Ii(w,null,F,"created"),T(S,w,w.scopeId,m,F),q){for(const L in q)L!=="value"&&!Xr(L)&&o(S,L,null,q[L],V,F);"value"in q&&o(S,"value",null,q.value,V),($=q.onVnodeBeforeMount)&&As($,F,w)}dt&&Ii(w,null,F,"beforeMount");const ct=C1(z,Y);ct&&Y.beforeEnter(S),i(S,C,R),(($=q&&q.onVnodeMounted)||ct||dt)&&Ve(()=>{$&&As($,F,w),ct&&Y.enter(S),dt&&Ii(w,null,F,"mounted")},z)},T=(w,C,R,F,z)=>{if(R&&g(w,R),F)for(let V=0;V<F.length;V++)g(w,F[V]);if(z){let V=z.subTree;if(C===V||wp(V.type)&&(V.ssContent===C||V.ssFallback===C)){const m=z.vnode;T(w,m,m.scopeId,m.slotScopeIds,z.parent)}}},B=(w,C,R,F,z,V,m,y,S=0)=>{for(let $=S;$<w.length;$++){const q=w[$]=y?Ys(w[$]):Rs(w[$]);x(null,q,C,R,F,z,V,m,y)}},M=(w,C,R,F,z,V,m)=>{const y=C.el=w.el;let{patchFlag:S,dynamicChildren:$,dirs:q}=C;S|=w.patchFlag&16;const U=w.props||Nt,Y=C.props||Nt;let dt;if(R&&Li(R,!1),(dt=Y.onVnodeBeforeUpdate)&&As(dt,R,C,w),q&&Ii(C,w,R,"beforeUpdate"),R&&Li(R,!0),$&&(!w.dynamicChildren||w.dynamicChildren.length!==$.length)&&(S=0,m=!1,$=null),(U.innerHTML&&Y.innerHTML==null||U.textContent&&Y.textContent==null)&&h(y,""),$?D(w.dynamicChildren,$,y,R,F,Ia(C,z),V):m||lt(w,C,y,null,R,F,Ia(C,z),V,!1),S>0){if(S&16)ot(y,U,Y,R,z);else if(S&2&&U.class!==Y.class&&o(y,"class",null,Y.class,z),S&4&&o(y,"style",U.style,Y.style,z),S&8){const ct=C.dynamicProps;for(let L=0;L<ct.length;L++){const P=ct[L],ft=U[P],yt=Y[P];(yt!==ft||P==="value")&&o(y,P,ft,yt,z,R)}}S&1&&w.children!==C.children&&h(y,C.children)}else!m&&$==null&&ot(y,U,Y,R,z);((dt=Y.onVnodeUpdated)||q)&&Ve(()=>{dt&&As(dt,R,C,w),q&&Ii(C,w,R,"updated")},F)},D=(w,C,R,F,z,V,m)=>{for(let y=0;y<C.length;y++){const S=w[y],$=C[y],q=S.el&&(S.type===Te||!Vr(S,$)||S.shapeFlag&198)?u(S.el):R;x(S,$,q,null,F,z,V,m,!0)}},ot=(w,C,R,F,z)=>{if(C!==R){if(C!==Nt)for(const V in C)!Xr(V)&&!(V in R)&&o(w,V,C[V],null,z,F);for(const V in R){if(Xr(V))continue;const m=R[V],y=C[V];m!==y&&V!=="value"&&o(w,V,y,m,z,F)}"value"in R&&o(w,"value",C.value,R.value,z)}},tt=(w,C,R,F,z,V,m,y,S)=>{const $=C.el=w?w.el:a(""),q=C.anchor=w?w.anchor:a("");let{patchFlag:U,dynamicChildren:Y,slotScopeIds:dt}=C;dt&&(y=y?y.concat(dt):dt),w==null?(i($,R,F),i(q,R,F),B(C.children||[],R,q,z,V,m,y,S)):U>0&&U&64&&Y&&w.dynamicChildren&&w.dynamicChildren.length===Y.length?(D(w.dynamicChildren,Y,R,z,V,m,y),(C.key!=null||z&&C===z.subTree)&&yp(w,C,!0)):lt(w,C,R,q,z,V,m,y,S)},bt=(w,C,R,F,z,V,m,y,S)=>{C.slotScopeIds=y,w==null?C.shapeFlag&512?z.ctx.activate(C,R,F,m,S):wt(C,R,F,z,V,m,S):St(w,C,S)},wt=(w,C,R,F,z,V,m)=>{const y=w.component=L1(w,F,z);if(ic(w)&&(y.ctx.renderer=Ss),O1(y,!1,m),y.asyncDep){if(z&&z.registerDep(y,Z,m),!w.el){const S=y.subTree=Ft(Ns);k(null,S,C,R),w.placeholder=S.el}}else Z(y,w,C,R,z,V,m)},St=(w,C,R)=>{const F=C.component=w.component;if(f1(w,C,R))if(F.asyncDep&&!F.asyncResolved){C.el=w.el,G(F,C,R);return}else F.next=C,F.update();else C.el=w.el,F.vnode=C},Z=(w,C,R,F,z,V,m)=>{const y=()=>{if(w.isMounted){let{next:U,bu:Y,u:dt,parent:ct,vnode:L}=w;{const rs=vp(w);if(rs){U&&(U.el=L.el,G(w,U,m)),rs.asyncDep.then(()=>{Ve(()=>{w.isUnmounted||$()},z)});return}}let P=U,ft;Li(w,!1),U?(U.el=L.el,G(w,U,m)):U=L,Y&&ka(Y),(ft=U.props&&U.props.onVnodeBeforeUpdate)&&As(ft,ct,U,L),Li(w,!0);const yt=xd(w),ae=w.subTree;w.subTree=yt,x(ae,yt,u(ae.el),Ai(ae),w,z,V),U.el=yt.el,P===null&&g1(w,yt.el),dt&&Ve(dt,z),(ft=U.props&&U.props.onVnodeUpdated)&&Ve(()=>As(ft,ct,U,L),z)}else{let U;const{el:Y,props:dt}=C,{bm:ct,m:L,parent:P,root:ft,type:yt}=w,ae=pr(C);Li(w,!1),ct&&ka(ct),!ae&&(U=dt&&dt.onVnodeBeforeMount)&&As(U,P,C),Li(w,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(yt,w.parent?w.parent.type:void 0);const rs=w.subTree=xd(w);x(null,rs,R,F,w,z,V),C.el=rs.el}if(L&&Ve(L,z),!ae&&(U=dt&&dt.onVnodeMounted)){const rs=C;Ve(()=>As(U,P,rs),z)}(C.shapeFlag&256||P&&pr(P.vnode)&&P.vnode.shapeFlag&256)&&w.a&&Ve(w.a,z),w.isMounted=!0,C=R=F=null}};w.scope.on();const S=w.effect=new $h(y);w.scope.off();const $=w.update=S.run.bind(S),q=w.job=S.runIfDirty.bind(S);q.i=w,q.id=w.uid,S.scheduler=()=>ec(q),Li(w,!0),$()},G=(w,C,R)=>{C.component=w;const F=w.vnode.props;w.vnode=C,w.next=null,b1(w,C.props,F,R),w1(w,C.children,R),ii(),gd(w),ri()},lt=(w,C,R,F,z,V,m,y,S=!1)=>{const $=w&&w.children,q=w?w.shapeFlag:0,U=C.children,{patchFlag:Y,shapeFlag:dt}=C;if(Y>0){if(Y&128){$t($,U,R,F,z,V,m,y,S);return}else if(Y&256){et($,U,R,F,z,V,m,y,S);return}}dt&8?(q&16&&Ws($,z,V),U!==$&&h(R,U)):q&16?dt&16?$t($,U,R,F,z,V,m,y,S):Ws($,z,V,!0):(q&8&&h(R,""),dt&16&&B(U,R,F,z,V,m,y,S))},et=(w,C,R,F,z,V,m,y,S)=>{w=w||Ni,C=C||Ni;const $=w.length,q=C.length,U=Math.min($,q);let Y;for(Y=0;Y<U;Y++){const dt=C[Y]=S?Ys(C[Y]):Rs(C[Y]);x(w[Y],dt,R,null,z,V,m,y,S)}$>q?Ws(w,z,V,!0,!1,U):B(C,R,F,z,V,m,y,S,U)},$t=(w,C,R,F,z,V,m,y,S)=>{let $=0;const q=C.length;let U=w.length-1,Y=q-1;for(;$<=U&&$<=Y;){const dt=w[$],ct=C[$]=S?Ys(C[$]):Rs(C[$]);if(Vr(dt,ct))x(dt,ct,R,null,z,V,m,y,S);else break;$++}for(;$<=U&&$<=Y;){const dt=w[U],ct=C[Y]=S?Ys(C[Y]):Rs(C[Y]);if(Vr(dt,ct))x(dt,ct,R,null,z,V,m,y,S);else break;U--,Y--}if($>U){if($<=Y){const dt=Y+1,ct=dt<q?C[dt].el:F;for(;$<=Y;)x(null,C[$]=S?Ys(C[$]):Rs(C[$]),R,ct,z,V,m,y,S),$++}}else if($>Y)for(;$<=U;)Ee(w[$],z,V,!0),$++;else{const dt=$,ct=$,L=new Map;for($=ct;$<=Y;$++){const ze=C[$]=S?Ys(C[$]):Rs(C[$]);ze.key!=null&&L.set(ze.key,$)}let P,ft=0;const yt=Y-ct+1;let ae=!1,rs=0;const os=new Array(yt);for($=0;$<yt;$++)os[$]=0;for($=dt;$<=U;$++){const ze=w[$];if(ft>=yt){Ee(ze,z,V,!0);continue}let Es;if(ze.key!=null)Es=L.get(ze.key);else for(P=ct;P<=Y;P++)if(os[P-ct]===0&&Vr(ze,C[P])){Es=P;break}Es===void 0?Ee(ze,z,V,!0):(os[Es-ct]=$+1,Es>=rs?rs=Es:ae=!0,x(ze,C[Es],R,null,z,V,m,y,S),ft++)}const Do=ae?S1(os):Ni;for(P=Do.length-1,$=yt-1;$>=0;$--){const ze=ct+$,Es=C[ze],kc=C[ze+1],Cc=ze+1<q?kc.el||_p(kc):F;os[$]===0?x(null,Es,R,Cc,z,V,m,y,S):ae&&(P<0||$!==Do[P]?pe(Es,R,Cc,2):P--)}}},pe=(w,C,R,F,z=null)=>{const{el:V,type:m,transition:y,children:S,shapeFlag:$}=w;if($&6){pe(w.component.subTree,C,R,F);return}if($&128){w.suspense.move(C,R,F);return}if($&64){m.move(w,C,R,Ss);return}if(m===Te){i(V,C,R);for(let U=0;U<S.length;U++)pe(S[U],C,R,F);i(w.anchor,C,R);return}if(m===La){A(w,C,R);return}if(F!==2&&$&1&&y)if(F===0)y.persisted&&!V[$a]?i(V,C,R):(y.beforeEnter(V),i(V,C,R),Ve(()=>y.enter(V),z));else{const{leave:U,delayLeave:Y,afterLeave:dt}=y,ct=()=>{w.ctx.isUnmounted?r(V):i(V,C,R)},L=()=>{const P=V._isLeaving||!!V[$a];V._isLeaving&&V[$a](!0),y.persisted&&!P?ct():U(V,()=>{ct(),dt&&dt()})};Y?Y(V,ct,L):L()}else i(V,C,R)},Ee=(w,C,R,F=!1,z=!1)=>{const{type:V,props:m,ref:y,children:S,dynamicChildren:$,shapeFlag:q,patchFlag:U,dirs:Y,cacheIndex:dt,memo:ct}=w;if((U===-2||$&&$.hasOnce)&&(z=!1),y!=null&&(ii(),Zr(y,null,R,w,!0),ri()),dt!=null&&(!w.ctx||w.ctx===C)&&(C.renderCache[dt]=void 0),q&256){C.ctx.deactivate(w);return}const L=q&1&&Y,P=!pr(w);let ft;if(P&&(ft=m&&m.onVnodeBeforeUnmount)&&As(ft,C,w),q&6)Tr(w.component,R,F);else{if(q&128){w.suspense.unmount(R,F);return}L&&Ii(w,null,C,"beforeUnmount"),q&64?w.type.remove(w,C,R,Ss,F):$&&!$.hasOnce&&(V!==Te||U>0&&U&64)?Ws($,C,R,!1,!0):(V===Te&&U&384||!z&&q&16)&&Ws(S,C,R),F&&Zi(w)}const yt=ct!=null&&dt==null;(P&&(ft=m&&m.onVnodeUnmounted)||L||yt)&&Ve(()=>{ft&&As(ft,C,w),L&&Ii(w,null,C,"unmounted"),yt&&(w.el=null)},R)},Zi=w=>{const{type:C,el:R,anchor:F,transition:z}=w;if(C===Te){$r(R,F);return}if(C===La){b(w),z&&!z.persisted&&z.afterLeave&&z.afterLeave();return}const V=()=>{r(R),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(w.shapeFlag&1&&z&&!z.persisted){const{leave:m,delayLeave:y}=z,S=()=>m(R,V);y?y(w.el,V,S):S()}else V()},$r=(w,C)=>{let R;for(;w!==C;)R=p(w),r(w),w=R;r(C)},Tr=(w,C,R)=>{const{bum:F,scope:z,job:V,subTree:m,um:y,m:S,a:$}=w;Sd(S),Sd($),F&&ka(F),z.stop(),V?(V.flags|=8,Ee(m,w,C,R)):w.vnode.el&&m&&(m.transition=w.vnode.transition,Ee(m,w,C,R)),y&&Ve(y,C),Ve(()=>{w.isUnmounted=!0},C)},Ws=(w,C,R,F=!1,z=!1,V=0)=>{for(let m=V;m<w.length;m++)Ee(w[m],C,R,F,z)},Ai=w=>{if(w.shapeFlag&6)return Ai(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=p(w.anchor||w.el),R=C&&C[Fv];return R?p(R):C};let ci=!1;const tr=(w,C,R)=>{let F;w==null?C._vnode&&(Ee(C._vnode,null,null,!0),F=C._vnode.component):x(C._vnode||null,w,C,null,null,null,R),C._vnode=w,ci||(ci=!0,gd(F),Gh(),ci=!1)},Ss={p:x,um:Ee,m:pe,r:Zi,mt:wt,mc:B,pc:lt,pbc:D,n:Ai,o:t};return{render:tr,hydrate:void 0,createApp:l1(tr)}}function Ia({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Li({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function C1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yp(t,e,s=!1){const i=t.children,r=e.children;if(ut(i)&&ut(r))for(let o=0;o<i.length;o++){const n=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Ys(r[o]),a.el=n.el),!s&&a.patchFlag!==-2&&yp(n,a)),a.type===Ro&&(a.patchFlag===-1&&(a=r[o]=Ys(a)),a.el=n.el),a.type===Ns&&!a.el&&(a.el=n.el)}}function S1(t){const e=t.slice(),s=[0];let i,r,o,n,a;const l=t.length;for(i=0;i<l;i++){const d=t[i];if(d!==0){if(r=s[s.length-1],t[r]<d){e[i]=r,s.push(i);continue}for(o=0,n=s.length-1;o<n;)a=o+n>>1,t[s[a]]<d?o=a+1:n=a;d<t[s[o]]&&(o>0&&(e[i]=s[o-1]),s[o]=i)}}for(o=s.length,n=s[o-1];o-- >0;)s[o]=n,n=e[n];return s}function vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vp(e)}function Sd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function _p(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?_p(e.subTree):null}const wp=t=>t.__isSuspense;function E1(t,e){e&&e.pendingBranch?ut(t)?e.effects.push(...t):e.effects.push(t):Mv(t)}const Te=Symbol.for("v-fgt"),Ro=Symbol.for("v-txt"),Ns=Symbol.for("v-cmt"),La=Symbol.for("v-stc"),si=[];let Ge=null;function ht(t=!1){si.push(Ge=t?null:[])}function lc(){si.pop(),Ge=si[si.length-1]||null}let uo=1;function yr(t,e=!1){uo+=t,t<0&&Ge&&e&&(Ge.hasOnce=!0)}function xp(t){return t.dynamicChildren=uo>0?Ge||Ni:null,lc(),uo>0&&Ge&&Ge.push(t),t}function xt(t,e,s,i,r,o){return xp(H(t,e,s,i,r,o,!0))}function Ps(t,e,s,i,r){return xp(Ft(t,e,s,i,r,!0))}function ho(t){return t?t.__v_isVNode===!0:!1}function Vr(t,e){return t.type===e.type&&t.key===e.key}const kp=({key:t})=>t??null,on=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?Xt(t)||Wt(t)||gt(t)?{i:Be,r:t,k:e,f:!!s}:t:null);function H(t,e=null,s=null,i=0,r=null,o=t===Te?0:1,n=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kp(e),ref:e&&on(e),scopeId:Xh,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Be};return a?(wn(l,s),o&128&&t.normalize(l)):s&&(l.shapeFlag|=Xt(s)?8:16),uo>0&&!n&&Ge&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ge.push(l),l}const Ft=A1;function A1(t,e=null,s=null,i=0,r=null,o=!1){if((!t||t===Zv)&&(t=Ns),ho(t)){const a=vr(t,e,!0);return s&&wn(a,s),uo>0&&!o&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(D1(t)&&(t=t.__vccOpts),e){e=Cp(e);let{class:a,style:l}=e;a&&!Xt(a)&&(e.class=br(a)),Pt(l)&&(Lo(l)&&!ut(l)&&(l=xe({},l)),e.style=Jn(l))}const n=Xt(t)?1:wp(t)?128:ea(t)?64:Pt(t)?4:gt(t)?2:0;return H(t,e,s,i,r,n,o,!0)}function Cp(t){return t?Lo(t)||hp(t)?xe({},t):t:null}function vr(t,e,s=!1,i=!1){const{props:r,ref:o,patchFlag:n,children:a,transition:l}=t,d=e?$1(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&kp(d),ref:e&&e.ref?s&&o?ut(o)?o.concat(on(e)):[o,on(e)]:on(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vr(t.ssContent),ssFallback:t.ssFallback&&vr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return l&&i&&sc(h,l.clone(h)),h}function ra(t=" ",e=0){return Ft(Ro,null,t,e)}function Fe(t="",e=!1){return e?(ht(),Ps(Ns,null,t)):Ft(Ns,null,t)}function Rs(t){return t==null||typeof t=="boolean"?Ft(Ns):ut(t)?Ft(Te,null,t.slice()):ho(t)?Ys(t):Ft(Ro,null,String(t))}function Ys(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vr(t)}function wn(t,e){let s=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ut(e))s=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wn(t,r()),r._c&&(r._d=!0));return}else{s=32;const r=e._;!r&&!hp(e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(gt(e)){if(i&65){wn(t,{default:e});return}e={default:e,_ctx:Be},s=32}else e=String(e),i&64?(s=16,e=[ra(e)]):s=8;t.children=e,t.shapeFlag|=s}function $1(...t){const e={};for(let s=0;s<t.length;s++){const i=t[s];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=br([e.class,i.class]));else if(r==="style")e.style=Jn([e.style,i.style]);else if(Kn(r)){const o=e[r],n=i[r];n&&o!==n&&!(ut(o)&&o.includes(n))?e[r]=o?[].concat(o,n):n:n==null&&o==null&&!qn(r)&&(e[r]=n)}else r!==""&&(e[r]=i[r])}return e}function As(t,e,s,i=null){bs(t,e,7,[s,i])}const T1=ap();let I1=0;function L1(t,e,s){const i=t.type,r=(e?e.appContext:t.appContext)||T1,o={uid:I1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(i,r),emitsOptions:lp(i,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=d1.bind(null,o),t.ce&&t.ce(o),o}let Me=null;const cc=()=>Me||Be;let xn,po;{const t=Xn(),e=(s,i)=>{let r;return(r=t[s])||(r=t[s]=[]),r.push(i),o=>{r.length>1?r.forEach(n=>n(o)):r[0](o)}};xn=e("__VUE_INSTANCE_SETTERS__",s=>Me=s),po=e("__VUE_SSR_SETTERS__",s=>fo=s)}const Mo=t=>{const e=Me;return xn(t),t.scope.on(),()=>{t.scope.off(),xn(e)}},Ed=()=>{Me&&Me.scope.off(),xn(null)};function Sp(t){return t.vnode.shapeFlag&4}let fo=!1;function O1(t,e=!1,s=!1){e&&po(e);const{props:i,children:r}=t.vnode,o=Sp(t);m1(t,i,o,e),_1(t,r,s||e);const n=o?R1(t,e):void 0;return e&&po(!1),n}function R1(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,e1);const{setup:i}=s;if(i){ii();const r=t.setupContext=i.length>1?P1(t):null,o=Mo(t),n=Oo(i,t,0,[t.props,r]),a=yh(n);if(ri(),o(),(a||t.sp)&&!pr(t)&&ep(t),a){if(n.then(Ed,Ed),e)return n.then(l=>{po(!0);try{Ad(t,l,e)}finally{po(!1)}}).catch(l=>{ta(l,t,0)});t.asyncDep=n}else Ad(t,n)}else Ep(t)}function Ad(t,e,s){gt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pt(e)&&(t.setupState=Hh(e)),Ep(t)}function Ep(t,e,s){const i=t.type;t.render||(t.render=i.render||zs);{const r=Mo(t);ii();try{s1(t)}finally{ri(),r()}}}const M1={get(t,e){return $e(t,"get",""),t[e]}};function P1(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,M1),slots:t.slots,emit:t.emit,expose:e}}function dc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hh(tc(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in to)return to[s](t)},has(e,s){return s in e||s in to}})):t.proxy}function D1(t){return gt(t)&&"__vccOpts"in t}const Vt=(t,e)=>Tv(t,e,fo);function kn(t,e,s){try{yr(-1);const i=arguments.length;return i===2?Pt(e)&&!ut(e)?ho(e)?Ft(t,null,[e]):Ft(t,e):Ft(t,null,e):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&ho(s)&&(s=[s]),Ft(t,e,s))}finally{yr(1)}}const z1="3.5.43";let ul;const $d=typeof window<"u"&&window.trustedTypes;if($d)try{ul=$d.createPolicy("vue",{createHTML:t=>t})}catch{}const Ap=ul?t=>ul.createHTML(t):t=>t,V1="http://www.w3.org/2000/svg",N1="http://www.w3.org/1998/Math/MathML",Gs=typeof document<"u"?document:null,Td=Gs&&Gs.createElement("template"),F1={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,i)=>{const r=e==="svg"?Gs.createElementNS(V1,t):e==="mathml"?Gs.createElementNS(N1,t):s?Gs.createElement(t,{is:s}):Gs.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Gs.createTextNode(t),createComment:t=>Gs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,i,r,o){const n=s?s.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),s),!(r===o||!(r=r.nextSibling)););else{Td.innerHTML=Ap(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Td.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,s)}return[n?n.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},B1=Symbol("_vtc");function U1(t,e,s){const i=t[B1];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const Id=Symbol("_vod"),H1=Symbol("_vsh"),j1=Symbol(""),W1=/(?:^|;)\s*display\s*:/;function K1(t,e,s){const i=t.style,r=Xt(s);let o=!1;if(s&&!r){if(e)if(Xt(e))for(const n of e.split(";")){const a=n.slice(0,n.indexOf(":")).trim();s[a]==null&&Br(i,a,"")}else for(const n in e)s[n]==null&&Br(i,n,"");for(const n in s){n==="display"&&(o=!0);const a=s[n];a!=null?G1(t,n,!Xt(e)&&e?e[n]:void 0,a)||Br(i,n,a):Br(i,n,"")}}else if(r){if(e!==s){const n=i[j1];n&&(s+=";"+n),i.cssText=s,o=W1.test(s)}}else e&&t.removeAttribute("style");Id in t&&(t[Id]=o?i.display:"",t[H1]&&(i.display="none"))}const qo=/\s*!important$/;function Br(t,e,s){if(ut(s))s.forEach(i=>Br(t,e,i));else if(s==null&&(s=""),e.startsWith("--"))qo.test(s)?t.setProperty(e,s.replace(qo,""),"important"):t.setProperty(e,s);else{const i=q1(t,e);qo.test(s)?t.setProperty(Qi(i),s.replace(qo,""),"important"):t[i]=s}}const Ld=["Webkit","Moz","ms"],Oa={};function q1(t,e){const s=Oa[e];if(s)return s;let i=hs(e);if(i!=="filter"&&i in t)return Oa[e]=i;i=wh(i);for(let r=0;r<Ld.length;r++){const o=Ld[r]+i;if(o in t)return Oa[e]=o}return e}function G1(t,e,s,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Xt(i)&&s===i}const Od="http://www.w3.org/1999/xlink";function Rd(t,e,s,i,r,o=ev(e)){i&&e.startsWith("xlink:")?s==null?t.removeAttributeNS(Od,e.slice(6,e.length)):t.setAttributeNS(Od,e,s):s==null||o&&!kh(s)?t.removeAttribute(e):t.setAttribute(e,o?"":Qe(s)?String(s):s)}function Md(t,e,s,i,r){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?Ap(s):s);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=s==null?t.type==="checkbox"?"on":"":String(s);(a!==l||!("_value"in t))&&(t.value=l),s==null&&t.removeAttribute(e),t._value=s;return}let n=!1;if(s===""||s==null){const a=typeof t[e];a==="boolean"?s=kh(s):s==null&&a==="string"?(s="",n=!0):a==="number"&&(s=0,n=!0)}try{t[e]=s}catch{}n&&t.removeAttribute(r||e)}function Y1(t,e,s,i){t.addEventListener(e,s,i)}function X1(t,e,s,i){t.removeEventListener(e,s,i)}const Pd=Symbol("_vei");function J1(t,e,s,i,r=null){const o=t[Pd]||(t[Pd]={}),n=o[e];if(i&&n)n.value=i;else{const[a,l]=t_(e);if(i){const d=o[e]=i_(i,r);Y1(t,a,d,l)}else n&&(X1(t,a,n,l),o[e]=void 0)}}const Q1=/(Once|Passive|Capture)$/,Z1=/^on:?(?:Once|Passive|Capture)$/;function t_(t){let e,s;for(;(s=t.match(Q1))&&!Z1.test(t);)e||(e={}),t=t.slice(0,t.length-s[1].length),e[s[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Qi(t.slice(2)),e]}let Ra=0;const e_=Promise.resolve(),s_=()=>Ra||(e_.then(()=>Ra=0),Ra=Date.now());function i_(t,e){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;const r=s.value;if(ut(r)){const o=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{o.call(i),i._stopped=!0};const n=r.slice(),a=[i];for(let l=0;l<n.length&&!i._stopped;l++){const d=n[l];d&&bs(d,e,5,a)}}else bs(r,e,5,[i])};return s.value=t,s.attached=s_(),s}const Dd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,r_=(t,e,s,i,r,o)=>{const n=r==="svg";e==="class"?U1(t,i,n):e==="style"?K1(t,s,i):Kn(e)?qn(e)||J1(t,e,s,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):o_(t,e,i,n))?(Md(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rd(t,e,i,n,o,e!=="value")):t._isVueCE&&(n_(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Xt(i)))?Md(t,hs(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Rd(t,e,i,n))};function o_(t,e,s,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dd(e)&&gt(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Dd(e)&&Xt(s)?!1:e in t}function n_(t,e){const s=t._def.props;if(!s)return!1;const i=hs(e);return Array.isArray(s)?s.some(r=>hs(r)===i):Object.keys(s).some(r=>hs(r)===i)}const a_=["ctrl","shift","alt","meta"],l_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>a_.some(s=>t[`${s}Key`]&&!e.includes(s))},Ke=(t,e)=>{if(!t)return t;const s=t._withMods||(t._withMods={}),i=e.join(".");return s[i]||(s[i]=((r,...o)=>{for(let n=0;n<e.length;n++){const a=l_[e[n]];if(a&&a(r,e))return}return t(r,...o)}))},c_=xe({patchProp:r_},F1);let zd;function d_(){return zd||(zd=x1(c_))}const $p=((...t)=>{const e=d_().createApp(...t),{mount:s}=e;return e.mount=i=>{const r=h_(i);if(!r)return;const o=e._component;!gt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const n=s(r,!1,u_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},e});function u_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function h_(t){return Xt(t)?document.querySelector(t):t}function Tp(t){const e=s=>Array.isArray(s)?s.map(i=>e(i)):Wt(s)||fs(s)||Lo(s)?e(Ct(s)):s&&typeof s=="object"?Object.keys(s).reduce((i,r)=>(i[r]=e(s[r]),i),{}):s;return e(t)}const Ip="https://attack.mitre.org",p_=`${Ip}/techniques/`,f_=`${Ip}/tactics/`,g_="/host-management/hosts";function m_(t){return t.technique_id?t.technique_id.replace(".","/"):""}function b_(t){return t?.technique_id?`${p_}/${m_(t)}`:""}function y_(t){return t?.tactic_id?`${f_}/${t.tactic_id}`:""}function v_(t){return t?.device?`${g_}/${t.device?.device_id}?filter=device_id:%27${t.device?.device_id}%27`:""}const Lp="mitreAutoRemediationJira",Op="mitreAutoRemediationCreatedIssues";class __ extends Error{}const w_="ransomwareNotifyIT",x_="ransomwareNotifyIR";let Go;async function Cn(t,e){try{const i=await t.collection({collection:Lp}).read(e);if(i&&"errors"in i&&Array.isArray(i.errors)&&i.errors.length>0){const r=new __(i.errors[0].message);throw i.errors[0].code&&(r.code=Number(i.errors[0].code)),r}else return i&&"account"in i&&"project"in i?i:void 0}catch(s){if(s.message?.includes("object not found")||s.code===404)return;throw s}}async function Rp(t){if(Go!==void 0)return Go;let e=!0;try{e=typeof(await t.collection({collection:Lp}))?.read=="function",e&&(await Promise.all([Cn(t,"ransomwareNotifyIT"),Cn(t,"ransomwareNotifyIR")]),e=!0)}catch(s){console.error(s),e=!1}finally{Go=e}return Go}const k_=async function(t){if(await Rp(t))return Cn(t,w_)},C_=async function(t){if(await Rp(t))return Cn(t,x_)},Mp=function(t,e){return`${t.data?.detectionId}-${e}`.replace(/[^a-zA-Z\d\-_]/gi,"_")},Vd=async function(t,e){const s=Mp(t,e);try{const r=await t.collection({collection:Op}).read(s);return r?.account&&r?.project&&r?.issueId?r:void 0}catch(i){if(i.message?.includes("object not found"))return;console.error(i)}},S_=async function(t,e,s,i,r){if(i.created){const o={account:s.account??"N/A",priority:s.priority??"N/A",issueType:s.issueType??"N/A",summary:s.summary??"",description:s.description??"",project:s.project??"N/A",labels:s.labels??[],issueId:i.id,issueKey:i.key,issueLink:i.api_link,detectionId:e.id,creationDate:new Date().toISOString(),notificationType:r},n=t.collection({collection:Op}),a=Mp(t,r),l=await n.write(a,Tp(o));return!l||l?.errors?.length?void 0:o}},E_=(t,e)=>e.split(".").reduce((s,i)=>s?.[i],t),uc={AgentId:"agent_id",AgentVersion:"device.agent_version",AllegedFiletype:"alleged_filetype",ClientID:"cid",CmdLine:"cmdline",CreatedTimestamp:"created_timestamp:datetime",DetectionId:"id",DeviceID:"device.device_id",ExternalIP:"device.external_ip",FalconHostLink:"falcon_host_link",FileName:"filename",FilePath:"filepath",Hostname:"device.hostname",Name:"name",Objective:"objective",PatternDisposition:"pattern_disposition_description",PatternDispositionID:"pattern_disposition",Platform:"platform",ProcessEndTime:"process_end_time:datetime",ProcessID:"process_id",ProcessStartTime:"process_start_time:datetime",Product:"product",Scenario:"scenario",Severity:"severity:toSeverityValue",Status:"status",Tactic:"tactic",TacticID:"tactic_id",Tags:"tags:join",Technique:"technique",TechniqueID:"technique_id",TimeStamp:"timestamp:datetime",Type:"type",UpdatedTimestamp:"updated_timestamp:datetime",UserID:"user_id",UserName:"user_name"},Pp=(t,e,s,i,r="---",o="preview")=>{const n=uc[s]??"";let a="";if(n){const[l,d]=n.split(":");try{if(a=l?E_(i||{},l):"",d)switch(d){case"join":{a&&(a=[...a].join(", "));break}case"toSeverityValue":{if(a){const h=Number(a);isNaN(h)?a="Unknown":h<=20?a="Informational":h<=40?a="Low":h<=60?a="Medium":h<=80?a="High":h<=101?a="Critical":a="Unknown"}break}case"datetime":if(a){const h=Number(a),u=new Date(isNaN(h)?String(a):Number(a)*1e3);o==="preview"?a=e.d(u,"fullDateTime",t.data?.locale):a=u.toISOString()}break;default:break}}catch(h){console.error(h),console.log(l,a)}}return String(a)||r},Nd=(t,e,s,i)=>(i&&Object.keys(uc).forEach(r=>{const o=["${",r,"}"].join(""),n=Pp(t,e,r,i);s=s.replaceAll(o,n)}),s),A_="Ransomware ${Tactic} via ${Technique} detected on ${Hostname}",Fd={default:"bb5c382c865347fd8ce08749cc2f64fc"},Dp={},$_=async t=>Object.entries(Fd).find(([e,s])=>t.includes(e))?.[1]??Fd.default,T_=async function(t,e){const s=await $_(e);return((await t.api.plugins.getEntitiesConfigsV1({appId:s})).resources??[])?.filter(r=>r.config?.permissions.includes("read:jira-work")&&r.config?.permissions.includes("write:jira-work")&&r.config?.id).map(r=>({name:r.config.name,id:r.config.id}))},I_=async function(t,e){const s=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_projects_deprecated",config_id:e,request:{}}]});return t.api.plugins.postEntitiesExecuteV1,(s.resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,isPrivate:r.isPrivate,href:r.self})))},L_=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_labels",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.values?.length??0)>0).flatMap(i=>i.response_body.values).map(i=>{const r=i.replace(/ /g,"_");return Dp[r]=i,r})},hl=async function(t,e){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_priorities",config_id:e,request:{}}]})).resources??[])?.filter(i=>i.status_code===200&&(i.response_body?.length??0)>0).flatMap(i=>i.response_body.map(r=>({id:r.id,name:r.name,href:r.self,description:r.description})))},O_=async function(t,e,s){return((await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.get_issue_types",config_id:e,request:{params:{query:{projectId:s}}}}]})).resources??[])?.filter(r=>r.status_code===200&&(r.response_body?.length??0)>0).flatMap(r=>r.response_body.map(o=>({id:o.id,name:o.name,href:o.self,description:o.description})))},R_=async function(t,e,s,i,r,o){try{const{account:n,project:a,priority:l,labels:d=[],summary:h="",description:u="",issueType:p}=Tp(r);if(n&&a&&l&&d?.length&&h&&p){const[g,v,x,I,k]=await Promise.all([T_(t,s),I_(t,n),hl(t,n),O_(t,n,a),L_(t,n)]),_=g?.find(T=>String(T.id)===String(n)||String(T.name)===String(n)),A=v?.find(T=>String(T.id)===String(a)||String(T.name)===String(a)),b=x?.find(T=>String(T.id)===String(l)||String(T.name)===String(l)),E=I?.find(T=>String(T.id)===String(p)||String(T.name)===String(p)),O=d.map(T=>Dp[T]??T.replace(/_/g,"")).filter(T=>k.includes(T));if(_&&A&&b&&E&&O.length){const T=Nd(t,e,u,o),B=Nd(t,e,h,o),M=await t.api.plugins.postEntitiesExecuteV1({resources:[{id:"jira.create_issue",config_id:n,request:{json:{fields:{description:T,issuetype:{name:E.name},labels:O,priority:{id:b.id},project:{id:A.id},summary:B}}}}]});if(M?.resources?.length&&!M?.errors?.length){const D={errors:[],created:!0,id:M?.resources?.[0]?.response_body?.id||"",key:M?.resources?.[0]?.response_body?.key||"",api_link:M?.resources?.[0]?.response_body?.self||""};try{D.logged_data=await S_(t,o,{account:_.name,project:A.name,priority:b.name,issueType:E.name,labels:d??[],description:T??"",summary:B??""},D,i)}catch(ot){console.error(ot)}return D}else return{errors:(M?.errors??[]).map(D=>D.message),created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}else return{errors:[e.t("errorCreatingJiraIssueDataMissing")],created:!1,id:"",key:"",api_link:""}}catch(n){return console.error(n),{errors:[n.message],created:!1,id:"",key:"",api_link:""}}};async function M_(t,e){return e?(await t.api.alerts.postEntitiesAlertsV1({},{ids:[e]}))?.resources?.[0]:void 0}const we={I18N:Symbol("i18n"),ALERTS:Symbol("alerts"),FALCON_API:Symbol("falconApi"),FALCON_API_GET_ORIGINS:Symbol("falconApiGetOrigins"),FALCON_API_GET_APP_ID:Symbol("falconApiGetAppId")};let zp;const oa=t=>zp=t,Vp=Symbol();function pl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var eo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(eo||(eo={}));function P_(){const t=Kl(!0),e=t.run(()=>qt({}));let s=[],i=[];const r=tc({install(o){oa(r),r._a=o,o.provide(Vp,r),o.config.globalProperties.$pinia=r,i.forEach(n=>s.push(n)),i=[]},use(o){return this._a?s.push(o):i.push(o),this},_p:s,_a:null,_e:t,_s:new Map,state:e});return r}const Np=()=>{};function Bd(t,e,s,i=Np){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!s&&ql()&&Ah(r),r}function sr(t,...e){t.slice().forEach(s=>{s(...e)})}const D_=t=>t(),Ud=Symbol(),Ma=Symbol();function fl(t,e){t instanceof Map&&e instanceof Map?e.forEach((s,i)=>t.set(i,s)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const s in e){if(!e.hasOwnProperty(s))continue;const i=e[s],r=t[s];pl(r)&&pl(i)&&t.hasOwnProperty(s)&&!Wt(i)&&!fs(i)?t[s]=fl(r,i):t[s]=i}return t}const z_=Symbol();function V_(t){return!pl(t)||!Object.prototype.hasOwnProperty.call(t,z_)}const{assign:ui}=Object;function N_(t){return!!(Wt(t)&&t.effect)}function F_(t,e,s,i){const{state:r,actions:o,getters:n}=e,a=s.state.value[t];let l;function d(){a||(s.state.value[t]=r?r():{});const h=jh(s.state.value[t]);return ui(h,o,Object.keys(n||{}).reduce((u,p)=>(u[p]=tc(Vt(()=>{oa(s);const g=s._s.get(t);return n[p].call(g,g)})),u),{}))}return l=Fp(t,d,e,s,i,!0),l}function Fp(t,e,s={},i,r,o){let n;const a=ui({actions:{}},s),l={deep:!0};let d,h,u=[],p=[],g;const v=i.state.value[t];!o&&!v&&(i.state.value[t]={});let x;function I(B){let M;d=h=!1,typeof B=="function"?(B(i.state.value[t]),M={type:eo.patchFunction,storeId:t,events:g}):(fl(i.state.value[t],B),M={type:eo.patchObject,payload:B,storeId:t,events:g});const D=x=Symbol();Kh().then(()=>{x===D&&(d=!0)}),h=!0,sr(u,M,i.state.value[t])}const k=o?function(){const{state:M}=s,D=M?M():{};this.$patch(ot=>{ui(ot,D)})}:Np;function _(){n.stop(),u=[],p=[],i._s.delete(t)}const A=(B,M="")=>{if(Ud in B)return B[Ma]=M,B;const D=function(){oa(i);const ot=Array.from(arguments),tt=[],bt=[];function wt(G){tt.push(G)}function St(G){bt.push(G)}sr(p,{args:ot,name:D[Ma],store:E,after:wt,onError:St});let Z;try{Z=B.apply(this&&this.$id===t?this:E,ot)}catch(G){throw sr(bt,G),G}return Z instanceof Promise?Z.then(G=>(sr(tt,G),G)).catch(G=>(sr(bt,G),Promise.reject(G))):(sr(tt,Z),Z)};return D[Ud]=!0,D[Ma]=M,D},b={_p:i,$id:t,$onAction:Bd.bind(null,p),$patch:I,$reset:k,$subscribe(B,M={}){const D=Bd(u,B,M.detached,()=>ot()),ot=n.run(()=>bi(()=>i.state.value[t],tt=>{(M.flush==="sync"?h:d)&&B({storeId:t,type:eo.direct,events:g},tt)},ui({},l,M)));return D},$dispose:_},E=Io(b);i._s.set(t,E);const T=(i._a&&i._a.runWithContext||D_)(()=>i._e.run(()=>(n=Kl()).run(()=>e({action:A}))));for(const B in T){const M=T[B];if(Wt(M)&&!N_(M)||fs(M))o||(v&&V_(M)&&(Wt(M)?M.value=v[B]:fl(M,v[B])),i.state.value[t][B]=M);else if(typeof M=="function"){const D=A(M,B);T[B]=D,a.actions[B]=M}}return ui(E,T),ui(Ct(E),T),Object.defineProperty(E,"$state",{get:()=>i.state.value[t],set:B=>{I(M=>{ui(M,B)})}}),i._p.forEach(B=>{ui(E,n.run(()=>B({store:E,app:i._a,pinia:i,options:a})))}),v&&o&&s.hydrate&&s.hydrate(E.$state,v),d=!0,h=!0,E}function B_(t,e,s){let i;const r=typeof e=="function";i=r?s:e;function o(n,a){const l=Dv();return n=n||(l?fe(Vp,null):null),n&&oa(n),n=zp,n._s.has(t)||(r?Fp(t,e,i,n):F_(t,i,n)),n._s.get(t)}return o.$id=t,o}const na=B_("extension",()=>{const t=qt(),e=qt(!1),s=qt(!1),i=qt(!1),r=qt(!1),o=qt(),n=qt("RansomwareRemediation:DefaultPanel"),a=Io({}),l=qt(),d=qt(),h=qt(),u=qt(),p=qt([]),g=qt([]),v=fe(we.FALCON_API),x=fe(we.I18N),I=fe(we.FALCON_API_GET_ORIGINS),k=qt(String(v.data?.detectionId)),{t:_}=x,A=async()=>{try{s.value=!0,o.value=void 0,k.value&&(o.value=await M_(v,k.value))}catch(et){t.value=et,console.error(et)}finally{s.value=!1}},b=async()=>{try{i.value=!0,l.value=await k_(v),d.value=await C_(v),l.value?.account&&(p.value=await hl(v,l.value?.account)),d.value?.account&&(g.value=await hl(v,d.value?.account))}catch(et){t.value=et,console.error(et)}finally{i.value=!1}},E=async()=>{try{r.value=!0,k.value&&(h.value=await Vd(v,"notifyIT"),u.value=await Vd(v,"notifyIR"))}catch(et){t.value=et,console.error(et)}finally{r.value=!1}},O=Vt(()=>!0),T=()=>n.value?bt(n.value):{},B=(et,$t)=>{n.value=et,$t&&(a[et]=$t)},M=(et,$t)=>{a[n.value]={...a[n.value],[et]:$t}},D=(et,$t=void 0)=>bt(n.value)[et]??$t,ot=et=>{a[et]={}},tt=(et,$t)=>{a[et]={...$t}},bt=et=>(a[et]||(a[et]={}),a[et]??{}),wt=Vt(()=>i?.value||s?.value||r?.value),St=async()=>{await Promise.all([A(),b(),E()])},Z=Vt(()=>n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR"?D("account","").length>0&&D("priority","").length>0&&D("issueType","").length>0&&D("summary","").length>0&&D("labels",[]).length>0:!0),G=async()=>{try{return e.value=!0,Z.value&&(n.value==="RansomwareRemediation:NotifyIT"||n.value==="RansomwareRemediation:NotifyIR")?await R_(v,x,I(),n.value==="RansomwareRemediation:NotifyIT"?"notifyIT":"notifyIR",bt(n.value),o.value):{errors:[_("errorCreatingJiraIssueDataMissing")],created:!1,id:"",api_link:"",key:""}}finally{e.value=!1}},lt=Vt(()=>{const et={account:"",project:"",priority:"",labels:"",issueType:"",summary:"",description:""};if(!Z.value){const $t=T();$t.account?.length||(et.account=_("selectAccount")),$t.project?.length||(et.project=_("selectProject")),$t.priority?.length||(et.priority=_("selectPriority")),$t.labels?.length||(et.labels=_("enterOneOrMoreLabels")),$t.issueType?.length||(et.issueType=_("selectIssueType")),$t.summary?.length||(et.summary=_("enterSummary"))}return et});return v.events.on("data",et=>{const $t=String(et.detectionId);$t&&k.value!==$t&&(v.data&&(v.data.detectionId=$t),k.value=$t,St())}),{notifyITConfig:l,notifyIRConfig:d,notifyITPriorities:p,notifyIRPriorities:g,loadData:St,isLoading:wt,loadingError:t,hasRansomwareRemediation:O,detection:o,setWizardState:B,setWizardStateProperty:M,clearWizardStateStep:ot,setWizardStateStep:tt,wizardState:n,wizardStateValues:a,getWizardStateStep:bt,getWizardStateProperty:D,isStepValid:Z,createJiraIssueFromCurrentStep:G,isSaving:e,validationMessages:lt,existingTicketIT:h,existingTicketIR:u,loadExistingTickets:E}}),Cs=(t,e)=>{const s=t.__vccOpts||t;for(const[i,r]of e)s[i]=r;return s},U_={},H_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function j_(t,e){return ht(),xt("svg",H_,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM17.207 15.793L15.793 17.207L12 13.414L8.207 17.207L6.793 15.793L10.586 12L6.793 8.207L8.207 6.793L12 10.586L15.793 6.793L17.207 8.207L13.414 12L17.207 15.793Z"},null,-1)])])}const Hd=Cs(U_,[["render",j_]]),W_={},K_={width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"};function q_(t,e){return ht(),xt("svg",K_,[...e[0]||(e[0]=[H("g",null,[H("path",{d:"M7.5 12V8h1v4h-1ZM8 6.049A1.024 1.024 0 1 0 8 4a1.024 1.024 0 0 0 0 2.049Z"}),H("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7-5.976a5.976 5.976 0 1 0 0 11.952A5.976 5.976 0 0 0 8 2.024Z"})],-1)])])}const jd=Cs(W_,[["render",q_]]),G_={},Y_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function X_(t,e){return ht(),xt("svg",Y_,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 19H11V10H13V19ZM12 8C11.171 8 10.5 7.328 10.5 6.5C10.5 5.672 11.172 5 12 5C12.828 5 13.5 5.672 13.5 6.5C13.5 7.328 12.828 8 12 8Z"},null,-1)])])}const J_=Cs(G_,[["render",X_]]),Q_={},Z_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function tw(t,e){return ht(),xt("svg",Z_,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM9.242 17.295L5.453 13.506L6.867 12.092L9.242 14.467L16.497 7.212L17.911 8.626L9.242 17.295Z"},null,-1)])])}const ew=Cs(Q_,[["render",tw]]),sw={},iw={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function rw(t,e){return ht(),xt("svg",iw,[...e[0]||(e[0]=[H("path",{d:"M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM11 5H13V14H11V5ZM12 19C11.171 19 10.5 18.328 10.5 17.5C10.5 16.672 11.172 16 12 16C12.828 16 13.5 16.672 13.5 17.5C13.5 18.328 12.828 19 12 19Z"},null,-1)])])}const ow=Cs(sw,[["render",rw]]),nw={},aw={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"};function lw(t,e){return ht(),xt("svg",aw,[...e[0]||(e[0]=[H("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.009 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 11h2V4H9v7Zm1 4.475a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"},null,-1)])])}const cw=Cs(nw,[["render",lw]]),dw={},uw={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function hw(t,e){return ht(),xt("svg",uw,[...e[0]||(e[0]=[H("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)])])}const pw=Cs(dw,[["render",hw]]),fw={},gw={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"};function mw(t,e){return ht(),xt("svg",gw,[...e[0]||(e[0]=[H("path",{d:"M11.9992 13.586L8.35325 9.94C8.15825 9.745 7.84125 9.745 7.64625 9.94C7.45125 10.135 7.45125 10.452 7.64625 10.647L11.9992 15L16.3533 10.646C16.4512 10.548 16.4993 10.42 16.4993 10.292C16.4993 10.164 16.4503 10.036 16.3533 9.938C16.1583 9.743 15.8413 9.743 15.6463 9.938L11.9992 13.586Z"},null,-1)])])}const bw=Cs(fw,[["render",mw]]),yw={class:"type-sm text-text-and-icons flex items-center gap-1 mb-1"},vw={class:"type-sm text-body-and-labels"},_w=Ue({__name:"ActionsPrivacyPanel",setup(t){const{t:e}=fe(we.I18N);return(s,i)=>i[0]||(yr(-1,!0),(i[0]=H("div",{class:"bg-surface-2xl shadow-2xl p-4 border-l-2 border-medium mb-3 relative top-0 z-5 mb-6 rounded-sm"},[H("h3",yw,[Ft(W(cw),{class:"text-medium"}),H("span",null,pt(W(e)("warning")),1)]),H("p",vw,pt(W(e)("actionDataPrivacy")),1)])).cacheIndex=0,yr(1),i[0])}}),ww={class:"flex gap-1 items-center mt-2"},xw={key:0,class:"inline-block text-xs text-disabled"},kw={slot:"trigger",class:"inline-block cursor-pointer text-xs underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"},Cw=["value"],Sw=["content"],Ew=["content"],Aw=Ue({__name:"VariablesSelector",props:{exampleDetection:{},disabled:{type:Boolean}},emits:["addVariable"],setup(t,{emit:e}){const s=fe(we.FALCON_API),i=fe(we.I18N),{t:r}=i,o=qt(),n=e,a=qt(!1),l=t,d=u=>{o?.value.hide(),u.detail.item?.value&&n("addVariable",`\${${u.detail.item?.value}}`)},h=u=>Pp(s,i,u,l.exampleDetection,"---");return(u,p)=>(ht(),xt("div",ww,[l.disabled?(ht(),xt("span",xw,"Insert variable")):(ht(),xt("sl-dropdown",{key:1,ref_key:"dropdownEl",ref:o,onSlAfterShow:p[0]||(p[0]=g=>a.value=!0),onSlAfterHide:p[1]||(p[1]=g=>a.value=!1),hoist:""},[H("a",kw,pt(W(r)("insertVariable")),1),H("sl-menu",{onSlSelect:d},[(ht(!0),xt(Te,null,ip(W(uc),(g,v)=>(ht(),xt("sl-menu-item",{key:v,value:v},[ra(pt(v)+" ",1),l.exampleDetection&&h(v)!=="undefined"?(ht(),xt("sl-tooltip",{key:0,slot:"suffix",style:{"--max-width":"90vw"},content:h(v),hoist:""},[Ft(W(jd))],8,Sw)):Fe("",!0)],8,Cw))),128))],32)],544)),H("sl-tooltip",{content:W(r)("insertVariableTooltip")},[Ft(W(jd))],8,Ew)]))}}),Wd=Cs(Aw,[["__scopeId","data-v-0be42262"]]),$w=["open"],Tw={slot:"expand-icon"},Iw={slot:"collapse-icon"},Lw={class:"flex w-full justify-between gap-3",slot:"summary"},Ow={class:"flex"},Rw={key:0,class:"self-center pr-3"},Mw=Ue({__name:"CollapsiblePanel",props:{label:{},iconComponent:{},iconProps:{},count:{},fontClass:{},open:{type:Boolean}},emits:["hide","show","after-show","after-hide"],setup(t,{emit:e}){const s=e,i=t,r=Vt(()=>i.fontClass??"type-lg-tight-medium"),{open:o=qt(!1)}=jh(i),n=()=>{s("show"),o.value=!0},a=()=>{s("hide"),o.value=!1};return(l,d)=>(ht(),xt("sl-details",{class:"collapsible-panel",onSlShow:d[0]||(d[0]=Ke(h=>n(),["self"])),onSlHide:d[1]||(d[1]=Ke(h=>a(),["self"])),onSlAfterShow:d[2]||(d[2]=Ke(h=>l.$emit("after-show"),["self"])),onSlAfterHide:d[3]||(d[3]=Ke(h=>l.$emit("after-hide"),["self"])),open:W(o)},[H("div",Tw,[Ft(W(pw))]),H("div",Iw,[Ft(W(bw))]),H("div",Lw,[H("div",Ow,[i.iconComponent?(ht(),xt("div",Rw,[Ft(i.iconComponent,Zy(Cp(i.iconProps)),null,16)])):Fe("",!0),H("h3",{class:br(["text-titles-and-attributes",r.value])},pt(i.label),3)]),t.count!==void 0?(ht(),xt("div",{key:0,class:br(["pr-0.5",r.value])},pt(t.count),3)):Fe("",!0)]),H("div",null,[t1(l.$slots,"default",{},void 0)])],40,$w))}}),Pw=Cs(Mw,[["__scopeId","data-v-ba21779b"]]),Dw={class:"p-3"},zw={key:0,class:"flex flex-row items-center justify-items-start gap-3 mb-4"},Vw=["disabled"],Nw=["disabled"],Fw={key:1},Bw={class:"text-critical type-md-medium"},Uw={class:"type-sm mb-4"},Hw={key:2},jw={class:"text-high type-md-medium"},Ww={class:"type-sm mb-4"},Kw={key:3},qw={class:"text-high type-md-medium"},Gw={class:"type-sm mb-4"},Yw={key:4,class:"pt-3"},Xw={class:"type-md-medium text-titles-and-attributes mb-3"},Jw={key:0,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},Qw={class:"w-1/4 truncate"},Zw={class:"type-xs text-body-and-labels"},tx={class:"type-sm text-titles-and-attributes"},ex={class:"w-1/3 truncate"},sx={class:"type-xs text-body-and-labels"},ix={class:"type-sm text-titles-and-attributes"},rx={class:"truncate"},ox={class:"type-xs text-body-and-labels"},nx={class:"type-sm text-titles-and-attributes"},ax={key:1,class:"mb-4 bg-surface-inner p-3 flex gap-3 justify-between"},lx={class:"w-1/4 truncate"},cx={class:"type-xs text-body-and-labels"},dx={class:"type-sm text-titles-and-attributes"},ux={class:"w-1/3 truncate"},hx={class:"type-xs text-body-and-labels"},px={class:"type-sm text-titles-and-attributes"},fx={class:"truncate"},gx={class:"type-xs text-body-and-labels"},mx={class:"type-sm text-titles-and-attributes"},bx=Ue({__name:"DefaultPanel",setup(t){const e=fe(we.FALCON_API),s=na(),{t:i,d:r}=fe(we.I18N),o=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIR"),s.setWizardState("RansomwareRemediation:NotifyIT")},n=()=>{s.clearWizardStateStep("RansomwareRemediation:NotifyIT"),s.setWizardState("RansomwareRemediation:NotifyIR")},a=()=>{!s.notifyITConfig&&!s.notifyIRConfig?e.navigation.navigateTo({path:"/wizard",type:"internal",target:"_blank"}):s.notifyITConfig?s.notifyIRConfig||e.navigation.navigateTo({path:"/notify-ir",type:"internal",target:"_blank"}):e.navigation.navigateTo({path:"/notify-it",type:"internal",target:"_blank"})};return(l,d)=>(ht(),xt("div",Dw,[W(s).notifyITConfig||W(s).notifyIRConfig?(ht(),xt("div",zw,[H("sl-button",{disabled:!W(s).notifyITConfig,onClick:d[0]||(d[0]=h=>o()),variant:"neutral",size:"small",slot:"trigger"},pt(W(i)("notifyIT")),9,Vw),H("sl-button",{disabled:!W(s).notifyIRConfig,onClick:d[1]||(d[1]=h=>n()),variant:"neutral",size:"small",slot:"trigger"},pt(W(i)("notifyIR")),9,Nw)])):Fe("",!0),!W(s).notifyITConfig&&!W(s).notifyIRConfig?(ht(),xt("div",Fw,[H("h2",Bw,pt(W(i)("actionNotConfigured")),1),H("p",Uw,pt(W(i)("configureActionsInAppMessage")),1),H("sl-button",{onClick:d[2]||(d[2]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},pt(W(i)("configureInApp")),1)])):W(s).notifyITConfig?W(s).notifyIRConfig?Fe("",!0):(ht(),xt("div",Kw,[H("h2",qw,pt(W(i)("notifyIRNotConfigured")),1),H("p",Gw,pt(W(i)("configureNotifyIRInAppMessage")),1),H("sl-button",{onClick:d[4]||(d[4]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},pt(W(i)("configureInApp")),1)])):(ht(),xt("div",Hw,[H("h2",jw,pt(W(i)("notifyITNotConfigured")),1),H("p",Ww,pt(W(i)("configureNotifyITInAppMessage")),1),H("sl-button",{onClick:d[3]||(d[3]=h=>a()),variant:"neutral",size:"small",slot:"trigger"},pt(W(i)("configureInApp")),1)])),W(s).existingTicketIT||W(s).existingTicketIR?(ht(),xt("div",Yw,[H("h2",Xw,pt(W(i)("remediationHistory")),1),W(s).existingTicketIT?(ht(),xt("div",Jw,[H("div",Qw,[H("h3",Zw,pt(W(i)("action")),1),H("p",tx,pt(W(i)("notifyIT")),1)]),H("div",ex,[H("h3",sx,pt(W(i)("jiraTicket")),1),H("p",ix,pt(W(s).existingTicketIT.issueKey),1)]),H("div",rx,[H("h3",ox,pt(W(i)("executionDate")),1),H("p",nx,pt(W(r)(new Date(W(s).existingTicketIT.creationDate),"fullDateTime")),1)])])):Fe("",!0),W(s).existingTicketIR?(ht(),xt("div",ax,[H("div",lx,[H("h3",cx,pt(W(i)("action")),1),H("p",dx,pt(W(i)("notifyIR")),1)]),H("div",ux,[H("h3",hx,pt(W(i)("jiraTicket")),1),H("p",px,pt(W(s).existingTicketIR.issueKey),1)]),H("div",fx,[H("h3",gx,pt(W(i)("executionDate")),1),H("p",mx,pt(W(r)(new Date(W(s).existingTicketIR.creationDate),"fullDateTime")),1)])])):Fe("",!0)])):Fe("",!0)]))}}),yx={class:"flex flex-col items-start justify-items-center gap-3 p-3 border-t border-lines-light"},vx={class:"type-md-medium text-text-and-icons mb-3"},_x={class:"w-full"},wx=["label","value","disabled"],xx=["value"],kx={class:"w-full"},Cx=["label","value","disabled"],Sx={class:"w-full"},Ex=["label","value","disabled"],Ax={class:"w-full"},$x={class:"w-full flex flex-row justify-end items-center gap-3"},Tx=["disabled"],Ix=["disabled","variant"],Lx={key:0,class:"mr-1 inline-block"},Ox={key:1,name:"x-octagon",class:"mr-1 inline-block"},Rx={key:2,name:"check-circle",class:"mr-1 inline-block"},Bp=Ue({__name:"ConfigureNotify",props:{step:{}},setup(t){let e,s;const i=fe(we.ALERTS),r=qt(),o=qt(),n=qt(),a=qt(),l=Z=>{r.value=Z,setTimeout(()=>{r.value=void 0},10*1e3)},{t:d}=fe(we.I18N),h=t,u=na(),p=Vt(()=>h.step),g=Vt(()=>u.getWizardStateProperty("priority","")),v=Vt(()=>p.value==="RansomwareRemediation:NotifyIT"?u.notifyITPriorities:p.value==="RansomwareRemediation:NotifyIR"?u.notifyIRPriorities:[]),x=Vt(()=>p.value==="RansomwareRemediation:NotifyIT"?d("notifyIT"):p.value==="RansomwareRemediation:NotifyIR"?d("notifyIR"):""),I=Vt(()=>u.getWizardStateProperty("summary","")),k=Vt(()=>u.getWizardStateProperty("description","")),_=async Z=>{const G=Z?.target?.value;u.setWizardStateProperty("priority",G),St()},A=async Z=>{const G=Z?.target?.value;u.setWizardStateProperty("summary",G.trim()||A_),St()},b=async Z=>{const G=Z?.target?.value;u.setWizardStateProperty("description",G.trim()),St()},E=Vt(()=>u.isStepValid),O=Vt(()=>u.validationMessages),T=Z=>{u.setWizardStateProperty("summary",`${I.value.trim()} ${Z}`.trim()),o.value.focus(),St()},B=Z=>{u.setWizardStateProperty("description",`${k.value.trim()} ${Z}`.trim()),n.value.focus(),St()},M=Vt(()=>u.isLoading),D=Vt(()=>u.isSaving),ot=async()=>{u.setWizardState(p.value),p.value==="RansomwareRemediation:NotifyIT"?u.setWizardStateStep(p.value,u.notifyITConfig??{}):p.value==="RansomwareRemediation:NotifyIR"&&u.setWizardStateStep(p.value,u.notifyIRConfig??{}),St()},tt=async()=>{clearTimeout(e),s?.hide(),u.wizardState!=="RansomwareRemediation:DefaultPanel"&&(await u.loadExistingTickets(),u.setWizardState("RansomwareRemediation:DefaultPanel"))},bt=async()=>{if(St()&&!r.value){const Z=await u.createJiraIssueFromCurrentStep();Z.created&&Z?(l("success"),e=setTimeout(tt,1e4),s=i.notify({variant:"success",message:d("jiraIssueCreated",{key:Z.key,id:Z.id}),backdrop:!0,position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0,tt()}},!1)):(l("danger"),s=i.notify({variant:"danger",backdrop:!0,message:Z.errors?.[0]??d("errorCreatingJiraIssue"),position:"bottom-center",margin:"var(--sl-spacing-2x-large)",afterHide:()=>{r.value=void 0}},!1))}},wt=()=>{u.setWizardState("RansomwareRemediation:DefaultPanel")},St=()=>{const{priority:Z,summary:G,description:lt}=O.value;return a.value?.setCustomValidity(Z),o.value?.setCustomValidity(G),n.value?.setCustomValidity(lt),a.value?.disabled||a.value?.reportValidity(),o.value?.disabled||o.value?.reportValidity(),n?.value?.disabled||n.value?.reportValidity(),E.value};return ot(),(Z,G)=>(ht(),xt("div",yx,[H("h1",vx,pt(x.value),1),H("div",_x,[H("sl-select",{label:W(d)("priority"),value:g.value,onSlChange:Ke(_,["self"]),placement:"bottom",disabled:M.value,ref_key:"priorityElement",ref:a},[(ht(!0),xt(Te,null,ip(v.value,lt=>(ht(),xt("sl-option",{key:lt.id,value:lt.id},pt(lt.name),9,xx))),128))],40,wx)]),H("div",kx,[H("sl-input",{label:W(d)("summary"),value:I.value,ref_key:"summaryElement",ref:o,onSlChange:Ke(A,["self"]),disabled:M.value},null,40,Cx),Ft(W(Wd),{onAddVariable:T,disabled:M.value,"example-detection":W(u).detection},null,8,["disabled","example-detection"])]),H("div",Sx,[H("sl-textarea",{label:W(d)("description"),value:k.value,ref_key:"descriptionElement",ref:n,disabled:M.value,onSlChange:Ke(b,["self"])},null,40,Ex),Ft(W(Wd),{onAddVariable:B,disabled:M.value,"example-detection":W(u).detection},null,8,["disabled","example-detection"])]),H("div",Ax,[Ft(W(_w))]),H("div",$x,[H("sl-button",{onClick:G[0]||(G[0]=lt=>wt()),disabled:D.value||r.value,variant:"neutral",size:"small",slot:"trigger"},pt(W(d)("cancel")),9,Tx),H("sl-button",{onClick:G[1]||(G[1]=lt=>bt()),disabled:D.value||!W(u).isStepValid,variant:r.value?r.value:"primary",size:"small",slot:"trigger"},[D.value?(ht(),xt("sl-spinner",Lx)):r.value==="danger"?(ht(),xt("sl-icon",Ox)):r.value==="success"?(ht(),xt("sl-icon",Rx)):Fe("",!0),ra(" "+pt(W(d)("createTicket")),1)],8,Ix)])]))}}),Mx=Ue({__name:"NotifyIR",setup(t){return(e,s)=>(ht(),Ps(Bp,{step:"RansomwareRemediation:NotifyIR"}))}}),Px=Ue({__name:"NotifyIT",setup(t){return(e,s)=>(ht(),Ps(Bp,{step:"RansomwareRemediation:NotifyIT"}))}}),Dx={class:"bg-surface-md h-full w-full overflow-y-auto max-w-full"},zx={class:"p-3"},Vx={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},Nx={class:"w-2/3 truncate"},Fx={class:"type-xs truncate text-body-and-labels",title:"{{ t('tacticAndTechnique') }}"},Bx={class:"type-sm min-h-6 text-titles-and-attributes truncate"},Ux=["href","title"],Hx=["href","title"],jx={class:"w-1/3 truncate"},Wx={class:"type-xs truncate text-body-and-labels"},Kx=["title"],qx=["href"],Gx={class:"flex flex-row items-center justify-items-start gap-3 mb-3"},Yx={class:"w-full truncate"},Xx={class:"type-xs truncate text-body-and-labels"},Jx={class:"type-sm min-h-6 text-titles-and-attributes w-full"},Qx=Ue({__name:"RansomwareRemediation",setup(t){const{t:e}=fe(we.I18N),s=na(),i=fe(we.FALCON_API),r=Vt(()=>y_(s.detection)),o=Vt(()=>b_(s.detection)),n=Vt(()=>v_(s.detection)),a=l=>{const d=l.currentTarget.href;i.navigation.navigateTo({path:d,target:"_blank",type:"falcon"})};return(l,d)=>(ht(),Ps(W(Pw),{label:W(e)("ransomwareRemediation"),"font-class":"type-md-medium",open:!0},{default:Jh(()=>[H("div",Dx,[H("div",zx,[H("div",Vx,[H("div",Nx,[H("dt",Fx,pt(W(e)("tacticAndTechnique")),1),H("dd",Bx,[H("a",{onClick:Ke(a,["stop","prevent"]),onAuxclick:Ke(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:r.value,target:"_blank",title:W(s).detection?.tactic},pt(W(s).detection?.tactic),41,Ux),ra(" "+pt(W(e)("via"))+" ",1),H("a",{onClick:Ke(a,["stop","prevent"]),onAuxclick:Ke(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:o.value,target:"_blank",title:W(s).detection?.technique},pt(W(s).detection?.technique),41,Hx)])]),H("div",jx,[H("dt",Wx,pt(W(e)("hostname")),1),H("dd",{class:"type-sm min-h-6 text-titles-and-attributes truncate",title:W(s).detection?.device?.hostname},[H("a",{onClick:Ke(a,["stop","prevent"]),onAuxclick:Ke(a,["stop","prevent"]),class:"underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle",href:n.value,target:"_blank"},pt(W(s).detection?.device?.hostname),41,qx)],8,Kx)])]),H("div",Gx,[H("div",Yx,[H("dt",Xx,pt(W(e)("description")),1),H("dd",Jx,pt(W(e)("createAJiraTicket")),1)])])]),W(s).wizardState==="RansomwareRemediation:DefaultPanel"?(ht(),Ps(bx,{key:0})):Fe("",!0),W(s).wizardState==="RansomwareRemediation:NotifyIT"?(ht(),Ps(Px,{key:1})):Fe("",!0),W(s).wizardState==="RansomwareRemediation:NotifyIR"?(ht(),Ps(Mx,{key:2})):Fe("",!0)])]),_:1},8,["label"]))}}),Zx=Cs(Qx,[["__scopeId","data-v-d57434c1"]]),t2={class:"bg-surface-lg flex h-full w-full flex-col"},e2={key:0,class:"h-full w-full flex-grow p-6 text-center"},s2=Ue({__name:"AvailableRemediations",setup(t){const e=na(),s=Vt(()=>e.hasRansomwareRemediation);return rc(()=>{e.loadData()}),(i,r)=>(ht(),xt("div",t2,[W(e).isLoading?(ht(),xt("div",e2,[...r[0]||(r[0]=[H("sl-spinner",{style:{"font-size":"3rem"}},null,-1)])])):Fe("",!0),s.value&&!W(e).isLoading?(ht(),Ps(Zx,{key:1})):Fe("",!0)]))}}),i2={class:"main-content w-full"},r2=Ue({__name:"App",setup(t){return(e,s)=>(ht(),xt("div",i2,[Ft(s2)]))}}),Pa=t=>t&&typeof t=="object"&&!Array.isArray(t),gl=(t,...e)=>{if(!e.length)return t;const s=e.shift();if(Pa(t)&&Pa(s))for(const i in s)Pa(s[i])?(t[i]||Object.assign(t,{[i]:{}}),gl(t[i],s[i])):Object.assign(t,{[i]:s[i]});return gl(t,...e)},Sn=gl({},{en:{account:{t:0,b:{t:2,i:[{t:3}],s:"Account"}},action:{t:0,b:{t:2,i:[{t:3}],s:"Action"}},actionAppDetails:{t:0,b:{t:2,i:[{t:3}],s:"App details"}},actionButtonLabel:{t:0,b:{t:2,i:[{t:3}],s:"Actions"}},actionConfigureJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions"}},actionConfigureRemediationOptions:{t:0,b:{t:2,i:[{t:3}],s:"Configure remediation options"}},actionDataPrivacy:{t:0,b:{t:2,i:[{t:3}],s:"This action sends data out of Falcon to a system or third party that may have different security standards, privacy and data processing practices, or terms and conditions. By configuring this workflow you consent to such data transfer."}},actionNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Actions not configured"}},auditRoute:{t:0,b:{t:2,i:[{t:3}],s:"Audit"}},availableRemediationWorkflows:{t:0,b:{t:2,i:[{t:3}],s:"Available remediation workflows"}},buttonSeeDetections:{t:0,b:{t:2,i:[{t:3}],s:"See detections"}},cancel:{t:0,b:{t:2,i:[{t:3}],s:"Cancel"}},collectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"Collection not found"}},configureActionsInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:"This action does not have a configured workflow or Jira integration. Configure this workflow within the Triage app to use this action."}},configured:{t:0,b:{t:2,i:[{t:3}],s:"Configured"}},configureInApp:{t:0,b:{t:2,i:[{t:3}],s:"Configure in app"}},configureJiraActionsFollowing:{t:0,b:{t:2,i:[{t:3}],s:"Configure Jira actions for the following workflows"}},configureNotifyIRInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IR". Configure this workflow within the Triage app to use this action.'}},configureNotifyITInAppMessage:{t:0,b:{t:2,i:[{t:3}],s:'This action does not have a configured workflow or Jira integration for "Notify IT". Configure this workflow within the Triage app to use this action.'}},configureTheJiraAction:{t:0,b:{t:2,i:[{t:3}],s:"Configure the Jira action for this remediation workflow"}},createAJiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create a Jira ticket to notify IT or IR with specific details of ransomware detections"}},createTicket:{t:0,b:{t:2,i:[{t:3}],s:"Create Jira ticket"}},criticalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Critical"}},customObjectCollectionNotFound:{t:0,b:{t:2,i:[{t:3}],s:"collection was not found"}},description:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},detectionForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Enterprise"}},detectionForMobile:{t:0,b:{t:2,i:[{t:3}],s:"Falcon Detection Methods for Mobile"}},detectionsTitle:{t:0,b:{t:2,i:[{t:3}],s:"Detections"}},enterOneOrMoreLabels:{t:0,b:{t:2,i:[{t:3}],s:"Enter one or more labels"}},enterSummary:{t:0,b:{t:2,i:[{t:3}],s:"Enter a summary"}},errorConfiguringJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error configuring JIRA issue type"}},errorCreatingJiraIssue:{t:0,b:{t:2,i:[{t:3}],s:"Error creating the Jira issue"}},errorCreatingJiraIssueDataMissing:{t:0,b:{t:2,i:[{t:3}],s:"Jira Issue can't be created. Some information are missing."}},executionDate:{t:0,b:{t:2,i:[{t:3}],s:"Execution date"}},filterLastDay:{t:0,b:{t:2,i:[{t:3}],s:"Last day"}},filterLastHour:{t:0,b:{t:2,i:[{t:3}],s:"Last hour"}},filterLastMonth:{t:0,b:{t:2,i:[{t:3}],s:"Last 30 days"}},filterLastWeek:{t:0,b:{t:2,i:[{t:3}],s:"Last week"}},filterShowSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Show sub-techniques"}},filterShowTrend:{t:0,b:{t:2,i:[{t:3}],s:"Show trends"}},filterSwitchOff:{t:0,b:{t:2,i:[{t:3}],s:"Off"}},filterSwitchOn:{t:0,b:{t:2,i:[{t:3}],s:"On"}},highSeverity:{t:0,b:{t:2,i:[{t:3}],s:"High"}},hostname:{t:0,b:{t:2,i:[{t:3}],s:"Hostname"}},informationalSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Informational"}},insertVariable:{t:0,b:{t:2,i:[{t:3}],s:"Insert variable"}},insertVariableTooltip:{t:0,b:{t:2,i:[{t:3}],s:"Insert a variable in the field that will be filled with the corresponding value from the detection"}},issueType:{t:0,b:{t:2,i:[{t:3}],s:"Issue type"}},jiraIssueConfigured:{t:0,b:{t:2,i:[{t:3}],s:"JIRA issue type configured"}},jiraIssueCreated:{t:0,b:{t:2,i:[{t:3,v:"Jira issue "},{t:4,k:"key"},{t:3,v:" has been created."}]}},jiraTicket:{t:0,b:{t:2,i:[{t:3}],s:"Jira ticket"}},labels:{t:0,b:{t:2,i:[{t:3}],s:"Labels"}},loading:{t:0,b:{t:2,i:[{t:3}],s:"Loading"}},lowSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Low"}},matrixForEnterprise:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Enterprise"}},matrixForMobile:{t:0,b:{t:2,i:[{t:3}],s:"MITRE ATT&CK Matrix for Mobile"}},mediumSeverity:{t:0,b:{t:2,i:[{t:3}],s:"Medium"}},mitreAutoRemediationRoute:{t:0,b:{t:2,i:[{t:3}],s:"CrowdStrike Triage for MITRE ATT&CK"}},noJiraAccount:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA integration account was found"}},noJiraIssueType:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA issueType was configured for this project"}},noJiraLabels:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA labels was configured for this project"}},noJiraPriority:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA priority was configured for this project"}},noJiraProject:{t:0,b:{t:2,i:[{t:3}],s:"No JIRA projects was configured in this account"}},noMatchingMitreDetections:{t:0,b:{t:2,i:[{t:3}],s:"No matching MITRE detections"}},notConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Not configured"}},notifyIR:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR"}},notifyIRNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IR not configured"}},notifyIT:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT"}},notifyITNotConfigured:{t:0,b:{t:2,i:[{t:3}],s:"Notify IT not configured"}},overviewCreated:{t:0,b:{t:2,i:[{t:3}],s:"Created"}},overviewDescription:{t:0,b:{t:2,i:[{t:3}],s:"Description"}},overviewDetectedSubTechniques:{t:0,b:{t:2,i:[{t:3}],s:"Detected sub-techniques"}},overviewLastModified:{t:0,b:{t:2,i:[{t:3}],s:"Last modified"}},overviewReadFullDescription:{t:0,b:{t:2,i:[{t:3}],s:"Read full description"}},overviewSubTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique"}},overviewSubTechniqueOf:{t:0,b:{t:2,i:[{t:3}],s:"Sub-technique of"}},overviewTitle:{t:0,b:{t:2,i:[{t:3}],s:"Overview"}},priority:{t:0,b:{t:2,i:[{t:3}],s:"Priority"}},projects:{t:0,b:{t:2,i:[{t:3}],s:"Projects"}},ransomwareRemediation:{t:0,b:{t:2,i:[{t:3}],s:"Ransomware remediation"}},remediationHistory:{t:0,b:{t:2,i:[{t:3}],s:"Remediation history"}},requiredValuesMissing:{t:0,b:{t:2,i:[{t:3}],s:"Required values are missing"}},save:{t:0,b:{t:2,i:[{t:3}],s:"Save"}},selectAccount:{t:0,b:{t:2,i:[{t:3}],s:"Select an account"}},selectIssueType:{t:0,b:{t:2,i:[{t:3}],s:"Select an issue type"}},selectPriority:{t:0,b:{t:2,i:[{t:3}],s:"Select a priority"}},selectProject:{t:0,b:{t:2,i:[{t:3}],s:"Select a project"}},subTechniquesTitle:{t:0,b:{t:2,i:[{t:3}],s:"Sub-techniques"}},summary:{t:0,b:{t:2,i:[{t:3}],s:"Summary"}},tacticAndTechnique:{t:0,b:{t:2,i:[{t:3}],s:"Tactic & technique"}},updateYourDetection:{t:0,b:{t:2,i:[{t:3}],s:"Update your detection timeframe or ensure your organization is set up properly for endpoint detections."}},via:{t:0,b:{t:2,i:[{t:3}],s:"via"}},warning:{t:0,b:{t:2,i:[{t:3}],s:"Warning"}},workflowsConfigured:{t:0,b:{t:2,i:[{t:4,k:"configuredActions"},{t:3,v:"/"},{t:4,k:"totalActions"},{t:3,v:" workflows configured"}]}}}});function o2(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function Nr(t,e){const i=$p(Ue({extends:e})),r=document.createElement("span");i.mount(r);const o=r.innerHTML;return i.unmount(),r.remove(),o}class n2{install(e){e.provide(we.ALERTS,this)}notify(e,s=1e4){const{variant:i,message:r,afterHide:o,backdrop:n,position:a,margin:l="var(--sl-spacing-medium)"}=e;let d="";switch(i){case"success":d=Nr("success",ew);break;case"danger":d=Nr("danger",Hd);break;case"warning":d=Nr("warning",ow);break;case"primary":d=Nr("primary",J_);break;default:d=Nr("danger",Hd);break}s=s===!1||s<=0?Number.POSITIVE_INFINITY:s;const h=document.createElement("sl-alert"),u=Object.assign(h,{variant:i,closable:!0,duration:s,innerHTML:`<span slot="icon">${d}</span>${o2(r)}`});let p;return n&&(p=document.createElement("div"),p.classList.add("sl-toast-backdrop"),document.body.append(p)),u.addEventListener("sl-after-hide",()=>{o?.(),p&&p.remove()}),document.body.append(u),u.toast(),a&&(u.classList?.add("static"),setTimeout(()=>{const g=u.base;g.style.width="max-content",g.style.margin="0",g.style.maxWidth=`calc(100% - ${l} * 2)`,g.style.maxHeight=`calc(100% - ${l} * 2)`,a.includes("top")?g.style.top=l:a.includes("middle")?g.style.top="50%":a.includes("bottom")&&(g.style.bottom=l),a.includes("left")?g.style.left=l:a.includes("center")?g.style.left="50%":a.includes("right")&&(g.style.right=l),(a.includes("center")||a.includes("middle"))&&(g.style.transform=`translate(${a.includes("center")?"-50%":"0"}, ${a.includes("middle")?"-50%":"0"})`)},10)),u}}function a2(){return new n2}var l2={},c2=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function d2(t){return typeof t=="string"&&c2.test(t)}const ye=[];for(let t=0;t<256;++t)ye.push((t+256).toString(16).slice(1));function u2(t,e=0){return(ye[t[e+0]]+ye[t[e+1]]+ye[t[e+2]]+ye[t[e+3]]+"-"+ye[t[e+4]]+ye[t[e+5]]+"-"+ye[t[e+6]]+ye[t[e+7]]+"-"+ye[t[e+8]]+ye[t[e+9]]+"-"+ye[t[e+10]]+ye[t[e+11]]+ye[t[e+12]]+ye[t[e+13]]+ye[t[e+14]]+ye[t[e+15]]).toLowerCase()}let Da;const h2=new Uint8Array(16);function p2(){if(!Da){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Da=crypto.getRandomValues.bind(crypto)}return Da(h2)}const f2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Kd={randomUUID:f2};function g2(t,e,s){t=t||{};const i=t.random??t.rng?.()??p2();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,u2(i)}function qd(t,e,s){return Kd.randomUUID&&!t?Kd.randomUUID():g2(t)}const Gd="current";function Kt(t){if(!t.isConnected)throw new Error("You cannot call this API before having established a connection to the host!")}function m2(t){return!!t?.data?.meta?.messageId}const b2=5e3,y2=3e4,v2=5e3;function _2(t){return typeof t!="string"||!d2(t)?null:t}function w2(t){return t.type==="connect"?b2:t.type==="api"?y2:t.type==="navigateTo"?v2:null}class x2{constructor({onDataUpdate:e,onBroadcast:s,onLivereload:i}={}){rt(this,"onDataUpdate");rt(this,"onBroadcast");rt(this,"onLivereload");rt(this,"pendingMessages",new Map);rt(this,"targetOrigin","*");rt(this,"handleMessageWrapper",e=>this.handleMessage(e));rt(this,"handleMessage",e=>{if(!m2(e))return;const{message:s}=e.data;if(s.type==="data"){this.onDataUpdate?.(s);return}if(s.type==="broadcast"){this.onBroadcast?.(s);return}if(s.type==="livereload"){this.onLivereload?.(s);return}const{messageId:i}=e.data.meta,r=_2(i);if(!r){this.throwError("Received message with invalid messageId format");return}const o=this.pendingMessages.get(r);if(!o||typeof o!="function"){this.throwError("Received unexpected message");return}this.pendingMessages.delete(r),o(s.payload)});this.onDataUpdate=e,this.onBroadcast=s,this.onLivereload=i,window.addEventListener("message",this.handleMessageWrapper)}destroy(){window.removeEventListener("message",this.handleMessageWrapper)}setOrigin(e){this.targetOrigin=e}sendUnidirectionalMessage(e){const s=qd(),i={message:e,meta:{messageId:s,version:Gd}};window.parent.postMessage(i,this.targetOrigin)}async postMessage(e){return new Promise((s,i)=>{const r=qd();let o;const n=w2(e);n!==null&&(o=setTimeout(()=>{i(new Error(`Waiting for response from foundry host for "${e.type}" message (ID: ${r}) timed out after ${n}ms`))},n)),this.pendingMessages.set(r,l=>{o&&clearTimeout(o),s(l)});const a={message:e,meta:{messageId:r,version:Gd}};window.parent.postMessage(a,this.targetOrigin)})}throwError(e){throw new Error(e)}}function oe(t,e,s,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}const di=new WeakMap,Mi=new WeakMap,Js=new WeakMap,En=Symbol("anyProducer"),Yd=Promise.resolve(),An=Symbol("listenerAdded"),$n=Symbol("listenerRemoved");let Tn=!1,za=!1;const In=t=>typeof t=="string"||typeof t=="symbol"||typeof t=="number";function ir(t){if(!In(t))throw new TypeError("`eventName` must be a string, symbol, or number")}function Yo(t){if(typeof t!="function")throw new TypeError("listener must be a function")}function rr(t,e){const s=Mi.get(t);if(s.has(e))return s.get(e)}function so(t,e){const s=In(e)?e:En,i=Js.get(t);if(i.has(s))return i.get(s)}function k2(t,e,s){const i=Js.get(t);if(i.has(e))for(const r of i.get(e))r.enqueue(s);if(i.has(En)){const r=Promise.all([e,s]);for(const o of i.get(En))o.enqueue(r)}}function Xd(t,e){e=Array.isArray(e)?e:[e];let s=!1,i=()=>{},r=[];const o={enqueue(n){r.push(n),i()},finish(){s=!0,i()}};for(const n of e){let a=so(t,n);a||(a=new Set,Js.get(t).set(n,a)),a.add(o)}return{async next(){return r?r.length===0?s?(r=void 0,this.next()):(await new Promise(n=>{i=n}),this.next()):{done:!1,value:await r.shift()}:{done:!0}},async return(n){r=void 0;for(const a of e){const l=so(t,a);l&&(l.delete(o),l.size===0&&Js.get(t).delete(a))}return i(),arguments.length>0?{done:!0,value:await n}:{done:!0}},[Symbol.asyncIterator](){return this}}}function Jd(t){if(t===void 0)return Qd;if(!Array.isArray(t))throw new TypeError("`methodNames` must be an array of strings");for(const e of t)if(!Qd.includes(e))throw typeof e!="string"?new TypeError("`methodNames` element must be a string"):new Error(`${e} is not Emittery method`);return t}const ar=t=>t===An||t===$n;function Xo(t,e,s){if(ar(e))try{Tn=!0,t.emit(e,s)}finally{Tn=!1}}class Wi{static mixin(e,s){return s=Jd(s),i=>{if(typeof i!="function")throw new TypeError("`target` must be function");for(const n of s)if(i.prototype[n]!==void 0)throw new Error(`The property \`${n}\` already exists on \`target\``);function r(){return Object.defineProperty(this,e,{enumerable:!1,value:new Wi}),this[e]}Object.defineProperty(i.prototype,e,{enumerable:!1,get:r});const o=n=>function(...a){return this[e][n](...a)};for(const n of s)Object.defineProperty(i.prototype,n,{enumerable:!1,value:o(n)});return i}}static get isDebugEnabled(){if(typeof l2!="object")return za;const{env:e}=globalThis.process??{env:{}};return e.DEBUG==="emittery"||e.DEBUG==="*"||za}static set isDebugEnabled(e){za=e}constructor(e={}){di.set(this,new Set),Mi.set(this,new Map),Js.set(this,new Map),Js.get(this).set(En,new Set),this.debug=e.debug??{},this.debug.enabled===void 0&&(this.debug.enabled=!1),this.debug.logger||(this.debug.logger=(s,i,r,o)=>{try{o=JSON.stringify(o)}catch{o=`Object with the following keys failed to stringify: ${Object.keys(o).join(",")}`}(typeof r=="symbol"||typeof r=="number")&&(r=r.toString());const n=new Date,a=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}.${n.getMilliseconds()}`;console.log(`[${a}][emittery:${s}][${i}] Event Name: ${r}
	data: ${o}`)})}logIfDebugEnabled(e,s,i){(Wi.isDebugEnabled||this.debug.enabled)&&this.debug.logger(e,this.debug.name,s,i)}on(e,s,{signal:i}={}){Yo(s),e=Array.isArray(e)?e:[e];for(const o of e){ir(o);let n=rr(this,o);n||(n=new Set,Mi.get(this).set(o,n)),n.add(s),this.logIfDebugEnabled("subscribe",o,void 0),ar(o)||Xo(this,An,{eventName:o,listener:s})}const r=()=>{this.off(e,s),i?.removeEventListener("abort",r)};return i?.addEventListener("abort",r,{once:!0}),i?.aborted&&r(),r}off(e,s){Yo(s),e=Array.isArray(e)?e:[e];for(const i of e){ir(i);const r=rr(this,i);r&&(r.delete(s),r.size===0&&Mi.get(this).delete(i)),this.logIfDebugEnabled("unsubscribe",i,void 0),ar(i)||Xo(this,$n,{eventName:i,listener:s})}}once(e,s){if(s!==void 0&&typeof s!="function")throw new TypeError("predicate must be a function");let i;const r=new Promise(o=>{i=this.on(e,n=>{s&&!s(n)||(i(),o(n))})});return r.off=i,r}events(e){e=Array.isArray(e)?e:[e];for(const s of e)ir(s);return Xd(this,e)}async emit(e,s){if(ir(e),ar(e)&&!Tn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emit",e,s),k2(this,e,s);const i=rr(this,e)??new Set,r=di.get(this),o=[...i],n=ar(e)?[]:[...r];await Yd,await Promise.all([...o.map(async a=>{if(i.has(a))return a(s)}),...n.map(async a=>{if(r.has(a))return a(e,s)})])}async emitSerial(e,s){if(ir(e),ar(e)&&!Tn)throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");this.logIfDebugEnabled("emitSerial",e,s);const i=rr(this,e)??new Set,r=di.get(this),o=[...i],n=[...r];await Yd;for(const a of o)i.has(a)&&await a(s);for(const a of n)r.has(a)&&await a(e,s)}onAny(e,{signal:s}={}){Yo(e),this.logIfDebugEnabled("subscribeAny",void 0,void 0),di.get(this).add(e),Xo(this,An,{listener:e});const i=()=>{this.offAny(e),s?.removeEventListener("abort",i)};return s?.addEventListener("abort",i,{once:!0}),s?.aborted&&i(),i}anyEvent(){return Xd(this)}offAny(e){Yo(e),this.logIfDebugEnabled("unsubscribeAny",void 0,void 0),Xo(this,$n,{listener:e}),di.get(this).delete(e)}clearListeners(e){e=Array.isArray(e)?e:[e];for(const s of e)if(this.logIfDebugEnabled("clear",s,void 0),In(s)){const i=rr(this,s);i&&i.clear();const r=so(this,s);if(r){for(const o of r)o.finish();r.clear()}}else{di.get(this).clear();for(const[i,r]of Mi.get(this).entries())r.clear(),Mi.get(this).delete(i);for(const[i,r]of Js.get(this).entries()){for(const o of r)o.finish();r.clear(),Js.get(this).delete(i)}}}listenerCount(e){e=Array.isArray(e)?e:[e];let s=0;for(const i of e){if(In(i)){s+=di.get(this).size+(rr(this,i)?.size??0)+(so(this,i)?.size??0)+(so(this)?.size??0);continue}i!==void 0&&ir(i),s+=di.get(this).size;for(const r of Mi.get(this).values())s+=r.size;for(const r of Js.get(this).values())s+=r.size}return s}bindMethods(e,s){if(typeof e!="object"||e===null)throw new TypeError("`target` must be an object");s=Jd(s);for(const i of s){if(e[i]!==void 0)throw new Error(`The property \`${i}\` already exists on \`target\``);Object.defineProperty(e,i,{enumerable:!1,value:this[i].bind(this)})}}}const Qd=Object.getOwnPropertyNames(Wi.prototype).filter(t=>t!=="constructor");Object.defineProperty(Wi,"listenerAdded",{value:An,writable:!1,enumerable:!0,configurable:!1});Object.defineProperty(Wi,"listenerRemoved",{value:$n,writable:!1,enumerable:!0,configurable:!1});function ne(t){let e,s,i;return e=t,(r,o,n)=>{if(n.value!=null)n.value=Zd(n.value,e,s,i);else if(n.get!=null)n.get=Zd(n.get,e,s,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Va=new Map;function Zd(t,e,s=0,i){const r=Symbol("__memoized_map__");return function(...o){let n;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[r];if(Array.isArray(i))for(const l of i)Va.has(l)?Va.get(l).push(a):Va.set(l,[a]);if(e||o.length>0||s>0){let l;e===!0?l=o.map(u=>u.toString()).join("!"):e?l=e.apply(this,o):l=o[0];const d=`${l}__timestamp`;let h=!1;if(s>0)if(!a.has(d))h=!0;else{let u=a.get(d);h=Date.now()-u>s}a.has(l)&&!h?n=a.get(l):(n=t.apply(this,o),a.set(l,n),s>0&&a.set(d,Date.now()))}else{const l=this;a.has(l)?n=a.get(l):(n=t.apply(this,o),a.set(l,n))}return n}}class C2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"alerts",method:"deleteEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV1(e={}){console.warn("This method is deprecated. Use getQueriesAlertsV2 instead.");const s={type:"api",api:"alerts",method:"getQueriesAlertsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAlertsV2(e={}){const s={type:"api",api:"alerts",method:"getQueriesAlertsV2",payload:{params:e}};return this.bridge.postMessage(s)}async patchCombinedAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchCombinedAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchCombinedAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchCombinedAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchCombinedAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV2(e,s={}){console.warn("This method is deprecated. Use patchEntitiesAlertsV3 instead.");const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesAlertsV3(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesAlertsV3",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"patchEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postAggregatesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postAggregatesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postAggregatesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV1(e,s={}){console.warn("This method is deprecated. Use postEntitiesAlertsV2 instead.");const i={type:"api",api:"alerts",method:"postEntitiesAlertsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAlertsV2(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesAlertsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"alerts",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class S2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesResourcesCountByManagedByV1(e={}){const s={type:"api",api:"cloudSecurityAssets",method:"getAggregatesResourcesCountByManagedByV1",payload:{params:e}};return this.bridge.postMessage(s)}}class E2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCloudSecurityRegistrationAwsCombinedAccountsV1(e={}){const s={type:"api",api:"cloudregistration",method:"getCloudSecurityRegistrationAwsCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}}class A2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesClustersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesClustersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersGroupByManagedV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersGroupByManagedV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesContainersSensorCoverageV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesContainersSensorCoverageV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesImagesCountByStateV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesImagesCountByStateV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesNodesCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesNodesCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesPodsCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesPodsCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesUnidentifiedContainersCountV1(e={}){const s={type:"api",api:"containerSecurity",method:"getAggregatesUnidentifiedContainersCountV1",payload:{params:e}};return this.bridge.postMessage(s)}async getCombinedClustersV1(e={}){const s={type:"api",api:"containerSecurity",method:"getCombinedClustersV1",payload:{params:e}};return this.bridge.postMessage(s)}}class $2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1(e={}){const s={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmAzureCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1(e={}){const s={type:"api",api:"cspmRegistration",method:"getCspmregistrationCloudConnectCspmGcpCombinedAccountsV1",payload:{params:e}};return this.bridge.postMessage(s)}}class T2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"deleteV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1Collections(e={}){const s={type:"api",api:"customobjects",method:"getV1Collections",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjects(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjects",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKey(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKey",payload:{params:e}};return this.bridge.postMessage(s)}async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(e={}){const s={type:"api",api:"customobjects",method:"getV1CollectionsCollectionNameObjectsObjectKeyMetadata",payload:{params:e}};return this.bridge.postMessage(s)}async postV1CollectionsCollectionNameObjects(e,s={}){const i={type:"api",api:"customobjects",method:"postV1CollectionsCollectionNameObjects",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putV1CollectionsCollectionNameObjectsObjectKey(e,s={}){const i={type:"api",api:"customobjects",method:"putV1CollectionsCollectionNameObjectsObjectKey",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class I2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSuppressedDevicesV1(e={}){const s={type:"api",api:"detects",method:"getEntitiesSuppressedDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchEntitiesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV1(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchQueriesDetectsV2(e,s={}){const i={type:"api",api:"detects",method:"patchQueriesDetectsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDetectsGetV1(e,s={}){const i={type:"api",api:"detects",method:"postAggregatesDetectsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSummariesGetV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSummariesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesSuppressedDevicesV1(e,s={}){const i={type:"api",api:"detects",method:"postEntitiesSuppressedDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class L2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"deleteEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesBucketsV1(e){const s={type:"api",api:"devices",method:"getAggregatesBucketsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesFgaTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesFgaTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getAggregatesTagPrefixCountsV1(e){const s={type:"api",api:"devices",method:"getAggregatesTagPrefixCountsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesDevicesV1(e){const s={type:"api",api:"devices",method:"getEntitiesDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFgaGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesGroupsV1(e){const s={type:"api",api:"devices",method:"getEntitiesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesAvailableGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesAvailableGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesHiddenV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesHiddenV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV1(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesDevicesV2(e={}){const s={type:"api",api:"devices",method:"getQueriesDevicesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFgaGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesFgaGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesGroupsV1(e={}){const s={type:"api",api:"devices",method:"getQueriesGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesDevicesTagsV2(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesDevicesTagsV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesDevicesV1(e,s){const i={type:"api",api:"devices",method:"patchEntitiesDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"patchEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesDevicesGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesDevicesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesFgaHostsGetV1(e,s={}){const i={type:"api",api:"devices",method:"postAggregatesFgaHostsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedDevicesLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedDevicesLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postCombinedFgaHostsLoginHistoryV1(e,s={}){const i={type:"api",api:"devices",method:"postCombinedFgaHostsLoginHistoryV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesHiddenActionsV4(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesHiddenActionsV4",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV1(e,s){const i={type:"api",api:"devices",method:"postEntitiesDevicesV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesDevicesV2(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesDevicesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsReportsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsReportsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesFgaHostsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesFgaHostsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupActionsV1(e,s){const i={type:"api",api:"devices",method:"postEntitiesGroupActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesGroupsV1(e,s={}){const i={type:"api",api:"devices",method:"postEntitiesGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class O2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionV1(e){const s={type:"api",api:"faasGateway",method:"getEntitiesExecutionV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecutionV1(e,s={}){const i={type:"api",api:"faasGateway",method:"postEntitiesExecutionV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class R2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async deleteEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"deleteEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesEventsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesFirewallFieldsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsDetailsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsDetailsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesNetworkLocationsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPlatformsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPoliciesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesPoliciesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesRulesV1(e){const s={type:"api",api:"fwmgr",method:"getEntitiesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryEntitiesRuleGroupsV1(e){const s={type:"api",api:"fwmgr",method:"getLibraryEntitiesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getLibraryQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getLibraryQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesEventsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesEventsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesFirewallFieldsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesFirewallFieldsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesNetworkLocationsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesNetworkLocationsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPlatformsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPlatformsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPolicyRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesPolicyRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRuleGroupsV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRuleGroupsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesRulesV1(e={}){const s={type:"api",api:"fwmgr",method:"getQueriesRulesV1",payload:{params:e}};return this.bridge.postMessage(s)}async patchEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async patchEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"patchEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesEventsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesEventsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesPolicyRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesPolicyRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRuleGroupsGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRuleGroupsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesRulesGetV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postAggregatesRulesGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsMetadataV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsMetadataV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsPrecedenceV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsPrecedenceV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesOntologyV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesOntologyV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRuleGroupsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRuleGroupsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesRulesValidateFilepathV1(e,s={}){const i={type:"api",api:"fwmgr",method:"postEntitiesRulesValidateFilepathV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesNetworkLocationsV1(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesNetworkLocationsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async putEntitiesPoliciesV2(e,s={}){const i={type:"api",api:"fwmgr",method:"putEntitiesPoliciesV2",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class M2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getCombinedCrowdscoresV1(e={}){const s={type:"api",api:"incidents",method:"getCombinedCrowdscoresV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesBehaviorsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesBehaviorsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesIncidentsV1(e={}){const s={type:"api",api:"incidents",method:"getQueriesIncidentsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postAggregatesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postAggregatesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postAggregatesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesBehaviorsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesBehaviorsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentActionsV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesIncidentsGetV1(e,s={}){const i={type:"api",api:"incidents",method:"postEntitiesIncidentsGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class P2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesSavedSearchesExecuteV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesExecuteV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesSavedSearchesV1(e){const s={type:"api",api:"loggingapi",method:"getEntitiesSavedSearchesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesSavedSearchesExecuteV1(e,s={}){const i={type:"api",api:"loggingapi",method:"postEntitiesSavedSearchesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class D2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getIntelMitreEntitiesMatrixV1(e={}){const s={type:"api",api:"mitre",method:"getIntelMitreEntitiesMatrixV1",payload:{params:e}};return this.bridge.postMessage(s)}}class z2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesConfigsV1(e={}){const s={type:"api",api:"plugins",method:"getEntitiesConfigsV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesDefinitionsV1(e){const s={type:"api",api:"plugins",method:"getEntitiesDefinitionsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteDraftV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteDraftV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"plugins",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class V2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getAggregatesRegistriesCountByStateV1(e={}){const s={type:"api",api:"registryAssessment",method:"getAggregatesRegistriesCountByStateV1",payload:{params:e}};return this.bridge.postMessage(s)}}class N2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async deleteEntitiesPutFilesV1(e){const s={type:"api",api:"remoteResponse",method:"deleteEntitiesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesAppCommandV1(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesAppCommandV1",payload:{params:e}};return this.bridge.postMessage(s)}async getEntitiesPutFilesV2(e){const s={type:"api",api:"remoteResponse",method:"getEntitiesPutFilesV2",payload:{params:e}};return this.bridge.postMessage(s)}async getQueriesPutFilesV1(e={}){const s={type:"api",api:"remoteResponse",method:"getQueriesPutFilesV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesAppCommandV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppCommandV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesAppSessionsV1(e,s={}){const i={type:"api",api:"remoteResponse",method:"postEntitiesAppSessionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class F2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getQueriesUsersV1(e={}){const s={type:"api",api:"userManagement",method:"getQueriesUsersV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesUsersGetV1(e,s={}){const i={type:"api",api:"userManagement",method:"postEntitiesUsersGetV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class B2{constructor(e){rt(this,"bridge");this.bridge=e}getBridge(){return this.bridge}async getEntitiesExecutionResultsV1(e){const s={type:"api",api:"workflows",method:"getEntitiesExecutionResultsV1",payload:{params:e}};return this.bridge.postMessage(s)}async postEntitiesExecuteV1(e,s={}){const i={type:"api",api:"workflows",method:"postEntitiesExecuteV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}async postEntitiesExecutionActionsV1(e,s){const i={type:"api",api:"workflows",method:"postEntitiesExecutionActionsV1",payload:{body:e,params:s}};return this.bridge.postMessage(i)}}class he{constructor(e){rt(this,"api");this.api=e}get alerts(){return Kt(this.api),new C2(this.api.bridge)}get detects(){return Kt(this.api),new I2(this.api.bridge)}get devices(){return Kt(this.api),new L2(this.api.bridge)}get fwmgr(){return Kt(this.api),new R2(this.api.bridge)}get incidents(){return Kt(this.api),new M2(this.api.bridge)}get mitre(){return Kt(this.api),new D2(this.api.bridge)}get plugins(){return Kt(this.api),new z2(this.api.bridge)}get remoteResponse(){return Kt(this.api),new N2(this.api.bridge)}get userManagement(){return Kt(this.api),new F2(this.api.bridge)}get workflows(){return Kt(this.api),new B2(this.api.bridge)}get cloudSecurityAssets(){return Kt(this.api),new S2(this.api.bridge)}get cloudregistration(){return Kt(this.api),new E2(this.api.bridge)}get containerSecurity(){return Kt(this.api),new A2(this.api.bridge)}get cspmRegistration(){return Kt(this.api),new $2(this.api.bridge)}get customobjects(){return Kt(this.api),new T2(this.api.bridge)}get faasGateway(){return Kt(this.api),new O2(this.api.bridge)}get loggingapi(){return Kt(this.api),new P2(this.api.bridge)}get registryAssessment(){return Kt(this.api),new V2(this.api.bridge)}}oe([ne()],he.prototype,"alerts",null);oe([ne()],he.prototype,"detects",null);oe([ne()],he.prototype,"devices",null);oe([ne()],he.prototype,"fwmgr",null);oe([ne()],he.prototype,"incidents",null);oe([ne()],he.prototype,"mitre",null);oe([ne()],he.prototype,"plugins",null);oe([ne()],he.prototype,"remoteResponse",null);oe([ne()],he.prototype,"userManagement",null);oe([ne()],he.prototype,"workflows",null);oe([ne()],he.prototype,"cloudSecurityAssets",null);oe([ne()],he.prototype,"cloudregistration",null);oe([ne()],he.prototype,"containerSecurity",null);oe([ne()],he.prototype,"cspmRegistration",null);oe([ne()],he.prototype,"customobjects",null);oe([ne()],he.prototype,"faasGateway",null);oe([ne()],he.prototype,"loggingapi",null);oe([ne()],he.prototype,"registryAssessment",null);class U2{constructor(e,s){rt(this,"falcon");rt(this,"definition");this.falcon=e,this.definition=s}async execute({request:e}={}){return this.falcon.api.plugins.postEntitiesExecuteV1({resources:[{definition_id:this.definition.definitionId,operation_id:this.definition.operationId,request:e}]})}}const as=class as{constructor(e,s){rt(this,"falcon");rt(this,"definition");rt(this,"pollTimeout",500);rt(this,"intervalId");this.falcon=e,this.definition=s}async execute({path:e,method:s,body:i,params:r}){const o="id"in this.definition?{function_id:this.definition.id,function_version:this.definition.version}:{function_name:this.definition.name,function_version:this.definition.version},n=await this.falcon.api.faasGateway.postEntitiesExecutionV1({...o,payload:{path:e,method:s,body:i,params:r}});return new Promise((a,l)=>{const d=n?.resources?.[0];d?.execution_id?this.pollForResult({resolve:a,reject:l,executionId:d?.execution_id}):l(n?.errors)})}async getExecutionResult(e){return(await this.falcon.api.faasGateway.getEntitiesExecutionV1({id:e}))?.resources?.[0]?.payload}pollForResult({resolve:e,reject:s,executionId:i}){let r=2;this.intervalId=window.setInterval(async()=>{try{const o=await this.getExecutionResult(i);o&&(window.clearInterval(this.intervalId),e(o))}catch(o){r<=0&&(window.clearInterval(this.intervalId),s(o)),r--}},this.pollTimeout)}path(e){const s=new URL(e,"http://localhost"),i=s.pathname,r=[...s.searchParams.entries()].reduce((o,[n,a])=>({...o,[n]:[a]}),{});return{path:i,queryParams:r,get:async(o={})=>this.get({path:i,params:{query:o?.query??r??{},header:o?.header??{}}}),post:async(o,n={})=>this.post({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),patch:async(o,n={})=>this.patch({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),put:async(o,n={})=>this.put({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o}),delete:async(o,n={})=>this.delete({path:i,params:{query:n?.query??r??{},header:n?.header??{}},body:o})}}async get({path:e,params:s}){return this.execute({path:e,method:as.GET,params:s})}async post({path:e,params:s,body:i}){return this.execute({path:e,method:as.POST,body:i,params:s})}async patch({path:e,params:s,body:i}){return this.execute({path:e,method:as.PATCH,body:i,params:s})}async put({path:e,params:s,body:i}){return this.execute({path:e,method:as.PUT,body:i,params:s})}async delete({path:e,params:s,body:i}){return this.execute({path:e,method:as.DELETE,body:i,params:s})}destroy(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=void 0)}};rt(as,"GET","GET"),rt(as,"POST","POST"),rt(as,"PATCH","PATCH"),rt(as,"PUT","PUT"),rt(as,"DELETE","DELETE");let ml=as;class H2{constructor(e,s){rt(this,"falcon");rt(this,"definition");this.falcon=e,this.definition=s}async write(e,s){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"write",key:e,collection:this.definition.collection,data:s}})}async read(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"read",key:e,collection:this.definition.collection}})}async delete(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"delete",key:e,collection:this.definition.collection}})}async search({filter:e,offset:s,sort:i,limit:r}){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"search",filter:e,limit:r,offset:s,sort:i,collection:this.definition.collection}})}async list(e){return this.falcon.bridge.postMessage({type:"collection",payload:{type:"list",collection:this.definition.collection,start:e?.start,end:e?.end,limit:e?.limit}})}}class j2{constructor(e){rt(this,"falcon");this.falcon=e}async write(e,s){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"ingest",data:e,tag:s?.tag,tagSource:s?.tagSource,testData:s?.testData}})}async query(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"dynamic-execute",data:e}})}async savedQuery(e){return this.falcon.bridge.postMessage({type:"loggingapi",payload:{type:"saved-query-execute",data:e}})}}const W2=["_self","_blank"];class K2{constructor(e){rt(this,"falcon");this.falcon=e}async navigateTo({path:e,type:s,target:i,metaKey:r,ctrlKey:o,shiftKey:n}){await this.falcon.bridge.postMessage({type:"navigateTo",payload:{path:e,type:s??"falcon",target:i??"_self",metaKey:r??!1,ctrlKey:o??!1,shiftKey:n??!1}})}async onClick(e,s="_self",i="falcon"){if(!(e instanceof Event))throw Error('"event" property should be subclass of Event');if(!("preventDefault"in e)||!(e.target instanceof HTMLAnchorElement))return;e.preventDefault();const r=e.target.getAttribute("href");s=e.target.getAttribute("target")??s;const o=e.target.dataset?.type??i;if(s===null||!W2.includes(s))throw new Error("Target should be _self or _blank");const n=s;if(r==null)throw new Error("Navigation path is missing. Make sure you have added navigation.onClick on the `a` tag and `href` is present.");const{metaKey:a,ctrlKey:l,shiftKey:d}=e;await this.navigateTo({path:r,type:o,target:n,metaKey:a,ctrlKey:l,shiftKey:d})}}class q2{constructor(e){rt(this,"bridge");rt(this,"observer");this.bridge=e,this.observer=new ResizeObserver(s=>this.handleResizeEvent(s)),this.observer.observe(document.body)}handleResizeEvent(e){const{height:s}=e[0].contentRect;this.bridge.sendUnidirectionalMessage({type:"resize",payload:{height:s}})}destroy(){this.observer.disconnect()}}class G2{constructor(e){rt(this,"bridge");this.bridge=e}async openModal(e,s,i={}){const r=await this.bridge.postMessage({type:"openModal",payload:{extension:e,title:s,options:i}});if(r instanceof Error)throw r;return r}closeModal(e){this.bridge.sendUnidirectionalMessage({type:"closeModal",payload:e})}async uploadFile(e,s){return this.bridge.postMessage({type:"fileUpload",fileUploadType:e,payload:s})}}class hc{constructor(){rt(this,"isConnected",!1);rt(this,"events",new Wi);rt(this,"data");rt(this,"bridge",new x2({onDataUpdate:e=>this.handleDataUpdate(e),onBroadcast:e=>this.handleBroadcastMessage(e),onLivereload:()=>this.handleLivereloadMessage()}));rt(this,"api",new he(this));rt(this,"ui",new G2(this.bridge));rt(this,"resizeTracker");rt(this,"cloudFunctions",[]);rt(this,"apiIntegrations",[]);rt(this,"collections",[])}async connect(){const e=await this.bridge.postMessage({type:"connect"});if(e!==void 0){const{data:s,origin:i}=e;this.bridge.setOrigin(i),this.data=s,this.updateTheme(s?.theme),this.isConnected=!0}return this.resizeTracker=new q2(this.bridge),e}get appId(){return this.data?.app.id}sendBroadcast(e){this.bridge.sendUnidirectionalMessage({type:"broadcast",payload:e})}handleDataUpdate(e){this.data=e.payload,this.updateTheme(this.data.theme),this.events.emit("data",this.data)}handleBroadcastMessage(e){this.events.emit("broadcast",e.payload)}handleLivereloadMessage(){document.location.reload()}updateTheme(e){if(!e)return;const s=e==="theme-dark"?"theme-light":"theme-dark";document.documentElement.classList.add(e),document.documentElement.classList.remove(s)}cloudFunction(e){Kt(this);const s=new ml(this,e);return this.cloudFunctions.push(s),s}apiIntegration({definitionId:e,operationId:s}){if(Kt(this),!this.data)throw Error("Data from console is missing");const i=new U2(this,{operationId:s,definitionId:e});return this.apiIntegrations.push(i),i}collection({collection:e}){Kt(this);const s=new H2(this,{collection:e});return this.collections.push(s),s}get navigation(){return Kt(this),new K2(this)}get logscale(){return Kt(this),new j2(this)}destroy(){this.cloudFunctions.forEach(e=>e.destroy()),this.resizeTracker?.destroy(),this.bridge.destroy()}}oe([ne()],hc.prototype,"navigation",null);oe([ne()],hc.prototype,"logscale",null);const Y2={};class X2{constructor(){this.falcon=void 0}install(e){this.falcon=new hc,e.provide(we.FALCON_API,this.falcon),e.provide(we.FALCON_API_GET_ORIGINS,()=>this.getOrigin()),e.provide(we.FALCON_API_GET_APP_ID,()=>this.getAppId())}async connect(){try{await this.falcon?.connect()}catch(e){console.error(e)}}getOrigin(){const{targetOrigin:e}=this.falcon?.bridge;return e||self.location.origin}getAppId(){return this.falcon?.data?.app?.id??Y2.app_id}get data(){return{cid:String(this.falcon?.data?.cid??""),dateFormat:"MMM. D, YYYY",locale:"en-us",theme:"theme-dark",timezone:"UTC",...this.falcon?.data}}}function J2(){return new X2}const Ln=typeof window<"u",Ci=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Q2=(t,e,s)=>Z2({l:t,k:e,s}),Z2=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),re=t=>typeof t=="number"&&isFinite(t),Up=t=>fc(t)==="[object Date]",On=t=>fc(t)==="[object RegExp]",pc=t=>jt(t)&&Object.keys(t).length===0,ce=Object.assign,tk=Object.create,Mt=(t=null)=>tk(t);let tu;const aa=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Mt()),ek=Object.prototype.hasOwnProperty;function ls(t,e){return ek.call(t,e)}function ve(t,e){const s=t[e];return ls(t,e)?s:void 0}function Hp(t){return ls(Object.prototype,t)}const Ut=Array.isArray,Gt=t=>typeof t=="function",J=t=>typeof t=="string",Yt=t=>typeof t=="boolean",kt=t=>t!==null&&typeof t=="object",sk=t=>kt(t)&&Gt(t.then)&&Gt(t.catch),jp=Object.prototype.toString,fc=t=>jp.call(t),jt=t=>fc(t)==="[object Object]",ik=t=>t==null?"":Ut(t)||jt(t)&&t.toString===jp?JSON.stringify(t,null,2):String(t);function gc(t,e=""){return t.reduce((s,i,r)=>r===0?s+i:s+e+i,"")}function rk(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function eu(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function ok(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const nk=/^javascript:/i,ak=/^(?:href|src|action|formaction)$/i,lk=/&#(?:x([0-9a-f]+)|(\d+));?/gi,ck=/&(?:Tab|NewLine);/g,dk=/&colon;?/gi,uk=/[\u0000-\u0020\u007f-\u009f]/g,hk=/(?:^|[\s"'<>/])on\w+\s*=\s*["']?[^"'>]+["']?/i,pk=/(^|[\s"'<>/])on(\w+\s*=)/gi,fk=/(?:^|[\s"'<>/])srcdoc\s*=/i,gk=/(^|[\s"'<>/])s(rcdoc\s*=)/gi,mk=/(^|[\s"'<>/])((?:href|src|action|formaction)\s*=\s*)([^\s"'=<>`]+)/gi;function bk(t,e,s){const i=e||s;if(!i)return t;const r=Number.parseInt(i,e?16:10);return r<=127?String.fromCharCode(r):t}function mc(t){const e=t.replace(lk,bk).replace(ck,"").replace(dk,":").replace(uk,"");return nk.test(e)}function yk(t){const e=/url\s*\(/gi;let s="",i=0,r;for(;(r=e.exec(t))!==null;){const o=r.index,n=e.lastIndex-1;let a=n+1,l=1,d=null;for(;a<t.length;a++){const p=t[a];if(d){p===d&&(d=null);continue}if(p==='"'||p==="'")d=p;else if(p==="(")l++;else if(p===")"&&(l--,l===0))break}if(l!==0)break;const h=t.slice(n+1,a).trim(),u=h.startsWith('"')&&h.endsWith('"')||h.startsWith("'")&&h.endsWith("'")?h.slice(1,-1).trim():h;s+=t.slice(i,o),s+=mc(u)?"url(about:blank)":t.slice(o,a+1),i=a+1}return s+t.slice(i)}function su(t,e){if(ak.test(t)&&mc(e))return"about:blank";const s=t.toLowerCase()==="style"?yk(e):e;return ok(s)}function vk(t){return t=t.replace(/([\w:-]+)\s*=\s*"([^"]*)"/g,(e,s,i)=>`${s}="${su(s,i)}"`),t=t.replace(/([\w:-]+)\s*=\s*'([^']*)'/g,(e,s,i)=>`${s}='${su(s,i)}'`),hk.test(t)&&(t=t.replace(pk,"$1&#111;n$2")),fk.test(t)&&(t=t.replace(gk,"$1&#115;$2")),t=t.replace(mk,(e,s,i,r)=>mc(r)?`${s}${i}about:blank`:e),t}const iu=t=>!kt(t)||Ut(t);function nn(t,e){if(iu(t)||iu(e)||e===Object.prototype)throw new Error("Invalid value");const s=[{src:t,des:e}];for(;s.length;){const{src:i,des:r}=s.pop();Object.keys(i).forEach(o=>{if(o==="__proto__")return;const n=i[o];if(Ut(n)){const a=[];a.length=n.length,r[o]=a,s.push({src:n,des:a})}else kt(n)?((!kt(r[o])||Ut(r[o]))&&(r[o]=Mt()),s.push({src:n,des:r[o]})):r[o]=n})}}function _k(t,e,s){return{line:t,column:e,offset:s}}function bl(t,e,s){return{start:t,end:e}}const Tt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},wk=17;function la(t,e,s={}){const{domain:i,messages:r,args:o}=s,n=t,a=new SyntaxError(String(n));return a.code=t,e&&(a.location=e),a.domain=i,a}function xk(t){throw t}const $s=" ",kk="\r",Ae=`
`,Ck="\u2028",Sk="\u2029";function Ek(t){const e=t;let s=0,i=1,r=1,o=0;const n=T=>e[T]===kk&&e[T+1]===Ae,a=T=>e[T]===Ae,l=T=>e[T]===Sk,d=T=>e[T]===Ck,h=T=>n(T)||a(T)||l(T)||d(T),u=()=>s,p=()=>i,g=()=>r,v=()=>o,x=T=>n(T)||l(T)||d(T)?Ae:e[T],I=()=>x(s),k=()=>x(s+o);function _(){return o=0,h(s)&&(i++,r=0),n(s)&&s++,s++,r++,e[s]}function A(){return n(s+o)&&o++,o++,e[s+o]}function b(){s=0,i=1,r=1,o=0}function E(T=0){o=T}function O(){const T=s+o;for(;T!==s;)_();o=0}return{index:u,line:p,column:g,peekOffset:v,charAt:x,currentChar:I,currentPeek:k,next:_,peek:A,reset:b,resetPeek:E,skipToPeek:O}}const qs=void 0,Ak=".",ru="'",$k="tokenizer";function Tk(t,e={}){const s=e.location!==!1,i=Ek(t),r=()=>i.index(),o=()=>_k(i.line(),i.column(),i.index()),n=o(),a=r(),l={currentType:13,offset:a,startLoc:n,endLoc:n,lastType:13,lastOffset:a,lastStartLoc:n,lastEndLoc:n,braceNest:0,inLinked:!1,text:""},d=()=>l,{onError:h}=e;function u(m,y,S,...$){const q=d();if(y.column+=S,y.offset+=S,h){const U=s?bl(q.startLoc,y):null,Y=la(m,U,{domain:$k,args:$});h(Y)}}function p(m,y,S){m.endLoc=o(),m.currentType=y;const $={type:y};return s&&($.loc=bl(m.startLoc,m.endLoc)),S!=null&&($.value=S),$}const g=m=>p(m,13);function v(m,y){return m.currentChar()===y?(m.next(),y):(u(Tt.EXPECTED_TOKEN,o(),0,y),"")}function x(m){let y="";for(;m.currentPeek()===$s||m.currentPeek()===Ae;)y+=m.currentPeek(),m.peek();return y}function I(m){const y=x(m);return m.skipToPeek(),y}function k(m){if(m===qs)return!1;const y=m.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y===95}function _(m){if(m===qs)return!1;const y=m.charCodeAt(0);return y>=48&&y<=57}function A(m,y){const{currentType:S}=y;if(S!==2)return!1;x(m);const $=k(m.currentPeek());return m.resetPeek(),$}function b(m,y){const{currentType:S}=y;if(S!==2)return!1;x(m);const $=m.currentPeek()==="-"?m.peek():m.currentPeek(),q=_($);return m.resetPeek(),q}function E(m,y){const{currentType:S}=y;if(S!==2)return!1;x(m);const $=m.currentPeek()===ru;return m.resetPeek(),$}function O(m,y){const{currentType:S}=y;if(S!==7)return!1;x(m);const $=m.currentPeek()===".";return m.resetPeek(),$}function T(m,y){const{currentType:S}=y;if(S!==8)return!1;x(m);const $=k(m.currentPeek());return m.resetPeek(),$}function B(m,y){const{currentType:S}=y;if(!(S===7||S===11))return!1;x(m);const $=m.currentPeek()===":";return m.resetPeek(),$}function M(m,y){const{currentType:S}=y;if(S!==9)return!1;const $=()=>{const U=m.currentPeek();return U==="{"?k(m.peek()):U==="@"||U==="|"||U===":"||U==="."||U===$s||!U?!1:U===Ae?(m.peek(),$()):ot(m,!1)},q=$();return m.resetPeek(),q}function D(m){x(m);const y=m.currentPeek()==="|";return m.resetPeek(),y}function ot(m,y=!0){const S=(q=!1,U="")=>{const Y=m.currentPeek();return Y==="{"||Y==="@"||!Y?q:Y==="|"?!(U===$s||U===Ae):Y===$s?(m.peek(),S(!0,$s)):Y===Ae?(m.peek(),S(!0,Ae)):!0},$=S();return y&&m.resetPeek(),$}function tt(m,y){const S=m.currentChar();return S===qs?qs:y(S)?(m.next(),S):null}function bt(m){const y=m.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36}function wt(m){return tt(m,bt)}function St(m){const y=m.charCodeAt(0);return y>=97&&y<=122||y>=65&&y<=90||y>=48&&y<=57||y===95||y===36||y===45}function Z(m){return tt(m,St)}function G(m){const y=m.charCodeAt(0);return y>=48&&y<=57}function lt(m){return tt(m,G)}function et(m){const y=m.charCodeAt(0);return y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102}function $t(m){return tt(m,et)}function pe(m){let y="",S="";for(;y=lt(m);)S+=y;return S}function Ee(m){let y="";for(;;){const S=m.currentChar();if(S==="\\"){const $=m.peek();$==="{"||$==="}"||$==="@"||$==="|"||$==="\\"?(y+=S+$,m.next(),m.next()):(m.resetPeek(),y+=S,m.next())}else{if(S==="{"||S==="}"||S==="@"||S==="|"||!S)break;if(S===$s||S===Ae)if(ot(m))y+=S,m.next();else{if(D(m))break;y+=S,m.next()}else y+=S,m.next()}}return y}function Zi(m){I(m);let y="",S="";for(;y=Z(m);)S+=y;const $=m.currentChar();if($&&$!=="}"&&$!==qs&&$!==$s&&$!==Ae&&$!=="　"){const q=Ss(m);return u(Tt.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,S+q),S+q}return m.currentChar()===qs&&u(Tt.UNTERMINATED_CLOSING_BRACE,o(),0),S}function $r(m){I(m);let y="";return m.currentChar()==="-"?(m.next(),y+=`-${pe(m)}`):y+=pe(m),m.currentChar()===qs&&u(Tt.UNTERMINATED_CLOSING_BRACE,o(),0),y}function Tr(m){return m!==ru&&m!==Ae}function Ws(m){I(m),v(m,"'");let y="",S="";for(;y=tt(m,Tr);)y==="\\"?S+=Ai(m):S+=y;const $=m.currentChar();return $===Ae||$===qs?(u(Tt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,o(),0),$===Ae&&(m.next(),v(m,"'")),S):(v(m,"'"),S)}function Ai(m){const y=m.currentChar();switch(y){case"\\":case"'":return m.next(),`\\${y}`;case"u":return ci(m,y,4);case"U":return ci(m,y,6);default:return u(Tt.UNKNOWN_ESCAPE_SEQUENCE,o(),0,y),""}}function ci(m,y,S){v(m,y);let $="";for(let q=0;q<S;q++){const U=$t(m);if(!U){u(Tt.INVALID_UNICODE_ESCAPE_SEQUENCE,o(),0,`\\${y}${$}${m.currentChar()}`);break}$+=U}return`\\${y}${$}`}function tr(m){return m!=="{"&&m!=="}"&&m!==$s&&m!==Ae}function Ss(m){I(m);let y="",S="";for(;y=tt(m,tr);)S+=y;return S}function Po(m){let y="",S="";for(;y=wt(m);)S+=y;return S}function w(m){const y=S=>{const $=m.currentChar();return $==="{"||$==="@"||$==="|"||$==="("||$===")"||!$||$===$s?S:(S+=$,m.next(),y(S))};return y("")}function C(m){I(m);const y=v(m,"|");return I(m),y}function R(m,y){let S=null;switch(m.currentChar()){case"{":return y.braceNest>=1&&u(Tt.NOT_ALLOW_NEST_PLACEHOLDER,o(),0),m.next(),S=p(y,2,"{"),I(m),y.braceNest++,S;case"}":return y.braceNest>0&&y.currentType===2&&u(Tt.EMPTY_PLACEHOLDER,o(),0),m.next(),S=p(y,3,"}"),y.braceNest--,y.braceNest>0&&I(m),y.inLinked&&y.braceNest===0&&(y.inLinked=!1),S;case"@":return y.braceNest>0&&u(Tt.UNTERMINATED_CLOSING_BRACE,o(),0),S=F(m,y)||g(y),y.braceNest=0,S;default:{let q=!0,U=!0,Y=!0;if(D(m))return y.braceNest>0&&u(Tt.UNTERMINATED_CLOSING_BRACE,o(),0),S=p(y,1,C(m)),y.braceNest=0,y.inLinked=!1,S;if(y.braceNest>0&&(y.currentType===4||y.currentType===5||y.currentType===6))return u(Tt.UNTERMINATED_CLOSING_BRACE,o(),0),y.braceNest=0,z(m,y);if(q=A(m,y))return S=p(y,4,Zi(m)),I(m),S;if(U=b(m,y))return S=p(y,5,$r(m)),I(m),S;if(Y=E(m,y))return S=p(y,6,Ws(m)),I(m),S;if(!q&&!U&&!Y)return S=p(y,12,Ss(m)),u(Tt.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,S.value),I(m),S;break}}return S}function F(m,y){const{currentType:S}=y;let $=null;const q=m.currentChar();switch((S===7||S===8||S===11||S===9)&&(q===Ae||q===$s)&&u(Tt.INVALID_LINKED_FORMAT,o(),0),q){case"@":return m.next(),$=p(y,7,"@"),y.inLinked=!0,$;case".":return I(m),m.next(),p(y,8,".");case":":return I(m),m.next(),p(y,9,":");default:return D(m)?($=p(y,1,C(m)),y.braceNest=0,y.inLinked=!1,$):O(m,y)||B(m,y)?(I(m),F(m,y)):T(m,y)?(I(m),p(y,11,Po(m))):M(m,y)?(I(m),q==="{"?R(m,y)||$:p(y,10,w(m))):(S===7&&u(Tt.INVALID_LINKED_FORMAT,o(),0),y.braceNest=0,y.inLinked=!1,z(m,y))}}function z(m,y){let S={type:13};if(y.braceNest>0)return R(m,y)||g(y);if(y.inLinked)return F(m,y)||g(y);switch(m.currentChar()){case"{":return R(m,y)||g(y);case"}":return u(Tt.UNBALANCED_CLOSING_BRACE,o(),0),m.next(),p(y,3,"}");case"@":return F(m,y)||g(y);default:{if(D(m))return S=p(y,1,C(m)),y.braceNest=0,y.inLinked=!1,S;if(ot(m))return p(y,0,Ee(m));break}}return S}function V(){const{currentType:m,offset:y,startLoc:S,endLoc:$}=l;return l.lastType=m,l.lastOffset=y,l.lastStartLoc=S,l.lastEndLoc=$,l.offset=r(),l.startLoc=o(),i.currentChar()===qs?p(l,13):z(i,l)}return{nextToken:V,currentOffset:r,currentPosition:o,context:d}}const Ik="parser",Lk=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,Ok=/\\([\\@{}|])/g;function Rk(t,e){return e}function Mk(t,e,s){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||s,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Pk(t={}){const e=t.location!==!1,{onError:s}=t;function i(k,_,A,b,...E){const O=k.currentPosition();if(O.offset+=b,O.column+=b,s){const T=e?bl(A,O):null,B=la(_,T,{domain:Ik,args:E});s(B)}}function r(k,_,A){const b={type:k};return e&&(b.start=_,b.end=_,b.loc={start:A,end:A}),b}function o(k,_,A,b){e&&(k.end=_,k.loc&&(k.loc.end=A))}function n(k,_){const A=k.context(),b=r(3,A.offset,A.startLoc);return b.value=_.replace(Ok,Rk),o(b,k.currentOffset(),k.currentPosition()),b}function a(k,_){const A=k.context(),{lastOffset:b,lastStartLoc:E}=A,O=r(5,b,E);return O.index=parseInt(_,10),k.nextToken(),o(O,k.currentOffset(),k.currentPosition()),O}function l(k,_){const A=k.context(),{lastOffset:b,lastStartLoc:E}=A,O=r(4,b,E);return O.key=_,k.nextToken(),o(O,k.currentOffset(),k.currentPosition()),O}function d(k,_){const A=k.context(),{lastOffset:b,lastStartLoc:E}=A,O=r(9,b,E);return O.value=_.replace(Lk,Mk),k.nextToken(),o(O,k.currentOffset(),k.currentPosition()),O}function h(k){const _=k.nextToken(),A=k.context(),{lastOffset:b,lastStartLoc:E}=A,O=r(8,b,E);return _.type!==11?(i(k,Tt.UNEXPECTED_EMPTY_LINKED_MODIFIER,A.lastStartLoc,0),O.value="",o(O,b,E),{nextConsumeToken:_,node:O}):(_.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Ts(_)),O.value=_.value||"",o(O,k.currentOffset(),k.currentPosition()),{node:O})}function u(k,_){const A=k.context(),b=r(7,A.offset,A.startLoc);return b.value=_,o(b,k.currentOffset(),k.currentPosition()),b}function p(k){const _=k.context(),A=r(6,_.offset,_.startLoc);let b=k.nextToken();if(b.type===8){const E=h(k);A.modifier=E.node,b=E.nextConsumeToken||k.nextToken()}switch(b.type!==9&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(b)),b=k.nextToken(),b.type===2&&(b=k.nextToken()),b.type){case 10:b.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(b)),A.key=u(k,b.value||"");break;case 4:b.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(b)),A.key=l(k,b.value||"");break;case 5:b.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(b)),A.key=a(k,b.value||"");break;case 6:b.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(b)),A.key=d(k,b.value||"");break;default:{i(k,Tt.UNEXPECTED_EMPTY_LINKED_KEY,_.lastStartLoc,0);const E=k.context(),O=r(7,E.offset,E.startLoc);return O.value="",o(O,E.offset,E.startLoc),A.key=O,o(A,E.offset,E.startLoc),{nextConsumeToken:b,node:A}}}return o(A,k.currentOffset(),k.currentPosition()),{node:A}}function g(k){const _=k.context(),A=_.currentType===1?k.currentOffset():_.offset,b=_.currentType===1?_.endLoc:_.startLoc,E=r(2,A,b);E.items=[];let O=null;do{const M=O||k.nextToken();switch(O=null,M.type){case 0:M.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(M)),E.items.push(n(k,M.value||""));break;case 5:M.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(M)),E.items.push(a(k,M.value||""));break;case 4:M.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(M)),E.items.push(l(k,M.value||""));break;case 6:M.value==null&&i(k,Tt.UNEXPECTED_LEXICAL_ANALYSIS,_.lastStartLoc,0,Ts(M)),E.items.push(d(k,M.value||""));break;case 7:{const D=p(k);E.items.push(D.node),O=D.nextConsumeToken||null;break}}}while(_.currentType!==13&&_.currentType!==1);const T=_.currentType===1?_.lastOffset:k.currentOffset(),B=_.currentType===1?_.lastEndLoc:k.currentPosition();return o(E,T,B),E}function v(k,_,A,b){const E=k.context();let O=b.items.length===0;const T=r(1,_,A);T.cases=[],T.cases.push(b);do{const B=g(k);O||(O=B.items.length===0),T.cases.push(B)}while(E.currentType!==13);return O&&i(k,Tt.MUST_HAVE_MESSAGES_IN_PLURAL,A,0),o(T,k.currentOffset(),k.currentPosition()),T}function x(k){const _=k.context(),{offset:A,startLoc:b}=_,E=g(k);return _.currentType===13?E:v(k,A,b,E)}function I(k){const _=Tk(k,ce({},t)),A=_.context(),b=r(0,A.offset,A.startLoc);return e&&b.loc&&(b.loc.source=k),b.body=x(_),t.onCacheKey&&(b.cacheKey=t.onCacheKey(k)),A.currentType!==13&&i(_,Tt.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,k[A.offset]||""),o(b,_.currentOffset(),_.currentPosition()),b}return{parse:I}}function Ts(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Dk(t,e={}){const s={ast:t,helpers:new Set};return{context:()=>s,helper:o=>(s.helpers.add(o),o)}}function ou(t,e){for(let s=0;s<t.length;s++)bc(t[s],e)}function bc(t,e){switch(t.type){case 1:ou(t.cases,e),e.helper("plural");break;case 2:ou(t.items,e);break;case 6:{bc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function zk(t,e={}){const s=Dk(t);s.helper("normalize"),t.body&&bc(t.body,s);const i=s.context();t.helpers=Array.from(i.helpers)}function Vk(t){const e=t.body;return e.type===2?nu(e):e.cases.forEach(s=>nu(s)),t}function nu(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let s=0;s<t.items.length;s++){const i=t.items[s];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=gc(e);for(let s=0;s<t.items.length;s++){const i=t.items[s];(i.type===3||i.type===9)&&delete i.value}}}}function lr(t){switch(t.t=t.type,t.type){case 0:{const e=t;lr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,s=e.cases;for(let i=0;i<s.length;i++)lr(s[i]);e.c=s,delete e.cases;break}case 2:{const e=t,s=e.items;for(let i=0;i<s.length;i++)lr(s[i]);e.i=s,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;lr(e.key),e.k=e.key,delete e.key,e.modifier&&(lr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Nk(t,e){const{filename:s,breakLineCode:i,needIndent:r}=e,o=e.location!==!1,n={filename:s,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};o&&t.loc&&(n.source=t.loc.source);const a=()=>n;function l(x,I){n.code+=x}function d(x,I=!0){const k=I?i:"";l(r?k+"  ".repeat(x):k)}function h(x=!0){const I=++n.indentLevel;x&&d(I)}function u(x=!0){const I=--n.indentLevel;x&&d(I)}function p(){d(n.indentLevel)}return{context:a,push:l,indent:h,deindent:u,newline:p,helper:x=>`_${x}`,needIndent:()=>n.needIndent}}function Fk(t,e){const{helper:s}=t;t.push(`${s("linked")}(`),_r(t,e.key),e.modifier?(t.push(", "),_r(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Bk(t,e){const{helper:s,needIndent:i}=t;t.push(`${s("normalize")}([`),t.indent(i());const r=e.items.length;for(let o=0;o<r&&(_r(t,e.items[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}function Uk(t,e){const{helper:s,needIndent:i}=t;if(e.cases.length>1){t.push(`${s("plural")}([`),t.indent(i());const r=e.cases.length;for(let o=0;o<r&&(_r(t,e.cases[o]),o!==r-1);o++)t.push(", ");t.deindent(i()),t.push("])")}}function Hk(t,e){e.body?_r(t,e.body):t.push("null")}function _r(t,e){const{helper:s}=t;switch(e.type){case 0:Hk(t,e);break;case 1:Uk(t,e);break;case 2:Bk(t,e);break;case 6:Fk(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${s("interpolate")}(${s("list")}(${e.index}))`,e);break;case 4:t.push(`${s("interpolate")}(${s("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const jk=(t,e={})=>{const s=J(e.mode)?e.mode:"normal",i=J(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:s==="arrow"?";":`
`,o=e.needIndent?e.needIndent:s!=="arrow",n=t.helpers||[],a=Nk(t,{filename:i,breakLineCode:r,needIndent:o});a.push(s==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(o),n.length>0&&(a.push(`const { ${gc(n.map(h=>`${h}: _${h}`),", ")} } = ctx`),a.newline()),a.push("return "),_r(a,t),a.deindent(o),a.push("}"),delete t.helpers;const{code:l,map:d}=a.context();return{ast:t,code:l,map:d?d.toJSON():void 0}};function Wk(t,e={}){const s=ce({},e),i=!!s.jit,r=!!s.minify,o=s.optimize==null?!0:s.optimize,a=Pk(s).parse(t);return i?(o&&Vk(a),r&&lr(a),{ast:a,code:""}):(zk(a,s),jk(a,s))}function Kk(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(aa().__INTLIFY_PROD_DEVTOOLS__=!1)}function Ki(t){return kt(t)&&yc(t)===0&&(ls(t,"b")||ls(t,"body"))}const Wp=["b","body"];function qk(t){return Si(t,Wp)}const Kp=["c","cases"];function Gk(t){return Si(t,Kp,[])}const qp=["s","static"];function Yk(t){return Si(t,qp)}const Gp=["i","items"];function Xk(t){return Si(t,Gp,[])}const Yp=["t","type"];function yc(t){return Si(t,Yp)}const Xp=["v","value"];function Jo(t,e){const s=Si(t,Xp);if(s!=null)return s;throw go(e)}const Jp=["m","modifier"];function Jk(t){return Si(t,Jp)}const Qp=["k","key"];function Qk(t){const e=Si(t,Qp);if(e)return e;throw go(6)}function Si(t,e,s){for(let i=0;i<e.length;i++){const r=e[i];if(ls(t,r)&&t[r]!=null)return t[r]}return s}const Zp=[...Wp,...Kp,...qp,...Gp,...Qp,...Jp,...Xp,...Yp];function go(t){return new Error(`unhandled node type: ${t}`)}function Na(t){return s=>Zk(s,t)}function Zk(t,e){const s=qk(e);if(s==null)throw go(0);if(yc(s)===1){const o=Gk(s);return t.plural(o.reduce((n,a)=>[...n,au(t,a)],[]))}else return au(t,s)}function au(t,e){const s=Yk(e);if(s!=null)return t.type==="text"?s:t.normalize([s]);{const i=Xk(e).reduce((r,o)=>[...r,yl(t,o)],[]);return t.normalize(i)}}function yl(t,e){const s=yc(e);switch(s){case 3:return Jo(e,s);case 9:return Jo(e,s);case 4:{const i=e;if(ls(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(ls(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw go(s)}case 5:{const i=e;if(ls(i,"i")&&re(i.i))return t.interpolate(t.list(i.i));if(ls(i,"index")&&re(i.index))return t.interpolate(t.list(i.index));throw go(s)}case 6:{const i=e,r=Jk(i),o=Qk(i);return t.linked(yl(t,o),r?yl(t,r):void 0,t.type)}case 7:return Jo(e,s);case 8:return Jo(e,s);default:throw new Error(`unhandled node on format message part: ${s}`)}}const tC=t=>t;let Qo=Mt();function eC(t,e={}){let s=!1;const i=e.onError||xk;return e.onError=r=>{s=!0,i(r)},{...Wk(t,e),detectError:s}}function sC(t,e){if(J(t)){Yt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||tC)(t),r=Qo[i];if(r)return r;const{ast:o,detectError:n}=eC(t,{...e,location:!1,jit:!0}),a=Na(o);return n?a:Qo[i]=a}else{if(!Ki(t))return(()=>t);const s=t.cacheKey;if(s){const i=Qo[s];return i||(Qo[s]=Na(t))}else return Na(t)}}let mo=null;function iC(t){mo=t}function rC(t,e,s){mo&&mo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:s})}const oC=nC("function:translate");function nC(t){return e=>mo&&mo.emit(t,e)}const Zs={INVALID_ARGUMENT:wk,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},aC=24;function ti(t){return la(t,null,void 0)}function vc(t,e){return e.locale!=null?lu(e.locale):lu(t.locale)}let Fa;function lu(t){if(J(t))return t;if(Gt(t)){if(t.resolvedOnce&&Fa!=null)return Fa;if(t.constructor.name==="Function"){const e=t();if(sk(e))throw ti(Zs.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Fa=e}else throw ti(Zs.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw ti(Zs.NOT_SUPPORT_LOCALE_TYPE)}function lC(t,e,s){return[...new Set([s,...Ut(e)?e:kt(e)?Object.keys(e).filter(i=>i!=="default"):J(e)?[e]:[s]])]}function cC(t,e,s){const i=J(s)?s:Rn,r=t;let o;kt(e)?(r.__localeChainObjectCache||(r.__localeChainObjectCache=new WeakMap),o=r.__localeChainObjectCache.get(e),o||(o=new Map,r.__localeChainObjectCache.set(e,o))):(r.__localeChainCache||(r.__localeChainCache=new Map),o=r.__localeChainCache.get(e),o||(o=new Map,r.__localeChainCache.set(e,o)));const n=o.get(i);if(n)return n;const a=[];let l=[s];for(;Ut(l);)l=cu(a,l,e);const d=Ut(e)||!jt(e)?e:e.default?e.default:null;return l=J(d)?[d]:d,Ut(l)&&cu(a,l,!1),o.set(i,a),a}function cu(t,e,s){let i=!0;for(let r=0;r<e.length&&Yt(i);r++){const o=e[r];J(o)&&(i=dC(t,e[r],s))}return i}function dC(t,e,s){let i;const r=e.split("-");do{const o=r.join("-");i=uC(t,o,s),r.splice(-1,1)}while(r.length&&i===!0);return i}function uC(t,e,s){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Ut(s)||jt(s))&&s[r]&&(i=s[r])}return i}const Ei=[];Ei[0]={w:[0],i:[3,0],"[":[4],o:[7]};Ei[1]={w:[1],".":[2],"[":[4],o:[7]};Ei[2]={w:[2],i:[3,0],0:[3,0]};Ei[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Ei[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Ei[5]={"'":[4,0],o:8,l:[5,0]};Ei[6]={'"':[4,0],o:8,l:[6,0]};const hC=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function pC(t){return hC.test(t)}function fC(t){const e=t.charCodeAt(0),s=t.charCodeAt(t.length-1);return e===s&&(e===34||e===39)?t.slice(1,-1):t}function gC(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function mC(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:pC(e)?fC(e):"*"+e}function bC(t){const e=[];let s=-1,i=0,r=0,o,n,a,l,d,h,u;const p=[];p[0]=()=>{n===void 0?n=a:n+=a},p[1]=()=>{n!==void 0&&(e.push(n),n=void 0)},p[2]=()=>{p[0](),r++},p[3]=()=>{if(r>0)r--,i=4,p[0]();else{if(r=0,n===void 0||(n=mC(n),n===!1))return!1;p[1]()}};function g(){const v=t[s+1];if(i===5&&v==="'"||i===6&&v==='"')return s++,a="\\"+v,p[0](),!0}for(;i!==null;)if(s++,o=t[s],!(o==="\\"&&g())){if(l=gC(o),u=Ei[i],d=u[l]||u.l||8,d===8||(i=d[0],d[1]!==void 0&&(h=p[d[1]],h&&(a=o,h()===!1))))return;if(i===7)return e}}const du=new Map;function yC(t,e){return kt(t)?ve(t,e):null}function vC(t,e){if(!kt(t))return null;let s=du.get(e);if(s||(s=bC(e),s&&du.set(e,s)),!s)return null;const i=s.length;let r=t,o=0;for(;o<i;){const n=s[o];if(Zp.includes(n)&&Ki(r)||!kt(r)||!ls(r,n))return null;const a=r[n];if(a===void 0||Gt(r))return null;r=a,o++}return r}const _C="11.4.16",ca=-1,Rn="en-US",Mn="",uu=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function wC(){return{upper:(t,e)=>e==="text"&&J(t)?t.toUpperCase():e==="vnode"&&kt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&J(t)?t.toLowerCase():e==="vnode"&&kt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&J(t)?uu(t):e==="vnode"&&kt(t)&&"__v_isVNode"in t?uu(t.children):t}}let tf;function xC(t){tf=t}let ef;function kC(t){ef=t}let sf;function CC(t){sf=t}let rf=null;const SC=t=>{rf=t},EC=()=>rf;let of=null;const hu=t=>{of=t},AC=()=>of;let pu=0;function $C(t={}){const e=Gt(t.onWarn)?t.onWarn:rk,s=J(t.version)?t.version:_C,i=J(t.locale)||Gt(t.locale)?t.locale:Rn,r=Gt(i)?Rn:i,o=Ut(t.fallbackLocale)||jt(t.fallbackLocale)||J(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,n=jt(t.messages)?t.messages:Ba(r),a=jt(t.datetimeFormats)?t.datetimeFormats:Ba(r),l=jt(t.numberFormats)?t.numberFormats:Ba(r),d=ce(Mt(),t.modifiers,wC()),h=t.pluralRules||Mt(),u=Gt(t.missing)?t.missing:null,p=Yt(t.missingWarn)||On(t.missingWarn)?t.missingWarn:!0,g=Yt(t.fallbackWarn)||On(t.fallbackWarn)?t.fallbackWarn:!0,v=!!t.fallbackFormat,x=!!t.unresolving,I=Gt(t.postTranslation)?t.postTranslation:null,k=jt(t.processor)?t.processor:null,_=Yt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,A=!!t.escapeParameter,b=Gt(t.messageCompiler)?t.messageCompiler:tf,E=Gt(t.messageResolver)?t.messageResolver:ef||yC,O=Gt(t.localeFallbacker)?t.localeFallbacker:sf||lC,T=kt(t.fallbackContext)?t.fallbackContext:void 0,B=t,M=kt(B.__datetimeFormatters)?B.__datetimeFormatters:new Map,D=kt(B.__numberFormatters)?B.__numberFormatters:new Map,ot=kt(B.__meta)?B.__meta:{};pu++;const tt={version:s,cid:pu,locale:i,fallbackLocale:o,messages:n,modifiers:d,pluralRules:h,missing:u,missingWarn:p,fallbackWarn:g,fallbackFormat:v,unresolving:x,postTranslation:I,processor:k,warnHtmlMessage:_,escapeParameter:A,messageCompiler:b,messageResolver:E,localeFallbacker:O,fallbackContext:T,onWarn:e,__meta:ot};return tt.datetimeFormats=a,tt.numberFormats=l,tt.__datetimeFormatters=M,tt.__numberFormatters=D,__INTLIFY_PROD_DEVTOOLS__&&rC(tt,s,ot),tt}const Ba=t=>({[t]:Mt()});function nf(t,e,s,i,r){const{missing:o,onWarn:n}=t;if(o!==null){const a=o(t,s,e,r);return J(a)?a:e}else return e}function fu(t,e){const s=t;kt(e)?s.__localeChainObjectCache?.delete(e):s.__localeChainCache?.delete(e)}function Zo(t,e,s){fu(t,s),t.fallbackContext&&fu(t.fallbackContext,s),t.localeFallbacker(t,s,e)}function TC(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function IC(t,e){const s=e.indexOf(t);if(s===-1)return!1;for(let i=s+1;i<e.length;i++)if(TC(t,e[i]))return!0;return!1}function af(t,e,s,i,r,o,n){const{fallbackLocale:a,localeFallbacker:l,onWarn:d}=t,h=l(t,a,s);for(let u=0;u<h.length;u++){const p=h[u],g=ve(ve(i,p)||{},e);if(jt(g)&&J(p))return p;nf(t,e,p,r,n)}return null}function lf(t,e,s){let i=`${t}__${e}`;return jt(s)&&!pc(s)&&(i=`${i}__${JSON.stringify(s)}`),i}function cf(t,e,s){for(const i in s){const r=`${e}__${i}`;for(const o of t.keys())(o===r||o.startsWith(`${r}__`))&&t.delete(o)}}function df(t,e,s,i){const[,r,o,n]=t;let a=s;return J(r)?e.key=r:jt(r)&&Object.keys(r).forEach(l=>{i.includes(l)?a[l]=r[l]:e[l]=r[l]}),J(o)?e.locale=o:jt(o)&&(a=o),jt(n)&&(a=n),a}function gu(t,...e){const{datetimeFormats:s,unresolving:i,onWarn:r}=t,{__datetimeFormatters:o}=t;if(!J(e[0])&&!Up(e[0])&&!re(e[0]))return Mn;const[n,a,l,d]=vl(...e),h=Yt(l.missingWarn)?l.missingWarn:t.missingWarn,u=Yt(l.fallbackWarn)?l.fallbackWarn:t.fallbackWarn,p=!!l.part,g=vc(t,l);if(!J(n)||n===""){const _=new Intl.DateTimeFormat(g.replace(/!/g,""),d);return p?_.formatToParts(a):_.format(a)}const v=af(t,n,g,s,h,u,"datetime format");if(!J(v))return i?ca:n;const x=s[v][n],I=lf(v,n,d);let k=o.get(I);return k||(k=new Intl.DateTimeFormat(v,ce({},x,d)),o.set(I,k)),p?k.formatToParts(a):k.format(a)}const uf=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function vl(...t){const[e]=t,s=Mt(),i=Mt();let r;if(J(e)){const n=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!n)throw ti(Zs.INVALID_ISO_DATE_ARGUMENT);const a=n[3]?n[3].trim().startsWith("T")?`${n[1].trim()}${n[3].trim()}`:`${n[1].trim()}T${n[3].trim()}`:n[1].trim();r=new Date(a);try{r.toISOString()}catch{throw ti(Zs.INVALID_ISO_DATE_ARGUMENT)}}else if(Up(e)){if(isNaN(e.getTime()))throw ti(Zs.INVALID_DATE_ARGUMENT);r=e}else if(re(e))r=e;else throw ti(Zs.INVALID_ARGUMENT);const o=df(t,s,i,uf);return[s.key||"",r,s,o]}function mu(t,e,s){cf(t.__datetimeFormatters,e,s)}function bu(t,...e){const{numberFormats:s,unresolving:i,onWarn:r}=t,{__numberFormatters:o}=t;if(!re(e[0]))return Mn;const[n,a,l,d]=_l(...e),h=Yt(l.missingWarn)?l.missingWarn:t.missingWarn,u=Yt(l.fallbackWarn)?l.fallbackWarn:t.fallbackWarn,p=!!l.part,g=vc(t,l);if(!J(n)||n===""){const _=new Intl.NumberFormat(g.replace(/!/g,""),d);return p?_.formatToParts(a):_.format(a)}const v=af(t,n,g,s,h,u,"number format");if(!J(v))return i?ca:n;const x=s[v][n],I=lf(v,n,d);let k=o.get(I);return k||(k=new Intl.NumberFormat(v,ce({},x,d)),o.set(I,k)),p?k.formatToParts(a):k.format(a)}const hf=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function _l(...t){const[e]=t,s=Mt(),i=Mt();if(!re(e))throw ti(Zs.INVALID_ARGUMENT);const r=e,o=df(t,s,i,hf);return[s.key||"",r,s,o]}function yu(t,e,s){cf(t.__numberFormatters,e,s)}const LC=t=>t,OC=t=>"",RC="text",MC=t=>t.length===0?"":gc(t),PC=ik;function Ua(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function DC(t){const e=re(t.pluralIndex)?t.pluralIndex:-1;return re(t.named?.count)?t.named.count:re(t.named?.n)?t.named.n:e}function zC(t={}){const e=t.locale,s=DC(t),i=J(e)&&t.pluralRules&&Gt(ve(t.pluralRules,e))?t.pluralRules[e]:Ua,r=i===Ua?void 0:Ua,o=_=>_[i(s,_.length,r)],n=t.list||[],a=_=>n[_],l=t.named||Mt(),d=re(t.pluralIndex),h=_=>{const A=Hp(_)?ve(l,_):l[_];return d&&!A&&(_==="count"||_==="n")?t.pluralIndex:A};function u(_,A){const b=Gt(t.messages)?t.messages(_,!!A):kt(t.messages)?t.messages[_]:!1;return b||(t.parent?t.parent.message(_):OC)}const p=_=>t.modifiers?ve(t.modifiers,_):LC,g=Gt(t.processor?.normalize)?t.processor.normalize:MC,v=Gt(t.processor?.interpolate)?t.processor.interpolate:PC,x=J(t.processor?.type)?t.processor.type:RC,k={list:a,named:h,plural:o,linked:(_,...A)=>{const[b,E]=A;let O="text",T="";A.length===1?kt(b)?(T=b.modifier||T,O=b.type||O):J(b)&&(T=b||T):A.length===2&&(J(b)&&(T=b||T),J(E)&&(O=E||O));const B=u(_,!0)(k),M=B===""||B===void 0?_:B,D=O==="vnode"&&Ut(M)&&T?M[0]:M;if(!T)return D;const ot=p(T);return Gt(ot)?ot(D,O):D},message:u,type:x,interpolate:v,normalize:g,values:ce(Mt(),n,l,d?{count:h("count"),n:h("n")}:{})};return k}const vu=()=>"",ei=t=>Gt(t),Pn=t=>J(t)||Ki(t)||ei(t);function _u(t,...e){const{fallbackFormat:s,postTranslation:i,unresolving:r,messageCompiler:o,fallbackLocale:n,messages:a}=t,[l,d]=wl(...e),h=Yt(d.missingWarn)?d.missingWarn:t.missingWarn,u=Yt(d.fallbackWarn)?d.fallbackWarn:t.fallbackWarn,p=Yt(d.escapeParameter)?d.escapeParameter:t.escapeParameter,g=!!d.resolvedMessage,v=J(d.default)||Yt(d.default)?Yt(d.default)?o?l:()=>l:d.default:s?o?l:()=>l:null,x=s||v!=null&&(J(v)||Gt(v)),I=vc(t,d);p&&VC(d);let[k,_,A]=g?[l,I,ve(a,I)||Mt()]:pf(t,l,I,n,u,h),b=k,E=l;if(!g&&!Pn(b)&&x&&(b=v,E=b),!g&&(!Pn(b)||!J(_)))return r?ca:l;let O=!1;const T=()=>{O=!0},B=ei(b)?b:ff(t,l,_,b,E,T);if(O)return b;const M=BC(t,_,A,d),D=zC(M),ot=NC(t,B,D);let tt=i?i(ot,l):ot;if(p&&J(tt)&&(tt=vk(tt)),__INTLIFY_PROD_DEVTOOLS__){const bt={timestamp:Date.now(),key:J(l)?l:ei(b)?b.key:"",locale:_||(ei(b)?b.locale:""),format:J(b)?b:ei(b)?b.source:"",message:tt};bt.meta=ce({},t.__meta,EC()||{}),oC(bt)}return tt}function VC(t){if(Ut(t.list)&&(t.list=t.list.map(e=>J(e)?eu(e):e)),kt(t.named)){const e=t.named,s=Mt();for(const i of Object.keys(e)){const r=e[i];s[i]=J(r)?eu(r):r}t.named=s}}function pf(t,e,s,i,r,o){const{messages:n,onWarn:a,messageResolver:l,localeFallbacker:d}=t,h=d(t,i,s);let u=Mt(),p,g=null;const v="translate";for(let x=0;x<h.length&&(p=h[x],u=ve(n,p)||Mt(),(g=l(u,e))===null&&(g=ve(u,e)),!Pn(g));x++)if(!IC(p,h)){const I=nf(t,e,p,o,v);I!==e&&(g=I)}return[g,p,u]}function ff(t,e,s,i,r,o){const{messageCompiler:n,warnHtmlMessage:a}=t;if(ei(i)){const d=i;return d.locale=d.locale||s,d.key=d.key||e,d}if(n==null){const d=(()=>i);return d.locale=s,d.key=e,d}const l=n(i,FC(t,s,r,i,a,o));return l.locale=s,l.key=e,l.source=i,l}function NC(t,e,s){return e(s)}function wl(...t){const[e,s,i]=t,r=Mt();if(!J(e)&&!re(e)&&!ei(e)&&!Ki(e))throw ti(Zs.INVALID_ARGUMENT);const o=re(e)?String(e):(ei(e),e);return re(s)?r.plural=s:J(s)?r.default=s:jt(s)&&!pc(s)?r.named=s:Ut(s)&&(r.list=s),re(i)?r.plural=i:J(i)?r.default=i:jt(i)&&ce(r,i),[o,r]}function FC(t,e,s,i,r,o){return{locale:e,key:s,warnHtmlMessage:r,onError:n=>{throw o&&o(n),n},onCacheKey:n=>Q2(e,s,n)}}function BC(t,e,s,i){const{modifiers:r,pluralRules:o,messageResolver:n,fallbackLocale:a,fallbackWarn:l,missingWarn:d,fallbackContext:h}=t,p={locale:e,modifiers:r,pluralRules:o,messages:(g,v)=>{let x=n(s,g);if(x==null&&(h||v)){const[I,,k]=pf(h||t,g,e,a,l,d);x=I??n(k,g)}if(J(x)||Ki(x)){let I=!1;const _=ff(t,g,e,x,g,()=>{I=!0});return I?vu:_}else return ei(x)?x:vu}};return t.processor&&(p.processor=t.processor),i.list&&(p.list=i.list),i.named&&(p.named=i.named),re(i.plural)&&(p.pluralIndex=i.plural),p}Kk();const UC="11.4.16";function HC(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(aa().__INTLIFY_PROD_DEVTOOLS__=!1)}const Je={UNEXPECTED_RETURN_TYPE:aC,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function cs(t,...e){return la(t,null,void 0)}const xl=Ci("__translateVNode"),kl=Ci("__datetimeParts"),Cl=Ci("__numberParts"),jC=Ci("__setPluralRules"),WC=Ci("__injectWithOption"),dr=Ci("__dispose");let gf=null;{const t=aa().__VUE_INSTANCE_SETTERS__;Ut(t)&&t.push(e=>{gf=e})}function Pi(t){return!!Hp(t)}function bo(t){if(!kt(t)||Ki(t))return t;for(const e in t)if(ls(t,e))if(!e.includes("."))kt(t[e])&&bo(t[e]);else{const s=e.split("."),i=s.length-1;let r=t,o=!1;for(let a=0;a<i;a++){if(s[a]==="__proto__")throw new Error(`unsafe key: ${s[a]}`);if(s[a]in r||(r[s[a]]=Mt()),!kt(r[s[a]])){o=!0;break}if(Ki(r[s[a]])&&(Zp.includes(s[a+1])||s[a+1]==="cacheKey")){o=!0;break}r=r[s[a]]}o||(r[s[i]]=t[e],delete t[e]);const n=r[s[i]];kt(n)&&bo(n)}return t}function mf(t,e){const{messages:s,__i18n:i,messageResolver:r,flatJson:o}=e,n=jt(s)?s:Ut(i)?Mt():{[t]:Mt()};if(Ut(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:d}=a;if(l){if(Pi(l))return;n[l]=ve(n,l)||Mt(),nn(d,n[l])}else nn(d,n)}else J(a)&&nn(JSON.parse(a),n)}),r==null&&o)for(const a in n)ls(n,a)&&bo(n[a]);return n}function bf(t){return t.type}function KC(t,e,s){let i=kt(e.messages)?e.messages:Mt();"__i18nGlobal"in s&&(i=mf(t.locale.value,{messages:i,__i18n:s.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(o=>{t.mergeLocaleMessage(o,i[o])});{if(kt(e.datetimeFormats)){const o=Object.keys(e.datetimeFormats);o.length&&o.forEach(n=>{t.mergeDateTimeFormat(n,e.datetimeFormats[n])})}if(kt(e.numberFormats)){const o=Object.keys(e.numberFormats);o.length&&o.forEach(n=>{t.mergeNumberFormat(n,e.numberFormats[n])})}}}function wu(t){return Ft(Ro,null,t,0)}function _c(){return gf??cc()}const xu="__INTLIFY_META__",ku=()=>[],qC=()=>!1;let Cu=0;function Su(t){return((e,s,i,r)=>t(s,i,_c()||void 0,r))}const GC=()=>{const t=_c();let e=null;return t&&(e=bf(t)[xu])?{[xu]:e}:null};function Sl(t={}){const{__root:e,__injectWithOption:s}=t,i=e===void 0,r=t.flatJson,o=Ln?qt:kv;let n=Yt(t.inheritLocale)?t.inheritLocale:!0;const a=o(e&&n?e.locale.value:J(t.locale)?t.locale:Rn),l=o(e&&n?e.fallbackLocale.value:J(t.fallbackLocale)||Ut(t.fallbackLocale)||jt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),d=o(mf(a.value,t)),h=o(jt(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),u=o(jt(t.numberFormats)?t.numberFormats:{[a.value]:{}});let p=e?e.missingWarn:Yt(t.missingWarn)||On(t.missingWarn)?t.missingWarn:!0,g=e?e.fallbackWarn:Yt(t.fallbackWarn)||On(t.fallbackWarn)?t.fallbackWarn:!0,v=e?e.fallbackRoot:Yt(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,I=Gt(t.missing)?t.missing:null,k=Gt(t.missing)?Su(t.missing):null,_=Gt(t.postTranslation)?t.postTranslation:null,A=e?e.warnHtmlMessage:Yt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,b=!!t.escapeParameter;const E=e?e.modifiers:jt(t.modifiers)?t.modifiers:{};let O=t.pluralRules||e&&e.pluralRules,T;T=(()=>{i&&hu(null);const L={version:UC,locale:a.value,fallbackLocale:l.value,messages:d.value,modifiers:E,pluralRules:O,missing:k===null?void 0:k,missingWarn:p,fallbackWarn:g,fallbackFormat:x,unresolving:!0,postTranslation:_===null?void 0:_,warnHtmlMessage:A,escapeParameter:b,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};L.datetimeFormats=h.value,L.numberFormats=u.value;const P=$C(L);return i&&hu(P),P})(),Zo(T,a.value,l.value);function M(){return[a.value,l.value,d.value,h.value,u.value]}const D=Vt({get:()=>a.value,set:L=>{T.locale=L,a.value=L}});function ot(L){i||(T.fallbackContext=AC());try{return L()}finally{i||(T.fallbackContext=void 0)}}function tt(L){ot(()=>Zo(T,a.value,L))}const bt=Vt({get:()=>l.value,set:L=>{l.value=L,T.fallbackLocale=l.value,tt(l.value)}}),wt=Vt(()=>d.value),St=Vt(()=>h.value),Z=Vt(()=>u.value);function G(){return Gt(_)?_:null}function lt(L){_=L,T.postTranslation=L}function et(){return I}function $t(L){L!==null&&(k=Su(L)),I=L,T.missing=k}const pe=(L,P,ft,yt,ae,rs)=>{M();let os;try{__INTLIFY_PROD_DEVTOOLS__,os=ot(()=>L(T))}finally{__INTLIFY_PROD_DEVTOOLS__}if(ft!=="translate exists"&&re(os)&&os===ca||ft==="translate exists"&&!os){const[Do,ze]=P();return e&&v?yt(e):ae(Do)}else{if(rs(os))return os;throw cs(Je.UNEXPECTED_RETURN_TYPE)}};function Ee(...L){return pe(P=>Reflect.apply(_u,null,[P,...L]),()=>wl(...L),"translate",P=>Reflect.apply(P.t,P,[...L]),P=>P,P=>J(P))}function Zi(...L){const[P,ft,yt]=L;if(yt&&!kt(yt))throw cs(Je.INVALID_ARGUMENT);return Ee(P,ft,ce({resolvedMessage:!0},yt||{}))}function $r(...L){return pe(P=>Reflect.apply(gu,null,[P,...L]),()=>vl(...L),"datetime format",P=>Reflect.apply(P.d,P,[...L]),()=>Mn,P=>J(P)||Ut(P))}function Tr(...L){return pe(P=>Reflect.apply(bu,null,[P,...L]),()=>_l(...L),"number format",P=>Reflect.apply(P.n,P,[...L]),()=>Mn,P=>J(P)||Ut(P))}function Ws(L){return L.map(P=>J(P)||re(P)||Yt(P)?wu(String(P)):P)}const ci={normalize:Ws,interpolate:L=>L,type:"vnode"};function tr(...L){return pe(P=>{let ft;const yt=P;try{yt.processor=ci,ft=Reflect.apply(_u,null,[yt,...L])}finally{yt.processor=null}return ft},()=>wl(...L),"translate",P=>P[xl](...L),P=>[wu(P)],P=>Ut(P))}function Ss(...L){return pe(P=>Reflect.apply(bu,null,[P,...L]),()=>_l(...L),"number format",P=>P[Cl](...L),ku,P=>J(P)||Ut(P))}function Po(...L){return pe(P=>Reflect.apply(gu,null,[P,...L]),()=>vl(...L),"datetime format",P=>P[kl](...L),ku,P=>J(P)||Ut(P))}function w(L){O=L,T.pluralRules=O}function C(L,P){const ft=V(L),yt=T.messageResolver(ft,P);return yt===null?ve(ft,P):yt}function R(L,P){return pe(()=>{if(!L)return!1;const ft=J(P)?P:a.value,yt=J(P)?[ft]:T.localeFallbacker(T,l.value,ft);for(let ae=0;ae<yt.length;ae++)if(Pn(C(yt[ae],L)))return!0;return!1},()=>[L],"translate exists",ft=>Reflect.apply(ft.te,ft,[L,P]),qC,ft=>Yt(ft))}function F(L){let P=null;const ft=T.localeFallbacker(T,l.value,a.value);for(let yt=0;yt<ft.length;yt++){const ae=C(ft[yt],L);if(ae!=null){P=ae;break}}return P}function z(L){const P=F(L);return P??(e?e.tm(L)||{}:{})}function V(L){return ve(d.value,L)||{}}function m(L,P){Pi(L)||(r&&bo(P),d.value[L]=P,T.messages=d.value)}function y(L,P){Pi(L)||(d.value[L]=ve(d.value,L)||{},r&&bo(P),nn(P,d.value[L]),T.messages=d.value)}function S(L){return ve(h.value,L)||{}}function $(L,P){Pi(L)||(h.value[L]=P,T.datetimeFormats=h.value,mu(T,L,P))}function q(L,P){Pi(L)||(h.value[L]=ce(ve(h.value,L)||{},P),T.datetimeFormats=h.value,mu(T,L,P))}function U(L){return ve(u.value,L)||{}}function Y(L,P){Pi(L)||(u.value[L]=P,T.numberFormats=u.value,yu(T,L,P))}function dt(L,P){Pi(L)||(u.value[L]=ce(ve(u.value,L)||{},P),T.numberFormats=u.value,yu(T,L,P))}Cu++,bi(l,()=>tt(l.value),{deep:!0,flush:"sync"}),e&&Ln&&(bi(e.locale,L=>{n&&(a.value=L,T.locale=L,Zo(T,a.value,l.value))}),bi(e.fallbackLocale,L=>{n&&(l.value=L,T.fallbackLocale=l.value,Zo(T,a.value,l.value))}));const ct={id:Cu,locale:D,fallbackLocale:bt,get inheritLocale(){return n},set inheritLocale(L){n=L,L&&e&&(D.value=e.locale.value,bt.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(d.value).sort()},messages:wt,get modifiers(){return E},get pluralRules(){return O||{}},get isGlobal(){return i},get missingWarn(){return p},set missingWarn(L){p=L,T.missingWarn=p},get fallbackWarn(){return g},set fallbackWarn(L){g=L,T.fallbackWarn=g},get fallbackRoot(){return v},set fallbackRoot(L){v=L},get fallbackFormat(){return x},set fallbackFormat(L){x=L,T.fallbackFormat=x},get warnHtmlMessage(){return A},set warnHtmlMessage(L){A=L,T.warnHtmlMessage=L},get escapeParameter(){return b},set escapeParameter(L){b=L,T.escapeParameter=L},t:Ee,getLocaleMessage:V,setLocaleMessage:m,mergeLocaleMessage:y,getPostTranslationHandler:G,setPostTranslationHandler:lt,getMissingHandler:et,setMissingHandler:$t,[jC]:w};return ct.datetimeFormats=St,ct.numberFormats=Z,ct.rt=Zi,ct.te=R,ct.tm=z,ct.d=$r,ct.n=Tr,ct.getDateTimeFormat=S,ct.setDateTimeFormat=$,ct.mergeDateTimeFormat=q,ct.getNumberFormat=U,ct.setNumberFormat=Y,ct.mergeNumberFormat=dt,ct[WC]=s,ct[xl]=tr,ct[kl]=Po,ct[Cl]=Ss,ct}const wc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function YC({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Te?r.children:[r]],[]):e.reduce((s,i)=>{const r=t[i];return r&&(s[i]=r()),s},Mt())}function yf(){return Te}const XC=Ue({name:"i18n-t",props:ce({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>re(t)||!isNaN(t)}},wc),setup(t,e){const{slots:s,attrs:i}=e,r=t.i18n||xc({useScope:t.scope,__useComponent:!0});return()=>{const o=()=>{const l=Object.keys(s).filter(u=>u[0]!=="_"),d=Mt();t.locale&&(d.locale=t.locale),t.plural!==void 0&&(d.plural=J(t.plural)?+t.plural:t.plural);const h=YC(e,l);return r[xl](t.keypath,h,d)},n=ce(Mt(),i),a=J(t.tag)||kt(t.tag)?t.tag:yf();return kt(a)?kn(a,n,{default:o}):kn(a,n,o())}}}),Eu=XC;function JC(t){return Ut(t)&&!J(t[0])}function vf(t,e,s,i){const{slots:r,attrs:o}=e;return()=>{const n=()=>{const d={part:!0};let h=Mt();t.locale&&(d.locale=t.locale),J(t.format)?d.key=t.format:kt(t.format)&&(J(t.format.key)&&(d.key=t.format.key),h=Object.keys(t.format).reduce((g,v)=>s.includes(v)?ce(Mt(),g,{[v]:t.format[v]}):g,Mt()));const u=i(t.value,d,h);let p=[d.key];return Ut(u)?p=u.map((g,v)=>{const x=r[g.type],I=x?x({[g.type]:g.value,index:v,parts:u}):[g.value];return JC(I)&&(I[0].key=`${g.type}-${v}`),I}):J(u)&&(p=[u]),p},a=ce(Mt(),o),l=J(t.tag)||kt(t.tag)?t.tag:yf();return kt(l)?kn(l,a,{default:n}):kn(l,a,n())}}const QC=Ue({name:"i18n-n",props:ce({value:{type:Number,required:!0},format:{type:[String,Object]}},wc),setup(t,e){const s=t.i18n||xc({useScope:t.scope,__useComponent:!0});return vf(t,e,hf,(...i)=>s[Cl](...i))}}),Au=QC;function ZC(t,e){const s=t;if(t.mode==="composition")return s.__getInstance(e)||t.global;{const i=s.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function tS(t){const e=n=>{const{instance:a,value:l}=n;if(!a||!a.$)throw cs(Je.UNEXPECTED_ERROR);const d=ZC(t,a.$),h=$u(l);return[Reflect.apply(d.t,d,[...Tu(h)]),d]};return{created:(n,a)=>{const[l,d]=e(a);Ln&&(n.__i18nWatcher=bi(d.locale,()=>{a.instance&&a.instance.$forceUpdate()})),n.__composer=d,n.textContent=l},unmounted:n=>{Ln&&n.__i18nWatcher&&(n.__i18nWatcher(),n.__i18nWatcher=void 0,delete n.__i18nWatcher),n.__composer&&(n.__composer=void 0,delete n.__composer)},beforeUpdate:(n,{value:a})=>{if(n.__composer){const l=n.__composer,d=$u(a);n.textContent=Reflect.apply(l.t,l,[...Tu(d)])}},getSSRProps:n=>{const[a]=e(n);return{textContent:a}}}}function $u(t){if(J(t))return{path:t};if(jt(t)){if(!("path"in t))throw cs(Je.REQUIRED_VALUE,"path");return t}else throw cs(Je.INVALID_VALUE)}function Tu(t){const{path:e,locale:s,args:i,choice:r,plural:o}=t,n={},a=i||{};return J(s)&&(n.locale=s),re(r)&&(n.plural=r),re(o)&&(n.plural=o),[e,a,n]}function eS(t,e,...s){const i=jt(s[0])?s[0]:{};(!Yt(i.globalInstall)||i.globalInstall)&&([Eu.name,"I18nT"].forEach(o=>t.component(o,Eu)),[Au.name,"I18nN"].forEach(o=>t.component(o,Au)),[Ou.name,"I18nD"].forEach(o=>t.component(o,Ou))),t.directive("t",tS(e))}const sS=Ci("global-vue-i18n");function iS(t={}){const e=Yt(t.globalInjection)?t.globalInjection:!0,s=new Map,[i,r]=rS(t),o=Ci("");function n(h){return s.get(h)||null}function a(h,u){s.set(h,u)}function l(h){s.delete(h)}const d={get mode(){return"composition"},async install(h,...u){if(h.__VUE_I18N_SYMBOL__=o,h.provide(h.__VUE_I18N_SYMBOL__,d),jt(u[0])){const v=u[0];d.__composerExtend=v.__composerExtend,d.__vueI18nExtend=v.__vueI18nExtend}let p=null;e&&(p=uS(h,d.global)),eS(h,d,...u);const g=h.unmount;h.unmount=()=>{p&&p(),d.dispose(),g()}},get global(){return r},dispose(){i.stop()},__instances:s,__getInstance:n,__setInstance:a,__deleteInstance:l};return d}function xc(t={}){const e=_c();if(e==null)throw cs(Je.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw cs(Je.NOT_INSTALLED);const s=oS(e),i=aS(s),r=bf(e),o=nS(t,r);if(o==="global")return KC(i,t,r),i;if(o==="parent"){let l=Iu(s,e,t.__useComponent);return l==null&&(l=i),l}if(o==="isolated"){if(s.mode!=="composition")throw cs(Je.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const l=s,d=ce({},t),h=Iu(s,e);d.__root=h||i;const u=Sl(d);return l.__composerExtend&&(u[dr]=l.__composerExtend(u)),ql()&&Ah(()=>{const g=u[dr];g&&(g(),delete u[dr])}),u}const n=s;let a=n.__getInstance(e);if(a==null){const l=ce({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Sl(l),n.__composerExtend&&(a[dr]=n.__composerExtend(a)),cS(n,e,a),n.__setInstance(e,a)}return a}function rS(t,e){const s=Kl(),i=s.run(()=>Sl(t));if(i==null)throw cs(Je.UNEXPECTED_ERROR);return[s,i]}function oS(t){const e=fe(t.isCE?sS:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw cs(t.isCE?Je.NOT_INSTALLED_WITH_PROVIDE:Je.UNEXPECTED_ERROR);return e}function nS(t,e){return pc(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function aS(t){return t.mode==="composition"?t.global:t.global.__composer}function Iu(t,e,s=!1){let i=null;const r=e.root;let o=lS(e,s);for(;o!=null;){const n=t;if(t.mode==="composition"&&(i=n.__getInstance(o)),i!=null||r===o)break;o=o.parent}return i}function lS(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function cS(t,e,s){rc(()=>{},e),oc(()=>{const i=s;t.__deleteInstance(e);const r=i[dr];r&&(r(),delete i[dr])},e)}const dS=["locale","fallbackLocale","availableLocales"],Lu=["t","rt","d","n","tm","te"];function uS(t,e){const s=Object.create(null);return dS.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o)throw cs(Je.UNEXPECTED_ERROR);const n=Wt(o.value)?{get(){return o.value.value},set(a){o.value.value=a}}:{get(){return o.get&&o.get()}};Object.defineProperty(s,r,n)}),t.config.globalProperties.$i18n=s,Lu.forEach(r=>{const o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o.value)throw cs(Je.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,o)}),()=>{delete t.config.globalProperties.$i18n,Lu.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const hS=Ue({name:"i18n-d",props:ce({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},wc),setup(t,e){const s=t.i18n||xc({useScope:t.scope,__useComponent:!0});return vf(t,e,uf,(...i)=>s[kl](...i))}}),Ou=hS;HC();xC(sC);kC(vC);CC(cC);if(__INTLIFY_PROD_DEVTOOLS__){const t=aa();t.__INTLIFY__=!0,iC(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}class pS{constructor(e,s=Sn){this.i18nConfig=void 0,this.i18nConfig=iS(this.getConfig(e,s))}getConfig(e,s=Sn){const i={trend:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0},detections:{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0},detectionsCompact:{style:"decimal",notation:"compact",minimumFractionDigits:0,maximumFractionDigits:0}},r={secondRange:{hour:"2-digit",minute:"2-digit",second:"2-digit"},hourRange:{hour:"2-digit",minute:"2-digit"},dateRange:{month:"short",day:"numeric"},overviewDate:{month:"short",day:"numeric",year:"numeric"},fullDateTime:{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",year:"2-digit"}},o={locale:e,fallbackLocale:"en-us",messages:s,allowComposition:!0,legacy:!1,numberFormats:{"en-US":i,[e]:i},datetimeFormats:{"en-US":r,[e]:r}};return o.numberFormats[e]=o.numberFormats[e]??o.numberFormats["en-US"],o}install(e){e.provide(we.I18N,this.i18nConfig?.global)}}function fS(t,e=Sn){return new pS(t,e)}(async()=>{const t=$p(r2);t.config.compilerOptions.isCustomElement=s=>s.startsWith("sl-");const e=J2();t.use(a2()),t.use(e),t.use(P_()),await e.connect(),t.use(fS(e.data.locale,Sn)),t.mount("#app")})();
