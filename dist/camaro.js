
var camaro = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(camaro) {
  camaro = camaro || {};

var d;d||(d=typeof camaro !== 'undefined' ? camaro : {});var n={},p;for(p in d)d.hasOwnProperty(p)&&(n[p]=d[p]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var q=!1,r=!1,aa=!1,ba=!1;q="object"===typeof window;r="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!q&&!r;ba=!q&&!aa&&!r;var t="";
if(aa){t=__dirname+"/";var ca,da;d.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};d.readBinary=function(a){a=d.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&(d.thisProgram=process.argv[1].replace(/\\/g,"/"));d.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof x))throw a;});process.on("unhandledRejection",
u);d.quit=function(a){process.exit(a)};d.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(d.read=function(a){return read(a)}),d.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||u("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?d.arguments=scriptArgs:"undefined"!=typeof arguments&&(d.arguments=arguments),"function"===typeof quit&&(d.quit=function(a){quit(a)});
else if(q||r)r?t=self.location.href:document.currentScript&&(t=document.currentScript.src),_scriptDir&&(t=_scriptDir),0!==t.indexOf("blob:")?t=t.substr(0,t.lastIndexOf("/")+1):t="",d.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(d.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),d.readAsync=function(a,b,c){var e=new XMLHttpRequest;e.open("GET",a,!0);
e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):c()};e.onerror=c;e.send(null)},d.setWindowTitle=function(a){document.title=a};var ea=d.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=d.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(p in n)n.hasOwnProperty(p)&&(d[p]=n[p]);n=void 0;
var fa={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&y("no native wasm support detected");var z,ha=!1,ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ja(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&ia)return ia.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var m=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|m:(f&7)<<18|g<<12|m<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}function A(a){return a?ja(B,a,void 0):""}
function ka(a,b,c){var e=B;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var m=a.charCodeAt(++f);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;e[b++]=g}else{if(2047>=g){if(b+1>=c)break;e[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;e[b++]=224|g>>12}else{if(b+3>=c)break;e[b++]=240|g>>18;e[b++]=128|g>>12&63}e[b++]=128|g>>6&63}e[b++]=128|g&63}}e[b]=0}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function la(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,C,B,ma,na,D,E,oa,pa;function ra(){d.HEAP8=C=new Int8Array(buffer);d.HEAP16=ma=new Int16Array(buffer);d.HEAP32=D=new Int32Array(buffer);d.HEAPU8=B=new Uint8Array(buffer);d.HEAPU16=na=new Uint16Array(buffer);d.HEAPU32=E=new Uint32Array(buffer);d.HEAPF32=oa=new Float32Array(buffer);d.HEAPF64=pa=new Float64Array(buffer)}var F=d.TOTAL_MEMORY||16777216;5242880>F&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK=5242880)");
d.buffer?buffer=d.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(z=new WebAssembly.Memory({initial:F/65536}),buffer=z.buffer):buffer=new ArrayBuffer(F);ra();D[4388]=5260464;function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.$;"number"===typeof c?void 0===b.U?d.dynCall_v(c):d.dynCall_vi(c,b.U):c(void 0===b.U?null:b.U)}}}var sa=[],ta=[],ua=[],va=[],wa=!1;function xa(){var a=d.preRun.shift();sa.unshift(a)}var H=0,ya=null,J=null;
d.preloadedImages={};d.preloadedAudios={};function za(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="camaro.wasm";if(!za()){var Aa=L;L=d.locateFile?d.locateFile(Aa,t):t+Aa}function Ba(){try{if(d.wasmBinary)return new Uint8Array(d.wasmBinary);if(d.readBinary)return d.readBinary(L);throw"both async and sync fetching of the wasm failed";}catch(a){u(a)}}
function Ca(){return d.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(a){a(Ba())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ba()})}
function Da(a){function b(a){d.asm=a.exports;H--;d.monitorRunDependencies&&d.monitorRunDependencies(H);0==H&&(null!==ya&&(clearInterval(ya),ya=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function e(a){Ca().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);u(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:fa};H++;d.monitorRunDependencies&&d.monitorRunDependencies(H);if(d.instantiateWasm)try{return d.instantiateWasm(f,
b)}catch(g){return y("Module.instantiateWasm callback failed with error: "+g),!1}d.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||za()||"function"!==typeof fetch?e(c):WebAssembly.instantiateStreaming(fetch(L,{credentials:"same-origin"}),f).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");e(c)});return{}}
d.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:120,maximum:120,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Da(b)};ta.push({$:function(){Ea()}});function M(){return!!M.X}var Fa=[null,[],[]],N=0;function O(){N+=4;return D[N-4>>2]}var Ga={};function Ha(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ia=void 0;function P(a){for(var b="";B[a];)b+=Ia[B[a++]];return b}
var Q={},R={},S={};function Ja(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ka(a,b){a=Ja(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function La(a){var b=Error,c=Ka(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ma=void 0;function T(a){throw new Ma(a);}var Na=void 0;
function Oa(a,b){function c(a){a=b(a);if(a.length!==e.length)throw new Na("Mismatched type converter count");for(var c=0;c<e.length;++c)U(e[c],a[c])}var e=[];e.forEach(function(b){S[b]=a});var f=Array(a.length),g=[],m=0;a.forEach(function(a,b){R.hasOwnProperty(a)?f[b]=R[a]:(g.push(a),Q.hasOwnProperty(a)||(Q[a]=[]),Q[a].push(function(){f[b]=R[a];++m;m===g.length&&c(f)}))});0===g.length&&c(f)}
function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||T('type "'+e+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.ba)return;T("Cannot register type '"+e+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(a){a()}))}var Pa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Qa(a){4<a&&0===--V[a].V&&(V[a]=void 0,Pa.push(a))}function Ta(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Pa.length?Pa.pop():V.length;V[b]={V:1,value:a};return b}}function Ua(a){return this.fromWireType(E[a>>2])}function Va(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Wa(a,b){switch(b){case 2:return function(a){return this.fromWireType(oa[a>>2])};case 3:return function(a){return this.fromWireType(pa[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Xa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ka(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Ya(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Za(a,b){var c=d;if(void 0===c[a].S){var e=c[a];c[a]=function(){c[a].S.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].S+")!");return c[a].S[arguments.length].apply(this,arguments)};c[a].S=[];c[a].S[e.Z]=e}}
function $a(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].S&&void 0!==d[a].S[c])&&T("Cannot register public name '"+a+"' twice"),Za(a,a),d.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].S[c]=b):(d[a]=b,void 0!==c&&(d[a].ea=c))}function ab(a,b){for(var c=[],e=0;e<a;e++)c.push(D[(b>>2)+e]);return c}
function bb(a,b){a=P(a);if(void 0!==d["FUNCTION_TABLE_"+a])var c=d["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=d["dynCall_"+a];void 0===c&&(c=d["dynCall_"+a.replace(/f/g,"d")],void 0===c&&T("No dynCall invoker for signature: "+a));for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b)}"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var cb=void 0;function db(a){a=eb(a);var b=P(a);W(a);return b}function fb(a,b){function c(a){f[a]||R[a]||(S[a]?S[a].forEach(c):(e.push(a),f[a]=!0))}var e=[],f={};b.forEach(c);throw new cb(a+": "+e.map(db).join([", "]));}
function gb(a,b,c){switch(b){case 0:return c?function(a){return C[a]}:function(a){return B[a]};case 1:return c?function(a){return ma[a>>1]}:function(a){return na[a>>1]};case 2:return c?function(a){return D[a>>2]}:function(a){return E[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function hb(){return C.length}function ib(a){a=la(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}for(var jb=Array(256),X=0;256>X;++X)jb[X]=String.fromCharCode(X);
Ia=jb;Ma=d.BindingError=La("BindingError");Na=d.InternalError=La("InternalError");d.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};cb=d.UnboundTypeError=La("UnboundTypeError");
var lb=d.asm({},{g:u,s:function(){},b:function(a,b,c,e){u("Assertion failed: "+A(a)+", at: "+[b?A(b):"unknown filename",c,e?A(e):"unknown function"])},d:function(a){return kb(a)},c:function(a){"uncaught_exception"in M?M.X++:M.X=1;throw a;},j:function(a){d.___errno_location&&(D[d.___errno_location()>>2]=a);return a},r:function(a,b){N=b;try{return Ga.aa(),O(),O(),O(),O(),0}catch(c){return"undefined"!==typeof FS&&c instanceof FS.W||u(c),-c.Y}},i:function(a,b){N=b;try{var c=O(),e=O(),f=O();for(b=a=0;b<
f;b++){for(var g=D[e+8*b>>2],m=D[e+(8*b+4)>>2],l=0;l<m;l++){var v=B[g+l],k=Fa[c];0===v||10===v?((1===c?ea:y)(ja(k,0)),k.length=0):k.push(v)}a+=m}return a}catch(w){return"undefined"!==typeof FS&&w instanceof FS.W||u(w),-w.Y}},q:function(a,b){N=b;try{return Ga.aa(),0}catch(c){return"undefined"!==typeof FS&&c instanceof FS.W||u(c),-c.Y}},p:function(a,b,c,e,f){var g=Ha(c);b=P(b);U(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===
c)var e=C;else if(2===c)e=ma;else if(4===c)e=D;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>g])},T:null})},o:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(a){var b=V[a].value;Qa(a);return b},toWireType:function(a,b){return Ta(b)},argPackAdvance:8,readValueFromPointer:Ua,T:null})},n:function(a,b,c){c=Ha(c);b=P(b);U(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+
Va(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Wa(b,c),T:null})},m:function(a,b,c,e,f,g){var m=ab(b,c);a=P(a);f=bb(e,f);$a(a,function(){fb("Cannot call "+a+" due to unbound types",m)},b-1);Oa(m,function(c){var e=[c[0],null].concat(c.slice(1)),k=c=a,m=f,l=e.length;2>l&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var qa=null!==e[1]&&!1,Z=!1,h=1;h<e.length;++h)if(null!==e[h]&&void 0===e[h].T){Z=!0;break}var Ra="void"!==e[0].name,I=
"",K="";for(h=0;h<l-2;++h)I+=(0!==h?", ":"")+"arg"+h,K+=(0!==h?", ":"")+"arg"+h+"Wired";k="return function "+Ja(k)+"("+I+") {\nif (arguments.length !== "+(l-2)+") {\nthrowBindingError('function "+k+" called with ' + arguments.length + ' arguments, expected "+(l-2)+" args!');\n}\n";Z&&(k+="var destructors = [];\n");var Sa=Z?"destructors":"null";I="throwBindingError invoker fn runDestructors retType classParam".split(" ");m=[T,m,g,Ya,e[0],e[1]];qa&&(k+="var thisWired = classParam.toWireType("+Sa+", this);\n");
for(h=0;h<l-2;++h)k+="var arg"+h+"Wired = argType"+h+".toWireType("+Sa+", arg"+h+"); // "+e[h+2].name+"\n",I.push("argType"+h),m.push(e[h+2]);qa&&(K="thisWired"+(0<K.length?", ":"")+K);k+=(Ra?"var rv = ":"")+"invoker(fn"+(0<K.length?", ":"")+K+");\n";if(Z)k+="runDestructors(destructors);\n";else for(h=qa?1:2;h<e.length;++h)l=1===h?"thisWired":"arg"+(h-2)+"Wired",null!==e[h].T&&(k+=l+"_dtor("+l+"); // "+e[h].name+"\n",I.push(l+"_dtor"),m.push(e[h].T));Ra&&(k+="var ret = retType.fromWireType(rv);\nreturn ret;\n");
I.push(k+"}\n");e=Xa(I).apply(null,m);h=b-1;if(!d.hasOwnProperty(c))throw new Na("Replacing nonexistant public symbol");void 0!==d[c].S&&void 0!==h?d[c].S[h]=e:(d[c]=e,d[c].Z=h);return[]})},h:function(a,b,c,e,f){function g(a){return a}b=P(b);-1===f&&(f=4294967295);var m=Ha(c);if(0===e){var l=32-8*c;g=function(a){return a<<l>>>l}}var v=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+Va(c)+
'" to '+this.name);if(c<e||c>f)throw new TypeError('Passing a number "'+Va(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");return v?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:gb(b,m,0!==e),T:null})},f:function(a,b,c){function e(a){a>>=2;var b=E;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:e,argPackAdvance:8,
readValueFromPointer:e},{ba:!0})},l:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(a){var b=E[a>>2];if(c){var e=B[a+4+b],m=0;0!=e&&(m=e,B[a+4+b]=0);var l=a+4;for(e=0;e<=b;++e){var v=a+4+e;if(0==B[v]){l=A(l);if(void 0===k)var k=l;else k+=String.fromCharCode(0),k+=l;l=v+1}}0!=m&&(B[a+4+b]=m)}else{k=Array(b);for(e=0;e<b;++e)k[e]=String.fromCharCode(B[a+4+e]);k=k.join("")}W(a);return k},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var e="string"===
typeof b;e||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||T("Cannot pass non-string to std::string");var f=(c&&e?function(){for(var a=0,c=0;c<b.length;++c){var e=b.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|b.charCodeAt(++c)&1023);127>=e?++a:a=2047>=e?a+2:65535>=e?a+3:a+4}return a}:function(){return b.length})(),l=kb(4+f+1);E[l>>2]=f;if(c&&e)ka(b,l+4,f+1);else if(e)for(e=0;e<f;++e){var v=b.charCodeAt(e);255<v&&(W(l),T("String has UTF-16 code units that do not fit in 8 bits"));
B[l+4+e]=v}else for(e=0;e<f;++e)B[l+4+e]=b[e];null!==a&&a.push(W,l);return l},argPackAdvance:8,readValueFromPointer:Ua,T:function(a){W(a)}})},A:function(a,b,c){c=P(c);if(2===b){var e=function(){return na};var f=1}else 4===b&&(e=function(){return E},f=2);U(a,{name:c,fromWireType:function(a){for(var b=e(),c=E[a>>2],g=Array(c),k=a+4>>f,w=0;w<c;++w)g[w]=String.fromCharCode(b[k+w]);W(a);return g.join("")},toWireType:function(a,c){var g=e(),m=c.length,k=kb(4+m*b);E[k>>2]=m;for(var w=k+4>>f,Y=0;Y<m;++Y)g[w+
Y]=c.charCodeAt(Y);null!==a&&a.push(W,k);return k},argPackAdvance:8,readValueFromPointer:Ua,T:function(a){W(a)}})},z:function(a,b){b=P(b);U(a,{da:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},y:Qa,x:function(a){4<a&&(V[a].V+=1)},k:function(a,b){var c=R[a];void 0===c&&T("_emval_take_value has unknown type "+db(a));a=c.readValueFromPointer(b);return Ta(a)},e:function(){d.abort()},w:hb,v:function(a,b,c){B.set(B.subarray(b,b+c),a)},u:function(a){if(2147418112<a)return!1;
for(var b=Math.max(hb(),16777216);b<a;)536870912>=b?b=la(2*b):b=Math.min(la((3*b+2147483648)/4),2147418112);if(!ib(b))return!1;ra();return!0},t:function(){u("OOM")},a:17552},buffer);d.asm=lb;d.___errno_location=function(){return d.asm.B.apply(null,arguments)};
var eb=d.___getTypeName=function(){return d.asm.C.apply(null,arguments)},W=d._free=function(){return d.asm.D.apply(null,arguments)},kb=d._malloc=function(){return d.asm.E.apply(null,arguments)},Ea=d.globalCtors=function(){return d.asm.R.apply(null,arguments)};d.dynCall_ii=function(){return d.asm.F.apply(null,arguments)};d.dynCall_iii=function(){return d.asm.G.apply(null,arguments)};d.dynCall_iiii=function(){return d.asm.H.apply(null,arguments)};
d.dynCall_iiiii=function(){return d.asm.I.apply(null,arguments)};d.dynCall_jiji=function(){return d.asm.J.apply(null,arguments)};d.dynCall_v=function(){return d.asm.K.apply(null,arguments)};d.dynCall_vi=function(){return d.asm.L.apply(null,arguments)};d.dynCall_vii=function(){return d.asm.M.apply(null,arguments)};d.dynCall_viii=function(){return d.asm.N.apply(null,arguments)};d.dynCall_viiii=function(){return d.asm.O.apply(null,arguments)};d.dynCall_viiiii=function(){return d.asm.P.apply(null,arguments)};
d.dynCall_viiiiii=function(){return d.asm.Q.apply(null,arguments)};d.asm=lb;d.then=function(a){if(d.calledRun)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;J=function mb(){d.calledRun||nb();d.calledRun||(J=mb)};
function nb(){function a(){if(!d.calledRun&&(d.calledRun=!0,!ha)){wa||(wa=!0,G(ta));G(ua);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var a=d.postRun.shift();va.unshift(a)}G(va)}}if(!(0<H)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)xa();G(sa);0<H||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},
1);a()},1)):a())}}d.run=nb;function u(a){if(d.onAbort)d.onAbort(a);void 0!==a?(ea(a),y(a),a=JSON.stringify(a)):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=u;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();d.noExitRuntime=!0;nb();


  return camaro
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = camaro;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return camaro; });
    else if (typeof exports === 'object')
      exports["camaro"] = camaro;
    