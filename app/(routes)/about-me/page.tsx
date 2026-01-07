import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/coverParticles";
import CounterService from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex min-h-screen h-full bg-no-repeat bg-gradient-cover bg-[#050505] relative overflow-hidden">
        <CoverParticles />

        <ContainerPage>
          {/* Título */}
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
            Toda mi{" "}
            <span className="font-bold text-[#FF7F00]">
              experiencia laboral
            </span>
          </h1>

          {/* Contadores */}
          <CounterService />

          {/* Timeline con Avatar detrás */}
          <div className="relative z-0 w-full mt-10">
            <TimeLine />
            <Avatar />
          </div>
        </ContainerPage>
      </div>
    </>
  );
};

export default PageAboutMe;
