import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter/>
      <Usuario/>
      <h1>useEffect - useRef</h1>
      <hr />

      <TimerPadre/>

      <h2>UseReducer</h2>
      <hr />
      <ContadorRed/>

    </>
  );
}

export default App;
