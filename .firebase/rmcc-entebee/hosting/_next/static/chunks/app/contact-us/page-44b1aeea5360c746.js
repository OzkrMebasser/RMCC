(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{9154:function(e,t,a){Promise.resolve().then(a.bind(a,7712))},6834:function(e,t,a){"use strict";var s=a(7437);a(2265),t.Z=e=>{let{title:t,statement:a,parag1:l,parag2:r,parag3:i,id:o}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:o,className:"bg-gradient-to-r from-[#5B0B5F] via-purple-700 to-slate-100 h-24 uppercase",children:(0,s.jsx)("div",{className:"px-6 py-8 container mx-auto  lg:px-6",children:(0,s.jsx)("h2",{className:" font-black text-slate-100 text-2xl ","data-aos":"fade-right","data-aos-delay":"100",children:t})})}),(0,s.jsx)("section",{className:"bg-white ",children:a?(0,s.jsxs)("div",{className:"px-6 py-10 mx-auto space-y-6",children:[(0,s.jsx)("p",{className:"lg:px-6 md:text-body-md font-semibold text-lg text-justify text-red-600","data-aos":"fade-up","data-aos-delay":"300",children:a}),l?(0,s.jsx)("p",{className:"lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600","data-aos":"fade-up","data-aos-delay":"300",children:l}):(0,s.jsx)(s.Fragment,{}),r?(0,s.jsx)("p",{className:"lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600","data-aos":"fade-up","data-aos-delay":"300",children:r}):(0,s.jsx)(s.Fragment,{}),i?(0,s.jsx)("p",{className:"lg:px-6 md:text-body-md mb-6 font-semibold text-lg text-justify text-red-600","data-aos":"fade-up","data-aos-delay":"300",children:i}):(0,s.jsx)(s.Fragment,{})]}):null})]})}},7712:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var s=a(7437);class l{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let r={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},i=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},o=async(e,t,a={})=>{let s=await fetch(r.origin+e,{method:"POST",headers:a,body:t}),i=await s.text(),o=new l(s.status,i);if(s.ok)return o;throw o},n=(e,t,a)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!=typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},c=e=>e.webdriver||!e.languages||0===e.languages.length,m=()=>new l(451,"Unavailable For Headless Browser"),p=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},u=e=>!e.list?.length||!e.watchVariable,x=(e,t)=>e instanceof FormData?e.get(t):e[t],b=(e,t)=>{if(u(e))return!1;p(e.list,e.watchVariable);let a=x(t,e.watchVariable);return"string"==typeof a&&e.list.includes(a)},h=()=>new l(403,"Forbidden"),g=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},f=async(e,t,a)=>{let s=Number(await a.get(e)||0);return t-Date.now()+s},y=async(e,t,a)=>{if(!t.throttle||!a)return!1;g(t.throttle,t.id);let s=t.id||e;return await f(s,t.throttle,a)>0||(await a.set(s,Date.now().toString()),!1)},w=()=>new l(429,"Too Many Requests"),j=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},v=e=>"string"==typeof e?document.querySelector(e):e;var N={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let a=i(e);r.publicKey=a.publicKey,r.blockHeadless=a.blockHeadless,r.storageProvider=a.storageProvider,r.blockList=a.blockList,r.limitRate=a.limitRate,r.origin=a.origin||t},send:async(e,t,a,s)=>{let l=i(s),p=l.publicKey||r.publicKey,u=l.blockHeadless||r.blockHeadless,x=l.storageProvider||r.storageProvider,g={...r.blockList,...l.blockList},f={...r.limitRate,...l.limitRate};return u&&c(navigator)?Promise.reject(m()):(n(p,e,t),d(a),a&&b(g,a))?Promise.reject(h()):await y(location.pathname,f,x)?Promise.reject(w()):o("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:p,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"})},sendForm:async(e,t,a,s)=>{let l=i(s),d=l.publicKey||r.publicKey,p=l.blockHeadless||r.blockHeadless,u=r.storageProvider||l.storageProvider,x={...r.blockList,...l.blockList},g={...r.limitRate,...l.limitRate};if(p&&c(navigator))return Promise.reject(m());let f=v(a);n(d,e,t),j(f);let N=new FormData(f);return b(x,N)?Promise.reject(h()):await y(location.pathname,g,u)?Promise.reject(w()):(N.append("lib_version","4.4.1"),N.append("service_id",e),N.append("template_id",t),N.append("user_id",d),o("/api/v1.0/email/send-form",N))},EmailJSResponseStatus:l},k=a(2265),S=a(6834);let F=(0,k.lazy)(()=>a.e(517).then(a.bind(a,5517)));var P=()=>{let[e,t]=(0,k.useState)(""),[a,l]=(0,k.useState)(""),[r,i]=(0,k.useState)(""),[o,n]=(0,k.useState)(""),[d,c]=(0,k.useState)(!1),m=(0,k.useRef)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{id:"contact-form",className:"mt-[8.5rem] lg:mt-[6rem] wave-patterns object-fill py-[30px] md:py-[80px] lg:pt-[80px] lg:pb-[100px] container mx-auto px-[20px] lg:px-6",children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("h2",{"data-aos":"fade-down","data-aos-delay":"100",className:"uppercase text-2xl mb-4 font-bold leading-tight text-teal-400 sm:text-4xl text-center",children:"Contact us"}),(0,s.jsxs)("p",{className:"text-center md:text-body-md mb-6 font-semibold text-lg","data-aos":"fade-up","data-aos-delay":"200",children:[(0,s.jsx)("span",{className:"block mt-4 text-2xl",children:"Join us!"}),(0,s.jsx)("span",{className:"block mt-4",children:"Send us an email!"}),(0,s.jsx)("span",{className:"block mt-4",children:"Our phone number is +1 (250) 466-6179"})]})]}),(0,s.jsx)("div",{className:"max-w-screen-md mx-auto p-5",children:(0,s.jsxs)("form",{ref:m,className:"w-full",onSubmit:s=>{s.preventDefault();let m={from_name:"".concat(e," ").concat(a),email:r,message:o,newsletter:d?"They have subscribed to the newsletter.":"No newsletter subscription."};N.send("service_vkeovqn","template_n2u8cla",m,"GwDRzMfQMotUrzlmX").then(e=>{console.log("SUCCESS!",e.text),alert("We received your message, we will get back to you soon, God bless you!"),t(""),l(""),i(""),n(""),c(!1)},e=>{console.log("FAILED...",e.text)})},children:[(0,s.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-6",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[(0,s.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"firstName",children:"First Name"}),(0,s.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",name:"firstName",value:e,onChange:e=>t(e.target.value),id:"firstName",placeholder:"Your first name",required:!0})]}),(0,s.jsxs)("div",{className:"w-full md:w-1/2 px-3",children:[(0,s.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"lastName",children:"Last Name"}),(0,s.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",name:"lastName",value:a,onChange:e=>l(e.target.value),id:"lastName",placeholder:"Your last name",required:!0})]})]}),(0,s.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:(0,s.jsxs)("div",{className:"w-full px-3",children:[(0,s.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"email",children:"Email Address"}),(0,s.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"email",type:"email",name:"email",value:r,onChange:e=>i(e.target.value),placeholder:"john@doe.com",required:!0})]})}),(0,s.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:(0,s.jsxs)("div",{className:"w-full px-3",children:[(0,s.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"message",children:"Your Message"}),(0,s.jsx)("textarea",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"message",name:"message",value:o,onChange:e=>n(e.target.value),rows:"10",required:!0})]})}),(0,s.jsxs)("div",{className:"flex justify-between w-full px-3",children:[(0,s.jsxs)("label",{className:"block text-gray-500 font-bold",children:[(0,s.jsx)("input",{className:"mr-2 leading-tight",type:"checkbox",name:"newsletter",checked:d,onChange:e=>c(e.target.checked)}),(0,s.jsx)("span",{className:"text-sm",children:"Send me your newsletter!"})]}),(0,s.jsxs)("button",{className:"shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 lg:px-6 rounded",type:"submit",children:["Send ",(0,s.jsx)("span",{className:"hidden lg:inline",children:"Message"})]})]})]})})]}),(0,s.jsx)(S.Z,{title:"OUR LOCATION",id:"location"}),(0,s.jsx)(k.Suspense,{fallback:(0,s.jsx)("div",{className:"text-black text-xl",children:"Loading map..."}),children:(0,s.jsx)(F,{})})]})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=9154)}),_N_E=e.O()}]);