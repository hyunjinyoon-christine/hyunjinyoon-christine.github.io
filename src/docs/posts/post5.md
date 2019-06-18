---
title: 2019.06.05
excerpt: 네임스페이스 / 비공개 변수 만들기
date: 2019-06-05
---

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
