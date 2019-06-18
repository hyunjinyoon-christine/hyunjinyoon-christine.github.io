(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{192:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"네임스페이스-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#네임스페이스-만들기","aria-hidden":"true"}},[t._v("#")]),t._v(" 네임스페이스 만들기")]),t._v(" "),s("ol",[s("li",[t._v("방법은 크게 두가지\n"),s("ol",[s("li",[t._v("전역 변수 대신 한 번 함수 안에 넣어 지역변수로 만든다.")]),t._v(" "),s("li",[t._v("객체 안의 속성으로 만든다.")])])]),t._v(" "),s("li",[t._v("라이브러리들도 네임스페이스 사용\n"),s("ol",[s("li",[t._v("naver는 jindo, facebook은 FB, jquery는 jQuery(또는 $)")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//접근방법 obj.x, obj.y()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//전역변수를 하나로 최소화해서 변수가 겹칠 우려도 최소화")]),t._v("\n")])])]),s("h1",{attrs:{id:"비공개-변수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비공개-변수","aria-hidden":"true"}},[t._v("#")]),t._v(" 비공개 변수")]),t._v(" "),s("h2",{attrs:{id:"패턴1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#패턴1","aria-hidden":"true"}},[t._v("#")]),t._v(" 패턴1")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("another")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newScope "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("another")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",[s("li",[t._v("함수로 감싼 후 return을 통해 공개할 변수(y)만 공개하고 비공개할 변수(x)는 비공개하는 방법")]),t._v(" "),s("li",[t._v("return하는 변수는 공개 변수고, 다른 것은 비공개 변수")])]),t._v(" "),s("h2",{attrs:{id:"패턴2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#패턴2","aria-hidden":"true"}},[t._v("#")]),t._v(" 패턴2")]),t._v(" "),s("pre",[s("code",[t._v("var newScope = (function () {\n  var x = 'local';\n  return {\n    y: function() {\n      alert(x);\n    }\n  };\n})();\n")])]),t._v(" "),s("ol",[s("li",[t._v("(function() {})(); 구문 = 모듈 패턴")]),t._v(" "),s("li",[t._v("변수에 담지 않고 함수를 선언 후 바로 실행. 리턴으로 값을 담아줌")]),t._v(" "),s("li",[t._v("함수를 function() {}로 선언하면서 동시에 ()를 붙임")])])])}],!1,null,null,null);a.default=r.exports}}]);