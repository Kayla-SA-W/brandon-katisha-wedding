import React from 'react';
import { CanEnterProvider } from './src/context/can-enter-context';

export const wrapRootElement = ({ element }) =>{ 
  if(typeof window !== 'undefined'){
    return <CanEnterProvider>{element}</CanEnterProvider>
  }

  return <div/>
};
