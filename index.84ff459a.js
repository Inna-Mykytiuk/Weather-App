!function(){var e=document.querySelector(".weather-app"),t=document.querySelector(".temp"),n=document.querySelector(".date"),c=document.querySelector(".time"),o=document.querySelector(".condition"),r=document.querySelector(".name"),a=document.querySelector(".icon"),u=document.querySelector(".cloud"),i=document.querySelector(".humidity"),l=document.querySelector(".wind"),d=document.getElementById("locationInput"),y=document.querySelector(".search"),s=document.querySelector(".submit"),g=document.querySelectorAll(".city"),m="London";function b(){fetch("http://api.weatherapi.com/v1/current.json?key=1afb03c498bb474489c193714230102&q=".concat(m)).then((function(e){return e.json()})).then((function(d){console.log(d),t.innerHTML=d.current.temp_c+"&#176;",o.innerHTML=d.current.condition.text;var y,g,m,b=d.location.localtime,p=parseInt(b.substr(0,4)),h=parseInt(b.substr(5,2)),k=parseInt(b.substr(8,2)),S=b.substr(11);n.innerHTML="".concat((y=k,g=h,m=p,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date("".concat(y,"/").concat(g,"/").concat(m)).getDay()])," ").concat(k,", ").concat(h," ").concat(p),c.innerHTML=S,r.innerHTML=d.location.name;var f=d.current.condition.icon.substr(34);a.src="../images/icons/"+f,u.innerHTML=d.current.cloud+"%",i.innerHTML=d.current.humidity+"%",l.innerHTML=d.current.wind_kph+"km/h";var q="day",L=d.current.condition.code;d.current.is_day||(q="night"),1e3==L?(e.style.backgroundImage="url(../images/".concat(q,"/cloudy.jpg)"),s.style.background="#e5ba92","night"==q&&(s.style.background="#181e27")):1003==L||1006==L||1009==L||1030==L||1069==L||1087==L||1135==L||1273==L||1276==L||1279==L||1282==L?(e.style.backgroundImage="url(./images/".concat(q,"/clear.jpg)"),s.style.background="#fa6d1b","night"==q&&(s.style.background="#181e27")):1063==L||1069==L||1072==L||1150==L||1153==L||1180==L||1183==L||1186==L||1189==L||1192==L||1195==L||1204==L||1207==L||1240==L||1243==L||1246==L||1249==L||1252==L?(e.style.backgroundImage="url(./images/".concat(q,"/rainy.jpg)"),s.style.background="#647d75","night"==q&&(s.style.background="#325c80")):(e.style.backgroundImage="url(./images/".concat(q,"/snowy.jpg)"),s.style.background="#4d72aa","night"==q&&(s.style.background="#1b1b1b")),e.style.opacity="1"})).catch((function(){alert("City not found, please try again"),e.style.opacity="1"}))}g.forEach((function(t){t.addEventListener("click",(function(t){m=t.target.innerHTML,b(),e.style.opacity="0"}))})),d.addEventListener("submit",(function(t){0==y.value.length?alert("Please type in a city name"):(m=y.value,b(),y.value="",e.style.opacity="0"),t.preventDefault()})),b(),e.style.opacity="1",console.log("hello")}();
//# sourceMappingURL=index.84ff459a.js.map
