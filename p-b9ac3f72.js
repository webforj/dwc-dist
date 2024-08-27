/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{h as e}from"./p-00e3df8e.js";const a=({invalidMessage:a,icon:r,hasFocus:t,popoverDistance:p,popoverPlacement:i,popoverSkidding:n})=>e("dwc-alert-popover",{part:"alert-popover",distance:p,icon:r,message:a,opened:t,placement:i,skidding:n,theme:"danger"}),r=({id:a="helper-text",visible:r=!0,helperText:t})=>e("div",{part:"helper-text-wrapper",id:a,"aria-hidden":t?"false":"true","data-visible":r},e("slot",{name:"helper-text"},e("div",{part:"helper-text",innerHTML:t}))),t=({invalidMessage:a,icon:r})=>e("dwc-alert",{part:"alert",class:{"bbj-noborder":!0,"bbj-transparent":!0,"bbj-danger-text":!0},icon:r,message:a,opened:!0,theme:"danger"});export{t as D,r as a,a as b}