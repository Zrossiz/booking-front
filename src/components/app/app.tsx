import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/Main/index';
import LoginPage from '../../pages/Login';
import OfferPage from '../../pages/Offer';
import NotFound from '../../pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';


function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/offer/:id' element={<OfferPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
