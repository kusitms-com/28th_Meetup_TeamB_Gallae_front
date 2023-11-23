import { FilterInputType, FilterListType } from '@/types';
import { LOCATION_LIST } from '../Register';

export const FILTER_LIST: FilterListType[] = [
  {
    title: '정렬',
    enTitle: 'orderCriteria',
    buttonSize: 'xs',
    calendar: false,
    items: ['최신순', '인기순', '빠른 마감 순', '늦은 마감 순'],
  },
  {
    title: '지역',
    enTitle: 'location',
    buttonSize: 's',
    calendar: false,
    items: LOCATION_LIST,
  },
  {
    title: '여행 프로그램',
    enTitle: 'programType',
    buttonSize: 'm',
    calendar: false,
    items: ['전체', '여행 지원사업', '여행 공모전', '여행 대외활동'],
  },
  {
    title: '세부 카테고리',
    enTitle: 'detailType',
    buttonSize: 'm',
    calendar: false,
    items: [],
  },
  {
    title: '모집 기간',
    enTitle: 'recruitDate',
    buttonSize: 'l',
    calendar: true,
    items: [],
  },
  {
    title: '여행 기간',
    enTitle: 'activeDate',
    buttonSize: 'l',
    calendar: true,
    items: [],
  },
];

export const DEFAULT_FILTER_LIST: FilterInputType = {
  orderCriteria: null,
  location: null,
  programType: null,
  detailType: null,
  recruitStartDate: null,
  recruitEndDate: null,
  activeStartDate: null,
  activeEndDate: null,
};

export const DETAILED_CATEGORY_LIST = [
  { program: '전체', items: ['전체'] },
  {
    program: '여행 지원사업',
    items: ['전체', '지자체 한달살이', '팸투어', '기타'],
  },
  {
    program: '여행 공모전',
    items: ['전체', '여행코스 기획전', '여행사진 공모전', '기타'],
  },
  { program: '여행 대외활동', items: ['전체', '기자단', '서포터즈', '기타'] },
];
