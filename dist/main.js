!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return l}),n.d(t,"createElement",function(){return l}),n.d(t,"cloneElement",function(){return p}),n.d(t,"Component",function(){return O}),n.d(t,"render",function(){return j}),n.d(t,"rerender",function(){return d}),n.d(t,"options",function(){return r});var r={},o=[],i=[];function l(e,t){var n,l,a,u,p=i;for(u=arguments.length;u-- >2;)o.push(arguments[u]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((l=o.pop())&&void 0!==l.pop)for(u=l.length;u--;)o.push(l[u]);else"boolean"==typeof l&&(l=null),(a="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(a=!1)),a&&n?p[p.length-1]+=l:p===i?p=[l]:p.push(l),n=a;var c=new function(){};return c.nodeName=e,c.children=p,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(c),c}function a(e,t){for(var n in t)e[n]=t[n];return e}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function p(e,t){return l(e.nodeName,a(a({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==s.push(e)&&(r.debounceRendering||u)(d)}function d(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&E(e)}function _(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function v(e){var t=a({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===c.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function y(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var b=[],C=0,g=!1,x=!1;function N(){for(var e;e=b.pop();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,r,o,i){C++||(g=null!=o&&void 0!==o.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var l=k(e,t,n,r,i);return o&&l.parentNode!==o&&o.appendChild(l),--C||(x=!1,i||N()),l}function k(e,t,n,r,o){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0))),i.__preactattr_=!0,i;var a,u,p=t.nodeName;if("function"==typeof p)return function(e,t,n,r){var o=e&&e._component,i=o,l=e,a=o&&e._componentConstructor===t.nodeName,u=a,p=v(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(B(o,p,3,n,r),e=o.base):(i&&!a&&(L(i),e=l=null),o=U(t.nodeName,p,n),e&&!o.nextBase&&(o.nextBase=e,l=null),B(o,p,1,n,r),e=o.base,l&&e!==l&&(l._component=null,P(l,!1)));return e}(e,t,n,r);if(g="svg"===p||"foreignObject"!==p&&g,p=String(p),(!e||!_(e,p))&&(a=p,(u=g?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=u,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0)}var c=i.firstChild,s=i.__preactattr_,f=t.children;if(null==s){s=i.__preactattr_={};for(var d=i.attributes,y=d.length;y--;)s[d[y].name]=d[y].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=f[0]&&(c.nodeValue=f[0]):(f&&f.length||null!=c)&&function(e,t,n,r,o){var i,l,a,u,p,c=e.childNodes,s=[],f={},d=0,v=0,h=c.length,y=0,b=t?t.length:0;if(0!==h)for(var C=0;C<h;C++){var g=c[C],x=g.__preactattr_,N=b&&x?g._component?g._component.__key:x.key:null;null!=N?(d++,f[N]=g):(x||(void 0!==g.splitText?!o||g.nodeValue.trim():o))&&(s[y++]=g)}if(0!==b)for(var C=0;C<b;C++){u=t[C],p=null;var N=u.key;if(null!=N)d&&void 0!==f[N]&&(p=f[N],f[N]=void 0,d--);else if(!p&&v<y)for(i=v;i<y;i++)if(void 0!==s[i]&&(w=l=s[i],M=o,"string"==typeof(S=u)||"number"==typeof S?void 0!==w.splitText:"string"==typeof S.nodeName?!w._componentConstructor&&_(w,S.nodeName):M||w._componentConstructor===S.nodeName)){p=l,s[i]=void 0,i===y-1&&y--,i===v&&v++;break}p=k(p,u,n,r),a=c[C],p&&p!==e&&p!==a&&(null==a?e.appendChild(p):p===a.nextSibling?m(a):e.insertBefore(p,a))}var w,S,M;if(d)for(var C in f)void 0!==f[C]&&P(f[C],!1);for(;v<=y;)void 0!==(p=s[y--])&&P(p,!1)}(i,f,n,r,x||null!=s.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,g);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],g)}(i,t.attributes,s),g=l,i}function P(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}var M={};function U(e,t,n){var r,o=M[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),O.call(r,t,n)):((r=new O(t,n)).constructor=e,r.render=T),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function T(e,t,n){return this.constructor(e,n)}function B(e,t,n,o,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?f(e):E(e,1,i)),e.__ref&&e.__ref(e))}function E(e,t,n,o){if(!e._disable){var i,l,u,p=e.props,c=e.state,s=e.context,f=e.prevProps||p,d=e.prevState||c,_=e.prevContext||s,m=e.base,h=e.nextBase,y=m||h,g=e._component,x=!1;if(m&&(e.props=f,e.state=d,e.context=_,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,s)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,s),e.props=p,e.state=c,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){i=e.render(p,c,s),e.getChildContext&&(s=a(a({},s),e.getChildContext()));var k,S,M=i&&i.nodeName;if("function"==typeof M){var T=v(i);(l=g)&&l.constructor===M&&T.key==l.__key?B(l,T,1,s,!1):(k=l,e._component=l=U(M,T,s),l.nextBase=l.nextBase||h,l._parentComponent=e,B(l,T,0,s,!1),E(l,1,n,!0)),S=l.base}else u=y,(k=g)&&(u=e._component=null),(y||1===t)&&(u&&(u._component=null),S=w(u,i,s,n||!m,y&&y.parentNode,!0));if(y&&S!==y&&l!==g){var O=y.parentNode;O&&S!==O&&(O.replaceChild(S,y),k||(y._component=null,P(y,!1)))}if(k&&L(k),e.base=S,S&&!o){for(var j=e,W=e;W=W._parentComponent;)(j=W).base=S;S._component=j,S._componentConstructor=j.constructor}}if(!m||n?b.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,_),r.afterUpdate&&r.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||o||N()}}function L(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?L(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,m(t),function(e){var t=e.constructor.name;(M[t]||(M[t]=[])).push(e)}(e),S(t)),e.__ref&&e.__ref(null)}function O(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function j(e,t,n){return w(n,e,{},!1,t,!1)}a(O.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=a({},n)),a(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),E(this,2)},render:function(){}});var W={h:l,createElement:l,cloneElement:p,Component:O,render:j,rerender:d,options:r};t.default=W},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={name:t.name},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({name:"World"})},2e3)},t.prototype.render=function(e,t){return i.h("h1",null,"Hello ",t.name,"!")},t}(i.Component);t.App=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1);r.render(r.h(o.App,{name:"Earth"}),document.getElementById("root"))},function(e,t,n){e.exports=n(2)}]);