import PupplePin from '@/assets/icons/icon-pupple-pin.svg';
import YellowPin from '@/assets/icons/icon-yellow-pin.svg';
import BluePin from '@/assets/icons/icon-blue-pin.svg';

interface NavDataType {
  iconSrc: string;
  description: string;
  title: string;
  link: string;
  backgroundColor: string;
}

export const NavData: NavDataType[] = [
  {
    iconSrc: PupplePin,
    description: '저렴한 가격으로 떠나는 여행',
    title: '여행 지원사업',
    link: '/search?keyword=&programType=여행 지원사업',
    backgroundColor: '#AD99FF',
  },
  {
    iconSrc: YellowPin,
    description: '여행도 다니고 스펙도 쌓고',
    title: '여행 공모전',
    link: '/search?keyword=&programType=여행 공모전',
    backgroundColor: '#FFA63E',
  },
  {
    iconSrc: BluePin,
    description: '나도 인플루언서가 될 수 있어',
    title: '여행 대외활동',
    link: '/search?keyword=&programType=여행 대외활동',
    backgroundColor: '#3EA2FF',
  },
];
