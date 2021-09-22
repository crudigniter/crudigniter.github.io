"use strict";(self.webpackChunkcrudigniter=self.webpackChunkcrudigniter||[]).push([[56],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5683:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:1},c=void 0,u={unversionedId:"methods/create",id:"methods/create",isDocsHomePage:!1,title:"create",description:"It will create new record on table.",source:"@site/docs/methods/create.md",sourceDirName:"methods",slug:"/methods/create",permalink:"/docs/methods/create",editUrl:"https://github.com/rohit-chouhan/crudigniter/docs/methods/create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"security",permalink:"/docs/security"},next:{title:"read",permalink:"/docs/methods/read"}},p=[{value:"Json body",id:"json-body",children:[]},{value:"Form data",id:"form-data",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It will create new record on table."),(0,o.kt)("h3",{id:"json-body"},"Json body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST | api.example.com/table\n")),(0,o.kt)("p",null,"Record will be pass as json body with  ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name":"Rohit"\n}\n')),(0,o.kt)("p",null,"it will create new records in ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," table with name(column) Rohit(value)."),(0,o.kt)("p",null,"return when success"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status":true,\n    "message":"Records added successfully"\n}\n')),(0,o.kt)("h3",{id:"form-data"},"Form data"),(0,o.kt)("p",null,"If you want to send data from ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," & want to upload files, you have to use form requeste. Image upload will only work in form data. Here you have to use parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"form=true"),", and for image ",(0,o.kt)("inlineCode",{parentName:"p"},"image=file_field_name"),"."),(0,o.kt)("h4",{id:"data-only"},"Data Only"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST | api.example.com/table?form=true\n")),(0,o.kt)("p",null,"it will create new records in ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," table with all field which is recived from source."),(0,o.kt)("p",null,"return when success"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status":true,\n    "message":"Records added successfully"\n}\n')),(0,o.kt)("h4",{id:"data-and-images"},"Data and Images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST | api.example.com/table?form=true&image=profile_pic\n")),(0,o.kt)("p",null,"Make sure you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Encoding")," header, when uploads file."),(0,o.kt)("p",null,"Note: profile_pic is name of field and database column also. it will received image from profile_pic(input form) and will store name of file to profile_pic(table's column). you can upload multiple image by passing by comma like this ",(0,o.kt)("inlineCode",{parentName:"p"},"image=profile_pic,cover,mycard")),(0,o.kt)("p",null,"File will be uploaded at ",(0,o.kt)("inlineCode",{parentName:"p"},"root/uploads")," folder with random name."),(0,o.kt)("p",null,"return when success"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status":true,\n    "message":"Records added successfully"\n}\n')),(0,o.kt)("p",null,"You will access image with this both url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://media.example.com/your_image.jpg\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://example.com/uploads/your_image.jpg\n")))}d.isMDXComponent=!0}}]);