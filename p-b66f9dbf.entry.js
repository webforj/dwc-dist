/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r,c as t,d as a,h as e,H as o,g as d}from"./p-00e3df8e.js";import"./p-384ad3a0.js";import{t as i}from"./p-dc076e70.js";import{h as c}from"./p-3e9fe89f.js";const s=class{constructor(a){r(this,a),this.closedEvent=t(this,"dwc-drawer-closed",7),this.openedEvent=t(this,"dwc-drawer-opened",7),this.$lastActiveElement=null,this.autofocus=!1,this.contained=!1,this.footerVisible=!0,this.headerVisible=!0,this.label="Drawer",this.opened=!1,this.placement="left"}onOpenedChanged(){this.opened?this.doOpen():this.doClose()}connectedCallback(){this.handleInternalCloseClick=this.handleInternalCloseClick.bind(this)}componentDidLoad(){this.opened&&this.doOpen()}handleClick(r){r.target.closest("[data-drawer-close]")&&(r.preventDefault(),this.opened=!1)}async open(){this.opened=!0}async close(){this.opened=!1}doOpen(){this.contained||(this.$lastActiveElement=i(document.activeElement),this.$focusTrap&&this.autofocus&&a((()=>{requestAnimationFrame((()=>{const r=this.$focusTrap.getFocusableElements().filter((r=>{var t,a;if(r.closest('[slot="header-actions"]'))return!1;const e=r.getRootNode();return!(null===(t=e.host)||void 0===t?void 0:t.closest('[slot="header-actions"]'))&&!(null===(a=e.host)||void 0===a?void 0:a.closest('[part="header-actions"]'))}));if(r.length>0)try{r[0].focus(),r[0].setFocus()}catch(r){}}))}))),this.openedEvent.emit()}doClose(){if(!this.contained&&(this.el.tabIndex=-1,null!=this.$lastActiveElement)){this.$lastActiveElement.focus();try{this.$lastActiveElement.setFocus()}catch(r){}this.$lastActiveElement=null}this.closedEvent.emit()}handleInternalCloseClick(){this.opened=!1}render(){return e(o,{key:"aa80ae770832548c0eda072ffc8af0aff51fabcd",class:c({"bbj-opened":this.opened})},e("focus-trap",{key:"7c4f0cce47c50fc76022e519b09a3a9f7a7b68d9",ref:r=>this.$focusTrap=r},e("dwc-backdrop",{key:"9d5a3c14484f774b2b250f7e1b0b732dbfada8e4",part:"backdrop",visible:this.opened,onClick:this.handleInternalCloseClick}),e("div",{key:"8804f108c0a58ef1eb7b08f7beaab891ac1183d9",part:"control",role:"dialog","aria-modal":!this.contained,"aria-hidden":this.opened?"false":"true","aria-label":this.label},this.headerVisible&&e("header",{key:"4500a0763d0309c96bd041075330543a94f68aeb",part:"header"},e("slot",{key:"b4efb57742d4d8fbd6ba7b01352c326935e65cd5",name:"title"},e("div",{key:"970fc3a66c919904d8ac45f22dca2ad2b97259ce",part:"title",innerHTML:this.label.length>0?this.label:String.fromCharCode(65279)})),e("div",{key:"4e9ce35544375009b9173ed1260b9ffb7de9e639",part:"header-actions"},e("slot",{key:"0e58b65111ae6ec670b916ae41a7e2ce8bf433e7",name:"header-actions"}),e("dwc-icon-button",{key:"ab971fb1e30f2100966cc899ce0779046585b355",part:"close-button",pool:"dwc",name:"icon-x",onClick:this.handleInternalCloseClick}))),e("section",{key:"adcba2137f16762914fb49e242ebe72f218cb56d",part:"body"},e("slot",{key:"63cff7ba61ad37b722034b4f9db6122c22bb7b40"})),this.footerVisible&&e("footer",{key:"b0c4efd7ed538879e9ec96dfaa9e6abb0fbb377c",part:"footer"},e("slot",{key:"78334360870ccbe0910482dfbceabdbcd65c42c9",name:"footer"})))))}get el(){return d(this)}static get watchers(){return{opened:["onOpenedChanged"]}}};s.style="@media (prefers-reduced-motion: reduce){*,::before,::after{animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;background-attachment:initial !important;scroll-behavior:auto !important;transition-delay:0s !important;transition-duration:0s !important}}:host{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;-webkit-tap-highlight-color:transparent;text-size-adjust:100%}:host *,:host *::before,:host *::after{box-sizing:inherit}:host{--_dwc-drawer-size:var(--dwc-drawer-size, 25em);--_dwc-drawer-max-size:var(--dwc-drawer-max-size, 90%);--_dwc-drawer-max-width:var(--dwc-drawer-max-width, 576px);--_dwc-drawer-border:var(--dwc-drawer-border, var(--dwc-border-width) var(--dwc-border-style) var(--dwc-color-default));--_dwc-drawer-header-space:var(--dwc-drawer-header-space, var(--dwc-space-m));--_dwc-drawer-body-space:var(--dwc-drawer-body-space, var(--dwc-space-m));--_dwc-drawer-footer-space:var(--dwc-drawer-footer-space, var(--dwc-space-m));z-index:var(--dwc-backdrop-zindex, var(--dwc-zindex-h0))}:host([opened]){contain:strict;inset:0;position:fixed}[part=backdrop]{cursor:var(--dwc-cursor-click)}[part=control]{background:var(--dwc-drawer-background, var(--dwc-surface-3));box-sizing:border-box;display:flex;flex-direction:column;height:100%;justify-content:inherit;max-width:var(--_dwc-drawer-max-size);overflow:auto;overscroll-behavior:contain;position:fixed;touch-action:none;transform:translateX(-100%);transition:transform var(--dwc-transition), box-shadow var(--dwc-transition);width:var(--_dwc-drawer-size);z-index:var(--dwc-backdrop-zindex, var(--dwc-zindex-h0))}:host([opened]) [part=control]{box-shadow:var(--dwc-drawer-shadow, var(--dwc-shadow-xl));touch-action:manipulation;transform:translateX(0%)}:host([placement=left]) [part=control]{border-right:var(--_dwc-drawer-border);bottom:var(--dwc-drawer-bottom, 0);left:var(--dwc-drawer-left, 0);padding-left:env(safe-area-inset-left);right:var(--dwc-drawer-right, auto);top:var(--dwc-drawer-top, 0)}:host([placement=right]) [part=control]{border-left:var(--_dwc-drawer-border);left:var(--dwc-drawer-left, auto);padding-right:env(safe-area-inset-right);right:var(--dwc-drawer-right, 0);top:var(--dwc-drawer-top, 0);transform:translateX(100%)}:host([opened][placement=right]) [part=control]{transform:translateX(0%)}:host([placement=top]) [part=control],:host([placement=top-center]) [part=control]{border-bottom:var(--_dwc-drawer-border);bottom:var(--dwc-drawer-bottom, auto);height:var(--_dwc-drawer-size);left:0;max-height:var(--_dwc-drawer-max-size);max-width:100%;padding-top:env(safe-area-inset-top);right:var(--dwc-drawer-right, 0);top:var(--dwc-drawer-top, 0);transform:translateY(-100%);width:100%}:host([opened][placement=top]) [part=control],:host([opened][placement=top-center]) [part=control]{transform:translateY(0%)}:host([placement=bottom]) [part=control],:host([placement=bottom-center]) [part=control]{border-top:var(--_dwc-drawer-border);bottom:var(--dwc-drawer-bottom, 0);height:var(--_dwc-drawer-size);left:var(--dwc-drawer-left, 0);max-height:var(--_dwc-drawer-max-size);max-width:100%;padding-bottom:env(safe-area-inset-bottom);right:var(--dwc-drawer-right, 0);top:var(--dwc-drawer-top, auto);transform:translateY(100%);width:100%}:host([opened][placement=bottom]) [part=control],:host([opened][placement=bottom-center]) [part=control]{transform:translateY(0%)}:host([placement=top-center]) [part=control],:host([placement=bottom-center]) [part=control]{margin-left:auto;margin-right:auto;max-width:var(--_dwc-drawer-max-width)}:host([placement=top-center]) [part=control]{border-bottom-left-radius:var(--dwc-drawer-border-radius, var(--dwc-border-radius));border-bottom-right-radius:var(--dwc-drawer-border-radius, var(--dwc-border-radius))}:host([placement=bottom-center]) [part=control]{border-top-left-radius:var(--dwc-drawer-border-radius, var(--dwc-border-radius));border-top-right-radius:var(--dwc-drawer-border-radius, var(--dwc-border-radius))}[part=header]{align-items:center;border-bottom:var(--_dwc-drawer-border);display:flex}[part=title],[part=header] ::slotted([slot=title]),[part=header] ::slotted([slot=drawer-title]){flex:1 1 auto;font:inherit;font-size:var(--dwc-font-size-xl);font-weight:var(--dwc-font-weight-semibold);margin:0;padding:var(--_dwc-drawer-header-space)}[part=header-actions]{display:flex;flex-shrink:0;flex-wrap:wrap;gap:var(--dwc-space-xs);justify-content:end;padding:0 var(--_dwc-drawer-header-space)}[part=header-actions] dwc-icon-button,[part=header-actions] ::slotted(dwc-icon-button){--dwc-icon-size:var(--dwc-font-size-xl);align-items:center;display:flex;flex:0 0 auto}[part=body]{display:block;flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch;padding:var(--_dwc-drawer-body-space)}[part=footer]{padding:var(--_dwc-drawer-footer-space);text-align:right}";export{s as dwc_drawer}