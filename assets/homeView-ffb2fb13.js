import{_ as y,I as b,r as l,o as p,a as x,e as t,b as s,p as k,i as $,C as I,N as T,B as V,g as A,c as z,d as L,n as m,D as B,F as v,h as w,A as E,t as f,z as F}from"./index-f1c47732.js";import{s as Y,h as J}from"./headerComp-0a711a3b.js";const M={components:{Icon:b}},n=o=>(k("data-v-c635fd3c"),o=o(),$(),o),P={class:"container m-2 footer d-flex justify-content-between shadow py-2 px-2 rounded"},U={class:"text-center"},q=n(()=>t("br",null,null,-1)),G=n(()=>t("span",null,"Home",-1)),H={class:"text-center"},O=n(()=>t("br",null,null,-1)),K=n(()=>t("span",null,"Learn",-1)),Q={class:"text-center"},R=n(()=>t("br",null,null,-1)),W=n(()=>t("span",null,"Events",-1)),X={class:"text-center"},Z=n(()=>t("br",null,null,-1)),tt=n(()=>t("span",null,"Notification",-1)),et={class:"text-center"},st=n(()=>t("br",null,null,-1)),ot=n(()=>t("span",null,"Account",-1));function ct(o,_,a,h,r,u){const d=l("Icon");return p(),x("div",P,[t("div",U,[s(d,{icon:"charm:home",color:"black",width:"20"}),q,G]),t("div",H,[s(d,{icon:"mdi:learn-outline",color:"black",width:"20"}),O,K]),t("div",Q,[s(d,{icon:"ic:outline-event",color:"black",width:"20"}),R,W]),t("div",X,[s(d,{icon:"tdesign:notification",color:"black",width:"20"}),Z,tt]),t("div",et,[s(d,{icon:"gg:profile",color:"black",width:"20"}),st,ot])])}const it=y(M,[["render",ct],["__scopeId","data-v-c635fd3c"]]);const nt={components:{sideNav:Y,headerCompVue:J,Carousel:I,Navigation:T,Slide:V,Icon:b,footerCompVue:it},data(){return{loading:!0,courses:[],settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},1024:{itemsToShow:3,snapAlign:"start"}}}},async created(){try{const o=await A(z(L,"Courses"));this.loading=!1,this.courses=o.docs.map(_=>{const a=_.data(),h=this.formatDate(a.date);return{id:_.id,...a,formattedDate:h}})}catch(o){console.error("Error fetching item list:",o)}},methods:{formatDate(o){const _=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=new Date(o),h=a.getDate(),r=_[a.getMonth()],u=a.getFullYear(),d=this.getDaySuffix(h);return`${r} ${h}${d} ${u}`},getDaySuffix(o){if(o>=11&&o<=13)return"th";switch(o%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},sanitizeTitle(o){return o.toLowerCase().replace(/[^\w-]+/g,"-")}}},e=o=>(k("data-v-f069cd17"),o=o(),$(),o),dt={class:"header"},lt={class:""},at={class:"row"},rt={class:"container-fluid"},_t={class:"sidebar border-right col-lg-2 d-md-none d-lg-block p-0 bg-body-tertiary"},ht={class:"ms-sm-auto col-lg-10 px-md-4",style:{background:"#ecedf1"}},pt={class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0 pb-2 mb-3"},ut={class:"container-fluid"},mt=e(()=>t("h3",{class:"d-none d-lg-block"},"Dashboard",-1)),xt={class:"row my-3 d-none d-md-flex d-lg-flex"},ft={class:"col-lg-3 col-md-3 col-6"},vt={class:"item shadow py-2 px-3 rounded bg-white"},gt={class:"d-flex justify-content-center align-items-center"},wt={class:"text-center"},yt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),bt=e(()=>t("p",{class:"item-foot"},"Your Courses",-1)),kt={class:"col-lg-3 col-md-3 col-6"},$t={class:"item shadow py-2 px-3 rounded bg-white"},Ct={class:"d-flex justify-content-center align-items-center"},jt={class:"text-center"},St=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),Dt=e(()=>t("p",{class:"item-foot"},"Tasks",-1)),Nt={class:"col-lg-3 col-md-3 col-6"},It={class:"item shadow py-2 px-3 rounded bg-white"},Tt={class:"d-flex justify-content-center align-items-center"},Vt={class:"text-center"},At=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),zt=e(()=>t("p",{class:"item-foot"},"Notes",-1)),Lt={class:"col-lg-3 col-md-3 col-6"},Bt={class:"item shadow py-2 px-3 rounded bg-white"},Et={class:"d-flex justify-content-center align-items-center"},Ft={class:"text-center"},Yt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),Jt=e(()=>t("p",{class:"item-foot"},"Likes",-1)),Mt=e(()=>t("h4",{class:"school-updates"},null,-1)),Pt={class:"scroll-container"},Ut={class:"media-item"},qt={class:"item shadow-sm py-2 px-3 rounded bg-white"},Gt={class:"d-flex justify-content-center align-items-center"},Ht={class:"text-center"},Ot=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),Kt=e(()=>t("p",{class:"item-foot"},"Your Courses",-1)),Qt={class:"media-item"},Rt={class:"item shadow-sm py-2 px-3 rounded bg-white"},Wt={class:"d-flex justify-content-center align-items-center"},Xt={class:"text-center"},Zt=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),te=e(()=>t("p",{class:"item-foot"},"Tasks",-1)),ee={class:"media-item"},se={class:"item shadow-sm py-2 px-3 rounded bg-white"},oe={class:"d-flex justify-content-center align-items-center"},ce={class:"text-center"},ie=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),ne=e(()=>t("p",{class:"item-foot"},"Notes",-1)),de={class:"media-item"},le={class:"item shadow-sm py-2 px-3 rounded bg-white"},ae={class:"d-flex justify-content-center align-items-center"},re={class:"text-center"},_e=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),he=e(()=>t("p",{class:"item-foot"},"Likes",-1)),pe={class:"course-section my-5 bg-white d-none d-md-none d-lg-block rounded px-3 py-4"},ue=e(()=>t("h4",null,"Explore Tech Courses",-1)),me={class:"course my-3"},xe={class:"row"},fe={class:"col-lg-9 col-md-12"},ve={class:"card text-dark"},ge=["src"],we={class:"card-body"},ye={class:"card-title py-2"},be=e(()=>t("div",{class:"col-lg-3 col-md-12"},null,-1)),ke={class:"mt-4"},$e={class:"d-flex justify-content-between"},Ce=e(()=>t("h4",{class:"school-updates"},"Popular Courses",-1)),je={class:"d-flex",style:{"font-size":"14px","font-weight":"600",color:"rgb(96, 95, 95)"}},Se=e(()=>t("span",null,"See all",-1)),De={class:"popular-courses"},Ne=["src"],Ie={class:"media-body mx-2"},Te={style:{width:"100%"}},Ve={class:"card-title py-2 text-truncate",style:{"white-space":"nowrap !important","text-align":"left",overflow:"hidden","text-overflow":"ellipsis !important"}},Ae={class:"flex-place d-flex justify-content-between",style:{width:"100%","margin-top":"-5px"}},ze={class:"d-flex"},Le={class:"mx-1"},Be=e(()=>t("span",{class:"text-success price"},"Free",-1)),Ee={class:"foot d-flex",style:{"margin-top":"-10px","font-size":"13px"}},Fe={style:{"margin-top":"-3px"},class:"mx-1"},Ye={style:{"margin-bottom":"60px"}},Je=e(()=>t("h4",{class:"school-updates mt-4"},"Edisapp Today",-1)),Me={class:"scroll-container"},Pe={class:"media-item"},Ue={class:"item shadow-sm py-2 px-3 rounded bg-white"},qe={class:"d-flex justify-content-center align-items-center"},Ge={class:"text-center"},He=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),Oe=e(()=>t("p",{class:"item-foot"},"Your Courses",-1)),Ke={class:"media-item"},Qe={class:"item shadow-sm py-2 px-3 rounded bg-white"},Re={class:"d-flex justify-content-center align-items-center"},We={class:"text-center"},Xe=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),Ze=e(()=>t("p",{class:"item-foot"},"Tasks",-1)),ts={class:"media-item"},es={class:"item shadow-sm py-2 px-3 rounded bg-white"},ss={class:"d-flex justify-content-center align-items-center"},os={class:"text-center"},cs=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),is=e(()=>t("p",{class:"item-foot"},"Notes",-1)),ns={class:"media-item"},ds={class:"item shadow-sm py-2 px-3 rounded bg-white"},ls={class:"d-flex justify-content-center align-items-center"},as={class:"text-center"},rs=e(()=>t("h4",{class:"text-center item-head pt-2"},"0",-1)),_s=e(()=>t("p",{class:"item-foot"},"Likes",-1)),hs={class:"d-block d-md-block d-lg-none"};function ps(o,_,a,h,r,u){const d=l("headerCompVue"),C=l("sideNav"),c=l("Icon"),g=l("router-link"),j=l("Slide"),S=l("Navigation"),D=l("Carousel"),N=l("footerCompVue");return p(),x(v,null,[t("div",dt,[s(d)]),t("div",lt,[t("div",at,[t("div",rt,[t("div",_t,[s(C)])]),t("main",ht,[t("div",pt,[t("div",ut,[mt,t("div",xt,[t("div",ft,[t("div",vt,[t("div",gt,[t("div",wt,[s(c,{icon:"cil:education",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#2cbef3"}}),yt,bt])])])]),t("div",kt,[t("div",$t,[t("div",Ct,[t("div",jt,[s(c,{icon:"ic:twotone-add-task",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5dec85"}}),St,Dt])])])]),t("div",Nt,[t("div",It,[t("div",Tt,[t("div",Vt,[s(c,{icon:"clarity:note-line",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#f3c90c"}}),At,zt])])])]),t("div",Lt,[t("div",Bt,[t("div",Et,[t("div",Ft,[s(c,{icon:"iconamoon:like",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5629d3"}}),Yt,Jt])])])])]),t("div",null,[Mt,t("div",Pt,[t("div",Ut,[t("div",qt,[t("div",Gt,[t("div",Ht,[s(c,{icon:"cil:education",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#2cbef3"}}),Ot,Kt])])])]),t("div",Qt,[t("div",Rt,[t("div",Wt,[t("div",Xt,[s(c,{icon:"ic:twotone-add-task",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5dec85"}}),Zt,te])])])]),t("div",ee,[t("div",se,[t("div",oe,[t("div",ce,[s(c,{icon:"clarity:note-line",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#f3c90c"}}),ie,ne])])])]),t("div",de,[t("div",le,[t("div",ae,[t("div",re,[s(c,{icon:"iconamoon:like",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5629d3"}}),_e,he])])])])])]),t("div",pe,[ue,t("div",me,[t("div",xe,[t("div",fe,[s(D,B({"wrap-around":!0},r.settings,{breakpoints:r.breakpoints}),{addons:m(()=>[s(S)]),default:m(()=>[(p(!0),x(v,null,w(r.courses,i=>(p(),E(j,{key:i.id},{default:m(()=>[t("div",ve,[t("img",{src:i.imageUrl,alt:"",class:"card-img-top"},null,8,ge),t("div",we,[s(g,{to:`/all-course/${u.sanitizeTitle(i.title)}`,class:"route"},{default:m(()=>[t("h5",ye,f(i.title),1)]),_:2},1032,["to"])])])]),_:2},1024))),128))]),_:1},16,["breakpoints"])]),be])])]),t("div",ke,[t("div",$e,[Ce,t("span",je,[Se,s(c,{icon:"mingcute:right-fill",color:"gray",class:"mt-1"})])]),t("div",De,[(p(!0),x(v,null,w(r.courses,i=>(p(),x("div",{class:"media p-2 my-2 rounded d-flex",style:{width:"100%"},key:i.id},[t("img",{class:"mr-3 img-fluid",style:{width:"75px",height:"75px","border-radius":"8px","object-fit":"cover"},src:i.imageUrl,alt:"Generic placeholder image"},null,8,Ne),t("div",Ie,[t("div",Te,[s(g,{to:`/all-course/${u.sanitizeTitle(i.title)}`,class:"route text-truncate"},{default:m(()=>[t("h5",Ve,f(i.title),1)]),_:2},1032,["to"]),t("div",Ae,[t("div",ze,[s(c,{icon:"solar:user-id-bold",color:"gray",width:"22"}),t("p",Le,f(i.instructors[0].value),1)]),Be]),t("div",Ee,[s(c,{icon:"uiw:date",color:" mt-1",class:"text-success"}),F(),t("span",Fe,f(i.formattedDate),1)])])])]))),128))])]),t("div",Ye,[Je,t("div",Me,[t("div",Pe,[t("div",Ue,[t("div",qe,[t("div",Ge,[s(c,{icon:"cil:education",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#2cbef3"}}),He,Oe])])])]),t("div",Ke,[t("div",Qe,[t("div",Re,[t("div",We,[s(c,{icon:"ic:twotone-add-task",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5dec85"}}),Xe,Ze])])])]),t("div",ts,[t("div",es,[t("div",ss,[t("div",os,[s(c,{icon:"clarity:note-line",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#f3c90c"}}),cs,is])])])]),t("div",ns,[t("div",ds,[t("div",ls,[t("div",as,[s(c,{icon:"iconamoon:like",width:"40",class:"text-center p-2 rounded-circle text-white pt-2",color:"",style:{background:"#5629d3"}}),rs,_s])])])])])])])])])])]),t("div",hs,[s(N)])],64)}const xs=y(nt,[["render",ps],["__scopeId","data-v-f069cd17"]]);export{xs as default};
