/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-DAc-vBYB.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const h=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"7186d08116fba381d569b76a465c244d0a8d7170"},s("span",{key:"83b13c680ea6cc0fc799cbb137e1263c49172eb3",part:"value"},this.format()))}};export{h as dwc_format_number}