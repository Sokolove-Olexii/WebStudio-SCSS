(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-mob-menu-open]"),
    closeModalBtn: document.querySelector("[data-mob-menu-close]"),
    modal: document.querySelector(".form-mob-menu"),
    backdrop: document.querySelector(".div-mob-menu"),
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