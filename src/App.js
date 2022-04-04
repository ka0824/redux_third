import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './modules/counter'


function App() {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>{`현재 숫자는 ${number}입니다.`}</div>
      <button onClick={() => dispatch(increase())}>증가</button>
      <button onClick={() => dispatch(decrease())}>감소</button>
    </div>
  );
}

export default App;
