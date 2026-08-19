/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-C1UlJQPF.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const a=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"92863c27c55521bcbafa4b8c227f281211f259e3"},s("span",{key:"cee8a1d5866494a0975d617868f911afffc5728d",part:"value"},this.format()))}};export{a as dwc_format_number}