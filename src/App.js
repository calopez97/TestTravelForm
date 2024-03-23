<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import AppRouter from "./routers/AppRouter";

const App = () => {
   
  return(
     <>
        <AppRouter/>
     </>
  );
};
>>>>>>> 479f8fa15a1b99d9c93d5b58ec50d5b04b620289

export default App;
