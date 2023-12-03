import React from 'react';
import { CanEnterProvider } from './src/context/can-enter-context';

export const wrapRootElement = ({ element }) => (
  <CanEnterProvider>{element}</CanEnterProvider>
);
