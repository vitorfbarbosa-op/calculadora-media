document.getElementById("novocalculo").style.display = "none";

function calcularMedia() {

    // Pegando os valores digitados pelo usuário
    let nome = document.getElementById("nome").value;
    let disciplina = document.getElementById("disciplina").value;

    // Pegando as notas e convertendo para número
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);

    // Verificando se todos os campos foram preenchidos
    if (
        nome == "" ||
        disciplina == "" ||
        document.getElementById("nota1").value == "" ||
        document.getElementById("nota2").value == "" ||
        document.getElementById("nota3").value == "" ||
        document.getElementById("nota4").value == ""
    ) {

        alert("Preencha todos os campos!");

    } else {

        // Operações matemáticas
        let soma = n1 + n2 + n3 + n4;
        let media = soma / 4;

        // Verificar situação do aluno
        let situacao;
        let classesSituacao;

        if (media >= 7) {
            situacao = "APROVADO";
            classesSituacao = "aprovado";
        }

        else if (media >= 5) {
            situacao = "EM RECUPERAÇÃO";
            classesSituacao = "recuperacao";
        }

        else {
            situacao = "REPROVADO";
            classesSituacao = "reprovado";
        }

        // Exibir o resultado
        let resultado = document.getElementById("resultado");

        resultado.innerHTML =
            "Aluno: " + nome + "<br><br>" +
            "Disciplina: " + disciplina + "<br><br>" +
            "Média: " + media.toFixed(2) + "<br><br>" +
            "Situação: <span class='" + classesSituacao + "'>" +
            situacao + "</span>";

        // Trocar os botões
        document.getElementById("novocalculo").style.display = "block";
        document.getElementById("calcular").style.display = "none";
    }
}

function calcularNovo() {

    // Resetando os valores
    document.getElementById("nome").value = "";
    document.getElementById("disciplina").value = "";

    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

    // Resetando o resultado
    document.getElementById("resultado").textContent =
        "Preencha os dados acima e clique em calcular média";

    // Trocar os botões
    document.getElementById("novocalculo").style.display = "none";
    document.getElementById("calcular").style.display = "block";
}