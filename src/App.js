import { Fragment } from 'react'
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar
        links={[
          {
            id: Math.random.toString(32).slice(2),
            href: '/',
            text: 'Home'
          }
        ]}
      />
      <MovieList />
      <Footer />
    </Fragment>
  );
}

export default App;
