import HeroSection from "@shared/widgets/hero";
import AboutSection from "@shared/widgets/about";
import MainContainer from "@shared/components/main-container";
import Sponsors from "@shared/widgets/sponsors";
import {YMap, YMapComponentsProvider, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer} from "ymap3-components";
import {YMapLocation} from "@yandex/ymaps3-types/imperative/YMap";

const location: YMapLocation = { center: [37.95, 55.65], zoom: 10 };

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <MainContainer>
        <AboutSection/>
        <Sponsors/>
        <YMapComponentsProvider apiKey={"f5722534-8707-4b66-8bf2-e234d7e74b14"}>
          <YMap location={location}>
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
          </YMap>
        </YMapComponentsProvider>
      </MainContainer>
    </>
  );
};

export default HomePage;