<template>
  <div class="header container">
    <nav>
      <ul class="header__menu">
        <li class="locale-changer">
          <select v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          </select>
        </li>
        <li>
          <a class="header__link" href="#about">{{ $t('Sobre')}}</a>
        </li>
        <!-- <li>
          <a class="header__link" href="#featured">{{ $t('Destaque')}}</a>
        </li> -->
        <li>
          <a class="header__link" href="#contact">{{ $t('Contato')}}</a>
        </li>
        <li class="header__line"></li>
        <li>
          <button id="theme-toggle" class="header__sun" @click="darkMode()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </svg>
          </button>
        </li>
        <li>
          <a class="header__resume btn" href="/archives/Currículo_Danilo_Oliveira.pdf" download>{{ $t('Curriculo')}}</a>
        </li>
        <li>
          <a class="header__resume btn-second" href="/archives/Currículo_Danilo_Oliveira_EN.pdf" download>{{ $t('CurriculoEN')}}</a>
        </li>
      </ul>
      <button class="header__bars" @click="mobileNavig()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </nav>
  </div>
  <!-- Mobile Navigation -->
  <div
    class="mobile-nav"
    :style="{
      display: isMobileNavOpen ? 'flex' : 'none',
    }"
  >
    <nav>
      <ul class="mobile-nav__menu">
        <li class="locale-changer">
          <select v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          </select>
        </li>
        <li>
          <a href="#about" class="mobile-nav__link" @click="mobileLinks()"
            >{{ $t('Sobre')}}</a
          >
        </li>
        <!-- <li>
          <a href="#featured" class="mobile-nav__link" @click="mobileLinks()"
            >{{ $t('Destaque')}}</a
          >
        </li> -->
        <li>
          <a href="#contact" class="mobile-nav__link" @click="mobileLinks()"
            >{{ $t('Contato')}}</a
          >
        </li>
        <li class="mobile-nav__link-line"></li>
        <li>
          <button id="theme-toggle" class="mobile-nav__sun" @click="darkMode()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </svg>
          </button>
        </li>
        <li>
          <a href="/archives/Currículo_Danilo_Oliveira.pdf" class="mobile-nav__btn btn">{{ $t('Curriculo')}}</a>
        </li>
        <li>
          <a href="/archives/Currículo_Danilo_Oliveira_EN.pdf" class="mobile-nav__btn btn-second" download>{{ $t('CurriculoEN')}}</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- End of Mobile Navigation -->
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMobileNavOpen: false,
    };
  },

  // mounted() {
  //   this.persistLightMode();
  // },

  methods: {
    mobileNavig() {
      //state
      this.isMobileNavOpen = !this.isMobileNavOpen;

      if (this.isMobileNavOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
    mobileLinks() {
      //state
      this.isMobileNavOpen = !this.isMobileNavOpen;

      if (!this.isMobileNavOpen) {
        document.body.style.overflowY = "auto";
      }
    },
    darkMode() {
      //State
      const theme = localStorage.getItem("theme");
      //icons
      const dots = document.querySelectorAll(".icons__color");

      //Events
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode");
        dots.forEach((icons__color) => {
          icons__color.style.filter = "brightness(0)";
        });
      } else {
        localStorage.removeItem("theme");
        document.body.removeAttribute("class");
        dots.forEach((icons__color) => {
          icons__color.style.filter = "brightness(0) invert(1)";
        });
      }
    },
    // persistLightMode() {
    //   //State
    //   const theme = localStorage.getItem("theme");
    //   //On Mount
    //   theme && document.body.classList.add(theme);
    // },
  },
};
</script>

<style>
@import "../assets/main.css";
@import "../assets/utils.css";

.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  z-index: 9999;
}

.header__menu {
  display: none;
}

.header__bars {
  color: var(--clr-light);
  width: var(--size-2xl);
  height: var(--size-2xl);
  display: block;
}

.mobile-nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: var(--clr-dark);
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.mobile-nav__menu {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.mobile-nav__link {
  font-size: var(--size-sm);
  text-decoration: none;
  font-weight: 600;
  color: var(--clr-slate600);
  letter-spacing: -0.05em;
  transition: color 0.3s;
}

.mobile-nav__link:hover {
  color: var(--clr-darkpurple);
}

.mobile-nav__link-line {
  border: 1px solid var(--clr-slate800);
  padding-right: 1.5rem;
}

.mobile-nav__sun {
  display: block;
  width: var(--size-xl);
  height: var(--size-xl);
  color: var(--clr-slate600);
}

.mobile-nav__btn {
  font-size: var(--size-sm);
}

/* MD */
@media (min-width: 768px) {
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
    color: var(--clr-darkpurple);
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

  .header__resume {
    font-size: var(--size-xs);
  }

  .header__bars {
    display: none;
  }
}

/* LG */
@media (min-width: 1024px) {
  .header__link {
    font-size: var(--size-sm);
  }

  .header__sun {
    width: var(--size-xl);
    height: var(--size-xl);
  }

  .header__resume {
    font-size: var(--size-sm);
  }
}
</style>
