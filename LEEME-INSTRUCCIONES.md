# Web de Casa Rural Eufemia · Instrucciones de publicación

Web estática (HTML + CSS, sin base de datos ni programas). Se publica en **Netlify** (gratis) a partir de un repositorio de **GitHub**, y se conecta al dominio **casaeufemia.com**.

Tiempo estimado: una tarde.

---

## 1. Antes de empezar

- [ ] Haz una **copia de seguridad de la web actual** (los archivos que tengas ahora en el servidor).
- [ ] Averigua **dónde está registrado el dominio** casaeufemia.com y ten a mano el acceso a su panel de DNS.
- [ ] Si la web actual tiene Google Search Console, ten a mano el acceso.

## 2. Subir la web a GitHub

1. Crea una cuenta en github.com si no la tienes (puede ser a nombre de Silvia).
2. Crea un repositorio nuevo, por ejemplo `casaeufemia-web` (puede ser privado).
3. Sube **todo el contenido de esta carpeta** a la raíz del repositorio. `index.html` tiene que quedar en la raíz, no dentro de otra carpeta.

## 3. Publicar en Netlify

1. Crea una cuenta en netlify.com (se puede entrar con la cuenta de GitHub).
2. *Add new site → Import an existing project → GitHub* y elige el repositorio.
3. **Build command:** vacío. **Publish directory:** `.` (ya viene en `netlify.toml`).
4. Pulsa *Deploy*. En un minuto tendrás la web en una dirección tipo `algo.netlify.app`. Revísala.

## 4. Formulario de reservas

El formulario usa **Netlify Forms** (gratis hasta 100 envíos al mes).

1. En Netlify: *Site configuration → Forms → Enable form detection* y vuelve a desplegar (*Deploys → Trigger deploy*).
2. Aparecerá el formulario **reservas**.
3. *Forms → Form notifications → Add notification → Email notification* y pon **ruraleufemia@gmail.com**.
4. Haz un envío de prueba desde la web y comprueba que llega el email (mira también la carpeta de spam).

## 5. Conectar el dominio casaeufemia.com

1. En Netlify: *Domain management → Add a domain* → `www.casaeufemia.com`. Añade también `casaeufemia.com` y deja **www.casaeufemia.com como dominio principal** (la web ya usa esa dirección en el sitemap y en las etiquetas canónicas).
2. Netlify te indicará los registros DNS exactos. Lo habitual es:
   - Registro **A** de `casaeufemia.com` → la IP que indique Netlify.
   - Registro **CNAME** de `www` → `tu-sitio.netlify.app`.
   (Otra opción: cambiar los servidores DNS del dominio a los de Netlify.)
3. Cambia esos registros en el panel del dominio. Ojo: si el dominio tiene **correo electrónico** asociado (registros MX), no los toques.
4. Espera a que propague (de minutos a unas horas). Netlify activa el **HTTPS** solo.

## 6. Mantener el posicionamiento en Google

La web nueva **conserva las mismas direcciones** que la antigua:

| Página | Dirección |
| --- | --- |
| Inicio | `/` |
| Galería | `/gallery/` |
| Precios | `/pricing/` |
| Blog (Qué ver cerca) | `/blog/` |
| Tomelloso | `/blog/cooperativa-virgen-de-las-vinas/` |
| Campo de Criptana | `/blog/campo-de-criptana-molinos-de-viento/` |
| Medrano y Peñarroya | `/blog/casa-de-medrano-argamasilla-de-alba/` |
| Lagunas de Ruidera | `/blog/lagunas-de-ruidera/` |
| Gastronomía (nueva) | `/blog/gastronomia-manchega/` |

Versión en inglés: todas las páginas tienen su equivalente en `/en/` (por ejemplo `/en/`, `/en/gallery/`, `/en/blog/tomelloso-wine-caves/`). Ya llevan las etiquetas `hreflang` para que Google muestre a cada visitante su idioma, y están incluidas en el sitemap.

Páginas nuevas: `/aviso-legal/`, `/gracias/` (tras enviar el formulario, no se indexa) y `404.html`.

Si la web antigua tenía alguna otra dirección que no está en esta lista, añade una redirección en un archivo `_redirects` en la raíz, así:

```
/direccion-antigua    /direccion-nueva/    301
```

Después de publicar:

