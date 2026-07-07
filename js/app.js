fetch("data/eventos.json")
.then(r => r.json())
.then(datos => {

    const contenedor =
        document.getElementById("eventos");

    document.getElementById("totalEventos")
        .textContent = datos.length;

    mostrar(datos);

    function mostrar(lista){

        contenedor.innerHTML = "";

        lista.forEach(evento => {

            contenedor.innerHTML += `
                <div class="evento">
                    <div class="evento-content">

                        <div class="fecha">
                            ${evento.fecha}
                        </div>

                        <div class="lugar">
                            ${evento.lugar}
                        </div>

                        <div class="motivo">
                            ${evento.motivo}
                        </div>

                        <div class="comparsas">
                            ${evento.comparsas.map(c =>
                                `<span class="badge">${c}</span>`
                            ).join("")}
                        </div>

                    </div>
                </div>
            `;
        });
    }

    document
    .getElementById("search")
    .addEventListener("input", e => {

        const texto =
            e.target.value.toLowerCase();

        const filtrado = datos.filter(ev =>
            ev.lugar.toLowerCase().includes(texto) ||
            ev.motivo.toLowerCase().includes(texto) ||
            ev.comparsas.join(" ")
                .toLowerCase()
                .includes(texto)
        );

        mostrar(filtrado);
    });

});