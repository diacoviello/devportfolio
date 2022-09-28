import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBar from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="main">
      <NavBar />
      <>
        <Suspense fallback={<FallbackSpinner />}>
          <Route exact path="/" component={Home} />
          {data
            && data.sections.map((route) => {
              const SectionComponent = React.lazy(() => import('./components/' + route.component));
              return (
                <Route
                  key={route.headerTitle}
                  path={route.path}
                  component={() => (
                    <SectionComponent header={route.headerTitle} />
                  )}
                />
              );
            })}
        </Suspense>
      </>
    </div>
  );
}

export default MainApp;
