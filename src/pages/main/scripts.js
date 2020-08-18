var popup = document.querySelector(".modal_js"),
    buttonOpen = document.querySelector(".button-open_js"),
    buttonClose = document.querySelector(".button-close_js"),
    input = document.querySelector(".input-text_js"),
    html = document.querySelector("html");

buttonOpen.addEventListener("click", function() {
    html.classList.add("modal-bg_open");
    input.focus();
});

buttonClose.addEventListener("click", function() {
    html.classList.remove("modal-bg_open");
    buttonOpen.focus();
});

// "Escape"
window.addEventListener("keydown", function(e) {
    if(e.code === "Escape" && popup.classList.contains("modal-bg_open")) {
        popup.classList.remove("modal-bg_open");
    }
});

var buttonOpenMenu = document.getElementById("js-button-open-menu"),
    buttonCloseMenu = document.getElementById("js-button-close-menu");

buttonOpenMenu.addEventListener("click", function () {
    html.classList.add("open-mobile-menu");
});

buttonCloseMenu.addEventListener("click", function () {
    html.classList.remove("open-mobile-menu");
});