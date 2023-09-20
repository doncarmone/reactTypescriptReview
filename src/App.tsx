import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';
import { Formulario2 } from './components/Formulario2';
function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h1>useEffect - useRef</h1>
      <hr />

      <TimerPadre />

      <h2>UseReducer</h2>
      <hr />
      <ContadorRed />

      <h2>Custom Hooks</h2>
      <hr />
      <Formulario />
      <br />
      <Formulario2 />
      <br />
      <br />
      <br />

    </>
  );
}

export default App;
