"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[98],{634:function(e,t,a){a.d(t,{s:function(){return r},y:function(){return i}});const s=(0,a(4268).oM)({name:"addCommentForm",initialState:{text:"",error:""},reducers:{setText:(e,t)=>{e.text=t.payload}}}),{actions:i}=s,{reducer:r}=s},4941:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var s=a(7090),i=a(5443),r=a(7294),n=a(9855),c=a(9250),l=a(4839),d=a(8498),o=a(157),m=a(6276);const x=a(7945).p.injectEndpoints({endpoints:e=>({getArticleRecommendationsList:e.query({query:e=>({url:"/articles",params:{_limit:e}})})})}),{useGetArticleRecommendationsListQuery:h}=x;var g=a(5893);const u=(0,r.memo)((e=>{const{className:t}=e,{t:a}=(0,i.$)("article"),{data:r,isLoading:c,error:l}=h(3);return c||l||!r?null:(0,g.jsxs)(o.g,{gap:"8",maxWidth:!0,className:(0,s.A)("",{},[t]),children:[(0,g.jsx)(m.xv,{size:m.yH.L,title:a("RecommendationsBlockTitle"),TitleTag:"h2"}),(0,g.jsx)(n.wD,{articles:r,view:n.GA.TILE,target:"_blank"})]})}));var j=a(7795);const p=(0,r.lazy)((()=>a.e(225).then(a.bind(a,3225)).then((e=>({default:e.ArticleRating}))))),C=e=>(0,g.jsx)(r.Suspense,{fallback:(0,g.jsx)(j.O,{width:"100%",height:120}),children:(0,g.jsx)(p,{...e})});a(634);const N=(0,r.lazy)((()=>a.e(674).then(a.bind(a,7674)).then((e=>({default:e.AddCommentForm})))));var v=a(42),A=a(6522),L=a(2610),f={commentCard:"ghhhlnG6",header:"dsH_3Oqu",username:"dw82WMzO",loading:"V0iZ1Un3"};const w=(0,r.memo)((e=>{const{className:t,comment:a,isLoading:i}=e;return i?(0,g.jsxs)(o.g,{gap:"8",maxWidth:!0,className:(0,s.A)(f.commentCard,{},[t,f.loading]),children:[(0,g.jsxs)("div",{className:f.header,children:[(0,g.jsx)(j.O,{width:30,height:30,borderRadius:"50%"}),(0,g.jsx)(j.O,{width:100,height:16,className:f.username})]}),(0,g.jsx)(j.O,{width:"100%",height:50,className:f.text})]}):a?(0,g.jsxs)(o.g,{maxWidth:!0,gap:"8",className:(0,s.A)(f.commentCard,{},[t]),children:[(0,g.jsxs)(A.F,{to:(0,L.CJ)(a.user.id),className:f.header,children:[(0,g.jsx)(v.q,{size:30,src:a.user.avatar}),(0,g.jsx)(m.xv,{className:f.username,text:a.user.username})]}),(0,g.jsx)(m.xv,{className:f.text,text:a.text})]}):null})),y=(0,r.memo)((e=>{const{className:t,comments:a,isLoading:r}=e,{t:n}=(0,i.$)();return r?(0,g.jsxs)(o.g,{gap:"16",maxWidth:!0,className:(0,s.A)("",{},[t]),children:[(0,g.jsx)(w,{isLoading:!0}),(0,g.jsx)(w,{isLoading:!0}),(0,g.jsx)(w,{isLoading:!0})]}):(0,g.jsx)(o.g,{gap:"16",maxWidth:!0,className:(0,s.A)("",{},[t]),children:a?.length?a.map((e=>(0,g.jsx)(w,{isLoading:r,comment:e},e.id))):(0,g.jsx)(m.xv,{text:n("NoCommentsMessage")})})}));var k=a(1992),b=a(2647),I=a(3562),S=a(349),D=a(4268);const T=(0,D.hg)("articleDetails/fetchCommentsByArticleId",(async(e,t)=>{const{rejectWithValue:a,extra:s}=t;if(!e)return a("error");try{const t=await s.api.get("/comments",{params:{articleId:e,_expand:"user"}});if(!t.data)throw new Error;return t.data}catch(e){return a("error")}})),W=(0,D.HF)({selectId:e=>e.id}),O=W.getSelectors((e=>e.articleDetailsPage?.comments||W.getInitialState())),E=(0,D.oM)({name:"articleDetailsCommentSlice",initialState:W.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:e=>{e.addCase(T.pending,(e=>{e.error=void 0,e.isLoading=!0})).addCase(T.fulfilled,((e,t)=>{e.isLoading=!1,W.setAll(e,t.payload)})).addCase(T.rejected,((e,t)=>{e.isLoading=!1,e.error=t.payload}))}}),{reducer:P}=E,R=e=>e.articleDetailsPage?.comments?.isLoading||!1;var z=a(5625);const q=(0,D.hg)("articleDetails/addCommentForArticle",(async(e,t)=>{const{dispatch:a,rejectWithValue:s,extra:i,getState:r}=t,c=(0,z.m5)(r()),l=(0,n.wq)(r());if(!c||!e||!l)return s("No data");try{const t=await i.api.post("/comments",{articleId:l.id,userId:c.id,text:e});if(!t.data)throw new Error("no response");return a(T(l.id)),t.data}catch(e){return s("Add Comment error")}})),F=(0,r.memo)((e=>{const{className:t,id:a}=e,{t:n}=(0,i.$)("article"),c=(0,b.T)(),l=(0,k.v9)(O.selectAll),d=(0,k.v9)(R);(0,I.Q)((()=>{c(T(a))}));const x=(0,r.useCallback)((e=>{c(q(e))}),[c]);return(0,g.jsxs)(o.g,{gap:"8",maxWidth:!0,className:(0,s.A)("",{},[t]),children:[(0,g.jsx)(m.xv,{size:m.yH.L,title:n("CommentsBlockTitle"),TitleTag:"h2"}),(0,g.jsx)(r.Suspense,{fallback:(0,g.jsx)(S.a,{}),children:(0,g.jsx)(N,{onSendComment:x})}),(0,g.jsx)(y,{comments:l,isLoading:d})]})}));var _={articleDetailsPage:"aYtrO4Ii",commentTitle:"foyEsCeG",recommendations:"NwQlSikL"},B=a(3828);const U=(0,D.hg)("articlesDetailsPage/fetchArticleRecommendations",(async(e,t)=>{const{rejectWithValue:a,extra:s}=t;try{const e=await s.api.get("/articles",{params:{_limit:4}});if(!e.data)throw new Error;return e.data}catch(e){return a("error")}})),H=(0,D.HF)({selectId:e=>e.id}),M=(H.getSelectors((e=>e.articleDetailsPage?.recommendations||H.getInitialState())),(0,D.oM)({name:"articleDetailsRecommendationsSlice",initialState:H.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:e=>{e.addCase(U.pending,(e=>{e.error=void 0,e.isLoading=!0})).addCase(U.fulfilled,((e,t)=>{e.isLoading=!1,H.setAll(e,t.payload)})).addCase(U.rejected,((e,t)=>{e.isLoading=!1,e.error=t.payload}))}})),{reducer:$}=M,G=(0,B.UY)({comments:P,recommendations:$});var V=a(2790);const Q=(0,a(2222).P1)(n.wq,z.m5,((e,t)=>!(!e||!t)&&e.user.id===t.id)),Y=(0,r.memo)((e=>{const{className:t}=e,{t:a}=(0,i.$)("article"),l=(0,c.s0)(),d=(0,k.v9)(n.wq),m=(0,k.v9)(Q),x=(0,r.useCallback)((()=>{l((0,L.k7)())}),[l]),h=(0,r.useCallback)((()=>{d&&l((0,L.mK)(d.id))}),[d,l]);return(0,g.jsxs)(o.U,{maxWidth:!0,justify:"between",className:(0,s.A)("",{},[t]),children:[(0,g.jsx)(V.zx,{theme:V.bn.OUTLINE,onClick:x,children:a("BackToArticleListBtn")}),m&&(0,g.jsx)(V.zx,{theme:V.bn.OUTLINE,onClick:h,children:a("EditArticleBtn")})]})})),J={articleDetailsPage:G},K=e=>{const{className:t,testId:a}=e,{t:r}=(0,i.$)("article");let{id:m}=(0,c.UO)();return m?(0,g.jsx)(l.W,{reducers:J,children:(0,g.jsx)(d.T,{className:(0,s.A)(_.ArticleDetailsPage,{},[t]),children:(0,g.jsxs)(o.g,{maxWidth:!0,gap:"16",children:[(0,g.jsx)(Y,{}),(0,g.jsx)(n.D0,{id:m}),(0,g.jsx)(C,{articleId:m}),(0,g.jsx)(u,{}),(0,g.jsx)(F,{id:m})]})})}):(0,g.jsx)("div",{className:(0,s.A)(_.ArticleDetailsPage,{},[t]),children:r("ArticleNotFound")})};var Z=(0,r.memo)(K)}}]);