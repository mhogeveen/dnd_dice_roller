(this.webpackJsonpdnd_dice_roller=this.webpackJsonpdnd_dice_roller||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(42),i=a(12),u=a(60),s=a(61),d=a(28),m=a(15),p={0:{edit:!1,dieAmount:1,dieType:20,modAmount:0}},b={edit:!1,dieAmount:1,dieType:20,modAmount:0},E=Object.keys(p).length-1,v=function(){return++E},O=Object(o.b)({dice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DIE_AMOUNT":return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.id,Object(m.a)(Object(m.a)({},e[t.id]),{},{dieAmount:t.payload})));case"UPDATE_DIE_TYPE":return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.id,Object(m.a)(Object(m.a)({},e[t.id]),{},{dieType:t.payload})));case"UPDATE_MOD_AMOUNT":return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.id,Object(m.a)(Object(m.a)({},e[t.id]),{},{modAmount:t.payload})));case"RESET_ROW":return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.id,Object(m.a)({},b)));case"REMOVE_ROW":var a=t.id,n=(e[a],Object(u.a)(e,[a].map(s.a)));return n;case"ADD_ROW":return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},v(),Object(m.a)({},b)));case"TOGGLE_EDIT":return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.id,Object(m.a)(Object(m.a)({},e[t.id]),{},{edit:!e[t.id].edit})));default:return e}},results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RESULT":var a=t.id,n=(e[a],Object(u.a)(e,[a].map(s.a)));return Object(m.a)(Object(d.a)({},t.id,t.payload),n);case"CLEAR_RESULTS":return{};default:return e}},drawer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DRAWER":return!e;default:return e}}}),h=a(10),j=a(11),y=a(14),f=a(13),g=a(51),A=a(18),R=a(165),D=a(155),T=a(114),w=a(154),C=a(156),N=a(157),k=a(80),_=a.n(k),x=a(81),M=a.n(x),U=a(168),P=a(159),F=a(160),L=a(161),S=a(112),I=a(170),W=a(153),G=a(79),B=a.n(G),J=[{to:"/",title:"Dice Roller"},{to:"/ability-score-roller",title:"Ability Score Roller"}],V=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).handleToggle=function(){e.props.toggleDrawer()},e.renderNavItems=function(t){return t.map((function(t){return r.a.createElement(g.b,{to:t.to,className:"nav-link",key:t.title},r.a.createElement(S.a,{button:!0,onClick:e.toggleDrawer},r.a.createElement(W.a,null,r.a.createElement(B.a,null)),r.a.createElement(I.a,{primary:t.title})))}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:e.root,position:"static",style:{margin:"0 0 24px 0"}},r.a.createElement(D.a,{maxWidth:"lg",disableGutters:!0},r.a.createElement(C.a,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("h2",null,"DnD Dice Roller"),r.a.createElement(N.a,{color:"inherit","aria-label":"menu-open",onClick:this.handleToggle},r.a.createElement(_.a,null))))),r.a.createElement(U.a,{variant:"temporary",anchor:"right",open:this.props.drawer,ModalProps:{onBackdropClick:this.handleToggle}},r.a.createElement("div",{className:"nav-drawer"},r.a.createElement(N.a,{onClick:this.handleToggle,"aria-label":"menu-close",style:{margin:"5px"}},r.a.createElement(M.a,null)),r.a.createElement(P.a,null),r.a.createElement(F.a,{component:"nav",subheader:r.a.createElement(L.a,{component:"div"},"What roll will you make?")},this.renderNavItems(J)))))}}]),a}(n.Component),Y=Object(i.b)((function(e){return{drawer:e.drawer}}),{toggleDrawer:function(){return{type:"TOGGLE_DRAWER"}}})(Object(T.a)({root:{backgroundColor:"#1A535C"}})(V)),q=a(86),z=a(68),H=a(113),K=a(166),Q=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleDieAmount=function(t){e.props.updateDieAmount(t.target.value,e.props.id)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dieAmount,a=e.label;return r.a.createElement(K.a,{value:t,type:"number",label:a,margin:"dense",variant:"outlined",onChange:this.handleDieAmount,InputProps:{inputProps:{min:1}},inputProps:{style:{textAlign:"center"}},style:{width:"70px",margin:"4px 0"}})}}]),a}(n.Component),X=Object(i.b)(null,{updateDieAmount:function(e,t){return{type:"UPDATE_DIE_AMOUNT",id:t,payload:e}}})(Q),Z=a(163),$=[4,6,8,10,12,20],ee=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleDieType=function(t){e.props.updateDieType(t.target.value,e.props.id)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dieType,a=e.label;return r.a.createElement(K.a,{select:!0,value:t,label:a,onChange:this.handleDieType,margin:"dense",variant:"outlined",style:{width:"80px",margin:"4px 0"}},$.map((function(e){return r.a.createElement(Z.a,{key:e,value:e},e)})))}}]),a}(n.Component),te=Object(i.b)(null,{updateDieType:function(e,t){return{type:"UPDATE_DIE_TYPE",id:t,payload:e}}})(ee),ae=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleModAmount=function(t){e.props.updateModAmount(t.target.value,e.props.id)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.modAmount,a=e.label;return r.a.createElement(K.a,{value:t,type:"number",label:a,onChange:this.handleModAmount,margin:"dense",variant:"outlined",style:{width:"70px",margin:"4px 0"}})}}]),a}(n.Component),ne=Object(i.b)(null,{updateModAmount:function(e,t){return{type:"UPDATE_MOD_AMOUNT",id:t,payload:e}}})(ae),re=a(169),le=a(83),ce=a.n(le),oe=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleRemoveRow=function(t){e.props.removeRow(e.props.id)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(re.a,{title:"Delete"},r.a.createElement(N.a,{className:e.root,"aria-label":"delete",onClick:this.handleRemoveRow},r.a.createElement(ce.a,null)))}}]),a}(n.Component),ie=Object(i.b)(null,{removeRow:function(e){return{type:"REMOVE_ROW",id:e}}})(Object(T.a)({root:{color:"#FF6B6B"}})(oe)),ue=a(85),se=a.n(ue),de=a(84),me=a.n(de),pe=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleEdit=function(t){e.props.toggleEdit(e.props.id),t.stopPropagation()},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(re.a,{title:this.props.edit?"Save":"Edit"},r.a.createElement(N.a,{className:e.root,"aria-label":"edit",onClick:this.handleEdit},this.props.edit?r.a.createElement(me.a,null):r.a.createElement(se.a,null)))}}]),a}(n.Component),be=Object(i.b)(null,{toggleEdit:function(e){return{type:"TOGGLE_EDIT",id:e}}})(Object(T.a)({root:{color:"#4ECDC4"}})(pe)),Ee=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderRollRow=function(t,a,n,l){return e.props.edit?r.a.createElement("div",{className:"dice"},r.a.createElement("div",{className:"dice-comp"},r.a.createElement(X,{dieAmount:t,id:l})),r.a.createElement("div",{className:"dice-comp"},r.a.createElement("span",null,"d")),r.a.createElement("div",{className:"dice-comp"},r.a.createElement(te,{dieType:a,id:l})),r.a.createElement("div",{className:"dice-comp"},r.a.createElement(ne,{modAmount:n,id:l})),r.a.createElement("div",{className:"dice-comp"},r.a.createElement(ie,{id:l}),r.a.createElement(be,{edit:e.props.edit,id:l}))):r.a.createElement("div",{className:"dice dice-clickable",onClick:e.props.handleRoll},r.a.createElement("div",{className:"dice-comp"},r.a.createElement("span",{className:"dice-comp-info"},t)),r.a.createElement("div",{className:"dice-comp"},r.a.createElement("span",null,"d")),r.a.createElement("div",{className:"dice-comp"},r.a.createElement("span",{className:"dice-comp-info"},a)),r.a.createElement("div",{className:"dice-comp"},r.a.createElement("span",{className:"dice-comp-info"},n)),r.a.createElement("div",{className:"dice-comp"},r.a.createElement(be,{edit:e.props.edit,id:l})))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dieAmount,a=e.dieType,n=e.modAmount,l=e.id;return r.a.createElement(r.a.Fragment,null,this.renderRollRow(t,a,n,l))}}]),a}(n.Component),ve=Object(i.b)((function(e,t){return{edit:e.dice[t.id].edit}}))(Ee),Oe=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderResultRow=function(e){return void 0===e?r.a.createElement("div",{className:"result"},r.a.createElement("div",{className:"result-comp"},r.a.createElement("span",null,"Click the die row to get results!"))):r.a.createElement("div",{className:"result"},r.a.createElement("div",{className:"result-comp"},r.a.createElement("span",null,e.rolls.join("+"))),r.a.createElement("div",{className:"result-comp"},r.a.createElement("span",null,"=")),r.a.createElement("div",{className:"result-comp"},r.a.createElement("span",null,e.subtotal)),r.a.createElement("div",{className:"result-comp"},r.a.createElement("span",null,e.modAmount>=0?"+":"-")),r.a.createElement("div",{className:"result-comp"},Math.abs(e.modAmount)),r.a.createElement("div",{className:"result-comp"},r.a.createElement("span",null,"=")),r.a.createElement("div",{className:"result-comp"},r.a.createElement("span",null,e.total)))},e}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderResultRow(this.props.result))}}]),a}(n.Component),he=Object(i.b)((function(e,t){return{result:e.results[t.id]}}))(Oe),je=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleRoll=function(){for(var t=e.props,a=t.die,n=t.id,r={rolls:[],subtotal:0,total:0,modAmount:Number(a.modAmount),dieAmount:a.dieAmount,dieType:Number(a.dieType)},l=0;l<a.dieAmount;l++)if(10===a.dieType){var c=Math.floor(Math.random()*a.dieType);r.rolls=[].concat(Object(z.a)(r.rolls),[c]),r.subtotal+=c}else{var o=Math.ceil(Math.random()*a.dieType);r.rolls=[].concat(Object(z.a)(r.rolls),[o]),r.subtotal+=o}r.total=r.subtotal+r.modAmount,e.props.addResult(r,n)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.die,t=e.dieAmount,a=e.dieType,n=e.modAmount,l=this.props.id;return r.a.createElement(H.a,{elevation:1,style:{marginBottom:"10px"}},r.a.createElement(ve,{dieAmount:t,dieType:a,modAmount:n,id:l,handleRoll:this.handleRoll}),r.a.createElement(P.a,null),r.a.createElement(he,{id:l}))}}]),a}(n.Component),ye=Object(i.b)(null,{addResult:function(e,t){return{type:"ADD_RESULT",payload:e,id:t}}})(je),fe=a(164),ge=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleAddRow=function(){e.props.addRow()},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(fe.a,{className:e.root,color:"primary",variant:"outlined",disableElevation:!0,onClick:this.handleAddRow},"Add Row")}}]),a}(n.Component),Ae=Object(i.b)(null,{addRow:function(){return{type:"ADD_ROW"}}})(Object(T.a)({root:{color:"#4ECDC4",border:"1px solid rgba(78,205,196,0.5)","&:hover":{border:"1px solid #4ECDC4",backgroundColor:"rgba(78,205,196,0.04)"}}})(ge)),Re=Object(i.b)(null,{clearResults:function(){return{type:"CLEAR_RESULTS"}}})(Object(T.a)({root:{color:"#FF6B6B",border:"1px solid rgba(255,107,107,0.5)","&:hover":{border:"1px solid #FF6B6B",backgroundColor:"rgba(255,107,107,0.04)"}}})((function(e){var t=e.classes;return r.a.createElement(fe.a,{className:t.root,variant:"outlined",disableElevation:!0,onClick:function(){e.clearResults()},style:{marginLeft:"10px"}},"Clear Results")}))),De=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,Object.entries(this.props.dice).map((function(e){var t=Object(q.a)(e,2),a=t[0],n=t[1];return r.a.createElement(ye,{die:n,key:a,id:a})})),r.a.createElement(Ae,null),r.a.createElement(Re,null))}}]),a}(n.Component),Te=Object(i.b)((function(e){return{dice:e.dice}}))(De),we=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement(H.a,{elevation:1,style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"10px"}},r.a.createElement("h2",null,"Ability Score Roller"),r.a.createElement("span",null,"Under construction"))}}]),a}(n.Component),Ce=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{basename:"/dnd_dice_roller"},r.a.createElement(R.a,null),r.a.createElement(Y,null),r.a.createElement(D.a,{maxWidth:"lg"},r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/",exact:!0,component:Te}),r.a.createElement(A.a,{path:"/ability-score-roller",component:we})))))}}]),a}(n.Component),Ne=(a(110),Object(o.c)(O));c.a.render(r.a.createElement(i.a,{store:Ne},r.a.createElement(Ce,null)),document.querySelector("#root"))},99:function(e,t,a){e.exports=a(111)}},[[99,1,2]]]);
//# sourceMappingURL=main.3cdbbfee.chunk.js.map