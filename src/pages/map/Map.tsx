import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapPage = () => {
  return (
    <Map
      center={{ lat: 37.566566, lng: 126.979192 }}
      style={{ width: '100%', height: '100vh' }}
      level={11}
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 37.54699,
          lng: 127.09598,
        }}
        image={{
          src: '/src/assets/map/marker_inactive.svg', // 마커이미지의 주소입니다
          size: {
            width: 64,
            height: 69,
          }, // 마커이미지의 크기입니다
          // options: {
          //   offset: {
          //     x: 27,
          //     y: 69,
          //   }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          // },
        }}
      />
    </Map>
  );
};

export default MapPage;
