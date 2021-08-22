# 서강신청

수강신청할땐? [**_서강신청!_**](http://sogang-sincheong.com)

[![logo](src/assets/img/서강신청_배너.png)](http://sogang-sincheong.com)

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

## 주요 기술 스택

### React

[<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width ="100">](https://reactjs.org/)

- Component 단위 구조  
  전체적인 UI를 구성하는 하나하나의 블록 단위인 컴포넌트를 사용함으로써 재사용이 용이하다는 장점이 있다. 특히, 유지 보수를 하거나, 미디어 쿼리를 사용할 때 컴포넌트 단위로 수정을 하면 돼서 편리했다는 장점이 크게 다가왔다.
- JSX 문법  
  익숙한 HTML 문법과 비슷한 JSX 문법을 사용하는 리액트를 사용하여 보다 익숙하고, 편리한 코드를 작성하기 용이했다.

### Styled-component

[<img src="https://blog.kakaocdn.net/dn/AMVCv/btqGbqFAeG4/VL93Ekz0y1iyALV25fAcS1/img.png" width="100"/>](https://styled-components.com/)

- 장점  
  style값만 모아놓은 파일을 파일명.element.js와 같은 형태로 따로 분리하여 사용할 수 있어 보다 깔끔한 코딩이 가능했다. 또한, Component를 재사용할 때, 혹은 미디어 쿼리를 사용할 때 간단한 방법으로 이를 처리할 수 있었다.
- 단점  
  f12 검사 탭을 통해 css를 수정하고자 할 때, id값이 임의로 설정된 난수값으로 나와서 해당 부분을 id를 보고 바로 찾아가기 힘든 점이 단점으로 다가왔다.

### Context api

개발 초기 단계에서는 컴포넌트가 그렇게 많지 않아서 state 관리함에 있어서 큰 어려움이 없었지만, 컴포넌트가 많아지다보니 state를 넘겨줌에 있어서 depth 가 너무 깊어져서 불편함이 많았다. 사용자 로그인상태, 스낵바 경고창, 로딩상태 등 전역적인 state 관리가 필요한 경우에 context api 를 도입하여 개발을 하였다.

---

## 페이지 구성

### 개설 교과목 검색 페이지

#### [검색옵션&필터 설정 UI]

- **검색옵션** : 학년도/학기, 전공/영역, 학년, 학점, 요일, 검색어 옵션을 클릭하면 모달창이 열리면서 원하는 옵션을 선택할 수 있다. 선택한 옵션은 태그 형식으로 하단부에 표시된다.
- **필터옵션** : 필터옵션은 검색옵션을 통해 검색된 데이터들을 원하는 옵션에 맞게 필터링해주는 옵션이다.

![검색옵션](gif/검색옵션&필터옵션_2.gif)

#### [검색결과 렌더링]

**카드형식**의 UI를 채택하여, 직관성을 높이고자 하였다.

![카드](gif/카드.png)

#### [상세보기 사이드바]

- **과목정보 상세보기** : 해당 과목의 카드를 클릭하면, 과목정보에 대한 상세한 정보를 보여준다.
- **최근 본 과목** : 과목 클릭 시, 최근 본 과목을 사용자에게 보여주어서 UX를 개선시키고자 하였다.
- **즐겨찾기** : **과목정보 상세보기** 에서 즐겨찾기 아이콘을 클릭하면, 즐겨찾기 DB에 담기고 목록에 렌더링 시켜준다.

![상세보기](gif/즐겨찾기_2.gif)

### 마이페이지

<table>
	<tbody>
		<tr>
      <td rowspan="6"><a><div align="center"><img src="https://github.com/facade-team/sogang-register-web/blob/dev/src/Readme/mypage.png?raw=true" width="80%" height="50%" /></a></div></td>
    </tr>
    <tr>
      <td width="33%">즐겨찾기 조회/삭제 기능</td>
    </tr>
	  <tr>
	    <td>회원정보 수정 기능<br>(전공/이메일 수신 여부)</td>
	  </tr>
    <tr>
      <td>비밀번호 변경 기능</td>
    </tr>
    <tr>
      <td>회원 탈퇴 기능</td>
    </tr>
  </tbody>
</table>

### 피드백/문의 페이지

<table>
	<tbody>
		<tr>
      <td rowspan="6"><a><div align="center"><img src="https://github.com/facade-team/sogang-register-web/blob/dev/src/Readme/feedback.png?raw=true" width="80%" height="40%"></a></div></td>
      <td width="33%">팀 블로그/인스타</td>
    </tr>
    <tr>
      <td width="33%">팀 블로그/인스타</td>
    </tr>
    <tr>
      <td>피드백/문의 기능</td>
    </tr>
  </tbody>
</table>

---

## 기술 스택 (Technique Used)

<table>
  <tbody>
    <tr>
      <td width="60">
        <div align="center"><a href="https://nodejs.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png" /></a><br>Node.js</br></div>
      </td>
      <td width="60">
        <div align="center"><a href="https://nodejs.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"  /></a><br>ReactJs</br></div>
      </td>
      <td>
        <div align="center"><a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> 
        </a><br>Babel</br></div>
      </td>
      <td>
        <div align="center"><a href="https://webpack.js.org" target="_blank"><img src="https://t1.daumcdn.net/cfile/tistory/999AF54B5B93D78C25?download" width="40" height="40" /></a><br>Webpack</br></div>
      </td>
      <td width="60">
        <div align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" width="40" height="40" /></a><br>Javascript</br></div>
      </td>
      <td width="60">
        <div align="center"><a href="https://aws.amazon.com/ko/s3/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1200px-Amazon-S3-Logo.svg.png" width="40" height="40" /></a><br>AWS S3</br></div>
      </td>      
    </tr>
  </tbody>
</table>

---

## 팀 정보 (Team Information)

- [최현수](https://github.com/Keep-Going-HyeonSoo) E-mail : [chs98105@gmail.com](mailto:chs98105@gmail.com)

  - 개설교과목 조회,검색/필터링 기능 UI 개발
  - PC 버전 UI/UX 담당
  - Front 배포

- [오상훈](https://github.com/poki1219) E-mail : [poki_off@naver.com](mailto:poki_off@naver.com)

  - 과목 상세 정보 조회, 즐겨찾기 기능 UI 개발
  - 마이페이지 기능 UI 개발

- [김문기](https://github.com/moong23) E-mail : [moonki0623@naver.com](mailto:moonki0623@naver.com)
  - 반응형 웹 구조 개발
  - 모바일 UI
