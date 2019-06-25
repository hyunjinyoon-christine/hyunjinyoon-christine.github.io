---
title: 2019.06.25
excerpt: 트레일링 슬래시(trailing slash)
date: 2019-06-25
---

## 트레일링 슬래시(trailing slash)

    https://www.google.com/example/ -> 디렉토리입니다.
    https://www.google.com/example -> 파일입니다.

1. trailing slash를 통해 해당 URL이 리소스인지 파일인지 구분
    1. trailing slash가 있는 경우 → 리소스 확인
        1. 해당 이름의 디렉토리(폴더) 확인 
        2. 디렉토리가 있다면 그 안의 기본파일 (index.html) 확인 
        3. = 있는 경우는 폴더로 인식되어 그 아래에 있는 index.html을 표시
    2. trailing slash가 없는 경우 → 파일 확인
        1. 해당 이름의 파일이 존재하는지 확인
        2. 없을 경우 해당 이름의 디렉토리 확인
        3. 디렉토리가 있으면 그 안의 기본파일(index.html)을 확인
            1. 여기서 브라우져에서 자동으로 trailing slash를 확인해줌
2. 리소스와 파일에 맞게 trailing slash를 붙이면 파일 확인을 하는 동작을 생략할 수 있으므로 응답 속도가 빨라진다.

## 도메인 URL에도  trailing slash를 붙여야 할까?

1. path를 제외한 도메인 url
    1. = 하위 경로를 제외하고 웹서버까지만 명시
2. 도메인 URL에도 trailing slash 를 붙이는게 좋다.
3. 로딩속도가 더 빠름
4. [`http://www.naver.com`](http://www.naver.com) → `http://www.naver.com/`
    1. http://www.naver.com/
        1. HTTPS 프로토콜 + 도메인 네임 호스트 + 호스트 루트 경로 / 
    2. http://www.naver.com
        1. https 프로토콜 + 도메인 네임 호스트
        2. 리소스가 디렉토리(폴더)인지 파일인지 명시한 것이 아님. 리소스 장체를 명시하지 않은 것
            1. 리소스가 파일, 디렉토리인지 결정하는 요소는 host가 아니라 path에서 일어나는 것
        3. trailing slash는 리소스 종류 구분자 라기 보다는, 리소스 경로로 보아야.

## URL

1. 도메인 + 경로 = 도메인을 포함한 경로
2. 프로토콜://정보를 가진 컴퓨터 이름/디렉터리 이름/파일 네임으로 구성된다.
3. **호스트 Host name**
    1. 호스트 명은 네트워크에 연결된 장치 또는 서버들에 부여되는 고유한 이름으로 호스트 명은 IP 주소나 MAC 주소와 같은 기계적인 이름을 대신하여 일반인이 쉽게 읽고 이해할 수 있는 이름으로 만들어진다.
4. **2차 도메인, 메인도메인, 도메인**
    1. 일반적으로 도메인 둥록/구매처에서 등록하여 사용하는 도메인을 가리키며 서브 도메인에 대응하여 메인 도메인(또는 zone apex/root domain/naked domain/bare domain)으로 불리기도 하며,3차 도메인과 혼용하여 부르기도 합니다.
5. **디렉터리 directory**
    1. 해당 파일(또는 자원)이 서버의 어디에 있는지를 나타내는 경로로서 초기의 웹에서는 웹 서버상에서 물리적 파일 위치를 의미했다.
    2.  최근에는, 실제 물리적 경로를 나타내지 않고, 웹 서버에서 추상화하여 보여준다.
6. **파일 file**
    1. HTML(또는 XHTML), CSS 문서, 자바스크립트, 이미지, 문서,동영상 등의 파일
7. **쿼리 Query String**

## Host name과 Domain name의 차이