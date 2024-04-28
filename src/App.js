import Home from './components/layout/Home/home';
import Footer from './components/navbar/Footer/footer';
import Header from './components/navbar/Header/header';
import './styles/App.css'

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
