const conteudo =
    document.getElementById(
        "conteudo-principal"
    );

if (typeof iniciarMascaras === "function") {
    iniciarMascaras();
}

/* =========================
   MENU ATIVO
========================= */

function atualizarMenuAtivo(
    pagina
) {

    document
        .querySelectorAll("[data-page]")
        .forEach(link => {

            link.classList.remove(
                "ativo"
            );

            if (
                link.dataset.page === pagina
            ) {

                link.classList.add(
                    "ativo"
                );

            }

        });

}

/* =========================
   DADOS DOS PROJETOS
========================= */

const projetos = [

    {
        id: "resgate",
        numero: "01",
        icone: "🐕",
        titulo: "Projeto Resgate",
        descricao:
            "Resgatamos cães e gatos abandonados, feridos ou em situação de risco.",
        botao: "Quero ajudar"
    },

    {
        id: "adocao",
        numero: "02",
        icone: "🏠",
        titulo: "Projeto Lar Feliz",
        descricao:
            "Conectamos animais resgatados a famílias responsáveis.",
        botao: "Quero adotar"
    },

    {
        id: "doacao",
        numero: "03",
        icone: "🍖",
        titulo: "PetLegal Alimenta",
        descricao:
            "Arrecadamos rações e alimentos para os animais resgatados.",
        botao: "Quero doar"
    },

    {
        id: "cuida",
        numero: "04",
        icone: "🩺",
        titulo: "PetLegal Cuida",
        descricao:
            "Oferecemos atendimento veterinário, vacinação e tratamentos.",
        botao: "Quero contribuir"
    }

];

/* =========================
   TEMPLATE DOS CARDS
========================= */

function criarCard(projeto) {

    return `

        <li
            class="card-projeto"
            id="${projeto.id}"
        >

            <figure class="icone-projeto">
                <span aria-hidden="true">
                    ${projeto.icone}
                </span>
            </figure>

            <p class="numero-projeto">
                ${projeto.numero}
            </p>

            <span class="badge ativo">
                Ativo
            </span>

            <h3>
                ${projeto.titulo}
            </h3>

            <p>
                ${projeto.descricao}
            </p>

            <a
                href="#"
                data-page="cadastro"
            >
                ${projeto.botao} →
            </a>

        </li>

    `;

}

/* =========================
   RENDERIZA PROJETOS
========================= */

function renderizarProjetos() {

    const container =
        document.getElementById(
            "projetos-container"
        );

    if (!container) {
        return;
    }

    container.innerHTML =
        projetos
            .map(criarCard)
            .join("");

}

/* =========================
   CARREGA PÁGINA SPA
========================= */

async function carregarPagina(
    pagina,
    anchor = null
) {

    try {

        const resposta =
            await fetch(
                `html/${pagina}.html`
            );

        const html =
            await resposta.text();

        conteudo.innerHTML =
            html;

        renderizarProjetos();
        if (typeof iniciarMascaras === "function") {
            iniciarMascaras();
        }

        if (typeof iniciarValidacao === "function") {
            iniciarValidacao();
        }
        if (typeof carregarDadosSalvos === "function") {
            carregarDadosSalvos();
        }

        if (anchor) {

            setTimeout(() => {

                const destino =
                    document.getElementById(
                        anchor
                    );

                if (destino) {

                    destino.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 100);

        }

    }

    catch (erro) {

        conteudo.innerHTML = `

            <section>

                <h2>
                    Erro
                </h2>

                <p>
                    Não foi possível carregar a página.
                </p>

            </section>

        `;

    }

}

/* =========================
   EVENTOS DE NAVEGAÇÃO
========================= */

document
    .querySelectorAll("[data-page]")
    .forEach(link => {

        link.addEventListener(
            "click",
            (evento) => {

                evento.preventDefault();

                carregarPagina(
                    link.dataset.page,
                    link.dataset.anchor
                );

                atualizarMenuAtivo(
                    link.dataset.page
                );

            }
        );

    });

/* =========================
   PÁGINA INICIAL
========================= */

carregarPagina("home");

atualizarMenuAtivo(
    "home"
);