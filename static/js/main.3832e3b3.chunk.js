(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,n,t){},139:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"ArrowRight",function(){return w}),t.d(r,"ArrowLeft",function(){return x}),t.d(r,"Update",function(){return E});var a=t(0),i=t.n(a),o=t(46),c=t.n(o),u=t(6),l=(t(73),t(3)),s=t(5),d=function(e,n){var t=e-.5+Math.random()*(n-e+1);return t=Math.round(t)},m=function(e){for(var n={},t=0;t<e.length;t+=1)for(var r=0;r<e[t].length;r+=1)0===e[t][r]&&(n={nullLine:t,nullColumn:r});return n},f=function(e,n,t){var r=!0,a=!0,i=!0,o=!0,c=Math.abs(n-t[0]),u=Math.abs(e-t[1]);0===e&&(i=!1),0===n&&(r=!1),0===u&&(o=!1),0===c&&(a=!1),0===e&&0===n&&(i=!1,r=!1),0===c&&0===u&&(o=!1,a=!1),0===e&&0===c&&(i=!1,a=!1),0===n&&0===u&&(o=!1,r=!1);var l=["right","top","bottom","left"],s=[{top:i},{right:a},{bottom:o},{left:r}].map(function(e){var n=null;return l.forEach(function(t){e[t]&&(n=t)}),n}).filter(function(e){return null!==e}),m=s[d(0,s.length-1)];return"top"===m?[e-1,n]:"right"===m?[e,n+1]:"left"===m?[e,n-1]:"bottom"===m?[e+1,n]:[]},h=function(e,n){for(var t=Object(s.a)(e),r=d(150,200),a=0;a<r;a+=1){var i=m(e),o=i.nullLine,c=i.nullColumn,u=f(o,c,n),h=Object(l.a)(u,2),p=h[0],b=h[1],v=e[o][c];t[o][c]=e[p][b],t[p][b]=v}return t},p=function(e){var n,t,r=Object(a.useState)({moveDirection:""}),i=Object(l.a)(r,2),o=i[0],c=i[1],u=function(e){n=e.touches[0].clientX,t=e.touches[0].clientY},s=function(e){var r=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,i=r-n,o=a-t,u=Math.abs(i),l=Math.abs(o);if(Math.max(u,l)>10){c({moveDirection:u>l?i>0?"right":"left":o>0?"bottom":"top"})}},d=function(e){var n="";switch(e.keyCode){case 38:case 87:n="top";break;case 40:case 83:n="bottom";break;case 37:case 65:n="left";break;case 39:case 68:n="right";break;default:n=""}c({moveDirection:n})};Object(a.useEffect)(function(){return window.addEventListener("touchstart",u),window.addEventListener("touchend",s),window.addEventListener("keydown",d),function(){return window.removeEventListener("touchstart",u),window.removeEventListener("touchend",s),void window.removeEventListener("keydown",d)}}),Object(a.useEffect)(function(){e(o.moveDirection)},[o])},b=function(e){return function(n){var t=n.move;return p(t),i.a.createElement(e,n)}},v=t(1),g=t(2),w=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22.876",height:"28.629",viewBox:"0 0 22.876 28.629"},i.a.createElement("path",{id:"Path_1507","data-name":"Path 1507",d:"M194.827,132.3c-.669.835-.841,25.783.42,28.089s21.727-10.1,21.937-14.506S196.509,130.2,194.827,132.3Z",transform:"translate(-194.311 -132.039)",fill:"#eed8a6"}))},x=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22.843",height:"28.66",viewBox:"0 0 22.843 28.66"},i.a.createElement("path",{id:"Path_1507","data-name":"Path 1507",d:"M216.637,132.3c.668.836.839,25.811-.42,28.12s-21.7-10.116-21.905-14.522S214.958,130.2,216.637,132.3Z",transform:"translate(-194.311 -132.039)",fill:"#eed8a6"}))},E=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"39.476",height:"38.389",viewBox:"0 0 39.476 38.389"},i.a.createElement("g",{id:"Group_11668","data-name":"Group 11668",transform:"translate(-568.374 -485.362)"},i.a.createElement("g",{id:"Group_4877","data-name":"Group 4877",transform:"translate(568.374 485.362)"},i.a.createElement("path",{id:"Path_1507","data-name":"Path 1507",d:"M10.265.118c.307.384.386,11.868-.193,12.929S.1,8.4,0,6.37,9.494-.846,10.265.118Z",transform:"matrix(0.788, -0.616, 0.616, 0.788, 0, 11.189)",fill:"#eed8a6"}),i.a.createElement("path",{id:"Path_112289","data-name":"Path 112289",d:"M.015,5.516C-.3,5.8,4.566,7.78,5.068,14.3c.31,5.917-3.685,9.029-3.448,9.562.475,1.069,5.989,4.076,6.583,3.363a23.762,23.762,0,0,0,3.976-7.95,19.33,19.33,0,0,0-1.03-11.769C9.479,3.23,5.316.575,5.024.137,4.311-.932,1.084,4.566.015,5.516Z",transform:"translate(7.766 12.11) rotate(-73)",fill:"#eed8a6"})),i.a.createElement("g",{id:"Group_4878","data-name":"Group 4878",transform:"translate(570.242 502.178)"},i.a.createElement("path",{id:"Path_1507-2","data-name":"Path 1507",d:"M10.265.118c.307.384.386,11.868-.193,12.929S.1,8.4,0,6.37,9.494-.846,10.265.118Z",transform:"matrix(-0.788, 0.616, -0.616, -0.788, 37.608, 10.384)",fill:"#eed8a6"}),i.a.createElement("path",{id:"Path_112289-2","data-name":"Path 112289",d:"M.015,5.516C-.3,5.8,4.566,7.78,5.068,14.3c.31,5.917-3.685,9.029-3.448,9.562.475,1.069,5.989,4.076,6.583,3.363a23.762,23.762,0,0,0,3.976-7.95,19.331,19.331,0,0,0-1.03-11.769C9.479,3.23,5.316.575,5.024.137,4.311-.932,1.084,4.566.015,5.516Z",transform:"translate(29.842 9.464) rotate(107)",fill:"#eed8a6"}))))},O=t(49),j=t.n(O);function k(){var e=Object(v.a)(["\n  background-image: url(",");\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 5px;\n  margin-left: 5px;\n"]);return k=function(){return e},e}var y=g.a.div(k(),j.a),z=function(e){var n=e.onClick,t=e.name;return i.a.createElement(y,{onClick:n},Object(a.createElement)(r[t]))};function S(){var e=Object(v.a)(["\n  display: flex;\n"]);return S=function(){return e},e}var _=g.a.div(S()),C=function(e){var n=e.newGame,t=e.prevStep,r=e.nextStep;return i.a.createElement(_,null,i.a.createElement(z,{onClick:n,name:"Update"}),i.a.createElement(z,{onClick:t,name:"ArrowLeft"}),i.a.createElement(z,{onClick:r,name:"ArrowRight"}))},M=function(e,n){var t=e.lineM,r=e.columnM,a=n.lineN,i=n.columnN;return t===a+1&&r===i?"top":t===a-1&&r===i?"bottom":t===a&&r===i-1?"right":t===a&&r===i+1?"left":""},L=t(12),P=t(60),N=t(53),T=t.n(N);function G(){var e=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Coming Soon', sans-serif;\n  font-size: 35px;\n  line-height: 35px;\n  z-index: 1;\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n\n  @media (max-width: 400px) {\n    font-size: 30px;\n    line-height: 30px;\n  }\n"]);return G=function(){return e},e}function W(){var e=Object(v.a)(["\n  position: absolute;\n  z-index: 1;\n  background: #fff;\n  border-radius: 10px;\n  padding: 5px;\n  background: transparent;\n  cursor: pointer;\n  width: calc((100%) / 4);\n  height: calc((100%) / 4);\n"]);return W=function(){return e},e}var A=Object(g.a)(P.a.div)(W()),R=g.a.div(G(),T.a),D=Object(a.memo)(function(e){var n=e.x,t=e.y,r=e.number,a=e.line,o=e.column,c=e.move;return 0===r?null:i.a.createElement(A,{animate:{x:n,y:t},transition:{type:"tween"},onClick:function(){return c(a,o)}},i.a.createElement(R,{key:r},r))}),X=Object(L.a)(function(e,n,t,r){return{x:e*(n/e)*(r%4),y:e*(t/e)*Math.floor(r/4)}}),U=Object(a.memo)(function(e){var n=e.matrix,t=e.width,r=e.height,o=e.boardSize,c=e.move;return Object(a.useMemo)(function(){var e=[];return n.forEach(function(n,t){n.forEach(function(n,r){var a={number:n,line:t,column:r};e.push(a)})}),e},[n]).map(function(e,n){var a=X(o,t,r,n);return i.a.createElement(D,{x:a.x,y:a.y,number:e.number,line:e.line,column:e.column,move:c,key:e.number})})}),B=t(54),I=t.n(B),V=t(55),Z=t.n(V),F=t(61),Y=t(56),J=t.n(Y);function H(){var e=Object(v.a)(["\n  position: relative;\n  font-size: 30px;\n  padding: 20px 40px;\n  z-index: 100;\n  border-radius: 10px;\n  background: #fff;\n  max-width: 80%;\n"]);return H=function(){return e},e}function $(){var e=Object(v.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  cursor: pointer;\n  max-width: 80%;\n"]);return $=function(){return e},e}function q(){var e=Object(v.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 20;\n  height: 100vh;\n  width: 100%;\n"]);return q=function(){return e},e}var K=g.a.div(q()),Q=g.a.div($(),J.a),ee=g.a.div(H()),ne=function(e){var n=e.children,t=e.onClose,r=Object(a.useRef)(null);return Object(F.a)(r,t),i.a.createElement(K,null,i.a.createElement(ee,{ref:r},i.a.createElement(Q,{onClick:t}),n))},te=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]],re=Object(u.b)(function(e){return{matrix:e.game.matrix,isStarted:e.game.isStarted}},null)(function(e){var n=e.matrix,t=e.isStarted,r=Object(a.useState)(!1),o=Object(l.a)(r,2),c=o[0],u=o[1],s=window.outerWidth,d=window.outerHeight;return Object(a.useEffect)(function(){u(Z()(n,te))},[n]),i.a.createElement(a.Fragment,null,c&&t?i.a.createElement(a.Fragment,null,i.a.createElement(I.a,{gravity:.2,width:s,height:d}),i.a.createElement(ne,{onClose:function(){return u(!1)}},"Congratulation! You are winner!!!")):null)}),ae=t(57),ie=t.n(ae),oe=t(58),ce=t.n(oe);function ue(){var e=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  touch-action: none;\n"]);return ue=function(){return e},e}function le(){var e=Object(v.a)(["\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  overflow-y: hidden;\n  flex-direction: column;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  align-items: center;\n\n  @media (max-height: 500px) {\n    flex-direction: row;\n  }\n"]);return le=function(){return e},e}function se(){var e=Object(v.a)(["\n  position: relative;\n  width: 400px;\n  height: 400px;\n  padding: 25px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n\n  @media (max-width: 768px) {\n    max-width: 300px;\n    width: 100%;\n    max-height: 300px;\n    height: 100%;\n    padding: 20px;\n    background-position: center center;\n  }\n\n  @media (max-height: 500px) {\n    margin-bottom: 0;\n  }\n"]);return se=function(){return e},e}var de=g.a.div(se(),ie.a),me=g.a.div(le(),ce.a),fe=g.a.div(ue());function he(){var e=Object(v.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  sfont-size: 30px;\n  background: #000;\n  color: #fff;\n  cursor: pointer;\n"]);return he=function(){return e},e}var pe=g.a.div(he()),be=function(e){var n=e.numbers,t=e.move,r=e.prev,o=e.next,c=e.startNewGame,u=e.isStarted,s=e.direction,d=Object(a.useRef)(null),f=Object(a.useState)({width:0,height:0,boardSize:0}),h=Object(l.a)(f,2),p=h[0],b=h[1];Object(a.useEffect)(function(){var e=function(){var e=d.current;if(e&&e.clientWidth){var n=e.clientWidth/4;b({boardSize:e.clientWidth,width:n,height:n})}};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);var v=Object(a.useCallback)(function(e,r){var a=m(n),i=a.nullLine,o=a.nullColumn;t(M({lineM:e,columnM:r},{lineN:i,columnN:o}))},[]),g=p.boardSize,w=p.width,x=p.height;return i.a.createElement(me,{tabIndex:"0"},i.a.createElement(de,{size:g},i.a.createElement(fe,{ref:d},u?i.a.createElement(a.Fragment,null,w&&x&&g&&i.a.createElement(U,{width:w,height:x,boardSize:g,matrix:n,move:v,direction:s})):i.a.createElement(pe,{onClick:c},"New Game"))),i.a.createElement(C,{newGame:c,prevStep:r,nextStep:o}),i.a.createElement(re,null))},ve=Object(u.b)(function(e){var n=e.game;return{counter:n.counter,steps:n.steps,isStarted:n.isStarted}},function(e,n){return{move:function(n){return e(function(e){return{type:"MOVE_TILE",payload:e}}(n))},startNewGame:function(){return e({type:"NEW_GAME",payload:h(n.numbers,n.size)})},next:function(){return e({type:"NEXT_STEP"})},prev:function(){return e({type:"PREV_STEP"})}}})(b(be)),ge=(t(138),Object(u.b)(function(e){return{numbers:e.game.matrix,size:e.game.size}})(function(e){return i.a.createElement(ve,e)})),we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ee=t(9),Oe=t(13),je=t(59),ke=t.n(je),ye=t(11),ze=function(e,n){var t=n.nullLine,r=n.nullColumn;switch(e){case"top":return[t+1,r];case"bottom":return[t-1,r];case"left":return[t,r+1];case"right":return[t,r-1];default:return[t,r]}},Se=Object(ye.read_cookie)("puzzle15"),_e=ke()(Se)?{matrix:h(te.map(function(e){return Object(s.a)(e)}),[3,3]),isStarted:!1,steps:[],size:[3,3],index:0,counter:0}:Se,Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MOVE_TILE":var t=[],r=n.payload,a=e.index,i=e.counter,o=e.matrix,c=e.steps,u=e.size,d=m(o),f=ze(r,d),h=Object(l.a)(f,2),p=h[0],b=h[1];if(p<0||b<0||p>u[0]||b>u[1])return e;var v=d.nullLine,g=d.nullColumn,w=Math.abs(b-g),x=Math.abs(p-v);if(p===v&&1===w||b===g&&1===x){var E=o[v][g];o[v][g]=o[p][b],o[p][b]=E,t=o}t=o;var O=Object(Oe.a)({},e,{matrix:Object(s.a)(t),counter:i+1,index:a+1,steps:[].concat(Object(s.a)(c),[{line:p,column:b}])});return Object(ye.bake_cookie)("puzzle15",O),O;case"NEW_GAME":var j=e.matrix,k=n.payload,y=m(j),z=y.nullLine,S=y.nullColumn,_=Object(Oe.a)({},e,{matrix:Object(s.a)(k),counter:0,isStarted:!0,index:0,steps:[{line:z,column:S}]});return Object(ye.delete_cookie)("puzzle15"),_;case"NEXT_STEP":var C=[],M=e.index,L=e.steps,P=e.matrix,N=L.length>0?L.length-1:0,T=L[M<N?M+1:N],G=T.line,W=T.column,A=m(P),R=A.nullLine,D=A.nullColumn,X=Math.abs(W-D),U=Math.abs(G-R);if(G===R&&1===X||W===D&&1===U){var B=P[R][D];P[R][D]=P[G][W],P[G][W]=B,C=P}C=P;var I=Object(Oe.a)({},e,{matrix:Object(s.a)(C),index:M<L.length-1?M+1:L.length-1});return Object(ye.bake_cookie)("puzzle15",I),I;case"PREV_STEP":var V=[],Z=e.index,F=e.steps,Y=e.matrix,J=Z>0?Z-1:0,H=F[J],$=H.line,q=H.column,K=m(Y),Q=K.nullLine,ee=K.nullColumn,ne=Math.abs(q-ee),te=Math.abs($-Q);if($===Q&&1===ne||q===ee&&1===te){var re=Y[Q][ee];Y[Q][ee]=Y[$][q],Y[$][q]=re,V=Y}V=Y;var ae=Object(Oe.a)({},e,{matrix:Object(s.a)(V),index:J});return Object(ye.bake_cookie)("puzzle15",ae),ae;default:return e}},Me=Object(Ee.b)({game:Ce}),Le=Object(Ee.c)(Me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Pe=document.getElementById("root");if(!Pe)throw new Error("#app element does not exist");c.a.render(i.a.createElement(u.a,{store:Le},i.a.createElement(ge,null)),Pe),function(e){if("serviceWorker"in navigator){if(new URL("/puzzle15",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/puzzle15","/service-worker.js");we?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):xe(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):xe(n,e)})}}()},49:function(e,n,t){e.exports=t.p+"static/media/button.9203b416.svg"},53:function(e,n,t){e.exports=t.p+"static/media/numberBackground.d63d02fd.svg"},56:function(e,n,t){e.exports=t.p+"static/media/close.885ded44.svg"},57:function(e,n,t){e.exports=t.p+"static/media/board.0df52569.svg"},58:function(e,n,t){e.exports=t.p+"static/media/gamebackground.8378e863.jpg"},63:function(e,n,t){e.exports=t(139)},73:function(e,n,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.3832e3b3.chunk.js.map