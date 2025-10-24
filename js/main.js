const links = [
    {
        title: "Home",
        href: "/index.html",
    },
    {
        title: "Servidores",
        href: "/servers.html",
    },
    {
        title: "Builds",
        href: "/builds.html",
    },
    {
        title: "Tutoriais",
        href: "/tutorials.html",
    },
    {
        title: "Ranking",
        href: "/ranking.html",
    }
]

function header() {
    const path = window.location.pathname;

    const header = document.getElementById("header");

    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = "img/logo.png";
    img.alt = "minecraft";

    const h1 = document.createElement("h1");
    h1.textContent = "Minecraft Forum";

    const nav = document.createElement("nav");
    nav.id = "nav";

    const ul = document.createElement("ul");

    for (const link of links) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = link.title;
        a.href = link.href;

        if (path === link.href) {
            a.classList.add("active")
        } else {
            a.classList.remove("active");
        }

        li.appendChild(a);
        ul.appendChild(li);
    }

    div.appendChild(img);
    div.appendChild(h1);

    nav.appendChild(ul);

    header.appendChild(div);
    header.appendChild(nav);
    header.appendChild(menu_burger());
}

header();

function menu_burger() {
    const nav = document.getElementById("nav");
    let isOpen = false;

    const btn = document.createElement("button");
    btn.className = "menu";

    const img = document.createElement("img");
    img.src = "img/menu-burger.png";
    img.alt = "menu-burger"

    btn.appendChild(img);

    btn.addEventListener("click", () => {
        isOpen = !isOpen;
        img.src = isOpen ? "img/close.png" : "img/menu-burger.png";
        nav.style.transform = isOpen ? "translateX(0)" : "translateX(100%)";
    })

    function handleResize() {
        if (window.innerWidth > 748) {
            nav.style.transform = "translateX(0)"
        } else {
            if (!isOpen) {
                nav.style.transform = "translateX(100%)"
            }
        }
    }

    window.addEventListener("resize", handleResize);

    return btn
}

function footer() {
    const footer = document.getElementById("footer");

    const p = document.createElement("p");
    p.textContent = "© 2025 Forum Minecraft — Trabalho acadêmico da disciplina de Desenvolvimento Web — Unifacisa."

    footer.appendChild(p);
}

footer();