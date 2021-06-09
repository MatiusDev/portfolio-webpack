import '@styles/Global.css';

import Header from "@template/Header";
import About from '@pages/About';
import Home from '@pages/Home';
import Devs from './pages/Devs';
import Contact from './pages/Contact';

const App = () => {
  return `
    ${Header()}

    ${Home()}

    ${About()}

    ${Devs()}

    ${Contact()}
  `;
};

export default App;
