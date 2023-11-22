import { ProgramRegisterFieldType, ProgramRegisterInfoType } from '@/types';

export const DEFAULT_REQUIRED_CONTENT: ProgramRegisterInfoType = {
  programName: '',
  location: '',
  programType: '',
  programDetailType: '',
  recruitStartDate: '',
  recruitEndDate: '',
  activeStartDate: '',
  activeEndDate: '',
  contact: '',
  contactPhone: '',
  link: '',
  hashtag: '',
  body: '',
};

export const LOCATION_LIST = [
  '서울',
  '인천',
  '대전',
  '대구',
  '광주',
  '부산',
  '울산',
  '세종특별자치시',
  '경기도',
  '강원특별자치도',
  '충청북도',
  '충청남도',
  '경상북도',
  '경상남도',
  '전라북도',
  '전라남도',
  '제주도',
];

export const INPUT_FIELD: ProgramRegisterFieldType = {
  programName: {
    title: '제목',
    placeholder: '공고 제목을 입력해주세요.',
    alertMessage: '제목은 50자 이내로 입력해주세요.',
  },
  location: {
    title: '지역',
    placeholder: '여행 지역을 선택해주세요.',
    alertMessage: '여행 지역을 선택해주세요.',
  },
  programType: {
    title: '카테고리',
    placeholder: '해당하는 카테고리를 선택해주세요.',
    alertMessage: '카테고리를 모두 선택해주세요.',
  },
  programDetailType: {
    title: '',
    placeholder: '해당하는 세부 카테고리를 선택해주세요.',
    alertMessage: '',
  },
  recruitStartDate: {
    title: '모집기간',
    placeholder: '모집 시작일을 선택해주세요.',
    alertMessage: '모집 시작일을 입력해주세요.',
  },
  recruitEndDate: {
    title: '모집기간',
    placeholder: '모집 마감일을 선택해주세요.',
    alertMessage: '모집 마감일을 입력해주세요.',
  },
  activeStartDate: {
    title: '활동기간',
    placeholder: '활동 시작일을 선택해주세요.',
    alertMessage: '활동 시작일을 입력해주세요.',
  },
  activeEndDate: {
    title: '활동기간',
    placeholder: '활동 마감일을 선택해주세요.',
    alertMessage: '활동 마감일을 입력해주세요.',
  },
  contact: {
    title: '문의처',
    placeholder: '문의처명을 입력해주세요.',
    alertMessage: '문의처명을 입력해주세요.',
  },
  contactPhone: {
    title: '',
    placeholder: '전화번호 또는 이메일을 입력해주세요.',
    alertMessage: '',
  },
  link: {
    title: '신청링크',
    placeholder: '신청할 수 있는 링크를 입력해주세요.',
    alertMessage: '신청링크를 입력해주세요.',
  },
  hashtag: {
    title: '해시태그',
    placeholder: '해당 공고를 소개하는 #해시태그를 입력해주세요. (쉼표로 구분)',
    alertMessage: '해시태그를 입력해주세요.',
  },
};

export const ALERT_MESSAGE = {
  cancel: '작성을 취소하시겠습니까?\n저장하지 않은 내용은 사라집니다.',
  register: '공고를 등록하시겠습니까?',
  draft: '임시 저장하시겠습니까?',
  getDraft: '기존에 작성하던 공고를 불러오시겠습니까?',
};

const EXAMPLE_HEADER =
  '해당 공고에 대해 더 자세히 설명해주세요.\n\n\n예시)\n\n';

const EXAMPLE_WHO =
  '참여 대상 : 충남 거주자를 제외한 태안 여행 희망자 (1인 또는 2인/팀)\n\n';

const EXAMPLE_CONTENT =
  '주요 내용 : 태안군에 머물면서 코스여행 진행 (4가지 유형 코스 중 선택)\n\n';

const EXAMPLE_APPLY =
  '신청 방법 : 신청서류 작성 후 네이버 설문지 접수\n\t\t   신청서, 개인정보동의서, 서약서, 주민등록초본\n\t\t   안내 : 태안군 공식 블로그\n\t\t   접수 : http://naver.me\n\n';

const EXAMPLE_DETAIL =
  '지원 내용 : 숙박비 1일/1팀 7만원\n\t\t   체험활동비 1일/1인 2만원\n\t\t   여행자보험비 1인 2만원\n\n';

const EXAMPLE_RESULT = '결과 통보 : 2023. 10. 31 (화)까지 개별통보';

export const DETAIL_INFO_PLACEHOLDER =
  EXAMPLE_HEADER +
  EXAMPLE_WHO +
  EXAMPLE_CONTENT +
  EXAMPLE_APPLY +
  EXAMPLE_DETAIL +
  EXAMPLE_RESULT;

export const SUB_CATEGORY_LIST: {
  [key: string]: string[];
} = {
  '여행 지원사업': ['지자체 한달살이', '팸투어', '기타'],
  '여행 공모전': ['여행코스 기획전', '여행사진 공모전', '기타'],
  '여행 대외활동': ['기자단', '서포터즈', '기타'],
};
