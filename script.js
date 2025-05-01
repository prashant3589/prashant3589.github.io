// Add a simple scroll fade effect
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        //section.style.opacity = 1;
        //section.style.transform = "translateY(0)";
        section.style.opacity = 1 ;
        section.style.transform = none;
      } else {
        //section.style.opacity = 0;
        //section.style.transform = "translateY(50px)";
        section.style.opacity = 1 ;
        section.style.transform = none;
      }
    });
  });
  
  // Initial animation
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });
  
