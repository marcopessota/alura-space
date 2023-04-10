import './styles/globals.scss'
import { Fragment } from 'react';
import HomePage from './pages/home';
import Header from './components/header';

function App() {
  return (
    <Fragment>
      <Header />
      <HomePage />
    </Fragment>
  );
}

export default App;
