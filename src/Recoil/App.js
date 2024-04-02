
import {RecoilItem} from "./RecoilItem";
import { useRecoilState } from "recoil";

import './App.css';
import DoubleCounter from "./DoubleCounter";
import {Provider} from "react-redux"
import store from "../Redux/store"
import { Counter } from "../Redux/Counter";

function App() {

  
  const [count, setCount] = useRecoilState(RecoilItem);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>By using the react recoil</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <DoubleCounter />
      <p>--------------------------------------------------------------------------------------------------------------------------------------------</p>
      <Provider store = {store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;

//Atoms are like creating default value for state change.
//useRecoilState is used to change to atom.
//useRecoilValue is used to get value from atom.
//selector used to compute the derived value from atom like double.
