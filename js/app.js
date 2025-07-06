// Carousel //
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show current slide
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  
  // Move carousel
  const carousel = document.querySelector('.carousel-slides');
  carousel.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

// Auto-slide functionality (optional)
function startAutoSlide() {
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
  showSlide(0);
  // Uncomment the line below to enable auto-sliding
  // startAutoSlide();
});

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

document.querySelector('.carousel-container').addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
});

document.querySelector('.carousel-container').addEventListener('touchend', function(e) {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = startX - endX;
  
  if (diff > swipeThreshold) {
    nextSlide();
  } else if (diff < -swipeThreshold) {
    prevSlide();
  }
}