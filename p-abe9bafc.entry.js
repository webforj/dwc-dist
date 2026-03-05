/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-S6mAD0im.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const e=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"f4343104efb30d1ea4cd022b4d55c8be9b0f0160"},s("span",{key:"a2b5db5deced91e61d2612c6f2f2fbaa9cca5bb5",part:"value"},this.format()))}};export{e as dwc_format_number}