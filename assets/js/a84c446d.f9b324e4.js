"use strict";(self.webpackChunkcrudigniter=self.webpackChunkcrudigniter||[]).push([[565],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l=void 0,p={unversionedId:"tricks",id:"tricks",isDocsHomePage:!1,title:"tricks",description:"here the some usage with this framework, what we can do with this \u26a1",source:"@site/docs/tricks.md",sourceDirName:".",slug:"/tricks",permalink:"/docs/tricks",editUrl:"https://github.com/rohit-chouhan/crudigniter/docs/tricks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"delete",permalink:"/docs/methods/delete"},next:{title:"about",permalink:"/docs/about"}},c=[{value:"Auto HTML Table",id:"auto-html-table",children:[]},{value:"CRUD with Python",id:"crud-with-python",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"here the some usage with this framework, what we can do with this \u26a1"))),(0,o.kt)("h2",{id:"auto-html-table"},"Auto HTML Table"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample Code"),"Here the code you can generate html table with `GET`, its will show the all records automatically as your requirent. Here we are using `DataTables.net`. Change `http://api.example.com/users` which your API. and also pass the columns name below of it.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n  <html>\n  <head>\n    <title>Table with Crudigniter</title>\n    <link href="bootstrap.css" rel="stylesheet">\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">\n    <link href="https://cdn.datatables.net/1.11.1/css/jquery.dataTables.min.css" rel="stylesheet">\n    <script src="https://code.jquery.com/jquery-3.5.1.js"><\/script>\n    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">\n  </head>\n  <body>\n  <div class="p-5">\n  <table id="mytable" class="display" style="width:100%">\n        <thead>\n            <tr>\n                <th>Id</th>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n    </table>\n  </div>\n  </body>\n<script>\n$(document).ready(function() {\n    $.extend( true, $.fn.dataTable.defaults, {\n        "ordering": false\n    });\n    $(\'#mytable\').DataTable( {\n        "ajax": {\n            "url": "http://api.example.com/users",\n            "dataSrc": ""\n        },\n        "columns": [\n            { data: "id" },\n            { data: "name" },\n            { data: "email" },\n            {\n              "mData": "",\n              "mRender": function (data, type, row) {\n                  return "<a href=\'/edit=" + row.id + "\'>EDIT</a>";\n              }\n            }\n        ]\n    } );\n} );\n<\/script>\n<script src="https://cdn.datatables.net/1.11.1/js/jquery.dataTables.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"><\/script>\n<script src="https://cdn.datatables.net/1.11.1/js/dataTables.bootstrap5.min.js"><\/script>\n</html>\n'))),(0,o.kt)("h2",{id:"crud-with-python"},"CRUD with Python"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Post Data"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"securiy_config=1"),", use bearer token always"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'api.post(url,json={}, headers = {"Authorization": "Bearer YOUR_KEY"})\n')),(0,o.kt)("p",null,"For Json Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests as api\n\napi_url = 'http://api.example.com/users'\nresponse = api.post(url=api_url, json={\n    'name':'Tony Stark',\n    'email':'tony@ironman.com'\n})\n")),(0,o.kt)("p",null,"For Form"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests as api\n\napi_url = 'http://api.example.com/users?form=true'\nresponse = api.post(url=api_url, data={\n    'name':'Tony Stark',\n    'email':'tony@ironman.com'\n})\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Read Data"),(0,o.kt)("p",null,"Read all methods will apply on ",(0,o.kt)("inlineCode",{parentName:"p"},"params")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests as api\n\n#for all data\napi_url = 'http://api.example.com/users'\nresponse = api.get(url=api_url)\n\n#for where name=rohit\napi_url = 'http://api.example.com/users'\nresponse = api.get(url=api_url, params={'name':'Rohit'})\n\nprint(response.json())\n\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Update Data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests as api\n\napi_url = 'http://api.example.com/users?name=Tony Stark'\nresponse = api.put(url=api_url, json={\n  'name':'Mr. Tony Stark'\n})\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Delete Data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests as api\n\napi_url = 'http://api.example.com/users'\nresponse = api.delete(url=api_url, json={\n  'name':'Mr. Tony Stark'\n})\n"))),(0,o.kt)("p",null,"more coming soon.. \ud83e\udd73"))}m.isMDXComponent=!0}}]);