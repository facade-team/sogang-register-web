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
        <div align="center"><a href="https://nodejs.org" target="_blank"><svg width="40" height="40" viewBox="0 0 128 128"><path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"></path>
</svg></a><br>Node.js</br></div>
      </td>
      <td>
        <div align="center"><a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> 
        </a><br>Babel</br></div>
      </td>
      <td width="60">
        <div align="center"><a href="https://nodejs.org" target="_blank"><svg width="40" height="40" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g></svg></a><br>ReactJs</br></div>
      </td>
      <td>
        <div align="center"><a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> 
        </a><br>Babel</br></div>
      </td>
      <td>
        <div align="center"><a href="https://webpack.js.org" target="_blank"><svg width="40" height="40" viewBox="0 0 128 128"><path fill="#8ed6fb" d="M117.29 98.1L66.24 127v-22.51L98 87l19.29 11.1zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15 18.54-10.71z"></path><path fill="#1c78c0" d="M61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66 95.5 44 64 62.16 32.5 44z"></path></svg></a><br>Webpack</br></div>
      </td>
      <td width="60">
        <div align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><svg width="40" height="40" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg></a><br>Javascript</br></div>
      </td>
      <td width="60">
        <div align="center"><a href="https://aws.amazon.com/ko/s3/" target="_blank"> <svg width="40" height="40"viewBox="0 0 128 128"><path fill="#F7A80D" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345V90.089l-16.297-6.503zm34.276 0l-15.073 5.739V110.9l15.073-6.121V83.586zm17.979-68.551L61.73 19.931l10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224L75.654 28.5v21.652l13.466-6.121V22.762zM19.306 46.047L7.907 50.944l10.558 4.514 12.241-4.514-11.4-4.897zM2.168 52.168l-.382 22.034 16.679 7.345V58.671L2.168 52.168zm34.275 0l-15.071 5.738V79.48l15.071-6.12V52.168zm19.587-6.937l-11.4 4.897 10.558 4.514 12.241-4.514-11.399-4.897zm-17.137 6.121l-.383 22.035 16.679 7.345V57.855l-16.296-6.503zm34.275 0L58.096 57.09v21.576l15.072-6.121V51.352zm35.908-36.317l-11.399 4.896 10.559 4.515 12.241-4.515-11.401-4.896zm-17.137 6.121l-.382 22.034 16.679 7.344V27.658l-16.297-6.502zm34.275 0l-15.071 5.738v21.575l15.071-6.12V21.156z"></path></svg> </a><br>AWS S3</br></div>
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
