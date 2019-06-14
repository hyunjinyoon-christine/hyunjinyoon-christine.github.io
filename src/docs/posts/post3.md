---
title: 2019.06.14
excerpt: 자바스크립트는 어떻게 작동하는가?
date: 2019-05-22
---

## 자바스크립트는 어떻게 동작하는가?

1. 자바스크립트 엔진의 대표적인 예는 Google V8엔진
2. V8은 Chrome과 Node.js에서 사용
3. 엔진 구성
    1. Memory Heap : 메모리 할당이 일어나는 곳
    2. Call Stack : 코드 실행에따라 호출 스택이 쌓이는 곳

## 런타임

1. 자바스크립트 엔진 이외에도 자바스크립트에 관여하는 요소들
    1. DOM, Ajax, setTimeout같은 브라우저에서 제공하는 API들을 Web API
    2. Event Roop와 Callback Que

## Call stack

1. 자바스크립트는 기본적으로 싱글 쓰레드 기반의 언어
    1. = 호출 스택이 하나라는 소리= 한번에 한가지의 작업만 가능
2. 프로그램 상에서 어디에 있는지를 기록하는 자료구조
3. 호출 스택의 각 단계를 스택 프레임(Stack Frame)

### Refer
https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/