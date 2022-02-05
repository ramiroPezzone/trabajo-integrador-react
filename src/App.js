import { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import MovieList from './pages/MovieList';
import { Navbar } from './components/Navbar';
import MovieDetails from './pages/MovieDetails';
import NoPageFound from './components/NoPageFound';
// import { Fav } from './components/Fav';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar
          links={[
            {
              id: Math.random.toString(32).slice(2),
              href: '/',
              text: 'Home'
            }
          ]}
        />
        <Switch>

          <Route exact path='/' component={MovieList} />
          <Route path='/details/:id' component={MovieDetails} />
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
