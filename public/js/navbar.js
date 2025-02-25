const menuBtn = document.querySelector('.menuBtn');
const secondNavbarClick = document.querySelector('.secondNavbarClick');

let flag = false;
menuBtn.addEventListener('click', () => {
    menuBtn.innerText = flag ? 'menu' : 'close';
    secondNavbarClick.classList.toggle('active')
    flag = !flag
})