1. En **Google Search Console**, añade (o comprueba) la propiedad del dominio `casaeufemia.com`.
2. Envía el sitemap: `https://www.casaeufemia.com/sitemap.xml`.
3. Usa *Inspección de URLs* con la portada y pide la indexación.
4. Revisa *Páginas* durante las semanas siguientes por si aparece algún error 404.

## 7. Cambios futuros

Silvia hará los cambios con Claude. La forma más cómoda es que Claude tenga acceso al repositorio de GitHub:

- Silvia conecta su cuenta de GitHub a Claude y le da acceso al repositorio `casaeufemia-web`.
- Claude edita los archivos y los sube al repositorio; Netlify publica los cambios solo en un minuto.

Si no se conecta GitHub, Claude le preparará los archivos cambiados y habrá que subirlos a mano al repositorio.

## Estructura

```
index.html                  Portada
gallery/                    Galería de fotos
pricing/                    Precios y reservas
blog/                       Qué ver cerca + 5 guías
en/                         Versión en inglés de toda la web
aviso-legal/  gracias/      Legal y página de agradecimiento del formulario
404.html                    Página de error
css/estilos.css             Estilos de toda la web
img/                        Fotos en WebP (tamaño grande y versión -800 para móvil)
favicon.svg  robots.txt  sitemap.xml  netlify.toml
```

---

## Novedades de esta versión (18/11/2026)

- **Botón flotante de WhatsApp** con texto ("Escríbeme" / "Chat with me") en todas las páginas, siempre visible abajo a la derecha, y con un mensaje ya escrito para Silvia.
- **Vista móvil mejorada**: cabecera más compacta, secciones y fotos menos altas (menos scroll), botones grandes en la portada y espacio al final de la página para que el WhatsApp no tape nada.
- **Franja de "Reserva directa"** justo debajo de las cifras de la portada (ES y EN), con botón a WhatsApp.
- **Textos más cercanos** en la portada: Silvia habla en primera persona ("Escríbeme por WhatsApp", "Aquí pasé los veranos de mi infancia…").
- Todo lo demás (direcciones, SEO, Airbnb, formulario, inglés) se mantiene igual: se publica igual que antes, sin pasos nuevos.

---

## SEO local (18/11/2026)

**Qué se ha hecho en la web**
- Título, descripción y titular de la portada (ES y EN) ahora mencionan **Campo de Criptana y Tomelloso**, que es por lo que la gente buscará.
- **4 páginas nuevas**, pensadas para esas búsquedas (todas con su versión en inglés y sus preguntas frecuentes):
  - `/casa-rural-cerca-de-campo-de-criptana/` y `/en/rural-house-near-campo-de-criptana/`
  - `/casa-rural-cerca-de-tomelloso/` y `/en/rural-house-near-tomelloso/`
- Las guías del blog (`/blog/...`) pasan a titularse "Qué ver en…", para no competir con las páginas nuevas. **Sus direcciones no cambian.**
- Bloque "Cerca de Campo de Criptana y de Tomelloso" en la portada y enlaces en el pie de todas las páginas.
- El `sitemap.xml` incluye las páginas nuevas.

**Después de publicar (en este orden)**
1. En **Google Search Console**: *Inspección de URLs* de cada una de las 4 páginas nuevas y de la portada → *Solicitar indexación*. Vuelve a enviar el sitemap.
2. En **Bing Webmaster Tools**: importa el sitio desde Search Console (tarda 2 minutos).

**Fuera de la web (lo que más ayuda al posicionamiento local)**
1. **Ficha de Google Business Profile**: categoría principal "Casa rural"; en la descripción escribe que está "cerca de Campo de Criptana y Tomelloso"; la web debe ser `https://www.casaeufemia.com/`; sube fotos nuevas con frecuencia y haz alguna publicación; responde a todas las reseñas.
2. **Datos iguales en todas partes** (nombre, dirección, teléfono, nº de dormitorios y de plazas): Airbnb, Booking, Escapada Rural, Tus Casas Rurales, Casasrurales.net... Hay portales con datos distintos (por ejemplo, un nº de dormitorios que no coincide con la web).
3. Darte de alta o actualizar la ficha en el **Registro de Turismo de Castilla-La Mancha** y en la web del Ayuntamiento de Arenales; pedir que enlacen a casaeufemia.com las webs de turismo de **Campo de Criptana** y de **Tomelloso**.
4. En Airbnb y Booking, mencionar en la descripción "a 10 minutos de Campo de Criptana y 15-20 de Tomelloso" y enlazar la web.
5. Seguir publicando en Instagram y enlazando la web desde ahí.
