/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{r as t,h as s,H as r}from"./p-CHhekFeZ.js";import{N as i}from"./p-CT50qSTH.js";import"./p-CkXXbFtM.js";const a=class{constructor(s){t(this,s),this.value=0,this.mask="",this.groupSeparator=",",this.decimalSeparator=".",this.forceTrailingZeros=!1}format(){if(!this.mask)return String(this.value);try{return i.mask(this.value,this.mask,this.groupSeparator,this.decimalSeparator,this.forceTrailingZeros,!0,!0,!0,!1)}catch(t){return String(this.value)}}render(){return s(r,{key:"aeb6d60cfc6732574a8cb77b555c5c964388549e"},s("span",{key:"9e97d0958af7a9c0abcba843f4189bb18c0c86f5",part:"value"},this.format()))}};export{a as dwc_format_number}