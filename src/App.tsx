import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
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

    </>
  );
}

export default App;
