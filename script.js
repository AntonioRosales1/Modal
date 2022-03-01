'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsopenModal = document.querySelectorAll(`.show-modal`);

const openModel = function () {
  console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsopenModal.length; i++)
  btnsopenModal[i].addEventListener(`click`, openModel);

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);