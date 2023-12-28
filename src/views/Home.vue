<template>
  <div class="home">
    <main>
      <section class="hero container">
        <div class="person">
          <div class="person__container">
            <img class="hero__img" src="/eu3.jpg" alt="Esse sou eu!" />
            <img class="hero__outer_img" src="/eu2_removebg.png" alt="Esse sou eu!">
          </div>
        </div>
        <h2 class="hero__subtitle">
          {{ $t('BemVindo')}}
        </h2>
        <h1 class="hero__title">
          FULLSTACK <br />
          <!-- STREAMER <br /> -->
          GAME DEVELOPER
        </h1>
        <!-- <p class="hero__description">
          Cientista da computação com formação voltada para <strong>desenvolvimento de softwares e páginas web
            fullstack</strong>.
          Possuo Experiência em <strong>desenvolvimento de formulários</strong> para banco de dados governamentais e sites
          governamentais,
          organizações privadas e não governamentais. Pesquisas na área de <strong>jogos estilo 2D, 3D e
            Top-Down</strong>.
        </p> -->
        <a class="hero__btn btn" href="#contact">{{ $t('Contate')}}</a>
      </section>
      <section id="about" class="about container section">
        <div class="about__content">
          <h2 class="about__title">Sobre</h2>
          <p class="about__description">
            Olá! me chamo Danilo e atualmente sou um
            <strong>desenvolvedor de software / desenvolvedor frontend</strong>
            na empresa Barco Digital em Palmas-TO. À vista disso possuo experiência
            em <strong>desenvolvimento de formulários</strong> para banco de dados
            governamentais e sites governamentais, organizações privadas e não governamentais.
          </p>
          <p class="about__description">
            Neste momento, realizo uma pós-graduação em <strong>projeto e 
            desenvolvimento de jogos digitais</strong>, tendo craido alguns jogos
            em <strong>javascript/html</strong> e <strong>Unity 3D</strong>.
            Jogos digitais são parte da minha vida desde muito novo,
            e considero cria-los um desafio muito satisfatório!
          </p>
          <!-- <p class="about__description">
            Também faço lives em meu canal da twitch
            <strong>tw.tv/danrowllet</strong> onde interajo com as pessoas que
            me assistem em diferentes jogos e procuro jogar com composições
            inusitadas e divertidas.
          </p> -->
          <hr class="about__hr" />
          <h3 class="about__subtitle">Tecnologias</h3>
          <div class="about__ul-container">
            <ul class="about__ul">
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/javascript_icon.png" height="25" />
                Javascript
              </li>
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/filetype_css_icon.png" height="25" />
                CSS / HTML
              </li>
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/tailwind_icon.png" height="25" />
                TailwindCSS
              </li>
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/bootstrap_icon.png" height="25" />
                Bootstrap
              </li>
            </ul>
            <ul class="about__ul">
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/vue_fill_icon.png" height="25" />
                Vue3 (+vite)
              </li>
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/laravel_icon.png" height="25" />
                Laravel
              </li>
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/wordpress_icon.png" height="25" />
                Wordpress
              </li>
              <li class="about__list">
                <img class="about__list_img icons__color" src="/icons/python_icon.png" height="25" />
                Python
              </li>
            </ul>
          </div>
        </div>
        <div class="about__img-wrapper">
          <img class="about__img lazy loading" src="https://via.placeholder.com/350x360" data-src="/euSerio2.png"
            alt="Foto de perfil" />
        </div>
      </section>
      <!-- <section id="featured" class="featured container section">
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
        <div class="featured__info-container">
          <div>
            <p class="featured__description">
              Layout da fictícia prefeitura de Serdin, realizado em
              <strong>HTML e BootstrapCSS</strong>, inspirado no visual de outras
              prefeituras do Brasil contando com uma página principal e uma página
              de notícia.
            </p>
            <div class="featured__lists">
              <div>
                <h3 class="featured__label">Tech stack</h3>
                <ul class="featured__tech-stack">
                  <li class="featured__info">BootstrapCSS</li>
                  <li class="featured__info">Javascript</li>
                  <li class="featured__info">HTML</li>
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
          </div>
        </div>
        <div class="featured__img-container">

          <div class="featured__img-wrapper">
            <img class="lazy loading" src="https://via.placeholder.com/1454x964" data-src="/prefeitura_header1.PNG"
              alt="Prefeitura de Serdin cabeçalho" />
          </div>
          <div class="featured__img-wrapper">
            <img class="lazy loading" src="https://via.placeholder.com/1902x965" data-src="/prefeitura_footer2.PNG"
              alt="Prefeitura de Serdin rodapé" />
          </div>
          <div class="featured__img-wrapper">
            <img class="lazy loading" src="https://via.placeholder.com/1403x967" data-src="/prefeitura_noticia3.PNG"
              alt="Prefeitura de Serdin cabeçalho de notícias" />
          </div>
          <div class="featured__img-wrapper">
            <img class="lazy loading" src="https://via.placeholder.com/1903x790" data-src="/prefeitura_noticia4.PNG"
              alt="Prefeitura de Serdin rodapé de notícias" />
          </div>
          <div class="featured__img-wrapper">
            <img class="lazy loading" src="https://via.placeholder.com/415x726" data-src="/prefeitura_responsivo5.PNG"
              alt="Prefeitura de Serdin cabeçalho celular" />
          </div>
          <div class="featured__img-wrapper">
            <img class="lazy loading" src="https://via.placeholder.com/423x735" data-src="/prefeitura_responsivo6.PNG"
              alt="Prefeitura de Serdin rodapé celular" />
          </div>
        </div>
      </section> -->

      <section class="work container section">
        <hr class="work__hr" />
        <h2 class="work__title">Projetos</h2>
        <p class="work__description">
          Lista resumida de projetos que produzi e/ou colaborei. Os projetos variam de jogos a sites em
          <strong>Wordpress, Javascript e PHP</strong>.
        </p>

        <div class="work__container">
          <!-- Project 1 -->
          <h3 class="work__project-title">Sites Governamentais / Legislativos</h3>
          <div class="work__img-wrapper work__image1 bording__top">
            <img class="lazy loading" src="https://via.placeholder.com/1025x576" data-src="/pref_lajeado.png"
              alt="Site legislativo da prefeitura de lajeado" />
          </div>
          <div class="work__project work__content1">
            <h3 class="work__project-subtitle">Sites Governamentais / Legislativos</h3>
            <p class="work__project-description1">
              Modificações nos sites legislativos e governamentais das cidades do Tocantins.
            </p>
            <p class="work__project-description2">
              Colaborei realizando modificações na sua estrutura via <strong>Wordpress</strong>
              e a transferência de arquivos do modelo antigo
              com os aplicativos <strong>Filezilla</strong> e <strong>S3 Browser</strong>.
            </p>
            <div>
              <a href="https://lajeado.to.leg.br/" target="_blank" class="btn work__project-btn">Site</a>
            </div>

          </div>
          <!-- Project 2 -->
          <h3 class="work__project-title">Conemad-TO</h3>
          <div class="work__img-wrapper work__image2 bording__bottom">
            <img class="lazy loading" src="https://via.placeholder.com/1025x576" data-src="/conemad-to.png"
              alt="Jogo de aventura estilo pokemon" />
          </div>
          <div class="work__project work__content2">
            <h3 class="work__project-subtitle">Conemad-TO</h3>
            <p class="work__project-description1">
              Convenção das Assembleias de Deus Ministério de Madureira no Tocantins
            </p>
            <p class="work__project-description2">
              Colaboração realizando modificações na estrutura do site via <strong>Wordpress</strong>
              e atualização do banco de imagens de eventos e participantes.
            </p>
            <a href="https://conemadto.com.br/" target="_blank" class="btn work__project-btn">Site</a>
          </div>
          <!-- Project 3 -->
          <h3 class="work__project-title">Sistema de Gerenciamento de Documentos</h3>
          <div class="work__img-wrapper work__image3 bording__top">
            <img class="lazy loading" src="https://via.placeholder.com/1025x576" data-src="/BD.png"
              alt="Sistema de Gerenciamento de Documentos" />
          </div>
          <div class="work__project work__content3">
            <h3 class="work__project-subtitle">Sistema de Gerenciamento de Documentos</h3>
            <p class="work__project-description1">
              sistema que cria e gerencia diferentes documentos governamentais.
            </p>
            <p class="work__project-description2">
              Trabalho com desenvolvimento em progresso com o framework
              <strong>Vue3+Vite</strong> utilizando as bibliotecas
              <strong>TailwindCSS</strong> e <strong>Laravel</strong> principalmente em
              linguagem <strong>Javascript</strong>.
            </p>
          </div>
          <!-- Project 4 -->
          <h3 class="work__project-title">PokeVi</h3>
          <div class="work__img-wrapper work__image4 bording__bottom">
            <img class="lazy loading" src="https://via.placeholder.com/1025x576" data-src="/Pokevi.PNG"
              alt="Pokedéx da 1ª e 2ª geração" />
          </div>
          <div class="work__project work__content4">
            <h3 class="work__project-subtitle">PokeVi</h3>
            <p class="work__project-description1">
              Pokedéx da 1ª e 2ª geração de pokemons.
            </p>
            <p class="work__project-description2">
              Desenvolvida para fins didáticos em
              <strong>Vue3+Vite</strong> utilizando as bibliotecas
              <strong>Bootstrap</strong> e <strong>AnimateCSS</strong> em
              linguagem <strong>Javascript</strong>.
            </p>
            <div>
              <a href="https://pokevi.netlify.app/" target="_blank" class="btn work__project-btn">Demo</a>
              <a href="https://github.com/flashqueen/PokeVite" target="_blank" class="btn work__project-btn"
                style="margin-left:15px;">Github</a>

            </div>
          </div>
          <!-- Project 5 -->
          <h3 class="work__project-title">Fusion Attack!</h3>
          <div class="work__img-wrapper work__image5 bording__top">
            <img class="lazy loading" src="https://via.placeholder.com/1023x576" data-src="/fusionattack.png"
              alt="Jogo de luta com dois personagens em cada lado da tela" />
          </div>
          <div class="work__project work__content5">
            <h3 class="work__project-subtitle">Fusion Attack!</h3>
            <p class="work__project-description1">
              Primeiro jogo de luta em dupla que desenvolvi em
              <strong>javascript</strong> para o meu TCC.
            </p>
            <p class="work__project-description2">
              ataque, esquive ou defenda dos golpes adversários.
              ao preencher da barra azul, una-se ao seu aliado para
              temporariamente fundirem e liberarem um
              poderoso golpe!
            </p>
            <div>
              <a href="https://fighting-prototype.netlify.app" target="_blank" class="btn work__project-btn">Demo</a>
              <a href="https://github.com/flashqueen/fighting-game" target="_blank" class="btn work__project-btn"
                style="margin-left:15px;">Github</a>
            </div>

          </div>
          <!-- Project 6 -->
          <h3 class="work__project-title">PokiMO</h3>
          <div class="work__img-wrapper work__image6 bording__bottom">
            <img class="lazy loading" src="https://via.placeholder.com/1023x573" data-src="/pokiMO.png"
              alt="Jogo de aventura estilo pokemon" />
          </div>
          <div class="work__project work__content6">
            <h3 class="work__project-subtitle">PokiMO</h3>
            <p class="work__project-description1">
              Jogo de aventura estilo pokemon que desenvolvi em
              <strong>javascript</strong> e <strong>Tiled</strong> como hobbie.
            </p>
            <p class="work__project-description2">
              'PokiMO' É um jogo curto que se passa em uma ilha focado no estudo
              de combate por turnos e construção de mapas com áreas de
              interação!
            </p>
            <a href="#" class="btn work__project-btn">Em Breve</a>
          </div>
        </div>
      </section>
      <section id="contact" class="contact container section">

        <h2 class="contact__title">Entre em Contato</h2>
        <p class="contact__description">
          Caso esteja começando um projeto, queira fazer algum tipo de proposta
          ou apenas dizer um oi, sinta-se livre para entrar em contato! te
          responderei o quanto antes :)
        </p>
        <p class="contact__description">
          <strong>Whattsapp:</strong> (63) 98409-7497
        </p>
        <a class="contact__btn btn" href="mailto:danilo.a.l.oliveira74@outlook.com" target="_blank">E-mail</a>
        <div class="contact__icons">
          <div class="contact__icons_info">
            <a href="https://github.com/flashqueen" target="_blank"><img class="icons__color" src="/icons/github_icon.png"
                height="30" /></a>
            <p class="contact__description">Github</p>
          </div>
          <div class="contact__icons_info">
            <a href="https://www.linkedin.com/in/danilo-aires-lopes-de-oliveira-45a6b5260" target="_blank"><img
                class="icons__color" src="/icons/linkedin_icon.png" height="30" /></a>
            <p class="contact__description">Linkedin</p>
          </div>
        </div>
      </section>

    </main>
    <!-- <footer></footer> -->
  </div>
