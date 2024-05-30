//Haz tú validación en javascript acá

document.addEventListener('DOMContentLoaded', function() {
    // Animación al cargar la página
    const title = document.querySelector('.title__bio');
    title.style.opacity = 0;
    title.style.transition = 'opacity 1s ease-in-out';

    window.addEventListener('load', function() {
        title.style.opacity = 1;
    });

    // Validación del formulario
    const form = document.forms['form'];
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos
        const nombre = form['nombre'].value.trim();
        const email = form['email'].value.trim();
        const mensaje = form['mensaje'].value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }

        // Envío del formulario
        alert('¡Mensaje enviado correctamente!');
        form.reset(); // Reinicia el formulario después de enviarlo
    });

    // Otros scripts de JavaScript aquí
});


/* variante 2 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header class="Header">
            <div class="Profile">
                <img src="profile.jpg" alt="Profile Image" class="Profile-image">
                <h1 class="Profile-title">Ricardo Romero</h1>
                <p class="Profile-description">Desarrollador Web</p>
                  <nav class="MainMenu">
                    <ul class="MainMenu-list">
                        <li class="MainMenu-item"><a href="#inicio"><i class="fas fa-home"></i> Inicio</a></li>
                        <li class="MainMenu-item"><a href="#sobre-mi"><i class="fas fa-user"></i> Sobre Mí</a></li>
                        <li class="MainMenu-item"><a href="#proyectos"><i class="fas fa-project-diagram"></i> Proyectos</a></li>
                        <li class="MainMenu-item"><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <section class="title">
            <div class="title__div">
                <img class="title__profile" src="assets/profile.png" alt="Foto de perfil">
                <div class="title__container">
                    <h2 class="title__bio">Mucho gusto, soy Ricardo Romero, mis amigos me dicen Rich. Me dedico a aprender programación.</h2>
                    <h3 class="title__subsection">Actualmente estoy participando en el proyecto Oracle ONE en Alura Latam.</h3>
                    <ul class="title__network">
                        <li class="title__network__item"><a href="#"><i class="fab fa-github"></i> Github</a></li>
                        <li class="title__network__item"><a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li class="title__network__item"><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                        <li class="title__network__item"><a href="#"><i class="fas fa-file-alt"></i> Currículo</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Sección "Sobre mí" -->
        <section class="about" id="sobre-mi">
            <div class="about__container">
                <h3 class="about__title">Sobre mí</h3>
                <p class="about__paragraph">¡Hola! Soy Ricardo Romero, un estudiante de programación apasionado por todo el mundo digital y las mujeres (jajajaja). Estoy comprometido a entregar resultados excepcionales en cada proyecto en el que trabajo.</p>
                <blockquote class="about__quote">
                    <p>"[Cita Inspiradora]"</p>
                    <footer>- [Autor de la Cita]</footer>
                </blockquote>
                <div class="about__stats">
                    <div class="about__stat">
                        <h4 class="about__stat-title">Proyectos Completados</h4>
                        <p class="about__stat-number">[Número de Proyectos]</p>
                    </div>
                    <div class="about__stat">
                        <h4 class="about__stat-title">Clientes Satisfechos</h4>
                        <p class="about__stat-number">[Número de Clientes]</p>
                    </div>
                    <div class="about__stat">
                        <h4 class="about__stat-title">Líneas de Código Escritas</h4>
                        <p class="about__stat-number">[Número de Líneas]</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sección de Skills -->
        <section class="skills" id="skills">
            <h3 class="section-title">Skills</h3>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="assets/htlm.png" alt="HTML 5">
                    <p>HTML 5</p>
                </div>
                <div class="grid-item">
                    <img src="assets/js_icon.png" alt="JavaScript">
                    <p>JavaScript</p>
                </div>
                <!-- Agrega más elementos de habilidades aquí -->
            </div>
        </section>

        <!-- Sección de Hobbies -->
        <section class="hobbies" id="hobbies">
            <h3 class="section-title">Hobbies</h3>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="assets/skate_icon.png" alt="Patinaje">
                    <p>Videojuegos</p>
                </div>
                <div class="grid-item">
                    <img src="assets/guitar_icon.png" alt="Tocar bajo">
                    <p>Ejercicio</p>
                </div>
                <!-- Agrega más elementos de hobbies aquí -->
            </div>
        </section>

        <!-- Sección de Formación académica -->
        <section class="academic" id="formacion">
            <h3 class="section-title">Formación académica</h3>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="assets/ufpr_logo.png" alt="UFPR">
                    <p>Análisis de datos</p>
                    <p>2018 - UFPR</p>
                </div>
                <div class="grid-item">
                    <img src="assets/alura_logo.png" alt="Alura">
                    <p>Curso de desarrollo web</p>
                    <p>2024 - Alura</p>
                </div>
                <!-- Agrega más elementos de formación académica aquí -->
            </div>
        </section>
    </div>
</body>
</html>  */


