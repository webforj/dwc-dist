/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,c as i,w as e,h as s,H as r,g as o}from"./p-00e3df8e.js";import{c as a,a as n}from"./p-5119ef20.js";import{D as h}from"./p-d533ee6a.js";import{D as c}from"./p-5440a118.js";import{h as d}from"./p-3e9fe89f.js";import{D as l,a as p,b as u}from"./p-b9ac3f72.js";import{S as f}from"./p-7ccdab1d.js";import{D as w}from"./p-bcdbf8e6.js";var b;"undefined"!=typeof self&&self,b=()=>(()=>{var t={"./src/StringMask/StringMask.js":
/*!**************************************!*\
  !*** ./src/StringMask/StringMask.js ***!
  \**************************************/(t,i,e)=>{function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function r(t,i){for(var e=0;e<i.length;e++){var r=i[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t){if("object"!==s(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var e=i.call(t,"string");if("object"!==s(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}e.r(i),e.d(i,{default:()=>d});var o=/^\d+$/,a=/\s/,n=function(t){return t==t.toLowerCase()&&t!=t.toUpperCase()},h=function(t){return t==t.toUpperCase()&&t!=t.toLowerCase()},c=function(t,i,e,s){if(!t){var r=s.charAt(e),o=e+1;throw{name:"StringMaskError",message:'StringMaskError: error applying mask at position "'.concat(o,'" , char "').concat(r,'"'),pos:o,char:r}}i[e]=" "};const d=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t)}var i,e;return i=t,e=[{key:"mask",value:function(t,i){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t=String(t);var s=(i=String(i)).length,r=t.length;if(r>s){if(e)return t;throw{name:"MaskIsTooShortError",message:"MaskIsTooShortError: Mask is shorter than the passed string"}}for(var d=new Array(s),l=0,p="",u=0;u<s;u++)switch(p=i.charAt(u)){case"X":d[u]=l<r?t.charAt(l):" ",++l;break;case"A":if(l<r){var f=t.charAt(l);h(f)?d[u]=f:n(f)?d[u]=f.toUpperCase():c(e,d,u,t)}else d[u]=" ";++l;break;case"a":if(l<r){var w=t.charAt(l);h(w)||n(w)?d[u]=w:c(e,d,u,t)}else d[u]=" ";++l;break;case"0":if(l<r){var b=t.charAt(l);o.test(b)?d[u]=b:c(e,d,u,t)}else d[u]=" ";++l;break;case"Z":if(l<r){var v=t.charAt(l);h(v)||o.test(v)?d[u]=v:n(v)?d[u]=v.toUpperCase():c(e,d,u,t)}else d[u]=" ";++l;break;case"z":if(l<r){var g=t.charAt(l);h(g)||n(g)||o.test(g)?d[u]=g:c(e,d,u,t)}else d[u]=" ";++l;break;case"U":if(l<r){var m=t.charAt(l);n(m)?d[u]=m.toUpperCase():h(m)||o.test(m)||a.test(m)||"!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".indexOf(m)>-1?d[u]=m:c(e,d,u,t)}else d[u]=" ";++l;break;default:d[u]=p}if(l<r&&!e)throw{name:"MaskError",message:"Mask cannot be applied"};return d.join("")}}],null&&r(i.prototype,null),e&&r(i,e),Object.defineProperty(i,"prototype",{writable:!1}),t}()}},i={};function e(s){var r=i[s];if(void 0!==r)return r.exports;var o=i[s]={exports:{}};return t[s](o,o.exports,e),o.exports}e.d=(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{
/*!*********************************!*\
  !*** ./src/StringMask/index.js ***!
  \*********************************/
e.r(s),e.d(s,{default:()=>t});const t=e(/*! ./StringMask */"./src/StringMask/StringMask.js").default})(),s})();const v=n({exports:{}}.exports=b());let g=0;const m=class{constructor(e){t(this,e),this.modifiedEvent=i(this,"dwc-modified",7),this.focusedEvent=i(this,"dwc-focused",7),this.blurredEvent=i(this,"dwc-blurred",7),this.spunUpEvent=i(this,"dwc-spun-up",7),this.spunDownEvent=i(this,"dwc-spun-down",7),this.validatedEvent=i(this,"dwc-validated",7),this.inputId="inpute-"+ ++g,this.isMouseInComponent=!1,this.oldMaskedValue="",this.loaded=!1,this.lastSelectionStart=0,this.lastSelectionEnd=0,this.unformattedTextMode=!1,this.validationExpressionEngine=new c("BBjInputE<dwc-textfield> Validation",["x","value","text","component","control"]),this.builtinInvalidMessage="",this.autoValidate=!0,this.autoValidateOnLoad=!1,this.autoWasValidated=!1,this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.disabled=!1,this.expanse="m",this.hasFocus=!1,this.helperText=void 0,this.highlightBehaviors=[],this.invalid=!1,this.invalidMessage=void 0,this.insertMode=!1,this.label=void 0,this.name=void 0,this.mask="",this.maskedValue="",this.pattern=void 0,this.placeholder=void 0,this.padCharacter=" ",this.readonly=!1,this.restoreValue=void 0,this.required=!1,this.spellcheck=!1,this.showSpinners=!1,this.spinnable=!1,this.tabTraversable=0,this.validator=void 0,this.validationIcon="dwc:info",this.validationPopoverDistance=6,this.validationPopoverSkidding=0,this.validationPopoverPlacement="bottom",this.validationStyle="popover",this.valid=!1,this.value=void 0}onHasFocusChanged(t){clearInterval(this.scrollInterval),t&&(this.scrollInterval=setInterval((()=>{this.syncScroll()}),50))}onMaskChanged(t,i){t!==i&&(this.unformattedTextMode=this.isUnformattedText(this.mask),this.syncValues())}onMaskedValueChanged(t){this.value=this.doUnmask(t,this.mask)}onValueChanged(t){this.maskedValue=this.doMask(t,this.mask),this.loaded&&this.autoValidate&&this.validate()}connectedCallback(){var t;this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleBlur=this.handleBlur.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleInput=this.handleInput.bind(this),this.handleKeyup=this.handleKeyup.bind(this),this.handleCopyCut=this.handleCopyCut.bind(this),this.handlePaste=this.handlePaste.bind(this),this.handleSpinUp=this.handleSpinUp.bind(this),this.handleSpinDown=this.handleSpinDown.bind(this),null===(t=this.slotsObserver)||void 0===t||t.connect()}disconnectedCallback(){var t;null===(t=this.slotsObserver)||void 0===t||t.disconnect()}componentWillLoad(){this.slotsObserver=new f(this.el,"helper-text"),this.unformattedTextMode=this.isUnformattedText(this.mask),this.syncValues()}componentDidLoad(){this.loaded=!0,null!=window.applyFocusVisiblePolyfill&&window.applyFocusVisiblePolyfill(this.el.shadowRoot),this.autoValidateOnLoad&&requestAnimationFrame((()=>this.validate()))}onWindowKeyup(t){9===(t.keyCode?t.keyCode:t.which)&&this.hasFocus&&(this.highlightBehaviors||[]).indexOf(h.KEY)>-1&&this.selectAll()}handleKeyUp(t){switch(t.key){case"ArrowUp":t.preventDefault(),this.spin(!0);break;case"ArrowDown":t.preventDefault(),this.spin(!1)}}handleWheel(t){if(!this.hasFocus)return;let i;if(t.preventDefault(),"touchmove"===t.type){const e=t.touches[0].clientY;i=e<this.lastTouchY?"up":"down",this.lastTouchY=e}else"wheel"!==t.type&&"mousewheel"!==t.type||(i=t.deltaY<0?"up":"down");this.spin("up"===i)}async spin(t){!this.spinnable||this.disabled||this.readonly||(t?this.spunUpEvent.emit():this.spunDownEvent.emit())}async setFocus(){this.el.shadowRoot.activeElement!==this.$input&&(this.$input.disabled=this.disabled,this.$input.focus(),this.$input.setSelectionRange(this.lastSelectionStart,this.lastSelectionEnd),this.inputWidth=this.$input.getBoundingClientRect().width,!this.isMouseInComponent&&(this.highlightBehaviors||[]).indexOf(h.REQUEST)>-1&&this.selectAll())}async removeFocus(){this.$input.blur(),this.isMouseInComponent=!1,this.syncScroll()}async selectAll(){this.disabled||this.readonly||this.$input.setSelectionRange(0,this.$input.value.length)}async setSelectionRange(t,i){this.disabled||this.readonly||this.$input.setSelectionRange(t,i)}async setCursorPos(t){this.disabled||this.readonly||this.$input.setSelectionRange(t,t+1)}async getCursorPos(){return this.disabled&&this.readonly||!this.hasFocus?0:this.$input.selectionStart}async restore(){this.doRestore()}async validate(){let t=!0;if(this.validator){const i=this.value,e=this.el;t=this.validationExpressionEngine.evaluate(this.validator,{x:i,value:i,text:i,component:e,control:e})}else{this.$input.value=this.maskedValue,this.builtinInvalidMessage=this.$input.validationMessage;try{t=this.$input.checkValidity()}catch(t){}}return this.invalid=!t,this.validatedEvent.emit(t),this.invalid&&(this.valid=!1),!this.invalid&&this.autoWasValidated&&(this.valid=!0),t}async getPart(t){return new Promise((i=>{i(this.el.shadowRoot.querySelector(`[part~="${t}"]`))}))}doRestore(t=!1){this.maskedValue=this.restoreValue||"",this.oldMaskedValue!==this.maskedValue&&t&&this.fireModifiedEvent(this.value),requestAnimationFrame((()=>{this.$input.setSelectionRange(0,0)}))}isUnformattedText(t){const i=JSON.stringify([...t]),e=JSON.stringify([...t].map((t=>"X"===t?"X":" "))),s=JSON.stringify([...t].map((t=>"U"===t?"U":" ")));return i===e||i===s}isMaskedValueEmpty(t){const i=t.trim();if(0===i.length)return!0;const e=this.getNoneStandardMaskChars(this.mask);return 0===[...i].filter((t=>e.indexOf(t)<0)).filter(Boolean).length}doMask(t,i,e=!0){let s=v.mask(t,i,e);if(this.unformattedTextMode){const t=0;let i=s.length;for(;i>t&&" "===s.charAt(i-1);)i--;s=s.substring(0,i)}return s}doUnmask(t,i,e=!0){const s=i.length,r=t.length,o=[];let a=0;for(let e=0;e<s&&!(a>=r);e++){const s=i.charAt(e),r=t.charAt(a);switch(s){case"X":case"A":case"a":case"0":case"Z":case"z":case"U":o.push(r),a++;break;default:r===s&&a++}}const n=o.join("");return e?n.trimEnd():n}getNoneStandardMaskChars(t){return t.split("").filter((t=>-1===["X","a","A","0","z","Z","U"].indexOf(t))).filter(Boolean)}seekCursor(t="forward"){if(this.unformattedTextMode)return;const i=this.$input,e=this.mask,s=this.getNoneStandardMaskChars(e),r=i.selectionStart;let o=i.selectionStart;if("forward"===t){const t=e.length;for(;o<t;){const t=e.charAt(o);if(!(s.indexOf(t)>-1))break;o++}o=Math.min(o,t),i.setSelectionRange(o,o)}else{for(o=Math.max(o-1,0);o>0;){const t=e.charAt(o);if(!(s.indexOf(t)>-1))break;o--}o=Math.max(o,0),i.setSelectionRange(o,Math.max(i.value.length,r))}}getPaddedValue(t,i,e){const s=this.doMask(this.doUnmask(i,e,!1),e,!0).split(""),r=e.split("");s.forEach(((i,e)=>{0===i.trim().length&&r[e]&&0!==r[e].trim().length&&(s[e]=t)}));const o=s.join("");return 0===o.trim().length?"":o}syncValues(){this.value&&this.value.trim().length>0?this.maskedValue=this.doMask(this.value,this.mask):this.maskedValue&&this.maskedValue.trim().length>0&&(this.value=this.doUnmask(this.maskedValue,this.mask))}syncScroll(){const t=this.$padInput;t&&(t.scrollLeft=this.$input.scrollLeft)}handleMouseEnter(){this.isMouseInComponent=!0}handleMouseLeave(){this.isMouseInComponent=!1}handleClick(){e((()=>{const t=this.$input,i=[...t.value],s=[...this.mask],r=Math.min(t.selectionStart,i.length-1),o=i[r],a=s[r],n=this.getNoneStandardMaskChars(this.mask);if(" "===o&&"U"!==a&&"X"!==a){let o=0,a=i[r-o],h=s[r-o];for(;(" "===a||n.indexOf(h)>-1)&&"U"!==h&&"X"!==h;)o++,a=i[r-o],h=s[r-o];o=Math.max(0,o-1),e((()=>{t.setSelectionRange(r-o,r-o)}))}}))}handleFocus(){this.hasFocus=!0,this.$input.setSelectionRange(this.lastSelectionStart,this.lastSelectionEnd),this.inputWidth=this.$input.getBoundingClientRect().width,this.isMouseInComponent&&(this.highlightBehaviors||[]).indexOf(h.MOUSE)>-1&&this.selectAll(),this.focusedEvent.emit()}handleBlur(){this.lastSelectionStart=this.$input.selectionStart,this.lastSelectionEnd=this.$input.selectionEnd,this.hasFocus=!1,this.blurredEvent.emit()}handleKeyDown(t){if(this.oldMaskedValue=this.$input.value,this.oldSelectionStart=this.$input.selectionStart,this.oldSelectionEnd=this.$input.selectionEnd,this.mask&&"Backspace"===t.key){const t=this.$input;t.selectionStart===t.selectionEnd&&this.seekCursor("backward")}}handleInput(t){const i=this.mask,e=this.$input,s=t.inputType,r=["insertReplacementText","insertText"].indexOf(s)>-1,o=this.oldMaskedValue,a=this.oldSelectionStart,n=this.oldSelectionEnd;let h=e.selectionStart,c=e.selectionEnd,d=e.value;if(this.insertMode||!r||0===a&&n===o.length)d.trim().length>i.length&&"insertFromPaste"!==s&&"insertFromDrop"!==s&&(d=o,h=a,c=n);else{const t=this.getNoneStandardMaskChars(i),e=[...i],s=[...d];let r=a;if(!this.unformattedTextMode){let o=e[r];for(;t.indexOf(o)>-1;)s.splice(r,0,i.charAt(r)),r++,o=e[r]}h=c=r+1,d=s.join(""),d=d.substring(0,r+1)+d.substring(r+2)}"insertFromPaste"!==s&&"insertFromDrop"!==s||(d=d.substring(0,i.length));const l=[],p=[];for(let t=a;t<n+1;t++)l.push(d.charAt(t)),p.push(i.charAt(t));if(/insert*/.test(s)){let t=0;for(const i of l){const e=i;try{const i=p[t];this.doMask(this.doUnmask(e,i,!1),i,!1),t++}catch(t){d=o,h=a,c=n;break}}}else/delete*/.test(s)&&(d=this.doMask(this.doUnmask(d,i,!1),i));d=d.substring(0,i.length),e.value=d,this.maskedValue=d,this.oldMaskedValue=d,this.oldSelectionStart=h,this.oldSelectionEnd=c,e.setSelectionRange(h,c),this.seekCursor(),window.requestAnimationFrame((()=>{e.setSelectionRange(h,c),this.seekCursor()})),this.fireModifiedEvent(this.doUnmask(d,i,!1)),this.loaded&&this.autoValidate&&this.validate()}handleKeyup(t){"Escape"===t.key&&this.doRestore(!0),"Insert"===t.key&&(this.insertMode=!this.insertMode),this.loaded&&this.autoValidate&&this.validate()}handleCopyCut(t){const i=this.$input,e=i.selectionStart,s=i.selectionEnd,r=i.value,o=i.value.substring(e,s);if(t.clipboardData.setData("text/plain",o),t.preventDefault(),"cut"===t.type){const i=r.substring(0,e)+r.substring(s),o=this.getNoneStandardMaskChars(this.mask);let a="";for(let t=0;t<i.length;t++){const e=i.charAt(t),s=this.mask.charAt(t);if(o.indexOf(s)>-1)a+=s;else try{this.doMask(e,s,!1),a+=e}catch(t){break}}this.maskedValue=a,this.handleClick(),"cut"===t.type&&(this.fireModifiedEvent(this.value),this.autoValidate&&this.validate())}}handlePaste(t){const i=this.$input,e=this.mask,s=this.getNoneStandardMaskChars(e),r=i.selectionStart>0?i.selectionStart-1:0,o=Number.isNaN(i.selectionEnd)||0!=i.selectionEnd?i.selectionEnd:e.length,a=(t.clipboardData||window.clipboardData).getData("text");let n="";if(this.unformattedTextMode)n=a;else{let t=-1;for(let i=r;i<o;i++){const r=e.charAt(i);if(s.indexOf(r)>-1){n+=r,a.charAt(t+1)===r&&t++;continue}t++;const o=a.charAt(t);try{this.doMask(o,r,!1)}catch(t){continue}n+=o}}this.loaded&&this.autoValidate&&this.validate();const h=i.value.substring(0,i.selectionStart)+n+i.value.substring(i.selectionEnd);this.maskedValue=h.substring(0,e.length),t.preventDefault(),this.fireModifiedEvent(this.value)}handleSpinUp(){this.spin(!0)}handleSpinDown(){this.spin(!1)}fireModifiedEvent(t){this.readonly||this.disabled||this.modifiedEvent.emit(t)}render(){var t,i;const e=!this.validator,o=(null===(t=this.invalidMessage)||void 0===t?void 0:t.trim().length)>0,a=e?o?this.invalidMessage:this.builtinInvalidMessage:o?this.invalidMessage:"",n=this.invalid&&(null==a?void 0:a.trim().length)>0,h=(this.label||"").trim(),c=this.label&&this.label.length>0,f=(null===(i=this.helperText)||void 0===i?void 0:i.trim().length)>0||this.slotsObserver.hasContent("helper-text");return s(r,{key:"c2d806e0011708dc48c435d48468514fec5e6b0d","data-has-label":c,class:d({BBjControl:!0,BBjInputE:!0,"bbj-disabled":this.disabled,"bbj-focused":this.hasFocus,"bbj-readonly":this.readonly,"bbj-hasLabel":c,"bbj-valid":this.valid,"bbj-invalid":this.invalid,"bbj-required":this.required})},s("div",{key:"a447a05e76a753a88e6edaaeb2833d1fc8f450eb",part:"control"},h.length>0&&s("label",{key:"b4ac6ed90d57f301c10c8dfea7cf54855db57a74",part:"label",htmlFor:this.inputId,innerHTML:this.label}),s("div",{key:"5ee712cf0979f92c6186427aaf0a256c3eb2941b",part:"input-wrapper"},s("span",{key:"993d7e57a7fe81466211190f5ce9f83b108484e5",part:"prefix"},s("slot",{key:"0c8cb1b83ca139249da7aa74135347fcabf1505a",name:"prefix"})),s("div",{key:"3bf643cdcb531d4f7256b7a562f9788e4cd7cf1b",part:"input-group"},s("input",{key:"ca09ee7dbc2d85333c3bef40094eaa892226fabe",ref:t=>this.$padInput=t,part:"input input-pad",class:{monospace:this.padCharacter.trim().length>0},value:this.isMaskedValueEmpty(this.maskedValue)||0===this.padCharacter.trim().length?"":this.getPaddedValue(this.padCharacter,this.maskedValue,this.mask).trim(),hidden:!this.hasFocus||0===this.maskedValue.trim().length,style:{width:this.inputWidth?this.inputWidth+"px":"0"},tabIndex:-1}),s("input",{key:"bdce0acc5abe3a5fecd06e8539e8ddf71eb2ec07",id:this.inputId,ref:t=>this.$input=t,part:"input input-masked",class:{absolute:this.hasFocus&&this.maskedValue.trim().length>0,monospace:this.hasFocus&&this.padCharacter.trim().length>0},tabIndex:this.disabled?-1:this.tabTraversable,name:this.name,value:this.maskedValue,placeholder:0===this.maskedValue.trim().length?this.placeholder:"",readonly:this.readonly,required:this.required,pattern:this.pattern,disabled:this.disabled,spellcheck:this.spellcheck,autocomplete:this.autocomplete,autocapitalize:"off",autofocus:this.autofocus,autocorrect:this.autocorrect,"aria-describedby":"helper-text",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyup,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onInput:this.handleInput,onCopy:this.handleCopyCut,onCut:this.handleCopyCut,onPaste:this.handlePaste})),s("span",{key:"f95a92e16edad22fe6714a4dd546604c4f485e8d",part:"suffix"},s("slot",{key:"a08f75bf990a107475d2b68df61ade342967c4ab",name:"suffix"})),s(w,{key:"90a1507c301a3f1bc95e1d7ff338b02c45e8c043",visible:this.showSpinners,disabled:this.disabled||this.readonly,onSpinUp:this.handleSpinUp,onSpinDown:this.handleSpinDown})),"popover"===this.validationStyle&&n&&s(u,{key:"aede68ef2a545911e41d07bf3eb7bef0e2268674",invalidMessage:a,icon:this.validationIcon,hasFocus:this.hasFocus,popoverDistance:this.validationPopoverDistance,popoverPlacement:this.validationPopoverPlacement,popoverSkidding:this.validationPopoverSkidding})),s(p,{key:"a9c04c5f48f73ec05d015079dd2245838a64fc3c",helperText:this.helperText,visible:f}),"inline"===this.validationStyle&&n&&s(l,{key:"8d5a705ad83f1286fce9fb1534a16e668a2929d3",invalidMessage:a,icon:this.validationIcon}))}get el(){return o(this)}static get watchers(){return{hasFocus:["onHasFocusChanged"],mask:["onMaskChanged"],maskedValue:["onMaskedValueChanged"],value:["onValueChanged"]}}};m.style='@charset "UTF-8";@media (prefers-reduced-motion: reduce){*,::before,::after{animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;background-attachment:initial !important;scroll-behavior:auto !important;transition-delay:0s !important;transition-duration:0s !important}}:host{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;-webkit-tap-highlight-color:transparent;text-size-adjust:100%}:host *,:host *::before,:host *::after{box-sizing:inherit}:host{--dwc-icon-size:1.3em;display:inline-block}:host(:focus),:host(:active){outline:none}:host([disabled]){cursor:var(--dwc-disabled-cursor);opacity:var(--dwc-disabled-opacity);user-select:none;pointer-events:none}:host([disabled]) *{cursor:var(--dwc-disabled-cursor);user-select:none;pointer-events:none}[part=control]{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;height:inherit;width:100%}[part=label]{align-items:center;color:var(--dwc-input-label-color, var(--dwc-color-body-text));cursor:var(--dwc-cursor-click);display:none;font-size:90%;font-weight:var(--dwc-input-label-font-weight, var(--dwc-font-weight-semibold));gap:0.3rem;height:auto;margin:0;margin-bottom:var(--dwc-space-s);text-align:left;transition:var(--dwc-transition) color}[part=label]::after{color:var(--dwc-input-required-field-indicator-color, var(--dwc-color-primary-text));opacity:0;padding:0 var(--dwc-space-xs);text-align:center;transition:opacity var(--dwc-transition);width:1em}:host([required]) [part=label]::after{content:var(--dwc-input-required-field-indicator, "•");opacity:1}:host([data-has-label]) [part=label]{display:flex}[part=input-wrapper]{align-items:center;background:var(--dwc-input-background, var(--dwc-color-default-light));border:var(--dwc-input-border-width, var(--dwc-border-width)) var(--dwc-input-border-style, var(--dwc-border-style)) var(--dwc-input-border-color, var(--dwc-color-default-dark));border-radius:var(--dwc-border-radius);display:inline-flex;flex:1 1 auto;font-weight:var(--dwc-input-font-weight, var(--dwc-font-weight-semibold));height:100%;justify-content:start;overflow:hidden;position:relative;transition:var(--dwc-transition) background-color, var(--dwc-transition) color, var(--dwc-transition) border-color, var(--dwc-transition) box-shadow;vertical-align:middle;width:100%}:host(:not([disabled]):not([readonly])) [part=input-wrapper]:hover,:host(:not([disabled]):not([readonly])) [part=input-wrapper]:focus,:host(:not([disabled])) [part=input-wrapper]:hover,:host(:not([disabled])) [part=input-wrapper]:focus{background-color:var(--dwc-input-hover-background, var(--dwc-color-default-light));border-color:var(--dwc-input-hover-border-color, var(--dwc-color-primary));color:var(--dwc-input-hover-color, var(--dwc-color-on-default-text-light))}:host([has-focus]:not([disabled])) [part=input-wrapper],:host(.focus-visible:not([disabled])) [part=input-wrapper]{background-color:var(--dwc-input-hover-background, var(--dwc-color-default-light));border-color:var(--dwc-input-hover-border-color, var(--dwc-color-primary));color:var(--dwc-input-hover-color, var(--dwc-color-on-default-text-light))}:host(.focus-visible:not([disabled])) [part=input-wrapper]{box-shadow:var(--dwc-input-focus-ring, var(--dwc-focus-ring-default))}[part~=input]{appearance:none;background:none;border:unset;box-shadow:none;color:var(--dwc-input-color, currentColor);cursor:var(--dwc-cursor-text);flex:1 1 auto;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;height:100%;line-height:inherit;margin:0;min-width:0;padding:var(--dwc-space);text-align:inherit}[part~=input]::placeholder{color:var(--dwc-input-placeholder-color, var(--dwc-color-gray-60));user-select:none}[part~=input]:focus{outline:none}[part~=input]:-webkit-autofill,[part~=input]:-webkit-autofill:hover,[part~=input]:-webkit-autofill:focus,[part~=input]:-webkit-autofill:active{box-shadow:0 0 0 30px transparent inset !important}[part~=input]::selection{background:var(--dwc-input-selection-background, var(--dwc-color-primary-light));color:var(--dwc-input-selection-color, var(--dwc-color-on-primary-text-light))}:host([has-focus]:not([disabled])) [part=label]{color:var(--dwc-input-label-hover-color, var(--dwc-color-primary-text-light))}[part=prefix],[part=suffix]{cursor:default;flex:0 0 auto;text-align:center;user-select:none}[part=prefix] ::slotted(dwc-icon),[part=prefix] ::slotted(dwc-icon-button),[part=suffix] ::slotted(dwc-icon),[part=suffix] ::slotted(dwc-icon-button){display:inline-flex}[part=prefix] ::slotted(dwc-icon),[part=prefix] ::slotted(dwc-icon-button){padding-left:var(--dwc-space-xs)}[part=suffix] ::slotted(dwc-icon),[part=suffix] ::slotted(dwc-icon-button){padding-right:var(--dwc-space-xs)}dwc-alert{--dwc-alert-padding:var(--dwc-space-s) 0;margin-left:calc(var(--dwc-border-radius) / 4 + var(--dwc-border-width) * 2);text-align:left}:host([valid]),:host([invalid]){--dwc-icon-button-color:var(--dwc-input-color);--dwc-icon-button-hover-color:var(--dwc-icon-button-color);--dwc-icon-button-active-color:var(--dwc-icon-button-color)}:host([valid]:not([valid=false])){--dwc-input-label-color:var(--dwc-color-success-text);--dwc-input-label-hover-color:var(--dwc-color-success-text-light);--dwc-input-border-color:var(--dwc-color-success);--dwc-input-hover-border-color:var(--dwc-input-border-color);--dwc-input-focus-ring:var(--dwc-focus-ring-success);--dwc-input-placeholder-color:var(--dwc-color-gray-30);--dwc-input-selection-background:var(--dwc-color-success-light);--dwc-input-selection-color:var(--dwc-color-on-success-text-light);--dwc-input-required-field-indicator-color:var(--dwc-input-label-color)}:host([invalid]:not([invalid=false])){--dwc-input-label-color:var(--dwc-color-danger-text);--dwc-input-label-hover-color:var(--dwc-color-danger-text-light);--dwc-input-border-color:var(--dwc-color-danger);--dwc-input-hover-border-color:var(--dwc-input-border-color);--dwc-input-focus-ring:var(--dwc-focus-ring-danger);--dwc-input-placeholder-color:var(--dwc-color-gray-30);--dwc-input-selection-background:var(--dwc-color-danger-light);--dwc-input-selection-color:var(--dwc-color-on-danger-text-light);--dwc-alert-color:var(--dwc-input-label-color);--dwc-alert-icon-color:var(--dwc-alert-color);--dwc-input-required-field-indicator-color:var(--dwc-input-label-color)}[part=helper-text-wrapper],[part=helper-text-wrapper] ::slotted([slot=helper-text]){color:var(--dwc-color-gray-text-light);cursor:var(--dwc-cursor-text);font-size:var(--dwc-font-size-s);font-weight:var(--dwc-font-weight-normal);line-height:var(--dwc-font-line-height-s);text-align:left;transition:color 0.2s}[part=helper-text-wrapper][data-visible]{margin-left:calc(var(--dwc-border-radius) / 4 + var(--dwc-border-width) * 2);padding-top:var(--dwc-space-s)}:host([readonly]:not([data-editable])){--dwc-input-background:transparent;--dwc-input-border-color:var(--dwc-color-default-30);--dwc-input-border-style:dashed;--dwc-input-hover-background:var(--dwc-input-background);--dwc-input-hover-color:var(--dwc-input-color);--dwc-input-hover-border-color:var(--dwc-input-border-color)}:host(.bbj-transparent) [part=input-wrapper]{background:transparent !important}:host(.bbj-noborder) [part=input-wrapper]{border-color:transparent !important}[hidden]{display:none !important}[part=spinners]{--dwc-icon-size:1em;align-items:stretch;box-sizing:border-box;display:flex;flex-direction:column;height:100%;justify-content:center}[part=spinners]:not([hidden]){margin:var(--dwc-space-xs)}[part=spinners] dwc-icon-button{align-items:center;background:transparent;border:unset;box-sizing:border-box;display:flex;height:50%;margin:0;outline:none;padding:0;width:100%}:host([expanse=xl]){font-size:var(--dwc-font-size-xl)}:host([expanse=xl]) [part=input-wrapper]{height:var(--dwc-size-xl)}:host([expanse=l]){font-size:var(--dwc-font-size-l)}:host([expanse=l]) [part=input-wrapper]{height:var(--dwc-size-l)}:host([expanse=m]){font-size:var(--dwc-font-size-m)}:host([expanse=m]) [part=input-wrapper]{height:var(--dwc-size-m)}:host([expanse=s]){font-size:var(--dwc-font-size-s)}:host([expanse=s]) [part=input-wrapper]{height:var(--dwc-size-s)}:host([expanse=xs]){font-size:var(--dwc-font-size-xs)}:host([expanse=xs]) [part=input-wrapper]{height:var(--dwc-size-xs)}[part=input-group]{flex:1 1 auto;height:inherit;position:relative;width:inherit}[part~=input]{height:100%;width:100%}[part~=input-masked]{z-index:1}[part~=input].monospace{font-family:var(--dwc-font-family-mono) !important;font-size:inherit;font-style:inherit}[part~=input-pad]{color:var(--dwc-input-pad-color, var(--dwc-input-placeholder-color, var(--dwc-color-gray-60))) !important}[part~=input-masked].absolute{bottom:0;left:0;position:absolute;right:0;top:0}';export{m as dwc_textfield}