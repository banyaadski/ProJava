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

const prodEl = document.querySelector(".product");
const revEl = document.querySelector(".review");
const addBtn = document.querySelector(".addReview");
const revList = document.querySelector(".review-list");

if (localStorage.getItem("reviews")) {
  revList.innerHTML = localStorage.getItem("reviews");
}

addBtn.addEventListener("click", () => {
  const prodDesc = prodEl.value;
  const revDesc = revEl.value;
  if (prodDesc !== "" && revDesc !== "") {
    const listEl = document.createElement("li");
    listEl.classList.add("revLi");
    listEl.innerHTML = `
    <span class="rev-decs">${prodDesc} <br> ${revDesc}</span>
        <button class="del-but">Удалить</button>
    `;
    revList.appendChild(listEl);
    prodEl.value = "";
    revEl.value = "";
    localStorage.setItem("reviews", revList.innerHTML);
  }
});

revList.addEventListener("click", (event) => {
  if (event.target.classList.contains("del-but")) {
    const listRev = event.target.closest("li");
    listRev.parentNode.removeChild(listRev);

    localStorage.setItem("reviews", revList.innerHTML);
  }
});
// let reviewList = JSON.parse(localStorage.getItem("reviewList")) || [];

// const updateList = () => {
//     mainEl.innerHTML = '';

//     reviewList.forEach((element) => {
//         const newDivEl = document.createElement("div");
//         const newDivElH1 = document.createElement("h1");
//         const newDivElp = document.createElement("p");
//         newDivElH1.textContent = prodEl;
//         newDivElp.textContent = revEl;
//         mainEl.append(newDivEl);
//         newDivEl.append(newDivElH1)
//         newDivEl.append(newDivElp)
//     });

//     localStorage.setItem('reviewList',JSON.stringify(reviewList))
// };
// btn.addEventListener("click", () => {
//     const newItem = revEl.value;

//     if (newItem !=='') {
//         reviewList.push(newItem);
//         revEl.value='';
//         updateList();
//     }
//     updateList();
// });

// console.log(reviewList);
