let majors = [
  '국어국문학',
  '사학',
  '철학',
  '종교학',
  '영미어문',
  '미국문화',
  '유럽문화',
  '독일문화',
  '프랑스문화',
  '중국문화',
  '일본문화',
  '사회학',
  '정치외교학',
  '심리학',
  '법학',
  '경제학',
  '경영학',
  '커뮤니케이션학',
  '지식융합미디어학부',
  '글로벌한국학',
  '신문방송학',
  '아트&테크놀로지',
  '미디어&엔터테인먼트',
  '수학',
  '물리학',
  '화학',
  '생명과학',
  '전자공학',
  '컴퓨터공학',
  '화공생명공학',
  '기계공학',
  '바이오융합기술',
  '교육문화',
  '여성학',
  '정치학.경제학.철학',
  '공공인재',
  '스포츠미디어',
  '군이러닝',
  '동아시아학연계전공',
  '빅데이터 사이언스(데이터분석)',
  '빅데이터 사이언스(데이터엔지니어)',
  '스타트업',
  '융합소프트웨어',
  '융합소프트웨어(인문콘텐츠융합)',
  '인공지능',
  '한국발전과국제개발협력',
  '한국사회문화',
  '교환',
  '타대학',
  '특별수강',
];

const majorsPair = majors.map((subject) => {
  return { value: subject, label: subject };
});

export default majorsPair;
