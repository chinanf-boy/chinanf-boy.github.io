import{a7 as m,a6 as f,I as g,G as v,E as k,b as y,u as L,r as j,ae as w,d as n,o as _,e as B,f as e,w as o,g as h,an as b,ai as N,j as s}from"./vendor.c4966802.js";import{T as V}from"./hit.2f1f439e.js";import{g as z,s as T}from"./storage.691bfb87.js";import{_ as E}from"./index.7a6b267d.js";const G={components:{[m.name]:m,[f.name]:f,[g.name]:g,[v.name]:v,[k.name]:k},setup(){y();const r=L(),a=j(!1);a.value=!!z("token");const d=()=>{T("token",""),V("\u9000\u51FA\u6210\u529F"),a.value=!1},t=()=>{r.push({path:"/login"})};return w(()=>{}),{Logout:d,Login:t,login:a}}},I=N("img",{class:"user-poster",src:"https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"},null,-1),R=s(" \u5F85\u4ED8\u6B3E "),M=s(" \u5F85\u63A5\u5355 "),S=s(" \u5F85\u53D1\u8D27 "),q=s(" \u5DF2\u53D1\u8D27 "),A=s("\u9000\u51FA"),D=s("\u767B\u5165");function F(r,a,d,t,H,J){const c=n("van-icon"),l=n("van-col"),C=n("van-row"),i=n("van-cell"),u=n("van-cell-group"),x=n("van-divider"),p=n("van-button");return _(),B("div",null,[I,e(C,{class:"user-links"},{default:o(()=>[e(l,{span:"6"},{default:o(()=>[e(c,{name:"pending-payment"}),R]),_:1}),e(l,{span:"6"},{default:o(()=>[e(c,{name:"records"}),M]),_:1}),e(l,{span:"6"},{default:o(()=>[e(c,{name:"tosend"}),S]),_:1}),e(l,{span:"6"},{default:o(()=>[e(c,{name:"logistics"}),q]),_:1})]),_:1}),e(u,{class:"user-group"},{default:o(()=>[e(i,{icon:"records",title:"\u5168\u90E8\u8BA2\u5355","is-link":""})]),_:1}),e(u,null,{default:o(()=>[e(i,{icon:"points",title:"\u6211\u7684\u79EF\u5206","is-link":""}),e(i,{icon:"gold-coin-o",title:"\u6211\u7684\u4F18\u60E0\u5238","is-link":""}),e(i,{icon:"gift-o",title:"\u6211\u6536\u5230\u7684\u793C\u7269","is-link":""})]),_:1}),e(x),t.login?(_(),h(p,{key:0,type:"danger",size:"large",onClick:t.Logout},{default:o(()=>[A]),_:1},8,["onClick"])):b("",!0),t.login?b("",!0):(_(),h(p,{key:1,type:"primary",size:"large",onClick:t.Login},{default:o(()=>[D]),_:1},8,["onClick"]))])}var U=E(G,[["render",F]]);export{U as default};
