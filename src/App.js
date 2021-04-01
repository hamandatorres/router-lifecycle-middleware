import './App.css';
import Routes from './Routes';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {Routes}
    </div>
  );
}

export default App;
