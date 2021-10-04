import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Cristina Rojas.</p>
        <a
          className="App-link"
          href="https://learntechsystems.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tech Systems
        </a>
      </header>
    </div>
  );
}

export default App;
