import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-black " href="#">Elias Otero</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto text-black">
          <a className="nav-link" href="#">Nada</a>
          <a className="nav-link" href="#">Nada</a>
          <a className="nav-link" href="#">Nada</a>
          <a className="nav-link" href='#'>Nada</a>
        </div>
        </div>
        </div>
      </nav>
    </header>  
  );
}

export default App;
