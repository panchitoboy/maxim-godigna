(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BxPY:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("3Z9Z"),o=n("JI6e"),u=n("b+jL"),l=n("Bl7J"),i=n("vrFN");t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Restaurant Micopüy"}),r.a.createElement(c.a,{className:"p-3"},r.a.createElement(o.a,{className:"text-center",sm:6},r.a.createElement("img",{style:{width:500,height:500},className:"center",src:"https://via.placeholder.com/500"})),r.a.createElement(o.a,{sm:6},r.a.createElement("h1",{className:"text-center"},"Mikopüy"),r.a.createElement("p",null,"Aux fourneaux de son restaurant depuis septembre 2015, le chef Godigna propose une carte bistronomique qui change toutes les semaines en fonction de son inspiration. Les assiettes vous invitent à une découverte culinaire caractérisée par une fusion mêlant tradition et exotisme, le tout préparé à base de produits frais et raffinés."),r.a.createElement("ul",{className:"list-group"},r.a.createElement("a",{className:"list-group-item list-group-item-action",href:"https://www.google.com/maps?q=3+Rue+des+Plantes"},"Addresse: 3 rue des plantes, 75014 Paris "),r.a.createElement("a",{className:"list-group-item list-group-item-action",href:"tel:+33982216424"},"Téléphone: +33 9 82 21 64 24"),r.a.createElement("a",{className:"list-group-item list-group-item-action",href:"mailto:mikopuy@hotmail.com"},"Email : mikopuy@hotmail.com")))),r.a.createElement(c.a,null,r.a.createElement(o.a,{sm:{span:6,offset:3},className:"p-3 text-center"},r.a.createElement(u.a,null,r.a.createElement(u.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://via.placeholder.com/400x400",alt:"First slide"})),r.a.createElement(u.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://via.placeholder.com/400x400",alt:"Third slide"})),r.a.createElement(u.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://via.placeholder.com/400x400",alt:"Third slide"}))))))}},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},"b+jL":function(e,t,n){"use strict";n("XfO3"),n("HEwt"),n("0l/t");var a=n("wx14"),r=n("zLVn"),c=n("ZCiN"),o=n("q1tI"),u=n.n(o);var l=function(e,t){var n=Object(o.useRef)(!0);Object(o.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},i=(n("eM6i"),n("XcHJ")),s=n("i52p"),m=Math.pow(2,31)-1;function f(){var e=Object(i.a)(),t=Object(o.useRef)();return Object(s.a)((function(){return clearTimeout(t.current)})),Object(o.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=m?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=m?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),m)}(t,a,Date.now()+r))},clear:n}}),[])}var d=n("TSYQ"),p=n.n(d),v=n("CR+v"),b=n("dRu9"),h=n("JCAc"),E=n("YdCC"),O=Object(E.a)("carousel-caption",{Component:"div"}),j=Object(E.a)("carousel-item");n("8+KV"),n("bWfx");function N(e,t){var n=0;return u.a.Children.map(e,(function(e){return u.a.isValidElement(e)?t(e,n++):e}))}var x=n("dbZe"),g=n("vUet"),w=n("z+q/"),y={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:u.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:u.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var k=u.a.forwardRef((function(e,t){var n=Object(h.a)(e,{activeIndex:"onSelect"}),i=n.as,s=void 0===i?"div":i,m=n.bsPrefix,d=n.slide,E=n.fade,O=n.controls,j=n.indicators,y=n.activeIndex,k=n.onSelect,C=n.onSlide,I=n.onSlid,S=n.interval,T=n.keyboard,M=n.onKeyDown,R=n.pause,L=n.onMouseOver,q=n.onMouseOut,A=n.wrap,D=n.touch,J=n.onTouchStart,P=n.onTouchMove,X=n.onTouchEnd,H=n.prevIcon,K=n.prevLabel,V=n.nextIcon,Z=n.nextLabel,F=n.className,Y=n.children,z=Object(r.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),B=Object(g.a)(m,"carousel"),G=Object(o.useRef)(null),Q=Object(o.useState)("next"),U=Q[0],W=Q[1],$=Object(o.useState)(!1),_=$[0],ee=$[1],te=Object(o.useState)(y),ne=te[0],ae=te[1];_||y===ne||(G.current?(W(G.current),G.current=null):W(y>ne?"next":"prev"),d&&ee(!0),ae(y));var re=u.a.Children.toArray(Y).filter(u.a.isValidElement).length,ce=Object(o.useCallback)((function(e){if(!_){var t=ne-1;if(t<0){if(!A)return;t=re-1}G.current="prev",k(t,e)}}),[_,ne,k,A,re]),oe=Object(c.a)((function(e){if(!_){var t=ne+1;if(t>=re){if(!A)return;t=0}G.current="next",k(t,e)}})),ue=Object(o.useRef)();Object(o.useImperativeHandle)(t,(function(){return{element:ue.current,prev:ce,next:oe}}));var le=Object(c.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&oe()})),ie="next"===U?"left":"right";l((function(){d||(C&&C(ne,ie),I&&I(ne,ie))}),[ne]);var se=B+"-item-"+U,me=B+"-item-"+ie,fe=Object(o.useCallback)((function(e){Object(w.a)(e),C&&C(ne,ie)}),[C,ne,ie]),de=Object(o.useCallback)((function(){ee(!1),I&&I(ne,ie)}),[I,ne,ie]),pe=Object(o.useCallback)((function(e){if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ce(e);case"ArrowRight":return e.preventDefault(),void oe(e)}M&&M(e)}),[T,M,ce,oe]),ve=Object(o.useState)(!1),be=ve[0],he=ve[1],Ee=Object(o.useCallback)((function(e){"hover"===R&&he(!0),L&&L(e)}),[R,L]),Oe=Object(o.useCallback)((function(e){he(!1),q&&q(e)}),[q]),je=Object(o.useRef)(0),Ne=Object(o.useRef)(0),xe=Object(o.useState)(!1),ge=xe[0],we=xe[1],ye=f(),ke=Object(o.useCallback)((function(e){je.current=e.touches[0].clientX,Ne.current=0,D&&we(!0),J&&J(e)}),[D,J]),Ce=Object(o.useCallback)((function(e){e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-je.current,P&&P(e)}),[P]),Ie=Object(o.useCallback)((function(e){if(D){var t=Ne.current;if(Math.abs(t)<=40)return;t>0?ce(e):oe(e)}ye.set((function(){we(!1)}),S),X&&X(e)}),[D,ce,oe,ye,S,X]),Se=null!=S&&!be&&!ge&&!_,Te=Object(o.useRef)();Object(o.useEffect)((function(){if(Se)return Te.current=setInterval(document.visibilityState?le:oe,S),function(){clearInterval(Te.current)}}),[Se,oe,S,le]);var Me=Object(o.useMemo)((function(){return j&&Array.from({length:re},(function(e,t){return function(e){k(t,e)}}))}),[j,re,k]);return u.a.createElement(s,Object(a.a)({ref:ue},z,{onKeyDown:pe,onMouseOver:Ee,onMouseOut:Oe,onTouchStart:ke,onTouchMove:Ce,onTouchEnd:Ie,className:p()(F,B,d&&"slide",E&&B+"-fade")}),j&&u.a.createElement("ol",{className:B+"-indicators"},N(Y,(function(e,t){return u.a.createElement("li",{key:t,className:t===ne?"active":null,onClick:Me[t]})}))),u.a.createElement("div",{className:B+"-inner"},N(Y,(function(e,t){var n=t===ne;return d?u.a.createElement(b.e,{in:n,onEnter:n?fe:null,onEntered:n?de:null,addEndListener:v.a},(function(t){return u.a.cloneElement(e,{className:p()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})})):u.a.cloneElement(e,{className:p()(e.props.className,n&&"active")})}))),O&&u.a.createElement(u.a.Fragment,null,(A||0!==y)&&u.a.createElement(x.a,{className:B+"-control-prev",onClick:ce},H,K&&u.a.createElement("span",{className:"sr-only"},K)),(A||y!==re-1)&&u.a.createElement(x.a,{className:B+"-control-next",onClick:oe},V,Z&&u.a.createElement("span",{className:"sr-only"},Z))))}));k.displayName="Carousel",k.defaultProps=y,k.Caption=O,k.Item=j;t.a=k},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(e){var t,n,r=(t=e,(n=Object(a.useRef)(t)).current=t,n);Object(a.useEffect)((function(){return function(){return r.current()}}),[])}}}]);
//# sourceMappingURL=component---src-pages-mikopuy-js-7e4101ce00ec0599092a.js.map