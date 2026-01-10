window.addEventListener("load", () => {
    const wrapper = document.querySelector(".page-wrapper");
    if (!wrapper) return;


    wrapper.getBoundingClientRect();

    wrapper.classList.add("page-enter");
});

document.querySelectorAll("a").forEach(link => {
    if (link.href && link.href.startsWith(window.location.origin)) {
        link.addEventListener("click", e => {
            e.preventDefault();

            const wrapper = document.querySelector(".page-wrapper");
            if (!wrapper) {
                window.location = link.href;
                return;
            }

            wrapper.classList.remove("page-enter");
            wrapper.classList.add("glitch-exit");

            setTimeout(() => {
                window.location = link.href;
            }, 650);
        });
    }
});
