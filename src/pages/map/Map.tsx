import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import CustomMarker from './components/CustomMarker';
import { useCallback, useEffect, useRef, useState } from 'react';
import MapCard from './components/MapCard';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar/SearchBar';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useQuery } from 'react-query';
import { fetchMapMarker } from '@/apis/map';
import Loading from '@/components/Loading/Loading';
import { handleClickSearchMap } from '@/functions';

interface markerDataType {
  id: number;
  latitude: number;
  longitude: number;
  photoUrl: string;
  programName: string;
  remainDay: string;
  userLikeCheck: boolean;
}

const MapPage = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const { isLoading, data, refetch } = useQuery(
    ['marker', selected, searchFilter],
    fetchMapMarker(searchFilter),
    {
      cacheTime: 500005,
      staleTime: 500000,
    },
  );

  const cardRef = useRef(null);

  const handleClickSearch = useCallback(() => {
    handleClickSearchMap(searchInput, setSearchInput, setSearchFilter);
  }, [searchInput, searchFilter]);

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
    ? data?.data?.result?.programs.filter(
        ({ remainDay }: { remainDay: string }) => remainDay !== '마감',
      )
    : [];

  return (
    <Container>
      {isModalOpen && (
        <MapCard
          refetch={refetch}
          cardRef={cardRef}
          {...markerData[selected]}
          remainDay={markerData[selected].remainDay}
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
          handleSubmit={handleClickSearch}
        />
      </SearchBarWrapper>

      <Map
        center={{ lat: 35.58775, lng: 127.968238 }}
        style={{ width: '100%', height: '133.3333vh', zoom: '1.33333' }}
        level={12}
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
