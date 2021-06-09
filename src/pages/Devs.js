import '@styles/Devs.css';

const Devs = () => {
  return `
    <section id="devs" class="devs__section">
      <div class="devs__container">
        <div class="devs__cards">
          <div class="devs__card-item devs__card-work">
            <h2>Front-End</h2>
            <p>Desarrollo de aplicaciones Web con JS Vainilla, Angular y React.</p>
            <a href="#1">20 Proyectos</a>
          </div>
          <div class="devs__card-item devs__description">
            <h2>Caracteristicas</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis accusantium nulla nihil atque dolore harum natus doloremque, unde porro delectus odit voluptatum eligendi impedit earum enim molestias, explicabo ex minima.</p>
          </div>
          <div id="devs__backend-desc" class="devs__card-item devs__description">
            <h2>Caracteristicas</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis accusantium nulla nihil atque dolore harum natus doloremque, unde porro delectus odit voluptatum eligendi impedit earum enim molestias, explicabo ex minima.</p>
          </div>
          <div class="devs__card-item devs__card-work">
            <h2>Back-End</h2>
            <p>Desarrollo de API's REST en Nodejs, desarrollo en Python y Java.</p>
            <a href="#1">10 Proyectos</a>
          </div>
        </div>
      </div>
    </section>
  `;
};

export default Devs;