/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-CTv_NFWg.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const a=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"c536b6c2a26f5fe217e2cf3d61191bedef58920a"},s("span",{key:"547c17dac64fa2a2574cabd1fc6e2b7ae528160f",part:"value"},this.format()))}};export{a as dwc_format_number}