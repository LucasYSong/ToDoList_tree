var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,j as w,k as B,l as S,m as L,p as b,q as I,v as M,w as N,x as P,y as T,z as q}from"./scheduler.92fb626a.js";let $=!1;function z(){$=!0}function D(){$=!1}function H(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function O(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=a?l+1:H(1,l,d=>t[n[d]].claim_order,a))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,l=Math.max(f,l)}const c=[],s=[];let u=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);u>=r;u--)s.push(t[u]);u--}for(;u>=0;u--)s.push(t[u]);c.reverse(),s.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<s.length;r++){for(;a<c.length&&s[r].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;e.insertBefore(s[r],o)}}function R(e,t){if($){for(O(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ne(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function W(e){return document.createElement(e)}function F(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function re(){return x(" ")}function ae(){return x("")}function se(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function G(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e,t){for(const n in t)G(e,n,t[n])}function ue(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,l=!1){K(e);const c=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const u=e[s];if(t(u)){const r=n(u);return r===void 0?e.splice(s,1):e[s]=r,l||(e.claim_info.last_index=s),u}}for(let s=e.claim_info.last_index-1;s>=0;s--){const u=e[s];if(t(u)){const r=n(u);return r===void 0?e.splice(s,1):e[s]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,u}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function A(e,t,n,i){return E(e,l=>l.nodeName===t,l=>{const c=[];for(let s=0;s<l.attributes.length;s++){const u=l.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>l.removeAttribute(s))},()=>i(t))}function ce(e,t,n){return A(e,t,n,W)}function fe(e,t,n){return A(e,t,n,F)}function Q(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function oe(e){return Q(e," ")}function _e(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t){e.value=t??""}function me(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function he(e,t){return new e(t)}const m=new Set;let _;function $e(){_={r:0,c:[],p:_}}function pe(){_.r||h(_.c),_=_.p}function U(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ye(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function X(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),b(()=>{const c=e.$$.on_mount.map(P).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),l.forEach(b)}function Y(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(T.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,l,c,s,u=[-1]){const r=M;N(e);const a=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:l,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};s&&s(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(f,d,...g)=>{const v=g.length?g[0]:d;return a.ctx&&l(a.ctx[f],a.ctx[f]=v)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](v),o&&Z(e,f)),d}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){z();const f=J(t.target);a.fragment&&a.fragment.l(f),f.forEach(V)}else a.fragment&&a.fragment.c();t.intro&&U(e.$$.fragment),X(e,t.target,t.anchor),D(),B()}N(r)}class we{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!L(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const k="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(k);export{le as A,ie as B,ue as C,de as D,se as E,we as S,ne as a,pe as b,oe as c,U as d,ae as e,V as f,W as g,ce as h,ve as i,J as j,G as k,me as l,x as m,Q as n,_e as o,$e as p,he as q,xe as r,re as s,ye as t,ge as u,X as v,Y as w,R as x,F as y,fe as z};
