const fixedHeaderWhenScrolling = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}

const openSidebar = () => {
    const openBtn = document.querySelector('.header__burger');
    const closeBtn = document.querySelector('.sidebar__close');

    const sidebar = document.querySelector('.sidebar');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('sidebar--open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--open');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function () {
        fixedHeaderWhenScrolling();
    });

    openSidebar();
});