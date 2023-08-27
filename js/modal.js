(() => {
  const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector(".modal"),
  backdrop: document.querySelector(".backdrop"),
  };
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", function(event) {
  if (event.target === refs.backdrop) {
  toggleModal();
  }
  });
  
  function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  refs.backdrop.classList.toggle("is-hidden");
  }
  })();