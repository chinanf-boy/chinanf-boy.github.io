import{u as S,a as x,b as I,c as C,r as O,d as f,o as g,e as T,f as l,w as d,T as L,g as v,h as R,i as A,v as D,j as _,k,l as j,m as u,n as y,p as P,q as w,A as V,s as U,t as H,D as B,P as N,O as F,L as G,x as M,C as q,F as z,y as W,z as $,B as J,E as X,G as K,S as Y,I as Q,H as Z,J as ee,K as te,M as se,N as ae,Q as oe,R as re,U as ne,V as ie,W as ce,X as de,Y as ue,Z as le,_ as me,$ as pe,a0 as _e,a1 as ge,a2 as he,a3 as fe,a4 as ve,a5 as ye,a6 as Ce,a7 as be,a8 as Ee,a9 as Se,aa as xe,ab as Ie,ac as Oe,ad as Te}from"./vendor.c4966802.js";const Le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};Le();var Re=(e,t)=>{for(const[n,a]of t)e[n]=a;return e};const Ae={setup(){const e=S(),t=x(),n=I();e.beforeEach((o,i)=>{let m=["goods","detail","cart","login"];console.log(n.state.syHidden),console.log(o),console.log(i),console.log(t),o.name==i.name&&e.back(),m.some(p=>o.name.startsWith(p))?n.commit("falseHidden"):n.commit("trueHidden")});const a=C(()=>n.state.message),s=C(()=>n.state.syHidden);return{active:O(0),message:a,sy_hidden:s}}},De=_("\u9996\u9875"),ke=_("\u793C\u7269"),je=_("\u8F66\u8F66"),Pe=_("\u6211\u7684"),we=_("\u6211\u7684");function Ve(e,t,n,a,s,r){const o=f("router-view"),i=f("van-tabbar-item"),m=f("van-tabbar");return g(),T("div",null,[l(o,null,{default:d(({Component:p})=>[l(L,{name:"fade",mode:"out-in",appear:""},{default:d(()=>[(g(),v(R(p)))]),_:2},1024)]),_:1}),A(l(m,{route:"",modelValue:a.active,"onUpdate:modelValue":t[0]||(t[0]=p=>a.active=p)},{default:d(()=>[l(i,{to:"/home",icon:"home-o"},{default:d(()=>[De]),_:1}),l(i,{to:"/category",icon:"gift-o"},{default:d(()=>[ke]),_:1}),l(i,{to:"/cart",icon:"cart-o"},{default:d(()=>[je]),_:1}),a.message>0?(g(),v(i,{key:0,to:"/user",icon:"setting-o",badge:a.message},{default:d(()=>[Pe]),_:1},8,["badge"])):(g(),v(i,{key:1,to:"/user",icon:"setting-o"},{default:d(()=>[we]),_:1}))]),_:1},8,["modelValue"]),[[D,a.sy_hidden]])])}var Ue=Re(Ae,[["render",Ve]]);const He="modulepreload",b={},Be="/shuiguo/",c=function(t,n){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=`${Be}${a}`,a in b)return;b[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":He,s||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),s)return new Promise((i,m)=>{o.addEventListener("load",i),o.addEventListener("error",m)})})).then(()=>t())},Ne=()=>c(()=>import("./Home.0ac3ed70.js"),["assets/Home.0ac3ed70.js","assets/Home.c1799e41.css","assets/GoodsList.408f57f9.js","assets/GoodsList.3bb19ebd.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css","assets/storage.691bfb87.js","assets/hit.2f1f439e.js"]),Fe=()=>c(()=>import("./index.409e0625.js"),["assets/index.409e0625.js","assets/index.5d541ea9.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css","assets/storage.691bfb87.js"]),Ge=()=>c(()=>import("./index.a7471755.js"),["assets/index.a7471755.js","assets/index.43608d2a.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css"]),Me=()=>c(()=>import("./index.56c4cdb2.js"),["assets/index.56c4cdb2.js","assets/index.fad49474.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css","assets/hit.2f1f439e.js","assets/storage.691bfb87.js"]),qe=()=>c(()=>import("./index.a00000da.js"),["assets/index.a00000da.js","assets/vendor.c4966802.js","assets/vendor.c6596da5.css"]),ze=()=>c(()=>import("./index.fed21994.js"),["assets/index.fed21994.js","assets/index.e604215e.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css","assets/hit.2f1f439e.js"]),We=()=>c(()=>import("./index.cbde0a97.js"),["assets/index.cbde0a97.js","assets/index.e5d13820.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css","assets/storage.691bfb87.js"]),$e=()=>c(()=>import("./index.9197ec17.js"),["assets/index.9197ec17.js","assets/index.3ec08f53.css","assets/GoodsList.408f57f9.js","assets/GoodsList.3bb19ebd.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css","assets/hit.2f1f439e.js"]),Je=()=>c(()=>import("./index.dac7349d.js"),["assets/index.dac7349d.js","assets/index.3f24af58.css","assets/GoodsList.408f57f9.js","assets/GoodsList.3bb19ebd.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css","assets/hit.2f1f439e.js"]),E=k({history:j(),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:Ne,meta:{index:1},children:[{path:"aaa",component:()=>c(()=>import("./index.a7471755.js"),["assets/index.a7471755.js","assets/index.43608d2a.css","assets/vendor.c4966802.js","assets/vendor.c6596da5.css"])}]},{path:"/cart",name:"cart",component:Fe,meta:{index:2}},{path:"/goods",name:"goods",component:Ge,meta:{index:3}},{path:"/user",name:"user",component:Me,meta:{index:4}},{path:"/friends",name:"friends",component:qe,meta:{index:5}},{path:"/login",name:"login",component:We,meta:{index:6}},{path:"/detail/:id",name:"detail",component:ze,meta:{index:7}},{path:"/search",name:"search",component:$e,meta:{index:8}},{path:"/category",name:"category",component:Je,meta:{index:9}}]});var Xe={user:{name:"yobrave",password:"123"},sessionToken:"",searchTips:["\u5973\u88C51","\u5973\u88C52","\u5973\u88C53"],searchFilter:{single:["\u4EAC\u4E1C\u7269\u6D41","\u62CD\u62CD\u4E8C\u624B"],\u54C1\u724C:["ios","ANDRIOD","\u5C0F\u7C73","\u534E\u4E3A"],\u56FE\u6848:["\u82B1","HU"],\u7535\u538B:["110V","220V"],\u7C7B\u522B:["\u5185\u88E4","\u56F4\u5DFE"]},searchUserCfg:{one:{},more:{}},sideBarList:["\u70ED\u95E8\u63A8\u8350","\u73A9\u5177\u4E50\u5668","\u624B\u673A\u6570\u7801","\u8D85\u5E02","\u5BB6\u7528\u7535\u5668","\u7535\u8111\u529E\u516C","\u5BB6\u5C45\u5BB6\u88C5","\u5185\u8863\u914D\u9970","\u989C\u6599","\u6E05\u6F06","\u7814\u7A76","\u5BFC\u822A","\u6D4B\u91CF","\u6444\u5F71","\u7535\u5F71","\u89C6\u542C"],cartCount:0,message:1,syHidden:!0,searchValue:"",images:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img10.viwik.com/20190524/tooopen_sy_163436343670264.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/ipad.jpeg"],goods:[{goodID:0,num:2,selled:1e4,tag:"\u6807\u7B7E1",price:"2.00",desc:"\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0",title:"\u5546\u54C1\u4FE1\u606F",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",oldPrice:"10.00",collect:0},{goodID:1,num:2,selled:1e4,tag:"\u6807\u7B7E1",price:"21.00",desc:"\u63CF\u8FF0",title:"\u5546\u54C1\u4FE1\u606F",thumb:"https://img10.viwik.com/20190524/tooopen_sy_163436343670264.jpg",oldPrice:"10.00",collect:0}]},Ke={getSingle(e){return e.searchFilter.single},getMore(e){let t=JSON.parse(JSON.stringify(e.searchFilter));return delete t.single,t},getFilterCfg:e=>t=>e.searchUserCfg.more[t]};u.defaults.baseURL="//backend-api-01.newbee.ltd/api/v1";u.defaults.withCredentials=!0;u.defaults.headers["X-Requested-With"]="XMLHttpRequest";u.defaults.headers.token=localStorage.getItem("token")||"";u.defaults.headers.post["Content-Type"]="application/json";u.interceptors.response.use(e=>typeof e.data!="object"?(y.fail("\u670D\u52A1\u7AEF\u5F02\u5E38\uFF01"),Promise.reject(e)):e.data.resultCode!=200?(e.data.message&&y.fail(e.data.message),e.data.resultCode==416&&E.push({path:"/login"}),Promise.reject(e.data)):e.data);function Ye(e){return u.get("/shop-cart",{params:e})}var Qe={async updateCart(e){const{data:t}=await Ye();e.commit("addCart",{count:t.length||0})}},Ze={addCart(e,t){e.cartCount=t.count},trueHidden(e){e.syHidden=!0},falseHidden(e){e.syHidden=!1},setSessionToekn(e,t){e.sessionToekn=t},setSearchUserCfgOne(e,t){e.searchUserCfg.one[t]=1},removeSearchUserCfgOne(e,t){e.searchUserCfg.one[t]=0},setSearchUserCfgMore(e,t){e.searchUserCfg.more[t]=1},removeSearchUserCfgMore(e,t){e.searchUserCfg.more[t]=0},toggleSearchUserCfgMore(e,t){e.searchUserCfg.more[t]=e.searchUserCfg.more[t]?0:1}},et=P({state:Xe,getters:Ke,mutations:Ze,actions:Qe,modules:{}});const h=w(Ue);h.use(V).use(U).use(H).use(B).use(N).use(F).use(G).use(M).use(y).use(q).use(z).use(W).use($).use(J).use(X).use(K).use(Y).use(Q).use(Z).use(ee).use(te).use(se).use(ae).use(oe).use(re).use(ne).use(ie).use(ce).use(de).use(ue).use(le).use(me).use(pe).use(_e).use(ge).use(he).use(fe).use(ve).use(ye).use(Ce).use(be).use(Ee).use(Se).use(xe).use(Ie).use(Oe).use(Te);h.use(E);h.use(et);h.mount("#app");export{Re as _};
