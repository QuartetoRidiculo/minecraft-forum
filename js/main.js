const links = [
    {
        title: "Home",
        href: "/",
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
}

header();

function footer() {
    const footer = document.getElementById("footer");

    const p = document.createElement("p");
    p.textContent = "© 2025 Fórum Minecraft — Projeto desenvolvido por Alison Barbosa, Gustavo Travassos, Rodrigo Silveira e Darllan Cabral. Trabalho acadêmico da disciplina de Desenvolvimento Web — Unifacisa."
 
    footer.appendChild(p);
}

footer();