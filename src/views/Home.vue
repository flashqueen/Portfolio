<template>
    <div class="home">
        <main>
            <section class="hero container">
                <img class="hero__img" src="../../public/MeYae.jpg" alt="Esse sou eu!" />
                <h2 class="hero__subtitle">Oi oi pessoal, Danr-- Danilo aqui (•◡•) /</h2>
                <h1 class="hero__title">FRONT-END <br> STREAMER <br> GAME DEVELOPER</h1>
                <p class="hero__description">Um desenvolvedor frontend em constante aprendizado, trabalhando
                    com frameworks como <strong>Vue+Vite, React, Django</strong> e linguagens como
                    <strong>javascript e python</strong> entre outros.
                    <br>Também trabalho no desenvolvimento de jogos e faço lives na <strong>twitch</strong>!
                </p>
                <a class="hero__btn btn" href="#">Entrar em contato</a>
            </section>
            <section class="about container section">
                <div class="about__content">
                    <h2 class="about__title">Sobre</h2>
                    <p class="about__description"> Olá! me chamo Danilo e atualmente sou um <strong>desenvolvedor de
                            software / desenvolvedor
                            frontend</strong>
                        na empresa Barco Digital em Palmas-TO. Meu trabalho envolve a criação de sites e programas, assim
                        como
                        a manutenção e alterações solicitadas por clientes.</p>
                    <p class="about__description"> No meu tempo livre, estudo sobre a programação de jogos e desenvolvo
                        alguns em
                        <strong>javascript/html</strong>. Jogos
                        digitais são parte da minha vida desde muito novo, e considero criar eles um desafio muito
                        satisfatório!
                    </p>
                    <p class="about__description">Também faço lives em meu canal da twitch <strong>tw.tv/danrowllet</strong>
                        onde interajo com as
                        pessoas que me assistem
                        em diferentes jogos e procuro jogar com composições inusitadas e divertidas.</p>
                    <hr class="about__hr">
                    <h3 class="about__subtitle">Tecnologias</h3>
                    <div class="about__ul-container">
                        <ul class="about__ul">
                            <li class="about__list">Javascript</li>
                            <li class="about__list">CSS / HTML</li>
                            <li class="about__list">TailwindCSS / Bootstrap</li>

                        </ul>
                        <ul class="about__ul">
                            <li class="about__list">Vue3 (+vite)</li>
                            <li class="about__list">Laravel</li>
                            <li class="about__list">Python</li>
                        </ul>
                    </div>
                </div>
                <div class="about__img-wrapper">
                    <img class="about__img" src="../../public/gato_serio.png" alt="Foto de perfil">
                </div>

            </section>
            <section class="featured container section">
                <h3 class="featured__subtitle">Projeto em Destaque</h3>
                <div class="featured__wrapper">
                    <h2 class="featured__title">Prefeitura de Serdin</h2>
                    <a class="featured__link" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                <p class="featured__description">
                    Layout da fictícia prefeitura de Serdin, realizado em <strong>HTML e BootstrapCSS</strong>, inspirado no
                    visual de outras prefeituras
                    do Brasil contando com uma página principal e uma página de notícia.
                </p>
                <div class="featured__info-container">
                    <div>
                        <h3 class="featured__label">Tech stack</h3>
                        <ul class="featured__tech-stack">
                            <li class="featured__info">TailwindCSS</li>
                            <li class="featured__info">ReactJS</li>
                            <li class="featured__info">React-hook-form</li>
                            <li class="featured__info">NextJS</li>
                            <li class="featured__info">Axios</li>
                            <li class="featured__info">Supabase</li>
                            <li class="featured__info">Stripe</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="featured__label">Project Type</h3>
                        <p class="featured__info">Fullstack-Frontend</p>
                    </div>
                    <div>
                        <h3 class="featured__label">Timeline</h3>
                        <p class="featured__info">29 a 31 de Março</p>
                    </div>
                </div>
            </section>
            <!--<section></section>
            <section></section> -->
        </main>
        <!-- <footer></footer> -->

    </div>
</template>

<script>
export default {
    name: 'Home'
}

</script>

<style>
.hero {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
}

.hero__img {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
}

.hero__subtitle {
    color: var(--clr-slate800);
    font-size: var(--size-base);
    line-height: 0.9;
    font-weight: bold;
}

.hero__title {
    color: var(--clr-slate400);
    text-transform: uppercase;
    font-size: var(--size-4xl);
    letter-spacing: -0.05em;
    line-height: 0.9;
    font-weight: bold;
}

.hero__description {
    max-width: 60ch;
    font-size: var(--size-sm);
    color: var(--clr-slate600);
}

.hero__btn {
    text-transform: capitalize;
    font-size: var(--size-sm);
}

.about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about__title {
    font-size: var(--size-2xl);
    color: var(--clr-light);
}

.about__description {
    max-width: 60ch;
    font-size: var(--size-sm);
    color: var(--clr-slate600);
}

.about__hr {
    border-color: var(--clr-slate800);
}

.about__subtitle {
    font-size: var(--size-sm);
    color: var(--clr-slate400);
}

.about__ul-container {
    display: flex;
}

.about__ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
    list-style-type: '\1F338';
    padding-left: 1em;
    flex: 1;
}

