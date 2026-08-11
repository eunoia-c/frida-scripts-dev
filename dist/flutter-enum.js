📦
310136 /agent/entries/flutter-enum.js
✄
var Oi=Object.defineProperty;var ji=(t,e)=>{for(var n in e)Oi(t,n,{get:e[n],enumerable:!0})};var ze=[],Me=[],vn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(let t=0,e=vn.length;t<e;++t)ze[t]=vn[t],Me[vn.charCodeAt(t)]=t;Me[45]=62;Me[95]=63;function Pi(t){let e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");let n=t.indexOf("=");n===-1&&(n=e);let r=n===e?0:4-n%4;return[n,r]}function Ri(t,e,n){return(e+n)*3/4-n}function ao(t){let e=Pi(t),n=e[0],r=e[1],o=new Uint8Array(Ri(t,n,r)),s=0,i=r>0?n-4:n,l;for(l=0;l<i;l+=4){let a=Me[t.charCodeAt(l)]<<18|Me[t.charCodeAt(l+1)]<<12|Me[t.charCodeAt(l+2)]<<6|Me[t.charCodeAt(l+3)];o[s++]=a>>16&255,o[s++]=a>>8&255,o[s++]=a&255}if(r===2){let a=Me[t.charCodeAt(l)]<<2|Me[t.charCodeAt(l+1)]>>4;o[s++]=a&255}if(r===1){let a=Me[t.charCodeAt(l)]<<10|Me[t.charCodeAt(l+1)]<<4|Me[t.charCodeAt(l+2)]>>2;o[s++]=a>>8&255,o[s++]=a&255}return o}function Fi(t){return ze[t>>18&63]+ze[t>>12&63]+ze[t>>6&63]+ze[t&63]}function zi(t,e,n){let r=[];for(let o=e;o<n;o+=3){let s=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255);r.push(Fi(s))}return r.join("")}function Sn(t){let e=t.length,n=e%3,r=[],o=16383;for(let s=0,i=e-n;s<i;s+=o)r.push(zi(t,s,s+o>i?i:s+o));if(n===1){let s=t[e-1];r.push(ze[s>>2]+ze[s<<4&63]+"==")}else if(n===2){let s=(t[e-2]<<8)+t[e-1];r.push(ze[s>>10]+ze[s>>4&63]+ze[s<<2&63]+"=")}return r.join("")}function St(t,e,n,r,o){let s,i,l=o*8-r-1,a=(1<<l)-1,c=a>>1,d=-7,p=n?o-1:0,h=n?-1:1,u=t[e+p];for(p+=h,s=u&(1<<-d)-1,u>>=-d,d+=l;d>0;)s=s*256+t[e+p],p+=h,d-=8;for(i=s&(1<<-d)-1,s>>=-d,d+=r;d>0;)i=i*256+t[e+p],p+=h,d-=8;if(s===0)s=1-c;else{if(s===a)return i?NaN:(u?-1:1)*(1/0);i=i+Math.pow(2,r),s=s-c}return(u?-1:1)*i*Math.pow(2,s-r)}function En(t,e,n,r,o,s){let i,l,a,c=s*8-o-1,d=(1<<c)-1,p=d>>1,h=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=r?0:s-1,g=r?1:-1,_=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,i=d):(i=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-i))<1&&(i--,a*=2),i+p>=1?e+=h/a:e+=h*Math.pow(2,1-p),e*a>=2&&(i++,a/=2),i+p>=d?(l=0,i=d):i+p>=1?(l=(e*a-1)*Math.pow(2,o),i=i+p):(l=e*Math.pow(2,p-1)*Math.pow(2,o),i=0));o>=8;)t[n+u]=l&255,u+=g,l/=256,o-=8;for(i=i<<o|l,c+=o;c>0;)t[n+u]=i&255,u+=g,i/=256,c-=8;t[n+u-g]|=_*128}var Bi={INSPECT_MAX_BYTES:50},wn=2147483647;b.TYPED_ARRAY_SUPPORT=!0;Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(b.isBuffer(this))return this.byteOffset}});function Ge(t){if(t>wn)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,b.prototype),e}function b(t,e,n){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Nn(t)}return fo(t,e,n)}b.poolSize=8192;function fo(t,e,n){if(typeof t=="string")return Ji(t,e);if(ArrayBuffer.isView(t))return Gi(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t instanceof ArrayBuffer||t&&t.buffer instanceof ArrayBuffer||t instanceof SharedArrayBuffer||t&&t.buffer instanceof SharedArrayBuffer)return kn(t,e,n);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let r=t.valueOf&&t.valueOf();if(r!=null&&r!==t)return b.from(r,e,n);let o=Hi(t);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return b.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}b.from=function(t,e,n){return fo(t,e,n)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function po(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Vi(t,e,n){return po(t),t<=0?Ge(t):e!==void 0?typeof n=="string"?Ge(t).fill(e,n):Ge(t).fill(e):Ge(t)}b.alloc=function(t,e,n){return Vi(t,e,n)};function Nn(t){return po(t),Ge(t<0?0:Tn(t)|0)}b.allocUnsafe=function(t){return Nn(t)};b.allocUnsafeSlow=function(t){return Nn(t)};function Ji(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let n=ho(t,e)|0,r=Ge(n),o=r.write(t,e);return o!==n&&(r=r.slice(0,o)),r}function Cn(t){let e=t.length<0?0:Tn(t.length)|0,n=Ge(e);for(let r=0;r<e;r+=1)n[r]=t[r]&255;return n}function Gi(t){if(t instanceof Uint8Array){let e=new Uint8Array(t);return kn(e.buffer,e.byteOffset,e.byteLength)}return Cn(t)}function kn(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return e===void 0&&n===void 0?r=new Uint8Array(t):n===void 0?r=new Uint8Array(t,e):r=new Uint8Array(t,e,n),Object.setPrototypeOf(r,b.prototype),r}function Hi(t){if(b.isBuffer(t)){let e=Tn(t.length)|0,n=Ge(e);return n.length===0||t.copy(n,0,0,e),n}if(t.length!==void 0)return typeof t.length!="number"||Number.isNaN(t.length)?Ge(0):Cn(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Cn(t.data)}function Tn(t){if(t>=wn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+wn.toString(16)+" bytes");return t|0}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,n){if(e instanceof Uint8Array&&(e=b.from(e,e.offset,e.byteLength)),n instanceof Uint8Array&&(n=b.from(n,n.offset,n.byteLength)),!b.isBuffer(e)||!b.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;let r=e.length,o=n.length;for(let s=0,i=Math.min(r,o);s<i;++s)if(e[s]!==n[s]){r=e[s],o=n[s];break}return r<o?-1:o<r?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let r;if(n===void 0)for(n=0,r=0;r<e.length;++r)n+=e[r].length;let o=b.allocUnsafe(n),s=0;for(r=0;r<e.length;++r){let i=e[r];if(i instanceof Uint8Array)s+i.length>o.length?(b.isBuffer(i)||(i=b.from(i.buffer,i.byteOffset,i.byteLength)),i.copy(o,s)):Uint8Array.prototype.set.call(o,i,s);else if(b.isBuffer(i))i.copy(o,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=i.length}return o};function ho(t,e){if(b.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return In(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return wo(t).length;default:if(o)return r?-1:In(t).length;e=(""+e).toLowerCase(),o=!0}}b.byteLength=ho;function $i(t,e,n){let r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return na(this,e,n);case"utf8":case"utf-8":return _o(this,e,n);case"ascii":return ea(this,e,n);case"latin1":case"binary":return ta(this,e,n);case"base64":return Yi(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ra(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}b.prototype._isBuffer=!0;function Ye(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<e;n+=2)Ye(this,n,n+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<e;n+=4)Ye(this,n,n+3),Ye(this,n+1,n+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<e;n+=8)Ye(this,n,n+7),Ye(this,n+1,n+6),Ye(this,n+2,n+5),Ye(this,n+3,n+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?_o(this,0,e):$i.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",n=Bi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};b.prototype[Symbol.for("nodejs.util.inspect.custom")]=b.prototype.inspect;b.prototype.compare=function(e,n,r,o,s){if(e instanceof Uint8Array&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),s===void 0&&(s=this.length),n<0||r>e.length||o<0||s>this.length)throw new RangeError("out of range index");if(o>=s&&n>=r)return 0;if(o>=s)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,o>>>=0,s>>>=0,this===e)return 0;let i=s-o,l=r-n,a=Math.min(i,l),c=this.slice(o,s),d=e.slice(n,r);for(let p=0;p<a;++p)if(c[p]!==d[p]){i=c[p],l=d[p];break}return i<l?-1:l<i?1:0};function mo(t,e,n,r,o){if(t.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Number.isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0)if(o)n=0;else return-1;if(typeof e=="string"&&(e=b.from(e,r)),b.isBuffer(e))return e.length===0?-1:lo(t,e,n,r,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):lo(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function lo(t,e,n,r,o){let s=1,i=t.length,l=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(t.length<2||e.length<2)return-1;s=2,i/=2,l/=2,n/=2}function a(d,p){return s===1?d[p]:d.readUInt16BE(p*s)}let c;if(o){let d=-1;for(c=n;c<i;c++)if(a(t,c)===a(e,d===-1?0:c-d)){if(d===-1&&(d=c),c-d+1===l)return d*s}else d!==-1&&(c-=c-d),d=-1}else for(n+l>i&&(n=i-l),c=n;c>=0;c--){let d=!0;for(let p=0;p<l;p++)if(a(t,c+p)!==a(e,p)){d=!1;break}if(d)return c}return-1}b.prototype.includes=function(e,n,r){return this.indexOf(e,n,r)!==-1};b.prototype.indexOf=function(e,n,r){return mo(this,e,n,r,!0)};b.prototype.lastIndexOf=function(e,n,r){return mo(this,e,n,r,!1)};function Zi(t,e,n,r){n=Number(n)||0;let o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;let s=e.length;r>s/2&&(r=s/2);let i;for(i=0;i<r;++i){let l=parseInt(e.substr(i*2,2),16);if(Number.isNaN(l))return i;t[n+i]=l}return i}function Wi(t,e,n,r){return Vt(In(e,t.length-n),t,n,r)}function qi(t,e,n,r){return Vt(aa(e),t,n,r)}function Ki(t,e,n,r){return Vt(wo(e),t,n,r)}function Qi(t,e,n,r){return Vt(la(e,t.length-n),t,n,r)}b.prototype.write=function(e,n,r,o){if(n===void 0)o="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")o=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let s=this.length-n;if((r===void 0||r>s)&&(r=s),e.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let i=!1;for(;;)switch(o){case"hex":return Zi(this,e,n,r);case"utf8":case"utf-8":return Wi(this,e,n,r);case"ascii":case"latin1":case"binary":return qi(this,e,n,r);case"base64":return Ki(this,e,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qi(this,e,n,r);default:if(i)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),i=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Yi(t,e,n){return e===0&&n===t.length?Sn(t):Sn(t.slice(e,n))}function _o(t,e,n){n=Math.min(t.length,n);let r=[],o=e;for(;o<n;){let s=t[o],i=null,l=s>239?4:s>223?3:s>191?2:1;if(o+l<=n){let a,c,d,p;switch(l){case 1:s<128&&(i=s);break;case 2:a=t[o+1],(a&192)===128&&(p=(s&31)<<6|a&63,p>127&&(i=p));break;case 3:a=t[o+1],c=t[o+2],(a&192)===128&&(c&192)===128&&(p=(s&15)<<12|(a&63)<<6|c&63,p>2047&&(p<55296||p>57343)&&(i=p));break;case 4:a=t[o+1],c=t[o+2],d=t[o+3],(a&192)===128&&(c&192)===128&&(d&192)===128&&(p=(s&15)<<18|(a&63)<<12|(c&63)<<6|d&63,p>65535&&p<1114112&&(i=p))}}i===null?(i=65533,l=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|i&1023),r.push(i),o+=l}return Xi(r)}var co=4096;function Xi(t){let e=t.length;if(e<=co)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=co));return n}function ea(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]&127);return r}function ta(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function na(t,e,n){let r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let o="";for(let s=e;s<n;++s)o+=ca[t[s]];return o}function ra(t,e,n){let r=t.slice(e,n),o="";for(let s=0;s<r.length-1;s+=2)o+=String.fromCharCode(r[s]+r[s+1]*256);return o}b.prototype.slice=function(e,n){let r=this.length;e=~~e,n=n===void 0?r:~~n,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<e&&(n=e);let o=this.subarray(e,n);return Object.setPrototypeOf(o,b.prototype),o};function _e(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e],s=1,i=0;for(;++i<n&&(s*=256);)o+=this[e+i]*s;return o};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e+--n],s=1;for(;n>0&&(s*=256);)o+=this[e+--n]*s;return o};b.prototype.readUint8=b.prototype.readUInt8=function(e,n){return e=e>>>0,n||_e(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||_e(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||_e(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=function(e){e=e>>>0,ct(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&Et(e,this.length-8);let o=n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+r*2**24;return BigInt(o)+(BigInt(s)<<BigInt(32))};b.prototype.readBigUInt64BE=function(e){e=e>>>0,ct(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&Et(e,this.length-8);let o=n*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r;return(BigInt(o)<<BigInt(32))+BigInt(s)};b.prototype.readIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e],s=1,i=0;for(;++i<n&&(s*=256);)o+=this[e+i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*n)),o};b.prototype.readIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=n,s=1,i=this[e+--o];for(;o>0&&(s*=256);)i+=this[e+--o]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*n)),i};b.prototype.readInt8=function(e,n){return e=e>>>0,n||_e(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,n){e=e>>>0,n||_e(e,2,this.length);let r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};b.prototype.readInt16BE=function(e,n){e=e>>>0,n||_e(e,2,this.length);let r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};b.prototype.readInt32LE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=function(e){e=e>>>0,ct(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&Et(e,this.length-8);let o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(r<<24);return(BigInt(o)<<BigInt(32))+BigInt(n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)};b.prototype.readBigInt64BE=function(e){e=e>>>0,ct(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&Et(e,this.length-8);let o=(n<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r)};b.prototype.readFloatLE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),St(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),St(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||_e(e,8,this.length),St(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||_e(e,8,this.length),St(this,e,!1,52,8)};function we(t,e,n,r,o,s){if(!b.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;we(this,e,n,r,l,0)}let s=1,i=0;for(this[n]=e&255;++i<r&&(s*=256);)this[n+i]=e/s&255;return n+r};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;we(this,e,n,r,l,0)}let s=r-1,i=1;for(this[n+s]=e&255;--s>=0&&(i*=256);)this[n+s]=e/i&255;return n+r};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,1,255,0),this[n]=e&255,n+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function go(t,e,n,r,o){Eo(e,r,o,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s;let i=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i,n}function yo(t,e,n,r,o){Eo(e,r,o,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s=s>>8,t[n+6]=s,s=s>>8,t[n+5]=s,s=s>>8,t[n+4]=s;let i=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=i,i=i>>8,t[n+2]=i,i=i>>8,t[n+1]=i,i=i>>8,t[n]=i,n+8}b.prototype.writeBigUInt64LE=function(e,n=0){return go(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};b.prototype.writeBigUInt64BE=function(e,n=0){return yo(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};b.prototype.writeIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);we(this,e,n,r,a-1,-a)}let s=0,i=1,l=0;for(this[n]=e&255;++s<r&&(i*=256);)e<0&&l===0&&this[n+s-1]!==0&&(l=1),this[n+s]=(e/i>>0)-l&255;return n+r};b.prototype.writeIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);we(this,e,n,r,a-1,-a)}let s=r-1,i=1,l=0;for(this[n+s]=e&255;--s>=0&&(i*=256);)e<0&&l===0&&this[n+s+1]!==0&&(l=1),this[n+s]=(e/i>>0)-l&255;return n+r};b.prototype.writeInt8=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};b.prototype.writeInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};b.prototype.writeInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};b.prototype.writeInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};b.prototype.writeInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||we(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};b.prototype.writeBigInt64LE=function(e,n=0){return go(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};b.prototype.writeBigInt64BE=function(e,n=0){return yo(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};function bo(t,e,n,r,o,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function vo(t,e,n,r,o){return e=+e,n=n>>>0,o||bo(t,e,n,4,34028234663852886e22,-34028234663852886e22),En(t,e,n,r,23,4),n+4}b.prototype.writeFloatLE=function(e,n,r){return vo(this,e,n,!0,r)};b.prototype.writeFloatBE=function(e,n,r){return vo(this,e,n,!1,r)};function So(t,e,n,r,o){return e=+e,n=n>>>0,o||bo(t,e,n,8,17976931348623157e292,-17976931348623157e292),En(t,e,n,r,52,8),n+8}b.prototype.writeDoubleLE=function(e,n,r){return So(this,e,n,!0,r)};b.prototype.writeDoubleBE=function(e,n,r){return So(this,e,n,!1,r)};b.prototype.copy=function(e,n,r,o){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),n>=e.length&&(n=e.length),n||(n=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-n<o-r&&(o=e.length-n+r);let s=o-r;return this===e?this.copyWithin(n,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),n),s};b.prototype.fill=function(e,n,r,o){if(typeof e=="string"){if(typeof n=="string"?(o=n,n=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!b.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){let i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);let s;if(typeof e=="number")for(s=n;s<r;++s)this[s]=e;else{let i=b.isBuffer(e)?e:b.from(e,o),l=i.length;if(l===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-n;++s)this[s+n]=i[s%l]}return this};var lt={};function xn(t,e,n){lt[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}xn("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);xn("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError);xn("ERR_OUT_OF_RANGE",function(t,e,n){let r=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=uo(String(n)):typeof n=="bigint"&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=uo(o)),o+="n"),r+=` It must be ${e}. Received ${o}`,r},RangeError);function uo(t){let e="",n=t.length,r=t[0]==="-"?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function oa(t,e,n){ct(e,"offset"),(t[e]===void 0||t[e+n]===void 0)&&Et(e,t.length-(n+1))}function Eo(t,e,n,r,o,s){if(t>n||t<e){let i=typeof e=="bigint"?"n":"",l;throw s>3?e===0||e===BigInt(0)?l=`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:l=`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:l=`>= ${e}${i} and <= ${n}${i}`,new lt.ERR_OUT_OF_RANGE("value",l,t)}oa(r,o,s)}function ct(t,e){if(typeof t!="number")throw new lt.ERR_INVALID_ARG_TYPE(e,"number",t)}function Et(t,e,n){throw Math.floor(t)!==t?(ct(t,n),new lt.ERR_OUT_OF_RANGE(n||"offset","an integer",t)):e<0?new lt.ERR_BUFFER_OUT_OF_BOUNDS:new lt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}var sa=/[^+/0-9A-Za-z-_]/g;function ia(t){if(t=t.split("=")[0],t=t.trim().replace(sa,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function In(t,e){e=e||1/0;let n,r=t.length,o=null,s=[];for(let i=0;i<r;++i){if(n=t.charCodeAt(i),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(i+1===r){(e-=3)>-1&&s.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&s.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return s}function aa(t){let e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n)&255);return e}function la(t,e){let n,r,o,s=[];for(let i=0;i<t.length&&!((e-=2)<0);++i)n=t.charCodeAt(i),r=n>>8,o=n%256,s.push(o),s.push(r);return s}function wo(t){return ao(ia(t))}function Vt(t,e,n,r){let o;for(o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}var ca=function(){let t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){let r=n*16;for(let o=0;o<16;++o)e[r+o]=t[n]+t[o]}return e}();var ln={};ji(ln,{ArtMethod:()=>Xt,ArtStackVisitor:()=>lr,DVM_JNI_ENV_OFFSET_SELF:()=>Ho,HandleVector:()=>xt,VariableSizedHandleScope:()=>Lt,backtrace:()=>wr,deoptimizeBootImage:()=>Tr,deoptimizeEverything:()=>Nr,deoptimizeMethod:()=>Ir,ensureClassInitialized:()=>Mc,getAndroidApiLevel:()=>pe,getAndroidVersion:()=>At,getApi:()=>ne,getArtApexVersion:()=>_r,getArtClassSpec:()=>yr,getArtFieldSpec:()=>sn,getArtMethodSpec:()=>Ne,getArtThreadFromEnv:()=>an,getArtThreadSpec:()=>ft,makeArtClassLoaderVisitor:()=>Er,makeArtClassVisitor:()=>Sr,makeMethodMangler:()=>kd,makeObjectVisitorPredicate:()=>Lr,revertGlobalPatches:()=>Cr,translateMethod:()=>Id,withAllArtThreadsSuspended:()=>vr,withRunnableArtThread:()=>Oe});var{pageSize:Ln,pointerSize:da}=Process,An=class{constructor(e){this.sliceSize=e,this.slicesPerPage=Ln/e,this.pages=[],this.free=[]}allocateSlice(e,n){let r=e.near===void 0,o=n===1;if(r&&o){let s=this.free.pop();if(s!==void 0)return s}else if(n<Ln){let{free:s}=this,i=s.length,l=o?null:ptr(n-1);for(let a=0;a!==i;a++){let c=s[a],d=r||this._isSliceNear(c,e),p=o||c.and(l).isNull();if(d&&p)return s.splice(a,1)[0]}}return this._allocatePage(e)}_allocatePage(e){let n=Memory.alloc(Ln,e),{sliceSize:r,slicesPerPage:o}=this;for(let s=1;s!==o;s++){let i=n.add(s*r);this.free.push(i)}return this.pages.push(n),n}_isSliceNear(e,n){let r=e.add(this.sliceSize),{near:o,maxDistance:s}=n,i=Co(o.sub(e)),l=Co(o.sub(r));return i.compare(s)<=0&&l.compare(s)<=0}freeSlice(e){this.free.push(e)}};function Co(t){let e=da===4?31:63,n=ptr(1).shl(e).not();return t.and(n)}function Mn(t){return new An(t)}function Se(t,e){if(e!==0)throw new Error(t+" failed: "+e)}var Jt={v1_0:805371904,v1_2:805372416},Gt={canTagObjects:1},{pointerSize:ua}=Process,fa={exceptions:"propagate"};function He(t,e){this.handle=t,this.vm=e,this.vtable=t.readPointer()}He.prototype.deallocate=wt(47,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});He.prototype.getLoadedClasses=wt(78,"int32",["pointer","pointer","pointer"],function(t,e,n){let r=t(this.handle,e,n);Se("EnvJvmti::getLoadedClasses",r)});He.prototype.iterateOverInstancesOfClass=wt(112,"int32",["pointer","pointer","int","pointer","pointer"],function(t,e,n,r,o){let s=t(this.handle,e,n,r,o);Se("EnvJvmti::iterateOverInstancesOfClass",s)});He.prototype.getObjectsWithTags=wt(114,"int32",["pointer","int","pointer","pointer","pointer","pointer"],function(t,e,n,r,o,s){let i=t(this.handle,e,n,r,o,s);Se("EnvJvmti::getObjectsWithTags",i)});He.prototype.addCapabilities=wt(142,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});function wt(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(this.vtable.add((t-1)*ua).readPointer(),e,n,fa));let s=[o];return s=s.concat.apply(s,arguments),r.apply(this,s)}}function $e(t,e,{limit:n}){let r=t,o=null;for(let s=0;s!==n;s++){let i=Instruction.parse(r),l=e(i,o);if(l!==null)return l;r=i.next,o=i}return null}function ve(t){let e=null,n=!1;return function(...r){return n||(e=t(...r),n=!0),e}}function E(t,e){this.handle=t,this.vm=e}var Ht=Process.pointerSize,Ke=2,pa=28,ha=34,ma=37,_a=40,ga=43,ya=46,ba=49,va=52,Sa=55,Ea=58,wa=61,Ca=64,ka=67,Ia=70,Na=73,Ta=76,xa=79,La=82,Aa=85,Ma=88,Oa=91,ja=114,Pa=117,Ra=120,Fa=123,za=126,Da=129,Ua=132,Ba=135,Va=138,Ja=141,Ga=95,Ha=96,$a=97,Za=98,Wa=99,qa=100,Ka=101,Qa=102,Ya=103,Xa=104,el=105,tl=106,nl=107,rl=108,ol=109,sl=110,il=111,al=112,ll=145,cl=146,dl=147,ul=148,fl=149,pl=150,hl=151,ml=152,_l=153,gl=154,yl=155,bl=156,vl=157,Sl=158,El=159,wl=160,Cl=161,kl=162,Il={pointer:ha,uint8:ma,int8:_a,uint16:ga,int16:ya,int32:ba,int64:va,float:Sa,double:Ea,void:wa},Nl={pointer:Ca,uint8:ka,int8:Ia,uint16:Na,int16:Ta,int32:xa,int64:La,float:Aa,double:Ma,void:Oa},Tl={pointer:ja,uint8:Pa,int8:Ra,uint16:Fa,int16:za,int32:Da,int64:Ua,float:Ba,double:Va,void:Ja},xl={pointer:Ga,uint8:Ha,int8:$a,uint16:Za,int16:Wa,int32:qa,int64:Ka,float:Qa,double:Ya},Ll={pointer:Xa,uint8:el,int8:tl,uint16:nl,int16:rl,int32:ol,int64:sl,float:il,double:al},Al={pointer:ll,uint8:cl,int8:dl,uint16:ul,int16:fl,int32:pl,int64:hl,float:ml,double:_l},Ml={pointer:gl,uint8:yl,int8:bl,uint16:vl,int16:Sl,int32:El,int64:wl,float:Cl,double:kl},Io={exceptions:"propagate"},On=null,Gn=[];E.dispose=function(t){Gn.forEach(t.deleteGlobalRef,t),Gn=[]};function Xe(t){return Gn.push(t),t}function $t(t){return On===null&&(On=t.handle.readPointer()),On}function z(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction($t(this).add(t*Ht).readPointer(),e,n,Io));let s=[o];return s=s.concat.apply(s,arguments),r.apply(this,s)}}E.prototype.getVersion=z(4,"int32",["pointer"],function(t){return t(this.handle)});E.prototype.findClass=z(6,"pointer",["pointer","pointer"],function(t,e){let n=t(this.handle,Memory.allocUtf8String(e));return this.throwIfExceptionPending(),n});E.prototype.throwIfExceptionPending=function(){let t=this.exceptionOccurred();if(t.isNull())return;this.exceptionClear();let e=this.newGlobalRef(t);this.deleteLocalRef(t);let n=this.vaMethod("pointer",[])(this.handle,e,this.javaLangObject().toString),r=this.stringFromJni(n);this.deleteLocalRef(n);let o=new Error(r);throw o.$h=e,Script.bindWeak(o,Ol(this.vm,e)),o};function Ol(t,e){return function(){t.perform(n=>{n.deleteGlobalRef(e)})}}E.prototype.fromReflectedMethod=z(7,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.fromReflectedField=z(8,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.toReflectedMethod=z(9,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.getSuperclass=z(10,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.isAssignableFrom=z(11,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});E.prototype.toReflectedField=z(12,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.throw=z(13,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.exceptionOccurred=z(15,"pointer",["pointer"],function(t){return t(this.handle)});E.prototype.exceptionDescribe=z(16,"void",["pointer"],function(t){t(this.handle)});E.prototype.exceptionClear=z(17,"void",["pointer"],function(t){t(this.handle)});E.prototype.pushLocalFrame=z(19,"int32",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.popLocalFrame=z(20,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.newGlobalRef=z(21,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.deleteGlobalRef=z(22,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});E.prototype.deleteLocalRef=z(23,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});E.prototype.isSameObject=z(24,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});E.prototype.newLocalRef=z(25,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.allocObject=z(27,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getObjectClass=z(31,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.isInstanceOf=z(32,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});E.prototype.getMethodId=z(33,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getFieldId=z(94,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getIntField=z(100,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});E.prototype.getStaticMethodId=z(113,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getStaticFieldId=z(144,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});E.prototype.getStaticIntField=z(150,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});E.prototype.getStringLength=z(164,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getStringChars=z(165,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.releaseStringChars=z(166,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});E.prototype.newStringUtf=z(167,"pointer",["pointer","pointer"],function(t,e){let n=Memory.allocUtf8String(e);return t(this.handle,n)});E.prototype.getStringUtfChars=z(169,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.releaseStringUtfChars=z(170,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});E.prototype.getArrayLength=z(171,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.newObjectArray=z(172,"pointer",["pointer","int32","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.getObjectArrayElement=z(173,"pointer",["pointer","pointer","int32"],function(t,e,n){return t(this.handle,e,n)});E.prototype.setObjectArrayElement=z(174,"void",["pointer","pointer","int32","pointer"],function(t,e,n,r){t(this.handle,e,n,r)});E.prototype.newBooleanArray=z(175,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newByteArray=z(176,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newCharArray=z(177,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newShortArray=z(178,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newIntArray=z(179,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newLongArray=z(180,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newFloatArray=z(181,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.newDoubleArray=z(182,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});E.prototype.getBooleanArrayElements=z(183,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getByteArrayElements=z(184,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getCharArrayElements=z(185,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getShortArrayElements=z(186,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getIntArrayElements=z(187,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getLongArrayElements=z(188,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getFloatArrayElements=z(189,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.getDoubleArrayElements=z(190,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});E.prototype.releaseBooleanArrayElements=z(191,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.releaseByteArrayElements=z(192,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.releaseCharArrayElements=z(193,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.releaseShortArrayElements=z(194,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.releaseIntArrayElements=z(195,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.releaseLongArrayElements=z(196,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.releaseFloatArrayElements=z(197,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.releaseDoubleArrayElements=z(198,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Ke)});E.prototype.getByteArrayRegion=z(200,"void",["pointer","pointer","int","int","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setBooleanArrayRegion=z(207,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setByteArrayRegion=z(208,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setCharArrayRegion=z(209,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setShortArrayRegion=z(210,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setIntArrayRegion=z(211,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setLongArrayRegion=z(212,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setFloatArrayRegion=z(213,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.setDoubleArrayRegion=z(214,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});E.prototype.registerNatives=z(215,"int32",["pointer","pointer","pointer","int32"],function(t,e,n,r){return t(this.handle,e,n,r)});E.prototype.monitorEnter=z(217,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.monitorExit=z(218,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getDirectBufferAddress=z(230,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});E.prototype.getObjectRefType=z(232,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});var ko=new Map;function Zt(t,e,n,r){return $n(this,"p",Pl,t,e,n,r)}function Hn(t,e,n,r){return $n(this,"v",Rl,t,e,n,r)}function jl(t,e,n,r){return $n(this,"n",Fl,t,e,n,r)}function $n(t,e,n,r,o,s,i){if(i!==void 0)return n(t,r,o,s,i);let l=[r,e,o].concat(s).join("|"),a=ko.get(l);return a===void 0&&(a=n(t,r,o,s,Io),ko.set(l,a)),a}function Pl(t,e,n,r,o){return new NativeFunction($t(t).add(e*Ht).readPointer(),n,["pointer","pointer","pointer"].concat(r),o)}function Rl(t,e,n,r,o){return new NativeFunction($t(t).add(e*Ht).readPointer(),n,["pointer","pointer","pointer","..."].concat(r),o)}function Fl(t,e,n,r,o){return new NativeFunction($t(t).add(e*Ht).readPointer(),n,["pointer","pointer","pointer","pointer","..."].concat(r),o)}E.prototype.constructor=function(t,e){return Hn.call(this,pa,"pointer",t,e)};E.prototype.vaMethod=function(t,e,n){let r=Il[t];if(r===void 0)throw new Error("Unsupported type: "+t);return Hn.call(this,r,t,e,n)};E.prototype.nonvirtualVaMethod=function(t,e,n){let r=Nl[t];if(r===void 0)throw new Error("Unsupported type: "+t);return jl.call(this,r,t,e,n)};E.prototype.staticVaMethod=function(t,e,n){let r=Tl[t];if(r===void 0)throw new Error("Unsupported type: "+t);return Hn.call(this,r,t,e,n)};E.prototype.getField=function(t){let e=xl[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Zt.call(this,e,t,[])};E.prototype.getStaticField=function(t){let e=Al[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Zt.call(this,e,t,[])};E.prototype.setField=function(t){let e=Ll[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Zt.call(this,e,"void",[t])};E.prototype.setStaticField=function(t){let e=Ml[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Zt.call(this,e,"void",[t])};var jn=null;E.prototype.javaLangClass=function(){if(jn===null){let t=this.findClass("java/lang/Class");try{let e=this.getMethodId.bind(this,t);jn={handle:Xe(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getSimpleName:e("getSimpleName","()Ljava/lang/String;"),getGenericSuperclass:e("getGenericSuperclass","()Ljava/lang/reflect/Type;"),getDeclaredConstructors:e("getDeclaredConstructors","()[Ljava/lang/reflect/Constructor;"),getDeclaredMethods:e("getDeclaredMethods","()[Ljava/lang/reflect/Method;"),getDeclaredFields:e("getDeclaredFields","()[Ljava/lang/reflect/Field;"),isArray:e("isArray","()Z"),isPrimitive:e("isPrimitive","()Z"),isInterface:e("isInterface","()Z"),getComponentType:e("getComponentType","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return jn};var Pn=null;E.prototype.javaLangObject=function(){if(Pn===null){let t=this.findClass("java/lang/Object");try{let e=this.getMethodId.bind(this,t);Pn={handle:Xe(this.newGlobalRef(t)),toString:e("toString","()Ljava/lang/String;"),getClass:e("getClass","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return Pn};var Rn=null;E.prototype.javaLangReflectConstructor=function(){if(Rn===null){let t=this.findClass("java/lang/reflect/Constructor");try{Rn={getGenericParameterTypes:this.getMethodId(t,"getGenericParameterTypes","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Rn};var Fn=null;E.prototype.javaLangReflectMethod=function(){if(Fn===null){let t=this.findClass("java/lang/reflect/Method");try{let e=this.getMethodId.bind(this,t);Fn={getName:e("getName","()Ljava/lang/String;"),getGenericParameterTypes:e("getGenericParameterTypes","()[Ljava/lang/reflect/Type;"),getParameterTypes:e("getParameterTypes","()[Ljava/lang/Class;"),getGenericReturnType:e("getGenericReturnType","()Ljava/lang/reflect/Type;"),getGenericExceptionTypes:e("getGenericExceptionTypes","()[Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),isVarArgs:e("isVarArgs","()Z")}}finally{this.deleteLocalRef(t)}}return Fn};var zn=null;E.prototype.javaLangReflectField=function(){if(zn===null){let t=this.findClass("java/lang/reflect/Field");try{let e=this.getMethodId.bind(this,t);zn={getName:e("getName","()Ljava/lang/String;"),getType:e("getType","()Ljava/lang/Class;"),getGenericType:e("getGenericType","()Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),toString:e("toString","()Ljava/lang/String;")}}finally{this.deleteLocalRef(t)}}return zn};var Dn=null;E.prototype.javaLangReflectTypeVariable=function(){if(Dn===null){let t=this.findClass("java/lang/reflect/TypeVariable");try{let e=this.getMethodId.bind(this,t);Dn={handle:Xe(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getBounds:e("getBounds","()[Ljava/lang/reflect/Type;"),getGenericDeclaration:e("getGenericDeclaration","()Ljava/lang/reflect/GenericDeclaration;")}}finally{this.deleteLocalRef(t)}}return Dn};var Un=null;E.prototype.javaLangReflectWildcardType=function(){if(Un===null){let t=this.findClass("java/lang/reflect/WildcardType");try{let e=this.getMethodId.bind(this,t);Un={handle:Xe(this.newGlobalRef(t)),getLowerBounds:e("getLowerBounds","()[Ljava/lang/reflect/Type;"),getUpperBounds:e("getUpperBounds","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Un};var Bn=null;E.prototype.javaLangReflectGenericArrayType=function(){if(Bn===null){let t=this.findClass("java/lang/reflect/GenericArrayType");try{Bn={handle:Xe(this.newGlobalRef(t)),getGenericComponentType:this.getMethodId(t,"getGenericComponentType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Bn};var Vn=null;E.prototype.javaLangReflectParameterizedType=function(){if(Vn===null){let t=this.findClass("java/lang/reflect/ParameterizedType");try{let e=this.getMethodId.bind(this,t);Vn={handle:Xe(this.newGlobalRef(t)),getActualTypeArguments:e("getActualTypeArguments","()[Ljava/lang/reflect/Type;"),getRawType:e("getRawType","()Ljava/lang/reflect/Type;"),getOwnerType:e("getOwnerType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Vn};var Jn=null;E.prototype.javaLangString=function(){if(Jn===null){let t=this.findClass("java/lang/String");try{Jn={handle:Xe(this.newGlobalRef(t))}}finally{this.deleteLocalRef(t)}}return Jn};E.prototype.getClassName=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangClass().getName);try{return this.stringFromJni(e)}finally{this.deleteLocalRef(e)}};E.prototype.getObjectClassName=function(t){let e=this.getObjectClass(t);try{return this.getClassName(e)}finally{this.deleteLocalRef(e)}};E.prototype.getActualTypeArgument=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangReflectParameterizedType().getActualTypeArguments);if(this.throwIfExceptionPending(),!e.isNull())try{return this.getTypeNameFromFirstTypeElement(e)}finally{this.deleteLocalRef(e)}};E.prototype.getTypeNameFromFirstTypeElement=function(t){if(this.getArrayLength(t)>0){let n=this.getObjectArrayElement(t,0);try{return this.getTypeName(n)}finally{this.deleteLocalRef(n)}}else return"java.lang.Object"};E.prototype.getTypeName=function(t,e){let n=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle))return this.getArrayTypeName(t);if(this.isInstanceOf(t,this.javaLangReflectParameterizedType().handle)){let r=n(this.handle,t,this.javaLangReflectParameterizedType().getRawType);this.throwIfExceptionPending();let o;try{o=this.getTypeName(r)}finally{this.deleteLocalRef(r)}return e&&(o+="<"+this.getActualTypeArgument(t)+">"),o}else return this.isInstanceOf(t,this.javaLangReflectTypeVariable().handle)||this.isInstanceOf(t,this.javaLangReflectWildcardType().handle),"java.lang.Object"};E.prototype.getArrayTypeName=function(t){let e=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle)){let n=e(this.handle,t,this.javaLangReflectGenericArrayType().getGenericComponentType);this.throwIfExceptionPending();try{return"[L"+this.getTypeName(n)+";"}finally{this.deleteLocalRef(n)}}else return"[Ljava.lang.Object;"};E.prototype.stringFromJni=function(t){let e=this.getStringChars(t);if(e.isNull())throw new Error("Unable to access string");try{let n=this.getStringLength(t);return e.readUtf16String(n)}finally{this.releaseStringChars(t,e)}};var No=65542,dt=Process.pointerSize,Zn=Process.getCurrentThreadId(),et=new Map,Ct=new Map;function De(t){let e=t.vm,n=null,r=null,o=null;function s(){let l=e.readPointer(),a={exceptions:"propagate"};n=new NativeFunction(l.add(4*dt).readPointer(),"int32",["pointer","pointer","pointer"],a),r=new NativeFunction(l.add(5*dt).readPointer(),"int32",["pointer"],a),o=new NativeFunction(l.add(6*dt).readPointer(),"int32",["pointer","pointer","int32"],a)}this.handle=e,this.perform=function(l){let a=Process.getCurrentThreadId(),c=i(a);if(c!==null)return l(c);let d=this._tryGetEnv(),p=d!==null;p||(d=this.attachCurrentThread(),et.set(a,!0)),this.link(a,d);try{return l(d)}finally{let h=a===Zn;if(h||this.unlink(a),!p&&!h){let u=et.get(a);et.delete(a),u&&this.detachCurrentThread()}}},this.attachCurrentThread=function(){let l=Memory.alloc(dt);return Se("VM::AttachCurrentThread",n(e,l,NULL)),new E(l.readPointer(),this)},this.detachCurrentThread=function(){Se("VM::DetachCurrentThread",r(e))},this.preventDetachDueToClassLoader=function(){let l=Process.getCurrentThreadId();et.has(l)&&et.set(l,!1)},this.getEnv=function(){let l=i(Process.getCurrentThreadId());if(l!==null)return l;let a=Memory.alloc(dt),c=o(e,a,No);if(c===-2)throw new Error("Current thread is not attached to the Java VM; please move this code inside a Java.perform() callback");return Se("VM::GetEnv",c),new E(a.readPointer(),this)},this.tryGetEnv=function(){let l=i(Process.getCurrentThreadId());return l!==null?l:this._tryGetEnv()},this._tryGetEnv=function(){let l=this.tryGetEnvHandle(No);return l===null?null:new E(l,this)},this.tryGetEnvHandle=function(l){let a=Memory.alloc(dt);return o(e,a,l)!==0?null:a.readPointer()},this.makeHandleDestructor=function(l){return()=>{this.perform(a=>{a.deleteGlobalRef(l)})}},this.link=function(l,a){let c=Ct.get(l);c===void 0?Ct.set(l,[a,1]):c[1]++},this.unlink=function(l){let a=Ct.get(l);a[1]===1?Ct.delete(l):a[1]--};function i(l){let a=Ct.get(l);return a===void 0?null:a[0]}s.call(this)}De.dispose=function(t){et.get(Zn)===!0&&(et.delete(Zn),t.detachCurrentThread())};var zl=4,I=Process.pointerSize,{readU32:Dl,readPointer:Ul,writeU32:Bl,writePointer:Vl}=NativePointer.prototype,Jl=1,Gl=8,Hl=16,Qt=256,$l=524288,Zl=2097152,Go=1073741824,Wl=524288,ql=134217728,To=1048576,Kl=2097152,Ql=268435456,Yl=268435456,Xl=0,or=3,sr=5,mr=ptr(1).not(),ec=2147467263,tc=4294963200,on=17*I,nc=18*I,Ho=12,rc=112,oc=116,sc=0,qn=56,xo=4,ic=8,ac=10,lc=12,cc=14,dc=28,uc=36,fc=0,pc=1,hc=2,mc=3,_c=4,gc=5,yc=6,bc=7,Lo=2147483648,vc=28,Tt=3*I,Sc=3*I,Ec=1,wc=1,$o=ve(jc),Cc=ve(Zc),Ne=ve(qc),ft=ve(Kc),kc=ve(Qc),Ic=ve(id),At=ve(td),Zo=ve(nd),pe=ve(rd),_r=ve(od),Nc=ve(dd),Tc=Process.arch==="ia32"?Kd:qd,ue={exceptions:"propagate"},kt={},Kn=null,Qn=null,Wo=null,he=null,gr=[],Yt=new Map,qo=[],Yn=null,Ao=0,Mo=!1,Oo=!1,It=null,xc=[],Xn=null,Wt=null;function ne(){return Kn===null&&(Kn=Lc()),Kn}function Lc(){let t=Process.enumerateModules().filter(u=>/^lib(art|dvm).so$/.test(u.name)).filter(u=>!/\/system\/fake-libs/.test(u.path));if(t.length===0)return null;let e=t[0],n=e.name.indexOf("art")!==-1?"art":"dalvik",r=n==="art",o={module:e,find(u){let{module:g}=this,_=g.findExportByName(u);return _===null&&(_=g.findSymbolByName(u)),_},flavor:n,addLocalReference:null};o.isApiLevel34OrApexEquivalent=r&&(o.find("_ZN3art7AppInfo29GetPrimaryApkReferenceProfileEv")!==null||o.find("_ZN3art6Thread15RunFlipFunctionEPS0_")!==null);let s=r?{functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],artInterpreterToCompiledCodeBridge:function(u){this.artInterpreterToCompiledCodeBridge=u},_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art17ReaderWriterMutex13ExclusiveLockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveLock","void",["pointer","pointer"]],_ZN3art17ReaderWriterMutex15ExclusiveUnlockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveUnlock","void",["pointer","pointer"]],_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ue)},_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ue)},_ZN3art9JavaVMExt12DecodeGlobalEPv:function(u){let g;pe()>=26?g=Tc(u,["pointer","pointer"]):g=new NativeFunction(u,"pointer",["pointer","pointer"],ue),this["art::JavaVMExt::DecodeGlobal"]=function(_,y,v){return g(_,v)}},_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv:["art::JavaVMExt::DecodeGlobal","pointer",["pointer","pointer","pointer"]],_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZNK3art6Thread13DecodeJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZN3art10ThreadList10SuspendAllEPKcb:["art::ThreadList::SuspendAll","void",["pointer","pointer","bool"]],_ZN3art10ThreadList10SuspendAllEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ue);this["art::ThreadList::SuspendAll"]=function(_,y,v){return g(_)}},_ZN3art10ThreadList9ResumeAllEv:["art::ThreadList::ResumeAll","void",["pointer"]],_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE:["art::ClassLinker::VisitClasses","void",["pointer","pointer"]],_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer"],ue);this["art::ClassLinker::VisitClasses"]=function(_,y){g(_,y,NULL)}},_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE:["art::ClassLinker::VisitClassLoaders","void",["pointer","pointer"]],_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_:["art::gc::Heap::VisitObjects","void",["pointer","pointer","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:["art::gc::Heap::GetInstances","void",["pointer","pointer","pointer","int","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer","bool","int","pointer"],ue);this["art::gc::Heap::GetInstances"]=function(_,y,v,S,C){g(_,y,v,0,S,C)}},_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","uint","bool"]],_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","size_t","bool"]],_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb:["art::StackVisitor::WalkStack","void",["pointer","bool"]],_ZNK3art12StackVisitor9GetMethodEv:["art::StackVisitor::GetMethod","pointer",["pointer"]],_ZNK3art12StackVisitor16DescribeLocationEv:function(u){this["art::StackVisitor::DescribeLocation"]=Kt(u,["pointer"])},_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv:function(u){this["art::StackVisitor::GetCurrentQuickFrameInfo"]=cd(u)},_ZN3art7Context6CreateEv:["art::Context::Create","pointer",[]],_ZN3art6Thread18GetLongJumpContextEv:["art::Thread::GetLongJumpContext","pointer",["pointer"]],_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE:function(u){this["art::mirror::Class::GetDescriptor"]=u},_ZN3art6mirror5Class11GetLocationEv:function(u){this["art::mirror::Class::GetLocation"]=Kt(u,["pointer"])},_ZN3art9ArtMethod12PrettyMethodEb:function(u){this["art::ArtMethod::PrettyMethod"]=Kt(u,["pointer","bool"])},_ZN3art12PrettyMethodEPNS_9ArtMethodEb:function(u){this["art::ArtMethod::PrettyMethodNullSafe"]=Kt(u,["pointer","bool"])},_ZN3art6Thread14CurrentFromGdbEv:["art::Thread::CurrentFromGdb","pointer",[]],_ZN3art6mirror6Object5CloneEPNS_6ThreadE:function(u){this["art::mirror::Object::Clone"]=new NativeFunction(u,"pointer",["pointer","pointer"],ue)},_ZN3art6mirror6Object5CloneEPNS_6ThreadEm:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","pointer"],ue);this["art::mirror::Object::Clone"]=function(_,y){let v=NULL;return g(_,y,v)}},_ZN3art6mirror6Object5CloneEPNS_6ThreadEj:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","uint"],ue);this["art::mirror::Object::Clone"]=function(_,y){return g(_,y,0)}},_ZN3art3Dbg14SetJdwpAllowedEb:["art::Dbg::SetJdwpAllowed","void",["bool"]],_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE:["art::Dbg::ConfigureJdwp","void",["pointer"]],_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv:["art::InternalDebuggerControlCallback::StartDebugger","void",["pointer"]],_ZN3art3Dbg9StartJdwpEv:["art::Dbg::StartJdwp","void",[]],_ZN3art3Dbg8GoActiveEv:["art::Dbg::GoActive","void",[]],_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE:["art::Dbg::RequestDeoptimization","void",["pointer"]],_ZN3art3Dbg20ManageDeoptimizationEv:["art::Dbg::ManageDeoptimization","void",[]],_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv:["art::Instrumentation::EnableDeoptimization","void",["pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc:["art::Instrumentation::DeoptimizeEverything","void",["pointer","pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ue);this["art::Instrumentation::DeoptimizeEverything"]=function(_,y){g(_)}},_ZN3art7Runtime19DeoptimizeBootImageEv:["art::Runtime::DeoptimizeBootImage","void",["pointer"]],_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE:["art::Instrumentation::Deoptimize","void",["pointer","pointer"]],_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID:["art::jni::JniIdManager::DecodeMethodId","pointer",["pointer","pointer"]],_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID:["art::jni::JniIdManager::DecodeFieldId","pointer",["pointer","pointer"]],_ZN3art11interpreter18GetNterpEntryPointEv:["art::interpreter::GetNterpEntryPoint","pointer",[]],_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi:["art::Monitor::TranslateLocation","void",["pointer","uint32","pointer","pointer"]]},variables:{_ZN3art3Dbg9gRegistryE:function(u){this.isJdwpStarted=()=>!u.readPointer().isNull()},_ZN3art3Dbg15gDebuggerActiveE:function(u){this.isDebuggerActive=()=>!!u.readU8()}},optionals:new Set(["artInterpreterToCompiledCodeBridge","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE","_ZN3art9JavaVMExt12DecodeGlobalEPv","_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv","_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject","_ZNK3art6Thread13DecodeJObjectEP8_jobject","_ZN3art10ThreadList10SuspendAllEPKcb","_ZN3art10ThreadList10SuspendAllEv","_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE","_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_","_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE","_ZN3art6mirror6Object5CloneEPNS_6ThreadE","_ZN3art6mirror6Object5CloneEPNS_6ThreadEm","_ZN3art6mirror6Object5CloneEPNS_6ThreadEj","_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE","_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb","_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb","_ZNK3art12StackVisitor9GetMethodEv","_ZNK3art12StackVisitor16DescribeLocationEv","_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv","_ZN3art7Context6CreateEv","_ZN3art6Thread18GetLongJumpContextEv","_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE","_ZN3art6mirror5Class11GetLocationEv","_ZN3art9ArtMethod12PrettyMethodEb","_ZN3art12PrettyMethodEPNS_9ArtMethodEb","_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE","_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv","_ZN3art3Dbg15gDebuggerActiveE","_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv","_ZN3art7Runtime19DeoptimizeBootImageEv","_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE","_ZN3art3Dbg9StartJdwpEv","_ZN3art3Dbg8GoActiveEv","_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE","_ZN3art3Dbg20ManageDeoptimizationEv","_ZN3art3Dbg9gRegistryE","_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID","_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID","_ZN3art11interpreter18GetNterpEntryPointEv","_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi"])}:{functions:{_Z20dvmDecodeIndirectRefP6ThreadP8_jobject:["dvmDecodeIndirectRef","pointer",["pointer","pointer"]],_Z15dvmUseJNIBridgeP6MethodPv:["dvmUseJNIBridge","void",["pointer","pointer"]],_Z20dvmHeapSourceGetBasev:["dvmHeapSourceGetBase","pointer",[]],_Z21dvmHeapSourceGetLimitv:["dvmHeapSourceGetLimit","pointer",[]],_Z16dvmIsValidObjectPK6Object:["dvmIsValidObject","uint8",["pointer"]],JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]]},variables:{gDvmJni:function(u){this.gDvmJni=u},gDvm:function(u){this.gDvm=u}}},{functions:i={},variables:l={},optionals:a=new Set}=s,c=[];for(let[u,g]of Object.entries(i)){let _=o.find(u);_!==null?typeof g=="function"?g.call(o,_):o[g[0]]=new NativeFunction(_,g[1],g[2],ue):a.has(u)||c.push(u)}for(let[u,g]of Object.entries(l)){let _=o.find(u);_!==null?g.call(o,_):a.has(u)||c.push(u)}if(c.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+c.join(", "));let d=Memory.alloc(I),p=Memory.alloc(zl);if(Se("JNI_GetCreatedJavaVMs",o.JNI_GetCreatedJavaVMs(d,1,p)),p.readInt()===0)return null;if(o.vm=d.readPointer(),r){let u=pe(),g;u>=27?g=33554432:u>=24?g=16777216:g=0,o.kAccCompileDontBother=g;let _=o.vm.add(I).readPointer();o.artRuntime=_;let y=$o(o),v=y.offset,S=v.instrumentation;o.artInstrumentation=S!==null?_.add(S):null,_r()>=36e7&&o.artInstrumentation!=null&&(o.artInstrumentation=o.artInstrumentation.readPointer()),o.artHeap=_.add(v.heap).readPointer(),o.artThreadList=_.add(v.threadList).readPointer();let x=_.add(v.classLinker).readPointer(),A=Wc(_,y).offset,F=x.add(A.quickResolutionTrampoline).readPointer(),O=x.add(A.quickImtConflictTrampoline).readPointer(),P=x.add(A.quickGenericJniTrampoline).readPointer(),k=x.add(A.quickToInterpreterBridgeTrampoline).readPointer();o.artClassLinker={address:x,quickResolutionTrampoline:F,quickImtConflictTrampoline:O,quickGenericJniTrampoline:P,quickToInterpreterBridgeTrampoline:k};let M=new De(o);o.artQuickGenericJniTrampoline=er(P,M),o.artQuickToInterpreterBridge=er(k,M),o.artQuickResolutionTrampoline=er(F,M),o["art::JavaVMExt::AddGlobalRef"]===void 0&&(o["art::JavaVMExt::AddGlobalRef"]=Jd(o)),o["art::JavaVMExt::DecodeGlobal"]===void 0&&(o["art::JavaVMExt::DecodeGlobal"]=Gd(o)),o["art::ArtMethod::PrettyMethod"]===void 0&&(o["art::ArtMethod::PrettyMethod"]=o["art::ArtMethod::PrettyMethodNullSafe"]),o["art::interpreter::GetNterpEntryPoint"]!==void 0?o.artNterpEntryPoint=o["art::interpreter::GetNterpEntryPoint"]():o.artNterpEntryPoint=o.find("ExecuteNterpImpl"),he=pd(o,M),Wd(o);let D=null;Object.defineProperty(o,"jvmti",{get(){return D===null&&(D=[Ac(M,this.artRuntime)]),D[0]}})}let h=e.enumerateImports().filter(u=>u.name.indexOf("_Z")===0).reduce((u,g)=>(u[g.name]=g.address,u),{});return o.$new=new NativeFunction(h._Znwm||h._Znwj,"pointer",["ulong"],ue),o.$delete=new NativeFunction(h._ZdlPv,"void",["pointer"],ue),Wo=r?ur:fr,o}function Ac(t,e){let n=null;return t.perform(()=>{let r=ne().find("_ZN3art7Runtime18EnsurePluginLoadedEPKcPNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE");if(r===null)return;let o=new NativeFunction(r,"bool",["pointer","pointer","pointer"]),s=Memory.alloc(I);if(!o(e,Memory.allocUtf8String("libopenjdkjvmti.so"),s))return;let l=Jt.v1_2|1073741824,a=t.tryGetEnvHandle(l);if(a===null)return;n=new He(a,t);let c=Memory.alloc(8);c.writeU64(Gt.canTagObjects),n.addCapabilities(c)!==0&&(n=null)}),n}function Mc(t,e){ne().flavor==="art"&&t.getClassName(e)}function Oc(t){return{offset:I===4?{globalsLock:32,globals:72}:{globalsLock:64,globals:112}}}function jc(t){let e=t.vm,n=t.artRuntime,r=I===4?200:384,o=r+100*I,s=pe(),i=Zo(),{isApiLevel34OrApexEquivalent:l}=t,a=null;for(let d=r;d!==o;d+=I)if(n.add(d).readPointer().equals(e)){let h,u=null;s>=33||i==="Tiramisu"||l?(h=[d-4*I],u=d-I):s>=30||i==="R"?(h=[d-3*I,d-4*I],u=d-I):s>=29?h=[d-2*I]:s>=27?h=[d-Tt-3*I]:h=[d-Tt-2*I];for(let g of h){let _=g-I,y=_-I,v;l?v=y-9*I:s>=24?v=y-8*I:s>=23?v=y-7*I:v=y-4*I;let S={offset:{heap:v,threadList:y,internTable:_,classLinker:g,jniIdManager:u}};if(Ko(n,S)!==null){a=S;break}}break}if(a===null)throw new Error("Unable to determine Runtime field offsets");let c=_r()>=36e7;return a.offset.instrumentation=c?Uc(t):Rc(t),a.offset.jniIdsIndirection=Gc(t),a}var Pc={ia32:jo,x64:jo,arm:Fc,arm64:zc};function Rc(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:$e(e,Pc[Process.arch],{limit:30})}function jo(t){if(t.mnemonic!=="lea")return null;let e=t.operands[1].value.disp;return e<256||e>1024?null:e}function Fc(t){if(t.mnemonic!=="add.w")return null;let e=t.operands;if(e.length!==3)return null;let n=e[2];return n.type!=="imm"?null:n.value}function zc(t){if(t.mnemonic!=="add")return null;let e=t.operands;if(e.length!==3||e[0].value==="sp"||e[1].value==="sp")return null;let n=e[2];if(n.type!=="imm")return null;let r=n.value.valueOf();return r<256||r>1024?null:r}var Dc={ia32:Po,x64:Po,arm:Bc,arm64:Vc};function Uc(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:$e(e,Dc[Process.arch],{limit:30})}function Po(t){if(t.mnemonic!=="mov")return null;let e=t.operands;if(e[0].value!=="rax")return null;let r=e[1];if(r.type!=="mem")return null;let o=r.value;if(o.base!=="rdi")return null;let s=o.disp;return s<256||s>1024?null:s}function Bc(t){return null}function Vc(t){if(t.mnemonic!=="ldr")return null;let e=t.operands;if(e[0].value==="x0")return null;let n=e[1].value;if(n.base!=="x0")return null;let r=n.disp;return r<256||r>1024?null:r}var Jc={ia32:Ro,x64:Ro,arm:Hc,arm64:$c};function Gc(t){let e=t.find("_ZN3art7Runtime12SetJniIdTypeENS_9JniIdTypeE");if(e===null)return null;let n=$e(e,Jc[Process.arch],{limit:20});if(n===null)throw new Error("Unable to determine Runtime.jni_ids_indirection_ offset");return n}function Ro(t){return t.mnemonic==="cmp"?t.operands[0].value.disp:null}function Hc(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function $c(t,e){if(e===null)return null;let{mnemonic:n}=t,{mnemonic:r}=e;return n==="cmp"&&r==="ldr"||n==="bl"&&r==="str"?e.operands[1].value.disp:null}function Zc(){let e={"4-21":136,"4-22":136,"4-23":172,"4-24":196,"4-25":196,"4-26":196,"4-27":196,"4-28":212,"4-29":172,"4-30":180,"4-31":180,"8-21":224,"8-22":224,"8-23":296,"8-24":344,"8-25":344,"8-26":352,"8-27":352,"8-28":392,"8-29":328,"8-30":336,"8-31":336}[`${I}-${pe()}`];if(e===void 0)throw new Error("Unable to determine Instrumentation field offsets");return{offset:{forcedInterpretOnly:4,deoptimizationEnabled:e}}}function Wc(t,e){let n=Ko(t,e);if(n===null)throw new Error("Unable to determine ClassLinker field offsets");return n}function Ko(t,e){if(Qn!==null)return Qn;let{classLinker:n,internTable:r}=e.offset,o=t.add(n).readPointer(),s=t.add(r).readPointer(),i=I===4?100:200,l=i+100*I,a=pe(),c=null;for(let d=i;d!==l;d+=I)if(o.add(d).readPointer().equals(s)){let h;a>=30||Zo()==="R"?h=6:a>=29?h=4:a>=23?h=3:h=5;let u=d+h*I,g;a>=23?g=u-2*I:g=u-3*I,c={offset:{quickResolutionTrampoline:g,quickImtConflictTrampoline:u-I,quickGenericJniTrampoline:u,quickToInterpreterBridgeTrampoline:u+I}};break}return c!==null&&(Qn=c),c}function yr(t){let n=null;return t.perform(r=>{let o=sn(t),s=Ne(t),i={artArrayLengthSize:4,artArrayEntrySize:o.size,artArrayMax:50},l={artArrayLengthSize:I,artArrayEntrySize:s.size,artArrayMax:100},a=(h,u,g)=>{let _=h.add(u).readPointer();if(_.isNull())return null;let y=g===4?_.readU32():_.readU64().valueOf();return y<=0?null:{length:y,data:_.add(g)}},c=(h,u,g,_)=>{try{let y=a(h,u,_.artArrayLengthSize);if(y===null)return!1;let v=Math.min(y.length,_.artArrayMax);for(let S=0;S!==v;S++)if(y.data.add(S*_.artArrayEntrySize).equals(g))return!0}catch{}return!1},d=r.findClass("java/lang/Thread"),p=r.newGlobalRef(d);try{let h;Oe(t,r,P=>{h=ne()["art::JavaVMExt::DecodeGlobal"](t,P,p)});let u=Do(r.getFieldId(p,"name","Ljava/lang/String;")),g=Do(r.getStaticFieldId(p,"MAX_PRIORITY","I")),_=-1,y=-1;for(let P=0;P!==256;P+=4)_===-1&&c(h,P,g,i)&&(_=P),y===-1&&c(h,P,u,i)&&(y=P);if(y===-1||_===-1)throw new Error("Unable to find fields in java/lang/Thread; please file a bug");let v=y!==_?_:0,S=y,C=-1,x=kr(r.getMethodId(p,"getName","()Ljava/lang/String;"));for(let P=0;P!==256;P+=4)C===-1&&c(h,P,x,l)&&(C=P);if(C===-1)throw new Error("Unable to find methods in java/lang/Thread; please file a bug");let A=-1,O=a(h,C,l.artArrayLengthSize).length;for(let P=C;P!==256;P+=4)if(h.add(P).readU16()===O){A=P;break}if(A===-1)throw new Error("Unable to find copied methods in java/lang/Thread; please file a bug");n={offset:{ifields:S,methods:C,sfields:v,copiedMethodsOffset:A}}}finally{r.deleteLocalRef(d),r.deleteGlobalRef(p)}}),n}function qc(t){let e=ne(),n;return t.perform(r=>{let o=r.findClass("android/os/Process"),s=kr(r.getStaticMethodId(o,"getElapsedCpuTime","()J"));r.deleteLocalRef(o);let i=Process.getModuleByName("libandroid_runtime.so"),l=i.base,a=l.add(i.size),c=pe(),d=c<=21?8:I,p=Jl|Gl|Hl|Qt,h=~(Go|Ql|Kl)>>>0,u=null,g=null,_=2;for(let S=0;S!==64&&_!==0;S+=4){let C=s.add(S);if(u===null){let x=C.readPointer();x.compare(l)>=0&&x.compare(a)<0&&(u=S,_--)}g===null&&(C.readU32()&h)===p&&(g=S,_--)}if(_!==0)throw new Error("Unable to determine ArtMethod field offsets");let y=u+d;n={size:c<=21?y+32:y+I,offset:{jniCode:u,quickCode:y,accessFlags:g}},"artInterpreterToCompiledCodeBridge"in e&&(n.offset.interpreterCode=u-d)}),n}function sn(t){let e=pe();return e>=23?{size:16,offset:{accessFlags:4}}:e>=21?{size:24,offset:{accessFlags:12}}:null}function Kc(t){let e=pe(),n;return t.perform(r=>{let o=an(r),s=r.handle,i=null,l=null,a=null,c=null,d=null,p=null;for(let h=144;h!==256;h+=I)if(o.add(h).readPointer().equals(s)){l=h-6*I,d=h-4*I,p=h+2*I,e<=22&&(l-=I,i=l-I-9*8-3*4,a=h+6*I,d-=I,p-=I),c=h+9*I,e<=22&&(c+=2*I+4,I===8&&(c+=4)),e>=23&&(c+=I);break}if(c===null)throw new Error("Unable to determine ArtThread field offsets");n={offset:{isExceptionReportedToInstrumentation:i,exception:l,throwLocation:a,topHandleScope:c,managedStack:d,self:p}}}),n}function Qc(){return pe()>=23?{offset:{topQuickFrame:0,link:I}}:{offset:{topQuickFrame:2*I,link:0}}}var Yc={ia32:Fo,x64:Fo,arm:Xc,arm64:ed};function er(t,e){let n;return e.perform(r=>{let o=an(r),s=Yc[Process.arch],i=Instruction.parse(t),l=s(i);l!==null?n=o.add(l).readPointer():n=t}),n}function Fo(t){return t.mnemonic==="jmp"?t.operands[0].value.disp:null}function Xc(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function ed(t){return t.mnemonic==="ldr"?t.operands[1].value.disp:null}function an(t){return t.handle.add(I).readPointer()}function td(){return br("ro.build.version.release")}function nd(){return br("ro.build.version.codename")}function rd(){return parseInt(br("ro.build.version.sdk"),10)}function od(){try{let t=File.readAllText("/proc/self/mountinfo"),e=null,n=new Map;for(let o of t.trimEnd().split(`
`)){let s=o.split(" "),i=s[4];if(!i.startsWith("/apex/com.android.art"))continue;let l=s[10];i.includes("@")?n.set(l,i.split("@")[1]):e=l}let r=n.get(e);return r!==void 0?parseInt(r):zo()}catch{return zo()}}function zo(){return pe()*1e7}var tr=null,sd=92;function br(t){tr===null&&(tr=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("__system_property_get"),"int",["pointer","pointer"],ue));let e=Memory.alloc(sd);return tr(Memory.allocUtf8String(t),e),e.readUtf8String()}function Oe(t,e,n){let r=Ic(t,e),o=an(e).toString();if(kt[o]=n,r(e.handle),kt[o]!==void 0)throw delete kt[o],new Error("Unable to perform state transition; please file a bug")}function id(t,e){let n=new NativeCallback(ad,"void",["pointer"]);return Xo(t,e,n)}function ad(t){let e=t.toString(),n=kt[e];delete kt[e],n(t)}function vr(t){let e=ne(),n=e.artThreadList;e["art::ThreadList::SuspendAll"](n,Memory.allocUtf8String("frida"),!1?1:0);try{t()}finally{e["art::ThreadList::ResumeAll"](n)}}var ir=class{constructor(e){let n=Memory.alloc(4*I),r=n.add(I);n.writePointer(r);let o=new NativeCallback((s,i)=>e(i)===!0?1:0,"bool",["pointer","pointer"]);r.add(2*I).writePointer(o),this.handle=n,this._onVisit=o}};function Sr(t){return ne()["art::ClassLinker::VisitClasses"]instanceof NativeFunction?new ir(t):new NativeCallback(n=>t(n)===!0?1:0,"bool",["pointer","pointer"])}var ar=class{constructor(e){let n=Memory.alloc(4*I),r=n.add(I);n.writePointer(r);let o=new NativeCallback((s,i)=>{e(i)},"void",["pointer","pointer"]);r.add(2*I).writePointer(o),this.handle=n,this._onVisit=o}};function Er(t){return new ar(t)}var ld={"include-inlined-frames":0,"skip-inlined-frames":1},lr=class{constructor(e,n,r,o=0,s=!0){let i=ne(),l=512,a=3*I,c=Memory.alloc(l+a);i["art::StackVisitor::StackVisitor"](c,e,n,ld[r],o,s?1:0);let d=c.add(l);c.writePointer(d);let p=new NativeCallback(this._visitFrame.bind(this),"bool",["pointer"]);d.add(2*I).writePointer(p),this.handle=c,this._onVisitFrame=p;let h=c.add(I===4?12:24);this._curShadowFrame=h,this._curQuickFrame=h.add(I),this._curQuickFramePc=h.add(2*I),this._curOatQuickMethodHeader=h.add(3*I),this._getMethodImpl=i["art::StackVisitor::GetMethod"],this._descLocImpl=i["art::StackVisitor::DescribeLocation"],this._getCQFIImpl=i["art::StackVisitor::GetCurrentQuickFrameInfo"]}walkStack(e=!1){ne()["art::StackVisitor::WalkStack"](this.handle,e?1:0)}_visitFrame(){return this.visitFrame()?1:0}visitFrame(){throw new Error("Subclass must implement visitFrame")}getMethod(){let e=this._getMethodImpl(this.handle);return e.isNull()?null:new Xt(e)}getCurrentQuickFramePc(){return this._curQuickFramePc.readPointer()}getCurrentQuickFrame(){return this._curQuickFrame.readPointer()}getCurrentShadowFrame(){return this._curShadowFrame.readPointer()}describeLocation(){let e=new nn;return this._descLocImpl(e,this.handle),e.disposeToString()}getCurrentOatQuickMethodHeader(){return this._curOatQuickMethodHeader.readPointer()}getCurrentQuickFrameInfo(){return this._getCQFIImpl(this.handle)}},Xt=class{constructor(e){this.handle=e}prettyMethod(e=!0){let n=new nn;return ne()["art::ArtMethod::PrettyMethod"](n,this.handle,e?1:0),n.disposeToString()}toString(){return`ArtMethod(handle=${this.handle})`}};function cd(t){return function(e){let n=Memory.alloc(12);return Nc(t)(n,e),{frameSizeInBytes:n.readU32(),coreSpillMask:n.add(4).readU32(),fpSpillMask:n.add(8).readU32()}}}function dd(t){let e=NULL;switch(Process.arch){case"ia32":e=ut(32,n=>{n.putMovRegRegOffsetPtr("ecx","esp",4),n.putMovRegRegOffsetPtr("edx","esp",8),n.putCallAddressWithArguments(t,["ecx","edx"]),n.putMovRegReg("esp","ebp"),n.putPopReg("ebp"),n.putRet()});break;case"x64":e=ut(32,n=>{n.putPushReg("rdi"),n.putCallAddressWithArguments(t,["rsi"]),n.putPopReg("rdi"),n.putMovRegPtrReg("rdi","rax"),n.putMovRegOffsetPtrReg("rdi",8,"edx"),n.putRet()});break;case"arm":e=ut(16,n=>{n.putCallAddressWithArguments(t,["r0","r1"]),n.putPopRegs(["r0","lr"]),n.putMovRegReg("pc","lr")});break;case"arm64":e=ut(64,n=>{n.putPushRegReg("x0","lr"),n.putCallAddressWithArguments(t,["x1"]),n.putPopRegReg("x2","lr"),n.putStrRegRegOffset("x0","x2",0),n.putStrRegRegOffset("w1","x2",8),n.putRet()});break}return new NativeFunction(e,"void",["pointer","pointer"],ue)}var ud={ia32:globalThis.X86Relocator,x64:globalThis.X86Relocator,arm:globalThis.ThumbRelocator,arm64:globalThis.Arm64Relocator},cr={ia32:globalThis.X86Writer,x64:globalThis.X86Writer,arm:globalThis.ThumbWriter,arm64:globalThis.Arm64Writer};function ut(t,e){Yn===null&&(Yn=Memory.alloc(Process.pageSize));let n=Yn.add(Ao),r=Process.arch,o=cr[r];return Memory.patchCode(n,t,s=>{let i=new o(s,{pc:n});if(e(i),i.flush(),i.offset>t)throw new Error(`Wrote ${i.offset}, exceeding maximum of ${t}`)}),Ao+=t,r==="arm"?n.or(1):n}function fd(t,e){hd(e),bd(e)}function pd(t,e){let n=ft(e).offset,r=kc().offset,o=`
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
`,s=8,i=I,l=I,a=I,d=Memory.alloc(s+i+l+a),p=d.add(s),h=p.add(i),u=h.add(l),g=t.find(I===4?"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEj":"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEm"),_=new CModule(o,{lock:d,methods:p,replacements:h,last_seen_art_method:u,get_oat_quick_method_header_impl:g??ptr("0xdeadbeef")}),y={exceptions:"propagate",scheduling:"exclusive"};return{handle:_,replacedMethods:{isReplacement:new NativeFunction(_.is_replacement_method,"bool",["pointer"],y),get:new NativeFunction(_.get_replacement_method,"pointer",["pointer"],y),set:new NativeFunction(_.set_replacement_method,"void",["pointer","pointer"],y),synchronize:new NativeFunction(_.synchronize_replacement_methods,"void",["uint","pointer","pointer"],y),delete:new NativeFunction(_.delete_replacement_method,"void",["pointer"],y),translate:new NativeFunction(_.translate_method,"pointer",["pointer"],y),findReplacementFromQuickCode:_.find_replacement_method_from_quick_code},getOatQuickMethodHeaderImpl:g,hooks:{Interpreter:{doCall:_.on_interpreter_do_call},ArtMethod:{getOatQuickMethodHeader:_.on_art_method_get_oat_quick_method_header,prettyMethod:_.on_art_method_pretty_method},Gc:{copyingPhase:{onLeave:_.on_leave_gc_concurrent_copying_copying_phase},runFlip:{onEnter:_.on_leave_gc_concurrent_copying_copying_phase}}}}}function hd(t){Oo||(Oo=!0,md(t),_d(),gd(),yd())}function md(t){let e=ne();[e.artQuickGenericJniTrampoline,e.artQuickToInterpreterBridge,e.artQuickResolutionTrampoline].forEach(r=>{Memory.protect(r,32,"rwx");let o=new tn(r);o.activate(t),qo.push(o)})}function _d(){let t=ne(),e=pe(),{isApiLevel34OrApexEquivalent:n}=t,r;if(e<=22)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_6mirror9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(e<=33&&!n)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(n)r=/^_ZN3art11interpreter6DoCallILb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtbPNS_6JValueE$/;else throw new Error("Unable to find method invocation in ART; please file a bug");let o=t.module,s=[...o.enumerateExports(),...o.enumerateSymbols()].filter(i=>r.test(i.name));if(s.length===0)throw new Error("Unable to find method invocation in ART; please file a bug");for(let i of s)Interceptor.attach(i.address,he.hooks.Interpreter.doCall)}function gd(){let t=ne(),n=t.module.findSymbolByName("_ZN3art2gc4Heap22CollectGarbageInternalENS0_9collector6GcTypeENS0_7GcCauseEbj");if(n===null)return;let{artNterpEntryPoint:r,artQuickToInterpreterBridge:o}=t,s=Ne(t.vm).offset.quickCode;Interceptor.attach(n,{onLeave(){he.replacedMethods.synchronize(s,r,o)}})}function yd(){let t=[["_ZN3art11ClassLinker26VisiblyInitializedCallback22MarkVisiblyInitializedEPNS_6ThreadE","e90340f8 : ff0ff0ff"],["_ZN3art11ClassLinker26VisiblyInitializedCallback29AdjustThreadVisibilityCounterEPNS_6ThreadEl","7f0f00f9 : 1ffcffff"]],e=ne(),n=e.module;for(let[r,o]of t){let s=n.findSymbolByName(r);if(s===null)continue;let i=Memory.scanSync(s,8192,o);if(i.length===0)return;let{artNterpEntryPoint:l,artQuickToInterpreterBridge:a}=e,c=Ne(e.vm).offset.quickCode;Interceptor.attach(i[0].address,function(){he.replacedMethods.synchronize(c,l,a)});return}}function bd(t){if(Mo)return;if(Mo=!0,!Sd()){let{getOatQuickMethodHeaderImpl:s}=he;if(s===null)return;try{Interceptor.replace(s,he.hooks.ArtMethod.getOatQuickMethodHeader)}catch{}}let e=pe(),n=null,r=ne();e>28?n=r.find("_ZN3art2gc9collector17ConcurrentCopying12CopyingPhaseEv"):e>22&&(n=r.find("_ZN3art2gc9collector17ConcurrentCopying12MarkingPhaseEv")),n!==null&&Interceptor.attach(n,he.hooks.Gc.copyingPhase);let o=null;o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_"),o===null&&(o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_b")),o!==null&&Interceptor.attach(o,he.hooks.Gc.runFlip)}var vd={arm:{signatures:[{pattern:["b0 68","01 30","0c d0","1b 98",":","c0 ff","c0 ff","00 ff","00 2f"],validateMatch:nr},{pattern:["d8 f8 08 00","01 30","0c d0","1b 98",":","f0 ff ff 0f","ff ff","00 ff","00 2f"],validateMatch:nr},{pattern:["b0 68","01 30","40 f0 c3 80","00 25",":","c0 ff","c0 ff","c0 fb 00 d0","ff f8"],validateMatch:nr}],instrument:wd},arm64:{signatures:[{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","88 39 00 f0",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 00 00 9f"],offset:1,validateMatch:rr},{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","00 0e 40 f9",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 fc ff ff"],offset:1,validateMatch:rr},{pattern:["0a 40 b9","1f 05 00 31","01 34 00 54","e0 03 1f aa",":","fc ff ff","1f fc ff ff","1f 00 00 ff","e0 ff ff ff"],offset:1,validateMatch:rr}],instrument:Cd}};function nr({address:t,size:e}){let n=Instruction.parse(t.or(1)),[r,o]=n.operands,s=o.value.base,i=r.value,l=Instruction.parse(n.next.add(2)),a=ptr(l.operands[0].value),c=l.address.add(l.size),d,p;return l.mnemonic==="beq"?(d=c,p=a):(d=a,p=c),$e(d.or(1),h,{limit:3});function h(u){let{mnemonic:g}=u;if(!(g==="ldr"||g==="ldr.w"))return null;let{base:_,disp:y}=u.operands[1].value;return _===s&&y===20?{methodReg:s,scratchReg:i,target:{whenTrue:a,whenRegularMethod:d,whenRuntimeMethod:p}}:null}}function rr({address:t,size:e}){let[n,r]=Instruction.parse(t).operands,o=r.value.base,s="x"+n.value.substring(1),i=Instruction.parse(t.add(8)),l=ptr(i.operands[0].value),a=t.add(12),c,d;return i.mnemonic==="b.eq"?(c=a,d=l):(c=l,d=a),$e(c,p,{limit:3});function p(h){if(h.mnemonic!=="ldr")return null;let{base:u,disp:g}=h.operands[1].value;return u===o&&g===24?{methodReg:o,scratchReg:s,target:{whenTrue:l,whenRegularMethod:c,whenRuntimeMethod:d}}:null}}function Sd(){if(pe()<31)return!1;let t=vd[Process.arch];if(t===void 0)return!1;let e=t.signatures.map(({pattern:r,offset:o=0,validateMatch:s=Ed})=>({pattern:new MatchPattern(r.join("")),offset:o,validateMatch:s})),n=[];for(let{base:r,size:o}of ne().module.enumerateRanges("--x"))for(let{pattern:s,offset:i,validateMatch:l}of e){let a=Memory.scanSync(r,o,s).map(({address:c,size:d})=>({address:c.sub(i),size:d+i})).filter(c=>{let d=l(c);return d===null?!1:(c.validationResult=d,!0)});n.push(...a)}return n.length===0?!1:(n.forEach(t.instrument),!0)}function Ed(){return{}}var en=class{constructor(e,n,r){this.address=e,this.size=n,this.originalCode=e.readByteArray(n),this.trampoline=r}revert(){Memory.patchCode(this.address,this.size,e=>{e.writeByteArray(this.originalCode)})}};function wd({address:t,size:e,validationResult:n}){let{methodReg:r,target:o}=n,s=Memory.alloc(Process.pageSize),i=e;Memory.patchCode(s,256,l=>{let a=new ThumbWriter(l,{pc:s}),c=new ThumbRelocator(t,a);for(let g=0;g!==2;g++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=[45,237,16,10];a.putBytes(d);let p=["r0","r1","r2","r3"];a.putPushRegs(p),a.putCallAddressWithArguments(he.replacedMethods.isReplacement,[r]),a.putCmpRegImm("r0",0),a.putPopRegs(p);let h=[189,236,16,10];a.putBytes(h),a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let u=c.input.address.equals(o.whenRegularMethod);for(a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne();i<10;){let g=c.readOne();if(g===0){i=10;break}i=g}c.writeAll(),a.putBranchAddress(t.add(i+1)),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(o.whenTrue),a.flush()}),gr.push(new en(t,i,s)),Memory.patchCode(t,i,l=>{let a=new ThumbWriter(l,{pc:t});a.putLdrRegAddress("pc",s.or(1)),a.flush()})}function Cd({address:t,size:e,validationResult:n}){let{methodReg:r,scratchReg:o,target:s}=n,i=Memory.alloc(Process.pageSize);Memory.patchCode(i,256,l=>{let a=new Arm64Writer(l,{pc:i}),c=new Arm64Relocator(t,a);for(let g=0;g!==2;g++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=["d0","d1","d2","d3","d4","d5","d6","d7","x0","x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17"],p=d.length;for(let g=0;g!==p;g+=2)a.putPushRegReg(d[g],d[g+1]);a.putCallAddressWithArguments(he.replacedMethods.isReplacement,[r]),a.putCmpRegReg("x0","xzr");for(let g=p-2;g>=0;g-=2)a.putPopRegReg(d[g],d[g+1]);a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let h=c.input,u=h.address.equals(s.whenRegularMethod);a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne(),a.putBranchAddress(h.next),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(s.whenTrue),a.flush()}),gr.push(new en(t,e,i)),Memory.patchCode(t,e,l=>{let a=new Arm64Writer(l,{pc:t});a.putLdrRegAddress(o,i),a.putBrReg(o),a.flush()})}function kd(t){return new Wo(t)}function Id(t){return he.replacedMethods.translate(t)}function wr(t,e={}){let{limit:n=16}=e,r=t.getEnv();return It===null&&(It=Nd(t,r)),It.backtrace(r,n)}function Nd(t,e){let n=ne(),r=Memory.alloc(Process.pointerSize),o=new CModule(`
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
`,{current_backtrace:Memory.alloc(Process.pointerSize),perform_art_thread_state_transition:r,art_make_context:n["art::Thread::GetLongJumpContext"]??n["art::Context::Create"],art_stack_visitor_init:n["art::StackVisitor::StackVisitor"],art_stack_visitor_walk_stack:n["art::StackVisitor::WalkStack"],art_stack_visitor_get_method:n["art::StackVisitor::GetMethod"],art_stack_visitor_describe_location:n["art::StackVisitor::DescribeLocation"],translate_method:he.replacedMethods.translate,translate_location:n["art::Monitor::TranslateLocation"],get_class_location:n["art::mirror::Class::GetLocation"],cxx_delete:n.$delete,strtoul:Process.getModuleByName("libc.so").getExportByName("strtoul")}),s=new NativeFunction(o._create,"pointer",["pointer","uint"],ue),i=new NativeFunction(o._destroy,"void",["pointer"],ue),l={exceptions:"propagate",scheduling:"exclusive"},a=new NativeFunction(o._get_id,"pointer",["pointer"],l),c=new NativeFunction(o._get_frames,"pointer",["pointer"],l),d=Xo(t,e,o._on_thread_state_transition_complete);o._performData=d,r.writePointer(d),o.backtrace=(h,u)=>{let g=s(h,u),_=new dr(g);return Script.bindWeak(_,p.bind(null,g)),_};function p(h){i(h)}return o.getId=h=>a(h).readUtf8String(),o.getFrames=h=>JSON.parse(c(h).readUtf8String()),o}var dr=class{constructor(e){this.handle=e}get id(){return It.getId(this.handle)}get frames(){return It.getFrames(this.handle)}};function Cr(){Yt.forEach(t=>{t.vtablePtr.writePointer(t.vtable),t.vtableCountPtr.writeS32(t.vtableCount)}),Yt.clear();for(let t of qo.splice(0))t.deactivate();for(let t of gr.splice(0))t.revert()}function kr(t){return Qo(t,"art::jni::JniIdManager::DecodeMethodId")}function Do(t){return Qo(t,"art::jni::JniIdManager::DecodeFieldId")}function Qo(t,e){let n=ne(),r=$o(n).offset,o=r.jniIdManager,s=r.jniIdsIndirection;if(o!==null&&s!==null){let i=n.artRuntime;if(i.add(s).readInt()!==Xl){let a=i.add(o).readPointer();return n[e](a,t)}}return t}var Td={ia32:xd,x64:Ld,arm:Ad,arm64:Md};function xd(t,e,n,r,o){let s=ft(o).offset,i=Ne(o).offset,l;return Memory.patchCode(t,128,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),p=[15,174,4,36],h=[15,174,12,36];c.putPushax(),c.putMovRegReg("ebp","esp"),c.putAndRegU32("esp",4294967280),c.putSubRegImm("esp",512),c.putBytes(p),c.putMovRegFsU32Ptr("ebx",s.self),c.putCallAddressWithAlignedArguments(he.replacedMethods.findReplacementFromQuickCode,["eax","ebx"]),c.putTestRegReg("eax","eax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("ebp",7*4,"eax"),c.putLabel("restore_registers"),c.putBytes(h),c.putMovRegReg("esp","ebp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("eax",i.quickCode),c.flush()}),l}function Ld(t,e,n,r,o){let s=ft(o).offset,i=Ne(o).offset,l;return Memory.patchCode(t,256,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),p=[15,174,4,36],h=[15,174,12,36];c.putPushax(),c.putMovRegReg("rbp","rsp"),c.putAndRegU32("rsp",4294967280),c.putSubRegImm("rsp",512),c.putBytes(p),c.putMovRegGsU32Ptr("rbx",s.self),c.putCallAddressWithAlignedArguments(he.replacedMethods.findReplacementFromQuickCode,["rdi","rbx"]),c.putTestRegReg("rax","rax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("rbp",8*8,"rax"),c.putLabel("restore_registers"),c.putBytes(h),c.putMovRegReg("rsp","rbp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("rdi",i.quickCode),c.flush()}),l}function Ad(t,e,n,r,o){let s=Ne(o).offset,i=e.and(mr),l;return Memory.patchCode(t,128,a=>{let c=new ThumbWriter(a,{pc:t}),d=new ThumbRelocator(i,c),p=[45,237,16,10],h=[189,236,16,10];c.putPushRegs(["r1","r2","r3","r5","r6","r7","r8","r10","r11","lr"]),c.putBytes(p),c.putSubRegRegImm("sp","sp",8),c.putStrRegRegOffset("r0","sp",0),c.putCallAddressWithArguments(he.replacedMethods.findReplacementFromQuickCode,["r0","r9"]),c.putCmpRegImm("r0",0),c.putBCondLabel("eq","restore_registers"),c.putStrRegRegOffset("r0","sp",0),c.putLabel("restore_registers"),c.putLdrRegRegOffset("r0","sp",0),c.putAddRegRegImm("sp","sp",8),c.putBytes(h),c.putPopRegs(["lr","r11","r10","r8","r7","r6","r5","r3","r2","r1"]),c.putBCondLabel("ne","invoke_replacement");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putLdrRegAddress("pc",e.add(l)),c.putLabel("invoke_replacement"),c.putLdrRegRegOffset("pc","r0",s.quickCode),c.flush()}),l}function Md(t,e,n,{availableScratchRegs:r},o){let s=Ne(o).offset,i;return Memory.patchCode(t,256,l=>{let a=new Arm64Writer(l,{pc:t}),c=new Arm64Relocator(e,a);a.putPushRegReg("d0","d1"),a.putPushRegReg("d2","d3"),a.putPushRegReg("d4","d5"),a.putPushRegReg("d6","d7"),a.putPushRegReg("x1","x2"),a.putPushRegReg("x3","x4"),a.putPushRegReg("x5","x6"),a.putPushRegReg("x7","x20"),a.putPushRegReg("x21","x22"),a.putPushRegReg("x23","x24"),a.putPushRegReg("x25","x26"),a.putPushRegReg("x27","x28"),a.putPushRegReg("x29","lr"),a.putSubRegRegImm("sp","sp",16),a.putStrRegRegOffset("x0","sp",0),a.putCallAddressWithArguments(he.replacedMethods.findReplacementFromQuickCode,["x0","x19"]),a.putCmpRegReg("x0","xzr"),a.putBCondLabel("eq","restore_registers"),a.putStrRegRegOffset("x0","sp",0),a.putLabel("restore_registers"),a.putLdrRegRegOffset("x0","sp",0),a.putAddRegRegImm("sp","sp",16),a.putPopRegReg("x29","lr"),a.putPopRegReg("x27","x28"),a.putPopRegReg("x25","x26"),a.putPopRegReg("x23","x24"),a.putPopRegReg("x21","x22"),a.putPopRegReg("x7","x20"),a.putPopRegReg("x5","x6"),a.putPopRegReg("x3","x4"),a.putPopRegReg("x1","x2"),a.putPopRegReg("d6","d7"),a.putPopRegReg("d4","d5"),a.putPopRegReg("d2","d3"),a.putPopRegReg("d0","d1"),a.putBCondLabel("ne","invoke_replacement");do i=c.readOne();while(i<n&&!c.eoi);if(c.writeAll(),!c.eoi){let d=Array.from(r)[0];a.putLdrRegAddress(d,e.add(i)),a.putBrReg(d)}a.putLabel("invoke_replacement"),a.putLdrRegRegOffset("x16","x0",s.quickCode),a.putBrReg("x16"),a.flush()}),i}var Od={ia32:Uo,x64:Uo,arm:jd,arm64:Pd};function Uo(t,e,n){Memory.patchCode(t,16,r=>{let o=new X86Writer(r,{pc:t});o.putJmpAddress(e),o.flush()})}function jd(t,e,n){let r=t.and(mr);Memory.patchCode(r,16,o=>{let s=new ThumbWriter(o,{pc:r});s.putLdrRegAddress("pc",e.or(1)),s.flush()})}function Pd(t,e,n){Memory.patchCode(t,16,r=>{let o=new Arm64Writer(r,{pc:t});n===16?o.putLdrRegAddress("x16",e):o.putAdrpRegAddress("x16",e),o.putBrReg("x16"),o.flush()})}var Rd={ia32:5,x64:16,arm:8,arm64:16},tn=class{constructor(e){this.quickCode=e,this.quickCodeAddress=Process.arch==="arm"?e.and(mr):e,this.redirectSize=0,this.trampoline=null,this.overwrittenPrologue=null,this.overwrittenPrologueLength=0}_canRelocateCode(e,n){let r=cr[Process.arch],o=ud[Process.arch],{quickCodeAddress:s}=this,i=new r(s),l=new o(s,i),a;if(Process.arch==="arm64"){let c=new Set(["x16","x17"]);do{let d=l.readOne(),p=new Set(c),{read:h,written:u}=l.input.regsAccessed;for(let g of[h,u])for(let _ of g){let y;_.startsWith("w")?y="x"+_.substring(1):y=_,p.delete(y)}if(p.size===0)break;a=d,c=p}while(a<e&&!l.eoi);n.availableScratchRegs=c}else do a=l.readOne();while(a<e&&!l.eoi);return a>=e}_allocateTrampoline(){Wt===null&&(Wt=Mn(I===4?128:256));let e=Rd[Process.arch],n,r,o=1,s={};if(I===4||this._canRelocateCode(e,s))n=e,r={};else{let i;Process.arch==="x64"?(n=5,i=ec):Process.arch==="arm64"&&(n=8,i=tc,o=4096),r={near:this.quickCodeAddress,maxDistance:i}}return this.redirectSize=n,this.trampoline=Wt.allocateSlice(r,o),s}_destroyTrampoline(){Wt.freeSlice(this.trampoline)}activate(e){let n=this._allocateTrampoline(),{trampoline:r,quickCode:o,redirectSize:s}=this,i=Td[Process.arch],l=i(r,o,s,n,e);this.overwrittenPrologueLength=l,this.overwrittenPrologue=Memory.dup(this.quickCodeAddress,l);let a=Od[Process.arch];a(o,r,s)}deactivate(){let{quickCodeAddress:e,overwrittenPrologueLength:n}=this,r=cr[Process.arch];Memory.patchCode(e,n,o=>{let s=new r(o,{pc:e}),{overwrittenPrologue:i}=this;s.putBytes(i.readByteArray(n)),s.flush()}),this._destroyTrampoline()}};function Fd(t){let e=ne(),{module:n,artClassLinker:r}=e;return t.equals(r.quickGenericJniTrampoline)||t.equals(r.quickToInterpreterBridgeTrampoline)||t.equals(r.quickResolutionTrampoline)||t.equals(r.quickImtConflictTrampoline)||t.compare(n.base)>=0&&t.compare(n.base.add(n.size))<0}var ur=class{constructor(e){let n=kr(e);this.methodId=n,this.originalMethod=null,this.hookedMethodId=n,this.replacementMethodId=null,this.interceptor=null}replace(e,n,r,o,s){let{kAccCompileDontBother:i,artNterpEntryPoint:l}=s;this.originalMethod=Bo(this.methodId,o);let a=this.originalMethod.accessFlags;if((a&Yl)!==0&&zd()){let u=this.originalMethod.jniCode;this.hookedMethodId=u.add(2*I).readPointer(),this.originalMethod=Bo(this.hookedMethodId,o)}let{hookedMethodId:c}=this,d=Ud(c,o);this.replacementMethodId=d,qt(d,{jniCode:e,accessFlags:(a&~(Zl|$l|To)|Qt|i)>>>0,quickCode:s.artClassLinker.quickGenericJniTrampoline,interpreterCode:s.artInterpreterToCompiledCodeBridge},o);let p=Go|ql|To;(a&Qt)===0&&(p|=Wl),qt(c,{accessFlags:(a&~p|i)>>>0},o);let h=this.originalMethod.quickCode;if(l!==null&&h.equals(l)&&qt(c,{quickCode:s.artQuickToInterpreterBridge},o),!Fd(h)){let u=new tn(h);u.activate(o),this.interceptor=u}he.replacedMethods.set(c,d),fd(c,o)}revert(e){let{hookedMethodId:n,interceptor:r}=this;qt(n,this.originalMethod,e),he.replacedMethods.delete(n),r!==null&&(r.deactivate(),this.interceptor=null)}resolveTarget(e,n,r,o){return this.hookedMethodId}};function zd(){return pe()<28}function Bo(t,e){let r=Ne(e).offset;return["jniCode","accessFlags","quickCode","interpreterCode"].reduce((o,s)=>{let i=r[s];if(i===void 0)return o;let l=t.add(i),a=s==="accessFlags"?Dl:Ul;return o[s]=a.call(l),o},{})}function qt(t,e,n){let o=Ne(n).offset;Object.keys(e).forEach(s=>{let i=o[s];if(i===void 0)return;let l=t.add(i);(s==="accessFlags"?Bl:Vl).call(l,e[s])})}var fr=class{constructor(e){this.methodId=e,this.originalMethod=null}replace(e,n,r,o,s){let{methodId:i}=this;this.originalMethod=Memory.dup(i,qn);let l=r.reduce((h,u)=>h+u.size,0);n&&l++;let a=(i.add(xo).readU32()|Qt)>>>0,c=l,d=0,p=l;i.add(xo).writeU32(a),i.add(ac).writeU16(c),i.add(lc).writeU16(d),i.add(cc).writeU16(p),i.add(uc).writeU32(Dd(i)),s.dvmUseJNIBridge(i,e)}revert(e){Memory.copy(this.methodId,this.originalMethod,qn)}resolveTarget(e,n,r,o){let s=r.handle.add(Ho).readPointer(),i;if(n)i=o.dvmDecodeIndirectRef(s,e.$h);else{let h=e.$borrowClassHandle(r);i=o.dvmDecodeIndirectRef(s,h.value),h.unref(r)}let l;n?l=i.add(sc).readPointer():l=i;let a=l.toString(16),c=Yt.get(a);if(c===void 0){let h=l.add(oc),u=l.add(rc),g=h.readPointer(),_=u.readS32(),y=_*I,v=Memory.alloc(2*y);Memory.copy(v,g,y),h.writePointer(v),c={classObject:l,vtablePtr:h,vtableCountPtr:u,vtable:g,vtableCount:_,shadowVtable:v,shadowVtableCount:_,targetMethods:new Map},Yt.set(a,c)}let d=this.methodId.toString(16),p=c.targetMethods.get(d);if(p===void 0){p=Memory.dup(this.originalMethod,qn);let h=c.shadowVtableCount++;c.shadowVtable.add(h*I).writePointer(p),p.add(ic).writeU16(h),c.vtableCountPtr.writeS32(c.shadowVtableCount),c.targetMethods.set(d,p)}return p}};function Dd(t){if(Process.arch!=="ia32")return Lo;let e=t.add(dc).readPointer().readCString();if(e===null||e.length===0||e.length>65535)return Lo;let n;switch(e[0]){case"V":n=fc;break;case"F":n=pc;break;case"D":n=hc;break;case"J":n=mc;break;case"Z":case"B":n=bc;break;case"C":n=yc;break;case"S":n=gc;break;default:n=_c;break}let r=0;for(let o=e.length-1;o>0;o--){let s=e[o];r+=s==="D"||s==="J"?2:1}return n<<vc|r}function Ud(t,e){let n=ne();if(pe()<23){let r=n["art::Thread::CurrentFromGdb"]();return n["art::mirror::Object::Clone"](t,r)}return Memory.dup(t,Ne(e).size)}function Ir(t,e,n){Yo(t,e,sr,n)}function Nr(t,e){Yo(t,e,or)}function Tr(t,e){let n=ne();if(pe()<26)throw new Error("This API is only available on Android >= 8.0");Oe(t,e,r=>{n["art::Runtime::DeoptimizeBootImage"](n.artRuntime)})}function Yo(t,e,n,r){let o=ne();if(pe()<24)throw new Error("This API is only available on Android >= 7.0");Oe(t,e,s=>{if(pe()<30){if(!o.isJdwpStarted()){let l=Bd(o);xc.push(l)}o.isDebuggerActive()||o["art::Dbg::GoActive"]();let i=Memory.alloc(8+I);switch(i.writeU32(n),n){case or:break;case sr:i.add(8).writePointer(r);break;default:throw new Error("Unsupported deoptimization kind")}o["art::Dbg::RequestDeoptimization"](i),o["art::Dbg::ManageDeoptimization"]()}else{let i=o.artInstrumentation;if(i===null)throw new Error("Unable to find Instrumentation class in ART; please file a bug");let l=o["art::Instrumentation::EnableDeoptimization"];switch(l!==void 0&&(i.add(Cc().offset.deoptimizationEnabled).readU8()||l(i)),n){case or:o["art::Instrumentation::DeoptimizeEverything"](i,Memory.allocUtf8String("frida"));break;case sr:o["art::Instrumentation::Deoptimize"](i,r);break;default:throw new Error("Unsupported deoptimization kind")}}})}var pr=class{constructor(){let e=Process.getModuleByName("libart.so"),n=e.getExportByName("_ZN3art4JDWP12JdwpAdbState6AcceptEv"),r=e.getExportByName("_ZN3art4JDWP12JdwpAdbState15ReceiveClientFdEv"),o=Vo(),s=Vo();this._controlFd=o[0],this._clientFd=s[0];let i=null;i=Interceptor.attach(n,function(l){let a=l[0];Memory.scanSync(a.add(8252),256,"00 ff ff ff ff 00")[0].address.add(1).writeS32(o[1]),i.detach()}),Interceptor.replace(r,new NativeCallback(function(l){return Interceptor.revert(r),s[1]},"int",["pointer"])),Interceptor.flush(),this._handshakeRequest=this._performHandshake()}async _performHandshake(){let e=new UnixInputStream(this._clientFd,{autoClose:!1}),n=new UnixOutputStream(this._clientFd,{autoClose:!1}),r=[74,68,87,80,45,72,97,110,100,115,104,97,107,101];try{await n.writeAll(r),await e.readAll(r.length)}catch{}}};function Bd(t){let e=new pr;t["art::Dbg::SetJdwpAllowed"](1);let n=Vd();t["art::Dbg::ConfigureJdwp"](n);let r=t["art::InternalDebuggerControlCallback::StartDebugger"];return r!==void 0?r(NULL):t["art::Dbg::StartJdwp"](),e}function Vd(){let t=pe()<28?2:3,e=0,n=t,r=!0,o=!1,s=e,i=8+Tt+2,l=Memory.alloc(i);return l.writeU32(n).add(4).writeU8(r?1:0).add(1).writeU8(o?1:0).add(1).add(Tt).writeU16(s),l}function Vo(){Xn===null&&(Xn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("socketpair"),"int",["int","int","int","pointer"]));let t=Memory.alloc(8);if(Xn(Ec,wc,0,t)===-1)throw new Error("Unable to create socketpair for JDWP");return[t.readS32(),t.add(4).readS32()]}function Jd(t){let e=Oc().offset,n=t.vm.add(e.globalsLock),r=t.vm.add(e.globals),o=t["art::IndirectReferenceTable::Add"],s=t["art::ReaderWriterMutex::ExclusiveLock"],i=t["art::ReaderWriterMutex::ExclusiveUnlock"],l=0;return function(a,c,d){s(n,c);try{return o(r,l,d)}finally{i(n,c)}}}function Gd(t){let e=t["art::Thread::DecodeJObject"];if(e===void 0)throw new Error("art::Thread::DecodeJObject is not available; please file a bug");return function(n,r,o){return e(r,o)}}var Hd={ia32:Jo,x64:Jo,arm:$d,arm64:Zd};function Xo(t,e,n){let r=ne(),o=e.handle.readPointer(),s,i=r.find("_ZN3art3JNIILb1EE14ExceptionClearEP7_JNIEnv");i!==null?s=i:s=o.add(on).readPointer();let l,a=r.find("_ZN3art3JNIILb1EE10FatalErrorEP7_JNIEnvPKc");a!==null?l=a:l=o.add(nc).readPointer();let c=Hd[Process.arch];if(c===void 0)throw new Error("Not yet implemented for "+Process.arch);let d=null,p=ft(t).offset,h=p.exception,u=new Set,g=p.isExceptionReportedToInstrumentation;g!==null&&u.add(g);let _=p.throwLocation;_!==null&&(u.add(_),u.add(_+I),u.add(_+2*I));let y=65536,v=Memory.alloc(y);return Memory.patchCode(v,y,S=>{d=c(S,v,s,l,h,u,n)}),d._code=v,d._callback=n,d}function Jo(t,e,n,r,o,s,i){let l={},a=new Set,c=[n];for(;c.length>0;){let _=c.shift();if(Object.values(l).some(({begin:A,end:F})=>_.compare(A)>=0&&_.compare(F)<0))continue;let v=_.toString(),S={begin:_},C=null,x=!1;do{if(_.equals(r)){x=!0;break}let A=Instruction.parse(_);C=A;let F=l[A.address.toString()];if(F!==void 0){delete l[F.begin.toString()],l[v]=F,F.begin=S.begin,S=null;break}let O=null;switch(A.mnemonic){case"jmp":O=ptr(A.operands[0].value),x=!0;break;case"je":case"jg":case"jle":case"jne":case"js":O=ptr(A.operands[0].value);break;case"ret":x=!0;break}O!==null&&(a.add(O.toString()),c.push(O),c.sort((P,k)=>P.compare(k))),_=A.next}while(!x);S!==null&&(S.end=C.address.add(C.size),l[v]=S)}let d=Object.keys(l).map(_=>l[_]);d.sort((_,y)=>_.begin.compare(y.begin));let p=l[n.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let h=new X86Writer(t,{pc:e}),u=!1,g=null;return d.forEach(_=>{let y=_.end.sub(_.begin).toInt32(),v=new X86Relocator(_.begin,h),S;for(;(S=v.readOne())!==0;){let C=v.input,{mnemonic:x}=C,A=C.address.toString();a.has(A)&&h.putLabel(A);let F=!0;switch(x){case"jmp":h.putJmpNearLabel(Ce(C.operands[0])),F=!1;break;case"je":case"jg":case"jle":case"jne":case"js":h.putJccNearLabel(x,Ce(C.operands[0]),"no-hint"),F=!1;break;case"mov":{let[O,P]=C.operands;if(O.type==="mem"&&P.type==="imm"){let k=O.value,M=k.disp;if(M===o&&P.value.valueOf()===0){if(g=k.base,h.putPushfx(),h.putPushax(),h.putMovRegReg("xbp","xsp"),I===4)h.putAndRegU32("esp",4294967280);else{let D=g!=="rdi"?"rdi":"rsi";h.putMovRegU64(D,uint64("0xfffffffffffffff0")),h.putAndRegReg("rsp",D)}h.putCallAddressWithAlignedArguments(i,[g]),h.putMovRegReg("xsp","xbp"),h.putPopax(),h.putPopfx(),u=!0,F=!1}else s.has(M)&&k.base===g&&(F=!1)}break}case"call":{let O=C.operands[0];O.type==="mem"&&O.value.disp===on&&(I===4?(h.putPopReg("eax"),h.putMovRegRegOffsetPtr("eax","eax",4),h.putPushReg("eax")):h.putMovRegRegOffsetPtr("rdi","rdi",8),h.putCallAddressWithArguments(i,[]),u=!0,F=!1);break}}if(F?v.writeAll():v.skipOne(),S===y)break}v.dispose()}),h.dispose(),u||xr(),new NativeFunction(e,"void",["pointer"],ue)}function $d(t,e,n,r,o,s,i){let l={},a=new Set,c=ptr(1).not(),d=[n];for(;d.length>0;){let v=d.shift();if(Object.values(l).some(({begin:M,end:D})=>v.compare(M)>=0&&v.compare(D)<0))continue;let C=v.and(c),x=C.toString(),A=v.and(1),F={begin:C},O=null,P=!1,k=0;do{if(v.equals(r)){P=!0;break}let M=Instruction.parse(v),{mnemonic:D}=M;O=M;let U=v.and(c).toString(),W=l[U];if(W!==void 0){delete l[W.begin.toString()],l[x]=W,W.begin=F.begin,F=null;break}let q=k===0,T=null;switch(D){case"b":T=ptr(M.operands[0].value),P=q;break;case"beq.w":case"beq":case"bne":case"bne.w":case"bgt":T=ptr(M.operands[0].value);break;case"cbz":case"cbnz":T=ptr(M.operands[1].value);break;case"pop.w":q&&(P=M.operands.filter(w=>w.value==="pc").length===1);break}switch(D){case"it":k=1;break;case"itt":k=2;break;case"ittt":k=3;break;case"itttt":k=4;break;default:k>0&&k--;break}T!==null&&(a.add(T.toString()),d.push(T.or(A)),d.sort((w,J)=>w.compare(J))),v=M.next}while(!P);F!==null&&(F.end=O.address.add(O.size),l[x]=F)}let p=Object.keys(l).map(v=>l[v]);p.sort((v,S)=>v.begin.compare(S.begin));let h=l[n.and(c).toString()];p.splice(p.indexOf(h),1),p.unshift(h);let u=new ThumbWriter(t,{pc:e}),g=!1,_=null,y=null;return p.forEach(v=>{let S=new ThumbRelocator(v.begin,u),C=v.begin,x=v.end,A=0;do{if(S.readOne()===0)throw new Error("Unexpected end of block");let O=S.input;C=O.address,A=O.size;let{mnemonic:P}=O,k=C.toString();a.has(k)&&u.putLabel(k);let M=!0;switch(P){case"b":u.putBLabel(Ce(O.operands[0])),M=!1;break;case"beq.w":u.putBCondLabelWide("eq",Ce(O.operands[0])),M=!1;break;case"bne.w":u.putBCondLabelWide("ne",Ce(O.operands[0])),M=!1;break;case"beq":case"bne":case"bgt":u.putBCondLabelWide(P.substr(1),Ce(O.operands[0])),M=!1;break;case"cbz":{let D=O.operands;u.putCbzRegLabel(D[0].value,Ce(D[1])),M=!1;break}case"cbnz":{let D=O.operands;u.putCbnzRegLabel(D[0].value,Ce(D[1])),M=!1;break}case"str":case"str.w":{let D=O.operands[1].value,N=D.disp;if(N===o){_=D.base;let U=_!=="r4"?"r4":"r5",W=["r0","r1","r2","r3",U,"r9","r12","lr"];u.putPushRegs(W),u.putMrsRegReg(U,"apsr-nzcvq"),u.putCallAddressWithArguments(i,[_]),u.putMsrRegReg("apsr-nzcvq",U),u.putPopRegs(W),g=!0,M=!1}else s.has(N)&&D.base===_&&(M=!1);break}case"ldr":{let[D,N]=O.operands;if(N.type==="mem"){let U=N.value;U.base[0]==="r"&&U.disp===on&&(y=D.value)}break}case"blx":O.operands[0].value===y&&(u.putLdrRegRegOffset("r0","r0",4),u.putCallAddressWithArguments(i,["r0"]),g=!0,y=null,M=!1);break}M?S.writeAll():S.skipOne()}while(!C.add(A).equals(x));S.dispose()}),u.dispose(),g||xr(),new NativeFunction(e.or(1),"void",["pointer"],ue)}function Zd(t,e,n,r,o,s,i){let l={},a=new Set,c=[n];for(;c.length>0;){let v=c.shift();if(Object.values(l).some(({begin:O,end:P})=>v.compare(O)>=0&&v.compare(P)<0))continue;let C=v.toString(),x={begin:v},A=null,F=!1;do{if(v.equals(r)){F=!0;break}let O;try{O=Instruction.parse(v)}catch(M){if(v.readU32()===0){F=!0;break}else throw M}A=O;let P=l[O.address.toString()];if(P!==void 0){delete l[P.begin.toString()],l[C]=P,P.begin=x.begin,x=null;break}let k=null;switch(O.mnemonic){case"b":k=ptr(O.operands[0].value),F=!0;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":k=ptr(O.operands[0].value);break;case"cbz":case"cbnz":k=ptr(O.operands[1].value);break;case"tbz":case"tbnz":k=ptr(O.operands[2].value);break;case"ret":F=!0;break}k!==null&&(a.add(k.toString()),c.push(k),c.sort((M,D)=>M.compare(D))),v=O.next}while(!F);x!==null&&(x.end=A.address.add(A.size),l[C]=x)}let d=Object.keys(l).map(v=>l[v]);d.sort((v,S)=>v.begin.compare(S.begin));let p=l[n.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let h=new Arm64Writer(t,{pc:e});h.putBLabel("performTransition");let u=e.add(h.offset);h.putPushAllXRegisters(),h.putCallAddressWithArguments(i,["x0"]),h.putPopAllXRegisters(),h.putRet(),h.putLabel("performTransition");let g=!1,_=null,y=null;return d.forEach(v=>{let S=v.end.sub(v.begin).toInt32(),C=new Arm64Relocator(v.begin,h),x;for(;(x=C.readOne())!==0;){let A=C.input,{mnemonic:F}=A,O=A.address.toString();a.has(O)&&h.putLabel(O);let P=!0;switch(F){case"b":h.putBLabel(Ce(A.operands[0])),P=!1;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":h.putBCondLabel(F.substr(2),Ce(A.operands[0])),P=!1;break;case"cbz":{let k=A.operands;h.putCbzRegLabel(k[0].value,Ce(k[1])),P=!1;break}case"cbnz":{let k=A.operands;h.putCbnzRegLabel(k[0].value,Ce(k[1])),P=!1;break}case"tbz":{let k=A.operands;h.putTbzRegImmLabel(k[0].value,k[1].value.valueOf(),Ce(k[2])),P=!1;break}case"tbnz":{let k=A.operands;h.putTbnzRegImmLabel(k[0].value,k[1].value.valueOf(),Ce(k[2])),P=!1;break}case"str":{let k=A.operands,M=k[0].value,D=k[1].value,N=D.disp;M==="xzr"&&N===o?(_=D.base,h.putPushRegReg("x0","lr"),h.putMovRegReg("x0",_),h.putBlImm(u),h.putPopRegReg("x0","lr"),g=!0,P=!1):s.has(N)&&D.base===_&&(P=!1);break}case"ldr":{let k=A.operands,M=k[1].value;M.base[0]==="x"&&M.disp===on&&(y=k[0].value);break}case"blr":A.operands[0].value===y&&(h.putLdrRegRegOffset("x0","x0",8),h.putCallAddressWithArguments(i,["x0"]),g=!0,y=null,P=!1);break}if(P?C.writeAll():C.skipOne(),x===S)break}C.dispose()}),h.dispose(),g||xr(),new NativeFunction(e,"void",["pointer"],ue)}function xr(){throw new Error("Unable to parse ART internals; please file a bug")}function Wd(t){let e=t["art::ArtMethod::PrettyMethod"];e!==void 0&&(Interceptor.attach(e.impl,he.hooks.ArtMethod.prettyMethod),Interceptor.flush())}function Ce(t){return ptr(t.value).toString()}function qd(t,e){return new NativeFunction(t,"pointer",e,ue)}function Kd(t,e){let n=new NativeFunction(t,"void",["pointer"].concat(e),ue);return function(){let r=Memory.alloc(I);return n(r,...arguments),r.readPointer()}}function Kt(t,e){let{arch:n}=Process;switch(n){case"ia32":case"arm64":{let r;n==="ia32"?r=ut(64,i=>{let l=1+e.length,a=l*4;i.putSubRegImm("esp",a);for(let c=0;c!==l;c++){let d=c*4;i.putMovRegRegOffsetPtr("eax","esp",a+4+d),i.putMovRegOffsetPtrReg("esp",d,"eax")}i.putCallAddress(t),i.putAddRegImm("esp",a-4),i.putRet()}):r=ut(32,i=>{i.putMovRegReg("x8","x0"),e.forEach((l,a)=>{i.putMovRegReg("x"+a,"x"+(a+1))}),i.putLdrRegAddress("x7",t),i.putBrReg("x7")});let o=new NativeFunction(r,"void",["pointer"].concat(e),ue),s=function(...i){o(...i)};return s.handle=r,s.impl=t,s}default:{let r=new NativeFunction(t,"void",["pointer"].concat(e),ue);return r.impl=t,r}}}var nn=class{constructor(){this.handle=Memory.alloc(Tt)}dispose(){let[e,n]=this._getData();n||ne().$delete(e)}disposeToString(){let e=this.toString();return this.dispose(),e}toString(){let[e]=this._getData();return e.readUtf8String()}_getData(){let e=this.handle,n=(e.readU8()&1)===0;return[n?e.add(1):e.add(2*I).readPointer(),n]}},hr=class{$delete(){this.dispose(),ne().$delete(this)}constructor(e,n){this.handle=e,this._begin=e,this._end=e.add(I),this._storage=e.add(2*I),this._elementSize=n}init(){this.begin=NULL,this.end=NULL,this.storage=NULL}dispose(){ne().$delete(this.begin)}get begin(){return this._begin.readPointer()}set begin(e){this._begin.writePointer(e)}get end(){return this._end.readPointer()}set end(e){this._end.writePointer(e)}get storage(){return this._storage.readPointer()}set storage(e){this._storage.writePointer(e)}get size(){return this.end.sub(this.begin).toInt32()/this._elementSize}},xt=class t extends hr{static $new(){let e=new t(ne().$new(Sc));return e.init(),e}constructor(e){super(e,I)}get handles(){let e=[],n=this.begin,r=this.end;for(;!n.equals(r);)e.push(n.readPointer()),n=n.add(I);return e}},Qd=0,es=I,ts=es+4,Yd=-1,rn=class t{$delete(){this.dispose(),ne().$delete(this)}constructor(e){this.handle=e,this._link=e.add(Qd),this._numberOfReferences=e.add(es)}init(e,n){this.link=e,this.numberOfReferences=n}dispose(){}get link(){return new t(this._link.readPointer())}set link(e){this._link.writePointer(e)}get numberOfReferences(){return this._numberOfReferences.readS32()}set numberOfReferences(e){this._numberOfReferences.writeS32(e)}},ns=nu(ts),rs=ns+I,Xd=rs+I,Lt=class t extends rn{static $new(e,n){let r=new t(ne().$new(Xd));return r.init(e,n),r}constructor(e){super(e),this._self=e.add(ns),this._currentScope=e.add(rs);let o=(64-I-4-4)/4;this._scopeLayout=Nt.layoutForCapacity(o),this._topHandleScopePtr=null}init(e,n){let r=e.add(ft(n).offset.topHandleScope);this._topHandleScopePtr=r,super.init(r.readPointer(),Yd),this.self=e,this.currentScope=Nt.$new(this._scopeLayout),r.writePointer(this)}dispose(){this._topHandleScopePtr.writePointer(this.link);let e;for(;(e=this.currentScope)!==null;){let n=e.link;e.$delete(),this.currentScope=n}}get self(){return this._self.readPointer()}set self(e){this._self.writePointer(e)}get currentScope(){let e=this._currentScope.readPointer();return e.isNull()?null:new Nt(e,this._scopeLayout)}set currentScope(e){this._currentScope.writePointer(e)}newHandle(e){return this.currentScope.newHandle(e)}},Nt=class t extends rn{static $new(e){let n=new t(ne().$new(e.size),e);return n.init(),n}constructor(e,n){super(e);let{offset:r}=n;this._refsStorage=e.add(r.refsStorage),this._pos=e.add(r.pos),this._layout=n}init(){super.init(NULL,this._layout.numberOfReferences),this.pos=0}get pos(){return this._pos.readU32()}set pos(e){this._pos.writeU32(e)}newHandle(e){let n=this.pos,r=this._refsStorage.add(n*4);return r.writeS32(e.toInt32()),this.pos=n+1,r}static layoutForCapacity(e){let n=ts,r=n+e*4;return{size:r+4,numberOfReferences:e,offset:{refsStorage:n,pos:r}}}},eu={arm:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let s=[26625,18947,17041,53505,19202,18200,18288,48896],i=s.length*2,l=i+4,a=l+4;return Memory.patchCode(r,a,function(c){s.forEach((d,p)=>{c.add(p*2).writeU16(d)}),c.add(i).writeS32(t),c.add(l).writePointer(o)}),r.or(1)},arm64:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let s=[3107979265,402653378,1795293247,1409286241,1476395139,3592355936,3596551104],i=s.length*4,l=i+4,a=l+8;return Memory.patchCode(r,a,function(c){s.forEach((d,p)=>{c.add(p*4).writeU32(d)}),c.add(i).writeS32(t),c.add(l).writePointer(o)}),r}};function Lr(t,e){return(eu[Process.arch]||tu)(t,e)}function tu(t,e){return new NativeCallback(n=>{n.readS32()===t&&e(n)},"void",["pointer","pointer"])}function nu(t){let e=t%I;return e!==0?t+I-e:t}var ru=4,{pointerSize:te}=Process,ou=256,su=65536,iu=131072,au=33554432,lu=67108864,cu=134217728,tt={exceptions:"propagate"},as=ve(Eu),du=ve(Cu),uu=ve(bu),Ar=null,Mr=!1,cn=new Map,Mt=new Map;function Ue(){return Ar===null&&(Ar=fu()),Ar}function fu(){let t=Process.enumerateModules().filter(a=>/jvm.(dll|dylib|so)$/.test(a.name));if(t.length===0)return null;let e=t[0],n={flavor:"jvm"},r=Process.platform==="windows"?[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]],"VMThread::execute":["VMThread::execute","void",["pointer"]],"Method::size":["Method::size","int",["int"]],"Method::set_native_function":["Method::set_native_function","void",["pointer","pointer","int"]],"Method::clear_native_function":["Method::clear_native_function","void",["pointer"]],"Method::jmethod_id":["Method::jmethod_id","pointer",["pointer"]],"ClassLoaderDataGraph::classes_do":["ClassLoaderDataGraph::classes_do","void",["pointer"]],"NMethodSweeper::sweep_code_cache":["NMethodSweeper::sweep_code_cache","void",[]],"OopMapCache::flush_obsolete_entries":["OopMapCache::flush_obsolete_entries","void",["pointer"]]},variables:{"VM_RedefineClasses::`vftable'":function(a){this.vtableRedefineClasses=a},"VM_RedefineClasses::doit":function(a){this.redefineClassesDoIt=a},"VM_RedefineClasses::doit_prologue":function(a){this.redefineClassesDoItPrologue=a},"VM_RedefineClasses::doit_epilogue":function(a){this.redefineClassesDoItEpilogue=a},"VM_RedefineClasses::allow_nested_vm_operations":function(a){this.redefineClassesAllow=a},"NMethodSweeper::_traversals":function(a){this.traversals=a},"NMethodSweeper::_should_sweep":function(a){this.shouldSweep=a}},optionals:[]}]:[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],_ZN6Method4sizeEb:["Method::size","int",["int"]],_ZN6Method19set_native_functionEPhb:["Method::set_native_function","void",["pointer","pointer","int"]],_ZN6Method21clear_native_functionEv:["Method::clear_native_function","void",["pointer"]],_ZN6Method24restore_unshareable_infoEP10JavaThread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method24restore_unshareable_infoEP6Thread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method11link_methodERK12methodHandleP10JavaThread:["Method::link_method","void",["pointer","pointer","pointer"]],_ZN6Method10jmethod_idEv:["Method::jmethod_id","pointer",["pointer"]],_ZN6Method10clear_codeEv:function(a){let c=new NativeFunction(a,"void",["pointer"],tt);this["Method::clear_code"]=function(d){c(d)}},_ZN6Method10clear_codeEb:function(a){let c=new NativeFunction(a,"void",["pointer","int"],tt),d=0;this["Method::clear_code"]=function(p){c(p,d)}},_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass:["VM_RedefineClasses::mark_dependent_code","void",["pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeEv:["VM_RedefineClasses::flush_dependent_code","void",[]],_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN19ResolvedMethodTable21adjust_method_entriesEPb:["ResolvedMethodTable::adjust_method_entries","void",["pointer"]],_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb:["MemberNameTable::adjust_method_entries","void",["pointer","pointer","pointer"]],_ZN17ConstantPoolCache21adjust_method_entriesEPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer"],tt);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,h){c(d,h)}},_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer","pointer"],tt);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,h){c(d,p,h)}},_ZN20ClassLoaderDataGraph10classes_doEP12KlassClosure:["ClassLoaderDataGraph::classes_do","void",["pointer"]],_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb:["ClassLoaderDataGraph::clean_deallocate_lists","void",["int"]],_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_:["JavaThread::thread_from_jni_environment","pointer",["pointer"]],_ZN8VMThread7executeEP12VM_Operation:["VMThread::execute","void",["pointer"]],_ZN11OopMapCache22flush_obsolete_entriesEv:["OopMapCache::flush_obsolete_entries","void",["pointer"]],_ZN14NMethodSweeper11force_sweepEv:["NMethodSweeper::force_sweep","void",[]],_ZN14NMethodSweeper16sweep_code_cacheEv:["NMethodSweeper::sweep_code_cache","void",[]],_ZN14NMethodSweeper17sweep_in_progressEv:["NMethodSweeper::sweep_in_progress","bool",[]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]]},variables:{_ZN18VM_RedefineClasses14_the_class_oopE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses10_the_classE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass:function(a){this.doKlass=a},_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass:function(a){this.doKlass=a},_ZTV18VM_RedefineClasses:function(a){this.vtableRedefineClasses=a},_ZN18VM_RedefineClasses4doitEv:function(a){this.redefineClassesDoIt=a},_ZN18VM_RedefineClasses13doit_prologueEv:function(a){this.redefineClassesDoItPrologue=a},_ZN18VM_RedefineClasses13doit_epilogueEv:function(a){this.redefineClassesDoItEpilogue=a},_ZN18VM_RedefineClassesD0Ev:function(a){this.redefineClassesDispose0=a},_ZN18VM_RedefineClassesD1Ev:function(a){this.redefineClassesDispose1=a},_ZNK18VM_RedefineClasses26allow_nested_vm_operationsEv:function(a){this.redefineClassesAllow=a},_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream:function(a){this.redefineClassesOnError=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread:function(a){this.createNewDefaultVtableIndices=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread:function(a){this.createNewDefaultVtableIndices=a},_ZN19Abstract_VM_Version19jre_release_versionEv:function(a){let d=new NativeFunction(a,"pointer",[],tt)().readCString();this.version=d.startsWith("1.8")?8:d.startsWith("9.")?9:parseInt(d.slice(0,2),10),this.versionS=d},_ZN14NMethodSweeper11_traversalsE:function(a){this.traversals=a},_ZN14NMethodSweeper21_sweep_fractions_leftE:function(a){this.fractions=a},_ZN14NMethodSweeper13_should_sweepE:function(a){this.shouldSweep=a}},optionals:["_ZN6Method24restore_unshareable_infoEP10JavaThread","_ZN6Method24restore_unshareable_infoEP6Thread","_ZN6Method11link_methodERK12methodHandleP10JavaThread","_ZN6Method10clear_codeEv","_ZN6Method10clear_codeEb","_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass","_ZN18VM_RedefineClasses20flush_dependent_codeEv","_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread","_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread","_ZN19ResolvedMethodTable21adjust_method_entriesEPb","_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb","_ZN17ConstantPoolCache21adjust_method_entriesEPb","_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb","_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb","_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_","_ZN14NMethodSweeper11force_sweepEv","_ZN14NMethodSweeper17sweep_in_progressEv","_ZN18VM_RedefineClasses14_the_class_oopE","_ZN18VM_RedefineClasses10_the_classE","_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass","_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass","_ZN18VM_RedefineClassesD0Ev","_ZN18VM_RedefineClassesD1Ev","_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread","_ZN14NMethodSweeper21_sweep_fractions_leftE"]}],o=[];if(r.forEach(function(a){let c=a.module,d=a.functions||{},p=a.variables||{},h=new Set(a.optionals||[]),u=c.enumerateExports().reduce(function(_,y){return _[y.name]=y,_},{}),g=c.enumerateSymbols().reduce(function(_,y){return _[y.name]=y,_},u);Object.keys(d).forEach(function(_){let y=g[_];if(y!==void 0){let v=d[_];typeof v=="function"?v.call(n,y.address):n[v[0]]=new NativeFunction(y.address,v[1],v[2],tt)}else h.has(_)||o.push(_)}),Object.keys(p).forEach(function(_){let y=g[_];y!==void 0?p[_].call(n,y.address):h.has(_)||o.push(_)})}),o.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+o.join(", "));let s=Memory.alloc(te),i=Memory.alloc(ru);if(Se("JNI_GetCreatedJavaVMs",n.JNI_GetCreatedJavaVMs(s,1,i)),i.readInt()===0)return null;n.vm=s.readPointer();let l=Process.platform==="windows"?{$new:["??2@YAPEAX_K@Z","pointer",["ulong"]],$delete:["??3@YAXPEAX@Z","void",["pointer"]]}:{$new:["_Znwm","pointer",["ulong"]],$delete:["_ZdlPv","void",["pointer"]]};for(let[a,[c,d,p]]of Object.entries(l)){let h=Module.findGlobalExportByName(c);if(h===null&&(h=DebugSymbol.fromName(c).address,h.isNull()))throw new Error(`unable to find C++ allocator API, missing: '${c}'`);n[a]=new NativeFunction(h,d,p,tt)}return n.jvmti=pu(n),n["JavaThread::thread_from_jni_environment"]===void 0&&(n["JavaThread::thread_from_jni_environment"]=mu(n)),n}function pu(t){let e=new De(t),n;return e.perform(()=>{let r=e.tryGetEnvHandle(Jt.v1_0);if(r===null)throw new Error("JVMTI not available");n=new He(r,e);let o=Memory.alloc(8);o.writeU64(Gt.canTagObjects);let s=n.addCapabilities(o);Se("getEnvJvmti::AddCapabilities",s)}),n}var hu={x64:_u};function mu(t){let e=null,n=hu[Process.arch];if(n!==void 0){let o=new De(t).perform(s=>s.handle.readPointer().add(6*te).readPointer());e=$e(o,n,{limit:11})}return e===null?()=>{throw new Error("Unable to make thread_from_jni_environment() helper for the current architecture")}:r=>r.add(e)}function _u(t){if(t.mnemonic!=="lea")return null;let{base:e,disp:n}=t.operands[1].value;return e==="rdi"&&n<0?n:null}function ls(t,e){}var Or=class{constructor(e){this.methodId=e,this.method=e.readPointer(),this.originalMethod=null,this.newMethod=null,this.resolved=null,this.impl=null,this.key=e.toString(16)}replace(e,n,r,o,s){let{key:i}=this,l=Mt.get(i);l!==void 0&&(Mt.delete(i),this.method=l.method,this.originalMethod=l.originalMethod,this.newMethod=l.newMethod,this.resolved=l.resolved),this.impl=e,cn.set(i,this),os(o)}revert(e){let{key:n}=this;cn.delete(n),Mt.set(n,this),os(e)}resolveTarget(e,n,r,o){let{resolved:s,originalMethod:i,methodId:l}=this;if(s!==null)return s;if(i===null)return l;i.oldMethod.vtableIndexPtr.writeS32(-2);let c=Memory.alloc(te);return c.writePointer(this.method),this.resolved=c,c}};function os(t){Mr||(Mr=!0,Script.nextTick(gu,t))}function gu(t){let e=new Map(cn),n=new Map(Mt);cn.clear(),Mt.clear(),Mr=!1,t.perform(r=>{let o=Ue(),s=o["JavaThread::thread_from_jni_environment"](r.handle),i=!1;cs(()=>{e.forEach(l=>{let{method:a,originalMethod:c,impl:d,methodId:p,newMethod:h}=l;c===null?(l.originalMethod=us(a),l.newMethod=vu(a,d,s),ss(l.newMethod,p,s)):o["Method::set_native_function"](h.method,d,0)}),n.forEach(l=>{let{originalMethod:a,methodId:c,newMethod:d}=l;if(a!==null){Su(a);let p=a.oldMethod;p.oldMethod=d,ss(p,c,s),i=!0}})}),i&&yu(r.handle)})}function yu(t){let{fractions:e,shouldSweep:n,traversals:r,"NMethodSweeper::sweep_code_cache":o,"NMethodSweeper::sweep_in_progress":s,"NMethodSweeper::force_sweep":i,JVM_Sleep:l}=Ue();if(i!==void 0)Thread.sleep(.05),i(),Thread.sleep(.05),i();else{let a=r.readS64(),c=a+2;for(;c>a;)e.writeS32(1),l(t,NULL,50),s()||cs(()=>{Thread.sleep(.05)}),n.readU8()===0&&(e.writeS32(1),o()),a=r.readS64()}}function cs(t,e,n){let{execute:r,vtable:o,vtableSize:s,doItOffset:i,prologueOffset:l,epilogueOffset:a}=uu(),c=Memory.dup(o,s),d=Memory.alloc(te*25);d.writePointer(c);let p=new NativeCallback(t,"void",["pointer"]);c.add(i).writePointer(p);let h=null;e!==void 0&&(h=new NativeCallback(e,"int",["pointer"]),c.add(l).writePointer(h));let u=null;n!==void 0&&(u=new NativeCallback(n,"void",["pointer"]),c.add(a).writePointer(u)),r(d)}function bu(){let{vtableRedefineClasses:t,redefineClassesDoIt:e,redefineClassesDoItPrologue:n,redefineClassesDoItEpilogue:r,redefineClassesOnError:o,redefineClassesAllow:s,redefineClassesDispose0:i,redefineClassesDispose1:l,"VMThread::execute":a}=Ue(),c=t.add(2*te),d=15*te,p=Memory.dup(c,d),h=new NativeCallback(()=>{},"void",["pointer"]),u,g,_;for(let y=0;y!==d;y+=te){let v=p.add(y),S=v.readPointer();o!==void 0&&S.equals(o)||i!==void 0&&S.equals(i)||l!==void 0&&S.equals(l)?v.writePointer(h):S.equals(e)?u=y:S.equals(n)?(g=y,v.writePointer(s)):S.equals(r)&&(_=y,v.writePointer(h))}return{execute:a,emptyCallback:h,vtable:p,vtableSize:d,doItOffset:u,prologueOffset:g,epilogueOffset:_}}function ds(t){return new Or(t)}function ss(t,e,n){let{method:r,oldMethod:o}=t,s=Ue();t.methodsArray.add(t.methodIndex*te).writePointer(r),t.vtableIndex>=0&&t.vtable.add(t.vtableIndex*te).writePointer(r),e.writePointer(r),o.accessFlagsPtr.writeU32((o.accessFlags|su|iu)>>>0);let i=s["OopMapCache::flush_obsolete_entries"];if(i!==void 0){let{oopMapCache:g}=t;g.isNull()||i(g)}let l=s["VM_RedefineClasses::mark_dependent_code"],a=s["VM_RedefineClasses::flush_dependent_code"];l!==void 0?(l(NULL,t.instanceKlass),a()):a(NULL,t.instanceKlass,n);let c=Memory.alloc(1);c.writeU8(1),s["ConstantPoolCache::adjust_method_entries"](t.cache,t.instanceKlass,c);let d=Memory.alloc(3*te),p=Memory.alloc(te);p.writePointer(s.doKlass),d.writePointer(p),d.add(te).writePointer(n),d.add(2*te).writePointer(n),s.redefineClass!==void 0&&s.redefineClass.writePointer(t.instanceKlass),s["ClassLoaderDataGraph::classes_do"](d);let h=s["ResolvedMethodTable::adjust_method_entries"];if(h!==void 0)h(c);else{let{memberNames:g}=t;if(!g.isNull()){let _=s["MemberNameTable::adjust_method_entries"];_!==void 0&&_(g,t.instanceKlass,c)}}let u=s["ClassLoaderDataGraph::clean_deallocate_lists"];u!==void 0&&u(0)}function vu(t,e,n){let r=Ue(),o=us(t);o.constPtr.writePointer(o.const);let s=(o.accessFlags|ou|au|lu|cu)>>>0;if(o.accessFlagsPtr.writeU32(s),o.signatureHandler.writePointer(NULL),o.adapter.writePointer(NULL),o.i2iEntry.writePointer(NULL),r["Method::clear_code"](o.method),o.dataPtr.writePointer(NULL),o.countersPtr.writePointer(NULL),o.stackmapPtr.writePointer(NULL),r["Method::clear_native_function"](o.method),r["Method::set_native_function"](o.method,e,0),r["Method::restore_unshareable_info"](o.method,n),r.version>=17){let i=Memory.alloc(2*te);i.writePointer(o.method),i.add(te).writePointer(n),r["Method::link_method"](o.method,i,n)}return o}function us(t){let e=as(),n=t.add(e.method.constMethodOffset).readPointer(),r=n.add(e.constMethod.sizeOffset).readS32()*te,o=Memory.alloc(r+e.method.size);Memory.copy(o,n,r);let s=o.add(r);Memory.copy(s,t,e.method.size);let i=is(s,o,r),l=is(t,n,r);return i.oldMethod=l,i}function is(t,e,n){let r=Ue(),o=as(),s=t.add(o.method.constMethodOffset),i=t.add(o.method.methodDataOffset),l=t.add(o.method.methodCountersOffset),a=t.add(o.method.accessFlagsOffset),c=a.readU32(),d=o.getAdapterPointer(t,e),p=t.add(o.method.i2iEntryOffset),h=t.add(o.method.signatureHandlerOffset),u=e.add(o.constMethod.constantPoolOffset).readPointer(),g=e.add(o.constMethod.stackmapDataOffset),_=u.add(o.constantPool.instanceKlassOffset).readPointer(),y=u.add(o.constantPool.cacheOffset).readPointer(),v=du(),S=_.add(v.methodsOffset).readPointer(),C=S.readS32(),x=S.add(te),A=e.add(o.constMethod.methodIdnumOffset).readU16(),F=t.add(o.method.vtableIndexOffset),O=F.readS32(),P=_.add(v.vtableOffset),k=_.add(v.oopMapCacheOffset).readPointer(),M=r.version>=10?_.add(v.memberNamesOffset).readPointer():NULL;return{method:t,methodSize:o.method.size,const:e,constSize:n,constPtr:s,dataPtr:i,countersPtr:l,stackmapPtr:g,instanceKlass:_,methodsArray:x,methodsCount:C,methodIndex:A,vtableIndex:O,vtableIndexPtr:F,vtable:P,accessFlags:c,accessFlagsPtr:a,adapter:d,i2iEntry:p,signatureHandler:h,memberNames:M,cache:y,oopMapCache:k}}function Su(t){let{oldMethod:e}=t;e.accessFlagsPtr.writeU32(e.accessFlags),e.vtableIndexPtr.writeS32(e.vtableIndex)}function Eu(){let t=Ue(),{version:e}=t,n;e>=17?n="method:early":e>=9&&e<=16?n="const-method":n="method:late";let o=t["Method::size"](1)*te,s=te,i=2*te,l=3*te,a=4*te,c=n==="method:early"?te:0,d=a+c,p=d+4,h=p+4+8,u=h+te,g=c!==0?a:u,_=o-2*te,y=o-te,v=8,S=v+te,C=S+te,x=n==="const-method"?te:0,A=C+x,F=A+14,O=2*te,P=3*te;return{getAdapterPointer:x!==0?function(M,D){return D.add(C)}:function(M,D){return M.add(g)},method:{size:o,constMethodOffset:s,methodDataOffset:i,methodCountersOffset:l,accessFlagsOffset:d,vtableIndexOffset:p,i2iEntryOffset:h,nativeFunctionOffset:_,signatureHandlerOffset:y},constMethod:{constantPoolOffset:v,stackmapDataOffset:S,sizeOffset:A,methodIdnumOffset:F},constantPool:{cacheOffset:O,instanceKlassOffset:P}}}var wu={x64:ku};function Cu(){let{version:t,createNewDefaultVtableIndices:e}=Ue(),n=wu[Process.arch];if(n===void 0)throw new Error(`Missing vtable offset parser for ${Process.arch}`);let r=$e(e,n,{limit:32});if(r===null)throw new Error("Unable to deduce vtable offset");let o=t>=10&&t<=11||t>=15?17:18,s=r-7*te,i=r-17*te,l=r-o*te;return{vtableOffset:r,methodsOffset:s,memberNamesOffset:i,oopMapCacheOffset:l}}function ku(t){if(t.mnemonic!=="mov")return null;let e=t.operands[0];if(e.type!=="mem")return null;let{value:n}=e;if(n.scale!==1)return null;let{disp:r}=n;return r<256?null:r+16}var fs=ne;try{At()}catch{fs=Ue}var Ot=fs;var Iu=`#include <json-glib/json-glib.h>
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
`,Nu=/(.+)!([^/]+)\/?([isu]+)?/,je=null,hs=null,nt=class t{static build(e,n){return ps(n),hs(e,n,r=>new t(je.new(e,r,n)))}static enumerateMethods(e,n,r){ps(r);let o=e.match(Nu);if(o===null)throw new Error("Invalid query; format is: class!method -- see documentation of Java.enumerateMethods(query) for details");let s=Memory.allocUtf8String(o[1]),i=Memory.allocUtf8String(o[2]),l=!1,a=!1,c=!1,d=o[3];d!==void 0&&(l=d.indexOf("s")!==-1,a=d.indexOf("i")!==-1,c=d.indexOf("u")!==-1);let p;if(n.jvmti!==null){let h=je.enumerateMethodsJvm(s,i,pt(l),pt(a),pt(c),r);try{p=JSON.parse(h.readUtf8String()).map(u=>{let g=ptr(u.loader);return u.loader=g.isNull()?null:g,u})}finally{je.dealloc(h)}}else Oe(r.vm,r,h=>{let u=je.enumerateMethodsArt(s,i,pt(l),pt(a),pt(c));try{let g=n["art::JavaVMExt::AddGlobalRef"],{vm:_}=n;p=JSON.parse(u.readUtf8String()).map(y=>{let v=y.loader;return y.loader=v!==0?g(_,h,ptr(v)):null,y})}finally{je.dealloc(u)}});return p}constructor(e){this.handle=e}has(e){return je.has(this.handle,Memory.allocUtf8String(e))!==0}find(e){return je.find(this.handle,Memory.allocUtf8String(e)).readUtf8String()}list(){let e=je.list(this.handle);try{return JSON.parse(e.readUtf8String())}finally{je.dealloc(e)}}};function ps(t){je===null&&(je=Tu(t),hs=xu(je,t.vm))}function Tu(t){let e=Ot(),{jvmti:n=null}=e,{pointerSize:r}=Process,o=8,s=r,i=7*r,l=10*4+5*r,a=o+s+i+l,d=Memory.alloc(a),p=d.add(o),h=p.add(s),{getDeclaredMethods:u,getDeclaredFields:g}=t.javaLangClass(),_=t.javaLangReflectMethod(),y=t.javaLangReflectField(),v=h;[n!==null?n:NULL,u,g,_.getName,_.getModifiers,y.getName,y.getModifiers].forEach(O=>{v=v.writePointer(O).add(r)});let S=h.add(i),{vm:C}=t;if(e.flavor==="art"){let O;if(n!==null)O=[0,0,0,0];else{let D=yr(C).offset;O=[D.ifields,D.methods,D.sfields,D.copiedMethodsOffset]}let P=Ne(C),k=sn(C),M=S;[1,...O,P.size,P.offset.accessFlags,k.size,k.offset.accessFlags,4294967295].forEach(D=>{M=M.writeUInt(D).add(4)}),[e.artClassLinker.address,e["art::ClassLinker::VisitClasses"],e["art::mirror::Class::GetDescriptor"],e["art::ArtMethod::PrettyMethod"],Process.getModuleByName("libc.so").getExportByName("free")].forEach((D,N)=>{D===void 0&&(D=NULL),M=M.writePointer(D).add(r)})}let x=new CModule(Iu,{lock:d,models:p,java_api:h,art_api:S}),A={exceptions:"propagate"},F={exceptions:"propagate",scheduling:"exclusive"};return{handle:x,new:new NativeFunction(x.model_new,"pointer",["pointer","pointer","pointer"],A),has:new NativeFunction(x.model_has,"bool",["pointer","pointer"],F),find:new NativeFunction(x.model_find,"pointer",["pointer","pointer"],F),list:new NativeFunction(x.model_list,"pointer",["pointer"],F),enumerateMethodsArt:new NativeFunction(x.enumerate_methods_art,"pointer",["pointer","pointer","bool","bool","bool"],A),enumerateMethodsJvm:new NativeFunction(x.enumerate_methods_jvm,"pointer",["pointer","pointer","bool","bool","bool","pointer"],A),dealloc:new NativeFunction(x.dealloc,"void",["pointer"],F)}}function xu(t,e){let n=Ot();if(n.flavor!=="art")return Lu;let r=n["art::JavaVMExt::DecodeGlobal"];return function(o,s,i){let l;return Oe(e,s,a=>{let c=r(e,a,o);l=i(c)}),l}}function Lu(t,e,n){return n(NULL)}function pt(t){return t?1:0}var jt=class{constructor(e,n){this.items=new Map,this.capacity=e,this.destroy=n}dispose(e){let{items:n,destroy:r}=this;n.forEach(o=>{r(o,e)}),n.clear()}get(e){let{items:n}=this,r=n.get(e);return r!==void 0&&(n.delete(e),n.set(e,r)),r}set(e,n,r){let{items:o}=this,s=o.get(e);if(s!==void 0)o.delete(e),this.destroy(s,r);else if(o.size===this.capacity){let i=o.keys().next().value,l=o.get(i);o.delete(i),this.destroy(l,r)}o.set(e,n)}};var Pt=1,Rr=256,ms=65536,Au=305419896,_s=32,gs=12,ys=8,bs=8,vs=4,Ss=4,Es=12,Mu=0,Ou=1,ju=2,Pu=3,Ru=4,Fu=5,zu=6,Du=4096,Uu=4097,Bu=4099,Vu=8192,Ju=8193,Gu=8194,Hu=8195,$u=8196,Zu=8198,Wu=24,qu=28,Ku=2,Qu=24,ws=b.from([3,0,7,14,0]),jr="Ldalvik/annotation/Throws;",Yu=b.from([0]);function Xu(t){let e=new Fr,n=Object.assign({},t);return e.addClass(n),e.build()}var Fr=class{constructor(){this.classes=[]}addClass(e){this.classes.push(e)}build(){let e=nf(this.classes),{classes:n,interfaces:r,fields:o,methods:s,protos:i,parameters:l,annotationDirectories:a,annotationSets:c,throwsAnnotations:d,types:p,strings:h}=e,u=0,g=0,_=8,y=12,v=20,S=112;u+=S;let C=u,x=h.length*Ss;u+=x;let A=u,F=p.length*vs;u+=F;let O=u,P=i.length*gs;u+=P;let k=u,M=o.length*ys;u+=M;let D=u,N=s.length*bs;u+=N;let U=u,W=n.length*_s;u+=W;let q=u,T=c.map(R=>{let V=u;return R.offset=V,u+=4+R.items.length*4,V}),w=n.reduce((R,V)=>(V.classData.constructorMethods.forEach(oe=>{let[,le,se]=oe;(le&Rr)===0&&se>=0&&(oe.push(u),R.push({offset:u,superConstructor:se}),u+=Qu)}),R),[]);a.forEach(R=>{R.offset=u,u+=16+R.methods.length*8});let J=r.map(R=>{u=Pr(u,4);let V=u;return R.offset=V,u+=4+2*R.types.length,V}),G=l.map(R=>{u=Pr(u,4);let V=u;return R.offset=V,u+=4+2*R.types.length,V}),Q=[],B=h.map(R=>{let V=u,Y=b.from(Te(R.length)),oe=b.from(R,"utf8"),le=b.concat([Y,oe,Yu]);return Q.push(le),u+=le.length,V}),Z=w.map(R=>{let V=u;return u+=ws.length,V}),X=d.map(R=>{let V=tf(R);return R.offset=u,u+=V.length,V}),H=n.map((R,V)=>{R.classData.offset=u;let Y=ef(R);return u+=Y.length,Y}),ae=0,ye=0;u=Pr(u,4);let $=u,de=r.length+l.length,xe=4+(o.length>0?1:0)+2+c.length+w.length+a.length+(de>0?1:0)+1+Z.length+d.length+n.length+1,Le=4+xe*Es;u+=Le;let Fe=u-q,Je=u,j=b.alloc(Je);j.write(`dex
035`),j.writeUInt32LE(Je,32),j.writeUInt32LE(S,36),j.writeUInt32LE(Au,40),j.writeUInt32LE(ae,44),j.writeUInt32LE(ye,48),j.writeUInt32LE($,52),j.writeUInt32LE(h.length,56),j.writeUInt32LE(C,60),j.writeUInt32LE(p.length,64),j.writeUInt32LE(A,68),j.writeUInt32LE(i.length,72),j.writeUInt32LE(O,76),j.writeUInt32LE(o.length,80),j.writeUInt32LE(o.length>0?k:0,84),j.writeUInt32LE(s.length,88),j.writeUInt32LE(D,92),j.writeUInt32LE(n.length,96),j.writeUInt32LE(U,100),j.writeUInt32LE(Fe,104),j.writeUInt32LE(q,108),B.forEach((R,V)=>{j.writeUInt32LE(R,C+V*Ss)}),p.forEach((R,V)=>{j.writeUInt32LE(R,A+V*vs)}),i.forEach((R,V)=>{let[Y,oe,le]=R,se=O+V*gs;j.writeUInt32LE(Y,se),j.writeUInt32LE(oe,se+4),j.writeUInt32LE(le!==null?le.offset:0,se+8)}),o.forEach((R,V)=>{let[Y,oe,le]=R,se=k+V*ys;j.writeUInt16LE(Y,se),j.writeUInt16LE(oe,se+2),j.writeUInt32LE(le,se+4)}),s.forEach((R,V)=>{let[Y,oe,le]=R,se=D+V*bs;j.writeUInt16LE(Y,se),j.writeUInt16LE(oe,se+2),j.writeUInt32LE(le,se+4)}),n.forEach((R,V)=>{let{interfaces:Y,annotationsDirectory:oe}=R,le=Y!==null?Y.offset:0,se=oe!==null?oe.offset:0,vt=0,Ae=U+V*_s;j.writeUInt32LE(R.index,Ae),j.writeUInt32LE(R.accessFlags,Ae+4),j.writeUInt32LE(R.superClassIndex,Ae+8),j.writeUInt32LE(le,Ae+12),j.writeUInt32LE(R.sourceFileIndex,Ae+16),j.writeUInt32LE(se,Ae+20),j.writeUInt32LE(R.classData.offset,Ae+24),j.writeUInt32LE(vt,Ae+28)}),c.forEach((R,V)=>{let{items:Y}=R,oe=T[V];j.writeUInt32LE(Y.length,oe),Y.forEach((le,se)=>{j.writeUInt32LE(le.offset,oe+4+se*4)})}),w.forEach((R,V)=>{let{offset:Y,superConstructor:oe}=R,le=1,se=1,vt=1,Ae=0,Bt=4;j.writeUInt16LE(le,Y),j.writeUInt16LE(se,Y+2),j.writeUInt16LE(vt,Y+4),j.writeUInt16LE(Ae,Y+6),j.writeUInt32LE(Z[V],Y+8),j.writeUInt32LE(Bt,Y+12),j.writeUInt16LE(4208,Y+16),j.writeUInt16LE(oe,Y+18),j.writeUInt16LE(0,Y+20),j.writeUInt16LE(14,Y+22)}),a.forEach(R=>{let V=R.offset,Y=0,oe=0,le=R.methods.length,se=0;j.writeUInt32LE(Y,V),j.writeUInt32LE(oe,V+4),j.writeUInt32LE(le,V+8),j.writeUInt32LE(se,V+12),R.methods.forEach((vt,Ae)=>{let Bt=V+16+Ae*8,[Ai,Mi]=vt;j.writeUInt32LE(Ai,Bt),j.writeUInt32LE(Mi.offset,Bt+4)})}),r.forEach((R,V)=>{let Y=J[V];j.writeUInt32LE(R.types.length,Y),R.types.forEach((oe,le)=>{j.writeUInt16LE(oe,Y+4+le*2)})}),l.forEach((R,V)=>{let Y=G[V];j.writeUInt32LE(R.types.length,Y),R.types.forEach((oe,le)=>{j.writeUInt16LE(oe,Y+4+le*2)})}),Q.forEach((R,V)=>{R.copy(j,B[V])}),Z.forEach(R=>{ws.copy(j,R)}),X.forEach((R,V)=>{R.copy(j,d[V].offset)}),H.forEach((R,V)=>{R.copy(j,n[V].classData.offset)}),j.writeUInt32LE(xe,$);let be=[[Mu,1,g],[Ou,h.length,C],[ju,p.length,A],[Pu,i.length,O]];o.length>0&&be.push([Ru,o.length,k]),be.push([Fu,s.length,D]),be.push([zu,n.length,U]),c.forEach((R,V)=>{be.push([Bu,R.items.length,T[V]])}),w.forEach(R=>{be.push([Ju,1,R.offset])}),a.forEach(R=>{be.push([Zu,1,R.offset])}),de>0&&be.push([Uu,de,J.concat(G)[0]]),be.push([Gu,h.length,B[0]]),Z.forEach(R=>{be.push([Hu,1,R])}),d.forEach(R=>{be.push([$u,1,R.offset])}),n.forEach(R=>{be.push([Vu,1,R.classData.offset])}),be.push([Du,1,$]),be.forEach((R,V)=>{let[Y,oe,le]=R,se=$+4+V*Es;j.writeUInt16LE(Y,se),j.writeUInt32LE(oe,se+4),j.writeUInt32LE(le,se+8)});let io=new Checksum("sha1");return io.update(j.slice(y+v)),b.from(io.getDigest()).copy(j,y),j.writeUInt32LE(cf(j,y),_),j}};function ef(t){let{instanceFields:e,constructorMethods:n,virtualMethods:r}=t.classData;return b.from([0].concat(Te(e.length)).concat(Te(n.length)).concat(Te(r.length)).concat(e.reduce((s,[i,l])=>s.concat(Te(i)).concat(Te(l)),[])).concat(n.reduce((s,[i,l,,a])=>s.concat(Te(i)).concat(Te(l)).concat(Te(a||0)),[])).concat(r.reduce((s,[i,l])=>s.concat(Te(i)).concat(Te(l)).concat([0]),[])))}function tf(t){let{thrownTypes:e}=t;return b.from([Ku].concat(Te(t.type)).concat([1]).concat(Te(t.value)).concat([qu,e.length]).concat(e.reduce((n,r)=>(n.push(Wu,r),n),[])))}function nf(t){let e=new Set,n=new Set,r={},o=[],s=[],i={},l=new Set,a=new Set;t.forEach(N=>{let{name:U,superClass:W,sourceFileName:q}=N;e.add("this"),e.add(U),n.add(U),e.add(W),n.add(W),e.add(q),N.interfaces.forEach(T=>{e.add(T),n.add(T)}),N.fields.forEach(T=>{let[w,J]=T;e.add(w),e.add(J),n.add(J),o.push([N.name,J,w])}),N.methods.some(([T])=>T==="<init>")||(N.methods.unshift(["<init>","V",[]]),l.add(U)),N.methods.forEach(T=>{let[w,J,G,Q=[],B]=T;e.add(w);let Z=c(J,G),X=null;if(Q.length>0){let H=Q.slice();H.sort(),X=H.join("|");let ae=i[X];ae===void 0&&(ae={id:X,types:H},i[X]=ae),e.add(jr),n.add(jr),Q.forEach(ye=>{e.add(ye),n.add(ye)}),e.add("value")}if(s.push([N.name,Z,w,X,B]),w==="<init>"){a.add(U+"|"+Z);let H=W+"|"+Z;l.has(U)&&!a.has(H)&&(s.push([W,Z,w,null,0]),a.add(H))}})});function c(N,U){let W=[N].concat(U),q=W.join("|");if(r[q]!==void 0)return q;e.add(N),n.add(N),U.forEach(w=>{e.add(w),n.add(w)});let T=W.map(lf).join("");return e.add(T),r[q]=[q,T,N,U],q}let d=Array.from(e);d.sort();let p=d.reduce((N,U,W)=>(N[U]=W,N),{}),h=Array.from(n).map(N=>p[N]);h.sort(Cs);let u=h.reduce((N,U,W)=>(N[d[U]]=W,N),{}),g=Object.keys(r).map(N=>r[N]);g.sort(of);let _={},y=g.map(N=>{let[,U,W,q]=N,T;if(q.length>0){let w=q.join("|");T=_[w],T===void 0&&(T={types:q.map(J=>u[J]),offset:-1},_[w]=T)}else T=null;return[p[U],u[W],T]}),v=g.reduce((N,U,W)=>{let[q]=U;return N[q]=W,N},{}),S=Object.keys(_).map(N=>_[N]),C=o.map(N=>{let[U,W,q]=N;return[u[U],u[W],p[q]]});C.sort(sf);let x=s.map(N=>{let[U,W,q,T,w]=N;return[u[U],v[W],p[q],T,w]});x.sort(af);let A=Object.keys(i).map(N=>i[N]).map(N=>({id:N.id,type:u[jr],value:p.value,thrownTypes:N.types.map(U=>u[U]),offset:-1})),F=A.map(N=>({id:N.id,items:[N],offset:-1})),O=F.reduce((N,U,W)=>(N[U.id]=W,N),{}),P={},k=[],M=t.map(N=>{let U=u[N.name],W=Pt,q=u[N.superClass],T,w=N.interfaces.map($=>u[$]);if(w.length>0){w.sort(Cs);let $=w.join("|");T=P[$],T===void 0&&(T={types:w,offset:-1},P[$]=T)}else T=null;let J=p[N.sourceFileName],G=x.reduce(($,de,xe)=>{let[Le,Fe,Je,j,be]=de;return Le===U&&$.push([xe,Je,j,Fe,be]),$},[]),Q=null,B=G.filter(([,,$])=>$!==null).map(([$,,de])=>[$,F[O[de]]]);B.length>0&&(Q={methods:B,offset:-1},k.push(Q));let Z=C.reduce(($,de,xe)=>{let[Le]=de;return Le===U&&$.push([xe>0?1:0,Pt]),$},[]),X=p["<init>"],H=G.filter(([,$])=>$===X).map(([$,,,de])=>{if(l.has(N.name)){let xe=-1,Le=x.length;for(let Fe=0;Fe!==Le;Fe++){let[Je,j,be]=x[Fe];if(Je===q&&be===X&&j===de){xe=Fe;break}}return[$,Pt|ms,xe]}else return[$,Pt|ms|Rr,-1]}),ae=rf(G.filter(([,$])=>$!==X).map(([$,,,,de])=>[$,de|Pt|Rr]));return{index:U,accessFlags:W,superClassIndex:q,interfaces:T,sourceFileIndex:J,annotationsDirectory:Q,classData:{instanceFields:Z,constructorMethods:H,virtualMethods:ae,offset:-1}}}),D=Object.keys(P).map(N=>P[N]);return{classes:M,interfaces:D,fields:C,methods:x,protos:y,parameters:S,annotationDirectories:k,annotationSets:F,throwsAnnotations:A,types:h,strings:d}}function rf(t){let e=0;return t.map(([n,r],o)=>{let s;return o===0?s=[n,r]:s=[n-e,r],e=n,s})}function Cs(t,e){return t-e}function of(t,e){let[,,n,r]=t,[,,o,s]=e;if(n<o)return-1;if(n>o)return 1;let i=r.join("|"),l=s.join("|");return i<l?-1:i>l?1:0}function sf(t,e){let[n,r,o]=t,[s,i,l]=e;return n!==s?n-s:o!==l?o-l:r-i}function af(t,e){let[n,r,o]=t,[s,i,l]=e;return n!==s?n-s:o!==l?o-l:r-i}function lf(t){let e=t[0];return e==="L"||e==="["?"L":t}function Te(t){if(t<=127)return[t];let e=[],n=!1;do{let r=t&127;t>>=7,n=t!==0,n&&(r|=128),e.push(r)}while(n);return e}function Pr(t,e){let n=t%e;return n===0?t:t+e-n}function cf(t,e){let n=1,r=0,o=t.length;for(let s=e;s<o;s++)n=(n+t[s])%65521,r=(r+n)%65521;return(r<<16|n)>>>0}var ks=Xu;var df=1,zr=null,Is=null;function Ns(t){zr=t}function Dr(t,e,n){let r=ht(t);return r===null&&(t.indexOf("[")===0?r=Ur(t,e,n):(t[0]==="L"&&t[t.length-1]===";"&&(t=t.substring(1,t.length-1)),r=ff(t,e,n))),Object.assign({className:t},r)}var Ts={boolean:{name:"Z",type:"uint8",size:1,byteSize:1,defaultValue:!1,isCompatible(t){return typeof t=="boolean"},fromJni(t){return!!t},toJni(t){return t?1:0},read(t){return t.readU8()},write(t,e){t.writeU8(e)},toString(){return this.name}},byte:{name:"B",type:"int8",size:1,byteSize:1,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-128&&t<=127},fromJni:Pe,toJni:Pe,read(t){return t.readS8()},write(t,e){t.writeS8(e)},toString(){return this.name}},char:{name:"C",type:"uint16",size:1,byteSize:2,defaultValue:0,isCompatible(t){if(typeof t!="string"||t.length!==1)return!1;let e=t.charCodeAt(0);return e>=0&&e<=65535},fromJni(t){return String.fromCharCode(t)},toJni(t){return t.charCodeAt(0)},read(t){return t.readU16()},write(t,e){t.writeU16(e)},toString(){return this.name}},short:{name:"S",type:"int16",size:1,byteSize:2,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-32768&&t<=32767},fromJni:Pe,toJni:Pe,read(t){return t.readS16()},write(t,e){t.writeS16(e)},toString(){return this.name}},int:{name:"I",type:"int32",size:1,byteSize:4,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-2147483648&&t<=2147483647},fromJni:Pe,toJni:Pe,read(t){return t.readS32()},write(t,e){t.writeS32(e)},toString(){return this.name}},long:{name:"J",type:"int64",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"||t instanceof Int64},fromJni:Pe,toJni:Pe,read(t){return t.readS64()},write(t,e){t.writeS64(e)},toString(){return this.name}},float:{name:"F",type:"float",size:1,byteSize:4,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Pe,toJni:Pe,read(t){return t.readFloat()},write(t,e){t.writeFloat(e)},toString(){return this.name}},double:{name:"D",type:"double",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Pe,toJni:Pe,read(t){return t.readDouble()},write(t,e){t.writeDouble(e)},toString(){return this.name}},void:{name:"V",type:"void",size:0,byteSize:0,defaultValue:void 0,isCompatible(t){return t===void 0},fromJni(){},toJni(){return NULL},toString(){return this.name}}},uf=new Set(Object.values(Ts).map(t=>t.name));function ht(t){let e=Ts[t];return e!==void 0?e:null}function ff(t,e,n){let r=n._types[e?1:0],o=r[t];return o!==void 0||(t==="java.lang.Object"?o=pf(n):o=hf(t,e,n),r[t]=o),o}function pf(t){return{name:"Ljava/lang/Object;",type:"pointer",size:1,defaultValue:NULL,isCompatible(e){return e===null?!0:e===void 0?!1:e.$h instanceof NativePointer?!0:typeof e=="string"},fromJni(e,n,r){return e.isNull()?null:t.cast(e,t.use("java.lang.Object"),r)},toJni(e,n){return e===null?NULL:typeof e=="string"?n.newStringUtf(e):e.$h}}}function hf(t,e,n){let r=null,o=null,s=null;function i(){return r===null&&(r=n.use(t).class),r}function l(c){let d=i();return o===null&&(o=d.isInstance.overload("java.lang.Object")),o.call(d,c)}function a(){if(s===null){let c=i();s=n.use("java.lang.String").class.isAssignableFrom(c)}return s}return{name:rt(t),type:"pointer",size:1,defaultValue:NULL,isCompatible(c){return c===null?!0:c===void 0?!1:c.$h instanceof NativePointer?l(c):typeof c=="string"&&a()},fromJni(c,d,p){return c.isNull()?null:a()&&e?d.stringFromJni(c):n.cast(c,n.use(t),p)},toJni(c,d){return c===null?NULL:typeof c=="string"?d.newStringUtf(c):c.$h},toString(){return this.name}}}var mf=[["Z","boolean"],["B","byte"],["C","char"],["D","double"],["F","float"],["I","int"],["J","long"],["S","short"]].reduce((t,[e,n])=>(t["["+e]=_f("["+e,n),t),{});function _f(t,e){let n=E.prototype,r=Sf(e),o={typeName:e,newArray:n["new"+r+"Array"],setRegion:n["set"+r+"ArrayRegion"],getElements:n["get"+r+"ArrayElements"],releaseElements:n["release"+r+"ArrayElements"]};return{name:t,type:"pointer",size:1,defaultValue:NULL,isCompatible(s){return vf(s,e)},fromJni(s,i,l){return yf(s,o,i,l)},toJni(s,i){return bf(s,o,i)}}}function Ur(t,e,n){let r=mf[t];if(r!==void 0)return r;if(t.indexOf("[")!==0)throw new Error("Unsupported type: "+t);let o=t.substring(1),s=Dr(o,e,n),i=0,l=o.length;for(;i!==l&&o[i]==="[";)i++;o=o.substring(i),o[0]==="L"&&o[o.length-1]===";"&&(o=o.substring(1,o.length-1));let a=o.replace(/\./g,"/");uf.has(a)?a="[".repeat(i)+a:a="[".repeat(i)+"L"+a+";";let c="["+a;return o="[".repeat(i)+o,{name:t.replace(/\./g,"/"),type:"pointer",size:1,defaultValue:NULL,isCompatible(d){return d===null?!0:typeof d!="object"||d.length===void 0?!1:d.every(function(p){return s.isCompatible(p)})},fromJni(d,p,h){if(d.isNull())return null;let u=[],g=p.getArrayLength(d);for(let _=0;_!==g;_++){let y=p.getObjectArrayElement(d,_);try{u.push(s.fromJni(y,p))}finally{p.deleteLocalRef(y)}}try{u.$w=n.cast(d,n.use(c),h)}catch{n.use("java.lang.reflect.Array").newInstance(n.use(o).class,0),u.$w=n.cast(d,n.use(c),h)}return u.$dispose=gf,u},toJni(d,p){if(d===null)return NULL;if(!(d instanceof Array))throw new Error("Expected an array");let h=d.$w;if(h!==void 0)return h.$h;let u=d.length,_=n.use(o).$borrowClassHandle(p);try{let y=p.newObjectArray(u,_.value,NULL);p.throwIfExceptionPending();for(let v=0;v!==u;v++){let S=s.toJni(d[v],p);try{p.setObjectArrayElement(y,v,S)}finally{s.type==="pointer"&&p.getObjectRefType(S)===df&&p.deleteLocalRef(S)}p.throwIfExceptionPending()}return y}finally{_.unref(p)}}}}function gf(){let t=this.length;for(let e=0;e!==t;e++){let n=this[e];if(n===null)continue;let r=n.$dispose;if(r===void 0)break;r.call(n)}this.$w.$dispose()}function yf(t,e,n,r){if(t.isNull())return null;let o=ht(e.typeName),s=n.getArrayLength(t);return new dn(t,e,o,s,n,r)}function bf(t,e,n){if(t===null)return NULL;let r=t.$h;if(r!==void 0)return r;let o=t.length,s=ht(e.typeName),i=e.newArray.call(n,o);if(i.isNull())throw new Error("Unable to construct array");if(o>0){let l=s.byteSize,a=s.write,c=s.toJni,d=Memory.alloc(o*s.byteSize);for(let p=0;p!==o;p++)a(d.add(p*l),c(t[p]));e.setRegion.call(n,i,0,o,d),n.throwIfExceptionPending()}return i}function vf(t,e){if(t===null)return!0;if(t instanceof dn)return t.$s.typeName===e;if(!(typeof t=="object"&&t.length!==void 0))return!1;let r=ht(e);return Array.prototype.every.call(t,o=>r.isCompatible(o))}function dn(t,e,n,r,o,s=!0){if(s){let i=o.newGlobalRef(t);this.$h=i,this.$r=Script.bindWeak(this,o.vm.makeHandleDestructor(i))}else this.$h=t,this.$r=null;return this.$s=e,this.$t=n,this.length=r,new Proxy(this,Is)}Is={has(t,e){return e in t?!0:t.tryParseIndex(e)!==null},get(t,e,n){let r=t.tryParseIndex(e);return r===null?t[e]:t.readElement(r)},set(t,e,n,r){let o=t.tryParseIndex(e);return o===null?(t[e]=n,!0):(t.writeElement(o,n),!0)},ownKeys(t){let e=[],{length:n}=t;for(let r=0;r!==n;r++){let o=r.toString();e.push(o)}return e.push("length"),e},getOwnPropertyDescriptor(t,e){return t.tryParseIndex(e)!==null?{writable:!0,configurable:!0,enumerable:!0}:Object.getOwnPropertyDescriptor(t,e)}};Object.defineProperties(dn.prototype,{$dispose:{enumerable:!0,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t))}},$clone:{value(t){return new dn(this.$h,this.$s,this.$t,this.length,t)}},tryParseIndex:{value(t){if(typeof t=="symbol")return null;let e=parseInt(t);return isNaN(e)||e<0||e>=this.length?null:e}},readElement:{value(t){return this.withElements(e=>{let n=this.$t;return n.fromJni(n.read(e.add(t*n.byteSize)))})}},writeElement:{value(t,e){let{$h:n,$s:r,$t:o}=this,s=zr.getEnv(),i=Memory.alloc(o.byteSize);o.write(i,o.toJni(e)),r.setRegion.call(s,n,t,1,i)}},withElements:{value(t){let{$h:e,$s:n}=this,r=zr.getEnv(),o=n.getElements.call(r,e);if(o.isNull())throw new Error("Unable to get array elements");try{return t(o)}finally{n.releaseElements.call(r,e,o)}}},toJSON:{value(){let{length:t,$t:e}=this,{byteSize:n,fromJni:r,read:o}=e;return this.withElements(s=>{let i=[];for(let l=0;l!==t;l++){let a=r(o(s.add(l*n)));i.push(a)}return i})}},toString:{value(){return this.toJSON().toString()}}});function rt(t){return"L"+t.replace(/\./g,"/")+";"}function Sf(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Pe(t){return t}var Ef=4,{ensureClassInitialized:xs,makeMethodMangler:Ps}=ln,wf=8,Jr=1,Ft=2,Ze=3,Br=1,Gr=2,un=1,Rs=2,Ls=Symbol("PENDING_USE"),As="/data/local/tmp",{getCurrentThreadId:pn,pointerSize:Rt}=Process,Ee={state:"empty",factories:[],loaders:null,Integer:null},re=null,fe=null,Fs=null,zs=null,Ds=null,Us=null,Bs=null,Ms=null,Vr=null,_t=new Map,Qe=class t{static _initialize(e,n){re=e,fe=n,Fs=n.flavor==="art",n.flavor==="jvm"&&(xs=ls,Ps=ds)}static _disposeAll(e){Ee.factories.forEach(n=>{n._dispose(e)})}static get(e){let n=Jf(),r=n.factories[0];if(e===null)return r;let o=n.loaders.get(e);if(o!==null){let i=r.cast(o,n.Integer);return n.factories[i.intValue()]}let s=new t;return s.loader=e,s.cacheDir=r.cacheDir,Zr(s,e),s}constructor(){this.cacheDir=As,this.codeCacheDir=As+"/dalvik-cache",this.tempFileNaming={prefix:"frida",suffix:""},this._classes={},this._classHandles=new jt(10,kf),this._patchedMethods=new Set,this._loader=null,this._types=[{},{}],Ee.factories.push(this)}_dispose(e){Array.from(this._patchedMethods).forEach(n=>{n.implementation=null}),this._patchedMethods.clear(),Cr(),this._classHandles.dispose(e),this._classes={}}get loader(){return this._loader}set loader(e){let n=this._loader===null&&e!==null;this._loader=e,n&&Ee.state==="ready"&&this===Ee.factories[0]&&Zr(this,e)}use(e,n={}){let r=n.cache!=="skip",o=r?this._getUsedClass(e):void 0;if(o===void 0)try{let s=re.getEnv(),{_loader:i}=this,l=i!==null?Nf(e,i,s):If(e);o=this._make(e,l,s)}finally{r&&this._setUsedClass(e,o)}return o}_getUsedClass(e){let n;for(;(n=this._classes[e])===Ls;)Thread.sleep(.05);return n===void 0&&(this._classes[e]=Ls),n}_setUsedClass(e,n){n!==void 0?this._classes[e]=n:delete this._classes[e]}_make(e,n,r){let o=Cf(),s=Object.create(qr.prototype,{[Symbol.for("n")]:{value:e},$n:{get(){return this[Symbol.for("n")]}},[Symbol.for("C")]:{value:o},$C:{get(){return this[Symbol.for("C")]}},[Symbol.for("w")]:{value:null,writable:!0},$w:{get(){return this[Symbol.for("w")]},set(a){this[Symbol.for("w")]=a}},[Symbol.for("_s")]:{writable:!0},$_s:{get(){return this[Symbol.for("_s")]},set(a){this[Symbol.for("_s")]=a}},[Symbol.for("c")]:{value:[null]},$c:{get(){return this[Symbol.for("c")]}},[Symbol.for("m")]:{value:new Map},$m:{get(){return this[Symbol.for("m")]}},[Symbol.for("l")]:{value:null,writable:!0},$l:{get(){return this[Symbol.for("l")]},set(a){this[Symbol.for("l")]=a}},[Symbol.for("gch")]:{value:n},$gch:{get(){return this[Symbol.for("gch")]}},[Symbol.for("f")]:{value:this},$f:{get(){return this[Symbol.for("f")]}}});o.prototype=s;let i=new o(null);s[Symbol.for("w")]=i,s.$w=i;let l=i.$borrowClassHandle(r);try{let a=l.value;xs(r,a),s.$l=nt.build(a,r)}finally{l.unref(r)}return i}retain(e){let n=re.getEnv();return e.$clone(n)}cast(e,n,r){let o=re.getEnv(),s=e.$h;s===void 0&&(s=e);let i=n.$borrowClassHandle(o);try{if(!o.isInstanceOf(s,i.value))throw new Error(`Cast from '${o.getObjectClassName(s)}' to '${n.$n}' isn't possible`)}finally{i.unref(o)}let l=n.$C;return new l(s,un,o,r)}wrap(e,n,r){let o=n.$C,s=new o(e,un,r,!1);return s.$r=Script.bindWeak(s,re.makeHandleDestructor(e)),s}array(e,n){let r=re.getEnv(),o=ht(e);o!==null&&(e=o.name);let s=Ur("["+e,!1,this),i=s.toJni(n,r);return s.fromJni(i,r,!0)}registerClass(e){let n=re.getEnv(),r=[];try{let o=this.use("java.lang.Class"),s=n.javaLangReflectMethod(),i=n.vaMethod("pointer",[]),l=e.name,a=e.implements||[],c=e.superClass||this.use("java.lang.Object"),d=[],p=[],h={name:rt(l),sourceFileName:Hf(l),superClass:rt(c.$n),interfaces:a.map(k=>rt(k.$n)),fields:d,methods:p},u=a.slice();a.forEach(k=>{Array.prototype.slice.call(k.class.getInterfaces()).forEach(M=>{let D=this.cast(M,o).getCanonicalName();u.push(this.use(D))})});let g=e.fields||{};Object.getOwnPropertyNames(g).forEach(k=>{let M=this._getType(g[k]);d.push([k,M.name])});let _={},y={};u.forEach(k=>{let M=k.$borrowClassHandle(n);r.push(M);let D=M.value;k.$ownMembers.filter(N=>k[N].overloads!==void 0).forEach(N=>{let U=k[N],W=U.overloads,q=W.map(T=>Os(N,T.returnType,T.argumentTypes));_[N]=[U,q,D],W.forEach((T,w)=>{let J=q[w];y[J]=[T,D]})})});let v=e.methods||{},C=Object.keys(v).reduce((k,M)=>{let D=v[M],N=M==="$init"?"<init>":M;return D instanceof Array?k.push(...D.map(U=>[N,U])):k.push([N,D]),k},[]),x=[];C.forEach(([k,M])=>{let D=Ze,N,U,W=[],q;if(typeof M=="function"){let G=_[k];if(G!==void 0&&Array.isArray(G)){let[Q,B,Z]=G;if(B.length>1)throw new Error(`More than one overload matching '${k}': signature must be specified`);delete y[B[0]];let X=Q.overloads[0];D=X.type,N=X.returnType,U=X.argumentTypes,q=M;let H=n.toReflectedMethod(Z,X.handle,0),ae=i(n.handle,H,s.getGenericExceptionTypes);W=Wr(n,ae).map(rt),n.deleteLocalRef(ae),n.deleteLocalRef(H)}else N=this._getType("void"),U=[],q=M}else{if(M.isStatic&&(D=Ft),N=this._getType(M.returnType||"void"),U=(M.argumentTypes||[]).map(B=>this._getType(B)),q=M.implementation,typeof q!="function")throw new Error("Expected a function implementation for method: "+k);let G=Os(k,N,U),Q=y[G];if(Q!==void 0){let[B,Z]=Q;delete y[G],D=B.type,N=B.returnType,U=B.argumentTypes;let X=n.toReflectedMethod(Z,B.handle,0),H=i(n.handle,X,s.getGenericExceptionTypes);W=Wr(n,H).map(rt),n.deleteLocalRef(H),n.deleteLocalRef(X)}}let T=N.name,w=U.map(G=>G.name),J="("+w.join("")+")"+T;p.push([k,T,w,W,D===Ft?wf:0]),x.push([k,J,D,N,U,q])});let A=Object.keys(y);if(A.length>0)throw new Error("Missing implementation for: "+A.join(", "));let F=fn.fromBuffer(ks(h),this);try{F.load()}finally{F.file.delete()}let O=this.use(e.name),P=C.length;if(P>0){let k=3*Rt,M=Memory.alloc(P*k),D=[],N=[];x.forEach(([q,T,w,J,G,Q],B)=>{let Z=Memory.allocUtf8String(q),X=Memory.allocUtf8String(T),H=Vs(q,O,w,J,G,Q);M.add(B*k).writePointer(Z),M.add(B*k+Rt).writePointer(X),M.add(B*k+2*Rt).writePointer(H),N.push(Z,X),D.push(H)});let U=O.$borrowClassHandle(n);r.push(U);let W=U.value;n.registerNatives(W,M,P),n.throwIfExceptionPending(),O.$nativeMethods=D}return O}finally{r.forEach(o=>{o.unref(n)})}}choose(e,n){let r=re.getEnv(),{flavor:o}=fe;if(o==="jvm")this._chooseObjectsJvm(e,r,n);else if(o==="art"){let s=fe["art::gc::Heap::VisitObjects"]===void 0;if(s&&fe["art::gc::Heap::GetInstances"]===void 0)return this._chooseObjectsJvm(e,r,n);Oe(re,r,i=>{s?this._chooseObjectsArtPreA12(e,r,i,n):this._chooseObjectsArtLegacy(e,r,i,n)})}else this._chooseObjectsDalvik(e,r,n)}_chooseObjectsJvm(e,n,r){let o=this.use(e),{jvmti:s}=fe,i=1,l=3,a=o.$borrowClassHandle(n),c=int64(a.value.toString());try{let d=new NativeCallback((v,S,C,x)=>(C.writeS64(c),i),"int",["int64","int64","pointer","pointer"]);s.iterateOverInstancesOfClass(a.value,l,d,a.value);let p=Memory.alloc(8);p.writeS64(c);let h=Memory.alloc(Ef),u=Memory.alloc(Rt);s.getObjectsWithTags(1,p,h,u,NULL);let g=h.readS32(),_=u.readPointer(),y=[];for(let v=0;v!==g;v++)y.push(_.add(v*Rt).readPointer());s.deallocate(_);try{for(let v of y){let S=this.cast(v,o);if(r.onMatch(S)==="stop")break}r.onComplete()}finally{y.forEach(v=>{n.deleteLocalRef(v)})}}finally{a.unref(n)}}_chooseObjectsArtPreA12(e,n,r,o){let s=this.use(e),i=Lt.$new(r,re),l,a=s.$borrowClassHandle(n);try{let h=fe["art::JavaVMExt::DecodeGlobal"](fe.vm,r,a.value);l=i.newHandle(h)}finally{a.unref(n)}let c=0,d=xt.$new();fe["art::gc::Heap::GetInstances"](fe.artHeap,i,l,c,d);let p=d.handles.map(h=>n.newGlobalRef(h));d.$delete(),i.$delete();try{for(let h of p){let u=this.cast(h,s);if(o.onMatch(u)==="stop")break}o.onComplete()}finally{p.forEach(h=>{n.deleteGlobalRef(h)})}}_chooseObjectsArtLegacy(e,n,r,o){let s=this.use(e),i=[],l=fe["art::JavaVMExt::AddGlobalRef"],a=fe.vm,c,d=s.$borrowClassHandle(n);try{c=fe["art::JavaVMExt::DecodeGlobal"](a,r,d.value).toInt32()}finally{d.unref(n)}let p=Lr(c,h=>{i.push(l(a,r,h))});fe["art::gc::Heap::VisitObjects"](fe.artHeap,p,NULL);try{for(let h of i){let u=this.cast(h,s);if(o.onMatch(u)==="stop")break}}finally{i.forEach(h=>{n.deleteGlobalRef(h)})}o.onComplete()}_chooseObjectsDalvik(e,n,r){let o=this.use(e);if(fe.addLocalReference===null){let i=Process.getModuleByName("libdvm.so"),l;switch(Process.arch){case"arm":l="2d e9 f0 41 05 46 15 4e 0c 46 7e 44 11 b3 43 68";break;case"ia32":l="8d 64 24 d4 89 5c 24 1c 89 74 24 20 e8 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 85 d2";break}Memory.scan(i.base,i.size,l,{onMatch:(a,c)=>{let d;if(Process.arch==="arm")a=a.or(1),d=new NativeFunction(a,"pointer",["pointer","pointer"]);else{let p=Memory.alloc(Process.pageSize);Memory.patchCode(p,16,h=>{let u=new X86Writer(h,{pc:p});u.putMovRegRegOffsetPtr("eax","esp",4),u.putMovRegRegOffsetPtr("edx","esp",8),u.putJmpAddress(a),u.flush()}),d=new NativeFunction(p,"pointer",["pointer","pointer"]),d._thunk=p}return fe.addLocalReference=d,re.perform(p=>{s(this,p)}),"stop"},onError(a){},onComplete(){fe.addLocalReference===null&&r.onComplete()}})}else s(this,n);function s(i,l){let{DVM_JNI_ENV_OFFSET_SELF:a}=ln,c=l.handle.add(a).readPointer(),d,p=o.$borrowClassHandle(l);try{d=fe.dvmDecodeIndirectRef(c,p.value)}finally{p.unref(l)}let h=d.toMatchPattern(),u=fe.dvmHeapSourceGetBase(),_=fe.dvmHeapSourceGetLimit().sub(u).toInt32();Memory.scan(u,_,h,{onMatch:(y,v)=>{fe.dvmIsValidObject(y)&&re.perform(S=>{let C=S.handle.add(a).readPointer(),x,A=fe.addLocalReference(C,y);try{x=i.cast(A,o)}finally{S.deleteLocalRef(A)}if(r.onMatch(x)==="stop")return"stop"})},onError(y){},onComplete(){r.onComplete()}})}}openClassFile(e){return new fn(e,null,this)}_getType(e,n=!0){return Dr(e,n,this)}};function Cf(){return function(t,e,n,r){return qr.call(this,t,e,n,r)}}function qr(t,e,n,r=!0){if(t!==null)if(r){let o=n.newGlobalRef(t);this.$h=o,this.$r=Script.bindWeak(this,re.makeHandleDestructor(o))}else this.$h=t,this.$r=null;else this.$h=null,this.$r=null;return this.$t=e,new Proxy(this,zs)}zs={has(t,e){return e in t?!0:t.$has(e)},get(t,e,n){if(typeof e!="string"||e.startsWith("$")||e==="class")return t[e];let r=t.$find(e);return r!==null?r(n):t[e]},set(t,e,n,r){return t[e]=n,!0},ownKeys(t){return t.$list()},getOwnPropertyDescriptor(t,e){return Object.prototype.hasOwnProperty.call(t,e)?Object.getOwnPropertyDescriptor(t,e):{writable:!1,configurable:!0,enumerable:!0}}};Object.defineProperties(qr.prototype,{[Symbol.for("new")]:{enumerable:!1,get(){return this.$getCtor("allocAndInit")}},$new:{enumerable:!0,get(){return this[Symbol.for("new")]}},[Symbol.for("alloc")]:{enumerable:!1,value(){let t=re.getEnv(),e=this.$borrowClassHandle(t);try{let n=t.allocObject(e.value);return this.$f.cast(n,this)}finally{e.unref(t)}}},$alloc:{enumerable:!0,get(){return this[Symbol.for("alloc")]}},[Symbol.for("init")]:{enumerable:!1,get(){return this.$getCtor("initOnly")}},$init:{enumerable:!0,get(){return this[Symbol.for("init")]}},[Symbol.for("dispose")]:{enumerable:!1,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t)),this.$h!==null&&(this.$h=void 0)}},$dispose:{enumerable:!0,get(){return this[Symbol.for("dispose")]}},[Symbol.for("clone")]:{enumerable:!1,value(t){let e=this.$C;return new e(this.$h,this.$t,t)}},$clone:{value(t){return this[Symbol.for("clone")](t)}},[Symbol.for("class")]:{enumerable:!1,get(){let t=re.getEnv(),e=this.$borrowClassHandle(t);try{let n=this.$f;return n.cast(e.value,n.use("java.lang.Class"))}finally{e.unref(t)}}},class:{enumerable:!0,get(){return this[Symbol.for("class")]}},[Symbol.for("className")]:{enumerable:!1,get(){let t=this.$h;return t===null?this.$n:re.getEnv().getObjectClassName(t)}},$className:{enumerable:!0,get(){return this[Symbol.for("className")]}},[Symbol.for("ownMembers")]:{enumerable:!1,get(){return this.$l.list()}},$ownMembers:{enumerable:!0,get(){return this[Symbol.for("ownMembers")]}},[Symbol.for("super")]:{enumerable:!1,get(){let t=re.getEnv(),e=this.$s.$C;return new e(this.$h,Rs,t)}},$super:{enumerable:!0,get(){return this[Symbol.for("super")]}},[Symbol.for("s")]:{enumerable:!1,get(){let t=Object.getPrototypeOf(this),e=t.$_s;if(e===void 0){let n=re.getEnv(),r=this.$borrowClassHandle(n);try{let o=n.getSuperclass(r.value);if(o.isNull())e=null;else try{let s=n.getClassName(o),i=t.$f;if(e=i._getUsedClass(s),e===void 0)try{let l=Tf(this);e=i._make(s,l,n)}finally{i._setUsedClass(s,e)}}finally{n.deleteLocalRef(o)}}finally{r.unref(n)}t.$_s=e}return e}},$s:{get(){return this[Symbol.for("s")]}},[Symbol.for("isSameObject")]:{enumerable:!1,value(t){return re.getEnv().isSameObject(t.$h,this.$h)}},$isSameObject:{value(t){return this[Symbol.for("isSameObject")](t)}},[Symbol.for("getCtor")]:{enumerable:!1,value(t){let e=this.$c,n=e[0];if(n===null){let r=re.getEnv(),o=this.$borrowClassHandle(r);try{n=xf(o.value,this.$w,r),e[0]=n}finally{o.unref(r)}}return n[t]}},$getCtor:{value(t){return this[Symbol.for("getCtor")](t)}},[Symbol.for("borrowClassHandle")]:{enumerable:!1,value(t){let e=this.$n,n=this.$f._classHandles,r=n.get(e);return r===void 0&&(r=new Kr(this.$gch(t),t),n.set(e,r,t)),r.ref()}},$borrowClassHandle:{value(t){return this[Symbol.for("borrowClassHandle")](t)}},[Symbol.for("copyClassHandle")]:{enumerable:!1,value(t){let e=this.$borrowClassHandle(t);try{return t.newLocalRef(e.value)}finally{e.unref(t)}}},$copyClassHandle:{value(t){return this[Symbol.for("copyClassHandle")](t)}},[Symbol.for("getHandle")]:{enumerable:!1,value(t){let e=this.$h;if(e===void 0)throw new Error("Wrapper is disposed; perhaps it was borrowed from a hook instead of calling Java.retain() to make a long-lived wrapper?");return e}},$getHandle:{value(t){return this[Symbol.for("getHandle")](t)}},[Symbol.for("list")]:{enumerable:!1,value(){let t=this.$s,e=t!==null?t.$list():[],n=this.$l;return Array.from(new Set(e.concat(n.list())))}},$list:{get(){return this[Symbol.for("list")]}},[Symbol.for("has")]:{enumerable:!1,value(t){if(this.$m.has(t)||this.$l.has(t))return!0;let r=this.$s;return!!(r!==null&&r.$has(t))}},$has:{value(t){return this[Symbol.for("has")](t)}},[Symbol.for("find")]:{enumerable:!1,value(t){let e=this.$m,n=e.get(t);if(n!==void 0)return n;let o=this.$l.find(t);if(o!==null){let i=re.getEnv(),l=this.$borrowClassHandle(i);try{n=Lf(t,o,l.value,this.$w,i)}finally{l.unref(i)}return e.set(t,n),n}let s=this.$s;return s!==null?s.$find(t):null}},$find:{value(t){return this[Symbol.for("find")](t)}},[Symbol.for("toJSON")]:{enumerable:!1,value(){let t=this.$n;if(this.$h===null)return`<class: ${t}>`;let n=this.$className;return t===n?`<instance: ${t}>`:`<instance: ${t}, $className: ${n}>`}},toJSON:{get(){return this[Symbol.for("toJSON")]}}});function Kr(t,e){this.value=e.newGlobalRef(t),e.deleteLocalRef(t),this.refs=1}Kr.prototype.ref=function(){return this.refs++,this};Kr.prototype.unref=function(t){--this.refs===0&&t.deleteGlobalRef(this.value)};function kf(t,e){t.unref(e)}function If(t){let e=t.replace(/\./g,"/");return function(n){let r=pn();Gs(r);try{return n.findClass(e)}finally{Hs(r)}}}function Nf(t,e,n){return Vr===null&&(Ms=n.vaMethod("pointer",["pointer"]),Vr=e.loadClass.overload("java.lang.String").handle),n=null,function(r){let o=r.newStringUtf(t),s=pn();Gs(s);try{let i=Ms(r.handle,e.$h,Vr,o);return r.throwIfExceptionPending(),i}finally{Hs(s),r.deleteLocalRef(o)}}}function Tf(t){return function(e){let n=t.$borrowClassHandle(e);try{return e.getSuperclass(n.value)}finally{n.unref(e)}}}function xf(t,e,n){let{$n:r,$f:o}=e,s=Gf(r),i=n.javaLangClass(),l=n.javaLangReflectConstructor(),a=n.vaMethod("pointer",[]),c=n.vaMethod("uint8",[]),d=[],p=[],h=o._getType(r,!1),u=o._getType("void",!1),g=a(n.handle,t,i.getDeclaredConstructors);try{let _=n.getArrayLength(g);if(_!==0)for(let y=0;y!==_;y++){let v,S,C=n.getObjectArrayElement(g,y);try{v=n.fromReflectedMethod(C),S=a(n.handle,C,l.getGenericParameterTypes)}finally{n.deleteLocalRef(C)}let x;try{x=Wr(n,S).map(A=>o._getType(A))}finally{n.deleteLocalRef(S)}d.push(mt(s,e,Jr,v,h,x,n)),p.push(mt(s,e,Ze,v,u,x,n))}else{if(c(n.handle,t,i.isInterface))throw new Error("cannot instantiate an interface");let v=n.javaLangObject(),S=n.getMethodId(v,"<init>","()V");d.push(mt(s,e,Jr,S,h,[],n)),p.push(mt(s,e,Ze,S,u,[],n))}}finally{n.deleteLocalRef(g)}if(p.length===0)throw new Error("no supported overloads");return{allocAndInit:Hr(d),initOnly:Hr(p)}}function Lf(t,e,n,r,o){return e.startsWith("m")?Af(t,e,n,r,o):Uf(t,e,n,r,o)}function Af(t,e,n,r,o){let{$f:s}=r,i=e.split(":").slice(1),l=o.javaLangReflectMethod(),a=o.vaMethod("pointer",[]),c=o.vaMethod("uint8",[]),d=i.map(h=>{let u=h[0]==="s"?Ft:Ze,g=ptr(h.substr(1)),_,y=[],v=o.toReflectedMethod(n,g,u===Ft?1:0);try{let S=!!c(o.handle,v,l.isVarArgs),C=a(o.handle,v,l.getGenericReturnType);o.throwIfExceptionPending();try{_=s._getType(o.getTypeName(C))}finally{o.deleteLocalRef(C)}let x=a(o.handle,v,l.getParameterTypes);try{let A=o.getArrayLength(x);for(let F=0;F!==A;F++){let O=o.getObjectArrayElement(x,F),P;try{P=S&&F===A-1?o.getArrayTypeName(O):o.getTypeName(O)}finally{o.deleteLocalRef(O)}let k=s._getType(P);y.push(k)}}finally{o.deleteLocalRef(x)}}catch{return null}finally{o.deleteLocalRef(v)}return mt(t,r,u,g,_,y,o)}).filter(h=>h!==null);if(d.length===0)throw new Error("No supported overloads");t==="valueOf"&&Ff(d);let p=Hr(d);return function(h){return p}}function Hr(t){let e=Mf();return Object.setPrototypeOf(e,Ds),e._o=t,e}function Mf(){let t=function(){return t.invoke(this,arguments)};return t}Ds=Object.create(Function.prototype,{overloads:{enumerable:!0,get(){return this._o}},overload:{value(...t){let e=this._o,n=t.length,r=t.join(":");for(let o=0;o!==e.length;o++){let s=e[o],{argumentTypes:i}=s;if(i.length!==n)continue;if(i.map(a=>a.className).join(":")===r)return s}$r(this.methodName,this.overloads,"specified argument types do not match any of:")}},methodName:{enumerable:!0,get(){return this._o[0].methodName}},holder:{enumerable:!0,get(){return this._o[0].holder}},type:{enumerable:!0,get(){return this._o[0].type}},handle:{enumerable:!0,get(){return ot(this),this._o[0].handle}},implementation:{enumerable:!0,get(){return ot(this),this._o[0].implementation},set(t){ot(this),this._o[0].implementation=t}},returnType:{enumerable:!0,get(){return ot(this),this._o[0].returnType}},argumentTypes:{enumerable:!0,get(){return ot(this),this._o[0].argumentTypes}},canInvokeWith:{enumerable:!0,get(t){return ot(this),this._o[0].canInvokeWith}},clone:{enumerable:!0,value(t){return ot(this),this._o[0].clone(t)}},invoke:{value(t,e){let n=this._o,r=t.$h!==null;for(let o=0;o!==n.length;o++){let s=n[o];if(s.canInvokeWith(e)){if(s.type===Ze&&!r){let i=this.methodName;if(i==="toString")return`<class: ${t.$n}>`;throw new Error(i+": cannot call instance method without an instance")}return s.apply(t,e)}}if(this.methodName==="toString")return`<class: ${t.$n}>`;$r(this.methodName,this.overloads,"argument types do not match any of:")}}});function Os(t,e,n){return`${e.className} ${t}(${n.map(r=>r.className).join(", ")})`}function ot(t){let e=t._o;e.length>1&&$r(e[0].methodName,e,"has more than one overload, use .overload(<signature>) to choose from:")}function $r(t,e,n){let o=e.slice().sort((s,i)=>s.argumentTypes.length-i.argumentTypes.length).map(s=>s.argumentTypes.length>0?".overload('"+s.argumentTypes.map(l=>l.className).join("', '")+"')":".overload()");throw new Error(`${t}(): ${n}
	${o.join(`
	`)}`)}function mt(t,e,n,r,o,s,i,l){let a=o.type,c=s.map(h=>h.type);i===null&&(i=re.getEnv());let d,p;return n===Ze?(d=i.vaMethod(a,c,l),p=i.nonvirtualVaMethod(a,c,l)):n===Ft?(d=i.staticVaMethod(a,c,l),p=d):(d=i.constructor(c,l),p=d),Of([t,e,n,r,o,s,d,p])}function Of(t){let e=jf();return Object.setPrototypeOf(e,Us),e._p=t,e}function jf(){let t=function(){return t.invoke(this,arguments)};return t}Us=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return this._p[0]}},holder:{enumerable:!0,get(){return this._p[1]}},type:{enumerable:!0,get(){return this._p[2]}},handle:{enumerable:!0,get(){return this._p[3]}},implementation:{enumerable:!0,get(){let t=this._r;return t!==void 0?t:null},set(t){let e=this._p,n=e[1];if(e[2]===Jr)throw new Error("Reimplementing $new is not possible; replace implementation of $init instead");let o=this._r;if(o!==void 0&&(n.$f._patchedMethods.delete(this),o._m.revert(re),this._r=void 0),t!==null){let[s,i,l,a,c,d]=e,p=Vs(s,i,l,c,d,t,this),h=Ps(a);p._m=h,this._r=p,h.replace(p,l===Ze,d,re,fe),n.$f._patchedMethods.add(this)}}},returnType:{enumerable:!0,get(){return this._p[4]}},argumentTypes:{enumerable:!0,get(){return this._p[5]}},canInvokeWith:{enumerable:!0,value(t){let e=this._p[5];return t.length!==e.length?!1:e.every((n,r)=>n.isCompatible(t[r]))}},clone:{enumerable:!0,value(t){let e=this._p.slice(0,6);return mt(...e,null,t)}},invoke:{value(t,e){let n=re.getEnv(),r=this._p,o=r[2],s=r[4],i=r[5],l=this._r,a=o===Ze,c=e.length,d=2+c;n.pushLocalFrame(d);let p=null;try{let h;a?h=t.$getHandle():(p=t.$borrowClassHandle(n),h=p.value);let u,g=t.$t;l===void 0?u=r[3]:(u=l._m.resolveTarget(t,a,n,fe),Fs&&l._c.has(pn())&&(g=Rs));let _=[n.handle,h,u];for(let S=0;S!==c;S++)_.push(i[S].toJni(e[S],n));let y;g===un?y=r[6]:(y=r[7],a&&_.splice(2,0,t.$copyClassHandle(n)));let v=y.apply(null,_);return n.throwIfExceptionPending(),s.fromJni(v,n,!0)}finally{p!==null&&p.unref(n),n.popLocalFrame(NULL)}}},toString:{enumerable:!0,value(){return`function ${this.methodName}(${this.argumentTypes.map(t=>t.className).join(", ")}): ${this.returnType.className}`}}});function Vs(t,e,n,r,o,s,i=null){let l=new Set,a=Pf([t,e,n,r,o,s,i,l]),c=new NativeCallback(a,r.type,["pointer","pointer"].concat(o.map(d=>d.type)));return c._c=l,c}function Pf(t){return function(){return Rf(arguments,t)}}function Rf(t,e){let n=new E(t[0],re),[r,o,s,i,l,a,c,d]=e,p=[],h;if(s===Ze){let _=o.$C;h=new _(t[1],un,n,!1)}else h=o;let u=pn();n.pushLocalFrame(3);let g=!0;re.link(u,n);try{d.add(u);let _;c===null||!_t.has(u)?_=a:_=c;let y=[],v=t.length-2;for(let x=0;x!==v;x++){let F=l[x].fromJni(t[2+x],n,!1);y.push(F),p.push(F)}let S=_.apply(h,y);if(!i.isCompatible(S))throw new Error(`Implementation for ${r} expected return value compatible with ${i.className}`);let C=i.toJni(S,n);return i.type==="pointer"&&(C=n.popLocalFrame(C),g=!1,p.push(S)),C}catch(_){let y=_.$h;return y!==void 0?n.throw(y):Script.nextTick(()=>{throw _}),i.defaultValue}finally{re.unlink(u),g&&n.popLocalFrame(NULL),d.delete(u),p.forEach(_=>{if(_===null)return;let y=_.$dispose;y!==void 0&&y.call(_)})}}function Ff(t){let{holder:e,type:n}=t[0];t.some(o=>o.type===n&&o.argumentTypes.length===0)||t.push(zf([e,n]))}function zf(t){let e=Df();return Object.setPrototypeOf(e,Bs),e._p=t,e}function Df(){return function(){return this}}Bs=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return"valueOf"}},holder:{enumerable:!0,get(){return this._p[0]}},type:{enumerable:!0,get(){return this._p[1]}},handle:{enumerable:!0,get(){return NULL}},implementation:{enumerable:!0,get(){return null},set(t){}},returnType:{enumerable:!0,get(){let t=this.holder;return t.$f.use(t.$n)}},argumentTypes:{enumerable:!0,get(){return[]}},canInvokeWith:{enumerable:!0,value(t){return t.length===0}},clone:{enumerable:!0,value(t){throw new Error("Invalid operation")}}});function Uf(t,e,n,r,o){let s=e[2]==="s"?Br:Gr,i=ptr(e.substr(3)),{$f:l}=r,a,c=o.toReflectedField(n,i,s===Br?1:0);try{a=o.vaMethod("pointer",[])(o.handle,c,o.javaLangReflectField().getGenericType),o.throwIfExceptionPending()}finally{o.deleteLocalRef(c)}let d;try{d=l._getType(o.getTypeName(a))}finally{o.deleteLocalRef(a)}let p,h,u=d.type;return s===Br?(p=o.getStaticField(u),h=o.setStaticField(u)):(p=o.getField(u),h=o.setField(u)),Bf([s,d,i,p,h])}function Bf(t){return function(e){return new Js([e].concat(t))}}function Js(t){this._p=t}Object.defineProperties(Js.prototype,{value:{enumerable:!0,get(){let[t,e,n,r,o]=this._p,s=re.getEnv();s.pushLocalFrame(4);let i=null;try{let l;if(e===Gr){if(l=t.$getHandle(),l===null)throw new Error("Cannot access an instance field without an instance")}else i=t.$borrowClassHandle(s),l=i.value;let a=o(s.handle,l,r);return s.throwIfExceptionPending(),n.fromJni(a,s,!0)}finally{i!==null&&i.unref(s),s.popLocalFrame(NULL)}},set(t){let[e,n,r,o,,s]=this._p,i=re.getEnv();i.pushLocalFrame(4);let l=null;try{let a;if(n===Gr){if(a=e.$getHandle(),a===null)throw new Error("Cannot access an instance field without an instance")}else l=e.$borrowClassHandle(i),a=l.value;if(!r.isCompatible(t))throw new Error(`Expected value compatible with ${r.className}`);let c=r.toJni(t,i);s(i.handle,a,o,c),i.throwIfExceptionPending()}finally{l!==null&&l.unref(i),i.popLocalFrame(NULL)}}},holder:{enumerable:!0,get(){return this._p[0]}},fieldType:{enumerable:!0,get(){return this._p[1]}},fieldReturnType:{enumerable:!0,get(){return this._p[2]}},toString:{enumerable:!0,value(){let t=`Java.Field{holder: ${this.holder}, fieldType: ${this.fieldType}, fieldReturnType: ${this.fieldReturnType}, value: ${this.value}}`;return t.length<200?t:`Java.Field{
	holder: ${this.holder},
	fieldType: ${this.fieldType},
	fieldReturnType: ${this.fieldReturnType},
	value: ${this.value},
}`.split(`
`).map(n=>n.length>200?n.slice(0,n.indexOf(" ")+1)+"...,":n).join(`
`)}}});var fn=class t{static fromBuffer(e,n){let r=js(n),o=r.getCanonicalPath().toString(),s=new File(o,"w");return s.write(e.buffer),s.close(),Vf(o,n),new t(o,r,n)}constructor(e,n,r){this.path=e,this.file=n,this._factory=r}load(){let{_factory:e}=this,{codeCacheDir:n}=e,r=e.use("dalvik.system.DexClassLoader"),o=e.use("java.io.File"),s=this.file;if(s===null&&(s=e.use("java.io.File").$new(this.path)),!s.exists())throw new Error("File not found");o.$new(n).mkdirs(),e.loader=r.$new(s.getCanonicalPath(),n,null,e.loader),re.preventDetachDueToClassLoader()}getClassNames(){let{_factory:e}=this,n=e.use("dalvik.system.DexFile"),r=js(e),o=n.loadDex(this.path,r.getCanonicalPath(),0),s=[],i=o.entries();for(;i.hasMoreElements();)s.push(i.nextElement().toString());return s}};function js(t){let{cacheDir:e,tempFileNaming:n}=t,r=t.use("java.io.File"),o=r.$new(e);return o.mkdirs(),r.createTempFile(n.prefix,n.suffix+".dex",o)}function Vf(t,e){e.use("java.io.File").$new(t).setWritable(!1,!1)}function Jf(){switch(Ee.state){case"empty":{Ee.state="pending";let t=Ee.factories[0],e=t.use("java.util.HashMap"),n=t.use("java.lang.Integer");Ee.loaders=e.$new(),Ee.Integer=n;let r=t.loader;return r!==null&&Zr(t,r),Ee.state="ready",Ee}case"pending":do Thread.sleep(.05);while(Ee.state==="pending");return Ee;case"ready":return Ee}}function Zr(t,e){let{factories:n,loaders:r,Integer:o}=Ee,s=o.$new(n.indexOf(t));r.put(e,s);for(let i=e.getParent();i!==null&&!r.containsKey(i);i=i.getParent())r.put(i,s)}function Gs(t){let e=_t.get(t);e===void 0&&(e=0),e++,_t.set(t,e)}function Hs(t){let e=_t.get(t);if(e===void 0)throw new Error(`Thread ${t} is not ignored`);e--,e===0?_t.delete(t):_t.set(t,e)}function Gf(t){return t.slice(t.lastIndexOf(".")+1)}function Wr(t,e){let n=[],r=t.getArrayLength(e);for(let o=0;o!==r;o++){let s=t.getObjectArrayElement(e,o);try{n.push(t.getTypeName(s))}finally{t.deleteLocalRef(s)}}return n}function Hf(t){let e=t.split(".");return e[e.length-1]+".java"}var $f=4,$s=Process.pointerSize,Qr=class{ACC_PUBLIC=1;ACC_PRIVATE=2;ACC_PROTECTED=4;ACC_STATIC=8;ACC_FINAL=16;ACC_SYNCHRONIZED=32;ACC_BRIDGE=64;ACC_VARARGS=128;ACC_NATIVE=256;ACC_ABSTRACT=1024;ACC_STRICT=2048;ACC_SYNTHETIC=4096;constructor(){this.classFactory=null,this.ClassFactory=Qe,this.vm=null,this.api=null,this._initialized=!1,this._apiError=null,this._wakeupHandler=null,this._pollListener=null,this._pendingMainOps=[],this._pendingVmOps=[],this._cachedIsAppProcess=null;try{this._tryInitialize()}catch{}}_tryInitialize(){if(this._initialized)return!0;if(this._apiError!==null)throw this._apiError;let e;try{e=Ot(),this.api=e}catch(r){throw this._apiError=r,r}if(e===null)return!1;let n=new De(e);return this.vm=n,Ns(n),Qe._initialize(n,e),this.classFactory=new Qe,this._initialized=!0,!0}_dispose(){if(this.api===null)return;let{vm:e}=this;e.perform(n=>{Qe._disposeAll(n),E.dispose(n)}),Script.nextTick(()=>{De.dispose(e)})}get available(){return this._tryInitialize()}get androidVersion(){return At()}synchronized(e,n){let{$h:r=e}=e;if(!(r instanceof NativePointer))throw new Error("Java.synchronized: the first argument `obj` must be either a pointer or a Java instance");let o=this.vm.getEnv();Se("VM::MonitorEnter",o.monitorEnter(r));try{n()}finally{o.monitorExit(r)}}enumerateLoadedClasses(e){this._checkAvailable();let{flavor:n}=this.api;n==="jvm"?this._enumerateLoadedClassesJvm(e):n==="art"?this._enumerateLoadedClassesArt(e):this._enumerateLoadedClassesDalvik(e)}enumerateLoadedClassesSync(){let e=[];return this.enumerateLoadedClasses({onMatch(n){e.push(n)},onComplete(){}}),e}enumerateClassLoaders(e){this._checkAvailable();let{flavor:n}=this.api;if(n==="jvm")this._enumerateClassLoadersJvm(e);else if(n==="art")this._enumerateClassLoadersArt(e);else throw new Error("Enumerating class loaders is not supported on Dalvik")}enumerateClassLoadersSync(){let e=[];return this.enumerateClassLoaders({onMatch(n){e.push(n)},onComplete(){}}),e}_enumerateLoadedClassesJvm(e){let{api:n,vm:r}=this,{jvmti:o}=n,s=r.getEnv(),i=Memory.alloc($f),l=Memory.alloc($s);o.getLoadedClasses(i,l);let a=i.readS32(),c=l.readPointer(),d=[];for(let p=0;p!==a;p++)d.push(c.add(p*$s).readPointer());o.deallocate(c);try{for(let p of d){let h=s.getClassName(p);e.onMatch(h,p)}e.onComplete()}finally{d.forEach(p=>{s.deleteLocalRef(p)})}}_enumerateClassLoadersJvm(e){this.choose("java.lang.ClassLoader",e)}_enumerateLoadedClassesArt(e){let{vm:n,api:r}=this,o=n.getEnv(),s=r["art::JavaVMExt::AddGlobalRef"],{vm:i}=r;Oe(n,o,l=>{let a=Sr(c=>{let d=s(i,l,c);try{let p=o.getClassName(d);e.onMatch(p,d)}finally{o.deleteGlobalRef(d)}return!0});r["art::ClassLinker::VisitClasses"](r.artClassLinker.address,a)}),e.onComplete()}_enumerateClassLoadersArt(e){let{classFactory:n,vm:r,api:o}=this,s=r.getEnv(),i=o["art::ClassLinker::VisitClassLoaders"];if(i===void 0)throw new Error("This API is only available on Android >= 7.0");let l=n.use("java.lang.ClassLoader"),a=[],c=o["art::JavaVMExt::AddGlobalRef"],{vm:d}=o;Oe(r,s,p=>{let h=Er(u=>(a.push(c(d,p,u)),!0));vr(()=>{i(o.artClassLinker.address,h)})});try{a.forEach(p=>{let h=n.cast(p,l);e.onMatch(h)})}finally{a.forEach(p=>{s.deleteGlobalRef(p)})}e.onComplete()}_enumerateLoadedClassesDalvik(e){let{api:n}=this,r=ptr("0xcbcacccd"),o=172,s=8,l=n.gDvm.add(o).readPointer(),a=l.readS32(),d=l.add(12).readPointer(),p=a*s;for(let h=0;h<p;h+=s){let g=d.add(h).add(4).readPointer();if(g.isNull()||g.equals(r))continue;let y=g.add(24).readPointer().readUtf8String();if(y.startsWith("L")){let v=y.substring(1,y.length-1).replace(/\//g,".");e.onMatch(v)}}e.onComplete()}enumerateMethods(e){let{classFactory:n}=this,r=this.vm.getEnv(),o=n.use("java.lang.ClassLoader");return nt.enumerateMethods(e,this.api,r).map(s=>{let i=s.loader;return s.loader=i!==null?n.wrap(i,o,r):null,s})}scheduleOnMainThread(e){this.performNow(()=>{this._pendingMainOps.push(e);let{_wakeupHandler:n}=this;if(n===null){let{classFactory:r}=this,o=r.use("android.os.Handler"),s=r.use("android.os.Looper");n=o.$new(s.getMainLooper()),this._wakeupHandler=n}this._pollListener===null&&(this._pollListener=Interceptor.attach(Process.getModuleByName("libc.so").getExportByName("epoll_wait"),this._makePollHook()),Interceptor.flush()),n.sendEmptyMessage(1)})}_makePollHook(){let e=Process.id,{_pendingMainOps:n}=this;return function(){if(this.threadId!==e)return;let r;for(;(r=n.shift())!==void 0;)try{r()}catch(o){Script.nextTick(()=>{throw o})}}}perform(e){if(this._checkAvailable(),!this._isAppProcess()||this.classFactory.loader!==null)try{this.vm.perform(e)}catch(n){Script.nextTick(()=>{throw n})}else this._pendingVmOps.push(e),this._pendingVmOps.length===1&&this._performPendingVmOpsWhenReady()}performNow(e){return this._checkAvailable(),this.vm.perform(()=>{let{classFactory:n}=this;if(this._isAppProcess()&&n.loader===null){let o=n.use("android.app.ActivityThread").currentApplication();o!==null&&Zs(n,o)}return e()})}_performPendingVmOpsWhenReady(){this.vm.perform(()=>{let{classFactory:e}=this,n=e.use("android.app.ActivityThread"),r=n.currentApplication();if(r!==null){Zs(e,r),this._performPendingVmOps();return}let o=this,s=!1,i="early",l=n.handleBindApplication;l.implementation=function(d){if(d.instrumentationName.value!==null){i="late";let h=e.use("android.app.LoadedApk").makeApplication;h.implementation=function(u,g){return s||(s=!0,Ws(e,this),o._performPendingVmOps()),h.apply(this,arguments)}}l.apply(this,arguments)};let c=n.getPackageInfo.overloads.map(d=>[d.argumentTypes.length,d]).sort(([d],[p])=>p-d).map(([d,p])=>p)[0];c.implementation=function(...d){let p=c.call(this,...d);return!s&&i==="early"&&(s=!0,Ws(e,p),o._performPendingVmOps()),p}})}_performPendingVmOps(){let{vm:e,_pendingVmOps:n}=this,r;for(;(r=n.shift())!==void 0;)try{e.perform(r)}catch(o){Script.nextTick(()=>{throw o})}}use(e,n){return this.classFactory.use(e,n)}openClassFile(e){return this.classFactory.openClassFile(e)}choose(e,n){this.classFactory.choose(e,n)}retain(e){return this.classFactory.retain(e)}cast(e,n){return this.classFactory.cast(e,n)}array(e,n){return this.classFactory.array(e,n)}backtrace(e){return wr(this.vm,e)}isMainThread(){let e=this.classFactory.use("android.os.Looper"),n=e.getMainLooper(),r=e.myLooper();return r===null?!1:n.$isSameObject(r)}registerClass(e){return this.classFactory.registerClass(e)}deoptimizeEverything(){let{vm:e}=this;return Nr(e,e.getEnv())}deoptimizeBootImage(){let{vm:e}=this;return Tr(e,e.getEnv())}deoptimizeMethod(e){let{vm:n}=this;return Ir(n,n.getEnv(),e)}_checkAvailable(){if(!this.available)throw new Error("Java API not available")}_isAppProcess(){let e=this._cachedIsAppProcess;if(e===null){if(this.api.flavor==="jvm")return e=!1,this._cachedIsAppProcess=e,e;let n=new NativeFunction(Module.getGlobalExportByName("readlink"),"pointer",["pointer","pointer","pointer"],{exceptions:"propagate"}),r=Memory.allocUtf8String("/proc/self/exe"),o=1024,s=Memory.alloc(o),i=n(r,s,ptr(o)).toInt32();if(i!==-1){let l=s.readUtf8String(i);e=/^\/system\/bin\/app_process/.test(l)}else e=!0;this._cachedIsAppProcess=e}return e}};function Zs(t,e){let n=t.use("android.os.Process");t.loader=e.getClassLoader(),n.myUid()===n.SYSTEM_UID.value?(t.cacheDir="/data/system",t.codeCacheDir="/data/dalvik-cache"):"getCodeCacheDir"in e?(t.cacheDir=e.getCacheDir().getCanonicalPath(),t.codeCacheDir=e.getCodeCacheDir().getCanonicalPath()):(t.cacheDir=e.getFilesDir().getCanonicalPath(),t.codeCacheDir=e.getCacheDir().getCanonicalPath())}function Ws(t,e){let n=t.use("java.io.File");t.loader=e.getClassLoader();let r=n.$new(e.getDataDir()).getCanonicalPath();t.cacheDir=r,t.codeCacheDir=r+"/cache"}var Yr=new Qr;Script.bindWeak(Yr,()=>{Yr._dispose()});var me=Yr;var Xr={pretty:!0,structured:!1,color:!0,verbose:!0,captureCalls:!0,maxValueLength:512,maxDedupeKeys:8192,scoreThreshold:1,dartLibraryScan:!0,dartSymbolTable:!1};function ie(){return Xr}function qs(t){return Object.assign(Xr,t),Xr}var Ks=Date.now(),eo=[];function ce(t,e){let n={v:1,t:Date.now()-Ks,type:t,...e};eo.push(n),ie().structured&&send(n)}function to(){return eo}function Re(t){return eo.filter(e=>e.type===t).length}function Qs(){return Date.now()-Ks}var Ys={reset:"\x1B[0m",green:"\x1B[32m",yellow:"\x1B[33m",cyan:"\x1B[36m",red:"\x1B[31;1m",dim:"\x1B[2m"};function st(t,e){return ie().color?Ys[t]+e+Ys.reset:e}function it(t){ie().pretty&&console.log(t)}var L={section(t){it(`
`+st("cyan","[*] --- "+t+" ---"))},info(t){it(st("green","[+] ")+t)},note(t){it(st("yellow","[+] ")+t)},hit(t){it(st("red","[!] "+t))},warn(t){it(st("yellow","[-] ")+t)},fail(t){it(st("red","[-] "+t))},detail(t){it(st("dim","    "+t))}};function ge(t,e){return t.length>=e?t:t+" ".repeat(e-t.length)}var Xs=new Set;function no(t,e){let n=e instanceof Error?e.message:String(e);Xs.has(t)||(Xs.add(t),ce("error",{where:t,message:n}),L.warn(t+": "+n))}function K(t,e){try{return e()}catch(n){no(t,n);return}}function hn(t,e){return function(...n){try{return e.apply(this,n)}catch(r){no(t,r);return}}}function Be(t,e,n){e.implementation=function(...r){try{n(this,r)}catch(o){no(t,o)}return e.apply(this,r)}}function ei(t,e){try{return t(e)}catch{return null}}var ke=class{keys=new Set;saturated=!1;first(e){return this.keys.has(e)?!1:this.keys.size>=ie().maxDedupeKeys?(this.saturated=!0,!1):(this.keys.add(e),!0)}get size(){return this.keys.size}get isSaturated(){return this.saturated}};function Ve(t){if(t==null)return null;let e=ie().maxValueLength;return t.length<=e?t:t.slice(0,e)+"\u2026(+"+(t.length-e)+")"}var mn={name:"default",description:"Attack-surface scoring for mobile platform-channel and method names. Weights are additive; a name matching several tags scores the sum.",ignore:["webview_flutter","firebase_core","firebase_analytics","google_mobile_ads","image_picker","path_provider","shared_preferences_android","url_launcher","package_info_plus","connectivity_plus","device_info_plus","flutter/lifecycle","flutter/system","flutter/textinput","flutter/platform","flutter/navigation","flutter/keyevent","flutter/accessibility","flutter/restoration","flutter/mousecursor","flutter/settings","flutter/skia","flutter/spellcheck"],tags:[{tag:"rasp-vendor",weight:5,note:"Named commercial RASP or hardening product. Highest-signal match.",keywords:["dexguard","promon","shield","appdome","guardsquare","talsec","freerasp","verimatrix","zimperium","appsealing","inauth","arxan","digital.ai","jscrambler","buildfire"]},{tag:"root-detect",weight:4,note:"Device-integrity and tamper checks; the usual first blocker on an engagement.",keywords:["jailbreak","jailbroken","rooted","root_check","rootcheck","rootbeer","magisk","xposed","supersu","busybox","tamper","integrity","safetynet","playintegrity","attestation","emulator","simulator","debugger","antidebug","frida","substrate","cydia","hooking","rasp"]},{tag:"pinning",weight:4,note:"Certificate validation and pinning surfaces.",keywords:["pinning","certpin","sslpin","trustmanager","trust_manager","x509","certificate","truststore","ssl","tls","mitm"]},{tag:"crypto",weight:3,note:"Key material and cryptographic operations.",keywords:["crypto","cipher","encrypt","decrypt","keystore","keychain","secretkey","privatekey","signing","signature","hmac","aes","rsa","seed","mnemonic","entropy"]},{tag:"auth",weight:3,note:"Authentication, session, and biometric gates.",keywords:["auth","login","logout","session","token","refresh_token","bearer","oauth","credential","password","passcode","pincode","biometric","fingerprint","faceid","touchid","localauth","mfa","otp","2fa"]},{tag:"storage",weight:2,note:"Local persistence where secrets tend to land.",keywords:["secure_storage","securestorage","sharedpreferences","userdefaults","sqlite","database","realm","hive","cache","vault","wallet"]},{tag:"network",weight:2,note:"Transport configuration and proxy or VPN awareness.",keywords:["proxy","vpn","http","socket","websocket","grpc","api_client","interceptor","dns"]},{tag:"payment",weight:3,note:"Payment and card handling, high-value in fintech targets.",keywords:["payment","card","pan","cvv","emv","nfc","hce","transaction","transfer","billing","purchase"]},{tag:"security-generic",weight:2,note:"Generic security naming. Deliberately low-weight: it catches in-house channels like `app/security_check` that no specific tag would, at the cost of some noise.",keywords:["security","secure","protection","protect","threat","harden","obfusc","antifraud","anti_fraud","fraud","risk"]},{tag:"native-bridge",weight:1,note:"Custom bridges are worth reading regardless of naming.",keywords:["native","bridge","platform_channel","jni","ffi","plugin"]},{tag:"pii",weight:2,note:"Direct handling of personal data.",keywords:["location","gps","contacts","camera","microphone","clipboard","screenshot","screen_capture","biometrics","identity","kyc","passport","ssn"]}]};var qf=mn.tags.map(t=>({tag:t.tag,weight:t.weight,keywords:t.keywords.map(e=>e.toLowerCase())})),Kf=mn.ignore.map(t=>t.toLowerCase());function We(t){let e=t.toLowerCase();if(Kf.some(o=>e.includes(o)))return{score:0,tags:[],ignored:!0};let n=0,r=[];for(let o of qf)o.keywords.some(s=>e.includes(s))&&(n+=o.weight,r.push(o.tag));return{score:n,tags:r,ignored:!1}}function qe(t){return!t.ignored&&t.score>=ie().scoreThreshold}var ti=mn.name;var Qf=new ke,ii=new ke,Yf=new ke,Xf=new ke,ni=new Map,gt=new Map,ep=512;function tp(t){return me.use(t)}var np=new ke;function at(t){let e=ei(tp,t);if(e!==null)return e;let n=null;return K("flutter/android/loader-search",()=>{me.enumerateClassLoaders({onMatch(r){if(n===null)try{r.loadClass(t),n=me.ClassFactory.get(r).use(t),np.first("loader:"+t)&&L.detail("resolved "+t+" via "+r.$className)}catch{}},onComplete(){}})}),n}function ri(t,e){if(t==null)return null;for(let n of e)try{let r=t[n];if(r==null)continue;let o=r.value;if(o!=null)return String(o)}catch{}return null}var oi=null;function si(t){if(t==null)return null;try{return oi??=me.use("java.lang.System"),String(oi.identityHashCode(t))}catch{return null}}function ai(t,e,n){if(!t||!Qf.first(e+":"+t))return;let r=We(t);ce("channel",{name:t,kind:e,via:n,score:r.score,tags:r.tags});let o="["+e+"] "+t;qe(r)?(L.hit(o),L.detail("score "+r.score+" \xB7 "+r.tags.join(", "))):ie().verbose&&!r.ignored&&L.info(o)}function ro(t,e){if(!yt.first("ctor:"+t))return;let n=at(t);if(n===null){L.detail(t+" not present on this engine version");return}K("flutter/android/ctor/"+e,()=>{n.$init.overloads.forEach(r=>{Be("flutter/android/ctor/"+e,r,(o,s)=>{let i=s.find(l=>typeof l=="string");typeof i=="string"&&ai(i,e,"registration")})})})}function rp(){if(!yt.first("set-handler"))return;let t=at("io.flutter.plugin.common.MethodChannel");t!==null&&K("flutter/android/set-handler",()=>{t.setMethodCallHandler.overloads.forEach(e=>{Be("flutter/android/set-handler",e,(n,r)=>{let o=r[0];if(o==null)return;let s=op(n);s!==null&&sp(o.$className,s)})})})}function op(t){if(t==null)return null;for(let e of["name","channel"])try{let n=t[e];if(n!==void 0&&n.value!==void 0&&n.value!==null)return String(n.value)}catch{}return null}function sp(t,e){if(ni.set(t,e),!ie().captureCalls||!Yf.first(t))return;let n=at(t);n===null||n.onMethodCall===void 0||K("flutter/android/handler/"+t,()=>{n.onMethodCall.overloads.forEach(r=>{Be("flutter/android/on-method-call",r,(o,s)=>{let i=s[0],l=s[1],a=(o!=null?ni.get(o.$className):void 0)??e,c=ri(i,["method"])??"<unknown>",d=ri(i,["_arguments","arguments"]),p=We(a+"/"+c);ce("call",{channel:a,method:c,args:Ve(d),score:p.score,tags:p.tags});let h=a+" \u2192 "+c+"("+(Ve(d)??"")+")";qe(p)?L.hit(h):ie().verbose&&L.note(h),l!=null&&ip(l,a,c)})})})}function ip(t,e,n){let r=si(t);if(r===null)return;if(gt.size>=ep){let i=gt.keys().next();i.done||gt.delete(i.value)}gt.set(r,{channel:e,method:n});let o=t.$className;if(!Xf.first(o))return;let s=at(o);s!==null&&K("flutter/android/result/"+o,()=>{let i=(l,a)=>{s[l]!==void 0&&s[l].overloads.forEach(c=>{Be("flutter/android/result/"+a,c,(d,p)=>{let h=si(d);if(h===null)return;let u=gt.get(h);if(u===void 0)return;gt.delete(h);let g=p.length>0?p[0]:void 0,_=g==null?null:String(g);ce("result",{channel:u.channel,method:u.method,outcome:a,value:Ve(_)});let y=We(u.channel+"/"+u.method),v="\u21B3 "+a+": "+(Ve(_)??"<void>");qe(y)?L.hit("    "+v):ie().verbose&&L.detail(v)})})};i("success","success"),i("error","error"),i("notImplemented","notImplemented")})}function ap(){if(!yt.first("messenger"))return;let t=["io.flutter.embedding.engine.dart.DartMessenger","io.flutter.view.FlutterNativeView"];for(let e of t){let n=at(e);n!==null&&K("flutter/android/messenger/"+e,()=>{for(let r of["send","handleMessageFromDart","dispatchMessageToQueue"])n[r]!==void 0&&n[r].overloads.forEach(o=>{Be("flutter/android/messenger",o,(s,i)=>{let l=i.find(a=>typeof a=="string");typeof l=="string"&&ai(l,"method","messenger")})})})}}function li(t,e){if(!t||!ii.first(t))return;let n=We(t);ce("plugin",{name:t,source:e}),qe(n)?L.hit("[plugin] "+t+"  ("+n.tags.join(", ")+")"):L.info("[plugin] "+t)}function lp(){if(!yt.first("plugin-registry"))return;let t=at("io.flutter.embedding.engine.FlutterEngineConnectionRegistry");t===null||t.add===void 0||K("flutter/android/plugin-registry",()=>{t.add.overloads.forEach(e=>{Be("flutter/android/plugin-add",e,(n,r)=>{let o=r[0];o!=null&&o.$className!==void 0&&li(o.$className,"registry")})})})}function ci(){me.perform(()=>{L.section("Flutter Plugins"),K("flutter/android/plugin-scan",()=>{me.enumerateLoadedClasses({onMatch(t){t.startsWith("io.flutter.plugins.")&&t.endsWith("Plugin")&&li(t,"loaded-classes")},onComplete(){}})}),ii.size===0&&L.detail("no plugins seen yet \u2014 they register as the app starts up")})}var yt=new ke,di=!1;function cp(){yt.first("retry-hook")&&K("flutter/android/retry-hook",()=>{let t=me.use("android.app.Instrumentation");t.callApplicationOnCreate!==void 0&&t.callApplicationOnCreate.overloads.forEach(e=>{Be("flutter/android/retry",e,()=>{di||_n()})})})}function _n(){me.perform(()=>{let t=yt.first("section-header");if(t&&L.section("Flutter Platform Channels (Android)"),at("io.flutter.plugin.common.MethodChannel")===null){t&&L.detail("Flutter classes not loaded yet \u2014 will retry as the app starts"),cp();return}di=!0,dp(),t||L.detail("Flutter classes resolved on retry \u2014 channel hooks installed")})}function dp(){me.perform(()=>{ro("io.flutter.plugin.common.MethodChannel","method"),ro("io.flutter.plugin.common.EventChannel","event"),ro("io.flutter.plugin.common.BasicMessageChannel","message"),rp(),ap(),lp(),L.detail("Hooks installed \u2014 exercise the app to populate the model.")})}function gn(t){return t.find(e=>{let n=e.name.toLowerCase();return n==="libflutter.so"||n==="flutter"})??null}function zt(t){return t.find(e=>{let n=e.name.toLowerCase();return n==="libapp.so"||n==="app"})??null}function ui(t){return t?.name??"the Dart payload"}function up(t){let e=t.split(`
`)[0]?.trim()??t.trim(),n=/^(?:Dart (?:SDK|VM) version:\s*)?([0-9]+\.[0-9]+\.[0-9]+(?:[-+][\w.]+)?)\s*(?:\(([^)]*)\))?/.exec(e),r=/\bon\s+"([^"]+)"/.exec(e);return{sdk:n?.[1]??null,channel:n?.[2]??null,arch:r?.[1]??null,raw:e}}function fp(t){return t.length>200?!1:/^dart:[a-z_][a-z0-9_]*$/.test(t)||/^package:[a-z0-9_]+$/.test(t)?!0:/^package:[a-z0-9_]+\/[A-Za-z0-9_./-]+\.dart$/.test(t)}function hi(t){return/^package:([a-z0-9_]+)(?:\/|$)/.exec(t)?.[1]??null}function pp(t){let e=[];return t.aotSnapshot&&e.push("AOT snapshot present"),t.vmServiceStrings&&e.push("VM-service strings in engine"),t.kernelBlob&&e.push("kernel blob present"),t.kernelBlob&&!t.aotSnapshot?{mode:"debug",evidence:e}:t.aotSnapshot&&t.vmServiceStrings?{mode:"profile",evidence:e}:t.aotSnapshot?{mode:"release",evidence:e}:t.vmServiceStrings?{mode:"debug",evidence:e}:{mode:"unknown",evidence:e}}var hp=["_kDartVmSnapshotData","_kDartVmSnapshotInstructions","_kDartIsolateSnapshotData","_kDartIsolateSnapshotInstructions"],bt={dartVersion:"44 61 72 74 20 53 44 4b 20 76 65 72 73 69 6f 6e 3a 20",dartVmVersion:"44 61 72 74 20 56 4d 20 76 65 72 73 69 6f 6e 3a 20",vmService:"76 6d 20 73 65 72 76 69 63 65 20 69 73 20 6c 69 73 74 65 6e 69 6e 67 20 6f 6e",observatory:"4f 62 73 65 72 76 61 74 6f 72 79 20 6c 69 73 74 65 6e 69 6e 67 20 6f 6e",packageUri:"70 61 63 6b 61 67 65 3a"},yn=4e3;function mi(t){return K("dart/ranges",()=>t.enumerateRanges("r--"))??[]}function oo(t,e,n){let r=[];for(let o of mi(t)){if(r.length>=n)break;let s=K("dart/scan",()=>Memory.scanSync(o.base,o.size,e))??[],i=o.base.add(o.size);for(let l of s)if(r.push({address:l.address,limit:i}),r.length>=n)break}return r}function mp(t,e,n,r){let o=K("dart/scan-range",()=>Memory.scanSync(t,e,n))??[],s=t.add(e);return o.slice(0,r).map(i=>({address:i.address,limit:s}))}function _p(t,e,n){let r=t.add(e);return n.some(o=>{let s=o.base.add(o.size);return t.compare(o.base)>=0&&r.compare(s)<=0})}function gp(t){let e=K("dart/version-export",()=>t.findExportByName("Dart_VersionString"));return e==null?null:K("dart/version-call",()=>{let r=new NativeFunction(e,"pointer",[])();return r.isNull()?null:r.readCString(256)})??null}function fi(t,e,n){let r=oo(t,e,1)[0];return r===void 0?null:_i(r.address,n,r.limit)}function pi(t,e){return oo(t,e,1).length>0}function _i(t,e,n){let r=e;if(n!==void 0){let l=n.sub(t).toInt32();if(l<=0)return null;r=Math.min(e,l)}let o=K("dart/read-printable",()=>t.readByteArray(r));if(o==null)return null;let s=new Uint8Array(o),i=0;for(;i<s.length;){let l=s[i];if(l<32||l>126)break;i++}return i===0?null:String.fromCharCode(...s.subarray(0,i))}function yp(t){let e=t.path;return typeof e!="string"||!e.startsWith("/")?!1:!e.includes("!")&&!e.includes(".apk")}function bp(t){let e=[],n=ie().dartSymbolTable&&yp(t);ie().dartSymbolTable&&!n&&L.detail("symbol table skipped \u2014 "+t.name+" is mapped from an archive");let r=n?K("dart/enumerate-symbols",()=>t.enumerateSymbols()):void 0;for(let o of hp){let s=r?.find(l=>l.name===o||l.name===o.replace(/^_/,""));if(s!==void 0){e.push({name:o,address:s.address.toString(),size:s.size??null});continue}let i=K("dart/find-export",()=>t.findExportByName(o));i!=null&&e.push({name:o,address:i.toString(),size:null})}return e}function vp(t,e){let n=new ke,r=[],o=new Set,s=e.find(c=>c.name==="_kDartIsolateSnapshotData"&&c.size!==null&&c.size>0),i=mi(t),l=s!==void 0&&s.size!==null&&_p(ptr(s.address),s.size,i),a=l&&s!==void 0&&s.size!==null?mp(ptr(s.address),s.size,bt.packageUri,yn):oo(t,bt.packageUri,yn);L.detail("scanned "+(l?"isolate snapshot data":t.name+" mappings")+" \xB7 "+a.length+" candidate(s)");for(let c of a){let d=_i(c.address,200,c.limit);if(d===null||!fp(d)||!n.first(d))continue;r.push(d);let p=hi(d);p!==null&&o.add(p)}return a.length>=yn&&L.detail("library recovery capped at "+yn+" candidates"),{uris:r,packages:Array.from(o).sort()}}function gi(t){L.section("Dart Runtime");let e=gn(t),n=zt(t);if(e===null&&n===null){L.warn("No Flutter engine or Dart payload in this process \u2014 nothing to enumerate.");return}let r=null;if(e!==null){let c=gp(e)??fi(e,bt.dartVersion,256)??fi(e,bt.dartVmVersion,256);c!==null&&(r=up(c))}let o=n!==null?bp(n):[],s=o.some(c=>c.name.endsWith("Instructions")),i=e!==null&&(pi(e,bt.vmService)||pi(e,bt.observatory)),l=pp({aotSnapshot:s||n!==null,vmServiceStrings:i,kernelBlob:!1}),a=n!==null&&ie().dartLibraryScan?vp(n,o):{uris:[],packages:[]};ce("dart",{sdk:r?.sdk??null,channel:r?.channel??null,arch:r?.arch??null,versionRaw:r?.raw??null,buildMode:l.mode,buildModeEvidence:l.evidence,snapshot:o,libraryCount:a.uris.length,packages:a.packages});for(let c of a.uris)ce("dart.library",{uri:c,package:hi(c)});if(r!==null?(L.info(ge("Dart SDK",14)+": "+(r.sdk??"unknown")),r.channel!==null&&L.detail("channel: "+r.channel+(r.arch?" \xB7 "+r.arch:""))):L.warn("Dart version string not found in the engine binary."),l.mode==="release"?L.info(ge("Build mode",14)+": release"):l.mode==="unknown"?L.warn(ge("Build mode",14)+": unknown"):(L.hit(ge("Build mode",14)+": "+l.mode),L.detail("a non-release build exposes the VM service \u2014 full class and"),L.detail("function enumeration is available without snapshot parsing")),l.evidence.length>0&&L.detail("evidence: "+l.evidence.join("; ")),o.length>0){L.info(ge("Snapshot",14)+": "+o.length+" section(s)");for(let c of o)L.detail(c.name+" @ "+c.address+(c.size!==null?" ("+c.size+" bytes)":""))}else n!==null&&L.warn(ui(n)+" present but no snapshot symbols \u2014 stripped or packed.");a.packages.length>0?(L.info(ge("Dart packages",14)+": "+a.packages.length),L.detail(a.packages.join(", ")),L.detail(a.uris.length+" library URIs recovered")):n!==null&&L.warn("No Dart library URIs recovered \u2014 snapshot may be packed or obfuscated.")}var bn=null,Dt={exceptions:"propagate"};function Ut(){if(bn!==null)return bn;let t={},e=[{module:"libsystem_malloc.dylib",functions:{free:["void",["pointer"]]}},{module:"libobjc.A.dylib",functions:{objc_msgSend:function(r){this.objc_msgSend=r},objc_msgSend_stret:function(r){this.objc_msgSend_stret=r},objc_msgSend_fpret:function(r){this.objc_msgSend_fpret=r},objc_msgSendSuper:function(r){this.objc_msgSendSuper=r},objc_msgSendSuper_stret:function(r){this.objc_msgSendSuper_stret=r},objc_msgSendSuper_fpret:function(r){this.objc_msgSendSuper_fpret=r},objc_getClassList:["int",["pointer","int"]],objc_lookUpClass:["pointer",["pointer"]],objc_allocateClassPair:["pointer",["pointer","pointer","pointer"]],objc_disposeClassPair:["void",["pointer"]],objc_registerClassPair:["void",["pointer"]],class_isMetaClass:["bool",["pointer"]],class_getName:["pointer",["pointer"]],class_getImageName:["pointer",["pointer"]],class_copyProtocolList:["pointer",["pointer","pointer"]],class_copyMethodList:["pointer",["pointer","pointer"]],class_getClassMethod:["pointer",["pointer","pointer"]],class_getInstanceMethod:["pointer",["pointer","pointer"]],class_getSuperclass:["pointer",["pointer"]],class_addProtocol:["bool",["pointer","pointer"]],class_addMethod:["bool",["pointer","pointer","pointer","pointer"]],class_copyIvarList:["pointer",["pointer","pointer"]],objc_getProtocol:["pointer",["pointer"]],objc_copyProtocolList:["pointer",["pointer"]],objc_allocateProtocol:["pointer",["pointer"]],objc_registerProtocol:["void",["pointer"]],protocol_getName:["pointer",["pointer"]],protocol_copyMethodDescriptionList:["pointer",["pointer","bool","bool","pointer"]],protocol_copyPropertyList:["pointer",["pointer","pointer"]],protocol_copyProtocolList:["pointer",["pointer","pointer"]],protocol_addProtocol:["void",["pointer","pointer"]],protocol_addMethodDescription:["void",["pointer","pointer","pointer","bool","bool"]],ivar_getName:["pointer",["pointer"]],ivar_getTypeEncoding:["pointer",["pointer"]],ivar_getOffset:["pointer",["pointer"]],object_isClass:["bool",["pointer"]],object_getClass:["pointer",["pointer"]],object_getClassName:["pointer",["pointer"]],method_getName:["pointer",["pointer"]],method_getTypeEncoding:["pointer",["pointer"]],method_getImplementation:["pointer",["pointer"]],method_setImplementation:["pointer",["pointer","pointer"]],property_getName:["pointer",["pointer"]],property_copyAttributeList:["pointer",["pointer","pointer"]],sel_getName:["pointer",["pointer"]],sel_registerName:["pointer",["pointer"]],class_getInstanceSize:["pointer",["pointer"]]},optionals:{objc_msgSend_stret:"ABI",objc_msgSend_fpret:"ABI",objc_msgSendSuper_stret:"ABI",objc_msgSendSuper_fpret:"ABI",object_isClass:"iOS8"}},{module:"libdispatch.dylib",functions:{dispatch_async_f:["void",["pointer","pointer","pointer"]]},variables:{_dispatch_main_q:function(r){this._dispatch_main_q=r}}}],n=0;return e.forEach(function(r){let o=r.functions||{},s=r.variables||{},i=r.optionals||{};n+=Object.keys(o).length+Object.keys(s).length;let l=(Process.findModuleByName(r.module)?.enumerateExports()??[]).reduce(function(a,c){return a[c.name]=c,a},{});Object.keys(o).forEach(function(a){let c=l[a];if(c!==void 0&&c.type==="function"){let d=o[a];typeof d=="function"?d.call(t,c.address):t[a]=new NativeFunction(c.address,d[0],d[1],Dt),n--}else i[a]&&n--}),Object.keys(s).forEach(function(a){let c=l[a];c!==void 0&&c.type==="variable"&&(s[a].call(t,c.address),n--)})}),n===0&&(t.objc_msgSend_stret||(t.objc_msgSend_stret=t.objc_msgSend),t.objc_msgSend_fpret||(t.objc_msgSend_fpret=t.objc_msgSend),t.objc_msgSendSuper_stret||(t.objc_msgSendSuper_stret=t.objc_msgSendSuper),t.objc_msgSendSuper_fpret||(t.objc_msgSendSuper_fpret=t.objc_msgSendSuper),bn=t),bn}var Sp=`#include <glib.h>
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
`,{pointerSize:Ep}=Process,so=null;function yi(){return so===null&&(so=wp()),so}function wp(){let{objc_getClassList:t,class_getSuperclass:e,class_getInstanceSize:n}=Ut(),r=Memory.alloc(4);r.writeU32(Module.getGlobalExportByName("mach_task_self_").readU32());let o=new CModule(Sp,{objc_getClassList:t,class_getSuperclass:e,class_getInstanceSize:n,malloc_get_all_zones:Process.getModuleByName("/usr/lib/system/libsystem_malloc.dylib").getExportByName("malloc_get_all_zones"),selfTask:r}),s=new NativeFunction(o.choose,"pointer",["pointer","bool","pointer"]),i=new NativeFunction(o.destroy,"void",["pointer"]);return{handle:o,choose(l,a){let c=[],d=Memory.alloc(4),p=s(l,a?1:0,d);try{let h=d.readU32();for(let u=0;u!==h;u++)c.push(p.add(u*Ep).readPointer())}finally{i(p)}return c}}}function kp(){let pointerSize=Process.pointerSize,api=null,apiError=null,realizedClasses=new Set,classRegistry=new ClassRegistry,protocolRegistry=new ProtocolRegistry,replacedMethods=new Map,scheduledWork=new Map,nextId=1,workCallback=null,NSAutoreleasePool=null,bindings=new Map,readObjectIsa=null,msgSendBySignatureId=new Map,msgSendSuperBySignatureId=new Map,cachedNSString=null,cachedNSStringCtor=null,cachedNSNumber=null,cachedNSNumberCtor=null,singularTypeById=null,modifiers=null;try{tryInitialize()}catch(t){}function tryInitialize(){if(api!==null)return!0;if(apiError!==null)throw apiError;try{api=Ut()}catch(t){throw apiError=t,t}return api!==null}function dispose(){for(let[t,e]of replacedMethods.entries()){let n=ptr(t),[r,o]=e;api.method_getImplementation(n).equals(o)&&api.method_setImplementation(n,r)}replacedMethods.clear()}Script.bindWeak(this,dispose),Object.defineProperty(this,"available",{enumerable:!0,get(){return tryInitialize()}}),Object.defineProperty(this,"api",{enumerable:!0,get(){return Ut()}}),Object.defineProperty(this,"classes",{enumerable:!0,value:classRegistry}),Object.defineProperty(this,"protocols",{enumerable:!0,value:protocolRegistry}),Object.defineProperty(this,"Object",{enumerable:!0,value:ObjCObject}),Object.defineProperty(this,"Protocol",{enumerable:!0,value:ObjCProtocol}),Object.defineProperty(this,"Block",{enumerable:!0,value:Block}),Object.defineProperty(this,"mainQueue",{enumerable:!0,get(){return api?._dispatch_main_q??null}}),Object.defineProperty(this,"registerProxy",{enumerable:!0,value:registerProxy}),Object.defineProperty(this,"registerClass",{enumerable:!0,value:registerClass}),Object.defineProperty(this,"registerProtocol",{enumerable:!0,value:registerProtocol}),Object.defineProperty(this,"bind",{enumerable:!0,value:bind}),Object.defineProperty(this,"unbind",{enumerable:!0,value:unbind}),Object.defineProperty(this,"getBoundData",{enumerable:!0,value:getBoundData}),Object.defineProperty(this,"enumerateLoadedClasses",{enumerable:!0,value:enumerateLoadedClasses}),Object.defineProperty(this,"enumerateLoadedClassesSync",{enumerable:!0,value:enumerateLoadedClassesSync}),Object.defineProperty(this,"choose",{enumerable:!0,value:choose}),Object.defineProperty(this,"chooseSync",{enumerable:!0,value(t){let e=[];return choose(t,{onMatch(n){e.push(n)},onComplete(){}}),e}}),this.schedule=function(t,e){let n=ptr(nextId++);scheduledWork.set(n.toString(),e),workCallback===null&&(workCallback=new NativeCallback(performScheduledWorkItem,"void",["pointer"])),Script.pin(),api.dispatch_async_f(t,n,workCallback)};function performScheduledWorkItem(t){let e=t.toString(),n=scheduledWork.get(e);scheduledWork.delete(e),NSAutoreleasePool===null&&(NSAutoreleasePool=classRegistry.NSAutoreleasePool);let r=NSAutoreleasePool.alloc().init(),o=null;try{n()}catch(s){o=s}r.release(),setImmediate(performScheduledWorkCleanup,o)}function performScheduledWorkCleanup(t){if(Script.unpin(),t!==null)throw t}this.implement=function(t,e){return new NativeCallback(e,t.returnType,t.argumentTypes)},this.selector=selector,this.selectorAsString=selectorAsString;function selector(t){return api.sel_registerName(Memory.allocUtf8String(t))}function selectorAsString(t){return api.sel_getName(t).readCString()}let registryBuiltins=new Set(["prototype","constructor","hasOwnProperty","toJSON","toString","valueOf"]);function ClassRegistry(){let t=new Map,e=0,n=new Proxy(this,{has(c,d){return r(d)},get(c,d,p){switch(d){case"prototype":return c.prototype;case"constructor":return c.constructor;case"hasOwnProperty":return r;case"toJSON":return i;case"toString":return l;case"valueOf":return a;default:let h=s(d);return h!==null?h:void 0}},set(c,d,p,h){return!1},ownKeys(c){if(api===null)return[];let d=api.objc_getClassList(NULL,0);if(d!==e){let p=d,h=Memory.alloc(p*pointerSize);d=api.objc_getClassList(h,p),d>p&&(d=p);for(let u=0;u!==d;u++){let g=h.add(u*pointerSize).readPointer(),_=api.class_getName(g).readCString();t.set(_,g)}e=d}return Array.from(t.keys())},getOwnPropertyDescriptor(c,d){return{writable:!1,configurable:!0,enumerable:!0}}});function r(c){return registryBuiltins.has(c)?!0:s(c)!==null}function o(c){let d=s(c);if(d===null)throw new Error("Unable to find class '"+c+"'");return d}function s(c){let d=t.get(c);if(d===void 0){if(d=api.objc_lookUpClass(Memory.allocUtf8String(c)),d.isNull())return null;t.set(c,d),e++}return new ObjCObject(d,void 0,!0)}function i(){return Object.keys(n).reduce(function(c,d){return c[d]=o(d).toJSON(),c},{})}function l(){return"ClassRegistry"}function a(){return"ClassRegistry"}return n}function ProtocolRegistry(){let t=new Map,e=0,n=new Proxy(this,{has(a,c){return r(c)},get(a,c,d){switch(c){case"prototype":return a.prototype;case"constructor":return a.constructor;case"hasOwnProperty":return r;case"toJSON":return s;case"toString":return i;case"valueOf":return l;default:let p=o(c);return p!==null?p:void 0}},set(a,c,d,p){return!1},ownKeys(a){if(api===null)return[];let c=Memory.alloc(pointerSize),d=api.objc_copyProtocolList(c);try{let p=c.readUInt();if(p!==e){t.clear();for(let h=0;h!==p;h++){let u=d.add(h*pointerSize).readPointer(),g=api.protocol_getName(u).readCString();t.set(g,u)}e=p}}finally{api.free(d)}return Array.from(t.keys())},getOwnPropertyDescriptor(a,c){return{writable:!1,configurable:!0,enumerable:!0}}});function r(a){return registryBuiltins.has(a)?!0:o(a)!==null}function o(a){let c=t.get(a);if(c===void 0){if(c=api.objc_getProtocol(Memory.allocUtf8String(a)),c.isNull())return null;t.set(a,c),e++}return new ObjCProtocol(c)}function s(){return Object.keys(n).reduce(function(a,c){return a[c]={handle:t.get(c)},a},{})}function i(){return"ProtocolRegistry"}function l(){return"ProtocolRegistry"}return n}let objCObjectBuiltins=new Set(["prototype","constructor","handle","hasOwnProperty","toJSON","toString","valueOf","equals","$kind","$super","$superClass","$class","$className","$moduleName","$protocols","$methods","$ownMethods","$ivars"]);function ObjCObject(t,e,n,r){let o=null,s=null,i=null,l=null,a=null,c=null,d=null,p=null,h=null,u=null,g=null,_=new Map,y=null,v=null,S=null;if(t=getHandle(t),n===void 0){let T=api.object_getClass(t),w=T.toString();realizedClasses.has(w)||(api.objc_lookUpClass(api.class_getName(T)),realizedClasses.add(w))}let C=new Proxy(this,{has(T,w){return x(w)},get(T,w,J){switch(w){case"handle":return t;case"prototype":return T.prototype;case"constructor":return T.constructor;case"hasOwnProperty":return x;case"toJSON":return W;case"toString":case"valueOf":let G=J.description;if(G!==void 0){let B=G.call(J);if(B!==null)return B.UTF8String.bind(B)}return function(){return J.$className};case"equals":return q;case"$kind":return s===null&&(F()?s=api.class_isMetaClass(t)?"meta-class":"class":s="instance"),s;case"$super":if(i===null){let B=api.class_getSuperclass(A());if(B.isNull())i=[null];else{let Z=Memory.alloc(2*pointerSize);Z.writePointer(t),Z.add(pointerSize).writePointer(B),i=[new ObjCObject(t,void 0,n,Z)]}}return i[0];case"$superClass":if(l===null){let B=api.class_getSuperclass(A());B.isNull()?l=[null]:l=[new ObjCObject(B)]}return l[0];case"$class":return a===null&&(a=new ObjCObject(api.object_getClass(t),void 0,!0)),a;case"$className":return c===null&&(r?c=api.class_getName(r.add(pointerSize).readPointer()).readCString():F()?c=api.class_getName(t).readCString():c=api.object_getClassName(t).readCString()),c;case"$moduleName":return d===null&&(d=api.class_getImageName(A()).readCString()),d;case"$protocols":if(p===null){p={};let B=Memory.alloc(pointerSize),Z=api.class_copyProtocolList(A(),B);if(!Z.isNull())try{let X=B.readUInt();for(let H=0;H!==X;H++){let ae=Z.add(H*pointerSize).readPointer(),ye=new ObjCProtocol(ae);p[ye.name]=ye}}finally{api.free(Z)}}return p;case"$methods":if(y===null){let B=r?r.add(pointerSize).readPointer():A(),Z=api.object_getClass(B),X=new Set,H=Z;do{for(let ae of collectMethodNames(H,"+ "))X.add(ae);H=api.class_getSuperclass(H)}while(!H.isNull());H=B;do{for(let ae of collectMethodNames(H,"- "))X.add(ae);H=api.class_getSuperclass(H)}while(!H.isNull());y=Array.from(X)}return y;case"$ownMethods":if(v===null){let B=r?r.add(pointerSize).readPointer():A(),Z=api.object_getClass(B),X=collectMethodNames(Z,"+ "),H=collectMethodNames(B,"- ");v=X.concat(H)}return v;case"$ivars":return S===null&&(F()?S={}:S=new ObjCIvars(C,A())),S;default:if(typeof w=="symbol")return T[w];if(e){let B=M(w);if(B===null||!B.implemented)return}let Q=N(w);return Q===null?void 0:Q}},set(T,w,J,G){return!1},ownKeys(T){if(h===null)if(e){let w=[],J=D();Object.keys(J).forEach(function(G){G[0]!=="+"&&G[0]!=="-"&&J[G].implemented&&w.push(G)}),h=w}else{let w={},J={},G=api.object_getClass(t);do{let Q=Memory.alloc(pointerSize),B=api.class_copyMethodList(G,Q),Z=F()?"+ ":"- ";try{let X=Q.readUInt();for(let H=0;H!==X;H++){let ae=B.add(H*pointerSize).readPointer(),ye=api.method_getName(ae),$=api.sel_getName(ye).readCString();if(J[$]!==void 0)continue;J[$]=$;let de=jsMethodName($),xe=2,Le=de;for(;w[Le]!==void 0;)xe++,Le=de+xe;w[Le]=!0;let Fe=Z+$;if(!_.has(Fe)){let Je={sel:ye,handle:ae,wrapper:null};_.set(Fe,Je),_.set(Le,Je)}}}finally{api.free(B)}G=api.class_getSuperclass(G)}while(!G.isNull());h=Object.keys(w)}return["handle"].concat(h)},getOwnPropertyDescriptor(T,w){return{writable:!1,configurable:!0,enumerable:!0}}});return e&&(g=F()?null:N("- respondsToSelector:")),C;function x(T){if(objCObjectBuiltins.has(T))return!0;if(e){let w=M(T);return!!(w!==null&&w.implemented)}return O(T)!==null}function A(){return o===null&&(o=F()?t:api.object_getClass(t)),o}function F(){return n===void 0&&(api.object_isClass?n=!!api.object_isClass(t):n=!!api.class_isMetaClass(api.object_getClass(t))),n}function O(T){let w=_.get(T);if(w!==void 0)return w;let J=U(T),G=J[2];if(w=_.get(G),w!==void 0)return _.set(T,w),w;let Q=J[0],B=J[1],Z=selector(B),X=F()?"+":"-";if(e){let H=M(G);H!==null&&(w={sel:Z,types:H.types,wrapper:null,kind:Q})}if(w===void 0){let H=Q==="+"?api.class_getClassMethod(A(),Z):api.class_getInstanceMethod(A(),Z);if(!H.isNull())w={sel:Z,handle:H,wrapper:null,kind:Q};else{if(F()||Q!=="-"||B==="forwardingTargetForSelector:"||B==="methodSignatureForSelector:")return null;let ae=C;if("- forwardingTargetForSelector:"in C){let de=C.forwardingTargetForSelector_(Z);if(de!==null&&de.$kind==="instance")ae=de;else return null}else return null;let ye=api.class_getInstanceMethod(api.object_getClass(ae.handle),Z);if(ye.isNull())return null;let $=api.method_getTypeEncoding(ye).readCString();if(($===null||$==="")&&($=P(ae,G),$===null&&($=P(C,G)),$===null))return null;w={sel:Z,types:$,wrapper:null,kind:Q}}}return _.set(G,w),_.set(T,w),Q===X&&_.set(jsMethodName(B),w),w}function P(T,w){let G=Object.keys(T.$protocols).map(Q=>k({},T.$protocols[Q])).reduce((Q,B)=>(Object.assign(Q,B),Q),{})[w];return G===void 0?null:G.types}function k(T,w){return w.methods!==void 0&&Object.assign(T,w.methods),w.protocol!==void 0&&k(T,w.protocol),T}function M(T){let J=D()[T];return J!==void 0?J:null}function D(){if(u===null){let T={},w=collectProtocols(e),J=F()?"+":"-";Object.keys(w).forEach(function(G){let B=w[G].methods;Object.keys(B).forEach(function(Z){let X=B[Z],H=Z.substr(2),ae=Z[0],ye=!1,$=!1,de={types:X.types};Object.defineProperty(de,"implemented",{get(){return ye||(X.required?$=!0:$=g!==null&&g.call(C,selector(H)),ye=!0),$}}),T[Z]=de,ae===J&&(T[jsMethodName(H)]=de)})}),u=T}return u}function N(T){let w=O(T);if(w===null)return null;let J=w.wrapper;return J===null&&(J=makeMethodInvocationWrapper(w,C,r,Dt),w.wrapper=J),J}function U(T){let w=/([+\-])\s(\S+)/.exec(T),J,G;w===null?(G=F()?"+":"-",J=objcMethodName(T)):(G=w[1],J=w[2]);let Q=[G,J].join(" ");return[G,J,Q]}function W(){return{handle:t.toString()}}function q(T){return t.equals(getHandle(T))}}function getReplacementMethodImplementation(t){let e=replacedMethods.get(t.toString());if(e===void 0)return null;let[,n]=e;return n}function replaceMethodImplementation(t,e){let n=t.toString(),r,o=replacedMethods.get(n);o!==void 0?[r]=o:r=api.method_getImplementation(t),e.equals(r)?replacedMethods.delete(n):replacedMethods.set(n,[r,e]),api.method_setImplementation(t,e)}function collectMethodNames(t,e){let n=[],r=Memory.alloc(pointerSize),o=api.class_copyMethodList(t,r);try{let s=r.readUInt();for(let i=0;i!==s;i++){let l=o.add(i*pointerSize).readPointer(),a=api.method_getName(l),c=api.sel_getName(a).readCString();n.push(e+c)}}finally{api.free(o)}return n}function ObjCProtocol(t){let e=null,n=null,r=null,o=null;Object.defineProperty(this,"handle",{value:t,enumerable:!0}),Object.defineProperty(this,"name",{get(){return e===null&&(e=api.protocol_getName(t).readCString()),e},enumerable:!0}),Object.defineProperty(this,"protocols",{get(){if(n===null){n={};let i=Memory.alloc(pointerSize),l=api.protocol_copyProtocolList(t,i);if(!l.isNull())try{let a=i.readUInt();for(let c=0;c!==a;c++){let d=l.add(c*pointerSize).readPointer(),p=new ObjCProtocol(d);n[p.name]=p}}finally{api.free(l)}}return n},enumerable:!0}),Object.defineProperty(this,"properties",{get(){if(r===null){r={};let i=Memory.alloc(pointerSize),l=api.protocol_copyPropertyList(t,i);if(!l.isNull())try{let a=i.readUInt();for(let c=0;c!==a;c++){let d=l.add(c*pointerSize).readPointer(),p=api.property_getName(d).readCString(),h={},u=api.property_copyAttributeList(d,i);if(!u.isNull())try{let g=i.readUInt();for(let _=0;_!==g;_++){let y=u.add(_*(2*pointerSize)),v=y.readPointer().readCString(),S=y.add(pointerSize).readPointer().readCString();h[v]=S}}finally{api.free(u)}r[p]=h}}finally{api.free(l)}}return r},enumerable:!0}),Object.defineProperty(this,"methods",{get(){if(o===null){o={};let i=Memory.alloc(pointerSize);s(o,i,{required:!0,instance:!1}),s(o,i,{required:!1,instance:!1}),s(o,i,{required:!0,instance:!0}),s(o,i,{required:!1,instance:!0})}return o},enumerable:!0});function s(i,l,a){let c=api.protocol_copyMethodDescriptionList(t,a.required?1:0,a.instance?1:0,l);if(!c.isNull())try{let d=l.readUInt();for(let p=0;p!==d;p++){let h=c.add(p*(2*pointerSize)),u=(a.instance?"- ":"+ ")+selectorAsString(h.readPointer()),g=h.add(pointerSize).readPointer().readCString();i[u]={required:a.required,types:g}}}finally{api.free(c)}}}let objCIvarsBuiltins=new Set(["prototype","constructor","hasOwnProperty","toJSON","toString","valueOf"]);function ObjCIvars(t,e){let n={},r=null,o=[],s=e;do o.unshift(s),s=api.class_getSuperclass(s);while(!s.isNull());let i=Memory.alloc(pointerSize);o.forEach(u=>{let g=api.class_copyIvarList(u,i);try{let _=i.readUInt();for(let y=0;y!==_;y++){let v=g.add(y*pointerSize).readPointer(),S=api.ivar_getName(v).readCString();n[S]=[v,null]}}finally{api.free(g)}});let l=new Proxy(this,{has(u,g){return c(g)},get(u,g,_){switch(g){case"prototype":return u.prototype;case"constructor":return u.constructor;case"hasOwnProperty":return c;case"toJSON":return d;case"toString":return p;case"valueOf":return h;default:let y=a(g);return y===null?void 0:y.get()}},set(u,g,_,y){let v=a(g);if(v===null)throw new Error("Unknown ivar");return v.set(_),!0},ownKeys(u){return r===null&&(r=Object.keys(n)),r},getOwnPropertyDescriptor(u,g){return{writable:!0,configurable:!0,enumerable:!0}}});return l;function a(u){let g=n[u];if(g===void 0)return null;let _=g[1];if(_===null){let y=g[0],v=api.ivar_getOffset(y).toInt32(),S=t.handle.add(v),C=parseType(api.ivar_getTypeEncoding(y).readCString()),x=C.fromNative||identityTransform,A=C.toNative||identityTransform,F,O;u==="isa"?(F=readObjectIsa,O=function(){throw new Error("Unable to set the isa instance variable")}):(F=C.read,O=C.write),_={get(){return x.call(t,F(S))},set(P){O(S,A.call(t,P))}},g[1]=_}return _}function c(u){return objCIvarsBuiltins.has(u)?!0:n.hasOwnProperty(u)}function d(){return Object.keys(l).reduce(function(u,g){return u[g]=l[g],u},{})}function p(){return"ObjCIvars"}function h(){return"ObjCIvars"}}let blockDescriptorAllocSize,blockDescriptorDeclaredSize,blockDescriptorOffsets,blockSize,blockOffsets;pointerSize===4?(blockDescriptorAllocSize=16,blockDescriptorDeclaredSize=20,blockDescriptorOffsets={reserved:0,size:4,rest:8},blockSize=20,blockOffsets={isa:0,flags:4,reserved:8,invoke:12,descriptor:16}):(blockDescriptorAllocSize=32,blockDescriptorDeclaredSize=32,blockDescriptorOffsets={reserved:0,size:8,rest:16},blockSize=32,blockOffsets={isa:0,flags:8,reserved:12,invoke:16,descriptor:24});let BLOCK_HAS_COPY_DISPOSE=1<<25,BLOCK_HAS_CTOR=1<<26,BLOCK_IS_GLOBAL=1<<28,BLOCK_HAS_STRET=1<<29,BLOCK_HAS_SIGNATURE=1<<30;function Block(t,e=Dt){if(this._options=e,t instanceof NativePointer){let n=t.add(blockOffsets.descriptor).readPointer();this.handle=t;let r=t.add(blockOffsets.flags).readU32();if((r&BLOCK_HAS_SIGNATURE)!==0){let o=(r&BLOCK_HAS_COPY_DISPOSE)!==0?2:0;this.types=n.add(blockDescriptorOffsets.rest+o*pointerSize).readPointer().readCString(),this._signature=parseSignature(this.types)}else this._signature=null}else{this.declare(t);let n=Memory.alloc(blockDescriptorAllocSize+blockSize),r=n.add(blockDescriptorAllocSize),o=Memory.allocUtf8String(this.types);n.add(blockDescriptorOffsets.reserved).writeULong(0),n.add(blockDescriptorOffsets.size).writeULong(blockDescriptorDeclaredSize),n.add(blockDescriptorOffsets.rest).writePointer(o),r.add(blockOffsets.isa).writePointer(classRegistry.__NSGlobalBlock__),r.add(blockOffsets.flags).writeU32(BLOCK_HAS_SIGNATURE|BLOCK_IS_GLOBAL),r.add(blockOffsets.reserved).writeU32(0),r.add(blockOffsets.descriptor).writePointer(n),this.handle=r,this._storage=[n,o],this.implementation=t.implementation}}Object.defineProperties(Block.prototype,{implementation:{enumerable:!0,get(){let t=this.handle.add(blockOffsets.invoke).readPointer().strip(),e=this._getSignature();return makeBlockInvocationWrapper(this,e,new NativeFunction(t.sign(),e.retType.type,e.argTypes.map(function(n){return n.type}),this._options))},set(t){let e=this._getSignature(),n=new NativeCallback(makeBlockImplementationWrapper(this,e,t),e.retType.type,e.argTypes.map(function(i){return i.type}));this._callback=n;let r=this.handle.add(blockOffsets.invoke),o=Memory.queryProtection(r),s=o.includes("w");s||Memory.protect(r,Process.pointerSize,"rw-"),r.writePointer(n.strip().sign("ia",r)),s||Memory.protect(r,Process.pointerSize,o)}},declare:{value(t){let e=t.types;e===void 0&&(e=unparseSignature(t.retType,["block"].concat(t.argTypes))),this.types=e,this._signature=parseSignature(e)}},_getSignature:{value(){let t=this._signature;if(t===null)throw new Error("block is missing signature; call declare()");return t}}});function collectProtocols(t,e){e=e||{},e[t.name]=t;let n=t.protocols;return Object.keys(n).forEach(function(r){collectProtocols(n[r],e)}),e}function registerProxy(t){let e=t.protocols||[],n=t.methods||{},r=t.events||{},o=new Set(Object.keys(n).filter(a=>/([+\-])\s(\S+)/.exec(a)!==null).map(a=>a.split(" ")[1])),s={"- dealloc":function(){let a=this.data.target;"- release"in a&&a.release(),unbind(this.self),this.super.dealloc();let c=this.data.events.dealloc;c!==void 0&&c.call(this)},"- respondsToSelector:":function(a){let c=selectorAsString(a);return o.has(c)?!0:this.data.target.respondsToSelector_(a)},"- forwardingTargetForSelector:":function(a){let c=this.data.events.forward;return c!==void 0&&c.call(this,selectorAsString(a)),this.data.target},"- methodSignatureForSelector:":function(a){return this.data.target.methodSignatureForSelector_(a)},"- forwardInvocation:":function(a){a.invokeWithTarget_(this.data.target)}};for(var i in n)if(n.hasOwnProperty(i)){if(s.hasOwnProperty(i))throw new Error("The '"+i+"' method is reserved");s[i]=n[i]}let l=registerClass({name:t.name,super:classRegistry.NSProxy,protocols:e,methods:s});return function(a,c){a=a instanceof NativePointer?new ObjCObject(a):a,c=c||{};let d=l.alloc().autorelease(),p=getBoundData(d);p.target="- retain"in a?a.retain():a,p.events=r;for(var h in c)if(c.hasOwnProperty(h)){if(p.hasOwnProperty(h))throw new Error("The '"+h+"' property is reserved");p[h]=c[h]}this.handle=d.handle}}function registerClass(t){let e=t.name;e===void 0&&(e=makeClassName());let n=t.super!==void 0?t.super:classRegistry.NSObject,r=t.protocols||[],o=t.methods||{},s=[],i=api.objc_allocateClassPair(n!==null?n.handle:NULL,Memory.allocUtf8String(e),ptr("0"));if(i.isNull())throw new Error("Unable to register already registered class '"+e+"'");let l=api.object_getClass(i);try{r.forEach(function(a){api.class_addProtocol(i,a.handle)}),Object.keys(o).forEach(function(a){let c=/([+\-])\s(\S+)/.exec(a);if(c===null)throw new Error("Invalid method name");let d=c[1],p=c[2],h,u=o[a];if(typeof u=="function"){let S=null;if(a in n)S=n[a].types;else for(let C of r){let x=C.methods[a];if(x!==void 0){S=x.types;break}}if(S===null)throw new Error("Unable to find '"+a+"' in super-class or any of its protocols");h={types:S,implementation:u}}else h=u;let g=d==="+"?l:i,_=h.types;_===void 0&&(_=unparseSignature(h.retType,[d==="+"?"class":"object","selector"].concat(h.argTypes)));let y=parseSignature(_),v=new NativeCallback(makeMethodImplementationWrapper(y,h.implementation),y.retType.type,y.argTypes.map(function(S){return S.type}));s.push(v),api.class_addMethod(g,selector(p),v,Memory.allocUtf8String(_))})}catch(a){throw api.objc_disposeClassPair(i),a}return api.objc_registerClassPair(i),i._methodCallbacks=s,Script.bindWeak(i,makeClassDestructor(ptr(i))),new ObjCObject(i)}function makeClassDestructor(t){return function(){api.objc_disposeClassPair(t)}}function registerProtocol(t){let e=t.name;e===void 0&&(e=makeProtocolName());let n=t.protocols||[],r=t.methods||{};n.forEach(function(i){if(!(i instanceof ObjCProtocol))throw new Error("Expected protocol")});let o=Object.keys(r).map(function(i){let l=r[i],a=/([+\-])\s(\S+)/.exec(i);if(a===null)throw new Error("Invalid method name");let c=a[1],d=a[2],p=l.types;return p===void 0&&(p=unparseSignature(l.retType,[c==="+"?"class":"object","selector"].concat(l.argTypes))),{kind:c,name:d,types:p,optional:l.optional}}),s=api.objc_allocateProtocol(Memory.allocUtf8String(e));if(s.isNull())throw new Error("Unable to register already registered protocol '"+e+"'");return n.forEach(function(i){api.protocol_addProtocol(s,i.handle)}),o.forEach(function(i){let l=i.optional?0:1,a=i.kind==="-"?1:0;api.protocol_addMethodDescription(s,selector(i.name),Memory.allocUtf8String(i.types),l,a)}),api.objc_registerProtocol(s),new ObjCProtocol(s)}function getHandle(t){if(t instanceof NativePointer)return t;if(typeof t=="object"&&t.hasOwnProperty("handle"))return t.handle;throw new Error("Expected NativePointer or ObjC.Object instance")}function bind(t,e){let n=getHandle(t),r=t instanceof ObjCObject?t:new ObjCObject(n);bindings.set(n.toString(),{self:r,super:r.$super,data:e})}function unbind(t){let e=getHandle(t);bindings.delete(e.toString())}function getBoundData(t){return getBinding(t).data}function getBinding(t){let e=getHandle(t),n=e.toString(),r=bindings.get(n);if(r===void 0){let o=t instanceof ObjCObject?t:new ObjCObject(e);r={self:o,super:o.$super,data:{}},bindings.set(n,r)}return r}function enumerateLoadedClasses(...t){let e=new ModuleMap,n=!1,r,o;t.length===1?r=t[0]:(r=t[1],o=t[0].ownedBy),o===void 0&&(o=e,n=!0);let s=api.class_getName,i=r.onMatch.bind(r),l=(pointerSize===8?8:11)*pointerSize,a=api.objc_getClassList(NULL,0),c=Memory.alloc(a*pointerSize);api.objc_getClassList(c,a);for(let d=0;d!==a;d++){let p=c.add(d*pointerSize).readPointer(),h=s(p),u=null,g=o.findPath(h);if(g===null&&(n||e.findPath(h)===null)&&(u=h.readCString(),u.indexOf(".")!==-1)){let v=p.add(l).readPointer();g=o.findPath(v)}g!==null&&(u===null&&(u=h.readCString()),i(u,g))}r.onComplete()}function enumerateLoadedClassesSync(t={}){let e={};return enumerateLoadedClasses(t,{onMatch(n,r){let o=e[r];o===void 0&&(o=[],e[r]=o),o.push(n)},onComplete(){}}),e}function choose(t,e){let n=t,r=!0;if(!(t instanceof ObjCObject)&&typeof t=="object"&&(n=t.class,t.hasOwnProperty("subclasses")&&(r=t.subclasses)),!(n instanceof ObjCObject&&(n.$kind==="class"||n.$kind==="meta-class")))throw new Error("Expected an ObjC.Object for a class or meta-class");let o=yi().choose(n,r).map(s=>new ObjCObject(s));for(let s of o)if(e.onMatch(s)==="stop")break;e.onComplete()}function makeMethodInvocationWrapper(method,owner,superSpecifier,invocationOptions){let sel=method.sel,handle=method.handle,types;handle===void 0?(handle=null,types=method.types):types=api.method_getTypeEncoding(handle).readCString();let signature=parseSignature(types),retType=signature.retType,argTypes=signature.argTypes.slice(2),objc_msgSend=superSpecifier?getMsgSendSuperImpl(signature,invocationOptions):getMsgSendImpl(signature,invocationOptions),argVariableNames=argTypes.map(function(t,e){return"a"+(e+1)}),callArgs=[superSpecifier?"superSpecifier":"this","sel"].concat(argTypes.map(function(t,e){return t.toNative?"argTypes["+e+"].toNative.call(this, "+argVariableNames[e]+")":argVariableNames[e]})),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.fromNative?(returnCaptureLeft="return retType.fromNative.call(this, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let m=eval("var m = function ("+argVariableNames.join(", ")+") { "+returnCaptureLeft+"objc_msgSend("+callArgs.join(", ")+")"+returnCaptureRight+"; }; m;");Object.defineProperty(m,"handle",{enumerable:!0,get:getMethodHandle}),m.selector=sel,Object.defineProperty(m,"implementation",{enumerable:!0,get(){let t=getMethodHandle(),e=new NativeFunction(api.method_getImplementation(t),m.returnType,m.argumentTypes,invocationOptions),n=getReplacementMethodImplementation(t);return n!==null&&(e._callback=n),e},set(t){replaceMethodImplementation(getMethodHandle(),t)}}),m.returnType=retType.type,m.argumentTypes=signature.argTypes.map(t=>t.type),m.types=types,Object.defineProperty(m,"symbol",{enumerable:!0,get(){return`${method.kind}[${owner.$className} ${selectorAsString(sel)}]`}}),m.clone=function(t){return makeMethodInvocationWrapper(method,owner,superSpecifier,t)};function getMethodHandle(){if(handle===null){if(owner.$kind==="instance"){let t=owner;do if("- forwardingTargetForSelector:"in t){let e=t.forwardingTargetForSelector_(sel);if(e===null||e.$kind!=="instance")break;let n=api.class_getInstanceMethod(e.$class.handle,sel);n.isNull()?t=e:handle=n}else break;while(handle===null)}if(handle===null)throw new Error("Unable to find method handle of proxied function")}return handle}return m}function makeMethodImplementationWrapper(signature,implementation){let retType=signature.retType,argTypes=signature.argTypes,argVariableNames=argTypes.map(function(t,e){return e===0?"handle":e===1?"sel":"a"+(e-1)}),callArgs=argTypes.slice(2).map(function(t,e){let n=argVariableNames[2+e];return t.fromNative?"argTypes["+(2+e)+"].fromNative.call(self, "+n+")":n}),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.toNative?(returnCaptureLeft="return retType.toNative.call(self, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let m=eval("var m = function ("+argVariableNames.join(", ")+") { var binding = getBinding(handle);var self = binding.self;"+returnCaptureLeft+"implementation.call(binding"+(callArgs.length>0?", ":"")+callArgs.join(", ")+")"+returnCaptureRight+"; }; m;");return m}function makeBlockInvocationWrapper(block,signature,implementation){let retType=signature.retType,argTypes=signature.argTypes.slice(1),argVariableNames=argTypes.map(function(t,e){return"a"+(e+1)}),callArgs=argTypes.map(function(t,e){return t.toNative?"argTypes["+e+"].toNative.call(this, "+argVariableNames[e]+")":argVariableNames[e]}),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.fromNative?(returnCaptureLeft="return retType.fromNative.call(this, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let f=eval("var f = function ("+argVariableNames.join(", ")+") { "+returnCaptureLeft+"implementation(this"+(callArgs.length>0?", ":"")+callArgs.join(", ")+")"+returnCaptureRight+"; }; f;");return f.bind(block)}function makeBlockImplementationWrapper(block,signature,implementation){let retType=signature.retType,argTypes=signature.argTypes,argVariableNames=argTypes.map(function(t,e){return e===0?"handle":"a"+e}),callArgs=argTypes.slice(1).map(function(t,e){let n=argVariableNames[1+e];return t.fromNative?"argTypes["+(1+e)+"].fromNative.call(this, "+n+")":n}),returnCaptureLeft,returnCaptureRight;retType.type==="void"?(returnCaptureLeft="",returnCaptureRight=""):retType.toNative?(returnCaptureLeft="return retType.toNative.call(this, ",returnCaptureRight=")"):(returnCaptureLeft="return ",returnCaptureRight="");let f=eval("var f = function ("+argVariableNames.join(", ")+") { if (!this.handle.equals(handle))this.handle = handle;"+returnCaptureLeft+"implementation.call(block"+(callArgs.length>0?", ":"")+callArgs.join(", ")+")"+returnCaptureRight+"; }; f;");return f.bind(block)}function rawFridaType(t){return t==="object"?"pointer":t}function makeClassName(){for(let t=1;;t++){let e="FridaAnonymousClass"+t;if(!(e in classRegistry))return e}}function makeProtocolName(){for(let t=1;;t++){let e="FridaAnonymousProtocol"+t;if(!(e in protocolRegistry))return e}}function objcMethodName(t){return t.replace(/_/g,":")}function jsMethodName(t){let e=t.replace(/:/g,"_");return objCObjectBuiltins.has(e)&&(e+="2"),e}let isaMasks={x64:"0x7ffffffffff8",arm64:"0xffffffff8"},rawMask=isaMasks[Process.arch];if(rawMask!==void 0){let t=ptr(rawMask);readObjectIsa=function(e){return e.readPointer().and(t)}}else readObjectIsa=function(t){return t.readPointer()};function getMsgSendImpl(t,e){return resolveMsgSendImpl(msgSendBySignatureId,t,e,!1)}function getMsgSendSuperImpl(t,e){return resolveMsgSendImpl(msgSendSuperBySignatureId,t,e,!0)}function resolveMsgSendImpl(t,e,n,r){if(n!==Dt)return makeMsgSendImpl(e,n,r);let{id:o}=e,s=t.get(o);return s===void 0&&(s=makeMsgSendImpl(e,n,r),t.set(o,s)),s}function makeMsgSendImpl(t,e,n){let r=t.retType.type,o=t.argTypes.map(function(a){return a.type}),s=["objc_msgSend"];n&&s.push("Super"),r instanceof Array&&!typeFitsInRegisters(r)?s.push("_stret"):(r==="float"||r==="double")&&s.push("_fpret");let l=s.join("");return new NativeFunction(api[l],r,o,e)}function typeFitsInRegisters(t){return Process.arch!=="x64"?!1:sizeOfTypeOnX64(t)<=16}function sizeOfTypeOnX64(t){if(t instanceof Array)return t.reduce((e,n)=>e+sizeOfTypeOnX64(n),0);switch(t){case"bool":case"char":case"uchar":return 1;case"int16":case"uint16":return 2;case"int":case"int32":case"uint":case"uint32":case"float":return 4;default:return 8}}function unparseSignature(t,e){let n=typeIdFromAlias(t),r=e.map(typeIdFromAlias),o=r.map(l=>singularTypeById[l].size),s=o.reduce((l,a)=>l+a,0),i=0;return n+s+r.map((l,a)=>{let c=l+i;return i+=o[a],c}).join("")}function parseSignature(t){let e=[t,0];parseQualifiers(e);let n=readType(e);readNumber(e);let r=[],o=JSON.stringify(n.type);for(;dataAvailable(e);){parseQualifiers(e);let s=readType(e);readNumber(e),r.push(s),o+=JSON.stringify(s.type)}return{id:o,retType:n,argTypes:r}}function parseType(t){return readType([t,0])}function readType(t){let e=readChar(t);if(e==="@"){let r=peekChar(t);r==="?"?(e+=r,skipChar(t),peekChar(t)==="<"&&skipExtendedBlock(t)):r==='"'&&(skipChar(t),readUntil('"',t))}else if(e==="^"){let r=peekChar(t);r==="@"&&(e+=r,skipChar(t))}let n=singularTypeById[e];if(n!==void 0)return n;if(e==="["){let r=readNumber(t),o=readType(t);return skipChar(t),arrayType(r,o)}else if(e==="{"){if(!tokenExistsAhead("=","}",t))return readUntil("}",t),structType([]);readUntil("=",t);let r=[],o;for(;(o=peekChar(t))!=="}";)o==='"'&&(skipChar(t),readUntil('"',t)),r.push(readType(t));return skipChar(t),structType(r)}else if(e==="("){readUntil("=",t);let r=[];for(;peekChar(t)!==")";)r.push(readType(t));return skipChar(t),unionType(r)}else{if(e==="b")return readNumber(t),singularTypeById.i;if(e==="^")return readType(t),singularTypeById["?"];if(modifiers.has(e))return readType(t);throw new Error("Unable to handle type "+e)}}function skipExtendedBlock(t){let e;for(skipChar(t);(e=peekChar(t))!==">";)peekChar(t)==="<"?skipExtendedBlock(t):(skipChar(t),e==='"'&&readUntil('"',t));skipChar(t)}function readNumber(t){let e="";for(;dataAvailable(t);){let n=peekChar(t),r=n.charCodeAt(0);if(r>=48&&r<=57)e+=n,skipChar(t);else break}return parseInt(e)}function readUntil(t,e){let n=e[0],r=e[1],o=n.indexOf(t,r);if(o===-1)throw new Error("Expected token '"+t+"' not found");let s=n.substring(r,o);return e[1]=o+1,s}function readChar(t){return t[0][t[1]++]}function peekChar(t){return t[0][t[1]]}function tokenExistsAhead(t,e,n){let[r,o]=n,s=r.indexOf(t,o);if(s===-1)return!1;let i=r.indexOf(e,o);if(i===-1)throw new Error("Expected to find terminator: "+e);return s<i}function skipChar(t){t[1]++}function dataAvailable(t){return t[1]!==t[0].length}let qualifierById={r:"const",n:"in",N:"inout",o:"out",O:"bycopy",R:"byref",V:"oneway"};function parseQualifiers(t){let e=[];for(;;){let n=qualifierById[peekChar(t)];if(n===void 0)break;e.push(n),skipChar(t)}return e}let idByAlias={char:"c",int:"i",int16:"s",int32:"i",int64:"q",uchar:"C",uint:"I",uint16:"S",uint32:"I",uint64:"Q",float:"f",double:"d",bool:"B",void:"v",string:"*",object:"@",block:"@?",class:"#",selector:":",pointer:"^v"};function typeIdFromAlias(t){if(typeof t=="object"&&t!==null)return`@"${t.type}"`;let e=idByAlias[t];if(e===void 0)throw new Error("No known encoding for type "+t);return e}let fromNativeId=function(t){return t.isNull()?null:t.toString(16)===this.handle.toString(16)?this:new ObjCObject(t)},toNativeId=function(t){if(t===null)return NULL;let e=typeof t;return e==="string"?(cachedNSStringCtor===null&&(cachedNSString=classRegistry.NSString,cachedNSStringCtor=cachedNSString.stringWithUTF8String_),cachedNSStringCtor.call(cachedNSString,Memory.allocUtf8String(t))):e==="number"?(cachedNSNumberCtor===null&&(cachedNSNumber=classRegistry.NSNumber,cachedNSNumberCtor=cachedNSNumber.numberWithDouble_),cachedNSNumberCtor.call(cachedNSNumber,t)):t},fromNativeBlock=function(t){return t.isNull()?null:t.toString(16)===this.handle.toString(16)?this:new Block(t)},toNativeBlock=function(t){return t!==null?t:NULL},toNativeObjectArray=function(t){if(t instanceof Array){let e=t.length,n=Memory.alloc(e*pointerSize);for(let r=0;r!==e;r++)n.add(r*pointerSize).writePointer(toNativeId(t[r]));return n}return t};function arrayType(t,e){return{type:"pointer",read(n){let r=[],o=e.size;for(let s=0;s!==t;s++)r.push(e.read(n.add(s*o)));return r},write(n,r){let o=e.size;r.forEach((s,i)=>{e.write(n.add(i*o),s)})}}}function structType(t){let e,n;if(t.some(function(s){return!!s.fromNative})){let s=t.map(function(i){return i.fromNative?i.fromNative:identityTransform});e=function(i){return i.map(function(l,a){return s[a].call(this,l)})}}else e=identityTransform;if(t.some(function(s){return!!s.toNative})){let s=t.map(function(i){return i.toNative?i.toNative:identityTransform});n=function(i){return i.map(function(l,a){return s[a].call(this,l)})}}else n=identityTransform;let[r,o]=t.reduce(function(s,i){let[l,a]=s,{size:c}=i,d=align(l,c);return a.push(d),[d+c,a]},[0,[]]);return{type:t.map(s=>s.type),size:r,read(s){return t.map((i,l)=>i.read(s.add(o[l])))},write(s,i){i.forEach((l,a)=>{t[a].write(s.add(o[a]),l)})},fromNative:e,toNative:n}}function unionType(t){let e=t.reduce(function(o,s){return s.size>o.size?s:o},t[0]),n,r;if(e.fromNative){let o=e.fromNative;n=function(s){return o.call(this,s[0])}}else n=function(o){return o[0]};if(e.toNative){let o=e.toNative;r=function(s){return[o.call(this,s)]}}else r=function(o){return[o]};return{type:[e.type],size:e.size,read:e.read,write:e.write,fromNative:n,toNative:r}}let longBits=pointerSize==8&&Process.platform!=="windows"?64:32;modifiers=new Set(["j","A","r","n","N","o","O","R","V","+"]),singularTypeById={c:{type:"char",size:1,read:t=>t.readS8(),write:(t,e)=>{t.writeS8(e)},toNative(t){return typeof t=="boolean"?t?1:0:t}},i:{type:"int",size:4,read:t=>t.readInt(),write:(t,e)=>{t.writeInt(e)}},s:{type:"int16",size:2,read:t=>t.readS16(),write:(t,e)=>{t.writeS16(e)}},l:{type:"int32",size:4,read:t=>t.readS32(),write:(t,e)=>{t.writeS32(e)}},q:{type:"int64",size:8,read:t=>t.readS64(),write:(t,e)=>{t.writeS64(e)}},C:{type:"uchar",size:1,read:t=>t.readU8(),write:(t,e)=>{t.writeU8(e)}},I:{type:"uint",size:4,read:t=>t.readUInt(),write:(t,e)=>{t.writeUInt(e)}},S:{type:"uint16",size:2,read:t=>t.readU16(),write:(t,e)=>{t.writeU16(e)}},L:{type:"uint"+longBits,size:longBits/8,read:t=>t.readULong(),write:(t,e)=>{t.writeULong(e)}},Q:{type:"uint64",size:8,read:t=>t.readU64(),write:(t,e)=>{t.writeU64(e)}},f:{type:"float",size:4,read:t=>t.readFloat(),write:(t,e)=>{t.writeFloat(e)}},d:{type:"double",size:8,read:t=>t.readDouble(),write:(t,e)=>{t.writeDouble(e)}},B:{type:"bool",size:1,read:t=>t.readU8(),write:(t,e)=>{t.writeU8(e)},fromNative(t){return!!t},toNative(t){return t?1:0}},v:{type:"void",size:0},"*":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative(t){return t.readCString()}},"@":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative:fromNativeId,toNative:toNativeId},"@?":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative:fromNativeBlock,toNative:toNativeBlock},"^@":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},toNative:toNativeObjectArray},"^v":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)}},"#":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)},fromNative:fromNativeId,toNative:toNativeId},":":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)}},"?":{type:"pointer",size:pointerSize,read:t=>t.readPointer(),write:(t,e)=>{t.writePointer(e)}}};function identityTransform(t){return t}function align(t,e){let n=t%e;return n===0?t:t+(e-n)}}var Ip=new kp,Ie=Ip;var Np=new ke,Tp=new ke;function xp(t,e,n){if(!t||!Np.first(e+":"+t))return;let r=We(t);ce("channel",{name:t,kind:e,via:n,score:r.score,tags:r.tags});let o="["+e+"] "+t;qe(r)?(L.hit(o),L.detail("score "+r.score+" \xB7 "+r.tags.join(", "))):ie().verbose&&!r.ignored&&L.info(o)}function vi(t){return t===void 0||t.isNull()?null:K("flutter/ios/objc-string",()=>String(new Ie.Object(t)))??null}function Lp(){let t=[{cls:"FlutterMethodChannel",selectors:["+ methodChannelWithName:binaryMessenger:","+ methodChannelWithName:binaryMessenger:codec:","+ methodChannelWithName:binaryMessenger:codec:taskQueue:"],kind:"method"},{cls:"FlutterEventChannel",selectors:["+ eventChannelWithName:binaryMessenger:","+ eventChannelWithName:binaryMessenger:codec:","+ eventChannelWithName:binaryMessenger:codec:taskQueue:"],kind:"event"},{cls:"FlutterBasicMessageChannel",selectors:["+ messageChannelWithName:binaryMessenger:","+ messageChannelWithName:binaryMessenger:codec:"],kind:"message"}];for(let{cls:e,selectors:n,kind:r}of t){let o=Ie.classes[e];if(o===void 0){L.warn(e+" not present \u2014 skipping.");continue}for(let s of n){let i=o[s];i!==void 0&&K("flutter/ios/factory/"+e+s,()=>{Interceptor.attach(i.implementation,{onEnter:hn("flutter/ios/factory-impl",l=>{let a=vi(l[2]);a!==null&&xp(a,r,"registration")})})})}}}function Ap(){if(!ie().captureCalls)return;let t=Ie.classes.FlutterMethodChannel;if(t===void 0)return;let e=t["- setMethodCallHandler:"];if(e===void 0){L.warn("FlutterMethodChannel does not expose setMethodCallHandler:.");return}K("flutter/ios/set-handler",()=>{Interceptor.attach(e.implementation,{onEnter:hn("flutter/ios/set-handler-impl",function(n){let r=n[2],o=n[0];if(r===void 0||r.isNull()||o===void 0)return;let s=K("flutter/ios/channel-name",()=>{let i=new Ie.Object(o);return i.name!==void 0?String(i.name()):null})??"<unknown>";K("flutter/ios/wrap-block",()=>{let i=new Ie.Block(r),l=i.implementation;i.implementation=function(a,c){K("flutter/ios/on-method-call",()=>{let h=new Ie.Object(a),u=String(h.method()),g=h.arguments()&&!h.arguments().isNull?.()?String(h.arguments()):null,_=We(s+"/"+u);ce("call",{channel:s,method:u,args:Ve(g),score:_.score,tags:_.tags});let y=s+" \u2192 "+u+"("+(Ve(g)??"")+")";qe(_)?L.hit(y):ie().verbose&&L.note(y)});let d=c;return l(a,function(h){return K("flutter/ios/result",()=>{let u=h==null||(h.isNull?.()??!1)?null:String(new Ie.Object(h));ce("result",{channel:s,method:"<reply>",outcome:"success",value:Ve(u)}),ie().verbose&&L.detail("\u21B3 reply: "+(Ve(u)??"<void>"))}),d(h)})}})})})})}function bi(t,e){if(!t||!Tp.first(t))return;let n=We(t);ce("plugin",{name:t,source:e}),qe(n)?L.hit("[plugin] "+t+"  ("+n.tags.join(", ")+")"):L.info("[plugin] "+t)}function Mp(){L.section("Flutter Plugins");for(let t of["FlutterPluginAppLifeCycleDelegate","FlutterEngine","FlutterViewController"]){let n=Ie.classes[t]?.["- registrarForPlugin:"];n!==void 0&&K("flutter/ios/registrar/"+t,()=>{Interceptor.attach(n.implementation,{onEnter:hn("flutter/ios/registrar-impl",r=>{let o=vi(r[2]);o!==null&&bi(o,"registrar")})})})}K("flutter/ios/plugin-scan",()=>{for(let t of Object.keys(Ie.classes))(t.startsWith("FLT")||t.endsWith("Plugin")&&!t.startsWith("Flutter"))&&bi(t,"objc-classes")})}function Si(){if(L.section("Flutter Platform Channels (iOS)"),Ie.classes.FlutterMethodChannel===void 0){L.fail("No Flutter classes in the Objective-C runtime \u2014 is this a Flutter app?");return}Lp(),Ap(),Mp(),L.detail("Hooks installed \u2014 exercise the app to populate the model.")}var Op=3;function Ei({isFlutter:t}){let e=Re("channel"),n=Re("call"),r=Re("result"),o=Re("plugin"),s=Re("error"),i=[];t&&e===0&&i.push("no channels observed \u2014 the app probably exited before registering any (a device-integrity block does exactly this), or its classes were unreachable"),t&&o>0&&o<Op&&i.push("very few plugins \u2014 a Flutter app that finished starting registers many, so startup was probably cut short"),e>0&&n===0&&i.push("channels registered but no traffic \u2014 hooks only report what crosses them, so navigate the app (log in, open features) and watch again"),n>0&&r===0&&i.push("calls seen but no replies captured \u2014 return values may not be resolving"),s>0&&i.push(s+" hook site(s) reported a failure \u2014 see the [-] lines for which ones"),ce("coverage",{channels:e,calls:n,results:r,plugins:o,errors:s,warnings:i}),L.section("Coverage"),L.info(ge("Channels",14)+": "+e),L.info(ge("Calls",14)+": "+n+" ("+r+" with replies)"),L.info(ge("Plugins",14)+": "+o);for(let l of i)L.warn(l);L.detail("this is a floor, not a census \u2014 absence here is not absence in the app")}var jp=400;function Pp(t){let e=t.toLowerCase();return e.includes("libflutter.so")||e.includes("libapp.so")}function wi(t){let e=Process.enumerateModules();if(gn(e)!==null){t();return}let n=Module.findGlobalExportByName("android_dlopen_ext")??Module.findGlobalExportByName("dlopen");if(n===null){L.warn("Cannot hook dlopen \u2014 enumerating modules now, which may be early."),t();return}L.detail("Flutter engine not mapped yet \u2014 waiting for it to load");let r=!1,o=null,s=Interceptor.attach(n,{onEnter(i){let l=i[0];this.loadedPath=l===void 0?null:K("loader/read-path",()=>l.readCString())??null},onLeave(){let i=this.loadedPath;r||typeof i!="string"||!Pp(i)||(o!==null&&clearTimeout(o),o=setTimeout(()=>{r||(r=!0,s.detach(),K("loader/on-ready",t))},jp))}})}function Ci(){return me.available?"android":Ie.available?"ios":"unknown"}var ki=!1;function Ii(){let t=!1;return me.perform(()=>{K("target/android-identity",()=>{let n=me.use("android.app.ActivityThread").currentApplication();if(n===null)return;let r=n.getApplicationContext(),o=r.getPackageName(),s=r.getPackageManager().getPackageInfo(o,0),i=s.versionName.value??null,l=null;try{l=String(s.getLongVersionCode())}catch{l=String(s.versionCode.value)}ce("target",{platform:"android",id:o,versionName:i,versionCode:l,pid:Process.id}),L.info(ge("Package",14)+": "+o),L.info(ge("Version",14)+": "+i+" ("+l+")"),t=!0,ki=!0})}),t}function Rp(){me.perform(()=>{K("target/defer-identity",()=>{let t=me.use("android.app.Instrumentation");t.callApplicationOnCreate!==void 0&&t.callApplicationOnCreate.overloads.forEach(e=>{Be("target/app-oncreate",e,()=>{ki||Ii()})})})})}function Fp(){K("target/ios-identity",()=>{let t=Ie.classes.NSBundle;if(t===void 0){L.warn("NSBundle unavailable \u2014 identity cannot be read.");return}let e=t.mainBundle(),n=String(e.bundleIdentifier()),r=e.infoDictionary(),o=l=>{let a=r.objectForKey_(l);return a?String(a):null},s=o("CFBundleShortVersionString"),i=o("CFBundleVersion");ce("target",{platform:"ios",id:n,versionName:s,versionCode:i,pid:Process.id}),L.info(ge("Bundle ID",14)+": "+n),L.info(ge("Version",14)+": "+s+" ("+i+")")})}function Ni(t){L.section("Application Identity"),t==="android"?Ii()||(L.detail("application not constructed yet \u2014 will report at onCreate"),Rp()):t==="ios"?Fp():L.fail("Neither the Java nor the Objective-C runtime is available.")}var zp=["libflutter.so","flutter","libapp.so","libil2cpp.so","libunity.so","unityframework","libreactnativejni.so","libhermes.so","hermes","libjsc","libmonosgen","libmono","cordova","libssl","libcrypto","boringssl","libconscrypt"];function Dp(t){let e=t.toLowerCase();return zp.some(n=>e.includes(n))}function Ti(){let t=Process.enumerateModules();for(let e of t)Dp(e.name)&&ce("module",{name:e.name,base:e.base.toString(),size:e.size,path:e.path});return t}function xi(t){L.section("Engine Fingerprint");let e=t.map(s=>s.name.toLowerCase()),n=s=>e.some(i=>i.includes(s)),r="Native";n("libflutter.so")||e.includes("flutter")?r="Flutter":n("libil2cpp")||n("libunity")||n("unityframework")?r="Unity (IL2CPP)":n("libhermes")||n("hermes")?r="React Native (Hermes)":n("libreactnativejni")||n("libjsc")?r="React Native (JSC)":n("libmonosgen")||n("libmono")?r="Xamarin/Mono":(n("cordova")||n("libxwalkcore"))&&(r="Cordova");let o=zt(t);return ce("engine",{engine:r,hasDartPayload:o!==null}),L.info(ge("Engine",14)+": "+r),o!==null&&L.note(ge("Dart payload",14)+": "+o.name),r!=="Flutter"&&L.warn("No Flutter engine found \u2014 channel enumeration will likely find nothing."),r}var Up=6e3;function Li(){let t=Ci();ce("run.start",{agent:"flutter-enum",platform:t}),L.section("frida-scripts \xB7 flutter-enum"),L.detail("profile: "+ti+" \xB7 platform: "+t),Ni(t),t==="android"?_n():t==="ios"?Si():L.fail("Unsupported runtime \u2014 no Java or Objective-C bridge available."),wi(()=>{let e=Ti(),n=xi(e);n==="Flutter"&&(t==="android"&&(_n(),ci()),gi(e)),setTimeout(()=>{K("entry/coverage",()=>Ei({isFlutter:n==="Flutter"}))},Up)})}function Bp(){if(me.available){me.perform(()=>{K("entry/run",Li)});return}K("entry/run",Li)}Bp();rpc.exports={configure(t){return qs(t)},model(){return to()},summary(){return{elapsedMs:Qs(),channels:Re("channel"),calls:Re("call"),results:Re("result"),plugins:Re("plugin"),errors:Re("error"),config:ie()}},finish(t="host-requested"){return ce("run.end",{reason:t}),to()}};
