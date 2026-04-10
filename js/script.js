// Script for section-based navigation, typing effect plus theme and preloader

const body = document.body;
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const preloader = document.getElementById('preloader');
const revealElements = document.querySelectorAll('[data-reveal]');
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
  menuToggle.querySelector('i').classList.toggle('fa-times');
  menuToggle.querySelector('i').classList.toggle('fa-bars');
});

// Close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
    menuToggle.querySelector('i').classList.remove('fa-times');
    menuToggle.querySelector('i').classList.add('fa-bars');
  });
});

// Sticky header styles on scroll
window.addEventListener('scroll', () => {
  const isPinned = window.scrollY > 20;
  const header = document.getElementById('header');

  if (isPinned) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // section reveal logic
  revealElements.forEach(elem => {
    const rect = elem.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      elem.classList.add('reveal');
    }
  });
});

// Smooth active nav link highlight
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  sections.forEach(section => {
    const offsetTop = section.offsetTop - 90;
    const offsetBottom = offsetTop + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href='#${id}']`);

    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
      navLinks.forEach(item => item.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
});

// Typing effect for hero section
const words = ['Computer Engineering Student.', 'Web Developer.', 'System Designer.', 'Problem Solver.'];
let currentWordIndex = 0;
let typeIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
  const currentWord = words[currentWordIndex];
  if (isDeleting) {
    typingElement.textContent = currentWord.slice(0, typeIndex - 1);
    typeIndex -= 1;
  } else {
    typingElement.textContent = currentWord.slice(0, typeIndex + 1);
    typeIndex += 1;
  }

  if (!isDeleting && typeIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1400);
  } else if (isDeleting && typeIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 60 : 95;
  setTimeout(type, speed);
}

if (typingElement) {
  type();
}

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
  }, 500);

  // animate progress bars on load
  document.querySelectorAll('.progress span').forEach(bar => {
    const width = bar.style.width;
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });

  // reveal all initially loaded sections
  revealElements.forEach(elem => elem.classList.add('reveal'));
});

// Contact form submission using Outlook web compose
if (contactForm && formResponse) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formResponse.textContent = 'Please fill in all fields.';
      formResponse.style.color = '#ff7c7c';
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
    const body = encodeURIComponent(
      `Hello Kenneth,%0D%0A%0D%0A` +
      `You received a new message from your portfolio website.%0D%0A%0D%0A` +
      `Name: ${name}%0D%0A` +
      `Email: ${email}%0D%0A%0D%0A` +
      `Message:%0D%0A${message}%0D%0A%0D%0A` +
      `Best regards,%0D%0APortfolio Contact Form`
    );

    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=bulakenneth21@gmail.com&subject=${subject}&body=${body}`;
    const mailtoUrl = `mailto:bulakenneth21@gmail.com?subject=${subject}&body=${body}`;

    formResponse.innerHTML =
      'Opening Outlook compose window... If nothing happens, <a href="' + outlookUrl + '" target="_blank" rel="noreferrer">click here</a>.';
    formResponse.style.color = '#7cffb2';

    window.open(outlookUrl, '_blank');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 800);
  });
}

// Parallax background movement for hero
const hero = document.querySelector('.hero');
hero?.addEventListener('mousemove', e => {
  const x = (e.clientX - window.innerWidth / 2) / 55;
  const y = (e.clientY - window.innerHeight / 2) / 55;
  const imageBg = document.querySelector('.hero-image-background');
  if (imageBg) {
    imageBg.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Opening navbar and hero reveal on page load
setTimeout(() => {
  revealElements.forEach(elem => {
    if (!elem.classList.contains('reveal')) elem.classList.add('reveal');
  });
}, 200);