.about__list {
    font-size: var(--size-sm);
    color: var(--clr-slate600);
}

.about__list::before {
    content: '';
    margin-left: 0.5em;
}

.featured__subtitle {
    font-size: var(--size-sm);
    color: var(--clr-violet);
    text-transform: capitalize;
    font-weight: 400;
}

.featured__wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.featured__title {
    font-size: var(--size-2xl);
    color: var(--clr-light);
    text-transform: uppercase;
}

.featured__link {
    width: var(--size-2xl);
    height: var(--size-2xl);
}

.featured__description {
    max-width: 60ch;
    color: var(--clr-slate600);
    font-size: var(--size-sm);
    margin: 1rem 0;
}

.featured__label {
    font-size: var(--size-base);
    text-transform: capitalize;
    margin-bottom: 0.25em;
}

.featured__tech-stack {
    padding: 0;
    list-style: none;
}

.featured__info {
    font-size: var(--size-sm);
    color: var(--clr-slate600);
    text-transform: capitalize;
}

.featured__info-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.featured__info-container div {
    flex: 1;
    min-width: 250px;
}

/* XS */
@media (min-width: 475px) {

    /* -----------------Herói--------------- */
    .hero {
        gap: 1.5rem;
    }

    .hero__img {
        width: 6.5rem;
        height: 6.5rem;
    }

    .hero__subtitle {
        font-size: var(--size-lg);
    }

    .hero__title {
        font-size: var(--size-5xl);
    }

    .hero__description {
        font-size: var(--size-base);
    }

    .hero__btn {
        font-size: var(--size-base);
    }

    /* --------------Sobre----------------- */
    .about {
        gap: 1.5rem;
    }

    .about__content {
        gap: 1.5rem;
    }

    .about__title {
        font-size: var(--size-3xl);
    }

    .about__description {
        font-size: var(--size-base);
    }

    .about__subtitle {
        font-size: var(--size-base);
    }

    .about__list {
        font-size: var(--size-base);
    }

    /* -------------Destaque--------------- */
    .featured__title {
        font-size: var(--size-3xl);
    }

    .featured__subtitle {
        font-size: var(--size-base);
    }

    .featured__link {
        width: var(--size-3xl);
        height: var(--size-3xl);
    }

    .featured__description {
        font-size: var(--size-base);
        margin: 1.5rem 0;
    }

    .featured__label {
        font-size: var(--size-lg);
    }

    .featured__info {
        font-size: var(--size-base);
    }
}

/* sm */
@media (min-width: 640px) {

    /* --------------Sobre-------------- */
    .about__img-wrapper {
        margin: 0 auto;
    }

    .about__img {
        width: 28.6875rem;
    }


}

/* LG */
@media(min-width: 1024px) {

    /* ------------Sobre----------------- */

    .about {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .about__title {
        font-size: var(--size-4xl);
    }

    .about__description {
        font-size: var(--size-lg);
    }

    .about__subtitle {
        font-size: var(--size-lg);
    }

    .about__list {
        font-size: var(--size-lg);
    }

    /* --------------Herói------------------ */
    .hero__img {
        width: 8rem;
        height: 8rem;
    }

    .hero__subtitle {
        font-size: var(--size-2xl);
    }

    .hero__title {
        font-size: var(--size-7xl);
    }

    .hero__description {
        font-size: var(--size-lg);
    }

    .hero__btn {
        font-size: var(--size-lg);
    }

    /* -------------Destaque--------------- */
    .featured__title {
        font-size: var(--size-4xl);
    }

    .featured__subtitle {
        font-size: var(--size-lg);
    }

    .featured__link {
        width: var(--size-4xl);
        height: var(--size-4xl);
    }

    .featured__description {
        font-size: var(--size-lg);
    }

    .featured__label {
        font-size: var(--size-xl);
    }

    .featured__info {
        font-size: var(--size-lg);
    }
}

/* XL */
@media(min-width: 1280px) {

    /* --------------Herói--------------- */
    .hero {
        gap: 2rem;
    }

    .hero__img {
        width: 10rem;
        height: 10rem;
    }

    .hero__subtitle {
        font-size: var(--size-4xl);
    }

    .hero__title {
        font-size: var(--size-9xl);
    }

    .hero__description {
        font-size: var(--size-xl);
    }

    .hero__btn {
        font-size: var(--size-xl);
    }

    /* -------------------Sobre--------------- */
    .about__content {
        gap: 2rem;
    }

    .about__title {
        font-size: var(--size-5xl);
    }

    .about__description {
        font-size: var(--size-xl);
    }

    .about__subtitle {
        font-size: var(--size-xl);
    }

    .about__list {
        font-size: var(--size-xl);
    }

    .about__img {
        width: 30.75rem;
    }

    /* -------------Destaque--------------- */
    .featured__title {
        font-size: var(--size-5xl);
    }

    .featured__subtitle {
        font-size: var(--size-xl);
    }

    .featured__link {
        width: var(--size-5xl);
        height: var(--size-5xl);
    }

    .featured__description {
        font-size: var(--size-xl);
        margin: 2rem 0;
    }

    .featured__label {
        font-size: var(--size-2xl);
    }

    .featured__info {
        font-size: var(--size-xl);
    }
}
</style>