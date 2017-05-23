webpackJsonp([11,211],{1102:function(n,s,a){n.exports={content:{"zh-CN":[["p","12 \u5c0f\u65f6\u5236\u7684\u65f6\u95f4\u9009\u62e9\u5668\uff0c\u9ed8\u8ba4\u7684 format \u4e3a ",["code","h:mm:ss a"],"\u3002"]],"en-US":[["p","TimePicker of 12 hours format, with default format ",["code","h:mm:ss a"],"."]]},meta:{order:7,title:{"zh-CN":"12 \u5c0f\u65f6\u5236","en-US":"12 hours"},filename:"components/time-picker/demo/12hours.md",id:"components-time-picker-demo-12hours"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h:mm:ss</span> <span class="token attr-name">A"</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h:mm</span> <span class="token attr-name">a"</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){console.log(n,s)}var s=a(1),t=(a(2),a(3));return s.createElement("div",null,s.createElement(t.TimePicker,{use12Hours:!0,onChange:n}),s.createElement(t.TimePicker,{use12Hours:!0,format:"h:mm:ss A",onChange:n}),s.createElement(t.TimePicker,{use12Hours:!0,format:"h:mm a",onChange:n}))}}},1103:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u5728 TimePicker \u9009\u62e9\u6846\u5e95\u90e8\u663e\u793a\u81ea\u5b9a\u4e49\u7684\u5185\u5bb9\u3002"]],"en-US":[["p","Render addon contents to timepicker panel's bottom."]]},meta:{order:6,title:{"zh-CN":"\u9644\u52a0\u5185\u5bb9","en-US":"Addon"},filename:"components/time-picker/demo/addon.md",id:"components-time-picker-demo-addon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TimePickerAddonDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> open<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleOpenChange <span class="token operator">=</span> <span class="token punctuation">(</span>open<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  handleClose <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n        <span class="token attr-name">open</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>open<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onOpenChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleOpenChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">addon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>Button size<span class="token operator">=</span><span class="token string">"small"</span> type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClose<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Ok\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePickerAddonDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],e=Object.getOwnPropertyDescriptor(s,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function s(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function t(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function p(s,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(s,a):n(s,a))}var e=a(1),o=(a(2),a(3)),c=function(n){function a(){var p,e,o;s(this,a);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return p=e=t(this,n.call.apply(n,[this].concat(u))),e.state={open:!1},e.handleOpenChange=function(n){e.setState({open:n})},e.handleClose=function(){return e.setState({open:!1})},o=p,t(e,o)}return p(a,n),a.prototype.render=function(){var n=this;return e.createElement(o.TimePicker,{open:this.state.open,onOpenChange:this.handleOpenChange,addon:function(){return e.createElement(o.Button,{size:"small",type:"primary",onClick:n.handleClose},"Ok")}})},a}(e.Component);return e.createElement(c,null)}}},1104:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u70b9\u51fb TimePicker\uff0c\u7136\u540e\u53ef\u4ee5\u5728\u6d6e\u5c42\u4e2d\u9009\u62e9\u6216\u8005\u8f93\u5165\u67d0\u4e00\u65f6\u95f4\u3002"]],"en-US":[["p","Click ",["code","TimePicker"],", and then we could select or input a time in panel."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/time-picker/demo/basic.md",id:"components-time-picker-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){console.log(n,s)}var s=a(1),t=(a(2),a(3));return s.createElement(t.TimePicker,{onChange:n})}}},1105:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u4f7f\u7528 ",["code","disabledHours"]," ",["code","disabledMinutes"]," ",["code","disabledSeconds"]," \u7ec4\u5408\u7981\u6b62\u7528\u6237\u9009\u62e9\u67d0\u4e2a\u65f6\u95f4\uff0c\u914d\u5408 ",["code","hideDisabledOptions"]," \u53ef\u4ee5\u76f4\u63a5\u628a\u4e0d\u53ef\u9009\u62e9\u7684\u9879\u9690\u85cf\u3002"]],"en-US":[["p","Make part of time unselectable by ",["code","disabledHours"]," ",["code","disabledMinutes"]," ",["code","disabledSeconds"],", and we even can hide those unselectable options by ",["code","hideDisabledOptions"],"."]]},meta:{order:5,title:{"zh-CN":"\u7981\u6b62\u9009\u9879","en-US":"Disabled Time"},filename:"components/time-picker/demo/disable-options.md",id:"components-time-picker-demo-disable-options"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">disabledHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> hours <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  hours<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> hours<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">disabledMinutes</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">===</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">===</span> <span class="token number">23</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n      <span class="token attr-name">disabledHours</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>disabledHours<span class="token punctuation">}</span></span>\n      <span class="token attr-name">disabledMinutes</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>disabledMinutes<span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Just</span> <span class="token attr-name">Disabled"</span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n      <span class="token attr-name">disabledHours</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>disabledHours<span class="token punctuation">}</span></span>\n      <span class="token attr-name">disabledMinutes</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>disabledMinutes<span class="token punctuation">}</span></span>\n      <span class="token attr-name">hideDisabledOptions</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Hide</span> <span class="token attr-name">Directly"</span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){for(var a=[],t=n;t<s;t++)a.push(t);return a}function s(){var s=n(0,60);return s.splice(20,4),s}function t(s){return 20===s?n(0,31):23===s?n(30,60):[]}var p=a(1),e=(a(2),a(3));return p.createElement("div",null,p.createElement(e.TimePicker,{disabledHours:s,disabledMinutes:t,placeholder:"Just Disabled"}),p.createElement(e.TimePicker,{disabledHours:s,disabledMinutes:t,hideDisabledOptions:!0,placeholder:"Hide Directly"}))},style:"\n#components-time-picker-demo-disable-options .ant-time-picker {\n  width: 120px;\n}\n"}},1106:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u7981\u7528\u65f6\u95f4\u9009\u62e9\u3002"]],"en-US":[["p","A disabled state of the ",["code","TimePicker"],"."]]},meta:{order:3,title:{"zh-CN":"\u7981\u7528","en-US":"disabled"},filename:"components/time-picker/demo/disabled.md",id:"components-time-picker-demo-disabled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var s=a(1),t=(a(2),a(3)),p=a(27),e=n(p);return s.createElement(t.TimePicker,{defaultValue:(0,e["default"])("12:08:23","HH:mm:ss"),disabled:!0})}}},1107:function(n,s,a){n.exports={content:{"zh-CN":[["p","TimePicker \u6d6e\u5c42\u4e2d\u7684\u5217\u4f1a\u968f\u7740 ",["code","format"]," \u53d8\u5316\uff0c\u5f53\u7565\u53bb ",["code","format"]," \u4e2d\u7684\u67d0\u90e8\u5206\u65f6\uff0c\u6d6e\u5c42\u4e2d\u5bf9\u5e94\u7684\u5217\u4e5f\u4f1a\u6d88\u5931\u3002"]],"en-US":[["p","While part of ",["code","format"]," is omitted, the corresponding column in panel will disappear, too."]]},meta:{order:4,title:{"zh-CN":"\u9009\u62e9\u65f6\u5206","en-US":"Hour and minute"},filename:"components/time-picker/demo/hide-column.md",id:"components-time-picker-demo-hide-column"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> format <span class="token operator">=</span> <span class="token string">\'HH:mm\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08\'</span><span class="token punctuation">,</span> format<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>format<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var s=a(1),t=(a(2),a(3)),p=a(27),e=n(p),o="HH:mm";return s.createElement(t.TimePicker,{defaultValue:(0,e["default"])("12:08",o),format:o})}}},1108:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u4e09\u79cd\u5927\u5c0f\u7684\u8f93\u5165\u6846\uff0c\u5927\u7684\u7528\u5728\u8868\u5355\u4e2d\uff0c\u4e2d\u7684\u4e3a\u9ed8\u8ba4\u3002"]],"en-US":[["p","The input box comes in three sizes. large is used in the form, while the medium size is the default."]]},meta:{order:2,title:{"zh-CN":"\u4e09\u79cd\u5927\u5c0f","en-US":"Three Sizes"},filename:"components/time-picker/demo/size.md",id:"components-time-picker-demo-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var s=a(1),t=(a(2),a(3)),p=a(27),e=n(p);return s.createElement("div",null,s.createElement(t.TimePicker,{defaultValue:(0,e["default"])("12:08:23","HH:mm:ss"),size:"large"}),s.createElement(t.TimePicker,{defaultValue:(0,e["default"])("12:08:23","HH:mm:ss")}),s.createElement(t.TimePicker,{defaultValue:(0,e["default"])("12:08:23","HH:mm:ss"),size:"small"}))}}},1109:function(n,s,a){n.exports={content:{"zh-CN":[["p","value \u548c onChange \u9700\u8981\u914d\u5408\u4f7f\u7528\u3002"]],"en-US":[["p",["code","value"]," and ",["code","onChange"]," should be used together,"]]},meta:{order:1,title:{"zh-CN":"\u53d7\u63a7\u7ec4\u4ef6","en-US":"Under Control"},filename:"components/time-picker/demo/value.md",id:"components-time-picker-demo-value"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> time <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'
}],preview:function(){function n(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],e=Object.getOwnPropertyDescriptor(s,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function s(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function t(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function p(s,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(s,a):n(s,a))}var e=a(1),o=(a(2),a(3)),c=function(n){function a(){var p,e,o;s(this,a);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return p=e=t(this,n.call.apply(n,[this].concat(u))),e.state={value:null},e.onChange=function(n){console.log(n),e.setState({value:n})},o=p,t(e,o)}return p(a,n),a.prototype.render=function(){return e.createElement(o.TimePicker,{value:this.state.value,onChange:this.onChange})},a}(e.Component);return e.createElement(c,null)}}},1258:function(n,s,a){n.exports={"12hours":a(1102),addon:a(1103),basic:a(1104),"disable-options":a(1105),disabled:a(1106),"hide-column":a(1107),size:a(1108),value:a(1109)}}});