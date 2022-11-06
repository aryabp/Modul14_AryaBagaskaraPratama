import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title/>
        
      </header>
      <div className="App-body">
        <div id='table'>
          <Body/>
        </div>
        
      </div>
      <div id='foot'>
          <Footer/>
        </div>
    </div>
 
  );
}

export default App;
