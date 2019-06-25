(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{195:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("변수의 유효범위, 함수의 유효범위와 호이스팅, 유효범위 체인 복습."),a("br"),t._v("\n유효범위 체인이 이해가 가지 않아서 인터넷으로 따로 검색")]),t._v(" "),a("h2",{attrs:{id:"렉시컬-스코프-lexically-scoped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#렉시컬-스코프-lexically-scoped","aria-hidden":"true"}},[t._v("#")]),t._v(" 렉시컬 스코프(lexically scoped)")]),t._v(" "),a("p",[t._v("언어적으로 유효범위를 가지고 있다고 책에 서술되어 있으나 이해가 가지 않음."),a("br"),t._v("\n아래 인터넷에서 적절한 예시와 설명을 찾았다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 호출된 시점\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("선언된 시점\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ?")]),t._v("\n")])])]),a("ol",[a("li",[t._v("함수를 어디서 선언하였는지에 따라 상위 스코프를 결정\n"),a("ol",[a("li",[t._v("함수 bar의 스코프는 전역")]),t._v(" "),a("li",[t._v("렉시컬 스코프(Lexical scope) 또는 정적 스코프(Static scope)")]),t._v(" "),a("li",[t._v("자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다.")])])]),t._v(" "),a("li",[a("strong",[t._v("렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언했는지에 따라 생김.")])]),t._v(" "),a("li",[a("strong",[t._v("함수를 선언한 시점에 상위 스코프가 결정된다. → 호출된 시점이 아닌 선언된 시점의 스코프를 볼것")])]),t._v(" "),a("li",[t._v("함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳(상위 범위에서)에 있는 변수를 계속 참조. 때문에 선언된 시점의 스코프를 봐야하는 것.")]),t._v(" "),a("li",[t._v("무슨 짓을 해도 함수가 한 번 선언된 이상, 전역변수를 가리키게 되어있는 해당 변수가 다른 걸 가리키게 할 수 없음. 유일한 방법은 참조하고 있는 전역변수를 다른 값으로 바꾸는 것")]),t._v(" "),a("li",[t._v("위 예제의 함수 bar는 전역에 선언되었다. 따라서 함수 bar의 상위 스코프는 전역 스코프이고 위 예제는 전역 변수 x의 값 1을 두번 출력한다.")])]),t._v(" "),a("h2",{attrs:{id:"호이스팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#호이스팅","aria-hidden":"true"}},[t._v("#")]),t._v(" 호이스팅")]),t._v(" "),a("p",[t._v("자바스크립트 스코프 특징")]),t._v(" "),a("ol",[a("li",[t._v("렉시컬 스코프")]),t._v(" "),a("li",[t._v("함수레벨 스코프 ( +블록 레벨 스코프-ES6)")])]),t._v(" "),a("p",[t._v("자바스크립트 엔진은 코드를 인터프리팅 하기 전에 그 코드를 먼저 컴파일한다."),a("br"),t._v("\nvar a = 2; 를 두 개의 구문으로 분리하여 본다.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("var a;")])]),t._v(" "),a("li",[a("code",[t._v("a = 2;")])])]),t._v(" "),a("p",[t._v("변수 선언(생성) 단계와 초기화 단계를 나누고 → 선언 단계에서는 그 선언이 소스코드의 어디에 위치하든 해당 스코프의 컴파일단계에서 처리"),a("br"),t._v("\n(언어 스펙상으로 변수는 렉시컬 환경이 인스턴스화되고 초기화될 때 생성된다고 한다.)"),a("br"),t._v('\n= 선언단계가 스코프의 꼭대기로 호이스팅("끌어올림")됨'),a("br"),t._v("\n참고: 블록스코프인 let도 호이스팅이 된다. 그렇지만 선언 전에 참조할 경우 undefined를 반환하지 않고 ReferenceError를 발생시키는 특징이 있다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//실행결과")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nvalue= undefined  \nvalue= 10  \n*/")]),t._v("\n")])])]),a("h2",{attrs:{id:"함수의-호이스팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수의-호이스팅","aria-hidden":"true"}},[t._v("#")]),t._v(" 함수의 호이스팅")]),t._v(" "),a("p",[t._v("함수 선언문 방식만 호이스팅이 가능하다")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 함수 선언문")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hoisting_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoisting_val ="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("hoisting_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//실행결과")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nhoisting_val =10  \n*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//함수 표현식")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hoistingExam2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hoistingExam2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hoisting_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hoisting_val ="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("hoisting_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//실행결과")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nhoistingExam2 of object is not a function  \n*/")]),t._v("\n")])])]),a("ol",[a("li",[t._v("함수 표현 식과 Function생성자를 통해 함수를 정의하는 방법은 호이스팅이 되지 않는다.\n"),a("ol",[a("li",[t._v("변수에 함수를 초기화(= 함수변수)")]),t._v(" "),a("li",[t._v("선언문이 호이스팅이 되어 상단으로 올려진다 하더라도 함수가 아닌 변수로써 인식")]),t._v(" "),a("li",[t._v("그야 변수에 담았으니까요....")])])])])])}],!1,null,null,null);s.default=e.exports}}]);