</template>

<script>
import lazyLoading from "../utils/lazy-loading";

export default {
  name: "Home",

  mounted() {
    lazyLoading();
  },

};
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
  position: relative;
  margin-inline: auto;
}

.person {
  --transform-speed: 250ms;
  position: relative;
  max-width: 20rem;
  margin-inline: auto;
}

.person__container {
  aspect-ratio: 1 / 1.4;
  display: grid;
  align-items: end;
  border-radius: 0 0 100vw 100vw;
  overflow: hidden;
  transition: transform var(--transform-speed) ease-in-out;
}

.person__container:hover {
  transform:
    scale(1.1) translateY(-1rem);
}

.hero__img {
  position: absolute;
  inset: auto 0 0;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  margin-inline: auto;
  object-fit: cover;
}

.hero__outer_img {
  position: relative;
  z-index: 2;
  top: 0.5rem;
  left: 0.5rem;
  transform: scale(1.1);
  transition: transform var(--transform-speed) ease-in-out;
}

.person__container:hover .hero__outer_img {
  transform:
    scale(1.1) translateY(-1rem);
}

.hero__subtitle {
  color: var(--clr-slate500);
  font-size: var(--size-base);
  line-height: 0.9;
  font-weight: bold;
}

.hero__title {
  color: var(--clr-slate200);
  text-transform: uppercase;
  font-size: var(--size-4xl);
  letter-spacing: -0.05em;
  line-height: 0.9;
  font-weight: bold;
}

