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
        <div>
          <Suspense>
            <Routes>
              {routes.map(
                (route, idx) => route.element && (
                  <Route
                    key={`${idx}`}
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
