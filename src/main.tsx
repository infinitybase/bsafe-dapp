import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FuelProvider } from '@fuel-wallet/react';
import { BSafeConnector } from 'bsafe';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from './themes/default.ts';

const bsafe = new BSafeConnector();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FuelProvider
      theme={'dark'}
      fuelConfig={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        connectors: [bsafe as any], // todo: remove this with update on version @fuel-wallet/react
        storage: null,
      }}
    >
      <ChakraProvider theme={defaultTheme}>
        <App />
      </ChakraProvider>
    </FuelProvider>
  </React.StrictMode>
);
