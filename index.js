document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});

$(document).ready(function () {
    $('.staff').slick({
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite looping
        speed: 300, // Speed of transition
        slidesToShow: 4, // Default items visible
        slidesToScroll: 1, // Scroll one item at a time for better UX
        arrows: true, // Show navigation arrows
        responsive: [{
            breakpoint: 1024, // For tablets and small desktops
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 850, // For larger mobile devices and small tablet
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false // Hide arrows for cleaner mobile look
            }
        },
        {
            breakpoint: 600, // For smaller mobile devices
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false // Hide arrows for cleaner mobile look
            }
        }
        ]
    });
});


$(document).ready(function () {
    $('.section-projektet').slick({
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite looping
        speed: 300, // Speed of transition
        slidesToShow: 2, // Default items visible
        slidesToScroll: 1, // Scroll one item at a time for better UX
        arrows: true, // Show navigation arrows
        responsive: [{
            breakpoint: 1024, // For tablets and small desktops
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 850, // For larger mobile devices and small tablet
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false // Hide arrows for cleaner mobile look
            }
        },
        {
            breakpoint: 600, // For smaller mobile devices
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false // Hide arrows for cleaner mobile look
            }
        }
        ]
    });
});

window.onscroll = function () {
    const button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Show button after scrolling
    } else {
        button.style.display = "none"; // Hide button at top
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

