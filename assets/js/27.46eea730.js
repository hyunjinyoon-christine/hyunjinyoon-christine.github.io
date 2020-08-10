(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{204:function(_,v,i){"use strict";i.r(v);var l=i(0),n=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("div",{staticClass:"content"},[i("h2",{attrs:{id:"_1장-자바스크립트-소개"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1장-자바스크립트-소개","aria-hidden":"true"}},[_._v("#")]),_._v(" 1장 자바스크립트 소개")]),_._v(" "),i("h3",{attrs:{id:"자바스크립트-코어"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트-코어","aria-hidden":"true"}},[_._v("#")]),_._v(" 자바스크립트 코어")]),_._v(" "),i("ol",[i("li",[i("p",[_._v("타입의 종류 소개")]),_._v(" "),i("ol",[i("li",[_._v("숫자, 정수/실수, 문자열, boolean값, null, undefined")]),_._v(" "),i("li",[_._v("객체\n"),i("ol",[i("li",[_._v("이름 - 값 쌍(name-value pair)의 모음")]),_._v(" "),i("li",[_._v("접근방법\n"),i("ol",[i("li",[i("code",[_._v(".과 [ ]")]),_._v(" 을 사용해 접근 가능")]),_._v(" "),i("li",[i("code",[_._v('book["fat"]')]),_._v(" —> 대괄호에 키 입력")])])])])]),_._v(" "),i("li",[_._v("배열\n"),i("ol",[i("li",[_._v("숫자로 색인된 목록의 값들을 담을 수 있다.")])])]),_._v(" "),i("li",[_._v("객체와 배열 표현 문법을 초기화 표현식(initializer expression)이라고 한다")])])]),_._v(" "),i("li",[i("p",[_._v("표현식 expression")]),_._v(" "),i("ol",[i("li",[_._v("자바스크립트 문법 중 하나")]),_._v(" "),i("li",[_._v("프로그램의 상태를 바꾸지 않는다")]),_._v(" "),i("li",[_._v("값을 계산하거나 값을 참조")])])]),_._v(" "),i("li",[i("p",[_._v("설명문 statement")]),_._v(" "),i("ol",[i("li",[_._v("세미콜론으로 끝나는 행")]),_._v(" "),i("li",[_._v("값은 갖지 않지만 프로그램의 상태를 바꾼다.")]),_._v(" "),i("li",[_._v("조건문, 반복문(루프) 등 프로그램 구조를 제어할때 사용")])])]),_._v(" "),i("li",[i("p",[_._v("함수")]),_._v(" "),i("ol",[i("li",[_._v("이름과 매개변수를 가졌고 호출할 수 있는 자바스크립트 코드 블록")]),_._v(" "),i("li",[_._v('객체의 프로퍼티로 할당된 함수를 "메서드"라고 한다.')]),_._v(" "),i("li",[_._v("모든 자바스크립트 객체는 매서드를 갖는다.\n"),i("ol",[i("li",[_._v("a.push(1,2,3) 에서 push()메서드 등\n"),i("ol",[i("li",[_._v("배열도 Array 객체이다.")]),_._v(" "),i("li",[_._v('var arr = new Array(10, "문자열", false);')])])])])]),_._v(" "),i("li",[_._v('"this" 키워드는 메서드가 정의된 객체 자신을 가리킨다.')])])]),_._v(" "),i("li",[i("p",[_._v("클래스와 모듈")]),_._v(" "),i("ol",[i("li",[i("p",[_._v("클래스 정의하기")]),_._v(" "),i("p",[_._v("//객체 초기화하기 위해 생성자 함수 정의\nfunction Point(x,y) {\nthis.x = x;\nthis.y = y; }")]),_._v(" "),i("p",[_._v("var p = new Point(1,1);")]),_._v(" "),i("p",[_._v("//여기서 this.x 와 x는 서로 다른 값이다.\n//this는 새로 생성된 객체를 가리키는 것으로 객체의 x를 가리키는 것이고 인자로 안에 담긴 값 x는 인자값을 전달받기 위한 x이다.\n// 서로를 구분하기 위해 this를 붙여서 this.x , x라고 명명한 것")])])])]),_._v(" "),i("li",[i("p",[_._v("정규 표현식 문법")])]),_._v(" "),i("li",[i("p",[_._v("자바스크립트 서브셋 확장")])]),_._v(" "),i("li",[i("p",[_._v("서버사이드 측 자바스크립트")]),_._v(" "),i("ol",[i("li",[_._v("웹 브라우저 밖에서 자바스크립트를 사용하는 두가지 방법")])])])]),_._v(" "),i("h3",{attrs:{id:"_2장-클라이언트-측-자바스크립트"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2장-클라이언트-측-자바스크립트","aria-hidden":"true"}},[_._v("#")]),_._v(" 2장 클라이언트 측 자바스크립트")]),_._v(" "),i("ol",[i("li",[_._v("웹 브라우저와 자바스크립트\n"),i("ol",[i("li",[_._v("자바스크립트 코드를 script 태그를 통해 HTML파일에 내장할 수 있다는 점")])])]),_._v(" "),i("li",[_._v("Window 객체\n"),i("ol",[i("li",[_._v("자바스크립트로 웹 브라우저를 제어")]),_._v(" "),i("li",[_._v("클라이언트 측 자바스크립트에서 사용하는 전역함수\n"),i("ol",[i("li",[_._v("ex) 모달 띄우기 confirm(), 위치 이동 window.location , setTimeout")])])])])]),_._v(" "),i("li",[_._v("문서 스크립팅\n"),i("ol",[i("li",[_._v("HTML문서를 스크립트를 사용하여 조작\n"),i("ol",[i("li",[_._v("ex) document.getElementById()")])])])])]),_._v(" "),i("li",[_._v("CSS 다루기")]),_._v(" "),i("li",[_._v("이벤트 다루기")]),_._v(" "),i("li",[_._v("jquery 라이브러리")]),_._v(" "),i("li",[_._v("HTTP 스크립팅\n"),i("ol",[i("li",[_._v("자바스크립트의 네트워킹 API를 사용해 HTTP 요청을 스크립트 하는 방법")])])]),_._v(" "),i("li",[_._v("클라이언트 스토리지\n"),i("ol",[i("li",[_._v("웹 에플리케이션에 필요한 데이터를 클라이언트 측에 저장하는 방법")])])]),_._v(" "),i("li",[_._v("미디어와 그래픽 스크립팅\n"),i("ol",[i("li",[_._v("HTML canvas 다루기")])])]),_._v(" "),i("li",[_._v("HTML5 API")])])])}],!1,null,null,null);v.default=n.exports}}]);