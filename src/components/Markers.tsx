import { StoreType } from "@/interface";
import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";

interface MarkerProps {
  map: any;
  stores: StoreType[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

const Markers = ({ map, stores, setCurrentStore }: MarkerProps) => {
  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      stores?.map((store) => {
        var imageSrc = store?.categories
            ? `/images/markers/${store?.categories}.png`
            : "/images/markers/default.png", // 마커이미지의 주소
          imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기
          imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
        var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

        // 마커가 표시될 위치입니다
        var markerPosition = new window.kakao.maps.LatLng(
          store?.lat,
          store?.lng
        );

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 마커커서가 오버되었을 때 마커 위에 인포윈도우 표시
        var content = `<div class="infowindow">${store?.name}</div>`;

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchore: 0.6,
          yAnchore: 0.91,
        });
        // 마커에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, "mouseover", function () {
          customOverlay.setMap(map);
        });

        // 마커에 마우스아웃 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, "mouseout", function () {
          customOverlay.setMap(null);
        });
        // 선택한 가게 저장
        window.kakao.maps.event.addListener(marker, "click", function () {
          setCurrentStore(store);
          // let newMarker = new window.kakao.maps.Marker({
          //
          // })
        });
      });
    }
  }, [map, setCurrentStore, stores]);

  useEffect(() => {
    loadKakaoMarkers();
  }, [loadKakaoMarkers, map]);
  return <></>;
};

export default Markers;
