import React, { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { useSessionStorage } from '../modules/use-session-storage';

type CanEnterType = {
    canEnter: boolean;
    setCanEnter: Dispatch<SetStateAction<boolean>>;
};

export const CanEnterContext = createContext<CanEnterType>({
   canEnter: false,
   setCanEnter: () => undefined
});

export const CanEnterProvider = ({ children }: PropsWithChildren<{}>) => {
    const [canEnter, setCanEnter] = useSessionStorage('canEnter', false);

    return (
        <CanEnterContext.Provider
            value={{
                canEnter,
                setCanEnter
            }}
        >
            {children}
        </CanEnterContext.Provider>
    );
};

