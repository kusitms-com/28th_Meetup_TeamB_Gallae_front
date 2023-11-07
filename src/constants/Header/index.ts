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
        title: '전체',
        link: '전체',
      },
      {
        title: '전체',
        link: '전체',
      },
      {
        title: '전체',
        link: '전체',
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
        link: '전체',
      },
      {
        title: '전체',
        link: '전체',
      },
      {
        title: '전체',
        link: '전체',
      },
    ],
  },
];
