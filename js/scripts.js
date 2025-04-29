document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    document.getElementById('next').addEventListener('click', () => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    });
    
    document.getElementById('prev').addEventListener('click', () => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="juice-flavor[]"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const flavor = checkbox.value;
      const qtyInput = document.querySelector(`input[data-flavor="${flavor}"]`);
      if (checkbox.checked) {
        qtyInput.hidden = false;
      } else {
        qtyInput.hidden = true;
        qtyInput.value = 1; // this should (hopefully) reset it to the default
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
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

  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // This technically prevents the form from actually submitting
    alert("Your yummy and tasty juice order is on its way to you!");
  });
});
