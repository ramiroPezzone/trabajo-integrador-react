import { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import MovieList from './pages/MovieList';
import { Navbar } from './components/Navbar';
import MovieDetails from './pages/MovieDetails';
import ComingSoon from './pages/ComingSoon';
import NoPageFound from './components/NoPageFound';
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
              text: 'Home'
            },
            {
              id: 'favs',
              href: '/favs',
              text: 'Favoritos'
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
          <Route path='/favs' component={MovieDetails} />
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
