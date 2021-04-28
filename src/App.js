import logo from './logo.svg';
import './App.css';
import "./Styles/Typography/typography.scss";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {HashRouter} from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
