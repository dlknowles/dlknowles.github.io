(()=>{let e,n={};function t(t){!function(t){let o=t;!0===n.hasOwnProperty(t)&&(o=n[t]),async function(e){return fetch(`./views/${e}.html`).then((e=>{if(!e.ok)throw new Error(`HTTP error: ${e.status}`);return e.text()})).catch((e=>{console.error(`Could not fetch view: ${e}`)}))}(o).then((n=>{e.innerHTML=n}))}(function(e){try{return n[e]||e}catch(n){console.error(n),console.error("Route not found",e)}}(window.location.hash.slice(1)||"/"))}document.addEventListener("DOMContentLoaded",(()=>{e=document.querySelector("#app"),n["/"]="home",e.innerHTML="Hi there!",window.addEventListener("load",t),window.addEventListener("hashchange",t)}))})();