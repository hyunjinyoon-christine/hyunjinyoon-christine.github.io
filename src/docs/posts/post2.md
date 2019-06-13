---
title: 2019.06.13
excerpt: 생성자 함수
date: 2019-06-13
---

## 생성자 함수

1. 객체를 생성하는 방법 중 하나
2. 리터럴과 Obejct()로 객체를 생성하는 것과 다르다
    - 객체를 생성하면 같은 속성을 가진 객체를 여러 개 생성할 수 있습니다 = 붕어빵
    - 즉, person1과 person2 객체는 name, email, walk 프로퍼티를 갖게 되며, 이 방식은 클래스를 통해 객체를 생성하는 것과 유사

```javascript
var invitation = new Invitation("Somebody","something","sometime","somewhere")
```

```javascript
function Invitation(who, what, when, where) { //생성자명은 항상 대문자로
    this.who = who;
    this.what = what;
    this.when = when;
    this. where = where;
}
```
