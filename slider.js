document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider");
    const switchButtons = document.querySelectorAll(".switch li");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
                switchButtons[i].classList.add("active");
            } else {
                slide.style.display = "none";
                switchButtons[i].classList.remove("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    switchButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
});

document.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector('.animated-section');
    var screenPosition = window.innerHeight;

    window.addEventListener('scroll', function() {
        var sectionPosition = section.getBoundingClientRect().top;
        var scrollPosition = window.scrollY;

        if (sectionPosition < screenPosition) {
            section.classList.add('show');
        }
    });
});
