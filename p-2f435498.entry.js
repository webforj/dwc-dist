/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,c as i,h as e,H as r,g as a}from"./p-00e3df8e.js";const o=class{constructor(e){t(this,e),this.locationChangedEvent=i(this,"dwc-location-changed",7),this.disabled=!1,this.hasItems=!1,this.path=void 0,this.opened=!1,this.target=void 0,this.selected=void 0,this.routerIgnore=!1}connectedCallback(){this.handleClick=this.handleClick.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.handleSlotChange=this.handleSlotChange.bind(this)}componentWillLoad(){this.handleSlotChange()}componentDidLoad(){null!=window.applyFocusVisiblePolyfill&&window.applyFocusVisiblePolyfill(this.el.shadowRoot)}handleClick(t){var i;if(this.disabled)return;const e=(null===(i=this.path)||void 0===i?void 0:i.trim().length)>0;e&&this.routerIgnore||(t.preventDefault(),t.stopPropagation(),this.hasItems||this.locationChangedEvent.emit(this.path)),this.hasItems&&!e&&(this.opened=!this.opened)}handleKeyUp(t){this.disabled||"Enter"!==t.key&&" "!==t.key||this.handleClick(t)}handleSlotChange(){const t=this.el.querySelectorAll('[slot="items"]');this.hasItems=t.length>0}render(){return e(r,{key:"8e6997e386ba08b339b4727980a685856d0efcb6","data-drawer-breakpoint-close":!0},e("div",{key:"4f2ecd92c6050fa7b3d76761f07bdc8c068bd489",part:"control",role:"listitem"},e("div",{key:"5c27ea55759e49aec425d9a6c011887389635e3f",part:"link-wrapper",onClick:this.handleClick,onKeyUp:this.handleKeyUp},e("a",{key:"2369e6d743fa18ae9d85417d27719ec5d7f92684",part:"link",href:this.path,target:this.target,tabindex:this.disabled?-1:0,"aria-expanded":this.opened,"aria-current":this.selected,"aria-disabled":this.disabled?"true":"false"},e("slot",{key:"69e716de298b4274b639f331402e9d13a852ca98",name:"prefix"}),e("slot",{key:"d51f2b145f60a09dfb158062ca300fb23cbee640"})),e("div",{key:"6b0e8985c627cc8afa3135464101842aedb5d258",part:"suffix"},e("slot",{key:"f319368ab2d9c5e51cda4e5205a27cbef06b325e",name:"suffix"}),this.hasItems&&e("dwc-icon",{key:"5a9c5f9b6e0bb20a6b482c2347a1a22b8b774b2b",name:"chevron-down",pool:"dwc",part:"chevron"}))),this.opened&&e("div",{key:"2fc76a6d54b5d0478b20e87ab17c9500a46520b2",part:"items",role:"list",hidden:!this.opened,"aria-hidden":this.opened?"false":"true"},e("slot",{key:"893c55ed0b5880dae94ee9f3d5f5666a74bdef5f",name:"items",onSlotchange:this.handleSlotChange}))))}get el(){return a(this)}};o.style="@media (prefers-reduced-motion: reduce){*,::before,::after{animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;background-attachment:initial !important;scroll-behavior:auto !important;transition-delay:0s !important;transition-duration:0s !important}}:host{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;-webkit-tap-highlight-color:transparent;text-size-adjust:100%}:host *,:host *::before,:host *::after{box-sizing:inherit}:host{border:thin solid transparent;border-radius:var(--dwc-border-radius-m);display:block;font-size:var(--dwc-font-size-m);transition:var(--dwc-transition) box-shadow, var(--dwc-transition) border-color}:host(.focus-visible){border-color:var(--dwc-color-primary);box-shadow:var(--dwc-focus-ring-primary);z-index:1}:host([disabled]) [part=control]{cursor:var(--dwc-disabled-cursor);opacity:var(--dwc-disabled-opacity);user-select:none;pointer-events:none}:host([disabled]) [part=control] *{cursor:var(--dwc-disabled-cursor);user-select:none;pointer-events:none}:host(:not([disabled])) [part=control]{cursor:var(--dwc-cursor-click)}:host([has-items]) [part=control]{cursor:default}[part=control]{border-radius:inherit;display:flex;flex-direction:column}[part=link-wrapper]{align-items:center;border-radius:inherit;display:inline-flex;height:var(--dwc-size-l);transition:background-color var(--dwc-transition);width:100%}[part=link]{align-items:center;border:inherit;border-radius:inherit;color:inherit;display:inline-flex;flex:1;font:inherit;font-weight:var(--dwc-font-weight-semibold);gap:var(--dwc-space-xs);min-width:0;outline:none;padding:var(--dwc-space-s) var(--dwc-space-s);position:relative;text-decoration:none;transition:var(--dwc-transition) color;user-select:none;width:inherit}[part=items]{padding-left:var(--dwc-space-m)}[part=suffix]{--dwc-icon-size:1.3em;align-items:center;display:inline-flex;flex:0 0 auto;gap:var(--dwc-space-xs);justify-content:center;padding:0 var(--dwc-space-m)}[part=chevron]{transform-origin:center;transition:color var(--dwc-transition) linear, transform var(--dwc-transition)}:host([opened]) [part=chevron]{transform:rotate(180deg)}:host([selected]) [part=link-wrapper]{color:var(--dwc-color-primary)}:host(:hover:not([disabled])) [part=link-wrapper]{background-color:var(--dwc-color-primary-alt)}:host ::slotted(img[slot=prefix]),:host ::slotted(img[slot=suffix]){align-items:center;display:inline-flex;flex:0 0 auto;height:var(--dwc-icon-size);vertical-align:middle;width:var(--dwc-icon-size)}";export{o as dwc_app_nav_item}