/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,c as i,h as s,H as e,g as h}from"./p-00e3df8e.js";import{h as n}from"./p-3e9fe89f.js";const a=class{constructor(s){t(this,s),this.modifiedEvent=i(this,"dwc-modified",7),this.spinedEvent=i(this,"dwc-spun",7),this.disabled=!1,this.readonly=!1,this.list=[],this.listIndex=0,this.wrap=!0}handleAttributesChanged(){this.handleSlotChange()}connectedCallback(){this.handleSlotChange=this.handleSlotChange.bind(this)}handleSpinedUp(){this.doSpin("up")}handleSpinedDown(){this.doSpin("down")}handleRequiredPropsChanged(t){t.stopPropagation();const{disabled:i,readonly:s}=t.detail;this.disabled=i,this.readonly=s}async setFocus(){await this.$field.setFocus()}async removeFocus(){await this.$field.removeFocus()}async spin(t){this.doSpin(t?"up":"down",!1)}doSpin(t,i=!0){if(!this.$field)return;if((this.readonly||this.disabled)&&1==i)return;const s=this.list.length-1,e=this.listIndex;let h;switch(t){case"up":h=e+1,h>s&&(h=this.wrap?0:e);break;case"down":h=e-1,h<0&&(h=this.wrap?s:e)}this.listIndex=h,i&&this.fireModifiedEvent(),this.fireSpinedEvent()}fireSpinedEvent(){this.readonly||this.disabled||this.spinedEvent.emit(this.$field.value)}fireModifiedEvent(){this.readonly||this.disabled||this.modifiedEvent.emit(this.$field.value)}handleSlotChange(){this.$field=this.el.querySelector("dwc-field"),this.$field&&(this.listIndex>=0&&this.listIndex<this.list.length&&(this.$field.value=this.list[this.listIndex]),this.$field.showSpinners=!0,this.$field.spinnable=!0,this.disabled=this.$field.disabled,this.readonly=this.$field.readonly)}render(){return s(e,{key:"b1e820916b681ed08365cfd2ccbefd81d291267d",class:n({BBjControl:!0,BBjSpinner:!0,BBjEditBoxSpinner:!0,"bbj-disabled":this.disabled,"bbj-readonly":this.readonly})},s("slot",{key:"4970a462f99e9cab0a7d1ae78f1d6467e02d7c0e",onSlotchange:this.handleSlotChange}))}get el(){return h(this)}static get watchers(){return{list:["handleAttributesChanged"],listIndex:["handleAttributesChanged"]}}};a.style="@media (prefers-reduced-motion: reduce){*,::before,::after{animation-delay:-1ms !important;animation-duration:1ms !important;animation-iteration-count:1 !important;background-attachment:initial !important;scroll-behavior:auto !important;transition-delay:0s !important;transition-duration:0s !important}}:host{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;-webkit-tap-highlight-color:transparent;text-size-adjust:100%}:host *,:host *::before,:host *::after{box-sizing:inherit}:host{display:inline-block}:host(:focus),:host(:active){outline:none}:host ::slotted(dwc-field){height:100%;width:100%}";export{a as dwc_field_spinner}