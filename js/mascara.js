function iniciarMascaras() {

    // CPF
    const cpf = document.querySelector("#cpf");

    if (cpf) {

        cpf.addEventListener("input", function () {

            let valor = cpf.value.replace(/\D/g, "");

            valor = valor.substring(0, 11);

            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            cpf.value = valor;

        });

    }

    // TELEFONE
    const telefone =
        document.querySelector("#telefone");

    if (telefone) {

        telefone.addEventListener("input", function () {

            let valor =
                telefone.value.replace(/\D/g, "");

            valor = valor.substring(0, 11);

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d{1,4})$/,
                "$1-$2"
            );

            telefone.value = valor;

        });

    }

    // CEP
    const cep =
        document.querySelector("#cep");

    if (cep) {

        cep.addEventListener("input", function () {

            let valor =
                cep.value.replace(/\D/g, "");

            valor = valor.substring(0, 8);

            valor = valor.replace(
                /(\d{5})(\d{1,3})$/,
                "$1-$2"
            );

            cep.value = valor;

        });

    }

}


/* =========================
   VALIDAÇÃO DO FORMULÁRIO
========================= */

function iniciarValidacao() {

    const formulario =
        document.querySelector(
            ".formulario-cadastro"
        );

    if (!formulario) {
        return;
    }

    formulario.addEventListener(
        "submit",
        function (evento) {

            const nome =
                document.getElementById(
                    "nome"
                );

            let erro =
                document.getElementById(
                    "erro-nome"
                );

            if (
                nome.value.trim().length < 5
            ) {

                evento.preventDefault();

                nome.style.border =
                    "2px solid red";

                if (!erro) {

                    erro =
                        document.createElement(
                            "small"
                        );

                    erro.id =
                        "erro-nome";

                    erro.textContent =
                        "O nome deve possuir pelo menos 5 caracteres.";

                    erro.style.color =
                        "red";

                    nome.parentNode.appendChild(
                        erro
                    );

                }

            }

            else {

                nome.style.border =
                    "2px solid green";

                if (erro) {

                    erro.remove();

                }

                const dadosCadastro = {

                    nome:
                        document.getElementById("nome").value,

                    cpf:
                        document.getElementById("cpf").value,

                    email:
                        document.getElementById("email").value,

                    telefone:
                        document.getElementById("telefone").value

                };

                localStorage.setItem(
                    "cadastroPetLegal",
                    JSON.stringify(
                        dadosCadastro
                    )
                );
                evento.preventDefault();

                Swal.fire({
                    icon: "success",
                    title: "Cadastro realizado!",
                    text: "Obrigado por apoiar a PetLegal.",
                    confirmButtonText: "Voltar ao início 🐾",
                    confirmButtonColor: "#e76f51"
                }).then(() => {

                carregarPagina("home");

                atualizarMenuAtivo("home");

});

            }

        }

    );

}


/* =========================
   RECUPERA DADOS
========================= */

function carregarDadosSalvos() {

    const dadosSalvos =
        localStorage.getItem(
            "cadastroPetLegal"
        );

    if (!dadosSalvos) {
        return;
    }

    const dados =
        JSON.parse(
            dadosSalvos
        );

    const nome =
        document.getElementById(
            "nome"
        );

    const cpf =
        document.getElementById(
            "cpf"
        );

    const email =
        document.getElementById(
            "email"
        );

    const telefone =
        document.getElementById(
            "telefone"
        );

    if (nome) {
        nome.value =
            dados.nome || "";
    }

    if (cpf) {
        cpf.value =
            dados.cpf || "";
    }

    if (email) {
        email.value =
            dados.email || "";
    }

    if (telefone) {
        telefone.value =
            dados.telefone || "";
    }

}