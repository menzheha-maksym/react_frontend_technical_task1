import './App.css';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import MainPage from './components/mainPage/MainPage.component';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage/>
      <Footer />
    </div>
  );
}

export default App;
