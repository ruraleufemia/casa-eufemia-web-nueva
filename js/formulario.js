/* Envía el formulario de consulta por WhatsApp, igual que la web actual.
   No necesita servidor ni servicio externo: funciona en Vercel tal cual. */
(function () {
  var TELEFONO = '34638014458';

  function texto(form, campo) {
    var el = form.querySelector('[name="' + campo + '"]');
    return el && el.value ? el.value.trim() : '';
  }

  function fecha(valor) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor);
    return m ? m[3] + '/' + m[2] + '/' + m[1] : valor;
  }

  document.querySelectorAll('form.formulario').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Trampa antispam: si está rellena, no hacemos nada.
      if (texto(form, 'no-rellenar')) return;

      var en = form.getAttribute('data-idioma') === 'en';
      var l = en
        ? { hola: 'Hello Silvia, I would like to check availability at Casa Rural Eufemia.',
            nombre: 'Name:', tel: 'Phone:', email: 'Email:', personas: 'Guests:',
            llegada: 'Arrival:', salida: 'Departure:', mensaje: 'Message:' }
        : { hola: 'Hola Silvia, quería consultar disponibilidad en Casa Rural Eufemia.',
            nombre: 'Nombre:', tel: 'Teléfono:', email: 'Email:', personas: 'Nº de personas:',
            llegada: 'Llegada:', salida: 'Salida:', mensaje: 'Mensaje:' };

      var lineas = [l.hola, ''];
      function añade(etiqueta, valor) {
        if (valor) lineas.push(etiqueta + ' ' + valor);
      }
      añade(l.nombre, texto(form, 'nombre'));
      añade(l.tel, texto(form, 'telefono'));
      añade(l.email, texto(form, 'email'));
      añade(l.personas, texto(form, 'personas'));
      añade(l.llegada, fecha(texto(form, 'llegada')));
      añade(l.salida, fecha(texto(form, 'salida')));
      var m = texto(form, 'mensaje');
      if (m) lineas.push('', l.mensaje + ' ' + m);

      var url = 'https://wa.me/' + TELEFONO + '?text=' + encodeURIComponent(lineas.join('\n'));
      window.open(url, '_blank', 'noopener');

      var gracias = form.getAttribute('data-gracias');
      if (gracias) window.location.href = gracias;
    });
  });
})();
