const items = document.querySelectorAll('.questions__item');

items.forEach((item) =>
    item.onclick = () => {
        item.classList.toggle('show')
    }
)