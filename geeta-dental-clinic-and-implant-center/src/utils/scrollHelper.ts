/**
 * Scroll and navigation helpers
 */

export const scrollToSection = (sectionId: string, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: yCoordinate,
      behavior: 'smooth',
    });
  }
};
