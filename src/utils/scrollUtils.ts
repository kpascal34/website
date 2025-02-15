export const scrollToSection = (sectionId: string) => {
  // Remove the '#' if it exists
  const id = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    return true;
  }
  return false;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};