import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import CustomMarker from './components/CustomMarker';
import { useEffect, useRef, useState } from 'react';
import MapCard from './components/MapCard';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar/SearchBar';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useQuery } from 'react-query';
import { fetchMapMarker } from '@/apis/map';
import Loading from '@/components/Loading/Loading';
import { handleClickSearchProgram } from '@/functions';
import { useNavigate } from 'react-router-dom';

interface markerDataType {
  id: number;
  latitude: number;
  longitude: number;
  photoUrl: string;
  programName: string;
  recruitStartDate: string;
  recruitEndDate: string;
  userLikeCheck: boolean;
}

const MapPage = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState('');

  const { isLoading, data, refetch } = useQuery(
    ['marker', selected],
    fetchMapMarker(),
    {
      cacheTime: 500005,
      staleTime: 500000,
    },
  );
  const navigate = useNavigate();

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

  if (isLoading) return <Loading />;

  const markerData: markerDataType[] = data?.data?.result
    ? data?.data?.result?.programs
    : [];

  return (
    <Container>
      {isModalOpen && (
        <MapCard
          refetch={refetch}
          cardRef={cardRef}
          {...markerData[selected]}
          period={`${markerData[selected].recruitStartDate}-${markerData[selected].recruitEndDate}`}
          setIsModalOpen={setIsModalOpen}
          setSelected={setSelected}
          isLiked={markerData[selected].userLikeCheck}
        />
      )}
      <SearchBarWrapper>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          placeHolder="관심있는 여행지가 있으신가요?"
          handleSubmit={() =>
            handleClickSearchProgram(searchInput, setSearchInput, navigate)
          }
        />
      </SearchBarWrapper>

      <Map
        center={{ lat: 37.566566, lng: 126.979192 }}
        style={{ width: '100%', height: '133.3333vh', zoom: '1.33333' }}
        level={11}
      >
        <MarkerClusterer>
          {markerData?.map(({ latitude: lat, longitude: lng, id }, idx) => (
            <CustomMarker
              lat={lat}
              lng={lng}
              isSelected={idx === selected}
              index={idx}
              setSelected={setSelected}
              setIsModalOpen={setIsModalOpen}
              key={id}
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
