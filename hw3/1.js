// Урок 3. Промисы. Хранилище
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

// localStorage.setItem('dima', 'men')
// localStorage.setItem('dima', 'menw');
// localStorage.setItem('dima', 'menw2');
// localStorage.setItem('dima', 'men4');
// localStorage.setItem('dima', 'men1');

// // localStorage.removeItem('dima')

// let locEl = localStorage.getItem('dima')
// console.log('Значение из хранилища: ' + locEl);

// // localStorage.clear();
// console.log('LocalStorage: ' , localStorage);

const prodEl = document.getElementById("product").value;
const revEl = document.getElementById("review").value;
const btn = document.querySelector(".addReview");
const mainEl = document.querySelector(".mainrev");

console.log(prodEl, revEl, btn, mainEl);
let reviewList = JSON.parse(localStorage.getItem("reviewList")) || [];

const updateList = () => {
    mainEl.innerHTML = '';

    reviewList.forEach((element) => {
        const newDivEl = document.createElement("div");
        const newDivElH1 = document.createElement("h1");
        const newDivElp = document.createElement("p");
        newDivElH1.textContent = prodEl;
        newDivElp.textContent = revEl;
        mainEl.append(newDivEl);
        newDivEl.append(newDivElH1)
        newDivEl.append(newDivElp)
    });
    
    localStorage.setItem('reviewList',JSON.stringify(reviewList))
};
btn.addEventListener("click", () => {
    const newItem = revEl.value;

    if (newItem !=='') {
        reviewList.push(newItem);
        revEl.value='';
        updateList();
    }
    updateList();
});

console.log(reviewList);
