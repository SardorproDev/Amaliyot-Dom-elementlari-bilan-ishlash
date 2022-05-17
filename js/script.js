/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/
/* -=> Darsga Topshiriq
1) Inputni to'ldirgandan so'ng va "Tasdiqlash" tugmachasini bosgandan so'ng -
ro'yxatga yangi yangilik qo'shilish kerak. Sahifa qayta yuklanmasligi kerak.
Yangi yangilik news massivga qo'shilishi kerak.
Input qiymatini olish uchun biz uni input.value dan foydalanamiz;
P.S. Muammoni hal qilish uchun bir nechta variantlar mavjud, faqat ishlidgoni kerak
2) Agar yangilikni nomi 21 belgidan ko'p bo'lsa - uni kesib oling va uchta nuqta qo'shing
3) Axlat qutisini bosganingizda - yangilik ro'yxatdan o'chirilishi kerak (qiyin)
4) Agarda inputda checkboxda beligisi belgilangan bo'lsa "Is it favourite?" 
consolega "sevimli yangilik qo'shilmoqda"
5) Filmlar alfavit bo'yicha tartiblangan bo'lishi kerak
*/

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const news = [
    "CYBER SPORT",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const newsBtn = document.querySelector(".promo__btn"),
    promoGenre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector(".promo__bg"),
    newsList = document.querySelector(".promo__interactive-list"),
    promoBtn = document.querySelector("#more"),
    addForm = document.querySelector(".add-form"),
    addInput = document.querySelector(".adding__input"),
    checkbox = document.querySelector(`[type="checkbox"]`);

  let sortArr = function(e) {
    e.sort();
  }
  addForm.addEventListener("click", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    let check = checkbox.checked;
    if (newFilm.trim()) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
      }
      if(check) {
        console.log("Sevimli yangilik qo'shilmoqda");
        checkbox.checked = "";
      }
      news.push(newFilm);
      sortArr(news);
      addInput.value = "";

      sortNews(news, newsList);
    } else {
      alert("Ma'lumot kiritmadingiz");
    }
  })

  newsBtn.remove();
  promoGenre.textContent = "UzNews";
  promoGenre.style.color = "coral";
  promoBg.style.backgroundImage = `url("../img/2.jpg")`;
  promoBtn.style.borderRadius = "20px";
  function sortNews(newsListItem, parent) {
    sortArr(news)
    parent.textContent = "";
    newsListItem.forEach((item, index) => {
      parent.innerHTML += `<li class="promo__interactive-item">
        ${index + 1} ${item}
          <div class="delete"></div>
        </li>`
    });

    document.querySelectorAll(".delete").forEach((item, index) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();
        console.log(item);
        news.splice(index, 1);
        sortNews(newsListItem, parent);
      });
    })
  }
  sortNews(news, newsList);
})
