/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as o,h as t,H as r,g as a}from"./p-00e3df8e.js";import{S as c}from"./p-7ccdab1d.js";const e=class{constructor(t){o(this,t),this.compact=!1,this.theme="default"}connectedCallback(){var o;null===(o=this.slotsObserver)||void 0===o||o.connect()}disconnectedCallback(){var o;null===(o=this.slotsObserver)||void 0===o||o.disconnect()}componentWillLoad(){this.slotsObserver=new c(this.el,"start","title","__main__","end")}render(){const o=this.slotsObserver.hasContent("start"),a=this.slotsObserver.hasContent("title"),c=this.slotsObserver.hasContent("end"),e=this.slotsObserver.hasContent("__main__");return t(r,{key:"64e3531e2ce29bfdf1921e7d530c09da56f5745a"},t("div",{key:"2059f914d1bc131da60ebf6971f4f48561694952",part:"control"},t("div",{key:"ba8f63290fda373528e7dcb61f12ee150a65502f",part:"start",hidden:!o},t("slot",{key:"e25d0e0e06dfde8dc140870aed60121d68eec881",name:"start"})),t("div",{key:"e7c366ac648d6f3ab020bc8eb503b3d2da46073e",part:"title",hidden:!a},t("slot",{key:"4b4d3ad8fcca8425d18ff9581f0adbd65a0f3f5e",name:"title"})),t("div",{key:"01024556d5f8adcfe08b4fcd0ac4effb2398e95e",part:"content",hidden:!e},t("slot",{key:"639ad7b59688dd4ef4ead194c929e063f6174363"})),t("div",{key:"aa50dea7b1b88c692207aa8a9f20bb6e4fa7a80d",part:"end",hidden:!c},t("slot",{key:"2aea6f66c2868b2df9907e20c48158c283d229a0",name:"end"}))))}get el(){return a(this)}};e.style="@media (prefers-reduced-motion: reduce){*,::before,::after{animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;background-attachment:initial !important;scroll-behavior:auto !important;transition-delay:0s !important;transition-duration:0s !important}}:host{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;-webkit-tap-highlight-color:transparent;text-size-adjust:100%}:host *,:host *::before,:host *::after{box-sizing:inherit}:host{background-color:var(--dwc-toolbar-background);color:var(--dwc-toolbar-color);display:block;width:100%}[part=control]{display:flex;flex-direction:row;gap:var(--dwc-space-m);height:100%;width:inherit}:host(:not([compact])) [part=control]{padding:var(--dwc-space-m)}[part=start],[part=title],[part=end]{display:flex;gap:var(--dwc-space-s)}[part=title]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[part=start]{justify-content:flex-start}[part=end]{justify-content:flex-end}[part=start],[part=end]{flex:0 1 auto}[part=title]{flex:1 1 auto;justify-content:flex-start}[part=content]{display:block;flex:1 1 auto;min-width:0}[hidden]{display:none !important}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){font-size:var(--dwc-font-size-xl) !important;margin:0 !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::slotted(dwc-progressbar){--dwc-border-radius-xl:0;--dwc-border-width:0;--dwc-progressbar-height:3px;--dwc-progressbar-front-color:transparent;--dwc-progressbar-back-color:transparent;bottom:0;left:0;position:absolute;right:0;width:100%}:host([theme=primary]){--dwc-toolbar-background:var(--dwc-color-primary);--dwc-toolbar-color:var(--dwc-color-on-primary-text);--dwc-icon-button-hover-color:var(--dwc-color-primary-alt);--dwc-icon-button-active-color:var(--dwc-color-primary-alt)}:host([theme=success]){--dwc-toolbar-background:var(--dwc-color-success);--dwc-toolbar-color:var(--dwc-color-on-success-text);--dwc-icon-button-hover-color:var(--dwc-color-success-alt);--dwc-icon-button-active-color:var(--dwc-color-success-alt)}:host([theme=warning]){--dwc-toolbar-background:var(--dwc-color-warning);--dwc-toolbar-color:var(--dwc-color-on-warning-text);--dwc-icon-button-hover-color:var(--dwc-color-warning-alt);--dwc-icon-button-active-color:var(--dwc-color-warning-alt)}:host([theme=danger]){--dwc-toolbar-background:var(--dwc-color-danger);--dwc-toolbar-color:var(--dwc-color-on-danger-text);--dwc-icon-button-hover-color:var(--dwc-color-danger-alt);--dwc-icon-button-active-color:var(--dwc-color-danger-alt)}:host([theme=info]){--dwc-toolbar-background:var(--dwc-color-info);--dwc-toolbar-color:var(--dwc-color-on-info-text);--dwc-icon-button-hover-color:var(--dwc-color-info-alt);--dwc-icon-button-active-color:var(--dwc-color-info-alt)}:host([theme=gray]){--dwc-toolbar-background:var(--dwc-color-gray);--dwc-toolbar-color:var(--dwc-color-on-gray-text);--dwc-icon-button-hover-color:var(--dwc-color-gray-alt);--dwc-icon-button-active-color:var(--dwc-color-gray-alt)}";export{e as dwc_toolbar}