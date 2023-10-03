import{s as se,n as R,f as z}from"./scheduler.63274e7e.js";import{S as ae,i as ne,g,s as w,h as p,j as D,y as re,c as k,f as _,l as N,k as v,a as S,x as n,z as ce,m as V,n as A,o as O,r as oe,u as ie,v as he,d as fe,t as ue,w as ve,e as X}from"./index.ff16eba4.js";import{b as P}from"./paths.18593da2.js";function U(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Z(s,e,t){const a=s.slice();return a[2]=e[t],a}function x(s){let e,t,a=s[2].rank+"",o,l,i,d=s[2].name+"",f,r,h,c=s[2].pseudo+"",y,M,H,j=s[2].elo+"",$,L,m,u=s[2].win+"",T,q,b,I=s[2].loss+"",C,G;return{c(){e=g("tr"),t=g("td"),o=V(a),l=w(),i=g("td"),f=V(d),r=w(),h=g("td"),y=V(c),M=w(),H=g("td"),$=V(j),L=w(),m=g("td"),T=V(u),q=w(),b=g("td"),C=V(I),G=w(),this.h()},l(B){e=p(B,"TR",{class:!0});var E=D(e);t=p(E,"TD",{class:!0});var W=D(t);o=A(W,a),W.forEach(_),l=k(E),i=p(E,"TD",{class:!0});var Y=D(i);f=A(Y,d),Y.forEach(_),r=k(E),h=p(E,"TD",{class:!0});var F=D(h);y=A(F,c),F.forEach(_),M=k(E),H=p(E,"TD",{class:!0});var J=D(H);$=A(J,j),J.forEach(_),L=k(E),m=p(E,"TD",{class:!0});var K=D(m);T=A(K,u),K.forEach(_),q=k(E),b=p(E,"TD",{class:!0});var Q=D(b);C=A(Q,I),Q.forEach(_),G=k(E),E.forEach(_),this.h()},h(){v(t,"class","center svelte-oat3cq"),v(i,"class","left svelte-oat3cq"),v(h,"class","center svelte-oat3cq"),v(H,"class","right svelte-oat3cq"),v(m,"class","center svelte-oat3cq"),v(b,"class","center svelte-oat3cq"),v(e,"class","svelte-oat3cq")},m(B,E){S(B,e,E),n(e,t),n(t,o),n(e,l),n(e,i),n(i,f),n(e,r),n(e,h),n(h,y),n(e,M),n(e,H),n(H,$),n(e,L),n(e,m),n(m,T),n(e,q),n(e,b),n(b,C),n(e,G)},p(B,E){E&1&&a!==(a=B[2].rank+"")&&O(o,a),E&1&&d!==(d=B[2].name+"")&&O(f,d),E&1&&c!==(c=B[2].pseudo+"")&&O(y,c),E&1&&j!==(j=B[2].elo+"")&&O($,j),E&1&&u!==(u=B[2].win+"")&&O(T,u),E&1&&I!==(I=B[2].loss+"")&&O(C,I)},d(B){B&&_(e)}}}function de(s){let e,t,a,o='<tr class="svelte-oat3cq"><th class="center svelte-oat3cq">Rank</th> <th class="left svelte-oat3cq">Name</th> <th class="center svelte-oat3cq">Pseudo</th> <th class="right svelte-oat3cq">Elo</th> <th class="center svelte-oat3cq">Win</th> <th class="center svelte-oat3cq">Loss</th></tr>',l,i,d=U(s[0]),f=[];for(let r=0;r<d.length;r+=1)f[r]=x(Z(s,d,r));return{c(){e=g("div"),t=g("table"),a=g("thead"),a.innerHTML=o,l=w(),i=g("tbody");for(let r=0;r<f.length;r+=1)f[r].c();this.h()},l(r){e=p(r,"DIV",{style:!0});var h=D(e);t=p(h,"TABLE",{class:!0});var c=D(t);a=p(c,"THEAD",{style:!0,"data-svelte-h":!0}),re(a)!=="svelte-9o96hf"&&(a.innerHTML=o),l=k(c),i=p(c,"TBODY",{class:!0});var y=D(i);for(let M=0;M<f.length;M+=1)f[M].l(y);y.forEach(_),c.forEach(_),h.forEach(_),this.h()},h(){N(a,"border-radius","100%"),v(i,"class","Body"),v(t,"class","svelte-oat3cq"),N(e,"width","50%")},m(r,h){S(r,e,h),n(e,t),n(t,a),n(t,l),n(t,i);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(i,null)},p(r,[h]){if(h&1){d=U(r[0]);let c;for(c=0;c<d.length;c+=1){const y=Z(r,d,c);f[c]?f[c].p(y,h):(f[c]=x(y),f[c].c(),f[c].m(i,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=d.length}},i:R,o:R,d(r){r&&_(e),ce(f,r)}}}function _e(s,e,t){let{players:a=[{rank:1,name:"Hugo",pseudo:"Hugo",elo:1e3,win:0,loss:0}]}=e,{name:o}=e;return s.$$set=l=>{"players"in l&&t(0,a=l.players),"name"in l&&t(1,o=l.name)},[a,o]}class me extends ae{constructor(e){super(),ne(this,e,_e,de,se,{players:0,name:1})}}const ee={Brawlhalla:"/brawlhalla",SmashBros:"/smashbros",Multiversus:"/multiversus"};function te(s,e,t){const a=s.slice();return a[2]=e[t][0],a[3]=e[t][1],a}function ge(s){let e,t,a,o,l,i=s[2]+"",d,f;return{c(){e=g("a"),t=g("img"),o=w(),l=g("h3"),d=V(i),f=w(),this.h()},l(r){e=p(r,"A",{href:!0,class:!0});var h=D(e);t=p(h,"IMG",{class:!0,src:!0,alt:!0}),o=k(h),l=p(h,"H3",{style:!0});var c=D(l);d=A(c,i),c.forEach(_),f=k(h),h.forEach(_),this.h()},h(){v(t,"class","nav-img svelte-l5g5tv"),z(t.src,a=`${P}/${s[2]}.png`)||v(t,"src",a),v(t,"alt",s[2]),N(l,"color","white"),v(e,"href",`${P}${s[3]}`),v(e,"class","nav-a svelte-l5g5tv")},m(r,h){S(r,e,h),n(e,t),n(e,o),n(e,l),n(l,d),n(e,f)},p:R,d(r){r&&_(e)}}}function pe(s){let e,t,a,o,l,i=s[2]+"",d,f;return{c(){e=g("a"),t=g("img"),o=w(),l=g("h3"),d=V(i),f=w(),this.h()},l(r){e=p(r,"A",{href:!0,class:!0});var h=D(e);t=p(h,"IMG",{class:!0,src:!0,alt:!0}),o=k(h),l=p(h,"H3",{style:!0});var c=D(l);d=A(c,i),c.forEach(_),f=k(h),h.forEach(_),this.h()},h(){v(t,"class","nav-img svelte-l5g5tv"),z(t.src,a=`${P}/${s[2]}.png`)||v(t,"src",a),v(t,"alt",s[2]),N(l,"color","white"),v(e,"href",`${P}${s[3]}`),v(e,"class","nav-a nav-selected svelte-l5g5tv")},m(r,h){S(r,e,h),n(e,t),n(e,o),n(e,l),n(l,d),n(e,f)},p:R,d(r){r&&_(e)}}}function le(s){let e;function t(l,i){return l[0]==l[2]?pe:ge}let a=t(s),o=a(s);return{c(){o.c(),e=X()},l(l){o.l(l),e=X()},m(l,i){o.m(l,i),S(l,e,i)},p(l,i){a===(a=t(l))&&o?o.p(l,i):(o.d(1),o=a(l),o&&(o.c(),o.m(e.parentNode,e)))},d(l){l&&_(e),o.d(l)}}}function be(s){let e,t,a,o,l,i,d,f,r,h,c,y,M,H,j="",$,L=U(Object.entries(ee)),m=[];for(let u=0;u<L.length;u+=1)m[u]=le(te(s,L,u));return y=new me({props:{name:s[0],players:s[1]}}),{c(){e=g("div"),t=g("div"),a=g("div");for(let u=0;u<m.length;u+=1)m[u].c();o=w(),l=g("div"),i=g("img"),f=w(),r=g("h1"),h=V(s[0]),c=w(),oe(y.$$.fragment),M=w(),H=g("div"),H.innerHTML=j,this.h()},l(u){e=p(u,"DIV",{class:!0});var T=D(e);t=p(T,"DIV",{class:!0});var q=D(t);a=p(q,"DIV",{class:!0});var b=D(a);for(let G=0;G<m.length;G+=1)m[G].l(b);b.forEach(_),o=k(q),l=p(q,"DIV",{class:!0});var I=D(l);i=p(I,"IMG",{class:!0,src:!0,alt:!0}),f=k(I),r=p(I,"H1",{style:!0});var C=D(r);h=A(C,s[0]),C.forEach(_),I.forEach(_),c=k(q),ie(y.$$.fragment,q),M=k(q),H=p(q,"DIV",{class:!0,"data-svelte-h":!0}),re(H)!=="svelte-1uwft06"&&(H.innerHTML=j),q.forEach(_),T.forEach(_),this.h()},h(){v(a,"class","navigation svelte-l5g5tv"),v(i,"class","main-img svelte-l5g5tv"),z(i.src,d=`${P}/${s[0]}.png`)||v(i,"src",d),v(i,"alt",s[0]),N(r,"color","white"),v(l,"class","header-container svelte-l5g5tv"),v(H,"class","footer-container svelte-l5g5tv"),v(t,"class","center svelte-l5g5tv"),v(e,"class","container svelte-l5g5tv")},m(u,T){S(u,e,T),n(e,t),n(t,a);for(let q=0;q<m.length;q+=1)m[q]&&m[q].m(a,null);n(t,o),n(t,l),n(l,i),n(l,f),n(l,r),n(r,h),n(t,c),he(y,t,null),n(t,M),n(t,H),$=!0},p(u,[T]){if(T&1){L=U(Object.entries(ee));let b;for(b=0;b<L.length;b+=1){const I=te(u,L,b);m[b]?m[b].p(I,T):(m[b]=le(I),m[b].c(),m[b].m(a,null))}for(;b<m.length;b+=1)m[b].d(1);m.length=L.length}(!$||T&1&&!z(i.src,d=`${P}/${u[0]}.png`))&&v(i,"src",d),(!$||T&1)&&v(i,"alt",u[0]),(!$||T&1)&&O(h,u[0]);const q={};T&1&&(q.name=u[0]),T&2&&(q.players=u[1]),y.$set(q)},i(u){$||(fe(y.$$.fragment,u),$=!0)},o(u){ue(y.$$.fragment,u),$=!1},d(u){u&&_(e),ce(m,u),ve(y)}}}function Ee(s,e,t){let{name:a="Undefined"}=e,{players:o=[]}=e;return s.$$set=l=>{"name"in l&&t(0,a=l.name),"players"in l&&t(1,o=l.players)},[a,o]}class Te extends ae{constructor(e){super(),ne(this,e,Ee,be,se,{name:0,players:1})}}export{Te as B};
