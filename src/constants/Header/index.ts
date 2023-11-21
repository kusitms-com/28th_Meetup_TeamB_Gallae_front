interface DropDown {
  title: string;
  link: string;
}

interface HeaderDataProps {
  main: string;
  dropDowns: DropDown[];
}

export const HeaderData: HeaderDataProps[] = [
  {
    main: '갈래 소개',
    dropDowns: [
      {
        title: "'갈래' 소개",
        link: '/about/gallae',
      },
      {
        title: "'갈래'와 함께하는 사람들",
        link: '/about/maker',
      },
    ],
  },
  {
    main: '활동후기',
    dropDowns: [
      {
        title: '전체',
        link: '/review',
      },
      {
        title: '여행 지원사업 후기',
        link: '/review',
      },
      {
        title: '여행 공모전 후기',
        link: '/review',
      },
      {
        title: '여행 대외활동 후기',
        link: '/review',
      },
    ],
  },
  {
    main: '자료실',
    dropDowns: [
      {
        title: '전체',
        link: '/archive',
      },
      {
        title: '지원서 예시자료',
        link: '/archive',
      },
      {
        title: '보고서 예시자료',
        link: '/archive',
      },
      {
        title: '꿀팁',
        link: '/archive',
      },
    ],
  },
];

export const UserDropdown: DropDown[] = [
  {
    title: '갈래 말래',
    link: '',
  },
  {
    title: '내가 쓴 글',
    link: '/user/posting',
  },
  {
    title: '내 포인트',
    link: '/user/mileage',
  },
  {
    title: '회원정보',
    link: '/user/profile',
  },
];
