// ANCHORS
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
//HEADER

const header = document.getElementById("header_top")

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY


    if (scrollPos > 600) {
        header.classList.add("header_shadow")
    } else {
        header.classList.remove("header_shadow")
    }
})

//FAQ
let coll = document.getElementsByClassName("faq_btn")
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}
//MODAL feedback
document.getElementById("btn-modal-open-feeback").addEventListener("click", function () {
    document.getElementById("modal-feedback").classList.add("open")
    document.getElementById("body").classList.add("no-scroll");
})
document.getElementById("btn-modal-open-feeback1").addEventListener("click", function () {
    document.getElementById("modal-feedback").classList.add("open")
    document.getElementById("body").classList.add("no-scroll");
})

document.getElementById("btn-modal-close").addEventListener("click", function () {
    document.getElementById("modal-feedback").classList.remove("open")
    document.getElementById("body").classList.remove("no-scroll");
})
// Close Escape
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-feedback").classList.remove("open")
        document.getElementById("body").classList.remove("no-scroll");
    }
});
//Close area
document.querySelector("#modal-feedback .feedback_container").addEventListener("click", event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-feedback").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    document.getElementById("body").classList.remove("no-scroll");
});