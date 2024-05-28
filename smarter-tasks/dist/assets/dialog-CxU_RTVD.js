import{I as N,H,r as u,R as c,e as Ie,p as le,aa as Me,s as Ne,o as v,n as ae,P as G,ab as He,y as Y,ac as ue,l as I,ad as S,ae as T,af as Ae,ag as $,ah as ie,ai as se,aj as te,i as ne,ak as xe,Q as Oe,t as j,al as Ue,V as je,w as Be,U as Ye,S as qe,am as Ve,an as re,a1 as oe,ao as We,a5 as _e}from"./index-BRnPnvLZ.js";function ce(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))fe(n,de(t,r),o);return n}function de(e,t){return e?e+"["+t+"]":t}function fe(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())fe(e,de(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):ce(n,t,e)}function Rt(e){var t,n;let r=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(r){for(let o of r.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(n=r.requestSubmit)==null||n.call(r)}}let Ge="div";var C=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(C||{});function Ke(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return H({ourProps:a,theirProps:o,slot:{},defaultTag:Ge,name:"Hidden"})}let M=N(Ke),Qe=u.createContext(null);function pe({children:e}){let t=u.useContext(Qe);if(!t)return c.createElement(c.Fragment,null,e);let{target:n}=t;return n?Ie.createPortal(c.createElement(c.Fragment,null,e),n):null}function Ct({data:e,form:t,disabled:n,onReset:r,overrides:o}){let[a,i]=u.useState(null),l=le();return u.useEffect(()=>{if(r&&a)return l.addEventListener(a,"reset",r)},[a,t,r]),c.createElement(pe,null,c.createElement(ze,{setForm:i,formId:t}),ce(e).map(([d,s])=>c.createElement(M,{features:C.Hidden,...Me({key:d,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:t,disabled:n,name:d,value:s,...o})})))}function ze({setForm:e,formId:t}){return u.useEffect(()=>{if(t){let n=document.getElementById(t);n&&e(n)}},[e,t]),t?null:c.createElement(M,{features:C.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:n=>{if(!n)return;let r=n.closest("form");r&&e(r)}})}function me(e,t,n,r){let o=Ne(n);u.useEffect(()=>{e=e??window;function a(i){o.current(i)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function K(e,t){let n=u.useRef([]),r=v(e);u.useEffect(()=>{let o=[...n.current];for(let[a,i]of t.entries())if(n.current[a]!==i){let l=r(t,o);return n.current=t,l}},[r,...t])}function Ze(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let D=[];Ze(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Je(){var e;let[t]=u.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=u.useState((e=t==null?void 0:t.matches)!=null?e:!1);return ae(()=>{if(!t)return;function o(a){r(a.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function Xe({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=u.useRef((r=n==null?void 0:n.current)!=null?r:null),a=G(o),i=v(()=>{var l,d,s;let m=[];for(let f of e)f!==null&&(f instanceof HTMLElement?m.push(f):"current"in f&&f.current instanceof HTMLElement&&m.push(f.current));if(t!=null&&t.current)for(let f of t.current)m.push(f);for(let f of(l=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?l:[])f!==document.body&&f!==document.head&&f instanceof HTMLElement&&f.id!=="headlessui-portal-root"&&(f.contains(o.current)||f.contains((s=(d=o.current)==null?void 0:d.getRootNode())==null?void 0:s.host)||m.some(L=>f.contains(L))||m.push(f));return m});return{resolveContainers:i,contains:v(l=>i().some(d=>d.contains(l))),mainTreeNodeRef:o,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:c.createElement(M,{features:C.Hidden,ref:o})},[o,n])}}let Q=u.createContext(()=>{});Q.displayName="StackContext";var _=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(_||{});function et(){return u.useContext(Q)}function tt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=et(),i=v((...l)=>{t==null||t(...l),a(...l)});return ae(()=>{let l=o===void 0||o===!0;return l&&i(0,n,r),()=>{l&&i(1,n,r)}},[i,n,r,o]),c.createElement(Q.Provider,{value:i},e)}var P=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(P||{});function nt(){let e=u.useRef(0);return He("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ve(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let rt="div";var y=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.AutoFocus=32]="AutoFocus",e[e.All=30]="All",e))(y||{});function ot(e,t){let n=u.useRef(null),r=Y(n,t),{initialFocus:o,initialFocusFallback:a,containers:i,features:l=30,...d}=e;ue()||(l=1);let s=G(n);it({ownerDocument:s},!!(l&16));let m=st({ownerDocument:s,container:n,initialFocus:o,initialFocusFallback:a},l);ct({ownerDocument:s,container:n,containers:i,previousActiveElement:m},!!(l&8));let f=nt(),L=v(g=>{let w=n.current;w&&(F=>F())(()=>{I(f.current,{[P.Forwards]:()=>{S(w,T.First,{skipElements:[g.relatedTarget,a]})},[P.Backwards]:()=>{S(w,T.Last,{skipElements:[g.relatedTarget,a]})}})})}),A=le(),b=u.useRef(!1),h={ref:r,onKeyDown(g){g.key=="Tab"&&(b.current=!0,A.requestAnimationFrame(()=>{b.current=!1}))},onBlur(g){if(!(l&8))return;let w=ve(i);n.current instanceof HTMLElement&&w.add(n.current);let F=g.relatedTarget;F instanceof HTMLElement&&F.dataset.headlessuiFocusGuard!=="true"&&(ge(w,F)||(b.current?S(n.current,I(f.current,{[P.Forwards]:()=>T.Next,[P.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&$(g.target)))}};return c.createElement(c.Fragment,null,!!(l&4)&&c.createElement(M,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:L,features:C.Focusable}),H({ourProps:h,theirProps:d,defaultTag:rt,name:"FocusTrap"}),!!(l&4)&&c.createElement(M,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:L,features:C.Focusable}))}let lt=N(ot),at=Object.assign(lt,{features:y});function ut(e=!0){let t=u.useRef(D.slice());return K(([n],[r])=>{r===!0&&n===!1&&se(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),v(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function it({ownerDocument:e},t){let n=ut(t);K(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&$(n())},[t]),Ae(()=>{t&&$(n())})}function st({ownerDocument:e,container:t,initialFocus:n,initialFocusFallback:r},o){let a=!!(o&2),i=u.useRef(null),l=ie();return K(()=>{if(!a){r!=null&&r.current&&$(r.current);return}let d=t.current;d&&se(()=>{if(!l.current)return;let s=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===s){i.current=s;return}}else if(d.contains(s)){i.current=s;return}if(n!=null&&n.current)$(n.current);else{if(o&32){if(S(d,T.First|T.AutoFocus)!==te.Error)return}else if(S(d,T.First)!==te.Error)return;if(r!=null&&r.current&&($(r.current),(e==null?void 0:e.activeElement)===r.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}i.current=e==null?void 0:e.activeElement})},[r,a,o]),i}function ct({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=ie();me(e==null?void 0:e.defaultView,"focus",i=>{if(!o||!a.current)return;let l=ve(n);t.current instanceof HTMLElement&&l.add(t.current);let d=r.current;if(!d)return;let s=i.target;s&&s instanceof HTMLElement?ge(l,s)?(r.current=s,$(s)):(i.preventDefault(),i.stopPropagation(),$(d)):$(r.current)},!0)}function ge(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var dt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(dt||{}),ft=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(ft||{});let pt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},B=u.createContext(null);B.displayName="DialogContext";function z(e){let t=u.useContext(B);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,z),n}return t}function mt(e,t){return I(t.type,pt,e,t)}let vt="div",gt=ne.RenderStrategy|ne.Static;function Et(e,t){let n=u.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:i,role:l="dialog",autoFocus:d=!0,__demoMode:s=!1,...m}=e,[f,L]=u.useState(0),A=u.useRef(!1);l=function(){return l==="dialog"||l==="alertdialog"?l:(A.current||(A.current=!0,console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let b=Oe();o===void 0&&b!==null&&(o=(b&j.Open)===j.Open);let h=u.useRef(null),g=Y(h,t),w=G(h),F=e.hasOwnProperty("open")||b!==null,Z=e.hasOwnProperty("onClose");if(!F&&!Z)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!F)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!Z)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let E=o?0:1,[x,Ee]=u.useReducer(mt,{titleId:null,descriptionId:null,panelRef:u.createRef()}),R=v(()=>a(!1)),J=v(p=>Ee({type:0,id:p})),q=ue()?E===0:!1,O=f>1,he=u.useContext(B)!==null,[we,be]=Ue(),ye={get current(){var p;return(p=x.panelRef.current)!=null?p:h.current}},{resolveContainers:V,mainTreeNodeRef:$e,MainTreeNode:Fe}=Xe({portals:we,defaultContainers:[ye]}),Te=O?"parent":"leaf",X=b!==null?(b&j.Closing)===j.Closing:!1,De=O||X?!1:q;je({allowed:v(()=>{var p,k;return[(k=(p=h.current)==null?void 0:p.closest("[data-headlessui-portal]"))!=null?k:null]}),disallowed:v(()=>{var p,k;return[(k=(p=$e.current)==null?void 0:p.closest("body > *:not(#headlessui-portal-root)"))!=null?k:null]})},s?!1:De),Be(V,p=>{p.preventDefault(),R()},!(!q||O));let Le=!(O||E!==0);me(w==null?void 0:w.defaultView,"keydown",p=>{Le&&(p.defaultPrevented||p.key===_e.Escape&&(p.preventDefault(),p.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),R()))}),Ye(w,s?!1:!(X||E!==0||he),V),qe(h,R,E===0);let[ke,Re]=Ve(),Ce=u.useMemo(()=>[{dialogState:E,close:R,setTitleId:J},x],[E,x,R,J]),ee=u.useMemo(()=>({open:E===0}),[E]),Pe={ref:g,id:r,role:l,tabIndex:-1,"aria-modal":s?void 0:E===0?!0:void 0,"aria-labelledby":x.titleId,"aria-describedby":ke},Se=!Je(),U=q?I(Te,{parent:y.RestoreFocus,leaf:y.All&~y.FocusLock}):y.None;return d&&(U|=y.AutoFocus),Se||(U&=~y.InitialFocus),s&&(U=y.None),c.createElement(tt,{type:"Dialog",enabled:E===0,element:h,onUpdate:v((p,k)=>{k==="Dialog"&&I(p,{[_.Add]:()=>L(W=>W+1),[_.Remove]:()=>L(W=>W-1)})})},c.createElement(re,{force:!0},c.createElement(oe,null,c.createElement(B.Provider,{value:Ce},c.createElement(oe.Group,{target:h},c.createElement(re,{force:!1},c.createElement(Re,{slot:ee,name:"Dialog.Description"},c.createElement(be,null,c.createElement(at,{initialFocus:i,initialFocusFallback:s?void 0:h,containers:V,features:U},c.createElement(We,{value:R},H({ourProps:Pe,theirProps:m,slot:ee,defaultTag:vt,features:gt,visible:E===0,name:"Dialog"})))))))))),c.createElement(pe,null,c.createElement(Fe,null)))}let ht="div";function wt(e,t){let n=u.useId(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},i]=z("Dialog.Panel"),l=Y(t,i.panelRef),d=u.useMemo(()=>({open:a===0}),[a]),s=v(m=>{m.stopPropagation()});return H({ourProps:{ref:l,id:r,onClick:s},theirProps:o,slot:d,defaultTag:ht,name:"Dialog.Panel"})}let bt="h2";function yt(e,t){let n=u.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:i}]=z("Dialog.Title"),l=Y(t);u.useEffect(()=>(i(r),()=>i(null)),[r,i]);let d=u.useMemo(()=>({open:a===0}),[a]);return H({ourProps:{ref:l,id:r},theirProps:o,slot:d,defaultTag:bt,name:"Dialog.Title"})}let $t=N(Et),Ft=N(wt),Tt=N(yt),Pt=Object.assign($t,{Panel:Ft,Title:Tt,Description:xe});export{Pt as _,Ct as j,Rt as p};
