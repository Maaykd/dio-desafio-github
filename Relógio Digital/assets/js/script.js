document.addEventListener("DOMContentLoaded", function () {
    const horasElement = document.getElementById("horas");
    const minutosElement = document.getElementById("minutos");
    const segundosElement = document.getElementById("segundos");
    const body = document.body;

    function atualizarRelogio() {
        const dataAtual = new Date();
        const horas = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();
        const segundos = dataAtual.getSeconds();

        horasElement.textContent = horas < 10 ? `0${horas}` : horas;
        minutosElement.textContent = minutos < 10 ? `0${minutos}` : minutos;
        segundosElement.textContent = segundos < 10 ? `0${segundos}` : segundos;

        
        const minutoAtual = dataAtual.getMinutes(40);

        
        const coresMinuto = [
            "lightblue", "lightgreen", "lightpink", "lightyellow", "lightcoral",
            "lightcyan", "lightgray", "lightsalmon", "lightseagreen", "lightskyblue",
            
        ];

        
        const corFundo = coresMinuto[minutoAtual % coresMinuto.length];

        body.style.backgroundColor = corFundo;
    }

    atualizarRelogio(); 
    setInterval(atualizarRelogio, 1000); 
});
