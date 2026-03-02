/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-S6mAD0im.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const a=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"64b1b5691c8d3c2139a143d64455f940386f64cb"},s("span",{key:"7a2a3570f4bbcdc35258f97da3d67baf0f34560d",part:"value"},this.format()))}};export{a as dwc_format_number}