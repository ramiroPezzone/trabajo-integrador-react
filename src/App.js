import { Fragment } from 'react'
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';

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
        <Route exact path='/' component={MovieList} />
        <Route path='/details/:id' component={MovieDetails} />
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
