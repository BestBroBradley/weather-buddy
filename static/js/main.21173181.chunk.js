(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{25:function(e,t,n){e.exports=n(49)},30:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),i=n.n(l),c=n(5),o=n(9),u=n(2),d=n(3);n(30);function m(){const e=Object(u.a)(["\n    text-align: center;\n    border: 3px solid grey;\n    width: 165px;\n    padding: 10px;\n    margin: 10px;\n\n    @media only screen and (max-width: 600px) {\n        width: 90%;\n        border: 7px dotted lightcoral;\n    }\n    \n"]);return m=function(){return e},e}function h(){const e=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap\n"]);return h=function(){return e},e}function s(){const e=Object(u.a)(["\n    @media only screen and (max-width: 700px) {\n        text-align: center;\n    }\n"]);return s=function(){return e},e}function p(){const e=Object(u.a)(["\n    display: flex;\n\n    img {\n        width: 120px;\n        height: auto;\n    }\n\n    @media only screen and (max-width: 600px) {\n\n      }\n"]);return p=function(){return e},e}function b(){const e=Object(u.a)(["\n    height: 30px;\n    margin: 5px 10px;\n    font-size: 1rem;\n    border: 2px grey solid;\n    background: yellowgreen;\n    border-radius: 12px;\n\n    :hover {\n        color: white;\n    }\n\n    :active {\n        opacity: .3;\n    }\n"]);return b=function(){return e},e}function g(){const e=Object(u.a)(["\n    height: 30px;\n    margin: 5px 10px;\n    font-size: 1.25rem;\n    border: 2px grey solid;\n    background: powderblue;\n    border-radius: 12px;\n\n    :hover {\n        color: white;\n    }\n\n    :active {\n        opacity: .3;\n    }\n"]);return g=function(){return e},e}function f(){const e=Object(u.a)(["\n    width: 350px;\n    text-align: center;\n    margin: 30px auto;\n\n    #search-box {\n        width: 100%;\n    }\n\n    input {\n        width: 80%;\n        margin: auto;\n        height: 25px;\n        font-size: 1.25rem;\n        margin-bottom: 10px;\n    }\n\n    hr {\n        width: 80%;\n    }\n\n    #search-button, #favorites-button {\n        width: 50%;\n        background: gold;\n        border: 2px grey solid;\n        font-size: 1.25rem;\n        border-radius: 12px;\n        margin-bottom: 10px;\n\n        :hover {\n            color: white;\n        }\n\n        :active {\n            opacity: .3;\n        }\n    }\n\n    #favorites-button {\n        background: sandybrown;\n    }\n\n    #clear-button {\n        width: 45%;\n    }\n\n    button {\n        width: 80%;\n    }\n\n"]);return f=function(){return e},e}function y(){const e=Object(u.a)(["\n    text-align: center;\n    font-family: ",";\n    font-size: 1.5rem;\n"]);return y=function(){return e},e}function E(){const e=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    font-family: ","\n"]);return E=function(){return e},e}const v=d.a.div(E(),"Neucha"),x=d.a.div(y(),"Neucha"),w=d.a.div(f()),O=d.a.button(g()),j=d.a.button(b()),I=d.a.div(p()),k=d.a.div(s()),C=d.a.div(h()),S=d.a.div(m());var F=()=>r.a.createElement(x,null,r.a.createElement("h1",null,"Weather Dashboard"));const D=r.a.createContext({});var B=()=>{const e=Object(a.useContext)(D),t=e.handleSubmit,n=e.handleFavorite;return r.a.createElement("div",{id:"search-box"},r.a.createElement("form",null,r.a.createElement("input",{id:"query",placeholder:"Search for a city..."}),r.a.createElement("button",{onClick:e=>{e.preventDefault();const n=document.getElementById("query").value;n?t(n):alert("Search cannot be blank.")},id:"search-button"},"Search Once"),r.a.createElement("br",null),r.a.createElement("button",{onClick:e=>{e.preventDefault();const t=document.getElementById("query").value;t?n(t):alert("Search cannot be blank.")},id:"favorites-button"},"Add to Favorites")))};var q=()=>{const e=Object(a.useContext)(D).renderButtons;return r.a.createElement(r.a.Fragment,null,e)};var A=()=>{const e=Object(a.useContext)(D),t=e.btnArray,n=e.setCurrentDay,l=e.currentDay;Object(a.useEffect)(()=>{});return r.a.createElement(w,null,r.a.createElement(B,null),r.a.createElement("hr",null),r.a.createElement("br",null),0!==t.length?r.a.createElement("h2",null,"Check out your favorites below:"):r.a.createElement("h2",null,'Use the "Add to Favorites" button to start your favorites list!'),r.a.createElement(q,null),0!==t.length?r.a.createElement("div",null,r.a.createElement(j,{onClick:()=>{localStorage.setItem("button array",JSON.stringify([])),n(Object(c.a)({},l))},id:"clear-button"},"Clear your Favorites")):null)},z=n(4),J=n.n(z);var L=()=>{const e=Object(a.useContext)(D).currentDay,t="http://openweathermap.org/img/w/".concat(e.icon,".png"),n=J.a.unix(e.dt).format("dddd, LL");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(I,null,r.a.createElement("img",{alt:e.description,src:t}),r.a.createElement("div",null,r.a.createElement("h1",null,"Today is ",n,"."),r.a.createElement("h1",null,"It's currently ",e.temp,"\xb0 F in ",e.city,".")))),r.a.createElement("hr",null),r.a.createElement(k,null,r.a.createElement("h3",null,"High: ",e.high,"\xb0 F"),r.a.createElement("h3",null,"Low: ",e.low,"\xb0 F"),r.a.createElement("h3",null,"Humidity: ",e.humidity,"%"))),r.a.createElement("br",null))};var N=e=>{const t=J.a.unix(e.data.dt).format("LL"),n=J.a.unix(e.data.dt).format("dddd"),a="http://openweathermap.org/img/w/".concat(e.data.icon,".png"),l=e.data.description;return r.a.createElement(S,null,r.a.createElement("h2",null,t),r.a.createElement("h2",null,n),r.a.createElement("h3",null,parseInt(e.data.temp),"\xb0 F"),r.a.createElement("hr",null),r.a.createElement("img",{alt:e.data.description,src:a}),r.a.createElement("h4",null,l),r.a.createElement("h3",null,"Humidity: ",e.data.humidity,"%"))};var P=()=>{const e=Object(a.useContext)(D).fiveDay.map(e=>r.a.createElement(N,{key:e.dt,data:e}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(C,null,e))},H=n(8),_=n.n(H);const T="addb6fc1f7165f72fdb4baa7a5715f8e";var U=function(e){return _.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.trim().split("-").join("+"),"&units=imperial&APPID=").concat(T))},W=function(e){return _.a.get("https://api.openweathermap.org/data/2.5/forecast?id=".concat(e,"&units=imperial&APPID=").concat(T))};var G=function(){let e=JSON.parse(localStorage.getItem("button array"))||[];const t=Object(a.useState)({city:"",temp:0,high:0,low:0,humidity:0,description:"",icon:"",dt:0}),n=Object(o.a)(t,2),l=n[0],i=n[1],u=Object(a.useState)([{high:0,low:0,icon:"",date:"",precip:0},{high:0,low:0,icon:"",date:"",precip:0},{high:0,low:0,icon:"",date:"",precip:0},{high:0,low:0,icon:"",date:"",precip:0},{high:0,low:0,icon:"",date:"",precip:0}]),d=Object(o.a)(u,2),m=d[0],h=d[1];Object(a.useEffect)(()=>{U("denver").then(e=>{s(e)})},[]);const s=e=>{i(Object(c.a)({},l,{city:e.data.name,temp:parseInt(e.data.main.temp),high:parseInt(e.data.main.temp_max),low:parseInt(e.data.main.temp_min),humidity:e.data.main.humidity,description:e.data.weather[0].main,icon:e.data.weather[0].icon,dt:e.data.dt})),W(e.data.id).then(e=>{p(e)})},p=e=>{const t=[];for(let n=7;n<=39;n+=8)t.push({temp:e.data.list[n].main.temp,humidity:e.data.list[n].main.humidity,icon:e.data.list[n].weather[0].icon,description:e.data.list[n].weather[0].description,dt:e.data.list[n].dt});h(t)},b=e.map(e=>r.a.createElement(O,{onClick:()=>g(e),value:e},e)),g=e=>{document.getElementById("query").value="",U(e).then(e=>{s(e)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(v,null,r.a.createElement(D.Provider,{value:{btnArray:e,renderButtons:b,currentDay:l,setCurrentDay:i,fiveDay:m,handleSubmit:g,handleFavorite:t=>{U(t).then(t=>{t&&!e.includes(t.data.name)&&(e.push(t.data.name),document.getElementById("query").value="",localStorage.setItem("button array",JSON.stringify(e))),s(t)})}}},r.a.createElement(A,null),r.a.createElement("div",null,r.a.createElement(P,null)))))};i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.21173181.chunk.js.map