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
                afirmacao: "valoriza a divisão equilibrada das responsabilidades e acredita que homens e mulheres devem participar igualmente das tarefas familiares".,
                         " defende a participação igualitária de homens e mulheres nas tarefas do dia a dia."
            },
            {
                texto:  "A desigualdade pode dificultar o crescimento profissional das mulheres e reduzir suas oportunidades de alcançar cargos de liderança",
                afirmacao: "Dedicada à carreira e interessada em igualdade no ambiente profissional.",
                            "Profissional dedicada ao crescimento na carreira e à promoção da equidade no ambiente de trabalho."
            }    
           
        ]
    },
    {
       
            enunciado: "As fontes renováveis de energia são aquelas formas de produção de energia em que suas fontes são capazes de manter-se disponíveis durante um longo prazo, contando com recursos que se regeneram ou que se mantêm ativos permanentemente. Com base nisso, temos a energia geotérmica, que consiste em utilizar o calor manifestado em áreas próximas à superfície. Qual a sua opinião sobre esse modelo de energia renovável?",
            alternativas: [
                {
                    texto: "A energia geotérmica precisa ser mais explorada visto que utiliza o calor interno da terra, pois não depende do clima e é inesgotável.",
                    afirmacao: "Você demonstra um perfil  de pesquisador e inovador que busca por meio da inovação soluções para o meio ambiente e sustentabilidade das gerações posteriores."
                },
                {
                    texto:  "Seria interessante explorar primeiramente fontes renováveis exotérmicas, em segundo plano utilizar a energia geotérmica apesar dos custos elevados de explorações e possibilidades de contaminação de rios. ",
                    afirmacao: "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico."
                }    
               
            ]
        },
        {
            enunciado: " Como a desiguladae pode ser percebida?",

            alternativas: [
                {
                    texto: "A desigualdade pode ser percebida no mercado de trabalho, principalmente quando mulheres recebem salários menores ou têm menos oportunidades de ocupar cargos de liderança.
",
                    afirmacao: "Dedicada à carreira e interessada em igualdade no ambiente profissional. 

"
                },
                {
                    texto:    "A desigualdade também pode aparecer dentro de casa, quando as mulheres assumem a maior parte das tarefas domésticas e dos cuidados com os filhos",
               
                    afirmacao: "Acredita que as responsabilidades domésticas devem ser divididas igualmente entre todos os membros da família.
."
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