(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efad1c2c"],{"0617":function(t,e,n){},2440:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{attrs:{showBack:!0}},[t._v("注 册")]),n("div",{staticClass:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nick,expression:"nick"}],attrs:{type:"text",placeholder:"昵称"},domProps:{value:t.nick},on:{input:function(e){e.target.composing||(t.nick=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("br"),n("button",{on:{click:t.handleRegister}},[t._v("注 册")])])],1)},o=[],i=(n("4f37"),n("cebc")),c=n("2f62"),u=(n("3022"),{data:function(){return{nick:"",account:"",password:""}},computed:Object(i["a"])({},Object(c["b"])(["testUserInfo"])),methods:Object(i["a"])({},Object(c["c"])(["register"]),{handleRegister:function(){if(!this.nick.trim())return alert("昵称不能为空！");if(!this.account.trim())return alert("用户名不能为空！");if(!this.password)return alert("请输入密码！");var t=this.testUserInfo(this.account);if(t&&t.account)alert("用户名已存在！"),this.account="",this.password="";else{var e={userNick:this.nick,account:this.account,password:this.password};this.register(e),this.$router.back()}}})}),s=u,a=(n("455c"),n("2877")),f=Object(a["a"])(s,r,o,!1,null,"3eb23970",null);e["default"]=f.exports},3022:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!j(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(u(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,c=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),s=r[n];n<i;s=r[++n])v(s)||!k(s)?c+=" "+s:c+=" "+u(s);return c},e.deprecate=function(n,r){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;function i(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}return i};var i,c={};function u(t,n){var r={seen:[],stylize:a};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&e._extend(r,n),S(r.showHidden)&&(r.showHidden=!1),S(r.depth)&&(r.depth=2),S(r.colors)&&(r.colors=!1),S(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),l(r,t,r.depth)}function s(t,e){var n=u.styles[e];return n?"["+u.colors[n][0]+"m"+t+"["+u.colors[n][1]+"m":t}function a(t,e){return t}function f(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function l(t,n,r){if(t.customInspect&&n&&D(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return j(o)||(o=l(t,o,r)),o}var i=p(t,n);if(i)return i;var c=Object.keys(n),u=f(c);if(t.showHidden&&(c=Object.getOwnPropertyNames(n)),P(n)&&(c.indexOf("message")>=0||c.indexOf("description")>=0))return y(n);if(0===c.length){if(D(n)){var s=n.name?": "+n.name:"";return t.stylize("[Function"+s+"]","special")}if(E(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(z(n))return t.stylize(Date.prototype.toString.call(n),"date");if(P(n))return y(n)}var a,m="",v=!1,w=["{","}"];if(h(n)&&(v=!0,w=["[","]"]),D(n)){var O=n.name?": "+n.name:"";m=" [Function"+O+"]"}return E(n)&&(m=" "+RegExp.prototype.toString.call(n)),z(n)&&(m=" "+Date.prototype.toUTCString.call(n)),P(n)&&(m=" "+y(n)),0!==c.length||v&&0!=n.length?r<0?E(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),a=v?d(t,n,r,u,c):c.map(function(e){return g(t,n,r,u,e,v)}),t.seen.pop(),b(a,m,w)):w[0]+m+w[1]}function p(t,e){if(S(e))return t.stylize("undefined","undefined");if(j(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return O(e)?t.stylize(""+e,"number"):m(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function y(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,n,r,o){for(var i=[],c=0,u=e.length;c<u;++c)A(e,String(c))?i.push(g(t,e,n,r,String(c),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(g(t,e,n,r,o,!0))}),i}function g(t,e,n,r,o,i){var c,u,s;if(s=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},s.get?u=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(u=t.stylize("[Setter]","special")),A(r,o)||(c="["+o+"]"),u||(t.seen.indexOf(s.value)<0?(u=v(n)?l(t,s.value,null):l(t,s.value,n-1),u.indexOf("\n")>-1&&(u=i?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n"))):u=t.stylize("[Circular]","special")),S(c)){if(i&&o.match(/^\d+$/))return u;c=JSON.stringify(""+o),c.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=t.stylize(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=t.stylize(c,"string"))}return c+": "+u}function b(t,e,n){var r=t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return r>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function h(t){return Array.isArray(t)}function m(t){return"boolean"===typeof t}function v(t){return null===t}function w(t){return null==t}function O(t){return"number"===typeof t}function j(t){return"string"===typeof t}function x(t){return"symbol"===typeof t}function S(t){return void 0===t}function E(t){return k(t)&&"[object RegExp]"===_(t)}function k(t){return"object"===typeof t&&null!==t}function z(t){return k(t)&&"[object Date]"===_(t)}function P(t){return k(t)&&("[object Error]"===_(t)||t instanceof Error)}function D(t){return"function"===typeof t}function N(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function _(t){return Object.prototype.toString.call(t)}function T(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(S(i)&&(i=Object({NODE_ENV:"production",BASE_URL:"/"}).NODE_DEBUG||""),n=n.toUpperCase(),!c[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;c[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else c[n]=function(){};return c[n]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=h,e.isBoolean=m,e.isNull=v,e.isNullOrUndefined=w,e.isNumber=O,e.isString=j,e.isSymbol=x,e.isUndefined=S,e.isRegExp=E,e.isObject=k,e.isDate=z,e.isError=P,e.isFunction=D,e.isPrimitive=N,e.isBuffer=n("d60a");var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function U(){var t=new Date,e=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":");return[t.getDate(),R[t.getMonth()],e].join(" ")}function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",U(),e.format.apply(e,arguments))},e.inherits=n("3fb5"),e._extend=function(t,e){if(!e||!k(e))return t;var n=Object.keys(e),r=n.length;while(r--)t[n[r]]=e[n[r]];return t};var F="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function J(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function $(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,c=function(){return o.apply(i,arguments)};e.apply(this,n).then(function(e){t.nextTick(c,null,e)},function(e){t.nextTick(J,e,c)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(F&&t[F]){var e=t[F];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,F,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise(function(t,r){e=t,n=r}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(t,r){t?n(t):e(r)});try{t.apply(this,o)}catch(c){n(c)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),F&&Object.defineProperty(e,F,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=F,e.callbackify=$}).call(this,n("f28c"))},"3fb5":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},"455c":function(t,e,n){"use strict";var r=n("0617"),o=n.n(r);o.a},"4f37":function(t,e,n){"use strict";n("aa77")("trim",function(t){return function(){return t(this,3)}})},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}}}]);
//# sourceMappingURL=chunk-efad1c2c.6abcd8af.js.map