---
title: 2019.06.05
excerpt: 렉시컬 스코프, 호이스팅, 네임스페이스 / 비공개 변수 만들기, 아파치와 톰 캣의 차이
date: 2019-06-05
---

변수의 유효범위, 함수의 유효범위와 호이스팅, 유효범위 체인 복습.  
유효범위 체인이 이해가 가지 않아서 인터넷으로 따로 검색

## 렉시컬 스코프(lexically scoped)

언어적으로 유효범위를 가지고 있다고 책에 서술되어 있으나 이해가 가지 않음.  
아래 인터넷에서 적절한 예시와 설명을 찾았다.

```javascript
var x = 1;

function foo() {
    var x = 10;
    bar(); --> 호출된 시점
}

function bar() {
    console.log(x); -->선언된 시점
}

foo(); // ?
bar(); // ?
```

1. 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정
    1. 함수 bar의 스코프는 전역
    2. 렉시컬 스코프(Lexical scope) 또는 정적 스코프(Static scope)
    3. 자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다.
2. **렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언했는지에 따라 생김.**
3. **함수를 선언한 시점에 상위 스코프가 결정된다. → 호출된 시점이 아닌 선언된 시점의 스코프를 볼것**
4. 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳(상위 범위에서)에 있는 변수를 계속 참조. 때문에 선언된 시점의 스코프를 봐야하는 것.
5. 무슨 짓을 해도 함수가 한 번 선언된 이상, 전역변수를 가리키게 되어있는 해당 변수가 다른 걸 가리키게 할 수 없음. 유일한 방법은 참조하고 있는 전역변수를 다른 값으로 바꾸는 것 
6. 위 예제의 함수 bar는 전역에 선언되었다. 따라서 함수 bar의 상위 스코프는 전역 스코프이고 위 예제는 전역 변수 x의 값 1을 두번 출력한다.

## 호이스팅

자바스크립트 스코프 특징

1. 렉시컬 스코프
2. 함수레벨 스코프 ( +블록 레벨 스코프-ES6)

자바스크립트 엔진은 코드를 인터프리팅 하기 전에 그 코드를 먼저 컴파일한다.  
var a = 2; 를 두 개의 구문으로 분리하여 본다.

1. `var a;`
2. `a = 2;`

변수 선언(생성) 단계와 초기화 단계를 나누고 → 선언 단계에서는 그 선언이 소스코드의 어디에 위치하든 해당 스코프의 컴파일단계에서 처리  
(언어 스펙상으로 변수는 렉시컬 환경이 인스턴스화되고 초기화될 때 생성된다고 한다.)  
= 선언단계가 스코프의 꼭대기로 호이스팅("끌어올림")됨  
참고: 블록스코프인 let도 호이스팅이 된다. 그렇지만 선언 전에 참조할 경우 undefined를 반환하지 않고 ReferenceError를 발생시키는 특징이 있다.

```javascript
function hoistingExam(){  
    console.log("value="+value);
    var value =10;
    console.log("value="+value);
}
hoistingExam();
//실행결과
/*
value= undefined  
value= 10  
*/
```

## 함수의 호이스팅

함수 선언문 방식만 호이스팅이 가능하다

```javascript
// 함수 선언문
hoistingExam();  
function hoistingExam(){  
    var hoisting_val =10;
    console.log("hoisting_val ="+hoisting_val);
}
//실행결과
/*
hoisting_val =10  
*/

//함수 표현식
hoistingExam2();  
var hoistingExam2 = function(){  
    var hoisting_val =10;
    console.log("hoisting_val ="+hoisting_val);
}
//실행결과
/*
hoistingExam2 of object is not a function  
*/
```

1. 함수 표현 식과 Function생성자를 통해 함수를 정의하는 방법은 호이스팅이 되지 않는다.
    1. 변수에 함수를 초기화(= 함수변수)
    2. 선언문이 호이스팅이 되어 상단으로 올려진다 하더라도 함수가 아닌 변수로써 인식
    3. 그야 변수에 담았으니까요....

## 네임스페이스 만들기

1. 방법은 크게 두가지
    1. 전역 변수 대신 한 번 함수 안에 넣어 지역변수로 만든다.
    2. 객체 안의 속성으로 만든다.
2. 라이브러리들도 네임스페이스 사용
    1. naver는 jindo, facebook은 FB, jquery는 jQuery(또는 $)

```javascript
var obj = {
    x: 'local',
    y: function() {
    alert(this.x);
    }
}
//접근방법 obj.x, obj.y()
//전역변수를 하나로 최소화해서 변수가 겹칠 우려도 최소화
```

## 비공개 변수

### 패턴1

```javascript
var another = function () {
    var x = 'local';
    function y() {
    alert(x);
    }
    return { y: y };
}
var newScope = another();
```

1. 함수로 감싼 후 return을 통해 공개할 변수(y)만 공개하고 비공개할 변수(x)는 비공개하는 방법
2. return하는 변수는 공개 변수고, 다른 것은 비공개 변수

### 패턴2

```javascript
var newScope = (function () {
    var x = 'local';
    return {
    y: function() {
        alert(x);
    }
    };
})();
```

1. (function() {})(); 구문 = 모듈 패턴
2. 변수에 담지 않고 함수를 선언 후 바로 실행. 리턴으로 값을 담아줌
3. 함수를 function() {}로 선언하면서 동시에 ()를 붙임

## 아파치와 톰캣의 차이

1. 톰캣 : WAS
    1. 아파치(웹서버)의 기능(웹서비스데몬, Httpd)를 포함하고 있다.
    2. WAS는 정적,동적 처리 둘다 가능하지만 정적처리를 WAS가 하게되면 부하가 많이 걸려서 좋지 않음
2. 아파치 : HTTP 웹서버
3. WAS, Web Server를 따로 두고 쓰는 이유가 성능때문이라고 하는 건 잘못되었다.
    1. 톰캣5.5 이상부터는 httpd의 native모듈을 사용해서 정적파일을 처리하는 기능을 제공하는데 
    이것이 순수 아파치 Httpd만 사용하는 것과 비교해서 성능이 전혀 떨어지지 않기 때문이다.
    2. 그럼에도 톰캣앞에 아파치를 두는 이유는 하나의 서버에서 php애플리케이션과 java애플리케이션을 함께 사용하거나, httpd 서버를 간단한 로드밸런싱을 위해서 사용해야 할 때 필요하기 때문.

### Refer

[https://limmmee.tistory.com/4](https://limmmee.tistory.com/4)

[https://jeong-pro.tistory.com/84](https://jeong-pro.tistory.com/84)