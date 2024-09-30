// Переменные
const buttons = document.querySelectorAll('.hey__button');
const heyPersons = document.querySelector('.hey_persons');
const ACTIVE_SECTION = 1;

const firstContent = `<div class="hey__sub-wrapper">
<div class="hey__cont">
    <img class="hey__img" src="img/artist.png" alt="">
</div>

<div class="hey__text-sub-container">
    <h3 class="hey__jack">Digital Artist</h3>
    <h2>Pellentesque blandit <br> in quam rhoncus</h2>
    <p class="hey__text-p">Suspendisse ante mauris, volutpat congue sem ac, ultrices tempor lorem. Nullam eget vehicula tellus, ac consectetur urna. Mauris tincidunt, libero id ultrices tincidunt, mi leo pharetra dolor, sed luctus dui ipsum et augue. Integer non quam feugiat, porttitor libero a, tempor neque. Nulla ac orci mauris. Quisque nisi nisl, rutrum ac diam et, semper commodo quam</p>
</div>
</div>`;

const secondContent = `<div class="hey__sub-wrapper">
<div class="hey__cont">
    <img class="hey__img" src="img/old-man.png" alt="">
</div>
<div class="hey__text-sub-container">
    <div>
        <h3>OUR WORK</h3>
        <h2>“Um… what’s going on here?”</h2>
        <p class="hey__text-p">Nulla facilisi. Praesent molestie diam eu enim aliquet pellentesque. Vestibulum consectetur vestibulum tristique. Sed purus neque, maximus fermentum bibendum et, porta in sapien.</p>
    </div>
    <div class="hey__text-suni">
        <button class="hey__text-suni-btn">About Codx</button>
    </div>
</div>
</div>`;

const thirdContent = `<div class="hey__sub-wrapper">
<div class="hey__text-sub-container">
    <div class="hey__text-item">
        <h3 class="hey__text-number hey__text-number_color_green">01</h3>
        <h2 class="hey__text-title">Motion Graphic</h2>
        <p class="hey__text-p">Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</p>
    </div>
    <div class="hey__text-item">
        <h3 class="hey__text-number hey__text-number_color_pink">02</h3>
        <h2 class="hey__text-title">Motion Graphic</h2>
        <p class="hey__text-p">Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</p>
    </div>
    <div class="hey__text-item">
        <h3 class="hey__text-number hey__text-number_color_yelow">03</h3>
        <h2 class="hey__text-title">Motion Graphic</h2>
        <p class="hey__text-p">Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et magna at</p>
    </div>
</div>
<div class="hey__cont">
    <img class="hey__img" src="img/black-custom.png" alt="">
</div>
</div>`;

const contents = [firstContent, secondContent, thirdContent];

// Функция для обновления активной кнопки и контента
function updateContent(activeIndex) {
    buttons.forEach((item) => {
        item.classList.remove('button_active');
    });
    buttons[activeIndex].classList.add('button_active');
    heyPersons.innerHTML = contents[activeIndex];
}

// Обработка нажатия на кнопки
buttons.forEach((btn, index) => {
    btn.onclick = () => updateContent(index);
});

// Функция, срабатывающая при загрузке страницы
window.onload = () => {
    updateContent(ACTIVE_SECTION);
};