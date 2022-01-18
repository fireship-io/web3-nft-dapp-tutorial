import Install from './components/Install';
import Home from './components/Home';

function App() {

  if (window.ethereum) {
    return <Home />;
  } else {
    return <Install />
  }
}

export default App;