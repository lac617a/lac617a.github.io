const SKILLS = [
  {
    skill: 'Javascript',
    about: 'Buen conocimiento de JavaScript puro, entendimiento de arreglos, objetos y POO en su totalidad.',
    logo: './assets/img/javascript-com.svg',
  },
  {
    skill: 'Vue [Nuxt]',
    about: 'Manejo de vue2/3, vuex y vue-router y muy buen conocimientos de los hooks',
    logo: './assets/img/vue-com.svg',
  },
  {
    skill: 'React [Nextjs] / React native',
    about: 'Creo que los mejores proyecto que se pueden hacer desde cero y con la ayuda de webpack, le apostaria a React para esto.',
    logo: './assets/img/logo-react.svg',
  },
  {
    skill: 'Sass',
    about: 'Para no ir muy lejos con esta hermosa herramienta podria decir que construi mi propio framework de estilos para ocasiones muy eficaz.',
    logo: './assets/img/sass-com.svg',
  },
]

class CardSkill extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render();
  }

  // Could also be:
  // static observedAttributes = ['skill', 'about', 'logo'];
  static get observedAttributes() {
    return ['skill', 'about', 'logo'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const { skill, about, logo } = this.attributes;
    this.innerHTML = `
      <figure class="logo">
        <img loading="lazy" src="${logo?.value}" alt="${skill?.value}">
        <figcaption>
          <h3>${skill?.value}</h3>
          <p>${about?.value}</p>
        </figcaption>
      </figure>
    `;
  }
}

customElements.define('card-skill', CardSkill);

document.addEventListener('DOMContentLoaded', () => {
  handleNavbar();
  const cardSkills = document.getElementById('cards-skills');
  SKILLS.forEach((data) => {
    const CREATE_CARD_SKILL = document.createElement('card-skill');
    CREATE_CARD_SKILL.classList.add('card');
    CREATE_CARD_SKILL.setAttribute('skill', data.skill);
    CREATE_CARD_SKILL.setAttribute('about', data.about);
    CREATE_CARD_SKILL.setAttribute('logo', data.logo);

    cardSkills.appendChild(CREATE_CARD_SKILL);
  })
});

const handleNavbar = () => {
  const menu = document.getElementById("menu");
  const items = document.getElementById("items");
  
  menu.addEventListener("click",() => {
    items.classList.toggle("is-active");
  });

  items.addEventListener("click",(e) => {
    if (e.target.classList.contains('is-active')) {
      items.classList.toggle("is-active");
    }
  },false);
};
