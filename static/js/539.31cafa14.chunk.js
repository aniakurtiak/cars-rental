"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{6750:function(n,e,t){t.d(e,{H:function(){return Q}});var r,i,o,l,a,c,u,s,d,f,p,h,v,x,b,Z,g,m,j=t(4942),k=t(1413),w=t(9439),y=t(2791),P=t(4420),C=t(168),E=t(3974),M=t(7924),F=M.ZP.ul(r||(r=(0,C.Z)(["\n  display: flex;\n  gap: 29px;\n  flex-wrap: wrap;\n"]))),I=(M.ZP.div(i||(i=(0,C.Z)([""]))),M.ZP.img(o||(o=(0,C.Z)(["\n  width: 100%;\n  height: 268px;\n  border-radius: 14px;\n"])))),_=M.ZP.li(l||(l=(0,C.Z)(["\n  width: 274px;\n  height: 426px;\n  position: relative;\n"]))),L=M.ZP.button(a||(a=(0,C.Z)(["\nposition: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n"]))),S=M.ZP.button(c||(c=(0,C.Z)(["\nposition: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n"]))),z=(0,M.ZP)(E.$aX)(u||(u=(0,C.Z)(["\n  fill: none;\n  color: white;\n  width: 18px;\n  height: 18px;\n  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    scale: 1.1;\n  }\n  &:focus {\n    fill: #3470FF;\n    color: #3470FF;\n   \n  }\n"]))),A=(0,M.ZP)(E.$aX)(s||(s=(0,C.Z)(["\n  fill: #3470FF;\n  color: #3470FF;\n  width: 18px;\n  height: 18px;\n  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover{\n    scale: 1.1;\n  }\n  &:focus {\n    color: white;\n    fill: none;\n    \n  }\n"]))),B=M.ZP.div(d||(d=(0,C.Z)(["\nmargin-top: 14px;\nmargin-bottom: 8px;\ndisplay: flex;\njustify-content: space-between;\ncolor: #121417;\nfont-size: 16px;\nfont-weight: 500;\nline-height: 1,5%;\n"]))),G=M.ZP.div(f||(f=(0,C.Z)(["\ndisplay: flex;\n"]))),O=M.ZP.div(p||(p=(0,C.Z)(["\n"]))),H=M.ZP.span(h||(h=(0,C.Z)(["\ncolor: #3470FF;\nwhite-space: pre;\n"]))),$=M.ZP.div(v||(v=(0,C.Z)(["\ndisplay: flex;\njustify-content: space-between;\n"]))),N=M.ZP.button(x||(x=(0,C.Z)(["\nmargin-top: 28px;\nwidth: 100%;\nheight: 44px;\npadding: 12px 99px;\njustify-content: center;\nalign-items: center;\nborder: none;\nborder-radius: 12px;\nbackground: #3470FF;\ncolor: white;\nfont-weight: 600;\nline-height: 1.43;\ncursor: pointer;\n&:hover{\n  background: #0B44CD;\n  }\n"]))),R=t(7116),X=t(2187),D=M.ZP.div(b||(b=(0,C.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(18, 20, 23, 0.5);\n  z-index: 999;\n"]))),K=M.ZP.div(Z||(Z=(0,C.Z)(["\n  position: relative;\n  padding-left: 35px;\n  padding-right: 37px;\n  width: 541px;\n  height: 752px;\n  border-radius: 10px;\n  top: 50%;\n  left: 50%;\n  overflow-y: auto;\n  transform: translate(-50%, -50%) scale(1);\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 24px;\n"]))),U=M.ZP.button(g||(g=(0,C.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: block;\n  padding: 2px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  transform: scale(1);\n  transition: transform 100ms linear;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),V=(0,M.ZP)(X.IOM)(m||(m=(0,C.Z)(["\n  width: 24px;\n  height: 24px;\n  display: block;\n"]))),W=t(6351),q=t(184),J=function(n){var e=n.onClose,t=n.advertId,r=(0,y.useRef)(null),i=(0,P.v9)(W.OG),o=(0,P.I0)();return(0,y.useEffect)((function(){o((0,R.Z5)(t))}),[o,t]),console.log(i),(0,y.useEffect)((function(){var n=function(n){n.target===r.current&&e()},t=function(n){"Escape"===n.key&&e()},i=r.current;return i&&(document.addEventListener("keydown",t),i.addEventListener("click",n)),function(){i&&(i.removeEventListener("click",n),document.removeEventListener("keydown",t))}}),[e]),(0,q.jsx)(D,{ref:r,children:(0,q.jsx)(K,{children:(0,q.jsx)(U,{type:"button",onClick:e,children:(0,q.jsx)(V,{})})})})},Q=function(n){var e=n.adverts,t=n.favoriteMode,r=n.deleteMode,i=(0,P.I0)(),o=(0,y.useState)(!1),l=(0,w.Z)(o,2),a=l[0],c=l[1],u=(0,y.useState)({}),s=(0,w.Z)(u,2),d=s[0],f=s[1],p=(0,y.useState)(null),h=(0,w.Z)(p,2),v=h[0],x=h[1];(0,y.useEffect)((function(){var n={};e.forEach((function(e){n[e.car_id]=t?"favorite":r?"delete":"favorite"})),f(n)}),[e,t,r]);return(0,q.jsx)("div",{children:(0,q.jsxs)(F,{children:[e.map((function(n){return(0,q.jsxs)(_,{children:[(0,q.jsx)("div",{children:(0,q.jsx)(I,{src:n.img,alt:"car"})}),(0,q.jsxs)(B,{children:[(0,q.jsxs)(G,{children:[n.make," "," ",(0,q.jsxs)(H,{children:[" ",n.model]}),", "," ",n.year]}),(0,q.jsx)(O,{children:n.rentalPrice})]}),(0,q.jsxs)($,{children:[n.address,n.rentalCompany,n.type,n.model,n.car_id]}),"favorite"===d[n.car_id]&&(0,q.jsx)(L,{onClick:function(){return function(n){i((0,R.IO)(n)),f((function(e){return(0,k.Z)((0,k.Z)({},e),{},(0,j.Z)({},n.car_id,"delete"))}))}(n)},children:(0,q.jsx)(z,{})}),"delete"===d[n.car_id]&&(0,q.jsx)(S,{onClick:function(){return function(n){i((0,R.fu)(n.id)),f((function(e){return(0,k.Z)((0,k.Z)({},e),{},(0,j.Z)({},n.car_id,"favorite"))}))}(n)},children:(0,q.jsx)(A,{})}),(0,q.jsx)(N,{onClick:function(){return x(n),void c(!0)},children:"Learn more"})]},n.car_id)})),a&&(0,q.jsx)(J,{car:v,onClose:function(){x(null),c(!1)},advertId:v.id})]})})}},4539:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(2791),i=t(4420),o=t(7116),l=t(6351),a=t(6750),c=t(184),u=function(){var n=(0,i.I0)(),e=(0,i.v9)(l.hA);return(0,r.useEffect)((function(){n((0,o.GA)())}),[n]),(0,c.jsx)("div",{children:(0,c.jsx)(a.H,{adverts:e,favoriteMode:!0})})},s=t(686),d=t(864),f=[{value:"buick",label:"Buick"},{value:"volvo",label:"Volvo"},{value:"hummer",label:"HUMMER"},{value:"subaru",label:"Subaru"},{value:"mitsubishi",label:"Mitsubishi"},{value:"nissan",label:"Nissan"},{value:"lincoln",label:"Lincoln"},{value:"gmc",label:"GMC"},{value:"hyundai",label:"Hyundai"},{value:"mini",label:"MINI"},{value:"bentley",label:"Bentley"},{value:"mercedes-Benz",label:"Mercedes-Benz"},{value:"aston Martin",label:"Aston Martin"},{value:"pontiac",label:"Pontiac"},{value:"lamborghini",label:"Lamborghini"},{value:"audi",label:"Audi"},{value:"bmw",label:"BMW"},{value:"chevrolet",label:"Chevrolet"},{value:"chrysler",label:"Chrysler"},{value:"kia",label:"Kia"},{value:"land",label:"Land"}],p=function(){var n=(0,i.I0)(),e=(0,i.v9)(l.xS);return(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{children:"Car brand"}),(0,c.jsx)(d.ZP,{value:f.find((function(n){return n.value===e})),options:f,onChange:function(e){n((0,s.$Z)(e.value))},isSearchable:!0,placeholder:"Enter the text"})]})},h=function(){var n=(0,i.I0)();return(0,r.useEffect)((function(){n((0,o.GA)())}),[n]),(0,c.jsxs)("div",{children:[(0,c.jsx)(p,{}),(0,c.jsx)(u,{})]})}},6351:function(n,e,t){t.d(e,{OG:function(){return i},hA:function(){return a},tp:function(){return o},xS:function(){return l}});var r=t(3553),i=function(n){return n.adverts.items},o=function(n){return n.adverts.favororiteItems},l=function(n){return n.filters.selectedOption},a=(0,r.P1)([i,l],(function(n,e){return n.filter((function(n){return n.make.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=539.31cafa14.chunk.js.map