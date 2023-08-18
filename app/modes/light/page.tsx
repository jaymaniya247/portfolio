import dynamic from "next/dynamic";
import About from "@/app/components/About";
import Blog from "@/app/components/Blog";
import Contact from "@/app/components/Contact";
import ExpertAreas from "@/app/components/ExpertAreas";
import Feedback from "@/app/components/Feedback";
import Home from "@/app/components/Home";
import Services from "@/app/components/Services";
import CopyRight from "@/app/layouts/CopyRight";
import Header from "@/app/layouts/Header";
import MobileMenu from "@/app/layouts/MobileMenu";
import Mouse from "@/app/layouts/Mouse";
import ProgressBar from "@/app/layouts/ProgressBar";
const Projects = dynamic(() => import("@/app/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("@/app/components/Partners"), {
  ssr: false,
});

const LightLayout = () => {
  return (
    <div>
      <MobileMenu />
      <Header />
      <Home />
      <About />
      <ExpertAreas />
      <Services />
      <Projects />
      <Feedback />
      <Blog />
      <Partners />
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
    </div>
  );
};

export default LightLayout;
