/*!
 * Built by BASIS
 * Copyright BASIS International Ltd.
 */
const e=async e=>new Promise((s=>setTimeout(s,e))),s=()=>{let e,s;const n=new Promise(((n,t)=>{e=n,s=t}));return n.resolve=e,n.reject=s,n},n=e=>new Promise((s=>{requestAnimationFrame((()=>{const n=e();s(n)}))}));export{s as a,e as d,n}