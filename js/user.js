// You can add any interactivity or animation here
// For example, you can add a smooth scrolling effect

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});