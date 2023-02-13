import React, { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import { AppRouter } from './components/AppRouter';

export const App: FC = () => {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </>
  );
};
