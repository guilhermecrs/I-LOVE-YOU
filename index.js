function fuja() {
    var botaoNao = document.getElementById("nao");
    var painel = document.querySelector(".painel");
    var larguraPainel = painel.offsetWidth;
    var alturaPainel = painel.offsetHeight;
    
    var maxX = larguraPainel - botaoNao.offsetWidth;
    var maxY = alturaPainel - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}
