document.addEventListener('DOMContentLoaded', () => {
  // Slideshow logic for the really cool slide show on the main page!
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  if (nextBtn && prevBtn && slides.length > 0) {
    nextBtn.addEventListener('click', () => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    });

    prevBtn.addEventListener('click', () => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    });
  }

  // stuff for the juice flavor checkboxes!
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="juice-flavor[]"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const flavor = checkbox.value;
      const qtyInput = document.querySelector(`input[data-flavor="${flavor}"]`);
      if (checkbox.checked) {
        qtyInput.hidden = false;
      } else {
        qtyInput.hidden = true;
        qtyInput.value = 1;
      }
    });
  });

  // stuff for the form submit handling logic!!
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Your yummy and tasty juice order is on its way to you!!🧃");

    form.reset(); // this should hopefully reset all the inputs to default values!

    // hide all qty inputs again after resetting the page!!
    document.querySelectorAll('.qty-input').forEach(input => {
      input.hidden = true;
      input.value = 1;
    });
  });
});
