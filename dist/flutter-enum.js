📦
306616 /agent/entries/flutter-enum.js
✄
var Cs=Object.defineProperty;var ks=(t,e)=>{for(var n in e)Cs(t,n,{get:e[n],enumerable:!0})};var Fe=[],Me=[],gn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(let t=0,e=gn.length;t<e;++t)Fe[t]=gn[t],Me[gn.charCodeAt(t)]=t;Me[45]=62;Me[95]=63;function Is(t){let e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");let n=t.indexOf("=");n===-1&&(n=e);let r=n===e?0:4-n%4;return[n,r]}function Ns(t,e,n){return(e+n)*3/4-n}function oo(t){let e=Is(t),n=e[0],r=e[1],o=new Uint8Array(Ns(t,n,r)),i=0,s=r>0?n-4:n,l;for(l=0;l<s;l+=4){let a=Me[t.charCodeAt(l)]<<18|Me[t.charCodeAt(l+1)]<<12|Me[t.charCodeAt(l+2)]<<6|Me[t.charCodeAt(l+3)];o[i++]=a>>16&255,o[i++]=a>>8&255,o[i++]=a&255}if(r===2){let a=Me[t.charCodeAt(l)]<<2|Me[t.charCodeAt(l+1)]>>4;o[i++]=a&255}if(r===1){let a=Me[t.charCodeAt(l)]<<10|Me[t.charCodeAt(l+1)]<<4|Me[t.charCodeAt(l+2)]>>2;o[i++]=a>>8&255,o[i++]=a&255}return o}function Ts(t){return Fe[t>>18&63]+Fe[t>>12&63]+Fe[t>>6&63]+Fe[t&63]}function xs(t,e,n){let r=[];for(let o=e;o<n;o+=3){let i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255);r.push(Ts(i))}return r.join("")}function yn(t){let e=t.length,n=e%3,r=[],o=16383;for(let i=0,s=e-n;i<s;i+=o)r.push(xs(t,i,i+o>s?s:i+o));if(n===1){let i=t[e-1];r.push(Fe[i>>2]+Fe[i<<4&63]+"==")}else if(n===2){let i=(t[e-2]<<8)+t[e-1];r.push(Fe[i>>10]+Fe[i>>4&63]+Fe[i<<2&63]+"=")}return r.join("")}function bt(t,e,n,r,o){let i,s,l=o*8-r-1,a=(1<<l)-1,c=a>>1,d=-7,p=n?o-1:0,h=n?-1:1,u=t[e+p];for(p+=h,i=u&(1<<-d)-1,u>>=-d,d+=l;d>0;)i=i*256+t[e+p],p+=h,d-=8;for(s=i&(1<<-d)-1,i>>=-d,d+=r;d>0;)s=s*256+t[e+p],p+=h,d-=8;if(i===0)i=1-c;else{if(i===a)return s?NaN:(u?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-c}return(u?-1:1)*s*Math.pow(2,i-r)}function bn(t,e,n,r,o,i){let s,l,a,c=i*8-o-1,d=(1<<c)-1,p=d>>1,h=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=r?0:i-1,g=r?1:-1,_=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-s))<1&&(s--,a*=2),s+p>=1?e+=h/a:e+=h*Math.pow(2,1-p),e*a>=2&&(s++,a/=2),s+p>=d?(l=0,s=d):s+p>=1?(l=(e*a-1)*Math.pow(2,o),s=s+p):(l=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;)t[n+u]=l&255,u+=g,l/=256,o-=8;for(s=s<<o|l,c+=o;c>0;)t[n+u]=s&255,u+=g,s/=256,c-=8;t[n+u-g]|=_*128}var As={INSPECT_MAX_BYTES:50},vn=2147483647;b.TYPED_ARRAY_SUPPORT=!0;Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(b.isBuffer(this))return this.byteOffset}});function Ve(t){if(t>vn)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,b.prototype),e}function b(t,e,n){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Cn(t)}return lo(t,e,n)}b.poolSize=8192;function lo(t,e,n){if(typeof t=="string")return js(t,e);if(ArrayBuffer.isView(t))return Ps(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t instanceof ArrayBuffer||t&&t.buffer instanceof ArrayBuffer||t instanceof SharedArrayBuffer||t&&t.buffer instanceof SharedArrayBuffer)return En(t,e,n);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let r=t.valueOf&&t.valueOf();if(r!=null&&r!==t)return b.from(r,e,n);let o=Rs(t);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return b.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}b.from=function(t,e,n){return lo(t,e,n)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function co(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Os(t,e,n){return co(t),t<=0?Ve(t):e!==void 0?typeof n=="string"?Ve(t).fill(e,n):Ve(t).fill(e):Ve(t)}b.alloc=function(t,e,n){return Os(t,e,n)};function Cn(t){return co(t),Ve(t<0?0:kn(t)|0)}b.allocUnsafe=function(t){return Cn(t)};b.allocUnsafeSlow=function(t){return Cn(t)};function js(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let n=uo(t,e)|0,r=Ve(n),o=r.write(t,e);return o!==n&&(r=r.slice(0,o)),r}function Sn(t){let e=t.length<0?0:kn(t.length)|0,n=Ve(e);for(let r=0;r<e;r+=1)n[r]=t[r]&255;return n}function Ps(t){if(t instanceof Uint8Array){let e=new Uint8Array(t);return En(e.buffer,e.byteOffset,e.byteLength)}return Sn(t)}function En(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return e===void 0&&n===void 0?r=new Uint8Array(t):n===void 0?r=new Uint8Array(t,e):r=new Uint8Array(t,e,n),Object.setPrototypeOf(r,b.prototype),r}function Rs(t){if(b.isBuffer(t)){let e=kn(t.length)|0,n=Ve(e);return n.length===0||t.copy(n,0,0,e),n}if(t.length!==void 0)return typeof t.length!="number"||Number.isNaN(t.length)?Ve(0):Sn(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Sn(t.data)}function kn(t){if(t>=vn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+vn.toString(16)+" bytes");return t|0}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,n){if(e instanceof Uint8Array&&(e=b.from(e,e.offset,e.byteLength)),n instanceof Uint8Array&&(n=b.from(n,n.offset,n.byteLength)),!b.isBuffer(e)||!b.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;let r=e.length,o=n.length;for(let i=0,s=Math.min(r,o);i<s;++i)if(e[i]!==n[i]){r=e[i],o=n[i];break}return r<o?-1:o<r?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let r;if(n===void 0)for(n=0,r=0;r<e.length;++r)n+=e[r].length;let o=b.allocUnsafe(n),i=0;for(r=0;r<e.length;++r){let s=e[r];if(s instanceof Uint8Array)i+s.length>o.length?(b.isBuffer(s)||(s=b.from(s.buffer,s.byteOffset,s.byteLength)),s.copy(o,i)):Uint8Array.prototype.set.call(o,s,i);else if(b.isBuffer(s))s.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=s.length}return o};function uo(t,e){if(b.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return wn(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return vo(t).length;default:if(o)return r?-1:wn(t).length;e=(""+e).toLowerCase(),o=!0}}b.byteLength=uo;function Fs(t,e,n){let r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Zs(this,e,n);case"utf8":case"utf-8":return fo(this,e,n);case"ascii":return $s(this,e,n);case"latin1":case"binary":return Hs(this,e,n);case"base64":return Js(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ws(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}b.prototype._isBuffer=!0;function Qe(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<e;n+=2)Qe(this,n,n+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<e;n+=4)Qe(this,n,n+3),Qe(this,n+1,n+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<e;n+=8)Qe(this,n,n+7),Qe(this,n+1,n+6),Qe(this,n+2,n+5),Qe(this,n+3,n+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?fo(this,0,e):Fs.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",n=As.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};b.prototype[Symbol.for("nodejs.util.inspect.custom")]=b.prototype.inspect;b.prototype.compare=function(e,n,r,o,i){if(e instanceof Uint8Array&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),n<0||r>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&n>=r)return 0;if(o>=i)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,o>>>=0,i>>>=0,this===e)return 0;let s=i-o,l=r-n,a=Math.min(s,l),c=this.slice(o,i),d=e.slice(n,r);for(let p=0;p<a;++p)if(c[p]!==d[p]){s=c[p],l=d[p];break}return s<l?-1:l<s?1:0};function po(t,e,n,r,o){if(t.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Number.isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0)if(o)n=0;else return-1;if(typeof e=="string"&&(e=b.from(e,r)),b.isBuffer(e))return e.length===0?-1:io(t,e,n,r,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):io(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function io(t,e,n,r,o){let i=1,s=t.length,l=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,s/=2,l/=2,n/=2}function a(d,p){return i===1?d[p]:d.readUInt16BE(p*i)}let c;if(o){let d=-1;for(c=n;c<s;c++)if(a(t,c)===a(e,d===-1?0:c-d)){if(d===-1&&(d=c),c-d+1===l)return d*i}else d!==-1&&(c-=c-d),d=-1}else for(n+l>s&&(n=s-l),c=n;c>=0;c--){let d=!0;for(let p=0;p<l;p++)if(a(t,c+p)!==a(e,p)){d=!1;break}if(d)return c}return-1}b.prototype.includes=function(e,n,r){return this.indexOf(e,n,r)!==-1};b.prototype.indexOf=function(e,n,r){return po(this,e,n,r,!0)};b.prototype.lastIndexOf=function(e,n,r){return po(this,e,n,r,!1)};function zs(t,e,n,r){n=Number(n)||0;let o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;let i=e.length;r>i/2&&(r=i/2);let s;for(s=0;s<r;++s){let l=parseInt(e.substr(s*2,2),16);if(Number.isNaN(l))return s;t[n+s]=l}return s}function Ds(t,e,n,r){return Bt(wn(e,t.length-n),t,n,r)}function Us(t,e,n,r){return Bt(Ys(e),t,n,r)}function Bs(t,e,n,r){return Bt(vo(e),t,n,r)}function Vs(t,e,n,r){return Bt(Xs(e,t.length-n),t,n,r)}b.prototype.write=function(e,n,r,o){if(n===void 0)o="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")o=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let i=this.length-n;if((r===void 0||r>i)&&(r=i),e.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let s=!1;for(;;)switch(o){case"hex":return zs(this,e,n,r);case"utf8":case"utf-8":return Ds(this,e,n,r);case"ascii":case"latin1":case"binary":return Us(this,e,n,r);case"base64":return Bs(this,e,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Vs(this,e,n,r);default:if(s)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),s=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Js(t,e,n){return e===0&&n===t.length?yn(t):yn(t.slice(e,n))}function fo(t,e,n){n=Math.min(t.length,n);let r=[],o=e;for(;o<n;){let i=t[o],s=null,l=i>239?4:i>223?3:i>191?2:1;if(o+l<=n){let a,c,d,p;switch(l){case 1:i<128&&(s=i);break;case 2:a=t[o+1],(a&192)===128&&(p=(i&31)<<6|a&63,p>127&&(s=p));break;case 3:a=t[o+1],c=t[o+2],(a&192)===128&&(c&192)===128&&(p=(i&15)<<12|(a&63)<<6|c&63,p>2047&&(p<55296||p>57343)&&(s=p));break;case 4:a=t[o+1],c=t[o+2],d=t[o+3],(a&192)===128&&(c&192)===128&&(d&192)===128&&(p=(i&15)<<18|(a&63)<<12|(c&63)<<6|d&63,p>65535&&p<1114112&&(s=p))}}s===null?(s=65533,l=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),o+=l}return Gs(r)}var so=4096;function Gs(t){let e=t.length;if(e<=so)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=so));return n}function $s(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]&127);return r}function Hs(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function Zs(t,e,n){let r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let o="";for(let i=e;i<n;++i)o+=ea[t[i]];return o}function Ws(t,e,n){let r=t.slice(e,n),o="";for(let i=0;i<r.length-1;i+=2)o+=String.fromCharCode(r[i]+r[i+1]*256);return o}b.prototype.slice=function(e,n){let r=this.length;e=~~e,n=n===void 0?r:~~n,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<e&&(n=e);let o=this.subarray(e,n);return Object.setPrototypeOf(o,b.prototype),o};function me(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||me(e,n,this.length);let o=this[e],i=1,s=0;for(;++s<n&&(i*=256);)o+=this[e+s]*i;return o};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||me(e,n,this.length);let o=this[e+--n],i=1;for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o};b.prototype.readUint8=b.prototype.readUInt8=function(e,n){return e=e>>>0,n||me(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||me(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||me(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||me(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||me(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=function(e){e=e>>>0,lt(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&vt(e,this.length-8);let o=n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*2**16+r*2**24;return BigInt(o)+(BigInt(i)<<BigInt(32))};b.prototype.readBigUInt64BE=function(e){e=e>>>0,lt(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&vt(e,this.length-8);let o=n*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r;return(BigInt(o)<<BigInt(32))+BigInt(i)};b.prototype.readIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||me(e,n,this.length);let o=this[e],i=1,s=0;for(;++s<n&&(i*=256);)o+=this[e+s]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*n)),o};b.prototype.readIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||me(e,n,this.length);let o=n,i=1,s=this[e+--o];for(;o>0&&(i*=256);)s+=this[e+--o]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*n)),s};b.prototype.readInt8=function(e,n){return e=e>>>0,n||me(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,n){e=e>>>0,n||me(e,2,this.length);let r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};b.prototype.readInt16BE=function(e,n){e=e>>>0,n||me(e,2,this.length);let r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};b.prototype.readInt32LE=function(e,n){return e=e>>>0,n||me(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,n){return e=e>>>0,n||me(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=function(e){e=e>>>0,lt(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&vt(e,this.length-8);let o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(r<<24);return(BigInt(o)<<BigInt(32))+BigInt(n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)};b.prototype.readBigInt64BE=function(e){e=e>>>0,lt(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&vt(e,this.length-8);let o=(n<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r)};b.prototype.readFloatLE=function(e,n){return e=e>>>0,n||me(e,4,this.length),bt(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,n){return e=e>>>0,n||me(e,4,this.length),bt(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||me(e,8,this.length),bt(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||me(e,8,this.length),bt(this,e,!1,52,8)};function Se(t,e,n,r,o,i){if(!b.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;Se(this,e,n,r,l,0)}let i=1,s=0;for(this[n]=e&255;++s<r&&(i*=256);)this[n+s]=e/i&255;return n+r};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;Se(this,e,n,r,l,0)}let i=r-1,s=1;for(this[n+i]=e&255;--i>=0&&(s*=256);)this[n+i]=e/s&255;return n+r};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,1,255,0),this[n]=e&255,n+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function ho(t,e,n,r,o){bo(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,n}function mo(t,e,n,r,o){bo(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n+7]=i,i=i>>8,t[n+6]=i,i=i>>8,t[n+5]=i,i=i>>8,t[n+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s=s>>8,t[n+2]=s,s=s>>8,t[n+1]=s,s=s>>8,t[n]=s,n+8}b.prototype.writeBigUInt64LE=function(e,n=0){return ho(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};b.prototype.writeBigUInt64BE=function(e,n=0){return mo(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};b.prototype.writeIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);Se(this,e,n,r,a-1,-a)}let i=0,s=1,l=0;for(this[n]=e&255;++i<r&&(s*=256);)e<0&&l===0&&this[n+i-1]!==0&&(l=1),this[n+i]=(e/s>>0)-l&255;return n+r};b.prototype.writeIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);Se(this,e,n,r,a-1,-a)}let i=r-1,s=1,l=0;for(this[n+i]=e&255;--i>=0&&(s*=256);)e<0&&l===0&&this[n+i+1]!==0&&(l=1),this[n+i]=(e/s>>0)-l&255;return n+r};b.prototype.writeInt8=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};b.prototype.writeInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};b.prototype.writeInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};b.prototype.writeInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};b.prototype.writeInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Se(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};b.prototype.writeBigInt64LE=function(e,n=0){return ho(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};b.prototype.writeBigInt64BE=function(e,n=0){return mo(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};function _o(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function go(t,e,n,r,o){return e=+e,n=n>>>0,o||_o(t,e,n,4,34028234663852886e22,-34028234663852886e22),bn(t,e,n,r,23,4),n+4}b.prototype.writeFloatLE=function(e,n,r){return go(this,e,n,!0,r)};b.prototype.writeFloatBE=function(e,n,r){return go(this,e,n,!1,r)};function yo(t,e,n,r,o){return e=+e,n=n>>>0,o||_o(t,e,n,8,17976931348623157e292,-17976931348623157e292),bn(t,e,n,r,52,8),n+8}b.prototype.writeDoubleLE=function(e,n,r){return yo(this,e,n,!0,r)};b.prototype.writeDoubleBE=function(e,n,r){return yo(this,e,n,!1,r)};b.prototype.copy=function(e,n,r,o){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),n>=e.length&&(n=e.length),n||(n=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-n<o-r&&(o=e.length-n+r);let i=o-r;return this===e?this.copyWithin(n,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),n),i};b.prototype.fill=function(e,n,r,o){if(typeof e=="string"){if(typeof n=="string"?(o=n,n=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!b.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){let s=e.charCodeAt(0);(o==="utf8"&&s<128||o==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);let i;if(typeof e=="number")for(i=n;i<r;++i)this[i]=e;else{let s=b.isBuffer(e)?e:b.from(e,o),l=s.length;if(l===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-n;++i)this[i+n]=s[i%l]}return this};var at={};function In(t,e,n){at[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}In("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);In("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError);In("ERR_OUT_OF_RANGE",function(t,e,n){let r=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=ao(String(n)):typeof n=="bigint"&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=ao(o)),o+="n"),r+=` It must be ${e}. Received ${o}`,r},RangeError);function ao(t){let e="",n=t.length,r=t[0]==="-"?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function qs(t,e,n){lt(e,"offset"),(t[e]===void 0||t[e+n]===void 0)&&vt(e,t.length-(n+1))}function bo(t,e,n,r,o,i){if(t>n||t<e){let s=typeof e=="bigint"?"n":"",l;throw i>3?e===0||e===BigInt(0)?l=`>= 0${s} and < 2${s} ** ${(i+1)*8}${s}`:l=`>= -(2${s} ** ${(i+1)*8-1}${s}) and < 2 ** ${(i+1)*8-1}${s}`:l=`>= ${e}${s} and <= ${n}${s}`,new at.ERR_OUT_OF_RANGE("value",l,t)}qs(r,o,i)}function lt(t,e){if(typeof t!="number")throw new at.ERR_INVALID_ARG_TYPE(e,"number",t)}function vt(t,e,n){throw Math.floor(t)!==t?(lt(t,n),new at.ERR_OUT_OF_RANGE(n||"offset","an integer",t)):e<0?new at.ERR_BUFFER_OUT_OF_BOUNDS:new at.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}var Ks=/[^+/0-9A-Za-z-_]/g;function Qs(t){if(t=t.split("=")[0],t=t.trim().replace(Ks,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function wn(t,e){e=e||1/0;let n,r=t.length,o=null,i=[];for(let s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return i}function Ys(t){let e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n)&255);return e}function Xs(t,e){let n,r,o,i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function vo(t){return oo(Qs(t))}function Bt(t,e,n,r){let o;for(o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}var ea=function(){let t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){let r=n*16;for(let o=0;o<16;++o)e[r+o]=t[n]+t[o]}return e}();var an={};ks(an,{ArtMethod:()=>Yt,ArtStackVisitor:()=>ir,DVM_JNI_ENV_OFFSET_SELF:()=>Vo,HandleVector:()=>Nt,VariableSizedHandleScope:()=>Tt,backtrace:()=>vr,deoptimizeBootImage:()=>kr,deoptimizeEverything:()=>Cr,deoptimizeMethod:()=>wr,ensureClassInitialized:()=>wc,getAndroidApiLevel:()=>fe,getAndroidVersion:()=>xt,getApi:()=>ne,getArtApexVersion:()=>fr,getArtClassSpec:()=>mr,getArtFieldSpec:()=>on,getArtMethodSpec:()=>Ie,getArtThreadFromEnv:()=>sn,getArtThreadSpec:()=>ut,makeArtClassLoaderVisitor:()=>br,makeArtClassVisitor:()=>yr,makeMethodMangler:()=>_d,makeObjectVisitorPredicate:()=>Nr,revertGlobalPatches:()=>Sr,translateMethod:()=>gd,withAllArtThreadsSuspended:()=>gr,withRunnableArtThread:()=>Ae});var{pageSize:Nn,pointerSize:ta}=Process,Tn=class{constructor(e){this.sliceSize=e,this.slicesPerPage=Nn/e,this.pages=[],this.free=[]}allocateSlice(e,n){let r=e.near===void 0,o=n===1;if(r&&o){let i=this.free.pop();if(i!==void 0)return i}else if(n<Nn){let{free:i}=this,s=i.length,l=o?null:ptr(n-1);for(let a=0;a!==s;a++){let c=i[a],d=r||this._isSliceNear(c,e),p=o||c.and(l).isNull();if(d&&p)return i.splice(a,1)[0]}}return this._allocatePage(e)}_allocatePage(e){let n=Memory.alloc(Nn,e),{sliceSize:r,slicesPerPage:o}=this;for(let i=1;i!==o;i++){let s=n.add(i*r);this.free.push(s)}return this.pages.push(n),n}_isSliceNear(e,n){let r=e.add(this.sliceSize),{near:o,maxDistance:i}=n,s=So(o.sub(e)),l=So(o.sub(r));return s.compare(i)<=0&&l.compare(i)<=0}freeSlice(e){this.free.push(e)}};function So(t){let e=ta===4?31:63,n=ptr(1).shl(e).not();return t.and(n)}function xn(t){return new Tn(t)}function be(t,e){if(e!==0)throw new Error(t+" failed: "+e)}var Vt={v1_0:805371904,v1_2:805372416},Jt={canTagObjects:1},{pointerSize:na}=Process,ra={exceptions:"propagate"};function Je(t,e){this.handle=t,this.vm=e,this.vtable=t.readPointer()}Je.prototype.deallocate=St(47,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});Je.prototype.getLoadedClasses=St(78,"int32",["pointer","pointer","pointer"],function(t,e,n){let r=t(this.handle,e,n);be("EnvJvmti::getLoadedClasses",r)});Je.prototype.iterateOverInstancesOfClass=St(112,"int32",["pointer","pointer","int","pointer","pointer"],function(t,e,n,r,o){let i=t(this.handle,e,n,r,o);be("EnvJvmti::iterateOverInstancesOfClass",i)});Je.prototype.getObjectsWithTags=St(114,"int32",["pointer","int","pointer","pointer","pointer","pointer"],function(t,e,n,r,o,i){let s=t(this.handle,e,n,r,o,i);be("EnvJvmti::getObjectsWithTags",s)});Je.prototype.addCapabilities=St(142,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});function St(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(this.vtable.add((t-1)*na).readPointer(),e,n,ra));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}function Ge(t,e,{limit:n}){let r=t,o=null;for(let i=0;i!==n;i++){let s=Instruction.parse(r),l=e(s,o);if(l!==null)return l;r=s.next,o=s}return null}function ye(t){let e=null,n=!1;return function(...r){return n||(e=t(...r),n=!0),e}}function E(t,e){this.handle=t,this.vm=e}var Gt=Process.pointerSize,qe=2,oa=28,ia=34,sa=37,aa=40,la=43,ca=46,da=49,ua=52,pa=55,fa=58,ha=61,ma=64,_a=67,ga=70,ya=73,ba=76,va=79,Sa=82,Ea=85,wa=88,Ca=91,ka=114,Ia=117,Na=120,Ta=123,xa=126,La=129,Ma=132,Aa=135,Oa=138,ja=141,Pa=95,Ra=96,Fa=97,za=98,Da=99,Ua=100,Ba=101,Va=102,Ja=103,Ga=104,$a=105,Ha=106,Za=107,Wa=108,qa=109,Ka=110,Qa=111,Ya=112,Xa=145,el=146,tl=147,nl=148,rl=149,ol=150,il=151,sl=152,al=153,ll=154,cl=155,dl=156,ul=157,pl=158,fl=159,hl=160,ml=161,_l=162,gl={pointer:ia,uint8:sa,int8:aa,uint16:la,int16:ca,int32:da,int64:ua,float:pa,double:fa,void:ha},yl={pointer:ma,uint8:_a,int8:ga,uint16:ya,int16:ba,int32:va,int64:Sa,float:Ea,double:wa,void:Ca},bl={pointer:ka,uint8:Ia,int8:Na,uint16:Ta,int16:xa,int32:La,int64:Ma,float:Aa,double:Oa,void:ja},vl={pointer:Pa,uint8:Ra,int8:Fa,uint16:za,int16:Da,int32:Ua,int64:Ba,float:Va,double:Ja},Sl={pointer:Ga,uint8:$a,int8:Ha,uint16:Za,int16:Wa,int32:qa,int64:Ka,float:Qa,double:Ya},El={pointer:Xa,uint8:el,int8:tl,uint16:nl,int16:rl,int32:ol,int64:il,float:sl,double:al},wl={pointer:ll,uint8:cl,int8:dl,uint16:ul,int16:pl,int32:fl,int64:hl,float:ml,double:_l},wo={exceptions:"propagate"},Ln=null,Bn=[];E.dispose=function(t){Bn.forEach(t.deleteGlobalRef,t),Bn=[]};function Ye(t){return Bn.push(t),t}function $t(t){return Ln===null&&(Ln=t.handle.readPointer()),Ln}function F(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction($t(this).add(t*Gt).readPointer(),e,n,wo));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}E.prototype.getVersion=F(4,"int32",["pointer"],function(t){return t(this.handle)});E.prototype.findClass=F(6,"pointer",["pointer","pointer"],function(t,e){let n=t(this.handle,Memory.allocUtf8String(e));return this.throwIfExceptionPending(),n});E.prototype.throwIfExceptionPending=function(){let t=this.exceptionOccurred();if(t.isNull())return;this.exceptionClear();let e=this.newGlobalRef(t);this.deleteLocalRef(t);let n=this.vaMethod("pointer",[])(this.handle,e,this.javaLangObject().toString),r=this.stringFromJni(n);this.deleteLocalRef(n);let o=new Error(r);throw o.$h=e,Script.bindWeak(o,Cl(this.vm,e)),o};function Cl(t,e){return function(){t.perform(n=>{n.deleteGlobalRef(e)})}}E.prototype.fromReflectedMethod=F(7,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.fromReflectedField=F(8,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.toReflectedMethod=F(9,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.getSuperclass=F(10,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.isAssignableFrom=F(11,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});E.prototype.toReflectedField=F(12,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.throw=F(13,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.exceptionOccurred=F(15,"pointer",["pointer"],function(t){return t(this.handle)});E.prototype.exceptionDescribe=F(16,"void",["pointer"],function(t){t(this.handle)});E.prototype.exceptionClear=F(17,"void",["pointer"],function(t){t(this.handle)});E.prototype.pushLocalFrame=F(19,"int32",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.popLocalFrame=F(20,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.newGlobalRef=F(21,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.deleteGlobalRef=F(22,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});E.prototype.deleteLocalRef=F(23,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});E.prototype.isSameObject=F(24,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});E.prototype.newLocalRef=F(25,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.allocObject=F(27,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getObjectClass=F(31,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.isInstanceOf=F(32,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});E.prototype.getMethodId=F(33,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getFieldId=F(94,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getIntField=F(100,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});E.prototype.getStaticMethodId=F(113,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getStaticFieldId=F(144,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getStaticIntField=F(150,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});E.prototype.getStringLength=F(164,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getStringChars=F(165,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.releaseStringChars=F(166,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});E.prototype.newStringUtf=F(167,"pointer",["pointer","pointer"],function(t,e){let n=Memory.allocUtf8String(e);return t(this.handle,n)});E.prototype.getStringUtfChars=F(169,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.releaseStringUtfChars=F(170,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});E.prototype.getArrayLength=F(171,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.newObjectArray=F(172,"pointer",["pointer","int32","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.getObjectArrayElement=F(173,"pointer",["pointer","pointer","int32"],function(t,e,n){return t(this.handle,e,n)});E.prototype.setObjectArrayElement=F(174,"void",["pointer","pointer","int32","pointer"],function(t,e,n,r){t(this.handle,e,n,r)});E.prototype.newBooleanArray=F(175,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newByteArray=F(176,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newCharArray=F(177,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newShortArray=F(178,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newIntArray=F(179,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newLongArray=F(180,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newFloatArray=F(181,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newDoubleArray=F(182,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.getBooleanArrayElements=F(183,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getByteArrayElements=F(184,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getCharArrayElements=F(185,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getShortArrayElements=F(186,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getIntArrayElements=F(187,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getLongArrayElements=F(188,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getFloatArrayElements=F(189,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getDoubleArrayElements=F(190,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.releaseBooleanArrayElements=F(191,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.releaseByteArrayElements=F(192,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.releaseCharArrayElements=F(193,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.releaseShortArrayElements=F(194,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.releaseIntArrayElements=F(195,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.releaseLongArrayElements=F(196,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.releaseFloatArrayElements=F(197,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.releaseDoubleArrayElements=F(198,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,qe)});E.prototype.getByteArrayRegion=F(200,"void",["pointer","pointer","int","int","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setBooleanArrayRegion=F(207,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setByteArrayRegion=F(208,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setCharArrayRegion=F(209,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setShortArrayRegion=F(210,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setIntArrayRegion=F(211,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setLongArrayRegion=F(212,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setFloatArrayRegion=F(213,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setDoubleArrayRegion=F(214,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.registerNatives=F(215,"int32",["pointer","pointer","pointer","int32"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.monitorEnter=F(217,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.monitorExit=F(218,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getDirectBufferAddress=F(230,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getObjectRefType=F(232,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});var Eo=new Map;function Ht(t,e,n,r){return Jn(this,"p",Il,t,e,n,r)}function Vn(t,e,n,r){return Jn(this,"v",Nl,t,e,n,r)}function kl(t,e,n,r){return Jn(this,"n",Tl,t,e,n,r)}function Jn(t,e,n,r,o,i,s){if(s!==void 0)return n(t,r,o,i,s);let l=[r,e,o].concat(i).join("|"),a=Eo.get(l);return a===void 0&&(a=n(t,r,o,i,wo),Eo.set(l,a)),a}function Il(t,e,n,r,o){return new NativeFunction($t(t).add(e*Gt).readPointer(),n,["pointer","pointer","pointer"].concat(r),o)}function Nl(t,e,n,r,o){return new NativeFunction($t(t).add(e*Gt).readPointer(),n,["pointer","pointer","pointer","..."].concat(r),o)}function Tl(t,e,n,r,o){return new NativeFunction($t(t).add(e*Gt).readPointer(),n,["pointer","pointer","pointer","pointer","..."].concat(r),o)}E.prototype.constructor=function(t,e){return Vn.call(this,oa,"pointer",t,e)};E.prototype.vaMethod=function(t,e,n){let r=gl[t];if(r===void 0)throw new Error("Unsupported type: "+t);return Vn.call(this,r,t,e,n)};E.prototype.nonvirtualVaMethod=function(t,e,n){let r=yl[t];if(r===void 0)throw new Error("Unsupported type: "+t);return kl.call(this,r,t,e,n)};E.prototype.staticVaMethod=function(t,e,n){let r=bl[t];if(r===void 0)throw new Error("Unsupported type: "+t);return Vn.call(this,r,t,e,n)};E.prototype.getField=function(t){let e=vl[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Ht.call(this,e,t,[])};E.prototype.getStaticField=function(t){let e=El[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Ht.call(this,e,t,[])};E.prototype.setField=function(t){let e=Sl[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Ht.call(this,e,"void",[t])};E.prototype.setStaticField=function(t){let e=wl[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Ht.call(this,e,"void",[t])};var Mn=null;E.prototype.javaLangClass=function(){if(Mn===null){let t=this.findClass("java/lang/Class");try{let e=this.getMethodId.bind(this,t);Mn={handle:Ye(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getSimpleName:e("getSimpleName","()Ljava/lang/String;"),getGenericSuperclass:e("getGenericSuperclass","()Ljava/lang/reflect/Type;"),getDeclaredConstructors:e("getDeclaredConstructors","()[Ljava/lang/reflect/Constructor;"),getDeclaredMethods:e("getDeclaredMethods","()[Ljava/lang/reflect/Method;"),getDeclaredFields:e("getDeclaredFields","()[Ljava/lang/reflect/Field;"),isArray:e("isArray","()Z"),isPrimitive:e("isPrimitive","()Z"),isInterface:e("isInterface","()Z"),getComponentType:e("getComponentType","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return Mn};var An=null;E.prototype.javaLangObject=function(){if(An===null){let t=this.findClass("java/lang/Object");try{let e=this.getMethodId.bind(this,t);An={handle:Ye(this.newGlobalRef(t)),toString:e("toString","()Ljava/lang/String;"),getClass:e("getClass","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return An};var On=null;E.prototype.javaLangReflectConstructor=function(){if(On===null){let t=this.findClass("java/lang/reflect/Constructor");try{On={getGenericParameterTypes:this.getMethodId(t,"getGenericParameterTypes","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return On};var jn=null;E.prototype.javaLangReflectMethod=function(){if(jn===null){let t=this.findClass("java/lang/reflect/Method");try{let e=this.getMethodId.bind(this,t);jn={getName:e("getName","()Ljava/lang/String;"),getGenericParameterTypes:e("getGenericParameterTypes","()[Ljava/lang/reflect/Type;"),getParameterTypes:e("getParameterTypes","()[Ljava/lang/Class;"),getGenericReturnType:e("getGenericReturnType","()Ljava/lang/reflect/Type;"),getGenericExceptionTypes:e("getGenericExceptionTypes","()[Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),isVarArgs:e("isVarArgs","()Z")}}finally{this.deleteLocalRef(t)}}return jn};var Pn=null;E.prototype.javaLangReflectField=function(){if(Pn===null){let t=this.findClass("java/lang/reflect/Field");try{let e=this.getMethodId.bind(this,t);Pn={getName:e("getName","()Ljava/lang/String;"),getType:e("getType","()Ljava/lang/Class;"),getGenericType:e("getGenericType","()Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),toString:e("toString","()Ljava/lang/String;")}}finally{this.deleteLocalRef(t)}}return Pn};var Rn=null;E.prototype.javaLangReflectTypeVariable=function(){if(Rn===null){let t=this.findClass("java/lang/reflect/TypeVariable");try{let e=this.getMethodId.bind(this,t);Rn={handle:Ye(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getBounds:e("getBounds","()[Ljava/lang/reflect/Type;"),getGenericDeclaration:e("getGenericDeclaration","()Ljava/lang/reflect/GenericDeclaration;")}}finally{this.deleteLocalRef(t)}}return Rn};var Fn=null;E.prototype.javaLangReflectWildcardType=function(){if(Fn===null){let t=this.findClass("java/lang/reflect/WildcardType");try{let e=this.getMethodId.bind(this,t);Fn={handle:Ye(this.newGlobalRef(t)),getLowerBounds:e("getLowerBounds","()[Ljava/lang/reflect/Type;"),getUpperBounds:e("getUpperBounds","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Fn};var zn=null;E.prototype.javaLangReflectGenericArrayType=function(){if(zn===null){let t=this.findClass("java/lang/reflect/GenericArrayType");try{zn={handle:Ye(this.newGlobalRef(t)),getGenericComponentType:this.getMethodId(t,"getGenericComponentType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return zn};var Dn=null;E.prototype.javaLangReflectParameterizedType=function(){if(Dn===null){let t=this.findClass("java/lang/reflect/ParameterizedType");try{let e=this.getMethodId.bind(this,t);Dn={handle:Ye(this.newGlobalRef(t)),getActualTypeArguments:e("getActualTypeArguments","()[Ljava/lang/reflect/Type;"),getRawType:e("getRawType","()Ljava/lang/reflect/Type;"),getOwnerType:e("getOwnerType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Dn};var Un=null;E.prototype.javaLangString=function(){if(Un===null){let t=this.findClass("java/lang/String");try{Un={handle:Ye(this.newGlobalRef(t))}}finally{this.deleteLocalRef(t)}}return Un};E.prototype.getClassName=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangClass().getName);try{return this.stringFromJni(e)}finally{this.deleteLocalRef(e)}};E.prototype.getObjectClassName=function(t){let e=this.getObjectClass(t);try{return this.getClassName(e)}finally{this.deleteLocalRef(e)}};E.prototype.getActualTypeArgument=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangReflectParameterizedType().getActualTypeArguments);if(this.throwIfExceptionPending(),!e.isNull())try{return this.getTypeNameFromFirstTypeElement(e)}finally{this.deleteLocalRef(e)}};E.prototype.getTypeNameFromFirstTypeElement=function(t){if(this.getArrayLength(t)>0){let n=this.getObjectArrayElement(t,0);try{return this.getTypeName(n)}finally{this.deleteLocalRef(n)}}else return"java.lang.Object"};E.prototype.getTypeName=function(t,e){let n=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle))return this.getArrayTypeName(t);if(this.isInstanceOf(t,this.javaLangReflectParameterizedType().handle)){let r=n(this.handle,t,this.javaLangReflectParameterizedType().getRawType);this.throwIfExceptionPending();let o;try{o=this.getTypeName(r)}finally{this.deleteLocalRef(r)}return e&&(o+="<"+this.getActualTypeArgument(t)+">"),o}else return this.isInstanceOf(t,this.javaLangReflectTypeVariable().handle)||this.isInstanceOf(t,this.javaLangReflectWildcardType().handle),"java.lang.Object"};E.prototype.getArrayTypeName=function(t){let e=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle)){let n=e(this.handle,t,this.javaLangReflectGenericArrayType().getGenericComponentType);this.throwIfExceptionPending();try{return"[L"+this.getTypeName(n)+";"}finally{this.deleteLocalRef(n)}}else return"[Ljava.lang.Object;"};E.prototype.stringFromJni=function(t){let e=this.getStringChars(t);if(e.isNull())throw new Error("Unable to access string");try{let n=this.getStringLength(t);return e.readUtf16String(n)}finally{this.releaseStringChars(t,e)}};var Co=65542,ct=Process.pointerSize,Gn=Process.getCurrentThreadId(),Xe=new Map,Et=new Map;function ze(t){let e=t.vm,n=null,r=null,o=null;function i(){let l=e.readPointer(),a={exceptions:"propagate"};n=new NativeFunction(l.add(4*ct).readPointer(),"int32",["pointer","pointer","pointer"],a),r=new NativeFunction(l.add(5*ct).readPointer(),"int32",["pointer"],a),o=new NativeFunction(l.add(6*ct).readPointer(),"int32",["pointer","pointer","int32"],a)}this.handle=e,this.perform=function(l){let a=Process.getCurrentThreadId(),c=s(a);if(c!==null)return l(c);let d=this._tryGetEnv(),p=d!==null;p||(d=this.attachCurrentThread(),Xe.set(a,!0)),this.link(a,d);try{return l(d)}finally{let h=a===Gn;if(h||this.unlink(a),!p&&!h){let u=Xe.get(a);Xe.delete(a),u&&this.detachCurrentThread()}}},this.attachCurrentThread=function(){let l=Memory.alloc(ct);return be("VM::AttachCurrentThread",n(e,l,NULL)),new E(l.readPointer(),this)},this.detachCurrentThread=function(){be("VM::DetachCurrentThread",r(e))},this.preventDetachDueToClassLoader=function(){let l=Process.getCurrentThreadId();Xe.has(l)&&Xe.set(l,!1)},this.getEnv=function(){let l=s(Process.getCurrentThreadId());if(l!==null)return l;let a=Memory.alloc(ct),c=o(e,a,Co);if(c===-2)throw new Error("Current thread is not attached to the Java VM; please move this code inside a Java.perform() callback");return be("VM::GetEnv",c),new E(a.readPointer(),this)},this.tryGetEnv=function(){let l=s(Process.getCurrentThreadId());return l!==null?l:this._tryGetEnv()},this._tryGetEnv=function(){let l=this.tryGetEnvHandle(Co);return l===null?null:new E(l,this)},this.tryGetEnvHandle=function(l){let a=Memory.alloc(ct);return o(e,a,l)!==0?null:a.readPointer()},this.makeHandleDestructor=function(l){return()=>{this.perform(a=>{a.deleteGlobalRef(l)})}},this.link=function(l,a){let c=Et.get(l);c===void 0?Et.set(l,[a,1]):c[1]++},this.unlink=function(l){let a=Et.get(l);a[1]===1?Et.delete(l):a[1]--};function s(l){let a=Et.get(l);return a===void 0?null:a[0]}i.call(this)}ze.dispose=function(t){Xe.get(Gn)===!0&&(Xe.delete(Gn),t.detachCurrentThread())};var xl=4,I=Process.pointerSize,{readU32:Ll,readPointer:Ml,writeU32:Al,writePointer:Ol}=NativePointer.prototype,jl=1,Pl=8,Rl=16,Kt=256,Fl=524288,zl=2097152,Bo=1073741824,Dl=524288,Ul=134217728,ko=1048576,Bl=2097152,Vl=268435456,Jl=268435456,Gl=0,tr=3,nr=5,pr=ptr(1).not(),$l=2147467263,Hl=4294963200,rn=17*I,Zl=18*I,Vo=12,Wl=112,ql=116,Kl=0,Hn=56,Io=4,Ql=8,Yl=10,Xl=12,ec=14,tc=28,nc=36,rc=0,oc=1,ic=2,sc=3,ac=4,lc=5,cc=6,dc=7,No=2147483648,uc=28,It=3*I,pc=3*I,fc=1,hc=1,Jo=ye(kc),mc=ye(zc),Ie=ye(Uc),ut=ye(Bc),_c=ye(Vc),gc=ye(Qc),xt=ye(Hc),Go=ye(Zc),fe=ye(Wc),fr=ye(qc),yc=ye(td),bc=Process.arch==="ia32"?Bd:Ud,ce={exceptions:"propagate"},wt={},Zn=null,Wn=null,$o=null,he=null,hr=[],Qt=new Map,Ho=[],qn=null,To=0,xo=!1,Lo=!1,Ct=null,vc=[],Kn=null,Zt=null;function ne(){return Zn===null&&(Zn=Sc()),Zn}function Sc(){let t=Process.enumerateModules().filter(u=>/^lib(art|dvm).so$/.test(u.name)).filter(u=>!/\/system\/fake-libs/.test(u.path));if(t.length===0)return null;let e=t[0],n=e.name.indexOf("art")!==-1?"art":"dalvik",r=n==="art",o={module:e,find(u){let{module:g}=this,_=g.findExportByName(u);return _===null&&(_=g.findSymbolByName(u)),_},flavor:n,addLocalReference:null};o.isApiLevel34OrApexEquivalent=r&&(o.find("_ZN3art7AppInfo29GetPrimaryApkReferenceProfileEv")!==null||o.find("_ZN3art6Thread15RunFlipFunctionEPS0_")!==null);let i=r?{functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],artInterpreterToCompiledCodeBridge:function(u){this.artInterpreterToCompiledCodeBridge=u},_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art17ReaderWriterMutex13ExclusiveLockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveLock","void",["pointer","pointer"]],_ZN3art17ReaderWriterMutex15ExclusiveUnlockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveUnlock","void",["pointer","pointer"]],_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ce)},_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ce)},_ZN3art9JavaVMExt12DecodeGlobalEPv:function(u){let g;fe()>=26?g=bc(u,["pointer","pointer"]):g=new NativeFunction(u,"pointer",["pointer","pointer"],ce),this["art::JavaVMExt::DecodeGlobal"]=function(_,y,v){return g(_,v)}},_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv:["art::JavaVMExt::DecodeGlobal","pointer",["pointer","pointer","pointer"]],_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZNK3art6Thread13DecodeJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZN3art10ThreadList10SuspendAllEPKcb:["art::ThreadList::SuspendAll","void",["pointer","pointer","bool"]],_ZN3art10ThreadList10SuspendAllEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ce);this["art::ThreadList::SuspendAll"]=function(_,y,v){return g(_)}},_ZN3art10ThreadList9ResumeAllEv:["art::ThreadList::ResumeAll","void",["pointer"]],_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE:["art::ClassLinker::VisitClasses","void",["pointer","pointer"]],_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer"],ce);this["art::ClassLinker::VisitClasses"]=function(_,y){g(_,y,NULL)}},_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE:["art::ClassLinker::VisitClassLoaders","void",["pointer","pointer"]],_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_:["art::gc::Heap::VisitObjects","void",["pointer","pointer","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:["art::gc::Heap::GetInstances","void",["pointer","pointer","pointer","int","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer","bool","int","pointer"],ce);this["art::gc::Heap::GetInstances"]=function(_,y,v,S,C){g(_,y,v,0,S,C)}},_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","uint","bool"]],_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","size_t","bool"]],_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb:["art::StackVisitor::WalkStack","void",["pointer","bool"]],_ZNK3art12StackVisitor9GetMethodEv:["art::StackVisitor::GetMethod","pointer",["pointer"]],_ZNK3art12StackVisitor16DescribeLocationEv:function(u){this["art::StackVisitor::DescribeLocation"]=qt(u,["pointer"])},_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv:function(u){this["art::StackVisitor::GetCurrentQuickFrameInfo"]=ed(u)},_ZN3art7Context6CreateEv:["art::Context::Create","pointer",[]],_ZN3art6Thread18GetLongJumpContextEv:["art::Thread::GetLongJumpContext","pointer",["pointer"]],_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE:function(u){this["art::mirror::Class::GetDescriptor"]=u},_ZN3art6mirror5Class11GetLocationEv:function(u){this["art::mirror::Class::GetLocation"]=qt(u,["pointer"])},_ZN3art9ArtMethod12PrettyMethodEb:function(u){this["art::ArtMethod::PrettyMethod"]=qt(u,["pointer","bool"])},_ZN3art12PrettyMethodEPNS_9ArtMethodEb:function(u){this["art::ArtMethod::PrettyMethodNullSafe"]=qt(u,["pointer","bool"])},_ZN3art6Thread14CurrentFromGdbEv:["art::Thread::CurrentFromGdb","pointer",[]],_ZN3art6mirror6Object5CloneEPNS_6ThreadE:function(u){this["art::mirror::Object::Clone"]=new NativeFunction(u,"pointer",["pointer","pointer"],ce)},_ZN3art6mirror6Object5CloneEPNS_6ThreadEm:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","pointer"],ce);this["art::mirror::Object::Clone"]=function(_,y){let v=NULL;return g(_,y,v)}},_ZN3art6mirror6Object5CloneEPNS_6ThreadEj:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","uint"],ce);this["art::mirror::Object::Clone"]=function(_,y){return g(_,y,0)}},_ZN3art3Dbg14SetJdwpAllowedEb:["art::Dbg::SetJdwpAllowed","void",["bool"]],_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE:["art::Dbg::ConfigureJdwp","void",["pointer"]],_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv:["art::InternalDebuggerControlCallback::StartDebugger","void",["pointer"]],_ZN3art3Dbg9StartJdwpEv:["art::Dbg::StartJdwp","void",[]],_ZN3art3Dbg8GoActiveEv:["art::Dbg::GoActive","void",[]],_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE:["art::Dbg::RequestDeoptimization","void",["pointer"]],_ZN3art3Dbg20ManageDeoptimizationEv:["art::Dbg::ManageDeoptimization","void",[]],_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv:["art::Instrumentation::EnableDeoptimization","void",["pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc:["art::Instrumentation::DeoptimizeEverything","void",["pointer","pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ce);this["art::Instrumentation::DeoptimizeEverything"]=function(_,y){g(_)}},_ZN3art7Runtime19DeoptimizeBootImageEv:["art::Runtime::DeoptimizeBootImage","void",["pointer"]],_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE:["art::Instrumentation::Deoptimize","void",["pointer","pointer"]],_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID:["art::jni::JniIdManager::DecodeMethodId","pointer",["pointer","pointer"]],_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID:["art::jni::JniIdManager::DecodeFieldId","pointer",["pointer","pointer"]],_ZN3art11interpreter18GetNterpEntryPointEv:["art::interpreter::GetNterpEntryPoint","pointer",[]],_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi:["art::Monitor::TranslateLocation","void",["pointer","uint32","pointer","pointer"]]},variables:{_ZN3art3Dbg9gRegistryE:function(u){this.isJdwpStarted=()=>!u.readPointer().isNull()},_ZN3art3Dbg15gDebuggerActiveE:function(u){this.isDebuggerActive=()=>!!u.readU8()}},optionals:new Set(["artInterpreterToCompiledCodeBridge","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE","_ZN3art9JavaVMExt12DecodeGlobalEPv","_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv","_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject","_ZNK3art6Thread13DecodeJObjectEP8_jobject","_ZN3art10ThreadList10SuspendAllEPKcb","_ZN3art10ThreadList10SuspendAllEv","_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE","_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_","_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE","_ZN3art6mirror6Object5CloneEPNS_6ThreadE","_ZN3art6mirror6Object5CloneEPNS_6ThreadEm","_ZN3art6mirror6Object5CloneEPNS_6ThreadEj","_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE","_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb","_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb","_ZNK3art12StackVisitor9GetMethodEv","_ZNK3art12StackVisitor16DescribeLocationEv","_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv","_ZN3art7Context6CreateEv","_ZN3art6Thread18GetLongJumpContextEv","_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE","_ZN3art6mirror5Class11GetLocationEv","_ZN3art9ArtMethod12PrettyMethodEb","_ZN3art12PrettyMethodEPNS_9ArtMethodEb","_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE","_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv","_ZN3art3Dbg15gDebuggerActiveE","_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv","_ZN3art7Runtime19DeoptimizeBootImageEv","_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE","_ZN3art3Dbg9StartJdwpEv","_ZN3art3Dbg8GoActiveEv","_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE","_ZN3art3Dbg20ManageDeoptimizationEv","_ZN3art3Dbg9gRegistryE","_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID","_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID","_ZN3art11interpreter18GetNterpEntryPointEv","_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi"])}:{functions:{_Z20dvmDecodeIndirectRefP6ThreadP8_jobject:["dvmDecodeIndirectRef","pointer",["pointer","pointer"]],_Z15dvmUseJNIBridgeP6MethodPv:["dvmUseJNIBridge","void",["pointer","pointer"]],_Z20dvmHeapSourceGetBasev:["dvmHeapSourceGetBase","pointer",[]],_Z21dvmHeapSourceGetLimitv:["dvmHeapSourceGetLimit","pointer",[]],_Z16dvmIsValidObjectPK6Object:["dvmIsValidObject","uint8",["pointer"]],JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]]},variables:{gDvmJni:function(u){this.gDvmJni=u},gDvm:function(u){this.gDvm=u}}},{functions:s={},variables:l={},optionals:a=new Set}=i,c=[];for(let[u,g]of Object.entries(s)){let _=o.find(u);_!==null?typeof g=="function"?g.call(o,_):o[g[0]]=new NativeFunction(_,g[1],g[2],ce):a.has(u)||c.push(u)}for(let[u,g]of Object.entries(l)){let _=o.find(u);_!==null?g.call(o,_):a.has(u)||c.push(u)}if(c.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+c.join(", "));let d=Memory.alloc(I),p=Memory.alloc(xl);if(be("JNI_GetCreatedJavaVMs",o.JNI_GetCreatedJavaVMs(d,1,p)),p.readInt()===0)return null;if(o.vm=d.readPointer(),r){let u=fe(),g;u>=27?g=33554432:u>=24?g=16777216:g=0,o.kAccCompileDontBother=g;let _=o.vm.add(I).readPointer();o.artRuntime=_;let y=Jo(o),v=y.offset,S=v.instrumentation;o.artInstrumentation=S!==null?_.add(S):null,fr()>=36e7&&o.artInstrumentation!=null&&(o.artInstrumentation=o.artInstrumentation.readPointer()),o.artHeap=_.add(v.heap).readPointer(),o.artThreadList=_.add(v.threadList).readPointer();let x=_.add(v.classLinker).readPointer(),L=Dc(_,y).offset,R=x.add(L.quickResolutionTrampoline).readPointer(),A=x.add(L.quickImtConflictTrampoline).readPointer(),j=x.add(L.quickGenericJniTrampoline).readPointer(),k=x.add(L.quickToInterpreterBridgeTrampoline).readPointer();o.artClassLinker={address:x,quickResolutionTrampoline:R,quickImtConflictTrampoline:A,quickGenericJniTrampoline:j,quickToInterpreterBridgeTrampoline:k};let M=new ze(o);o.artQuickGenericJniTrampoline=Qn(j,M),o.artQuickToInterpreterBridge=Qn(k,M),o.artQuickResolutionTrampoline=Qn(R,M),o["art::JavaVMExt::AddGlobalRef"]===void 0&&(o["art::JavaVMExt::AddGlobalRef"]=jd(o)),o["art::JavaVMExt::DecodeGlobal"]===void 0&&(o["art::JavaVMExt::DecodeGlobal"]=Pd(o)),o["art::ArtMethod::PrettyMethod"]===void 0&&(o["art::ArtMethod::PrettyMethod"]=o["art::ArtMethod::PrettyMethodNullSafe"]),o["art::interpreter::GetNterpEntryPoint"]!==void 0?o.artNterpEntryPoint=o["art::interpreter::GetNterpEntryPoint"]():o.artNterpEntryPoint=o.find("ExecuteNterpImpl"),he=od(o,M),Dd(o);let D=null;Object.defineProperty(o,"jvmti",{get(){return D===null&&(D=[Ec(M,this.artRuntime)]),D[0]}})}let h=e.enumerateImports().filter(u=>u.name.indexOf("_Z")===0).reduce((u,g)=>(u[g.name]=g.address,u),{});return o.$new=new NativeFunction(h._Znwm||h._Znwj,"pointer",["ulong"],ce),o.$delete=new NativeFunction(h._ZdlPv,"void",["pointer"],ce),$o=r?lr:cr,o}function Ec(t,e){let n=null;return t.perform(()=>{let r=ne().find("_ZN3art7Runtime18EnsurePluginLoadedEPKcPNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE");if(r===null)return;let o=new NativeFunction(r,"bool",["pointer","pointer","pointer"]),i=Memory.alloc(I);if(!o(e,Memory.allocUtf8String("libopenjdkjvmti.so"),i))return;let l=Vt.v1_2|1073741824,a=t.tryGetEnvHandle(l);if(a===null)return;n=new Je(a,t);let c=Memory.alloc(8);c.writeU64(Jt.canTagObjects),n.addCapabilities(c)!==0&&(n=null)}),n}function wc(t,e){ne().flavor==="art"&&t.getClassName(e)}function Cc(t){return{offset:I===4?{globalsLock:32,globals:72}:{globalsLock:64,globals:112}}}function kc(t){let e=t.vm,n=t.artRuntime,r=I===4?200:384,o=r+100*I,i=fe(),s=Go(),{isApiLevel34OrApexEquivalent:l}=t,a=null;for(let d=r;d!==o;d+=I)if(n.add(d).readPointer().equals(e)){let h,u=null;i>=33||s==="Tiramisu"||l?(h=[d-4*I],u=d-I):i>=30||s==="R"?(h=[d-3*I,d-4*I],u=d-I):i>=29?h=[d-2*I]:i>=27?h=[d-It-3*I]:h=[d-It-2*I];for(let g of h){let _=g-I,y=_-I,v;l?v=y-9*I:i>=24?v=y-8*I:i>=23?v=y-7*I:v=y-4*I;let S={offset:{heap:v,threadList:y,internTable:_,classLinker:g,jniIdManager:u}};if(Zo(n,S)!==null){a=S;break}}break}if(a===null)throw new Error("Unable to determine Runtime field offsets");let c=fr()>=36e7;return a.offset.instrumentation=c?Mc(t):Nc(t),a.offset.jniIdsIndirection=Pc(t),a}var Ic={ia32:Mo,x64:Mo,arm:Tc,arm64:xc};function Nc(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Ge(e,Ic[Process.arch],{limit:30})}function Mo(t){if(t.mnemonic!=="lea")return null;let e=t.operands[1].value.disp;return e<256||e>1024?null:e}function Tc(t){if(t.mnemonic!=="add.w")return null;let e=t.operands;if(e.length!==3)return null;let n=e[2];return n.type!=="imm"?null:n.value}function xc(t){if(t.mnemonic!=="add")return null;let e=t.operands;if(e.length!==3||e[0].value==="sp"||e[1].value==="sp")return null;let n=e[2];if(n.type!=="imm")return null;let r=n.value.valueOf();return r<256||r>1024?null:r}var Lc={ia32:Ao,x64:Ao,arm:Ac,arm64:Oc};function Mc(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Ge(e,Lc[Process.arch],{limit:30})}function Ao(t){if(t.mnemonic!=="mov")return null;let e=t.operands;if(e[0].value!=="rax")return null;let r=e[1];if(r.type!=="mem")return null;let o=r.value;if(o.base!=="rdi")return null;let i=o.disp;return i<256||i>1024?null:i}function Ac(t){return null}function Oc(t){if(t.mnemonic!=="ldr")return null;let e=t.operands;if(e[0].value==="x0")return null;let n=e[1].value;if(n.base!=="x0")return null;let r=n.disp;return r<256||r>1024?null:r}var jc={ia32:Oo,x64:Oo,arm:Rc,arm64:Fc};function Pc(t){let e=t.find("_ZN3art7Runtime12SetJniIdTypeENS_9JniIdTypeE");if(e===null)return null;let n=Ge(e,jc[Process.arch],{limit:20});if(n===null)throw new Error("Unable to determine Runtime.jni_ids_indirection_ offset");return n}function Oo(t){return t.mnemonic==="cmp"?t.operands[0].value.disp:null}function Rc(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function Fc(t,e){if(e===null)return null;let{mnemonic:n}=t,{mnemonic:r}=e;return n==="cmp"&&r==="ldr"||n==="bl"&&r==="str"?e.operands[1].value.disp:null}function zc(){let e={"4-21":136,"4-22":136,"4-23":172,"4-24":196,"4-25":196,"4-26":196,"4-27":196,"4-28":212,"4-29":172,"4-30":180,"4-31":180,"8-21":224,"8-22":224,"8-23":296,"8-24":344,"8-25":344,"8-26":352,"8-27":352,"8-28":392,"8-29":328,"8-30":336,"8-31":336}[`${I}-${fe()}`];if(e===void 0)throw new Error("Unable to determine Instrumentation field offsets");return{offset:{forcedInterpretOnly:4,deoptimizationEnabled:e}}}function Dc(t,e){let n=Zo(t,e);if(n===null)throw new Error("Unable to determine ClassLinker field offsets");return n}function Zo(t,e){if(Wn!==null)return Wn;let{classLinker:n,internTable:r}=e.offset,o=t.add(n).readPointer(),i=t.add(r).readPointer(),s=I===4?100:200,l=s+100*I,a=fe(),c=null;for(let d=s;d!==l;d+=I)if(o.add(d).readPointer().equals(i)){let h;a>=30||Go()==="R"?h=6:a>=29?h=4:a>=23?h=3:h=5;let u=d+h*I,g;a>=23?g=u-2*I:g=u-3*I,c={offset:{quickResolutionTrampoline:g,quickImtConflictTrampoline:u-I,quickGenericJniTrampoline:u,quickToInterpreterBridgeTrampoline:u+I}};break}return c!==null&&(Wn=c),c}function mr(t){let n=null;return t.perform(r=>{let o=on(t),i=Ie(t),s={artArrayLengthSize:4,artArrayEntrySize:o.size,artArrayMax:50},l={artArrayLengthSize:I,artArrayEntrySize:i.size,artArrayMax:100},a=(h,u,g)=>{let _=h.add(u).readPointer();if(_.isNull())return null;let y=g===4?_.readU32():_.readU64().valueOf();return y<=0?null:{length:y,data:_.add(g)}},c=(h,u,g,_)=>{try{let y=a(h,u,_.artArrayLengthSize);if(y===null)return!1;let v=Math.min(y.length,_.artArrayMax);for(let S=0;S!==v;S++)if(y.data.add(S*_.artArrayEntrySize).equals(g))return!0}catch{}return!1},d=r.findClass("java/lang/Thread"),p=r.newGlobalRef(d);try{let h;Ae(t,r,j=>{h=ne()["art::JavaVMExt::DecodeGlobal"](t,j,p)});let u=Ro(r.getFieldId(p,"name","Ljava/lang/String;")),g=Ro(r.getStaticFieldId(p,"MAX_PRIORITY","I")),_=-1,y=-1;for(let j=0;j!==256;j+=4)_===-1&&c(h,j,g,s)&&(_=j),y===-1&&c(h,j,u,s)&&(y=j);if(y===-1||_===-1)throw new Error("Unable to find fields in java/lang/Thread; please file a bug");let v=y!==_?_:0,S=y,C=-1,x=Er(r.getMethodId(p,"getName","()Ljava/lang/String;"));for(let j=0;j!==256;j+=4)C===-1&&c(h,j,x,l)&&(C=j);if(C===-1)throw new Error("Unable to find methods in java/lang/Thread; please file a bug");let L=-1,A=a(h,C,l.artArrayLengthSize).length;for(let j=C;j!==256;j+=4)if(h.add(j).readU16()===A){L=j;break}if(L===-1)throw new Error("Unable to find copied methods in java/lang/Thread; please file a bug");n={offset:{ifields:S,methods:C,sfields:v,copiedMethodsOffset:L}}}finally{r.deleteLocalRef(d),r.deleteGlobalRef(p)}}),n}function Uc(t){let e=ne(),n;return t.perform(r=>{let o=r.findClass("android/os/Process"),i=Er(r.getStaticMethodId(o,"getElapsedCpuTime","()J"));r.deleteLocalRef(o);let s=Process.getModuleByName("libandroid_runtime.so"),l=s.base,a=l.add(s.size),c=fe(),d=c<=21?8:I,p=jl|Pl|Rl|Kt,h=~(Bo|Vl|Bl)>>>0,u=null,g=null,_=2;for(let S=0;S!==64&&_!==0;S+=4){let C=i.add(S);if(u===null){let x=C.readPointer();x.compare(l)>=0&&x.compare(a)<0&&(u=S,_--)}g===null&&(C.readU32()&h)===p&&(g=S,_--)}if(_!==0)throw new Error("Unable to determine ArtMethod field offsets");let y=u+d;n={size:c<=21?y+32:y+I,offset:{jniCode:u,quickCode:y,accessFlags:g}},"artInterpreterToCompiledCodeBridge"in e&&(n.offset.interpreterCode=u-d)}),n}function on(t){let e=fe();return e>=23?{size:16,offset:{accessFlags:4}}:e>=21?{size:24,offset:{accessFlags:12}}:null}function Bc(t){let e=fe(),n;return t.perform(r=>{let o=sn(r),i=r.handle,s=null,l=null,a=null,c=null,d=null,p=null;for(let h=144;h!==256;h+=I)if(o.add(h).readPointer().equals(i)){l=h-6*I,d=h-4*I,p=h+2*I,e<=22&&(l-=I,s=l-I-9*8-3*4,a=h+6*I,d-=I,p-=I),c=h+9*I,e<=22&&(c+=2*I+4,I===8&&(c+=4)),e>=23&&(c+=I);break}if(c===null)throw new Error("Unable to determine ArtThread field offsets");n={offset:{isExceptionReportedToInstrumentation:s,exception:l,throwLocation:a,topHandleScope:c,managedStack:d,self:p}}}),n}function Vc(){return fe()>=23?{offset:{topQuickFrame:0,link:I}}:{offset:{topQuickFrame:2*I,link:0}}}var Jc={ia32:jo,x64:jo,arm:Gc,arm64:$c};function Qn(t,e){let n;return e.perform(r=>{let o=sn(r),i=Jc[Process.arch],s=Instruction.parse(t),l=i(s);l!==null?n=o.add(l).readPointer():n=t}),n}function jo(t){return t.mnemonic==="jmp"?t.operands[0].value.disp:null}function Gc(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function $c(t){return t.mnemonic==="ldr"?t.operands[1].value.disp:null}function sn(t){return t.handle.add(I).readPointer()}function Hc(){return _r("ro.build.version.release")}function Zc(){return _r("ro.build.version.codename")}function Wc(){return parseInt(_r("ro.build.version.sdk"),10)}function qc(){try{let t=File.readAllText("/proc/self/mountinfo"),e=null,n=new Map;for(let o of t.trimEnd().split(`
`)){let i=o.split(" "),s=i[4];if(!s.startsWith("/apex/com.android.art"))continue;let l=i[10];s.includes("@")?n.set(l,s.split("@")[1]):e=l}let r=n.get(e);return r!==void 0?parseInt(r):Po()}catch{return Po()}}function Po(){return fe()*1e7}var Yn=null,Kc=92;function _r(t){Yn===null&&(Yn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("__system_property_get"),"int",["pointer","pointer"],ce));let e=Memory.alloc(Kc);return Yn(Memory.allocUtf8String(t),e),e.readUtf8String()}function Ae(t,e,n){let r=gc(t,e),o=sn(e).toString();if(wt[o]=n,r(e.handle),wt[o]!==void 0)throw delete wt[o],new Error("Unable to perform state transition; please file a bug")}function Qc(t,e){let n=new NativeCallback(Yc,"void",["pointer"]);return Ko(t,e,n)}function Yc(t){let e=t.toString(),n=wt[e];delete wt[e],n(t)}function gr(t){let e=ne(),n=e.artThreadList;e["art::ThreadList::SuspendAll"](n,Memory.allocUtf8String("frida"),!1?1:0);try{t()}finally{e["art::ThreadList::ResumeAll"](n)}}var rr=class{constructor(e){let n=Memory.alloc(4*I),r=n.add(I);n.writePointer(r);let o=new NativeCallback((i,s)=>e(s)===!0?1:0,"bool",["pointer","pointer"]);r.add(2*I).writePointer(o),this.handle=n,this._onVisit=o}};function yr(t){return ne()["art::ClassLinker::VisitClasses"]instanceof NativeFunction?new rr(t):new NativeCallback(n=>t(n)===!0?1:0,"bool",["pointer","pointer"])}var or=class{constructor(e){let n=Memory.alloc(4*I),r=n.add(I);n.writePointer(r);let o=new NativeCallback((i,s)=>{e(s)},"void",["pointer","pointer"]);r.add(2*I).writePointer(o),this.handle=n,this._onVisit=o}};function br(t){return new or(t)}var Xc={"include-inlined-frames":0,"skip-inlined-frames":1},ir=class{constructor(e,n,r,o=0,i=!0){let s=ne(),l=512,a=3*I,c=Memory.alloc(l+a);s["art::StackVisitor::StackVisitor"](c,e,n,Xc[r],o,i?1:0);let d=c.add(l);c.writePointer(d);let p=new NativeCallback(this._visitFrame.bind(this),"bool",["pointer"]);d.add(2*I).writePointer(p),this.handle=c,this._onVisitFrame=p;let h=c.add(I===4?12:24);this._curShadowFrame=h,this._curQuickFrame=h.add(I),this._curQuickFramePc=h.add(2*I),this._curOatQuickMethodHeader=h.add(3*I),this._getMethodImpl=s["art::StackVisitor::GetMethod"],this._descLocImpl=s["art::StackVisitor::DescribeLocation"],this._getCQFIImpl=s["art::StackVisitor::GetCurrentQuickFrameInfo"]}walkStack(e=!1){ne()["art::StackVisitor::WalkStack"](this.handle,e?1:0)}_visitFrame(){return this.visitFrame()?1:0}visitFrame(){throw new Error("Subclass must implement visitFrame")}getMethod(){let e=this._getMethodImpl(this.handle);return e.isNull()?null:new Yt(e)}getCurrentQuickFramePc(){return this._curQuickFramePc.readPointer()}getCurrentQuickFrame(){return this._curQuickFrame.readPointer()}getCurrentShadowFrame(){return this._curShadowFrame.readPointer()}describeLocation(){let e=new tn;return this._descLocImpl(e,this.handle),e.disposeToString()}getCurrentOatQuickMethodHeader(){return this._curOatQuickMethodHeader.readPointer()}getCurrentQuickFrameInfo(){return this._getCQFIImpl(this.handle)}},Yt=class{constructor(e){this.handle=e}prettyMethod(e=!0){let n=new tn;return ne()["art::ArtMethod::PrettyMethod"](n,this.handle,e?1:0),n.disposeToString()}toString(){return`ArtMethod(handle=${this.handle})`}};function ed(t){return function(e){let n=Memory.alloc(12);return yc(t)(n,e),{frameSizeInBytes:n.readU32(),coreSpillMask:n.add(4).readU32(),fpSpillMask:n.add(8).readU32()}}}function td(t){let e=NULL;switch(Process.arch){case"ia32":e=dt(32,n=>{n.putMovRegRegOffsetPtr("ecx","esp",4),n.putMovRegRegOffsetPtr("edx","esp",8),n.putCallAddressWithArguments(t,["ecx","edx"]),n.putMovRegReg("esp","ebp"),n.putPopReg("ebp"),n.putRet()});break;case"x64":e=dt(32,n=>{n.putPushReg("rdi"),n.putCallAddressWithArguments(t,["rsi"]),n.putPopReg("rdi"),n.putMovRegPtrReg("rdi","rax"),n.putMovRegOffsetPtrReg("rdi",8,"edx"),n.putRet()});break;case"arm":e=dt(16,n=>{n.putCallAddressWithArguments(t,["r0","r1"]),n.putPopRegs(["r0","lr"]),n.putMovRegReg("pc","lr")});break;case"arm64":e=dt(64,n=>{n.putPushRegReg("x0","lr"),n.putCallAddressWithArguments(t,["x1"]),n.putPopRegReg("x2","lr"),n.putStrRegRegOffset("x0","x2",0),n.putStrRegRegOffset("w1","x2",8),n.putRet()});break}return new NativeFunction(e,"void",["pointer","pointer"],ce)}var nd={ia32:globalThis.X86Relocator,x64:globalThis.X86Relocator,arm:globalThis.ThumbRelocator,arm64:globalThis.Arm64Relocator},sr={ia32:globalThis.X86Writer,x64:globalThis.X86Writer,arm:globalThis.ThumbWriter,arm64:globalThis.Arm64Writer};function dt(t,e){qn===null&&(qn=Memory.alloc(Process.pageSize));let n=qn.add(To),r=Process.arch,o=sr[r];return Memory.patchCode(n,t,i=>{let s=new o(i,{pc:n});if(e(s),s.flush(),s.offset>t)throw new Error(`Wrote ${s.offset}, exceeding maximum of ${t}`)}),To+=t,r==="arm"?n.or(1):n}function rd(t,e){id(e),dd(e)}function od(t,e){let n=ut(e).offset,r=_c().offset,o=`
#include <gum/guminterceptor.h>

extern GMutex lock;
extern GHashTable * methods;
extern GHashTable * replacements;
extern gpointer last_seen_art_method;

extern gpointer get_oat_quick_method_header_impl (gpointer method, gpointer pc);

void
init (void)
{
  g_mutex_init (&lock);
  methods = g_hash_table_new_full (NULL, NULL, NULL, NULL);
  replacements = g_hash_table_new_full (NULL, NULL, NULL, NULL);
}

void
finalize (void)
{
  g_hash_table_unref (replacements);
  g_hash_table_unref (methods);
  g_mutex_clear (&lock);
}

gboolean
is_replacement_method (gpointer method)
{
  gboolean is_replacement;

  g_mutex_lock (&lock);

  is_replacement = g_hash_table_contains (replacements, method);

  g_mutex_unlock (&lock);

  return is_replacement;
}

gpointer
get_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);

  g_mutex_unlock (&lock);

  return replacement_method;
}

void
set_replacement_method (gpointer original_method,
                        gpointer replacement_method)
{
  g_mutex_lock (&lock);

  g_hash_table_insert (methods, original_method, replacement_method);
  g_hash_table_insert (replacements, replacement_method, original_method);

  g_mutex_unlock (&lock);
}

void
synchronize_replacement_methods (guint quick_code_offset,
                                 void * nterp_entrypoint,
                                 void * quick_to_interpreter_bridge)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
  {
    void ** quick_code;

    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

    quick_code = hooked_method + quick_code_offset;
    if (*quick_code == nterp_entrypoint)
      *quick_code = quick_to_interpreter_bridge;
  }

  g_mutex_unlock (&lock);
}

void
delete_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);
  if (replacement_method != NULL)
  {
    g_hash_table_remove (methods, original_method);
    g_hash_table_remove (replacements, replacement_method);
  }

  g_mutex_unlock (&lock);
}

gpointer
translate_method (gpointer method)
{
  gpointer translated_method;

  g_mutex_lock (&lock);

  translated_method = g_hash_table_lookup (replacements, method);

  g_mutex_unlock (&lock);

  return (translated_method != NULL) ? translated_method : method;
}

gpointer
find_replacement_method_from_quick_code (gpointer method,
                                         gpointer thread)
{
  gpointer replacement_method;
  gpointer managed_stack;
  gpointer top_quick_frame;
  gpointer link_managed_stack;
  gpointer * link_top_quick_frame;

  replacement_method = get_replacement_method (method);
  if (replacement_method == NULL)
    return NULL;

  /*
   * Stack check.
   *
   * Return NULL to indicate that the original method should be invoked, otherwise
   * return a pointer to the replacement ArtMethod.
   *
   * If the caller is our own JNI replacement stub, then a stack transition must
   * have been pushed onto the current thread's linked list.
   *
   * Therefore, we invoke the original method if the following conditions are met:
   *   1- The current managed stack is empty.
   *   2- The ArtMethod * inside the linked managed stack's top quick frame is the
   *      same as our replacement.
   */
  managed_stack = thread + ${n.managedStack};
  top_quick_frame = *((gpointer *) (managed_stack + ${r.topQuickFrame}));
  if (top_quick_frame != NULL)
    return replacement_method;

  link_managed_stack = *((gpointer *) (managed_stack + ${r.link}));
  if (link_managed_stack == NULL)
    return replacement_method;

  link_top_quick_frame = GSIZE_TO_POINTER (*((gsize *) (link_managed_stack + ${r.topQuickFrame})) & ~((gsize) 1));
  if (link_top_quick_frame == NULL || *link_top_quick_frame != replacement_method)
    return replacement_method;

  return NULL;
}

void
on_interpreter_do_call (GumInvocationContext * ic)
{
  gpointer method, replacement_method;

  method = gum_invocation_context_get_nth_argument (ic, 0);

  replacement_method = get_replacement_method (method);
  if (replacement_method != NULL)
    gum_invocation_context_replace_nth_argument (ic, 0, replacement_method);
}

gpointer
on_art_method_get_oat_quick_method_header (gpointer method,
                                           gpointer pc)
{
  if (is_replacement_method (method))
    return NULL;

  return get_oat_quick_method_header_impl (method, pc);
}

void
on_art_method_pretty_method (GumInvocationContext * ic)
{
  const guint this_arg_index = ${Process.arch==="arm64"?0:1};
  gpointer method;

  method = gum_invocation_context_get_nth_argument (ic, this_arg_index);
  if (method == NULL)
    gum_invocation_context_replace_nth_argument (ic, this_arg_index, last_seen_art_method);
  else
    last_seen_art_method = method;
}

void
on_leave_gc_concurrent_copying_copying_phase (GumInvocationContext * ic)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

  g_mutex_unlock (&lock);
}
`,i=8,s=I,l=I,a=I,d=Memory.alloc(i+s+l+a),p=d.add(i),h=p.add(s),u=h.add(l),g=t.find(I===4?"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEj":"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEm"),_=new CModule(o,{lock:d,methods:p,replacements:h,last_seen_art_method:u,get_oat_quick_method_header_impl:g??ptr("0xdeadbeef")}),y={exceptions:"propagate",scheduling:"exclusive"};return{handle:_,replacedMethods:{isReplacement:new NativeFunction(_.is_replacement_method,"bool",["pointer"],y),get:new NativeFunction(_.get_replacement_method,"pointer",["pointer"],y),set:new NativeFunction(_.set_replacement_method,"void",["pointer","pointer"],y),synchronize:new NativeFunction(_.synchronize_replacement_methods,"void",["uint","pointer","pointer"],y),delete:new NativeFunction(_.delete_replacement_method,"void",["pointer"],y),translate:new NativeFunction(_.translate_method,"pointer",["pointer"],y),findReplacementFromQuickCode:_.find_replacement_method_from_quick_code},getOatQuickMethodHeaderImpl:g,hooks:{Interpreter:{doCall:_.on_interpreter_do_call},ArtMethod:{getOatQuickMethodHeader:_.on_art_method_get_oat_quick_method_header,prettyMethod:_.on_art_method_pretty_method},Gc:{copyingPhase:{onLeave:_.on_leave_gc_concurrent_copying_copying_phase},runFlip:{onEnter:_.on_leave_gc_concurrent_copying_copying_phase}}}}}function id(t){Lo||(Lo=!0,sd(t),ad(),ld(),cd())}function sd(t){let e=ne();[e.artQuickGenericJniTrampoline,e.artQuickToInterpreterBridge,e.artQuickResolutionTrampoline].forEach(r=>{Memory.protect(r,32,"rwx");let o=new en(r);o.activate(t),Ho.push(o)})}function ad(){let t=ne(),e=fe(),{isApiLevel34OrApexEquivalent:n}=t,r;if(e<=22)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_6mirror9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(e<=33&&!n)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(n)r=/^_ZN3art11interpreter6DoCallILb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtbPNS_6JValueE$/;else throw new Error("Unable to find method invocation in ART; please file a bug");let o=t.module,i=[...o.enumerateExports(),...o.enumerateSymbols()].filter(s=>r.test(s.name));if(i.length===0)throw new Error("Unable to find method invocation in ART; please file a bug");for(let s of i)Interceptor.attach(s.address,he.hooks.Interpreter.doCall)}function ld(){let t=ne(),n=t.module.findSymbolByName("_ZN3art2gc4Heap22CollectGarbageInternalENS0_9collector6GcTypeENS0_7GcCauseEbj");if(n===null)return;let{artNterpEntryPoint:r,artQuickToInterpreterBridge:o}=t,i=Ie(t.vm).offset.quickCode;Interceptor.attach(n,{onLeave(){he.replacedMethods.synchronize(i,r,o)}})}function cd(){let t=[["_ZN3art11ClassLinker26VisiblyInitializedCallback22MarkVisiblyInitializedEPNS_6ThreadE","e90340f8 : ff0ff0ff"],["_ZN3art11ClassLinker26VisiblyInitializedCallback29AdjustThreadVisibilityCounterEPNS_6ThreadEl","7f0f00f9 : 1ffcffff"]],e=ne(),n=e.module;for(let[r,o]of t){let i=n.findSymbolByName(r);if(i===null)continue;let s=Memory.scanSync(i,8192,o);if(s.length===0)return;let{artNterpEntryPoint:l,artQuickToInterpreterBridge:a}=e,c=Ie(e.vm).offset.quickCode;Interceptor.attach(s[0].address,function(){he.replacedMethods.synchronize(c,l,a)});return}}function dd(t){if(xo)return;if(xo=!0,!pd()){let{getOatQuickMethodHeaderImpl:i}=he;if(i===null)return;try{Interceptor.replace(i,he.hooks.ArtMethod.getOatQuickMethodHeader)}catch{}}let e=fe(),n=null,r=ne();e>28?n=r.find("_ZN3art2gc9collector17ConcurrentCopying12CopyingPhaseEv"):e>22&&(n=r.find("_ZN3art2gc9collector17ConcurrentCopying12MarkingPhaseEv")),n!==null&&Interceptor.attach(n,he.hooks.Gc.copyingPhase);let o=null;o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_"),o===null&&(o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_b")),o!==null&&Interceptor.attach(o,he.hooks.Gc.runFlip)}var ud={arm:{signatures:[{pattern:["b0 68","01 30","0c d0","1b 98",":","c0 ff","c0 ff","00 ff","00 2f"],validateMatch:Xn},{pattern:["d8 f8 08 00","01 30","0c d0","1b 98",":","f0 ff ff 0f","ff ff","00 ff","00 2f"],validateMatch:Xn},{pattern:["b0 68","01 30","40 f0 c3 80","00 25",":","c0 ff","c0 ff","c0 fb 00 d0","ff f8"],validateMatch:Xn}],instrument:hd},arm64:{signatures:[{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","88 39 00 f0",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 00 00 9f"],offset:1,validateMatch:er},{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","00 0e 40 f9",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 fc ff ff"],offset:1,validateMatch:er},{pattern:["0a 40 b9","1f 05 00 31","01 34 00 54","e0 03 1f aa",":","fc ff ff","1f fc ff ff","1f 00 00 ff","e0 ff ff ff"],offset:1,validateMatch:er}],instrument:md}};function Xn({address:t,size:e}){let n=Instruction.parse(t.or(1)),[r,o]=n.operands,i=o.value.base,s=r.value,l=Instruction.parse(n.next.add(2)),a=ptr(l.operands[0].value),c=l.address.add(l.size),d,p;return l.mnemonic==="beq"?(d=c,p=a):(d=a,p=c),Ge(d.or(1),h,{limit:3});function h(u){let{mnemonic:g}=u;if(!(g==="ldr"||g==="ldr.w"))return null;let{base:_,disp:y}=u.operands[1].value;return _===i&&y===20?{methodReg:i,scratchReg:s,target:{whenTrue:a,whenRegularMethod:d,whenRuntimeMethod:p}}:null}}function er({address:t,size:e}){let[n,r]=Instruction.parse(t).operands,o=r.value.base,i="x"+n.value.substring(1),s=Instruction.parse(t.add(8)),l=ptr(s.operands[0].value),a=t.add(12),c,d;return s.mnemonic==="b.eq"?(c=a,d=l):(c=l,d=a),Ge(c,p,{limit:3});function p(h){if(h.mnemonic!=="ldr")return null;let{base:u,disp:g}=h.operands[1].value;return u===o&&g===24?{methodReg:o,scratchReg:i,target:{whenTrue:l,whenRegularMethod:c,whenRuntimeMethod:d}}:null}}function pd(){if(fe()<31)return!1;let t=ud[Process.arch];if(t===void 0)return!1;let e=t.signatures.map(({pattern:r,offset:o=0,validateMatch:i=fd})=>({pattern:new MatchPattern(r.join("")),offset:o,validateMatch:i})),n=[];for(let{base:r,size:o}of ne().module.enumerateRanges("--x"))for(let{pattern:i,offset:s,validateMatch:l}of e){let a=Memory.scanSync(r,o,i).map(({address:c,size:d})=>({address:c.sub(s),size:d+s})).filter(c=>{let d=l(c);return d===null?!1:(c.validationResult=d,!0)});n.push(...a)}return n.length===0?!1:(n.forEach(t.instrument),!0)}function fd(){return{}}var Xt=class{constructor(e,n,r){this.address=e,this.size=n,this.originalCode=e.readByteArray(n),this.trampoline=r}revert(){Memory.patchCode(this.address,this.size,e=>{e.writeByteArray(this.originalCode)})}};function hd({address:t,size:e,validationResult:n}){let{methodReg:r,target:o}=n,i=Memory.alloc(Process.pageSize),s=e;Memory.patchCode(i,256,l=>{let a=new ThumbWriter(l,{pc:i}),c=new ThumbRelocator(t,a);for(let g=0;g!==2;g++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=[45,237,16,10];a.putBytes(d);let p=["r0","r1","r2","r3"];a.putPushRegs(p),a.putCallAddressWithArguments(he.replacedMethods.isReplacement,[r]),a.putCmpRegImm("r0",0),a.putPopRegs(p);let h=[189,236,16,10];a.putBytes(h),a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let u=c.input.address.equals(o.whenRegularMethod);for(a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne();s<10;){let g=c.readOne();if(g===0){s=10;break}s=g}c.writeAll(),a.putBranchAddress(t.add(s+1)),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(o.whenTrue),a.flush()}),hr.push(new Xt(t,s,i)),Memory.patchCode(t,s,l=>{let a=new ThumbWriter(l,{pc:t});a.putLdrRegAddress("pc",i.or(1)),a.flush()})}function md({address:t,size:e,validationResult:n}){let{methodReg:r,scratchReg:o,target:i}=n,s=Memory.alloc(Process.pageSize);Memory.patchCode(s,256,l=>{let a=new Arm64Writer(l,{pc:s}),c=new Arm64Relocator(t,a);for(let g=0;g!==2;g++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=["d0","d1","d2","d3","d4","d5","d6","d7","x0","x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17"],p=d.length;for(let g=0;g!==p;g+=2)a.putPushRegReg(d[g],d[g+1]);a.putCallAddressWithArguments(he.replacedMethods.isReplacement,[r]),a.putCmpRegReg("x0","xzr");for(let g=p-2;g>=0;g-=2)a.putPopRegReg(d[g],d[g+1]);a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let h=c.input,u=h.address.equals(i.whenRegularMethod);a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne(),a.putBranchAddress(h.next),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(i.whenTrue),a.flush()}),hr.push(new Xt(t,e,s)),Memory.patchCode(t,e,l=>{let a=new Arm64Writer(l,{pc:t});a.putLdrRegAddress(o,s),a.putBrReg(o),a.flush()})}function _d(t){return new $o(t)}function gd(t){return he.replacedMethods.translate(t)}function vr(t,e={}){let{limit:n=16}=e,r=t.getEnv();return Ct===null&&(Ct=yd(t,r)),Ct.backtrace(r,n)}function yd(t,e){let n=ne(),r=Memory.alloc(Process.pointerSize),o=new CModule(`
#include <glib.h>
#include <stdbool.h>
#include <string.h>
#include <gum/gumtls.h>
#include <json-glib/json-glib.h>

typedef struct _ArtBacktrace ArtBacktrace;
typedef struct _ArtStackFrame ArtStackFrame;

typedef struct _ArtStackVisitor ArtStackVisitor;
typedef struct _ArtStackVisitorVTable ArtStackVisitorVTable;

typedef struct _ArtClass ArtClass;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtThread ArtThread;
typedef struct _ArtContext ArtContext;

typedef struct _JNIEnv JNIEnv;

typedef struct _StdString StdString;
typedef struct _StdTinyString StdTinyString;
typedef struct _StdLargeString StdLargeString;

typedef enum {
  STACK_WALK_INCLUDE_INLINED_FRAMES,
  STACK_WALK_SKIP_INLINED_FRAMES,
} StackWalkKind;

struct _StdTinyString
{
  guint8 unused;
  gchar data[(3 * sizeof (gpointer)) - 1];
};

struct _StdLargeString
{
  gsize capacity;
  gsize size;
  gchar * data;
};

struct _StdString
{
  union
  {
    guint8 flags;
    StdTinyString tiny;
    StdLargeString large;
  };
};

struct _ArtBacktrace
{
  GChecksum * id;
  GArray * frames;
  gchar * frames_json;
};

struct _ArtStackFrame
{
  ArtMethod * method;
  gsize dexpc;
  StdString description;
};

struct _ArtStackVisitorVTable
{
  void (* unused1) (void);
  void (* unused2) (void);
  bool (* visit) (ArtStackVisitor * visitor);
};

struct _ArtStackVisitor
{
  ArtStackVisitorVTable * vtable;

  guint8 padding[512];

  ArtStackVisitorVTable vtable_storage;

  ArtBacktrace * backtrace;
};

struct _ArtMethod
{
  guint32 declaring_class;
  guint32 access_flags;
};

extern GumTlsKey current_backtrace;

extern void (* perform_art_thread_state_transition) (JNIEnv * env);

extern ArtContext * art_make_context (ArtThread * thread);

extern void art_stack_visitor_init (ArtStackVisitor * visitor, ArtThread * thread, void * context, StackWalkKind walk_kind,
    size_t num_frames, bool check_suspended);
extern void art_stack_visitor_walk_stack (ArtStackVisitor * visitor, bool include_transitions);
extern ArtMethod * art_stack_visitor_get_method (ArtStackVisitor * visitor);
extern void art_stack_visitor_describe_location (StdString * description, ArtStackVisitor * visitor);
extern ArtMethod * translate_method (ArtMethod * method);
extern void translate_location (ArtMethod * method, guint32 pc, const gchar ** source_file, gint32 * line_number);
extern void get_class_location (StdString * result, ArtClass * klass);
extern void cxx_delete (void * mem);
extern unsigned long strtoul (const char * str, char ** endptr, int base);

static bool visit_frame (ArtStackVisitor * visitor);
static void art_stack_frame_destroy (ArtStackFrame * frame);

static void append_jni_type_name (GString * s, const gchar * name, gsize length);

static void std_string_destroy (StdString * str);
static gchar * std_string_get_data (StdString * str);

void
init (void)
{
  current_backtrace = gum_tls_key_new ();
}

void
finalize (void)
{
  gum_tls_key_free (current_backtrace);
}

ArtBacktrace *
_create (JNIEnv * env,
         guint limit)
{
  ArtBacktrace * bt;

  bt = g_new (ArtBacktrace, 1);
  bt->id = g_checksum_new (G_CHECKSUM_SHA1);
  bt->frames = (limit != 0)
      ? g_array_sized_new (FALSE, FALSE, sizeof (ArtStackFrame), limit)
      : g_array_new (FALSE, FALSE, sizeof (ArtStackFrame));
  g_array_set_clear_func (bt->frames, (GDestroyNotify) art_stack_frame_destroy);
  bt->frames_json = NULL;

  gum_tls_key_set_value (current_backtrace, bt);

  perform_art_thread_state_transition (env);

  gum_tls_key_set_value (current_backtrace, NULL);

  return bt;
}

void
_on_thread_state_transition_complete (ArtThread * thread)
{
  ArtContext * context;
  ArtStackVisitor visitor = {
    .vtable_storage = {
      .visit = visit_frame,
    },
  };

  context = art_make_context (thread);

  art_stack_visitor_init (&visitor, thread, context, STACK_WALK_SKIP_INLINED_FRAMES, 0, true);
  visitor.vtable = &visitor.vtable_storage;
  visitor.backtrace = gum_tls_key_get_value (current_backtrace);

  art_stack_visitor_walk_stack (&visitor, false);

  cxx_delete (context);
}

static bool
visit_frame (ArtStackVisitor * visitor)
{
  ArtBacktrace * bt = visitor->backtrace;
  ArtStackFrame frame;
  const gchar * description, * dexpc_part;

  frame.method = art_stack_visitor_get_method (visitor);

  art_stack_visitor_describe_location (&frame.description, visitor);

  description = std_string_get_data (&frame.description);
  if (strstr (description, " '<") != NULL)
    goto skip;

  dexpc_part = strstr (description, " at dex PC 0x");
  if (dexpc_part == NULL)
    goto skip;
  frame.dexpc = strtoul (dexpc_part + 13, NULL, 16);

  g_array_append_val (bt->frames, frame);

  g_checksum_update (bt->id, (guchar *) &frame.method, sizeof (frame.method));
  g_checksum_update (bt->id, (guchar *) &frame.dexpc, sizeof (frame.dexpc));

  return true;

skip:
  std_string_destroy (&frame.description);
  return true;
}

static void
art_stack_frame_destroy (ArtStackFrame * frame)
{
  std_string_destroy (&frame->description);
}

void
_destroy (ArtBacktrace * backtrace)
{
  g_free (backtrace->frames_json);
  g_array_free (backtrace->frames, TRUE);
  g_checksum_free (backtrace->id);
  g_free (backtrace);
}

const gchar *
_get_id (ArtBacktrace * backtrace)
{
  return g_checksum_get_string (backtrace->id);
}

const gchar *
_get_frames (ArtBacktrace * backtrace)
{
  GArray * frames = backtrace->frames;
  JsonBuilder * b;
  guint i;
  JsonNode * root;

  if (backtrace->frames_json != NULL)
    return backtrace->frames_json;

  b = json_builder_new_immutable ();

  json_builder_begin_array (b);

  for (i = 0; i != frames->len; i++)
  {
    ArtStackFrame * frame = &g_array_index (frames, ArtStackFrame, i);
    gchar * description, * ret_type, * paren_open, * paren_close, * arg_types, * token, * method_name, * class_name;
    GString * signature;
    gchar * cursor;
    ArtMethod * translated_method;
    StdString location;
    gsize dexpc;
    const gchar * source_file;
    gint32 line_number;

    description = std_string_get_data (&frame->description);

    ret_type = strchr (description, '\\'') + 1;

    paren_open = strchr (ret_type, '(');
    paren_close = strchr (paren_open, ')');
    *paren_open = '\\0';
    *paren_close = '\\0';

    arg_types = paren_open + 1;

    token = strrchr (ret_type, '.');
    *token = '\\0';

    method_name = token + 1;

    token = strrchr (ret_type, ' ');
    *token = '\\0';

    class_name = token + 1;

    signature = g_string_sized_new (128);

    append_jni_type_name (signature, class_name, method_name - class_name - 1);
    g_string_append_c (signature, ',');
    g_string_append (signature, method_name);
    g_string_append (signature, ",(");

    if (arg_types != paren_close)
    {
      for (cursor = arg_types; cursor != NULL;)
      {
        gsize length;
        gchar * next;

        token = strstr (cursor, ", ");
        if (token != NULL)
        {
          length = token - cursor;
          next = token + 2;
        }
        else
        {
          length = paren_close - cursor;
          next = NULL;
        }

        append_jni_type_name (signature, cursor, length);

        cursor = next;
      }
    }

    g_string_append_c (signature, ')');

    append_jni_type_name (signature, ret_type, class_name - ret_type - 1);

    translated_method = translate_method (frame->method);
    dexpc = (translated_method == frame->method) ? frame->dexpc : 0;

    get_class_location (&location, GSIZE_TO_POINTER (translated_method->declaring_class));

    translate_location (translated_method, dexpc, &source_file, &line_number);

    json_builder_begin_object (b);

    json_builder_set_member_name (b, "signature");
    json_builder_add_string_value (b, signature->str);

    json_builder_set_member_name (b, "origin");
    json_builder_add_string_value (b, std_string_get_data (&location));

    json_builder_set_member_name (b, "className");
    json_builder_add_string_value (b, class_name);

    json_builder_set_member_name (b, "methodName");
    json_builder_add_string_value (b, method_name);

    json_builder_set_member_name (b, "methodFlags");
    json_builder_add_int_value (b, translated_method->access_flags);

    json_builder_set_member_name (b, "fileName");
    json_builder_add_string_value (b, source_file);

    json_builder_set_member_name (b, "lineNumber");
    json_builder_add_int_value (b, line_number);

    json_builder_end_object (b);

    std_string_destroy (&location);
    g_string_free (signature, TRUE);
  }

  json_builder_end_array (b);

  root = json_builder_get_root (b);
  backtrace->frames_json = json_to_string (root, FALSE);
  json_node_unref (root);

  return backtrace->frames_json;
}

static void
append_jni_type_name (GString * s,
                      const gchar * name,
                      gsize length)
{
  gchar shorty = '\\0';
  gsize i;

  switch (name[0])
  {
    case 'b':
      if (strncmp (name, "boolean", length) == 0)
        shorty = 'Z';
      else if (strncmp (name, "byte", length) == 0)
        shorty = 'B';
      break;
    case 'c':
      if (strncmp (name, "char", length) == 0)
        shorty = 'C';
      break;
    case 'd':
      if (strncmp (name, "double", length) == 0)
        shorty = 'D';
      break;
    case 'f':
      if (strncmp (name, "float", length) == 0)
        shorty = 'F';
      break;
    case 'i':
      if (strncmp (name, "int", length) == 0)
        shorty = 'I';
      break;
    case 'l':
      if (strncmp (name, "long", length) == 0)
        shorty = 'J';
      break;
    case 's':
      if (strncmp (name, "short", length) == 0)
        shorty = 'S';
      break;
    case 'v':
      if (strncmp (name, "void", length) == 0)
        shorty = 'V';
      break;
  }

  if (shorty != '\\0')
  {
    g_string_append_c (s, shorty);

    return;
  }

  if (length > 2 && name[length - 2] == '[' && name[length - 1] == ']')
  {
    g_string_append_c (s, '[');
    append_jni_type_name (s, name, length - 2);

    return;
  }

  g_string_append_c (s, 'L');

  for (i = 0; i != length; i++)
  {
    gchar ch = name[i];
    if (ch != '.')
      g_string_append_c (s, ch);
    else
      g_string_append_c (s, '/');
  }

  g_string_append_c (s, ';');
}

static void
std_string_destroy (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  if (is_large)
    cxx_delete (str->large.data);
}

static gchar *
std_string_get_data (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  return is_large ? str->large.data : str->tiny.data;
}
`,{current_backtrace:Memory.alloc(Process.pointerSize),perform_art_thread_state_transition:r,art_make_context:n["art::Thread::GetLongJumpContext"]??n["art::Context::Create"],art_stack_visitor_init:n["art::StackVisitor::StackVisitor"],art_stack_visitor_walk_stack:n["art::StackVisitor::WalkStack"],art_stack_visitor_get_method:n["art::StackVisitor::GetMethod"],art_stack_visitor_describe_location:n["art::StackVisitor::DescribeLocation"],translate_method:he.replacedMethods.translate,translate_location:n["art::Monitor::TranslateLocation"],get_class_location:n["art::mirror::Class::GetLocation"],cxx_delete:n.$delete,strtoul:Process.getModuleByName("libc.so").getExportByName("strtoul")}),i=new NativeFunction(o._create,"pointer",["pointer","uint"],ce),s=new NativeFunction(o._destroy,"void",["pointer"],ce),l={exceptions:"propagate",scheduling:"exclusive"},a=new NativeFunction(o._get_id,"pointer",["pointer"],l),c=new NativeFunction(o._get_frames,"pointer",["pointer"],l),d=Ko(t,e,o._on_thread_state_transition_complete);o._performData=d,r.writePointer(d),o.backtrace=(h,u)=>{let g=i(h,u),_=new ar(g);return Script.bindWeak(_,p.bind(null,g)),_};function p(h){s(h)}return o.getId=h=>a(h).readUtf8String(),o.getFrames=h=>JSON.parse(c(h).readUtf8String()),o}var ar=class{constructor(e){this.handle=e}get id(){return Ct.getId(this.handle)}get frames(){return Ct.getFrames(this.handle)}};function Sr(){Qt.forEach(t=>{t.vtablePtr.writePointer(t.vtable),t.vtableCountPtr.writeS32(t.vtableCount)}),Qt.clear();for(let t of Ho.splice(0))t.deactivate();for(let t of hr.splice(0))t.revert()}function Er(t){return Wo(t,"art::jni::JniIdManager::DecodeMethodId")}function Ro(t){return Wo(t,"art::jni::JniIdManager::DecodeFieldId")}function Wo(t,e){let n=ne(),r=Jo(n).offset,o=r.jniIdManager,i=r.jniIdsIndirection;if(o!==null&&i!==null){let s=n.artRuntime;if(s.add(i).readInt()!==Gl){let a=s.add(o).readPointer();return n[e](a,t)}}return t}var bd={ia32:vd,x64:Sd,arm:Ed,arm64:wd};function vd(t,e,n,r,o){let i=ut(o).offset,s=Ie(o).offset,l;return Memory.patchCode(t,128,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),p=[15,174,4,36],h=[15,174,12,36];c.putPushax(),c.putMovRegReg("ebp","esp"),c.putAndRegU32("esp",4294967280),c.putSubRegImm("esp",512),c.putBytes(p),c.putMovRegFsU32Ptr("ebx",i.self),c.putCallAddressWithAlignedArguments(he.replacedMethods.findReplacementFromQuickCode,["eax","ebx"]),c.putTestRegReg("eax","eax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("ebp",7*4,"eax"),c.putLabel("restore_registers"),c.putBytes(h),c.putMovRegReg("esp","ebp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("eax",s.quickCode),c.flush()}),l}function Sd(t,e,n,r,o){let i=ut(o).offset,s=Ie(o).offset,l;return Memory.patchCode(t,256,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),p=[15,174,4,36],h=[15,174,12,36];c.putPushax(),c.putMovRegReg("rbp","rsp"),c.putAndRegU32("rsp",4294967280),c.putSubRegImm("rsp",512),c.putBytes(p),c.putMovRegGsU32Ptr("rbx",i.self),c.putCallAddressWithAlignedArguments(he.replacedMethods.findReplacementFromQuickCode,["rdi","rbx"]),c.putTestRegReg("rax","rax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("rbp",8*8,"rax"),c.putLabel("restore_registers"),c.putBytes(h),c.putMovRegReg("rsp","rbp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("rdi",s.quickCode),c.flush()}),l}function Ed(t,e,n,r,o){let i=Ie(o).offset,s=e.and(pr),l;return Memory.patchCode(t,128,a=>{let c=new ThumbWriter(a,{pc:t}),d=new ThumbRelocator(s,c),p=[45,237,16,10],h=[189,236,16,10];c.putPushRegs(["r1","r2","r3","r5","r6","r7","r8","r10","r11","lr"]),c.putBytes(p),c.putSubRegRegImm("sp","sp",8),c.putStrRegRegOffset("r0","sp",0),c.putCallAddressWithArguments(he.replacedMethods.findReplacementFromQuickCode,["r0","r9"]),c.putCmpRegImm("r0",0),c.putBCondLabel("eq","restore_registers"),c.putStrRegRegOffset("r0","sp",0),c.putLabel("restore_registers"),c.putLdrRegRegOffset("r0","sp",0),c.putAddRegRegImm("sp","sp",8),c.putBytes(h),c.putPopRegs(["lr","r11","r10","r8","r7","r6","r5","r3","r2","r1"]),c.putBCondLabel("ne","invoke_replacement");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putLdrRegAddress("pc",e.add(l)),c.putLabel("invoke_replacement"),c.putLdrRegRegOffset("pc","r0",i.quickCode),c.flush()}),l}function wd(t,e,n,{availableScratchRegs:r},o){let i=Ie(o).offset,s;return Memory.patchCode(t,256,l=>{let a=new Arm64Writer(l,{pc:t}),c=new Arm64Relocator(e,a);a.putPushRegReg("d0","d1"),a.putPushRegReg("d2","d3"),a.putPushRegReg("d4","d5"),a.putPushRegReg("d6","d7"),a.putPushRegReg("x1","x2"),a.putPushRegReg("x3","x4"),a.putPushRegReg("x5","x6"),a.putPushRegReg("x7","x20"),a.putPushRegReg("x21","x22"),a.putPushRegReg("x23","x24"),a.putPushRegReg("x25","x26"),a.putPushRegReg("x27","x28"),a.putPushRegReg("x29","lr"),a.putSubRegRegImm("sp","sp",16),a.putStrRegRegOffset("x0","sp",0),a.putCallAddressWithArguments(he.replacedMethods.findReplacementFromQuickCode,["x0","x19"]),a.putCmpRegReg("x0","xzr"),a.putBCondLabel("eq","restore_registers"),a.putStrRegRegOffset("x0","sp",0),a.putLabel("restore_registers"),a.putLdrRegRegOffset("x0","sp",0),a.putAddRegRegImm("sp","sp",16),a.putPopRegReg("x29","lr"),a.putPopRegReg("x27","x28"),a.putPopRegReg("x25","x26"),a.putPopRegReg("x23","x24"),a.putPopRegReg("x21","x22"),a.putPopRegReg("x7","x20"),a.putPopRegReg("x5","x6"),a.putPopRegReg("x3","x4"),a.putPopRegReg("x1","x2"),a.putPopRegReg("d6","d7"),a.putPopRegReg("d4","d5"),a.putPopRegReg("d2","d3"),a.putPopRegReg("d0","d1"),a.putBCondLabel("ne","invoke_replacement");do s=c.readOne();while(s<n&&!c.eoi);if(c.writeAll(),!c.eoi){let d=Array.from(r)[0];a.putLdrRegAddress(d,e.add(s)),a.putBrReg(d)}a.putLabel("invoke_replacement"),a.putLdrRegRegOffset("x16","x0",i.quickCode),a.putBrReg("x16"),a.flush()}),s}var Cd={ia32:Fo,x64:Fo,arm:kd,arm64:Id};function Fo(t,e,n){Memory.patchCode(t,16,r=>{let o=new X86Writer(r,{pc:t});o.putJmpAddress(e),o.flush()})}function kd(t,e,n){let r=t.and(pr);Memory.patchCode(r,16,o=>{let i=new ThumbWriter(o,{pc:r});i.putLdrRegAddress("pc",e.or(1)),i.flush()})}function Id(t,e,n){Memory.patchCode(t,16,r=>{let o=new Arm64Writer(r,{pc:t});n===16?o.putLdrRegAddress("x16",e):o.putAdrpRegAddress("x16",e),o.putBrReg("x16"),o.flush()})}var Nd={ia32:5,x64:16,arm:8,arm64:16},en=class{constructor(e){this.quickCode=e,this.quickCodeAddress=Process.arch==="arm"?e.and(pr):e,this.redirectSize=0,this.trampoline=null,this.overwrittenPrologue=null,this.overwrittenPrologueLength=0}_canRelocateCode(e,n){let r=sr[Process.arch],o=nd[Process.arch],{quickCodeAddress:i}=this,s=new r(i),l=new o(i,s),a;if(Process.arch==="arm64"){let c=new Set(["x16","x17"]);do{let d=l.readOne(),p=new Set(c),{read:h,written:u}=l.input.regsAccessed;for(let g of[h,u])for(let _ of g){let y;_.startsWith("w")?y="x"+_.substring(1):y=_,p.delete(y)}if(p.size===0)break;a=d,c=p}while(a<e&&!l.eoi);n.availableScratchRegs=c}else do a=l.readOne();while(a<e&&!l.eoi);return a>=e}_allocateTrampoline(){Zt===null&&(Zt=xn(I===4?128:256));let e=Nd[Process.arch],n,r,o=1,i={};if(I===4||this._canRelocateCode(e,i))n=e,r={};else{let s;Process.arch==="x64"?(n=5,s=$l):Process.arch==="arm64"&&(n=8,s=Hl,o=4096),r={near:this.quickCodeAddress,maxDistance:s}}return this.redirectSize=n,this.trampoline=Zt.allocateSlice(r,o),i}_destroyTrampoline(){Zt.freeSlice(this.trampoline)}activate(e){let n=this._allocateTrampoline(),{trampoline:r,quickCode:o,redirectSize:i}=this,s=bd[Process.arch],l=s(r,o,i,n,e);this.overwrittenPrologueLength=l,this.overwrittenPrologue=Memory.dup(this.quickCodeAddress,l);let a=Cd[Process.arch];a(o,r,i)}deactivate(){let{quickCodeAddress:e,overwrittenPrologueLength:n}=this,r=sr[Process.arch];Memory.patchCode(e,n,o=>{let i=new r(o,{pc:e}),{overwrittenPrologue:s}=this;i.putBytes(s.readByteArray(n)),i.flush()}),this._destroyTrampoline()}};function Td(t){let e=ne(),{module:n,artClassLinker:r}=e;return t.equals(r.quickGenericJniTrampoline)||t.equals(r.quickToInterpreterBridgeTrampoline)||t.equals(r.quickResolutionTrampoline)||t.equals(r.quickImtConflictTrampoline)||t.compare(n.base)>=0&&t.compare(n.base.add(n.size))<0}var lr=class{constructor(e){let n=Er(e);this.methodId=n,this.originalMethod=null,this.hookedMethodId=n,this.replacementMethodId=null,this.interceptor=null}replace(e,n,r,o,i){let{kAccCompileDontBother:s,artNterpEntryPoint:l}=i;this.originalMethod=zo(this.methodId,o);let a=this.originalMethod.accessFlags;if((a&Jl)!==0&&xd()){let u=this.originalMethod.jniCode;this.hookedMethodId=u.add(2*I).readPointer(),this.originalMethod=zo(this.hookedMethodId,o)}let{hookedMethodId:c}=this,d=Md(c,o);this.replacementMethodId=d,Wt(d,{jniCode:e,accessFlags:(a&~(zl|Fl|ko)|Kt|s)>>>0,quickCode:i.artClassLinker.quickGenericJniTrampoline,interpreterCode:i.artInterpreterToCompiledCodeBridge},o);let p=Bo|Ul|ko;(a&Kt)===0&&(p|=Dl),Wt(c,{accessFlags:(a&~p|s)>>>0},o);let h=this.originalMethod.quickCode;if(l!==null&&h.equals(l)&&Wt(c,{quickCode:i.artQuickToInterpreterBridge},o),!Td(h)){let u=new en(h);u.activate(o),this.interceptor=u}he.replacedMethods.set(c,d),rd(c,o)}revert(e){let{hookedMethodId:n,interceptor:r}=this;Wt(n,this.originalMethod,e),he.replacedMethods.delete(n),r!==null&&(r.deactivate(),this.interceptor=null)}resolveTarget(e,n,r,o){return this.hookedMethodId}};function xd(){return fe()<28}function zo(t,e){let r=Ie(e).offset;return["jniCode","accessFlags","quickCode","interpreterCode"].reduce((o,i)=>{let s=r[i];if(s===void 0)return o;let l=t.add(s),a=i==="accessFlags"?Ll:Ml;return o[i]=a.call(l),o},{})}function Wt(t,e,n){let o=Ie(n).offset;Object.keys(e).forEach(i=>{let s=o[i];if(s===void 0)return;let l=t.add(s);(i==="accessFlags"?Al:Ol).call(l,e[i])})}var cr=class{constructor(e){this.methodId=e,this.originalMethod=null}replace(e,n,r,o,i){let{methodId:s}=this;this.originalMethod=Memory.dup(s,Hn);let l=r.reduce((h,u)=>h+u.size,0);n&&l++;let a=(s.add(Io).readU32()|Kt)>>>0,c=l,d=0,p=l;s.add(Io).writeU32(a),s.add(Yl).writeU16(c),s.add(Xl).writeU16(d),s.add(ec).writeU16(p),s.add(nc).writeU32(Ld(s)),i.dvmUseJNIBridge(s,e)}revert(e){Memory.copy(this.methodId,this.originalMethod,Hn)}resolveTarget(e,n,r,o){let i=r.handle.add(Vo).readPointer(),s;if(n)s=o.dvmDecodeIndirectRef(i,e.$h);else{let h=e.$borrowClassHandle(r);s=o.dvmDecodeIndirectRef(i,h.value),h.unref(r)}let l;n?l=s.add(Kl).readPointer():l=s;let a=l.toString(16),c=Qt.get(a);if(c===void 0){let h=l.add(ql),u=l.add(Wl),g=h.readPointer(),_=u.readS32(),y=_*I,v=Memory.alloc(2*y);Memory.copy(v,g,y),h.writePointer(v),c={classObject:l,vtablePtr:h,vtableCountPtr:u,vtable:g,vtableCount:_,shadowVtable:v,shadowVtableCount:_,targetMethods:new Map},Qt.set(a,c)}let d=this.methodId.toString(16),p=c.targetMethods.get(d);if(p===void 0){p=Memory.dup(this.originalMethod,Hn);let h=c.shadowVtableCount++;c.shadowVtable.add(h*I).writePointer(p),p.add(Ql).writeU16(h),c.vtableCountPtr.writeS32(c.shadowVtableCount),c.targetMethods.set(d,p)}return p}};function Ld(t){if(Process.arch!=="ia32")return No;let e=t.add(tc).readPointer().readCString();if(e===null||e.length===0||e.length>65535)return No;let n;switch(e[0]){case"V":n=rc;break;case"F":n=oc;break;case"D":n=ic;break;case"J":n=sc;break;case"Z":case"B":n=dc;break;case"C":n=cc;break;case"S":n=lc;break;default:n=ac;break}let r=0;for(let o=e.length-1;o>0;o--){let i=e[o];r+=i==="D"||i==="J"?2:1}return n<<uc|r}function Md(t,e){let n=ne();if(fe()<23){let r=n["art::Thread::CurrentFromGdb"]();return n["art::mirror::Object::Clone"](t,r)}return Memory.dup(t,Ie(e).size)}function wr(t,e,n){qo(t,e,nr,n)}function Cr(t,e){qo(t,e,tr)}function kr(t,e){let n=ne();if(fe()<26)throw new Error("This API is only available on Android >= 8.0");Ae(t,e,r=>{n["art::Runtime::DeoptimizeBootImage"](n.artRuntime)})}function qo(t,e,n,r){let o=ne();if(fe()<24)throw new Error("This API is only available on Android >= 7.0");Ae(t,e,i=>{if(fe()<30){if(!o.isJdwpStarted()){let l=Ad(o);vc.push(l)}o.isDebuggerActive()||o["art::Dbg::GoActive"]();let s=Memory.alloc(8+I);switch(s.writeU32(n),n){case tr:break;case nr:s.add(8).writePointer(r);break;default:throw new Error("Unsupported deoptimization kind")}o["art::Dbg::RequestDeoptimization"](s),o["art::Dbg::ManageDeoptimization"]()}else{let s=o.artInstrumentation;if(s===null)throw new Error("Unable to find Instrumentation class in ART; please file a bug");let l=o["art::Instrumentation::EnableDeoptimization"];switch(l!==void 0&&(s.add(mc().offset.deoptimizationEnabled).readU8()||l(s)),n){case tr:o["art::Instrumentation::DeoptimizeEverything"](s,Memory.allocUtf8String("frida"));break;case nr:o["art::Instrumentation::Deoptimize"](s,r);break;default:throw new Error("Unsupported deoptimization kind")}}})}var dr=class{constructor(){let e=Process.getModuleByName("libart.so"),n=e.getExportByName("_ZN3art4JDWP12JdwpAdbState6AcceptEv"),r=e.getExportByName("_ZN3art4JDWP12JdwpAdbState15ReceiveClientFdEv"),o=Do(),i=Do();this._controlFd=o[0],this._clientFd=i[0];let s=null;s=Interceptor.attach(n,function(l){let a=l[0];Memory.scanSync(a.add(8252),256,"00 ff ff ff ff 00")[0].address.add(1).writeS32(o[1]),s.detach()}),Interceptor.replace(r,new NativeCallback(function(l){return Interceptor.revert(r),i[1]},"int",["pointer"])),Interceptor.flush(),this._handshakeRequest=this._performHandshake()}async _performHandshake(){let e=new UnixInputStream(this._clientFd,{autoClose:!1}),n=new UnixOutputStream(this._clientFd,{autoClose:!1}),r=[74,68,87,80,45,72,97,110,100,115,104,97,107,101];try{await n.writeAll(r),await e.readAll(r.length)}catch{}}};function Ad(t){let e=new dr;t["art::Dbg::SetJdwpAllowed"](1);let n=Od();t["art::Dbg::ConfigureJdwp"](n);let r=t["art::InternalDebuggerControlCallback::StartDebugger"];return r!==void 0?r(NULL):t["art::Dbg::StartJdwp"](),e}function Od(){let t=fe()<28?2:3,e=0,n=t,r=!0,o=!1,i=e,s=8+It+2,l=Memory.alloc(s);return l.writeU32(n).add(4).writeU8(r?1:0).add(1).writeU8(o?1:0).add(1).add(It).writeU16(i),l}function Do(){Kn===null&&(Kn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("socketpair"),"int",["int","int","int","pointer"]));let t=Memory.alloc(8);if(Kn(fc,hc,0,t)===-1)throw new Error("Unable to create socketpair for JDWP");return[t.readS32(),t.add(4).readS32()]}function jd(t){let e=Cc().offset,n=t.vm.add(e.globalsLock),r=t.vm.add(e.globals),o=t["art::IndirectReferenceTable::Add"],i=t["art::ReaderWriterMutex::ExclusiveLock"],s=t["art::ReaderWriterMutex::ExclusiveUnlock"],l=0;return function(a,c,d){i(n,c);try{return o(r,l,d)}finally{s(n,c)}}}function Pd(t){let e=t["art::Thread::DecodeJObject"];if(e===void 0)throw new Error("art::Thread::DecodeJObject is not available; please file a bug");return function(n,r,o){return e(r,o)}}var Rd={ia32:Uo,x64:Uo,arm:Fd,arm64:zd};function Ko(t,e,n){let r=ne(),o=e.handle.readPointer(),i,s=r.find("_ZN3art3JNIILb1EE14ExceptionClearEP7_JNIEnv");s!==null?i=s:i=o.add(rn).readPointer();let l,a=r.find("_ZN3art3JNIILb1EE10FatalErrorEP7_JNIEnvPKc");a!==null?l=a:l=o.add(Zl).readPointer();let c=Rd[Process.arch];if(c===void 0)throw new Error("Not yet implemented for "+Process.arch);let d=null,p=ut(t).offset,h=p.exception,u=new Set,g=p.isExceptionReportedToInstrumentation;g!==null&&u.add(g);let _=p.throwLocation;_!==null&&(u.add(_),u.add(_+I),u.add(_+2*I));let y=65536,v=Memory.alloc(y);return Memory.patchCode(v,y,S=>{d=c(S,v,i,l,h,u,n)}),d._code=v,d._callback=n,d}function Uo(t,e,n,r,o,i,s){let l={},a=new Set,c=[n];for(;c.length>0;){let _=c.shift();if(Object.values(l).some(({begin:L,end:R})=>_.compare(L)>=0&&_.compare(R)<0))continue;let v=_.toString(),S={begin:_},C=null,x=!1;do{if(_.equals(r)){x=!0;break}let L=Instruction.parse(_);C=L;let R=l[L.address.toString()];if(R!==void 0){delete l[R.begin.toString()],l[v]=R,R.begin=S.begin,S=null;break}let A=null;switch(L.mnemonic){case"jmp":A=ptr(L.operands[0].value),x=!0;break;case"je":case"jg":case"jle":case"jne":case"js":A=ptr(L.operands[0].value);break;case"ret":x=!0;break}A!==null&&(a.add(A.toString()),c.push(A),c.sort((j,k)=>j.compare(k))),_=L.next}while(!x);S!==null&&(S.end=C.address.add(C.size),l[v]=S)}let d=Object.keys(l).map(_=>l[_]);d.sort((_,y)=>_.begin.compare(y.begin));let p=l[n.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let h=new X86Writer(t,{pc:e}),u=!1,g=null;return d.forEach(_=>{let y=_.end.sub(_.begin).toInt32(),v=new X86Relocator(_.begin,h),S;for(;(S=v.readOne())!==0;){let C=v.input,{mnemonic:x}=C,L=C.address.toString();a.has(L)&&h.putLabel(L);let R=!0;switch(x){case"jmp":h.putJmpNearLabel(Ee(C.operands[0])),R=!1;break;case"je":case"jg":case"jle":case"jne":case"js":h.putJccNearLabel(x,Ee(C.operands[0]),"no-hint"),R=!1;break;case"mov":{let[A,j]=C.operands;if(A.type==="mem"&&j.type==="imm"){let k=A.value,M=k.disp;if(M===o&&j.value.valueOf()===0){if(g=k.base,h.putPushfx(),h.putPushax(),h.putMovRegReg("xbp","xsp"),I===4)h.putAndRegU32("esp",4294967280);else{let D=g!=="rdi"?"rdi":"rsi";h.putMovRegU64(D,uint64("0xfffffffffffffff0")),h.putAndRegReg("rsp",D)}h.putCallAddressWithAlignedArguments(s,[g]),h.putMovRegReg("xsp","xbp"),h.putPopax(),h.putPopfx(),u=!0,R=!1}else i.has(M)&&k.base===g&&(R=!1)}break}case"call":{let A=C.operands[0];A.type==="mem"&&A.value.disp===rn&&(I===4?(h.putPopReg("eax"),h.putMovRegRegOffsetPtr("eax","eax",4),h.putPushReg("eax")):h.putMovRegRegOffsetPtr("rdi","rdi",8),h.putCallAddressWithArguments(s,[]),u=!0,R=!1);break}}if(R?v.writeAll():v.skipOne(),S===y)break}v.dispose()}),h.dispose(),u||Ir(),new NativeFunction(e,"void",["pointer"],ce)}function Fd(t,e,n,r,o,i,s){let l={},a=new Set,c=ptr(1).not(),d=[n];for(;d.length>0;){let v=d.shift();if(Object.values(l).some(({begin:M,end:D})=>v.compare(M)>=0&&v.compare(D)<0))continue;let C=v.and(c),x=C.toString(),L=v.and(1),R={begin:C},A=null,j=!1,k=0;do{if(v.equals(r)){j=!0;break}let M=Instruction.parse(v),{mnemonic:D}=M;A=M;let U=v.and(c).toString(),W=l[U];if(W!==void 0){delete l[W.begin.toString()],l[x]=W,W.begin=R.begin,R=null;break}let q=k===0,T=null;switch(D){case"b":T=ptr(M.operands[0].value),j=q;break;case"beq.w":case"beq":case"bne":case"bne.w":case"bgt":T=ptr(M.operands[0].value);break;case"cbz":case"cbnz":T=ptr(M.operands[1].value);break;case"pop.w":q&&(j=M.operands.filter(w=>w.value==="pc").length===1);break}switch(D){case"it":k=1;break;case"itt":k=2;break;case"ittt":k=3;break;case"itttt":k=4;break;default:k>0&&k--;break}T!==null&&(a.add(T.toString()),d.push(T.or(L)),d.sort((w,J)=>w.compare(J))),v=M.next}while(!j);R!==null&&(R.end=A.address.add(A.size),l[x]=R)}let p=Object.keys(l).map(v=>l[v]);p.sort((v,S)=>v.begin.compare(S.begin));let h=l[n.and(c).toString()];p.splice(p.indexOf(h),1),p.unshift(h);let u=new ThumbWriter(t,{pc:e}),g=!1,_=null,y=null;return p.forEach(v=>{let S=new ThumbRelocator(v.begin,u),C=v.begin,x=v.end,L=0;do{if(S.readOne()===0)throw new Error("Unexpected end of block");let A=S.input;C=A.address,L=A.size;let{mnemonic:j}=A,k=C.toString();a.has(k)&&u.putLabel(k);let M=!0;switch(j){case"b":u.putBLabel(Ee(A.operands[0])),M=!1;break;case"beq.w":u.putBCondLabelWide("eq",Ee(A.operands[0])),M=!1;break;case"bne.w":u.putBCondLabelWide("ne",Ee(A.operands[0])),M=!1;break;case"beq":case"bne":case"bgt":u.putBCondLabelWide(j.substr(1),Ee(A.operands[0])),M=!1;break;case"cbz":{let D=A.operands;u.putCbzRegLabel(D[0].value,Ee(D[1])),M=!1;break}case"cbnz":{let D=A.operands;u.putCbnzRegLabel(D[0].value,Ee(D[1])),M=!1;break}case"str":case"str.w":{let D=A.operands[1].value,N=D.disp;if(N===o){_=D.base;let U=_!=="r4"?"r4":"r5",W=["r0","r1","r2","r3",U,"r9","r12","lr"];u.putPushRegs(W),u.putMrsRegReg(U,"apsr-nzcvq"),u.putCallAddressWithArguments(s,[_]),u.putMsrRegReg("apsr-nzcvq",U),u.putPopRegs(W),g=!0,M=!1}else i.has(N)&&D.base===_&&(M=!1);break}case"ldr":{let[D,N]=A.operands;if(N.type==="mem"){let U=N.value;U.base[0]==="r"&&U.disp===rn&&(y=D.value)}break}case"blx":A.operands[0].value===y&&(u.putLdrRegRegOffset("r0","r0",4),u.putCallAddressWithArguments(s,["r0"]),g=!0,y=null,M=!1);break}M?S.writeAll():S.skipOne()}while(!C.add(L).equals(x));S.dispose()}),u.dispose(),g||Ir(),new NativeFunction(e.or(1),"void",["pointer"],ce)}function zd(t,e,n,r,o,i,s){let l={},a=new Set,c=[n];for(;c.length>0;){let v=c.shift();if(Object.values(l).some(({begin:A,end:j})=>v.compare(A)>=0&&v.compare(j)<0))continue;let C=v.toString(),x={begin:v},L=null,R=!1;do{if(v.equals(r)){R=!0;break}let A;try{A=Instruction.parse(v)}catch(M){if(v.readU32()===0){R=!0;break}else throw M}L=A;let j=l[A.address.toString()];if(j!==void 0){delete l[j.begin.toString()],l[C]=j,j.begin=x.begin,x=null;break}let k=null;switch(A.mnemonic){case"b":k=ptr(A.operands[0].value),R=!0;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":k=ptr(A.operands[0].value);break;case"cbz":case"cbnz":k=ptr(A.operands[1].value);break;case"tbz":case"tbnz":k=ptr(A.operands[2].value);break;case"ret":R=!0;break}k!==null&&(a.add(k.toString()),c.push(k),c.sort((M,D)=>M.compare(D))),v=A.next}while(!R);x!==null&&(x.end=L.address.add(L.size),l[C]=x)}let d=Object.keys(l).map(v=>l[v]);d.sort((v,S)=>v.begin.compare(S.begin));let p=l[n.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let h=new Arm64Writer(t,{pc:e});h.putBLabel("performTransition");let u=e.add(h.offset);h.putPushAllXRegisters(),h.putCallAddressWithArguments(s,["x0"]),h.putPopAllXRegisters(),h.putRet(),h.putLabel("performTransition");let g=!1,_=null,y=null;return d.forEach(v=>{let S=v.end.sub(v.begin).toInt32(),C=new Arm64Relocator(v.begin,h),x;for(;(x=C.readOne())!==0;){let L=C.input,{mnemonic:R}=L,A=L.address.toString();a.has(A)&&h.putLabel(A);let j=!0;switch(R){case"b":h.putBLabel(Ee(L.operands[0])),j=!1;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":h.putBCondLabel(R.substr(2),Ee(L.operands[0])),j=!1;break;case"cbz":{let k=L.operands;h.putCbzRegLabel(k[0].value,Ee(k[1])),j=!1;break}case"cbnz":{let k=L.operands;h.putCbnzRegLabel(k[0].value,Ee(k[1])),j=!1;break}case"tbz":{let k=L.operands;h.putTbzRegImmLabel(k[0].value,k[1].value.valueOf(),Ee(k[2])),j=!1;break}case"tbnz":{let k=L.operands;h.putTbnzRegImmLabel(k[0].value,k[1].value.valueOf(),Ee(k[2])),j=!1;break}case"str":{let k=L.operands,M=k[0].value,D=k[1].value,N=D.disp;M==="xzr"&&N===o?(_=D.base,h.putPushRegReg("x0","lr"),h.putMovRegReg("x0",_),h.putBlImm(u),h.putPopRegReg("x0","lr"),g=!0,j=!1):i.has(N)&&D.base===_&&(j=!1);break}case"ldr":{let k=L.operands,M=k[1].value;M.base[0]==="x"&&M.disp===rn&&(y=k[0].value);break}case"blr":L.operands[0].value===y&&(h.putLdrRegRegOffset("x0","x0",8),h.putCallAddressWithArguments(s,["x0"]),g=!0,y=null,j=!1);break}if(j?C.writeAll():C.skipOne(),x===S)break}C.dispose()}),h.dispose(),g||Ir(),new NativeFunction(e,"void",["pointer"],ce)}function Ir(){throw new Error("Unable to parse ART internals; please file a bug")}function Dd(t){let e=t["art::ArtMethod::PrettyMethod"];e!==void 0&&(Interceptor.attach(e.impl,he.hooks.ArtMethod.prettyMethod),Interceptor.flush())}function Ee(t){return ptr(t.value).toString()}function Ud(t,e){return new NativeFunction(t,"pointer",e,ce)}function Bd(t,e){let n=new NativeFunction(t,"void",["pointer"].concat(e),ce);return function(){let r=Memory.alloc(I);return n(r,...arguments),r.readPointer()}}function qt(t,e){let{arch:n}=Process;switch(n){case"ia32":case"arm64":{let r;n==="ia32"?r=dt(64,s=>{let l=1+e.length,a=l*4;s.putSubRegImm("esp",a);for(let c=0;c!==l;c++){let d=c*4;s.putMovRegRegOffsetPtr("eax","esp",a+4+d),s.putMovRegOffsetPtrReg("esp",d,"eax")}s.putCallAddress(t),s.putAddRegImm("esp",a-4),s.putRet()}):r=dt(32,s=>{s.putMovRegReg("x8","x0"),e.forEach((l,a)=>{s.putMovRegReg("x"+a,"x"+(a+1))}),s.putLdrRegAddress("x7",t),s.putBrReg("x7")});let o=new NativeFunction(r,"void",["pointer"].concat(e),ce),i=function(...s){o(...s)};return i.handle=r,i.impl=t,i}default:{let r=new NativeFunction(t,"void",["pointer"].concat(e),ce);return r.impl=t,r}}}var tn=class{constructor(){this.handle=Memory.alloc(It)}dispose(){let[e,n]=this._getData();n||ne().$delete(e)}disposeToString(){let e=this.toString();return this.dispose(),e}toString(){let[e]=this._getData();return e.readUtf8String()}_getData(){let e=this.handle,n=(e.readU8()&1)===0;return[n?e.add(1):e.add(2*I).readPointer(),n]}},ur=class{$delete(){this.dispose(),ne().$delete(this)}constructor(e,n){this.handle=e,this._begin=e,this._end=e.add(I),this._storage=e.add(2*I),this._elementSize=n}init(){this.begin=NULL,this.end=NULL,this.storage=NULL}dispose(){ne().$delete(this.begin)}get begin(){return this._begin.readPointer()}set begin(e){this._begin.writePointer(e)}get end(){return this._end.readPointer()}set end(e){this._end.writePointer(e)}get storage(){return this._storage.readPointer()}set storage(e){this._storage.writePointer(e)}get size(){return this.end.sub(this.begin).toInt32()/this._elementSize}},Nt=class t extends ur{static $new(){let e=new t(ne().$new(pc));return e.init(),e}constructor(e){super(e,I)}get handles(){let e=[],n=this.begin,r=this.end;for(;!n.equals(r);)e.push(n.readPointer()),n=n.add(I);return e}},Vd=0,Qo=I,Yo=Qo+4,Jd=-1,nn=class t{$delete(){this.dispose(),ne().$delete(this)}constructor(e){this.handle=e,this._link=e.add(Vd),this._numberOfReferences=e.add(Qo)}init(e,n){this.link=e,this.numberOfReferences=n}dispose(){}get link(){return new t(this._link.readPointer())}set link(e){this._link.writePointer(e)}get numberOfReferences(){return this._numberOfReferences.readS32()}set numberOfReferences(e){this._numberOfReferences.writeS32(e)}},Xo=Zd(Yo),ei=Xo+I,Gd=ei+I,Tt=class t extends nn{static $new(e,n){let r=new t(ne().$new(Gd));return r.init(e,n),r}constructor(e){super(e),this._self=e.add(Xo),this._currentScope=e.add(ei);let o=(64-I-4-4)/4;this._scopeLayout=kt.layoutForCapacity(o),this._topHandleScopePtr=null}init(e,n){let r=e.add(ut(n).offset.topHandleScope);this._topHandleScopePtr=r,super.init(r.readPointer(),Jd),this.self=e,this.currentScope=kt.$new(this._scopeLayout),r.writePointer(this)}dispose(){this._topHandleScopePtr.writePointer(this.link);let e;for(;(e=this.currentScope)!==null;){let n=e.link;e.$delete(),this.currentScope=n}}get self(){return this._self.readPointer()}set self(e){this._self.writePointer(e)}get currentScope(){let e=this._currentScope.readPointer();return e.isNull()?null:new kt(e,this._scopeLayout)}set currentScope(e){this._currentScope.writePointer(e)}newHandle(e){return this.currentScope.newHandle(e)}},kt=class t extends nn{static $new(e){let n=new t(ne().$new(e.size),e);return n.init(),n}constructor(e,n){super(e);let{offset:r}=n;this._refsStorage=e.add(r.refsStorage),this._pos=e.add(r.pos),this._layout=n}init(){super.init(NULL,this._layout.numberOfReferences),this.pos=0}get pos(){return this._pos.readU32()}set pos(e){this._pos.writeU32(e)}newHandle(e){let n=this.pos,r=this._refsStorage.add(n*4);return r.writeS32(e.toInt32()),this.pos=n+1,r}static layoutForCapacity(e){let n=Yo,r=n+e*4;return{size:r+4,numberOfReferences:e,offset:{refsStorage:n,pos:r}}}},$d={arm:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[26625,18947,17041,53505,19202,18200,18288,48896],s=i.length*2,l=s+4,a=l+4;return Memory.patchCode(r,a,function(c){i.forEach((d,p)=>{c.add(p*2).writeU16(d)}),c.add(s).writeS32(t),c.add(l).writePointer(o)}),r.or(1)},arm64:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[3107979265,402653378,1795293247,1409286241,1476395139,3592355936,3596551104],s=i.length*4,l=s+4,a=l+8;return Memory.patchCode(r,a,function(c){i.forEach((d,p)=>{c.add(p*4).writeU32(d)}),c.add(s).writeS32(t),c.add(l).writePointer(o)}),r}};function Nr(t,e){return($d[Process.arch]||Hd)(t,e)}function Hd(t,e){return new NativeCallback(n=>{n.readS32()===t&&e(n)},"void",["pointer","pointer"])}function Zd(t){let e=t%I;return e!==0?t+I-e:t}var Wd=4,{pointerSize:te}=Process,qd=256,Kd=65536,Qd=131072,Yd=33554432,Xd=67108864,eu=134217728,et={exceptions:"propagate"},oi=ye(fu),tu=ye(mu),nu=ye(du),Tr=null,xr=!1,ln=new Map,Lt=new Map;function De(){return Tr===null&&(Tr=ru()),Tr}function ru(){let t=Process.enumerateModules().filter(a=>/jvm.(dll|dylib|so)$/.test(a.name));if(t.length===0)return null;let e=t[0],n={flavor:"jvm"},r=Process.platform==="windows"?[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]],"VMThread::execute":["VMThread::execute","void",["pointer"]],"Method::size":["Method::size","int",["int"]],"Method::set_native_function":["Method::set_native_function","void",["pointer","pointer","int"]],"Method::clear_native_function":["Method::clear_native_function","void",["pointer"]],"Method::jmethod_id":["Method::jmethod_id","pointer",["pointer"]],"ClassLoaderDataGraph::classes_do":["ClassLoaderDataGraph::classes_do","void",["pointer"]],"NMethodSweeper::sweep_code_cache":["NMethodSweeper::sweep_code_cache","void",[]],"OopMapCache::flush_obsolete_entries":["OopMapCache::flush_obsolete_entries","void",["pointer"]]},variables:{"VM_RedefineClasses::`vftable'":function(a){this.vtableRedefineClasses=a},"VM_RedefineClasses::doit":function(a){this.redefineClassesDoIt=a},"VM_RedefineClasses::doit_prologue":function(a){this.redefineClassesDoItPrologue=a},"VM_RedefineClasses::doit_epilogue":function(a){this.redefineClassesDoItEpilogue=a},"VM_RedefineClasses::allow_nested_vm_operations":function(a){this.redefineClassesAllow=a},"NMethodSweeper::_traversals":function(a){this.traversals=a},"NMethodSweeper::_should_sweep":function(a){this.shouldSweep=a}},optionals:[]}]:[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],_ZN6Method4sizeEb:["Method::size","int",["int"]],_ZN6Method19set_native_functionEPhb:["Method::set_native_function","void",["pointer","pointer","int"]],_ZN6Method21clear_native_functionEv:["Method::clear_native_function","void",["pointer"]],_ZN6Method24restore_unshareable_infoEP10JavaThread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method24restore_unshareable_infoEP6Thread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method11link_methodERK12methodHandleP10JavaThread:["Method::link_method","void",["pointer","pointer","pointer"]],_ZN6Method10jmethod_idEv:["Method::jmethod_id","pointer",["pointer"]],_ZN6Method10clear_codeEv:function(a){let c=new NativeFunction(a,"void",["pointer"],et);this["Method::clear_code"]=function(d){c(d)}},_ZN6Method10clear_codeEb:function(a){let c=new NativeFunction(a,"void",["pointer","int"],et),d=0;this["Method::clear_code"]=function(p){c(p,d)}},_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass:["VM_RedefineClasses::mark_dependent_code","void",["pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeEv:["VM_RedefineClasses::flush_dependent_code","void",[]],_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN19ResolvedMethodTable21adjust_method_entriesEPb:["ResolvedMethodTable::adjust_method_entries","void",["pointer"]],_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb:["MemberNameTable::adjust_method_entries","void",["pointer","pointer","pointer"]],_ZN17ConstantPoolCache21adjust_method_entriesEPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer"],et);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,h){c(d,h)}},_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer","pointer"],et);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,h){c(d,p,h)}},_ZN20ClassLoaderDataGraph10classes_doEP12KlassClosure:["ClassLoaderDataGraph::classes_do","void",["pointer"]],_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb:["ClassLoaderDataGraph::clean_deallocate_lists","void",["int"]],_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_:["JavaThread::thread_from_jni_environment","pointer",["pointer"]],_ZN8VMThread7executeEP12VM_Operation:["VMThread::execute","void",["pointer"]],_ZN11OopMapCache22flush_obsolete_entriesEv:["OopMapCache::flush_obsolete_entries","void",["pointer"]],_ZN14NMethodSweeper11force_sweepEv:["NMethodSweeper::force_sweep","void",[]],_ZN14NMethodSweeper16sweep_code_cacheEv:["NMethodSweeper::sweep_code_cache","void",[]],_ZN14NMethodSweeper17sweep_in_progressEv:["NMethodSweeper::sweep_in_progress","bool",[]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]]},variables:{_ZN18VM_RedefineClasses14_the_class_oopE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses10_the_classE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass:function(a){this.doKlass=a},_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass:function(a){this.doKlass=a},_ZTV18VM_RedefineClasses:function(a){this.vtableRedefineClasses=a},_ZN18VM_RedefineClasses4doitEv:function(a){this.redefineClassesDoIt=a},_ZN18VM_RedefineClasses13doit_prologueEv:function(a){this.redefineClassesDoItPrologue=a},_ZN18VM_RedefineClasses13doit_epilogueEv:function(a){this.redefineClassesDoItEpilogue=a},_ZN18VM_RedefineClassesD0Ev:function(a){this.redefineClassesDispose0=a},_ZN18VM_RedefineClassesD1Ev:function(a){this.redefineClassesDispose1=a},_ZNK18VM_RedefineClasses26allow_nested_vm_operationsEv:function(a){this.redefineClassesAllow=a},_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream:function(a){this.redefineClassesOnError=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread:function(a){this.createNewDefaultVtableIndices=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread:function(a){this.createNewDefaultVtableIndices=a},_ZN19Abstract_VM_Version19jre_release_versionEv:function(a){let d=new NativeFunction(a,"pointer",[],et)().readCString();this.version=d.startsWith("1.8")?8:d.startsWith("9.")?9:parseInt(d.slice(0,2),10),this.versionS=d},_ZN14NMethodSweeper11_traversalsE:function(a){this.traversals=a},_ZN14NMethodSweeper21_sweep_fractions_leftE:function(a){this.fractions=a},_ZN14NMethodSweeper13_should_sweepE:function(a){this.shouldSweep=a}},optionals:["_ZN6Method24restore_unshareable_infoEP10JavaThread","_ZN6Method24restore_unshareable_infoEP6Thread","_ZN6Method11link_methodERK12methodHandleP10JavaThread","_ZN6Method10clear_codeEv","_ZN6Method10clear_codeEb","_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass","_ZN18VM_RedefineClasses20flush_dependent_codeEv","_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread","_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread","_ZN19ResolvedMethodTable21adjust_method_entriesEPb","_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb","_ZN17ConstantPoolCache21adjust_method_entriesEPb","_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb","_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb","_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_","_ZN14NMethodSweeper11force_sweepEv","_ZN14NMethodSweeper17sweep_in_progressEv","_ZN18VM_RedefineClasses14_the_class_oopE","_ZN18VM_RedefineClasses10_the_classE","_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass","_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass","_ZN18VM_RedefineClassesD0Ev","_ZN18VM_RedefineClassesD1Ev","_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread","_ZN14NMethodSweeper21_sweep_fractions_leftE"]}],o=[];if(r.forEach(function(a){let c=a.module,d=a.functions||{},p=a.variables||{},h=new Set(a.optionals||[]),u=c.enumerateExports().reduce(function(_,y){return _[y.name]=y,_},{}),g=c.enumerateSymbols().reduce(function(_,y){return _[y.name]=y,_},u);Object.keys(d).forEach(function(_){let y=g[_];if(y!==void 0){let v=d[_];typeof v=="function"?v.call(n,y.address):n[v[0]]=new NativeFunction(y.address,v[1],v[2],et)}else h.has(_)||o.push(_)}),Object.keys(p).forEach(function(_){let y=g[_];y!==void 0?p[_].call(n,y.address):h.has(_)||o.push(_)})}),o.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+o.join(", "));let i=Memory.alloc(te),s=Memory.alloc(Wd);if(be("JNI_GetCreatedJavaVMs",n.JNI_GetCreatedJavaVMs(i,1,s)),s.readInt()===0)return null;n.vm=i.readPointer();let l=Process.platform==="windows"?{$new:["??2@YAPEAX_K@Z","pointer",["ulong"]],$delete:["??3@YAXPEAX@Z","void",["pointer"]]}:{$new:["_Znwm","pointer",["ulong"]],$delete:["_ZdlPv","void",["pointer"]]};for(let[a,[c,d,p]]of Object.entries(l)){let h=Module.findGlobalExportByName(c);if(h===null&&(h=DebugSymbol.fromName(c).address,h.isNull()))throw new Error(`unable to find C++ allocator API, missing: '${c}'`);n[a]=new NativeFunction(h,d,p,et)}return n.jvmti=ou(n),n["JavaThread::thread_from_jni_environment"]===void 0&&(n["JavaThread::thread_from_jni_environment"]=su(n)),n}function ou(t){let e=new ze(t),n;return e.perform(()=>{let r=e.tryGetEnvHandle(Vt.v1_0);if(r===null)throw new Error("JVMTI not available");n=new Je(r,e);let o=Memory.alloc(8);o.writeU64(Jt.canTagObjects);let i=n.addCapabilities(o);be("getEnvJvmti::AddCapabilities",i)}),n}var iu={x64:au};function su(t){let e=null,n=iu[Process.arch];if(n!==void 0){let o=new ze(t).perform(i=>i.handle.readPointer().add(6*te).readPointer());e=Ge(o,n,{limit:11})}return e===null?()=>{throw new Error("Unable to make thread_from_jni_environment() helper for the current architecture")}:r=>r.add(e)}function au(t){if(t.mnemonic!=="lea")return null;let{base:e,disp:n}=t.operands[1].value;return e==="rdi"&&n<0?n:null}function ii(t,e){}var Lr=class{constructor(e){this.methodId=e,this.method=e.readPointer(),this.originalMethod=null,this.newMethod=null,this.resolved=null,this.impl=null,this.key=e.toString(16)}replace(e,n,r,o,i){let{key:s}=this,l=Lt.get(s);l!==void 0&&(Lt.delete(s),this.method=l.method,this.originalMethod=l.originalMethod,this.newMethod=l.newMethod,this.resolved=l.resolved),this.impl=e,ln.set(s,this),ti(o)}revert(e){let{key:n}=this;ln.delete(n),Lt.set(n,this),ti(e)}resolveTarget(e,n,r,o){let{resolved:i,originalMethod:s,methodId:l}=this;if(i!==null)return i;if(s===null)return l;s.oldMethod.vtableIndexPtr.writeS32(-2);let c=Memory.alloc(te);return c.writePointer(this.method),this.resolved=c,c}};function ti(t){xr||(xr=!0,Script.nextTick(lu,t))}function lu(t){let e=new Map(ln),n=new Map(Lt);ln.clear(),Lt.clear(),xr=!1,t.perform(r=>{let o=De(),i=o["JavaThread::thread_from_jni_environment"](r.handle),s=!1;si(()=>{e.forEach(l=>{let{method:a,originalMethod:c,impl:d,methodId:p,newMethod:h}=l;c===null?(l.originalMethod=li(a),l.newMethod=uu(a,d,i),ni(l.newMethod,p,i)):o["Method::set_native_function"](h.method,d,0)}),n.forEach(l=>{let{originalMethod:a,methodId:c,newMethod:d}=l;if(a!==null){pu(a);let p=a.oldMethod;p.oldMethod=d,ni(p,c,i),s=!0}})}),s&&cu(r.handle)})}function cu(t){let{fractions:e,shouldSweep:n,traversals:r,"NMethodSweeper::sweep_code_cache":o,"NMethodSweeper::sweep_in_progress":i,"NMethodSweeper::force_sweep":s,JVM_Sleep:l}=De();if(s!==void 0)Thread.sleep(.05),s(),Thread.sleep(.05),s();else{let a=r.readS64(),c=a+2;for(;c>a;)e.writeS32(1),l(t,NULL,50),i()||si(()=>{Thread.sleep(.05)}),n.readU8()===0&&(e.writeS32(1),o()),a=r.readS64()}}function si(t,e,n){let{execute:r,vtable:o,vtableSize:i,doItOffset:s,prologueOffset:l,epilogueOffset:a}=nu(),c=Memory.dup(o,i),d=Memory.alloc(te*25);d.writePointer(c);let p=new NativeCallback(t,"void",["pointer"]);c.add(s).writePointer(p);let h=null;e!==void 0&&(h=new NativeCallback(e,"int",["pointer"]),c.add(l).writePointer(h));let u=null;n!==void 0&&(u=new NativeCallback(n,"void",["pointer"]),c.add(a).writePointer(u)),r(d)}function du(){let{vtableRedefineClasses:t,redefineClassesDoIt:e,redefineClassesDoItPrologue:n,redefineClassesDoItEpilogue:r,redefineClassesOnError:o,redefineClassesAllow:i,redefineClassesDispose0:s,redefineClassesDispose1:l,"VMThread::execute":a}=De(),c=t.add(2*te),d=15*te,p=Memory.dup(c,d),h=new NativeCallback(()=>{},"void",["pointer"]),u,g,_;for(let y=0;y!==d;y+=te){let v=p.add(y),S=v.readPointer();o!==void 0&&S.equals(o)||s!==void 0&&S.equals(s)||l!==void 0&&S.equals(l)?v.writePointer(h):S.equals(e)?u=y:S.equals(n)?(g=y,v.writePointer(i)):S.equals(r)&&(_=y,v.writePointer(h))}return{execute:a,emptyCallback:h,vtable:p,vtableSize:d,doItOffset:u,prologueOffset:g,epilogueOffset:_}}function ai(t){return new Lr(t)}function ni(t,e,n){let{method:r,oldMethod:o}=t,i=De();t.methodsArray.add(t.methodIndex*te).writePointer(r),t.vtableIndex>=0&&t.vtable.add(t.vtableIndex*te).writePointer(r),e.writePointer(r),o.accessFlagsPtr.writeU32((o.accessFlags|Kd|Qd)>>>0);let s=i["OopMapCache::flush_obsolete_entries"];if(s!==void 0){let{oopMapCache:g}=t;g.isNull()||s(g)}let l=i["VM_RedefineClasses::mark_dependent_code"],a=i["VM_RedefineClasses::flush_dependent_code"];l!==void 0?(l(NULL,t.instanceKlass),a()):a(NULL,t.instanceKlass,n);let c=Memory.alloc(1);c.writeU8(1),i["ConstantPoolCache::adjust_method_entries"](t.cache,t.instanceKlass,c);let d=Memory.alloc(3*te),p=Memory.alloc(te);p.writePointer(i.doKlass),d.writePointer(p),d.add(te).writePointer(n),d.add(2*te).writePointer(n),i.redefineClass!==void 0&&i.redefineClass.writePointer(t.instanceKlass),i["ClassLoaderDataGraph::classes_do"](d);let h=i["ResolvedMethodTable::adjust_method_entries"];if(h!==void 0)h(c);else{let{memberNames:g}=t;if(!g.isNull()){let _=i["MemberNameTable::adjust_method_entries"];_!==void 0&&_(g,t.instanceKlass,c)}}let u=i["ClassLoaderDataGraph::clean_deallocate_lists"];u!==void 0&&u(0)}function uu(t,e,n){let r=De(),o=li(t);o.constPtr.writePointer(o.const);let i=(o.accessFlags|qd|Yd|Xd|eu)>>>0;if(o.accessFlagsPtr.writeU32(i),o.signatureHandler.writePointer(NULL),o.adapter.writePointer(NULL),o.i2iEntry.writePointer(NULL),r["Method::clear_code"](o.method),o.dataPtr.writePointer(NULL),o.countersPtr.writePointer(NULL),o.stackmapPtr.writePointer(NULL),r["Method::clear_native_function"](o.method),r["Method::set_native_function"](o.method,e,0),r["Method::restore_unshareable_info"](o.method,n),r.version>=17){let s=Memory.alloc(2*te);s.writePointer(o.method),s.add(te).writePointer(n),r["Method::link_method"](o.method,s,n)}return o}function li(t){let e=oi(),n=t.add(e.method.constMethodOffset).readPointer(),r=n.add(e.constMethod.sizeOffset).readS32()*te,o=Memory.alloc(r+e.method.size);Memory.copy(o,n,r);let i=o.add(r);Memory.copy(i,t,e.method.size);let s=ri(i,o,r),l=ri(t,n,r);return s.oldMethod=l,s}function ri(t,e,n){let r=De(),o=oi(),i=t.add(o.method.constMethodOffset),s=t.add(o.method.methodDataOffset),l=t.add(o.method.methodCountersOffset),a=t.add(o.method.accessFlagsOffset),c=a.readU32(),d=o.getAdapterPointer(t,e),p=t.add(o.method.i2iEntryOffset),h=t.add(o.method.signatureHandlerOffset),u=e.add(o.constMethod.constantPoolOffset).readPointer(),g=e.add(o.constMethod.stackmapDataOffset),_=u.add(o.constantPool.instanceKlassOffset).readPointer(),y=u.add(o.constantPool.cacheOffset).readPointer(),v=tu(),S=_.add(v.methodsOffset).readPointer(),C=S.readS32(),x=S.add(te),L=e.add(o.constMethod.methodIdnumOffset).readU16(),R=t.add(o.method.vtableIndexOffset),A=R.readS32(),j=_.add(v.vtableOffset),k=_.add(v.oopMapCacheOffset).readPointer(),M=r.version>=10?_.add(v.memberNamesOffset).readPointer():NULL;return{method:t,methodSize:o.method.size,const:e,constSize:n,constPtr:i,dataPtr:s,countersPtr:l,stackmapPtr:g,instanceKlass:_,methodsArray:x,methodsCount:C,methodIndex:L,vtableIndex:A,vtableIndexPtr:R,vtable:j,accessFlags:c,accessFlagsPtr:a,adapter:d,i2iEntry:p,signatureHandler:h,memberNames:M,cache:y,oopMapCache:k}}function pu(t){let{oldMethod:e}=t;e.accessFlagsPtr.writeU32(e.accessFlags),e.vtableIndexPtr.writeS32(e.vtableIndex)}function fu(){let t=De(),{version:e}=t,n;e>=17?n="method:early":e>=9&&e<=16?n="const-method":n="method:late";let o=t["Method::size"](1)*te,i=te,s=2*te,l=3*te,a=4*te,c=n==="method:early"?te:0,d=a+c,p=d+4,h=p+4+8,u=h+te,g=c!==0?a:u,_=o-2*te,y=o-te,v=8,S=v+te,C=S+te,x=n==="const-method"?te:0,L=C+x,R=L+14,A=2*te,j=3*te;return{getAdapterPointer:x!==0?function(M,D){return D.add(C)}:function(M,D){return M.add(g)},method:{size:o,constMethodOffset:i,methodDataOffset:s,methodCountersOffset:l,accessFlagsOffset:d,vtableIndexOffset:p,i2iEntryOffset:h,nativeFunctionOffset:_,signatureHandlerOffset:y},constMethod:{constantPoolOffset:v,stackmapDataOffset:S,sizeOffset:L,methodIdnumOffset:R},constantPool:{cacheOffset:A,instanceKlassOffset:j}}}var hu={x64:_u};function mu(){let{version:t,createNewDefaultVtableIndices:e}=De(),n=hu[Process.arch];if(n===void 0)throw new Error(`Missing vtable offset parser for ${Process.arch}`);let r=Ge(e,n,{limit:32});if(r===null)throw new Error("Unable to deduce vtable offset");let o=t>=10&&t<=11||t>=15?17:18,i=r-7*te,s=r-17*te,l=r-o*te;return{vtableOffset:r,methodsOffset:i,memberNamesOffset:s,oopMapCacheOffset:l}}function _u(t){if(t.mnemonic!=="mov")return null;let e=t.operands[0];if(e.type!=="mem")return null;let{value:n}=e;if(n.scale!==1)return null;let{disp:r}=n;return r<256?null:r+16}var ci=ne;try{xt()}catch{ci=De}var Mt=ci;var gu=`#include <json-glib/json-glib.h>
#include <string.h>

#define kAccStatic 0x0008
#define kAccConstructor 0x00010000

typedef struct _Model Model;
typedef struct _EnumerateMethodsContext EnumerateMethodsContext;

typedef struct _JavaApi JavaApi;
typedef struct _JavaClassApi JavaClassApi;
typedef struct _JavaMethodApi JavaMethodApi;
typedef struct _JavaFieldApi JavaFieldApi;

typedef struct _JNIEnv JNIEnv;
typedef guint8 jboolean;
typedef gint32 jint;
typedef jint jsize;
typedef gpointer jobject;
typedef jobject jclass;
typedef jobject jstring;
typedef jobject jarray;
typedef jarray jobjectArray;
typedef gpointer jfieldID;
typedef gpointer jmethodID;

typedef struct _jvmtiEnv jvmtiEnv;
typedef enum
{
  JVMTI_ERROR_NONE = 0
} jvmtiError;

typedef struct _ArtApi ArtApi;
typedef guint32 ArtHeapReference;
typedef struct _ArtObject ArtObject;
typedef struct _ArtClass ArtClass;
typedef struct _ArtClassLinker ArtClassLinker;
typedef struct _ArtClassVisitor ArtClassVisitor;
typedef struct _ArtClassVisitorVTable ArtClassVisitorVTable;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtString ArtString;

typedef union _StdString StdString;
typedef struct _StdStringShort StdStringShort;
typedef struct _StdStringLong StdStringLong;

typedef void (* ArtVisitClassesFunc) (ArtClassLinker * linker, ArtClassVisitor * visitor);
typedef const char * (* ArtGetClassDescriptorFunc) (ArtClass * klass, StdString * storage);
typedef void (* ArtPrettyMethodFunc) (StdString * result, ArtMethod * method, jboolean with_signature);

struct _Model
{
  GHashTable * members;
};

struct _EnumerateMethodsContext
{
  GPatternSpec * class_query;
  GPatternSpec * method_query;
  jboolean include_signature;
  jboolean ignore_case;
  jboolean skip_system_classes;
  GHashTable * groups;
};

struct _JavaClassApi
{
  jmethodID get_declared_methods;
  jmethodID get_declared_fields;
};

struct _JavaMethodApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaFieldApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaApi
{
  jvmtiEnv * jvmti;
  JavaClassApi clazz;
  JavaMethodApi method;
  JavaFieldApi field;
};

struct _JNIEnv
{
  gpointer * functions;
};

struct _jvmtiEnv
{
  gpointer * functions;
};

struct _ArtApi
{
  gboolean available;

  guint class_offset_ifields;
  guint class_offset_methods;
  guint class_offset_sfields;
  guint class_offset_copied_methods_offset;

  guint method_size;
  guint method_offset_access_flags;

  guint field_size;
  guint field_offset_access_flags;

  guint alignment_padding;

  ArtClassLinker * linker;
  ArtVisitClassesFunc visit_classes;
  ArtGetClassDescriptorFunc get_class_descriptor;
  ArtPrettyMethodFunc pretty_method;

  void (* free) (gpointer mem);
};

struct _ArtObject
{
  ArtHeapReference klass;
  ArtHeapReference monitor;
};

struct _ArtClass
{
  ArtObject parent;

  ArtHeapReference class_loader;
};

struct _ArtClassVisitor
{
  ArtClassVisitorVTable * vtable;
  gpointer user_data;
};

struct _ArtClassVisitorVTable
{
  void (* reserved1) (ArtClassVisitor * self);
  void (* reserved2) (ArtClassVisitor * self);
  jboolean (* visit) (ArtClassVisitor * self, ArtClass * klass);
};

struct _ArtString
{
  ArtObject parent;

  gint32 count;
  guint32 hash_code;

  union
  {
    guint16 value[0];
    guint8 value_compressed[0];
  };
};

struct _StdStringShort
{
  guint8 size;
  gchar data[(3 * sizeof (gpointer)) - sizeof (guint8)];
};

struct _StdStringLong
{
  gsize capacity;
  gsize size;
  gchar * data;
};

union _StdString
{
  StdStringShort s;
  StdStringLong l;
};

static void model_add_method (Model * self, const gchar * name, jmethodID id, jint modifiers);
static void model_add_field (Model * self, const gchar * name, jfieldID id, jint modifiers);
static void model_free (Model * model);

static jboolean collect_matching_class_methods (ArtClassVisitor * self, ArtClass * klass);
static gchar * finalize_method_groups_to_json (GHashTable * groups);
static GPatternSpec * make_pattern_spec (const gchar * pattern, jboolean ignore_case);
static gchar * class_name_from_signature (const gchar * signature);
static gchar * format_method_signature (const gchar * name, const gchar * signature);
static void append_type (GString * output, const gchar ** type);

static gpointer read_art_array (gpointer object_base, guint field_offset, guint length_size, guint * length);

static void std_string_destroy (StdString * str);
static gchar * std_string_c_str (StdString * self);

extern GMutex lock;
extern GArray * models;
extern JavaApi java_api;
extern ArtApi art_api;

void
init (void)
{
  g_mutex_init (&lock);
  models = g_array_new (FALSE, FALSE, sizeof (Model *));
}

void
finalize (void)
{
  guint n, i;

  n = models->len;
  for (i = 0; i != n; i++)
  {
    Model * model = g_array_index (models, Model *, i);
    model_free (model);
  }

  g_array_unref (models);
  g_mutex_clear (&lock);
}

Model *
model_new (jclass class_handle,
           gpointer class_object,
           JNIEnv * env)
{
  Model * model;
  GHashTable * members;
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * funcs = env->functions;
  jmethodID (* from_reflected_method) (JNIEnv *, jobject) = funcs[7];
  jfieldID (* from_reflected_field) (JNIEnv *, jobject) = funcs[8];
  jobject (* to_reflected_method) (JNIEnv *, jclass, jmethodID, jboolean) = funcs[9];
  jobject (* to_reflected_field) (JNIEnv *, jclass, jfieldID, jboolean) = funcs[12];
  void (* delete_local_ref) (JNIEnv *, jobject) = funcs[23];
  jobject (* call_object_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[34];
  jint (* call_int_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[49];
  const char * (* get_string_utf_chars) (JNIEnv *, jstring, jboolean *) = funcs[169];
  void (* release_string_utf_chars) (JNIEnv *, jstring, const char *) = funcs[170];
  jsize (* get_array_length) (JNIEnv *, jarray) = funcs[171];
  jobject (* get_object_array_element) (JNIEnv *, jobjectArray, jsize) = funcs[173];
  jsize n, i;

  model = g_new (Model, 1);

  members = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, g_free);
  model->members = members;

  if (jvmti != NULL)
  {
    gpointer * jf = jvmti->functions - 1;
    jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
    jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
    jvmtiError (* get_class_fields) (jvmtiEnv *, jclass, jint *, jfieldID **) = jf[53];
    jvmtiError (* get_field_name) (jvmtiEnv *, jclass, jfieldID, char **, char **, char **) = jf[60];
    jvmtiError (* get_field_modifiers) (jvmtiEnv *, jclass, jfieldID, jint *) = jf[62];
    jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
    jvmtiError (* get_method_modifiers) (jvmtiEnv *, jmethodID, jint *) = jf[66];
    jint method_count;
    jmethodID * methods;
    jint field_count;
    jfieldID * fields;
    char * name;
    jint modifiers;

    get_class_methods (jvmti, class_handle, &method_count, &methods);
    for (i = 0; i != method_count; i++)
    {
      jmethodID method = methods[i];

      get_method_name (jvmti, method, &name, NULL, NULL);
      get_method_modifiers (jvmti, method, &modifiers);

      model_add_method (model, name, method, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, methods);

    get_class_fields (jvmti, class_handle, &field_count, &fields);
    for (i = 0; i != field_count; i++)
    {
      jfieldID field = fields[i];

      get_field_name (jvmti, class_handle, field, &name, NULL, NULL);
      get_field_modifiers (jvmti, class_handle, field, &modifiers);

      model_add_field (model, name, field, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, fields);
  }
  else if (art_api.available)
  {
    gpointer elements;
    guint n, i;
    const guint field_arrays[] = {
      art_api.class_offset_ifields,
      art_api.class_offset_sfields
    };
    guint field_array_cursor;
    gboolean merged_fields = art_api.class_offset_sfields == 0;

    elements = read_art_array (class_object, art_api.class_offset_methods, sizeof (gsize), NULL);
    n = *(guint16 *) (class_object + art_api.class_offset_copied_methods_offset);
    for (i = 0; i != n; i++)
    {
      jmethodID id;
      guint32 access_flags;
      jboolean is_static;
      jobject method, name;
      const char * name_str;
      jint modifiers;

      id = elements + (i * art_api.method_size);

      access_flags = *(guint32 *) (id + art_api.method_offset_access_flags);
      if ((access_flags & kAccConstructor) != 0)
        continue;
      is_static = (access_flags & kAccStatic) != 0;
      method = to_reflected_method (env, class_handle, id, is_static);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      modifiers = access_flags & 0xffff;

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }

    for (field_array_cursor = 0; field_array_cursor != G_N_ELEMENTS (field_arrays); field_array_cursor++)
    {
      jboolean is_static;

      if (field_arrays[field_array_cursor] == 0)
        continue;

      if (!merged_fields)
        is_static = field_array_cursor == 1;

      elements = read_art_array (class_object, field_arrays[field_array_cursor], sizeof (guint32), &n);
      for (i = 0; i != n; i++)
      {
        jfieldID id;
        guint32 access_flags;
        jobject field, name;
        const char * name_str;
        jint modifiers;

        id = elements + (i * art_api.field_size);

        access_flags = *(guint32 *) (id + art_api.field_offset_access_flags);
        if (merged_fields)
          is_static = (access_flags & kAccStatic) != 0;
        field = to_reflected_field (env, class_handle, id, is_static);
        name = call_object_method (env, field, java_api.field.get_name);
        name_str = get_string_utf_chars (env, name, NULL);
        modifiers = access_flags & 0xffff;

        model_add_field (model, name_str, id, modifiers);

        release_string_utf_chars (env, name, name_str);
        delete_local_ref (env, name);
        delete_local_ref (env, field);
      }
    }
  }
  else
  {
    jobject elements;

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_methods);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject method, name;
      const char * name_str;
      jmethodID id;
      jint modifiers;

      method = get_object_array_element (env, elements, i);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_method (env, method);
      modifiers = call_int_method (env, method, java_api.method.get_modifiers);

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }
    delete_local_ref (env, elements);

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_fields);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject field, name;
      const char * name_str;
      jfieldID id;
      jint modifiers;

      field = get_object_array_element (env, elements, i);
      name = call_object_method (env, field, java_api.field.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_field (env, field);
      modifiers = call_int_method (env, field, java_api.field.get_modifiers);

      model_add_field (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, field);
    }
    delete_local_ref (env, elements);
  }

  g_mutex_lock (&lock);
  g_array_append_val (models, model);
  g_mutex_unlock (&lock);

  return model;
}

static void
model_add_method (Model * self,
                  const gchar * name,
                  jmethodID id,
                  jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;
  const gchar * value;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  value = g_hash_table_lookup (members, key);
  if (value == NULL)
    g_hash_table_insert (members, key, g_strdup_printf ("m:%c0x%zx", type, id));
  else
    g_hash_table_insert (members, key, g_strdup_printf ("%s:%c0x%zx", value, type, id));
}

static void
model_add_field (Model * self,
                 const gchar * name,
                 jfieldID id,
                 jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);
  while (g_hash_table_contains (members, key))
  {
    gchar * new_key = g_strdup_printf ("_%s", key);
    g_free (key);
    key = new_key;
  }

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  g_hash_table_insert (members, key, g_strdup_printf ("f:%c0x%zx", type, id));
}

static void
model_free (Model * model)
{
  g_hash_table_unref (model->members);

  g_free (model);
}

gboolean
model_has (Model * self,
           const gchar * member)
{
  return g_hash_table_contains (self->members, member);
}

const gchar *
model_find (Model * self,
            const gchar * member)
{
  return g_hash_table_lookup (self->members, member);
}

gchar *
model_list (Model * self)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  const gchar * name;

  result = g_string_sized_new (128);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, self->members);
  for (i = 0; g_hash_table_iter_next (&iter, (gpointer *) &name, NULL); i++)
  {
    if (i > 0)
      g_string_append_c (result, ',');

    g_string_append_c (result, '"');
    g_string_append (result, name);
    g_string_append_c (result, '"');
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

gchar *
enumerate_methods_art (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes)
{
  gchar * result;
  EnumerateMethodsContext ctx;
  ArtClassVisitor visitor;
  ArtClassVisitorVTable visitor_vtable = { NULL, };

  ctx.class_query = make_pattern_spec (class_query, ignore_case);
  ctx.method_query = make_pattern_spec (method_query, ignore_case);
  ctx.include_signature = include_signature;
  ctx.ignore_case = ignore_case;
  ctx.skip_system_classes = skip_system_classes;
  ctx.groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  visitor.vtable = &visitor_vtable;
  visitor.user_data = &ctx;

  visitor_vtable.visit = collect_matching_class_methods;

  art_api.visit_classes (art_api.linker, &visitor);

  result = finalize_method_groups_to_json (ctx.groups);

  g_hash_table_unref (ctx.groups);
  g_pattern_spec_free (ctx.method_query);
  g_pattern_spec_free (ctx.class_query);

  return result;
}

static jboolean
collect_matching_class_methods (ArtClassVisitor * self,
                                ArtClass * klass)
{
  EnumerateMethodsContext * ctx = self->user_data;
  const char * descriptor;
  StdString descriptor_storage = { 0, };
  gchar * class_name = NULL;
  gchar * class_name_copy = NULL;
  const gchar * normalized_class_name;
  JsonBuilder * group;
  size_t class_name_length;
  GHashTable * seen_method_names;
  gpointer elements;
  guint n, i;

  if (ctx->skip_system_classes && klass->class_loader == 0)
    goto skip_class;

  descriptor = art_api.get_class_descriptor (klass, &descriptor_storage);
  if (descriptor[0] != 'L')
    goto skip_class;

  class_name = class_name_from_signature (descriptor);

  if (ctx->ignore_case)
  {
    class_name_copy = g_utf8_strdown (class_name, -1);
    normalized_class_name = class_name_copy;
  }
  else
  {
    normalized_class_name = class_name;
  }

  if (!g_pattern_match_string (ctx->class_query, normalized_class_name))
    goto skip_class;

  group = NULL;
  class_name_length = strlen (class_name);
  seen_method_names = ctx->include_signature ? NULL : g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

  elements = read_art_array (klass, art_api.class_offset_methods, sizeof (gsize), NULL);
  n = *(guint16 *) ((gpointer) klass + art_api.class_offset_copied_methods_offset);
  for (i = 0; i != n; i++)
  {
    ArtMethod * method;
    guint32 access_flags;
    jboolean is_constructor;
    StdString method_name = { 0, };
    const gchar * bare_method_name;
    gchar * bare_method_name_copy = NULL;
    const gchar * normalized_method_name;
    gchar * normalized_method_name_copy = NULL;

    method = elements + (i * art_api.method_size);

    access_flags = *(guint32 *) ((gpointer) method + art_api.method_offset_access_flags);
    is_constructor = (access_flags & kAccConstructor) != 0;

    art_api.pretty_method (&method_name, method, ctx->include_signature);
    bare_method_name = std_string_c_str (&method_name);
    if (ctx->include_signature)
    {
      const gchar * return_type_end, * name_begin;
      GString * name;

      return_type_end = strchr (bare_method_name, ' ');
      name_begin = return_type_end + 1 + class_name_length + 1;
      if (is_constructor && g_str_has_prefix (name_begin, "<clinit>"))
        goto skip_method;

      name = g_string_sized_new (64);

      if (is_constructor)
      {
        g_string_append (name, "$init");
        g_string_append (name, strchr (name_begin, '>') + 1);
      }
      else
      {
        g_string_append (name, name_begin);
      }
      g_string_append (name, ": ");
      g_string_append_len (name, bare_method_name, return_type_end - bare_method_name);

      bare_method_name_copy = g_string_free (name, FALSE);
      bare_method_name = bare_method_name_copy;
    }
    else
    {
      const gchar * name_begin;

      name_begin = bare_method_name + class_name_length + 1;
      if (is_constructor && strcmp (name_begin, "<clinit>") == 0)
        goto skip_method;

      if (is_constructor)
        bare_method_name = "$init";
      else
        bare_method_name += class_name_length + 1;
    }

    if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, bare_method_name))
      goto skip_method;

    if (ctx->ignore_case)
    {
      normalized_method_name_copy = g_utf8_strdown (bare_method_name, -1);
      normalized_method_name = normalized_method_name_copy;
    }
    else
    {
      normalized_method_name = bare_method_name;
    }

    if (!g_pattern_match_string (ctx->method_query, normalized_method_name))
      goto skip_method;

    if (group == NULL)
    {
      group = g_hash_table_lookup (ctx->groups, GUINT_TO_POINTER (klass->class_loader));
      if (group == NULL)
      {
        group = json_builder_new_immutable ();
        g_hash_table_insert (ctx->groups, GUINT_TO_POINTER (klass->class_loader), group);

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "loader");
        json_builder_add_int_value (group, klass->class_loader);

        json_builder_set_member_name (group, "classes");
        json_builder_begin_array (group);
      }

      json_builder_begin_object (group);

      json_builder_set_member_name (group, "name");
      json_builder_add_string_value (group, class_name);

      json_builder_set_member_name (group, "methods");
      json_builder_begin_array (group);
    }

    json_builder_add_string_value (group, bare_method_name);

    if (seen_method_names != NULL)
      g_hash_table_add (seen_method_names, g_strdup (bare_method_name));

skip_method:
    g_free (normalized_method_name_copy);
    g_free (bare_method_name_copy);
    std_string_destroy (&method_name);
  }

  if (seen_method_names != NULL)
    g_hash_table_unref (seen_method_names);

  if (group == NULL)
    goto skip_class;

  json_builder_end_array (group);
  json_builder_end_object (group);

skip_class:
  g_free (class_name_copy);
  g_free (class_name);
  std_string_destroy (&descriptor_storage);

  return TRUE;
}

gchar *
enumerate_methods_jvm (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes,
                       JNIEnv * env)
{
  gchar * result;
  GPatternSpec * class_pattern, * method_pattern;
  GHashTable * groups;
  gpointer * ef = env->functions;
  jobject (* new_global_ref) (JNIEnv *, jobject) = ef[21];
  void (* delete_local_ref) (JNIEnv *, jobject) = ef[23];
  jboolean (* is_same_object) (JNIEnv *, jobject, jobject) = ef[24];
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * jf = jvmti->functions - 1;
  jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
  jvmtiError (* get_class_signature) (jvmtiEnv *, jclass, char **, char **) = jf[48];
  jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
  jvmtiError (* get_class_loader) (jvmtiEnv *, jclass, jobject *) = jf[57];
  jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
  jvmtiError (* get_loaded_classes) (jvmtiEnv *, jint *, jclass **) = jf[78];
  jint class_count, class_index;
  jclass * classes;

  class_pattern = make_pattern_spec (class_query, ignore_case);
  method_pattern = make_pattern_spec (method_query, ignore_case);
  groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  if (get_loaded_classes (jvmti, &class_count, &classes) != JVMTI_ERROR_NONE)
    goto emit_results;

  for (class_index = 0; class_index != class_count; class_index++)
  {
    jclass klass = classes[class_index];
    jobject loader = NULL;
    gboolean have_loader = FALSE;
    char * signature = NULL;
    gchar * class_name = NULL;
    gchar * class_name_copy = NULL;
    const gchar * normalized_class_name;
    jint method_count, method_index;
    jmethodID * methods = NULL;
    JsonBuilder * group = NULL;
    GHashTable * seen_method_names = NULL;

    if (skip_system_classes)
    {
      if (get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
        goto skip_class;
      have_loader = TRUE;

      if (loader == NULL)
        goto skip_class;
    }

    if (get_class_signature (jvmti, klass, &signature, NULL) != JVMTI_ERROR_NONE)
      goto skip_class;

    class_name = class_name_from_signature (signature);

    if (ignore_case)
    {
      class_name_copy = g_utf8_strdown (class_name, -1);
      normalized_class_name = class_name_copy;
    }
    else
    {
      normalized_class_name = class_name;
    }

    if (!g_pattern_match_string (class_pattern, normalized_class_name))
      goto skip_class;

    if (get_class_methods (jvmti, klass, &method_count, &methods) != JVMTI_ERROR_NONE)
      goto skip_class;

    if (!include_signature)
      seen_method_names = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

    for (method_index = 0; method_index != method_count; method_index++)
    {
      jmethodID method = methods[method_index];
      const gchar * method_name;
      char * method_name_value = NULL;
      char * method_signature_value = NULL;
      gchar * method_name_copy = NULL;
      const gchar * normalized_method_name;
      gchar * normalized_method_name_copy = NULL;

      if (get_method_name (jvmti, method, &method_name_value, include_signature ? &method_signature_value : NULL, NULL) != JVMTI_ERROR_NONE)
        goto skip_method;
      method_name = method_name_value;

      if (method_name[0] == '<')
      {
        if (strcmp (method_name, "<init>") == 0)
          method_name = "$init";
        else if (strcmp (method_name, "<clinit>") == 0)
          goto skip_method;
      }

      if (include_signature)
      {
        method_name_copy = format_method_signature (method_name, method_signature_value);
        method_name = method_name_copy;
      }

      if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, method_name))
        goto skip_method;

      if (ignore_case)
      {
        normalized_method_name_copy = g_utf8_strdown (method_name, -1);
        normalized_method_name = normalized_method_name_copy;
      }
      else
      {
        normalized_method_name = method_name;
      }

      if (!g_pattern_match_string (method_pattern, normalized_method_name))
        goto skip_method;

      if (group == NULL)
      {
        if (!have_loader && get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
          goto skip_method;

        if (loader == NULL)
        {
          group = g_hash_table_lookup (groups, NULL);
        }
        else
        {
          GHashTableIter iter;
          jobject cur_loader;
          JsonBuilder * cur_group;

          g_hash_table_iter_init (&iter, groups);
          while (g_hash_table_iter_next (&iter, (gpointer *) &cur_loader, (gpointer *) &cur_group))
          {
            if (cur_loader != NULL && is_same_object (env, cur_loader, loader))
            {
              group = cur_group;
              break;
            }
          }
        }

        if (group == NULL)
        {
          jobject l;
          gchar * str;

          l = (loader != NULL) ? new_global_ref (env, loader) : NULL;

          group = json_builder_new_immutable ();
          g_hash_table_insert (groups, l, group);

          json_builder_begin_object (group);

          json_builder_set_member_name (group, "loader");
          str = g_strdup_printf ("0x%" G_GSIZE_MODIFIER "x", GPOINTER_TO_SIZE (l));
          json_builder_add_string_value (group, str);
          g_free (str);

          json_builder_set_member_name (group, "classes");
          json_builder_begin_array (group);
        }

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "name");
        json_builder_add_string_value (group, class_name);

        json_builder_set_member_name (group, "methods");
        json_builder_begin_array (group);
      }

      json_builder_add_string_value (group, method_name);

      if (seen_method_names != NULL)
        g_hash_table_add (seen_method_names, g_strdup (method_name));

skip_method:
      g_free (normalized_method_name_copy);
      g_free (method_name_copy);
      deallocate (jvmti, method_signature_value);
      deallocate (jvmti, method_name_value);
    }

skip_class:
    if (group != NULL)
    {
      json_builder_end_array (group);
      json_builder_end_object (group);
    }

    if (seen_method_names != NULL)
      g_hash_table_unref (seen_method_names);

    deallocate (jvmti, methods);

    g_free (class_name_copy);
    g_free (class_name);
    deallocate (jvmti, signature);

    if (loader != NULL)
      delete_local_ref (env, loader);

    delete_local_ref (env, klass);
  }

  deallocate (jvmti, classes);

emit_results:
  result = finalize_method_groups_to_json (groups);

  g_hash_table_unref (groups);
  g_pattern_spec_free (method_pattern);
  g_pattern_spec_free (class_pattern);

  return result;
}

static gchar *
finalize_method_groups_to_json (GHashTable * groups)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  JsonBuilder * group;

  result = g_string_sized_new (1024);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, groups);
  for (i = 0; g_hash_table_iter_next (&iter, NULL, (gpointer *) &group); i++)
  {
    JsonNode * root;
    gchar * json;

    if (i > 0)
      g_string_append_c (result, ',');

    json_builder_end_array (group);
    json_builder_end_object (group);

    root = json_builder_get_root (group);
    json = json_to_string (root, FALSE);
    g_string_append (result, json);
    g_free (json);
    json_node_unref (root);

    g_object_unref (group);
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

static GPatternSpec *
make_pattern_spec (const gchar * pattern,
                   jboolean ignore_case)
{
  GPatternSpec * spec;

  if (ignore_case)
  {
    gchar * str = g_utf8_strdown (pattern, -1);
    spec = g_pattern_spec_new (str);
    g_free (str);
  }
  else
  {
    spec = g_pattern_spec_new (pattern);
  }

  return spec;
}

static gchar *
class_name_from_signature (const gchar * descriptor)
{
  gchar * result, * c;

  result = g_strdup (descriptor + 1);

  for (c = result; *c != '\\0'; c++)
  {
    if (*c == '/')
      *c = '.';
  }

  c[-1] = '\\0';

  return result;
}

static gchar *
format_method_signature (const gchar * name,
                         const gchar * signature)
{
  GString * sig;
  const gchar * cursor;
  gint arg_index;

  sig = g_string_sized_new (128);

  g_string_append (sig, name);

  cursor = signature;
  arg_index = -1;
  while (TRUE)
  {
    const gchar c = *cursor;

    if (c == '(')
    {
      g_string_append_c (sig, c);
      cursor++;
      arg_index = 0;
    }
    else if (c == ')')
    {
      g_string_append_c (sig, c);
      cursor++;
      break;
    }
    else
    {
      if (arg_index >= 1)
        g_string_append (sig, ", ");

      append_type (sig, &cursor);

      if (arg_index != -1)
        arg_index++;
    }
  }

  g_string_append (sig, ": ");
  append_type (sig, &cursor);

  return g_string_free (sig, FALSE);
}

static void
append_type (GString * output,
             const gchar ** type)
{
  const gchar * cursor = *type;

  switch (*cursor)
  {
    case 'Z':
      g_string_append (output, "boolean");
      cursor++;
      break;
    case 'B':
      g_string_append (output, "byte");
      cursor++;
      break;
    case 'C':
      g_string_append (output, "char");
      cursor++;
      break;
    case 'S':
      g_string_append (output, "short");
      cursor++;
      break;
    case 'I':
      g_string_append (output, "int");
      cursor++;
      break;
    case 'J':
      g_string_append (output, "long");
      cursor++;
      break;
    case 'F':
      g_string_append (output, "float");
      cursor++;
      break;
    case 'D':
      g_string_append (output, "double");
      cursor++;
      break;
    case 'V':
      g_string_append (output, "void");
      cursor++;
      break;
    case 'L':
    {
      gchar ch;

      cursor++;
      for (; (ch = *cursor) != ';'; cursor++)
      {
        g_string_append_c (output, (ch != '/') ? ch : '.');
      }
      cursor++;

      break;
    }
    case '[':
      *type = cursor + 1;
      append_type (output, type);
      g_string_append (output, "[]");
      return;
    default:
      g_string_append (output, "BUG");
      cursor++;
  }

  *type = cursor;
}

void
dealloc (gpointer mem)
{
  g_free (mem);
}

static gpointer
read_art_array (gpointer object_base,
                guint field_offset,
                guint length_size,
                guint * length)
{
  gpointer result, header;
  guint n;

  header = GSIZE_TO_POINTER (*(guint64 *) (object_base + field_offset));
  if (header != NULL)
  {
    result = header + length_size;
    if (length_size == sizeof (guint32))
      n = *(guint32 *) header;
    else
      n = *(guint64 *) header;
  }
  else
  {
    result = NULL;
    n = 0;
  }

  if (length != NULL)
    *length = n;

  return result;
}

static void
std_string_destroy (StdString * str)
{
  if ((str->l.capacity & 1) != 0)
    art_api.free (str->l.data);
}

static gchar *
std_string_c_str (StdString * self)
{
  if ((self->l.capacity & 1) != 0)
    return self->l.data;

  return self->s.data;
}
`,yu=/(.+)!([^/]+)\/?([isu]+)?/,Oe=null,ui=null,tt=class t{static build(e,n){return di(n),ui(e,n,r=>new t(Oe.new(e,r,n)))}static enumerateMethods(e,n,r){di(r);let o=e.match(yu);if(o===null)throw new Error("Invalid query; format is: class!method -- see documentation of Java.enumerateMethods(query) for details");let i=Memory.allocUtf8String(o[1]),s=Memory.allocUtf8String(o[2]),l=!1,a=!1,c=!1,d=o[3];d!==void 0&&(l=d.indexOf("s")!==-1,a=d.indexOf("i")!==-1,c=d.indexOf("u")!==-1);let p;if(n.jvmti!==null){let h=Oe.enumerateMethodsJvm(i,s,pt(l),pt(a),pt(c),r);try{p=JSON.parse(h.readUtf8String()).map(u=>{let g=ptr(u.loader);return u.loader=g.isNull()?null:g,u})}finally{Oe.dealloc(h)}}else Ae(r.vm,r,h=>{let u=Oe.enumerateMethodsArt(i,s,pt(l),pt(a),pt(c));try{let g=n["art::JavaVMExt::AddGlobalRef"],{vm:_}=n;p=JSON.parse(u.readUtf8String()).map(y=>{let v=y.loader;return y.loader=v!==0?g(_,h,ptr(v)):null,y})}finally{Oe.dealloc(u)}});return p}constructor(e){this.handle=e}has(e){return Oe.has(this.handle,Memory.allocUtf8String(e))!==0}find(e){return Oe.find(this.handle,Memory.allocUtf8String(e)).readUtf8String()}list(){let e=Oe.list(this.handle);try{return JSON.parse(e.readUtf8String())}finally{Oe.dealloc(e)}}};function di(t){Oe===null&&(Oe=bu(t),ui=vu(Oe,t.vm))}function bu(t){let e=Mt(),{jvmti:n=null}=e,{pointerSize:r}=Process,o=8,i=r,s=7*r,l=10*4+5*r,a=o+i+s+l,d=Memory.alloc(a),p=d.add(o),h=p.add(i),{getDeclaredMethods:u,getDeclaredFields:g}=t.javaLangClass(),_=t.javaLangReflectMethod(),y=t.javaLangReflectField(),v=h;[n!==null?n:NULL,u,g,_.getName,_.getModifiers,y.getName,y.getModifiers].forEach(A=>{v=v.writePointer(A).add(r)});let S=h.add(s),{vm:C}=t;if(e.flavor==="art"){let A;if(n!==null)A=[0,0,0,0];else{let D=mr(C).offset;A=[D.ifields,D.methods,D.sfields,D.copiedMethodsOffset]}let j=Ie(C),k=on(C),M=S;[1,...A,j.size,j.offset.accessFlags,k.size,k.offset.accessFlags,4294967295].forEach(D=>{M=M.writeUInt(D).add(4)}),[e.artClassLinker.address,e["art::ClassLinker::VisitClasses"],e["art::mirror::Class::GetDescriptor"],e["art::ArtMethod::PrettyMethod"],Process.getModuleByName("libc.so").getExportByName("free")].forEach((D,N)=>{D===void 0&&(D=NULL),M=M.writePointer(D).add(r)})}let x=new CModule(gu,{lock:d,models:p,java_api:h,art_api:S}),L={exceptions:"propagate"},R={exceptions:"propagate",scheduling:"exclusive"};return{handle:x,new:new NativeFunction(x.model_new,"pointer",["pointer","pointer","pointer"],L),has:new NativeFunction(x.model_has,"bool",["pointer","pointer"],R),find:new NativeFunction(x.model_find,"pointer",["pointer","pointer"],R),list:new NativeFunction(x.model_list,"pointer",["pointer"],R),enumerateMethodsArt:new NativeFunction(x.enumerate_methods_art,"pointer",["pointer","pointer","bool","bool","bool"],L),enumerateMethodsJvm:new NativeFunction(x.enumerate_methods_jvm,"pointer",["pointer","pointer","bool","bool","bool","pointer"],L),dealloc:new NativeFunction(x.dealloc,"void",["pointer"],R)}}function vu(t,e){let n=Mt();if(n.flavor!=="art")return Su;let r=n["art::JavaVMExt::DecodeGlobal"];return function(o,i,s){let l;return Ae(e,i,a=>{let c=r(e,a,o);l=s(c)}),l}}function Su(t,e,n){return n(NULL)}function pt(t){return t?1:0}var At=class{constructor(e,n){this.items=new Map,this.capacity=e,this.destroy=n}dispose(e){let{items:n,destroy:r}=this;n.forEach(o=>{r(o,e)}),n.clear()}get(e){let{items:n}=this,r=n.get(e);return r!==void 0&&(n.delete(e),n.set(e,r)),r}set(e,n,r){let{items:o}=this,i=o.get(e);if(i!==void 0)o.delete(e),this.destroy(i,r);else if(o.size===this.capacity){let s=o.keys().next().value,l=o.get(s);o.delete(s),this.destroy(l,r)}o.set(e,n)}};var Ot=1,Or=256,pi=65536,Eu=305419896,fi=32,hi=12,mi=8,_i=8,gi=4,yi=4,bi=12,wu=0,Cu=1,ku=2,Iu=3,Nu=4,Tu=5,xu=6,Lu=4096,Mu=4097,Au=4099,Ou=8192,ju=8193,Pu=8194,Ru=8195,Fu=8196,zu=8198,Du=24,Uu=28,Bu=2,Vu=24,vi=b.from([3,0,7,14,0]),Mr="Ldalvik/annotation/Throws;",Ju=b.from([0]);function Gu(t){let e=new jr,n=Object.assign({},t);return e.addClass(n),e.build()}var jr=class{constructor(){this.classes=[]}addClass(e){this.classes.push(e)}build(){let e=Zu(this.classes),{classes:n,interfaces:r,fields:o,methods:i,protos:s,parameters:l,annotationDirectories:a,annotationSets:c,throwsAnnotations:d,types:p,strings:h}=e,u=0,g=0,_=8,y=12,v=20,S=112;u+=S;let C=u,x=h.length*yi;u+=x;let L=u,R=p.length*gi;u+=R;let A=u,j=s.length*hi;u+=j;let k=u,M=o.length*mi;u+=M;let D=u,N=i.length*_i;u+=N;let U=u,W=n.length*fi;u+=W;let q=u,T=c.map(P=>{let V=u;return P.offset=V,u+=4+P.items.length*4,V}),w=n.reduce((P,V)=>(V.classData.constructorMethods.forEach(oe=>{let[,ae,ie]=oe;(ae&Or)===0&&ie>=0&&(oe.push(u),P.push({offset:u,superConstructor:ie}),u+=Vu)}),P),[]);a.forEach(P=>{P.offset=u,u+=16+P.methods.length*8});let J=r.map(P=>{u=Ar(u,4);let V=u;return P.offset=V,u+=4+2*P.types.length,V}),G=l.map(P=>{u=Ar(u,4);let V=u;return P.offset=V,u+=4+2*P.types.length,V}),K=[],B=h.map(P=>{let V=u,Q=b.from(Ne(P.length)),oe=b.from(P,"utf8"),ae=b.concat([Q,oe,Ju]);return K.push(ae),u+=ae.length,V}),Z=w.map(P=>{let V=u;return u+=vi.length,V}),Y=d.map(P=>{let V=Hu(P);return P.offset=u,u+=V.length,V}),$=n.map((P,V)=>{P.classData.offset=u;let Q=$u(P);return u+=Q.length,Q}),se=0,_e=0;u=Ar(u,4);let H=u,le=r.length+l.length,Te=4+(o.length>0?1:0)+2+c.length+w.length+a.length+(le>0?1:0)+1+Z.length+d.length+n.length+1,xe=4+Te*bi;u+=xe;let Re=u-q,Be=u,O=b.alloc(Be);O.write(`dex
035`),O.writeUInt32LE(Be,32),O.writeUInt32LE(S,36),O.writeUInt32LE(Eu,40),O.writeUInt32LE(se,44),O.writeUInt32LE(_e,48),O.writeUInt32LE(H,52),O.writeUInt32LE(h.length,56),O.writeUInt32LE(C,60),O.writeUInt32LE(p.length,64),O.writeUInt32LE(L,68),O.writeUInt32LE(s.length,72),O.writeUInt32LE(A,76),O.writeUInt32LE(o.length,80),O.writeUInt32LE(o.length>0?k:0,84),O.writeUInt32LE(i.length,88),O.writeUInt32LE(D,92),O.writeUInt32LE(n.length,96),O.writeUInt32LE(U,100),O.writeUInt32LE(Re,104),O.writeUInt32LE(q,108),B.forEach((P,V)=>{O.writeUInt32LE(P,C+V*yi)}),p.forEach((P,V)=>{O.writeUInt32LE(P,L+V*gi)}),s.forEach((P,V)=>{let[Q,oe,ae]=P,ie=A+V*hi;O.writeUInt32LE(Q,ie),O.writeUInt32LE(oe,ie+4),O.writeUInt32LE(ae!==null?ae.offset:0,ie+8)}),o.forEach((P,V)=>{let[Q,oe,ae]=P,ie=k+V*mi;O.writeUInt16LE(Q,ie),O.writeUInt16LE(oe,ie+2),O.writeUInt32LE(ae,ie+4)}),i.forEach((P,V)=>{let[Q,oe,ae]=P,ie=D+V*_i;O.writeUInt16LE(Q,ie),O.writeUInt16LE(oe,ie+2),O.writeUInt32LE(ae,ie+4)}),n.forEach((P,V)=>{let{interfaces:Q,annotationsDirectory:oe}=P,ae=Q!==null?Q.offset:0,ie=oe!==null?oe.offset:0,yt=0,Le=U+V*fi;O.writeUInt32LE(P.index,Le),O.writeUInt32LE(P.accessFlags,Le+4),O.writeUInt32LE(P.superClassIndex,Le+8),O.writeUInt32LE(ae,Le+12),O.writeUInt32LE(P.sourceFileIndex,Le+16),O.writeUInt32LE(ie,Le+20),O.writeUInt32LE(P.classData.offset,Le+24),O.writeUInt32LE(yt,Le+28)}),c.forEach((P,V)=>{let{items:Q}=P,oe=T[V];O.writeUInt32LE(Q.length,oe),Q.forEach((ae,ie)=>{O.writeUInt32LE(ae.offset,oe+4+ie*4)})}),w.forEach((P,V)=>{let{offset:Q,superConstructor:oe}=P,ae=1,ie=1,yt=1,Le=0,Ut=4;O.writeUInt16LE(ae,Q),O.writeUInt16LE(ie,Q+2),O.writeUInt16LE(yt,Q+4),O.writeUInt16LE(Le,Q+6),O.writeUInt32LE(Z[V],Q+8),O.writeUInt32LE(Ut,Q+12),O.writeUInt16LE(4208,Q+16),O.writeUInt16LE(oe,Q+18),O.writeUInt16LE(0,Q+20),O.writeUInt16LE(14,Q+22)}),a.forEach(P=>{let V=P.offset,Q=0,oe=0,ae=P.methods.length,ie=0;O.writeUInt32LE(Q,V),O.writeUInt32LE(oe,V+4),O.writeUInt32LE(ae,V+8),O.writeUInt32LE(ie,V+12),P.methods.forEach((yt,Le)=>{let Ut=V+16+Le*8,[Es,ws]=yt;O.writeUInt32LE(Es,Ut),O.writeUInt32LE(ws.offset,Ut+4)})}),r.forEach((P,V)=>{let Q=J[V];O.writeUInt32LE(P.types.length,Q),P.types.forEach((oe,ae)=>{O.writeUInt16LE(oe,Q+4+ae*2)})}),l.forEach((P,V)=>{let Q=G[V];O.writeUInt32LE(P.types.length,Q),P.types.forEach((oe,ae)=>{O.writeUInt16LE(oe,Q+4+ae*2)})}),K.forEach((P,V)=>{P.copy(O,B[V])}),Z.forEach(P=>{vi.copy(O,P)}),Y.forEach((P,V)=>{P.copy(O,d[V].offset)}),$.forEach((P,V)=>{P.copy(O,n[V].classData.offset)}),O.writeUInt32LE(Te,H);let ge=[[wu,1,g],[Cu,h.length,C],[ku,p.length,L],[Iu,s.length,A]];o.length>0&&ge.push([Nu,o.length,k]),ge.push([Tu,i.length,D]),ge.push([xu,n.length,U]),c.forEach((P,V)=>{ge.push([Au,P.items.length,T[V]])}),w.forEach(P=>{ge.push([ju,1,P.offset])}),a.forEach(P=>{ge.push([zu,1,P.offset])}),le>0&&ge.push([Mu,le,J.concat(G)[0]]),ge.push([Pu,h.length,B[0]]),Z.forEach(P=>{ge.push([Ru,1,P])}),d.forEach(P=>{ge.push([Fu,1,P.offset])}),n.forEach(P=>{ge.push([Ou,1,P.classData.offset])}),ge.push([Lu,1,H]),ge.forEach((P,V)=>{let[Q,oe,ae]=P,ie=H+4+V*bi;O.writeUInt16LE(Q,ie),O.writeUInt32LE(oe,ie+4),O.writeUInt32LE(ae,ie+8)});let ro=new Checksum("sha1");return ro.update(O.slice(y+v)),b.from(ro.getDigest()).copy(O,y),O.writeUInt32LE(Xu(O,y),_),O}};function $u(t){let{instanceFields:e,constructorMethods:n,virtualMethods:r}=t.classData;return b.from([0].concat(Ne(e.length)).concat(Ne(n.length)).concat(Ne(r.length)).concat(e.reduce((i,[s,l])=>i.concat(Ne(s)).concat(Ne(l)),[])).concat(n.reduce((i,[s,l,,a])=>i.concat(Ne(s)).concat(Ne(l)).concat(Ne(a||0)),[])).concat(r.reduce((i,[s,l])=>i.concat(Ne(s)).concat(Ne(l)).concat([0]),[])))}function Hu(t){let{thrownTypes:e}=t;return b.from([Bu].concat(Ne(t.type)).concat([1]).concat(Ne(t.value)).concat([Uu,e.length]).concat(e.reduce((n,r)=>(n.push(Du,r),n),[])))}function Zu(t){let e=new Set,n=new Set,r={},o=[],i=[],s={},l=new Set,a=new Set;t.forEach(N=>{let{name:U,superClass:W,sourceFileName:q}=N;e.add("this"),e.add(U),n.add(U),e.add(W),n.add(W),e.add(q),N.interfaces.forEach(T=>{e.add(T),n.add(T)}),N.fields.forEach(T=>{let[w,J]=T;e.add(w),e.add(J),n.add(J),o.push([N.name,J,w])}),N.methods.some(([T])=>T==="<init>")||(N.methods.unshift(["<init>","V",[]]),l.add(U)),N.methods.forEach(T=>{let[w,J,G,K=[],B]=T;e.add(w);let Z=c(J,G),Y=null;if(K.length>0){let $=K.slice();$.sort(),Y=$.join("|");let se=s[Y];se===void 0&&(se={id:Y,types:$},s[Y]=se),e.add(Mr),n.add(Mr),K.forEach(_e=>{e.add(_e),n.add(_e)}),e.add("value")}if(i.push([N.name,Z,w,Y,B]),w==="<init>"){a.add(U+"|"+Z);let $=W+"|"+Z;l.has(U)&&!a.has($)&&(i.push([W,Z,w,null,0]),a.add($))}})});function c(N,U){let W=[N].concat(U),q=W.join("|");if(r[q]!==void 0)return q;e.add(N),n.add(N),U.forEach(w=>{e.add(w),n.add(w)});let T=W.map(Yu).join("");return e.add(T),r[q]=[q,T,N,U],q}let d=Array.from(e);d.sort();let p=d.reduce((N,U,W)=>(N[U]=W,N),{}),h=Array.from(n).map(N=>p[N]);h.sort(Si);let u=h.reduce((N,U,W)=>(N[d[U]]=W,N),{}),g=Object.keys(r).map(N=>r[N]);g.sort(qu);let _={},y=g.map(N=>{let[,U,W,q]=N,T;if(q.length>0){let w=q.join("|");T=_[w],T===void 0&&(T={types:q.map(J=>u[J]),offset:-1},_[w]=T)}else T=null;return[p[U],u[W],T]}),v=g.reduce((N,U,W)=>{let[q]=U;return N[q]=W,N},{}),S=Object.keys(_).map(N=>_[N]),C=o.map(N=>{let[U,W,q]=N;return[u[U],u[W],p[q]]});C.sort(Ku);let x=i.map(N=>{let[U,W,q,T,w]=N;return[u[U],v[W],p[q],T,w]});x.sort(Qu);let L=Object.keys(s).map(N=>s[N]).map(N=>({id:N.id,type:u[Mr],value:p.value,thrownTypes:N.types.map(U=>u[U]),offset:-1})),R=L.map(N=>({id:N.id,items:[N],offset:-1})),A=R.reduce((N,U,W)=>(N[U.id]=W,N),{}),j={},k=[],M=t.map(N=>{let U=u[N.name],W=Ot,q=u[N.superClass],T,w=N.interfaces.map(H=>u[H]);if(w.length>0){w.sort(Si);let H=w.join("|");T=j[H],T===void 0&&(T={types:w,offset:-1},j[H]=T)}else T=null;let J=p[N.sourceFileName],G=x.reduce((H,le,Te)=>{let[xe,Re,Be,O,ge]=le;return xe===U&&H.push([Te,Be,O,Re,ge]),H},[]),K=null,B=G.filter(([,,H])=>H!==null).map(([H,,le])=>[H,R[A[le]]]);B.length>0&&(K={methods:B,offset:-1},k.push(K));let Z=C.reduce((H,le,Te)=>{let[xe]=le;return xe===U&&H.push([Te>0?1:0,Ot]),H},[]),Y=p["<init>"],$=G.filter(([,H])=>H===Y).map(([H,,,le])=>{if(l.has(N.name)){let Te=-1,xe=x.length;for(let Re=0;Re!==xe;Re++){let[Be,O,ge]=x[Re];if(Be===q&&ge===Y&&O===le){Te=Re;break}}return[H,Ot|pi,Te]}else return[H,Ot|pi|Or,-1]}),se=Wu(G.filter(([,H])=>H!==Y).map(([H,,,,le])=>[H,le|Ot|Or]));return{index:U,accessFlags:W,superClassIndex:q,interfaces:T,sourceFileIndex:J,annotationsDirectory:K,classData:{instanceFields:Z,constructorMethods:$,virtualMethods:se,offset:-1}}}),D=Object.keys(j).map(N=>j[N]);return{classes:M,interfaces:D,fields:C,methods:x,protos:y,parameters:S,annotationDirectories:k,annotationSets:R,throwsAnnotations:L,types:h,strings:d}}function Wu(t){let e=0;return t.map(([n,r],o)=>{let i;return o===0?i=[n,r]:i=[n-e,r],e=n,i})}function Si(t,e){return t-e}function qu(t,e){let[,,n,r]=t,[,,o,i]=e;if(n<o)return-1;if(n>o)return 1;let s=r.join("|"),l=i.join("|");return s<l?-1:s>l?1:0}function Ku(t,e){let[n,r,o]=t,[i,s,l]=e;return n!==i?n-i:o!==l?o-l:r-s}function Qu(t,e){let[n,r,o]=t,[i,s,l]=e;return n!==i?n-i:o!==l?o-l:r-s}function Yu(t){let e=t[0];return e==="L"||e==="["?"L":t}function Ne(t){if(t<=127)return[t];let e=[],n=!1;do{let r=t&127;t>>=7,n=t!==0,n&&(r|=128),e.push(r)}while(n);return e}function Ar(t,e){let n=t%e;return n===0?t:t+e-n}function Xu(t,e){let n=1,r=0,o=t.length;for(let i=e;i<o;i++)n=(n+t[i])%65521,r=(r+n)%65521;return(r<<16|n)>>>0}var Ei=Gu;var ep=1,Pr=null,wi=null;function Ci(t){Pr=t}function Rr(t,e,n){let r=ft(t);return r===null&&(t.indexOf("[")===0?r=Fr(t,e,n):(t[0]==="L"&&t[t.length-1]===";"&&(t=t.substring(1,t.length-1)),r=np(t,e,n))),Object.assign({className:t},r)}var ki={boolean:{name:"Z",type:"uint8",size:1,byteSize:1,defaultValue:!1,isCompatible(t){return typeof t=="boolean"},fromJni(t){return!!t},toJni(t){return t?1:0},read(t){return t.readU8()},write(t,e){t.writeU8(e)},toString(){return this.name}},byte:{name:"B",type:"int8",size:1,byteSize:1,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-128&&t<=127},fromJni:je,toJni:je,read(t){return t.readS8()},write(t,e){t.writeS8(e)},toString(){return this.name}},char:{name:"C",type:"uint16",size:1,byteSize:2,defaultValue:0,isCompatible(t){if(typeof t!="string"||t.length!==1)return!1;let e=t.charCodeAt(0);return e>=0&&e<=65535},fromJni(t){return String.fromCharCode(t)},toJni(t){return t.charCodeAt(0)},read(t){return t.readU16()},write(t,e){t.writeU16(e)},toString(){return this.name}},short:{name:"S",type:"int16",size:1,byteSize:2,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-32768&&t<=32767},fromJni:je,toJni:je,read(t){return t.readS16()},write(t,e){t.writeS16(e)},toString(){return this.name}},int:{name:"I",type:"int32",size:1,byteSize:4,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-2147483648&&t<=2147483647},fromJni:je,toJni:je,read(t){return t.readS32()},write(t,e){t.writeS32(e)},toString(){return this.name}},long:{name:"J",type:"int64",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"||t instanceof Int64},fromJni:je,toJni:je,read(t){return t.readS64()},write(t,e){t.writeS64(e)},toString(){return this.name}},float:{name:"F",type:"float",size:1,byteSize:4,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:je,toJni:je,read(t){return t.readFloat()},write(t,e){t.writeFloat(e)},toString(){return this.name}},double:{name:"D",type:"double",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:je,toJni:je,read(t){return t.readDouble()},write(t,e){t.writeDouble(e)},toString(){return this.name}},void:{name:"V",type:"void",size:0,byteSize:0,defaultValue:void 0,isCompatible(t){return t===void 0},fromJni(){},toJni(){return NULL},toString(){return this.name}}},tp=new Set(Object.values(ki).map(t=>t.name));function ft(t){let e=ki[t];return e!==void 0?e:null}function np(t,e,n){let r=n._types[e?1:0],o=r[t];return o!==void 0||(t==="java.lang.Object"?o=rp(n):o=op(t,e,n),r[t]=o),o}function rp(t){return{name:"Ljava/lang/Object;",type:"pointer",size:1,defaultValue:NULL,isCompatible(e){return e===null?!0:e===void 0?!1:e.$h instanceof NativePointer?!0:typeof e=="string"},fromJni(e,n,r){return e.isNull()?null:t.cast(e,t.use("java.lang.Object"),r)},toJni(e,n){return e===null?NULL:typeof e=="string"?n.newStringUtf(e):e.$h}}}function op(t,e,n){let r=null,o=null,i=null;function s(){return r===null&&(r=n.use(t).class),r}function l(c){let d=s();return o===null&&(o=d.isInstance.overload("java.lang.Object")),o.call(d,c)}function a(){if(i===null){let c=s();i=n.use("java.lang.String").class.isAssignableFrom(c)}return i}return{name:nt(t),type:"pointer",size:1,defaultValue:NULL,isCompatible(c){return c===null?!0:c===void 0?!1:c.$h instanceof NativePointer?l(c):typeof c=="string"&&a()},fromJni(c,d,p){return c.isNull()?null:a()&&e?d.stringFromJni(c):n.cast(c,n.use(t),p)},toJni(c,d){return c===null?NULL:typeof c=="string"?d.newStringUtf(c):c.$h},toString(){return this.name}}}var ip=[["Z","boolean"],["B","byte"],["C","char"],["D","double"],["F","float"],["I","int"],["J","long"],["S","short"]].reduce((t,[e,n])=>(t["["+e]=sp("["+e,n),t),{});function sp(t,e){let n=E.prototype,r=up(e),o={typeName:e,newArray:n["new"+r+"Array"],setRegion:n["set"+r+"ArrayRegion"],getElements:n["get"+r+"ArrayElements"],releaseElements:n["release"+r+"ArrayElements"]};return{name:t,type:"pointer",size:1,defaultValue:NULL,isCompatible(i){return dp(i,e)},fromJni(i,s,l){return lp(i,o,s,l)},toJni(i,s){return cp(i,o,s)}}}function Fr(t,e,n){let r=ip[t];if(r!==void 0)return r;if(t.indexOf("[")!==0)throw new Error("Unsupported type: "+t);let o=t.substring(1),i=Rr(o,e,n),s=0,l=o.length;for(;s!==l&&o[s]==="[";)s++;o=o.substring(s),o[0]==="L"&&o[o.length-1]===";"&&(o=o.substring(1,o.length-1));let a=o.replace(/\./g,"/");tp.has(a)?a="[".repeat(s)+a:a="[".repeat(s)+"L"+a+";";let c="["+a;return o="[".repeat(s)+o,{name:t.replace(/\./g,"/"),type:"pointer",size:1,defaultValue:NULL,isCompatible(d){return d===null?!0:typeof d!="object"||d.length===void 0?!1:d.every(function(p){return i.isCompatible(p)})},fromJni(d,p,h){if(d.isNull())return null;let u=[],g=p.getArrayLength(d);for(let _=0;_!==g;_++){let y=p.getObjectArrayElement(d,_);try{u.push(i.fromJni(y,p))}finally{p.deleteLocalRef(y)}}try{u.$w=n.cast(d,n.use(c),h)}catch{n.use("java.lang.reflect.Array").newInstance(n.use(o).class,0),u.$w=n.cast(d,n.use(c),h)}return u.$dispose=ap,u},toJni(d,p){if(d===null)return NULL;if(!(d instanceof Array))throw new Error("Expected an array");let h=d.$w;if(h!==void 0)return h.$h;let u=d.length,_=n.use(o).$borrowClassHandle(p);try{let y=p.newObjectArray(u,_.value,NULL);p.throwIfExceptionPending();for(let v=0;v!==u;v++){let S=i.toJni(d[v],p);try{p.setObjectArrayElement(y,v,S)}finally{i.type==="pointer"&&p.getObjectRefType(S)===ep&&p.deleteLocalRef(S)}p.throwIfExceptionPending()}return y}finally{_.unref(p)}}}}function ap(){let t=this.length;for(let e=0;e!==t;e++){let n=this[e];if(n===null)continue;let r=n.$dispose;if(r===void 0)break;r.call(n)}this.$w.$dispose()}function lp(t,e,n,r){if(t.isNull())return null;let o=ft(e.typeName),i=n.getArrayLength(t);return new cn(t,e,o,i,n,r)}function cp(t,e,n){if(t===null)return NULL;let r=t.$h;if(r!==void 0)return r;let o=t.length,i=ft(e.typeName),s=e.newArray.call(n,o);if(s.isNull())throw new Error("Unable to construct array");if(o>0){let l=i.byteSize,a=i.write,c=i.toJni,d=Memory.alloc(o*i.byteSize);for(let p=0;p!==o;p++)a(d.add(p*l),c(t[p]));e.setRegion.call(n,s,0,o,d),n.throwIfExceptionPending()}return s}function dp(t,e){if(t===null)return!0;if(t instanceof cn)return t.$s.typeName===e;if(!(typeof t=="object"&&t.length!==void 0))return!1;let r=ft(e);return Array.prototype.every.call(t,o=>r.isCompatible(o))}function cn(t,e,n,r,o,i=!0){if(i){let s=o.newGlobalRef(t);this.$h=s,this.$r=Script.bindWeak(this,o.vm.makeHandleDestructor(s))}else this.$h=t,this.$r=null;return this.$s=e,this.$t=n,this.length=r,new Proxy(this,wi)}wi={has(t,e){return e in t?!0:t.tryParseIndex(e)!==null},get(t,e,n){let r=t.tryParseIndex(e);return r===null?t[e]:t.readElement(r)},set(t,e,n,r){let o=t.tryParseIndex(e);return o===null?(t[e]=n,!0):(t.writeElement(o,n),!0)},ownKeys(t){let e=[],{length:n}=t;for(let r=0;r!==n;r++){let o=r.toString();e.push(o)}return e.push("length"),e},getOwnPropertyDescriptor(t,e){return t.tryParseIndex(e)!==null?{writable:!0,configurable:!0,enumerable:!0}:Object.getOwnPropertyDescriptor(t,e)}};Object.defineProperties(cn.prototype,{$dispose:{enumerable:!0,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t))}},$clone:{value(t){return new cn(this.$h,this.$s,this.$t,this.length,t)}},tryParseIndex:{value(t){if(typeof t=="symbol")return null;let e=parseInt(t);return isNaN(e)||e<0||e>=this.length?null:e}},readElement:{value(t){return this.withElements(e=>{let n=this.$t;return n.fromJni(n.read(e.add(t*n.byteSize)))})}},writeElement:{value(t,e){let{$h:n,$s:r,$t:o}=this,i=Pr.getEnv(),s=Memory.alloc(o.byteSize);o.write(s,o.toJni(e)),r.setRegion.call(i,n,t,1,s)}},withElements:{value(t){let{$h:e,$s:n}=this,r=Pr.getEnv(),o=n.getElements.call(r,e);if(o.isNull())throw new Error("Unable to get array elements");try{return t(o)}finally{n.releaseElements.call(r,e,o)}}},toJSON:{value(){let{length:t,$t:e}=this,{byteSize:n,fromJni:r,read:o}=e;return this.withElements(i=>{let s=[];for(let l=0;l!==t;l++){let a=r(o(i.add(l*n)));s.push(a)}return s})}},toString:{value(){return this.toJSON().toString()}}});function nt(t){return"L"+t.replace(/\./g,"/")+";"}function up(t){return t.charAt(0).toUpperCase()+t.slice(1)}function je(t){return t}var pp=4,{ensureClassInitialized:Ii,makeMethodMangler:Ai}=an,fp=8,Ur=1,Pt=2,$e=3,zr=1,Br=2,dn=1,Oi=2,Ni=Symbol("PENDING_USE"),Ti="/data/local/tmp",{getCurrentThreadId:pn,pointerSize:jt}=Process,ve={state:"empty",factories:[],loaders:null,Integer:null},re=null,de=null,ji=null,Pi=null,Ri=null,Fi=null,zi=null,xi=null,Dr=null,mt=new Map,Ke=class t{static _initialize(e,n){re=e,de=n,ji=n.flavor==="art",n.flavor==="jvm"&&(Ii=ii,Ai=ai)}static _disposeAll(e){ve.factories.forEach(n=>{n._dispose(e)})}static get(e){let n=Op(),r=n.factories[0];if(e===null)return r;let o=n.loaders.get(e);if(o!==null){let s=r.cast(o,n.Integer);return n.factories[s.intValue()]}let i=new t;return i.loader=e,i.cacheDir=r.cacheDir,Gr(i,e),i}constructor(){this.cacheDir=Ti,this.codeCacheDir=Ti+"/dalvik-cache",this.tempFileNaming={prefix:"frida",suffix:""},this._classes={},this._classHandles=new At(10,mp),this._patchedMethods=new Set,this._loader=null,this._types=[{},{}],ve.factories.push(this)}_dispose(e){Array.from(this._patchedMethods).forEach(n=>{n.implementation=null}),this._patchedMethods.clear(),Sr(),this._classHandles.dispose(e),this._classes={}}get loader(){return this._loader}set loader(e){let n=this._loader===null&&e!==null;this._loader=e,n&&ve.state==="ready"&&this===ve.factories[0]&&Gr(this,e)}use(e,n={}){let r=n.cache!=="skip",o=r?this._getUsedClass(e):void 0;if(o===void 0)try{let i=re.getEnv(),{_loader:s}=this,l=s!==null?gp(e,s,i):_p(e);o=this._make(e,l,i)}finally{r&&this._setUsedClass(e,o)}return o}_getUsedClass(e){let n;for(;(n=this._classes[e])===Ni;)Thread.sleep(.05);return n===void 0&&(this._classes[e]=Ni),n}_setUsedClass(e,n){n!==void 0?this._classes[e]=n:delete this._classes[e]}_make(e,n,r){let o=hp(),i=Object.create(Hr.prototype,{[Symbol.for("n")]:{value:e},$n:{get(){return this[Symbol.for("n")]}},[Symbol.for("C")]:{value:o},$C:{get(){return this[Symbol.for("C")]}},[Symbol.for("w")]:{value:null,writable:!0},$w:{get(){return this[Symbol.for("w")]},set(a){this[Symbol.for("w")]=a}},[Symbol.for("_s")]:{writable:!0},$_s:{get(){return this[Symbol.for("_s")]},set(a){this[Symbol.for("_s")]=a}},[Symbol.for("c")]:{value:[null]},$c:{get(){return this[Symbol.for("c")]}},[Symbol.for("m")]:{value:new Map},$m:{get(){return this[Symbol.for("m")]}},[Symbol.for("l")]:{value:null,writable:!0},$l:{get(){return this[Symbol.for("l")]},set(a){this[Symbol.for("l")]=a}},[Symbol.for("gch")]:{value:n},$gch:{get(){return this[Symbol.for("gch")]}},[Symbol.for("f")]:{value:this},$f:{get(){return this[Symbol.for("f")]}}});o.prototype=i;let s=new o(null);i[Symbol.for("w")]=s,i.$w=s;let l=s.$borrowClassHandle(r);try{let a=l.value;Ii(r,a),i.$l=tt.build(a,r)}finally{l.unref(r)}return s}retain(e){let n=re.getEnv();return e.$clone(n)}cast(e,n,r){let o=re.getEnv(),i=e.$h;i===void 0&&(i=e);let s=n.$borrowClassHandle(o);try{if(!o.isInstanceOf(i,s.value))throw new Error(`Cast from '${o.getObjectClassName(i)}' to '${n.$n}' isn't possible`)}finally{s.unref(o)}let l=n.$C;return new l(i,dn,o,r)}wrap(e,n,r){let o=n.$C,i=new o(e,dn,r,!1);return i.$r=Script.bindWeak(i,re.makeHandleDestructor(e)),i}array(e,n){let r=re.getEnv(),o=ft(e);o!==null&&(e=o.name);let i=Fr("["+e,!1,this),s=i.toJni(n,r);return i.fromJni(s,r,!0)}registerClass(e){let n=re.getEnv(),r=[];try{let o=this.use("java.lang.Class"),i=n.javaLangReflectMethod(),s=n.vaMethod("pointer",[]),l=e.name,a=e.implements||[],c=e.superClass||this.use("java.lang.Object"),d=[],p=[],h={name:nt(l),sourceFileName:Pp(l),superClass:nt(c.$n),interfaces:a.map(k=>nt(k.$n)),fields:d,methods:p},u=a.slice();a.forEach(k=>{Array.prototype.slice.call(k.class.getInterfaces()).forEach(M=>{let D=this.cast(M,o).getCanonicalName();u.push(this.use(D))})});let g=e.fields||{};Object.getOwnPropertyNames(g).forEach(k=>{let M=this._getType(g[k]);d.push([k,M.name])});let _={},y={};u.forEach(k=>{let M=k.$borrowClassHandle(n);r.push(M);let D=M.value;k.$ownMembers.filter(N=>k[N].overloads!==void 0).forEach(N=>{let U=k[N],W=U.overloads,q=W.map(T=>Li(N,T.returnType,T.argumentTypes));_[N]=[U,q,D],W.forEach((T,w)=>{let J=q[w];y[J]=[T,D]})})});let v=e.methods||{},C=Object.keys(v).reduce((k,M)=>{let D=v[M],N=M==="$init"?"<init>":M;return D instanceof Array?k.push(...D.map(U=>[N,U])):k.push([N,D]),k},[]),x=[];C.forEach(([k,M])=>{let D=$e,N,U,W=[],q;if(typeof M=="function"){let G=_[k];if(G!==void 0&&Array.isArray(G)){let[K,B,Z]=G;if(B.length>1)throw new Error(`More than one overload matching '${k}': signature must be specified`);delete y[B[0]];let Y=K.overloads[0];D=Y.type,N=Y.returnType,U=Y.argumentTypes,q=M;let $=n.toReflectedMethod(Z,Y.handle,0),se=s(n.handle,$,i.getGenericExceptionTypes);W=$r(n,se).map(nt),n.deleteLocalRef(se),n.deleteLocalRef($)}else N=this._getType("void"),U=[],q=M}else{if(M.isStatic&&(D=Pt),N=this._getType(M.returnType||"void"),U=(M.argumentTypes||[]).map(B=>this._getType(B)),q=M.implementation,typeof q!="function")throw new Error("Expected a function implementation for method: "+k);let G=Li(k,N,U),K=y[G];if(K!==void 0){let[B,Z]=K;delete y[G],D=B.type,N=B.returnType,U=B.argumentTypes;let Y=n.toReflectedMethod(Z,B.handle,0),$=s(n.handle,Y,i.getGenericExceptionTypes);W=$r(n,$).map(nt),n.deleteLocalRef($),n.deleteLocalRef(Y)}}let T=N.name,w=U.map(G=>G.name),J="("+w.join("")+")"+T;p.push([k,T,w,W,D===Pt?fp:0]),x.push([k,J,D,N,U,q])});let L=Object.keys(y);if(L.length>0)throw new Error("Missing implementation for: "+L.join(", "));let R=un.fromBuffer(Ei(h),this);try{R.load()}finally{R.file.delete()}let A=this.use(e.name),j=C.length;if(j>0){let k=3*jt,M=Memory.alloc(j*k),D=[],N=[];x.forEach(([q,T,w,J,G,K],B)=>{let Z=Memory.allocUtf8String(q),Y=Memory.allocUtf8String(T),$=Di(q,A,w,J,G,K);M.add(B*k).writePointer(Z),M.add(B*k+jt).writePointer(Y),M.add(B*k+2*jt).writePointer($),N.push(Z,Y),D.push($)});let U=A.$borrowClassHandle(n);r.push(U);let W=U.value;n.registerNatives(W,M,j),n.throwIfExceptionPending(),A.$nativeMethods=D}return A}finally{r.forEach(o=>{o.unref(n)})}}choose(e,n){let r=re.getEnv(),{flavor:o}=de;if(o==="jvm")this._chooseObjectsJvm(e,r,n);else if(o==="art"){let i=de["art::gc::Heap::VisitObjects"]===void 0;if(i&&de["art::gc::Heap::GetInstances"]===void 0)return this._chooseObjectsJvm(e,r,n);Ae(re,r,s=>{i?this._chooseObjectsArtPreA12(e,r,s,n):this._chooseObjectsArtLegacy(e,r,s,n)})}else this._chooseObjectsDalvik(e,r,n)}_chooseObjectsJvm(e,n,r){let o=this.use(e),{jvmti:i}=de,s=1,l=3,a=o.$borrowClassHandle(n),c=int64(a.value.toString());try{let d=new NativeCallback((v,S,C,x)=>(C.writeS64(c),s),"int",["int64","int64","pointer","pointer"]);i.iterateOverInstancesOfClass(a.value,l,d,a.value);let p=Memory.alloc(8);p.writeS64(c);let h=Memory.alloc(pp),u=Memory.alloc(jt);i.getObjectsWithTags(1,p,h,u,NULL);let g=h.readS32(),_=u.readPointer(),y=[];for(let v=0;v!==g;v++)y.push(_.add(v*jt).readPointer());i.deallocate(_);try{for(let v of y){let S=this.cast(v,o);if(r.onMatch(S)==="stop")break}r.onComplete()}finally{y.forEach(v=>{n.deleteLocalRef(v)})}}finally{a.unref(n)}}_chooseObjectsArtPreA12(e,n,r,o){let i=this.use(e),s=Tt.$new(r,re),l,a=i.$borrowClassHandle(n);try{let h=de["art::JavaVMExt::DecodeGlobal"](de.vm,r,a.value);l=s.newHandle(h)}finally{a.unref(n)}let c=0,d=Nt.$new();de["art::gc::Heap::GetInstances"](de.artHeap,s,l,c,d);let p=d.handles.map(h=>n.newGlobalRef(h));d.$delete(),s.$delete();try{for(let h of p){let u=this.cast(h,i);if(o.onMatch(u)==="stop")break}o.onComplete()}finally{p.forEach(h=>{n.deleteGlobalRef(h)})}}_chooseObjectsArtLegacy(e,n,r,o){let i=this.use(e),s=[],l=de["art::JavaVMExt::AddGlobalRef"],a=de.vm,c,d=i.$borrowClassHandle(n);try{c=de["art::JavaVMExt::DecodeGlobal"](a,r,d.value).toInt32()}finally{d.unref(n)}let p=Nr(c,h=>{s.push(l(a,r,h))});de["art::gc::Heap::VisitObjects"](de.artHeap,p,NULL);try{for(let h of s){let u=this.cast(h,i);if(o.onMatch(u)==="stop")break}}finally{s.forEach(h=>{n.deleteGlobalRef(h)})}o.onComplete()}_chooseObjectsDalvik(e,n,r){let o=this.use(e);if(de.addLocalReference===null){let s=Process.getModuleByName("libdvm.so"),l;switch(Process.arch){case"arm":l="2d e9 f0 41 05 46 15 4e 0c 46 7e 44 11 b3 43 68";break;case"ia32":l="8d 64 24 d4 89 5c 24 1c 89 74 24 20 e8 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 85 d2";break}Memory.scan(s.base,s.size,l,{onMatch:(a,c)=>{let d;if(Process.arch==="arm")a=a.or(1),d=new NativeFunction(a,"pointer",["pointer","pointer"]);else{let p=Memory.alloc(Process.pageSize);Memory.patchCode(p,16,h=>{let u=new X86Writer(h,{pc:p});u.putMovRegRegOffsetPtr("eax","esp",4),u.putMovRegRegOffsetPtr("edx","esp",8),u.putJmpAddress(a),u.flush()}),d=new NativeFunction(p,"pointer",["pointer","pointer"]),d._thunk=p}return de.addLocalReference=d,re.perform(p=>{i(this,p)}),"stop"},onError(a){},onComplete(){de.addLocalReference===null&&r.onComplete()}})}else i(this,n);function i(s,l){let{DVM_JNI_ENV_OFFSET_SELF:a}=an,c=l.handle.add(a).readPointer(),d,p=o.$borrowClassHandle(l);try{d=de.dvmDecodeIndirectRef(c,p.value)}finally{p.unref(l)}let h=d.toMatchPattern(),u=de.dvmHeapSourceGetBase(),_=de.dvmHeapSourceGetLimit().sub(u).toInt32();Memory.scan(u,_,h,{onMatch:(y,v)=>{de.dvmIsValidObject(y)&&re.perform(S=>{let C=S.handle.add(a).readPointer(),x,L=de.addLocalReference(C,y);try{x=s.cast(L,o)}finally{S.deleteLocalRef(L)}if(r.onMatch(x)==="stop")return"stop"})},onError(y){},onComplete(){r.onComplete()}})}}openClassFile(e){return new un(e,null,this)}_getType(e,n=!0){return Rr(e,n,this)}};function hp(){return function(t,e,n,r){return Hr.call(this,t,e,n,r)}}function Hr(t,e,n,r=!0){if(t!==null)if(r){let o=n.newGlobalRef(t);this.$h=o,this.$r=Script.bindWeak(this,re.makeHandleDestructor(o))}else this.$h=t,this.$r=null;else this.$h=null,this.$r=null;return this.$t=e,new Proxy(this,Pi)}Pi={has(t,e){return e in t?!0:t.$has(e)},get(t,e,n){if(typeof e!="string"||e.startsWith("$")||e==="class")return t[e];let r=t.$find(e);return r!==null?r(n):t[e]},set(t,e,n,r){return t[e]=n,!0},ownKeys(t){return t.$list()},getOwnPropertyDescriptor(t,e){return Object.prototype.hasOwnProperty.call(t,e)?Object.getOwnPropertyDescriptor(t,e):{writable:!1,configurable:!0,enumerable:!0}}};Object.defineProperties(Hr.prototype,{[Symbol.for("new")]:{enumerable:!1,get(){return this.$getCtor("allocAndInit")}},$new:{enumerable:!0,get(){return this[Symbol.for("new")]}},[Symbol.for("alloc")]:{enumerable:!1,value(){let t=re.getEnv(),e=this.$borrowClassHandle(t);try{let n=t.allocObject(e.value);return this.$f.cast(n,this)}finally{e.unref(t)}}},$alloc:{enumerable:!0,get(){return this[Symbol.for("alloc")]}},[Symbol.for("init")]:{enumerable:!1,get(){return this.$getCtor("initOnly")}},$init:{enumerable:!0,get(){return this[Symbol.for("init")]}},[Symbol.for("dispose")]:{enumerable:!1,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t)),this.$h!==null&&(this.$h=void 0)}},$dispose:{enumerable:!0,get(){return this[Symbol.for("dispose")]}},[Symbol.for("clone")]:{enumerable:!1,value(t){let e=this.$C;return new e(this.$h,this.$t,t)}},$clone:{value(t){return this[Symbol.for("clone")](t)}},[Symbol.for("class")]:{enumerable:!1,get(){let t=re.getEnv(),e=this.$borrowClassHandle(t);try{let n=this.$f;return n.cast(e.value,n.use("java.lang.Class"))}finally{e.unref(t)}}},class:{enumerable:!0,get(){return this[Symbol.for("class")]}},[Symbol.for("className")]:{enumerable:!1,get(){let t=this.$h;return t===null?this.$n:re.getEnv().getObjectClassName(t)}},$className:{enumerable:!0,get(){return this[Symbol.for("className")]}},[Symbol.for("ownMembers")]:{enumerable:!1,get(){return this.$l.list()}},$ownMembers:{enumerable:!0,get(){return this[Symbol.for("ownMembers")]}},[Symbol.for("super")]:{enumerable:!1,get(){let t=re.getEnv(),e=this.$s.$C;return new e(this.$h,Oi,t)}},$super:{enumerable:!0,get(){return this[Symbol.for("super")]}},[Symbol.for("s")]:{enumerable:!1,get(){let t=Object.getPrototypeOf(this),e=t.$_s;if(e===void 0){let n=re.getEnv(),r=this.$borrowClassHandle(n);try{let o=n.getSuperclass(r.value);if(o.isNull())e=null;else try{let i=n.getClassName(o),s=t.$f;if(e=s._getUsedClass(i),e===void 0)try{let l=yp(this);e=s._make(i,l,n)}finally{s._setUsedClass(i,e)}}finally{n.deleteLocalRef(o)}}finally{r.unref(n)}t.$_s=e}return e}},$s:{get(){return this[Symbol.for("s")]}},[Symbol.for("isSameObject")]:{enumerable:!1,value(t){return re.getEnv().isSameObject(t.$h,this.$h)}},$isSameObject:{value(t){return this[Symbol.for("isSameObject")](t)}},[Symbol.for("getCtor")]:{enumerable:!1,value(t){let e=this.$c,n=e[0];if(n===null){let r=re.getEnv(),o=this.$borrowClassHandle(r);try{n=bp(o.value,this.$w,r),e[0]=n}finally{o.unref(r)}}return n[t]}},$getCtor:{value(t){return this[Symbol.for("getCtor")](t)}},[Symbol.for("borrowClassHandle")]:{enumerable:!1,value(t){let e=this.$n,n=this.$f._classHandles,r=n.get(e);return r===void 0&&(r=new Zr(this.$gch(t),t),n.set(e,r,t)),r.ref()}},$borrowClassHandle:{value(t){return this[Symbol.for("borrowClassHandle")](t)}},[Symbol.for("copyClassHandle")]:{enumerable:!1,value(t){let e=this.$borrowClassHandle(t);try{return t.newLocalRef(e.value)}finally{e.unref(t)}}},$copyClassHandle:{value(t){return this[Symbol.for("copyClassHandle")](t)}},[Symbol.for("getHandle")]:{enumerable:!1,value(t){let e=this.$h;if(e===void 0)throw new Error("Wrapper is disposed; perhaps it was borrowed from a hook instead of calling Java.retain() to make a long-lived wrapper?");return e}},$getHandle:{value(t){return this[Symbol.for("getHandle")](t)}},[Symbol.for("list")]:{enumerable:!1,value(){let t=this.$s,e=t!==null?t.$list():[],n=this.$l;return Array.from(new Set(e.concat(n.list())))}},$list:{get(){return this[Symbol.for("list")]}},[Symbol.for("has")]:{enumerable:!1,value(t){if(this.$m.has(t)||this.$l.has(t))return!0;let r=this.$s;return!!(r!==null&&r.$has(t))}},$has:{value(t){return this[Symbol.for("has")](t)}},[Symbol.for("find")]:{enumerable:!1,value(t){let e=this.$m,n=e.get(t);if(n!==void 0)return n;let o=this.$l.find(t);if(o!==null){let s=re.getEnv(),l=this.$borrowClassHandle(s);try{n=vp(t,o,l.value,this.$w,s)}finally{l.unref(s)}return e.set(t,n),n}let i=this.$s;return i!==null?i.$find(t):null}},$find:{value(t){return this[Symbol.for("find")](t)}},[Symbol.for("toJSON")]:{enumerable:!1,value(){let t=this.$n;if(this.$h===null)return`<class: ${t}>`;let n=this.$className;return t===n?`<instance: ${t}>`:`<instance: ${t}, $className: ${n}>`}},toJSON:{get(){return this[Symbol.for("toJSON")]}}});function Zr(t,e){this.value=e.newGlobalRef(t),e.deleteLocalRef(t),this.refs=1}Zr.prototype.ref=function(){return this.refs++,this};Zr.prototype.unref=function(t){--this.refs===0&&t.deleteGlobalRef(this.value)};function mp(t,e){t.unref(e)}function _p(t){let e=t.replace(/\./g,"/");return function(n){let r=pn();Bi(r);try{return n.findClass(e)}finally{Vi(r)}}}function gp(t,e,n){return Dr===null&&(xi=n.vaMethod("pointer",["pointer"]),Dr=e.loadClass.overload("java.lang.String").handle),n=null,function(r){let o=r.newStringUtf(t),i=pn();Bi(i);try{let s=xi(r.handle,e.$h,Dr,o);return r.throwIfExceptionPending(),s}finally{Vi(i),r.deleteLocalRef(o)}}}function yp(t){return function(e){let n=t.$borrowClassHandle(e);try{return e.getSuperclass(n.value)}finally{n.unref(e)}}}function bp(t,e,n){let{$n:r,$f:o}=e,i=jp(r),s=n.javaLangClass(),l=n.javaLangReflectConstructor(),a=n.vaMethod("pointer",[]),c=n.vaMethod("uint8",[]),d=[],p=[],h=o._getType(r,!1),u=o._getType("void",!1),g=a(n.handle,t,s.getDeclaredConstructors);try{let _=n.getArrayLength(g);if(_!==0)for(let y=0;y!==_;y++){let v,S,C=n.getObjectArrayElement(g,y);try{v=n.fromReflectedMethod(C),S=a(n.handle,C,l.getGenericParameterTypes)}finally{n.deleteLocalRef(C)}let x;try{x=$r(n,S).map(L=>o._getType(L))}finally{n.deleteLocalRef(S)}d.push(ht(i,e,Ur,v,h,x,n)),p.push(ht(i,e,$e,v,u,x,n))}else{if(c(n.handle,t,s.isInterface))throw new Error("cannot instantiate an interface");let v=n.javaLangObject(),S=n.getMethodId(v,"<init>","()V");d.push(ht(i,e,Ur,S,h,[],n)),p.push(ht(i,e,$e,S,u,[],n))}}finally{n.deleteLocalRef(g)}if(p.length===0)throw new Error("no supported overloads");return{allocAndInit:Vr(d),initOnly:Vr(p)}}function vp(t,e,n,r,o){return e.startsWith("m")?Sp(t,e,n,r,o):Lp(t,e,n,r,o)}function Sp(t,e,n,r,o){let{$f:i}=r,s=e.split(":").slice(1),l=o.javaLangReflectMethod(),a=o.vaMethod("pointer",[]),c=o.vaMethod("uint8",[]),d=s.map(h=>{let u=h[0]==="s"?Pt:$e,g=ptr(h.substr(1)),_,y=[],v=o.toReflectedMethod(n,g,u===Pt?1:0);try{let S=!!c(o.handle,v,l.isVarArgs),C=a(o.handle,v,l.getGenericReturnType);o.throwIfExceptionPending();try{_=i._getType(o.getTypeName(C))}finally{o.deleteLocalRef(C)}let x=a(o.handle,v,l.getParameterTypes);try{let L=o.getArrayLength(x);for(let R=0;R!==L;R++){let A=o.getObjectArrayElement(x,R),j;try{j=S&&R===L-1?o.getArrayTypeName(A):o.getTypeName(A)}finally{o.deleteLocalRef(A)}let k=i._getType(j);y.push(k)}}finally{o.deleteLocalRef(x)}}catch{return null}finally{o.deleteLocalRef(v)}return ht(t,r,u,g,_,y,o)}).filter(h=>h!==null);if(d.length===0)throw new Error("No supported overloads");t==="valueOf"&&Np(d);let p=Vr(d);return function(h){return p}}function Vr(t){let e=Ep();return Object.setPrototypeOf(e,Ri),e._o=t,e}function Ep(){let t=function(){return t.invoke(this,arguments)};return t}Ri=Object.create(Function.prototype,{overloads:{enumerable:!0,get(){return this._o}},overload:{value(...t){let e=this._o,n=t.length,r=t.join(":");for(let o=0;o!==e.length;o++){let i=e[o],{argumentTypes:s}=i;if(s.length!==n)continue;if(s.map(a=>a.className).join(":")===r)return i}Jr(this.methodName,this.overloads,"specified argument types do not match any of:")}},methodName:{enumerable:!0,get(){return this._o[0].methodName}},holder:{enumerable:!0,get(){return this._o[0].holder}},type:{enumerable:!0,get(){return this._o[0].type}},handle:{enumerable:!0,get(){return rt(this),this._o[0].handle}},implementation:{enumerable:!0,get(){return rt(this),this._o[0].implementation},set(t){rt(this),this._o[0].implementation=t}},returnType:{enumerable:!0,get(){return rt(this),this._o[0].returnType}},argumentTypes:{enumerable:!0,get(){return rt(this),this._o[0].argumentTypes}},canInvokeWith:{enumerable:!0,get(t){return rt(this),this._o[0].canInvokeWith}},clone:{enumerable:!0,value(t){return rt(this),this._o[0].clone(t)}},invoke:{value(t,e){let n=this._o,r=t.$h!==null;for(let o=0;o!==n.length;o++){let i=n[o];if(i.canInvokeWith(e)){if(i.type===$e&&!r){let s=this.methodName;if(s==="toString")return`<class: ${t.$n}>`;throw new Error(s+": cannot call instance method without an instance")}return i.apply(t,e)}}if(this.methodName==="toString")return`<class: ${t.$n}>`;Jr(this.methodName,this.overloads,"argument types do not match any of:")}}});function Li(t,e,n){return`${e.className} ${t}(${n.map(r=>r.className).join(", ")})`}function rt(t){let e=t._o;e.length>1&&Jr(e[0].methodName,e,"has more than one overload, use .overload(<signature>) to choose from:")}function Jr(t,e,n){let o=e.slice().sort((i,s)=>i.argumentTypes.length-s.argumentTypes.length).map(i=>i.argumentTypes.length>0?".overload('"+i.argumentTypes.map(l=>l.className).join("', '")+"')":".overload()");throw new Error(`${t}(): ${n}
	${o.join(`
	`)}`)}function ht(t,e,n,r,o,i,s,l){let a=o.type,c=i.map(h=>h.type);s===null&&(s=re.getEnv());let d,p;return n===$e?(d=s.vaMethod(a,c,l),p=s.nonvirtualVaMethod(a,c,l)):n===Pt?(d=s.staticVaMethod(a,c,l),p=d):(d=s.constructor(c,l),p=d),wp([t,e,n,r,o,i,d,p])}function wp(t){let e=Cp();return Object.setPrototypeOf(e,Fi),e._p=t,e}function Cp(){let t=function(){return t.invoke(this,arguments)};return t}Fi=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return this._p[0]}},holder:{enumerable:!0,get(){return this._p[1]}},type:{enumerable:!0,get(){return this._p[2]}},handle:{enumerable:!0,get(){return this._p[3]}},implementation:{enumerable:!0,get(){let t=this._r;return t!==void 0?t:null},set(t){let e=this._p,n=e[1];if(e[2]===Ur)throw new Error("Reimplementing $new is not possible; replace implementation of $init instead");let o=this._r;if(o!==void 0&&(n.$f._patchedMethods.delete(this),o._m.revert(re),this._r=void 0),t!==null){let[i,s,l,a,c,d]=e,p=Di(i,s,l,c,d,t,this),h=Ai(a);p._m=h,this._r=p,h.replace(p,l===$e,d,re,de),n.$f._patchedMethods.add(this)}}},returnType:{enumerable:!0,get(){return this._p[4]}},argumentTypes:{enumerable:!0,get(){return this._p[5]}},canInvokeWith:{enumerable:!0,value(t){let e=this._p[5];return t.length!==e.length?!1:e.every((n,r)=>n.isCompatible(t[r]))}},clone:{enumerable:!0,value(t){let e=this._p.slice(0,6);return ht(...e,null,t)}},invoke:{value(t,e){let n=re.getEnv(),r=this._p,o=r[2],i=r[4],s=r[5],l=this._r,a=o===$e,c=e.length,d=2+c;n.pushLocalFrame(d);let p=null;try{let h;a?h=t.$getHandle():(p=t.$borrowClassHandle(n),h=p.value);let u,g=t.$t;l===void 0?u=r[3]:(u=l._m.resolveTarget(t,a,n,de),ji&&l._c.has(pn())&&(g=Oi));let _=[n.handle,h,u];for(let S=0;S!==c;S++)_.push(s[S].toJni(e[S],n));let y;g===dn?y=r[6]:(y=r[7],a&&_.splice(2,0,t.$copyClassHandle(n)));let v=y.apply(null,_);return n.throwIfExceptionPending(),i.fromJni(v,n,!0)}finally{p!==null&&p.unref(n),n.popLocalFrame(NULL)}}},toString:{enumerable:!0,value(){return`function ${this.methodName}(${this.argumentTypes.map(t=>t.className).join(", ")}): ${this.returnType.className}`}}});function Di(t,e,n,r,o,i,s=null){let l=new Set,a=kp([t,e,n,r,o,i,s,l]),c=new NativeCallback(a,r.type,["pointer","pointer"].concat(o.map(d=>d.type)));return c._c=l,c}function kp(t){return function(){return Ip(arguments,t)}}function Ip(t,e){let n=new E(t[0],re),[r,o,i,s,l,a,c,d]=e,p=[],h;if(i===$e){let _=o.$C;h=new _(t[1],dn,n,!1)}else h=o;let u=pn();n.pushLocalFrame(3);let g=!0;re.link(u,n);try{d.add(u);let _;c===null||!mt.has(u)?_=a:_=c;let y=[],v=t.length-2;for(let x=0;x!==v;x++){let R=l[x].fromJni(t[2+x],n,!1);y.push(R),p.push(R)}let S=_.apply(h,y);if(!s.isCompatible(S))throw new Error(`Implementation for ${r} expected return value compatible with ${s.className}`);let C=s.toJni(S,n);return s.type==="pointer"&&(C=n.popLocalFrame(C),g=!1,p.push(S)),C}catch(_){let y=_.$h;return y!==void 0?n.throw(y):Script.nextTick(()=>{throw _}),s.defaultValue}finally{re.unlink(u),g&&n.popLocalFrame(NULL),d.delete(u),p.forEach(_=>{if(_===null)return;let y=_.$dispose;y!==void 0&&y.call(_)})}}function Np(t){let{holder:e,type:n}=t[0];t.some(o=>o.type===n&&o.argumentTypes.length===0)||t.push(Tp([e,n]))}function Tp(t){let e=xp();return Object.setPrototypeOf(e,zi),e._p=t,e}function xp(){return function(){return this}}zi=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return"valueOf"}},holder:{enumerable:!0,get(){return this._p[0]}},type:{enumerable:!0,get(){return this._p[1]}},handle:{enumerable:!0,get(){return NULL}},implementation:{enumerable:!0,get(){return null},set(t){}},returnType:{enumerable:!0,get(){let t=this.holder;return t.$f.use(t.$n)}},argumentTypes:{enumerable:!0,get(){return[]}},canInvokeWith:{enumerable:!0,value(t){return t.length===0}},clone:{enumerable:!0,value(t){throw new Error("Invalid operation")}}});function Lp(t,e,n,r,o){let i=e[2]==="s"?zr:Br,s=ptr(e.substr(3)),{$f:l}=r,a,c=o.toReflectedField(n,s,i===zr?1:0);try{a=o.vaMethod("pointer",[])(o.handle,c,o.javaLangReflectField().getGenericType),o.throwIfExceptionPending()}finally{o.deleteLocalRef(c)}let d;try{d=l._getType(o.getTypeName(a))}finally{o.deleteLocalRef(a)}let p,h,u=d.type;return i===zr?(p=o.getStaticField(u),h=o.setStaticField(u)):(p=o.getField(u),h=o.setField(u)),Mp([i,d,s,p,h])}function Mp(t){return function(e){return new Ui([e].concat(t))}}function Ui(t){this._p=t}Object.defineProperties(Ui.prototype,{value:{enumerable:!0,get(){let[t,e,n,r,o]=this._p,i=re.getEnv();i.pushLocalFrame(4);let s=null;try{let l;if(e===Br){if(l=t.$getHandle(),l===null)throw new Error("Cannot access an instance field without an instance")}else s=t.$borrowClassHandle(i),l=s.value;let a=o(i.handle,l,r);return i.throwIfExceptionPending(),n.fromJni(a,i,!0)}finally{s!==null&&s.unref(i),i.popLocalFrame(NULL)}},set(t){let[e,n,r,o,,i]=this._p,s=re.getEnv();s.pushLocalFrame(4);let l=null;try{let a;if(n===Br){if(a=e.$getHandle(),a===null)throw new Error("Cannot access an instance field without an instance")}else l=e.$borrowClassHandle(s),a=l.value;if(!r.isCompatible(t))throw new Error(`Expected value compatible with ${r.className}`);let c=r.toJni(t,s);i(s.handle,a,o,c),s.throwIfExceptionPending()}finally{l!==null&&l.unref(s),s.popLocalFrame(NULL)}}},holder:{enumerable:!0,get(){return this._p[0]}},fieldType:{enumerable:!0,get(){return this._p[1]}},fieldReturnType:{enumerable:!0,get(){return this._p[2]}},toString:{enumerable:!0,value(){let t=`Java.Field{holder: ${this.holder}, fieldType: ${this.fieldType}, fieldReturnType: ${this.fieldReturnType}, value: ${this.value}}`;return t.length<200?t:`Java.Field{
	holder: ${this.holder},
	fieldType: ${this.fieldType},
	fieldReturnType: ${this.fieldReturnType},
	value: ${this.value},
}`.split(`
`).map(n=>n.length>200?n.slice(0,n.indexOf(" ")+1)+"...,":n).join(`
`)}}});var un=class t{static fromBuffer(e,n){let r=Mi(n),o=r.getCanonicalPath().toString(),i=new File(o,"w");return i.write(e.buffer),i.close(),Ap(o,n),new t(o,r,n)}constructor(e,n,r){this.path=e,this.file=n,this._factory=r}load(){let{_factory:e}=this,{codeCacheDir:n}=e,r=e.use("dalvik.system.DexClassLoader"),o=e.use("java.io.File"),i=this.file;if(i===null&&(i=e.use("java.io.File").$new(this.path)),!i.exists())throw new Error("File not found");o.$new(n).mkdirs(),e.loader=r.$new(i.getCanonicalPath(),n,null,e.loader),re.preventDetachDueToClassLoader()}getClassNames(){let{_factory:e}=this,n=e.use("dalvik.system.DexFile"),r=Mi(e),o=n.loadDex(this.path,r.getCanonicalPath(),0),i=[],s=o.entries();for(;s.hasMoreElements();)i.push(s.nextElement().toString());return i}};function Mi(t){let{cacheDir:e,tempFileNaming:n}=t,r=t.use("java.io.File"),o=r.$new(e);return o.mkdirs(),r.createTempFile(n.prefix,n.suffix+".dex",o)}function Ap(t,e){e.use("java.io.File").$new(t).setWritable(!1,!1)}function Op(){switch(ve.state){case"empty":{ve.state="pending";let t=ve.factories[0],e=t.use("java.util.HashMap"),n=t.use("java.lang.Integer");ve.loaders=e.$new(),ve.Integer=n;let r=t.loader;return r!==null&&Gr(t,r),ve.state="ready",ve}case"pending":do Thread.sleep(.05);while(ve.state==="pending");return ve;case"ready":return ve}}function Gr(t,e){let{factories:n,loaders:r,Integer:o}=ve,i=o.$new(n.indexOf(t));r.put(e,i);for(let s=e.getParent();s!==null&&!r.containsKey(s);s=s.getParent())r.put(s,i)}function Bi(t){let e=mt.get(t);e===void 0&&(e=0),e++,mt.set(t,e)}function Vi(t){let e=mt.get(t);if(e===void 0)throw new Error(`Thread ${t} is not ignored`);e--,e===0?mt.delete(t):mt.set(t,e)}function jp(t){return t.slice(t.lastIndexOf(".")+1)}function $r(t,e){let n=[],r=t.getArrayLength(e);for(let o=0;o!==r;o++){let i=t.getObjectArrayElement(e,o);try{n.push(t.getTypeName(i))}finally{t.deleteLocalRef(i)}}return n}function Pp(t){let e=t.split(".");return e[e.length-1]+".java"}var Rp=4,Ji=Process.pointerSize,Wr=class{ACC_PUBLIC=1;ACC_PRIVATE=2;ACC_PROTECTED=4;ACC_STATIC=8;ACC_FINAL=16;ACC_SYNCHRONIZED=32;ACC_BRIDGE=64;ACC_VARARGS=128;ACC_NATIVE=256;ACC_ABSTRACT=1024;ACC_STRICT=2048;ACC_SYNTHETIC=4096;constructor(){this.classFactory=null,this.ClassFactory=Ke,this.vm=null,this.api=null,this._initialized=!1,this._apiError=null,this._wakeupHandler=null,this._pollListener=null,this._pendingMainOps=[],this._pendingVmOps=[],this._cachedIsAppProcess=null;try{this._tryInitialize()}catch{}}_tryInitialize(){if(this._initialized)return!0;if(this._apiError!==null)throw this._apiError;let e;try{e=Mt(),this.api=e}catch(r){throw this._apiError=r,r}if(e===null)return!1;let n=new ze(e);return this.vm=n,Ci(n),Ke._initialize(n,e),this.classFactory=new Ke,this._initialized=!0,!0}_dispose(){if(this.api===null)return;let{vm:e}=this;e.perform(n=>{Ke._disposeAll(n),E.dispose(n)}),Script.nextTick(()=>{ze.dispose(e)})}get available(){return this._tryInitialize()}get androidVersion(){return xt()}synchronized(e,n){let{$h:r=e}=e;if(!(r instanceof NativePointer))throw new Error("Java.synchronized: the first argument `obj` must be either a pointer or a Java instance");let o=this.vm.getEnv();be("VM::MonitorEnter",o.monitorEnter(r));try{n()}finally{o.monitorExit(r)}}enumerateLoadedClasses(e){this._checkAvailable();let{flavor:n}=this.api;n==="jvm"?this._enumerateLoadedClassesJvm(e):n==="art"?this._enumerateLoadedClassesArt(e):this._enumerateLoadedClassesDalvik(e)}enumerateLoadedClassesSync(){let e=[];return this.enumerateLoadedClasses({onMatch(n){e.push(n)},onComplete(){}}),e}enumerateClassLoaders(e){this._checkAvailable();let{flavor:n}=this.api;if(n==="jvm")this._enumerateClassLoadersJvm(e);else if(n==="art")this._enumerateClassLoadersArt(e);else throw new Error("Enumerating class loaders is not supported on Dalvik")}enumerateClassLoadersSync(){let e=[];return this.enumerateClassLoaders({onMatch(n){e.push(n)},onComplete(){}}),e}_enumerateLoadedClassesJvm(e){let{api:n,vm:r}=this,{jvmti:o}=n,i=r.getEnv(),s=Memory.alloc(Rp),l=Memory.alloc(Ji);o.getLoadedClasses(s,l);let a=s.readS32(),c=l.readPointer(),d=[];for(let p=0;p!==a;p++)d.push(c.add(p*Ji).readPointer());o.deallocate(c);try{for(let p of d){let h=i.getClassName(p);e.onMatch(h,p)}e.onComplete()}finally{d.forEach(p=>{i.deleteLocalRef(p)})}}_enumerateClassLoadersJvm(e){this.choose("java.lang.ClassLoader",e)}_enumerateLoadedClassesArt(e){let{vm:n,api:r}=this,o=n.getEnv(),i=r["art::JavaVMExt::AddGlobalRef"],{vm:s}=r;Ae(n,o,l=>{let a=yr(c=>{let d=i(s,l,c);try{let p=o.getClassName(d);e.onMatch(p,d)}finally{o.deleteGlobalRef(d)}return!0});r["art::ClassLinker::VisitClasses"](r.artClassLinker.address,a)}),e.onComplete()}_enumerateClassLoadersArt(e){let{classFactory:n,vm:r,api:o}=this,i=r.getEnv(),s=o["art::ClassLinker::VisitClassLoaders"];if(s===void 0)throw new Error("This API is only available on Android >= 7.0");let l=n.use("java.lang.ClassLoader"),a=[],c=o["art::JavaVMExt::AddGlobalRef"],{vm:d}=o;Ae(r,i,p=>{let h=br(u=>(a.push(c(d,p,u)),!0));gr(()=>{s(o.artClassLinker.address,h)})});try{a.forEach(p=>{let h=n.cast(p,l);e.onMatch(h)})}finally{a.forEach(p=>{i.deleteGlobalRef(p)})}e.onComplete()}_enumerateLoadedClassesDalvik(e){let{api:n}=this,r=ptr("0xcbcacccd"),o=172,i=8,l=n.gDvm.add(o).readPointer(),a=l.readS32(),d=l.add(12).readPointer(),p=a*i;for(let h=0;h<p;h+=i){let g=d.add(h).add(4).readPointer();if(g.isNull()||g.equals(r))continue;let y=g.add(24).readPointer().readUtf8String();if(y.startsWith("L")){let v=y.substring(1,y.length-1).replace(/\//g,".");e.onMatch(v)}}e.onComplete()}enumerateMethods(e){let{classFactory:n}=this,r=this.vm.getEnv(),o=n.use("java.lang.ClassLoader");return tt.enumerateMethods(e,this.api,r).map(i=>{let s=i.loader;return i.loader=s!==null?n.wrap(s,o,r):null,i})}scheduleOnMainThread(e){this.performNow(()=>{this._pendingMainOps.push(e);let{_wakeupHandler:n}=this;if(n===null){let{classFactory:r}=this,o=r.use("android.os.Handler"),i=r.use("android.os.Looper");n=o.$new(i.getMainLooper()),this._wakeupHandler=n}this._pollListener===null&&(this._pollListener=Interceptor.attach(Process.getModuleByName("libc.so").getExportByName("epoll_wait"),this._makePollHook()),Interceptor.flush()),n.sendEmptyMessage(1)})}_makePollHook(){let e=Process.id,{_pendingMainOps:n}=this;return function(){if(this.threadId!==e)return;let r;for(;(r=n.shift())!==void 0;)try{r()}catch(o){Script.nextTick(()=>{throw o})}}}perform(e){if(this._checkAvailable(),!this._isAppProcess()||this.classFactory.loader!==null)try{this.vm.perform(e)}catch(n){Script.nextTick(()=>{throw n})}else this._pendingVmOps.push(e),this._pendingVmOps.length===1&&this._performPendingVmOpsWhenReady()}performNow(e){return this._checkAvailable(),this.vm.perform(()=>{let{classFactory:n}=this;if(this._isAppProcess()&&n.loader===null){let o=n.use("android.app.ActivityThread").currentApplication();o!==null&&Gi(n,o)}return e()})}_performPendingVmOpsWhenReady(){this.vm.perform(()=>{let{classFactory:e}=this,n=e.use("android.app.ActivityThread"),r=n.currentApplication();if(r!==null){Gi(e,r),this._performPendingVmOps();return}let o=this,i=!1,s="early",l=n.handleBindApplication;l.implementation=function(d){if(d.instrumentationName.value!==null){s="late";let h=e.use("android.app.LoadedApk").makeApplication;h.implementation=function(u,g){return i||(i=!0,$i(e,this),o._performPendingVmOps()),h.apply(this,arguments)}}l.apply(this,arguments)};let c=n.getPackageInfo.overloads.map(d=>[d.argumentTypes.length,d]).sort(([d],[p])=>p-d).map(([d,p])=>p)[0];c.implementation=function(...d){let p=c.call(this,...d);return!i&&s==="early"&&(i=!0,$i(e,p),o._performPendingVmOps()),p}})}_performPendingVmOps(){let{vm:e,_pendingVmOps:n}=this,r;for(;(r=n.shift())!==void 0;)try{e.perform(r)}catch(o){Script.nextTick(()=>{throw o})}}use(e,n){return this.classFactory.use(e,n)}openClassFile(e){return this.classFactory.openClassFile(e)}choose(e,n){this.classFactory.choose(e,n)}retain(e){return this.classFactory.retain(e)}cast(e,n){return this.classFactory.cast(e,n)}array(e,n){return this.classFactory.array(e,n)}backtrace(e){return vr(this.vm,e)}isMainThread(){let e=this.classFactory.use("android.os.Looper"),n=e.getMainLooper(),r=e.myLooper();return r===null?!1:n.$isSameObject(r)}registerClass(e){return this.classFactory.registerClass(e)}deoptimizeEverything(){let{vm:e}=this;return Cr(e,e.getEnv())}deoptimizeBootImage(){let{vm:e}=this;return kr(e,e.getEnv())}deoptimizeMethod(e){let{vm:n}=this;return wr(n,n.getEnv(),e)}_checkAvailable(){if(!this.available)throw new Error("Java API not available")}_isAppProcess(){let e=this._cachedIsAppProcess;if(e===null){if(this.api.flavor==="jvm")return e=!1,this._cachedIsAppProcess=e,e;let n=new NativeFunction(Module.getGlobalExportByName("readlink"),"pointer",["pointer","pointer","pointer"],{exceptions:"propagate"}),r=Memory.allocUtf8String("/proc/self/exe"),o=1024,i=Memory.alloc(o),s=n(r,i,ptr(o)).toInt32();if(s!==-1){let l=i.readUtf8String(s);e=/^\/system\/bin\/app_process/.test(l)}else e=!0;this._cachedIsAppProcess=e}return e}};function Gi(t,e){let n=t.use("android.os.Process");t.loader=e.getClassLoader(),n.myUid()===n.SYSTEM_UID.value?(t.cacheDir="/data/system",t.codeCacheDir="/data/dalvik-cache"):"getCodeCacheDir"in e?(t.cacheDir=e.getCacheDir().getCanonicalPath(),t.codeCacheDir=e.getCodeCacheDir().getCanonicalPath()):(t.cacheDir=e.getFilesDir().getCanonicalPath(),t.codeCacheDir=e.getCacheDir().getCanonicalPath())}function $i(t,e){let n=t.use("java.io.File");t.loader=e.getClassLoader();let r=n.$new(e.getDataDir()).getCanonicalPath();t.cacheDir=r,t.codeCacheDir=r+"/cache"}var qr=new Wr;Script.bindWeak(qr,()=>{qr._dispose()});var we=qr;var Kr={pretty:!0,structured:!1,color:!0,verbose:!0,captureCalls:!0,maxValueLength:512,maxDedupeKeys:8192,scoreThreshold:1,dartLibraryScan:!0};function ue(){return Kr}function Hi(t){return Object.assign(Kr,t),Kr}var Zi=Date.now(),Qr=[];function pe(t,e){let n={v:1,t:Date.now()-Zi,type:t,...e};Qr.push(n),ue().structured&&send(n)}function Yr(){return Qr}function _t(t){return Qr.filter(e=>e.type===t).length}function Wi(){return Date.now()-Zi}var qi={reset:"\x1B[0m",green:"\x1B[32m",yellow:"\x1B[33m",cyan:"\x1B[36m",red:"\x1B[31;1m",dim:"\x1B[2m"};function ot(t,e){return ue().color?qi[t]+e+qi.reset:e}function it(t){ue().pretty&&console.log(t)}var z={section(t){it(`
`+ot("cyan","[*] --- "+t+" ---"))},info(t){it(ot("green","[+] ")+t)},note(t){it(ot("yellow","[+] ")+t)},hit(t){it(ot("red","[!] "+t))},warn(t){it(ot("yellow","[-] ")+t)},fail(t){it(ot("red","[-] "+t))},detail(t){it(ot("dim","    "+t))}};function Ce(t,e){return t.length>=e?t:t+" ".repeat(e-t.length)}var Ki=new Set;function Xr(t,e){let n=e instanceof Error?e.message:String(e);Ki.has(t)||(Ki.add(t),pe("error",{where:t,message:n}),z.warn(t+": "+n))}function X(t,e){try{return e()}catch(n){Xr(t,n);return}}function fn(t,e){return function(...n){try{return e.apply(this,n)}catch(r){Xr(t,r);return}}}function He(t,e,n){e.implementation=function(...r){try{n(this,r)}catch(o){Xr(t,o)}return e.apply(this,r)}}function st(t,e){try{return t(e)}catch{return null}}var Pe=class{keys=new Set;saturated=!1;first(e){return this.keys.has(e)?!1:this.keys.size>=ue().maxDedupeKeys?(this.saturated=!0,!1):(this.keys.add(e),!0)}get size(){return this.keys.size}get isSaturated(){return this.saturated}};function Ue(t){if(t==null)return null;let e=ue().maxValueLength;return t.length<=e?t:t.slice(0,e)+"\u2026(+"+(t.length-e)+")"}var hn={name:"default",description:"Attack-surface scoring for mobile platform-channel and method names. Weights are additive; a name matching several tags scores the sum.",ignore:["webview_flutter","firebase_core","firebase_analytics","google_mobile_ads","image_picker","path_provider","shared_preferences_android","url_launcher","package_info_plus","connectivity_plus","device_info_plus","flutter/lifecycle","flutter/system","flutter/textinput","flutter/platform","flutter/navigation","flutter/keyevent","flutter/accessibility","flutter/restoration","flutter/mousecursor","flutter/settings","flutter/skia","flutter/spellcheck"],tags:[{tag:"rasp-vendor",weight:5,note:"Named commercial RASP or hardening product. Highest-signal match.",keywords:["dexguard","promon","shield","appdome","guardsquare","talsec","freerasp","verimatrix","zimperium","appsealing","inauth","arxan","digital.ai","jscrambler","buildfire"]},{tag:"root-detect",weight:4,note:"Device-integrity and tamper checks; the usual first blocker on an engagement.",keywords:["jailbreak","jailbroken","rooted","root_check","rootcheck","rootbeer","magisk","xposed","supersu","busybox","tamper","integrity","safetynet","playintegrity","attestation","emulator","simulator","debugger","antidebug","frida","substrate","cydia","hooking","rasp"]},{tag:"pinning",weight:4,note:"Certificate validation and pinning surfaces.",keywords:["pinning","certpin","sslpin","trustmanager","trust_manager","x509","certificate","truststore","ssl","tls","mitm"]},{tag:"crypto",weight:3,note:"Key material and cryptographic operations.",keywords:["crypto","cipher","encrypt","decrypt","keystore","keychain","secretkey","privatekey","signing","signature","hmac","aes","rsa","seed","mnemonic","entropy"]},{tag:"auth",weight:3,note:"Authentication, session, and biometric gates.",keywords:["auth","login","logout","session","token","refresh_token","bearer","oauth","credential","password","passcode","pincode","biometric","fingerprint","faceid","touchid","localauth","mfa","otp","2fa"]},{tag:"storage",weight:2,note:"Local persistence where secrets tend to land.",keywords:["secure_storage","securestorage","sharedpreferences","userdefaults","sqlite","database","realm","hive","cache","vault","wallet"]},{tag:"network",weight:2,note:"Transport configuration and proxy or VPN awareness.",keywords:["proxy","vpn","http","socket","websocket","grpc","api_client","interceptor","dns"]},{tag:"payment",weight:3,note:"Payment and card handling, high-value in fintech targets.",keywords:["payment","card","pan","cvv","emv","nfc","hce","transaction","transfer","billing","purchase"]},{tag:"security-generic",weight:2,note:"Generic security naming. Deliberately low-weight: it catches in-house channels like `app/security_check` that no specific tag would, at the cost of some noise.",keywords:["security","secure","protection","protect","threat","harden","obfusc","antifraud","anti_fraud","fraud","risk"]},{tag:"native-bridge",weight:1,note:"Custom bridges are worth reading regardless of naming.",keywords:["native","bridge","platform_channel","jni","ffi","plugin"]},{tag:"pii",weight:2,note:"Direct handling of personal data.",keywords:["location","gps","contacts","camera","microphone","clipboard","screenshot","screen_capture","biometrics","identity","kyc","passport","ssn"]}]};var Dp=hn.tags.map(t=>({tag:t.tag,weight:t.weight,keywords:t.keywords.map(e=>e.toLowerCase())})),Up=hn.ignore.map(t=>t.toLowerCase());function Ze(t){let e=t.toLowerCase();if(Up.some(o=>e.includes(o)))return{score:0,tags:[],ignored:!0};let n=0,r=[];for(let o of Dp)o.keywords.some(i=>e.includes(i))&&(n+=o.weight,r.push(o.tag));return{score:n,tags:r,ignored:!1}}function We(t){return!t.ignored&&t.score>=ue().scoreThreshold}var Qi=hn.name;var Bp=new Pe,Xi=new Pe,Vp=new Pe,Jp=new Pe,Yi=new Map,eo=new Map;function gt(t){return we.use(t)}function es(t,e,n){if(!t||!Bp.first(e+":"+t))return;let r=Ze(t);pe("channel",{name:t,kind:e,via:n,score:r.score,tags:r.tags});let o="["+e+"] "+t;We(r)?(z.hit(o),z.detail("score "+r.score+" \xB7 "+r.tags.join(", "))):ue().verbose&&!r.ignored&&z.info(o)}function to(t,e){let n=st(gt,t);if(n===null){z.detail(t+" not present on this engine version");return}X("flutter/android/ctor/"+e,()=>{n.$init.overloads.forEach(r=>{He("flutter/android/ctor/"+e,r,(o,i)=>{let s=i.find(l=>typeof l=="string");typeof s=="string"&&es(s,e,"registration")})})})}function Gp(){let t=st(gt,"io.flutter.plugin.common.MethodChannel");t!==null&&X("flutter/android/set-handler",()=>{t.setMethodCallHandler.overloads.forEach(e=>{He("flutter/android/set-handler",e,(n,r)=>{let o=r[0];if(o==null)return;let i=$p(n);i!==null&&Hp(o.$className,i)})})})}function $p(t){if(t==null)return null;for(let e of["name","channel"])try{let n=t[e];if(n!==void 0&&n.value!==void 0&&n.value!==null)return String(n.value)}catch{}return null}function Hp(t,e){if(Yi.set(t,e),!ue().captureCalls||!Vp.first(t))return;let n=st(gt,t);n===null||n.onMethodCall===void 0||X("flutter/android/handler/"+t,()=>{n.onMethodCall.overloads.forEach(r=>{He("flutter/android/on-method-call",r,(o,i)=>{let s=i[0],l=i[1],a=(o!=null?Yi.get(o.$className):void 0)??e,c=s!=null&&s.method!==void 0?String(s.method.value):"<unknown>",d=null;try{s!==null&&s.arguments!==void 0&&s.arguments.value!==null&&(d=String(s.arguments.value))}catch{d=null}let p=Ze(a+"/"+c);pe("call",{channel:a,method:c,args:Ue(d),score:p.score,tags:p.tags});let h=a+" \u2192 "+c+"("+(Ue(d)??"")+")";We(p)?z.hit(h):ue().verbose&&z.note(h),l!=null&&Zp(l,a,c)})})})}function Zp(t,e,n){let r=X("flutter/android/result-key",()=>String(t.hashCode()));if(r===void 0)return;eo.set(r,{channel:e,method:n});let o=t.$className;if(!Jp.first(o))return;let i=st(gt,o);i!==null&&X("flutter/android/result/"+o,()=>{let s=(l,a)=>{i[l]!==void 0&&i[l].overloads.forEach(c=>{He("flutter/android/result/"+a,c,(d,p)=>{if(d==null)return;let h=String(d.hashCode()),u=eo.get(h);if(u===void 0)return;eo.delete(h);let g=p.length>0&&p[0]!==null?String(p[0]):null;pe("result",{channel:u.channel,method:u.method,outcome:a,value:Ue(g)});let _=Ze(u.channel+"/"+u.method),y="\u21B3 "+a+": "+(Ue(g)??"<void>");We(_)?z.hit("    "+y):ue().verbose&&z.detail(y)})})};s("success","success"),s("error","error"),s("notImplemented","notImplemented")})}function Wp(){let t=["io.flutter.embedding.engine.dart.DartMessenger","io.flutter.view.FlutterNativeView"];for(let e of t){let n=st(gt,e);n!==null&&X("flutter/android/messenger/"+e,()=>{for(let r of["send","handleMessageFromDart","dispatchMessageToQueue"])n[r]!==void 0&&n[r].overloads.forEach(o=>{He("flutter/android/messenger",o,(i,s)=>{let l=s.find(a=>typeof a=="string");typeof l=="string"&&es(l,"method","messenger")})})})}}function ts(t,e){if(!t||!Xi.first(t))return;let n=Ze(t);pe("plugin",{name:t,source:e}),We(n)?z.hit("[plugin] "+t+"  ("+n.tags.join(", ")+")"):z.info("[plugin] "+t)}function qp(){let t=st(gt,"io.flutter.embedding.engine.FlutterEngineConnectionRegistry");t===null||t.add===void 0||X("flutter/android/plugin-registry",()=>{t.add.overloads.forEach(e=>{He("flutter/android/plugin-add",e,(n,r)=>{let o=r[0];o!=null&&o.$className!==void 0&&ts(o.$className,"registry")})})})}function ns(){we.perform(()=>{z.section("Flutter Plugins"),X("flutter/android/plugin-scan",()=>{we.enumerateLoadedClasses({onMatch(t){t.startsWith("io.flutter.plugins.")&&t.endsWith("Plugin")&&ts(t,"loaded-classes")},onComplete(){}})}),Xi.size===0&&z.detail("no plugins seen yet \u2014 they register as the app starts up")})}function rs(){we.perform(()=>{z.section("Flutter Platform Channels (Android)"),to("io.flutter.plugin.common.MethodChannel","method"),to("io.flutter.plugin.common.EventChannel","event"),to("io.flutter.plugin.common.BasicMessageChannel","message"),Gp(),Wp(),qp(),z.detail("Hooks installed \u2014 exercise the app to populate the model.")})}function mn(t){return t.find(e=>{let n=e.name.toLowerCase();return n==="libflutter.so"||n==="flutter"})??null}function Rt(t){return t.find(e=>{let n=e.name.toLowerCase();return n==="libapp.so"||n==="app"})??null}function os(t){return t?.name??"the Dart payload"}function Kp(t){let e=t.split(`
`)[0]?.trim()??t.trim(),n=/Dart (?:SDK|VM) version:\s*([0-9]+\.[0-9]+\.[0-9]+(?:[-+][\w.]+)?)\s*(?:\(([^)]*)\))?/.exec(e),r=/\bon\s+"([^"]+)"/.exec(e);return{sdk:n?.[1]??null,channel:n?.[2]??null,arch:r?.[1]??null,raw:e}}function Qp(t){return t.length>200?!1:/^dart:[a-z_][a-z0-9_]*$/.test(t)||/^package:[a-z0-9_]+$/.test(t)?!0:/^package:[a-z0-9_]+\/[A-Za-z0-9_./-]+\.dart$/.test(t)}function ls(t){return/^package:([a-z0-9_]+)(?:\/|$)/.exec(t)?.[1]??null}function Yp(t){let e=[];return t.aotSnapshot&&e.push("AOT snapshot present"),t.vmServiceStrings&&e.push("VM-service strings in engine"),t.kernelBlob&&e.push("kernel blob present"),t.kernelBlob&&!t.aotSnapshot?{mode:"debug",evidence:e}:t.aotSnapshot&&t.vmServiceStrings?{mode:"profile",evidence:e}:t.aotSnapshot?{mode:"release",evidence:e}:t.vmServiceStrings?{mode:"debug",evidence:e}:{mode:"unknown",evidence:e}}var Xp=["_kDartVmSnapshotData","_kDartVmSnapshotInstructions","_kDartIsolateSnapshotData","_kDartIsolateSnapshotInstructions"],Ft={dartVersion:"44 61 72 74 20 53 44 4b 20 76 65 72 73 69 6f 6e 3a 20",dartVmVersion:"44 61 72 74 20 56 4d 20 76 65 72 73 69 6f 6e 3a 20",vmService:"44 61 72 74 20 56 4d 20 73 65 72 76 69 63 65",observatory:"4f 62 73 65 72 76 61 74 6f 72 79",packageUri:"70 61 63 6b 61 67 65 3a"},is=4e3;function ss(t,e,n){let o=X("dart/scan",()=>Memory.scanSync(t.base,t.size,e))?.[0];return o===void 0?null:X("dart/scan-read",()=>o.address.readUtf8String(n))??null}function as(t,e){let n=X("dart/has-pattern",()=>Memory.scanSync(t.base,t.size,e));return n!==void 0&&n.length>0}function ef(t,e){let n=X("dart/read-printable",()=>t.readByteArray(e));if(n==null)return null;let r=new Uint8Array(n),o=0;for(;o<r.length;){let i=r[o];if(i<32||i>126)break;o++}return o===0?null:String.fromCharCode(...r.subarray(0,o))}function tf(t){let e=[],n=X("dart/enumerate-symbols",()=>t.enumerateSymbols());for(let r of Xp){let o=n?.find(s=>s.name===r||s.name===r.replace(/^_/,""));if(o!==void 0){e.push({name:r,address:o.address.toString(),size:o.size??null});continue}let i=X("dart/find-export",()=>t.findExportByName(r));i!=null&&e.push({name:r,address:i.toString(),size:null})}return e}function nf(t,e){let n=new Pe,r=[],o=new Set,i=e.find(c=>c.name==="_kDartIsolateSnapshotData"&&c.size!==null&&c.size>0),s=i!==void 0?ptr(i.address):t.base,l=i?.size??t.size;z.detail("scanning "+(i!==void 0?"isolate snapshot data":t.name)+" ("+Math.round(l/1024)+" KiB) for library URIs");let a=X("dart/scan-packages",()=>Memory.scanSync(s,l,Ft.packageUri));if(a===void 0)return{uris:[],packages:[]};for(let c of a){if(r.length>=is){z.detail("library recovery capped at "+is+" entries");break}let d=ef(c.address,200);if(d===null||!Qp(d)||!n.first(d))continue;r.push(d);let p=ls(d);p!==null&&o.add(p)}return{uris:r,packages:Array.from(o).sort()}}function cs(t){z.section("Dart Runtime");let e=mn(t),n=Rt(t);if(e===null&&n===null){z.warn("No Flutter engine or Dart payload in this process \u2014 nothing to enumerate.");return}let r=null;if(e!==null){let c=ss(e,Ft.dartVersion,256)??ss(e,Ft.dartVmVersion,256);c!==null&&(r=Kp(c))}let o=n!==null?tf(n):[],i=o.some(c=>c.name.endsWith("Instructions")),s=e!==null&&(as(e,Ft.vmService)||as(e,Ft.observatory)),l=Yp({aotSnapshot:i||n!==null,vmServiceStrings:s,kernelBlob:!1}),a=n!==null&&ue().dartLibraryScan?nf(n,o):{uris:[],packages:[]};pe("dart",{sdk:r?.sdk??null,channel:r?.channel??null,arch:r?.arch??null,versionRaw:r?.raw??null,buildMode:l.mode,buildModeEvidence:l.evidence,snapshot:o,libraryCount:a.uris.length,packages:a.packages});for(let c of a.uris)pe("dart.library",{uri:c,package:ls(c)});if(r!==null?(z.info(Ce("Dart SDK",14)+": "+(r.sdk??"unknown")),r.channel!==null&&z.detail("channel: "+r.channel+(r.arch?" \xB7 "+r.arch:""))):z.warn("Dart version string not found in the engine binary."),l.mode==="release"?z.info(Ce("Build mode",14)+": release"):l.mode==="unknown"?z.warn(Ce("Build mode",14)+": unknown"):(z.hit(Ce("Build mode",14)+": "+l.mode),z.detail("a non-release build exposes the VM service \u2014 full class and"),z.detail("function enumeration is available without snapshot parsing")),l.evidence.length>0&&z.detail("evidence: "+l.evidence.join("; ")),o.length>0){z.info(Ce("Snapshot",14)+": "+o.length+" section(s)");for(let c of o)z.detail(c.name+" @ "+c.address+(c.size!==null?" ("+c.size+" bytes)":""))}else n!==null&&z.warn(os(n)+" present but no snapshot symbols \u2014 stripped or packed.");a.packages.length>0?(z.info(Ce("Dart packages",14)+": "+a.packages.length),z.detail(a.packages.join(", ")),z.detail(a.uris.length+" library URIs recovered")):n!==null&&z.warn("No Dart library URIs recovered \u2014 snapshot may be packed or obfuscated.")}var _n=null,zt={exceptions:"propagate"};function Dt(){if(_n!==null)return _n;let t={},e=[{module:"libsystem_malloc.dylib",functions:{free:["void",["pointer"]]}},{module:"libobjc.A.dylib",functions:{objc_msgSend:function(r){this.objc_msgSend=r},objc_msgSend_stret:function(r){this.objc_msgSend_stret=r},objc_msgSend_fpret:function(r){this.objc_msgSend_fpret=r},objc_msgSendSuper:function(r){this.objc_msgSendSuper=r},objc_msgSendSuper_stret:function(r){this.objc_msgSendSuper_stret=r},objc_msgSendSuper_fpret:function(r){this.objc_msgSendSuper_fpret=r},objc_getClassList:["int",["pointer","int"]],objc_lookUpClass:["pointer",["pointer"]],objc_allocateClassPair:["pointer",["pointer","pointer","pointer"]],objc_disposeClassPair:["void",["pointer"]],objc_registerClassPair:["void",["pointer"]],class_isMetaClass:["bool",["pointer"]],class_getName:["pointer",["pointer"]],class_getImageName:["pointer",["pointer"]],class_copyProtocolList:["pointer",["pointer","pointer"]],class_copyMethodList:["pointer",["pointer","pointer"]],class_getClassMethod:["pointer",["pointer","pointer"]],class_getInstanceMethod:["pointer",["pointer","pointer"]],class_getSuperclass:["pointer",["pointer"]],class_addProtocol:["bool",["pointer","pointer"]],class_addMethod:["bool",["pointer","pointer","pointer","pointer"]],class_copyIvarList:["pointer",["pointer","pointer"]],objc_getProtocol:["pointer",["pointer"]],objc_copyProtocolList:["pointer",["pointer"]],objc_allocateProtocol:["pointer",["pointer"]],objc_registerProtocol:["void",["pointer"]],protocol_getName:["pointer",["pointer"]],protocol_copyMethodDescriptionList:["pointer",["pointer","bool","bool","pointer"]],protocol_copyPropertyList:["pointer",["pointer","pointer"]],protocol_copyProtocolList:["pointer",["pointer","pointer"]],protocol_addProtocol:["void",["pointer","pointer"]],protocol_addMethodDescription:["void",["pointer","pointer","pointer","bool","bool"]],ivar_getName:["pointer",["pointer"]],ivar_getTypeEncoding:["pointer",["pointer"]],ivar_getOffset:["pointer",["pointer"]],object_isClass:["bool",["pointer"]],object_getClass:["pointer",["pointer"]],object_getClassName:["pointer",["pointer"]],method_getName:["pointer",["pointer"]],method_getTypeEncoding:["pointer",["pointer"]],method_getImplementation:["pointer",["pointer"]],method_setImplementation:["pointer",["pointer","pointer"]],property_getName:["pointer",["pointer"]],property_copyAttributeList:["pointer",["pointer","pointer"]],sel_getName:["pointer",["pointer"]],sel_registerName:["pointer",["pointer"]],class_getInstanceSize:["pointer",["pointer"]]},optionals:{objc_msgSend_stret:"ABI",objc_msgSend_fpret:"ABI",objc_msgSendSuper_stret:"ABI",objc_msgSendSuper_fpret:"ABI",object_isClass:"iOS8"}},{module:"libdispatch.dylib",functions:{dispatch_async_f:["void",["pointer","pointer","pointer"]]},variables:{_dispatch_main_q:function(r){this._dispatch_main_q=r}}}],n=0;return e.forEach(function(r){let o=r.functions||{},i=r.variables||{},s=r.optionals||{};n+=Object.keys(o).length+Object.keys(i).length;let l=(Process.findModuleByName(r.module)?.enumerateExports()??[]).reduce(function(a,c){return a[c.name]=c,a},{});Object.keys(o).forEach(function(a){let c=l[a];if(c!==void 0&&c.type==="function"){let d=o[a];typeof d=="function"?d.call(t,c.address):t[a]=new NativeFunction(c.address,d[0],d[1],zt),n--}else s[a]&&n--}),Object.keys(i).forEach(function(a){let c=l[a];c!==void 0&&c.type==="variable"&&(i[a].call(t,c.address),n--)})}),n===0&&(t.objc_msgSend_stret||(t.objc_msgSend_stret=t.objc_msgSend),t.objc_msgSend_fpret||(t.objc_msgSend_fpret=t.objc_msgSend),t.objc_msgSendSuper_stret||(t.objc_msgSendSuper_stret=t.objc_msgSendSuper),t.objc_msgSendSuper_fpret||(t.objc_msgSendSuper_fpret=t.objc_msgSendSuper),_n=t),_n}var rf=`#include <glib.h>
#include <ptrauth.h>

#define KERN_SUCCESS 0
#define MALLOC_PTR_IN_USE_RANGE_TYPE 1
#if defined (HAVE_I386) && GLIB_SIZEOF_VOID_P == 8
# define OBJC_ISA_MASK 0x7ffffffffff8ULL
#elif defined (HAVE_ARM64)
# define OBJC_ISA_MASK 0xffffffff8ULL
#endif

typedef struct _ChooseContext ChooseContext;

typedef struct _malloc_zone_t malloc_zone_t;
typedef struct _malloc_introspection_t malloc_introspection_t;
typedef struct _vm_range_t vm_range_t;

typedef gpointer Class;
typedef int kern_return_t;
typedef guint mach_port_t;
typedef mach_port_t task_t;
typedef guintptr vm_offset_t;
typedef guintptr vm_size_t;
typedef vm_offset_t vm_address_t;

struct _ChooseContext
{
  GHashTable * classes;
  GArray * matches;
};

struct _malloc_zone_t
{
  void * reserved1;
  void * reserved2;
  size_t (* size) (struct _malloc_zone_t * zone, const void * ptr);
  void * (* malloc) (struct _malloc_zone_t * zone, size_t size);
  void * (* calloc) (struct _malloc_zone_t * zone, size_t num_items, size_t size);
  void * (* valloc) (struct _malloc_zone_t * zone, size_t size);
  void (* free) (struct _malloc_zone_t * zone, void * ptr);
  void * (* realloc) (struct _malloc_zone_t * zone, void * ptr, size_t size);
  void (* destroy) (struct _malloc_zone_t * zone);
  const char * zone_name;

  unsigned (* batch_malloc) (struct _malloc_zone_t * zone, size_t size, void ** results, unsigned num_requested);
  void (* batch_free) (struct _malloc_zone_t * zone, void ** to_be_freed, unsigned num_to_be_freed);

  malloc_introspection_t * introspect;
};

typedef kern_return_t (* memory_reader_t) (task_t remote_task, vm_address_t remote_address, vm_size_t size, void ** local_memory);
typedef void (* vm_range_recorder_t) (task_t task, void * user_data, unsigned type, vm_range_t * ranges, unsigned count);
typedef kern_return_t (* enumerator_func) (task_t task, void * user_data, unsigned type_mask, vm_address_t zone_address, memory_reader_t reader,
      vm_range_recorder_t recorder);

struct _malloc_introspection_t
{
  enumerator_func enumerator;
};

struct _vm_range_t
{
  vm_address_t address;
  vm_size_t size;
};

extern int objc_getClassList (Class * buffer, int buffer_count);
extern Class class_getSuperclass (Class cls);
extern size_t class_getInstanceSize (Class cls);
extern kern_return_t malloc_get_all_zones (task_t task, memory_reader_t reader, vm_address_t ** addresses, unsigned * count);

static void collect_subclasses (Class klass, GHashTable * result);
static void collect_matches_in_ranges (task_t task, void * user_data, unsigned type, vm_range_t * ranges, unsigned count);
static kern_return_t read_local_memory (task_t remote_task, vm_address_t remote_address, vm_size_t size, void ** local_memory);

extern mach_port_t selfTask;

gpointer *
choose (Class * klass,
        gboolean consider_subclasses,
        guint * count)
{
  ChooseContext ctx;
  GHashTable * classes;
  vm_address_t * malloc_zone_addresses;
  unsigned malloc_zone_count, i;

  classes = g_hash_table_new_full (NULL, NULL, NULL, NULL);
  ctx.classes = classes;
  ctx.matches = g_array_new (FALSE, FALSE, sizeof (gpointer));
  if (consider_subclasses)
    collect_subclasses (klass, classes);
  else
    g_hash_table_insert (classes, klass, GSIZE_TO_POINTER (class_getInstanceSize (klass)));

  malloc_zone_count = 0;
  malloc_get_all_zones (selfTask, read_local_memory, &malloc_zone_addresses, &malloc_zone_count);

  for (i = 0; i != malloc_zone_count; i++)
  {
    vm_address_t zone_address = malloc_zone_addresses[i];
    malloc_zone_t * zone = (malloc_zone_t *) zone_address;
    enumerator_func enumerator;

    if (zone != NULL && zone->introspect != NULL &&
        (enumerator = (ptrauth_strip (zone->introspect, ptrauth_key_asda))->enumerator) != NULL)
    {
      enumerator = ptrauth_sign_unauthenticated (
          ptrauth_strip (enumerator, ptrauth_key_asia),
          ptrauth_key_asia, 0);

      enumerator (selfTask, &ctx, MALLOC_PTR_IN_USE_RANGE_TYPE, zone_address, read_local_memory,
          collect_matches_in_ranges);
    }
  }

  g_hash_table_unref (classes);

  *count = ctx.matches->len;

  return (gpointer *) g_array_free (ctx.matches, FALSE);
}

void
destroy (gpointer mem)
{
  g_free (mem);
}

static void
collect_subclasses (Class klass,
                    GHashTable * result)
{
  Class * classes;
  int buffer_count, count, i;

  buffer_count = objc_getClassList (NULL, 0);
  classes = g_malloc (buffer_count * sizeof (gpointer));
  count = objc_getClassList (classes, buffer_count);
  if (count > buffer_count)
    count = buffer_count;

  for (i = 0; i != count; i++)
  {
    Class candidate = classes[i];
    Class c;

    c = candidate;
    do
    {
      if (c == klass)
      {
        g_hash_table_insert (result, candidate, GSIZE_TO_POINTER (class_getInstanceSize (candidate)));
        break;
      }

      c = class_getSuperclass (c);
    }
    while (c != NULL);
  }

  g_free (classes);
}

static void
collect_matches_in_ranges (task_t task,
                           void * user_data,
                           unsigned type,
                           vm_range_t * ranges,
                           unsigned count)
{
  ChooseContext * ctx = user_data;
  GHashTable * classes = ctx->classes;
  unsigned i;

  for (i = 0; i != count; i++)
  {
    const vm_range_t * range = &ranges[i];
    gconstpointer candidate = GSIZE_TO_POINTER (range->address);
    gconstpointer isa;
    guint instance_size;

    isa = *(gconstpointer *) candidate;
#ifdef OBJC_ISA_MASK
    isa = GSIZE_TO_POINTER (GPOINTER_TO_SIZE (isa) & OBJC_ISA_MASK);
#endif

    instance_size = GPOINTER_TO_UINT (g_hash_table_lookup (classes, isa));
    if (instance_size != 0 && range->size >= instance_size)
    {
      g_array_append_val (ctx->matches, candidate);
    }
  }
}

static kern_return_t
read_local_memory (task_t remote_task,
                   vm_address_t remote_address,
                   vm_size_t size,
                   void ** local_memory)
{
  *local_memory = (void *) remote_address;

  return KERN_SUCCESS;
}
`,{pointerSize:of}=Process,no=null;function ds(){return no===null&&(no=sf()),no}function sf(){let{objc_getClassList:t,class_getSuperclass:e,class_getInstanceSize:n}=Dt(),r=Memory.alloc(4);r.writeU32(Module.getGlobalExportByName("mach_task_self_").readU32());let o=new CModule(rf,{objc_getClassList:t,class_getSuperclass:e,class_getInstanceSize:n,malloc_get_all_zones:Process.getModuleByName("/usr/lib/system/libsystem_malloc.dylib").getExportByName("malloc_get_all_zones"),selfTask:r}),i=new NativeFunction(o.choose,"pointer",["pointer","bool","pointer"]),s=new NativeFunction(o.destroy,"void",["pointer"]);return{handle:o,choose(l,a){let c=[],d=Memory.alloc(4),p=i(l,a?1:0,d);try{let h=d.readU32();for(let u=0;u!==h;u++)c.push(p.add(u*of).readPointer())}finally{s(p)}return c}}}function lf(){let pointerSize=Process.pointerSize,api=null,apiError=null,realizedClasses=new Set,classRegistry=new ClassRegistry,protocolRegistry=new ProtocolRegistry,replacedMethods=new Map,scheduledWork=new Map,nextId=1,workCallback=null,NSAutoreleasePool=null,bindings=new Map,readObjectIsa=null,msgSendBySignatureId=new Map,msgSendSuperBySignatureId=new Map,cachedNSString=null,cachedNSStringCtor=null,cachedNSNumber=null,cachedNSNumberCtor=null,singularTypeById=null,modifiers=null;try{tryInitialize()}catch(t){}function tryInitialize(){if(api!==null)return!0;if(apiError!==null)throw apiError;try{api=Dt()}catch(t){throw apiError=t,t}return api!==null}function dispose(){for(let[t,e]of replacedMethods.entries()){let n=ptr(t),[r,o]=e;api.method_getImplementation(n).equals(o)&&api.method_setImplementation(n,r)}replacedMethods.clear()}Script.bindWeak(this,dispose),Object.defineProperty(this,"available",{enumerable:!0,get(){return tryInitialize()}}),Object.defineProperty(this,"api",{enumerable:!0,get(){return Dt()}}),Object.defineProperty(this,"classes",{enumerable:!0,value:classRegistry}),Object.defineProperty(this,"protocols",{enumerable:!0,value:protocolRegistry}),Object.defineProperty(this,"Object",{enumerable:!0,value:ObjCObject}),Object.defineProperty(this,"Protocol",{enumerable:!0,value:ObjCProtocol}),Object.defineProperty(this,"Block",{enumerable:!0,value:Block}),Object.defineProperty(this,"mainQueue",{enumerable:!0,get(){return api?._dispatch_main_q??null}}),Object.defineProperty(this,"registerProxy",{enumerable:!0,value:registerProxy}),Object.defineProperty(this,"registerClass",{enumerable:!0,value:registerClass}),Object.defineProperty(this,"registerProtocol",{enumerable:!0,value:registerProtocol}),Object.defineProperty(this,"bind",{enumerable:!0,value:bind}),Object.defineProperty(this,"unbind",{enumerable:!0,value:unbind}),Object.defineProperty(this,"getBoundData",{enumerable:!0,value:getBoundData}),Object.defineProperty(this,"enumerateLoadedClasses",{enumerable:!0,value:enumerateLoadedClasses}),Object.defineProperty(this,"enumerateLoadedClassesSync",{enumerable:!0,value:enumerateLoadedClassesSync}),Object.defineProperty(this,"choose",{enumerable:!0,value:choose}),Object.defineProperty(this,"chooseSync",{enumerable:!0,value(t){let e=[];return choose(t,{onMatch(n){e.push(n)},onComplete(){}}),e}}),this.schedule=function(t,e){let n=ptr(nextId++);scheduledWork.set(n.toString(),e),workCallback===null&&(workCallback=new NativeCallback(performScheduledWorkItem,"void",["pointer"])),Script.pin(),api.dispatch_async_f(t,n,workCallback)};function performScheduledWorkItem(t){let e=t.toString(),n=scheduledWork.get(e);scheduledWork.delete(e),NSAutoreleasePool===null&&(NSAutoreleasePool=classRegistry.NSAutoreleasePool);let r=NSAutoreleasePool.alloc().init(),o=null;try{n()}catch(i){o=i}r.release(),setImmediate(performScheduledWorkCleanup,o)}function performScheduledWorkCleanup(t){if(Script.unpin(),t!==null)throw t}this.implement=function(t,e){return new NativeCallback(e,t.returnType,t.argumentTypes)},this.selector=selector,this.selectorAsString=selectorAsString;function selector(t){return api.sel_registerName(Memory.allocUtf8String(t))}function selectorAsString(t){return api.sel_getName(t).readCString()}let registryBuiltins=new Set(["prototype","constructor","hasOwnProperty","toJSON","toString","valueOf"]);function ClassRegistry(){let t=new Map,e=0,n=new Proxy(this,{has(c,d){return r(d)},get(c,d,p){switch(d){case"prototype":return c.prototype;case"constructor":return c.constructor;case"hasOwnProperty":return r;case"toJSON":return s;case"toString":return l;case"valueOf":return a;default:let h=i(d);return h!==null?h:void 0}},set(c,d,p,h){return!1},ownKeys(c){if(api===null)return[];let d=api.objc_getClassList(NULL,0);if(d!==e){let p=d,h=Memory.alloc(p*pointerSize);d=api.objc_getClassList(h,p),d>p&&(d=p);for(let u=0;u!==d;u++){let g=h.add(u*pointerSize).readPointer(),_=api.class_getName(g).readCString();t.set(_,g)}e=d}return Array.from(t.keys())},getOwnPropertyDescriptor(c,d){return{writable:!1,configurable:!0,enumerable:!0}}});function r(c){return registryBuiltins.has(c)?!0:i(c)!==null}function o(c){let d=i(c);if(d===null)throw new Error("Unable to find class '"+c+"'");return d}function i(c){let d=t.get(c);if(d===void 0){if(d=api.objc_lookUpClass(Memory.allocUtf8String(c)),d.isNull())return null;t.set(c,d),e++}return new ObjCObject(d,void 0,!0)}function s(){return Object.keys(n).reduce(function(c,d){return c[d]=o(d).toJSON(),c},{})}function l(){return"ClassRegistry"}function a(){return"ClassRegistry"}return n}function ProtocolRegistry(){let t=new Map,e=0,n=new Proxy(this,{has(a,c){return r(c)},get(a,c,d){switch(c){case"prototype":return a.prototype;case"constructor":return a.constructor;case"hasOwnProperty":return r;case"toJSON":return i;case"toString":return s;case"valueOf":return l;default:let p=o(c);return p!==null?p:void 0}},set(a,c,d,p){return!1},ownKeys(a){if(api===null)return[];let c=Memory.alloc(pointerSize),d=api.objc_copyProtocolList(c);try{let p=c.readUInt();if(p!==e){t.clear();for(let h=0;h!==p;h++){let u=d.add(h*pointerSize).readPointer(),g=api.protocol_getName(u).readCString();t.set(g,u)}e=p}}finally{api.free(d)}return Array.from(t.keys())},getOwnPropertyDescriptor(a,c){return{writable:!1,configurable:!0,enumerable:!0}}});function r(a){return registryBuiltins.has(a)?!0:o(a)!==null}function o(a){let c=t.get(a);if(c===void 0){if(c=api.objc_getProtocol(Memory.allocUtf8String(a)),c.isNull())return null;t.set(a,c),e++}return new ObjCProtocol(c)}function i(){return Object.keys(n).reduce(function(a,c){return a[c]={handle:t.get(c)},a},{})}function s(){return"ProtocolRegistry"}function l(){return"ProtocolRegistry"}return n}let objCObjectBuiltins=new Set(["prototype","constructor","handle","hasOwnProperty","toJSON","toString","valueOf","equals","$kind","$super","$superClass","$class","$className","$moduleName","$protocols","$methods","$ownMethods","$ivars"]);function ObjCObject(t,e,n,r){let o=null,i=null,s=null,l=null,a=null,c=null,d=null,p=null,h=null,u=null,g=null,_=new Map,y=null,v=null,S=null;if(t=getHandle(t),n===void 0){let T=api.object_getClass(t),w=T.toString();realizedClasses.has(w)||(api.objc_lookUpClass(api.class_getName(T)),realizedClasses.add(w))}let C=new Proxy(this,{has(T,w){return x(w)},get(T,w,J){switch(w){case"handle":return t;case"prototype":return T.prototype;case"constructor":return T.constructor;case"hasOwnProperty":return x;case"toJSON":return W;case"toString":case"valueOf":let G=J.description;if(G!==void 0){let B=G.call(J);if(B!==null)return B.UTF8String.bind(B)}return function(){return J.$className};case"equals":return q;case"$kind":return i===null&&(R()?i=api.class_isMetaClass(t)?"meta-class":"class":i="instance"),i;case"$super":if(s===null){let B=api.class_getSuperclass(L());if(B.isNull())s=[null];else{let Z=Memory.alloc(2*pointerSize);Z.writePointer(t),Z.add(pointerSize).writePointer(B),s=[new ObjCObject(t,void 0,n,Z)]}}return s[0];case"$superClass":if(l===null){let B=api.class_getSuperclass(L());B.isNull()?l=[null]:l=[new ObjCObject(B)]}return l[0];case"$class":return a===null&&(a=new ObjCObject(api.object_getClass(t),void 0,!0)),a;case"$className":return c===null&&(r?c=api.class_getName(r.add(pointerSize).readPointer()).readCString():R()?c=api.class_getName(t).readCString():c=api.object_getClassName(t).readCString()),c;case"$moduleName":return d===null&&(d=api.class_getImageName(L()).readCString()),d;case"$protocols":if(p===null){p={};let B=Memory.alloc(pointerSize),Z=api.class_copyProtocolList(L(),B);if(!Z.isNull())try{let Y=B.readUInt();for(let $=0;$!==Y;$++){let se=Z.add($*pointerSize).readPointer(),_e=new ObjCProtocol(se);p[_e.name]=_e}}finally{api.free(Z)}}return p;case"$methods":if(y===null){let B=r?r.add(pointerSize).readPointer():L(),Z=api.object_getClass(B),Y=new Set,$=Z;do{for(let se of collectMethodNames($,"+ "))Y.add(se);$=api.class_getSuperclass($)}while(!$.isNull());$=B;do{for(let se of collectMethodNames($,"- "))Y.add(se);$=api.class_getSuperclass($)}while(!$.isNull());y=Array.from(Y)}return y;case"$ownMethods":if(v===null){let B=r?r.add(pointerSize).readPointer():L(),Z=api.object_getClass(B),Y=collectMethodNames(Z,"+ "),$=collectMethodNames(B,"- ");v=Y.concat($)}return v;case"$ivars":return S===null&&(R()?S={}:S=new ObjCIvars(C,L())),S;default:if(typeof w=="symbol")return T[w];if(e){let B=M(w);if(B===null||!B.implemented)return}let K=N(w);return K===null?void 0:K}},set(T,w,J,G){return!1},ownKeys(T){if(h===null)if(e){let w=[],J=D();Object.keys(J).forEach(function(G){G[0]!=="+"&&G[0]!=="-"&&J[G].implemented&&w.push(G)}),h=w}else{let w={},J={},G=api.object_getClass(t);do{let K=Memory.alloc(pointerSize),B=api.class_copyMethodList(G,K),Z=R()?"+ ":"- ";try{let Y=K.readUInt();for(let $=0;$!==Y;$++){let se=B.add($*pointerSize).readPointer(),_e=api.method_getName(se),H=api.sel_getName(_e).readCString();if(J[H]!==void 0)continue;J[H]=H;let le=jsMethodName(H),Te=2,xe=le;for(;w[xe]!==void 0;)Te++,xe=le+Te;w[xe]=!0;let Re=Z+H;if(!_.has(Re)){let Be={sel:_e,handle:se,wrapper:null};_.set(Re,Be),_.set(xe,Be)}}}finally{api.free(B)}G=api.class_getSuperclass(G)}while(!G.isNull());h=Object.keys(w)}return["handle"].concat(h)},getOwnPropertyDescriptor(T,w){return{writable:!1,configurable:!0,enumerable:!0}}});return e&&(g=R()?null:N("- respondsToSelector:")),C;function x(T){if(objCObjectBuiltins.has(T))return!0;if(e){let w=M(T);return!!(w!==null&&w.implemented)}return A(T)!==null}function L(){return o===null&&(o=R()?t:api.object_getClass(t)),o}function R(){return n===void 0&&(api.object_isClass?n=!!api.object_isClass(t):n=!!api.class_isMetaClass(api.object_getClass(t))),n}function A(T){let w=_.get(T);if(w!==void 0)return w;let J=U(T),G=J[2];if(w=_.get(G),w!==void 0)return _.set(T,w),w;let K=J[0],B=J[1],Z=selector(B),Y=R()?"+":"-";if(e){let $=M(G);$!==null&&(w={sel:Z,types:$.types,wrapper:null,kind:K})}if(w===void 0){let $=K==="+"?api.class_getClassMethod(L(),Z):api.class_getInstanceMethod(L(),Z);if(!$.isNull())w={sel:Z,handle:$,wrapper:null,kind:K};else{if(R()||K!=="-"||B==="forwardingTargetForSelector:"||B==="methodSignatureForSelector:")return null;let se=C;if("- forwardingTargetForSelector:"in C){let le=C.forwardingTargetForSelector_(Z);if(le!==null&&le.$kind==="instance")se=le;else return null}else return null;let _e=api.class_getInstanceMethod(api.object_getClass(se.handle),Z);if(_e.isNull())return null;let H=api.method_getTypeEncoding(_e).readCString();if((H===null||H==="")&&(H=j(se,G),H===null&&(H=j(C,G)),H===null))return null;w={sel:Z,types:H,wrapper:null,kind:K}}}return _.set(G,w),_.set(T,w),K===Y&&_.set(jsMethodName(B),w),w}function j(T,w){let G=Object.keys(T.$protocols).map(K=>k({},T.$protocols[K])).reduce((K,B)=>(Object.assign(K,B),K),{})[w];return G===void 0?null:G.types}function k(T,w){return w.methods!==void 0&&Object.assign(T,w.methods),w.protocol!==void 0&&k(T,w.protocol),T}function M(T){let J=D()[T];return J!==void 0?J:null}function D(){if(u===null){let T={},w=collectProtocols(e),J=R()?"+":"-";Object.keys(w).forEach(function(G){let B=w[G].methods;Object.keys(B).forEach(function(Z){let Y=B[Z],$=Z.substr(2),se=Z[0],_e=!1,H=!1,le={types:Y.types};Object.defineProperty(le,"implemented",{get(){return _e||(Y.required?H=!0:H=g!==null&&g.call(C,selector($)),_e=!0),H}}),T[Z]=le,se===J&&(T[jsMethodName($)]=le)})}),u=T}return u}function N(T){let w=A(T);if(w===null)return null;let J=w.wrapper;return J===null&&(J=makeMethodInvocationWrapper(w,C,r,zt),w.wrapper=J),J}function U(T){let w=/([+\-])\s(\S+)/.exec(T),J,G;w===null?(G=R()?"+":"-",J=objcMethodName(T)):(G=w[1],J=w[2]);let K=[G,J].join(" ");return[G,J,K]}function W(){return{handle:t.toString()}}function q(T){return t.equals(getHandle(T))}}function getReplacementMethodImplementation(t){let e=replacedMethods.get(t.toString());if(e===void 0)return null;let[,n]=e;return n}function replaceMethodImplementation(t,e){let n=t.toString(),r,o=replacedMethods.get(n);o!==void 0?[r]=o:r=api.method_getImplementation(t),e.equals(r)?replacedMethods.delete(n):replacedMethods.set(n,[r,e]),api.method_setImplementation(t,e)}function collectMethodNames(t,e){let n=[],r=Memory.alloc(pointerSize),o=api.class_copyMethodList(t,r);try{let i=r.readUInt();for(let s=0;s!==i;s++){let l=o.add(s*pointerSize).readPointer(),a=api.method_getName(l),c=api.sel_getName(a).readCString();n.push(e+c)}}finally{api.free(o)}return n}function ObjCProtocol(t){let e=null,n=null,r=null,o=null;Object.defineProperty(this,"handle",{value:t,enumerable:!0}),Object.defineProperty(this,"name",{get(){return e===null&&(e=api.protocol_getName(t).readCString()),e},enumerable:!0}),Object.defineProperty(this,"protocols",{get(){if(n===null){n={};let s=Memory.alloc(pointerSize),l=api.protocol_copyProtocolList(t,s);if(!l.isNull())try{let a=s.readUInt();for(let c=0;c!==a;c++){let d=l.add(c*pointerSize).readPointer(),p=new ObjCProtocol(d);n[p.name]=p}}finally{api.free(l)}}return n},enumerable:!0}),Object.defineProperty(this,"properties",{get(){if(r===null){r={};let s=Memory.alloc(pointerSize),l=api.protocol_copyPropertyList(t,s);if(!l.isNull())try{let a=s.readUInt();for(let c=0;c!==a;c++){let d=l.add(c*pointerSize).readPointer(),p=api.property_getName(d).readCString(),h={},u=api.property_copyAttributeList(d,s);if(!u.isNull())try{let g=s.readUInt();for(let _=0;_!==g;_++){let y=u.add(_*(2*pointerSize)),v=y.readPointer().readCString(),S=y.add(pointerSize).readPointer().readCString();h[v]=S}}finally{api.free(u)}r[p]=h}}finally{api.free(l)}}return r},enumerable:!0}),Object.defineProperty(this,"methods",{get(){if(o===null){o={};let s=Memory.alloc(pointerSize);i(o,s,{required:!0,instance:!1}),i(o,s,{required:!1,instance:!1}),i(o,s,{required:!0,instance:!0}),i(o,s,{required:!1,instance:!0})}return o},enumerable:!0});function i(s,l,a){let c=api.protocol_copyMethodDescriptionList(t,a.required?1:0,a.instance?1:0,l);if(!c.isNull())try{let d=l.readUInt();for(let p=0;p!==d;p++){let h=c.add(p*(2*pointerSize)),u=(a.instance?"- ":"+ ")+selectorAsString(h.readPointer()),g=h.add(pointerSize).readPointer().readCString();s[u]={required:a.required,types:g}}}finally{api.free(c)}}}let objCIvarsBuiltins=new Set(["prototype","constructor","hasOwnProperty","toJSON","toString","valueOf"]);function ObjCIvars(t,e){let n={},r=null,o=[],i=e;do o.unshift(i),i=api.class_getSuperclass(i);while(!i.isNull());let s=Memory.alloc(pointerSize);o.forEach(u=>{let g=api.class_copyIvarList(u,s);try{let _=s.readUInt();for(let y=0;y!==_;y++){let v=g.add(y*pointerSize).readPointer(),S=api.ivar_getName(v).readCString();n[S]=[v,null]}}finally{api.free(g)}});let l=new Proxy(this,{has(u,g){return c(g)},get(u,g,_){switch(g){case"prototype":return u.prototype;case"constructor":return u.constructor;case"hasOwnProperty":return c;case"toJSON":return d;case"toString":return p;case"valueOf":return h;default:let y=a(g);return y===null?void 0:y.get()}},set(u,g,_,y){let v=a(g);if(v===null)throw new Error("Unknown ivar");return v.set(_),!0},ownKeys(u){return r===null&&(r=Object.keys(n)),r},getOwnPropertyDescriptor(u,g){return{writable:!0,configurable:!0,enumerable:!0}}});return l;function a(u){let g=n[u];if(g===void 0)return null;let _=g[1];if(_===null){let y=g[0],v=api.ivar_getOffset(y).toInt32(),S=t.handle.add(v),C=parseType(api.ivar_getTypeEncoding(y).readCString()),x=C.fromNative||identityTransform,L=C.toNative||identityTransform,R,A;u==="isa"?(R=readObjectIsa,A=function(){throw new Error("Unable to set the isa instance variable")}):(R=C.read,A=C.write),_={get(){return x.call(t,R(S))},set(j){A(S,L.call(t,j))}},g[1]=_}return _}function c(u){return objCIvarsBuiltins.has(u)?!0:n.hasOwnProperty(u)}function d(){return Object.keys(l).reduce(function(u,g){return u[g]=l[g],u},{})}function p(){return"ObjCIvars"}function h(){return"ObjCIvars"}}let blockDescriptorAllocSize,blockDescriptorDeclaredSize,blockDescriptorOffsets,blockSize,blockOffsets;pointerSize===4?(blockDescriptorAllocSize=16,blockDescriptorDeclaredSize=20,blockDescriptorOffsets={reserved:0,size:4,rest:8},blockSize=20,blockOffsets={isa:0,flags:4,reserved:8,invoke:12,descriptor:16}):(blockDescriptorAllocSize=32,blockDescriptorDeclaredSize=32,blockDescriptorOffsets={reserved:0,size:8,rest:16},blockSize=32,blockOffsets={isa:0,flags:8,reserved:12,invoke:16,descriptor:24});let BLOCK_HAS_COPY_DISPOSE=1<<25,BLOCK_HAS_CTOR=1<<26,BLOCK_IS_GLOBAL=1<<28,BLOCK_HAS_STRET=1<<29,BLOCK_HAS_SIGNATURE=1<<30;function Block(t,e=zt){if(this._options=e,t instanceof NativePointer){let n=t.add(blockOffsets.descriptor).readPointer();this.handle=t;let r=t.add(blockOffsets.flags).readU32();if((r&BLOCK_HAS_SIGNATURE)!==0){let o=(r&BLOCK_HAS_COPY_DISPOSE)!==0?2:0;this.types=n.add(blockDescriptorOffsets.rest+o*pointerSize).readPointer().readCString(),this._signature=parseSignature(this.types)}else this._signature=null}else{this.declare(t);let n=Memory.alloc(blockDescriptorAllocSize+blockSize),r=n.add(blockDescriptorAllocSize),o=Memory.allocUtf8String(this.types);n.add(blockDescriptorOffsets.reserved).writeULong(0),n.add(blockDescriptorOffsets.size).writeULong(blockDescriptorDeclaredSize),n.add(blockDescriptorOffsets.rest).writePointer(o),r.add(blockOffsets.isa).writePointer(classRegistry.__NSGlobalBlock__),r.add(blockOffsets.flags).writeU32(BLOCK_HAS_SIGNATURE|BLOCK_IS_GLOBAL),r.add(blockOffsets.reserved).writeU32(0),r.add(blockOffsets.descriptor).writePointer(n),this.handle=r,this._storage=[n,o],this.implementation=t.implementation}}Object.defineProperties(Block.prototype,{implementation:{enumerable:!0,get(){let t=this.handle.add(blockOffsets.invoke).readPointer().strip(),e=this._getSignature();return makeBlockInvocationWrapper(this,e,new NativeFunction(t.sign(),e.retType.type,e.argTypes.map(function(n){return n.type}),this._options))},set(t){let e=this._getSignature(),n=new NativeCallback(makeBlockImplementationWrapper(this,e,t),e.retType.type,e.argTypes.map(function(s){return s.type}));this._callback=n;let r=this.handle.add(blockOffsets.invoke),o=Memory.queryProtection(r),i=o.includes("w");i||Memory.protect(r,Process.pointerSize,"rw-"),r.writePointer(n.strip().sign("ia",r)),i||Memory.protect(r,Process.pointerSize,o)}},declare:{value(t){let e=t.types;e===void 0&&(e=unparseSignature(t.retType,["block"].concat(t.argTypes))),this.types=e,this._signature=parseSignature(e)}},_getSignature:{value(){let t=this._signature;if(t===null)throw new Error("block is missing signature; call declare()");return t}}});function collectProtocols(t,e){e=e||{},e[t.name]=t;let n=t.protocols;return Object.keys(n).forEach(function(r){collectProtocols(n[r],e)}),e}function registerProxy(t){let e=t.protocols||[],n=t.methods||{},r=t.events||{},o=new Set(Object.keys(n).filter(a=>/([+\-])\s(\S+)/.exec(a)!==null).map(a=>a.split(" ")[1])),i={"- dealloc":function(){let a=this.data.target;"- release"in a&&a.release(),unbind(this.self),this.super.dealloc();let c=this.data.events.dealloc;c!==void 0&&c.call(this)},"- respondsToSelector:":function(a){let c=selectorAsString(a);return o.has(c)?!0:this.data.target.respondsToSelector_(a)},"- forwardingTargetForSelector:":function(a){let c=this.data.events.forward;return c!==void 0&&c.call(this,selectorAsString(a)),this.data.target},"- methodSignatureForSelector:":function(a){return this.data.target.methodSignatureForSelector_(a)},"- forwardInvocation:":function(a){a.invokeWithTarget_(this.data.target)}};for(var s in n)if(n.hasOwnProperty(s)){if(i.hasOwnProperty(s))throw new Error("The '"+s+"' method is reserved");i[s]=n[s]}let l=registerClass({name:t.name,super:classRegistry.NSProxy,protocols:e,methods:i});return function(a,c){a=a instanceof NativePointer?new ObjCObject(a):a,c=c||{};let d=l.alloc().autorelease(),p=getBoundData(d);p.target="- retain"in a?a.retain():a,p.events=r;for(var h in c)if(c.hasOwnProperty(h)){if(p.hasOwnProperty(h))throw new Error("The '"+h+"' property is reserved");p[h]=c[h]}this.handle=d.handle}}function registerClass(t){let e=t.name;e===void 0&&(e=makeClassName());let n=t.super!==void 0?t.super:classRegistry.NSObject,r=t.protocols||[],o=t.methods||{},i=[],s=api.objc_allocateClassPair(n!==null?n.handle:NULL,Memory.allocUtf8String(e),ptr("0"));if(s.isNull())throw new Error("Unable to register already registered class '"+e+"'");let l=api.object_getClass(s);try{r.forEach(function(a){api.class_addProtocol(s,a.handle)}),Object.keys(o).forEach(function(a){let c=/([+\-])\s(\S+)/.exec(a);if(c===null)throw new Error("Invalid method name");let d=c[1],p=c[2],h,u=o[a];if(typeof u=="function"){let S=null;if(a in n)S=n[a].types;else for(let C of r){let x=C.methods[a];if(x!==void 0){S=x.types;break}}if(S===null)throw new Error("Unable to find '"+a+"' in super-class or any of its protocols");h={types:S,implementation:u}}else h=u;let g=d==="+"?l:s,_=h.types;_===void 0&&(_=unparseSignature(h.retType,[d==="+"?"class":"object","selector"].concat(h.argTypes)));let y=parseSignature(_),v=new NativeCallback(makeMethodImplementationWrapper(y,h.implementation),y.retType.type,y.argTypes.map(function(S){return S.type}));i.push(v),api.class_addMethod(g,selector(p),v,Memory.allocUtf8String(_))})}catch(a){throw api.objc_disposeClassPair(s),a}return api.objc_registerClassPair(s),s._methodCallbacks=i,Script.bindWeak(s,makeClassDestructor(ptr(s))),new ObjCObject(s)}function makeClassDestructor(t){return function(){api.objc_disposeClassPair(t)}}function registerProtocol(t){let e=t.name;e===void 0&&(e=makeProtocolName());let n=t.protocols||[],r=t.methods||{};n.forEach(function(s){if(!(s instanceof ObjCProtocol))throw new Error("Expected protocol")});let o=Object.keys(r).map(function(s){let l=r[s],a=/([+\-])\s(\S+)/.exec(s);if(a===null)throw new Error("Invalid method name");let c=a[1],d=a[2],p=l.types;return p===void 0&&(p=unparseSignature(l.retType,[c==="+"?"class":"object","selector"].concat(l.argTypes))),{kind:c,name:d,types:p,optional:l.optional}}),i=api.objc_allocateProtocol(Memory.allocUtf8String(e));if(i.isNull())throw new Error("Unable to register already registered protocol '"+e+"'");return n.forEach(function(s){api.protocol_addProtocol(i,s.handle)}),o.forEach(function(s){let l=s.optional?0:1,a=s.kind==="-"?1:0;api.protocol_addMethodDescription(i,selector(s.name),Memory.allocUtf8String(s.types),l,a)}),api.objc_registerProtocol(i),new ObjCProtocol(i)}function getHandle(t){if(t instanceof NativePointer)return t;if(typeof t=="object"&&t.hasOwnProperty("handle"))return t.handle;throw new Error("Expected NativePointer or ObjC.Object instance")}function bind(t,e){let n=getHandle(t),r=t instanceof ObjCObject?t:new ObjCObject(n);bindings.set(n.toString(),{self:r,super:r.$super,data:e})}function unbind(t){let e=getHandle(t);bindings.delete(e.toString())}function getBoundData(t){return getBinding(t).data}function getBinding(t){let e=getHandle(t),n=e.toString(),r=bindings.get(n);if(r===void 0){let o=t instanceof ObjCObject?t:new ObjCObject(e);r={self:o,super:o.$super,data:{}},bindings.set(n,r)}return r}function enumerateLoadedClasses(...t){let e=new ModuleMap,n=!1,r,o;t.length===1?r=t[0]:(r=t[1],o=t[0].ownedBy),o===void 0&&(o=e,n=!0);let i=api.class_getName,s=r.onMatch.bind(r),l=(pointerSize===8?8:11)*pointerSize,a=api.objc_getClassList(NULL,0),c=Memory.alloc(a*pointerSize);api.objc_getClassList(c,a);for(let d=0;d!==a;d++){let p=c.add(d*pointerSize).readPointer(),h=i(p),u=null,g=o.findPath(h);if(g===null&&(n||e.findPath(h)===null)&&(u=h.readCString(),u.indexOf(".")!==-1)){let v=p.add(l).readPointer();g=o.findPath(v)}g!==null&&(u===null&&(u=h.readCString()),s(u,g))}r.onComplete()}function enumerateLoadedClassesSync(t={}){let e={};return enumerateLoadedClasses(t,{onMatch(n,r){let o=e[r];o===void 0&&(o=[],e[r]=o),o.push(n)},onComplete(){}}),e}function choose(t,e){let n=t,r=!0;if(!(t instanceof ObjCObject)&&typeof t=="object"&&(n=t.class,t.hasOwnProperty("subclasses")&&(r=t.subclasses)),!(n instanceof ObjCObject&&(n.$kind==="class"||n.$kind==="meta-class")))throw new Error("Expected an ObjC.Object for a class or meta-class");let o=ds().choose(n,r).map(i=>new ObjCObject(i));for(let i of o)if(e.onMatch(i)==="stop")break;e.onComplete()}function makeMethodInvocationWrapper(method,owner,superSpecifier,invocationOptions){let sel=method.sel,handle=method.handle,types;handle===void 0?(handle=null,types=method.types):types=api.method_getTypeEncoding(handle).readCString();let signature=parseSignature(types),retType=signature.retType,argTypes=signature.argTypes.slice(2),objc_msgSend=superSpecifier?getMsgSendSuperImpl(signature,invocationOptions):getMsgSendImpl(signature,invocationOptions),argVariableNames=argTypes.map(function(t,e){return"a"+(e+1)}),callArgs=[superSpecifier?"superSpecifier":"this","sel"].concat(argTypes.map(function(t,e){return t.toNative?"argTypes["+e+"].toNative.call(this, "+argVariableNames[e]+")":argVariableNames[e]})),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.fromNative?(returnCaptureLeft="return retType.fromNative.call(this, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let m=eval("var m = function ("+argVariableNames.join(", ")+") { "+returnCaptureLeft+"objc_msgSend("+callArgs.join(", ")+")"+returnCaptureRight+"; }; m;");Object.defineProperty(m,"handle",{enumerable:!0,get:getMethodHandle}),m.selector=sel,Object.defineProperty(m,"implementation",{enumerable:!0,get(){let t=getMethodHandle(),e=new NativeFunction(api.method_getImplementation(t),m.returnType,m.argumentTypes,invocationOptions),n=getReplacementMethodImplementation(t);return n!==null&&(e._callback=n),e},set(t){replaceMethodImplementation(getMethodHandle(),t)}}),m.returnType=retType.type,m.argumentTypes=signature.argTypes.map(t=>t.type),m.types=types,Object.defineProperty(m,"symbol",{enumerable:!0,get(){return`${method.kind}[${owner.$className} ${selectorAsString(sel)}]`}}),m.clone=function(t){return makeMethodInvocationWrapper(method,owner,superSpecifier,t)};function getMethodHandle(){if(handle===null){if(owner.$kind==="instance"){let t=owner;do if("- forwardingTargetForSelector:"in t){let e=t.forwardingTargetForSelector_(sel);if(e===null||e.$kind!=="instance")break;let n=api.class_getInstanceMethod(e.$class.handle,sel);n.isNull()?t=e:handle=n}else break;while(handle===null)}if(handle===null)throw new Error("Unable to find method handle of proxied function")}return handle}return m}function makeMethodImplementationWrapper(signature,implementation){let retType=signature.retType,argTypes=signature.argTypes,argVariableNames=argTypes.map(function(t,e){return e===0?"handle":e===1?"sel":"a"+(e-1)}),callArgs=argTypes.slice(2).map(function(t,e){let n=argVariableNames[2+e];return t.fromNative?"argTypes["+(2+e)+"].fromNative.call(self, "+n+")":n}),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.toNative?(returnCaptureLeft="return retType.toNative.call(self, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let m=eval("var m = function ("+argVariableNames.join(", ")+") { var binding = getBinding(handle);var self = binding.self;"+returnCaptureLeft+"implementation.call(binding"+(callArgs.length>0?", ":"")+callArgs.join(", ")+")"+returnCaptureRight+"; }; m;");return m}function makeBlockInvocationWrapper(block,signature,implementation){let retType=signature.retType,argTypes=signature.argTypes.slice(1),argVariableNames=argTypes.map(function(t,e){return"a"+(e+1)}),callArgs=argTypes.map(function(t,e){return t.toNative?"argTypes["+e+"].toNative.call(this, "+argVariableNames[e]+")":argVariableNames[e]}),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.fromNative?(returnCaptureLeft="return retType.fromNative.call(this, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let f=eval("var f = function ("+argVariableNames.join(", ")+") { "+returnCaptureLeft+"implementation(this"+(callArgs.length>0?", ":"")+callArgs.join(", ")+")"+returnCaptureRight+"; }; f;");return f.bind(block)}function makeBlockImplementationWrapper(block,signature,implementation){let retType=signature.retType,argTypes=signature.argTypes,argVariableNames=argTypes.map(function(t,e){return e===0?"handle":"a"+e}),callArgs=argTypes.slice(1).map(function(t,e){let n=argVariableNames[1+e];return t.fromNative?"argTypes["+(1+e)+"].fromNative.call(this, "+n+")":n}),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.toNative?(returnCaptureLeft="return retType.toNative.call(this, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let f=eval("var f = function ("+argVariableNames.join(", ")+") { if (!this.handle.equals(handle))this.handle = handle;"+returnCaptureLeft+"implementation.call(block"+(callArgs.length>0?", ":"")+callArgs.join(", ")+")"+returnCaptureRight+"; }; f;");return f.bind(block)}function rawFridaType(t){return t==="object"?"pointer":t}function makeClassName(){for(let t=1;;t++){let e="FridaAnonymousClass"+t;if(!(e in classRegistry))return e}}function makeProtocolName(){for(let t=1;;t++){let e="FridaAnonymousProtocol"+t;if(!(e in protocolRegistry))return e}}function objcMethodName(t){return t.replace(/_/g,":")}function jsMethodName(t){let e=t.replace(/:/g,"_");return objCObjectBuiltins.has(e)&&(e+="2"),e}let isaMasks={x64:"0x7ffffffffff8",arm64:"0xffffffff8"},rawMask=isaMasks[Process.arch];if(rawMask!==void 0){let t=ptr(rawMask);readObjectIsa=function(e){return e.readPointer().and(t)}}else readObjectIsa=function(t){return t.readPointer()};function getMsgSendImpl(t,e){return resolveMsgSendImpl(msgSendBySignatureId,t,e,!1)}function getMsgSendSuperImpl(t,e){return resolveMsgSendImpl(msgSendSuperBySignatureId,t,e,!0)}function resolveMsgSendImpl(t,e,n,r){if(n!==zt)return makeMsgSendImpl(e,n,r);let{id:o}=e,i=t.get(o);return i===void 0&&(i=makeMsgSendImpl(e,n,r),t.set(o,i)),i}function makeMsgSendImpl(t,e,n){let r=t.retType.type,o=t.argTypes.map(function(a){return a.type}),i=["objc_msgSend"];n&&i.push("Super"),r instanceof Array&&!typeFitsInRegisters(r)?i.push("_stret"):(r==="float"||r==="double")&&i.push("_fpret");let l=i.join("");return new NativeFunction(api[l],r,o,e)}function typeFitsInRegisters(t){return Process.arch!=="x64"?!1:sizeOfTypeOnX64(t)<=16}function sizeOfTypeOnX64(t){if(t instanceof Array)return t.reduce((e,n)=>e+sizeOfTypeOnX64(n),0);switch(t){case"bool":case"char":case"uchar":return 1;case"int16":case"uint16":return 2;case"int":case"int32":case"uint":case"uint32":case"float":return 4;default:return 8}}function unparseSignature(t,e){let n=typeIdFromAlias(t),r=e.map(typeIdFromAlias),o=r.map(l=>singularTypeById[l].size),i=o.reduce((l,a)=>l+a,0),s=0;return n+i+r.map((l,a)=>{let c=l+s;return s+=o[a],c}).join("")}function parseSignature(t){let e=[t,0];parseQualifiers(e);let n=readType(e);readNumber(e);let r=[],o=JSON.stringify(n.type);for(;dataAvailable(e);){parseQualifiers(e);let i=readType(e);readNumber(e),r.push(i),o+=JSON.stringify(i.type)}return{id:o,retType:n,argTypes:r}}function parseType(t){return readType([t,0])}function readType(t){let e=readChar(t);if(e==="@"){let r=peekChar(t);r==="?"?(e+=r,skipChar(t),peekChar(t)==="<"&&skipExtendedBlock(t)):r==='"'&&(skipChar(t),readUntil('"',t))}else if(e==="^"){let r=peekChar(t);r==="@"&&(e+=r,skipChar(t))}let n=singularTypeById[e];if(n!==void 0)return n;if(e==="["){let r=readNumber(t),o=readType(t);return skipChar(t),arrayType(r,o)}else if(e==="{"){if(!tokenExistsAhead("=","}",t))return readUntil("}",t),structType([]);readUntil("=",t);let r=[],o;for(;(o=peekChar(t))!=="}";)o==='"'&&(skipChar(t),readUntil('"',t)),r.push(readType(t));return skipChar(t),structType(r)}else if(e==="("){readUntil("=",t);let r=[];for(;peekChar(t)!==")";)r.push(readType(t));return skipChar(t),unionType(r)}else{if(e==="b")return readNumber(t),singularTypeById.i;if(e==="^")return readType(t),singularTypeById["?"];if(modifiers.has(e))return readType(t);throw new Error("Unable to handle type "+e)}}function skipExtendedBlock(t){let e;for(skipChar(t);(e=peekChar(t))!==">";)peekChar(t)==="<"?skipExtendedBlock(t):(skipChar(t),e==='"'&&readUntil('"',t));skipChar(t)}function readNumber(t){let e="";for(;dataAvailable(t);){let n=peekChar(t),r=n.charCodeAt(0);if(r>=48&&r<=57)e+=n,skipChar(t);else break}return parseInt(e)}function readUntil(t,e){let n=e[0],r=e[1],o=n.indexOf(t,r);if(o===-1)throw new Error("Expected token '"+t+"' not found");let i=n.substring(r,o);return e[1]=o+1,i}function readChar(t){return t[0][t[1]++]}function peekChar(t){return t[0][t[1]]}function tokenExistsAhead(t,e,n){let[r,o]=n,i=r.indexOf(t,o);if(i===-1)return!1;let s=r.indexOf(e,o);if(s===-1)throw new Error("Expected to find terminator: "+e);return i<s}function skipChar(t){t[1]++}function dataAvailable(t){return t[1]!==t[0].length}let qualifierById={r:"const",n:"in",N:"inout",o:"out",O:"bycopy",R:"byref",V:"oneway"};function parseQualifiers(t){let e=[];for(;;){let n=qualifierById[peekChar(t)];if(n===void 0)break;e.push(n),skipChar(t)}return e}let idByAlias={char:"c",int:"i",int16:"s",int32:"i",int64:"q",uchar:"C",uint:"I",uint16:"S",uint32:"I",uint64:"Q",float:"f",double:"d",bool:"B",void:"v",string:"*",object:"@",block:"@?",class:"#",selector:":",pointer:"^v"};function typeIdFromAlias(t){if(typeof t=="object"&&t!==null)return`@"${t.type}"`;let e=idByAlias[t];if(e===void 0)throw new Error("No known encoding for type "+t);return e}let fromNativeId=function(t){return t.isNull()?null:t.toString(16)===this.handle.toString(16)?this:new ObjCObject(t)},toNativeId=function(t){if(t===null)return NULL;let e=typeof t;return e==="string"?(cachedNSStringCtor===null&&(cachedNSString=classRegistry.NSString,cachedNSStringCtor=cachedNSString.stringWithUTF8String_),cachedNSStringCtor.call(cachedNSString,Memory.allocUtf8String(t))):e==="number"?(cachedNSNumberCtor===null&&(cachedNSNumber=classRegistry.NSNumber,cachedNSNumberCtor=cachedNSNumber.numberWithDouble_),cachedNSNumberCtor.call(cachedNSNumber,t)):t},fromNativeBlock=function(t){return t.isNull()?null:t.toString(16)===this.handle.toString(16)?this:new Block(t)},toNativeBlock=function(t){return t!==null?t:NULL},toNativeObjectArray=function(t){if(t instanceof Array){let e=t.length,n=Memory.alloc(e*pointerSize);for(let r=0;r!==e;r++)n.add(r*pointerSize).writePointer(toNativeId(t[r]));return n}return t};function arrayType(t,e){return{type:"pointer",read(n){let r=[],o=e.size;for(let i=0;i!==t;i++)r.push(e.read(n.add(i*o)));return r},write(n,r){let o=e.size;r.forEach((i,s)=>{e.write(n.add(s*o),i)})}}}function structType(t){let e,n;if(t.some(function(i){return!!i.fromNative})){let i=t.map(function(s){return s.fromNative?s.fromNative:identityTransform});e=function(s){return s.map(function(l,a){return i[a].call(this,l)})}}else e=identityTransform;if(t.some(function(i){return!!i.toNative})){let i=t.map(function(s){return s.toNative?s.toNative:identityTransform});n=function(s){return s.map(function(l,a){return i[a].call(this,l)})}}else n=identityTransform;let[r,o]=t.reduce(function(i,s){let[l,a]=i,{size:c}=s,d=align(l,c);return a.push(d),[d+c,a]},[0,[]]);return{type:t.map(i=>i.type),size:r,read(i){return t.map((s,l)=>s.read(i.add(o[l])))},write(i,s){s.forEach((l,a)=>{t[a].write(i.add(o[a]),l)})},fromNative:e,toNative:n}}function unionType(t){let e=t.reduce(function(o,i){return i.size>o.size?i:o},t[0]),n,r;if(e.fromNative){let o=e.fromNative;n=function(i){return o.call(this,i[0])}}else n=function(o){return o[0]};if(e.toNative){let o=e.toNative;r=function(i){return[o.call(this,i)]}}else r=function(o){return[o]};return{type:[e.type],size:e.size,read:e.read,write:e.write,fromNative:n,toNative:r}}let longBits=pointerSize==8&&Process.platform!=="windows"?64:32;modifiers=new Set(["j","A","r","n","N","o","O","R","V","+"]),singularTypeById={c:{type:"char",size:1,read:t=>t.readS8(),write:(t,e)=>{t.writeS8(e)},toNative(t){return typeof t=="boolean"?t?1:0:t}},i:{type:"int",size:4,read:t=>t.readInt(),write:(t,e)=>{t.writeInt(e)}},s:{type:"int16",size:2,read:t=>t.readS16(),write:(t,e)=>{t.writeS16(e)}},l:{type:"int32",size:4,read:t=>t.readS32(),write:(t,e)=>{t.writeS32(e)}},q:{type:"int64",size:8,read:t=>t.readS64(),write:(t,e)=>{t.writeS64(e)}},C:{type:"uchar",size:1,read:t=>t.readU8(),write:(t,e)=>{t.writeU8(e)}},I:{type:"uint",size:4,read:t=>t.readUInt(),write:(t,e)=>{t.writeUInt(e)}},S:{type:"uint16",size:2,read:t=>t.readU16(),write:(t,e)=>{t.writeU16(e)}},L:{type:"uint"+longBits,size:longBits/8,read:t=>t.readULong(),write:(t,e)=>{t.writeULong(e)}},Q:{type:"uint64",size:8,read:t=>t.readU64(),write:(t,e)=>{t.writeU64(e)}},f:{type:"float",size:4,read:t=>t.readFloat(),write:(t,e)=>{t.writeFloat(e)}},d:{type:"double",size:8,read:t=>t.readDouble(),write:(t,e)=>{t.writeDouble(e)}},B:{type:"bool",size:1,read:t=>t.readU8(),write:(t,e)=>{t.writeU8(e)},fromNative(t){return!!t},toNative(t){return t?1:0}},v:{type:"void",size:0},"*":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative(t){return t.readCString()}},"@":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative:fromNativeId,toNative:toNativeId},"@?":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative:fromNativeBlock,toNative:toNativeBlock},"^@":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},toNative:toNativeObjectArray},"^v":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)}},"#":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative:fromNativeId,toNative:toNativeId},":":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)}},"?":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)}}};function identityTransform(t){return t}function align(t,e){let n=t%e;return n===0?t:t+(e-n)}}var cf=new lf,ke=cf;var df=new Pe,uf=new Pe;function pf(t,e,n){if(!t||!df.first(e+":"+t))return;let r=Ze(t);pe("channel",{name:t,kind:e,via:n,score:r.score,tags:r.tags});let o="["+e+"] "+t;We(r)?(z.hit(o),z.detail("score "+r.score+" \xB7 "+r.tags.join(", "))):ue().verbose&&!r.ignored&&z.info(o)}function ps(t){return t===void 0||t.isNull()?null:X("flutter/ios/objc-string",()=>String(new ke.Object(t)))??null}function ff(){let t=[{cls:"FlutterMethodChannel",selectors:["+ methodChannelWithName:binaryMessenger:","+ methodChannelWithName:binaryMessenger:codec:","+ methodChannelWithName:binaryMessenger:codec:taskQueue:"],kind:"method"},{cls:"FlutterEventChannel",selectors:["+ eventChannelWithName:binaryMessenger:","+ eventChannelWithName:binaryMessenger:codec:","+ eventChannelWithName:binaryMessenger:codec:taskQueue:"],kind:"event"},{cls:"FlutterBasicMessageChannel",selectors:["+ messageChannelWithName:binaryMessenger:","+ messageChannelWithName:binaryMessenger:codec:"],kind:"message"}];for(let{cls:e,selectors:n,kind:r}of t){let o=ke.classes[e];if(o===void 0){z.warn(e+" not present \u2014 skipping.");continue}for(let i of n){let s=o[i];s!==void 0&&X("flutter/ios/factory/"+e+i,()=>{Interceptor.attach(s.implementation,{onEnter:fn("flutter/ios/factory-impl",l=>{let a=ps(l[2]);a!==null&&pf(a,r,"registration")})})})}}}function hf(){if(!ue().captureCalls)return;let t=ke.classes.FlutterMethodChannel;if(t===void 0)return;let e=t["- setMethodCallHandler:"];if(e===void 0){z.warn("FlutterMethodChannel does not expose setMethodCallHandler:.");return}X("flutter/ios/set-handler",()=>{Interceptor.attach(e.implementation,{onEnter:fn("flutter/ios/set-handler-impl",function(n){let r=n[2],o=n[0];if(r===void 0||r.isNull()||o===void 0)return;let i=X("flutter/ios/channel-name",()=>{let s=new ke.Object(o);return s.name!==void 0?String(s.name()):null})??"<unknown>";X("flutter/ios/wrap-block",()=>{let s=new ke.Block(r),l=s.implementation;s.implementation=function(a,c){X("flutter/ios/on-method-call",()=>{let h=new ke.Object(a),u=String(h.method()),g=h.arguments()&&!h.arguments().isNull?.()?String(h.arguments()):null,_=Ze(i+"/"+u);pe("call",{channel:i,method:u,args:Ue(g),score:_.score,tags:_.tags});let y=i+" \u2192 "+u+"("+(Ue(g)??"")+")";We(_)?z.hit(y):ue().verbose&&z.note(y)});let d=c;return l(a,function(h){return X("flutter/ios/result",()=>{let u=h==null||(h.isNull?.()??!1)?null:String(new ke.Object(h));pe("result",{channel:i,method:"<reply>",outcome:"success",value:Ue(u)}),ue().verbose&&z.detail("\u21B3 reply: "+(Ue(u)??"<void>"))}),d(h)})}})})})})}function us(t,e){if(!t||!uf.first(t))return;let n=Ze(t);pe("plugin",{name:t,source:e}),We(n)?z.hit("[plugin] "+t+"  ("+n.tags.join(", ")+")"):z.info("[plugin] "+t)}function mf(){z.section("Flutter Plugins");for(let t of["FlutterPluginAppLifeCycleDelegate","FlutterEngine","FlutterViewController"]){let n=ke.classes[t]?.["- registrarForPlugin:"];n!==void 0&&X("flutter/ios/registrar/"+t,()=>{Interceptor.attach(n.implementation,{onEnter:fn("flutter/ios/registrar-impl",r=>{let o=ps(r[2]);o!==null&&us(o,"registrar")})})})}X("flutter/ios/plugin-scan",()=>{for(let t of Object.keys(ke.classes))(t.startsWith("FLT")||t.endsWith("Plugin")&&!t.startsWith("Flutter"))&&us(t,"objc-classes")})}function fs(){if(z.section("Flutter Platform Channels (iOS)"),ke.classes.FlutterMethodChannel===void 0){z.fail("No Flutter classes in the Objective-C runtime \u2014 is this a Flutter app?");return}ff(),hf(),mf(),z.detail("Hooks installed \u2014 exercise the app to populate the model.")}var _f=400;function gf(t){let e=t.toLowerCase();return e.includes("libflutter.so")||e.includes("libapp.so")}function hs(t){let e=Process.enumerateModules();if(mn(e)!==null){t();return}let n=Module.findGlobalExportByName("android_dlopen_ext")??Module.findGlobalExportByName("dlopen");if(n===null){z.warn("Cannot hook dlopen \u2014 enumerating modules now, which may be early."),t();return}z.detail("Flutter engine not mapped yet \u2014 waiting for it to load");let r=!1,o=null,i=Interceptor.attach(n,{onEnter(s){let l=s[0];this.loadedPath=l===void 0?null:X("loader/read-path",()=>l.readCString())??null},onLeave(){let s=this.loadedPath;r||typeof s!="string"||!gf(s)||(o!==null&&clearTimeout(o),o=setTimeout(()=>{r||(r=!0,i.detach(),X("loader/on-ready",t))},_f))}})}function ms(){return we.available?"android":ke.available?"ios":"unknown"}var _s=!1;function gs(){let t=!1;return we.perform(()=>{X("target/android-identity",()=>{let n=we.use("android.app.ActivityThread").currentApplication();if(n===null)return;let r=n.getApplicationContext(),o=r.getPackageName(),i=r.getPackageManager().getPackageInfo(o,0),s=i.versionName.value??null,l=null;try{l=String(i.getLongVersionCode())}catch{l=String(i.versionCode.value)}pe("target",{platform:"android",id:o,versionName:s,versionCode:l,pid:Process.id}),z.info(Ce("Package",14)+": "+o),z.info(Ce("Version",14)+": "+s+" ("+l+")"),t=!0,_s=!0})}),t}function yf(){we.perform(()=>{X("target/defer-identity",()=>{let t=we.use("android.app.Instrumentation");t.callApplicationOnCreate!==void 0&&t.callApplicationOnCreate.overloads.forEach(e=>{He("target/app-oncreate",e,()=>{_s||gs()})})})})}function bf(){X("target/ios-identity",()=>{let t=ke.classes.NSBundle;if(t===void 0){z.warn("NSBundle unavailable \u2014 identity cannot be read.");return}let e=t.mainBundle(),n=String(e.bundleIdentifier()),r=e.infoDictionary(),o=l=>{let a=r.objectForKey_(l);return a?String(a):null},i=o("CFBundleShortVersionString"),s=o("CFBundleVersion");pe("target",{platform:"ios",id:n,versionName:i,versionCode:s,pid:Process.id}),z.info(Ce("Bundle ID",14)+": "+n),z.info(Ce("Version",14)+": "+i+" ("+s+")")})}function ys(t){z.section("Application Identity"),t==="android"?gs()||(z.detail("application not constructed yet \u2014 will report at onCreate"),yf()):t==="ios"?bf():z.fail("Neither the Java nor the Objective-C runtime is available.")}var vf=["libflutter.so","flutter","libapp.so","libil2cpp.so","libunity.so","unityframework","libreactnativejni.so","libhermes.so","hermes","libjsc","libmonosgen","libmono","cordova","libssl","libcrypto","boringssl","libconscrypt"];function Sf(t){let e=t.toLowerCase();return vf.some(n=>e.includes(n))}function bs(){let t=Process.enumerateModules();for(let e of t)Sf(e.name)&&pe("module",{name:e.name,base:e.base.toString(),size:e.size,path:e.path});return t}function vs(t){z.section("Engine Fingerprint");let e=t.map(i=>i.name.toLowerCase()),n=i=>e.some(s=>s.includes(i)),r="Native";n("libflutter.so")||e.includes("flutter")?r="Flutter":n("libil2cpp")||n("libunity")||n("unityframework")?r="Unity (IL2CPP)":n("libhermes")||n("hermes")?r="React Native (Hermes)":n("libreactnativejni")||n("libjsc")?r="React Native (JSC)":n("libmonosgen")||n("libmono")?r="Xamarin/Mono":(n("cordova")||n("libxwalkcore"))&&(r="Cordova");let o=Rt(t);return pe("engine",{engine:r,hasDartPayload:o!==null}),z.info(Ce("Engine",14)+": "+r),o!==null&&z.note(Ce("Dart payload",14)+": "+o.name),r!=="Flutter"&&z.warn("No Flutter engine found \u2014 channel enumeration will likely find nothing."),r}function Ss(){let t=ms();pe("run.start",{agent:"flutter-enum",platform:t}),z.section("frida-scripts \xB7 flutter-enum"),z.detail("profile: "+Qi+" \xB7 platform: "+t),ys(t),t==="android"?rs():t==="ios"?fs():z.fail("Unsupported runtime \u2014 no Java or Objective-C bridge available."),hs(()=>{let e=bs();vs(e)==="Flutter"&&(t==="android"&&ns(),cs(e))})}function Ef(){if(we.available){we.perform(()=>{X("entry/run",Ss)});return}X("entry/run",Ss)}Ef();rpc.exports={configure(t){return Hi(t)},model(){return Yr()},summary(){return{elapsedMs:Wi(),channels:_t("channel"),calls:_t("call"),results:_t("result"),plugins:_t("plugin"),errors:_t("error"),config:ue()}},finish(t="host-requested"){return pe("run.end",{reason:t}),Yr()}};
