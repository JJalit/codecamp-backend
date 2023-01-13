import { getToday } from './utils.js';

export function checkValidationEmail(email) {
  if (email === undefined || !email.includes('@')) {
    console.log('에러 발생!!! 이메일을 제대로 입력해 주세요!!!');
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const result = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
      </body>
    </html>
  `;
  return result;
}

export function sendWelcomeTemplateToEmail(email, template) {
  console.log(email + '이메일로' + template + '를 전송합니다.');
}
