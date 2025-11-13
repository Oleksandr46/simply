const modalBtnOpen = document.querySelector(".js-open-modal");
const modalBtnClose = document.querySelector(".js-close-modal");

const modal = document.querySelector(".js-modal");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// const modalBtnOpen = document.querySelector(".js-open-menu");
// const modalBtnClose = document.querySelector(".js-close-menu");

// const modal = document.querySelector(".js-menu");

// modalBtnOpen.addEventListener("click", toggleModal);
// modalBtnClose.addEventListener("click", toggleModal);

// function toggleModal() {
//   modal.classList.toggle("is-open");
// }
