// 한글과 영어가 섞여있을 때 한글먼저 정렬하는 함수 (sort 함수의 인자로 쓰임)
function hangulFirstCompare(a, b) {
  function addOrderPrefix(s) {
    var code = s.toLowerCase().charCodeAt(0);
    var prefix;

    // 한글 AC00—D7AF
    if (0xac00 <= code && code <= 0xd7af) prefix = '1';
    // 한글 자모 3130—318F
    else if (0x3130 <= code && code <= 0x318f) prefix = '2';
    // 영어 소문자 0061-007A
    else if (0x61 <= code && code <= 0x7a) prefix = '3';
    // 그외
    else prefix = '9';

    return prefix + s;
  }

  a = addOrderPrefix(a);
  b = addOrderPrefix(b);

  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

export default hangulFirstCompare;
