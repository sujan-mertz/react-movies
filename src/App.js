import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import HomePage from './pages/home'
import "./assets/scss/style.scss";
import MovieDetail from './pages/movieDetail';
import ErrorPage from './pages/404';
import Movies from './pages/movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavLink exact to="/" >Home</NavLink> | 
        <NavLink to="about">About</NavLink> | 
        <NavLink to="contact">Contact</NavLink> | */}
        
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/movie/:id" component={MovieDetail}></Route>
          <Route exact path="/movies" component={Movies}></Route>
          <Route path="*" component={ErrorPage}></Route>
          {/* <Route path="/about" render={()=><AboutPage/>}></Route>
          <Route path="/contact/:id/:name?" component={ContactPage}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
