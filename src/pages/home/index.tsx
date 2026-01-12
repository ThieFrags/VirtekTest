import HeroSection from "@shared/widgets/hero";
import AboutSection from "@shared/widgets/about";
import MainContainer from "@shared/components/main-container";
import Sponsors from "@shared/widgets/sponsors";
import Contacts from "@shared/widgets/contacts";


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