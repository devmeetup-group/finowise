import { FC } from 'react';
import './api/api';
import Header from './components/Header';
import Landing from './pages/Landing';

const App: FC = () => {
  return (
    <main>
      <Header />
      {/* NO ROUTING YET JUST BUILDING THE PAGES */}
      <Landing />
    </main>
  );
};

export default App;
