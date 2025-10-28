
        /**
         * funcionNegrita()
         * Esta función se ejecuta cuando el usuario selecciona la opción Bold (negrita).
         */
        let texto = document.getElementById('texto')
        function funcionNegrita() {
            // Implementación pendiente
            texto.classList.toggle('fw-bold');
        }

        /**
         * funcionCursiva()
         * Esta función se ejecuta cuando el usuario selecciona la opción Italic (cursiva).
         */
        function funcionCursiva() {
            // Implementación pendiente
            texto.classList.toggle('fst-italic');
        }

        /**
         * funcionSubrayado()
         * Esta función se ejecuta cuando el usuario selecciona la opción Underline (subrayado).
         */
        function funcionSubrayado() {
            // Implementación pendiente
            texto.classList.toggle('text-decoration-underline');
        }

        function editarTexto() {
            // Obtiene el valor del input y lo asigna al párrafo
            const nuevoTexto = document.getElementById('editar').value;
            texto.textContent = nuevoTexto;
        }

        function textoTachado() {
            // Cambia el color del texto a rojo
            texto.classList.toggle('text-decoration-line-through');
            // Boton se vuelve rojo
            const botonTachado = document.getElementById('btn-nrojo');
            botonTachado.classList.toggle('btn-danger');
            botonTachado.classList.toggle('btn-primary');
        }

        function aumentarTamaño() {
            texto.classList.toggle('fs-1');
        }


        function handlerBoton(e) {
            // Obtiene el valor del atributo "data-formato" del botón que disparó el evento
            const funcionBoton = e.target.dataset.formato;
            switch (funcionBoton) {
                case 'negrita':
                    funcionNegrita();
                    break;
                case 'cursiva':
                    funcionCursiva();
                    break;
                case 'subrayado':
                    funcionSubrayado();
                    break;
                case 'tachado':
                    textoTachado();
                    break;
                case 'grande':
                    aumentarTamaño();
            }
        }
        document.querySelectorAll('button.btn').forEach(e => e.addEventListener('click', handlerBoton));