import {YMap, YMapComponentsProvider, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer} from "ymap3-components";
import {YMapLocation} from "@yandex/ymaps3-types/imperative/YMap";

const location: YMapLocation = { center: [37.95, 55.65], zoom: 10 };

const MapY = () => {
  return (
    <div style={{width:'50%', height:'400px'}}>
      <YMapComponentsProvider apiKey={"9072a672-d5e4-4055-8ea8-6bdb6d3a1d2f"} lang="en_EN">
        <YMap location={location}>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
};

export {
  MapY
};