!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var l,n,o,i=a("1WSnx"),u=document.querySelector(".feedback-form"),s="feedback-form-state",f={};l=u.email,n=u.message,(o=localStorage.getItem(s))&&(f=JSON.parse(o),l.value=f.email,n.value=f.message),u.addEventListener("input",(0,i.throttle)((function(e){f[e.target.name]=e.target.value,localStorage.setItem(s,JSON.stringify(f))}),500)),u.addEventListener("submit",(function(e){e.preventDefault();var t=u.email,r=u.message;if(!t.value||!r.value)return alert("Please fill all the inputs!");console.log(f),e.currentTarget.reset(),localStorage.removeItem(s)}))}();
//# sourceMappingURL=03-feedback.83a3910a.js.map
