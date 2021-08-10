import React, { useEffect } from 'react';
import { useMenuContext } from '../../contexts/MenuContext';

// components
import Title from '../../components/Title/Title';

// styled
import {
  Container,
  HomeContainer as InfoContainer,
} from '../../styles/HomeContainer';

import { SubHeading, InfoContentContainer } from './Info.element';

const Info = ({ openModal }) => {
  // 네비게이션 바에 현재 페이지 표시를 위한 상태
  const { setMenu } = useMenuContext();

  useEffect(() => {
    setMenu('info');
  }, [setMenu]);
  return (
    <Container>
      <InfoContainer navigation="Info">
        <Title title="서비스 소개" openModal={openModal}></Title>
        <InfoContentContainer>
          {/* <SubHeading>개요</SubHeading> */}
        </InfoContentContainer>
      </InfoContainer>
    </Container>
  );
};

/* 
  카카오 레퍼런스
  https://www.kakaocorp.com/page/kakao/kakaoCulture
 

  '수강신청'할 땐 '서강신청'
  '서강신청'은 서강대학교 재학생들이 기존의 개설 교과목 정보 사이트에서 느낀 불편한 점을, 개선/추가하여 만든 서비스입니다

  
  * 직관적인 UI
  * 과목 정보 가독성 개선
  * 검색 기능 강화 ( 검색을 통한 필터링과 정렬 기능 )
  * 로딩 속도 개선
  * 즐겨찾는 과목 설정 후, 정보 업데이트 시 메일 알림 기능 (회원 전용)
 
  버전 히스토리
  2021.08.15 - 서비스 최초 런칭

  To be updated
  전공/영역 옵션 중복 설정 후 검색하기
  과목조회 내부에서 자체 검색
  강의계획서(실라버스) 확인

  원하는 기능이나 부족한 점 등은 피드백/문의 또는 구글메일을 통해 알려주세요!

  Team Facade
  개발/기획: 컴공18 최현수,오상훈,김문기,김현재,김승우
  디자인/기획: 경제19 최정원

  서버 비용 후원하기
  서강신청이 마음에 드셨다면, 앞으로 업데이트 또한 기대해주세요




  
*/

export default Info;
