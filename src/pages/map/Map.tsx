import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import CustomMarker from './components/CustomMarker';
import { useEffect, useRef, useState } from 'react';
import MapCard from './components/MapCard';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar/SearchBar';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface markerDataType {
  lat: number;
  lng: number;
  imageSrc: string;
  title: string;
  period: string;
}

const markerData: markerDataType[] = [
  // API 받아오기 전 임시 데이터
  {
    lat: 37.566566,
    lng: 126.979192,
    imageSrc: '/src/assets/map/card_thumbnail.svg',
    title: '부여 행복여행 지원사업 참가자 모집',
    period: '2023.10.01 - 2023.11.09',
  },
  {
    lat: 37.666566,
    lng: 126.979192,
    imageSrc: '/src/assets/map/card_thumbnail.svg',
    title: '울산 행복여행 지원사업 참가자 모집',
    period: '2023.10.01 - 2023.11.09',
  },
  {
    lat: 37.596566,
    lng: 126.97002,
    imageSrc: '/src/assets/map/card_thumbnail.svg',
    title: '광주 행복여행 지원사업 참가자 모집',
    period: '2023.10.01 - 2023.11.09',
  },
];

const MapPage = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState('');

  const cardRef = useRef(null);

  useOnClickOutside(cardRef, () => {
    setIsModalOpen(false);
    setSelected(-1);
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClickSearch = () => {
    // 검색 후 페이지 이동
    setSearchInput('');
  };

  return (
    <Container>
      {isModalOpen && (
        <MapCard
          cardRef={cardRef}
          {...markerData[selected]}
          setIsModalOpen={setIsModalOpen}
          setSelected={setSelected}
        />
      )}
      <SearchBarWrapper>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          placeHolder="관심있는 여행지가 있으신가요?"
          handleClick={handleClickSearch}
        />
      </SearchBarWrapper>
      <Map
        center={{ lat: 37.566566, lng: 126.979192 }}
        style={{ width: '100%', height: '133.3333vh', zoom: '1.33333' }}
        level={11}
      >
        <MarkerClusterer>
          {markerData.map(({ lat, lng }, idx) => (
            <CustomMarker
              lat={lat}
              lng={lng}
              isSelected={idx === selected}
              index={idx}
              setSelected={setSelected}
              setIsModalOpen={setIsModalOpen}
              key={idx}
            />
          ))}
        </MarkerClusterer>
      </Map>
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 543px;
  height: 64px;
  gap: 108px;
  flex-shrink: 0;

  position: absolute;
  z-index: 3;

  top: 120px;
  left: 50px;
`;
