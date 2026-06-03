/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-CHhekFeZ.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const a=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"755010282219baa8202a82a1cde8758be5879cba"},s("span",{key:"0db9d8781c4855df716e0dcbdcc6c024a1e679fd",part:"value"},this.format()))}};export{a as dwc_format_number}