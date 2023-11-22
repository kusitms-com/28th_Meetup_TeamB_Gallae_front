export const birthRegex = /^(19|20)\d{2}\.[0-1]\d\.[0-3]\d$/; // 생일 형식 정규표현식
export const phoneRegex = /^010-\d{4}-\d{4}$/; // 전화번호 정규표현식
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // 이메일 정규표현식
export const registrationNumberRegex = /^\d{3}-\d{2}-\d{5}$/; // 사업자 등록번호 정규표현식

export const GeneralUserData = [
  [
    {
      title: '이름',
      placeholder: '이름을 입력해주세요.',
      keyName: 'name',
      isEssential: true,
    },
    {
      title: '생년월일',
      placeholder: '생년월일을 입력해주세요. Ex) 1999.01.01',
      keyName: 'birth',
      isEssential: true,
      alertMessage: '형식에 맞게 입력해주세요 (1999.01.01)',
      checkIsAlert: (val: string): boolean => !birthRegex.test(val),
    },
    {
      title: '닉네임',
      placeholder: '닉네임을 입력해주세요.',
      keyName: 'nickName',
      isEssential: true,
      alertMessage: '닉네임은 2자 이상, 20자 이하로 생성이 가능합니다.',
      checkIsAlert: (val: string): boolean =>
        !(val.length >= 2 && val.length <= 20),
    },
  ],
  [
    {
      title: '아이디',
      placeholder: '사용할 아이디를 입력해주세요.',
      keyName: 'loginId',
      isEssential: true,
      alertMessage: 'id는 2자 이상, 20자 이하로 생성이 가능합니다.',
      checkIsAlert: (val: string): boolean =>
        !(val.length >= 2 && val.length <= 20),
    },
    {
      title: '비밀번호',
      placeholder: '사용할 비밀번호를 입력해주세요.',
      keyName: 'loginPw',
      isEssential: true,
      alertMessage: '비밀번호는 6글자 이상으로 설정해주세요.',
      checkIsAlert: (val: string): boolean => !(val.length >= 6),
    },
    {
      title: '비밀번호 확인',
      placeholder: '비밀번호를 다시 입력해주세요.',
      keyName: 'repassword',
      isEssential: true,
      alertMessage: '비밀번호가 일치하지 않습니다.',
      checkIsAlert: (val1: string, val2: string): boolean => !(val1 === val2),
    },
  ],
  [
    {
      title: '이메일',
      placeholder: '이메일을 입력해주세요.',
      keyName: 'email',
      isEssential: false,
      alertMessage: '형식에 맞게 입력해주세요 (travelmaker@kusitms.ac.kr)',
      checkIsAlert: (val: string): boolean => !emailRegex.test(val),
    },
    {
      title: '전화번호',
      placeholder: '전화번호를 입력해주세요. Ex) 010-1234-5678',
      keyName: 'phoneNum',
      isEssential: false,
      alertMessage: '형식에 맞게 입력해주세요 (010-1234-5678)',
      checkIsAlert: (val: string): boolean => !phoneRegex.test(val),
    },
  ],
];

export const CorporationData = [
  [
    {
      title: '기관명',
      placeholder: '기관명을 입력해주세요.',
      keyName: 'companyName',
      isEssential: true,
    },
    {
      title: '사업자등록번호',
      placeholder: '사업자등록번호를 입력해주세요. Ex) 192-01-17385',
      keyName: 'registNum',
      isEssential: true,
      alertMessage: '형식에 맞게 입력해주세요 (192-01-17385)',
      checkIsAlert: (val: string): boolean =>
        !registrationNumberRegex.test(val),
    },
    {
      title: '담당부서명',
      placeholder: '담당부서명을 입력해주세요.',
      keyName: 'department',
      isEssential: true,
    },
    {
      title: '담당자명',
      placeholder: '담당자명을 입력해주세요.',
      keyName: 'name',
      isEssential: true,
    },
  ],
  [
    {
      title: '아이디',
      placeholder: '사용할 아이디를 입력해주세요.',
      keyName: 'loginId',
      isEssential: true,
      alertMessage: 'id는 2자 이상 20자 이하로 생성이 가능합니다.',
      checkIsAlert: (val: string): boolean =>
        !(val.length >= 2 && val.length <= 20),
    },
    {
      title: '비밀번호',
      placeholder: '사용할 비밀번호를 입력해주세요.',
      keyName: 'loginPw',
      isEssential: true,
      alertMessage: '비밀번호는 6글자 이상으로 설정해주세요.',
      checkIsAlert: (val: string): boolean => !(val.length >= 6),
    },
    {
      title: '비밀번호 확인',
      placeholder: '비밀번호를 다시 입력해주세요.',
      keyName: 'repassword',
      isEssential: true,
      alertMessage: '비밀번호가 일치하지 않습니다.',
      checkIsAlert: (val1: string, val2: string): boolean => !(val1 === val2),
    },
  ],
  [
    {
      title: '이메일',
      placeholder: '이메일을 입력해주세요.',
      keyName: 'email',
      isEssential: false,
      alertMessage: '형식에 맞게 입력해주세요 (travelmaker@kusitms.ac.kr)',
      checkIsAlert: (val: string): boolean => !emailRegex.test(val),
    },
    {
      title: '전화번호',
      placeholder: '전화번호를 입력해주세요. Ex) 010-1234-5678',
      keyName: 'phoneNum',
      isEssential: false,
      alertMessage: '형식에 맞게 입력해주세요 (010-1234-5678)',
      checkIsAlert: (val: string): boolean => !phoneRegex.test(val),
    },
  ],
];
