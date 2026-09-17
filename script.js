const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Quais são algumas consequências da desigualdade de gênero?",
        alternativas: [
            {
                texto: "A desigualdade pode aumentar a sobrecarga das mulheres principalmente quando elas precisam conciliar trabalho, estudos e responsabilidades domésticas.",
                afirmacao:[ "Valoriza a divisão equilibrada das responsabilidades e acredita que homens e mulheres devem participar igualmente das tarefas familiares".,
                         " Defende a participação igualitária de homens e mulheres nas tarefas do dia a dia."]
            },
            {
                texto:  "A desigualdade pode dificultar o crescimento profissional das mulheres e reduzir suas oportunidades de alcançar cargos de liderança",
                afirmacao:[ "Dedicada à carreira e interessada em igualdade no ambiente profissional.",
                            "Profissional dedicada ao crescimento na carreira e à promoção da equidade no ambiente de trabalho."]
            }    
           
        ]
    },
    {
       
            enunciado: "Quais atitudes podem contribuir para diminuir a desigualdade de gênero?
?",
            alternativas: [
                {
                    texto: "Dividir igualmente as tarefas domésticas e familiares, promovendo uma participação mais equilibrada entre homens e mulheres.",
                    afirmacao:[ "Valoriza a divisão equilibrada das responsabilidades familiares e acredita na participação igualitária nas tarefas do dia a dia.",
                    "Acredita na divisão justa das responsabilidades familiares e na participação de todos nas tarefas cotidianas."]
                },
                {
                    texto:  "Garantir oportunidades iguais no ambiente profissional, independentemente do gênero. ",
                    afirmacao: ["Valoriza a igualdade de oportunidades e acredita na importância de um ambiente profissional mais justo e inclusivo.",
                        "Defende oportunidades iguais e valoriza a construção de um ambiente de trabalho mais justo, respeitoso e inclusivo."]
                }    
               
            ]
        },
        {
            enunciado: " Como a desiguladae pode ser percebida?",

            alternativas: [
                {
                    texto: "A desigualdade pode ser percebida no mercado de trabalho, principalmente quando mulheres recebem salários menores ou têm menos oportunidades de ocupar cargos de liderança",
                    afirmacao: ["Dedicada à carreira e interessada em igualdade no ambiente profissional.",
                    "Comprometida com o desenvolvimento profissional e com a promoção da igualdade no ambiente de trabalho." ]

"
                },
                {
                    texto:    "A desigualdade também pode aparecer dentro de casa, quando as mulheres assumem a maior parte das tarefas domésticas e dos cuidados com os filhos",
               
                    afirmacao: ["Acredita que as responsabilidades domésticas devem ser divididas igualmente entre todos os membros da família.",
                    "Defende uma divisão equilibrada das responsabilidades domésticas entre todos os integrantes da família."]
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();