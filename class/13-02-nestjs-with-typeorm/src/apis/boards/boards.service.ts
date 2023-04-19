// boards.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  findAll() {
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용입니다!!!',
      },
      {
        number: 2,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용입니다!!!',
      },
      {
        number: 3,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용입니다!!!',
      },
    ];

    return result;
  }

  create(args) {
    console.log(args);
    return '게시물 등록에 성공하였습니다.';
  }
}
