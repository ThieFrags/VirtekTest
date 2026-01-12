import {MainContainer} from "@shared/components";
import {HeroSection, Sponsors, AboutSection, Contacts} from '@widgets'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <MainContainer>
        <AboutSection/>
        <Sponsors/>
        <Contacts/>
      </MainContainer>
    </>
  );
};

export default HomePage;