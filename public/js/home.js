const heroSectionOfHomePage = document.querySelectorAll('.heroSectionOfHomePage');
let incrementDetails = document.querySelectorAll('.incrementDetails');
// console.log(incrementDetails);


let count = 0;

heroSectionOfHomePage.forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
});

setInterval(() => {
    heroSectionOfHomePage.forEach((section) => {
        section.style.display = 'none';
    });

    heroSectionOfHomePage[count].style.display = 'block';

    count = (count + 1) % heroSectionOfHomePage.length;
}, 5000);


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.slider-container::before');
const next = document.querySelector('.slider-container::after');
let index = 0;

function showSlide(direction) {
    if (direction === 'next') {
        index = (index + 1) % slides.length;
    } else if (direction === 'prev') {
        index = (index - 1 + slides.length) % slides.length;
    }
    slider.style.transform = `translateX(-${index * (slides[0].offsetWidth + 30)}px)`;
}

document.querySelector('.slider-container').addEventListener('click', (e) => {
    if (e.target === prev) showSlide('prev');
    if (e.target === next) showSlide('next');
});



window.onscroll = function () { myFunction() };
let section3RDimageBox = document.getElementById("section3RDimageBox");
let isHashed = false;

function myFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        section3RDimageBox.classList.add("active");
    }
    else {
        section3RDimageBox.classList.remove("active")
    }
    if ((document.body.scrollTop > 2150 || document.documentElement.scrollTop > 2150) && !isHashed) {
        autoIncrement(incrementDetails);
        isHashed = true;
    }
}




function autoIncrement(incrementDetails) {
    incrementDetails.forEach(item => {
        // console.log(item.innerText)
        let increment = 0;
        let progressIncrement;
        let targetVal = parseInt(item.innerText);

        progressIncrement = setInterval(() => {
            if (increment >= targetVal) {
                clearInterval(progressIncrement)
                // item.innerText = `${increment}+`
            }
            else {
                increment++;
                // console.log(increment)
                item.innerText = `${increment}+`;
            }
        }, 40);

    })
}
autoIncrement(incrementDetails);