.hero__description {
  max-width: 60ch;
  font-size: var(--size-sm);
  color: var(--clr-slate400);
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
  color: var(--clr-slate400);
}

.about__hr {
  border-color: var(--clr-slate800);
}

.about__subtitle {
  font-size: var(--size-sm);
  color: var(--clr-slate200);
}

.about__ul-container {
  display: flex;
}

.about__ul {
  display: flex;
  flex-direction: column;
  gap: 1em;
  list-style-type: none;
  padding-left: 1em;
  flex: 1;
}

.about__list {
  font-size: var(--size-sm);
  color: var(--clr-slate400);
}

.about__list::before {
  content: "";
  margin-left: 0.5em;
}

.about__list_img {
  display: inline;
}

.about__img-wrapper {
  margin: 0 auto;
}

.about__img {
  width: 28.6875rem;
}

.icons__color {
  filter: brightness(0) invert(1);
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
  color: var(--clr-slate400);
  font-size: var(--size-sm);
  margin: 1rem 0;
}

.featured__lists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  color: var(--clr-slate400);
  text-transform: capitalize;
}

.featured__info-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.featured__info-container div {
  flex: 1;
  min-width: 250px;
}

.featured__img-container {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}

.featured__img-wrapper {
  position: relative;
}

.featured__img-wrapper::after {
  content: "";
  background-color: rgba(124, 58, 237, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: background-color 0.3s;
}

.featured__img-wrapper:hover::after {
  background-color: rgba(124, 58, 237, 0.1);
}

.work {
  text-align: center;
}

.work__title {
  font-size: var(--size-2xl);
  color: var(--clr-light);
}

.work__description {
  max-width: 60ch;
  font-size: var(--size-sm);
  color: var(--clr-slate400);
  margin: 1rem auto;
}

.work__hr {
  border: 0;
  height: 5px;
  margin-bottom: 20px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), #db2777, rgba(0, 0, 0, 0))
}

