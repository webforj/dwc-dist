/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-PVlyEhfK.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const h=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"2f41705995fd5705f314012431e3e52d0b1fbd26"},s("span",{key:"627e4f2e49c1fa4227c3b8010498d61686440faf",part:"value"},this.format()))}};export{h as dwc_format_number}