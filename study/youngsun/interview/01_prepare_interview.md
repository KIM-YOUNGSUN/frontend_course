---
date: 2022-01-20 Thursday ~
---

# TIL

> **prepare interview**
<br />

## 프론트엔드란?
- 웹 퍼블리싱(html, css, javascript)에 대한 공부, UI&UX와 네트워크에 대한 지식이 필요
  - `UI/UX` : 사용자가 원하는 정보를 얻기 위해 필요한 화면을 제공해 주는 것(입력창, 즉 UI(User Interface)를 유저에게 제공하는 것)(처음 사용하는 유저에게 올바른 정보로 입력할 수 있게 안내해 주는 것(User Experience))
  - `네트워크` : 백엔드 개발자가 API 정보를 공유해주면 그 정보를 토대로 화면에 데이터를 나타내기 위해 데이터 바인딩(Data Binding)작업을 진행
---
## Http, Https
- Http : Hypertext Transfer Protocol
  - 웹 프로토콜(일종의 통신 규약 ➡ 어떻게 request하고 어떻게 response할지 정해둔 것) 중에 하나. 인터넷으로 데이터를 주고 받을 수 있는 통신 규약
- Http와 Https 통신 방식의 차이
  - 보안의 차이. Https는 정보가 암호화 되어 전송되기 때문에 당사자가 아니면 정보를 볼수 없음

  |Http|Https|
  |---|---|
  |암호화 X|보안, 암호화 O
  |빠름|설치 및 인증서 유지에 추가 비용
---
## REST_API
  - Rest(Representational State Transfer) : 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것
    - HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고,
    - HTTP Method(POST, GET, PUT, DELETE)를 통해
    - 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미
       - CRUD Operation : 컴퓨터 소프트 웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말
       - Create : 데이터 생성 (POST)
       - Read : 데이터 조회 (GET)
       - Update : 데이터 수정 (PUT)
       - Delete : 데이터 삭제 (DELETE)
### REST 구성 요소
  - 자원(Resource) : HTTP URI
  - 자원에 대한 행위(Verb) : HTTP Method
  - 자원에 대한 행위의 내용(Representations) : HTTP Message Pay Load
### REST 특징
  - Server-Client(서버-클라이언트 구조)
  - Stateless(무상태)
  - Cacheable(캐시 처리 기능)
  - Layered System(계층화)
  - Uniform Interface(인터페이스 일관성)
### REST 장단점
  #### 장점
  - HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구축할 필요가 없음
  - HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져 갈 수 있게 해줌
  - HTTP 프로토콜에 따르는 모든 플랫폼에서 사용 가능
  - Hypermedia API의 기본을 충실히 지키면서 범용성을 보장
  - REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있음
  - 여러 가지 서비스 디자인에서 생길 수 있는 문제를 최소화
  - 서버와 클라이언트의 역할을 명확하게 분리한다.
  #### 단점
  - 표준 자체가 존재하지 않아 정의가 필요
  - 사용할 수 있는 메소드가 4가지밖에 없음
  - HTTP Method 형태가 제한적
  - 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header 정보의 값을 처리해야 하므로 전문성 요구
  - 구형 브라우저에서 호환이 되지 않아 지원해주지 못하는 동작이 많음(익스폴로어)
### REST API
  - REST의 원리를 따르는 API를 의미
  - 설계 규칙 
    - URI는 동사보다는 명사, 대문자보다는 소문자를 사용
      - Bad Example http://khj93.com/Running/
      - Good Example  http://khj93.com/run/  
    - 마지막에 슬래시 (/)를 포함하지 않음
      - Bad Example http://khj93.com/test/  
      - Good Example  http://khj93.com/test
    - 언더바 대신 하이폰을 사용
      - Bad Example http://khj93.com/test_blog
      - Good Example  http://khj93.com/test-blog  
    - 파일 확장자는 URI에 포함하지 않음
      - Bad Example http://khj93.com/photo.jpg  
      - Good Example  http://khj93.com/photo  
    - 행위를 포함하지 않음
      - Bad Example http://khj93.com/delete-post/1  
      - Good Example  http://khj93.com/post/1  
### RESTful 
  - REST의 원리를 따르는 시스템을 의미
  - REST API 설계 규칙을 올바르게 지킨 시스템을 RESTful하다 말할 수 있음
      



<details>
<summary>CLICK ME!</summary>  

- https://seunghyun90.tistory.com/77
- https://yohanpro.com/posts/programming/career/2
- ⭐ https://blog.naver.com/cookr3/222388178531
</detials>  
