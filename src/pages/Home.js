import '@styles/Home.css';

const Home = () => {
  const fullname = 'Mateo Monsalve';
  const profession = 'Frontend Developer';
  return `
    <section class="home__section">
      <div class="home__container">
          <div class="home__title">
              <h1>${fullname}</h1>
              <h2>
                  <span id="terminal">&#62;
                    <span id="terminal__underscore">&#95;</span>
                  </span>
                  ${profession}
              </h2>
          </div>
      </div>
    </section>
  `;
};

export default Home;