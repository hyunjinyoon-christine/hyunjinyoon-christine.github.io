---
title: 2019.06.05
excerpt: 아파치와 톰캣의 차이
date: 2019-06-05
---

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