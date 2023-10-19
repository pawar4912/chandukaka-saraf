import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './scss/style.scss';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <div className="main-body-container">
          <Suspense>
            <Routes>
              {routes.map(
                (route) => route.element && (
                  <Route
                    key={route.name}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    strict={route.strict}
                  />
                ),
              )}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
