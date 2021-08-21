# 서강신청

---

## 주요 기술 스택

### context api

개발 초기 단계에서는 컴포넌트가 그렇게 많지 않아서 state 관리함에 있어서 큰 어려움이 없었지만, 컴포넌트가 많아지다보니 state를 넘겨줌에 있어서 depth 가 너무 깊어져서 불편함이 많았다. 사용자 로그인상태, 스낵바 경고창, 로딩상태 등 전역적인 state 관리가 필요한 경우에 context api 를 도입하여 개발을 하였다.

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

## 팀 정보 (Team Information)

- [최현수](https://github.com/Keep-Going-HyeonSoo) E-mail : [chs98105@gmail.com](mailto:chs98105@gmail.com)

  - 개설교과목 조회,검색/필터링 기능 UI 개발
  - PC 버전 UI/UX 담당
  - Front 배포

- [오상훈](https://github.com/poki1219) E-mail : [poki_off@naver.com](mailto:poki_off@naver.com)

  - 과목 상세 정보 조회, 즐겨찾기 기능 UI 개발
  - 마이페이지 기능 UI 개발

- [김문기](https://github.com/moong23) E-mail : [moonki0623@u.sogang.ac.kr](mailto:moonki0623@u.sogang.ac.kr)
  - 반응형 웹 구조 개발
  - 모바일 UI
