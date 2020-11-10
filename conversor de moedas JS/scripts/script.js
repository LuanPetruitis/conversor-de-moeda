var tela = document.querySelector("#convertida");
var moedaParaConverter;
var moedaConvertida;
var moedas = document.getElementById('moedas');

function mudarMoedaA() {
    moedaParaConverter = moedaA.value;
    moedas.innerText = `${moedaParaConverter} Para `;
}

function mudarMoedaB() {
    moedaConvertida = moedaB.value;
    moedas.innerText += ` ${moedaConvertida}`;

}

function converter() {

    let de_para = moedaParaConverter + "_" + moedaConvertida

    let url = "https://free.currencyconverterapi.com/api/v5/convert?q=" + de_para + "&compact=ultra&apiKey=e32ace6f7573aae09975";

    var valor = document.getElementById('valor').value;
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {

            let cotacao = json[de_para];

            var convertido = (cotacao * parseFloat(valor)).toFixed(2);
            tela.innerHTML = convertido;
        })
}