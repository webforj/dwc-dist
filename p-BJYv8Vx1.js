/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
import{h as n}from"./p-C1UlJQPF.js";const o=({visible:o,disabled:t=!1,onSpinUp:a,onSpinDown:e})=>n("span",{part:"spinners",hidden:!o},n("dwc-icon-button",{part:"up-button",pool:"dwc",name:"chevron-up",tabTraversable:-1,disabled:t,onClick:a}),n("dwc-icon-button",{part:"down-button",pool:"dwc",name:"chevron-down",tabTraversable:-1,disabled:t,onClick:e}));function t(n,o,t){n.selectionStart===o&&n.selectionEnd===t||(n.selectionStart=o,n.selectionEnd=t)}function a(n){return{start:n.selectionStart||0,end:n.selectionEnd||0}}export{o as D,a as g,t as s}