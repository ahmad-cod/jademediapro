import { MainWrapper } from "@/components/layout";
import AboutHeader from "../../components/aboutComponents/aboutHeader";
import Career from "../../components/aboutComponents/career";
import Identity from "../../components/aboutComponents/clientComponent";
import CultureAndValues from "../../components/aboutComponents/culture$values";
import AboutServices from "../../components/aboutComponents/service";
import Team from "../../components/aboutComponents/team";
import TechnologyLogos from "../../components/aboutComponents/technology";
import Testimonials from "../../components/aboutComponents/testimonials";
import Volunteering from "../../components/aboutComponents/volunteering";
import W3 from "../../components/aboutComponents/w3Componet";
import ReadyToWork from "../../components/ReadyToWork";
import styles from "../../styles/Project.module.css";

const About = () => {
  return (
    <MainWrapper
      headerType={1}
      paint-header-on-scroll
      mobile-pad
      backgroundColor="#f6f6f6"
      color="#242526"
      title="About Us - Jade Media Pro"
    >
      <section className={styles.about}>
        <AboutHeader />
        <Identity />
        <W3 />
        <CultureAndValues />
        <Volunteering />
        <Team />
        <Career />
        <Testimonials />
        <TechnologyLogos />
        <AboutServices />
        <ReadyToWork />
      </section>
    </MainWrapper>
  );
};

export default About;
