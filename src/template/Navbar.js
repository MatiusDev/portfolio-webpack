import '@styles/Navbar.css';

const Navbar = () => {
  return `
    <nav class="nav__container">
      <nav class="nav__desktop">
        <ul class="nav__listitems">
          <li class="nav__item">
            <a href="#">Inicio</a>
          </li>
          <li class="nav__item">
            <a href="#about">Acerca de mí</a>
          </li>
          <li class="nav__item">
            <a href="#">&lt; Matiu Code &#47;&gt;</a>
          </li>
          <li class="nav__item">
            <a href="#devs">Proyectos</a>
          </li>
          <li class="nav__item">
            <a href="#contact">Contáctame</a>
          </li>
        </ul>
      </nav>
      <nav class="nav__responsive">
        <div class="nav__responsive-menu">
          <i class="fas fa-bars"></i>
          <a href="#">&lt; Matiu Code &#47;&gt;</a>
          <div class="nav__responsive-options">
            <ul class="nav__responsive-listitems">
              <li class="nav__responsive-item">
                <a href="#">Inicio</a>
                <hr>
              </li>
              <li class="nav__responsive-item">
                <a href="#about">Acerca de mí</a>
                <hr>
              </li>
              <li class="nav__responsive-item">
                <a href="#devs">Proyectos</a>
                <hr>
              </li>
              <li class="nav__responsive-item">
                <a href="#contact">Contáctame</a>
                <hr>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  `;
};

export default Navbar;