/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{h as e}from"./p-B_HFaEtQ.js";const a=({invalidMessage:a,icon:t,hasFocus:r,popoverDistance:p,popoverPlacement:i,popoverSkidding:n})=>e("dwc-alert-popover",{part:"alert-popover",distance:p,icon:t,message:a,opened:r,placement:i,skidding:n,theme:"danger"}),t=({id:a="helper-text",visible:t=!0,helperText:r})=>e("div",{part:"helper-text-wrapper",id:a,"aria-hidden":r?"false":"true","data-visible":t},e("slot",{name:"helper-text"},e("div",{part:"helper-text",innerHTML:r}))),r=({invalidMessage:a,icon:t})=>e("dwc-alert",{part:"alert",class:{"bbj-noborder":!0,"bbj-transparent":!0,"bbj-danger-text":!0},icon:t,message:a,opened:!0,theme:"danger"});export{r as D,t as a,a as b}