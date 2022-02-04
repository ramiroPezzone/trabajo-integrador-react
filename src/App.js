import { Fragment } from 'react'
import Footer from './components/Footer';
import MovieList from './pages/MovieList';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from './pages/MovieDetails';
// import { Navbar2 } from './components/Navbar2';
// import { Fav } from './components/Fav';

function App() {
  return (
    <Fragment>
      {/* <Fav /> */}
      <BrowserRouter>
        {/* <Navbar2 /> */}
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
