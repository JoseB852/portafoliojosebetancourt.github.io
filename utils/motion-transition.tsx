// transitionVariantsPage.ts
export const transitionVariantsPage = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "100%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };
  
  // fadeIn.ts
  export const fadeIn = (position: string) => ({
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.44,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.44,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  });
  