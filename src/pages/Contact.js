import '@styles/Contact.css';

const Contact = () => {
  const CV_URL = 'https://drive.google.com/u/0/uc?id=1QCkBvGxEcRkJDjcPynNzbdUXb8-1ynhM&export=download';
  const linkedin = 'https://www.linkedin.com/in/mateo-monsalve/';
  const github = 'https://github.com/TheMatius/';
  const whatsapp = 'https://api.whatsapp.com/send?phone=+573137247868';
  const email = 'thematius.monsalve@gmail.com';
  const contactHandler = 'https://usebasin.com/f/dc038d2c7058';

  return `
    <section id="contact" class="contact__section">
      <div class="contact__container">
        <div class="contact__content">
          <div class="contact__phrase">
            <h2>
              Sabemos lo que somos, pero no sabemos lo que podemos ser.
              <span> - William Shakespeare</span>
            </h2>
          </div>
          <div class="contact__menu">
            <button id="contact__btnOpen" class="contact__btnMenu" type="button">
              <i class="fas fa-mail-bulk"></i>
              <span>Contactame ahora</span>
            </button>
            <a href="${CV_URL}" target="_blank" class="contact__btnMenu" download>
              <i class="fas fa-download"></i>
              <span>Descargar CV</span>
            </a>
          </div>
          <div class="contact__footer">
            <div class="contact__icons">
              <a href="${linkedin}" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="${github}" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="${whatsapp}" target="_blank">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:${email}" target="_blank">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
            <div class="contact__copyright">
              <p>Portafolio creado por mí &#169; 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact__form-container">
        <div class="contact__form-wrap">
          <i id="contact__btnClose" class="fas fa-times"></i>
          <h1>Gracias por tu interés, espero que pronto podamos trabajar juntos.</h1>
          <form class="contact__form" action="${contactHandler}" method="POST">
            <div class="contact__name">
              <label for="lblName">Nombre</label>
              <input name="name" type="text" required>
            </div>
            <div class="contact__email">
              <label for="lblEmail">Email</label>
              <input name="email" type="email" required>
            </div>
            <div class="contact__message">
              <label for="lblMessage">Mensaje</label>
              <textarea name="message" required></textarea>
            </div>
            <button id="btnSubmit-contact" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  `
};

export default Contact;