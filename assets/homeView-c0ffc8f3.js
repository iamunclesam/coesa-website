import{_ as w,C as b,N as y,B as k,I as C,g as N,c as S,d as j,r as i,o as r,a as _,e as t,b as s,n as d,D as I,F as h,h as T,A as V,t as B,p as A,i as D}from"./index-7e689c1a.js";import{s as L,h as E}from"./headerComp-8da3ae7b.js";const z={components:{sideNav:L,headerCompVue:E,Carousel:b,Navigation:y,Slide:k,Icon:C},data(){return{loading:!0,courses:[],settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},1024:{itemsToShow:3,snapAlign:"start"}}}},async created(){try{const o=await N(S(j,"Courses"));this.loading=!1,this.courses=o.docs.map(a=>({id:a.id,...a.data()}))}catch(o){console.error("Error fetching item list:",o)}},methods:{sanitizeTitle(o){return o.toLowerCase().replace(/[^\w-]+/g,"-")}}},e=o=>(A("data-v-e5fb42d3"),o=o(),D(),o),F={class:"header"},Y={class:"container-fluid"},q={class:"row"},P={class:"sidebar border border-right col-lg-2 d-md-none d-lg-block p-0 bg-body-tertiary"},U={class:"ms-sm-auto col-lg-10 px-md-4",style:{background:"#ffffff"}},$={class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},G={class:"container"},H=e(()=>t("h3",{class:"d-none d-lg-block"},"Dashboard",-1)),J={class:"row my-3 d-none d-md-flex d-lg-flex"},K={class:"col-lg-3 col-md-3 col-6"},M={class:"item shadow py-2 px-3 rounded bg-white"},O={class:"d-flex justify-content-center align-items-center"},Q={class:"text-center"},R=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),W=e(()=>t("p",{class:"item-foot"},"Your Courses",-1)),X={class:"col-lg-3 col-md-3 col-6"},Z={class:"item shadow py-2 px-3 rounded bg-white"},tt={class:"d-flex justify-content-center align-items-center"},et={class:"text-center"},st=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),ot=e(()=>t("p",{class:"item-foot"},"Tasks",-1)),ct={class:"col-lg-3 col-md-3 col-6"},it={class:"item shadow py-2 px-3 rounded bg-white"},nt={class:"d-flex justify-content-center align-items-center"},dt={class:"text-center"},at=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),lt=e(()=>t("p",{class:"item-foot"},"Notes",-1)),rt={class:"col-lg-3 col-md-3 col-6"},_t={class:"item shadow py-2 px-3 rounded bg-white"},ht={class:"d-flex justify-content-center align-items-center"},pt={class:"text-center"},mt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),ut=e(()=>t("p",{class:"item-foot"},"Likes",-1)),xt={class:"scroll-container"},gt={class:"media-item"},vt={class:"item shadow-sm py-2 px-3 rounded bg-white"},ft={class:"d-flex justify-content-center align-items-center"},wt={class:"text-center"},bt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),yt=e(()=>t("p",{class:"item-foot"},"Your Courses",-1)),kt={class:"media-item"},Ct={class:"item shadow-sm py-2 px-3 rounded bg-white"},Nt={class:"d-flex justify-content-center align-items-center"},St={class:"text-center"},jt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),It=e(()=>t("p",{class:"item-foot"},"Tasks",-1)),Tt={class:"media-item"},Vt={class:"item shadow-sm py-2 px-3 rounded bg-white"},Bt={class:"d-flex justify-content-center align-items-center"},At={class:"text-center"},Dt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),Lt=e(()=>t("p",{class:"item-foot"},"Notes",-1)),Et={class:"media-item"},zt={class:"item shadow-sm py-2 px-3 rounded bg-white"},Ft={class:"d-flex justify-content-center align-items-center"},Yt={class:"text-center"},qt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),Pt=e(()=>t("p",{class:"item-foot"},"Likes",-1)),Ut={class:"course-section my-5 bg-white rounded px-3 py-4"},$t=e(()=>t("h4",null,"Explore Tech Courses",-1)),Gt={class:"course my-3"},Ht={class:"row"},Jt={class:"col-lg-9 col-md-12"},Kt={class:"card text-dark"},Mt=["src"],Ot={class:"card-body"},Qt={class:"card-title py-2"},Rt=e(()=>t("div",{class:"col-lg-3 col-md-12"},null,-1));function Wt(o,a,Xt,Zt,l,p){const m=i("headerCompVue"),u=i("sideNav"),c=i("Icon"),x=i("router-link"),g=i("Slide"),v=i("Navigation"),f=i("Carousel");return r(),_(h,null,[t("div",F,[s(m)]),t("div",Y,[t("div",q,[t("div",P,[s(u)]),t("main",U,[t("div",$,[t("div",G,[H,t("div",J,[t("div",K,[t("div",M,[t("div",O,[t("div",Q,[s(c,{icon:"cil:education",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#2cbef3"}}),R,W])])])]),t("div",X,[t("div",Z,[t("div",tt,[t("div",et,[s(c,{icon:"ic:twotone-add-task",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5dec85"}}),st,ot])])])]),t("div",ct,[t("div",it,[t("div",nt,[t("div",dt,[s(c,{icon:"clarity:note-line",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#f3c90c"}}),at,lt])])])]),t("div",rt,[t("div",_t,[t("div",ht,[t("div",pt,[s(c,{icon:"iconamoon:like",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5629d3"}}),mt,ut])])])])]),t("div",xt,[t("div",gt,[t("div",vt,[t("div",ft,[t("div",wt,[s(c,{icon:"cil:education",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#2cbef3"}}),bt,yt])])])]),t("div",kt,[t("div",Ct,[t("div",Nt,[t("div",St,[s(c,{icon:"ic:twotone-add-task",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5dec85"}}),jt,It])])])]),t("div",Tt,[t("div",Vt,[t("div",Bt,[t("div",At,[s(c,{icon:"clarity:note-line",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#f3c90c"}}),Dt,Lt])])])]),t("div",Et,[t("div",zt,[t("div",Ft,[t("div",Yt,[s(c,{icon:"iconamoon:like",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5629d3"}}),qt,Pt])])])])]),t("div",Ut,[$t,t("div",Gt,[t("div",Ht,[t("div",Jt,[s(f,I({"wrap-around":!0},l.settings,{breakpoints:l.breakpoints}),{addons:d(()=>[s(v)]),default:d(()=>[(r(!0),_(h,null,T(l.courses,n=>(r(),V(g,{key:n.id},{default:d(()=>[t("div",Kt,[t("img",{src:n.imageUrl,alt:"",class:"card-img-top"},null,8,Mt),t("div",Ot,[s(x,{to:`/all-course/${p.sanitizeTitle(n.title)}`,class:"route"},{default:d(()=>[t("h5",Qt,B(n.title),1)]),_:2},1032,["to"])])])]),_:2},1024))),128))]),_:1},16,["breakpoints"])]),Rt])])])])])])])])],64)}const se=w(z,[["render",Wt],["__scopeId","data-v-e5fb42d3"]]);export{se as default};
