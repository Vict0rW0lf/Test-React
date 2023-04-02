import logo from './logo.svg';
import MahComponent from './MahComponent';
import ILuvFrontend from './ILuvFrontend';
import CanIHasState from './CanIHasState';
import './App.css';



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ILuvFrontend />
        <MahComponent name={props.componentName}/>
        <CanIHasState />
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

App.defaultProps = {
  componentName: "AAAAAAAAAAAAAAAAAAAAAAAA"
}

export default App;
