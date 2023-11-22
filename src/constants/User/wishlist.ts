import { WishlistFilterType } from '@/types';

const LOCATION_LIST = [
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

export const DEFAULT_WISHLIST_FILTER_LIST: WishlistFilterType = {
  region: '',
  programType: '',
  programStatus: '',
};

export const WISHLIST_FILTER_LIST: {
  [key: string]: { title: string; itemList: string[]; buttonWidth: number };
} = {
  region: { title: '지역', itemList: LOCATION_LIST, buttonWidth: 164 },
  programType: {
    title: '여행 프로그램',
    itemList: ['여행 지원사업', '여행 공모전', '여행 대외활동'],
    buttonWidth: 184,
  },
  programStatus: {
    title: '진행 상태',
    itemList: ['모집 중', '모집 마감'],
    buttonWidth: 184,
  },
};
