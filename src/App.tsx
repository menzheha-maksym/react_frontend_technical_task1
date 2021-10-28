import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import MainPage from './components/mainPage/MainPage.component';
import PostDetailsPage from './components/postDetailsPage/PostDetailsPage.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:postId/post-details" component={PostDetailsPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
