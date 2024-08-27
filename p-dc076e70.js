/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var n=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].join(","),t="undefined"==typeof Element,r=t?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,e=!t&&Element.prototype.getRootNode?function(n){return n.getRootNode()}:function(n){return n.ownerDocument},o=function t(e,o,i){for(var u=[],a=Array.from(e);a.length;){var f=a.shift();if("SLOT"===f.tagName){var c=f.assignedElements(),d=t(c.length?c:f.children,!0,i);i.flatten?u.push.apply(u,d):u.push({scope:f,candidates:d})}else{r.call(f,n)&&i.filter(f)&&(o||!e.includes(f))&&u.push(f);var l=f.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(f),s=!i.shadowRootFilter||i.shadowRootFilter(f);if(l&&s){var v=t(!0===l?f.children:l.children,!0,i);i.flatten?u.push.apply(u,v):u.push({scope:f,candidates:v})}else a.unshift.apply(a,f.children)}}return u},i=function(n,t){return n.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName)||n.isContentEditable)&&isNaN(parseInt(n.getAttribute("tabindex"),10))?0:n.tabIndex},u=function(n,t){return n.tabIndex===t.tabIndex?n.documentOrder-t.documentOrder:n.tabIndex-t.tabIndex},a=function(n){return"INPUT"===n.tagName},f=function(n){var t=n.getBoundingClientRect();return 0===t.width&&0===t.height},c=function(n,t){return!(function(n){return function(n){return a(n)&&"radio"===n.type}(n)&&!function(n){if(!n.name)return!0;var t,r=n.form||e(n),o=function(n){return r.querySelectorAll('input[type="radio"][name="'+n+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(n.name));else try{t=o(n.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var i=function(n,t){for(var r=0;r<n.length;r++)if(n[r].checked&&n[r].form===t)return n[r]}(t,n.form);return!i||i===n}(n)}(t)||i(t)<0||!function(n,t){return!(t.disabled||function(n){return a(n)&&"hidden"===n.type}(t)||function(n,t){var o=t.displayCheck,i=t.getShadowRoot;if("hidden"===getComputedStyle(n).visibility)return!0;var u=r.call(n,"details>summary:first-of-type");if(r.call(u?n.parentElement:n,"details:not([open]) *"))return!0;var a=e(n).host,c=(null==a?void 0:a.ownerDocument.contains(a))||n.ownerDocument.contains(n);if(o&&"full"!==o){if("non-zero-area"===o)return f(n)}else{if("function"==typeof i){for(var d=n;n;){var l=n.parentElement,s=e(n);if(l&&!l.shadowRoot&&!0===i(l))return f(n);n=n.assignedSlot?n.assignedSlot:l||s===n.ownerDocument?l:s.host}n=d}if(c)return!n.getClientRects().length}return!1}(t,n)||function(n){return"DETAILS"===n.tagName&&Array.prototype.slice.apply(n.children).some((function(n){return"SUMMARY"===n.tagName}))}(t)||function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var t=n.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var e=0;e<t.children.length;e++){var o=t.children.item(e);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(n)}return!0}t=t.parentElement}return!1}(t))}(n,t))},d=function(n){var t=parseInt(n.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},l=function n(t){var r=[],e=[];return t.forEach((function(t,o){var u=!!t.scope,a=u?t.scope:t,f=i(a,u),c=u?n(t.candidates):a;0===f?u?r.push.apply(r,c):r.push(a):e.push({documentOrder:o,tabIndex:f,item:t,isScope:u,content:c})})),e.sort(u).reduce((function(n,t){return t.isScope?n.push.apply(n,t.content):n.push(t.content),n}),[]).concat(r)},s=function(t,e){var i;return i=(e=e||{}).getShadowRoot?o([t],e.includeContainer,{filter:c.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:d}):function(t,e,o){var i=Array.prototype.slice.apply(t.querySelectorAll(n));return e&&r.call(t,n)&&i.unshift(t),i.filter(o)}(t,e.includeContainer,c.bind(null,e)),l(i)};const v=(n=document.activeElement)=>null!=n&&null!=n.shadowRoot&&null!=n.shadowRoot.activeElement?v(n.shadowRoot.activeElement):n,p=(t,e=!0,o=!0)=>{if(e&&function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==r.call(t,n)&&c(e,t)}(t))return t;const i=s(t,{getShadowRoot:o});return i.length?i[0]:null};export{p as g,v as t}