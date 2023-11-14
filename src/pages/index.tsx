import Map from "@/components/Map";
import Markers from "@/components/Markers";
import * as stores from "@/data/store_data.json";

import { useState } from "react";

export default function Home() {
  const [map, setMap] = useState(null);
  // 선택한 스토어
  const [currentStore, setCurrentStore] = useState(null);
  const storeDatas = stores["DATA"];
  console.log(currentStore);

  return (
    <>
      <Map setMap={setMap} />;
      <Markers
        storeDatas={storeDatas}
        map={map}
        setCurrentStore={setCurrentStore}
      />
    </>
  );
}