/* Estilos generales
:root {
    --background-color: #121212;
    --text-color: #E0E0E0;
    --link-color: #FF5733;
    --header-bg-color: #1F1F1F;
    --header-text-color: #FFFFFF;
    --profile-bg-color: #2C2C2C;
    --menu-hover-color: #FF5733;
    }

body {
    
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
    line-height: 1.5;
    transition: background-color 0.3s ease-in-out;
}

/* Encabezado 
.Header {
    background-color: var(--header-bg-color);
    color: var(--header-text-color);
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.Header-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}

.MainMenu {
    margin-bottom: 20px;
}

.MainMenu-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

.MainMenu-item {
    margin: 0 15px;
}

.Profile-link,
.MainMenu-link {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
    color: var(--link-color);
}

.MainMenu-link {
    color: var(--header-text-color);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.MainMenu-link:hover {
    color: var(--menu-hover-color);
}

/* Perfil 
.Profile {
    text-align: center;
    background-color: var(--profile-bg-color);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    display: inline-block;
}

.Profile-image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: 3px solid var(--header-text-color);
    margin-bottom: 10px;
}

.Profile-title {
    font-size: 24px;
    margin: 10px 0;
}

.Profile-description {
    font-size: 16px;
    margin-bottom: 20px;
}

.Profile-link {
    display: block;
    margin-bottom: 10px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}
.Profile-link:hover,
.MainMenu-link:hover {
    color: var(--hover-color);
    text-decoration: underline;
}

.title {
    text-align: center;
    padding: 40px 20px;
}

/* Trabajo 
.Work {
    text-align: center;
    padding: 20px 0;
}

.Work-title {
    color: #333;
}

.Work-item {
    margin-bottom: 20px;
}

.Work-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.Work-description {
    color: #666;
    margin-top: 10px;
}

/* Footer
.Footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
}

.Footer-title {
    color: #fff;
    margin-bottom: 10px;
}

.Footer-description {
    color: #ccc;
    margin-bottom: 20px;
}

.Footer-button {
    background-color: #fff;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}


/* Sección Menú 
section.menu {
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    height: 100%;
    background-color: #FFFFFF;
    overflow-y: auto;
    padding-top: 20px;
    transition: left 0.3s ease; /* Transición suave para abrir y cerrar el menú
 }



.menu__list__item a:hover {
    color: #FF5733;  Cambia el color al pasar el ratón sobre los enlaces 
}

/* Menú abierto 
.menu-open {
    left: 0;
}

/* Botón de menú 
.menu-toggle {
    display: block;
    position: fixed;
    top: 20px;
    left: 20px;
    cursor: pointer;
}

/* Efecto hover en secciones 
section:hover {
    transform: scale(1.05);  Escala las secciones al pasar el ratón sobre ella
}

/* Efecto hover en imágenes 
img:hover {
    transform: rotate(5deg); /* Rota las imágenes al pasar el ratón sobre ella
}


/* Efecto hover en enlace
a {
    transition: color 0.3s ease-in-out; /* Transición suave para cambios de color de enlaces
    text-decoration: none;
    color: var(--cor-de-link);
}

a:hover {
    color: var(--link-color);
     color: #FF5733; /* Cambia el color al pasar el ratón sobre los enlaces
    /* Estilos para la barra de navegación */
        
}

/* Media Queries */
@media (min-width: 768px) {
    /* Estilos para tablet aquí */
}

@media (max-width: 425px) {
    /* Ocultar el botón de menú en dispositivos móviles */
    .menu-toggle {
        display: none;
    }
}

/* Secciones con cuadrícula */
section.skills, section.hobbies, section.academic {
    padding: 40px 20px;
    text-align: center;
}

.section-title {
    font-size: 24px;
    margin-bottom: 20px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.grid-item {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.grid-item:hover {
    transform: translateY(-5px);
}

.grid-item img {
    max-width: 100px;
    height: auto;
    margin-bottom: 10px;
}

.grid-item p {
    margin: 0;
    color: #666;
}


/* Encabezado */
.Header {
    background: linear-gradient(to bottom, #8ED5FC, #004CB8);
    color: #fff;
    text-align: center;
    padding: 20px 0;
    background-color: #333;
}

/* Footer */
.Footer {
    background: linear-gradient(to bottom, #004CB8, #8ED5FC);
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

.Footer-button:hover {
    background-color: #555;
}

/* Estilos para la sección "Sobre mí" */
.about {
    text-align: center;
    padding: 50px 0;
    background-color: #f9f9f9;
}

.about__container {
    max-width: 800px;
    margin: 0 auto;
    flex-direction: column;
}

.about__title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
}

.about__paragraph {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 30px;
}

.about__quote {
    font-style: italic;
    margin-bottom: 30px;
}

.about__quote p {
    color: #777;
}

.about__quote footer {
    color: #999;
}

.about__stats {
    display: flex;
    justify-content: space-around;
}

.about__stat {
    flex: 1;
    margin: 0 10px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about__stat-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
}

.about__stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #FF5733;
}
.about__container img {
    margin-bottom: 20px;
}

ol, ul,li {
    list-style: none;
}


nav ul {
    list-style: none;
    padding: 0;
    
}

nav ul li {
    display: inline;
    margin: 0 1em;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

section {
    padding: 2em;
}

.project {
    border: 1px solid #ccc;
    margin: 1em 0;
    padding: 1em;
}

.Header {
    background: linear-gradient(to right, #000000, #333333);
    color: #ffffff;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Añadimos una sombra suave */
}

/* Ajustamos los estilos de los enlaces */
.Header a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease, text-shadow 0.3s ease; /* Añadimos una transición suave */
}

/* Efecto al pasar el ratón sobre los enlaces */
.Header a:hover {
    color: #ff5733; /* Cambiamos el color al pasar el ratón */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Añadimos una sombra suave */
}

/* Animaciones */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

section {
    animation: fadeIn 1s ease-in-out;
}

.grid-item {
    animation: slideIn 0.5s ease-in-out;
}

/* Transiciones */
a, button {
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}       