
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-loading");
    const pre = document.querySelector("[data-preloader]");
    window.addEventListener("load", () => setTimeout(() => { pre?.classList.add("done"); document.body.classList.remove("is-loading") }, 700));
    const header = document.querySelector("[data-header]"), top = document.querySelector(".to-top");
    const scroll = () => { header?.classList.toggle("scrolled", scrollY > 40); top?.classList.toggle("show", scrollY > 600) }; addEventListener("scroll", scroll, { passive: true }); scroll();
    const toggle = document.querySelector("[data-menu-toggle]"), nav = document.querySelector("[data-nav]");
    toggle?.addEventListener("click", () => { let open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", open) });
    nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("in") }), { threshold: .12 });
    document.querySelectorAll(".reveal,.stagger").forEach(x => io.observe(x));
    const cursor = document.querySelector(".cursor");
    if (cursor && matchMedia("(pointer:fine)").matches) { addEventListener("mousemove", e => { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px" }); document.querySelectorAll("a,button,figure,.image-frame").forEach(x => { x.onmouseenter = () => cursor.classList.add("big"); x.onmouseleave = () => cursor.classList.remove("big") }) }
    top?.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
});
