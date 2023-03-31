<template>
    <header class="header container">
        <nav>
            <ul class="header__menu">
                <li>
                    <a class="header__link" href="#about">Sobre</a>
                </li>
                <li>
                    <a class="header__link" href="#featured">Trabalhos</a>
                </li>
                <li>
                    <a class="header__link" href="#contact">Contato</a>
                </li>
                <li class="header__line"></li>
                <li>
                    <button class="header__sun">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>
                    </button>
                </li>
                <li>
                    <a class="header__resume btn" href="#">Currículo</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Navbar',
}

</script>

<style scoped>
@import '../assets/main.css';

.header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.header__menu {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 2em;
}

.header__link {
    font-size: var(--size-xs);
    text-decoration: none;
    font-weight: 600;
    color: var(--clr-slate600);
    letter-spacing: -0.05em;
    transition: color 0.3s;
}

.header__link:hover {
    color: var(--clr-rose);
}

.header__line {
    border: 1px solid var(--clr-slate600);
    padding-top: 1.5em;
}

.header__sun {
    display: block;
    color: var(--clr-slate600);
    width: var(--size-base);
    height: var(--size-base);
}
</style>