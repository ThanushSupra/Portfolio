/** Shared ScrollFloat props for section headings. */
export const SECTION_HEADING_FLOAT = {
  animationDuration: 1,
  ease: 'back.inOut(2)',
  scrollStart: 'center bottom+=50%',
  scrollEnd: 'bottom bottom-=40%',
  stagger: 0.03,
  containerClassName: 'text-white !my-0',
  textClassName: 'text-6xl leading-none',
} as const;
