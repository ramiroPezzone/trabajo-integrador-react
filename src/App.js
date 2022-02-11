import { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import MovieList from './pages/js/MovieList';
import { Navbar } from './components/Navbar';
import MovieDetails from './pages/js/MovieDetails';
import ComingSoon from './pages/js/ComingSoon';
import NoPageFound from './components/NoPageFound';
import Favs from './pages/js/Favs';
// import { Fav } from './components/Fav';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar
          links={[
            {
              id: 'home',
              href: '/',
              text: '🏠 Home'
            },
            {
              id: 'favs',
              href: '/favs',
              text: '⭐ Favoritos'
            },
            {
              id: 'comingSoon',
              href: '/coming-soon',
              text: '🔥 PRÓXIMAMENTE 🔥'
            },
          ]}
        />
        <Switch>

          <Route exact path='/' component={MovieList} />
          <Route path='/details/:id' component={MovieDetails} />
          <Route path='/favs' component={Favs} />
          <Route path='/coming-soon' component={ComingSoon} />
          <Route path='*'>
            <NoPageFound />
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
