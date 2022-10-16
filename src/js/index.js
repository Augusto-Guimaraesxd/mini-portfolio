const abas = document.querySelectorAll(".aba");

abas.forEach(aba => (
    aba.addEventListener("click", function(){

        if (aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)

        mostrarinformacoesdaaba(aba)


    })
))
function selecionarAba(aba){
    const abaselecionada = document.querySelector(".aba.selecionado");
        abaselecionada.classList.remove("selecionado");
        aba.classList.add("selecionado")
}
function mostrarinformacoesdaaba(aba){
    const informacaoselecionada = document. 
        querySelector(".informacao.selecionado");
        informacaoselecionada.classList.remove("selecionado");

        const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`

        const informacaoasermostrada = document.getElementById(idDoElementoDeInformacaoDaAba)
        informacaoasermostrada.classList.add("selecionado");

}