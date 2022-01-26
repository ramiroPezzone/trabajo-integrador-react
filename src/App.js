import { Fragment } from 'react'
import { Navbar } from './components/Navbar';

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
    </Fragment>
  );
}

export default App;
