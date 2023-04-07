// 문자타입 - 타입추론
let aaa = '안녕하세요';
aaa = '반갑습니다';
aaa = 3; // 🚨 다른 타입을 넣게되면 에러 발생!

// 문자타입 - 타입명시
let bbb: string = '반갑습니다.';
bbb = '반가워요!!';
bbb = 123; // 🚨 숫자 타입 불가능!

// 타입 명시가 필요한 상황
let ccc: string | number = '반갑습니다';
ccc = 10;
