import logo from './logo.svg';
import './App.css';
import "./Styles/Typography/typography.scss";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
