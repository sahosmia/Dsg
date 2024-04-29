export const downVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
};

export const leftVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
};
export const rightVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
};