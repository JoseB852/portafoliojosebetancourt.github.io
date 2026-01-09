import CircleImage from "@/components/circle.image";
import TransitionPage from "@/components/transition-page";
import CoverParticles from "@/components/coverParticles";
import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />

      {/* Elementos flotantes con pointer-events-none */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <CircleImage />
        <CoverParticles />
        <AvatarServices />
      </div>

      {/* Grid principal de dos columnas */}
      <div className="grid items-center justify-start h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 py-20 relative z-10">
        {/* Columna izquierda: texto */}
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-[#FF7F00]">servicios.</span>
          </h1>

          <p className="mb-3 text-xl text-left">
            Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
          </p>
        </div>

        {/* Columna derecha: slider */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
