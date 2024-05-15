// BENCHMARK VARIANTS
export const benchmarkContainerVariants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const benchmarkItemVariants = {
  initial: {
    scaleX: 0,
    opacity: 0,
    transformOrigin: "center left",
  },
  whileInView: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 4,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};
