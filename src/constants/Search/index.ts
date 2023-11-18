import { FilterInputType, FilterListType } from '@/types';

export const FILTER_LIST: FilterListType[] = [
  {
    title: '정렬',
    enTitle: 'sort',
    buttonSize: 'small',
    calendar: false,
    items: ['최신순', '인기순', '빠른 마감 순', '늦은 마감 순'],
  },
  {
    title: '지역',
    enTitle: 'location',
    buttonSize: 'small',
    calendar: false,
    items: ['전국', '수도권', '충청도', '전라도', '강원도', '경상도', '제주도'],
  },
  {
    title: '여행 프로그램',
    enTitle: 'program',
    buttonSize: 'large',
    calendar: false,
    items: ['전체', '여행지원사업', '여행 공모전', '여행 대외활동'],
  },
  {
    title: '세부 카테고리',
    enTitle: 'category',
    buttonSize: 'medium',
    calendar: false,
    items: [],
  },
  {
    title: '모집 기간',
    enTitle: 'recruitDate',
    buttonSize: 'medium',
    calendar: true,
    items: [],
  },
  {
    title: '여행 기간',
    enTitle: 'tripDate',
    buttonSize: 'medium',
    calendar: true,
    items: [],
  },
];

export const DEFAULT_FILTER_LIST: FilterInputType = {
  sort: null,
  location: null,
  program: null,
  category: null,
  recruitStartDate: null,
  recruitEndDate: null,
  tripStartDate: null,
  tripEndDate: null,
};

export const DETAILED_CATEGORY_LIST = [
  { program: '전체', items: ['전체'] },
  {
    program: '여행지원사업',
    items: ['전체', '지자체 한달살이', '팸투어', '기타'],
  },
  {
    program: '여행 공모전',
    items: ['전체', '여행코스 기획전', '여행사진 공모전', '기타'],
  },
  { program: '여행 대외활동', items: ['전체', '기자단', '서포터즈', '기타'] },
];
