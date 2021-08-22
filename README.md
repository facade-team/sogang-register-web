# 서강신청

수강신청할땐? [**_서강신청!_**](http://sogang-sincheong.com)

[![logo](https://github.com/facade-team/sogang-register-web/blob/master/src/assets/img/logo.png)](http://sogang-sincheong.com)

<p align="center">
	<a href="https://github.com/facade-team/sogang-register-web/search?l=TSX&type=code"><img alt="GitHub language count" src="https://img.shields.io/github/languages/count/facade-team/sogang-register-web"></a>
	<a href="https://github.com/facade-team/sogang-register-web/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/facade-team/sogang-register-web?color=success"></a>
	<a href="https://github.com/facade-team/sogang-register-web/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/facade-team/sogang-register-web"></a>
	<a href="https://github.com/facade-team/sogang-register-web/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/facade-team/sogang-register-web"></a>
	<a href="https://github.com/facade-team/sogang-register-web/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/facade-team/sogang-register-web"></a>
</p>

---

**_서강신청_** 은 항상 시간표를 짜기 전, 그리고 수강신청을 하기 전에 들어가는 서강대학교 개설교과목정보 사이트를 사용하며 느꼈던 문제점들을 조금이나마 개선하기 위해 시작하게 된 서비스입니다.

_**"컴공까지 왔는데, 직접 해결도 해봐야지"**_

### 주요 기능 소개

#### 1. 비로그인 유저

- 비로그인 유저의 경우 기존 개설교과목정보 사이트와 동일하게 사용할 수 있습니다.
- 검색 옵션에서 '학년도/학기'를 선택한 후, 추가적으로 검색 옵션을 추가할 수 있습니다.
  - 검색 옵션으로는 '전공/영역', '학년', '학점', '검색어'가 있습니다.
  - 추가로, '검색어'에서는 과목명, 과목코드, 교수명, 강의실로 검색을 할 수 있습니다.
- 또한, '필터옵션'을 통해 원하는 필터에 맞게 검색할 수 있습니다.

<img src = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F08a8f0b3-1211-46fc-94f2-e1fc6692f060%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.52.37.png?table=block&id=b23b1df8-5deb-4522-861e-da65f486e257&spaceId=245b7cab-78ce-4eca-ad7c-a658eb996c42&width=2360&userId=de81cae8-d8ea-4da1-a571-2823f68a3d2d&cache=v2"/>

#### 2. 로그인 유저

- 로그인 유저의 경우 추가적으로 과목 즐겨찾기 기능을 사용할 수 있습니다.
- 회원가입할 때 사용한 이메일을 통해 즐겨찾기한 과목의 변동사항을 이메일로 받아 볼 수 있습니다.
- 마이페이지에서 즐겨찾기한 과목들을 한 눈에 확인할 수 있습니다.

<img src = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc84ce974-eceb-4c2a-b651-82e6064de453%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.28.57.png?table=block&id=6f35cb33-f528-4106-b8a3-80eb285e16b5&spaceId=245b7cab-78ce-4eca-ad7c-a658eb996c42&width=2360&userId=de81cae8-d8ea-4da1-a571-2823f68a3d2d&cache=v2"/>

#### 3. 피드백/문의

- 피드백/문의 탭에서는 서강신청 서비스에게 의견을 남길 수 있습니다.
- 사용하면서 마주한 오류, 추가적으로 개발이 되었으면 하는 기능, 남기고 싶은 말 등 자유롭게 남겨주세요!

<img src = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9d361c96-c595-46c8-a66c-2f0de2690ac2%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.17.09.png?table=block&id=8c6cdd78-26fc-45e5-bf17-a5df3d0ebb43&spaceId=245b7cab-78ce-4eca-ad7c-a658eb996c42&width=2360&userId=de81cae8-d8ea-4da1-a571-2823f68a3d2d&cache=v2"/>

## 사용한 기술

### React

- Component 단위 구조  
  전체적인 UI를 구성하는 하나하나의 블록 단위인 컴포넌트를 사용함으로써 재사용이 용이하다는 장점이 있다. 특히, 유지 보수를 하거나, 미디어 쿼리를 사용할 때 컴포넌트 단위로 수정을 하면 돼서 편리했다는 장점이 크게 다가왔다.
- JSX 문법  
  익숙한 HTML 문법과 비슷한 JSX 문법을 사용하는 리액트를 사용하여 보다 익숙하고, 편리한 코드를 작성하기 용이했다.

### Styled-component

<img src="https://blog.kakaocdn.net/dn/AMVCv/btqGbqFAeG4/VL93Ekz0y1iyALV25fAcS1/img.png" width="100"/>

- 장점  
  style값만 모아놓은 파일을 파일명.element.js와 같은 형태로 따로 분리하여 사용할 수 있어 보다 깔끔한 코딩이 가능했다. 또한, Component를 재사용할 때, 혹은 미디어 쿼리를 사용할 때 간단한 방법으로 이를 처리할 수 있었다.
- 단점  
  f12 검사 탭을 통해 css를 수정하고자 할 때, id값이 임의로 설정된 난수값으로 나와서 해당 부분을 id를 보고 바로 찾아가기 힘든 점이 단점으로 다가왔다.

## 페이지 구성

### 개설 교과목 검색 페이지

### 마이페이지

### 피드백/문의 페이지

## 기술 스택 (Technique Used)

## 팀 정보 (Team Information)
