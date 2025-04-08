const faMinus = document.querySelectorAll(".fa-minus");
const faPlus = document.querySelectorAll(".fa-plus");
const resposta = document.querySelectorAll(".resposta");

faPlus.forEach((e, index) => {
    e.addEventListener("click", () => {
        e.classList.add("hidden");
        faMinus[index].classList.remove("hidden");
        resposta[index].classList.remove("hidden");
    })
})

faMinus.forEach((e, index) => {
    e.addEventListener("click", () => {
        e.classList.add("hidden");
        faPlus[index].classList.remove("hidden");
        resposta[index].classList.add("hidden");
    })
})