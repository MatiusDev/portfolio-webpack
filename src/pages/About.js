import profile from '@images/profile.png';
import HTML from '@images/html.svg';
import CSS from '@images/css.svg';
import javascript from '@images/javascript.svg';
import typescript from '@images/typescript.svg';
import react from '@images/react.svg';
import angular from '@images/angular.svg';
import git from '@images/git.svg';
import nodejs from '@images/nodejs.svg';
import python from '@images/python.svg';
import java from '@images/java.svg';

import '@styles/About.css';

const About = () => {
  return `
    <section id="about" class="about__section">
      <div class="about__container">
        <div class="about__image">
          <img src="${profile}" alt="me">
        </div>
        <div class="about__skills-container">
          <div class="about__description">
            <h1>Acerca de mí</h1>
            <div class="about__description-content">
              <p>
                Programador con experiencia en desarrollo web y fullstack development, enfocado principalmente en el desarrollo frontend de aplicaciones con JS Vainilla e implementando librerías y frameworks.
              </p>
              <br>
              <p>
                <span>Practicas | </span> Desarrollo de aplicaciones usando técnicas de código ágil, limpio, mantenible y versionado.
              </p>
              <br>
              <p>
                <span>Preferencias | </span>
                Proporcionar soluciones innovadoras que aporten un aprendizaje continuo e impulsen a las empresas en el entorno tecnologico.
              </p>
            </div>
          </div>
          <div class="about__galery">
            <div class="about__galery-title">
              <h2>Tecnologías</h2>
              <hr>
            </div>
            <div class="about__galery-icons">
              <img src="${HTML}" alt="HTML5">
              <img src="${CSS}" alt="CSS3">
              <img src="${javascript}" alt="Javascript">
              <img src="${typescript}" alt="Typescript">
              <img src="${react}" alt="React">
              <img src="${angular}" alt="Angular">
              <img src="${git}" alt="Git">
              <img src="${nodejs}" alt="Nodejs">
              <img src="${python}" alt="Python">
              <img src="${java}" alt="Java">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

export default About;