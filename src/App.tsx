import { FC } from 'react';
import './api/api';
import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <main>
      <Header />
      <Footer/>
    </main>
  );
};

export default App;
