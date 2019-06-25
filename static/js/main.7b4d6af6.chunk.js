(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={scrollable:"scrollable-menu_scrollable__290n9"}},18:function(e,t,n){e.exports={selectable:"selectable_selectable__1ujXG",active:"selectable_active__2l-hj"}},24:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),l=(n(29),n(30),n(1)),c=n(22),u=n.n(c),s=n(18),f=n.n(s);var d=function(e){var t=e.onClick,n=e.i18nKey,a=e.editing;return r.a.createElement("div",{onClick:t,className:u()(f.a.selectable,a?f.a.active:"")},r.a.createElement("p",null,n))},p=n(14),b=n.n(p),h=function(e){var t=e.translations,n=e.markEditing;return r.a.createElement("div",{className:b.a.scrollable},t.map(function(e){return r.a.createElement(d,Object.assign({key:e.id,onClick:function(){return n(e.id)}},e))}))},v=Object(l.b)(function(e){return{translations:(t=e.translations,t)};var t},function(e){return{markEditing:function(t){return e(function(e){return{type:"MARK_EDITING",id:e}}(t))}}})(h),m=n(4),g=n(3),j=n(8),y=n(9),O=n(11),E=n(10),k=n(5),C=n(12),T=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(k.a)(n)),n.state={selectedKey:n.props.selectedKey,translation:n.props.translation||""},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({translation:t}),this.props.onChange({locale:this.props.locale,translation:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,this.props.locale),r.a.createElement("textarea",{value:this.state.translation,rows:"4",cols:"50",onChange:this.handleChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.selectedKey!==e.selectedKey?{selectedKey:e.selectedKey,translation:e.translation||""}:null}}]),t}(r.a.Component),I=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).state=Object(g.a)({},e.translation),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n.onInputChange=n.onInputChange.bind(Object(k.a)(n)),n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.updateTranslation(Object(g.a)({},this.props.translation,this.state))}},{key:"onInputChange",value:function(e){var t=e.locale,n=e.translation;this.setState(Object(m.a)({},t,n))}},{key:"render",value:function(){var e=this.props.translation;return r.a.createElement("div",{className:b.a.scrollable},e&&r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T,{locale:"fr",selectedKey:e.i18nKey,translation:e.fr,onChange:this.onInputChange}),r.a.createElement(T,{locale:"en",selectedKey:e.i18nKey,translation:e.en,onChange:this.onInputChange}),r.a.createElement("button",{type:"submit"}," Save ")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.translation&&t.id===e.translation.id?null:Object(g.a)({},e.translation)}}]),t}(r.a.Component),K=Object(l.b)(function(e){return{translation:(t=e.translations,t.find(function(e){return e.editing}))};var t},function(e){return{updateTranslation:function(t){return e({type:"EDIT_TRANSLATION",id:(n=t).id,fr:n.fr,en:n.en});var n}}})(I);function S(e,t){for(var n=t,a=0;a<e.length;++a)n=n[e[a]];return n}var w=function(e){var t=e.addTranslation,n=function(e){var n=JSON.parse(e.target.result),a=Object.keys(n)[0],r=n[a];(function e(t){return Object.keys(t).map(function(n){return t[n]&&"object"==typeof t[n]?e(t[n]).flat().flat().map(function(e){return n+"."+e}):n}).flat()})(r).map(function(e){return t({key:e,langage:a,translationValue:S(e.split("."),r)})})};return r.a.createElement("input",{type:"file",multiple:!0,accept:".json,application/json",onChange:function(e){return(t=e).preventDefault(),void Array.from(t.target.files).forEach(function(e){var t=new FileReader;t.onloadend=n,t.readAsText(e)});var t}})},N=Object(l.b)(null,function(e){return{addTranslation:function(t){var n=t.key,a=t.langage,r=t.translationValue;return e(function(e){return{type:"ADD_TRANSLATION",key:e.key,langage:e.langage,translationValue:e.translationValue}}({key:n,langage:a,translationValue:r}))}}})(w);function A(e,t,n){var a=n,r=e.split(".");return r.forEach(function(e,n){n===r.length-1?a[e]=t:(a[e]||(a[e]={}),a=a[e])}),n}var _=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).state={jsons:[]},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"exportToJson",value:function(e){e.preventDefault();var t=function(e){var t={};e.forEach(function(e){A(e.i18nKey,e.fr,t)});var n={};return e.forEach(function(e){A(e.i18nKey,e.en,n)}),[{fr:t},{en:n}]}(this.props.translations);this.setState({jsons:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.exportToJson(t)}},"Export"),this.renderLinks())}},{key:"renderLinks",value:function(){return this.state.jsons.map(function(e){var t="".concat(Object.keys(e)[0],".json");return[r.a.createElement("br",null),r.a.createElement("a",{href:D(e),key:t,download:t},t)]})}}]),t}(r.a.Component);function D(e){return"data:application/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(e)))}var x=Object(l.b)(function(e){return{translations:e.translations}},null)(_);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(x,null),r.a.createElement(v,null),r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(7),J=n(23),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TRANSLATION":var n,a=e.findIndex(function(e){return e.i18nKey===t.key});return-1!==a?e.map(function(e,n){return n===a?Object(g.a)({},e,Object(m.a)({},t.langage,t.translationValue)):e}):[].concat(Object(J.a)(e),[(n={id:t.key,i18nKey:t.key},Object(m.a)(n,t.langage,t.translationValue),Object(m.a)(n,"editing",!1),n)]);case"EDIT_TRANSLATION":return e.map(function(e){return e.id===t.id?Object(g.a)({},e,{fr:t.fr,en:t.en}):e});case"MARK_EDITING":return e.map(function(e){return e.id===t.id?Object(g.a)({},e,{editing:!0}):Object(g.a)({},e,{editing:!1})});default:return e}},F=Object(V.b)({translations:L}),G=Object(V.c)(F);o.a.render(r.a.createElement(l.a,{store:G},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.7b4d6af6.chunk.js.map