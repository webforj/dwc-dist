/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
const t=/((http|ftp|https):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,a=/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i,r=r=>{if(!r)return{};if("object"==typeof r)return r;{if(t.test(r)||a.test(r))return{src:r};const e=r.split(":");if(2===e.length&&e[0]&&e[1])return{name:e[1],pool:e[0]};if(1===e.length&&e[0])return{name:e[0],pool:"dwc"}}};export{r as i}