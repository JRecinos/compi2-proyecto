!function(t){function e(e){for(var i,r,o=e[0],s=e[1],a=0,c=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&c.push(n[r][0]),n[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);for(l&&l(e);c.length;)c.shift()()}var i={},n={0:0};function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,r){i=n[t]=[e,r]}));e.push(i[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(t){return r.p+""+{1:"1762797263bdbd873c77",2:"580b7774bfc4213ddb64",3:"c1de3b0966e039731f2e"}[t]+".js"}(t);var l=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(c);var i=n[t];if(0!==i){if(i){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,i[1](l)}n[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var a=0;a<o.length;a++)e(o[a]);var l=s;r(r.s=52)}([function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:t=>t},function(t,e,i){"use strict";i.d(e,"c",(function(){return n.d})),i.d(e,"b",(function(){return E})),i.d(e,"a",(function(){return T}));var n=i(19),r=i(17),o=i(9);function s(t,e){const{element:{content:i},parts:n}=t,r=document.createTreeWalker(i,133,null,!1);let o=l(n),s=n[o],a=-1,c=0;const d=[];let p=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(d.push(t),null===p&&(p=t)),null!==p&&c++;void 0!==s&&s.index===a;)s.index=null!==p?-1:s.index-c,o=l(n,o),s=n[o]}d.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},l=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(Object(o.d)(e))return i}return-1};var c=i(26),d=i(24),p=i(29),h=i(22);
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
const u=(t,e)=>`${t}--${e}`;let f=!0;void 0===window.ShadyCSS?f=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),f=!1);const _=t=>e=>{const i=u(e.type,t);let n=d.a.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},d.a.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(o.f);if(r=n.keyString.get(s),void 0===r){const i=e.getTemplateElement();f&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o.a(e,i),n.keyString.set(s,r)}return n.stringsArray.set(e.strings,r),r},m=["html","svg"],b=new Set,y=(t,e,i)=>{b.add(i);const n=t.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,i);const r=document.createElement("style");for(let t=0;t<n.length;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}if((t=>{m.forEach(e=>{const i=d.a.get(u(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),s(t,i)})})})(i),function(t,e,i=null){const{element:{content:n},parts:r}=t;if(null==i)return void n.appendChild(e);const o=document.createTreeWalker(n,133,null,!1);let s=l(r),c=0,d=-1;for(;o.nextNode();){for(d++,o.currentNode===i&&(c=a(e),i.parentNode.insertBefore(e,i));-1!==s&&r[s].index===d;){if(c>0){for(;-1!==s;)r[s].index+=c,s=l(r,s);return}s=l(r,s)}}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,i),window.ShadyCSS.nativeShadow){const i=e.element.content.querySelector("style");t.insertBefore(i.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),s(e,t)}};
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
window.JSCompiler_renameProperty=(t,e)=>t;const g={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},v=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v},x=Promise.resolve(!0);class S extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=x,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=w){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const n=this[t];this[i]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=v){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||g,r="function"==typeof n?n:n.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||g.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=w){const n=this.constructor,r=n._attributeNameForProperty(t,i);if(void 0!==r){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n)||w;this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,r=n._classProperties.get(t)||w;n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{t=i,e=n});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}S.finalized=!0;const C="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol();class P{constructor(t,e){if(e!==k)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(C?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const E=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof P)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new P(i,k)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const O=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let n=0,r=e.length;n<r;n++){const r=e[n];Array.isArray(r)?t(r,i):i.push(r)}return i}(t);class T extends S{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){O(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?C?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof n.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}T.finalized=!0,T.render=(t,e,i)=>{const n=i.scopeName,o=c.a.has(e),s=e instanceof ShadowRoot&&f&&t instanceof h.b,a=s&&!b.has(n),l=a?document.createDocumentFragment():e;if(Object(c.b)(t,l,Object.assign({templateFactory:_(n)},i)),a){const t=c.a.get(l);c.a.delete(l),t.value instanceof p.a&&y(l,t.value.template,n),Object(r.b)(e,e.firstChild),e.appendChild(l),c.a.set(e,t)}!o&&s&&window.ShadyCSS.styleElement(e.host)}},function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"g",(function(){return r})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"i",(function(){return a})),i.d(e,"e",(function(){return l})),i.d(e,"f",(function(){return c})),i.d(e,"a",(function(){return p})),i.d(e,"h",(function(){return h}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t){return t.indexOf(".")>=0}function r(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function o(t,e){return 0===t.indexOf(e+".")}function s(t,e){return 0===e.indexOf(t+".")}function a(t,e,i){return e+i.slice(t.length)}function l(t,e){return t===e||o(t,e)||s(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function p(t,e,i){let n=t,r=d(e);for(let t=0;t<r.length;t++){if(!n)return;n=n[r[t]]}return i&&(i.path=r.join(".")),n}function h(t,e,i){let n=t,r=d(e),o=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(n=n[r[t]],!n)return}n[o]=i}else n[e]=i;return r.join(".")}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class n{constructor(t){this.value=t.toString()}toString(){return this.value}}function r(t){if(t instanceof n)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const o=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce((e,i,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof n)return r(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(i)+t[o+1],t[0]),i}},function(t,e,i){"use strict";i.d(e,"b",(function(){return d})),i.d(e,"a",(function(){return _}));i(7);var n=i(0),r=(i(5),i(40)),o=i(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(n.a)(t);return s(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>s(t)?(t=t,Object(n.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(n.a)(this._target).children&&(this._listenSlots(Object(n.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(n.a)(this._target).children&&(this._unlistenSlots(Object(n.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.b.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Object(r.a)(e,this._effectiveNodes);for(let e,n=0;n<i.length&&(e=i[n]);n++)for(let i,n=0;n<e.removed.length&&(i=e.removed[n]);n++)t.removedNodes.push(i);for(let n,r=0;r<i.length&&(n=i[r]);r++)for(let i=n.index;i<n.index+n.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];s(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];s(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};i(20),i(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l=Element.prototype,c=l.matches||l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector,d=function(t,e){return c.call(t,e)};class p{constructor(t){this.node=t}observeNodes(t){return new a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(n.a)(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=Object(n.a)(e).parentNode||Object(n.a)(e).host;return e===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(n.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(n.a)(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(i).importNode(t,e)}getEffectiveChildNodes(){return a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let n,r=0,o=e.length;r<o&&(n=e[r]);r++)n.nodeType===Node.ELEMENT_NODE&&d(n,t)&&i.push(n);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function h(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class u{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}p.prototype.cloneNode,p.prototype.appendChild,p.prototype.insertBefore,p.prototype.removeChild,p.prototype.replaceChild,p.prototype.setAttribute,p.prototype.removeAttribute,p.prototype.querySelector,p.prototype.querySelectorAll,p.prototype.parentNode,p.prototype.firstChild,p.prototype.lastChild,p.prototype.nextSibling,p.prototype.previousSibling,p.prototype.firstElementChild,p.prototype.lastElementChild,p.prototype.nextElementSibling,p.prototype.previousElementSibling,p.prototype.childNodes,p.prototype.children,p.prototype.classList,p.prototype.textContent,p.prototype.innerHTML;let f=p;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(p.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=p.prototype[e])}),h(t.prototype,["classList"]),f=t,Object.defineProperties(u.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(p.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),h(p.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(p.prototype,["textContent","innerHTML"]);const _=function(t){if((t=t||document)instanceof f)return t;if(t instanceof u)return t;let e=t.__domApi;return e||(e=t instanceof Event?new u(t):new f(t),t.__domApi=e),e}},function(t,e,i){"use strict";i.d(e,"i",(function(){return r})),i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"f",(function(){return l})),i.d(e,"g",(function(){return c})),i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return p})),i.d(e,"h",(function(){return h}));i(7);var n=i(18);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let o=Object(n.a)(document.baseURI||window.location.href);let s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;const l=function(t){a=t};let c=!1;let d=!1;let p=!1;let h=!1},function(t,e,i){"use strict";i.d(e,"b",(function(){return K.a})),i.d(e,"a",(function(){return W}));var n=i(33),r=(i(11),i(7),i(31)),o=i(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t,e,i,n,r){let o;r&&(o="object"==typeof i&&null!==i,o&&(n=t.__dataTemp[e]));let s=n!==i&&(n==n||i==i);return o&&s&&(t.__dataTemp[e]=i),s}const a=Object(o.a)(t=>class extends t{_shouldPropertyChange(t,e,i){return s(this,t,e,i,!0)}}),l=Object(o.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return s(this,t,e,i,this.mutableData)}});a._mutablePropertyChange=s;var c=i(5),d=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let p=null;function h(){return p}h.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:h,writable:!0}});const u=Object(r.a)(h),f=a(u);const _=Object(r.a)(class{});class m extends _{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=this.children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,i)}}_showHideChildren(t){let e=this.children;for(let i=0;i<e.length;i++){let n=e[i];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(d.a)(Object(d.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&Object(d.a)(Object(d.a)(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}m.prototype.__dataHost,m.prototype.__templatizeOptions,m.prototype._methodHost,m.prototype.__templatizeOwner,m.prototype.__hostProps;const b=a(m);function y(t){let e=t.__dataHost;return e&&e._methodHost||e}function g(t,e,i){let n=i.mutableData?b:m;S.mixin&&(n=S.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(t),function(t,e,i,n){let r=i.hostProps||{};for(let e in n.instanceProps){delete r[e];let i=n.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:x(e,i)})}if(n.forwardHostProp&&e.__dataHost)for(let e in r)t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(r,t,e,i),r}function v(t,e,i){let n=i.forwardHostProp;if(n){let r=e.templatizeTemplateClass;if(!r){let t=i.mutableData?f:u;r=e.templatizeTemplateClass=class extends t{};let o=e.hostProps;for(let t in o)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w(t,n)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){p=t,Object.setPrototypeOf(t,e.prototype),new e,p=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function w(t,e){return function(t,i,n){e.call(t.__templatizeOwner,i.substring("_host_".length),n[i])}}function x(t,e){return function(t,i,n){e.call(t.__templatizeOwner,t,i,n[i])}}function S(t,e,i){if(c.g&&!y(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:m)._parseTemplate(t),r=n.templatizeInstanceClass;r||(r=g(t,n,i),n.templatizeInstanceClass=r),v(t,n,i);let o=class extends r{};return o.prototype._methodHost=y(t),o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=n.hostProps,o=o,o}function C(t,e){let i;for(;e;)if(i=e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=Object(d.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var k=i(39);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=Object(k.a)(l(Object(r.a)(HTMLElement)));customElements.define("dom-bind",class extends P{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),c.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(d.a)(Object(d.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var E=i(28),O=i(16),T=i(20),A=i(2),N=i(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const M=l(E.a);class z extends M{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let t=Object(d.a)(Object(d.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=S(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let i=this.__instances;for(let n,r=0;r<i.length&&(n=i[r]);r++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if(Object(A.e)(this.as,e)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=i);let r=Object(A.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(r,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=O.a.debounce(this.__renderDebouncer,e>0?N.c.after(e):N.b,t.bind(this)),Object(T.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(T.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;this.__filterFn&&(e=e.filter((e,i,n)=>this.__filterFn(t[e],i,n))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i]));const i=this.__itemsIdxToInstIdx={};let n=0;const r=Math.min(e.length,this.__limit);for(;n<r;n++){let r=this.__instances[n],o=e[n],s=t[o];i[o]=n,r?(r._setPendingProperty(this.as,s),r._setPendingProperty(this.indexAs,n),r._setPendingProperty(this.itemsIndexAs,o),r._flushProperties()):this.__insertInstance(s,n,o)}for(let t=this.__instances.length-1;t>=n;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const i=Object(d.a)(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];i.appendChild(n)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,i){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(t,e,i){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,t),n._setPendingProperty(this.indexAs,e),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):n=this.__stampInstance(t,e,i);let r=this.__instances[e+1],o=r?r.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(n.root,o),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),n=i.indexOf("."),r=n<0?i:i.substring(0,n);if(r==parseInt(r,10)){let t=n<0?"":i.substring(n+1);this.__handleObservedPaths(t);let o=this.__itemsIdxToInstIdx[r],s=this.__instances[o];if(s){let i=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(i,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return C(this.template,t)}}customElements.define(z.is,z);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class I extends E.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=O.a.debounce(this.__renderDebouncer,N.b,()=>this.__render()),Object(T.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(d.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(d.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(T.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(d.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(d.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(d.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=S(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(A.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(d.a)(this).previousSibling!==e[e.length-1])for(let i,n=0;n<e.length&&(i=e[n]);n++)Object(d.a)(t).insertBefore(i,this)}}else this.__instance=new this.__ctor,Object(d.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(d.a)(t[0]).parentNode;if(e){e=Object(d.a)(e);for(let i,n=0;n<t.length&&(i=t[n]);n++)e.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(I.is,I);var L=i(40),R=i(30);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let j=Object(o.a)(t=>{let e=Object(R.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],n=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),n){let t=Object(L.a)(i,n);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=i.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let i=0;i<t.length;i++){let n=t[i];e.forEach((t,i)=>{t<n.index||(t>=n.index+n.removed.length?e.set(i,t+n.addedCount-n.removed.length):e.set(i,-1))});for(let t=0;t<n.addedCount;t++){let i=n.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.__updateLinks();let i=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,n)=>{e==t++&&this.deselect(n)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(E.a);class D extends j{static get is(){return"array-selector"}static get template(){return null}}customElements.define(D.is,D);var H=i(45),B=i(27),F=i(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const V=new H.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){V.processStyles(),Object(B.c)(t,e)},styleElement(t){V.processStyles()},styleDocument(t){V.processStyles(),Object(B.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(B.b)(t,e),flushCustomStyles(){},nativeCss:F.c,nativeShadow:F.d,cssBuild:F.a,disableRuntime:F.b}),window.ShadyCSS.CustomStyleInterface=V;var $=i(35);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const q=window.ShadyCSS.CustomStyleInterface;class U extends HTMLElement{constructor(){super(),this._style=null,q.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object($.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Y;window.customElements.define("custom-style",U),Y=a._mutablePropertyChange;Boolean;var K=i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const W=Object(n.a)(HTMLElement).prototype},function(t,e,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(1);i.d(e,"c",(function(){return n.c})),i.d(e,"b",(function(){return n.b}));const r=class extends n.a{constructor(){super(),this.$={}}_(t){return this.shadowRoot.getElementById(t)}$$(t){return this.shadowRoot.querySelector(t)}$$$(t){return this.shadowRoot.querySelectorAll(t)}mapIDs(){let t=this.shadowRoot.querySelectorAll("[id]");for(let e=0;e<t.length;e++)this.$[t[e].id]=t[e]}set(t,e){this[t]=e,this.dispatchEvent(new CustomEvent(t,{detail:e}))}fire(t,e,i=!1){i?this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent(t,{detail:e}))}push(t,e){this[t].push(e),this.requestUpdate()}isObject(t){return null!==t&&("function"==typeof t||"object"==typeof t)}isFunction(t){return t&&"[object Function]"==={}.toString.call(t)}isObjectEmpty(t){return this.isObject(t)&&0===Object.keys(t).length}bind(t,e){return i=>{try{let n=this,r=t.split("."),o=r.length;for(let t=0;t<o-1;t++){let e=r[t];n[e]||(n[e]={}),n=n[e]}n?n[r[o-1]]=null==e?i.detail:i.detail[e]:console.log("no hay schema para",t)}catch(i){console.error("Error in 2-way DataBinding",i)}}}scrollTo(){this.scrollToY()}scrollToY(t=0,e=600,i="easeOutSine",n=OpticApp.ScrollTarget){let r=0;const o=e/1e3,s={easeOutSine:t=>Math.sin(t*(Math.PI/2)),easeInOutSine:t=>-.5*(Math.cos(Math.PI*t)-1),easeInOutQuint:t=>(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)};!function e(){r+=1/60;const a=r/o,l=s[i](a),c=n.pageYOffset||n.scrollTop||0,d=c+(t-c)*l;a<1&&(window.requestAnimationFrame(e),n.scrollTop=d)}()}toggleAddRemoveClasses(t,e,i=0){let n=t||"",r=e||"";if(("string"==typeof r||Array.isArray(r))&&r.length){let t=n.classList;Array.isArray(r)||(r=r.replace(/(,\s*|\s+)/g," ").split(" "));for(let e of r)switch(i){case 0:t.toggle(e);break;case 1:t.add(e);break;case 2:t.remove(e)}return!0}}}},function(t,e,i){"use strict";i.d(e,"f",(function(){return n})),i.d(e,"g",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a})),i.d(e,"d",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"e",(function(){return d}));
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
const n=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${r}`),s="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;let i=-1,r=0;const a=[],l=e=>{const p=e.content,h=document.createTreeWalker(p,133,null,!1);let u=0;for(;h.nextNode();){i++;const e=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let l=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(n)>=0&&l++;for(;l-- >0;){const n=t.strings[r],a=d.exec(n)[2],l=a.toLowerCase()+s,c=e.getAttribute(l).split(o);this.parts.push({type:"attribute",index:i,name:a,strings:c}),e.removeAttribute(l),r+=c.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,s=t.split(o),l=s.length-1;for(let t=0;t<l;t++)n.insertBefore(""===s[t]?c():document.createTextNode(s[t]),e),this.parts.push({type:"node",index:++i});""===s[l]?(n.insertBefore(c(),e),a.push(e)):e.data=s[l],r+=l}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&i!==u||(i++,t.insertBefore(c(),e)),u=i,this.parts.push({type:"node",index:i}),null===e.nextSibling?e.data="":(a.push(e),i--),r++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of a)t.parentNode.removeChild(t)}}const l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;const o=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=n++;return function(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=e,s=o.get(n);s||(s=t(n),o.set(n,s));let a=Object.create(s.__mixinSet||r||null);return a[i]=!0,s.__mixinSet=a,s}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i(33),r=i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(t,e,i,n){!function(t,e,i){const n=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let o=0;o<r.length;o++){let s=r[o];if(!(s in i))if(n)e[s]=t[s];else{let i=Object.getOwnPropertyDescriptor(t,s);i&&(i.configurable=!0,Object.defineProperty(e,s,i))}}}(e,t,n);for(let t in o)e[t]&&(i[t]=i[t]||[],i[t].push(e[t]))}function c(t,e){for(const i in e){const n=t[i],r=e[i];t[i]=!("value"in r)&&n&&"value"in n?Object.assign({value:n.value},r):r}}function d(t,e,i){let n;const o={};class d extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)t=n[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)c(e,n[t].properties);return c(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,i=0;i<n.length;i++)t=n[i],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=o.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=d.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),r.b&&p(t);const e=Object.getPrototypeOf(this);let i=o.beforeRegister;if(i)for(let t=0;t<i.length;t++)i[t].call(e);if(i=o.registered,i)for(let t=0;t<i.length;t++)i[t].call(e)}}_applyListeners(){super._applyListeners();const t=o.listeners;if(t)for(let e=0;e<t.length;e++){const i=t[e];if(i)for(let t in i)this._addMethodEventListenerToNode(this,t,i[t])}}_ensureAttributes(){const t=o.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const i=t[e];for(let t in i)this._ensureAttribute(t,i[t])}super._ensureAttributes()}ready(){super.ready();let t=o.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=o.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=o.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,i){super.attributeChanged();let n=o.attributeChanged;if(n)for(let r=0;r<n.length;r++)n[r].call(this,t,e,i)}}if(i){Array.isArray(i)||(i=[i]);let t=e.prototype.behaviors;n=function t(e,i,n){i=i||[];for(let r=e.length-1;r>=0;r--){let o=e[r];o?Array.isArray(o)?t(o,i):i.indexOf(o)<0&&(!n||n.indexOf(o)<0)&&i.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,t),d.prototype.behaviors=t?t.concat(i):n}const p=e=>{n&&function(t,e,i){for(let n=0;n<e.length;n++)l(t,e[n],i,a)}(e,n,o),l(e,t,o,s)};return r.b||p(d.prototype),d.generatedFrom=t,d}i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const p=function(t){let e;return e="function"==typeof t?t:p.Class(t),customElements.define(e.is,e),e};p.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Object(n.a)(HTMLElement)):Object(n.a)(HTMLElement);return i=d(t,i,t.behaviors),i.is=i.prototype.is=t.is,i}},function(t,e,i){"use strict";i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return d}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0,r=0,o=[],s=0,a=document.createTextNode("");new window.MutationObserver((function(){const t=o.length;for(let e=0;e<t;e++){let t=o[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}o.splice(0,t),r+=t})).observe(a,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},d={run:t=>(a.textContent=s++,o.push(t),n++),cancel(t){const e=t-r;if(e>=0){if(!o[e])throw new Error("invalid async handle: "+t);o[e]=null}}}},function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,o;function s(t){r=(!t||!t.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(o=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=r},function(t,e,i){"use strict";i.d(e,"f",(function(){return c})),i.d(e,"a",(function(){return d})),i.d(e,"d",(function(){return h})),i.d(e,"b",(function(){return u})),i.d(e,"e",(function(){return f})),i.d(e,"c",(function(){return b}));var n=i(25),r=i(17),o=i(15),s=i(29),a=i(22),l=i(9);
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
const c=t=>null===t||!("object"==typeof t||"function"==typeof t);class d{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new p(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class p{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o.a||c(t)&&t===this.value||(this.value=t,Object(n.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const t=this.value;this.value=o.a,t(this)}this.value!==o.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(l.c)()),this.endNode=t.appendChild(Object(l.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(l.c)()),t._insert(this.endNode=Object(l.c)())}insertAfterPart(t){t._insert(this.startNode=Object(l.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(n.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o.a,t(this)}const t=this._pendingValue;t!==o.a&&(c(t)?t!==this.value&&this._commitText(t):t instanceof a.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===o.b?(this.value=o.b,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof s.a&&this.value.template===e)this.value.update(t.values);else{const i=new s.a(e,t.processor,this.options),n=i._clone();i.update(t.values),this._commitNode(n),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const r of t)i=e[n],void 0===i&&(i=new h(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(r),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){Object(r.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class u{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;Object(n.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o.a,t(this)}if(this._pendingValue===o.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=o.a}}class f extends d{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new _(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _ extends p{}let m=!1;try{const t={get capture(){return m=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class b{constructor(t,e,i){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this._boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this._pendingValue=t}commit(){for(;Object(n.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o.a,t(this)}if(this._pendingValue===o.a)return;const t=this._pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=y(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=o.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const y=t=>t&&(m?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}));
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
const n={},r={}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s}));i(7),i(10),i(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof n?t._cancelAsync():t=new n,t.setConfig(e,i),t}}let r=new Set;const o=function(t){r.add(t)},s=function(){const t=Boolean(r.size);return r.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"b",(function(){return o}));
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
const n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,i=null,n=null)=>{let r=e;for(;r!==i;){const e=r.nextSibling;t.insertBefore(r,n),r=e}},o=(t,e,i=null)=>{let n=e;for(;n!==i;){const e=n.nextSibling;t.removeChild(n),n=e}}},function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return c}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,r,o=/(url\()([^)]*)(\))/g,s=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if(void 0===n){n=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),n?new URL(t,e).href:(r||(r=document.implementation.createHTMLDocument("temp"),r.base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=e,r.anchor.href=t,r.anchor.href||t)}function l(t,e){return t.replace(o,(function(t,i,n,r){return i+"'"+a(n.replace(/["']/g,""),e)+"'"+r}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,i){"use strict";i.d(e,"c",(function(){return s.a})),i.d(e,"a",(function(){return n.d})),i.d(e,"b",(function(){return o.b})),i.d(e,"d",(function(){return a}));var n=i(14);
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
 */const r=new class{handleAttributeExpressions(t,e,i,r){const o=e[0];if("."===o){return new n.e(t,e.slice(1),i).parts}return"@"===o?[new n.c(t,e.slice(1),r.eventContext)]:"?"===o?[new n.b(t,e.slice(1),i)]:new n.a(t,e,i).parts}handleTextExpression(t){return new n.d(t)}};var o=i(22),s=i(25);i(17),i(15),i(26),i(24),i(29),i(9);
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const a=(t,...e)=>new o.b(t,e,"html",r)},function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));i(7);var n=i(16);i.d(e,"a",(function(){return n.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(n.c)()}while(t||e)}},function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/@media\s(.*)/},function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return s}));var n=i(17),r=i(9);
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
class o{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="";for(let i=0;i<t;i++){const t=this.strings[i],n=r.e.exec(t);e+=n?t.substr(0,n.index)+n[1]+n[2]+r.b+n[3]+r.f:t+r.g}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class s extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),Object(n.c)(e,i.firstChild),t}}},function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n={},r=/-[a-z]/g,o=/([A-Z])/g;function s(t){return n[t]||(n[t]=t.indexOf("-")<0?t:t.replace(r,t=>t[1].toUpperCase()))}function a(t){return n[t]||(n[t]=t.replace(o,"-$1").toLowerCase())}},function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return o}));var n=i(9);
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
 */function r(t){let e=o.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},o.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(n.f);return i=e.keyString.get(r),void 0===i&&(i=new n.a(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const o=new Map},function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return o}));
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
const n=new WeakMap,r=t=>(...e)=>{const i=t(...e);return n.set(i,!0),i},o=t=>"function"==typeof t&&n.has(t)},function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var n=i(17),r=i(14),o=i(24);
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
const s=new WeakMap,a=(t,e,i)=>{let a=s.get(e);void 0===a&&(Object(n.b)(e,e.firstChild),s.set(e,a=new r.d(Object.assign({templateFactory:o.b},i))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return s}));var n=i(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function o(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function s(t){const e=n.b.test(t)||n.c.test(t);return n.b.lastIndex=0,n.c.lastIndex=0,e}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(30);i(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(n.a)(HTMLElement)},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(17),r=i(9);
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
class o{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,o=0;const s=t=>{const n=document.createTreeWalker(t,133,null,!1);let a=n.nextNode();for(;i<e.length&&null!==a;){const t=e[i];if(Object(r.d)(t))if(o===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));i++}else o++,"TEMPLATE"===a.nodeName&&s(a.content),a=n.nextNode();else this._parts.push(void 0),i++}};return s(t),n.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return f}));i(7);var n=i(5),r=i(10),o=i(35),s=i(18),a=i(32),l=i(31);const c=[];var d=i(38);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const p=Object(r.a)(t=>{const e=Object(d.a)(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=function(t){const e={};for(let i in t){const n=t[i];e[i]="function"==typeof n?{type:n}:n}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,c.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var h=i(0);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const u=window.ShadyCSS&&window.ShadyCSS.cssBuild,f=Object(r.a)(t=>{const e=p(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return"3.2.0"}static _finalizeClass(){super._finalizeClass();const t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);var e;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):n.b||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let o in t)e=this.prototype,i=o,n=t[o],r=t,n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(i)?console.warn(`Cannot redefine computed property '${i}'.`):e._createComputedProperty(i,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(i)?e._createReadOnlyProperty(i,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(i)&&console.warn(`Cannot make readOnly property '${i}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(i)?e._createReflectedProperty(i):!1===n.reflectToAttribute&&e._hasReflectEffect(i)&&console.warn(`Cannot make reflected property '${i}' non-reflected.`),n.notify&&!e._hasNotifyEffect(i)?e._createNotifyingProperty(i):!1===n.notify&&e._hasNotifyEffect(i)&&console.warn(`Cannot make notify property '${i}' non-notify.`),n.observer&&e._createPropertyObserver(i,n.observer,r[n.observer]),e._addPropertyToAttributeMap(i);var e,i,n,r}static createObservers(t,e){const i=this.prototype;for(let n=0;n<t.length;n++)i._createMethodObserver(t[n],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!n.g||n.a)&&(e=a.a.import(t,"template"),n.g&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.d,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let n=e[i];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;!function(t,e,i,n){if(!u){const r=e.content.querySelectorAll("style"),s=Object(o.c)(e),a=Object(o.b)(i),l=e.content.firstElementChild;for(let i=0;i<a.length;i++){let r=a[i];r.textContent=t._processStyleText(r.textContent,n),e.content.insertBefore(r,l)}let c=0;for(let e=0;e<s.length;e++){let i=s[e],o=r[c];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):c++,i.textContent=t._processStyleText(i.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i)}(this,e,t,i?Object(s.c)(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(h.a)(this);if(e.attachShadow)return t?(e.shadowRoot||e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(t),n.h&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,e,i){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,i)}static _addTemplatePropertyEffect(t,e,i){return n.b&&!(e in this._properties)&&console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`),super._addTemplatePropertyEffect(t,e,i)}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return U}));i(7);var n=i(0),r=i(10),o=i(2),s=i(23),a=i(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),c={"dom-if":!0,"dom-repeat":!0};function d(t){let e=t.getAttribute("is");if(e&&c[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function p(t,e){let i=e.parentInfo&&p(t,e.parentInfo);if(!i)return t;l.currentNode=i;for(let t=l.firstChild(),i=0;t;t=l.nextSibling())if(e.parentIndex===i++)return t}function h(t,e,i,n){n.id&&(e[n.id]=i)}function u(t,e,i){if(i.events&&i.events.length)for(let n,r=0,o=i.events;r<o.length&&(n=o[r]);r++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function f(t,e,i){i.templateInfo&&(e._templateInfo=i.templateInfo)}const _=Object(r.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let n,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(r,e,i)||n,l.currentNode=r,l.firstChild()&&(n=this._parseTemplateChildNodes(r,e,i)||n),r.hasAttributes&&r.hasAttributes()&&(n=this._parseTemplateNodeAttributes(r,e,i)||n),n}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName){l.currentNode=t;for(let n,r=l.firstChild(),o=0;r;r=n){if("template"==r.localName&&(r=d(r)),l.currentNode=r,n=l.nextSibling(),r.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,n=l.nextSibling(),t.removeChild(i),i=n;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let s={parentIndex:o,parentInfo:i};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),l.currentNode=r,l.parentNode()&&o++}}}static _parseTemplateNestedTemplate(t,e,i){let n=this._parseTemplate(t,e);return(n.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,i){let n=!1,r=Array.from(t.attributes);for(let o,s=r.length-1;o=r[s];s--)n=this._parseTemplateNodeAttribute(t,e,i,o.name,o.value)||n;return n}static _parseTemplateNodeAttribute(t,e,i,n,r){return"on-"===n.slice(0,3)?(t.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:r}),!0):"id"===n&&(i.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),i=e.nodeInfoList,n=e.content||t.content,r=document.importNode(n,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let o=r.nodeList=new Array(i.length);r.$={};for(let t,e=0,n=i.length;e<n&&(t=i[e]);e++){let i=o[e]=p(r,t);h(0,r.$,i,t),f(0,i,t),u(this,i,t)}return r=r,r}_addMethodEventListenerToNode(t,e,i,n){let r=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||t,0,i);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}});var m=i(5);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let b=0;const y={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},g=/[A-Z]/;function v(t,e){let i=t[e];if(i){if(!t.hasOwnProperty(e)){i=t[e]=Object.create(t[e]);for(let t in i){let e=i[t],n=i[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}}else i=t[e]={};return i}function w(t,e,i,n,r,o){if(e){let s=!1,a=b++;for(let l in i)x(t,e,a,l,i,n,r,o)&&(s=!0);return s}return!1}function x(t,e,i,n,r,s,a,l){let c=!1,d=e[a?Object(o.g)(n):n];if(d)for(let e,o=0,p=d.length;o<p&&(e=d[o]);o++)e.info&&e.info.lastRun===i||a&&!S(n,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,n,r,s,e.info,a,l),c=!0);return c}function S(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!Object(o.b)(i,t))||!(!e.wildcard||!Object(o.c)(i,t))}return!0}function C(t,e,i,n,r){let o="string"==typeof r.method?t[r.method]:r.method,s=r.property;o?o.call(t,t.__data[s],n[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function k(t,e,i){let n=Object(o.g)(e);if(n!==e){return P(t,Object(s.a)(n)+"-changed",i[e],e),!0}return!1}function P(t,e,i,r){let o={value:i,queueProperty:!0};r&&(o.path=r),Object(n.a)(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function E(t,e,i,n,r,s){let a=(s?Object(o.g)(e):e)!=e?e:null,l=a?Object(o.a)(t,a):t.__data[e];a&&void 0===l&&(l=i[e]),P(t,r.eventName,l,a)}function O(t,e,i,n,r){let o=t.__data[e];m.e&&(o=Object(m.e)(o,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,o)}function T(t,e,i,n,r){let o=R(t,e,i,n,r),s=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,o,!0):t[s]=o}function A(t,e,i,n,r,o,a){i.bindings=i.bindings||[];let l={kind:n,target:r,parts:o,literal:a,isCompound:1!==o.length};if(i.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(s.a)(r)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let i=0;i<l.parts.length;i++){let n=l.parts[i];n.compoundIndex=i,N(t,e,l,n,c)}}function N(t,e,i,n,r){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,s={index:r,binding:i,part:n,evaluator:t};for(let i=0;i<o.length;i++){let n=o[i];"string"==typeof n&&(n=F(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:M,info:s,trigger:n})}}}function M(t,e,i,n,r,s,a){let l=a[r.index],c=r.binding,d=r.part;if(s&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let n=i[e];e=Object(o.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,i,n,r){r=function(t,e,i,n){if(i.isCompound){let r=t.__dataCompoundStorage[i.target];r[n.compoundIndex]=e,e=r.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,i,n),m.e&&(r=Object(m.e)(r,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,r,i.target);else{let n=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[y.READ_ONLY]&&e[y.READ_ONLY][n]||e._setPendingProperty(n,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,r)}}(t,l,c,d,r.evaluator._evaluateBinding(t,d,e,i,n,s))}}function z(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n[t].literal;let o=e.target;i[o]=r,e.literal&&"property"==e.kind&&(t[o]=e.literal)}}function I(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,n,r){let s,a=t.detail,l=a&&a.path;l?(n=Object(o.i)(i,n,l),s=a&&a.value):s=t.currentTarget[i],s=r?!s:s,e[y.READ_ONLY]&&e[y.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,s,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,i.target,n.source,n.negate)}))}}function L(t,e,i,n,r,o){o=e.static||o&&("object"!=typeof o||o[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:o};for(let r,o=0;o<e.args.length&&(r=e.args[o]);o++)r.literal||t._addPropertyEffect(r.rootProperty,i,{fn:n,info:s,trigger:r});o&&t._addPropertyEffect(e.methodName,i,{fn:n,info:s})}function R(t,e,i,n,r){let o=t._methodHost||t,s=o[r.methodName];if(s){let n=t._marshalArgs(r.args,e,i);return s.apply(o,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const j=[],D=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function H(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function B(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:j};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=F(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function F(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=Object(o.g)(e),i.structured=Object(o.d)(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function V(t,e,i){let n=Object(o.a)(t,i);return void 0===n&&(n=e[i]),n}function $(t,e,i,n){t.notifyPath(i+".splices",{indexSplices:n}),t.notifyPath(i+".length",e.length)}function q(t,e,i,n,r,o){$(t,e,i,[{index:n,addedCount:r,removed:o,object:e,type:"splice"}])}const U=Object(r.a)(t=>{const e=_(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return y}_initializeProperties(){super._initializeProperties(),Y.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[y.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==y.READ_ONLY);let n=v(this,e)[t];n||(n=this[e][t]=[]),n.push(i)}_removePropertyEffect(t,e,i){let n=v(this,e)[t],r=n.indexOf(i);r>=0&&n.splice(r,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,y.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,y.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,y.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,y.COMPUTE)}_setPendingPropertyOrPath(t,e,i,n){if(n||Object(o.g)(Array.isArray(t)?t[0]:t)!==t){if(!n){let i=Object(o.a)(this,t);if(!(t=Object(o.h)(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let n=t.__dataLinkedPaths;if(n){let r;for(let s in n){let a=n[s];Object(o.c)(s,e)?(r=Object(o.i)(s,a,e),t._setPendingPropertyOrPath(r,i,!0,!0)):Object(o.c)(a,e)&&(r=Object(o.i)(a,s,e),t._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||(t[e]=i)}_setPendingProperty(t,e,i){let n=this.__dataHasPaths&&Object(o.d)(t),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[y.NOTIFY]&&this[y.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[y.READ_ONLY]&&this[y.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,i,n){let r=t[y.COMPUTE];if(r){let o=e;for(;w(t,r,o,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}(this,e,i,n);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,i,n),this._flushClients(),w(this,this[y.REFLECT],e,i,n),w(this,this[y.OBSERVE],e,i,n),r&&function(t,e,i,n,r){let o,s,a=t[y.NOTIFY],l=b++;for(let s in e)e[s]&&(a&&x(t,a,l,s,i,n,r)||r&&k(t,s,i))&&(o=!0);o&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,e,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[y.PROPAGATE]&&w(this,this[y.PROPAGATE],t,e,i);let n=this.__templateInfo;for(;n;)w(this,n.propertyEffects,t,e,i,n.nodeList),n=n.nextTemplateInfo}linkPaths(t,e){t=Object(o.f)(t),e=Object(o.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(o.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};$(this,Object(o.a)(this,t,i),i.path,e)}get(t,e){return Object(o.a)(e||this,t)}set(t,e,i){i?Object(o.h)(i,t,e):this[y.READ_ONLY]&&this[y.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},n=Object(o.a)(this,t,i),r=n.length,s=n.push(...e);return e.length&&q(this,n,i.path,r,e.length,[]),s}pop(t){let e={path:""},i=Object(o.a)(this,t,e),n=Boolean(i.length),r=i.pop();return n&&q(this,i,e.path,i.length,0,[r]),r}splice(t,e,i,...n){let r,s={path:""},a=Object(o.a)(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?a.splice(e):a.splice(e,i,...n),(n.length||r.length)&&q(this,a,s.path,e,n.length,r),r}shift(t){let e={path:""},i=Object(o.a)(this,t,e),n=Boolean(i.length),r=i.shift();return n&&q(this,i,e.path,0,0,[r]),r}unshift(t,...e){let i={path:""},n=Object(o.a)(this,t,i),r=n.unshift(...e);return e.length&&q(this,n,i.path,0,e.length,[]),r}notifyPath(t,e){let i;if(1==arguments.length){let n={path:""};e=Object(o.a)(this,t,n),i=n.path}else i=Array.isArray(t)?Object(o.f)(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,y.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let n={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,y.OBSERVE,{fn:C,info:n,trigger:{name:t}}),i&&this._addPropertyEffect(e,y.OBSERVE,{fn:C,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let i=B(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");L(this,i,y.OBSERVE,R,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,y.NOTIFY,{fn:E,info:{eventName:Object(s.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,y.REFLECT,{fn:O,info:{attrName:e}})}_createComputedProperty(t,e,i){let n=B(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");L(this,n,y.COMPUTE,T,t,i)}_marshalArgs(t,e,i){const n=this.__data,r=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:l,wildcard:c,value:d,literal:p}=t[s];if(!p)if(c){const t=Object(o.c)(a,e),r=V(n,i,t?e:a);d={path:t?e:a,value:r,base:t?Object(o.a)(n,a):r}}else d=l?V(n,i,a):n[a];r[s]=d}return r}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),n=this.__templateInfo==i;if(!n)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e&&(i=Object.create(i),i.wasPreBound=n,!n&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=i,i.previousTemplateInfo=t,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(i)}_stampTemplate(t){Y.beginHosting(this);let e=super._stampTemplate(t);Y.endHosting(this);let i=this._bindTemplate(t,!0);if(i.nodeList=e.nodeList,!i.wasPreBound){let t=i.childNodes=[];for(let i=e.firstChild;i;i=i.nextSibling)t.push(i)}return e.templateInfo=i,function(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let r=n[e],o=i[e],s=r.bindings;if(s)for(let e=0;e<s.length;e++){let i=s[e];z(o,i),I(o,t,i)}o.__dataHost=t}}(this,i),this.__dataReady&&w(this,i.propertyEffects,this.__data,null,!1,i.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,i){let n=super._parseTemplateNode(t,e,i);if(t.nodeType===Node.TEXT_NODE){let r=this._parseBindings(t.textContent,e);r&&(t.textContent=H(r)||" ",A(this,e,i,"text","textContent",r),n=!0)}return n}static _parseTemplateNodeAttribute(t,e,i,n,r){let o=this._parseBindings(r,e);if(o){let r=n,a="property";g.test(n)?a="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),a="attribute");let l=H(o);return l&&"attribute"==a&&("class"==n&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(n)),t.setAttribute(n,l)),"input"===t.localName&&"value"===r&&t.setAttribute(r,""),t.removeAttribute(r),"property"===a&&(n=Object(s.b)(n)),A(this,e,i,a,n,o,l),!0}return super._parseTemplateNodeAttribute(t,e,i,n,r)}static _parseTemplateNestedTemplate(t,e,i){let n=super._parseTemplateNestedTemplate(t,e,i),r=i.templateInfo.hostProps;for(let t in r){A(this,e,i,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return n}static _parseBindings(t,e){let i,n=[],r=0;for(;null!==(i=D.exec(t));){i.index>r&&n.push({literal:t.slice(r,i.index)});let o=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,c="",d=-1;"{"==o&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let p=B(a),h=[];if(p){let{args:t,methodName:i}=p;for(let e=0;e<t.length;e++){let i=t[e];i.literal||h.push(i)}let n=e.dynamicFns;(n&&n[i]||p.static)&&(h.push(i),p.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:o,negate:s,customEvent:l,signature:p,dependencies:h,event:c}),r=D.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,i,n,r,s){let a;return a=e.signature?R(t,i,n,0,e.signature):i!=e.source?Object(o.a)(t,e.source):s&&Object(o.d)(i)?Object(o.a)(t,i):t.__data[i],e.negate&&(a=!a),a}}});const Y=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));i(7);var n=i(18),r=i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o={},s={};function a(t,e){o[t]=s[t.toLowerCase()]=e}function l(t){return o[t]||s[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=l(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,n){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(n.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(n.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(r.g&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=o,customElements.define("dom-module",c)},function(t,e,i){"use strict";i.d(e,"a",(function(){return pt}));var n=i(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(t){return function t(e,i){let n=i.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=i.substring(t,e.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(n),n=n.replace(d.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=n.trim();e.atRule=0===r.indexOf(u),e.atRule?0===r.indexOf(h)?e.type=a.MEDIA_RULE:r.match(d.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===r.indexOf(p)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let r=e.rules;if(r)for(let e,n=0,o=r.length;n<o&&(e=r[n]);n++)t(e,i);return e}(function(t){let e=new r;e.start=0,e.end=t.length;let i=e;for(let n=0,o=t.length;n<o;n++)if(t[n]===l){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new r,i.start=n+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[n]===c&&(i.end=n+1,i=i.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function s(t,e,i=""){let n="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(p)}(i))for(let t,r=0,o=i.length;r<o&&(t=i[r]);r++)n=s(t,e,n);else n=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(t.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(t.selector&&(i+=t.selector+" "+l+"\n"),i+=n,t.selector&&(i+=c+"\n\n")),i}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},p="--",h="@media",u="@";var f=i(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _=new Set;function m(t){const e=t.textContent;if(!_.has(e)){_.add(e);const i=t.cloneNode(!0);document.head.appendChild(i)}}function b(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function y(t,e){return t?("string"==typeof t&&(t=o(t)),e&&v(t,e),s(t,n.c)):""}function g(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=o(t.textContent)),t.__cssRules||null}function v(t,e,i,n){if(!t)return;let r=!1,o=t.type;if(n&&o===a.MEDIA_RULE){let e=t.selector.match(f.a);e&&(window.matchMedia(e[1]).matches||(r=!0))}o===a.STYLE_RULE?e(t):i&&o===a.KEYFRAMES_RULE?i(t):o===a.MIXIN_RULE&&(r=!0);let s=t.rules;if(s&&!r)for(let t,r=0,o=s.length;r<o&&(t=s[r]);r++)v(t,e,i,n)}function w(t,e){let i=0;for(let n=e,r=t.length;n<r;n++)if("("===t[n])i++;else if(")"===t[n]&&0==--i)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function x(t){if(void 0!==n.a)return n.a;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function S(t){return""!==x(t)}var C=i(27);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k=/;\s*/m,P=/^\s*(initial)|(inherit)\s*$/,E=/\s*!important/;class O{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let T=null;class A{constructor(){this._currentElement=null,this._measureElement=null,this._map=new O}detectMixin(t){return Object(C.a)(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const r=i[t];b(r)?n.d||(m(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=g(t);return this.transformRules(i,e),t.textContent=y(i),i}transformCustomStyle(t){let e=g(t);return v(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=y(e),e}transformRules(t,e){this._currentElement=e,v(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(f.c,(t,i,n,r)=>this._produceCssProperties(t,i,n,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let n=!1;return v(e,e=>{n=n||e===t,n||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=f.b.exec(t);){let n=i[0],r=i[1],o=i.index,s=o+n.indexOf("@apply"),a=o+n.length,l=t.slice(0,s),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let p=this._atApplyToCssProperties(r,d);t=`${l}${p}${c}`,f.b.lastIndex=o+p.length}return t}_atApplyToCssProperties(t,e){t=t.replace(k,"");let i=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let r,o,s;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(r in a)s=e&&e[r],o=[r,": var(",t,"_-_",r],s&&o.push(",",s.replace(E,"")),o.push(")"),E.test(a[r])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=P.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,n,r=t.split(";"),o={};for(let t,s,a=0;a<r.length;a++)t=r[a],t&&(s=t.split(":"),s.length>1&&(i=s[0].trim(),n=s.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(i,n)),o[i]=n));return o}_invalidateMixinEntry(t){if(T)for(let e in t.dependants)e!==this._currentElement&&T(e)}_produceCssProperties(t,e,i,n,r){if(i&&function t(e,i){let n=e.indexOf("var(");if(-1===n)return i(e,"","","");let r=w(e,n+3),o=e.substring(n+4,r),s=e.substring(0,n),a=t(e.substring(r+1),i),l=o.indexOf(",");return-1===l?i(s,o.trim(),"",a):i(s,o.substring(0,l).trim(),o.substring(l+1).trim(),a)}(i,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let o=this._consumeCssProperties(""+n,r),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let p,h,u=[],f=!1;for(p in l)h=a[p],void 0===h&&(h="initial"),d&&!(p in d)&&(f=!0),u.push(`${e}_-_${p}: ${h}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(s=`${t};${s}`),`${s}${u.join("; ")};`}}A.prototype.detectMixin=A.prototype.detectMixin,A.prototype.transformStyle=A.prototype.transformStyle,A.prototype.transformCustomStyle=A.prototype.transformCustomStyle,A.prototype.transformRules=A.prototype.transformRules,A.prototype.transformRule=A.prototype.transformRule,A.prototype.transformTemplate=A.prototype.transformTemplate,A.prototype._separator="_-_",Object.defineProperty(A.prototype,"invalidCallback",{get:()=>T,set(t){T=t}});var N=A;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var M={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const z="_applyShimCurrentVersion",I="_applyShimNextVersion",L=Promise.resolve();function R(t){let e=M[t];e&&function(t){t[z]=t[z]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[I]=(t[I]||0)+1}(e)}function j(t){return t[z]===t[I]}function D(t){return!j(t)&&t._applyShimValidatingVersion===t[I]}function H(t){t._applyShimValidatingVersion=t[I],t._validating||(t._validating=!0,L.then((function(){t[z]=t[I],t._validating=!1})))}i(45);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const B=new N;class F{constructor(){this.customStyleInterface=null,B.invalidCallback=R}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{B.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),S(t))return;M[e]=t;let i=B.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&B.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(C.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}(t),i=M[e];if((!i||!S(i))&&i&&!j(i)){D(i)||(this.prepareTemplate(i,e),H(i));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=y(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new F;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,n){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(C.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:n.c,nativeShadow:n.d,cssBuild:n.a,disableRuntime:n.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=B;var V=i(30),$=i(39),q=i(37),U=i(10);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Y=/:host\(:dir\((ltr|rtl)\)\)/g,K=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,W=/:dir\((?:ltr|rtl)\)/,J=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),G=[];let X=null,Z="";function Q(){Z=document.documentElement.getAttribute("dir")}function tt(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Z)}}function et(){Q(),Z=document.documentElement.getAttribute("dir");for(let t=0;t<G.length;t++)tt(G[t])}const it=Object(U.a)(t=>{J||X||(Q(),X=new MutationObserver(et),X.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(q.a)(t);class i extends e{static _processStyleText(t,e){return t=super._processStyleText(t,e),!J&&W.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(Y,':host([dir="$1"])'),e=e.replace(K,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(X&&X.takeRecords().length&&et(),G.push(this),tt(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=G.indexOf(this);t>-1&&G.splice(t,1)}}}return i.__activateDir=!1,i});i(44);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function nt(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?nt():window.addEventListener("DOMContentLoaded",nt);var rt=i(4),ot=i(36),st=i(16),at=i(12),lt=i(2),ct=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let dt=window.ShadyCSS;const pt=Object(U.a)(t=>{const e=it(Object($.a)(Object(V.a)(t))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,i,n){e!==i&&(super.attributeChangedCallback(t,e,i,n),this.attributeChanged(t,e,i))}attributeChanged(t,e,i){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let n,r=0;r<i.length&&(n=i[r]);r++){let i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=e;let r=i.node||this;return Object(ct.a)(r).dispatchEvent(n),n}listen(t,e,i){t=t||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),r=n.get(t);r||(r={},n.set(t,r));let o=e+i;r[o]||(r[o]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let n=this.__boundListeners&&this.__boundListeners.get(t),r=e+i,o=n&&n[r];o&&(this._removeEventListenerFromNode(t,e,o),n[r]=null)}setScrollDirection(t,e){Object(ot.c)(e||this,i[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(ct.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(rt.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(rt.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(rt.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,n=0;i=t[n];n++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(rt.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(ct.a)(this).contains(t)&&Object(ct.a)(this).getRootNode()===Object(ct.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(ct.a)(t).getRootNode()}scopeSubtree(t,e){}getComputedStyleValue(t){return dt.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=st.a.debounce(this._debouncers[t],i>0?at.c.after(i):at.b,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?at.c.run(t.bind(this),e):~at.b.run(t.bind(this))}cancelAsync(t){t<0?at.b.cancel(~t):at.c.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return Object(rt.b)(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(Object(ct.a)(i).setAttribute(t,""),!0):(Object(ct.a)(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,n){n=n||this,this.transform("translate3d("+t+","+e+","+i+")",n)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else{if(i=Object(lt.a)(this,t).indexOf(e),i>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return n.prototype.is="",n})},function(t,e,i){"use strict";i(6);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const n=i(3).a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content);var r=document.createElement("style");r.textContent="[hidden] { display: none !important; }",document.head.appendChild(r)},function(t,e,i){"use strict";i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return d})),i.d(e,"a",(function(){return h}));var n=i(32),r=i(18);function o(t){return n.a.import(t)}function s(t){let e=t.body?t.body:t;const i=Object(r.b)(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function a(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...l(e[t]));return i}function l(t){const e=o(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...p(e));const i=e.querySelector("template");i&&t.push(...c(i,e.assetpath)),e._styles=t}return e._styles}function c(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let o=n[t],s=o.getAttribute("include");s&&i.push(...a(s).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(o.textContent=Object(r.b)(o.textContent,e)),i.push(o)}t._styles=i}return t._styles}function d(t){let e=o(t);return e?p(e):[]}function p(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let n=i[t];if(n.import){const t=n.import,i=n.hasAttribute("shady-unscoped");if(i&&!t._unscopedStyle){const e=s(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=s(t));e.push(i?t._unscopedStyle:t._style)}}return e}function h(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=u(e[t]);return i}function u(t){let e=o(t);if(e&&void 0===e._cssText){let t=f(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const n=c(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function f(t){let e="",i=p(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}},function(t,e,i){"use strict";i.d(e,"a",(function(){return M})),i.d(e,"b",(function(){return z})),i.d(e,"c",(function(){return L}));i(7);var n=i(12),r=i(16),o=i(5),s=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],p=[0,1,4,2],h=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function u(t){return d.indexOf(t)>-1}let f=!1;function _(t){if(!u(t)&&"touchend"!==t)return a&&f&&o.c?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){f=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let m=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const b=[],y={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},g={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function v(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let w=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){let e=!1,n=E(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)b.push(n[t]);else if(i=n[t],y[i.localName]){let i=v(n[t]);for(let t=0;t<i.length;t++)e=e||b.indexOf(i[t])>-1}if(n[t]===C.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function x(t){let e=m?["click"]:d;for(let i,n=0;n<e.length;n++)i=e[n],t?(b.length=0,document.addEventListener(i,w,!0)):document.removeEventListener(i,w,!0)}function S(t){let e=t.type;if(!u(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!h&&(e=p[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let C={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function k(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function P(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){C.mouse.mouseIgnoreJob||x(!0),C.mouse.target=E(t)[0],C.mouse.mouseIgnoreJob=r.a.debounce(C.mouse.mouseIgnoreJob,n.c.after(2500),(function(){x(),C.mouse.target=null,C.mouse.mouseIgnoreJob=null}))}),!!f&&{passive:!0});const E=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],O={},T=[];function A(t){const e=E(t);return e.length>0?e[0]:t.target}function N(t){let e,i=t.type,n=t.currentTarget.__polymerGestures;if(!n)return;let r=n[i];if(r){if(!t[l]&&(t[l]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(C.touch.id=e.identifier),C.touch.id!==e.identifier)return;a||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)C.touch.x=e.clientX,C.touch.y=e.clientY,C.touch.scrollDecided=!1;else if("touchmove"===i){if(C.touch.scrollDecided)return;C.touch.scrollDecided=!0;let i=function(t){let e="auto",i=E(t);for(let t,n=0;n<i.length;n++)if(t=i[n],t[c]){e=t[c];break}return e}(t),n=!1,r=Math.abs(C.touch.x-e.clientX),o=Math.abs(C.touch.y-e.clientY);t.cancelable&&("none"===i?n=!0:"pan-x"===i?n=o>r:"pan-y"===i&&(n=r>o)),n?t.preventDefault():j("track")}}(t)}if(e=t[l],!e.skip){for(let i,n=0;n<T.length;n++)i=T[n],r[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let n,o=0;o<T.length;o++)n=T[o],r[n.name]&&!e[n.name]&&(e[n.name]=!0,n[i](t))}}}function M(t,e,i){return!!O[e]&&(function(t,e,i){let n=O[e],r=n.deps,o=n.name,s=t.__polymerGestures;s||(t.__polymerGestures=s={});for(let e,i,n=0;n<r.length;n++)e=r[n],m&&u(e)&&"click"!==e||(i=s[e],i||(s[e]=i={_count:0}),0===i._count&&t.addEventListener(e,N,_(e)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),n.touchAction&&L(t,n.touchAction)}(t,e,i),!0)}function z(t,e,i){return!!O[e]&&(function(t,e,i){let n=O[e],r=n.deps,o=n.name,s=t.__polymerGestures;if(s)for(let e,i,n=0;n<r.length;n++)e=r[n],i=s[e],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,N,_(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function I(t){T.push(t);for(let e=0;e<t.emits.length;e++)O[t.emits[e]]=t}function L(t,e){a&&t instanceof HTMLElement&&n.b.run(()=>{t.style.touchAction=e}),t[c]=e}function R(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,Object(s.a)(t).dispatchEvent(n),n.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function j(t){let e=function(t){for(let e,i=0;i<T.length;i++){e=T[i];for(let i,n=0;n<e.emits.length;n++)if(i=e.emits[n],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function D(t,e,i,n){e&&R(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(t){return j(t)}})}function H(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),r=Math.abs(t.y-i);return n>=5||r>=5}function B(t,e,i){if(!e)return;let n,r=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],s=o.x-t.x,a=o.y-t.y,l=0;r&&(n=o.x-r.x,l=o.y-r.y),R(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(t,e),r===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function F(t,e,i){let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),o=A(i||e);!o||g[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=25&&r<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=A(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(e))&&(t.prevent||R(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}I({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){P(this.info)},mousedown:function(t){if(!S(t))return;let e=A(t),i=this;k(this.info,(function(t){S(t)||(D("up",e,t),P(i.info))}),(function(t){S(t)&&D("up",e,t),P(i.info)})),D("down",e,t)},touchstart:function(t){D("down",A(t),t.changedTouches[0],t)},touchend:function(t){D("up",A(t),t.changedTouches[0],t)}}),I({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,P(this.info)},mousedown:function(t){if(!S(t))return;let e=A(t),i=this,n=function(t){let n=t.clientX,r=t.clientY;H(i.info,n,r)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&j("tap"),i.info.addMove({x:n,y:r}),S(t)||(i.info.state="end",P(i.info)),e&&B(i.info,e,t),i.info.started=!0)};k(this.info,n,(function(t){i.info.started&&n(t),P(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=A(t),i=t.changedTouches[0],n=i.clientX,r=i.clientY;H(this.info,n,r)&&("start"===this.info.state&&j("tap"),this.info.addMove({x:n,y:r}),B(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=A(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),B(this.info,e,i))}}),I({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){S(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){S(t)&&F(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){F(this.info,t.changedTouches[0],t)}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i(7);var n=i(10),r=i(23),o=i(38);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)s[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(n.a)(t=>{const e=Object(o.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(r.b)(t[e]))}static attributeNameForProperty(t){return Object(r.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!s[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(7);var n=i(10),r=i(12),o=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=r.b,a=Object(n.a)(t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let n=this.__data[t],r=this._shouldPropertyChange(t,e,n);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i))}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,n){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,n)}_attributeToProperty(t,e,i){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[t]||t;this[r]=this._deserializeValue(e,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const n=this._serializeValue(e);void 0===n?t.removeAttribute(i):("class"!==i&&"name"!==i&&"slot"!==i||(t=Object(o.a)(t)),t.setAttribute(i,n))}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(7);var n=i(10),r=i(36);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=Object(n.a)(t=>class extends t{_addEventListenerToNode(t,e,i){Object(r.a)(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){Object(r.b)(t,e,i)||super._removeEventListenerFromNode(t,e,i)}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t,e,i){return{index:t,removed:e,addedCount:i}}function r(t,e,i,r,o,a){let l,c=0,d=0,p=Math.min(i-e,a-o);if(0==e&&0==o&&(c=function(t,e,i){for(let n=0;n<i;n++)if(!s(t[n],e[n]))return n;return i}(t,r,p)),i==t.length&&a==r.length&&(d=function(t,e,i){let n=t.length,r=e.length,o=0;for(;o<i&&s(t[--n],e[--r]);)o++;return o}(t,r,p-c)),o+=c,a-=d,(i-=d)-(e+=c)==0&&a-o==0)return[];if(e==i){for(l=n(e,[],0);o<a;)l.removed.push(r[o++]);return[l]}if(o==a)return[n(e,[],i-e)];let h=function(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],r=[];for(;e>0||i>0;){if(0==e){r.push(2),i--;continue}if(0==i){r.push(3),e--;continue}let o,s=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];o=a<l?a<s?a:s:l<s?l:s,o==s?(s==n?r.push(0):(r.push(1),n=s),e--,i--):o==a?(r.push(3),e--,n=a):(r.push(2),i--,n=l)}return r.reverse(),r}(function(t,e,i,n,r,o){let a=o-r+1,l=i-e+1,c=new Array(a);for(let t=0;t<a;t++)c[t]=new Array(l),c[t][0]=t;for(let t=0;t<l;t++)c[0][t]=t;for(let i=1;i<a;i++)for(let o=1;o<l;o++)if(s(t[e+o-1],n[r+i-1]))c[i][o]=c[i-1][o-1];else{let t=c[i-1][o]+1,e=c[i][o-1]+1;c[i][o]=t<e?t:e}return c}(t,e,i,r,o,a));l=void 0;let u=[],f=e,_=o;for(let t=0;t<h.length;t++)switch(h[t]){case 0:l&&(u.push(l),l=void 0),f++,_++;break;case 1:l||(l=n(f,[],0)),l.addedCount++,f++,l.removed.push(r[_]),_++;break;case 2:l||(l=n(f,[],0)),l.addedCount++,f++;break;case 3:l||(l=n(f,[],0)),l.removed.push(r[_]),_++}return l&&u.push(l),u}function o(t,e){return r(t,0,t.length,e,0,e.length)}function s(t,e){return t===e}},function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"f",(function(){return o})),i.d(e,"e",(function(){return s})),i.d(e,"a",(function(){return a})),i.d(e,"d",(function(){return l})),i.d(e,"b",(function(){return c}));var n=i(8);const r=n.b`

  * {
    box-sizing: border-box;
  }

  :host {
    display:block;
    width: 100%;
  }

  custom-accordion{
    width: 100%;
    background: var(--primary-background-color);
  }

  custom-accordion:not(:last-of-type){
    border-bottom: 1px solid var(--divider-color);
  }

  custom-accordion:first-of-type{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  custom-accordion:last-of-type {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }



  custom-accordion.active, custom-accordion:hover {
    border-bottom: none;
  }


  /*paper-input,paper-dropdown-menu, paper-textarea{
    --paper-input-container-focus-color: var( --app-primary-color);
  }*/

  paper-input, paper-dropdown-menu {
    width: 45%;
  }

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 0 25px 12.5px;
    height: 100%;
    width: auto;
    -webkit-overflow-scrolling: touch;
  }

  paper-textarea{
    width: auto;
    flex-grow: 1;
    max-width: 100%;
    width: 90%;
  }

  custom-radio-group{
    width: 100%;
  }

  .h-hack{
    flex: 0 1 25%;
    min-width: 0;
  }


  .h-layout {
    flex: 0 1 45%;
    min-width: 0;
    background: blue;
  }

  /*
  paper-input:nth-child(n+1), paper-dropdown-menu:nth-child(n+1) {
    margin-left:4.5%;
  }*/

  .controls {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 25px;
  }

  .controls button{
    width:25%;
    margin:auto;
    padding-top:1.5em;
    border-radius: 8px;
  }

  span {
    width: 24px;
    height: 24px;
  }

  .contactos{
    width: 75%;
    margin: 10px auto;
    box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
    min-height: 0;
    border-radius: 5px;
  }

  .contactos div{
    height: 40px;
    background: var(--secondary-background-color);
  }

  .contactos div:first-of-type{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .contactos div:last-of-type{
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .contactos div:not(:last-of-type){
    border-bottom: 1px solid var(--divider-color);
  }

  .contactos div:hover{
    box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
    background-color:white;
  }

  .contactos div button{
    box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
    font-size: 0.8em;
    border-radius: 15px;
    height: 20px;
    width: 20px;
  }

  label {
    padding: 8px;
    line-height: 1.74;
    display: inline-block;
    width: auto;
  }

  button {
    float: right;
    margin: 10px;
    box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
  }

  button:hover{
    color: var(--primary-text-color);
  }

  .primary {
    background-color:var(--dark-primary-color);
    color:white;
    font-weight: 600;
  }

  .primary span svg{
    fill:white;
  }

  .hidden{
    display: none;
  }

  @media (max-width:840px){
    form {
      flex-direction: column;
    }

    paper-input, paper-dropdown-menu, custom-radio-group {
      flex: 1;
      width: 90%;
      max-width: 90%;
    }

    .contactos{
      width: 100%;
    }
  }
  `,o=n.b`
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Josefin Slab', serif;
    width: 100%;
    text-align: center;
    margin: 0 auto 10px auto;
    padding: 0;
    font-weight: 100;
    color: var(--dark-primary-color);
    padding: 8px;
  }

  h1 { font-size: 6em; }
  h2 { font-size: 3.75em; }
  h3 { font-size: 3em; }
  h4 { font-size: 2.125em; }
  h5 { font-size: 1.5em; }
  h6 { font-size: 1.25em; }
  .subtitle-1 { font-size: 1em; }
  .subtitle-2 { font-size: 0.875em; }

  :host {
    display: block;
    box-sizing: border-box;
  }

  * {
      box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: content-box;
    text-align: justify;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
   }

  section > * {
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 840px) {

    h1 {
      font-size: 5.625em;
    }

    h2 {
      font-size: 3.750em;
    }

    section {
      max-width: 100vw;
    }

    section > * {
      width: 80%;
      margin:auto;
    }
  }

  @media (max-width: 460px){

    section {
      max-width: 95vw;
      margin: auto;
      padding: 0;
    }

  }

  @media screen and (max-width:460){

    section, section > * {
      max-width: 460px;
    }

  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--secondary-background-color);
    color: var(--accent-color);
    font-size: 30px;
    line-height: 64px;
  }
  `,s=(n.b`

  * { box-sizing: border-box; }

  :host{
    display: block;
    width: 95%;
    height: auto;
    margin: auto;
    margin-bottom: 12.5px;
  }

  main {
    background:white;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 10px;
    box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
  }

  span {
    width: 150px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .codigo {
    position: absolute;
    top: 20px;
    right: 40px;
    color: red;
    font-size: 1.75em;
    font-weight: 900;
  }

  .information {
    width: 100%;
    display: flex;
    padding-top: 8px;
  }

  .information label{
    font-size: 14px;
    text-align: left !important;
    padding-top: 20px;
    display: block;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
  }

  .information paper-input, .information label{
    width: 30%;
    margin-left: auto;
    text-align:center;
  }

  .information paper-input:nth-child(n+2),.information label:nth-child(n+2){
    width: 30%;
  }

  div > p {
  margin: 0;
  padding: 0;
  font-size: 10px;
  text-align: center;
  }

  p > strong{
    padding: 0 6px 0 2px;
  }

  h4{
    position: absolute;
    top: 0;
    left: 25px;
    margin: 0;
    font-size: 16px;
    font-family:var(--app-font-family);
  }

  @media print{
    main { box-shadow: 0 0 0 0 transparent; }
  }`,n.b`
  :host {
    display:block;
    position:relative;
    width: 75%;
    border-radius: 5px;
    background: var(--light-secondary-color);
    /*background: var(--secondary-background-color); #005662
    background: var(--secondary-background-color);*/
    margin: 25px auto 12.5px auto;
    padding: 12.5px 0;
    box-shadow: var(--shadow-box-4dp-custom);
    transition: transform 250ms, box-shadow 500ms;
  }

  :host(:hover){
    box-shadow: var(--shadow-box-8dp-custom);
    transform: translateY(-5px);
  }

  :host(:hover[selected="true"]) {
    transform: none;
  }

  @media (max-width:840px){

    :host {
      margin: 12.5px auto;
      width: 97.5%;
    }
  }

  button {
    background-color: #029192;
    border-radius: 50px;
  }

  .submit-btn, .cancel-btn{
    background-color: var(--dark-primary-color);
    border: 1px solid var(--dark-primary-color);
    color: white;
    display: none;
    width: 180px;
    margin: auto;
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.25;
    vertical-align: top;
  }

  .cancel-btn {
    background: white;
    display: inline-block;
    color: var(--dark-primary-color);
    width:auto;
  }

  .cancel-btn span, .submit-btn span{
    fill: var(--dark-primary-color);
    padding: 0 4px;
    vertical-align: text-bottom;
    display: inline-block;
  }

  .submit-btn span { fill: var(--text-primary-color); }

  section {
    position: relative;
    z-index: 10;
    padding: 12.5px;
    margin-left: 25%;
    width: 60%;
  }

  section > * {
    width: 100%;
    text-align:left;
  }

  section > *:not(div){
    display:none;
  }

  section.active label{
    display:none;
  }

  section.active custom-accordion label{
    display:block;
  }

  section.active *:not(label){
    display: block;
  }

  section.active {
    border-top: 2.5px solid var(--dark-primary-color);
    height: auto;
    width: 75%;
    margin-left: 50%;
    margin-top: 25px;
    margin-bottom: 25px;
    transform: translateX(-50%);
    box-shadow: var(--shadow-elevation-3dp_-_box-shadow);
    background: var(--primary-background-color);
    border-radius: 5px;
    transition-property: transform, background;
    transition: all linear 250ms;
  }

  /*
  label.index:hover{
    transform: rotate3d(1,0,0,60deg);
  }*/

  section > div *, section > div {
    cursor: pointer;
    color: var(--secondary-text-color);
  }

  section > div.active {
    color: var(--accent-color);
  }

  label.index,.close{
    background: var(--secondary-text-color);
    color: white;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    font-size: 1.5em;
    vertical-align: top;
    outline: none;
    border: none;
    display: inline-block;
    text-align: center;
    box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
    line-height: 2;
    position: relative;
    z-index: 10;
  }

  label.index:after{
    content : "";
    display: block;
    position: absolute;
    left: 19px;
    height: 48px;
    width: 2px;
    border-radius: 5px;
    background: inherit;
    z-index: 5;
  }

  .visited > label.index, .visited button.close {
    background: var(--accent-color);
  }

  .visited{
    color: var(--accent-color);
  }

  label.index.last:after{
    content: none;
  }

  label {
    display: inline-block;
  }

  label.index + label {
    font-size: 2.125em;
    font-family: 'Josefin Sans', sans-serif;
    padding: 0 16px;
    color: inherit;
    font-weight: 200;
  }


  button.close {
    margin-left:90%;
    fill: white;
    padding: 2px 8px;
    display:none;
  }

  span { width: 24px; height: 24px; }

  @media (max-width:840px){

    section.active{
      width: 90%;
    }

    section {
      padding: 5px;
      position: relative;
      z-index: 10;
      width: 92.5%;
      text-align:center;
      margin: 12.5px auto;
    }

    section > * {
      text-align:left;
      margin: auto;
    }

    button.close {
      margin-left: 87.5%;
    }

    label.index,.close{
      width: 45px;
      height: 45px;
      line-height: 2;
    }
  }`),a=(n.b`
  :host([edit-form]){
    width: 85vw;
  }
  :host([edit-form]) paper-button{
    display:none;
  }

  :host([edit-form]) paper-input, :host([edit-form]) .contactos{
    width: 45%;
    display: inline-block;
  }

  :host([edit-form]) form, :host([edit-form]) h1 {
    padding: 0;
    margin: 0;
  }
`,n.b`
  *{ box-sizing: border-box; }

  .cbox-container {
    display: inline-block;
    position: relative;
    padding: 2.5px 0 0 35px;
    margin: 10px;
    margin-top: 0;
    cursor: pointer;
    font-size: 1.143em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--secondary-text-color);
  }

  .cbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 2.5px;
    border: 2px solid var(--dark-primary-color);
    background-color: var(--light-secondary-color);
    transition: background 0.25s linear, border 0.25 linear;
  }

  .cbox-container:hover input ~ .checkmark {
    background-color: var(--light-secondary-color);
  }


  .cbox-container input:checked ~ .checkmark {
    background-color: var( --dark-primary-color);
    animation: ripple 0.3s linear normal;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .cbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  .cbox-container .checkmark:after {
    left: 6.5px;
    top: 2.5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    transition: all 250ms ease;
  }`,n.b`
  .dark-theme paper-input, .dark-theme paper-dropdown-menu {
    margin-bottom: 14px;
    --primary-text-color: #f6f6f6;
    --paper-input-container-color: #fff;
    --paper-input-container-focus-color: #fff;
    --paper-input-container-invalid-color: red;
    --paper-input-container-label-floating: #f6f6f6;
    --paper-input-container-label-focus: #fff;
    --paper-input-container-label-floating : #fff;
    --paper-input-container-underline-focus: #fff;
    --paper-font-caption_-_font-family : var(--app-font-family);
    --primary-background-color: var(--app-secondary-color, black);
    --primary-text-color: #fff;
  }

  paper-button span svg {
    fill: white;
  }`,n.b`

:host{
  --accordion-background-color: var(--dark-primary-color);
  display: block;
}

* { box-sizing: border-box; }

.accordion {
  background-color: transparent;
  color: var(--disabled-color);
  /*padding: 18px 0;*/
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1.25em;
  transition: 0.5s;
  padding: 8px 0;
  display: block;
  border-radius: 5px 5px 0 0;
}

.active, .accordion:hover {
  background-color: var(--accordion-background-color);
  color: white;
  box-shadow: var(--shadow-elevation-6dp_-_box-shadow);
  position: relative;
  z-index: 100;
}

.active.accordion:hover {
  border-radius: 5px 5px 0 0;
}

.accordion:hover {
  border-radius: 5px;
}

.panel.chosen{
  transform: scaleY(0);
  margin: 0;
}

.panel.hide {
  max-height: 0;
}

.accordion:hover button, .active button{
  fill: #fff;
}

.accordion > * {
  margin-left: 5%;
}

:host([class="full active"]) .panel {
  padding: 8px;
  flex-direction: column;
  box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
}

.panel {
  padding: 0 50px;
  margin: 5px auto;
  background-color: white;
  max-height: max-content;
  transform: scaleY(1);
  transition: transform 500ms ease;
  box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
  background: var(--secondary-background-color);
  border-radius: 0 0 5px 5px;
}

.accordion{
  cursor: pointer;
}

.accordion:hover span,.active span {
  fill: white;
}

.panel > * {
  margin: auto;
}

.hidden{
  display: none;
}`),l=(n.b`

* { box-sizing: border-box; }

:host{
  width: 95%;
  height: auto;
  padding: 2.5px;
  color:black;
}

:host(.graph-only) .container{
  height: auto;
  padding: 0;
  margin: 0;
  box-shadow: none;
}

:host(.graph-only) .container > div {
  background: transparent;
  box-shadow: none;
}

:host(.graph-only) h1 { display: none; }

:host(.graph-only:hover) .container{
  box-shadow: none;
}

:host(:hover) .container{
  box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
}

.container {
  margin: auto;
  box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
  width: 100%;
  height: 450px;
  padding: 0 25px;
  border-radius: 5px;
  display: none;
  /*background-color: var(--dark-primary-color);*/
}

h1 {
  text-align: center;
  margin-top: 0;
  font-weight: 400;
  color: var(--dark-primary-color);
  font-family: var(--app-font-family);
  margin: 0;
  padding: 8px;
  font-size: 2em;
}

.container > div {
  left: calc(50% + -300px);
  box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
  background: #021B2B;
}

@media (max-width:840px){

  .container > div {
    left: calc(50% + -175px);
  }

  .container{
    height: auto;
  }
}

@media (max-width:440px){

.container > div {
  left: calc(50% + -162.5px);
}

}`,n.b`

  #main-content::-webkit-scrollbar, .overflowable::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: #fff;
  }

  #main-content::-webkit-scrollbar-thumb, .overflowable::-webkit-scrollbar-thumb {
    background-color: #0097A7;
  }

  #main-content::-webkit-scrollbar-track, .overflowable::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #fff;
  }`),c=(n.b`

  order-base-print {
    border-top: 2px solid var(--divider-color);
    margin-top: 50px;
    margin-bottom: 25px;
  }


  @media print{

    *:not(order-print-full, order-print-glasses){
      display: none;
    }

    :host{
      box-shadow: none !important;
      background: white;
    }
  }

  @media (max-width:840px){
    :host{
        max-width: 99vw;
    }
  }

  @media (max-width:440px){
    custom-progression-bar + .underline {
        display:none;
    }
  }

  .submit-container{
    text-align:center;
    margin-top: 12.5px;
  }`,n.b`
    .underline{
        --divider-color : var(--dark-theme-secondary-color, #c6c6c6);
        margin: 12.5px auto;
        height: 1px;
        width: 90%;
        background-color: var(--divider-color);
    }

    .underline-dark{
        margin: auto;
        height: 1px;
        width: 90%;
        background-color: var(--secondary-text-color);
    }

    @media (max-width: 540px){
      .underline.hide{
        display:none;
      }
    }
`);n.b`
    h2 { color: var(--default-primary-color); font-weight:200; }
    h1,h2 { padding: 0;margin: 0;}

    card-element {
        margin: 25px 10px 25px 10px;
        width: 310px;
        display: inline-block;
    }

    span {
        width: 130px;
        height: 130px;
        border-radius:100%;
        display: inline-block;
        background: #99dcffcf;
        padding: 1px;
    }

    span svg {
        width: 125px;
        height: 125px;
        fill: var(--dark-primary-color);
    }

    p {
        text-align:center;
        height: 50px;
        padding: 8px;
        font-size: 1.143em;
        color: var(--default-primary-color);
    }

    a.styled-button {
        width: 150px;
        border-radius: 7.5px;
        padding: 10px;
        margin: 0 0 10px 50px;
        transition: color 250ms;
    }
`,n.b`
  :host{
    width: 100%;
    display: block;
  }

  .accordion{
    display: block;
    color: var(--dark-primary-color);
  }

  paper-dropdown-menu, paper-input{
    width: auto;
    vertical-align: middle;
  }

  form {
    box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
    width: 100%;
    background: transparent;
    padding: 0;
    border-radius: 5px 5px 0 0;
  }

  iron-selector div {
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    text-align:center;
  }

  .iron-selected {
    opacity: 1;
    visibility: visible;
    max-height: fit-content;
  }

  .full-grid {
    grid-column: 1 / 3;
  }

  .accordion:hover{
    background: white;
    color: var(--dark-primary-color);
    border-radius: 5px 5px 0 0;
  }

  .accordion:hover span{
    fill: var( --default-primary-color);
  }

  .panel {
    background: var(--secondary-background-color);
  }
`,n.b`

.date-range {
    display: none;
    position: absolute;
    width: 500px;
    height: 200px;
    background: white;
    padding: 25px;
    z-index: 150;
    left: 48px;
    top: 40px;
    box-shadow: var(--shadow-elevation-16dp_-_box-shadow);

    @media (max-width:840px){
        width: 400px;
    }
  }

  @media (max-width:840px){

    .date-range{
      width: 300px;
    }

    paper-dropdown-menu{
        width: 90%;
    }
  }

  button {
    position: absolute;
    top: -22px;
    left:-22px;
  }

  .range {
    position: relative;
  }

  .range{
    margin-left: 0;
    background: var(--dark-primary-color);
    color: white;
    min-width: 60px;
  }

  .rounded {
    background:white;
    fill: var(--dark-primary-color);
    padding: 0 10px 0 0;
  }

  .rounded span {
    padding-left: 9px;
    display: block;
  }

  .dr-container{
    position: relative;
    display: inline-block;
    padding: 0 16px;
  }


  .dr-container > paper-button span{
    fill: var(--text-primary-color);
  }
`,n.b`
.aro-info {
  border: 2px solid #012257;
  border-radius: 5px;
  margin: 12.5px;
  padding: 8px 16px;
  max-height: 90%;
  height: 90%;
  display: grid;
  grid-template-rows: repeat(3,1fr);
}

.aro-info > div {
  padding: 8px 0;
}

.aro-info > div:not(.cbox-opt) {
  position: relative;
  font-size: 1.5em;
}

.aro-info > div:not(.cbox-opt).underline::after{
  content: "";
  position: absolute;
  left: 10%;
  bottom: 25%;
  width: 80%;
  height: 1px;
  background-color: #012257;
}`},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i(6),i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const n={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}},function(t,e,i){"use strict";i(6),i(49);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const n=i(3).a`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));i(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=!1,r=[],o=[];function s(){n=!0,requestAnimationFrame((function(){n=!1,a(r),setTimeout((function(){!function(t){for(let e=0,i=t.length;e<i;e++)l(t.shift())}(o)}))}))}function a(t){for(;t.length;)l(t.shift())}function l(t){const e=t[0],i=t[1],n=t[2];try{i.apply(e,n)}catch(t){setTimeout(()=>{throw t})}}function c(t,e,i){n||s(),o.push([t,e,i])}},function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let n,r=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame((function(){o?o(t):(r||(r=new Promise(t=>{n=t}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),r.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__shadyCSSCachedStyle";let l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,s(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[a])continue;const n=this.getStyleForCustomStyle(i);if(n){const t=n.__appliedElement||n;l&&l(t),i[a]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return _}));i(6);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var n={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},r={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},s=/[a-z0-9*]/,a=/U\+/,l=/^arrow/,c=/^space(bar)?/,d=/^escape$/;function p(t,e){var i="";if(t){var n=t.toLowerCase();" "===n||c.test(n)?i="space":d.test(n)?i="esc":1==n.length?e&&!s.test(n)||(i=n):i=l.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function h(t,e){return t.key?p(t.key,e):t.detail&&t.detail.key?p(t.detail.key,e):(i=t.keyIdentifier,o="",i&&(i in n?o=n[i]:a.test(i)?(i=parseInt(i.replace("U+","0x"),16),o=String.fromCharCode(i).toLowerCase()):o=i.toLowerCase()),o||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):r[t]),e}(t.keyCode)||"");var i,o}function u(t,e){return h(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function f(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var i=e.split(":"),n=i[0],r=i[1];return n in o?(t[o[n]]=!0,t.hasModifiers=!0):(t.key=n,t.event=r||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const _={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=f(e),n=0;n<i.length;++n)if(u(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var i=t[0].hasModifiers;return i===e[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(t,e){f(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],r=t[i][1];if(u(n,e)&&(this._triggerKeyHandler(n,r,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var r=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,r),r.defaultPrevented&&i.preventDefault()}}},function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"g",(function(){return s})),i.d(e,"i",(function(){return a})),i.d(e,"h",(function(){return l})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return d})),i.d(e,"f",(function(){return p})),i.d(e,"k",(function(){return h})),i.d(e,"j",(function(){return u})),i.d(e,"c",(function(){return f}));var n=i(1);const r=n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`,o=(n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path id="cart-path" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`),s=n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,a=(n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24" preserveAspectRatio<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></svg>`),l=(n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg>`,n.c`<svg version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 400" width="150" height="100"><defs><path d="M350 193.24C350 276.03 282.79 343.24 200 343.24C117.21 343.24 50 276.03 50 193.24C50 110.45 117.21 43.24 200 43.24C282.79 43.24 350 110.45 350 193.24Z" id="a3BJFHUn8"></path><radialGradient id="gradientfyN2Th74H" gradientUnits="userSpaceOnUse" cx="350" cy="195.14" r="237.31"><stop style="stop-color: #ffffff;stop-opacity: 1" offset="0%"></stop><stop style="stop-color: #a5f0ff;stop-opacity: 1" offset="29.012480093600683%"></stop><stop style="stop-color: #65e0e7;stop-opacity: 1" offset="59.52695895219217%"></stop><stop style="stop-color: #326fa7;stop-opacity: 1" offset="100%"></stop></radialGradient><path d="M262.5 195.14C262.5 229.63 234.49 257.64 200 257.64C165.51 257.64 137.5 229.63 137.5 195.14C137.5 160.64 165.51 132.64 200 132.64C234.49 132.64 262.5 160.64 262.5 195.14Z" id="dLgBgEMi5"></path><path d="M268.6 158.26C268.6 172.41 257.4 183.89 243.6 183.89C229.8 183.89 218.6 172.41 218.6 158.26C218.6 144.12 229.8 132.64 243.6 132.64C257.4 132.64 268.6 144.12 268.6 158.26Z" id="g2PFaIzYRd"></path></defs><g><g><g><use xlink:href="#a3BJFHUn8" opacity="1" fill="url(#gradientfyN2Th74H)"></use><g><use xlink:href="#a3BJFHUn8" opacity="1" fill-opacity="0" stroke="#b0d6ef" stroke-width="0" stroke-opacity="1"></use></g></g><g><use xlink:href="#dLgBgEMi5" opacity="1" fill="#181d3c" fill-opacity="1"></use></g><g><use xlink:href="#g2PFaIzYRd" opacity="1" fill="#ffffff" fill-opacity="1"></use></g></g></g></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>`),c=(n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M7 14l5-5 5 5z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M7 10l5 5 5-5z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>`),d=(n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>`,n.c`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>`,n.c`<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" ><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></svg>`,n.c`<svg  height="24" width="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" ><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 "></path></svg>`,n.c`<svg  height="24" width="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" ><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></svg>`,n.c`<svg height="24" width="24"  viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" ><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`,n.c`<svg height="24" width="24" viewBox="0 0 24 24" preerveAspectRatio="xMidYMid meet" ><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`,n.c`<svg height="24" width="24" viewBox="0 0 24 24" preerveAspectRatio="xMidYMid meet" ><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>`,n.c`<svg height="24" width="24" viewBox="0 0 24 24" preerveAspectRatio="xMidYMid meet" ><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></svg>`,n.c`<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>`,n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></svg>`),p=n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M8 5v14l11-7z"></path></svg>`,h=n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>`,u=n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M6 6h12v12H6z"></path></svg>`,f=(n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></svg>`,n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></svg>`);n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path></svg>`,n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg >`,n.c`<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>`},function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i(6);var n=i(4),r=i(5),o=new Set;const s={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():r.i||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(n.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(o.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}},function(t,e,i){"use strict";i(6);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const n=i(3).a`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(6);var n=i(11);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(t){r[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return r.types[t]&&r.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=r.types[e]=r.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=r.types[this.type];return t?Object.keys(t).map((function(t){return o[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}r[" "]=function(){},r.types={};var o=r.types;Object(n.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new r({type:t,key:e});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new r({type:this.type,key:t}).value}})},function(t,e,i){"use strict";i(6);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const n=i(3).a`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;n.setAttribute("style","display: none;"),document.head.appendChild(n.content)},function(t,e,i){"use strict";i.r(e);var n=i(8),r=i(5);function o(t,e,i){let n=document.head.querySelector(`meta[${t}="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute(t,e),document.head.appendChild(n)),n.setAttribute("content",i||"")}i(6),i(34);var s=i(11),a=i(4),l=i(3),c=i(44);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:l.a`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: 120px 0;

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){Object(c.a)(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(t){27===t.keyCode&&(t.preventDefault(),this.close())},_track:function(t){if(!this.persistent&&!this.disableSwipe)switch(t.preventDefault(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackMove(t);break;case"end":this._trackEnd(t)}},_trackStart:function(t){this._drawerState=this._DRAWER_STATE.TRACKING;var e=this.$.contentContainer.getBoundingClientRect();this._savedWidth=e.width,"left"===this.position?this._translateOffset=e.left:this._translateOffset=e.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(t){this._translateDrawer(t.detail.dx+this._translateOffset),this._trackDetails.push({dx:t.detail.dx,timeStamp:Date.now()})},_trackEnd:function(t){var e=t.detail.dx+this._translateOffset,i=this.getWidth(),n="left"===this.position?e>=0||e<=-i:e<=0||e>=i;if(!n){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(t,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var o=i/2;t.detail.dx<-o?this.opened="right"===this.position:t.detail.dx>o&&(this.opened="left"===this.position),n?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(t,e){for(var i,n=Date.now(),r=n-100,o=0,s=e.length-1;o<=s;){var a=o+s>>1,l=e[a];l.timeStamp>=r?(i=l,s=a-1):o=a+1}return i?(t.detail.dx-i.dx)/(n-i.timeStamp||1):0},_flingDrawer:function(t,e){var i=this._calculateVelocity(t,e);if(!(Math.abs(i)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var n,r=t.detail.dx+this._translateOffset,o=this.getWidth(),s="left"===this.position,a=i>0;n=!a&&s?-(r+o):a&&!s?o-r:-r,a?(i=Math.max(i,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(i=Math.min(i,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*n/i;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(t){this.style.transitionDuration=t+"ms",this.$.contentContainer.style.transitionDuration=t+"ms",this.$.scrim.style.transitionDuration=t+"ms"},_styleTransitionTimingFunction:function(t){this.$.contentContainer.style.transitionTimingFunction=t,this.$.scrim.style.transitionTimingFunction=t},_translateDrawer:function(t){var e=this.getWidth();"left"===this.position?(t=Math.max(-e,Math.min(t,0)),this.$.scrim.style.opacity=1+t/e):(t=Math.max(0,Math.min(t,e)),this.$.scrim.style.opacity=1-t/e),this.translate3d(t+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var t=this._drawerState;t===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,t!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),t!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var t=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),e=Object(a.a)(this).querySelectorAll(t);e.length>0?(this._firstTabStop=e[0],this._lastTabStop=e[e.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var i=this.getAttribute("tabindex");i&&parseInt(i,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(t){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===t.keyCode&&(t.shiftKey?this._firstTabStop&&Object(a.a)(t).localTarget===this._firstTabStop&&(t.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&Object(a.a)(t).localTarget===this._lastTabStop&&(t.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(t,e){this.toggleClass("visible",t&&!e,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});var d=i(48),p=i(12),h=i(16),u=i(20);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const f=[d.a,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(t){Object(a.a)(t).path[0]!==this&&(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var t=this._updateLayoutStates.bind(this);this._layoutDebouncer=h.a.debounce(this._layoutDebouncer,p.a,t),Object(u.a)(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var t=this;requestAnimationFrame((function(){t.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this)}}],_={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[t]:Object(a.a)(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var i;"object"==typeof t?(i=t.left,e=t.top):i=t,i=i||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(i,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var i=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}},m={};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const b=[_,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var i=m[t];if(!i)throw new ReferenceError(this._getUndefinedMsg(t));var n=this._boundEffect(i,e||{});return n.setUp(),n},_effectsChanged:function(t,e,i){this._tearDownEffects(),t&&i&&(t.split(" ").forEach((function(t){var i;""!==t&&((i=m[t])?this._effects.push(this._boundEffect(i,e[t])):console.warn(this._getUndefinedMsg(t)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var i=parseFloat(e.startsAt||0),n=parseFloat(e.endsAt||1),r=n-i,o=function(){},s=0===i&&1===n?t.run:function(e,n){t.run.call(this,Math.max(0,(e-i)/r),n)};return{setUp:t.setUp?t.setUp.bind(this,e):o,run:t.run?s.bind(this):o,tearDown:t.tearDown?t.tearDown.bind(this):o}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(t){t.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(t,e)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:l.a`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[b,f],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,e=Object(a.a)(this.$.slot).getDistributedNodes(),i=0;t=e[i];i++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(t,e){if(0!==this._height){var i=0,n=0,r=this._top,o=(this._lastScrollTop,this._maxHeaderTop),s=t-this._lastScrollTop,a=Math.abs(s),l=t>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?r+s:t,0,o)),t>=this._dHeight&&(n=this.condenses&&!this.fixed?Math.max(this._dHeight,n):n,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&a<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=c),t>=o))if(Math.abs(this._initScrollTop-t)>30||a>10){l&&t>=o?n=o:!l&&t>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var d=s/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-r)/d,0,300)+"ms"}else n=this._top;i=0===this._dHeight?t>0?1:0:n/this._dHeight,e||(this._lastScrollTop=t,this._top=n,this._wasScrollingDown=l,this._lastTimestamp=c),(e||i!==this._progress||r!==n||0===t)&&(this._progress=i,this._runEffects(i,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),Object(a.a)(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return Object(a.a)(this).querySelector("[main-title]");case"condensedTitle":return Object(a.a)(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
function(t,e){if(null!=m[t])throw new Error("effect `"+t+"` is already registered.");m[t]=e}("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:l.a`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});i(49),i(43),i(51);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const y=l.a`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;y.setAttribute("style","display: none;"),document.head.appendChild(y.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const g=Object(s.a)({_template:l.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){g.instance||(g.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});g.instance=null,g.requestAvailability=function(){g.instance||(g.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(g.instance)};var v=i(50);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/let w=null;const x={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){w=new v.a({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return w&&w.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(s.a)({_template:l.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[x],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){g.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(a.a)(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(a.a)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,i=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&i)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=x.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const S={attached:function(){this.fire("addon-attached")},update:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(s.a)({_template:l.a`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[S],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});var C=i(23);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const k=l.a`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;k.setAttribute("style","display: none;"),document.head.appendChild(k.content),Object(s.a)({_template:l.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Object(C.b)(this.attrForValue)},get _inputElement(){return Object(a.a)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;-1===this._addons.indexOf(e)&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===e.value||""===e.value)||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||0===e||"number"===t.type&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){var e;this.autoValidate&&t&&(e=t.validate?t.validate(this._inputElementValue):t.checkValidity(),this.invalid=!e);this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,r){var o="input-content";if(t)r&&(o+=" label-is-hidden"),n&&(o+=" is-invalid");else{var s=this.querySelector("label");e||r?(o+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?o+=" is-invalid":i&&(o+=" label-is-highlighted")):(s&&(this.$.labelAndInputContainer.style.position="relative"),n&&(o+=" is-invalid"))}return i&&(o+=" focused"),o},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:l.a`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[S],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const P={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};i(32);var E=i(46),O=i(42),T=i(28);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const A={NextLabelID:1,NextAddonID:1,NextInputID:1},N={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!T.a&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t=t?t+" "+e:e},_onAddonAttached:function(t){var e=Object(a.a)(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+A.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){O.a._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(e){this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t,e=Object(a.a)(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+A.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+A.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement;t instanceof HTMLElement&&t!==document.body&&t!==document.documentElement||this._focusableElement.focus()}}},M=[O.a,E.a,N];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({is:"paper-input",_template:l.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[M,P],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});var z=i(47);class I extends n.a{static get styles(){return[n.b`:host {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px;
        background-color: var(--app-secondary-color);
        color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        will-change: transform;
        transform: translate3d(0, 100%, 0);
        transition-property: visibility, transform;
        transition-duration: 0.2s;
        visibility: hidden;
      }
      :host([active]) {
        visibility: visible;
        transform: translate3d(0, 0, 0);
        z-index: 160;
      }
      @media (min-width: 460px) {
        :host {
          width: 320px;
          margin: auto;
          border-radius: 5px 5px 0 0;
        }
      }`]}render(){return n.c`
      <slot></slot>
    `}static get properties(){return{active:{type:Boolean}}}}customElements.define("snack-bar",I);var L=i(41);class R extends n.a{static get properties(){return{appTitle:{type:String},_page:{type:String},_drawerOpened:{type:Boolean},_snackbarOpened:{type:Boolean},_offline:{type:Boolean},_snackbarMessage:{type:String}}}static get styles(){return[n.b`
        :host {
          display: block;

          --dark-primary-color:         #0097A7;
          --default-primary-color:      #00BCD4;
          --light-primary-color:        #B2EBF2; /*#9be7ff; */
          --light-secondary-color:      #e4f2ff;
          --text-primary-color:         #FFFFFF;
          --accent-color:               #009688; /*#03A9F4; */
          --primary-background-color:   #F7FFFE; /*#BBDEFB; */
          --secondary-background-color: #FFFFFF;
          --primary-text-color:         #004467;
          --secondary-text-color:       #757575; /*#075784; */
          --ternary-text-color:         #075784;
          --disabled-text-color:        #BDBDBD;
          --divider-color:              #BDBDBD;
          --disabled-color:             #646464;

          --shadow-box-8dp-custom : rgba(4, 68, 109, 0.14) 0px 8px 10px 1px, rgba(4, 68, 109, 0.12) 0px 3px 14px 2px, rgba(4, 68, 109, 0.4) 0px 5px 5px -3px;
          --shadow-box-4dp-custom : rgba(4, 68, 109, 0.28) 0px 3px 4px 0px, rgba(4, 68, 109, 0.24) 0px 1px 8px 0px, rgba(4, 68, 109, 0.8) 0px 3px 3px -2px;
          --shadow-box-2dp-custom : 0 3px 4px 0 rgba(4, 68, 109, 0.14), 0 1px 8px 0 rgba(4, 68, 109, 0.12), 0 3px 3px -2px rgba(4, 68, 109, 0.4);


          --app-drawer-width: 256px;

          --app-primary-color: #00BCD4;
          --app-secondary-color: #293237;
          --app-dark-text-color: var(--app-secondary-color);
          --app-light-text-color: white;
          --app-section-even-color: #f7f7f7;
          --app-section-odd-color: white;

          --app-header-background-color: white;
          --app-header-text-color: var(--app-dark-text-color);
          --app-header-selected-color: var(--app-primary-color);

          --app-drawer-background-color: var(--app-secondary-color);
          --app-drawer-text-color: var(--app-light-text-color);
          --app-drawer-selected-color: #78909C;

          font-size: 12px;
        }

        app-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 120;
          text-align: center;
          background-color: var(--default-primary-color);
          color: var(--app-header-text-color);
          border-bottom: 1px solid #eee;
        }

        .toolbar-top {
          background-color: var(--dark-primary-color);
          color: white;
        }

        [main-title] {
          font-family: 'Pacifico';
          text-transform: lowercase;
          font-size: 30px;
          /* In the narrow layout, the toolbar is offset by the width of the
          drawer button, and the text looks not centered. Add a padding to
          match that button */
          padding-right: 44px;
        }

        .toolbar-list {
          display: none;
        }

        .toolbar-list > a {
          display: inline-block;
          color: var(--app-header-text-color);
          text-decoration: none;
          line-height: 30px;
          padding: 4px 24px;
        }

        .toolbar-list > a[selected] {
          color: var(--accent-color);
          border-bottom: 4px solid var(--accent-color);
        }

        .menu-btn {
          background: none;
          border: none;
          fill: var(--app-header-text-color);
          cursor: pointer;
          height: 44px;
          width: 44px;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: var(--app-drawer-background-color);
          position: relative;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: var(--app-drawer-text-color);
          line-height: 40px;
          padding: 0 24px;
        }

        .drawer-list > a[selected] {
          color: var(--app-drawer-selected-color);
        }

        /* Workaround for IE11 displaying <main> as inline */
        main {
          display: block;
        }

        .main-content {
          padding-top: 64px;
          max-height: 100vh;
          overflow: auto;
          position: relative;
          z-index: 130;
          height: calc(100vh - 64px);
        }

        .page {
          display: none;
        }

        .page[active] {
          display: block;
        }

        footer {
          padding: 24px;
          background: var(--app-drawer-background-color);
          color: var(--app-drawer-text-color);
          text-align: center;
        }

        /* Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout */
        @media (min-width: 460px) {
          .toolbar-list {
            display: block;
          }

          .menu-btn {
            display: none;
          }
          /* The drawer button isn't shown in the wide layout, so we don't
          need to offset the title */
          [main-title] {
            padding-right: 0px;
          }
        }

        custom-absolute-container{
            width: 50px;
            display: inline-block;
            border-radius: 5px;
            z-index: 150;
            margin-left: 92.5%;
            position: fixed;


            --paper-input-container-color:       white;
            --paper-input-container-focus-color: white;
            --paper-input-container-input-color: white;

        }
      `,L.d,L.b]}render(){return n.c`
      <!-- Header -->
      <app-header condenses reveals effects="waterfall">
        <app-toolbar class="toolbar-top">
          <button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${z.d}</button>
          <div main-title>${this.appTitle}</div>
        </app-toolbar>

      </app-header>

      <!-- Main content -->
      <main role="main" class="main-content" id="main-content">
        <primary-view class="page" ?active="${"primary"===this._page}"></primary-view>
        <my-view404 class="page" ?active="${"view404"===this._page}"></my-view404>
      </main>

      <snack-bar ?active="${this._snackbarOpened}">
        ${this._snackbarMessage}
      </snack-bar>
    `}constructor(){super(),this._drawerOpened=!1,Object(r.f)(!0)}firstUpdated(){var t,e;t=t=>this._locationChanged(t),document.body.addEventListener("click",e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const i=e.composedPath().filter(t=>"A"===t.tagName)[0];if(!i||i.target||i.hasAttribute("download")||"external"===i.getAttribute("rel"))return;const n=i.href;if(!n||-1!==n.indexOf("mailto:"))return;const r=window.location,o=r.origin||r.protocol+"//"+r.host;0===n.indexOf(o)&&(e.preventDefault(),n!==r.href&&(window.history.pushState({},"",n),t(r,e)))}),window.addEventListener("popstate",e=>t(window.location,e)),t(window.location,null),e=t=>this._offlineChanged(t),window.addEventListener("online",()=>e(!1)),window.addEventListener("offline",()=>e(!0)),e(!1===navigator.onLine),((t,e)=>{let i=window.matchMedia(t);i.addListener(t=>e(t.matches)),e(i.matches)})("(min-width: 460px)",t=>this._layoutChanged(t)),window.addEventListener("snackbar-message",t=>{this._snackbarMessage=t.detail,this._showSnackBar()})}updated(t){if(t.has("_page")){const t=this.appTitle+" - "+this._page;(({title:t,description:e,url:i,image:n,imageAlt:r})=>{t&&(document.title=t,o("property","og:title",t)),e&&(o("name","description",e),o("property","og:description",e)),n&&o("property","og:image",n),r&&o("property","og:image:alt",r),o("property","og:url",i=i||window.location.href)})({title:t,description:t})}}_layoutChanged(t){this._updateDrawerState(!1)}_offlineChanged(t){const e=this._offline;this._offline=t,void 0!==e&&(clearTimeout(this.__snackbarTimer),this._snackbarOpened=!0,this.__snackbarTimer=setTimeout(()=>{this._snackbarOpened=!1},3e3))}_showSnackBar(){clearTimeout(this.__snackbarTimer),this._snackbarOpened=!0,this.__snackbarTimer=setTimeout(()=>{this._snackbarOpened=!1},3e3)}_locationChanged(t){const e=window.decodeURIComponent(t.pathname),i="/"===e?"primary":e.slice(1);this._loadPage(i),this._updateDrawerState(!1)}_updateDrawerState(t){t!==this._drawerOpened&&(this._drawerOpened=t)}_loadPage(t){switch(t){case"primary":t="primary",Promise.all([i.e(1),i.e(2)]).then(i.bind(null,78));break;default:t="view404",i.e(3).then(i.bind(null,77))}this._page=t}_menuButtonClicked(){this._updateDrawerState(!0)}_drawerOpenedChanged(t){this._updateDrawerState(t.target.opened)}}window.customElements.define("compi-app",R)}]);