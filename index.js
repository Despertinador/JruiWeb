const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

        if (entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        }
    })
}, { rootMargin: "-40% 0px -60% 0px" });

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
        menu.classList.remove("menu_opened");
    })
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});

const bloque= document.querySelectorAll(".bloque");
const h2= document.querySelectorAll(".select");

    h2.forEach( (cadaH2 , i ) => {
        h2[i].addEventListener("click", () => {
            bloque.forEach((cadaBloque , i) => {
                bloque[i].classList.remove("activo")
            })
            bloque[i].classList.add('activo')
        })
    })