.work__project-title {
  font-size: var(--size-base);
  margin-bottom: 1rem;
}

.work__img-wrapper {
  position: relative;
}

.bording__top {
  border-inline-start: 4px solid;
  border-block-start: 4px solid;
  border-image-source:
    radial-gradient(circle at top left,
      #db2777,
      transparent 45%);
  border-image-slice: 1;
}

.bording__bottom {
  border-inline-end: 4px solid;
  border-block-end: 4px solid;
  margin-top: .5em;
  border-image-source:
    radial-gradient(circle at bottom right,
      #db2777,
      transparent 45%);
  border-image-slice: 1;
}

.work__img-wrapper::after {
  content: "";
  background-color: rgba(124, 58, 237, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: background-color 0.3s;
}

.work__img-wrapper:hover::after {
  background-color: rgba(124, 58, 237, 0.2);
}

.work__project:not(:last-child) {
  margin-bottom: 5rem;
}

.work__project-description1 {
  font-size: var(--size-sm);
  color: var(--clr-slate400);
  margin: 1rem 0;
}

.work__project-description2 {
  font-size: var(--size-sm);
  color: var(--clr-slate200);
  margin-bottom: 1rem;
}

.work__project-btn {
  font-size: var(--size-sm);
}

.work__project-subtitle {
  display: none;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  position: relative;
}

.contact__title {
  font-size: var(--size-2xl);
  color: var(--clr-light);
  text-transform: capitalize;
  position: relative;
}



.contact__description {
  font-size: var(--size-sm);
  color: var(--clr-slate400);
  max-width: 60ch;
}

.contact__btn {
  font-size: var(--size-sm);
}

.contact__icons {
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-top: 2em;
}

.contact__icons_info {
  display: flex;
  justify-content: center;
  gap: 0.5em;
}

/* XS */
@media (min-width: 475px) {

  /* -----------------Herói--------------- */
  .hero {
    gap: 1.5rem;
  }

  .hero__img {
    aspect-ratio: 2 / 2;
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

  .featured__img-container {
    margin-top: 1.5rem;
    grid-gap: 1.5rem;
  }

  /* ----------Projetos------------- */
  .work__title {
    font-size: var(--size-3xl);
  }

  .work__description {
    font-size: var(--size-base);
    margin: 1.5rem auto;
  }

  .work__project-title {
    font-size: var(--size-lg);
    margin-bottom: 1.5rem;
  }

  .work__project-description1 {
    font-size: var(--size-base);
    margin: 1.5rem 0;
  }

  .work__project-description2 {
    font-size: var(--size-base);
    margin-bottom: 1.5rem;
  }

  .work__project-btn {
    font-size: var(--size-base);
  }

  /* ----------Contatos------------- */
  .contact {
    gap: 1.5rem;
  }

  .contact__title {
    font-size: var(--size-3xl);
  }

  .contact__description {
    font-size: var(--size-base);
  }

  .contact__btn {
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

  /* ------------Destaque---------- */
  .featured__img-container {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  /* -------------Projetos------------- */
  .work__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "image1 content1"
      "content2 image2"
      "image3 content3"
      "content4 image4"
      "image5 content5"
      "content6 image6";
    place-items: center;
  }

  .work__image1 {
    grid-area: image1;
  }

  .work__image2 {
    grid-area: image2;
  }

  .work__image3 {
    grid-area: image3;
  }

  .work__image4 {
    grid-area: image4;
  }

  .work__image5 {
    grid-area: image5;
  }

  .work__image6 {
    grid-area: image6;
  }

  .work__content1 {
    grid-area: content1;
  }

  .work__content2 {
    grid-area: content2;
  }

  .work__content3 {
    grid-area: content3;
  }

  .work__content4 {
    grid-area: content4;
  }

  .work__content5 {
    grid-area: content5;
  }

  .work__content6 {
    grid-area: content6;
  }

  .work__project {
    padding: 0 1rem;
  }

  .work__project-title {
    display: none;
  }

  .work__project-description1 {
    font-size: var(--size-xs);
    margin: 1em 0;
  }

  .work__project-description2 {
    font-size: var(--size-xs);
    margin-bottom: 1em;
  }

  .work__project-btn {
    font-size: var(--size-xs);
  }

  .work__project:not(:last-child) {
    margin-bottom: 0;
  }

  .work__project-subtitle {
    display: block;
    font-size: var(--size-base);
  }
}

/* md */
@media (min-width: 768px) {
  .work__project-description1 {
    font-size: var(--size-sm);
  }

  .work__project-description2 {
    font-size: var(--size-sm);
  }

  .work__project-btn {
    font-size: var(--size-sm);
  }

  .work__project-subtitle {
    font-size: var(--size-lg);
  }
}

/* LG */
@media (min-width: 1024px) {
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
    aspect-ratio: 2.5 / 2.5;
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

  /* ----------Projetos------------- */
  .work__title {
    font-size: var(--size-4xl);
  }

  .work__description {
    font-size: var(--size-lg);
  }

  .work__project-description1 {
    font-size: var(--size-base);
  }

  .work__project-description2 {
    font-size: var(--size-base);
  }

  .work__project-description3 {
    font-size: var(--size-base);
  }

  .work__project-btn {
    font-size: var(--size-base);
  }

  .work__project-subtitle {
    font-size: var(--size-xl);
  }

  /* ----------Contatos------------- */
  .contact__title {
    font-size: var(--size-4xl);
  }

  .contact__description {
    font-size: var(--size-lg);
  }

  .contact__btn {
    font-size: var(--size-lg);
  }
}

/* XL */
@media (min-width: 1280px) {

  /* --------------Herói--------------- */
  .hero {
    gap: 2rem;
  }

  .hero__img {
    aspect-ratio: 3 / 3;
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

  .featured__lists {
    gap: 1em;
  }

  .featured__label {
    font-size: var(--size-2xl);
  }

  .featured__info-container {
    flex-direction: row;
    gap: 0.1rem;
  }

  .featured__info-container div {
    min-width: 150px;
  }

  .featured__info {
    font-size: var(--size-xl);
  }

  .featured__img-container {
    margin-top: 2rem;
    grid-gap: 2rem;
  }

  /* ----------Projetos------------- */
  .work__title {
    font-size: var(--size-5xl);
  }

  .work__description {
    font-size: var(--size-xl);
    margin: 2rem auto;
  }

  .work__project-description1 {
    font-size: var(--size-lg);
  }

  .work__project-description2 {
    font-size: var(--size-lg);
  }

  .work__project-description3 {
    font-size: var(--size-lg);
  }

  .work__project-btn {
    font-size: var(--size-lg);
  }

  .work__project-subtitle {
    font-size: var(--size-2xl);
  }

  .work__container {
    width: 80%;
    margin: 0 auto;
  }

  /* ----------Contatos------------- */
  .contact {
    gap: 2rem;
  }

  .contact__title {
    font-size: var(--size-5xl);
  }

  .contact__description {
    font-size: var(--size-xl);
  }

  .contact__btn {
    font-size: var(--size-xl);
  }
}

/* 2xl */
@media (min-width: 1536px) {
  .work__container {
    width: 70%;
  }
}
</style>

<!-- src="https://via.placeholder.com/350x360"
src="https://via.placeholder.com/1454x964"
src="https://via.placeholder.com/1902x965"
src="https://via.placeholder.com/1403x967"
src="https://via.placeholder.com/1903x790"
src="https://via.placeholder.com/415x726"
src="https://via.placeholder.com/423x735"
src="https://via.placeholder.com/1023x576"
src="https://via.placeholder.com/1023x573" -->
