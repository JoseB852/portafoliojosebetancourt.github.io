"use client"; // 👈 Necesario porque usa Hooks (useState, useEffect)

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {

      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 🔹 Callback opcional cuando las partículas se cargan
  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles container loaded:", container);
  }, []);

  // 🔹 Render
  return (
    <div className="absolute inset-0 z-0">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
               
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 150, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
              },
              number: {
                value: 80,
                density: { enable: true, },
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};

export default CoverParticles;
