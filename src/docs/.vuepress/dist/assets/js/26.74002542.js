(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{217:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("자바스크립트 스코프 특징")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("함수 선언문 방식만 호이스팅이 가능하다")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[a("a",{attrs:{href:"https://limmmee.tistory.com/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://limmmee.tistory.com/4"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jeong-pro.tistory.com/84",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jeong-pro.tistory.com/84"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("변수의 유효범위, 함수의 유효범위와 호이스팅, 유효범위 체인 복습."),s("br"),this._v("\n유효범위 체인이 이해가 가지 않아서 인터넷으로 따로 검색")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"렉시컬-스코프-lexically-scoped"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#렉시컬-스코프-lexically-scoped","aria-hidden":"true"}},[this._v("#")]),this._v(" 렉시컬 스코프(lexically scoped)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("언어적으로 유효범위를 가지고 있다고 책에 서술되어 있으나 이해가 가지 않음."),s("br"),this._v("\n아래 인터넷에서 적절한 예시와 설명을 찾았다.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 호출된 시점\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("선언된 시점\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ?")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("함수를 어디서 선언하였는지에 따라 상위 스코프를 결정\n"),a("ol",[a("li",[t._v("함수 bar의 스코프는 전역")]),t._v(" "),a("li",[t._v("렉시컬 스코프(Lexical scope) 또는 정적 스코프(Static scope)")]),t._v(" "),a("li",[t._v("자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다.")])])]),t._v(" "),a("li",[a("strong",[t._v("렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언했는지에 따라 생김.")])]),t._v(" "),a("li",[a("strong",[t._v("함수를 선언한 시점에 상위 스코프가 결정된다. → 호출된 시점이 아닌 선언된 시점의 스코프를 볼것")])]),t._v(" "),a("li",[t._v("함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳(상위 범위에서)에 있는 변수를 계속 참조. 때문에 선언된 시점의 스코프를 봐야하는 것.")]),t._v(" "),a("li",[t._v("무슨 짓을 해도 함수가 한 번 선언된 이상, 전역변수를 가리키게 되어있는 해당 변수가 다른 걸 가리키게 할 수 없음. 유일한 방법은 참조하고 있는 전역변수를 다른 값으로 바꾸는 것")]),t._v(" "),a("li",[t._v("위 예제의 함수 bar는 전역에 선언되었다. 따라서 함수 bar의 상위 스코프는 전역 스코프이고 위 예제는 전역 변수 x의 값 1을 두번 출력한다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"호이스팅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#호이스팅","aria-hidden":"true"}},[this._v("#")]),this._v(" 호이스팅")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("렉시컬 스코프")]),this._v(" "),s("li",[this._v("함수레벨 스코프 ( +블록 레벨 스코프-ES6)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("자바스크립트 엔진은 코드를 인터프리팅 하기 전에 그 코드를 먼저 컴파일한다."),s("br"),this._v("\nvar a = 2; 를 두 개의 구문으로 분리하여 본다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("code",[this._v("var a;")])]),this._v(" "),s("li",[s("code",[this._v("a = 2;")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("변수 선언(생성) 단계와 초기화 단계를 나누고 → 선언 단계에서는 그 선언이 소스코드의 어디에 위치하든 해당 스코프의 컴파일단계에서 처리"),s("br"),this._v("\n(언어 스펙상으로 변수는 렉시컬 환경이 인스턴스화되고 초기화될 때 생성된다고 한다.)"),s("br"),this._v('\n= 선언단계가 스코프의 꼭대기로 호이스팅("끌어올림")됨'),s("br"),this._v("\n참고: 블록스코프인 let도 호이스팅이 된다. 그렇지만 선언 전에 참조할 경우 undefined를 반환하지 않고 ReferenceError를 발생시키는 특징이 있다.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//실행결과")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nvalue= undefined  \nvalue= 10  \n*/")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"함수의-호이스팅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수의-호이스팅","aria-hidden":"true"}},[this._v("#")]),this._v(" 함수의 호이스팅")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 함수 선언문")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hoisting_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoisting_val ="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("hoisting_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//실행결과")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nhoisting_val =10  \n*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//함수 표현식")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hoistingExam2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hoisting_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoisting_val ="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("hoisting_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//실행결과")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nhoistingExam2 of object is not a function  \n*/")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("함수 표현 식과 Function생성자를 통해 함수를 정의하는 방법은 호이스팅이 되지 않는다.\n"),s("ol",[s("li",[this._v("변수에 함수를 초기화(= 함수변수)")]),this._v(" "),s("li",[this._v("선언문이 호이스팅이 되어 상단으로 올려진다 하더라도 함수가 아닌 변수로써 인식")]),this._v(" "),s("li",[this._v("그야 변수에 담았으니까요....")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"네임스페이스-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#네임스페이스-만들기","aria-hidden":"true"}},[this._v("#")]),this._v(" 네임스페이스 만들기")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("방법은 크게 두가지\n"),s("ol",[s("li",[this._v("전역 변수 대신 한 번 함수 안에 넣어 지역변수로 만든다.")]),this._v(" "),s("li",[this._v("객체 안의 속성으로 만든다.")])])]),this._v(" "),s("li",[this._v("라이브러리들도 네임스페이스 사용\n"),s("ol",[s("li",[this._v("naver는 jindo, facebook은 FB, jquery는 jQuery(또는 $)")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//접근방법 obj.x, obj.y()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//전역변수를 하나로 최소화해서 변수가 겹칠 우려도 최소화")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"비공개-변수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비공개-변수","aria-hidden":"true"}},[this._v("#")]),this._v(" 비공개 변수")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"패턴1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#패턴1","aria-hidden":"true"}},[this._v("#")]),this._v(" 패턴1")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("another")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newScope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("another")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("함수로 감싼 후 return을 통해 공개할 변수(y)만 공개하고 비공개할 변수(x)는 비공개하는 방법")]),this._v(" "),s("li",[this._v("return하는 변수는 공개 변수고, 다른 것은 비공개 변수")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"패턴2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#패턴2","aria-hidden":"true"}},[this._v("#")]),this._v(" 패턴2")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newScope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("(function() {})(); 구문 = 모듈 패턴")]),this._v(" "),s("li",[this._v("변수에 담지 않고 함수를 선언 후 바로 실행. 리턴으로 값을 담아줌")]),this._v(" "),s("li",[this._v("함수를 function() {}로 선언하면서 동시에 ()를 붙임")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"아파치와-톰캣의-차이"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#아파치와-톰캣의-차이","aria-hidden":"true"}},[this._v("#")]),this._v(" 아파치와 톰캣의 차이")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("톰캣 : WAS\n"),a("ol",[a("li",[t._v("아파치(웹서버)의 기능(웹서비스데몬, Httpd)를 포함하고 있다.")]),t._v(" "),a("li",[t._v("WAS는 정적,동적 처리 둘다 가능하지만 정적처리를 WAS가 하게되면 부하가 많이 걸려서 좋지 않음")])])]),t._v(" "),a("li",[t._v("아파치 : HTTP 웹서버")]),t._v(" "),a("li",[t._v("WAS, Web Server를 따로 두고 쓰는 이유가 성능때문이라고 하는 건 잘못되었다.\n"),a("ol",[a("li",[t._v("톰캣5.5 이상부터는 httpd의 native모듈을 사용해서 정적파일을 처리하는 기능을 제공하는데\n이것이 순수 아파치 Httpd만 사용하는 것과 비교해서 성능이 전혀 떨어지지 않기 때문이다.")]),t._v(" "),a("li",[t._v("그럼에도 톰캣앞에 아파치를 두는 이유는 하나의 서버에서 php애플리케이션과 java애플리케이션을 함께 사용하거나, httpd 서버를 간단한 로드밸런싱을 위해서 사용해야 할 때 필요하기 때문.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[this._v("#")]),this._v(" Refer")])}],!1,null,null,null);s.default=e.exports}}]);